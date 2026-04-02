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

const content = window.PORTFOLIO_CONTENT || FALLBACK_CONTENT;

const TOOL_PREVIEW_STORAGE_KEY_PREFIX = "tool-preview-url-";

/**
 * Render a single project card element.
 * @param {Object} project
 * @returns {HTMLElement}
 */
function createCard(project) {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("data-project-id", project.id);
  const detailHref = `project.html?id=${encodeURIComponent(project.id)}`;

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
      <a href="${detailHref}" class="card__link" aria-label="View case study for ${project.title}">
        View Case Study →
      </a>
    </div>
  `;

  return card;
}

/**
 * Render a single tool card.
 * @param {Object} tool
 * @returns {HTMLElement}
 */
function createToolCard(tool) {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("data-tool-id", tool.id);

  const tagsHTML = Array.isArray(tool.tags)
    ? tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")
    : "";

  const repoHref = tool.repo || "#";
  const previewHref = tool.preview || "#";
  const hasPreviewUrl = previewHref !== "#";

  card.innerHTML = `
    <div class="card__image--placeholder" style="background-color: ${tool.color || "#f0f0f0"};">
      ${tool.emoji || "🛠️"}
    </div>
    <div class="card__body">
      <p class="card__category">${tool.category || "Tool"}</p>
      <h3 class="card__title">${tool.title || "Untitled Tool"}</h3>
      <p class="card__description">${tool.description || ""}</p>
      <div class="card__tags">${tagsHTML}</div>
      <div class="card__links">
        <a href="${repoHref}" target="_blank" rel="noopener noreferrer" class="card__link" aria-label="View repository for ${tool.title}">
          View Repository →
        </a>
        <a href="${previewHref}" target="_blank" rel="noopener noreferrer" class="card__link tool-preview-link" data-tool-id="${tool.id}" data-tool-title="${tool.title || "Untitled Tool"}" data-preview-url="${previewHref}" aria-label="Preview ${tool.title || "Untitled Tool"} on Vercel">
          ${hasPreviewUrl ? "Preview →" : "Preview (Set URL) →"}
        </a>
      </div>
    </div>
  `;

  return card;
}

/**
 * Ask for and open a preview URL for a tool card.
 */
function initToolPreviewLinks() {
  const grid = document.getElementById("tools-grid");
  if (!grid) return;

  grid.addEventListener("click", (event) => {
    const link = event.target.closest(".tool-preview-link");
    if (!link) return;

    event.preventDefault();

    const toolId = link.getAttribute("data-tool-id");
    const toolTitle = link.getAttribute("data-tool-title") || "this tool";
    const defaultUrl = link.getAttribute("data-preview-url") || "";
    const storedUrl = toolId
      ? window.localStorage.getItem(`${TOOL_PREVIEW_STORAGE_KEY_PREFIX}${toolId}`) || ""
      : "";

    const currentUrl = storedUrl || (defaultUrl !== "#" ? defaultUrl : "");
    const input = window.prompt(`Enter Vercel preview URL for ${toolTitle}:`, currentUrl);

    if (input === null) return;

    const normalized = input.trim();
    if (!normalized) return;

    let parsedUrl;
    try {
      parsedUrl = new URL(normalized);
    } catch (_error) {
      window.alert("Please enter a valid URL, e.g. https://your-tool.vercel.app");
      return;
    }

    if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
      window.alert("Preview URL must start with http:// or https://");
      return;
    }

    if (toolId) {
      window.localStorage.setItem(`${TOOL_PREVIEW_STORAGE_KEY_PREFIX}${toolId}`, parsedUrl.toString());
    }

    link.setAttribute("href", parsedUrl.toString());
    link.setAttribute("data-preview-url", parsedUrl.toString());
    link.textContent = "Preview →";

    window.open(parsedUrl.toString(), "_blank", "noopener,noreferrer");
  });
}

/**
 * Render a single service card.
 * @param {Object} service
 * @returns {HTMLElement}
 */
function createServiceCard(service) {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("data-service-id", service.id);

  const tagsHTML = Array.isArray(service.tags)
    ? service.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")
    : "";

  const detailHref = `service.html?id=${encodeURIComponent(service.id)}`;

  card.innerHTML = `
    <div class="card__image--placeholder" style="background-color: ${service.color || "#f0f0f0"};">
      ${service.emoji || "✨"}
    </div>
    <div class="card__body">
      <p class="card__category">${service.category || "Service"}</p>
      <h3 class="card__title">${service.title || "Untitled Service"}</h3>
      <p class="card__description">${service.description || ""}</p>
      <div class="card__tags">${tagsHTML}</div>
      <a href="${detailHref}" class="card__link" aria-label="View service details for ${service.title}">
        View Service →
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
  setText("tools-subtitle", content.tools && content.tools.subtitle);
  setText("services-subtitle", content.services && content.services.subtitle);
  setText("contact-copy", content.contact.copy);

  const profilePhoto = document.getElementById("profile-photo");
  const heroMedia = document.getElementById("hero-media");
  if (profilePhoto && content.profile.photo) {
    profilePhoto.src = content.profile.photo;
    profilePhoto.alt = `Portrait of ${content.profile.name}`;
  }
  if (profilePhoto && heroMedia) {
    profilePhoto.addEventListener("error", () => {
      const currentSrc = profilePhoto.getAttribute("src") || "";
      if (currentSrc.endsWith(".jpg")) {
        profilePhoto.src = currentSrc.replace(/\.jpg$/, ".png");
        return;
      }
      if (currentSrc.endsWith(".jpeg")) {
        profilePhoto.src = currentSrc.replace(/\.jpeg$/, ".png");
        return;
      }
      if (currentSrc.endsWith(".png")) {
        profilePhoto.src = currentSrc.replace(/\.png$/, ".jpg");
        return;
      }
      heroMedia.style.display = "none";
    });
  }

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

/**
 * Render tool cards.
 */
function renderTools() {
  const grid = document.getElementById("tools-grid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  const items = content.tools && Array.isArray(content.tools.items) ? content.tools.items : [];
  items.forEach((tool) => {
    fragment.appendChild(createToolCard(tool));
  });
  grid.appendChild(fragment);
}

/**
 * Render service cards.
 */
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  const items = content.services && Array.isArray(content.services.items) ? content.services.items : [];
  items.forEach((service) => {
    fragment.appendChild(createServiceCard(service));
  });
  grid.appendChild(fragment);
}

applyContent();
renderProjects();
renderTools();
initToolPreviewLinks();
renderServices();
