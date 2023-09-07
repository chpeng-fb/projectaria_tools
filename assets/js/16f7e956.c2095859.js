"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5902],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),d=function(e){return function(a){var t=p(a.components);return r.createElement(e,n({},a,{components:t}))}},p=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return r.createElement(u.Provider,{value:a},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=o,m=d["".concat(l,".").concat(c)]||d[c]||h[c]||n;return t?r.createElement(m,i(i({ref:a},u),{},{components:t})):r.createElement(m,i({ref:a},u))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,l=new Array(n);l[0]=g;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},18679:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var r=t(67294),o=t(86010);const n={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.default)(n.tabItem,l),hidden:t},a)}},73992:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var r=t(87462),o=t(67294),n=t(86010),l=t(72957),i=t(16550),s=t(75238),u=t(33609),d=t(92560);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:o}}=e;return{value:a,label:t,attributes:r,default:o}}))}function c(e){const{values:a,children:t}=e;return(0,o.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.k6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(n),(0,o.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(r.location.search);a.set(n,e),r.replace({...r.location,search:a.toString()})}),[n,r])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,n=c(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[s,u]=h({queryString:t,groupId:r}),[p,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,n]=(0,d.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:r}),f=(()=>{const e=s??p;return m({value:e,tabValues:n})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,n]),tabValues:n}}var f=t(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const a=e.currentTarget,t=d.indexOf(a),r=u[t].value;r!==i&&(p(a),s(r))},m=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.default)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,n.default)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:r}=e;const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function y(e){const a=g(e);return o.createElement("div",{className:(0,n.default)("tabs-container",b.tabList)},o.createElement(x,(0,r.Z)({},e,a)),o.createElement(v,(0,r.Z)({},e,a)))}function w(e){const a=(0,f.default)();return o.createElement(y,(0,r.Z)({key:String(a)},e))}},8389:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var r=t(87462),o=(t(67294),t(3905)),n=t(73992),l=t(18679),i=t(79524),s=t(7909);const u={sidebar_position:20,title:"Aria Glasses Quickstart"},d="Project Aria Glasses Quickstart",p={unversionedId:"ARK/ARK_quickstart",id:"ARK/ARK_quickstart",title:"Aria Glasses Quickstart",description:"This page provides a quick overview of what to do once you have received your Project Aria glasses. To find out how to get Aria Glasses, go to projectaria.com.",source:"@site/docs/ARK/ARK_quickstart.mdx",sourceDirName:"ARK",slug:"/ARK/ARK_quickstart",permalink:"/projectaria_tools/docs/ARK/ARK_quickstart",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/ARK_quickstart.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Aria Glasses Quickstart"},sidebar:"tutorialSidebar",previous:{title:"Get the Right Size Glasses",permalink:"/projectaria_tools/docs/ARK/frame_sizing"},next:{title:"Aria Community",permalink:"/projectaria_tools/docs/ARK/workplacegroup"}},c={},m=[{value:"Get set up",id:"get-set-up",level:2},{value:"Get connected",id:"get-connected",level:2},{value:"Get to know your glasses",id:"get-to-know-your-glasses",level:2},{value:"Update your glasses",id:"update-your-glasses",level:2},{value:"Install the Mobile companion app",id:"install-the-mobile-companion-app",level:3},{value:"Pair your glasses",id:"pair-your-glasses",level:3},{value:"Set your Default Recording Profile",id:"set-your-default-recording-profile",level:2},{value:"Install the Desktop app (Optional)",id:"install-the-desktop-app-optional",level:2},{value:"Record Data",id:"record-data",level:2},{value:"Press the Capture button",id:"press-the-capture-button",level:3},{value:"Mobile Companion app",id:"mobile-companion-app",level:3},{value:"Download data",id:"download-data",level:2},{value:"Use MTP via File Explorer",id:"use-mtp-via-file-explorer",level:3},{value:"Windows &amp; Linux",id:"windows--linux",level:4},{value:"MacOS",id:"macos",level:4},{value:"Use the Desktop App",id:"use-the-desktop-app",level:3},{value:"Use ADB",id:"use-adb",level:3},{value:"Streaming",id:"streaming",level:2}],h={toc:m},g="wrapper";function f(e){let{components:a,...u}=e;return(0,o.mdx)(g,(0,r.Z)({},h,u,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"project-aria-glasses-quickstart"},"Project Aria Glasses Quickstart"),(0,o.mdx)("h1",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"This page provides a quick overview of what to do once you have received your Project Aria glasses. To find out how to get Aria Glasses, go to ",(0,o.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/research-kit/"},"projectaria.com"),"."),(0,o.mdx)("h2",{id:"get-set-up"},"Get set up"),(0,o.mdx)("p",null,"Once you've been approved and can receive your Aria glasses you will get two emails:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Welcome to Aria",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Contains your account details, use these for signing into the Mobile and Desktop Companion apps"))),(0,o.mdx)("li",{parentName:"ul"},"Join ","[Person]"," in Project Aria Academic Partner Announcements, Feedback & Support",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Follow the prompts to join Aria's research community space where researchers and engineers at Meta and all our Academic partners can connect, ask questions, share ideas and provide support."),(0,o.mdx)("li",{parentName:"ul"},"See ",(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/workplacegroup"},"How to join the Academic Partner Workplace group")," for further instructions.")))),(0,o.mdx)("h2",{id:"get-connected"},"Get connected"),(0,o.mdx)("p",null,"Before your glasses arrive we encourage you to join the ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/workplacegroup"},"Academic Partners Workplace group"),". It's a great place to get the latest announcements, provide feedback, ask questions. Unboxing videos are very welcome!"),(0,o.mdx)("h2",{id:"get-to-know-your-glasses"},"Get to know your glasses"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/about_ARK"},"About the Aria Research Kit"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Includes hardware requirements for using ARK apps"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/tech_spec/"},"Technical Specifications"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Go to the Tech Spec part of the wiki to find out about Aria capabilities, recording profiles etc"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/glasses_manual/glasses_user_manual"},"Glasses Manual"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Provides information about Project Aria glasses buttons, powering on and off, the privacy switch, how to do a factory reset, LED states, etc")))),(0,o.mdx)(s.Z,{alt:"Docusaurus themed image",sources:{light:(0,i.default)("/img/ARK/glasses_manual/glasses_buttons.png"),dark:(0,i.default)("/img/ARK/glasses_manual/glasses_buttons_dark.png")},mdxType:"ThemedImage"}),(0,o.mdx)("h2",{id:"update-your-glasses"},"Update your glasses"),(0,o.mdx)("p",null,"You'll need to update your Aria glasses using the Mobile companion app before you can use them."),(0,o.mdx)("h3",{id:"install-the-mobile-companion-app"},"Install the Mobile companion app"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Using your Android smartphone, download Aria's Android APK from ",(0,o.mdx)("a",{parentName:"li",href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/android/Aria_v125_arm64.apk"},"here"))),(0,o.mdx)("p",null,"If your phone only accepts 32-bit apps, please reach out to ",(0,o.mdx)("a",{parentName:"p",href:"mailto:AriaOps@meta.com"},"AriaOps@meta.com")," for the 32-bit .apk."),(0,o.mdx)("h3",{id:"pair-your-glasses"},"Pair your glasses"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Plug your glasses into power using the provided cable."),(0,o.mdx)("li",{parentName:"ol"},"Sign into the app using your provided user name and password"),(0,o.mdx)("li",{parentName:"ol"},"Follow the prompts to pair your glasses",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Your glasses are automatically updated when you first pair them"),(0,o.mdx)("li",{parentName:"ul"},"Go to the ",(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mobile_companion_app"},"Mobile app page")," for further information")))),(0,o.mdx)("p",null,"Further updates will be queued automatically when you use your glasses via the Mobile Companion App. If you need to manually check for updates, select the gear icon (settings) next to your glasses and then select Check for OS Updates."),(0,o.mdx)("h2",{id:"set-your-default-recording-profile"},"Set your Default Recording Profile"),(0,o.mdx)("p",null,"You can set the default recording profile via Mobile or Desktop Companion App. This is the recording profile used when you initiate recording via the capture button or Desktop app."),(0,o.mdx)("p",null," When you select New Recording in the Mobile Companion app you'll intially see the default recording profile. Select the recording profile to view sensor settings or to select a different recording profile."),(0,o.mdx)("p",null,"In the Mobile Companion App, you can change the Default Recording Profile at any time via Device Settings (select the settings/gear icon next to your glasses on the dashboard)."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Device Settings",src:t(31280).Z,width:"1827",height:"917"})),(0,o.mdx)("h2",{id:"install-the-desktop-app-optional"},"Install the Desktop app (Optional)"),(0,o.mdx)("p",null,"The Desktop app is required for requesting Machine Perception Services and streaming data, but you don't need the Desktop app to make recordings or download data. You can also visualize data in the Desktop app. Go to the ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/desktop_companion_app"},"Desktop app page")," for more detailed instructions."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Download the desktop app from the following supported platforms")),(0,o.mdx)(n.default,{defaultValue:"mac",values:[{label:"Mac",value:"mac"},{label:"Windows",value:"windows"},{label:"Ubuntu",value:"ubuntu"}],mdxType:"Tabs"},(0,o.mdx)(l.default,{value:"mac",mdxType:"TabItem"},(0,o.mdx)("a",{href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/mac/Aria_v37.dmg"},"Aria For Mac (Intel & Apple Silicon)")),(0,o.mdx)(l.default,{value:"windows",mdxType:"TabItem"},(0,o.mdx)("a",{href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/windows/Aria_v37.msi"},"Aria For Windows (x64)")),(0,o.mdx)(l.default,{value:"ubuntu",mdxType:"TabItem"},(0,o.mdx)("a",{href:"https://foreign-service-public-assets.s3.us-west-2.amazonaws.com/apps/linux/Aria_v36.deb"},"Aria For Linux (x64)"))),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"Use the username and password provided in your welcome email to sign into the app.")),(0,o.mdx)("h2",{id:"record-data"},"Record Data"),(0,o.mdx)("p",null,"It's best to initiate recording using the Mobile Companion app or by pressing the Capture button."),(0,o.mdx)("p",null,"Make sure you don't use the Privacy Switch to finish a recording, as this will delete your data."),(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},"The longer your glasses record for, the longer it takes a recording to stop. This is because the larger the VRS file, the more time it takes for a recording to finish indexing. The recording has not fully stopped until the Recording LEDs have turned off.")),(0,o.mdx)("h3",{id:"press-the-capture-button"},"Press the Capture button"),(0,o.mdx)("p",null,"The capture button is located on the top right of your glasses. The capture button will use the default recording profile."),(0,o.mdx)("p",null,"Once you've pressed the capture button, please allow a few seconds before the recording starts. You'll know recording has started when the Recording LEDs turn on."),(0,o.mdx)("p",null,"Press the same button to stop and save the recording."),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"Engaging the privacy switch will stop the recording and discard your recording. Discarded recordings cannot be retrieved.")),(0,o.mdx)("h3",{id:"mobile-companion-app"},"Mobile Companion app"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Select New Recording Session in the Aria Dashboard to start recording.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Go to the ",(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mobile_companion_app"},"Mobile Companion App page")," for more information")))),(0,o.mdx)("p",null,"You can alter the Name and Notes of a recording by going to the Recordings menu, selecting a recording and then selecting ",(0,o.mdx)("strong",{parentName:"p"},"Edit"),"."),(0,o.mdx)("h2",{id:"download-data"},"Download data"),(0,o.mdx)("p",null,"Aria recordings are stored as a VRS file and an accompanying JSON file that includes the recording's metadata. Metadata includes:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The name and description of the recording as shown in the Mobile Companion App"),(0,o.mdx)("li",{parentName:"ul"},"The recording profile used"),(0,o.mdx)("li",{parentName:"ul"},"What version of the Mobile Companion App was used to create the recording")),(0,o.mdx)("p",null,"Aria recordings are directly accessible from the glasses' storage. There are three ways you can download data to your local machine using:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"MTP"),(0,o.mdx)("li",{parentName:"ul"},"Aria Desktop Companion App"),(0,o.mdx)("li",{parentName:"ul"},"ADB commands")),(0,o.mdx)("p",null,"We recommend using MTP for a faster download experience."),(0,o.mdx)("h3",{id:"use-mtp-via-file-explorer"},"Use MTP via File Explorer"),(0,o.mdx)("h4",{id:"windows--linux"},"Windows & Linux"),(0,o.mdx)("p",null,"When you plug in your Aria glasses to your computer, you can navigate to it as if it were any other USB external storage device."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Plug your Aria glasses into your computer, using the supplied cable",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Please allow a few minutes for your glasses to be detected"))),(0,o.mdx)("li",{parentName:"ol"},"Your glasses will appear in your directory as an external drive called \u201cAria\u201d"),(0,o.mdx)("li",{parentName:"ol"},"Select Aria and then go to Internal Storage > recording"),(0,o.mdx)("li",{parentName:"ol"},"In this folder you will see the .vrs file and .json file that stores the .vrs files' metadata",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"You'll also see a thumbnails folder, which contains the thumbnails that are used to provide previews of your content in the Mobile app"))),(0,o.mdx)("li",{parentName:"ol"},"Copy the data to local storage")),(0,o.mdx)("h4",{id:"macos"},"MacOS"),(0,o.mdx)("p",null,"MTP is not provided natively on MacOS, but there are lightweight tools that you can use, such as OpenMTP."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Download and install ",(0,o.mdx)("a",{parentName:"li",href:"https://openmtp.ganeshrvel.com/"},"OpenMTP")),(0,o.mdx)("li",{parentName:"ol"},"Connect your Aria glasses to your computer"),(0,o.mdx)("li",{parentName:"ol"},"Open OpenMTP"),(0,o.mdx)("li",{parentName:"ol"},"Drag & drop Aria recordings from Aria's internal storage")),(0,o.mdx)("h3",{id:"use-the-desktop-app"},"Use the Desktop App"),(0,o.mdx)("p",null,"Go to the Recordings section in the Desktop app to download your data. See the ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/desktop_companion_app"},"Desktop App page")," for further information."),(0,o.mdx)("h3",{id:"use-adb"},"Use ADB"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/adb"},"Android Debug Bridge")," (adb) is a command line tool that can be used with Aria glasses."),(0,o.mdx)("p",null,"To download all your data:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"adb pull /sdcard/recording /home/unixname/MyVRSFolder\n")),(0,o.mdx)("p",null,"To download a single VRS file"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"adb pull /sdcard/recording/myVrsFile.vrs /home/unixname/MyVRSFolder/\n")),(0,o.mdx)("p",null,"To download a single metadata file"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"adb pull /sdcard/recording/myVrsFile.json /home/unixname/MyVRSFolder/\n")),(0,o.mdx)("h2",{id:"streaming"},"Streaming"),(0,o.mdx)("p",null,"Using the Desktop app, Aria Sensor data can be live streamed via Wi-Fi. We recommend only using Profiles 12 and 18, which are optimized for streaming."),(0,o.mdx)("p",null,"Go to the ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/desktop_companion_app#streaming"},"Desktop app page")," for detailed instructions."))}f.isMDXComponent=!0},31280:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/mobile_app_device_settings-fbe834631d60e4b2bd0bce944de1ddbf.png"}}]);