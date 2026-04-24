---
title: "What to do if… a private folder was accidentally shared publicly and you need to undo access fast"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - folder shared publicly
  - accidentally shared folder
  - private folder link leaked
  - anyone with the link
  - undo public sharing fast
  - revoke shared link
  - remove link sharing
  - stop sharing cloud folder
  - remove public access
  - shared drive mistake
  - google drive folder public
  - onedrive folder public link
  - dropbox folder shared link
  - shared link forwarded
  - wrong permission setting
  - data exposed online
  - access audit after sharing
  - accidental public link
  - shared folder privacy slip
last_reviewed: "2026-03-09"
---

# What to do if… a private folder was accidentally shared publicly and you need to undo access fast (UK)
## Short answer
Remove public access at the source right now: set the folder to **Restricted / Only people added** and **remove (disable) any “anyone with the link” link**.

## Do not do these things
- Don’t assume renaming or moving the folder “kills” old access—change sharing and remove the link explicitly.
- Don’t post “please ignore” into the same thread where the link was shared; that can spread it further.
- Don’t assume “view-only” is safe. If someone could view it, they could still copy, download (if allowed), or screenshot.
- Don’t delete emails/chats/logs about what happened if this is a workplace or security incident.

## What to do now
1. **Open the folder’s sharing settings and switch off public access.**
   - Change “General access / Who has access” to **Restricted** (or **Only people you add**).
   - Remove options like **“Anyone with the link”** or **“Anyone in the organisation”** if that’s broader than intended.
2. **Break the link: remove/disable every share link for that folder.**
   - Look for controls like **Remove link**, **Disable link**, or **Delete link** (there may be more than one link type, e.g., view vs edit).
   - If you can, confirm the old link no longer opens the folder in a private/incognito window.
3. **Remove unexpected people, guests, and broad groups.**
   - In “Manage access,” remove anyone you don’t recognise and any large groups you didn’t mean to add.
4. **Check whether access is being inherited from a parent folder or shared drive.**
   - Open the **parent folder’s** sharing settings and confirm it isn’t still set to **“Anyone with the link”** or another broad setting.
   - After you’ve contained access, move the folder into a clearly private location if inheritance is the reason it re-opens.
5. **If this is work-related, treat it as a security incident immediately.**
   - Contact your IT/helpdesk or security team with: what was shared, roughly when, when you noticed, what you’ve revoked, and whether personal/confidential data was inside.
   - Ask them to preserve logs and help confirm whether access occurred.
6. **If any secrets were inside, assume they may be compromised and rotate them now.**
   - Password lists, API keys/tokens, certificates, private config files, database exports: revoke/rotate first, then investigate.
7. **Make a quick record while it’s fresh.**
   - Note the time you discovered it, what setting you saw, what link type it was, and what you changed. Screenshot the final “Manage access” view after fixing.

## What can wait
- You do not need to figure out who viewed it right now (lock down access first).
- You do not need to send a detailed explanation immediately—draft comms after you’ve confirmed what was exposed.
- You do not need to reorganise your whole storage today; do that later, after containment.

## Important reassurance
This is a common, high-pressure mistake because sharing controls are easy to mis-click. Fast containment is the most meaningful step, and you’ve done the right thing by focusing on access first.

## Scope note
These are first steps to remove access fast and reduce harm. If the folder contained personal data or regulated/confidential information, your organisation may need a formal incident process and specialist advice.

## Important note
This guide is general information, not legal or professional advice. If personal data may have been exposed, follow your organisation’s breach process; if it may be a notifiable personal data breach, your organisation should assess promptly and may need to report to the ICO within 72 hours of becoming aware.

## Additional Resources
- https://support.google.com/drive/answer/2494893?hl=en-GB
- https://support.microsoft.com/en-gb/office/share-files-and-folders-in-microsoft-onedrive-9fcc2f7d-de0c-4cec-93b0-a82024800c07
- https://help.dropbox.com/share/unshare-folder
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/