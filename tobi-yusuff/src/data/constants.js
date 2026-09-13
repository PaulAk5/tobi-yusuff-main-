export const NAV_LINKS = [
  { label: "Home",         page: "home"         },
  { label: "About",        page: "about"        },
  { label: "Expertise",    page: "expertise"    },
  { label: "Media & Press",page: "media"        },
  { label: "Philanthropy", page: "philanthropy" },
  { label: "Insights",     page: "insights"     },
  { label: "Contact",      page: "contact"      },
];

// Insight articles now live in content/insights/*.md and are compiled into
// src/generated/insights.js by scripts/build-insights.mjs. Import them from
// `../generated/insights` where needed.

export const MEDIA_LOGOS = [
  { name: "The Guardian",  src: "https://tobiyusuff.com/wp-content/uploads/2025/11/png-clipart-logo-nigeria-the-guardian-newspaper-brand-logo-for-news-paper-blue-text.png" },
  { name: "Business Day",  src: "https://tobiyusuff.com/wp-content/uploads/2025/11/business-removebg-preview.png" },
  { name: "Punch",         src: "https://tobiyusuff.com/wp-content/uploads/2025/11/punch.png" },
  { name: "Scope Ratings", src: "https://tobiyusuff.com/wp-content/uploads/2025/11/Scope-Ratings-negative-1024x397.png" },
  { name: "TVC",           src: "https://tobiyusuff.com/wp-content/uploads/2025/11/tvc.png" },
];

export const EXPERTISE_ITEMS = [
  {
    id: "strategy",
    tag: "Designing strategy that survives volatility",
    title: "Strategy",
    body: [
      "Strategy for me is not a document; it is an operating system.",
      "Across roles, my strategic focus includes aligning growth plans with governance, risk and regulatory realities; embedding ESG and digital pillars into business design; and balancing ambition with liquidity and operational discipline.",
      "Whether in real estate or asset management, my work is to move organisations from broad ambition to clear, measurable progress.",
  ],
    img: "/strategy.jpg",
  },
  {
    id: "marketing",
    tag: "Telling the story behind the numbers",
    title: "Marketing",
    body: "My foundation in marketing and brand strategy shapes how I lead corporate communications today. This mix of hands-on campaign leadership and strategic training allows me to position complex products – from real estate portfolios to tokenised assets – in ways that are clear, credible and compelling.",
    img: "marketing.jpg",
  },
  {
    id: "realestate",
    tag: "Developing and stewarding high-impact assets",
    title: "Real Estate",
    body: [
    "Real estate is where my strategy, marketing, and leadership intersect.",
    "At Veritasi Homes PLC, I operate across real estate development, leading brand, market, and stakeholder strategy from concept through delivery. I have contributed to the execution of flagship residential and mixed-use developments across Lagos and Abuja; shaped go-to-market and diaspora-focused offerings; strengthened brand equity and investor confidence through clear positioning and disciplined communications; and enabled leadership decision-making through systems that provide real-time visibility into project progress, sales performance, and customer engagement.",
    "My speaking and advisory work focuses on investor education, trust and transparency in real estate, brand integrity as a driver of long-term value, and the role of digital platforms and data in improving governance and customer experience across the sector.",
  ],
    img: "/real-estate.jpg",
  },
  {
    id: "finance",
    tag: "Where capital, compliance and creativity meet",
    title: "Finance",
    body: [
      "On the finance side, my work is split between capital markets engagement at Veritasi and product innovation through Asteric Asset Management and Assetize.",
      "Across all of this, my goal is simple: to connect good assets with the right capital, under structures that protect everyone at the table."
    ],
    img: "/mr tobi3.jpg",
  },
];