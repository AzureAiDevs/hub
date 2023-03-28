"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7032],{3913:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(7462),n=(t(7294),t(4137)),r=t(925);const o={slug:"day16",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day16.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 16 of #30DaysOfAzureAI. Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/2023-aia/day16"},l=void 0,s={permalink:"/hub/2023-aia/day16",source:"@site/2023-aia/2023-04-17-inside-azureml-train-deploy/index.md",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 16 of #30DaysOfAzureAI. Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/2023-aia/day16",date:"2023-04-17T00:00:00.000Z",formattedDate:"April 17, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"},{label:"azure-ml",permalink:"/hub/2023-aia/tags/azure-ml"},{label:"data-scientist",permalink:"/hub/2023-aia/tags/data-scientist"}],readingTime:3.28,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl",url:"https://github.com/bstollnitz",tag:"@beastollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"day16",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day16.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 16 of #30DaysOfAzureAI. Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/2023-aia/day16"},prevItem:{title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor apps and Azure OpenAI",permalink:"/hub/2023-aia/day14"},nextItem:{title:"22. \ud83c\udfedMLOps Accelerator Explained",permalink:"/hub/2023-aia/day22"}},u={authorsImageUrls:[void 0]},d=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 16 of #30DaysOfAzureAI",id:"\ufe0f-day-16-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c How to train and deploy in Azure ML",id:"-how-to-train-and-deploy-in-azure-ml",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],h={toc:d};function m(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day16"}),(0,n.kt)("meta",{name:"twitter:title",content:"Scaling Model Dev with Azure ML"}),(0,n.kt)("meta",{name:"twitter:description",content:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 16 of #30DaysOfAzureAI. Azure ML: Train and Deploy ML Models at Scale"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day16.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/2023-aia/day16"}),(0,n.kt)("meta",{property:"og:title",content:"Scaling Model Dev with Azure ML"}),(0,n.kt)("meta",{property:"og:description",content:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 16 of #30DaysOfAzureAI. Azure ML: Train and Deploy ML Models at Scale"}),(0,n.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day16.png"}),(0,n.kt)("meta",{property:"og:type",content:"article"}),(0,n.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,n.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-command"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://bea.stollnitz.com/blog/aml-command"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ml-developers"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(r.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day16",image_url:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day16.png",title:"Scaling Model Dev with Azure ML",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDay 16 of #30DaysOfAzureAI. Today we're diving into Azure ML and learning how to train and deploy ML models at scale. If you're a DS, ML, or MLOps engineer, this one's for you!",hashtags:"AI,AzureML",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-16-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 16 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Azure ML: Train and Deploy ML Models at Scale")),(0,n.kt)("p",null,'Last week was for Azure AI App developers. This week, we switch gears and focus on Azure Machine Learning services for people building, deploying, and "productionalizing" ML models. If you\'re a Data Scientist, or an ML or MLOps engineer, then this week is for you. '),(0,n.kt)("p",null,"Today, learn about training and deploying machine learning models using Azure ML."),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to train and deploy a machine learning model using Azure ML"),(0,n.kt)("li",{parentName:"ul"},"The three most common methods of creating resources: Azure ML CLI, Python SDK, and Studio UI")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-command"},(0,n.kt)("img",{alt:"Image banner for day 16",src:t(2345).Z,width:"1920",height:"1080"}))),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,n.kt)("h2",{id:"-how-to-train-and-deploy-in-azure-ml"},"\ud83d\ude8c How to train and deploy in Azure ML"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-command"},"today's article")," is perfect if you have a basic understanding of how to train a machine learning model, but you've never used Azure ML before, then you're in the right place. ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-command"},"Today's article")," is a hands-on introduction to the most fundamental operations of Azure ML: training and deploying a machine learning model in the cloud. It discusses which resources you need to create, and the three main methods of creating them: the Azure ML CLI, the Python SDK, and the Studio UI."),(0,n.kt)("p",null,"The goal for today is for you to have a deep technical understanding of the basics of Azure ML. The article demonstrates how to train and deploy a simple model, but you'll be able to apply the same concepts to your own ML projects, regardless of their complexity.\xdf"),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-command"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ml-developers"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,n.kt)("img",{alt:"The image is the RSS feed available icon",src:t(1081).Z,width:"14",height:"14"})," Click to subscribe")))}m.isMDXComponent=!0},925:(e,a,t)=>{t.d(a,{Z:()=>p});var i=t(7294),n=t(6616),r=t(7385),o=t(9641),l=t(8854),s=t(6573),u=t(1020),d=t(8137),h=t(6339),m=t(3597),c=t(7332);function p(e){let{page_url:a,image_url:t,title:p,hashtags:g,hashtag:A,description:y}=e;return i.createElement("div",null,i.createElement(n.Z,{url:a,title:y,hashtags:[g]},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:a,image:t},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:a,quote:p,hashtag:A},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(m.Z,{title:p,url:a},i.createElement(c.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{subject:p,body:y,url:a},i.createElement(h.Z,{size:32,round:!0})))}},2345:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day16-f9983a0bbc88edd471144466ceac72b5.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);