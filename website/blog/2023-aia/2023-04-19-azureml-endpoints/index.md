---
slug: 2023-day18
title: "18. 🧑🏽‍🔬Azure ML Managed Online Endpoints"
authors: ['Vlad']
draft: false
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: ['Machine-Learning', 'Azure-AI']
tags: ['ai-april', '30-days-of-azure-ai', 'ml-developers', 'azure-ml', 'data-scientist']

image: "https://azureaidevs.github.io/hub/img/2023/banner-day18.png"
description: "Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/blog/2023-day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"
---

<head>

  <!-- <meta name="twitter:url" content="https://azureaidevs.github.io/hub/blog/2023-day18" />
  <meta name="twitter:title" content="Azure ML Managed Online Endpoints" />
  <meta name="twitter:description" content="Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/blog/2023-day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML" />
  <meta name="twitter:image" content="https://azureaidevs.github.io/hub/img/2023/banner-day18.png" />
  <meta name="twitter:card" content="summary_large_image" />

   -->

  <meta property="og:url" content="https://azureaidevs.github.io/hub/blog/2023-day18" />
  <meta property="og:title" content="Azure ML Managed Online Endpoints" />
  <meta property="og:description" content="Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/blog/2023-day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML" />
  <meta property="og:image" content="https://azureaidevs.github.io/hub/img/2023/banner-day18.png" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Azure AI Developer" />


  <link rel="canonical" href="https://vladiliescu.net/aml-managed-endpoints-quickstart/"  />

</head>

- 📧 [Sign up for the Azure AI Developer Newsletter](https://aka.ms/azure-ai-dev-newsletter)
- 📰 [Subscribe to the #30DaysOfAzureAI RSS feed](https://azureaidevs.github.io/hub/blog/rss.xml)
- 📌 [Ask a question about this post on GitHub Discussions](https://github.com/AzureAiDevs/hub/discussions/categories/18-azure-ml-managed-online-endpoints)
- 💡 [Suggest a topic for a future post](https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content)

## Day _18_ of #30DaysOfAzureAI

<!-- README
The following description is also used for the tweet. So it should be action oriented and grab attention 
If you update the description, please update the description: in the frontmatter as well.
-->

**Azure ML Managed Online Endpoints - A Quickstart**

<!-- README
The following is the intro to the post. It should be a short teaser for the post.
-->

Unleash the full potential of your machine learning models with Azure Machine Learning's managed online endpoints. Enjoy the benefits of built-in security, native blue/green deployments, and auto-scaling with Azure Monitor. Achieve seamless deployment with step-by-step instructions using Azure CLI and Azure ML CLI v2 tools. Get started now!

## What we'll cover

<!-- README
The following list is the main points of the post. There should be 3-4 main points.
 -->


The three main points discussed in the article are:
1. Built-in security
2. Native blue/green deployments
3. Auto-scaling with Azure Monitor

<!-- 
- Main point 1
- Main point 2
- Main point 3 
- Main point 4
-->

![Image banner for day 18](./../../../static/img/2023/banner-day18.png)

<!-- README
Add or update a list relevant references here. These could be links to other blog posts, Microsoft Learn Module, videos, or other resources.
-->


### References

- [Learn Module: Introduction to Azure Machine Learning](https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover)
- [What is Azure Machine Learning?](https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover)


<!-- README
The following is the body of the post. It should be an overview of the post that you are referencing.
See the Learn More section, if you supplied a canonical link, then will be displayed here.
-->


The article discusses the benefits of using Azure Machine Learning's managed online endpoints and compares them to Azure Container Instances. The author outlines three main reasons why they prefer managed online endpoints: built-in security, native blue/green deployments, and auto-scaling with Azure Monitor.

To deploy a machine learning model using managed online endpoints, the author suggests using Azure CLI and Azure ML CLI v2 tools. The author provides step-by-step instructions for deploying an online endpoint using an inference script that translates API inputs to something the model can handle, invokes the model, and returns formatted results. The inference script must have two methods: init, which loads the model into memory, and run, which is called when someone invokes the API.

Overall, the article is a helpful guide for anyone looking to deploy machine learning models using Azure Machine Learning's managed online endpoints.

## Learn More

To learn more, check out this [article](https://vladiliescu.net/aml-managed-endpoints-quickstart/).


## Questions?

[Remember, you can ask a question about this post on GitHub Discussions](https://github.com/AzureAiDevs/Discussions/discussions/categories/18-azure-ml-managed-online-endpoints)