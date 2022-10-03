"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[473],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(o),d=r,m=s["".concat(p,".").concat(d)]||s[d]||g[d]||a;return o?n.createElement(m,l(l({ref:t},c),{},{components:o})):n.createElement(m,l({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},9298:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=o(7462),r=(o(7294),o(3905)),a=o(4996);const l={sidebar_position:1},i="Set up Google Cloud",p={unversionedId:"natural-language-api/set-up-google-cloud",id:"natural-language-api/set-up-google-cloud",title:"Set up Google Cloud",description:"In this section, we'll be using the Google Cloud Natural Language API to analyze the sentiment of the comments left on the cakes in the web app. That's why we need to set up a Google Cloud account and project.",source:"@site/docs/4-natural-language-api/set-up-google-cloud.mdx",sourceDirName:"4-natural-language-api",slug:"/natural-language-api/set-up-google-cloud",permalink:"/docs/natural-language-api/set-up-google-cloud",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/blob/main/docs/4-natural-language-api/set-up-google-cloud.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Natural Language API",permalink:"/docs/category/google-cloud-natural-language-api"},next:{title:"Enable the Google Cloud Natural Language API",permalink:"/docs/natural-language-api/set-up-nl-api"}},u={},c=[],g={toc:c};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-google-cloud"},"Set up Google Cloud"),(0,r.kt)("p",null,"In this section, we'll be using the Google Cloud Natural Language API to analyze the sentiment of the comments left on the cakes in the web app. That's why we need to set up a Google Cloud account and project."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/getting-started"},"Cloud Console")," and create a new project."),(0,r.kt)("img",{alt:"Select project dropdown in Google Cloud",src:(0,a.Z)("/img/chapter-3-nlp/select-project.png"),width:"500"}),(0,r.kt)("img",{alt:"Dialog box in Google Cloud highlighting the 'New Project' button",src:(0,a.Z)("/img/chapter-3-nlp/new-project.png"),width:"500"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remember your project ID. We will refer to it throughout the workshop as ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_ID"),"."),(0,r.kt)("img",{alt:"New Project dialog in highlighting the Project ID text",src:(0,a.Z)("/img/chapter-3-nlp/project-id.png"),width:"300"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/billing"},"Enable billing")," to use Google Cloud resources. If you\u2019re a new user, you\u2019re eligible for the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/free"},"$300 Free Trial")," program."))))}s.isMDXComponent=!0}}]);