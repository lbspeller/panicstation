---
title: "What to do if… a document says it is locked by another session and you cannot find where it is open"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "document locked by another session"
  - "file locked for editing"
  - "locked by another user"
  - "cannot find open document"
  - "word says locked for editing"
  - "excel says locked for editing"
  - "powerpoint locked for editing"
  - "office file locked error"
  - "onedrive file locked"
  - "sharepoint file locked"
  - "network drive file locked"
  - "locked read only message"
  - "temporary lock file tilde dollar"
  - "locked after crash"
  - "file in use but not open"
  - "ghost session holding lock"
  - "mac file locked office"
  - "windows process locking file"
  - "unable to edit shared document"
  - "what do i do if a document is locked"
  - "what do i do if excel says file is in use"
  - "what do i do if word says locked by another session"
  - "what do i do if sharepoint file is locked"
  - "help i cannot edit my document"
  - "help i cannot open my locked file"
  - "my document is locked for editing"
  - "my excel file is locked by me"
  - "burning plastic smell from laptop"
  - "file explorer preview pane lock"
  - "hidden owner file detected"
  - "another session active error"
  - "session timeout document lock"
last_reviewed: "2026-03-17"
---
# What to do if… a document says it is locked by another session and you cannot find where it is open (UK)

## Short answer
Create a local copy of the file to protect immediate progress, then terminate background application processes and delete any hidden temporary owner files.

## Do not do these things
- Do not delete any files until a backup copy of the document is saved to a local drive.
- Do not repeatedly click "try again" on cloud storage prompts as this may create duplicate conflict files.
- Do not force-restart the device while the application is attempting a background save.
- Do not use third-party "file unlocker" software on managed or workplace devices.
- Do not ignore an unfamiliar name in the lock message if the file contains sensitive data.

## What to do now
1. **Secure a working copy immediately.**
   - Select the **Read-Only** option if prompted by the error message.
   - Use **Save As** to create a new version of the file with a modified name on your local Desktop or Documents folder.
   - Work from this local copy until the original lock is resolved.

2. **Disable interface elements that create file handles.**
   - Open File Explorer (Windows) and select the **View** tab.
   - Ensure the **Preview pane** and **Details pane** are turned off.
   - Close the File Explorer window and attempt to open the original file again.

3. **Terminate background application instances.**
   - On Windows: Press `Ctrl + Shift + Esc` to open **Task Manager**, locate any instances of Word, Excel, or PowerPoint in the "Processes" tab, and select **End Task**.
   - On Mac: Press `Option + Command + Esc` to open the **Force Quit** menu, select the relevant Office application, and click **Force Quit**.

4. **Identify the specific locking process using system tools.**
   - On Windows: Press `Win + R`, type `perfmon.exe /res`, and press Enter. Navigate to the **CPU** tab, find **Associated Handles**, and type the filename into the search box to identify the process holding the lock.
   - On Mac: Open **Activity Monitor** via Spotlight (`Command + Space`), search for the application name, and use the **X** button to quit the process.
   - If **Microsoft PowerToys** is installed, right-click the file in Explorer and select **File Locksmith** to see exactly what is using the file.

5. **Remove hidden owner/lock files.**
   - Navigate to the folder containing the document.
   - Enable **Show hidden files** in your folder settings.
   - Look for a file starting with `~$` (e.g., `~$DocumentName.docx`).
   - If the main application is closed and no other users are editing, delete this `~$` file.

6. **Verify cloud and co-authoring status.**
   - Check if the file is open in a browser tab (Office Online) or on a mobile device.
   - Confirm the file is in a modern format (`.docx`, `.xlsx`, `.pptx`) as legacy formats (`.doc`, `.xls`) do not support multi-user co-authoring and will lock if viewed by others.
   - For SharePoint/OneDrive, check if the file has been "Checked Out" by yourself or another user.

7. **Address security signals.**
   - Note the exact name displayed in the "Locked by..." message.
   - If the name is unknown and the file contains personal or regulated data, follow your organization's internal breach reporting procedure as required by the **Data (Use and Access) Act 2025**.

## What can wait
- You do not need to reinstall the Microsoft Office suite.
- You do not need to delete the original file or assume it is corrupted.
- You do not need to merge different versions of the document until a stable connection to the storage location is restored.

## Important reassurance
File locks are frequently caused by "ghost" sessions where an application did not close correctly after a crash or network interruption. These errors generally indicate a metadata conflict rather than the loss of your actual data. Creating a local copy ensures your current work is safe while the system clears the background session.

## Scope note
This guide provides first-step stabilization for local and network-based file locks. Persistent locks on enterprise SharePoint or Managed Drive environments may require administrative intervention to clear server-side sessions.

## Important note
This information is provided for general guidance and does not constitute professional IT or legal advice. When handling sensitive corporate or personal data in the UK, prioritize compliance with your organization's IT security policies and the Data (Use and Access) Act 2025. If you suspect unauthorized access, contact your Data Protection Officer or IT Helpdesk immediately.

## Additional Resources
- https://support.microsoft.com/en-gb/office/why-can-t-i-edit-this-file-97315f48-aa5e-49d3-a4ae-a14b73daf87b
- https://support.microsoft.com/en-gb/office/file-is-locked-by-another-user-and-commands-are-grayed-out-72df8b6e-5a25-475c-a496-6b9e2e5a2619
- https://support.microsoft.com/en-gb/office/troubleshoot-co-authoring-word-documents-ef55a598-fa04-4614-a4a6-1a5056eb5a6b
- https://support.microsoft.com/en-gb/office/document-collaboration-and-co-authoring-ee1509b4-1f6e-401e-b04a-782d26f564a4
- https://support.microsoft.com/en-gb/office/top-questions-about-check-out-check-in-and-versions-7e941339-e972-4c7a-a79a-80a1fcf84076
