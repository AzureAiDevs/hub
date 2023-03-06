"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),v=o,d=u["".concat(p,".").concat(v)]||u[v]||m[v]||n;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},10101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={slug:"2023-day15",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: AI App Developers\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI","Cognitive-Search","onnx","dotnet","Blazor","CoPilot"],tags:["ai-april","30-days-of-azure-ai","app-developers","azure-open-ai","azure-cognitive-services"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"30DaysOfAzureAI Recap for AI App Developers Week"},i=void 0,l={permalink:"/hubv2/blog/2023-day15",source:"@site/blog/2023-aia/2023-04-16-recap-week-two/index.md",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: AI App Developers\u2728",description:"30DaysOfAzureAI Recap for AI App Developers Week",date:"2023-04-16T00:00:00.000Z",formattedDate:"April 16, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"},{label:"azure-open-ai",permalink:"/hubv2/blog/tags/azure-open-ai"},{label:"azure-cognitive-services",permalink:"/hubv2/blog/tags/azure-cognitive-services"}],readingTime:.795,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate @dglover",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day15",title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: AI App Developers\u2728",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Cognitive-Services","Azure-AI","Cognitive-Search","onnx","dotnet","Blazor","CoPilot"],tags:["ai-april","30-days-of-azure-ai","app-developers","azure-open-ai","azure-cognitive-services"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"30DaysOfAzureAI Recap for AI App Developers Week"},prevItem:{title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",permalink:"/hubv2/blog/2023-day14"},nextItem:{title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",permalink:"/hubv2/blog/2023-day16"}},p={authorsImageUrls:[void 0]},s=[{value:"Day <em>15</em> of #30DaysOfAzureAI",id:"day-15-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://aka.ms/ai-april/2023-day15"}),(0,o.kt)("meta",{name:"twitter:title",content:"Recap: AI App Developers\u2728"}),(0,o.kt)("meta",{name:"twitter:description",content:"30DaysOfAzureAI Recap for AI App Developers Week"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://aka.ms/ai-april/2023-day15/banner.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://aka.ms/ai-april/2023-day15"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,o.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/15-recap-ai-app-developers%E2%9C%A8"},"Ask a question about this post on GitHub Discussions"))),(0,o.kt)("h2",{id:"day-15-of-30daysofazureai"},"Day ",(0,o.kt)("em",{parentName:"h2"},"15")," of #30DaysOfAzureAI"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"30DaysOfAzureAI Recap for AI App Developers Week")),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty Banner Placeholder",src:r(69515).Z,width:"834",height:"350"})))}u.isMDXComponent=!0},69515:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-a5d232bc05c53ece02fd6c87fa24a817.png"}}]);