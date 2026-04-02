/**
 * projects.js
 * Defines the list of UX design projects and dynamically renders
 * project cards into the #projects-grid container.
 */

const projects = [
  {
    id: 1,
    title: "HealthBridge Patient Portal",
    category: "Healthcare UX",
    description:
      "Redesigned a patient‑facing health portal used by 1.2 million users. Led end‑to‑end research, journey mapping, and iterative prototyping that reduced appointment‑booking errors by 38%.",
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
      "Designed an adaptive learning dashboard for K‑12 students. Conducted contextual inquiry with 60 students and teachers, resulting in a 45% improvement in task‑completion rate during usability tests.",
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
      "Built a comprehensive design system — tokens, component library, and contribution guidelines — adopted across 14 product teams, cutting time‑to‑design by 60% organisation‑wide.",
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
      "Overhauled a fintech app's onboarding journey through diary studies and cognitive walkthroughs, reducing drop‑off at sign‑up by 52% and increasing 30‑day retention by 28%.",
    tags: ["Diary Study", "Onboarding", "Cognitive Walkthrough", "Figma"],
    emoji: "💳",
    color: "#e0f2f1",
    link: "#",
  },
];

/**
 * Render a single project card element.
 * @param {Object} project
 * @returns {HTMLElement}
 */
function createCard(project) {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("data-project-id", project.id);

  const tagsHTML = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  card.innerHTML = `
    <div class="card__image--placeholder" style="background-color: ${project.color};">
      ${project.emoji}
    </div>
    <div class="card__body">
      <p class="card__category">${project.category}</p>
      <h3 class="card__title">${project.title}</h3>
      <p class="card__description">${project.description}</p>
      <div class="card__tags">${tagsHTML}</div>
      <a href="${project.link}" class="card__link" aria-label="View case study for ${project.title}">
        View Case Study →
      </a>
    </div>
  `;

  return card;
}

/**
 * Render all project cards into the grid.
 */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  projects.forEach((project) => {
    fragment.appendChild(createCard(project));
  });
  grid.appendChild(fragment);
}

renderProjects();
