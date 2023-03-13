import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: 'Call for Content',
    Svg: require('@site/static/img/campaign/call_for_content.svg').default,
    link: "https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content",
    // fillColor: "black",
    description: (
      <>
        Have a content suggestion? Let us know in the Call for Content discussion!
      </>
    ),
  },
  {
    title: 'Humans in AI',
    Svg: require('@site/static/img/campaign/humans-in-ai.svg').default,
    // link: "https://pnp.github.io/powerplatform-samples/",
    link: "/hub/humans-in-ai",
    // fillColor: "#fe6db6",
    description: (
      <>
        Tune in to hear from the people behind the technology, and learn how they're using AI to make a difference.
      </>
    ),
  },
  {
    title: 'Launch with AI',
    Svg: require('@site/static/img/campaign/launchwithai.svg').default,
    link: "https://startups.microsoft.com/blog/tag/launchwithai",
    fillColor: "#8661C5",
    description: (
      <>
        Learn how startups are building intelligent solutions with Azure AI.
      </>
    ),
  },
];

function Feature({ Svg, title, description, link, fillColor }) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg height="200px" width="200px" fill={fillColor} role="img" />
        </div>
      </a>
      <div fill="#00ff00" className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CampaignHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Welcome to the Community Corner
        </h1>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CampaignFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default function () {
  return (
    <Layout>
      <CampaignHeader />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
