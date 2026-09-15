# SEO Launch Checklist

## Required after deployment

1. Confirm the Vercel production domain redirects `https://piercewebsolutions.com` to `https://www.piercewebsolutions.com` with a permanent redirect.
2. Set `NEXT_PUBLIC_SITE_URL=https://www.piercewebsolutions.com` in Vercel and redeploy.
3. Create or verify a Google Search Console Domain property for `piercewebsolutions.com` using DNS verification.
4. Submit `https://www.piercewebsolutions.com/sitemap.xml` in Search Console.
5. Use URL Inspection on the homepage and each core service URL, confirm the declared canonical is the `www` URL, and request indexing.
6. Run PageSpeed Insights for the homepage, services, pricing, and contact pages after the production cache is warm. Review both mobile field data and the lab diagnostics.
7. Test the homepage and service structured data with Google's Rich Results Test.
8. Check Search Console weekly for indexing errors, duplicate canonicals, Core Web Vitals, queries, and pages receiving impressions.
9. Add the site to Bing Webmaster Tools and submit the same sitemap.

## Ongoing maintenance

- Update `site.contentUpdatedAt` in `src/lib/site.ts` after substantive site-wide content changes so sitemap dates remain accurate.
- Keep page titles, descriptions, canonicals, and one clear H1 aligned whenever a page's purpose changes.
- Add case studies only when the client, Jacob's role, and any reported result can be attributed accurately.
- Recheck image dimensions, alternative text, keyboard navigation, form delivery, and Core Web Vitals when adding a new page or major component.

## Local organic visibility

- Maintain an accurate Google Business Profile as a service-area business. Do not publish a customer-facing address unless customers are actually served there.
- Keep the business name, website, email, service area, and any future phone number consistent across reputable directories.
- Ask real clients for honest Google reviews without incentives or review gating.
- Publish useful project case studies with the client’s permission, including the business problem, work completed, and measurable outcome when available.
- Build relationships and legitimate links through local chambers, professional groups, partnerships, sponsorships, and community organizations.
- Avoid thin pages that merely swap county or city names. Create a location page only when it contains genuinely distinct, useful information.

Technical SEO creates eligibility and clarity. Competitive rankings also depend on relevance, reputation, links, reviews, content quality, and time.
