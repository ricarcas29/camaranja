import{aD as S,B as j,r as P,o as T,a3 as C,aE as D,I as H,F as U,L}from"./VUR2Cu99.js";var v;let N=Symbol("headlessui.useid"),R=0;const Y=(v=S)!=null?v:function(){return j(N,()=>`${++R}`)()};function b(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function O(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,O),r}function w(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function q(e,t){let n=P(w(e.value.type,e.value.as));return T(()=>{n.value=w(e.value.type,e.value.as)}),C(()=>{var r;n.value||b(t)&&b(t)instanceof HTMLButtonElement&&!((r=b(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var B=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(B||{}),x=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(x||{});function z({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...a}){var i;let s=$(r,n),u=Object.assign(a,{props:s});if(e||t&2&&s.static)return m(u);if(t&1){let f=(i=s.unmount)==null||i?0:1;return O(f,{0(){return null},1(){return m({...a,props:{...s,hidden:!0,style:{display:"none"}}})}})}return m(u)}function m({props:e,attrs:t,slots:n,slot:r,name:a}){var i,s;let{as:u,...f}=M(e,["unmount","static"]),l=(i=n.default)==null?void 0:i.call(n,r),g={};if(r){let c=!1,h=[];for(let[d,p]of Object.entries(r))typeof p=="boolean"&&(c=!0),p===!0&&h.push(d);c&&(g["data-headlessui-state"]=h.join(" "))}if(u==="template"){if(l=E(l??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[c,...h]=l??[];if(!F(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(o=>o.trim()).filter((o,y,k)=>k.indexOf(o)===y).sort((o,y)=>o.localeCompare(y)).map(o=>`  - ${o}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(o=>`  - ${o}`).join(`
`)].join(`
`));let d=$((s=c.props)!=null?s:{},f,g),p=D(c,d,!0);for(let o in d)o.startsWith("on")&&(p.props||(p.props={}),p.props[o]=d[o]);return p}return Array.isArray(l)&&l.length===1?l[0]:l}return H(u,Object.assign({},f,g),{default:()=>l})}function E(e){return e.flatMap(t=>t.type===U?E(t.children):[t])}function $(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(r[a])):t[a]=r[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](a,...i){let s=n[r];for(let u of s){if(a instanceof Event&&a.defaultPrevented)return;u(a,...i)}}});return t}function M(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function F(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let A=Symbol("Context");var I=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(I||{});function G(){return j(A,null)}function J(e){L(A,e)}var W=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(W||{});export{z as A,B as N,I as a,W as b,Y as i,G as l,b as o,q as s,J as t,O as u};
