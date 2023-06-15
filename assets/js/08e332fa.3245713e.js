"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4493],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>l});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){return function(t){var a=p(t.components);return n.createElement(e,o({},t,{components:a}))}},p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),l=p(a),c=r,u=l["".concat(i,".").concat(c)]||l[c]||g[c]||o;return a?n.createElement(u,s(s({ref:t},m),{},{components:a})):n.createElement(u,s({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},48453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:30,title:"Data Format"},i="ASE Data Format",s={unversionedId:"open_datasets/aria_synthetic_environments_dataset/ase_data_format",id:"open_datasets/aria_synthetic_environments_dataset/ase_data_format",title:"Data Format",description:"This page gives an overview of the data format and organization and helps researchers to quickly understand the data. With the help of snippets and tools listed in Data tools and visualisation, they can quickly onboard this data in their ML pipelines.",source:"@site/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_format.mdx",sourceDirName:"open_datasets/aria_synthetic_environments_dataset",slug:"/open_datasets/aria_synthetic_environments_dataset/ase_data_format",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_format",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_format.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Data Format"},sidebar:"tutorialSidebar",previous:{title:"Dataset Download",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset"},next:{title:"Data Tools and Visualisation",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_tools"}},d={},m=[{value:"Overall Data Organization",id:"overall-data-organization",level:2},{value:"Aria RGB Sensor - Image, Depth and Instance Segmentation",id:"aria-rgb-sensor---image-depth-and-instance-segmentation",level:2},{value:"ASE Scene Language Format",id:"ase-scene-language-format",level:2},{value:"Trajectory and Semi-dense Point Cloud",id:"trajectory-and-semi-dense-point-cloud",level:2}],l={toc:m},p="wrapper";function c(e){let{components:t,...o}=e;return(0,r.mdx)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"ase-data-format"},"ASE Data Format"),(0,r.mdx)("p",null,"This page gives an overview of the data format and organization and helps researchers to quickly understand the data. With the help of snippets and tools listed in ",(0,r.mdx)("a",{parentName:"p",href:"ase_data_tools"},"Data tools and visualisation"),", they can quickly onboard this data in their ML pipelines."),(0,r.mdx)("p",null,"There is a separate subdirectory for every scene, which is named by a unique ID (0 - 100K). Within each scene directory, there are separate files and directories for different types of data as follows:"),(0,r.mdx)("h2",{id:"overall-data-organization"},"Overall Data Organization"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"<sceneID>\n\u251c\u2500\u2500 rgb\n\u2502   \u2514\u2500\u2500 vignette0000000.jpg\n\u2502   \u2514\u2500\u2500 vignette0000001.jpg\n\u2502   ...\n\u2502   \u2514\u2500\u2500 vignette0xxn.jpg\n\u251c\u2500\u2500 depth\n\u2502   \u2514\u2500\u2500 depth0000000.jpg\n\u2502   \u2514\u2500\u2500 depth0000001.jpg\n\u2502   ...\n\u2502   \u2514\u2500\u2500 depth0xxn.jpg\n\u251c\u2500\u2500 instances\n\u2502   \u2514\u2500\u2500 instance0000000.jpg\n\u2502   \u2514\u2500\u2500 instance0000001.jpg\n\u2502   ...\n\u2502   \u2514\u2500\u2500 instance0xxn.jpg\n\u251c\u2500\u2500 ase_scene_language.txt\n\u251c\u2500\u2500 trajectory.txt\n\u251c\u2500\u2500 semidense_points.csv.gz\n\u2514\u2500\u2500 semidense_observations.csv.gz\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"rgb")," - ",(0,r.mdx)("strong",{parentName:"li"},"2D RGB Vignetted Fisheye")," images (Aria RGB sensor only) (format: RGB) (10 FPS)."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"depth")," - ",(0,r.mdx)("strong",{parentName:"li"},"2D Depth maps")," (16 bit) (Aria RGB sensor only) (format: PNG) (10 FPS).."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"instances")," - ",(0,r.mdx)("strong",{parentName:"li"},"2D Segmentation maps")," (16 bit) (Aria RGB sensor only) (format: PNG) (10 FPS)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"ase_scene_language.txt")," - ",(0,r.mdx)("strong",{parentName:"li"},"3D Floor plan")," in Aria Synthetic Environment Language Format."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"trajectory.txt")," - ",(0,r.mdx)("strong",{parentName:"li"},"Ground Truth trajectory"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"semidense_points.csv.gz")," - ",(0,r.mdx)("strong",{parentName:"li"},"Semi Dense Map Points")," from MPS ran on the SLAM cameras from Aria sensor"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"semidense_observations.csv.gz")," - ",(0,r.mdx)("strong",{parentName:"li"},"Semi Dense Map Observations")," from MPS ran on the SLAM cameras from Aria sensor")),(0,r.mdx)("h2",{id:"aria-rgb-sensor---image-depth-and-instance-segmentation"},"Aria RGB Sensor - Image, Depth and Instance Segmentation"),(0,r.mdx)("p",null,"For each frame from the RGB sensor we provide the vignetted sensor image, simulated 16 bit metric depth (mm) in PNG image format and the segmentation image (16 bit PNG). The images in each folder are in sync i.e. there will be same number of images in each folder. We also provide example data visualizers to load these images and/or associate them.\n",(0,r.mdx)("img",{alt:"Image: sample_rgb_depth_instance_images.png",src:a(1783).Z,width:"2696",height:"882"})),(0,r.mdx)("h2",{id:"ase-scene-language-format"},"ASE Scene Language Format"),(0,r.mdx)("p",null,"The Scene language format is set of hand-designed procedural commands in pure text form. To handle commonly encountered static indoor layout elements, we use three commands: ",(0,r.mdx)("strong",{parentName:"p"},"make_wall"),", ",(0,r.mdx)("strong",{parentName:"p"},"make_door"),", and ",(0,r.mdx)("strong",{parentName:"p"},"make_window"),"."),(0,r.mdx)("p",null,"Each command includes its own set of parameters, as described below. Given the command\u2019s full set of parameters, a geometry is completely specified. For example, for ",(0,r.mdx)("strong",{parentName:"p"},"make_wall"),", the full set of parameters specifies a gravity-aligned oriented box, while make_door and make_window specify box-based cutouts from walls."),(0,r.mdx)("p",null,"A single scene is described via a sequence of multiple commands. The sequence length is arbitrary and follows no specific ordering. The interpretation of the command and its arguments is carried out by a customized interpreter responsible for parsing the sequence and generating a 3D mesh of the scene."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Image: language_format.png",src:a(17699).Z,width:"1254",height:"461"})),(0,r.mdx)("h2",{id:"trajectory-and-semi-dense-point-cloud"},"Trajectory and Semi-dense Point Cloud"),(0,r.mdx)("p",null,"Ground truth trajectory data provides poses for each frame generated from simulation at 10 FPS.\nWe are following the same trajectory format as ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_trajectory#closed-loop-trajectory"},"the closed loop trajectory in MPS"),"."),(0,r.mdx)("p",null,"For semi-dense point clouds and their observations, we are following the same ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_pointcloud"},"point cloud points and observations format as MPS"),". The semi-dense point cloud is generated from the same algorithm in MPS, with ground truth trajectory and simulated SLAM camera images."))}c.isMDXComponent=!0},17699:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/language_format-639fb56c1943ec56f331239d4af59e2b.png"},1783:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sample_rgb_depth_instance_images-a53f1903a7bf8f4eb8a2970134211e1c.png"}}]);