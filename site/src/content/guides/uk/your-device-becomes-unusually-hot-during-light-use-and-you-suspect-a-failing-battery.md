---
title: "What to do if… your device becomes unusually hot during light use and you suspect a failing battery"
jurisdiction: "UK"
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
  - "bios cannot see drive"
  - "disk utility cant see disk"
  - "bitlocker recovery key needed"
  - "filevault recovery key needed"
  - "need data off the drive"
  - "recover files from dead laptop"
  - "accidental format warning"
  - "data recovery first steps"
  - "important photos and documents"
  - "computer failure after update"
  - "help i cant boot my computer"
  - "help i lost my files"
  - "what do i do if my hard drive died"
  - "what do i do if disk is missing"
  - "what do i do if no bootable device"
  - "what do i do if macbook folder question mark"
  - "my computer says 3f0 error"
  - "my laptop says no bootable device"
  - "smell of burning plastic from laptop"
  - "clicking noise from computer drive"
  - "grinding sound from laptop"
  - "visible smoke from device"
  - "unusual heat from underside"
  - "disk initialization warning"
  - "drive not initialized error"
  - "raw disk error"
last_reviewed: "2026-03-17"
---
# What to do if… your device becomes unusually hot during light use and you suspect a failing battery (UK)

## Short answer
Power off the device immediately to prevent further data corruption or physical degradation. Do not attempt to repair the operating system or "initialize" the drive until your files are safely backed up or recovered.

## Do not do these things
- Don’t reinstall Windows or macOS, as this process writes new data that may overwrite your files.
- Don’t click Initialize, Format, Erase, or Partition if prompted by a disk management tool.
- Don’t keep restarting the device to see if it works, as repeated power cycles can worsen mechanical failure.
- Don’t use DIY "data recovery" software that requires installation on the same failing drive.
- Don’t shake, tap, or open the sealed casing of a hard drive or laptop.
- Don’t ignore clicking, grinding, or whirring noises; these indicate physical failure that requires professional tools.

## What to do now
1. **Shut down the device and disconnect all external peripherals.** **If the device is making unusual noises or smells like burning, unplug it from the mains immediately.**
   - Document the exact error message (e.g., "No bootable device," "3F0 error," or a flashing folder with a question mark).
   - Note if the failure happened after a specific event like a drop, liquid spill, or power surge.

2. **Check for existing backups using a different, functional device.** **Log in to your cloud services or check physical backup drives to see if a recent version of your data already exists elsewhere.**
   - Check iCloud Drive / Photos (Mac) or OneDrive / Google Drive (Windows).
   - Verify if Time Machine or Windows Backup was running to an external disk or NAS.
   - If the data is safely backed up, the urgency of recovery is removed, and you can proceed with hardware repair.

3. **Perform a single, non-invasive detection check.** **Power the device on once and enter the system firmware or recovery environment to see if the physical drive is recognized.**
   - **Mac:** Hold Command + R during startup to enter macOS Recovery, then open Disk Utility and select "View > Show All Devices."
   - **Windows:** Press the specific key (usually F2, F10, F12, or Del) during startup to enter BIOS / UEFI and look for the drive under "Storage" or "Boot" menus.
   - If the drive is not listed here, it has likely suffered a hardware failure; power off immediately.

4. **Locate your encryption recovery keys if the drive is detected.** **You will need these keys to access any data on an encrypted drive that will not boot normally.**
   - **BitLocker (Windows):** Check `account.microsoft.com/devices/recoverykey` or `aka.ms/aadrecoverykey` for work / school accounts.
   - **FileVault (Mac):** Check the Passwords app on your iPhone or iPad signed into the same Apple Account, or look for a printed recovery key.

5. **Attempt a "read-only" data copy if the disk is visible.** **Connect the failing drive to another computer using an external enclosure or use "Target Disk Mode" (Mac) to copy folders to a healthy drive.**
   - Prioritize small, high-value files first (documents, spreadsheets, family photos).
   - Avoid copying large system files or "Programs" folders, which increase the stress on the drive.
   - If the copy process hangs or becomes extremely slow, stop immediately to preserve the drive.

6. **Exercise your UK consumer rights if the hardware is relatively new.** **Under the Consumer Rights Act 2015, if a drive fails prematurely due to a manufacturing fault, you may be entitled to a repair or replacement from the retailer.**
   - Note that retailers are generally not responsible for data recovery costs; ensure your data is recovered by a professional before handing the device over for a "replacement" that involves losing the original drive.

7. **Contact a professional data recovery service for critical data.** **If the drive is not detected in BIOS / Disk Utility or is making physical noises, specialist "clean room" recovery is the only safe option.**
   - Look for services that offer a "no data, no fee" guarantee.
   - Do not use standard PC repair shops for physical drive failure; they often lack the specialized equipment needed for head-stack replacement or firmware repair.

## What can wait
- You do not need to decide on a replacement laptop or storage upgrade right now.
- You do not need to troubleshoot why the operating system failed until the data is safe.
- You do not need to worry about software licenses or re-installing apps today.

## Important reassurance
A "disk not detected" error is often a logical failure of the boot sector rather than a total loss of data. By stopping work now and avoiding invasive "fixes," you significantly increase the chances that a professional or a careful secondary-disk mount can retrieve your files.

## Scope note
This guide provides first-step stabilization for digital data loss. It does not cover physical repair of hardware or long-term backup strategies.

## Important note
This information is for general guidance and does not replace professional IT or data recovery services. Data recovery is complex; if the files are of high financial or sentimental value, minimize all DIY attempts and consult a specialist. Powering on a physically failing drive can lead to permanent, irreversible data loss.

## Additional Resources
- https://support.apple.com/en-gb/101575
- https://support.apple.com/en-gb/103269
- https://www.dsfire.gov.uk/safety/home/battery-fires
- https://www.citizensadvice.org.uk/consumer/somethings-gone-wrong-with-a-purchase/return-faulty-goods/
- https://www.citizensadvice.org.uk/consumer/somethings-gone-wrong-with-a-purchase/claim-using-a-warranty-or-guarantee/
