import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BeyondRemittances() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Unlocking Nigeria's $900 Billion Real Estate - Tobi Yusuff"
        description="Nigeria holds up to $900 billion in dead capital locked in real estate. Here's how institutional reform can transform dormant assets into economic dynamism."
        image="https://tobiyusuff.com/unlocking.png"
        url="/insights/unlocking-nigeria-real-estate"
      />

      {/* <Helmet>
        <title>Unlocking Nigeria's $900 Billion Real Estate - Tobi Yusuff</title>
        <meta property="og:title" content="Unlocking Nigeria's $900 Billion Real Estate — Tobi Yusuff" />
        <meta property="og:description" content="From dead capital to financial capital — how Nigeria can unlock the full potential of its $900 billion real estate market." />
        <meta property="og:image" content="https://tobiyusuff.com/og-unlocking-nigeria.jpg" />
        <meta property="og:url" content="https://tobiyusuff.com/insights/unlocking-nigeria-real-estate" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://tobiyusuff.com/og-unlocking-nigeria.jpg" />
      </Helmet> */}

      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src="/unlocking-article.jpg"
          alt="Unlocking Nigeria's $900 Billion Real Estate: From Dead Capital to Financial Capital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
            Real Estate Finance
          </span>
          <h1 className="font-serif text-3xl md:text-6xl font-light leading-tight text-white mb-3 md:mb-4">
            Unlocking Nigeria's $900 Billion Real Estate: From Dead Capital to Financial Capital
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
          <span className="float-left font-serif text-6xl font-light leading-[0.85] mr-2 mt-1 text-gray-700">N</span>
          igeria’s skylines tell a paradoxical story. From Lagos Island’s gleaming towers to Abuja’s sprawling estates, the country showcases impressive real estate development. Yet beneath this facade of prosperity lies a fundamental economic tragedy: Nigeria holds at least $300 billion or as much as $900 billion worth of dead capital in residential real estate and agricultural land alone. This represents wealth that exists but cannot be utilised, property that shelters but cannot be leveraged, assets that appreciate but cannot be activated.
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The concept of “dead capital,” pioneered by Peruvian economist Hernando de Soto, describes assets owned by poor or middle-class people in emerging economies that cannot be realised due to poor policies, ineffective procedures, or bureaucracy. In Nigeria’s case, this phenomenon extends far beyond the poor, entrapping middle and upper-class property owners in a web of institutional failures that render their most valuable assets economically sterile..
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          The Anatomy of Nigeria’s Dead Capital Crisis
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The real estate sector contributed 5.2% of the country’s gross domestic product (GDP) in the first quarter of 2024; however, this figure significantly understates the sector’s potential. The disconnect between actual contribution and potential lies in the fundamental difference between dead capital and financial capital.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          In his 1776 writing Adam Smith’s seminal insight that “the real wealth of a country consists not in its gold and silver only, but in its lands, houses, and consumable goods of all different kinds” takes on profound significance in the Nigerian context. Here, vast quantities of real estate wealth exist in what is often called the “extra-legal” economy. It consists of properties that are possessed but not legally owned, occupied but not titled, valuable but not bankable.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Consider Lagos State, Nigeria’s commercial heartland. Despite aggressive digitization efforts and the introduction of the Lagos State Electronic Land Registration System (LASRRIS), informal property transactions still dominate. Estimates suggest that over 70% of properties in Lagos lack proper documentation, creating a massive reservoir of dead capital that cannot be leveraged for mortgages, business loans, or investment.  
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          This mirrors de Soto’s findings in Peru, where he discovered that 92% of urban and 87% of rural property in Egypt is informal. The parallel is striking: like Egypt, Nigeria’s real estate sector operates on two distinct levels, a formal tier accessible to the wealthy and well-connected, and an informal tier where the majority of transactions occur.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Institutional Economics and the Property Rights Puzzle
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Douglas North’s institutional economics framework provides crucial insights into Nigeria’s predicament. North argued that institutions determine economic performance by affecting the costs of transacting and the security of property rights. In Nigeria, weak institutions have created what economists call “high transaction costs” in property markets.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The journey from property possession to legal ownership in Nigeria illustrates these transaction costs vividly. A typical land acquisition process can involve multiple government agencies, traditional rulers, community leaders, and various bureaucratic checkpoints. Each stage introduces delays, costs, and uncertainty. North would recognise these as institutional failures that inhibit economic growth.  
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         The Certificate of Occupancy (C of O) system, inherited from colonial administration and formalised in the Land Use Act of 1978, exemplifies institutional dysfunction. While intended to streamline land administration, the system has become a bottleneck that converts potential financial capital into dead capital. In Lagos, obtaining a C of O can take 18-36 months and cost between 10-15% of property value assuming the process succeeds at all.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         This institutional weakness has created what de Soto calls “bell jars of capitalism”- isolated pockets of formal property rights surrounded by vast informal sectors. The result is a two-tier economy where property wealth cannot flow efficiently between sectors, limiting capital formation and economic growth.
        </p>


        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          The Capital Formation Tragedy
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The transformation of dead capital into financial capital requires a capital formation process – the process by which savings become productive investment. In developed economies, real estate routinely serves as collateral for business loans, mortgage financing, and investment capital. Property ownership becomes a pathway to entrepreneurship and wealth creation.  
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Nigeria’s dead capital problem prevents this transformation. Without a clear title, property cannot serve as collateral. Without collateral, owners cannot access credit. Without credit, they cannot invest in productive activities. This breaks the capital formation chain that is fundamental to wealth creation.  
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Consider a practical example: A middle-class family in Ikeja owns a property worth ₦120 million but lacks proper documentation. In a functioning capital market, this property could secure a business loan of ₦50-60 million, enabling the family to start or expand a business. Instead, the property remains “dead” i.e. valuable on paper but economically sterile in practice.The Real Estate market in Nigeria is projected to grow by 6.91% (2025-2029), resulting in a market volume of US$3.41tn in 2029. However, this growth projection assumes improved institutional frameworks. Without addressing the dead capital problem, much of this “growth” will remain economically inactive.  
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          International Case Studies: Lessons from Success Stories
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         Singapore’s transformation from developing to developed nation provides a compelling case study in converting dead capital to financial capital. In the 1960s, Singapore faced similar challenges to contemporary Nigeria; informal settlements, unclear property rights, and limited capital markets. The government’s response was systematic and comprehensive.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         The Housing Development Board (HDB) program didn’t merely build housing; it created a system where property ownership became a pathway to capital formation. By 1990, over 80% of Singaporeans owned their homes with clear title, creating a massive pool of financial capital that fueled economic growth. Today, Singaporean households routinely leverage property wealth for business investment, education financing, and retirement planning.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          Rwanda offers another instructive example. Following the 1994 genocide, Rwanda embarked on comprehensive land reform that prioritized clear property rights. The Land Tenure Regularization program issued over 11 million land titles between 2009 and 2013, transforming dead capital into financial capital on a national scale. This contributed significantly to Rwanda’s remarkable economic growth over the past two decades.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
          In Nigeria’s context, similar success stories exist at the state level. The Lagos State property registration reforms, while incomplete, have demonstrated the potential for institutional change. The introduction of electronic systems and streamlined processes have reduced registration time from 82 days to 30 days in some cases, showing how institutional improvements can unlock dead capital.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          The Multiplier Effect of Living Capital
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          When dead capital transforms into financial capital, the economic impact extends far beyond individual property owners. This creates multiplier effects—cascading benefits that ripple through the entire economy.</p>
        
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          In economies with robust property rights, real estate serves multiple economic functions simultaneously. It provides shelter (consumption), stores value (savings), generates rental income (investment), and secures credit (capital formation). This multi-functionality makes property a cornerstone of economic development.</p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Nigeria’s current system severely limits these functions. Property serves consumption and savings functions reasonably well, but fails as an investment and capital formation tool. This limitation constrains economic growth by reducing the velocity of capital.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          International data support this relationship between property rights and economic performance. Countries with strong property rights institutions consistently achieve higher GDP per capita and faster economic growth. The World Bank’s Ease of Doing Business rankings, which include property registration metrics, show a strong correlation with economic development levels.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Economic Policy Implications
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         Converting Nigeria’s dead capital to financial capital requires comprehensive policy reforms spanning multiple areas:
        </p>
        <ul className="list-none flex flex-col gap-4 mb-12 pl-2">
          {[
            { label: "Legal Framework Reform", text: "The Land Use Act of 1978 requires fundamental revision to reflect contemporary economic realities. Current provisions that vest all land in state governors create bottlenecks and uncertainty that inhibit capital formation." },
            { label: "Institutional Capacity Building", text: "Property registration institutions need significant investment in human capital, technology infrastructure, and process optimisation. The goal should be to reduce transaction costs while increasing the security of property rights." },
            { label: "Financial System Integration", text: "Banks and other financial institutions must develop products and services that can effectively utilize property as collateral. This requires regulatory frameworks that balance risk management with financial inclusion." },
             { label: "Market Infrastructure Development", text: "Efficient property markets require supporting infrastructure such as title insurance, property valuation systems, dispute resolution mechanisms, and secondary markets for mortgages and property-backed securities." },
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
          The Path Forward: A Blueprint for Transformation
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Nigeria’s journey from dead capital to financial capital requires institutional entrepreneurship deliberate efforts to create new institutions or transform existing ones. This process demands leadership from both public and private sectors.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The federal government’s role should focus on creating enabling legislation and national frameworks. The National Economic Council’s recent emphasis on subnational revenue generation provides an opportunity to link property rights reform with fiscal improvement—states that successfully convert dead capital to financial capital will see significant increases in property tax revenues.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          State governments must lead implementation efforts. Lagos State’s ongoing reforms provide a template, but each state must adapt solutions to local conditions and challenges. The key is creating systems that are accessible to average citizens, not just wealthy investors.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Private sector participation is crucial for success. Real estate developers, financial institutions, and technology companies all have roles to play in creating integrated solutions that address institutional failures while serving commercial interests.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Measuring Success: Key Performance Indicators
        </h2>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         Progress toward converting dead capital to financial capital requires measurable indicators:
        </p>
        <ul className="list-none flex flex-col gap-4 mb-12 pl-2">
          {[
            { label: "Property Registration Efficiency", text: "Time and cost to complete property registration" },
            { label: "Credit Access", text: "Percentage of property owners who can access property-backed credit" },
            { label: "Formal Sector Participationn", text: "Share of property transactions occurring in formal markets" },
            { label: "Capital Formation", text: "Volume of credit secured by property collateral" },
            { label: "Economic Integration", text: "Correlation between property ownership and business investment" },
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
         These metrics should be tracked at state and national levels, with regular reporting to ensure accountability and maintain reform momentum.
        </p>

        <h2 className="font-serif text-2xl md:text-3xl font-light text-ink mb-4">
          Conclusion: From Dormant Assets to Economic Dynamism
        </h2>
        <p className="text-base leading-[1.9] text-ink/80 mb-12">
         Nigeria stands at a critical juncture in its economic development journey. The country possesses vast real estate wealth north of $900 billion worth—that remains economically dormant due to institutional failures. This represents not just lost opportunity but an active constraint on economic growth and poverty reduction.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         The transformation from dead capital to financial capital is neither simple nor quick. It requires sustained commitment to institutional reform, technological innovation, and policy coordination across multiple levels of government. However, the potential rewards justify the effort. Unlocking Nigeria’s dead capital could fundamentally alter the country’s economic trajectory.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-12">
         As Hernando de Soto observed, “Capital is born when property rights are enforced.” The challenge for Nigeria is creating institutions that can produce appropriate processes on a national scale. The question is not whether Nigeria can afford to undertake this transformation, but whether it can afford not to. With proper institutions, Nigeria’s cities could showcase not just impressive buildings, but wealth that works, capital that builds businesses, finances dreams, and drives economic growth. Until then, Nigeria’s real estate sector will remain a magnificent display of potential energy, waiting for institutional innovation to convert it into economic dynamism. The opportunity is immense. The challenge is institutional. The time is now.
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
            <a href="https://twitter.com/intent/tweet?text=Unlocking Nigeria's $900 Billion Real Estate: From Dead Capital to Financial Capital&url=https://tobiyusuff.com/insights/beyond-remittances/" target="_blank" rel="noreferrer"
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
            <a href="mailto:?subject=Unlocking Nigeria's $900 Billion Real Estate: From Dead Capital to Financial Capital&body=https://tobiyusuff.com/insights/beyond-remittances/" target="_blank" rel="noreferrer"
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
          <div className="flex flex-col gap-1 cursor-pointer group" onClick={() => navigate("/insights/beyond-remittances")}>
            <span className="text-xs tracking-[0.15em] uppercase text-muted flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Previous
            </span>
            <p className="font-serif text-sm font-medium text-gray-700 group-hover:text-gold transition-colors leading-snug">
              Beyond Remittances
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
            <p className="font-serif text-lg font-medium text-gray-700">Tobi Yusuff</p>
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
          <h3 className="font-serif text-3xl font-light text-gray-700 mb-8">Leave a comment</h3>
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
              { slug: "/insights/beyond-remittances", img: "/beyond.png", category: "Real Estate", title: "Beyond Remittances" },
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