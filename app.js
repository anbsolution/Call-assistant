const guides = {
 login:{title:"Login & account access",text:"Confirm that you are using the official website or app. Check your connection and account details. Never ask the customer to disclose their password or one-time verification code.\n\nSuggested response: “I can help you troubleshoot account access. Please use the official sign-in page and tell me the error message you see. Do not share your password or OTP.”"},
 password:{title:"Password reset",text:"Use the official password-reset page. Check that any reset email comes from a verified sender. Never ask a customer to send their current password or reset code.\n\nSuggested response: “Please select Forgot Password on the official sign-in page and follow the instructions. If the email does not arrive, check spam and contact verified support.”"},
 security:{title:"Suspicious links & fraud",text:"Do not open suspicious links or share OTPs, passwords, payment details, or recovery codes. Preserve relevant messages and report them through official support channels. Contact your bank promptly if financial information may be compromised.\n\nSuggested response: “Please do not click the link or share any verification code. Report the message through an official channel and secure your account if you suspect unauthorized access.”"},
 privacy:{title:"Privacy requests",text:"Collect only the minimum information needed to identify the request. Direct customers to the official privacy channel. Do not promise deletion or disclosure until identity and applicable requirements are verified.\n\nSuggested response: “We can direct your privacy request to the appropriate team. Please use our verified privacy channel and avoid sending sensitive personal information in this chat.”"},
 complaint:{title:"Complaint or escalation",text:"Listen without blame, record a concise summary, ask for non-sensitive reference details, and explain the next review step. Do not promise an outcome or deadline that has not been confirmed.\n\nSuggested response: “I’m sorry this has been frustrating. I can document the issue and refer it to the appropriate support team. Please do not include passwords or OTPs.”"},
 optout:{title:"Stop support calls",text:"Record the customer's preference using the approved process. Explain any applicable exceptions or processing time only when confirmed. Do not request unnecessary personal information.\n\nSuggested response: “I’ve noted your request to stop support calls. We will route it through the applicable preference-management process. Please let us know if you continue to receive unwanted calls.”"}
};
const title = document.querySelector("#result-title");
const text = document.querySelector("#result-text");
const copy = document.querySelector("#copy");
const status = document.querySelector("#copy-status");
let currentText = "";
document.querySelectorAll("[data-topic]").forEach(button => {
  button.addEventListener("click", () => {
    const item = guides[button.dataset.topic];
    if (!item) return;
    title.textContent = item.title;
    text.textContent = item.text;
    currentText = item.text;
    copy.hidden = false;
    status.textContent = "";
  });
});
copy.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentText);
    status.textContent = "Response copied.";
  } catch {
    status.textContent = "Copy is unavailable in this browser. Select and copy the response text manually.";
  }
});
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
