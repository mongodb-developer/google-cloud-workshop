"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=n(7462),r=(n(7294),n(3905)),l=n(4996);const a={sidebar_position:3},i="Deploy to Cloud Run",u={unversionedId:"cloud-run/deploy-to-cloud-run",id:"cloud-run/deploy-to-cloud-run",title:"Deploy to Cloud Run",description:"We\u2019re finally ready to deploy our application! We can do that from the Cloud Shell Editor.",source:"@site/docs/5-cloud-run/deploy-to-cloud-run.mdx",sourceDirName:"5-cloud-run",slug:"/cloud-run/deploy-to-cloud-run",permalink:"/docs/cloud-run/deploy-to-cloud-run",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/docs/5-cloud-run/deploy-to-cloud-run.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connect to App Services",permalink:"/docs/cloud-run/connect-to-app-services"},next:{title:"Congratulations!",permalink:"/docs/summary"}},p={},c=[],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-to-cloud-run"},"Deploy to Cloud Run"),(0,r.kt)("p",null,"We\u2019re finally ready to deploy our application! We can do that from the Cloud Shell Editor."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Cloud Run")," extension on the left sidebar."),(0,r.kt)("img",{alt:"Left-hand menu in Cloud Shell highlighting the Cloud Run extension button",src:(0,l.Z)("/img/chapter-4-cloud-run/cloud-run-extension.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the Deploy to Cloud Run icon."),(0,r.kt)("img",{alt:"Deploy to Cloud Run button in the Cloud Run extension",src:(0,l.Z)("/img/chapter-4-cloud-run/deploy-to-cloud-run.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following configuration settings for your service:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Service Settings: ",(0,r.kt)("strong",{parentName:"li"},"Create a service")),(0,r.kt)("li",{parentName:"ul"},"Service name: ",(0,r.kt)("strong",{parentName:"li"},"bakery-web-app")),(0,r.kt)("li",{parentName:"ul"},"Deployment platform: ",(0,r.kt)("strong",{parentName:"li"},"Cloud Run (fully managed)")),(0,r.kt)("li",{parentName:"ul"},"Region: ",(0,r.kt)("strong",{parentName:"li"},"closest to your physical location")),(0,r.kt)("li",{parentName:"ul"},"Authentication: ",(0,r.kt)("strong",{parentName:"li"},"Allow unauthenticated invocations"))))),(0,r.kt)("p",null,"For the Build environment, select ",(0,r.kt)("strong",{parentName:"p"},"Cloud Build"),"."),(0,r.kt)("p",null,"Finally, in the Build Settings section, select:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Builder: ",(0,r.kt)("strong",{parentName:"li"},"Docker")),(0,r.kt)("li",{parentName:"ul"},"Docker: ",(0,r.kt)("strong",{parentName:"li"},"Google-Cloud-MongoDB-Atlas-Workshop/Dockerfile"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Deploy")," button and wait as your app is being deployed to the cloud! This can take a few minutes. You can expand the process output by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Show Detailed Logs")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the deployment is complete, you will see the URL for your application. Click on it and you will see the bakery application displaying a list of the cakes in your Atlas database."),(0,r.kt)("img",{alt:"Deployment output in Cloud Run",src:(0,l.Z)("/img/chapter-4-cloud-run/deployment-output.png")}),(0,r.kt)("img",{alt:"Bakery application displaying a list of cakes",src:(0,l.Z)("/img/chapter-4-cloud-run/cakes-application.png")}))),(0,r.kt)("p",null,"Great job! You just deployed a web application to the cloud!"))}d.isMDXComponent=!0}}]);