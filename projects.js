/**
 * projects.js
 * Renders portfolio content from window.PORTFOLIO_CONTENT (defined in content.js).
 */

const FALLBACK_CONTENT = {
  profile: {
    name: "Dr. Jingjing Lin",
    logo: "JL",
    role: "User Experience Designer",
    tagline:
      "I craft research-driven, human-centered digital experiences that delight users and move business metrics.",
  },
  about: {
    bio: [
      "I'm a UX researcher and designer with a background in cognitive science and human-computer interaction.",
      "I hold a Ph.D. in Information Science and have shipped products used by millions of people.",
    ],
    skills: ["User Research", "Interaction Design", "Usability Testing"],
  },
  projects: {
    subtitle: "A curated set of UX case studies.",
    items: [],
  },
  contact: {
    copy: "Feel free to reach out.",
    email: "hello@example.com",
  },
};

const STORAGE_KEY = "portfolioContent";

function getStoredContent() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (_error) {
    return null;
  }
}

const content = getStoredContent() || window.PORTFOLIO_CONTENT || FALLBACK_CONTENT;

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
 * Apply profile/about/contact text content.
 */
function applyContent() {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === "string") {
      el.textContent = value;
    }
  };

  setText("nav-logo", content.profile.logo);
  setText("profile-name", content.profile.name);
  setText("profile-name-footer", content.profile.name);
  setText("profile-role", content.profile.role);
  setText("profile-tagline", content.profile.tagline);
  setText("projects-subtitle", content.projects.subtitle);
  setText("contact-copy", content.contact.copy);

  const aboutBio = document.getElementById("about-bio");
  if (aboutBio && Array.isArray(content.about.bio)) {
    aboutBio.innerHTML = content.about.bio.map((line) => `<p>${line}</p>`).join("");
  }

  const aboutSkills = document.getElementById("about-skills");
  if (aboutSkills && Array.isArray(content.about.skills)) {
    aboutSkills.innerHTML = content.about.skills.map((skill) => `<li>${skill}</li>`).join("");
  }

  const contactEmail = document.getElementById("contact-email");
  if (contactEmail && content.contact.email) {
    contactEmail.href = `mailto:${content.contact.email}`;
  }
}

/**
 * Render all project cards into the grid.
 */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  const items = Array.isArray(content.projects.items) ? content.projects.items : [];
  items.forEach((project) => {
    fragment.appendChild(createCard(project));
  });
  grid.appendChild(fragment);
}

applyContent();
renderProjects();
