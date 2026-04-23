---
title: "What to do if… a messaging app says it cannot restore your chat backup and messages are missing"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "chat backup cannot restore"
  - "messages missing after restore"
  - "restore failed messaging app"
  - "whatsapp restore failed"
  - "signal backup restore failed"
  - "telegram chats missing"
  - "messenger chat history missing"
  - "switched phones chats missing"
  - "new phone missing messages"
  - "cloud backup not found"
  - "google drive backup missing"
  - "icloud backup missing messages"
  - "end-to-end encrypted backup"
  - "wrong account used restore"
  - "backup overwritten risk"
  - "restore stuck or looping"
  - "backup passphrase lost"
  - "what do i do if my chats are gone"
  - "what do i do if whatsapp says no backup found"
  - "what do i do if signal cannot restore"
  - "what do i do if icloud backup is missing"
  - "help i lost my whatsapp messages"
  - "help i cannot restore my chat history"
  - "help my backup is missing"
  - "help my messages disappeared after update"
  - "smell of burning phone battery"
  - "visible error message on screen"
  - "app stuck on checking for backups"
  - "backup found but restore failed"
  - "missing chat folders in file manager"
  - "wrong phone number error"
  - "icloud storage full alert"
  - "google account mismatch"
last_reviewed: "2026-03-17"
---
# What to do if… a messaging app says it cannot restore your chat backup and messages are missing (UK)

## Short answer
Stop attempting repeated reinstalls to avoid overwriting existing cloud data. Verify that the phone number and cloud account (Apple ID or Google Account) exactly match those used for the original backup before attempting a final manual restoration.

## Do not do these things
- Do not uninstall and reinstall the app more than once if it fails; this can trigger a new, empty backup that overwrites the previous one.
- Do not delete "old" backup files from Google Drive or iCloud to make space.
- Do not clear the app's "Cache" or "Data" in phone settings until a local copy of the database is secured.
- Do not pay for third-party "data recovery" software that requires your private encryption keys or remote access to your device.
- Do not factory reset the old device if it still contains the messages.

## What to do now
1. **Isolate the old device to prevent data syncing.**
   - **Switch the old phone to Airplane Mode immediately.**
   - **Keep the device powered on but disconnected from the internet** to prevent the app from "refreshing" and potentially deleting local data to match an empty cloud state.
   - **Export critical chats manually** using the app's "Export Chat" or "Email Chat" function if available and the app is still accessible.

2. **Verify the "2.05x" storage requirement for iCloud or local memory.**
   - **Ensure the new device has free space** equal to at least 2.05 times the size of the backup file.
   - **Check iCloud storage levels** (Settings > [Name] > iCloud > Manage Account Storage); if storage is full, the backup may be visible but "unreadable" by the app.

3. **Confirm the backup exists in the cloud management console.**
   - **For Android:** Open the Google Drive app > Menu > Backups; verify a file named "WhatsApp [Number] Backup" or similar is listed.
   - **For iOS:** Go to Settings > [Name] > iCloud > iCloud Backup; check the "Last Successful Backup" timestamp.
   - **For Signal:** If using "Signal Secure Backups" (2026 feature), verify the 64-character recovery key is available; without this key, cloud data is permanently inaccessible.

4. **Update Google Play Services and System Software.**
   - **Open the Google Play Store** and ensure "Google Play Services" is updated to the latest version, as this handles the "handshake" between the app and your cloud storage.
   - **Check for iOS or Android system updates** and install them before retrying the restore process.

5. **Attempt a "Local Database" transfer for Android-to-Android moves.**
   - **Locate the database file** on the old phone at `Internal Storage > Android > media > com.whatsapp > WhatsApp > Databases`.
   - **Copy the most recent `.db.crypt` file** to the same path on the new phone before opening the app for the first time.
   - **Open the app and verify the number;** the app should detect the "Local Backup" and prioritize it over the cloud.

6. **Check for "Direct Transfer" options in the app settings.**
   - **Use the "Transfer Chats" or "Move to iOS/Android" feature** if both phones are physically present; this bypasses cloud-related restoration errors.

7. **Submit a formal technical support request with a "Data Preservation" query.**
   - **Contact the app's official help center** and provide the specific error code (e.g., "Error 101" or "No backup found").
   - **Ask specifically:** "Is there a legacy backup stored on your servers that has not yet been overwritten by the recent empty sync?"

8. **Execute a Subject Access Request (SAR) under the Data (Use and Access) Act 2025.**
   - **Submit a formal request to the company** for a copy of all personal data held.
   - **Note that under 2026 UK law,** companies can "stop the clock" on the 30-day response limit if they require clarification, and they are only required to conduct "reasonable and proportionate" searches.
   - **Be aware** that for end-to-end encrypted services, the company likely holds metadata (who you talked to) but not the content of the messages.

## What can wait
- You do not need to decide today if the data is permanently lost; cloud backups often remain visible for 30–60 days before being purged.
- You do not need to purchase a new device or upgrade your data plan immediately.
- You do not need to notify all contacts about the missing history until troubleshooting is exhausted.

## Important reassurance
Restoration failures are frequently caused by simple authentication "handshake" errors or insufficient local storage rather than the total destruction of the backup. By stopping active "fixes" now, you prevent the accidental overwriting of the data while you verify your account credentials.

## Scope note
This guide provides first-step stabilization for digital data loss. It does not cover professional forensic recovery or the retrieval of messages that were never backed up.

## Important note
This information is for general guidance and does not constitute technical or legal advice. Restoration processes vary by application and operating system version. Under the UK Data (Use and Access) Act 2025, your rights to access data may be subject to "reasonable and proportionate" search limits by the provider. Encrypted messaging services generally cannot retrieve message content for you if the local or cloud backup file is corrupted or the encryption key is lost.

## Additional Resources
- https://support.apple.com/en-gb/102325
- https://support.apple.com/en-gb/102385
- https://support.google.com/android/answer/2819582?hl=en-GB
- https://support.google.com/android/answer/13761358?hl=en-GB
- https://www.citizensadvice.org.uk/consumer/phone-internet-downloads-or-tv/problem-with-an-app-software-or-download/
