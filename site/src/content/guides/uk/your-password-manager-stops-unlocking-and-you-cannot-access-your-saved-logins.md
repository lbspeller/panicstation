---
title: "What to do if… your password manager stops unlocking and you cannot access your saved logins"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "phone backup missing"
  - "backup says current"
  - "cannot find backup"
  - "backup not in list"
  - "icloud backup not showing"
  - "iphone backup missing"
  - "ipad backup not listed"
  - "apple account wrong account"
  - "icloud shows backed up but no restore"
  - "google backup missing"
  - "android backup not found"
  - "google one backup not visible"
  - "google backup says complete but missing"
  - "restore option not appearing"
  - "backup storage full"
  - "backup stuck or incomplete"
  - "switched phones no backup"
  - "new phone setup restore missing"
  - "cloud backup confusion"
  - "backup retention expired"
  - "device not showing in backups"
  - "missing restore point"
  - "restore from cloud failed"
  - "apple devices app backup location"
  - "what do i do if my phone backup is missing"
  - "what do i do if icloud says current but no backup"
  - "what do i do if android backup is gone"
  - "help i cannot find my iphone backup"
  - "help i cannot find my google backup"
  - "my backup is not showing up"
  - "my icloud backup disappeared"
  - "phone says backed up but empty"
  - "smell of burning phone"
  - "phone heat during backup"
  - "visible cloud sync error"
  - "backup failed notification"
last_reviewed: "2026-03-17"
---
# What to do if… your password manager stops unlocking and you cannot access your saved logins (UK)

## Short answer
Stop any attempt to erase or reset your current device and verify your account login on a secondary screen. Confirm whether the "current" status refers to a full device backup or a simple data sync (like Photos), as these are stored and restored differently.

## Do not do these things
- Don't factory reset or "Wipe All Content and Settings" to try and trigger a restore until you have confirmed a backup exists on a different screen.
- Don't delete any existing backups to "make space" for a new one; you may be deleting the only viable restore point.
- Don't sign out of your Apple Account or Google Account if you are unsure of your password or recovery keys.
- Don't assume a "Successful Sync" notification means a full device image was created.

## What to do now
1. **Stabilize the device and connection.** **Connect the phone to a power source and a stable Wi-Fi network to ensure background processes do not time out.** 
   - If the device is physically failing (e.g., screen flickering, excessive heat), stop using it immediately and perform all further checks from a computer or tablet.

2. **Verify the specific account credentials.** **Check that the email address currently signed into the device matches exactly with the account where you expect the backup to be.**
   - For Apple users: Look at the top of **Settings**.
   - For Android users: Check **Settings > Google**.
   - Even a one-character difference (e.g., @gmail.com vs @googlemail.com) can point to a completely different storage vault.

3. **Distinguish between Sync and Backup.** **Check your cloud storage settings to see if your data is "Synced" (stored as individual files) or "Backed Up" (a full system snapshot).**
   - **Sync:** If you use iCloud Photos or Google Photos, your pictures are not part of the "Device Backup" because they are already in the cloud.
   - **Backup:** A device backup contains settings, app data, and messages that are not synced elsewhere.

4. **Locate the backup via a secondary interface.** **Log in to your account on a computer to confirm the presence of the backup file without using the phone's interface.**
   - **iPhone/iPad:** Log in to **icloud.com** or use a Mac (System Settings > [Name] > iCloud > Manage) or Windows PC with the **Apple Devices app** (Manage Backups).
   - **Android:** Open the **Google One** app or website and navigate to **Storage > View Details** to see if a device backup is listed under "Device backup."

5. **Confirm the OS version compatibility.** **Ensure the device you are trying to restore to is running the same or a newer version of the operating system than the device that created the backup.**
   - A backup created on iOS 19 cannot be seen or used by a device running iOS 18.
   - Update the receiving device to the latest software before attempting the restore.

6. **Check for retention expiration.** **Review the date of your last successful backup to see if it has exceeded automated deletion thresholds.**
   - **Apple:** iCloud backups may be deleted after 180 days of device inactivity (not backing up).
   - **Android:** Google may delete device backups (excluding Photos) after 57 days of inactivity.

7. **Review storage "Full" statuses.** **Check if your cloud storage is at 100% capacity, which can cause backups to appear "Current" while actually being incomplete or corrupted.**
   - If storage is full, the most recent "successful" backup might actually be an older one from weeks or months ago.

8. **Look for computer-based backups.** **If you ever plugged your phone into a computer, check the local drive for a physical backup file.**
   - **Mac:** Finder > Select Device > General > Manage Backups.
   - **Windows:** Check the **Apple Devices app** or `%userprofile%\Apple\MobileSync\Backup`.

## What can wait
- You do not need to decide whether to buy more storage right this second.
- You do not need to delete old photos or videos until you have verified the status of the system backup.
- You do not need to contact the manufacturer's technical support until you have verified the account email is correct.

## Important reassurance
It is common for "Current" status messages to refer to a successful sync of one app (like Mail or Contacts) rather than the entire phone. If you cannot find a full backup, your data is often still accessible individually via icloud.com or Google Drive. Confusion between multiple accounts is the most frequent cause of "missing" data, and this can usually be resolved by checking old email addresses.

## Scope note
This guide provides first-step stabilization for locating a missing backup. It does not cover data recovery from damaged hardware or forensic retrieval of deleted files.

## Important note
This information is provided for general guidance and does not guarantee data recovery. Software behavior and retention policies are subject to change by Apple and Google. If the data is business-critical, consider consulting a professional data recovery service in the UK before taking further action. Under the Consumer Rights Act 2015, you have rights regarding digital content; if you believe a paid service has failed, keep screenshots and contact Citizens Advice for further guidance.

## Additional Resources
- https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers
- https://www.ncsc.gov.uk/blog-post/what-does-ncsc-think-password-managers
- https://www.ncsc.gov.uk/collection/passwords/password-manager-buyers-guide
- https://support.1password.com/forgot-account-password/
- https://bitwarden.com/help/forgot-master-password/
