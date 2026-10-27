const guides = {
  login: {
    title: "Login & account access",
    text: "Confirm that you are using the official website or app. Check your connection and account details. Never ask the customer to disclose their password or one-time verification code.\n\nSuggested response: “I can help you troubleshoot account access. Please use the official sign-in page and tell me the error message you see. Do not share your password or OTP.”"
  },
  password: {
    title: "Password reset",
    text: "Use the official password-reset page. Check that any reset email comes from a verified sender. Never ask a customer to send their current password or reset code.\n\nSuggested response: “Please select Forgot Password on the official sign-in page and follow the instructions. If the email does not arrive, check spam and contact verified support.”"
  },
  security: {
    title: "Suspicious links & fraud",
    text: "Do not open suspicious links or share OTPs, passwords, payment details, or recovery codes. Preserve relevant messages and report them through official support channels. Contact your bank promptly if financial information may be compromised.\n\nSuggested response: “Please do not click the link or share any verification code. Report the message through an official channel and secure your account if you suspect unauthorized access.”"
  },
  privacy: {
    title: "Privacy requests",
    text: "Collect only the minimum information needed to identify the request. Direct customers to the official privacy channel. Do not promise deletion or disclosure until identity and applicable requirements are verified.\n\nSuggested response: “We can direct your privacy request to the appropriate team. Please use our verified privacy channel and avoid sending sensitive personal information in this chat.”"
  },
  complaint: {
    title: "Complaint or escalation",
    text: "Listen without blame, record a concise summary, ask for non-sensitive reference details, and explain the next review step. Do not promise an outcome or deadline that has not been confirmed.\n\nSuggested response: “I’m sorry this has been frustrating. I can document the issue and refer it to the appropriate support team. Please do not include passwords or OTPs.”"
  },
  optout: {
    title: "Stop support calls",
    text: "Record the customer's preference using the approved process. Explain any applicable exceptions or processing time only when confirmed. Do not request unnecessary personal information.\n\nSuggested response: “I’ve noted your request to stop support calls. We will route it through the applicable preference-management process. Please let us know if you continue to receive unwanted calls.”"
  }
};

const search = document.querySelector("#topic-search");
const clearSearch = document.querySelector("#clear-search");
const topics = [...document.querySelectorAll(".topic")];
const count = document.querySelector("#result-count");
const noResults = document.querySelector("#no-results");
const title = document.querySelector("#result-title");
const resultText = document.querySelector("#result-text");
const copy = document.querySelector("#copy");
const reset = document.querySelector("#reset");
const status = document.querySelector("#copy-status");
let currentText = "";
let selected = "";

function filterTopics() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  topics.forEach(button => {
    const matches = button.textContent.toLowerCase().includes(query);
    button.hidden = !matches;
    if (matches) visible++;
  });
  count.textContent = `${visible} of ${topics.length} support topics`;
  noResults.hidden = visible !== 0;
  clearSearch.hidden = query.length === 0;
}

function selectTopic(button) {
  const item = guides[button.dataset.topic];
  if (!item) return;
  selected = button.dataset.topic;
  topics.forEach(topic => {
    const active = topic === button;
    topic.classList.toggle("active", active);
    topic.setAttribute("aria-pressed", String(active));
  });
  title.textContent = item.title;
  resultText.textContent = item.text;
  currentText = `${item.title}\n\n${item.text}`;
  copy.hidden = false;
  reset.hidden = false;
  status.textContent = "";
}

topics.forEach(button => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => selectTopic(button));
});

search.addEventListener("input", filterTopics);
clearSearch.addEventListener("click", () => {
  search.value = "";
  filterTopics();
  search.focus();
});

reset.addEventListener("click", () => {
  selected = "";
  currentText = "";
  topics.forEach(topic => {
    topic.classList.remove("active");
    topic.setAttribute("aria-pressed", "false");
  });
  title.textContent = "Choose a support topic";
  resultText.textContent = "A helpful guide and suggested response will appear here.";
  copy.hidden = true;
  reset.hidden = true;
  status.textContent = "";
});

copy.addEventListener("click", async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(currentText);
    } else {
      const area = document.createElement("textarea");
      area.value = currentText;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const copied = document.execCommand("copy");
      area.remove();
      if (!copied) throw new Error("Copy unavailable");
    }
    status.textContent = "Response copied successfully.";
  } catch {
    status.textContent = "Copy unavailable. Please select and copy the response text manually.";
  }
});

filterTopics();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
