import{_ as E}from"./CAuusqHL.js";import{d as I,r as v,D as w,c as n,e as d,f as l,i as u,t as s,h as _,U as j,a3 as C,a4 as V,g as T}from"./-QCmQb-k.js";import{_ as B}from"./DlAUqK2U.js";import"./D2j10XRx.js";const D={id:"container-stars",class:"2xl:mx-auto 2xl:container mx-4 py-16"},M={id:"stars",class:"w-full relative flex items-center justify-center"},S={class:"bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40"},L={class:"text-4xl leading-9 text-white dark:text-white text-center"},P={key:0,class:"text-base leading-normal text-center text-white mx-3"},R={class:"flex flex-col sm:flex-row items-center lg:w-8/12 w-full mx-4 space-y-4 sm:space-y-0 sm:space-x-4"},U=["disabled"],$={key:1,class:"text-red-500 text-lg font-semibold leading-9"},m="/img/placeholder.jpg",q=I({__name:"NewsLetterCustom",props:{title:{},description:{},buttonText:{default:"Suscríbete"},image1:{default:()=>({src:"/img/home/personal-photo.webp",alt:"Imagen personal"})},image2:{default:()=>({src:"/img/home/hero-couple.webp",alt:"Pareja"})},image3:{default:()=>({src:"/img/home/hero-beach.webp",alt:"Playa"})}},setup(y){const a=y,e=v(""),i=v(!1),o=w(()=>e.value?e.value.length<5?"El correo electrónico es demasiado corto":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value)?"":"El formato del correo electrónico es incorrecto":"El correo electrónico es requerido"),k=w(()=>!o.value&&e.value);async function z(){if(k.value)try{i.value=!0,console.log(`Email ${e.value} added to subscribers`),e.value=""}catch(t){console.error("Error al suscribirse:",t)}finally{i.value=!1}}return(t,r)=>{var p,f,b,g,h,x;const c=E;return n(),d("div",D,[l("div",M,[u(c,{placeholder:"",class:"w-full h-full absolute z-0 hidden xl:block object-cover",src:((p=t.image1)==null?void 0:p.src)||m,alt:((f=t.image1)==null?void 0:f.alt)||"No alt text",format:"webp",loading:"lazy"},null,8,["src","alt"]),u(c,{placeholder:"",class:"w-full h-full object-cover absolute z-0 hidden sm:block xl:hidden",src:((b=t.image2)==null?void 0:b.src)||m,alt:((g=t.image2)==null?void 0:g.alt)||"No alt text",format:"webp",loading:"lazy"},null,8,["src","alt"]),u(c,{placeholder:"",class:"object-cover w-full h-full absolute z-0 sm:hidden",src:((h=t.image3)==null?void 0:h.src)||m,alt:((x=t.image3)==null?void 0:x.alt)||"No alt text",format:"webp",loading:"lazy"},null,8,["src","alt"]),l("div",S,[l("p",L,s(a.title),1),a.description?(n(),d("p",P,s(a.description),1)):_("",!0),l("div",R,[j(l("input",{"onUpdate:modelValue":r[0]||(r[0]=N=>e.value=N),type:"email",class:"border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50 border-white border text-base w-full font-medium leading-none text-white p-2 focus:outline-none placeholder-white",placeholder:"Email Address"},null,512),[[C,e.value]]),l("button",{beforeIcon:"MailIcon",afterIcon:"CheckIcon",onClick:V(z,["prevent"]),disabled:i.value||o.value.length>1,class:"mx-2 border border-zinc-300/50 dark:border-zinc-900/60 rounded-full pl-2 lg:pl-4 pr-2 py-2 backdrop-blur-lg bg-zinc-100/50 dark:bg-zinc-800/50"},[T(s(a.buttonText)+" ",1),r[1]||(r[1]=l("div",{class:"arrow-wrapper"},[l("div",{class:"arrow"})],-1))],8,U)]),o.value&&e.value.length>1?(n(),d("div",$,s(o.value),1)):_("",!0)])])])}}}),J=B(q,[["__scopeId","data-v-b58580f9"]]);export{J as default};