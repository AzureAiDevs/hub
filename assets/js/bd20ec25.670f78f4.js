"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},52171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={slug:"2023-day6",title:"6. \ud83e\uddeeGuide to Responsible AI (Part 1)",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Get started with Azure Machine Learning Responsible AI components (Part 1)"},o=void 0,s={permalink:"/hubv2/blog/2023-day6",source:"@site/blog/2023-aia/2023-04-07-rai-part-1/index.md",title:"6. \ud83e\uddeeGuide to Responsible AI (Part 1)",description:"Get started with Azure Machine Learning Responsible AI components (Part 1)",date:"2023-04-07T00:00:00.000Z",formattedDate:"April 7, 2023",tags:[{label:"azure-ai",permalink:"/hubv2/blog/tags/azure-ai"},{label:"responsible-ai",permalink:"/hubv2/blog/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/hubv2/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hubv2/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hubv2/blog/tags/app-developers"}],readingTime:2.835,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate @ruthieyakubu",url:"https://github.com/ruyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day6",title:"6. \ud83e\uddeeGuide to Responsible AI (Part 1)",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://microsoft.github.io/Low-Code/img/og/30-01.png",description:"Get started with Azure Machine Learning Responsible AI components (Part 1)"},prevItem:{title:"5. \ud83e\uddeeLearn key Azure ML Concepts",permalink:"/hubv2/blog/2023-day5"},nextItem:{title:"7. \ud83e\uddeeAI for Accessibility",permalink:"/hubv2/blog/2023-day7"}},l={authorsImageUrls:[void 0]},p=[{value:"Day <em>6</em> of #30DaysOfAzureAI",id:"day-6-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is Responsible AI Dashboard?",id:"what-is-responsible-ai-dashboard",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://aka.ms/ai-april/2023-day6"}),(0,n.kt)("meta",{name:"twitter:title",content:"Guide to Responsible AI (Part 1)"}),(0,n.kt)("meta",{name:"twitter:description",content:"Get started with Azure Machine Learning Responsible AI components (Part 1)"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://aka.ms/ai-april/2023-day6/banner.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"dglover"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/6-guide-to-responsible-ai-(part-1)"},"Ask a question about this post on GitHub Discussions"))),(0,n.kt)("h2",{id:"day-6-of-30daysofazureai"},"Day ",(0,n.kt)("em",{parentName:"h2"},"6")," of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Get started with Azure Machine Learning Responsible AI components (Part 1)")),(0,n.kt)("p",null,"The Responsible AI (RAI) Dashboard is a set of open-source tools for creating responsible AI models available on the Azure Machine Learning platform. It includes components for data analysis, model troubleshooting, fairness evaluation, and causal relationship exploration. To use the RAI Dashboard, a user needs an Azure Machine Learning workspace and can refer to a tutorial using the Diabetes Hospital Readmission dataset. "),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The RAI Dashboard is a suite of open-source tools for responsible AI development, including features like model interpretability, error analysis, and counterfactual analysis."),(0,n.kt)("li",{parentName:"ul"},"The RAI Dashboard is accessible via the Azure Machine Learning platform."),(0,n.kt)("li",{parentName:"ul"},"RAI components help ML engineers and decision-makers improve AI responsibility.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Empty Banner Placeholder",src:a(7540).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"what-is-responsible-ai-dashboard"},"What is Responsible AI Dashboard?"),(0,n.kt)("p",null,"The Responsible AI (RAI) Dashboard is a suite of open-source tools that help developers create responsible AI models with features such as model statistics, data explorer, error analysis, model interpretability, counterfactual analysis, and causal inference. The dashboard is built on leading open-source tools such as ErrorAnalysis, InterpretML, Fairlearn, DiCE, and EconML, and it can be accessed through the Azure Machine Learning platform. The RAI components allow developers to troubleshoot and analyze models and make better decisions to produce more responsible AI systems."),(0,n.kt)("p",null,"InterpretML, Fairlearn, DiCE, and EconML are some of the open-source tools that power the RAI dashboard. InterpretML provides data scientists and AI developers access to state-of-the-art glassbox and opaquebox interpretability models, helping them better understand how their models are making predictions. Fairlearn helps identify fairness issues and covers a set of state-of-the-art mitigation algorithms to address them. DiCE outputs counterfactual datapoints that are similar to the input but with different outcomes, helping ML engineers and business decision-makers generate alternative datapoints. EconML helps business decision-makers explore causal relationships between factors and real-world outcomes."),(0,n.kt)("p",null,"The RAI dashboard is available as part of the Responsible AI Toolbox via open source or in the Azure Machine Learning platform. It allows ML engineers to analyze models and make better decisions to produce more responsible AI systems. The dashboard can be accessed through the Azure Machine Learning platform, eliminating the need to use open-source libraries separately to troubleshoot model performance, reliability, or fairness in disparate code instances. The tutorial walks users through creating an Azure Machine Learning workspace and using RAI components for further analysis and debugging of a model trained on the Diabetes Hospital Readmission dataset."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"To learn more, check out this ",(0,n.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"article"),"."))}u.isMDXComponent=!0},7540:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-fab0d2790d184c4c51436f1776888485.png"}}]);