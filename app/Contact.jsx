
"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqazjbad");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  return (
    <form name="contactForm" onSubmit={handleSubmit}
    className='flex flex-grow flex-col self-center items-center justify-center'>
      <label htmlFor='Name' className='w-full text-lg'>
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        required
        maxLength={30}
        placeholder='Name'
        className='bg-gray-500 rounded-md border-2 border-fuchsia-200 mb-2 p-2
        w-full text-lg
        shadow-md shadow-purple-800'
      />
      <label htmlFor="email" className='w-full text-lg'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        required
        maxLength={100}
        placeholder='your-email@email.com'
        className='bg-gray-500 rounded-md border-2 border-fuchsia-200 mb-2 p-2
        w-full text-lg
        shadow-md shadow-purple-800'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor='Name' className='w-full text-lg'>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        maxLength={500}
        placeholder='What do you want to chat about?'
        className='bg-gray-500 rounded-md border-2 border-fuchsia-200 mb-6 p-2
        w-full h-40 text-lg
        shadow-md shadow-purple-800'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='border-2 border-fuchsia-200
      rounded-md p-2 m-2 w-40 bg-pink-500 hover:bg-pink-600 font-semibold text-lg
      shadow-md shadow-purple-800'>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;