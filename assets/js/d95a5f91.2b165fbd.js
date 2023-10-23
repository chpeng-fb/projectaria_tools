"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8919],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>m,withMDXComponents:()=>p});var i=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=i.createContext({}),p=function(e){return function(a){var t=m(a.components);return i.createElement(e,o({},a,{components:t}))}},m=function(e){var a=i.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=m(e.components);return i.createElement(d.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},h=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(t),c=n,u=p["".concat(r,".").concat(c)]||p[c]||g[c]||o;return t?i.createElement(u,l(l({ref:a},d),{},{components:t})):i.createElement(u,l({ref:a},d))}));function x(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:n,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},21770:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=t(87462),n=(t(67294),t(3905)),o=t(79524);const r={sidebar_position:50,title:"Mobile Companion App"},l="Project Aria Mobile Companion App",s={unversionedId:"ARK/mobile_companion_app",id:"ARK/mobile_companion_app",title:"Mobile Companion App",description:"Overview",source:"@site/docs/ARK/mobile_companion_app.mdx",sourceDirName:"ARK",slug:"/ARK/mobile_companion_app",permalink:"/projectaria_tools/docs/ARK/mobile_companion_app",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mobile_companion_app.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Mobile Companion App"},sidebar:"tutorialSidebar",previous:{title:"SDK Troubleshooting & Known Issues",permalink:"/projectaria_tools/docs/ARK/sdk/sdk_troubleshooting"},next:{title:"Desktop Companion App",permalink:"/projectaria_tools/docs/ARK/desktop_companion_app"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Mobile Companion App features include:",id:"mobile-companion-app-features-include",level:2},{value:"Download and Install",id:"download-and-install",level:2},{value:"Sign in and pairing",id:"sign-in-and-pairing",level:2},{value:"Set Default Recording Profile",id:"set-default-recording-profile",level:2},{value:"OS Update",id:"os-update",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Pairing/Unpairing",id:"pairingunpairing",level:3},{value:"Connecting/Disconnecting",id:"connectingdisconnecting",level:3},{value:"Recording",id:"recording",level:2},{value:"To start recording",id:"to-start-recording",level:3},{value:"Mobile Companion App Screens",id:"mobile-companion-app-screens",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Aria Device Settings",id:"aria-device-settings",level:3},{value:"Recordings menu",id:"recordings-menu",level:3},{value:"Settings menu",id:"settings-menu",level:3}],m={toc:p},c="wrapper";function u(e){let{components:a,...r}=e;return(0,n.mdx)(c,(0,i.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"project-aria-mobile-companion-app"},"Project Aria Mobile Companion App"),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"The Project Aria Mobile Companion App, provides the ability to interact & record with your Aria glasses via Bluetooth. This section covers:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Getting Started (Update Your Glasses)"),(0,n.mdx)("li",{parentName:"ul"},"Recording"),(0,n.mdx)("li",{parentName:"ul"},"Mobile Companion App Screens")),(0,n.mdx)("p",null,"These instructions are only useful if you have access to Aria glasses. Go to ",(0,n.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/research-kit/"},"projectaria.com")," to find out how to become an academic research partner and gain access to the Aria Research Kit (ARK)."),(0,n.mdx)("h2",{id:"mobile-companion-app-features-include"},"Mobile Companion App features include:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fully wireless"),(0,n.mdx)("li",{parentName:"ul"},"Check your glasses status (temperature, GPS, privacy switch etc..)"),(0,n.mdx)("li",{parentName:"ul"},"Handle and select between multiple paired Aria glasses"),(0,n.mdx)("li",{parentName:"ul"},"Update Aria glasses to the latest OS build"),(0,n.mdx)("li",{parentName:"ul"},"Select a recording profile and start recording directly from the mobile app"),(0,n.mdx)("li",{parentName:"ul"},"Set default recording profile"),(0,n.mdx)("li",{parentName:"ul"},"In-session Eye Gaze Calibration"),(0,n.mdx)("li",{parentName:"ul"},"Accept, store and delete security certificates to enable the ",(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/sdk"},"Client SDK and CLI"))),(0,n.mdx)("h1",{id:"getting-started-update-your-glasses"},"Getting Started (Update Your Glasses)"),(0,n.mdx)("h2",{id:"download-and-install"},"Download and Install"),(0,n.mdx)("p",null,"Follow the instructions in the ",(0,n.mdx)("a",{parentName:"p",href:"/docs/ARK/ark_downloads"},"ARK SW Downloads and Updates page")," to download and install the app (this is where you'll download updates as well)."),(0,n.mdx)("h2",{id:"sign-in-and-pairing"},"Sign in and pairing"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Plug your Project Aria glasses into their charger",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"This will automatically turn your glasses"))),(0,n.mdx)("li",{parentName:"ol"},"Make sure the Privacy Switch is not engaged",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The Privacy Switch should be pushed forwards, towards the lenses"))),(0,n.mdx)("li",{parentName:"ol"},"Open the Companion app for the first time and sign in using the log in we gave you in your welcome email ",(0,n.mdx)("br",null),(0,n.mdx)("img",{alt:"Aria Mobile App Sign In Screen",src:t(68958).Z,width:"300",height:"453"})),(0,n.mdx)("li",{parentName:"ol"},"When launching the Companion App for the first time, you'll need to grant it certain permissions to work correctly, such as location services."),(0,n.mdx)("li",{parentName:"ol"},"Follow the prompts to agree to ",(0,n.mdx)("a",{parentName:"li",href:"https://about.meta.com/realitylabs/projectaria/community-guidelines/"},"Project Aria Research Community Guidelines")," and read the Health and Safety information"),(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"Get Started")," to begin setting up your glasses."),(0,n.mdx)("li",{parentName:"ol"},"The app will begin to look for nearby Project Aria glasses. When your glasses are discovered, they will be listed at the top of the screen alongside its serial number."),(0,n.mdx)("li",{parentName:"ol"},"After selecting your glasses, the Companion App will begin pairing with it."),(0,n.mdx)("li",{parentName:"ol"},"Once pairing completes, the app will ask to name your Aria glasses."),(0,n.mdx)("li",{parentName:"ol"},"Join a Wi-Fi network, your glasses must be plugged into a charger to complete the setup process."),(0,n.mdx)("li",{parentName:"ol"},"Once connected to Wi-Fi, the glasses will look for updates and update your glasses' OS"),(0,n.mdx)("li",{parentName:"ol"},"Once you have completed setup, you\u2019ll see the Companion App Dashboard Page")),(0,n.mdx)("h2",{id:"set-default-recording-profile"},"Set Default Recording Profile"),(0,n.mdx)("p",null,"The default recording profile determines determines which recording profile the New Recordings page starts with, as well as the profile used when initiating recording via the capture button or Desktop app."),(0,n.mdx)("p",null,"You can set the default recording profile via Mobile or Desktop Companion App."),(0,n.mdx)("p",null,"In the Mobile Companion App, you can change the Default Recording Profile at any time via Device Settings (select the settings/gear icon next to your glasses on the dashboard)."),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Image of how to find Project Aria glasses&#39; Device Settings page from the Dashboard",src:t(31280).Z,width:"1827",height:"917"})),(0,n.mdx)("h2",{id:"os-update"},"OS Update"),(0,n.mdx)("p",null,"Your Aria glasses's OS will also automatically update when plugged into power and connected to Wi-Fi with an internet connection."),(0,n.mdx)("p",null,"To manually update Aria glasses OS:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"In the Mobile Companion App, select Device Settings"),(0,n.mdx)("li",{parentName:"ol"},"Scroll down to view your Aria Device's OS Version"),(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"Check for Updates")),(0,n.mdx)("li",{parentName:"ol"},"Once your glasses have finished updating, they will reboot and the update will be complete.")),(0,n.mdx)("h1",{id:"pairing-additional-glasses"},"Pairing additional glasses"),(0,n.mdx)("p",null,"Each pair of Aria glasses can only be paired with a single account. Multiple glasses can be paired with the one account, however."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Plug your Project Aria glasses into their charger",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"This will automatically turn your glasses"))),(0,n.mdx)("li",{parentName:"ol"},"Make sure the Privacy Switch is not engaged",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The Privacy Switch should be pushed forwards, towards the lenses"))),(0,n.mdx)("li",{parentName:"ol"},"Select the ",(0,n.mdx)("strong",{parentName:"li"},"Add Glasses")," on the Aria dashboard. The app will then start looking for nearby Aria glasses."),(0,n.mdx)("li",{parentName:"ol"},"Follow steps 7-12 in Sign in and Pairing"),(0,n.mdx)("li",{parentName:"ol"},"Set the default recording profile for your glasses")),(0,n.mdx)("h2",{id:"terminology"},"Terminology"),(0,n.mdx)("h3",{id:"pairingunpairing"},"Pairing/Unpairing"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Pair(ed): connecting Aria glasses to the Companion App for the first time."),(0,n.mdx)("li",{parentName:"ul"},"Unpair(ed): the process of unpairing Aria glasses from your Companion App. This will delete all data stored locally on the glasses.")),(0,n.mdx)("h3",{id:"connectingdisconnecting"},"Connecting/Disconnecting"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Connect(ed): is when the Companion App has active control over the glasses."),(0,n.mdx)("li",{parentName:"ul"},"Disconnect(ed): is when the Companion App no longer has active control over the glasses.")),(0,n.mdx)("h2",{id:"recording"},"Recording"),(0,n.mdx)("h3",{id:"to-start-recording"},"To start recording"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"New Recording Session")," on the Aria Dashboard."),(0,n.mdx)("li",{parentName:"ol"},"You have the option to configure your recording session before it begins:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Name (optional):")," This will define the name of your VRS file. If you do not provide a name a random alphanumeric name will be given"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Notes (optional):")," Notes are appended to your recordings ID. You can input a short or long text string in this field. Notes is a value that is provided in the vrs.json file associated with your recording."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Sensors Used:")," Select Sensors Used to see details of the recording profile. From the Sensors Used menu, select Profile to choose different recording profiles to record with."),(0,n.mdx)("li",{parentName:"ul"},"If you\u2019ve selected a default recording profile, that profile will be automatically populated, otherwise you will need to select a recording profile."))),(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"Begin new recording"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"While you're recording the Sensor Status field will let you know if there are any data quality issues"))),(0,n.mdx)("li",{parentName:"ol"},"Perform in-session Eye Gaze Calibration (optional)",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"You only need to do this if you want Eye Gaze MPS with Calibrated data"),(0,n.mdx)("li",{parentName:"ul"},"Go To ",(0,n.mdx)("a",{parentName:"li",href:"/docs/ARK/mps/eye_gaze_calibration"},"Eye Gaze Calibration")," for more information"))),(0,n.mdx)("li",{parentName:"ol"},"End your recording by selecting ",(0,n.mdx)("strong",{parentName:"li"},"Complete Recording")," in the app or use the capture button on the top right side of the glasses")),(0,n.mdx)("p",null,"Once you've completed or discarded a recording, you'll return to the New Recording screen, pre-populated with your previous details."),(0,n.mdx)("h2",{id:"mobile-companion-app-screens"},"Mobile Companion App Screens"),(0,n.mdx)("h3",{id:"dashboard"},"Dashboard"),(0,n.mdx)("p",null,"The Aria Dashboard has several interactive elements:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Tap ",(0,n.mdx)("strong",{parentName:"li"},"New Recording Session")," to make a recording"),(0,n.mdx)("li",{parentName:"ul"},"Tap ",(0,n.mdx)("strong",{parentName:"li"},"Add glasses")," to pair additional devices with your Aria glasses",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"One account can have multiple Aria glasses associated it, but each pair of glasses can only be associated with one account"),(0,n.mdx)("li",{parentName:"ul"},"Multiple glasses can be paired, but only one pair of glasses can be connected at a time"))),(0,n.mdx)("li",{parentName:"ul"},"Tap ",(0,n.mdx)("strong",{parentName:"li"},"Select glasses")," to toggle between multiple paired Aria glasses or pair with new glasses",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"This will replace ",(0,n.mdx)("strong",{parentName:"li"},"Add glasses")," if more than one set of glasses is paired"))),(0,n.mdx)("li",{parentName:"ul"},"Tap the gear icon to go to Device Settings"),(0,n.mdx)("li",{parentName:"ul"},"Tap the Bluetooth icon to disconnect your glasses"),(0,n.mdx)("li",{parentName:"ul"},"Tap the Wi-Fi icon to connect to different Wi-Fi network, forget a network or see the glasses' IP address")),(0,n.mdx)("div",{style:{textAlign:"center"}},(0,n.mdx)("img",{width:"40%",src:(0,o.default)("img/ARK/sdk/aria_wi-fi.jpg"),alt:"Project Aria Mobile Companion App Dashboard, showing where the Wi-Fi setting is"}),(0,n.mdx)("img",{width:"40%",src:(0,o.default)("img/ARK/sdk/aria_wi-fi2.jpg"),alt:"Wi-Fi settings screen, showing IP address"})),(0,n.mdx)("h3",{id:"aria-device-settings"},"Aria Device Settings"),(0,n.mdx)("p",null,"On the main Aria Dashboard in the Mobile app, select the settings (gear) icon next to your Aria glasses to view your Aria glasses' settings."),(0,n.mdx)("p",null,(0,n.mdx)("img",{alt:"Image of how to find Project Aria glasses&#39; Device Settings page from the Dashboard",src:t(31280).Z,width:"1827",height:"917"})),(0,n.mdx)("p",null,"The Device Settings page includes:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Bluetooth, Wi-Fi, Battery, GPS and Temperature status"),(0,n.mdx)("li",{parentName:"ul"},"OS version and ability to check for OS updates"),(0,n.mdx)("li",{parentName:"ul"},"Remaining storage space"),(0,n.mdx)("li",{parentName:"ul"},"MAC Address"),(0,n.mdx)("li",{parentName:"ul"},"Serial number"),(0,n.mdx)("li",{parentName:"ul"},"Device ID"),(0,n.mdx)("li",{parentName:"ul"},"Check Device Mode (it should say Partner)"),(0,n.mdx)("li",{parentName:"ul"},"Change the default recording profile")),(0,n.mdx)("h3",{id:"recordings-menu"},"Recordings menu"),(0,n.mdx)("p",null,"In the Recordings menu, you'll be able to see recordings that are currently on your Aria glasses."),(0,n.mdx)("p",null,"Select a recording in the Recording menu to edit your recording's name and notes (notes will be stored in the vrs.json file) and see a range of details including:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Recording duration"),(0,n.mdx)("li",{parentName:"ul"},"Recording profile used"),(0,n.mdx)("li",{parentName:"ul"},"Up to 10 thumbnail images from your recording")),(0,n.mdx)("p",null,"If you have not given your recording a name (such as when you initiate recording via the capture button) the VRS file will have a random alphanumeric name when it is downloaded."),(0,n.mdx)("p",null,"To name or edit the name of a VRS recording on your glasses:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Go to the recordings tab of the Mobile app"),(0,n.mdx)("li",{parentName:"ol"},"Select a recording"),(0,n.mdx)("li",{parentName:"ol"},"Select ",(0,n.mdx)("strong",{parentName:"li"},"Edit")," on the top right corner")),(0,n.mdx)("h3",{id:"settings-menu"},"Settings menu"),(0,n.mdx)("p",null,"The Settings menu shows the settings for the Aria app, not your Aria glasses. You'll be able to see the App version, but not the Aria glasses version."),(0,n.mdx)("p",null,"In the Advanced Settings menu there is the option to Clear Local Data, which can be helpful if you encounter issues that restarting your Mobile App does not resolve. Aria recordings are stored on the glasses, not on the phone, so it will not delete any of your recordings."))}u.isMDXComponent=!0},68958:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/aria_mobile_login_small-feb952a53dee38bd59bc69e79feca774.jpg"},31280:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/mobile_app_device_settings-fbe834631d60e4b2bd0bce944de1ddbf.png"}}]);