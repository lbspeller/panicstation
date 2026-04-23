---
title: "What to do if… your phone updates and then gets stuck in a restart loop"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "router resets unexpectedly"
  - "router reset unexpectedly"
  - "all your connected devices lose internet at once"
  - "internet down suddenly"
  - "broadband went out at once"
  - "home network offline"
  - "router reboot loop"
  - "hub restarted by itself"
  - "modem router lost connection"
  - "all devices no internet"
  - "wifi connected no internet"
  - "router settings changed"
  - "ssid changed after reset"
  - "network password stopped working"
  - "isp outage or fault"
  - "lights on router changed"
  - "broadband connection dropped"
  - "router factory reset worry"
  - "home wifi stopped working"
  - "help i have no internet"
  - "help my router reset"
  - "help my wifi is gone"
  - "what do i do if my router reset"
  - "what do i do if my internet is down"
  - "what do i do if all devices lost wifi"
  - "what do i do if broadband is off"
  - "red light on openreach box"
  - "pon light flashing"
  - "los light red"
  - "no dial tone on digital voice"
  - "internet dropped after power cut"
  - "bt hub blue light gone"
  - "sky hub orange light"
  - "virgin media hub flashing green"
last_reviewed: "2026-03-17"
---
# What to do if… your phone updates and then gets stuck in a restart loop (UK)

## Short answer
Isolate the router from power for two minutes, check the status lights on your Openreach modem (ONT) if applicable, and text your provider's automated diagnostic line to verify a network-side outage.

## Do not do these things
- Don't press the recessed "RESET" button with a pin, as this will delete all custom Wi-Fi names, passwords, and provider login credentials.
- Don't power the device on and off repeatedly, which can trigger an automated "profile cap" by the provider that slows your line speed for days.
- Don't attempt to log into the router's admin panel to change frequency channels or DNS settings while the physical connection is unstable.
- Don't assume the internet is "back" just because the Wi-Fi icon has returned on your phone; wait for the "connected" or "internet" status light.

## What to do now
1. **Identify if critical safety devices are now offline.** 
   - Check telecare pendants, fall detectors, and internet-linked home security alarms. 
   - Verify if your "Digital Voice" landline is dead, as VoIP phones rely entirely on the router. 
   - Move to a mobile phone for all emergency communication and ensure it has sufficient charge.
2. **Examine the lights on your primary connection hardware.** 
   - If you have a white Openreach Full Fibre box (ONT), look at the PON and LOS lights. 
   - A red LOS light or a flashing PON light indicates a fault outside your home that requires an engineer.
   - Note the colour and behavior (flashing or solid) of the main light on your router/hub.
3. **Perform a timed two-minute power-cycle of all equipment.** 
   - Unplug the power cables from both the router and the modem/ONT (if separate). 
   - Wait exactly 120 seconds to allow the internal capacitors to discharge and the session to clear at the exchange. 
   - Plug the modem/ONT in first and wait for the lights to stabilize (usually 2-3 minutes), then plug in the router.
4. **Use a mobile data connection to check for local outages.** 
   - Visit your provider’s official "Service Status" page or use their mobile app. 
   - Use automated SMS diagnostics if available (for example, BT/EE customers can text "HELP" + landline number to 61998). 
   - Log the exact time the connection dropped to support future "Automatic Compensation" claims if the fix takes over 2 working days.
5. **Check for a "Factory Reset" state by scanning for Wi-Fi names.** 
   - Open the Wi-Fi settings on a mobile device and look for a network name that matches the "Default SSID" printed on the router sticker. 
   - If your custom network name has disappeared and only the default one appears, the router has reset its internal memory.
6. **Test the connection with a physical Ethernet cable if Wi-Fi fails.** 
   - Plug a laptop directly into one of the yellow/yellow-bordered ports on the back of the router. 
   - If the wired connection works but Wi-Fi does not, the fault is local to the router’s wireless transmitter.
7. **Contact your ISP to report a total loss of service.** 
   - Provide the specific light patterns you observed on both the ONT and the router. 
   - Ask for a "Line Test" to be run immediately while you are on the call. 
   - Request an estimated time for repair (ETR) and a fault reference number.

## What can wait
- You do not need to decide on a new broadband provider or upgrade your hardware during an active outage.
- You do not need to re-configure smart home devices or "forget" Wi-Fi networks on your gadgets until the main router signal is confirmed stable.
- You do not need to investigate firmware updates or internal wiring unless the provider confirms the external line is healthy.

## Important reassurance
A sudden total drop is usually caused by a routine network update or a temporary exchange fault. Most UK routers are designed to self-heal and reconnect automatically after a single controlled power-cycle. If your devices lost connection at the same time, it is rarely a fault with the devices themselves.

## Scope note
This guide covers first-step stabilization and fault identification for UK residential broadband connections. It focuses on isolating whether the failure is internal hardware, a memory reset, or a provider-side outage.

## Important note
This guide is for general informational purposes and does not replace the specific technical instructions provided by your ISP (e.g., BT, Sky, Virgin Media, TalkTalk). If you are a vulnerable customer or rely on telecare, contact your provider's priority fault line immediately.

## Additional Resources
- https://support.google.com/pixelphone/answer/4582729?hl=en-GB
- https://www.samsung.com/uk/support/mobile-devices/what-to-do-if-your-samsung-phone-keeps-restarting/
- https://support.apple.com/en-gb/116940
- https://www.samsung.com/uk/support/mobile-devices/what-to-do-if-your-samsung-galaxy-device-turns-off-unexpectedly/
- https://support.apple.com/en-gb/118259
