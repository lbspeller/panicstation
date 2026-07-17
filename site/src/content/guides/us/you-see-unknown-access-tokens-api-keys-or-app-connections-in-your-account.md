---
title: "What to do if… you see unknown access tokens, API keys, or app connections in your account"
seo_title: "Unknown access tokens or API keys in account"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "unexpected access token"
  - "unknown api key"
  - "new app connection"
  - "suspicious oauth app"
  - "unknown third-party access"
  - "account token compromise"
  - "api credentials leak"
  - "developer account hacked"
  - "cloud console suspicious activity"
  - "unauthorized app authorization"
  - "what do i do if access tokens appeared"
  - "what do i do if api keys appeared"
  - "what do i do if an app connected itself"
  - "what do i do if oauth access appeared"
  - "help i found unknown tokens"
  - "help i found an api key"
  - "help i see suspicious connected apps"
  - "help i think my developer account was hacked"
  - "my api key was created"
  - "my account has unknown app access"
  - "new credentials in dashboard"
  - "token created overnight"
  - "strange connected apps"
  - "suspicious login and token"
  - "new oauth consent"
  - "unknown trusted device"
  - "new webhook appeared"
  - "new ssh key appeared"
  - "new mfa method appeared"
  - "api key or password"
  - "oauth app or malware"
  - "session cookie stolen"
  - "acess token appeared"
  - "unkown api key"
last_reviewed: "2026-07-17"
date_created: "2026-06-23"
---

# What to do if… you see unknown access tokens, API keys, or app connections in your account (USA)

## Short answer
Treat this as a possible active account compromise: revoke the unknown tokens, API keys, or app connections immediately, sign out active sessions where available, then secure the email or single sign-on account, often called SSO, that controls resets.

## Do not do these things
- Don’t leave the new token, API key, or app connection in place “just to monitor.”
- Don’t click security-alert links you weren’t expecting; sign in by typing the site address yourself or using a saved bookmark.
- Don’t rotate everything in a panic if it will break access and lock you out; keep one known-good admin path working.
- Don’t wipe logs, delete alerts, or remove audit records.
- Don’t use a device you suspect has malware for admin actions if another known-clean device is available.
- Don’t assume a password change alone removes tokens, app grants, sessions, or copied API keys.

## What to do now
1. **Move to a safer control point.**  
   Use a known-clean device if you can. Sign in directly to the affected service, identity provider, cloud console, code host, or admin dashboard.

2. **Revoke what you did not create.**  
   Delete or revoke the unknown access tokens and API keys. Remove the unknown connected apps, OAuth grants, integrations, or third-party app access. If this is a work system, contact IT or security and ask them to revoke the access while you are on the call.

3. **Kick out active access where the platform allows it.**  
   Use controls such as “sign out of all devices,” “revoke sessions,” “log out everywhere,” or “revoke user access” where available. If your organisation uses SSO, ask the identity administrator to revoke access in both the identity provider and the affected application, because some app sessions may need to be ended inside the app itself.

4. **Secure the email or SSO account tied to the affected services.**  
   Change the email or SSO password from a clean device. Turn on multi-factor authentication, often called MFA, if it is not already on. Check recovery email, recovery phone, forwarding rules, filters, trusted devices, app passwords, and new MFA methods, then remove anything you do not recognise.

5. **Reset the affected platform’s sign-in settings.**  
   Set a new, unique password if the platform uses one. Turn on MFA, preferably a passkey, authenticator app, or hardware security key if offered. Review recent sign-ins and remove unknown devices, sessions, SSH keys, deploy keys, webhooks, and app passwords.

6. **Pause systems that could keep leaking or deploying secrets.**  
   If CI/CD, build agents, scripts, bots, webhooks, or integrations use the affected credentials, pause the risky jobs or integrations until the unknown access is removed and the secrets are replaced.

7. **Rotate credentials that may already have been copied.**  
   Prioritise cloud access keys, CI/CD secrets, production credentials, payment processor keys, deploy keys, and admin API keys. Where a service depends on a key, create the replacement, update the dependent service, confirm it works, then disable or delete the old credential as soon as it is safe.

8. **Check for persistence and damage.**  
   Look for new users, new admin roles, changed permissions, new MFA methods, new SSH keys, new webhooks, changed billing or payout settings, disabled alerts, changed security policies, and unusual API or repository activity. Save screenshots or exports of what you found.

9. **Use official recovery routes if financial abuse or identity theft may be involved.**  
   If you see suspicious bank, card, payment, or payout activity, contact the bank or payment provider using a number from your card, statement, or official app. If identity theft is a concern, use the FTC’s IdentityTheft.gov recovery route.

## What can wait
- Working out whether the first cause was phishing, password reuse, a stolen session cookie, a leaked repository secret, malware, or a malicious OAuth consent.
- Redesigning secret storage across the whole organisation.
- Writing a public statement.
- Deciding every long-term security improvement. Contain the access first and keep records.

## Important reassurance
This is exactly the kind of situation where fast, narrow containment helps. Revoking unknown tokens and app grants, ending sessions where possible, and securing email or SSO can cut off access before you fully understand how it happened.

## Scope note
These are first steps only. If production systems, customer data, regulated data, source code, cloud infrastructure, or significant funds were reachable, later decisions may need specialist security, legal, compliance, or incident-response help.

## Important note
This guide is general information and is not legal, medical, financial, therapeutic, cybersecurity, or other professional advice. Follow your organisation’s incident-response process if one applies.

## Additional Resources
- https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account
- https://www.identitytheft.gov/
- https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access
- https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret
- https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization
- https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
- https://docs.cloud.google.com/docs/security/compromised-credentials
