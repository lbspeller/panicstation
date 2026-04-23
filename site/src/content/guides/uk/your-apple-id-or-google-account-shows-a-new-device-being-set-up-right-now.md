---
title: "What to do if… your Apple ID or Google Account shows a new device being set up right now"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "authenticator accounts missing"
  - "2fa codes disappeared"
  - "authenticator app reset after update"
  - "new phone authenticator empty"
  - "lost 2fa app entries"
  - "microsoft authenticator restore"
  - "google authenticator transfer"
  - "authy tokens missing"
  - "two factor app not showing accounts"
  - "cannot log in without codes"
  - "phone change lost authenticator"
  - "update wiped authenticator"
  - "accounts vanished from authenticator"
  - "missing otp accounts"
  - "recovery codes for 2fa"
  - "qr code 2fa re-setup"
  - "locked out after phone upgrade"
  - "suspected sim swap"
  - "authenticator cloud sync failed"
  - "help i lost my 2fa codes"
  - "what do i do if my authenticator is empty"
  - "what do i do if accounts are missing from app"
  - "what do i do if 2fa app reset"
  - "help i cannot see my login codes"
  - "my authenticator accounts are gone"
  - "no codes in authenticator"
  - "otp app showing no accounts"
  - "google auth green cloud icon"
  - "microsoft auth begin recovery"
last_reviewed: "2026-03-17"
---
# What to do if… your Apple ID or Google Account shows a new device being set up right now (UK)

## Short answer
Stop and **do not delete, reset, or reinstall the authenticator app**. Check for built-in restore or cloud-sync options and verify if you still have access to the previous device.

## Do not do these things
- Do not tap "reset", "clear data", or "remove all accounts" within the app settings.
- Do not uninstall the app yet, as this may delete local encryption keys needed for recovery.
- Do not turn off two-factor authentication (2FA) on your main accounts via "help" links in emails; only use official settings menus you have navigated to yourself.
- Do not ignore a sudden loss of mobile signal or "SIM not provisioned" errors occurring at the same time as the app reset.

## What to do now
1. **Identify the sync status of your specific app.**
   - **Google Authenticator:** Look at the top right of the screen. A green cloud icon with a checkmark means your accounts are synced to your Google Account. A gray cloud icon with a slash means codes are only stored on that specific device.
   - **Microsoft Authenticator:** Check if you have a personal Microsoft account linked. Backups are OS-specific: iOS backups require iCloud Drive/Keychain, while Android backups use a Microsoft personal account.
   - **Authy:** Open the "Devices" menu. If "Multi-device" was enabled on a previous phone or tablet, you can authorize the new phone from that device immediately.

2. **Attempt the official recovery path for your app type.**
   - **Microsoft Authenticator:** On the new device, select **Begin recovery** or **Restore from backup** before signing in. You must use the same Microsoft account used for the original backup. Note that you cannot restore an iOS backup to an Android device or vice versa.
   - **Google Authenticator:** Ensure you are signed into the same Google Account. If codes do not appear, use the **Transfer accounts** feature. This requires the old phone to display an export QR code for the new phone to scan.
   - **Authy:** Enter your phone number. If you have an existing backup password, enter it to decrypt the tokens. If you lack another active device and "Multi-device" is off, you must use the Authy **Account Recovery** page, which involves a mandatory 24-hour security wait.

3. **Secure the old device if it is still operational.**
   - **Maintain power to the old phone and keep it offline if possible.**
   - **Do not factory reset the old device.**
   - **Use the old device to log in to your primary email and generate "Backup Codes" or "Recovery Codes" immediately.** These are one-time-use strings that bypass the app entirely.

4. **Address potential SIM swap indicators.**
   - **Check for "No Service" or "Emergency Calls Only" on your mobile device.** If your signal has vanished and the app is empty, contact your mobile network provider immediately from a different phone.
   - **Ask the provider to check for recent SIM changes or porting requests.**
   - **Report suspected fraud to the Report Fraud service.**
     - Visit `reportfraud.police.uk` or call 0300 123 2040 (England, Wales, and Northern Ireland).
     - Contact Police Scotland via 101 for residents in Scotland.

5. **Use alternative "Get back in" methods for critical services.**
   - **Look for "Try another way" or "Use backup code" on login screens.**
   - **Prioritize your primary email and password manager first.**
   - **Log in using a "Trusted Device" (like a home computer) where you might already be remembered.**

6. **Re-enroll your accounts once access is restored.**
   - **Navigate to the security settings of each service.**
   - **Delete the "old" authenticator link and scan the new QR code.**
   - **Download and save a new set of backup codes for every account.**

## What can wait
- You do not need to switch to a different authenticator brand immediately.
- You do not need to notify all of your contacts or social media followers unless you confirm an account was actually compromised.
- You do not need to change every password right now; focus only on the accounts where 2FA is currently failing.

## Important reassurance
It is common for authenticator apps to appear empty after an update if cloud sync was never enabled or if the encryption handshake between the app and the OS was interrupted. This usually means the data is disconnected rather than deleted. Following the recovery steps slowly often restores access without data loss.

## Scope note
This guide provides first-step stabilization for digital account access. It does not cover the recovery of enterprise-managed devices (Work/School accounts), which typically require an IT administrator to reset the MFA hardware token.

## Important note
This information is for general guidance and does not constitute legal or professional security advice. Digital recovery processes change frequently. If you believe your identity has been stolen, contact the relevant financial institutions and the Report Fraud service for official assistance.

## Additional Resources
- https://support.apple.com/en-gb/guide/personal-safety/ipsf8e72746b/web
- https://support.apple.com/en-gb/102560
- https://support.apple.com/en-gb/guide/personal-safety/ips7d5628cc5/web
- https://support.google.com/accounts/answer/7305876?hl=en
- https://support.google.com/accounts/answer/6294825?hl=en
