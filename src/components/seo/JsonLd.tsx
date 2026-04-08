import { getSiteUrl } from '@/lib/site';

const GITHUB = 'https://github.com/JosephLeKH';
const LINKEDIN = 'https://www.linkedin.com/in/hung-le-/';

export function JsonLd() {
  const url = getSiteUrl();
  const description =
    'Joseph Le is a software engineer and Stanford CS student building reliable, scalable systems—from architecture and data modeling to deployment. Bay Area; interested in education and social impact.';

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${url}/#person`,
        name: 'Joseph Le',
        url,
        jobTitle: 'Software Engineer',
        description,
        sameAs: [GITHUB, LINKEDIN],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Stanford University',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        name: 'Joseph Le',
        url,
        description,
        inLanguage: 'en-US',
        publisher: { '@id': `${url}/#person` },
      },
    ],
  };

  const json = JSON.stringify(graph).replace(/</g, '\\u003c');

  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {json}
    </script>
  );
}
