---
title: "What to do if… your website’s DNS records change unexpectedly and traffic is being diverted to the wrong place"
seo_title: "Website DNS records changed and traffic diverted"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "dns records changed unexpectedly"
  - "dns records changed"
  - "dns settings changed"
  - "nameservers changed"
  - "domain nameservers changed"
  - "domain hijacked"
  - "dns hijacking"
  - "website traffic diverted"
  - "website going somewhere else"
  - "website pointing wrong server"
  - "what do i do if dns records changed"
  - "what do i do if nameservers changed"
  - "what do i do if website traffic diverted"
  - "what do i do if domain hijacked"
  - "help i lost domain control"
  - "help i think dns was hacked"
  - "help i see wrong website"
  - "help i changed dns accidentally"
  - "my website goes elsewhere"
  - "my domain points wrong"
  - "customers see wrong website"
  - "traffic suddenly dropped"
  - "visitors see another site"
  - "dns records look wrong"
  - "nameservers do not match"
  - "registrar account looks compromised"
  - "domain lock is off"
  - "not just dns propagation"
  - "domain transfer confusion"
  - "hosting problem or dns"
  - "cdn problem or dns"
  - "small business website diverted"
  - "uk domain traffic diverted"
  - "dns recrods changed"
  - "webiste traffic diverted"
last_reviewed: "2026-07-17"
date_created: "2026-05-29"
---

# What to do if… your website’s DNS records change unexpectedly and traffic is being diverted to the wrong place (UK)

## Short answer
Treat this like a possible account takeover. Secure the domain registrar and DNS provider accounts first, then restore the correct nameservers or DNS records from a known-good source.

## Do not do these things
- Don’t keep trying random DNS changes; you can overwrite evidence and make recovery harder.
- Don’t assume it is only “propagation” if visitors are consistently landing somewhere unexpected.
- Don’t use links or phone numbers from unexpected messages claiming to be your registrar or DNS provider.
- Don’t post screenshots of admin panels, ticket IDs, DNS records, or audit logs publicly while you are containing the incident.
- Don’t reset every password everywhere before securing the registrar, DNS provider, and recovery email accounts you need for control.

## What to do now
1. **Move to the safest admin setup you can.**
   - Use a known-clean device if one is available.
   - Avoid logging in from a device you think may be compromised.
   - Pause DNS automation, CI jobs, DNS sync tools, or API scripts that could undo your changes.

2. **Secure the registrar account first.**
   - Log in to the domain registrar using a saved address or a trusted bookmark.
   - Change the registrar password to a strong unique one.
   - Turn on MFA or 2-step verification.
   - Review and remove unfamiliar users, delegated access, recovery emails, recovery phone numbers, API keys, and support contacts.
   - Turn on registrar lock if available. This usually helps reduce transfer risk, but it may not stop every DNS change.
   - If the domain is important and the registry supports it, ask the registrar about a stronger registry-level lock. For .uk domains, ask whether Nominet Domain Lock is available.

3. **Secure the DNS provider and recovery email accounts.**
   - Change the DNS provider or CDN account password.
   - Turn on MFA.
   - Revoke unfamiliar API tokens, app passwords, connected apps, and user access.
   - Secure the email inbox used for registrar and DNS password resets; check for forwarding rules, mailbox rules, unfamiliar recovery details, and connected apps.

4. **Capture what changed before you fix it.**
   - Save screenshots or exports of the current nameservers at the registrar.
   - Save current DNS records from the DNS provider or CDN.
   - Save audit logs showing record changes, nameserver changes, API activity, user logins, and support-assisted changes.
   - Write a short UK-time timeline: when you noticed, what visitors saw, what changed, and what you have done so far.

5. **Restore nameservers first if delegation changed.**
   - If the nameservers at the registrar were changed, set them back to the correct DNS provider or CDN values from a known-good record, onboarding email, old ticket, infrastructure repository, or trusted internal document.
   - After changing nameservers, keep checking from more than one network or DNS checker because different resolvers may update at different times.
   - Do not keep switching values back and forth; make one verified correction and wait for it to settle.

6. **Restore DNS records if the nameservers are already correct.**
   - Restore from a known-good DNS export, template, infrastructure-as-code file, or provider backup.
   - If you do not have a full known-good copy, restore only the minimum safe records needed for the website first, such as the correct A, AAAA, or CNAME records.
   - Check MX, TXT, SPF, DKIM, DMARC, and verification records next, especially if email, payments, customer login, or certificate validation might be affected.

7. **Check DNSSEC and DS records.**
   - In the registrar panel, check whether DNSSEC is enabled.
   - Check whether the DS record was added, removed, or changed.
   - If DNSSEC looks wrong, coordinate with the registrar and DNS provider before guessing. A wrong or mismatched DS record can cause DNSSEC-validating resolvers to fail resolution.

8. **Ask the registrar and DNS provider to freeze and investigate.**
   - Contact the registrar’s security or abuse team and say: “Unauthorised DNS or nameserver changes; suspected domain hijack.”
   - Ask them to freeze changes if they can, confirm whether the change came from a login, API token, or support-assisted action, and preserve the full change history.
   - If this is a .uk, .co.uk, .org.uk, or other .uk domain, ask your registrar to involve Nominet where needed.

9. **Reduce harm to visitors while recovery is in progress.**
   - Pause ads, bulk email, social posts, QR codes, or campaigns that drive people to the domain until you verify resolution is correct.
   - Tell staff not to log in through the affected domain until DNS is verified.
   - Use known-good direct admin URLs only.
   - If you control a safe hosting path, put up a simple maintenance page and disable risky features until the domain is stable.

10. **Report it if it looks criminal, serious, or customer-impacting.**
   - Use the UK cyber incident signposting service or the NCSC reporting service if you are unsure where to report.
   - For cyber crime or fraud in England, Wales, or Northern Ireland, use Report Fraud.
   - If you are in Scotland or the crime happened in Scotland, report to Police Scotland on 101 or through Police Scotland’s reporting routes.
   - If people may have entered passwords, payment details, or personal data into the diverted site, record that separately and get specialist incident-response or data-protection help.

## What can wait
- You do not need to decide today whether to move registrar, redesign DNS, rebuild hosting, or change every supplier.
- You do not need to perfect every DNS record immediately; restore safe core web resolution first.
- Deep forensics, long-term monitoring, and permanent architecture changes can wait until the registrar, DNS provider, and recovery email accounts are secured.

## Important reassurance
A DNS diversion can feel like the whole website has been taken, but one wrong registrar or DNS change can cause a very large visible effect. Working in order — secure control, preserve evidence, restore known-good settings, then report and harden — gives you the best chance of stopping further damage without making the situation messier.

## Scope note
These are first steps for the first hours only. If you suspect email takeover, server compromise, payment-page interception, customer data exposure, or an attacker still has access, later decisions may need specialist cyber incident-response, legal, data-protection, or insurance support.

## Important note
This guide is general information, not legal, technical, cyber-security, financial, or professional advice. If you cannot confidently restore a known-good configuration, prioritise containment and work with your registrar, DNS provider, and relevant specialist support.

## Additional Resources
- https://www.ncsc.gov.uk/files/Advisory-DNS-hijacking.pdf
- https://www.ncsc.gov.uk/guidance/managing-public-domain-names
- https://registrars.nominet.uk/uk-namespace/domain-abuse-prevention-and-disruption/domain-lock/
- https://signpost-cyber-incident.service.gov.uk/
- https://report.ncsc.gov.uk/
- https://www.reportfraud.police.uk/reporting-a-fraud/
- https://www.scotland.police.uk/contact-us/
