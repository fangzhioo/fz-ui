import{_ as h}from"./index.b082f523.js";import{r,o as s,b as i,a0 as t,w as e,a4 as n,d as v,p as g,a9 as f,c as m,T as x,Q as p,ab as C,L as S,R as c,ar as B,as as N,at as D}from"./vendor.7a7b35a6.js";const L={},K=n("Tag 1"),P=n("Tag 2"),R=n("Tag 3"),j=n("Tag 4"),E=n("Tag 5");function F(d,o){const a=r("fz-tag");return s(),i("div",null,[t(a,{class:"ml-2"},{default:e(()=>[K]),_:1}),t(a,{class:"ml-2",type:"success"},{default:e(()=>[P]),_:1}),t(a,{class:"ml-2",type:"info"},{default:e(()=>[R]),_:1}),t(a,{class:"ml-2",type:"warning"},{default:e(()=>[j]),_:1}),t(a,{class:"ml-2",type:"error"},{default:e(()=>[E]),_:1})])}var O=h(L,[["render",F],["__scopeId","data-v-224500f3"]]);const Q=v({setup(d){const o=g([{name:"Tag 1",type:"primary"},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"error"}]);return(a,_)=>{const u=r("fz-tag");return s(!0),i(p,null,f(o.value,l=>(s(),m(u,{key:l.name,class:"ml-2",closable:"",type:l.type},{default:e(()=>[n(x(l.name),1)]),_:2},1032,["type"]))),128)}}});var U=h(Q,[["__scopeId","data-v-01a078ad"]]);const q=n(" + New Tag "),A=v({setup(d){const o=g(""),a=g(["Tag 1","Tag 2","Tag 3"]),_=g(!1),u=g(),l=T=>{a.value.splice(a.value.indexOf(T),1)},k=()=>{_.value=!0,S(()=>{u.value.input.focus()})},b=()=>{o.value&&a.value.push(o.value),_.value=!1,o.value=""};return(T,$)=>{const w=r("fz-tag"),I=r("fz-input"),V=r("fz-button");return s(),i(p,null,[(s(!0),i(p,null,f(a.value,y=>(s(),m(w,{key:y,class:"ml-2",closable:"","disable-transitions":!1,onClose:ht=>l(y)},{default:e(()=>[n(x(y),1)]),_:2},1032,["onClose"]))),128)),_.value?(s(),m(I,{key:0,ref_key:"InputRef",ref:u,modelValue:o.value,"onUpdate:modelValue":$[0]||($[0]=y=>o.value=y),class:"ml-2 w-20",size:"mini",onKeyup:C(b,["enter"]),onBlur:b},null,8,["modelValue","onKeyup"])):(s(),m(V,{key:1,class:"button-new-tag ml-2",size:"mini",onClick:k},{default:e(()=>[q]),_:1}))],64)}}});var G=h(A,[["__scopeId","data-v-7d58f4a8"]]);const H={},J=n("Large"),M=n("Default"),W=n("Small"),X=n("Large"),Y=n("Default"),Z=n("Small");function tt(d,o){const a=r("fz-tag"),_=r("fz-row");return s(),i(p,null,[t(_,null,{default:e(()=>[t(a,{class:"ml-2",size:"large"},{default:e(()=>[J]),_:1}),t(a,{class:"ml-2"},{default:e(()=>[M]),_:1}),t(a,{class:"ml-2",size:"small"},{default:e(()=>[W]),_:1})]),_:1}),t(_,{class:"mt-4"},{default:e(()=>[t(a,{class:"ml-2",size:"large",closable:""},{default:e(()=>[X]),_:1}),t(a,{class:"ml-2",closable:""},{default:e(()=>[Y]),_:1}),t(a,{class:"ml-2",size:"small",closable:""},{default:e(()=>[Z]),_:1})]),_:1})],64)}var et=h(H,[["render",tt],["__scopeId","data-v-bbf3305e"]]);const z=d=>(B("data-v-de41682c"),d=d(),N(),d),at={class:"tag-group my-2"},lt=z(()=>c("span",{class:"tag-group__title m-1"},"Dark",-1)),nt={class:"tag-group my-2"},st=z(()=>c("span",{class:"tag-group__title m-1"},"Plain",-1)),ot=v({setup(d){const o=g([{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"error",label:"Tag 4"},{type:"warning",label:"Tag 5"}]);return(a,_)=>{const u=r("fz-tag");return s(),i(p,null,[c("div",at,[lt,(s(!0),i(p,null,f(o.value,l=>(s(),m(u,{key:l.label,class:"ml-2",type:l.type,effect:"dark"},{default:e(()=>[n(x(l.label),1)]),_:2},1032,["type"]))),128))]),c("div",nt,[st,(s(!0),i(p,null,f(o.value,l=>(s(),m(u,{key:l.label,class:"ml-2",type:l.type,effect:"plain"},{default:e(()=>[n(x(l.label),1)]),_:2},1032,["type"]))),128))])],64)}}});var ct=h(ot,[["__scopeId","data-v-de41682c"]]);const dt={class:"markdown-body"},_t=c("h1",null,"\u6807\u7B7E",-1),rt=c("p",null,"\u7528\u4E8E\u6807\u8BB0\u548C\u9009\u62E9",-1),it=c("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),ut=c("h2",null,"\u53EF\u79FB\u9664\u6807\u7B7E",-1),pt=c("h2",null,"\u52A8\u6001\u7F16\u8F91\u6807\u7B7E",-1),gt=c("h2",null,"\u4E0D\u540C\u5C3A\u5BF8",-1),mt=c("h2",null,"\u4E3B\u9898",-1),yt=D('<h2>\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>arg1</code></td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>arg2</code></td><td style="text-align:center;">\u7B2C\u4E8C\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table><h2>\u4E8B\u4EF6</h2><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>update</code></td><td style="text-align:center;">\u624B\u52A8\u66F4\u65B0</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table><h2>\u63D2\u69FD</h2><table><thead><tr><th style="text-align:center;">\u63D2\u69FD\u540D</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table>',8),vt={setup(d,{expose:o}){return o({frontmatter:{}}),(_,u)=>{const l=r("Preview");return s(),i("div",dt,[_t,rt,it,t(l,{"comp-name":"Tag","demo-name":"demo"},{default:e(()=>[t(O)]),_:1}),ut,t(l,{"comp-name":"Tag","demo-name":"demo2"},{default:e(()=>[t(U)]),_:1}),pt,t(l,{"comp-name":"Tag","demo-name":"demo3"},{default:e(()=>[t(G)]),_:1}),gt,t(l,{"comp-name":"Tag","demo-name":"demo4"},{default:e(()=>[t(et)]),_:1}),mt,t(l,{"comp-name":"Tag","demo-name":"demo5"},{default:e(()=>[t(ct)]),_:1}),yt])}}};export{vt as default};