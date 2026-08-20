import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroTriangles from '@site/src/components/HeroTriangles';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <HeroTriangles />
      <div className={styles.heroGlow} />
      <div className="container">
        <span className={styles.heroBadge}>HSBC Wealth Solutions</span>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <p className={styles.heroOverview}>
          The AI-native engine transforming HSBC Wealth Solutions. By
          modernizing legacy infrastructure into an adaptable enterprise
          backbone, it scales intelligent automation, predictive insights,
          and faster decision-making across the entire wealth ecosystem.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/product-overview">
            Product Overview
          </Link>
          <Link
            className={clsx(
              'button button--outline button--lg',
              styles.secondaryButton,
            )}
            to="/architecture-design">
            Architecture Design
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Wealth Intelligence is the core AI foundation within HSBC Wealth Solutions, transforming legacy platform infrastructure into a next-generation, AI-native ecosystem.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
