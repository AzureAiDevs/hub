"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6482],{4137:(A,o,t)=>{t.d(o,{Zo:()=>R,kt:()=>F});var e=t(7294);function i(A,o,t){return o in A?Object.defineProperty(A,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[o]=t,A}function n(A,o){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(A,o).enumerable}))),t.push.apply(t,e)}return t}function r(A){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){i(A,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(A,o,Object.getOwnPropertyDescriptor(t,o))}))}return A}function a(A,o){if(null==A)return{};var t,e,i=function(A,o){if(null==A)return{};var t,e,i={},n=Object.keys(A);for(e=0;e<n.length;e++)t=n[e],o.indexOf(t)>=0||(i[t]=A[t]);return i}(A,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(e=0;e<n.length;e++)t=n[e],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var K=e.createContext({}),w=function(A){var o=e.useContext(K),t=o;return A&&(t="function"==typeof A?A(o):r(r({},o),A)),t},R=function(A){var o=w(A.components);return e.createElement(K.Provider,{value:o},A.children)},l="mdxType",P={inlineCode:"code",wrapper:function(A){var o=A.children;return e.createElement(e.Fragment,{},o)}},f=e.forwardRef((function(A,o){var t=A.components,i=A.mdxType,n=A.originalType,K=A.parentName,R=a(A,["components","mdxType","originalType","parentName"]),l=w(t),f=i,F=l["".concat(K,".").concat(f)]||l[f]||P[f]||n;return t?e.createElement(F,r(r({ref:o},R),{},{components:t})):e.createElement(F,r({ref:o},R))}));function F(A,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof A||i){var n=t.length,r=new Array(n);r[0]=f;var a={};for(var K in o)hasOwnProperty.call(o,K)&&(a[K]=o[K]);a.originalType=A,a[l]="string"==typeof A?A:i,r[1]=a;for(var w=2;w<n;w++)r[w]=t[w];return e.createElement.apply(null,r)}return e.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6672:(A,o,t)=>{t.r(o),t.d(o,{assets:()=>K,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>w});var e=t(7462),i=(t(7294),t(4137));const n={sidebar_position:1,title:"4. Register App"},r=void 0,a={unversionedId:"prodev-5/step-5",id:"prodev-5/step-5",title:"4. Register App",description:"Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new \u201cask\u201d to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector.",source:"@site/docs/prodev-5/step-5.md",sourceDirName:"prodev-5",slug:"/prodev-5/step-5",permalink:"/hubv2/docs/prodev-5/step-5",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"4. Register App"},sidebar:"tutorialSidebar",previous:{title:"3. Publish to Azure (2)",permalink:"/hubv2/docs/prodev-5/step-4"},next:{title:"5. Create Custom Connector",permalink:"/hubv2/docs/prodev-5/step-6"}},K={},w=[{value:"4.1 Register Connector Client app",id:"41-register-connector-client-app",level:2}],R={toc:w};function l(A){let{components:o,...n}=A;return(0,i.kt)("wrapper",(0,e.Z)({},R,n,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"LAB SCENARIO",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Working as part of the PrioritZ fusion team you will be configuring a custom connector for a new API you build using Azure Functions. The team has decided to move the logic when a user creates a new \u201cask\u201d to the Azure Function API. This will keep the Power App formula simple and allow more complex logic to be added in the future. In this lab you will create the function, use the Dataverse API, secure the API with Azure AD, configure a custom connector to use the API, and change the Power App to use the connector."),(0,i.kt)("p",{parentName:"admonition"},"Note: This lab requires an Azure subscription (or trial) in the ",(0,i.kt)("strong",{parentName:"p"},"same tenant")," as your Dataverse environment."),(0,i.kt)("p",{parentName:"admonition"},"In ",(0,i.kt)("strong",{parentName:"p"},"Exercise 4")," you will deploy the function to Azure.")),(0,i.kt)("admonition",{title:"Important",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This lab requires an \ud83c\udd70\ufe0f",(0,i.kt)("strong",{parentName:"p"},"Azure subscription (or trial)")," in the ",(0,i.kt)("strong",{parentName:"p"},"same tenant")," as your Dataverse environment.")),(0,i.kt)("h2",{id:"41-register-connector-client-app"},"4.1 Register Connector Client app"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Portal")," menu and select ",(0,i.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"App registrations")," and click ",(0,i.kt)("strong",{parentName:"li"},"+ New registration"),". This application registration will be used for the connector to access the protected API."),(0,i.kt)("li",{parentName:"ol"},"Enter ",(0,i.kt)("inlineCode",{parentName:"li"},"PrioritZConnector <Initials>")," for Name, select ",(0,i.kt)("strong",{parentName:"li"},"Accounts in this organizational directory only"),", select ",(0,i.kt)("strong",{parentName:"li"},"Web")," for Redirect URI, enter ",(0,i.kt)("inlineCode",{parentName:"li"},"https://global.consent.azure-apim.net/redirect")," and click ",(0,i.kt)("strong",{parentName:"li"},"Register"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lab-04 Image",src:t(7344).Z,width:"504",height:"362"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Copy the ",(0,i.kt)("strong",{parentName:"li"},"Application (client) ID")," and keep it in a notepad as ",(0,i.kt)("strong",{parentName:"li"},"PrioritZFL Connector application ID"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lab-04 Image",src:t(8824).Z,width:"484",height:"106"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Certificates & Secrets")," and click ",(0,i.kt)("strong",{parentName:"li"},"+ New client secret"),"."),(0,i.kt)("li",{parentName:"ol"},"Provide a description, select ",(0,i.kt)("strong",{parentName:"li"},"3 months"),", and click ",(0,i.kt)("strong",{parentName:"li"},"Add"),". "),(0,i.kt)("li",{parentName:"ol"},"Copy the secret ",(0,i.kt)("strong",{parentName:"li"},"Value")," and keep it on a notepad as ",(0,i.kt)("strong",{parentName:"li"},"PrioritZFL Connector Secret"),"."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"API permissions")," and click ",(0,i.kt)("strong",{parentName:"li"},"+ Add a permission"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lab-04 Image",src:t(3191).Z,width:"442",height:"179"})),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"My APIs")," tab and select ",(0,i.kt)("strong",{parentName:"li"},"PrioritZFL"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lab-04 Image",src:t(3438).Z,width:"435",height:"207"})),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"Check the ",(0,i.kt)("strong",{parentName:"li"},"user_impersonation")," checkbox and click ",(0,i.kt)("strong",{parentName:"li"},"Add permission"),".")))}l.isMDXComponent=!0},7344:(A,o,t)=>{t.d(o,{Z:()=>e});const e=t.p+"assets/images/lab04 (38)-0580401246311520ba7bd410ce63d047.jpg"},8824:(A,o,t)=>{t.d(o,{Z:()=>e});const e="data:image/jpeg;base64,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"},3191:(A,o,t)=>{t.d(o,{Z:()=>e});const e=t.p+"assets/images/lab04 (40)-9fec853da4326a0660192c2ad5599a99.jpg"},3438:(A,o,t)=>{t.d(o,{Z:()=>e});const e="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCADPAbMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDtvCfhPw/c+DtFmn0LS5ZZLCB3kezjZmYxqSSSOSTWt/whnhr/AKF7SP8AwCi/+Jo8Gf8AIkaD/wBg63/9FrW1QBi/8IZ4a/6F7SP/AACi/wDiaP8AhDPDX/QvaR/4BRf/ABNbVFAGL/whnhr/AKF7SP8AwCi/+Jo/4Qzw1/0L2kf+AUX/AMTW1RQBi/8ACGeGv+he0j/wCi/+Jo/4Qzw1/wBC9pH/AIBRf/E1tUUAYv8Awhnhr/oXtI/8Aov/AImj/hDPDX/QvaR/4BRf/E1tUUAYv/CGeGv+he0j/wAAov8A4mj/AIQzw1/0L2kf+AUX/wATW1RQBi/8IZ4a/wChe0j/AMAov/iaP+EM8Nf9C9pH/gFF/wDE1tUUAYv/AAhnhr/oXtI/8Aov/iaP+EM8Nf8AQvaR/wCAUX/xNbVFAGL/AMIZ4a/6F7SP/AKL/wCJo/4Qzw1/0L2kf+AUX/xNbVFAGL/whnhr/oXtI/8AAKL/AOJo/wCEM8Nf9C9pH/gFF/8AE1tUUAYv/CGeGv8AoXtI/wDAKL/4mj/hDPDX/QvaR/4BRf8AxNbVFAGL/wAIZ4a/6F7SP/AKL/4mj/hDPDX/AEL2kf8AgFF/8TW1RQBi/wDCGeGv+he0j/wCi/8AiaP+EM8Nf9C9pH/gFF/8TW1RQBi/8IZ4a/6F7SP/AACi/wDiaP8AhDPDX/QvaR/4BRf/ABNbVFAGL/whnhr/AKF7SP8AwCi/+Jo/4Qzw1/0L2kf+AUX/AMTW1RQBi/8ACGeGv+he0j/wCi/+Jo/4Qzw1/wBC9pH/AIBRf/E1tUUAYv8Awhnhr/oXtI/8Aov/AImj/hDPDX/QvaR/4BRf/E1tUUAYv/CGeGv+he0j/wAAov8A4mj/AIQzw1/0L2kf+AUX/wATW1RQBi/8IZ4a/wChe0j/AMAov/iaP+EM8Nf9C9pH/gFF/wDE1tUUAYv/AAhnhr/oXtI/8Aov/iaP+EM8Nf8AQvaR/wCAUX/xNbVFAGL/AMIZ4a/6F7SP/AKL/wCJo/4Qzw1/0L2kf+AUX/xNbVFAGL/whnhr/oXtI/8AAKL/AOJo/wCEM8Nf9C9pH/gFF/8AE1tUUAYv/CGeGv8AoXtI/wDAKL/4mj/hDPDX/QvaR/4BRf8AxNbVFAGL/wAIZ4a/6F7SP/AKL/4mj/hDPDX/AEL2kf8AgFF/8TW1RQBi/wDCGeGv+he0j/wCi/8AiaP+EM8Nf9C9pH/gFF/8TW1RQBi/8IZ4a/6F7SP/AACi/wDiaP8AhDPDX/QvaR/4BRf/ABNbVFAGL/whnhr/AKF7SP8AwCi/+Jo/4Qzw1/0L2kf+AUX/AMTW1RQB8v8AxSsrbT/iLqltZW8Ntbp5W2KFAiLmJCcAcDkk0VP8Xf8Akp2r/wDbH/0SlFAHv/gz/kSNB/7B1v8A+i1rRvb2OxjRpA7tIwSONBlnb0Hbt3rO8Gf8iRoP/YOt/wD0WtWtZitprILdxXDx7wQ0AYvG3Zht5GPagCeK8DWzT3Eb2iqfmE5UY98gkY/GmSajEt1ZxR4kW7LbZEYFRhc/jXPzxahPZWzTSXT28F2SJGtw0rR7cKzRkc4Y+mehxUtvp0kcti1o1w6tLcSGSSHy9haPA+XA2jPtQB0UdzBLK8Uc0byR/fRWBK/UdqrXms2NjbzzS3MREGPMVXBZTnGCM1zunaXO0EarNdx6hBbyIFe1EahyuDmQL8wzz1PrVqeGK68Mz2lrp8qXCQKGR7cqSQRkZIwx4PTNAHRpNHJEJY5EaMjIdTkEfWmRXltNEZYriJ4wcF1cEA+maq3k7DRJZrK180+XlIXjIz7FTg/hXNyWM9zDqqLFcTRTpb4JtfJDkP8ANhcA8D15oA7CG4huAxgljkCnaSjA4PpxVe/1S301rdbjfmeQRrtGce59B0596rW1p9n8R3DxQ+XDJbJkquFLBm/XBqneWF7q+pX20xQ26xfZU8+Fm3ZGWZfmHfAzz92gDSvdVW0vIrVba4uJpEaQLCF4UEA53EeoottYtruaCOEuTPE0qkrjAUgEH0OT0rGhg1K+v9Nldp7SaO0kimkEQPzBlH8QI5wSKuwad9h1yyS3jk+zxWsilzk/MWU8n1PJoA26KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+Zvi7/wAlO1f/ALY/+iUoo+Lv/JTtX/7Y/wDolKKAPf8AwZ/yJGg/9g63/wDRa1tVi+DP+RI0H/sHW/8A6LWtqgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPmb4u/8lO1f/tj/AOiUoo+Lv/JTtX/7Y/8AolKKAPf/AAZ/yJGg/wDYOt//AEWtbVYvgz/kSNB/7B1v/wCi1raoAaXVWVWYAt0BPWhpEThmVSQTyfTrWB4lt3uNR0ryf+PiJpZYv95Vzj8eR+NVPtI1LWbPVUyI9k0VuGHQBMscf73H/AaAOpilSaJZInV43GVZTkEU+uesLqW9mhWe+a3WOCGRUTavnFhkk5HTPGBiore6u5LSzae/kQXkzq8uFAjC7tqrxgE4HJz0oA6aiuWnv7tbQsbqV7e3mkVpYmRZZEAGGGRhsZIOOtSS6hcET3S3jiaG4EcdphcSKSuMjGSSCTkf0oA31u4GneBZkMqY3JnkZ6VKSFBLEADkk9q5F7M7mdr+6Vf7W5+ZcLx/u1seIJmNtDZRQm4ku32GMMAWjHL8njpx+NAGnLcQwxh5ZY0Q9GZgB+dOWRG27XU7hlcHqPUVyJeWRNOs2tIjPa3jRCC4cY2eWxTJAb+Ejt2qybSXTr21jSSFJ/s9y6npHGWZSAM/wjNAHT0Vl6DctPayrI9w0scm2QTMrFTgHhlGCOa1KACkJABJOAO9LWV4guHSyS2hjMs124iWNSASvV+vH3QaANF54oovMkkRY/7zMAPzpUmjkVWSRGDjKkHOfpXIzO/9nwae1oiSWuoRLHbzOCvlnJQEjPGMjv0q0bKXT9Rs+YIpZPtMqqufLiJVcAdOOMngdTQB09FZOgXLzQzxzSTvPEwEglZGAJGflZRgj9azrR7+6/s/zNTnAvFl8zYqDG05Xbxwex65oA6eiuXj1e9+zW+Zd0l/AqQHaPllDYY/kd34GtPVZpY5bG2Fy1vFOzLJOMBuFyACeASf5UAatFc5a3V5dXlva/bJPJV5l81Qu6ZUK7TnGO5BI64qCPVJw+n3T6g5a5mcTWoCkKqq52gYyCMD60AdVUcs0cOzzZFTewRdxxuY9APeuSXV77FwkV5jzIIp42Z1lePdIF5AUAZB6c/Wr32u5ttSaza5eZEu4QGlCltrqxK8D1HHegDo6QsAQCQCeBnvXMR37Bb26j1G5mtiwggUyR5LFsFwccDPAJz0J9KgilmvJLMXN64NtqLRb4pVYH92TgttGTzjoKAOrimjnTfDIrrkrlTkZBwR+dSVzcF5NdPFBNem0iYTP5qbVLFZSoXJGOB14yajS8v75Mm9kg2WJm/doo3sHYBuQeCB096AOoorIn1CX+x9Pu94jMrwGVuMBWI3deg5qjealcSreNBdEww3JVhFIivsCAkKW4JBOSDQB0tFcq+qX81+Ras5jjERiDyRoJFYAkuG+Y5yencVf0m7mbVbiC6nkeXBdQrK0RXdgFcDIPQEGgDbooooAKYkiSAmN1YA4JU5wafXnOiSy6bayW1uSP7amlWEgZCSiRlc/wDfHzf8BoA9ESRJVDRurqe6nIp1ef6PeyeHdDtzbsTZb7q2SLAIEokby+evOCK6PWLu60vwqFZ2n1GVFt0IwC8rccdvU/hQBs+dF5Rl8xPLH8e4Y/OhbiF4/MSWNkzjcGBGfrXncv8AxLvDGuaK9pLbRpGlxbQzspJRmAbkEjG4H/vqruo6RLY6dd3UttbWcdzc2gW1t23KpWQZYnAGTnsOwoA7uiub0nU538SXNpeXTSs294ViKND5YYAdPmVhnnPXmukoAKKKKACiiigAooooAKKKKACiiigD5m+Lv/JTtX/7Y/8AolKKPi7/AMlO1f8A7Y/+iUooA9/8Gf8AIkaD/wBg63/9FrW1WL4M/wCRI0H/ALB1v/6LWtqgBpRWZWKgsvQkcik8qP5f3afLnHHTPWn0UAQvaW8hjMkETGL/AFZZAdn09KV7eGSEwvFG0R6oygqfwqWigCB7K1kWJXtoWWL/AFYMYOz6elONtA1ws7QxmZRgSFRuA9M9alooAje3hljaOSKNkY5ZWUEE+pFO8tC6ttXcowDjkCnUUAMMMZk8wxpv/vbRn86JIY5c+ZGj5BX5lB4PUU+igCOGCK3iEcESRRjoqKFA/AVJRRQAU0xozq7KpZc7SRyM9cU6igBjQxs+9o0LcclRnjpQ8Ucn+sRW4I+YZ4PWn0UARwW8NtH5dvFHEgOdqKFH5ClEUa7dqKNv3cDp9KfRQBTbT1e+hnZh5cAPlRBAArHgtn6cfiasTQxXERjmjSSNuquoIP4GpKKAGLFGgQLGihBtXAxtHoKzotGI1IXc8ySFXLoEhVDnBALMPvYBOOlalFAEEdlbRAiO3hQHkhUAzzn+dSGGMsWMaFiQSSozx0p9FAFVNMsY9+yytl3ja2IlG4eh45qT7HbeUIvs8PlgghNgxkdDipqKAIZbS3njEc0EUiA7grICM+uPWpDGhJJRckbScdvSnUUAMaGN4TE0aNERtKFQVx6YqJtPs3jWNrSBo1OVUxjAPqBirFFAEUlrBLKkskETyR/cdkBK/Q9qIbWC3Z2ggijLnLlEA3H3x1qWigAooooAKjWCJNoWJBtJK4UcE9SKWVWeJ1R9jFSA2M7T61g/2Frf/Qyy/wDgKn+NXCMZbyt9/wCiInKUdo3+79WX7vR0u7q1ZpNltbv532dEAV5AchievGc49avvGkhUuisVO5cjOD6isH+wta/6GWX/AMBU/wAaP7C1r/oZZf8AwFT/ABq/Zw/nX4/5Ee1n/I/w/wAzckt4ZjmWGNyRtyyg8en0pzxpKu2RFdcg4YZGR0rB/sLWv+hll/8AAVP8aP7C1r/oZZf/AAFT/Gj2cP51+P8AkHtZ/wAj/D/M3IraCGR3ihjR5Dl2VQC31Pepax9P0rU7W8SW61uS6iUHMRgVQ3HqDWxWc4qL0dzSEnJXat/XkFFFFSUFFFFABRRRQAUUUUAFFFFAHzN8Xf8Akp2r/wDbH/0SlFHxd/5Kdq//AGx/9EpRQB7/AODP+RI0H/sHW/8A6LWtqsXwZ/yJGg/9g63/APRa1tUAFFUNWu5rW1VbTy/tUzhIvM+7nqSfbANRDXEeK0MNtNPLcxtIqR44243AkkAdaANSisj/AISOBlZoba6lRIlmkZVACKc9cnqMHIHNRR6ttuZGuLhxEk8oUKgIKKgbk9e+eKANyisyXWTb2TXM9lPEoIwJHjXIPfJbA+hOaqTa+0vniKKaO2Fqk6XKbSfmP90mgDeorO/tiMXGzyJzD5vkm4wNm/pjrnrxnGM1AviS3MXnSW9zFCY3kR3UfPs+8AAcj8cUAbFFZ8mpyDRZ75LV98cbOsRdDuwM9QSMfjVH+3Z4rovNaz+ULRJ3jXYfKyTkk554HQE0Ab1FZc2uwxX4tPLZpXQtFh0+c7c4xnI6dSMe9OtNXD6EmpXsRtl8veykg4H4GgDSorFi8UWTxNI+5ER9kjbkdUJGVyVJHPQY78VI2vxo0m6zulWHZ5zlVxHuAIzzk9ecZxQBrUVm/wBtxCbBgnEBcxi42jYzDOQBnd2IzjFQHxLbrYx3LxOizNiEPJGPM4zkHdgdO5BoA2aKzzrNt/Yw1NBI8BAICLljk7cAd+agn8RwWquLmGSGdWCiGR0UtkEghi23GAe/agDXorIj8RW04RoIZpEMBuGZQuEUEg5OeTkHpmmf8JJGN2+xvFCIsrEquFjbo33vrx146UAbVFZC6ysUnlATXMsk8iouEXAUjIGSM4z9TRJrK3CSeUJ4kjmWLzgEbLbwpXbnI/EDjkUAa9FZg1uMy8284gLMiTkDY7DOQOc9jyRioR4lgFuZpLa4iUxLNH5gUeYpIHrxyR97HWgDZoqul0TY/aHgdCFLGMlc/mDj8c4qhB4jguUiMEEskksrRbEKNhlGTlg23GO+aANeisrT/ENnqV6baA5YqWRt6kOBweASR17gVHf60Rb6ktrHIHtImJm+UhXAzjbnP6YNAGzRWSmurgxyWtytyCoSEhd0m4EgjnAHB6kYxzTjr9uiSGWGeNokdnQqCQUxleDyeRjHBoA1KKyW8QQFoUht7iZ5guxUUdSpbBJOBwOaL7VSfDkt/a742VeAVBZSGwRjnnqKANaismbxDBapL9qhlglRlAjlZAX3Z2kHO3sepGMVBF4hjmuBMhdrbyD+7UBmMm/bgEcH04OKAN2is2PWovNEVxBNby7irLJtO35Sw5BIIIB6elP0/V4NSEZgSUeZF5uHXBUZxg+hyD+VAF+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+Zvi7/yU7V/+2P/AKJSij4u/wDJTtX/AO2P/olKKAPf/Bn/ACJGg/8AYOt//Ra1tVi+DP8AkSNB/wCwdb/+i1raoAp3el219cxS3cazCJSFjkUMgJxzgjrxWe2hNBfQCxlltrdBK2YtuIyxX5QpGMcE9OK3KKAMFNAP2ueJZp4bNoY4sIynzQN24HIJB56jHWrjaHauzFt5VmdiuePmUKR+QrSooAyn0MyrD5t/cvJCTskYISARgj7uPx6+9B8PweSsSzTiP7OLdhkfMoOQScdRzWrRQBnf2On2kv583kmXzvs+Rs39c9M9ecZxmgaNEkNukU00bW6usbjBI3dTyMGtGigCja6TBbadLZgsyS7t5wBkt14AAH4CmLo0fkyJJNNIZLcW7OcA7RnngYzzWjRQBlRaBBFdrMs0xVZDKI/lxuK7Tk4yeD3NTppUS6SdPkklkh27QSQGUdsEDt61eooAzH0VLi3WC8uZrmMEsVYIoY44yFA6dR7/AEqrFocsl3di4ubg27tHlcr++CqB83GRyOcYzW7RQBmjRkE277TP5IkMqQ5G1HPccZ6knBOKiXw9GoZxczC5MnmGcKgOcY+7t28j2rXooAzdVspbjRXtYmd5Ds+bIVjhgSfQdKY2hI5MrXc5ui4cXBCbhgYxjbtxgnjHvWrRQBROlxsXaSWR3kt/s7McDI554HXmmSaLbyxyozyYlgSA4I+6ucduvNaNFAGXcaDDcRGFppRC0rSumFIYk56kZGOxGDR/YMT3Mk808skjlcMQoICtuA4AzyO+TWpRQBmLokYkObidoAzOkBI2oxzkjjPc8E4pzaOmyIRTzRPFB5CsNp+XIPIIIPStGigDP/sa3Gj/ANnBnEXqMZBzuzjGOvbGPaktdGitplmM0skgkaQs2OSyhTwABjArRooAo2GmDTyVjuJXhAwkTBcIPTIGT+JNRXGhxXdxNNPPK5kjaJRhRsVuoBAyfxzWnRQBn3GjxTzmdZZYpsIEdCMoVzgjIx/EQc006HA6wmSSZ5I5/PMhIy7e/GMdOBjoK0qKAM610S3tHjaN5SUmeYbiDywIx06AHinPpEL6VJYb5RFISSwIDDLbuDj1q/RQBltoSSB3lup5LhmVlnbbuTbnAAxjHJ6jnNOk0WOYAyzzNKIwgkBCkENuDDAwCD+FaVFAGXJoUM9vIlzPPLJI6u0xIDfL0AwMAYyOB3NWbPTobK4uZYi5Nw4dgx4XjGB6Dv8AUmrdFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfM3xd/5Kdq//bH/ANEpRR8Xf+Snav8A9sf/AESlFAHv/gz/AJEjQf8AsHW//ota2qxfBn/IkaD/ANg63/8ARa1tUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB8zfF3/kp2r/APbH/wBEpRR8Xf8Akp2r/wDbH/0SlFAHv/gz/kSNB/7B1v8A+i1rarF8Gf8AIkaD/wBg63/9FrW1QAVm65rUWhWSXM0MsqNKseIhkjPfHtWlWfq1hJfizEbIPIukmbd3Vc5A9+aAE/tq1+2mAsBH9lF155YbNhOOtSHWdOFslwb62EL52v5gwcdcH2rBfwvqFte3smnXcKQSQrHbI+cxjfuZc4OFPOD2zUmneGLi2vYZrhoHRLuW4K7mcgPGFAyw5ORQBuQ6pY3EjJDeW8jqnmELIDhf73096ktb22vojJaTxzIDgtGwYZ/CuYfwbM+l2lossETRW80TugPJcgj0445rY0PS309Z5JoYo55iu8xzyS7sDA5egDWooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPmb4u/8lO1f/tj/AOiUoo+Lv/JTtX/7Y/8AolKKAPf/AAZ/yJGg/wDYOt//AEWtbVYvgz/kSNB/7B1v/wCi1raoAKKrXXVagoA0KKz6KANCis+igDQorPooA0KKz6KANCis+igDQorPooA0KKz6KANCis+igDQorPooA0KKz6KANCis+igDQorPooA0KKz6KANCis+igDQorPooA0KKz6KANCis+igDQorPooA0KKz6KANCis+igDQorPooA0KKz6KANCis+igDQorPooA0KKz6KAPnb4u/8lO1f/tj/wCiUoqP4rf8lI1X/tj/AOiUooA+g/Bn/IkaD/2Drf8A9FrW1WL4M/5EjQf+wdb/APota2qAK111WsvU7uW0hhMBhDyzLFulztXOeeCPStS66rWffWMd+kSTAFI5VkKsoYNjPBB+tIZUtdaV9sUylrhmkUGBSyMEIBYHsOR+tLHrMCW0TSNLMfLDySxQnagPQsP4R+dWmsY/tUUyHYIomiVFUAYbH8sVTXRGih8mG8dIniWKZfLBLgDGQf4TjjvQBJLqsTSmKF5FZJkjdzCWUk4+UHPUg9aiGrS3GmPexKtokTMH+1Rk5AOPlwRVj+ykAYLIwBuVuAMdCuML9OKryaLMViSO+CxRTNMqPAGGScjPIzgkkUAQx6rerdW1teSafazSRCRlcNkktjavzdcfXmtOxuWu4pHZQpSZ48D0U4pLezeO6NzPOJZTGIyRHsHXOcZNMs7Ga0lkxdB4HkaTyzCAQWOfvZ/pQBdooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+cvit/yUjVf+2P8A6JSij4rf8lI1X/tj/wCiUopiPoPwZ/yJGg/9g63/APRa1tVi+DP+RI0H/sHW/wD6LWtqgCvcq7FdqFvpioPLl/55N+n+NX6KAKHly/8APJv0/wAaPLl/55N+n+NX6KAKHly/88m/T/Gjy5f+eTfp/jV+igCh5cv/ADyb9P8AGjy5f+eTfp/jV+igCh5cv/PJv0/xo8uX/nk36f41fooAoeXL/wA8m/T/ABo8uX/nk36f41fooAoeXL/zyb9P8aPLl/55N+n+NX6KAKHly/8APJv0/wAaPLl/55N+n+NX6KAKHly/88m/T/Gjy5f+eTfp/jV+igCh5cv/ADyb9P8AGjy5f+eTfp/jV+igCh5cv/PJv0/xo8uX/nk36f41fooAoeXL/wA8m/T/ABo8uX/nk36f41fooAoeXL/zyb9P8aPLl/55N+n+NX6KAKHly/8APJv0/wAaPLl/55N+n+NX6KAKHly/88m/T/Gjy5f+eTfp/jV+igCh5cv/ADyb9P8AGjy5f+eTfp/jV+igCh5cv/PJv0/xo8uX/nk36f41fooAoeXL/wA8m/T/ABo8uX/nk36f41fooAoeXL/zyb9P8aPLl/55N+n+NX6KAKHly/8APJv0/wAaPLl/55N+n+NX6KAKHly/88m/T/Gjy5f+eTfp/jV+igCh5cv/ADyb9P8AGjy5f+eTfp/jV+igCh5cv/PJv0/xo8uX/nk36f41fooAoeXL/wA8m/T/ABo8uX/nk36f41fooAoeXL/zyb9P8aPLl/55N+n+NX6KAKHly/8APJv0/wAaPLl/55N+n+NX6KAPmL4rgj4k6qGBB/c8H/rilFSfF3/kp2r/APbH/wBEpRQB7/4M/wCRI0H/ALB1v/6LWtqvOfDPxS8I6f4V0izutW8u4t7KGKVPs0x2sqAEZCYPI7Vp/wDC3fBf/QZ/8lZv/iKAOzorjP8Ahbvgv/oM/wDkrN/8RR/wt3wX/wBBn/yVm/8AiKAOzorjP+Fu+C/+gz/5Kzf/ABFH/C3fBf8A0Gf/ACVm/wDiKAOzorjP+Fu+C/8AoM/+Ss3/AMRR/wALd8F/9Bn/AMlZv/iKAOzorjP+Fu+C/wDoM/8AkrN/8RR/wt3wX/0Gf/JWb/4igDs6K4z/AIW74L/6DP8A5Kzf/EUf8Ld8F/8AQZ/8lZv/AIigDs6K4z/hbvgv/oM/+Ss3/wARR/wt3wX/ANBn/wAlZv8A4igDs6K4z/hbvgv/AKDP/krN/wDEUf8AC3fBf/QZ/wDJWb/4igDs6K4z/hbvgv8A6DP/AJKzf/EUf8Ld8F/9Bn/yVm/+IoA7OiuM/wCFu+C/+gz/AOSs3/xFH/C3fBf/AEGf/JWb/wCIoA7OiuM/4W74L/6DP/krN/8AEUf8Ld8F/wDQZ/8AJWb/AOIoA7OiuM/4W74L/wCgz/5Kzf8AxFH/AAt3wX/0Gf8AyVm/+IoA7OiuM/4W74L/AOgz/wCSs3/xFH/C3fBf/QZ/8lZv/iKAOzorjP8Ahbvgv/oM/wDkrN/8RR/wt3wX/wBBn/yVm/8AiKAOzorjP+Fu+C/+gz/5Kzf/ABFH/C3fBf8A0Gf/ACVm/wDiKAOzorjP+Fu+C/8AoM/+Ss3/AMRR/wALd8F/9Bn/AMlZv/iKAOzorjP+Fu+C/wDoM/8AkrN/8RR/wt3wX/0Gf/JWb/4igDs6K4z/AIW74L/6DP8A5Kzf/EUf8Ld8F/8AQZ/8lZv/AIigDs6K4z/hbvgv/oM/+Ss3/wARR/wt3wX/ANBn/wAlZv8A4igDs6K4z/hbvgv/AKDP/krN/wDEUf8AC3fBf/QZ/wDJWb/4igDs6K4z/hbvgv8A6DP/AJKzf/EUf8Ld8F/9Bn/yVm/+IoA7OiuM/wCFu+C/+gz/AOSs3/xFH/C3fBf/AEGf/JWb/wCIoA7OiuM/4W74L/6DP/krN/8AEUf8Ld8F/wDQZ/8AJWb/AOIoA7OiuM/4W74L/wCgz/5Kzf8AxFH/AAt3wX/0Gf8AyVm/+IoA7OiuM/4W74L/AOgz/wCSs3/xFH/C3fBf/QZ/8lZv/iKAOzorjP8Ahbvgv/oM/wDkrN/8RR/wt3wX/wBBn/yVm/8AiKAOzorjP+Fu+C/+gz/5Kzf/ABFH/C3fBf8A0Gf/ACVm/wDiKAPGfi7/AMlO1f8A7Y/+iUoql8RtXste8d6jqOmTefaTeV5cmxlziJFPDAHqD2ooA//Z"}}]);