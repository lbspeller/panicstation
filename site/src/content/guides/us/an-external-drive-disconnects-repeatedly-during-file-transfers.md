---
title: "What to do if… an external drive disconnects repeatedly during file transfers"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "external drive keeps disconnecting"
  - "usb hard drive disconnects"
  - "drive ejects during copy"
  - "file transfer keeps failing"
  - "copy interrupted to external disk"
  - "external ssd disconnects mid transfer"
  - "external hdd disconnects mid transfer"
  - "usb cable loose or damaged"
  - "usb hub causing disconnects"
  - "bus powered drive not enough power"
  - "drive disconnects when laptop sleeps"
  - "mac keeps ejecting external drive"
  - "windows usb power saving disconnects"
  - "files not fully copied"
  - "data copy stops and restarts"
  - "external drive connection unstable"
  - "risk of corrupted copied files"
  - "disk not ejected properly"
  - "what do i do if my drive keeps disconnecting"
  - "what do i do if usb ejects by itself"
  - "what do i do if file transfer stops"
  - "what do i do if my disk disappears"
  - "help i cannot copy files to my drive"
  - "help i keep getting disk not ejected properly"
  - "help i have a loose usb connection"
  - "help i think my hard drive is failing"
  - "clicking noise from external drive"
  - "external drive getting very hot"
  - "slow file transfer speeds"
  - "corrupted file error mid copy"
  - "usb connection unstable during backup"
  - "external storage keeps unmounting"
  - "failed data transfer to hdd"
  - "faulty usb cable symptoms"
  - "unstable usb port on laptop"
last_reviewed: "2026-03-17"
---
# What to do if… an external drive disconnects repeatedly during file transfers (USA)

## Short answer
Stop all active transfers and disconnect the drive immediately if you hear clicking or grinding noises. If no noises are present, stabilize the connection by bypassing USB hubs and disabling system power-saving settings before attempting a small, defensive test copy.

## Do not do these things
- Don’t repeatedly attempt the same large transfer if it has already failed multiple times.
- Don’t leave the drive plugged in if it is making clicking, grinding, or loud whirring noises.
- Don’t unplug the drive while the activity light is rapidly flashing; try to cancel the transfer via the OS first.
- Don’t use unpowered USB hubs or long extension cables for drives that do not have their own wall power.
- Don’t run "First Aid" or "CHKDSK" repeatedly on a drive that is frequently disappearing; this can accelerate mechanical failure.
- Don’t reformat or initialize the drive unless you have confirmed the data on it is already backed up elsewhere.

## What to do now
1. **Check for physical failure cues immediately.**  
   **Listen for rhythmic clicking, grinding, or a "beep-beep" sound coming from the drive casing.**  
   - If these noises are present, power off the drive immediately to prevent a head crash.  
   - Feel the casing; if it is too hot to hold comfortably, disconnect it and let it cool for 30 minutes.

2. **Simplify the physical connection path.**  
   **Unplug the drive from any USB hubs, docks, or monitor ports and connect it directly to a port on the computer.**  
   - Use the original cable if possible; if not, use a high-quality, short cable (under 3 feet).  
   - If the drive has a separate power adapter, ensure it is plugged into a wall outlet rather than a power strip.

3. **Disable USB power management (Windows).**  
   **Navigate to Control Panel > Hardware and Sound > Power Options > Change plan settings > Change advanced power settings.**  
   - Expand **USB settings** and then **USB selective suspend setting**.  
   - Change both "On battery" and "Plugged in" to **Disabled**.  
   - Go to **Device Manager**, expand **Universal Serial Bus controllers**, right-click each **USB Root Hub**, select **Properties > Power Management**, and uncheck **Allow the computer to turn off this device to save power**.

4. **Adjust energy settings (macOS Tahoe 2026).**  
   **Open System Settings > Energy (or Battery if on a laptop) and find the options for external disks.**  
   - Toggle **Put hard disks to sleep when possible** to **Never** or uncheck it.  
   - In **System Settings > Lock Screen**, set "Turn display off on power adapter" to **Never** temporarily during the transfer.

5. **Perform a defensive test copy.**  
   **Select a single small folder (under 100MB) and attempt to copy it to the drive.**  
   - If this succeeds, proceed to copy your most critical files first in small batches rather than one large "all-at-once" move.  
   - If the disconnect occurs even with a single small file, stop use; the drive's internal bridge board or the physical disk itself may be failing.

6. **Document error messages for warranty claims.**  
   **Note the exact wording of any "Disk Not Ejected Properly" or "Semaphore timeout period has expired" messages.**  
   - Under the **Magnuson-Moss Warranty Act**, you have rights to a repair, replacement, or refund if a product fails under warranty; having a log of specific failures helps in the claims process with manufacturers like WD, Seagate, or Samsung.

## What can wait
- You don’t need to decide on professional data recovery services until you have ruled out cable and power issues.
- You don’t need to reorganize or rename files while the connection is unstable.
- You don’t need to update your entire computer's operating system today; focus only on the specific USB and power settings.

## Important reassurance
Repeated disconnects are frequently caused by simple power-draw issues or faulty cables rather than total drive failure. By stopping the transfer now, you are preventing the directory corruption that usually happens when a write is interrupted, which is the most common cause of data loss in these scenarios.

## Scope note
This guide provides first-step stabilization for external storage devices. It does not cover internal drive repairs, advanced registry editing, or forensic data recovery. If the drive fails to mount entirely after these steps, hardware replacement is likely required.

## Important note
This information is for educational purposes and does not constitute professional IT advice. If your data is irreplaceable and the drive exhibits mechanical noises, minimize power-on time and consult a professional data recovery specialist. Federal warranty protections under the Magnuson-Moss Warranty Act apply to consumer electronics over $15, but generally do not cover the cost of data recovery services.

## Additional Resources
- https://support.microsoft.com/en-us/windows/reconnect-your-file-history-drive-in-windows-4eecf398-5c15-bbe7-13b2-9ed4b3db8bb7
- https://support.microsoft.com/en-us/topic/usb-devices-may-stop-functioning-correctly-when-multiple-devices-connected-to-the-same-usb-hub-go-into-selective-suspend-99b5ae85-69cb-4f94-adce-5698ba44804f
- https://support.apple.com/en-us/101830
- https://support.apple.com/en-us/102611
- https://support.apple.com/en-us/102204
