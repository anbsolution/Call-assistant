(() => {
  const LANG_KEY = "z7-support-language-v24";
  const FAV_KEY = "z7-support-favorites-v24";

  const translations = {
    en: {
      tagline: "SMART SUPPORT CENTER",
      heading: "How can we help you?",
      intro: "Search a topic or select a support guide below.",
      search: "Search support topics…",
      dashboard: "Support Dashboard",
      total: "Total topics",
      viewed: "Unique viewed",
      recent: "Recent topics",
      recentTitle: "Recently opened",
      clearHistory: "Clear history",
      favorites: "Favorite topics",
      addFav: "☆ Favorite",
      removeFav: "★ Favorited",
      emptyFav: "Your favorite topics will appear here.",
      clearFav: "Clear favorites",
      guide: "SUPPORT GUIDE",
      choose: "Choose a support topic",
      guideIntro: "A helpful guide and suggested response will appear here.",
      copy: "Copy response",
      reset: "Clear selection",
      footer: "Protect personal information. Never ask customers to share passwords or OTPs."
    },
    hi: {
      tagline: "स्मार्ट सपोर्ट सेंटर",
      heading: "हम आपकी कैसे मदद करें?",
      intro: "विषय खोजें या नीचे से सपोर्ट गाइड चुनें।",
      search: "सपोर्ट विषय खोजें…",
      dashboard: "सपोर्ट डैशबोर्ड",
      total: "कुल विषय",
      viewed: "देखे गए अलग विषय",
      recent: "हाल के विषय",
      recentTitle: "हाल में खोले गए",
      clearHistory: "इतिहास साफ़ करें",
      favorites: "पसंदीदा विषय",
      addFav: "☆ पसंदीदा",
      removeFav: "★ पसंदीदा जोड़ा",
      emptyFav: "आपके पसंदीदा विषय यहाँ दिखाई देंगे।",
      clearFav: "पसंदीदा साफ़ करें",
      guide: "सपोर्ट गाइड",
      choose: "सपोर्ट विषय चुनें",
      guideIntro: "सहायक गाइड और सुझाया गया जवाब यहाँ दिखाई देगा।",
      copy: "जवाब कॉपी करें",
      reset: "चयन हटाएँ",
      footer: "व्यक्तिगत जानकारी सुरक्षित रखें। ग्राहक से पासवर्ड या OTP कभी न माँगें।"
    }
  };

  const topicLabels = {
    en: {
      login: "🔐 Login & account access",
      password: "🔑 Password reset",
      security: "🛡️ Suspicious links & fraud",
      privacy: "🔒 Privacy requests",
      complaint: "💬 Complaint or escalation",
      optout: "📵 Stop support calls"
    },
    hi: {
      login: "🔐 लॉगिन और खाता एक्सेस",
      password: "🔑 पासवर्ड रीसेट",
      security: "🛡️ संदिग्ध लिंक और धोखाधड़ी",
      privacy: "🔒 गोपनीयता अनुरोध",
      complaint: "💬 शिकायत या आगे भेजें",
      optout: "📵 सपोर्ट कॉल बंद करें"
    }
  };

  const guideHi = {
    login: {
      title: "लॉगिन और खाता एक्सेस",
      text: "आधिकारिक वेबसाइट या ऐप का उपयोग सुनिश्चित करें। इंटरनेट कनेक्शन और खाते के विवरण जाँचें। ग्राहक से पासवर्ड या OTP कभी न माँगें।\n\nसुझाया गया जवाब: “मैं खाते में लॉगिन की समस्या में मदद कर सकता हूँ। कृपया आधिकारिक लॉगिन पेज इस्तेमाल करें और दिखाई देने वाला error बताएँ। अपना पासवर्ड या OTP साझा न करें।”"
    },
    password: {
      title: "पासवर्ड रीसेट",
      text: "आधिकारिक पासवर्ड रीसेट पेज का उपयोग करें। ईमेल भेजने वाले की पुष्टि करें। वर्तमान पासवर्ड या रीसेट कोड किसी से साझा न करें।\n\nसुझाया गया जवाब: “आधिकारिक लॉगिन पेज पर Forgot Password चुनें और निर्देशों का पालन करें। ईमेल न मिले तो Spam फ़ोल्डर जाँचें और सत्यापित सपोर्ट से संपर्क करें।”"
    },
    security: {
      title: "संदिग्ध लिंक और धोखाधड़ी",
      text: "संदिग्ध लिंक न खोलें। OTP, पासवर्ड, भुगतान विवरण या recovery code साझा न करें। संदेश की रिपोर्ट आधिकारिक चैनल से करें। वित्तीय जानकारी प्रभावित हो सकती है तो अपने बैंक से तुरंत संपर्क करें।\n\nसुझाया गया जवाब: “कृपया लिंक न खोलें और कोई verification code साझा न करें। आधिकारिक चैनल पर रिपोर्ट करें और अनधिकृत गतिविधि की आशंका हो तो खाता सुरक्षित करें।”"
    },
    privacy: {
      title: "गोपनीयता अनुरोध",
      text: "केवल आवश्यक जानकारी लें। अनुरोध को आधिकारिक privacy channel पर भेजें। पहचान और लागू आवश्यकताओं की पुष्टि से पहले deletion या disclosure का वादा न करें।\n\nसुझाया गया जवाब: “हम आपका अनुरोध सही टीम तक पहुँचा सकते हैं। कृपया सत्यापित privacy channel का उपयोग करें और चैट में संवेदनशील जानकारी न भेजें।”"
    },
    complaint: {
      title: "शिकायत या आगे भेजें",
      text: "बिना दोष दिए बात सुनें, समस्या का संक्षिप्त विवरण दर्ज करें और अगला कदम समझाएँ। पुष्टि के बिना परिणाम या समयसीमा का वादा न करें।\n\nसुझाया गया जवाब: “आपको हुई परेशानी के लिए खेद है। मैं समस्या दर्ज करके सही सपोर्ट टीम तक पहुँचा सकता हूँ। कृपया पासवर्ड या OTP शामिल न करें।”"
    },
    optout: {
      title: "सपोर्ट कॉल बंद करें",
      text: "स्वीकृत प्रक्रिया से ग्राहक की पसंद दर्ज करें। बिना पुष्टि के समयसीमा या अपवाद का वादा न करें। अनावश्यक व्यक्तिगत जानकारी न माँगें।\n\nसुझाया गया जवाब: “आपकी सपोर्ट कॉल बंद करने की इच्छा दर्ज कर ली गई है। इसे लागू प्रक्रिया के अनुसार भेजा जाएगा। इसके बाद भी अनचाही कॉल आए तो हमें बताएँ।”"
    }
  };

  function readList(key) {
    try {
      const data = JSON.parse(localStorage.getItem(key) || "[]");
      return Array.isArray(data)
        ? [...new Set(data.filter(id => Object.hasOwn(topicLabels.en, id)))]
        : [];
    } catch {
      return [];
    }
  }

  function readLanguage() {
    try {
      return localStorage.getItem(LANG_KEY) === "hi" ? "hi" : "en";
    } catch {
      return "en";
    }
  }

  let lang = readLanguage();
  let favorites = readList(FAV_KEY);

  const header = document.querySelector(".brand");
  const main = document.querySelector("main");
  const welcome = document.querySelector(".welcome");
  const searchBox = document.querySelector(".searchbox");
  if (!header || !main || !welcome || !searchBox) return;

  const toggle = document.createElement("button");
  toggle.id = "language-toggle";
  toggle.type = "button";
  toggle.className = "language-toggle";
  toggle.textContent = lang === "en" ? "हिन्दी" : "English";
  toggle.setAttribute("aria-label", "Change interface language");
  header.append(toggle);

  const favPanel = document.createElement("section");
  favPanel.className = "favorite-panel";
  favPanel.innerHTML = `
    <div class="favorite-heading">
      <h2 id="fav-title">Favorite topics</h2>
      <button id="fav-clear" type="button">Clear favorites</button>
    </div>
    <div id="fav-list" class="fav-list"></div>
    <p id="fav-message" class="pro-message" role="status"></p>
  `;
  const dashboard = document.querySelector(".pro-dashboard");
  (dashboard || searchBox).insertAdjacentElement("afterend", favPanel);

  const favList = favPanel.querySelector("#fav-list");
  const favMessage = favPanel.querySelector("#fav-message");
  let favButtons = [];

  const initialTitles = {
    resultCount: document.querySelector("#result-count"),
    noResults: document.querySelector("#no-results"),
    guideTitle: document.querySelector("#result-title"),
    guideText: document.querySelector("#result-text"),
    copy: document.querySelector("#copy"),
    reset: document.querySelector("#reset"),
    footer: document.querySelector("footer"),
    dashboard: document.querySelector(".pro-heading h2"),
    total: document.querySelectorAll(".pro-stat span")[0],
    viewed: document.querySelectorAll(".pro-stat span")[1],
    recent: document.querySelectorAll(".pro-stat span")[2],
    recentTitle: document.querySelector(".recent-heading h3"),
    clearHistory: document.querySelector("#pro-clear")
  };

  const labelOriginals = new Map();
  document.querySelectorAll(".topic").forEach(button => {
    labelOriginals.set(button.dataset.topic, button.textContent);
  });

  function persistFavorites() {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    } catch {
      favMessage.textContent = "Device storage unavailable; favorites may not persist.";
    }
  }

  function renderFavorites() {
    favList.replaceChildren();
    if (!favorites.length) {
      const empty = document.createElement("p");
      empty.className = "pro-empty";
      empty.textContent = translations[lang].emptyFav;
      favList.append(empty);
      return;
    }

    favorites.forEach(id => {
      const row = document.createElement("div");
      row.className = "fav-row";

      const open = document.createElement("button");
      open.type = "button";
      open.className = "fav-open";
      open.textContent = topicLabels[lang][id];
      open.addEventListener("click", () => {
        const topic = document.querySelector(`.topic[data-topic="${id}"]`);
        if (!topic) return;
        const search = document.querySelector("#topic-search");
        if (topic.hidden && search) {
          search.value = "";
          search.dispatchEvent(new Event("input", { bubbles: true }));
        }
        topic.click();
        document.querySelector(".result")?.scrollIntoView({behavior:"smooth",block:"start"});
      });

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "fav-remove";
      remove.textContent = "×";
      remove.setAttribute("aria-label", `Remove ${topicLabels[lang][id]} from favorites`);
      remove.addEventListener("click", () => {
        favorites = favorites.filter(item => item !== id);
        persistFavorites();
        renderFavorites();
      });

      row.append(open, remove);
      favList.append(row);
    });
  }

  function updateTopicLabels() {
    document.querySelectorAll(".topic").forEach(button => {
      const id = button.dataset.topic;
      if (topicLabels[lang][id]) button.textContent = topicLabels[lang][id];
      button.setAttribute("aria-label", topicLabels[lang][id] || id);
    });
  }

  function updateFavoriteButtons() {
    document.querySelectorAll(".topic").forEach(button => {
      const id = button.dataset.topic;
      let fav = button.querySelector(".favorite-star");
      if (!fav) {
        fav = document.createElement("span");
        fav.className = "favorite-star";
        fav.setAttribute("aria-hidden", "true");
        button.append(fav);
      }
      fav.textContent = favorites.includes(id) ? "★" : "☆";
      button.classList.toggle("is-favorite", favorites.includes(id));
    });
  }

  function translate() {
    const t = translations[lang];
    document.documentElement.lang = lang;
    toggle.textContent = lang === "en" ? "हिन्दी" : "English";

    const eyebrow = welcome.querySelector(".eyebrow");
    if (eyebrow) eyebrow.textContent = t.tagline;
    welcome.querySelector("h2").textContent = t.heading;
    welcome.querySelector("p:not(.eyebrow)").textContent = t.intro;

    document.querySelector("#topic-search").placeholder = t.search;
    if (initialTitles.dashboard) initialTitles.dashboard.textContent = t.dashboard;
    if (initialTitles.total) initialTitles.total.textContent = t.total;
    if (initialTitles.viewed) initialTitles.viewed.textContent = t.viewed;
    if (initialTitles.recent) initialTitles.recent.textContent = t.recent;
    if (initialTitles.recentTitle) initialTitles.recentTitle.textContent = t.recentTitle;
    if (initialTitles.clearHistory) initialTitles.clearHistory.textContent = t.clearHistory;
    document.querySelector("#fav-title").textContent = t.favorites;
    document.querySelector("#fav-clear").textContent = t.clearFav;
    if (initialTitles.guideTitle?.textContent === "Choose a support topic" ||
        initialTitles.guideTitle?.textContent === "सपोर्ट विषय चुनें") {
      initialTitles.guideTitle.textContent = t.choose;
      initialTitles.guideText.textContent = t.guideIntro;
    }
    if (initialTitles.copy) initialTitles.copy.textContent = t.copy;
    if (initialTitles.reset) initialTitles.reset.textContent = t.reset;
    if (initialTitles.footer) initialTitles.footer.textContent = t.footer;

    updateTopicLabels();
    updateFavoriteButtons();
    renderFavorites();
    document.querySelector("#topic-search").dispatchEvent(new Event("input", {bubbles:true}));
  }

  function showLocalizedGuide(id) {
    if (lang !== "hi" || !guideHi[id]) return false;
    const guide = guideHi[id];
    document.querySelector("#result-title").textContent = guide.title;
    document.querySelector("#result-text").textContent = guide.text;
    return true;
  }

  document.querySelectorAll(".topic").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.topic;
      if (lang === "hi") showLocalizedGuide(id);
    });
  });

  toggle.addEventListener("click", () => {
    lang = lang === "en" ? "hi" : "en";
    try { localStorage.setItem(LANG_KEY, lang); } catch {}
    translate();

    const selected = document.querySelector(".topic.active");
    if (selected) showLocalizedGuide(selected.dataset.topic);
  });

  favPanel.querySelector("#fav-clear").addEventListener("click", () => {
    favorites = [];
    persistFavorites();
    updateFavoriteButtons();
    renderFavorites();
    favMessage.textContent = lang === "hi" ? "पसंदीदा सूची साफ़ कर दी गई।" : "Favorites cleared.";
  });

  document.querySelectorAll(".topic").forEach(button => {
    button.addEventListener("contextmenu", event => {
      event.preventDefault();
      const id = button.dataset.topic;
      favorites = favorites.includes(id)
        ? favorites.filter(item => item !== id)
        : [id, ...favorites];
      persistFavorites();
      updateFavoriteButtons();
      renderFavorites();
    });
  });

  function createFavoriteHint() {
    let hint = document.querySelector("#favorite-hint");
    if (!hint) {
      hint = document.createElement("p");
      hint.id = "favorite-hint";
      hint.className = "favorite-hint";
      hint.textContent = lang === "hi"
        ? "किसी विषय पर देर तक दबाएँ, ताकि उसे पसंदीदा में जोड़ या हटाया जा सके।"
        : "Long-press a topic to add or remove it from favorites.";
      document.querySelector("#result-count").insertAdjacentElement("afterend", hint);
    }
  }

  createFavoriteHint();
  translate();

  const originalSelectTitle = document.querySelector("#result-title");
  const watch = new MutationObserver(() => {
    const active = document.querySelector(".topic.active");
    if (active && lang === "hi") showLocalizedGuide(active.dataset.topic);
  });
  if (originalSelectTitle) watch.observe(originalSelectTitle, {childList:true,subtree:true});
})();
