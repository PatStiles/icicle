"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[175],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),y=n,d=g["".concat(s,".").concat(y)]||g[y]||u[y]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(8168),n=(a(6540),a(5680));a(1873);const o={},i="What is ICICLE?",l={unversionedId:"icicle/overview",id:"icicle/overview",title:"What is ICICLE?",description:"GitHub Release",source:"@site/docs/icicle/overview.md",sourceDirName:"icicle",slug:"/icicle/overview",permalink:"/icicle/overview",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/overview.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1709634428,formattedLastUpdatedAt:"3/5/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"",permalink:"/"},next:{title:"Getting started with ICICLE",permalink:"/icicle/introduction"}},s={},c=[{value:"Dont have access to a GPU?",id:"dont-have-access-to-a-gpu",level:2},{value:"Grants",id:"grants",level:3},{value:"Google Colab",id:"google-colab",level:3},{value:"Vast.ai",id:"vastai",level:3},{value:"What can you do with ICICLE?",id:"what-can-you-do-with-icicle",level:2},{value:"Circuit developers",id:"circuit-developers",level:3},{value:"Integrating into existing ZK provers",id:"integrating-into-existing-zk-provers",level:3},{value:"Developing your own ZK provers",id:"developing-your-own-zk-provers",level:3},{value:"Developing proof of concepts",id:"developing-proof-of-concepts",level:3}],p={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"what-is-icicle"},"What is ICICLE?"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/releases"},(0,n.yg)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/ingonyama-zk/icicle",alt:"GitHub Release"}))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/Machines%20running%20ICICLE-544-blue",alt:"Static Badge"})),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle"},"ICICLE")," is a cryptography library for ZK using GPUs. ICICLE implements blazing fast cryptographic primitives such as EC operations, MSM, NTT, Poseidon hash and more on GPU."),(0,n.yg)("p",null,"ICICLE allows developers with minimal GPU experience to effortlessly accelerate their ZK application; from our experiments, even the most naive implementation may yield 10X improvement in proving times."),(0,n.yg)("p",null,"ICICLE has been used by many leading ZK companies such as ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/celer-network"},"Celer Network"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Consensys/gnark"},"Gnark")," and others to accelerate their ZK proving pipeline."),(0,n.yg)("h2",{id:"dont-have-access-to-a-gpu"},"Dont have access to a GPU?"),(0,n.yg)("p",null,"We understand that not all developers have access to a GPU and we don't want this to limit anyone from developing with ICICLE.\nHere are some ways we can help you gain access to GPUs:"),(0,n.yg)("h3",{id:"grants"},"Grants"),(0,n.yg)("p",null,"At Ingonyama we are interested in accelerating the progress of ZK and cryptography. If you are an engineer, developer or an academic researcher we invite you to checkout ",(0,n.yg)("a",{parentName:"p",href:"https://www.ingonyama.com/blog/icicle-for-researchers-grants-challenges"},"our grant program"),". We will give you access to GPUs and even pay you to do your dream research!"),(0,n.yg)("h3",{id:"google-colab"},"Google Colab"),(0,n.yg)("p",null,"This is a great way to get started with ICICLE instantly. Google Colab offers free GPU access to a NVIDIA T4 instance, it's acquired with 16 GB of memory which should be enough for experimenting and even prototyping with ICICLE."),(0,n.yg)("p",null,"For an extensive guide on how to setup Google Colab with ICICLE refer to ",(0,n.yg)("a",{parentName:"p",href:"/icicle/colab-instructions"},"this article"),"."),(0,n.yg)("p",null,"If none of these options are appropriate for you reach out to us on ",(0,n.yg)("a",{parentName:"p",href:"https://t.me/RealElan"},"telegram")," we will do our best to help you."),(0,n.yg)("h3",{id:"vastai"},"Vast.ai"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://vast.ai/"},"Vast.ai")," is a global GPU marketplace where you can rent many different types of GPUs by the hour for ",(0,n.yg)("a",{parentName:"p",href:"https://vast.ai/pricing"},"competitive pricing"),". They provide on-demand and interruptible rentals depending on your need or use case; you can learn more about their rental types ",(0,n.yg)("a",{parentName:"p",href:"https://vast.ai/faq#rental-types"},"here"),"."),(0,n.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.yg)("div",{parentName:"div",className:"admonition-heading"},(0,n.yg)("h5",{parentName:"div"},(0,n.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,n.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.yg)("div",{parentName:"div",className:"admonition-content"},(0,n.yg)("p",{parentName:"div"},"If none of these options suit your needs, contact us on ",(0,n.yg)("a",{parentName:"p",href:"https://t.me/RealElan"},"telegram")," for assistance. We're committed to ensuring that a lack of a GPU doesn't become a bottleneck for you. If you need help with setup or any other issues, we're here to do our best to help you."))),(0,n.yg)("h2",{id:"what-can-you-do-with-icicle"},"What can you do with ICICLE?"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle"},"ICICLE")," can be used in the same way you would use any other cryptography library. While developing and integrating ICICLE into many proof systems, we found some use case categories:"),(0,n.yg)("h3",{id:"circuit-developers"},"Circuit developers"),(0,n.yg)("p",null,"If you are a circuit developer and are experiencing bottlenecks while running your circuits, an ICICLE integrated prover may be the solution."),(0,n.yg)("p",null,"ICICLE has been integrated into a number of popular ZK provers including ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Consensys/gnark"},"Gnark prover")," and ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/zkonduit/halo2"},"Halo2"),". This means that you can enjoy GPU acceleration for your existing circuits immediately without writing a single line of code by simply switching on the GPU prover flag!"),(0,n.yg)("h3",{id:"integrating-into-existing-zk-provers"},"Integrating into existing ZK provers"),(0,n.yg)("p",null,"From our collaborations we have learned that its possible to accelerate a specific part of your prover to solve for a specific bottleneck."),(0,n.yg)("p",null,"ICICLE can be used to accelerate specific parts of your prover without completely rewriting your ZK prover."),(0,n.yg)("h3",{id:"developing-your-own-zk-provers"},"Developing your own ZK provers"),(0,n.yg)("p",null,"If your goal is to build a ZK prover from the ground up, ICICLE is an ideal tool for creating a highly optimized and scalable ZK prover. A key benefit of using GPUs with ICICLE is the ability to scale your ZK prover efficiently across multiple machines within a data center."),(0,n.yg)("h3",{id:"developing-proof-of-concepts"},"Developing proof of concepts"),(0,n.yg)("p",null,"ICICLE is also ideal for developing small prototypes. ICICLE has Golang and Rust bindings so you can easily develop a library implementing a specific primitive using ICICLE. An example would be develop a KZG commitment library using ICICLE."))}u.isMDXComponent=!0},1873:(e,t,a)=>{a(6540)}}]);