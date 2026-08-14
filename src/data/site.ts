import {
  ListChecks,
  LayoutGrid,
  Boxes,
  BrainCircuit,
  Code2,
  RefreshCw,
  Gauge,
  ShieldCheck,
  ShieldAlert,
  Megaphone,
  Lightbulb,
  Car,
  Plane,
  HeartPulse,
  Landmark,
  Factory,
  Search,
  PenTool,
  Hammer,
  Plug,
  TrendingUp,
  Award,
  BadgeCheck,
  Handshake,
  Sparkles,
  GraduationCap,
  Network,
  Target,
  Users,
  Gem,
  type LucideIcon,
} from "lucide-react";

/* ----------------------------- Brand ----------------------------- */
export const BRAND = {
  name: "Maqsusi Digital Industries Software",
  short: "MDIS",
  tagline: "Digital Engineering & Transformation",
  email: "info@maqsusi.com",
  phoneIN: "+91 9247657275, +91 8500077575",
  phoneUS: "(224)-481-1949",
  addressLines: [
    "Yonus Plaza, Judges Colony,",
    "Malakpet, Hyderabad,",
    "Telangana, India",
  ],
};

/* ----------------------------- Navigation ----------------------------- */
export type NavChild = { label: string; to: string; focus?: string; blurb?: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Our Blogs", to: "/blog" },
  { label: "MDIS MarketPlace", to: "/products" },
  { label: "Hire To Pod", to: "/hire-to-pod" },
  { label: "Contact Us", to: "/contact" },
];

/* ----------------------------- Credentials ----------------------------- */
export const CREDENTIALS = [
  { icon: Handshake, title: "Siemens Channel Partner", sub: "10+ years of partnership" },
  { icon: GraduationCap, title: "Telangana Govt. Partner", sub: "Skill Development Partner" },
  { icon: Award, title: "CMMI Level 5", sub: "Certified processes" },
  { icon: BadgeCheck, title: "ISO 9001:2015", sub: "Quality management" },
];

/* ----------------------------- Stats ----------------------------- */
export const STATS = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Domain Experts" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

/* ----------------------------- Clients ----------------------------- */
export const CLIENTS = ["Siemens", "Dr. Reddy's", "MRPL", "Skyroot", "ZF Rane"];

/* ----------------------------- Services ----------------------------- */
export type Service = {
  id: string;
  icon: LucideIcon;
  name: string;
  short: string;
  description: string;
  capabilities: string[];
};

