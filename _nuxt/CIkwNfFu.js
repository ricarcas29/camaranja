import{_ as m}from"./CAuusqHL.js";import{_ as v}from"./CQWejii3.js";import{d as y,c as l,O as f,w,f as t,i as g,e as o,F as p,Q as x,h as _,t as b}from"./-QCmQb-k.js";const k={class:"relative flex h-full flex-col justify-center overflow-hidden"},j={class:"relative h-full w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"},z={class:"w-full h-full overflow-hidden rounded-xl border border-gray-200 opacity-100 transition group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"},N={key:0,class:"grid grid-cols-3 gap-3"},B={class:"absolute bottom-0 z-20 pb-4 ps-4 transition group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:scale-105"},C={class:"font-serif w-full text-wrap text-xl lg:text-lg md:text-sm font-bold text-white shadow-sm"},O=y({__name:"GalleryListItem",props:{gallery:{type:Object,required:!0,validator:e=>!!e._path&&!!e.title}},setup(e){return(L,V)=>{const a=m,h=v;return l(),f(h,{to:e.gallery._path,class:"group"},{default:w(()=>{var r,s,c,i,n;return[t("div",k,[t("div",j,[t("div",z,[g(a,{src:((r=e.gallery.cover)==null?void 0:r.src)||"img/placeholder.jpg",alt:((s=e.gallery.cover)==null?void 0:s.alt)||e.gallery.title,width:(c=e.gallery.cover)==null?void 0:c.width,height:(i=e.gallery.cover)==null?void 0:i.height,class:"h-full w-full object-cover object-center group-hover:opacity-75",sizes:"sm:100vw md:50vw lg:30vw",loading:"lazy",placeholder:""},null,8,["src","alt","width","height"]),(n=e.gallery.images)!=null&&n.length?(l(),o("div",N,[(l(!0),o(p,null,x(e.gallery.images.slice(0,4),(d,u)=>(l(),o("div",{key:u,class:"aspect-square w-full rounded-lg overflow-hidden group-hover:opacity-75 dark:bg-zinc-800"},[g(a,{src:d.src,alt:d.alt,class:"w-full object-cover object-center",loading:"lazy",sizes:"sm:100vw md:50vw lg:30vw",placeholder:""},null,8,["src","alt"])]))),128))])):_("",!0)]),t("div",B,[t("h1",C,b(e.gallery.title),1)])])])]}),_:1},8,["to"])}}});export{O as _};