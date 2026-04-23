---
title: "What to do if… your user profile loads blank and your desktop files appear to be missing"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "dns records changed"
  - "nameservers changed unexpectedly"
  - "website redirecting elsewhere"
  - "domain hijacked"
  - "dns hijacking"
  - "site traffic diverted"
  - "domain pointing to wrong server"
  - "registrar account compromised"
  - "unauthorized dns changes"
  - "website going to another site"
  - "customers seeing wrong website"
  - "my domain was taken over"
  - "domain settings changed"
  - "website sending users elsewhere"
  - "someone changed my dns"
  - "sudden traffic drop dns"
  - "domain control lost"
  - "what do i do if my website was hijacked"
  - "what do i do if dns records changed"
  - "what do i do if nameservers changed"
  - "what do i do if traffic is diverted"
  - "help i lost control of my domain"
  - "help i cannot access my registrar"
  - "help my website is pointing to a scam"
  - "help my dns is wrong"
  - "website showing wrong content"
  - "domain redirecting to unknown site"
  - "unexpected nameserver update"
  - "unauthorized registrar login"
  - "dns hijacking recovery"
  - "domain name system breach"
  - "uk domain hijack help"
last_reviewed: "2026-03-17"
---
# What to do if… your user profile loads blank and your desktop files appear to be missing (UK)

## Short answer
Treat the situation as an account takeover by regaining control at the domain registrar, enabling multi-factor authentication, and restoring nameserver records from a verified backup.

## Do not do these things
- Do not make repeated, unrecorded changes to DNS settings while in a panic, as this destroys the audit trail.
- Do not ignore the issue if it persists, assuming it is a temporary "propagation" delay.
- Do not click links or call numbers in "alert" emails that claim to be from your registrar; they may be phishing attempts.
- Do not pay "recovery specialists" on social media who claim they can "hack back" your domain for a fee.
- Do not post admin screenshots or login details on public forums while trying to seek help.

## What to do now
1. **Isolate your administration environment.**
   - **Log in only from a device and network known to be secure.**
   - **Pause any automated deployment pipelines or DNS synchronization tools** that might automatically overwrite your manual fixes.

2. **Secure the domain registrar account immediately.**
   - **Change the registrar account password** to a unique, complex passphrase.
   - **Enable Multi-Factor Authentication (MFA)** if it is not already active.
   - **Activate the "Registrar Lock" or "Domain Lock" feature** to prevent the domain from being transferred to another provider.
   - **Audit the account's user list** and remove any unrecognized email addresses, API tokens, or delegated access permissions.

3. **Document the current unauthorized state.**
   - **Capture screenshots of the current Nameserver (NS) settings** and all active DNS records (A, CNAME, MX, TXT).
   - **Export the account's activity logs or audit trail** to identify when the changes occurred and which credentials were used.

4. **Restore correct delegation and records.**
   - **Reset the Nameservers to your authorized DNS provider's values** if they were changed.
   - **Restore individual DNS records from a known-good backup or prior export.**
   - **Prioritize web traffic (A/AAAA records) and email (MX records)** to restore core services first.

5. **Verify DNSSEC and DS records.**
   - **Check if DNSSEC was enabled or tampered with** in the registrar panel.
   - **Remove or update mismatched DS records** to prevent valid traffic from being blocked by security checks.

6. **Contact the relevant UK authorities and registries.**
   - **Notify your registrar's security or abuse department** and request an "Investigation Lock" if the account remains at risk.
   - **Contact Nominet (the .uk registry) via their abuse reporting form** if the domain is a .uk, .co.uk, or .org.uk extension and the registrar is unresponsive.
   - **Call the Cyber and Fraud Centre Scotland at 0800 1670 623** if your business or organization is based in Scotland.

7. **Secure the associated email accounts.**
   - **Update the password and MFA settings for the email inbox** used for registrar notifications, as this is a common entry point for hijackers.
   - **Check for unauthorized mail forwarding rules** that might be sending password reset emails to an attacker.

8. **Report the incident for criminal investigation.**
   - **Use the Report Fraud portal (reportfraud.police.uk) or call 0300 123 2040** if you are in England, Wales, or Northern Ireland.
   - **Call Police Scotland on 101** if you are located in Scotland.
   - **Submit a report via the NCSC (National Cyber Security Centre) "Report a cyber incident" tool** if the breach has a significant impact on your business operations or customers.

## What can wait
- You do not need to migrate to a new registrar or hosting provider immediately.
- You do not need to finalize long-term infrastructure improvements while the incident is active.
- You do not need to perform a full forensic clean of every company device before securing the primary registrar account.

## Important reassurance
DNS hijacking often relies on compromised credentials rather than a flaw in the DNS protocol itself. By securing the registrar account and restoring records from a backup, the diversion can usually be corrected within the window of standard DNS TTL (Time to Live) expiration.

## Scope note
This guide covers first-step stabilization for a DNS-level diversion only. If customer data has been exported or your internal servers have been breached, additional incident response steps for data loss and malware containment will be required.

## Important note
This information is for guidance purposes and does not constitute professional security or legal advice. If you are unable to regain access to your registrar or if the attacker maintains control, contact a certified cybersecurity incident response professional. Reporting cyber crime to the authorities is necessary for a crime reference number but does not guarantee the recovery of your domain.

## Additional Resources
- https://support.microsoft.com/en-gb/windows/fix-a-corrupted-user-profile-9e32ab2b-fa4d-40da-a78e-d294c1c94145
- https://support.microsoft.com/en-gb/windows/-we-can-t-sign-in-to-your-account-error-message-3e08c5c8-92cc-48dc-80a4-f66d072c6edb
- https://support.microsoft.com/en-gb/office/where-have-my-desktop-icons-gone-a7a4636e-b079-43a3-8a8b-f471b64c41d1
- https://support.microsoft.com/en-gb/windows/find-lost-files-after-upgrading-windows-10af49aa-b372-b067-a334-2314401297a9
- https://support.microsoft.com/en-gb/office/restore-your-onedrive-fa231298-759d-41cf-bcd0-25ac53eb8a15
