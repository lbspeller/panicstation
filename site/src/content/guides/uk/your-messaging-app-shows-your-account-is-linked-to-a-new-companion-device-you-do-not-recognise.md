---
title: "What to do if… your messaging app shows your account is linked to a new companion device you do not recognise"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "password manager not unlocking"
  - "password vault wont open"
  - "cant access saved logins"
  - "locked out of password manager"
  - "forgot master password"
  - "master password not working"
  - "password manager stuck loading"
  - "password manager app broken"
  - "password manager sync not working"
  - "cant get into 1password"
  - "cant unlock bitwarden"
  - "cant access lastpass vault"
  - "icloud passwords not accessible"
  - "google password manager locked out"
  - "lost two factor codes"
  - "lost authenticator access"
  - "emergency access password manager"
  - "recovery code not found"
  - "cant reset passwords quickly"
  - "password manager says wrong password"
  - "vault recovery key lost"
  - "master password hint not working"
  - "what do i do if my password manager is locked"
  - "what do i do if i forgot my master password"
  - "what do i do if my vault wont open"
  - "what do i do if 1password wont accept my password"
  - "help i cant get into my password vault"
  - "help i lost my password manager recovery code"
  - "my password manager app is frozen"
  - "my bitwarden master password is not working"
  - "red banner on login screen"
  - "unexpected mfa prompt on phone"
  - "invalid master password error"
  - "cannot reach sync server"
  - "forgotten master password"
  - "frozen login screen"
  - "wrong master password"
last_reviewed: "2026-03-17"
---
# What to do if… your messaging app shows your account is linked to a new companion device you do not recognise (UK)

## Short answer
Stop attempting random passwords to avoid permanent lockout or data corruption. Verify your device time, check for service outages, and attempt access through a secondary device or the web vault before using official recovery codes.

## Do not do these things
- Don't uninstall the app or clear browser data yet; if your vault is not synced to the cloud, this may delete the only remaining encrypted copy of your data.
- Don't click on sponsored search results for "Password Manager Support" as these are frequently used by scammers to harvest master passwords.
- Don't repeatedly enter incorrect passwords in rapid succession; many managers use "key stretching" which makes each attempt slower and can eventually trigger a hard lockout.
- Don't share your recovery PDF, Secret Key, or QR codes with anyone claiming to be "support" over the phone or social media.
- Don't attempt to "reset" the vault until you have confirmed that no other logged-in device (like an old tablet or work laptop) has access.

## What to do now
1. **Stabilize the device and check hardware inputs.** Ensure your device is plugged in, Caps Lock is off, and you are using the correct keyboard language layout (e.g., UK vs US English).
2. **Verify the system time and internet connection.** Check that your device date and time are set to "Automatic," as a mismatch of even a few minutes can cause multi-factor authentication (MFA) and encryption handshakes to fail.
3. **Attempt access via an alternative "path" to isolate the fault.** Try to log in through the official web vault in a private / incognito browser window, or check a secondary device where you are already signed in.
   - If the web vault works but the app doesn't, the issue is local to the device.
   - If no devices work, the issue is likely account-wide or a provider outage.
4. **Check the official service status page for your provider.** Search for the name of your password manager plus "status" (e.g., "1Password Status" or "Bitwarden Status") to see if there is a known server-side issue.
5. **Locate and use your official recovery materials.** Find the physical or digital "Emergency Kit," "Recovery Key," or "Master Password Hint" you were prompted to save when creating the account.
   - **For 1Password:** Use the "Secret Key" found on your Emergency Kit PDF.
   - **For Bitwarden:** Use the "Recovery Code" if you have lost your 2FA device.
   - **For LastPass:** Use the "Password Hint" email or attempt "Mobile Account Recovery" if you previously enabled biometrics.
   - **For Google/iCloud:** Follow the standard OS-level account recovery process for your Google or Apple ID.
6. **Request help from an administrator if you are on a Family or Business plan.** Contact the "Family Organizer" or your company IT admin, as they can often trigger a secure "Account Recovery" process that allows you to reset your password without losing vault data.
7. **Secure your primary email account immediately.** Since most recovery paths involve email, ensure your email password is unique and that MFA is active on that account specifically.
8. **Report suspected criminal activity if you believe you have been hacked.** If you notice money missing or receive unexpected MFA prompts, take the following steps:
   - **England, Wales, and Northern Ireland:** Report to **Report Fraud** online at `reportfraud.police.uk` or call **0300 123 2040**.
   - **Scotland:** Report to **Police Scotland** by calling **101**.
   - **Suspicious messages:** Forward suspicious emails to `report@phishing.gov.uk` and scam texts to `7726`.

## What can wait
- You do not need to choose a new password manager provider immediately.
- You do not need to change every single password in your vault once you regain access; focus only on high-value accounts (email, banking).
- You can wait to perform a full malware scan until after you have secured your primary email.

## Important reassurance
Regaining access to a password manager is often a matter of finding the right "entry point" (such as a forgotten secondary device or a cached web session). Panic often leads to "resetting" accounts too early; taking a few minutes to look for your original recovery codes can prevent permanent data loss.

## Scope note
This guide covers immediate stabilization and recovery paths for commercial password managers. It does not provide technical instructions for "cracking" or bypassing encryption, which is generally impossible by design in zero-knowledge systems.

## Important note
This information is for general guidance and does not constitute professional technical or legal advice. Recovery options are strictly limited by the specific security model of your chosen provider. If you cannot produce a master password or recovery key, the provider may be unable to retrieve your data due to zero-knowledge encryption.

## Additional Resources
- https://www.ncsc.gov.uk/news/ncsc-warns-of-messaging-app-targeting
- https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online
- https://faq.whatsapp.com/378279804439436
- https://faq.whatsapp.com/834124628020911
- https://faq.whatsapp.com/1428782138011916
