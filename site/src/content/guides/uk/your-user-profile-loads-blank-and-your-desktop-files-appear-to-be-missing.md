---
title: "What to do if… your user profile loads blank and your desktop files appear to be missing"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - blank user profile
  - profile loads empty
  - desktop files missing
  - files disappeared
  - missing documents folder
  - missing downloads folder
  - signed into wrong account
  - temporary profile windows
  - new user profile created
  - onedrive desktop missing
  - icloud desktop missing
  - synced folders moved
  - after update files missing
  - after restart files missing
  - ransomware warning screen
  - suspected malware
  - cloud sync confusion
  - windows user folder missing
  - mac desktop documents gone
last_reviewed: "2026-03-08"
---

# What to do if… your user profile loads blank and your desktop files appear to be missing (UK)
## Short answer
Stop making changes, and first check whether you’re in a temporary/wrong profile or your Desktop/Documents have been redirected into cloud sync. If anything suggests malware/ransomware, disconnect from the internet before you do anything else.

## Do not do these things
- Don’t start “cleaning up” (moving folders, creating lots of new files, reinstalling apps) until you confirm where your original files are.
- Don’t run “PC cleaner/driver fixer/file recovery” tools you just found online — many are scams and can overwrite recoverable data.
- Don’t pay a ransom or follow pop-up “support” phone numbers if you see a ransomware-style message.
- Don’t keep rebooting repeatedly if you’re hearing unusual disk noises or seeing repeated file errors — pause and protect what’s left.
- Don’t sign out of cloud sync accounts in a panic without first checking whether your files are there (you can accidentally trigger more deletions).

## What to do now
1. **Pause and preserve what you’re seeing.**  
   Take photos/screenshots of: the blank desktop, your username at sign-in, any error messages, and the time/date. This helps if you need IT support or to report a cyber incident.

2. **If you suspect malware/ransomware, isolate the device first.**  
   If you saw a ransom note, sudden file extensions changing, or antivirus warnings: disconnect Wi-Fi/Ethernet (and if it’s a work network, tell IT immediately). Avoid plugging in backup drives until you know what’s happening.

3. **Confirm you’re in the right account/profile (a common “blank profile” cause).**  
   - **Windows:** check the signed-in user name (Start menu / lock screen). If it looks like a new profile or “temporary profile”, your original files may still exist under `C:\Users\` in a different folder name.  
   - **Mac:** confirm you’re in the correct user account (Apple menu → System Settings → Users & Groups). A “new-looking” desktop can mean you’re in a different account.

4. **Check the most likely “moved, not deleted” places (in this order).**
   - **Cloud web view first (safer):** sign in via a browser to **OneDrive / iCloud Drive** and look for “Desktop”, “Documents”, or recently moved items.  
   - **If OneDrive is on your Windows PC:** also check `C:\Users\<your-username>\OneDrive\Desktop` and `C:\Users\<your-username>\OneDrive\Documents` (Desktop can look empty if it’s now the OneDrive version).  
   - **Recycle/Trash:** check OneDrive Recycle bin (if OneDrive is involved) and your local Recycle Bin/Trash.  
   - **Local user folder:** look in `C:\Users\<your-username>\Desktop` / `Documents` (Windows) or your home folder (Mac).

5. **If you recently updated Windows, check whether there’s a “previous install” folder.**  
   If `C:\Windows.old` exists, use File Explorer search inside it for a distinctive missing file name, or for “Desktop” / “Documents”. Don’t delete `Windows.old` while you’re still looking for files.

6. **If OneDrive is in use, use built-in recovery rather than guessing.**  
   On OneDrive on the web, check the Recycle bin and (if available to you) “Restore your OneDrive” to roll back unwanted mass changes. This is safer than dragging folders around while you’re unsure what happened.

7. **If iCloud “Desktop & Documents” is involved (Mac), check the setting and the iCloud Drive location.**  
   A change in iCloud Drive’s Desktop/Documents setting can make files *appear* to vanish locally because they’re now in iCloud Drive. Check iCloud Drive settings and look in iCloud Drive for your Desktop/Documents content.

8. **If this is a work/school device, stop and escalate internally.**  
   Don’t try “fixes” that could destroy evidence or make recovery harder. Contact your IT/helpdesk and tell them it looks like a profile load issue and/or missing redirected folders.

9. **If you think this was a cyber attack (not just sync/profile confusion), report it to the right place.**  
   - If you’ve lost money, handed over passwords, or think this is linked to fraud: report via **Action Fraud** (England/Wales/Northern Ireland) or **Police Scotland** (if in Scotland).  
   - If this affects an organisation, is ongoing, or is significant, follow internal incident reporting and consider reporting via the **NCSC** cyber incident reporting service.

## What can wait
- You don’t need to decide today whether you’ll use paid recovery services.
- You don’t need to reinstall Windows/macOS or “reset the PC” right now — that can reduce recovery options.
- You don’t need to change every password immediately until you confirm whether this was a sync/profile issue vs. a security incident (but do avoid logging into sensitive accounts on the affected device if you suspect malware).

## Important reassurance
This exact “everything looks blank” moment is often caused by signing into a different/temporary profile or by cloud sync redirecting Desktop/Documents — not instant permanent deletion. Going slowly and checking the common “moved” locations first gives you the best chance of getting everything back.

## Scope note
This is first steps only to stabilise the situation and prevent irreversible mistakes. Deeper recovery depends on whether this is a profile corruption, sync misconfiguration, an update side-effect, disk failure, or malware.

## Important note
This is general information, not professional IT or legal advice. If you suspect malware/ransomware or this involves an employer/organisation, prioritise isolation and official/internal reporting over DIY fixes.

## Additional Resources
- https://support.microsoft.com/en-gb/office/restore-your-onedrive-fa231298-759d-41cf-bcd0-25ac53eb8a15
- https://support.microsoft.com/en-gb/office/find-lost-or-missing-files-in-onedrive-0d929e0d-8682-4295-982b-4bd75a3daa01
- https://support.apple.com/en-gb/109344
- https://www.ncsc.gov.uk/section/respond-recover/ml-ransomware-attack
- https://report.ncsc.gov.uk/
- https://www.dell.com/support/kbdoc/en-uk/000134012/windows-10-reports-you-are-on-a-temporary-profile
- https://www.reportfraud.police.uk/