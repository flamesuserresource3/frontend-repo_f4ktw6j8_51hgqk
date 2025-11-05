import React from "react";
import { ArrowRight, CheckCircle2, Shield, Car, Building2, Briefcase, Heart, Star } from "lucide-react";

export default function HomePage({ onConsult }) {
  return (
    <div className="min-h-[calc(100vh-80px)]">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#6ee7b7_0,transparent_25%),radial-gradient(circle_at_80%_30%,#93c5fd_0,transparent_25%),radial-gradient(circle_at_50%_80%,#c4b5fd_0,transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
            <Shield className="h-4 w-4" />
            Your advocate in complex insurance claims
          </span>
          <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Claim rejected? Get expert resolution and the right coverage guidance
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            We help individuals and businesses in India challenge unfair denials, fix documentation, and select policies that actually protect you when it matters.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={onConsult} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300">
              Free consultation for rejected claims
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10">
              Explore services
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              IRDAI-compliant guidance
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-300" />
              Transparent, client-first approach
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto mt-14 max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Comprehensive insurance advisory</h2>
        <p className="mt-2 text-slate-600">From selecting the right cover to resolving complex, rejected claims.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={<Heart className="h-6 w-6" />} title="Health Insurance" points={["Sum insured & room rent fit", "PED & waiting periods", "Cashless network & claims"]} />
          <ServiceCard icon={<Car className="h-6 w-6" />} title="Motor Insurance" points={["2W, 4W & commercial", "IDV & add-ons explained", "Seamless claim support"]} />
          <ServiceCard icon={<Briefcase className="h-6 w-6" />} title="Workmen Compensation" points={["Legal compliance", "Risk assessment", "Claim documentation"]} />
          <ServiceCard icon={<Building2 className="h-6 w-6" />} title="Building/Property" points={["Fire & burglary cover", "Sum insured valuation", "Underinsurance checks"]} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto mt-14 max-w-6xl px-6">
        <div className="grid items-center gap-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Why choose us</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" /> Expert intervention for rejected claims — policy wording analysis, timelines, and insurer escalation.</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" /> Tailored coverage recommendations for Indian requirements, not one-size-fits-all.</li>
              <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" /> Clear explanations without jargon and proactive documentation support.</li>
            </ul>
            <div className="mt-6">
              <button onClick={onConsult} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300">
                Start your claim review
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-indigo-50 p-6 text-slate-700">
            <h4 className="font-medium text-slate-900">Where we step in</h4>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Point text="Cashless denial at hospital/garage" />
              <Point text="Queries on PED and exclusions" />
              <Point text="Underinsurance disputes" />
              <Point text="Delayed or partial claim payouts" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, points }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3 text-slate-900">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-700">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {points.map((p, idx) => (
          <li key={idx} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" /> {p}</li>
        ))}
      </ul>
    </div>
  );
}

function Point({ text }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm shadow-sm">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
      <span>{text}</span>
    </div>
  );
}
