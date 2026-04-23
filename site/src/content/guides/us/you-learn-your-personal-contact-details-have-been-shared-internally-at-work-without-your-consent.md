---
title: "What to do if… you learn your personal contact details have been shared internally at work without your consent"
jurisdiction: "USA"
category: "Work & employment crises"
tags:
  - "work calendar entries disappearing"
  - "outlook calendar events missing"
  - "work meetings vanished"
  - "calendar appointments deleted"
  - "shared calendar tampering"
  - "calendar invites cancelled"
  - "calendar entries removed"
  - "suspect coworker interference"
  - "possible it security incident"
  - "microsoft 365 calendar missing"
  - "google workspace calendar events gone"
  - "exchange calendar changes unauthorized"
  - "delegate access calendar issues"
  - "calendar permissions changed"
  - "workplace digital sabotage"
  - "meetings removed from calendar help"
  - "calendar audit log access"
  - "work schedule erased"
  - "unsure who changed my calendar"
  - "help i lost my work meetings"
  - "what do i do if my calendar is being edited"
  - "what do i do if my meetings are disappearing"
  - "what do i do if my calendar permissions changed"
  - "my boss says i missed meetings but they are gone"
  - "missing invites in outlook"
  - "calendar sync error or sabotage"
  - "unauthorized mailbox access"
  - "hidden calendar rules"
  - "vanishing appointments at work"
  - "digital interference in workplace"
last_reviewed: "2026-03-17"
---
# What to do if… you learn your personal contact details have been shared internally at work without your consent (USA)

## Short answer
Treat this as a security incident: document the missing data immediately, check your account settings for unauthorized "rules" or "delegates," and report it to your IT Security or SOC team to preserve server-side audit logs.

## Do not do these things
- Do not confront the person you suspect of interference or send "test" calendar invites to them.
- Do not attempt to "fix" the issue by mass-restoring items from the trash, as this can overwrite the metadata IT needs for forensic logging.
- Do not change your password until you are on a known-secure device, as changing it on a compromised machine may reveal the new password to an attacker.
- Do not move work-related digital evidence (screenshots, logs) to a personal cloud account or personal email, as this may violate company data policies.
- Do not ignore the issue as a "sync error" if you notice a pattern of targeted deletions (e.g., only certain types of meetings or specific attendees).

## What to do now
1. **Document exactly what is missing and when you noticed it.** **Note down the specific titles of the missing meetings, the dates/times they were scheduled for, and the approximate time you last saw them on your calendar.**
   - Include details on whether the events were on your primary calendar or a shared/group calendar.
   - Note if the events still appear on your mobile device but not your desktop, or vice-versa.
2. **Take screenshots of the gaps and current permissions.** **Capture the current state of your calendar view, any "event cancelled" emails in your trash, and your current sharing/delegate settings.**
   - In Outlook: File > Account Settings > Delegate Access.
   - In Google Workspace: Settings > Sharing permissions.
3. **Check for unauthorized mailbox or calendar "Rules."** **Look for automated rules that may be moving, archiving, or deleting incoming meeting invites or existing entries.**
   - In Outlook, check "Manage Rules & Alerts."
   - In Google, check "Filters and Blocked Addresses" in Gmail settings, as these can affect calendar-synced emails.
4. **Identify the technical scope of the issue.** **Check your "Deleted Items" or "Trash" folder to see if the entries were moved there manually or by an automated process.**
   - Look for "Audit Logs" or "View History" if your organization allows end-user access to calendar change history.
5. **Report the incident to IT Security or the Security Operations Center (SOC).** **Submit a formal ticket specifically mentioning "unauthorized changes" or "potential account compromise" so they prioritize log preservation.**
   - Request that they review the "Unified Audit Log" (M365) or "Calendar Audit Logs" (Google Workspace).
   - Specifically ask them to check for "HardDelete" or "MoveToDeletedItems" actions and the IP address/device associated with those actions.
6. **Alert your manager to the operational impact.** **Provide a brief, factual update in writing that you are experiencing a technical issue with your calendar and have opened a security ticket.**
   - Focus on the risk to business continuity (e.g., missed client calls) rather than your suspicions of sabotage.
7. **Verify your account security status.** **Check your sign-in logs for any successful logins from unfamiliar locations or devices.**
   - If you see any unrecognized activity, inform IT immediately and follow their protocol for a forced logout/password reset.
8. **Consult HR if the interference appears retaliatory or discriminatory.** **If you believe the changes are tied to a protected activity (e.g., reporting harassment) or a protected class, file a separate factual report with HR.**
   - Note that state-level agencies, such as California’s Civil Rights Department (CRD), may have specific digital harassment protections that apply.

## What can wait
- You do not need to determine the "motive" for the interference today; focus on the technical evidence.
- You do not need to manually rebuild your entire schedule until IT confirms that the "source" of the deletions has been blocked or corrected.
- You do not need to decide on legal action or EEOC filing in the first hour; the priority is stabilizing your access and records.

## Important reassurance
Digital interference is a recorded technical event. Modern enterprise systems (M365/Google Workspace) track almost every action, including who deleted an entry, what device they used, and when it happened. By reporting this through official channels now, you are creating an immutable trail that protects your professional reputation.

## Scope note
This guide provides first-step stabilization for a technical and professional crisis. It focuses on evidence preservation and internal reporting. It does not replace legal advice regarding employment contracts or long-term litigation strategy.

## Important note
This information is for general guidance and is not legal or forensic advice. Security protocols and employee rights vary significantly by state and employer policy. If you suspect your data is being tampered with as part of a legal dispute, consult an employment attorney or a digital forensics professional.

## Additional Resources
- https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business-0
- https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business
- https://www.eeoc.gov/employers/small-business/employee-rights
- https://www.dol.gov/general/ppii
- https://consumer.ftc.gov/consumer-alerts/2024/04/when-companies-share-your-personal-information-without-your-permission
