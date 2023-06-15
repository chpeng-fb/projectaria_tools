"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5976],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>_,useMDXComponents:()=>c,withMDXComponents:()=>p});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},n.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=i.createContext({}),p=function(e){return function(t){var a=c(t.components);return i.createElement(e,n({},t,{components:a}))}},c=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},m="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,m=p["".concat(o,".").concat(u)]||p[u]||w[u]||n;return a?i.createElement(m,l(l({ref:t},d),{},{components:a})):i.createElement(m,l({ref:t},d))}));function _(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<n;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},57318:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=a(87462),r=(a(67294),a(3905));const n={sidebar_position:30,title:"Visualizers"},o=void 0,l={unversionedId:"open_datasets/aria_digital_twin_dataset/visualizers",id:"open_datasets/aria_digital_twin_dataset/visualizers",title:"Visualizers",description:"AriaDigitalTwinViewer",source:"@site/docs/open_datasets/aria_digital_twin_dataset/visualizers.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/visualizers",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/visualizers",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/visualizers.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Visualizers"},sidebar:"tutorialSidebar",previous:{title:"Dataset Download",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download"},next:{title:"Advanced Tutorials",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials"}},s={},d=[{value:"AriaDigitalTwinViewer",id:"ariadigitaltwinviewer",level:2},{value:"Step 1 : Download Sample Sequence:",id:"step-1--download-sample-sequence",level:3},{value:"Step 2 : Build projectaria_tools C++ libraries",id:"step-2--build-projectaria_tools-c-libraries",level:3},{value:"Step 3 : Build AriaDigitalTwinViewer",id:"step-3--build-ariadigitaltwinviewer",level:3},{value:"Step 4 : Run AriaDigitalTwinViewer",id:"step-4--run-ariadigitaltwinviewer",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.mdx)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"ariadigitaltwinviewer"},"AriaDigitalTwinViewer"),(0,r.mdx)("p",null,"AriaDigitalTwinViewer is a C++ binary written to visualize ADT data with toggles for each ground truth data type and a slider bar for frame selection. The image below shows an example screenshot of the viewer."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Image",src:a(20549).Z,width:"1217",height:"1397"})),(0,r.mdx)("h3",{id:"step-1--download-sample-sequence"},"Step 1 : Download Sample Sequence:"),(0,r.mdx)("p",null,"Download the sample Aria Digital Twin (ADT) sequence\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/open_datasets/aria_digital_twin_dataset/dataset_download#download-the-sample-aria-digital-twin-adt-sequence"},"follow this guide"),"."),(0,r.mdx)("h3",{id:"step-2--build-projectaria_tools-c-libraries"},"Step 2 : Build projectaria_tools C++ libraries"),(0,r.mdx)("p",null,"Follow the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/installation_cpp"},"entire C++ installation")," to build projectaria_tools C++ libraries with visualization."),(0,r.mdx)("h3",{id:"step-3--build-ariadigitaltwinviewer"},"Step 3 : Build AriaDigitalTwinViewer"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/Documents/projectaria_sandbox/build\n\ncmake ../projectaria_tools  -DPROJECTARIA_TOOLS_BUILD_PROJECTS=ON -DPROJECTARIA_TOOLS_BUILD_PROJECTS_ADT=ON\n\nmake -j2\n")),(0,r.mdx)("h3",{id:"step-4--run-ariadigitaltwinviewer"},"Step 4 : Run AriaDigitalTwinViewer"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/Documents/projectaria_sandbox/build\n\n./projects/AriaDigitalTwinDatasetTools/visualization/AriaDigitalTwinViewer \\\n--sequence-path $HOME/Documents/projectaria_tools_adt_data/Apartment_release_golden_skeleton_seq100_10s_sample/ \\\n--device-num 0 --skeleton-flag 0\n")),(0,r.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.mdx)("p",null,"Check the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/troubleshooting"},"troubleshooting")," if you are having issues in this guide."))}u.isMDXComponent=!0},20549:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/AdtViewer-b0ad6de9956ec3ec4f34423238fcbc3d.png"}}]);