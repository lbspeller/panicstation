---
title: "What to do if… you discover your backups have not been running for a long time"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "backups not running"
  - "backups stopped working"
  - "backup failure discovered"
  - "missed backup schedule"
  - "no recent backup"
  - "backup job failing"
  - "backup warnings missed"
  - "old backup only"
  - "backup drive disconnected"
  - "cloud backup not syncing"
  - "what do i do if backups stopped"
  - "what do i do if backups failed"
  - "what do i do if backups are old"
  - "what do i do if backup did not run"
  - "help i found no backup"
  - "help i missed backup warnings"
  - "my backups have stopped"
  - "my backup drive was unplugged"
  - "my cloud backup is stale"
  - "my files are not backed up"
  - "missing backup logs"
  - "backup storage full"
  - "expired backup credentials"
  - "backup service disabled"
  - "files may be lost"
  - "files may be corrupted"
  - "ransomware backup worry"
  - "restore point too old"
  - "sync mistaken for backup"
  - "backup confused with archive"
  - "backup confused with cloud sync"
  - "backups not runing"
  - "backup failiure"
  - "work files not backed up"
last_reviewed: "2026-05-10"
date_created: "2026-05-10"
---

# What to do if… you discover your backups have not been running for a long time (UK)

## Short answer
Pause cleanup, migrations, and major changes. Preserve any old backup set, make a separate safety copy of the most important current files, then fix the backup job only after you have checked the last known good backup.

## Do not do these things
- Don’t uninstall or reinstall the backup app, reset it to defaults, or clear its settings yet; that may remove or overwrite logs and settings you need.
- Don’t run disk cleanup, deduplication, bulk deletion, or “optimisation” tools until you have made a fresh safety copy.
- Don’t delete, prune, reinitialise, adopt, or overwrite an old backup destination until you have checked what it contains.
- Don’t assume “backup completed” means “restorable”; do not trust the fix until you have restored a file to a different location and opened it.
- Don’t ignore possible compromise if the failure is unexplained, especially if you see disabled services, changed credentials, unusual administrator logins, renamed files, or unexpected encrypted files.

## What to do now
1. **Pause risky changes.**  
   Stop planned updates, migrations, cleanups, large imports, and storage changes. If this is a work device or shared system, tell the relevant person or team: “Backups appear stale. I am pausing changes until we have a safety copy and have checked the last good backup.”

2. **Make a separate “right now” safety copy.**  
   Copy the most irreplaceable current folders, such as work documents, photos, accounts files, project files, and key configuration exports, to a second place that is not part of the failed backup job. This could be an external drive or a reputable cloud storage account. Avoid exporting a password vault unless the vault tool can make an encrypted export and you can store it safely.

3. **Check for signs that this is more than a missed schedule.**  
   Look for missing folders, lots of renamed files, unexpected file extensions, errors opening common documents, disabled backup services, changed backup credentials, or unexpected administrator activity. If you see these, treat it as a possible security incident and avoid making more changes.

4. **Find the last known good backup.**  
   In the backup tool, dashboard, destination, or system logs, write down:
   - the last successful backup date and time
   - the first failed backup date and time
   - the exact error message
   - the backup destination, such as external drive, NAS, cloud account, or storage bucket
   - whether the destination is reachable
   - whether the destination is full
   - whether credentials, keys, permissions, or licences expired or changed

5. **Protect the old backup set before repairing the job.**  
   Do not delete old snapshots or retention points. If your system supports it, make the old backup destination read-only, disconnect the drive, remove write access, or take a snapshot of the destination before you run the backup job again.

6. **Fix the simplest non-destructive cause first.**  
   Try the lowest-risk repair that matches the error: reconnect the backup drive, re-map the network share, restore access to the cloud destination, refresh expired credentials, re-enable the schedule, restart the backup service, or add a new destination for new backups after preserving the old one. Avoid “start again” or “reset repository” options unless the old backup set is protected.

7. **Run a small backup and a small restore test.**  
   Back up one small folder first. Restore one or two files to a different location, not over the originals, and open them. Only then treat the backup job as working again.

8. **If this involves work systems or personal data, escalate early.**  
   If this is a workplace, client data, customer data, patient data, school data, charity data, or any other personal-data system, follow your organisation’s incident process. If malware, unauthorised access, or deliberate deletion may be involved, ask the responsible IT, security, manager, or data protection contact to assess whether this may be a personal data breach.

## What can wait
- You do not need to redesign your entire backup strategy right now.
- You do not need to decide today whether to change tools, vendors, drives, or cloud providers.
- You do not need to run full-disk cloning, deduplication, re-encryption, or large migrations immediately.
- You can postpone longer-term improvements such as extra copies, protected backups, alerting, and monitoring until you have a current copy and have proved that restore works.

## Important reassurance
Backups often fail quietly, and noticing late does not mean everything is already lost. The safest first move is to slow down, protect what still exists, check the last good backup, and prove restore before trusting the system again.

## Scope note
These are first steps only to stabilise the situation and reduce the chance of irreversible data loss. Later decisions may need specialist IT, cyber security, data protection, or managed service support.

## Important note
This is general information, not legal, regulatory, technical, cyber security, financial, or professional advice. If you suspect malware, unauthorised access, or personal data impact, follow your organisation’s incident process and get qualified help.

## Additional Resources
- https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/always-back-up-your-most-important-data
- https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/1-backing-up-your-data
- https://www.ncsc.gov.uk/collection/10-steps/data-security
- https://www.ncsc.gov.uk/collection/ransomware-resistant-backups
- https://www.ncsc.gov.uk/blog-post/offline-backups-in-an-online-world
- https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/
- https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/security/a-guide-to-data-security/
