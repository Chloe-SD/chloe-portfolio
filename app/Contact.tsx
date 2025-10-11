"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqazjbad"); // ← Formspree form ID

  if (state.succeeded) {
    return (
      <div
        className="rounded-3xl border border-slate-200 dark:border-slate-800 p-8 text-center bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm"
        role="status"
        aria-live="polite"
      >
        <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-300 mb-2">Message sent!</h3>
        <p className="text-slate-700 dark:text-slate-300">Thanks for reaching out — I’ll reply within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 grid gap-4 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm"
      aria-labelledby="contact-title"
    >
      {/* spam honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {/* optional subject to tag submissions */}
      <input type="hidden" name="subject" value="New inquiry from codebychloe.com" />
      <h2 id="contact-title" className="text-2xl font-bold text-white mb-4">Contact Chloe</h2>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">
          Name<span aria-hidden="true" className="text-pink-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          maxLength={60}
          placeholder="Your name"
          className="w-full rounded-lg border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email<span aria-hidden="true" className="text-pink-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          maxLength={100}
          placeholder="your.email@company.com"
          className="w-full rounded-lg border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-rose-600" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message<span aria-hidden="true" className="text-pink-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-required="true"
          maxLength={1000}
          placeholder="Tell me about your project, timeline, or questions about my work..."
          className="w-full rounded-lg border border-rose-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-rose-600" />
      </div>

      <p id="contact-note" className="text-xs text-slate-500">Your info is used only to respond to your message. No marketing emails.</p>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 font-medium hover:opacity-90 disabled:opacity-60"
        >
          {state.submitting ? "Sending…" : "Send Message"}
        </button>
        
      </div>
    </form>
  );
}