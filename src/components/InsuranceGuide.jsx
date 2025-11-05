import React from "react";
import { Car, Building2, Briefcase, Heart, CheckCircle2 } from "lucide-react";

export default function InsuranceGuide() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Insurance selection guide</h2>
        <p className="mt-2 text-slate-600">Clear, practical pointers to help first-time buyers choose cover that fits Indian needs and budgets.</p>
      </header>

      <div className="grid gap-6">
        <GuideCard icon={<Heart className="h-6 w-6" />} title="Health Insurance" points={[
          "Choose sum insured based on city and hospital type; metro families often need ₹10–20L.",
          "Room rent limit affects eligible treatments; aim for no cap or proportionate deduction-free plans.",
          "Disclose pre-existing diseases (PED) honestly; understand waiting periods and restore benefits.",
          "Check cashless network quality near your residence and workplace.",
        ]} />

        <GuideCard icon={<Car className="h-6 w-6" />} title="Motor Insurance" subtitle="2-wheelers, 4-wheelers, commercial" points={[
          "Opt for comprehensive (OD + TP) cover; TP-only is legally compliant but leaves your vehicle unprotected.",
          "Set the right IDV — too low leads to lower payouts; too high increases premium unnecessarily.",
          "Add-ons to consider: Zero Dep, Engine Protect (flood-prone areas), RTI (new cars), Roadside Assistance.",
          "Commercial vehicles: pay attention to permits, driver licence class, and payload to avoid claim issues.",
        ]} />

        <GuideCard icon={<Briefcase className="h-6 w-6" />} title="Workmen Compensation" points={[
          "Mandatory for most establishments employing workers; aligns with statutory liabilities.",
          "Ensure accurate wage roll and occupation classification to avoid underinsurance disputes.",
          "Maintain safety and training records — crucial for claim defensibility.",
        ]} />

        <GuideCard icon={<Building2 className="h-6 w-6" />} title="Building / Property" points={[
          "Insure on reinstatement value (new-for-old) including plinth & foundation as applicable.",
          "Undervaluation causes average clause deductions; get a valuation to set correct sum insured.",
          "Consider add-ons: STFI, Earthquake, Burglary, Short-circuit, Loss of Rent/Profit for businesses.",
        ]} />
      </div>
    </section>
  );
}

function GuideCard({ icon, title, subtitle, points }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-700">{icon}</div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {points.map((p, idx) => (
          <li key={idx} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" /> {p}</li>
        ))}
      </ul>
    </div>
  );
}
