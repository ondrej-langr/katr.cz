(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{59935:function(e,t,r){"use strict";r.d(t,{i:function(){return v}});var o=r(2784),i=r(41149),n=r(10107);const a={xs:1,sm:2,md:3,lg:4,xl:5};var l=(0,n.k)(((e,{size:t,variant:r,color:o})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:1,borderTop:`${e.fn.size({size:t,sizes:a})}px ${r} ${e.fn.themeColor(o,"dark"===e.colorScheme?3:4,!1)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${e.fn.size({size:t,sizes:a})}px ${r} ${e.fn.themeColor(o,"dark"===e.colorScheme?3:4,!1)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===o?e.colors.dark[1]:e.fn.themeColor(o,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:e.fn.size({size:t,sizes:a}),borderTopColor:e.fn.themeColor(o,"dark"===e.colorScheme?3:4,!1),borderTopStyle:r,margin:0},vertical:{border:0,alignSelf:"stretch",height:"100%",borderLeftWidth:e.fn.size({size:t,sizes:a}),borderLeftColor:e.fn.themeColor(o,4,!1),borderLeftStyle:r}}))),s=r(15017),c=r(23191),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&h(e,r,t[r]);if(f)for(var r of f(t))b.call(t,r)&&h(e,r,t[r]);return e};const y={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},v=(0,o.forwardRef)(((e,t)=>{const r=(0,i.Z3)("Divider",y,e),{className:n,color:a,orientation:d,size:h,label:v,labelPosition:w,labelProps:O,variant:x,styles:z,classNames:j}=r,k=((e,t)=>{var r={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&f)for(var o of f(e))t.indexOf(o)<0&&b.call(e,o)&&(r[o]=e[o]);return r})(r,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames"]),P=(0,i.rZ)(),E=a||("dark"===P.colorScheme?"dark":"gray"),{classes:N,cx:C}=l({color:E,size:h,variant:x},{classNames:j,styles:z,name:"Divider"}),S="vertical"===d,I="horizontal"===d,D=!!v&&I,T=!(null==O?void 0:O.color);return o.createElement(s.x,g({ref:t,className:C(N.root,{[N.vertical]:S,[N.horizontal]:I,[N.withLabel]:D},n)},k),D&&o.createElement(c.x,(L=g({},O),B={size:(null==O?void 0:O.size)||"xs",sx:{marginTop:2},className:C(N.label,N[w],{[N.labelDefaultStyles]:T})},u(L,p(B))),v));var L,B}));v.displayName="@mantine/core/Divider"},85393:function(e,t,r){"use strict";r.d(t,{d:function(){return F}});var o=r(2784),i=r(34749),n=r(31948),a=r(93038),l=r(51464),s=r(41149),c=r(10107),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&h(e,r,t[r]);if(f)for(var r of f(t))b.call(t,r)&&h(e,r,t[r]);return e};const y={xs:180,sm:240,md:320,lg:360,xl:500,full:"100%"};function v({position:e,size:t,theme:r}){switch(e){case"top":return{top:0,left:0,right:0,height:r.fn.size({size:t,sizes:y})};case"bottom":return{bottom:0,left:0,right:0,height:r.fn.size({size:t,sizes:y})};case"right":return{bottom:0,top:0,right:0,width:r.fn.size({size:t,sizes:y})};case"left":return{bottom:0,top:0,left:0,width:r.fn.size({size:t,sizes:y})};default:return null}}var w=(0,c.k)(((e,{position:t,size:r,zIndex:o},i)=>{return{closeButton:{},overlay:{},noOverlay:{ref:i("noOverlay")},root:{[`&:not(.${i("noOverlay")})`]:{position:"fixed",zIndex:o,top:0,left:0,right:0,bottom:0}},drawer:(n=g({},v({position:t,size:r,theme:e})),a={maxWidth:"100%",maxHeight:"100vh",position:"fixed",outline:0,zIndex:1},u(n,p(a))),title:{marginRight:e.spacing.md,textOverflow:"ellipsis",display:"block",wordBreak:"break-word"},header:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:e.spacing.md}};var n,a})),O=r(57178),x=r(93902),z=r(15017),j=r(54339),k=r(23191),P=r(59046),E=r(7443),N=Object.defineProperty,C=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const T={top:"slide-down",bottom:"slide-up",left:"slide-right",right:"slide-left"},L={top:"slide-down",bottom:"slide-up",right:"slide-right",left:"slide-left"},B={position:"left",size:"md",transitionDuration:250,transitionTimingFunction:"ease",zIndex:(0,l.w)("modal"),shadow:"md",padding:0,lockScroll:!0,closeOnClickOutside:!0,closeOnEscape:!0,trapFocus:!0,withOverlay:!0,withCloseButton:!0,withinPortal:!0,overlayBlur:0};function F(e){const t=(0,s.Z3)("Drawer",B,e),{className:r,opened:l,onClose:c,position:d,size:u,trapFocus:p,lockScroll:f,closeOnClickOutside:m,closeOnEscape:b,transition:h,transitionDuration:g,transitionTimingFunction:y,zIndex:v,overlayColor:N,overlayOpacity:F,children:_,withOverlay:$,shadow:R,padding:W,title:Z,withCloseButton:A,closeButtonLabel:H,classNames:X,styles:q,target:U,withinPortal:V,overlayBlur:K}=t,M=((e,t)=>{var r={};for(var o in e)S.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&C)for(var o of C(e))t.indexOf(o)<0&&I.call(e,o)&&(r[o]=e[o]);return r})(t,["className","opened","onClose","position","size","trapFocus","lockScroll","closeOnClickOutside","closeOnEscape","transition","transitionDuration","transitionTimingFunction","zIndex","overlayColor","overlayOpacity","children","withOverlay","shadow","padding","title","withCloseButton","closeButtonLabel","classNames","styles","target","withinPortal","overlayBlur"]),{classes:G,cx:J,theme:Q}=w({size:u,position:d,zIndex:v},{classNames:X,styles:q,name:"Drawer"}),Y=(0,i.P)(p&&l),[,ee]=(0,n.P)(),te=h||("rtl"===Q.dir?L:T)[d],re="number"===typeof F?F:"dark"===Q.colorScheme?.85:.75,oe=e=>{"Escape"===e.code&&b&&c()};return(0,o.useEffect)((()=>{if(!p)return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)}),[p]),(0,a.u)({opened:l,transitionDuration:0}),o.createElement(O.q,{withinPortal:V,zIndex:v,target:U},o.createElement(x.p,{onExited:()=>ee(!1),onEntered:()=>ee(f&&!0),mounted:l,transitions:{overlay:{duration:g/2,transition:"fade",timingFunction:"ease"},drawer:{duration:g,transition:te,timingFunction:y}}},(e=>o.createElement(z.x,((e,t)=>{for(var r in t||(t={}))S.call(t,r)&&D(e,r,t[r]);if(C)for(var r of C(t))I.call(t,r)&&D(e,r,t[r]);return e})({className:J(G.root,{[G.noOverlay]:!$},r),role:"dialog","aria-modal":!0},M),o.createElement(j.X,{className:J(G.drawer,r),ref:Y,style:e.drawer,radius:0,tabIndex:-1,onKeyDownCapture:e=>{var t;"true"!==(null==(t=e.target)?void 0:t.getAttribute("data-mantine-stop-propagation"))&&"Escape"===e.nativeEvent.code&&b&&c()},shadow:R,p:W},(Z||A)&&o.createElement("div",{className:G.header},o.createElement(k.x,{className:G.title},Z),A&&o.createElement(P.P,{iconSize:16,onClick:c,"aria-label":H,className:G.closeButton})),_),$&&o.createElement("div",{style:e.overlay},o.createElement(E.a,{blur:K,onMouseDown:()=>m&&c(),className:G.overlay,opacity:re,zIndex:0,color:N||("dark"===Q.colorScheme?Q.colors.dark[9]:Q.black)}))))))}F.displayName="@mantine/core/Drawer"},23384:function(e,t,r){"use strict";r.d(t,{D:function(){return x}});var o=r(2784),i=r(41149),n=r(10107),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(0,n.k)(((e,{element:t,align:r})=>{return{root:(o=f({},e.fn.fontStyles()),i={fontFamily:e.headings.fontFamily,fontWeight:e.headings.fontWeight,fontSize:e.headings.sizes[t].fontSize,lineHeight:e.headings.sizes[t].lineHeight,margin:0,color:"inherit",textAlign:r},l(o,s(i)))};var o,i})),b=r(15017),h=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const O={order:1},x=(0,o.forwardRef)(((e,t)=>{const r=(0,i.Z3)("Title",O,e),{className:n,order:a,children:l,align:s}=r,c=((e,t)=>{var r={};for(var o in e)y.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&g)for(var o of g(e))t.indexOf(o)<0&&v.call(e,o)&&(r[o]=e[o]);return r})(r,["className","order","children","align"]),{classes:d,cx:u}=m({element:`h${a}`,align:s},{name:"Title"});return[1,2,3,4,5,6].includes(a)?o.createElement(b.x,((e,t)=>{for(var r in t||(t={}))y.call(t,r)&&w(e,r,t[r]);if(g)for(var r of g(t))v.call(t,r)&&w(e,r,t[r]);return e})({component:`h${a}`,ref:t,className:u(d.root,n)},c),l):null}));x.displayName="@mantine/core/Title"},40070:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var o=r(2784);function i({timeout:e=2e3}={}){const[t,r]=(0,o.useState)(null),[i,n]=(0,o.useState)(!1),[a,l]=(0,o.useState)(null);return{copy:t=>{"clipboard"in navigator?navigator.clipboard.writeText(t).then((()=>{return t=!0,clearTimeout(a),l(setTimeout((()=>n(!1)),e)),void n(t);var t})).catch((e=>r(e))):r(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{n(!1),r(null),clearTimeout(a)},error:t,copied:i}}},59510:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files/entries/[fileId]",function(){return r(67538)}])},67538:function(e,t,r){"use strict";r.r(t);var o=r(52322),i=r(76902),n=r(57704),a=r(85393),l=r(23384),s=r(59935),c=r(51337),d=r(24917),u=r(40070),p=r(53610),f=r(41277),m=r(5632),b=r(52829),h=r(91942),g=function(){var e=(0,b.$)().t,t=(0,m.useRouter)(),r=t.back,n=t.query,h=(0,u.V)(),g=(0,i.c)("files",n.fileId),y=g.data,v=g.isLoading;return(0,o.jsx)(a.d,{size:"xl",opened:!0,onClose:r,padding:"xl",position:"right",closeButtonLabel:e("Close"),title:(0,o.jsx)(l.D,{order:4,children:v?e("Loading..."):(0,o.jsxs)(o.Fragment,{children:["File info of '",(0,o.jsx)("span",{className:"text-blue-500",children:y.filename}),"'"]})}),children:!v&&y&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.i,{mb:"lg",mt:"sm",size:"sm"}),(0,o.jsx)(c.u,{label:e("Link copied!"),gutter:5,placement:"center",position:"bottom",radius:"xl",transition:"slide-down",transitionDuration:200,opened:h.copied,children:(0,o.jsx)(d.z,{className:"bg-blue-100",variant:"light",rightIcon:(0,o.jsx)(p.R.ClipboardCheck,{className:"h-5 w-5"}),radius:"xl",size:"md",styles:{root:{paddingRight:15,height:40},rightIcon:{marginLeft:15}},onClick:function(){return h.copy(new URL("/api"+f.Ip.getApiRawUrl(y.id),window.location.origin))},children:e("Copy link to clipboard")})})]})})};g.getLayout=function(e){return(0,o.jsxs)(n.Iv,{children:[(0,o.jsx)(h.default,{}),e]})},t.default=g}},function(e){e.O(0,[568,360,391,589,942,774,888,179],(function(){return t=59510,e(e.s=t);var t}));var t=e.O();_N_E=t}]);