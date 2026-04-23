---
title: "What to do if… your photo library duplicates itself and you are afraid of deleting originals"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "router remote admin enabled"
  - "remote administration turned on"
  - "router settings changed"
  - "router hacked maybe"
  - "wifi router compromised"
  - "unknown router login"
  - "someone accessed my router"
  - "remote management enabled"
  - "router security breach"
  - "home network tampering"
  - "router port opened"
  - "isp router settings changed"
  - "suspicious router activity"
  - "admin interface exposed"
  - "dns settings changed"
  - "port forwarding added"
  - "upnp enabled unexpectedly"
  - "wps turned on"
  - "router firmware outdated"
  - "internet connection hijacked"
  - "what do i do if my router was hacked"
  - "what do i do if remote management is on"
  - "what do i do if i see unknown devices on wifi"
  - "what do i do if router login changed"
  - "help i didnt turn on remote admin"
  - "help i found a router breach"
  - "help i think my network is hijacked"
  - "my router settings changed by themselves"
  - "my remote access is enabled"
  - "visible remote management light"
  - "slow internet and router settings changed"
  - "router admin password not working"
  - "unauthorized login to router"
last_reviewed: "2026-03-17"
---
# What to do if… your photo library duplicates itself and you are afraid of deleting originals (USA)

## Short answer
Physically disconnect the router from the internet, then log in locally to disable remote management and change the administrator password. If the device was compromised to serve as a proxy, a factory reset and firmware update are required.

## Do not do these things
- Don't leave the router connected to the internet while you attempt to fix settings.
- Don't use the same password for the router admin panel that you use for other accounts.
- Don't assume that changing your Wi-Fi password secures the router's internal administration settings.
- Don't download "fix-it" software or call numbers from unsolicited pop-up security warnings.
- Don't trust the device's current state if settings revert after you save them.

## What to do now
1. **Remove the router from the internet immediately.** 
   Unplug the Ethernet cable connecting your router to the modem (WAN port) or power down the modem itself. This terminates the active remote connection used by the unauthorized party.

2. **Connect a single computer directly to the router via Ethernet.** 
   **Using a wired connection prevents interference and ensures you are communicating only with the local device.** If you must use Wi-Fi, ensure you are connected to your specific SSID and not a neighbor's network.

3. **Log in to the administrator interface and disable all remote access.** 
   **Locate settings labeled Remote Management, WAN Administration, or Web Access from Internet and switch them to Disabled.**
   - Ensure "Local Management Only" is the active policy.
   - Disable any "Cloud Management" features if provided by the manufacturer.

4. **Change the router's administrator credentials.** 
   **Create a unique, complex password for the admin account that is not used anywhere else.**
   - If the router allows you to change the "admin" username to something unique, do so.
   - Force a logout of all other active sessions if the interface provides this option.

5. **Review and revert unauthorized configuration changes.** 
   **Check for modified DNS settings, new port forwarding rules, or unknown static IP assignments.**
   - Set DNS to "Obtain automatically" or a verified provider like 1.1.1.1 or 8.8.8.8.
   - Delete any port forwarding entries or DMZ configurations you did not create.
   - Disable UPnP (Universal Plug and Play) and WPS (Wi-Fi Protected Setup).

6. **Check the connected device list for unauthorized hardware.** 
   **Identify every MAC address and IP address currently connected to the network.**
   - If you see a device you do not recognize, it may be the source of the local tampering.

7. **Update the router's firmware to the latest version.** 
   **Only use the "Check for Updates" button within the router interface or download files directly from the manufacturer’s official support site.**
   - If the router is "End of Life" (no longer receiving updates), it must be replaced as it remains permanently vulnerable to the same exploit.

8. **Perform a factory reset if you cannot confirm the device is clean.** 
   **Use the physical reset button on the back of the device to wipe all settings and start from scratch.**
   - Do not restore from a backup file, as the backup may contain the malicious configuration.
   - Reconfigure all security settings (Admin password, SSID, WPA3 encryption) manually.

9. **Secure high-value "downstream" accounts.** 
   **Change passwords for your primary email and financial accounts from a different, known-safe device.**
   - Enable Multi-Factor Authentication (MFA) on these accounts immediately.
   - Review "Recent Activity" or "Login History" on your email to see if the router compromise was used to intercept traffic.

10. **Report the compromise to the FBI IC3.** 
   **File a report at ic3.gov, specifically mentioning if you suspect your device was used as a residential proxy (per PSA260312).**
   - Provide the router make, model, and the approximate time you discovered the setting change.

## What can wait
- Determining the specific identity or location of the unauthorized user.
- Replacing every smart home or IoT device on your network (focus on the router first).
- Deciding whether to switch Internet Service Providers (ISPs).
- Performing a deep forensic analysis of your computer's hard drive.

## Important reassurance
Seeing an unauthorized setting change is alarming, but physically disconnecting the device stops the threat instantly. Most router compromises are opportunistic and automated; once you reset the admin credentials and disable remote access, you have blocked the primary entry point.

## Scope note
This guide covers immediate technical stabilization of a home router. It does not cover the recovery of individual stolen accounts or the removal of malware from connected PCs or phones, which may require separate actions.

## Important note
This information is for educational purposes and reflects general security best practices as of 2026. Router interfaces vary significantly by manufacturer; if you cannot find specific settings, refer to the official manual for your model. If you suspect your personal identity has been stolen as a result of this breach, visit IdentityTheft.gov for a recovery plan.

## Additional Resources
- https://support.apple.com/en-us/104967
- https://support.apple.com/en-us/102260
- https://support.apple.com/en-us/111762
- https://support.google.com/files/answer/9764075?hl=en
- https://support.google.com/accounts/answer/3024190?hl=en
