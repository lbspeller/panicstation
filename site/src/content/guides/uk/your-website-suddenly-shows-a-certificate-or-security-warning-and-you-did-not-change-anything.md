---
title: "What to do if… your website suddenly shows a certificate or security warning and you did not change anything"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - website shows security warning
  - certificate warning on my site
  - https not secure suddenly
  - ssl error on my domain
  - tls certificate problem
  - your connection is not private
  - err cert authority invalid
  - hsts certificate error
  - browser security warning website
  - certificate expired website
  - wrong certificate served
  - certificate name mismatch
  - site suddenly not trusted
  - https warning after nothing changed
  - domain security warning
  - website cert changed unexpectedly
  - hosting certificate issue
  - cdn ssl mode issue
  - dns change i did not make
  - users seeing cert warning
  - possible interception risk
last_reviewed: "2026-03-08"
---

# What to do if… your website suddenly shows a certificate or security warning and you did not change anything (UK)

## Short answer
Treat this as a real incident until you prove it isn’t. Stop users from logging in or paying, then verify whether the warning is caused by an expired/misissued certificate, a DNS/CDN misconfiguration, or compromise.

## Do not do these things
- Don’t click through the warning to “proceed anyway” on admin, login, or payment pages, even to “just check”.
- Don’t “fix” it by switching random SSL/TLS/CDN modes without writing down what the settings are right now.
- Don’t follow renewal links from emails, pop-ups, or third parties you didn’t initiate (certificate renewal scams happen).
- Don’t change DNS records in a rush unless you’re sure you can revert quickly (DNS mistakes can prolong downtime).
- Don’t rotate every credential at once; secure the accounts that control DNS/CDN/hosting first so you don’t lock yourself out or lose logs.

## What to do now
1. **Put safety brakes on user actions (first 5–10 minutes).**  
   If you can, temporarily disable logins, checkout, and any forms that collect passwords or payment details (maintenance mode is fine). The goal is to prevent credential capture if this is interception or compromise.

2. **Confirm the warning is for your real domain (not a look-alike).**  
   Carefully read the exact domain shown in the browser warning and the address bar. If it’s not exactly your domain (or a known subdomain), treat it as phishing and stop there.

3. **Check if it’s “everyone” or “just you”.**  
   Test from a second device and a different network (for example, mobile data).  
   If it only happens on one device/network, suspect local HTTPS interception (corporate proxy/antivirus), a captive portal, or an incorrect system clock.

4. **Check the fastest “boring” causes first.**
   - **Device/server clock:** confirm the server time and device time are correct (bad time causes certificate validation failures).
   - **Certificate expiry:** check the certificate “valid to” date in the browser details.
   - **Name mismatch:** confirm the certificate is issued to your domain (subject/SAN).

5. **Verify what certificate your site is actually serving (from the public internet).**  
   Use your hosting/CDN dashboard or a trusted external TLS checker to confirm:
   - the certificate includes your domain
   - the issuing CA looks expected
   - the certificate chain is complete  
   Write down what certificate is being served and the time you observed it.

6. **Check for DNS/CDN/hosting changes you “didn’t make”.**
   - **DNS:** review recent changes at your DNS provider (A/AAAA/CNAME records for affected hostnames). Look for switches to unfamiliar IPs/targets.
   - **CDN/proxy (if used):** check whether proxying was toggled, SSL/TLS mode changed, or the CDN was paused.
   - **Hosting/web server:** confirm which certificate is bound to the site and whether a recent deploy/restart reverted configuration.

7. **If it’s expired/misconfigured: restore a valid certificate safely.**
   - Renew/reissue via your existing certificate authority or your platform’s certificate management.
   - Install/select the new certificate on the correct server/CDN edge, and de-select expired/incorrect ones where possible.
   - Re-test from a clean device/network after changes.

8. **If anything looks like compromise, contain first (then fix).**  
   Warning signs: DNS records changed unexpectedly, new admin users, unknown API keys, unexpected redirects, or certificates you never ordered.  
   Containment priorities:
   - lock down DNS/CDN/hosting accounts (enable MFA, revoke unknown sessions)
   - rotate access for the control plane (DNS/CDN/hosting) before rotating application secrets
   - preserve logs (CDN/WAF logs, web server logs, admin/audit logs) before they roll over

9. **If personal data might be exposed, start a breach-risk assessment now.**  
   You don’t need perfect details yet, but do record when you first became aware and what systems might be affected. If you conclude the breach is notifiable, UK GDPR expectations are to notify the ICO **as soon as possible and where feasible within 72 hours**.

10. **Use UK reporting routes if you suspect an attack or fraud.**
   - **NCSC:** report a cyber incident via the NCSC incident reporting portal if you believe your organisation has been compromised.
   - **Police/fraud reporting:** if you believe this is cyber crime or fraud, use **Report Fraud** (England, Wales, Northern Ireland). If you are an organisation under a **live cyber attack**, call **0300 123 2040** for immediate advice. If you are in **Scotland**, report to **Police Scotland** (101 for non-emergencies; 999 in an emergency).

## What can wait
- You don’t need to decide today whether to replatform, change providers, or redesign your security architecture.
- You don’t need perfect root-cause proof before stopping user risk and restoring a valid certificate.
- You don’t need a polished public statement immediately; if users are impacted, a short holding message (“We’re investigating a security issue; sign-in/purchases are temporarily limited”) is enough for now.

## Important reassurance
Certificate warnings happen for mundane reasons (expiry, incomplete chain, mis-set CDN mode, clock problems) — and they also happen during real attacks. Treating it seriously at the start is the safest move and helps you avoid irreversible mistakes.

## Scope note
This is first-step guidance to stabilise and reduce harm. If you suspect compromise or customer data exposure, you will usually need specialist incident response and legal/privacy support tailored to your setup.

## Important note
This is general information, not legal or professional security advice. If you are unsure whether your site or accounts are compromised, prioritise user safety, preserve logs, and get qualified help.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/provisioning-and-managing-certificates-in-the-web-pki
- https://report.ncsc.gov.uk/
- https://www.gov.uk/guidance/where-to-report-a-cyber-incident
- https://signpost-cyber-incident.service.gov.uk/
- https://www.reportfraud.police.uk/reporting-a-fraud/
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/
- https://www.scotland.police.uk/advice/internet-safety/cybercrime/