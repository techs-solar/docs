---
title: 'Substitution and reallocation — the two remedies around a defaulted slot'
tags:
  - gpo
  - substitution
  - reallocation
  - default
  - group-buying
---

This page explains the two mechanisms techs.solar uses around a struggling or defaulted GPO membership: **substitution** (a pre-default rescue that keeps the slot filled by someone else, with the defaulting member walking away cleanly) and **reallocation** (a post-default distribution of the gap left in the order). If you're figuring out what happens overall when a member defaults, start with what-happens-if-a-gpo-defaults and come back here for the mechanics.

## Substitution — a rescue before default confirms

Substitution is the option for a member who can no longer fulfil their commitment but wants to avoid a confirmed default on their record. You can propose a substitute from the moment your membership enters **late payment** — you don't have to wait for a formal notice.

### Who can propose

Only the member whose slot is in trouble. You propose from the order page; substituting isn't something another installer can initiate on your behalf.

### What the proposal contains

- **Substitute installer** — either an existing techs.solar installer account (identified by ID) or an outside installer you're introducing (their company name, contact email, and phone)
- The order-configured **substitution fee**, if any — set per-order on the coordinator's side

### One pending proposal at a time

You can only have one substitution proposal open at once. If the coordinator rejects it, you can propose a different substitute; while a proposal is pending, you can't start another.

### Coordinator decision

The proposal goes to the order's coordinator, who reviews and either accepts or rejects. On acceptance:

- A new membership is issued to the substitute
- Your original commitment transfers to them
- The substitution fee becomes payable
- Your membership moves straight to **substituted** — a clean exit; default never confirms on your slot

On rejection, you're free to propose someone else, cure the payment, or let the situation move toward default confirmation.

## Reallocation — settling the gap after default confirms

Reallocation is a separate process, run only after a member has already been marked **defaulted**. It's not an alternative that saves the defaulting member — that opportunity has passed. It's how the order redistributes the quantity the defaulted member was going to take.

### When it opens

The coordinator opens a reallocation window on a defaulted slot. Each window has:

- A **quantity available** — the units the defaulted membership was committed to
- An **opens-at** and **closes-at** timestamp — the bidding window is time-boxed

### Who can bid

Only **committed members of the same order** other than the defaulted one, and only one bid per membership at a time.

### How bidding works

You submit a bid stating how many units you want (from 1 up to the total quantity available). The bid enters `pending` status until the window closes. Before then, you can:

- **Update your bid** — resubmitting overwrites the previous one
- **Withdraw your bid** — pulls you out of that reallocation entirely, no penalty

### When the window closes

Settlement is automatic, not a coordinator judgment call. Once `closes_at` passes, the platform allocates the available quantity **pro-rata across every pending bid**, weighted by how much each bidder asked for and rounded down to whole units — so if demand exceeds supply, most bidders get a partial amount of what they requested rather than a flat yes/no. A bid only gets rejected outright if its pro-rata share rounds down to zero.

### If the window doesn't fill

Partial cover is normal — bids don't have to equal the total quantity available. Any uncovered shortfall is handled per the order's terms; the defaulting member's status stays at **defaulted** either way, and reallocation doesn't undo that.

## Where to go from here

- The overall cascade, in plain terms: what-happens-if-a-gpo-defaults
- The Member Agreement that binds all of this: gpo-member-agreement-overview
- How you joined the order in the first place: [Joining a group order via the GPO portal](/03-group-buying/joining-via-gpo-portal/)

For jurisdiction-specific advice on default remedies, consult a lawyer. This page describes platform behavior, not what a court will decide.
