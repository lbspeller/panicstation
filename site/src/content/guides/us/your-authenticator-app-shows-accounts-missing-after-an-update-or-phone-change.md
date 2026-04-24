---
title: "What to do if… your authenticator app shows accounts missing after an update or phone change"
jurisdiction: "USA"
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
  - otp accounts disappeared
  - locked out of account 2fa
  - phone upgrade lost authenticator
  - update wiped authenticator
  - missing two factor codes
  - recovery codes for 2fa
  - qr code 2fa setup again
  - cannot access email 2fa
  - suspected sim swap
last_reviewed: "2026-03-09"
---

# What to do if… your authenticator app shows accounts missing after an update or phone change (USA)

## Short answer
Stop and **don’t uninstall or reset the authenticator app yet**. First, try the app’s **restore/sync/transfer** features and use account **backup codes / alternate sign-in methods** to regain access safely.

## Do not do these things
- Do not uninstall/reinstall, clear storage, or “reset” the authenticator app before you’ve attempted restore/sync/transfer (you can erase the remaining recovery path).
- Do not click sign-in “support” links from random messages—go to the real site/app directly.
- Do not rush to disable two-factor authentication on accounts while panicked; do it only from verified account settings after you’re signed in.
- Do not ignore it if you also lost cellular service or got alerts about a SIM change/number transfer.

## What to do now
1. **Make the phone stable and keep evidence for support.**
   - Plug in the phone and ensure you can unlock it reliably.
   - Take screenshots of the authenticator app showing missing/empty accounts (helps if you need support).

2. **Use the correct recovery flow for the authenticator you’re using (before reinstalling).**
   - **Microsoft Authenticator:** use “Restore from backup” / “Begin recovery.” Microsoft states restores only work **to the same device type** (iOS↔iOS, Android↔Android).
   - **Google Authenticator:** if you still have the old phone, use **Transfer accounts** (export on old, import/scan on new). If your version offers sign-in/cloud sync and you previously enabled it, sign in and check whether anything repopulates—but keep transfer/re-enrolment as your main plan.
   - **Authy:** re-install and verify your phone number. If you previously enabled multi-device and backups, tokens may reappear. If they don’t, Twilio notes tokens can sometimes be permanently lost after device loss/factory reset/sync problems—so you may need to re-enrol 2FA with each service. If you can’t access Authy on any device but still control the phone number, use Authy’s **Recover Access** process (it can take time, and any Authy backup password/key can’t be recovered).

3. **If you still have the old phone, treat it as your recovery key.**
   - Keep it powered; don’t wipe it.
   - Transfer/export accounts if the app supports it.
   - If transfer isn’t possible, use the old phone to sign in to your most important accounts and add a second sign-in method (backup codes, another authenticator, security key) before you lose access.

4. **Regain access in an order that prevents cascading lockouts.**
   - **Email account(s)** used for password resets (first).
   - **Cell carrier account** (so you can stop SIM/number takeovers quickly).
   - **Password manager** (if you use one).
   - **Financial accounts**, then everything else.

5. **Use built-in “alternate verification” options on each account (don’t guess).**
   - Look for: “Try another way,” “backup codes,” “security key,” “text/call,” “trusted device,” or “account recovery.”
   - After you’re back in, go to the account’s security settings and **re-add/re-link the authenticator** and generate new backup codes.

6. **Check quickly for signs of compromise.**
   - Review your email account’s recent sign-ins, password reset emails, and any changes to recovery email/phone.
   - If anything looks wrong, change the email password, sign out of other sessions, and secure recovery methods.

7. **If you suspect a SIM swap/number port (you suddenly lose service or can’t receive calls/texts):**
   - Contact your mobile carrier immediately to regain and lock down control of the number.
   - Check bank/credit card accounts for unauthorized changes and contact your financial institutions if anything looks wrong.
   - If you believe you’re a victim of SIM swapping or related fraud, file a report with the FBI via **IC3**.

## What can wait
- You don’t need to pick the “best” authenticator app today—focus on restoring access first.
- You don’t need to reset every password immediately; start with email and high-risk accounts.
- You don’t need to perfect your long-term security setup today—just get back into accounts safely without creating new lockouts.

## Important reassurance
This happens a lot during phone upgrades: many authenticator apps store codes locally unless backup/sync was enabled, so it can feel like everything vanished at once. Going step-by-step—email first, then re-enrolling 2FA—usually gets you back in.

## Scope note
These are immediate first steps to stabilize access and prevent irreversible mistakes. Some services (banks, workplaces, government accounts) may require their specific identity checks to reset 2FA.

## Important note
This is general information, not professional security, legal, or financial advice. If you think someone else may be accessing your accounts, use official support channels and treat it as a possible account compromise.

## Additional Resources
- https://support.microsoft.com/en-us/account-billing/restore-account-credentials-from-microsoft-authenticator-ce53096e-1e1c-4840-9e32-1618bc33cd43
- https://support.microsoft.com/en-us/account-billing/back-up-your-accounts-in-microsoft-authenticator-bb939936-7a8d-4e88-bc43-49bc1a700a40
- https://support.google.com/accounts/answer/1066447
- https://help.twilio.com/articles/19753413578523-Restoring-Authy-Access-on-a-New-Lost-or-Inaccessible-Phone
- https://help.twilio.com/articles/19752893953051-My-Authy-Tokens-are-Missing-or-Lost
- https://consumer.ftc.gov/consumer-alerts/2019/10/sim-swap-scams-how-protect-yourself
- https://www.fbi.gov/contact-us/field-offices/phoenix/news/press-releases/fbi-tech-tuesday-sim-swapping
- https://www.ic3.gov/