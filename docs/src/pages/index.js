import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="BrightWorld Technologies, Inc."
      description="BrightWorld Technologies documentation portal."
    >
      <main className={styles.main}>
        <div className="container">
          <div className={styles.center}>
            <img
              src="/img/logo.png"
              alt="BrightWorld Technologies, Inc."
              className={styles.logo}
            />

            <Link className="button button--primary button--lg" to="/docs/intro">
              Documentation
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}