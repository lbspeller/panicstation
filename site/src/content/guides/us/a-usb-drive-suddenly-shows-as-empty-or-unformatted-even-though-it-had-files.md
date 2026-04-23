---
title: "What to do if… a USB drive suddenly shows as empty or unformatted even though it had files"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "usb drive shows empty"
  - "usb says unformatted"
  - "usb drive needs formatting"
  - "usb drive suddenly raw"
  - "flash drive looks blank"
  - "thumb drive not readable"
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
  - "flash drive says format"
  - "what do i do if usb is empty"
  - "what do i do if usb drive shows raw"
  - "what do i do if files disappeared from usb"
  - "what do i do if flash drive says unformatted"
  - "help i lost files on usb"
  - "help i cannot read my usb"
  - "help i accidentally formatted usb"
  - "help i unplugged usb mid-transfer"
  - "my usb drive is blank"
  - "my flash drive is unreadable"
  - "my thumb drive is raw"
  - "my external drive is empty"
  - "usb drive hardware failure"
  - "usb drive software corruption"
  - "usb drive partition error"
  - "usb drive file system repair"
  - "usb drive data recovery"
  - "usb drive empty fix"
  - "usb drive empty mac"
  - "usb drive empty windows"
last_reviewed: "2026-03-17"
---
# What to do if… a USB drive suddenly shows as empty or unformatted even though it had files (USA)

## Short answer
Stop using the drive immediately and **do not click format, erase, or initialize** if you want to recover the original files. Any new data written to the device—including repair attempts—may permanently overwrite your lost data.

## Do not do these things
- Don’t click **Format**, **Initialize**, **Erase**, or **Repair** prompts provided by the operating system.
- Don’t run `CHKDSK` or similar command-line repairs yet, as these can alter the file structure in ways that make recovery harder.
- Don’t save or copy new files to the USB drive to "test" if it is working.
- Don’t repeatedly plug and unplug the device if it is making clicking sounds or getting physically hot.
- Don’t use unauthorized third-party "repair" tools that promise an immediate fix without first creating a backup image.

## What to do now
1. **Safely disconnect the drive and check for a physical lock.**  
   **Eject the USB drive using the OS software safely-remove feature and check the side of the device for a physical "Write Protect" switch.**  
   - If a switch exists, ensure it is in the "Unlocked" position before trying again.

2. **Verify the device status in Windows Disk Management.**  
   **Right-click the Start button, select Disk Management, and locate your USB drive in the list of volumes.**  
   - Note if the drive status is listed as **RAW**, **Unallocated**, or **No Media**.  
   - If it shows as RAW, the hardware is detected but the file system is corrupted; do not attempt to format it.

3. **Verify the device status in macOS Disk Utility.**  
   **Open Disk Utility, select View > Show All Devices, and select the physical USB drive from the sidebar.**  
   - Note if the drive shows the correct total capacity but no volumes (partitions) inside.  
   - If you must run First Aid, restart your Mac in **macOS Recovery Mode** first to ensure the drive can be fully unmounted for the check.

4. **Test the connection once with different hardware.**  
   **Plug the USB drive directly into a different port on the computer (avoiding USB hubs) or try a different computer entirely.**  
   - If the drive is recognized on another machine, **copy all files immediately** to the second computer's local storage.

5. **Create a disk image before attempting any recovery.**  
   **Use a disk-imaging tool to create a sector-by-sector clone of the USB drive to a separate, healthy hard drive.**  
   - This ensures you are working on a copy of the data rather than the failing hardware itself.  
   - Ensure the destination drive has more free space than the total capacity of the USB.

6. **Check for Windows File Recovery options.**  
   **For Windows 10 and 11 users, download the official "Windows File Recovery" tool from the Microsoft Store to attempt a command-line restoration of files from a RAW partition.**  
   - Only perform this after you have imaged the drive or if you have accepted the risk of data loss.

7. **Escalate to professional services if the data is critical.**  
   **Contact a reputable data recovery lab if the device is not detected by any computer, feels excessively hot, or if the data is subject to legal or regulatory compliance.**  
   - Inform the lab if you have already attempted any software-based repairs or if the drive was unplugged during a write operation.

## What can wait
- You don’t need to decide if the USB hardware is permanently broken today; focus solely on the data.
- You don’t need to purchase recovery software immediately; many first-party tools and trial versions can confirm if data is "seeable" first.
- You don’t need to report the incident to IT unless the drive contains regulated, sensitive, or corporate data.

## Important reassurance
Seeing a "Drive must be formatted" message often means the partition table or file system header is corrupted, but the actual file data is still present on the flash memory chips. As long as you have not clicked "Format," the files are likely still there and recoverable through logical reconstruction.

## Scope note
This guide provides first-step stabilization for logical data loss and device recognition errors. It does not cover physical hardware repair (soldering/chip-off recovery) or forensic investigation of encrypted volumes.

## Important note
This information is for general guidance and does not constitute professional IT, forensic, or legal advice. Recovery success depends on the specific nature of the failure. If the drive contains medical (HIPAA), financial, or other regulated data, follow your organization's formal data breach and incident response protocols before attempting DIY recovery.

## Additional Resources
- https://support.microsoft.com/en-us/windows/disk-management-in-windows-ad88ba19-f0d3-0809-7889-830f63e94405
- https://support.apple.com/en-us/102611
- https://support.apple.com/guide/disk-utility/initialize-a-storage-device-dsku365552c7/mac
- https://support.apple.com/en-us/102204
- https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams
