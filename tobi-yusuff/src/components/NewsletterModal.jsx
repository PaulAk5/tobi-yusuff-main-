import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ── Replace these with your actual values ─────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_9l6hv3n";
const EMAILJS_TEMPLATE_ID = "template_0a3x6k8";
const EMAILJS_PUBLIC_KEY  = "SsghvD1gWenFfcI9C";
const GOOGLE_SHEET_URL    = "https://script.google.com/macros/s/AKfycby2abEjwaWdQB3b_X8JnmnZsm6Zit6G-ZIBgIxmBZusUKtd-YR5nCclDI-5EJ5veNe3/exec";
// ─────────────────────────────────────────────────────────────────────────────

export default function NewsletterModal() {
  const [visible, setVisible]   = useState(false);
  const [form, setForm]         = useState({ name: "", email: "" });
  const [status, setStatus]     = useState("idle"); // idle | loading | success | error
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already signed up or dismissed this session
    const alreadySigned = localStorage.getItem("newsletter_signed");
    const alreadyDismissed = sessionStorage.getItem("newsletter_dismissed");
    if (alreadySigned || alreadyDismissed) return;

    const timer = setTimeout(() => setVisible(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("newsletter_dismissed", "true");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;
    setStatus("loading");

    try {
      // 1 — Save to Google Sheets
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email }),
      });

      // 2 — Send confirmation email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name:  form.name,
          to_email: form.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      // 3 — Mark as signed up so modal never shows again
      localStorage.setItem("newsletter_signed", "true");
      setStatus("success");

    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/70 z-[300] transition-opacity duration-500"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[400] flex items-center justify-center px-4">
        <div className="relative bg-cream w-full max-w-sm md:max-w-lg shadow-2xl animate-[modalIn_0.4s_ease-out] rounded-lg">

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-muted hover:text-gold transition-colors bg-transparent border-none cursor-pointer text-xl"
            onClick={handleDismiss}
          >
            ✕
          </button>

          {/* Gold top bar */}
          <div className="h-1 w-full bg-gold rounded-t-lg" />

          <div className="p-6 md:p-12">
            {status === "success" ? (
              /* ── Success state ── */
              <div className="text-center py-6">
                <div className="flex justify-center mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="23.5" stroke="#b8923a" strokeWidth="1"/>
                    <path d="M14 24.5L20 30.5L34 16.5" stroke="#b8923a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[0.70rem] font-medium tracking-[0.18em] uppercase text-gold mb-3">You're in</p>
                <h3 className="font-serif text-3xl font-light text-ink mb-4">Welcome aboard, {form.name.split(" ")[0]}.</h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  A confirmation has been sent to <span className="text-ink font-medium">{form.email}</span>. Expect insights on real estate, strategy and finance in Africa.
                </p>
                <button
                  className="px-8 py-3 bg-ink text-cream text-[0.78rem] font-medium tracking-[0.1em] uppercase border-none cursor-pointer hover:bg-gold transition-colors"
                  onClick={() => setVisible(false)}
                >
                  Close
                </button>
              </div>

            ) : (
              /* ── Form state ── */
              <>
                <p className="text-[0.70rem] font-medium tracking-[0.18em] uppercase text-gold mb-3">Newsletter</p>
                <h3 className="font-serif text-2xl md:text-4xl font-light text-ink leading-tight mb-3">
                  Every lever needs a <span className="font-bold">Fulcrum</span>, here's yours
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-8">
                  Insights on real estate, strategy, finance and digital transformation in Africa straight to your inbox.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium tracking-[0.1em] uppercase text-muted">Full Name</label>
                    <input
                      className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm text-ink outline-none focus:border-gold transition-colors"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium tracking-[0.1em] uppercase text-muted">Email Address</label>
                    <input
                      className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm text-ink outline-none focus:border-gold transition-colors"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
                  )}

                  <button
                    className={`w-full py-3 text-[0.78rem] font-medium tracking-[0.1em] uppercase border-none cursor-pointer transition-colors
                      ${status === "loading"
                        ? "bg-muted text-cream cursor-not-allowed"
                        : "bg-ink text-cream hover:bg-gold"
                      }`}
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                  </button>

                  <p className="text-xs text-muted/60 text-center">
                    No spam. Unsubscribe at any time.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}