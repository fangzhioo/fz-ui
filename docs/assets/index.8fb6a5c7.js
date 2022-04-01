import{_ as z}from"./index.3c829c1b.js";import{P,r as m,c as D,w as o,o as p,a5 as e,b as s,ae as n,a9 as u,Z as h,u as d,W as _}from"./vendor.79682e7c.js";var Z=[{compName:"Button",compZhName:"\u6309\u94AE",compDesc:"\u6309\u94AE",compDoc:!0,compClassName:"button",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Input",compZhName:"\u8F93\u5165\u6846",compDesc:"\u6587\u672C\u8F93\u5165\u6846",compDoc:!0,compClassName:"input",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"ConfigProvider",compZhName:"\u914D\u7F6E\u63D0\u4F9B\u8005",compDesc:"\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u63D0\u4F9B\u8005",compDoc:!0,compClassName:"config-provider",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Container",compZhName:"\u5E03\u5C40\u5BB9\u5668",compDesc:"\u7528\u4E8E\u5E03\u5C40\u7684\u5BB9\u5668\u7EC4\u4EF6",compDoc:!0,compClassName:"container",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Affix",compZhName:"\u56FA\u9489",compDesc:"\u5C06\u9875\u9762\u5143\u7D20\u56FA\u5B9A\u5728\u7279\u5B9A\u53EF\u89C6\u533A\u57DF",compDoc:!0,compClassName:"affix",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Icon",compZhName:"\u56FE\u6807",compDesc:"\u4E00\u4E9B\u5E38\u7528\u7684\u56FE\u6807",compDoc:!0,compClassName:"icon",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Popper",compZhName:"\u5F39\u51FA\u6846",compDesc:"\u5F39\u51FA\u9690\u85CF\u5185\u5BB9",compDoc:!1,compClassName:"popper",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Popover",compZhName:"\u5F39\u51FA\u4FE1\u606F",compDesc:"\u5C55\u793A\u5143\u7D20\u9690\u85CF\u4FE1\u606F\u6D6E\u7A97",compDoc:!0,compClassName:"popover",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Autocomplete",compZhName:"\u81EA\u52A8\u8865\u5168\u8F93\u5165\u6846",compDesc:"\u81EA\u52A8\u8865\u5168\u5F39\u7A97\u7684\u8F93\u5165\u6846",compDoc:!0,compClassName:"autocomplete",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Alert",compZhName:"\u63D0\u793A",compDesc:"\u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F",compDoc:!0,compClassName:"alert",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Avatar",compZhName:"\u5934\u50CF",compDesc:"\u7528\u4E8E\u5C55\u793A\u5934\u50CF",compDoc:!0,compClassName:"avatar",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Backtop",compZhName:"\u8FD4\u56DE\u5934\u90E8",compDesc:"\u7528\u4E8E\u8FD4\u56DE\u5934\u90E8",compDoc:!0,compClassName:"backtop",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Badge",compZhName:"\u5FBD\u7AE0",compDesc:"\u6309\u94AE\u548C\u56FE\u6807\u4E0A\u7684\u6570\u5B57\u6216\u72B6\u6001\u6807\u8BB0",compDoc:!0,compClassName:"badge",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Breadcrumb",compZhName:"\u9762\u5305\u5C51",compDesc:"\u663E\u793A\u5F53\u524D\u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u5FEB\u901F\u8FD4\u56DE\u4E4B\u524D\u7684\u4EFB\u610F\u9875\u9762",compDoc:!0,compClassName:"breadcrumb",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Scrollbar",compZhName:"\u6EDA\u52A8\u6761",compDesc:"\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u6EDA\u52A8\u6761",compDoc:!0,compClassName:"scrollbar",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Checkbox",compZhName:"\u591A\u9009\u6846",compDesc:"\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009",compDoc:!0,compClassName:"checkbox",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Calendar",compZhName:"\u65E5\u5386",compDesc:"\u65E5\u5386\u7684\u5F62\u5F0F\u663E\u793A\u65E5\u671F",compDoc:!0,compClassName:"calendar",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Card",compZhName:"\u5361\u7247",compDesc:"\u5361\u7247\u6837\u5F0F\u663E\u793A\u7EC4\u4EF6",compDoc:!0,compClassName:"card",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Layout",compZhName:"\u5E03\u5C40",compDesc:"\u901A\u8FC7\u57FA\u7840\u7684 24 \u5206\u680F\uFF0C\u8FC5\u901F\u7B80\u4FBF\u5730\u521B\u5EFA\u5E03\u5C40\u3002",compDoc:!0,compClassName:"layout",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Carousel",compZhName:"\u8F6E\u64AD",compDesc:"\u7EC4\u4EF6\u7528\u4E8E\u5728\u5FAA\u73AF\u8BA1\u65F6\u5668\u4E0A\u663E\u793A\u5927\u91CF\u53EF\u89C6\u5185\u5BB9\u3002",compDoc:!0,compClassName:"carousel",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Message",compZhName:"\u6D88\u606F\u63D0\u793A",compDesc:"\u5E38\u7528\u4E8E\u4E3B\u52A8\u64CD\u4F5C\u540E\u7684\u53CD\u9988\u63D0\u793A\u3002",compDoc:!0,compClassName:"message",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"CheckTag",compZhName:"\u53EF\u9009\u6807\u7B7E",compDesc:"\u53EF\u4EE5\u9009\u4E2D\u7684\u6807\u7B7E",compDoc:!0,compClassName:"check-tag",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Collapse",compZhName:"\u6298\u53E0\u9762\u677F",compDesc:"\u901A\u8FC7\u6298\u53E0\u9762\u677F\u6536\u7EB3\u5185\u5BB9\u533A\u57DF",compDoc:!0,compClassName:"collapse",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Tooltip",compZhName:"\u6587\u5B57\u63D0\u793A",compDesc:"\u5E38\u7528\u4E8E\u5C55\u793A\u9F20\u6807 hover \u65F6\u7684\u63D0\u793A\u4FE1\u606F\u3002",compDoc:!0,compClassName:"tooltip",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"OnlyChild",compZhName:"\u5355\u5143\u7D20\u63D2\u69FD",compDesc:"\u53EA\u5141\u8BB8\u4E00\u4E2A\u5143\u7D20\u7684\u63D2\u69FD\u7EC4\u4EF6",compDoc:!1,compClassName:"only-child",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"VisuallyHidden",compZhName:"\u9690\u85CF\u5143\u7D20",compDesc:"\u9690\u85CF\u5143\u7D20",compDoc:!1,compClassName:"visually-hidden",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Tag",compZhName:"\u6807\u7B7E",compDesc:"\u7528\u4E8E\u6807\u8BB0\u548C\u9009\u62E9",compDoc:!0,compClassName:"tag",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Select",compZhName:"\u9009\u62E9\u5668",compDesc:"\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u66F4\u591A\u5185\u5BB9\u5E76\u9009\u62E9",compDoc:!0,compClassName:"select",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Overlay",compZhName:"\u8986\u76D6\u5C42",compDesc:"\u5F39\u51FA\u6846\u4E0B\u7684\u8986\u76D6\u5C42",compDoc:!1,compClassName:"overlay",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Dialog",compZhName:"\u5BF9\u8BDD\u6846",compDesc:"\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002",compDoc:!0,compClassName:"dialog",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Table",compZhName:"\u8868\u683C",compDesc:"\u7528\u4E8E\u5C55\u793A\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C \u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002",compDoc:!0,compClassName:"table",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"ColorPicker",compZhName:"\u989C\u8272\u9009\u62E9\u5668",compDesc:"\u989C\u8272\u9009\u62E9\u5668",compDoc:!0,compClassName:"color-picker",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Radio",compZhName:"\u5355\u9009\u6846",compDesc:"\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009",compDoc:!0,compClassName:"radio",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Drawer",compZhName:"\u62BD\u5C49",compDesc:"\u5F39\u7A97\u5C55\u793A\u5185\u5BB9\uFF0C\u6BD4 Dialog \u62E5\u6709\u66F4\u4E30\u5BCC\u7684\u5C55\u793A\u65B9\u5F0F\u3002",compDoc:!0,compClassName:"drawer",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"Switch",compZhName:"\u5F00\u5173",compDesc:"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",compDoc:!0,compClassName:"switch",compPrefix:"Fz",compPrefixClass:"fz-"},{compName:"TimePicker",compZhName:"\u65F6\u95F4\u9009\u62E9\u5668",compDesc:"\u7528\u4E8E\u9009\u62E9\u6216\u8F93\u5165\u65E5\u671F",compDoc:!0,compClassName:"time-picker",compPrefix:"Fz",compPrefixClass:"fz-"}];const F={setup(v){const r=Z.filter(c=>c.compDoc).map(c=>({path:`/components/${c.compName}`,name:`${c.compZhName}\uFF08${c.compName}\uFF09`})),l=P({links:r});return(c,k)=>{const f=m("router-link"),i=m("fz-aside"),t=m("router-view"),N=m("fz-main"),x=m("fz-container");return p(),D(x,{class:"my-fzui-doc"},{default:o(()=>[e(i,{width:"200px",class:"my-doc-aside"},{default:o(()=>[(p(!0),s(_,null,n(d(l).links,(a,C)=>(p(),s("div",{class:"link-item",key:C},[e(f,{to:a.path},{default:o(()=>[u(h(a.name),1)]),_:2},1032,["to"])]))),128))]),_:1}),e(N,null,{default:o(()=>[e(t)]),_:1})]),_:1})}}};var y=z(F,[["__scopeId","data-v-83695e02"]]);export{y as default};