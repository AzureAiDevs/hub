"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={slug:"2023-day2",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Machine-Learning","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day2.png",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started"},o=void 0,l={permalink:"/hub/blog/2023-day2",source:"@site/blog/2023-aia/2023-04-03-azure-openai-services/index.md",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started",date:"2023-04-03T00:00:00.000Z",formattedDate:"April 3, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"azure-open-ai",permalink:"/hub/blog/tags/azure-open-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"}],readingTime:3.39,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate @dglover",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day2",title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Machine-Learning","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day2.png",description:"Unleashing the power of AI with Azure OpenAI: A simple guide to get started"},prevItem:{title:"1. \ud83c\udfc1Kick Starting AI April!",permalink:"/hub/blog/2023-day1"},nextItem:{title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",permalink:"/hub/blog/2023-day3"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>2</em> of #30DaysOfAzureAI",id:"day-2-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Azure OpenAI Service Learning Module",id:"azure-openai-service-learning-module",level:2},{value:"What is Azure OpenAI Service?",id:"what-is-azure-openai-service",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/2-unleash-the-power-of-azure-openai"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-2-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"2")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unleashing the power of AI with Azure OpenAI: A simple guide to get started")),(0,r.kt)("p",null,"Microsoft and OpenAI have partnered to bring OpenAI's advanced natural language processing tools, including GPT-3, to Microsoft's Azure cloud. The Azure OpenAI Service, now in general availability, offers REST API access, security, compliance, and regional availability. The goal is democratize AI and use it to address global challenges. Start by learning about OpenAI's language models and familiarizing with key API concepts."),(0,r.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,r.kt)("p",null,"The main points of Azure OpenAI Service are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access to language models for NLP and deep learning."),(0,r.kt)("li",{parentName:"ol"},"Enterprise security and regional availability for business use."),(0,r.kt)("li",{parentName:"ol"},"Understanding the language models, naming, and API for maximum benefit. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 2",src:a(16794).Z,width:"834",height:"350"})),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/making-generative-ai-training-simple?WT.mc_id=aiml-89446-dglover"},"Case Study: Making generative AI training simple and cost-efficient with PeriFlow and Azure"))),(0,r.kt)("h2",{id:"azure-openai-service-learning-module"},"Azure OpenAI Service Learning Module"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(95277).Z,width:"466",height:"324"})),(0,r.kt)("p",null,"Get to know the connection between artificial intelligence (AI), Responsible AI, and text, code, and image generation. Understand how you can use Azure OpenAI to build solutions against AI models within Azure."),(0,r.kt)("p",null,"You'll learn how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Describe Azure OpenAI workloads and access the Azure OpenAI Service"),(0,r.kt)("li",{parentName:"ul"},"Understand generative AI models"),(0,r.kt)("li",{parentName:"ul"},"Understand Azure OpenAI's language, code, and image capabilities"),(0,r.kt)("li",{parentName:"ul"},"Understand Azure OpenAI's responsible AI practices and limited access policies")),(0,r.kt)("p",null,"Be sure to check out the ",(0,r.kt)("a",{parentName:"p",href:"ttps://learn.microsoft.com/en-us/training/modules/explore-azure-openai"},"Introduction to Azure OpenAI Service")," Learn Module to get started."),(0,r.kt)("h2",{id:"what-is-azure-openai-service"},"What is Azure OpenAI Service?"),(0,r.kt)("p",null,"Microsoft and OpenAI have released Azure OpenAI Service, which brings OpenAI's advanced natural language processing tools, including Generative Pre-trained Transformer 3 (GPT-3), to Microsoft's Azure cloud. Azure OpenAI Service is now in general availability and offers REST API access to OpenAI's models, with features such as security, compliance and regional availability. The large-scale generative AI models developed by OpenAI can be used in areas such as code generation and reasoning over data, while the DALL-E 2 model can create images from a written description. The service also offers the Codex model, which is capable of generating code from natural language."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(23567).Z,width:"399",height:"145"})),(0,r.kt)("p",null,"The goal is to democratise artificial intelligence, as well as using it to help solve global challenges such as climate change, healthcare and education. Satya Nadella, CEO of Microsoft, said: \"By bringing together OpenAI's breakthrough technology with new Azure AI supercomputing technologies, our ambition is to democratise AI, while always keeping AI safety front and centre, so everyone can benefit.\" To get started with the Azure OpenAI Service, users are advised to learn about OpenAI's language models, which include GPT-3, Code and DALL-E 2, and understand key API concepts such as prompts, completions, tokens and models."),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"To learn more, check out this ",(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/fasttrack-for-azure/unleashing-the-power-of-ai-with-azure-openai-a-simple-guide-to/ba-p/3725706"},"article"),"."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/2-unleash-the-power-of-azure-openai"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},23567:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-e75e0be890e03f8cd44aeb5451099f87.png"},95277:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/intro-to-openai-65ee48e55db0ec54ee692e3885d5c224.png"},16794:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-day2-20194589e99c0c5fc9b0acbd4b31dacc.png"}}]);