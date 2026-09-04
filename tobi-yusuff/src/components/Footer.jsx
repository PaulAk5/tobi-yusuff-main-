import { useState } from "react";
import emailjs from "@emailjs/browser";
import { NAV_LINKS } from "../data/constants";

const EMAILJS_SERVICE_ID  = "service_c3rxtwz";
const EMAILJS_TEMPLATE_ID = "template_qmq52xl";
const EMAILJS_PUBLIC_KEY  = "SsghvD1gWenFfcI9C";
const GOOGLE_SHEET_URL    = "https://script.google.com/macros/s/AKfycby2abEjwaWdQB3b_X8JnmnZsm6Zit6G-ZIBgIxmBZusUKtd-YR5nCclDI-5EJ5veNe3/exec";

export default function Footer({ navigate }) {
  const [form, setForm]     = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setStatus("loading");
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email }),
      });
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { to_name: form.name, to_email: form.email },
        EMAILJS_PUBLIC_KEY
      );
      localStorage.setItem("newsletter_signed", "true");
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

return (
    <footer className="bg-[rgb(219,219,219)] text-ink px-6 md:px-20 pt-10 md:pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pb-12 border-b border-ink/10">

        {/* Brand */}
        <div>
          <h3 className="font-serif text-[2.5rem] text-black leading-relaxed">
            A Strategist Building the Future of Real Assets.
          </h3>
        </div>

        {/* Follow Us + Say Hello side by side */}
        <div className="flex flex-row gap-12">

          <div>
            <div className="text-[1.3rem] font-bold font-serif tracking-[0.18em] text-black mb-5">
              Follow Us
            </div>
            <ul className="list-none flex flex-row items-center gap-3">
              <li>
                <a href="https://linkedin.com/in/yusuff-oluwatobi" target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink/50 no-underline hover:text-ink hover:border-ink transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/tobiyusuff" target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center text-ink/50 no-underline hover:text-ink hover:border-ink transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[1.3rem] font-bold font-serif tracking-[0.18em] text-black mb-5">
              Say Hello
            </div>
            <a href="mailto:hello@tobiyusuff.com" className="text-sm text-ink/60 no-underline hover:text-ink transition-colors">
              hello@tobiyusuff.com
            </a>
          </div>

        </div> {/* ← closes Follow Us + Say Hello */}

        {/* Newsletter */}
        <div>
          <div className="text-[1.3rem] font-bold font-serif tracking-[0.18em] text-black mb-5">
            Newsletter
          </div>

          {status === "success" ? (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8.5" stroke="#0d0d0b" strokeWidth="1"/>
                  <path d="M5 9.5L7.5 12L13 6.5" stroke="#0d0d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-ink">You're subscribed!</span>
              </div>
              <p className="text-xs text-ink/40 leading-relaxed">
                Check your inbox for a confirmation email.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-ink/50 leading-relaxed mb-4">
                Insights on real estate, strategy and finance — straight to your inbox.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  className="w-full px-3 py-2.5 bg-white/50 border border-ink/15 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-ink transition-colors"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="w-full px-3 py-2.5 bg-white/50 border border-ink/15 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-ink transition-colors"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                {status === "error" && (
                  <p className="text-xs text-red-500">Something went wrong. Try again.</p>
                )}

                <button
                  className={`w-full py-2.5 text-[0.72rem] font-medium tracking-[0.1em] uppercase border-none cursor-pointer transition-colors
                    ${status === "loading"
                      ? "bg-ink/20 text-ink/50 cursor-not-allowed"
                      : "bg-ink text-cream hover:bg-ink/80"
                    }`}
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>

                <p className="text-xs text-ink/30">No spam. Unsubscribe anytime.</p>
              </div>
            </>
          )}
        </div> {/* ← closes Newsletter */}

      </div> {/* ← closes grid */}

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-ink/35 gap-4">
        <span>Oluwatobi Yusuff © 2026. All Rights Reserved.</span>
        {/* <div className="flex gap-5">
          <a href="https://linkedin.com/in/yusuff-oluwatobi" target="_blank" rel="noreferrer" className="text-xs text-ink/40 no-underline tracking-[0.08em] uppercase hover:text-ink transition-colors">LinkedIn</a>
          <a href="https://instagram.com/tobiyusuff" target="_blank" rel="noreferrer" className="text-xs text-ink/40 no-underline tracking-[0.08em] uppercase hover:text-ink transition-colors">Instagram</a>
        </div> */}
      </div>

    </footer>
  );
}