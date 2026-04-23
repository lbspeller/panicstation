---
title: "What to do if… your email provider warns it will block outgoing mail because of unusual activity"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "wifi name changed"
  - "wifi password changed"
  - "home wifi hacked"
  - "router settings changed"
  - "devices disconnected from wifi"
  - "ssid changed unexpectedly"
  - "someone changed my wifi"
  - "router admin password compromised"
  - "unknown devices on my network"
  - "internet suddenly stopped working"
  - "broadband router tampered"
  - "home network breach"
  - "wifi keeps kicking devices off"
  - "smart home went offline"
  - "new wifi name appeared"
  - "wifi credentials no longer work"
  - "router takeover"
  - "isp router security"
  - "reset home router"
  - "unauthorized wifi access"
  - "hacked wireless network"
  - "wifi security compromise"
  - "router admin login failed"
  - "changed network ssid"
  - "unexpected wifi logout"
  - "router lights flashing red"
  - "broadband security settings"
  - "malicious router configuration"
last_reviewed: "2026-03-17"
---
# What to do if… your email provider warns it will block outgoing mail because of unusual activity (UK)

## Short answer
Isolate the router from the internet and perform a hardware factory reset to purge unauthorized settings. Regain control by settting a unique admin password and a new Wi-Fi passphrase before reconnecting devices.

## Do not do these things
- Avoid repetitive attempts to enter the old password, as this may trigger temporary account lockouts on connected devices.
- Do not access sensitive services such as online banking, work VPNs, or primary email accounts until the network is secured.
- Do not assume a changed Network Name (SSID) is an ISP glitch if you were not notified of an update.
- Do not rely on "Hiding the SSID" or "MAC Filtering" as primary security measures; they do not replace a strong password.
- Do not enable Remote Management or UPnP unless specifically required for a verified application.

## What to do now
1. **Verify the physical connection to the router.**
   - Locate the router and confirm it is receiving power.
   - **If possible, connect a computer directly to the router using an Ethernet cable to bypass the compromised wireless signal.**

2. **Locate the default factory credentials.**
   - **Check the sticker on the back or underside of the broadband router for the default Admin Password and Wi-Fi Key.**
   - Note these down, as they will be required immediately after the reset.

3. **Perform a hard factory reset of the hardware.**
   - **Locate the recessed "Reset" button on the rear of the router.**
   - Use a paperclip or pin to press and hold this button for 15–30 seconds until the status lights flash or change color.
   - This action wipes all custom settings, including any unauthorized changes made by a third party.

4. **Access the router admin interface immediately.**
   - **Open a web browser on the wired device and enter the router's IP address (usually 192.168.1.1 or 192.168.0.1).**
   - Log in using the default credentials found on the sticker.

5. **Update the Router Admin password first.**
   - **Navigate to the 'System' or 'Security' tab and change the password used to log into the router itself.**
   - Select a strong, unique password that is different from your Wi-Fi password.

6. **Configure new Wi-Fi security settings.**
   - **Select WPA3 security if available, or WPA2-AES as a minimum.**
   - Create a new Wi-Fi password (passphrase) using three random, unrelated words.
   - Rename the Wi-Fi network (SSID) to something neutral that does not identify your name or house number.

7. **Verify DNS and WAN settings.**
   - **Check that the DNS settings are set to 'Automatic' or 'ISP-assigned' unless you intentionally use a specific provider like Cloudflare or Google.**
   - Ensure 'Remote Management' is disabled to prevent access from outside your home.

8. **Apply firmware updates.**
   - **Check for any pending firmware or software updates in the router settings and install them immediately.**
   - If the router is ISP-supplied and does not allow manual updates, contact your provider's technical support to verify the version is current.

9. **Reconnect devices one by one.**
   - **Monitor the 'Connected Devices' or 'DHCP Client' list as you add your phones, laptops, and smart home items back to the network.**
   - If an unknown device appears, block it immediately and change the Wi-Fi password again.

10. **Report the incident if there is evidence of fraud.**
    - **In England, Wales, or Northern Ireland, report to Report Fraud (formerly Action Fraud) at reportfraud.police.uk or call 0300 123 2040.**
    - **In Scotland, report via the Police Scotland 101 service or contact the Cyber and Fraud Centre Scotland at 0800 167 0623.**

## What can wait
- Determining the specific identity or method of the intruder is not required for immediate stabilization.
- Replacing the hardware is generally unnecessary unless the router is end-of-life and no longer receives security patches.
- Re-configuring non-essential smart home devices (bulbs, plugs, or sensors) can wait until your primary computing devices are secured.

## Important reassurance
Sudden changes to network settings can be disorienting and may cause a temporary loss of digital access. This response is a standard physiological reaction to a breach of personal space. Following a factory reset and credential update is a high-reliability method for regaining control of the hardware.

## Scope note
This guide provides first-step stabilization for a residential broadband router. Complex enterprise networks, mesh systems with dedicated controllers, or professional-grade hardware may require advanced configuration steps not covered here.

## Important note
This information is for general guidance and does not constitute a technical guarantee of network security. If the router continues to exhibit unauthorized changes after a factory reset, the hardware itself may be compromised or faulty. In such cases, contact your Internet Service Provider to request a replacement unit.

## Additional Resources
- https://www.bt.com/help/email/bt-email--help-in-understanding-errors
- https://www.bt.com/help/email/email-security/how-can-i-tell-if-my-email-account-is-no-longer-secure
- https://www.ncsc.gov.uk/section/respond-recover/sole-hacked-accounts
- https://support.microsoft.com/en-gb/office/reactivate-an-account-that-has-been-blocked-08e0c662-384e-40ab-876e-6ffa35a547a6
- https://support.google.com/accounts/answer/6294825?hl=en
