---
title: "What to do if… your email app suddenly stops syncing and shows repeated connection errors"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - email not syncing
  - mail app connection error
  - inbox stopped updating
  - email stuck loading
  - repeated sign-in prompts
  - cannot send or receive email
  - mail server unreachable
  - outlook app not syncing
  - gmail app not syncing
  - iphone mail not receiving emails
  - android mail sync problem
  - imap sync error
  - exchange account connection error
  - email works on web not phone
  - new emails not arriving
  - email app keeps disconnecting
  - sudden email outage
  - mail sync keeps failing
  - email account authentication error
last_reviewed: "2026-03-08"
---

# What to do if… your email app suddenly stops syncing and shows repeated connection errors (UK)
## Short answer
Check whether it’s a provider outage or a device/account issue by testing webmail (or another device) and the provider’s official status page. Then refresh sign-in safely before you remove or re-add anything.

## Do not do these things
- Don’t keep re-typing your password over and over if the app keeps rejecting it — you can trigger security locks or make the problem harder to undo.
- Don’t delete the whole app (or wipe your phone) as a first move — you can lose settings, offline mail, or clues about what changed.
- Don’t click “verify your account” links inside unexpected emails or pop-ups — phishing sometimes imitates “connection errors”.
- Don’t change lots of settings at once — change one thing, then test, so you can reverse it.
- Don’t assume you’ve been “hacked” just because syncing stopped — outages and expired sign-ins are common.

## What to do now
1. **Check if the email service is down (2 minutes).**
   - iCloud Mail: check Apple’s System Status.
   - Gmail/Google Workspace: check the Google Workspace Status Dashboard.
   - Outlook.com/Microsoft 365: check Microsoft’s public status page; if it’s a work/school account, your organisation may only show details in the Microsoft 365 admin “Service health” area (so your IT/help desk may need to confirm).
   - If there’s an outage: stop troubleshooting and **use webmail** (browser) if possible until it resolves.

2. **Confirm whether it’s your device/app or your account.**
   - Try signing in via **webmail** (browser) or checking the same mailbox on **another device**.
   - If webmail works but the app doesn’t: it’s likely an app/device setting, cached auth token, or network/VPN issue.
   - If webmail also fails: it’s likely password, account lock, or provider-side issue.

3. **Do a quick “connection basics” reset (without deleting anything yet).**
   - Toggle **Airplane Mode** on/off, then try again.
   - Switch networks (Wi-Fi ↔ mobile data).
   - Turn off **VPN** (or work filtering) temporarily and test again.
   - Restart the device.

4. **Check time/date and background restrictions (common silent causes).**
   - Ensure **automatic date & time** is enabled.
   - On iPhone/iPad: check Mail account **Fetch/Push** settings and that the account is enabled.
   - On Android: ensure **auto-sync** is enabled for accounts, and the email app isn’t restricted by battery/data saver.

5. **Make sure you can sign in safely, then refresh the authentication.**
   - If you use 2-step verification, you may need to complete a fresh sign-in prompt in the app.
   - If the account is work/school, you might need to re-approve device access or meet a new security requirement.
   - If you see unexpected “new sign-in” alerts or suspect a fake sign-in prompt: **change your password from the provider’s official website/app** and review account security activity.

6. **Use the app’s “reset/re-sync” option if it has one (least disruptive first).**
   - Some apps include options like “refresh”, “re-sync”, “reset account”, or “clear sync state”. If you see one, use it and then test.

7. **If still broken: remove and re-add only the affected account (not the whole app).**
   - Before removing: note any special setup (IMAP/Exchange server name, security settings) if you had to enter them manually.
   - Remove the account from the mail app/device, restart the device, then add it back using the official sign-in flow.

8. **If it’s a work account, stop and involve IT if any of these are true:**
   - You’re asked to install a “profile”, “device management”, or new security app you weren’t expecting.
   - You see repeated credential prompts but webmail works.
   - This started right after a workplace security/policy change.

9. **If you think this started after a suspicious message or login prompt: treat it as potential phishing.**
   - Don’t interact with the suspicious message further.
   - Forward suspicious emails to the UK Suspicious Email Reporting Service: **report@phishing.gov.uk**, then delete them.
   - If you entered credentials anywhere unusual, change passwords immediately and review sign-in activity.

## What can wait
- You do **not** need to decide today whether to switch email apps or migrate providers.
- You don’t need to “clean up” old emails or reorganise folders to fix syncing.
- You don’t need to deep-diagnose server settings unless you have a manual IMAP/SMTP setup and the basic steps above fail.

## Important reassurance
This is a common failure mode and is often caused by an outage, an expired sign-in token, a VPN/network change, or a background/battery setting — not something you “broke”. Small, reversible steps first are the safest way to get mail back.

## Scope note
This guide covers first steps to restore syncing and avoid irreversible mistakes. If this is a managed work/school account or you suspect account compromise, follow your organisation’s security process and get specialist help.

## Important note
This is general information, not professional IT or security advice. If you’re dealing with a work-managed device/account, follow your organisation’s policies. If you suspect fraud or account takeover, prioritise account security and reporting over troubleshooting.

## Additional Resources
- https://www.apple.com/uk/support/systemstatus/
- https://support.apple.com/en-gb/102562
- https://www.google.com/appsstatus/dashboard/
- https://status.cloud.microsoft/m365/
- https://learn.microsoft.com/en-us/microsoft-365/enterprise/view-service-health
- https://www.gov.uk/report-suspicious-emails-websites-phishing
- https://www.ncsc.gov.uk/collection/phishing-scams/report-scam-email