"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{96454:function(e,t,r){var n=r(52322),a=r(53610),i=r(6277),o=r(52829);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}t.Z=function(e){var t=e.className,r=c(e,["className"]),u=(0,o.$)().t;return(0,n.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({className:(0,i.Z)("flex min-h-[300px] flex-col justify-center text-center text-xl font-semibold text-gray-400",t)},r,{children:[(0,n.jsx)(a.R.QuestionMark,{size:40,className:"mx-auto"}),(0,n.jsx)("p",{children:u("No items available...")})]}))}},98666:function(e,t,r){r.d(t,{H:function(){return A}});var n=r(94776),a=r.n(n),i=r(52322),o=r(96454),l=r(89673),c=r(53610),u=r(6277),s=r(2784),f=r(52829),d=r(47761),b=r(5019),p=r(54339),m=r(74559),h=r(85409),y=r(40023),g=function(){return{tableHead:(0,u.Z)("border-b-2 border-gray-100 px-5 py-5 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"),tableData:(0,u.Z)("border-b border-gray-200 bg-white px-5 py-5 group-last:border-opacity-0"),tableDataParagraph:(0,u.Z)("w-full max-w-[350px] overflow-hidden truncate text-gray-900"),tableWrapper:(0,u.Z)("inline-block w-full min-w-full overflow-hidden overflow-x-auto bg-white px-7 relative"),tableRow:(0,u.Z)("bg-white rounded-lg group")}};function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t,r,n,a,i,o){try{var l=e[i](o),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,a)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}function O(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function N(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=function(e){var t=e.className,r=O(e,["className"]);return(0,i.jsx)(l.Z,w({className:(0,u.Z)(t,"h-7 w-full")},r))},S=(0,b.z3)(5),k=function(e){var t=e.children,r=e.index,n=e.id,a=e.toggled,o=g();return a?(0,i.jsx)(y._l,{index:r,draggableId:String(n),children:function(e,r){return(0,i.jsxs)("tr",w({className:(0,u.Z)(o.tableRow,r.isDragging&&"table"),ref:e.innerRef},e.draggableProps,{children:[(0,i.jsx)("td",{style:{width:40},children:(0,i.jsx)("div",w({},e.dragHandleProps,{children:(0,i.jsx)(c.R.GripVertical,{size:18})}))}),t]}))}}):(0,i.jsx)("tr",{className:o.tableRow,children:t})},A=function(e){var t=e.columns,r=e.items,n=e.metadata,l=e.isLoading,b=e.pagination,x=e.onDeleteAction,v=e.onEditAction,O=e.onDuplicateAction,A=e.onDragEnd,D=void 0===A?function(){}:A,E=e.ordering,Z=e.disabled,I=(0,f.$)().t,R=g(),C=(0,s.useState)(),M=(C[0],C[1],(0,s.useCallback)((function(e,t){return r=a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("delete"===e&&x?n=x:"edit"===e&&v?n=v:"duplicate"===e&&O&&(n=O),!n.then){r.next=7;break}return r.next=5,n(t);case 5:r.next=8;break;case 7:n(t);case 8:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,a){var i=r.apply(e,t);function o(e){j(i,n,a,o,l,"next",e)}function l(e){j(i,n,a,o,l,"throw",e)}o(void 0)}))};var r}),[v,x,O])),_=(0,s.useMemo)((function(){return t.filter((function(e){var t=e.show;return void 0===t||t}))}),[t]),H=v||x,U=(0,s.useMemo)((function(){var e=_.filter((function(e){return"id"!==e.fieldName})).length;return"calc(".concat(100/e,"% - ").concat(((E?100:0)+(H?150:0))/e,"px)")}),[_,H,E]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.Z5,{onDragEnd:D,children:(0,i.jsxs)(p.X,{withBorder:!0,shadow:"smallBlue",className:R.tableWrapper,children:[(0,i.jsxs)("table",{className:"min-w-full leading-normal",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[E&&(0,i.jsx)("th",{style:{width:40}}),_.map((function(e){var t=e.fieldName,r=e.title;return(0,i.jsx)("th",{style:{width:"id"===t?100:U},className:R.tableHead,children:I(r)},t)})),H&&(0,i.jsx)("th",{style:{width:150},className:(0,u.Z)(R.tableHead,"text-opacity-0"),children:I("Actions")})]})}),(0,i.jsx)(y.bK,{droppableId:"dnd-table-view",direction:"vertical",isDropDisabled:!E,children:function(e){return(0,i.jsxs)("tbody",w({},e.droppableProps,{ref:e.innerRef,children:[!!r.length&&!l&&r.map((function(e,t){return(0,i.jsxs)(k,{index:t,id:e.id,toggled:!!E,children:[_.map((function(t){var r=t.formatter,n=t.title,a=t.fieldName;return(0,i.jsx)("td",{style:{width:"id"===a?100:U},className:R.tableData,children:r?r(e,{title:n,fieldName:a}):(0,i.jsx)("p",{className:R.tableDataParagraph,title:e[a],children:e[a]})},a)})),H&&(0,i.jsx)("td",{style:{width:150},className:R.tableData,children:(0,i.jsxs)(m.Z,{spacing:5,position:"right",noWrap:!0,children:[O&&(0,i.jsxs)(h.A,{onClick:M("duplicate",e.id),title:I("Duplicate"),color:"blue",children:[(0,i.jsx)(c.R.Copy,{className:"w-5"})," "]}),v&&(0,i.jsxs)(h.A,{onClick:M("edit",e.id),title:I("Edit"),color:"blue",children:[(0,i.jsx)(c.R.Pencil,{className:"w-5"})," "]}),x&&(0,i.jsxs)(h.A,{onClick:M("delete",e.id),title:I("Delete"),color:"red",children:[(0,i.jsx)(c.R.Trash,{className:"w-5"})," "]})]})})]},e.id)})),!r.length&&!l&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:_.length+(H?1:0)+(E?1:0),children:(0,i.jsx)(o.Z,{})})}),l&&S.map((function(e){return(0,i.jsx)("tr",{children:[E&&{fieldName:"ordering_drag"}].concat(N(_)).filter((function(e){return!!e})).map((function(e){var t=e.fieldName;return(0,i.jsx)("td",{className:"py-3 px-5",children:(0,i.jsx)(P,{})},t)}))},e)})),e.placeholder]}))}})]}),Z&&(0,i.jsx)("div",{className:"absolute inset-0 bg-gray-100 opacity-70"})]})}),n&&(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"xs:justify-between mt-2 flex items-center justify-between",children:[(0,i.jsx)("div",{className:"xs:text-sm text-xs text-gray-900",children:(0,i.jsxs)(d.c,{i18nKey:"Showing {{from}} to {{to}} of {{total}} entries",from:n.from,to:n.to,total:n.total,children:["Showing ",{from:n.from}," to ",{to:n.to}," of"," ",{total:n.total}," entries"]})}),(0,i.jsx)("div",{className:"inline-flex gap-2 text-gray-500",children:b})]})})]})}},33792:function(e,t,r){r.d(t,{S:function(){return i}});var n=r(8168),a=r(2784),i=function(e){var t=(0,n.bN)().models;return(0,a.useMemo)((function(){return t&&t[e]}),[e,t])}},25865:function(e,t,r){r.d(t,{y:function(){return b}});var n=r(11804),a=r(41277),i=r(85482);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.x.get(e,{params:t}).then((function(e){return e.data}))},d=function(e){var t=e.where,r=c({},u(e,["where"]));return t&&(r.where=Object.entries(t||{}).map((function(e){var t=s(e,2),r=t[0],n=t[1],a=n.manipulator,i=n.value;return"".concat(r,".").concat(a,".").concat(i)})).join(";")),r};function b(e,t,r){var n=(0,i.ZP)([a.Uq.apiGetListUrl(e||""),d(null!==t&&void 0!==t?t:{})],f,c({isPaused:function(){return!e}},r)),o=n.data,l=n.error;return c({data:o,isLoading:!l&&!o,isError:l},u(n,["data","error"]))}}}]);