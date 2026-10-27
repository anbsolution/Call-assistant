(() => {
  const RECENT_KEY = "z7-support-recent-v23";
  const VIEWED_KEY = "z7-support-viewed-v23";

  const names = {
    login: "🔐 Login & account access",
    password: "🔑 Password reset",
    security: "🛡️ Suspicious links & fraud",
    privacy: "🔒 Privacy requests",
    complaint: "💬 Complaint or escalation",
    optout: "📵 Stop support calls"
  };

  const readList = key => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(value)
        ? [...new Set(value.filter(id => Object.hasOwn(names, id)))]
        : [];
    } catch {
      return [];
    }
  };

  let recent = readList(RECENT_KEY).slice(0, 3);
  let viewed = readList(VIEWED_KEY);

  const searchBox = document.querySelector(".searchbox");
  if (!searchBox) return;

  const dashboard = document.createElement("section");
  dashboard.className = "pro-dashboard";
  dashboard.innerHTML = `
    <div class="pro-heading">
      <div><p class="eyebrow">YOUR WORKSPACE</p><h2>Support Dashboard</h2></div>
      <span class="pro-version">PRO · 2.4</span>
    </div>
    <div class="pro-stats">
      <div class="pro-stat"><span>Total topics</span><strong>6</strong></div>
      <div class="pro-stat"><span>Unique viewed</span><strong id="pro-viewed">0</strong></div>
      <div class="pro-stat"><span>Recent topics</span><strong id="pro-recent-count">0/3</strong></div>
    </div>
    <div class="recent-heading">
      <h3>Recently opened</h3>
      <button id="pro-clear" type="button">Clear history</button>
    </div>
    <div id="pro-recent" class="pro-recent"></div>
    <p id="pro-message" class="pro-message" role="status"></p>
  `;

  searchBox.insertAdjacentElement("afterend", dashboard);

  const recentList = dashboard.querySelector("#pro-recent");
  const viewedCount = dashboard.querySelector("#pro-viewed");
  const recentCount = dashboard.querySelector("#pro-recent-count");
  const message = dashboard.querySelector("#pro-message");

  function save(key, list) {
    try {
      localStorage.setItem(key, JSON.stringify(list));
      return true;
    } catch {
      message.textContent = "Device storage unavailable; statistics may not persist.";
      return false;
    }
  }

  function render() {
    viewedCount.textContent = String(viewed.length);
    recentCount.textContent = `${recent.length}/3`;
    recentList.replaceChildren();

    if (!recent.length) {
      const empty = document.createElement("p");
      empty.className = "pro-empty";
      empty.textContent = "Your recently opened topics will appear here.";
      recentList.append(empty);
      return;
    }

    recent.forEach(id => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "pro-recent-item";
      button.textContent = names[id];

      button.addEventListener("click", () => {
        const original = document.querySelector(
          `.topic[data-topic="${id}"]`
        );
        if (!original) return;

        if (original.hidden) {
          const search = document.querySelector("#topic-search");
          if (search) {
            search.value = "";
            search.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }

        original.click();
        document.querySelector(".result")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });

      recentList.append(button);
    });
  }

  document.querySelectorAll(".topic[data-topic]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.topic;
      if (!Object.hasOwn(names, id)) return;

      recent = [id, ...recent.filter(item => item !== id)].slice(0, 3);
      viewed = [...new Set([...viewed, id])];

      save(RECENT_KEY, recent);
      save(VIEWED_KEY, viewed);
      render();

      message.textContent = `${names[id]} opened.`;
    });
  });

  dashboard.querySelector("#pro-clear").addEventListener("click", () => {
    recent = [];
    try {
      localStorage.removeItem(RECENT_KEY);
    } catch {
      message.textContent = "Could not clear stored recent history.";
      return;
    }

    render();
    message.textContent = "Recent history cleared. Viewing statistics retained.";
  });

  render();
})();
