"use strict";(self.webpackChunkgcp_workshop=self.webpackChunkgcp_workshop||[]).push([[78],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),h=o,g=d["".concat(c,".").concat(h)]||d[h]||m[h]||r;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1157:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),r=a(4996);const s={sidebar_position:2},i="Prepare Your Data",c={unversionedId:"database/prepare-your-data",id:"database/prepare-your-data",title:"Prepare Your Data",description:"In this section, we will browse our new Workshop-Bakery cluster, learn how to create a new database, add a collection to that database, and insert documents.",source:"@site/docs/2-database/prepare-your-data.mdx",sourceDirName:"2-database",slug:"/database/prepare-your-data",permalink:"/docs/database/prepare-your-data",draft:!1,editUrl:"https://github.com/mongodb-developer/google-cloud-workshop/blob/main/docs/2-database/prepare-your-data.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get Started with MongoDB Atlas",permalink:"/docs/database/get-started-atlas"},next:{title:"Atlas App Services",permalink:"/docs/category/atlas-app-services"}},l={},p=[],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prepare-your-data"},"Prepare Your Data"),(0,o.kt)("p",null,"In this section, we will browse our new ",(0,o.kt)("strong",{parentName:"p"},"Workshop-Bakery")," cluster, learn how to create a new database, add a collection to that database, and insert documents."),(0,o.kt)("p",null,"We will be using the Atlas UI for this section. However, all this can also be done with the Atlas CLI and MongoDB Shell."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Browse Collections")," button to access our new ",(0,o.kt)("strong",{parentName:"p"},"Workshop-Bakery")," cluster."),(0,o.kt)("img",{alt:"Database deployment section highlighting the 'Browse Collections' button",src:(0,r.Z)("/img/chapter-1-mongodb-atlas/browse-collections.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the window that appears, select ",(0,o.kt)("strong",{parentName:"p"},"Add My Own Data"),". "),(0,o.kt)("img",{alt:"'Add data to your Collections' dialog highlighting the 'Add My Own Data' button",src:(0,r.Z)("/img/chapter-1-mongodb-atlas/add-my-own-data.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Name our database ",(0,o.kt)("strong",{parentName:"p"},"Bakery")," and our collection ",(0,o.kt)("strong",{parentName:"p"},"cakes")," and hit ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."),(0,o.kt)("img",{alt:"'Create Database' dialog with 'Bakery' filled in as a database name and 'cakes' filled in as a collection name",src:(0,r.Z)("/img/chapter-1-mongodb-atlas/create-database-and-collection.png"),width:"400"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We now have our ",(0,o.kt)("strong",{parentName:"p"},"cakes")," collection created inside our new bakery database\u2014woo! But we want to add some data. The Atlas UI makes this really easy. Click the ",(0,o.kt)("strong",{parentName:"p"},"Insert Document")," button in the top right corner."),(0,o.kt)("img",{alt:"Cakes collection page highlighting the 'Insert Document' button",src:(0,r.Z)("/img/chapter-1-mongodb-atlas/insert-document.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When inserting data in the Atlas UI, you have two options of the view you want for adding data. We want to use the JSON view, so we can easily add some existing cake data. Click the {} button to switch view."),(0,o.kt)("img",{alt:"'Insert to Collection' dialog highlighting the JSON button",src:(0,r.Z)("/img/chapter-1-mongodb-atlas/switch-to-json-view.png"),width:"500"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete what is currently in the box, add the following cake document, and then press ",(0,o.kt)("strong",{parentName:"p"},"Insert"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Chocolate Cake",\n    "shortDescription": "Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or sometimes both.",\n    "description": "Chocolate cake is made with chocolate; it can be made with other ingredients, as well. These ingredients include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to 1764, when Dr. James Baker discovered how to make chocolate by grinding cocoa beans between two massive circular millstones.",\n    "image": "https://addapinch.com/wp-content/uploads/2020/04/chocolate-cake-DSC_1768.jpg",\n    "ingredients": [\n        "flour",\n        "sugar",\n        "cocoa powder"\n    ],\n    "stock": 25\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Repeat ",(0,o.kt)("strong",{parentName:"p"},"Steps 4 and 5"),", this time adding the following cake document:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Cheese Cake",\n    "shortDescription": "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese (typically cottage cheese, cream cheese or ricotta), eggs, and sugar. ",\n    "description": "Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese (typically cottage cheese, cream cheese or ricotta), eggs, and sugar. If there is a bottom layer, it most often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sometimes sponge cake.[1] Cheesecake may be baked or unbaked (and is usually refrigerated).",\n    "image":"https://sallysbakingaddiction.com/wp-content/uploads/2018/05/perfect-cheesecake-recipe.jpg",\n    "ingredients": [\n        "flour",\n        "sugar",\n        "eggs"\n    ],\n    "stock": 40\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We want to start storing comments left on each cake and associating them with the cake where the comment was left. Copy the ",(0,o.kt)("strong",{parentName:"p"},"_id")," value from inside the quotes of one of the cake documents you just inserted."),(0,o.kt)("img",{alt:"Cake document with the _id value selected",src:(0,r.Z)("/img/chapter-1-mongodb-atlas/cake-document-object-id.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, we'll add a second collection to our ",(0,o.kt)("strong",{parentName:"p"},"Bakery")," database, to store the comments that people can leave on each cake. Hover your mouse over ",(0,o.kt)("strong",{parentName:"p"},"Bakery")," in the left panel and there will be a ",(0,o.kt)("strong",{parentName:"p"},"+")," sign to add a new collection. Click this and add a new collection called ",(0,o.kt)("strong",{parentName:"p"},"comments"),"."),(0,o.kt)("img",{alt:"Databases section with the '+' sign to add a new collection highlighted",src:(0,r.Z)("/img/chapter-1-mongodb-atlas/add-new-collection-existing-database.png"),width:"300"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a new document to this new ",(0,o.kt)("strong",{parentName:"p"},"comments")," collection, using the following template, substituting your name, comment, a date of your choice, and the ",(0,o.kt)("strong",{parentName:"p"},"cakeId")," for the one you copied in Step 8. Make sure your using the type ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," field and the type ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectId")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"cakeId")," field."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Your name",\n    "text": "Your comment",\n    "date": "2021-01-01T00:00:00.000Z",\n    "cakeId": "5f9f5b9b9b9b9b9b9b9b9b9b"\n}\n')),(0,o.kt)("img",{alt:"Databases section with the '+' sign to add a new collection highlighted",src:(0,r.Z)("/img/chapter-1-mongodb-atlas/insert-comment.gif")}))),(0,o.kt)("p",null,"Woo! You now have your Atlas database set up with some cake data, and even a comment associated with the cake!"))}h.isMDXComponent=!0}}]);