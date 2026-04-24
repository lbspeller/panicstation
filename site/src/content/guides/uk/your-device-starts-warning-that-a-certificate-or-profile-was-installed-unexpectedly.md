---
title: "What to do if… your device starts warning that a certificate or “profile” was installed unexpectedly"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - unexpected certificate warning
  - unknown certificate installed
  - untrusted certificate alert
  - certificate authority installed
  - profile installed unexpectedly
  - configuration profile appeared
  - unknown device management profile
  - vpn profile installed
  - mdm profile you didnt install
  - ios profile warning
  - iphone certificate trust settings
  - android user certificate warning
  - encryption and credentials certificates
  - possible man-in-the-middle
  - intercepted wifi security alert
  - device compromise suspicion
  - phishing profile install prompt
  - work or school profile on personal phone
  - certificate installed without permission
last_reviewed: "2026-03-09"
---

# What to do if… your device starts warning that a certificate or “profile” was installed unexpectedly (UK)

## Short answer
Treat this as a potential device-compromise or “traffic interception” risk: disconnect the device from the internet, then identify and remove any unknown certificate/profile (or contact your organisation if it’s a managed/work device) before you log in to anything.

## Do not do these things
- Don’t tap “allow”, “trust”, or “install” just to make the warning go away.
- Don’t sign into banking, email, password managers, or work systems from that device until you’ve checked what changed.
- Don’t delete random things in panic (apps, photos, messages) — focus on the certificate/profile first.
- Don’t assume it’s harmless because it uses a familiar name (attackers often mimic real organisations).
- Don’t factory reset immediately unless removal fails or the profile keeps returning (it’s disruptive and can remove useful context like what was installed and when).

## What to do now
1. **Pause and isolate the device (30 seconds).**  
   Turn on Airplane Mode (or switch off Wi-Fi and mobile data). If you’re on public Wi-Fi, leave that network.

2. **Work out what kind of thing it is.**
   - **“Profile”, “Device Management”, “MDM”, “VPN”, “Work/School”** usually means a configuration/management profile.
   - **“Certificate”, “CA”, “Root certificate”, “Certificate authority”** usually means a trust certificate (high risk if you didn’t intend it).

3. **iPhone/iPad: check for and remove unknown profiles.**  
   Go to **Settings → General → VPN & Device Management**.  
   - If you see a profile you don’t recognise, open it, **take a screenshot of the name/organisation/date**, then choose **Remove/Delete Profile** and restart the device.  
   - If it says the device is **managed** (work/school), you may not be able to remove it yourself — go to step 6.

4. **iPhone/iPad: check certificate trust (if the warning mentions trust/root/CA).**  
   Go to **Settings → General → About → Certificate Trust Settings**.  
   - If anything is enabled under “full trust” that you didn’t intentionally install for a known purpose, treat it as suspicious. The practical fix is usually to remove the **profile** that installed it (step 3), then restart.

5. **Android: remove user-installed certificates (menu names vary by device).**  
   Look for something like **Settings → Security (or Security & privacy) → More security settings → Encryption & credentials**.  
   - Check **User credentials/User certificates** and remove anything you don’t recognise.  
   - If you can’t tell what’s safe to remove, use **Clear credentials** (this removes *user-installed* certificates; it can break some work/VPN apps, which is usually preferable to leaving a suspicious certificate in place).

6. **If this is a work/school device or you use a work profile:**  
   Contact your IT/helpdesk and say: **“I got an unexpected certificate/profile warning. I put the device offline and haven’t logged in. Can you confirm if an MDM/VPN/certificate was pushed to my device and advise removal?”**

7. **From a different, known-clean device, secure your most sensitive accounts.**  
   Start with **email** (because it controls password resets), then your **Apple Account/Google Account**, then banking.  
   - Change passwords and turn on (or re-check) two-step verification.  
   - Review recent sign-ins / connected devices and remove anything you don’t recognise.

8. **If the warning appeared right after clicking a link, installing an app, or joining Wi-Fi:**  
   - Uninstall any newly installed app(s) you don’t fully trust.  
   - “Forget” the Wi-Fi network and avoid re-joining it.  
   - Update the operating system and reboot.

9. **If you shared details, lost money, or this looks like a scam:**  
   - For England, Wales, or Northern Ireland, report cybercrime/fraud via **Report Fraud (Action Fraud’s reporting route)**.  
   - If you live in Scotland, report to **Police Scotland (101)**.  
   - If this involves an **organisation** (for example, a workplace incident or live attack on business systems), follow your organisation’s incident process and consider reporting through the **NCSC** route.

## What can wait
- You don’t need to decide today whether you’ve been “hacked” — first make the device safe and protect accounts.
- You don’t need to do a full factory reset unless the profile/certificate can’t be removed or keeps reappearing.
- You don’t need to contact every service you use — start with email plus the accounts that can reset everything else.

## Important reassurance
Unexpected certificate/profile warnings are a valid reason to pause. Going offline, checking what was installed, and protecting your email account are the right “buy time” moves.

## Scope note
These are first steps to reduce harm and stop further access. If the device is managed by an employer/school, or the profile/certificate won’t stay removed, you may need specialist IT support to fully clean and verify the device.

## Important note
This is general safety information, not legal or professional advice. If you’re unsure whether a profile/certificate is legitimate, default to caution: keep the device offline and get help from the official organisation that would have installed it (your employer/school IT) or the device maker’s support.

## Additional Resources
- https://support.apple.com/guide/iphone/install-or-remove-configuration-profiles-iph6c493b19/ios
- https://support.apple.com/en-gb/102390
- https://support.google.com/pixelphone/answer/2844832?hl=en-GB
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://www.reportfraud.police.uk/
- https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/cyber-crime
- https://report.ncsc.gov.uk/