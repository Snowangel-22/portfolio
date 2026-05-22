const base = import.meta.env.BASE_URL
const appliedMaterialsGTMCover = `${base}images/project/project-AppliedMaterials-GTM.png`
const acnhCover = `${base}images/project/project-acnh-gift-guide-cover.png`
const lOrealCover = `${base}images/project/project-LOreal-cover.jpg`
const erpCover = `${base}images/project/project-ERP-cover.jpg`
const fireworksAICover = `${base}images/project/project-FireworksAI-TakeHome.png`

export const projects = [
  {
    id: "applied-materials",
    title: "Service Product GTM",
    tagline: "$500K+ contract revenue. $200K+ qualified pipeline.",
    description: "Led go-to-market strategy for a new service product at Applied Materials using data analytics and AI. Owned pricing, positioning, and cross-functional launch across sales and engineering.",
    tags: ["Product Management", "GTM", "Data Analytics", "AI"],
    image: appliedMaterialsGTMCover,
    featured: true,
    hidden: true,
    type: "pm",

    role: "Product Manager - Service Product",
    context: "Applied Materials",
    period: "July 2024 - Present",
    sortDate: "2099-07",
    team: "Cross-functional: Sales, Engineering, Marketing",

    problem: "Applied Materials needed to expand a new line of hardware services. The service offering existed but lacked a coherent go-to-market strategy, pricing model, and sales narrative. Early customers generated interest but there was no systematic approach to scaling.",

    solution: "Developed a data-driven GTM strategy that included: (1) customer segmentation and pricing analysis, (2) competitive positioning against service incumbents, (3) sales enablement deck with quantified ROI, (4) AI-powered analytics dashboard to track pipeline and forecast.",

    results: [
      "Generated $500K+ in contract revenue within 6 months",
      "Hit 100% renewal rate on current service contracts",
      "Identified and closed upselling opportunities that exceeded quota per quarter"
    ],

    keyMetrics: [
      { label: "Contract Revenue", value: "$500K+" },
      { label: "Qualified Pipeline", value: "$200K+" },
    ],
  },
  {
    id: "acnh-gift-guide",
    title: "ACNH Gift Guide",
    tagline: "Find the perfect gift for your Animal Crossing villagers, matched to your actual inventory.",
    description: "A gift-finder for Animal Crossing: New Horizons players. Matches owned items to villager style preferences across 1,458 items. Built with React, Vite, and Fuse.js fuzzy search.",
    tags: ["React", "Vite", "Fuse.js", "localStorage"],
    image: acnhCover,
    featured: true,
    type: "engineering",
    externalLink: "https://acnh-gift-guide-tawny.vercel.app/",

    role: "Solo Engineer",
    context: "Personal Project",
    period: "March 2026",
    sortDate: "2026-03",
    team: "Solo",

    problem: "In Animal Crossing: New Horizons, each of 391 villagers has style preferences across 1,458 items. The in-game UI doesn't show preferences, and looking them up requires switching between wiki tabs and in-game storage. Friction kills the gifting loop.",

    solution: "Built a web app that encodes all 391 villagers and 1,458 items statically. Players log their inventory, and the app instantly surfaces matching items per villager. Fuse.js handles fuzzy search. localStorage handles persistence. No backend needed.",

    results: [
      "Reduced lookup time from 10 minutes to under 1 minute per villager",
      "Positive reception in r/AnimalCrossing community",
      "50 monthly active visitors"
    ],
  },
  {
    id: "loreal-brandstorm",
    title: "L'Oreal Brandstorm 2025",
    tagline: "Personalized skincare coach for men, pitched to L'Oreal Brandstorm 2025.",
    description: "Led a 3-person team to define and pitch LuminAl, an AI skincare coach for men new to skincare. Covered market research, product definition, and a full pitch deck for an international competition.",
    tags: ["Figma", "Market Research", "AI", "Lovable"],
    image: lOrealCover,
    featured: false,
    type: "pm",

    role: "Product Lead",
    context: "Brandstorm 2025 (Team Project)",
    period: "August 2024 - November 2024",
    sortDate: "2024-11",
    team: "PM, Engineer, Marketing (3 people)",

    problem: "Young men starting skincare face information overload and no personalized entry point. Existing apps are built for enthusiasts, not beginners.",

    solution: "Defined LuminAl, an AI skincare coach that links product ingredients to user feedback over time and builds a personalized routine from real usage data. Led market research, product definition, and pitch deck across a 3-person team.",

    results: [
      "Submitted to L'Oreal Brandstorm 2025 international competition",
      "Delivered full product pitch: market sizing, user research, product concept, and UX prototype",
      "Scoped a technically feasible MVP using existing ingredient APIs and LLM personalization",
    ],
  },
  
  {
    id: "erp-startup",
    title: "ERP Startup Case Study",
    tagline: "3-part take-home: ML model, customer deck, and product memo.",
    description: "Case assignment: developed a working proof of concept and pitch deck for a customer to migrate their legacy ERP system to a cloud-based solution with predictive analytics.",
    tags: ["Product Management", "Data Modeling", "Claude", "ChatGPT"],
    image: erpCover,
    featured: false,
    type: "pm",

    role: "Case Study Candidate",
    context: "Startup PM Interview",
    period: "July 2025",
    sortDate: "2025-07",
    team: "Solo",

    problem: "Mid-market enterprises running legacy ERPs manage inventory demand manually, through spreadsheets and gut feel. Errors are costly and reactive.",

    solution: "Built three deliverables for ARP's PM interview: an inventory demand prediction model in spreadsheet form, an executive pitch deck with business case for cloud migration, and a product memo covering features, roadmap, and implementation approach.",

    results: [
      "Completed a 3-part case study covering data modeling, customer narrative, and product strategy",
      "Prediction model forecasted inventory demand using historical order patterns",
      "Delivered within a one-week window as a solo assignment",
    ],
  },

  {
    id: "fireworks-ai",
    title: "Fireworks AI Take-Home",
    tagline: "Model selector and evaluator for engineers migrating from closed to open models.",
    description: "A web app that recommends open models for a given prompt, runs them live, and compares latency, cost, and token usage side by side.",
    tags: ["React", "Fireworks AI API", "LLM", "Product Design"],
    image: fireworksAICover,
    featured: true,
    type: "engineering",
    externalLink: "https://fireworks-ai-six.vercel.app/",

    role: "APM Candidate",
    context: "Fireworks AI Interview",
    period: "May 2026",
    sortDate: "2026-05",
    team: "Solo",

    problem: "Software and ML engineers at AI-forward startups and enterprises have one core question when evaluating open models: \"Will this be good enough for my specific use case and prompts?\" Cost and latency advantages are obvious once quality parity is shown, but there's no easy way to test that parity against real workloads. Technical migration is too customer-specific to generalize, so the blocker is always quality validation first.",

    solution: "Built a model recommender and evaluation tool on the Fireworks AI API. Engineers paste in their existing prompt, get model recommendations ranked for their use case, then run the prompt live across top candidates. Latency, token usage, and cost are shown side by side. The output is a downloadable comparison summary designed to be shared as an internal pitch for migrating off proprietary models.",

    results: [
      "Delivered a working, deployed prototype within the 2-hour window",
      { text: "Wrote a product spec covering user research, scoping decisions, and feature rationale", href: "fireworks-ai-spec.pdf" },
      "Scoped deliberately: excluded technical migration (too customer-specific) to focus on the highest-leverage blocker, quality validation",
    ],
  },

  {
    id: "portfolio-v2",
    title: "Portfolio v2",
    tagline: "Personal portfolio built to show both product thinking and engineering execution.",
    description: "Built from scratch with React 18, Vite, and Tailwind CSS. Features scroll-reveal animations, project modals, and a light/dark theme toggle. Designed and deployed solo.",
    tags: ["React 18", "Vite 5", "Tailwind CSS", "Framer Motion"],
    image: appliedMaterialsGTMCover,
    featured: false,
    type: "engineering",

    role: "Solo Designer & Engineer",
    context: "Personal Project",
    period: "April 2026",
    sortDate: "2026-04",
    team: "Solo",

    problem: "Needed a portfolio that reflects the actual brand: technical enough to show engineering ability, product-minded enough to show UX thinking. A static site wouldn't cut it.",

    solution: "Built with React 18, Vite, and Framer Motion. Project details open in modals instead of new pages. Scroll-reveal animations, light/dark theme toggle, and responsive layout across all breakpoints.",

    results: [
      "Deployed and live for recruiters and peers",
      "Built and iterated entirely solo, from design to deployment",
      "Ships as a GitHub Pages static site with automated deploy via gh-pages",
    ],
  },
]
