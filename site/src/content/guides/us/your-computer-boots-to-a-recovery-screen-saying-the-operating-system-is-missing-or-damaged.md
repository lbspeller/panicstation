---
title: "What to do if… your computer boots to a recovery screen saying the operating system is missing or damaged"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "unexpected admin account"
  - "new local administrator"
  - "unknown administrator user"
  - "random admin on login screen"
  - "windows new admin account"
  - "mac new admin user"
  - "linux new sudo user"
  - "account i did not create"
  - "computer shows extra user"
  - "new user appears suddenly"
  - "possible hacked computer"
  - "suspicious privileged account"
  - "admin account added overnight"
  - "device compromise warning"
  - "unauthorised account on pc"
  - "local admin created without me"
  - "unknown account has admin rights"
  - "help i have a new admin user"
  - "my pc has a new account"
  - "what do i do if a new admin appears"
  - "what do i do if my computer was hacked"
  - "help i see an unknown user"
  - "my login screen shows a new name"
  - "unrecognized administrator account"
  - "ghost admin account windows"
  - "strange user on login screen"
  - "pc security breach admin"
  - "unauthorized privilege escalation"
  - "unwanted computer user account"
  - "suspicious account on laptop"
last_reviewed: "2026-03-17"
---
# What to do if… your computer boots to a recovery screen saying the operating system is missing or damaged (USA)

## Short answer
Assume the device is compromised: **disconnect it from all networks immediately** and do not log into the suspicious account. Secure your sensitive accounts from a separate, trusted device before attempting to investigate or wipe the machine.

## Do not do these things
- Do not log into the suspicious account to "see what is inside" or "check settings."
- Do not keep using the computer for email, banking, work, or password managers.
- Do not delete the suspicious account immediately, as this may destroy digital evidence or logs needed for recovery.
- Do not install "fix-it" tools or follow unverified technical advice from social media.
- Do not allow anyone to remotely access the device unless you initiated the contact through an official, verified support channel.
- Do not enter your BitLocker or FileVault recovery keys while the device is in an uncertain state unless prompted by an offline scan tool you initiated.

## What to do now
1. **Physically isolate the device from the network.**
   - Turn off the Wi-Fi using a hardware switch or software menu.
   - Unplug the Ethernet cable.
   - Disconnect all VPNs and remove any unknown USB drives or peripherals.

2. **Record the visible details using a separate camera.**
   - Take a clear photo of the login screen showing the new account name.
   - Note the exact spelling and any profile pictures associated with the account.
   - Document if your own account is still present and whether it still has its expected privileges.

3. **Secure your primary digital identity from a different device.**
   - Use a separate phone or computer (one you are certain is safe) to change your main email password.
   - Change passwords for banking, primary cloud storage, and any account that uses the same password as your computer login.
   - Use the "Sign out of all sessions" or "Check active devices" feature on sites like Google, Microsoft, or Apple.

4. **Escalate immediately if the device is managed by an employer or school.**
   - Stop all actions and contact your IT helpdesk or Security Operations Center.
   - Tell them: "I have identified an unauthorized local administrator account on my managed device; I have taken it offline and am awaiting instructions."

5. **Determine if the account is a system-managed "Shadow" or "Utility" account.**
   - **Research the account name using a separate device.**
   - Check if the name matches Windows 11 "Administrator Protection" (25H2+) features or specific manufacturer utility accounts (e.g., OEM support accounts).
   - If the account name appears to be a random string or a person's name you do not know, treat it as a high-threat compromise.

6. **Initiate an offline security scan if you are on Windows.**
   - **Open Windows Security, go to Virus & Threat Protection, and select Scan Options.**
   - **Select Microsoft Defender Offline scan and click Scan Now.**
   - Note that the computer will restart and run in a restricted environment; ensure you have your BitLocker recovery key available on a separate device before starting, as it may be requested.

7. **Prepare for a clean reinstallation if the source is unverified.**
   - **Back up only essential, non-executable files (photos, documents) to a brand-new external drive.**
   - **Wipe the internal drive and reinstall the operating system using a "Clean Install" method from verified installation media.**
   - Do not restore settings or "Applications" from a backup made after the suspicious account appeared.

8. **Report the incident if there is evidence of financial fraud or data theft.**
   - File a report with the **FBI Internet Crime Complaint Center (IC3)** if you suspect a remote hack or extortion.
   - Visit **identitytheft.gov (FTC)** if your personal information or Social Security number may have been accessed via the device.

## What can wait
- You do not need to figure out "how" the attacker got in before taking protective steps.
- You do not need to notify all your contacts yet; focus on email and financial institutions first.
- You do not need to buy new hardware unless a professional confirms a firmware-level infection.

## Important reassurance
It is normal to feel concerned when your system security is uncertain. Identifying the account is the first step in stopping further access. By disconnecting the device, you have already removed the attacker's primary way to control the machine or steal more data.

## Scope note
This guide provides first-step stabilization only. It does not cover long-term forensic analysis, legal proceedings, or corporate incident response protocols.

## Important note
This information is for general guidance and is not a substitute for professional cybersecurity, legal, or law enforcement advice. If the computer is owned by an organization, their specific security policies take precedence. If you suspect your financial accounts are actively being accessed, contact your bank's fraud department immediately.

## Additional Resources
- https://support.microsoft.com/en-us/windows/startup-repair-85deb0b9-fa3d-44a3-a3d0-d0f1515c2c9b
- https://support.microsoft.com/en-us/windows/windows-recovery-environment-0eb14733-6301-41cb-8d26-06a12b42770b
- https://support.microsoft.com/en-us/windows/recovery-options-in-windows-31ce2444-7de3-818c-d626-e3b5a3024da5
- https://support.microsoft.com/en-us/windows/recovery-drive-abb4691b-5324-6d4a-8766-73fab304c246
- https://www.dell.com/support/contents/en-us/article/product-support/self-support-knowledgebase/fix-common-issues/no-boot
