import { useState, useEffect } from "react";

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycby2abEjwaWdQB3b_X8JnmnZsm6Zit6G-ZIBgIxmBZusUKtd-YR5nCclDI-5EJ5veNe3/exec";
const PDF_FILE = "/A Senior Manager's Guide to Property as Retirement Income.pdf"; 

export default function PDFGateModal() {
  const [visible, setVisible]   = useState(false);
  const [email, setEmail]       = useState("");
  const [status, setStatus]     = useState("idle"); // idle | loading | ready | error
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already downloaded or dismissed this session
    const alreadyDownloaded = localStorage.getItem("pdf_downloaded");
    const alreadyDismissed  = sessionStorage.getItem("pdf_dismissed");
    if (alreadyDownloaded || alreadyDismissed) return;

    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem("pdf_dismissed", "true");
  };

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    setStatus("loading");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "PDF Download", email }),
      });

      localStorage.setItem("pdf_downloaded", "true");
      setStatus("ready");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_FILE;
    link.download = "A Senior Manager's Guide to Property as Retirement Income.pdf";
    link.click();
    setVisible(false);
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
        <div className="relative bg-cream w-full max-w-sm md:max-w-md shadow-2xl rounded-lg animate-[modalIn_0.4s_ease-out]">

          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-muted hover:text-ink transition-colors bg-transparent border-none cursor-pointer text-xl z-10"
            onClick={handleDismiss}
          >
            ✕
          </button>

          {/* Gold top bar */}
          <div className="h-1 w-full bg-gold rounded-t-lg" />

          <div className="p-6 md:p-10">
            {status === "ready" ? (
              /* ── Download state ── */
              <div className="text-center py-4">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M12 15V3M12 15l-4-4M12 15l4-4" stroke="#b8923a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="#b8923a" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <p className="text-[0.70rem] font-medium tracking-[0.18em] uppercase text-gold mb-3">
                  Ready to Download
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
                  Your document is ready.
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-8">
                  Thank you. Click the button below to download your PDF.
                </p>
                <button
                  className="w-full py-3 bg-ink text-cream text-[0.78rem] font-medium tracking-[0.1em] uppercase border-none cursor-pointer hover:bg-gold transition-colors flex items-center justify-center gap-2"
                  onClick={handleDownload}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15V3M12 15l-4-4M12 15l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Download PDF
                </button>
              </div>

            ) : (
              /* ── Email gate state ── */
              <>
                {/* PDF icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#b8923a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#b8923a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <p className="text-[0.70rem] font-medium tracking-[0.18em] uppercase text-gold mb-3 text-center">
                  Free Download
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight mb-3 text-center">
                  A Senior Manager's Guide to Property as Retirement Income
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-8 text-center">
                  The full presentation delivered by Tobi Yusuff at Lagos Business School for senior management professionals in the Oil and Gas Industry.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium tracking-[0.1em] uppercase text-muted">
                      Email Address
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-border bg-transparent font-sans text-sm text-ink outline-none focus:border-gold transition-colors"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
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
                    {status === "loading" ? "Processing..." : "Get the PRESENTATION"}
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