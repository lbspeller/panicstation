---
title: "What to do if… your device says it is “activated” or “linked” to an account you do not recognise"
jurisdiction: "UK"
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
  - "what do i do if my laptop asks for a recovery key"
  - "what do i do if windows shows bitlocker screen"
  - "what do i do if mac asks for filevault key"
  - "what do i do if i lost my encryption key"
  - "help i am locked out by bitlocker"
  - "help i cannot find my recovery key"
  - "my screen says bitlocker recovery"
  - "my mac says enter recovery key"
  - "blue screen asking for 48-digit key"
  - "grey screen asking for 24-character key"
  - "recovery key id identifier"
  - "windows 11 recovery key prompt"
  - "macos tahoe recovery key"
  - "lost disk encryption password"
  - "restarted and now locked out"
last_reviewed: "2026-03-17"
---
# What to do if… your device says it is “activated” or “linked” to an account you do not recognise (UK)

## Short answer
Verify that the prompt is a genuine system-level boot screen rather than a web-based scam, then retrieve the stored numerical key from your linked Microsoft/Apple account or organisational IT department.

## Do not do these things
- Don't enter the key into any website, QR code destination, or chat window that appears within a standard browser.
- Don't attempt to factory reset or "erase disk" until all key retrieval options have been exhausted.
- Don't repeatedly restart the device in an attempt to bypass the screen.
- Don't provide the recovery key or your account credentials to anyone claiming to be "support" who contacted you first.

## What to do now
1. **Confirm the legitimacy of the recovery request by observing the screen's appearance.**
   - A genuine Windows BitLocker screen is typically a solid blue background with white text, appearing immediately after the manufacturer logo and before the Windows loading icon.
   - A genuine macOS FileVault prompt appears as a grey login screen or a specific recovery assistant window before the desktop loads.
   - If the request appears inside a window while you are already using the internet, it is likely a scam; close the window immediately.

2. **Document the specific identifiers shown on the locked screen.**
   - Write down the "Recovery Key ID" (Windows) or the "Serial Number" and "Key Identifier" (Mac).
   - Take a photograph of the entire screen to ensure you have the exact terminology and codes for IT support or personal retrieval.

3. **Check your personal cloud accounts for automatically backed-up keys.**
   - For Windows (Personal): Use a separate device to visit **https://aka.ms/myrecoverykey** and sign in with the Microsoft account used to set up the PC.
   - For Windows (Work/School): Visit **https://aka.ms/aadrecoverykey** and sign in with your organisational credentials.
   - For Mac (FileVault): If you are using macOS Tahoe (2026) or later, check the **Passwords** app on another trusted Apple device signed into the same Apple Account; search for "Recovery Key."

4. **Search for physical or digital copies of the key created during initial setup.**
   - Look for a printed document labeled "BitLocker Recovery Key" or "FileVault Recovery Key."
   - Check your primary password manager for entries tagged with "encryption," "recovery," or "disk."
   - Search your email history on a different device for setup confirmation messages from Microsoft or Apple.

5. **Contact your organisation's IT helpdesk if the device is managed by an employer or school.**
   - Provide the **Key ID** you documented in Step 2.
   - Managed environments often escrow (store) these keys centrally and can provide the 48-digit (Windows) or 24-character (Mac) code after verifying your identity.

6. **Disconnect the device from the network if you suspect the lock was triggered maliciously.**
   - Turn off the Wi-Fi router or unplug the Ethernet cable if the prompt appeared following a suspicious download or remote access session.
   - This prevents potential further communication between the device and a remote attacker while you investigate.

7. **Report suspected cybercrime to the relevant UK authorities.**
   - England, Wales, and Northern Ireland: Report via the **Report Fraud** service at **https://reportfraud.police.uk** or call **0300 123 2040**.
   - Scotland: Report to **Police Scotland** by calling **101** or using the official cybercrime reporting form on the Police Scotland website.
   - Immediate Danger: Call **999** if you are currently being threatened or there is an immediate risk to life.

## What can wait
- You do not need to decide whether to wipe and reinstall the operating system immediately; this should be a last resort.
- You do not need to diagnose the technical cause (such as a BIOS update or TPM failure) before attempting to find the key.
- You do not need to buy new hardware or seek professional data recovery services until account-based retrieval has failed.

## Important reassurance
Encryption recovery prompts are a standard security feature and frequently appear after legitimate firmware updates, hardware changes, or Windows updates. Seeing this screen does not necessarily mean your data is lost or that you have been hacked; it indicates the security system is functioning and requires verification to proceed.

## Scope note
This guide provides first-step stabilization for accessing a device locked by disk encryption. It does not cover forensic data recovery or the repair of hardware failures.

## Important note
This information is for general guidance and does not constitute professional IT, legal, or security advice. If the device contains sensitive corporate data or evidence of a crime, follow your organization's formal incident response policy or consult a certified security professional. Microsoft and Apple support staff cannot bypass encryption or generate new keys for you if the original is lost.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://support.apple.com/en-gb/108794
- https://support.apple.com/en-gb/108934
- https://support.google.com/android/answer/9459346?hl=en-GB
- https://www.citizensadvice.org.uk/consumer/somethings-gone-wrong-with-a-purchase/if-you-think-youve-bought-stolen-goods/
