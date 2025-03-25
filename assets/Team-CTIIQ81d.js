import{c as e,j as s,a,r as l}from"./index-DJNb8mov.js";import{I as r,a as t,T as i,N as d,F as o}from"./Footer-WiIJCyWA.js";import{g as n}from"./teamsData-jUiTtHWj.js";import{T as c}from"./trophy-DjH_7yvG.js";import{C as m}from"./calendar-CFOpHLv1.js";import{M as x}from"./map-pin-CP4nmVPt.js";import{S as h}from"./shield-BvRsgIIS.js";const g=e("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]),f=e("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),b=({team:e})=>s.jsxs("div",{className:"animate-fade-in",children:[s.jsxs("div",{className:"relative h-72 md:h-96 bg-cover bg-center rounded-xl overflow-hidden mb-8",style:{backgroundImage:`url('${e.backgroundImage}')`},children:[s.jsx("div",{className:"absolute inset-0",style:{backgroundColor:`${e.primaryColor}AA`,backgroundImage:`linear-gradient(135deg, ${e.primaryColor}DD, ${e.secondaryColor}99)`}}),s.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center",children:[s.jsx("img",{src:e.logo,alt:e.name,className:"h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"}),s.jsx("h1",{className:"text-3xl md:text-5xl font-bold drop-shadow-md mb-2",children:e.name}),s.jsxs("p",{className:"text-lg md:text-xl opacity-85 max-w-2xl drop-shadow-sm",children:["Основан в ",e.foundedYear," году"]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[s.jsxs("div",{className:"md:col-span-2 space-y-6",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md border-t-4",style:{borderTopColor:e.primaryColor},children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",style:{color:e.primaryColor},children:"О команде"}),s.jsx("p",{className:"text-gray-700 leading-relaxed",children:e.description})]}),s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md",children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",style:{color:e.primaryColor},children:"Достижения"}),s.jsx("ul",{className:"space-y-3",children:e.achievements.map(((a,l)=>s.jsxs("li",{className:"flex items-start",children:[s.jsx(c,{className:"h-5 w-5 mr-2 flex-shrink-0 mt-0.5",style:{color:e.primaryColor}}),s.jsx("span",{className:"text-gray-700",children:a})]},l)))})]})]}),s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md",children:[s.jsx("h2",{className:"text-xl font-bold mb-4",style:{color:e.primaryColor},children:"Информация"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-start",children:[s.jsx("div",{className:"p-2 rounded-full mr-3",style:{backgroundColor:`${e.primaryColor}15`},children:s.jsx(m,{className:"h-5 w-5",style:{color:e.primaryColor}})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-gray-500",children:"Год основания"}),s.jsx("p",{className:"font-medium",children:e.foundedYear})]})]}),s.jsxs("div",{className:"flex items-start",children:[s.jsx("div",{className:"p-2 rounded-full mr-3",style:{backgroundColor:`${e.primaryColor}15`},children:s.jsx(c,{className:"h-5 w-5",style:{color:e.primaryColor}})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-gray-500",children:"Стадион"}),s.jsx("p",{className:"font-medium",children:e.stadium})]})]}),s.jsxs("div",{className:"flex items-start",children:[s.jsx("div",{className:"p-2 rounded-full mr-3",style:{backgroundColor:`${e.primaryColor}15`},children:s.jsx(x,{className:"h-5 w-5",style:{color:e.primaryColor}})}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-gray-500",children:"Адрес"}),s.jsx("p",{className:"font-medium",children:e.address})]})]})]}),s.jsxs("div",{className:"mt-6 pt-4 border-t border-gray-100",children:[s.jsx("h3",{className:"text-sm font-medium text-gray-500 mb-3",children:"Социальные сети"}),s.jsxs("div",{className:"flex space-x-3",children:[e.socialLinks.website&&s.jsx("a",{href:e.socialLinks.website,target:"_blank",rel:"noopener noreferrer",className:a("p-2 rounded-full transition-colors duration-200","bg-gray-100 hover:bg-gray-200"),children:s.jsx(f,{className:"h-5 w-5 text-gray-700"})}),e.socialLinks.instagram&&s.jsx("a",{href:e.socialLinks.instagram,target:"_blank",rel:"noopener noreferrer",className:a("p-2 rounded-full transition-colors duration-200","bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"),children:s.jsx(r,{className:"h-5 w-5 text-white"})}),e.socialLinks.facebook&&s.jsx("a",{href:e.socialLinks.facebook,target:"_blank",rel:"noopener noreferrer",className:a("p-2 rounded-full transition-colors duration-200","bg-blue-600 hover:bg-blue-700"),children:s.jsx(t,{className:"h-5 w-5 text-white"})}),e.socialLinks.twitter&&s.jsx("a",{href:e.socialLinks.twitter,target:"_blank",rel:"noopener noreferrer",className:a("p-2 rounded-full transition-colors duration-200","bg-blue-400 hover:bg-blue-500"),children:s.jsx(i,{className:"h-5 w-5 text-white"})})]})]})]}),s.jsxs("div",{className:"p-6 rounded-xl shadow-md text-white",style:{background:`linear-gradient(135deg, ${e.primaryColor}, ${e.secondaryColor})`},children:[s.jsx("h2",{className:"text-xl font-bold mb-2",children:"Главный тренер"}),s.jsx("p",{className:"opacity-90 text-lg",children:e.coach})]})]})]})]}),u=()=>{const[e,r]=l.useState("details"),[t,i]=l.useState("all"),[c,x]=l.useState(null),[f,u]=l.useState("gudauta"),[p,j]=l.useState([]);l.useEffect((()=>{const e=n();j(e)}),[]);const y="gudauta"===f?[{id:"1",name:"Сергей Павлович Иванов",role:"Главный тренер",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",since:"2021",experience:10,biography:"Опытный тренер с многолетним опытом работы в профессиональных клубах.",teamId:"gudauta"},{id:"2",name:"Алексей Николаевич Петров",role:"Ассистент тренера",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",since:"2022",experience:5,biography:"Бывший профессиональный игрок, перешедший на тренерскую работу.",teamId:"gudauta"}]:[{id:"3",name:"Дмитрий Александрович Сидоров",role:"Тренер вратарей",image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",since:"2022",experience:7,biography:"Специализируется на подготовке молодых вратарей высокого уровня.",teamId:"gudauta-school"},{id:"4",name:"Игорь Владимирович Кузнецов",role:"Физиотерапевт",image:"https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",since:"2023",experience:8,biography:"Имеет большой опыт работы со спортсменами разных дисциплин.",teamId:"gudauta-school"}],v=("gudauta"===f?[{id:"1",name:"Александр Иванов",position:"Вратарь",number:1,birthDate:"15.05.1992",height:192,weight:87,nationality:"Россия",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",matches:24,goals:0,assists:1,yellowCards:1,redCards:0,teamId:"gudauta"},{id:"2",name:"Дмитрий Петров",position:"Защитник",number:4,birthDate:"23.09.1994",height:186,weight:82,nationality:"Россия",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",matches:22,goals:2,assists:3,yellowCards:4,redCards:0,teamId:"gudauta"},{id:"3",name:"Артем Смирнов",position:"Защитник",number:6,birthDate:"07.12.1995",height:184,weight:78,nationality:"Россия",image:"https://images.unsplash.com/photo-1539614474467-f8a89c5aa8f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",matches:26,goals:0,assists:1,yellowCards:5,redCards:1,teamId:"gudauta"}]:[{id:"4",name:"Игорь Соколов",position:"Полузащитник",number:8,birthDate:"18.03.1993",height:177,weight:72,nationality:"Россия",image:"https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",matches:28,goals:5,assists:7,yellowCards:3,redCards:0,teamId:"gudauta-school"},{id:"5",name:"Сергей Козлов",position:"Полузащитник",number:10,birthDate:"05.07.1996",height:179,weight:74,nationality:"Россия",image:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",matches:25,goals:8,assists:10,yellowCards:2,redCards:0,teamId:"gudauta-school"},{id:"6",name:"Андрей Попов",position:"Нападающий",number:9,birthDate:"12.02.1994",height:183,weight:78,nationality:"Россия",image:"https://images.unsplash.com/photo-1584634731339-252e5223ee7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",matches:27,goals:15,assists:5,yellowCards:2,redCards:0,teamId:"gudauta-school"}]).filter((e=>"all"===t||e.position===t)),N=p.find((e=>e.id===f)),w=(null==N?void 0:N.primaryColor)||"#2e7d32",k=(null==N?void 0:N.secondaryColor)||"#ffeb3b";return s.jsxs("div",{className:"min-h-screen flex flex-col",children:[s.jsx(d,{}),s.jsxs("main",{className:"flex-grow pt-16 page-transition",children:[s.jsxs("div",{className:"relative text-white py-10",style:{backgroundColor:w,background:`linear-gradient(135deg, ${w}, ${k})`},children:[s.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundBlendMode:"overlay",opacity:.3}}),s.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex flex-col items-center text-center",children:[s.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6",children:s.jsx(h,{className:"w-8 h-8"})}),s.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Наши команды"}),s.jsx("div",{className:"mt-6 mb-8",children:s.jsx("div",{className:"inline-flex p-1 bg-white/10 backdrop-blur-sm rounded-full shadow-lg",children:p.map((e=>s.jsx("button",{onClick:()=>{u(e.id),r("details")},className:a("px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",f===e.id?`bg-white text-[${e.primaryColor}] shadow-md`:"text-white hover:bg-white/20"),style:{color:f===e.id?e.primaryColor:""},children:e.name},e.id)))})})]})})]}),s.jsx("div",{className:"bg-white shadow-md sticky top-16 z-20",children:s.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:s.jsxs("div",{className:"flex overflow-x-auto no-scrollbar",children:[s.jsx("button",{onClick:()=>r("details"),className:a("px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap","details"===e?`border-[${w}] text-[${w}]`:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),style:{borderColor:"details"===e?w:"transparent",color:"details"===e?w:""},children:"О команде"}),s.jsx("button",{onClick:()=>r("players"),className:a("px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap","players"===e?`border-[${w}] text-[${w}]`:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),style:{borderColor:"players"===e?w:"transparent",color:"players"===e?w:""},children:"Игроки"}),s.jsx("button",{onClick:()=>r("staff"),className:a("px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap","staff"===e?`border-[${w}] text-[${w}]`:"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),style:{borderColor:"staff"===e?w:"transparent",color:"staff"===e?w:""},children:"Тренерский штаб"})]})})}),s.jsxs("div",{className:"py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:["details"===e&&N&&s.jsx(b,{team:N}),"players"===e&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mb-8 flex justify-center",children:s.jsxs("div",{className:"inline-flex p-1 bg-gray-100 rounded-full",children:[s.jsx("button",{onClick:()=>i("all"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","all"===t?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"all"===t?w:""},children:"Все"}),s.jsx("button",{onClick:()=>i("Вратарь"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","Вратарь"===t?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"Вратарь"===t?w:""},children:"Вратари"}),s.jsx("button",{onClick:()=>i("Защитник"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","Защитник"===t?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"Защитник"===t?w:""},children:"Защитники"}),s.jsx("button",{onClick:()=>i("Полузащитник"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","Полузащитник"===t?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"Полузащитник"===t?w:""},children:"Полузащитники"}),s.jsx("button",{onClick:()=>i("Нападающий"),className:a("px-4 py-2 rounded-full text-sm font-medium transition-all duration-300","Нападающий"===t?"text-white":"text-gray-700 hover:bg-gray-200"),style:{backgroundColor:"Нападающий"===t?w:""},children:"Нападающие"})]})}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:v.map((e=>s.jsx("div",{onClick:()=>(e=>{x(e)})(e),className:a("relative bg-white rounded-xl overflow-hidden shadow-sm border transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1",(null==c?void 0:c.id)===e.id?`border-[${w}] ring-2 ring-[${w}]/20`:`border-gray-200 hover:border-[${w}]/50`),style:{borderColor:(null==c?void 0:c.id)===e.id?w:"",boxShadow:(null==c?void 0:c.id)===e.id?`0 0 0 2px ${w}20`:""},children:s.jsxs("div",{className:"flex",children:[s.jsxs("div",{className:"w-1/3 relative",children:[s.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover aspect-[3/4]"}),s.jsx("div",{className:"absolute top-0 left-0 w-full h-full",style:{background:`linear-gradient(to right, ${w}80, transparent)`}}),s.jsx("div",{className:"absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg text-white",style:{backgroundColor:w},children:e.number})]}),s.jsx("div",{className:"w-2/3 p-4",children:s.jsxs("div",{className:"flex flex-col h-full",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs font-medium mb-1",style:{color:w},children:e.position}),s.jsx("h3",{className:"text-lg font-bold mb-3",children:e.name})]}),s.jsxs("div",{className:"mt-auto grid grid-cols-3 gap-2 text-center",children:[s.jsxs("div",{className:"bg-gray-50 p-2 rounded",children:[s.jsx("div",{className:"text-xs text-gray-500",children:"Матчи"}),s.jsx("div",{className:"font-bold",children:e.matches})]}),s.jsxs("div",{className:"bg-gray-50 p-2 rounded",children:[s.jsx("div",{className:"text-xs text-gray-500",children:"Голы"}),s.jsx("div",{className:"font-bold",children:e.goals})]}),s.jsxs("div",{className:"bg-gray-50 p-2 rounded",children:[s.jsx("div",{className:"text-xs text-gray-500",children:"Передачи"}),s.jsx("div",{className:"font-bold",children:e.assists})]})]})]})})]})},e.id)))}),c&&s.jsxs("div",{className:"mt-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in",children:[s.jsx("div",{className:"p-6 border-b",style:{borderColor:`${w}30`},children:s.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Информация об игроке"})}),s.jsxs("div",{className:"flex flex-col md:flex-row",children:[s.jsxs("div",{className:"md:w-1/3 relative",children:[s.jsx("img",{src:c.image,alt:c.name,className:"w-full h-full object-cover aspect-square md:aspect-auto"}),s.jsx("div",{className:"absolute top-4 left-4 w-16 h-16 flex items-center justify-center rounded-full font-bold text-3xl text-white shadow-lg",style:{background:`linear-gradient(135deg, ${w}, ${k})`},children:c.number})]}),s.jsxs("div",{className:"md:w-2/3 p-6",children:[s.jsx("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mb-6",children:s.jsxs("div",{children:[s.jsx("div",{className:"inline-block px-3 py-1 rounded-full text-sm font-medium mb-2",style:{backgroundColor:`${w}10`,color:w},children:c.position}),s.jsx("h3",{className:"text-2xl font-bold mb-1",children:c.name}),s.jsxs("div",{className:"flex items-center text-gray-500",children:[s.jsx(g,{size:16,className:"mr-1"}),s.jsx("span",{children:c.nationality})]})]})}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[s.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[s.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Дата рождения"}),s.jsxs("div",{className:"font-medium flex items-center",children:[s.jsx(m,{size:16,className:"mr-1",style:{color:w}}),c.birthDate]})]}),s.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[s.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Рост"}),s.jsxs("div",{className:"font-medium",children:[c.height," см"]})]}),s.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[s.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Вес"}),s.jsxs("div",{className:"font-medium",children:[c.weight," кг"]})]}),s.jsxs("div",{className:"bg-gray-50 p-3 rounded-lg",children:[s.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Матчи"}),s.jsx("div",{className:"font-medium",children:c.matches})]})]}),s.jsx("h4",{className:"text-lg font-bold mb-4",children:"Статистика"}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[s.jsx("div",{className:"relative p-6 rounded-lg text-center overflow-hidden",style:{background:`linear-gradient(135deg, ${w}20, ${w}05)`,borderLeft:`4px solid ${w}`},children:s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-3xl font-bold mb-1",style:{color:w},children:c.goals}),s.jsx("div",{className:"text-xs text-gray-500",children:"Голы"})]})}),s.jsx("div",{className:"relative p-6 rounded-lg text-center overflow-hidden",style:{background:`linear-gradient(135deg, ${w}20, ${w}05)`,borderLeft:`4px solid ${w}`},children:s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-3xl font-bold mb-1",style:{color:w},children:c.assists}),s.jsx("div",{className:"text-xs text-gray-500",children:"Передачи"})]})}),s.jsx("div",{className:"relative p-6 rounded-lg text-center overflow-hidden",style:{background:"linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.05))",borderLeft:"4px solid #f59e0b"},children:s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-3xl font-bold mb-1 text-amber-500",children:c.yellowCards}),s.jsx("div",{className:"text-xs text-gray-500",children:"Жёлтые карточки"})]})}),s.jsx("div",{className:"relative p-6 rounded-lg text-center overflow-hidden",style:{background:"linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.05))",borderLeft:"4px solid #ef4444"},children:s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-3xl font-bold mb-1 text-red-500",children:c.redCards}),s.jsx("div",{className:"text-xs text-gray-500",children:"Красные карточки"})]})})]})]})]})]})]}),"staff"===e&&s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:y.map((e=>s.jsxs("div",{className:"bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 flex card-hover animate-fade-in",children:[s.jsxs("div",{className:"w-1/3 relative",children:[s.jsx("img",{src:e.image,alt:e.name,className:"w-full h-full object-cover aspect-square"}),s.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(to right, ${w}90, transparent)`}})]}),s.jsxs("div",{className:"w-2/3 p-6",children:[s.jsx("div",{className:"inline-block px-3 py-1 rounded-full text-sm font-medium mb-2",style:{backgroundColor:`${w}10`,color:w},children:e.role}),s.jsx("h3",{className:"text-xl font-bold mb-4",children:e.name}),s.jsx("p",{className:"text-gray-600 mb-4 text-sm",children:e.biography}),s.jsxs("div",{className:"flex items-center text-gray-500",children:[s.jsx(m,{size:16,className:"mr-1"}),s.jsxs("span",{children:["В клубе с ",e.since," года"]})]})]})]},e.id)))})]})]}),s.jsx(o,{})]})};export{u as default};
