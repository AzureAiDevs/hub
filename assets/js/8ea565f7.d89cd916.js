"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6093],{1052:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=t(7462),r=(t(7294),t(4137)),o=t(925);const n={slug:"day2",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",authors:["Meer"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Machine-Learning","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day2.png",description:"\ud83c\udfc1Welcome to day 2 of #30DaysOfAzureAI. Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/2023-aia/day2"},s=void 0,l={permalink:"/hub/2023-aia/day2",source:"@site/2023-aia/2023-04-03-azure-openai-services/index.md",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",description:"\ud83c\udfc1Welcome to day 2 of #30DaysOfAzureAI. Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/2023-aia/day2",date:"2023-04-03T00:00:00.000Z",formattedDate:"April 3, 2023",tags:[{label:"azure-ai",permalink:"/hub/2023-aia/tags/azure-ai"},{label:"azure-open-ai",permalink:"/hub/2023-aia/tags/azure-open-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"}],readingTime:3.11,hasTruncateMarker:!1,authors:[{name:"Meer Alam",title:"Principal Customer Engineer",url:"https://github.com/msdpalam",tag:"@",imageURL:"https://github.com/msdpalam.png",key:"Meer"}],frontMatter:{slug:"day2",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",authors:["Meer"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Machine-Learning","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day2.png",description:"\ud83c\udfc1Welcome to day 2 of #30DaysOfAzureAI. Unleashing the power of AI with Azure OpenAI: A simple guide to get started https://azureaidevs.github.io/hub/2023-aia/day2"},prevItem:{title:"1. \ud83d\ude80Kick Starting AI April Keynote",permalink:"/hub/2023-aia/day1"},nextItem:{title:"4. \ud83c\udfc1Build a receipts app with Copilot",permalink:"/hub/2023-aia/day4"}},u={authorsImageUrls:[void 0]},p=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 2 of #30DaysOfAzureAI",id:"\ufe0f-day-2-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Intro to Azure OpenAI Service",id:"-intro-to-azure-openai-service",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],h={toc:p};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day2"}),(0,r.kt)("meta",{name:"twitter:title",content:"Unleash the power of Azure OpenAI"}),(0,r.kt)("meta",{name:"twitter:description",content:"\ud83c\udfc1Welcome to day 2 of #30DaysOfAzureAI. Unleashing the power of AI with Azure OpenAI: A simple guide to get started"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day2.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/2023-aia/day2"}),(0,r.kt)("meta",{property:"og:title",content:"Unleash the power of Azure OpenAI"}),(0,r.kt)("meta",{property:"og:description",content:"\ud83c\udfc1Welcome to day 2 of #30DaysOfAzureAI. Unleashing the power of AI with Azure OpenAI: A simple guide to get started"}),(0,r.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day2.png"}),(0,r.kt)("meta",{property:"og:type",content:"article"}),(0,r.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,r.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706?WT.mc_id=aiml-89446-dglover"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706?WT.mc_id=aiml-89446-dglover"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-developers"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h3",{id:"please-share"},"Please share"),(0,r.kt)(o.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day2",image_url:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day2.png",title:"Unleash the power of Azure OpenAI",description:"\ud83c\udfc1Day 2 of #30DaysOfAzureAI. Unleashing the power of AI with Azure OpenAI! Data Scientists, ML, MLOps Engineers, or App Developers, this for you. We'll cover large-scale generative AI models, code generation, and DALL-E 2",hashtags:"AzureAiDevs,AI,AzureOpenAI",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,r.kt)("h2",{id:"\ufe0f-day-2-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 2 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unleashing the power of AI with Azure OpenAI: A simple guide to get started")),(0,r.kt)("p",null,"Welcome to the first day of the Azure AI fundamentals week. This week is for everyone; you might be an ai app Developer, a Data Scientist, or an ML or MLOps Engineer. "),(0,r.kt)("p",null,"The talk of the town is ChatGPT and generative AI, so what better place to start than an introduction to the Azure OpenAI Service."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure OpenAI Service."),(0,r.kt)("li",{parentName:"ul"},"Using large-scale generative AI models."),(0,r.kt)("li",{parentName:"ul"},"Code generation and reasoning over data.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706?WT.mc_id=aiml-89446-dglover"},(0,r.kt)("img",{alt:"Image banner for day 2",src:t(5796).Z,width:"834",height:"350"}))),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/making-generative-ai-training-simple?WT.mc_id=aiml-89446-dglover"},"Case Study: Making generative AI training simple and cost-efficient with PeriFlow and Azure"))),(0,r.kt)("h2",{id:"-intro-to-azure-openai-service"},"\ud83d\ude8c Intro to Azure OpenAI Service"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706?WT.mc_id=aiml-89446-dglover"},"Today's article")," eases us into the world of the Azure OpenAI Service. The large-scale generative AI models developed by OpenAI can be used in areas such as code generation and reasoning over data, while the DALL-E 2 model can create images from a written description. The service also offers the Codex model, which is capable of generating code from natural language. "),(0,r.kt)("p",null,"The service is available in the Azure Marketplace and can be deployed to Microsoft's Azure cloud with features such as security, compliance and regional availability. "),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706?WT.mc_id=aiml-89446-dglover"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-developers"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{alt:"The image is the RSS feed available icon",src:t(1081).Z,width:"14",height:"14"})," Click to subscribe")))}d.isMDXComponent=!0},925:(e,a,t)=>{t.d(a,{Z:()=>m});var i=t(7294),r=t(6616),o=t(7385),n=t(9641),s=t(8854),l=t(6573),u=t(1020),p=t(8137),h=t(6339),d=t(3597),c=t(7332);function m(e){let{page_url:a,image_url:t,title:m,hashtags:g,hashtag:A,description:f}=e;return i.createElement("div",null,i.createElement(r.Z,{url:a,title:f,hashtags:[g]},i.createElement(o.Z,{size:32,round:!0})),"\xa0",i.createElement(n.Z,{url:a,image:t},i.createElement(s.Z,{size:32,round:!0})),"\xa0",i.createElement(l.Z,{url:a,quote:m,hashtag:A},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{title:m,url:a},i.createElement(c.Z,{size:32,round:!0})),"\xa0",i.createElement(p.Z,{subject:m,body:f,url:a},i.createElement(h.Z,{size:32,round:!0})))}},5796:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day2-27b67ccd3d1b90f198b35395c8a3ec2a.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);