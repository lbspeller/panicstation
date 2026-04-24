---
title: "What to do if… a USB drive suddenly shows as empty or unformatted even though it had files"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - usb drive shows empty
  - usb says unformatted
  - usb drive needs formatting
  - usb drive suddenly raw
  - flash drive looks blank
  - pen drive not recognised
  - memory stick empty folders
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
last_reviewed: "2026-03-09"
---

# What to do if… a USB drive suddenly shows as empty or unformatted even though it had files (UK)
## Short answer
Stop using the USB drive immediately: **don’t format it, don’t erase it, and don’t run “repair” actions yet**. Your best chance of recovery is keeping the drive unchanged while you confirm what the computer is actually seeing.

## Do not do these things
- Don’t click **“Format disk”**, **“Initialize”**, **“Erase”**, or similar prompts if you want the old files back.
- Don’t run “fix/repair” tools that **write changes to the USB** unless you’ve accepted the risk or you’re working from an image/clone.
- Don’t keep unplugging/replugging repeatedly if it’s disconnecting, getting hot, or behaving erratically—pause and switch to safer checks.
- Don’t save, download, or install anything **onto the same USB** “to test it”.
- Don’t plug it into a work or sensitive machine if it came from an unknown source—use a safer, non-critical device if you can.

## What to do now
1. **Freeze the situation (protect what might still be there).**  
   Safely eject the USB. Put it aside. This reduces accidental writes and repeated “mount” attempts.

2. **Do one low-risk hardware check.**  
   Use a different USB port (avoid hubs), or a different adapter/cable if it’s not a standard USB stick. If available, try a different computer.  
   - If it opens normally elsewhere, **copy the most important files off first** (to the computer or another drive).

3. **Check what Windows says—without “fixing” anything.**  
   Open **Disk Management** (built in) and find the USB.  
   - If it shows **RAW**, **Unallocated**, or “Unknown/Not initialised”, stop—**don’t initialise or format**.  
   - If it shows the correct capacity but looks empty, treat it as a recovery situation.

4. **Check what macOS says—without erasing.**  
   Open **Disk Utility** and select the device (not just the volume). Note what it reports (size, whether it mounts, file system).  
   - Apple’s “First Aid” is the normal built-in way to check/repair a disk, but it can make changes. If the files are irreplaceable and you don’t already have a copy, consider **imaging the drive first** or going to professional recovery **before** running repairs.

5. **If the files matter, switch from “fixing” to “recovering”.**  
   The safest pattern is usually: **make a sector-by-sector image/clone to a separate drive, then attempt recovery from the copy**, not the original.  
   - Use a destination drive that’s at least as large as the USB, clearly label drives so you don’t overwrite the wrong one, and keep the original unplugged once the image is made.

6. **Escalate early if it’s important or the device seems to be failing.**  
   Use a reputable **data recovery service** (especially if it repeatedly disconnects, shows 0 bytes, gets unusually warm, or is physically damaged). Tell them you have *not* formatted it and want a **read-only assessment/recovery**.

7. **If it contains personal or sensitive data, treat it as a security incident too.**  
   If this USB is for work/school, client data, or anything confidential: **tell your organisation’s IT/security team or data protection lead promptly** and follow their incident process. Don’t “test” it on multiple organisational devices.

## What can wait
- You do **not** need to decide today whether the USB is “dead” or buy a replacement.
- You do **not** need to run repair commands right now—wait until you’ve imaged it or accepted the risk.
- You do **not** need to reorganise backups today—focus only on preserving what’s on this drive.

## Important reassurance
This is a common failure mode: the computer can detect the device but can’t read the file system. In many cases, files are still recoverable—**the biggest risk is accidental overwriting from formatting/erasing or “helpful” repairs**.

## Scope note
This covers first steps to avoid making data loss worse and to buy time. Recovery depends on whether the failure is logical (corruption) or physical (hardware).

## Important note
This is general information, not professional IT or forensic advice. If the USB contains sensitive information, follow your organisation’s security and data protection policies and consider professional recovery rather than trial-and-error fixes.

## Additional Resources
- https://www.ncsc.gov.uk/collection/device-security-guidance/policies-and-settings/using-peripherals-securely
- https://www.ncsc.gov.uk/guidance/secure-sanitisation-storage-media
- https://support.apple.com/en-gb/102611
- https://support.apple.com/en-gb/guide/disk-utility/dskutl1040/mac
- https://www.cisa.gov/sites/default/files/publications/RisksOfPortableDevices.pdf