import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FluentProvider } from '@/components/providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CacheOptimizer, ResourceHints } from '@/components/seo/CacheOptimizer';
import { SEOAnalytics, SEOInsights } from '@/components/seo/SEOAnalytics';
import { PerformanceMonitor } from '@/components/seo/PerformanceMonitor';
import { WebVitalsDashboard } from '@/components/seo/WebVitalsDashboard';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'MyGETS - Procurement Intelligence as a Service | Turn Data into Digital Services',
    template: '%s | MyGETS'
  },
  description: 'MyGETS transforms procurement data into digital, data-driven services. Advanced analytics, real-time insights, and AI-powered procurement intelligence for government and enterprise.',
  keywords: 'procurement intelligence, procurement analytics, government procurement, enterprise procurement, procurement data, procurement insights, procurement platform, procurement software, procurement automation, procurement optimization, procurement transparency, procurement efficiency, procurement compliance, procurement risk management, procurement cost savings, procurement digital transformation, procurement AI, procurement machine learning, procurement business intelligence, procurement dashboard, procurement reporting, procurement metrics, procurement KPIs, procurement performance, procurement strategy, procurement best practices, procurement innovation, procurement technology, procurement solutions, procurement services, procurement consulting, procurement training, procurement education, procurement research, procurement trends, procurement market analysis, procurement benchmarking, procurement audit, procurement assessment, procurement evaluation, procurement review, procurement analysis, procurement intelligence platform, procurement data platform, procurement analytics platform, procurement insights platform, procurement intelligence service, procurement data service, procurement analytics service, procurement insights service, procurement intelligence solution, procurement data solution, procurement analytics solution, procurement insights solution, procurement intelligence tool, procurement data tool, procurement analytics tool, procurement insights tool, procurement intelligence software, procurement data software, procurement analytics software, procurement insights software, procurement intelligence system, procurement data system, procurement analytics system, procurement insights system, procurement intelligence application, procurement data application, procurement analytics application, procurement insights application, procurement intelligence dashboard, procurement data dashboard, procurement analytics dashboard, procurement insights dashboard, procurement intelligence reporting, procurement data reporting, procurement analytics reporting, procurement insights reporting, procurement intelligence metrics, procurement data metrics, procurement analytics metrics, procurement insights metrics, procurement intelligence KPIs, procurement data KPIs, procurement analytics KPIs, procurement insights KPIs, procurement intelligence performance, procurement data performance, procurement analytics performance, procurement insights performance, procurement intelligence strategy, procurement data strategy, procurement analytics strategy, procurement insights strategy, procurement intelligence best practices, procurement data best practices, procurement analytics best practices, procurement insights best practices, procurement intelligence innovation, procurement data innovation, procurement analytics innovation, procurement insights innovation, procurement intelligence technology, procurement data technology, procurement analytics technology, procurement insights technology',
  authors: [{ name: 'MyGETS Team' }],
  creator: 'MyGETS',
  publisher: 'MyGETS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mygets.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mygets.net',
    siteName: 'MyGETS',
    title: 'MyGETS - Procurement Intelligence as a Service | Turn Data into Digital Services',
    description: 'MyGETS transforms procurement data into digital, data-driven services. Advanced analytics, real-time insights, and AI-powered procurement intelligence for government and enterprise.',
    images: [
      {
        url: '/images/home/hero3.png',
        width: 1200,
        height: 630,
        alt: 'MyGETS Procurement Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyGETS - Procurement Intelligence as a Service',
    description: 'Transform procurement data into digital, data-driven services with MyGETS.',
    images: ['/images/home/hero3.png'],
    creator: '@mygets',
    site: '@mygets',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'business software',
  other: {
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'MyGETS',
    'application-name': 'MyGETS',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MyGETS",
              "url": "https://mygets.net",
              "logo": "https://mygets.net/logo.svg",
              "description": "MyGETS transforms procurement data into digital, data-driven services. Advanced analytics, real-time insights, and AI-powered procurement intelligence for government and enterprise.",
              "foundingDate": "2024",
              "industry": "Procurement Technology",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@mygets.net"
              },
              "sameAs": [
                "https://twitter.com/mygets",
                "https://linkedin.com/company/mygets"
              ],
              "offers": {
                "@type": "Offer",
                "category": "Procurement Intelligence Platform",
                "price": "1500",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Resource hints and optimization components moved to body for valid HTML */}
        <ResourceHints />
        <CacheOptimizer 
          enableServiceWorker={true}
          enablePreloading={false} // Disabled to prevent preload warnings
          enablePrefetching={false} // Disabled to prevent performance issues
          enableCompression={true}
        />
        
        {/* SEO Analytics - Only show in development */}
        {process.env.NODE_ENV === 'development' && (
          <>
            <SEOAnalytics />
            <SEOInsights showDebug={true} />
          </>
        )}
        
        <PerformanceMonitor pageName="global" />
        
        {/* Web Vitals Dashboard - Only show in development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 z-50 max-w-sm">
            <WebVitalsDashboard 
              showRealTime={true}
              className="bg-white shadow-lg rounded-lg border"
            />
          </div>
        )}
        
        <FluentProvider>
          <Header />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </FluentProvider>
      </body>
    </html>
  );
}

