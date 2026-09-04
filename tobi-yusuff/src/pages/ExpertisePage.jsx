import { EXPERTISE_ITEMS } from "../data/constants";
import SEO from "../components/SEO";

export default function ExpertisePage() {
  return (
    <>
    <SEO
      title="Expertise — Tobi Yusuff"
      description="Strategy, Real Estate, Marketing and Finance expertise. Co-founder of two regulated fintech ventures pioneering real estate tokenisation and credit access in Nigeria."
      image="/strategy.jpg"
      url="/expertise"
    />
      <div className="pt-32 pb-20 px-6 md:px-20 bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
        
        {/* Left — label + heading */}
        <div>
          <p className="text-[0.90rem] font-serif font-bold tracking-[0.18em] uppercase text-black mb-6">Expertise</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Strategy, Real Estate, Marketing &amp; Finance Executive
          </h1>
        </div>

        {/* Right — two paragraphs */}
        <div className="flex flex-col gap-6 pt-0 lg:pt-16">
          <p className="text-sm leading-[1.85] text-muted">
            I sit on the Governance & Strategy Committee and have led cross-functional teams to deliver flagship developments in Lagos and Abuja, secure international partnerships, and build investor confidence.
          </p>
          <p className="text-sm leading-[1.85] text-muted">
            Co-founder of two regulated fintech ventures: Asteric Asset Management and Assetize, that are pioneering real estate tokenisation and credit access in Nigeria. Passionate about applying technology to drive structural change, accelerate access to investment, and enhance governance in emerging markets.
          </p>
        </div>

      </div>
    </div>

      <section className="py-16 md:py-28 px-6 md:px-20 bg-cream">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          {EXPERTISE_ITEMS.map((item, i) => (
            <div key={item.id} className={`grid grid-cols-1 lg:grid-cols-2 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
              <img 
                className={`w-full max-w-[450px] mx-auto aspect-[3/4] object-cover object-top max-h-[600px] ${i % 2 !== 0 ? "[direction:ltr]" : ""}`} 
                src={item.img} 
                alt={item.title} 
              />
              <div className={`flex flex-col justify-center px-4 md:px-8 py-16 ${i % 2 !== 0 ? "[direction:ltr]" : ""}`}>
                <p className="font-serif font-bold text-[0.68rem] tracking-[0.18em] uppercase text-black mb-3">{item.tag}</p>
                <h2 className="font-serif font-bold text-4xl  mb-4">{item.title}</h2>
                <div className="flex flex-col gap-4">
                  {Array.isArray(item.body)
                    ? item.body.map((para, i) => (
                        <p key={i} className="text-sm leading-[1.85] text-muted">{para}</p>
                      ))
                    : <p className="text-sm leading-[1.85] text-muted">{item.body}</p>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}