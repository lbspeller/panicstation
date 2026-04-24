---
title: "What to do if… your website’s DNS records change unexpectedly and traffic starts going somewhere else"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - dns changed unexpectedly
  - dns records changed
  - nameservers changed
  - domain hijacked
  - dns hijacking
  - website redirecting elsewhere
  - site traffic diverted
  - domain pointing to wrong server
  - registrar account compromised
  - unauthorized dns changes
  - website going to another site
  - customers seeing wrong website
  - my domain was taken over
  - domain settings changed
  - website sending users elsewhere
  - someone changed my dns
  - sudden traffic drop dns
  - domain control lost
last_reviewed: "2026-03-08"
---

# What to do if… your website’s DNS records change unexpectedly and traffic starts going somewhere else (USA)

## Short answer
Assume compromise and take control at the **domain registrar** first. Lock the domain, restore DNS from a known-good record, and secure the accounts (especially email) that can reset domain/DNS access.

## Do not do these things
- Don’t keep making “trial” DNS edits — you can slow recovery and blur what changed.
- Don’t assume it will fix itself with propagation if users are consistently resolving to the wrong destination.
- Don’t use phone numbers/links from suspicious emails or texts claiming to be your registrar/DNS provider.
- Don’t share admin screenshots, DNS details, or support ticket IDs publicly during containment.
- Don’t rotate passwords across your whole org before you’ve regained control of the registrar/DNS accounts you need right now.

## What to do now
1. **Switch to a safer admin posture (minutes).**
   - Use a known-clean device if possible.
   - Pause any tools that automatically push DNS changes (CI/CD DNS updates, infrastructure-as-code runs, API automations) so they don’t conflict with recovery.

2. **Lock down the registrar account (your main control point).**
   - Log in to your **domain registrar** and immediately:
     - Change the password to a strong unique one.
     - Enable **MFA/2FA**.
     - Turn on **Domain Lock / Registrar Lock** (to block transfers and reduce unauthorized changes).
     - If your registrar offers it (and your domain supports it), ask about **Registry Lock** as an added safeguard.
   - Remove unknown users, delegated access, recovery emails/phones, and revoke any API keys/tokens you don’t recognize.

3. **Record what happened (you’ll need this for escalation).**
   - Screenshot/export:
     - Current **nameservers (NS)** at the registrar.
     - DNS provider/CDN audit logs (record changes, API activity).
     - Any registrant/contact changes you can see.
   - Write a brief timeline (local time): when you noticed, what users see, and what you changed (if anything).

4. **Restore delegation first, then restore records.**
   - If **nameservers changed**, set them back to your correct DNS provider/CDN values using a known-good reference (internal documentation, prior ticket, provider onboarding details).
   - If nameservers are correct but **records were modified**, restore from your last known-good DNS export/template.
   - If you don’t have a known-good copy, restore only the minimum needed to bring the website back safely (A/AAAA/CNAME for the web service), then add other records carefully.

5. **Check DNSSEC status so recovery doesn’t fail silently.**
   - In the registrar panel, check whether **DNSSEC** is enabled and whether the **DS record** was changed or removed.
   - If DNSSEC was altered, coordinate fixes with your DNS provider/registrar (a mismatched DS can break valid resolution or keep pointing to attacker-controlled signing).

6. **Escalate to the registrar’s security/abuse channel.**
   - Use official registrar support and say: “Unauthorized DNS/name server changes; suspected domain hijack.”
   - Ask them to:
     - Apply the strongest available lock/hold for your domain.
     - Confirm whether changes came from login, API token, or support-assisted action.
     - Preserve and provide the change history/audit logs.
   - If you suspect an unauthorized transfer, ask for the registrar’s **unauthorized transfer dispute** steps immediately.

7. **Contain common entry points in parallel.**
   - Secure the email accounts used for registrar/DNS recovery:
     - Change password, enable MFA, remove unknown forwarding rules, check connected apps/app passwords.
   - Secure DNS provider/CDN access (MFA, revoke tokens, review access).
   - If you suspect an admin workstation compromise, stop using it for admin logins until it’s cleaned.

8. **Reduce harm to customers while recovery is in progress.**
   - Pause ads/email campaigns driving users to the domain until you verify resolution is correct.
   - Tell staff not to log into admin panels via the domain until you confirm it resolves correctly (use known-good direct URLs only).
   - If you control the correct hosting, temporarily serve a maintenance page and disable risky features until stable.

9. **Report if appropriate (crime, loss, or broader risk).**
   - For cybercrime/fraud (especially if money or customer harm is involved), file a report with the **FBI Internet Crime Complaint Center (IC3)**.
   - You can also report/share incident details with **CISA** via its cyber incident reporting channels.

## What can wait
- You don’t need to decide today whether to switch DNS providers, migrate registrars, or redesign infrastructure.
- You don’t need to fully optimize every DNS record right now — restore core website resolution safely first.
- Deep forensics can wait until the domain is locked and changes have stopped.

## Important reassurance
DNS/registrar incidents feel instant because they are: one change can reroute a whole business. A steady sequence — lock control, restore known-good, then harden accounts — is usually the fastest way to stop the damage.

## Scope note
This is first-step guidance for the first hours. If you suspect broader compromise (email takeover, server breach, customer data exposure), you may need professional incident response support.

## Important note
This guide is general information, not legal or professional security advice. If you can’t confidently restore a known-good configuration or you think the attacker still has access, prioritise containment (locks, MFA, access revocation) and work with your registrar/DNS provider security teams.

## Additional Resources
- https://www.cisa.gov/resources-tools/resources/mitigate-dns-infrastructure-tampering
- https://www.cisa.gov/reporting-cyber-incident
- https://www.ic3.gov/
- https://complaint.ic3.gov/
- https://www.fbi.gov/investigate/cyber
- https://www.icann.org/resources/pages/lost-domain-names