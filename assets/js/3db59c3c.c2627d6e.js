"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[843],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(8168),i=(t(6540),t(5680));t(1873);const r={},o="Supporting Additional Curves",l={unversionedId:"icicle/supporting-additional-curves",id:"icicle/supporting-additional-curves",title:"Supporting Additional Curves",description:"We understand the need for ZK developers to use different curves, some common some more exotic. For this reason we designed ICICLE to allow developers to add any curve they desire.",source:"@site/docs/icicle/supporting-additional-curves.md",sourceDirName:"icicle",slug:"/icicle/supporting-additional-curves",permalink:"/icicle/supporting-additional-curves",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/supporting-additional-curves.md",tags:[],version:"current",lastUpdatedBy:"Jeremy Felder",lastUpdatedAt:1709755510,formattedLastUpdatedAt:"3/6/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Multi GPU with ICICLE",permalink:"/icicle/multi-gpu"},next:{title:"Run ICICLE on Google Colab",permalink:"/icicle/colab-instructions"}},s={},p=[{value:"ICICLE Core",id:"icicle-core",level:2},{value:"Adding curve_name_params.cuh",id:"adding-curve_name_paramscuh",level:3},{value:"Adding Poseidon support",id:"adding-poseidon-support",level:3},{value:"Bindings",id:"bindings",level:2},{value:"Rust",id:"rust",level:3},{value:"Limbs",id:"limbs",level:4},{value:"Primitives",id:"primitives",level:4},{value:"G2",id:"g2",level:4},{value:"Golang",id:"golang",level:3}],u={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"supporting-additional-curves"},"Supporting Additional Curves"),(0,i.yg)("p",null,"We understand the need for ZK developers to use different curves, some common some more exotic. For this reason we designed ICICLE to allow developers to add any curve they desire."),(0,i.yg)("h2",{id:"icicle-core"},"ICICLE Core"),(0,i.yg)("p",null,"ICICLE core is very generic by design so all algorithms and primitives are designed to work based of configuration files ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/curves/curve_config.cuh"},"selected during compile")," time. This is why we compile ICICLE Core per curve."),(0,i.yg)("p",null,"To add support for a new curve you must create a new file under ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/icicle/curves"},(0,i.yg)("inlineCode",{parentName:"a"},"icicle/curves")),". The file should be named ",(0,i.yg)("inlineCode",{parentName:"p"},"<curve_name>_params.cuh"),"."),(0,i.yg)("h3",{id:"adding-curve_name_paramscuh"},"Adding curve_name_params.cuh"),(0,i.yg)("p",null,"Start by copying ",(0,i.yg)("inlineCode",{parentName:"p"},"bn254_params.cuh")," contents in your params file. Params should include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"fq_config")," - parameters of the Base field."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"limbs_count")," - ",(0,i.yg)("inlineCode",{parentName:"li"},"ceil(field_byte_size / 4)"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"modulus_bit_count")," - bit-size of the modulus."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"num_of_reductions")," - the number of times to reduce in reduce function. Use 2 if not sure."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"modulus")," - modulus of the field."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"modulus_2")," - modulus * 2."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"modulus_4")," - modulus * 4. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"neg_modulus")," - negated modulus. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"modulus_wide")," - modulus represented as a double-sized integer."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"modulus_squared")," - modulus**2 represented as a double-sized integer."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"modulus_squared_2")," - 2 * modulus**2 represented as a double-sized integer."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"modulus_squared_4")," - 4 * modulus**2 represented as a double-sized integer."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"m")," - value used in multiplication. Can be computed as ",(0,i.yg)("inlineCode",{parentName:"li"},"2**(2*modulus_bit_count) // modulus"),". "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"one")," - multiplicative identity. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"zero")," - additive identity. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"montgomery_r")," - ",(0,i.yg)("inlineCode",{parentName:"li"},"2 ** M % modulus")," where M is a closest (larger than) bitsize multiple of 32. E.g. 384 or 768 for bls and bw curves respectively"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"montgomery_r_inv")," - ",(0,i.yg)("inlineCode",{parentName:"li"},"2 ** (-M) % modulus")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"fp_config")," - parameters of the Scalar field.\nSame as fq_config, but with additional arguments:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"omegas_count")," - ",(0,i.yg)("a",{parentName:"li",href:"https://cryptologie.net/article/559/whats-two-adicity/"},"two-adicity")," of the field. And thus the maximum size of NTT."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"omegas")," - an array of omegas for NTTs. An array of size ",(0,i.yg)("inlineCode",{parentName:"li"},"omegas_count"),". The ith element is equal to ",(0,i.yg)("inlineCode",{parentName:"li"},"1.nth_root(2**(2**(omegas_count-i)))"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"inv")," - an array of inverses of powers of two in a field. Ith element is equal to ",(0,i.yg)("inlineCode",{parentName:"li"},"(2 ** (i+1)) ** -1"),"."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"G1 generators points")," - affine coordinates of the generator point.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"G2 generators points")," - affine coordinates of the extension generator. Remove these if ",(0,i.yg)("inlineCode",{parentName:"p"},"G2")," is not supported.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Weierstrass b value")," - base field element equal to value of ",(0,i.yg)("inlineCode",{parentName:"p"},"b")," in the curve equation.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Weierstrass b value G2")," - base field element equal to value of ",(0,i.yg)("inlineCode",{parentName:"p"},"b")," for the extension. Remove this if ",(0,i.yg)("inlineCode",{parentName:"p"},"G2")," is not supported."),(0,i.yg)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"All the params are not in Montgomery form."))),(0,i.yg)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"To convert number values into ",(0,i.yg)("inlineCode",{parentName:"p"},"storage")," type you can use the following python function"))))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-python"},"import struct\n\ndef unpack(x, field_size):\n    return ', '.join([\"0x\" + format(x, '08x') for x in struct.unpack('I' * (field_size) // 4, int(x).to_bytes(field_size, 'little'))])\n")),(0,i.yg)("p",null,":::"),(0,i.yg)("p",null,"We also require some changes to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/curves/curve_config.cuh#L16-L29"},(0,i.yg)("inlineCode",{parentName:"a"},"curve_config.cuh")),", we need to add a new curve id."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"...\n\n#define BN254     1\n#define BLS12_381 2\n#define BLS12_377 3\n#define BW6_761   4\n#define GRUMPKIN  5\n#define <curve_name> 6\n\n...\n")),(0,i.yg)("p",null,"Make sure to modify the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/4beda3a900eda961f39af3a496f8184c52bf3b41/icicle/curves/curve_config.cuh#L16-L29"},"rest of the file")," accordingly."),(0,i.yg)("p",null,"Finally we must modify the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/CMakeLists.txt#L64"},(0,i.yg)("inlineCode",{parentName:"a"},"make")," file")," to make sure we can compile our new curve."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"set(SUPPORTED_CURVES bn254;bls12_381;bls12_377;bw6_761;grumpkin;<curve_name>)\n")),(0,i.yg)("h3",{id:"adding-poseidon-support"},"Adding Poseidon support"),(0,i.yg)("p",null,"If you want your curve to implement a Poseidon hash function or a tree builder, you will need to pre-calculate its optimized parameters.",(0,i.yg)("br",{parentName:"p"}),"\n","Copy ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/appUtils/poseidon/constants/constants_template.h"},"constants_template.h")," into ",(0,i.yg)("inlineCode",{parentName:"p"},"icicle/appUtils/poseidon/constants/<CURVE>_poseidon.h"),". Run the ",(0,i.yg)("a",{parentName:"p",href:"https://dev.ingonyama.com/icicle/primitives/poseidon#constants"},"constants generation script"),". The script will print the number of partial rounds and generate a ",(0,i.yg)("inlineCode",{parentName:"p"},"constants.bin")," file. Use ",(0,i.yg)("inlineCode",{parentName:"p"},"xxd -i constants.bin")," to parse the file into C declarations. Copy the ",(0,i.yg)("inlineCode",{parentName:"p"},"unsigned char constants_bin[]")," contents inside your new file. Repeat this process for arities 2, 4, 8 and 11."),(0,i.yg)("p",null,"After you've generated the constants, add your curve in this ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/icicle/CMakeLists.txt#L72"},"SUPPORTED_CURVES_WITH_POSEIDON")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"CMakeLists.txt"),"."),(0,i.yg)("h2",{id:"bindings"},"Bindings"),(0,i.yg)("p",null,"In order to support a new curve in the binding libraries you first must support it in ICICLE core."),(0,i.yg)("h3",{id:"rust"},"Rust"),(0,i.yg)("p",null,"Go to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/icicle-curves"},"rust curves folder")," and copy ",(0,i.yg)("inlineCode",{parentName:"p"},"icicle-curve-template")," to a new folder named ",(0,i.yg)("inlineCode",{parentName:"p"},"icicle-<curve_name>"),"."),(0,i.yg)("p",null,"Find all the occurrences of ",(0,i.yg)("inlineCode",{parentName:"p"},"<CURVE>")," placeholder inside the crate. (You can use ",(0,i.yg)("inlineCode",{parentName:"p"},"Ctrl+Shift+F")," in VS Code or ",(0,i.yg)("inlineCode",{parentName:"p"},'grep -nr "<CURVE>"')," in bash). You will then need to replace each occurrence with your new curve name."),(0,i.yg)("h4",{id:"limbs"},"Limbs"),(0,i.yg)("p",null,"Go to your curve's ",(0,i.yg)("inlineCode",{parentName:"p"},"curve.rs")," file and set ",(0,i.yg)("inlineCode",{parentName:"p"},"SCALAR_LIMBS"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"BASE_LIMBS")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"G2_BASE_LIMBS")," (if G2 is needed) to a minimum number of ",(0,i.yg)("inlineCode",{parentName:"p"},"u64")," required to store a single scalar field / base field element respectively.",(0,i.yg)("br",{parentName:"p"}),"\n","e.g. for bn254, scalar field is 254 bit so ",(0,i.yg)("inlineCode",{parentName:"p"},"SCALAR_LIMBS")," is set to 4."),(0,i.yg)("h4",{id:"primitives"},"Primitives"),(0,i.yg)("p",null,"If your curve doesn't support some of the primitives (ntt/msm/poseidon/merkle tree/), or you simply don't want to include it, just remove a corresponding module from ",(0,i.yg)("inlineCode",{parentName:"p"},"src")," and then from ",(0,i.yg)("inlineCode",{parentName:"p"},"lib.rs")),(0,i.yg)("h4",{id:"g2"},"G2"),(0,i.yg)("p",null,"If your curve doesn't support G2 - remove all the code under ",(0,i.yg)("inlineCode",{parentName:"p"},'#[cfg(feature = "g2")]')," and remove the feature from ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/Cargo.toml#L29"},"Cargo.toml")," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/main/wrappers/rust/icicle-curves/icicle-bn254/build.rs#L15"},"build.rs"),"."),(0,i.yg)("p",null,"After this is done, add your new crate in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/tree/main/wrappers/rust/Cargo.toml"},"global Cargo.toml"),"."),(0,i.yg)("h3",{id:"golang"},"Golang"),(0,i.yg)("p",null,"Golang is WIP in v1, coming soon. Please checkout a previous ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/releases/tag/v0.1.0"},"release v0.1.0")," for golang bindings."))}c.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);