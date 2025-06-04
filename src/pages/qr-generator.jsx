import React from 'react';
import Layout from '@theme/Layout';
import WhatsappQRGenerator from '../components/WhatsappQRGenerator';
import Head from '@docusaurus/Head';

function QRGeneratorPage() {
  return (
    <Layout
      title="WhatsApp QR Generator"
      description="Buat QR Code untuk WhatsApp dengan mudah. Generator QR Code untuk menghubungkan WhatsApp Anda."
    >
      <Head>
        <meta name="keywords" content="whatsapp qr generator, barcode whatsapp, qr code whatsapp, link whatsapp" />
        <link rel="canonical" href="https://yourwebsite.com/qr-generator" />
      </Head>
      
      <main>
        <div className="container">
          <WhatsappQRGenerator />
        </div>
      </main>
    </Layout>
  );
}

export default QRGeneratorPage;