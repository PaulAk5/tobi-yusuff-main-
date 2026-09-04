import { useState, useEffect, useRef } from "react";
import NewsletterModal from "../components/NewsletterModal";
import { ARTICLES, MEDIA_LOGOS } from "../data/constants";
import SEO from "../components/SEO";

// ── HeroContent ─
function HeroContent({ navigate }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-10 max-w-6xl mt-auto pt-[60vh] md:pt-[55vh]">
      <h1
        className={`font-serif font-semibold leading-tight text-white mb-4
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        A Strategist Building<br />the Future of Real Assets{" "}
      </h1>

      <p
        className={`text-sm leading-loose text-white/70 max-w-lg mb-10
          transition-all duration-1000 ease-out delay-100
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        Strategy and real-assets executive with 15+ years of leadership across
        real estate development, finance, technology, and corporate transformation.
      </p>

      <button
        className={`font-serif inline-flex items-center gap-3 px-8 py-3 bg-white text-ink text-[1.5rem]
          font-semibold tracking-[0.1em] border-none cursor-pointer
          hover:bg-black hover:text-white transition-all duration-500 ease-out delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        onClick={() => navigate("about")}
      >
        Meet Tobi
      </button>
    </div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-ink text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-gold cursor-pointer border-none
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function QuoteBand() {
  const fullText = `Visionary executive with 15+ years of leadership across Real Estate, Finance, And Digital Transformation, Driving Corporate Strategy.`;
  const blackPhrase = "Real Estate, Finance, And Digital Transformation,";

  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDisplayed("");
          setStarted(true);
        } else {
          setStarted(false);
          setDisplayed("");
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.3 } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      index += 1;
      setDisplayed(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(intervalRef.current);
      }
    }, 28);

    return () => clearInterval(intervalRef.current);
  }, [started]);

  const renderText = () => {
    const blackStart = displayed.indexOf(blackPhrase.slice(0, 10));
    if (blackStart === -1) return <span>{displayed}</span>;
    const blackEnd = blackStart + blackPhrase.length;
    return (
      <>
        <span>{displayed.slice(0, blackStart)}</span>
        <em className="text-white not-italic">{displayed.slice(blackStart, Math.min(blackEnd, displayed.length))}</em>
        {displayed.length > blackEnd && <span>{displayed.slice(blackEnd)}</span>}
      </>
    );
  };

  return (
    <div ref={ref} className="py-24 px-8 md:px-20 bg-ink text-center">
      <blockquote className="font-serif text-2xl md:text-4xl font-light italic text-cream max-w-3xl mx-auto leading-snug">
        {renderText()}
        {displayed.length < fullText.length && started && (
          <span className="inline-block w-[2px] h-[1em] bg-gold ml-1 animate-pulse align-middle" />
        )}
      </blockquote>
    </div>
  );
}

function MediaCarousel({ navigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRef = useRef(null);

  const cards = [
    {
      id: 1,
      type: "youtube",
      title: "Channels TV News Interview",
      category: "Media",
      thumb: "https://img.youtube.com/vi/f8Jh021YUao/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/f8Jh021YUao",
    },
    {
      id: 2,
      type: "youtube",
      title: "Bond Issuance Programme",
      category: "Media",
      thumb: "https://img.youtube.com/vi/JGVyltpxLKQ/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/JGVyltpxLKQ",
    },

    {
      id: 3,
      type: "youtube",
      title: "",
      category: "Media",
      thumb: "https://img.youtube.com/vi/MPVlBoQrkCM/hqdefault.jpg",
      url: "https://www.youtube.com/embed/MPVlBoQrkCM",
    },

    {
      id: 4,
      type: "blog",
      title: "Fourth Annual Veritasi Realtors' Conference ",
      category: "Finance",
      thumb: "/fourth-anual.jpg",
      url: "https://guardian.ng/news/industry-experts-discuss-the-future-of-real-estate-at-veritasi-realtors-conference/",
    },

    {
      id: 5,
      type: "blog",
      title: "Dual Investment Grade Ratings fronm DataPro and GCR",
      category: "Real Estate",
      thumb: "/dual-investment.jpg",
      url: "https://punchng.com/veritasi-homes-secures-dual-investment-grade-ratings-from-datapro-and-gcr/",
    },

    {
      id: 6,
      type: "blog",
      title: "FORBES AFRICA",
      category: "Real Estate",
      thumb: "/forbes-afrca.jpg",
      url: "https://www.forbesafrica.com/brand-voice/2021/08/11/creating-better-living-in-nigeria",
    },

    {
      id: 7,
      type: "blog",
      title: "Veritasi Homes Redeems N5.53bn series 1 & 2 commercial paper",
      category: "Strategy",
      thumb: "/commercial.jpg",
      url: "https://businessday.ng/companies/article/veritasi-homes-redeems-n5-53bn-series-1-2-commercial-paper/",
    },

  
    // {
    //   id: 8,
    //   type: "vimeo",
    //   title: "Stay Strong: A Message for People Living With Lupus",
    //   category: "Speaking",
    //   url: "https://player.vimeo.com/video/1168812762?h=568582484a",
    // },
    
    
    
  ];

  const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 1 : 3);

  useEffect(() => {
    const handleResize = () => setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const maxIndex = cards.length - visibleCount;

  const prev = () => setActiveIndex((i) => Math.max(i - 1, 0));
  const next = () => setActiveIndex((i) => Math.min(i + 1, maxIndex));

  const handleCardClick = (card) => {
    if (card.type === "blog") {
      window.open(card.url, "_blank");
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-20 bg-white">

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <p className="text-[0.90rem] font-serif font-semibold tracking-[0.18em] uppercase text-black mb-4">
          Media & Press
        </p>
        <h2 className="font-serif text-3xl md:text-6xl font-light leading-tight">
          In The Media
        </h2>
        <p className="text-[1rem] leading-[1.85] text-muted max-w-4xl mt-4 mb-6">
          Tobi's work and perspectives have been featured across television, print, digital and event platforms. Below is a selection of appearances and mentions that reflect his contribution to strategy, real estate and finance.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-ink text-cream rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30
            ${hovering && activeIndex > 0 ? "opacity-100" : "opacity-0"}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Cards window */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${activeIndex} * (100% / ${visibleCount} + ${24 / visibleCount}px)))` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] group cursor-pointer"
                onClick={() => handleCardClick(card)}
              >
                {/* Thumbnail / Video */}
                <div className="relative overflow-hidden aspect-[16/10] bg-ink/10">

                  {/* Blog card */}
                  {card.type === "blog" && (
                    <>
                      <img
                        src={card.thumb}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
                      {/* External link icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="#0d0d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </>
                  )}

                  {/* YouTube card */}
                  {card.type === "youtube" && (
                    <>
                      <img
                        src={card.thumb}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        onError={(e) => { e.target.src = "https://tobiyusuff.com/wp-content/uploads/elementor/thumbs/Gemini_Generated_Image_kwkyzgkwkyzgkwky-rif814g9hmndt7r5qtb9qppv04hum96w4y633kdbf8.png"; }}
                      />
                      <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/50 transition-colors duration-300 flex items-center justify-center">
                        {playingVideo === card.id ? (
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`${card.url}?autoplay=1`}
                            allow="autoplay; fullscreen"
                            allowFullScreen
                          />
                        ) : (
                          <button
                            onClick={(e) => { e.stopPropagation(); setPlayingVideo(card.id); }}
                            className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0d0d0b">
                              <path d="M5 3l14 9-14 9V3z"/>
                            </svg>
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Card info */}
                <div className="pt-4">
                  <h3 className="font-serif text-lg font-bold leading-snug text-ink group-hover:text-black/70 transition-colors">
                    {card.title}
                  </h3>
                  {card.type === "blog" && (
                    <p className="text-[0.72rem] text-muted mt-1 tracking-[0.08em]">Read Article →</p>
                  )}
                  {(card.type === "youtube" || card.type === "video") && (
                    <p className="text-[0.72rem] text-muted mt-1 tracking-[0.08em]">Watch →</p>
                  )}
                </div>
                </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          disabled={activeIndex === maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-ink text-cream rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30
            ${hovering && activeIndex < maxIndex ? "opacity-100" : "opacity-0"}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer
                ${activeIndex === i ? "bg-ink w-6" : "bg-ink/20"}`}
            />
          ))}
        </div>
      </div>

      {/* See All button */}
      <div className="flex justify-center mt-10">
        <button
          className="px-10 py-3 border border-ink text-ink text-[0.78rem] font-medium tracking-[0.1em] uppercase hover:bg-ink hover:text-cream transition-colors"
          onClick={() => navigate("media")}
        >
          See All
        </button>
      </div>

    </section>
  );
}


export default function HomePage({ navigate }) {
  return (
    <>
    <SEO
        title="Tobi Yusuff - Strategist, Real Estate & Finance Executive"
        description="Strategy and real-assets executive with 15+ years of leadership across real estate development, finance, technology, and corporate transformation."
        image="/background-imgg.png"
        url="/"
      />
      <NewsletterModal />
      <ScrollToTop />
      {/* ── HERO ── */}
      <section className="min-h-screen relative flex flex-col px-8 md:px-20 pb-20 md:pb-20 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/background-imgg.png"
            alt="Tobi Yusuff"
            className="w-full h-full object-cover object-[center_12%] scale-125 origin-top md:scale-100 md:origin-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <HeroContent navigate={navigate} />

      </section>


      {/* ── ABOUT INTRO ── */}
      <section className="py-16 md:py-28 px-6 md:px-20">

        {/* Top: heading left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start mb-16">
          <div>
            <p className="text-[0.70rem] font-serif font-bold tracking-[0.18em] uppercase text-black mb-4">Meet Tobi Yusuff</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Strategy, Real Estate, Marketing &amp; Finance Executive
            </h2>
          </div>
          <div>
            <p className="text-sm leading-[1.85] text-muted mb-6">
              Tobi Yusuff is a strategy and real-assets executive with 15+ years of leadership across real estate development, finance, technology, and corporate transformation.
            </p>
            <p className="text-sm leading-[1.85] text-muted">
              As Executive Director of Corporate Communications, Strategy & Execution at Veritasi Homes PLC, he shapes the company's long-term strategy, drives stakeholder engagement, strengthens governance systems, and oversees the successful delivery of major developments across Lagos and Abuja.
            </p>
          </div>
        </div>

        {/* Icons grid — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border mb-16">
          {[
            {
              label: "Strategy",
              desc: "Designing strategy that survives volatility",
              icon: <img src="/strategy-icon.png" alt="Strategy" width={64} height={64} />,
            },
            {
              label: "Marketing",
              desc: "Telling the story behind the numbers",
              icon: <img src="/marketing-icon.png" alt="Marketing" width={64} height={64} />,
            },
            {
              label: "Real Estate",
              desc: "Developing and stewarding high-impact assets",
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
            {
              label: "Finance",
              desc: "Where capital, compliance and creativity meet",
              icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="40" width="10" height="14" rx="1" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <rect x="22" y="30" width="10" height="24" rx="1" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <rect x="36" y="20" width="10" height="34" rx="1" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <path d="M14 28L28 18L42 10" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="42" cy="10" r="3" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <path d="M50 18L56 12" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M50 12H56V18" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
          ].map((h, i) => (
            <div key={h.label} className={`p-8 flex flex-col gap-4
              ${i % 4 !== 3 ? "border-r border-border" : ""}`}>
              {h.icon}
              <div className="text-[0.70rem] font-medium tracking-[0.15em] uppercase text-black">{h.label}</div>
              <div className="font-sans text-sm font-light text-muted leading-relaxed">{h.desc}</div>
            </div>
          ))}
        </div>

        {/* Bottom: career highlights left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Image */}
          <div>
            <img
              className="w-full aspect-[3/4] object-cover grayscale-[20%]"
              src="/career-highlights.png"
              alt="Tobi Yusuff"
            />
          </div>
          <div>
            <p className="text-[1rem] font-serif font-semibold tracking-[0.18em] uppercase text-black mb-4">Career Highlights</p>
            <br />
            <h3 className="font-serif text-2xl md:text-6xl font-medium mb-4">
              Driving Digital Transformation in <em className="italic text-black">African Assets</em>
            </h3>
            <br />
            <p className="text-[1.0rem] leading-[1.85] text-muted">
             Tobi is an Executive Director and multi-venture Co-Founder with a track record of shaping corporate strategy, capital formation, communications, and execution for high-growth companies across real estate, asset management, and digital transformation.            
            </p>
            <br />
            <ul className="list-none">
              {[
                "Executive Director – Corporate Communications, Strategy & Execution, Veritasi Homes PLC",
                "Co-Founder & Executive Director – Assetize (real estate tokenisation platform)",
                "Co-Founder & Executive Director – Asteric Asset Management",
                "15+ Years Across Real Estate, Asset Management, Marketing Strategy & Digital Transformation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 py-4 border-b border-border text-sm leading-relaxed text-muted">
                  <span className="flex-shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="8.5" stroke="#b8923a" strokeWidth="1"/>
                      <path d="M5 9.5L7.5 12L13 6.5" stroke="#b8923a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="inline-flex items-center gap-3 px-8 py-3 bg-ink text-cream text-[1rem] font-serif font-medium tracking-[0.1em] border-none cursor-pointer hover:bg-black transition-colors mt-8"
              onClick={() => navigate("about")}
            >
              About Tobi
            </button>
          </div>

          
        </div>

      </section>

      {/* ── QUOTE BAND ── */}
      <QuoteBand />

      {/* ── MEDIA CAROUSEL ── */}
      <MediaCarousel navigate={navigate} />


      {/* ── INSIGHTS ── */}
      <section className="py-16 md:py-10 px-6 md:px-20">
        <p className="text-[0.90rem] font-serif font-semibold tracking-[0.18em] uppercase text-black mb-4">Key themes I speak and write about</p>
        <h2 className="font-serif text-3xl md:text-6xl font-light leading-tight mb-6">Thought Leadership</h2>
        <p className="text-sm leading-[1.85] text-muted max-w-xl mb-10">
          My thinking is shaped as much by boardrooms and deal rooms as it is by conversations with realtors, investors, founders and policymakers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {ARTICLES.map((a) => (
            <div key={a.id} className="cursor-pointer group" onClick={() => navigate(`/insights/${a.slug}`)}>
              <div className="overflow-hidden">
                <img className="w-full aspect-[4/3] object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]" src={a.img} alt={a.title} />
              </div>
              <p className="text-[0.9rem] font-serif font-semibold tracking-[0.15em] uppercase text-black mt-4 mb-2">{a.category}</p>
              <h3 className="font-serif text-lg md:text-xl font-normal leading-snug text-ink">{a.title}</h3>
            </div>
          ))}
        </div>
        <button
          className="inline-flex items-center gap-3 px-6 md:px-8 py-3 bg-ink text-cream text-[0.78rem] font-medium tracking-[0.1em] uppercase border-none cursor-pointer hover:bg-gold transition-colors mt-10 md:mt-12"
          onClick={() => navigate("insights")}
        >
          Browse All Articles
        </button>
      </section>
    </>
  );
}