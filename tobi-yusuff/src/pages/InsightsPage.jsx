import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLES } from "../data/constants";
import PDFGateModal from "../components/PDFGateModal";
import SEO from "../components/SEO";

const CATEGORIES = ["All", "Real Estate", "Finance", "Strategy", "Marketing"];

export default function InsightsPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeFilter);

  return (
    <div className="min-h-screen bg-cream pt-[72px]">
    <PDFGateModal />
    <SEO
      title="Thought Leadership & Insights — Tobi Yusuff"
      description="Writing and speaking on real estate, strategy, finance and digital transformation in Africa. Key themes shaping the future of real assets."
      image="/election-cover-page.jpg"
      url="/insights"
    />

      {/* ── HERO ── */}
      <section className="py-16 md:py-24 px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">
          <div>
            <p className="text-[0.9rem] font-serif font-bold tracking-[0.18em] uppercase text-black/60 mb-4">
              Key Themes I Speak And Write About
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-ink">
              Thought Leadership
            </h1>
          </div>
          <div className="lg:pt-16">
            <p className="text-sm leading-relaxed text-muted">
              My thinking is shaped as much by boardrooms and deal rooms as it is by conversations with realtors, investors, founders and policymakers. I use writing and speaking as a way to clarify that thinking and to make complex ideas more accessible.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="px-6 md:px-20 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-ink/50">Filter by</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm border-none bg-transparent cursor-pointer transition-colors px-1
                ${activeFilter === cat ? "text-gold font-medium" : "text-ink/40 hover:text-ink"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="w-full h-[1px] bg-ink/10" />
      </div>

      {/* ── ARTICLES GRID ── */}
      <section className="pb-24 px-6 md:px-20">
        {filtered.length === 0 ? (
          <p className="text-sm text-muted">No articles in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <div
                key={a.id}
                className="cursor-pointer group"
                onClick={() => navigate(`/insights/${a.slug}`)}
              >
                <div className="overflow-hidden">
                  <img
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    src={a.img}
                    alt={a.title}
                  />
                </div>
                <p className="text-[0.68rem] font-medium tracking-[0.15em] uppercase text-ink/50 mt-4 mb-2">
                  {a.category}
                </p>
                <h3 className="font-serif text-xl font-normal leading-snug text-ink group-hover:text-gold transition-colors">
                  {a.title}
                </h3>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}