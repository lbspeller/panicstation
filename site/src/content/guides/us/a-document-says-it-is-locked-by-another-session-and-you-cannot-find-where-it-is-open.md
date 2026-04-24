---
title: "What to do if… a document says it is locked by another session and you cannot find where it is open"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - file locked by another session
  - document locked for editing
  - locked by another user
  - cannot find open document
  - word locked for editing error
  - excel locked for editing error
  - powerpoint locked for editing
  - office file locked message
  - onedrive locked file
  - sharepoint locked file
  - network share locked document
  - file in use not open
  - read only because locked
  - temp lock file tilde dollar
  - stuck office background process
  - windows resource monitor handles
  - process locking file windows
  - mac app holding file open
  - cannot edit shared document
last_reviewed: "2026-03-08"
---

# What to do if… a document says it is locked by another session and you cannot find where it is open (USA)

## Short answer
Stop and protect your work first: open the file read-only (or make a copy) so you don’t lose changes, then close hidden sessions and locate what’s holding the lock before you remove anything.

## Do not do these things
- Don’t delete files in the folder “until it works” — make a backup copy of the document first.
- Don’t keep opening/closing rapidly on OneDrive/SharePoint/network shares — it can create conflict copies.
- Don’t hard-shutdown while the app is saving; corruption risk goes up.
- Don’t force an “unlock” on a shared/work document without checking if someone else is editing.
- Don’t download random third-party “unlocker” tools onto a work computer.

## What to do now
1. **Make a safe working copy immediately.**
   - If prompted, open **Read-Only**.
   - Use **Save As** to create `filename - copy - 2026-03-08` somewhere local (Desktop/Documents) so you can work without touching the locked original.

2. **Look for the missing “other session” (most common cause).**
   - Check if it’s open on another device, Office web, a browser tab, or a remote desktop/virtual machine.
   - Fully quit the app. On Windows, open **Task Manager** and end Word/Excel/PowerPoint if it’s still running in the background.

3. **If the file is shared, verify it’s not truly in use.**
   - Message the team: “Is anyone editing `X` right now?”
   - If it’s a work share and you can’t confirm, contact your **IT help desk** (they may be able to see server-side open sessions).

4. **Remove a common Office “owner” lock file safely (only after you’ve backed up and closed Office).**
   - In the same folder as the document, look for a small hidden file beginning with `~$` with a matching name pattern. (You may need to turn on “show hidden items/hidden files”.)
   - Safe sequence:
     1) Confirm nobody is editing the file.
     2) Make sure Office apps are fully closed everywhere.
     3) Delete only the `~$…` owner/lock file.
     4) Try opening the original again.

5. **Find what process is holding the lock (Windows).**
   - Open **Resource Monitor** (`Win + R` → `resmon`).
   - Go to **CPU** tab → in **Associated Handles**, type part of the file name.
   - Close that program if it’s legitimate; if it’s stuck, end the process or restart the computer.

6. **On macOS: use Apple’s built-in quit tools (avoid guesswork).**
   - Use **Force Quit** (Option–Command–Esc) for Word/Excel/PowerPoint if it’s unresponsive.
   - Or open **Activity Monitor** and quit/force quit the stuck process.
   - If you’re unsure what’s safe to quit, restart the Mac instead of experimenting.

7. **If OneDrive/SharePoint is involved, prevent version chaos before retrying.**
   - Pause OneDrive syncing.
   - Move the file **out of the synced folder** to a local non-OneDrive folder (e.g., a temporary folder in Documents).
   - Resume syncing and let it complete.
   - Move the file back, then try again.
   - If conflict copies appear, stop and ask IT (work) before deleting/merging versions.

8. **If this is a workplace or regulated file, escalate instead of experimenting.**
   - Record the exact message, file path, and time.
   - Report to your IT/security/compliance contact if the lock shows an unfamiliar name or you suspect unauthorized access (some organizations require specific handling for HIPAA/FERPA/financial records).

## What can wait
- You don’t need to decide right now whether to rebuild the file from scratch.
- You don’t need to reinstall Office as a first move.
- You don’t need to reconcile multiple versions until you’ve secured one safe editable copy.

## Important reassurance
This is usually caused by a background Office process, a leftover temporary owner file after a crash, or a sync delay — not permanent loss. Making a copy first gives you breathing room and reduces the chance of conflicts.

## Scope note
These are first actions to regain access and avoid corruption. If the lock persists on shared storage, the next step is checking sharing/permissions, checkout/version history, and server-side locks with IT.

## Important note
This is general information, not professional IT, legal, or compliance advice. If the file contains sensitive or regulated data, follow your organization’s policy and involve IT/security rather than trying repeated “unlock” attempts on the only copy.

## Additional Resources
- https://support.microsoft.com/en-us/office/unlock-a-file-that-has-been-locked-for-editing-bdda0d41-1b8e-44ed-a6ae-6d095d37c22d
- https://support.microsoft.com/en-us/office/excel-file-is-locked-for-editing-6fa93887-2c2c-45f0-abcc-31b04aed68b3
- https://techcommunity.microsoft.com/blog/itopstalkblog/identify-which-process-is-blocking-a-file-in-windows/4432635
- https://support.microsoft.com/en-us/office/fix-sharepoint-online-sync-problems-aaa2d172-8d45-4e94-9c04-5364d04ca2f4
- https://support.apple.com/102586
- https://support.apple.com/guide/activity-monitor/actmntr1002/mac