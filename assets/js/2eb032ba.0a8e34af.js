"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9606],{32842:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=a(87462),n=(a(67294),a(3905)),r=a(30925);const s={slug:"day24",title:"24. \ud83c\udfedMachine Learning for Beginners",authors:["Bethany"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["ml-for-beginners"],tags:["ai-april","30-days-of-azure-ai","ml-developers","workshop"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day24.png",description:"\ud83c\udfedWelcome to day 24 of #30DaysOfAzureAI. Check out the Microsoft Machine Learning for Beginners Curriculum, a free 12-week, 26-lesson course covering classic ML with Scikit-learn, NLP, and Time Series analysis. Let's dive in!"},o=void 0,l={permalink:"/hub/2023-aia/day24",source:"@site/2023-aia/2023-04-26-ml-ai-workshops/index.md",title:"24. \ud83c\udfedMachine Learning for Beginners",description:"\ud83c\udfedWelcome to day 24 of #30DaysOfAzureAI. Check out the Microsoft Machine Learning for Beginners Curriculum, a free 12-week, 26-lesson course covering classic ML with Scikit-learn, NLP, and Time Series analysis. Let's dive in!",date:"2023-04-26T00:00:00.000Z",formattedDate:"April 26, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"},{label:"workshop",permalink:"/hub/2023-aia/tags/workshop"}],readingTime:5.535,hasTruncateMarker:!1,authors:[{name:"Bethany Jepchumba",title:"Cloud Advocate",url:"https://github.com/BethanyJep",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Bethany.png",key:"Bethany"}],frontMatter:{slug:"day24",title:"24. \ud83c\udfedMachine Learning for Beginners",authors:["Bethany"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["ml-for-beginners"],tags:["ai-april","30-days-of-azure-ai","ml-developers","workshop"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day24.png",description:"\ud83c\udfedWelcome to day 24 of #30DaysOfAzureAI. Check out the Microsoft Machine Learning for Beginners Curriculum, a free 12-week, 26-lesson course covering classic ML with Scikit-learn, NLP, and Time Series analysis. Let's dive in!"},prevItem:{title:"23. \ud83c\udfedData Science for Beginners",permalink:"/hub/2023-aia/day23"},nextItem:{title:"25. \ud83c\udfedBuild a Patient Registration App",permalink:"/hub/2023-aia/day25"}},u={authorsImageUrls:[void 0]},c=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 24 of #30DaysOfAzureAI",id:"\ufe0f-day-24-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Get started with Machine Learning for Beginners",id:"-get-started-with-machine-learning-for-beginners",level:2},{value:"Machine Learning for Beginners Curriculum",id:"machine-learning-for-beginners-curriculum",level:2},{value:"Classic Machine Learning",id:"classic-machine-learning",level:2},{value:"Regression Models",id:"regression-models",level:3},{value:"Classification Models",id:"classification-models",level:3},{value:"Clustering Models",id:"clustering-models",level:3},{value:"Introduction Time Series analysis.",id:"introduction-time-series-analysis",level:2},{value:"Introduction to Natural Language Processing",id:"introduction-to-natural-language-processing",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],h={toc:c};function d(e){let{components:i,...s}=e;return(0,n.kt)("wrapper",(0,t.Z)({},h,s,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day24"}),(0,n.kt)("meta",{name:"twitter:title",content:"Machine Learning for Beginners"}),(0,n.kt)("meta",{name:"twitter:description",content:"\ud83c\udfedWelcome to day 24 of #30DaysOfAzureAI. Check out the Microsoft Machine Learning for Beginners Curriculum, a free 12-week, 26-lesson course covering classic ML with Scikit-learn, NLP, and Time Series analysis. Let's dive in!"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day24.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\uddde\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"/hub/ai-update"},"AiMonthly Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,n.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(r.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day24",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day24.png",title:"Machine Learning for Beginners",description:"\ud83c\udfedWelcome to day 24 of #30DaysOfAzureAI. Check out the Microsoft Machine Learning for Beginners Curriculum, a free 12-week, 26-lesson course covering classic ML with Scikit-learn, NLP, and Time Series analysis. Let's dive in!",hashtags:"MachineLearning",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-24-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 24 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about the Microsoft Machine Learning for Beginners Curriculum")),(0,n.kt)("p",null,"Yesterday we learned about Data Science for Beginners Curriculum. Today is for folk starting their ML journey. The Machine Learning for Beginners Curriculum is a 12-week, 26-lesson course, so let's dive in!"),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Machine Learning for Beginners curriculum."),(0,n.kt)("li",{parentName:"ul"},"Classic Machine Learning with the Scikit-learn Python library."),(0,n.kt)("li",{parentName:"ul"},"Introduction to Natural Language Processing and Time Series analysis.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover"},(0,n.kt)("img",{alt:"Image banner for day 24",src:a(57281).Z,width:"1920",height:"1080"}))),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/introduction-to-ai-technology?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to AI technology"))),(0,n.kt)("h2",{id:"-get-started-with-machine-learning-for-beginners"},"\ud83d\ude8c Get started with Machine Learning for Beginners"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover"},"Today's article")," is about the Microsoft Machine Learning for Beginners curriculum, a free 12-week, 26-lesson curriculum all about Machine Learning."),(0,n.kt)("p",null,"In this curriculum, you will learn about what is sometimes called classic machine learning, using primarily Scikit-learn as a library and avoiding deep learning, which is covered in the ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/AI-For-Beginners/"},"Artificial Intelligence for Beginners")," curriculum. Pair these lessons with our ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners/"},"Data Science for Beginners")," curriculum, as well!"),(0,n.kt)("p",null,"What are you waiting for? Get started today!"),(0,n.kt)("h2",{id:"machine-learning-for-beginners-curriculum"},"Machine Learning for Beginners Curriculum"),(0,n.kt)("p",null,"The Machine Learning for Beginners Curriculum is a gentle introduction to the world of models taking you from predicting prices of North American pumpkins to discovering trends and patterns in Nigerian music consumption. The curriculum spans over 12 weeks (about 3 months) covering 26 topics including classic machine learning, time series analysis and an introduction to Natural Language Processing. The curriculum is extensively covered in Python but has a couple of lessons translated into R."),(0,n.kt)("p",null,"In addition to hands-on projects, the curriculum includes quizzes and a postscript on real world application of Machine Learning. In this blog, I will cover a brief overview of the different machine learning models linking them back to specific curriculum lessons for self-study."),(0,n.kt)("h2",{id:"classic-machine-learning"},"Classic Machine Learning"),(0,n.kt)("p",null,'Machine Learning is often the foundation for an AI (artificial intelligence) system and is the way we "teach" a computer model to make predictions and draw conclusions from data. It automates the process of pattern-discovery by finding meaningful insights from real-world or generated data.'),(0,n.kt)("p",null,"Classical Machine Learning includes supervised and unsupervised learning. Both require human effort to build the training set. In supervised learning involves training a model on a dataset that already has both input and output pairs, while in unsupervised learning, there is no known output."),(0,n.kt)("p",null,"Examples of supervised learning are regression analysis and classification, while unsupervised learning an example is clustering. The different models are explained below."),(0,n.kt)("h3",{id:"regression-models"},"Regression Models"),(0,n.kt)("p",null,"The goal of regression is predicting a continuous value given several variables. For example, if you want to predict the probable height for a person of a given age, you will use linear regression, as you are seeking a numeric value. In the regression lessons, you will build a ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners/#/2-Regression/README"},"model to determine pumpkin prices in North America"),"."),(0,n.kt)("h3",{id:"classification-models"},"Classification Models"),(0,n.kt)("p",null,"Classification is a form of supervised learning that bears a lot in common with regression techniques. In classification, given various variables, you try and predict which category a value belongs in. For example, if you are interested in discovering whether a type of cuisine should be considered vegan or not, you are looking for a category assignment so you would use logistic regression. In the classification lessons, given a batch of ingredients you will determine which classes different Asian and Indian cusines fall into."),(0,n.kt)("h3",{id:"clustering-models"},"Clustering Models"),(0,n.kt)("p",null,"Clustering models help you make sense of chaos and is part of unsupervised learning. In a professional setting, clustering can be used to determine things like market segmentation, determining what age groups buy what items, for example. Another use would be anomaly detection, to detect fraud from a dataset of credit card transactions. In this lesson, you will ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners/#/5-Clustering/README"},"group Nigerian Music based on several factors including danceability, energy, speechiness and so much more"),". The algorithm used here is K-Means Clustering."),(0,n.kt)("h2",{id:"introduction-time-series-analysis"},"Introduction Time Series analysis."),(0,n.kt)("p",null,"Time Series Forecasting: Time series forecasting is a sort of 'crystal ball': based on past performance of a variable such as price, you can predict its future potential value. Using time series, you can predict trends, understand seasons, detect outliers and many more. Time series data is a list of ordered observations, unlike data that can be analyzed by linear regression. The most common one is ARIMA (Auto Regressive Integrated Moving Average), an acronym that stands for \"Autoregressive Integrated Moving Average\". You can read ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners/#/7-TimeSeries/README"},"more on time series here"),"."),(0,n.kt)("h2",{id:"introduction-to-natural-language-processing"},"Introduction to Natural Language Processing"),(0,n.kt)("p",null,"Natural Language Processing (NLP): Natural Language processing is the ability of machines to understand human-readable text. Using NLP, you can figure out sentiments, this is how people feel about a particular topic or subject and determine whether text is spam or not. In the Natural Language processing lessons, ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners/#/6-NLP/README"},"you will build a simple bot and do sentiment analysis on hotel reviews"),"."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"For a deep dive into the different models, building projects using the scikit-learn library, head over to the ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover"},"Machine Learning for Beginners curriculum"),". At the end of the lessons, you will have a portfolio of various machine learning projects. Additionally, you will understand how you can implement your"),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/ML-For-Beginners?WT.mc_id=aiml-89446-dglover"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-workshops"},"You can ask questions about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/ai-update/rss.xml"},(0,n.kt)("img",{src:a(1081).Z,width:"14",height:"14"})," Subscribe to the AiMonthly RSS XML feed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,n.kt)("img",{alt:"The image is the blog RSS feed available icon",src:a(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}d.isMDXComponent=!0},30925:(e,i,a)=>{a.d(i,{Z:()=>m});var t=a(67294),n=a(46616),r=a(87385),s=a(69641),o=a(78854),l=a(16573),u=a(1020),c=a(48137),h=a(66339),d=a(53597),g=a(37332);function m(e){let{page_url:i,image_url:a,title:m,hashtags:p,hashtag:f,description:k}=e;return t.createElement("div",null,t.createElement(n.Z,{url:i,title:k,hashtags:[p]},t.createElement(r.Z,{size:32,round:!0})),"\xa0",t.createElement(s.Z,{url:i,image:a},t.createElement(o.Z,{size:32,round:!0})),"\xa0",t.createElement(l.Z,{url:i,quote:m,hashtag:f},t.createElement(u.Z,{size:32,round:!0})),"\xa0",t.createElement(d.Z,{title:m,url:i},t.createElement(g.Z,{size:32,round:!0})),"\xa0",t.createElement(c.Z,{subject:m,body:k,url:i},t.createElement(h.Z,{size:32,round:!0})))}},57281:(e,i,a)=>{a.d(i,{Z:()=>t});const t=a.p+"assets/images/banner-day24-27454222fd76532024bf733dd62dadbe.png"},1081:(e,i,a)=>{a.d(i,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);