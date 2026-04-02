/**
 * project-detail.js
 * Renders one project case study from the URL query parameter `id`.
 */

(function renderProjectDetail() {
  const content = window.PORTFOLIO_CONTENT || {};
  const projects = (content.projects && content.projects.items) || [];

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const project = projects.find((item) => String(item.id) === String(projectId));

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === "string") {
      el.textContent = value;
    }
  };

  setText("nav-logo", content.profile && content.profile.logo);
  setText("profile-name-footer", content.profile && content.profile.name);

  const emptyState = document.getElementById("detail-empty");
  const header = document.getElementById("detail-header");

  if (!project) {
    if (emptyState) emptyState.hidden = false;
    if (header) header.hidden = true;
    return;
  }

  if (header) header.hidden = false;
  if (emptyState) emptyState.hidden = true;

  document.title = `${project.title} | Case Study`;

  setText("detail-category", project.category || "Case Study");
  setText("detail-title", `${project.emoji ? `${project.emoji} ` : ""}${project.title}`);
  setText("detail-description", project.description || "");
  setText("detail-overview-text", project.description || "");

  const tagsWrap = document.getElementById("detail-tags");
  if (tagsWrap && Array.isArray(project.tags)) {
    tagsWrap.innerHTML = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  }

  const overview = document.getElementById("detail-overview");
  if (overview) overview.hidden = !project.description;

  const highlightsSection = document.getElementById("detail-highlights");
  const highlightsList = document.getElementById("detail-highlights-list");
  const highlights = Array.isArray(project.highlights) ? project.highlights : [];
  if (highlightsSection && highlightsList) {
    highlightsSection.hidden = highlights.length === 0;
    highlightsList.innerHTML = highlights.map((item) => `<li>${item}</li>`).join("");
  }

  const detailGrid = document.getElementById("detail-grid");
  const details = project.details && typeof project.details === "object" ? project.details : null;
  if (detailGrid && details) {
    const blocks = Object.entries(details)
      .map(([key, value]) => {
        if (typeof value !== "string" || value.trim() === "") return "";
        const heading = key.charAt(0).toUpperCase() + key.slice(1);
        return `<article class="detail-card"><h3>${heading}</h3><p>${value}</p></article>`;
      })
      .join("");
    detailGrid.innerHTML = blocks;
  }
})();
