---
title: "What to do if… a document says it is locked for editing but you cannot find where it is open"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "file locked by another session"
  - "document locked for editing"
  - "file locked for editing"
  - "locked by another user"
  - "document locked by another user"
  - "cannot find open document"
  - "file in use but not open"
  - "ghost session holding lock"
  - "word says locked for editing"
  - "excel says locked for editing"
  - "powerpoint locked for editing"
  - "what do i do if file locked"
  - "what do i do if document locked"
  - "what do i do if word locked"
  - "what do i do if excel locked"
  - "help i cannot edit document"
  - "help i cannot open file"
  - "help i see locked message"
  - "help i lost document access"
  - "my document is locked"
  - "my file is read only"
  - "my office file is locked"
  - "my onedrive file is locked"
  - "locked read only message"
  - "temporary lock file"
  - "tilde dollar lock file"
  - "locked after crash"
  - "office still running background"
  - "onedrive file locked"
  - "sharepoint file locked"
  - "network drive file locked"
  - "mac file locked office"
  - "windows process locking file"
  - "work document locked"
  - "shared document locked"
  - "file lokced by session"
  - "docment locked for editing"
last_reviewed: "2026-04-25"
date_created: "2026-04-25"
---

# What to do if… a document says it is locked for editing but you cannot find where it is open (UK)

## Short answer
Do not force changes straight away. First open the file read-only or make a copy, then close likely hidden sessions before removing any temporary lock file.

## Do not do these things
- Do not delete files you do not recognise until you have made a safe copy of the document.
- Do not keep clicking “try again” on OneDrive, SharePoint, or network storage; this can increase the chance of conflict copies.
- Do not hard-power off while an app is saving.
- Do not assume it is safe to unlock a shared document; someone else may genuinely be editing it.
- Do not install unknown “unlocker” utilities, especially on a work device.
- Do not merge or delete conflict copies while you are panicked.

## What to do now
1. **Protect your work first.**
   - If the file offers **Read-Only**, choose it.
   - Use **Save As** or **Save a Copy** with a new name, such as `filename - copy - 2026-04-25`.
   - Save the copy somewhere local, such as Desktop or Documents, not back into the same synced folder yet.

2. **Check the usual places where the other session may be open.**
   - Look for the same document on another laptop, desktop, phone, tablet, browser tab, Office on the web, or remote desktop session.
   - Close the document there if you find it.
   - Quit Word, Excel, or PowerPoint fully, not just the document window.

3. **Close a stuck Office app safely.**
   - On Windows, use **Task Manager** to close a stuck Word, Excel, or PowerPoint process if the app will not close normally.
   - On Mac, use **Force Quit** with Option-Command-Esc if the app is not responding.
   - If you are unsure what is safe to quit, restart the computer instead of ending random processes.

4. **If the file is on shared storage, check before unlocking anything.**
   - If it is on SharePoint, OneDrive for work, Teams files, or a network drive, ask the relevant person or channel: “Is anyone editing `filename` right now?”
   - If this is a work file and you cannot confirm, contact your IT helpdesk, site owner, or usual support route before removing locks.

5. **If Word left an owner file behind, remove only that temporary file after checks.**
   - In the same folder as the document, look for a small hidden file with a similar name that begins with `~$`.
   - You may need to turn on “show hidden items” or “show hidden files”.
   - Only delete the `~$` owner file after you have confirmed the document is not open anywhere and nobody else is editing it.
   - Do not delete the main document or any file where you are unsure what it is.

6. **On Windows, identify the process holding the file if the lock remains.**
   - Press **Win + R**, type `resmon`, and press Enter.
   - Go to **CPU**.
   - In **Associated Handles**, type part of the file name.
   - If it shows a clear match, close that program normally.
   - End the process only if it is clearly stuck and you understand what it is.

7. **If OneDrive or SharePoint sync is involved, reduce conflict risk before retrying.**
   - Pause OneDrive syncing.
   - Move the copy or problem file out of the synced folder to a local non-OneDrive folder.
   - Resume syncing and let it settle.
   - Move the file back only after sync has completed.
   - If you see several conflict copies, stop and involve IT before deleting or merging versions.

8. **If the lock message shows an unfamiliar name, capture the details.**
   - Note the exact message, file location, time, and name shown.
   - Do not accuse anyone or change permissions yourself.
   - For a work file, report it through your organisation’s IT or security route.

## What can wait
- You do not need to decide now whether the file is corrupted.
- You do not need to rebuild the document from scratch.
- You do not need to reinstall Office as a first response.
- You do not need to merge competing versions until you have one safe copy and know which version is current.

## Important reassurance
This message is often caused by a background Office session, a temporary owner file after a crash, a real shared edit, or a sync delay. Making a safe copy first gives you time to solve it without risking the only version.

## Scope note
These are first steps to regain access and avoid accidental corruption. If the lock keeps returning on shared storage, IT or the site owner may need to check permissions, versioning, checkout settings, sync health, or server-side locks.

## Important note
This is general information, not legal, security, or professional IT advice. If the document contains confidential work, client information, or personal data, follow your organisation’s policies and involve your IT or security team rather than experimenting on the only copy.

## Additional Resources
- https://support.microsoft.com/en-gb/office/unlock-a-file-that-has-been-locked-for-editing-bdda0d41-1b8e-44ed-a6ae-6d095d37c22d
- https://support.microsoft.com/en-gb/topic/-the-document-is-locked-for-editing-by-another-user-error-message-when-you-try-to-open-a-document-in-word-10b92aeb-2e23-25e0-9110-370af6edb638
- https://techcommunity.microsoft.com/blog/itopstalkblog/identify-which-process-is-blocking-a-file-in-windows/4432635
- https://support.microsoft.com/en-gb/office/fix-sharepoint-online-sync-problems-aaa2d172-8d45-4e94-9c04-5364d04ca2f4
- https://support.apple.com/en-gb/102586
- https://support.apple.com/en-gb/guide/activity-monitor/actmntr1002/mac
