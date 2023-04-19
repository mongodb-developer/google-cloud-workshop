"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||n;return a?r.createElement(m,l(l({ref:t},c),{},{components:a})):r.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8364:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905)),n=a(4996);const l={sidebar_position:1},i="Get Started with MongoDB Atlas",s={unversionedId:"database/get-started-atlas",id:"database/get-started-atlas",title:"Get Started with MongoDB Atlas",description:"MongoDB Atlas is a developer data platform, integrating a multi-cloud database with a diverse set of data services. Atlas simplifies database deployment and management while enabling modern data-driven application development.",source:"@site/docs/2-database/get-started-atlas.mdx",sourceDirName:"2-database",slug:"/database/get-started-atlas",permalink:"/docs/database/get-started-atlas",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/blob/main/docs/2-database/get-started-atlas.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MongoDB Atlas: Cloud Database",permalink:"/docs/category/mongodb-atlas-cloud-database"},next:{title:"Prepare Your Data",permalink:"/docs/database/prepare-your-data"}},p={},c=[{value:"Register a new Atlas account",id:"register-a-new-atlas-account",level:2},{value:"Deploy a free cluster",id:"deploy-a-free-cluster",level:2}],d={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started-with-mongodb-atlas"},"Get Started with MongoDB Atlas"),(0,o.kt)("p",null,"MongoDB Atlas is a developer data platform, integrating a multi-cloud database with a diverse set of data services. Atlas simplifies database deployment and management while enabling modern data-driven application development."),(0,o.kt)("h2",{id:"register-a-new-atlas-account"},"Register a new Atlas account"),(0,o.kt)("p",null,"You can register for MongoDB Atlas in one of two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Through the ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/marketplace/product/mongodb/mdb-atlas-self-service?utm_source=mongodb_devrel&utm_medium=static_site&utm_campaign=devrel&utm_id=mongodb"},"Google Cloud Marketplace")," if you have a Google Cloud account."),(0,o.kt)("li",{parentName:"ol"},"With the ",(0,o.kt)("a",{parentName:"li",href:"https://account.mongodb.com/account/register"},"Atlas registration page"),".")),(0,o.kt)("h2",{id:"deploy-a-free-cluster"},"Deploy a free cluster"),(0,o.kt)("p",null,"Let\u2019s deploy our first forever-free database in MongoDB Atlas! We\u2019ll do that using the Atlas UI, so before starting, make sure you\u2019re logged into your account."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Build a Database")," button."),(0,o.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,n.Z)("/img/chapter-1-mongodb-atlas/create-a-database.png"),width:"500"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Shared")," and click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."),(0,o.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,n.Z)("/img/chapter-1-mongodb-atlas/select-cluster-type.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a cloud provider and the region closest to your physical location."),(0,o.kt)("img",{alt:"'Cloud Provider & Region' section highlighting Google Cloud and the region named 'Belgium (europe-west1)'",src:(0,n.Z)("/img/chapter-1-mongodb-atlas/select-cloud-provider-region.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expand the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Name")," section and rename your cluster to ",(0,o.kt)("strong",{parentName:"p"},"Workshop-Bakery"),"."),(0,o.kt)("img",{alt:"The expanded 'Cluster Name' section with an input field filled in with the text 'Workshop-Bakery'",src:(0,n.Z)("/img/chapter-1-mongodb-atlas/cluster-name.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create Cluster")," to deploy your cluster."),(0,o.kt)("img",{alt:"Cluster creation page highlighting the 'Create Cluster' button",src:(0,n.Z)("/img/chapter-1-mongodb-atlas/create-cluster-button.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To navigate back to your deployments, select ",(0,o.kt)("strong",{parentName:"p"},"Database")," from the left-hand menu."),(0,o.kt)("img",{alt:"Security quickstart page highlighting the 'Database' tab in the left-hand menu",src:(0,n.Z)("/img/chapter-1-mongodb-atlas/security-quickstart-highlighted-database-button.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Creating the cluster may take a couple of minutes. Once the deployment is complete, you'll see your first cluster in the list!"),(0,o.kt)("img",{alt:"The 'Database Deployments' page with a cluster named 'Workshop-Bakery'",src:(0,n.Z)("/img/chapter-1-mongodb-atlas/database-deployments.png")}))))}g.isMDXComponent=!0}}]);