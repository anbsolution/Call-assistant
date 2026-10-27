const scripts = {
opening:{title:"Opening the call",pill:"OPENING",en:"Hello, good morning/afternoon. My name is [your real name], and I’m calling about Z7 platform information. Is this a good time to speak for one minute?",hi:"Hello, good morning/afternoon. Mera naam [aapka asli naam] hai. Main Z7 platform ki information ke baare mein call kar raha/rahi hoon. Kya abhi ek minute baat karna convenient hai?",question:"Customer ka response kya hai?",options:[["Yes, go ahead","purpose"],["Who are you? / Which company?","identity"],["I am busy","busy"],["Not interested","decline"],["I don't remember Z7","explain"]]},
identity:{title:"Explain your identity",pill:"INTRODUCTION",en:"I’m [your real name], calling about Z7 platform information. You can verify the company and information through its official channels. Is it okay if I briefly explain the reason for my call?",hi:"Main [aapka asli naam] hoon. Z7 platform ki information ke baare mein call kar raha/rahi hoon. Aap company aur information ko official channels se verify kar sakte hain. Kya main call ka reason short mein bata sakta/sakti hoon?",question:"Customer kya kehta hai?",options:[["Okay, tell me","purpose"],["Send information instead","sms"],["Not interested","decline"],["End the call","end"]]},
purpose:{title:"Reason for calling",pill:"CALL PURPOSE",en:"I’m calling to share general information about Z7 and where to check account notices or current promotions, if available. I can’t guarantee that any offer applies to your account. What would you like to know?",hi:"Main Z7 ke baare mein general information aur account notices ya current promotions check karne ka tareeka batane ke liye call kar raha/rahi hoon. Main guarantee nahi kar sakta/sakti ki koi offer aapke account par apply hota hai. Aap kya jaanna chahenge?",question:"Customer ka jawab select karein.",options:[["Tell me about Z7","explain"],["Any reward or promotion?","rewards"],["I have an account issue","account"],["Please send information","sms"],["Not interested","decline"]]},
explain:{title:"Z7 introduction",pill:"PRODUCT INFO",en:"The information in your materials describes Z7 as an online entertainment platform with slots, card games, fishing games, live casino, sports betting and mini-games. Features and eligibility can vary. Please check official information and applicable local rules.",hi:"Aapke diye gaye material ke mutabik, Z7 ek online entertainment platform hai jisme slots, card games, fishing games, live casino, sports betting aur mini-games hain. Features aur eligibility alag ho sakti hai. Official information aur local rules check karein.",question:"Customer ab kya poochta hai?",options:[["Tell me about rewards","rewards"],["Login/account problem","account"],["Send information","sms"],["Okay, thank you","end"],["Not interested","decline"]]},
rewards:{title:"Rewards and promotions",pill:"PROMOTIONS",en:"Your screenshot mentions a Welcome Back reward advertised as up to ₹7,777 and a red-envelope event advertised as up to ₹88,888. These are not guaranteed rewards. Please verify whether an offer is active and review eligibility and terms on the official platform.",hi:"Aapke screenshot mein Welcome Back reward up to ₹7,777 aur red-envelope event up to ₹88,888 advertised hai. Yeh guaranteed rewards nahi hain. Offer active hai ya nahi, eligibility aur terms official platform par verify karein.",question:"Customer ka response kya hai?",options:[["Where can I verify it?","verify"],["I have an account issue","account"],["Send official information","sms"],["I don't want offers","decline"],["End the call","end"]]},
verify:{title:"Verify official information",pill:"VERIFY",en:"Please open the official Z7 app yourself or type the verified website address directly. Review the current promotion terms there. Do not rely on an unexpected message or a caller’s promise.",hi:"Official Z7 app khud open karein ya verified website address khud type karein. Wahan current promotion terms check karein. Unknown message ya caller ke promise par bharosa na karein.",question:"Customer kya kehta hai?",options:[["I need account support","account"],["Okay, understood","end"],["Send information","sms"]]},
account:{title:"Account issue",pill:"ACCOUNT HELP",en:"I’m sorry you’re having trouble. Please use the customer-support contact shown inside the official Z7 app or website. What kind of issue are you facing?",hi:"Aapko problem ho rahi hai, iske liye sorry. Official Z7 app ya website mein diya gaya customer-support contact use karein. Aapko kis tarah ki problem aa rahi hai?",question:"Customer ki problem select karein.",options:[["Forgot password","password"],["Login or account issue","support"],["Suspicious message or fraud","fraud"],["Stop marketing calls","stop"]]},
password:{title:"Password recovery",pill:"PASSWORD HELP",en:"Please use “Forgot Password” on the official login page and follow the instructions. Never share your password, OTP or verification code with a caller.",hi:"Official login page par “Forgot Password” use karein aur instructions follow karein. Apna password, OTP ya verification code kisi caller ko kabhi na batayein.",question:"Customer ka response?",options:[["I understand","end"],["I still need help","support"],["I suspect fraud","fraud"]]},
support:{title:"Customer support",pill:"SUPPORT",en:"Please contact Z7 support using the details listed on the official platform. Keep any reference number available. Do not share your password, OTP, UPI PIN or bank details.",hi:"Official platform par listed details se Z7 support ko contact karein. Reference number ho toh paas rakhein. Password, OTP, UPI PIN ya bank details share na karein.",question:"Customer kya kehta hai?",options:[["Okay, thank you","end"],["I suspect fraud","fraud"],["Stop calling me","stop"]]},
fraud:{title:"Suspicious link or fraud",pill:"SAFETY",en:"Please do not open the link or share personal or banking details. Never disclose an OTP, password or UPI PIN. Verify the matter through official support. You can end this call if you feel unsure.",hi:"Link open na karein aur personal ya banking details share na karein. OTP, password ya UPI PIN kisi ko na batayein. Official support se verify karein. Doubt ho toh call end kar sakte hain.",question:"Customer ka response?",options:[["I’ll contact official support","end"],["End the call","end"]]},
sms:{title:"SMS or information request",pill:"SMS",en:"If an approved company process allows it and you consent, information may be sent by SMS. Verify the sender and domain before opening a link. You can also visit the official platform directly.",hi:"Agar approved company process allow karta hai aur aapki permission hai, toh SMS bheja ja sakta hai. Link open karne se pehle sender aur domain verify karein. Aap official platform directly bhi visit kar sakte hain.",question:"Customer ka response?",options:[["Okay, I’ll check","end"],["I don’t want messages","decline"],["Stop calling me too","stop"]]},
busy:{title:"Customer is busy",pill:"POLITE EXIT",en:"No problem. I’ll let you go. You can check official information later if you wish. Thank you for your time. Goodbye.",hi:"Koi baat nahi. Main aapko abhi disturb nahi karunga/karungi. Aap chahein toh baad mein official information check kar sakte hain. Aapke time ke liye thank you. Goodbye.",question:"Call close karein?",options:[["Finish call","end"]]},
decline:{title:"Customer is not interested",pill:"POLITE EXIT",en:"I understand. Thank you for letting me know. I won’t take up any more of your time. Have a good day. Goodbye.",hi:"Main samajh gaya/gayi. Batane ke liye thank you. Main aapka aur time nahi loonga/loongi. Aapka din achha rahe. Goodbye.",question:"Call close karein?",options:[["Finish call","end"]]},
stop:{title:"Stop marketing calls",pill:"OPT-OUT",en:"I understand your request. I’ll follow the approved process to record your request to stop marketing calls. Thank you for letting me know. Goodbye.",hi:"Main aapki request samajh gaya/gayi. Marketing calls band karne ke liye approved process follow karunga/karungi. Batane ke liye thank you. Goodbye.",question:"Call close karein?",options:[["Finish call","end"]]},
end:{title:"Call completed",pill:"COMPLETED",en:"Thank you for your time. Please rely on verified official information. Have a good day. Goodbye.",hi:"Aapke time ke liye thank you. Sirf verified official information par bharosa karein. Aapka din achha rahe. Goodbye.",question:"Aap next kya karna chahte hain?",options:[["Start a new call","opening"]]}
};

