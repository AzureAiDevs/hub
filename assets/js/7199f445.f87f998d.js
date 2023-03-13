"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5454],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(4137));const i={slug:"day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk","Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"/banner-day11.png",description:"Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/hub/2023-aia/day11 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"},o=void 0,l={permalink:"/hub/2023-aia/day11",source:"@site/2023-aia/2023-04-12-onnx-dotnet/index.md",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",description:"Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/hub/2023-aia/day11 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"}],readingTime:2.18,hasTruncateMarker:!1,authors:[{name:"Henk Boelman",title:"Senior Cloud Advocate",url:"https://github.com/hnky",tag:"@hboelman",imageURL:"https://github.com/hnky.png",key:"Henk"},{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl",url:"https://github.com/bstollnitz",tag:"@beastollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk","Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"/banner-day11.png",description:"Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/hub/2023-aia/day11 #30DaysOfAzureAI #AzureAiDevs #AI #ONNX"},prevItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",permalink:"/hub/2023-aia/day10"},nextItem:{title:"12. \ud83e\uddd1\u200d\ud83d\udcbbRun BERT NLP models locally in Excel",permalink:"/hub/2023-aia/day12"}},s={authorsImageUrls:[void 0,void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day <em>11</em> of #30DaysOfAzureAI",id:"\ufe0f-day-11-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Build cross-platform intelligent apps with ONNX and .NET",id:"-build-cross-platform-intelligent-apps-with-onnx-and-net",level:2},{value:"\ud83d\udc53 Read today&#39;s article",id:"-read-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://youtu.be/h6HWP5jpA5s"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,r.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/11-cross-platform-ai-with-onnx-and-.net"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"\ufe0f-day-11-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day ",(0,r.kt)("em",{parentName:"h2"},"11")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building Cross-Platform AI Solutions with ONNX and .NET")),(0,r.kt)("p",null,"Yesterday was all about the power of OpenAI to create intelligent dynamic apps. Today is for people looking to build cross-platform intelligent apps with .NET MAUI and ONNX."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Machine learning models with ONNX and .NET."),(0,r.kt)("li",{parentName:"ul"},"AI, machine learning, expert systems, and deep learning, and how they relate to traditional programming.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 11",src:a(1216).Z,width:"834",height:"350"})),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/apps/maui?WT.mc_id=aiml-89446-dglover"},".NET Multi-platform App UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/concept-onnx?WT.mc_id=aiml-89446-dglover"},"ONNX and Azure Machine Learning: Create and accelerate ML models")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/add-machine-learning-to-uwp-app?WT.mc_id=aiml-89446-dglover"},"Create a machine learning model for offline use on a Windows device"))),(0,r.kt)("h2",{id:"-build-cross-platform-intelligent-apps-with-onnx-and-net"},"\ud83d\ude8c Build cross-platform intelligent apps with ONNX and .NET"),(0,r.kt)("p",null,"Watch ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/h6HWP5jpA5s"},"today's video")," about machine learning models using ONNX and .NET. The presenters, Bea and Henk, start with an overview of AI and machine learning, explaining that machine learning is a subset of AI that involves creating a model that can learn from data and make predictions without being explicitly programmed. They discuss deep learning, a subset of machine learning that uses artificial neural network and is well-suited to big data."),(0,r.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/h6HWP5jpA5s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"-read-todays-article"},"\ud83d\udc53 Read today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/h6HWP5jpA5s"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/11-cross-platform-ai-with-onnx-and-.net"},"Remember, you can ask a question about this post on GitHub Discussions")))}d.isMDXComponent=!0},1216:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-day11-b17d5e8fecba63c8e602611bb63e315b.png"}}]);