---
title: "PDF generation fails — what to try when a quote won't export"
tags:
  - troubleshooting
  - quote
  - pdf
  - export
---

You click the **Download PDF** icon on a quote and either nothing happens, a blank file downloads, or you see an error page. This page covers the common causes and what to try before you contact support.

## First: try DOCX instead

Next to the red PDF icon on each quote in your Quotes list is a blue DOCX icon. If PDF export is failing for a specific quote, hit **Download DOCX** on the same row — you'll get a Word-editable version of the same content. In practice this succeeds a large fraction of the time when PDF doesn't, and either format is fine to send a customer.

## Common causes

The rest of the time, if both formats fail or you specifically need a PDF, one of these is usually the reason.

**A core field is still empty.**
An unfinished draft can still be exported — the PDF renders, but with blank sections where customer name, line items, or system size are missing. If your export looks sparse rather than failed outright, that's usually why. Reopen the quote in Quote Generator v2 and confirm every core field has content, then export again.

**A special character in text content.**
Rare, but text you pasted from Word, an email, or a spreadsheet can carry hidden characters (zero-width spaces, non-standard quotation marks) that trip the PDF renderer. If a quote fails after you pasted something, retype that section by hand and try again.

**A one-off server hiccup.**
Exports run in real time when you click the button. If the server happens to be busy at that moment, an export can occasionally fail once and then succeed on retry. Wait a minute and hit **Download PDF** again before diagnosing anything else.

## What NOT to try

Do not delete and recreate the quote — that loses the whole quote and any accepted status. Do not try to open the quote in an incognito window as a fix; PDF export is server-side, so your browser isn't the constraint.

## Still stuck? Contact support with details

If none of the above helps, email `support@techs.solar` with:

- The quote reference (`QT-2026-...`)
- The customer name on the quote (helps if the reference is ambiguous)
- Which browser and device you're on
- Whether DOCX also fails for the same quote
- Any error message that appeared on screen, quoted verbatim

Support can regenerate the PDF server-side and identify what broke, but the more detail up front, the faster they can help.

## Where to go from here

- Other troubleshooting patterns: common-errors
- Related: quote didn't reach the customer inbox: quote-not-sending
