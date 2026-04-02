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
    photo: "profile-photo.jpg",
    tagline:
      "I craft AI-driven, human-centered digital tools and services that delight users in Learning, Research, and Knowledge Service Scenarios.",
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
      "A curated set of past UX design projects.",
    items: [
      {
        id: 1,
        title: "ResearchIC.com",
        category: "Scientific Communication",
        description:
          "This domain was once the home to an online journal club hosting platform. I designed and developed the whole system using the Moodle system.",
        tags: ["Journey Mapping", "LMS", "Moodle","Usability Testing"],
        emoji: "🏥",
        color: "#e8f5e9",
        link: "#",
      },
      {
        id: 2,
        title: "Programship.com",
        category: "International Education",
        description:
          "Designed a web platform to facilitate the information and communication exchanges between Chinese prospective students and international education programs abroad.",
        tags: ["Interaction Design", "Prototyping", "Usability Testing"],
        emoji: "📚",
        color: "#e3f2fd",
        link: "#",
      },
      {
        id: 3,
        title: "StartupCan.ch",
        category: "Online Community",
        description:
          "Built a platform to connect Swiss startup founders for better information and communication.",
        tags: ["WordPress", "Prototyping","Usability Testing"],
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
  tools: {
    subtitle:
      "Tools currently in development. Click to view repository and progress.",
    items: [
      {
        id: 1,
        title: "Second-Brain",
        category: "Mindmapping Tools",
        description:
          "A mindmapping tool for creating nodes of concepts and lines of relationships in order to build a knowledge map individually or collaboratively, potentially with AI.",
        tags: ["LLM", "Research Workflow", "Mindmapping"],
        emoji: "🧪",
        color: "#e6f4ff",
        repo: "https://github.com/linsharon/second-brain",
      },
      {
        id: 2,
        title: "Course Design Copilot",
        category: "Learning Design",
        description:
          "A practical toolkit to generate course blueprints, activity plans, and assessment drafts for online teaching.",
        tags: ["Instructional Design", "LMS", "Automation"],
        emoji: "🎓",
        color: "#fff3e5",
        repo: "https://github.com/linsharon/course-design-copilot",
      },
      {
        id: 3,
        title: "Paper Structurer",
        category: "Academic Writing",
        description:
          "A writing helper that turns notes and references into structured article outlines with reusable templates.",
        tags: ["Writing", "Structure", "Template"],
        emoji: "📝",
        color: "#f0f7ff",
        repo: "https://github.com/linsharon/paper-structurer",
      },
      {
        id: 4,
        title: "Data Storyboard Kit",
        category: "Research Communication",
        description:
          "A visual planning kit that helps convert findings into storytelling flows for reports and presentations.",
        tags: ["Data Storytelling", "Visualization", "Communication"],
        emoji: "📊",
        color: "#eefcf2",
        repo: "https://github.com/linsharon/data-storyboard-kit",
      },
      {
        id: 5,
        title: "Interview Insight Mapper",
        category: "UX Research",
        description:
          "A lightweight analysis tool for coding interview transcripts and building insight clusters quickly.",
        tags: ["Qualitative Analysis", "Coding", "Synthesis"],
        emoji: "🎤",
        color: "#fff7ec",
        repo: "https://github.com/linsharon/interview-insight-mapper",
      },
      {
        id: 6,
        title: "LMS Experience Auditor",
        category: "Platform QA",
        description:
          "An automated checklist and scoring utility for auditing learner journey quality inside LMS platforms.",
        tags: ["LMS", "UX Audit", "Quality"],
        emoji: "🧭",
        color: "#f7f0ff",
        repo: "https://github.com/linsharon/lms-experience-auditor",
      },
    ],
  },
  services: {
    subtitle:
      "Current online services for researchers, educators, and academic teams.",
    items: [
      {
        id: 1,
        title: "Research Consulting",
        category: "Consulting",
        description:
          "1:1 or team consulting for research design, project planning, and publication workflows.",
        tags: ["Research Strategy", "Proposal", "Publication Planning"],
        emoji: "🔬",
        color: "#eefbf0",
        deliverables: [
          "Research scope and roadmap",
          "Method recommendation with rationale",
          "Action plan for publication milestones",
        ],
        details: {
          audience: "Individual researchers, postdocs, and small academic labs.",
          format: "Online session + follow-up notes.",
          duration: "60-90 minutes per session.",
        },
      },
      {
        id: 2,
        title: "Research Training Workshops",
        category: "Training",
        description:
          "Live online workshops on AI-assisted research workflows, academic writing, and tool adoption.",
        tags: ["Workshop", "AI Literacy", "Academic Writing"],
        emoji: "📘",
        color: "#f5efff",
        deliverables: [
          "Customized workshop outline",
          "Live guided practice",
          "Reusable templates and checklist",
        ],
        details: {
          audience: "Universities, research groups, and professional communities.",
          format: "Remote interactive workshop.",
          duration: "Half-day or full-day options.",
        },
      },
      {
        id: 3,
        title: "Academic Writing Clinic",
        category: "Writing Support",
        description:
          "Hands-on support for article framing, argument clarity, and revision strategy for publication.",
        tags: ["Manuscript", "Revision", "Journal Strategy"],
        emoji: "✍️",
        color: "#eef5ff",
        deliverables: [
          "Section-by-section feedback",
          "Argument and structure optimization",
          "Revision roadmap with priorities",
        ],
        details: {
          audience: "Researchers preparing journal manuscripts.",
          format: "Online review + coaching call.",
          duration: "2-3 week support cycle.",
        },
      },
      {
        id: 4,
        title: "UX Audit for Learning Platforms",
        category: "UX Evaluation",
        description:
          "Comprehensive UX review for course platforms to improve learner flow, engagement, and completion.",
        tags: ["Heuristic Review", "Accessibility", "Learner Journey"],
        emoji: "🔍",
        color: "#edfdf7",
        deliverables: [
          "Annotated issue list",
          "Priority matrix for fixes",
          "Redesign recommendations",
        ],
        details: {
          audience: "EdTech teams and university teaching units.",
          format: "Audit report + debrief session.",
          duration: "1-2 weeks depending on scope.",
        },
      },
      {
        id: 5,
        title: "AI Workflow Coaching",
        category: "Coaching",
        description:
          "Practical coaching to integrate AI tools into daily research and teaching workflows effectively.",
        tags: ["AI Adoption", "Workflow Design", "Productivity"],
        emoji: "🤖",
        color: "#fff3f8",
        deliverables: [
          "Current workflow diagnosis",
          "Customized AI playbook",
          "Implementation checkpoints",
        ],
        details: {
          audience: "Faculty members and research professionals.",
          format: "1:1 or small group coaching online.",
          duration: "4-session package.",
        },
      },
      {
        id: 6,
        title: "Digital Course Experience Sprint",
        category: "Service Design",
        description:
          "A focused sprint to redesign one course or module into a clearer and more engaging digital experience.",
        tags: ["Course Redesign", "Experience Mapping", "Prototype"],
        emoji: "🚀",
        color: "#f7f2ff",
        deliverables: [
          "Experience blueprint",
          "Improved activity and content flow",
          "Prototype of key screens",
        ],
        details: {
          audience: "Instructors, course teams, and instructional designers.",
          format: "Collaborative sprint workshop.",
          duration: "5-10 working days.",
        },
      },
    ],
  },
  contact: {
    copy:
      "Whether you have a project in mind or just want to chat about design and research, feel free to reach out.",
    email: "pandalinjingjing@gmail.com",
  },
};
