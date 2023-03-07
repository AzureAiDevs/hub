"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const s={slug:"2023-day6",title:"6. \ud83c\udfc1Debug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day6.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1)"},i=void 0,o={permalink:"/hub/blog/2023-day6",source:"@site/blog/2023-aia/2023-04-07-rai-part-1/index.md",title:"6. \ud83c\udfc1Debug models w/ Responsible AI",description:"Guide to analyzing ML models for Responsible AI issues (Part 1)",date:"2023-04-07T00:00:00.000Z",formattedDate:"April 7, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:2.975,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate @ruthieyakubu",url:"https://github.com/ruyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day6",title:"6. \ud83c\udfc1Debug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day6.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1)"},prevItem:{title:"5. \ud83c\udfc1Learn key Azure ML Concepts",permalink:"/hub/blog/2023-day5"},nextItem:{title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",permalink:"/hub/blog/2023-day7"}},l={authorsImageUrls:[void 0]},u=[{value:"Day <em>6</em> of #30DaysOfAzureAI",id:"day-6-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is Responsible AI Dashboard?",id:"what-is-responsible-ai-dashboard",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],p={toc:u};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/ai-april/2023-day6"}),(0,n.kt)("meta",{name:"twitter:title",content:"Debug models w/ Responsible AI"}),(0,n.kt)("meta",{name:"twitter:description",content:"Guide to analyzing ML models for Responsible AI issues (Part 1)"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/hub/img/2023/banner-day6.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/6-debug-models-w/-responsible-ai"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"day-6-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"6")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Guide to analyzing ML models for Responsible AI issues (Part 1)")),(0,n.kt)("p",null,"The Responsible AI (RAI) Dashboard is a set of open-source tools for creating responsible AI models available on the Azure Machine Learning platform. It includes components for data analysis, model troubleshooting, fairness evaluation, and causal relationship exploration. To use the RAI Dashboard, a user needs an Azure Machine Learning workspace and can refer to a tutorial using the Diabetes Hospital Readmission dataset. "),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The RAI Dashboard is a suite of open-source tools for responsible AI development, including features like model interpretability, error analysis, and counterfactual analysis."),(0,n.kt)("li",{parentName:"ul"},"The RAI Dashboard is accessible via the Azure Machine Learning platform."),(0,n.kt)("li",{parentName:"ul"},"RAI components help ML engineers and decision-makers improve AI responsibility.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Panel shows authors and product icons",src:a(79778).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"what-is-responsible-ai-dashboard"},"What is Responsible AI Dashboard?"),(0,n.kt)("p",null,"The Responsible AI (RAI) Dashboard is a suite of open-source tools that help developers create responsible AI models with features such as model statistics, data explorer, error analysis, model interpretability, counterfactual analysis, and causal inference. The dashboard is built on leading open-source tools such as ErrorAnalysis, InterpretML, Fairlearn, DiCE, and EconML, and it can be accessed through the Azure Machine Learning platform. The RAI components allow developers to troubleshoot and analyze models and make better decisions to produce more responsible AI systems."),(0,n.kt)("p",null,"InterpretML, Fairlearn, DiCE, and EconML are some of the open-source tools that power the RAI dashboard. InterpretML provides data scientists and AI developers access to state-of-the-art glassbox and opaquebox interpretability models, helping them better understand how their models are making predictions. Fairlearn helps identify fairness issues and covers a set of state-of-the-art mitigation algorithms to address them. DiCE outputs counterfactual datapoints that are similar to the input but with different outcomes, helping ML engineers and business decision-makers generate alternative datapoints. EconML helps business decision-makers explore causal relationships between factors and real-world outcomes."),(0,n.kt)("p",null,"The RAI dashboard is available as part of the Responsible AI Toolbox via open source or in the Azure Machine Learning platform. It allows ML engineers to analyze models and make better decisions to produce more responsible AI systems. The dashboard can be accessed through the Azure Machine Learning platform, eliminating the need to use open-source libraries separately to troubleshoot model performance, reliability, or fairness in disparate code instances. The tutorial walks users through creating an Azure Machine Learning workspace and using RAI components for further analysis and debugging of a model trained on the Diabetes Hospital Readmission dataset."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"article"),"."),(0,n.kt)("h2",{id:"questions"},"Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/6-debug-models-w/-responsible-ai"},"Remember, you can ask a question about this post on GitHub Discussions")))}c.isMDXComponent=!0},79778:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-51038124e89c43a3390429593c1d0092.png"}}]);