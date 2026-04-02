/**
 * content.js
 * Update this file with your own portfolio content.
 * The page reads this object and renders it on each load.
 */

window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Dr. Jingjing Lin",
    logo: "ResearchIC",
    role: "Digital User Experience Designer",
    photo: "profile-photo.png",
    tagline:
      "I craft AI-driven, human-centered digital tools and platforms that delight users in Learning, Research, and Knowledge Service Scenarios.",
  },
  about: {
    bio: [
      "I'm a digital UX designer with a background in IT in Education and Online Communication Science. My practice spans the design lifecycle - from user research and journey mapping to interaction design, prototyping, and usability testing.",
      "I hold a Ph.D. and worked for 10+ years in academia (Hong Kong, Switzerland, Japan), where I have shipped a variety of platform products used by global users.",
    ],
    skills: [
      "User Research & Interviews",
      "UX Design",
      "Wireframing & Prototyping",
      "Usability Testing",
      "Moodle / WordPress / Articulate",
      "Learning Management Systems",
      "Claude / GitHub / ChatGPT",
      "Vibe Coding",
    ],
  },
  projects: {
    subtitle:
      "A curated set of UX case studies spanning research, design, and evaluation.",
    items: [
      {
        id: 1,
        title: "HealthBridge Patient Portal",
        category: "Healthcare UX",
        description:
          "Redesigned a patient-facing health portal used by 1.2 million users. Led end-to-end research, journey mapping, and iterative prototyping that reduced appointment-booking errors by 38%.",
        tags: ["User Research", "Journey Mapping", "Figma", "Usability Testing"],
        emoji: "🏥",
        color: "#e8f5e9",
        link: "#",
      },
      {
        id: 2,
        title: "EduPath Learning Dashboard",
        category: "Education Technology",
        description:
          "Designed an adaptive learning dashboard for K-12 students. Conducted contextual inquiry with 60 students and teachers, resulting in a 45% improvement in task-completion rate during usability tests.",
        tags: ["Contextual Inquiry", "Interaction Design", "Sketch", "A/B Testing"],
        emoji: "📚",
        color: "#e3f2fd",
        link: "#",
      },
      {
        id: 3,
        title: "Nexus Enterprise Design System",
        category: "Design Systems",
        description:
          "Built a comprehensive design system - tokens, component library, and contribution guidelines - adopted across 14 product teams, cutting time-to-design by 60% organization-wide.",
        tags: ["Design Systems", "Tokens", "Figma", "Documentation"],
        emoji: "🧩",
        color: "#fce4ec",
        link: "#",
      },
      {
        id: 4,
        title: "Wayfinder Navigation App",
        category: "Mobile UX",
        description:
          "Created UX for an indoor navigation app for large public venues. Ran wayfinding studies with 80+ participants to uncover mental models and translate them into intuitive map interactions.",
        tags: ["Mobile Design", "Wayfinding", "Prototype Testing", "Adobe XD"],
        emoji: "🗺️",
        color: "#fff8e1",
        link: "#",
      },
      {
        id: 5,
        title: "ClearVoice Accessibility Audit",
        category: "Accessibility",
        description:
          "Conducted a WCAG 2.1 AA audit and remediation plan for a government services website, identifying 120+ issues and delivering annotated wireframes for an accessible redesign.",
        tags: ["Accessibility", "WCAG 2.1", "Audit", "Remediation"],
        emoji: "♿",
        color: "#f3e5f5",
        link: "#",
      },
      {
        id: 6,
        title: "PulseFinance Onboarding Flow",
        category: "FinTech UX",
        description:
          "Overhauled a fintech app's onboarding journey through diary studies and cognitive walkthroughs, reducing drop-off at sign-up by 52% and increasing 30-day retention by 28%.",
        tags: ["Diary Study", "Onboarding", "Cognitive Walkthrough", "Figma"],
        emoji: "💳",
        color: "#e0f2f1",
        link: "#",
      },
    ],
  },
  contact: {
    copy:
      "Whether you have a project in mind or just want to chat about design and research, feel free to reach out.",
    email: "hello@jingjinglin.design",
  },
};
