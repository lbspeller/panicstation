---
title: "What to do if… you discover your backups have not been running for a long time and you only just noticed"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - backups stopped
  - backup failure
  - backups not running
  - missed backups
  - no recent backup
  - backup schedule broken
  - backup job failing
  - backup warnings missed
  - restore point too old
  - business data at risk
  - personal photos not backed up
  - cloud backup not syncing
  - backup drive unplugged
  - backup storage full
  - backup credentials expired
  - backup agent disabled
  - accidental deletion risk
  - ransomware recovery worry
  - backup integrity check
  - test restore
last_reviewed: "2026-03-09"
---

# What to do if… you discover your backups have not been running for a long time and you only just noticed (USA)

## Short answer
Stop making big changes, take a fresh safety copy of the most important data, then repair the backup and prove recovery with a small test restore.

## Do not do these things
- Don’t wipe and reinstall your backup tool first — you can erase the history that tells you when/why it failed.
- Don’t run “cleanup,” mass deletions, or drive reformatting to “start over” until you’ve captured a current copy.
- Don’t overwrite existing backup archives/snapshots until you’ve checked whether they contain your last usable restore point.
- Don’t assume a backup job that “runs” is recoverable — don’t relax until you restore a file **to a separate location** and open it.
- Don’t rule out compromise if the failure is unexplained (disabled services, changed credentials, unusual admin activity).

## What to do now
1. **Pause risky activity and announce it if needed.**  
   If this affects a team or business system: “Backups look stale — pausing changes until we take a fresh safety copy and confirm restore.”

2. **Create an immediate, independent safety copy of what you have today.**  
   - Copy the most irreplaceable folders (current work, photos, key project directories) to a second place: an external drive *or* a cloud storage account.  
   - Aim for “good enough right now,” not perfect.

3. **Quickly check for signs of data loss or an active incident.**  
   Look for missing files, suddenly unreadable documents, or suspicious file renaming/encryption. If anything looks off, minimize changes and treat it as a potential incident.

4. **Identify the last successful backup and the failure point.**  
   In your backup console/logs, record:
   - last successful run
   - first failed run and error
   - destination and retention settings
   - whether the destination is reachable and has space
   - whether credentials/keys/tokens expired  
   Save screenshots/notes before you change settings.

5. **Protect existing backup data before you “fix” the job.**  
   If you have an external/NAS/cloud destination:
   - avoid deleting old versions
   - if possible, make the destination read-only or disconnect it briefly while you verify what’s present (to prevent accidental overwrite)

6. **Fix the simplest non-destructive cause first.**  
   Common low-risk fixes:
   - reconnect the drive / re-authenticate the destination
   - resolve “storage full” by expanding capacity (not deleting backups)
   - re-enable schedules/services/agents
   - correct a changed path/share name  
   Avoid “reset everything” options until you’ve preserved what exists.

7. **Run a small backup, then do a real restore test.**  
   - Back up a small folder.  
   - Restore 1–2 files to a **different location** and open them.  
   This confirms recovery, not just copying.

8. **If there’s any chance this is tied to ransomware or destructive activity, follow US guidance and escalate.**  
   Use your organisation’s incident response process. Prioritize (a) **offline and/or otherwise protected backups** and (b) **regularly testing the availability and integrity of backups** with real restore tests, as recommended in US ransomware guidance, rather than trying ad-hoc fixes in the moment.

## What can wait
- You do **not** need to redesign your whole backup strategy today.
- You do **not** need to migrate to a new provider/tool immediately.
- You can postpone advanced improvements (immutable backups, 3-2-1 refinements, monitoring/alerting) until you’ve confirmed you can restore.
- You don’t need to do a full system rebuild right now unless there are clear signs of compromise or corruption.

## Important reassurance
This happens to a lot of people and organizations because backup failures can be silent. You’re not “behind forever” — the key is to stop risky changes, capture a safe copy now, and validate recovery with a test restore.

## Scope note
These are first steps to stabilize and prevent irreversible mistakes. If you suspect compromise, have regulated data, or the system is business-critical, the next phase usually requires experienced IT/security help.

## Important note
This is general information, not professional, legal, or security advice. If you suspect malware/unauthorized access, follow your incident response process and get qualified assistance.

## Additional Resources
- https://www.cisa.gov/stopransomware/ransomware-guide
- https://www.cisa.gov/sites/default/files/2025-03/StopRansomware-Guide%20508.pdf
- https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-184.pdf
- https://www.nist.gov/document/election-security-series-data-integrity-and-recovery-infographic