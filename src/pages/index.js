import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="CodeCraft - Open Source Solutions"
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
            <h1 className="hero__title">Code Craft</h1>
            <p className="hero__subtitle">Open-source tools for Windows enthusiasts</p>
            <div className={styles.buttons}>
              <a
                className="button button--secondary button--lg"
                href="/download_windows">
                Download Now
              </a>
              <a
                className="button button--outline button--lg"
                href="/intro">
                Get Started
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
                title="Lightning Fast"
                description="Our tools work in seconds without bloatware"
              />
              <FeatureCard 
                icon="🔒" 
                title="100% Secure"
                description="No telemetry, no data collection"
              />
              <FeatureCard 
                icon="🔄" 
                title="Completely Free"
                description="Free forever with open-source code"
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
                description="Activate Windows 10/11 instantly"
              />
              <ToolCard 
                title="Office Toolkit" 
                href="/office_c2r_links"
                icon="📊"
                description="Complete Office activation solution"
              />
              <ToolCard 
                title="Troubleshooting" 
                href="/troubleshoot"
                icon="🔧"
                description="Common issues and solutions"
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