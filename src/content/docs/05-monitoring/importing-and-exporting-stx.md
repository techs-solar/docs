---
title: 'Importing and exporting STX — Solar Topology eXchange files'
tags:
  - monitoring
  - plant
  - layout
  - stx
  - topology
  - export
  - import
---

STX — **Solar Topology eXchange** — is techs.solar's open, machine-readable format for a plant's wiring diagram. Export it and you get a portable JSON document describing every node, edge, and layout hint; import it and that topology draws onto a plant's canvas in one step. Useful for backups, templates, and sharing between installers.

## What an STX file contains

An STX document is a JSON file with two top-level lists:

- **nodes** — every block on the canvas: type (Inverter, Battery, DC Switchboard, EV Charger, etc.), any attached component specs, and an `x/y` position hint.
- **edges** — every connection: which bus type (DC, AC, Data, Control), which two nodes it links, and, on recent exports, the voltage level.

A short metadata block sits alongside — the plant's own name, the tool that produced the file, and, when known, commissioning date, system size, and phase type. No export timestamp exists.

What STX does **not** carry: your device linkages. A node on the canvas can be linked to a real monitored device (a Deye inverter, a Shelly relay, a Modbus meter) to show live production, state of charge, or load draw. STX preserves the node itself but not that link — after import, you re-link nodes to devices on the Devices tab.

## Exporting

On any plant's **Layout** tab, click the **STX** button in the toolbar. The current topology downloads as a JSON file named for the plant. That's it — no dialog, no options.

Every node and edge on the canvas is included, including the `x/y` position hints. That means if you re-import into a fresh plant, the diagram lands where you left it — no need to run Auto-layout afterwards.

## Importing

Click the **Import STX** button in the same toolbar and choose the file. On confirmation, the platform:

1. Validates the file has the required structure (nodes and edges lists)
2. **Wipes any existing topology on the target plant** — replacement, not a merge
3. Writes the imported nodes and edges as a fresh canvas
4. Reports back counts: how many nodes and edges landed, and how many edges were skipped as invalid

Because import is a replace, don't import into a plant with real work you want to keep — export first to save a backup if in doubt. A small number of invalid or mismatched edges get skipped rather than blocking the whole import.

## Typical use cases

- **Backup before a big change.** Export before you start reshaping a diagram; import the export if you want to revert.
- **Move a template between plants.** Draw a standard hybrid-inverter setup once, export it, then import it as the starting point for every similar install.
- **Share a design with another installer.** Send a colleague an STX file rather than a screenshot — they can import it into their own plant. This is installer-to-installer only; customers have no way to open an STX file on the platform.

## Where to go from here

- The canvas the STX file describes: using-the-layout-designer
- If you have a paper or PDF schematic instead of an STX file: scan-schematic-from-image
- Once the topology is imported, connect the real inverter: setting-up-a-monitoring-inverter
