import appliedMaterialsGTMCover from '../../public/images/project/project-AppliedMaterials-GTM.png'
import acnhCover from '../../public/images/project/project-acnh-gift-guide-cover.png'
import lOrealCover from '../../public/images/project/project-LOreal-cover.jpg'
import erpCover from '../../public/images/project/project-ERP-cover.jpg'

export const projects = [
  {
    id: "applied-materials",
    title: "Service Product GTM",
    tagline: "$500K+ contract revenue. $200K+ qualified pipeline.",
    description: "Led go-to-market strategy for a new service product at Applied Materials using data analytics and AI. Owned pricing, positioning, and cross-functional launch across sales and engineering.",
    tags: ["Product Management", "GTM", "Data Analytics", "AI"],
    image: appliedMaterialsGTMCover,
    featured: true,
    type: "pm",

    role: "Product Manager - Service Product",
    company: "Applied Materials",
    period: "July 2024 - Present",
    team: "Cross-functional: Sales, Engineering, Marketing",

    problem: "Applied Materials needed to expand a new line of hardware services. The service offering existed but lacked a coherent go-to-market strategy, pricing model, and sales narrative. Early customers generated interest but there was no systematic approach to scaling.",

    solution: "Developed a data-driven GTM strategy that included: (1) customer segmentation and pricing analysis, (2) competitive positioning against service incumbents, (3) sales enablement deck with quantified ROI, (4) AI-powered analytics dashboard to track pipeline and forecast.",

    results: [
      "Generated $500K+ in contract revenue within 6 months",
      "Hit 100% renewal rate on current service contracts",
      "Identified and closed upselling opportunities that exceeded quota per quarter",
      "Enabled 4 sales reps to close larger deals with 2x average deal size"
    ],

    keyMetrics: [
      { label: "Contract Revenue", value: "$500K+" },
      { label: "Qualified Pipeline", value: "$200K+" },
    ],
  },
  {
    id: "acnh-gift-guide",
    title: "ACNH Gift Guide",
    tagline: "Gift-planning tool for 391 villagers with inventory matching.",
    description: "Personal engineering project — a gift-finder for Animal Crossing: New Horizons players. Matches your owned items to 391 villager style preferences using React, Vite, and Fuse.js fuzzy search.",
    tags: ["React", "Vite", "Fuse.js", "localStorage"],
    image: acnhCover,
    featured: true,
    type: "engineering",
    externalLink: "https://acnh-gift-guide-tawny.vercel.app/",

    role: "Solo Engineer",
    company: "Personal Project",
    period: "March 2026",
    team: "Solo",

    problem: "In Animal Crossing: New Horizons, each of 391 villagers has style preferences across 1,458 items. The in-game UI doesn't show preferences, and looking them up requires switching between wiki tabs and in-game storage. Friction kills the gifting loop.",

    solution: "Built a web app that statically encodes all villager and item preference data, lets players log their owned inventory, and instantly shows which items match each villager's style. Uses Fuse.js for fuzzy search and localStorage for persistence — no backend required.",

    results: [
      "Removed lookup friction — from 10 minutes to <1 minute per villager",
      "Shipped to production in 1 day",
      "95+ Lighthouse performance score",
      "Positive reception in r/AnimalCrossing community"
    ],
  },
  {
    id: "loreal-brandstorm",
    title: "L'Oreal Brandstorm 2025",
    tagline: "AI-powered skincare routine builder pitched to international competition.",
    description: "Submitted LuminAl — a personalized skincare routine builder powered by AI — to an international product competition. Led market research, product definition, and prototype with 3-person team.",
    tags: ["Figma", "Market Research", "AI", "Lovable"],
    image: lOrealCover,
    featured: true,
    type: "pm",

    role: "Product Lead",
    company: "Brandstorm 2025 (Team Project)",
    period: "August 2024 - November 2024",
    team: "PM, Engineer, Marketing (3 people)",

    problem: "Young men struggle to start skincare routines. They face information overload, conflicting advice, and feel intimidated by the product landscape. They want personalized guidance but don't know where to start.",

    solution: "LuminAl is a personalized skincare routine builder powered by AI. Whenever the user tries a new product, it links product information (such as ingredients) with user recorded feedback. It will find commonalities and personalize the routine to help the user work towards their skincare goal.",

    results: [
      "Demonstrated working prototype with product memory",
      "Received positive feedback on UX and AI personalization logic",
      "Estimated 35% improvement in routine recommendation accuracy vs static guides"
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
    company: "Startup PM Interview",
    period: "One-week assignment",
    team: "Solo",

    problem: "Customer is running a legacy ERP with workflows trapped in spreadsheets. They need a proof of concept showing how a cloud-based solution can modernize their processes and predict future needs.",

    solution: "Delivered three components: (1) Executive-ready slide deck with business case, (2) Data model in spreadsheet with prediction logic for inventory stocking, (3) Product memo detailing features, roadmap, and implementation approach.",

    results: [
      "Completed all three deliverables in take-home format",
      "Demonstrated understanding of both customer workflows and technical implementation",
      "Showed product thinking by including timeline and future value proposition"
    ],
  },

  {
    id: "portfolio-v2",
    title: "Portfolio v2",
    tagline: "Interactive, animated personal portfolio showcasing product + engineering.",
    description: "Rebuilt personal portfolio from scratch using React 18, Vite 5, and Tailwind CSS. Features scroll-triggered animations, interactive project modals, light/dark theme toggle, and a playful Tangram puzzle element. Designed to showcase both product thinking (UX, narrative) and engineering ability (React, animation, responsive design).",
    tags: ["React 18", "Vite 5", "Tailwind CSS", "Framer Motion"],
    image: appliedMaterialsGTMCover,
    featured: false,
    type: "engineering",

    role: "Solo Designer & Engineer",
    company: "Personal Project",
    period: "April 2026",
    team: "Solo",

    problem: "Portfolio needed to reflect a unique brand positioning: 100% PM + 100% Engineer. Static portfolios don't showcase product thinking or interaction design. Needed something interactive and memorable that demonstrates both design sensibility and technical execution.",

    solution: "Built a custom React portfolio with: (1) Scroll-reveal animations using Framer Motion, (2) Project details in interactive modals instead of separate pages, (3) Light/dark theme toggle integrated into navbar, (4) Responsive layout for mobile/tablet/desktop, (5) Tangram puzzle as hero interactive element. Warm parchment + deep purple aesthetic paired with smooth interactions.",

    results: [
      "Complete portfolio redesign with custom interactions",
      "Demonstrates product thinking through UX decisions (modals, expand/collapse, theme toggle)",
      "Showcases React + animation expertise via Framer Motion",
      "Responsive design tested across breakpoints",
      "Interactive Tangram element (in progress) for delightful engagement"
    ],
  },
]
