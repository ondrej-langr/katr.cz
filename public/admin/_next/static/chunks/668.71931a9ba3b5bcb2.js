(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[668],{25026:function(e,t,n){"use strict";n.d(t,{z:function(){return f}});var r=n(52322),o=n(53610),i=n(6277),a=n(2784),l=n(76836),c=n.n(l);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=(0,a.forwardRef)((function(e,t){var n=e.children,a=e.className,l=e.size,d=void 0===l?"normal":l,f=e.color,h=e.type,p=void 0===h?"button":h,b=e.icon,m=s(e,["children","className","size","color","type","icon"]),g=b&&o.R[b];return(0,r.jsxs)("button",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({ref:t,className:(0,i.Z)(c().root,c()["size--".concat(d)],f&&c()["color--".concat(f)],a),type:p},m,{children:[g&&(0,r.jsx)(g,{className:"mr-1.5 -ml-1 -mt-1 inline aspect-square w-5"}),n]}))})),f=d},51668:function(e,t,n){"use strict";n.r(t),n.d(t,{EDITOR_HOLDER_ID:function(){return $e},LazyEditor:function(){return He}});var r=n(52322),o=n(2784),i=n(13943),a=n.n(i),l=n(31311),c=n.n(l),u=n(88295),s=n.n(u),d=n(88933),f=n.n(d),h=n(10411),p=n.n(h),b=n(44073),m=n.n(b),g=n(74166),v=n.n(g),y=n(17873),w=n.n(y),j=n(28463),O=n.n(j),x=n(40718),k=n.n(x),S=n(94776),E=n.n(S),C=n(28316),P=n(31005),I=n(16508),N=n(22711),T=n(23384),_=n(81428),A=n(59401),D=n(34272),z=n(40530),R=n(53610),M=n(6277),L=n(52829);function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}var F=function(e){var t=e.data,n=e.onDataChange,i=e.readOnly,a=(0,o.useState)(!1),l=a[0],c=a[1],u=(0,o.useState)(B({},t)),s=u[0],d=u[1],f=(0,L.$)().t;(0,o.useEffect)((function(){return d(B({},t))}),[t]),(0,o.useEffect)((function(){return n(s)}),[s,n]);var h=(0,o.useMemo)((function(){return s.fileId?[s.fileId]:[]}),[s.fileId]);return(0,r.jsx)(N.Z,{children:(0,r.jsx)("div",{className:(0,M.Z)("relative min-h-[200px] w-full rounded-lg bg-white p-5",!i&&"border-2 border-project-border shadow-md"),children:i?s.fileId?(0,r.jsx)(P.Z,{imageId:s.fileId,className:"absolute top-0 left-0 h-full w-full rounded-lg object-cover"}):"":(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T.D,{order:3,children:f("Image block")}),(0,r.jsxs)("div",{className:"mt-4 flex gap-5",children:[(0,r.jsx)(_.J,{withArrow:!0,withinPortal:!1,opened:l,onClose:function(){return c(!1)},target:(0,r.jsxs)(A.k,{className:"relative h-32 w-32 flex-none",onClick:function(){return c((function(e){return!e}))},children:[s.fileId?(0,r.jsx)(P.Z,{imageId:s.fileId,className:"absolute top-0 left-0 h-full w-full overflow-hidden rounded-full object-cover object-center"}):(0,r.jsx)("div",{className:"absolute top-0 left-0 flex h-full w-full overflow-hidden rounded-full bg-gray-200",children:(0,r.jsx)(R.R.Photo,{size:40,className:"icon icon-tabler icon-tabler-photo m-auto"})}),(0,r.jsx)("div",{className:"absolute right-0 bottom-0 rounded-full border-4 border-white bg-blue-500 p-2 text-white",children:(0,r.jsx)(R.R.Pencil,{size:30})})]}),width:590,position:"right",placement:"start",children:(0,r.jsx)(I.b,{filter:[["mimeType","regexp","^image/.*$"]],multiple:!1,pickedFiles:h,onChange:function(e){d(B({},s,{fileId:e[0]||""}))},triggerClose:function(){return c(!1)}})}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(D.o,{label:f("Label"),value:s.label||"",placeholder:f("Some text"),onChange:function(e){return d(B({},s,{label:e.currentTarget.value}))}}),(0,r.jsx)(z.g,{label:f("Description"),mt:"sm",value:s.description||"",placeholder:f("Some text"),onChange:function(e){return d(B({},s,{description:e.currentTarget.value}))}})]})]})]})})})};function J(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,o)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function(){function e(t){var n=t.data,r=t.api,o=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.readOnly=o,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.data={fileId:n.fileId||"",label:n.label},this.CSS={wrapper:"image-tool my-5",input:"hidden"},this.nodes={holder:null,inputElement:null,reactElement:null}}var t,n,o,i=e.prototype;return i.render=function(){var e=document.createElement("div"),t=document.createElement("input"),n=document.createElement("div");e.setAttribute("class",this.CSS.wrapper),t.setAttribute("class",this.CSS.input),e.appendChild(t),e.appendChild(n),this.nodes.inputElement=t,this.nodes.reactElement=n,this.nodes.holder=e;var o=this,i=function(){var e,t=(e=E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.readOnly){e.next=2;break}return e.abrupt("return");case 2:o.data=Object.assign(o.data,t),o.nodes.inputElement&&(o.nodes.inputElement.value=JSON.stringify(o.data),o.nodes.inputElement.dispatchEvent(new Event("change")));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){J(i,r,o,a,l,"next",e)}function l(e){J(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return C.render((0,r.jsx)(F,{data:this.data,onDataChange:i,readOnly:this.readOnly}),this.nodes.reactElement),this.nodes.holder},i.validate=function(){return!!this.data.fileId},i.save=function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){H(e,t,n[t])}))}return e}({},this.data)},t=e,o=[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{title:"Image",icon:'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'}}}],(n=null)&&$(t.prototype,n),o&&$(t,o),e}(),q=V,U=n(42137),G=function(e){var t=e.numberOfCols,n=e.editorJSConfig,r=e.t,o=new Array(t).fill(!0);return{class:U.LayoutBlockTool,config:{EditorJS:a(),editorJSConfig:n,enableLayoutEditing:!0,enableLayoutSaving:!0,initialData:{itemContent:Object.fromEntries(o.map((function(e,t){return[t,{blocks:[]}]}))),layout:{type:"container",id:"",className:"editor-js__layout__wrap",children:o.map((function(e,t){return{type:"item",id:String(t),className:"editor-js__layout__item",itemContentId:String(t)}}))}}},shortcut:"CMD+2",toolbox:{icon:'\n      <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="icon icon-tabler icon-tabler-layout-board" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">\n      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n      <rect x="4" y="4" width="16" height="16" rx="2" />\n      <path d="M4 9h8" />\n      <path d="M12 15h8" />\n      <path d="M12 4v16" />\n    </svg>\n              ',title:"".concat(o.length," ").concat(r("Columns"))}}},W=n(24917),X=n(85409);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Q(e,t,n[t])}))}return e}function ee(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function te(e){return function(e){if(Array.isArray(e))return K(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ne=function(e){var t,n,i,a=e.data,l=e.onDataChange,c=e.readOnly,u=(0,o.useState)(!1),s=u[0],d=u[1],f=(0,o.useState)(Y({},a)),h=f[0],p=f[1],b=(0,L.$)().t;(0,o.useEffect)((function(){return p(Y({},a))}),[a]),(0,o.useEffect)((function(){return l(h)}),[h,l]);var m=function(e,t,n){return p((function(r){var o=r.fileIds,i=void 0===o?[]:o,a=ee(r,["fileIds"]);return i[i.findIndex((function(e){var n=e.id;return t===n}))][e]=n,Y({fileIds:i},a)}))};return(0,r.jsx)(N.Z,{children:(0,r.jsx)("div",{className:(0,M.Z)("relative min-h-[200px] w-full rounded-lg bg-white p-5",c?"grid grid-cols-2 gap-3":"border-2 border-project-border shadow-md"),children:c?(h.fileIds||[]).length?null===(i=h.fileIds)||void 0===i?void 0:i.map((function(e){var t=e.id;return(0,r.jsx)("div",{className:"relative aspect-square w-full",children:(0,r.jsx)(P.Z,{imageId:t,className:"absolute top-0 left-0 h-full w-full rounded-lg border-2 border-project-border object-cover"})},t)})):"":(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T.D,{order:3,children:b("Gallery block")}),(0,r.jsx)(D.o,{label:b("Gallery name"),value:h.label||"",placeholder:b("Some text"),onChange:function(e){return p((function(t){return Y({},t,{label:e.currentTarget.value})}))},className:"mt-2"}),(0,r.jsx)("hr",{className:"mb-4 mt-4 h-0.5 w-full border-none bg-gray-200"}),(0,r.jsx)(_.J,{withArrow:!0,opened:s,onClose:function(){return d(!1)},className:"w-full",positionDependencies:[h.fileIds],withinPortal:!1,target:(0,r.jsxs)(W.z,{size:"lg",variant:"light",className:"flex w-full items-center text-lg",onClick:function(){return d((function(e){return!e}))},children:[(0,r.jsx)(R.R.Plus,{className:"mr-4",size:50}),b("Select new image")]}),width:590,position:"bottom",placement:"start",children:(0,r.jsx)(I.b,{multiple:!0,filter:[["mimeType","regexp","^image/.*$"]],pickedFiles:(null===(t=h.fileIds)||void 0===t?void 0:t.map((function(e){return e.id})))||[],onChange:function(e){return p((function(t){var n,r=t.fileIds,o=void 0===r?[]:r,i=ee(t,["fileIds"]),a=o.map((function(e){return e.id}));o=o.filter((function(t){var n=t.id;return e.includes(n)}));var l=e.filter((function(e){return!a.includes(e)}));return(n=o).push.apply(n,te(l.map((function(e){return{id:e}})))),Y({},i,{fileIds:o})}))},triggerClose:function(){return d(!1)}})}),null===(n=h.fileIds)||void 0===n?void 0:n.map((function(e){var t=e.id,n=e.description,o=e.title;return(0,r.jsxs)("div",{className:"mt-5 flex",children:[(0,r.jsxs)("div",{className:"relative mr-5 h-32 w-32 flex-none",children:[(0,r.jsx)(P.Z,{imageId:t,className:"absolute top-0 left-0 h-full w-full overflow-hidden rounded-full object-cover object-center"}),(0,r.jsx)(X.A,{variant:"filled",color:"red",size:"xl",className:"absolute right-0 bottom-0 p-1",onClick:function(){return p((function(e){var t=e.fileIds,n=void 0===t?[]:t;return Y({},ee(e,["fileIds"]),{fileIds:n.filter((function(e){var t=e.id;return t!==t}))})}))},children:(0,r.jsx)(R.R.Trash,{})})]}),(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(D.o,{label:b("Title"),value:o||"",placeholder:b("Some text"),onChange:function(e){return m("title",t,e.currentTarget.value)}}),(0,r.jsx)(z.g,{label:b("Description"),mt:"sm",value:n||"",placeholder:b("Some text"),onChange:function(e){return m("description",t,e.currentTarget.value)}})]})]},t)}))]})})})};function re(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,o)}function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae=function(){function e(t){var n=t.data,r=t.api,o=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.readOnly=o,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.data={fileIds:n.fileIds||[],label:n.label},this.CSS={wrapper:"image-tool my-5",input:"hidden"},this.nodes={holder:null,inputElement:null,reactElement:null}}var t,n,o,i=e.prototype;return i.render=function(){var e=document.createElement("div"),t=document.createElement("input"),n=document.createElement("div");e.setAttribute("class",this.CSS.wrapper),t.setAttribute("class",this.CSS.input),e.appendChild(t),e.appendChild(n),this.nodes.inputElement=t,this.nodes.reactElement=n,this.nodes.holder=e;var o=this,i=function(){var e,t=(e=E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.readOnly){e.next=2;break}return e.abrupt("return");case 2:o.data=Object.assign(o.data,t),o.nodes.inputElement&&(o.nodes.inputElement.value=JSON.stringify(o.data),o.nodes.inputElement.dispatchEvent(new Event("change")));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){re(i,r,o,a,l,"next",e)}function l(e){re(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return C.render((0,r.jsx)(ne,{data:this.data,onDataChange:i,readOnly:this.readOnly}),this.nodes.reactElement),this.nodes.holder},i.validate=function(){return!(!this.data.fileIds||!this.data.fileIds.length)},i.save=function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ie(e,t,n[t])}))}return e}({},this.data)},t=e,o=[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{title:"Gallery",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-polaroid" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="4" y1="16" x2="20" y2="16" /><path d="M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4" /><path d="M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2" /><line x1="14" y1="7" x2="14.01" y2="7" /></svg>'}}}],(n=null)&&oe(t.prototype,n),o&&oe(t,o),e}(),le=ae,ce=n(59610),ue=n.n(ce),se=n(25026),de=n(64842),fe=n(74559),he=n(57897),pe=n(18362);function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){me(e,t,n[t])}))}return e}function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return be(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.entries(R.R).map((function(e){var t=ve(e,2),n=t[0];return{icon:t[1],value:n,label:(0,pe.fm)(n)}}));var ye=function(e){var t=e.dataFromParent,n=e.readOnly,i=e.onDataChange,a=(0,o.useState)(t),l=a[0],c=a[1],u=(0,L.$)().t;(0,o.useEffect)((function(){c(t)}),[t]),(0,o.useEffect)((function(){i(l)}),[l,i]);var s=function(e,t){c(ge({},l,me({},e,t)))},d=(0,o.useMemo)((function(){return!l.linkTo.length||!!/^((https|http):\/\/).*/.test(l.linkTo)}),[l.linkTo]),f=(0,o.useMemo)((function(){return l.icon?R.R[l.icon]:void 0}),[l.icon]);return(0,r.jsx)(N.Z,{children:n?(0,r.jsxs)(se.z,{color:"success",size:"large",className:"flex gap-5 !rounded-none",children:[f&&(0,r.jsx)(f,{}),l.label||l.linkTo]}):(0,r.jsxs)("div",{className:"rounded-lg border-2 border-project-border bg-white p-5",children:[(0,r.jsx)(T.D,{order:3,children:u("Button link")}),(0,r.jsxs)(fe.Z,{className:"mt-4",noWrap:!0,grow:!0,children:[(0,r.jsx)(D.o,{required:!0,label:u("Link"),placeholder:"https://google.com",error:d?void 0:u("Invalid url"),type:"url",value:l.linkTo,onChange:function(e){return s("linkTo",e.currentTarget.value)},rightSection:d?(0,r.jsx)(R.R.Check,{size:16,color:"green"}):(0,r.jsx)(R.R.Link,{size:16})}),(0,r.jsx)(D.o,{label:u("Label"),placeholder:u("Some text"),value:l.label,onChange:function(e){return s("label",e.currentTarget.value)},rightSection:(0,r.jsx)(R.R.AB,{size:16})})]}),(0,r.jsxs)(fe.Z,{className:"mt-4 items-start",noWrap:!0,grow:!0,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(he.X,{label:u("Download on button click"),checked:l.isDownload,onChange:function(e){return s("isDownload",e.currentTarget.checked)}}),(0,r.jsx)(he.X,{mt:"md",label:u("Open on new tab"),checked:l.openOnNewTab,onChange:function(e){return s("openOnNewTab",e.currentTarget.checked)}})]}),(0,r.jsx)(de.Z,{label:u("Placeholder Image"),selected:l.placeholderImage||null,onChange:function(e){return s("placeholderImage",e)}})]})]})})};function we(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,o)}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Oe(e,t,n[t])}))}return e}var ke=function(){function e(t){var n=t.data,r=t.api,o=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=r,this.readOnly=o,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.data=xe({linkTo:""},n),this.CSS={wrapper:"button-link-tool my-5",input:"hidden"},this.nodes={holder:null,inputElement:null,reactElement:null}}var t,n,o,i=e.prototype;return i.render=function(){var e=document.createElement("div"),t=document.createElement("input"),n=document.createElement("div");e.setAttribute("class",this.CSS.wrapper),t.setAttribute("class",this.CSS.input),e.appendChild(t),e.appendChild(n),this.nodes.inputElement=t,this.nodes.reactElement=n,this.nodes.holder=e;var o=this,i=function(){var e,t=(e=E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.readOnly){e.next=2;break}return e.abrupt("return");case 2:o.data=Object.assign(o.data,t),o.nodes.inputElement&&(o.nodes.inputElement.value=JSON.stringify(o.data),o.nodes.inputElement.dispatchEvent(new Event("change")));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){we(i,r,o,a,l,"next",e)}function l(e){we(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return C.render((0,r.jsx)(ye,{dataFromParent:this.data,onDataChange:i,readOnly:this.readOnly}),this.nodes.reactElement),this.nodes.holder},i.validate=function(){return!(!this.data.linkTo||!/^((https|http):\/\/).*/.test(this.data.linkTo))},i.save=function(){return xe({},this.data)},t=e,o=[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{title:"Button Link",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" /><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" /></svg>'}}}],(n=null)&&je(t.prototype,n),o&&je(t,o),e}(),Se=ke,Ee=n(48826),Ce=n(89519);function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Ie(e,t,n[t])}))}return e}function Te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||Ae(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _e(e){return function(e){if(Array.isArray(e))return Pe(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Ae(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ae(e,t){if(e){if("string"===typeof e)return Pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pe(e,t):void 0}}var De=function(e){var t=e.readOnly,n=e.dataFromParent,i=e.onDataChange,a=(0,o.useState)(n),l=a[0],c=a[1],u=Te((0,Ce.U)(""),2),s=u[0],d=u[1],f=(0,L.$)().t;(0,o.useEffect)((function(){c(n)}),[n]),(0,o.useEffect)((function(){i(l)}),[l,i]);var h=function(e){return function(){return c(Ne({},l,{tags:l.tags.filter((function(t){return t!==e}))}))}};return(0,r.jsx)(N.Z,{children:(0,r.jsxs)("div",{className:(0,M.Z)("rounded-lg border-2 border-project-border bg-white p-5"),children:[(0,r.jsx)("p",{className:"text-xl font-semibold",children:f("Tags")}),(0,r.jsx)(fe.Z,{className:"my-5",children:l.tags.length?l.tags.map((function(e,n){return(0,r.jsx)(Ee.C,{variant:"outline",rightSection:!t&&(0,r.jsx)(X.A,{size:"xs",color:"gray",radius:"xl",variant:"light",onClick:h(e),children:(0,r.jsx)(R.R.X,{size:10})}),children:e},e)})):(0,r.jsx)("p",{className:"text-gray-400",children:f("No tags, start by adding some")})}),!t&&(0,r.jsx)(fe.Z,{noWrap:!0,children:(0,r.jsx)(D.o,{icon:(0,r.jsx)(R.R.Tag,{size:20}),placeholder:f("New badge name"),className:"w-full",value:s,onInput:d,onKeyDown:function(e){"enter"===e.key.toLowerCase()&&(e.preventDefault(),e.stopPropagation(),s&&(c(Ne({},l,{tags:_e(l.tags.filter((function(e){return e!==s}))).concat([s])})),d("")))}})})]})})};function ze(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,o)}function Re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Le=function(){function e(t){var n,r=t.data,o=t.api,i=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=o,this.readOnly=i,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.data={tags:null!==(n=r.tags)&&void 0!==n?n:[]},this.CSS={wrapper:"tags-tool my-5",input:"hidden"},this.nodes={holder:null,inputElement:null,reactElement:null}}var t,n,o,i=e.prototype;return i.render=function(){var e=document.createElement("div"),t=document.createElement("input"),n=document.createElement("div");e.setAttribute("class",this.CSS.wrapper),t.setAttribute("class",this.CSS.input),e.appendChild(t),e.appendChild(n),this.nodes.inputElement=t,this.nodes.reactElement=n,this.nodes.holder=e;var o=this,i=function(){var e,t=(e=E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.readOnly){e.next=2;break}return e.abrupt("return");case 2:o.data=Object.assign(o.data,t),o.nodes.inputElement&&(o.nodes.inputElement.value=JSON.stringify(o.data),o.nodes.inputElement.dispatchEvent(new Event("change")));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){ze(i,r,o,a,l,"next",e)}function l(e){ze(i,r,o,a,l,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return C.render((0,r.jsx)(De,{dataFromParent:this.data,onDataChange:i,readOnly:this.readOnly}),this.nodes.reactElement),this.nodes.holder},i.validate=function(){return!(!this.data.tags||!this.data.tags.length)},i.save=function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Me(e,t,n[t])}))}return e}({},this.data)},t=e,o=[{key:"isReadOnlySupported",get:function(){return!0}},{key:"toolbox",get:function(){return{title:"Tags",icon:'\n        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tags" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">\n          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n          <path d="M7.859 6h-2.834a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-6.117 -6.116a2.025 2.025 0 0 0 -1.431 -.593z" />\n          <path d="M17.573 18.407l2.834 -2.834a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116" />\n          <path d="M6 9h-.01" />\n        </svg>\n      '}}}],(n=null)&&Re(t.prototype,n),o&&Re(t,o),e}(),Ze=Le;function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Be(e,t,n[t])}))}return e}function Je(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var $e="editor-content",He=function(e){var t=e.initialValue,n=e.editorRef,i=e.error,l=Je(e,["initialValue","editorRef","error"]),u=(0,o.useRef)(),d=(0,o.useState)(!1),h=d[0],b=d[1],g=(0,L.$)().t;return(0,o.useImperativeHandle)(n,(function(){return u.current})),(0,o.useEffect)((function(){var e=Fe({holder:$e,logLevel:"ERROR",placeholder:g("Start typing here..."),tools:{header:{class:w(),config:{placeholder:g("Start typing here..."),levels:[2,3,4],defaultLevel:2}},table:c(),underline:s(),Marker:{class:f()},embed:{class:ue()},buttonLink:{class:Se},tags:Ze,image:{class:q,inlineToolbar:!0},gallery:{class:le,inlineToolbar:!0},list:{class:p(),inlineToolbar:!0,config:{defaultStyle:"unordered"}},changeCase:{class:v(),config:{showLocaleOption:!0,locale:"tr"}},tooltip:{class:m(),config:{location:"left",highlightColor:"#FFEFD5",underline:!0,backgroundColor:"#154360",textColor:"#FDFEFE",holder:$e}},anyTuneName:{class:O(),config:{default:"left",blocks:{header:"left",list:"left"}}},paragraph:{class:k(),inlineToolbar:!0,config:{placeholder:g("Start typing here...")}}},inlineToolbar:!0,onReady:function(){l.onReady&&l.onReady(),b(!0)}},l),t=(e.onChange,e.onReady,Je(e,["onChange","onReady"])),n=Fe({},e,{tools:Fe({},e.tools,{columns:G({numberOfCols:4,editorJSConfig:t,t:g})})}),r=new(a())(n);return u.current=r,function(){var e,t;(null===(e=u.current)||void 0===e?void 0:e.destroy)&&(null===(t=u.current)||void 0===t||t.destroy())}}),[g]),(0,o.useEffect)((function(){if(u.current&&t&&u.current.render&&h){var e="string"==typeof t?JSON.parse(t):JSON.parse(JSON.stringify(t||{}));e.blocks&&e.blocks.length&&u.current.render(e)}}),[h,t]),(0,r.jsxs)("div",{children:[i&&(0,r.jsx)("small",{className:"font-bold text-red-500",children:i}),(0,r.jsx)("div",{id:$e})]})}},76836:function(e){e.exports={root:"button_root__ys37e","size--large":"button_size--large__1r3yQ","size--small":"button_size--small__HNkLe","size--normal":"button_size--normal__4OeMn","color--success":"button_color--success__r4fw1","color--ghost":"button_color--ghost__BmmzL","color--warning":"button_color--warning__Vzrxp","color--error":"button_color--error__OjPlq"}}}]);