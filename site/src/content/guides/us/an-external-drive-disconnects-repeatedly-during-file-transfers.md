---
title: "What to do if… an external drive disconnects repeatedly during file transfers"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - external drive keeps disconnecting
  - usb hard drive disconnects
  - drive ejects during copy
  - file transfer keeps failing
  - copy interrupted to external disk
  - external ssd disconnects mid transfer
  - external hdd disconnects mid transfer
  - usb cable loose or damaged
  - usb hub causing disconnects
  - bus powered drive not enough power
  - drive disconnects when laptop sleeps
  - mac keeps ejecting external drive
  - windows usb power saving disconnects
  - files not fully copied
  - data copy stops and restarts
  - external drive connection unstable
  - risk of corrupted copied files
  - “disk not ejected properly”
last_reviewed: "2026-03-09"
---

# What to do if… an external drive disconnects repeatedly during file transfers (USA)

## Short answer
Stop the transfer and stop writing to the drive until you’ve stabilised the connection (power, cable/port, and sleep/power settings). Repeated disconnects during writes can corrupt the copy (and sometimes the drive’s file system).

## Do not do these things
- Don’t keep hammering “retry” on a huge transfer — repeated write dropouts can worsen corruption.
- Don’t unplug immediately when it freezes — try to stop the transfer first, then eject safely if the OS allows.
- Don’t run multiple transfers or apps against the drive while it’s unstable.
- Don’t use an unpowered USB hub/dock if you can avoid it, especially for bus-powered drives.
- Don’t reformat the drive or “initialize” it as a quick fix unless you are sure you have what you need backed up elsewhere.

## What to do now
1. **Stop new writes.**  
   Cancel/pause the transfer if possible. If the system is unresponsive, give it a short moment before taking more drastic steps.

2. **Make the connection as simple and powered as possible.**  
   - Try a different USB port.  
   - Swap to a different (short, good-quality) cable.  
   - Bypass hubs/adapters/docks and connect directly.  
   - If the drive can take external power, use it. If it’s bus-powered, try a **powered USB hub**.

3. **Temporarily prevent sleep/power saving from dropping the drive.**  
   - On **Mac**, adjust settings so disks don’t sleep and the Mac doesn’t sleep during the copy window.  
   - On **Windows**, check USB/device power management settings that can turn off USB to save power.  
   The goal is a stable window to copy; you can revert settings later.

4. **Only run disk checks if the drive is stable and not showing physical-failure signs.**  
   If the drive stays connected reliably for a while *and* it’s not clicking, overheating, or repeatedly disappearing, you can run Windows Error Checking / CHKDSK or macOS Disk Utility “First Aid.”  
   If errors are reported (or the drive seems physically unwell), **prioritize copying your most important files first** and avoid repeated “repair” attempts.

5. **Copy more defensively.**  
   - Do a **small test copy** first to confirm stability.  
   - Then copy in **smaller batches** (by folder/date/type).  
   - Prefer transfer methods that can **resume** after interruption rather than restarting from zero (especially for large files).

6. **Write down what you observe (helps warranty/returns).**  
   Note the exact error messages, when disconnects happen, and what cable/port/hub was used. This is useful if support asks you to reproduce the issue.

7. **If the drive is new/recently purchased: preserve your options.**  
   Keep packaging/receipts and avoid invasive “fixes” that could complicate a return. If you need a remedy, review the seller’s return policy and the manufacturer’s warranty terms (US warranties are commonly governed by written warranty terms and related federal rules).

## What can wait
- You don’t need to decide right now whether you need data recovery services — first see if basic stability fixes let you complete a safe copy.
- You don’t need to reorganize, rename, or clean up files during the transfer.
- You don’t need to replace your whole setup today; isolate whether it’s the cable/port/hub, the computer’s power settings, or the drive.

## Important reassurance
This usually isn’t your fault, and it’s often something mundane like a bad cable, a flaky port, or power management. Slowing down and reducing repeated write attempts is the safest way to protect your data.

## Scope note
These are first steps to stabilize transfers and avoid avoidable corruption. If disconnects persist even with a different cable/port and simplified power setup, the drive enclosure, connector, or the drive itself may be failing.

## Important note
This guide is general information, not professional IT or legal advice. If the data is irreplaceable and the drive is making unusual noises, overheating, or repeatedly disappearing from the system, minimize use and consider specialist help.

## Additional Resources
- https://support.apple.com/guide/mac-help/mchle41a6ccd/mac
- https://learn.microsoft.com/en-us/windows-hardware/drivers/usbcon/usb-selective-suspend
- https://support.microsoft.com/en-us/windows/troubleshoot-usb-device-problems-0e3b7f1b-7a0a-4a2a-8b9d-0cc2b1d2b5a2
- https://consumer.ftc.gov/articles/warranties
- https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law