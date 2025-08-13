'use client';

import Link from 'next/link';

const LegalContent = () => {
  return (
    <main style={{ padding: '20px', fontFamily: 'Segoe UI, Roboto, Helvetica, sans-serif' }}>
      <section style={{ textAlign: 'center', padding: '50px 0', backgroundColor: '#f3f2f1' }}>
        <h1 style={{ fontSize: '2.25rem', color: '#0067B8' }}>Legal Information</h1>
        <p style={{ fontSize: '1.2rem', margin: '20px 0', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          Here you can find important legal documents governing your use of MyGETS services and website.
        </p>
      </section>

      <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.875rem', color: '#333', marginBottom: '30px', textAlign: 'center' }}>Our Policies</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: 'white', borderRadius: '4px', width: '100%', maxWidth: '500px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0067B8', marginBottom: '10px' }}>Privacy Policy</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
              Our Privacy Policy explains how we collect, use, share, and protect your personal information when you use our website and services. We are committed to safeguarding your privacy.
            </p>
            <Link href="/legal/privacy-policy" style={{ color: '#107C10', textDecoration: 'none', fontWeight: 'bold' }}>
              Read Our Privacy Policy &rarr;
            </Link>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: 'white', borderRadius: '4px', width: '100%', maxWidth: '500px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0067B8', marginBottom: '10px' }}>Terms of Service</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
              Our Terms of Service outline the rules and regulations for the use of MyGETS's Website and SaaS platform. By accessing our services, you agree to these terms.
            </p>
            <Link href="/legal/terms-of-service" style={{ color: '#107C10', textDecoration: 'none', fontWeight: 'bold' }}>
              Read Our Terms of Service &rarr;
            </Link>
          </div>
        </div>
         <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.9rem', color: '#605E5C' }}>
          If you have any questions regarding our legal policies, please <Link href="/contact" style={{ color: '#0067B8' }}>contact us</Link>.
        </p>
      </section>
    </main>
  );
};

export default LegalContent;