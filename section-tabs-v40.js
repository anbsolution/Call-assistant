/* v4.0 — put existing page sections into accessible subtabs without recreating them */
(() => {
  "use strict";
  const configs = [
    {
      panel: '.workspace-view[data-panel="home"]',
      label: "Home sections",
      sections: [
        { selector: ".welcome", label: "Overview" },
        { selector: ".topic-search", label: "Search" },
        { selector: ".topics", label: "Topics" },
        { selector: ".result", label: "Answer" }
      ]
    },
    {
      panel: '.workspace-view[data-panel="workspace"]',
      label: "Workspace sections",
      sections: [
        { selector: ".pro-dashboard", label: "Dashboard" },
        { selector: ".favorite-panel", label: "Favorites" },
        { selector: ".qa-bank", label: "Q&A Bank" }
      ]
    }
  ];

  function tabify(config) {
    const root = document.querySelector(config.panel);
    if (!root || root.querySelector(":scope > .workspace-subnav")) return;

    const found = config.sections
      .map(item => ({ ...item, node: root.querySelector(item.selector) }))
      .filter(item => item.node);

    if (found.length < 2) return;

    const nav = document.createElement("nav");
    nav.className = "workspace-subnav";
    nav.setAttribute("aria-label", config.label);
    nav.setAttribute("role", "tablist");

    const content = document.createElement("div");
    content.className = "workspace-subpanels";
    const buttons = [];
    const panels = [];

    found.forEach((item, index) => {
      const id = "section-tab-" + config.panel.match(/data-panel="([^"]+)"/)[1] + "-" + index;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "workspace-subtab" + (index === 0 ? " active" : "");
      button.textContent = item.label;
      button.id = id;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", String(index === 0));
      button.setAttribute("aria-controls", id + "-panel");
      button.tabIndex = index === 0 ? 0 : -1;

      const panel = document.createElement("section");
      panel.className = "workspace-subpanel";
      panel.id = id + "-panel";
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", id);
      panel.hidden = index !== 0;
      panel.appendChild(item.node);

      button.addEventListener("click", () => activate(index));
      button.addEventListener("keydown", event => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const next = event.key === "ArrowRight"
          ? (index + 1) % buttons.length
          : (index - 1 + buttons.length) % buttons.length;
        activate(next);
        buttons[next].focus();
      });

      nav.appendChild(button);
      content.appendChild(panel);
      buttons.push(button);
      panels.push(panel);
    });

    function activate(activeIndex) {
      buttons.forEach((button, index) => {
        const active = index === activeIndex;
        button.classList.toggle("active", active);
        button.setAttribute("aria-selected", String(active));
        button.tabIndex = active ? 0 : -1;
        panels[index].hidden = !active;
      });
    }

    root.prepend(content);
    root.prepend(nav);
  }

  function init() {
    configs.forEach(tabify);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
