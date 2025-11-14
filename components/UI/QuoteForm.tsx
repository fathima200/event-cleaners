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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll send you a quote within 24 hours.");
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
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors"
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
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors"
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
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-slate-900 text-sm font-medium tracking-[-0.56px] leading-[16.8px] mb-2 uppercase font-geist">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors"
        >
          <option value="">Select a service</option>
          <option value="event-cleaning">Event Cleaning</option>
          <option value="parking-lot">Parking Lot Cleaning</option>
          <option value="pressure-washing">Pressure Washing</option>
          <option value="snow-removal">Snow Removal</option>
          <option value="multiple">Multiple Services</option>
          <option value="not-sure">Not Sure</option>
        </select>
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
          placeholder="Tell us about your project..."
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors resize-none"
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
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl font-geist text-base tracking-[-0.64px] focus:outline-none focus:border-yellow-400 transition-colors"
        />
      </div>



      <button
        type="submit"
        className="w-full bg-yellow-400 text-slate-900 px-10 py-5 rounded-full font-medium text-base tracking-[-0.64px] leading-6 hover:bg-yellow-300 transition-colors font-geist"
      >
        Send Request
      </button>
    </form>
  );
}