export type Project = {
  slug: string;
  title: string;
  category: "Brand Identity" | "Video Editing" | "Social Campaign" | "Motion Design";
  year: string;
  role: string;
  tools: string[];
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  image: string;
  accent: string;
  videoUrl?: string;
  deliverables: string[];
};

export type WebsiteShowcase = {
  slug: string;
  title: string;
  status: string;
  stack: string;
  stackItems: {
    name: string;
    mark: string;
    color: string;
  }[];
  summary: string;
  repoUrl: string;
  figmaUrl: string;
  figmaStatus: string;
  walkthrough: string;
  screens: string[];
  image: string;
  gallery: string[];
  details: {
    overview: string;
    role: string;
    focus: string[];
    features: string[];
  };
};

export type DesignShowcase = {
  slug: string;
  title: string;
  type: string;
  format: string;
  summary: string;
  tools: string[];
  deliverables: string[];
  image: string;
  accent: string;
  aspect: "portrait" | "square" | "landscape";
};

export type PostedVideo = {
  title: string;
  source: string;
  url: string;
  tags: string[];
  summary: string;
  accent: string;
};

export const profile = {
  name: "Nour Ltaief",
  initials: "NL",
  logo: "/nour-ltaief-logo.png",
  role: "Graphic Designer & Video Editor",
  location: "Tunisia",
  email: "hello@example.com",
  headline: "Visual systems, edits, and campaign assets built with sharp rhythm and commercial polish.",
  bio: "I help brands, creators, and teams turn raw ideas into memorable visuals across identity, social content, campaign graphics, and edited video.",
  availability: "Available for freelance projects, brand packages, and editing retainers.",
  socials: {
    github: "https://github.com/nerkolt",
    linkedin: "https://www.linkedin.com/in/nour-ltaief",
  },
};

export const projects: Project[] = [
  {
    slug: "kinetic-brand-system",
    title: "Kinetic Brand System",
    category: "Brand Identity",
    year: "2026",
    role: "Visual identity, art direction",
    tools: ["Illustrator", "Photoshop", "Figma"],
    summary: "A flexible identity system for a digital-first creative studio, built around bold type, sharp layouts, and adaptable campaign marks.",
    challenge: "The brand needed to feel premium and experimental without becoming difficult to use across social, decks, and launch graphics.",
    approach: "I built a compact visual system with a restrained color palette, modular type treatments, and layout rules that could scale from profile avatars to full campaign posters.",
    outcome: "The final system gave the studio a recognizable look while keeping production fast for weekly content and client-facing presentations.",
    image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=1600&q=85",
    accent: "#f05d3b",
    deliverables: ["Logo suite", "Social templates", "Presentation cover system", "Brand usage guide"],
  },
  {
    slug: "launch-reel-edit",
    title: "Launch Reel Edit",
    category: "Video Editing",
    year: "2026",
    role: "Edit, pacing, color, sound design",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    summary: "A punchy launch reel designed for social ads, event screens, and short-form platform cuts.",
    challenge: "The raw footage came from mixed sources and needed a clean narrative, consistent color, and stronger momentum.",
    approach: "I structured the edit around three visual beats, tightened transitions, balanced audio hits, and created platform-specific exports.",
    outcome: "The reel became the central launch asset and was adapted into vertical clips, paid ads, and event teasers.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=85",
    accent: "#2f7dd1",
    deliverables: ["Hero reel", "9:16 social cuts", "15-second ad variants", "Thumbnail frames"],
  },
  {
    slug: "streetwear-drop-campaign",
    title: "Streetwear Drop Campaign",
    category: "Social Campaign",
    year: "2025",
    role: "Campaign design, content direction",
    tools: ["Photoshop", "After Effects", "Lightroom"],
    summary: "A launch campaign for a limited streetwear drop using bold product crops, texture, and fast-moving social assets.",
    challenge: "The campaign needed to make a small set of product photos feel expansive across a full release calendar.",
    approach: "I designed a repeatable content kit with poster crops, countdown assets, animated story frames, and product-led carousels.",
    outcome: "The release had a consistent visual rhythm across feed, stories, and paid placements while staying easy to update.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=85",
    accent: "#c8a24a",
    deliverables: ["Feed posts", "Story animations", "Countdown graphics", "Paid ad crops"],
  },
  {
    slug: "festival-motion-pack",
    title: "Festival Motion Pack",
    category: "Motion Design",
    year: "2025",
    role: "Motion graphics, visual package",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    summary: "A motion toolkit for a music event, including animated lineup posts, lower thirds, and screen graphics.",
    challenge: "The event needed energetic motion assets that could be reused by the social and production teams.",
    approach: "I designed a motion language around kinetic type, bold masks, and reusable compositions for different artist names and timings.",
    outcome: "The package made the event feel cohesive from announcement posts through on-site screen visuals.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85",
    accent: "#42a978",
    deliverables: ["Animated lineup", "Lower thirds", "LED screen loops", "Social teasers"],
  },
];

