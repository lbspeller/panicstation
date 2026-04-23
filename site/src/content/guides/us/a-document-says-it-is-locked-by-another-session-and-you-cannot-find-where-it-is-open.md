---
title: "What to do if… a document says it is locked by another session and you cannot find where it is open"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "document locked by another session"
  - "document locked for editing"
  - "file locked by another user"
  - "cannot find open document"
  - "word locked for editing error"
  - "excel locked for editing error"
  - "powerpoint locked for editing"
  - "office file locked message"
  - "onedrive locked file"
  - "sharepoint locked file"
  - "network share locked document"
  - "file in use not open"
  - "read only because locked"
  - "temp lock file tilde dollar"
  - "stuck office background process"
  - "windows resource monitor handles"
  - "process locking file windows"
  - "mac app holding file open"
  - "cannot edit shared document"
  - "help i cannot open document"
  - "help i cannot edit file"
  - "my document says locked by me"
  - "my excel is locked for editing"
  - "what do i do if document is locked"
  - "what do i do if file says in use"
  - "what do i do if excel is read only"
  - "locked session error"
  - "hidden office session"
  - "server lock not releasing"
  - "associated handles search"
last_reviewed: "2026-03-17"
---
# What to do if… a document says it is locked by another session and you cannot find where it is open (USA)

## Short answer
Open the file in read-only mode and immediately save a local copy to a different location to preserve your work. Close all instances of the application through your system's process manager to release background locks.

## Do not do these things
- Do not delete any files in the document folder until you have successfully saved a backup copy.
- Do not attempt to rename the file while the lock error is active.
- Do not repeatedly open and close the file on a shared drive / OneDrive / SharePoint, as this may create multiple conflict copies.
- Do not perform a hard shutdown of your computer while the application is attempting to save.
- Do not download third-party "file unlocker" software on managed or work devices.

## What to do now
1. **Create an immediate emergency backup copy.**
   - Select **Open a Read-Only copy** if prompted by the error message.
   - Use **File > Save As** to save the document to your local Desktop or Documents folder with a unique name, such as `DocumentName_Recovery_2026`.
   - Verify that this new local copy is editable before proceeding.

2. **Terminate hidden application processes (Windows).**
   - Press **Ctrl + Shift + Esc** to open Task Manager.
   - Select the **Details** tab.
   - Locate any instances of `WINWORD.EXE`, `EXCEL.EXE`, or `POWERPNT.EXE`.
   - Right-click each and select **End Task**.

3. **Terminate hidden application processes (macOS).**
   - Press **Option + Command + Escape**.
   - Select the Office application (e.g., Microsoft Word) and click **Force Quit**.
   - If the application is not listed, open **Activity Monitor** from Applications > Utilities and quit the process from there.

4. **Identify the specific locking process using Resource Monitor (Windows).**
   - Press **Win + R**, type `resmon`, and press **Enter**.
   - Select the **CPU** tab.
   - Expand the **Associated Handles** section.
   - Type the name of the locked file into the **Search Handles** box.
   - If a process appears (e.g., `Explorer.exe` or an antivirus agent), right-click it and select **End Process** only if it is safe to do so.

5. **Clear local temporary owner files (Advanced).**
   - In File Explorer, navigate to the folder containing the locked document.
   - Enable **Hidden items** under the View / Layout menu.
   - Look for a file starting with `~$` followed by the document name (e.g., `~$Document.docx`).
   - If the application is closed and no one else is using the file, delete this temporary file.

6. **Verify co-authoring and server status.**
   - If the file is on SharePoint or OneDrive, check the web version (Office Online) to see if the file is checked out or being edited by another user.
   - Check for a yellow bar at the top of the document labeled **Enable Editing** or **Marked as Final** and select the appropriate button to release the interface lock.

7. **Isolate from cloud sync.**
   - If using OneDrive, right-click the cloud icon in the taskbar and select **Pause syncing**.
   - Move the problematic file out of the OneDrive folder to a local-only folder.
   - Resume syncing, wait for the status to show "Up to date," and then move the file back.

## What can wait
- You do not need to reinstall the Microsoft Office suite immediately.
- You do not need to reconcile version history or merge changes until you have secured a single, editable copy.
- You do not need to contact your IT administrator if the local "Save As" copy allows you to continue working for now.

## Important reassurance
A file lock is almost always a temporary technical error caused by a background process failing to close properly or a slight delay in cloud synchronization. It does not usually indicate that your data is corrupted or lost. Saving a local copy immediately removes the pressure of the lock and ensures your current work is safe.

## Scope note
This guide covers first-step stabilization for local and cloud-based file locks. It does not cover server-side permission changes, database-level locks, or forensic recovery of overwritten data.

## Important note
This information is for general troubleshooting purposes and does not constitute professional IT or legal advice. If you are working within a corporate environment, consult your organization's IT policy before terminating system processes or deleting temporary files on shared network drives. Some file locks may be intentionally placed by security software or document management systems for compliance.

## Additional Resources
- https://support.microsoft.com/en-us/office/excel-file-is-locked-for-editing-6fa93887-2c2c-45f0-abcc-31b04aed68b3
- https://support.microsoft.com/en-us/office/unlock-a-file-that-has-been-locked-for-editing-bdda0d41-1b8e-44ed-a6ae-6d095d37c22d
- https://support.microsoft.com/en-us/topic/-the-document-is-locked-for-editing-by-another-user-error-message-when-you-try-to-open-a-document-in-word-10b92aeb-2e23-25e0-9110-370af6edb638
- https://support.microsoft.com/en-us/office/check-out-check-in-or-discard-changes-to-files-in-a-sharepoint-library-7e2c12a9-a874-4393-9511-1378a700f6de
- https://support.microsoft.com/en-us/office/check-out-or-check-in-files-in-a-document-library-acce24cd-ab39-4fcf-9c4d-1ce3050dc602
