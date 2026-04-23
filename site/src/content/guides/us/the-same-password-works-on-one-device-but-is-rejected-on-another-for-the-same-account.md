---
title: "What to do if… the same password works on one device but is rejected on another for the same account"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "password works on phone not computer"
  - "password works on one device only"
  - "same password rejected elsewhere"
  - "login works on one device"
  - "can’t sign in on new device"
  - "incorrect password but it’s right"
  - "app login fails browser works"
  - "browser login fails app works"
  - "password manager autofill wrong"
  - "keyboard layout issue login"
  - "caps lock shift key issue"
  - "too many attempts lockout"
  - "two factor code not working"
  - "suspicious login blocked"
  - "device time wrong sign in fails"
  - "saved password outdated"
  - "wrong password error"
  - "sign in rejected other device"
  - "possible account compromise"
  - "help i cannot sign in"
  - "help i am locked out"
  - "what do i do if my password is rejected"
  - "what do i do if my account is blocked"
  - "what do i do if login fails"
  - "what do i do if password is correct but fails"
  - "smell of burning computer"
  - "visible account activity"
  - "unusual security alert"
  - "rejected login notification"
  - "pasted password error"
  - "autofill credential mismatch"
  - "wrong username error"
  - "account recovery blocked"
  - "trusted device sign in"
  - "device sync issue login"
last_reviewed: "2026-03-17"
---
# What to do if… the same password works on one device but is rejected on another for the same account (USA)

## Short answer
Stop all login attempts on the failing device immediately to prevent a 24-48 hour security lockout. Use the device that currently works to verify your login identifier, update security settings, and approve the new device sign-in.

## Do not do these things
- Don’t keep entering the password — most services (Google, Microsoft, Apple) will trigger a hard 48-hour lockout after 5-10 failed attempts.
- Don’t trust "help" from social media, unsolicited direct messages, or phone numbers found in pop-up "security alerts."
- Don’t provide your one-time verification codes (MFA/2FA) to anyone, even if they claim to be from the provider's support team.
- Don’t assume the password is wrong; it is often a device-side cache, network block, or system-time mismatch.

## What to do now
1. **Stop all attempts on the failing device**
   - **Close the app or browser tab** where the error occurred.
   - **Wait at least 60 minutes** before trying again if you have already seen a "too many attempts" or "incorrect password" message.

2. **Verify your credentials on the working device**
   - **Check the exact username or email address** currently logged in. Look for subtle typos (e.g., .com vs .net) or alias differences.
   - **Navigate to the "Security" or "Login Activity" dashboard** to see if the provider has flagged the other device as a "suspicious attempt" that needs manual approval.
   - **Confirm if "App-Specific Passwords" are required.** If you are using a third-party app (like Apple Mail for a Gmail account), the service may reject your main password and require a unique 16-character code generated from your security settings.

3. **Secure the account from the trusted device**
   - **Change your password** to a new, unique phrase if you suspect the password has been compromised.
   - **Update your Multi-Factor Authentication (MFA)** settings to ensure your recovery phone number and secondary email are current.
   - **Generate a set of "Backup Codes"** and save them offline; these will bypass most device-specific rejection issues.

4. **Prepare the failing device for a clean login**
   - **Check the system date and time.** If the device clock is off by more than one minute, secure tokens will be rejected as "expired." Set "Set time automatically" to ON.
   - **Clear the credential cache.** Delete the saved password entry from the browser settings (Chrome/Safari) AND the system keychain (Windows Credential Manager or macOS Keychain Access).
   - **Disable VPNs or Proxies.** Security systems often block login attempts coming from unrecognized IP addresses or data centers.

5. **Execute a "clean" sign-in attempt**
   - **Open an Incognito or Private window** to bypass corrupted cookies.
   - **Manually type the password** character-by-character. Do not use copy-paste, as this can include invisible spaces or newline characters.
   - **Check for "Sign in with..." options.** If you usually use a Google or Apple ID to sign in to a third-party site, ensure you aren't accidentally trying to use a separate site-specific password.

6. **Address potential fraud or identity theft**
   - **Review "Authorized Devices"** on your account; remove any browsers or phones you do not own.
   - **Report suspected identity theft** at IdentityTheft.gov if you see unauthorized changes to your recovery information.
   - **Report fraudulent activity** to the Federal Trade Commission (FTC) via ReportFraud.ftc.gov if you were targeted by a phishing scam.

## What can wait
- You do not need to factory reset your hardware right now.
- You do not need to change passwords for every other unrelated account unless you have reused this specific password elsewhere.
- You do not need to contact the manufacturer of the device (Apple/Dell/Samsung) unless the account itself is tied to their system.

## Important reassurance
A password being rejected on one device while working on another is a common security feature designed to protect you. It usually means the service is being "cautious" about the new location or device. Most of these blocks resolve automatically once you verify the attempt from your "trusted" device.

## Scope note
This guide is for first-step stabilization of digital account access in the USA. It covers common service providers (Google, Microsoft, Apple, Yahoo) and is intended to prevent account lockouts and mitigate immediate security risks.

## Important note
This information is for general guidance and does not constitute professional cybersecurity or legal advice. Recovery procedures vary by provider and may change. If your account involves sensitive financial data or evidence of a crime, consider contacting local law enforcement or your financial institution's fraud department.

## Additional Resources
- https://support.google.com/accounts/answer/7682439?hl=en
- https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en
- https://support.apple.com/en-us/101567
- https://support.apple.com/en-us/102608
- https://support.microsoft.com/en-us/windows/credential-manager-in-windows-1b5c916a-6a16-889f-8581-fc16e8165ac0
