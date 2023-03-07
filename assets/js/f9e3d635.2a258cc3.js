"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),v=o,g=c["".concat(l,".").concat(v)]||c[v]||d[v]||n;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},10101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={slug:"2023-day15",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: AI App Developers\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI","Cognitive-Search","onnx","dotnet","Blazor","CoPilot"],tags:["ai-april","30-days-of-azure-ai","app-developers","azure-open-ai","azure-cognitive-services"],image:"https://azureaidevs.github.io/hub/img/2023/banner.png",description:"30DaysOfAzureAI Recap for AI App Developers Week"},i=void 0,s={permalink:"/hub/blog/2023-day15",source:"@site/blog/2023-aia/2023-04-16-recap-week-two/index.md",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: AI App Developers\u2728",description:"30DaysOfAzureAI Recap for AI App Developers Week",date:"2023-04-16T00:00:00.000Z",formattedDate:"April 16, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"azure-open-ai",permalink:"/hub/blog/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hub/blog/tags/azure-cognitive-services"}],readingTime:.77,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate @dglover",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day15",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: AI App Developers\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI","Cognitive-Search","onnx","dotnet","Blazor","CoPilot"],tags:["ai-april","30-days-of-azure-ai","app-developers","azure-open-ai","azure-cognitive-services"],image:"https://azureaidevs.github.io/hub/img/2023/banner.png",description:"30DaysOfAzureAI Recap for AI App Developers Week"},prevItem:{title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",permalink:"/hub/blog/2023-day14"},nextItem:{title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",permalink:"/hub/blog/2023-day16"}},l={authorsImageUrls:[void 0]},p=[{value:"Day <em>15</em> of #30DaysOfAzureAI",id:"day-15-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/ai-april/2023-day15"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,o.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/15-recap-ai-app-developers%E2%9C%A8"},"Ask a question about this post on GitHub Discussions")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,o.kt)("h2",{id:"day-15-of-30daysofazureai"},"Day ",(0,o.kt)("em",{parentName:"h2"},"15")," of #30DaysOfAzureAI"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"30DaysOfAzureAI Recap for AI App Developers Week")),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Panel shows authors and product icons",src:r(11666).Z,width:"834",height:"350"})),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("h2",{id:"questions"},"Questions?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/15-recap-ai-app-developers%E2%9C%A8"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},11666:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-a5d232bc05c53ece02fd6c87fa24a817.png"}}]);