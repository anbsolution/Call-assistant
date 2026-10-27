(() => {
  const LANG_KEY = "z7-support-language-v24";
  let lang = "en";
  let current = "start";
  const history = [];

  const script = {
    start: {
      en: "Hello, good morning/afternoon. My name is [your real name], and I’m calling about Z7 platform information. Is this a good time to speak for one minute?",
      hi: "Hello, good morning/afternoon. Mera naam [aapka asli naam] hai. Main Z7 platform ki information ke baare mein call kar raha/rahi hoon. Kya abhi ek minute baat karna convenient hai?",
      options: [
        ["yes", "Yes, continue", "Haan, baat kar sakte hain"],
        ["busy", "Customer is busy", "Customer abhi busy hain"],
        ["no", "Not interested", "Interest nahi hai"]
      ]
    },
    purpose: {
      en: "I’m calling to help with general platform information and account-support guidance. You do not need to make any decision during this call. What would you like help with?",
      hi: "Main general platform information aur account-support guidance ke liye call kar raha/rahi hoon. Is call ke dauran koi decision lena zaroori nahi hai. Aapko kis cheez mein help chahiye?",
      options: [
        ["login", "Login help", "Login mein help"],
        ["account", "Account problem", "Account ki problem"],
        ["password", "Forgot password", "Password bhool gaye"],
        ["link", "SMS or suspicious link", "SMS ya suspicious link"],
        ["fraud", "Possible fraud", "Fraud ka doubt"],
        ["already", "Already has an account", "Pehle se account hai"],
        ["optout", "Stop marketing calls", "Marketing calls band karein"],
        ["closing", "Finish the call", "Call end karein"]
      ]
    },
    busy: {
      en: "That’s okay. I’ll end the call now. You can check official information later if you want. Thank you for your time. Goodbye.",
      hi: "Theek hai. Main abhi call end kar deta/deti hoon. Agar aap chahein toh baad mein official information check kar sakte hain. Aapke time ke liye thank you. Goodbye.",
      options: [["end", "End call", "Call end karein"]]
    },
    no: {
      en: "No problem. I understand, and I won’t take more of your time. Thank you for speaking with me. Have a good day. Goodbye.",
      hi: "Koi baat nahi, main samajh gaya/gayi. Main aapka aur time nahi loonga/loongi. Baat karne ke liye thank you. Aapka din achha rahe. Goodbye.",
      options: [["end", "End call", "Call end karein"]]
    },
    login: {
      en: "For safety, please open the official Z7 app yourself or type the verified website address directly. Check that the website is genuine before logging in. Never tell me or anyone else your password or OTP.",
      hi: "Safety ke liye official Z7 app khud open karein ya verified website address directly type karein. Login se pehle website genuine hai ya nahi check karein. Apna password ya OTP mujhe ya kisi aur ko na batayein.",
      options: [["purpose", "Back to support options", "Support options par wapas"]]
    },
    account: {
      en: "I’m sorry you’re having this problem. Please contact Z7 customer support using contact details shown inside the official app or website. Keep any reference number ready, but don’t share your password or OTP.",
      hi: "Aapko problem ho rahi hai, iske liye sorry. Official app ya website mein diye gaye contact details se Z7 customer support ko contact karein. Reference number ho toh paas rakhein, lekin password ya OTP share na karein.",
      options: [["purpose", "Back to support options", "Support options par wapas"]]
    },
    password: {
      en: "Please choose “Forgot Password” on the official login page and follow the instructions. Never share your OTP, password, or verification code with a caller.",
      hi: "Official login page par “Forgot Password” select karein aur instructions follow karein. Apna OTP, password ya verification code kisi caller ko kabhi na batayein.",
      options: [["purpose", "Back to support options", "Support options par wapas"]]
    },
    link: {
      en: "Please check the sender and website domain before opening a link. If anything looks unusual, don’t open it. You can visit the official app or website directly instead.",
      hi: "Link open karne se pehle sender aur website domain check karein. Agar kuch suspicious lage toh link open na karein. Iske bajay official app ya website directly open karein.",
      options: [["purpose", "Back to support options", "Support options par wapas"]]
    },
    fraud: {
      en: "You’re right to be careful. Don’t share your password, OTP, UPI PIN, or bank details. End the call if you feel unsure, then verify the matter through the official app, website, or verified support contact.",
      hi: "Aapka careful rehna sahi hai. Password, OTP, UPI PIN ya bank details share na karein. Agar doubt ho toh call end kar dein aur official app, website ya verified support contact se confirm karein.",
      options: [["purpose", "Back to support options", "Support options par wapas"]]
    },
    already: {
      en: "Understood. Please sign in only through the official app or website and check whether any current information applies to your account. You don’t need to share your account details with me.",
      hi: "Samajh gaya/gayi. Sirf official app ya website se login karein aur check karein ki current information aapke account par apply hoti hai ya nahi. Account details mere saath share karne ki zaroorat nahi hai.",
      options: [["purpose", "Back to support options", "Support options par wapas"]]
    },
    optout: {
      en: "I understand your request. I’ll follow the approved process to record your request to stop marketing calls. Thank you for letting me know. Goodbye.",
      hi: "Main aapki request samajh gaya/gayi. Marketing calls band karne ki request record karne ke liye approved process follow karunga/karungi. Batane ke liye thank you. Goodbye.",
      options: [["end", "End call", "Call end karein"]]
    },
    closing: {
      en: "Thank you for your time. Please use only verified information from the official app or website. If you need account help, contact official customer support. Have a good day. Goodbye.",
      hi: "Aapke time ke liye thank you. Sirf official app ya website ki verified information use karein. Account help ke liye official customer support se contact karein. Aapka din achha rahe. Goodbye.",
      options: [["end", "End call", "Call end karein"]]
    },
    end: {
      en: "Call flow completed. Respect the customer’s decision and any request not to be contacted again.",
      hi: "Call flow complete ho gaya. Customer ke decision aur dobara contact na karne ki request ka respect karein.",
      options: [["start", "Start a new call", "Nayi call shuru karein"]]
    }
  };

  try {
    lang = localStorage.getItem(LANG_KEY) === "hi" ? "hi" : "en";
  } catch {}

  const host = document.createElement("section");
  host.className = "call-flow";
  host.innerHTML = `
    <div class="call-flow-head">
      <div><p class="eyebrow">INTERACTIVE CALL SCRIPT</p><h2>Z7 Calling Flow</h2></div>
      <span class="flow-version">v2.6</span>
    </div>
    <p class="flow-step" id="flow-step">Step 1</p>
    <div class="flow-script" id="flow-script" aria-live="polite"></div>
    <p class="flow-prompt" id="flow-prompt">Customer response / Customer ka jawab</p>
    <div class="flow-options" id="flow-options"></div>
    <div class="flow-actions">
      <button type="button" id="flow-back" class="secondary">← Back</button>
      <button type="button" id="flow-copy">Copy script</button>
      <button type="button" id="flow-reset" class="secondary">Restart</button>
    </div>
    <p class="flow-status" id="flow-status" role="status"></p>
    <p class="flow-note">Never ask for passwords, OTPs, UPI PINs or bank details.</p>
  `;

  const target = document.querySelector(".result");
  if (!target) return;
  target.insertAdjacentElement("beforebegin", host);

  const $ = selector => host.querySelector(selector);
  const step = $("#flow-step");
  const text = $("#flow-script");
  const options = $("#flow-options");
  const back = $("#flow-back");
  const copy = $("#flow-copy");
  const reset = $("#flow-reset");
  const status = $("#flow-status");

  function render() {
    const node = script[current];
    step.textContent = `${lang === "hi" ? "चरण" : "Step"} ${history.length + 1}`;
    text.textContent = node[lang];
    options.replaceChildren();

    node.options.forEach(([next, en, hi]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "flow-option";
      button.textContent = lang === "hi" ? hi : en;
      button.addEventListener("click", () => {
        if (next === "end") {
          history.push(current);
          current = "end";
        } else if (next === "start") {
          history.length = 0;
          current = "start";
        } else {
          history.push(current);
          current = next;
        }
        status.textContent = "";
        render();
      });
      options.append(button);
    });

    back.disabled = history.length === 0;
  }

  back.addEventListener("click", () => {
    if (!history.length) return;
    current = history.pop();
    status.textContent = "";
    render();
  });

  reset.addEventListener("click", () => {
    current = "start";
    history.length = 0;
    status.textContent = "";
    render();
  });

  copy.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(script[current][lang]);
      } else {
        const area = document.createElement("textarea");
        area.value = script[current][lang];
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.append(area);
        area.select();
        const ok = document.execCommand("copy");
        area.remove();
        if (!ok) throw new Error("Copy unavailable");
      }
      status.textContent = lang === "hi" ? "Script copy ho gaya." : "Script copied.";
    } catch {
      status.textContent = lang === "hi"
        ? "Copy nahi ho saka. Text ko manually select karein."
        : "Copy unavailable. Please select and copy the text manually.";
    }
  });

  const languageToggle = document.querySelector("#language-toggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      lang = lang === "en" ? "hi" : "en";
      render();
    });
  }

  render();
})();
