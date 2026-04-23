---
title: "What to do if… a sharing link to a private file appears in activity logs and you did not create it"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "sharing link appeared"
  - "unknown sharing link"
  - "unauthorised sharing link"
  - "link created without me"
  - "file shared without permission"
  - "activity log shows sharing"
  - "drive activity log"
  - "onedrive activity log"
  - "dropbox shared link created"
  - "private file link leaked"
  - "unexpected public link"
  - "someone accessed my cloud files"
  - "account may be compromised"
  - "suspicious file sharing"
  - "external sharing turned on"
  - "anyone with link enabled"
  - "file permissions changed"
  - "unauthorised link sharing"
  - "cloud storage breach scare"
  - "what do i do if a sharing link appears"
  - "what do i do if i see unknown sharing"
  - "what do i do if my file is shared"
  - "what do i do if activity log is wrong"
  - "help i did not create this sharing link"
  - "help i see suspicious cloud activity"
  - "help i think my drive is hacked"
  - "help i found an unknown link in logs"
  - "my activity log shows unexpected sharing"
  - "my private file has a public link"
  - "my cloud account shows strange links"
  - "my dropbox has a link i didnt make"
  - "unexpected sharing log entry"
  - "ghost sharing link cloud"
  - "unrecognised file share event"
  - "mysterious sharing link in drive"
  - "activity log link creation error"
last_reviewed: "2026-03-17"
---
# What to do if… a sharing link to a private file appears in activity logs and you did not create it (UK)

## Short answer
Treat the event as a probable account compromise: **immediately revoke the link or stop sharing the file**, then secure your account by changing your password and enabling two-step verification (2SV).

## Do not do these things
- Don't visit the sharing link to test it as this may confirm your active session or location to an attacker.
- Don't delete the file or the entire account in a panic, as this destroys the audit logs needed to determine what was accessed.
- Don't ignore the log entry as a "glitch" without first securing your login credentials.
- Don't message or "reply" to any unknown email addresses found in the sharing permissions.
- Don't transfer the file to a different personal account until the source account is secure.

## What to do now
1. **Revoke the unauthorised access to the file immediately.**
   - Open the sharing or "Manage Access" settings for the specific file.
   - **Remove any "Anyone with the link" or "Public" settings** and change the access to "Restricted" or "Only people added".
   - Delete any specific links that you do not recognise or did not create.
2. **Identify any other unauthorised users with access.**
   - Check the list of people with direct access in the file permissions.
   - **Remove any email addresses or names you do not recognise** and check if any existing users have had their permission level elevated (e.g., from Viewer to Editor).
3. **Preserve evidence of the unauthorised activity.**
   - Take a screenshot of the activity log entry, ensuring the timestamp, IP address, and link type are visible.
   - **Record the specific file path and the name of the link creator** as shown in the log before the entry is rolled over or deleted.
4. **Change your account password and rotate security keys.**
   - Change your password to a strong, unique one (NCSC recommends using three random words).
   - **Ensure any other accounts using the same password are also updated** immediately to prevent credential stuffing.
5. **Enable or reset two-step verification (2SV).**
   - Turn on 2SV if it is disabled, or revoke existing "trusted devices" if it was already on.
   - **Generate new backup codes** and ensure the recovery phone number or email has not been changed.
6. **Force a sign-out from all active sessions.**
   - Go to your account security settings and select "Sign out of all other sessions" or "Manage devices".
   - **Remove any unrecognised devices** or apps that have persistent access to your cloud storage.
7. **Check for hidden "persistence" rules in your email.**
   - Attackers often set up email forwarding rules to capture password reset emails.
   - **Review your mailbox settings for any rules that forward mail** to an external or unknown address.
8. **Report the incident to the appropriate UK authority.**
   - If you are in England, Wales, or Northern Ireland, report the cyber incident to **Report Fraud** (which replaced Action Fraud in 2026) via reportfraud.police.uk or 0300 123 2040.
   - If you are in Scotland, report the incident by calling **101**.
   - If you are in immediate danger or a crime is currently in progress, call **999**.

## What can wait
- You do not need to perform a factory reset of your hardware immediately unless you suspect a local malware infection.
- You do not need to contact the Information Commissioner's Office (ICO) as an individual unless you are a "data controller" for a business.
- You don't need to close the account entirely; focus on locking it down and revoking access first.
- You can wait to reorganise your file structure until after you have confirmed the account is secure.

## Important reassurance
Seeing an unexpected link in an activity log is a common early warning sign that allows you to stop a data breach before the file is widely distributed. In many cases, revoking the link and changing your password is sufficient to contain the risk and prevent further access.

## Scope note
This guide provides first-step stabilization for individuals who discover unrecognised file-sharing activity in cloud storage logs. It does not cover long-term digital forensics or the specific legal reporting duties required for limited companies or large organisations under the UK GDPR or Data (Use and Access) Act 2025.

## Important note
This information is for general guidance and does not constitute professional IT security or legal advice. If this occurred on a work or school account, you must follow your organisation's internal security policy and notify your IT administrator or Data Protection Officer immediately.

## Additional Resources
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://support.google.com/accounts/answer/140921?hl=en
- https://support.google.com/accounts/answer/6294825?hl=en
- https://support.microsoft.com/en-gb/office/manage-sharing-and-permissions-in-onedrive-and-sharepoint-0a36470f-d7fe-40a0-bd74-0ac6c1e13323
- https://support.microsoft.com/en-gb/office/see-who-a-file-is-shared-with-in-onedrive-or-sharepoint-51bb79a9-b696-410d-a7a7-c320e541272d
