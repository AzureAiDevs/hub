"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={slug:"2023-day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbImplement BERT NLP models in Excel",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day12.png",description:"ONNX Runtime Custom Excel Functions for BERT NLP Tasks in JavaScript"},s=void 0,o={permalink:"/hub/blog/2023-day12",source:"@site/blog/2023-aia/2023-04-13-inside-onnx-excel/index.md",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbImplement BERT NLP models in Excel",description:"ONNX Runtime Custom Excel Functions for BERT NLP Tasks in JavaScript",date:"2023-04-13T00:00:00.000Z",formattedDate:"April 13, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:2.19,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager @CassieBreviu",url:"https://github.com/cassiebreviu",imageURL:"https://github.com/cassiebreviu.png",key:"Cassie"}],frontMatter:{slug:"2023-day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbImplement BERT NLP models in Excel",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day12.png",description:"ONNX Runtime Custom Excel Functions for BERT NLP Tasks in JavaScript"},prevItem:{title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",permalink:"/hub/blog/2023-day11"},nextItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",permalink:"/hub/blog/2023-day13"}},l={authorsImageUrls:[void 0]},c=[{value:"Day <em>12</em> of #30DaysOfAzureAI",id:"day-12-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/12-implement-bert-nlp-models-in-excel"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"day-12-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"12")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ONNX Runtime Custom Excel Functions for BERT NLP Tasks in JavaScript")),(0,i.kt)("p",null,"This article covers building an Excel add-in that performs NLP tasks using BERT-JS and ONNX Runtime. It explains the benefits of using BERT, a deep learning model from Google, which understands text context and meaning. The article shows how to optimize BERT-JS performance with ONNX Runtime and emphasizes the importance of responsible AI practices in application development to create fair, transparent and trustworthy applications.  Overall, the article provides a step-by-step guide to building the excel add-in."),(0,i.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The article provides a guide to building an Excel add-in that performs natural language processing tasks using the BERT model and ONNX Runtime. "),(0,i.kt)("li",{parentName:"ol"},"BERT is a deep learning model that is designed to understand the context and meaning of words in text. "),(0,i.kt)("li",{parentName:"ol"},"The article includes step-by-step instructions, code examples, and screenshots to help readers follow along.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image shows authors and product icons",src:a(373).Z,width:"834",height:"350"})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard"))),(0,i.kt)("p",null,'The article "Building an Excel Add-in with BERT-JS and ONNX Runtime" highlights the importance of using responsible AI in developing applications. The use of BERT-JS and ONNX Runtime enables the creation of an Excel add-in that performs natural language processing tasks within a spreadsheet. BERT, a deep learning model developed by Google, is designed to understand the context and meaning of words in text. By using a transformer-based architecture, BERT can analyze entire sentences or paragraphs rather than processing words one by one. The article provides step-by-step instructions and code examples to help readers follow along in building the add-in.'),(0,i.kt)("p",null,"The article emphasizes the importance of responsible AI in building applications that use machine learning models. By using ONNX Runtime, the performance of the BERT-JS model can be optimized, resulting in faster and more efficient processing of natural language tasks. Additionally, the article encourages developers to be mindful of potential biases and ethical considerations when building applications that use machine learning models. By considering responsible AI practices, developers can create applications that are fair, transparent, and trustworthy."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(92396).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"To learn more, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"article"),"."),(0,i.kt)("h2",{id:"questions"},"Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/12-implement-bert-nlp-models-in-excel"},"Remember, you can ask a question about this post on GitHub Discussions")))}u.isMDXComponent=!0},373:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-e2cc968d383c1a6c2f18f6efc9b18d0d.png"},92396:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bert-excel-dab9169fb12f6a0846795bf37f432df3.gif"}}]);