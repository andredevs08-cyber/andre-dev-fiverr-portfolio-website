export type Project = {
  number: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  src: string;
  alt: string;
  className: string;
  challenge: string;
  approach: string;
  outcome: string;
  capabilities: string[];
  source?: "featured" | "fiverr";
  sourceUrl?: string;
  industries?: string[];
  services?: string[];
};

export const heroProjects = [
  {
    number: "01",
    src: "/portfolio/fintech-platform.png",
    alt: "Responsive fintech product website shown on desktop, tablet, and mobile",
    className: "hero-card hero-card--one",
  },
  {
    number: "02",
    src: "/portfolio/creative-studio.png",
    alt: "Responsive creative studio website shown on desktop, tablet, and mobile",
    className: "hero-card hero-card--two",
  },
  {
    number: "03",
    src: "/portfolio/food-marketplace.png",
    alt: "Responsive food marketplace shown on desktop, tablet, and mobile",
    className: "hero-card hero-card--three",
  },
];

export const featuredProjects: Project[] = [
  {
    number: "01",
    slug: "service-booking-platform",
    title: "Service booking platform",
    type: "Website · Booking · Responsive build",
    description:
      "A clear, conversion-focused service experience designed to move visitors from interest to appointment.",
    src: "/portfolio/service-booking.png",
    alt: "Responsive service booking website displayed on three devices",
    className: "project-card project-card--large",
    challenge:
      "Turn a service catalogue into a booking journey that feels simple on both desktop and mobile.",
    approach:
      "I organized the offer around customer intent, reduced visual friction, and made the path from service selection to appointment obvious.",
    outcome:
      "A polished, responsive experience that helps visitors understand the offer quickly and take the next step with confidence.",
    capabilities: ["UX structure", "Responsive UI", "Booking flow", "Conversion design"],
  },
  {
    number: "02",
    slug: "ai-product-launch",
    title: "AI product launch",
    type: "AI product · Landing page · Launch",
    description:
      "A sharp product story for an on-device AI platform, with technical value translated into a buyer-friendly experience.",
    src: "/portfolio/ai-product.png",
    alt: "Responsive on-device AI product website displayed on three devices",
    className: "project-card",
    challenge:
      "Explain a technical AI product clearly without losing the sophistication expected by its early adopters.",
    approach:
      "I translated the product into a focused narrative, balanced technical proof with accessible benefits, and created a strong launch hierarchy.",
    outcome:
      "A credible launch site that communicates the value of the platform quickly and gives potential users a clear next action.",
    capabilities: ["Product storytelling", "Landing page", "Responsive build", "Launch QA"],
  },
  {
    number: "03",
    slug: "growth-platform",
    title: "Growth platform",
    type: "SaaS · Lead generation · Web app",
    description:
      "A multi-device product presentation built around scalable tools, clear benefits, and strong calls to action.",
    src: "/portfolio/growth-platform.png",
    alt: "Responsive growth platform website displayed on three devices",
    className: "project-card",
    challenge:
      "Present a broad SaaS feature set without overwhelming visitors or weakening the main conversion goal.",
    approach:
      "I grouped features around outcomes, established a clean information rhythm, and made the primary actions consistent across viewports.",
    outcome:
      "A product experience that feels mature, easier to understand, and ready to support lead generation.",
    capabilities: ["SaaS UI", "Lead generation", "Web app design", "Responsive QA"],
  },
  {
    number: "04",
    slug: "fashion-commerce",
    title: "Fashion commerce",
    type: "E-commerce · Catalogue · Mobile",
    description:
      "A polished editorial storefront that gives products room to breathe while keeping shopping paths simple.",
    src: "/portfolio/fashion-commerce.png",
    alt: "Responsive fashion commerce website displayed on three devices",
    className: "project-card project-card--large",
    challenge:
      "Create a premium shopping experience where the brand feels editorial but the buying journey stays practical.",
    approach:
      "I used a restrained layout, generous product presentation, and a mobile-first catalogue structure to balance mood with usability.",
    outcome:
      "A distinctive storefront that supports product discovery while keeping the experience clean and conversion focused.",
    capabilities: ["E-commerce UI", "Catalogue design", "Mobile UX", "Brand presentation"],
  },
  {
    number: "05",
    slug: "water-tech-website",
    title: "Water-tech website",
    type: "Technical website · B2B · Responsive",
    description:
      "A modern B2B experience that makes an advanced industrial solution feel credible, clear, and approachable.",
    src: "/portfolio/water-tech.png",
    alt: "Responsive water technology website displayed on three devices",
    className: "project-card",
    challenge:
      "Turn an advanced technical offer into a website that decision-makers can understand without flattening its expertise.",
    approach:
      "I built a clear hierarchy around the problem, solution, and business value, then supported it with confident visual proof.",
    outcome:
      "A professional B2B site that makes the technology easier to trust, discuss, and evaluate.",
    capabilities: ["B2B website", "Technical content", "Responsive build", "Credibility design"],
  },
  {
    number: "06",
    slug: "property-marketplace",
    title: "Property marketplace",
    type: "Marketplace · Search · Platform",
    description:
      "A lifestyle-led marketplace concept balancing property discovery, member trust, and conversion.",
    src: "/portfolio/property-platform.png",
    alt: "Responsive property marketplace displayed on three devices",
    className: "project-card",
    challenge:
      "Give users an inviting discovery experience while keeping search, trust, and conversion central to the platform.",
    approach:
      "I combined lifestyle-led presentation with a structured marketplace interface and clear actions for both browsing and joining.",
    outcome:
      "A platform concept that feels aspirational while remaining practical enough for real property discovery.",
    capabilities: ["Marketplace UX", "Search experience", "Responsive UI", "Platform design"],
  },
];

export const services = [
  {
    number: "01",
    title: "Lovable builds",
    description:
      "Responsive websites, MVPs, dashboards, marketplaces, and web apps built from a clear idea or an existing draft.",
    tags: ["Lovable", "Loveable", "Vibe coding"],
  },
  {
    number: "02",
    title: "Fixes & integrations",
    description:
      "Hands-on help with broken flows, Supabase, authentication, databases, Stripe, APIs, deployment, and stubborn bugs.",
    tags: ["Supabase", "Stripe", "Debugging"],
  },
  {
    number: "03",
    title: "AI automation",
    description:
      "Practical automations that connect your tools, remove repetitive work, and make your customer journey faster.",
    tags: ["n8n", "Make", "GoHighLevel"],
  },
  {
    number: "04",
    title: "Launch support",
    description:
      "Final QA, responsive cleanup, deployment, app packaging, and launch preparation so the product is ready for users.",
    tags: ["Vercel", "Capacitor", "App launch"],
  },
];
