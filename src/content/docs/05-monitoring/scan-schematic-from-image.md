---
title: 'Scan schematic from image — turn a wiring diagram into a canvas draft'
tags:
  - monitoring
  - plant
  - layout
  - schematic
  - ocr
  - ai-vision
---

Scan schematic takes an image or PDF of a wiring diagram and drafts the corresponding System Topology on your canvas — instead of clicking every node and edge yourself, the platform reads the diagram and gives you a starting draft to refine.

## When to use it

Reach for it whenever the topology exists in some form other than the platform's own canvas: a paper schematic left by a previous installer, a manufacturer PDF for a specific inverter + battery combo, a hand-drawn on-site sketch, or documentation from a system built before it landed on techs.solar.

If you already have an STX file, use importing-and-exporting-stx instead — it's exact rather than interpreted.

## How to run it

1. Open the plant's **Layout** tab.
2. Click the **Scan schematic** button in the toolbar (right end, teal).
3. Upload the file. Supported formats:
   - **JPEG** or **PNG** — photos or scans of paper diagrams
   - **PDF** — multi-page PDFs are accepted; the reader is instructed to focus on whichever page looks most relevant, though this isn't a guaranteed mechanism — a single-page PDF is the safer bet
4. Confirm. Processing runs in the background with no progress bar — the plant page refreshes periodically, so the draft topology simply appears on your canvas once it's ready.

## What you get back

The result lands directly on your canvas, already arranged in columns — nothing to place by hand first. Edges get one of four bus types: **DC power**, **AC power**, **Data**, or **Control**, matching the Layout canvas legend colours.

It tracks its own confidence per item internally, but that doesn't currently show as a visual flag on the canvas — nothing highlights which nodes it was unsure about. Treat the whole draft as worth double-checking against the original image rather than looking for a specific marker. If you want to tidy the arrangement afterward, **Auto-layout** will re-flow everything — unconditionally, overwriting manual positioning too, so run it before you fine-tune by hand, not after.

## What Scan schematic doesn't do

- **Device linking** — it identifies node types, not specific brands or serial numbers. Link each node to a real monitored device on the Devices tab afterward for live data (setting-up-a-monitoring-inverter).
- **Full spec extraction** — panel wattages, exact inverter models, cable gauges, and voltage levels rarely come through with confidence; fill these in manually.
- **Perfect fidelity** — it's a starting point. A messy scan, an unusual layout, or a heavily stylised diagram produces a rougher draft. Always eyeball the result against the original before treating the canvas as authoritative.

## When something goes wrong

If a scan can't be parsed — too blurry, too abstract, an unexpected format — it retries a few times in the background and then gives up with no error shown. If nothing shows up within a few minutes, try a cleaner or higher-resolution scan, a single-page PDF instead of multi-page, redrawing the trickiest section and re-scanning it alone, or just drawing the topology by hand in the Layout Designer if it's too unusual for the parser.

## Where to go from here

- The canvas the scan populates: using-the-layout-designer
- If you have an STX file instead of an image: importing-and-exporting-stx
- Once nodes are placed, connect them to real hardware: setting-up-a-monitoring-inverter
