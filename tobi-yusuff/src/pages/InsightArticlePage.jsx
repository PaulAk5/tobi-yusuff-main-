import { useNavigate, useParams, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import { INSIGHTS, findInsight, neighbours } from "../generated/insights";

// Generic article template. Renders any article in the Insights registry —
// the layout, typography, share/prev-next/author/related sections mirror the
// original bespoke article components so migrated articles are visually
// indistinguishable from the originals.

function formatDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso + "T00:00:00Z");
    return d.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return iso;
  }
}

export default function InsightArticlePage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const article = findInsight(slug);

  if (!article) {
    // Send unknown slugs back to the Insights index.
    return <Navigate to="/insights" replace />;
  }

  const { prev, next } = neighbours(slug);
  const related = INSIGHTS.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-cream">
      <SEO
        title={article.seoTitle}
        description={article.metaDescription}
        image={article.cover}
        url={`/insights/${article.slug}`}
      />

      {/* Hero */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/7] overflow-hidden">
        <img
          src={article.hero}
          alt={article.heroAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-8 md:pb-10">
          {article.badge ? (
            <span className="inline-block px-3 py-1 bg-gold text-white text-[0.65rem] font-medium tracking-[0.15em] uppercase mb-3 md:mb-4">
              {article.badge}
            </span>
          ) : null}
          <h1 className="font-serif text-3xl md:text-6xl font-light leading-tight text-white mb-3 md:mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 md:gap-4 text-white/70 flex-wrap">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-white">
              {article.author}
            </span>
            <span className="text-xs">{formatDate(article.date)}</span>
            {article.updated && article.updated !== article.date ? (
              <span className="text-xs italic">Updated {formatDate(article.updated)}</span>
            ) : null}
          </div>
        </div>
      </div>

      <article className="px-6 md:px-20 pb-24 pt-12">
        <div
          className="insight-prose"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />

        {article.hashtags ? (
          <p className="font-medium leading-[1.9] text-black/60 mb-6 mt-8">
            {article.hashtags}
          </p>
        ) : null}

        {/* Share row */}
        <div className="flex items-center justify-between py-8 border-t border-border mt-10">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-border text-muted hover:text-gray-700 transition-colors bg-transparent cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs">0</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://tobiyusuff.com/insights/${article.slug}/`)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Twitter"
              className="w-9 h-9 rounded-full bg-[#1da1f2] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://tobiyusuff.com/insights/${article.slug}/`)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Facebook"
              className="w-9 h-9 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`https://tobiyusuff.com/insights/${article.slug}/`)}`}
              aria-label="Share by email"
              className="w-9 h-9 rounded-full bg-[#888] flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="1.5" />
                <path d="M2 7l10 7 10-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <button
              aria-label="Copy link"
              className="w-9 h-9 rounded-full bg-[#555] flex items-center justify-center hover:opacity-80 transition-opacity border-none cursor-pointer"
              onClick={() => {
                if (typeof navigator !== "undefined" && navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="grid grid-cols-2 gap-4 py-8 border-t border-b border-border">
            <div
              className={`flex flex-col gap-1 ${prev ? "cursor-pointer group" : "opacity-40"}`}
              onClick={() => prev && navigate(`/insights/${prev.slug}`)}
            >
              <span className="text-xs tracking-[0.15em] uppercase text-muted flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
              </span>
              {prev ? (
                <p className="font-serif text-sm font-medium text-gray-700 group-hover:text-gold transition-colors leading-snug">
                  {prev.title}
                </p>
              ) : (
                <p className="font-serif text-sm font-medium text-gray-400 leading-snug">—</p>
              )}
            </div>
            <div
              className={`flex flex-col gap-1 text-right ${next ? "cursor-pointer group" : "opacity-40"}`}
              onClick={() => next && navigate(`/insights/${next.slug}`)}
            >
              <span className="text-xs tracking-[0.15em] uppercase text-muted flex items-center gap-1 justify-end">
                Next
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {next ? (
                <p className="font-serif text-sm font-medium text-gray-700 group-hover:text-gold transition-colors leading-snug">
                  {next.title}
                </p>
              ) : (
                <p className="font-serif text-sm font-medium text-gray-400 leading-snug">—</p>
              )}
            </div>
          </div>
        )}

        {/* Author box */}
        <div className="flex items-center gap-6 p-6 bg-[#f0ece8] mt-8">
          <img
            src="/mrtobi2.jpg"
            alt="Tobi Yusuff"
            className="w-16 h-16 rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <p className="font-serif text-lg font-medium text-ink">{article.author}</p>
            <p className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-2">About Author</p>
            <a href="https://instagram.com/tobiyusuff" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#888" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="#888" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="#888" />
              </svg>
            </a>
          </div>
        </div>

        {/* Comment form (stub — identical to originals) */}
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

        {/* Related */}
        {related.length > 0 && (
          <div className="pt-10 border-t border-border">
            <p className="text-[0.90rem] font-serif font-bold tracking-[0.18em] uppercase text-black mb-8">
              You May Also Like
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map((a) => (
                <div
                  key={a.slug}
                  className="cursor-pointer group"
                  onClick={() => navigate(`/insights/${a.slug}`)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={a.cover}
                      alt={a.coverAlt}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[0.68rem] font-medium tracking-[0.15em] uppercase text-gold mt-4 mb-2">
                    {a.category}
                  </p>
                  <h3 className="font-serif text-lg font-normal leading-snug text-ink group-hover:text-gold transition-colors">
                    {a.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
