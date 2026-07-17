---
title: "What to do if… your website suddenly shows a security or certificate warning and you did not change anything"
seo_title: "Website suddenly shows security or certificate warning"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "website shows security warning"
  - "website certificate warning"
  - "website security warning suddenly"
  - "certificate warning on website"
  - "security warning on my website"
  - "https not secure suddenly"
  - "ssl error on website"
  - "tls certificate problem"
  - "certificate expired website"
  - "wrong certificate on website"
  - "certificate name mismatch"
  - "browser says website unsafe"
  - "what do i do if website shows security warning"
  - "what do i do if certificate warning appears"
  - "what do i do if website says not secure"
  - "what do i do if ssl error appears"
  - "help i see certificate warning"
  - "help i did not change website"
  - "help i see https warning"
  - "help i think website was hacked"
  - "my website says not secure"
  - "my website certificate expired"
  - "my domain shows security warning"
  - "my users see certificate warning"
  - "your connection is not private"
  - "err cert authority invalid"
  - "hsts certificate error"
  - "certificate served wrong domain"
  - "website certficate warning"
  - "ssl certifcate problem"
  - "after a dns change"
  - "after a cdn change"
last_reviewed: "2026-07-17"
date_created: "2026-05-29"
---

# What to do if… your website suddenly shows a security or certificate warning and you did not change anything (UK)

## Short answer
Treat it as a real incident until you have proved it is not. Stop users from logging in, paying, or submitting sensitive forms, then check whether the warning is caused by an expired, wrong, unexpectedly issued, or misconfigured certificate, DNS/CDN changes, or compromise.

## Do not do these things
- Don’t click through the warning to “proceed anyway” on admin, login, or payment pages.
- Don’t switch random SSL, TLS, CDN, or proxy settings without writing down the current settings first.
- Don’t follow certificate renewal links from emails, pop-ups, or third parties you did not initiate.
- Don’t change DNS records in a rush unless you know what you are changing and how to revert it.
- Don’t rotate every credential at once before securing the accounts that control DNS, CDN, hosting, registrar access, and admin access.
- Don’t delete logs, old certificates, DNS history, audit entries, or suspicious user accounts before recording what you found.

## What to do now
1. **Pause risky user actions.**  
   If you can, temporarily disable logins, checkout, password resets, and forms that collect personal or payment details. A plain maintenance message is enough while you check.

2. **Confirm the warning is on your real domain.**  
   Carefully read the exact domain in the address bar and in the browser warning. If it is a look-alike domain or an unexpected subdomain, stop using it and treat it as phishing or impersonation.

3. **Check whether it is everyone or just one device.**  
   Test from a second device and a different network, such as mobile data. If it only happens on one device or network, check for a wrong system clock, a work network or security software intercepting HTTPS, a captive portal, or a local device issue.

4. **Check the common certificate causes first.**
   - Check the certificate expiry date shown in the browser details.
   - Check that the certificate name matches your exact domain or expected subdomain.
   - Check that the certificate issuer is one you expect.
   - Check that the server or platform time is correct.

5. **Check what certificate the public internet is receiving.**  
   Use your hosting dashboard, CDN dashboard, certificate authority account, or a trusted external TLS checker. Record the time, hostname, certificate issuer, expiry date, and whether the certificate chain is complete.

6. **Look for changes you did not make.**
   - In DNS, check recent A, AAAA, CNAME, CAA, and nameserver changes for the affected hostname.
   - In your CDN or proxy, check whether proxying, SSL/TLS mode, origin certificate settings, or custom certificates changed.
   - In hosting or the web server, check which certificate is selected for the affected site.
   - In your registrar, check whether nameservers, contacts, or login activity changed.

7. **If it looks expired or misconfigured, restore a valid certificate carefully.**
   - Renew or reissue through your normal certificate authority, hosting platform, or CDN.
   - Install or select the certificate for the exact affected hostname.
   - Remove or de-select expired or wrong certificates where your platform allows it.
   - Re-test from a clean device and a different network.

8. **If anything looks like compromise, contain first.**  
   Treat unexpected DNS records, unknown admin users, unknown API keys, unexpected redirects, unfamiliar certificates, or unexplained certificate orders as warning signs. Secure registrar, DNS, CDN, hosting, and admin accounts; enable MFA where available; revoke unknown sessions and API keys; and preserve CDN, WAF, server, DNS, registrar, and admin logs before they roll over.

9. **If personal data might have been exposed, start a breach-risk note now.**  
   Record when you first became aware, what hostnames and systems may be affected, what user actions were possible, and what you have done to reduce harm. If a personal data breach is likely to risk people’s rights and freedoms, UK GDPR reporting to the ICO is generally required as soon as possible and, where feasible, within 72 hours.

10. **Use UK reporting routes if you suspect attack or fraud.**
   - Use the NCSC reporting portal or the GOV.UK cyber incident signposting service if you believe your organisation has been compromised.
   - Use Report Fraud for cyber crime or fraud reporting in England, Wales, or Northern Ireland.
   - If your business, charity, or organisation is under a cyber attack in England, Wales, or Northern Ireland, Report Fraud lists 0300 123 2040 for immediate advice.
   - If the incident is in Scotland, use Police Scotland’s cybercrime reporting routes. Call 999 if there is a threat to life or national infrastructure.

## What can wait
- You do not need to decide today whether to change host, redesign the site, or rebuild your security architecture.
- You do not need perfect root-cause proof before pausing risky user actions and restoring a valid certificate.
- You do not need a polished public statement immediately. If users are affected, a short holding message such as “We are investigating a security issue; sign-in and purchases are temporarily limited” is enough for now.
- You do not need to rotate every application secret until the accounts that control DNS, CDN, hosting, registrar access, and admin access are secured.

## Important reassurance
Certificate warnings often have ordinary causes, such as expiry, an incomplete chain, wrong certificate selection, CDN settings, DNS changes, or clock problems. They can also be a sign of compromise, so taking a careful pause now is a sensible way to protect users and avoid making the outage worse.

## Scope note
These are first steps to stabilise the situation and reduce harm. If you suspect compromise, certificate misuse, fraud, or customer data exposure, later decisions may need specialist cyber incident response, legal, privacy, or insurance support tailored to your setup.

## Important note
This is general information, not legal, professional security, financial, insurance, or technical advice. If you are unsure whether your site or accounts are compromised, prioritise user safety, preserve evidence and logs, and get qualified help.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/provisioning-and-managing-certificates-in-the-web-pki
- https://report.ncsc.gov.uk/
- https://www.gov.uk/guidance/where-to-report-a-cyber-incident
- https://signpost-cyber-incident.service.gov.uk/
- https://www.reportfraud.police.uk/reporting-a-fraud/
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/
- https://www.scotland.police.uk/advice/internet-safety/cybercrime/
