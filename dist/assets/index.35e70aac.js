import{i as h,d as m,j as d,u as g,r as c,H as b,n as y,a as v,O as x,R as L,b as N,B as k}from"./vendor.08023609.js";const S=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};S();const E="modulepreload",u={},I="/test-deploy/",O=function(s,i){return!i||i.length===0?s():Promise.all(i.map(n=>{if(n=`${I}${n}`,n in u)return;u[n]=!0;const t=n.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":E,t||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),t)return new Promise((f,p)=>{o.addEventListener("load",f),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>s())},R={apiKey:"AIzaSyCgtl8YXFbH3fkyQb0l3gQN-M64AUJQtdc",authDomain:"shopping-list-33f27.firebaseapp.com",projectId:"shopping-list-33f27",storageBucket:"shopping-list-33f27.appspot.com",messagingSenderId:"1091600737046",appId:"1:1091600737046:web:7302bb8f73261f81fc2637",measurementId:"G-MHLQR7J25X"},j=h(R),w=m(j),e=d.exports.jsx,l=d.exports.jsxs,A=d.exports.Fragment;function C(){const a=g();return c.exports.useState([]),c.exports.useEffect(()=>b(y(w,"users"),s=>{console.log(s.docs.map(i=>i.data()))}),[]),l("div",{className:"relative w-full h-screen",children:[e("header",{children:e("h1",{children:"Todo App"})}),l("main",{children:[e("div",{children:e("button",{className:"absolute bottom-5 right-5 bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2",onClick:()=>a("/add-category"),children:"++"})}),l("div",{className:"flex space-x-4",children:[e("div",{className:"bg-orange-400",children:"01"}),e("div",{className:"bg-orange-400",children:"02"}),e("div",{className:"bg-orange-400",children:"03"})]})]})]})}function P(){return e("div",{children:l("div",{children:[e("h2",{children:"It looks like you're lost..."}),e("p",{children:e(Link,{to:"/",children:"Go Home"})})]})})}const _=c.exports.lazy(()=>O(()=>import("./AddCategory.f3fc85fa.js"),["assets/AddCategory.f3fc85fa.js","assets/vendor.08023609.js"]));function H(){const a=v([{path:"/",element:e($,{}),children:[{index:!0,element:e(C,{})},{path:"/add-category",element:e(c.exports.Suspense,{fallback:e(A,{children:"..."}),children:e(_,{})})},{path:"*",element:e(P,{})}]}]);return e("div",{children:a})}function $(){return e("div",{children:e(x,{})})}L.render(e(N.StrictMode,{children:e(k,{children:e(H,{})})}),document.getElementById("root"));export{e as a,l as j};
