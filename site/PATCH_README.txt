PanicStation.org SEO title, redirects, and 404 patch
====================================================

Target folder:
C:\Users\leebe\projects\panicstation\site

Installation
------------
1. Back up the site folder or commit the current version to Git.
2. Extract the contents of this patch directly into the site folder.
3. Allow Windows to merge folders and replace the files included in the patch.
4. Do not delete or replace src\content\guides. This patch contains no guide files.
5. Run:

   npm run build

6. Commit and push the changed/new files so Cloudflare Pages deploys them.

Redirect CSV location
---------------------
redirects\cloudflare_bulk_redirects_confirmed.csv

The build command runs scripts\build-redirect-function.mjs. It validates the CSV
and regenerates functions\_middleware.js. The included middleware already contains
all 2,216 redirects, but it will be regenerated on every build.

Important
---------
- Edit the CSV, not functions\_middleware.js, when changing redirects.
- The function returns HTTP 301 only for matching GET and HEAD requests.
- Unknown URLs pass through to the static asset server and then use 404.html.
- public\_routes.json limits Function invocation to /uk/* and /us/*.
- Keep the existing Cloudflare www-to-root redirect rule.
- No Cloudflare Bulk Redirect list or rule is required for the guide redirects.

After deployment tests
----------------------
Old URL (should return 301 and the matching new Location):

curl.exe -I "https://panicstation.org/uk/a-bank-transfer-for-rent-or-mortgage-is-processing-and-the-deadline-is-today/"

New URL (should return 200):

curl.exe -I "https://panicstation.org/uk/a-bank-transfer-for-rent-or-mortgage-is-still-processing-on-the-payment-deadline-day/"

Unknown URL (should return 404):

curl.exe -I "https://panicstation.org/nothing"

SEO title check
---------------
Open a guide's page source and confirm:
- <title> uses seo_title
- og:title uses seo_title
- twitter:title uses seo_title
- the visible H1 still uses title
- JSON-LD headline still uses title
