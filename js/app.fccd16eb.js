(function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],h=0,p=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/mallApp/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"009b":function(t,e,n){},"0981":function(t,e,n){"use strict";n("1dda")},1566:function(t,e,n){"use strict";n("f339")},"1dda":function(t,e,n){},"1de0":function(t,e,n){"use strict";n("c0e7")},"1eec":function(t,e,n){},3440:function(t,e,n){},"36c9":function(t,e,n){},3776:function(t,e,n){},"51ad":function(t,e,n){"use strict";n("3440")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=n("b970"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("router-view"),"/search"!==this.$router.history.current.path?n("Tabbar"):t._e()],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tabbar",{attrs:{route:"",fixed:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"home-o",replace:"",to:"/home"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{icon:"apps-o",replace:"",to:"/classify"}},[t._v("分类")]),n("van-tabbar-item",{attrs:{icon:"shopping-cart-o",badge:t.badge,replace:"",to:"/shopping"}},[t._v("购物车")]),n("van-tabbar-item",{attrs:{icon:"friends-o",replace:"",to:"/my"}},[t._v("我的")])],1)},c=[],u=n("5530"),l=(n("07ac"),n("2f62")),h={data:function(){return{active:"home"}},computed:Object(u["a"])(Object(u["a"])({},Object(l["d"])({shoppingRecords:function(t){return t.shoppingRecords}})),{},{badge:function(){var t=Object.values(this.shoppingRecords).reduce((function(t,e){return t+e}),0);return t>99?"99+":0===t?null:t}})},p=h,d=n("2877"),f=Object(d["a"])(p,r,c,!1,null,null,null),g=f.exports,m={components:{Tabbar:g},created:function(){var t=JSON.parse(localStorage.getItem("goods"))||{};this.$store.commit("setshoppingRecords",t)}},b=m,v=Object(d["a"])(b,a,o,!1,null,"02e83adc",null),y=v.exports,C=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"home",staticClass:"home-container"},[n("div",{staticClass:"header"},[n("van-icon",{attrs:{name:"fire",color:"#ee0a24"}}),n("van-icon",{attrs:{name:"chat-o",dot:""}}),n("van-search",{class:{shang:t.showshang,xia:t.showxia},attrs:{shape:"round",placeholder:"请输入搜索关键词"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("div",{ref:"bodyer",staticClass:"bodyer"},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},[n("van-swipe-item",[t._v("你")]),n("van-swipe-item",[t._v("好")]),n("van-swipe-item",[t._v("啊")]),n("van-swipe-item",[t._v("！")])],1),n("div",{staticClass:"cardgroup"},t._l(7,(function(e){return n("div",{key:e,staticClass:"card"},[n("div"),n("span",[t._v("我是第 "+t._s(e)+" 个")])])})),0)],1)])},j=[],O={data:function(){return{value:"",showshang:!1,showxia:!1}},methods:{scroll:function(){this.$refs.bodyer.getBoundingClientRect().top<148&&(this.showshang=!0,this.showxia=!1),this.$refs.bodyer.getBoundingClientRect().top>148&&(this.showshang=!1,this.showxia=!0)}},mounted:function(){function t(t,e){var n=null;return function(){var s=this;n||(n=setTimeout((function(){n=null,t.call(s)}),e))}}this.$refs.home.addEventListener("scroll",t(this.scroll,300))}},_=O,L=(n("1566"),Object(d["a"])(_,w,j,!1,null,"4a2e2309",null)),k=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"classify-container"},[n("Router-link",{staticClass:"search-btn",attrs:{to:{name:"search"},tag:"div"}},[n("van-icon",{attrs:{name:"search"}}),t._v(" 商品打一折了 ")],1),n("OneTab"),t.showContent?[n("TwoTab"),n("ClassifyContent")]:n("van-loading",{attrs:{type:"spinner",vertical:""}})],2)},x=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"onetab",staticClass:"onetab-container"},t._l(t.menuList,(function(e,s){return n("div",{key:e.title,staticClass:"tab-item",class:{active:t.index==s},on:{touchend:function(e){return t.scrollTo(s,e)},touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0}}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.imgURL,alt:""}})]),n("div",{staticClass:"title"},[t._v(t._s(e.title))])])})),0)},$=[];function S(t,e,n,s){var i=0,a=5;e<0&&(a*=-1);var o=setInterval((function(){i+=a,n[s]=t+i,Math.abs(i)>Math.abs(e)&&(n[s]=t+e,clearInterval(o))}),5)}var E={data:function(){return{index:0,move:!1,menuList:[{title:"时令水果",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg"},{title:"酒水冲调",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg"},{title:"安心乳品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg"},{title:"休闲零食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg"},{title:"肉蛋食材",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg"},{title:"新鲜蔬菜",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg"},{title:"熟食餐饮",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg"},{title:"海鲜水产",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg"},{title:"粮油调味",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg"},{title:"某手美食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg"},{title:"纸杯清洁",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg"}]}},methods:Object(u["a"])(Object(u["a"])({},Object(l["b"])(["getTwotab"])),{},{scrollTo:function(t,e){if(!this.move){this.index=t;var n=e.target.offsetWidth,s=e.target.getBoundingClientRect().left,i=this.$refs.onetab.offsetWidth;S(this.$refs.onetab.scrollLeft,n/2+s-i/2,this.$refs.onetab,"scrollLeft"),this.getTwotab({type:this.menuList[t].title})}}}),mounted:function(){this.getTwotab({type:this.menuList[0].title})}},U=E,D=(n("e53a"),Object(d["a"])(U,T,$,!1,null,"68b61534",null)),z=D.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"twotab",staticClass:"twotab-container"},t._l(t.twobarList,(function(e,s){return n("div",{key:e,staticClass:"twotab-item",class:{active:t.index==s},on:{touchend:function(e){return t.scrollTo(s,e)},touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0}}},[t._v(" "+t._s(0==s?"全部":e)+" ")])})),0)},J=[],P={data:function(){return{index:0,move:!1}},computed:Object(u["a"])({},Object(l["d"])({twobarList:function(t){return t.twobarList}})),methods:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(l["c"])(["resetClassifyContent"])),Object(l["b"])(["getClassifyContent"])),{},{scrollTo:function(t,e){if(!this.move){this.index=t;var n=e.target.getBoundingClientRect().top,s=this.$refs.twotab.getBoundingClientRect().top,i=e.target.offsetHeight,a=this.$refs.twotab.offsetHeight;S(this.$refs.twotab.scrollTop,n+i/2-s-a/2,this.$refs.twotab,"scrollTop"),this.resetClassifyContent(),this.getClassifyContent({type:this.twobarList[t],page:1,sortType:"all"})}}})},B=P,M=(n("1de0"),Object(d["a"])(B,I,J,!1,null,"2423bdb0",null)),N=M.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"classifycontent-conatiner"},[n("div",{staticClass:"header"},[n("div",{class:{active:"all"==t.type},on:{click:function(e){return t.changeType("all")}}},[t._v("综合")]),n("div",{class:{active:"sale"==t.type},on:{click:function(e){return t.changeType("sale")}}},[t._v("销量")]),n("div",{staticClass:"price",class:{"price-up":"price-up"==t.type,"price-down":"price-down"==t.type},on:{click:function(e){return t.changeType("price")}}},[t._v("价格")])]),n("div",{staticClass:"bodyer"},[n("van-pull-refresh",{attrs:{"head-height":"100"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.classifyContent,(function(e){return n("Commodity",{key:e.id,attrs:{Data:e,num:t.shoppingRecords[e.id]}})})),1)],1)],1)])},G=[],H=n("1da1"),W=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"commodity-container"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.Data.images[0],alt:""}})]),n("div",{staticClass:"content"},[n("div",{staticClass:"title overflow-hidden"},[t._v(t._s(t.Data.title))]),n("div",{staticClass:"desc overflow-hidden"},[t._v(t._s(t.Data.desc))]),n("div",{staticClass:"tag"},t._l(t.Data.tags,(function(e){return n("div",{key:e},[t._v(t._s(e))])})),0),n("div",{staticClass:"price"},[t._v("￥"+t._s(t.Data.price))]),n("div",{staticClass:"addsubtract"},[t.num?n("div",{staticClass:"subtract",on:{touchend:function(e){return t.addsubtract(t.Data.id,-1)}}},[n("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"}})]):t._e(),t.num?n("div",{staticClass:"num"},[t._v(t._s(t.num))]):t._e(),n("div",{staticClass:"add",on:{touchend:function(e){return t.addsubtract(t.Data.id,1)}}},[n("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"}})])])])])}),q=[],V={props:["Data","num"],methods:Object(u["a"])(Object(u["a"])({},Object(l["c"])(["localRecords"])),{},{addsubtract:function(t,e){this.localRecords({id:t,value:e})}})},F=V,K=(n("e587"),Object(d["a"])(F,W,q,!1,null,"36e0871a",null)),Q=K.exports,X={components:{Commodity:Q},data:function(){return{type:"all",isLoading:!1,loading:!1,finished:!1,page:1}},computed:Object(u["a"])({},Object(l["d"])({classifyContent:function(t){return t.classifyContent},shoppingRecords:function(t){return t.shoppingRecords}})),methods:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(l["c"])(["resetClassifyContent"])),Object(l["b"])(["getClassifyContent"])),{},{changeType:function(t){"all"===t?this.type="all":"sale"===t?this.type="sale":"price-up"===this.type?this.type="price-down":this.type="price-up",this.onRefresh()},onRefresh:function(){this.isLoading=!0,this.finished=!1,this.loading=!1,this.page=1,this.resetClassifyContent(),this.getClassifyContent({page:1,sortType:this.type}),this.isLoading=!1},onLoad:function(){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.page+=1,t.loading=!0,e.next=4,t.getClassifyContent({page:t.page,sortType:t.type});case 4:n=e.sent,n?t.loading=!1:t.finished=!0;case 6:case"end":return e.stop()}}),e)})))()}})},Y=X,Z=(n("51ad"),Object(d["a"])(Y,A,G,!1,null,"a78a39ac",null)),tt=Z.exports,et={components:{OneTab:z,TwoTab:N,ClassifyContent:tt},computed:Object(u["a"])({},Object(l["d"])({showContent:function(t){return t.showContent},twobarList:function(t){return t.twobarList}})),methods:Object(u["a"])(Object(u["a"])({},Object(l["c"])(["resetClassifyContent"])),Object(l["b"])(["getClassifyContent"])),watch:{showContent:function(){this.showContent&&(this.resetClassifyContent(),this.getClassifyContent({type:this.twobarList[0],page:1,sortType:"all"}))}}},nt=et,st=(n("acd0"),Object(d["a"])(nt,R,x,!1,null,"4c8100a4",null)),it=st.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shopping-container"},[n("div",{staticClass:"header"},[n("van-nav-bar",{attrs:{title:"购物车","right-text":"删除"},on:{"click-right":t.onClickRight}})],1),n("div",{staticClass:"bodyer"},[t.shoppingList.length>0?n("van-checkbox-group",{model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.shoppingList,(function(e){return n("div",{key:e.id,staticClass:"content",on:{click:function(n){return t.del(e,t.shoppingRecords[e.id])}}},[n("van-checkbox",{attrs:{name:e.id}}),n("Commodity",{attrs:{Data:e,num:t.shoppingRecords[e.id]}})],1)})),0):n("van-empty",{attrs:{description:"没有商品，亲！！！"}})],1),n("div",{staticClass:"footer"},[n("van-submit-bar",{attrs:{price:t.allprice,"button-text":"结算"},on:{submit:t.onSubmit}},[n("van-checkbox",{on:{click:t.cancel},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)])},ot=[],rt=(n("159b"),n("4de4"),n("caad"),n("2532"),n("b64b"),n("a15b"),n("d399")),ct=n("bc3a"),ut=n.n(ct),lt=ut.a.create({baseURL:"https://mallapi.duyiedu.com/goods/"});lt.interceptors.request.use((function(t){return Object(u["a"])(Object(u["a"])({},t),{},{params:Object(u["a"])(Object(u["a"])({},t.params),{},{appkey:"dd_1597654682810"})})}));var ht=lt,pt={getshopping:function(t){return ht.get("/getGoodsByIds",{params:t})}},dt={components:{Commodity:Q},data:function(){return{checked:!1,shoppingList:[],result:[]}},computed:Object(u["a"])(Object(u["a"])({},Object(l["d"])({shoppingRecords:function(t){return t.shoppingRecords}})),{},{allprice:function(){var t=this,e=[];this.result.forEach((function(n){t.shoppingList.filter((function(s){s.id===n&&(t.shoppingRecords[n]||(t.shoppingRecords[n]=0),e.push(s.price*t.shoppingRecords[n]))}))}));var n=e.reduce((function(t,e){return t+e}),0);return 100*n}}),methods:Object(u["a"])(Object(u["a"])({},Object(l["c"])(["localRecords"])),{},{onClickRight:function(){var t=this;0===this.result.length&&Object(rt["a"])("没有要删除商品"),this.result.forEach((function(e){t.localRecords({id:e,value:-2}),t.shoppingList=t.shoppingList.filter((function(e){return!t.result.includes(e.id)}))}))},del:function(t,e){e||(this.shoppingList=this.shoppingList.filter((function(e){return e!==t})))},onSubmit:function(){Object(rt["a"])("请付钱")},cancel:function(){var t=this;this.checked?(this.result=[],Object.keys(JSON.parse(localStorage.getItem("goods"))).forEach((function(e){return t.result.push(+e)}))):this.result=[]}}),watch:{result:function(){this.result.length===this.shoppingList.length?this.checked=!0:this.checked=!1}},created:function(){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function e(){var n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=JSON.parse(localStorage.getItem("goods")),s=Object.keys(n).join(),e.next=4,pt.getshopping({value:s});case 4:i=e.sent,t.shoppingList=i.data.list;case 6:case"end":return e.stop()}}),e)})))()}},ft=dt,gt=(n("0981"),Object(d["a"])(ft,at,ot,!1,null,"5e48d1eb",null)),mt=gt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-container"},[t._v(" 传说中的个人页面 ")])},vt=[],yt=(n("df18"),{}),Ct=Object(d["a"])(yt,bt,vt,!1,null,"6fa71861",null),wt=Ct.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-container"},[n("div",{staticClass:"header"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.push({name:"classify"})}}}),n("van-search",{attrs:{"show-action":"",placeholder:"酒"},on:{input:t.input,focus:t.focus,search:t.searchEvent,blur:t.blur},scopedSlots:t._u([t.showsearch?{key:"action",fn:function(){return[n("div",[t._v("搜索")])]},proxy:!0}:{key:"action",fn:function(){return[n("van-icon",{attrs:{badge:t.badge,name:"shopping-cart-o",size:"45"},on:{click:function(e){return t.$router.push({name:"shopping"})}}})]},proxy:!0}],null,!0),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("div",{staticClass:"searchlist"},[n("van-list",t._l(t.searchList,(function(e){return n("van-cell",{key:e,attrs:{title:e},on:{click:function(n){return t.searchEvent(e)}}})})),1)],1),t.showshoppingList?n("div",{staticClass:"shoppingList"},[t._l(t.shoppinglist,(function(e){return n("Commodity",{key:e.id,attrs:{Data:e,num:t.shoppingRecords[e.id]}})})),n("div",{staticClass:"text"},[t._v(" "+t._s(t.text)+" ")])],2):t._e(),t.showhisoryList?n("div",{staticClass:"history"},[n("h4",[t._v("历史搜索")]),n("div",{staticClass:"historylist"},t._l(t.historyList,(function(e){return n("div",{key:e,on:{click:function(n){return t.searchEvent(e)}}},[t._v(t._s(e))])})),0)]):t._e()])},Ot=[],_t=(n("7db0"),n("ac1f"),n("841c"),{fuzzySearch:function(t){return ht.get("/likeSearch",{params:t})},search:function(t){return ht.get("/search",{params:t})}}),Lt={components:{Commodity:Q},data:function(){return{value:"",showsearch:!0,showshoppingList:!1,showhisoryList:!0,searchList:[],shoppinglist:[],historyList:[],timer:null,text:""}},computed:Object(u["a"])(Object(u["a"])({},Object(l["d"])({shoppingRecords:function(t){return t.shoppingRecords}})),{},{badge:function(){var t=Object.values(this.shoppingRecords).reduce((function(t,e){return t+e}),0);return t>99?"99+":0===t?null:t}}),methods:{input:function(){var t=this;if(this.showshoppingList=!1,""===this.value)return this.searchList=[],this.showsearch=!0,void(this.showhisoryList=!0);this.showsearch=!1,this.showhisoryList=!1,this.timer?(clearTimeout(this.timer),this.timer=null):this.timer=setTimeout(Object(H["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,_t.fuzzySearch({likeValue:t.value});case 4:n=e.sent,t.searchList=n.data.result,clearTimeout(t.timer),t.timer=null;case 8:case"end":return e.stop()}}),e)}))),300)},focus:function(){""!==this.value&&(this.showsearch=!1,this.showhisoryList=!1)},blur:function(){""===this.value&&(this.showsearch=!0,this.showhisoryList=!0)},searchEvent:function(t){this.historyList.find((function(e){return e===t}))||(this.historyList.length>10&&this.historyList.pop(),this.historyList.unshift(t)),localStorage.setItem("history",JSON.stringify(this.historyList)),this.value=t,this.showsearch=!0,this.showhisoryList=!1,this.searchList=[],this.shoppingList(),console.log("search")},shoppingList:function(){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_t.search({type:t.value,page:1,size:10});case 2:n=e.sent,t.shoppinglist=n.data.list,t.showsearch=!1,t.showshoppingList=!0,n.data.total>10?t.text="加载更多":t.text="没有了";case 7:case"end":return e.stop()}}),e)})))()}},created:function(){this.historyList=JSON.parse(localStorage.getItem("history"))||[]}},kt=Lt,Rt=(n("c341"),Object(d["a"])(kt,jt,Ot,!1,null,"6a76b976",null)),xt=Rt.exports;s["a"].use(C["a"]);var Tt=[{path:"/home",component:k,name:"home"},{path:"/classify",name:"classify",component:it},{path:"/shopping",name:"shopping",component:mt},{path:"/my",name:"my",component:wt},{path:"/search",name:"search",component:xt},{path:"*",redirect:"./home"}],$t=new C["a"]({mode:"history",base:"/mallApp/",routes:Tt}),St=$t,Et=n("2909"),Ut=(n("99af"),{getTowtab:function(t){return ht.get("/getsidebar",{params:t})},getClassifyContentList:function(t){return ht.get("/getGoodsList",{params:t})}});s["a"].use(l["a"]);var Dt=new l["a"].Store({state:{type:null,showContent:!1,twobarList:[],classifyContent:[],size:8,shoppingRecords:{}},mutations:{getTwotab:function(t,e){t.type=e},showContent:function(t,e){t.showContent=e},twobarList:function(t,e){t.twobarList=e},resetClassifyContent:function(t){t.classifyContent=[]},setClassifyContent:function(t,e){t.classifyContent=[].concat(Object(Et["a"])(t.classifyContent),Object(Et["a"])(e))},setshoppingRecords:function(t,e){t.shoppingRecords=e},localRecords:function(t,e){t.shoppingRecords[e.id]?1===t.shoppingRecords[e.id]&&-1===e.value||-2===e.value?s["a"].delete(t.shoppingRecords,e.id):s["a"].set(t.shoppingRecords,e.id,t.shoppingRecords[e.id]+e.value):s["a"].set(t.shoppingRecords,e.id,1),localStorage.setItem("goods",JSON.stringify(t.shoppingRecords))}},actions:{getTwotab:function(t,e){return Object(H["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.commit("showContent",!1),n.next=3,Ut.getTowtab(e);case 3:s=n.sent,t.commit("twobarList",s.data),t.commit("showContent",!0);case 6:case"end":return n.stop()}}),n)})))()},getClassifyContent:function(t,e){return Object(H["a"])(regeneratorRuntime.mark((function n(){var s,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.page,i=e.sortType,a=e.type||t.state.type,t.commit("getTwotab",a),n.next=5,Ut.getClassifyContentList({type:a,page:s,size:t.state.size,sort:i});case 5:if(o=n.sent,t.commit("setClassifyContent",o.data.list),!(o.data.total>t.state.classifyContent.length)){n.next=9;break}return n.abrupt("return",!0);case 9:return n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n)})))()}}});n("499a"),n("157a");s["a"].config.productionTip=!1,s["a"].use(i["a"]),new s["a"]({router:St,store:Dt,render:function(t){return t(y)}}).$mount("#app")},acd0:function(t,e,n){"use strict";n("f911")},c0e7:function(t,e,n){},c341:function(t,e,n){"use strict";n("36c9")},df18:function(t,e,n){"use strict";n("009b")},e53a:function(t,e,n){"use strict";n("1eec")},e587:function(t,e,n){"use strict";n("3776")},f339:function(t,e,n){},f911:function(t,e,n){}});
//# sourceMappingURL=app.fccd16eb.js.map