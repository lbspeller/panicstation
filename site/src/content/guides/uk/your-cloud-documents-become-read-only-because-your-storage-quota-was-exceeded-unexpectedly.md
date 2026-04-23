---
title: "What to do if… your cloud documents become read-only because your storage quota was exceeded unexpectedly"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "os missing screen"
  - "os damaged recovery screen"
  - "operating system not found"
  - "windows boot failure"
  - "pc won-t start"
  - "stuck in recovery"
  - "boot device not found"
  - "no bootable device"
  - "startup repair loop"
  - "blue recovery screen"
  - "mac question mark folder"
  - "flashing question mark folder"
  - "disk not detected"
  - "possible drive failure"
  - "worried about losing files"
  - "need data off laptop"
  - "bios boot order wrong"
  - "update broke windows"
  - "windows recovery environment"
  - "system won-t boot today"
  - "help i have a blue screen"
  - "help i cannot start my pc"
  - "what do i do if my laptop says no os"
  - "what do i do if my computer is stuck on recovery"
  - "what do i do if i see a flashing question mark"
  - "my hard drive is not found"
  - "my computer says operating system missing"
  - "black screen with white text boot error"
  - "no bootable media found"
  - "damaged system files recovery"
last_reviewed: "2026-03-17"
---
# What to do if… your cloud documents become read-only because your storage quota was exceeded unexpectedly (UK)

## Short answer
Isolate the device by disconnecting all external storage and peripherals, then perform a single power-cycle to check if the internal drive is detected.

## Do not do these things
- Do not select options labeled **Reset this PC**, **Factory Reset**, or **Erase Disk** if you have not backed up your personal files.
- Do not repeatedly restart the machine if you hear clicking, grinding, or whirring noises from the chassis.
- Do not attempt to open the laptop or desktop casing if the device is still under manufacturer warranty.
- Do not enter random characters into BitLocker or firmware password prompts.
- Do not use third-party "boot fixer" software downloaded from unverified websites.

## What to do now
1. **Disconnect all non-essential hardware from the computer.**
   - Remove USB flash drives, external hard drives, SD cards, printers, and docking stations.
   - Leave only the power cable, monitor, keyboard, and mouse connected.

2. **Perform a hard power reset to clear temporary electrical faults.**
   - For laptops: disconnect the power lead, hold the power button down for 30 seconds, then reconnect and try to start.
   - For desktops: turn off the power at the wall, hold the power button for 30 seconds, reconnect, and start.

3. **Check the BIOS or Boot Menu to ensure the internal drive is primary.**
   - Restart and immediately tap the BIOS key (usually F2, F10, or Del) or Boot Menu key (usually F12 or Esc).
   - Verify that the internal SSD or Hard Drive (often labeled "Windows Boot Manager" or the drive brand name) is at the top of the boot priority list.

4. **Access the built-in repair environment for your specific operating system.**
   - **Windows:** wait for the "Automatic Repair" or "Recovery" screen to appear, then select **Troubleshoot > Advanced options > Startup Repair**.
   - **Mac (Intel):** shut down, then hold **Command + R** while turning it back on until the Apple logo appears.
   - **Mac (Apple Silicon):** shut down, then press and hold the power button until "Loading startup options" appears.

5. **Retrieve your BitLocker recovery key from an external device if prompted.**
   - Go to **https://aka.ms/myrecoverykey** on a working smartphone or computer.
   - Sign in with your Microsoft account to find the 48-digit numerical key required to unlock the drive.

6. **Run a non-destructive disk check via the recovery menu.**
   - **Windows:** in Advanced options, select **Command Prompt** and type `chkdsk c: /f` (note that the drive letter may vary in recovery mode).
   - **Mac:** open **Disk Utility**, select your internal drive (usually Macintosh HD), and click **First Aid**.

7. **Document the exact error code or message for support purposes.**
   - Take a clear photo of the screen, including any strings like "0xc000000f" or "Inaccessible Boot Device."
   - Note if the error appeared immediately after a Windows Update or a physical impact.

8. **Contact the retailer or manufacturer if the device is under two years old.**
   - Under the UK Consumer Rights Act 2015, goods must be of satisfactory quality and fit for purpose.
   - If the hardware has failed within the first six years (five in Scotland), you may have a right to a repair or replacement from the retailer, though you may need to prove a latent fault after the first six months.

## What can wait
- You do not need to decide on a full system reinstallation immediately.
- You do not need to purchase a replacement hard drive or new computer today.
- You do not need to attempt advanced Command Prompt "rebuild bcd" steps while in a state of panic.

## Important reassurance
Seeing a recovery screen does not always mean your files are gone. It often indicates that the "pointer" the computer uses to find the operating system is broken, rather than the data itself being deleted. Taking a slow, methodical approach prevents turning a software glitch into permanent data loss.

## Scope note
This guide provides first-step stabilization to prevent data loss. It does not cover physical hardware repair or advanced data recovery from mechanically failed drives.

## Important note
This information is for guidance only and does not constitute professional technical or legal advice. If your data is critical and unbacked, stop all troubleshooting and consult a professional data recovery service. UK consumer rights regarding digital content and hardware are subject to specific time limits and evidence requirements.

## Additional Resources
- https://support.google.com/drive/answer/6374270?hl=en-GB
- https://support.microsoft.com/en-gb/office/microsoft-storage-faqs-8fca6272-3427-4cce-a437-2c5ed84550a9
- https://support.apple.com/en-gb/108922
- https://support.microsoft.com/en-gb/office/what-does-it-mean-when-your-onedrive-account-is-frozen-5e76147b-b7d5-4bcb-ba28-b91e3eb636b6
- https://support.microsoft.com/en-gb/office/why-did-i-get-a-message-saying-my-files-will-be-erased-5ee83d1a-28da-4d05-a1ca-46a522919e45
