import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO";

export default function BeyondRemittances() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Beyond Remittances — Tobi Yusuff"
        description="The Nigerian diaspora sends over $20 billion home annually. It's time to channel that capital into structured real estate investment vehicles that drive national development."
        image="https://tobiyusuff.com/beyond.png"
        url="/insights/beyond-remittances"
      />
    {/* <Helmet>
      <title>Beyond Remittances - Tobi Yusuff</title>
      <meta property="og:title" content="Beyond Remittances — Tobi Yusuff" />
      <meta property="og:description" content="It's time we look beyond remittances as mere dollars wired for consumption." />
      <meta property="og:image" content="https://tobiyusuff.com/og-beyond-remittances.jpg" />
      <meta property="og:url" content="https://tobiyusuff.com/insights/beyond-remittances" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://tobiyusuff.com/og-beyond-remittances.jpg" />
    </Helmet> */}
      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src="/beyond-articlee.jpg"
          alt="Beyond Remittances"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
            Diaspora Economics
          </span>
          <h1 className="font-serif text-3xl md:text-6xl font-light leading-tight text-white mb-3 md:mb-4">
            Beyond Remittances
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
          <span className="float-left font-serif text-6xl font-light leading-[0.85] mr-2 mt-1 text-gray-700">F</span>
          or years, I have watched with admiration and sometimes frustration as the Nigerian diaspora, our siblings, friends, and colleagues scattered from Boston to Berlin, Lagos to London, send billions of dollars home each year.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The headlines routinely describe these as "remittances," a lifeline for millions of families that far outpaces Nigeria's foreign direct investment and is, in some years, second only to oil in terms of revenue. In 2024 alone, these flows rose to over $20 billion. Yet, as transformational as these funds have been in combating poverty, paying tuition, and keeping the lights on through Nigeria's endless cycles of power cuts, their true potential remains tragically underutilised.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          It's time we look beyond remittances as mere dollars wired for consumption. We should see the Nigerian diaspora as enterprising, connected, and hopeful as a strategic engine that could power a new era of structured, sustainable real estate and urban development. This is not a theoretical exercise; it's a practical route to solve one of Nigeria's gravest socioeconomic problems: the chronic housing deficit that currently stands between 17 and 28 million units.
        </p>

        {/* Chart */}
        <div className="my-10 flex flex-col items-center">
        <img
            src="/chart.jpg"
            alt="Remittances vs FDI chart"
            className="w-full max-w-4xl object-contain"
        />
        <p className="text-[0.85rem] text-muted mt-2 italic self-start max-w-2xl mx-auto">Source: World Bank</p>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          The Diaspora: From Family Support to Systemic Impact
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          What is often lost in cold statistics is the warmth of intent behind every naira or dollar sent home. For many diaspora Nigerians, the desire goes well beyond helping parents or paying school fees. There is a keen hunger to build legacies — to have a tangible footprint in Nigeria's future.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          A 2023 real estate market report suggested that up to 70% of property acquisitions in sought-after urban areas involve diaspora buyers or co-investors. But here lies the paradox: while the intent and capital are present, the impact is largely individual, seldom collective, seldom transformative at the societal level.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Barriers: Where Goodwill Meets Bureaucracy
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Nigeria's real estate market, despite its promise, is marred by opacity:
        </p>
        <ul className="list-none flex flex-col gap-4 mb-12 pl-2">
          {[
            { label: "Unclear or duplicate land titles", text: "Many buyers, especially those abroad, struggle to verify property ownership, exposing them to fraud." },
            { label: "Bureaucratic bottlenecks", text: "The land registration process is notoriously slow and cumbersome, deterring anyone who cannot afford months of dogged follow-up." },
            { label: "Lack of trusted intermediaries", text: "The proliferation of unregulated agents and developers undermines trust in the entire system." },
            { label: "Limited transparency", text: "The absence of consolidated, digitised land registries makes due diligence arduous." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-ink/40" />
              <p className="text-base leading-[1.9] text-gray-700/80">
                <span className="font-medium text-gray-700">{item.label}:</span> {item.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">Given these obstacles, it is little wonder that diaspora transactions are often small-scale or confined to buyers with family members able to wrangle through Nigeria’s notorious bureaucracy.</p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Structured Capital: The Big Leap Forward
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          What if we could channel even a fraction of that $20 billion in annual diaspora inflows into transparent, professionally managed, scalable real estate investment vehicles? Imagine a housing market where the diaspora’s capital is harnessed not just for building isolated homes but for funding affordable housing estates, smart city projects, and high-quality rental units, all while offering competitive returns.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
            Some hopeful signs have emerged. The Federal Mortgage Bank of Nigeria’s recent collaboration with the Nigerians in Diaspora Commission (NIDCOM) began offering special mortgage schemes for overseas Nigerians, complete with digital platforms for application and verification. These moves are welcome, but they are just the beginning.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         Nigeria’s leadership, both public and private, needs to go much further:
        </p>
        <ul className="list-none flex flex-col gap-4 mb-12 pl-2">
          {[
            { label: "Create Diaspora-Focused Real Estate Investment Trusts (REITs)", text: "These vehicles allow pooled capital to be deployed in large-scale projects, professionally managed and regulated, thereby spreading risk and increasing impact." },
            { label: "Deepen Digitisation and Transparency", text: "It is no longer futuristic to propose blockchain-backed land registries, digital title searches, and online escrow accounts. Several countries, from Estonia to Rwanda, are using such platforms to instil confidence, and closer to home, Lagos and Oyo have begun piloting similar initiatives. However, these efforts still face bureaucratic delays, fragmented data systems, and limited public awareness, preventing them from operating at full potential. PropTech firms are waiting for the chance to partner on these solutions." },
            { label: "Innovate for Diaspora Preferences", text: "Developers should target product lines that actually fit the needs of the diaspora, be it affordable housing, co-living models, or managed short-let apartments with guaranteed returns." },
            { label: "Simplify Bureaucratic Processes", text: "The notorious bottlenecks at the land registry and local planning offices can be addressed through e-government reforms and transparent, performance-driven targets." },
            { label: "Investor Protection and Dispute Resolution", text: "Fast, digital dispute resolution mechanisms, certified developer directories, and official diaspora investment platforms can curb fraud and eliminate guesswork." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-ink/40" />
              <p className="text-base leading-[1.9] text-gray-700/80">
                <span className="font-medium text-gray-700">{item.label}:</span> {item.text}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Price Transparency and Property Lookup
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          What is often lost in cold statistics is the warmth of intent behind every naira or dollar sent home. For many diaspora Nigerians, the desire goes well beyond helping parents or paying school fees. There is a keen hunger to build Lagos, Kaduna, Nasarawa, and Oyo States have taken the lead with Geographic Information System (GIS)-based registries and online platforms that allow property verification, title application, and ownership history checks without physical visits. Oyo State’s Online Property Title Search portal, for instance, enables remote lookup of land titles, helping users avoid scams and assess fair property values, key for making informed investment decisions.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          At the national level, the Federal Government’s National Land Digital System (NLDS), launched in partnership with the World Bank, aims to register all land parcels in Nigeria within five years. This unified, secure digital registry is expected to raise formal land transactions from below 10% to over 50%, unlocking over $300 billion in economic value.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          By reducing title fraud, increasing transparency, and enabling remote verification, these digital land systems are rapidly removing key barriers to real estate investment via remittances. As these systems scale nationwide, they offer diaspora Nigerians greater confidence to invest in property back home, fueling both personal wealth creation and national development. To understand the capital growth in Lagos real estate, take a look at the property price trends for a typical 2-bedroom apartment in Lekki. In 2020, the average price for a 2-bedroom apartment in Lekki Phase 1 was approximately ₦60 million.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          By 2023-2024, prices soared to between ₦100 million and ₦150 million due to strong demand and infrastructure upgrades. In 2025, prices have climbed above ₦220 million, fueled by a mix of strong demand, inflation, Naira devaluation, and continued development activity.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          More Than Buildings: Urban Transformation and Societal Change
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         Why does any of this matter beyond the thrill of buying a plot of land or a shiny apartment block? Because real estate capital is a powerful lever for holistic development:
        </p>
        <ul className="list-none flex flex-col gap-4 mb-12 pl-2">
          {[
            { label: "Job Creation", text: "Construction, management, and auxiliary services in real estate provide jobs at every skill level—from architects and engineers to masons and marketers." },
            { label: "Tax Revenue and Infrastructure", text: "A well-structured sector enables the government to collect more predictable taxes and invest in roads, schools, drainage, and power." },
            { label: "Social Mobility and Urban Planning", text: "When capital flows are harnessed for large projects, cities gain new, planned neighbourhoods, while the social divide can be bridged through affordable offerings." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-ink/40" />
              <p className="text-base leading-[1.9] text-gray-700/80">
                <span className="font-medium text-gray-700">{item.label}:</span> {item.text}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         The Nigerian diaspora is uniquely positioned to trigger this transformation. With global exposure, risk appetite, and familiarity with both worlds, Nigerians abroad can be the conduits of not just money but also knowledge, best practices, and innovation.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Nigeria as a Blueprint: Lessons for the World
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Nigeria’s story is, in many ways, emblematic of what is possible across Africa and other regions with large diasporas. If Nigeria succeeds in transforming diaspora remittances into structured investment, it could prove a model for harnessing migration and globalisation for urban and economic transformation.Consider the parallel in countries like India, the Philippines, and Mexico, nations that have, in various ways, created the structures to channel diaspora funds for national development. Real estate, because of its multiplier effects on jobs, infrastructure, and long-term wealth, is the natural focal point.But Nigeria also has unique advantages: its diaspora is well-networked (with strong hometown associations and professional bodies abroad), its real estate demand is massive and growing, and its technology adoption is brisk. All it needs is the political will and private sector vision to turn good intentions into enduring change.
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          A Call to Action
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Both at home and in the diaspora, Nigerians must move beyond lamenting regulatory inefficiency or the prevalence of scams. Policymakers should invite diaspora voices to the table, not just for applause at homecoming events, but as co-creators of new investment vehicles and co-architects of urban policy.Tech entrepreneurs must build world-class digital solutions for property verification, transaction security, and portfolio management. Real estate developers must institutionalise transparency and offer products that match diaspora needs, not just in form, but in trustworthiness. For members of the diaspora, it is time to elevate the conversation from “the plot of land I am building” to “the community I am shaping.” Pool resources, demand accountability, and embrace new platforms even if it means surrendering some control in favour of collective gain. The future of Nigeria’s cities and, by extension, national prosperity hinges not just on how much money is sent home, but on how intentionally that money is structured, protected, and deployed.
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
            <a href="https://twitter.com/intent/tweet?text=Beyond Remittances&url=https://tobiyusuff.com/insights/beyond-remittances/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#1da1f2] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://tobiyusuff.com/insights/beyond-remittances/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="mailto:?subject=Beyond Remittances&body=https://tobiyusuff.com/insights/beyond-remittances/" target="_blank" rel="noreferrer"
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
          <div className="flex flex-col gap-1 cursor-pointer group text-right" onClick={() => navigate("/insights/hidden-economics-off-plan")}>
            <span className="text-xs tracking-[0.15em] uppercase text-muted flex items-center gap-1 justify-end">
              Next
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <p className="font-serif text-sm font-medium text-gray-700 group-hover:text-gold transition-colors leading-snug">
              The Hidden Economics of Off-Plan Projects
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
              { slug: "/insights/hidden-economics-off-plan", img: "/hidden-article.jpg", category: "Real Estate", title: "The Hidden Economics of Off-Plan Projects" },
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