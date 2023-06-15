"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9374],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){return function(t){var a=p(t.components);return n.createElement(e,o({},t,{components:a}))}},p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(a),c=r,u=s["".concat(i,".").concat(c)]||s[c]||f[c]||o;return a?n.createElement(u,m(m({ref:t},d),{},{components:a})):n.createElement(u,m({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[u]="string"==typeof e?e:r,i[1]=m;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},27795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:70,title:"Eye Gaze"},i="MPS output - Eye gaze",m={unversionedId:"data_formats/mps/mps_eye_gaze",id:"data_formats/mps/mps_eye_gaze",title:"Eye Gaze",description:"Eye Gaze Data Format",source:"@site/docs/data_formats/mps/mps_eye_gaze.mdx",sourceDirName:"data_formats/mps",slug:"/data_formats/mps/mps_eye_gaze",permalink:"/projectaria_tools/docs/data_formats/mps/mps_eye_gaze",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/mps/mps_eye_gaze.mdx",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"Eye Gaze"},sidebar:"tutorialSidebar",previous:{title:"Semi-Dense Point Cloud",permalink:"/projectaria_tools/docs/data_formats/mps/mps_pointcloud"},next:{title:"2D Image Coordinate System Conventions",permalink:"/projectaria_tools/docs/data_formats/coordinate_convention/2d_image_coordinate_system_convention"}},l={},d=[{value:"Eye Gaze Data Format",id:"eye-gaze-data-format",level:2},{value:"Yaw/Pitch to 3D vector conversion",id:"yawpitch-to-3d-vector-conversion",level:2}],s={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.mdx)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"mps-output---eye-gaze"},"MPS output - Eye gaze"),(0,r.mdx)("h2",{id:"eye-gaze-data-format"},"Eye Gaze Data Format"),(0,r.mdx)("p",null,"MPS uses Aria's eye tracking camera images to estimate the direction in which the user is looking.  This eye gaze estimation is in ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention#the-nominal-central-pupil-frame-cpf"},"Central Pupil Frame"),". The output is generated in csv format and consists of the following fields"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"th"},"Column")),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tracking_timestamp_us")),(0,r.mdx)("td",{parentName:"tr",align:null},"int"),(0,r.mdx)("td",{parentName:"tr",align:null},"This is the timestamp, in microseconds, of the eye tracking camera frame in device time domain. The MPS location output also contains pose estimations in the same time domain and these timestamps can be directly used to infer the device pose from the MPS location output.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"yaw_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"This is the eye gaze yaw angle in radians in CPF frame. The yaw angle is the angle between the projection of the eye gaze vector (originating at CPF) on XZ plane and the Z axis in the CPF frame.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pitch_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"This is the eye gaze pitch angle in radians in CPF frame. The pitch angle is the angle between the projection of the eye gaze vector (originating at CPF) on YZ plane and the Z axis in the CPF frame.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"depth_m")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"This is the absolute depth in meters of the 3D gaze point in CPF frame. This value is currently not available as part of MPS output.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"yaw_low_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"This value represents the lower bound of the confidence interval for the ",(0,r.mdx)("strong",{parentName:"td"},"yaw")," estimation.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pitch_low_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"This value represents the lower bound of the confidence interval for the ",(0,r.mdx)("strong",{parentName:"td"},"pitch")," estimation.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"yaw_high_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"This value represents the upper bound of the confidence interval for the ",(0,r.mdx)("strong",{parentName:"td"},"yaw")," estimation.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pitch_high_rads_cpf")),(0,r.mdx)("td",{parentName:"tr",align:null},"float"),(0,r.mdx)("td",{parentName:"tr",align:null},"This value represents the upper bound of the confidence interval for the ",(0,r.mdx)("strong",{parentName:"td"},"pitch")," estimation.")))),(0,r.mdx)("p",null,"The confidence intervals represent the models uncertainty estimation. A smaller interval represents higher confidence and a wider interval represents lower confidence. The confidence interval angles are in radians and in CPF frame.\nSome common factors that impact uncertainty include:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Blinking"),(0,r.mdx)("li",{parentName:"ul"},"Hair occluding the eye tracking cameras"),(0,r.mdx)("li",{parentName:"ul"},"Re-adjusting glasses or taking them off to clean them")),(0,r.mdx)("p",null,"For utility function to load the eye gaze in Python and C++, please check the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/data_utilities/core_code_snippets/mps#eye-gaze"},"code examples")),(0,r.mdx)("h2",{id:"yawpitch-to-3d-vector-conversion"},"Yaw/Pitch to 3D vector conversion"),(0,r.mdx)("p",null,"A common use case is to convert the gaze angles into 3D vectors. To convert a gaze measurement (yaw/pitch) into a 3D gaze vector originating at the origin of CPF use the operation ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/mps/EyeGazeReader.h#L40"},"here"),"."))}c.isMDXComponent=!0}}]);