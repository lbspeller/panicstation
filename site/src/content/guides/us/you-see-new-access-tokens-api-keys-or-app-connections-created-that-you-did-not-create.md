---
title: "What to do if… you see new access tokens, API keys, or app connections created that you did not create"
jurisdiction: "USA"
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

# What to do if… you see new access tokens, API keys, or app connections created that you did not create (USA)

## Short answer
Treat this as an active account compromise: revoke the unknown tokens/app connections immediately, revoke active sessions, then secure your email/SSO and rotate any keys that could access important systems.

## Do not do these things
- Don’t leave the new token or app connection in place “just to monitor.”
- Don’t click “security alert” links you weren’t expecting—log in directly by typing the site address.
- Don’t rotate everything in a panic if it will break access and lock you out; keep one known-good admin path working.
- Don’t wipe logs or delete alerts; keep a record of what you saw and when.
- Don’t keep using a device you suspect has malware for admin actions.

## What to do now
1. **Move to a safer control point.**  
   If possible, use a different (known-clean) device and sign in by typing the site address yourself (not from an email link).

2. **Revoke what you didn’t create (immediately).**  
   - Revoke/delete the new access token(s) and API key(s).  
   - Remove/disable the unknown connected app(s) / OAuth grants.  
   - If this is a work system, contact IT/security and ask for emergency access revocation and session invalidation while you’re on the line.

3. **Invalidate sessions so the attacker is kicked out.**  
   Use features like **“revoke sessions,” “sign out of all devices,”** or **“log out everywhere.”** If you have an identity admin (Microsoft Entra, etc.), use the emergency “revoke user access” approach.

4. **Lock down the email/SSO account tied to these services.**  
   Email/SSO is the master key for resets.  
   - Change the email/SSO password and enable MFA.  
   - Check forwarding, filters/rules, recovery email/phone changes, and any unfamiliar trusted devices.

5. **Reset the affected platform’s sign-in and verify identity settings.**  
   - Set a new, unique password.  
   - Enable MFA (prefer authenticator app, passkey, or hardware key if offered).  
   - Review recent sign-ins and remove unknown devices/sessions.

6. **Pause anything that could keep leaking secrets.**  
   If you have CI/CD, build agents, scripts, or integrations: pause deployments and disable affected pipelines/integrations until secrets are rotated and you’ve checked for malicious changes.

7. **Rotate credentials that might already be copied (second wave).**  
   Prioritize: cloud access keys, CI/CD secrets, production credentials, payment processor keys, and admin API keys. Replace them with new credentials and update dependent services carefully to avoid outages.

8. **Audit for persistence and damage.**  
   Check logs for: new users, new MFA methods, new SSH keys, permission/role changes, new webhooks, new billing/payout settings, or disabled security alerts. Save screenshots/exports.

9. **If identity fraud or financial abuse is possible, use the official recovery/reporting route.**  
   - If you see suspicious bank/card activity: contact your bank/payment provider using the number on your card/statement.  
   - If identity theft is a concern (new accounts, tax issues, credit impacts): use **IdentityTheft.gov** for an official FTC recovery/reporting path.

## What can wait
- Determining the exact initial cause (phishing, password reuse, stolen session cookie, malicious OAuth consent).
- Re-architecting how secrets are stored across your org. Stabilize first.
- Public communication. For now, focus on containment and records.

## Important reassurance
Attackers often create tokens or connect apps specifically to survive password changes. Revoking tokens/app access and invalidating sessions is the fastest way to cut them off, and it’s normal to need a second pass after you review logs.

## Scope note
This is immediate containment and control. If production systems, customer data, or significant funds were reachable, you’ll likely need deeper investigation and possibly professional incident response support.

## Important note
This guide is general information, not legal or professional advice. If this involves regulated data, customer impact, or substantial financial risk, follow your organization’s policies and consult appropriate professionals.

## Additional Resources
- https://consumer.ftc.gov/how-recover-your-hacked-email-or-social-media-account
- https://www.identitytheft.gov/
- https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access
- https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret
- https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization