"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),b=a,h=s["".concat(u,".").concat(b)]||s[b]||d[b]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},33549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\ud83d\uddde\ufe0fHow GPT models work",hide_table_of_contents:!0,keywords:["Azure-OpenAI-Services","Azure-AI"],tags:["azure-ai","azure-open-ai","openai"]},i=void 0,l={permalink:"/hub/ai-update/2023/04/26/2023-04-01/how-gpt-models-work",source:"@site/ai-update/2023-04-01/2023-04-26-how-gpt-models-work.md",title:"\ud83d\uddde\ufe0fHow GPT models work",description:"\ud83c\udf0f Overview",date:"2023-04-26T00:00:00.000Z",formattedDate:"April 26, 2023",tags:[{label:"azure-ai",permalink:"/hub/ai-update/tags/azure-ai"},{label:"azure-open-ai",permalink:"/hub/ai-update/tags/azure-open-ai"},{label:"openai",permalink:"/hub/ai-update/tags/openai"}],readingTime:.255,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\ud83d\uddde\ufe0fHow GPT models work",hide_table_of_contents:!0,keywords:["Azure-OpenAI-Services","Azure-AI"],tags:["azure-ai","azure-open-ai","openai"]},prevItem:{title:"\ud83d\uddde\ufe0fLearning AI with GitHub Copilot",permalink:"/hub/ai-update/2023/05/03/2023-05-01/learn-ai-with-copilot"},nextItem:{title:"\ud83d\uddde\ufe0fAnnouncing the Azure OpenAI .NET SDK",permalink:"/hub/ai-update/2023/04/20/2023-04-01/openai-dotnet-sdk"}},u={authorsImageUrls:[]},c=[{value:"\ud83c\udf0f Overview",id:"-overview",level:2},{value:"\ud83d\udc53 The article",id:"-the-article",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],p={toc:c};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-overview"},"\ud83c\udf0f Overview"),(0,a.kt)("p",null,"This post explains the basics of how GPT models work. My goal is for it to be accessible to everyone, even for those of you without a machine learning background. "),(0,a.kt)("h2",{id:"-the-article"},"\ud83d\udc53 The article"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/how-gpt-works/"},"The article")),(0,a.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/ai-update/rss.xml"},(0,a.kt)("img",{src:r(1081).Z,width:"14",height:"14"})," Subscribe to the AiMonthly RSS XML feed"))))}s.isMDXComponent=!0},1081:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);