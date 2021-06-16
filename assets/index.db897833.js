var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&s(e,a,t[a]);return e},c=(e,n)=>t(e,a(n));import{c as m,a as i,p as d,b as p,g as u,d as h,e as E,F as g,R as y,P as _,f as v,h as f,i as k,u as b,j as w,r as x,k as N,l as I,m as S,S as C,n as O,I as P,C as A,B as L,o as M,D as j,A as F,U as R,M as $,q,s as z,t as B,v as H,L as V,w as D,x as K,y as T,z as G,E as J,G as U,H as W,J as Q}from"./vendor.80156d50.js";document.addEventListener("DOMContentLoaded",(()=>{let e=document.body,t=document.getElementById("__svg__icons__dom__1623811539771__");t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__1623811539771__"),t.innerHTML='<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" id="icon-dashboard"><defs><path id="icon-dashboard_a" d="M0 0h40v40H0z" /></defs><g fill="none" fill-rule="evenodd"><g><mask id="icon-dashboard_b" fill="#fff"><use xlink:href="#icon-dashboard_a" /></mask><path d="m37 27.5-.005.165A2.498 2.498 0 0 1 34.5 30h-29l-.165-.002A2.504 2.504 0 0 1 3 27.499v-22l.006-.162A2.5 2.5 0 0 1 5.5 2.999h29l.163.006A2.5 2.5 0 0 1 37 5.5v22zm2.995-22.22A5.497 5.497 0 0 0 34.5 0h-29l-.223.002A5.501 5.501 0 0 0 0 5.5v22l.003.223A5.501 5.501 0 0 0 5.5 33h13v4h-9a1.5 1.5 0 1 0 0 3h21a1.5 1.5 0 1 0 0-3h-9v-4h13l.22-.002A5.504 5.504 0 0 0 40 27.499v-22l-.005-.22z" fill="#FFF" mask="url(#icon-dashboard_b)" /></g><path d="M11 16.571A1.43 1.43 0 0 0 9.571 18v5a1.43 1.43 0 0 0 2.858 0v-5A1.43 1.43 0 0 0 11 16.571M20 13.143a1.43 1.43 0 0 0-1.429 1.428v7.857a1.43 1.43 0 0 0 2.857 0v-7.857A1.43 1.43 0 0 0 20 13.143M29 9.715a1.43 1.43 0 0 0-1.43 1.428v10.714a1.43 1.43 0 0 0 2.858 0V11.143a1.43 1.43 0 0 0-1.429-1.428" fill="#FFF" /></g></symbol>',e.insertBefore(t,e.firstChild)}));const X=m({name:"layoutReducer",initialState:{collapsed:!0,openKeys:["/"]},reducers:{handleCollapsed:e=>c(o({},e),{collapsed:!e.collapsed}),handleOpenkeys:(e,t)=>c(o({},e),{openKeys:t.payload})}}),{handleCollapsed:Y,handleOpenkeys:Z}=X.actions;const ee=p({reducer:d({key:"root",version:1,storage:E,whiteList:["layoutReducer"]},i({layoutReducer:X.reducer})),middleware:u({serializableCheck:{ignoredActions:[g,y,_,v,f,k]}})}),te=h(ee),ae=()=>b(),ne=w,le="react-vite-admin";let re;const se={},oe=[{name:"dashboard",path:"/",component:x.exports.lazy((()=>function(e,t){if(!t)return e();if(void 0===re){const e=document.createElement("link").relList;re=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in se)return;se[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":re,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./index.6598756a.js")),["/react-vite-admin/assets/index.6598756a.js","/react-vite-admin/assets/vendor.80156d50.js","/react-vite-admin/assets/vendor.dadff6b8.css"]))),iconName:"dashboard"}],ce=e=>{const t=[];return function e(a){a.forEach((a=>{a.children&&a.children.length>0?e(a.children):t.push(a)}))}(e),t},me=[{path:"/login",title:"登录"},{path:"/403",title:"403"},{path:"/404",title:"404"}],ie=me.map((e=>e.path));var de="_container_1wmr6_1",pe="_loginView_1wmr6_9",ue="_logo_1wmr6_16",he="_formItemView_1wmr6_20",Ee="_inputView_1wmr6_23",ge="_loginbtn_1wmr6_26";const ye=()=>{const{replace:e}=I();return S.createElement("div",{className:de},S.createElement("div",{className:pe},S.createElement(C,{className:ue}),S.createElement(O,{onFinish:t=>{t.remember?localStorage.setItem("token","admin"):sessionStorage.setItem("token","admin"),e("/")},initialValues:{remember:!0}},S.createElement(O.Item,{name:"userName",rules:[{required:!0,message:"Please input your username!"}],className:he},S.createElement(P,{placeholder:"any",className:Ee})),S.createElement(O.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],className:he},S.createElement(P.Password,{placeholder:"any",className:Ee})),S.createElement(O.Item,{name:"remember",valuePropName:"checked",className:he},S.createElement(A,null,"remember me?")),S.createElement(O.Item,null,S.createElement(L,{type:"primary",htmlType:"submit",className:ge},"Login")))))},_e=()=>{const{replace:e}=I();return S.createElement("div",{className:"spin-main"},S.createElement(M,{status:"403",title:"403",subTitle:"对不起，您没有权限访问此页面",extra:S.createElement(L,{onClick:()=>{e("/login")},type:"primary"},"去登录")}))},ve=()=>{const{replace:e}=I();return S.createElement("div",{className:"spin-main"},S.createElement(M,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:S.createElement(L,{type:"primary",onClick:()=>{e("/")}},"Back Home")}))},fe=()=>{const{replace:e}=I(),t=()=>{localStorage.getItem("token")?localStorage.removeItem("token"):sessionStorage.removeItem("token"),e("/login")};return S.createElement(j,{overlay:()=>S.createElement($,null,S.createElement($.Item,{key:"logout",onClick:t},"log out"))},S.createElement("a",{onClick:e=>e.preventDefault()},S.createElement(F,{style:{backgroundColor:"#87d068"},icon:S.createElement(R,null)})))};var ke="_layoutNavbar_iqekx_1",be="_trigger_iqekx_8",we="_breadcrumb_iqekx_17";const{Header:xe}=V,Ne=()=>{const e=(()=>{const{pathname:e}=N(),t=e.split("/").filter((e=>e)).map((e=>"/"+e));if(!t.length)return[oe[0]];const a=(e=>{const t=[];return function e(a){a.forEach((a=>{a.children&&a.children.length>0?(t.push(a),e(a.children)):t.push(a)}))}(e),t})(oe.filter((e=>e.path===t[0]))).map((e=>{const t=e.path.split("/").filter((e=>e)).map((e=>"/"+e)),a=t[t.length-1];return c(o({},e),{lastPath:a})}));return[oe[0],...a.filter((e=>t.includes(e.lastPath)))]})(),{collapsed:t}=ne((e=>e.layoutReducer)),a=ae();return S.createElement(xe,{className:ke},S.createElement(q,null,x.exports.createElement(t?z:B,{className:be,onClick:()=>a(Y())}),S.createElement(H,{separator:">",className:we},e.map(((e,t)=>0===t?S.createElement(H.Item,{href:e.path,key:e.path},S.createElement("span",null," ",e.name)):S.createElement(H.Item,{key:e.path},e.name))))),S.createElement(fe,null))};var Ie="_layoutMainContent_1xbxn_1";const{Content:Se,Footer:Ce}=V,Oe=()=>{const{collapsed:e}=ne((e=>e.layoutReducer));return S.createElement(V,{style:{marginLeft:e?80:200}},S.createElement(Ne,null),S.createElement(Se,null,S.createElement("div",{className:Ie},S.createElement(x.exports.Suspense,{fallback:S.createElement("div",{className:"spin-main"},S.createElement(D,{size:"large"}))},S.createElement(K,null,ce(oe).map((e=>S.createElement(T,{key:e.path,path:e.path,component:e.component,exact:!0}))),S.createElement(T,{key:"/404",path:"/404",component:ve,exact:!0}),S.createElement(T,{key:"/403",path:"/403",component:_e,exact:!0}),S.createElement(T,{path:"*",render:({location:e})=>S.createElement(G,{to:{pathname:"/404",state:{from:e}}})}))))),S.createElement(Ce,null))},Pe=e=>{const{prefix:t="icon",name:a,color:n="#009aff"}=e,l=x.exports.useMemo((()=>`#${t}-${a}`),[a,t]);return S.createElement("svg",{"aria-hidden":"true",style:{width:"1em",height:"1em"}},S.createElement("use",{xlinkHref:l,fill:n}))};var Ae="_layoutSidebar_1vfig_1",Le="_logo_1vfig_7";const{Sider:Me}=V,{SubMenu:je}=$,Fe=()=>{const e=oe.map((e=>e.path)),t=I(),{pathname:a}=N(),{collapsed:n,openKeys:l}=ne((e=>e.layoutReducer)),r=ae(),s=e=>e.map((e=>{var n;return(null==(n=e.children)?void 0:n.length)?S.createElement(je,{key:e.path,title:e.name,icon:S.createElement("span",{className:"ant-menu-item-icon"},S.createElement(Pe,{name:e.iconName||""}))},s(e.children)):S.createElement($.Item,{key:e.path,icon:S.createElement("span",null,S.createElement(Pe,{name:e.iconName||""})),onClick:()=>(e=>{e.path!==a&&t.push(e.path)})(e)},e.name)}));return S.createElement(Me,{className:Ae,trigger:null,collapsible:!0,collapsed:n},S.createElement("div",{className:Le}),S.createElement($,{theme:"dark",mode:"inline",openKeys:l,selectedKeys:[a],onOpenChange:t=>{const a=t,n=a[a.length-1];e.includes(n)?r(Z(n?[n]:[])):r(Z(a))}},s(oe)))},Re=()=>S.createElement(V,{style:{height:"100%"}},S.createElement(Fe,null),S.createElement(Oe,null)),$e=()=>{(()=>{var e;const t=ce(oe),{pathname:a}=N();if(ie.includes(a)){const e=ie.findIndex((e=>e===a));window.document.title=`${me[e].title} | ${le}`}else window.document.title=`${null==(e=t.find((e=>e.path===a)))?void 0:e.name} | ${le}`})();const e=()=>localStorage.getItem("token")?localStorage.getItem("token"):sessionStorage.getItem("token");return S.createElement(K,null,S.createElement(T,{path:"/login",render:({location:t})=>e()?S.createElement(G,{to:{pathname:"/404",state:{from:t}}}):S.createElement(ye,null)}),S.createElement(T,{render:({location:t})=>e()?S.createElement(Re,null):S.createElement(G,{to:{pathname:"/login",state:{from:t}}})}))},qe=()=>S.createElement(J,{store:ee},S.createElement(U,{loading:null,persistor:te},S.createElement(W,{basename:le},S.createElement($e,null))));Q.render(S.createElement(qe,null),document.getElementById("root"));
