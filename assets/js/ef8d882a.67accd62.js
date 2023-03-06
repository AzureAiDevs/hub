"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={slug:"2023-day17",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Streamlining ML Development with Azure ML Components & Pipelines"},o=void 0,l={permalink:"/hubv2/blog/2023-day17",source:"@site/blog/2023-aia/2023-04-18-azureml-pipelines/index.md",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",description:"Streamlining ML Development with Azure ML Components & Pipelines",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[{label:"ai-april",permalink:"/hubv2/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hubv2/blog/tags/ml-developers"},{label:"azure-ml",permalink:"/hubv2/blog/tags/azure-ml"},{label:"data-scientist",permalink:"/hubv2/blog/tags/data-scientist"}],readingTime:2.455,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl @beastollnitz",url:"https://github.com/bstollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"2023-day17",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Streamlining ML Development with Azure ML Components & Pipelines"},prevItem:{title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",permalink:"/hubv2/blog/2023-day16"},nextItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/hubv2/blog/2023-day18"}},s={authorsImageUrls:[void 0]},p=[{value:"Day <em>17</em> of #30DaysOfAzureAI",id:"day-17-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"twitter:url",content:"https://aka.ms/ai-april/2023-day17"}),(0,i.kt)("meta",{name:"twitter:title",content:"Streamline Model Dev with Azure ML"}),(0,i.kt)("meta",{name:"twitter:description",content:"Streamlining ML Development with Azure ML Components & Pipelines"}),(0,i.kt)("meta",{name:"twitter:image",content:"https://aka.ms/ai-april/2023-day17/banner.png"}),(0,i.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,i.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,i.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-pipeline/"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/17-streamline-model-dev-with-azure-ml"},"Ask a question about this post on GitHub Discussions"))),(0,i.kt)("h2",{id:"day-17-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"17")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Streamlining ML Development with Azure ML Components & Pipelines")),(0,i.kt)("p",null,"Take your machine learning projects to new heights with Azure ML components and pipelines! Learn how to break down code, connect components, and use the CLI or Python SDK. Organize work into two steps with Azure ML components and boost accuracy with frequent testing. Get started with detailed examples and enjoy logging support from the MLflow API. Unleash the full potential of your machine learning projects with this informative article."),(0,i.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Azure ML components and pipelines can help organize machine learning projects."),(0,i.kt)("li",{parentName:"ol"},"Two GitHub repositories are available for working with components and pipelines using the CLI or Python SDK."),(0,i.kt)("li",{parentName:"ol"},"The MLflow API provides logging support, and the authors encourage frequent testing to streamline the machine learning process.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty Banner Placeholder",src:n(44878).Z,width:"834",height:"350"})),(0,i.kt)("p",null,"This article discusses the benefits of Azure ML components and pipelines in machine learning. It explains how to break down training code into components and connect those components into a pipeline. The author provides two GitHub repositories to illustrate how to work with pipelines and components using the CLI and the Python SDK. The article also emphasizes the importance of organizing work into two steps, i.e., a training step and a test step."),(0,i.kt)("p",null,"The author also discusses creating Azure ML components as reusable pieces of code with inputs and outputs, which can be defined in their Python file. Inputs and outputs are specified as command-line arguments. The author further highlights that components can help maintain separation in the cloud by organizing training code into two steps with distinct logic. Lastly, the article provides an example of a train component specification that shows the names of the input and output in the component YAML specification match the names of the arguments in the code."),(0,i.kt)("p",null,"The article emphasizes the importance of testing the code frequently to ensure it executes and provides accurate results. It also recommends using the MLflow API because of the great logging support it provides."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(10163).Z,width:"3000",height:"1557"})),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"To learn more, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-pipeline/"},"article"),"."))}u.isMDXComponent=!0},44878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-ad449113924bfa3d25fa20d2af0a2cd9.png"},10163:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-be3fc8bf4716c04cb23e2e27c5dd6ac9.png"}}]);