---
title: "What to do if… a document says it is locked by another session and you cannot find where it is open"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - file locked by another session
  - document locked for editing
  - locked by another user
  - cannot find open document
  - word says locked for editing
  - excel says locked for editing
  - powerpoint locked for editing
  - office file locked error
  - onedrive file locked
  - sharepoint file locked
  - network drive file locked
  - locked read only message
  - temporary lock file tilde dollar
  - locked after crash
  - file in use but not open
  - ghost session holding lock
  - mac file locked office
  - windows process locking file
  - unable to edit shared document
last_reviewed: "2026-03-08"
---

# What to do if… a document says it is locked by another session and you cannot find where it is open (UK)

## Short answer
Don’t force changes yet: first protect your work by opening the file read-only (or making a copy), then close any hidden sessions and identify what’s holding the lock before you remove anything.

## Do not do these things
- Don’t delete files you don’t recognise until you’ve made a backup copy of the document.
- Don’t keep clicking “try again” on OneDrive/SharePoint/network storage — it can create conflict copies.
- Don’t hard-power off while an app is saving; that can corrupt the file.
- Don’t assume it’s safe to “unlock” a shared document — someone else may genuinely be editing it.
- Don’t install unknown “unlocker” utilities (especially on a work device).

## What to do now
1. **Protect your work first (30 seconds).**
   - If offered **Read-Only**, choose it.
   - Immediately **Save As** a new name (e.g., `filename - copy - 2026-03-08`) somewhere local (Desktop/Documents) so you can keep working without touching the locked original.

2. **Check the usual “other session” places (2 minutes).**
   - Look for the same file open on: another laptop/PC, your phone/tablet, Office on the web, a browser tab, or a remote desktop session.
   - Fully **quit** the app (not just close the window). If needed, use **Task Manager** (Windows) or **Force Quit** (Mac) to close a stuck Office app.

3. **If it’s shared storage, confirm nobody else is editing.**
   - If it’s on a **team share/SharePoint/OneDrive**, message the team/channel: “Is anyone editing `X` right now?”
   - If it’s a work system and you can’t confirm, contact your **IT helpdesk** before you try to remove locks on shared folders.

4. **If Word/Excel/PowerPoint left an “owner” lock file behind, remove it safely (only after steps 1–3).**
   - In the same folder as the document, look for a small hidden file starting with `~$` and a similar name to your document. (You may need to turn on “show hidden items/hidden files”.)
   - Safe sequence:
     1) Confirm nobody is editing the file.
     2) Make sure Office apps are fully closed everywhere.
     3) Delete only the `~$…` owner/lock file.
     4) Try opening the original again.

5. **If you’re on Windows: identify the locking process (safer than guessing).**
   - Open **Resource Monitor** (`Win + R` → `resmon`).
   - **CPU** tab → **Associated Handles** → type part of the file name.
   - Close that program normally if possible; if it’s clearly stuck, end the process or restart the PC, then try again.

6. **If you’re on a Mac: close stuck apps using Apple’s built-in tools.**
   - Use **Force Quit** (Option–Command–Esc) for Word/Excel/PowerPoint if it’s unresponsive.
   - Or open **Activity Monitor** and quit/force quit the stuck process.
   - If you’re unsure what’s safe to quit, restart the Mac instead of experimenting.

7. **If OneDrive/SharePoint sync is involved: reduce conflict risk before retrying.**
   - Pause OneDrive syncing.
   - Move the file **out of the synced folder** to a local non-OneDrive folder (e.g., a temporary folder in Documents).
   - Resume syncing and let it settle.
   - Move the file back, then try opening it again.
   - If you see multiple conflict copies, stop and involve IT (work) before deleting or merging.

8. **If the lock message shows an unfamiliar name, treat it as a security signal.**
   - Note the time, file location, and exact message.
   - Report it to your organisation’s IT/security route (many UK organisations handle this via their information security team and/or Data Protection Officer).

## What can wait
- You do **not** need to decide right now whether the file is corrupted or rebuild it from scratch.
- You do **not** need to reinstall Office as a first response.
- You do **not** need to merge competing versions until you’ve stabilised one safe editable copy.

## Important reassurance
This error is very often caused by a leftover background session, a temporary owner file after a crash, or a sync delay — it usually doesn’t mean your document is gone. Making a copy first gives you breathing room.

## Scope note
This guide covers first steps to regain access and avoid accidental corruption. If the lock keeps returning on shared storage, the next stage is checking permissions, versioning/checkout settings, and server-side locks with IT.

## Important note
This is general information, not legal or professional IT advice. If the file contains confidential work or personal data, follow your organisation’s policies and involve your IT/security team rather than experimenting on the only copy.

## Additional Resources
- https://support.microsoft.com/en-gb/office/unlock-a-file-that-has-been-locked-for-editing-bdda0d41-1b8e-44ed-a6ae-6d095d37c22d
- https://support.microsoft.com/en-gb/topic/-the-document-is-locked-for-editing-by-another-user-error-message-when-you-try-to-open-a-document-in-word-10b92aeb-2e23-25e0-9110-370af6edb638
- https://techcommunity.microsoft.com/blog/itopstalkblog/identify-which-process-is-blocking-a-file-in-windows/4432635
- https://support.microsoft.com/en-us/office/fix-sharepoint-online-sync-problems-aaa2d172-8d45-4e94-9c04-5364d04ca2f4
- https://support.apple.com/en-gb/102586
- https://support.apple.com/en-gb/guide/activity-monitor/actmntr1002/mac