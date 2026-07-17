---
title: "What to do if… you discover your backups have not been running for a long time"
seo_title: "Discovering your backups have stopped running"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "backups have not been running"
  - "backups stopped long ago"
  - "backup failure unnoticed"
  - "backup schedule broken"
  - "no recent backup"
  - "missed backup warnings"
  - "backup job failing"
  - "cloud backup not syncing"
  - "backup drive unplugged"
  - "backup storage full"
  - "what do i do if backups stopped"
  - "what do i do if backups failed"
  - "what do i do if no backup ran"
  - "what do i do if cloud backup stopped"
  - "help i missed backup warnings"
  - "help i have no recent backup"
  - "help i found stale backups"
  - "help i forgot backups"
  - "my backups are old"
  - "my backup drive was unplugged"
  - "last backup is old"
  - "restore point too old"
  - "backup console says failed"
  - "backup logs show errors"
  - "files not recently backed up"
  - "backup destination unreachable"
  - "backup credentials expired"
  - "backup agent disabled"
  - "syncronisation not backing up"
  - "back up not working"
  - "backup versus sync confusion"
  - "restore versus backup confusion"
  - "personal photos not backed up"
  - "business data at risk"
last_reviewed: "2026-07-17"
date_created: "2026-06-14"
---

# What to do if… you discover your backups have not been running for a long time (USA)

## Short answer
Stop making big changes, take a fresh separate safety copy of the most important data, then repair the backup only after you have preserved what still exists and proved recovery with a small restore test.

## Do not do these things
- Don’t uninstall, reset, or reinstall the backup tool as your first move; it may remove logs or settings that show when and why it failed.
- Don’t run cleanup tools, mass deletions, drive reformatting, or “start over” options until you have captured a current safety copy.
- Don’t overwrite, prune, or delete existing backup archives, snapshots, or old versions until you have checked whether they contain your last usable restore point.
- Don’t assume a backup job that “runs” is recoverable; confirm by restoring a file to a separate location and opening it.
- Don’t ignore signs of compromise, such as disabled services, changed credentials, unusual admin activity, missing files, unreadable files, or suspicious file renaming.

## What to do now
1. **Pause risky activity and tell affected people if needed.**  
   If this affects a team or business system, say something simple: “Backups look stale. Please pause non-urgent changes while we take a safety copy and confirm what can be restored.”

2. **Create an immediate safety copy of the most important data you still have.**  
   Copy irreplaceable folders, such as current work, photos, client files, accounting exports, or key project directories, to a separate external drive or a separate cloud location. Use a destination that is not the same broken backup job. After copying to an external drive, disconnect it if you can do so safely.

3. **Check whether this is only a backup failure or possibly a wider incident.**  
   Look for missing files, unexpectedly renamed files, unreadable documents, encryption notes, disabled security tools, new administrator accounts, or repeated login alerts. If anything looks suspicious, minimize changes, disconnect the affected device from the network if you can do so safely and without disrupting critical systems, and get qualified IT or security help before trying broad fixes.

4. **Find and record the last known good backup.**  
   In the backup console, cloud account, device history, or logs, write down:
   - the last successful backup date and time
   - the first failed backup date and error message
   - the backup destination
   - retention or version settings
   - whether the destination is reachable
   - whether storage is full
   - whether passwords, keys, tokens, or permissions changed

5. **Preserve existing backup data before repairing the job.**  
   Avoid deleting old versions or clearing space by removing backups. Where your tool allows it, protect the destination from accidental overwrite, such as by disconnecting an external drive, pausing automatic cleanup, or asking your IT provider to make the backup set temporarily read-only.

6. **Fix the simplest non-destructive cause first.**  
   Try low-risk repairs before resets:
   - reconnect the backup drive
   - sign back in to the backup account
   - restore permission to the backup folder or share
   - expand storage instead of deleting old backups
   - restart a stopped backup service or agent
   - correct a renamed folder, drive letter, or network path

7. **Run a small backup and then test a real restore.**  
   Back up a small folder first. Restore one or two files to a different location, open them, and check that the contents are correct. This proves recovery better than a “backup completed” message alone.

8. **For a business, regulated data, or possible ransomware, escalate rather than improvising.**  
   Use your organization’s incident response process, IT provider, or qualified security support. US CISA and NIST guidance generally emphasizes protected backups, offline or otherwise access-limited backup copies, and regular restore testing.

## What can wait
- You do not need to redesign your whole backup strategy today.
- You do not need to migrate to a new provider or tool immediately.
- You can postpone advanced improvements such as immutable backups, 3-2-1 refinements, alerting, and monitoring until you have a current safety copy and a verified restore.
- You do not need to rebuild the whole system right now unless there are clear signs of compromise, corruption, or hardware failure.

## Important reassurance
Backup failures are often silent, and many people only discover them when they check manually. Noticing the problem now still gives you useful options: preserve what exists, avoid destructive fixes, and prove what can actually be restored.

## Scope note
These are first steps to stabilize the situation and prevent irreversible mistakes. Later decisions about incident response, retention, compliance, insurance, system rebuilding, or backup redesign may need specialist IT, security, legal, or business support.

## Important note
This is general information, not legal, financial, security, privacy, technical, or other professional advice. If you suspect malware, unauthorized access, regulated-data exposure, or business-critical data loss, follow your incident response process and get qualified assistance.

## Additional Resources
- https://www.cisa.gov/stopransomware/ransomware-guide
- https://www.cisa.gov/audiences/state-local-tribal-and-territorial-government/secure-us-sltt/back-government-data
- https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-184.pdf
- https://www.nccoe.nist.gov/sites/default/files/legacy-files/msp-protecting-data-extended.pdf
- https://consumer.ftc.gov/articles/malware-how-protect-against-detect-and-remove-it
