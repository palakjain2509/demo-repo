import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | MyGETS',
  description: 'Read the MyGETS Terms of Service to understand how we collect, use, and protect your personal information in compliance with Australian Privacy Principles.',
  openGraph: {
    title: 'Terms of Service | MyGETS',
    description: 'Read the MyGETS Terms of Service to understand how we collect, use, and protect your personal information.',
  },
};

export default function TermsOfServicePage() {
  return (
    <main style={{ padding: '0', fontFamily: 'Segoe UI, Roboto, Helvetica, sans-serif' }}>
      <section style={{ 
        textAlign: 'center', 
        padding: '40px 20px',
        backgroundColor: '#f3f2f1'
      }}>
        <h1 style={{ 
          fontSize: '1.75rem',
          color: '#0067B8',
          marginBottom: '10px'
        }}>Terms of Service</h1>
        <p style={{ 
          fontSize: '0.875rem',
          color: '#605E5C'
        }}>Last Updated: May 08, 2025</p>
      </section>

      <section style={{ 
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <p style={{ 
          lineHeight: '1.6',
          marginBottom: '20px',
          fontSize: '0.875rem'
        }}>
          MyGETS (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the [https://www.mygets.net] website and the MyGETS SaaS platform (hereinafter referred to as the &quot;Service&quot;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We are committed to protecting your privacy and ensuring compliance with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth).
        </p>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#333',
            marginTop: '30px',
            marginBottom: '15px'
          }}>1. Information Collection and Use</h2>
          <p style={{ 
            lineHeight: '1.6',
            marginBottom: '15px',
            fontSize: '0.875rem'
          }}>
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
          <h3 style={{ 
            fontSize: '1.25rem',
            color: '#0067B8',
            marginTop: '20px',
            marginBottom: '10px'
          }}>Types of Data Collected</h3>
          <h4 style={{ 
            fontSize: '1.1rem',
            color: '#333',
            marginTop: '15px',
            marginBottom: '5px'
          }}>Personal Data</h4>
          <p style={{ 
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:
          </p>
          <ul style={{ 
            listStyle: 'disc',
            paddingLeft: '20px',
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Business name and address</li>
            <li>Usage Data (as defined below)</li>
          </ul>
          <h4 style={{ 
            fontSize: '1.1rem',
            color: '#333',
            marginTop: '15px',
            marginBottom: '5px'
          }}>Usage Data</h4>
          <p style={{ 
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>
            We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
          <h4 style={{ 
            fontSize: '1.1rem',
            color: '#333',
            marginTop: '15px',
            marginBottom: '5px'
          }}>Tracking & Cookies Data</h4>
          <p style={{ 
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>
            We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#333',
            marginTop: '30px',
            marginBottom: '15px'
          }}>2. Use of Data</h2>
          <p style={{ 
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>MyGETS uses the collected data for various purposes:</p>
          <ul style={{ 
            listStyle: 'disc',
            paddingLeft: '20px',
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
          </ul>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#333',
            marginTop: '30px',
            marginBottom: '15px'
          }}>3. Legal Basis for Processing Personal Data</h2>
          <p style={{ 
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>
            If you are from Australia, MyGETS's legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it. MyGETS may process your Personal Data because:
          </p>
          <ul style={{ 
            listStyle: 'disc',
            paddingLeft: '20px',
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>
            <li>We need to perform a contract with you</li>
            <li>You have given us permission to do so</li>
            <li>The processing is in our legitimate interests and it is not overridden by your rights</li>
            <li>For payment processing purposes</li>
            <li>To comply with the law</li>
          </ul>
        </div>

        {/* Placeholder sections */}
        <p style={{ 
          lineHeight: '1.6',
          marginTop: '20px',
          fontStyle: 'italic',
          fontSize: '0.875rem'
        }}>
          [Placeholder for detailed sections 4 through 13...]
        </p>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            color: '#333',
            marginTop: '30px',
            marginBottom: '15px'
          }}>13. Contact Us</h2>
          <p style={{ 
            lineHeight: '1.6',
            marginBottom: '10px',
            fontSize: '0.875rem'
          }}>
            If you have any questions about this Terms of Service, please contact us:
          </p>
          <ul style={{ 
            listStyle: 'none',
            paddingLeft: '0',
            lineHeight: '1.6',
            fontSize: '0.875rem'
          }}>
            <li>By email: <a href="mailto:privacy@mygets.net" style={{ color: '#107C10' }}>privacy@mygets.net</a> (Placeholder Email)</li>
            <li>By visiting this page on our website: <Link href="/contact" style={{ color: '#107C10' }}>https://www.mygets.net/contact</Link></li>
            <li>By mail: Attn: Privacy Officer, MyGETS, Placeholder Street Address, Kewdale, WA, Placeholder Postcode, Australia</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