export const SERVICES: Service[] = [
  {
    id: "polarion-alm",
    icon: ListChecks,
    name: "Polarion ALM",
    short: "ALM solutions for requirements, testing, compliance & quality.",
    description:
      "Application Lifecycle Management for organizations that need structure, traceability and auditability across the entire development process.",
    capabilities: [
      "Requirements management",
      "ASPICE alignment",
      "DO-178C support",
      "Test management",
      "Defect management",
      "Reporting & analytics",
    ],
  },
  {
    id: "mendix-low-code",
    icon: LayoutGrid,
    name: "Mendix Low-Code",
    short: "Rapidly build scalable enterprise applications with low-code.",
    description:
      "We use Mendix to help enterprises build applications rapidly with low-code technology — bridging business and IT through visual development.",
    capabilities: [
      "Workflow automation",
      "Change & configuration management",
      "Engineering collaboration",
      "Lifecycle visualization",
      "Rapid deployment",
      "Business / IT collaboration",
    ],
  },
  {
    id: "teamcenter-plm",
    icon: Boxes,
    name: "Teamcenter PLM",
    short: "Product lifecycle management and the connected digital thread.",
    description:
      "Teamcenter solutions unify product data, processes and people across the lifecycle — establishing a true end-to-end digital thread.",
    capabilities: [
      "Product data management",
      "Change management",
      "Configuration management",
      "Engineering collaboration",
      "Lifecycle visualization",
      "Supplier collaboration",
    ],
  },
  {
    id: "ai-ml",
    icon: BrainCircuit,
    name: "AI & Machine Learning",
    short: "Intelligent automation engineered for business outcomes.",
    description:
      "AI and machine-learning services focused on intelligent automation, predictive insight and measurable business outcomes.",
    capabilities: [
      "Predictive analytics",
      "AI agents & assistants",
      "Computer vision",
      "Process automation",
      "Data modeling",
      "Business intelligence",
    ],
  },
  {
    id: "custom-software",
    icon: Code2,
    name: "Custom Software",
    short: "Bespoke web, mobile, cloud-native software & integrations.",
    description:
      "End-to-end custom development tailored to your business — from idea and architecture to delivery and continuous improvement.",
    capabilities: [
      "Web applications",
      "Mobile applications",
      "Cloud-native software",
      "API integrations",
      "UI/UX design",
      "Enterprise integration",
    ],
  },
  {
    id: "digital-transformation",
    icon: RefreshCw,
    name: "Digital Transformation Consulting",
    short: "Strategy, architecture roadmaps & technology adoption.",
    description:
      "Advisory that turns ambition into a roadmap — assessing the business, defining strategy and governing adoption end to end.",
    capabilities: [
      "Business assessment",
      "Digital strategy",
      "Architecture roadmaps",
      "Governance",
      "Technology adoption",
      "Operating model design",
    ],
  },
  {
    id: "aspice",
    icon: Gauge,
    name: "ASPICE Consulting",
    short: "Gap analysis, process implementation & assessment readiness.",
    description:
      "Automotive SPICE expertise to mature your processes and prepare confidently for formal assessments.",
    capabilities: [
      "ASPICE gap analysis",
      "Process implementation",
      "Assessment preparation",
      "Process optimization",
      "Internal audits",
      "Reference model alignment",
    ],
  },
  {
    id: "functional-safety",
    icon: ShieldCheck,
    name: "Functional Safety",
    short: "HARA, ASIL classification & full safety-lifecycle support.",
    description:
      "Safety-related engineering services that help you build and demonstrate compliance for safety-critical systems.",
    capabilities: [
      "Hazard analysis & risk assessment",
      "Safety lifecycle management",
      "ASIL classification",
      "Compliance support",
      "Safety validation & verification",
      "Safety case development",
    ],
  },
  {
    id: "cybersecurity",
    icon: ShieldAlert,
    name: "Cybersecurity",
    short: "Threat analysis, secure architecture, pentesting & audits.",
    description:
      "End-to-end security services to protect systems across the lifecycle — from architecture to assurance.",
    capabilities: [
      "Threat analysis & risk assessment",
      "Secure architecture",
      "Vulnerability assessment",
      "Penetration testing",
      "Compliance audits",
      "Security audits",
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    name: "Digital Marketing",
    short: "SEO, social media, PPC & content that grows visibility.",
    description:
      "Full-funnel digital marketing to build brand, drive qualified traffic and convert engagement into revenue.",
    capabilities: [
      "Search engine optimization",
      "Social media marketing",
      "Paid advertising / PPC",
      "Content strategy",
      "Brand strategy",
      "Analytics & reporting",
    ],
  },
  {
    id: "customized-solutions",
    icon: Lightbulb,
    name: "Customized Solutions",
    short: "Technology built precisely around your business requirements.",
    description:
      "We don't build one-size-fits-all. We craft digital experiences and solutions engineered around your unique goals, processes and opportunities.",
    capabilities: [
      "Custom application development",
      "Enterprise integration",
      "Cloud solutions",
      "Business-specific automation",
      "Customer-experience improvement",
      "Operational automation",
    ],
  },
];

/* ----------------------------- Industries ----------------------------- */
export type Industry = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  focus: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "automotive",
    icon: Car,
    name: "Automotive",
    tagline: "Safety-critical software & digital manufacturing.",
    focus: ["ASPICE", "Functional safety", "Digital manufacturing", "Compliance"],
  },
  {
    id: "aerospace",
    icon: Plane,
    name: "Aerospace",
    tagline: "Certifiable avionics & configuration control.",
    focus: ["DO-178C", "ARP4754A", "Configuration management", "Traceability"],
  },
  {
    id: "medical-devices",
    icon: HeartPulse,
    name: "Medical Devices",
    tagline: "Validated, compliant life-sciences software.",
    focus: ["Computer-system validation", "GxP", "Validation management", "FDA readiness"],
  },
  {
    id: "banking",
    icon: Landmark,
    name: "Banking",
    tagline: "Workflow, collections & regulatory compliance.",
    focus: ["Collections", "Compliance", "Workflow automation", "Risk"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    tagline: "PLM, quality & connected supplier networks.",
    focus: ["PLM", "Quality management", "Supplier collaboration", "Digital thread"],
  },
];

