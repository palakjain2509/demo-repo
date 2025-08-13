import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import CaseStudyContent from './CaseStudyContent';

// Placeholder for actual Fluent UI components and Redux integration
// Sample case studies data - in a real app, this would come from a CMS or API
const sampleCaseStudies = [
  {
    slug: 'gov-agency-achieves-cpr-compliance',
    clientName: 'WA State Government Agency (Anonymous)',
    title: 'WA Government Agency Achieves Full CPR Compliance and 20% Efficiency Gain with MyGETS',
    summary: 'Discover how a Western Australian state government agency leveraged MyGETS to streamline their procurement, ensure Commonwealth Procurement Rules (CPRs) compliance, and achieve significant operational efficiencies.',
    industry: 'Public Sector / Government',
    challenge: 'Ensuring CPR compliance, managing complex tender evaluations, lack of transparency in procurement lifecycle.',
    solution: 'Implementation of MyGETS OCDS-native platform with configurable workflows for CPR, centralized document management, and transparent reporting.',
    results: ['Achieved 100% CPR compliance reporting accuracy.', 'Reduced tender evaluation time by 20%.', 'Increased transparency for internal stakeholders and audit processes.'],
    fullContent: `
      <p>A prominent Western Australian State Government Agency faced significant challenges in adhering to the evolving Commonwealth Procurement Rules (CPRs) while managing a high volume of complex tenders. Their existing processes were largely manual, leading to inefficiencies, potential compliance risks, and a lack of end-to-end visibility in their procurement lifecycle.</p>
      <h2>The Challenge: Navigating CPR Complexity and Ensuring Transparency</h2>
      <p>The agency struggled with:</p>
      <ul>
        <li><strong>Manual CPR Compliance Checks:</strong> Ensuring every procurement activity met the detailed requirements of the CPRs was time-consuming and prone to human error.</li>
        <li><strong>Lengthy Tender Evaluation Cycles:</strong> Disparate systems and manual collation of evaluation data slowed down the decision-making process.</li>
        <li><strong>Limited Transparency:</strong> Tracking the status of procurements and generating comprehensive audit trails was a significant administrative burden.</li>
        <li><strong>Reporting Difficulties:</strong> Compiling accurate and timely reports for internal oversight and external accountability was challenging.</li>
      </ul>
      <h2>The Solution: MyGETS OCDS-Native Procurement Platform</h2>
      <p>The agency implemented the MyGETS platform, leveraging its OCDS-native architecture and features specifically designed for public sector needs. Key aspects of the solution included:</p>
      <ul>
        <li><strong>Configurable Workflows:</strong> MyGETS workflows were tailored to embed CPR compliance checks at each stage of the procurement process.</li>
        <li><strong>Centralized Document Management:</strong> All tender documents, submissions, evaluations, and contracts were managed within a single, secure platform.</li>
        <li><strong>OCDS-Powered Reporting:</strong> The platform's adherence to OCDS facilitated standardized data collection, enabling automated and transparent reporting.</li>
        <li><strong>Streamlined Evaluation Tools:</strong> MyGETS provided tools to support a more efficient and collaborative tender evaluation process.</li>
      </ul>
      <h2>The Results: Compliance, Efficiency, and Enhanced Transparency</h2>
      <p>The implementation of MyGETS delivered significant and measurable benefits for the agency:</p>
      <ul>
        <li><strong>100% CPR Compliance Reporting Accuracy:</strong> Automated checks and standardized data ensured reports were consistently accurate and compliant.</li>
        <li><strong>20% Reduction in Tender Evaluation Time:</strong> Streamlined processes and centralized data significantly sped up the evaluation cycle.</li>
        <li><strong>Increased Transparency:</strong> Internal stakeholders gained real-time visibility into procurement activities, and audit processes became more straightforward.</li>
        <li><strong>Improved Resource Allocation:</strong> Procurement staff could focus on more strategic tasks as administrative burdens were reduced.</li>
      </ul>
      <p>This successful deployment demonstrates MyGETS's capability to empower Australian government agencies to meet their procurement objectives with greater efficiency, compliance, and transparency.</p>
    `
  },
  {
    slug: 'sme-optimizes-spend-visibility',
    clientName: 'National Retail Solutions Pty Ltd',
    title: 'Australian SME Boosts Spend Visibility by 40% and Reduces Maverick Spend with MyGETS',
    summary: 'Learn how a national retail SME utilized MyGETS to gain unprecedented visibility into their procurement spend, control maverick purchasing, and identify key cost-saving opportunities.',
    industry: 'Private Sector / Retail',
    challenge: 'Limited visibility into procurement spend across multiple departments, high maverick spend, difficulty in negotiating supplier contracts.',
    solution: 'MyGETS platform implementation with spend analytics dashboards, automated approval workflows, and centralized supplier contract management.',
    results: ['Increased overall spend visibility by 40%.', 'Reduced maverick spend by 15% within the first six months.', 'Identified annual cost savings of 8% through better supplier negotiation.'],
    fullContent: `
      <p>National Retail Solutions Pty Ltd, a growing Australian SME with multiple branches, was grappling with fragmented procurement processes. This resulted in limited visibility into overall spend, a high incidence of maverick (non-compliant) purchasing, and difficulties in leveraging their collective buying power for better supplier terms.</p>
      <h2>The Challenge: Controlling Spend and Optimizing Supplier Relationships</h2>
      <p>The key pain points for National Retail Solutions included:</p>
      <ul>
        <li><strong>Lack of Centralized Spend Data:</strong> Purchases were made across different departments with varying systems, making it impossible to get a clear picture of total spend.</li>
        <li><strong>High Maverick Spend:</strong> Without standardized approval processes, employees often made purchases outside of preferred supplier agreements, leading to higher costs.</li>
        <li><strong>Ineffective Supplier Negotiations:</strong> The absence of consolidated spend data weakened their negotiating position with key suppliers.</li>
        <li><strong>Time-Consuming Manual Processes:</strong> Requisitioning, approvals, and purchase order generation were largely manual and inefficient.</li>
      </ul>
      <h2>The Solution: A Unified Procurement Hub with MyGETS</h2>
      <p>National Retail Solutions implemented MyGETS to centralize and streamline their procurement operations. The solution focused on:</p>
      <ul>
        <li><strong>Spend Analytics Dashboards:</strong> Providing real-time, comprehensive visibility into all procurement spend, categorized by supplier, department, and item.</li>
        <li><strong>Automated Approval Workflows:</strong> Implementing standardized, multi-level approval workflows to ensure all purchases were compliant and authorized.</li>
        <li><strong>Centralized Supplier and Contract Management:</strong> Consolidating all supplier information and contracts into a single repository for easier management and performance tracking.</li>
      </ul>
      <h2>The Results: Enhanced Visibility, Cost Savings, and Improved Control</h2>
      <p>The adoption of MyGETS led to transformative outcomes for the SME:</p>
      <ul>
        <li><strong>40% Increase in Overall Spend Visibility:</strong> The company gained a clear, consolidated view of its procurement expenditure.</li>
        <li><strong>15% Reduction in Maverick Spend:</strong> Automated workflows and better visibility significantly curtailed non-compliant purchasing within the first six months.</li>
        <li><strong>8% Annual Cost Savings Identified:</strong> Armed with better data, the procurement team was able to renegotiate supplier contracts and identify significant cost-saving opportunities.</li>
        <li><strong>Streamlined Procure-to-Pay Cycle:</strong> Automation reduced manual effort and accelerated the entire procurement process.</li>
      </ul>
      <p>MyGETS empowered National Retail Solutions to take control of their procurement, turning it from a cost center into a strategic function that drives value and efficiency.</p>
    `
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // Await the entire params object
  const { slug } = await params;
  const study = sampleCaseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | MyGETS Case Studies',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${study.title} | MyGETS Case Studies`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | MyGETS Case Studies`,
      description: study.summary,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the entire params object
  const { slug } = await params;
  const study = sampleCaseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case study not found</h1>
          <Link 
            href="/resources/case-studies"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeftIcon className="mr-2 h-5 w-5" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <CaseStudyContent study={study} />
  );
}

