import{an as y,r as h,o as i,b as r,L as t,J as u,a7 as p,a3 as o,N as x,w as _,am as b}from"./vendor.507c9ebb.js";import{_ as w,m as c}from"./index.45b90272.js";const k={class:"icon-container"},v=["onClick"],C={setup(f){const n=["layers","lock","fullscreen-expand","map","meh","menu","loading","help","minus-circle","modular","notification","mic","more","pad","operation","play","print","mobile-phone","minus","navigation","pdf","prompt","move","refresh","run-up","picture","run-in","pin","save","search","share","scanning","security","sign-out","select","stop","success","smile","switch","setting","survey","task","skip","text","time","telephone-out","toggle-left","toggle-right","telephone","top","unlock","user","upload","work","training","warning","zoom-in","zoom-out","add-bold","arrow-left-bold","arrow-up-bold","close-bold","arrow-down-bold","minus-bold","arrow-right-bold","select-bold","arrow-up-filling","arrow-down-filling","arrow-left-filling","arrow-right-filling","caps-unlock-filling","comment-filling","check-item-filling","clock-filling","delete-filling","decline-filling","dynamic-filling","intermediate-filling","favorite-filling","layout-filling","help-filling","history-filling","filter-filling","file-common-filling","news-filling","edit-filling","fullscreen-expand-filling","smile-filling","rise-filling","picture-filling","notification-filling","user-filling","setting-filling","switch-filling","work-filling","task-filling","success-filling","warning-filling","folder-filling","map-filling","prompt-filling","meh-filling","cry-filling","top-filling","home-filling","sorting","column-3","column-4","add","add-circle","adjust","arrow-up-circle","arrow-right-circle","arrow-down","ashbin","arrow-right","browse","bottom","back","bad","arrow-double-left","arrow-left-circle","arrow-double-right","caps-lock","camera","chart-bar","attachment","code","close","check-item","calendar","comment","column-vertical","column-horizontal","complete","chart-pie","cry","customer-service","delete","direction-down","copy","cut","data-view","direction-down-circle","direction-right","direction-up","discount","direction-left","download","electronics","drag","elipsis","export","explain","edit","eye-close","email","error","favorite","file-common","file-delete","file-add","film","fabulous","file","folder-close","filter","good","hide","home","history","file-open","forward","import","image-text","keyboard-26","keyboard-9","link","layout","fullscreen-shrink"],{isSupported:a,copy:d}=y(),s=e=>{a?d(e).then(()=>{c.success("\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F")}).catch(g=>{c.error(g.message||"\u590D\u5236\u5931\u8D25")}):c.warning("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u590D\u5236")};return(e,g)=>{const m=h("fz-icon");return i(),r("div",null,[t("ul",k,[(i(),r(u,null,p(n,l=>t("li",{class:"icon-item",key:l,onClick:V=>s(l)},[o(m,{name:l},null,8,["name"]),t("p",null,x(l),1)],8,v)),64))])])}}};var z=w(C,[["__scopeId","data-v-065f4bd8"]]);const $={class:"markdown-body"},N=t("h1",null,"\u56FE\u6807",-1),j=t("p",null,"\u4E00\u4E9B\u5E38\u7528\u7684\u56FE\u6807",-1),B=t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),S=b('<h2>\u5C5E\u6027</h2><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53EF\u9009\u503C</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:center;">\u662F\u5426\u5FC5\u586B</th></tr></thead><tbody><tr><td style="text-align:center;"><code>arg1</code></td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr><tr><td style="text-align:center;"><code>arg2</code></td><td style="text-align:center;">\u7B2C\u4E8C\u4E2A\u53C2\u6570</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u5426</td></tr></tbody></table><h2>\u4E8B\u4EF6</h2><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>click</code></td><td style="text-align:center;">\u70B9\u51FB\u4E8B\u4EF6</td><td style="text-align:center;">$event</td><td style="text-align:center;">\u539F\u751F\u7684 dom event</td></tr><tr><td style="text-align:center;"><code>customEvent</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u4E8B\u4EF6</td><td style="text-align:center;">[a, b, c]</td><td style="text-align:center;">a\uFF1A\u53C2\u6570\u4E00\uFF1Bb\uFF1A\u53C2\u6570\u4E8C\uFF1Bc\uFF1A\u53C2\u6570\u4E09</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570\u5217\u8868</th><th style="text-align:center;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>update</code></td><td style="text-align:center;">\u624B\u52A8\u66F4\u65B0</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table><h2>\u63D2\u69FD</h2><table><thead><tr><th style="text-align:center;">\u63D2\u69FD\u540D</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;"><code>default</code></td><td style="text-align:center;">\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table>',8),L={setup(f,{expose:n}){return n({frontmatter:{}}),(d,s)=>{const e=h("Preview");return i(),r("div",$,[N,j,B,o(e,{"comp-name":"Icon","demo-name":"demo"},{default:_(()=>[o(z)]),_:1}),S])}}};export{L as default};