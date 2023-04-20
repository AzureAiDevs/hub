---
slug: "day24"
title: "24. 🏭Machine Learning for Beginners"
authors: ['Bethany']
draft: true
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
keywords: ['ml-for-beginners']
tags: ['ai-april', '30-days-of-azure-ai', 'ml-developers', 'workshop']

image: https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day24.png
description: "🏭Welcome to day 24 of #30DaysOfAzureAI. Are you interested in starting your journey into Machine Learning? Check out the Microsoft Machine Learning for Beginners Curriculum, a free 12-week, 26-lesson course covering classic ML with Scikit-learn, NLP, and Time Series analysis. Let's dive in!"
---

import Social from '@site/src/components/social';

<head>

  <meta name="twitter:url" content="https://azureaidevs.github.io/hub/2023-aia/day24" />
  <meta name="twitter:title" content="Machine Learning for Beginners" />
  <meta name="twitter:description" content="🏭Welcome to day 24 of #30DaysOfAzureAI. Are you interested in starting your journey into Machine Learning? Check out the Microsoft Machine Learning for Beginners Curriculum, a free 12-week, 26-lesson course covering classic ML with Scikit-learn, NLP, and Time Series analysis. Let's dive in!" />
  <meta name="twitter:image" content="https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day24.png" />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="canonical" href="https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover"  />
  </head>

