---
title: "What to do if… your computer suddenly shows a new local administrator account you did not create"
jurisdiction: "UK"
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

# What to do if… your computer suddenly shows a new local administrator account you did not create (UK)
## Short answer
Treat this as a possible compromise: **disconnect the computer from the internet immediately**, then **capture basic details without making changes** and get the device checked.

## Do not do these things
- Don’t keep using the computer for email, banking, password managers, or work systems.
- Don’t delete the suspicious admin account yet (it can remove clues needed to fix this safely).
- Don’t “poke around” making lots of changes (disabling services, uninstalling things, editing settings) beyond the minimum steps below.
- Don’t install random “cleanup” tools or follow untrusted commands from forums/videos.
- Don’t allow anyone you didn’t contact first to remote into your device.

## What to do now
1. **Isolate the device (now).**  
   Turn off Wi-Fi, unplug Ethernet, disconnect any VPN. If it’s safe and simple, unplug unknown USB devices.

2. **Capture what you’re seeing (keep it simple).**  
   Take a photo/screenshot of:
   - the login screen showing the new account name
   - any user list you can see without digging  
   Write down the exact account name and when you first noticed it.

3. **If it’s work/school/IT-managed, stop and escalate.**  
   Contact your IT/helpdesk/security team and say: “A new local administrator account appeared that I didn’t create. I’ve taken the device offline.”  
   Don’t attempt fixes unless they instruct you to.

4. **From a different trusted device, secure your key accounts first.**  
   Use your phone or another computer (not this one) to:
   - change your primary email password (because it controls resets)
   - change passwords for banking/finance and any accounts you used on this computer
   - enable or re-check multi-factor authentication (MFA) and sign out of other sessions where your services let you  
   If you reuse passwords, assume they’re exposed and change those everywhere.

5. **Check whether the “new admin” is a built-in/known account that was enabled or renamed (optional).**  
   Only do this if you can sign in with a **known-good** account you already trust. Use built-in user management to confirm:
   - the unknown account exists
   - it has administrator privileges
   - whether your usual account’s privileges changed  
   If this feels uncertain, skip it and move on.

6. **Run an offline scan, then a full scan.**  
   On Windows, run **Microsoft Defender Offline** (it restarts and scans outside normal Windows), then run a full scan. If you use another reputable security product, run its full scan too.

7. **If anything looks wrong, choose the safer recovery path.**  
   If the account was truly unauthorised, keeps returning, or scans find malware, the least risky approach is often:
   - back up only irreplaceable personal files (documents/photos) cautiously
   - **wipe/reset and reinstall** the operating system from trusted sources
   - restore files only after scanning them, and only if you’re confident they’re clean  
   If you’re not confident, use reputable in-person support rather than unknown “remote fix” offers.

8. **If money was lost or you were scammed, report it.**  
   If you think you’ve been hacked as part of an online scam or fraud:
   - In **England/Wales/Northern Ireland**, reporting is typically via **Report Fraud (Action Fraud)**.
   - In **Scotland**, fraud reporting is typically via **Police Scotland (101)**.  
   If there’s immediate danger, call **999**.

## What can wait
- You do **not** need to work out who did it or how right now.
- You do **not** need to decide immediately whether to wipe/reinstall—first isolate, capture basics, and secure key accounts.
- You do **not** need to contact lots of companies at once; start with your email and financial accounts.

## Important reassurance
A surprise administrator account is a reasonable reason to be alarmed. Taking the device offline and protecting your email and bank access are strong, protective first steps—even before you know the full cause.

## Scope note
This is first-steps-only guidance to stabilise and reduce harm. Later decisions (forensics, rebuilds, workplace incident handling, insurance, legal/regulatory) depend on whether it’s personal vs managed, and whether any data or money was affected.

## Important note
This is general information, not professional IT, legal, or security advice. If the device is owned/managed by your employer or school, follow their security process. If you suspect fraud or financial loss, contact your bank promptly.

## Additional Resources
- https://www.ncsc.gov.uk/section/respond-recover/ml-ransomware-attack
- https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks
- https://www.ncsc.gov.uk/section/respond-recover/ml-malware
- https://signpost-cyber-incident.service.gov.uk/
- https://www.gov.uk/report-suspicious-emails-websites-phishing
- https://stopthinkfraud.campaign.gov.uk/reporting-fraud/
- https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-offline