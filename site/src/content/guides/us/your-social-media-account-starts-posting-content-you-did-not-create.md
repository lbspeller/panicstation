---
title: "What to do if… your social media account starts posting content you did not create"
jurisdiction: "USA"
category: "Technology & digital loss"
tags:
  - "website shows security warning"
  - "certificate warning on my site"
  - "https not secure suddenly"
  - "ssl error on my domain"
  - "tls certificate problem"
  - "your connection is not private"
  - "err cert authority invalid"
  - "hsts certificate error"
  - "browser security warning website"
  - "certificate expired website"
  - "wrong certificate served"
  - "certificate name mismatch"
  - "site suddenly not trusted"
  - "https warning after nothing changed"
  - "domain security warning"
  - "website cert changed unexpectedly"
  - "dns hijack suspicion"
  - "cdn ssl mode issue"
  - "hosting certificate issue"
  - "users seeing cert warning"
  - "possible interception risk"
  - "expired ssl certificate error"
  - "invalid security certificate help"
  - "what do i do if my website says not secure"
  - "what do i do if my ssl certificate expired"
  - "what do i do if i see err cert common name mismatch"
  - "help i have a certificate warning on my site"
  - "help i cannot access my admin panel ssl"
  - "my website is showing a red warning page"
  - "smell of burning server"
  - "server clock is wrong"
  - "unexpected dns changes"
last_reviewed: "2026-03-17"
---
# What to do if… your social media account starts posting content you did not create (USA)

## Short answer
Assume the connection is compromised until verified: immediately stop all administrative logins and payment processing, then determine if the warning stems from technical expiration, misconfiguration, or unauthorized infrastructure changes.

## Do not do these things
- Do not bypass the browser warning to log into administrative panels or databases.
- Do not enter passwords, API keys, or financial data on the site while the warning is active.
- Do not accept "renewal" offers or software downloads from pop-up windows or unsolicited emails.
- Do not change global DNS or CDN settings without first documenting current configurations.
- Do not reassure users that the site is safe until the certificate mismatch or expiration is fully resolved and verified on a neutral network.

## What to do now
1. **Isolate the site from sensitive user interactions.**  
   **Enable a static maintenance page or disable listener ports for login and checkout pages.**
   - This prevents users from inadvertently submitting credentials over an untrusted connection.
2. **Verify the exact domain name displayed in the browser address bar.**  
   **Compare the URL character-by-character to your official domain to rule out typo-squatting or homograph attacks.**
3. **Determine the scope of the warning by testing across multiple networks.**  
   **Access the site using a separate device on a different network, such as a cellular data connection.**
   - If the error persists, the issue is likely server-side or DNS-based.
   - If the error disappears, the issue may be local to your original network or device clock.
4. **Inspect the certificate details via the browser's security tab.**  
   **Identify the specific error code, the expiration date, and the "Issued To" common name.**
   - Common errors include: ERR_CERT_DATE_INVALID (expired), ERR_CERT_COMMON_NAME_INVALID (mismatch), or ERR_CERT_AUTHORITY_INVALID (untrusted).
5. **Verify external DNS records and IP targets.**  
   **Use an independent DNS lookup tool to confirm your A, AAAA, and CNAME records point to your authorized hosting or CDN IPs.**
   - Look for unauthorized IP addresses or new records you did not create.
6. **Check CDN and SSL/TLS configuration modes.**  
   **Log into your CDN dashboard and confirm the "SSL/TLS encryption mode" has not shifted from "Full/Strict" to "Flexible" or "Off".**
   - Ensure the origin certificate matches the requirements of your proxy service.
7. **Renew or reinstall the certificate through official channels only.**  
   **Use your hosting provider’s integrated certificate manager or a trusted Certificate Authority (CA) to reissue the certificate.**
   - Do not use third-party "fix-it" tools found via search engines.
8. **Secure primary control accounts if compromise is suspected.**  
   **Update passwords and ensure Multi-Factor Authentication (MFA) is active on DNS, CDN, and registrar accounts.**
   - Revoke any active sessions or API tokens that appear unfamiliar.
9. **Follow federal breach notification timelines if user data was exposed.**  
   **Report any unauthorized acquisition of unencrypted customer information to the FTC within 30 days if it affects 500 or more individuals.**
10. **File a report with the FBI Internet Crime Complaint Center (IC3).**  
    **Submit a report at ic3.gov if you believe the certificate error is the result of a cyber-enabled crime or DNS hijacking.**
    - For significant incidents involving critical infrastructure, utilize the CISA reporting portal.

## What can wait
- You do not need to permanently migrate to a new hosting provider in the next hour.
- You do not need to perform a full forensic audit before restoring a valid certificate to resume safe operations.
- You do not need to issue a detailed technical post-mortem while the investigation is ongoing.

## Important reassurance
Sudden certificate warnings are frequently the result of automated renewal failures, server clock drift, or simple configuration oversights. These issues are common and can usually be resolved without permanent data loss or total system compromise if you avoid entering sensitive data while the warning is active.

## Scope note
This guide provides first-step stabilization for digital security warnings. It does not replace the need for professional incident response, legal counsel, or forensic investigation if a data breach has occurred.

## Important note
This information is for general guidance and does not constitute professional security or legal advice. If your site processes credit card data and you suspect a breach, you must follow PCI DSS requirements, which may include engaging a certified PCI Forensic Investigator (PFI).

## Additional Resources
- https://consumer.ftc.gov/how-recover-your-hacked-email-or-social-media-account
- https://consumer.ftc.gov/consumer-alerts/2024/08/five-ways-keep-scammers-hackers-away
- https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams
- https://www.ic3.gov/CrimeInfo/AccountTakeover
- https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers
