"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{96454:function(e,r,t){var n=t(52322),o=t(26359),u=t(6277),a=t(52829);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}r.Z=function(e){var r=e.className,t=c(e,["className"]),f=(0,a.$)().t;return(0,n.jsxs)("div",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){i(e,r,t[r])}))}return e}({className:(0,u.Z)("flex min-h-[300px] flex-col justify-center text-center text-xl font-semibold text-gray-400",r)},t,{children:[(0,n.jsx)(o.Z,{size:40,className:"mx-auto"}),(0,n.jsx)("p",{children:f("No items available...")})]}))}},75707:function(e,r,t){t.d(r,{SP:function(){return a.S},c3:function(){return i.c},aM:function(){return c.a},oN:function(){return u}});var n=t(5632),o=t(2784),u=function(e){var r=(0,n.useRouter)().query;return(0,o.useMemo)((function(){return r[e]}),[r,e])};var a=t(33792),i=(t(54557),t(25865),t(93118),t(76902)),c=(t(59377),t(74531),t(17080));t(97470),t(88150),t(36778)},93118:function(e,r,t){var n=t(2784),o=t(75707);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r.Z=function(){var e=(0,o.oN)("modelId"),r=(0,n.useMemo)((function(){return String(e).toLowerCase()}),[e]),t=(0,o.SP)(r);return(0,n.useMemo)((function(){return t?function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}({},t,{name:r}):void 0}),[r,t])}},59377:function(e,r,t){var n=t(75707),o=t(93118),u={refreshInterval:0,revalidateOnFocus:!1,revalidateIfStale:!1,revalidateOnMount:!0,revalidateOnReconnect:!1};r.Z=function(){var e=(0,o.Z)(),r=(0,n.oN)("entryId");return(0,n.c3)(null===e||void 0===e?void 0:e.name,r||void 0,u)}},88150:function(e,r,t){t.d(r,{D:function(){return u}});var n=t(36778),o=t(25865),u=function(e){var r=(0,o.y)("files",{path:e}),t=r.data,u=r.isError,a=r.isLoading,i=r.mutate,c=(0,n.j)(e),f=c.data,l=c.error,s=c.mutate;return{data:(null===t||void 0===t?void 0:t.data)||f?{files:null===t||void 0===t?void 0:t.data,folders:f}:void 0,isError:u||l,isLoading:a||!l&&!f,mutateFiles:i,mutateFolders:s}}},36778:function(e,r,t){t.d(r,{v:function(){return u},j:function(){return a}});var n=t(52170),o=t(85482),u=function(e){return"".concat(n.Xn,"/folders?path=").concat(e)},a=function(e){return(0,o.ZP)(u(e),{isPaused:function(){return!e}})}},33792:function(e,r,t){t.d(r,{S:function(){return u}});var n=t(8168),o=t(2784),u=function(e){var r=(0,n.bN)().models;return(0,o.useMemo)((function(){return r&&r[e]}),[e,r])}},76902:function(e,r,t){t.d(r,{c:function(){return i}});var n=t(8168),o=t(41277),u=t(2784),a=t(85482),i=function(e,r,t){var i=(0,n.bN)().models,c=(0,u.useMemo)((function(){return void 0!==r}),[r]),f=(0,a.ZP)(c&&i?o.Uq.apiGetUrl(r,e):null,t),l=f.data,s=f.error,v=f.mutate;return(0,u.useMemo)((function(){return{data:l,isLoading:!s&&!l,itemIsMissing:s,isError:s,mutate:v}}),[l,s,v])}},25865:function(e,r,t){t.d(r,{y:function(){return a}});var n=t(41277),o=t(75707);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r,t){return(0,o.aM)(n.Uq.apiGetListUrl(e||""),r,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}({isPaused:function(){return!e}},t))}},17080:function(e,r,t){t.d(r,{a:function(){return v}});var n=t(11804),o=t(85482);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.x.get(e,{params:r}).then((function(e){return e.data}))},s=function(e){var r=e.where,t=i({},c(e,["where"]));return r&&(t.where=Object.entries(r||{}).map((function(e){var r=f(e,2),t=r[0],n=r[1],o=n.manipulator,u=n.value;return"".concat(t,".").concat(o,".").concat(u)})).join(";")),t};function v(e,r,t){var n=(0,o.ZP)([e,s(null!==r&&void 0!==r?r:{})],l,t),u=n.data,a=n.error;return i({data:u,isLoading:!a&&!u,isError:a},c(n,["data","error"]))}},97470:function(e,r,t){t.d(r,{$:function(){return f}});var n=t(94776),o=t.n(n),u=t(80298),a=t(59748),i=t(52829);function c(e,r,t,n,o,u,a){try{var i=e[u](a),c=i.value}catch(f){return void t(f)}i.done?r(c):Promise.resolve(c).then(n,o)}var f=function(){var e=(0,a.z)(),r=(0,u.M)(),t=(0,i.$)().t;return function(){var n,u=(n=o().mark((function n(u,a){var i,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.showNotification({id:r,loading:!0,title:u.title,message:u.message,autoClose:!1,disallowClose:!0}),n.prev=1,n.next=4,a();case 4:return c=n.sent,e.updateNotification(i,{message:u.successMessage||t("Task completed successfully"),autoClose:4e3}),n.abrupt("return",c);case 9:throw n.prev=9,n.t0=n.catch(1),e.updateNotification(i,{color:"red",message:u.errorMessage?"function"===typeof u.errorMessage?u.errorMessage(n.t0):u.errorMessage:t("An error happened"),autoClose:4e3}),n.t0;case 13:case"end":return n.stop()}}),n,null,[[1,9]])})),function(){var e=this,r=arguments;return new Promise((function(t,o){var u=n.apply(e,r);function a(e){c(u,t,o,a,i,"next",e)}function i(e){c(u,t,o,a,i,"throw",e)}a(void 0)}))});return function(e,r){return u.apply(this,arguments)}}()}},74531:function(e,r,t){t.d(r,{a:function(){return o}});var n=t(75707),o=function(e,r){return(0,n.c3)("users",e,r)}}}]);