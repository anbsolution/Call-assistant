(() => {
  const LANG_KEY = "z7-call-flow-language-v28";
  let lang = "en";
  let current = "start";
  const history = [];

  const script = {
    start: {
      en: "Hello, good morning/afternoon. My name is [your name], and I’m calling about Z7 platform information. Is this a convenient time to speak?",
      hi: "नमस्ते, मेरा नाम [आपका नाम] है। मैं Z7 प्लेटफ़ॉर्म की जानकारी के संबंध में कॉल कर रहा/रही हूँ। क्या अभी बात करना सुविधाजनक है?",
      hinglish: "Hello, good morning/afternoon. Mera naam [aapka naam] hai. Main Z7 platform ki information ke liye call kar raha/rahi hoon. Kya abhi baat karna convenient hai?",
      options: [["purpose", "Yes, continue", "हाँ, बात जारी रखें", "Haan, baat jaari rakhein"], ["busy", "I’m busy", "मैं अभी व्यस्त हूँ", "Main abhi busy hoon"], ["no", "Not interested", "मुझे रुचि नहीं है", "Mujhe interest nahi hai"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    purpose: {
      en: "I can help with general platform information and account-support guidance. What would you like help with?",
      hi: "मैं सामान्य प्लेटफ़ॉर्म जानकारी और अकाउंट-सपोर्ट मार्गदर्शन में मदद कर सकता/सकती हूँ। आपको किस विषय में सहायता चाहिए?",
      hinglish: "Main general platform information aur account-support guidance mein help kar sakta/sakti hoon. Aapko kis cheez mein help chahiye?",
      options: [["login", "Login help", "लॉगिन में मदद", "Login mein help"], ["account", "Account problem", "अकाउंट की समस्या", "Account ki problem"], ["password", "Forgot password", "पासवर्ड भूल गए", "Password bhool gaye"], ["link", "Suspicious SMS/link", "संदिग्ध SMS/लिंक", "Suspicious SMS/link"], ["fraud", "Possible fraud", "संभावित धोखाधड़ी", "Fraud ka doubt"], ["optout", "Stop marketing calls", "मार्केटिंग कॉल बंद करें", "Marketing calls band karein"], ["busy", "Customer needs more time", "ग्राहक को और समय चाहिए", "Customer ko aur time chahiye"], ["no", "Not interested", "रुचि नहीं है", "Interest nahi hai"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    busy: {
      en: "Of course, I understand. I won’t rush you. Would a callback at another time be better, or would you prefer to continue briefly now?",
      hi: "जी, मैं समझता/समझती हूँ। मैं जल्दबाज़ी नहीं करूँगा/करूँगी। क्या किसी और समय दोबारा कॉल करना बेहतर होगा, या आप अभी थोड़ी बात जारी रखना चाहेंगे?",
      hinglish: "Bilkul, main samajh sakta/sakti hoon. Main jaldi nahi karunga/karungi. Kya kisi aur time callback karna better rahega, ya aap abhi thodi baat continue karna chahenge?",
      options: [["callback", "Choose callback preference", "दोबारा कॉल का विकल्प चुनें", "Callback ka option chunein"], ["purpose", "Continue now", "अभी बात जारी रखें", "Abhi baat continue karein"], ["no", "Not interested", "रुचि नहीं है", "Interest nahi hai"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    callback: {
      en: "What day or time would suit you for a callback? I’ll note your preference according to the approved process. Would you like to discuss anything else now?",
      hi: "दोबारा कॉल के लिए कौन-सा दिन या समय आपके लिए ठीक रहेगा? मैं स्वीकृत प्रक्रिया के अनुसार आपकी पसंद नोट करूँगा/करूँगी। क्या आप अभी किसी और विषय पर बात करना चाहेंगे?",
      hinglish: "Callback ke liye kaunsa day ya time aapko suit karega? Main approved process ke mutabik aapki preference note karunga/karungi. Kya aap abhi kisi aur topic par baat karna chahenge?",
      options: [["purpose", "Ask a support question", "सपोर्ट से जुड़ा सवाल पूछें", "Support ka question poochhein"], ["no", "Not interested", "रुचि नहीं है", "Interest nahi hai"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    no: {
      en: "I understand. Thank you for telling me. I won’t continue with this topic or try to persuade you. Would you like help with a separate support question, or would you prefer to end the call yourself?",
      hi: "मैं समझ गया/गई। बताने के लिए धन्यवाद। मैं इस विषय को आगे नहीं बढ़ाऊँगा/बढ़ाऊँगी और आपको मनाने की कोशिश नहीं करूँगा/करूँगी। क्या आपको किसी अलग सपोर्ट सवाल में मदद चाहिए, या आप स्वयं कॉल समाप्त करना चाहेंगे?",
      hinglish: "Main samajh gaya/gayi. Batane ke liye thank you. Main is topic ko aage nahi badhaunga/badhaungi aur aapko persuade nahi karunga/karungi. Kya kisi alag support question mein help chahiye, ya aap khud call end karna chahenge?",
      options: [["purpose", "I have a support question", "मुझे सपोर्ट का सवाल पूछना है", "Mujhe support ka question poochhna hai"], ["no_followup", "No, still not interested", "नहीं, रुचि नहीं है", "Nahi, interest nahi hai"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    no_followup: {
      en: "Understood. I won’t discuss the offer or topic further. I can remain available for a support question if you have one. You can end the call whenever you choose.",
      hi: "ठीक है। मैं उस प्रस्ताव या विषय पर आगे बात नहीं करूँगा/करूँगी। यदि आपका कोई सपोर्ट सवाल हो तो मैं मदद के लिए उपलब्ध हूँ। आप जब चाहें स्वयं कॉल समाप्त कर सकते हैं।",
      hinglish: "Theek hai. Main offer ya is topic par aur baat nahi karunga/karungi. Agar koi support question ho toh main help ke liye available hoon. Aap jab chahein khud call end kar sakte hain.",
      options: [["purpose", "Ask a separate support question", "अलग सपोर्ट सवाल पूछें", "Alag support question poochhein"], ["no_followup", "Repeat: not interested", "दोहराएँ: रुचि नहीं है", "Repeat: interest nahi hai"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    login: {
      en: "Please open the official Z7 app yourself or type the verified website address directly. Never share your password or OTP with a caller. What error message do you see?",
      hi: "कृपया आधिकारिक Z7 ऐप स्वयं खोलें या सत्यापित वेबसाइट पता सीधे टाइप करें। अपना पासवर्ड या OTP किसी कॉलर से साझा न करें। स्क्रीन पर कौन-सा error दिख रहा है?",
      hinglish: "Official Z7 app khud open karein ya verified website address directly type karein. Apna password ya OTP kisi caller ko na batayein. Screen par kaunsa error dikh raha hai?",
      options: [["purpose", "Back to support options", "सपोर्ट विकल्पों पर लौटें", "Support options par wapas"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    account: {
      en: "I’m sorry you’re having this problem. Please contact support using contact details shown in the official app or website. Do not share passwords or OTPs. Is there another support question?",
      hi: "आपको यह समस्या हो रही है, इसका खेद है। आधिकारिक ऐप या वेबसाइट में दिए गए संपर्क विवरण से सपोर्ट से संपर्क करें। पासवर्ड या OTP साझा न करें। क्या कोई और सपोर्ट सवाल है?",
      hinglish: "Aapko problem ho rahi hai, uske liye sorry. Official app ya website par diye contact details se support ko contact karein. Password ya OTP share na karein. Kya koi aur support question hai?",
      options: [["purpose", "Back to support options", "सपोर्ट विकल्पों पर लौटें", "Support options par wapas"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    password: {
      en: "Choose “Forgot Password” on the official login page and follow the instructions. Never share a verification code with a caller. What else can I clarify?",
      hi: "आधिकारिक लॉगिन पेज पर “Forgot Password” चुनें और निर्देशों का पालन करें। सत्यापन कोड किसी कॉलर से साझा न करें। मैं और क्या स्पष्ट कर सकता/सकती हूँ?",
      hinglish: "Official login page par “Forgot Password” choose karein aur instructions follow karein. Verification code kisi caller ko na batayein. Main aur kya clarify kar sakta/sakti hoon?",
      options: [["purpose", "Back to support options", "सपोर्ट विकल्पों पर लौटें", "Support options par wapas"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    link: {
      en: "Do not open a suspicious link. Check the sender and domain, and use the official app or website directly. Do you need help with anything else?",
      hi: "संदिग्ध लिंक न खोलें। भेजने वाले और डोमेन की जाँच करें तथा आधिकारिक ऐप या वेबसाइट सीधे खोलें। क्या किसी और चीज़ में मदद चाहिए?",
      hinglish: "Suspicious link open na karein. Sender aur domain check karein, aur official app ya website directly open karein. Kya kisi aur cheez mein help chahiye?",
      options: [["purpose", "Back to support options", "सपोर्ट विकल्पों पर लौटें", "Support options par wapas"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    fraud: {
      en: "Do not share your password, OTP, UPI PIN, or bank details. Verify the issue through the official app, website, or verified support contact. What would you like to do next?",
      hi: "अपना पासवर्ड, OTP, UPI PIN या बैंक विवरण साझा न करें। आधिकारिक ऐप, वेबसाइट या सत्यापित सपोर्ट संपर्क से पुष्टि करें। आप आगे क्या करना चाहेंगे?",
      hinglish: "Password, OTP, UPI PIN ya bank details share na karein. Official app, website ya verified support contact se confirm karein. Aap next kya karna chahenge?",
      options: [["purpose", "Back to support options", "सपोर्ट विकल्पों पर लौटें", "Support options par wapas"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    optout: {
      en: "I understand your request. I’ll record the request to stop marketing calls using the approved process. Is there anything else about your support request you’d like me to note?",
      hi: "मैं आपका अनुरोध समझता/समझती हूँ। स्वीकृत प्रक्रिया के अनुसार मार्केटिंग कॉल बंद करने का अनुरोध दर्ज करूँगा/करूँगी। क्या आपके सपोर्ट अनुरोध के बारे में और कुछ नोट करना है?",
      hinglish: "Main aapki request samajh gaya/gayi. Approved process ke through marketing calls band karne ki request note karunga/karungi. Kya support request ke baare mein aur kuch note karna hai?",
      options: [["purpose", "Another support question", "एक और सपोर्ट सवाल", "Ek aur support question"], ["end", "Customer ended the call", "ग्राहक ने कॉल समाप्त की", "Customer ne call end ki"]]
    },
    end: {
      en: "The customer selected that the call has ended. Respect their choice and any request not to be contacted again.",
      hi: "ग्राहक ने कॉल समाप्त करने का विकल्प चुना है। उनके निर्णय और दोबारा संपर्क न करने के अनुरोध का सम्मान करें।",
      hinglish: "Customer ne call end karne ka option select kiya hai. Unke decision aur dobara contact na karne ki request ka respect karein.",
      options: [["start", "Start a new call", "नई कॉल शुरू करें", "Nayi call shuru karein"]]
    }
  };

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (["en", "hi", "hinglish"].includes(saved)) lang = saved;
  } catch {}

  const host = document.createElement("section");
  host.className = "call-flow";
  host.innerHTML = `
    <div class="call-flow-head">
      <div><p class="eyebrow">INTERACTIVE CALL SCRIPT</p><h2>Z7 Calling Flow</h2></div>
      <label class="flow-language-label" for="flow-language">Language
        <select id="flow-language" aria-label="Call flow language">
          <option value="en">English</option><option value="hi">हिन्दी</option><option value="hinglish">Hinglish</option>
        </select>
      </label>
      <span class="flow-version">v3.2</span>
    </div>
    <p class="flow-step" id="flow-step">Step 1</p>
    <div class="flow-script" id="flow-script" aria-live="polite"></div>
    <p class="flow-prompt" id="flow-prompt">Select the customer’s response</p>
    <div class="flow-options" id="flow-options"></div>
    <div class="flow-actions">
      <button type="button" id="flow-back" class="secondary">← Back</button>
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
  const reset = $("#flow-reset");
  const language = $("#flow-language");
  const status = $("#flow-status");

  function render() {
    const node = script[current];
    step.textContent = `${lang === "hi" ? "चरण" : lang === "hinglish" ? "Step" : "Step"} ${history.length + 1}`;
    text.textContent = node[lang] || node.en;
    options.replaceChildren();
    node.options.forEach(([next, en, hi, hinglish]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "flow-option";
      button.textContent = lang === "hi" ? hi : lang === "hinglish" ? hinglish : en;
      button.addEventListener("click", () => {
        history.push(current);
        current = next;
        status.textContent = "";
        render();
      });
      options.append(button);
    });
    back.disabled = history.length === 0;
    language.value = lang;
  }

  language.addEventListener("change", () => {
    lang = language.value;
    try { localStorage.setItem(LANG_KEY, lang); } catch {}
    render();
  });
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
  render();
})();
