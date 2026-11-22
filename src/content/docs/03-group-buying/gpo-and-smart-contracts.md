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

When you fund a Group Purchasing Order, your goods money doesn't sit in Techs.Solar's bank account. It sits in your own single-purpose **escrow program** (a "smart contract") on a public, EU-friendly ledger — every member gets their own, and it holds only your money. Nobody — not us, not the coordinator, not the vendor — can redirect it. It can only ever go two places: to the vendor's bank account in stages as the goods provably progress, or back to your own wallet. This page explains that in plain terms. The binding version is your signed gpo-member-agreement-overview (clause 7 and Schedule F).

## Is this crypto? Am I taking cryptocurrency risk?

No — there is no currency risk and nothing to speculate on. Your euros become **EURe** — regulated electronic money, issued 1:1 for euros by an EU-licensed e-money institution (Monerium, EU-supervised) and redeemable 1:1 at any time. It's the same idea as a balance on a payment app, not an investment token. Its price can't "go down". You pay in by normal SEPA bank transfer. A refund comes back as EURe to your own wallet — the address you choose when you sign up — and you can redeem it to your bank at par whenever you like. The platform pays the ledger "gas" fees when you fund. Two actions are sent from your own wallet and cost a small gas fee: voting to abort a group order, and triggering a refund yourself.

**What you do have to do once:** before you can sign your first Member Agreement, you'll connect your Monerium account and choose the address your refunds return to. That address is yours, not ours — it's the fixed destination your money can always come back to, which is precisely what stops this being us holding your money. It's a one-time setup and it's two confirmations in your browser; later commitments take one. This is a hard requirement of how the escrow is built, not a step that can be skipped or deferred.

## The four payments, matched to progress

You fund **100% of the goods value upfront** into escrow — that's what unlocks wholesale pricing, because the vendor sees funded, guaranteed demand. Everything else arrives in installments tied to real progress:

1. **P1 — Goods into escrow.** Your goods amount, exact to the cent, paid into the escrow contract.
2. **P2 — Platform fees.** Fixed, known before you sign, invoiced once the whole group is fully funded.
3. **P3 — Landed-cost advance.** An estimated freight / customs / import-VAT advance, invoiced when your goods have actually shipped.
4. **P4 — Reconciliation.** A final true-up after delivery — refund if the estimate was high, a small top-up (capped at 5%) if it was low.

Only **Payment 1 — your goods money** — sits inside the escrow contract. The other two payments sit outside it, and we disclose that plainly: the platform fees (Payment 2) are ordinary invoices, and the landed-cost advance (Payment 3) sits in the importer's segregated operating account during customs clearance (a normal commercial arrangement, not escrow).

## Who decides when money is released

Never one party alone. Each milestone releases a fixed percentage of **your own** commitment — the percentages are set when your GPO is created and can't be changed afterwards — and needs independent cryptographic signatures:

- **Production (e.g. 30%)** — the manufacturer **and** the platform must both sign.
- **Shipping (e.g. 40%)** — the manufacturer **and** the shipping line must both sign, and the evidence they sign includes an Inspection Certificate confirming the loaded goods match the order.
- **Arrival / customs (remainder)** — the signers configured for your GPO (up to three, all must sign), disclosed in Schedule F before you fund.

Every release is signed against hashed evidence, so a release can't fire on the vendor's word alone. A released amount is paid to the vendor's registered bank account by SEPA transfer through the regulated issuer. Your contract will approve a payment to that one account only, and never to any other.

## Your refund rights don't depend on anyone

You don't sue and you don't wait on anyone's goodwill:

- If the group never fully funds by the funding deadline, the group order aborts automatically and every member who paid can get **100% of their own balance** back.
- If a milestone deadline lapses, the group order aborts and your refund becomes available — you get everything in your own contract that hasn't been released to the vendor (with the example percentages above: 100% before production, 70% after production, 30% after shipping), plus anything you paid in above your commitment.
- If more than 51% of the group by committed weight votes to abort, anyone can execute it and every member's unreleased balance becomes refundable.
- Once the group order has ended, **anyone — including you — can trigger your refund**, and it can only ever go to your own wallet. Nobody's permission is needed.
- Refunds keep working even during an emergency pause — that's written into the program itself, and the pause committee has zero power to move funds.

## What is NOT protected

Money **released** to the vendor for a completed milestone is owed to the vendor and is paid to their bank account. Once it has been paid, it's a real payment: if the vendor then fails, recovering it is a legal claim against the vendor, not an automatic escrow refund. An abort stops payouts that are still queued, but not an amount that has already been released. If a released amount isn't collected within the grace period set for your GPO (at least one day), it stops being held for the vendor and becomes refundable to you as well. What the escrow does is **cap** that exposure at the released stage (e.g. 30% after production) instead of the 100% a traditional full deposit would risk. Your Member Agreement states this in its own words — read it.

## If Techs.Solar disappears tomorrow

Your escrowed money doesn't care. The escrow runs by itself on a public ledger, your refund rights are enforced by code and anyone can trigger your refund to your own wallet, and the euros behind your EURe are redeemable at par directly from the regulated issuer under EU law (MiCA Art. 49) — independently of our company.

## You can verify all of it yourself

Your agreement's Schedule F names the public contract addresses. Every funding, release, and refund is a public transaction anyone can read, and the contract source code is published with its full test evidence (independently verified; an external professional audit is a hard condition before real money goes live). Any developer you trust can check the whole thing without trusting us.

## Why a smart contract instead of a lawyer's escrow account

Three things a traditional escrow can't do at this cost: refunds that nobody can block once a deadline passes, a balance anyone can verify at any time, and one uniform mechanism across every EU country instead of a separate escrow agent per market. It's deliberately low-key — you pay in by SEPA, the vendor is paid by SEPA, and anything returned to you lands in your own wallet, redeemable to your bank.

## Where to go from here

- What GPO is overall: what-is-gpo
- The binding contract behind all of this: gpo-member-agreement-overview
- What happens if a member can't pay: what-happens-if-a-gpo-defaults

The full installer-facing FAQ (money safety, payments, roles, privacy) is at the `/gpo/faq` page. For jurisdiction-specific questions, consult a lawyer — this page describes how the program works, not what a court will decide.
