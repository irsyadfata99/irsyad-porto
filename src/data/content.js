export const profile = {
  name: "Irsyad Fata Al Aidi",
  role: "Backend-focused Developer",
  location: "Bandung, Indonesia",
  summary:
    "5+ years architecting production REST APIs, multi-tenant SaaS platforms, and custom POS/ERP backends with Node.js, Express, and relational databases. I've shipped automated WhatsApp workflows, optimized database schemas, and taken projects end to end when the backend is the hard part.",
  email: "irsyadfata99@gmail.com",
  phone: "081318465501",
  github: "https://github.com/irsyadfata99",
  linkedin: "https://linkedin.com/in/irsyadfata",
};

export const stack = {
  backend: ["Node.js", "Express.js", "NestJS", "Laravel", "REST API Design", "Microservices"],
  automation: ["Payment Gateway Integration", "Cron Jobs / Scheduled Tasks", "WhatsApp API Automation", "Webhook Handling"],
  languages: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP", "C++"],
  data: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma", "TypeORM"],
  ai: ["Claude Code", "Gemini", "AI-Assisted Engineering", "Prompt Engineering"],
  tools: ["Git / GitHub", "Docker", "Postman", "Linux", "IoT Integration"],
};

export const projects = [
  {
    method: "POST",
    path: "/projects/laptop-booking",
    status: 200,
    name: "Laptop Booking System",
    period: "2026",
    description:
      "Internal booking platform for company laptop loans, letting staff reserve equipment and track availability in real time, backed by Supabase for auth, database, and row-level access control.",
    stack: ["React (Vite)", "Supabase"],
    highlightLabel: "supabase",
    links: {
      live: "https://laptop-booking-mkw.netlify.app/",
    },
  },
  {
    method: "POST",
    path: "/projects/cert-generator",
    status: 200,
    name: "Bulk Certificate Generator",
    period: "Feb 2026 — Apr 2026",
    description:
      "SaaS platform that imports data directly from Google Forms and Excel sheets and produces PDF certificates in seconds, with background jobs handling mass email dispatch.",
    stack: ["Next.js", "Express.js", "PostgreSQL"],
    links: {
      frontend: "https://github.com/irsyadfata99/cert-management-fe",
      backend: "https://github.com/irsyadfata99/cert-management",
    },
  },
  {
    method: "POST",
    path: "/projects/pos-rmu",
    status: 200,
    name: "Point of Sale System — RMU",
    period: "Jun 2025 — Apr 2026",
    description:
      "Custom POS system tailored to the client's workflow, replacing manual sales tracking with accurate transactions and real-time reporting.",
    stack: ["Next.js", "Express.js", "MySQL", "AI-Assisted Development"],
    links: {
      frontend: "https://github.com/irsyadfata99/RMU",
      backend: "https://github.com/irsyadfata99/be-rmu",
    },
  },
  {
    method: "POST",
    path: "/projects/autoreminder",
    status: 200,
    name: "autoreminder.id",
    period: "Aug 2024 — Aug 2025",
    description:
      "Multi-tenant SaaS that automatically sends WhatsApp reminders to tenants on behalf of boarding-house clients. Cron jobs scan due dates daily and trigger reminders per tenant's billing cycle, and an integrated payment gateway lets tenants pay directly from the reminder, with webhook callbacks updating payment status in real time.",
    stack: ["React (Vite)", "Express.js", "MySQL", "Payment Gateway", "Cron Jobs", "AI-Assisted Development"],
    highlightLabel: "payment + cron",
    links: null,
  },
  {
    method: "POST",
    path: "/projects/school-ppdb",
    status: 200,
    name: "School Website & Online Registration (PPDB)",
    period: "Apr 2021 — Sep 2023",
    description:
      "Full school platform with automated online student-registration (PPDB), news management, and a dynamic school profile. Drove enrollment for two consecutive years.",
    stack: ["Laravel", "Bootstrap"],
    links: null,
  },
];

export const experience = [
  {
    role: "Technical Instructor & Module Developer",
    org: "Kodingnext",
    period: "Sept 2023 — Present",
    points: [
      "Taught Python, Scratch, and web development to 100+ students aged 8–16",
      "Designed project-based curriculum translating CS concepts for beginners",
      "Mentored students on algorithmic thinking and game logic",
    ],
  },
  {
    role: "Staff ICT",
    org: "SMK MVP ARS International",
    period: "Aug 2020 — Sept 2023",
    points: [
      "Engineered an automated online PPDB registration system end to end",
      "Drove 200+ registrations via Instagram campaigns across 2 years",
      "Maintained student data systems and academic records",
    ],
  },
  {
    role: "IT Support Specialist",
    org: "PT Industri Telekomunikasi Indonesia (INTI)",
    period: "Jan 2020 — Mar 2020",
    points: [
      "Managed hardware repair and OS re-installation workflow for a team of interns",
      "Processed up to 300 units per batch to meet delivery deadlines",
    ],
  },
  {
    role: "IT Infrastructure Specialist",
    org: "PT Industri Telekomunikasi Indonesia (INTI)",
    period: "Jun 2018 — Aug 2018",
    points: [
      "Executed LAN-based Windows imaging across 25–30 PCs per batch",
      "Replaced a manual one-by-one setup process with simultaneous deployment",
    ],
  },
];

export const certificates = [
  {
    name: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    id: "QLZ99JK07Z5D",
  },
  {
    name: "JavaScript",
    issuer: "freeCodeCamp",
    id: "irsyadfata99-jsv9",
  },
  {
    name: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    id: "07Z6JQ442XQR",
  },
  {
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    id: "N9ZO20MN6PG5",
  },
];

export const education = {
  degree: "Computer Engineering (D3)",
  school: "Telkom University",
  period: "Aug 2014 — Aug 2018",
  note: "Field Coordinator, HRD organization — managed large-scale campus events and team logistics.",
};
