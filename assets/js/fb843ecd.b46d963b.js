"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,p=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return a?r.createElement(p,i(i({ref:t},d),{},{components:a})):r.createElement(p,i({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={slug:"2023-day16",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day16.png",description:"Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/blog/2023-day16 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},i=void 0,l={permalink:"/hub/blog/2023-day16",source:"@site/blog/2023-aia/2023-04-17-inside-azureml-train-deploy/index.md",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",description:"Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/blog/2023-day16 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML",date:"2023-04-17T00:00:00.000Z",formattedDate:"April 17, 2023",tags:[{label:"ai-april",permalink:"/hub/blog/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"azure-ml",permalink:"/hub/blog/tags/azure-ml"},{label:"data-scientist",permalink:"/hub/blog/tags/data-scientist"}],readingTime:3.005,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl @beastollnitz",url:"https://github.com/bstollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"2023-day16",title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day16.png",description:"Azure ML: Train and Deploy ML Models at Scale https://azureaidevs.github.io/hub/blog/2023-day16 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},prevItem:{title:"15. \ud83e\uddd1\u200d\ud83d\udcbbRecap: Azure AI App Developers\u2728",permalink:"/hub/blog/2023-day15"},nextItem:{title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",permalink:"/hub/blog/2023-day17"}},s={authorsImageUrls:[void 0]},u=[{value:"Day <em>16</em> of #30DaysOfAzureAI",id:"day-16-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-command"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/16-scaling-model-dev-with-azure-ml"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-16-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"16")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Azure ML: Train and Deploy ML Models at Scale")),(0,n.kt)("p",null,"This article teaches how to train and deploy machine learning models using Azure ML. It outlines the advantages of using Azure ML and provides three methods of performing tasks: using the CLI, Python SDK, or Studio UI. The article includes two GitHub repos and uses the open-source MLflow framework to run the training code and save the model. The author provides commands to test the model on the dev machine and uses the Fashion MNIST dataset as an example. The article emphasizes the importance of testing code before deploying to the cloud. A valuable resource for ML model training and deployment with Azure ML."),(0,n.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,n.kt)("p",null,"The three main bullet points of this article are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Outlines the advantages of training models in the cloud using Azure ML"),(0,n.kt)("li",{parentName:"ol"},"Provides three methods for working with Azure ML: Azure ML CLI, Python SDK, and Studio UI"),(0,n.kt)("li",{parentName:"ol"},"Covers the use of the open-source MLflow framework to run training code and save the model, with commands to test the model on a dev machine. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 16",src:a(98255).Z,width:"834",height:"350"})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,n.kt)("p",null,"This article discusses how to train and deploy machine learning models using Azure ML. The article outlines the advantages of training and deploying models in the cloud, which include the ability to handle larger datasets and models and the ability to scale to many more inference requests. The article provides three ways to perform tasks using Azure ML: using the Azure ML CLI, the Python SDK, or the Studio UI. Two GitHub repositories are included to help readers train and deploy models using the Azure ML CLI and the Python SDK."),(0,n.kt)("p",null,"The article then shows how to run the training code and save the model using the open-source MLflow framework, which allows for easy visualization of metrics and testing of the trained model. The author also includes commands to invoke the trained model on the dev machine for testing purposes. The article uses the Fashion MNIST dataset as an example and recommends testing code on the development machine first to reduce overhead before moving to the cloud."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-command"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/16-scaling-model-dev-with-azure-ml"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},98255:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day16-b3733e2355a538c43d84c922b864ac93.png"}}]);