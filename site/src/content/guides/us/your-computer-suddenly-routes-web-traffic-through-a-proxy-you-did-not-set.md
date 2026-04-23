---
title: "What to do if… your computer suddenly routes web traffic through a proxy you did not set"
jurisdiction: "USA"
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
  - "windows firewall event log 4950"
  - "windows firewall event log 4946"
  - "windows firewall event log 4947"
  - "unknown app allowed through firewall"
  - "suspected computer infection"
  - "help i did not change my firewall"
  - "help my firewall is disabled"
  - "what do i do if my firewall turned off"
  - "what do i do if unknown apps are in my firewall"
  - "my security settings changed randomly"
  - "my computer settings changed on their own"
  - "unauthorized network changes"
  - "cybersecurity incident first steps"
  - "malware persistence check"
  - "macOS firewall stealth mode"
last_reviewed: "2026-03-17"
---
# What to do if… your computer suddenly routes web traffic through a proxy you did not set (USA)

## Short answer
Immediately disconnect the device from all networks and treat the change as a potential security compromise. Document the specific settings that were modified and secure your primary accounts from a different, known-safe device.

## Do not do these things
- Don't enter passwords for banking, email, or corporate accounts on the affected device until it is verified clean.
- Don't ignore "Allow incoming connection" prompts for applications you do not recognize.
- Don't download unverified "fix" software or security scanners from pop-up advertisements.
- Don't factory reset the device if you are required to preserve evidence for an employer or law enforcement.
- Don't reconnect to the internet to "search for a solution" using the compromised machine.

## What to do now
1. **Isolate the machine from the network.** Disable the Wi-Fi toggle, unplug the Ethernet cable, and disconnect any active VPN sessions.
2. **Document the current state.** Take clear photos of the firewall settings screen, any new "Allowed Apps" or "Exceptions," and any error messages or suspicious prompts.
3. **Notify your organization if the device is managed.** If this is a work or school computer, contact your IT department immediately; they may have pushed a legitimate policy update or may need to begin an official incident response.
4. **Check system logs for the change source (Windows).** Open "Event Viewer," navigate to Windows Logs / Security, and filter for Event IDs 4946 (rule added), 4947 (rule modified), or 4950 (setting changed).
5. **Check system settings for unauthorized persistence (macOS).** Go to System Settings / General / Login Items and System Settings / Network / Firewall / Options to see if unknown services are authorized to run or receive connections.
6. **Enable heightened protection settings.**
   - **Windows:** Select "Block all incoming connections, including those in the list of allowed apps" in the firewall properties for the current profile.
   - **macOS:** Click "Options" in the Firewall menu and toggle on "Enable stealth mode."
7. **Secure your digital identity from a separate device.** Use a different, trusted computer or smartphone to change your email, financial, and primary cloud service passwords.
8. **Initiate an offline security scan.** Use the built-in Windows Defender or macOS security tools to run a full system scan while the device remains disconnected from the internet.
9. **Report confirmed fraud or theft.**
   - File a report at **IdentityTheft.gov** if personal data has been accessed.
   - File a complaint with the FBI’s **Internet Crime Complaint Center (IC3)** if you are the victim of extortion or a cyber-enabled crime.

## What can wait
- You do not need to decide whether to wipe the hard drive or replace the hardware in the first hour.
- You do not need to identify the specific strain of malware before taking containment steps.
- You do not need to update your router firmware until your primary devices and accounts are stabilized.

## Important reassurance
Noticing a change in your security settings is a sign of effective monitoring. Taking the device offline immediately stops most active remote threats and prevents the situation from escalating while you follow a structured recovery plan.

## Scope note
This guide provides first-step stabilization for individual users and employees. It does not replace professional forensic analysis or corporate incident response protocols.

## Important note
This information is for general guidance and does not constitute legal or professional technical advice. If your device contains sensitive regulated data or belongs to an employer, follow their specific security reporting policies.

## Additional Resources
- https://support.microsoft.com/en-us/windows/use-a-proxy-server-in-windows-03096c53-0554-4ffe-b6ab-8b1deee8dae1
- https://support.microsoft.com/en-us/windows/essential-network-settings-and-tasks-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9
- https://support.microsoft.com/en-us/topic/ms16-077-description-of-the-security-update-for-wpad-june-14-2016-0d3aee51-dbee-bfc9-fbf3-201178b51914
- https://consumer.ftc.gov/articles/malware-how-protect-against-detect-and-remove-it
- https://support.google.com/accounts/answer/9924802?co=GENIE.Platform%3DDesktop&hl=en
