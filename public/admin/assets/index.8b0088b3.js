import{m as g,h,C as i,j as t,a9 as n,O as f,e as p,aH as x,aI as N,a4 as I,r as L,aJ as w,aK as E,aL as v,p as u,aM as y,ae as b,k as T}from"./index.bba12bdf.js";import{C as O,aN as G,aO as P}from"./index.bba12bdf.js";const A=()=>{let l=p();const e=x(),{pathname:o}=N(),{t:d}=g(),s=I(),r=L.exports.useMemo(()=>!e||!s?[]:[{title:"Profile",url:"/settings/profile",Icon:w},{title:n.USER_ROLES,url:"/settings/roles",Icon:E,canBeShown:(s==null?void 0:s.role.id)===0},{title:n.SYSTEM_SETTINGS,url:"/settings/system",Icon:v,canBeShown:!!(s!=null&&s.can({action:"read",targetModel:"settings"}))},{title:n.GENERAL_TRANSLATIONS,url:u.settings.translations(e==null?void 0:e.i18n.languages[1]).list,isInUrl(a){return a.startsWith(u.settings.translations(e==null?void 0:e.i18n.languages[1]).list.replace(e==null?void 0:e.i18n.languages[1],""))},Icon:y,canBeShown:e&&e.i18n.languages.length>=2}].filter(a=>a.canBeShown||a.canBeShown===void 0),[e,s]);return t("div",{className:"h-full px-5 pt-6",children:t("nav",{className:"mt-24 flex flex-none gap-3 lg:flex-col",children:r&&r.map(({url:a,title:S,Icon:m,isInUrl:c})=>t(b,{component:"a",size:"lg",variant:"subtle",color:o===a?"green":"blue",className:T((c===void 0?o===a:c(o))?"border-green-300 underline":"border-blue-200","border-2 bg-white"),styles:()=>({inner:{justifyContent:"space-between"}}),leftIcon:t(m,{className:"mr-auto aspect-square w-6"}),onClick:()=>l(a,{replace:!0}),children:d(S)},a))})})},B=()=>{const{t:l}=g();return h(i,{withAside:!0,leftAside:t(A,{}),children:[t(i.Header,{title:l(n.SETTINGS)}),t(i.Section,{className:"mt-5 min-h-[500px] justify-evenly lg:flex",children:t("div",{className:"w-full",children:t(f,{})})})]})};export{O as PageLayout,B as ProfileLayout,G as SiteLayout,P as useConstructedMenuItems};