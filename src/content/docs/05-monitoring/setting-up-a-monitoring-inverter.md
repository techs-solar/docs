---
title: 'Setting up a monitoring inverter — connecting a plant to techs.solar'
tags:
  - monitoring
  - inverter
  - plant
  - setup
  - deye
---

This page walks through how to connect an inverter to techs.solar so post-install performance data starts flowing into the dashboard and, once you turn it on, your homeowner's view. Read this after the physical install is done and the inverter is talking to its own cloud.

## What monitoring is for

Once a plant is connected, techs.solar reads inverter output on a regular schedule and stores it as production data. That data drives:

- **Your dashboard views** — production, self-consumption, and health across every plant you've installed
- **Alert rules** — you configure thresholds; the platform emails or messages when a plant crosses them
- **The homeowner-facing view** — once you share access, your customer sees their own plant's numbers

You don't need monitoring to close a sale, but it's how you keep a customer past the install and catch problems before they call you.

## Supported connection paths

The primary path today is **Deye Cloud import**. If your inverter is a Deye (or a rebrand running the Deye/SolarMAN cloud), you connect once with your Deye Cloud credentials and every station in that account is available to import.

Beyond Deye, techs.solar can also read from **Shelly** devices and **Modbus**-speaking equipment at the device level once a plant exists. You won't find these in the Add Plant flow — add a Shelly or Modbus device from the **Add Device** panel on an existing plant's detail page, not when creating the plant itself.

If your inverter brand isn't Deye and you don't have a Shelly or Modbus reader on site, contact support — brand coverage is expanding.

## Registering a Deye plant, step by step

1. Open **Plants & Monitoring** from your dashboard sidebar and click **Add** (or **Add your first plant** if you don't have one yet)
2. Pick the **Deye Cloud** option
3. Enter your Deye Cloud (SolarMAN) **email and password** — the platform tests them before continuing
4. Pick the stations you want to import from the list returned by the account
5. Confirm the import — each station becomes a plant in your dashboard with default alert rules pre-attached, ready right away

You can connect more than one Deye account by running the flow again with different credentials.

## What you need before you start

- The Deye Cloud login for the account the inverter is registered to (not the customer's login, unless you own their account)
- The inverter online and talking to Deye Cloud — check the SolarMAN app first if you're unsure
- A few minutes; import completes within seconds once credentials verify

## If data doesn't arrive

- Verify the inverter is reporting to Deye Cloud (open SolarMAN and confirm today's production is visible there)
- Check the station is in the account you connected with — a station owned by a sub-account may not appear
- Re-run the import flow to refresh the station list

## Where to go from here

- The big picture: what-is-monitoring
- Who gets which alerts once monitoring is live: who-sees-monitoring-alerts
