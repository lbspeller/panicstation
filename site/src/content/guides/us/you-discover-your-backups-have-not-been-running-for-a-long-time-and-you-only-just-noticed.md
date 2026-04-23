---
title: "What to do if… you discover your backups have not been running for a long time and you only just noticed"
jurisdiction: "USA"
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
  - "business data at risk"
  - "personal photos not backed up"
  - "cloud backup not syncing"
  - "backup drive unplugged"
  - "backup storage full"
  - "backup credentials expired"
  - "backup agent disabled"
  - "accidental deletion risk"
  - "ransomware recovery worry"
  - "backup integrity check"
  - "test restore"
  - "what do i do if backups stopped"
  - "what do i do if backup failed"
  - "what do i do if my cloud backup is old"
  - "what do i do if my backup drive is empty"
  - "help i have no current backup"
  - "help i noticed my backup is stale"
  - "help i just realized my backups are broken"
  - "my backup shows error"
  - "my backup logs are empty"
  - "my server has no backups"
  - "failed backup job"
  - "stale backup files"
  - "outdated restore point"
  - "broken sync"
  - "backup agent error"
  - "manual backup copy"
  - "external drive backup fail"
  - "missing cloud sync"
last_reviewed: "2026-03-17"
---
# What to do if… you discover your backups have not been running for a long time and you only just noticed (USA)

## Short answer
Isolate the current system state by taking a manual safety copy of critical data to a separate physical or cloud location before attempting any repairs or running new backup jobs.

## Do not do these things
- Don’t delete, "clean up," or overwrite any existing old backup archives to make room for new ones.
- Don’t restart or reinstall the backup software until you have manually exported or screenshotted the current error logs.
- Don’t run a "full sync" or "repair" operation immediately, as these can sometimes overwrite the only remaining good data if the source is corrupted.
- Don’t assume the current files on your drive are safe; treat the system as if it has no protection until the first new copy is verified.
- Don’t ignore the possibility of a security incident if the backup services were disabled without your intervention.

## What to do now
1. **Immediately perform a manual "drag-and-drop" copy of your most critical files to an independent device.**  
   - Use a clean external USB drive, a different cloud provider, or a separate network share.
   - Focus only on irreplaceable data (documents, unique photos, active project databases) to ensure the copy finishes quickly.

2. **Capture and save all current backup error messages and logs before making changes.**  
   - Take screenshots of the backup dashboard showing the last successful date and the specific error code.
   - Export log files to a text document if the software allows it; this evidence is vital for determining if data was lost during the "dark" period.

3. **Check the physical and logical connection of the backup destination.**  
   - Verify if the external drive is plugged in, the NAS is reachable on the network, or the cloud account is logged in.
   - Check for "Disk Full" or "Quota Exceeded" notifications on the destination storage.

4. **Verify the integrity of the oldest available backup before attempting a new run.**  
   - Attempt to "Mount" or "Explore" the last successful backup created before the failure started.
   - Try to restore a single small file from that old backup to a temporary folder to ensure the existing archive isn't also corrupt.

5. **Isolate the system from the network if you suspect the backup failure was caused by unauthorized access.**  
   - If the backup service was manually stopped or credentials were changed by an unknown party, disconnect the internet to prevent potential exfiltration or encryption.
   - Follow the CISA "StopRansomware" checklist for identifying indicators of compromise.

6. **Resolve the primary failure trigger using the least destructive method possible.**  
   - Re-authenticate expired cloud tokens or update passwords if prompted.
   - Clear space on the destination by moving (not deleting) old archives to secondary storage if the drive is full.

7. **Initiate a new, targeted backup job once the connection is restored.**  
   - Run a backup for a small, non-critical folder first to verify the software can successfully write to the destination.
   - Once the small test succeeds, start the full backup of all critical data.

8. **Perform a final verification restore to a different location.**  
   - Restore a random selection of files from the *new* backup.
   - Open these files to confirm they are not zero-byte files or unreadable.

## What can wait
- You do not need to purchase a new backup subscription or different software today.
- You do not need to reformat your computer or perform a system restore unless there is evidence of a virus.
- You can delay setting up "3-2-1" redundancy (three copies, two media types, one off-site) until the current data is stabilized.

## Important reassurance
Backup failures are often silent and affect many users. Discovering the failure now, before a total data loss event occurs, provides an opportunity to secure a fresh copy. Following a methodical "copy-then-repair" sequence minimizes the risk of accidental deletion.

## Scope note
This guide provides first-step stabilization for a noticed backup failure. It does not cover forensic data recovery for already deleted files or enterprise-level disaster recovery orchestration.

## Important note
This information is for general guidance and does not constitute professional IT or cybersecurity advice. If your data is subject to legal or regulatory requirements (such as HIPAA or CJIS), or if you suspect a criminal cyberattack, contact a qualified incident response professional or your organization's IT department immediately.

## Additional Resources
- https://www.ftc.gov/business-guidance/small-businesses/cybersecurity
- https://www.ftc.gov/business-guidance/blog/2020/12/ransomware-prevention-update-businesses
- https://www.ftc.gov/business-guidance/blog/2018/11/cybersecurity-small-business-ransomware
- https://nvlpubs.nist.gov/nistpubs/ir/2016/nist.ir.7621r1.pdf
- https://csrc.nist.gov/CSRC/media/Projects/ransomware-protection-and-response/documents/NIST_Tips_for_Preparing_for_Ransomware_Attacks.pdf
