---
title: 'Rehearsal and arming — how an automation goes live safely'
tags:
  - monitoring
  - plant
  - automations
  - rehearsal
  - arming
  - safety
---

A new action never touches a device on day one. It starts in **rehearsal**: the plant evaluates it against live readings and keeps a diary of every decision it *would* have made — without switching anything. You arm it only after the diary convinces you.

## Rehearsal — watch it decide before it acts

While rehearsing, the action runs on every reading cycle exactly as it would live. Each evaluation lands in the **decision log**:

> 09:42 — *Would have switched ON* — battery 67%, solar 3.1 kW (conditions held 10 min)
> 21:18 — *Would have switched OFF* — solar below 500 W for 10 min

Read the log across at least one full day-cycle. You're checking three things:

1. It turns **on** when you'd expect (morning ramp-up, battery recovering).
2. It turns **off** when you'd expect (sunset, or the bailout condition).
3. It **holds** overnight — no surprise decisions while you sleep.

If a decision looks wrong, edit the thresholds and let it rehearse again. Rehearsal costs nothing and can run as long as you like.

## Arming

The **Arm** button enables after the action has rehearsed for at least **24 hours** — enough to see a full day and night of decisions. Arming shows a confirmation that restates the guard settings before you commit:

- **Minimum on/off time** — no rapid cycling (default 10–15 minutes).
- **Auto-off timer** — every "on" carries a built-in expiry (default 45 minutes), renewed while conditions still hold. If the site loses internet, the load switches itself off instead of running unattended — this matters most on off-grid plants where an unattended load can drain the batteries overnight.
- **Bailout** — the hard cut-off that overrides everything (for example, battery at or below 60%).

Once armed, the same decision log keeps recording — now showing real switch events instead of "would have."

## Pausing and disarming

You can pause an armed action at any time — it stops issuing commands and stops evaluating entirely, so no new decisions (real or "would have") are logged while paused.

Un-pausing (**Resume rehearsal**) returns the action to **rehearsal**, not straight back to live — re-arming is a separate, deliberate click that restates the guard settings again, same as arming the first time. It does not require a fresh 24-hour wait, though: the rehearsal clock is based on your decision history, not on the action's current state, so the earlier rehearsal you already completed still counts.

## Who sees this

Automations are installer-facing. Homeowners don't see the Automations tab or the decision log.

## What if the internet drops while a load is on?

Nothing keeps the load running: the auto-off timer lives on the switching device itself, so it expires and the load turns off even with the cloud unreachable. When the connection returns, the action resumes normally.

## Where to go next

- plant-automations-overview — the Automations tab as a whole
