---
title: "What to do if… your computer suddenly routes web traffic through a proxy you did not set"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "firewall settings changed"
  - "firewall turned off by itself"
  - "windows defender firewall changed"
  - "mac firewall settings changed"
  - "unexpected firewall rule change"
  - "network protection settings changed"
  - "security settings changed without me"
  - "firewall profile changed to public"
  - "firewall exceptions added"
  - "unauthorized inbound connections"
  - "suspicious admin changes"
  - "device may be compromised"
  - "possible malware sign"
  - "work laptop security policy changed"
  - "router firewall changed"
  - "mpssvc firewall change event"
  - "windows firewall event log 4950"
  - "firewall reset to defaults"
  - "unknown app allowed through firewall"
  - "help i did not change my firewall"
  - "what do i do if my firewall settings changed"
  - "help i think my firewall is hacked"
  - "what do i do if windows firewall rules changed"
  - "my computer firewall is different"
  - "my mac firewall turned off"
  - "firewall notification of change"
  - "unauthorized firewall exceptions"
  - "security audit event 4946"
  - "security audit event 4947"
  - "firewall policy changed remotely"
last_reviewed: "2026-03-17"
---
# What to do if… your computer suddenly routes web traffic through a proxy you did not set (UK)

## Short answer
Immediately disconnect the device from all internet and local network connections. Record the specific changes visible in your security settings before attempting to revert them.

## Do not do these things
- Do not continue using the device for sensitive tasks such as banking, email, or accessing password managers.
- Do not download "fix-it" tools or "security scanners" from pop-up advertisements or unsolicited search results.
- Do not disable other security layers, such as antivirus or real-time protection, to "restore" connectivity.
- Do not perform a factory reset or "wipe" the drive immediately if you may need to provide evidence to an employer or insurer.
- Do not assume the change is a harmless glitch; treat any unauthorized security modification as a potential breach until verified.

## What to do now
1. **Isolate the device from all networks.** Turn off Wi-Fi and Bluetooth via the hardware switch or system menu, and physically unplug any Ethernet cables.
   - Disconnect any active VPN sessions or remote desktop connections.
   - Ensure the device cannot communicate with other "smart" devices on your home or work network.
2. **Document the current state of the firewall.** Use a separate device (like a phone camera) to take photos of the settings page.
   - Capture the list of "Allowed Apps" or "Exceptions".
   - Note if the firewall profile has shifted (e.g., from "Private" to "Public").
   - Record the exact date and time the change was discovered.
3. **Notify your IT department if the device is managed by work or school.** Many organizations push security updates or policy changes remotely.
   - Contact them via a different device or phone.
   - Ask if a "Global Policy" or "Mobile Device Management" (MDM) update was scheduled for your system.
4. **Inspect system logs for unauthorized activity.** Do not spend hours on this; look for recent entries only.
   - **Windows:** Open "Event Viewer", go to "Windows Logs" > "Security", and look for Event IDs 4946 (rule added), 4947 (rule modified), or 4950 (setting changed).
   - **macOS:** Check "System Settings" > "Network" > "Firewall" > "Options". Also check "System Settings" > "General" > "Login Items & Extensions" for unfamiliar system extensions.
5. **Conduct an offline malware scan.** Use the built-in security software (Windows Security or macOS XProtect) to run a "Full Scan" while the device remains disconnected from the internet.
   - If the software allows for an "Offline Scan" (rebooting the computer to scan before the OS fully loads), select this option.
6. **Secure your primary accounts from a clean device.** Use a different, trusted computer or smartphone to update your credentials.
   - Change your primary email password first, as this is the gateway for password resets.
   - Update banking, government (HMRC / Government Gateway), and work login details.
   - Enable or refresh Multi-Factor Authentication (MFA) on all high-value accounts.
7. **Report the incident if you suspect criminal intent.**
   - For England, Wales, and Northern Ireland: Contact **Action Fraud** via their online portal or call 0300 123 2040.
   - For Scotland: Report the incident to **Police Scotland** by calling 101.
   - If you require technical recovery assistance in Scotland, contact the **Cyber and Fraud Centre Scotland** at 0800 1670 623.

## What can wait
- You do not need to decide whether to permanently replace the hardware right now.
- You do not need to learn how to write manual firewall "Packet Filter" rules or scripts.
- Re-securing your home router or updating its firmware can wait until the primary device is stabilized.

## Important reassurance
Seeing security settings change without your input is a valid reason to feel startled. Most incidents are resolved by a combination of isolating the device, checking for managed policy updates, and securing online accounts. Taking these steps systematically prevents a minor configuration error or isolated malware from escalating into a full identity breach.

## Scope note
This guide provides first-step stabilization for an unexpected firewall change. It does not cover long-term forensic analysis, network infrastructure hardening, or the removal of advanced persistent threats.

## Important note
This information is for general guidance and does not constitute professional technical or legal advice. If you suspect your device is part of a wider corporate breach, follow your organization's formal incident response plan immediately.

## Additional Resources
- https://support.microsoft.com/en-us/windows/use-a-proxy-server-in-windows-03096c53-0554-4ffe-b6ab-8b1deee8dae1
- https://support.apple.com/en-gb/guide/mac-help/mchlp2591/mac
- https://support.microsoft.com/en-us/windows/virus-and-threat-protection-in-the-windows-security-app-1362f4cd-d71a-b52a-0b66-c2820032b65e
- https://www.gov.uk/report-suspicious-emails-websites-phishing
- https://www.ncsc.gov.uk/guidance/hacked-device-action-to-take
