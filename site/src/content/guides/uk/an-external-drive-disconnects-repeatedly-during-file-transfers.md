---
title: "What to do if… an external drive disconnects repeatedly during file transfers"
jurisdiction: "UK"
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

# What to do if… an external drive disconnects repeatedly during file transfers (UK)

## Short answer
Stop the transfer and stop writing to the drive until you’ve stabilised the connection (power, cable/port, and sleep/power settings). Repeated disconnects during writes can corrupt the copy (and sometimes the drive’s file system).

## Do not do these things
- Don’t keep retrying the same big transfer over and over “until it works” — repeated dropouts during writes can make the mess bigger.
- Don’t yank the cable the moment it freezes — try to end the transfer first, then eject properly if the system allows.
- Don’t run multiple transfers at once (or use the drive for anything else) while it’s acting up.
- Don’t use an unpowered USB hub/dongle if you can avoid it, especially with bus-powered drives.
- Don’t reformat the drive “to fix it” until you’re sure you have what you need off it.

## What to do now
1. **Pause and protect what you have.**  
   Cancel/pause the transfer if you can. If it’s frozen, wait a minute before doing anything abrupt. Your goal is to stop new writes.

2. **Stabilise the physical connection (most common cause).**  
   - Swap to a different USB port on the computer.  
   - Replace the cable (short, good-quality cable; avoid adapters if possible).  
   - If you’re using a hub/dock, **connect the drive directly** to the computer.  
   - If the drive has its own power supply, use it. If it’s bus-powered, consider a **powered USB hub**.

3. **Prevent “sleep” from dropping the drive mid-copy (temporary change).**  
   - On **Mac**, temporarily turn off “Put hard disks to sleep when possible” and prevent sleep while copying.  
   - On **Windows**, check USB/device power saving options (some systems can power down USB to save energy).  
   (You can revert these later; the point is to get a stable window to copy.)

4. **Only run disk checks if the drive is stable and not showing physical-failure signs.**  
   If the drive stays connected reliably for a while *and* it’s not clicking, overheating, or repeatedly vanishing, you can run the built-in check (Windows: error checking / CHKDSK; Mac: Disk Utility “First Aid”).  
   If the system reports errors (or the drive seems physically unwell), **prioritise copying your most important files first** and avoid repeated “repair” attempts.

5. **Restart copying in a “resume-friendly” way.**  
   - Copy a **small test folder** first.  
   - Then copy in **smaller batches** (by folder/date) so a disconnect doesn’t ruin hours of progress.  
   - Prefer transfer methods that can **resume** instead of starting from zero after a drop.

6. **Capture quick evidence while it’s happening (helps later).**  
   Note the time of disconnects, any on-screen error messages, and what port/cable/hub you used. If you need to return the drive, this makes the problem easier to describe.

7. **If the drive is new or recently bought: protect your consumer options.**  
   Keep the receipt/order confirmation and avoid invasive “fixes” that could be argued as misuse. In the UK, issues with faulty goods are often handled through the retailer you bought from, but routes and remedies can depend on the circumstances and terms of sale.

## What can wait
- You don’t need to decide right now whether the drive is “dead” or which brand to buy next.
- You don’t need to reorganise or deduplicate files during recovery — just aim for a safe copy.
- You don’t need to do advanced diagnostics today if basic stability steps (cable/port/power/sleep) make transfers reliable again.

## Important reassurance
This is a very common failure pattern, and it’s often caused by something fixable (cable, port, hub, power saving). Going slowly and stopping repeated write attempts is the best way to avoid turning an annoying disconnect into actual data loss.

## Scope note
These are first steps to stabilise the connection and reduce the risk of corrupted copies. If errors persist after cable/port/power changes, you may need dedicated data-recovery help or a replacement drive.

## Important note
This guide is general information, not professional IT or legal advice. If the data is irreplaceable and the drive is clicking, overheating, or vanishing from the system entirely, minimise use and consider specialist help.

## Additional Resources
- https://support.apple.com/en-gb/guide/mac-help/mchle41a6ccd/mac
- https://learn.microsoft.com/en-us/windows-hardware/drivers/usbcon/usb-selective-suspend
- https://support.microsoft.com/en-gb/windows/troubleshoot-usb-device-problems-0e3b7f1b-7a0a-4a2a-8b9d-0cc2b1d2b5a2
- https://www.gov.uk/accepting-returns-and-giving-refunds
- https://www.legislation.gov.uk/ukpga/2015/15/contents
- https://www.moneyhelper.org.uk/en/getting-help-and-advice/consumer-rights/consumer-rights-what-you-need-to-know