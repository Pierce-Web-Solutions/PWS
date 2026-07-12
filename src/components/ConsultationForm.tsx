"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, Send } from "lucide-react";
import { site } from "@/lib/site";
import { getInitialAttribution } from "@/lib/attribution";
import {
  budgetOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/contact-options";
import { LEAD_MARKER_KEY } from "@/lib/analytics";
import TurnstileWidget from "./TurnstileWidget";

type Errors = Record<string, string>;
type ApiResponse = {
  ok: boolean;
  message?: string;
  errors?: Errors;
  resetTurnstile?: boolean;
  lead?: {
    serviceInterest?: string;
    estimatedBudget?: string;
    leadSource?: string;
  };
};
const genericError = `We couldn’t send your inquiry right now. Please try again, or email ${site.email} directly.`;

export default function ConsultationForm() {
  const router = useRouter();
  const startedAt = useRef(0);
  const submittingRef = useRef(false);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const handleToken = useCallback(
    (token: string) => setTurnstileToken(token),
    [],
  );

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting || submittingRef.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const next = validateForm(data, turnstileToken);
    setErrors(next);
    setNotice("");
    if (Object.keys(next).length) {
      requestAnimationFrame(
        () =>
          form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus() ||
          statusRef.current?.focus(),
      );
      return;
    }

    const attribution = getInitialAttribution();
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    submittingRef.current = true;
    setIsSubmitting(true);
    setNotice("Sending your inquiry…");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          firstName: value(data, "firstName"),
          lastName: value(data, "lastName"),
          email: value(data, "email"),
          phone: value(data, "phone"),
          business: value(data, "business"),
          website: value(data, "website"),
          service: value(data, "service"),
          budget: value(data, "budget"),
          timeline: value(data, "timeline"),
          message: value(data, "message"),
          referral: value(data, "referral"),
          consent: data.get("consent") === "yes",
          honeypot: value(data, "companyWebsite"),
          turnstileToken,
          formStartedAt: startedAt.current || Date.now(),
          currentPage: window.location.pathname.slice(0, 1000),
          ...attribution,
        }),
      });
      const result = (await response.json()) as ApiResponse;
      if (!response.ok || !result.ok) {
        setErrors(result.errors || {});
        setNotice(result.message || genericError);
        if (result.resetTurnstile) {
          setTurnstileToken("");
          setTurnstileReset((key) => key + 1);
        }
        requestAnimationFrame(
          () =>
            form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus() ||
            statusRef.current?.focus(),
        );
        return;
      }
      try {
        sessionStorage.setItem(
          LEAD_MARKER_KEY,
          JSON.stringify({ createdAt: Date.now(), ...result.lead }),
        );
      } catch {}
      router.push("/thank-you");
    } catch {
      setNotice(genericError);
      setTurnstileToken("");
      setTurnstileReset((key) => key + 1);
      requestAnimationFrame(() => statusRef.current?.focus());
    } finally {
      window.clearTimeout(timeout);
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative grid gap-6"
      aria-describedby="form-status"
      aria-busy={isSubmitting}
    >
      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Leave this field empty
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          name="firstName"
          label="First name"
          error={errors.firstName}
          required
          maxLength={100}
        />
        <Field
          name="lastName"
          label="Last name"
          error={errors.lastName}
          required
          maxLength={100}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          name="email"
          label="Email"
          type="email"
          error={errors.email}
          required
          maxLength={254}
        />
        <Field
          name="phone"
          label="Phone (optional)"
          type="tel"
          error={errors.phone}
          maxLength={40}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          name="business"
          label="Business name"
          error={errors.business}
          required
          maxLength={200}
        />
        <Field
          name="website"
          label="Website URL (optional)"
          type="url"
          error={errors.website}
          placeholder="https://"
          maxLength={500}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        <SelectField
          name="service"
          label="Service interest"
          options={serviceOptions}
          error={errors.service}
        />
        <SelectField
          name="budget"
          label="Estimated budget"
          options={budgetOptions}
          error={errors.budget}
        />
        <SelectField
          name="timeline"
          label="Desired timeline"
          options={timelineOptions}
          error={errors.timeline}
        />
      </div>
      <label className="grid gap-2" htmlFor="message">
        <Label text="Message" required />
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
          placeholder="What would you like to improve or build?"
        />
        {errors.message && (
          <ErrorText id="message-error">{errors.message}</ErrorText>
        )}
      </label>
      <Field
        name="referral"
        label="How did you hear about us?"
        maxLength={200}
      />
      <div>
        <label className="flex items-start gap-3 text-sm text-charcoal-soft">
          <input
            type="checkbox"
            name="consent"
            value="yes"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 accent-foothill"
          />
          <span>
            I consent to being contacted by Pierce Web Solutions about this
            inquiry. <span aria-hidden="true">*</span>
          </span>
        </label>
        {errors.consent && (
          <ErrorText id="consent-error">{errors.consent}</ErrorText>
        )}
      </div>
      <div>
        <TurnstileWidget
          siteKey={siteKey}
          resetKey={turnstileReset}
          onToken={handleToken}
        />
        {errors.turnstileToken && (
          <ErrorText id="turnstile-error">{errors.turnstileToken}</ErrorText>
        )}
      </div>
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting || !turnstileToken || !siteKey}
          className="btn-brass group disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Inquiry{" "}
              <Send
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
        <p className="text-sm text-taupe">
          Required fields are marked with an asterisk.
        </p>
      </div>
      <p
        ref={statusRef}
        id="form-status"
        role={notice && notice !== "Sending your inquiry…" ? "alert" : "status"}
        tabIndex={-1}
        className="border-l-2 border-foothill pl-4 text-sm text-charcoal-soft"
      >
        {notice ||
          "Your information is securely verified before it is delivered."}
      </p>
    </form>
  );
}

