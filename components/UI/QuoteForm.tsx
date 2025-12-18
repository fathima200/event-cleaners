"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    date: "",
    contactMethod: "email",
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus({ type: 'success', message: 'Request sent successfully! We will get back to you soon.' });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        details: "",
        date: "",
        contactMethod: "email",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus({ type: 'idle' }), 5000);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send request. Please try again.'
      });
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[16.8px] mb-2 uppercase font-geist">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={status.type === 'loading'}
          className="w-full px-5 py-4 bg-white text-slate-900 border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 placeholder:text-gray-400"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[16.8px] mb-2 uppercase font-geist">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={status.type === 'loading'}
          className="w-full px-5 py-4 bg-white text-slate-900 border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 placeholder:text-gray-400"
          placeholder="name@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[16.8px] mb-2 uppercase font-geist">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          disabled={status.type === 'loading'}
          className="w-full px-5 py-4 bg-white text-slate-900 border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 placeholder:text-gray-400"
          placeholder="(555) 000-0000"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[16.8px] mb-2 uppercase font-geist">
          Service Needed
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            disabled={status.type === 'loading'}
            className="w-full px-5 py-4 bg-white text-slate-900 border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 appearance-none cursor-pointer"
          >
            <option value="" disabled>Select a service</option>
            <option value="event-cleaning">Event Cleaning</option>
            <option value="parking-lot">Parking Lot Cleaning</option>
            {/* <option value="pressure-washing">Pressure Washing</option>
            <option value="snow-removal">Snow Removal</option>
            <option value="multiple">Multiple Services</option> */}
            <option value="not-sure">Not Sure</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[16.8px] mb-2 uppercase font-geist">
          Project Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          value={formData.details}
          onChange={handleChange}
          disabled={status.type === 'loading'}
          placeholder="Tell us about your project..."
          className="w-full px-5 py-4 bg-white text-slate-900 border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors resize-none disabled:opacity-50 placeholder:text-gray-400"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[16.8px] mb-2 uppercase font-geist">
          Service Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          disabled={status.type === 'loading'}
          className="w-full px-5 py-4 bg-white text-slate-900 border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors disabled:opacity-50 appearance-none cursor-pointer"
        />
      </div>

      {status.message && (
        <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full bg-yellow-400 text-slate-900 px-10 py-5 rounded-full font-medium text-base tracking-[-0.64px] leading-6 hover:bg-yellow-300 transition-colors font-geist disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status.type === 'loading' ? 'Sending...' : 'Send Request'}
      </button>
    </form>
  );
}
