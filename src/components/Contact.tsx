"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { EASE } from "@/lib/motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Front-end demo handler — wire up to Formspree / an API route to send.
    setSent(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-foothill-deep py-24 text-ivory md:py-32"
    >
      <div className="grid-texture-light absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="eyebrow mb-5 text-brass-light">Let&apos;s Talk</p>
          <h2 className="heading-serif text-[clamp(2rem,3.8vw,3rem)] text-ivory">
            Request a consultation
          </h2>
          <p className="mt-4 text-lg text-ivory/80">
            Tell us a little about your business and we&apos;ll be in touch
            within one business day.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mx-auto grid max-w-2xl gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                name="email"
                required
                placeholder="you@business.com"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Business Name">
            <input
              type="text"
              name="business"
              placeholder="Your business"
              className={inputClass}
            />
          </Field>

          <Field label="How can we help?">
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your project..."
              className={`${inputClass} resize-y`}
            />
          </Field>

          <button type="submit" className="btn-brass group w-fit">
            Send Message
            <Send
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-brass-light"
            >
              <CheckCircle2 size={18} />
              Thank you — your message has been noted. We&apos;ll be in touch
              soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-ivory/20 bg-ivory/[0.07] px-4 py-3 text-base font-light text-ivory placeholder:text-ivory/40 transition-all duration-300 focus:border-brass-light focus:bg-ivory/10 focus:outline-none";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.14em] text-ivory/75">
        {label}
      </span>
      {children}
    </label>
  );
}
