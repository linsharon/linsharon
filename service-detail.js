/**
 * service-detail.js
 * Renders one service detail from URL query parameter `id`.
 */

(function renderServiceDetail() {
  const content = window.PORTFOLIO_CONTENT || {};
  const services = (content.services && content.services.items) || [];

  const params = new URLSearchParams(window.location.search);
  const serviceId = params.get("id");

  const service = services.find((item) => String(item.id) === String(serviceId));

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === "string") {
      el.textContent = value;
    }
  };

  setText("nav-logo", content.profile && content.profile.logo);
  setText("profile-name-footer", content.profile && content.profile.name);

  const emptyState = document.getElementById("service-empty");
  const header = document.getElementById("service-header");

  if (!service) {
    if (emptyState) emptyState.hidden = false;
    if (header) header.hidden = true;
    return;
  }

  if (header) header.hidden = false;
  if (emptyState) emptyState.hidden = true;

  document.title = `${service.title} | Service`;

  setText("service-category", service.category || "Service");
  setText("service-title", `${service.emoji ? `${service.emoji} ` : ""}${service.title}`);
  setText("service-description", service.description || "");
  setText("service-overview-text", service.description || "");

  const tagsWrap = document.getElementById("service-tags");
  if (tagsWrap && Array.isArray(service.tags)) {
    tagsWrap.innerHTML = service.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  }

  const overview = document.getElementById("service-overview");
  if (overview) overview.hidden = !service.description;

  const deliverablesSection = document.getElementById("service-deliverables");
  const deliverablesList = document.getElementById("service-deliverables-list");
  const deliverables = Array.isArray(service.deliverables) ? service.deliverables : [];
  if (deliverablesSection && deliverablesList) {
    deliverablesSection.hidden = deliverables.length === 0;
    deliverablesList.innerHTML = deliverables.map((item) => `<li>${item}</li>`).join("");
  }

  const detailGrid = document.getElementById("service-grid");
  const details = service.details && typeof service.details === "object" ? service.details : null;
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
