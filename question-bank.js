/* Z7 Integrated Call Workflow Q&A v3.7 — session progress and summary, trilingual */
(() => {
  if (document.querySelector(".qa-bank")) return;
  const items = [
  {
    "id": "opening-1",
    "category": "Opening & identity",
    "q": {
      "en": "How should I introduce myself?",
      "hi": "मैं अपना परिचय कैसे दूँ?",
      "hinglish": "Main apna introduction kaise doon?"
    },
    "a": {
      "en": "Hello, my name is [name]. I’m calling about a general support matter for Z7. Is this a convenient time to speak?",
      "hi": "नमस्ते, मेरा नाम [नाम] है। मैं Z7 से जुड़ी सामान्य सहायता के विषय में कॉल कर रहा/रही हूँ। क्या अभी बात करना सुविधाजनक है?",
      "hinglish": "Hello, mera naam [naam] hai. Main Z7 se judi general support ke liye call kar raha/rahi hoon. Kya abhi baat karna convenient hai?"
    }
  },
  {
    "id": "opening-2",
    "category": "Opening & identity",
    "q": {
      "en": "Why are you calling me?",
      "hi": "आप मुझे कॉल क्यों कर रहे हैं?",
      "hinglish": "Aap mujhe call kyun kar rahe hain?"
    },
    "a": {
      "en": "I’m calling to understand whether you need general platform or account-support guidance. I can explain the purpose, and you can choose whether to continue.",
      "hi": "मैं यह जानने के लिए कॉल कर रहा/रही हूँ कि आपको प्लेटफ़ॉर्म या अकाउंट-सपोर्ट की सामान्य जानकारी चाहिए या नहीं। मैं उद्देश्य स्पष्ट कर सकता/सकती हूँ; आगे बात करना आपकी पसंद है।",
      "hinglish": "Main yeh jaanne ke liye call kar raha/rahi hoon ki aapko platform ya account-support guidance chahiye ya nahi. Aage baat karna aapki choice hai."
    }
  },
  {
    "id": "opening-3",
    "category": "Opening & identity",
    "q": {
      "en": "How can I verify this call is genuine?",
      "hi": "मैं कैसे पुष्टि करूँ कि यह कॉल असली है?",
      "hinglish": "Main kaise verify karun ki yeh call genuine hai?"
    },
    "a": {
      "en": "That’s a sensible question. Don’t share passwords, OTPs, PINs, or bank details. End the call if you prefer, then contact support using contact details you independently find in the official app or website.",
      "hi": "यह सही सवाल है। पासवर्ड, OTP, PIN या बैंक विवरण साझा न करें। चाहें तो कॉल समाप्त करें और आधिकारिक ऐप या वेबसाइट से स्वयं सत्यापित संपर्क विवरण लेकर सपोर्ट से संपर्क करें।",
      "hinglish": "Yeh bilkul sahi sawaal hai. Password, OTP, PIN ya bank details share na karein. Chahein to call end karke official app ya website par khud verified contact details se support ko contact karein."
    }
  },
  {
    "id": "permission-4",
    "category": "Permission & timing",
    "q": {
      "en": "I’m busy right now. What should I say?",
      "hi": "मैं अभी व्यस्त हूँ। क्या कहूँ?",
      "hinglish": "Main abhi busy hoon. Kya bolun?"
    },
    "a": {
      "en": "I understand. I won’t keep you. Would you prefer to suggest a suitable callback time, or should I leave it here?",
      "hi": "मैं समझता/समझती हूँ। मैं आपका समय नहीं लूँगा/लूँगी। क्या आप सुविधाजनक समय बताना चाहेंगे, या हम यहीं रोक दें?",
      "hinglish": "Samajh gaya/gayi. Main aapka time nahi lunga/lungi. Aap callback ka suitable time batana chahenge, ya yahin rok dein?"
    }
  },
  {
    "id": "permission-5",
    "category": "Permission & timing",
    "q": {
      "en": "Can you call me later?",
      "hi": "क्या आप मुझे बाद में कॉल कर सकते हैं?",
      "hinglish": "Kya aap mujhe baad mein call kar sakte hain?"
    },
    "a": {
      "en": "Certainly. What day and time would suit you? I’ll record your preference according to the approved process; I can’t promise a callback until it is confirmed.",
      "hi": "ज़रूर। कौन-सा दिन और समय आपके लिए ठीक रहेगा? मैं स्वीकृत प्रक्रिया के अनुसार आपकी पसंद दर्ज करूँगा/करूँगी; पुष्टि होने तक कॉल का वादा नहीं कर सकता/सकती।",
      "hinglish": "Zaroor. Kaunsa din aur time aapko suit karega? Main approved process ke mutabik preference note karunga/karungi; confirmation ke bina callback ka promise nahi kar sakta/sakti."
    }
  },
  {
    "id": "permission-6",
    "category": "Permission & timing",
    "q": {
      "en": "I don’t have time to discuss this.",
      "hi": "मेरे पास इस बारे में बात करने का समय नहीं है।",
      "hinglish": "Mere paas is baare mein baat karne ka time nahi hai."
    },
    "a": {
      "en": "Understood. I’ll keep this brief. We can stop now; you may contact official support whenever it suits you.",
      "hi": "समझ गया/गई। मैं बात संक्षिप्त रखूँगा/रखूँगी। हम अभी रोक सकते हैं; सुविधा होने पर आप आधिकारिक सपोर्ट से संपर्क कर सकते हैं।",
      "hinglish": "Theek hai. Main baat short rakhunga/rakhungi. Hum abhi rok sakte hain; jab convenient ho, aap official support se contact kar sakte hain."
    }
  },
  {
    "id": "refusal-7",
    "category": "Not interested & boundaries",
    "q": {
      "en": "I’m not interested. What should I say?",
      "hi": "मुझे रुचि नहीं है। क्या कहूँ?",
      "hinglish": "Mujhe interest nahi hai. Kya bolun?"
    },
    "a": {
      "en": "I understand, and I won’t try to persuade you. I won’t continue this topic. If you have a separate support question, I can help with that; otherwise, you may end the call.",
      "hi": "मैं समझता/समझती हूँ और आपको मनाने की कोशिश नहीं करूँगा/करूँगी। मैं इस विषय को आगे नहीं बढ़ाऊँगा/बढ़ाऊँगी। अलग सपोर्ट सवाल हो तो मदद कर सकता/सकती हूँ; अन्यथा आप कॉल समाप्त कर सकते हैं।",
      "hinglish": "Samajh gaya/gayi, main aapko persuade nahi karunga/karungi aur is topic ko aage nahi badhaunga/badhaungi. Alag support question ho to help kar sakta/sakti hoon; warna aap call end kar sakte hain."
    }
  },
  {
    "id": "refusal-8",
    "category": "Not interested & boundaries",
    "q": {
      "en": "Please stop calling me.",
      "hi": "कृपया मुझे कॉल करना बंद करें।",
      "hinglish": "Please mujhe call karna band karein."
    },
    "a": {
      "en": "I understand your preference. I’ll record the request through the approved contact-preference process. I won’t make an unverified promise about when it will take effect.",
      "hi": "मैं आपकी पसंद समझता/समझती हूँ। स्वीकृत संपर्क-पसंद प्रक्रिया के अनुसार अनुरोध दर्ज करूँगा/करूँगी। लागू होने के समय के बारे में बिना पुष्टि वादा नहीं करूँगा/करूँगी।",
      "hinglish": "Aapki preference samajh gaya/gayi. Approved contact-preference process se request note karunga/karungi. Kab se apply hogi, iski confirmation ke bina promise nahi karunga/karungi."
    }
  },
  {
    "id": "login-9",
    "category": "Login & account",
    "q": {
      "en": "I can’t log in to my account.",
      "hi": "मैं अपने खाते में लॉगिन नहीं कर पा रहा/रही हूँ।",
      "hinglish": "Main account mein login nahi kar pa raha/rahi hoon."
    },
    "a": {
      "en": "Please open the official app or type the verified website address yourself. Check your connection and the exact error message. Never tell a caller your password or OTP.",
      "hi": "कृपया आधिकारिक ऐप खोलें या सत्यापित वेबसाइट पता स्वयं टाइप करें। इंटरनेट कनेक्शन और दिखाई देने वाला सटीक error जाँचें। पासवर्ड या OTP किसी कॉलर को न बताएँ।",
      "hinglish": "Official app khud open karein ya verified website address type karein. Internet connection aur exact error check karein. Password ya OTP caller ko na batayein."
    }
  },
  {
    "id": "login-10",
    "category": "Login & account",
    "q": {
      "en": "My account seems locked.",
      "hi": "मेरा अकाउंट लॉक लग रहा है।",
      "hinglish": "Mera account locked lag raha hai."
    },
    "a": {
      "en": "Use the official account-recovery instructions shown in the app or website. If the message says the account is locked, contact verified support. Don’t create repeated accounts to bypass a security check.",
      "hi": "ऐप या वेबसाइट में दिए आधिकारिक account-recovery निर्देश अपनाएँ। लॉक होने का संदेश हो तो सत्यापित सपोर्ट से संपर्क करें। सुरक्षा जाँच से बचने के लिए बार-बार नए खाते न बनाएँ।",
      "hinglish": "App ya website ke official account-recovery instructions follow karein. Account locked message aaye to verified support se contact karein. Security check bypass karne ke liye baar-baar naye accounts na banayein."
    }
  },
  {
    "id": "login-11",
    "category": "Login & account",
    "q": {
      "en": "I forgot my password.",
      "hi": "मैं पासवर्ड भूल गया/गई हूँ।",
      "hinglish": "Main password bhool gaya/gayi hoon."
    },
    "a": {
      "en": "Select “Forgot Password” on the official login page and follow the instructions. Check your spam folder if a reset email is expected. Never share the reset code with anyone.",
      "hi": "आधिकारिक लॉगिन पेज पर “Forgot Password” चुनें और निर्देशों का पालन करें। रीसेट ईमेल अपेक्षित हो तो Spam फ़ोल्डर भी जाँचें। रीसेट कोड किसी से साझा न करें।",
      "hinglish": "Official login page par “Forgot Password” select karein aur instructions follow karein. Reset email ka wait ho to Spam folder bhi check karein. Reset code kisi ko na dein."
    }
  },
  {
    "id": "login-12",
    "category": "Login & account",
    "q": {
      "en": "I no longer have access to my registered email.",
      "hi": "मेरे पास रजिस्टर्ड ईमेल का एक्सेस नहीं है।",
      "hinglish": "Mere paas registered email ka access nahi hai."
    },
    "a": {
      "en": "Use the official account-recovery or identity-verification route. The support team may need to verify ownership before changing account details. Don’t send identity documents through an unverified chat or caller.",
      "hi": "आधिकारिक account-recovery या identity-verification प्रक्रिया अपनाएँ। विवरण बदलने से पहले सपोर्ट टीम को स्वामित्व सत्यापित करना पड़ सकता है। असत्यापित चैट या कॉलर को पहचान दस्तावेज़ न भेजें।",
      "hinglish": "Official account-recovery ya identity-verification route use karein. Account details change karne se pehle ownership verify ho sakti hai. Unverified chat/caller ko ID documents na bhejein."
    }
  },
  {
    "id": "login-13",
    "category": "Login & account",
    "q": {
      "en": "The app or website is not loading.",
      "hi": "ऐप या वेबसाइट खुल नहीं रही है।",
      "hinglish": "App ya website load nahi ho rahi hai."
    },
    "a": {
      "en": "Check whether your internet connection works and try reopening the official app or website. If the issue continues, note the time, device type, and error message for verified support—without sharing private credentials.",
      "hi": "इंटरनेट कनेक्शन जाँचें और आधिकारिक ऐप या वेबसाइट दोबारा खोलें। समस्या जारी रहे तो समय, डिवाइस का प्रकार और error message नोट करके सत्यापित सपोर्ट को बताएँ—निजी लॉगिन विवरण साझा न करें।",
      "hinglish": "Internet check karein aur official app/website dobara kholein. Issue rahe to time, device type aur error message note karke verified support ko batayein; private credentials share na karein."
    }
  },
  {
    "id": "password-14",
    "category": "Password & verification",
    "q": {
      "en": "Someone asked me for my OTP.",
      "hi": "किसी ने मुझसे OTP माँगा है।",
      "hinglish": "Kisi ne mujhse OTP maanga hai."
    },
    "a": {
      "en": "Do not share the OTP with anyone, including someone claiming to be support. Stop the interaction and verify through the official app or website. If you already shared it, secure the account and contact verified support promptly.",
      "hi": "किसी को भी OTP न बताएँ—चाहे वह खुद को सपोर्ट बताए। बातचीत रोकें और आधिकारिक ऐप या वेबसाइट से पुष्टि करें। यदि OTP साझा कर दिया है, तो अकाउंट सुरक्षित करें और तुरंत सत्यापित सपोर्ट से संपर्क करें।",
      "hinglish": "Kisi ko OTP na batayein, chahe woh support hone ka claim kare. Interaction rok kar official app/website se verify karein. OTP share ho gaya ho to account secure karein aur verified support se jaldi contact karein."
    }
  },
  {
    "id": "password-15",
    "category": "Password & verification",
    "q": {
      "en": "Can you reset my password for me?",
      "hi": "क्या आप मेरा पासवर्ड रीसेट कर सकते हैं?",
      "hinglish": "Kya aap mera password reset kar sakte hain?"
    },
    "a": {
      "en": "I can guide you to the official reset process, but I should not ask for or handle your password or verification code. Please use “Forgot Password” on the official login page.",
      "hi": "मैं आपको आधिकारिक रीसेट प्रक्रिया बता सकता/सकती हूँ, लेकिन आपका पासवर्ड या सत्यापन कोड नहीं माँगना या संभालना चाहिए। आधिकारिक लॉगिन पेज पर “Forgot Password” इस्तेमाल करें।",
      "hinglish": "Main official reset process guide kar sakta/sakti hoon, lekin password ya verification code nahi maangna chahiye. Official login page par “Forgot Password” use karein."
    }
  },
  {
    "id": "security-16",
    "category": "Suspicious messages & links",
    "q": {
      "en": "I received a suspicious SMS or link.",
      "hi": "मुझे संदिग्ध SMS या लिंक मिला है।",
      "hinglish": "Mujhe suspicious SMS ya link mila hai."
    },
    "a": {
      "en": "Don’t tap the link or download attachments. Check the sender independently and report it using the official channel. If you entered credentials, change them through the official site and contact verified support.",
      "hi": "लिंक पर टैप न करें और अटैचमेंट डाउनलोड न करें। भेजने वाले की स्वतंत्र रूप से जाँच करें और आधिकारिक चैनल से रिपोर्ट करें। यदि लॉगिन विवरण दर्ज कर दिए हैं, तो आधिकारिक साइट से बदलें और सत्यापित सपोर्ट से संपर्क करें।",
      "hinglish": "Link tap na karein aur attachment download na karein. Sender ko independently check karein aur official channel par report karein. Credentials enter kiye hain to official site se change karke verified support ko contact karein."
    }
  },
  {
    "id": "security-17",
    "category": "Suspicious messages & links",
    "q": {
      "en": "A caller says they are from Z7 and needs my PIN.",
      "hi": "कॉलर कहता है कि वह Z7 से है और उसे मेरा PIN चाहिए।",
      "hinglish": "Caller bolta hai woh Z7 se hai aur use mera PIN chahiye."
    },
    "a": {
      "en": "Do not disclose your PIN, password, OTP, UPI PIN, or bank details. End the call if you feel unsure and contact support through independently verified official details.",
      "hi": "अपना PIN, पासवर्ड, OTP, UPI PIN या बैंक विवरण न बताएँ। संदेह हो तो कॉल समाप्त करें और स्वतंत्र रूप से सत्यापित आधिकारिक संपर्क से सपोर्ट लें।",
      "hinglish": "PIN, password, OTP, UPI PIN ya bank details share na karein. Doubt ho to call end karke independently verified official contact se support lein."
    }
  },
  {
    "id": "fraud-18",
    "category": "Fraud & account safety",
    "q": {
      "en": "I think my account was accessed by someone else.",
      "hi": "मुझे लगता है किसी और ने मेरा अकाउंट एक्सेस किया।",
      "hinglish": "Mujhe lagta hai kisi aur ne account access kiya."
    },
    "a": {
      "en": "Use the official security or recovery process immediately, change credentials from the official site if you can, and review account activity. Never send passwords or codes to the person contacting you.",
      "hi": "आधिकारिक security या recovery प्रक्रिया तुरंत अपनाएँ। संभव हो तो आधिकारिक साइट से पासवर्ड बदलें और अकाउंट गतिविधि जाँचें। संपर्क करने वाले व्यक्ति को पासवर्ड या कोड न भेजें।",
      "hinglish": "Official security/recovery process turant use karein. Ho sake to official site se password change karein aur account activity check karein. Caller ko password ya code na bhejein."
    }
  },
  {
    "id": "fraud-19",
    "category": "Fraud & account safety",
    "q": {
      "en": "I see a transaction I don’t recognize.",
      "hi": "मुझे ऐसा ट्रांज़ैक्शन दिख रहा है जिसे मैं नहीं पहचानता/पहचानती।",
      "hinglish": "Mujhe unknown transaction dikh raha hai."
    },
    "a": {
      "en": "Contact your bank or payment provider immediately using the number in its official app or on your card, and follow its dispute process. Also secure the relevant account. Do not share card details, PINs, or OTPs on this call.",
      "hi": "अपने बैंक या payment provider से उसके आधिकारिक ऐप या कार्ड पर दिए नंबर से तुरंत संपर्क करें और dispute प्रक्रिया अपनाएँ। संबंधित अकाउंट भी सुरक्षित करें। इस कॉल पर कार्ड विवरण, PIN या OTP साझा न करें।",
      "hinglish": "Bank ya payment provider ko official app/card par diye number se turant contact karein aur dispute process follow karein. Account secure karein. Is call par card details, PIN ya OTP share na karein."
    }
  },
  {
    "id": "privacy-20",
    "category": "Privacy & personal data",
    "q": {
      "en": "Why do you need my personal information?",
      "hi": "आपको मेरी निजी जानकारी क्यों चाहिए?",
      "hinglish": "Aapko meri personal information kyun chahiye?"
    },
    "a": {
      "en": "Only information necessary for the support request should be collected, and the purpose should be explained. Do not share sensitive information unless you have verified the channel and understand why it is required.",
      "hi": "सिर्फ सपोर्ट अनुरोध के लिए आवश्यक जानकारी ही ली जानी चाहिए और उसका उद्देश्य स्पष्ट होना चाहिए। चैनल सत्यापित किए बिना और आवश्यकता समझे बिना संवेदनशील जानकारी साझा न करें।",
      "hinglish": "Sirf support request ke liye zaroori information hi leni chahiye aur purpose explain hona chahiye. Channel verify kiye bina sensitive information share na karein."
    }
  },
  {
    "id": "privacy-21",
    "category": "Privacy & personal data",
    "q": {
      "en": "I want my personal data deleted.",
      "hi": "मैं अपना निजी डेटा हटवाना चाहता/चाहती हूँ।",
      "hinglish": "Main apna personal data delete karwana chahta/chahti hoon."
    },
    "a": {
      "en": "I can direct you to the official privacy-request channel. The team may need to verify your request and explain any legal or operational limits before confirming the outcome.",
      "hi": "मैं आपको आधिकारिक privacy-request चैनल बता सकता/सकती हूँ। परिणाम की पुष्टि से पहले टीम को अनुरोध सत्यापित करना और कानूनी या संचालन संबंधी सीमाएँ समझानी पड़ सकती हैं।",
      "hinglish": "Main aapko official privacy-request channel bata sakta/sakti hoon. Outcome confirm karne se pehle team request verify karegi aur applicable limits explain kar sakti hai."
    }
  },
  {
    "id": "privacy-22",
    "category": "Privacy & personal data",
    "q": {
      "en": "Can you tell me what data you hold about me?",
      "hi": "क्या आप बता सकते हैं कि मेरे बारे में कौन-सा डेटा रखा है?",
      "hinglish": "Kya aap bata sakte hain mere baare mein kaunsa data hai?"
    },
    "a": {
      "en": "Please submit this through the official privacy-request process. The team can verify your identity and explain the information available under the applicable policy and law.",
      "hi": "कृपया आधिकारिक privacy-request प्रक्रिया से अनुरोध दें। टीम आपकी पहचान सत्यापित करके लागू नीति और कानून के अनुसार उपलब्ध जानकारी समझा सकती है।",
      "hinglish": "Official privacy-request process se request submit karein. Team identity verify karke applicable policy aur law ke mutabik available information explain kar sakti hai."
    }
  },
  {
    "id": "complaint-23",
    "category": "Complaints & escalation",
    "q": {
      "en": "I want to make a complaint.",
      "hi": "मैं शिकायत दर्ज करना चाहता/चाहती हूँ।",
      "hinglish": "Main complaint karna chahta/chahti hoon."
    },
    "a": {
      "en": "I’m sorry this has been frustrating. Please describe the issue briefly, including the approximate date and any reference number you have. Don’t include passwords, OTPs, or full payment details. I’ll guide you to the approved complaint channel.",
      "hi": "आपको परेशानी हुई, इसका खेद है। कृपया समस्या, अनुमानित तारीख और उपलब्ध reference number संक्षेप में बताएँ। पासवर्ड, OTP या पूरा भुगतान विवरण न दें। मैं आपको स्वीकृत शिकायत चैनल तक पहुँचने में मदद करूँगा/करूँगी।",
      "hinglish": "Aapko pareshani hui, uske liye sorry. Issue, approximate date aur available reference number batayein. Password, OTP ya full payment details na dein. Main approved complaint channel guide karunga/karungi."
    }
  },
  {
    "id": "complaint-24",
    "category": "Complaints & escalation",
    "q": {
      "en": "I want to speak to a supervisor.",
      "hi": "मैं सुपरवाइज़र से बात करना चाहता/चाहती हूँ।",
      "hinglish": "Main supervisor se baat karna chahta/chahti hoon."
    },
    "a": {
      "en": "I understand. I’ll explain the approved escalation route or record your request for the appropriate team. I won’t promise a transfer or response time unless it is confirmed.",
      "hi": "समझ गया/गई। मैं स्वीकृत escalation प्रक्रिया बताऊँगा/बताऊँगी या उचित टीम के लिए आपका अनुरोध दर्ज करूँगा/करूँगी। पुष्टि के बिना ट्रांसफर या जवाब का समय वादा नहीं करूँगा/करूँगी।",
      "hinglish": "Samajh gaya/gayi. Main approved escalation route bataunga/bataungi ya appropriate team ke liye request note karunga/karungi. Confirmation ke bina transfer ya response time promise nahi karunga/karungi."
    }
  },
  {
    "id": "complaint-25",
    "category": "Complaints & escalation",
    "q": {
      "en": "You have not solved my problem.",
      "hi": "आपने मेरी समस्या हल नहीं की।",
      "hinglish": "Aapne meri problem solve nahi ki."
    },
    "a": {
      "en": "I’m sorry the issue remains unresolved. Let me summarize what is still happening and direct it through the approved next step. I won’t claim it is resolved until that is confirmed.",
      "hi": "समस्या अभी भी बनी हुई है, इसका खेद है। मैं बची हुई समस्या का सार लेकर स्वीकृत अगले कदम तक पहुँचाऊँगा/पहुँचाऊँगी। पुष्टि से पहले इसे हल हुआ नहीं बताऊँगा/बताऊँगी।",
      "hinglish": "Issue abhi bhi hai, sorry. Main remaining problem summarize karke approved next step par bhejunga/bhejungi. Confirm hone se pehle resolved nahi kahunga/kahungi."
    }
  },
  {
    "id": "communication-26",
    "category": "Difficult conversations",
    "q": {
      "en": "The customer is angry. What should I say?",
      "hi": "ग्राहक नाराज़ है। मुझे क्या कहना चाहिए?",
      "hinglish": "Customer gusse mein hai. Main kya bolun?"
    },
    "a": {
      "en": "I can hear this has been frustrating. I’ll listen and try to clarify the next available step. You don’t need to repeat sensitive information such as passwords or codes.",
      "hi": "मैं समझ सकता/सकती हूँ कि यह परेशान करने वाला है। मैं आपकी बात सुनूँगा/सुनूँगी और उपलब्ध अगले कदम को स्पष्ट करूँगा/करूँगी। पासवर्ड या कोड जैसी संवेदनशील जानकारी दोहराने की ज़रूरत नहीं है।",
      "hinglish": "Samajh sakta/sakti hoon ki yeh frustrating hai. Main aapki baat sununga/sunungi aur next available step clear karunga/karungi. Password ya code jaisi sensitive information repeat na karein."
    }
  },
  {
    "id": "communication-27",
    "category": "Difficult conversations",
    "q": {
      "en": "I don’t understand. Can you explain simply?",
      "hi": "मुझे समझ नहीं आया। सरल भाषा में समझाएँ।",
      "hinglish": "Mujhe samajh nahi aaya. Simple mein samjhayen."
    },
    "a": {
      "en": "Of course. I’ll explain one step at a time in plain language. Please tell me which part you’d like me to clarify first.",
      "hi": "बिल्कुल। मैं सरल भाषा में एक-एक कदम समझाऊँगा/समझाऊँगी। पहले बताइए कि किस हिस्से को स्पष्ट करना है।",
      "hinglish": "Bilkul. Main simple language mein ek-ek step samjhaunga/samjhaungi. Pehle batayein kis part ko clear karna hai."
    }
  },
  {
    "id": "communication-28",
    "category": "Difficult conversations",
    "q": {
      "en": "I prefer Hindi or Hinglish.",
      "hi": "मुझे हिंदी या हिंग्लिश में बात करनी है।",
      "hinglish": "Mujhe Hindi ya Hinglish mein baat karni hai."
    },
    "a": {
      "en": "Certainly. We can continue in Hindi or Hinglish. If anything is unclear, please stop me and I’ll rephrase it.",
      "hi": "ज़रूर। हम हिंदी या हिंग्लिश में बात कर सकते हैं। कुछ स्पष्ट न हो तो बताइए, मैं दूसरे शब्दों में समझा दूँगा/दूँगी।",
      "hinglish": "Zaroor. Hum Hindi ya Hinglish mein baat kar sakte hain. Kuch unclear ho to batayein, main dobara simple words mein samjha dunga/dungi."
    }
  },
  {
    "id": "process-29",
    "category": "Process & expectations",
    "q": {
      "en": "When will my issue be fixed?",
      "hi": "मेरी समस्या कब ठीक होगी?",
      "hinglish": "Meri problem kab fix hogi?"
    },
    "a": {
      "en": "I don’t want to give you an unconfirmed timeline. The appropriate support team can provide an update after reviewing the case through the official process.",
      "hi": "मैं बिना पुष्टि के समयसीमा नहीं देना चाहता/चाहती। संबंधित सपोर्ट टीम आधिकारिक प्रक्रिया से केस देखने के बाद अपडेट दे सकती है।",
      "hinglish": "Main bina confirmation ke timeline nahi dena chahta/chahti. Relevant support team official process se case review karke update de sakti hai."
    }
  },
  {
    "id": "process-30",
    "category": "Process & expectations",
    "q": {
      "en": "Can you guarantee the outcome?",
      "hi": "क्या आप परिणाम की गारंटी दे सकते हैं?",
      "hinglish": "Kya aap outcome guarantee kar sakte hain?"
    },
    "a": {
      "en": "I can explain the process and the next step, but I can’t guarantee an outcome before the responsible team reviews the details.",
      "hi": "मैं प्रक्रिया और अगला कदम समझा सकता/सकती हूँ, लेकिन जिम्मेदार टीम के विवरण देखने से पहले परिणाम की गारंटी नहीं दे सकता/सकती।",
      "hinglish": "Main process aur next step explain kar sakta/sakti hoon, lekin responsible team review se pehle outcome guarantee nahi kar sakta/sakti."
    }
  },
  {
    "id": "process-31",
    "category": "Process & expectations",
    "q": {
      "en": "I don’t know my reference number.",
      "hi": "मुझे अपना reference number नहीं पता।",
      "hinglish": "Mujhe reference number nahi pata."
    },
    "a": {
      "en": "That’s okay. Don’t guess or share unnecessary personal details. Use the official app or support channel to check whether a reference exists; the team can explain what information is needed to locate it.",
      "hi": "कोई बात नहीं। अनुमान न लगाएँ और अनावश्यक निजी जानकारी न दें। आधिकारिक ऐप या सपोर्ट चैनल से जाँचें कि reference number मौजूद है या नहीं; टीम बताएगी कि उसे खोजने के लिए क्या आवश्यक है।",
      "hinglish": "Koi baat nahi. Guess na karein aur unnecessary personal details na dein. Official app/support channel par check karein; team batayegi reference locate karne ke liye kya chahiye."
    }
  },
  {
    "id": "contact-32",
    "category": "Official contact & safety",
    "q": {
      "en": "Can you give me the official support number?",
      "hi": "क्या आप आधिकारिक सपोर्ट नंबर दे सकते हैं?",
      "hinglish": "Kya aap official support number de sakte hain?"
    },
    "a": {
      "en": "Please use the contact details displayed inside the official app or on the website address you independently verify. I don’t want to risk giving you an outdated or unverified number.",
      "hi": "कृपया आधिकारिक ऐप या स्वयं सत्यापित वेबसाइट पर दिए संपर्क विवरण का उपयोग करें। मैं आपको पुराना या असत्यापित नंबर देने का जोखिम नहीं लेना चाहता/चाहती।",
      "hinglish": "Official app ya independently verified website par diye contact details use karein. Main outdated ya unverified number dene ka risk nahi lena chahta/chahti."
    }
  },
  {
    "id": "contact-33",
    "category": "Official contact & safety",
    "q": {
      "en": "Can I send you my password so you can check?",
      "hi": "क्या मैं जाँच के लिए अपना पासवर्ड भेज दूँ?",
      "hinglish": "Kya main check karne ke liye password bhej doon?"
    },
    "a": {
      "en": "No. Never send your password, OTP, PIN, recovery code, or full payment details to a caller or in chat. I can guide you through the official steps without seeing them.",
      "hi": "नहीं। पासवर्ड, OTP, PIN, recovery code या पूरा भुगतान विवरण कॉलर या चैट में कभी न भेजें। मैं इन्हें देखे बिना आधिकारिक कदम बता सकता/सकती हूँ।",
      "hinglish": "Nahi. Password, OTP, PIN, recovery code ya full payment details caller/chat mein kabhi na bhejein. Main unhe dekhe bina official steps guide kar sakta/sakti hoon."
    }
  },
  {
    "id": "closing-34",
    "category": "Closing & call control",
    "q": {
      "en": "I have no more questions.",
      "hi": "मेरे पास और सवाल नहीं हैं।",
      "hinglish": "Mere paas aur sawaal nahi hain."
    },
    "a": {
      "en": "Thank you for your time. If you need help later, use the official support channel. You can end the call whenever you choose.",
      "hi": "आपके समय के लिए धन्यवाद। आगे मदद चाहिए तो आधिकारिक सपोर्ट चैनल का उपयोग करें। आप जब चाहें कॉल समाप्त कर सकते हैं।",
      "hinglish": "Aapke time ke liye thank you. Baad mein help chahiye to official support channel use karein. Aap jab chahein call end kar sakte hain."
    }
  },
  {
    "id": "closing-35",
    "category": "Closing & call control",
    "q": {
      "en": "The customer says they want to end the call.",
      "hi": "ग्राहक कहता है कि वह कॉल समाप्त करना चाहता है।",
      "hinglish": "Customer bolta hai ki woh call end karna chahta hai."
    },
    "a": {
      "en": "Respect the customer’s choice. Do not keep asking questions or continue the script after they indicate they are ending the call.",
      "hi": "ग्राहक के निर्णय का सम्मान करें। कॉल समाप्त करने की बात कहने के बाद सवाल पूछते न रहें और स्क्रिप्ट जारी न रखें।",
      "hinglish": "Customer ki choice ka respect karein. Call end karne ke baad aur questions na poochhein aur script continue na karein."
    }
  },
  {
    "id": "unknown-36",
    "category": "Unknown question",
    "q": {
      "en": "I don’t know the answer. What should I say?",
      "hi": "मुझे जवाब नहीं पता। क्या कहूँ?",
      "hinglish": "Mujhe answer nahi pata. Kya bolun?"
    },
    "a": {
      "en": "I don’t want to guess and give you incorrect information. I’ll direct this question to the appropriate verified support channel. Please don’t share sensitive information while we do that.",
      "hi": "मैं अनुमान लगाकर गलत जानकारी नहीं देना चाहता/चाहती। मैं इस सवाल को उचित सत्यापित सपोर्ट चैनल तक पहुँचाने का तरीका बताऊँगा/बताऊँगी। इस दौरान संवेदनशील जानकारी साझा न करें।",
      "hinglish": "Main guess karke galat information nahi dena chahta/chahti. Main is question ko appropriate verified support channel tak le jaane ka tareeka bataunga/bataungi. Sensitive information share na karein."
    }
  },
  {
    "id": "unknown-37",
    "category": "Unknown question",
    "q": {
      "en": "The customer asks something outside the script.",
      "hi": "ग्राहक स्क्रिप्ट से बाहर का सवाल पूछता है।",
      "hinglish": "Customer script se bahar ka question poochta hai."
    },
    "a": {
      "en": "Acknowledge the question, avoid guessing, and use approved documentation or escalation. If no verified answer is available, say so clearly and explain the next safe step.",
      "hi": "सवाल को स्वीकार करें, अनुमान न लगाएँ और स्वीकृत दस्तावेज़ या escalation का उपयोग करें। सत्यापित जवाब न हो तो साफ़ बताएँ और अगला सुरक्षित कदम समझाएँ।",
      "hinglish": "Question acknowledge karein, guess na karein aur approved documentation/escalation use karein. Verified answer nahi hai to clearly batayein aur safe next step samjhayen."
    }
  },
  {
    "id": "optout-38",
    "category": "Contact preferences",
    "q": {
      "en": "I only want support messages, not calls.",
      "hi": "मुझे केवल सपोर्ट संदेश चाहिए, कॉल नहीं।",
      "hinglish": "Mujhe sirf support messages chahiye, calls nahi."
    },
    "a": {
      "en": "I understand. I’ll record your contact preference through the approved process. Please use the official channel to confirm which message and call preferences are available.",
      "hi": "मैं समझता/समझती हूँ। स्वीकृत प्रक्रिया से आपकी संपर्क-पसंद दर्ज करूँगा/करूँगी। कौन-से संदेश और कॉल विकल्प उपलब्ध हैं, इसकी पुष्टि आधिकारिक चैनल से करें।",
      "hinglish": "Samajh gaya/gayi. Approved process se contact preference note karunga/karungi. Kaunse message/call options available hain, official channel se confirm karein."
    }
  },
  {
    "id": "privacy-39",
    "category": "Privacy & personal data",
    "q": {
      "en": "Can I share a screenshot?",
      "hi": "क्या मैं स्क्रीनशॉट साझा कर सकता/सकती हूँ?",
      "hinglish": "Kya main screenshot share kar sakta/sakti hoon?"
    },
    "a": {
      "en": "Only share it through a verified official support channel, and first hide passwords, OTPs, phone numbers, email addresses, payment details, and any other personal information that is not needed.",
      "hi": "स्क्रीनशॉट केवल सत्यापित आधिकारिक सपोर्ट चैनल पर साझा करें। पहले पासवर्ड, OTP, फोन नंबर, ईमेल, भुगतान विवरण और गैर-ज़रूरी निजी जानकारी छिपाएँ।",
      "hinglish": "Screenshot sirf verified official support channel par share karein. Pehle password, OTP, phone/email, payment details aur unnecessary personal information hide karein."
    }
  },
  {
    "id": "security-40",
    "category": "Suspicious messages & links",
    "q": {
      "en": "I already clicked a suspicious link.",
      "hi": "मैंने संदिग्ध लिंक पहले ही खोल लिया है।",
      "hinglish": "Maine suspicious link already click kar diya."
    },
    "a": {
      "en": "Close the page and don’t enter any more information or download anything. If you entered a password, change it from the official site. If financial information may be exposed, contact your bank or payment provider through its official channel.",
      "hi": "पेज बंद करें और आगे जानकारी न भरें या कुछ डाउनलोड न करें। पासवर्ड दर्ज किया है तो आधिकारिक साइट से बदलें। वित्तीय जानकारी प्रभावित हो सकती है तो बैंक या payment provider से आधिकारिक चैनल पर संपर्क करें।",
      "hinglish": "Page close karein aur aur information enter/download na karein. Password dala hai to official site se change karein. Financial info expose ho sakti hai to bank/payment provider ko official channel se contact karein."
    }
  },
  {
    "id": "complaint-41",
    "category": "Complaints & escalation",
    "q": {
      "en": "Can you give me a complaint number now?",
      "hi": "क्या आप अभी शिकायत नंबर दे सकते हैं?",
      "hinglish": "Kya aap abhi complaint number de sakte hain?"
    },
    "a": {
      "en": "A reference number should only be provided once the official system creates or confirms it. I can guide you to the approved complaint process, but I won’t invent a number.",
      "hi": "Reference number तभी देना चाहिए जब आधिकारिक सिस्टम उसे बनाए या पुष्टि करे। मैं स्वीकृत शिकायत प्रक्रिया बता सकता/सकती हूँ, लेकिन नंबर गढ़कर नहीं दूँगा/दूँगी।",
      "hinglish": "Reference number tabhi dena chahiye jab official system create ya confirm kare. Main approved complaint process guide kar sakta/sakti hoon, lekin number invent nahi karunga/karungi."
    }
  },
  {
    "id": "closing-42",
    "category": "Closing & call control",
    "q": {
      "en": "The call was disconnected. What now?",
      "hi": "कॉल कट गई। अब क्या करें?",
      "hinglish": "Call disconnect ho gayi. Ab kya karein?"
    },
    "a": {
      "en": "Follow the approved callback policy. If a callback is permitted, use verified contact details and respect any request not to be contacted. Do not repeatedly call without authorization.",
      "hi": "स्वीकृत callback नीति अपनाएँ। अनुमति हो तो सत्यापित संपर्क विवरण उपयोग करें और दोबारा संपर्क न करने के अनुरोध का सम्मान करें। अनुमति के बिना बार-बार कॉल न करें।",
      "hinglish": "Approved callback policy follow karein. Permission ho to verified contact details use karein aur no-contact request ka respect karein. Authorization ke bina baar-baar call na karein."
    }
  }
];
  const flow = document.querySelector(".call-flow");
  if (!flow) return;

  const ui = {
    en: {eyebrow:"CALLING KNOWLEDGE BANK", title:"Questions & Answers", intro:"Use this guided Q&A inside the call workflow. Select the customer’s question, read the suggested response, then choose the customer’s reaction to get relevant next-question suggestions.", search:"Search questions, topics or answers…", all:"All categories", question:"Customer question", answer:"Suggested response", empty:"No matching questions. Try another keyword.", count:n=>`${n} questions`, note:"Use only verified information. Never ask for passwords, OTPs, PINs, recovery codes or full bank details.", select:"Choose a question to see the answer.", reaction:"Customer’s response — choose the next step", suggestedTitle:"Suggested next questions", reactions:{answered:"Understood / resolved",followup:"Still has a question",escalate:"Needs escalation",callback:"Busy / callback",decline:"Not interested",ended:"Customer ended the call"}, guidance:{answered:"Confirm whether anything else is needed, then follow the approved closing process.",followup:"Ask what remains unclear, search for that question, and select the most relevant response.",escalate:"Explain the approved escalation route. Do not promise a result or deadline unless verified.",callback:"Ask for a suitable time only if callback is permitted. Respect the customer’s preference.",decline:"Acknowledge the decision politely. Do not pressure the customer; follow the approved contact-preference process.",ended:"Mark the call as ended by the customer and stop the workflow."}},
    hi: {eyebrow:"कॉलिंग नॉलेज बैंक", title:"सवाल और जवाब", intro:"कॉल वर्कफ़्लो के अंदर ग्राहक का सवाल चुनें। सुझाया गया जवाब पढ़ें और फिर ग्राहक की प्रतिक्रिया चुनें ताकि अगला उपयुक्त सवाल मिले।", search:"सवाल, विषय या जवाब खोजें…", all:"सभी श्रेणियाँ", question:"ग्राहक का सवाल", answer:"सुझाया गया जवाब", empty:"कोई मेल खाता सवाल नहीं मिला। दूसरा शब्द खोजें।", count:n=>`${n} सवाल`, note:"केवल सत्यापित जानकारी दें। पासवर्ड, OTP, PIN, recovery code या पूरा बैंक विवरण कभी न माँगें।", select:"जवाब देखने के लिए सवाल चुनें।", reaction:"ग्राहक की प्रतिक्रिया — अगला कदम चुनें", suggestedTitle:"अगले उपयोगी सवाल", reactions:{answered:"समझ गए / समाधान मिला",followup:"अभी भी सवाल है",escalate:"शिकायत / एस्केलेशन",callback:"व्यस्त / बाद में कॉल",decline:"रुचि नहीं है",ended:"ग्राहक ने कॉल समाप्त की"}, guidance:{answered:"पुष्टि करें कि और सहायता चाहिए या नहीं, फिर स्वीकृत समापन प्रक्रिया अपनाएँ।",followup:"पूछें कि क्या स्पष्ट नहीं हुआ, उस सवाल को खोजें और उपयुक्त जवाब चुनें।",escalate:"स्वीकृत एस्केलेशन प्रक्रिया बताएँ। सत्यापित हुए बिना परिणाम या समय-सीमा का वादा न करें।",callback:"केवल अनुमति होने पर सुविधाजनक समय पूछें और ग्राहक की पसंद का सम्मान करें।",decline:"ग्राहक के निर्णय का सम्मान करें। दबाव न डालें और संपर्क संबंधी स्वीकृत प्रक्रिया अपनाएँ।",ended:"कॉल को ग्राहक द्वारा समाप्त मानें और वर्कफ़्लो रोक दें।"}},
    hinglish: {eyebrow:"CALLING KNOWLEDGE BANK", title:"Questions & Answers", intro:"Call workflow ke andar customer ka question choose karein. Suggested response padhkar customer ka reaction select karein aur relevant next question paayein.", search:"Question, topic ya answer search karein…", all:"All categories", question:"Customer ka question", answer:"Suggested response", empty:"Matching question nahi mila. Doosra keyword try karein.", count:n=>`${n} questions`, note:"Sirf verified information dein. Password, OTP, PIN, recovery code ya full bank details kabhi na maangein.", select:"Answer dekhne ke liye question choose karein.", reaction:"Customer ka response — next step choose karein", suggestedTitle:"Agley useful questions", reactions:{answered:"Samajh gaye / solve ho gaya",followup:"Abhi bhi question hai",escalate:"Escalation chahiye",callback:"Busy / callback",decline:"Interest nahi hai",ended:"Customer ne call end ki"}, guidance:{answered:"Confirm karein ki aur help chahiye ya nahi, phir approved closing process follow karein.",followup:"Poochhein kya unclear hai, woh question search karein aur relevant answer select karein.",escalate:"Approved escalation process batayein. Verified hue bina result ya deadline promise na karein.",callback:"Sirf callback allowed ho tab suitable time poochhein aur customer ki preference respect karein.",decline:"Customer ke decision ka respect karein. Pressure na dalein; approved contact-preference process follow karein.",ended:"Call ko customer-ended mark karein aur workflow stop karein."}}
  };

  const timePlan = {
    en:{eyebrow:"FLEXIBLE 60-MINUTE FRAMEWORK",title:"Guided call stages",note:"Never delay resolution",
      stages:[["0–5 min","Opening & permission","Introduce yourself, explain the purpose, confirm it is a convenient time, and accept a no."],["5–15 min","Understand the need","Ask one open question, listen without interrupting, and confirm the main concern."],["15–25 min","Clarify the issue","Ask only relevant follow-up questions. Never request passwords, OTPs, PINs, or full bank details."],["25–35 min","Give the answer","Choose the closest Q&A entry, explain verified steps clearly, and check whether the answer makes sense."],["35–50 min","Resolve or route","If unresolved, follow approved troubleshooting or escalation. Do not repeat questions just to fill time."],["50–60 min","Recap & next steps","Summarize, state only confirmed next steps, ask if anything else is needed, and close politely."]],
      selected:"Select a stage for guidance. These are flexible planning windows, not mandatory durations."},
    hi:{eyebrow:"लचीला 60-मिनट कॉल फ्रेमवर्क",title:"कॉल के चरण",note:"समाधान में देरी न करें",
      stages:[["0–5 मिनट","परिचय और अनुमति","अपना परिचय दें, कॉल का उद्देश्य बताएँ, पूछें कि अभी बात करना सुविधाजनक है या नहीं और मना करने पर सम्मान करें।"],["5–15 मिनट","ज़रूरत समझें","एक खुला सवाल पूछें, बिना बीच में टोके सुनें और मुख्य समस्या की पुष्टि करें।"],["15–25 मिनट","समस्या स्पष्ट करें","केवल ज़रूरी सवाल पूछें। पासवर्ड, OTP, PIN या बैंक का पूरा विवरण कभी न माँगें।"],["25–35 मिनट","जवाब दें","उपयुक्त Q&A चुनें, सत्यापित कदम स्पष्ट बताएँ और पूछें कि बात समझ आई या नहीं।"],["35–50 मिनट","समाधान या सही विभाग","समस्या बाकी हो तो स्वीकृत प्रक्रिया अपनाएँ। समय भरने के लिए सवाल न दोहराएँ।"],["50–60 मिनट","सारांश और अगला कदम","सार दें, केवल पुष्टि किए गए अगले कदम बताएँ, पूछें कि और मदद चाहिए या नहीं और विनम्रता से कॉल समाप्त करें।"]],
      selected:"चरण चुनकर निर्देश देखें। ये लचीले योजना-समय हैं, अनिवार्य अवधि नहीं।"},
    hinglish:{eyebrow:"FLEXIBLE 60-MINUTE CALL FRAMEWORK",title:"Calling ke stages",note:"Resolution delay na karein",
      stages:[["0–5 min","Opening aur permission","Introduction dein, purpose batayein, poochhein abhi baat convenient hai ya nahi; mana karne par respect karein."],["5–15 min","Need samjhein","Ek open question poochhein, dhyan se sunein aur main concern confirm karein."],["15–25 min","Issue clarify karein","Sirf relevant questions poochhein. Password, OTP, PIN ya full bank details kabhi na maangein."],["25–35 min","Answer dein","Relevant Q&A choose karein, verified steps simple language mein batayein aur understanding confirm karein."],["35–50 min","Resolve ya route karein","Issue solve na ho to approved troubleshooting/escalation follow karein. Time fill karne ke liye questions repeat na karein."],["50–60 min","Recap aur next steps","Summary dein, sirf confirmed next steps batayein, aur help chahiye ya nahi poochhkar politely close karein."]],
      selected:"Stage select karke guidance dekhein. Yeh flexible planning windows hain, call ko itna lamba karna mandatory nahi."}
  };

  let lang = document.querySelector("#flow-language")?.value || "en";
  const categories = [...new Set(items.map(x => x.category))];
  const section = document.createElement("section");
  section.className = "qa-bank";
  section.innerHTML = `
    <div class="qa-head">
      <div><p class="eyebrow" data-qa="eyebrow"></p><h2 data-qa="title"></h2><p class="qa-intro" data-qa="intro"></p></div>
      <span class="qa-count" data-qa="count"></span>
    </div>

    <details class="qa-collapsible"><summary>Guided 60-minute call plan</summary>
    <section class="qa-timeline" aria-label="60-minute guided call plan">
      <div class="qa-timeline-head"><div><p class="qa-subtitle" data-qa="time-eyebrow"></p><h3 data-qa="time-title"></h3></div><span class="qa-time-note" data-qa="time-note"></span></div>
      <div class="qa-time-stages" data-qa="time-stages"></div>
      <p class="qa-guidance" data-qa="time-guidance" aria-live="polite"></p>
    </section>
    </details>
    <label class="qa-search-label"><span aria-hidden="true">⌕</span><input type="search" data-qa="search" autocomplete="off"></label>
    <label class="qa-category-label"><span data-qa="category-label">Category</span><select data-qa="category"></select></label>
    <div class="qa-layout">
      <div class="qa-list-wrap"><p class="qa-subtitle" data-qa="question"></p><div class="qa-list" data-qa="list"></div><p class="qa-empty" data-qa="empty" hidden></p></div>
      <article class="qa-answer"><p class="qa-subtitle" data-qa="answer"></p><h3 data-qa="answer-question"></h3><p data-qa="answer-text"></p></article>
    </div>
    <div class="qa-next-step" data-qa="next-step" hidden>
      <p class="qa-subtitle" data-qa="reaction-label"></p>
      <div class="qa-reactions">
        <button type="button" class="qa-reaction" data-reaction="answered"></button>
        <button type="button" class="qa-reaction" data-reaction="followup"></button>
        <button type="button" class="qa-reaction" data-reaction="escalate"></button>
        <button type="button" class="qa-reaction" data-reaction="callback"></button>
        <button type="button" class="qa-reaction" data-reaction="decline"></button>
        <button type="button" class="qa-reaction" data-reaction="ended"></button>
      </div>
      <p class="qa-guidance" data-qa="guidance" aria-live="polite"></p>
      <div class="qa-suggested" data-qa="suggested" hidden>
        <p class="qa-subtitle" data-qa="suggested-title"></p>
        <div class="qa-suggested-list" data-qa="suggested-list"></div>
      </div>
    </div>
    <details class="qa-collapsible qa-session-collapse"><summary>Call progress &amp; session summary</summary>
    <section class="qa-session" aria-label="Call progress and summary">
      <div class="qa-session-head">
        <div><p class="qa-subtitle" data-qa="session-eyebrow"></p><h3 data-qa="session-title"></h3></div>
        <span class="qa-session-count" data-qa="session-count">0</span>
      </div>
      <div class="qa-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" data-qa="progress-track">
        <span data-qa="progress-fill"></span>
      </div>
      <p class="qa-progress-label" data-qa="progress-label"></p>
      <section class="qa-timeline" aria-label="Call interaction timeline">
        <div class="qa-timeline-head"><h4 data-qa="timeline-title"></h4><span data-qa="timeline-count">0</span></div>
        <ol data-qa="timeline-list"></ol>
        <p data-qa="timeline-empty"></p>
      </section>
      <label class="qa-session-notes-label" for="z7-call-notes" data-qa="notes-label"></label>
      <textarea id="z7-call-notes" data-qa="session-notes" rows="3" maxlength="1200"></textarea>
      <div class="qa-session-actions">
        <button type="button" class="qa-session-button primary" data-qa="build-summary"></button>
        <button type="button" class="qa-session-button" data-qa="reset-session"></button>
      </div>
      <article class="qa-summary-output" data-qa="summary-output" hidden aria-live="polite">
        <h4 data-qa="summary-heading"></h4>
        <p data-qa="summary-text"></p>
      </article>
      <p class="qa-session-privacy" data-qa="session-privacy"></p>
    </section>
    </details>
    <p class="qa-note" data-qa="note"></p>`;
  flow.append(section);
  const $ = key => section.querySelector(`[data-qa="${key}"]`);
  const search = $("search"), category = $("category"), list = $("list");
  let selected = null;
  const session = { questions: [], reactions: [], lastQuestion: null, lastReaction: null };
  const sessionText = {
    en: {
      eyebrow:"CALL PROGRESS", title:"Session summary", notes:"Agent notes (avoid sensitive data)", notesPlaceholder:"Briefly note the issue, confirmed steps and agreed follow-up. Do not enter passwords, OTPs, PINs or full bank details.",
      build:"Prepare summary", reset:"Reset session", summary:"Call summary", privacy:"Session notes stay in this page session; they are not sent to a server by this feature.",
      progress:(n)=>`${n} unique question${n===1?"":"s"} marked in this session. This is a progress aid, not a call-duration target.`,
      count:(n)=>`${n} covered`, none:"No questions recorded yet. Select a question and the customer's reaction to track the conversation.",
      ended:"Customer ended the call", decline:"Customer not interested", answered:"Understood / resolved", followup:"Still has a question", escalate:"Needs escalation", callback:"Busy / callback",
      summaryBody:(questions,reaction,notes)=>`Topics covered: ${questions || "None recorded"}\nLast customer response: ${reaction || "Not selected"}\nAgent notes: ${notes || "No notes entered"}\nNext step: follow the approved process; do not promise an unverified result or deadline.`,
      resetConfirm:"Reset this session's local progress and notes?"
    },
    hi: {
      eyebrow:"कॉल प्रगति", title:"सेशन सारांश", notes:"एजेंट नोट्स (संवेदनशील जानकारी न लिखें)", notesPlaceholder:"समस्या, पुष्टि किए गए कदम और तय फॉलो-अप संक्षेप में लिखें। पासवर्ड, OTP, PIN या पूरी बैंक जानकारी न लिखें।",
      build:"सारांश तैयार करें", reset:"सेशन रीसेट", summary:"कॉल सारांश", privacy:"इस सुविधा में नोट्स इसी पेज सेशन में रहते हैं; इन्हें सर्वर पर नहीं भेजा जाता।",
      progress:(n)=>`इस सेशन में ${n} अलग सवाल दर्ज हुए। यह प्रगति देखने का साधन है, कॉल की अवधि का लक्ष्य नहीं।`,
      count:(n)=>`${n} कवर हुए`, none:"अभी कोई सवाल रिकॉर्ड नहीं हुआ। बातचीत ट्रैक करने के लिए सवाल और ग्राहक की प्रतिक्रिया चुनें।",
      ended:"ग्राहक ने कॉल समाप्त की", decline:"ग्राहक की रुचि नहीं है", answered:"समझ गए / समाधान मिला", followup:"अभी भी सवाल है", escalate:"एस्केलेशन चाहिए", callback:"व्यस्त / बाद में कॉल",
      summaryBody:(questions,reaction,notes)=>`कवर किए गए विषय: ${questions || "कोई रिकॉर्ड नहीं"}\nग्राहक की आखिरी प्रतिक्रिया: ${reaction || "चयन नहीं हुआ"}\nएजेंट नोट्स: ${notes || "नोट्स नहीं लिखे"}\nअगला कदम: स्वीकृत प्रक्रिया अपनाएँ; बिना पुष्टि परिणाम या समय-सीमा का वादा न करें।`,
      resetConfirm:"क्या इस सेशन की स्थानीय प्रगति और नोट्स रीसेट करें?"
    },
    hinglish: {
      eyebrow:"CALL PROGRESS", title:"Session summary", notes:"Agent notes (sensitive details na likhein)", notesPlaceholder:"Issue, confirmed steps aur agreed follow-up short mein note karein. Password, OTP, PIN ya full bank details na likhein.",
      build:"Summary banayein", reset:"Session reset", summary:"Call summary", privacy:"Is feature mein notes isi page session mein rehte hain; server par send nahi hote.",
      progress:(n)=>`Is session mein ${n} unique questions record hue. Yeh progress aid hai, call duration ka target nahi.`,
      count:(n)=>`${n} covered`, none:"Abhi koi question record nahi hua. Conversation track karne ke liye question aur customer reaction select karein.",
      ended:"Customer ne call end ki", decline:"Customer interested nahi hai", answered:"Samajh gaye / solve ho gaya", followup:"Abhi bhi question hai", escalate:"Escalation chahiye", callback:"Busy / callback",
      summaryBody:(questions,reaction,notes)=>`Covered topics: ${questions || "Koi record nahi"}\nCustomer ka last response: ${reaction || "Select nahi hua"}\nAgent notes: ${notes || "Notes nahi hain"}\nNext step: approved process follow karein; unverified result ya deadline promise na karein.`,
      resetConfirm:"Kya is session ki local progress aur notes reset karne hain?"
    }
  };
  const reactionNames = {
    answered:["answered","answered"], followup:["followup","followup"], escalate:["escalate","escalate"],
    callback:["callback","callback"], decline:["decline","decline"], ended:["ended","ended"]
  };
  function renderSessionProgress() {
    const t = sessionText[lang] || sessionText.en;
    const n = session.questions.length;
    $("session-eyebrow").textContent = t.eyebrow;
    $("session-title").textContent = t.title;
    $("session-count").textContent = t.count(n);
    $("progress-label").textContent = n ? t.progress(n) : t.none;
    const percent = Math.min(100, Math.round(n / Math.max(1, items.length) * 100));
    $("progress-fill").style.width = percent + "%";
    $("progress-track").setAttribute("aria-valuenow", String(percent));
    $("notes-label").textContent = t.notes;
    $("session-notes").placeholder = t.notesPlaceholder;
    $("build-summary").textContent = t.build;
    $("reset-session").textContent = t.reset;
    $("summary-heading").textContent = t.summary;
    $("session-privacy").textContent = t.privacy;
    const timeline = $("timeline-list");
    const events = session.reactions.slice(-12).slice().reverse();
    $("timeline-title").textContent = lang === "hi" ? "बातचीत की टाइमलाइन" : lang === "hinglish" ? "Conversation timeline" : "Call timeline";
    $("timeline-count").textContent = String(session.reactions.length);
    $("timeline-empty").textContent = events.length ? "" : (lang === "hi" ? "Customer response select karne par activity yahan dikhegi." : lang === "hinglish" ? "Customer response select karne par activity yahan dikhegi." : "Select a customer response to record the interaction here.");
    timeline.replaceChildren();
    events.forEach(event => {
      const li = document.createElement("li");
      const time = document.createElement("time");
      const detail = document.createElement("span");
      time.textContent = event.time || "";
      const reactionText = t[event.key] || event.key;
      detail.textContent = `${event.question.q[lang] || event.question.q.en} — ${reactionText}`;
      li.append(time, detail);
      timeline.append(li);
    });
  }
  function recordQuestion(item) {
    if (!item) return;
    session.lastQuestion = item;
    if (!session.questions.some(q => q.id === item.id)) session.questions.push(item);
    renderSessionProgress();
  }
  function recordReaction(key) {
    if (!key || !selected) return;
    recordQuestion(selected);
    session.lastQuestion = selected;
    session.lastReaction = key;
    session.reactions.push({question: session.lastQuestion, key, time: new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"})});
    if (session.reactions.length > 100) session.reactions.shift();
    renderSessionProgress();
  }

  categories.forEach(c => {
    const option = document.createElement("option");
    option.value = c; option.textContent = c; category.append(option);
  });
  const all = document.createElement("option");
  all.value = ""; category.insertBefore(all, category.firstChild);

  function renderAnswer(item) {
    selected = item;
    $("answer-question").textContent = item ? item.q[lang] : ui[lang].select;
    $("answer-text").textContent = item ? item.a[lang] : "";
    section.querySelectorAll(".qa-item").forEach(b => b.classList.toggle("active", b.dataset.id === item?.id));
    if ($("next-step")) {
      $("next-step").hidden = !item;
      $("guidance").textContent = "";
      section.querySelectorAll(".qa-reaction").forEach(b => b.classList.remove("active"));
      $("suggested").hidden = true;
      $("suggested-list").replaceChildren();
    }
  }
  function renderList() {
    const query = search.value.trim().toLocaleLowerCase();
    const filtered = items.filter(item =>
      (!category.value || item.category === category.value) &&
      [item.category, item.q.en, item.q.hi, item.q.hinglish, item.a.en, item.a.hi, item.a.hinglish]
        .some(v => v.toLocaleLowerCase().includes(query))
    );
    list.replaceChildren();
    filtered.forEach(item => {
      const button = document.createElement("button");
      button.type = "button"; button.className = "qa-item"; button.dataset.id = item.id;
      button.innerHTML = `<span class="qa-item-category"></span><span class="qa-item-question"></span>`;
      button.querySelector(".qa-item-category").textContent = item.category;
      button.querySelector(".qa-item-question").textContent = item.q[lang];
      button.addEventListener("click", () => renderAnswer(item));
      list.append(button);
    });
    $("empty").hidden = filtered.length > 0;
    $("empty").textContent = ui[lang].empty;
    $("count").textContent = ui[lang].count(filtered.length);
    if (!filtered.some(item => item.id === selected?.id)) renderAnswer(filtered[0] || null);
    else renderAnswer(selected);
  }

  function renderTimePlan() {
    const plan = timePlan[lang] || timePlan.en;
    $("time-eyebrow").textContent=plan.eyebrow; $("time-title").textContent=plan.title; $("time-note").textContent=plan.note;
    const wrap=$("time-stages"); wrap.replaceChildren();
    plan.stages.forEach(stage=>{
      const b=document.createElement("button"); b.type="button"; b.className="qa-time-stage";
      b.innerHTML='<span class="qa-time-range"></span><strong></strong><span class="qa-time-open"></span>';
      b.querySelector(".qa-time-range").textContent=stage[0]; b.querySelector("strong").textContent=stage[1];
      b.querySelector(".qa-time-open").textContent=lang==="hi"?"निर्देश देखें":lang==="hinglish"?"Guidance dekhein":"View guidance";
      b.addEventListener("click",()=>{wrap.querySelectorAll(".qa-time-stage").forEach(el=>el.classList.toggle("active",el===b));$("time-guidance").textContent=stage[2];});
      wrap.append(b);
    });
    $("time-guidance").textContent=plan.selected;
  }

  function translate() {
    const t = ui[lang];
    ["eyebrow","title","intro","question","answer","note"].forEach(key => $(key).textContent = t[key]);
    search.placeholder = t.search;
    $("category-label").textContent = lang === "hi" ? "श्रेणी" : "Category";
    all.textContent = t.all;
    renderList();
    renderTimePlan();
    renderReactions();
    renderSessionProgress();
  }
  const reactionWrap = $("next-step");
  const reactionButtons = [...section.querySelectorAll("[data-reaction]")];
  function renderReactions() {
    const t = ui[lang];
    $("reaction-label").textContent = t.reaction;
    reactionButtons.forEach(button => {
      const key = button.dataset.reaction;
      button.textContent = t.reactions[key];
      button.onclick = () => {
        recordReaction(key);
        $("guidance").textContent = t.guidance[key];
        reactionButtons.forEach(b => b.classList.toggle("active", b === button));
        renderSuggestions(key);
      };
    });
    reactionWrap.hidden = !selected;
  }
  function renderSuggestions(reactionKey) {
    const wrap = $("suggested");
    const target = $("suggested-list");
    target.replaceChildren();
    if (!selected || ["decline", "ended"].includes(reactionKey)) {
      wrap.hidden = true;
      return;
    }
    let preferred = [];
    if (reactionKey === "followup") {
      preferred = [selected.category];
    } else if (reactionKey === "escalate") {
      preferred = ["Complaints & escalation", "Process & expectations", "Contact preferences"];
    } else if (reactionKey === "callback") {
      preferred = ["Permission & timing", "Contact preferences"];
    } else if (reactionKey === "answered") {
      preferred = [selected.category, "Closing & call control", "Process & expectations"];
    }
    const suggestions = items.filter(item =>
      item.id !== selected.id && preferred.includes(item.category)
    ).slice(0, 3);
    if (!suggestions.length) {
      wrap.hidden = true;
      return;
    }
    $("suggested-title").textContent = ui[lang].suggestedTitle;
    suggestions.forEach(item => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "qa-suggested-item";
      b.textContent = item.q[lang];
      b.addEventListener("click", () => {
        renderAnswer(item);
        $("guidance").textContent = "";
        reactionButtons.forEach(el => el.classList.remove("active"));
        wrap.hidden = true;
      });
      target.append(b);
    });
    wrap.hidden = false;
  }

  $("build-summary").addEventListener("click", () => {
    const t = sessionText[lang] || sessionText.en;
    const topics = session.questions.map(q => q.q[lang]).join(" · ");
    const reaction = session.lastReaction ? (t[session.lastReaction] || session.lastReaction) : "";
    $("summary-text").textContent = t.summaryBody(topics, reaction, $("session-notes").value.trim());
    $("summary-output").hidden = false;
  });
  $("reset-session").addEventListener("click", () => {
    const t = sessionText[lang] || sessionText.en;
    if (!window.confirm(t.resetConfirm)) return;
    session.questions.length = 0;
    session.reactions.length = 0;
    session.lastQuestion = null;
    session.lastReaction = null;
    $("session-notes").value = "";
    $("summary-output").hidden = true;
    renderSessionProgress();
  });
  search.addEventListener("input", renderList);
  category.addEventListener("change", renderList);
  document.querySelector("#flow-language")?.addEventListener("change", event => {
    lang = event.target.value;
    translate();
  });
  translate();
})();
