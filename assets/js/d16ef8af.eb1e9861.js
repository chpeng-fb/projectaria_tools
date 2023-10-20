"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8172],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),m=function(e){return function(t){var r=p(t.components);return a.createElement(e,s({},t,{components:r}))}},p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,u=m["".concat(i,".").concat(d)]||m[d]||f[d]||s;return r?a.createElement(u,o(o({ref:t},c),{},{components:r})):a.createElement(u,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},84058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:5,title:"Code Samples"},i="Project Aria Client SDK Code Samples",o={unversionedId:"ARK/sdk/samples/samples",id:"ARK/sdk/samples/samples",title:"Code Samples",description:"This section provides code samples and walkthroughs for using the Aria Client SDK to interact with the Project Aria glasses.",source:"@site/docs/ARK/sdk/samples/samples.mdx",sourceDirName:"ARK/sdk/samples",slug:"/ARK/sdk/samples/",permalink:"/projectaria_tools/docs/ARK/sdk/samples/",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/sdk/samples/samples.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Code Samples"},sidebar:"tutorialSidebar",previous:{title:"Setup Guide",permalink:"/projectaria_tools/docs/ARK/sdk/setup"},next:{title:"Fetch Device Info & Status",permalink:"/projectaria_tools/docs/ARK/sdk/samples/device_connection"}},l={},c=[],m={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.mdx)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"project-aria-client-sdk-code-samples"},"Project Aria Client SDK Code Samples"),(0,n.mdx)("p",null,"This section provides code samples and walkthroughs for using the Aria Client SDK to interact with the Project Aria glasses."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/samples/device_connection"},"device_connect"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Connect to the Aria glasses using USB",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"USB connection is required to initiate all connections, including streaming over Wi-Fi"))),(0,n.mdx)("li",{parentName:"ul"},"Fetch device information, such as the device serial number"),(0,n.mdx)("li",{parentName:"ul"},"Fetch device status, such as battery level or Wi-Fi SSID."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/samples/device_recording"},"device_record"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Set a ",(0,n.mdx)("a",{parentName:"li",href:"/docs/tech_spec/recording_profiles"},"recording profile")),(0,n.mdx)("li",{parentName:"ul"},"Access sensor calibration through the recording manager"),(0,n.mdx)("li",{parentName:"ul"},"Start recording, stop recording, and record for a specific duration"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/samples/device_stream"},"device_stream"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Set how the sensors will stream data using ",(0,n.mdx)("a",{parentName:"li",href:"/docs/tech_spec/recording_profiles"},"recording profiles")),(0,n.mdx)("li",{parentName:"ul"},"Access sensor calibration through the streaming manager"),(0,n.mdx)("li",{parentName:"ul"},"Start and stop streaming data from Aria glasses"),(0,n.mdx)("li",{parentName:"ul"},"Display undistorted RGB live stream (this is similar to the visualization you can see via Aria Desktop app)"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk/samples/streaming_subscribe"},"streaming_subscribe"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Subscribe to a streaming session initiated by device_stream and access sensor data through its observer"),(0,n.mdx)("li",{parentName:"ul"},"Visualize the live stream"),(0,n.mdx)("li",{parentName:"ul"},"Unsubscribe from a streaming session")))),(0,n.mdx)("p",null,"Go to the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/setup"},"Setup Guide")," for how to access the code samples."),(0,n.mdx)("admonition",{type:"danger"},(0,n.mdx)("p",{parentName:"admonition"},"The Client SDK does not currently support streaming over corporate, university or public networks. Those networks are protected by many layers of security and firewalls. We recommend using one of the recommended routers listed in ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/setup"},"the setup instructions")," to stream over Wi-Fi.")))}d.isMDXComponent=!0}}]);