- 👓 [View today's article](https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover)
- 🍿 [Tune into the AI Show](https://aka.ms/ai-april-ai-show)
- 🧬 [Connect with Humans in AI](/hub/humans-in-ai)
- 🌤️ [Continue the Azure AI Cloud Skills Challenge](https://aka.ms/30-days-of-azure-ai-challenge)
- 🏫 [Bookmark the Azure AI Technical Community](https://aka.ms/ai-april-tech-community)
- 🌏 [Join the Global AI Community](https://www.meetup.com/pro/the-global-ai-community)
- 💡 [Suggest a topic for a future post](https://forms.office.com/r/GhtwgHVP9L)

### Please share

<Social
    page_url="https://azureaidevs.github.io/hub/2023-aia/day24"
    image_url="https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day24.png"
    title="Machine Learning for Beginners"
    description= "🏭Welcome to day 24 of #30DaysOfAzureAI. Are you interested in starting your journey into Machine Learning? Check out the Microsoft Machine Learning for Beginners Curriculum, a free 12-week, 26-lesson course covering classic ML with Scikit-learn, NLP, and Time Series analysis. Let's dive in!"
    hashtags="MachineLearning"
    hashtag="#30DaysOfAzureAi"
/>

## 🗓️ Day 24 of #30DaysOfAzureAI

<!-- Short description section -->

**Learn about the Microsoft Machine Learning for Beginners Curriculum**

<!-- Intro section -->

Yesterday we learned about Data Science for Beginners Curriculum. Today is for folk starting their ML journey. The Machine Learning for Beginners Curriculum is a 12-week, 26-lesson course, so let's dive in!

## 🎯 What we'll cover

<!-- What we'll cover section -->


- Machine Learning for Beginners curriculum.
- Classic Machine Learning with the Scikit-learn Python library.
- Introduction to Natural Language Processing and Time Series analysis.


[![Image banner for day 24](./../../static/img/2023-aia/banner-day24.png)](https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover)


<!-- Reference section -->



## 📚 References

- [Learn Module: Introduction to AI technology](https://learn.microsoft.com/training/modules/introduction-to-ai-technology?WT.mc_id=aiml-89446-dglover)


<!-- Body section -->


## 🚌 Get started with Machine Learning for Beginners

[Today's article](https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover) is about the Microsoft Machine Learning for Beginners curriculum, a free 12-week, 26-lesson curriculum all about Machine Learning.

In this curriculum, you will learn about what is sometimes called classic machine learning, using primarily Scikit-learn as a library and avoiding deep learning, which is covered in the [Artificial Intelligence for Beginners](https://microsoft.github.io/AI-For-Beginners/) curriculum. Pair these lessons with our [Data Science for Beginners](https://microsoft.github.io/ML-For-Beginners/) curriculum, as well!

What are you waiting for? Get started today!

## Machine Learning for Beginners Curriculum

The Machine Learning for Beginners Curriculum is a gentle introduction to the world of models taking you from predicting prices of North American pumpkins to discovering trends and patterns in Nigerian music consumption. The curriculum spans over 12 weeks (about 3 months) covering 26 topics including classic machine learning, time series analysis and an introduction to Natural Language Processing. The curriculum is extensively covered in Python but has a couple of lessons translated into R.

In addition to hands-on projects, the curriculum includes quizzes and a postscript on real world application of Machine Learning. In this blog, I will cover a brief overview of the different machine learning models linking them back to specific curriculum lessons for self-study.

## Classic Machine Learning

Machine Learning is often the foundation for an AI (artificial intelligence) system and is the way we "teach" a computer model to make predictions and draw conclusions from data. It automates the process of pattern-discovery by finding meaningful insights from real-world or generated data.

Classical Machine Learning includes supervised and unsupervised learning. Both require human effort to build the training set. In supervised learning involves training a model on a dataset that already has both input and output pairs, while in unsupervised learning, there is no known output.

Examples of supervised learning are regression analysis and classification, while unsupervised learning an example is clustering. The different models are explained below.

### Regression Models

The goal of regression is predicting a continuous value given several variables. For example, if you want to predict the probable height for a person of a given age, you will use linear regression, as you are seeking a numeric value. In the regression lessons, you will build a [model to determine pumpkin prices in North America](https://microsoft.github.io/ML-For-Beginners/#/2-Regression/README).

### Classification Models

Classification is a form of supervised learning that bears a lot in common with regression techniques. In classification, given various variables, you try and predict which category a value belongs in. For example, if you are interested in discovering whether a type of cuisine should be considered vegan or not, you are looking for a category assignment so you would use logistic regression. In the classification lessons, given a batch of ingredients you will determine which classes different Asian and Indian cusines fall into.

### Clustering Models

Clustering models help you make sense of chaos and is part of unsupervised learning. In a professional setting, clustering can be used to determine things like market segmentation, determining what age groups buy what items, for example. Another use would be anomaly detection, to detect fraud from a dataset of credit card transactions. In this lesson, you will [group Nigerian Music based on several factors including danceability, energy, speechiness and so much more](https://microsoft.github.io/ML-For-Beginners/#/5-Clustering/README). The algorithm used here is K-Means Clustering.

## Introduction Time Series analysis.

Time Series Forecasting: Time series forecasting is a sort of 'crystal ball': based on past performance of a variable such as price, you can predict its future potential value. Using time series, you can predict trends, understand seasons, detect outliers and many more. Time series data is a list of ordered observations, unlike data that can be analyzed by linear regression. The most common one is ARIMA (Auto Regressive Integrated Moving Average), an acronym that stands for "Autoregressive Integrated Moving Average". You can read [more on time series here](https://microsoft.github.io/ML-For-Beginners/#/7-TimeSeries/README).

## Introduction to Natural Language Processing

Natural Language Processing (NLP): Natural Language processing is the ability of machines to understand human-readable text. Using NLP, you can figure out sentiments, this is how people feel about a particular topic or subject and determine whether text is spam or not. In the Natural Language processing lessons, [you will build a simple bot and do sentiment analysis on hotel reviews](https://microsoft.github.io/ML-For-Beginners/#/6-NLP/README).

## Conclusion

For a deep dive into the different models, building projects using the scikit-learn library, head over to the [Machine Learning for Beginners curriculum](https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover). At the end of the lessons, you will have a portfolio of various machine learning projects. Additionally, you will understand how you can implement your

## 👓 View today's article

Today's [article](https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover).


## 🙋🏾‍♂️ Questions?

[You can ask questions about this post on GitHub Discussions](https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-workshops)

## 📍 30 days roadmap

What's next? View the [#30DaysOfAzureAI Roadmap](/hub/roadmap/30days)

## 🧲 Subscribe

- 📬 [Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter](https://aka.ms/azure-ai-dev-newsletter)
- [![The image is the blog RSS feed available icon](./../../static/img/2023-aia/rss.png) Subscribe to the blog RSS XML feed](https://azureaidevs.github.io/hub/2023-aia/rss.xml)