"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

const serviceOptions = [
  "New Website",
  "Website Redesign",
  "Website Care",
  "Business Automation",
  "Advertising Management",
  "Landing Page",
  "Custom Development",
  "Not Sure Yet",
];
const budgets = [
  "Under $3,000",
  "$3,000–$5,499",
  "$5,500–$8,999",
  "$9,000–$15,000",
  "$15,000+",
  "Not sure yet",
];
const timelines = [
  "As soon as practical",
  "Within 1–2 months",
  "Within 3–4 months",
  "Later this year",
  "Just exploring",
];

type Errors = Record<string, string>;

export default function ConsultationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};
    const required = [
      ["firstName", "Enter your first name."],
      ["lastName", "Enter your last name."],
      ["email", "Enter your email address."],
      ["business", "Enter your business name."],
      ["service", "Choose a service interest."],
      ["budget", "Choose an estimated budget."],
      ["timeline", "Choose a desired timeline."],
      ["message", "Tell us a little about your project."],
    ] as const;
    required.forEach(([name, message]) => {
      if (!String(data.get(name) ?? "").trim()) next[name] = message;
    });
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!data.get("consent"))
      next.consent = "Consent is required before submitting.";
    setErrors(next);
    setNotice("");
    if (Object.keys(next).length) {
      requestAnimationFrame(() =>
        form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus(),
      );
      return;
    }
    setNotice(
      `Online delivery is not connected yet. Your information has not been sent. Please email ${site.email} to start the conversation.`,
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-6"
      aria-describedby="form-status"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          name="firstName"
          label="First name"
          error={errors.firstName}
          required
        />
        <Field
          name="lastName"
          label="Last name"
          error={errors.lastName}
          required
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          name="email"
          label="Email"
          type="email"
          error={errors.email}
          required
        />
        <Field
          name="phone"
          label="Phone (optional)"
          type="tel"
          error={errors.phone}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          name="business"
          label="Business name"
          error={errors.business}
          required
        />
        <Field
          name="website"
          label="Website URL (optional)"
          type="url"
          error={errors.website}
          placeholder="https://"
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
          options={budgets}
          error={errors.budget}
        />
        <SelectField
          name="timeline"
          label="Desired timeline"
          options={timelines}
          error={errors.timeline}
        />
      </div>
      <label className="grid gap-2" htmlFor="message">
        <Label text="Message" required />
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
          placeholder="What would you like to improve or build?"
        />
        {errors.message && (
          <ErrorText id="message-error">{errors.message}</ErrorText>
        )}
      </label>
      <Field name="referral" label="How did you hear about us?" />
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
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn-brass group">
          Review Submission{" "}
          <Send
            size={17}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
        <p className="text-sm text-taupe">
          Required fields are marked with an asterisk.
        </p>
      </div>
      <p
        id="form-status"
        role="status"
        className="border-l-2 border-foothill pl-4 text-sm text-charcoal-soft"
      >
        {notice ||
          "This form currently validates your details but does not transmit them. No information is sent until delivery is connected."}
      </p>
    </form>
  );
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
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2" htmlFor={name}>
      <Label text={label} required={required} />
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
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
  options: string[];
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
