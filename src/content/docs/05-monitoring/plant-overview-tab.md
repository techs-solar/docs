---
title: 'The plant Overview tab — live readings, Time Machine, and recent alerts'
tags:
  - monitoring
  - plant
  - overview
  - time-machine
  - alerts
---

Overview is the tab you land on when you open any plant — the parts of its life you check most often: what's happening right now, what's happened today, and what needs your attention. Everything else lives one tab away.

## What's on the page

Five sections, top to bottom.

### Header row and buttons

Plant name, inverter brand, breadcrumb (Plants > this plant), the current time in the plant's timezone, and three buttons:

- **Homeowner view** — opens the customer-facing dashboard in a new tab, exactly what your customer sees.
- **Share** — generates a separate, time-limited **engineer share link**: a read-only technical view (live readings, devices, alerts) that needs no account and can't reach settings or automation controls. Pick how long it stays valid; it expires on its own. Not the same link as Homeowner view.
- **AI** — opens a chat scoped to this specific plant. Ask questions in natural language ("why did production drop yesterday?") and get answers grounded in its live readings and active alerts.

Below that, any active critical alert shows as a red banner across the top so you can't miss it.

### Live readings

Two cards, both built from this plant's actual current readings — nothing here is illustrative:

- **PV / Battery / Grid / Load cards** — the plant's current instantaneous values, plus a "Household draw" note on Load and an "As of … ago" freshness line.
- **Live Flow tile** — a radial diagram showing power flowing between sun, battery, house, smart load (when enabled), and grid.

Both only appear once the plant has sent a reading in the last 15 minutes — a brand-new plant, or one that's gone quiet, shows neither card rather than a stale or invented number. That's expected on day one, not a fault; give it a few minutes after the inverter starts reporting.

### Plant Info card

A small summary card: plant name, inverter, and a stats line reading `N nodes · N devices · N edges` — the raw count of what's on the Layout tab. **View layout →** jumps there directly.

### Time Machine

For a real plant, this is a compact card with just an **Open full view →** link (also reachable via the **Time Machine** tab in the plant sub-nav) — Overview doesn't show a scrubber or charts here at all.

The full view it opens is a **Historical Performance** chart built from this plant's actual recorded readings — PV, battery SOC, grid, and smart-load history, with 24-hour, 7-day, and 30-day range controls. This is the one to use for real analysis.

Demo plants (the ones carrying the demo badge) show something different on this card: an interactive scrubber with a time slider, illustrative event chips ("Min SOC," "Grid dip," "Peak gen"), invented PV/SOC/grid/load curves, and live-looking gauges — all synthetic, there to demonstrate the feature shape, not this plant's actual day. **Open full view →** still routes to the same real Historical Performance chart either way; only the compact card differs between a demo and a real plant.

### Recent Alerts

The most recent alert events on this plant: a severity pill (Critical / Warning), the rule name, its state (active / resolved), the alert's message, and how long ago it fired. **Manage rules →** takes you to the Rules tab to change what triggers alerts (who-sees-monitoring-alerts covers the default rule set).

## When to use each part

- **First glance in the morning**: header banner + the live readings cards. If nothing red and the cards show current numbers, the plant is healthy right now.
- **"What happened yesterday?"**: use Time Machine's **Open full view** for the real chart history. (On a demo plant, ignore the compact card's scrubber and chips — those are illustrative, not this plant's actual events.)
- **"Did that alert clear?"**: Recent Alerts card, look for `resolved` on the event you had in mind.
- **"How is this plant put together again?"**: Plant Info line to jog memory, or click through to Layout.

## Where to go from here

- What monitoring is for at a higher level: what-is-monitoring
- Configure which conditions fire alerts: who-sees-monitoring-alerts
- Redraw or fix the plant's wiring diagram: using-the-layout-designer
- Get the inverter reporting in the first place: setting-up-a-monitoring-inverter
