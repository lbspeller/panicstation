---
title: "What to do if… a sharing link to a private file appears in activity logs and you did not create it"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "sharing link appeared"
  - "unknown sharing link"
  - "unauthorized share link"
  - "link created without me"
  - "file shared without permission"
  - "activity log shows sharing"
  - "unrecognized file sharing"
  - "unauthorized link sharing"
  - "unexpected public link"
  - "what do i do if a sharing link appeared"
  - "what do i do if someone shared my file"
  - "what do i do if my activity log is suspicious"
  - "what do i do if drive shows unknown link"
  - "help i did not create this sharing link"
  - "help i see a suspicious link in my logs"
  - "help my private file is public"
  - "help my account has unauthorized links"
  - "my file was shared without me knowing"
  - "my sharing permissions changed"
  - "my activity log shows unauthorized access"
  - "my cloud storage was breached"
  - "smell of digital intrusion"
  - "visible unauthorized link"
  - "suspicious activity alert"
  - "unrecognized ip address in logs"
  - "unauthorized link creation"
  - "accidental public sharing"
  - "missing file permissions"
  - "incorrect sharing settings"
  - "drive log discrepancy"
  - "cloud file leak"
  - "unauthorized document access"
last_reviewed: "2026-03-17"
---
# What to do if… a sharing link to a private file appears in activity logs and you did not create it (USA)

## Short answer
Immediately revoke the link or stop sharing on the specific file, then secure your primary account using passkeys and a global session sign-out. Assume the account or an integrated third-party application has been compromised until proven otherwise.

## Do not do these things
- Do not click the suspicious link yourself to see what it contains, as this may trigger tracking pixels or further exploit your browser.
- Do not delete the file or the entire account in a state of panic; doing so destroys the audit logs required to determine the extent of the breach.
- Do not ignore the entry even if the link appears to have "0 views," as the link may have been indexed by search engines or scraped by automated tools.
- Do not follow contact information provided in any "security alert" email that accompanied the link; navigate directly to your cloud provider's official security portal.

## What to do now
1. **Revoke the unauthorized sharing link and restrict access immediately.** 
   - Open the file's "Share" or "Manage Access" menu.
   - **Delete any links set to "Public," "Anyone with the link," or "Anyone in the organization."**
   - Explicitly remove any unrecognized email addresses from the list of people with direct access.
2. **Preserve the technical metadata of the link for investigation.** 
   - **Copy the link URL (without clicking it) and take a screenshot of the activity log entry.**
   - Note the exact timestamp, the IP address (if shown), and the device name associated with the link creation.
   - Check the "Trash" or "Bin" to see if any other files or logs were modified or deleted by the same entity.
3. **Audit and revoke third-party application permissions (OAuth).** 
   - **Navigate to your account security settings and review "Connected Apps" or "Apps with access to your account."**
   - Look for scripts, utilities, or "productivity tools" you do not recognize or no longer use.
   - Remove access for any app that has permission to "See, edit, create, and delete all your files."
4. **Secure the primary account using phishing-resistant methods.** 
   - **Set up a Passkey or a hardware security key (e.g., YubiKey) as your primary authentication method.**
   - If you must use a password, update it to a unique 16-character passphrase and ensure it is not reused elsewhere.
   - Use the "Sign out of all sessions" or "Revoke all tokens" button to force every device to re-authenticate.
5. **Review email rules and forwarding settings for persistence.** 
   - **Check your inbox settings for any "Filter" or "Forwarding" rules you did not create.**
   - Attackers often set rules to automatically delete security alerts or forward password reset emails to their own accounts.
6. **Notify IT security if this involves a work or school account.** 
   - **Send your captured screenshots and metadata to your administrator with the subject: "Unauthorized sharing link detected in activity logs."**
   - Ask for a "Tenant-wide" audit to see if the same IP address or app has created links on other users' files.
7. **Address potential exposure of sensitive personal data.** 
   - **Identify exactly what data was in the file (e.g., SSNs, bank statements, or ID scans).**
   - If Social Security numbers were included, go to **IdentityTheft.gov** to initiate a recovery plan and place a security freeze on your credit reports with Equifax, Experian, and TransUnion.
   - Report the unauthorized access as a cyber-enabled crime at **ic3.gov** if you suspect a targeted attack or financial motive.

## What can wait
- You do not need to replace your hardware or wipe your devices immediately unless you see signs of active malware (e.g., cursor moving on its own, unrecognized software).
- You do not need to notify all contacts in your address book until you have confirmed whether the breach was limited to a single file or a full account takeover.
- You can postpone deep-cleaning your entire cloud storage folder until after the root cause (account vs. app compromise) is identified.

## Important reassurance
Activity logs are a security feature, not a failure; seeing the entry means the system successfully tracked the action, allowing you to stop it. Most unauthorized links are revoked within seconds of discovery, which effectively terminates external access before data can be widely distributed.

## Scope note
This guide is for first-step stabilization of a cloud storage account (Google Drive, OneDrive, Dropbox, etc.) after discovering unauthorized sharing activity. It does not cover long-term forensic analysis or legal recovery of stolen data.

## Important note
This information is for educational purposes and does not constitute legal or professional cybersecurity advice. Digital forensic requirements vary by jurisdiction and organizational policy; always prioritize your employer's official incident response protocols if using a managed enterprise account.

## Additional Resources
- https://support.google.com/accounts/answer/140921?hl=en
- https://support.microsoft.com/en-us/account-billing/what-happens-if-there-s-an-unusual-sign-in-to-your-account-eba43e04-d348-b914-1e95-fb5052d3d8f0
- https://consumer.ftc.gov/node/77537
- https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers
- https://www.usa.gov/where-report-scams
