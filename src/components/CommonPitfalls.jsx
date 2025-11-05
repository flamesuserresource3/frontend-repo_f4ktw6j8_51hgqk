import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function CommonPitfalls() {
  const pitfalls = [
    {
      title: "Non-disclosure or incomplete disclosure",
      consequence: "Claims rejected for misrepresentation; long-term policy issues.",
      prevention: "Disclose every relevant medical condition, modification, or prior incidents — let the insurer underwrite transparently.",
    },
    {
      title: "Room rent and proportionate deduction",
      consequence: "Hospital bills reimbursed partially leading to large out-of-pocket expenses.",
      prevention: "Choose plans without restrictive room rent caps or ensure cap aligns with target hospital category.",
    },
    {
      title: "Underinsurance (Average clause)",
      consequence: "Payout reduced in proportion to undervaluation for property and business policies.",
      prevention: "Get proper valuation and include all components (machinery, interiors, stock) while setting sum insured.",
    },
    {
      title: "Wrong IDV and missing add-ons in motor",
      consequence: "Lower claim value and exclusions for engine damage, depreciation, or total loss.",
      prevention: "Match IDV to market value and add Zero Dep/Engine Protect/RTI based on vehicle age and risk.",
    },
    {
      title: "Lapses in documentation & timelines",
      consequence: "Delays or denials due to missed intimation, FIRs, survey, or pre-authorization steps.",
      prevention: "Follow the claim checklist; inform insurer immediately and keep records of all communication.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Common pitfalls to avoid</h2>
        <p className="mt-2 text-slate-600">Mistakes that often lead to claim rejections — and how to prevent them.</p>
      </header>

      <div className="space-y-4">
        {pitfalls.map((p, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-amber-50 p-2 text-amber-600"><AlertTriangle className="h-5 w-5" /></div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700"><span className="font-medium">Consequence:</span> {p.consequence}</p>
                <p className="mt-1 text-sm text-slate-700"><span className="font-medium">Prevention:</span> {p.prevention}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-800">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-5 w-5" />
          <p className="text-sm">Unsure if your claim stands a chance? Share your documents for a quick assessment before escalating with the insurer or Ombudsman.</p>
        </div>
      </div>
    </section>
  );
}
