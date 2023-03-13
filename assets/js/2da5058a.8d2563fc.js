"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4239],{4137:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const i={slug:"day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"/banner-day12.png",description:"Run BERT NLP models locally in Excel with ONNX and JavaScript https://azureaidevs.github.io/hub/2023-aia/day12 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"},l=void 0,o={permalink:"/hub/2023-aia/day12",source:"@site/2023-aia/2023-04-13-inside-onnx-excel/index.md",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",description:"Run BERT NLP models locally in Excel with ONNX and JavaScript https://azureaidevs.github.io/hub/2023-aia/day12 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX",date:"2023-04-13T00:00:00.000Z",formattedDate:"April 13, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"}],readingTime:2.165,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager",url:"https://github.com/cassiebreviu",tag:"@CassieBreviu",imageURL:"https://github.com/cassiebreviu.png",key:"Cassie"}],frontMatter:{slug:"day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"/banner-day12.png",description:"Run BERT NLP models locally in Excel with ONNX and JavaScript https://azureaidevs.github.io/hub/2023-aia/day12 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"},prevItem:{title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",permalink:"/hub/2023-aia/day11"},nextItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",permalink:"/hub/2023-aia/day13"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>12</em> of #30DaysOfAzureAI",id:"\ufe0f-day-12-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Build an Excel Add-in with BERT-JS and ONNX runtime",id:"-build-an-excel-add-in-with-bert-js-and-onnx-runtime",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],d={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/12-run-bert-nlp-models-locally-in-excel"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"\ufe0f-day-12-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,r.kt)("em",{parentName:"h2"},"12")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Run BERT NLP models locally in Excel with ONNX and JavaScript")),(0,r.kt)("p",null,'Yesterday was all about building cross-platform intelligent apps with .NET MAUI and ONNX. Today is for people looking to extend Excel with BERT-JS and the ONNX Runtime. Wait, was "Excel, BERT-JS, and ONNX" used in the same sentence?\ud83d\ude04 Yup, they were, so follow along to learn more.'),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Excel Add-ins with Natural Language Processing using BERT and the ONNX Runtime."),(0,r.kt)("li",{parentName:"ul"},"Step-by-step instructions and code examples.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 12",src:a(9290).Z,width:"834",height:"350"})),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard"))),(0,r.kt)("h2",{id:"-build-an-excel-add-in-with-bert-js-and-onnx-runtime"},"\ud83d\ude8c Build an Excel Add-in with BERT-JS and ONNX runtime"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"today's article")," about building an Excel Add-in with BERT-JS and ONNX Runtime\".  You'll learn about the use of BERT-JS and ONNX Runtime enables the creation of an Excel add-in that performs natural language processing tasks within a spreadsheet. "),(0,r.kt)("p",null,"BERT, a deep learning model developed by Google, is designed to understand the context and meaning of words in text. By using a transformer-based architecture, BERT can analyze entire sentences or paragraphs rather than processing words one by one. ",(0,r.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"Today's article")," provides step-by-step instructions and code examples to help readers follow along in building the add-in."),(0,r.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/12-run-bert-nlp-models-locally-in-excel"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},9290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-day12-06eee5a6fbcb4f256cfc70db499818b9.png"}}]);