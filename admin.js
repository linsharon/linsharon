/**
 * admin.js
 * Front-end admin login and JSON editor for portfolio content.
 */

(function initAdminPanel() {
  const STORAGE_KEY = "portfolioContent";
  const SESSION_KEY = "portfolioAdminSession";
  const PROD_SWITCH_SESSION_KEY = "portfolioAdminProdSwitch";

  const adminConfig = window.ADMIN_CONFIG || { username: "admin", password: "admin123" };

  const isLocalDevHost = (hostname) => {
    return (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "::1" ||
      hostname.endsWith(".local")
    );
  };

  const isDevHost = isLocalDevHost(window.location.hostname);

  const canExposeByProductionSwitch = () => {
    const accessToken = typeof adminConfig.productionAccessToken === "string"
      ? adminConfig.productionAccessToken.trim()
      : "";
    const accessParam =
      typeof adminConfig.productionAccessParam === "string" && adminConfig.productionAccessParam.trim()
        ? adminConfig.productionAccessParam.trim()
        : "adminKey";

    if (!accessToken) {
      return false;
    }

    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get(accessParam);

    if (tokenFromUrl && tokenFromUrl === accessToken) {
      sessionStorage.setItem(PROD_SWITCH_SESSION_KEY, "true");
      params.delete(accessParam);
      const nextQuery = params.toString();
      const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}${window.location.hash}`;
      window.history.replaceState({}, "", nextUrl);
      return true;
    }

    return sessionStorage.getItem(PROD_SWITCH_SESSION_KEY) === "true";
  };

  const shouldExposeAdmin =
    isDevHost || adminConfig.exposeInProduction === true || canExposeByProductionSwitch();

  const elements = {
    open: document.getElementById("admin-open"),
    close: document.getElementById("admin-close"),
    modal: document.getElementById("admin-modal"),
    loginForm: document.getElementById("admin-login-form"),
    username: document.getElementById("admin-username"),
    password: document.getElementById("admin-password"),
    editor: document.getElementById("admin-editor"),
    json: document.getElementById("admin-json"),
    save: document.getElementById("admin-save"),
    reset: document.getElementById("admin-reset"),
    logout: document.getElementById("admin-logout"),
    message: document.getElementById("admin-message"),
  };

  const baseContent = window.PORTFOLIO_CONTENT || {};

  // Hide and disable admin in production by default.
  if (!shouldExposeAdmin) {
    if (elements.open) {
      elements.open.style.display = "none";
      elements.open.setAttribute("aria-hidden", "true");
    }
    if (elements.modal) {
      elements.modal.style.display = "none";
      elements.modal.setAttribute("aria-hidden", "true");
    }
    sessionStorage.removeItem(SESSION_KEY);
    return;
  }

  const showModal = () => {
    if (!elements.modal) return;
    elements.modal.classList.add("is-open");
    elements.modal.setAttribute("aria-hidden", "false");
  };

  const hideModal = () => {
    if (!elements.modal) return;
    elements.modal.classList.remove("is-open");
    elements.modal.setAttribute("aria-hidden", "true");
  };

  const setMessage = (text, isError) => {
    if (!elements.message) return;
    elements.message.textContent = text;
    elements.message.style.color = isError ? "#b42318" : "#1f7a1f";
  };

  const setEditorMode = (loggedIn) => {
    if (!elements.loginForm || !elements.editor) return;
    elements.loginForm.hidden = loggedIn;
    elements.editor.hidden = !loggedIn;
  };

  const loadFromStorage = () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return baseContent;

    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : baseContent;
    } catch (_error) {
      return baseContent;
    }
  };

  const ensureRequiredShape = (data) => {
    const required = ["profile", "about", "projects", "contact"];
    return required.every((key) => Object.prototype.hasOwnProperty.call(data, key));
  };

  const fillEditor = () => {
    if (!elements.json) return;
    const current = loadFromStorage();
    elements.json.value = JSON.stringify(current, null, 2);
  };

  const onLogin = (event) => {
    event.preventDefault();

    const username = elements.username ? elements.username.value.trim() : "";
    const password = elements.password ? elements.password.value : "";

    if (username === adminConfig.username && password === adminConfig.password) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setEditorMode(true);
      fillEditor();
      setMessage("Login successful.", false);
      return;
    }

    setMessage("Invalid username or password.", true);
  };

  const onSave = () => {
    if (!elements.json) return;

    try {
      const parsed = JSON.parse(elements.json.value);
      if (!ensureRequiredShape(parsed)) {
        setMessage("JSON must include profile, about, projects, and contact.", true);
        return;
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      setMessage("Saved. Reloading page...", false);
      window.location.reload();
    } catch (_error) {
      setMessage("Invalid JSON format.", true);
    }
  };

  const onReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessage("Reset to repository defaults. Reloading page...", false);
    window.location.reload();
  };

  const onLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(PROD_SWITCH_SESSION_KEY);
    setEditorMode(false);
    if (elements.loginForm) {
      elements.loginForm.reset();
    }
    setMessage("Logged out.", false);
  };

  const bindEvents = () => {
    if (elements.open) {
      elements.open.addEventListener("click", (event) => {
        event.preventDefault();
        showModal();
      });
    }

    if (elements.close) {
      elements.close.addEventListener("click", hideModal);
    }

    if (elements.loginForm) {
      elements.loginForm.addEventListener("submit", onLogin);
    }

    if (elements.save) {
      elements.save.addEventListener("click", onSave);
    }

    if (elements.reset) {
      elements.reset.addEventListener("click", onReset);
    }

    if (elements.logout) {
      elements.logout.addEventListener("click", onLogout);
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        hideModal();
      }
    });
  };

  const restoreSession = () => {
    const loggedIn = sessionStorage.getItem(SESSION_KEY) === "true";
    setEditorMode(loggedIn);
    if (loggedIn) {
      fillEditor();
    }
  };

  bindEvents();
  restoreSession();
})();
