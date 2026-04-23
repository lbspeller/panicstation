---
title: "What to do if… your cloud storage suddenly shows a large upload you cannot explain"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "unexpected proxy"
  - "proxy server suddenly enabled"
  - "computer using unknown proxy"
  - "web traffic routed through proxy"
  - "browser redirect through proxy"
  - "system proxy settings changed"
  - "windows proxy turned on"
  - "mac proxy settings changed"
  - "vpn i did not install"
  - "unknown network configuration"
  - "possible malware proxy"
  - "suspicious internet connection"
  - "device may be managed"
  - "proxy auto configuration pac file"
  - "automatic proxy setup enabled"
  - "setup script i dont recognise"
  - "credentials at risk online"
  - "account takeover prevention"
  - "public wifi tampering concern"
  - "work laptop proxy enforced"
  - "residential proxy malware"
  - "what do i do if computer has proxy"
  - "what do i do if web traffic redirected"
  - "what do i do if proxy settings locked"
  - "what do i do if vpn started itself"
  - "help i see a proxy i did not set"
  - "help i have a suspicious proxy server"
  - "help i cannot turn off proxy"
  - "help i have unauthorized proxy"
  - "my computer is using a proxy"
  - "my browser settings changed"
  - "my internet is going through a proxy"
  - "my network settings are suspicious"
  - "smell of burning plastic"
  - "visible popups"
  - "slow internet speed"
  - "browser redirects"
  - "unauthorized proxy server"
  - "unknown pac script"
  - "unknown server address"
last_reviewed: "2026-03-17"
---
# What to do if… your cloud storage suddenly shows a large upload you cannot explain (USA)

## Short answer
Immediately disconnect the device from all internet connections and disable any unknown proxy or auto-configuration scripts before attempting to access sensitive accounts from a separate, trusted device.

## Do not do these things
- Don't enter any passwords, credit card numbers, or MFA codes while the proxy is active.
- Don't assume the proxy is a harmless system update; treat it as an active data-interception risk.
- Don't try to "fix" the issue by downloading software from the internet while the proxy is still active.
- Don't restart the computer and immediately log back into your browser; some malware re-enables the proxy upon reboot.
- Don't use "public" or "free" Wi-Fi to troubleshoot the issue.

## What to do now
1. **Physically or digitally isolate the machine from the network.**
   **Turn off Wi-Fi and unplug any Ethernet cables immediately to stop data from being routed through the unauthorized server.**
2. **Contact your employer or school IT department if the device is managed.**
   **If you are using a work or school laptop, stop all activity and notify your IT helpdesk that an unauthorized proxy or PAC script has appeared.**
   - Managed devices may have legitimate proxies, but IT must verify if this specific change was authorized.
3. **Verify and disable proxy settings in the system menus.**
   **Navigate to your operating system's network settings and turn off all "Manual Proxy" and "Automatic Proxy Setup" toggles.**
   - On Windows: Go to **Settings > Network & internet > Proxy**; disable "Use a proxy server" and "Use setup script."
   - On macOS: Go to **System Settings > Network > [Your Connection] > Details > Proxies**; toggle all protocols to "Off."
4. **Record the unauthorized proxy details for potential reporting.**
   **Take a screenshot or write down the IP address, port number, or script URL (PAC file) listed in the settings before you clear them.**
5. **Check for "hidden" proxy overrides via the command line on Windows.**
   **Open Command Prompt as an Administrator and type `netsh winhttp show proxy` to see if a proxy is set at the system level that doesn't appear in the standard Settings menu.**
   - If a proxy is found, type `netsh winhttp reset proxy` to clear it.
6. **Secure your primary accounts from a separate, clean device.**
   **Using a trusted phone or a different computer, change the password for your primary email account first, then your banking and password manager.**
   - Ensure Multi-Factor Authentication (MFA) is active and check for any "authorized devices" or "active sessions" you don't recognize.
7. **Perform a local security scan while remaining offline.**
   **Run the built-in security software (like Windows Defender or macOS XProtect) to scan for "residential proxy" malware or unauthorized remote management tools.**
8. **Report the incident to the FBI Internet Crime Complaint Center (IC3).**
   **Visit ic3.gov from a clean device and file a report, specifically mentioning the proxy address you recorded and any 2026 alerts regarding residential proxy exploitation (PSA260312).**

## What can wait
- You don't need to wipe your hard drive immediately unless a security professional confirms the infection is persistent.
- You don't need to notify every single minor online service; focus only on email, finance, and identity-related accounts for now.
- You don't need to determine the physical location of the proxy server yourself.

## Important reassurance
Finding an unauthorized proxy is a significant security event, but taking the machine offline immediately stops the attacker from intercepting further traffic. By using a second, clean device to secure your accounts, you can prevent the most serious consequences of a proxy hijack.

## Scope note
This guide provides first-step stabilization for identifying and disabling unauthorized proxy settings. It does not replace a full forensic audit or professional malware removal, which may be necessary if the proxy settings return after a reboot.

## Important note
This information is for immediate crisis stabilization and does not constitute professional cybersecurity or legal advice. If you suspect your identity has been stolen or your financial accounts have been accessed, contact your bank and the relevant authorities directly. During government funding lapses, federal reporting portals like ReportFraud.ftc.gov may be unavailable; in such cases, prioritize securing your accounts and contacting local law enforcement if financial loss has occurred.

## Additional Resources
- https://support.google.com/accounts/answer/3067630?hl=en
- https://support.google.com/accounts/answer/6294825?hl=en
- https://support.google.com/photos/answer/6193313?hl=en
- https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams
- https://consumer.ftc.gov/articles/malware-how-protect-against-detect-and-remove-it
