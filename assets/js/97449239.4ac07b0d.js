"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[41655],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),h=function(e){return function(t){var a=d(t.components);return n.createElement(e,i({},t,{components:a}))}},d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(a),p=r,u=h["".concat(o,".").concat(p)]||h[p]||m[p]||i;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(39960),r=a(86341),i=a(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var l=function(){var e=i.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},h=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return i.createElement(s,null,i.createElement(c,null),i.createElement(l,null),i.createElement(h,null))},p=function(){return i.createElement(s,null,i.createElement(l,null),i.createElement(h,null))};const m=function(){return(0,r.fbContent)({internal:i.createElement(d,null),external:i.createElement(p,null)})}},66028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=a(68629),s=["components"],l={id:"thinking-in-graphql",title:"Thinking in GraphQL",slug:"/principles-and-architecture/thinking-in-graphql/",description:"Relay guide to thinking in GraphQL",keywords:["GraphQL"]},c=void 0,h={unversionedId:"principles-and-architecture/thinking-in-graphql",id:"version-v13.0.0/principles-and-architecture/thinking-in-graphql",title:"Thinking in GraphQL",description:"Relay guide to thinking in GraphQL",source:"@site/versioned_docs/version-v13.0.0/principles-and-architecture/thinking-in-graphql.md",sourceDirName:"principles-and-architecture",slug:"/principles-and-architecture/thinking-in-graphql/",permalink:"/docs/v13.0.0/principles-and-architecture/thinking-in-graphql/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/principles-and-architecture/thinking-in-graphql.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Sam Zhou",lastUpdatedAt:1672796747,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{id:"thinking-in-graphql",title:"Thinking in GraphQL",slug:"/principles-and-architecture/thinking-in-graphql/",description:"Relay guide to thinking in GraphQL",keywords:["GraphQL"]},sidebar:"version-v13.0.0/docs",previous:{title:"Debugging Declarative Mutation Directives",permalink:"/docs/v13.0.0/debugging/declarative-mutation-directives/"},next:{title:"Thinking in Relay",permalink:"/docs/v13.0.0/principles-and-architecture/thinking-in-relay/"}},d={},p=[{value:"Fetching Data",id:"fetching-data",level:2},{value:"Client Caching",id:"client-caching",level:2},{value:"Cache Consistency",id:"cache-consistency",level:2},{value:"Caching A Graph",id:"caching-a-graph",level:3},{value:"Using The Cache",id:"using-the-cache",level:3},{value:"Populating The Cache",id:"populating-the-cache",level:3},{value:"Reading From Cache",id:"reading-from-cache",level:3},{value:"Cache Updates",id:"cache-updates",level:3},{value:"Data/View Consistency",id:"dataview-consistency",level:2},{value:"Achieving View Consistency",id:"achieving-view-consistency",level:3},{value:"Mutations",id:"mutations",level:2},{value:"Data-Fetching APIs",id:"data-fetching-apis",level:2}],m={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"GraphQL presents new ways for clients to fetch data by focusing on the needs of product developers and client applications. It provides a way for developers to specify the precise data needed for a view and enables a client to fetch that data in a single network request. Compared to traditional approaches such as REST, GraphQL helps applications to fetch data more efficiently (compared to resource-oriented REST approaches) and avoid duplication of server logic (which can occur with custom endpoints). Furthermore, GraphQL helps developers to decouple product code and server logic. For example, a product can fetch more or less information without requiring a change to every relevant server endpoint. It's a great way to fetch data."),(0,i.mdx)("p",null,"In this article we'll explore what it means to build a GraphQL client framework and how this compares to clients for more traditional REST systems. Along the way we'll look at the design decisions behind Relay and see that it's not just a GraphQL client but also a framework for ",(0,i.mdx)("em",{parentName:"p"},"declarative data-fetching"),". Let's start at the beginning and fetch some data!"),(0,i.mdx)("h2",{id:"fetching-data"},"Fetching Data"),(0,i.mdx)("p",null,"Imagine we have a simple application that fetches a list of stories, and some details about each one. Here's how that might look in resource-oriented REST:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Fetch the list of story IDs but not their details:\nrest.get(\'/stories\').then(stories =>\n  // This resolves to a list of items with linked resources:\n  // `[ { href: "http://.../story/1" }, ... ]`\n  Promise.all(stories.map(story =>\n    rest.get(story.href) // Follow the links\n  ))\n).then(stories => {\n  // This resolves to a list of story items:\n  // `[ { id: "...", text: "..." } ]`\n  console.log(stories);\n});\n')),(0,i.mdx)("p",null,"Note that this approach requires ",(0,i.mdx)("em",{parentName:"p"},"n+1")," requests to the server: 1 to fetch the list, and ",(0,i.mdx)("em",{parentName:"p"},"n")," to fetch each item. With GraphQL we can fetch the same data in a single network request to the server (without creating a custom endpoint that we'd then have to maintain):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'graphql.get(`query { stories { id, text } }`).then(\n  stories => {\n    // A list of story items:\n    // `[ { id: "...", text: "..." } ]`\n    console.log(stories);\n  }\n);\n')),(0,i.mdx)("p",null,"So far we're just using GraphQL as a more efficient version of typical REST approaches. Note two important benefits in the GraphQL version:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"All data is fetched in a single round trip."),(0,i.mdx)("li",{parentName:"ul"},"The client and server are decoupled: the client specifies the data needed instead of ",(0,i.mdx)("em",{parentName:"li"},"relying on")," the server endpoint to return the correct data.")),(0,i.mdx)("p",null,"For a simple application that's already a nice improvement."),(0,i.mdx)("h2",{id:"client-caching"},"Client Caching"),(0,i.mdx)("p",null,"Repeatedly refetching information from the server can get quite slow. For example, navigating from the list of stories, to a list item, and back to the list of stories means we have to refetch the whole list. We'll solve this with the standard solution: ",(0,i.mdx)("em",{parentName:"p"},"caching"),"."),(0,i.mdx)("p",null,"In a resource-oriented REST system, we can maintain a ",(0,i.mdx)("strong",{parentName:"p"},"response cache")," based on URIs:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"var _cache = new Map();\nrest.get = uri => {\n  if (!_cache.has(uri)) {\n    _cache.set(uri, fetch(uri));\n  }\n  return _cache.get(uri);\n};\n")),(0,i.mdx)("p",null,"Response-caching can also be applied to GraphQL. A basic approach would work similarly to the REST version. The text of the query itself can be used as a cache key:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"var _cache = new Map();\ngraphql.get = queryText => {\n  if (!_cache.has(queryText)) {\n    _cache.set(queryText, fetchGraphQL(queryText));\n  }\n  return _cache.get(queryText);\n};\n")),(0,i.mdx)("p",null,"Now, requests for previously cached data can be answered immediately without making a network request. This is a practical approach to improving the perceived performance of an application. However, this method of caching can cause problems with data consistency."),(0,i.mdx)("h2",{id:"cache-consistency"},"Cache Consistency"),(0,i.mdx)("p",null,"With GraphQL it is very common for the results of multiple queries to overlap. However, our response cache from the previous section doesn't account for this overlap \u2014 it caches based on distinct queries. For example, if we issue a query to fetch stories:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query { stories { id, text, likeCount } }\n")),(0,i.mdx)("p",null,"and then later refetch one of the stories whose ",(0,i.mdx)("inlineCode",{parentName:"p"},"likeCount")," has since been incremented:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'query { story(id: "123") { id, text, likeCount } }\n')),(0,i.mdx)("p",null,"We'll now see different ",(0,i.mdx)("inlineCode",{parentName:"p"},"likeCount"),"s depending on how the story is accessed. A view that uses the first query will see an outdated count, while a view using the second query will see the updated count."),(0,i.mdx)("h3",{id:"caching-a-graph"},"Caching A Graph"),(0,i.mdx)("p",null,"The solution to caching GraphQL is to normalize the hierarchical response into a flat collection of ",(0,i.mdx)("strong",{parentName:"p"},"records"),". Relay implements this cache as a map from IDs to records. Each record is a map from field names to field values. Records may also link to other records (allowing it to describe a cyclic graph), and these links are stored as a special value type that references back into the top-level map. With this approach each server record is stored ",(0,i.mdx)("em",{parentName:"p"},"once")," regardless of how it is fetched."),(0,i.mdx)("p",null,"Here's an example query that fetches a story's text and its author's name:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n  story(id: "1") {\n    text,\n    author {\n      name\n    }\n  }\n}\n')),(0,i.mdx)("p",null,"And here's a possible response:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "query": {\n    "story": {\n      "text": "Relay is open-source!",\n      "author": {\n        "name": "Jan"\n      }\n    }\n  }\n}\n')),(0,i.mdx)("p",null,"Although the response is hierarchical, we'll cache it by flattening all the records. Here is an example of how Relay would cache this query response:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"Map {\n  // `story(id: \"1\")`\n  1: Map {\n    text: 'Relay is open-source!',\n    author: Link(2),\n  },\n  // `story.author`\n  2: Map {\n    name: 'Jan',\n  },\n};\n")),(0,i.mdx)("p",null,"This is only a simple example: in reality the cache must handle one-to-many associations and pagination (among other things)."),(0,i.mdx)("h3",{id:"using-the-cache"},"Using The Cache"),(0,i.mdx)("p",null,"So how do we use this cache? Let's look at two operations: writing to the cache when a response is received, and reading from the cache to determine if a query can be fulfilled locally (the equivalent to ",(0,i.mdx)("inlineCode",{parentName:"p"},"_cache.has(key)")," above, but for a graph)."),(0,i.mdx)("h3",{id:"populating-the-cache"},"Populating The Cache"),(0,i.mdx)("p",null,"Populating the cache involves walking a hierarchical GraphQL response and creating or updating normalized cache records. At first it may seem that the response alone is sufficient to process the response, but in fact this is only true for very simple queries. Consider ",(0,i.mdx)("inlineCode",{parentName:"p"},'user(id: "456") { photo(size: 32) { uri } }')," \u2014 how should we store ",(0,i.mdx)("inlineCode",{parentName:"p"},"photo"),"? Using ",(0,i.mdx)("inlineCode",{parentName:"p"},"photo")," as the field name in the cache won't work because a different query might fetch the same field but with different argument values (e.g. ",(0,i.mdx)("inlineCode",{parentName:"p"},"photo(size: 64) {...}"),"). A similar issue occurs with pagination. If we fetch the 11th to 20th stories with ",(0,i.mdx)("inlineCode",{parentName:"p"},"stories(first: 10, offset: 10)"),", these new results should be ",(0,i.mdx)("em",{parentName:"p"},"appended")," to the existing list."),(0,i.mdx)("p",null,"Therefore, a normalized response cache for GraphQL requires processing payloads and queries in parallel. For example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"photo")," field from above might be cached with a generated field name such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"photo_size(32)")," in order to uniquely identify the field and its argument values."),(0,i.mdx)("h3",{id:"reading-from-cache"},"Reading From Cache"),(0,i.mdx)("p",null,"To read from the cache we can walk a query and resolve each field. But wait: that sounds ",(0,i.mdx)("em",{parentName:"p"},"exactly")," like what a GraphQL server does when it processes a query. And it is! Reading from the cache is a special case of an executor where a) there's no need for user-defined field functions because all results come from a fixed data structure and b) results are always synchronous \u2014 we either have the data cached or we don't."),(0,i.mdx)("p",null,"Relay implements several variations of ",(0,i.mdx)("strong",{parentName:"p"},"query traversal"),': operations that walk a query alongside some other data such as the cache or a response payload. For example, when a query is fetched Relay performs a "diff" traversal to determine what fields are missing (much like React diffs virtual DOM trees). This can reduce the amount of data fetched in many common cases and even allow Relay to avoid network requests at all when queries are fully cached.'),(0,i.mdx)("h3",{id:"cache-updates"},"Cache Updates"),(0,i.mdx)("p",null,"Note that this normalized cache structure allows overlapping results to be cached without duplication. Each record is stored once regardless of how it is fetched. Let's return to the earlier example of inconsistent data and see how this cache helps in that scenario."),(0,i.mdx)("p",null,"The first query was for a list of stories:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query { stories { id, text, likeCount } }\n")),(0,i.mdx)("p",null,"With a normalized response cache, a record would be created for each story in the list. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"stories")," field would store links to each of these records."),(0,i.mdx)("p",null,"The second query refetched the information for one of those stories:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'query { story(id: "123") { id, text, likeCount } }\n')),(0,i.mdx)("p",null,"When this response is normalized, Relay can detect that this result overlaps with existing data based on its ",(0,i.mdx)("inlineCode",{parentName:"p"},"id"),". Rather than create a new record, Relay will update the existing ",(0,i.mdx)("inlineCode",{parentName:"p"},"123")," record. The new ",(0,i.mdx)("inlineCode",{parentName:"p"},"likeCount")," is therefore available to ",(0,i.mdx)("em",{parentName:"p"},"both")," queries, as well as any other query that might reference this story."),(0,i.mdx)("h2",{id:"dataview-consistency"},"Data/View Consistency"),(0,i.mdx)("p",null,"A normalized cache ensures that the ",(0,i.mdx)("em",{parentName:"p"},"cache")," is consistent. But what about our views? Ideally, our React views would always reflect the current information from the cache."),(0,i.mdx)("p",null,"Consider rendering the text and comments of a story along with the corresponding author names and photos. Here's the GraphQL query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'query {\n  story(id: "1") {\n    text,\n    author { name, photo },\n    comments {\n      text,\n      author { name, photo }\n    }\n  }\n}\n')),(0,i.mdx)("p",null,"After initially fetching this story our cache might be as follows. Note that the story and comment both link to the same record as ",(0,i.mdx)("inlineCode",{parentName:"p"},"author"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"// Note: This is pseudo-code for `Map` initialization to make the structure\n// more obvious.\nMap {\n  // `story(id: \"1\")`\n  1: Map {\n    text: 'got GraphQL?',\n    author: Link(2),\n    comments: [Link(3)],\n  },\n  // `story.author`\n  2: Map {\n    name: 'Yuzhi',\n    photo: 'http://.../photo1.jpg',\n  },\n  // `story.comments[0]`\n  3: Map {\n    text: 'Here\\'s how to get one!',\n    author: Link(2),\n  },\n}\n")),(0,i.mdx)("p",null,"The author of this story also commented on it \u2014 quite common. Now imagine that some other view fetches new information about the author, and her profile photo has changed to a new URI. Here's the ",(0,i.mdx)("em",{parentName:"p"},"only")," part of our cached data that changes:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"Map {\n  ...\n  2: Map {\n    ...\n    photo: 'http://.../photo2.jpg',\n  },\n}\n")),(0,i.mdx)("p",null,"The value of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"photo")," field has changed; and therefore the record ",(0,i.mdx)("inlineCode",{parentName:"p"},"2")," has also changed. And that's it. Nothing else in the ",(0,i.mdx)("em",{parentName:"p"},"cache")," is affected. But clearly our ",(0,i.mdx)("em",{parentName:"p"},"view")," needs to reflect the update: both instances of the author in the UI (as story author and comment author) need to show the new photo."),(0,i.mdx)("p",null,'A standard response is to "just use immutable data structures" \u2014 but let\'s see what would happen if we did:'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"ImmutableMap {\n  1: ImmutableMap // same as before\n  2: ImmutableMap {\n    ... // other fields unchanged\n    photo: 'http://.../photo2.jpg',\n  },\n  3: ImmutableMap // same as before\n}\n")),(0,i.mdx)("p",null,"If we replace ",(0,i.mdx)("inlineCode",{parentName:"p"},"2")," with a new immutable record, we'll also get a new immutable instance of the cache object. However, records ",(0,i.mdx)("inlineCode",{parentName:"p"},"1")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"3")," are untouched. Because the data is normalized, we can't tell that ",(0,i.mdx)("inlineCode",{parentName:"p"},"story"),"'s contents have changed just by looking at the ",(0,i.mdx)("inlineCode",{parentName:"p"},"story")," record alone."),(0,i.mdx)("h3",{id:"achieving-view-consistency"},"Achieving View Consistency"),(0,i.mdx)("p",null,"There are a variety of solutions for keeping views up to date with a flattened cache. The approach that Relay takes is to maintain a mapping from each UI view to the set of IDs it references. In this case, the story view would subscribe to updates on the story (",(0,i.mdx)("inlineCode",{parentName:"p"},"1"),"), the author (",(0,i.mdx)("inlineCode",{parentName:"p"},"2"),"), and the comments (",(0,i.mdx)("inlineCode",{parentName:"p"},"3")," and any others). When writing data into the cache, Relay tracks which IDs are affected and notifies ",(0,i.mdx)("em",{parentName:"p"},"only")," the views that are subscribed to those IDs. The affected views re-render, and unaffected views opt-out of re-rendering for better performance (Relay provides a safe but effective default ",(0,i.mdx)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"). Without this strategy, every view would re-render for even the tiniest change."),(0,i.mdx)("p",null,"Note that this solution will also work for ",(0,i.mdx)("em",{parentName:"p"},"writes"),": any update to the cache will notify the affected views, and writes are just another thing that updates the cache."),(0,i.mdx)("h2",{id:"mutations"},"Mutations"),(0,i.mdx)("p",null,"So far we've looked at the process of querying data and keeping views up to date, but we haven't looked at writes. In GraphQL, writes are called ",(0,i.mdx)("strong",{parentName:"p"},"mutations"),". We can think of them as queries with side effects. Here's an example of calling a mutation that might mark a given story as being liked by the current user:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"// Give a human-readable name and define the types of the inputs,\n// in this case the id of the story to mark as liked.\nmutation StoryLike($storyID: String) {\n   // Call the mutation field and trigger its side effects\n   storyLike(storyID: $storyID) {\n     // Define fields to re-fetch after the mutation completes\n     likeCount\n   }\n}\n")),(0,i.mdx)("p",null,"Notice that we're querying for data that ",(0,i.mdx)("em",{parentName:"p"},"may")," have changed as a result of the mutation. An obvious question is: why can't the server just tell us what changed? The answer is: it's complicated. GraphQL abstracts over ",(0,i.mdx)("em",{parentName:"p"},"any")," data storage layer (or an aggregation of multiple sources), and works with any programming language. Furthermore, the goal of GraphQL is to provide data in a form that is useful to product developers building a view."),(0,i.mdx)("p",null,"We've found that it's common for the GraphQL schema to differ slightly or even substantially from the form in which data is stored on disk. Put simply: there isn't always a 1:1 correspondence between data changes in your underlying ",(0,i.mdx)("em",{parentName:"p"},"data storage")," (disk) and data changes in your ",(0,i.mdx)("em",{parentName:"p"},"product-visible schema")," (GraphQL). The perfect example of this is privacy: returning a user-facing field such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"age")," might require accessing numerous records in our data-storage layer to determine if the active user is even allowed to ",(0,i.mdx)("em",{parentName:"p"},"see")," that ",(0,i.mdx)("inlineCode",{parentName:"p"},"age")," (Are we friends? Is my age shared? Did I block you? etc.)."),(0,i.mdx)("p",null,"Given these real-world constraints, the approach in GraphQL is for clients to query for things that may change after a mutation. But what exactly do we put in that query? During the development of Relay we explored several ideas \u2014 let's look at them briefly in order to understand why Relay uses the approach that it does:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Option 1: Re-fetch everything that the app has ever queried. Even though only a small subset of this data will actually change, we'll still have to wait for the server to execute the ",(0,i.mdx)("em",{parentName:"p"},"entire")," query, wait to download the results, and wait to process them again. This is very inefficient.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Option 2: Re-fetch only the queries required by actively rendered views. This is a slight improvement over option 1. However, cached data that ",(0,i.mdx)("em",{parentName:"p"},"isn't")," currently being viewed won't be updated. Unless this data is somehow marked as stale or evicted from the cache subsequent queries will read outdated information.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Option 3: Re-fetch a fixed list of fields that ",(0,i.mdx)("em",{parentName:"p"},"may")," change after the mutation. We'll call this list a ",(0,i.mdx)("strong",{parentName:"p"},"fat query"),". We found this to also be inefficient because typical applications only render a subset of the fat query, but this approach would require fetching all of those fields.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Option 4 (Relay): Re-fetch the intersection of what may change (the fat query) and the data in the cache. In addition to the cache of data Relay also remembers the queries used to fetch each item. These are called ",(0,i.mdx)("strong",{parentName:"p"},"tracked queries"),". By intersecting the tracked and fat queries, Relay can query exactly the set of information the application needs to update and nothing more."))),(0,i.mdx)("h2",{id:"data-fetching-apis"},"Data-Fetching APIs"),(0,i.mdx)("p",null,"So far we looked at the lower-level aspects of data-fetching and saw how various familiar concepts translate to GraphQL. Next, let's step back and look at some higher-level concerns that product developers often face around data-fetching:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Fetching all the data for a view hierarchy."),(0,i.mdx)("li",{parentName:"ul"},"Managing asynchronous state transitions and coordinating concurrent requests."),(0,i.mdx)("li",{parentName:"ul"},"Managing errors."),(0,i.mdx)("li",{parentName:"ul"},"Retrying failed requests."),(0,i.mdx)("li",{parentName:"ul"},"Updating the local cache after receiving query/mutation responses."),(0,i.mdx)("li",{parentName:"ul"},"Queuing mutations to avoid race conditions."),(0,i.mdx)("li",{parentName:"ul"},"Optimistically updating the UI while waiting for the server to respond to mutations.")),(0,i.mdx)("p",null,"We've found that typical approaches to data-fetching \u2014 with imperative APIs \u2014 force developers to deal with too much of this non-essential complexity. For example, consider ",(0,i.mdx)("em",{parentName:"p"},"optimistic UI updates"),". This is a way of giving the user feedback while waiting for a server response. The logic of ",(0,i.mdx)("em",{parentName:"p"},"what"),' to do can be quite clear: when the user clicks "like", mark the story as being liked and send the request to the server. But the implementation is often much more complex. Imperative approaches require us to implement all of those steps: reach into the UI and toggle the button, initiate a network request, retry it if necessary, show an error if it fails (and untoggle the button), etc. The same goes for data-fetching: specifying ',(0,i.mdx)("em",{parentName:"p"},"what")," data we need often dictates ",(0,i.mdx)("em",{parentName:"p"},"how")," and ",(0,i.mdx)("em",{parentName:"p"},"when")," it is fetched. Next, we'll explore our approach to solving these concerns with ",(0,i.mdx)("strong",{parentName:"p"},"Relay"),"."),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}u.isMDXComponent=!0}}]);