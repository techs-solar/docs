---
title: 'Panel Layout Designer — laying out panels per roof section'
tags:
  - pre-sales
  - layout
  - panels
  - roof
  - design
---

Panel Layout Designer is the sketch pad for planning where panels physically go on the roof — how many rows, which orientation, and which cells get skipped for skylights, chimneys, or awkward corners. Fast, click-heavy, and designed for a first-pass sanity check before the site visit.

## Not to be confused with the plant Layout tab

Two sidebar items both use the word "Layout":

- **Pre-Sales Tools → Panel Layout** (this page) — a **rooftop panel array** designer: rows of panels per roof section, landscape or portrait, how many kWp fits.
- **Plants & Monitoring → Plants → [any plant] → Layout tab** — a **system topology** designer for wiring inverter, battery, switchboards, and loads into a flow diagram. Documented separately at using-the-layout-designer.

## When to use it

Use it when you have a rough sense of the roof shape — from solar-potential, a Street View sketch, or an early photo — and want to plan the array before ordering equipment or sending a quote. Also useful mid-quote when a customer asks *"how many panels fit?"* with no real survey yet.

Not a substitute for a real roof survey — it doesn't know about pitch, shading over the day, or structural constraints; those need on-site measurement.

## Panel size library

Four sizes ship built in: **1134 × 1766 mm — 400 W**, **1134 × 1966 mm — 450 W** (default), **1134 × 2094 mm — 500 W**, and **Custom dimensions** for your own width, height, and wattage. Pick whatever matches what you'll actually order — wattage drives the kWp total, dimensions drive the panel-area total.

## How to design a roof section

1. From your sidebar, open **Pre-Sales Tools → Panel Layout**.
2. The tool starts with one section open — **Section A**. Pick the panel size from its dropdown (one size per section).
3. Set each row's panel count with **−**/**+**, and toggle **L**/**P** for landscape or portrait — orientation is per row.
4. Click **Add row** to stack another row below.
5. Click **Add section** (top-right) to plan a second roof plane — separate east/west faces, or a main roof plus a shed.

Sections are independent — mix panel sizes and orientations across sections for a mixed installation.

## Marking a panel as removed

Each panel on the canvas is a green rectangle. **Click any panel to mark it removed** — useful when a chimney, vent, or window cuts into the grid. Removed panels turn dark and stop counting toward totals; click again to restore. The mark is per-panel — a big obstacle means clicking each affected panel individually.

## What the totals tell you

Four live cards cover the whole design: **Total panels** (active, excluding removed), **kWp system** (total wattage ÷ 1,000), **kWh/yr estimated** (assumes 1,200 kWh/kWp·yr, a conservative Greek average — roughly 1,600 peak sun hours × 75% performance ratio), and **m² panel area** (physical roof coverage).

The generation figure is deliberately conservative, assuming worst-case shading and orientation. For a payback-focused number that factors in orientation and postcode, run the same system size through roi-calculator.

## Where to go from here

- The full pre-sales toolkit: pre-sales-tools-overview
- Sizing from an address before you draw anything: solar-potential
- Payback numbers for the panel count you've drawn: roi-calculator
- The other, unrelated "Layout" surface — the plant System Topology designer: using-the-layout-designer
