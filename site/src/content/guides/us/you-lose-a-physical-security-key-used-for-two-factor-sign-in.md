---
title: "What to do if… you lose a physical security key used for two-factor sign-in"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "lost security key"
  - "lost yubikey"
  - "lost titan key"
  - "lost fido2 key"
  - "lost u2f key"
  - "help i lost my yubikey"
  - "help i lost my security key"
  - "what do i do if i lost my 2fa key"
  - "what do i do if my security key is stolen"
  - "what do i do if i lost my hardware key"
  - "my security key is missing"
  - "my yubikey is lost"
  - "hardware 2fa key missing"
  - "security key stolen"
  - "misplaced security key"
  - "cannot log in without key"
  - "locked out of account"
  - "two factor key lost"
  - "passkey on security key"
  - "passwordless key login"
  - "work account security key lost"
  - "google security key lost"
  - "microsoft security key lost"
  - "apple account security key lost"
  - "remove security key from account"
  - "recovery codes missing"
  - "second factor device lost"
  - "security key revoked"
  - "fido2 credential missing"
  - "lost usb security token"
  - "lost nfc security key"
  - "lost fido key what to do"
  - "physical security key missing"
  - "yubikey login help"
  - "titan key recovery"
last_reviewed: "2026-03-17"
---
# What to do if… you lose a physical security key used for two-factor sign-in (USA)

## Short answer
Access your protected accounts using a backup method to remove the lost key from your security settings immediately. If the key was for a workplace or school account, notify your IT or security department to revoke the hardware credential.

## Do not do these things
- **Do not delay** removing the key from your accounts to "keep looking" for it if there is a chance it was lost in a public area.
- **Do not disable** Multi-Factor Authentication (MFA) entirely; remove the lost key while keeping other secondary steps (like authenticator apps) active.
- **Do not attempt** repeated login guesses if you are locked out, as this can trigger automated security locks that complicate recovery.
- **Do not provide** backup codes or account details to anyone who contacts you via phone or text claiming to be "support."
- **Do not purchase** replacement hardware from unauthorized third-party resellers.

## What to do now
1. **Identify the risk level based on the location of the loss.**  
   **If the key was lost in a public place, rideshare, or office, treat it as compromised.** If you suspect the key was stolen alongside a device that has your password saved, move to step 2 immediately.

2. **List every account protected by the missing key.**  
   **Prioritize accounts that control access to others**, specifically:
   - Your password manager (e.g., Bitwarden, 1Password).
   - Your primary email (e.g., Gmail, Outlook, iCloud).
   - Your workplace or school Single Sign-On (SSO) portal.
   - Financial, banking, and cryptocurrency accounts.

3. **Log in to your most critical account using a backup verification method.**  
   **Use an alternative second step** such as:
   - A secondary/backup physical security key.
   - An authenticator app code (TOTP).
   - One-time recovery/backup codes (often a list of 8–10 codes printed or saved during setup).
   - A registered passkey on your phone or computer.

4. **Remove the lost security key from the account’s security settings.**  
   **Navigate to the "Security," "2-Step Verification," or "Passkeys" section of the account.** Locate the specific entry for the lost hardware key and select **Remove**, **Delete**, or **Revoke**. 

5. **Force a "Sign Out of All Devices" and update your password.**  
   **Revoke all active sessions** to ensure no one can use a cached login. If the lost key was a "Passkey" (allowing passwordless login), you must also change your account password if the key was lost with your PIN or biometric-capable device.

6. **Repeat the removal process for all remaining accounts on your list.**  
   **Work through your list in order of sensitivity.** Do not stop until the lost key has been deleted from every individual service where it was registered.

7. **Notify your organization's IT department if a work key is missing.**  
   **Contact the helpdesk through official internal channels** to report the loss. They must revoke the FIDO2/WebAuthn credential at the administrative level and may need to issue a Temporary Access Pass (TAP) or a new physical key.

8. **Initiate official account recovery if you have no backup methods.**  
   **Select "Try another way" or "I don't have my security key" on the login screen.** Be prepared for a manual identity verification process which may take 3–5 business days for providers like Google or Microsoft.

## What can wait
- **Ordering a replacement key.** Secure your accounts first; hardware replacement is a secondary step.
- **Updating secondary accounts.** Focus only on high-impact accounts (email, finance, work) in the first hour.
- **Determining the exact cause of loss.** Whether the key was dropped or stolen, the immediate action (removal) remains the same.

## Important reassurance
Physical security keys are highly secure; an unauthorized person cannot typically use the key without also knowing your account password or the local PIN you set for the key. By removing the key from your account settings, you effectively "de-authorize" the physical device so it can no longer be used for future sign-ins.

## Scope note
This guide provides first-step stabilization for a lost physical security key. It does not cover long-term security architecture or the recovery of accounts where no backup MFA methods or recovery codes were established.

## Important note
This information is for general guidance and does not constitute professional IT or legal advice. Security procedures vary significantly between providers (e.g., Google, Microsoft, Apple) and individual employer policies. Always prioritize the official security documentation provided by the service or your organization’s IT security team.

## Additional Resources
- https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts
- https://support.google.com/accounts/answer/9153624?hl=en
- https://support.google.com/accounts/answer/185834?hl=en
- https://support.google.com/accounts/answer/6103523?co=GENIE.Platform%3DAndroid&hl=en
- https://support.microsoft.com/en-us/account-billing/how-to-get-a-microsoft-account-recovery-code-2acc2f88-e37b-4b44-99d4-b4419f610013
