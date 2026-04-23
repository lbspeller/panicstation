---
title: "What to do if… you discover your backups have not been running for a long time and you only just noticed"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "backups stopped"
  - "backup failure"
  - "backups not running"
  - "missed backups"
  - "no recent backup"
  - "backup schedule broken"
  - "backup job failing"
  - "backup warnings missed"
  - "restore point too old"
  - "data protection risk"
  - "what do i do if backups stopped"
  - "what do i do if my backup failed"
  - "what do i do if no backups found"
  - "what do i do if backup drive disconnected"
  - "help i have no recent backups"
  - "help i noticed backups failed"
  - "help i missed backup notifications"
  - "help i accidentally disabled backups"
  - "my backup drive is full"
  - "my backup software shows error"
  - "my cloud sync is not working"
  - "my server backups are stale"
  - "stale backup files"
  - "missing backup snapshots"
  - "backup destination unreachable"
  - "invalid backup credentials"
  - "red cross on backup icon"
  - "backup service not found"
  - "unexpected backup interruption"
  - "manual backup recovery"
last_reviewed: "2026-03-17"
---
# What to do if… you discover your backups have not been running for a long time and you only just noticed (UK)

## Short answer
Pause all non-essential system changes and create a manual, secondary copy of your most critical files to an external drive or cloud account immediately before attempting any software repairs.

## Do not do these things
- Do not uninstall or "reset to factory defaults" your backup software, as this may delete historical logs or configuration files needed for recovery.
- Do not run disk cleanup, permanent deletion of large files, or storage optimization until a fresh copy of current data is secured.
- Do not overwrite existing backup destinations with a "new" job until you have verified if the old destination still contains your last successful snapshot.
- Do not assume that "backup successful" messages in the system tray are accurate without performing a manual file-open test.
- Do not ignore unexplained service shutdowns or credential changes, which may indicate a security compromise rather than a technical glitch.

## What to do now
1. **Immediately pause all non-essential system changes.**  
   Stop any scheduled software updates, database migrations, or bulk file movements. If you are in a workplace, notify your IT lead or Data Protection Officer (DPO) that backups are stale before proceeding with any local fixes.

2. **Secure a "right now" manual safety copy of irreplaceable data.**  
   - Identify your most critical folders, such as active project files, financial records, or unique media.
   - Copy these manually to a physical external drive or a reputable cloud storage service that is separate from your main backup infrastructure.
   - Do not attempt to sync the entire system; focus only on the data created since the last successful backup date.

3. **Check for cues of data corruption or unauthorized access.**  
   Observe the system for:
   - Unexpected file extensions (e.g., .encrypted, .locked, or random strings).
   - "File not found" errors when opening common documents.
   - Sudden "Disk Full" warnings that appeared without a corresponding increase in your file usage.
   - Red "X" icons or "Service Disabled" alerts in your backup software dashboard.

4. **Identify the specific point of failure and logs.**  
   Open your backup management console and record:
   - The date and timestamp of the last successful backup.
   - The specific error code provided (e.g., "Destination Unreachable," "VSS Error," or "Authentication Failed").
   - Whether the physical destination (NAS or External Drive) is currently visible to the operating system.

5. **Protect the existing (stale) backup archive.**  
   Set your current backup storage to "Read-Only" mode if possible, or physically disconnect the backup drive once you have confirmed it contains your older snapshots. This prevents the "broken" job from accidentally purging old data to make room for a new, potentially corrupted run.

6. **Perform a "test restore" of a single small file.**  
   Before trusting the system again:
   - Select a non-critical file from your older, stale backup.
   - Restore it to a **new, different folder** (do not overwrite the original).
   - Open the file to ensure the data is readable and the backup integrity is intact.

7. **Assess UK reporting requirements for data availability.**  
   If this is a business system and the data loss or "lack of availability" affects personal data (names, addresses, customer records):
   - Determine if the loss of access poses a risk to individuals.
   - Under the Data (Use and Access) Act 2025 and UK GDPR, you may be required to notify the Information Commissioner’s Office (ICO) within 72 hours if a personal data breach has occurred.
   - If your organization falls under NIS2 regulations, the "Early Warning" notification window for significant incidents is 24 hours.

## What can wait
- You do not need to purchase a new backup subscription or change providers today.
- You do not need to implement a full "3-2-1" strategy (three copies, two media, one offsite) in the next hour; focus on the first secondary copy first.
- You do not need to delete old, stale backups to "save space" until you have verified your new backup routine is stable for at least one week.

## Important reassurance
Backup failures are often silent and happen to both individuals and large organizations. Noticing the issue now is the first step in preventing a total loss. By pausing and making a manual copy before "fixing" the software, you are following the standard recovery protocol used by professionals.

## Scope note
This guide provides first-step stabilization only. It does not cover forensic investigation of cyberattacks or technical repair of specific enterprise backup software suites.

## Important note
This information is for general guidance and does not constitute legal, technical, or regulatory advice. In the UK, data availability is a core requirement of the UK GDPR. If you suspect your backup failure is due to a cyberattack or involves sensitive personal data, consult a qualified IT security professional or your organization's DPO immediately.

## Additional Resources
- https://www.ncsc.gov.uk/collection/small-business-guide/backing-your-data
- https://www.ncsc.gov.uk/collection/ransomware-resistant-backups
- https://www.ncsc.gov.uk/collection/ransomware-resistant-backups/principles-for-ransomware-resistant-on-premises-backups
- https://www.ncsc.gov.uk/collection/ransomware-resistant-backups/principles-for-ransomware-resistant-cloud-backups
- https://www.ncsc.gov.uk/collection/using-online-services-safely/back-up-critical-data
