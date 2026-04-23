---
title: "What to do if… a private folder was accidentally shared publicly and you need to undo access fast"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "folder shared publicly"
  - "accidentally shared folder"
  - "private folder link leaked"
  - "anyone with the link"
  - "undo public sharing fast"
  - "revoke shared link"
  - "remove link sharing"
  - "stop sharing cloud folder"
  - "remove public access"
  - "shared drive mistake"
  - "google drive folder public"
  - "onedrive folder public link"
  - "dropbox folder shared link"
  - "shared link forwarded"
  - "wrong permission setting"
  - "data exposed online"
  - "access audit after sharing"
  - "accidental public link"
  - "shared folder privacy slip"
  - "my private files are public"
  - "help i shared a folder by mistake"
  - "what do i do if i leaked a link"
  - "what do i do if my folder is public"
  - "what do i do if anyone can see my files"
  - "how to unshare google drive fast"
  - "how to delete onedrive share link"
  - "unshare dropbox folder now"
  - "broken sharing permissions"
  - "cloud storage leak"
  - "exposed sensitive files"
  - "leaked link prevention"
  - "visible folder online"
  - "incorrect folder privacy"
  - "sharing link security"
  - "unauthorized access folder"
last_reviewed: "2026-03-17"
---
# What to do if… a private folder was accidentally shared publicly and you need to undo access fast (USA)

## Short answer
Immediately change the folder's general access setting to **Restricted** and delete all existing **"Anyone with the link"** URLs within the sharing menu.

## Do not do these things
- Don’t test the "broken" link using your own browser where you are already logged in; this will show you the files even if the link is actually dead.
- Don’t rely on deleting the message or email that contained the link, as the link remains active on the cloud provider's servers.
- Don’t "downgrade" permissions to View-Only; this does not stop unauthorized people from seeing or copying the data.
- Don’t delete the folder entirely before checking if your organization requires it for a forensic audit or log preservation.
- Don’t assume a "private" link is safe if it was ever sent over an unencrypted channel.

## What to do now
1. **Switch General Access to Restricted immediately.**
   - Open the sharing settings for the specific folder.
   - Change the setting from **"Anyone with the link"** or **"Public"** to **"Restricted"** (Google) or **"Specific People"** (OneDrive/Dropbox).
2. **Delete every active shared link.**
   - Locate the **"Manage Access"** or **"Link Settings"** menu.
   - Click the **"X"** or **"Remove Link"** button for every link listed; most platforms will generate a new, different URL if you ever share it again, rendering the old one permanently useless.
3. **Audit the "People" list for unauthorized guests.**
   - Look for individual email addresses or groups (e.g., "Everyone at [Organization]") that should not have access.
   - Remove these users one by one by selecting **"Remove access"** or **"Stop sharing"** next to their names.
4. **Check for inherited permissions from parent folders.**
   - Navigate one level up to the parent folder and verify its sharing settings.
   - If the parent is set to "Public," the folder may continue to be exposed despite your changes; move the folder to a strictly private directory if necessary.
5. **Rotate sensitive credentials contained within the folder.**
   - Identify any passwords, API keys, or security tokens stored in the folder.
   - Change these credentials immediately, as they must be considered compromised the moment the link was public.
6. **Report the exposure to your IT or Security department.**
   - Provide the specific time the link was created, when it was revoked, and the type of data involved.
   - **If the data includes Social Security numbers, health records, or regulated financial data, notify your compliance officer immediately to determine if a CISA or FTC report is required under 2026 rules.**
7. **Verify the link is broken using an Incognito/Private window.**
   - Copy the old shared link and paste it into a browser window where you are not logged into any accounts.
   - Confirm you receive a "404 Not Found" or "Access Denied" message.

## What can wait
- You do not need to identify who exactly accessed the files in the first few minutes; containment is the priority.
- You do not need to rewrite your company's data policy today.
- You do not need to notify external clients or customers until your security team has reviewed the access logs.

## Important reassurance
Accidental link sharing is a common result of complex cloud interfaces. Cloud providers are designed to allow rapid revocation, and taking these steps immediately is the standard procedure for containing digital exposure. A "startled" reaction is normal, but focus on the mechanical steps of revoking the link to secure the data.

## Scope note
This guide covers immediate technical containment for cloud-based folder sharing. It does not cover legal notification requirements or digital forensics, which vary by state and data type.

## Important note
This information is for stabilization only and does not constitute legal or cybersecurity advice. Data breaches involving Personal Identifiable Information (PII) may trigger mandatory reporting requirements under state and federal laws, including FTC and CISA mandates updated for 2026. Consult with your organization's legal counsel or a privacy professional for compliance guidance.

## Additional Resources
- https://support.google.com/drive/answer/2494893
- https://support.microsoft.com/en-us/office/see-files-you-shared-in-onedrive-6b67b82b-9c5c-4348-ab10-fd5b0d8df76c
- https://help.dropbox.com/share/set-file-folder-permissions
- https://support.apple.com/guide/icloud/manage-sharing-for-files-and-folders-mm59dd13d0be/icloud
- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility
