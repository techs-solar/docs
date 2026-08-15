---
title: 'Solar Potential — analyse a rooftop from just an address'
tags:
  - pre-sales
  - calculator
  - google-solar
  - roof-analysis
---

Solar Potential is the fastest way to size a rooftop before you visit — paste in an address and get an estimate of usable roof area, annual generation, and the shape of the sun year-round. Powered by Google's Solar API, no manual roof measurement needed.

## When to use it

Reach for Solar Potential whenever a homeowner gives you their address and you want a same-conversation answer to *"is my roof worth it?"* — before you send a quote, before you drive out, often before they're ready to commit to a site visit.

It's not a substitute for a real survey. Google's data covers most European cities well but has gaps in rural areas, and it doesn't know about a tree planted last year or a roof extension from three. Treat the output as a first-pass worth-visiting signal, not a final bill of materials.

## How to run it

1. From your sidebar, open **Pre-Sales Tools → Solar Potential**.
2. In the **Address** field, paste a postal address, a raw latitude/longitude, or a Google Maps link.
3. Click **Analyse Solar Potential**.

The result usually returns within a few seconds. If Google's data doesn't cover the address you gave, you'll see an error saying so — try a nearby known address if you're spot-checking a small village.

## What the result tells you

You get, for the analysed roof:

- **Usable roof area** — the flat surface Google identified as suitable for panels, after excluding chimneys, edges, and low-sun regions.
- **Annual generation estimate** — the expected kWh output over a full year, in the analysed location's climate.
- **Monthly shape** — generation distributed month by month, using a fixed seasonal curve calibrated to Greek PVGIS data (peak June–August around 12–13% each, low December under 4%). Applied to every analysis today regardless of country — treat it as indicative, not locally precise, outside Greece.
- **Suggested system size** — a rough kWp number based on usable area and typical panel density.

Everything except the address is derived, not entered — so you don't have to guess numbers before the customer conversation.

## Cost — none to you

Solar Potential runs on your techs.solar plan — no per-lookup fee, no key to configure. Lookups are rate-limited to a handful per minute to protect the shared quota; ordinary single-address use won't come close, but if you hit it you'll see a short "please wait" message. Analyses are cached by rooftop location, so re-opening the same rooftop — even one another installer already looked up — is free and instant.

## What Solar Potential doesn't do

- **Full financial analysis** — for payback and 20-year savings, use roi-calculator.
- **Roof layout drawing** — for laying out panels per section by hand, use panel-layout.
- **Bill-based sizing** — to size from a customer's actual consumption, use Bill Analyzer.
- **Live shading assessment** — Google's data is a snapshot; only an on-site survey catches new obstacles.

## Where to go from here

- Broader look at what the pre-sales toolkit does: pre-sales-tools-overview
- Once you have an address, run the numbers: roi-calculator
- Drawing panels on the roof section: panel-layout
