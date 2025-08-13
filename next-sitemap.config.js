// next-sitemap.config.js
// TODO: PRODUCTION - Review and update all default values based on MyGets final branding and SEO strategy.
// TODO: PRODUCTION - Ensure the siteUrl is correctly set for production in next-sitemap.config.js as it influences canonicals here too.

const defaultSEOConfig = {
  defaultTitle: "MyGets - Procurement Reimagined for Innovation & Sustainability",
  titleTemplate: "%s | MyGets", // Appends | MyGets to all page titles unless overridden
  description: "Discover MyGets, the OCDS-native SaaS platform transforming public and private sector procurement. Drive efficiency, transparency, and sustainable practices with our innovative solutions.",
  canonical: process.env.NEXT_PUBLIC_SITE_URL, // Base canonical URL, next-seo will append path. Ensure NEXT_PUBLIC_SITE_URL is set.
  openGraph: {
    type: "website",
    locale: "en_AU", // Assuming target is Australia
    url: process.env.NEXT_PUBLIC_SITE_URL, // Base Open Graph URL
    site_name: "MyGets",
    title: "MyGets - Procurement Intelligence Platform",
    description: "Transforming procurement with transparency, efficiency, and sustainability.",
    // TODO: PRODUCTION - Add a default OG image URL (e.g., logo or a generic platform image)
    // images: [
    //   {
    //     url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
    //     width: 1200,
    //     height: 630,
    //     alt: "MyGets Platform",
    //   },
    // ],
  },
  twitter: {
    handle: "@MyGetsHandle", // TODO: PRODUCTION - Replace with actual Twitter handle
    site: "@MyGetsHandle",   // TODO: PRODUCTION - Replace with actual Twitter handle
    cardType: "summary_large_image",
  },
  // TODO: PRODUCTION - Consider adding more default configurations as needed:
  // additionalMetaTags: [
  //   {
  //     name: \"keywords\",
  //     content: \"procurement, OCDS, SaaS, spend analytics, contract management, supplier management, sustainable procurement, eProcurement, public sector, private sector\",
  //   },
  // ],
  // additionalLinkTags: [
  //   {
  //     rel: \"icon\",
  //     href: \"/favicon.ico\",
  //   },
  // ],
};

export default defaultSEOConfig;

