import { useNavigate } from "react-router-dom";

export default function NigeriaInfrastructure() {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src="/home-bg.png"
          alt="Housing Ownership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
            HOUSING
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light leading-tight text-white mb-3 md:mb-4">
            Housing and Homeownership in Nigeria: A Fragmented Economy 
          </h1>
          <div className="flex items-center gap-3 md:gap-4 text-white/70 flex-wrap">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white">Tobi Yusuff</span>
            <span className="text-xs">June 17, 2026</span>
          </div>  
        </div>
      </div>

      <article className="px-6 md:px-20 pb-24 pt-12">

        {/* Drop cap first paragraph */}
        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          The Nigerian Reality
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          <span className="float-left font-serif text-6xl font-light leading-[0.85] mr-2 mt-1 text-gray-700">D</span>
          emand for home ownership through mortgage financing remains high. However, it is limited by income instability and weak access to formal credit systems. At some point, an uncomfortable truth begins to emerge
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          It is not that people do not want to own homes. It is that the system was never built with the majority in mind. 
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Recent federal housing finance interventions have increased activity in the mortgage space, including expanded lending programmes and housing delivery initiatives. Despite that, the impact is almost nonexistent because the scale remains marginal relative to the size of the housing gap and the depth of unmet demand.  
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Privately funded developments that do get built tend to cluster at the top of the market. Luxury units in areas like Ikoyi, Banana Island, and Victoria Island dominate the conversation around Nigerian real estate. This is not because developers are indifferent to the majority of the market, but because the cost structure of building in Nigeria makes it nearly impossible to develop affordably while still running a viable business. Land is expensive, construction finance is outrageous, and building materials are overpriced. The math simply does not work at the lower end of the market without the right intervention.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          This is the core of Nigeria's housing problem.
        </p>

        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          What Malaysia Built and How They Built It: A Case Study 
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In the early 1970s, Malaysia faced a housing crisis that, in many ways, looked familiar to fast-growing economies today. They had a growing population, rapid urbanisation, a widening gap between what people earned and the cost of homes, and a mortgage market that served only a privileged few.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          What followed was no accident. It was the result of intentional engineering. Over the subsequent decades, Malaysia intentionally set homeownership as a national priority, implementing a comprehensive system of policy decisions that simultaneously addressed both supply and demand in the housing sector. As a result, Malaysia's homeownership rate has risen to around 73%. The mortgage market now represents about 43% of the country's GDP. Between 2016 and 2024, housing loans increased at an annual average rate of 8%, while Bank Negara Malaysia has kept its overnight policy rate steady at 2.75%, which has made long-term mortgage financing both predictable and accessible.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The transformation wasn't driven by a single policy but rather through a strategic alignment of multiple elements. The Employees Provident Fund and Malaysia's pension scheme enabled workers to withdraw their savings for home purchases, creating substantial demand before the mortgage banking infrastructure was fully developed. Programs like PR1MA cater specifically to middle-income earners, providing homes at prices they can afford. Additionally, inclusionary zoning linked development approvals to the provision of affordable units, ensuring that private developers contributed positively to market access.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Achieving widespread homeownership is not merely a product of market forces but a result of careful engineering. This requires a sustained commitment to addressing both supply and demand through cohesive and purposeful policy over time. 
        </p>


        {/* Chart 1 */}
        <div className="my-10 flex flex-col items-center">
        <img
            src="/home-chart1.png"
            alt="Housing System Chart"
            className="w-full max-w-4xl object-contain"
        />
        </div>

        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          Why Developers Cannot Build “Down” 
        </h2>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Privately funded housing in Nigeria moves through a sequence of stages where cost and risk accumulate before delivery. It begins with land. Under the Land Use Act of 1978, land is vested in state governors, making access dependent on approval processes and existing claims. In Lagos, this introduces early delays and uncertainty before development begins.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Title perfection follows. Governor’s Consent is required, and while official timelines assume completion within a short window, in practice in Lagos, it extends to 6–12 months or more, depending on documentation and administrative backlog. As approval timelines lengthen, financing costs continue to accrue while inflation increases the cost of construction inputs before development begins.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Financing for developers typically sits at 20–30% interest per annum, and this borrowing cost is absorbed into final housing prices. Infrastructure gaps remain in many areas where roads, drainage, and electricity are incomplete, adding to development requirements before construction. A developer operating in these conditions cannot absorb the combined cost of land, infrastructure provision, financing, and regulatory delays while still pricing units at levels the market can widely afford. Input costs, financing costs, and prolonged development timelines collectively push final acquisition prices beyond the reach of most households. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Construction inputs also set the cost base. Between 2025 and 2026, cement prices increased by over 2x with broader volatility across construction inputs and development costs. At market entry, earnings are concentrated in lower to mid-income bands, with over 70% of Lagos residents renting and housing costs reaching up to 60% of income in several cases.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          This is precisely where public investment has the highest leverage. When the government builds the road, lays the infrastructure, and connects a corridor to the city's transportation network, it does not just build a road. It creates the conditions under which private capital can come in, build at scale, and price more competitively. 
        </p>

        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          Why Housing Demand Does Not Convert into Ownership Capacity
        </h2>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The housing finance system in Nigeria is split across public schemes, mortgage banks, and commercial lenders, with limited penetration into the real economy. Mortgage access remains shallow relative to housing demand.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Nigeria’s mortgage to GDP ratio sits below 1%, compared to Malaysia’s 43%, reflecting limited depth in formal housing finance and its weak capacity to convert demand into purchasing power at scale.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The National Housing Fund provides a structured savings pathway for formal sector workers, requiring contributions of 2.5 percent of monthly income to access subsidised mortgage facilities. The Federal Mortgage Bank of Nigeria converts these funds into mortgage loans. Commercial banks also participate in mortgage lending, but at prevailing lending rates in the mid 20% range following recent monetary tightening, making long-term repayment structures difficult to sustain for most households. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          However, access remains concentrated within formal employment. While the NHF framework allows participation from both salaried and self-employed individuals, in practice access is largely driven by verifiable income structures, which makes consistent inclusion of informal earners more limited despite their significant share of urban economic activity
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          The binding constraint is the credit infrastructure. Nigeria lacks a unified system for tracking credit history across formal and informal income streams, leaving lenders dependent on narrow salary-based verification.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          As a result, the housing finance system does not scale with the structure of the economy. Demand exists, but only a small fraction is converted into mortgage-backed ownership.
        </p>

         <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          The Fulcrum View
        </h2>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Malaysia appears less as a case of greater wealth and more as a case of stronger coordination, where housing outcomes were shaped through sustained alignment across policy, finance, and delivery over time. A similar pattern can be observed in other markets such as South Africa.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Nigeria shares a similar demographic and urban profile, but housing outcomes reflect less consistency in how these elements interact.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The result is a system where outcomes are constrained not by intent or activity, but by how effectively inputs translate into delivery.
        </p>

        {/* Chart 2 */}
        <div className="my-10 flex flex-col items-center">
        <img
            src="/home-chart2.png"
            alt="Unlocking Ownership"
            className="w-full max-w-4xl object-contain"
        />
        </div>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The implication is that housing performance is ultimately determined by the strength of the linkages between these levers rather than the presence of the levers themselves.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Where those linkages are weak, infrastructure investment, private sector activity, inclusion reforms, and credit expansion operate in parallel rather than as a reinforcing system.
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