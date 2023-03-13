import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: '#30DaysOfAzureAI',
    Svg: require('@site/static/img/campaign/30days.svg').default,
    fillColor: "#f25022",
    link: "azure-ai-devs/30Days",
    description: (
      <>
      Join us on a #30Day journey covering Azure OpenAI and Cognitive Services, Azure ML, MLOps, and AI App integration!
      </>
    ),
  },

  // {
  //   title: 'Video + Livestreams',
  //   Svg: require('@site/static/img/campaign/buzz.svg').default,
  //   fillColor: "#b66dff",
  //   link: "/ai-april/Video-Live",
  //   description: (
  //     <>
  //     Join us for live online events to learn and engage with experts, or catch up with video series and replays on your own time.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Cloud Skills',
  //   Svg: require('@site/static/img/campaign/skills.svg').default,
  //   fillColor: "#ffb900",
  //   link: "https://aka.msai-april/challenge",
  //   description: (
  //     <>
  //     Skill up on key cloud technologies with these free, self-guided learning courses - and make the leaderboard!
  //     </>
  //   ),
  // },
  // {
  //   title: 'Hands-on Workshops',
  //   Svg: require('@site/static/img/campaign/hacks.svg').default,
  //   fillColor: "#00a4ef",
  //   link: "/Low-Code/docs/intro",
  //   description: (
  //     <>
  //     Explore workshops in your own time, to work through various features or solutions in self-guided mode.
  //     </>
  //   ),
  // },
  {
    title: 'Join the conversation',
    Svg: require('@site/static/img/campaign/ama.svg').default,
    link: "https://github.com/AzureAiDevs/hub/discussions",
    fillColor: "#fe6db6",
    description: (
      <>
      Wanting to connect with other to help solve your problems? Wrote articles to help others? Share them with the community!
      </>
    ),
  },
  {
    title: 'Community Corner',
    Svg: require('@site/static/img/campaign/community_content.svg').default,
    // link: "https://pnp.github.io/powerplatform-samples/",
    link: "/hub/community_content",
    // fillColor: "#fe6db6",
    description: (
      <>
      Check out amazing content from the Azure AI developer community.
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

function Feature({Svg, title, description, link, fillColor}) {
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
          It's AI April!
        </h1>
        <p>
          Join us for a month-long celebration of Azure AI development.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/2023-aia">
            Explore #30DaysOfAzureAI
          </Link>
        </div>
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


export default function() {
  return (
    <Layout
      title={`Welcome to #AI April`}
      description="Join us for a month-long celebration of Azure AI Development with #AIApril and #30DaysOfAzureAI />"> 
      <CampaignHeader/>
      <main>
        <FeaturesSection/>
      </main>
    </Layout>
    
  );
}