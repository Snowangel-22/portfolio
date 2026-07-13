import { TAGS } from './tags.js'

const base = import.meta.env.BASE_URL
const appliedMaterialsGTMCover = `${base}images/project/project-AppliedMaterials-GTM.png`
const acnhCover = `${base}images/project/project-acnh-gift-guide-cover.png`
const lOrealCover = `${base}images/project/project-LOreal-cover.jpg`
const erpCover = `${base}images/project/project-ERP-cover.jpg`
const fireworksAICover = `${base}images/project/project-FireworksAI-TakeHome.png`
const portfolioCover = `${base}images/project/Portfolio_cover.png`
const hiringAssessmentCover = `${base}images/project/project-hiring-assessment-cover.png`

// Projects are ordered by sortDate descending. Always add new projects to the top.
export const projects = [
  {
    id: "applied-materials",
    title: "Service Product GTM",
    tagline: "$500K+ contract revenue. $200K+ qualified pipeline.",
    description: "Led go-to-market strategy for a new service product at Applied Materials using data analytics and AI. Owned pricing, positioning, and cross-functional launch across sales and engineering.",
    tags: [TAGS.GTM, TAGS.SQL, TAGS.PYTHON],
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
    id: "hiring-assessment-startup",
    title: "Hiring Assessment Startup Case Study",
    tagline: "Ops and product: Three-phase audit with Claude across grammar, functionality, and product improvements.",
    description: "Onsite assessment for a hiring tech startup. Inherited a static help center with corrupted content, dead links, and no search. Rebuilt the information architecture and shipped working fixes across the full site.",
    tags: [TAGS.CLAUDE, TAGS.HTML_CSS, TAGS.JAVASCRIPT],
    image: hiringAssessmentCover,
    featured: true,
    type: "pm",
    externalLink: `${base}colare-case-study.html`,
    externalLinkLabel: "View Case Study",

    role: "GTM Candidate",
    context: "Startup Onsite",
    period: "July 2026",
    sortDate: "2026-07",
    team: "Solo",

    problem: "Two layers. Operational: corrupted text encoding, 12+ dead links, missing pages, and inconsistent terminology across a 9-article help center. Product: no search, no workflow structure, and a flat article list that ignored how hiring teams actually move through an assessment platform.",

    solution: [
      "Grammar and punctuation",
      "  Defined a ruleset for punctuation, phrasing, and terminology. Ran each page through Claude to flag and draft fixes. Reviewed every suggestion manually before touching code. Tracked all 41 changes in a structured fix log.",
      "Functional audit",
      "  Used Claude to test every link and email address across the site. Extended the loop to UI/UX: Claude flagged issues, each pass informed the next, all changes validated before merging into code.",
      "Product improvements",
      "  Mapped where hiring teams and candidates interact with the help center at each stage of the assessment workflow. Generated a list of structural improvements, then worked through it with a teammate to filter on effort vs. impact. Shipped what cleared the bar.",
    ],

    results: [
      "Resolved grammatical/punctuation and user flow issues, then implemented product improvements",
      "Restructured 8 employer guides into a 3-stage workflow (Setup, Invite, Evaluate)",
      "Filtered product improvements with a teammate and shipped what cleared the effort-to-impact bar",
      "Documented 9 deferred improvements with prioritization rationale for the next sprint",
    ],
  },

  {
    id: "fireworks-ai",
    title: "Fireworks AI Take-Home",
    tagline: "Model selector and evaluator for engineers migrating from closed to open models.",
    description: "A web app that recommends open models for a given prompt, runs them live, and compares latency, cost, and token usage side by side.",
    tags: [TAGS.REACT, TAGS.FIREWORKS_AI, TAGS.PRODUCT_DESIGN, TAGS.CLAUDE],
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
    tags: [TAGS.REACT, TAGS.HTML_CSS, TAGS.CLAUDE],
    image: portfolioCover,
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

  {
    id: "acnh-gift-guide",
    title: "ACNH Gift Guide",
    tagline: "Find the perfect gift for your Animal Crossing villagers, matched to your actual inventory.",
    description: "A gift-finder for Animal Crossing: New Horizons players. Matches owned items to villager style preferences across 1,458 items. Built with React, Vite, and Fuse.js fuzzy search.",
    tags: [TAGS.REACT, TAGS.CLAUDE],
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
    id: "erp-startup",
    title: "ERP Startup Case Study",
    tagline: "3-part take-home: ML model, customer deck, and product memo.",
    description: "Case assignment: developed a working proof of concept and pitch deck for a customer to migrate their legacy ERP system to a cloud-based solution with predictive analytics.",
    tags: [TAGS.CLAUDE, TAGS.CHATGPT],
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
    id: "loreal-brandstorm",
    title: "L'Oreal Brandstorm 2025",
    tagline: "Personalized skincare coach for men, pitched to L'Oreal Brandstorm 2025.",
    description: "Led a 3-person team to define and pitch LuminAl, an AI skincare coach for men new to skincare. Covered market research, product definition, and a full pitch deck for an international competition.",
    tags: [TAGS.FIGMA, TAGS.LOVABLE, TAGS.PRODUCT_DESIGN],
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
]