/* ----------------------------- Why Choose ----------------------------- */
export const WHY_CHOOSE = [
  { icon: Target, title: "Deep Industry Expertise", text: "Decades of combined experience across automotive, aerospace, life sciences, banking and manufacturing." },
  { icon: Network, title: "Siemens Ecosystem Mastery", text: "Specialists in Polarion, Teamcenter and Mendix — the platforms that run regulated engineering." },
  { icon: ShieldCheck, title: "Compliance-Focused Delivery", text: "ASPICE, DO-178C, ISO, FDA and GxP experience baked into every engagement." },
  { icon: Sparkles, title: "Pre-built Frameworks", text: "Accelerators and frameworks that compress timelines and reduce risk." },
  { icon: BadgeCheck, title: "Certified Consultants", text: "CMMI Level 5 processes delivered by certified, senior practitioners." },
  { icon: Users, title: "Global Delivery", text: "Flexible onsite, nearshore and offshore delivery to suit every program." },
];

/* ----------------------------- Delivery Approach ----------------------------- */
export const DELIVERY = [
  { step: "01", icon: Search, title: "Discover", text: "Understand the business, identify opportunities and assess requirements." },
  { step: "02", icon: PenTool, title: "Design", text: "Create the solution architecture and the transformation roadmap." },
  { step: "03", icon: Hammer, title: "Build", text: "Develop, configure and implement the solution to specification." },
  { step: "04", icon: Plug, title: "Integrate", text: "Connect enterprise systems and data sources into a single thread." },
  { step: "05", icon: TrendingUp, title: "Optimize", text: "Monitor performance, measure results and continuously improve." },
];

/* ----------------------------- Mission principles ----------------------------- */
export const MISSION = [
  {
    icon: Sparkles,
    title: "Innovation & Excellence",
    text: "We focus on innovative solutions held to the highest standards of quality and performance.",
  },
  {
    icon: Target,
    title: "Client-Centric Approach",
    text: "We work closely with customers, understand their challenges and build around their goals.",
  },
  {
    icon: Gem,
    title: "Integrity & Transparency",
    text: "We emphasize honesty, transparency and trustworthy relationships with clients and partners.",
  },
];

/* ----------------------------- Core Products ----------------------------- */
export const CORE_PRODUCTS = [
  { name: "DigiVal", desc: "Digital validation suite for life-sciences compliance and validation management.", tag: "Life Sciences", icon: ShieldCheck },
  { name: "ATS & CRM 360", desc: "Unified applicant-tracking and customer-relationship platform for recruitment teams.", tag: "Recruitment", icon: Users },
  { name: "Talent Trace", desc: "End-to-end talent acquisition and candidate lifecycle tracking.", tag: "Recruitment", icon: Target },
  { name: "Engage 360", desc: "Customer engagement and experience orchestration across channels.", tag: "Experience", icon: Sparkles },
  { name: "Collection Management", desc: "Collections, workflow automation and compliance for banking operations.", tag: "Banking", icon: Landmark },
];

/* ----------------------------- Marketplace ----------------------------- */
export type MarketApp = {
  name: string;
  category: string;
  developer: string;
  version: string;
  downloads: string;
};

