"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),f=n,b=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},41693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={slug:"2023-day26",title:"26. \ud83c\udfedStable Diffusion on Azure ML",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","StableDiffusion"],tags:["ai-april","30-days-of-azure-ai","azure-ml","ml-engineers","app-developers","workshop"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"How to run Stable Diffusion Web UI on Azure ML compute instances"},i=void 0,l={permalink:"/hubv2/blog/2023-day26",source:"@site/blog/2023-aia/2023-04-28-stable-diffusion/index.md",title:"26. \ud83c\udfedStable Diffusion on Azure ML",description:"How to run Stable Diffusion Web UI on Azure ML compute instances",date:"2023-04-28T00:00:00.000Z",formattedDate:"April 28, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"azure-ml",permalink:"/hubv2/blog/tags/azure-ml"},{label:"ml-engineers",permalink:"/hubv2/blog/tags/ml-engineers"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"},{label:"workshop",permalink:"/hubv2/blog/tags/workshop"}],readingTime:.895,hasTruncateMarker:!1,authors:[{name:"Vlad Iliescu",title:"Head of AI at Strongbytes and Microsoft MVP @vladiliescu",url:"https://github.com/vladiliescu",imageURL:"https://github.com/vladiliescu.png",key:"Vlad"}],frontMatter:{slug:"2023-day26",title:"26. \ud83c\udfedStable Diffusion on Azure ML",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","StableDiffusion"],tags:["ai-april","30-days-of-azure-ai","azure-ml","ml-engineers","app-developers","workshop"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"How to run Stable Diffusion Web UI on Azure ML compute instances"},prevItem:{title:"25. \ud83c\udfedBuild a Patient Registration App",permalink:"/hubv2/blog/2023-day25"},nextItem:{title:"27. \ud83c\udfedEngage with Azure Personalizer",permalink:"/hubv2/blog/2023-day27"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>26</em> of #30DaysOfAzureAI",id:"day-26-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://aka.ms/ai-april/2023-day26"}),(0,n.kt)("meta",{name:"twitter:title",content:"Stable Diffusion on Azure ML"}),(0,n.kt)("meta",{name:"twitter:description",content:"How to run Stable Diffusion Web UI on Azure ML compute instances"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://aka.ms/ai-april/2023-day26/banner.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/26-stable-diffusion-on-azure-ml"},"Ask a question about this post on GitHub Discussions"))),(0,n.kt)("h2",{id:"day-26-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"26")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How to run Stable Diffusion Web UI on Azure ML compute instances")),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Empty Banner Placeholder",src:a(6257).Z,width:"834",height:"350"})),(0,n.kt)("p",null,"To learn more, head over to the ",(0,n.kt)("a",{parentName:"p",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"},"original post"),"."))}c.isMDXComponent=!0},6257:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-a9137e400a8d11b09fae830b535e3da6.png"}}]);