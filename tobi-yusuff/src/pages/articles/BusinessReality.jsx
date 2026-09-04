import { useNavigate } from "react-router-dom";

export default function NigeriaInfrastructure() {
  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src="/business-bg.png"
          alt="Business Reality"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
            BUSINESS
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-light leading-tight text-white mb-3 md:mb-4">
            The True Cost of Doing Business in Nigeria
          </h1>
          <div className="flex items-center gap-3 md:gap-4 text-white/70 flex-wrap">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white">Tobi Yusuff</span>
            <span className="text-xs">July 1, 2026</span>
          </div>  
        </div>
      </div>

      <article className="px-6 md:px-20 pb-24 pt-12">

        {/* Drop cap first paragraph */}
        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          The Nigerian Reality
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          <span className="float-left font-serif text-6xl font-light leading-[0.85] mr-2 mt-1 text-gray-700">B</span>
         usinesses in Nigeria are operating in an environment where pressure is no longer occasional but has become part of normal operations. Regulation now influences decisions around cost, production, planning, and delivery, creating a business climate defined less by stability and more by continuous adjustment and adaptability.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          This reality is clearly reflected in the power sector, where the African Development Bank estimates that 70.7% of firms in Nigeria own or share generators, showing how self-generation has moved from a backup option to a core part of operational planning. Electricity outages also reduce annual sales by about 3%, adding a persistent productivity loss to already high energy costs. More than 60% of manufacturing firms have been further pushed to reduce reliance on the national grid due to unreliable supply, contributing to a growing shift toward off-grid solutions, including solar and hybrid energy systems. 
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
         A similar pattern is visible in the logistics sector. A report from May 2026 found that 77.7% of exporters in Nigeria face higher inland transportation and port-handling costs. These costs are no longer treated as temporary disruptions but are now embedded in pricing structures, delivery decisions, and broader competitiveness strategies.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Within the regulatory environment, pressure is determined less by direct cost and more by the uncertainty that poor timing and policy directions bring. For example, port concession agreements in Nigeria typically run on long-term cycles of 10 to 25 years, with many first signed around 2006 now due for renewal. Recent delays and ongoing review processes have created uncertainty for investors and operators, affecting revenue expectations, investment timing, and long-term planning in ways that are difficult to quantify but directly influence business confidence.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          This operating reality leaves us with one important question. Despite the uncertainties and risky business environment, why are some businesses still able to move forward under the same conditions while others struggle to keep pace?
        </p>

        {/* Chart 1 */}
        <div className="my-10 flex flex-col items-center">
        <img
            src="/operating-reality.png"
            alt="The Operating Reality"
            className="w-full max-w-4xl object-contain"
        />
        </div>

        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          Responding to the Operating Reality 
        </h2>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
         As these pressures become the norm in the business environment, many Nigerian businesses are no longer waiting for conditions to improve. Instead, they are making practical adjustments to keep their operations running, protect cash flow, and strengthen their ability to respond as conditions continue to evolve.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          One response has been a change in how businesses finance their operations. With access to formal credit still limited and borrowing costs remaining high, many firms are relying more on retained earnings, personal savings, and alternative financing to sustain operations and support growth. The 2025 World Bank Enterprise Survey found that although 94.8% of Nigerian SMEs have bank accounts, only 20.2% have access to bank loans, leaving most investments to be financed internally. Rather than depending on increasingly expensive borrowing, many businesses are looking inward, using income generated from their own operations to fund expansion, manage cash flow, and remain financially flexible.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Businesses are also changing the way they manage their operations. Across different sectors, firms are adopting digital payment solutions, business management tools, and digital procurement platforms to improve efficiency and gain better visibility into their operations. These investments help businesses monitor costs more closely, improve transaction tracking, make faster decisions, and respond more quickly as market conditions change. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Even with these adjustments, there is a limit to what individual businesses can achieve on their own. Many of the pressures affecting their performance lie beyond their control, making long-term competitiveness dependent not only on business decisions, but also on the quality of the environment in which those decisions are made.
        </p>

        <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          The Role of the Business Environment
        </h2>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Businesses can strengthen internal operations and adapt to changing market conditions, but the business environment ultimately determines how far those efforts can go. Policy certainty, reliable infrastructure, and access to finance create the conditions that enable businesses to invest, improve productivity, and compete sustainably over the long term.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         A predictable policy environment gives businesses greater confidence to plan and invest, while reliable infrastructure allows more resources to be directed towards expansion rather than overcoming operational constraints. Recent discussions around Nigeria’s investment climate have continued to emphasise that the impact of economic reforms depends on consistent implementation. The experience of the manufacturing sector reflects this reality. According to the Manufacturers Association of Nigeria, manufacturers spent ₦1.34 trillion on alternative energy in 2025 to sustain production, highlighting how infrastructure gaps continue to redirect business resources away from growth.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Access to long-term finance is equally important. The World Bank identifies long-term finance as a key driver of business investment, innovation, and productivity, yet financing constraints remain a significant challenge for Nigerian enterprises. By March 2026, Nigerian SMEs were estimated to face a financing gap of about ₦48 trillion, limiting many businesses' ability to expand, modernise, and create jobs despite their efforts to remain competitive.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Business resilience and a supportive business environment are therefore complementary. While businesses are responsible for how they respond to changing conditions, the wider business environment determines how effectively those responses translate into sustained competitiveness, investment, and economic growth.
        </p>

        
        {/* Chart 2 */}
        <div className="my-10 flex flex-col items-center">
        <img
            src="/spending-chart.png"
            alt="Spending Chart"
            className="w-full max-w-4xl object-contain"
        />
        </div>
        

         <h2 className="font-serif text-3xl md:text-3xl font-medium text-ink mb-4">
          The Fulcrum View
        </h2>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The resilience of Nigerian businesses has never really been in doubt. The greater opportunity now is to build an operating environment where resilience translates into stronger investment, higher productivity, and sustainable growth. That requires looking beyond individual policies and focusing on how the entire business ecosystem works together.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Firstly, implementation should become the new measure of progress. In 2026, several initiatives, including the National Credit Guarantee Company (NCGC), consumer credit reforms, and broader financial sector reforms, signalled continued efforts to improve the business environment. The next phase should focus on ensuring these initiatives achieve measurable outcomes for businesses. Confidence is built when reforms are implemented consistently enough for businesses to plan beyond the next quarter or budget cycle.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Secondly, infrastructure should be viewed as an economic system rather than a collection of projects. A road, rail line, or power project creates its greatest value when it connects businesses, people, and markets. For example, improving connectivity between emerging communities such as Ikorodu and major commercial districts has the potential to do more than reduce travel time. It can unlock new business locations, expand housing options, improve labour mobility, and reduce pressure on existing economic centres. Infrastructure should ultimately be measured by the economic activity it creates, not simply by the assets delivered.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Finally, financial inclusion should evolve beyond expanding access to finance. It should also expand participation in the economy. Stronger markets are built when more businesses and investors are able to transact, reinvest, and grow with confidence. Recent financing structures supporting major industrial investments, alongside increasing collaboration between government, development finance institutions, and private capital, demonstrate that well-designed partnerships can mobilise investment at a scale that government alone cannot achieve. The same thinking should continue to guide support for businesses across different sectors and different stages of growth.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The true cost of doing business is measured not only by what businesses spend, but also by the opportunities the economy leaves unrealised. If Nigeria gets these fundamentals right, businesses will spend less time overcoming constraints and more time investing, expanding, and creating long-term economic value.
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