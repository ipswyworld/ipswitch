
import React, { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');

    // Simulate API call
    setTimeout(() => {
      if (name && email && message) {
        setFormState('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormState('error');
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#0B2545] sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-lg text-gray-600">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1F6F8B] focus:border-[#1F6F8B] sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1F6F8B] focus:border-[#1F6F8B] sm:text-sm" 
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1F6F8B] focus:border-[#1F6F8B] sm:text-sm" 
              required
            ></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              disabled={formState === 'loading'}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0B2545] hover:bg-[#1F6F8B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F6F8B] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {formState === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {formState === 'success' && (
          <div className="mt-4 text-center p-3 rounded-md bg-green-100 text-green-800">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {formState === 'error' && (
          <div className="mt-4 text-center p-3 rounded-md bg-red-100 text-red-800">
            Something went wrong. Please check your inputs and try again.
          </div>
        )}
      </div>
    </section>
  );
}
