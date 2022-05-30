import{d as u,v as r,r as c,o as i,b as h,Y as n,a6 as o,X as p,c as x,w as m,bh as y}from"./vendor.34e98e33.js";const g={class:"demo-color-block"},v=n("span",{class:"demonstration"},"With default value",-1),b={class:"demo-color-block"},f=n("span",{class:"demonstration"},"With no default value",-1),E=u({setup(_){const t=r("#409EFF"),a=r();return(d,l)=>{const e=c("fz-color-picker");return i(),h(p,null,[n("div",g,[v,o(e,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s)},null,8,["modelValue"])]),n("div",b,[f,o(e,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=s=>a.value=s)},null,8,["modelValue"])])],64)}}}),B=u({setup(_){const t=r("rgba(19, 206, 102, 0.8)");return(a,d)=>{const l=c("fz-color-picker");return i(),x(l,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=e=>t.value=e),"show-alpha":""},null,8,["modelValue"])}}}),V=u({setup(_){const t=r("rgba(255, 69, 0, 0.68)"),a=r(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return(d,l)=>{const e=c("fz-color-picker");return i(),x(e,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),"show-alpha":"",predefine:a.value},null,8,["modelValue","predefine"])}}});const A={class:"demo-color-sizes"},k=u({setup(_){const t=r("409EFF");return(a,d)=>{const l=c("fz-color-picker");return i(),h("div",A,[o(l,{modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=e=>t.value=e),size:"large"},null,8,["modelValue"]),o(l,{modelValue:t.value,"onUpdate:modelValue":d[1]||(d[1]=e=>t.value=e)},null,8,["modelValue"]),o(l,{modelValue:t.value,"onUpdate:modelValue":d[2]||(d[2]=e=>t.value=e),size:"small"},null,8,["modelValue"])])}}}),z={class:"markdown-body"},C=n("h1",{id:"%E9%A2%9C%E8%89%B2%E9%80%89%E6%8B%A9%E5%99%A8",tabindex:"-1"},"\u989C\u8272\u9009\u62E9\u5668",-1),F=n("p",null,"\u989C\u8272\u9009\u62E9\u5668",-1),$=n("h2",{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),w=n("h2",{id:"%E5%B8%A6%E9%80%8F%E6%98%8E%E5%BA%A6",tabindex:"-1"},"\u5E26\u900F\u660E\u5EA6",-1),U=n("h2",{id:"%E9%A2%84%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2",tabindex:"-1"},"\u9884\u5B9A\u4E49\u989C\u8272",-1),P=n("h2",{id:"%E5%B0%BA%E5%AF%B8%E5%A4%A7%E5%B0%8F",tabindex:"-1"},"\u5C3A\u5BF8\u5927\u5C0F",-1),N=y('<h2 id="%E5%B1%9E%E6%80%A7" tabindex="-1">\u5C5E\u6027</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>arg1</code></td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>arg2</code></td><td style="text-align:center;">\u7B2C\u4E8C\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table></div><h2 id="%E4%BA%8B%E4%BB%B6" tabindex="-1">\u4E8B\u4EF6</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table></div><h2 id="%E6%96%B9%E6%B3%95" tabindex="-1">\u65B9\u6CD5</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>update</code></td><td style="text-align:center;">\u624B\u52A8\u66F4\u65B0</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table></div><h2 id="%E6%8F%92%E6%A7%BD" tabindex="-1">\u63D2\u69FD</h2><div class="doc-table"><table><thead><tr><th style="text-align:center;">\u63D2\u69FD\u540D</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table></div>',8),j={setup(_,{expose:t}){return t({frontmatter:{}}),(d,l)=>{const e=c("demo-preview");return i(),h("div",z,[C,F,$,o(e,{"comp-name":"ColorPicker","demo-name":"demo"},{default:m(()=>[o(E)]),_:1}),w,o(e,{"comp-name":"ColorPicker","demo-name":"demo2"},{default:m(()=>[o(B)]),_:1}),U,o(e,{"comp-name":"ColorPicker","demo-name":"demo3"},{default:m(()=>[o(V)]),_:1}),P,o(e,{"comp-name":"ColorPicker","demo-name":"demo4"},{default:m(()=>[o(k)]),_:1}),N])}}};export{j as default};
