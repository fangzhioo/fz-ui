import{r as c,o as s,b as _,T as n,w as l,U as e,c as h,L as t,W as y}from"./vendor.0e5c01a5.js";import{_ as f}from"./index.29a42cfd.js";const g=e("Offset top 120px"),u={setup(i){const a=({scrollTop:o,fixed:d})=>{console.log("scrollTop",o,"fixed",d)};return(o,d)=>{const x=c("fz-button"),r=c("fz-affix");return s(),_("div",null,[n(r,{offset:120},{default:l(()=>[n(x,{type:"primary",onScroll:a},{default:l(()=>[g]),_:1})]),_:1})])}}};const p={},m={class:"affix-container"},b=e("Target container");function v(i,a){const o=c("fz-button"),d=c("fz-affix");return s(),_("div",m,[n(d,{target:".affix-container",offset:80},{default:l(()=>[n(o,{type:"primary"},{default:l(()=>[b]),_:1})]),_:1})])}var z=f(p,[["render",v]]);const $={},A=e("Offset bottom 20px");function w(i,a){const o=c("fz-button"),d=c("fz-affix");return s(),h(d,{position:"bottom",offset:20},{default:l(()=>[n(o,{type:"primary"},{default:l(()=>[A]),_:1})]),_:1})}var S=f($,[["render",w]]);const k={class:"markdown-body"},B=t("h1",null,"\u56FA\u9489",-1),N=t("p",null,"\u5C06\u9875\u9762\u5143\u7D20\u56FA\u5B9A\u5728\u7279\u5B9A\u53EF\u89C6\u533A\u57DF",-1),T=t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),V=t("p",null,"\u56FA\u9489\u9ED8\u8BA4\u56FA\u5B9A\u5728\u9875\u9762\u9876\u90E8\u3002",-1),C=t("p",null,[e("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"offset"),e(" \u5C5E\u6027\u6765\u6539\u53D8\u5438\u9876\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0\u3002")],-1),j=t("h2",null,"\u4E3A Affix \u7EC4\u4EF6\u6307\u5B9A\u5BB9\u5668",-1),O=t("p",null,[e("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"target"),e(" \u5C5E\u6027\uFF0C\u8BA9\u56FA\u9489\u59CB\u7EC8\u4FDD\u6301\u5728\u5BB9\u5668\u5185\uFF0C \u8D85\u8FC7\u8303\u56F4\u5219\u9690\u85CF\u3002")],-1),P=t("p",null,"\u8BF7\u6CE8\u610F\u5BB9\u5668\u907F\u514D\u51FA\u73B0\u6EDA\u52A8\u6761\u3002",-1),E=t("h2",null,"\u56FA\u5B9A Affix \u7EC4\u4EF6\u7684\u4F4D\u7F6E",-1),L=t("p",null,[e("Affix \u7EC4\u4EF6\u63D0\u4F9B 2 \u4E2A\u56FA\u5B9A\u7684\u4F4D\u7F6E\u53C2\u6570 "),t("code",null,"top"),e(" \u548C "),t("code",null,"bottom\u3002")],-1),U=t("p",null,[e("\u901A\u8FC7\u8BBE\u7F6E "),t("code",null,"position"),e(" \u5C5E\u6027\u6765\u6539\u53D8\u56FA\u5B9A\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u503C\u4E3A "),t("code",null,"top"),e(" \u3002")],-1),W=y('<h2>\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>offset</code></td><td style="text-align:center;">\u504F\u79FB\u8DDD\u79BB</td><td style="text-align:center;">number</td><td style="text-align:center;">-</td><td style="text-align:center;">0</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>position</code></td><td style="text-align:center;">\u56FA\u9489\u4F4D\u7F6E</td><td style="text-align:center;">string</td><td style="text-align:center;"><code>top/bottom</code></td><td style="text-align:center;"><code>top</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>target</code></td><td style="text-align:center;">\u6307\u5B9A\u5BB9\u5668\uFF08CSS \u9009\u62E9\u5668\uFF09</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>z-index</code></td><td style="text-align:center;">\u56FA\u9489\u5C42\u7EA7</td><td style="text-align:center;">string/number</td><td style="text-align:center;">-</td><td style="text-align:center;">100</td><td style="text-align:center;">\u5426</td></tr></tbody></table><h2>\u4E8B\u4EF6</h2><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>change</code></td><td style="text-align:center;">\u56FA\u9489\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td style="text-align:center;">[value: boolean]</td><td style="text-align:center;">\u662F\u5426\u6539\u53D8</td></tr><tr><td style="text-align:center;"><code>scroll</code></td><td style="text-align:center;">\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td style="text-align:center;">[top: number, fixed: boolean]</td><td style="text-align:center;">top\uFF1Ascroll top\uFF1Bfixed\uFF1Afixed \u72B6\u6001</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>update</code></td><td style="text-align:center;">\u624B\u52A8\u66F4\u65B0\u56FA\u9489\u72B6\u6001</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table><h2>\u63D2\u69FD</h2><table><thead><tr><th style="text-align:center;">\u63D2\u69FD\u540D</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table>',8),F={setup(i,{expose:a}){return a({frontmatter:{}}),(d,x)=>{const r=c("Preview");return s(),_("div",k,[B,N,T,V,C,n(r,{"comp-name":"Affix","demo-name":"demo"},{default:l(()=>[n(u)]),_:1}),j,O,P,n(r,{"comp-name":"Affix","demo-name":"demo2"},{default:l(()=>[n(z)]),_:1}),E,L,U,n(r,{"comp-name":"Affix","demo-name":"demo3"},{default:l(()=>[n(S)]),_:1}),W])}}};export{F as default};
