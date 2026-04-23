---
title: "What to do if… your device keeps prompting for new system permissions after an update and it feels wrong"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "unexpected certificate warning"
  - "unknown certificate installed"
  - "untrusted certificate alert"
  - "certificate authority installed"
  - "profile installed unexpectedly"
  - "configuration profile appeared"
  - "unknown device management profile"
  - "vpn profile installed"
  - "mdm profile you didnt install"
  - "ios profile warning"
  - "iphone certificate trust settings"
  - "android user certificate warning"
  - "encryption and credentials certificates"
  - "possible man-in-the-middle"
  - "intercepted wifi security alert"
  - "device compromise suspicion"
  - "phishing profile install prompt"
  - "work or school profile on personal phone"
  - "certificate installed without permission"
  - "help i have an unknown profile on my iphone"
  - "what do i do if my phone says a certificate was installed"
  - "help i saw a profile warning on my ipad"
  - "what do i do if i see an unknown root certificate"
  - "my device has a management profile i dont recognize"
  - "warning certificate installed unexpectedly"
  - "iphone warning profile installed"
  - "android warning certificate credentials"
  - "ios vpn and device management alert"
  - "suspicious certificate authority alert"
  - "unexpected mdm enrollment warning"
last_reviewed: "2026-03-17"
---
# What to do if… your device keeps prompting for new system permissions after an update and it feels wrong (UK)

## Short answer
Disconnect the device from all internet sources immediately to prevent data interception. Identify and remove the unauthorized profile or certificate through your device settings before accessing any sensitive accounts.

## Do not do these things
- Do not tap “Allow,” “Trust,” or “Install” on any pop-up windows related to the warning.
- Do not log in to banking apps, email, or password managers while the warning is active.
- Do not delete personal files, photos, or messages in an attempt to fix the issue.
- Do not assume the certificate is safe because it uses a name like "Apple Support" or "Google Security."
- Do not perform a factory reset until you have attempted manual removal or consulted IT, as a reset may erase evidence of the source.

## What to do now
1. **Isolate the device from the network.**
   **Enable Airplane Mode immediately and ensure both Wi-Fi and Bluetooth are switched off.** If you are using an Ethernet connection, unplug the cable.
2. **Locate the profile on iPhone or iPad.**
   **Navigate to Settings → General → VPN & Device Management (or Profiles & Device Management on older versions).**
   - **Review the list under "Configuration Profiles" or "Mobile Device Management."**
   - **If an unknown entry exists, tap it, take a screenshot of the details, and select "Remove Profile" or "Delete Profile."**
   - **Restart your device immediately after removal.**
3. **Check for root certificate trust on iOS.**
   **Navigate to Settings → General → About → Certificate Trust Settings.**
   - **Check the section "Enable full trust for root certificates."**
   - **If any toggles are switched on for certificates you do not recognize, they must be disabled.** Note that removing the associated profile in Step 2 usually removes these entries.
4. **Remove user certificates on Android.**
   **Navigate to Settings → Security & privacy → More security settings → Encryption & credentials.**
   - **Tap "User credentials" to view certificates installed by apps or users.**
   - **Select any suspicious certificate and choose "Remove" or "Uninstall."**
   - **If you are unsure which is causing the issue, tap "Clear credentials" to remove all user-installed certificates.**
5. **Handle managed or supervised devices.**
   **Check if the device states it is "Supervised" or "Managed by [Organization]" at the top of the Settings menu.**
   - **If this is a work or school device, do not attempt further manual fixes.**
   - **Contact your organization's IT helpdesk and report that an unexpected certificate or management profile has appeared.**
6. **Secure your primary accounts from a different device.**
   **Use a known-secure computer or phone to change the passwords for your email, Apple Account, or Google Account.**
   - **Check for any new "Trusted Devices" or "Logged-in Sessions" that you do not recognize and remove them.**
   - **Ensure two-factor authentication (2FA) is active on your most sensitive accounts.**
7. **Report the incident if you suspect a scam or data theft.**
   **Contact the appropriate UK reporting body based on your location and the nature of the incident.**
   - **In England, Wales, or Northern Ireland, report to the "Report Fraud" service (formerly Action Fraud) via their website or by calling 0300 123 2040.**
   - **In Scotland, report to Police Scotland by calling 101.**
   - **If this is a business-related incident, report it to the National Cyber Security Centre (NCSC) via their official reporting portal.**

## What can wait
- You do not need to identify the exact "hacker" or origin of the link right now.
- You do not need to replace the physical device unless it remains unstable after removal and a factory reset.
- You do not need to notify every contact in your address book unless you have evidence that your accounts were used to send messages.

## Important reassurance
Seeing a certificate warning is a security feature working as intended; your device is alerting you to a change in how it handles data. By going offline and removing the unauthorized profile, you are taking the most effective steps to stop potential traffic interception before it causes harm.

## Scope note
This guide provides first-step stabilization for personal and work devices. It does not cover deep forensic analysis or the recovery of accounts that have already been fully compromised.

## Important note
This information is for general guidance and does not constitute professional IT or legal advice. Configuration profiles and certificates can provide deep access to device traffic; if a profile cannot be removed or repeatedly reappears, the device may require professional servicing or a full wipe and reinstall by a certified technician.

## Additional Resources
- https://www.ncsc.gov.uk/collection/device-security-guidance/policies-and-settings/using-third-party-applications-on-devices
- https://support.google.com/android/answer/9431959?hl=en-GB
- https://support.google.com/android/answer/13530434?hl=en-GB
- https://support.apple.com/en-gb/102188
- https://support.apple.com/en-gb/guide/iphone/iph251e92810/ios
