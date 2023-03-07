"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9732],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,b=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?i.createElement(b,n(n({ref:t},u),{},{components:a})):i.createElement(b,n({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const o={slug:"2023-day6",title:"6. \ud83c\udfc1The Mission of Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day6.png",description:"Why you should care about Responsible AI and Microsoft role"},n=void 0,s={permalink:"/hub/blog/2023-day6",source:"@site/blog/2023-aia/2023-04-07-rai-mission/index.md",title:"6. \ud83c\udfc1The Mission of Responsible AI",description:"Why you should care about Responsible AI and Microsoft role",date:"2023-04-07T00:00:00.000Z",formattedDate:"April 7, 2023",tags:[{label:"azure-ai",permalink:"/hub/blog/tags/azure-ai"},{label:"responsible-ai",permalink:"/hub/blog/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/hub/blog/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/blog/tags/ml-developers"},{label:"app-developers",permalink:"/hub/blog/tags/app-developers"}],readingTime:2.08,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate @ruthieyakubu",url:"https://github.com/ruyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"2023-day6",title:"6. \ud83c\udfc1The Mission of Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers"],image:"https://azureaidevs.github.io/hub/img/2023/banner-day6.png",description:"Why you should care about Responsible AI and Microsoft role"},prevItem:{title:"5. \ud83c\udfc1Learn key Azure ML Concepts",permalink:"/hub/blog/2023-day5"},nextItem:{title:"7. \ud83c\udfc1Accessible AI Apps for Everyone",permalink:"/hub/blog/2023-day7"}},l={authorsImageUrls:[void 0]},c=[{value:"Day <em>6</em> of #30DaysOfAzureAI",id:"day-6-of-30daysofazureai",level:2},{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"References",id:"references",level:3},{value:"Why Responsible AI?",id:"why-responsible-ai",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Questions?",id:"questions",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://azureaidevs.github.io/hub/ai-april/2023-day6"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/Low-Code/subscribe"},"Subscribe to the Azure AI Developer Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udccc ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/6-the-mission-of-responsible-ai"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"day-6-of-30daysofazureai"},"Day ",(0,r.kt)("em",{parentName:"h2"},"6")," of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why you should care about Responsible AI and Microsoft role")),(0,r.kt)("p",null,"Microsoft approaches AI development and deployment with a focus on fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. Microsoft is dedicated to developing AI responsively and invests in research, collaborating with multiple disciplines to deliver cutting-edge advancements in AI, such as large-scale AI models that are sophisticated, intuitive, and based on deep learning and large datasets."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Microsoft takes fairness, reliability, and other values into account when developing AI. "),(0,r.kt)("li",{parentName:"ol"},"The company collaborates across disciplines to advance AI through research, creating more sophisticated, intuitive AI models. "),(0,r.kt)("li",{parentName:"ol"},"Microsoft is responsible and purposeful in its approach to AI development and deployment, taking into account the risks and benefits of the technology.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image shows authors and product icons",src:a(28729).Z,width:"834",height:"350"})),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.microsoft.com/source/features/ai/microsoft-approach-to-ai/#using-ai-responsibly?WT.mc_id=aiml-89446-cxall"},"Microsoft's approach to using AI responsibly"))),(0,r.kt)("h2",{id:"why-responsible-ai"},"Why Responsible AI?"),(0,r.kt)("p",null,"Microsoft is investing heavily in AI because it believes that it can benefit everyone at every level of every organization. However, Microsoft acknowledges the need for responsible AI by design, guided by a set of principles: fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. Microsoft believes that proactive, self-regulatory efforts by responsible companies help pave the way for new laws to ensure that AI is developed and deployed responsibly. Microsoft also believes that democratic law-making processes are necessary to create principled and actionable norms that ensure organizations develop and deploy AI responsibly."),(0,r.kt)("p",null,"Microsoft Research has been advancing the foundations of computing for over 30 years, and its researchers collaborate across disciplines, institutions, and geographies to deliver cutting-edge AI advances. Recent efforts have focused on developing large-scale AI models that can process information in increasingly sophisticated ways while also becoming more natural and intuitive to use. Advances in deep learning, coupled with internet-scale datasets and Microsoft Azure's increasingly powerful AI supercomputing resources, have made it possible to create AI models that perform a broad range of tasks across many different applications."),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/6-the-mission-of-responsible-ai"},"Remember, you can ask a question about this post on GitHub Discussions")))}p.isMDXComponent=!0},28729:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-35ca83493f1bcd4070a47d5df4909763.png"}}]);