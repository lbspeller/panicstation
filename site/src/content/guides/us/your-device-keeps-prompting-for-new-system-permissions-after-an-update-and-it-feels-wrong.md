---
title: "What to do if… your device keeps prompting for new system permissions after an update and it feels wrong"
jurisdiction: "USA"
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
  - "what do i do if my phone says a certificate was installed"
  - "what do i do if i see an unknown configuration profile"
  - "what do i do if my iphone asks to trust a certificate"
  - "what do i do if an android certificate warning pops up"
  - "help i have a profile i didnt install"
  - "help my phone says its managed by an organization"
  - "help i clicked install on a certificate by mistake"
  - "help my vpn profile looks suspicious"
  - "smell of burning plastic near charger"
  - "device getting very hot during profile install"
  - "unusual pop up asking for device passcode"
  - "screen flickering after clicking link"
  - "slow internet after certificate alert"
  - "profile installed on macbook unexpectedly"
  - "remove untrusted root certificate"
  - "clear credentials android meaning"
last_reviewed: "2026-03-17"
---
# What to do if… your device keeps prompting for new system permissions after an update and it feels wrong (USA)

## Short answer
Take the device offline immediately by enabling Airplane Mode, identify the unknown profile or certificate in your security settings, and remove it before accessing any sensitive accounts.

## Do not do these things
- Don't tap “Trust,” “Allow,” or “Install” to make the notification disappear.
- Don't sign into banking, email, or password managers while the warning is active.
- Don't enter your device passcode or account password into any unexpected pop-up windows.
- Don't ignore the warning even if your device seems to be working normally.

## What to do now
1. **Isolate the device from all networks.**  
   **Immediately turn on Airplane Mode and disable Wi-Fi and Bluetooth.** This prevents an attacker from intercepting your data or sending further commands to the device while you troubleshoot.

2. **Check for unknown profiles on iPhone or iPad.**  
   **Navigate to Settings → General → VPN & Device Management.** 
   - Look for any entries under "Configuration Profiles" or "Mobile Device Management." 
   - If you see a profile you do not recognize, tap it, **screenshot the details**, then tap **Remove Profile**.
   - Restart the device immediately after removal.

3. **Verify certificate trust settings on iOS.**  
   **Go to Settings → General → About → Certificate Trust Settings.** 
   - Under "Enable full trust for root certificates," ensure no unknown certificates are toggled on. 
   - If an unknown certificate is trusted, you must find and delete the profile that installed it (as described in step 2).

4. **Remove suspicious certificates on Android.**  
   **Go to Settings → Security & privacy → More security settings → Encryption & credentials → User credentials.** 
   - Review the list for any names you do not recognize (often listed as "CA certificates" or "VPN/App certificates").
   - Tap the suspicious entry and select **Remove** or **Uninstall**.
   - If you are unsure which is the problem, you may select **Clear credentials** to remove all user-installed certificates at once.

5. **Check for profiles on macOS.**  
   **Open System Settings and search for "Profiles."** 
   - If the "Profiles" icon is visible, open it and review the installed management profiles.
   - Select any unknown profile and click the minus (-) button to remove it. 
   - If the device is owned by an employer, do not remove profiles without contacting their IT department first.

6. **Secure your most sensitive accounts from a different device.**  
   **Log into your primary email, Apple Account, or Google Account using a known-safe computer.** 
   - Check for "Authorized Devices" or "Active Sessions" and sign out of the suspicious device. 
   - Update your passwords and ensure Multi-Factor Authentication (MFA) is active.

7. **Report the incident if you suspect fraud or data theft.**  
   **Contact the appropriate agency if you believe your credentials were intercepted.**
   - For identity theft concerns, visit **IdentityTheft.gov**.
   - For general scam or fraud reporting, visit **ReportFraud.ftc.gov**.
   - For cybercrime involving financial loss, file a report at **IC3.gov**.

## What can wait
- You do not need to perform a factory reset immediately if you successfully removed the profile and the warning has stopped.
- You do not need to replace your hardware unless a professional technician confirms a deep-level compromise.
- You do not need to notify every contact in your phone unless you have evidence that your accounts were used to send messages.

## Important reassurance
Digital warnings about certificates and profiles are built-in safety features designed to protect you from "man-in-the-middle" attacks. Seeing the warning means the device's security system is working. By taking the device offline and removing the unknown entry, you are stopping the potential interception before it results in account loss.

## Scope note
This guide provides first-step stabilization for unexpected certificate or profile alerts on personal devices. If your device is managed by a corporation or school, some settings may be locked, and you must coordinate removal with their authorized IT administrator.

## Important note
This information is for emergency stabilization and does not constitute professional cybersecurity or legal advice. Technical steps can vary based on specific OS versions (e.g., iOS 26 or Android updates). Always use official government or manufacturer websites to verify reporting links.

## Additional Resources
- https://consumer.ftc.gov/articles/how-websites-apps-collect-use-your-information
- https://consumer.ftc.gov/consumer-alerts/2024/08/three-ways-protect-personal-info-your-phone
- https://support.apple.com/guide/iphone/control-access-to-hardware-features-iph168c4bbd5/ios
- https://support.google.com/android/answer/9431959?hl=en
- https://support.google.com/android/answer/13530434?hl=en
