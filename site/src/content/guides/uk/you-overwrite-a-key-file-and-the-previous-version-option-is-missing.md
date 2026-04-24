---
title: "What to do if… you overwrite a key file and the “previous version” option is missing"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - overwritten file
  - saved over a file
  - replaced the wrong file
  - lost earlier version
  - no previous versions available
  - version history missing
  - previous version option missing
  - restore previous version
  - recover old version
  - autosave version
  - cloud sync overwrite
  - onedrive overwrite
  - sharepoint overwrite
  - google drive version history
  - dropbox version history
  - time machine restore file
  - file history restore
  - document reverted wrong
  - key work file overwritten
  - accidental overwrite
last_reviewed: "2026-03-08"
---

# What to do if… you overwrite a key file and the “previous version” option is missing (UK)

## Short answer
Stop making changes and stop syncing right now, then try cloud/app version history and backups before anything overwrites the last recoverable copy.

## Do not do these things
- Don’t keep opening and re-saving the file “to check” — each save can destroy recoverable data.
- Don’t restore a version **over the file** until you’ve made a safe copy (use “restore a copy” where available).
- Don’t rename/move lots of files in the same folder yet (it creates more disk activity and sync churn).
- Don’t run “cleaners/optimisers,” reinstall apps, or try multiple recovery tools at random.
- Don’t leave cloud sync running while you troubleshoot — it can propagate the overwrite everywhere.

## What to do now
1. **Freeze the situation (30 seconds):**
   - Close the app that overwrote the file.
   - If the file is in a synced folder (OneDrive/SharePoint/Google Drive/Dropbox), **pause syncing** (or disconnect from the internet temporarily) to stop the overwrite spreading.

2. **Make a safe copy of the current file (without editing it):**
   - Copy the overwritten file to a different location (ideally outside the sync folder, or onto an external drive/USB).
   - Do not open or re-save that copy yet.

3. **Check cloud “trash/recycle bin” first (fast win):**
   - In **OneDrive/SharePoint**, check the **Recycle bin** on the web.
   - In **Google Drive**, check **Bin**.
   - In **Dropbox**, check **Deleted files** (and then version history if needed).

4. **Check cloud version history (even if Windows “Previous versions” is missing):**
   - **OneDrive / SharePoint:** right-click the file → **Version history**; restore an earlier version (or restore a copy if offered).
   - If many files were impacted, look for **Restore your OneDrive** on the OneDrive website **if available** (this is commonly limited to recent history, such as the last 30 days, and feature access can depend on your account/subscription).
   - **Google Drive:** for uploaded files, use **Manage versions**; for Google Docs/Sheets/Slides use **File → Version history** and restore.
   - **Dropbox:** use **Version history** to roll back.

5. **If you’re on Windows and “Restore previous versions” is empty, check whether backups were ever enabled:**
   - Right-click the *folder* that contained the file (or the drive) → **Restore previous versions** (this only works if File History/backup/shadow copies exist).
   - If you have **File History** enabled, restore the file/folder from File History.

6. **If you’re on a Mac: use Versions / Time Machine**
   - In many apps: **File → Revert To → Browse All Versions** (prefer “restore a copy” if offered).
   - If you use **Time Machine**, restore the earlier version from the backup.

7. **Check the app’s own recovery store (especially Office files):**
   - In Microsoft Word/Excel/PowerPoint, use the app’s recovery options (e.g., Version History inside the app for cloud files, or “Recover Unsaved…”/AutoRecover where available).
   - Save any recovered content immediately under a **new** filename in a **new** location.

8. **If this is a work/school file, escalate early:**
   - Contact your organisation’s **IT service desk** and say: “Key file overwritten; syncing paused; can you restore from backups/snapshots/version history?”
   - If the file is in SharePoint/Teams/OneDrive for work, admins often have restore options you can’t see.

9. **If the file contains personal data and this could be part of a personal data breach:**
   - Start a simple incident log (what happened, when you noticed, what you paused/did).
   - Follow your organisation’s route (manager + DPO/Information Governance/security).
   - If it meets the threshold for reporting, UK GDPR requires reporting to the **ICO** without undue delay and within **72 hours** of becoming aware.

## What can wait
- You do **not** need to decide now whether to use paid recovery software or a specialist service.
- You do **not** need to “fix” the document right now — the priority is recovering *any* earlier copy.
- You can postpone investigating why “previous versions” was missing until after you’ve tried restore routes.

## Important reassurance
This is a common, human mistake — especially with similar filenames and sync tools. “Previous versions” being missing in one place doesn’t mean there aren’t versions elsewhere (cloud history, app history, Time Machine/File History, or organisational backups).

## Scope note
These are first steps to stop further loss and try the most common restore routes. If the file is business-critical or legally sensitive, the next step after stabilising is usually IT/admin support or a professional recovery service.

## Important note
This is general information, not legal, technical, or professional advice. Recovery success depends on where the file lives (local vs cloud), whether versioning/backups were enabled, and how much has been written/synced since the overwrite.

## Additional Resources
- https://support.microsoft.com/en-gb/office/restore-a-previous-version-of-a-file-stored-in-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893
- https://support.microsoft.com/en-gb/office/restore-your-onedrive-fa231298-759d-41cf-bcd0-25ac53eb8a15
- https://support.microsoft.com/en-us/windows/backup-and-restore-with-file-history-7bf065bf-f1ea-0a78-c1cf-7dcf51cc8bfc
- https://support.apple.com/en-gb/guide/mac-help/mh40710/mac
- https://support.apple.com/en-gb/guide/mac-help/mh11422/mac
- https://support.google.com/drive/answer/2409045?hl=en-GB
- https://help.dropbox.com/delete-restore/version-history-overview
- https://ico.org.uk/for-organisations/advice-for-small-organisations/personal-data-breaches/72-hours-how-to-respond-to-a-personal-data-breach/