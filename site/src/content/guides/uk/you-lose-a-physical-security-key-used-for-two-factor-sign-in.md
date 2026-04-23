---
title: "What to do if… you lose a physical security key used for two-factor sign-in"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "lost security key"
  - "lost yubikey"
  - "lost titan key"
  - "lost fido2 key"
  - "lost u2f key"
  - "what do i do if i lost my yubikey"
  - "what do i do if my security key is missing"
  - "what do i do if i lost my google titan key"
  - "what do i do if my fido2 key is stolen"
  - "help i lost my 2fa hardware key"
  - "help i cannot find my security key"
  - "help i am locked out of my account"
  - "help i lost my work security key"
  - "missing hardware token"
  - "broken security key"
  - "stolen yubikey"
  - "security key pin blocked"
  - "account recovery without security key"
  - "remove lost key from google account"
  - "remove lost key from microsoft account"
  - "lost physical 2fa device"
  - "fido2 credential removal"
  - "unauthorized login risk"
  - "lost security key in public"
  - "lost security key at home"
  - "hardware security key lost"
  - "lost 2fa key"
  - "security key missing"
  - "lost security key help"
  - "physical security key missing"
last_reviewed: "2026-03-17"
---
# What to do if… you lose a physical security key used for two-factor sign-in (UK)

## Short answer
Use an alternative sign-in method (such as an authenticator app or backup codes) to access your accounts and immediately delete the missing key from your security settings; if it is a work key, notify your IT department to revoke the credential.

## Do not do these things
- Don't delay the removal of the key from your accounts while searching for it if it was lost in a public space.
- Don't disable multi-factor authentication (MFA) entirely; remove the lost key while keeping other secondary methods active.
- Don't attempt multiple failed login attempts if you are locked out, as this may trigger a security lockdown.
- Don't share recovery codes or account security screenshots with anyone claiming to be "support" who contacted you first.
- Don't purchase replacement keys from unverified third-party sellers or used-market platforms.

## What to do now
1. **Identify if the key is "likely found" or "lost in public."**
   Treat any key missing outside of a known secure environment (home or locked office) as compromised, even if a FIDO2 PIN is enabled.

2. **Access your primary accounts using a backup verification method.**
   Sign in using one of your other registered methods in this order of priority:
   - A backup physical security key.
   - A registered authenticator app (e.g., Microsoft Authenticator, Google Authenticator).
   - A set of one-time recovery codes (printed or saved offline).
   - SMS or voice verification (only if no other method is available).

3. **Delete the missing security key from your account's security settings.**
   Navigate to the "Security," "Two-Step Verification," or "Passkeys" section of each service and **remove the specific entry** for the lost key.

4. **Revoke "trusted devices" and sign out of active sessions.**
   Select the option to **"Sign out of all other sessions"** or "Revoke trusted status" for all devices; this ensures that the lost key cannot be bypassed by anyone accessing an already-logged-in browser.

5. **Change your account password if the key was lost with your login credentials.**
   If the key was lost alongside a written password, a laptop, or an unlocked phone, **update your password immediately** after removing the key.

6. **Report lost work or school keys to your IT helpdesk immediately.**
   Contact your organisation’s official support channel and state: **"I have lost a physical FIDO2 security key."** 
   - Request the administrator to revoke the specific key credential in the management console (e.g., Microsoft Entra ID or Google Workspace).
   - Follow the organisation's 2026 NCSC-aligned protocol for credential replacement.

7. **Initiate official account recovery if you are completely locked out.**
   Use the "Try another way" or "Account Recovery" link on the login page.
   - Note that Google and Microsoft may impose a **3 to 5-day security delay** before granting access if you lack a backup MFA method.

## What can wait
- Purchasing and registering a replacement key (secure your accounts first).
- Updating your entire security strategy or switching MFA providers.
- Notifying service providers for low-risk accounts that do not contain personal or financial data.
- Performing a full security audit of your secondary accounts.

## Important reassurance
A physical security key is extremely difficult for a stranger to use without your specific account password or the key's local PIN. By removing the key from your account settings, you effectively "de-authorise" the hardware, making it useless to anyone who finds it.

## Scope note
This guide provides first-step stabilization for individual and organisational account security. It does not cover deep forensic analysis or hardware-level encryption recovery.

## Important note
This information is for general guidance and does not constitute professional IT or legal advice. Recovery procedures are subject to the terms and security policies of individual service providers (e.g., Google, Microsoft, Apple) and your specific employer’s IT policies.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/setting-2-step-verification-2sv
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://support.google.com/accounts/answer/9153624?hl=en
- https://support.google.com/accounts/answer/185834?hl=en
- https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
