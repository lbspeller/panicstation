---
title: "What to do if… your computer’s firewall settings change and you did not change them"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "device clock reset"
  - "computer time wrong"
  - "phone date reset"
  - "system clock keeps changing"
  - "time and date incorrect"
  - "your clock is behind"
  - "your clock is ahead"
  - "secure website not loading"
  - "https sites not working"
  - "certificate date invalid"
  - "secure connection failed"
  - "connection not private warning"
  - "tls certificate error"
  - "browser says insecure"
  - "wifi works but secure sites fail"
  - "safari secure connection error"
  - "chrome clock error"
  - "firefox time error"
  - "device lost time after restart"
  - "laptop battery clock problem"
  - "system time desynchronized"
  - "what do i do if my clock reset"
  - "what do i do if secure sites wont load"
  - "help i cannot open secure websites"
  - "help my computer time is wrong"
  - "cmos battery failure"
  - "real time clock error"
  - "incorrect system date"
  - "web browser security warning"
  - "internet time sync failure"
last_reviewed: "2026-03-17"
---
# What to do if… your computer’s firewall settings change and you did not change them (UK)

## Short answer
Set your device date and time to "Set automatically" in system settings and restart your web browser. Do not bypass security warnings or enter sensitive data while the system clock is incorrect.

## Do not do these things
- Do not click through "Your connection is not private" or certificate expiry warnings to access sensitive sites.
- Do not enter passwords, banking details, or one-time codes on any page displaying a security alert.
- Do not install "root certificates" or "certificate fix" software from third-party pop-ups.
- Do not disable your firewall or antivirus HTTPS scanning as a first troubleshooting step.
- Do not assume the website is "down" until you have verified your local system time.

## What to do now
1. **Stop all sensitive transactions immediately.** **If you were attempting to access banking, GOV.UK, HMRC, or NHS services, close those tabs until the clock is synchronized.**
2. **Enable automatic time synchronization in your operating system.** 
   - **Windows:** Select Start → Settings → Time & language → Date & time → ensure **Set time automatically** and **Set time zone automatically** are both ON, then click **Sync now**.
   - **macOS:** Open System Settings → General → Date & Time → ensure **Set time and date automatically** is toggled ON.
   - **iPhone/iPad:** Open Settings → General → Date & Time → toggle **Set Automatically** to ON.
   - **Android:** Open Settings → System → Date & time → toggle **Set time automatically** and **Set time zone automatically** to ON.
3. **Restart the browser and the device.** **Close your web browser completely and reopen it; if the error persists, perform a full system restart to refresh hardware time sync.**
4. **Test the connection on a different network.** **Switch from Wi-Fi to a mobile hotspot to check if the issue is caused by a router-level time sync failure or a captive portal.**
5. **Check for failing hardware if the reset recurs.** **If the clock resets every time the device is powered off, the internal CMOS battery (on desktops) or the RTC battery (on laptops) may need professional replacement.**
6. **Report suspicious activity if you were redirected.** **If you believe you were lured to a fake site because of this error, take the following steps:**
   - Forward suspicious emails to **report@phishing.gov.uk**.
   - Forward suspicious text messages to **7726**.
   - If you are in England, Wales, or Northern Ireland and lost money, report to **Report Fraud** at reportfraud.police.uk.
   - If you are in Scotland, report via the **Police Scotland** online crime reporting form or call **101**.

## What can wait
- You do not need to replace your device immediately; clock resets are often solved by a simple setting change or a cheap battery replacement.
- You do not need to perform a factory reset or "System Restore" until basic time settings have been verified.
- You do do not need to contact your Internet Service Provider (ISP) unless the problem affects every device in your household simultaneously.

## Important reassurance
This issue is frequently a technical synchronization error rather than a security breach. Secure websites (HTTPS) use your system clock to verify that their security certificates are still valid; if your clock is wrong, the certificate appears expired, and the browser blocks access to protect you.

## Scope note
This guide provides first-step stabilization for digital access issues caused by time desynchronization. It does not cover deep hardware repair or the recovery of accounts that have already been compromised.

## Important note
This information is for general guidance and does not constitute professional IT or legal advice. If you suspect your financial accounts have been accessed while your device was in an insecure state, contact your bank using a known-safe device and official phone numbers immediately. Ensure your clock is correct before attempting to change passwords on the affected machine.

## Additional Resources
- https://www.ncsc.gov.uk/section/respond-recover/citizen-infected-devices
- https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks
- https://www.ncsc.gov.uk/collection/phishing-scams
- https://www.ncsc.gov.uk/guidance/hacked-device-action-to-take
- https://www.ncsc.gov.uk/collection/device-security-guidance/policies-and-settings/antivirus-and-other-security-software
