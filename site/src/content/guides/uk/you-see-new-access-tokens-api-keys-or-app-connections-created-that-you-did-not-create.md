---
title: "What to do if… you see new access tokens, API keys, or app connections created that you did not create"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - unexpected access token
  - unknown api key created
  - new app connection i did not create
  - suspicious oauth app
  - unknown third party app access
  - account token compromise
  - api credentials leak
  - developer account hacked
  - cloud console suspicious activity
  - github token created without me
  - new integration appeared
  - unauthorized app authorization
  - strange connected apps
  - someone has access token
  - security keys and tokens issue
  - new credentials in dashboard
  - token created overnight
  - suspicious login and token
last_reviewed: "2026-03-08"
---

# What to do if… you see new access tokens, API keys, or app connections created that you did not create (UK)

## Short answer
Assume someone still has access: revoke the unknown tokens/app connections immediately, then secure the “root” account (your email/SSO) and rotate any keys that could access systems.

## Do not do these things
- Don’t “wait and see” or leave the new token/app connection active while you investigate.
- Don’t delete logs, alerts, or evidence (you may need them to understand scope and persistence).
- Don’t rotate everything at once if it will break access or lock you out—keep one known-good admin path working.
- Don’t reuse old passwords or “minor variations” of a password you’ve used before.
- Don’t keep doing admin/security actions from a device you suspect is compromised.

## What to do now
1. **Get to a safer control point.**  
   If you can, switch to a different (known-clean) device and sign in by typing the service address yourself (avoid links in messages).

2. **Revoke the specific things you didn’t create (first).**  
   - Revoke/disable the new access token(s) and API key(s).  
   - Remove the unknown connected app(s) / OAuth authorisations.  
   - If this is a work system, contact your admin/IT/security contact and ask them to revoke your sessions/access while you stay on the call/chat.

3. **Invalidate sessions so the attacker is kicked out.**  
   Use options like **“sign out of all devices”**, **“revoke sessions”**, or **“log out everywhere.”** (This matters because tokens/sessions can keep working even after a password change.)

4. **Secure your email/SSO account (because it resets everything else).**  
   - Change the email/SSO password.  
   - Check for **mail forwarding**, **inbox rules/filters**, and **recovery email/phone** changes you didn’t make.  
   - Turn on **2-step verification** for email/SSO if it isn’t already on.

5. **Secure the affected platform account.**  
   - Set a new, unique password.  
   - Turn on 2-step verification (prefer an authenticator app or security key if available).  
   - Review trusted devices/sessions and remove anything unfamiliar.

6. **Pause anything that could keep leaking secrets.**  
   If you have automation (CI/CD, build agents, scripts, integrations): pause deployments and disable affected pipelines/integrations until secrets are rotated and you’ve checked for malicious changes.

7. **Rotate credentials in a controlled order (second wave).**  
   Prioritise anything with broad or money/data access: cloud access keys, production database credentials, deploy keys, payment/finance integrations, and any “admin” API keys. Replace with new credentials and update dependent services one by one to avoid outages.

8. **Check audit/activity logs for persistence and scope.**  
   Look for: new users, new MFA methods, new SSH keys, permission/role changes, new webhook destinations, changes to billing/payout settings, or disabled alerts. Save screenshots/exports if available.

9. **If personal data might be involved, start breach triage early.**  
   For organisations: record a simple timeline (what you saw, when you saw it, what you changed). If you believe a personal data breach may be notifiable, the UK process commonly involves reporting to the ICO within 72 hours of becoming aware (even if details are still emerging).

## What can wait
- Determining the exact initial cause (phishing vs reused password vs stolen session/token vs malicious OAuth consent).
- Writing a perfect report. A simple timeline and screenshots/log exports are enough for now.
- Long-term improvements (secret managers, policy redesign). Stabilise first.

## Important reassurance
Attackers often create tokens or connect apps so they can come back even after you change a password. Revoking tokens/app access and invalidating sessions is the fastest way to cut them off, and it’s normal to need a second pass after you review logs.

## Scope note
These are first steps to regain control and reduce harm. If production systems, customer data, or money-moving accounts were reachable, you may need deeper investigation and specialist support.

## Important note
This guide is general information, not legal or professional advice. If this involves a workplace, regulated data, or significant customer impact, follow your organisation’s incident process and get appropriate professional support.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://www.ncsc.gov.uk/files/recovering-hacked-accounts-infographics.pdf
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/
- https://ico.org.uk/for-organisations/advice-for-small-organisations/personal-data-breaches/72-hours-how-to-respond-to-a-personal-data-breach/
- https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret
- https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization