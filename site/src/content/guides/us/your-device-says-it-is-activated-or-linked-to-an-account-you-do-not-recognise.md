---
title: "What to do if… your device says it is “activated” or “linked” to an account you do not recognise"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "device asks for recovery key"
  - "disk encryption recovery prompt"
  - "bitlocker recovery key screen"
  - "filevault recovery key prompt"
  - "recovery key after restart"
  - "windows recovery key after update"
  - "mac recovery key after reboot"
  - "encryption key id shown"
  - "locked out of computer startup"
  - "boot asks for bitlocker key"
  - "laptop asking for encryption key"
  - "sudden drive encryption screen"
  - "tpm change recovery mode"
  - "bios update triggered bitlocker"
  - "recovery key not found"
  - "unsure if this is a scam screen"
  - "work laptop recovery key request"
  - "school device recovery key request"
  - "device encryption key required"
  - "help i need a recovery key"
  - "what do i do if my laptop asks for recovery key"
  - "my computer is asking for a bitlocker key"
  - "help i am locked out by bitlocker"
  - "blue screen asking for recovery key"
  - "bitlocker key id mismatch"
  - "retrieving recovery key from microsoft account"
  - "finding filevault key on iphone"
  - "disk-encryption recovery key"
  - "device restart recovery prompt"
  - "sudden encryption key request"
last_reviewed: "2026-03-17"
---
# What to do if… your device says it is “activated” or “linked” to an account you do not recognise (USA)

## Short answer
Do not erase the device or reinstall the operating system. Identify the specific **Key ID** shown on your screen and retrieve the matching 48-digit key from your official Microsoft or Apple account portal.

## Do not do these things
- Do not enter a recovery key into any website, QR code page, or link sent to you via email or text message.
- Do not pay any "fee" or contact "support numbers" displayed in a pop-up window or chat widget.
- Do not factory-reset or wipe the drive yet, as this will permanently delete all data on the encrypted disk.
- Do not give your recovery key to anyone who contacted you first, even if they claim to be from Microsoft, Apple, or the FBI.

## What to do now
1. **Verify the screen is a genuine system prompt.**
   - A legitimate BitLocker (Windows) or FileVault (Mac) prompt appears during the boot sequence before the operating system loads.
   - If the request appears inside a web browser or as a window while you are already logged in, close the browser and disconnect from the internet immediately.

2. **Document the Key ID and Device Name displayed on the screen.**
   - **Locate the Recovery Key ID (usually a string of 8 or 32 characters) on the locked screen.**
   - **Take a clear photo of the entire screen to ensure you have the exact identifier for matching.**

3. **Retrieve a Windows BitLocker key using official portals.**
   - On a separate trusted device (phone or tablet), navigate to **aka.ms/myrecoverykey** for personal accounts.
   - For work or school devices, navigate to **aka.ms/aadrecoverykey** and sign in with your organizational credentials.
   - **Match the Key ID from your device screen to the one listed in the portal to ensure you use the correct 48-digit key.**

4. **Retrieve a Mac FileVault key using Apple services.**
   - On a trusted iPhone or iPad signed into the same Apple Account, open the **Passwords** app.
   - **Tap "All," select your Mac's name from the list, and tap the "Recovery Key" field to reveal the code.**
   - If you chose to store the key in iCloud during setup, follow the on-screen "Reset Password" prompts on the Mac to use your Apple Account credentials for unlocking.

5. **Contact your organization if the device is managed.**
   - If the screen states "A recovery key has been set by your company, school, or institution," contact your IT Helpdesk.
   - **Provide the IT department with the Key ID and your device asset tag to retrieve the escrowed key.**

6. **Check physical and digital backups.**
   - Search your physical files for a printout labeled "BitLocker Recovery Key" or check any USB flash drives used during the initial device setup.
   - Check your personal password manager or cloud storage for a saved text file or secure note containing the key.

7. **Report suspected scams to the IC3 (USA Specific).**
   - If you were directed to this screen by a caller or believe it is a ransomware attempt, file a report at **www.ic3.gov**.
   - **Use only the official .gov website and do not follow links provided by third parties.**

## What can wait
- You do not need to determine the technical cause (e.g., BIOS update or TPM failure) right now.
- You do not need to decide whether to replace the hardware or wipe the disk immediately.
- You do not need to contact professional data recovery services until you have exhausted all account-based retrieval options.

## Important reassurance
It is normal to feel panicked when locked out of your files, but this prompt is often triggered by routine security updates or firmware changes. Access can usually be restored by locating the key in the account originally used to set up the device.

## Scope note
This guide provides first-step stabilization for retrieving encryption keys. It does not cover hardware repair, OS reinstallation, or forensic data recovery.

## Important note
This information is for general guidance and does not constitute professional IT or legal advice. If your device contains sensitive corporate data or if you suspect an active cyberattack, follow your employer’s incident reporting procedures immediately. Microsoft and Apple support personnel cannot see, recreate, or provide a lost recovery key.

## Additional Resources
- https://support.apple.com/en-us/108794
- https://support.apple.com/108934
- https://support.apple.com/guide/icloud/remove-a-device-mmfc0eeddd/icloud
- https://support.microsoft.com/en-us/windows/manage-devices-used-with-your-microsoft-account-d4044995-81db-b24b-757e-1102d148f441
- https://support.google.com/android/answer/9459346?hl=en
