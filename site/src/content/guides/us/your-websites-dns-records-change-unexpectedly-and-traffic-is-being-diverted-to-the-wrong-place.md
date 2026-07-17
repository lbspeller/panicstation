---
title: "What to do if… your website’s DNS records change unexpectedly and traffic is being diverted to the wrong place"
seo_title: "Website DNS records changed and traffic diverted"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "dns changed unexpectedly"
  - "dns records changed"
  - "dns recrods changed"
  - "nameservers changed unexpectedly"
  - "domain hijacked"
  - "dns hijacking"
  - "website traffic diverted"
  - "webiste traffic diverted"
  - "website redirecting elsewhere"
  - "domain pointing wrong server"
  - "registrar account compromised"
  - "unauthorized dns changes"
  - "site going somewhere else"
  - "what do i do if dns changed"
  - "what do i do if domain hijacked"
  - "what do i do if nameservers changed"
  - "what do i do if website redirects"
  - "help i lost domain control"
  - "help i see wrong website"
  - "help i think dns hijacked"
  - "help i cannot fix dns"
  - "my dns records changed"
  - "my domain points elsewhere"
  - "my website sends users away"
  - "my registrar account looks wrong"
  - "customers see wrong website"
  - "traffic suddenly dropped"
  - "dns logs show changes"
  - "nameservers look unfamiliar"
  - "admin email changed"
  - "dns propagation confusion"
  - "hosting problem confusion"
  - "cdn problem confusion"
  - "small business website dns"
  - "ecommerce site dns"
  - "company domain compromised"
  - "usa website dns incident"
last_reviewed: "2026-07-17"
date_created: "2026-07-04"
---

# What to do if… your website’s DNS records change unexpectedly and traffic is being diverted to the wrong place (USA)

## Short answer
Treat this as possible compromise until you prove otherwise. Regain control at the domain registrar first, lock the domain, restore only known-good DNS settings, and secure the email accounts that can reset registrar or DNS access.

## Do not do these things
- Do not keep making trial DNS edits; it can slow recovery and make the change history harder to follow.
- Do not assume it is only DNS propagation if users are repeatedly reaching the wrong destination.
- Do not use phone numbers or links from suspicious emails or texts claiming to be your registrar, DNS provider, CDN, or host.
- Do not post admin screenshots, DNS details, API tokens, or support ticket IDs publicly during containment.
- Do not start a broad organization-wide password reset before you have secured the registrar, DNS provider, CDN, and recovery email accounts needed for control.

## What to do now
1. **Move admin work to the safest access you have.**
   - Use a known-clean device and trusted network if possible.
   - Stop automated DNS changes for now, including CI/CD jobs, infrastructure-as-code runs, DNS API scripts, and hosting tools that update records.

2. **Secure the domain registrar account first.**
   - Log in by typing the registrar’s address yourself or using a saved trusted bookmark.
   - Change the registrar password to a strong unique password.
   - Turn on MFA, preferably an authenticator app or hardware security key if supported.
   - Turn on the strongest available domain lock, such as transfer lock, registrar lock, clientTransferProhibited, or similar wording.
   - Remove unknown users, delegated access, recovery emails, recovery phone numbers, OAuth apps, API keys, and tokens.
   - If the domain and provider support it, ask the registrar whether Registry Lock or an equivalent high-assurance lock is available.

3. **Capture a simple record before changing more.**
   - Save screenshots or exports of current nameservers, DNS records, registrar account users, registrant contact details, DNS provider logs, CDN logs, and recent API activity.
   - Write a brief timeline with the local time you noticed the problem, what users are seeing, and any changes already made.

4. **Restore delegation first, then restore DNS records.**
   - If the nameservers changed, set them back to the correct DNS provider or CDN using a known-good source such as internal documentation, a previous support ticket, an onboarding email, or a saved DNS export.
   - If the nameservers are correct but records changed, restore from the last known-good DNS export or template.
   - If you do not have a known-good copy, restore only the minimum needed for the public website first, such as the correct A, AAAA, or CNAME records, then add other records carefully after the site is stable.

5. **Check DNSSEC before assuming the fix worked.**
   - In the registrar panel, check whether DNSSEC is enabled and whether the DS record was changed, added, or removed.
   - If DNSSEC or DS records look wrong, coordinate with both the registrar and DNS provider before guessing; an incorrect DS record can make validating resolvers fail even when the rest of the DNS looks correct.

6. **Escalate through official registrar security support.**
   - Contact the registrar through its official support or security route and say: “Unauthorized DNS or nameserver changes; suspected domain hijack.”
   - Ask the registrar to apply the strongest available lock or hold, confirm whether changes came from login, API token, delegated user, or support-assisted action, and preserve change history.
   - If the domain was transferred or registrant details changed without permission, ask for the registrar’s unauthorized transfer or registrant-change process. For a generic top-level domain, ask whether a Transfer Dispute Resolution Policy route may apply.

7. **Secure the recovery email and DNS provider in parallel.**
   - For email accounts that can reset registrar, DNS, CDN, or hosting access: change the password, enable MFA, remove unknown forwarding rules, check app passwords, and remove connected apps you do not recognize.
   - In the DNS provider and CDN: enable MFA, remove unknown users, revoke unfamiliar API tokens, and review recent changes.
   - If you suspect an admin workstation is compromised, stop using it for admin logins until it has been checked or rebuilt.

8. **Reduce harm while DNS is recovering.**
   - Pause ads, marketing emails, and social posts that drive people to the affected domain until you confirm resolution is correct.
   - Tell staff not to log in to admin panels through the affected domain until DNS is verified.
   - Use known-good direct provider URLs for registrar, DNS, CDN, hosting, and email administration.
   - If you control the correct hosting, consider serving a temporary maintenance page while you confirm that visitors are reaching the right place.

9. **Report if there is crime, loss, customer harm, or wider risk.**
   - If money, fraud, data theft, customer harm, or an unauthorized intrusion may be involved, consider filing a report with the FBI Internet Crime Complaint Center.
   - Organizations can also report cyber incidents to CISA through its official cyber incident reporting channel.

## What can wait
- You do not need to decide today whether to switch DNS providers, migrate registrars, redesign infrastructure, or change your whole security stack.
- You do not need to perfect every DNS record right now; restore safe core website resolution first.
- Deep forensics, provider comparisons, and long-term architecture work can wait until the domain is locked and unauthorized changes have stopped.

## Important reassurance
This can feel sudden because a small DNS or nameserver change can redirect a whole website. A calm sequence gives you the best chance of stopping the damage: secure registrar control, restore known-good DNS, protect recovery accounts, then investigate.

## Scope note
These are first steps for the first hours of a DNS or domain-control incident. If you suspect email takeover, server compromise, customer data exposure, payment diversion, or an unauthorized domain transfer, later decisions may need specialist incident response, legal, insurance, or regulatory help.

## Important note
This guide is general information, not legal, financial, forensic, cybersecurity, or professional advice. Follow your organization’s incident process where one exists, and use official registrar, DNS provider, CDN, FBI, CISA, and ICANN routes rather than links sent in suspicious messages.

## Additional Resources
- https://www.icann.org/resources/pages/securely-managing-domain-name-2020-08-26-en
- https://www.icann.org/resources/pages/unauthorized-2013-05-03-en
- https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en
- https://csrc.nist.gov/pubs/sp/800/81/r3/final
- https://www.ic3.gov/
- https://www.fbi.gov/investigate/cyber
- https://www.cisa.gov/reporting-cyber-incident
