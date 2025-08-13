import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'MyGETS Procurement Insights Hub | Resources for Procurement Excellence',
  description: 'Explore the MyGETS Resources Hub for blog articles, case studies, whitepapers, and webinars on procurement best practices, OCDS, and industry insights.',
  metadataBase: new URL('https://mygets.net'),
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'MyGETS Procurement Insights Hub | Resources for Procurement Excellence',
    description: 'Explore the MyGETS Resources Hub for blog articles, case studies, whitepapers, and webinars on procurement best practices, OCDS, and industry insights.',
    type: 'website',
    url: 'https://mygets.net/resources',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'MyGETS Procurement Insights Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyGETS Procurement Insights Hub | Resources for Procurement Excellence',
    description: 'Explore the MyGETS Resources Hub for blog articles, case studies, whitepapers, and webinars on procurement best practices, OCDS, and industry insights.',
    images: ['/images/twitter-image.svg'],
  },
};

// Placeholder for actual Fluent UI components and Redux integration

const ResourcesHubPage = () => {
  // WebPage structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "MyGETS Resources Hub",
    "description": "A central repository for procurement knowledge, including articles, case studies, and guides from MyGETS.",
    "url": "https://mygets.net/resources"
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mygets.net"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resources"
      }
    ]
  };

  return (
    <div>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>MyGETS Procurement Insights Hub</h1>
          <p className={styles.heroDescription}>
            Your central source for expert insights, practical guides, and the latest trends in procurement technology, OCDS, and strategic sourcing in Australia.
          </p>
        </section>

        {/* Introduction to Hub */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Explore Our Knowledge Base</h2>
          <p className={styles.sectionText}>
            At MyGETS, we believe in empowering procurement professionals with knowledge. Our Resources Hub is curated to provide you with valuable content to navigate the complexities of modern procurement, understand the benefits of open data standards like OCDS, and achieve excellence in your operations.
          </p>
        </section>

        {/* Featured Content / Categories */}
        <section className={`${styles.section} ${styles.categoriesSection}`}>
          <h2 className={styles.sectionTitle}>Discover by Category</h2>
          <div className={styles.categoriesGrid}>
            {[
              {
                title: 'Blog Articles',
                description: 'Stay updated with the latest procurement trends, tips, and MyGETS news.',
                link: '/resources/blog',
                linkText: 'Read the Blog →'
              },
              {
                title: 'Case Studies',
                description: 'See how MyGETS helps organizations like yours achieve real-world results.',
                link: '/resources/case-studies',
                linkText: 'View Case Studies →'
              },
              {
                title: 'Whitepapers & Guides',
                description: 'In-depth analysis and practical guides on key procurement topics.',
                link: '/resources/whitepapers',
                linkText: 'Access Whitepapers →'
              },
              {
                title: 'Webinars',
                description: 'Join our experts for discussions on procurement innovation and best practices.',
                link: '/resources/webinars',
                linkText: 'Watch Webinars →'
              },
              {
                title: 'OCDS Guides',
                description: 'Deep dive into the Open Contracting Data Standard and its benefits.',
                link: '/resources/ocds-guide',
                linkText: 'Learn about OCDS →'
              }
            ].map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categoryText}>{category.description}</p>
                <Link href={category.link} className={styles.categoryLink}>
                  {category.linkText}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className={styles.newsletterSection}>
          <h2 className={styles.sectionTitle}>Stay Informed</h2>
          <p className={styles.sectionText}>
            Subscribe to our newsletter to receive the latest procurement insights, MyGETS updates, and event invitations directly to your inbox.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <h2 className={styles.sectionTitle}>Ready to Put These Insights into Action?</h2>
          <p className={styles.sectionText}>
            Discover how the MyGETS platform can transform your procurement processes with data-driven insights and OCDS-native capabilities.
          </p>
          <Link href="/platform" className={styles.ctaButton}>
            Explore the MyGETS Platform
          </Link>
        </section>
      </main>
    </div>
  );
};

export default ResourcesHubPage;

