---
title: "What to do if… your user profile loads blank and your desktop files appear to be missing"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "dns records changed"
  - "website redirecting elsewhere"
  - "domain hijacked help"
  - "nameservers changed unexpectedly"
  - "dns hijacking recovery"
  - "what do i do if my dns was changed"
  - "what do i do if my website is redirected"
  - "what do i do if my domain is pointing to wrong server"
  - "what do i do if my registrar account is hacked"
  - "help i lost control of my domain"
  - "help i cannot log into my registrar"
  - "help my traffic is going to another site"
  - "help someone changed my dns records"
  - "my nameservers are different"
  - "my website is showing wrong content"
  - "my domain was transferred without permission"
  - "my mx records were changed"
  - "burning smell electronic"
  - "unauthorized dns modification"
  - "strange nameservers in whois"
  - "dns records modified"
  - "domain transfer unauthorized"
  - "registrar lock disabled"
  - "missing dns records"
  - "wrong a record"
  - "wrong cname"
  - "unauthorized aaaa record"
  - "dns resolution error"
  - "domain pointing to another site"
  - "website hijacked"
  - "dns records"
  - "website traffic"
  - "dns records changed"
  - "dns records modified"
  - "dns records lost"
  - "dns records unauthorized"
  - "website dns"
last_reviewed: "2026-03-17"
---
# What to do if… your user profile loads blank and your desktop files appear to be missing (USA)

## Short answer
Isolate your domain registrar account immediately to prevent further changes and restore your name server delegation to a known-good state. Secure the administrative email associated with the domain as this is the primary path for unauthorized resets.

## Do not do these things
- Do not attempt multiple "trial" DNS changes while propagation is active, as this complicates the audit trail and delays recovery.
- Do not trust contact information or links found in emails claiming your domain has expired or needs "verification" during this crisis.
- Do not delete the compromised domain from your registrar account in an attempt to "reset" it.
- Do not share technical details, ticket IDs, or specific record values on public social media or forums.
- Do not wait for "DNS propagation" to fix the issue if you have confirmed the records themselves are incorrect.

## What to do now
1. **Access your domain registrar using a secure, uncompromised device.** **The domain registrar is the ultimate authority for where your traffic is directed via name server (NS) records.** 
   - If you cannot log in, use the "forgot password" tool immediately to see if you still have access to the recovery email.
   - If the password has been changed and you are locked out, locate the registrar’s "Account Loss" or "Abuse" contact page via an external search engine.

2. **Harden the registrar account security immediately upon entry.** **Enable multi-factor authentication (MFA) and change the account password to a unique, complex string.**
   - Check the "Account Contacts" or "Registrant Information" section for any email addresses or phone numbers you do not recognize.
   - Remove any delegated users or API keys that were created without your authorization.

3. **Enable all available domain locks to prevent a transfer out.** **Activate the "Registrar Lock" or "Transfer Lock" feature to ensure the domain cannot be moved to another provider while you are troubleshooting.**
   - If your registrar offers "Registry Lock" (a higher-tier service), contact their support to request its immediate activation.

4. **Verify and restore the Name Server (NS) delegation.** **Check if the name servers listed at the registrar match your intended DNS provider.**
   - If the name servers have been changed to values you do not recognize, change them back to your official provider's settings.
   - Note that name server changes can take 24 to 48 hours to fully propagate globally, though often it is much faster.

5. **Review and correct individual DNS records (A, CNAME, MX).** **Once delegation is confirmed, log in to your DNS hosting provider and restore records from a backup or known-good configuration.**
   - Prioritize the "A" or "CNAME" records for your main website and the "MX" records for your email.
   - Look for unauthorized "TXT" records which are often used by attackers to verify domain ownership for other services.

6. **Check the status of DNSSEC to prevent resolution failures.** **Verify if DNSSEC is enabled and if the DS (Delegation Signer) records at the registrar match those provided by your DNS host.**
   - Mismatched DNSSEC records will cause the website to appear "down" or "insecure" to many users even if the A records are correct.

7. **Secure the primary administrative email account.** **The email address listed as the "Registrant" or "Administrative Contact" is often the original point of compromise.**
   - Change the password and review the "Forwarding" and "Rules" settings of that email account to ensure copies of your emails are not being sent to the attacker.

8. **File a report with federal authorities if you suspect a criminal hijacking.** **Report the incident to the FBI Internet Crime Complaint Center (IC3).**
   - Provide the registrar names, any unauthorized IP addresses found in the records, and a timeline of the changes.

## What can wait
- You do not need to decide on a new DNS provider or registrar today.
- You do not need to conduct a full forensic audit of your web server files until the domain itself is locked and secured.
- You do not need to update secondary or "vanity" domains until the primary business domain is stabilized.

## Important reassurance
Domain hijacking is a common tactic, and registrars have established protocols for handling these disputes. While the redirection of traffic is immediate, the "paper trail" at the registrar and registry level is permanent and can be used to prove your rightful ownership.

## Scope note
This guide covers first-step stabilization for DNS and domain registrar compromise. It does not cover the recovery of data if your web server itself was breached or the legal steps for trademark-related domain disputes.

## Important note
This information is provided for emergency stabilization and is not a substitute for professional cybersecurity or legal advice. Recovery of a domain can be a complex process involving the ICANN Transfer Dispute Resolution Policy (TDRP) if the domain has already been moved to a different registrar.

## Additional Resources
- https://support.microsoft.com/en-us/windows/-we-can-t-sign-in-to-your-account-error-message-3e08c5c8-92cc-48dc-80a4-f66d072c6edb
- https://support.microsoft.com/en-us/windows/fix-a-corrupted-user-profile-9e32ab2b-fa4d-40da-a78e-d294c1c94145
- https://support.microsoft.com/en-us/windows/find-lost-files-after-upgrading-windows-10af49aa-b372-b067-a334-2314401297a9
- https://support.microsoft.com/en-us/office/fix-onedrive-sync-problems-0899b115-05f7-45ec-95b2-e4cc8c4670b2
- https://support.microsoft.com/en-us/windows/windows-file-recovery-61f5b28a-f5b8-3cc2-0f8e-a63cb4e1d4c4
