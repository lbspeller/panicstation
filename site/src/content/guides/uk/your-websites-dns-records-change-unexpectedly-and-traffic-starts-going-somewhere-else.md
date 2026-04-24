---
title: "What to do if… your website’s DNS records change unexpectedly and traffic starts going somewhere else"
jurisdiction: "UK"
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

# What to do if… your website’s DNS records change unexpectedly and traffic starts going somewhere else (UK)

## Short answer
Treat this like an account takeover. Regain control at the **domain registrar**, stop further changes, then restore the correct **nameservers/DNS** from a known-good record.

## Do not do these things
- Don’t keep “trying random fixes” in DNS settings — you can overwrite evidence and make recovery slower.
- Don’t assume it’s “just propagation” if users are consistently landing somewhere else.
- Don’t reply to messages claiming to be your registrar/DNS provider using their provided phone numbers or links.
- Don’t post screenshots of admin panels, ticket IDs, or DNS details publicly while you’re still containing the incident.
- Don’t reset every password everywhere in a panic before you’ve regained control of the registrar/DNS accounts you actually need.

## What to do now
1. **Get to a safer admin setup (minutes).**
   - Use a known-clean device if you can (or a different machine/account than the one you normally administer from).
   - Pause any automation that might “fight” your fixes (DNS sync tools, CI jobs that push DNS, registrar/DNS APIs).

2. **Lock down the registrar account first (this is the control point).**
   - Log in to your **domain registrar** and immediately:
     - Change the password to a strong unique one.
     - Enable **MFA/2-step verification**.
     - Turn on **Registrar Lock / Domain Lock** (to block transfers and reduce unauthorized changes).
     - If your registrar offers it (and your domain supports it), ask support about **Registry Lock** as an extra layer.
   - Remove anything you don’t recognize: extra users, delegated access, API tokens, forwarding/recovery email addresses or phone numbers.

3. **Capture what changed (before you “fix everything”).**
   - Take screenshots/exports of:
     - Current **nameservers (NS)** set at the registrar.
     - DNS provider/CDN audit logs (record changes, API activity).
     - Any WHOIS/registrant contact changes (if visible to you).
   - Write a short timeline (UK time): when you noticed, what visitors see, and what you changed (if anything).

4. **Restore delegation first (nameservers), then restore the DNS records.**
   - If the **nameservers were changed**, set them back to your correct DNS provider/CDN values (from a known-good internal record or prior ticket/onboarding details).
   - If nameservers are correct but **records were modified**, restore from your last known-good DNS export/template.
   - If you don’t have a known-good copy, restore only the minimum needed to bring the site back safely (A/AAAA/CNAME for the web service), then add the rest carefully.

5. **Check DNSSEC/DS status so you don’t get “stuck.”**
   - In the registrar panel, check whether **DNSSEC** is enabled and whether the **DS record** was changed or removed.
   - If DNSSEC was altered, coordinate restoration with your DNS provider/registrar (a mismatched DS can stop valid resolution or keep pointing to attacker-controlled signing).

6. **Escalate to the right UK parties based on your domain.**
   - Contact your **registrar’s security/abuse team** and state: “Unauthorised DNS/name server changes; suspected domain hijack.” Ask them to:
     - Freeze/lock changes if they can apply a stronger hold.
     - Confirm whether changes came from login, API token, or support-assisted action.
     - Preserve and share the full change history/audit logs.
   - If your domain is **.uk / .co.uk / .org.uk**, you can also contact **Nominet** support about suspected hijack/unauthorised changes (alongside your registrar).

7. **Contain the likely entry points (do this in parallel).**
   - Secure the email inbox used for registrar/DNS resets:
     - Change password, enable MFA, check for forwarding rules and unfamiliar “app passwords” or connected apps.
   - Secure your DNS provider/CDN account (MFA, revoke tokens, review access).
   - If you suspect a compromised admin device, stop using it for admin logins until it’s cleaned.

8. **Reduce harm to visitors while recovery is in progress.**
   - Pause ads/email campaigns that drive people to the domain until you verify resolution is back to normal.
   - Warn staff not to log into admin portals via the domain until you confirm it resolves correctly (use known-good direct URLs only).
   - If you control the correct hosting, temporarily serve a simple maintenance page and disable risky features until stable.

9. **Report if it looks criminal or impacts customers.**
   - For serious cyber incidents, use the UK **NCSC “Report a Cyber Incident”** service.
   - For cyber crime/fraud affecting England/Wales/Northern Ireland, use **Report Fraud** (Scotland: report via **Police Scotland on 101** as directed).

## What can wait
- You don’t need to decide today whether to move registrars, redesign DNS, or rebuild hosting.
- You don’t need to “perfect” every DNS record immediately — restore core web resolution safely first.
- Deep forensics can wait until you’ve locked the domain and stopped ongoing changes.

## Important reassurance
A DNS diversion feels dramatic because a single change can reroute everything. A calm order of operations — regain control, freeze changes, restore known-good, then harden accounts — usually stops the damage quickly.

## Scope note
This is first-step guidance for the first hours. If you suspect wider compromise (email takeover, server breach, customer data exposure), you may need specialist incident response support.

## Important note
This guide is general information, not legal or professional security advice. If you can’t confidently restore a known-good configuration or the attacker may still have access, prioritise containment (locks, MFA, access revocation) and work with your registrar/DNS provider security teams.

## Additional Resources
- https://www.ncsc.gov.uk/files/Advisory-DNS-hijacking.pdf
- https://www.ncsc.gov.uk/guidance/managing-public-domain-names
- https://www.ncsc.gov.uk/report-an-incident
- https://report.ncsc.gov.uk/
- https://www.reportfraud.police.uk/reporting-a-fraud/
- https://www.icann.org/resources/pages/lost-domain-names