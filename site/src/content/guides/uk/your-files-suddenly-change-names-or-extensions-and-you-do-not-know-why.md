---
title: "What to do if… your files suddenly change names or extensions and you do not know why"
jurisdiction: "UK"
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
  - "laptop asks for password before windows"
  - "stuck at bios password screen"
  - "can-t enter bios setup"
  - "locked out of boot menu"
  - "after bios update password request"
  - "after repair password request"
  - "second-hand laptop password locked"
  - "ex-work laptop password"
  - "school laptop bios lock"
  - "bitlocker recovery risk"
  - "laptop password help"
  - "what do i do if my laptop is locked"
  - "what do i do if bios asks for password"
  - "help i forgot my bios password"
  - "help i bought a locked laptop"
  - "system password error code"
  - "forgotten supervisor password"
  - "locked uefi settings"
  - "blue box password prompt"
  - "enter administrator password"
  - "service tag password recovery"
  - "consumer rights faulty laptop"
  - "second hand laptop refund"
  - "locked laptop return rights"
last_reviewed: "2026-03-17"
---
# What to do if… your files suddenly change names or extensions and you do not know why (UK)

## Short answer
Cease all password attempts to avoid a permanent hardware lockout. Verify the lock type, secure your data if the operating system is still accessible, and seek an official resolution through your IT department, the manufacturer, or the retailer.

## Do not do these things
- Do not enter multiple random password guesses, as many modern systems impose a permanent lockout or "halt" after 3 to 5 failed attempts.
- Do not use third-party "BIOS master password" generators or paid "unlock" websites, which are frequently scams and may contain malware.
- Do not attempt to dismantle the laptop to "short" motherboard pins or remove the CMOS battery unless you are following an official service manual, as this rarely works on modern encrypted systems and can cause physical damage.
- Do not modify any boot or security settings if you have partial access while drive encryption (like BitLocker) is active, as this can trigger a recovery key request.

## What to do now
1. **Document the exact error message and any displayed codes.**  
   **Record the precise wording of the prompt, such as "System Password," "Administrator Password," or "HDD/SSD Password."**  
   - Take a high-resolution photo of the screen.  
   - Note the laptop serial number, Service Tag, or IMEI from the bottom of the case.  
   - If a "System Halt" code or "Challenge Code" appears after failed attempts, write it down exactly.
2. **Identify the specific type of lock to determine the resolution path.**  
   **Determine if the prompt appears before the operating system starts (Firmware/BIOS) or specifically mentions the drive (HDD/SSD).**  
   - A BIOS/UEFI lock usually prevents any boot or access to settings.  
   - A Drive Lock (HDD/SSD) is stored on the storage media itself; moving the drive to another computer will not bypass this.
3. **Check for external management if the device belongs to an organization.**  
   **Contact your employer's IT helpdesk or school administration immediately if the device is managed.**  
   - Managed laptops often receive remote firmware updates that enable security prompts by policy.  
   - Only the authorized administrator can provide the bypass or unlock code.
4. **Locate drive encryption recovery keys before attempting any hardware changes.**  
   **Check your Apple Account or Microsoft Account for BitLocker or FileVault recovery keys if you still have access to a desktop.**  
   - For Windows, visit the Microsoft account recovery key page on another device.  
   - For Mac, ensure you have your Apple Account credentials ready.
5. **Request a "Master Password" or "Release Code" from the manufacturer with proof of ownership.**  
   **Contact the official technical support line for the laptop brand (e.g., Dell, HP) and be prepared to provide a receipt.**  
   - Some manufacturers (like Dell) can generate a release code based on the Service Tag and an on-screen error code.  
   - Be aware that brands like Lenovo and Apple Silicon-based Macs may require a motherboard replacement if the password is lost, as there are no "backdoor" codes.
6. **Exercise your "Short-term Right to Reject" if the laptop was recently purchased.**  
   **Contact the retailer within 30 days of purchase to demand a full refund for a "faulty or not as described" product under the Consumer Rights Act 2015.**  
   - A BIOS-locked laptop is not of "satisfactory quality" if the lock was not disclosed.  
   - If more than 30 days have passed but less than 6 months, the retailer is entitled to one attempt at repair or replacement before you can claim a partial refund.
7. **Initiate a Section 75 claim or Chargeback if the seller is unresponsive.**  
   **Contact your credit card provider for a Section 75 claim if the laptop cost more than £100 and was sold with an undisclosed lock.**  
   - For debit card purchases, or items under £100, ask your bank for a "Chargeback" within 120 days of the transaction.  
   - Provide your photos of the lock and evidence of your failed attempts to resolve the issue with the seller.

## What can wait
- You do not need to decide on a motherboard replacement immediately.
- You do not need to pay for out-of-warranty repairs until you have exhausted consumer rights claims against the seller.
- You do not need to attempt data recovery on an HDD-locked drive until you have confirmed if a master code is available from the drive manufacturer.

## Important reassurance
Firmware locks often appear due to routine security updates, administrative errors during refurbishment, or previous ownership settings that were not cleared. This is a common technical hurdle with established legal and manufacturer-led resolution paths. Following these steps ensures you do not inadvertently brick the hardware or lose access to your consumer protections.

## Scope note
This guide provides immediate stabilization and first-response steps for hardware-level password lockouts. It does not cover Windows login passwords, website passwords, or forensic data recovery.

## Important note
This information is for guidance only and does not constitute legal or professional technical advice. BIOS and firmware security is designed to be robust; in many modern systems, the lock cannot be bypassed without the original password or expensive hardware replacement. Ensure you have definitive proof of ownership before contacting manufacturers, as they are legally obligated to verify your identity before assisting with security overrides.

## Additional Resources
- https://www.ncsc.gov.uk/ransomware/home
- https://www.ncsc.gov.uk/section/respond-recover/sole-ransomware-attack
- https://www.gov.uk/guidance/where-to-report-a-cyber-incident
- https://www.ncsc.gov.uk/guidance/hacked-device-action-to-take
- https://www.ncsc.gov.uk/section/respond-recover/sole-infected-devices
