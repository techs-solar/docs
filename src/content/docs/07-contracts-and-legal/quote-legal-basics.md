---
title: 'Quote legal basics — what a quote is, when it binds you'
tags:
  - quote
  - legal
  - contracts
  - vat
---

This page explains what a quote from techs.solar is legally, when it becomes binding, and how the validity window works. Read it before your first serious customer conversation. For jurisdiction-specific questions, consult a lawyer — this describes platform behavior, not what a court will decide.

## A quote is an offer, not a contract

When you generate a quote in Quote Generator v2 and send it to a customer, you're making a **binding offer** — to perform the work at the stated price, terms, and period. Legally in most EU jurisdictions this is an *offer*: "if you accept this, I will do the job on these terms."

Nothing is a contract yet — your customer hasn't agreed, and either side can walk away with no obligation.

## When it becomes binding

A contract forms when your customer **accepts** the quote — usually by signing it, replying with clear written acceptance, or (in some jurisdictions) by paying a deposit against it. From that moment:

- You are obligated to perform the work at the quoted price, timeline, and scope
- Your customer is obligated to pay under the terms stated
- Changes require both parties to agree in writing (a variation or new quote)

For a quote with no GPO product attached, marking it **Accepted** in your quotes list is how techs.solar records the moment for internal tracking — it doesn't itself create the contract. The customer's actual acceptance (their signature, their email, their deposit) is what counts.

**If the quote includes a Group Purchasing Order (GPO) product, marking it Accepted does more than record a moment — it converts your soft reserve into a hard commit on that group order, immediately and permanently.** Your reserved slot becomes a committed one, and the hold period clears. This cannot be undone by changing the quote status back. See what-is-a-soft-reserve for what soft reserve vs. hard commit actually means for your obligation.

## The validity window

Every quote has a **Valid for** field, in days. The default is 30. This is the period during which your offer stands — after it expires, the customer no longer has the right to accept at those prices.

- Inside the window: customer can accept, contract forms
- Outside the window: quote is expired, you can re-issue at current prices or decline

Set it realistically — panel and inverter prices move, and a 90-day validity risks locking you into stale pricing.

If a customer accepts on the last day and you receive it the next day, most jurisdictions still treat it as in time — but don't rely on that. Treat expiration as final unless your lawyer says otherwise.

## VAT — displayed, not adjusted

The **Include VAT** toggle and **VAT rate %** field only control how VAT appears on the quote PDF — techs.solar doesn't calculate or file VAT for you. The rate you set is what prints. Use your country's rate if VAT-registered; uncheck the toggle if not. Your tax obligations are yours.

For Greece, the default is 24%. Other EU countries vary.

This is separate from VAT on your own techs.solar subscription — that's based on your business's country and isn't affected by this toggle.

## What happens if the customer withdraws before accepting

They can — before acceptance, your offer stands but they owe you nothing. This is normal.

If they've already accepted and try to withdraw, that's governed by consumer-protection law and any withdrawal clauses in the quote body. Common EU baseline: a 14-day right of withdrawal for distance-sold consumer contracts. Consult a lawyer for the exact rule where you operate.

## How this differs from a GPO Member Agreement

If your quote uses a GPO product, two legal documents are in play: **the customer quote** (this page) and the **GPO Member Agreement** (between you and techs.solar, signed via the GPO portal — [Joining a group order via the GPO portal](/03-group-buying/joining-via-gpo-portal/)). Your customer never signs it. See [Joining a group order via the GPO portal](/03-group-buying/joining-via-gpo-portal/) and what-is-gpo for how the two interact.

## Where to go from here

- Send-and-track workflow: sending-a-quote-to-customer
- Building the quote: how-to-create-a-quote
- GPO-specific legal path: [Joining a group order via the GPO portal](/03-group-buying/joining-via-gpo-portal/)

For jurisdiction-specific answers — contract timing, distance-selling rules, VAT for your structure — talk to a lawyer or tax advisor. This page is a starting point, not legal advice.
