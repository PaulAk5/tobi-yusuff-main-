import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants";
// import Signature from "../components/Signature";

export default function Nav({ currentPage, navigate, forceDark = false, transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isScrolled = forceDark ? true : false;

  return (
    <>
      {/* Desktop Nav */}
      <nav className={`${transparent ? "absolute" : "fixed"} top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-[72px] transition-all duration-500
        ${isScrolled ? "bg-ink" : "bg-transparent"}`}>
        <div
          className="cursor-pointer"
          onClick={() => navigate("home")}
        >
          <img src="/logo.png" alt="Tobi Yusuff" className="h-16 w-auto object-contain invert" />
        </div>

        <ul className="hidden lg:flex gap-8 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.page}>
              <a
                href="#"
                className={`relative font-serif text-lg font-bold tracking-[0.08em] no-underline transition-colors pb-1
                  group text-white
                  ${currentPage === l.page ? "opacity-100" : "opacity-100 hover:opacity-100"}`}
                onClick={(e) => { e.preventDefault(); navigate(l.page); }}
              >
                {l.label}

                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-white transition-all duration-300
                  ${currentPage === l.page ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
          onClick={() => setMobileOpen(true)}
        >
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
        </button>
      </nav>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-ink z-[200] flex flex-col items-start justify-start gap-6 px-6 md:px-12 pt-24
        transition-all duration-500 ease-in-out
        ${mobileOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"}`}>

        {/* Header row */}
        <div className="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-6 md:px-12">
          <div
            className="cursor-pointer"
            onClick={() => { navigate("home"); setMobileOpen(false); }}
          >
            <img src="/logo.png" alt="Tobi Yusuff" className="h-10 w-auto object-contain invert" />
          </div>
          <button
            className="text-2xl cursor-pointer bg-transparent border-none text-white hover:text-gold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.page}
            href="#"
            className={`relative font-serif text-xl font-light no-underline transition-all duration-300 pb-1 group
              ${currentPage === l.page ? "text-white opacity-100" : "text-white opacity-60 hover:opacity-100"}
              ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
            onClick={(e) => { e.preventDefault(); navigate(l.page); setMobileOpen(false); }}
          >
            {l.label}
            {/* Animated underline for mobile too */}
            <span className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-300
              ${currentPage === l.page ? "w-full" : "w-0 group-hover:w-full"}`}
            />
          </a>
        ))}

        {/* Divider + Socials */}
        <div
          className={`flex flex-col items-start gap-4 transition-all duration-300
            ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: mobileOpen ? `${NAV_LINKS.length * 60}ms` : "0ms" }}
        >
          <div className="w-12 h-[1px] bg-white/20" />
          <div className="flex items-center gap-6">
            {[
              { label: "LinkedIn",  href: "https://linkedin.com/in/yusuff-oluwatobi" },
              { label: "Instagram", href: "https://instagram.com/tobiyusuff" },
              { label: "Email",     href: "mailto:hello@tobiyusuff.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[0.70rem] font-medium tracking-[0.18em] text-white/50 no-underline hover:text-gold transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}