function value(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim();
}
function validateForm(data: FormData, token: string): Errors {
  const errors: Errors = {};
  const required = [
    ["firstName", "Enter your first name."],
    ["lastName", "Enter your last name."],
    ["email", "Enter your email address."],
    ["business", "Enter your business name."],
    ["service", "Choose a service interest."],
    ["budget", "Choose an estimated budget."],
    ["timeline", "Choose a desired timeline."],
    ["message", "Tell us at least 10 characters about your project."],
  ] as const;
  required.forEach(([name, message]) => {
    if (
      !value(data, name) ||
      (name === "message" && value(data, name).length < 10)
    )
      errors[name] = message;
  });
  const email = value(data, "email");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";
  const website = value(data, "website");
  if (website) {
    try {
      new URL(website);
    } catch {
      errors.website = "Enter a complete URL beginning with https://";
    }
  }
  if (!data.get("consent"))
    errors.consent = "Consent is required before submitting.";
  if (!token) errors.turnstileToken = "Please complete the spam check.";
  return errors;
}

const inputClass =
  "w-full border border-charcoal/20 bg-ivory px-4 py-3 text-base text-charcoal placeholder:text-taupe focus:border-foothill focus:outline-none aria-[invalid=true]:border-red-700";
function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-soft">
      {text}
      {required && <span aria-hidden="true"> *</span>}
    </span>
  );
}
function ErrorText({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <span id={id} className="text-sm text-red-800">
      {children}
    </span>
  );
}
function Field({
  name,
  label,
  type = "text",
  error,
  required,
  placeholder,
  maxLength,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <label className="grid gap-2" htmlFor={name}>
      <Label text={label} required={required} />
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClass}
      />
      {error && <ErrorText id={`${name}-error`}>{error}</ErrorText>}
    </label>
  );
}
function SelectField({
  name,
  label,
  options,
  error,
}: {
  name: string;
  label: string;
  options: readonly string[];
  error?: string;
}) {
  return (
    <label className="grid gap-2" htmlFor={name}>
      <Label text={label} required />
      <select
        id={name}
        name={name}
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClass}
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {error && <ErrorText id={`${name}-error`}>{error}</ErrorText>}
    </label>
  );
}
