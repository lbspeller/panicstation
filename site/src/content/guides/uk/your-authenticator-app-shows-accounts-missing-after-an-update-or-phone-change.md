---
title: "What to do if… your authenticator app shows accounts missing after an update or phone change"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - authenticator accounts missing
  - 2fa codes disappeared
  - authenticator app reset after update
  - new phone authenticator empty
  - lost 2fa app entries
  - microsoft authenticator restore
  - google authenticator transfer
  - authy tokens missing
  - two factor app not showing accounts
  - cannot log in without codes
  - phone change lost authenticator
  - update wiped authenticator
  - accounts vanished from authenticator
  - missing otp accounts
  - recovery codes for 2fa
  - qr code 2fa re-setup
  - locked out after phone upgrade
  - suspected sim swap
last_reviewed: "2026-03-09"
---

# What to do if… your authenticator app shows accounts missing after an update or phone change (UK)

## Short answer
Pause and **do not delete, reset, or reinstall the authenticator app yet**. First, try the app’s built-in **restore/sync/transfer** options and check whether you still have access to your old phone or backups.

## Do not do these things
- Do not tap “reset”, “clear data”, “remove all accounts”, or uninstall/reinstall until you’ve tried restore/sync/transfer (that can erase your last chance of recovery).
- Do not turn off 2-step verification on accounts “just to get back in” unless you’re sure you’re in the real account settings (panic changes can lock you out further).
- Do not use “help” links from unexpected emails/texts about your accounts—open the service by typing its address or using a known bookmark.
- Do not assume it’s “just a bug” if you also lost mobile signal, got SIM/number porting alerts, or saw password reset emails you didn’t request.

## What to do now
1. **Freeze the situation for 5 minutes.**
   - Put the phone on charge and turn on a screen lock if it isn’t already.
   - Take 2–3 screenshots of the authenticator app showing the missing/empty state (useful for support later).

2. **Work out which authenticator you’re dealing with and use the right recovery path (without reinstalling).**
   - **Microsoft Authenticator:** look for “Begin recovery” / “Restore from backup.” Note that Microsoft states you can only restore backups **to the same device type** (iOS↔iOS, Android↔Android).
   - **Google Authenticator:** if you still have the old phone, use the in-app **Transfer accounts** flow (export on old, import/scan on new). If your version offers sign-in/cloud sync and you previously enabled it, sign in on the new phone and check whether anything repopulates—but don’t rely on that as your only route.
   - **Authy:** install Authy and re-register using your phone number. If you previously enabled multi-device and backups, tokens may reappear after verification. If they don’t, Twilio notes tokens can sometimes be permanently lost after device loss/factory reset/sync problems—so be ready to re-enrol 2FA with each service. If you can’t access Authy on any device but still control the phone number, use Authy’s **Recover Access** process (it may take time, and any Authy backup password can’t be recovered).

3. **If you still have the old phone (even briefly), use it as your lifeline.**
   - Keep it powered and offline-safe (don’t factory reset).
   - Use the authenticator app’s **export/transfer** feature (where available) to move accounts to the new phone.
   - If transfer isn’t possible, use the old phone to log in to key accounts (email first) and add a second sign-in method (backup codes, another authenticator, security key) before the old phone dies.

4. **Prioritise access in the right order to avoid cascading lockouts.**
   - **Email account(s)** used for password resets (most important).
   - **Mobile network account** (in case someone is trying a SIM swap/port).
   - **Password manager** (if you use one).
   - **Banking/financial** and then everything else.

5. **Use safe “get back in” options from each service (without guessing).**
   - On the service’s sign-in screen, look for options like: **backup codes**, **use another method**, **security key**, **text/call code**, or **account recovery**.
   - Once you regain access, go straight to that service’s **security settings** and **add a new authenticator** (or re-link it) and generate fresh backup codes.

6. **Rule out account compromise while you’re doing this.**
   - Check your email account for unexpected password reset emails, new device sign-ins, or new forwarding rules/filters.
   - If anything looks off: change your email password, sign out of other sessions/devices, and review recovery methods.

7. **If you suspect a SIM swap/number port (warning signs: sudden “No Service”, SIM change texts, or you can’t receive calls/SMS):**
   - Contact your mobile network provider immediately (from another phone if needed) and ask them to secure your account and confirm whether a SIM swap/port has occurred.
   - If money or accounts are at risk (or you’ve lost money), report it to **Action Fraud** and keep any reference number.

## What can wait
- You do not need to reorganise all your logins or pick a “perfect” authenticator app today.
- You do not need to reset every password right now—focus on regaining access to email and the most important accounts first.
- You do not need to decide whether to keep 2FA on SMS vs app vs security key today; just restore access safely.

## Important reassurance
This is common after phone changes—many authenticators keep codes locally unless you enabled backup/sync beforehand, so it can look like everything “vanished” even when your accounts are still fine. If you move slowly and prioritise email first, you can usually recover without making it worse.

## Scope note
These are first steps to stabilise access and prevent irreversible mistakes. Some accounts (work, banking, regulated services) may require their specific support or identity checks to re-enrol 2FA.

## Important note
This is general information, not legal, financial, or security advice. If you think someone else may be accessing your accounts, treat it as a potential compromise and use official support channels for the affected services.

## Additional Resources
- https://support.microsoft.com/en-gb/account-billing/restore-account-credentials-from-microsoft-authenticator-ce53096e-1e1c-4840-9e32-1618bc33cd43
- https://support.microsoft.com/en-gb/account-billing/back-up-your-accounts-in-microsoft-authenticator-bb939936-7a8d-4e88-bc43-49bc1a700a40
- https://support.google.com/accounts/answer/1066447
- https://help.twilio.com/articles/19753413578523-Restoring-Authy-Access-on-a-New-Lost-or-Inaccessible-Phone
- https://help.twilio.com/articles/19752893953051-My-Authy-Tokens-are-Missing-or-Lost
- https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account
- https://www.reportfraud.police.uk/