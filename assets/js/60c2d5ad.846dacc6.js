"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9015],{3905:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>d});var i=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},a.apply(this,arguments)}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=i.createContext({}),d=function(e){return function(t){var o=p(t.components);return i.createElement(e,a({},t,{components:o}))}},p=function(e){var t=i.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,c=d["".concat(r,".").concat(m)]||d[m]||h[m]||a;return o?i.createElement(c,s(s({ref:t},u),{},{components:o})):i.createElement(c,s({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<a;u++)r[u]=o[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}v.displayName="MDXCreateElement"},49941:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=o(87462),n=(o(67294),o(3905));const a={sidebar_position:60,title:"Troubleshooting"},r="Project Aria Tools Troubleshooting",s={unversionedId:"data_utilities/installation/troubleshooting",id:"data_utilities/installation/troubleshooting",title:"Troubleshooting",description:"Jupyter notebook issues",source:"@site/docs/data_utilities/installation/troubleshooting.mdx",sourceDirName:"data_utilities/installation",slug:"/data_utilities/installation/troubleshooting",permalink:"/projectaria_tools/docs/data_utilities/installation/troubleshooting",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/installation/troubleshooting.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,title:"Troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Python type annotation",permalink:"/projectaria_tools/docs/data_utilities/installation/type_hinting"},next:{title:"Data Provider",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/data_provider"}},l={},u=[{value:"Jupyter notebook issues",id:"jupyter-notebook-issues",level:2},{value:"Jupyter notebook error",id:"jupyter-notebook-error",level:3},{value:"Python module import error",id:"python-module-import-error",level:3},{value:"Python version mismatch",id:"python-version-mismatch",level:4},{value:"Old version of projectaria_tools",id:"old-version-of-projectaria_tools",level:4},{value:"Visualizer issues",id:"visualizer-issues",level:2},{value:"Visualizer does not build",id:"visualizer-does-not-build",level:3},{value:"Runtime errors/missing libraries",id:"runtime-errorsmissing-libraries",level:3},{value:"Visualizer Window freezes - X11 known issue",id:"visualizer-window-freezes---x11-known-issue",level:3},{value:"Step 1: Check the cause",id:"step-1-check-the-cause",level:4},{value:"Step 2: Checkout the fix rebase onto master",id:"step-2-checkout-the-fix-rebase-onto-master",level:4},{value:"Step 3: Patch CMake for Visualizers",id:"step-3-patch-cmake-for-visualizers",level:4},{value:"Step 4. Rebuild Aria Viewer and validate that it works",id:"step-4-rebuild-aria-viewer-and-validate-that-it-works",level:4}],d={toc:u},p="wrapper";function m(e){let{components:t,...o}=e;return(0,n.mdx)(p,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"project-aria-tools-troubleshooting"},"Project Aria Tools Troubleshooting"),(0,n.mdx)("h2",{id:"jupyter-notebook-issues"},"Jupyter notebook issues"),(0,n.mdx)("h3",{id:"jupyter-notebook-error"},"Jupyter notebook error"),(0,n.mdx)("p",null,"Jupyter notebook works with Python 3.9 or above."),(0,n.mdx)("p",null,"If you have problems using Jupyter examples, please ",(0,n.mdx)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"upgrade Python 3")," to the latest version. If you are using a virtual environment you'll need to recreate it to bring in the update."),(0,n.mdx)("h3",{id:"python-module-import-error"},"Python module import error"),(0,n.mdx)("p",null,"There are several things that could cause this error message."),(0,n.mdx)("h4",{id:"python-version-mismatch"},"Python version mismatch"),(0,n.mdx)("p",null,"When running Jupyter notebook, it might use a Python 3 version that's not in the virtual environment. There are two ways you can resolve this issue."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Remove the Jupyter notebook from outside of the virtual environment"),(0,n.mdx)("li",{parentName:"ul"},"Directly start the Jupyter notebook from the virtual environment bin folder.")),(0,n.mdx)("p",null,"If the virtual environment was created using ",(0,n.mdx)("inlineCode",{parentName:"p"},"python3 -m venv $HOME/projectaria_tools_python_env"),", you can directly call Jupyter from the virtual env as"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"$HOME/projectaria_tools_python_env/bin/jupyter notebook notebook_example.ipynb\n")),(0,n.mdx)("h4",{id:"old-version-of-projectaria_tools"},"Old version of projectaria_tools"),(0,n.mdx)("p",null,"You may also encounter a Python module import error if you are running an old version of projectaria_tools. Make sure you've installed the latest version of projectaria_tools."),(0,n.mdx)("h2",{id:"visualizer-issues"},"Visualizer issues"),(0,n.mdx)("h3",{id:"visualizer-does-not-build"},"Visualizer does not build"),(0,n.mdx)("p",null,"If the visualizer does not build it may be because of missing Pangolin functions. Aria Digital Twin (ADT) dataset depends on very recent changes to Pangolin's master branch. If ADT depends on Pangolin functions that are not available on your installed version of Pangolin, please ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/installation_cpp#step-2---compile-pangolin"},"reinstall using the most recent master"),"."),(0,n.mdx)("h3",{id:"runtime-errorsmissing-libraries"},"Runtime errors/missing libraries"),(0,n.mdx)("p",null,"Runtime errors can be caused by missing libraries. The following commands may resolve the issue."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"# Missing libpango_geometry.so, libpango_windowing.so, etc\nsudo ldconfig\n\nLD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib/\n\nexport LD_LIBRARY_PATH\n")),(0,n.mdx)("h3",{id:"visualizer-window-freezes---x11-known-issue"},"Visualizer Window freezes - X11 known issue"),(0,n.mdx)("p",null,"If you are running a platform that uses X11 the Visualizer window may freeze. This is most likely because of a graphics driver bug in X11.\n",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/stevenlovegrove/Pangolin/issues/782"},"Pangolin has a discussion on the issue"),"."),(0,n.mdx)("p",null,"If the issue is triggered by Pangolin Plotter, the fix is swap from X11 to EGL."),(0,n.mdx)("h4",{id:"step-1-check-the-cause"},"Step 1: Check the cause"),(0,n.mdx)("p",null,"Test to see if it's a display driver issue triggered by Pangolin Plotter."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Build the latest version of Pangolin")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"cd /tmp/Pangolin_Build\n\ncmake -DCMAKE_BUILD_TYPE=Release -DBUILD_TOOLS=OFF -DBUILD_PANGOLIN_PYTHON=OFF \\\n-DBUILD_EXAMPLES=ON ../Pangolin/\n\nmake -j2\n")),(0,n.mdx)("ol",{start:2},(0,n.mdx)("li",{parentName:"ol"},"Run the following example, it should work without issues")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"./examples/BasicOpenGl/tutorial_3_gl_intro_classic_triangle_vbo_shader\n")),(0,n.mdx)("ol",{start:3},(0,n.mdx)("li",{parentName:"ol"},"Run the following example, if it shows a black window and the machine freezes, this may be the graphics driver issue. Move on to Step 2.")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"./examples/SimplePlot/SimplePlot\n")),(0,n.mdx)("h4",{id:"step-2-checkout-the-fix-rebase-onto-master"},"Step 2: Checkout the fix rebase onto master"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Use the following commands to checkout the fix on github and rebase onto master")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"cd /tmp/Pangolin\n\ngit fetch origin pull/389/head:x11_to_egl\n\ngit checkout x11_to_egl\n\ngit rebase master\n\n# rebuild pangolin\ncd /tmp/Pangolin_Build\n\ncmake -DCMAKE_BUILD_TYPE=Release -DBUILD_TOOLS=OFF -DBUILD_PANGOLIN_PYTHON=OFF \\\n-DBUILD_EXAMPLES=ON ../Pangolin/\n\nmake -j2\n\nsudo make install\n")),(0,n.mdx)("ol",{start:2},(0,n.mdx)("li",{parentName:"ol"},"Confirm this is the correct fix by rebuilding and retesting SimplePlot from Step 1.")),(0,n.mdx)("h4",{id:"step-3-patch-cmake-for-visualizers"},"Step 3: Patch CMake for Visualizers"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Update the ",(0,n.mdx)("a",{parentName:"li",href:"/docs/data_utilities/visualization_guide#step-2--run-ariaviewer"},"AriaViewer")," CMakeLists in\n",(0,n.mdx)("inlineCode",{parentName:"li"},"$HOME/Documents/projectaria_sandbox/projectaria_tools/tools/CMakeLists.txt")),(0,n.mdx)("li",{parentName:"ol"},"Update ",(0,n.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_digital_twin_dataset/visualizers#ariadigitaltwinviewer"},"AriaDigitalTwinViewer")," CMakeLists in\n",(0,n.mdx)("inlineCode",{parentName:"li"},"$HOME/Documents/projectaria_sandbox/projectaria_tools/projects/AriaDigitalTwinDatasetTools/visualization/CMakeLists.txt"))),(0,n.mdx)("p",null,"By adding the following line:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cmake"},"find_package(OpenGL QUIET COMPONENTS EGL)\n")),(0,n.mdx)("h4",{id:"step-4-rebuild-aria-viewer-and-validate-that-it-works"},"Step 4. Rebuild Aria Viewer and validate that it works"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/Documents/projectaria_sandbox/build\n\ncmake ../projectaria_tools -DPROJECTARIA_TOOLS_BUILD_TOOLS=ON\n\nmake -j2\n\n./tools/visualization/aria_viewer \\\n--vrs ../projectaria_tools/data/mps_sample/sample.vrs\n")))}m.isMDXComponent=!0}}]);