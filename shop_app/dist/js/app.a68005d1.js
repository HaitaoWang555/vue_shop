(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={7:0},a={7:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{0:"d280b305",2:"034f3fc9",3:"0522cd1b",4:"436ed674",5:"ff47a433",6:"1e3c005b"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={0:1,2:1,3:1,4:1,5:1,6:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{0:"4dd868b9",2:"f656563d",3:"de8cd647",4:"318d9d09",5:"41b26e17",6:"a898f3b7"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],s=u.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=u(e),s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue_shop/shop_app/dist/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;i.push([16,1]),n()})({16:function(e,t,n){e.exports=n("Vtdi")},"9e9m":function(e,t,n){"use strict";var r=n("Kw5r"),o=new r["a"];t["a"]=o},EDI0:function(e,t,n){},EFQH:function(e,t,n){},TuJu:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("f3/d"),n("Zs/I");var r=n("NDuV"),o=(n("5+UC"),n("05lO")),a=(n("w6Z4"),n("rQYt")),i=(n("VRzm"),n("Kw5r")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.transitionName}},[n("keep-alive",[n("router-view")],1)],1),n("Footer")],1)},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?e._e():n("footer",{staticClass:"app-shell-footer app-bottom-navigator-wrapper"},[n("div",{staticClass:"fill-height box-flex align-center"},e._l(e.navList,function(t){return n("router-link",{key:t.icon,staticClass:"flex",attrs:{"active-class":"on",to:{name:t.link}}},[n("van-icon",{attrs:{name:t.icon}}),n("span",[e._v(e._s(t.name))])],1)}))])},l=[],f=n("9e9m"),p=[{name:"首页",icon:"wap-home",link:"Home"},{name:"分类",icon:"pending-orders",link:"Category"},{name:"购物车",icon:"cart",link:"Cart"},{name:"我的",icon:"contact",link:"User"}],d={data:function(){return{navList:p,loading:!0}},created:function(){var e=this;f["a"].$on("loading",function(t){e.loading=t})}},m=d,h=(n("ueEI"),n("KHd+")),g=Object(h["a"])(m,s,l,!1,null,"6377e55e",null),v=g.exports,b={components:{Footer:v},data:function(){return{transitionName:""}},watch:{$route:function(e,t){t.name?this.transitionName=e.meta.index<t.meta.index?"page-right":"page-left":this.transitionName=""}}},y=b,j=(n("ZL7j"),Object(h["a"])(y,u,c,!1,null,null,null)),w=j.exports,x=n("jE9Z"),E=function(){return Promise.all([n.e(1),n.e(0),n.e(6)]).then(n.bind(null,"u1G+"))},k=function(){return n.e(5).then(n.bind(null,"pVsz"))},_=function(){return n.e(0).then(n.bind(null,"SIYL"))},P=function(){return Promise.all([n.e(1),n.e(0),n.e(4)]).then(n.bind(null,"t4kb"))},O=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"FRGM"))},L=function(){return Promise.all([n.e(1),n.e(0),n.e(2)]).then(n.bind(null,"0vFH"))};i["a"].use(x["a"]);var T=new x["a"]({routes:[{path:"/",redirect:"home"},{path:"/home",name:"Home",component:E,meta:{title:"首页",index:0}},{path:"/category",name:"Category",component:_,meta:{title:"分类页",index:1}},{path:"/cart",name:"Cart",component:P,meta:{title:"购物车",index:2}},{path:"/user",name:"User",component:O,meta:{title:"个人中心",index:3}},{path:"/login",name:"login",component:k,meta:{title:"登录页",index:4}},{path:"/product/:id",name:"product",component:L,meta:{title:"产品页",index:5}}]}),C=T,S=n("L2JU");i["a"].use(S["a"]);var N=new S["a"].Store({state:{},mutations:{},actions:{}}),F=(n("9d8Q"),n("TuJu"),n("gtrF"),n("Mj6V")),V=n.n(F),$=(n("pdi6"),n("vDqi")),q=n.n($),H=(n("yt8O"),n("RW0V"),n("rGqo"),"http://pbdg9iawq.bkt.clouddn.com"),I={navList:"/json/navLists",recommend:"/json/recommend",active:"/json/active",mobile:"/json/mobile",intelligence:"/json/intelligence",computer:"/json/computer",around:"/json/around",tv:"/json/tv",category:"/json/category",product:"/json/product",recommendList:"/json/recommendList"};Object.keys(I).forEach(function(e){I[e]=H+I[e]+".json"});var M=I;function J(e,t){return new Promise(function(t,n){q.a.get(M[e]).then(function(e){t(e)}).catch(function(e){console.error(e)})})}var Z=J;V.a.configure({showSpinner:!1}),i["a"].use(o["a"]).use(a["a"]),i["a"].prototype.$NProgress=V.a,i["a"].use(r["a"],{preLoad:1,attempt:1}),i["a"].prototype.$fetch=Z,i["a"].config.productionTip=!1,C.beforeEach(function(e,t,n){document.querySelector("#app").scrollTop=0,e.name&&(document.title=e.meta.title),n()}),new i["a"]({router:C,store:N,render:function(e){return e(w)}}).$mount("#app")},ZL7j:function(e,t,n){"use strict";var r=n("EDI0"),o=n.n(r);o.a},gtrF:function(e,t,n){},ueEI:function(e,t,n){"use strict";var r=n("EFQH"),o=n.n(r);o.a}});
//# sourceMappingURL=app.a68005d1.js.map