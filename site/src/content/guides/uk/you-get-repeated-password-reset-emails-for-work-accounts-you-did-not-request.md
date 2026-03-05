---
title: "What to do if… you get repeated password reset emails for work accounts you did not request"
jurisdiction: "UK"
category: "Work & employment crises"
tags:
  - repeated password reset emails
  - password reset emails at work
  - unrequested password reset link
  - work account reset email
  - suspicious reset notifications
  - account takeover warning signs
  - credential stuffing attempts
  - phishing using reset emails
  - mfa prompt you didnt request
  - unexpected security code email
  - microsoft 365 reset email
  - google workspace reset email
  - work email login alerts
  - mailbox rules changed
  - email forwarding set up
  - unknown device sign in
  - oauth app permissions granted
  - reset email flood attack
  - someone knows my work email
last_reviewed: "2026-01-07"
---

# What to do if… you get repeated password reset emails for work accounts you did not request (UK)

## Short answer
Do not click anything in the emails. Use a trusted channel to contact your organisation’s IT/security helpdesk now so they can check and lock down your account.

## Do not do these things
- Do not click “reset password”, “verify”, or “unsubscribe” links in the emails (even “security” emails can be fake).
- Do not reply to the email or call any phone number shown in it.
- Do not approve any sign-in/MFA prompts or read out one-time codes to anyone (including “IT”) unless you initiated the login yourself.
- Do not forward these emails outside your organisation **unless** your organisation’s policy/IT/security asks you to (they may need to collect message details safely).
- Do not ignore it just because “nothing happened yet” (this can be early warning of targeting).

## What to do now
1. **Stop and sanity-check what’s happening (30 seconds).**  
   You’re getting password reset emails you didn’t request. Treat this as either (a) someone is trying to reset your password, or (b) someone is trying to lure you into a fake sign-in page.

2. **Report it to your IT/security helpdesk using a trusted route.**  
   Use your company intranet, your known helpdesk number, or your usual ticketing tool (not details inside the email). Tell them:
   - you’re receiving repeated password reset emails you did not request
   - when it started and how often it’s happening
   - which accounts/services the emails mention (e.g., Microsoft 365, VPN, HR portal)
   - whether you clicked anything or entered any details (if yes, say so plainly)

3. **Ask IT/security to run specific checks right away.**  
   Ask them to:
   - review sign-in attempts and password reset events for your account(s)
   - force sign-out from all sessions / revoke tokens if available
   - check for suspicious mailbox changes (forwarding, inbox rules, delegated access)
   - check for suspicious “connected apps”/consents if your environment supports it
   - confirm whether other staff are seeing the same thing (pattern checking)

4. **Only change your password via the official portal if it’s allowed and IT hasn’t told you to wait.**  
   From a device you trust (ideally your work device), go to your normal work sign-in page (not the email link) and follow your organisation’s process. If your organisation requires IT-led resets or asks you to pause while they investigate, follow their direction.

5. **Check for common “silent takeover” changes (if your system lets you).**  
   In your mail settings, look for anything you didn’t set up:
   - automatic forwarding to an external address
   - inbox rules that hide or auto-delete messages (especially from finance, HR, or your manager)
   - unfamiliar “connected apps” or add-ins that have permission to read mail

6. **If you clicked a link or entered your password, treat it as urgent compromise.**  
   Tell IT/security clearly: “I clicked” / “I entered my password.” Then follow their instructions, which may include:
   - an immediate password reset and forced sign-out
   - checking your device for malware
   - resetting MFA and re-verifying your identity

7. **Reduce the risk of fast knock-on harm today.**  
   If your role involves payments, payroll, HR changes, or supplier communication, message your manager that your account may be under attack and you’re working with IT—so urgent requests “from you” can be verified out-of-band today.

8. **Preserve evidence the simple way.**  
   Keep the emails in place (don’t delete yet) until IT/security says they have what they need. If your organisation permits external reporting, IT/security may ask you to forward suspicious emails to the UK Suspicious Email Reporting Service (report@phishing.gov.uk) or handle reporting for you.

## What can wait
- You do not need to work out *who* is doing it right now.
- You do not need to report it externally unless there’s confirmed fraud/loss or IT/security advises. If you do need to report fraud: **Action Fraud** is used in **England, Wales and Northern Ireland**; in **Scotland** you would typically contact **Police Scotland**.
- You do not need to do a full “security overhaul” today—focus on securing the specific work accounts being targeted and follow IT/security’s incident process.

## Important reassurance
Repeated reset emails don’t automatically mean someone is already inside your account—often it’s testing passwords or trying to trick you into a fake login. The safest move is still to assume it could be the start of an account takeover and let IT/security verify and contain it.

## Scope note
These are first steps to stabilise and prevent irreversible mistakes. Your organisation may have a specific incident process; follow it once you’re connected to IT/security.

## Important note
This is general information, not legal advice or a substitute for your organisation’s security guidance. If you think you entered details into a suspicious site or approved an unexpected sign-in, prioritise your organisation’s IT/security instructions.

## Additional Resources
- https://www.ncsc.gov.uk/collection/phishing-scams
- https://www.gov.uk/report-suspicious-emails-websites-phishing
- https://www.ncsc.gov.uk/collection/phishing-scams/report-scam-email
- https://www.ncsc.gov.uk/section/respond-recover/phishing
- https://www.ncsc.gov.uk/collection/using-online-services-safely/recovering-hacked-account-or-service
- https://learn.microsoft.com/en-us/defender-office-365/responding-to-a-compromised-email-account
