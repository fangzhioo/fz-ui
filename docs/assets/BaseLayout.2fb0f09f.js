import{p as _,u as z,h as T,z as k,d as b,r as a,c as w,w as s,o as y,a3 as o,W as r,Y as S,aA as B,aB as C,a7 as u}from"./vendor.a9a893b2.js";import{_ as E}from"./index.6ad82476.js";const I=e=>{var c;const t=_((c=z(e))!=null?c:"light");if(T){const d=window.matchMedia("(prefers-color-scheme: dark)");t.value=d.matches?"dark":"light"}return k(t,()=>{t.value&&document.documentElement.setAttribute("data-mode",t.value)}),{theme:t,setTheme:d=>{t.value=d}}},$=()=>{const e=_("medium");return{size:e,setSize:n=>{e.value=n}}};const A=b({name:"baseLayout",setup(){const e=document.documentElement.getAttribute("data-mode"),{theme:t,setTheme:n}=I(e),{size:c}=$();return{theme:t,size:c,handleToggleTheme:()=>{n(t.value==="dark"?"light":"dark")}}}}),D=e=>(B("data-v-66026d9c"),e=e(),C(),e),F=D(()=>r("div",{class:"logo"},"FzUI",-1)),L={class:"nav"},N=u("\u6307\u5357"),V=u("\u7EC4\u4EF6"),j=u("\u65E5\u5FD7");function x(e,t,n,c,d,M){const i=a("router-link"),l=a("fz-header"),m=a("router-view"),h=a("fz-main"),p=a("fz-container"),f=a("fz-backtop"),v=a("fz-config-provider");return y(),w(v,{theme:e.theme,size:e.size},{default:s(()=>[o(p,{class:"base-layout"},{default:s(()=>[o(l,{class:"base-header"},{default:s(()=>[F,r("nav",L,[o(i,{to:"/guide"},{default:s(()=>[N]),_:1}),o(i,{to:"/components"},{default:s(()=>[V]),_:1}),o(i,{to:"/changelog"},{default:s(()=>[j]),_:1})]),r("div",null,[r("span",{class:"theme-btn",onClick:t[0]||(t[0]=(...g)=>e.handleToggleTheme&&e.handleToggleTheme(...g))},S(e.theme),1)])]),_:1}),o(h,null,{default:s(()=>[o(m)]),_:1})]),_:1}),o(f)]),_:1},8,["theme","size"])}var Y=E(A,[["render",x],["__scopeId","data-v-66026d9c"]]);export{Y as default};