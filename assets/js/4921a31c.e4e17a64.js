"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8026],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){return function(t){var a=p(t.components);return n.createElement(e,o({},t,{components:a}))}},p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,u=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return a?n.createElement(u,d(d({ref:t},l),{},{components:a})):n.createElement(u,d({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=_;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:r,s[1]=d;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},21719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:20,title:"Dataset Download"},s=void 0,d={unversionedId:"open_datasets/aria_synthetic_environments_dataset/ase_download_dataset",id:"open_datasets/aria_synthetic_environments_dataset/ase_download_dataset",title:"Dataset Download",description:"By downloading the datasets you agree that you have read and accepted the terms of",source:"@site/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset.mdx",sourceDirName:"open_datasets/aria_synthetic_environments_dataset",slug:"/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Dataset Download"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started"},next:{title:"Data Format",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_format"}},i={},l=[{value:"Download via CLI",id:"download-via-cli",level:2},{value:"Detailed arguments",id:"detailed-arguments",level:3},{value:"Examples",id:"examples",level:2},{value:"Download ASE datasets",id:"download-ase-datasets",level:3},{value:"Download first 10 scenes",id:"download-first-10-scenes",level:4},{value:"Download a large number of scenes: This downloads all 100 scenes (10 chunks)",id:"download-a-large-number-of-scenes-this-downloads-all-100-scenes-10-chunks",level:4},{value:"Download specific scenes: 560-569",id:"download-specific-scenes-560-569",level:4}],c={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.mdx)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"By downloading the datasets you agree that you have read and accepted the terms of\nthe ",(0,r.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/datasets/ase/license/"},"Aria Synthetic Environments Dataset License Agreement"),"."),(0,r.mdx)("h1",{id:"download-the-ase-dataset"},"Download the ASE Dataset"),(0,r.mdx)("p",null,"Aria Synthetic Environment (ASE) dataset consists of 100K sequences of synthetically generated apartments. The entire dataset is splint up into 10 sequence chunks. This means the total number of chunks as 10K. The contents of each the sequence is detailed in ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("a",{parentName:"strong",href:"ase_data_format"},"Data Format"),".")," The total dataset of  ~23 TB."),(0,r.mdx)("h2",{id:"download-via-cli"},"Download via CLI"),(0,r.mdx)("p",null,"Follow the ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started"},"ASE quickstart guide")," to get the system ready to download data/example data.  This section will introduce how to download the dataset using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"aria_synthetic_environments_downloader")," python script."),(0,r.mdx)("h3",{id:"detailed-arguments"},"Detailed arguments"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Arguments"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--cdn_file"),(0,r.mdx)("td",{parentName:"tr",align:null},"str"),(0,r.mdx)("td",{parentName:"tr",align:null},"The download-urls file you downloaded from the ASE website page after signing up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--output-dir"),(0,r.mdx)("td",{parentName:"tr",align:null},"str"),(0,r.mdx)("td",{parentName:"tr",align:null},"A local path where the downloaded files will be stored")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--set"),(0,r.mdx)("td",{parentName:"tr",align:null},"str"),(0,r.mdx)("td",{parentName:"tr",align:null},"Download either ",(0,r.mdx)("strong",{parentName:"td"},"train")," / ",(0,r.mdx)("strong",{parentName:"td"},"test")," data. All the 100K data is for training data and comes with GT ASE language. At a later point we will add test data without GT ASE language, which will be used for evaluation")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--scene-ids"),(0,r.mdx)("td",{parentName:"tr",align:null},"str"),(0,r.mdx)("td",{parentName:"tr",align:null},"Range of scene ids to download")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"--unzip"),(0,r.mdx)("td",{parentName:"tr",align:null},"bool"),(0,r.mdx)("td",{parentName:"tr",align:null},"Allows the user to unzip in the output directory or keep it as a zip")))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("h3",{id:"download-ase-datasets"},"Download ASE datasets"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"cd $HOME/Documents/projectaria_sandbox/projectaria_tools\n")),(0,r.mdx)("h4",{id:"download-first-10-scenes"},"Download first 10 scenes"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"python3 projects/AriaSyntheticEnvironment/aria_synthetic_environments_downloader.py --set train --scene-ids 0-9 --cdn-file aria_synthetic_environments_dataset_download_urls.json --output-dir $HOME/projectaria_tools_ase_data --unzip True\n")),(0,r.mdx)("h4",{id:"download-a-large-number-of-scenes-this-downloads-all-100-scenes-10-chunks"},"Download a large number of scenes: This downloads all 100 scenes (10 chunks)"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"python3 projects/AriaSyntheticEnvironment/aria_synthetic_environments_downloader.py --set train --scene-ids 0-99 --cdn-file aria_synthetic_environments_dataset_download_urls.json --output-dir $HOME/projectaria_tools_ase_data --unzip True\n")),(0,r.mdx)("h4",{id:"download-specific-scenes-560-569"},"Download specific scenes: 560-569"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"python3 projects/AriaSyntheticEnvironment/aria_synthetic_environments_downloader.py --set train --scene-ids 560-569 --cdn-file aria_synthetic_environments_dataset_download_urls.json --output-dir $HOME/projectaria_tools_ase_data --unzip True\n")))}m.isMDXComponent=!0}}]);