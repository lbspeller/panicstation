---
title: "What to do if… your computer’s firewall settings change and you did not change them"
jurisdiction: "USA"
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
  - "safari cannot establish secure connection"
  - "chrome clock error"
  - "firefox time error"
  - "device lost time after restart"
  - "laptop battery clock problem"
  - "what do i do if my clock is wrong"
  - "what do i do if websites wont load clock error"
  - "what do i do if computer time is incorrect"
  - "what do i do if phone date is wrong"
  - "help i cannot open secure sites"
  - "help i have a certificate error"
  - "help i keep getting privacy warnings"
  - "help i have a system clock error"
  - "my browser says clock is ahead"
  - "my browser says clock is behind"
  - "my computer time is wrong"
  - "my laptop date reset"
  - "wrong system time"
  - "clock synchronization failure"
  - "cmos battery dead"
  - "rtc battery error"
  - "network time protocol failure"
  - "ssl certificate time error"
  - "out of sync clock"
  - "incorrect time zone"
last_reviewed: "2026-03-17"
---
# What to do if… your computer’s firewall settings change and you did not change them (USA)

## Short answer
Correct the date, time, and time zone in your device settings (selecting "Set automatically" where available), then restart your web browser. Do not bypass security warnings while the system clock is incorrect.

## Do not do these things
- Do not click "Advanced" and "Proceed" on browser certificate warnings while the clock is wrong.
- Do not enter passwords, credit card numbers, or MFA codes on any page showing a "Your connection is not private" error.
- Do not download or install "security fix" software or "root certificate" updates from pop-up advertisements.
- Do not attempt to "fix" the router or ISP settings before confirming the local device time is correct.

## What to do now
1. **Cease all sensitive digital activity on the affected device.** Stop using banking apps, email, or corporate logins until the system clock is synchronized, as encryption relies on time-matching.
2. **Synchronize the clock using official system settings.**
   - **Windows:** Open **Settings** → **Time & language** → **Date & time**. Toggle **Set time automatically** to ON. Under **Additional settings**, click **Sync now** to force a refresh.
   - **Mac:** Open **System Settings** → **General** → **Date & Time**. Toggle **Set time and date automatically** to ON. Click **Set**, ensure the source is `time.apple.com`, and click **Done**.
   - **iPhone/iPad:** Open **Settings** → **General** → **Date & Time**. Toggle **Set Automatically** to ON.
   - **Android:** Open **Settings** → **System** (or **General management**) → **Date & time**. Toggle **Use network-provided time** (or **Automatic date & time**) to ON.
3. **Verify the Time Zone is correct for your physical location.** An accurate clock with an incorrect time zone will still cause "Certificate Not Yet Valid" or "Expired" errors.
4. **Close and restart the web browser completely.** If the errors persist, perform a full device restart to clear the cached security state.
5. **Test the connection on a different network if the issue remains.** Connect to a mobile hotspot. If secure sites load on a different network, your primary router or network filter may be blocking time-syncing (NTP) traffic.
6. **Observe if the clock resets again after a power cycle.** If the time jumps back to a specific past date (e.g., January 1st) every time the device is unplugged or restarted, the internal battery (CMOS/RTC) is likely failing.
7. **Report suspected cyber-enabled fraud if you entered data while the warning was active.**
   - Use **ReportFraud.ftc.gov** to report to the Federal Trade Commission.
   - Use **ic3.gov** to file a complaint with the FBI’s Internet Crime Complaint Center.

## What can wait
- You do not need to replace hardware immediately; manual time correction can serve as a temporary fix.
- You do not need to reinstall your Operating System or browser software.
- You can postpone changing your passwords until you are on a device with a verified secure connection.

## Important reassurance
System clock resets are common and often caused by a completely drained battery or a minor software sync error. Browser security warnings are functioning correctly in this scenario; they are designed to block connections when time-sensitive security certificates cannot be verified against your local clock.

## Scope note
This guidance covers first-step stabilization for devices with incorrect system time causing SSL/TLS certificate errors. It does not provide hardware repair instructions or long-term malware removal procedures.

## Important note
This information is for technical stabilization and is not professional IT, legal, or financial advice. If you suspect your device was tampered with or an account was compromised, use a separate, known-secure device to change your passwords and contact your financial institutions directly through official channels.

## Additional Resources
- https://support.microsoft.com/en-us/windows/firewall-and-network-protection-in-the-windows-security-app-ec0844f7-aebd-0583-67fe-601ecf5d774f
- https://support.microsoft.com/en-us/windows/virus-and-threat-protection-in-the-windows-security-app-1362f4cd-d71a-b52a-0b66-c2820032b65e
- https://support.microsoft.com/en-us/windows/automatically-fix-windows-security-issues-9041b976-e664-1a1d-0a82-607b0cbd7fc4
- https://support.microsoft.com/en-us/windows/protect-yourself-from-tech-support-scams-2ebf91bd-f94c-2a8a-e541-f5c800d18435
- https://consumer.ftc.gov/articles/malware-how-protect-against-detect-and-remove-it
