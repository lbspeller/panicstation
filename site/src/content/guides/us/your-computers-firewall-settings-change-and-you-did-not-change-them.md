---
title: "What to do if… your computer’s firewall settings change and you did not change them"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - firewall settings changed
  - firewall turned off by itself
  - windows defender firewall changed
  - mac firewall settings changed
  - unexpected firewall rule change
  - network protection settings changed
  - security settings changed without me
  - firewall profile changed to public
  - firewall exceptions added
  - unauthorized inbound connections
  - suspicious admin changes
  - device may be compromised
  - possible malware sign
  - work laptop security policy changed
  - router firewall changed
  - windows firewall event log 4950
  - firewall reset to defaults
  - unknown app allowed through firewall
  - suspected computer infection
last_reviewed: "2026-03-09"
---

# What to do if… your computer’s firewall settings change and you did not change them (USA)
## Short answer
Disconnect the device from the network first and treat it like a potential compromise. Record what you saw, then scan with trusted tools and secure key accounts from a different device.

## Do not do these things
- Don’t continue logging into email, banking, payroll, or work systems from that device.
- Don’t click “allow” prompts you don’t fully recognize just to make something work.
- Don’t download “fix” tools from pop-ups, unknown websites, or unsolicited “support” messages.
- Don’t immediately wipe/reset if you may need evidence for your employer, a service provider, or a report.
- Don’t assume it’s safe just because you can “restore defaults” — you still need to understand *why* it changed.

## What to do now
1. **Isolate the device (containment).** Turn off Wi-Fi; unplug Ethernet; disconnect VPN. If you can’t disconnect safely, power down to stop activity.
2. **Record what changed.** Take screenshots/photos of:
   - Firewall status and any recent prompts
   - Any new rules/exceptions/“allowed apps”
   - The system date/time  
   Write down what happened right before you noticed it (install/update, email attachment/link, USB device, remote session).
3. **If it’s a work/school device: stop and contact IT/security.** Many organizations push firewall settings by policy or device management. Don’t reconnect until they confirm it’s legitimate and safe.
4. **Do a quick check for how/when it changed (don’t get stuck).**
   - **Windows:** In Event Viewer, look under the *Security* log for Windows Firewall auditing events near the time you noticed (you may see Event ID 4950 if auditing is enabled). Note: some policy-pushed changes may not appear as “local setting changed” events.
   - **macOS:** Apple menu → System Settings → Network → Firewall, then review Firewall options and any listed apps/services (note anything you don’t recognize).
5. **Scan with trusted security tools.** Run the antivirus/endpoint scan that’s already installed (offline if possible). Then update the OS and security tools from a trusted network and run a full scan.
6. **Protect your accounts (assume credentials could be exposed).** From a different, trusted device:
   - Change your email password first.
   - Then change financial and other high-value accounts.
   - Enable multi-factor authentication where available.
7. **If more than one device is acting strange: consider a home network issue.** Avoid signing into sensitive accounts on that network for now, and plan to change the router admin password/update firmware once you’re steady.
8. **If you experienced fraud, extortion, or clear account takeover: report it.**
   - For cyber-enabled fraud or significant cybercrime, file a complaint through the FBI’s **IC3**.
   - If you suspect identity theft, use the U.S. government recovery steps (and consider a fraud alert or credit/security freeze if recommended for your situation).

## What can wait
- You don’t need to decide right now whether to reinstall the OS or buy a new computer.
- You don’t need deep log analysis to take the safest first steps.
- Router hardening and “perfect security settings” can wait until after containment, scanning, and account protection.

## Important reassurance
An unexpected settings change can feel like a loss of control, and that’s a normal reaction. Isolation + documentation + scanning + securing accounts is a solid first response — you’re not expected to solve the root cause immediately.

## Scope note
This is first steps only to prevent avoidable damage. If changes repeat, you see remote-access signs, or it’s a managed device, involve IT/security support for proper investigation and cleanup.

## Important note
This is general information, not personalized technical, legal, or forensic advice. If you’re unsure, err on the side of containment and account protection first.

## Additional Resources
- https://www.cisa.gov/sites/default/files/publications/trojan-recovery.pdf
- https://www.cisa.gov/stopransomware/ive-been-hit-ransomware
- https://support.apple.com/guide/mac-help/mh11783/mac
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4950
- https://www.ic3.gov/
- https://www.identitytheft.gov/