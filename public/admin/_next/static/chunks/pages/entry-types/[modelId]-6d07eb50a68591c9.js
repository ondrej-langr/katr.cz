(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{78333:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/entry-types/[modelId]",function(){return n(82058)}])},62626:function(e,t,n){"use strict";n.r(t);var r=n(52322);t.default=function(e){var t=e.text,n=void 0===t?"Missing":t;return(0,r.jsx)("div",{className:"flex min-h-screen",children:(0,r.jsxs)("div",{className:"text-center m-auto",children:[(0,r.jsx)("h1",{className:"font-semibold text-6xl",children:"404"}),(0,r.jsx)("hr",{className:"border-t-8 w-1/4 mx-auto my-4 border-blue-100"}),(0,r.jsx)("p",{className:"text-gray-500 text-xl",children:n})]})})}},82058:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(94776),o=n.n(r),i=n(52322),a=n(53610),u=n(57704),l=n(2784),c=n(98666),s=n(25865),d=n(93118),f=n(5019),p=n(5632),m=n(41277),v=n(52170),h=n(62626),x=n(52829),y=n(24917),b=n(11794),g=Object.defineProperty,w=Object.defineProperties,j=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function P(e=[]){const[t,n]=(0,l.useState)(e);return[t,{setState:n,append:(...e)=>n((t=>[...t,...e])),prepend:(...e)=>n((t=>[...e,...t])),insert:(e,...t)=>n((n=>[...n.slice(0,e),...t,...n.slice(e)])),pop:()=>n((e=>{const t=[...e];return t.pop(),t})),shift:()=>n((e=>{const t=[...e];return t.shift(),t})),apply:e=>n((t=>t.map(((t,n)=>e(t,n))))),applyWhere:(e,t)=>n((n=>n.map(((n,r)=>e(n,r)?t(n,r):n)))),remove:(...e)=>n((t=>t.filter(((t,n)=>!e.includes(n))))),reorder:({from:e,to:t})=>n((n=>{const r=[...n],o=n[e];return r.splice(e,1),r.splice(t,0,o),r})),setItem:(e,t)=>n((n=>{const r=[...n];return r[e]=t,r})),setItemProp:(e,t,r)=>n((n=>{const o=[...n];var i;return o[e]=(i=((e,t)=>{for(var n in t||(t={}))E.call(t,n)&&_(e,n,t[n]);if(O)for(var n of O(t))N.call(t,n)&&_(e,n,t[n]);return e})({},o[e]),w(i,j({[t]:r}))),o}))}]}var S=n(54557);function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t,n,r,o,i,a){try{var u=e[i](a),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(r,o)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){I(i,r,o,a,u,"next",e)}function u(e){I(i,r,o,a,u,"throw",e)}a(void 0)}))}}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var t=(0,p.useRouter)().push,n=(0,l.useState)(1),r=n[0],g=n[1],w=(0,d.Z)(),j=(0,S.x)(),O=(0,l.useState)(!1),E=O[0],N=O[1],_=(0,p.useRouter)().query.modelId,k=(0,s.y)(null===w||void 0===w?void 0:w.name,{page:r}),I=k.data,M=k.isLoading,C=k.isError,D=k.mutate,q=(0,x.$)().t,R=U(P(null===I||void 0===I?void 0:I.data),2),X=R[0],L=R[1];(0,l.useEffect)((function(){(null===I||void 0===I?void 0:I.data)&&L.setState(null===I||void 0===I?void 0:I.data)}),[I]);var z=(0,l.useMemo)((function(){if(!I)return!1;I.data;return T(I,["data"])}),[I]),Q=function(){var e=A(o().mark((function e(t){var n,r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.source,void 0!==(null===(r=t.destination)||void 0===r?void 0:r.index)){e.next=3;break}return e.abrupt("return");case 3:return N(!0),i=X[n.index].id,a=X[r.index].id,L.reorder({from:n.index,to:r.index}),e.next=9,m.Uq.reorder(w.name,{fromId:i,toId:a});case 9:N(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=(0,l.useMemo)((function(){if(w)return(0,f.QK)(w)}),[w]),G=w&&(null===j||void 0===j?void 0:j.can({action:"delete",targetModel:null===w||void 0===w?void 0:w.name}))?function(){var e=A(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm(q(v.X3.ON_DELETE_REQUEST_PROMPT))){e.next=4;break}return e.next=3,m.Uq.delete({id:t,model:null===w||void 0===w?void 0:w.name});case 3:D();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():void 0,H=w&&(null===j||void 0===j?void 0:j.can({action:"create",targetModel:null===w||void 0===w?void 0:w.name}))?function(){var e=A(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:confirm(q(v.X3.ENTRY_ITEM_DUPLICATE))&&t(m.Uq.getDuplicateUrl(n,null===w||void 0===w?void 0:w.name));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}():void 0;return(0,l.useEffect)((function(){return g(1)}),[_]),w&&$&&!(0,f.Gi)(w.name)?(0,i.jsxs)(u.Xg,{children:[(0,i.jsxs)("div",{className:"flex w-full flex-col justify-between gap-5 py-10 md:flex-row",children:[(0,i.jsx)("h1",{className:"text-3xl font-semibold capitalize",children:q(w.name)}),(0,i.jsx)("div",{className:"flex items-center gap-5",children:(null===j||void 0===j?void 0:j.can({action:"create",targetModel:w.name}))&&(0,i.jsxs)(y.z,{color:"green",className:" items-center font-semibold uppercase",size:"md",onClick:function(){return t(m.Uq.getCreateUrl(null===w||void 0===w?void 0:w.name))},children:[(0,i.jsx)("span",{className:"hidden md:block",children:q("Add new entry")}),(0,i.jsx)(a.R.Plus,{className:"inline-block h-5 w-5 md:ml-3"})," "]})})]}),(0,i.jsx)(c.H,{isLoading:M||C,items:X,columns:$,metadata:z||void 0,onEditAction:function(e){return t(m.Uq.getUrl(e,null===w||void 0===w?void 0:w.name))},onDeleteAction:G,onDuplicateAction:H,ordering:w.hasOrdering,onDragEnd:Q,disabled:E,pagination:(0,i.jsx)(b.t,{total:(null===I||void 0===I?void 0:I.last_page)||1,page:r,onChange:g})})]}):(0,i.jsx)(h.default,{text:q("This model with this id does not exist.")})}}},function(e){e.O(0,[139,706,305,589,666,774,888,179],(function(){return t=78333,e(e.s=t);var t}));var t=e.O();_N_E=t}]);