export const services = [
  "Brand identity systems",
  "Social media design",
  "Short-form video editing",
  "Motion graphics",
  "Campaign art direction",
  "Presentation and pitch visuals",
];

export const designShowcase: DesignShowcase[] = [
  {
    slug: "event-rollup-system",
    title: "Event Rollup System",
    type: "Rollups",
    format: "Print / 85x200",
    summary: "Large-format event visuals designed for fast reading from a distance, with strong hierarchy and sponsor-safe spacing.",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    deliverables: ["Main rollup", "Sponsor variant", "Print-ready PDF"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85",
    accent: "#00f0ff",
    aspect: "portrait",
  },
  {
    slug: "logo-direction-study",
    title: "Logo Direction Study",
    type: "Logos",
    format: "PSD / Brand Mark",
    summary: "Logo direction and mark exploration prepared in Photoshop, ready to expand into vector lockups and usage rules.",
    tools: ["Photoshop", "Illustrator"],
    deliverables: ["Logo concept", "Color direction", "Vector rebuild plan"],
    image: "/nour-ltaief-logo.png",
    accent: "#ff525c",
    aspect: "square",
  },
  {
    slug: "mobile-app-interface",
    title: "Mobile App Interface",
    type: "UI/UX",
    format: "Figma / Prototype",
    summary: "Mobile interface screens focused on visual clarity, reusable components, and quick prototype flow review.",
    tools: ["Figma", "Photoshop"],
    deliverables: ["UI screens", "Component states", "Prototype flow"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85",
    accent: "#d2c972",
    aspect: "landscape",
  },
];

export const websiteShowcase: WebsiteShowcase[] = [
  {
    slug: "royal-dagish",
    title: "Royal Dagish",
    status: "Repo available",
    stack: "React / Vite / GSAP / i18n",
    stackItems: [
      { name: "React", mark: "Re", color: "#61dafb" },
      { name: "Vite", mark: "Vi", color: "#a855f7" },
      { name: "GSAP", mark: "Gs", color: "#88ce02" },
      { name: "i18n", mark: "i18", color: "#d2c972" },
    ],
    summary: "A landing website for a tactical online card game with game branding, app-store CTAs, animated reveal sections, and multilingual support.",
    repoUrl: "https://github.com/nerkolt/Royal-Dagish",
    figmaUrl: "",
    figmaStatus: "Figma rebuild pending",
    walkthrough: "Game landing page scroll and app CTA preview",
    screens: ["Live desktop", "Full landing", "Mobile hero"],
    image: "/project-previews/royal-dagish-live-home.png",
    gallery: [
      "/project-previews/royal-dagish-live-home.png",
      "/project-previews/royal-dagish-live-full.png",
      "/project-previews/royal-dagish-live-mobile.png",
    ],
    details: {
      overview:
        "Royal Dagish presents a tactical card game with a strong first-screen brand moment, app-store calls to action, and progressive content sections for gameplay modes and community messaging.",
      role: "Frontend build, visual landing structure, responsive presentation, and portfolio capture.",
      focus: ["Game branding", "CTA hierarchy", "Animated reveal sections", "Responsive landing page"],
      features: ["Full-screen hero", "App Store and Google Play CTA area", "Gameplay mode cards", "Support and policy pages", "Multilingual UI foundation"],
    },
  },
  {
    slug: "igs-marketplace",
    title: "IGS MarketPlace",
    status: "Local repo",
    stack: "React / Vite / Firebase / Three.js",
    stackItems: [
      { name: "React", mark: "Re", color: "#61dafb" },
      { name: "Vite", mark: "Vi", color: "#a855f7" },
      { name: "Firebase", mark: "Fb", color: "#ffca28" },
      { name: "Three.js", mark: "3D", color: "#e5e2e1" },
      { name: "Stripe", mark: "St", color: "#635bff" },
      { name: "Razorpay", mark: "Rp", color: "#2f7dd1" },
    ],
    summary: "A 3D digital asset marketplace for models, textures, scripts, HDRIs, plugins, and printables, with 3D previews, trading, cart, checkout, and user libraries.",
    repoUrl: "",
    figmaUrl: "",
    figmaStatus: "Figma system pending",
    walkthrough: "Marketplace hero, asset grid, and 3D preview flow",
    screens: ["Live desktop", "Full homepage", "Mobile capture"],
    image: "/project-previews/marketplace-live-home.png",
    gallery: [
      "/project-previews/marketplace-live-home.png",
      "/project-previews/marketplace-live-full.png",
      "/project-previews/marketplace-live-mobile.png",
    ],
    details: {
      overview:
        "IGS MarketPlace is a complex web app concept for browsing, selling, trading, and previewing 3D digital assets across engines and creative platforms.",
      role: "Frontend architecture, marketplace UI, 3D preview integration, commerce flow presentation, and portfolio capture.",
      focus: ["Marketplace UX", "3D asset preview", "Category discovery", "Cart and checkout flow"],
      features: ["Asset category grid", "Three.js and model-viewer previews", "Firebase-backed app structure", "Trading and group purchase concepts", "Stripe/Razorpay payment paths"],
    },
  },
  {
    slug: "gamestudio-website",
    title: "GameStudio Website",
    status: "Figma design",
    stack: "Figma / Game studio landing UI",
    stackItems: [
      { name: "Figma", mark: "Fi", color: "#a259ff" },
      { name: "UI Design", mark: "UI", color: "#00f0ff" },
      { name: "Prototype", mark: "Pr", color: "#ff525c" },
    ],
    summary: "A GameStudio website concept prepared in Figma, suitable for showing the visual direction, page structure, and responsive interface before development.",
    repoUrl: "",
    figmaUrl: "https://www.figma.com/design/OByNVekr7huJFPawI5a0w9/GameStudio-website?node-id=0-1&t=u0PYezOfSgOZasNg-1",
    figmaStatus: "Figma link ready",
    walkthrough: "Figma prototype and screen review",
    screens: ["Hero concept", "Studio sections", "Responsive screens"],
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=1600&q=85",
    gallery: [],
    details: {
      overview:
        "GameStudio Website is currently represented by the Figma design file, making it best suited for reviewing visual direction, page rhythm, and responsive design decisions before development.",
      role: "Figma UI direction and visual concept presentation.",
      focus: ["Game studio brand presence", "Figma-first design review", "Landing page structure", "Responsive UI planning"],
      features: ["Figma design source", "Hero concept", "Studio content sections", "Responsive screen planning"],
    },
  },
];

export const postedVideos: PostedVideo[] = [
  {
    title: "MedPilotVR",
    source: "LinkedIn post",
    url: "https://www.linkedin.com/posts/inherited-games-studio_medpilotvr-medicaleducation-vrtraining-activity-7348656595142111232-T7Gl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE9ulo4BQ4C5rCdO_Kv0uBIG9IvyK0a5Mww",
    tags: ["Medical education", "VR training", "Product video"],
    summary: "Posted video for a VR medical education and training project, suitable for showcasing edit pacing, product clarity, and technical storytelling.",
    accent: "#00f0ff",
  },
  {
    title: "2024 Highlights",
    source: "LinkedIn post",
    url: "https://www.linkedin.com/posts/inherited-games-studio_2024-highlights-activity-7279827859068641280-jfC8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE9ulo4BQ4C5rCdO_Kv0uBIG9IvyK0a5Mww",
    tags: ["Highlights reel", "Studio recap", "Social edit"],
    summary: "A year-in-review style posted video for studio achievements, useful for showing rhythm, sequencing, and montage editing.",
    accent: "#ff525c",
  },
  {
    title: "VR Cultural Heritage",
    source: "LinkedIn post",
    url: "https://www.linkedin.com/posts/inherited-games-studio_vr-culturalheritage-tunisianculture-activity-7325123333740548096-lEIU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE9ulo4BQ4C5rCdO_Kv0uBIG9IvyK0a5Mww",
    tags: ["VR", "Cultural heritage", "Tunisian culture"],
    summary: "Posted video presenting a VR cultural heritage experience, strong for showing atmosphere, educational framing, and location/culture storytelling.",
    accent: "#d2c972",
  },
];
