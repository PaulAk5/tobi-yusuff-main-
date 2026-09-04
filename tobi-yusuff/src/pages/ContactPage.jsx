import { useState } from "react";
import SEO from "../components/SEO";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", type: "", subject: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const fieldClass = "w-full pb-3 border-b border-border bg-transparent font-sans text-sm text-ink outline-none focus:border-gold transition-colors placeholder:text-muted/60";

  return (
    <section className="min-h-screen px-6 md:px-20 pt-48 pb-32 bg-cream">
      <SEO
        title="Contact Tobi Yusuff — Speaking, Advisory & Media"
        description="Invite Tobi for a speaking engagement, advisory session or media appearance. Get in touch via email or connect on LinkedIn and Instagram."
        image="https://tobiyusuff.com/wp-content/uploads/2026/01/Gemini_Generated_Image_cl7luvcl7luvcl7l-815x1024.png"
        url="/contact"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start max-w-7xl mx-auto">

        {/* Left — label, heading, description, email */}
        <div>
          <p className="text-[0.90rem] font-serif font-bold tracking-[0.18em] uppercase text-black mb-6">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Talk To Tobi
          </h1>
          <p className="text-sm leading-[1.85] text-muted max-w-sm mb-10">
            To invite Tobi for a speaking engagement, advisory session or media appearance, please share a few details below.
          </p>
          <div className="flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#b8923a" strokeWidth="1.5"/>
              <path d="M2 7l10 7 10-7" stroke="#b8923a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <a href="mailto:hello@tobiyusuff.com" className="text-sm text-muted no-underline hover:text-gold transition-colors">
              hello@tobiyusuff.com
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div className="py-12">
              <p className="text-[0.70rem] font-medium tracking-[0.18em] uppercase text-gold mb-4">Message Sent</p>
              <h2 className="font-serif text-4xl font-light mb-4">Thank you for reaching out.</h2>
              <p className="text-sm leading-[1.85] text-muted">Tobi's team will be in touch shortly.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-8">

              {/* Row 1 — Name & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-end gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mb-3 flex-shrink-0 text-muted">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input className={fieldClass} type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="flex items-end gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mb-3 flex-shrink-0 text-muted">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <input className={fieldClass} type="text" placeholder="Organization" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} />
                </div>
              </div>

              {/* Row 2 — Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-end gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mb-3 flex-shrink-0 text-muted">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input className={fieldClass} type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="flex items-end gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mb-3 flex-shrink-0 text-muted">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input className={fieldClass} type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>

              {/* Row 3 — Type & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-end gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mb-3 flex-shrink-0 text-muted">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <select className={fieldClass} value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                    <option value="">Type Of Enquiry</option>
                    {["Speaking", "Advisory", "Media", "Partnership", "Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="flex items-end gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mb-3 flex-shrink-0 text-muted">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input className={fieldClass} type="text" placeholder="Subject" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
              </div>

              {/* Message */}
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-1 flex-shrink-0 text-muted">
                  <path d="M12 20h-7a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M16 19l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <textarea
                  className={`${fieldClass} resize-none min-h-[80px]`}
                  placeholder="How can we help you? Feel free to get in touch!"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Button + Checkbox */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button
                  className="flex items-center gap-3 px-8 py-4 bg-gold text-white font-serif text-[0.9rem] font-medium tracking-[0.05em] cursor-pointer hover:bg-black transition-colors border-none"
                  onClick={() => { if (form.name && form.email && agreed) setSent(true); }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Get In Touch
                </button>
                <label className="flex items-center gap-2 text-xs text-muted cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={e => setAgreed(e.target.checked)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  I agree that my data is <span className="underline">collected and stored</span>.
                </label>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}