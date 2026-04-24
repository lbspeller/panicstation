---
title: "What to do if… your router settings show remote administration was turned on and you did not enable it"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - router remote admin enabled
  - remote administration turned on
  - router settings changed
  - router hacked maybe
  - wifi router compromised
  - unknown router login
  - someone accessed my router
  - remote management enabled
  - router security breach
  - home network tampering
  - router port opened
  - isp router settings changed
  - suspicious router activity
  - admin interface exposed
  - dns settings changed
  - port forwarding added
  - upnp enabled unexpectedly
  - wps turned on
  - router firmware outdated
  - internet connection hijacked
last_reviewed: "2026-03-09"
---

# What to do if… your router settings show remote administration was turned on and you did not enable it (USA)

## Short answer
Take the router offline, then log in locally to disable remote administration and change the router admin password. Update firmware (or factory reset if you can’t trust the device/settings).

## Do not do these things
- Don’t keep the router exposed to the internet while you investigate.
- Don’t reuse a password from email/banking for the router admin login.
- Don’t assume changing the Wi-Fi password fixes admin access (it’s a separate credential).
- Don’t install random “router cleaner” apps or call numbers from pop-ups.
- Don’t mass-change lots of settings blindly — you can break connectivity and miss the key compromise.

## What to do now
1. **Pause and remove the router from the internet.**  
   Unplug the router’s WAN/Internet cable (or power off the modem/router). This stops ongoing remote access while you work.

2. **Capture evidence for later (quick screenshots/photos).**  
   Photograph/screenshot: remote administration setting, firmware version, admin users, port forwarding/firewall rules, DNS settings, device list, and any logs/system events.

3. **Log in locally to the router admin page.**  
   Prefer a wired Ethernet connection. If using Wi-Fi, make sure you’re on your own network.

4. **Disable remote administration and any “from outside” management.**  
   Turn off: *Remote Management / Remote Admin / Web Access from WAN / Admin from Internet / Cloud management*. If there’s an option to allow admin access only from the local network, enable it.

5. **Change router admin credentials immediately.**  
   - Set a strong, unique admin password (change the admin username if possible).  
   - If your router supports it, enable multi-factor/2-step verification for admin access.  
   - If there’s an option to log out all sessions, use it.

6. **Check and revert high-risk settings attackers commonly change.**
   - **DNS**: set back to automatic or a trusted provider you chose.  
   - **Port forwarding / firewall rules**: delete anything you didn’t create.  
   - **UPnP**: disable if you don’t need it.  
   - **WPS**: disable.  
   - **Extra admin accounts**: remove/disable unknown accounts.

7. **Update firmware and reboot, then re-check the setting stayed off.**  
   Do this **only** using the router’s own update feature or the manufacturer/ISP official app/support process (not pop-ups, emails, or random downloads).

8. **If control still isn’t reliable: factory reset and rebuild.**  
   If settings revert, you can’t change admin credentials, or the device is old/end-of-life:  
   - Factory reset.  
   - Reconfigure manually (don’t restore old config backups you don’t fully trust).  
   - If it’s ISP equipment, contact your ISP support and request a secure replacement if needed.

9. **After the router is secured, change Wi-Fi password and reconnect carefully.**  
   Set a new WPA2/WPA3 Wi-Fi password and consider changing the network name. Reconnect devices one at a time so you notice if something odd appears.

10. **Secure “downstream” accounts if there are signs of broader compromise.**  
   If you see suspicious logins, password reset emails you didn’t request, or unknown devices: change your email password first, enable 2-factor authentication, and sign out of other sessions.

11. **Report if this is part of cybercrime or identity/financial harm (optional).**  
   - For cybercrime/cyber-enabled fraud: file a report with the **FBI’s Internet Crime Complaint Center (IC3)**.  
   - For identity theft or account takeover fallout: use **IdentityTheft.gov** (FTC) to generate a recovery plan and paperwork.

## What can wait
- You don’t have to decide whether it was a targeted hack vs. a misconfiguration right now.
- You don’t need to replace every device immediately (stabilize the router first).
- You don’t need to do deep forensics today unless settings keep changing or you have ongoing losses.
- You can postpone optimizing your network setup (guest networks, segmentation, etc.) until you’re calm.

## Important reassurance
This is a scary discovery, but the fastest risk reduction is straightforward: take the router offline, disable remote management, reset admin access, and update or reset the device. Those steps help whether the change was malicious or accidental.

## Scope note
This is first-step containment. If you keep losing control of the router, see repeated tampering, or have financial/identity impacts, involve your ISP and consider professional incident help.

## Important note
This is general information, not professional security or legal advice. Router interfaces vary by model and ISP; if you’re unsure, prioritize taking it offline and using verified support channels from your ISP/manufacturer.

## Additional Resources
- https://www.cisa.gov/audiences/high-risk-communities/projectupskill/module5
- https://www.cisa.gov/news-events/news/home-network-security
- https://www.cisa.gov/sites/default/files/publications/HomeRouterSecurity2011.pdf
- https://www.fbi.gov/investigate/cyber/alerts/2025/cybercriminal-proxy-services-exploiting-end-of-life-routers
- https://www.ic3.gov/
- https://www.identitytheft.gov/Steps?scroll=true
- https://www.ftc.gov/news-events/topics/identity-theft/report-identity-theft