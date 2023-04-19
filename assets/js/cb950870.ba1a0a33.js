"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[500],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(l,".").concat(u)]||m[u]||h[u]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(4996);const o={sidebar_position:1},p="Create an Atlas GraphQL API",l={unversionedId:"app-services/create-app-services-app",id:"app-services/create-app-services-app",title:"Create an Atlas GraphQL API",description:"In this section, we are going to get set up with our first Atlas App Services application, ready for using GraphQL.",source:"@site/docs/3-app-services/create-app-services-app.mdx",sourceDirName:"3-app-services",slug:"/app-services/create-app-services-app",permalink:"/docs/app-services/create-app-services-app",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/blob/main/docs/3-app-services/create-app-services-app.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Atlas App Services",permalink:"/docs/category/atlas-app-services"},next:{title:"Consume the API in a Web App",permalink:"/docs/app-services/app-graphql"}},s={},c=[{value:"Create an Atlas App Services application",id:"create-an-atlas-app-services-application",level:2},{value:"Configure rules",id:"configure-rules",level:2},{value:"Generate a schema",id:"generate-a-schema",level:2},{value:"Query data with GraphQL",id:"query-data-with-graphql",level:2}],m={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-atlas-graphql-api"},"Create an Atlas GraphQL API"),(0,r.kt)("p",null,"In this section, we are going to get set up with our first Atlas App Services application, ready for using GraphQL."),(0,r.kt)("h2",{id:"create-an-atlas-app-services-application"},"Create an Atlas App Services application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start by navigating to the ",(0,r.kt)("strong",{parentName:"p"},"App Services")," tab."),(0,r.kt)("img",{alt:"Atlas navigation bar highlighting the 'App Services' tab",src:(0,i.Z)("/img/chapter-2-app-services/app-services-tab.png")})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You\u2019ll be prompted to select a starter template. Let\u2019s go with the ",(0,r.kt)("strong",{parentName:"p"},"Build your own App")," option that\u2019s already selected. Click the ",(0,r.kt)("strong",{parentName:"p"},"Next")," button. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, you need to configure your application."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Data Source"),": Since we have created a single cluster, Atlas already linked it to our application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application Name"),": Let\u2019s give our application a meaningful name such as ",(0,r.kt)("strong",{parentName:"li"},"Bakery"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"App Deployment Model"),": Change the deployment to ",(0,r.kt)("strong",{parentName:"li"},"Single Region")," and select the region closest to your physical location."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Create App Service")," button to create your first App Services application!"))),(0,r.kt)("h2",{id:"configure-rules"},"Configure rules"),(0,r.kt)("p",null,"We want to add some rules to control our app\u2019s access to our data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the end of the previous section, after creating your application, it will have taken you to it in your browser. On the left, under the ",(0,r.kt)("strong",{parentName:"p"},"Data Access")," heading, select ",(0,r.kt)("strong",{parentName:"p"},"Rules"),"."),(0,r.kt)("img",{alt:"Left-hand navigation panel highlighting the 'Rules' tab",src:(0,i.Z)("/img/chapter-2-app-services/rules-tab.png"),width:"200"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We will need to make two rules\u2014one for each of our collections."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"cakes")," collection, select the ",(0,r.kt)("strong",{parentName:"li"},"readAll")," preset, and then click ",(0,r.kt)("strong",{parentName:"li"},"Add preset role"),"."),(0,r.kt)("li",{parentName:"ul"},"A popup will appear talking about ",(0,r.kt)("strong",{parentName:"li"},"Save and Deploy"),". You can just click through this and leave it as it is."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"comments")," collection from the left, and this time, apply the ",(0,r.kt)("strong",{parentName:"p"},"readAndWriteAll")," rule.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Since we have made changes to the app by adding these rules, we need to deploy those changes. This ",(0,r.kt)("strong",{parentName:"p"},"Review Draft & Deploy")," step is on by default, to protect us from making changes unintentionally."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Review Draft & Deploy")," button in the blue banner across the top of your screen."),(0,r.kt)("li",{parentName:"ul"},"This will show the rules we have applied, as the system has added them into a new ",(0,r.kt)("inlineCode",{parentName:"li"},"rules.json")," file. Simply scroll down to the bottom of the window and click ",(0,r.kt)("strong",{parentName:"li"},"Deploy"),".")))),(0,r.kt)("h2",{id:"generate-a-schema"},"Generate a schema"),(0,r.kt)("p",null,"GraphQL requires us to have a schema defined for building up queries, so in this section, we will generate a schema for both our cakes and comments collections."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Schema")," on the left, just below where you clicked ",(0,r.kt)("strong",{parentName:"p"},"Rules")," in Step 1 of the last section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"cakes")," collection. App Services will see that you already have data that it can generate a schema from, so go ahead and click ",(0,r.kt)("strong",{parentName:"p"},"Generate a Schema"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave the default sample size and click ",(0,r.kt)("strong",{parentName:"p"},"Generate schema from sampling"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A JSON schema will be generated, matching the field names to their data types. At the top of the browser window, click ",(0,r.kt)("strong",{parentName:"p"},"Save Draft")," to save this new schema.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We now want to create a schema for our ",(0,r.kt)("strong",{parentName:"p"},"comments")," collection. This time, we\u2019ll write the schema instead of generating it. Click ",(0,r.kt)("strong",{parentName:"p"},"Generate a Schema")," and then select ",(0,r.kt)("strong",{parentName:"p"},"or, skip and manually define your schema")," at the bottom of the window."),(0,r.kt)("img",{alt:"Generate a Schema window with the 'or, skip and manually define your schema' option highlighted",src:(0,i.Z)("/img/chapter-2-app-services/write-your-schema.png"),width:"400"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the following JSON schema into the box and click ",(0,r.kt)("strong",{parentName:"p"},"Save Draft")," to persist the change."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "comment",\n    "properties": {\n        "_id": {\n            "bsonType": "objectId"\n        },\n        "cakeId": {\n            "bsonType": "objectId"\n        },\n        "date": {\n            "bsonType": "date"\n        },\n        "name": {\n            "bsonType": "string"\n        },\n        "text": {\n            "bsonType": "string"\n        }\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We now need to define a relationship between our two collections so that the comment document understands ",(0,r.kt)("inlineCode",{parentName:"p"},"cakeId"),". Click ",(0,r.kt)("strong",{parentName:"p"},"Add a relationship")," and set it to the following before clicking ",(0,r.kt)("strong",{parentName:"p"},"Add"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Parent Field: ",(0,r.kt)("strong",{parentName:"li"},"cakeId - objectId")),(0,r.kt)("li",{parentName:"ul"},"Linked Database: ",(0,r.kt)("strong",{parentName:"li"},"Bakery")),(0,r.kt)("li",{parentName:"ul"},"Linked Collection: ",(0,r.kt)("strong",{parentName:"li"},"cakes")),(0,r.kt)("li",{parentName:"ul"},"Linked Field: ",(0,r.kt)("strong",{parentName:"li"},"_id - objectId"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you see the following error while adding a relationship, you might have forgotten to save your schema draft:"),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"You must define a schema with a valid properties object for this collection before adding a relationship.")),(0,r.kt)("p",{parentName:"admonition"},"Locate the ",(0,r.kt)("strong",{parentName:"p"},"Save Draft")," button in the top right corner of the screen and click it to persist your schema.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Draft")," to persist the relationship you just created. Then, click ",(0,r.kt)("strong",{parentName:"p"},"Review Draft & Deploy")," at the top of the browser window, to deploy both our new schemas for our application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Deploy")," in the modal that pops up."))),(0,r.kt)("h2",{id:"query-data-with-graphql"},"Query data with GraphQL"),(0,r.kt)("p",null,"Now that we have the schemas in place, it\u2019s time to run our first query to check it all works!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"GraphQL")," from the left side menu, under the ",(0,r.kt)("strong",{parentName:"p"},"Build")," heading."),(0,r.kt)("img",{alt:"Left-hand navigation panel highlighting the 'GraphQL' tab",src:(0,i.Z)("/img/chapter-2-app-services/graphql-tab.png"),width:"300"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the comments and sample query inside the playground with the following query, which requests the name and description from our cakes collection:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n    cakes {\n        name\n        description\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the play button at the top to run your query, and see your cakes document returned on the right.  "),(0,r.kt)("img",{alt:"GraphQL request with the cakes query (on the left) and the returned result (on the right)",src:(0,i.Z)("/img/chapter-2-app-services/graphiql.png")}))))}u.isMDXComponent=!0}}]);