import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './../index.module.css';

const CampaignFeatures = [
  {
    title: 'Humans in AI Story 1',
    link: "https://www.youtube.com/embed/Z0YANisVqsM",
    description: (
      <>
        Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
      </>
    ),
  },
  {
    title: 'Humans in AI Story 2',
    link: "https://www.youtube.com/embed/2p3-Cy4OHVY",
    description: (
      <>
        Our guest today is Beatriz Stollnitz, a Cloud Advocate at Microsoft. We'll be discussing the potential of AI in the cloud and the ways in which it can be used to empower people and organizations.
      </>
    ),
  },
  {
    title: 'Humans in AI Story 3',
    link: "https://www.youtube.com/embed/3UlFEs1GX7Y",
    description: (
      <>
        Our guest today is Hemant Kumar, a program manager in the Azure Machine ML team with a focus on MLOps and moving models to production.
      </>
    ),
  },
  // {
  //   title: 'Humans in AI Story 4',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Humans in AI Story 5',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Humans in AI Story 6',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Humans in AI Story 7',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Humans in AI Story 8',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Humans in AI Story 9',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Humans in AI Story 10',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Humans in AI Story 11',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Humans in AI Story 12',
  //   link: "https://www.youtube.com/embed/Z0YANisVqsM",
  //   description: (
  //     <>
  //       Our guest today is Brannon Zahand, a program manager at Xbox who is using AI to create more accessible gaming experiences.
  //     </>
  //   ),
  // },
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
