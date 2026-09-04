import { useNavigate } from "react-router-dom";

export default function NigeriaInfrastructure() {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src="/electricity.jpg"
          alt="Election Signal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
            INFRASTRUCTURE
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light leading-tight text-white mb-3 md:mb-4">
            Nigeria’s Infrastructure and the Question of Capital Allocation
          </h1>
          <div className="flex items-center gap-3 md:gap-4 text-white/70 flex-wrap">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white">Tobi Yusuff</span>
            <span className="text-xs">May 7, 2026</span>
          </div>  
        </div>
      </div>

      <article className="px-6 md:px-20 pb-24 pt-12">

        {/* Drop cap first paragraph */}
        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          Setting the Context
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          <span className="float-left font-serif text-6xl font-light leading-[0.85] mr-2 mt-1 text-gray-700">I</span>
          nfrastructure remains at the heart of every thriving economy. Yet its role becomes clearer only when certain core systems are strained.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In Nigeria, this is very evident. The country continues to grow in population and economic activity, with an estimated population of over 230 million people, placing sustained pressure on the systems that support everyday life and broader economic growth. As this growth continues, infrastructure across key areas such as transport, energy, housing, and public utilities is not expanding at the same pace as demand.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          This raises a key question around how this widening gap is financed across competing infrastructure needs and what sustained underinvestment could mean for Nigeria’s economy. 
        </p>

        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          Scale and System Pressures 
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The needs across key infrastructure systems in Nigeria are endless, but these stand out. 
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Road networks account for an estimated 90 to 95 percent of passenger and freight movement, carrying most of the country’s economic activity. In contrast, the rail network spans only about 3,800 kilometres across the entire country, with operations limited to a small number of corridors like Lagos, Ibadan, Kaduna, and Abuja. As a result, congestion persists across major routes, slowing the movement of goods and increasing logistics costs over time.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Power supply presents an even wider gap. Despite this large population size, available electricity generation remains below 5,000 megawatts. This translates to barely 23 watts per person, a level that falls far below what is required to support industrial activity, urban demand, and basic household use at scale. The gap between demand and supply continues to drive widespread reliance on generators, solar panels, and other alternative power sources, increasing operating costs for both homes and businesses.
        </p>


        {/* Chart 1 */}
        <div className="my-10 flex flex-col items-center">
        <img
            src="/electricity-chart.jpg"
            alt="Electricity Chart"
            className="w-full max-w-4xl object-contain"
        />
        <p className="text-[0.85rem] text-muted mt-2 italic self-start max-w-2xl mx-auto">Electricity availability per capita remains significantly lower in Nigeria than in peer African economies.</p>

        <p className="text-[0.85rem] text-muted mt-2 italic self-start max-w-2xl mx-auto">Source: Africa Energy Portal (installed capacity estimates); World Bank population data. Figures are indicative for cross-country comparison.</p>
        </div>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Housing and urban systems show similar levels of strain. Nigeria’s housing deficit is estimated at over 15million units, a shortfall that continues to widen as cities expand. For a population of this size, this amounts to millions of households without adequate housing, placing additional pressure on urban infrastructure, including water supply, sanitation, and transport systems.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          The pressure is equally visible in healthcare delivery. Compensation levels remain significantly below global benchmarks, with House Officers earning between about $124 and $161 monthly, compared to over $4,300 in countries like the United Kingdom. While the recommended benchmark is approximately one doctor to 600 patients, WHO estimates show significant variation in physician density across countries, with Nigeria at about 4.1 per 10,000 population, compared to Ghana (2.9), South Africa (7.7), Egypt (11.8), and the United Kingdom (33.5). At this scale, service delivery becomes stretched, placing sustained pressure on both personnel and infrastructure.
        </p>

        {/* Chart 2 */}
        <div className="my-10 flex flex-col items-center">
        <img
            src="/physician-density.jpg"
            alt="Physician Density"
            className="w-full max-w-4xl object-contain"
        />
        <p className="text-[0.85rem] text-muted mt-2 italic self-start max-w-2xl mx-auto">Physician density varies significantly across countries, with Nigeria remaining below regional and global benchmarks.</p>

        <p className="text-[0.85rem] text-muted mt-2 italic self-start max-w-2xl mx-auto">Source: WHO Global Health Observatory (physician density per 10,000 population, latest available estimates).</p>
        </div>
        

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Where Nigeria Sits in the African Infrastructure Landscape
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Infrastructure performance across African economies is closely tied to macroeconomic capacity, fiscal space, and investment levels. Countries with stronger infrastructure outcomes tend to record more stable GDP growth, supported by sustained public and private investment in transport, energy, and urban systems. 
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          This relationship is reflected in global development frameworks such as the Sustainable Development Goals, particularly Goal 9, which positions infrastructure as a key driver of industrialisation and economic growth. Within Africa, it highlights infrastructure as both a development indicator and a measure of economic competitiveness.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In North and Southern Africa, economies such as Egypt and South Africa reflect relatively stronger infrastructure bases supported by higher economic scale and investment capacity. Egypt recorded GDP growth of about 3.8% in 2022/23, supported by services and exports despite inflation of around 24% in the same period, while maintaining foreign reserves of about $34.8 billion. South Africa, with a GDP exceeding $400 billion, benefits from a more developed financial system and relatively stronger infrastructure stock, even though growth has remained below 1% in recent periods. These economies show how scale and sustained investment support more resilient infrastructure systems.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In East Africa, Rwanda and Ethiopia reflect rapid infrastructure expansion from lower economic bases. Rwanda recorded GDP growth of 8.9% in 2024, driven by public investment, while Ethiopia grew at 7.3% in 2023/24, supported by industry and infrastructure-led expansion. Both economies highlight how infrastructure investment can accelerate structural transformation, even under macroeconomic pressure.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         In Central Africa, economies such as Congo remain constrained, with GDP growth estimated at 2.8% in 2024 and public debt close to 94% of GDP. Despite resource-linked revenues, limited fiscal space continues to restrict infrastructure expansion and broader economic diversification.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Within this context, Nigeria occupies a high-pressure position. GDP growth improved to 3.40% in 2024, with quarterly data showing 4.28% in Q1 2025, 4.23% in Q2 2025, and 4.07% in Q4 2025, reflecting a gradual improvement in output performance. Inflation rose to 24.5% in 2024, though more recent data shows some easing to around 15–16% in late 2025 and into 2026. This indicates moderation in price pressures, while underlying macroeconomic strain and infrastructure deficits persist. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         Across these economies, infrastructure outcomes remain closely linked to the consistency and intensity of investment rather than economic scale alone, reinforcing a structural gap between macroeconomic capacity and infrastructure development across African economies.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          The Fulcrum View
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Much of the discussion around Nigeria’s infrastructure gap focuses on how much funding is required. But with federal capital expenditure rising from ₦5.46 trillion in 2022 to ₦23.96 trillion in 2025, the more immediate question is not availability, but where capital can generate the highest return.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In transport, this points to mass transit systems such as Lagos’ rail expansion, including the recently operational Red Line, which connects high-density residential areas from Agbado through Ikeja into central Lagos, easing congestion and improving labour movement into key economic hubs. Investments of this nature reduce pressure on road networks, lower commuting costs, and improve the movement of goods across urban corridors. The impact is immediate where we see more efficient trade, faster labour mobility, and stronger productivity within dense economic centres.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In power, capital deployment delivers equally immediate gains. Strengthening generation and distribution, particularly through embedded and decentralised energy solutions, reduces reliance on diesel-based self-generation, lowers operating costs for businesses, and improves industrial uptime. For many firms, energy remains one of the largest input costs. Improving reliability directly translates into higher output and more predictable operations.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
         Private capital is beginning to respond to these opportunities. Institutional investors, including pension funds, have allocated over ₦260 billion to infrastructure-related assets as of October 2025, signalling growing participation in long-term financing. While still modest relative to demand, these flows show that capital is already moving toward sectors with clearer and faster returns.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         What matters now is not how much capital is available, but where it is put to work.
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
            <a href="https://twitter.com/intent/tweet?text=Beyond Remittances&url=https://tobiyusuff.com/insights/nigeria-infrastructure/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#1da1f2] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://tobiyusuff.com/insights/nigeria-infrastructure/" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="mailto:?subject=Beyond Remittances&body=https://tobiyusuff.com/insights/nigeria-infrastructure/" target="_blank" rel="noreferrer"
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