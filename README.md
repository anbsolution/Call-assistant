# Z7 Customer Support Assistant v2.9

Mobile-friendly bilingual support guide and customer-led call-flow UI.

## Features
- Login and account access guidance
- Password reset guidance
- Suspicious links and fraud safety
- Privacy request guidance
- Complaint escalation
- Customer call opt-out guidance
- Interactive call script with selectable customer responses
- Back and restart controls; no script/response copy buttons
- PWA manifest and service-worker offline cache

## v2.7 — Customer-led call flow
- Removed copy-script and copy-response buttons from the UI
- Busy and not-interested branches do not automatically mark the call ended
- Explicit “Customer ended the call” option controls the call-ended state in this script UI
- Hindi/English flow follows the existing interface language toggle
- No passwords, OTPs or customer conversation data stored

## Run locally
Open `index.html` in a browser. For service-worker and installable PWA features, serve the files over HTTPS or localhost.

## Safety
Never ask customers to share passwords, OTPs, recovery codes, UPI PINs, or payment credentials. Honor a customer’s request to stop contact and follow the approved process for recording it.


## v2.9 — Restore styling and refresh cached assets
- Restored responsive dark theme and interactive call-flow styles
- Added cache-busting query versions for CSS and JavaScript assets
- Removed obsolete copy-response code that referenced a removed button
- Keeps English, Hindi, Hinglish, customer-led flow, and no-copy controls
