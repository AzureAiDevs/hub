"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4312],{5829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=a(7462),r=(a(7294),a(4137)),o=a(925);const l={slug:"day4",title:"4. \ud83c\udfc1Build a receipts app with GitHub Copilot",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","CoPilot","vscode","Azure-AI"],tags:["azure-ai","azure-cognitive-services","30-days-of-azure-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day4.png",description:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Today, we're diving into GitHub Copilot and Azure #FormRecognizer to build a receipts app. Learn how Copilot can increase productivity."},n=void 0,s={permalink:"/hub/2023-aia/day4",source:"@site/2023-aia/2023-04-05-copilot-form-recognizer/index.md",title:"4. \ud83c\udfc1Build a receipts app with GitHub Copilot",description:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Today, we're diving into GitHub Copilot and Azure #FormRecognizer to build a receipts app. Learn how Copilot can increase productivity.",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"azure-ai",permalink:"/hub/2023-aia/tags/azure-ai"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"}],readingTime:2.26,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate",url:"https://github.com/ruyakubu",source_image_url:"https://github.com/ruyakubu.png",tag:"@ruthieyakubu",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Ruth.png",key:"Ruth"}],frontMatter:{slug:"day4",title:"4. \ud83c\udfc1Build a receipts app with GitHub Copilot",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Form-Recognizers","Azure-Applied-AI-Services","CoPilot","vscode","Azure-AI"],tags:["azure-ai","azure-cognitive-services","30-days-of-azure-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day4.png",description:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Today, we're diving into GitHub Copilot and Azure #FormRecognizer to build a receipts app. Learn how Copilot can increase productivity."},prevItem:{title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",permalink:"/hub/2023-aia/day3"},nextItem:{title:"5. \ud83c\udfc1Learn key Azure ML Concepts",permalink:"/hub/2023-aia/day5"}},u={authorsImageUrls:[void 0]},p=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 4 of #30DaysOfAzureAI",id:"\ufe0f-day-4-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c How Copilot helped a developer write a Form Recognizer app",id:"-how-copilot-helped-a-developer-write-a-form-recognizer-app",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day4"}),(0,r.kt)("meta",{name:"twitter:title",content:"Build a receipts app with GitHub Copilot"}),(0,r.kt)("meta",{name:"twitter:description",content:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Today, we're diving into GitHub Copilot and Azure #FormRecognizer to build a receipts app. Learn how Copilot can increase productivity."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day4.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,r.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,r.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\u2764\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-mvp-program"},"Learn about the Microsoft MVP Program")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,r.kt)("h3",{id:"please-share"},"Please share"),(0,r.kt)(o.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day4",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day4.png",title:"Build a receipts app with GitHub Copilot",description:"\ud83c\udfc1Welcome to day 4 of #30DaysOfAzureAI. Today, we're diving into GitHub Copilot and Azure #FormRecognizer to build a receipts app. Learn how Copilot can increase productivity.",hashtags:"IntelligentApps",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,r.kt)("h2",{id:"\ufe0f-day-4-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 4 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Learn how to use Copilot to build an intelligent receipts app powered by Azure Form Recognizer")),(0,r.kt)("p",null,"Yesterday we talked about using Azure OpenAI Service playground to explore conversational AI. Today we'll explore how you can use GitHub Copilot as your programming buddy to build an intelligent Receipt processing App."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Why use GitHub Copilot."),(0,r.kt)("li",{parentName:"ul"},"Build a receipt app with GitHub Copilot and Azure Form Recognizer"),(0,r.kt)("li",{parentName:"ul"},"Copilot increase efficiency and productivity for developers.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"},(0,r.kt)("img",{alt:"Image banner for day 4",src:a(1832).Z,width:"1920",height:"1080"}))),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/applied-ai-services/form-recognizer/overview?view=form-recog-3.0.0&WT.mc_id=aiml-89446-dglover"},"What is Azure Form Recognizer?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-form-recognizer?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Form Recognizer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer?WT.mc_id=aiml-89446-dglover"},"Introducing GitHub Copilot: your AI pair programmer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/qard-idea-to-mvp?WT.mc_id=aiml-89446-dglover"},"Case Study: How Qard went from idea to MVP"))),(0,r.kt)("h2",{id:"-how-copilot-helped-a-developer-write-a-form-recognizer-app"},"\ud83d\ude8c How Copilot helped a developer write a Form Recognizer app"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"},"today's article")," to learn how you can use Copilot to help build an app that recognizers printed receipts using the Azure Form Recognizer Cognitive Service. It is a great example of how Copilot can help you to generate code for your AI applications."),(0,r.kt)("p",null,"Be sure to check it out here: ",(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813"},"How Copilot helps developers generate code for a Form Recognizer application")),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-cognitive-services-blog/how-copilot-helps-developers-generate-code-for-a-form-recognizer/ba-p/3753813?WT.mc_id=aiml-89446-dglover"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-developers"},"You can ask questions about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{alt:"The image is the blog RSS feed available icon",src:a(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}d.isMDXComponent=!0},925:(e,t,a)=>{a.d(t,{Z:()=>h});var i=a(7294),r=a(6616),o=a(7385),l=a(9641),n=a(8854),s=a(6573),u=a(1020),p=a(8137),c=a(6339),d=a(3597),m=a(7332);function h(e){let{page_url:t,image_url:a,title:h,hashtags:g,hashtag:b,description:v}=e;return i.createElement("div",null,i.createElement(r.Z,{url:t,title:v,hashtags:[g]},i.createElement(o.Z,{size:32,round:!0})),"\xa0",i.createElement(l.Z,{url:t,image:a},i.createElement(n.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:t,quote:h,hashtag:b},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{title:h,url:t},i.createElement(m.Z,{size:32,round:!0})),"\xa0",i.createElement(p.Z,{subject:h,body:v,url:t},i.createElement(c.Z,{size:32,round:!0})))}},1832:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day4-5eb679a22bf891582d1e78897cbed499.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);