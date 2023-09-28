"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7564],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>c});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),c=function(e){return function(t){var a=d(t.components);return o.createElement(e,r({},t,{components:a}))}},d=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=n,m=c["".concat(i,".").concat(u)]||c[u]||b[u]||r;return a?o.createElement(m,l(l({ref:t},p),{},{components:a})):o.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}f.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var o=a(67294),n=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.default)(r.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var o=a(87462),n=a(67294),r=a(86010),i=a(72957),l=a(16550),s=a(75238),p=a(33609),c=a(92560);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const o=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,r=u(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[s,p]=b({queryString:a,groupId:o}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,c.Nk)(a);return[o,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:o}),h=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var h=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),o=p[a].value;o!==l&&(d(t),s(o))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},i,{className:(0,r.default)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:o}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function v(e){const t=f(e);return n.createElement("div",{className:(0,r.default)("tabs-container",g.tabList)},n.createElement(_,(0,o.Z)({},e,t)),n.createElement(y,(0,o.Z)({},e,t)))}function x(e){const t=(0,h.default)();return n.createElement(v,(0,o.Z)({key:String(t)},e))}},98565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=a(87462),n=(a(67294),a(3905)),r=a(73992),i=a(18679);const l={sidebar_position:40,title:"MPS"},s="MPS Code Snippets",p={unversionedId:"data_utilities/core_code_snippets/mps",id:"data_utilities/core_code_snippets/mps",title:"MPS",description:"Project Aria Machine Perception Services (MPS) enables Aria users with access to the Aria Research Kit to request derived data on Aria VRS files.",source:"@site/docs/data_utilities/core_code_snippets/mps.mdx",sourceDirName:"data_utilities/core_code_snippets",slug:"/data_utilities/core_code_snippets/mps",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/mps",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/core_code_snippets/mps.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"MPS"},sidebar:"tutorialSidebar",previous:{title:"Calibration",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/calibration"},next:{title:"Plot Sensor Data (Python)",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/plotting_sensor_data"}},c={},d=[{value:"Load MPS output",id:"load-mps-output",level:2},{value:"Open loop/Closed loop trajectory",id:"open-loopclosed-loop-trajectory",level:3},{value:"Point cloud",id:"point-cloud",level:3},{value:"Online calibration",id:"online-calibration",level:3},{value:"Eye gaze",id:"eye-gaze",level:3},{value:"<strong>Static camera calibration</strong>",id:"static-camera-calibration",level:3}],u={toc:d},m="wrapper";function b(e){let{components:t,...a}=e;return(0,n.mdx)(m,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"mps-code-snippets"},"MPS Code Snippets"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/docs/ARK/mps"},"Project Aria Machine Perception Services (MPS)")," enables Aria users with access to the ",(0,n.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/research-kit/"},"Aria Research Kit")," to request derived data on Aria VRS files."),(0,n.mdx)("p",null,"Some ",(0,n.mdx)("a",{parentName:"p",href:"/docs/open_datasets"},"Open Datasets")," also contain ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_summary"},"MPS outputs"),"."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started"},"Aria Synthetic Environments (ASE) Dataset")," includes semi-dense point cloud and observations, but they provide their own ",(0,n.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_tools"},"loading interface"))),(0,n.mdx)("p",null,"This page covers how to consume standard MPS outputs."),(0,n.mdx)("h2",{id:"load-mps-output"},"Load MPS output"),(0,n.mdx)("p",null,"The loaders for MPS output (",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/mps"},"projectaria_tools/main/core/mps"),") provide a convenient way to quickly load the MPS output in a few lines of code into data structures that can then be used downstream."),(0,n.mdx)("p",null,"Please refer to the ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_summary"},"MPS data schema wiki page")," to learn more about the specifics of what each MPS output consists of. Here, we will focus only on the loading APIs in Python and C++."),(0,n.mdx)("h3",{id:"open-loopclosed-loop-trajectory"},"Open loop/Closed loop trajectory"),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\nopen_loop_path = "/path/to/mps/output/trajectory/open_loop_trajectory.csv"\nopen_loop_traj = mps.read_open_loop_trajectory(open_loop_path)\n\nclosed_loop_path = "/path/to/mps/output/trajectory/closed_loop_trajectory.csv"\nclosed_loop_traj = mps.read_closed_loop_trajectory(closed_loop_path)\n\n# example: get transformation from this device to world coordinate frame\nfor closed_loop_pose in closed_loop_traj:\n    transform_world_device = closed_loop_pose.transform_world_device\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <TrajectoryReaders.h>\nusing namespace projectaria::tools::mps;\n\nstd::string openLoopTrajPath = "/path/to/mps/output/trajectory/open_loop_trajectory.csv";\nOpenLoopTrajectory openLoopTraj = readOpenLoopTrajectory(openLoopTrajPath);\n\nstd::string closedLoopTrajPath = "/path/to/mps/output/trajectory/closed_loop_trajectory.csv";\nClosedLoopTrajectory closedLoopTraj = readClosedLoopTrajectory(openLoopTrajPath);\n\n// example: get transformation from this device to world coordinate frame\nfor (const ClosedLoopTrajectoryPose& closedLoopPose : closedLoopTraj) {\n    const Sophus::SE3d& T_world_device = closedLoopPose.T_world_device;\n}\n')))),(0,n.mdx)("h3",{id:"point-cloud"},"Point cloud"),(0,n.mdx)("admonition",{title:"Always filter global point clouds in 3D",type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"Post-filtering the point cloud using inverse distance and distance certainty is required to get point cloud ",(0,n.mdx)("strong",{parentName:"p"},"accurate in 3D space"),". There are points cannot be accurately estimated in 3D space due to low parallax, but those points are well tracked in 2D images, and produce valid 2D observations. We choose to output ",(0,n.mdx)("strong",{parentName:"p"},"all")," the points, include those have poor 3D estimations, in case researchers need them. Go to the ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_pointcloud"},"Semi-Dense Point Cloud page")," for more information.")),(0,n.mdx)("admonition",{title:"Loading observations could be slow",type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"When the Aria recording is long, loading point observations could be memory and time consuming (> 1 minute). A typical 20 minutes long Aria recording will have roughly total 10+ millions of 3D points with total 100+ millions of 2D observations.")),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\nglobal_points_path = "/path/to/mps/output/trajectory/global_points.csv.gz"\npoints = mps.read_global_point_cloud(global_points_path, mps.StreamCompressionMode.GZIP)\n\n# filter the point cloud by inverse depth and depth\nfiltered_points = []\nfor point in points:\n    if (point.inverse_distance_std < 0.001 and point.distance_std < 0.15):\n        filtered_points.append(point)\n\n# example: get position of this point in the world coordinate frame\nfor point in filtered_points:\n    position_world = point.position_world\n\nobservations_path = "/path/to/mps/output/trajectory/semidense_observations.csv.gz"\nobservations = mps.read_point_observations(observations_path, mps.StreamCompressionMode.GZIP)\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <GlobalPointCloudReader.h>\n#include <PointObservationReader.h>\nusing namespace projectaria::tools::mps;\n\nstd::string globalPointsPath = "/path/to/mps/output/trajectory/open_loop_trajectory.csv";\nGlobalPointCloud points = readGlobalPointCloud(globalPointsPath, StreamCompressionMode::GZIP);\n\n// filter the point cloud by inverse depth and depth\nGlobalPointCloud filteredPoints;\nfor (const GlobalPointPosition& point : points) {\n    if (point.inverseDistanceStd < 0.001 && point.distanceStd < 0.15) {\n        filteredPoints.push_back(point);\n    }\n}\n\n// example: get position of this point in the world coordinate frame\nfor (const GlobalPointPosition& point : filteredPoints) {\n    const Eigen::Vector3d& position_world = point.position_world;\n}\n\nstd::string observationsPath = "/path/to/mps/output/trajectory/semidense_observations.csv.gz";\nPointObservations observations = readPointObservations(observationsPath, StreamCompressionMode::GZIP);\n')))),(0,n.mdx)("h3",{id:"online-calibration"},"Online calibration"),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\nonline_calib_path = "/path/to/mps/output/trajectory/online_calibration.jsonl"\nonline_calibs = mps.read_online_calibration(online_calib_path)\n\nfor calib in online_calibs:\n    # example: get left IMU\'s online calibration\n    for imuCalib in calib.imu_calibs:\n        if imuCalib.get_label() == "imu-left":\n            leftImuCalib = imuCalib\n    # example: get left SLAM camera\'s online calibration\n    for camCalib in calib.camera_calibs:\n        if camCalib.get_label() == "camera-slam-left":\n            leftCamCalib = camCalib\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <onlineCalibrationReader.h>\nusing namespace projectaria::tools::calibration;\nusing namespace projectaria::tools::mps;\n\nstd::string onlineCalibPath = "/path/to/mps/output/trajectory/online_calibration.jsonl";\nOnlineCalibrations onlineCalibs = readOnlineCalibration(onlineCalibPath);\n\nfor (const OnlineCalibration& calib : onlineCalibs) {\n    // example: get left IMU\'s online calibration\n    for (const ImuCalibration& imuCalib : calib.imuCalibs) {\n        if (imuCalib.getLabel() == "imu-left") {\n            const ImuCalibration& leftImuCalib = imuCalib;\n        }\n    }\n    // example: get left SLAM camera\'s online calibration\n    for (const CameraCalibration& camCalib : calib.cameraCalibs) {\n        if (camCalib.getLabel() == "camera-slam-left") {\n            const CameraCalibration& leftCamCalib = camCalib;\n        }\n    }\n}\n')))),(0,n.mdx)("h3",{id:"eye-gaze"},"Eye gaze"),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\ngaze_path = "/path/to/mps/output/eye_gaze/generalized_eye_gaze.csv"\ngaze_cpf = mps.read_eye_gaze(eye_gaze_path)\n\n# project the 3D gaze point assume depth is 1.0 meter\ndepth_m = 1.0\ngaze_Point_cpf = mps.get_eyegaze_point_at_depth(gaze_cpf[0].yaw, gaze_cpf[0].pitch, depth_m)\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <EyeGazeReader.h>\nusing namespace projectaria::tools::mps;\n\nstd::string gazePath = "/path/to/mps/output/eye_gaze/eyegaze.csv";\nEyeGazes gazeCpf = readEyeGaze(gazePath);\n\n// project the 3D gaze point assume depth is 1.0 meter\nfloat depthM = 1.0f;\nEigen::Vector3d gazePointCpf = getEyeGazePointAtDepth(gazeCpf[0].yaw, gazeCpf[0].pitch, depthM);\n')))),(0,n.mdx)("h3",{id:"static-camera-calibration"},(0,n.mdx)("strong",{parentName:"h3"},"Static camera calibration")),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\nstatic_cameras_path = "/path/to/mps/output/trajectory/static_cam_calibs.csv"\nstatic_cameras = mps.read_static_camera_calibrations(static_cameras_path)\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <StaticCameraCalibrationReader.h>\nusing namespace projectaria::tools::mps;\n\nstd::string staticCamerasPath = "/path/to/mps/output/trajectory/static_cam_calibs.csv";\nStaticCameraCalibrations staticCameras = readStaticCameraCalibrations(staticCamerasPath);\n')))))}b.isMDXComponent=!0}}]);