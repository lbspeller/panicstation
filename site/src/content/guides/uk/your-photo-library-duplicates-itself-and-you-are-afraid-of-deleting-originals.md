---
title: "What to do if… your photo library duplicates itself and you are afraid of deleting originals"
jurisdiction: "UK"
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
  - "help i did not turn on remote admin"
  - "what do i do if my router is hacked"
  - "what do i do if settings changed on router"
  - "my router has remote access on"
  - "help someone is in my router"
  - "strange admin users on router"
  - "router login password not working"
  - "wan management enabled without permission"
  - "router settings reset itself"
  - "suspicious login on virgin hub"
  - "bt smart hub remote access settings"
  - "sky broadband hub security breach"
  - "talktalk router remote management"
  - "unauthorized port forwarding rules"
last_reviewed: "2026-03-17"
---
# What to do if… your photo library duplicates itself and you are afraid of deleting originals (UK)

## Short answer
Immediately disconnect the router from the internet by powering it off or removing the WAN cable, then access the settings locally to disable remote management. Change all administrative passwords and verify that DNS and port settings have not been altered.

## Do not do these things
- Do not leave the router connected to the internet to "monitor" the intruder; this allows continued data exfiltration or further compromise.
- Do not use any existing passwords for the new administrative login; ensure the new password is unique to this device.
- Do not assume that changing the Wi-Fi password secures the router; administrative access and Wi-Fi access are separate layers of security.
- Do not follow "support" links or call numbers from unsolicited pop-ups or emails claiming your router is infected; only use official ISP contact methods.
- Do not attempt to "hack back" or investigate the source of the remote access yourself.

## What to do now
1. **Isolate the router from the external network immediately.**  
   Power off the router or unplug the cable connecting it to the wall (WAN / DSL / Fibre ONT). This prevents the remote user from maintaining their connection while you work.

2. **Access the router settings via a local, wired connection if possible.**  
   Use an Ethernet cable to connect a laptop or PC directly to the router. If you must use Wi-Fi, ensure you are connected to your own SSID and not a guest network or neighbor's signal.

3. **Disable all forms of remote management and WAN-side access.**  
   Navigate to the "Advanced" or "Security" menu and turn off any settings labeled:
   - Remote Management / Remote Admin
   - Web Access from WAN
   - Cloud / App-based remote management
   - TR-069 / CWMP (Note: Some UK ISPs like TalkTalk use this for remote fixes; if you are unsure, leave the router offline and call your ISP).

4. **Change the router administrative password and username.**  
   Create a strong, unique password that is at least 12 characters long. If the router allows you to change the "admin" username to something else, do so now.

5. **Review and reset core network configurations.**  
   Check the following areas for unauthorized changes and revert them to "Default" or "Automatic":
   - **DNS Settings:** Ensure these point to your ISP or a trusted provider (like 1.1.1.1 or 8.8.8.8).
   - **Port Forwarding:** Delete any rules you did not create.
   - **UPnP:** Disable this feature if it is currently enabled.
   - **Admin Users:** Remove any secondary or unknown administrator accounts.

6. **Check for and apply firmware updates.**  
   Use the router’s internal "Check for Updates" tool. Under 2026 NCSC guidance (Cyber Essentials), critical security patches should be applied within 14 days of release. Only download updates through the router's interface or the official manufacturer website.

7. **Perform a factory reset if you cannot confirm the device is secure.**  
   If settings revert automatically or you find persistent unknown accounts, use a pin to hold the "Reset" button for 10-15 seconds. You will need to reconfigure the router from scratch; do not restore from a backup file made after the suspicious activity began.

8. **Secure your primary digital accounts.**  
   If you suspect the router compromise was used to intercept traffic, change the passwords for your primary email and banking accounts from a device using a different, known-safe connection (such as mobile data).

9. **Report the incident to the appropriate UK authorities.**  
   - In **England, Wales, or Northern Ireland**, report the cyber incident to **Report Fraud** at reportfraud.police.uk or call 0300 123 2040.
   - In **Scotland**, report the incident by calling **Police Scotland** on 101.

## What can wait
- You do not need to identify the specific individual who enabled the setting right now.
- You do not need to replace the physical router unless it is "End of Life" and no longer receiving security updates.
- You do not need to perform a full wipe of every computer and phone in the house immediately, provided the router is now secured.

## Important reassurance
Finding an unauthorized setting is stressful, but taking the router offline immediately halts the primary threat. Most router compromises are opportunistic and can be resolved by resetting credentials and disabling unnecessary remote features. Your physical hardware is likely still functional and safe to use once these software protections are restored.

## Scope note
This guide provides first-step stabilization for a home network security breach. It does not cover advanced forensics, recovery of stolen funds, or legal action against third parties.

## Important note
This information is for general guidance and does not constitute professional security or legal advice. Router interfaces vary significantly by manufacturer (e.g., TP-Link, Netgear, ASUS) and UK ISP (e.g., BT, Virgin Media, Sky). If you are unable to access your settings or feel overwhelmed, contact your ISP's official technical support line for assistance in securing your specific hardware.

## Additional Resources
- https://support.apple.com/en-gb/guide/iphone/iph1978d9c23/ios
- https://support.apple.com/en-gb/104967
- https://www.samsung.com/uk/support/mobile-devices/how-to-find-and-remove-duplicate-files-on-your-galaxy-device/
- https://www.samsung.com/uk/support/mobile-devices/how-to-select-and-view-only-the-albums-you-want-to-see-in-galaxy-gallery/
- https://support.google.com/photos/answer/6128858?co=GENIE.Platform%3DAndroid&hl=en-GB
