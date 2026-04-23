---
title: "What to do if… you receive an eSIM activation message or QR code you did not request"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "unexpected access token"
  - "unknown api key created"
  - "new app connection i did not create"
  - "suspicious oauth app"
  - "unknown third party app access"
  - "account token compromise"
  - "api credentials leak"
  - "developer account hacked"
  - "cloud console suspicious activity"
  - "github token created without me"
  - "new integration appeared"
  - "unauthorized app authorization"
  - "strange connected apps"
  - "someone has access token"
  - "security keys and tokens issue"
  - "new credentials in dashboard"
  - "token created overnight"
  - "suspicious login and token"
  - "what do i do if unknown api key"
  - "what do i do if suspicious app connection"
  - "what do i do if unauthorized oauth"
  - "what do i do if account compromised by token"
  - "help i see new api keys"
  - "help i see unauthorized app access"
  - "help i have a suspicious oauth app"
  - "help my github token was created by someone else"
  - "my account has unknown integrations"
  - "my api dashboard has new keys"
  - "smell of burning plastic"
  - "visible alert badge"
  - "email notification for new token"
  - "unauthorized developer app"
  - "unknown webhook"
  - "unrecognized service account"
  - "strange session in activity log"
  - "api key mislabel"
  - "oauth app mispelling"
  - "token leak in public repo"
  - "compromised dev environment"
  - "mcp server configuration token"
last_reviewed: "2026-03-17"
---
# What to do if… you receive an eSIM activation message or QR code you did not request (USA)

## Short answer
Revoke the unauthorized tokens and app connections immediately, invalidate all active sign-in sessions, and then secure the primary identity or email account used to manage those credentials.

## Do not do these things
- Do not leave the unauthorized token or connection active to monitor the attacker's behavior.
- Do not click links in security alert emails; navigate to the platform by typing the address directly into your browser.
- Do not delete audit logs, history entries, or alert notifications that document the creation of these items.
- Do not perform remediation from a device you suspect is currently infected with malware or a keylogger.
- Do not assume that changing your password alone will stop an attacker who has a persistent refresh token or OAuth connection.

## What to do now
1. **Access the account from a known-secure control point.**  
   **Use a different, clean device and type the platform's URL directly into the browser to avoid phishing redirects.**
2. **Revoke all unauthorized credentials and connections.**  
   **Delete every API key, access token, or service account that you do not recognize as your own.**
   - Navigate to the "Authorized Apps," "Connected Services," or "OAuth Integrations" menu and remove any unknown third-party applications.
   - Check for and remove any new webhooks or automated notification endpoints.
3. **Invalidate all active sessions across the platform.**  
   **Use the "Revoke sessions," "Sign out everywhere," or "Log out of all devices" command to kick out current users.**
   - For Microsoft Entra ID (formerly Azure AD) accounts, use the unified "Revoke sessions" button in the admin center to invalidate all refresh tokens and MFA claims.
4. **Secure the master email or Single Sign-On (SSO) account.**  
   **Update the password for your primary identity provider and ensure Multi-Factor Authentication (MFA) is active and using a non-SMS method like an authenticator app or hardware key.**
   - Verify that no new recovery emails, secondary phone numbers, or "trusted devices" have been added to your profile.
5. **Rotate secondary secrets that may have been exposed.**  
   **Identify any production credentials, cloud provider access keys, or payment processor secrets that the compromised token could have accessed and replace them with new values.**
   - Update your CI/CD pipelines, configuration files, and environment variables carefully to ensure service continuity.
6. **Audit for persistence mechanisms and data export.**  
   **Review account logs for the creation of new users, changes to permission roles (e.g., adding an "Admin" role), or changes to billing and payout information.**
   - Look for recently added SSH keys in developer environments or new "Member" additions to organizations and teams.
7. **Report identity risk if personal data was reachable.**  
   **Visit IdentityTheft.gov to create a recovery plan if the compromised account contained Social Security numbers, financial data, or sensitive PII.**
   - Contact your bank or credit card issuer using the official number on the back of your card if financial account tokens were among the compromised items.

## What can wait
- Determining the exact initial entry vector (e.g., whether it was a phishing site or a leaked cookie) does not need to happen before containment.
- Redesigning your entire secret management architecture or migrating to a new vault provider.
- Drafting a formal incident report or public disclosure statement can wait until the account is stabilized and the scope is understood.

## Important reassurance
It is common for attackers to create a secondary "backdoor" like a token or an app connection specifically so they can stay in the account after you change your password. Discovering these items is a sign that your monitoring is working, and revoking them is the correct standard procedure to stop persistent access.

## Scope note
This guide provides first-step stabilization only. If the unauthorized access involved regulated customer data, financial systems, or large-scale production environments, additional professional incident response or legal counsel may be required.

## Important note
This information is for general guidance and does not constitute legal, technical, or professional security advice. Digital security requirements vary significantly by jurisdiction and platform; always refer to your organization's specific security policies and the official documentation provided by your service providers.

## Additional Resources
- https://consumer.ftc.gov/consumer-alerts/2019/10/sim-swap-scams-how-protect-yourself
- https://www.fbi.gov/contact-us/field-offices/phoenix/news/press-releases/fbi-tech-tuesday-sim-swapping
- https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts
- https://consumer.ftc.gov/consumer-alerts/2024/03/whats-verification-code-why-would-someone-ask-me-it
- https://www.ic3.gov/CrimeInfo/AccountTakeover
