import React, { useState } from "react";
import { Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Contact us</h2>
        <p className="mt-2 text-slate-600">We respond within 24 business hours. Urgent claim denials get priority.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone" value="+91-98XX-XXX-XXX" />
          <ContactItem icon={<Mail className="h-5 w-5" />} label="Email" value="claims@youradvisory.in" />
          <ContactItem icon={<MessageSquare className="h-5 w-5" />} label="WhatsApp" value="+91-98XX-XXX-XXX" />

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900">Service promise</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" /> Confidential, judgement-free review</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" /> Transparent fees after initial assessment</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" /> Guidance tailored to Indian insurers</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {submitted ? (
            <div className="flex items-start gap-3 text-emerald-700">
              <CheckCircle2 className="mt-0.5 h-5 w-5" />
              <p>Thank you. Your rejected claim inquiry is received. We will reach out shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-semibold text-slate-900">Rejected claim inquiry</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-slate-600">Full name</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-400 focus:outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Phone</label>
                  <input required type="tel" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-400 focus:outline-none" placeholder="+91" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-400 focus:outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Policy type</label>
                <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-400 focus:outline-none">
                  <option>Health</option>
                  <option>Motor - 2W</option>
                  <option>Motor - 4W</option>
                  <option>Motor - Commercial</option>
                  <option>Workmen Compensation</option>
                  <option>Building / Property</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-600">What happened?</label>
                <textarea required rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-slate-400 focus:outline-none" placeholder="Brief description of the claim and rejection reason"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                Request a review
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="rounded-lg bg-slate-100 p-2 text-slate-700">{icon}</div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="font-medium text-slate-900">{value}</p>
      </div>
    </div>
  );
}
