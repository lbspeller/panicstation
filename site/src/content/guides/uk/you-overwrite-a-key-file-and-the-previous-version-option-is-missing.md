---
title: "What to do if… you overwrite a key file and the “previous version” option is missing"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "overwritten file"
  - "saved over a file"
  - "replaced the wrong file"
  - "lost earlier version"
  - "no previous versions available"
  - "version history missing"
  - "previous version option missing"
  - "restore previous version"
  - "recover old version"
  - "autosave version"
  - "cloud sync overwrite"
  - "onedrive overwrite"
  - "sharepoint overwrite"
  - "google drive version history"
  - "dropbox version history"
  - "time machine restore file"
  - "file history restore"
  - "document reverted wrong"
  - "key work file overwritten"
  - "accidental overwrite"
  - "help i saved over a document"
  - "help i overwritten my work"
  - "what do i do if i saved over a file"
  - "what do i do if i replaced a folder"
  - "my file version history is empty"
  - "my previous versions are gone"
  - "smell of burning computer"
  - "audible clicking from hard drive"
  - "visible sync error icons"
  - "file date modified updated"
last_reviewed: "2026-03-17"
---
# What to do if… you overwrite a key file and the “previous version” option is missing (UK)

## Short answer
Stop saving changes and pause cloud syncing immediately, then use the web-browser interface of your storage provider (OneDrive, Google Drive, or Dropbox) to check for server-side version history.

## Do not do these things
- Don't keep the file open or continue clicking "Save" to test if it works—every save operation can overwrite blocks of data that were previously recoverable.
- Don't rename or move the file within a synced folder, as this creates new sync "events" that can clear the version cache.
- Don't run "disk cleaners" or "optimizer" software, which may mark the "deleted" data blocks of your old version as safe to be overwritten by new data.
- Don't restore a backup directly over the existing file; always choose "Restore as a copy" or "Restore to a new location" to avoid losing the current version.
- Don't attempt to re-install the application (e.g., Word or Excel) in an attempt to find the file; this does not help and increases disk activity.

## What to do now
1. **Freeze the data state immediately.** 
   - **Close the application** that performed the overwrite without saving again.
   - **Pause cloud syncing** on your computer (right-click the OneDrive, Dropbox, or Google Drive icon in the taskbar) or disconnect from the internet to stop the "new" version from replacing the "old" version on other devices.

2. **Access your files via a web browser.** 
   - **Log in to the web version** of your storage provider (e.g., onedrive.live.com or drive.google.com).
   - **Check the "Version History"** by right-clicking the file in the browser; cloud providers often keep versions that the Windows "Previous Versions" tool cannot see.
      - OneDrive Personal: generally keeps the last 25 versions for 30 days.
      - Dropbox Plus/Family: keeps versions for 180 days (as of 2026).
      - Google Drive: keeps non-Google format versions for 30 days or 100 versions.

3. **Check the provider’s Recycle Bin or Trash.** 
   - **Navigate to the "Bin" or "Recycle Bin"** on the website; sometimes a "replaced" file is treated as a deletion of the old version and a creation of a new one.

4. **Use "Files Restore" for mass overwrites (OneDrive/SharePoint only).** 
   - **Select "Restore your OneDrive"** from the settings menu on the web interface if a large number of files were overwritten simultaneously.
   - **Pick a point in time** (e.g., "Yesterday") to roll back the entire library to that state.

5. **Search local application-specific recovery folders.** 
   - **Navigate to the "AutoRecover" location** in your app settings (e.g., in Word: File > Options > Save > AutoRecover file location).
   - **Look for .asd or .tmp files** with a timestamp prior to the overwrite.

6. **Check for File History or Time Machine backups.** 
   - **Windows:** Search for "Restore your files with File History" in the Start menu; if it was turned on, you can browse a timeline of that specific folder.
   - **Mac:** Open the folder where the file lived, then **open Time Machine** from the menu bar to see past states of that folder.

7. **Escalate to IT Support for work or school accounts.** 
   - **Notify your IT administrator** immediately; they often have access to secondary backup tiers (like "Second-Stage Recycle Bins" in SharePoint) or snapshots that are invisible to end-users.

8. **Assess for personal data breaches (UK GDPR).** 
   - **Determine if the lost data** includes personal information about others (customers, staff, or clients).
   - **Document the incident** in an internal log, noting when it happened and what was lost.
   - **Report to the ICO within 72 hours** if the loss of data poses a risk to the rights and freedoms of individuals.
      - Note: Some sectors, such as trust service providers (eIDAS), must report within 24 hours.

## What can wait
- You do not need to investigate why the "Previous Versions" tab was missing or empty right now; focus entirely on recovery first.
- You do not need to worry about fixing the errors in the newly recovered document immediately; simply securing any older copy is the priority.
- You can delay deciding whether to pay for professional data recovery services until all built-in cloud and OS tools have been exhausted.

## Important reassurance
Overwrite errors are a standard occurrence in digital environments, particularly when using sync-enabled folders. The "Previous Versions" option in Windows is often hidden or disabled even when the cloud provider (OneDrive/Google/Dropbox) still holds a complete history of the file on their servers.

## Scope note
This guide provides first-step stabilization for digital data loss. It does not cover physical drive repair or forensic data recovery for hardware that has suffered mechanical failure.

## Important note
This information is for general guidance and does not guarantee data recovery. Success depends on your specific software settings, backup configurations, and the amount of time that has passed since the overwrite. If the data is of high legal or financial value, consider contacting a professional data recovery specialist before attempting further manual steps.

## Additional Resources
- https://support.microsoft.com/en-gb/office/restore-a-previous-version-of-a-file-without-unwanted-changes-bdb2cafa-d588-475c-97d7-20e8b9949b84
- https://support.microsoft.com/en-gb/office/restore-a-previous-version-of-a-file-stored-in-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893
- https://support.microsoft.com/en-gb/office/recover-an-earlier-version-of-an-office-file-169cb166-e7e2-438e-8f39-9a8927828121
- https://support.apple.com/en-gb/guide/mac-help/mh40710/mac
- https://www.ncsc.gov.uk/collection/using-online-services-safely/back-up-critical-data
