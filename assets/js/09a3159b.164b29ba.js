"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4886],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(i),d=a,g=u["".concat(c,".").concat(d)]||u[d]||v[d]||n;return i?r.createElement(g,o(o({ref:t},p),{},{components:i})):r.createElement(g,o({ref:t},p))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<n;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},50211:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=i(87462),a=(i(67294),i(3905));const n={slug:"2023-day4",title:"4. \ud83e\uddeeAI-Power Apps with Cognitive Services",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cognitive-Services","Azure-AI","vscode"],tags:["azure-ai","azure-cognitive-services","30-days-of-azure-ai"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Build AI-Powered apps with Azure Cognitive Services with ease"},o=void 0,s={permalink:"/hubv2/blog/2023-day4",source:"@site/blog/2023-aia/2023-04-05-exploring-cog-services/index.md",title:"4. \ud83e\uddeeAI-Power Apps with Cognitive Services",description:"Build AI-Powered apps with Azure Cognitive Services with ease",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"azure-ai",permalink:"/hubv2/blog/tags/azure-ai"},{label:"azure-cognitive-services",permalink:"/hubv2/blog/tags/azure-cognitive-services"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"}],readingTime:2.675,hasTruncateMarker:!1,authors:[{name:"Dave Glover",title:"Principal Cloud Advocate @dglover",url:"https://github.com/gloveboxes",imageURL:"https://github.com/gloveboxes.png",key:"Dave"}],frontMatter:{slug:"2023-day4",title:"4. \ud83e\uddeeAI-Power Apps with Cognitive Services",authors:["Dave"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Cognitive-Services","Azure-AI","vscode"],tags:["azure-ai","azure-cognitive-services","30-days-of-azure-ai"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Build AI-Powered apps with Azure Cognitive Services with ease"},prevItem:{title:"3. \ud83e\uddeeExplore the Azure OpenAI Playground",permalink:"/hubv2/blog/2023-day3"},nextItem:{title:"5. \ud83e\uddeeLearn key Azure ML Concepts",permalink:"/hubv2/blog/2023-day5"}},c={authorsImageUrls:[void 0]},l=[{value:"Day <em>4</em> of #30DaysOfAzureAI",id:"day-4-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("meta",{name:"twitter:url",content:"https://aka.ms/ai-april/2023-day4"}),(0,a.kt)("meta",{name:"twitter:title",content:"AI-Power Apps with Cognitive Services"}),(0,a.kt)("meta",{name:"twitter:description",content:"Build AI-Powered apps with Azure Cognitive Services with ease"}),(0,a.kt)("meta",{name:"twitter:image",content:"https://aka.ms/ai-april/2023-day4/banner.png"}),(0,a.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,a.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,a.kt)("link",{rel:"canonical",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/what-are-cognitive-services"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/4-ai-power-apps-with-cognitive-services"},"Ask a question about this post on GitHub Discussions"))),(0,a.kt)("h2",{id:"day-4-of-30daysofazureai"},"Day ",(0,a.kt)("em",{parentName:"h2"},"4")," of #30DaysOfAzureAI"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Build AI-Powered apps with Azure Cognitive Services with ease")),(0,a.kt)("p",null,"Azure Cognitive Services is a cloud-based platform that provides AI services to developers without needing deep AI or data science knowledge. The platform consists of five categories: Vision, Speech, Language, Decision and OpenAI, each with a range of services to enhance apps. The article explains the platform and covers essential topics such as regional availability, security and certifications, and how to create a Cognitive Services resource. Unleash the power of AI in your projects with Azure Cognitive Services!"),(0,a.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,a.kt)("p",null,"The three key points of Azure Cognitive Services are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cloud-based AI services for developers."),(0,a.kt)("li",{parentName:"ol"},"Five categories: Vision, Speech, Language, Decision and OpenAI."),(0,a.kt)("li",{parentName:"ol"},"Essential topics: availability, security, and resource creation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Empty Banner Placeholder",src:i(92741).Z,width:"834",height:"350"})),(0,a.kt)("p",null,"The article introduces Azure Cognitive Services, which are cloud-based artificial intelligence services that allow developers to incorporate cognitive intelligence into their applications without needing direct AI or data science knowledge. The services are provided through REST APIs and client library SDKs in popular programming languages, and they offer solutions that can see, hear, speak, and analyze. The services are divided into five main categories, namely Vision, Speech, Language, Decision, and Azure OpenAI Service. Each category has several services that can be used to add cognitive features to applications. The article also covers how to create a Cognitive Services resource and use the services in different development environments, regional availability, language support, security, certifications and compliance, and help and support options."),(0,a.kt)("p",null,"Azure Cognitive Services is a powerful tool for developers who want to create intelligent applications without direct AI or data science skills. The article explains how the service provides advanced cognitive algorithms for processing images and returning information, as well as face attribute detection and recognition. The Speech services allow developers to add speech-enabled features to their applications, including speech-to-text, text-to-speech, speech translation, and more. The Language services provide several Natural Language Processing (NLP) features to understand and analyze text. Decision services, including the Azure OpenAI service, provide powerful language models for content generation, summarization, semantic search, and natural language to code translation. The article provides readers with a comprehensive overview of how to use Cognitive Services, including creating a Cognitive Services resource and using the services in different development environments."),(0,a.kt)("h2",{id:"learn-more"},"Learn More"),(0,a.kt)("p",null,"To learn more, check out this ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/what-are-cognitive-services"},"article"),"."))}u.isMDXComponent=!0},92741:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/banner-df9a24a6d832b307ac097f08a5f8b3be.png"}}]);