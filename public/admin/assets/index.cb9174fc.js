import{aH as L,aI as W,r as c,aJ as B,j as o,y as A,h as u,aK as E,aL as V,aM as q,l as G,aN as J,az as Q,a6 as Z,aO as X,b as Y,ad as j,aP as rr,o as er,T as ar,F as tr,as as or,aQ as sr,W as nr,m as lr,L as ir,O as cr}from"./index.edffba3d.js";var dr=L({root:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}});const pr=dr;var fr=Object.defineProperty,ur=Object.defineProperties,yr=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,N=(r,e,a)=>e in r?fr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,m=(r,e)=>{for(var a in e||(e={}))H.call(e,a)&&N(r,a,e[a]);if(w)for(var a of w(e))K.call(e,a)&&N(r,a,e[a]);return r},gr=(r,e)=>ur(r,yr(e)),vr=(r,e)=>{var a={};for(var t in r)H.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&w)for(var t of w(r))e.indexOf(t)<0&&K.call(r,t)&&(a[t]=r[t]);return a};const _r={overlayOpacity:.75,transitionDuration:0,zIndex:W("overlay")},M=c.exports.forwardRef((r,e)=>{const a=B("LoadingOverlay",_r,r),{className:t,visible:d,loaderProps:y,overlayOpacity:f,overlayColor:v,transitionDuration:_,exitTransitionDuration:O,zIndex:p,style:n,loader:l,radius:x,overlayBlur:i,unstyled:S}=a,$=vr(a,["className","visible","loaderProps","overlayOpacity","overlayColor","transitionDuration","exitTransitionDuration","zIndex","style","loader","radius","overlayBlur","unstyled"]),{classes:b,cx:I,theme:g}=pr(null,{name:"LoadingOverlay",unstyled:S}),h=`calc(${p} + 1)`;return o(A,{duration:_,exitDuration:O,mounted:d,transition:"fade",children:s=>u(E,{...m({className:I(b.root,t),style:gr(m(m({},s),n),{zIndex:p}),ref:e},$),children:[l?o("div",{style:{zIndex:h},children:l}):o(V,{...m({style:{zIndex:h}},y)}),o(q,{opacity:f,zIndex:p,radius:x,blur:i,unstyled:S,color:v||(g.colorScheme==="dark"?g.colors.dark[5]:g.white)})]})})});M.displayName="@mantine/core/LoadingOverlay";var Or=Object.defineProperty,xr=Object.defineProperties,Sr=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,br=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable,D=(r,e,a)=>e in r?Or(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,Pr=(r,e)=>{for(var a in e||(e={}))br.call(e,a)&&D(r,a,e[a]);if(k)for(var a of k(e))hr.call(e,a)&&D(r,a,e[a]);return r},mr=(r,e)=>xr(r,Sr(e)),wr=L((r,{captionSide:e,horizontalSpacing:a,verticalSpacing:t,fontSize:d})=>({root:mr(Pr({},r.fn.fontStyles()),{width:"100%",borderCollapse:"collapse",captionSide:e,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,lineHeight:r.lineHeight,"& caption":{marginTop:e==="top"?0:r.spacing.xs,marginBottom:e==="bottom"?0:r.spacing.xs,fontSize:r.fontSizes.sm,color:r.colorScheme==="dark"?r.colors.dark[2]:r.colors.gray[6]},"& thead tr th, & tfoot tr th":{textAlign:"left",fontWeight:"bold",color:r.colorScheme==="dark"?r.colors.dark[0]:r.colors.gray[7],fontSize:r.fn.size({size:d,sizes:r.fontSizes}),padding:`${r.fn.size({size:t,sizes:r.spacing})}px ${r.fn.size({size:a,sizes:r.spacing})}px`},"& thead tr th":{borderBottom:`1px solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`},"& tfoot tr th":{borderTop:`1px solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`},"& tbody tr td":{padding:`${r.fn.size({size:t,sizes:r.spacing})}px ${r.fn.size({size:a,sizes:r.spacing})}px`,borderBottom:`1px solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`,fontSize:r.fn.size({size:d,sizes:r.fontSizes})},"& tbody tr:last-of-type td":{borderBottom:"none"},"&[data-striped] tbody tr:nth-of-type(odd)":{backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[0]},"&[data-hover] tbody tr":r.fn.hover({backgroundColor:r.colorScheme==="dark"?r.colors.dark[5]:r.colors.gray[1]})})}));const zr=wr;var $r=Object.defineProperty,Ir=Object.defineProperties,Tr=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,C=(r,e,a)=>e in r?$r(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,jr=(r,e)=>{for(var a in e||(e={}))R.call(e,a)&&C(r,a,e[a]);if(z)for(var a of z(e))U.call(e,a)&&C(r,a,e[a]);return r},Nr=(r,e)=>Ir(r,Tr(e)),kr=(r,e)=>{var a={};for(var t in r)R.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&z)for(var t of z(r))e.indexOf(t)<0&&U.call(r,t)&&(a[t]=r[t]);return a};const Dr={striped:!1,highlightOnHover:!1,captionSide:"top",horizontalSpacing:"xs",fontSize:"sm",verticalSpacing:7},F=c.exports.forwardRef((r,e)=>{const a=B("Table",Dr,r),{className:t,children:d,striped:y,highlightOnHover:f,captionSide:v,horizontalSpacing:_,verticalSpacing:O,fontSize:p,unstyled:n}=a,l=kr(a,["className","children","striped","highlightOnHover","captionSide","horizontalSpacing","verticalSpacing","fontSize","unstyled"]),{classes:x,cx:i}=zr({captionSide:v,verticalSpacing:O,horizontalSpacing:_,fontSize:p},{unstyled:n,name:"Table"});return o(E,{...Nr(jr({},l),{component:"table",ref:e,className:i(x.root,t),"data-striped":y||void 0,"data-hover":f||void 0}),children:d})});F.displayName="@mantine/core/Table";const Lr=()=>{const{t:r}=G(),e=J(),a=Q(),[t,d]=c.exports.useState(e==null?void 0:e.i18n.default),y=Z(),[f,{open:v,close:_}]=X(!1),[O,p]=c.exports.useState(!1),{data:n,mutate:l,isLoading:x}=Y("generalTranslations",{lang:t||"en"},{revalidateIfStale:!f,revalidateOnFocus:!f,revalidateOnMount:!f}),[i,S]=c.exports.useState(n==null?void 0:n.data),$=c.exports.useCallback(async(s,P)=>{S({...i||{},...P.length>0?{[s]:P}:{}})},[i]),b=async s=>{(n==null?void 0:n.data[s])!=i[s]&&(p(!0),await y({title:"Saving",message:r("Saving translation, please wait..."),successMessage:r("Key translated!")},async()=>{await j.update({id:s,model:"generalTranslations",language:t},{value:i[s]}),await l(),p(!1),_()}))};c.exports.useEffect(()=>{S(n==null?void 0:n.data)},[n]),c.exports.useEffect(()=>{l()},[a]);const I=c.exports.useCallback(s=>async()=>{if(!!confirm(r("Do you really want to delete this key?")))try{y({title:"Deleting",message:r("Deleting selected key, please wait..."),successMessage:r("Key deleted!")},async()=>{await j.delete({id:s,model:"generalTranslations"}),await l()})}catch{}},[r,l]),g=u("tr",{children:[o("th",{children:r("Translation key")}),o("th",{children:r("Translation value")}),o("th",{className:"w-[100px] opacity-0",children:"Tools"})]}),h=Object.entries(i||{}).map(([s,P])=>u("tr",{children:[o("td",{children:s}),o("td",{children:o(rr,{onFocus:v,onBlur:()=>b(s),onChange:T=>$(s,T.currentTarget.value),onKeyDown:T=>{T.key==="Enter"&&b(s)},value:P})}),o("td",{className:"flex w-[100px]",children:o(er,{onClick:I(s),color:"red",children:o(ar,{})})})]},s));return u(tr,{children:[u(or,{position:"apart",mb:"md",mt:"md",children:[o(sr,{label:"",value:t,onChange:s=>s&&d(s)}),o(nr,{to:"/settings/translations/keys/create",color:"green",leftIcon:o(lr,{}),component:ir,children:r("Add new")})]}),u("div",{className:"relative min-h-[400px]",children:[o(M,{visible:x||O,overlayBlur:2}),u(F,{className:"-mx-5",horizontalSpacing:"xl",verticalSpacing:"sm",children:[o("thead",{children:g}),o("tbody",{children:h}),o("tfoot",{children:g})]})]}),o(cr,{})]})};export{Lr as GeneralTranslationsSettings,Lr as default};