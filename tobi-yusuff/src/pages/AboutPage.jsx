import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <>
    <SEO
      title="About Tobi Yusuff — Strategist & Executive Director"
      description="Oluwatobi Yusuff is an Executive Director and strategist working at the intersection of real estate development, finance and digital transformation in Africa."
      image="/mr tobi3.jpg"
      url="/about"
    />
      {/* Page Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[120vh]">
        
        {/* Left — Image */}
        <div className="relative min-h-[70vh] lg:min-h-full">
          <img
            src="/mr tobi3.jpg"
            alt="Tobi Yusuff"
            className="w-full h-full object-cover object-top absolute inset-0"
          />
        </div>

        {/* Right — Text */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-20 bg-white">
          <p className="text-[1rem] font-serif font-semibold tracking-[0.18em] uppercase text-black mb-6">
            About Me · Meet Tobi
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
            A Strategist Building the Future of Real Assets
          </h1>
          <p className="text-[1rem] leading-[1.85] text-muted mb-5">
            I am Oluwatobi Yusuff – an Executive Director and strategist working at the intersection of real estate development, finance and digital transformation.
          </p>
          <p className="text-[1rem] leading-[1.85] text-muted">
            Today, I serve as Executive Director – Corporate Communications, Strategy & Execution at Veritasi Homes PLC, where I help steer the company's long-term direction, shape our investor and stakeholder narrative, and oversee the execution of flagship developments across Lagos and Abuja.
          </p>
        </div>

      </div>

      <section className="bg-cream py-16 md:py-28 px-6 md:px-20">

      {/* Two col — heading left, text right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start mb-24">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium leading-tight">
            Building At The Crossroads Of Property And Fintech
          </h2>
        </div>
        <div>
          <p className="text-sm leading-[1.85] text-muted mb-5">
            Today, I serve as Executive Director – Corporate Communications, Strategy &amp; Execution at Veritasi Homes PLC, where I help steer the company's long-term direction, shape our investor and stakeholder narrative, and oversee the execution of flagship developments across Lagos and Abuja.
          </p>
          <p className="text-sm leading-[1.85] text-muted">
            Beyond traditional real estate, I also serve as Co-Founder and Executive Director of <strong>Asteric Asset Management (AAM)</strong>. Since 2021, I have co-led AAM from licensing to full operations, building an integrated platform that provides brokerage and credit services to SMEs and individual clients. We have developed portfolio products that particularly serve diaspora investors and contributed to <strong>multi-billion-naira assets under management</strong> with an <strong>average revenue growth rate of about 25%</strong> since launch.
          </p>
        </div>
      </div>

      {/* What drives my work */}
      <div className="text-center mb-16">
        <p className="font-serif text-[.8rem] font-bold tracking-[0.18em] uppercase text-black mb-4">What Drives My Work</p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-6xl mx-auto">
          I Am Passionate About Using Technology And Disciplined Strategy To
        </h2>
      </div>

      {/* Three cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Expand Access",
            body: "Especially for investors and entrepreneurs in and from emerging markets.",
            icon: <img src="/inclined-key.png" alt="Expand Access" width={64} height={64} />,
          },
          {
            title: "Strengthen Governance",
            body: "Building systems that protect investors and create accountability.",
            icon: <img src="/marketing-icon.png" alt="Strengthen Governance" width={64} height={64} />,
          },
          {
            title: "Unlock Real Value",
            body: "So that homes, estates and financial products actually change lives, not just balance sheets.",
            icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="28" width="40" height="26" rx="1" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <path d="M8 30L32 12L56 30" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="24" y="40" width="16" height="14" rx="1" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <rect x="16" y="34" width="8" height="8" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <rect x="40" y="34" width="8" height="8" rx="0.5" stroke="#1a1a1a" strokeWidth="1.5"/>
                </svg>
              ),
          },
        ].map((p) => (
          <div key={p.title} className="p-8 bg-[#f5f3ef] flex flex-col gap-6">
            {p.icon}
            <div>
              <div className="font-serif text-xl font-semibold text-ink mb-2">{p.title}</div>
              <div className="text-sm leading-relaxed text-muted">{p.body}</div>
            </div>
          </div>
        ))}
      </div>

    </section>

    {/* Education & Achievements */}
    <section className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px] mb-16">

      {/* Images — side by side on mobile, each takes 1 col on desktop */}
      <div className="gap-2 grid grid-cols-2 lg:contents">
        
        {/* Image 1 */}
        <div className="relative min-h-[250px] lg:min-h-full">
          <img
            src="/mrtobi2.jpg"
            alt="Tobi Yusuff"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

        {/* Image 2 */}
        <div className="relative min-h-[250px] lg:min-h-full">
          <img
            src="/marketing.jpg"
            alt="Tobi Yusuff"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>

      </div>

      {/* Education list */}
      <div className="flex flex-col justify-center px-10 md:px-14 py-16 bg-white">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-10">
          Education &amp; Professional Achievements
        </h2>
        <ul className="list-none flex flex-col gap-5">
          {[
            "Senior Management Programme – Lagos Business School",
            "Postgraduate Diploma in Marketing Strategy – Chartered Institute of Marketing (UK)",
            "Entrepreneurship Training – StartUp Sussex, University of Sussex",
            "Fellow – Chartered Institute of Marketing (UK)",
            "Member – Nigerian Institute of Management",
            "Chartered Institute of Directors – In progress",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                <path d="M2 8l4 4 8-8" stroke="#b8923a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

    </section>
    </>
  );
}