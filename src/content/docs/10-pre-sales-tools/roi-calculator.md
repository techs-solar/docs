---
title: 'ROI Calculator — a payback estimate you can quote in the first call'
tags:
  - pre-sales
  - calculator
  - roi
  - payback
  - savings
---

The ROI Calculator gives a homeowner a 20-year payback picture from three numbers: monthly bill, roof orientation, and postcode. Useful the moment the conversation turns to *"is this worth it?"* — quote payback years and lifetime savings before you've measured a thing.

## When to use it

On a first phone call, a walk-in enquiry, or a follow-up on a website lead — any time you have the customer's rough monthly bill and a postcode. Answerable in under a minute, and the numbers hold up well enough to set realistic expectations.

Not a substitute for a real quote — this is a sizing-and-framing tool; the Quote Generator is where a customer-ready price lives.

## How to run it

1. From your sidebar, open **Pre-Sales Tools → ROI Calculator**.
2. Fill in **average monthly electricity bill** (€), **roof orientation** (South ★ best / South-East / South-West / East / West / North), and optionally your **postcode**.
3. Click **Calculate My Solar ROI** — results appear immediately below.

## What the result tells you

- **Payback years** — how long before cumulative savings equal system cost. Sunny orientations on a bright postcode pay back faster.
- **Annual savings** — a first-year figure combining self-consumption savings (~70% of generation, no battery) and export credit under Greek net billing (Law 4685/2020).
- **20-year lifetime savings** — first-year savings extrapolated with 0.5%/year panel degradation.
- **Recommended system size** — sized to cover about 80% of annual consumption, capped at 10.8 kWp for single-phase connections (Greek regulatory limit).

## How the estimate is built

**The tariff is genuinely live and per-country** — it fetches your country's current electricity rate from a Eurostat-backed feed, falling back to a stored default (€0.20/kWh for Greece) if the feed is temporarily unreachable.

**The postcode, orientation, sizing cap, and install cost figures are Greek-calibrated today, applied regardless of your country.** A Greek irradiance table is keyed by the first digit of the postcode — Attica around 1,620 kWh/kWp/yr, Central Greece around 1,650, Crete up to 1,750, the North closer to 1,550. Leave the postcode blank and it falls back to a nationwide average (1,580), fine for a first-pass conversation but off by roughly -8% to +11% depending on the actual zone. Outside Greece, treat these figures as a rough analogue, not a locally-calibrated number.

**Orientation applies a multiplier** to that irradiance figure: South = 1.00, South-East / South-West = 0.95, East / West = 0.85, North = 0.65. That range alone can shift payback by two or three years.

**Install cost is all-in** — components, labour, permits, grid connection. The tool uses €1,300/kWp installed, intentionally higher than the Cost Estimator's Standard-tier total because it includes the permit + connection fees the other tool doesn't.

## Difference from Bill Savings and Solar Potential

- solar-potential answers "will the roof work?" from just the address.
- **ROI Calculator** answers "how long before it pays back?" from a bill + roof + location.
- bill-savings answers "what does the annual bill drop to?" with editable, live tariffs.

Reach for whichever question the customer is actually asking.

## Where to go from here

- The full pre-sales toolkit: pre-sales-tools-overview
- If you have the address before the bill: solar-potential
- If the customer wants a savings-per-year framing instead: bill-savings
