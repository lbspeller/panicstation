---
title: "What to do if… a USB drive suddenly shows as empty or unformatted even though it had files"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - usb drive shows empty
  - usb says unformatted
  - usb drive needs formatting
  - usb drive suddenly raw
  - flash drive looks blank
  - thumb drive not readable
  - usb files disappeared
  - usb drive corrupted
  - windows raw drive
  - mac usb not readable
  - usb drive unreadable
  - external storage data loss
  - removable media failure
  - usb drive file system error
  - usb drive detected but empty
  - usb not showing files
  - usb drive asks to format
  - flash drive says format
last_reviewed: "2026-03-09"
---

# What to do if… a USB drive suddenly shows as empty or unformatted even though it had files (USA)
## Short answer
Stop immediately and **do not format, erase, or run repair actions yet**. Keeping the drive unchanged is the best way to preserve recoverable data.

## Do not do these things
- Don’t click **Format**, **Initialize**, **Erase**, or “Fix/Repair disk” prompts if you want the old files back.
- Don’t run repair utilities that **write changes to the drive** unless you’re working from an image/clone or you’ve accepted the risk.
- Don’t keep trying on lots of computers if the device is unstable (disconnecting, overheating, odd behavior).
- Don’t copy new files onto the USB “to test it”.
- Don’t plug it into a work network or critical system if you don’t fully trust where the USB has been.

## What to do now
1. **Pause and prevent accidental changes.**  
   Safely eject the USB and set it aside. Your goal is to avoid writes and repeated mount attempts.

2. **Do one low-risk connection check.**  
   Try a different USB port (no hub), or a different adapter/cable if applicable. If you can, try a different computer.  
   - If it opens normally elsewhere, **copy the most important files off first** to a safe location.

3. **Check what Windows sees—without fixing anything.**  
   Open **Disk Management** and locate the USB.  
   - If it shows **RAW**, **Unallocated**, “Unknown”, or “Not initialized”, stop—**don’t initialize/format**.  
   - If it shows the right capacity but no files, treat it as a recovery situation.

4. **Check what macOS sees—without erasing.**  
   Open **Disk Utility** and select the device (not just the volume). Note what it reports (size, whether it mounts, file system).  
   - Apple’s “First Aid” is the normal built-in way to check/repair a disk, but it can make changes. If the files are irreplaceable and you don’t already have a copy, consider **imaging the drive first** or using professional recovery **before** running repairs.

5. **Recover first, repair later (safer order).**  
   A safer pattern is: **create a sector-by-sector image/clone to a separate drive, then attempt recovery from the copy**.  
   - Use a destination drive that’s at least as large as the USB, clearly label drives so you don’t overwrite the wrong one, and keep the original unplugged once the image is made.

6. **Escalate if the data is important or the device is failing.**  
   Use a reputable **data recovery service** if the USB shows 0 bytes, repeatedly disconnects, gets hot, or is physically damaged. Tell them you have *not* formatted it and want a **read-only evaluation**.

7. **If the USB had sensitive data, treat it as a security incident too.**  
   If it contains workplace/customer/student/medical info or anything confidential: **notify your organization’s IT/security team or privacy officer** and follow their process. Avoid “testing” it on multiple organizational machines.

## What can wait
- You don’t need to decide right now whether the USB is permanently broken.
- You don’t need to run repair commands today—wait until you’ve imaged it or accepted the risk.
- You don’t need to redesign your backup strategy in this moment—focus only on not making recovery harder.

## Important reassurance
This situation is common: the computer can detect the USB hardware but can’t read the file system. In many cases, data can still be recovered—**the main danger is overwriting it with a format/erase or repair that writes changes**.

## Scope note
This is first-steps-only guidance to stabilize and avoid irreversible mistakes. The right recovery approach depends on whether the failure is logical (corruption) or physical (hardware).

## Important note
This is general information, not professional IT, legal, or forensic advice. If you’re dealing with regulated or confidential data, follow your organization’s security and privacy requirements and consider professional recovery rather than trial-and-error fixes.

## Additional Resources
- https://www.cisa.gov/sites/default/files/publications/RisksOfPortableDevices.pdf
- https://www.cisa.gov/resources-tools/training/protect-physical-security-your-digital-devices
- https://csrc.nist.gov/pubs/sp/1334/final
- https://support.apple.com/102611
- https://support.apple.com/guide/disk-utility/dskutl1040/mac