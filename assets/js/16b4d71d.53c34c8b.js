"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[153],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||n;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),i=(a(7294),a(4137));const n={slug:"day20",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops w/ Azure MLOps",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers"],image:"/banner-day20.png",description:"Learn about Azure Machine Learning lifecycle and open source tooling to start building MLOps https://azureaidevs.github.io/hub/2023-aia/day20 #30DaysOfAzureAI #AzureAiDevs #AI #AzureMLOps"},l=void 0,o={permalink:"/hub/2023-aia/day20",source:"@site/2023-aia/2023-04-21-mlops-intro/index.md",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops w/ Azure MLOps",description:"Learn about Azure Machine Learning lifecycle and open source tooling to start building MLOps https://azureaidevs.github.io/hub/2023-aia/day20 #30DaysOfAzureAI #AzureAiDevs #AI #AzureMLOps",date:"2023-04-21T00:00:00.000Z",formattedDate:"April 21, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"}],readingTime:2.23,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager",url:"https://github.com/cassiebreviu",tag:"@CassieBreviu",imageURL:"https://github.com/cassiebreviu.png",key:"Cassie"}],frontMatter:{slug:"day20",title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops w/ Azure MLOps",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["MLOps","Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers"],image:"/banner-day20.png",description:"Learn about Azure Machine Learning lifecycle and open source tooling to start building MLOps https://azureaidevs.github.io/hub/2023-aia/day20 #30DaysOfAzureAI #AzureAiDevs #AI #AzureMLOps"},prevItem:{title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",permalink:"/hub/2023-aia/day19"},nextItem:{title:"21. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cRecap: Azure ML Week\u2728",permalink:"/hub/2023-aia/day21"}},s={authorsImageUrls:[void 0]},c=[{value:"\ud83d\uddd3\ufe0f Day <em>20</em> of #30DaysOfAzureAI",id:"\ufe0f-day-20-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Learn Live MLOps to streamline the ML Lifecycle",id:"-learn-live-mlops-to-streamline-the-ml-lifecycle",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://learn.microsoft.com/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/20-streamline-ops-w/-azure-mlops"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-20-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,i.kt)("em",{parentName:"h2"},"20")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about Azure Machine Learning lifecycle and open source tooling to start building MLOps")),(0,i.kt)("p",null,'Yesterday we learned about the Azure ML Responsible AI Dashboard. Today is an introduction to Azure MLOps, where you\'ll learn how to "productionalize" ML models with Azure ML.'),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure ML MLOps"),(0,i.kt)("li",{parentName:"ul"},"Practices and tools for managing the machine learning lifecycle."),(0,i.kt)("li",{parentName:"ul"},"Improving data scientists and developer collaboration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 20",src:a(7789).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/machine-learning/mlops/#features?WT.mc_id=aiml-89446-dglover"},"Machine learning operations (MLOps)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/paths/introduction-machine-learn-operations?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to machine learning operations (MLOps)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/start-ml-lifecycle-mlops?WT.mc_id=aiml-89446-dglover"},"Learn Module: Start the machine learning lifecycle with MLOps"))),(0,i.kt)("h2",{id:"-learn-live-mlops-to-streamline-the-ml-lifecycle"},"\ud83d\ude8c Learn Live MLOps to streamline the ML Lifecycle"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops"},"Watch today's video")," about MLOps for the ML Lifecycle. The presenters, Cassie and Korey, start with an overview of MLOps, explaining that it is a set of practices and tools that help data scientists and developers work together to build and deploy machine learning models."),(0,i.kt)("p",null,"Cassie and Korey discuss the benefits of MLOps, including faster time to value, improved collaboration, and increased model quality. They also discuss the challenges of MLOps, including the need for a common language, the need for a common platform, and the need for a common process."),(0,i.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/MYP3Bmsncq4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/events/ignite-2022/cll99-learn-live-start-machine-learning-lifecycle-with-mlops"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/20-streamline-ops-w/-azure-mlops"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},7789:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day20-f30b92b94ce04e0b3e06419b76050bba.png"}}]);