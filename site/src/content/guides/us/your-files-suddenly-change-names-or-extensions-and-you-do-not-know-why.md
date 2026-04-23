---
title: "What to do if… your files suddenly change names or extensions and you do not know why"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "bios password prompt"
  - "uefi password prompt"
  - "firmware password unknown"
  - "startup password appeared"
  - "power-on password suddenly"
  - "admin password at boot"
  - "supervisor password unknown"
  - "hdd password prompt"
  - "ssd password prompt"
  - "what do i do if my laptop asks for a bios password"
  - "what do i do if i forgot my bios password"
  - "what do i do if i am locked out of uefi"
  - "what do i do if uefi password is wrong"
  - "help i cannot enter bios"
  - "help i am stuck at bios screen"
  - "help i need a bios unlock code"
  - "help i bought a locked laptop"
  - "laptop padlock icon on screen"
  - "black screen with white password box"
  - "system disabled code 5 digits"
  - "system disabled code 8 digits"
  - "incorrect password attempt limit"
  - "bios update caused password prompt"
  - "refurbished laptop firmware lock"
  - "employer laptop boot password"
  - "school laptop bios lock"
  - "byos password"
  - "bios passward"
  - "stuck at startup"
  - "boot menu locked"
last_reviewed: "2026-03-17"
---
# What to do if… your files suddenly change names or extensions and you do not know why (USA)

## Short answer
Cease all password entry attempts to prevent a permanent hardware lockout and identify whether the device is personally owned or managed by an organization. Access your data via external backup if the OS still boots, or seek official manufacturer/IT support with proof of ownership.

## Do not do these things
- Don’t continue guessing passwords; many modern systems trigger a "System Disabled" state or permanent TPM lockout after 3–10 failed attempts.
- Don’t use "master password" generators or "BIOS bypass" software found on third-party forums, as these often contain malware or can corrupt the firmware chip.
- Don’t attempt to short-circuit motherboard jumpers or remove the CMOS battery on modern laptops; this rarely clears passwords on modern UEFI systems and may void warranties.
- Don’t pay third-party "unlocking services" that claim to provide codes for a fee; these are frequently scams.
- Don’t attempt to reset firmware settings while the drive is encrypted (e.g., BitLocker) unless you have already secured the recovery key.

## What to do now
1. **Record the exact screen state and any generated codes.**  
   **Photograph the password prompt and any "system disabled" or "hint" codes that appear after failed attempts.**
   - Document the Serial Number, Service Tag, or IMEI from the bottom of the laptop case.
   - Note if a padlock icon or specific brand logo (Dell, HP, Lenovo, Apple) is visible.
2. **Determine if the lockout is a Firmware Password or an OS Activation Lock.**  
   **Identify if the prompt appears immediately after the manufacturer logo (Firmware) or after the OS begins to load (Activation Lock).**
   - Firmware passwords (BIOS/UEFI) prevent the computer from starting at all.
   - Activation Locks (Apple ID/Google/Microsoft) occur during or after the OS boot process.
3. **Locate your device encryption recovery keys immediately.**  
   **Access a secondary device to retrieve recovery keys if your drive is encrypted, as firmware changes may trigger a request for them.**
   - Personal Microsoft accounts: `aka.ms/myrecoverykey`
   - Work or School accounts: `aka.ms/aadrecoverykey`
   - Apple devices: Check your Apple ID "Find My" status on another device.
4. **Initiate an authorized support request for managed devices.**  
   **Contact the IT department or Help Desk if the laptop was issued by an employer or educational institution.**
   - Remote management tools (MDM) can often reset these passwords if the device is still enrolled.
   - Provide the IT department with the codes recorded in Step 1.
5. **Contact the manufacturer’s official support for personal devices.**  
   **Use the official support portal for your brand (e.g., Dell Support, HP Customer Care, Apple Support) and prepare proof of purchase.**
   - Most manufacturers require an original invoice or receipt showing the serial number to process a "BIOS Password Reset" or "Master Password" request.
   - Be prepared to provide the specific "Challenge Code" displayed on the screen.
6. **Execute a formal dispute for used or refurbished purchases.**  
   **Contact the seller or the marketplace platform (eBay, Amazon, Back Market) to report the item as "not as described" if it arrived locked.**
   - If the seller does not provide a working password or a return label within 3 business days, escalate through the platform’s money-back guarantee.
7. **Submit a written billing dispute to your card issuer if the seller is unresponsive.**  
   **Send a formal written notice to your credit card company’s billing inquiries address if you cannot resolve the issue with the seller.**
   - Federal law (FCBA) requires you to submit this in writing within 60 days of the statement showing the charge for "billing errors."
   - Card network rules (Visa/Mastercard) may allow up to 120 days for "claims and defenses" related to goods that do not work as advertised.

## What can wait
- You do not need to decide on a motherboard replacement or professional data recovery service immediately.
- You do not need to attempt hardware disassembly or "chip flashing" today.
- You do not need to worry about permanent data loss if you have a recent cloud or external drive backup.

## Important reassurance
A firmware password prompt is a standard security feature and does not inherently mean your hardware is broken or your data is deleted. While these locks are designed to be difficult to bypass for security reasons, legitimate owners with proof of purchase can typically resolve the issue through official manufacturer channels.

## Scope note
This guide provides first-step stabilization for hardware lockouts. It does not provide instructions for bypassing security features or illegal access.

## Important note
Firmware security on modern laptops is often tied to the Trusted Platform Module (TPM) or security chips (like Apple’s T-series or M-series). In many cases, if a password is lost and official support cannot verify ownership, the only solution provided by the manufacturer may be a motherboard replacement. Ensure all ownership documentation is gathered before contacting support.

## Additional Resources
- https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/ransomware
- https://www.ic3.gov/CrimeInfo/Ransomware
- https://consumer.ftc.gov/articles/malware-how-protect-against-detect-and-remove-it
- https://support.microsoft.com/en-us/security/protect-your-pc-from-ransomware
- https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/ransomware
