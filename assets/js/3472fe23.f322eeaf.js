"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6740],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>b,useMDXComponents:()=>d,withMDXComponents:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){return function(t){var a=d(t.components);return n.createElement(e,o({},t,{components:a}))}},d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,m=p["".concat(l,".").concat(c)]||p[c]||h[c]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.default)(o.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(87462),r=a(67294),o=a(86010),l=a(72957),i=a(16550),s=a(75238),u=a(33609),p=a(92560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=a(51048);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.default)("tabs__item",w.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.default)("tabs-container",w.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(x,(0,n.Z)({},e,t)))}function g(e){const t=(0,b.default)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},6662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(73992),l=a(18679);const i={sidebar_position:110,title:"ARK SW Downloads"},s="ARK SW Downloads and Updates",u={unversionedId:"ARK/ark_downloads",id:"ARK/ark_downloads",title:"ARK SW Downloads",description:"The Aria Research Kit (ARK) provides the Aria Mobile Companion app and Desktop Companion app to researchers who use Project Aria glasses.",source:"@site/docs/ARK/ark_downloads.mdx",sourceDirName:"ARK",slug:"/ARK/ark_downloads",permalink:"/projectaria_tools/docs/ARK/ark_downloads",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/ark_downloads.mdx",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,title:"ARK SW Downloads"},sidebar:"tutorialSidebar",previous:{title:"Get Support",permalink:"/projectaria_tools/docs/ARK/troubleshooting/get_support"},next:{title:"Open Datasets",permalink:"/projectaria_tools/docs/open_datasets/"}},p={},d=[{value:"Mobile Companion App",id:"mobile-companion-app",level:2},{value:"Android",id:"android",level:3},{value:"Installation troubleshooting",id:"installation-troubleshooting",level:4},{value:"Desktop Companion App",id:"desktop-companion-app",level:2},{value:"Aria For MacOS Installer (Intel &amp; Apple Silicon)",id:"aria-for-macos-installer-intel--apple-silicon",level:3},{value:"Aria For Windows Installer",id:"aria-for-windows-installer",level:3},{value:"Aria For Linux Installer",id:"aria-for-linux-installer",level:3},{value:"Are the Companion apps open source?",id:"are-the-companion-apps-open-source",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.mdx)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"ark-sw-downloads-and-updates"},"ARK SW Downloads and Updates"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/docs/ARK/about_ARK"},"Aria Research Kit (ARK)")," provides the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/ARK/mobile_companion_app"},"Aria Mobile Companion app")," and ",(0,r.mdx)("a",{parentName:"p",href:"/docs/ARK/desktop_companion_app"},"Desktop Companion app")," to researchers who use Project Aria glasses."),(0,r.mdx)("p",null,"To be able to use Aria glasses you will need to use the Mobile Companion app. You only need to use the Desktop Companion app if you wish to request Machine Perceptions Services (MPS) on data you\u2019ve collected."),(0,r.mdx)("h2",{id:"mobile-companion-app"},"Mobile Companion App"),(0,r.mdx)("p",null,"The latest version is v125, go to ",(0,r.mdx)("a",{parentName:"p",href:"/docs/ARK/sw_release_notes"},"ARK Software Release Notes")," to find out about the latest features."),(0,r.mdx)("h3",{id:"android"},"Android"),(0,r.mdx)("p",null,"Follow one of these links on your Android device to download the app:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Mobile Companion App APK v125 - ",(0,r.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/android/Aria_v125_arm64.apk"},"recommended (64-bit architecture)")),(0,r.mdx)("li",{parentName:"ul"},"Mobile Companion App APK v125 - ",(0,r.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/android/Aria_v125_arm32.apk"},"for 32-bit architecture"))),(0,r.mdx)("p",null,"To update the app, download and install the latest version."),(0,r.mdx)("h4",{id:"installation-troubleshooting"},"Installation troubleshooting"),(0,r.mdx)("p",null,"If you see an error message such as \u201cfor security, your phone is not allowed to install unknown apps from this source\u201d you\u2019ll need to enable your web browser to install unknown apps."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Aria Mobile Companion App install error message",src:a(59350).Z,width:"243",height:"104"})),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Go to Settings \u2192 Apps & notifications \u2192 Advanced \u2192 Special app access \u2192 Install unknown apps."),(0,r.mdx)("li",{parentName:"ol"},"Select the app (usually your internet browser) that you want to grant permission to install from unknown sources."),(0,r.mdx)("li",{parentName:"ol"},"Select ",(0,r.mdx)("strong",{parentName:"li"},"Allow from this source"))),(0,r.mdx)("h2",{id:"desktop-companion-app"},"Desktop Companion App"),(0,r.mdx)("p",null,"The latest version is v37, go to ",(0,r.mdx)("a",{parentName:"p",href:"/docs/ARK/sw_release_notes"},"ARK Software Release Notes")," to find out about the latest features. To update the app, download and install the latest version."),(0,r.mdx)(o.default,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.mdx)(l.default,{value:"macos",label:"MacOS",mdxType:"TabItem"},(0,r.mdx)("h3",{id:"aria-for-macos-installer-intel--apple-silicon"},"Aria For MacOS Installer (Intel & Apple Silicon)"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/mac/Aria_v37.dmg"},"Download Aria's DMG installer")),(0,r.mdx)("li",{parentName:"ol"},"Open the downloaded file"),(0,r.mdx)("li",{parentName:"ol"},"Drag and drop Aria.app to your Applications folder"),(0,r.mdx)("li",{parentName:"ol"},"Double clicking on Aria.app to launch the app"))),(0,r.mdx)(l.default,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.mdx)("h3",{id:"aria-for-windows-installer"},"Aria For Windows Installer"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/windows/Aria_v37.msi"},"Download Aria's Windows installer")),(0,r.mdx)("li",{parentName:"ol"},"Open the installer and follow the instructions for the Aria Setup Wizard",(0,r.mdx)("ol",{parentName:"li"},(0,r.mdx)("li",{parentName:"ol"},"Sign the End-User License Agreement"),(0,r.mdx)("li",{parentName:"ol"},"Select a Destination folder"))),(0,r.mdx)("li",{parentName:"ol"},"Once the Aria Setup Wizard is complete you should see Aria as a shortcut on your desktop and under the Start Menu"))),(0,r.mdx)(l.default,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.mdx)("h3",{id:"aria-for-linux-installer"},"Aria For Linux Installer"),(0,r.mdx)("admonition",{title:"Aria for Linux has only been tested on Ubuntu 22.04 LTS version.",type:"caution"},(0,r.mdx)("p",{parentName:"admonition"},"It is important to note the app was only tested for that specific version under Gnome 42.5 and X11 (X Server) as well as Wayland. Any other debian-based distribution (Ubuntu 22.04 fork such as Kubuntu, Mint etc..) or any other desktop environment may or may not work.")),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/linux/Aria_v36.deb"},"Download Aria's Linux debian package")),(0,r.mdx)("li",{parentName:"ol"},"Right-click on the Deb file and select \u201cOpen With Other Application\u201c."),(0,r.mdx)("li",{parentName:"ol"},"Select \u201cSoftware Install\u201d and then \u201cSelect\u201d at the top-right."),(0,r.mdx)("li",{parentName:"ol"},"The Software Center will open up on the screen with information on the app you are installing."),(0,r.mdx)("li",{parentName:"ol"},"Select Install")),(0,r.mdx)("p",null,'The app will then be visible through "Activities"'))),(0,r.mdx)("h2",{id:"are-the-companion-apps-open-source"},"Are the Companion apps open source?"),(0,r.mdx)("p",null,"No, the Mobile and Desktop app are Meta Licensed Materials\xa0and are licensed by Meta to research partners via organizational or individual research agreements. Go to ",(0,r.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/research-kit/"},"projectaria.com"),"\xa0to find out how to become a research partner."),(0,r.mdx)("p",null,"This software is not part of Project Aria Tools, so it won\u2019t be downloaded when you install ",(0,r.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/projectaria_tools/docs/data_utilities"},"Project Aria Tools Data Utilities"),", which is open source and licensed under Apache 2.0."))}h.isMDXComponent=!0},59350:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/unknown_app_error-d581c4541eb38038eb21829448655ead.png"}}]);