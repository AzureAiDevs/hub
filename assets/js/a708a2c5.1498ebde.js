"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={slug:"2023-day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbIntelligent Apps and Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day9.png",description:"Build Intelligent Apps with the Azure OpenAI and Cognitive Services SDKs"},o=void 0,s={permalink:"/hub/blog/2023-day9",source:"@site/blog/2023-aia/2023-04-10-azure-cog-openai-sdks/index.md",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbIntelligent Apps and Azure AI SDKs",description:"Build Intelligent Apps with the Azure OpenAI and Cognitive Services SDKs",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:.575,hasTruncateMarker:!1,authors:[{name:"Arun Chandrasekhar",title:"Principal Product Manager @rcarunmsft",url:"https://github.com/achandmsft",imageURL:"https://github.com/achandmsft.png",key:"Arun"}],frontMatter:{slug:"2023-day9",title:"9. \ud83e\uddd1\u200d\ud83d\udcbbIntelligent Apps and Azure AI SDKs",authors:["Arun"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day9.png",description:"Build Intelligent Apps with the Azure OpenAI and Cognitive Services SDKs"},prevItem:{title:"8. \ud83c\udfc1Recap: Fundamentals Week\u2728",permalink:"/hub/blog/2023-day8"},nextItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",permalink:"/hub/blog/2023-day10"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>9</em> of #30DaysOfAzureAI",id:"day-9-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://github.com/Azure-Samples/azure-ai/blob/main/README.md"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/9-intelligent-apps-and-azure-ai-sdks"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-9-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"9")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Build Intelligent Apps with the Azure OpenAI and Cognitive Services SDKs")),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image shows authors and product icons",src:r(58837).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-ai/blob/main/README.md"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/9-intelligent-apps-and-azure-ai-sdks"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},58837:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-8d6970e91290e3ff14a2da4a0e7ac49b.png"}}]);