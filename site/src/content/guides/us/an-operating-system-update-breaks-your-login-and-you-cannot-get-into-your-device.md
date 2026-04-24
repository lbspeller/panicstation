---
title: "What to do if… an operating system update breaks your login and you cannot get into your device"
jurisdiction: "USA"
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
  - update caused login failure
  - managed device mdm lockout
  - cant access microsoft account
  - cant access apple account
  - cant access google account
last_reviewed: "2026-03-08"
---

# What to do if… an operating system update breaks your login and you cannot get into your device (USA)

## Short answer
Stop repeated login attempts, keep the device powered, and use official recovery options (Windows Recovery, macOS Recovery, Apple/Google account recovery) to roll back the update or restore access. Avoid “unlock/bypass” tools, and don’t erase/reset until you’re sure you can restore your data.

## Do not do these things
- Don’t keep trying random passwords/PINs — it can trigger lockouts and make recovery harder.
- Don’t use “bypass” apps, jailbreak/root hacks, or paid unlock services — high risk of scams, malware, or permanent lockout.
- Don’t factory reset as a first move unless you’ve accepted you may lose local data.
- Don’t hand over your device or Apple/Google/Microsoft credentials to an unknown shop or online helper.
- Don’t change core account settings in a panic unless you still have a reliable way back in (trusted device/number, recovery keys/backup codes). If you suspect compromise, prioritise regaining access first.

## What to do now
1. **Pause to avoid lockouts and accidental wipes.**
   - If the device shows a timed lock, stop and wait.
   - If it offers a choice (password vs PIN vs Face/Touch ID), try the **password** route first.

2. **Rule out “input” problems that look like login failure.**
   - Caps Lock, keyboard layout/language, stuck keys.
   - Disconnect docks/USB devices; try the built-in keyboard/trackpad or a simple wired keyboard.

3. **Use the official recovery path for your device type (pick one).**
   - **Windows PC**
     - Enter **Windows Recovery Environment (WinRE)** and try:
       - **Startup Settings → Safe Mode** to attempt sign-in, then restart normally, or
       - **Uninstall Updates** (start with the **latest quality update**; try feature update removal only if needed), or
       - **Startup Repair**.
     - If **BitLocker** prompts for a recovery key: stop and retrieve it (from your Microsoft account, or from your organization if it’s a managed/work device). Don’t guess.
   - **Mac**
     - If the account is locked from attempts, wait and restart.
     - Then use **macOS Recovery** to access Apple’s official password reset options. The on-screen steps vary based on setup.
   - **iPhone/iPad**
     - If you see **iPhone/iPad unavailable** or **Security Lockout**, Apple’s official options involve **erasing and resetting** the device (local data is removed).
     - Depending on what’s shown, you may be able to erase using your **Apple Account** credentials on the device, or you may need to use **Recovery Mode** with a computer to restore.
     - Before you erase, confirm you can sign in to your Apple Account afterwards (activation) and that you expect to restore from a backup.
   - **Android phone/tablet**
     - If you can’t unlock it, Google’s official guidance is that you’ll need to **erase** the device to set it up again and create a new screen lock.
     - If possible, use **Find Hub / Find My Device** to erase it remotely. After erasing, you’ll need your Google Account password to use the device again, and restores depend on what was backed up.

4. **Protect your accounts while you’re locked out (using a trusted device).**
   - Prioritize access to the “controller” account (Microsoft/Apple/Google) using its official recovery steps.
   - If you suspect compromise, change the account password only if you’re confident you won’t block your own recovery (for example, you still have your trusted device/number or backup codes).

5. **If it’s a work/school device, stop and involve IT early.**
   - Company-managed devices often have MDM policies, encryption, and recovery keys that only IT can provide. Escalate before resets or OS reinstalls.

6. **If you may need in-person support, gather what you’ll need before doing anything destructive.**
   - Device model and serial number (from the case/box/receipt if you can’t access Settings/About).
   - Proof of purchase/warranty coverage. In the USA, using the manufacturer’s official support route (or an authorized service provider) reduces scam risk and protects support options.

## What can wait
- You do **not** need to decide right now whether to replace the device, pay for a repair, or reinstall everything.
- You do **not** need to reorganize your digital life, switch platforms, or migrate accounts today.
- You do **not** need to attempt advanced command-line “repairs” unless you already know what you’re doing and have a safe recovery path.

## Important reassurance
Login failures after updates can happen even when your password is correct — especially when PIN/biometrics, update components, or encryption prompts get disrupted. Using official recovery tools is the safest way to get back in without turning a fixable issue into permanent data loss.

## Scope note
These are immediate stabilization steps only. Once you regain access (or confirm you can’t), the next decision is whether to roll back, reinstall, restore from backup, or use authorized support.

## Important note
This is general information, not professional security/IT advice. Outcomes depend on encryption, management policies, and whether you have backups. When unsure, choose the least destructive option first and use official support and recovery tools.

## Additional Resources
- https://support.microsoft.com/windows/windows-recovery-environment-0eb14733-6301-41cb-8d26-06a12b42770b
- https://support.microsoft.com/windows/how-to-uninstall-a-windows-update-c77b8f9b-e4dc-4e9f-a803-fdec12e59fb0
- https://support.microsoft.com/windows/find-your-bitlocker-recovery-key-6b71ad27-0b89-ea08-f143-056f5ab347d6
- https://support.apple.com/102633
- https://support.apple.com/118430
- https://support.google.com/android/answer/7663172
- https://www.google.com/android/find/about