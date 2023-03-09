"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,b=c["".concat(l,".").concat(h)]||c[h]||d[h]||n;return a?r.createElement(b,s(s({ref:t},p),{},{components:a})):r.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<n;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={slug:"2023-day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers","machine-learning-debugging-tools","responsible-ai-tools"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day19.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/hub/blog/2023-day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"},s=void 0,o={permalink:"/hub/blog/2023-day19",source:"@site/blog/2023-aia/2023-04-20-rai-part-1/index.md",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/hub/blog/2023-day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics",date:"2023-04-20T00:00:00.000Z",formattedDate:"April 20, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"},{label:"machine-learning-debugging-tools",permalink:"/hub/blog/tags/machine-learning-debugging-tools"},{label:"responsible-ai-tools",permalink:"/hub/blog/tags/responsible-ai-tools"}],readingTime:3.45,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate",url:"https://github.com/ruyakubu",tag:"@ruthieyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers","machine-learning-debugging-tools","responsible-ai-tools"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day19.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/hub/blog/2023-day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"},prevItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/hub/blog/2023-day18"},nextItem:{title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cLearn MLOps for the ML Lifecycle",permalink:"/hub/blog/2023-day20"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>19</em> of #30DaysOfAzureAI",id:"day-19-of-30daysofazureai",level:2},{value:"What we&#39;ll cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"What is Responsible AI Dashboard?",id:"what-is-responsible-ai-dashboard",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/hub/blog/2023-day19"}),(0,i.kt)("meta",{property:"og:title",content:"Debug models w/ Responsible AI"}),(0,i.kt)("meta",{property:"og:description",content:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/hub/blog/2023-day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics"}),(0,i.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day19.png"}),(0,i.kt)("meta",{property:"og:type",content:"article"}),(0,i.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,i.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Sign up for the Azure AI Developer Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcf0 ",(0,i.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/blog/rss.xml"},"Subscribe to the #30DaysOfAzureAI RSS feed")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/19-debug-models-w/-responsible-ai"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"day-19-of-30daysofazureai"},"Day ",(0,i.kt)("em",{parentName:"h2"},"19")," of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Guide to analyzing ML models for Responsible AI issues (Part 1)")),(0,i.kt)("p",null,'Yesterday we learned how to deploy ML models using Azure ML managed online endpoints. In the "Fundamentals" week we learned about the importance of Responsible AI. Today, we get practical, you\'ll learn about the Azure ML Responsible AI Dashboard and how it can help you build fairer ML models.'),(0,i.kt)("h2",{id:"what-well-cover"},"What we'll cover"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The RAI Dashboard is a suite of open-source tools for responsible AI development, including features like model interpretability, error analysis, and counterfactual analysis."),(0,i.kt)("li",{parentName:"ul"},"The RAI Dashboard is accessible via the Azure Machine Learning platform."),(0,i.kt)("li",{parentName:"ul"},"RAI components help ML engineers and decision-makers improve AI responsibility.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 19",src:a(37603).Z,width:"834",height:"350"})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.microsoft.com/source/features/ai/microsoft-approach-to-ai/#using-ai-responsibly?WT.mc_id=aiml-89446-dglover"},"Microsoft's approach to using AI responsibly")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.microsoft.com/on-the-issues/2023/02/02/responsible-ai-chatgpt-artificial-intelligence?WT.mc_id=aiml-89446-dglover"},"Meeting the AI moment: advancing the future through responsible AI"))),(0,i.kt)("h2",{id:"what-is-responsible-ai-dashboard"},"What is Responsible AI Dashboard?"),(0,i.kt)("p",null,"The Responsible AI (RAI) Dashboard is a suite of open-source tools that help developers create responsible AI models with features such as model statistics, data explorer, error analysis, model interpretability, counterfactual analysis, and causal inference. The dashboard is built on leading open-source tools such as ErrorAnalysis, InterpretML, Fairlearn, DiCE, and EconML, and it can be accessed through the Azure Machine Learning platform. The RAI components allow developers to troubleshoot and analyze models and make better decisions to produce more responsible AI systems."),(0,i.kt)("p",null,"InterpretML, Fairlearn, DiCE, and EconML are some of the open-source tools that power the RAI dashboard. InterpretML provides data scientists and AI developers access to state-of-the-art glassbox and opaquebox interpretability models, helping them better understand how their models are making predictions. Fairlearn helps identify fairness issues and covers a set of state-of-the-art mitigation algorithms to address them. DiCE outputs counterfactual datapoints that are similar to the input but with different outcomes, helping ML engineers and business decision-makers generate alternative datapoints. EconML helps business decision-makers explore causal relationships between factors and real-world outcomes."),(0,i.kt)("p",null,"The RAI dashboard is available as part of the Responsible AI Toolbox via open source or in the Azure Machine Learning platform. It allows ML engineers to analyze models and make better decisions to produce more responsible AI systems. The dashboard can be accessed through the Azure Machine Learning platform, eliminating the need to use open-source libraries separately to troubleshoot model performance, reliability, or fairness in disparate code instances. The tutorial walks users through creating an Azure Machine Learning workspace and using RAI components for further analysis and debugging of a model trained on the Diabetes Hospital Readmission dataset."),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"To learn more, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"article"),"."),(0,i.kt)("h2",{id:"questions"},"Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/19-debug-models-w/-responsible-ai"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},37603:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day19-5a1412d792726cee1bfe955224d657ed.png"}}]);