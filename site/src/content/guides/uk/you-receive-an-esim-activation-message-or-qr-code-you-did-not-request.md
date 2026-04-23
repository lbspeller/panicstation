---
title: "What to do if… you receive an eSIM activation message or QR code you did not request"
jurisdiction: "UK"
category: "Technology & digital loss"
tags:
  - "unexpected access token"
  - "unknown api key created"
  - "new app connection i did not create"
  - "suspicious oauth app"
  - "unknown third party app access"
  - "account token compromise"
  - "api credentials leak"
  - "developer account hacked"
  - "cloud console suspicious activity"
  - "github token created without me"
  - "new integration appeared"
  - "unauthorized app authorization"
  - "strange connected apps"
  - "someone has access token"
  - "security keys and tokens issue"
  - "new credentials in dashboard"
  - "token created overnight"
  - "suspicious login and token"
  - "access tokens appearing"
  - "api keys appearing"
  - "app connections appearing"
  - "unauthorized developer access"
  - "help i have unknown tokens"
  - "what do i do if tokens are created"
  - "what do i do if keys are created"
  - "what do i do if apps are connected"
  - "my api key was leaked"
  - "my github was hacked"
  - "my aws console has new keys"
  - "burning smell from server"
  - "unexpected email about login"
  - "unrecognized connected device"
  - "new webhook found"
  - "new mfa method added"
  - "recovery email changed"
  - "access token ghost login"
last_reviewed: "2026-03-17"
---
# What to do if… you receive an eSIM activation message or QR code you did not request (UK)

## Short answer
Revoke the unknown tokens and app connections immediately and terminate all active sessions to force a re-authentication requirement across all devices.

## Do not do these things
- Do not delay revocation to investigate the source of the creation first.
- Do not delete activity logs or audit trails that document the unauthorized creation.
- Do not use a device you suspect is compromised to perform security resets.
- Do not reset every credential simultaneously if it will prevent you from accessing the admin console.
- Do not assume a password change alone will invalidate existing OAuth tokens or active sessions.

## What to do now
1. **Switch to a known-secure device to perform all recovery actions.**  
   Avoid using any computer or mobile device that may have been the source of a credential leak or session theft. Type the service URLs directly into the browser instead of clicking links in security alerts.

2. **Revoke the unauthorized access tokens and API keys immediately.**  
   Locate the specific credentials you do not recognise and delete or deactivate them. Note that some stateless tokens (like certain JWTs) may remain functional for up to 60 minutes after revocation; disabling the parent service account or user profile is the only way to stop these instantly.

3. **Remove unknown third-party apps and OAuth permissions.**  
   Check the "Connected Apps" or "Authorised Applications" section of your account and revoke access for any integration you did not personally authorise.

4. **Terminate all active web and mobile sessions.**  
   Look for a "Sign out of all devices" or "Revoke all sessions" button. This is critical because attackers often use session cookies to bypass Multi-Factor Authentication (MFA).

5. **Secure your primary identity provider or SSO account.**  
   **Change your password** to a unique, 12+ character phrase.  
   **Check for unauthorized MFA methods**, such as a new authenticator app or hardware key that you did not add.  
   **Review recovery settings**, including backup email addresses and phone numbers, to ensure they have not been altered.

6. **Enable MFA on all cloud services as per 2026 Cyber Essentials standards.**  
   If the platform offers any form of Multi-Factor Authentication, you must enable it immediately. Preference should be given to FIDO2/WebAuthn (passkeys) or authenticator apps over SMS.

7. **Pause automated pipelines and deployments.**  
   If the compromised keys have access to CI/CD systems (like GitHub Actions or Jenkins), pause all active deployments. Check for malicious changes to build scripts or hidden "backdoor" secrets added to the pipeline configuration.

8. **Rotate sensitive production credentials in a controlled sequence.**  
   After securing the root account, generate new keys for database access, payment gateways, and cloud infrastructure. Replace the old keys in your applications one at a time to ensure service continuity.

9. **Evaluate the legal requirement to notify the ICO within 72 hours.**  
   Under UK GDPR, if the unauthorized access constitutes a personal data breach that is likely to result in a risk to the rights and freedoms of individuals, you must report it to the Information Commissioner's Office (ICO). This report must be made without undue delay and, where feasible, within 72 hours of you becoming aware of the incident.

## What can wait
- Identifying the exact technical method used to create the tokens (e.g., phishing vs. malware).
- Compiling a final incident report for stakeholders or insurance providers.
- Implementing long-term architectural changes like moving to a hardware-based "Secret Manager."

## Important reassurance
It is a common tactic for attackers to create secondary "backdoor" access methods like tokens or app connections to maintain access after a password reset. Finding these items and revoking them is a standard part of the recovery process and does not necessarily mean your entire network is permanently compromised.

## Scope note
This guide covers immediate stabilization for account-level credential compromise. If there is evidence that customer databases were exported or financial assets were moved, you will require professional forensic and legal assistance.

## Important note
This information is provided for emergency stabilization and does not constitute legal or professional cybersecurity advice. Organizations operating in the UK must adhere to the UK GDPR and the Data Protection Act 2018 regarding breach notification. If you are an employee, follow your internal Information Security Policy and report the incident to your Data Protection Officer (DPO) or IT Security lead immediately.

## Additional Resources
- https://www.vodafone.co.uk/newscentre/features/how-to-protect-yourself-from-sim-swap-fraud/
- https://www.three.co.uk/privacy-safety/fraud-to-watch-out-for
- https://www.o2.co.uk/help/safety-and-security/fraud-scams-and-unwanted-calls/scams-and-fraud
- https://ee.co.uk/help/security/staying-safe-online/avoid-and-prevent-scams
- https://www.ncsc.gov.uk/collection/phishing-scams/report-scam-text-message
