---
title: "Using the Layout Designer — the plant's System Topology view"
tags:
  - monitoring
  - plant
  - layout
  - topology
  - stx
  - schematic
---

The Layout tab is where you describe a plant's **System Topology** — the wiring of inverter, battery, switchboards, and loads as a diagram you can look at, share, and store as data. It's the single source of truth for how the plant fits together.

## Not to be confused with Panel Layout

Two features share the word "Layout": panel-layout plans how many roof modules fit; this page's **Layout tab** wires up inverter, battery, switchboards, loads, and grid connections. Different tool, different job.

## What System Topology captures

Every plant has a set of curated node types the tool recognises: PV Array, Inverter, Battery, DC Switchboard, AC Switchboard, EPS Board, Grid Connection, Generator, EV Charger, Hot Water Buffer, Heat Pump, and Smart Load Port. Anything else — a fire switchboard, a server rack — still drops onto the canvas fine, just as a generic labelled node.

Edges between nodes represent four physical bus types, colour-coded: **DC** orange (panels → inverter, battery ↔ inverter), **AC** blue (inverter → switchboard → loads, grid feeds), **Data** grey (monitoring/protocol connections), **Control** purple (relay/dry-contact lines to trigger loads).

Nodes show a "no device" pill until linked to a real monitored device from the Devices tab — one linking step, then the node reflects live data (production, state of charge, load draw) and gives alert rules a specific device to watch.

## Three ways to draw the same diagram

Three toolbar buttons — **Spatial / Wizard / Busbar** — switch between interchangeable views, all writing to the same underlying data, so nothing is lost moving between them:

- **Spatial** (default) — a free block-builder canvas: drag nodes, draw edges. Best for matching a real physical diagram.
- **Wizard** — a guided "tell me about your install" flow: structured questions (inverter, battery, loads) build the topology for you. Best for a first-time standard setup.
- **Busbar** — a layered rows-of-buses view (DC / EPS / AC / Smart Loads / Grid) for spotting overloads at a glance.

## Editing toggle

The **Editing** toggle controls whether the canvas accepts changes. Turn it off to lock the diagram to view-only — sharing a screen with a customer, reviewing a finished plant, or just not wanting to accidentally drag something. Turn it back on to resume changes.

## Auto-layout, Fit view, and zoom

**Auto-layout** re-arranges every node with a graph-layout algorithm — useful right after a messy drag or an STX import with no position hints. It's unconditional: every node's position gets overwritten, including ones you've carefully placed by hand, with no undo. Use it right after import, not on a diagram you've already fine-tuned. **Fit view** zooms to show every node in one frame; the zoom control handles manual detail inspection.

## STX and Scan schematic

**STX** (export + import) is techs.solar's own machine-readable **Solar Topology eXchange** format for saving, backing up, or sharing a plant's wiring — full walkthrough at importing-and-exporting-stx. **Scan schematic** uploads a photo or PDF of a wiring diagram and parses it into a topology draft you refine afterward — full walkthrough at scan-schematic-from-image.

## Where to go from here

- What monitoring is for: what-is-monitoring
- Getting a Deye Cloud inverter connected first: setting-up-a-monitoring-inverter
- STX export/import mechanics: importing-and-exporting-stx
- Scanning a paper schematic: scan-schematic-from-image
- The unrelated pre-sales tool: panel-layout
