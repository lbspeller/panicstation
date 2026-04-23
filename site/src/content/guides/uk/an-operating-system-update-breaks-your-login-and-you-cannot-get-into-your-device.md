---
title: "What to do if… an operating system update breaks your login and you cannot get into your device"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "os update broke login"
  - "cant sign in after update"
  - "locked out of device"
  - "device stuck on login screen"
  - "password not accepted after update"
  - "pin not working after update"
  - "biometrics stopped working"
  - "windows cant log in"
  - "mac cant log in"
  - "android cant unlock"
  - "iphone passcode not working"
  - "account locked after attempts"
  - "recovery mode sign in problem"
  - "bitlocker recovery key needed"
  - "filevault locked out"
  - "update caused black screen login"
  - "corporate device mdm lockout"
  - "need to recover without data loss"
  - "afraid of factory reset"
  - "what do i do if update broke login"
  - "help i cannot get into my laptop"
  - "my password is not working after update"
  - "what do i do if i am locked out of windows"
  - "wrong password message after update"
  - "forgotten passcode recovery 2026"
  - "device unavailable lockout"
  - "security lockout iphone help"
  - "microsoft account recovery key"
  - "mac recovery assistant terminal"
  - "android factory reset recovery"
last_reviewed: "2026-03-17"
---
# What to do if… an operating system update breaks your login and you cannot get into your device (UK)

## Short answer
Stop repeated login attempts to avoid permanent lockouts, disconnect external hardware, and use the device’s built-in "Recovery Environment" to uninstall the latest update or reset the password via your official cloud account (Microsoft, Apple, or Google).

## Do not do these things
- Don’t keep guessing passwords or PINs — multiple failed attempts can trigger a security lockout timer or hardware encryption (BitLocker/FileVault) lock.
- Don’t use third-party "password cracking" or "unlocker" software — these tools often contain malware or cause permanent data corruption on encrypted drives.
- Don’t perform a factory reset immediately — this is an irreversible action that wipes all local data; keep it as a last resort.
- Don’t cut the power during a repair or update rollback — sudden power loss can cause a "no boot" situation that requires a full OS reinstallation.

## What to do now
1. **Clear the login environment and check hardware.**
   - **Disconnect all USB docks, external keyboards, or mice** to ensure a driver conflict isn't causing ghost keystrokes or layout issues.
   - **Verify the keyboard layout** by clicking the language icon (e.g., ENG/UK) on the login screen to ensure it hasn't defaulted to a different region where symbols are mapped differently.
   - **Use the "On-Screen Keyboard"** (found under the Accessibility/Ease of Access icon) if physical keys are not responding correctly.

2. **Access the Recovery Environment for your specific platform.**
   - **Windows 11/10:**
     - **Hold the Shift key and select Power > Restart** from the login screen.
     - **Navigate to Troubleshoot > Advanced Options > Uninstall Updates.**
     - **Select "Uninstall latest quality update"** first; if the issue persists, try "Uninstall latest feature update."
   - **Mac (Apple Silicon - M1/M2/M3/M4):**
     - **Shut down the Mac**, then press and hold the Power button until "Loading startup options" appears.
     - **Select Options > Continue**, then use the Utilities menu > Terminal and type `resetpassword` to open the Recovery Assistant.
   - **Mac (Intel):**
     - **Restart the Mac** and immediately hold Command (⌘) + R until the Apple logo appears.
     - **Use the Utilities menu > Terminal** and type `resetpassword` if the standard reset options do not appear.

3. **Use on-device "Forgot" prompts for mobile devices.**
   - **iPhone/iPad (iOS 17+):**
     - **Enter the wrong passcode** until the "[Device] Unavailable" or "Security Lockout" screen appears.
     - **Tap "Forgot Passcode?"** (bottom corner) and select "Start iPhone Reset" if you are connected to Wi-Fi/Cellular and have your Apple Account password.
   - **Android (Modern versions):**
     - **Sign in to "Find My Device"** on another trusted device to attempt a remote wipe/reset if the local screen is unresponsive.

4. **Retrieve mandatory recovery keys from official vaults.**
   - **For Windows BitLocker:** Access your Microsoft Account via another device (laptop/phone) at `account.microsoft.com/devices/recoverykey` to find the 48-digit key required to unlock the drive in Recovery Mode.
   - **For Mac FileVault:** Locate the recovery key you were prompted to save or print during setup; if you chose to store it with Apple, use the Apple Account reset route.

5. **Engage UK-specific technical or corporate support.**
   - **Contact your employer’s IT Service Desk** if the device is managed by an organisation (MDM); they can often push an "Unlock" command or provide a bypass code that you cannot generate yourself.
   - **Consult the manufacturer's UK support site** (e.g., Apple UK, Microsoft Support UK) for 2026-specific firmware issues related to local regional updates.

## What can wait
- You do -not- need to decide whether to buy a new device or pay for a repair service yet.
- You do -not- need to worry about losing your cloud-synced data (Photos, iCloud, OneDrive, Google Drive), as this remains safe in the cloud regardless of the local device state.
- You do -not- need to update your password on all other accounts until you have stabilized the primary device.

## Important reassurance
Login failures after updates are frequently caused by a temporary "handshake" error between the security chip (TPM/T2) and the operating system. This does not necessarily mean your data is gone or that your password is "wrong." Using the "Uninstall Update" or "Recovery Assistant" paths often restores access without any data loss.

## Scope note
This guide provides first-step stabilization only. If the "Uninstall Update" process fails or the recovery key is missing, you may require a full system restore or professional hardware assessment.

## Important note
This information is for general guidance and does not constitute professional technical or security advice. Success depends on your specific device encryption settings and backup status. Always verify your identity through official manufacturer portals (Microsoft, Apple, or Google).

## Additional Resources
- https://support.microsoft.com/en-gb/windows/account-protection-in-the-windows-security-app-7e467a24-c86b-49af-8ef2-fb74bc17a68a
- https://support.microsoft.com/en-gb/windows/windows-10-notification-you-re-not-receiving-security-updates-d1757026-2364-41fb-8802-ea443fdb1522
- https://support.apple.com/en-gb/102633
- https://support.apple.com/en-gb/118574
- https://support.google.com/android/answer/7663172?hl=en-GB
