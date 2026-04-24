---
title: "What to do if… you discover your backups have not been running for a long time and you only just noticed"
jurisdiction: "UK"
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
  - data protection risk
  - business files at risk
  - personal photos not backed up
  - cloud backup not syncing
  - backup drive disconnected
  - backup storage full
  - backup credentials expired
  - backup software misconfigured
  - accidental data loss risk
  - ransomware resilience worry
  - backup integrity check
last_reviewed: "2026-03-09"
---

# What to do if… you discover your backups have not been running for a long time and you only just noticed (UK)

## Short answer
Pause any “cleanup” actions and take a safe copy of what you have right now, then fix the backup job and do a small test restore to prove it actually works.

## Do not do these things
- Don’t uninstall/reinstall the backup app or “reset to defaults” yet — you can wipe the logs/settings you need to understand what happened.
- Don’t run disk “cleanup”, dedupe, or bulk deletions to save space until you’ve captured a fresh backup first.
- Don’t point the backup at a new empty destination and overwrite old snapshots without checking whether the old destination contains your last good backup.
- Don’t assume “backup completed” means “restorable” — avoid relying on a fix until you’ve restored a file to a different location.
- Don’t ignore the possibility of compromise if the failure is unexplained (for example, disabled services, changed credentials, unusual admin logins).

## What to do now
1. **Freeze the situation for 10 minutes.**  
   Stop any planned updates/migrations. If this is a work device, tell the relevant person/team “Backups appear stale — pausing changes until we take a fresh safety copy.”

2. **Make an immediate “right now” safety copy (separate from the broken system).**  
   - If you can, copy the most irreplaceable folders (work docs, photos, finance, password vault exports *only if you can protect them*) to **a second place**: an external drive *or* a reputable cloud storage account.  
   - Keep it simple: you’re buying time, not perfecting a strategy.

3. **Check whether anything has already been lost or corrupted.**  
   Look for recent “oh no” signs: missing folders, unexpected encryption/extension changes, lots of renamed files, or errors opening common documents. If you see anything like that, treat it as a potential incident and **avoid making more changes**.

4. **Find the last known good backup date and why it stopped.**  
   In your backup tool (or system logs), note:
   - last successful run date/time
   - last failure date/time and error message
   - destination location (NAS, external disk, cloud bucket)
   - whether the destination is reachable and has space
   - whether credentials/keys expired or changed  
   Take screenshots/notes — you may need this if it’s a managed service or workplace system.

5. **Protect the old backup set before “fixing” anything.**  
   If your backups live on an external drive/NAS/cloud:
   - **Do not delete old snapshots.**
   - If possible, **make the existing backup destination read-only** or disconnect it temporarily while you verify what’s there (so a misconfigured job can’t overwrite it).

6. **Fix the simplest likely cause first (without destructive changes).**  
   Common low-risk fixes:
   - reconnect the backup drive / re-map the network share
   - clear “disk full” by expanding storage (not deleting backups)
   - re-enter/refresh credentials for the backup destination
   - re-enable a disabled schedule/service  
   Avoid “start from scratch” options unless you’ve preserved what exists.

7. **Run a small backup, then a small restore test.**  
   - Run a backup of a small folder.  
   - Restore **one or two files** to a **different location** (not over the originals) and open them.  
   This is the moment you find out whether you’re truly safe again.

8. **If this is a business/personal-data system, do a quick UK “impact check.”**  
   If there’s reason to think this is part of a **security incident involving personal data** (for example, malware, unauthorised access, or deliberate destruction) follow your organisation’s incident process and use ICO guidance to assess whether it’s a personal data breach and whether reporting/notification may be required. If you’re unsure, escalate internally (DPO/IT/security) rather than guessing.

## What can wait
- You do **not** need to redesign your entire backup strategy right now.
- You do **not** need to decide whether to change tools/providers today.
- You do **not** need to run full-disk cloning, deduplication, or re-encryption immediately.
- You can postpone “nice to have” improvements (3-2-1, immutability, monitoring) until you’ve proven you can restore.

## Important reassurance
Noticing late is common — backups often fail quietly. The safe move is exactly what you’re doing: stop risky changes, capture what exists, and verify a restore before you trust anything.

## Scope note
This is first-steps-only to stabilise and reduce the chance of irreversible loss. If this is a workplace system, regulated environment, or you suspect compromise, you’ll likely need specialist IT/security support for the next phase.

## Important note
This is general information, not legal, regulatory, or professional advice. If you suspect malware/unauthorised access or personal data impact, follow your organisation’s incident process and get qualified help.

## Additional Resources
- https://www.ncsc.gov.uk/blog-post/offline-backups-in-an-online-world
- https://www.ncsc.gov.uk/collection/10-steps/data-security
- https://www.ncsc.gov.uk/guidance/gdpr-security-outcomes
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/
- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/a-guide-to-data-security/