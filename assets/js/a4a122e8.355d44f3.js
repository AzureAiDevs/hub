"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8940],{5599:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(87462),n=(t(67294),t(3905)),r=t(30925);const s={slug:"day18",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day18.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 18 of #30DaysOfAzureAI. Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/2023-aia/day18"},l=void 0,o={permalink:"/hub/2023-aia/day18",source:"@site/2023-aia/2023-04-19-azureml-endpoints/index.md",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 18 of #30DaysOfAzureAI. Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/2023-aia/day18",date:"2023-04-19T00:00:00.000Z",formattedDate:"April 19, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"},{label:"azure-ml",permalink:"/hub/2023-aia/tags/azure-ml"},{label:"data-scientist",permalink:"/hub/2023-aia/tags/data-scientist"}],readingTime:2.745,hasTruncateMarker:!1,authors:[{name:"Vlad Iliescu",title:"Head of AI at Strongbytes and Microsoft MVP",url:"https://github.com/vladiliescu",tag:"@vladiliescu",imageURL:"https://github.com/vladiliescu.png",key:"Vlad"}],frontMatter:{slug:"day18",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day18.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 18 of #30DaysOfAzureAI. Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/2023-aia/day18"},prevItem:{title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",permalink:"/hub/2023-aia/day17"},nextItem:{title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",permalink:"/hub/2023-aia/day19"}},u={authorsImageUrls:[void 0]},d=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 18 of #30DaysOfAzureAI",id:"\ufe0f-day-18-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Get started with Azure ML&#39;s managed online endpoints",id:"-get-started-with-azure-mls-managed-online-endpoints",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],h={toc:d};function m(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day18"}),(0,n.kt)("meta",{name:"twitter:title",content:"Azure ML Managed Online Endpoints"}),(0,n.kt)("meta",{name:"twitter:description",content:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 18 of #30DaysOfAzureAI. Azure ML Managed Online Endpoints - A Quickstart"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day18.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/2023-aia/day18"}),(0,n.kt)("meta",{property:"og:title",content:"Welcome to day 18 \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints"}),(0,n.kt)("meta",{property:"og:description",content:"Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/hub/2023-aia/day18 AzureAiDevs,AI AzureML"}),(0,n.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day18.png"}),(0,n.kt)("meta",{property:"og:type",content:"article"}),(0,n.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,n.kt)("link",{rel:"canonical",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/18-azure-ml-managed-online-endpoints"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(r.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day18",image_url:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day18.png",title:"Azure ML Managed Online Endpoints",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDay 18 of #30DaysOfAzureAI. Check out Azure Machine Learning's managed online endpoints feature! With built-in security, blue/green deployments, and auto-scaling, it's the perfect way to deploy and scale your models. \ud83d\ude80",hashtags:"AzureAiDevs,AI,AzureML",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-18-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 18 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Azure ML Managed Online Endpoints - A Quickstart")),(0,n.kt)("p",null,"Yesterday we learned how to streamline ML Development with Azure ML. Today, we'll learn how to deploy ML models using Azure ML managed online endpoints."),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"What are Azure ML managed online endpoints."),(0,n.kt)("li",{parentName:"ol"},"The three main components of an online endpoint."),(0,n.kt)("li",{parentName:"ol"},"How to deploy one or more models under the same endpoint.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 18",src:t(64263).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,n.kt)("h2",{id:"-get-started-with-azure-mls-managed-online-endpoints"},"\ud83d\ude8c Get started with Azure ML's managed online endpoints"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"Today's article")," discusses the benefits of using Azure Machine Learning's managed online endpoints and compares them to Azure Container Instances. The author outlines three main reasons why they prefer managed online endpoints: built-in security, native blue/green deployments, and auto-scaling with Azure Monitor."),(0,n.kt)("p",null,"Step-by-step instructions are provided for for deploying an online endpoint that translates API inputs to something a machine learning model can handle, invokes the model, and returns formatted results."),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/18-azure-ml-managed-online-endpoints"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,n.kt)("img",{src:t(1081).Z,width:"14",height:"14"})," Click to subscribe")))}m.isMDXComponent=!0},30925:(e,a,t)=>{t.d(a,{Z:()=>c});var i=t(67294),n=t(46616),r=t(87385),s=t(69641),l=t(78854),o=t(16573),u=t(1020),d=t(48137),h=t(66339),m=t(53597),p=t(37332);function c(e){let{page_url:a,image_url:t,title:c,hashtags:g,hashtag:A,description:k}=e;return i.createElement("div",null,i.createElement(n.Z,{url:a,title:k,hashtags:[g]},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:a,image:t},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:a,quote:c,hashtag:A},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(m.Z,{title:c,url:a},i.createElement(p.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{subject:c,body:k,url:a},i.createElement(h.Z,{size:32,round:!0})))}},64263:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day18-833aa8307e96a53f610777f726e18e23.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);