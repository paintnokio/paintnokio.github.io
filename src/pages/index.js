import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="DevComp - Open Source Solutions"
      description="Free Windows/Office activators and system tools">
      
      {/* Hero Banner */}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className={styles.heroContent}>
            {/* <img 
              src="/img/hero-joga.svg" 
              alt="CodeCraft Logo" 
              className={styles.logo} 
              width="120"
              height="120"
            /> */}
            <h1 className="hero__title">Dev Comp</h1>
            <p className="hero__subtitle">Alat sumber terbuka untuk penggemar Windows</p>
            <div className={styles.buttons}>
              <a
                className="button button--secondary button--lg"
                href="/download_windows">
                Unduh Sekarang
              </a>
              <a
                className="button button--outline button--lg"
                href="/intro">
                Memulai
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Features */}
      <main className={styles.mainContent}>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <FeatureCard 
                icon="⚡" 
                title="Secepat Kilat"
                description="Alat kami bekerja dalam hitungan detik tanpa bloatware"
              />
              <FeatureCard 
                icon="🔒" 
                title="100% Aman"
                description="Tidak ada telemetri, tidak ada pengumpulan data"
              />
              <FeatureCard 
                icon="🔄" 
                title="Sepenuhnya Gratis"
                description="Gratis selamanya dengan kode sumber terbuka"
              />
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className={styles.toolsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Popular Tools</h2>
            <div className={clsx('row', styles.toolsGrid)}>
              <ToolCard 
                title="Windows Activator" 
                href="/microsoft_activation"
                icon="🪟"
                description="Aktifkan Windows 10/11 secara instan"
              />
              <ToolCard 
                title="Office Toolkit" 
                href="/office_c2r_links"
                icon="📊"
                description="Solusi aktivasi Office lengkap"
              />
              <ToolCard 
                title="Penyelesaian Masalah" 
                href="/troubleshoot"
                icon="🔧"
                description="Masalah umum dan solusinya"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

// Feature Card Component
function FeatureCard({icon, title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureContent}>
        <div className={styles.featureIconContainer}>
          <span className={styles.featureIcon}>{icon}</span>
        </div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

// Tool Card Component
function ToolCard({title, href, icon, description}) {
  return (
    <div className={clsx('col col--4', styles.toolCard)}>
      <a href={href} className={styles.toolLink}>
        <div className={clsx('card', styles.toolContent)}>
          <div className={styles.toolHeader}>
            <span className={styles.toolIcon}>{icon}</span>
            <h3 className={styles.toolTitle}>{title}</h3>
          </div>
          <div className={styles.toolBody}>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}