---
title: "What to do if… your device suddenly asks for a disk-encryption recovery key after a restart"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - device asks for recovery key
  - disk encryption recovery prompt
  - bitlocker recovery key screen
  - filevault recovery key prompt
  - recovery key after restart
  - windows recovery key after update
  - mac recovery key after reboot
  - encryption key id shown
  - locked out of computer startup
  - boot asks for bitlocker key
  - laptop asking for encryption key
  - sudden drive encryption screen
  - tpm change recovery mode
  - bios update triggered bitlocker
  - recovery key not found
  - unsure if this is a scam screen
  - work laptop recovery key request
  - school device recovery key request
  - device encryption key required
last_reviewed: "2026-03-08"
---

# What to do if… your device suddenly asks for a disk-encryption recovery key after a restart (USA)

## Short answer
Don’t wipe or reinstall. First confirm it’s a real built-in encryption recovery prompt (not a “recovery key” phishing trick), then retrieve the key from the correct account (Microsoft/Apple) or your employer/school’s IT.

## Do not do these things
- Don’t enter a recovery key into any website, QR code page, email link, or “support chat” you didn’t open yourself.
- Don’t factory-reset, reinstall the OS, or erase the disk just to get past the prompt.
- Don’t keep rebooting repeatedly—pause and document what you see.
- Don’t give the recovery key to anyone who contacted you first or can’t be independently verified.

## What to do now
1. **Confirm it’s the genuine recovery prompt (not a phishing screen).**
   - A real BitLocker/FileVault recovery prompt is part of the boot/login flow and doesn’t behave like a browser page.
   - If you see a web address, chat widget, or “sign in online to unlock,” stop and treat it as suspicious.

2. **Document the screen before you touch anything else.**
   - Take a photo showing the exact message and any **Key ID/identifier**.
   - Write down what happened right before this (Windows update, BIOS/firmware update, repair, hardware change).

3. **Identify which encryption system you’re dealing with.**
   - **Windows (BitLocker)** commonly shows a **Key ID** and says “BitLocker recovery key.”
   - **Mac (FileVault)** is tied to FileVault recovery options for the startup disk.

4. **If it’s Windows/BitLocker, use official recovery-key retrieval paths.**
   - On a separate trusted device, sign in to the Microsoft account used on that PC and locate the BitLocker recovery key that matches the **Key ID**.
   - If it’s a **work/school** device (or ever used a work/school account): contact IT/helpdesk. Organizations often escrow keys in device management and can match using the Key ID.
   - Check your own secure storage (password manager secure note, printed copy, or saved file created when BitLocker was set up).

5. **Know this limitation so you don’t waste time.**
   - If you can’t find the BitLocker recovery key, it generally can’t be recreated by Microsoft Support. The realistic options are the account/IT escrow routes, or (last resort) resetting/erasing the device (which removes data).

6. **If it’s Mac/FileVault, use the recovery method that matches your setup.**
   - If you saved a **FileVault recovery key**, retrieve it from where you stored it (paper/secure note/password manager).
   - On some recent Apple versions/setups, the FileVault recovery key may be viewable in the **Passwords** app on a trusted iPhone/iPad signed into the same Apple Account (this isn’t available for everyone).
   - If the Mac is managed by an employer/school, contact IT (keys may be escrowed via device management).

7. **If the prompt appeared after a BIOS/firmware update, treat it as “plausibly normal” but still proceed cautiously.**
   - BitLocker can trigger recovery when firmware/security settings change. That doesn’t prove compromise—just means you should use official key retrieval and avoid guesswork.

8. **If you suspect compromise, reduce exposure while you work.**
   - If possible, disconnect from Wi-Fi/Ethernet until you regain access.
   - After you get back in, change critical passwords from a separate trusted device first (especially email), then run a reputable malware scan.

9. **If you believe this is part of cybercrime or a scam, report it through the right channel—carefully.**
   - For cyber-enabled fraud/scams, the FBI’s Internet Crime Complaint Center (IC3) is a common reporting route.
   - Because fake “IC3” reporting portals exist, avoid links sent by others or look-alike domains—use the official FBI pathway (for example by navigating from the FBI website) and type addresses manually when possible.
   - If there’s immediate danger or an ongoing crime, use local emergency services; otherwise use local non-emergency channels as appropriate.

## What can wait
- You don’t need to decide right now whether to wipe the device, buy a new one, or pay for specialist recovery.
- You don’t need to pinpoint the root cause before you regain access and secure your accounts.
- You don’t need to contact multiple agencies immediately—start with key retrieval and escalate only if there are strong signs of fraud/compromise.

## Important reassurance
This can happen after normal security updates or firmware changes, and it’s common to feel locked out and overwhelmed. Slowing down, photographing the screen, and using only official recovery-key routes protects you from accidental data loss and scams.

## Scope note
These are first steps to stabilize access and avoid irreversible mistakes. After you’re back in, you can consider deeper security checks, backups, and (for managed devices) an IT review.

## Important note
This is general information, not legal, forensic, or professional security advice. If you suspect an active compromise, significant data exposure, or this involves business systems, follow your organization’s incident process and consider qualified IT/security help.

## Additional Resources
- https://support.microsoft.com/en-us/windows/find-your-bitlocker-recovery-key-6b71ad27-0b89-ea08-f143-056f5ab347d6
- https://support.microsoft.com/en-us/windows/back-up-your-bitlocker-recovery-key-e63607b4-77fb-4ad3-8022-d6dc428fbd0d
- https://support.apple.com/en-us/102633
- https://support.apple.com/guide/iphone/see-your-mac-filevault-recovery-key-iphd9fac2411/ios
- https://www.ic3.gov/
- https://www.fbi.gov/investigate/cyber
- https://www.cisa.gov/stopransomware/ive-been-hit-ransomware