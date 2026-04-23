---
title: "What to do if… an unknown browser extension appears and you cannot remove it normally"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "unknown browser extension"
  - "mystery browser add-on"
  - "extension appeared by itself"
  - "cannot remove extension"
  - "remove button greyed out"
  - "extension locked"
  - "installed by policy"
  - "installed by enterprise policy"
  - "managed by your organisation"
  - "browser hijacker extension"
  - "suspicious chrome extension"
  - "suspicious edge extension"
  - "firefox add-on won’t uninstall"
  - "safari extension you didn’t install"
  - "browser settings changed"
  - "redirects in browser"
  - "popups after installing extension"
  - "extension keeps coming back"
  - "unwanted toolbar extension"
  - "browser malware signs"
  - "help i have a mystery extension"
  - "help i cannot delete an add-on"
  - "help my browser is managed"
  - "help my extension is locked"
  - "my browser has a virus extension"
  - "my remove button is missing"
  - "my extension keeps reinstalling"
  - "my search engine changed itself"
  - "greyed out uninstall button"
  - "unrecognised browser plugin"
  - "safari extension malware"
  - "chrome extension policy removal"
  - "edge extension force installed"
  - "remove malicious browser extension"
  - "unknown extension appeared chrome"
  - "unknown extension appeared firefox"
last_reviewed: "2026-03-17"
---
# What to do if… an unknown browser extension appears and you cannot remove it normally (UK)

## Short answer
Close the affected browser immediately to prevent data theft and run an offline malware scan to remove the hidden software that is force-installing the extension.

## Do not do these things
- Do not log in to banking, email, government services, or work accounts while the extension is present.
- Do not click any "cleanup" or "fix" buttons inside the browser that appear after the extension arrives.
- Do not call any "support" numbers provided by pop-ups or the extension's description.
- Do not enter passwords, recovery codes, or financial details into any website in the affected browser.
- Do not assume the extension is safe because it has a familiar name like "PDF Reader" or "Search Assistant".

## What to do now
1. **Close the affected browser and stop all sensitive digital activity on that device.** If you must access critical accounts immediately, use a separate, trusted device or a completely different browser that does not show the unknown extension.
2. **Record the specific name and publisher of the extension for later reporting.** Note if the extension displays a message stating it is "Installed by policy" or "Managed by your organisation" as this indicates it has high-level system permissions.
3. **Contact your employer or school IT department if the device is provided by an organisation.** If this is a personal device that says "managed", it is likely that malware has applied a "Group Policy" or "Configuration Profile" to lock the extension in place.
4. **Run a Microsoft Defender Offline scan if you are using a Windows computer.**
   - Navigate to **Settings** > **Privacy & security** > **Windows Security**.
   - Select **Virus & threat protection** > **Scan options**.
   - Select **Microsoft Defender Offline scan** and click **Scan now** (the computer will restart and scan for approximately 15 minutes).
5. **Check for and remove suspicious Configuration Profiles if you are using a Mac.**
   - Open **System Settings** and search for **Profiles**.
   - If a "Profiles" section exists and contains entries you do not recognise (like "Chrome Settings" or "Admin"), select them and click the minus (-) button to remove them.
6. **Identify and uninstall recently added software from your system.**
   - **Windows:** Go to **Settings** > **Apps** > **Installed apps** and sort by "Date installed".
   - **Mac:** Open **Finder** > **Applications** and look for unfamiliar apps, particularly those with generic names like "Utility", "Converter", or "Search".
7. **Reset the browser to its original default settings to clear persistent configurations.**
   - **Chrome/Edge:** Look for **Reset settings** in the main menu.
   - **Firefox:** Use the **Refresh Firefox** feature found in the "Troubleshooting Information" page.
   - **Safari:** In **Settings** > **Extensions**, select the extension and click **Uninstall** (if this fails, the underlying app in the Applications folder must be deleted first).
8. **Secure your primary email and financial accounts from a clean device.** Change your email password and ensure two-step verification (2FA) is active, as browser-based malware often targets session cookies and saved passwords.
9. **Report the incident to the appropriate UK cyber crime authority.**
   - If you have lost money or access to accounts in England, Wales, or Northern Ireland, report to **Report Fraud** via their website or by calling 0300 123 2040.
   - If you are in Scotland, report the crime to **Police Scotland** by calling 101.
   - Forward any suspicious emails that preceded the installation to **report@phishing.gov.uk**.

## What can wait
- You do not need to identify the specific "name" of the malware or virus family right now.
- You do not need to notify every contact in your address book unless you have evidence your email was actually used to send spam.
- You do not need to factory reset the entire device if the offline scan and profile removal successfully stop the extension from reappearing.

## Important reassurance
Seeing an extension that "won't go away" is a common tactic used by browser hijackers to stay active. While it is intrusive, following a structured removal of the "managing" policy and the installer app usually resolves the issue without permanent damage to your files.

## Scope note
This guide provides first-step stabilization for personal devices. If the extension returns immediately after a system restart and a deep scan, the malware may have root-level persistence that requires professional technical intervention.

## Important note
This information is for general guidance and does not constitute professional technical or legal advice. On managed work or school devices, you must follow the specific security protocols of your organisation. Removing certain system profiles or registry keys can impact device functionality; seek qualified assistance if you are unsure of a step.

## Additional Resources
- https://www.ncsc.gov.uk/collection/device-security-guidance/policies-and-settings/managing-web-browser-security
- https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks
- https://support.google.com/chrome/answer/2765944?co=GENIE.Platform%3DDesktop&hl=en-GB
- https://support.apple.com/en-gb/102343
- https://www.ncsc.gov.uk/section/respond-recover/you
