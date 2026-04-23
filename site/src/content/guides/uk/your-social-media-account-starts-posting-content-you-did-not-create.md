---
title: "What to do if… your social media account starts posting content you did not create"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "website shows security warning"
  - "certificate warning on my site"
  - "https not secure suddenly"
  - "ssl error on my domain"
  - "tls certificate problem"
  - "your connection is not private"
  - "err cert authority invalid"
  - "hsts certificate error"
  - "browser security warning website"
  - "certificate expired website"
  - "wrong certificate served"
  - "certificate name mismatch"
  - "site suddenly not trusted"
  - "https warning after nothing changed"
  - "domain security warning"
  - "website cert changed unexpectedly"
  - "hosting certificate issue"
  - "cdn ssl mode issue"
  - "dns change i did not make"
  - "users seeing cert warning"
  - "possible interception risk"
  - "what do i do if my website says not secure"
  - "what do i do if i see a certificate warning"
  - "what do i do if my ssl is broken"
  - "what do i do if my domain is untrusted"
  - "help i have a security warning on my site"
  - "help i cannot login to my website"
  - "help my customers see a private connection error"
  - "help my website certificate expired"
  - "my website shows a red warning"
  - "my ssl certificate stopped working"
  - "smell of digital compromise"
  - "visible browser security alert"
  - "sudden site downtime warning"
  - "unexplained dns change"
last_reviewed: "2026-03-17"
---
# What to do if… your social media account starts posting content you did not create (UK)

## Short answer
Immediately stop all user logins and payment processing on the site. Verify if the issue is a standard expiration or a configuration error before investigating potential unauthorized access or DNS tampering.

## Do not do these things
- Do not click through "Proceed anyway" or "Advanced" links to access admin panels, even for a quick check.
- Do not modify DNS records or CDN settings until you have exported or written down the current configuration.
- Do not use links provided in unsolicited emails or pop-ups that claim to offer certificate renewal services.
- Do not rotate all site passwords simultaneously; prioritize securing the accounts that control your domain and hosting first.
- Do not ignore the warning even if the site appears to function normally for some users.

## What to do now
1. **Prevent all sensitive data entry on the affected domain.** 
   - Activate a maintenance mode page that disables forms, login fields, and checkout processes. 
   - This prevents the "man-in-the-middle" capture of passwords or payment data while the site is in an untrusted state.

2. **Confirm the exact domain and subdomain listed in the browser alert.** 
   - Check if the warning is for your exact URL or a subtly misspelled version (homograph attack). 
   - If the domain in the address bar is not your legitimate domain, treat the incident as a phishing attempt and stop interacting with that specific page.

3. **Check the site connectivity from an independent network.** 
   - Access the site using a mobile device on a 4G/5G data connection to rule out local network issues. 
   - If the warning only appears on your office or home Wi-Fi, the issue may be a local router compromise, a corporate proxy, or a local security software conflict.

4. **Review the technical details of the served certificate.** 
   - Click the "Not Secure" or "Warning" icon in the browser address bar and view the certificate details. 
   - **Check the "Valid To" date** to see if the certificate has simply expired. 
   - **Check the "Subject" or "Common Name"** to see if the certificate matches your domain name. 
   - **Identify the "Issuer"** to confirm it is the Certificate Authority (CA) you usually use.

5. **Verify the server and device time synchronization.** 
   - Ensure the system clock on your viewing device is correct. 
   - If possible, check the server time via your hosting control panel, as time-drift of more than a few minutes can cause TLS handshake failures.

6. **Examine DNS and CDN logs for unauthorized changes.** 
   - Log in to your domain registrar and CDN provider (e.g., Cloudflare, Akamai) using a separate, secure device. 
   - Check the "A," "AAAA," and "CNAME" records for any IP addresses or targets you do not recognize. 
   - Look for recent "Audit Logs" or "Activity History" that show changes you did not authorize.

7. **Reinstall or renew the certificate through your official provider.** 
   - If the certificate is expired or misconfigured, use your hosting dashboard's automated renewal tools or your CA's official portal to reissue it. 
   - Ensure that any intermediate certificates (the "certificate chain") are correctly installed.

8. **Secure your administrative accounts if you suspect compromise.** 
   - Change passwords and ensure Multi-Factor Authentication (MFA) is active for your domain registrar, hosting provider, and CDN. 
   - Revoke any active sessions or API keys that you do not recognize in these control panels.

9. **Report the incident to UK authorities if an attack is suspected.** 
   - **Action Fraud/Report Fraud:** If you are a business currently experiencing a live cyber-attack, call **0300 123 2040** immediately (24/7 service). 
   - **NCSC:** Report a cyber incident via the National Cyber Security Centre (NCSC) online portal for technical assistance or information sharing. 
   - **Police Scotland:** If you are in Scotland, call **101** (non-emergency) or **999** (emergency) to report cybercrime.

10. **Document the timeline for potential GDPR reporting.** 
    - Write down the exact time you discovered the warning and the steps taken to mitigate user risk. 
    - If you determine that personal data has been compromised, you must report the breach to the Information Commissioner’s Office (ICO) as soon as possible and within 72 hours.

## What can wait
- You do not need to diagnose the exact technical root cause before disabling user logins.
- You do not need to decide on a new hosting provider or security architecture today.
- You do not need to issue a detailed public post-mortem while the incident is still being contained.

## Important reassurance
Security warnings are often caused by routine technical failures, such as an automated renewal script failing or a minor configuration error in a CDN. Taking the site offline to investigate is a standard professional response and prevents a minor technical glitch from turning into a data theft event.

## Scope note
This guide provides first-step stabilization for website owners facing sudden security warnings. It does not replace a full forensic investigation or professional legal advice regarding data breaches.

## Important note
This information is for general guidance and does not constitute professional security or legal advice. If you believe your systems are compromised, prioritize the safety of user data and consult with a qualified cybersecurity professional or legal counsel.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://www.ncsc.gov.uk/guidance/setting-2-step-verification-2sv
- https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers
- https://www.citizensadvice.org.uk/consumer/scams/reporting-a-scam/
- https://www.gov.uk/report-suspicious-emails-websites-phishing
