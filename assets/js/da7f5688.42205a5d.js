"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[552],{4137:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>m});var t=a(7294);function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,i=function(e,r){if(null==e)return{};var a,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(i[a]=e[a]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),u=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return a?t.createElement(m,s(s({ref:r},c),{},{components:a})):t.createElement(m,s({ref:r},c))}));function m(e,r){var a=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=h;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<n;u++)s[u]=a[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var t=a(7462),i=(a(7294),a(4137));const n={slug:"day27",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"/banner-day27.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences https://azureaidevs.github.io/hub/2023-aia/day27 #30DaysOfAzureAI #AzureAiDevs #AI #AzurePersonalizer"},s=void 0,o={permalink:"/hub/2023-aia/day27",source:"@site/2023-aia/2023-04-29-azure-personalizer/index.md",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences https://azureaidevs.github.io/hub/2023-aia/day27 #30DaysOfAzureAI #AzureAiDevs #AI #AzurePersonalizer",date:"2023-04-29T00:00:00.000Z",formattedDate:"April 29, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"},{label:"workshop",permalink:"/hub/2023-aia/tags/workshop"},{label:"azure-cognitive-services",permalink:"/hub/2023-aia/tags/azure-cognitive-services"}],readingTime:2.17,hasTruncateMarker:!1,authors:[{name:"Arafat Tehsin",title:"Engineering Manager & Microsoft MVP (AI)",url:"https://github.com/arafattehsin",tag:"@arafattehsin",imageURL:"https://github.com/arafattehsin.png",key:"Arafat"}],frontMatter:{slug:"day27",title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",authors:["Arafat"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Personalizers","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","workshop","azure-cognitive-services"],image:"/banner-day27.png",description:"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences https://azureaidevs.github.io/hub/2023-aia/day27 #30DaysOfAzureAI #AzureAiDevs #AI #AzurePersonalizer"},prevItem:{title:"26. \ud83c\udfedStable Diffusion on Azure ML",permalink:"/hub/2023-aia/day26"},nextItem:{title:"28. \ud83c\udfedContinuing your Azure AI Journey\u2728",permalink:"/hub/2023-aia/day28"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>27</em> of #30DaysOfAzureAI",id:"\ufe0f-day-27-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Personalized user experiences at scale",id:"-personalized-user-experiences-at-scale",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],c={toc:u};function p(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://tbc"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/27-enhance-cx-with-azure-personalizer"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-27-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,i.kt)("em",{parentName:"h2"},"27")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maximizing Business Results with Azure Personalizer: A Machine Learning-Based Service for Personalized Customer Experiences")),(0,i.kt)("p",null,"Yesterday we learned about the power of Stable Diffusion and Azure ML. Today's your chance to learn how you can personalixe your users' experience with Azure Personalizer at scale. Time to dive in!"),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure Personalizer Cognitive Service."),(0,i.kt)("li",{parentName:"ul"},"Build a personalized experience for your users."),(0,i.kt)("li",{parentName:"ul"},"How to create the resources for Azure Personalizer.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 27",src:a(7953).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/personalizer?WT.mc_id=aiml-89446-dglover"},"Azure Personalizer Cognitive Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-au/products/cognitive-services/#overview?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/#api?WT.mc_id=aiml-89446-dglover"},"Azure Cognitive Services APIs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/launchwithai-videoken?WT.mc_id=aiml-89446-dglover"},"Case Study: VideoKen is improving video discovery and engagement using AI"))),(0,i.kt)("h2",{id:"-personalized-user-experiences-at-scale"},"\ud83d\ude8c Personalized user experiences at scale"),(0,i.kt)("p",null,"Azure Personalizer is a service that makes it easy to target content and experiences without complex pre-analysis or cleanup of past data. It allows you to personalize user experiences at scale in real time. Azure Personalizer can be used to drive content recommendations, deliver time-sensitive offers, or optimize task routing and assignment."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://tbc"},"Azure Personalizer Workshop")," will help you learn how to use Azure Personalizer to build a personalized experience for your users. You will learn how to create a Personalizer resource, train a model, and deploy a personalized experience."),(0,i.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://tbc"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/27-enhance-cx-with-azure-personalizer"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},7953:(e,r,a)=>{a.d(r,{Z:()=>t});const t=a.p+"assets/images/banner-day27-d9e47525395bedbd0ee44f225f6528e7.png"}}]);