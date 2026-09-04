import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO";

export default function BeyondRemittances() {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-cream">
      <SEO
        title="Nigeria's Election Cycle and The Early Signals — Tobi Yusuff"
        description="A strategic read on what Nigeria's election cycle signals for real estate, capital flows and investor confidence in the short and medium term."
        image="https://tobiyusuff.com/election-cover-page.jpg"
        url="/insights/nigerias-election-cycle-and-early-signals"
      />
    {/* <Helmet>
      <title>Nigeria’s Election Cycle and The Early Signals - Tobi Yusuff</title>
      <meta property="og:title" content="Nigeria’s Election Cycle and The Early Signals — Tobi Yusuff" />
      <meta property="og:description" content="Nigeria’s Election Cycle and The Early Signals" />
      <meta property="og:image" content="https://tobiyusuff.com/og-beyond-remittances.jpg" />
      <meta property="og:url" content="https://tobiyusuff.com/insights/beyond-remittances" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://tobiyusuff.com/og-beyond-remittances.jpg" />
    </Helmet> */}
      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src="/election-bg.jpg"
          alt="Election Signal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
            ELECTION
          </span>
          <h1 className="font-serif text-3xl md:text-6xl font-light leading-tight text-white mb-3 md:mb-4">
            Nigeria’s Election Cycle and The Early Signals
          </h1>
          <div className="flex items-center gap-3 md:gap-4 text-white/70 flex-wrap">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white">Tobi Yusuff</span>
            <span className="text-xs">April 22, 2026</span>
          </div>  
        </div>
      </div>

      <article className="px-6 md:px-20 pb-24 pt-12">

        {/* Drop cap first paragraph */}
        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          Before the Ballots 
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          <span className="float-left font-serif text-6xl font-light leading-[0.85] mr-2 mt-1 text-gray-700">N</span>
          Nigeria has entered another political season, and attention is gradually tilting toward campaigns, elections, and political outcomes. While such conversations are valid and necessary, they only capture a partial view of what a political cycle involves. 
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          At the surface level, the focus remains on visible political activity. Beneath that, decisions across government, business, and investment environments are adjusted in anticipation of what may come.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Across several African countries preparing for elections, such as Ghana and South Africa, a similar pattern appears. Attention starts rising early, and positioning across policy and market environments begins before political outcomes.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
         At this stage, nothing has changed officially but the cycle itself is already in motion.
        </p>

        {/* Chart */}
        <div className="my-10 flex flex-col items-center">
        <img
            src="/election-chart.png"
            alt="INEC chart"
            className="w-full max-w-4xl object-contain"
        />
        <p className="text-[0.85rem] text-muted mt-2 italic self-start max-w-2xl mx-auto">Source: INEC, The Guardian</p>
        </div>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          These spending cycles are not limited to election budgets. They often involve broader government activity, especially visible infrastructure work or project acceleration like the ongoing development along the Lekki–Epe expressway axis.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Looking into the future, the 2027 cycle shows a ridiculous increase. The Independent National Electoral Commission has proposed about ₦873.78 billion, showing how election-related spending has expanded significantly over the years. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In other cases, the pattern may differ. For example, in Ghana, the 2020 election cycle was carried out with an Electoral Commission budget of about GH₵‎1.06 billion, while the 2024 cycle was approved at about GH₵‎786.9 million. This reflects how election spending can adjust depending on fiscal planning and government priorities.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Although this does not show uniformity across countries, there is a visible shared structure within them, where government spending rises over time, moves unevenly across cycles, and drives stronger infrastructure activity in the build-up to elections.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          How The Market Responds
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Markets do not respond to government spending and policy changes in a single or predictable way. Some changes lead to immediate price adjustments, while others take time to reflect through costs and inflation.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          One of the most immediate adjustments in the economy came from the removal of fuel subsidies in 2023. Petrol, which was about ₦175 per litre before the policy change, rose to between ₦500 and over ₦1,000 per litre in different locations within months. This created an immediate increase in transport and logistics costs, which then fed into the pricing of goods and services.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Inflation followed the same direction. It moved from about 15 to 18% in earlier periods to above 30% in 2024 after the combined effects of subsidy removal and exchange rate reforms. More recent figures show a moderation back toward the 15-16% mark, reflecting some easing and stability after the initial shock phase.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
            At the same time, exchange rate conditions added another layer of pressure. The naira has moved in clear steps over the years. In 2022, the dollar was around ₦460. In 2023, it rose quickly to about ₦600 to ₦900 during the adjustment period. By 2024, it moved further up to around ₦1,400, and in recent periods it has stayed around ₦1,300 to ₦1,400. Overall, this is a drop in value of more than 150 percent compared to before 2023. This has made imported goods, materials, and equipment more expensive, especially for businesses that rely on foreign inputs.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         Nigeria’s leadership, both public and private, needs to go much further:
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          The Fulcrum View
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          While election outcomes are important, what matters more is how positioning starts long before results are known. Political and economic decisions begin to shift early based on expectations around policy direction, spending patterns, and economic conditions.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          This is also visible in election results. In 2023, the APC won more governorship positions than the PDP. The APC controlled about 15 states, while the PDP held roughly 8 to 9, showing a clear shift compared to earlier cycles where control was more balanced.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Ahead of the 2027 cycle, there has also been more movement toward the APC, along with changes within opposition groups. This shows how positioning often happens before elections, as decisions are shaped by where influence is expected to be stronger.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
         Economic conditions follow a similar pattern. Interest rates, inflation, and exchange rate movements all affect timing and decisions before outcomes are clear.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         What matters is not just the result, but also the early signals that appear across both political and economic behavior.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         Elections do not create movement on their own. They reveal the direction in which movement has already begun. In Nigeria, it's evident that movement typically starts way before votes are counted.
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