(() => {
  const KEY = "z7-support-recent-v22";
  const topicNames = {
    login: "🔐 Login & account access",
    password: "🔑 Password reset",
    security: "🛡️ Suspicious links & fraud",
    privacy: "🔒 Privacy requests",
    complaint: "💬 Complaint or escalation",
    optout: "📵 Stop support calls"
  };

  let recent = [];
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
    if (Array.isArray(saved)) recent = saved.filter(id => topicNames[id]).slice(0, 3);
  } catch {}

  const dashboard = document.createElement("section");
  dashboard.className = "pro-dashboard";
  dashboard.innerHTML = `
    <div class="pro-heading">
      <div><p class="eyebrow">YOUR WORKSPACE</p><h2>Support Dashboard</h2></div>
      <span class="pro-version">PRO · 2.2</span>
    </div>
    <div class="pro-stats">
      <div class="pro-stat"><span>Total topics</span><strong id="pro-total">6</strong></div>
      <div class="pro-stat"><span>Topics viewed</span><strong id="pro-viewed">0</strong></div>
      <div class="pro-stat"><span>Recent list</span><strong id="pro-recent-count">0/3</strong></div>
    </div>
    <div class="recent-heading"><h3>Recently opened</h3><button id="pro-clear" type="button">Clear history</button></div>
    <div id="pro-recent" class="pro-recent"></div>
    <p id="pro-message" class="pro-message" role="status"></p>
  `;

  const searchBox = document.querySelector(".searchbox");
  if (!searchBox) return;
  searchBox.insertAdjacentElement("afterend", dashboard);

  const recentList = dashboard.querySelector("#pro-recent");
  const viewedCount = dashboard.querySelector("#pro-viewed");
  const recentCount = dashboard.querySelector("#pro-recent-count");
  const message = dashboard.querySelector("#pro-message");

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(recent));
    } catch {
      message.textContent = "Local storage is unavailable; recent history may not persist.";
    }
  }

  function renderRecent() {
    recentList.replaceChildren();
    recentCount.textContent = `${recent.length}/3`;
    viewedCount.textContent = String(recent.length);

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
      button.textContent = topicNames[id];
      button.addEventListener("click", () => {
        const original = document.querySelector(`.topic[data-topic="${id}"]`);
        if (!original) return;
        const search = document.querySelector("#topic-search");
        if (original.hidden && search) {
          search.value = "";
          search.dispatchEvent(new Event("input", { bubbles: true }));
        }
        original.click();
        document.querySelector(".result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      recentList.append(button);
    });
  }

  document.querySelectorAll(".topic[data-topic]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.topic;
      if (!topicNames[id]) return;
      recent = [id, ...recent.filter(item => item !== id)].slice(0, 3);
      save();
      renderRecent();
      message.textContent = `${topicNames[id].replace(/^[^\w]+/, "")} opened.`;
    });
  });

  dashboard.querySelector("#pro-clear").addEventListener("click", () => {
    recent = [];
    try { localStorage.removeItem(KEY); } catch {}
    renderRecent();
    message.textContent = "Recent topic history cleared.";
  });

  renderRecent();
})();
