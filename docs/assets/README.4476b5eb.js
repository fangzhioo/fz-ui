import{d as y,v as c,r as _,o as u,b as m,a5 as l,w as B,_ as d,a9 as E,bk as g}from"./vendor.7405601a.js";const p={class:"example-basic"},b=y({setup(x){const r=c(),e=c();return(i,a)=>{const n=_("fz-time-picker");return u(),m("div",p,[l(n,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),placeholder:"Arbitrary time"},null,8,["modelValue"]),l(n,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value=t),"arrow-control":"",placeholder:"Arbitrary time"},null,8,["modelValue"])])}}});const v={class:"example-basic"},f=y({setup(x){const r=c(new Date(2016,9,10,18,30)),e=(t,s)=>{const h=[];for(let o=t;o<=s;o++)h.push(o);return h},i=()=>e(0,16).concat(e(19,23)),a=t=>{if(t===17)return e(0,29);if(t===18)return e(31,59)},n=(t,s)=>{if(t===18&&s===30)return e(1,59)};return(t,s)=>{const h=_("fz-time-picker");return u(),m("div",v,[l(h,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=o=>r.value=o),"disabled-hours":i,"disabled-minutes":a,"disabled-seconds":n,placeholder:"Arbitrary time"},null,8,["modelValue"])])}}});const A={class:"demo-range"},V=y({setup(x){const r=c([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]),e=c([new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]);return(i,a)=>{const n=_("fz-time-picker");return u(),m("div",A,[l(n,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),"is-range":"","range-separator":"To","start-placeholder":"Start time","end-placeholder":"End time"},null,8,["modelValue"]),l(n,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value=t),"is-range":"","arrow-control":""},null,8,["modelValue"])])}}}),k={class:"markdown-body"},w=d("h1",{id:"%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8",tabindex:"-1"},[d("a",{class:"anchor",href:"#%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8"},"\xB6"),E(" \u65F6\u95F4\u9009\u62E9\u5668")],-1),C=d("p",null,"\u7528\u4E8E\u9009\u62E9\u6216\u8F93\u5165\u65E5\u671F",-1),D=d("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},[d("a",{class:"anchor",href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"},"\xB6"),E(" \u57FA\u7840\u7528\u6CD5")],-1),$=d("h2",{id:"%E9%99%90%E5%88%B6%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4",tabindex:"-1"},[d("a",{class:"anchor",href:"#%E9%99%90%E5%88%B6%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E8%8C%83%E5%9B%B4"},"\xB6"),E(" \u9650\u5236\u65F6\u95F4\u9009\u62E9\u8303\u56F4")],-1),z=d("p",null,"\u901A\u8FC7 disabledHours\uFF0CdisabledMinutes \u548C disabledSeconds \u9650\u5236\u53EF\u9009\u65F6\u95F4\u8303\u56F4\u3002",-1),F=d("h2",{id:"%E4%BB%BB%E6%84%8F%E7%9A%84%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4",tabindex:"-1"},[d("a",{class:"anchor",href:"#%E4%BB%BB%E6%84%8F%E7%9A%84%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4"},"\xB6"),E(" \u4EFB\u610F\u7684\u65F6\u95F4\u8303\u56F4")],-1),T=d("p",null,"\u6DFB\u52A0 is-range \u5C5E\u6027\u5373\u53EF\u9009\u62E9\u65F6\u95F4\u8303\u56F4\u3002 \u540C\u6837\u652F\u6301 arrow-control \u5C5E\u6027\u3002",-1),U=g('<h2 id="%E5%B1%9E%E6%80%A7" tabindex="-1"><a class="anchor" href="#%E5%B1%9E%E6%80%A7">\xB6</a> \u5C5E\u6027</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>arg1</code></td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>arg2</code></td><td style="text-align:center;">\u7B2C\u4E8C\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table></div><h2 id="%E4%BA%8B%E4%BB%B6" tabindex="-1"><a class="anchor" href="#%E4%BA%8B%E4%BB%B6">\xB6</a> \u4E8B\u4EF6</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table></div><h2 id="%E6%96%B9%E6%B3%95" tabindex="-1"><a class="anchor" href="#%E6%96%B9%E6%B3%95">\xB6</a> \u65B9\u6CD5</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>update</code></td><td style="text-align:center;">\u624B\u52A8\u66F4\u65B0</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table></div><h2 id="%E6%8F%92%E6%A7%BD" tabindex="-1"><a class="anchor" href="#%E6%8F%92%E6%A7%BD">\xB6</a> \u63D2\u69FD</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u63D2\u69FD\u540D</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table></div>',8),S={setup(x,{expose:r}){return r({frontmatter:{}}),(i,a)=>{const n=_("demo-preview");return u(),m("div",k,[w,C,D,l(n,{"comp-name":"TimePicker","demo-name":"demo"},{default:B(()=>[l(b)]),_:1}),$,z,l(n,{"comp-name":"TimePicker","demo-name":"demo2"},{default:B(()=>[l(f)]),_:1}),F,T,l(n,{"comp-name":"TimePicker","demo-name":"demo3"},{default:B(()=>[l(V)]),_:1}),U])}}};export{S as default};