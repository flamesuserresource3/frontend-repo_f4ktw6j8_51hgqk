import React, { useState } from "react";
import HomePage from "./components/HomePage";
import InsuranceGuide from "./components/InsuranceGuide";
import CommonPitfalls from "./components/CommonPitfalls";
import ContactUs from "./components/ContactUs";
import { Shield, Phone } from "lucide-react";

function App() {
  const [tab, setTab] = useState("home");

  const tabs = [
    { key: "home", label: "Home" },
    { key: "guide", label: "Insurance Guide" },
    { key: "pitfalls", label: "Common Pitfalls" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-slate-900 p-2 text-white">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">ClaimResolve Advisory</p>
              <p className="text-xs text-slate-500">Insurance claim resolution & guidance</p>
            </div>
          </div>
          <nav className="hidden gap-1 md:flex">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  tab === t.key ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
          <button onClick={() => setTab("contact")} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400">
            <Phone className="h-4 w-4" />
            Rejected claim? Consult now
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <div className="mx-auto max-w-6xl px-6 md:hidden">
        <div className="mt-4 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                tab === t.key ? "bg-slate-900 text-white" : "bg-white text-slate-700 shadow-sm"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {tab === "home" && <HomePage onConsult={() => setTab("contact")} />}
        {tab === "guide" && <InsuranceGuide />}
        {tab === "pitfalls" && <CommonPitfalls />}
        {tab === "contact" && <ContactUs />}
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-600">
          <p>Disclaimer: We provide independent advisory services and assistance with documentation and escalation. We operate in compliance with IRDAI guidelines. This website is for informational purposes for the Indian market.</p>
          <p className="mt-2">© {new Date().getFullYear()} ClaimResolve Advisory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
