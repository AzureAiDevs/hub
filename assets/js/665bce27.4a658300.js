"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={slug:"2023-day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbImplement BERT NLP models in Excel",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day12.png",description:"ONNX Runtime Custom Excel Functions for BERT NLP Tasks in JavaScript"},o=void 0,s={permalink:"/hub/blog/2023-day12",source:"@site/blog/2023-aia/2023-04-13-inside-onnx-excel/index.md",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbImplement BERT NLP models in Excel",description:"ONNX Runtime Custom Excel Functions for BERT NLP Tasks in JavaScript",date:"2023-04-13T00:00:00.000Z",formattedDate:"April 13, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:2.885,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager @CassieBreviu",url:"https://github.com/cassiebreviu",imageURL:"https://github.com/cassiebreviu.png",key:"Cassie"}],frontMatter:{slug:"2023-day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbImplement BERT NLP models in Excel",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day12.png",description:"ONNX Runtime Custom Excel Functions for BERT NLP Tasks in JavaScript"},prevItem:{title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",permalink:"/hub/blog/2023-day11"},nextItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",permalink:"/hub/blog/2023-day13"}},l={authorsImageUrls:[void 0]},c=[{value:"Day <em>12</em> of #30DaysOfAzureAI",id:"day-12-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/12-implement-bert-nlp-models-in-excel"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-12-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"12")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ONNX Runtime Custom Excel Functions for BERT NLP Tasks in JavaScript")),(0,r.kt)("p",null,'The article "Building an Excel Add-in with BERT-JS and ONNX Runtime" provides readers with a guide to creating an Excel add-in that can perform natural language processing tasks using the BERT (Bidirectional Encoder Representations from Transformers) model and ONNX Runtime. BERT is a deep learning model originally developed by Google that is designed to understand the context and meaning of words in text. BERT-JS, which is a JavaScript implementation of the BERT model, will be used to perform tasks such as sentiment analysis and entity recognition within an Excel spreadsheet. ONNX Runtime will be used to help optimize the performance of the add-in. The article includes step-by-step instructions, code examples, and screenshots to help readers follow along.'),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The article provides a guide to building an Excel add-in that performs natural language processing tasks using the BERT model and ONNX Runtime. "),(0,r.kt)("li",{parentName:"ol"},"BERT is a deep learning model that is designed to understand the context and meaning of words in text. "),(0,r.kt)("li",{parentName:"ol"},"The article includes step-by-step instructions, code examples, and screenshots to help readers follow along.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Panel shows authors and product icons",src:n(373).Z,width:"834",height:"350"})),(0,r.kt)("p",null,'The article "Building an Excel Add-in with BERT-JS and ONNX Runtime" describes how to build an Excel add-in that uses BERT-JS and ONNX Runtime to perform natural language processing tasks within an Excel spreadsheet.'),(0,r.kt)("p",null,"BERT (Bidirectional Encoder Representations from Transformers) is a pre-trained natural language processing model developed by Google. It is designed to understand the context and meaning of words in text by analyzing the relationships between them. BERT is a deep learning model that uses a transformer-based architecture, which allows it to analyze the entire sentence or paragraph at once, rather than processing the words one by one."),(0,r.kt)("p",null,"The article explains how to use BERT-JS, which is a JavaScript implementation of BERT, to perform tasks such as sentiment analysis and entity recognition within an Excel spreadsheet. ONNX Runtime is used to optimize the performance of BERT-JS within the Excel add-in."),(0,r.kt)("p",null,"The article provides step-by-step instructions on how to build the Excel add-in, including how to install the necessary software, how to create the add-in project, and how to add BERT-JS and ONNX Runtime to the project. It also includes code examples and screenshots to help users follow along."),(0,r.kt)("p",null,"In summary, the article demonstrates how to use BERT-JS and ONNX Runtime to perform natural language processing tasks within an Excel spreadsheet. BERT is a pre-trained natural language processing model that uses a transformer-based architecture to analyze the context and meaning of words in text."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92396).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"To learn more, check out this ",(0,r.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"article"),"."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/12-implement-bert-nlp-models-in-excel"},"Remember, you can ask a question about this post on GitHub Discussions")))}d.isMDXComponent=!0},373:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-e2cc968d383c1a6c2f18f6efc9b18d0d.png"},92396:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bert-excel-dab9169fb12f6a0846795bf37f432df3.gif"}}]);