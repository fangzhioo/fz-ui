import{p as u,u as z,h as T,d as k,r as s,c as b,w as a,o as w,a0 as o,R as d,T as y,ar as S,as as C,a4 as i}from"./vendor.7a7b35a6.js";import{_ as B}from"./index.b082f523.js";const I=e=>{var c;const t=u((c=z(e))!=null?c:"light");if(T){const r=window.matchMedia("(prefers-color-scheme: dark)");t.value=r.matches?"dark":"light"}return{theme:t,setTheme:r=>{t.value=r}}},E=()=>{const e=u("medium");return{size:e,setSize:n=>{e.value=n}}};const $=k({name:"baseLayout",setup(){const e=document.documentElement.getAttribute("data-mode"),{theme:t,setTheme:n}=I(e),{size:c}=E();return{theme:t,size:c,handleToggleTheme:()=>{n(t.value==="dark"?"light":"dark")}}}}),D=e=>(S("data-v-66026d9c"),e=e(),C(),e),F=D(()=>d("div",{class:"logo"},"FzUI",-1)),L={class:"nav"},N=i("\u6307\u5357"),V=i("\u7EC4\u4EF6"),j=i("\u65E5\u5FD7");function x(e,t,n,c,r,A){const _=s("router-link"),l=s("fz-header"),m=s("router-view"),h=s("fz-main"),p=s("fz-container"),f=s("fz-backtop"),g=s("fz-config-provider");return w(),b(g,{theme:e.theme,size:e.size},{default:a(()=>[o(p,{class:"base-layout"},{default:a(()=>[o(l,{class:"base-header"},{default:a(()=>[F,d("nav",L,[o(_,{to:"/guide"},{default:a(()=>[N]),_:1}),o(_,{to:"/components"},{default:a(()=>[V]),_:1}),o(_,{to:"/changelog"},{default:a(()=>[j]),_:1})]),d("div",null,[d("span",{class:"theme-btn",onClick:t[0]||(t[0]=(...v)=>e.handleToggleTheme&&e.handleToggleTheme(...v))},y(e.theme),1)])]),_:1}),o(h,null,{default:a(()=>[o(m)]),_:1})]),_:1}),o(f)]),_:1},8,["theme","size"])}var U=B($,[["render",x],["__scopeId","data-v-66026d9c"]]);export{U as default};
