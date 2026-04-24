---
title: "What to do if… your computer’s firewall settings change and you did not change them"
jurisdiction: "UK"
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
  - mpssvc firewall change event
  - windows firewall event log 4950
  - firewall reset to defaults
  - unknown app allowed through firewall
last_reviewed: "2026-03-09"
---

# What to do if… your computer’s firewall settings change and you did not change them (UK)
## Short answer
Disconnect the device from the internet/network first. Then record what you saw and treat it as a possible security incident until you can explain the change.

## Do not do these things
- Don’t keep using the device for banking, email, password managers, or work systems “just to finish something”.
- Don’t install “fix” tools from pop-ups, unknown websites, or unsolicited “support” messages.
- Don’t disable other protections (antivirus/endpoint protection) to “make it work”.
- Don’t immediately wipe/reset the device if you may need evidence for work IT, insurance, or a report.
- Don’t assume it’s harmless just because the firewall is now “on” or “off” — the concern is the *unexpected change*.

## What to do now
1. **Disconnect from networks (containment).** Turn off Wi-Fi and Bluetooth; unplug Ethernet; disconnect any VPN. If it’s a work/school device, this helps prevent spread and buys time.
2. **Capture what changed (before you edit settings).** Take screenshots/photos of:
   - The firewall page showing the current state
   - Any “allowed apps”, “exceptions”, or rules you can see
   - The date/time on your device  
   Also write down: what you were doing when you noticed, plus any recent installs/updates, USB devices, or remote-access sessions.
3. **If it’s a work/school device, stop and contact IT/security.** Many organisations push firewall changes via management tools or policy. Tell them “firewall settings changed without me” and follow their instructions before reconnecting.
4. **Do a quick check for how/when it changed (don’t get stuck).**
   - **Windows:** In Event Viewer, look under the *Security* log for Windows Firewall auditing events around the time you noticed (you may see Event ID 4950 if auditing is enabled). Note: some policy-pushed changes may not show as “local setting changed” events.
   - **macOS:** Apple menu → System Settings → Network → Firewall, then check Firewall options and any listed apps/services (note anything you don’t recognise).
5. **Run a reputable malware scan, keeping risk low.** If your existing antivirus/endpoint protection can run an offline scan, do that first. Then (if needed) briefly reconnect to a trusted network to update the OS and security tools, and run a full scan.
6. **Protect important accounts from a different device.** If you used the computer after the change, assume credentials *might* be at risk:
   - Change your email password first (it’s the reset key for most accounts).
   - Then change banking and other high-value accounts.
   - Turn on 2-step verification where available.
7. **Only if multiple devices seem affected: treat your home router as a suspect too.** If several devices show odd security prompts/settings, or you don’t know your router admin password:
   - Avoid signing into sensitive accounts on that network for now.
   - Disconnect the router from the internet if you think active misuse is happening and you can tolerate the disruption.
8. **If you have losses or clear misuse, report and protect yourself.**
   - Contact your bank immediately for any unauthorised transactions.
   - For cyber crime/fraud reporting in **England, Wales, and Northern Ireland**, use **Report Fraud**. If you’re in **Scotland**, use Police Scotland’s route (e.g., 101 / local police guidance) for non-emergency reporting.

## What can wait
- You do **not** need to decide today whether to wipe the device, replace it, or “rebuild everything”.
- You do **not** need to fully understand firewall rules right now.
- Router firmware updates and “perfect” network hardening can wait until you’ve contained the risk and secured key accounts.

## Important reassurance
Unexpected security setting changes feel alarming because they suggest something happened without your permission. Taking the calm first steps (disconnect, record, scan, secure accounts, involve IT if managed) is often enough to stop things getting worse while you work out whether it was malware, an update, or device management.

## Scope note
This is first steps only: stabilise, prevent avoidable damage, and get the right help involved. Repeated changes, signs of remote access, or a work-managed device usually need IT/security support.

## Important note
This is general information, not personalised technical or legal advice. If you can’t quickly confirm the change was legitimate, it’s safer to treat it as suspicious until confirmed.

## Additional Resources
- https://www.ncsc.gov.uk/section/respond-recover/ml-malware
- https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks
- https://support.apple.com/en-gb/guide/mac-help/mh11783/mac
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4950
- https://www.gov.uk/government/news/report-fraud-new-service-from-city-of-london-police
- https://www.cityoflondon.police.uk/news/city-of-london/news/2025/december/report-fraud-service-goes-live-with-full-public-launch-in-january-2026/
- https://www.reportfraud.police.uk/