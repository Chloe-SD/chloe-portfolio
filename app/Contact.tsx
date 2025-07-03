"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqazjbad");
  if (state.succeeded) {
      return (
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-pink-400 mb-4">Message Sent!</h3>
          <p className="text-lg text-gray-300">Thanks for reaching out. I'll get back to you within 24 hours.</p>
        </div>
      );
  }
  return (
    <form name="contactForm" onSubmit={handleSubmit}
    className='flex flex-grow flex-col self-center items-center justify-center'>
      <label htmlFor='name' className='w-full text-lg font-medium mb-2'>
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        required
        maxLength={30}
        placeholder='Your name'
        className='bg-gray-500 bg-opacity-80 rounded-md border-2 border-fuchsia-200 mb-4 p-3
        w-full text-lg placeholder-gray-300 focus:bg-opacity-100 transition-all
        shadow-md shadow-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-400'
      />
      <label htmlFor="email" className='w-full text-lg font-medium mb-2'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        required
        maxLength={100}
        placeholder='your.email@company.com'
        className='bg-gray-500 bg-opacity-80 rounded-md border-2 border-fuchsia-200 mb-4 p-3
        w-full text-lg placeholder-gray-300 focus:bg-opacity-100 transition-all
        shadow-md shadow-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-400'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor='message' className='w-full text-lg font-medium mb-2'>
        Project Details
      </label>
      <textarea
        id="message"
        name="message"
        required
        maxLength={500}
        placeholder='Tell me about your project, timeline, or questions about my work...'
        className='bg-gray-500 bg-opacity-80 rounded-md border-2 border-fuchsia-200 mb-6 p-3
        w-full h-40 text-lg placeholder-gray-300 focus:bg-opacity-100 transition-all resize-none
        shadow-md shadow-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-400'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='border-2 border-fuchsia-200
      rounded-md p-3 w-48 bg-pink-500 hover:bg-pink-600 font-semibold text-lg
      shadow-md shadow-purple-800 transition-all hover:shadow-lg hover:shadow-purple-700
      disabled:opacity-50 disabled:cursor-not-allowed'>
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;