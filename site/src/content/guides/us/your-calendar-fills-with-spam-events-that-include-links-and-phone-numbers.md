---
title: "What to do if… your calendar fills with spam events that include links and phone numbers"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "cloud files in trash"
  - "unauthorized file deletion"
  - "sudden file loss cloud"
  - "google drive files missing"
  - "onedrive files in recycle bin"
  - "dropbox deleted files suddenly"
  - "icloud recently deleted files"
  - "mass file trashing"
  - "help i didnt delete my files"
  - "what do i do if my cloud files are trashed"
  - "what do i do if my files were moved to trash"
  - "help my cloud files are gone"
  - "my google drive is empty"
  - "my onedrive files are in the bin"
  - "someone deleted my cloud files"
  - "unexplained trash activity"
  - "smell of burning"
  - "unusual account activity alert"
  - "security alert file deletion"
  - "account takeover symptoms"
  - "cloud sync error mass delete"
  - "hacked cloud storage"
  - "recovered deleted files"
  - "cloud backup missing"
  - "bulk file restoration"
  - "automated file deletion"
  - "trash folder full suddenly"
  - "suspicious login detected"
  - "unauthorized access cloud"
  - "files moved to trash"
  - "files missing from folder"
  - "cloud account compromise"
last_reviewed: "2026-03-17"
---
# What to do if… your calendar fills with spam events that include links and phone numbers (USA)

## Short answer
Stop all background syncing immediately to prevent the deletion from spreading to other devices, then secure your account credentials before attempting a restoration. Most major services (Google Drive, OneDrive, iCloud, Dropbox) retain trashed items for 30 days before permanent purging.

## Do not do these things
- Don't manually empty the trash or recycle bin to "clean up" while investigating.
- Don't attempt to restore files while sync clients are still active on multiple devices.
- Don't click links in email security alerts; navigate directly to the provider's official login page.
- Don't pay third-party "recovery services" that claim they can bypass provider trash limits.
- Don't assume the cloud account is the only compromise; check your associated email account security simultaneously.

## What to do now
1. **Pause or quit all cloud synchronization software on every device you own.** This prevents a "deletion loop" where one device deletes a file and tells the cloud—and your other devices—to do the same.
   - Right-click the cloud icon in the taskbar (Windows) or menu bar (macOS) and select "Pause syncing" or "Quit."
   - If using a mobile device, enable Airplane Mode or disable "Background App Refresh" for the specific cloud app.

2. **Access the cloud service only through a secure web browser on a single device.** Using the web interface allows you to see the "truth" of what is on the server without local sync software interfering.
   - Navigate to the official site (e.g., drive.google.com, onedrive.live.com, dropbox.com).
   - Check the "Trash," "Recycle Bin," or "Deleted Items" folder to confirm the files are present.

3. **Check the account activity or audit logs for unauthorized access.** Most services provide a log of which devices or applications recently accessed or modified files.
   - Look for "Recent Activity," "Security Events," or "Security Notifications" in your account settings.
   - Document any unfamiliar IP addresses, device names, or third-party apps that coincide with the deletion time.

4. **Change your password and sign out of all other active sessions immediately.** This kicks any unauthorized user or compromised app off the account so they cannot continue trashing files.
   - Create a unique, complex password not used for any other service.
   - Use the "Sign out of all other sessions" or "Manage devices" option to revoke access to every device except the one you are currently using.

5. **Enable phishing-resistant Multi-Factor Authentication (MFA) if it is not already active.** Use a hardware security key (like YubiKey) or a dedicated authenticator app rather than SMS, which is vulnerable to interception.
   - Revoke any "trusted devices" that you do not have physical possession of right now.

6. **Verify the security of the primary email account linked to your cloud storage.** If an attacker has access to your email, they can bypass your new cloud password via the "Forgot Password" feature.
   - Check for unauthorized forwarding rules in your email settings that might be sending your security alerts to an attacker.

7. **Restore a single, non-critical test folder from the trash to verify stability.** **Wait at least 10 minutes after restoring the test folder to see if it is automatically moved back to the trash.**
   - If the file stays restored, proceed with bulk restoration.
   - If it is re-deleted, an active sync client or a malicious third-party app with API access is likely still connected.

8. **Report the incident to the FBI’s Internet Crime Complaint Center (IC3) if you suspect a criminal takeover.** Use the official reporting portal to document the compromise, especially if sensitive personal or financial data was involved.
   - Include the date of compromise, suspected app source, and any unusual device behavior.

## What can wait
- You do not need to perform a full factory reset of your computers or phones immediately.
- You do not need to contact a forensic specialist in the first hour; securing the account is the priority.
- You do not need to worry about the 30-day deletion timer if the event happened today; you have a window to stabilize before the data is purged.

## Important reassurance
Seeing a mass deletion is stressful, but files in a "Trash" or "Recycle Bin" folder are not yet gone. As long as you have stopped the sync process and secured the account, you generally have a 30-day safety net to reverse the changes. Panic often leads to "Delete Forever" mistakes; taking a moment to pause sync is the most effective way to save your data.

## Scope note
This guide provides first-step stabilization for personal or small-business cloud accounts. It does not cover enterprise-level server recovery or physical hard drive failure.

## Important note
This information is for general guidance and does not constitute professional cybersecurity or legal advice. If this incident involves workplace data, notify your IT department or Information Security Officer immediately, as organizational policies for data recovery and reporting take precedence over these steps.

## Additional Resources
- https://support.apple.com/en-us/102444
- https://support.google.com/calendar/answer/12790228?hl=en
- https://support.google.com/calendar/answer/13159188?hl=en
- https://support.google.com/calendar/answer/13155911?co=GENIE.Platform%3DDesktop&hl=en
- https://support.apple.com/guide/icloud/receive-and-reply-to-invitations-mm6b1a8534/icloud
