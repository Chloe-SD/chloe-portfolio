"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const FORM_ID = "mqazjbad";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <p className="text-xl text-green-400 font-semibold mb-2">Thanks for your message!</p>
        <p className="text-gray-300">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      name="contactForm"
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-full max-w-2xl bg-slate-900 bg-opacity-60 p-6 rounded-lg shadow-lg mx-auto"
      autoComplete="off"
    >
      <label htmlFor="name" className="w-full text-lg mb-1 text-fuchsia-200 font-semibold">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        maxLength={30}
        placeholder="Name"
        autoComplete="name"
        className="bg-gray-700 rounded-md border-2 border-fuchsia-200 mb-3 p-2 w-full text-lg text-white shadow-md shadow-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <label htmlFor="email" className="w-full text-lg mb-1 text-fuchsia-200 font-semibold">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        maxLength={100}
        placeholder="your-email@email.com"
        autoComplete="email"
        className="bg-gray-700 rounded-md border-2 border-fuchsia-200 mb-3 p-2 w-full text-lg text-white shadow-md shadow-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="w-full text-lg mb-1 text-fuchsia-200 font-semibold">
        Message
      </label>
     <textarea
        id="message"
        name="message"
        required
        maxLength={500}
        placeholder="What do you want to build together?"
        className="bg-gray-700 rounded-md border-2 border-fuchsia-200 mb-5 p-2 w-full h-40 text-lg text-white shadow-md shadow-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="border-2 border-fuchsia-200 rounded-md p-2 m-2 w-40 bg-pink-500 hover:bg-pink-600 font-semibold text-lg shadow-md shadow-purple-800 transition-colors disabled:opacity-60"
      >
        {state.submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;