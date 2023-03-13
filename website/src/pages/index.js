import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Import image
import Image from '@theme/IdealImage';
import bannerImg from './../../static/img/azure-ai.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Azure AI Developer Community Hub!
        </h1>
        <p className="hero__subtitle">{"From Azure OpenAI and Cognitive Services to Machine learning and MLOps, Powering Next Gen Intelligent Apps!"}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="ai-april">
            Explore #AzureAiDevs
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Link to="https://azure.microsoft.com/solutions/ai/?WT.mc_id=aiml-89446-dglover">
          <Image img={bannerImg} className={styles.featureImg} />
        </Link>
      </div>
    </header>
  );
}

// Azure AI Dev Home Page
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.customFields.description}`} >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageHero />
    </Layout>
  );
}