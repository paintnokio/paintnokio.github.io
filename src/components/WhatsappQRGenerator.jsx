import React, { useEffect, useRef } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from '../css/WhatsappQRGenerator.module.css';

const WhatsappQRGenerator = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Fungsi untuk menyesuaikan tinggi iframe
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'setHeight' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>WhatsApp QR Code Generator</h2>
        <p>Buat QR Code untuk menghubungkan WhatsApp Anda dengan mudah</p>
      </div>
      
      <BrowserOnly>
        {() => (
          <iframe
            ref={iframeRef}
            src="/whatsapp-qr-generator.html"
            title="WhatsApp QR Generator"
            className={styles.generatorFrame}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        )}
      </BrowserOnly>
      
      <div className={styles.infoSection}>
        <h3>Cara Menggunakan</h3>
        <ol>
          <li>Masukkan nomor WhatsApp lengkap dengan kode negara (contoh: 628123456789)</li>
          <li>Tambahkan pesan awal jika diperlukan (opsional)</li>
          <li>Klik "Buat QR Code"</li>
          <li>Scan QR Code menggunakan WhatsApp di menu "Perangkat Tertaut"</li>
          <li>QR Code dapat disimpan dalam riwayat atau di-download</li>
        </ol>
      </div>
    </div>
  );
};

export default WhatsappQRGenerator;