export const MARKETPLACE: MarketApp[] = [
  { name: "Custom ID Script", category: "Polarion", developer: "MDIS", version: "2.4.1", downloads: "1.2k" },
  { name: "Customer Form Extension", category: "Polarion", developer: "MDIS", version: "1.8.0", downloads: "980" },
  { name: "Workitem History Trend", category: "Reporting", developer: "MDIS", version: "3.1.2", downloads: "2.1k" },
  { name: "Commenting Report", category: "Reporting", developer: "MDIS", version: "1.5.3", downloads: "1.5k" },
  { name: "CR Lifecycle Report", category: "Reporting", developer: "MDIS", version: "2.0.0", downloads: "1.8k" },
  { name: "Custom H&F Document", category: "Polarion", developer: "MDIS", version: "1.2.4", downloads: "740" },
  { name: "Baseline Reports", category: "Reporting", developer: "MDIS", version: "2.6.1", downloads: "1.1k" },
  { name: "SDLC Report", category: "Reporting", developer: "MDIS", version: "4.0.0", downloads: "2.4k" },
  { name: "DHF Report", category: "Compliance", developer: "MDIS", version: "1.9.2", downloads: "1.3k" },
  { name: "DD Reports", category: "Reporting", developer: "MDIS", version: "2.2.0", downloads: "1.0k" },
  { name: "Audit SOP", category: "Audit", developer: "MDIS", version: "1.4.0", downloads: "860" },
  { name: "OHS Navigator", category: "Compliance", developer: "MDIS", version: "2.1.3", downloads: "640" },
  { name: "Learn Pro", category: "Enablement", developer: "MDIS", version: "3.3.0", downloads: "1.7k" },
  { name: "Risk Control Matrix", category: "Compliance", developer: "MDIS", version: "2.0.4", downloads: "1.4k" },
  { name: "KPI Management", category: "Analytics", developer: "MDIS", version: "2.5.0", downloads: "2.0k" },
  { name: "Ideal Track 360", category: "Mendix", developer: "MDIS", version: "1.7.1", downloads: "920" },
  { name: "Chairman Reports", category: "Reporting", developer: "MDIS", version: "1.3.0", downloads: "780" },
  { name: "Quorum", category: "Collaboration", developer: "MDIS", version: "2.8.0", downloads: "1.6k" },
  { name: "Petrol Safe Audit", category: "Audit", developer: "MDIS", version: "1.1.2", downloads: "520" },
  { name: "ATS", category: "Recruitment", developer: "MDIS", version: "3.0.0", downloads: "2.2k" },
  { name: "CRM", category: "Recruitment", developer: "MDIS", version: "3.0.0", downloads: "2.0k" },
  { name: "DigiVal", category: "Life Sciences", developer: "MDIS", version: "4.1.0", downloads: "1.9k" },
];

export const MARKET_CATEGORIES = [
  "All",
  "Polarion",
  "Mendix",
  "Reporting",
  "Compliance",
  "Audit",
  "Analytics",
  "Recruitment",
  "Life Sciences",
  "Collaboration",
  "Enablement",
];

/* ----------------------------- Hire To Pod ----------------------------- */
export const POD_TEAM = [
  { role: "Developers", count: "2", icon: Code2 },
  { role: "Lead Developer", count: "1", icon: Hammer },
  { role: "Solution Architect", count: "1", icon: Network },
  { role: "Automation Test Engineer", count: "1", icon: ShieldCheck },
  { role: "Business Analyst", count: "1", icon: Target },
  { role: "Project Manager", count: "1", icon: Users },
];

export const POD_PROCESS = [
  { step: "01", title: "Choose Pricing Group", text: "Select the appropriate service or pricing option for your program." },
  { step: "02", title: "Talk With Us", text: "Discuss your requirements with our solutions team." },
  { step: "03", title: "Schedule a Meetup", text: "Arrange a meeting to deeply understand the project." },
  { step: "04", title: "Start Working Together", text: "Begin structured project execution with your dedicated pod." },
];

