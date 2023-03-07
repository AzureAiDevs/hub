"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3051],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},97766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={slug:"2023-day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner.png",description:"Building Cross-Platform AI Solutions with ONNX and .NET"},i=void 0,l={permalink:"/hub/blog/2023-day11",source:"@site/blog/2023-aia/2023-04-12-onnx-dotnet/index.md",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",description:"Building Cross-Platform AI Solutions with ONNX and .NET",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:2.965,hasTruncateMarker:!1,authors:[{name:"Henk Boelman",title:"Senior Cloud Advocate @hboelman",url:"https://github.com/hnky",imageURL:"https://github.com/hnky.png",key:"Henk"}],frontMatter:{slug:"2023-day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner.png",description:"Building Cross-Platform AI Solutions with ONNX and .NET"},prevItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbInside look at Azure OpenAI for Devs",permalink:"/hub/blog/2023-day10"},nextItem:{title:"12. \ud83e\uddd1\u200d\ud83d\udcbbImplement BERT NLP models in Excel",permalink:"/hub/blog/2023-day12"}},s={authorsImageUrls:[void 0]},d=[{value:"Day <em>11</em> of #30DaysOfAzureAI",id:"day-11-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day11"}),(0,r.kt)("meta",{name:"twitter:title",content:"Cross-Platform AI with ONNX and .NET"}),(0,r.kt)("meta",{name:"twitter:description",content:"Building Cross-Platform AI Solutions with ONNX and .NET"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/2023/banner.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/ai-april/2023-day11"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/11-cross-platform-ai-with-onnx-and-.net"},"Ask a question about this post on GitHub Discussions"))),(0,r.kt)("h2",{id:"day-11-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"11")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Building Cross-Platform AI Solutions with ONNX and .NET")),(0,r.kt)("p",null,'The video Machine learning models with ONNX and .NET | .NET Conf 2022 - YouTube" features a presentation by two cloud advocates from Microsoft, Beatriz Stollnitz and Henk Boelman, who demonstrate how to create a machine learning model using ONNX and .NET. The presentation includes a brief introduction to artificial intelligence (AI) and its subsets, with a focus on machine learning and deep learning. The presenters also explain the difference between traditional programming and machine learning, and how the latter can be used to solve problems that are difficult to solve using traditional programming.'),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The presentation is about machine learning models with ONNX and .NET, presented by Beatriz Stollnitz and Henk."),(0,r.kt)("li",{parentName:"ol"},"They start with a dataset of Lego figures, create a model, and demonstrate how to run it in a .NET Maui application that can run on a mobile phone."),(0,r.kt)("li",{parentName:"ol"},"The presentation covers an overview of AI, machine learning, expert systems, and deep learning, and how they relate to traditional programming.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Banner Placeholder",src:a(80242).Z,width:"834",height:"350"})),(0,r.kt)("p",null,"The video is a presentation on machine learning models using ONNX and .NET. The presenters, Bea and Henk, start with an overview of AI and machine learning, explaining that machine learning is a subset of AI that involves creating a model that can learn from data and make predictions without being explicitly programmed. They explain that deep learning, a subset of machine learning that uses artificial neural networks, is well-suited to big data."),(0,r.kt)("p",null,"The presentation then goes on to demonstrate how to create a machine learning model using ONNX and .NET. The presenters use a dataset of Lego figures and explain how to create a model that can predict the color of a Lego figure based on its shape. They use tools like Visual Studio and the ML.NET library to create the model, and then show how to use the ONNX format to export the model for use in a .NET Maui application."),(0,r.kt)("p",null,"The presentation concludes with a demo of the .NET Maui application, which uses the machine learning model to predict the color of a Lego figure from an image. The presenters explain how the application works and discuss some of the challenges they faced in creating the model and the application. They also emphasize the importance of testing and evaluating machine learning models to ensure their accuracy and reliability. Overall, the presentation provides an accessible introduction to machine learning using ONNX and .NET, and demonstrates how these tools can be used to create practical applications."),(0,r.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/h6HWP5jpA5s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"learn-more"},"Learn More"))}u.isMDXComponent=!0},80242:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-c837375e65e4c4711cdb3d43061b8421.png"}}]);