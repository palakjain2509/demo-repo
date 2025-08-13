import { Metadata } from 'next';
import { generatePageSEO } from '@/lib/seo';
import FAQContent from './FAQContent';

// Generate metadata for the FAQ page
const seoData = generatePageSEO({
  pageKey: 'faq',
  path: '/resources/faq',
  faqData: [
    {
      question: 'What is MyGETS?',
      answer: 'MyGETS is an OCDS-native procurement intelligence platform that streamlines the entire procurement lifecycle with built-in compliance, transparency, and analytics.'
    },
    {
      question: 'What is OCDS?',
      answer: 'The Open Contracting Data Standard (OCDS) is an internationally recognized framework for publishing structured procurement data that enhances transparency and enables better analysis.'
    },
    {
      question: 'How does MyGETS differ from traditional procurement systems?',
      answer: 'MyGETS combines procurement lifecycle management with advanced risk intelligence, automatically structures data in OCDS format, and provides real-time risk assessment with predictive analytics.'
    },
    {
      question: 'How does real-time risk detection work?',
      answer: 'MyGETS uses 73+ risk indicators and machine learning algorithms to automatically identify procurement risks, analyzing patterns in real-time and flagging potential issues.'
    },
    {
      question: 'What kind of predictive analytics does MyGETS provide?',
      answer: 'MyGETS offers predictive analytics for win rates, cost overruns, and compliance risks using AI models trained on live procurement data.'
    },
    {
      question: 'What compliance features are included?',
      answer: 'MyGETS ensures 100% audit readiness with automated reporting and built-in OCDS compliance, automatically structuring data according to international standards.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation time varies based on your current systems and data complexity. Most organizations can be up and running within 4-8 weeks.'
    },
    {
      question: 'Can MyGETS integrate with existing systems?',
      answer: 'Yes, MyGETS is designed for seamless integration with existing procurement systems through its OCDS-native architecture.'
    },
    {
      question: 'What about data migration from existing systems?',
      answer: 'MyGETS provides comprehensive data migration support, mapping existing data structures to OCDS format for a smooth transition.'
    },
    {
      question: 'What is the pricing structure?',
      answer: 'MyGETS offers flexible pricing based on your organization size and requirements with transparent pricing and no hidden fees.'
    },
    {
      question: 'What are the benefits of the early adopter program?',
      answer: 'Early adopters receive exclusive benefits including discounted pricing, priority support, direct input on product development, and guaranteed feature access.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a comprehensive demo and trial period to help you evaluate MyGETS. Contact our team to schedule a personalized demonstration.'
    },
    {
      question: 'What security measures are in place?',
      answer: 'MyGETS implements enterprise-grade security including data encryption, secure cloud infrastructure, regular security audits, and compliance with industry standards.'
    },
    {
      question: 'What support options are available?',
      answer: 'We provide comprehensive support including 24/7 technical support, dedicated account managers, training programs, and extensive documentation.'
    },
    {
      question: 'How is data backed up and protected?',
      answer: 'MyGETS uses redundant cloud infrastructure with automatic backups, disaster recovery protocols, and geographic redundancy.'
    }
  ]
});

export const metadata: Metadata = seoData.metadata;

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: seoData.jsonLd }}
      />
      <FAQContent />
    </>
  );
}
