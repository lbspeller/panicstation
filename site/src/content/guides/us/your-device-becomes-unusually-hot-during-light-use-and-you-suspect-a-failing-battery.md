---
title: "What to do if… your device becomes unusually hot during light use and you suspect a failing battery"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "startup disk not detected"
  - "startup disk missing"
  - "boot disk not found"
  - "no boot device found"
  - "disk not showing up"
  - "drive not detected"
  - "ssd not detected"
  - "hard drive not detected"
  - "mac wont boot"
  - "windows wont boot"
  - "uefi drive missing"
  - "bios cannot see drive"
  - "disk utility missing drive"
  - "bitlocker recovery key needed"
  - "filevault recovery key needed"
  - "need files off the drive"
  - "recover photos and documents"
  - "accidental format warning"
  - "data recovery first steps"
  - "computer failure after update"
  - "what do i do if startup disk is not detected"
  - "what do i do if my drive is missing"
  - "what do i do if mac says no startup disk"
  - "what do i do if windows boot device is missing"
  - "help i cannot find my startup disk"
  - "help i need data from a dead drive"
  - "my computer says no boot device"
  - "my mac shows a flashing question mark"
  - "flashing folder with question mark"
  - "internal drive not appearing in bios"
  - "drive clicking or grinding"
  - "unusual heat from laptop drive"
  - "disk unallocated error"
  - "disk not initialized error"
last_reviewed: "2026-03-17"
---
# What to do if… your device becomes unusually hot during light use and you suspect a failing battery (USA)

## Short answer
Power off the device immediately to prevent further damage or data overwriting. Avoid any prompts to "initialize," "format," or "erase" the drive, and use a secondary device to check for existing cloud or external backups before attempting recovery.

## Do not do these things
- Do not keep rebooting the device repeatedly; each power cycle risks further hardware degradation.
- Do not accept prompts to **Initialize**, **Format**, **Erase**, or **Partition** the drive if it appears as "Unknown" or "Unallocated."
- Do not run "Reset this PC," "Reinstall macOS," or "Startup Repair" until you have secured a copy of your critical files.
- Do not keep the device powered on if you hear clicking, grinding, or buzzing noises coming from the chassis.
- Do not open sealed laptop cases or internal drive enclosures, as exposure to dust can permanently destroy data on mechanical drives.
- Do not use "Free" recovery software that requires installing it directly onto the failing device.

## What to do now
1. **Power off the device and document the exact error message.** 
   **Note the specific phrasing, such as "No Bootable Device," "Insert Boot Media," or a flashing folder with a question mark.** 
   - Write down any events that preceded the failure, such as a drop, liquid spill, power surge, or software update.

2. **Check for existing backups from a different computer or mobile device.** 
   **Verify if your critical files are already synced to cloud services or saved on external hardware.** 
   - Check Microsoft OneDrive, Apple iCloud, Google Drive, or Dropbox.
   - Look for external Time Machine drives (Mac) or File History backups (Windows).
   - If the data is safely backed up elsewhere, you can proceed with hardware repairs or OS reinstallation later.

3. **Locate your encryption recovery keys immediately.** 
   **Retrieve your BitLocker or FileVault recovery keys from your online account records.** 
   - For Windows: Visit `account.microsoft.com/devices/recoverykey` on a working device.
   - For Mac: Check the Passwords app on a synced iPhone/iPad or visit `appleid.apple.com`.
   - If the device was issued by work or school, contact their IT department for the managed recovery key.

4. **Perform a single, non-destructive detection check in the system firmware.** 
   **Disconnect all non-essential USB hubs, docks, and peripherals before checking if the drive is visible to the hardware.** 
   - For Windows: Enter BIOS/UEFI (usually by tapping F2, F12, or Del during startup) and check the "Storage" or "Boot" section for your internal drive's model name.
   - For Mac: Hold the Power button (Silicon) or Command+R (Intel) to enter Recovery Mode, then open **Disk Utility** and select **View > Show All Devices**.
   - If the drive is not listed in BIOS/UEFI or Disk Utility, the failure is likely physical hardware and requires professional assistance.

5. **Attempt a "Copy-First" recovery if the drive is detected but won't boot.** 
   **Focus exclusively on reading and copying irreplaceable files to an external drive rather than fixing the operating system.** 
   - Use Mac Target Disk Mode (connecting two Macs via Thunderbolt) or a bootable Linux "Live USB" on a PC to browse the file system without mounting it as a boot drive.
   - Prioritize small, high-value files like documents, tax records, and family photos first.

6. **Shut down and stop all attempts if the drive behaves inconsistently.** 
   **Cease troubleshooting if the drive frequently disappears, runs extremely hot, or causes the system to freeze during file browsing.** 
   - Continued use of a failing SSD or HDD can lead to "cell exhaustion" or head crashes, making professional recovery impossible.

## What can wait
- You do not need to decide whether to repair or replace the computer right now.
- You do not need to diagnose the specific root cause (e.g., firmware vs. physical) before securing your data.
- You do not need to worry about "fixing" the operating system or clearing error messages today.

## Important reassurance
Seeing a "disk not detected" message is a common failure state and does not automatically mean your data is deleted. Many startup failures are caused by corrupted boot records or loose connections rather than a total wipe of the storage media. By stopping now and avoiding "erase" commands, you are preserving the best possible chance for a successful recovery.

## Scope note
This guide provides first-step stabilization for digital data preservation. It does not cover advanced forensic recovery, physical drive repair, or cleanroom procedures required for total hardware failure.

## Important note
This information is for general guidance and does not replace professional data recovery services or certified IT support. If your data is of high financial or personal value and the drive is not detected by the system firmware, minimize power-on attempts and consult a professional data recovery lab. Incorrectly handled hardware can result in permanent, irreversible data loss.

## Additional Resources
- https://support.apple.com/guide/iphone/important-safety-information-iph301fc905/ios
- https://support.apple.com/15-inch-macbook-pro-battery-recall
- https://support.microsoft.com/en-us/surface/battery/caring-for-your-surface-battery
- https://support.microsoft.com/en-us/surface/battery/surface-battery-won-t-charge-or-surface-won-t-run-on-battery
- https://support.google.com/pixelphone/answer/6090599?hl=en
