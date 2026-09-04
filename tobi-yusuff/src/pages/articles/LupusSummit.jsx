import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO";

export default function LupusSummit() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title="Summit for Lupus: A Climb with Purpose — Tobi Yusuff"
        description="A climb to the peak of Mt. Kilimanjaro to raise awareness and funds for people living with Lupus in Nigeria. Over ₦30 million raised toward a Lupus Wellness Centre."
        image="https://tobiyusuff.com/lupus.png"
        url="/philanthropy/lupus-summit"
      />

      {/* <Helmet>
        <title>Summit for Lupus: A Climb with Purpose - Tobi Yusuff</title>
        <meta property="og:title" content="Summit for Lupus: A Climb with Purpose — Tobi Yusuff" />
        <meta property="og:description" content="A climb to the peak of Mt. Kilimanjaro to raise awareness and funds for people living with Lupus in Nigeria." />
        <meta property="og:image" content="https://tobiyusuff.com/og-lupus-summit.jpg" />
        <meta property="og:url" content="https://tobiyusuff.com/philanthropy/lupus-summit" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://tobiyusuff.com/og-lupus-summit.jpg" />
      </Helmet> */}

      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src="/lupus.png"
          alt="Summit for Lupus: A Climb with Purpose"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          {/* <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
            Real Estate Finance
          </span> */}
          <h1 className="font-serif text-3xl md:text-6xl font-light leading-tight text-white mb-3 md:mb-4">
            Summit for Lupus: A Climb with Purpose
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
          <span className="float-left font-serif text-6xl font-light leading-[0.85] mr-2 mt-1 text-gray-700">W</span>
          hen I first committed to climbing Mount Kilimanjaro, it was never about the mountain itself. It was about what the climb could represent.
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          The Summit for Lupus campaign was born out of a simple but urgent need: to bring visibility to Lupus, a chronic autoimmune disease that affects millions of people worldwide, yet remains widely misunderstood, especially in Nigeria. For many living with lupus, the journey is often invisible, marked by uncertainty, fatigue, and resilience. 
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Preparation for the climb required discipline, both physically and mentally. But beyond the training, what stayed with me was the responsibility of the mission. This was not just a personal challenge. It was a platform to amplify voices that are too often unheard. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Over four days on the mountain, every step reinforced the purpose behind the climb. The terrain was demanding, the air grew thinner, and progress required patience. In many ways, it mirrored the lived experience of lupus warriors. Unpredictable, challenging, and requiring strength even on the hardest days.     
        </p>

        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Reaching 4,720 metres above sea level was a defining moment, not just physically, but symbolically. It stood as a testament to what is possible when purpose drives action. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          More importantly, the campaign extended far beyond the mountain.  
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          Through the support of partners, advocates, and a growing community of supporters, we have successfully raised over ₦30 million toward the establishment of a Lupus Wellness Centre in Nigeria. This is a critical step toward creating a dedicated space for awareness, care, and support for those living with the condition. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          This journey would not have been possible without the organisations that believed in the mission from the start. I am deeply grateful to Providus Bank, Veritasi Homes Plc, Loatsad Promomedia, E-Motion Advertising, ARN Foods, FEW Group, Stratolift, Dutum Construction Company Ltd, and our media partner VL Magazine for their support.  
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          I also acknowledge the continued advocacy and partnership of the Mablevi Lupus Foundation, whose work remains central to advancing awareness and support for lupus in Nigeria. 
        </p>
        <p className="text-base leading-[1.9] text-gray-700/80 mb-6">
          While the climb has been completed, the mission continues. 
        </p>
        <p className="font-medium leading-[1.9] text-black/60 mb-6">
          The goal remains clear: to build a Lupus Wellness Centre that ensures no one living with lupus in Nigeria faces the journey alone. 
        </p>
        <p className="font-medium leading-[1.9] text-black/60 mb-6">
          This is only the beginning. 
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