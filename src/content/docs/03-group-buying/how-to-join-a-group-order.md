---
title: 'How to join a group order'
tags:
  - gpo
  - group-buying
  - quote
  - soft-reserve
  - escrow
---

There are two ways to join a group order, and both are permanent, valid paths:

- **In the middle of authoring a customer quote** — Quote Generator v2 surfaces every active GPO offer for your country at the top of Tab 1, so you can pick one and apply it to that specific quote in one click. Covered on this page.
- **Directly through the GPO portal (`/gpo`)** — for when you already know GPO and want to browse open orders and commit on their own terms, independent of any specific customer. Covered in [Joining a group order via the GPO portal](/03-group-buying/joining-via-gpo-portal/).

This page walks through the first path — joining via Quote Generator v2.

## Step by step

1. Open Quote Generator v2 from your dashboard (Apps → Quote Generator v2)
2. At the top of **Tab 1 (Customer & System)** you'll see the **Group Orders — open now** shelf. Every active GPO offer for your country appears as its own card — panels, inverters, batteries — with the price, savings per unit, delivery window, deadline, and how many slots remain
3. Pick the card you want and click **Add to this quote →**. That single click:
   - Fills the matching BOM fields on Tab 1 (panel brand and Wp for panel offers, inverter brand for inverter offers, and so on)
   - Adds the product as a line item on Tab 2
   - Soft-reserves your slot in the group order
4. The card flips to **Added to this quote ✓** with a small **Remove** link if you change your mind
5. You can add cards from multiple categories in the same quote — one GPO panel + one GPO inverter is fine, each earmarks its own slot
6. Generate the quote as normal and send it to your customer

That's it. If your customer accepts, the slot becomes a firm commitment. If they don't, the slot is released automatically after 72 hours.

## What about the green tip card below the BOM?

If you type a panel or inverter brand manually (without going through the shelf) and that brand happens to match an active GPO offer, a small green **GPO procurement available for this brand** tip appears below the field. It's a secondary cue — a confirmation that the shelf offer applies to what you just typed, with an **Earmark GPO slot** button that does the same soft-reserve as the shelf.

You can use either surface. The shelf is the primary discovery mechanism (all offers upfront, one click); the tip is a confirmation for installers who prefer to type their BOM first and see if a match exists.

## What happens after the customer accepts

When you mark the quote as Accepted in your quotes list, techs.solar locks your slot at the GPO price. To turn that into a firm place in the order you sign the Member Agreement (a short electronic-signature ceremony) and fund your goods amount into the escrow program — 100% upfront, held safely and released to the vendor only against signed proof of progress. See [GPO and smart-contract escrow — where your money sits and how it moves](/03-group-buying/gpo-and-smart-contracts/) for where the money sits, and gpo-member-agreement-overview for what you're signing. You'll receive delivery details as the group order progresses.

## Can I join multiple group orders?

Yes — one per category per quote. If a quote uses GPO panels AND GPO inverters, both are earmarked independently. If you're quoting multiple jobs at the same time, each quote can have its own GPO commitments.

## What if the offer sells out before my customer accepts?

Your slot is held for up to 72 hours while the quote is pending. If the programme's total capacity fills before your customer accepts, your slot is released and you revert to spot pricing. The shelf card shows how many slots remain (**480 left**, etc.) so you can see live urgency.

## How do I stop showing an offer in my quote?

Click the **Remove** link under the **Added to this quote ✓** pill on the shelf card. That clears the earmark, deletes the auto-added line item, and unlocks the BOM fields so you can type a different brand. Changing the panel brand or inverter brand to something that doesn't match the earmarked product does the same thing automatically.

## Where do I learn more about how GPO works overall?

Click **▸ How does this work?** at the bottom of the shelf on Tab 1. That opens a short 3-step explainer covering reserve → generate → customer accepts → slot locks. Also see what-is-gpo and what-is-a-soft-reserve.
