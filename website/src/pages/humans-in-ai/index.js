import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: 'Brannon Zahand',
    link: "https://www.youtube.com/embed/Z0YANisVqsM",
    description: (
      <>
        Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
      </>
    ),
  },
  {
    title: 'Beatriz Stollnitz',
    link: "https://www.youtube.com/embed/2p3-Cy4OHVY",
    description: (
      <>
        Our guest today is Beatriz Stollnitz, a Cloud Advocate at Microsoft. We'll be discussing the potential of AI in the cloud and the ways in which it can be used to empower people and organizations.
      </>
    ),
  },
  {
    title: 'Hemant Kumar',
    link: "https://www.youtube.com/embed/3UlFEs1GX7Y",
    description: (
      <>
        Our guest today is Hemant Kumar, a program manager in the Azure Machine ML team with a focus on MLOps and moving models to production.
      </>
    ),
  },
  {
    title: 'Abe Omorogbe',
    link: "https://www.youtube.com/embed/0WON7iOIyHM",
    description: (
     <>
        Our guest today is Abe Omorogbe a program manager at Microsoft working on the Azure Machine learning.
     </>
   ),
  },
  {
    title: 'Sarah Maston',
    link: "https://www.youtube.com/embed/aXvPtqkLiGk",
    description: (
     <>
        Our guest today is Sarah Maston founder of #Project15, a project to accelerate conservation solutions that leverage devices and AI.
     </>
   ),
  },
  {
    title: 'Bala Venkataraman',
    link: "https://www.youtube.com/embed/ZLquuAuoRbk",
    description: (
     <>
        Our guest today is Bala Venkataraman a program manager at Microsoft working on the Azure Machine learning.
     </>
   ),
  },  
  {
    title: 'Ram Shankar Siva Kumar',
    link: "https://www.youtube.com/watch?v=gU-Q1H77CjA",
    description: (
     <>
        This week we talk with Ram Shankar Siva Kumar. He is part of the Azure Security Data Science team where he gets to apply Machine Learning principles to make the cloud secure.
     </>
   ),
  },  
];

function Feature({ title, description, link, fillColor }) {
  return (
    <div className={clsx('col col--4')}>
      <div fill="#00ff00" className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <iframe width="300" height="168" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>{description}</p>
      </div>
    </div>
  );
}

// function CampaignHeader() {
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">
//           It's AI April!
//         </h1>
//         <p>
//           Join us for a month-long celebration of Azure AI development.
//         </p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/blog">
//             Explore #30DaysOfAzureAI
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

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
      {/* <CampaignHeader/> */}
      <main>
        <FeaturesSection />
      </main>
    </Layout>

  );
}
