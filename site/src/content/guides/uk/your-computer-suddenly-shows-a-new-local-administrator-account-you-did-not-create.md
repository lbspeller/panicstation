---
title: "What to do if… your computer suddenly shows a new local administrator account you did not create"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "contacts disappeared"
  - "calendar events missing"
  - "contacts merged into one"
  - "duplicate contacts suddenly"
  - "calendar entries merged"
  - "phone contacts wiped"
  - "synced contacts missing"
  - "icloud contacts missing"
  - "google contacts missing"
  - "outlook contacts missing"
  - "calendar invitees changed"
  - "shared calendar changed"
  - "account sync glitch"
  - "data sync conflict"
  - "contacts overwritten"
  - "calendar disappeared after update"
  - "contacts disappeared after new phone"
  - "wrong account signed in"
  - "multiple accounts mixing"
  - "address book missing"
  - "what do i do if my contacts disappeared"
  - "what do i do if my calendar is gone"
  - "what do i do if contacts are merged"
  - "what do i do if outlook calendar is empty"
  - "help i lost my phone contacts"
  - "help i lost my calendar events"
  - "help i have duplicate contacts"
  - "help my phone wiped my address book"
  - "my contacts merged into one person"
  - "my calendar entries are duplicated"
  - "smell of burning phone"
  - "visible sync error icon"
  - "contacts misspellings"
  - "calender entries missing"
  - "lost phone numbers UK"
  - "missing meeting notes"
  - "vanished schedule"
  - "syncing paused on device"
last_reviewed: "2026-03-17"
---
# What to do if… your computer suddenly shows a new local administrator account you did not create (UK)

## Short answer
Pause device syncing immediately and use your account provider’s web-based "Data Recovery" or "Undo Changes" tools before attempting any manual clean-up.

## Do not do these things
- Don't start bulk-deleting "duplicates" or accepting "merge all" prompts while the data is in an unstable state.
- Don't keep toggling sync settings on and off repeatedly, as this can force-sync a corrupted or empty database over a healthy one.
- Don't uninstall apps or sign out of your accounts as a first response, which may clear local "undo" caches.
- Don't assume the data is permanently lost without checking the web-browser version of the service.
- Don't share verification codes or click "Allow" on new device sign-in prompts if they appear during this incident.

## What to do now
1. **Isolate the affected device to prevent the sync error from spreading.**  
   - Turn on Airplane Mode or manually disable "Contacts" and "Calendar" sync in your device settings.
2. **Document the current state using an unaffected secondary device or paper.**  
   - Note which accounts are currently signed in (e.g., @icloud.com, @gmail.com, @outlook.com).
   - List any specific, high-value contacts or events you know are missing to use as markers for recovery.
3. **Verify the data status via a desktop web browser (not the mobile app).**  
   - Sign in to the official web portal for your provider (iCloud.com, contacts.google.com, or Outlook.com).
   - If the data looks correct on the web, the problem is a local device display or sync issue; do not modify the web version.
4. **Utilise the native "Restore" or "Undo" functions for your specific service.**  
   - **iCloud:** On iCloud.com, click the "Data Recovery" icon (usually in the apps grid or footer) and select "Restore Contacts" or "Restore Calendars" to revert to an archived version from the last 30 days.
   - **Google Contacts:** Go to the web version, click the "Settings" (gear) icon, and select "Undo changes" to roll back your entire list to a state from 10 minutes to 30 days ago.
   - **Google Calendar:** In the web version, click "Settings" then "Bin" to restore individual deleted events within a 30-day window.
   - **Outlook / Microsoft 365:** In the "People" (Contacts) or "Calendar" view on the web, check the "Deleted Items" folder; if the items are not there, click "Recover items deleted from this folder" at the top of the list.
5. **Check for "Linked Devices" or unauthorized access if data was merged maliciously.**  
   - Review the "Security" or "Devices" section of your account to ensure no unrecognized phones or computers are synced.
   - If you find an unknown device, remove it and follow NCSC guidance to secure your account immediately by changing your password and enabling 2-step verification.
6. **Re-sync the device only after the web version is confirmed as correct.**  
   - Once the web version is restored, turn sync back on for that device.
   - If prompted to "Merge" or "Cancel", choose "Merge" to ensure the restored web data integrates with your device.

## What can wait
- You do not need to manually re-type missing contact details or schedule items right now.
- You do not need to purchase "data recovery" software; native tools are usually more effective for cloud sync issues.
- You do not need to contact your mobile network provider, as they generally do not manage cloud-based contact or calendar databases.

## Important reassurance
Sudden digital disappearance is often a sync "handshake" error rather than a permanent deletion. Most major providers maintain automated daily archives of your contact lists and calendar states specifically to resolve these types of glitches.

## Scope note
This guide covers first-step stabilization for cloud-synced data. It does not cover recovery from physical hardware failure or data stored strictly on a SIM card.

## Important note
Data recovery windows are strictly time-limited by providers (typically 30 days). If this data belongs to a corporate or educational account, your IT administrator may have additional backup tools (such as "Point-in-Time" restoration) that are not accessible to individual users. If you suspect your data loss is part of a wider security breach, report it to Action Fraud or the NCSC.

## Additional Resources
- https://support.microsoft.com/en-us/windows/manage-user-accounts-in-windows-104dc19f-6430-4b49-6a2b-e4dbd1dcdf32
- https://support.microsoft.com/en-us/topic/how-to-determine-your-user-account-type-in-windows-18193b22-d93c-a5ec-e7dd-c73f915f52a7
- https://support.apple.com/en-gb/guide/mac-help/mchlp1557/mac
- https://support.microsoft.com/en-us/windows/virus-and-threat-protection-in-the-windows-security-app-1362f4cd-d71a-b52a-0b66-c2820032b65e
- https://www.ncsc.gov.uk/guidance/hacked-device-action-to-take
