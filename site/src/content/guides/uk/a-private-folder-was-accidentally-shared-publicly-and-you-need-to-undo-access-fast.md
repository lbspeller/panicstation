---
title: "What to do if… a private folder was accidentally shared publicly and you need to undo access fast"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "what do i do if a private folder was shared publicly"
  - "help i accidentally shared a private folder"
  - "my private folder link was leaked online"
  - "what do i do if i shared the wrong link"
  - "undo public sharing fast"
  - "revoke shared link uk"
  - "remove public access to folder"
  - "stop sharing cloud folder immediately"
  - "anyone with the link access removal"
  - "accidentally shared folder onedrive"
  - "accidentally shared folder google drive"
  - "accidentally shared folder dropbox"
  - "private folder link leaked"
  - "shared folder privacy mistake"
  - "undo sharing permissions"
  - "stop link sharing fast"
  - "revoke access to leaked link"
  - "shared drive permission error"
  - "unshare folder uk"
  - "leaked file link help"
  - "data exposure cloud storage"
  - "restricted access settings"
  - "folder shared with everyone"
  - "public link removal"
  - "shared link forwarded help"
  - "private data exposed"
  - "security incident folder share"
  - "broken shared link"
  - "cloud storage privacy breach"
  - "undo access to shared files"
last_reviewed: "2026-03-17"
---
# What to do if… a private folder was accidentally shared publicly and you need to undo access fast (UK)

## Short answer
Isolate the folder immediately by changing the "General Access" or "Link Settings" to **Restricted** or **Only people invited**, then delete all existing "Anyone with the link" URLs.

## Do not do these things
- Do not assume that moving or renaming the folder will break an active "anyone with the link" share; the link usually follows the folder ID.
- Do not post "please ignore the previous link" in the same public thread, as this alerts more people to the existence of the leaked data.
- Do not delete the folder entirely if it is a workplace incident, as IT teams may need the logs to see who accessed the files.
- Do not assume "view-only" prevents data loss; users can still take screenshots or photos of the screen even if downloads are disabled.

## What to do now
1. **Change the folder sharing setting to Restricted or Private.** 
   - On Google Drive, change "General access" to **Restricted**.
   - On OneDrive or SharePoint, change the link type to **People you choose** and remove "Anyone with the link".
   - On Dropbox, change the folder setting to **Only people invited**.
2. **Delete every existing shared link associated with that folder.**
   - Navigate to "Manage Access" or "Share Settings" and look for a list of active links.
   - Click **Remove link**, **Delete link**, or the **X** icon next to any link that allows broad access.
3. **Audit the list of individuals who have direct access.**
   - Review the "People" or "Shared with" list and remove any email addresses or groups that were not intended to see the content.
4. **Check the parent folder for inherited permissions.**
   - Verify if the folder is inside a "Shared Drive" or a parent folder that is set to public, as sub-folders often inherit broad permissions automatically.
5. **Notify your IT or Security department if this occurred in a workplace.**
   - Report the specific folder name, the time the link was created, and the time it was revoked.
   - Mention if the folder contained personal data (names, addresses, IDs) or financial secrets.
6. **Rotate any passwords or API keys that were stored in the folder.**
   - If the folder contained configuration files, password spreadsheets, or security tokens, assume they have been seen and change them immediately.
7. **Verify the link is broken using an Incognito or Private browser window.**
   - Paste the leaked link into a private browser window where you are not logged in; if you see a login screen or an "Access Denied" message, the link is successfully revoked.

## What can wait
- You do not need to identify every person who clicked the link in the first few minutes (focus on revocation first).
- You do not need to rewrite your company's sharing policy today.
- You do not need to notify the ICO yourself; if you are an employee, this is the responsibility of your Data Protection Officer (DPO).

## Important reassurance
Accidental link sharing is one of the most common digital errors in UK workplaces. Cloud platforms are designed to allow fast revocation. Once you have set the folder to "Restricted" and deleted the link, the "window" is shut for any new visitors.

## Scope note
This guide covers immediate technical stabilization and access revocation. It does not cover the legal assessment of a data breach or the forensic recovery of files that may have already been downloaded.

## Important note
This information is for general guidance and is not legal advice. Under UK GDPR, if personal data was exposed and poses a risk to individuals, the organisation must notify the Information Commissioner’s Office (ICO) without undue delay and within 72 hours of becoming aware of the breach. The 72-hour clock starts when the breach is first discovered, not when the investigation is finished.

## Additional Resources
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/
- https://ico.org.uk/for-organisations/advice-for-small-organisations/personal-data-breaches/72-hours-how-to-respond-to-a-personal-data-breach/
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/
- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/disclosing-documents-to-the-public-securely/
- https://www.ncsc.gov.uk/collection/cloud/using-cloud-services-securely/using-saas-securely
