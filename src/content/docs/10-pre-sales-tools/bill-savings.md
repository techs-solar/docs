---
title: 'Bill Savings Simulator — annualised savings with a live tariff feed'
tags:
  - pre-sales
  - calculator
  - savings
  - tariff
  - eurostat
---

The Bill Savings Simulator answers the year-one question a homeowner really cares about: *"what will my annual electricity bill actually look like after solar?"* Unlike the other calculators, it pulls the current electricity tariff live from a Eurostat feed, so the number you quote reflects today's prices, not last year's.

## When to use it

Use it when the question is bill-shaped rather than payback-shaped — "how much will I save per year?", "will I still owe the grid anything?" — on a first estimate call or once a customer has settled on a system size. For payback-in-years and 20-year framing, use roi-calculator instead — this tool is annualised, one year in, one number out.

## How to run it

1. From your sidebar, open **Pre-Sales Tools → Bill Savings**.
2. Fill in **monthly electricity bill (€)**, **system size (kWp)**, **import tariff (€/kWh)** (pre-filled live from Eurostat), and **export credit (€/kWh)** (Greek net billing, around €0.08).
3. Results update as you type — no submit button.

Below the results, two expanders open more detail: **How is this calculated?** and **Assumptions used — edit to refine**.

## What the result tells you

Four cards, updated instantly:

- **Savings per month** and **savings per year** — the reduction against the current bill
- **kWh generated per year** — total production for the modelled system
- **Self-sufficiency %** — the share of annual consumption covered by their own generation, with a progress bar below the cards

A short line also names the exported surplus in kWh, credited at the export rate you set.

## The live tariff feed — what's actually happening

The **Live — eurostat, YYYY-SN** badge next to the Import tariff isn't decoration — it pre-fills from Eurostat's semi-annual retail electricity price feed, and shows which semester you're seeing (e.g. `2025-S2` = second half of 2025).

If the feed is temporarily unreachable, the field falls back to a stored default (**€0.20/kWh** for Greece) and the badge doesn't appear. Type over the prefilled value if you have the customer's actual tariff.

## Assumptions used (and editable)

Defaults for Greek residential solar:

- **1,400 peak sun hours/year** — flat Greece national average, applied everywhere regardless of postcode (unlike roi-calculator, which uses a postcode table — Crete sits around 1,750 there).
- **80% performance ratio** — wiring losses, inverter efficiency, heat, dirt
- **70% self-consumption ratio** — the share consumed on-site without a battery
- **Export credit €0.08/kWh** — mid-point of the Greek net-billing range

Edit any of these in the expander — bump self-consumption up for a customer with a battery, drop the performance ratio for a shaded roof. The output updates as you edit, but changes aren't saved — reopening the tool resets to the defaults above.

## Difference from ROI Calculator and Solar Potential

- solar-potential answers "will the roof work?" from just an address.
- roi-calculator answers "how long before it pays back?" — a horizon question with install cost baked in.
- **Bill Savings Simulator** answers "what's the annual bill going to look like?" — a snapshot question, editable.

## Where to go from here

- The full pre-sales toolkit: pre-sales-tools-overview
- Payback-focused counterpart: roi-calculator
- Sizing from an address before any bill talk: solar-potential
