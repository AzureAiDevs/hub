"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6370],{6714:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=t(7462),r=(t(7294),t(4137)),l=t(925);const n={slug:"day14",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor apps and Azure OpenAI",authors:["Michael"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Blazor","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot","open-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day14.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 14 of #30DaysOfAzureAI. Learn how to build interactive web apps with Microsoft Blazor and Azure OpenAI. Create intelligent intuitive experiences. Take your web development to the next level!"},o=void 0,s={permalink:"/hub/2023-aia/day14",source:"@site/2023-aia/2023-04-15-openai-blazer/index.md",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor apps and Azure OpenAI",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 14 of #30DaysOfAzureAI. Learn how to build interactive web apps with Microsoft Blazor and Azure OpenAI. Create intelligent intuitive experiences. Take your web development to the next level!",date:"2023-04-15T00:00:00.000Z",formattedDate:"April 15, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"},{label:"copilot",permalink:"/hub/2023-aia/tags/copilot"},{label:"open-ai",permalink:"/hub/2023-aia/tags/open-ai"}],readingTime:2.28,hasTruncateMarker:!1,authors:[{name:"Michael Washington",title:"Founder of BlazorHelpWebsite.com and Microsoft MVP",url:"https://github.com/ADefWebserver",source_image_url:"https://github.com/ADefWebserver.png",tag:"@ADefWebserver",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Michael.png",key:"Michael"}],frontMatter:{slug:"day14",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor apps and Azure OpenAI",authors:["Michael"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Blazor","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot","open-ai"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day14.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 14 of #30DaysOfAzureAI. Learn how to build interactive web apps with Microsoft Blazor and Azure OpenAI. Create intelligent intuitive experiences. Take your web development to the next level!"},prevItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbGitHub Copilot's updated AI model",permalink:"/hub/2023-aia/day13"},nextItem:{title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: Azure AI for App Developers",permalink:"/hub/2023-aia/day15"}},p={authorsImageUrls:[void 0]},u=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 14 of #30DaysOfAzureAI",id:"\ufe0f-day-14-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Build and intelligent web apps with Blazor and Azure OpenAI",id:"-build-and-intelligent-web-apps-with-blazor-and-azure-openai",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],d={toc:u};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day14"}),(0,r.kt)("meta",{name:"twitter:title",content:"Blazor apps and Azure OpenAI"}),(0,r.kt)("meta",{name:"twitter:description",content:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 14 of #30DaysOfAzureAI. Learn how to build interactive web apps with Microsoft Blazor and Azure OpenAI. Create intelligent intuitive experiences. Take your web development to the next level!"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day14.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("link",{rel:"canonical",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,r.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,r.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0f ",(0,r.kt)("a",{parentName:"li",href:"https://www.meetup.com/pro/the-global-ai-community"},"Join the Global AI Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,r.kt)("h3",{id:"please-share"},"Please share"),(0,r.kt)(l.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day14",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day14.png",title:"Blazor apps and Azure OpenAI",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 14 of #30DaysOfAzureAI. Learn how to build interactive web apps with Microsoft Blazor and Azure OpenAI. Create intelligent intuitive experiences. Take your web development to the next level!",hashtags:"AzureOpenAI,Blazor",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,r.kt)("h2",{id:"\ufe0f-day-14-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 14 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI")),(0,r.kt)("p",null,"Yesterday we learned about some of the advances with GitHub Copilot. Today is all about building web assemblies with Microsoft Blazor and how you can call upon the Azure OpenAI service to create a rich, interactive, and intelligent web app. "),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Microsoft Blazor and Azure OpenAI integration."),(0,r.kt)("li",{parentName:"ul"},"Set up guide for Azure OpenAI service."),(0,r.kt)("li",{parentName:"ul"},"Code for wrapping the OpenAIClient class and creating a UI.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"},(0,r.kt)("img",{alt:"Image banner for day 14",src:t(7551).Z,width:"1920",height:"1080"}))),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor"},"Build beautiful, web apps with Blazor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/dotnet/getting-started-azure-openai-dotnet?WT.mc_id=aiml-89446-dglover"},"Announcing the Azure OpenAI .NET SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/prompt-engineering?WT.mc_id=aiml-89446-dglover"},"Introduction to prompt engineering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service"))),(0,r.kt)("h2",{id:"-build-and-intelligent-web-apps-with-blazor-and-azure-openai"},"\ud83d\ude8c Build and intelligent web apps with Blazor and Azure OpenAI"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"},"today's article")," about Blazor, a new web framework for building single-page applications (SPAs) using .NET and C#. It allows developers to create client-side web applications with the same language and tools used to build server-side applications. You'll also find an extensive library of code samples and demos. These code samples will provide you with practical examples of how to use Blazor and Azure OpenAI to build real-world applications."),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ai-app-developers"},"You can ask questions about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{alt:"The image is the blog RSS feed available icon",src:t(1081).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}c.isMDXComponent=!0},925:(e,a,t)=>{t.d(a,{Z:()=>m});var i=t(7294),r=t(6616),l=t(7385),n=t(9641),o=t(8854),s=t(6573),p=t(1020),u=t(8137),d=t(6339),c=t(3597),h=t(7332);function m(e){let{page_url:a,image_url:t,title:m,hashtags:A,hashtag:b,description:g}=e;return i.createElement("div",null,i.createElement(r.Z,{url:a,title:g,hashtags:[A]},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(n.Z,{url:a,image:t},i.createElement(o.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:a,quote:m,hashtag:b},i.createElement(p.Z,{size:32,round:!0})),"\xa0",i.createElement(c.Z,{title:m,url:a},i.createElement(h.Z,{size:32,round:!0})),"\xa0",i.createElement(u.Z,{subject:m,body:g,url:a},i.createElement(d.Z,{size:32,round:!0})))}},7551:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day14-91e887182741edc99223a0466de0142e.png"},1081:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);