const $ = id => document.getElementById(id);
let current = "opening";
let history = [];
let deferredInstall = null;
let toastTimer;
const language = $("language");

function render(){
  const s = scripts[current];
  const lang = language.value;
  $("stepTitle").textContent = s.title;
  $("stepPill").textContent = s.pill;
  $("englishText").textContent = s.en;
  $("hinglishText").textContent = s.hi;
  $("englishPanel").classList.toggle("hidden", lang === "hi");
  $("hinglishPanel").classList.toggle("hidden", lang === "en");
  $("questionText").textContent = s.question;
  $("options").replaceChildren();
  s.options.forEach(([label,next])=>{
    const b=document.createElement("button");
    b.className="option-btn"; b.type="button";
    const t=document.createElement("span"); t.textContent=label;
    const a=document.createElement("span"); a.className="option-arrow"; a.textContent="›";
    b.append(t,a);
    b.addEventListener("click",()=>{history.push(current);current=next;render();window.scrollTo({top:0,behavior:"smooth"});});
    $("options").appendChild(b);
  });
  $("backBtn").disabled = history.length === 0;
  const step = history.length + 1;
  $("stepLabel").textContent = current === "end" ? "Call completed" : `Step ${step}`;
  const pct = current === "end" ? 100 : Math.min(95, Math.max(5, step*8));
  $("progressPct").textContent = `${pct}%`;
  $("progressBar").style.width = `${pct}%`;
}
function notify(msg){
  const t=$("toast");t.textContent=msg;t.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),1800);
}
async function copyText(text){
  try{await navigator.clipboard.writeText(text);notify("Copied to clipboard");}
  catch(e){const ta=document.createElement("textarea");ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();notify("Copied to clipboard");}
}
$("language").addEventListener("change",render);
$("copyEnglish").addEventListener("click",()=>copyText(scripts[current].en));
$("copyHinglish").addEventListener("click",()=>copyText(scripts[current].hi));
$("copyAllBtn").addEventListener("click",()=>{
  const s=scripts[current], l=language.value;
  copyText((l!=="hi" ? "ENGLISH\n"+s.en+"\n\n" : "")+(l!=="en" ? "HINGLISH\n"+s.hi : ""));
});
$("backBtn").addEventListener("click",()=>{if(history.length){current=history.pop();render();}});
$("restartBtn").addEventListener("click",()=>{current="opening";history=[];render();window.scrollTo({top:0,behavior:"smooth"});});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstall=e;$("installBtn").classList.remove("hidden");});
$("installBtn").addEventListener("click",async()=>{if(!deferredInstall)return;deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;$("installBtn").classList.add("hidden");});
if("serviceWorker" in navigator && location.protocol.startsWith("http")) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
render();
