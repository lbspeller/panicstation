---
title: "What to do if… your domain registrar shows a transfer or ownership change you did not request"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "email not syncing"
  - "mail app connection error"
  - "inbox stopped updating"
  - "email stuck loading"
  - "repeated sign-in prompts"
  - "cannot send or receive email"
  - "mail server unreachable"
  - "outlook app not syncing"
  - "gmail app not syncing"
  - "iphone mail not receiving emails"
  - "android mail sync problem"
  - "imap sync error"
  - "exchange account connection error"
  - "email works on web not phone"
  - "new emails not arriving"
  - "email app keeps disconnecting"
  - "sudden email outage"
  - "mail sync keeps failing"
  - "email account authentication error"
  - "email app suddenly stops"
  - "email connection errors"
  - "repeated connection errors"
  - "app suddenly stops syncing"
  - "troubleshoot email app"
  - "fix email sync"
  - "email provider status uk"
  - "icloud mail not syncing"
  - "sign in prompts keep appearing"
  - "email app sync failure"
  - "mobile mail sync issues"
  - "desktop mail app errors"
  - "syncing stopped suddenly"
  - "email app connection issues"
last_reviewed: "2026-03-17"
---
# What to do if… your domain registrar shows a transfer or ownership change you did not request (UK)

## Short answer
Verify the service status of your provider and test whether you can sign in via a web browser (webmail). If webmail works, the issue is likely a local app setting, a network restriction, or a temporary authentication token failure.

## Do not do these things
- Don't repeatedly enter your password if it is rejected; this can trigger automated account locks or security blocks.
- Don't delete the mail application or factory reset your device as a first troubleshooting step.
- Don't click "re-verify" or "update details" links within emails that claim your account is disconnected.
- Don't change multiple server settings (ports, SSL/TLS, IMAP paths) simultaneously.
- Don't ignore storage warnings for your Google, Microsoft, or iCloud account, as full storage stops all syncing.

## What to do now
1. **Check the official service status of your email provider.**
   - For iCloud: check the Apple System Status (UK) page.
   - For Gmail: check the Google Workspace Status Dashboard.
   - For Outlook / Hotmail / M365: check the Microsoft Service Health portal.
   - For UK ISPs (BT, Sky, Virgin Media): check their specific service status pages or "DownDetector" for localized outages.

2. **Test your credentials using a web browser (Webmail).**
   - **Attempt to sign in to your email account via its official website (e.g., gmail.com or outlook.com).**
   - If webmail works: the problem is restricted to your app, device, or network.
   - If webmail fails: the issue is with your password, account standing, or the provider's server.

3. **Verify account storage capacity.**
   - **Check if your cloud storage (Google Drive, OneDrive, or iCloud) is at its limit.**
   - Note that if your total account storage is full, you will stop receiving new emails even if your internet connection is active.

4. **Isolate network and connection variables.**
   - **Toggle Airplane Mode on and then off to reset the device radio.**
   - Switch from Wi-Fi to mobile data (or vice-versa) to see if the error persists.
   - Disable any active VPN or third-party firewall software temporarily to rule out traffic blocking.

5. **Review UK-specific device or account restrictions.**
   - **Check for any new "Age Verification" prompts if using an Apple device in the UK (iOS 26.4).**
   - Ensure "Automatic Date & Time" is enabled in system settings, as incorrect time-stamps prevent secure server handshakes.

6. **Refresh the authentication token without deleting the account.**
   - **Open the mail app settings and look for an "Update Password" or "Re-enter Credentials" prompt.**
   - If using a work or school account, check if your organization recently mandated a new multi-factor authentication (MFA) step.

7. **Check for "Too Many Connections" (IMAP limits).**
   - **Close the email app on other devices (tablets, laptops, old phones) temporarily.**
   - Some providers limit the number of simultaneous IMAP connections; having the app open on four or more devices can cause sync failures on the fifth.

8. **Remove and re-add only the affected account.**
   - **If all other steps fail and webmail is confirmed working, delete the specific email account from the app settings.**
   - Restart the device before adding the account back using the "Automatic" or "OAuth" setup path rather than manual IMAP/SMTP entries.

9. **Report suspicious prompts to the NCSC.**
   - **Forward any suspicious "Sign-in required" emails as an attachment to report@phishing.gov.uk.**
   - Do not use the links within the suspicious email to "fix" the sync issue.

## What can wait
- You do not need to upgrade your device or purchase a new email subscription immediately.
- You do not need to delete old emails to "lighten the load" unless your storage is explicitly reported as full.
- You do not need to contact your ISP unless you have confirmed that multiple websites (not just email) are failing to load.

## Important reassurance
Sync errors are frequently caused by external factors like server maintenance, expired security tokens, or network handovers. These issues usually do not indicate a "hacked" account or a permanent hardware failure. Systematic, one-at-a-time checks are the most effective way to identify the bottleneck.

## Scope note
This guide provides first-step stabilization for individual email synchronization failures. It does not cover complex enterprise server administration or the recovery of deleted data.

## Important note
This information is for general guidance and does not constitute professional IT advice. For managed corporate devices, always consult your internal IT help desk. If you suspect your credentials have been stolen, prioritize changing your password on a known-secure device and enabling multi-factor authentication.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://nominet.uk/complaints/
- https://www.nominet.uk/transferring-your-domain-name/
- https://nominet.uk/uk-registry/domain-disputes/
- https://www.reportfraud.police.uk/guide-to-reporting/
