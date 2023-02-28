"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1436],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(r),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(k,i(i({ref:e},c),{},{components:r})):n.createElement(k,i({ref:e},c))}));function k(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31476:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1,title:"1. Getting Started"},i=void 0,l={unversionedId:"prodev-2/step-1",id:"prodev-2/step-1",title:"1. Getting Started",description:"You will import the current solution and use this to start your work. You will also add a column to a table and modifying the app to use it. You will also configure and test the Power Platform CLI.",source:"@site/docs/prodev-2/step-1.md",sourceDirName:"prodev-2",slug:"/prodev-2/step-1",permalink:"/hubv2/docs/prodev-2/step-1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"1. Getting Started"},sidebar:"tutorialSidebar",previous:{title:"2. Install VS Code & Extension",permalink:"/hubv2/docs/prodev-1/step-2"},next:{title:"2. Run Flow",permalink:"/hubv2/docs/prodev-2/step-2"}},s={},p=[{value:"1.1 Import starting solution",id:"11-import-starting-solution",level:2}],c={toc:p};function m(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"LAB SCENARIO",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You will import the current solution and use this to start your work. You will also add a column to a table and modifying the app to use it. You will also configure and test the Power Platform CLI."),(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("strong",{parentName:"p"},"Exercise 1")," you will import a solution into your dev environment.  This solution contains the current version of the PrioritZ apps, flows and Dataverse tables.")),(0,o.kt)("h2",{id:"11-import-starting-solution"},"1.1 Import starting solution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april/makerportal"},(0,o.kt)("strong",{parentName:"a"},"Maker Portal"))," and make sure the development environment is selected."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Solutions")," and click ",(0,o.kt)("strong",{parentName:"li"},"Import solution"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-01 Image",src:r(26273).Z,width:"628",height:"297"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Browse"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the lab resources folder, select the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Low-Code/blob/main/resources/workshops/Dev%20in%20a%20day/lab01/Prioritz_1_0_0_7.zip"},(0,o.kt)("strong",{parentName:"a"},"PrioritZ_solution.zip"))," file, and click ",(0,o.kt)("strong",{parentName:"p"},"Open"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-01 Image",src:r(49613).Z,width:"459",height:"208"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next")," again."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Select a connection")," dropdown and the select + ",(0,o.kt)("strong",{parentName:"li"},"New connection"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-01 Image",src:r(99885).Z,width:"514",height:"237"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Sign in if prompted."),(0,o.kt)("li",{parentName:"ol"},"Close the connections browser window or tab."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Refresh"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Import")," and wait for the solution import to complete.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lab-01 Image",src:r(50855).Z,width:"921",height:"274"})," "),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"You should now see the solution you imported in the list of solutions.")),(0,o.kt)("p",null,"\ud83d\udea8 Note: Do not navigate away from this page."))}m.isMDXComponent=!0},26273:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/lab01-01-9bff1206779152a9872e75444c530f60.png"},49613:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/lab01-02-e7fb82ca09ac9e4acac31523e540d879.png"},99885:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/lab01-03-379defa06283c31d1e3f900c09792012.png"},50855:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/lab01-04-71184bd91af8b591d79eaee43c236200.png"}}]);