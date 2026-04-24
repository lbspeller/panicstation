---
title: "What to do if… your computer suddenly shows a new local administrator account you did not create"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - unexpected admin account
  - new local administrator
  - unknown administrator user
  - random admin on login screen
  - windows new admin account
  - mac new admin user
  - linux new sudo user
  - account i did not create
  - computer shows extra user
  - new user appears suddenly
  - possible hacked computer
  - suspicious privileged account
  - admin account added overnight
  - device compromise warning
  - unauthorised account on pc
  - local admin created without me
  - unknown account has admin rights
last_reviewed: "2026-03-08"
---

# What to do if… your computer suddenly shows a new local administrator account you did not create (USA)
## Short answer
Assume the device may be compromised: **disconnect it from the network immediately**, then **capture basic details without making changes** and secure your key accounts from a different trusted device.

## Do not do these things
- Don’t keep using the computer for email, banking, cloud storage, work logins, or password managers.
- Don’t delete the suspicious administrator account yet (it can erase evidence you’ll need to fix this safely).
- Don’t make lots of system changes “to see what happens” beyond the minimum steps below.
- Don’t install unknown “security” tools or follow untrusted commands from random posts/videos.
- Don’t let anyone you didn’t contact first remote into your computer.

## What to do now
1. **Disconnect from the network (now).**  
   Turn off Wi-Fi, unplug Ethernet, disconnect any VPN. If it’s safe and simple, unplug unknown USB devices.

2. **Record what changed (quickly).**  
   Take a photo/screenshot of the login screen showing the new account and write down:
   - exact account name
   - when you first noticed it
   - whether your usual account still appears to have admin rights

3. **If this is a work/school-managed device, stop and escalate.**  
   Contact your IT/helpdesk/security team and say: “A new local admin account appeared that I didn’t create. I’ve taken the device offline.”  
   Don’t attempt fixes unless they tell you to.

4. **From a different trusted device, secure your most important accounts first.**  
   Use your phone or another computer (not this one) to:
   - change your primary email password first
   - change passwords for financial accounts and any accounts used on this computer
   - enable or re-check MFA and sign out of other sessions/devices where available  
   If you reuse passwords, assume they’re exposed and change them everywhere.

5. **Check whether the “new admin” is a built-in/known account that was enabled or renamed (optional).**  
   Only if you can sign in with a **known-good** account you trust, use built-in user management to confirm:
   - the account exists and has administrator privileges
   - your usual account wasn’t silently demoted  
   If you can’t do this confidently, skip it.

6. **Run an offline scan, then a full scan.**  
   On Windows, run **Microsoft Defender Offline** (it restarts and scans outside normal Windows), then run a full scan. If you use another reputable security tool, run its full scan too.

7. **If compromise seems likely, prioritize the safer recovery path.**  
   If the account was truly unauthorized, keeps returning, or scans find malware, the least risky approach is often:
   - back up only irreplaceable personal files (documents/photos) cautiously
   - **wipe/reset and reinstall** the operating system from trusted sources
   - restore files only after scanning them, and only if you’re confident they’re clean  
   If you’re unsure, use reputable local repair support—avoid unknown “remote fix” offers.

8. **If there’s fraud, extortion, or a clear cybercrime, consider reporting.**  
   For ransomware/cybercrime, a common U.S. reporting route is the **FBI Internet Crime Complaint Center (IC3)**. If you’re an organization, follow your incident process and consider contacting law enforcement as appropriate.

## What can wait
- You do **not** need to identify the attacker or prove the exact method right now.
- You do **not** need to decide instantly whether to wipe/reinstall—first isolate, document basics, and secure key accounts.
- You do **not** need to contact every service today; start with email and finance.

## Important reassurance
This is scary because administrator access is powerful. The protective moves are straightforward: disconnect, preserve basic information, and secure the accounts that matter most.

## Scope note
This guide covers immediate stabilization and harm reduction. Deeper steps (forensics, legal/regulatory, insurance, workplace response) depend on whether it’s personal, employer-managed, or involves financial or data loss.

## Important note
This is general information, not professional security, legal, or law-enforcement advice. If the device is owned/managed by your employer or school, follow their policies. If you suspect financial fraud, contact your bank promptly.

## Additional Resources
- https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-offline
- https://learn.microsoft.com/en-us/defender-endpoint/safety-scanner-download
- https://www.ic3.gov/CSA/2025/251113.pdf
- https://www.ic3.gov/CSA/2023/230920.pdf
- https://www.fbi.gov/file-repository/ransomware-prevention-and-response-for-cisos.pdf