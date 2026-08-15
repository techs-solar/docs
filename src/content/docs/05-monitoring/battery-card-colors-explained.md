---
title: 'Battery card colors explained — charging, discharging, and critical'
tags:
  - monitoring
  - plant
  - battery
  - alerts
  - automations
---

The battery card on a plant's Overview page and its homeowner-facing view uses three colors, and a fourth neutral state, to show what the battery is doing right now — at a glance, without reading the numbers.

## The three states

- **Amber** — discharging. The battery is supplying power to the home or grid.
- **Green** — charging. The battery is drawing in power, usually from solar surplus.
- **Red** — critical. The state of charge has fallen to, or below, this plant's bailout floor — the point where an armed automation would step in to protect the battery. Red always wins over amber or green, even mid-discharge.

If the charge/discharge direction isn't known (no recent battery-power reading), the card shows the percentage with no direction label — it doesn't guess.

## Where the red threshold comes from

There's no fixed "20% is always critical" rule. The red threshold is **this plant's own bailout floor** — the lowest state of charge any of its armed or rehearsing automations is set to protect. If a plant has no automations at all, the card falls back to a 20% floor as a sensible default.

If a plant has more than one automation guarding the battery at different floors, the card uses the highest one — because that's the floor that would trigger first as the charge falls, so it's the one worth calling "critical" for that plant. Armed automations outrank rehearsing ones: a rehearsal switches nothing, so its floor can't redefine "critical" while a live one exists.

## Why this matters when setting up an automation

Because the card's red threshold tracks your automation's bailout setting, changing a recipe's bailout floor on the Automations tab changes when the Overview card turns red for that plant too. Both readings — the tile you glance at and the automation's own safety trigger — always agree, because they read the same number.

## Where to go from here

- Set up an automation with its own bailout floor: plant-automations-overview
- See where this card lives on the page: plant-overview-tab
- Who else sees this on the homeowner side: who-sees-monitoring-alerts
