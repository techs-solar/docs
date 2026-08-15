---
title: 'What happens if a GPO member defaults — the cascade in plain terms'
tags:
  - gpo
  - default
  - substitution
  - reallocation
  - group-buying
  - escrow
---

This page describes what happens inside a Group Purchasing Order when a committed member doesn't pay what they owe. It's about the mechanics the platform runs, not the binding legal consequences — those are in the gpo-member-agreement-overview you signed at the portal. Read that alongside this page if you're actively dealing with a default situation.

First, the good news if you *have* funded: money you've already paid into the escrow is protected by code — it can only be released to the vendor against signed milestone evidence, or refunded to you (see [GPO and smart-contract escrow — where your money sits and how it moves](/03-group-buying/gpo-and-smart-contracts/)). "Default" is about a member who owes and hasn't paid: most often failing to fund your escrow amount after you signed, or later missing a fee (P2) or landed-cost (P3) invoice.

## What counts as a default

A default doesn't happen the moment a payment misses — the platform moves you through named stages, and default confirming is a deliberate step, not something that happens automatically once time runs out:

- **Late payment** — a payment you owe (funding the escrow, or a fee / landed-cost invoice) failed or wasn't made by its due date. This is a soft state; you can still cure it by paying, and you can still propose a substitute (see below).
- **Notice of default** — the late-payment state has persisted past the notice threshold defined for the order. Still curable, still substitutable — this is a warning stage, not the default itself.
- **Default confirmed** — the order's coordinator declares default on your membership. This step is deliberate and irreversible once taken; it's what actually triggers the Member Agreement's default consequences.

The exact thresholds (how long a payment can be late before "notice of default" applies, how many days a cure window lasts) are set per-order and stored on the order itself — they aren't a single global number.

## Substitution — your way to avoid default entirely

If you can't fulfil your commitment but know another installer who can, you can propose them as your substitute directly from the order page, any time from **late payment** through **notice of default** — you don't have to wait for a warning to act. The proposal names the substitute's company and contact details and goes to the order's coordinator for a decision.

If accepted, a new membership is issued to the substitute, your original commitment transfers to them, and any substitution fee configured for the order becomes payable. Your membership moves straight to substituted — default never confirms on your slot.

If rejected, or if you don't propose one, and the coordinator decides not to wait any longer, default confirms.

## After default confirms — reallocation

Reallocation isn't an alternative to default confirming — it's what the coordinator does next, on a slot that's already defaulted. Once your membership reaches **default confirmed**, the coordinator can open a **reallocation window** with the quantity you were committed to and a fixed close time. Existing members of the same order can bid to absorb some or all of that quantity. When the window closes, the bids are settled — successful bidders take on the absorbed quantity.

Your membership stays in the defaulted state either way; reallocation fills the order's gap, it doesn't undo your default.

## What "default confirmed" means for you

Once default confirms, the consequences follow the Member Agreement — this page can't summarise every clause because the exact terms vary by jurisdiction and by the order's configuration. In broad shape: the accumulated payments are treated per those terms, storage costs that accrue on your slot are settled, and further participation in that order ends. Your account isn't automatically closed; whether you can join future orders depends on the terms too.

## What the platform tracks along the way

Reallocation window open/close and bid outcomes appear on the order's Timeline tab in the portal. Substitution proposals and default-notice issuance are recorded on the platform side but aren't currently shown on your installer Timeline — if you need that history, ask the order's coordinator or support directly.

## Where to go from here

- The binding legal document behind all of this: gpo-member-agreement-overview
- Deeper mechanics of substitution and reallocation: substitution-and-reallocation
- How you joined the order in the first place: [Joining a group order via the GPO portal](/03-group-buying/joining-via-gpo-portal/)

For jurisdiction-specific advice on default and remedies, consult a lawyer. This page describes platform behavior, not what a court will decide.
