(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{99962:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/user-roles",function(){return r(1231)}])},1231:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return ee}});var t=r(52322),s=r(94776),o=r.n(s),i=r(96454),a=r(8168),l=r(25865),c=r(97470),u=r(10107),d=r(70790),f=r(59935),m=r(24917),p=r(74559),h=r(85409),x=r(11794),b=r(41277),v=r(6277),j=r(2784),g=r(52829),y=r(78181),w=r(87507),k=r(21818),C=r(63955),N=r(85393),O=r(23384),S=r(58532),_=r(34272),P=r(40530),A=r(57897),E=r(45521),D=r(9687),I=r(93256),U=r(86184),z=r(35772),T=[{label:"Create",isSimple:!0,key:(0,U.k)()},{label:"Read",key:(0,U.k)()},{label:"Update",key:(0,U.k)()},{label:"Delete",key:(0,U.k)()}],Z=function(e){var n=e.modelInfo,r=e.modelName,s=(0,g.$)().t,o=T.map((function(e){var n,o=e.label,i=e.key,a=e.isSimple;return(0,t.jsx)(C.Qr,{name:"permissions.models.".concat(r,".").concat(null===(n=o.at(0))||void 0===n?void 0:n.toLowerCase()),render:function(e){var n=e.field,i=n.value,l=n.onChange;return(0,t.jsxs)("div",{className:"mt-5",children:[(0,t.jsx)(A.X,{mt:"xs",className:"cursor-pointer",label:o,checked:!!i,onChange:function(){return l(!i&&"allow-everything")}}),!a&&"settings"!==r&&(0,t.jsx)(E.U,{in:!!i,children:(0,t.jsxs)(D.E,{required:!0,spacing:"xs",value:i,ml:33,orientation:"vertical",size:"sm",onChange:l,children:[(0,t.jsx)(I.Y,{disabled:!i,value:"allow-everything",label:s("Allow on everything")}),(0,t.jsx)(I.Y,{disabled:!i,value:"allow-own",label:s("Allow on only own and shared")})]})})]})}},i)})),i=z[n.icon];return(0,t.jsxs)("div",{children:[(0,t.jsxs)(O.D,{mb:"sm",order:5,className:"text-blue-500",children:[(0,t.jsx)(i,{size:17,className:"mr-2 -mb-0.5"}),s(r)]}),o]})},M=r(76902),$=r(52170);function F(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function R(e,n,r,t,s,o,i){try{var a=e[o](i),l=a.value}catch(c){return void r(c)}a.done?n(l):Promise.resolve(l).then(t,s)}function X(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var o=e.apply(n,r);function i(e){R(o,t,s,i,a,"next",e)}function a(e){R(o,t,s,i,a,"throw",e)}i(void 0)}))}}function Y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function W(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){Y(e,n,r[n])}))}return e}function q(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function G(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,s,o=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(l){a=!0,s=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw s}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return F(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return F(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=function(e){var n=e.opened,r=e.onClose,s=e.optionToEdit,i=(0,C.cI)(),l=(0,g.$)().t,u=(0,M.c)("userroles",s).data,d=(0,c.$)(),f=(0,a.bN)().models,p=i.handleSubmit,h=i.formState,x=i.register,v=i.reset;(0,j.useEffect)((function(){s?u&&v(u):v({})}),[u,v,s,n]);var y=function(){var e=X(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d({title:l(s?"Updating user role":"Creating user role"),message:l("Please wait..."),successMessage:l(s?"User role successfully updated":"User role has been created")},X(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=6;break}return n.id,t=q(n,["id"]),e.next=4,b._c.update(s,t);case 4:e.next=8;break;case 6:return e.next=8,b._c.create(n);case 8:r();case 9:case"end":return e.stop()}}),e)}))))}catch(t){}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=(0,j.useMemo)((function(){if(f)return Object.entries(f).filter((function(e){var n=G(e,1)[0];return!$.Yz.filter((function(e){return"settings"===e})).includes(n)}))}),[f]);return(0,t.jsx)(C.RV,W({},i,{children:(0,t.jsx)(N.d,{opened:n,onClose:r,position:"right",padding:32,size:500,className:" overflow-auto",title:(0,t.jsx)(O.D,{order:4,children:s?"Update user role":"Create user role"}),children:(0,t.jsxs)("form",{className:"h-full",onSubmit:p(y),children:[(0,t.jsxs)(S.M,{cols:1,spacing:"md",children:[(0,t.jsx)(_.o,W({label:"Name"},x("label"))),(0,t.jsx)(P.g,W({autosize:!0,label:l("Description"),minRows:4},x("description"))),(0,t.jsx)(O.D,{mt:"lg",order:4,children:"Permissions by models"}),(0,t.jsx)(S.M,{cols:1,className:"gap-10",children:w&&w.map((function(e){var n=G(e,2),r=n[0],s=n[1];return(0,t.jsx)(j.Fragment,{children:(0,t.jsx)(Z,{modelInfo:s,modelName:r})},r)}))})]}),(0,t.jsx)("div",{className:"sticky right-0 -bottom-8 rounded-lg bg-white pt-5 pb-4",children:(0,t.jsx)(m.z,{className:"mr-auto block",type:"submit",loading:h.isSubmitting,loaderPosition:"right",children:l(s?"Save":"Create")})})]})})}))};function Q(e,n,r,t,s,o,i){try{var a=e[o](i),l=a.value}catch(c){return void r(c)}a.done?n(l):Promise.resolve(l).then(t,s)}function V(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var o=e.apply(n,r);function i(e){Q(o,t,s,i,a,"next",e)}function a(e){Q(o,t,s,i,a,"throw",e)}i(void 0)}))}}var B=(0,u.k)((function(){return{root:{td:{verticalAlign:"baseline"}}}})),H=(0,t.jsx)(d.r.Col,{span:12,children:(0,t.jsx)(f.i,{})}),J=function(){var e=B().classes,n=(0,g.$)().t,r=(0,a.bN)().currentUserIsAdmin,s=(0,j.useState)(1),u=s[0],C=s[1],N=(0,l.y)("userroles",{page:u}),O=N.data,S=N.mutate,_=(0,j.useState)(),P=_[0],A=_[1],E=(0,j.useState)(!1),D=E[0],I=E[1],U=(0,c.$)(),z=r,T=r,Z=(0,j.useCallback)((function(e){return function(){A(e)}}),[]),M=(0,j.useCallback)((function(e){return V(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:try{U({title:"Deleting",message:n("Deleting selected user role, please wait..."),successMessage:n("User role deleted!")},V(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b._c.delete(e);case 2:return n.next=4,S();case 4:case"end":return n.stop()}}),n)}))))}catch(t){}case 1:case"end":return r.stop()}}),r)})))}),[n,U,S]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:r&&(0,t.jsx)(m.z,{color:"green",mt:"lg",leftIcon:(0,t.jsx)(y.Z,{}),onClick:function(){return I(!0)},children:n("Add new")})}),(0,t.jsxs)(d.r,{sx:{minWidth:800},className:(0,v.Z)(e.root,"mt-5 min-h-[400px]"),columns:12,children:[(0,t.jsx)(d.r.Col,{span:2,className:"font-semibold uppercase",children:n("Title")}),(0,t.jsx)(d.r.Col,{span:8,className:"font-semibold uppercase",children:n("Description")}),(0,t.jsx)(d.r.Col,{span:2,children:(0,t.jsx)("span",{className:"hidden",children:n("Tools")})}),(0,t.jsx)(d.r.Col,{span:12,children:(0,t.jsx)(f.i,{size:"sm"})}),(null===O||void 0===O?void 0:O.data)?O.data.map((function(e,n){return(0,t.jsxs)(j.Fragment,{children:[0!==n&&H,(0,t.jsx)(d.r.Col,{span:2,children:e.label}),(0,t.jsx)(d.r.Col,{span:8,children:e.description}),(0,t.jsx)(d.r.Col,{span:2,children:0!==e.id&&(0,t.jsxs)(p.Z,{className:"ml-auto",position:"right",spacing:"xs",noWrap:!0,children:[z&&(0,t.jsx)(h.A,{onClick:Z(e.id),color:"blue",children:(0,t.jsx)(w.Z,{})}),T&&(0,t.jsx)(h.A,{onClick:M(e.id),color:"red",children:(0,t.jsx)(k.Z,{})})]})})]},e.id)})):(0,t.jsx)(d.r.Col,{span:12,children:(0,t.jsx)(i.Z,{})})]}),O&&(0,t.jsx)(p.Z,{position:"center",my:"xl",children:(0,t.jsx)(x.t,{className:"my-auto",page:u,onChange:C,total:O.last_page})}),(0,t.jsx)(L,{opened:D||!!P,optionToEdit:P,onClose:function(){S(),A(void 0),I(!1)}})]})},K=r(57704),ee=function(){return(0,t.jsx)(K.Gv,{children:(0,t.jsx)(J,{})})}}},function(e){e.O(0,[568,706,743,430,177,589,774,888,179],(function(){return n=99962,e(e.s=n);var n}));var n=e.O();_N_E=n}]);