/* ----------------------------- Blog ----------------------------- */
export const BLOG_FEATURED = [
  {
    title: "A Deeper Dive into Collections",
    excerpt:
      "How Collections in Polarion 20R1 group particular document revisions or baselines to organize materials for reviews, audits, release planning and requirement management.",
    tag: "Polarion",
    read: "8 min read",
  },
  {
    title: "Polarion ALM — The Engineered Lifecycle",
    excerpt:
      "Artifact management, version control, real-time collaboration, traceability and live document editing across agile, waterfall and hybrid development.",
    tag: "Polarion",
    read: "11 min read",
  },
  {
    title: "Securely Upgrading Mendix Apps & SAML",
    excerpt:
      "How the SAML module in Mendix provides single sign-on by connecting applications with external identity providers — and how to upgrade safely.",
    tag: "Mendix",
    read: "7 min read",
  },
  {
    title: "What's New in Polarion ALM 2404",
    excerpt:
      "Automatic LiveDoc change merging, improved test management, better project/user isolation, security, performance and quality enhancements.",
    tag: "Polarion",
    read: "9 min read",
  },
];

export const BLOG_TOPICS = [
  "AI-infused smart Mendix applications",
  "Polarion ALM 2410 deep-dive",
  "Requirements traceability best practices",
  "Collections in Polarion",
  "Mendix development patterns",
  "ASPICE assessment readiness",
  "Building the digital thread",
  "Functional safety case management",
];

/* ----------------------------- Team ----------------------------- */
export type Member = {
  name: string;
  role: string;
  group: "Leadership" | "Delivery" | "Engineering" | "Growth";
  focus: string;
};

export const TEAM: Member[] = [
  { name: "Kareem Maqsusi", role: "Chief Business Officer", group: "Leadership", focus: "Vision & strategy" },
  { name: "Aisha Rahman", role: "Chief Financial & Sales", group: "Leadership", focus: "Finance & growth" },
  { name: "David Stephen", role: "Vice President", group: "Leadership", focus: "Delivery leadership" },
  { name: "Meera Nair", role: "Executive VP", group: "Leadership", focus: "Enterprise accounts" },
  { name: "Rahul Verma", role: "VP Staffing / Recruiter", group: "Leadership", focus: "Talent & staffing" },
  { name: "Sunil Joshi", role: "Director of ALM & PLM", group: "Leadership", focus: "Polarion · Teamcenter" },
  { name: "Priya Reddy", role: "Director of HR & Sales", group: "Growth", focus: "People & partnerships" },
  { name: "Arjun Kumar", role: "Project Manager", group: "Delivery", focus: "Mendix programs" },
  { name: "Fatima Sheikh", role: "Project Manager", group: "Delivery", focus: "ALM & compliance" },
  { name: "Vikram Rao", role: "Software Developer", group: "Engineering", focus: "Polarion · Low-code" },
  { name: "Neha Gupta", role: "UI/UX Designer", group: "Engineering", focus: "Digital experiences" },
  { name: "Thomas Paul", role: "Sales & Marketing", group: "Growth", focus: "Brand & demand" },
  { name: "Anita Desai", role: "IT & DevOps", group: "Engineering", focus: "Cloud & automation" },
  { name: "Sandeep Iyer", role: "Software Developer", group: "Engineering", focus: "AI/ML · APIs" },
];

/* ----------------------------- Testimonials ----------------------------- */
export const TESTIMONIALS = [
  {
    quote:
      "MDIS brought deep Mendix expertise to our product-building journey. Their team understood our domain and shipped with remarkable consistency.",
    author: "Digital Transformation Lead",
    org: "Dr. Reddy's",
  },
];

/* ----------------------------- Expertise areas (About) ----------------------------- */
export const EXPERTISE_AREAS = [
  "Customized Solutions",
  "Application / Product Lifecycle Management",
  "Low-code Solutions",
  "Digital Experiences",
  "Technology Consulting",
];
