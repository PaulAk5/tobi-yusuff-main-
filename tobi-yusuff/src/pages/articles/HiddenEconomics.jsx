import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO";

export default function HiddenEconomics() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="The Hidden Economics of Off-Plan Projects - Tobi Yusuff"
        description="Why off-plan real estate builds wealth while Treasury Bills merely preserve it. A breakdown of time advantage, development participation and inflation hedging."
        image="https://tobiyusuff.com/hidden-economics.png"
        url="/insights/hidden-economics-off-plan"
      />

      {/* <Helmet>
        <title>The Hidden Economics of Off-Plan Projects - Tobi Yusuff</title>
        <meta property="og:title" content="The Hidden Economics of Off-Plan Projects — Tobi Yusuff" />
        <meta property="og:description" content="Off-plan projects carry hidden economics that most buyers and investors never see. Here's what you need to know." />
        <meta property="og:image" content="https://tobiyusuff.com/og-hidden-economics.jpg" />
        <meta property="og:url" content="https://tobiyusuff.com/insights/hidden-economics-off-plan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://tobiyusuff.com/og-hidden-economics.jpg" />
      </Helmet> */}

      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src="/hidden-article.jpg"
          alt="The Hidden Economics of Off-Plan Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
            Real Estate Finance
          </span>
          <h1 className="font-serif text-3xl md:text-6xl font-light leading-tight text-white mb-3 md:mb-4">
            The Hidden Economics of Off-Plan Projects
          </h1>
          <div className="flex items-center gap-3 md:gap-4 text-white/70 flex-wrap">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white">Tobi Yusuff</span>
            <span className="text-xs">March 17, 2026</span>
          </div>
        </div>
      </div>

      <article className="px-6 md:px-20 pb-24 pt-12">

        {/* Drop cap first paragraph */}
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          <span className="float-left font-serif text-6xl font-light leading-[0.85] mr-2 mt-1 text-gray-700">A</span>
          client once asked me: “Why put money into an off-plan property when Treasury Bills give decent returns?”
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          It’s a fair question, but it reveals a common blind spot.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          The Anatomy of Nigeria’s Dead Capital Crisis
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Treasury Bills preserve capital. Off-plan real estate builds it.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Here’s why:     
        </p>
        <ul className="list-none flex flex-col gap-4 mb-12 pl-2">
          {[
            { label: "Time Advantage", text: "You buy at today’s prices before infrastructure, demand, and recognition push values up." },
            { label: "Development Participation", text: "Every road, facility, or upgrade during construction adds value you didn’t pay for initially." },
            { label: "Smart Payment Structures", text: "Instalments mean you’re earning returns on capital you haven’t fully deployed yet." },
            { label: "Inflation Hedge", text: " Physical assets protect value in ways paper investments can’t." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-ink/40" />
              <p className="text-base leading-[1.9] text-gray-700/80">
                <span className="font-medium text-gray-700">{item.label}:</span> {item.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          When you buy completed property, you’re paying for value already created. Off-plan positions you at the start of the growth curve, where the compounding happens.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In Lagos, with 20 million residents in sight and Nigeria’s real estate market set to grow 6.91% annually through 2029, the opportunity is clear:   
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Predictable returns are safe.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Strategic returns are transformational. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The investors who understand this aren’t just collecting interest, they’re participating in the economic transformation of entire cities.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The question is: Are you optimising for safety, or are you building generational wealth?
        </p>
        <p className="font-medium leading-[1.9] text-black/60 mb-6">
          #RealEstateInvestment #OffPlanProjects #WealthBuilding #TobiYusuff #NigeriaRealEstate #DiasporaInvestment #VeritasiHomes
        </p>

        {/* Share + Like row */}
        <div className="flex items-center justify-between py-8 border-t border-border mt-10">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-border text-muted hover:text-gray-700 transition-colors bg-transparent cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs">0</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://twitter.com/intent/tweet?text=The Hidden Economics of Off-Plan Projects&url=https://tobiyusuff.com/insights/hidden-economics-off-plan/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#1da1f2] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://tobiyusuff.com/insights/hidden-economics-off-plan/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="mailto:?subject=The Hidden Economics of Off-Plan Projects&body=https://tobiyusuff.com/insights/hidden-economics-off-plan/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#888] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5"/>
                <path d="M2 7l10 7 10-7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
            <button className="w-9 h-9 rounded-full bg-[#555] flex items-center justify-center hover:opacity-80 transition-opacity border-none cursor-pointer"
              onClick={() => navigator.clipboard.writeText(window.location.href)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="grid grid-cols-2 gap-4 py-8 border-t border-b border-border">
          <div className="flex flex-col gap-1 cursor-pointer group" onClick={() => navigate("/insights/unlocking-nigeria-real-estate")}>
            <span className="text-xs tracking-[0.15em] uppercase text-muted flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Previous
            </span>
            <p className="font-serif text-sm font-medium text-gray-700 group-hover:text-gold transition-colors leading-snug">
              Unlocking Nigeria's $900 Billion Real Estate: From Dead Capital to Financial Capital
            </p>
          </div>
          <div className="flex flex-col gap-1 cursor-pointer group text-right" onClick={() => navigate("/insights/beyond-remittances")}>
            <span className="text-xs tracking-[0.15em] uppercase text-muted flex items-center gap-1 justify-end">
              Next
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <p className="font-serif text-sm font-medium text-gray-700 group-hover:text-gold transition-colors leading-snug">
              Beyond Remittances
            </p>
          </div>
        </div>

        {/* Author box */}
        <div className="flex items-center gap-6 p-6 bg-[#f0ece8] mt-8">
          <img
            src="/mrtobi2.jpg"
            alt="Tobi Yusuff"
            className="w-16 h-16 rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <p className="font-serif text-lg font-medium text-ink">Tobi Yusuff</p>
            <p className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-2">About Author</p>
            <a href="https://instagram.com/tobiyusuff" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#888" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="#888" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#888"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Leave a comment */}
        <div className="mt-12 pb-24">
          <h3 className="font-serif text-3xl font-light text-ink mb-8">Leave a comment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full pb-3 border-b border-border bg-transparent text-sm text-ink outline-none focus:border-gold transition-colors placeholder:text-muted/60"
              />
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Your E-mail *"
                className="w-full pb-3 border-b border-border bg-transparent text-sm text-ink outline-none focus:border-gold transition-colors placeholder:text-muted/60"
              />
            </div>
          </div>
          <label className="flex items-center gap-2 text-xs text-muted cursor-pointer mb-6">
            <input type="checkbox" className="w-4 h-4 cursor-pointer" />
            Save my name, email, and website in this browser for the next time I comment.
          </label>
          <div className="mb-6">
            <textarea
              placeholder="Your comment *"
              className="w-full pb-3 border-b border-border bg-transparent text-sm text-ink outline-none focus:border-gold transition-colors placeholder:text-muted/60 resize-none min-h-[100px]"
            />
          </div>
          <label className="flex items-center gap-2 text-xs text-muted cursor-pointer mb-8">
            <input type="checkbox" className="w-4 h-4 cursor-pointer" />
            I agree that my submitted data is being collected and stored.
          </label>
          <button className="px-8 py-3 bg-gold text-white font-serif text-[0.9rem] font-medium tracking-[0.05em] cursor-pointer hover:bg-black transition-colors border-none">
            Leave a comment
          </button>
        </div>

        {/* You May Also Like */}
        <div className="pt-10 border-t border-border">
          <p className="text-[0.90rem] font-serif font-bold tracking-[0.18em] uppercase text-black mb-8">You May Also Like</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { slug: "/insights/beyond-remittances", img: "/beyond.png", category: "Real Estate", title: "Beyond Remittances" },
              { slug: "/insights/unlocking-nigeria-real-estate", img: "/unlocking-article.jpg", category: "Real Estate", title: "Unlocking Nigeria's $900 Billion Real Estate" },
            ].map((a) => (
              <div key={a.slug} className="cursor-pointer group" onClick={() => navigate(a.slug)}>
                <div className="overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <p className="text-[0.68rem] font-medium tracking-[0.15em] uppercase text-gold mt-4 mb-2">{a.category}</p>
                <h3 className="font-serif text-lg font-normal leading-snug text-ink group-hover:text-gold transition-colors">{a.title}</h3>
              </div>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
}