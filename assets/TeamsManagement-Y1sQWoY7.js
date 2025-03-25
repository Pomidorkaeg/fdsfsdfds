var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(s,a,r)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r,t=(e,s)=>{for(var a in s||(s={}))i.call(s,a)&&n(e,a,s[a]);if(r)for(var a of r(s))l.call(s,a)&&n(e,a,s[a]);return e},c=(e,r)=>s(e,a(r));import{j as d,S as o,W as m,Y as h,Z as x,Q as j,M as g}from"./ui-DYZMxKco.js";import{r as v}from"./vendor-BxabhSNU.js";import{B as p,L as u,I as b}from"./label-CPe3H02_.js";import{T as f}from"./textarea-DHrJZRWf.js";import{g as N,u as w}from"./teamsData-jUiTtHWj.js";import{t as k}from"./index-BMspNS-n.js";import{C as y,a as C,b as L,c as F,d as I}from"./card-C8tEZ_z_.js";const O=()=>{const[e,s]=v.useState(N()),[a,r]=v.useState(null),[i,l]=v.useState(null),n=e=>{const{name:s,value:a}=e.target;if(i)if(s.includes(".")){const[e,r]=s.split(".");l(c(t({},i),{[e]:c(t({},i[e]),{[r]:a})}))}else l(c(t({},i),"achievements"===s?{achievements:a.split("\n").filter((e=>""!==e.trim()))}:"foundedYear"===s?{foundedYear:parseInt(a)||0}:{[s]:a}))},O=()=>{r(null),l(null)},Y=()=>{if(i)try{w(i),s(e.map((e=>e.id===i.id?i:e))),k({title:"Команда обновлена",description:"Информация о команде успешно обновлена"}),r(null),l(null)}catch(a){k({variant:"destructive",title:"Ошибка",description:"Не удалось сохранить изменения"})}};return d.jsxs("div",{children:[d.jsx(y,{className:"mb-8 bg-gradient-to-br from-white to-gray-50",children:d.jsxs(C,{children:[d.jsxs(L,{className:"flex items-center",children:[d.jsx(o,{className:"h-5 w-5 mr-2 text-fc-green"}),"Управление командами"]}),d.jsx(F,{children:"Настройка информации о командах клуба"})]})}),d.jsx("div",{className:"grid grid-cols-1 gap-8",children:e.map((e=>d.jsx(y,{className:"overflow-hidden",children:a===e.id&&i?d.jsxs("div",{className:"p-6",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h3",{className:"text-lg font-bold",children:"Редактирование команды"}),d.jsxs("div",{className:"space-x-2",children:[d.jsx(p,{variant:"outline",size:"sm",onClick:O,children:"Отмена"}),d.jsx(p,{size:"sm",onClick:Y,children:"Сохранить"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx(u,{htmlFor:"name",children:"Название команды"}),d.jsx(b,{id:"name",name:"name",value:i.name,onChange:n})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"shortName",children:"Краткое название"}),d.jsx(b,{id:"shortName",name:"shortName",value:i.shortName,onChange:n})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"logo",children:"URL логотипа"}),d.jsx(b,{id:"logo",name:"logo",value:i.logo,onChange:n})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"backgroundImage",children:"URL фонового изображения"}),d.jsx(b,{id:"backgroundImage",name:"backgroundImage",value:i.backgroundImage,onChange:n})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx(u,{htmlFor:"primaryColor",children:"Основной цвет"}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("div",{className:"w-6 h-6 rounded-full border",style:{backgroundColor:i.primaryColor}}),d.jsx(b,{id:"primaryColor",name:"primaryColor",value:i.primaryColor,onChange:n})]})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"secondaryColor",children:"Дополнительный цвет"}),d.jsxs("div",{className:"flex items-center space-x-2",children:[d.jsx("div",{className:"w-6 h-6 rounded-full border",style:{backgroundColor:i.secondaryColor}}),d.jsx(b,{id:"secondaryColor",name:"secondaryColor",value:i.secondaryColor,onChange:n})]})]})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"description",children:"Описание"}),d.jsx(f,{id:"description",name:"description",value:i.description,onChange:n,rows:4})]})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx(u,{htmlFor:"coach",children:"Главный тренер"}),d.jsx(b,{id:"coach",name:"coach",value:i.coach,onChange:n})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"foundedYear",children:"Год основания"}),d.jsx(b,{id:"foundedYear",name:"foundedYear",type:"number",value:i.foundedYear,onChange:n})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"stadium",children:"Стадион"}),d.jsx(b,{id:"stadium",name:"stadium",value:i.stadium,onChange:n})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"address",children:"Адрес"}),d.jsx(b,{id:"address",name:"address",value:i.address,onChange:n})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"achievements",children:"Достижения (каждое с новой строки)"}),d.jsx(f,{id:"achievements",name:"achievements",value:i.achievements.join("\n"),onChange:n,rows:4})]}),d.jsxs("div",{className:"space-y-3 border p-4 rounded-md",children:[d.jsx(u,{children:"Социальные сети"}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"socialLinks.website",className:"text-sm",children:"Вебсайт"}),d.jsx(b,{id:"socialLinks.website",name:"socialLinks.website",value:i.socialLinks.website||"",onChange:n,placeholder:"https://example.com"})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"socialLinks.instagram",className:"text-sm",children:"Instagram"}),d.jsx(b,{id:"socialLinks.instagram",name:"socialLinks.instagram",value:i.socialLinks.instagram||"",onChange:n,placeholder:"https://instagram.com/teamname"})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"socialLinks.facebook",className:"text-sm",children:"Facebook"}),d.jsx(b,{id:"socialLinks.facebook",name:"socialLinks.facebook",value:i.socialLinks.facebook||"",onChange:n,placeholder:"https://facebook.com/teamname"})]}),d.jsxs("div",{children:[d.jsx(u,{htmlFor:"socialLinks.twitter",className:"text-sm",children:"Twitter"}),d.jsx(b,{id:"socialLinks.twitter",name:"socialLinks.twitter",value:i.socialLinks.twitter||"",onChange:n,placeholder:"https://twitter.com/teamname"})]})]})]})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"h-48 relative",children:[d.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`url('${e.backgroundImage}')`,backgroundSize:"cover",backgroundPosition:"center"}}),d.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(to right, ${e.primaryColor}DD, ${e.secondaryColor}99)`}}),d.jsxs("div",{className:"absolute inset-0 p-6 flex items-center",children:[d.jsxs("div",{className:"flex items-center",children:[d.jsx("img",{src:e.logo,alt:e.name,className:"w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"}),d.jsxs("div",{className:"ml-6",children:[d.jsx("h3",{className:"text-3xl font-bold text-white drop-shadow-md",children:e.name}),d.jsxs("p",{className:"text-white text-opacity-90",children:["Основан в ",e.foundedYear," году"]})]})]}),d.jsxs(p,{variant:"secondary",size:"sm",onClick:()=>(e=>{r(e.id),l(t({},e))})(e),className:"absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30",children:[d.jsx(m,{className:"h-4 w-4 mr-1"})," Изменить"]})]})]}),d.jsxs(I,{className:"pt-6",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center mb-3",children:[d.jsx(h,{className:"w-5 h-5 mr-2 text-fc-green"}),d.jsx("h4",{className:"font-semibold",children:"О команде"})]}),d.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),d.jsxs("div",{className:"flex items-center mt-6 mb-3",children:[d.jsx(x,{className:"w-5 h-5 mr-2 text-fc-green"}),d.jsx("h4",{className:"font-semibold",children:"Стадион"})]}),d.jsx("p",{className:"text-gray-600",children:e.stadium})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center mb-3",children:[d.jsx(j,{className:"w-5 h-5 mr-2 text-fc-green"}),d.jsx("h4",{className:"font-semibold",children:"Достижения"})]}),d.jsx("ul",{className:"space-y-2",children:e.achievements.map(((e,s)=>d.jsxs("li",{className:"flex items-start",children:[d.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-fc-green mt-2 mr-2"}),d.jsx("span",{className:"text-gray-600",children:e})]},s)))}),d.jsxs("div",{className:"flex items-center mt-6 mb-3",children:[d.jsx(g,{className:"w-5 h-5 mr-2 text-fc-green"}),d.jsx("h4",{className:"font-semibold",children:"Адрес"})]}),d.jsx("p",{className:"text-gray-600",children:e.address})]})]}),d.jsx("div",{className:"mt-6 pt-4 border-t border-gray-100",children:d.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.socialLinks.website&&d.jsxs("div",{className:"px-3 py-1 bg-gray-100 rounded text-sm text-gray-700 flex items-center",children:[d.jsx(Globe,{className:"w-4 h-4 mr-1"}),"Сайт"]}),e.socialLinks.instagram&&d.jsxs("div",{className:"px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-sm text-white flex items-center",children:[d.jsx(Instagram,{className:"w-4 h-4 mr-1"}),"Instagram"]}),e.socialLinks.facebook&&d.jsxs("div",{className:"px-3 py-1 bg-blue-600 rounded text-sm text-white flex items-center",children:[d.jsx(Facebook,{className:"w-4 h-4 mr-1"}),"Facebook"]}),e.socialLinks.twitter&&d.jsxs("div",{className:"px-3 py-1 bg-blue-400 rounded text-sm text-white flex items-center",children:[d.jsx(Twitter,{className:"w-4 h-4 mr-1"}),"Twitter"]})]})})]})]})},e.id)))})]})};export{O as default};
