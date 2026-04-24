---
title: "What to do if… messages start auto-archiving or skipping your inbox and you did not change any settings"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - emails skipping inbox
  - messages auto-archiving
  - email going to archive
  - inbox suddenly empty
  - missing new emails
  - gmail skip inbox
  - outlook rules changed
  - inbox rules you didnt make
  - unwanted email forwarding
  - email filters changed
  - mailbox settings changed
  - suspected email account hack
  - unknown device signed in
  - third party app access
  - mail client imap pop issue
  - shared mailbox delegate access
  - email suddenly sorting wrong
  - important emails not arriving
  - messages bypassing inbox
  - account security check
last_reviewed: "2026-03-08"
---

# What to do if… messages start auto-archiving or skipping your inbox and you did not change any settings (USA)

## Short answer
Assume compromise until proven otherwise: lock down the account (password + 2FA + sign-out), then remove any rules/filters/forwarding that are diverting your mail.

## Do not do these things
- Don’t request password resets for important accounts until you’ve secured the email account.
- Don’t click “security verification” links from random emails or pop-ups—go directly to your provider’s official site/app.
- Don’t delete large volumes of mail (Archive/Junk/Deleted) while stressed; you may remove clues about what changed.
- Don’t keep logging in from every device you own until you’ve checked for a rogue app/device that may be re-creating rules.

## What to do now
1. **Reduce the chance of immediate damage (keep it reversible).**  
   For the next few minutes, avoid any action that uses this email account as proof-of-identity (password resets, “verify it’s you” links) until you’ve secured it. If something is truly urgent, prefer a recovery method you already control (authenticator app, phone prompts, backup codes you previously saved) rather than changing contact details while panicked.

2. **Secure the account before you “fix the inbox.”**  
   - Change the email password to a strong, unique one.  
   - Turn on two-factor authentication (2FA).  
   - Sign out of other sessions/devices if your provider supports it.  
   This prevents an attacker from simply re-adding the same rule after you remove it.

3. **Check for rules/filters that “Skip Inbox,” auto-archive, delete, or move mail.**  
   Look for anything broad or unfamiliar, especially actions like **Archive**, **Move**, **Mark as read**, **Delete**, or **Skip Inbox**.  
   - **Gmail:** review filters (especially any with “Skip the Inbox (Archive it)”).  
   - **Outlook/Outlook.com:** review mail rules that move messages to Archive/Deleted/another folder.

4. **Check and disable forwarding/redirect you didn’t set.**  
   Remove unknown forwarding addresses. Forwarding is a common “silent persistence” technique after a takeover.

5. **Audit sign-ins, devices, and connected apps.**  
   - Remove unknown devices from your account/device list.  
   - Remove third-party app access you don’t recognize (email “cleaners,” add-ons, extensions, automations).  
   - If this is a work/school account, alert IT/security right away and follow their process.

6. **Verify whether mail is arriving but being re-filed.**  
   Search “All Mail/All Messages,” “Archive,” and “Other/Focused” tabs. Send yourself a harmless test email and see where it lands. This helps separate “delivery” problems from “inbox diversion.”

7. **Stop a rogue mail app/device from re-creating the problem.**  
   If you use multiple clients (phone app + Outlook + Apple Mail + tablet):  
   - Temporarily sign out of the account on the least-trusted device/app.  
   - Re-check whether the unwanted behavior returns after you delete the rule/filter.  
   Then run a malware scan and review browser extensions on devices you use to access email.

8. **If you suspect you were hacked, use one USA-specific support/reporting path (only if relevant).**  
   - For consumer recovery steps (including checking for forwarding rules you didn’t set): follow the FTC’s “recover your hacked email or social media account” guidance.  
   - If this involved scams, money loss, or impersonation: file a complaint with the FBI’s IC3.

## What can wait
- Reorganizing labels/folders and cleaning up old mail.
- Sending detailed explanations to contacts (do this after your account is secure).
- Investigating exactly how it happened—secure first, investigate second.

## Important reassurance
Mail suddenly “skipping the inbox” is usually caused by a rule/filter/forwarding change. It can happen accidentally, but it’s also a known pattern in account takeovers—so taking security-first steps is the right instinct.

## Scope note
These are immediate stabilisation steps only. After things stop diverting, do a broader password audit (especially if you reused passwords) and review recovery options so you can regain access if it happens again.

## Important note
This guide is general information, not legal, technical, or security consulting. If the affected account belongs to your employer or school, your fastest safe path is to involve their IT/security team, because they may need to check for wider compromise.

## Additional Resources
- https://consumer.ftc.gov/how-recover-your-hacked-email-or-social-media-account
- https://www.ic3.gov/
- https://support.google.com/mail/answer/6579?hl=en
- https://support.google.com/mail/answer/10957?hl=en
- https://support.microsoft.com/en-us/office/manage-email-messages-by-using-rules-in-outlook-c24f5dea-9465-4df4-ad17-a50704d66c59
- https://support.microsoft.com/en-us/account-billing/how-to-sign-out-of-your-microsoft-account-everywhere-58da4a74-a719-43a6-9dd0-74a7e613229f