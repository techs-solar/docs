---
title: 'GPO and smart-contract escrow — where your money sits and how it moves'
tags:
  - gpo
  - escrow
  - smart-contract
  - eure
  - monerium
  - milestones
  - money-safety
---

When you fund a Group Purchasing Order, your goods money doesn't sit in Techs.Solar's bank account. It sits in a single-purpose **escrow program** (a "smart contract") on a public, EU-friendly ledger. Nobody — not us, not the coordinator, not the vendor — can redirect it. It can only ever go two places: to the vendor in stages as the goods provably progress, or back to you. This page explains that in plain terms. The binding version is your signed gpo-member-agreement-overview (clause 7 and Schedule F).

## Is this crypto? Am I taking cryptocurrency risk?

No. Your euros become **EURe** — regulated electronic money, issued 1:1 for euros by an EU-licensed e-money institution (Monerium, EU-supervised) and redeemable 1:1 at any time. It's the same idea as a balance on a payment app, not an investment token. Its price can't "go down". You never own or touch cryptocurrency: you pay in by normal SEPA bank transfer, and any refund comes back by normal SEPA transfer. The platform pays the ledger "gas" fees — never you.

## The four payments, matched to progress

You fund **100% of the goods value upfront** into escrow — that's what unlocks wholesale pricing, because the vendor sees funded, guaranteed demand. Everything else arrives in installments tied to real progress:

1. **P1 — Goods into escrow.** Your goods amount, exact to the cent, paid into the escrow contract.
2. **P2 — Platform fees.** Fixed, known before you sign, invoiced once the whole group is fully funded.
3. **P3 — Landed-cost advance.** An estimated freight / customs / import-VAT advance, invoiced when your goods have actually shipped.
4. **P4 — Reconciliation.** A final true-up after delivery — refund if the estimate was high, a small top-up (capped at 5%) if it was low.

Only **Payment 1 — your goods money** — sits inside the escrow contract. The other two payments sit outside it, and we disclose that plainly: the platform fees (Payment 2) are ordinary invoices, and the landed-cost advance (Payment 3) sits in the importer's segregated operating account during customs clearance (a normal commercial arrangement, not escrow).

## Who decides when money is released

Never one party alone. Each milestone releases a fixed share of the pool and needs independent cryptographic signatures:

- **Production (30%)** — the manufacturer **and** the platform must both sign.
- **Shipping (40%)** — the manufacturer **and** the shipping line must both sign, and the evidence they sign includes an Inspection Certificate confirming the loaded goods match the order.
- **Arrival / customs (remainder)** — the signers configured for your GPO (up to three, all must sign), disclosed in Schedule F before you fund.

Every release is signed against hashed evidence, so a release can't fire on the vendor's word alone.

## Your refund rights are automatic

You don't sue and you don't wait on anyone's goodwill:

- If the group never fully funds by the funding deadline, the escrow auto-aborts and everyone who paid gets **100% back**.
- If a milestone deadline lapses, your refund window opens by itself — you get your **unreleased** share (100% before production, 70% after production, 30% after shipping).
- If more than 51% of the group by committed weight votes to abort, anyone can execute it and remaining funds become refundable.
- Refunds keep working even during an emergency pause — that's written into the program itself, and the pause committee has zero power to move funds.

## What is NOT protected

Money already **released** to the vendor for a completed milestone is a real payment. If the vendor then fails, recovering it is a legal claim against the vendor, not an automatic escrow refund. What the escrow does is **cap** that exposure at the released stage (e.g. 30% after production) instead of the 100% a traditional full deposit would risk. Your Member Agreement states this in its own words — read it.

## If Techs.Solar disappears tomorrow

Your escrowed money doesn't care. The escrow runs by itself on a public ledger, your refund rights are enforced by code, and the euros behind your EURe are redeemable at par directly from the regulated issuer under EU law (MiCA Art. 49) — independently of our company.

## You can verify all of it yourself

Your agreement's Schedule F names the escrow's public address. Every funding, release, and refund is a public transaction anyone can read, and the contract source code is published with its full test evidence (independently verified; an external professional audit is a hard condition before real money goes live). Any developer you trust can check the whole thing without trusting us.

## Why a smart contract instead of a lawyer's escrow account

Three things a traditional escrow can't do at this cost: refunds that execute themselves on a deadline, a balance anyone can verify at any time, and one uniform mechanism across every EU country instead of a separate escrow agent per market. It's deliberately invisible — you experience it as SEPA in, SEPA out.

## Where to go from here

- What GPO is overall: what-is-gpo
- The binding contract behind all of this: gpo-member-agreement-overview
- What happens if a member can't pay: what-happens-if-a-gpo-defaults

The full installer-facing FAQ (money safety, payments, roles, privacy) is at the `/gpo/faq` page. For jurisdiction-specific questions, consult a lawyer — this page describes how the program works, not what a court will decide.
