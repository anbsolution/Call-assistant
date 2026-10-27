/* Z7 v3.1 — compact view navigation; existing features remain available */
(() => {
  const main = document.querySelector("main");
  if (!main || document.querySelector(".workspace-nav")) return;

  const views = [
    { id: "home", en: "Home", hi: "होम", icon: "⌂", selectors: [".welcome", ".searchbox", "#result-count", "#favorite-hint", "#topics", "#no-results"] },
    { id: "workspace", en: "Workspace", hi: "वर्कस्पेस", icon: "▦", selectors: [".pro-dashboard", ".favorite-panel"] },
    { id: "call", en: "Call Flow", hi: "कॉल फ्लो", icon: "☎", selectors: [".call-flow"] },
    { id: "support", en: "Support", hi: "सपोर्ट", icon: "✓", selectors: [".result"] }
  ];

  const nav = document.createElement("nav");
  nav.className = "workspace-nav";
  nav.setAttribute("aria-label", "Main navigation");
  nav.innerHTML = `<div class="workspace-nav-inner">${views.map((v, i) =>
    `<button type="button" class="workspace-tab${i === 0 ? " active" : ""}" data-view="${v.id}" aria-selected="${i === 0 ? "true" : "false"}"><span aria-hidden="true">${v.icon}</span><span class="tab-label" data-en="${v.en}" data-hi="${v.hi}">${v.en}</span></button>`
  ).join("")}</div>`;

  const panels = {};
  views.forEach((v, i) => {
    const panel = document.createElement("section");
    panel.className = "workspace-view";
    panel.dataset.panel = v.id;
    panel.hidden = i !== 0;
    panel.setAttribute("aria-label", v.en);
    panels[v.id] = panel;
  });

  // Move existing sections into tabs without cloning them, preserving event listeners/state.
  views.forEach(v => {
    v.selectors.forEach(selector => {
      const el = main.querySelector(selector);
      if (el) panels[v.id].append(el);
    });
  });

  // Keep no-results beside topics and make it part of the Home view.
  main.replaceChildren(...views.map(v => panels[v.id]));
  main.insertAdjacentElement("beforebegin", nav);

  function showView(id) {
    if (!panels[id]) return;
    views.forEach(v => {
      panels[v.id].hidden = v.id !== id;
      const tab = nav.querySelector(`[data-view="${v.id}"]`);
      const active = v.id === id;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    try { localStorage.setItem("z7-active-view-v31", id); } catch {}
    if (id === "home") document.querySelector("#topic-search")?.focus({preventScroll:true});
  }

  nav.addEventListener("click", event => {
    const tab = event.target.closest("[data-view]");
    if (tab) showView(tab.dataset.view);
  });

  // Add a language option for the shell. Call-flow retains its own full English/Hindi/Hinglish selector.
  const langToggle = document.querySelector(".language-toggle");
  if (langToggle) {
    langToggle.setAttribute("aria-label", "Change interface language");
  }

  let initial = "home";
  try {
    const saved = localStorage.getItem("z7-active-view-v31");
    if (views.some(v => v.id === saved)) initial = saved;
  } catch {}
  showView(initial);
})();
