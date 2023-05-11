"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2293],{35080:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(87462),r=(t(67294),t(3905)),n=t(30925);const l={slug:"day8",title:"8. \ud83c\udfc1Recap: Azure AI Fundamentals Week\u2728",authors:["Dave","Meer","Valentina","Ruth","Bea","Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Azure-AI","Machine-Learning","Cognitive-Services","vscode","rai","Accessibility-Human-Connection"],tags:["azure-ai","azure-ml","azure-open-ai","azure-cognitive-services","responsible-ai","azure-ai-fundamentals","30-days-of-azure-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day8.png",description:"\ud83c\udfc1Welcome to day 8 of #30DaysOfAzureAI. Today we recap week 1 of Azure AI Fundamentals. We covered Generative AI with the Azure OpenAI Service, an introduction to Azure ML, plus Responsible AI, and AI for Accessibility."},s=void 0,o={permalink:"/hub/2023-aia/day8",source:"@site/2023-aia/2023-04-09-recap-fundamentals/index.md",title:"8. \ud83c\udfc1Recap: Azure AI Fundamentals Week\u2728",description:"\ud83c\udfc1Welcome to day 8 of #30DaysOfAzureAI. Today we recap week 1 of Azure AI Fundamentals. We covered Generative AI with the Azure OpenAI Service, an introduction to Azure ML, plus Responsible AI, and AI for Accessibility.",date:"2023-04-09T00:00:00.000Z",formattedDate:"April 9, 2023",tags:[{label:"azure-ai",permalink:"/hub/2023-aia/tags/azure-ai"},{label:"azure-ml",permalink:"/hub/2023-aia/tags/azure-ml"},{label:"azure-open-ai",permalink:"/hub/2023-aia/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"},{label:"responsible-ai",permalink:"/hub/2023-aia/tags/responsible-ai"},{label:"azure-ai-fundamentals",permalink:"/hub/2023-aia/tags/azure-ai-fundamentals"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"}],readingTime:3.48,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate",url:"https://github.com/gloveboxes",source_image_url:"https://github.com/gloveboxes.png",tag:"@dglover",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/authors/Dave.png",key:"Dave"},{name:"Meer Alam",title:"Principal Customer Engineer",url:"https://github.com/msdpalam",source_image_url:"https://github.com/msdpalam.png",tag:"@AlamMeer",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Meer.png",key:"Meer"},{name:"Valentina Alto",title:"Data&AI Azure Specialist at Microsoft",url:"https://github.com/Valentina-Alto",source_image_url:"https://github.com/Valentina-Alto.png",tag:"@altovalentina",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Valentina.png",key:"Valentina"},{name:"Ruth Yakubu",title:"Principal Cloud Advocate",url:"https://github.com/ruyakubu",source_image_url:"https://github.com/ruyakubu.png",tag:"@ruthieyakubu",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Ruth.png",key:"Ruth"},{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AI/ML",url:"https://github.com/bstollnitz",source_image_url:"https://github.com/bstollnitz.png",tag:"@beastollnitz",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Bea.png",key:"Bea"},{name:"Henk Boelman",title:"Senior Cloud Advocate",url:"https://github.com/hnky",source_image_url:"https://github.com/hnky.png",tag:"@hboelman",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Henk.png",key:"Henk"}],frontMatter:{slug:"day8",title:"8. \ud83c\udfc1Recap: Azure AI Fundamentals Week\u2728",authors:["Dave","Meer","Valentina","Ruth","Bea","Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Azure-AI","Machine-Learning","Cognitive-Services","vscode","rai","Accessibility-Human-Connection"],tags:["azure-ai","azure-ml","azure-open-ai","azure-cognitive-services","responsible-ai","azure-ai-fundamentals","30-days-of-azure-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day8.png",description:"\ud83c\udfc1Welcome to day 8 of #30DaysOfAzureAI. Today we recap week 1 of Azure AI Fundamentals. We covered Generative AI with the Azure OpenAI Service, an introduction to Azure ML, plus Responsible AI, and AI for Accessibility."},prevItem:{title:"7. \ud83c\udfc1Improve accessibility with Azure AI",permalink:"/hub/2023-aia/day7"},nextItem:{title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps with Azure AI SDKs",permalink:"/hub/2023-aia/day9"}},u={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0]},p=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 8 of #30DaysOfAzureAI",id:"\ufe0f-day-8-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"Look Back: Week 1 Recap",id:"look-back-week-1-recap",level:2},{value:"Week 1: Fundamentals",id:"week-1-fundamentals",level:2},{value:"Azure AI Skills Challenge",id:"azure-ai-skills-challenge",level:2},{value:"Microsoft for Startups",id:"microsoft-for-startups",level:2},{value:"Look Ahead: It&#39;s Intelligent App Developers Week!",id:"look-ahead-its-intelligent-app-developers-week",level:2},{value:"Week 2: Azure AI for App Developers",id:"week-2-azure-ai-for-app-developers",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],h={toc:p};function m(e){let{components:a,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day8"}),(0,r.kt)("meta",{name:"twitter:title",content:"Recap: Azure AI Fundamentals Week\u2728"}),(0,r.kt)("meta",{name:"twitter:description",content:"\ud83c\udfc1Welcome to day 8 of #30DaysOfAzureAI. Today we recap week 1 of Azure AI Fundamentals. We covered Generative AI with the Azure OpenAI Service, an introduction to Azure ML, plus Responsible AI, and AI for Accessibility."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day8.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,r.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,r.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,r.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,r.kt)("h3",{id:"please-share"},"Please share"),(0,r.kt)(n.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day8",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day8.png",title:"Recap: Azure AI Fundamentals Week\u2728",description:"\ud83c\udfc1Welcome to day 8 of #30DaysOfAzureAI. Today we recap week 1 of Azure AI Fundamentals. We covered Generative AI with the Azure OpenAI Service, an introduction to Azure ML, plus Responsible AI, and AI for Accessibility.",hashtags:"",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,r.kt)("h2",{id:"\ufe0f-day-8-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 8 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Week 1 Recap - Fundamentals")),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Look Back: Recap Fundamentals Week"),(0,r.kt)("li",{parentName:"ul"},"Azure AI Skills Challenge"),(0,r.kt)("li",{parentName:"ul"},"Microsoft for Startups"),(0,r.kt)("li",{parentName:"ul"},"Look Ahead: It's Intelligent App Developers Week!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 8",src:t(25885).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"look-back-week-1-recap"},"Look Back: Week 1 Recap"),(0,r.kt)("p",null,"Week one is done \ud83c\udf89 and thank you \u2764\ufe0f for joining us on this journey. We hope you've enjoyed the first week of #30DaysOfAzureAI and have learned a lot about Azure AI."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image outlines what was covered the first week",src:t(30219).Z,width:"1920",height:"806"})),(0,r.kt)("p",null,"Here are the highlights for week 1. If you're just joining us, welcome!! It's not too late to get started learning and skilling up."),(0,r.kt)("h2",{id:"week-1-fundamentals"},"Week 1: Fundamentals"),(0,r.kt)("admonition",{title:"Azure AI Everyone",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day2"},"April 03 \u2013 \ud83c\udfc1 Unleash the power of Azure OpenAI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day3"},"April 04 \u2013 \ud83c\udfc1 Explore the Azure OpenAI Playground")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day4"},"April 05 \u2013 \ud83c\udfc1 Build an AI receipts app with GitHub Copilot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day5"},"April 06 \u2013 \ud83c\udfc1 Learn key Azure ML Concepts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day6"},"April 07 \u2013 \ud83c\udfc1 The Mission of Responsible AI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day7"},"April 08 \u2013 \ud83c\udfc1 Improve accessibility with Azure AI")))),(0,r.kt)("h2",{id:"azure-ai-skills-challenge"},"Azure AI Skills Challenge"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"skills challenge")," started March 29th and is a self-guided learning experience to help you build your skills in Azure AI. Join now, and see how you rank against other participants on the leaderboard."),(0,r.kt)("admonition",{title:"AZURE ACCOUNT",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To complete the Azure AI Skills challenge, you\u2019ll need access to Azure. For students, sign up for an ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/ai-april-azure-student-acct"},"Azure for Students")," free account, no credit card is required. Otherwise, create an ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/ai-april-azure-acct"},"Azure")," free account.")),(0,r.kt)("h2",{id:"microsoft-for-startups"},"Microsoft for Startups"),(0,r.kt)("p",null,"If you are a startup, then you'll want to learn how other startups are using Azure AI to build their businesses. Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/ai-april-launch-with-ai"},"Launch with AI")," case studies website to learn more."),(0,r.kt)("h2",{id:"look-ahead-its-intelligent-app-developers-week"},"Look Ahead: It's Intelligent App Developers Week!"),(0,r.kt)("p",null,"Week two is for app developers building intelligent apps calling Azure AI Services or incorporating AI models directly into apps. Be sure to review the ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/30-days-ai-roadmap#week-2-azure-ai-for-app-developers"},"Week Two Roadmap"),", don't forget to bookmark the #30DaysOfAzureAI site, and come back tomorrow. "),(0,r.kt)("h2",{id:"week-2-azure-ai-for-app-developers"},"Week 2: Azure AI for App Developers"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Welcome to the Week 2 of your learning journey into Azure AI Development.")),(0,r.kt)("admonition",{title:"Azure AI for App Developers",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"Posts will be available on the day of publishing.")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day9"},"April 10 \u2013 \ud83d\udc69\u200d\ud83d\udcbb Build intelligent apps with Azure AI SDKs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day10"},"April 11 \u2013 \ud83d\udc69\u200d\ud83d\udcbb How to build your own ChatGPT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day11"},"April 12 \u2013 \ud83d\udc69\u200d\ud83d\udcbb Cross-Platform AI with ONNX and .NET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day12"},"April 13 \u2013 \ud83d\udc69\u200d\ud83d\udcbb Run BERT NLP models locally in Excel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day13"},"April 14 \u2013 \ud83d\udc69\u200d\ud83d\udcbb GitHub Copilot's updated AI model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/2023-aia/day14"},"April 15 \u2013 \ud83d\udc69\u200d\ud83d\udcbb Blazor apps and Azure OpenAI")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Week 2",src:t(21225).Z,width:"1920",height:"806"})),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-developers"},"You can ask questions about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{alt:"The image is the blog RSS feed available icon",src:t(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}m.isMDXComponent=!0},30925:(e,a,t)=>{t.d(a,{Z:()=>c});var i=t(67294),r=t(46616),n=t(87385),l=t(69641),s=t(78854),o=t(16573),u=t(1020),p=t(48137),h=t(66339),m=t(53597),d=t(37332);function c(e){let{page_url:a,image_url:t,title:c,hashtags:A,hashtag:k,description:g}=e;return i.createElement("div",null,i.createElement(r.Z,{url:a,title:g,hashtags:[A]},i.createElement(n.Z,{size:32,round:!0})),"\xa0",i.createElement(l.Z,{url:a,image:t},i.createElement(s.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:a,quote:c,hashtag:k},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(m.Z,{title:c,url:a},i.createElement(d.Z,{size:32,round:!0})),"\xa0",i.createElement(p.Z,{subject:c,body:g,url:a},i.createElement(h.Z,{size:32,round:!0})))}},30219:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/30-week1-f7f3862b9904ac0031f639b207524522.png"},21225:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/30-week2-ad5a39869d866ee401a31dd55c275c8d.png"},25885:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day8-c5c3e9af18a06ae293ffdba48b8926d2.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);