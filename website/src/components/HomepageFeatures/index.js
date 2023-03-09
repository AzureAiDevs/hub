import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// CORE = POWER PLATFORM
// https://learn.microsoft.com/power-platform/guidance/icons
const CoreServices = [

  {
    title: 'Azure AI',
    svgpath: 'img/landing/Azure-AI.svg',
    link: "https://azure.microsoft.com/solutions/ai/?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        Drive business results and improve customer experiences with AI solutions
      </>
    ),
  },
  {
    title: 'Azure Cognitive Services',
    svgpath: 'img/landing/Cognitive-Services.svg',
    link: "https://azure.microsoft.com/products/cognitive-services?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        Add cognitive capabilities to apps with APIs and AI services
      </>
    ),
  },
  {
    title: 'Azure OpenAi Services',
    svgpath: 'img/landing/openai-services.svg',
    link: "https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        Apply advanced coding and language models to a variety of use cases.
      </>
    ),
  },
  {
    title: 'Azure Applied AI Services',
    svgpath: 'img/landing/Azure-Applied-AI-Services.svg',
    link: "https://azure.microsoft.com/products/applied-ai-services/?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        Generate tangible value for your organization quickly with AI services for common business processes.
      </>
    ),
  },
  {
    title: 'Azure Machine Learning',
    svgpath: 'img/landing/Machine-Learning.svg',
    link: "https://azure.microsoft.com/products/machine-learning?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        Use an enterprise-grade service for the end-to-end machine learning lifecycle..
      </>
    ),
  },
  {
    title: 'Machine learning operations (MLOps)',
    svgpath: 'img/landing/MlOps.svg',
    link: "https://azure.microsoft.com/products/form-recognizer?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        Accelerate automation, collaboration, and reproducibility of machine learning workflows
      </>
    ),
  },
];


// MORE = AZURE INTEGRATIONS
const MoreServices = [
  /*
  {
    title: 'Microsoft Graph',
    svgpath: 'img/landing/g-raph.svg',
    link: "https://learn.microsoft.com/graph/?WT.mc_id=javascript-82212-ninarasi",
    description: (
      <>
        Gateway to data & intelligence in Microsoft 365. Build intelligent apps, derive insights & analytics.
      </>
    ),
  },
  */
];


// TOOLS = TEAMS, GITHUB, VISUAL STUDIO CODE
const CoreTools = [
  {
    // Logo: https://code.visualstudio.com/brand
    title: 'Visual Studio Code',
    svgpath: 'img/landing/vscode.svg',
    link: "https://code.visualstudio.com/?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        A lightweight but powerful multi-platform source code editor with built-in support for modern programming languages.
      </>
    ),
  },
  {
    // https://github.com/logos
    title: 'GitHub CoPilot',
    svgpath: 'img/landing/CoPilot.png',
    link: "https://github.com/features/copilot?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        Your AI pair programmer
      </>
    ),
  },
  {
    // https://github.com/logos
    title: 'GitHub',
    svgpath: 'img/landing/github-mark.svg',
    link: "https://github.com/features?WT.mc_id=aiml-89446-dglover",
    description: (
      <>
        Build, ship and maintain software with tools for collaborate coding, Automation, CI/CD and Administration.
      </>
    ),
  },
];

function Feature({ svgpath, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <img width="120px" height="120px" src={svgpath} alt={title} />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// FIXME:
// When using SVG elements, the icon colors change based on order.
// Using img for now - debug issue (look at url(#a...) paths)

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CoreServices.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr />
        <div className="row">
          {MoreServices.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr />
        <div className="row">
          {CoreTools.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}