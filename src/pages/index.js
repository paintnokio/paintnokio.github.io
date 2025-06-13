import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="DevComp - Open Source Solutions"
      description="Free Windows/Office activators and system tools"
    >
      {/* Hero Banner */}
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="hero__title">Dev Comp</h1>
            <p className="hero__subtitle">
              Alat sumber terbuka untuk penggemar Windows
            </p>
            <div className={styles.buttons}>
              <a
                className="button button--secondary button--md"
                href="/download_windows">
                Software
              </a>
              <a
                className="button button--secondary button--md"
                href="/intro">
                Tutorial
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
            <div className={clsx("row", styles.toolsGrid)}>
              {/* ToolCard dengan multiple links */}
              <ToolCard
                title="Windows Toolkit"
                icon="🪟"
                description="Kumpulan alat aktivasi Windows"
                links={[
                  {
                    label: "Aktivator Windows 10",
                    href: "/microsoft_activation",
                  },
                  {
                    label: "Aktivator Windows 11",
                    href: "/microsoft_activation",
                  },
                  {
                    label: "Download ISO",
                    href: "https://msdl.devcomp.fun/",
                  },
                ]}
              />

              <ToolCard
                title="Office Toolkit"
                icon="📊"
                description="Solusi aktivasi Office lengkap"
                links={[
                  {
                    label: "Office 2019 Activator",
                    href: "/microsoft_activation",
                  },
                  {
                    label: "Office 2021 Activator",
                    href: "/microsoft_activation",
                  },
                  {
                    label: "C2R Installer",
                    href: "/office_c2r_links",
                  },
                ]}
              />

              <ToolCard
                title="Penyelesaian Masalah"
                icon="🔧"
                description="Solusi untuk masalah umum"
                links={[
                  {
                    label: "Panduan Troubleshoot",
                    href: "/in_place_repair_upgrade",
                  },
                  {
                    label: "Perbaikan Error",
                    href: "/fix_powershell",
                  },
                  {
                    label: "Forum Dukungan",
                    href: "/troubleshoot",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className={clsx("col col--4", styles.featureCard)}>
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

// Tool Card Component (MODIFIED VERSION)
function ToolCard({ title, icon, description, links }) {
  return (
    <div className={clsx("col col--4", styles.toolCard)}>
      <div className={clsx("card", styles.toolContent)}>
        <div className={styles.toolHeader}>
          <span className={styles.toolIcon}>{icon}</span>
          <h3 className={styles.toolTitle}>{title}</h3>
        </div>
        <div className={styles.toolBody}>
          <p>{description}</p>

          {/* Container untuk multiple links */}
          <div className={styles.toolLinks}>
            {links.map((link, index) => (
              <a key={index} href={link.href} className={styles.toolLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
