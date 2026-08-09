import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Software Engineer · Full-Stack Developer · AI",
  initials: "LN",
  url: "https://leul-neway.vercel.app",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/Addis+Ababa,+Ethiopia",
  description:
    "Full-Stack Software Engineer, Product Manager, and AI Developer",
  summary:
    "Full-Stack Software Engineer, Product Manager, and AI Developer with 3 years of experience building scalable full-stack web applications, SaaS platforms, and AI-integrated systems. Proficient in React, Next.js, TypeScript, Node.js, Python, Go, Django, FastAPI, and NestJS. Experienced in designing and developing modern web applications, REST APIs, database architectures, and cloud deployments. Skilled with AI tooling including Claude, OpenAI Codex, MCP server configuration, LLM API integration, and AI agent development. Proven track record of leading remote engineering teams, delivering high-quality software, and improving sprint velocity by 30%. Open to remote and international opportunities.",
  avatarUrl: "/meeeee.jpg",
  skills: [
    // Programming Languages
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "C#",
    "Java",
    "Go",
    // Frameworks and Libraries
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "FastAPI",
    "Django",
    "GraphQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    // Databases
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQL",
    // Cloud & DevOps
    "AWS",
    "Firebase",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Linux",
    "RabbitMQ",
    // AI & LLM Tools
    "Claude",
    "OpenAI Codex",
    "MCP Servers",
    "LangChain",
    "RAG",
    "Prompt Engineering"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "leulneway93@gmail.com",
    tel: "+251955988835",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lachevo",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/lachevo_l",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/lachevo",
        icon: Icons.telegram,

        navbar: true,
      },
      whatsapp: {
        name: "whatsapp",
        url: "https://wa.me/251955988835",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      npm: {
        name: "Npm",
        url: "https://www.npmjs.com/~lachevo",
        icon: Icons.npm,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Nourishlab",
      href: "#",
      badges: [],
      location: "Ethiopia",
      title: "Team Lead",
      logoUrl: "/nourishlab.jpg",
      start: "Aug 2025",
      end: "Present",
      description:
        "Led the end-to-end development of an AI-powered nutrition platform, designing and implementing scalable full-stack features from responsive frontend interfaces to secure backend APIs and database architecture. Integrated AI-driven meal recommendations, personalized nutrition insights, and user analytics while optimizing application performance, authentication, and overall user experience. Collaborated with cross-functional team members using Agile methodologies, managing feature planning, code reviews, testing, deployment, and ongoing maintenance to deliver a reliable SaaS platform.",
    },
    {
      company: "KIWI DIGITAL",
      href: "https://kiwidigitals.com/",
      badges: [],
      location: "Ethiopia",
      title: "Lead Developer",
      logoUrl: "/kiwi.jpg",
      start: "Jan 2025",
      end: "Present",
      description:
        "Developed custom static and dynamic websites tailored to client requirements using modern full-stack technologies. Collaborated directly with clients to gather requirements, implement requested features, and deliver responsive, user-friendly web solutions. Deployed, managed, and maintained client websites, ensuring reliability, security, and timely updates after launch. Built and integrated frontend interfaces with backend services, databases, and APIs to create scalable and functional web Applications.",
    },
    {
      company: "Roha Travels | Full Stack Developer",
      href: "https://rohatravels.com",
      badges: [],
      location: "Ethiopia",
      title: "Full Stack Developer",
      logoUrl: "/roha.jpg",
      start: "April 2025",
      end: "Present",
      description:
        "Build full-stack applications using Next.js, Django, Node.js, PostgreSQL, and RabbitMQ ",
    },
    {
      company: "SoundRig-United Kingdom(Remote)",
      badges: [],
      href: "https://soundrig.io",
      location: "United Kingdom-Remote",
      title: "Project Manager - Backend and Blockchain Developer ",
      logoUrl: "/soundrig.jpg",
      start: "June 2023",
      end: "Present",
      description:
        "Architected and delivered a decentralised music and NFT marketplace on Cardano and TON blockchains; built the frontend with React and Next.js and backend APIs with Node.js. Engineered an end-to-end NFT minting pipeline with automated metadata validation and on-chain transaction management, reducing failed mint transactions by 25%. Implemented CI/CD pipelines and automated code review gates using GitHub Actions and Docker, cutting average release cycle time and reducing production regressions. Managed third-party wallet integrations (Nami, Eternl, TON Connect) and protocol connectors ensuring cross-platform compatibility.",
    },
    {
      company: "Muyalogy",
      href: "https://www.muyalogy.com/",
      badges: [],
      location: "Ethiopia",
      title: "Intern",
      logoUrl: "/muyalogy.jpg",
      start: "Sep 2024",
      end: "Jun 2025",
      description:
        "Built course management, learner progress tracking, and analytics dashboard modules for a SaaS LMS using React, Next.js, Node.js, and PostgreSQL. Designed a modular GraphQL API layer serving 12 frontend features, reducing data over-fetching and improving average API response time by 35%. Refactored core React components and implemented Redux state management, measurably improving Lighthouse performance scores and user-perceived load times.",
    },
    {
      company: "Perago Information Systems ",
      href: "https://www.peragosystems.com/",
      badges: [],
      location: "Ethiopia",
      title: "Frontend Developer",
      logoUrl: "/perago.webp",
      start: "Jan 2024",
      end: "Feb 2025",
      description:
        "Built reusable React component libraries and REST/GraphQL API integrations for government-facing E-Service platforms serving thousands of daily transactions. Implemented AWS cloud deployment pipelines automating build, test, and release stages, reducing manual deployment effort by 40%.",
    },
    {
      company: "Dynamic Technologies",
      href: "https://dynamictechnologieset.com/",
      badges: [],
      location: "Ethiopia",
      title: "Software Engineer",
      logoUrl: "/dynamic.jpeg",
      start: "Jan 2024",
      end: "Jun 2025",
      description:
        "Built Node.js and PostgreSQL backend systems for e-commerce and real-time sports betting platforms handling concurrent sessions and live odds feeds. Optimised critical database queries and introduced indexing strategies, reducing average API response time from 850ms to under 200ms.",
    },
    {
      company: "Lela Tech",
      href: "https://www.lelatech.io/",
      badges: [],
      location: "Ethiopia",
      title: "Software Engineer",
      logoUrl: "/lela.jpeg",
      start: "May 2024",
      end: "November 2024",
      description:
        "Built AI-driven SaaS platforms integrating Claude and OpenAI Codex APIs with Cardano smart contracts, enabling automated on-chain actions triggered by AI model outputs. Developed Python FastAPI and Node.js NestJS backend services handling AI inference, blockchain transaction broadcasting, and multi-platform webhook integrations. Deployed and audited Plutus and Solidity smart contracts verifying tokenomics, on-chain logic, and security compliance before mainnet release.",
    },
    {
      company: "Creative Codes-Saudi Arabia(Remote)",
      href: "https://c-code.net/",
      badges: [],
      location: "Saudi Arabia - Remote",
      title: "System Design - UX/UI Designer",
      logoUrl: "/cc.png",
      start: "February 2023",
      end: "July 2025",
      description:
        "Conducted design research and delivered high-quality prototypes, wireframes, and final designs for various clients. Led design system development and user testing for mobile and web platforms, resulting in improved engagement metrics. Additionally, contributed to system design, ensuring scalable and user-centric architecture across applications and websites.",
    },
    {
      company: "Software Engineers Association (Volunteer)",
      href: "https://aastu.software/",
      badges: [],
      location: "Ethiopia - Community",
      title: "Project Manager",
      logoUrl: "/sea.jpg",
      start: "June 2023",
      // TODO: Confirm the real end date for this volunteer role.
      end: "June 2025",
      description:
        "Led development of the association website and mobile apps; owned architecture, code reviews, and project roadmaps across multiple concurrent initiatives.",
    },
    {
      company: "GDG (Community Volunteer)",
      href: "https://gdg.community.dev/",
      badges: [],
      location: "Ethiopia",
      title: "Project Manager, Mentor, Education Operator",
      logoUrl: "/gdgl.png",
      start: "June 2022",
      end: "June 2025",
      description:
        "Planned and delivered hackathons and technical workshops; mentored 50+ students on full-stack development, project execution, and engineering careers.",
    },
  ],
  education: [
    {
      school: "Safari Academy",
      href: "https://safari-academy.com/",
      degree: "High School Diploma",
      logoUrl: "/safari.jpg",
      start: "2015",
      end: "2019",
    },
    {
      school: "Addis Ababa Science and Technology University",
      href: "http://www.aastu.edu.et/",
      degree: "Bachelor of Science in Enviromental Engineering",
      logoUrl: "/aastu.jpg",
      start: "2023",
      end: "Expected 2028",
    },
    {
      school: "HiLCoE School of Computer Science and Technology",
      href: "https://hilcoe.net/",
      degree: "Bachelor of Science in Software Engineering",
      logoUrl: "",
      start: "2024",
      end: "Expected 2028",
    },
    {
      school: "Georgia Institute of Technology",
      href: "https://www.gatech.edu/",
      degree: "Introduction to User Experience Design",
      logoUrl: "/gt.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Self Taught",
      href: "",
      degree: "Programming, UX/UI Design, IoT Design",
      logoUrl: "",
      start: "Ongoing",
      end: "",
    },
  ],
  projects: [
    {
      title: "Inbox Intelligence AI Agent",
      href: "https://github.com/yohhannees/Inbox-Intelligence-AI-Agent",
      dates: "2026",
      active: true,
      description:
        "A local-first Python AI agent that connects Telegram, Gmail, Slack, and demo sources into one prioritized Streamlit digest. Built with explicit LangGraph nodes, pluggable connectors, SQLite storage, structured LLM outputs, provider switching across Claude, Gemini, OpenAI, and Ollama, plus a no-key demo mode for quick testing.",
      technologies: [
        "Python",
        "Streamlit",
        "LangGraph",
        "SQLite",
        "Claude",
        "Gemini",
        "OpenAI",
        "Ollama",
        "Telethon",
        "Gmail API",
        "Slack API",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yohhannees/Inbox-Intelligence-AI-Agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/inbox-intelligence.png",
      video: "",
    },
    {
      title: "RecruiterAssist",
      href: "https://github.com/yohhannees/RecruiterAssist",
      dates: "2026",
      active: true,
      description:
        "An evidence-based hiring assistant that turns job descriptions and interview transcripts into per-requirement evidence cards with direct citations. The app keeps the hiring decision with the recruiter while using Claude to parse requirements, grade coverage, generate follow-up questions, and export auditable Markdown and PDF scorecards.",
      technologies: [
        "Python",
        "Streamlit",
        "Claude Sonnet",
        "SQLite",
        "Pydantic",
        "ReportLab",
        "AI Analysis",
        "PDF Export",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yohhannees/RecruiterAssist",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/recruiterassist.png",
      video: "",
    },
    {
      title: "Beyond ERP",
      href: "https://beyond-erp.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "A sector-aware ERP workspace for Ethiopian companies, covering sales, stock, payroll, finance, and reports. Designed around NBE compliance, 15% VAT workflows, offline-first operation, multilingual teams, sector-specific modules, and fast onboarding for retail, manufacturing, agriculture, construction, healthcare, education, and more.",
      technologies: [
        "ERP",
        "SaaS",
        "Offline-first",
        "VAT Reports",
        "NBE Compliance",
        "Finance",
        "Payroll",
        "Inventory",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://beyond-erp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/beyond-erp.png",
      video: "",
    },
    {
      title: "Muyalogy",
      href: "https://www.muyalogy.com/",
      dates: "September 2023 – December 2024",
      active: true,
      description:
        "A SaaS LMS built for Ethiopian and Amharic-speaking learners, featuring course management, learner progress tracking, and an analytics dashboard. Designed a modular GraphQL API layer serving 12 frontend features, reducing data over-fetching and improving average API response time by 35%. Implemented Redux state management and refactored core React components, measurably improving Lighthouse scores and user-perceived load times.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "Node.js",
        "TailwindCSS",
        "Stripe",
        "Chapa",
        "Mux",
        "Mantine UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.muyalogy.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mmmm.png",
      video: "",
    },
    {
      title: "Endubis Wallet",
      href: "https://x.com/EndubisWallet",
      dates: "May 2024 – Present",
      active: true,
      description:
        "A non-custodial crypto wallet running as a Telegram mini app, integrating Cardano and TON blockchains. Built with Plutus smart contracts and a Node.js backend for UTxO and transaction management, using the Blockfrost API for Cardano node communication. Handles wallet state synchronisation, transaction submission, and on-chain/off-chain communication with a focus on security compliance before public launch.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Chapa",
        "TON SDK",
        "Blockfrost",
        "Cardano SDK",
        "Mantine UI",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://x.com/EndubisWallet",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App",
          href: "https://t.me/EndubisWalletBot",
          icon: <Icons.framermotion className="size-3" />,
        },
      ],
      image: "/end.png",
      video: "",
    },
    {
      title: "Soundrig",
      href: "https://soundrig.io/",
      dates: "April 2023 – Present",
      active: true,
      description:
        "A decentralised music and NFT marketplace on Cardano and TON blockchains, built with React, Next.js, and Node.js. Features an end-to-end NFT minting pipeline with automated metadata validation and on-chain transaction management, reducing failed mint transactions by 25%. Supports third-party wallet integrations including Nami, Eternl, and TON Connect, with CI/CD pipelines via GitHub Actions and Docker for reliable releases.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Node.js",
        "Mantine UI",
        "Magic UI",
        "Cardano SDK",
        "TON SDK",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://soundrig.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/soundrig.png",
      video: "",
    },
    {
      title: "Jiret",
      href: "https://www.jiret.com/",
      dates: "September 2023 – December 2024",
      active: true,
      description:
        "A white-label SaaS platform in the vein of Thinkific and Teachable, enabling businesses to sell courses, manage students, and build virtual classrooms with customizable landing pages. Architected for multi-tenancy and scalability, with Mux-powered video delivery, Chapa payment integration, and a visual page builder (Puck) for zero-code customisation.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "TailwindCSS",
        "Mantine UI",
        "Chapa",
        "Cloudflare Workers",
        "AWS",
        "Mux Player",
        "Puck",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.jiret.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/jiret.png",
      video: "",
    },
    {
      title: "Unichain",
      href: "https://unichain-nu.vercel.app/",
      dates: "September 2023 – December 2024",
      active: true,
      description:
        "Unichain is a Web3 platform built on Solana that brings blockchain innovation to universities. Students can mint NFT-based ID credentials, earn tokens for campus engagement, and connect through a fast, secure network. Unichain redefines student identity, rewards, and community participation in the digital age.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "TailwindCSS",
        "Mantine UI",
        "Cloudflare Workers",
        "AWS",
        "Web3js",
        "Solana",
      ],
      links: [
        {
          type: "Website",
          href: "https://unichain-nu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/unichain.png",
      video: "",
    },
    {
      title: "StockSavy",
      href: "https://shop-management-five.vercel.app/",
      // TODO: Confirm the real StockSavy dates.
      dates: "September 2023 – January 2024",
      active: true,
      description:
        "A smart inventory management platform combining stock tracking, sales, lending, and analytics for modern retailers. Live in 10+ real shops across Addis Ababa, it streamlines daily operations and surfaces actionable business insights, helping owners make data-driven decisions with confidence.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "TailwindCSS",
        "Mantine UI",
        "Cloudflare Workers",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://shop-management-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/stock.png",
      video: "",
    },
    {
      title: "Creative Code",
      href: "https://creative-code-wzot.vercel.app/",
      // TODO: Confirm the real Creative Code dates.
      dates: "September 2023 – January 2024",
      active: true,
      description:
        "A collaborative coding environment where users can create, edit, save, and share code snippets. Built as a showcase of interactive UI patterns and real-time state management, with a clean editor experience for developers of all levels.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "TailwindCSS",
        "Mantine UI",
        "Cloudflare Workers",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://creative-code-wzot.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cccc.png",
      video: "",
    },
    {
      title: "Semantic File Explorer",
      href: "https://creative-code-wzot.vercel.app/",
      dates: "March 2024 – May 2025",
      active: true,
      description:
        "A desktop application that replaces keyword search with natural-language, semantics-first file retrieval. Built with Rust and Tauri for native performance, it indexes files locally into a LanceDB vector store and uses AI embeddings to surface the most relevant results, with no cloud dependency or privacy trade-off.",
      technologies: ["Rust", "Tauri", "shadcn/ui", "React", "LanceDB"],
      links: [
        {
          type: "Desktop App",
          href: "https://semantic-file-explorer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sem.png",
      video: "",
    },
    {
      title: "Journey AI - Travel Companion",
      href: "https://endubis-journey.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "An AI-powered travel companion app that helps users plan trips, discover destinations, and get real-time recommendations through a conversational interface. Integrates LLM-based itinerary generation, flight and hotel search, and contextual travel tips personalised to the user's preferences and budget.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "LangChain",
        "RAG",
        "Claude API",
        "OpenAI",
        "FastAPI",
        "Python",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://endubis-journey.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ej.png",
      video: "",
    },
    {
      title: "Madvervet",
      href: "https://madvervet-teal.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A brand and marketing web application built with a clean, modern design system, responsive across devices and optimised for conversion with purposeful layout and motion.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://madvervet-teal.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mv.png",
      video: "",
    },
    {
      title: "Dynasty Racing - licensed syndicate management service",
      href: "https://draft-two-lime.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "We provide BHA-licensed syndicate management services and ownership opportunities across both codes in the UK, Ireland, and Europe. Whether you're a breeder, trainer, existing or aspiring owner, we manage syndicates at every level.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://draft-two-lime.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dr.png",
      video: "",
    },
    {
      title: "Provable Systems",
      href: "https://provable.systems/",
      dates: "2024",
      active: true,
      description:
        "A blockchain consultancy platform helping businesses design and integrate on-chain systems, covering smart contract development, tokenomics auditing, and end-to-end blockchain strategy for teams entering Web3.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://new-endubis-landing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ps.png",
      video: "",
    },
    {
      title: "Endubis - blockchain and cryptocurrency services",
      href: "https://endubis-io.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "The official Endubis platform offering end-to-end blockchain and cryptocurrency services including wallet infrastructure, smart contract deployment, tokenomics design, and on-chain transaction management, built on Cardano with a focus on accessibility for African users.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://endubis-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eb.png",
      video: "",
    },
    {
      title: "Creavo Studio - creative studio platform",
      href: "https://creavostudio.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A creative studio portfolio platform built to present design and development work with editorial flair, featuring immersive layouts, rich media, and motion-forward presentation for agencies and independent creators.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://creavostudio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ca.png",
      video: "",
    },
    {
      title: "Mindora",
      href: "https://mindora-flame.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A mindfulness and mental wellness app with guided exercises, mood tracking, and a calm, distraction-free UI designed to encourage daily practice and self-reflection.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "LangChain",
        "RAG",
        "OpenAI API",
        "Python",
        "FastAPI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://mindora-flame.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/m.png",
      video: "",
    },
    {
      title: "Gaddacore - Blockchain Decentralized Justice System",
      href: "https://gaddacore.vercel.app/",
      dates: "2024",
      active: true,
      description: "A blockchain-based decentralized justice system that provides a fair and transparent platform for resolving disputes.Secure your capital in smart-locked vaults. Gadaa ensures you only pay when delivery is verified by on-chain consensus.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel", "Solana", "Cardano", "Blockchain", "Decentralized", "Justice", "System"],
      links: [
        {
          type: "Website",
          href: "https://gadda-core.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gc.png",
      video: "",
    },
  ],
  hackathons: [],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
