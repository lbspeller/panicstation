---
title: "What to do if… a private folder was accidentally shared publicly and you need to undo access fast"
jurisdiction: "USA"
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

# What to do if… a private folder was accidentally shared publicly and you need to undo access fast (USA)
## Short answer
Immediately turn off public access at the source: switch the folder back to **Restricted / Specific people** and **remove (disable) any “anyone with the link” link**.

## Do not do these things
- Don’t rely on deleting the message that contained the link—if a public link existed, it may already be opened or forwarded.
- Don’t “downgrade to view-only” and assume you’re done; break the link and return to restricted access.
- Don’t assume “view only” prevents copying—anything viewable can often be captured or duplicated.
- Don’t make public statements (or broad internal announcements) about what was exposed before you’ve contained access and routed it through your incident process.

## What to do now
1. **Lock it down in the folder’s sharing settings.**
   - Set access to **Restricted / Only people you add** and remove **“Anyone with the link”** (or any public access option).
2. **Break the link: remove/disable every shared link.**
   - Look specifically for controls like **Remove Link**, **Disable link**, or **Delete link** (there may be multiple links, e.g., view vs edit).
   - If possible, confirm the old link no longer opens the folder in a private/incognito window.
3. **Remove unexpected users and overly broad access.**
   - Remove unknown people, external guests, and groups like “Everyone” or large distribution groups you didn’t intend.
4. **Check the parent folder/shared drive for inherited permissions.**
   - Open the **parent folder’s** sharing settings and confirm it isn’t still set to a broad option like **“Anyone with the link.”**
   - After containment, move the folder into a clearly private location if inheritance is what keeps re-opening access.
5. **If this is work data, activate your incident response path now.**
   - Notify IT/security/privacy (or your manager if that’s the required route) with: what happened, what data type, when discovered, and exactly what you revoked/disabled.
   - Ask them to preserve logs and help verify whether access occurred.
6. **Assume secrets may be compromised and rotate anything sensitive.**
   - If the folder contained passwords, API keys, private certificates, backup codes, exports, or “secret” config files: revoke and rotate them now.
7. **Create a quick incident record.**
   - Write down times, the sharing state you found, link type (“anyone with the link”), and what you changed. Screenshot the final “access” view after the fix.

## What can wait
- You don’t need to determine fault or write a postmortem right now—containment first.
- You don’t need to notify every possible recipient immediately; draft comms once you know what was exposed and for how long.
- You don’t need to rebuild your folder structure today—do that after the urgent risk is reduced.

## Important reassurance
Accidental public sharing is common because cloud sharing controls are easy to mis-click. Fast containment is the most meaningful step, and you’re doing the right thing by focusing on access first.

## Scope note
This is first-step containment. If personal information may have been exposed, next steps (including any notifications) depend on your state, industry, and the type of data, and are usually handled through your organisation’s security/privacy/compliance process.

## Important note
This guide is general information, not legal advice. If regulated or personal data may have been exposed, follow your organisation’s incident process and confirm any required notifications with qualified counsel or compliance staff.

## Additional Resources
- https://support.google.com/drive/answer/2494893
- https://support.microsoft.com/en-us/office/manage-sharing-and-permissions-in-onedrive-and-sharepoint-0a36470f-d7fe-40a0-bd74-0ac6c1e13323
- https://help.dropbox.com/share/unshare-folder
- https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business
- https://www.cisa.gov/cyber-guidance-small-businesses
- https://csrc.nist.gov/pubs/sp/800/61/r3/final