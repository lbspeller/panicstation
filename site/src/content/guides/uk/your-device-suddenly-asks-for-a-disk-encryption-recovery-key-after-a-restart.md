---
title: "What to do if… your device suddenly asks for a disk-encryption recovery key after a restart"
jurisdiction: "UK"
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

# What to do if… your device suddenly asks for a disk-encryption recovery key after a restart (UK)

## Short answer
Pause and don’t do anything destructive. First confirm it’s a genuine built-in encryption recovery prompt (not a “recovery key” scam), then retrieve the key from the correct account or your organisation’s IT.

## Do not do these things
- Don’t enter a recovery key into any website, QR code page, email link, or “support chat” you didn’t open yourself.
- Don’t factory-reset, reinstall Windows/macOS, or “erase disk” in Recovery just to get past the screen.
- Don’t keep rebooting over and over; pause and document what you’re seeing.
- Don’t share the recovery key with anyone you can’t independently verify (especially anyone who contacted you first).

## What to do now
1. **Make sure you’re at the real recovery screen (not a scam).**
   - A genuine recovery prompt is part of the boot/login flow (before you can properly sign in) and does **not** look like a browser page.
   - If anything asks you to “log in online to unlock” or to type the key into a web page, **stop**.

2. **Record what you see (so you don’t have to rely on memory).**
   - Take a clear photo of the screen **including any “Key ID”/identifier** and the exact wording.
   - Note what changed just before this happened (Windows update, BIOS/firmware update, repair shop visit, docking station change).

3. **Decide which encryption system it most likely is, then follow the matching route.**
   - **Windows (often BitLocker):** usually says “BitLocker recovery key” and shows a **Key ID**.
   - **Mac (FileVault):** may say FileVault / “recovery key” for the startup disk.

4. **If it’s Windows/BitLocker, use the safe key-retrieval paths (in this order).**
   - On a separate trusted device, sign in to the **Microsoft account** that’s used on that PC and look for the BitLocker recovery key that matches the **Key ID** shown on screen.
   - If it’s a **work/school** device (or ever used a work/school account): contact your IT/helpdesk. Many organisations store (“escrow”) keys and can match by Key ID.
   - Check your own records: printed copy, password manager secure note, or a file you saved when encryption was set up.

5. **Know this limitation so you don’t waste time.**
   - If you truly can’t find the BitLocker recovery key, it usually can’t be recreated by Microsoft Support. Your realistic options are the account/IT routes above, or (as a last resort) resetting/erasing the device (which removes data).

6. **If it’s a Mac/FileVault prompt, use the recovery method that matches how FileVault was set up.**
   - If you previously saved a **FileVault recovery key**, retrieve it from where you stored it (paper/secure note/password manager).
   - On some recent Apple versions/setups, the FileVault recovery key may be viewable in the **Passwords** app on a trusted Apple device signed into the same Apple Account (this isn’t available for everyone).
   - If the Mac is managed by work/school, contact IT (they may have escrowed the key via device management).

7. **If this happened after a firmware/BIOS update or hardware change, treat it as “plausibly normal” but still careful.**
   - BitLocker can prompt after firmware/security changes. That doesn’t automatically mean you’ve been hacked—but it does mean you should use only official recovery-key routes.

8. **If anything feels “off”, reduce exposure while you troubleshoot.**
   - If you can do so without risking access, disconnect Wi-Fi/Ethernet until you’re back in.
   - Once you regain access, change important passwords from a separate trusted device first (especially email), then run a reputable malware scan.

9. **If you believe you’re the victim of cybercrime/fraud in the UK, use the correct reporting route.**
   - For England/Wales/Northern Ireland: report via **Report Fraud** (the national fraud and cybercrime reporting service).
   - If you live in Scotland: report via **Police Scotland on 101**.
   - If it’s happening right now or you’re in immediate danger: call **999**.

## What can wait
- You don’t need to decide today whether to wipe the device, replace it, or attempt specialist data recovery.
- You don’t need to diagnose the exact root cause before you’ve stabilised access and preserved evidence (photos/notes).
- You don’t need to contact multiple agencies at once—start with the key-retrieval path and only escalate if there are signs of fraud/compromise.

## Important reassurance
This prompt often appears after legitimate security or firmware changes, and it’s common to feel suddenly locked out and panicked. Taking a few minutes to document the screen and use only official recovery-key routes prevents the most irreversible mistakes.

## Scope note
These are first steps to regain access safely and avoid accidental data loss. If you recover access, later steps may include a deeper security check, backup verification, and (for managed devices) a review with IT.

## Important note
This is general information, not legal, forensic, or professional security advice. If the device contains business-critical or sensitive personal data, or you suspect an active compromise, consider getting help from a qualified IT/security professional and follow your organisation’s incident process if applicable.

## Additional Resources
- https://support.microsoft.com/en-gb/windows/find-your-bitlocker-recovery-key-6b71ad27-0b89-ea08-f143-056f5ab347d6
- https://support.microsoft.com/en-gb/windows/back-up-your-bitlocker-recovery-key-e63607b4-77fb-4ad3-8022-d6dc428fbd0d
- https://support.apple.com/en-ie/guide/mac-help/mh35881/mac
- https://support.apple.com/en-gb/guide/passwords/mchl307c4fa9/mac
- https://www.reportfraud.police.uk/reporting-a-fraud/
- https://www.gov.uk/government/news/report-fraud-new-service-from-city-of-london-police
- https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks