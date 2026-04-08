import { safeJsonLdStringify } from '@/lib/jsonld';
import { getSiteUrl } from '@/lib/site';

const PROFILE_TITLE = 'Joseph Le | Software Engineer & Stanford CS';
const PROFILE_DESCRIPTION =
  'Joseph Le is a software engineer and Stanford CS student building production systems—architecture, data modeling, and deployment. Bay Area; education & social impact.';

/**
 * Homepage only. Google documents ProfilePage for “About me” / creator-focused pages;
 * Rich Results Test may list this type (Person/WebSite alone often show “no items”).
 */
export function HomeProfilePageJsonLd() {
  const url = getSiteUrl();

  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}/#profilepage`,
    url,
    name: PROFILE_TITLE,
    description: PROFILE_DESCRIPTION,
    isPartOf: { '@id': `${url}/#website` },
    mainEntity: { '@id': `${url}/#person` },
  };

  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {safeJsonLdStringify(profilePage)}
    </script>
  );
}
