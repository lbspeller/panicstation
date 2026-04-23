---
title: "What to do if… you get a “chargeback” notification and you think someone is trying to reverse a legitimate payment"
jurisdiction: "USA"
category: "Money & financial emergencies"
tags:
  - "chargeback notification"
  - "payment chargeback help"
  - "legitimate payment dispute"
  - "disputed card charge"
  - "payment reversal help"
  - "reverse a legitimate payment"
  - "someone is trying to reverse a payment"
  - "what do i do if i get a chargeback"
  - "what do i do if a customer disputes a charge"
  - "what do i do if a payment is reversed"
  - "what do i do if i get a dispute notice"
  - "help i got a chargeback notification"
  - "help i received a dispute notice"
  - "help my customer reversed a payment"
  - "help someone is reversing a charge"
  - "my payment was reversed"
  - "my customer filed a chargeback"
  - "my merchant account has a dispute"
  - "my funds are held for a chargeback"
  - "smell of fraud"
  - "see a chargeback in dashboard"
  - "hear about a payment dispute"
  - "notice a sudden payment reversal"
  - "unauthorized transaction claim"
  - "item not received dispute"
  - "not as described chargeback"
  - "friendly fraud help"
  - "first-party fraud notification"
  - "visa compelling evidence 3-0"
  - "merchant dispute response"
last_reviewed: "2026-03-17"
---
# What to do if… you get a “chargeback” notification and you think someone is trying to reverse a legitimate payment (USA)

## Short answer
Verify the dispute immediately within your payment processor’s secure dashboard and note the specific "reason code" and response deadline. You must submit a concise evidence packet that directly addresses that specific reason before the deadline, as missing this window results in an automatic, irreversible loss.

## Do not do these things
- Don’t rely on the deadline provided by the card network (e.g., Visa/Mastercard); your specific processor (Stripe, PayPal, Square, etc.) often requires a response much earlier.
- Don’t click links in a "chargeback alert" email; navigate directly to your processor’s official website or app to avoid phishing.
- Don’t issue a manual refund for a transaction that is already in the "disputed" or "chargeback" stage unless your processor explicitly instructs you to do so; this can result in losing the money twice.
- Don’t engage in hostile communication with the customer, as these logs may be used as evidence against you in the final bank review.
- Don’t submit a "document dump" of every file you have; banks prioritize evidence that specifically maps to the reason code provided.

## What to do now
1. **Locate the specific reason code and the processor-enforced deadline.** 
   - Log in to your merchant dashboard (e.g., Stripe, Shopify, Square) and open the dispute details.
   - Record the **Reason Code** (e.g., Visa 10.4 for fraud or 13.1 for non-receipt) and the **Response Due Date**.
   - Note the **Dispute Fee** (usually $15–$25) which is often deducted regardless of the final outcome.
2. **Determine if you can meet the "Compelling Evidence" threshold for the specific code.** 
   - **For "Unauthorized" (Fraud) claims**: Gather proof of the customer's prior history with you, IP address matches, or delivery to a verified address. 
   - **For "Product Not Received"**: Locate the carrier tracking number showing a "Delivered" status to the customer’s specific ZIP code.
   - **For "Not as Described"**: Prepare a copy of the original product description and proof that the customer was aware of the terms at checkout.
3. **Utilize the Visa Compelling Evidence 3.0 (CE3.0) rule if applicable.** 
   - If the dispute is for "Fraud" (Reason Code 10.4), check if this customer has at least two prior undisputed transactions with you from 120 to 365 days ago.
   - Matching data points (such as IP address, Device ID, or Shipping Address) across these three transactions can lead to an automatic win under current 2026 rules.
4. **Compile a single, legible PDF or structured response for submission.** 
   - **Bold** the most important facts in your rebuttal (e.g., "The item was delivered to the cardholder's billing address on [Date]").
   - Include the order invoice, the tracking confirmation, and any relevant communication where the customer acknowledged the purchase.
   - Keep the summary to 1–2 pages; bank adjusters often have less than two minutes to review a case.
5. **Monitor for early warning alerts via RDR or CDR systems.** 
   - Check if your processor offers Rapid Dispute Resolution (RDR) or Chargeback Dispute Resolution (CDR) through Ethoca or Verifi.
   - If an "alert" appears before it becomes a formal chargeback, you may have a 24–72 hour window to refund the customer voluntarily and avoid a permanent mark on your merchant "chargeback ratio."
6. **Review your internal security if multiple disputes appear at once.** 
   - Check if the same email, IP, or shipping address is tied to other recent orders.
   - If you see a pattern, pause pending shipments to those addresses immediately to prevent further reversals.

## What can wait
- You do not need to decide on pursuing a small claims court case or collections agency today; the bank's window is the immediate priority.
- You do not need to rewrite your entire Terms of Service right now; focus on proving that the customer agreed to the *current* terms.
- You do not need to report every single dispute to the authorities unless you see a coordinated criminal pattern involving many different cardholders.

## Important reassurance
Receiving a chargeback notice is a standard part of doing business and does not necessarily mean you have done anything wrong or that your account is in immediate danger. "Friendly fraud"—where a legitimate customer disputes a charge they actually made—is common, and the representment process exists specifically to protect merchants in these cases.

## Scope note
This guide provides first-step stabilization for responding to a single or small batch of disputed payments. It does not cover long-term merchant account high-risk monitoring or complex legal litigation for high-value B2B payment failures.

## Important note
This information is for general guidance and does not constitute legal or financial advice. Chargeback rules and "Compelling Evidence" requirements are set by card networks (Visa, Mastercard, Amex, Discover) and are subject to frequent updates. Always follow the specific documentation requirements listed in your merchant portal.

## Additional Resources
- https://www.consumerfinance.gov/ask-cfpb/how-can-i-get-a-refund-on-a-product-or-service-i-purchased-with-my-credit-card-en-1969/
- https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-a-charge-on-my-credit-card-bill-en-61/
- https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-my-money-back-after-i-discover-an-unauthorized-transaction-or-money-missing-from-my-bank-account-en-1017/
- https://consumer.ftc.gov/node/77546
- https://consumer.ftc.gov/consumer-alerts/2023/05/those-urgent-emails-metamask-paypal-are-phishing-scams
