---
title: 'Joining a group order via the GPO portal'
tags:
  - gpo
  - group-buying
  - portal
  - otp
  - acceptance-flow
  - escrow
---

The GPO portal (`/gpo`) is the direct way to join a group order — for when you already know GPO and want to browse open orders and commit on your own terms, independent of any specific customer quote.

This is a different path from the Quote Generator v2 shelf (see [How to join a group order](/03-group-buying/how-to-join-a-group-order/)), which surfaces GPO offers in the middle of authoring a customer quote. Both are permanent, valid ways to join — use whichever fits how you're working. The portal is a heavier, standalone commitment: signed agreements, not a quote line item.

## Step 0 — Enrol in the GPO Programme (one-time)

Before you can join any individual order, you enrol once:

1. On your main installer dashboard, find the **GPO Programme** card
2. Accept the Programme Overview terms (a short opt-in checkbox)
3. You're now enrolled — this unlocks the ability to express interest in any open order

If you skip this and try to express interest directly, you'll be redirected back with a prompt to enrol first.

## Step by step — joining an order

1. Open the GPO portal (`/gpo` in your account menu)
2. Browse **open orders** — orders you haven't joined yet, shown with product, GPO price vs spot, minimum quantity, and how many installers have already joined
3. Open an order to see its full detail (Overview, Commitment, Payments, Documents, Timeline tabs)
4. Click **Express interest** and accept the Preliminary Participation Memorandum — this creates your membership at `interested` status. A PDF copy of the Memorandum is emailed to you automatically as your acceptance receipt. No payment, no firm obligation yet.
5. Submit your commitment quantities (how many units you want)
6. On your first commitment, you're taken into a short 4-step agreement flow:
   - Review the Member Agreement document
   - Review key terms as plain-language cards (binding commitment, funding 100% of goods into escrow, where your money sits, the four payments, automatic refunds, what isn't protected, cost of default, Greek law)
   - Acknowledge the escrow-settlement clauses individually (your money becomes regulated e-money, automated milestone release, your personal data stays off the public ledger, roster fixed at deployment, Greek law regardless of the technology) plus any per-country items
   - Sign — enter your name and role, then verify with a 6-digit code sent to your email. For some countries and higher-value orders, a second 6-digit code is also sent by SMS and must be verified before signing completes.
7. Once verified, your commitment is confirmed and locked. A signed copy of the Member Agreement is emailed to you automatically.
8. You then fund **100% of the goods value** into the escrow program by SEPA transfer (exact to the cent). See [GPO and smart-contract escrow — where your money sits and how it moves](/03-group-buying/gpo-and-smart-contracts/) for where that money sits and how it's released.

If you want to change your quantities later, you can re-commit without going through the agreement flow again — you already signed it.

## Can I change my mind?

Yes, up until you're committed (or already in late payment) — use **Withdraw** on the order page. Once committed, withdrawal follows the order's default/substitution process instead (see the order's Timeline tab for what applies).

## What if the order fills up before I commit?

Once you've expressed interest, your spot isn't guaranteed until you complete the agreement — if the order reaches capacity first, it closes to further commitments.

## Which way should I join — portal or Quote v2?

- **Already know you want in on a specific group order, no particular customer yet?** Use the portal directly.
- **Mid-quote, and a matching GPO offer happens to be live for what you're quoting?** Use the Quote v2 shelf (see [How to join a group order](/03-group-buying/how-to-join-a-group-order/)) — it applies the GPO price to that quote without a trip to the portal.

They're separate systems under the hood — a portal membership and a Quote v2 earmark don't currently share the same record — but from your side, both get you into the same group order.
