---
title: 'Adding a Shelly relay or smart plug to a plant'
tags:
  - monitoring
  - plant
  - devices
  - shelly
  - relay
  - smart-plug
---

Shelly relays and smart plugs let a plant do more than measure — they can switch real loads (a heat-pump enable circuit, a water heater, an EV charger contactor). This doc covers connecting one to a plant so its state shows up live, and so automations can use it later.

## Supported devices

Any Shelly device reachable through **Shelly Cloud** or your local network, including relay/plug models (Shelly 1, Plug S, Plus 1PM, PM Mini) and energy meters (3EM, Pro 3EM). Relay models report their switch state and, on metering models, live power draw.

## Before you start

- The Shelly is set up in the **Shelly app** and online.
- For a cloud connection you'll need your **cloud server address** and **authorization key** — in the Shelly app under *Settings → Authorization cloud key*.
- For a local connection, the device's **IP address** on the plant's network (give it a static lease in the router).

## Connecting the device

1. Open the plant and go to the **Devices** tab, then click **Add device**.
2. **Step 1 — connection type:** pick **Shelly Cloud** or **Shelly Local** directly (Modbus TCP and Deye Cloud are the other two options on the same screen, for non-Shelly gear).
3. **Step 2 — connection details:**
   - **Shelly Cloud:** cloud server address, authorization key, and the device ID.
   - **Shelly Local:** the device's IP address.
4. **Step 3 — confirm & save:** the device model is usually auto-detected from what it reports; if detection fails you'll be asked to pick it from a list (or "Not labeled yet" if you're unsure — we'll get notified and add it). Optionally name the device, then **Save & start polling**.
5. Within a minute the device appears with its live state — switch position, and power/voltage on metering models.

## Wiring advice for switched loads

A relay should switch a load's **control or enable circuit** (thermostat input, contactor coil) — not the compressor or heater feed directly. That keeps the switched current far below the relay's rating and lets the appliance manage its own start-up. If in doubt, drive a contactor.

If an inverter has its own smart-load output wired to the same appliance, disable it or set it permanently on — one controller per load, never two.

## What if the device shows offline?

Check the Shelly app first: if it's offline there too, it's a Wi-Fi issue at the site. If it's online in the app but offline here, re-check the authorization key (cloud) or the IP (local — DHCP may have moved it).

## Where to go next

Once the relay is connected, see plant-automations-overview to make it respond to solar production and battery state automatically.
