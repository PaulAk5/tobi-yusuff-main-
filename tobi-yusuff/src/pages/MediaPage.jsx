import { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";

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
];


export default function MediaPage({ navigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [kitIndex, setKitIndex] = useState(0);
  const videoRef = useRef(null);

  const kitImages = [
  { id: 1, src: "/MR TOBI1 copy.jpg", alt: "Tobi Yusuff Media Kit" },
  { id: 2, src: "/MR TOBI6 copy.jpg", alt: "Tobi Yusuff Media Kit" },
  { id: 3, src: "/MR TOBI7 copy.jpg", alt: "Tobi Yusuff Media Kit" },
  { id: 4, src: "/MR TOBI1 copy.jpg", alt: "Tobi Yusuff Media Kit" },
  { id: 5, src: "/MR TOBI6 copy.jpg", alt: "Tobi Yusuff Media Kit" },
];

const kitMaxIndex = kitImages.length - 3;
const kitPrev = () => setKitIndex((i) => Math.max(i - 1, 0));
const kitNext = () => setKitIndex((i) => Math.min(i + 1, kitMaxIndex));

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
    if (card.type === "blog") window.open(card.url, "_blank");
  };

  return (
    <>
    <SEO
      title="Media & Press — Tobi Yusuff"
      description="Tobi Yusuff's work and perspectives have been featured across television, print, digital and event platforms including Forbes Africa, TVC Business and The Guardian Nigeria."
      image="/fourth-anual.jpg"
      url="/media"
    />

      {/* Hero */}
      <div className="pt-32 pb-16 px-6 md:px-20 bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Media And Press
          </h1>
          <p className="text-[1rem] leading-[1.85] text-muted">
            Tobi's work and perspectives have been featured across television, print, digital and event platforms. Below is a selection of appearances and mentions that reflect his contribution to strategy, real estate and finance.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-cream">
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

          {/* Cards */}
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
                  <div className="relative overflow-hidden aspect-[16/10] bg-ink/10">

                    {card.type === "blog" && (
                      <>
                        <img src={card.thumb} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
                        <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="#0d0d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </>
                    )}

                    {card.type === "youtube" && (
                      <>
                        <img src={card.thumb} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          onError={(e) => { e.target.src = "https://tobiyusuff.com/wp-content/uploads/elementor/thumbs/Gemini_Generated_Image_kwkyzgkwkyzgkwky-rif814g9hmndt7r5qtb9qppv04hum96w4y633kdbf8.png"; }} />
                        <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/50 transition-colors duration-300 flex items-center justify-center">
                          {playingVideo === card.id ? (
                            <iframe className="absolute inset-0 w-full h-full" src={`${card.url}?autoplay=1`} allow="autoplay; fullscreen" allowFullScreen />
                          ) : (
                            <button onClick={(e) => { e.stopPropagation(); setPlayingVideo(card.id); }} className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0d0d0b"><path d="M5 3l14 9-14 9V3z"/></svg>
                            </button>
                          )}
                        </div>
                      </>
                    )}

                    {card.type === "vimeo" && (
                      <div className="absolute inset-0 bg-ink flex items-center justify-center">
                        {playingVideo === card.id ? (
                          <iframe className="absolute inset-0 w-full h-full" src={`${card.url}&autoplay=1`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                        ) : (
                          <button onClick={(e) => { e.stopPropagation(); setPlayingVideo(card.id); }} className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0d0d0b"><path d="M5 3l14 9-14 9V3z"/></svg>
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-lg font-bold leading-snug text-ink group-hover:text-black/70 transition-colors">{card.title}</h3>
                    {card.type === "blog" && <p className="text-[0.72rem] text-muted mt-1 tracking-[0.08em]">Read Article →</p>}
                    {card.type === "youtube" && <p className="text-[0.72rem] text-muted mt-1 tracking-[0.08em]">Watch →</p>}
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

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button key={i} onClick={() => setActiveIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 border-none cursor-pointer
                  ${activeIndex === i ? "bg-ink w-6" : "bg-ink/20"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Media Kits */}
      <section className="py-16 md:py-24 px-6 md:px-20 bg-cream">
        
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-6xl font-medium">Media Kits</h2>
          
          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={kitPrev}
              disabled={kitIndex === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all duration-300 disabled:opacity-30 cursor-pointer bg-transparent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={kitNext}
              disabled={kitIndex === kitMaxIndex}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-ink hover:text-white hover:border-ink transition-all duration-300 disabled:opacity-30 cursor-pointer bg-transparent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${kitIndex} * (100% / 3 + ${16 / 3}px)))` }}
          >
            {kitImages.map((img) => (
              <div key={img.id} className="flex-shrink-0 w-[calc(33.333%-0.75rem)]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}