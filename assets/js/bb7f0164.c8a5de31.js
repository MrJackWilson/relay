(self.webpackChunk=self.webpackChunk||[]).push([[19741],{3905:(e,t,a)=>{"use strict";a.r(t),a.d(t,{MDXContext:()=>l,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return a?n.createElement(f,d(d({ref:t},l),{},{components:a})):n.createElement(f,d({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=f;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,s[1]=d;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},36742:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(79973),r=a(67294),i=a(73727),s=a(52263),d=a(13919),o=a(10412),l=(0,r.createContext)({collectLink:function(){}}),u=a(44996),c=a(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,a,m=e.isNavLink,f=e.to,h=e.href,v=e.activeClassName,g=e.isActive,y=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,b=void 0===w||w,x=(0,n.Z)(e,p),N=(0,s.default)().siteConfig,E=N.trailingSlash,k=N.baseUrl,O=(0,u.useBaseUrlUtils)().withBaseUrl,T=(0,r.useContext)(l),q=f||h,P=(0,d.Z)(q),C=null==q?void 0:q.replace("pathname://",""),A=void 0!==C?(a=C,b&&function(e){return e.startsWith("/")}(a)?O(a):a):void 0;A&&P&&(A=(0,c.applyTrailingSlash)(A,{trailingSlash:E,baseUrl:k}));var I=(0,r.useRef)(!1),U=m?i.OL:i.rU,M=o.default.canUseIntersectionObserver,R=(0,r.useRef)();(0,r.useEffect)((function(){return!M&&P&&null!=A&&window.docusaurus.prefetch(A),function(){M&&R.current&&R.current.disconnect()}}),[R,A,M,P]);var W=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,j=!A||!P||W;return A&&P&&!W&&!y&&T.collectLink(A),j?r.createElement("a",Object.assign({href:A},q&&!P&&{target:"_blank",rel:"noopener noreferrer"},x)):r.createElement(U,Object.assign({},x,{onMouseEnter:function(){I.current||null==A||(window.docusaurus.preload(A),I.current=!0)},innerRef:function(e){var t,a;M&&e&&P&&(t=e,a=function(){null!=A&&window.docusaurus.prefetch(A)},R.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(R.current.unobserve(t),R.current.disconnect(),a())}))})),R.current.observe(t))},to:A||""},m&&{isActive:g,activeClassName:v}))}},13919:(e,t,a)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:()=>n,Z:()=>r})},44996:(e,t,a)=>{"use strict";a.r(t),a.d(t,{useBaseUrlUtils:()=>i,default:()=>s});var n=a(52263),r=a(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,d=void 0!==s&&s,o=i.absolute,l=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(d)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+u:u}(i,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===a)return e;var r,i=e.split(/[#?]/)[0],s="/"===i||i===n?i:(r=i,a?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,s)}},18780:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var i=a(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(36742),r=a(44256),i=a(67294);function s(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function d(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var o=function(){var e=i.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:s},"Filing a task"))},u=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(d,null,i.createElement(l,null),i.createElement(o,null),i.createElement(u,null))},p=function(){return i.createElement(d,null,i.createElement(o,null),i.createElement(u,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(c,null),external:i.createElement(p,null)})}},24589:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>u,toc:()=>c,default:()=>m});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),s=(a(68629),a(44256)),d=["components"],o={id:"typesafe-updaters-faq",title:"Typesafe updaters FAQ",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",description:"Typesafe updater FAQ",keywords:["typesafe updaters","readUpdatableQuery","readUpdatableFragment","updater","updatable"]},l=void 0,u={unversionedId:"guided-tour/updating-data/typesafe-updaters-faq",id:"guided-tour/updating-data/typesafe-updaters-faq",isDocsHomePage:!1,title:"Typesafe updaters FAQ",description:"Typesafe updater FAQ",source:"@site/docs/guided-tour/updating-data/typesafe-updaters-faq.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",permalink:"/docs/next/guided-tour/updating-data/typesafe-updaters-faq/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guided-tour/updating-data/typesafe-updaters-faq.md",tags:[],version:"current",lastUpdatedBy:"Curtis Li",lastUpdatedAt:1653333556,formattedLastUpdatedAt:"5/23/2022",frontMatter:{id:"typesafe-updaters-faq",title:"Typesafe updaters FAQ",slug:"/guided-tour/updating-data/typesafe-updaters-faq/",description:"Typesafe updater FAQ",keywords:["typesafe updaters","readUpdatableQuery","readUpdatableFragment","updater","updatable"]}},c=[{value:"What is typesafe updaters?",id:"what-is-typesafe-updaters",children:[],level:2},{value:"Why?",id:"why",children:[],level:2},{value:"What was wrong with the existing APIs?",id:"what-was-wrong-with-the-existing-apis",children:[],level:2},{value:"How does a developer use typesafe updaters?",id:"how-does-a-developer-use-typesafe-updaters",children:[],level:2},{value:"Why are these labeled <code>_EXPERIMENTAL</code>?",id:"why-are-these-labeled-_experimental",children:[],level:2},{value:"What is an updatable query or fragment?",id:"what-is-an-updatable-query-or-fragment",children:[],level:2},{value:"Are fields selected in updatable queries and fragments fetched from the server?",id:"are-fields-selected-in-updatable-queries-and-fragments-fetched-from-the-server",children:[],level:2},{value:"What if I want to fetch a field and also mutate it?",id:"what-if-i-want-to-fetch-a-field-and-also-mutate-it",children:[],level:2},{value:"What are some consequences of this?",id:"what-are-some-consequences-of-this",children:[],level:2},{value:"Where do I get a <code>store</code>?",id:"where-do-i-get-a-store",children:[],level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Because in TypeScript, ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/43662"},"getters and setters cannot have different types"),", and the generated types of getters and setters is not the same, ",(0,i.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery_EXPERIMENTAL")," is currently unusable with TypeScript. ",(0,i.mdx)("inlineCode",{parentName:"p"},"readUpdatableFragment_EXPERIMENTAL")," is usable, as long as the updatable fragment contains only scalar fields.")))),(0,i.mdx)("h1",{id:"typesafe-updaters-faq"},"Typesafe Updaters FAQ"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Is something missing from this Q&A? Are you confused? Would you like help adopting these APIs? Please, reach out to ",(0,i.mdx)("a",{parentName:"p",href:"https://fb.workplace.com/profile.php?id=100042823931887"},"Robert Balicki"),". I am happy to help!")))),(0,i.mdx)("h1",{id:"general"},"General"),(0,i.mdx)("h2",{id:"what-is-typesafe-updaters"},"What is typesafe updaters?"),(0,i.mdx)("p",null,"Typesafe updaters is the name given to a project to provide a typesafe and ergonomic alternative to the existing APIs for imperatively updating data in the Relay store."),(0,i.mdx)("h2",{id:"why"},"Why?"),(0,i.mdx)("p",null,"Relay provides typesafe and ergonomic APIs for fetching and managing data that originates on the server. In addition, Relay provides the ability to define local-only fields in ",(0,i.mdx)("strong",{parentName:"p"},"client schema extensions"),". However, the APIs for mutating the data in these fields has hitherto been verbose and not ergonomic, meaning that we could not recommend Relay as a solution for managing local state."),(0,i.mdx)("h2",{id:"what-was-wrong-with-the-existing-apis"},"What was wrong with the existing APIs?"),(0,i.mdx)("p",null,"The pre-existing APIs are verbose and not typesafe. They make it easy to make a variety of mistakes and require that the developer understand a new set of APIs only when writing updaters."),(0,i.mdx)("p",null,"Typesafe updaters is a set of APIs that are typesafe and (hopefully) more ergonomic. They leverage well-known Relay idioms (queries, fragments, type refinement) and use getters and setters instead of requiring that the developer learn about a set of methods that are unused elsewhere."),(0,i.mdx)("h2",{id:"how-does-a-developer-use-typesafe-updaters"},"How does a developer use typesafe updaters?"),(0,i.mdx)("p",null,"With typesafe updaters, a developers writes an updatable query or a fragment that specifies the data to imperatively update. Then, the developer reads out that data from the store, returning a so-called ",(0,i.mdx)("strong",{parentName:"p"},"updatable proxy"),". Then, the developer mutates that updatable proxy. Mutating that updatable proxy using setters (e.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},'updatableData.name = "Godzilla"'),") results in calls to the old API, but with added type safety."),(0,i.mdx)("h2",{id:"why-are-these-labeled-_experimental"},"Why are these labeled ",(0,i.mdx)("inlineCode",{parentName:"h2"},"_EXPERIMENTAL"),"?"),(0,i.mdx)("p",null,"These are de facto not experimental. We encourage you to use them when writing new code! This suffix will be removed soon."),(0,i.mdx)("h2",{id:"what-is-an-updatable-query-or-fragment"},"What is an updatable query or fragment?"),(0,i.mdx)("p",null,"An updatable query or fragment is a query or fragment that has the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@updatable")," directive."),(0,i.mdx)("h1",{id:"updatable-queries-and-fragments-are-not-fetched"},"Updatable queries and fragments are not fetched"),(0,i.mdx)("h2",{id:"are-fields-selected-in-updatable-queries-and-fragments-fetched-from-the-server"},"Are fields selected in updatable queries and fragments fetched from the server?"),(0,i.mdx)("p",null,"No! The server doesn't know about updatable queries and fragments. Their fields are never fetched."),(0,i.mdx)("p",null,"Even if you spread an updatable fragment in a regular query or fragment, the fields selected by that updatable fragment are not fetched as part of that request."),(0,i.mdx)("h2",{id:"what-if-i-want-to-fetch-a-field-and-also-mutate-it"},"What if I want to fetch a field and also mutate it?"),(0,i.mdx)("p",null,"You should select that field in both a regular query/fragment ",(0,i.mdx)("strong",{parentName:"p"},"and")," in an updatable query/fragment."),(0,i.mdx)("h2",{id:"what-are-some-consequences-of-this"},"What are some consequences of this?"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When you read out updatable data, it can be missing if it isn't present in the store."),(0,i.mdx)("li",{parentName:"ul"},"You cannot spread regular fragments in updatable queries/fragments."),(0,i.mdx)("li",{parentName:"ul"},"The generated artifact for updatable queries/fragments does not contain a query ID and does not contain a normalization AST (which is used for writing network data to the store.)"),(0,i.mdx)("li",{parentName:"ul"},"Directives like ",(0,i.mdx)("inlineCode",{parentName:"li"},"@defer"),", etc. do not make sense in this context, and are disallowed.")),(0,i.mdx)("h1",{id:"misc"},"Misc"),(0,i.mdx)("h2",{id:"where-do-i-get-a-store"},"Where do I get a ",(0,i.mdx)("inlineCode",{parentName:"h2"},"store"),"?"),(0,i.mdx)("p",null,"The classes ",(0,i.mdx)("inlineCode",{parentName:"p"},"RelayRecordSourceSelectorProxy")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"RelayRecordSourceProxy")," contain the methods ",(0,i.mdx)("inlineCode",{parentName:"p"},"readUpdatableQuery_EXPERIMENTAL")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"readUpdatableFragment_EXPERIMENTAL"),". One can acquire an instance of these classes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"In updaters of mutations and subscriptions"),(0,i.mdx)("li",{parentName:"ul"},"In optimistic updaters of mutations"),(0,i.mdx)("li",{parentName:"ul"},"When using ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayModernEnvironment"),"'s ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitUpdate"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"applyUpdate"),", etc. methods."),(0,i.mdx)("li",{parentName:"ul"},"When using the standalone ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," method.")))}m.isMDXComponent=!0}}]);