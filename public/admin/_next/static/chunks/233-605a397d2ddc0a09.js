(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{7443:function(e,t,r){"use strict";r.d(t,{a:function(){return v}});var n=r(2784),o=r(51464),i=r(41149),a=r(15017),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&m(e,r,t[r]);return e},b=(e,t)=>c(e,s(t));const y={opacity:.6,color:"#fff",zIndex:(0,o.w)("modal"),radius:0,blur:0},v=(0,n.forwardRef)(((e,t)=>{const r=(0,i.Z3)("Overlay",y,e),{opacity:o,blur:l,color:c,gradient:s,zIndex:m,component:v,radius:h,sx:g}=r,x=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["opacity","blur","color","gradient","zIndex","component","radius","sx"]),w=s?{backgroundImage:s}:{backgroundColor:c},j={position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:m},O=e=>n.createElement(a.x,p({component:v||"div",ref:t,sx:[e=>b(p(p({},w),j),{opacity:o,borderRadius:e.fn.size({size:h,sizes:e.radius})}),...Array.isArray(g)?g:[g]]},e));return l?n.createElement(a.x,p({sx:[()=>b(p({},j),{backdropFilter:`blur(${l}px)`}),...Array.isArray(g)?g:[g]]},x),O()):O(x)}));v.displayName="@mantine/core/Overlay"},54339:function(e,t,r){"use strict";r.d(t,{X:function(){return m}});var n=r(2784),o=r(41149),i=(0,r(10107).k)(((e,{radius:t,shadow:r,withBorder:n})=>({root:{outline:0,WebkitTapHighlightColor:"transparent",display:"block",textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,boxSizing:"border-box",borderRadius:e.fn.radius(t),boxShadow:e.shadows[r]||r||"none",border:n?`1px solid ${"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[2]}`:void 0}}))),a=r(15017),l=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f={},m=(0,n.forwardRef)(((e,t)=>{const r=(0,o.Z3)("Paper",f,e),{component:l,className:m,children:p,radius:b,withBorder:y,shadow:v}=r,h=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["component","className","children","radius","withBorder","shadow"]),{classes:g,cx:x}=i({radius:b,shadow:v,withBorder:y},{name:"Paper"});return n.createElement(a.x,((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&d(e,r,t[r]);return e})({component:l||"div",className:x(g.root,m),ref:t},h),p)}));m.displayName="@mantine/core/Paper"},57178:function(e,t,r){"use strict";r.d(t,{q:function(){return u}});var n=r(2784),o=r(5308),i=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function u(e){var t=e,{withinPortal:r=!0,children:i}=t,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(t,["withinPortal","children"]);return r?n.createElement(o.h,((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))c.call(t,r)&&s(e,r,t[r]);return e})({},u),i):n.createElement(n.Fragment,null,i)}u.displayName="@mantine/core/OptionalPortal"},93902:function(e,t,r){"use strict";r.d(t,{p:function(){return a}});var n=r(2784),o=r(98241),i=r(82309);function a({transitions:e,duration:t=250,exitDuration:r=t,mounted:a,children:l,timingFunction:c,onExit:s,onEntered:u,onEnter:d,onExited:f}){const{transitionDuration:m,transitionStatus:p,transitionTimingFunction:b}=(0,i.Y)({mounted:a,duration:t,exitDuration:r,timingFunction:c,onExit:s,onEntered:u,onEnter:d,onExited:f});if(0===m)return a?n.createElement(n.Fragment,null,l({})):null;if("exited"===p)return null;const y=Object.keys(e).reduce(((t,r)=>(t[r]=(0,o.B)({duration:e[r].duration,transition:e[r].transition,timingFunction:e[r].timingFunction||b,state:p}),t)),{});return n.createElement(n.Fragment,null,l(y))}a.displayName="@mantine/core/GroupedTransition"},31948:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});var n=r(2784);const o=({disableBodyPadding:e})=>{const t=e?null:"undefined"===typeof window||"undefined"===typeof document?0:parseInt(window.getComputedStyle(document.body).paddingRight,10)+(window.innerWidth-document.documentElement.clientWidth);return`body {\n        --removed-scroll-width: ${t}px;\n        touch-action: none;\n        overflow: hidden !important;\n        position: relative !important;\n        ${t?"padding-right: var(--removed-scroll-width) !important;":""}\n        `};function i(e,t={disableBodyPadding:!1}){const[r,i]=(0,n.useState)(e||!1),a=(0,n.useRef)(0),{disableBodyPadding:l}=t,c=(0,n.useRef)(null),s=()=>{a.current=window.scrollY;const e=o({disableBodyPadding:l}),t=function(){const e=document.createElement("style");return e.type="text/css",e.setAttribute("mantine-scroll-lock",""),e}();var r,n;n=e,(r=t).styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(t),c.current=t},u=()=>{(null==c?void 0:c.current)&&(c.current.parentNode.removeChild(c.current),c.current=null)};return(0,n.useEffect)((()=>(r?s():u(),u)),[r]),(0,n.useEffect)((()=>{void 0!==e&&i(e)}),[e]),(0,n.useEffect)((()=>{void 0===e&&"undefined"!==typeof window&&"hidden"===window.document.body.style.overflow&&i(!0)}),[i]),[r,i]}},25026:function(e,t,r){"use strict";r.d(t,{z:function(){return f}});var n=r(52322),o=r(53610),i=r(6277),a=r(2784),l=r(76836),c=r.n(l);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=(0,a.forwardRef)((function(e,t){var r=e.children,a=e.className,l=e.size,d=void 0===l?"normal":l,f=e.color,m=e.type,p=void 0===m?"button":m,b=e.icon,y=u(e,["children","className","size","color","type","icon"]),v=b&&o.R[b];return(0,n.jsxs)("button",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({ref:t,className:(0,i.Z)(c().root,c()["size--".concat(d)],f&&c()["color--".concat(f)],a),type:p},y,{children:[v&&(0,n.jsx)(v,{className:"mr-1.5 -ml-1 -mt-1 inline aspect-square w-5"}),r]}))})),f=d},96454:function(e,t,r){"use strict";var n=r(52322),o=r(53610),i=r(6277),a=r(52829);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.Z=function(e){var t=e.className,r=c(e,["className"]),s=(0,a.$)().t;return(0,n.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({className:(0,i.Z)("flex min-h-[300px] flex-col justify-center text-center text-xl font-semibold text-gray-400",t)},r,{children:[(0,n.jsx)(o.R.QuestionMark,{size:40,className:"mx-auto"}),(0,n.jsx)("p",{children:s("No items available...")})]}))}},88150:function(e,t,r){"use strict";r.d(t,{D:function(){return i}});var n=r(36778),o=r(25865),i=function(e){var t=(0,o.y)("files",{path:e}),r=t.data,i=t.isError,a=t.isLoading,l=t.mutate,c=(0,n.j)(e),s=c.data,u=c.error,d=c.mutate;return{data:(null===r||void 0===r?void 0:r.data)||s?{files:null===r||void 0===r?void 0:r.data,folders:s}:void 0,isError:i||u,isLoading:a||!u&&!s,mutateFiles:l,mutateFolders:d}}},36778:function(e,t,r){"use strict";r.d(t,{v:function(){return i},j:function(){return a}});var n=r(52170),o=r(85482),i=function(e){return"".concat(n.Xn,"/folders?path=").concat(e)},a=function(e){return(0,o.ZP)(i(e),{isPaused:function(){return!e}})}},33792:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});var n=r(8168),o=r(2784),i=function(e){var t=(0,n.bN)().models;return(0,o.useMemo)((function(){return t&&t[e]}),[e,t])}},25865:function(e,t,r){"use strict";r.d(t,{y:function(){return m}});var n=r(11804),o=r(41277),i=r(85482);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.x.get(e,{params:t}).then((function(e){return e.data}))},f=function(e){var t=e.where,r=c({},s(e,["where"]));return t&&(r.where=Object.entries(t||{}).map((function(e){var t=u(e,2),r=t[0],n=t[1],o=n.manipulator,i=n.value;return"".concat(r,".").concat(o,".").concat(i)})).join(";")),r};function m(e,t,r){var n=(0,i.ZP)([o.Uq.apiGetListUrl(e||""),f(null!==t&&void 0!==t?t:{})],d,c({isPaused:function(){return!e}},r)),a=n.data,l=n.error;return c({data:a,isLoading:!l&&!a,isError:l},s(n,["data","error"]))}},62626:function(e,t,r){"use strict";r.r(t);var n=r(52322);t.default=function(e){var t=e.text,r=void 0===t?"Missing":t;return(0,n.jsx)("div",{className:"flex min-h-screen",children:(0,n.jsxs)("div",{className:"text-center m-auto",children:[(0,n.jsx)("h1",{className:"font-semibold text-6xl",children:"404"}),(0,n.jsx)("hr",{className:"border-t-8 w-1/4 mx-auto my-4 border-blue-100"}),(0,n.jsx)("p",{className:"text-gray-500 text-xl",children:r})]})})}},83233:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Ve}});var n=r(52322),o=r(2784),i=r(53610),a=r(94776),l=r.n(a),c=r(88150),s=r(59748),u=r(41277),d=r(46530),f=r(5632),m=r(95720);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e,t){return t.reduce((function(t,r){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){p(e,t,r[t])}))}return e}({},t,p({},"".concat("/"===e?"":e,"/").concat(r.name),{file:r,formattedSize:r.size/1e6+"MB",name:r.name.split(".").slice(0,-1).join(),uploaded:!1}))}),{})};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(n,o)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w={currentPath:"/",uploadingFiles:{},showNewFolderCreator:!1,workingFolders:{},files:void 0,isError:!1,isLoading:!0,mutateFiles:function(){},mutateFolders:function(){},getDropZoneInputProps:function(){},getDropZoneRootProps:function(){},openFilePicker:function(){},updateValue:function(){}},j=(0,o.createContext)(w),O=function(){return(0,o.useContext)(j)};function P(e,t){return g({},e,h({},t.name,t.value))}var k=function(e){var t=e.children,r=(0,o.useReducer)(P,w),i=r[0],a=r[1],p=(0,f.useRouter)(),y=p.push,h=p.query,O=(0,s.z)(),k=(0,o.useMemo)((function(){return(h.folder||"/").replaceAll("//","/")}),[h]),N=(0,c.D)(k),S=N.data,E=N.isError,C=N.isLoading,F=N.mutateFiles,z=N.mutateFolders,I=(0,o.useCallback)((function(e,t){"currentPath"!==e?a({name:e,value:t}):y({query:{folder:t}})}),[a,y]),D=(0,o.useCallback)(function(){var e,t=(e=l().mark((function e(t){var r,n,o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=b(k,t),I("uploadingFiles",r),n=O.showNotification({message:(0,d.t)("Working"),title:(0,d.t)("Uploading files..."),color:"blue",autoClose:!1}),e.t0=regeneratorRuntime.keys(r);case 4:if((e.t1=e.t0()).done){e.next=23;break}return o=e.t1.value,i=r[o],e.prev=8,e.next=11,u.Ip.create(i.file,{root:k});case 11:e.next=17;break;case 13:e.prev=13,e.t2=e.catch(8),O.updateNotification(n,{message:(0,d.t)("Error"),title:(0,d.t)("An error happened"),color:"red",autoClose:2e3});case 17:return I("uploadingFiles",Object.fromEntries(Object.entries(r).filter((function(e){return x(e,1)[0]!==o})))),e.next=20,F();case 20:O.updateNotification(n,{message:(0,d.t)("Success"),title:(0,d.t)("All files has been uploaded"),color:"green",autoClose:2e3}),e.next=4;break;case 23:case"end":return e.stop()}}),e,null,[[8,13]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){v(i,n,o,a,l,"next",e)}function l(e){v(i,n,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),[I,k,F,O]),A=(0,m.uI)({onDrop:D,noClick:!0,noKeyboard:!0}),R=A.getInputProps,Z=A.getRootProps,_=A.open,B=(0,o.useMemo)((function(){return g({},i,{files:S,isError:E,isLoading:C,updateValue:I,openFilePicker:_,getDropZoneRootProps:Z,getDropZoneInputProps:R,currentPath:k,mutateFiles:F,mutateFolders:z})}),[S,E,C,I,_,Z,R,k,F,z,i]);return(0,n.jsxs)(j.Provider,{value:B,children:[(0,n.jsx)("input",g({},R({className:"hidden"}))),t]})},N=r(59401),S=r(6277),E=function(e){var t=e.isLast,r=e.onClick,o=e.icon,i=e.title,a=e.label;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(N.k,{onClick:r,className:(0,S.Z)("flex flex-none items-center",t&&"pointer-events-none"),title:a,children:[(0,n.jsx)(o,{className:"w-6 text-blue-500"}),i&&(0,n.jsx)("span",{className:(0,S.Z)("ml-2 text-lg font-semibold",t&&"underline"),children:i})]}),!t&&(0,n.jsx)("span",{className:"mx-2 flex-none text-2xl font-semibold text-gray-300",children:"/"})]})},C=function(){var e=O(),t=e.currentPath,r=e.updateValue,a=(0,o.useMemo)((function(){return t.split("/").filter((function(e){return!!e}))}),[t]),l=(0,o.useCallback)((function(e){return function(){r("currentPath",e)}}),[r]);return(0,n.jsxs)("nav",{role:"navigation",className:"flex w-full items-center overflow-auto rounded-2xl border-2 border-project-border bg-white px-4",children:[(0,n.jsx)(E,{icon:i.R.Home,onClick:l("/"),isLast:!a.length}),a.map((function(e,t){return(0,n.jsx)(E,{icon:i.R.Folders,label:"/"+a.slice(0,t+1).join("/"),onClick:l("/"+a.slice(0,t+1).join("/")),title:e,isLast:t===a.length-1},e)}))]})},F=r(25026),z=r(57902),I=r(45916),D=r(52829);function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Z=(0,o.forwardRef)((function(e,t){var r=e.children,o=R(e,["children"]);return(0,n.jsx)(F.z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){A(e,t,r[t])}))}return e}({ref:t,color:"success"},o,{children:r}))})),_=function(){var e=O(),t=e.updateValue,r=e.openFilePicker,o=(0,D.$)().t;return(0,n.jsx)("div",{className:"ml-3 grid aspect-square h-full flex-none",children:(0,n.jsx)(z.Z,{buttonComponent:Z,buttonClassName:"h-full aspect-square flex",offset:[0,10],placement:"bottom-end",buttonContent:(0,n.jsx)(i.R.Plus,{size:32,className:"absolute left-3 top-3"}),children:(0,n.jsxs)(I.Z,{children:[(0,n.jsx)(I.Z.Item,{icon:"FilePlus",title:"Add new file to current folder",onClick:r,children:o("Add new file")}),(0,n.jsx)(I.Z.Item,{icon:"FolderPlus",onClick:function(){return t("showNewFolderCreator",!0)},title:"Add new folder to current folder",children:o("Add new folder")})]})})})},B=function(){return(0,n.jsxs)("section",{className:"mb-5 flex h-[55px]",children:[(0,n.jsx)(C,{}),(0,n.jsx)(_,{})]})},L=r(1761),M=r(34749),q=r(31948),$=r(93038),T=r(51464),U=r(41149),V=r(10107);const W={xs:320,sm:380,md:440,lg:620,xl:780,full:"100%"};var Y=(0,V.k)(((e,{overflow:t,size:r,centered:n,zIndex:o})=>({close:{},overlay:{},root:{position:"fixed",zIndex:o,top:0,left:0,right:0,bottom:0},inner:{position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",padding:`${2*e.spacing.xl}px ${e.spacing.md}px`,display:"flex",justifyContent:"center",alignItems:n?"center":"flex-start"},title:{marginRight:e.spacing.md,textOverflow:"ellipsis",display:"block",wordBreak:"break-word"},modal:{position:"relative",width:e.fn.size({sizes:W,size:r}),outline:0,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,marginTop:n?"auto":void 0,marginBottom:n?"auto":void 0,zIndex:1,marginLeft:"calc(var(--removed-scroll-width, 0px) * -1)"},header:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:e.spacing.md,marginRight:-9},body:{maxHeight:"inside"===t?"calc(100vh - 185px)":null,overflowY:"inside"===t?"auto":null,wordBreak:"break-word"}}))),H=r(57178),K=r(93902),X=r(15017),G=r(54339),Q=r(23191),J=r(59046),ee=r(7443),te=Object.defineProperty,re=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,ie=(e,t,r)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const ae={size:"md",transitionDuration:250,overflow:"outside",transition:"pop",padding:"lg",shadow:"lg",closeOnClickOutside:!0,closeOnEscape:!0,trapFocus:!0,withCloseButton:!0,withinPortal:!0,overlayBlur:0,zIndex:(0,T.w)("modal")};function le(e){const t=(0,U.Z3)("Modal",ae,e),{className:r,opened:n,title:i,onClose:a,children:l,withCloseButton:c,overlayOpacity:s,size:u,transitionDuration:d,closeButtonLabel:f,overlayColor:m,overflow:p,transition:b,padding:y,shadow:v,radius:h,id:g,classNames:x,styles:w,closeOnClickOutside:j,trapFocus:O,closeOnEscape:P,centered:k,target:N,withinPortal:S,zIndex:E,overlayBlur:C}=t,F=((e,t)=>{var r={};for(var n in e)ne.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&re)for(var n of re(e))t.indexOf(n)<0&&oe.call(e,n)&&(r[n]=e[n]);return r})(t,["className","opened","title","onClose","children","withCloseButton","overlayOpacity","size","transitionDuration","closeButtonLabel","overlayColor","overflow","transition","padding","shadow","radius","id","classNames","styles","closeOnClickOutside","trapFocus","closeOnEscape","centered","target","withinPortal","zIndex","overlayBlur"]),z=(0,L.q)(g),I=`${z}-title`,D=`${z}-body`,{classes:A,cx:R,theme:Z}=Y({size:u,overflow:p,centered:k,zIndex:E},{classNames:x,styles:w,name:"Modal"}),_=(0,M.P)(O&&n),B="number"===typeof s?s:"dark"===Z.colorScheme?.85:.75,[,T]=(0,q.P)(),V=e=>{!O&&"Escape"===e.code&&P&&a()};return(0,o.useEffect)((()=>{if(!O)return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)}),[O]),(0,$.u)({opened:n,transitionDuration:0}),o.createElement(H.q,{withinPortal:S,zIndex:E,target:N},o.createElement(K.p,{onExited:()=>T(!1),onEntered:()=>T(!0),mounted:n,duration:d,exitDuration:d,transitions:{modal:{duration:d,transition:b},overlay:{duration:d/2,transition:"fade",timingFunction:"ease"}}},(e=>o.createElement(X.x,((e,t)=>{for(var r in t||(t={}))ne.call(t,r)&&ie(e,r,t[r]);if(re)for(var r of re(t))oe.call(t,r)&&ie(e,r,t[r]);return e})({id:z,className:R(A.root,r)},F),o.createElement("div",{className:A.inner,onKeyDownCapture:e=>{var t;"true"!==(null==(t=e.target)?void 0:t.getAttribute("data-mantine-stop-propagation"))&&"Escape"===e.nativeEvent.code&&P&&a()},ref:_},o.createElement(G.X,{className:A.modal,shadow:v,p:y,radius:h,role:"dialog","aria-labelledby":I,"aria-describedby":D,"aria-modal":!0,tabIndex:-1,style:e.modal},(i||c)&&o.createElement("div",{className:A.header},o.createElement(Q.x,{id:I,className:A.title},i),c&&o.createElement(J.P,{iconSize:16,onClick:a,"aria-label":f,className:A.close})),o.createElement("div",{id:D,className:A.body},l)),o.createElement("div",{style:e.overlay},o.createElement(ee.a,{className:A.overlay,sx:{position:"fixed"},zIndex:0,onMouseDown:()=>j&&a(),blur:C,color:m||("dark"===Z.colorScheme?Z.colors.dark[9]:Z.black),opacity:B})))))))}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ce(e,t,r[t])}))}return e}le.displayName="@mantine/core/Modal";var ue=function(e){var t=e.isOpen,r=e.onClose,o=O().getDropZoneRootProps,i=(0,D.$)().t;return(0,n.jsx)(le,{opened:t,onClose:r,children:(0,n.jsx)("div",se({},o({className:"flex h-full min-h-[750px] w-full rounded-2xl border-4 border-dashed border-blue-300 bg-gray-100"}),{children:(0,n.jsx)("div",{className:"m-auto text-center",children:(0,n.jsx)("p",{className:"text-xl font-semibold text-gray-400",children:i("Drag your files here here")})})}))})},de=r(96454),fe=function(){return{itemsWrap:(0,S.Z)("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7 items-start"),itemRoot:(0,S.Z)("relative block group"),itemSquare:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return(0,S.Z)("aspect-square w-full rounded-lg bg-white shadow-md overflow-hidden relative",e?"group-hover:shadow-lg duration-200":"cursor-default")},itemLabel:(0,S.Z)("mt-2 overflow-hidden text-ellipsis font-semibold group-hover:underline")}},me=r(39097),pe=r(85409);function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){be(e,t,r[t])}))}return e}function ve(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var he=fe(),ge=function(e){var t=e.itemId,r=e.children,o=(e.className,ve(e,["itemId","children","className"]));return(0,n.jsx)(me.default,{href:u.Ip.getUrl(t),children:(0,n.jsx)("a",ye({},o,{children:r}))})},xe=function(e){var t=e.id,r=e.filename,a=e.onDeleteClick,l=r.split(".").at(-1)||"unknown",c=l.includes("png")||l.includes("jpg")||l.includes("gif"),s=(0,o.useCallback)((function(){return a(t)}),[t,a]);return(0,n.jsxs)("article",{className:he.itemRoot,children:[(0,n.jsxs)(ge,{itemId:t,children:[(0,n.jsx)("div",{className:he.itemSquare(),children:c?(0,n.jsx)("img",{alt:"uploaded file",className:"absolute top-0 left-0 h-full w-full object-cover",src:u.Ip.getApiRawUrl(t,{w:"250",q:"60"},!0)}):(0,n.jsx)("div",{className:"flex h-full w-full",children:(0,n.jsx)("p",{className:"m-auto text-3xl font-bold text-gray-400",children:l})})}),(0,n.jsx)("h3",{className:he.itemLabel,children:r})]}),(0,n.jsx)("div",{className:"absolute top-0 right-0 m-2.5",children:(0,n.jsx)(pe.A,{onClick:s,size:45,color:"red",className:"border-2 border-project-border bg-white",children:(0,n.jsx)(i.R.Trash,{size:25})})})]})},we=r(24774),je=function(){var e=fe();return(0,n.jsx)(we.O,{className:e.itemSquare(!1)})},Oe=function(e){var t,r,a=e.itemKey,l=e.name,c=e.onClick,s=e.onDeleteClick,u=O(),d=u.currentPath,f=u.workingFolders,m=(0,o.useState)(!1),p=m[0],b=m[1],y=fe(),v=(0,o.useMemo)((function(){return"".concat("/"===d?"":d,"/").concat(a)}),[a,d]),h=function(){return b(!p)},g=(0,o.useMemo)((function(){return p?i.R.Folders:i.R.Folder}),[p]),x=(0,o.useCallback)((function(){return c(v)}),[c,v]),w=(0,o.useCallback)((function(){return s(v)}),[s,v]);return(0,n.jsxs)("div",{className:y.itemRoot,onMouseEnter:h,onMouseLeave:h,role:"link",children:[(0,n.jsx)("div",{className:(0,S.Z)(y.itemSquare(),"flex cursor-pointer"),onClick:x,children:(0,n.jsx)(g,{className:"m-auto block h-28 w-28 text-blue-500"})}),(0,n.jsx)("h3",{className:(0,S.Z)(y.itemLabel,"cursor-pointer text-left"),onClick:x,children:l}),(0,n.jsx)("div",{className:"absolute top-0 right-0 m-2.5",children:(0,n.jsx)(pe.A,{onClick:w,size:45,color:"red",className:"border-2 border-project-border bg-white",disabled:"deleting"===(null===(t=f[v])||void 0===t?void 0:t.type)||"uploading"===(null===(r=f[v])||void 0===r?void 0:r.type),children:(0,n.jsx)(i.R.Trash,{size:25})})})]})},Pe=r(36778),ke=r(89644),Ne=r.n(ke),Se=r(63955),Ee=r(85482);function Ce(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(n,o)}function Fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Fe(e,t,r[t])}))}return e}var Ie=function(e){var t,r,a=e.styles,c=void 0===a?{}:a,s=O(),d=s.updateValue,f=s.currentPath,m=(0,Ee.kY)().mutate,p=fe(),b=(0,D.$)().t,y=(0,Se.cI)(),v=y.register,h=y.handleSubmit,g=y.setFocus,x=y.formState,w=y.setError;(0,o.useEffect)((function(){g("name")}),[g]);var j=function(){var e,t=(e=l().mark((function e(t){var r,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,e.prev=1,e.next=4,u.sg.create("".concat(f,"/").concat(r));case 4:return e.next=6,m((0,Pe.v)(f));case 6:d("showNewFolderCreator",!1),e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(1),!Ne().isAxiosError(e.t0)||409!==(null===(n=e.t0.response)||void 0===n?void 0:n.status)){e.next=15;break}return w("name",{message:"This folder already exists"}),e.abrupt("return",!1);case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){Ce(i,n,o,a,l,"next",e)}function l(e){Ce(i,n,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,n.jsxs)("div",{className:(0,S.Z)(p.itemRoot,"text-left",x.isSubmitting&&"cursor-wait"),style:c,children:[(0,n.jsx)("div",{className:(0,S.Z)(p.itemSquare(!1),"flex"),children:(0,n.jsx)(i.R.FolderPlus,{className:"m-auto h-28 w-28 text-blue-500"})}),(0,n.jsxs)("form",{onSubmit:h(j),className:"relative",children:[(0,n.jsx)("input",ze({className:"mt-1 w-full !border-b-4 !border-blue-500 bg-transparent text-lg font-medium outline-0 disabled:opacity-50",disabled:x.isSubmitting||x.isSubmitSuccessful,autoComplete:"off"},v("name",{onBlur:function(){x.isSubmitting||d("showNewFolderCreator",!1)}}))),(null===(t=x.errors)||void 0===t||null===(r=t.name)||void 0===r?void 0:r.message)&&(0,n.jsx)("small",{className:"b-0 translate-y-full text-lg font-semibold text-red-500",children:b(x.errors.name.message)})]})]})},De=r(3734);function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Re(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(n,o)}function Ze(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){Re(i,n,o,a,l,"next",e)}function l(e){Re(i,n,o,a,l,"throw",e)}a(void 0)}))}}function _e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_e(e,t,r[t])}))}return e}function Le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Me=function(){var e,t,r=O(),i=r.isLoading,a=r.isError,c=r.files,d=r.showNewFolderCreator,f=r.updateValue,m=r.uploadingFiles,p=r.workingFolders,b=r.mutateFiles,y=r.mutateFolders,v=(0,s.z)(),h=fe(),g=(0,D.$)().t,x=(0,o.useCallback)((function(e){f("currentPath",e)}),[f]),w=(0,o.useCallback)(function(){var e=Ze(l().mark((function e(t){var r,n,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=v.showNotification({id:"Deleting folder",loading:!0,title:"Deleting folder",message:g("Deleting your folder..."),autoClose:!1,disallowClose:!0}),!confirm(g("Do you really want to delete this folder?"))){e.next=20;break}return n=t.split("/").at(-1),f("workingFolders",Be({},p,{path:{type:"deleting"}})),e.prev=4,e.next=7,u.sg.delete(t);case 7:return e.next=9,y((function(e){return null===e||void 0===e?void 0:e.filter((function(e){return e!==n}))}));case 9:f("workingFolders",Be({},p,{path:{type:"none"}})),v.updateNotification(r,{color:"green",message:g("Your folder has been deleted"),autoClose:2e3}),e.next=20;break;case 13:if(e.prev=13,e.t0=e.catch(4),!Ne().isAxiosError(e.t0)||400!==(null===(o=e.t0.response)||void 0===o?void 0:o.status)){e.next=19;break}return v.updateNotification(r,{color:"red",message:g("This folder is not empty! Delete its contents first"),autoClose:2e3}),e.abrupt("return");case 19:v.updateNotification(r,{color:"red",message:g("An unexpected error happened"),autoClose:2e3});case 20:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),[p,f,y,g,v]),j=(0,o.useCallback)(function(){var e=Ze(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm(g("Do you really want to delete this file?"))){e.next=5;break}return e.next=3,u.Ip.delete(t);case 3:return e.next=5,b((function(e){return e?{data:e.data.filter((function(e){return e.id!==t}))}:e}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b,g]);return i||a?(0,n.jsx)("div",{className:h.itemsWrap,children:new Array(10).fill(!0).map((function(e,t){return(0,n.jsx)(je,{},t)}))}):(0,n.jsx)(n.Fragment,{children:(null===c||void 0===c||null===(e=c.files)||void 0===e?void 0:e.length)||(null===c||void 0===c||null===(t=c.folders)||void 0===t?void 0:t.length)||d?(0,n.jsx)("div",{className:h.itemsWrap,children:(0,n.jsxs)(n.Fragment,{children:[(null===c||void 0===c?void 0:c.folders)&&c.folders.map((function(e){return(0,n.jsx)(Oe,{itemKey:e,name:e,onClick:x,onDeleteClick:w},e)})),(null===c||void 0===c?void 0:c.files)&&c.files.map((function(e){return(0,n.jsx)(xe,Be({onDeleteClick:j},e),e.id)})),(0,n.jsx)(De.u,{mounted:d,transition:"pop-top-left",duration:200,timingFunction:"ease",children:function(e){return(0,n.jsx)(Ie,{styles:e})}}),Object.entries(m).map((function(e){var t=Le(e,1)[0];return(0,n.jsx)(je,{},t)}))]})}):(0,n.jsx)(de.Z,{})})},qe=function(){var e=(0,o.useState)(!1),t=e[0],r=e[1],i=(0,o.useCallback)((function(e){var n;e.preventDefault(),t||"Files"!==((null===e||void 0===e||null===(n=e.dataTransfer)||void 0===n?void 0:n.types)||[]).join("")||r(!0)}),[t,r]),a=(0,o.useCallback)((function(e){e.preventDefault(),t&&r(!1)}),[t,r]),l=(0,o.useCallback)((function(){return r(!1)}),[r]);return(0,n.jsx)(k,{children:(0,n.jsxs)("div",{onDragOver:i,onDrop:a,children:[(0,n.jsx)(B,{}),(0,n.jsx)(Me,{}),(0,n.jsx)(ue,{isOpen:t,onClose:l})]})})},$e=r(33792),Te=r(57704),Ue=r(62626),Ve=function(){var e=(0,D.$)().t,t=(0,$e.S)("files");return t?(0,n.jsxs)(Te.Xg,{children:[(0,n.jsx)("div",{className:"flex w-full flex-col justify-between gap-5 py-10 md:flex-row",children:(0,n.jsx)("h1",{className:"text-3xl font-semibold capitalize",children:e(t.tableName||"")})}),(0,n.jsx)(qe,{})]}):(0,n.jsx)(Ue.default,{text:e("This model with this id does not exist.")})}},76836:function(e){e.exports={root:"button_root__ys37e","size--large":"button_size--large__1r3yQ","size--small":"button_size--small__HNkLe","size--normal":"button_size--normal__4OeMn","color--success":"button_color--success__r4fw1","color--ghost":"button_color--ghost__BmmzL","color--warning":"button_color--warning__Vzrxp","color--error":"button_color--error__OjPlq"}}}]);