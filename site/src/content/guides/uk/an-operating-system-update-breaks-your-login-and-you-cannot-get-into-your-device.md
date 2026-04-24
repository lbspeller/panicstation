---
title: "What to do if… an operating system update breaks your login and you cannot get into your device"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - os update broke login
  - cant sign in after update
  - locked out of device
  - device stuck on login screen
  - password not accepted after update
  - pin not working after update
  - biometrics stopped working
  - windows cant log in
  - mac cant log in
  - android cant unlock
  - iphone passcode not working
  - account locked after attempts
  - recovery mode sign in problem
  - bitlocker recovery key needed
  - filevault locked out
  - update caused black screen login
  - corporate device mdm lockout
  - need to recover without data loss
  - afraid of factory reset
last_reviewed: "2026-03-08"
---

# What to do if… an operating system update breaks your login and you cannot get into your device (UK)

## Short answer
Stop repeated login attempts, keep the device powered, and use the device’s built-in recovery options to roll back the update or reset the login in an official way (without “bypass” tools). Only consider erasing/resetting once you’re sure you can restore your data.

## Do not do these things
- Don’t keep guessing passwords/PINs over and over — you can trigger timed lockouts or make recovery harder.
- Don’t follow “bypass lock screen” videos, cracking tools, or paid unlock services — they can steal data or permanently lock/encrypt you out.
- Don’t factory reset just to “see if it works” unless you’ve accepted that data on the device may be wiped.
- Don’t sign into your accounts on a random borrowed public computer if you can avoid it (libraries, hotel kiosks) — use your own phone or a trusted device.
- Don’t repeatedly power-cut during repairs (unless you’re deliberately entering the built-in recovery menu). Sudden interruptions can corrupt updates further.

## What to do now
1. **Pause and reduce the lockout risk (30–60 seconds).**
   - If you see a lock timer (“Try again in…”), stop and wait it out.
   - If the login screen offers an alternative (password vs PIN vs biometrics), choose the **password** option if available (updates sometimes break PIN/biometrics temporarily).

2. **Do quick, low-risk checks that often fix “wrong password” symptoms.**
   - Check **Caps Lock**, keyboard language/layout, and whether the cursor is in the right field.
   - If you use an external keyboard/mouse/dock, disconnect it and try the built-in keyboard/trackpad (or swap to a simple wired keyboard if Bluetooth seems unreliable at boot).

3. **Use the official recovery path for your device type (pick one).**
   - **Windows PC**
     - Enter **Windows Recovery Environment (WinRE)** and try:
       - **Startup Settings → Safe Mode** (if available) to see whether you can sign in there, then restart normally, or
       - **Uninstall Updates** (start with the **latest quality update**; only try the feature update option if needed), or
       - **Startup Repair**.
     - If you’re prompted for a **BitLocker recovery key**, don’t guess. Retrieve it from your Microsoft account (recovery keys/devices area) or, if it’s a work/school device, from your organisation/IT (often via a managed “company portal” route).
   - **Mac**
     - If you see a message that your account is locked after attempts, wait the stated time, restart, and try again.
     - If you still can’t get in, start up in **macOS Recovery** and use Apple’s official password reset options. The on-screen steps can vary based on how your Mac is set up.
   - **iPhone/iPad**
     - If you see **iPhone/iPad unavailable** or **Security Lockout**, Apple’s official options involve **erasing and resetting** the device (which removes local data). Depending on what’s shown on screen, you may be able to erase using your **Apple Account** credentials, or you may need to connect to a computer and use **Recovery Mode** to restore.
     - Before you erase, make sure you can sign in to your Apple Account afterwards (activation) and that you have a backup you expect to restore.
   - **Android phone/tablet**
     - If you genuinely can’t unlock it, Google’s official guidance is that you’ll need to **erase** the device to set it up again and create a new screen lock.
     - If possible, use Google’s **Find Hub / Find My Device** service to erase it remotely. After erasing, you’ll need your Google Account password to use the device again, and restores depend on what was backed up.

4. **Protect your accounts while you’re locked out (from a trusted device).**
   - Prioritise regaining access to the account that controls the device (Microsoft/Apple/Google) using its official recovery route.
   - If you suspect compromise, only change the account password if you’re confident you can still pass sign-in/recovery checks (for example you still have your trusted number/device or backup codes).

5. **If it’s a work/school device, stop and escalate early.**
   - Contact your IT/service desk before attempting resets, “uninstalls”, or recovery actions that could break encryption/management (BitLocker, MDM, corporate login policies).

6. **If you might need a repair shop, prepare proof now (without wiping).**
   - Note the device model/serial number (from the casing/box/receipt if you can’t access Settings/About).
   - In the UK, if you need hands-on help under warranty, start with the **manufacturer’s UK support** or your retailer’s support route so you don’t accidentally reduce support options by using unofficial tools.

## What can wait
- You do **not** need to decide today whether to reinstall the OS, replace the device, or “start fresh”.
- You do **not** need to contact everyone about “lost data” until you know whether you can roll back the update or recover the login.
- You do **not** need to sort out a perfect backup strategy right now — focus on getting back in safely first.

## Important reassurance
This is a common failure mode: updates can break sign-in components, PIN/biometric handling, or trigger encryption prompts even when your password is correct. There are legitimate recovery paths, and taking a careful, official route is the best way to avoid making the problem irreversible.

## Scope note
These are first steps only — once you regain access (or confirm you can’t), the next stage is deciding whether to roll back, reinstall, restore from backup, or get supported repair help.

## Important note
This guide provides general information, not legal, security, or technical professional advice. Device states vary (encryption, management profiles, backup status). When unsure, choose the least destructive option first and use official recovery tools.

## Additional Resources
- https://support.microsoft.com/en-gb/windows/windows-recovery-environment-0eb14733-6301-41cb-8d26-06a12b42770b
- https://support.microsoft.com/en-gb/windows/how-to-uninstall-a-windows-update-c77b8f9b-e4dc-4e9f-a803-fdec12e59fb0
- https://support.microsoft.com/en-gb/windows/find-your-bitlocker-recovery-key-6b71ad27-0b89-ea08-f143-056f5ab347d6
- https://support.apple.com/en-gb/102633
- https://support.apple.com/en-gb/118430
- https://support.google.com/android/answer/7663172?hl=en-GB
- https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/always-back-up-your-most-important-data