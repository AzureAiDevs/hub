"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9290],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(7462),i=(a(7294),a(4137));const r={slug:"day10",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",authors:["Heidi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Search","Azure-AI"],tags:["ai-april","azure-open-ai","azure-cognitive-services","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day10.png",description:"Build your own ChatGPT with Azure Cognitive Search + Azure OpenAI Service https://azureaidevs.github.io/hub/2023-aia/day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},o=void 0,s={permalink:"/hub/2023-aia/day10",source:"@site/2023-aia/2023-04-11-build-chatgpt/index.md",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",description:"Build your own ChatGPT with Azure Cognitive Search + Azure OpenAI Service https://azureaidevs.github.io/hub/2023-aia/day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-11T00:00:00.000Z",formattedDate:"April 11, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"azure-open-ai",permalink:"/hub/2023-aia/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"}],readingTime:5.385,hasTruncateMarker:!1,authors:[{name:"Heidi Steen",title:"Senior Content Developer",url:"https://github.com/HeidiSteen",tag:"@HeidiSteen",imageURL:"https://github.com/HeidiSteen.png",key:"Heidi"}],frontMatter:{slug:"day10",title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",authors:["Heidi"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Search","Azure-AI"],tags:["ai-april","azure-open-ai","azure-cognitive-services","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day10.png",description:"Build your own ChatGPT with Azure Cognitive Search + Azure OpenAI Service https://azureaidevs.github.io/hub/2023-aia/day10 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"9. \ud83e\uddd1\u200d\ud83d\udcbbBuild intelligent apps w/ Azure AI SDKs",permalink:"/hub/2023-aia/day9"},nextItem:{title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor apps and Azure OpenAI",permalink:"/hub/2023-aia/day14"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day 10 of #30DaysOfAzureAI",id:"\ufe0f-day-10-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Introduction",id:"-introduction",level:2},{value:"Building your own ChatGPT",id:"building-your-own-chatgpt",level:2},{value:"Integrating Azure OpenAI Service into my apps",id:"integrating-azure-openai-service-into-my-apps",level:2},{value:"Scenario One: Converse with Minecraft",id:"scenario-one-converse-with-minecraft",level:3},{value:"Scenario Two: Combine Content Discovery and Language Understanding to Create New Information",id:"scenario-two-combine-content-discovery-and-language-understanding-to-create-new-information",level:3},{value:"Key Takeaways and Next Steps",id:"key-takeaways-and-next-steps",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-applied-ai-blog/revolutionize-your-enterprise-data-with-chatgpt-next-gen-apps-w/ba-p/3762087?WT.mc_id=aiml-89446-dglover"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/ai-applied-ai-blog/revolutionize-your-enterprise-data-with-chatgpt-next-gen-apps-w/ba-p/3762087?WT.mc_id=aiml-89446-dglover"},"View today's article")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,i.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/Newsletter/"},"Monthly AI and Machine Learning Microsoft Tech Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/10-how-to-build-your-own-chatgpt"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-10-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 10 of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Build your own ChatGPT with Azure Cognitive Search + Azure OpenAI Service")),(0,i.kt)("p",null,"Yesterday was about the Azure AI Hub, a treasure trove of Azure AI SDK samples.\nToday, hear from distinguished engineer Pablo Castro about how to build your own ChatGPT with Azure OpenAI and\nAzure Cognitive Search and how to integrate Azure OpenAI Service into your apps."),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to build your own ChatGPT."),(0,i.kt)("li",{parentName:"ul"},"How to integrate Azure OpenAI Service into your apps."),(0,i.kt)("li",{parentName:"ul"},"How to sign up to Azure OpenAI Service.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 10",src:a(5104).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio&WT.mc_id=aiml-89446-dglover"},"Quickstart: Get started generating text using Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/browse/?expanded=azure&roles=ai-engineer&products=azure-cognitive-search&WT.mc_id=aiml-89446-dglover"},"Learn Module: Azure Cognitive Search"))),(0,i.kt)("h2",{id:"-introduction"},"\ud83d\ude8c Introduction"),(0,i.kt)("p",null,"In today's post, distinguished engineer Pablo Castro covers two questions we hear most often:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How do I build my own ChatGPT that uses my own data as the basis for its responses?"),(0,i.kt)("li",{parentName:"ol"},"How do I integrate Azure OpenAI Service into my application?")),(0,i.kt)("h2",{id:"building-your-own-chatgpt"},"Building your own ChatGPT"),(0,i.kt)("p",null,"Read the full article that addresses the question ",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-applied-ai-blog/revolutionize-your-enterprise-data-with-chatgpt-next-gen-apps-w/ba-p/3762087?WT.mc_id=aiml-89446-dglover"},"\u201cHow do I build something like ChatGPT that uses my own data as the basis for its responses?\u201d")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The image shows the architecture",src:a(5493).Z,width:"999",height:"475"})),(0,i.kt)("h2",{id:"integrating-azure-openai-service-into-my-apps"},"Integrating Azure OpenAI Service into my apps"),(0,i.kt)("h3",{id:"scenario-one-converse-with-minecraft"},"Scenario One: Converse with Minecraft"),(0,i.kt)("p",null,"Transforming the surface area of an app might be easier than you think!\nIn this video segment, Pablo shows us how he used Minecraft's extension\nAPIs to integrate a conversational user interaction model to build in\nMinecraft."),(0,i.kt)("p",null,'The add-in module, named "conjure", collects a text input that\'s passed\nto Codex, transforming user intent into actionable code that Minecraft\nunderstands.'),(0,i.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/3t3qZu1Dy1k?start=341",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("p",null,"If your application supports plug-in or add-on modules, you can attach a\nmodule that accepts text prompts as inputs, and then pass that input to\nCodex to interpret the user intent. Codex returns native code that can\nthen be processed by your application."),(0,i.kt)("h3",{id:"scenario-two-combine-content-discovery-and-language-understanding-to-create-new-information"},"Scenario Two: Combine Content Discovery and Language Understanding to Create New Information"),(0,i.kt)("p",null,"The next example combines the content discovery capabilities of Azure\nCognitive Search with the language understanding of the GPT-3 model."),(0,i.kt)("p",null,"The premise is an app for a green energy company that helps users find\nthe latest insights and developments by scanning content over large\nvolumes of unstructured content from various sources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Cognitive Search accepts a user query and returns a set of matching\ndocuments in order of relevance. Instead of returning the results to\nthe user, it sends them to GPT-3 for more analysis.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GPT-3 takes the documents and composes better answers and insights\nusing content from all of them."))),(0,i.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/3t3qZu1Dy1k?start=576",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("p",null,"In this example, the app calls Azure Cognitive Search to discover\ntext-based documents related to the user's question. This step finds the\nmatches, ranks the documents, and returns the most relevant candidates."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Graphical user interface Description automatically generated",src:a(1701).Z,width:"800",height:"445"})),(0,i.kt)("p",null,"But sometimes the best answer isn't in one document. By adding language\nunderstanding, the app can use GPT-3 to derive a new answer using the\ncontent from all of the matching documents. This isn't just a verbatim\nanswer from one document, but a new answer from multiple documents."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Graphical user interface, text, application Description automatically generated",src:a(9148).Z,width:"808",height:"451"})),(0,i.kt)("h2",{id:"key-takeaways-and-next-steps"},"Key Takeaways and Next Steps"),(0,i.kt)("p",null,"Now that you've seen a few examples, here are some next steps:"),(0,i.kt)("p",null,"See how Microsoft integrates OpenAI into applications. You can ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/3t3qZu1Dy1k?t=164"},"catch\nthese examples in the video"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Co-Pilot in the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/power-platform/developer/"},"Power\nPlatform"),"\nlets you author Power Fx commands and automation flow without having\nto know or type the syntax.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"M365's ",(0,i.kt)("a",{parentName:"p",href:"https://designer.microsoft.com/"},"Microsoft Designer")," lets\nyou use AI-generated images when creating visual content."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR7en2Ais5pxKtso_Pz4b1_xUOFA5Qk1UWDRBMjg0WFhPMkIzTzhKQ1dWNyQlQCN0PWcu"},"Sign up for Azure\nOpenAI"),"\nto get core building blocks for production-grade applications, including\nhosting at scale, to enterprise-level security."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Call OpenAI from your code just like any other REST API.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Secure with strong authentication, role-based access control and the\nability to configure virtual networks, private endpoints as you\nwould for any Azure service."))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://oai.azure.com/portal"},"Sign up for Azure OpenAI Studio")," to\nexperiment and test your ideas before bringing them into your code.\n",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/3t3qZu1Dy1k?t=721"},"Watch this segment of the video"),"\nfor a walkthrough."),(0,i.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-applied-ai-blog/revolutionize-your-enterprise-data-with-chatgpt-next-gen-apps-w/ba-p/3762087?WT.mc_id=aiml-89446-dglover"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/10-how-to-build-your-own-chatgpt"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,i.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,i.kt)("p",null,"What's next? View the ",(0,i.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,i.kt)("img",{src:a(1081).Z,width:"14",height:"14"})," Click to subscribe")))}c.isMDXComponent=!0},5493:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architecture-46a922e1c702ea1bbf62ca327156aee1.png"},1701:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image3-6cc014422d14871444503a6d89b65d1c.png"},9148:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image4-40835ddec01e80e721da633f4eb0453e.png"},5104:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-day10-3f68bef1ae395ac7f0730bd3324afefa.png"},1081:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);