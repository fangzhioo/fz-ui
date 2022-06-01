import{v as h,r as u,o as r,b as i,a9 as t,w as a,_ as c,Z as x,ah as b,ad as m,a0 as g,bl as y}from"./vendor.048e7bbb.js";import{_ as v}from"./index.9b9152d6.js";const f={setup(p){const d=h(!0),s=h(!1);return(_,l)=>{const n=u("fz-checkbox");return r(),i("div",null,[t(n,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=o=>d.value=o),label:"Option 1",size:"large"},null,8,["modelValue"]),t(n,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=o=>s.value=o),label:"Option 2"},null,8,["modelValue"])])}}},E={setup(p){const d=h(["selected and disabled","Option A"]);return(s,_)=>{const l=u("fz-checkbox"),n=u("fz-checkbox-group");return r(),i("div",null,[t(n,{modelValue:d.value,"onUpdate:modelValue":_[0]||(_[0]=o=>d.value=o)},{default:a(()=>[t(l,{label:"Option A"}),t(l,{label:"Option B"}),t(l,{label:"Option C"}),t(l,{label:"disabled",disabled:""}),t(l,{label:"selected and disabled",disabled:""})]),_:1},8,["modelValue"])])}}};const k={class:"demo-container"},V={class:"demo-container"},B={class:"demo-container"},z={class:"demo-container"},A={setup(p){const d=h(["Shanghai"]),s=["Shanghai","Beijing","Guangzhou","Shenzhen"];return(_,l)=>{const n=u("fz-checkbox-button"),o=u("fz-checkbox-group");return r(),i("div",null,[c("div",k,[t(o,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),size:"large"},{default:a(()=>[(r(),i(x,null,b(s,e=>t(n,{key:e,label:e},{default:a(()=>[m(g(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),c("div",V,[t(o,{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value=e),size:"medium"},{default:a(()=>[(r(),i(x,null,b(s,e=>t(n,{key:e,label:e},{default:a(()=>[m(g(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),c("div",B,[t(o,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=e=>d.value=e),size:"small"},{default:a(()=>[(r(),i(x,null,b(s,e=>t(n,{key:e,label:e},{default:a(()=>[m(g(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),c("div",z,[t(o,{modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=e=>d.value=e),size:"mini"},{default:a(()=>[(r(),i(x,null,b(s,e=>t(n,{key:e,label:e},{default:a(()=>[m(g(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])])])}}};var C=v(A,[["__scopeId","data-v-41509cfa"]]);const $={class:"markdown-body"},U=c("h1",{id:"%E5%A4%9A%E9%80%89%E6%A1%86",tabindex:"-1"},"\u591A\u9009\u6846",-1),O=c("p",null,"\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009",-1),w=c("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),S=c("h2",{id:"%E5%A4%9A%E9%80%89%E6%A1%86%E7%BB%84",tabindex:"-1"},"\u591A\u9009\u6846\u7EC4",-1),F=c("h2",{id:"%E6%8C%89%E9%92%AE%E6%A0%B7%E5%BC%8F",tabindex:"-1"},"\u6309\u94AE\u6837\u5F0F",-1),N=y('<h2 id="%E5%B1%9E%E6%80%A7" tabindex="-1">\u5C5E\u6027</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>arg1</code></td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>arg2</code></td><td style="text-align:center;">\u7B2C\u4E8C\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table></div><h2 id="%E4%BA%8B%E4%BB%B6" tabindex="-1">\u4E8B\u4EF6</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table></div><h2 id="%E6%96%B9%E6%B3%95" tabindex="-1">\u65B9\u6CD5</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>update</code></td><td style="text-align:center;">\u624B\u52A8\u66F4\u65B0</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table></div><h2 id="%E6%8F%92%E6%A7%BD" tabindex="-1">\u63D2\u69FD</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u63D2\u69FD\u540D</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table></div>',8),G={setup(p,{expose:d}){return d({frontmatter:{}}),(_,l)=>{const n=u("demo-preview");return r(),i("div",$,[U,O,w,t(n,{"comp-name":"Checkbox","demo-name":"demo"},{default:a(()=>[t(f)]),_:1}),S,t(n,{"comp-name":"Checkbox","demo-name":"demo2"},{default:a(()=>[t(E)]),_:1}),F,t(n,{"comp-name":"Checkbox","demo-name":"demo3"},{default:a(()=>[t(C)]),_:1}),N])}}};export{G as default};