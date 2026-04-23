---
title: "What to do if… a USB drive suddenly shows as empty or unformatted even though it had files"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "usb drive shows empty"
  - "usb says unformatted"
  - "usb drive needs formatting"
  - "usb drive suddenly raw"
  - "memory stick looks blank"
  - "pen drive not recognised"
  - "memory stick empty folders"
  - "usb files disappeared"
  - "usb drive corrupted"
  - "windows raw drive"
  - "mac usb not readable"
  - "usb drive unreadable"
  - "external storage data loss"
  - "removable media failure"
  - "usb drive file system error"
  - "usb drive detected but empty"
  - "usb not showing files"
  - "usb drive asks to format"
  - "help i lost my usb files"
  - "what do i do if my usb is blank"
  - "what do i do if usb says raw"
  - "what do i do if memory stick is empty"
  - "help i plugged in my usb and it is empty"
  - "my files are gone from my usb"
  - "my memory stick says format disk"
  - "my usb drive is unallocated"
  - "smell of burning from usb"
  - "usb drive getting very hot"
  - "clicking sound from usb drive"
  - "io device error usb"
  - "usb drive 0 bytes"
  - "missing files on thumb drive"
  - "usb stick error uk"
last_reviewed: "2026-03-17"
---
# What to do if… a USB drive suddenly shows as empty or unformatted even though it had files (UK)

## Short answer
Stop using the USB drive immediately and **do not click format, erase, or initialize**. Disconnect the drive to prevent the operating system from performing background writes that could overwrite your remaining data.

## Do not do these things
- Don't select **"Format disk"** or **"Initialize"** when the pop-up appears; this destroys the file system metadata needed for recovery.
- Don't run automated **"Fix"** or **"Repair"** tools (like CHKDSK or macOS First Aid) until you have a sector-by-sector clone of the drive.
- Don't keep the drive plugged in if it is **getting hot to the touch** or making clicking sounds.
- Don't save new files to the drive or attempt to install recovery software directly onto the affected USB.
- Don't attempt to "wiggle" the connector if it seems loose; physical stress can snap internal connections.

## What to do now
1. **Isolate the drive immediately to stop data degradation.**
   **Safely eject the USB drive from the computer and unplug it.**
   - Physical disconnection stops the computer from attempting to "index" or "fix" the corrupted file system, which can permanently delete file fragments.

2. **Perform a single low-impact hardware test.**
   **Connect the USB drive to a different computer or a different rear-panel USB port.**
   - Avoid using USB hubs or front-panel ports, which often provide inconsistent power.
   - If the files appear on another machine, **copy them immediately** to that computer's local storage.

3. **Check the drive status in Windows Disk Management.**
   **Right-click the Start button, select Disk Management, and locate your removable drive.**
   - If the status is **"RAW"**, the file system is corrupted but the hardware is likely functioning.
   - If the status is **"Unallocated"** or **"Not Initialized"**, the partition table is missing.
   - If the drive is not listed at all, it may have a physical hardware failure.

4. **Observe the drive in macOS Disk Utility.**
   **Open Disk Utility and select "View > Show All Devices" to see the hardware entry.**
   - Note if the drive capacity is reported correctly (e.g., 32GB) or shows as 0 bytes.
   - If you see the drive but it will not mount, **do not run First Aid** unless you have already made a backup image, as First Aid attempts to write repairs to the disk.

5. **Create a disk image for safe recovery attempts.**
   **Use a separate storage device to create a "sector-by-sector" clone of the USB drive.**
   - Perform all recovery software scans on this image file rather than the physical USB stick to prevent further wear or accidental writes.

6. **Identify triggers for professional lab escalation.**
   **Cease all DIY attempts if the drive displays any of the following symptoms:**
   - The drive is not detected in Disk Management or Disk Utility.
   - The drive makes a clicking or buzzing sound when plugged in.
   - The computer reports an "I/O Device Error".
   - The drive becomes too hot to hold comfortably.

7. **Comply with UK data protection reporting if personal data is involved.**
   **Determine if the lost files contain personal data belonging to UK citizens.**
   - If the drive belongs to an employer, notify your Data Protection Officer (DPO) or IT department immediately.
   - Under UK GDPR, organizations must report significant personal data breaches to the Information Commissioner's Office (ICO) **within 72 hours** of discovery.

## What can wait
- You do **not** need to decide whether to throw the drive away or replace it today.
- You do **not** need to buy recovery software immediately; many professional assessments are offered for a fixed diagnostic fee.
- You do **not** need to investigate how the corruption happened until the data is secured.

## Important reassurance
Seeing an "empty" drive or a "RAW" error often means the index of the files is broken, but the files themselves are still sitting on the memory chips. As long as you have not formatted the drive or written new data over it, the chance of a successful recovery remains high.

## Scope note
This guide provides first-step stabilization for logical or physical USB failure. It does not provide step-by-step instructions for specific data recovery software or physical circuit repair.

## Important note
This information is for general guidance and does not replace professional IT or forensic services. Handling a failing drive incorrectly can lead to permanent data loss. If the data is critical or involves sensitive personal information, contact a certified data recovery specialist or your organization's security team before proceeding with any software fixes.

## Additional Resources
- https://support.apple.com/en-gb/guide/disk-utility/dskutl1040/mac
- https://support.apple.com/en-gb/guide/disk-utility/dskud6b39edb/mac
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk
- https://support.microsoft.com/en-gb/office/restore-your-onedrive-fa231298-759d-41cf-bcd0-25ac53eb8a15
- https://support.microsoft.com/en-gb/office/recover-an-earlier-version-of-an-office-file-169cb166-e7e2-438e-8f39-9a8927828121
