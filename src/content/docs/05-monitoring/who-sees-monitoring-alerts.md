---
title: 'Who sees monitoring alerts — you, your customer, or both'
tags:
  - monitoring
  - alerts
  - notifications
  - homeowner
---

Every plant you connect starts with a standard set of alert rules. Each rule decides whether it emails you, your homeowner, or both when its condition trips. This page covers the defaults and how they behave.

## What the platform monitors by default

Every new plant is seeded with the same eight rules. Each has a severity, a notification target, and a cooldown to prevent repeat spam.

| Rule | Severity | You get emailed | Homeowner gets emailed |
|---|---|---|---|
| Zero Export Breach | Critical | ✓ | ✓ |
| Inverter Offline | Critical | ✓ | — |
| Inverter Fault | Critical | ✓ | — |
| Battery Critical (< 10%) | Critical | ✓ | ✓ |
| Battery Low | Warning | ✓ | — |
| Device Offline | Warning | ✓ | — |
| Grid Voltage High | Warning | ✓ | — |
| High Grid Export | Warning | ✓ | ✓ |

You get everything. Homeowners get the three that matter to them directly: regulatory breach, battery running critically low, and unusually high export.

## Severity

The default rules use two levels:

- **Critical** — something is wrong right now and probably needs action (regulatory, safety, or hardware fault)
- **Warning** — something is off but not urgent; worth noticing

A third level, **Info**, is available if you create a custom rule of your own — none of the defaults use it, but you'll see it as an option in the rule editor.

The rule's severity is what the dashboard shows next to open alert events. It doesn't change who gets the email — only the visual weight.

## Channels

All notifications are sent by **email**. No SMS, no push, no in-app-only.

Cooldowns per rule stop the same alert re-sending — 15 to 120 minutes depending on the rule. It re-fires only if the condition clears and returns.

## Rules that don't apply to every site

Some default rules only make sense on specific site configurations:

- **Zero Export Breach** and **High Grid Export** only apply to zero-export sites (grid-tied with export-limit set to zero).
- **Grid-tied-only rules** — Zero Export Breach, High Grid Export, and Grid Voltage High — don't fire on off-grid sites.

The seeder switches these rules off rather than skipping them, so you may see one listed but turned off rather than missing entirely. If a rule never fires and you expected it to, the plant's site type is usually why.

## Changing who gets what

Each rule has independent installer and homeowner notification toggles, editable from the plant's **Rules** page. If a homeowner asks to stop receiving Zero Export Breach emails, or a landlord asks to start receiving Inverter Offline emails, both are per-rule flips at the site level — not a global setting.

## Where to go from here

- How to connect a plant in the first place: setting-up-a-monitoring-inverter
- The broader picture of what monitoring provides: what-is-monitoring
