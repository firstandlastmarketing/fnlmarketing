// LeadCaptureForm.jsx

import { useState } from "react";

export default function ChatLeadCaptureForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.project) {
      onSubmit(form);
      setSubmitted(true); // Disable form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-3 bg-white rounded-lg border border-yellow-300">
      <h3 className="font-bold text-gray-800">🚀 Project Kickoff</h3>
      <input
        required
        placeholder="Full Name *"
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
        disabled={submitted}
      />
      <input
        required
        type="email"
        placeholder="Email *"
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
        disabled={submitted}
      />
      <input
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-yellow-400"
        disabled={submitted}
      />
      <textarea
        required
        placeholder="Project details *"
        rows="3"
        value={form.project}
        onChange={e => setForm(f => ({ ...f, project: e.target.value }))}
        className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none focus:ring-2 focus:ring-yellow-400"
        disabled={submitted}
      />
      <button 
        type="submit"
        className="w-full p-2 rounded-md bg-yellow-500 text-white font-bold hover:bg-yellow-600 transition-colors disabled:bg-gray-400"
        disabled={submitted}
      >
        {submitted ? "Sent!" : "Send to Team"}
      </button>
    </form>
  );
}