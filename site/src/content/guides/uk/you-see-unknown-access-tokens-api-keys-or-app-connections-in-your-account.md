---
title: "What to do if… you see unknown access tokens, API keys, or app connections in your account"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "unexpected access token"
  - "unknown api key created"
  - "new app connection"
  - "suspicious oauth app"
  - "unknown third party app"
  - "account token compromise"
  - "api credentials leak"
  - "developer account hacked"
  - "cloud console suspicious activity"
  - "repository token created"
  - "new integration appeared"
  - "unauthorised app authorisation"
  - "strange connected apps"
  - "someone has access token"
  - "new credentials in dashboard"
  - "what do i do if api keys appear"
  - "what do i do if tokens appear"
  - "what do i do if apps connect"
  - "what do i do if credentials appear"
  - "help i found an unknown token"
  - "help i see an api key"
  - "help i have suspicious app access"
  - "help i found connected apps"
  - "my developer account has tokens"
  - "my cloud account has new keys"
  - "my code account has unknown tokens"
  - "my app dashboard changed"
  - "token created overnight"
  - "api key created overnight"
  - "new oauth consent"
  - "unknown webhook destination"
  - "new mfa method added"
  - "mail forwarding appeared"
  - "session still active"
  - "phishing or stolen session"
  - "reused password or token theft"
  - "malicious oauth consent"
  - "work account suspicious token"
  - "personal developer account token"
  - "unkown api key created"
  - "suspicous app connection"
last_reviewed: "2026-05-20"
date_created: "2026-05-20"
---

# What to do if… you see unknown access tokens, API keys, or app connections in your account (UK)

## Short answer
Assume the account may still be accessible to someone else. Revoke the unknown tokens, API keys, and app connections first, then secure the email or SSO account that can reset access.

## Do not do these things
- Don’t leave the new token, API key, or app connection active while you investigate.
- Don’t delete logs, alerts, emails, or screenshots that could help you work out what happened.
- Don’t rotate everything at once if that could break production or lock out the only known-good administrator.
- Don’t reuse old passwords or small variations of passwords you have used before.
- Don’t keep doing admin or security work from a device you reasonably suspect is compromised.

## What to do now
1. **Move to a safer control point.**  
   Use a different device if you have one that you trust. Type the service address yourself rather than following links in emails, chats, or alerts.

2. **Revoke the specific access you did not create.**  
   Disable or revoke the unknown access token, API key, deploy key, app connection, OAuth authorisation, webhook, or integration. If this is a work system, contact your IT or security contact and ask them to revoke the access while you stay in contact.

3. **Force sessions and apps to sign out where the service allows it.**  
   Use options such as “sign out of all devices”, “revoke sessions”, “log out everywhere”, or “remove trusted devices”. Some sessions, app grants, and tokens may keep working unless they are separately revoked.

4. **Secure the email or SSO account that controls resets.**  
   Change the email or SSO password to a new unique password. Check for mail forwarding, inbox rules, filters, recovery email changes, recovery phone changes, and new sign-in methods you did not add. Turn on 2-step verification if it is not already on.

5. **Secure the affected platform account.**  
   Change its password if it has one. Turn on 2-step verification, preferably with an authenticator app or security key where available. Remove unfamiliar trusted devices, active sessions, SSH keys, passkeys, recovery codes, and MFA methods.

6. **Pause automation that could use the affected credentials.**  
   If the token, key, or app connection could affect CI/CD, build agents, scripts, cloud jobs, deployment tools, or integrations, pause the affected automation until the credentials are revoked or rotated and the configuration has been checked.

7. **Rotate replacement credentials in a controlled order.**  
   Start with credentials that can reach production, customer data, admin functions, billing, payments, databases, cloud resources, or deployment systems. Create replacements, update dependent services one by one, test that they work, then remove the old credentials.

8. **Check logs for other ways back in.**  
   Look for new users, new roles, permission changes, new MFA methods, new SSH keys, new webhook destinations, new app installations, changed billing or payout settings, disabled alerts, and logins from unfamiliar places or times. Save screenshots or exports if the service allows it.

9. **If personal data may have been accessed, start a simple breach log.**  
   Record what you saw, when you saw it, what systems may have been reachable, what you revoked, and who you told. For an organisation, assess whether this is a notifiable personal data breach; where notification is required, the ICO expects notification without undue delay and not later than 72 hours after becoming aware of the breach, where feasible, even if full details are not yet known.

## What can wait
You do not need to decide the exact cause right now, such as phishing, reused password, stolen session, leaked token, or malicious app consent. You do not need a perfect report before you revoke access. Long-term improvements such as secret managers, policy redesign, and access reviews can wait until the immediate access paths are closed.

## Important reassurance
Finding an unknown token or app connection is alarming, but it also gives you something concrete to remove. Revoking unknown access, signing out sessions, and securing the reset account are strong first steps that reduce the chance of further harm while you work out the scope.

## Scope note
These are first steps to regain control and reduce immediate harm. Later decisions about forensic investigation, customer notification, legal duties, insurance, contracts, or regulator contact may need specialist help.

## Important note
This guide is general information, not legal, technical, financial, therapeutic, or other professional advice. If this involves a workplace system, personal data, customer impact, production infrastructure, or money-moving access, follow your organisation’s incident process and get appropriate professional support.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://www.ncsc.gov.uk/files/recovering-hacked-accounts-infographics.pdf
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/
- https://ico.org.uk/for-organisations/advice-for-small-organisations/personal-data-breaches/72-hours-how-to-respond-to-a-personal-data-breach/
- https://docs.github.com/en/code-security/tutorials/remediate-leaked-secrets/remediating-a-leaked-secret
- https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization
