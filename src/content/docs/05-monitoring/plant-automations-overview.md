---
title: 'Plant Automations — alerts, actions, and the surplus plan'
tags:
  - monitoring
  - plant
  - automations
  - alerts
  - actions
  - surplus
  - recipes
---

The **Automations** tab is where a plant reacts on its own — notifying you when something needs attention, and switching real loads to soak up surplus solar. Everything the plant does automatically lives here, in three sections.

## The three sections

| Section | What it does | Example |
|---|---|---|
| **Alerts** | Watches live readings and notifies you when a condition holds | "Push me if the inverter is silent for 30 minutes" |
| **Actions** | Watches live readings and **switches a connected device** | "Turn the heat-pump relay on when the battery is above 65% and solar is strong" |
| **Surplus plan** | Ranks your deferrable loads so surplus energy goes to the right one first | Heat pump before water heater before EV charger |

Alerts inform. Actions act. The surplus plan decides priority when more than one load could run.

## Creating one

**Today, actions are set up together with the techs.solar team** — you describe what you want in plain language (for example: *"turn the heat-pump relay on when the battery is above 65% and solar is producing well; off if solar fades or the battery drops below 60%"*) and it's configured as a structured recipe with every threshold, timing, and safety setting reviewed with you before it exists. A self-serve builder on this tab is planned.

Alert rules you can already create and edit yourself on this tab.

However it's created, a new action never switches anything immediately — it starts in **rehearsal**. See automation-rehearsal-and-arming.

## The safety settings on every action

Every action carries guard settings, pre-filled with safe defaults you can adjust:

- **Minimum on/off time** — the load never flaps on and off in quick succession (protects compressors).
- **Auto-off timer** — every "on" command has a built-in expiry; if the plant loses internet, the load switches itself off rather than running unattended.
- **Bailout condition** — a hard cut-off (for example, battery below 60%) that overrides everything else.

## Good candidates for actions

Deferrable loads with their own controls: heat pumps, water heaters, pool pumps, EV charging enable circuits. The relay switches the *enable* signal; the appliance still manages itself.

## Where to go next

- automation-rehearsal-and-arming — how an action goes live safely
- adding-smart-devices-shelly — connecting the relay it will switch
