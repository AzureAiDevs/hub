"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={slug:"2023-day14",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",authors:["Michael"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Blazor","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot","open-ai"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI"},i=void 0,l={permalink:"/hubv2/blog/2023-day14",source:"@site/blog/2023-aia/2023-04-15-openai-blazer/index.md",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",description:"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI",date:"2023-04-15T00:00:00.000Z",formattedDate:"April 15, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"},{label:"copilot",permalink:"/hubv2/blog/tags/copilot"},{label:"open-ai",permalink:"/hubv2/blog/tags/open-ai"}],readingTime:2.645,hasTruncateMarker:!1,authors:[{name:"Michael Washington",title:"Founder of BlazorHelpWebsite.com and Microsoft MVP @ADefWebserver",url:"https://github.com/ADefWebserver",imageURL:"https://github.com/ADefWebserver.png",key:"Michael"}],frontMatter:{slug:"2023-day14",title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor Apps and Azure OpenAI",authors:["Michael"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Blazor","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot","open-ai"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI"},prevItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",permalink:"/hubv2/blog/2023-day13"},nextItem:{title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: AI App Developers\u2728",permalink:"/hubv2/blog/2023-day15"}},s={authorsImageUrls:[void 0]},p=[{value:"Day <em>14</em> of #30DaysOfAzureAI",id:"day-14-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"twitter:url",content:"https://aka.ms/ai-april/2023-day14"}),(0,o.kt)("meta",{name:"twitter:title",content:"Blazor Apps and Azure OpenAI"}),(0,o.kt)("meta",{name:"twitter:description",content:"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI"}),(0,o.kt)("meta",{name:"twitter:image",content:"https://aka.ms/ai-april/2023-day14/banner.png"}),(0,o.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,o.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,o.kt)("link",{rel:"canonical",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,o.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/14-blazor-apps-and-azure-openai"},"Ask a question about this post on GitHub Discussions"))),(0,o.kt)("h2",{id:"day-14-of-30daysofazureai"},"Day ",(0,o.kt)("em",{parentName:"h2"},"14")," of #30DaysOfAzureAI"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build Interactive Web Applications with Microsoft Blazor and Azure OpenAI")),(0,o.kt)("p",null,"The Blazor web framework allows developers to create client-side web applications using .NET and C#. The Blazor Help Website provides a range of resources and tutorials to help developers get started with Blazor, including articles, videos, a community forum, and a library of code samples and demos. This website is an excellent resource for anyone looking to learn about Blazor and how to use it to build real-world applications."),(0,o.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The article covers Microsoft Blazor and Azure OpenAI consumption, including text-davinci-002 model."),(0,o.kt)("li",{parentName:"ul"},"A guide is provided for setting up the Azure OpenAI service."),(0,o.kt)("li",{parentName:"ul"},"The article includes code for a Blazor app wrapping the OpenAIClient class and creating a UI. It serves as a comprehensive tutorial for integrating Azure OpenAI into Blazor apps.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty Banner Placeholder",src:a(34061).Z,width:"834",height:"350"})),(0,o.kt)("p",null,"Blazor is a new web framework for building single-page applications (SPAs) using .NET and C#. It allows developers to create client-side web applications with the same language and tools they use to build server-side applications. One of the benefits of Blazor is that it eliminates the need for JavaScript, which can often cause compatibility issues and make development more challenging. Blazor provides a more cohesive development experience, with full-stack web development using .NET."),(0,o.kt)("p",null,"Blazor Help Website is a popular online resource that provides a wealth of information and tutorials about Blazor. The website is dedicated to helping developers get up to speed with Blazor quickly and efficiently. It offers a range of resources for both beginners and advanced developers, including articles, tutorials, and videos. The website also has a community forum where developers can ask questions and share their knowledge with others."),(0,o.kt)("p",null,"One of the most useful features of the Blazor Help Website is its extensive library of code samples and demos. These code samples provide developers with practical examples of how to use Blazor to build real-world applications. The website covers a range of topics related to Blazor, including components, data binding, navigation, and authentication. With its comprehensive and up-to-date content, the Blazor Help Website is an excellent resource for anyone looking to learn more about Blazor and how to use it to build modern web applications."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91365).Z,width:"513",height:"537"})),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("p",null,"To learn more, check out this ",(0,o.kt)("a",{parentName:"p",href:"https://blazorhelpwebsite.com/ViewBlogPost/2065"},"article"),"."))}u.isMDXComponent=!0},34061:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-31885662be789e4f92413ec6ba2bf6be.png"},91365:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-62549b4855490d9374b2424aa72368a4.png"}}]);