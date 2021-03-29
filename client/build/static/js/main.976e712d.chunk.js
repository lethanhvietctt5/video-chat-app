(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{133:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=133},134:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n(28),a=n.n(l),s=n(6),r=(n(79),n(3)),i=n(7),o=n(4),u=n(20),d=n.n(u),b=n(33),j="LOGIN_SUCCESS",m="LOGIN_FAILED",x="REGISTER_SUCCESS",h="REGISTER_FAILED",f="LOAD_USER_SUCCESS",p="LOAD_USER_FAILED",g="LOG_OUT",O="ADD_ALERT",v="REMOVE_ALERT",y=n(68),w=n.n(y).a.create({baseURL:"https://room-call-chat-app.herokuapp.com/",headers:{"Content-Type":"application/json; charset=UTF-8"}});w.interceptors.response.use((function(e){return e}),(function(e){return e.response.status,Promise.reject(e)}));var N=w,k=n(135),S=function(e){var t=e.msg,n=e.type,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(e){var l=Object(k.a)();e({type:O,payload:{id:l,msg:t,type:n}}),setTimeout((function(){return e({type:v,payload:{id:l,msg:t}})}),c)}},E=function(){return function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.get("/auth");case 3:n=e.sent,t({type:f,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:p});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},A=n(0);var C=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return{type:g}}})((function(e){var t=e.logout,n=e.isAuthenticated,l=Object(c.useState)(Object(k.a)()),a=Object(o.a)(l,2),i=a[0],u=a[1];return n?Object(A.jsx)("div",{className:"flex h-full bg-img-background bg-cover bg-no-repeat w-full justify-center items-center",children:Object(A.jsx)("div",{className:"flex w-1/2 h-full items-center justify-center",children:Object(A.jsxs)("div",{className:"w-3/4",children:[Object(A.jsxs)("div",{className:"flex justify-center",children:[Object(A.jsx)(s.b,{to:"/join",className:"flex justify-end min-w-3/4 mr-6",children:Object(A.jsxs)("button",{className:"justify-center flex min-w-1/2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none",children:[Object(A.jsx)("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M3.7 7.7a.996.996 0 0 1 1.41 0L12 14.59l4.29-4.3L14.7 8.7c-.62-.62-.18-1.7.71-1.7H20c.55 0 1 .45 1 1v4.59c0 .89-1.08 1.34-1.71.71l-1.59-1.59l-5 5a.996.996 0 0 1-1.41 0L3.7 9.11c-.38-.38-.38-1.02 0-1.41z",fill:"currentColor"})}),Object(A.jsx)("div",{children:"Join meeting"})]})}),Object(A.jsx)(s.b,{to:"/rooms/".concat(i),className:"flex justify-start min-w-3/4 ml-6",children:Object(A.jsxs)("button",{onClick:function(){u(Object(k.a)())},className:"justify-center focus:outline-none min-w-1/2 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:[Object(A.jsx)("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",children:Object(A.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"currentColor"})}),Object(A.jsx)("div",{children:Object(A.jsx)("div",{children:"Create a meeting"})})]})})]}),Object(A.jsx)("div",{className:"flex justify-center mt-6",children:Object(A.jsx)("div",{className:"text-white text-xl text hover:underline cursor-pointer",children:n?Object(A.jsx)(s.b,{to:"/login",onClick:function(){t()},children:"Logout"}):null})})]})})}):Object(A.jsx)(r.a,{to:"/login"})}));var L=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,alerts:e.alerts}}),{login:function(e,t){return function(){var n=Object(b.a)(d.a.mark((function n(c){var l,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l={email:e,password:t},n.prev=1,n.next=4,N.post("/login",l);case 4:a=n.sent,c({type:j,payload:a.data}),c(E()),c(S({msg:"Login successful!",type:"success"})),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),c({type:m}),c(S({msg:"Login failed!",type:"failed"}));case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,l=e.alerts,a=Object(c.useState)(""),i=Object(o.a)(a,2),u=i[0],d=i[1],b=Object(c.useState)(""),j=Object(o.a)(b,2),m=j[0],x=j[1];function h(e){"email"===e.target.id?d(e.target.value):x(e.target.value)}return n?Object(A.jsx)(r.a,{to:"/"}):Object(A.jsx)("div",{className:"w-full h-full bg-img-background bg-cover bg-no-repeat",children:Object(A.jsx)("div",{className:"w-full h-full flex justify-center items-center md:block",children:Object(A.jsx)("div",{className:"h-full md:w-1/3 w-3/4 min-w-min px-3 bg-white bg-opacity-50 shadow-2xl flex items-center justify-center",children:Object(A.jsxs)("form",{className:"flex flex-col items-center justify-center sm:justify-start rounded",onSubmit:function(e){e.preventDefault(),t(u,m)},children:[Object(A.jsxs)("div",{className:"flex flex-col justify-center text-xl",children:[Object(A.jsx)("div",{className:"text-6xl md:text-4xl xl:text-5xl 2xl:text-7xl mb-12 flex justify-center",children:"Sign in"}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"email",children:"Email"}),Object(A.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"text",placeholder:"Email",onChange:h,value:u})]}),Object(A.jsxs)("div",{className:"",children:[Object(A.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"password",children:"Password"}),Object(A.jsx)("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",onChange:h,value:m})]}),Object(A.jsxs)("div",{className:"flex text-xs xl:text-sm 2xl:text-base",children:[Object(A.jsx)("div",{className:"text-black text-opacity-60 mr-2",children:"If you don't have account ?"}),Object(A.jsx)("div",{children:Object(A.jsx)(s.b,{to:"/register",className:"text-blue-500",children:"Sign up"})})]}),Object(A.jsx)("div",{className:"flex items-center justify-center mt-2",children:Object(A.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign In"})})]}),Object(A.jsx)("div",{className:"w-full mt-3",children:l.map((function(e,t){return"failed"===e.type?Object(A.jsxs)("div",{className:"flex items-center bg-red-200 border border-red-500 text-red-900 rounded text-xl p-2 mb-1",children:[Object(A.jsx)("div",{className:"mr-3 text-xl",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z",fill:"currentColor"})})})}),Object(A.jsx)("div",{className:"text-base",children:e.msg})]},t):Object(A.jsxs)("div",{className:"flex items-center bg-green-200 border border-green-500 text-green-900 rounded text-xl p-2 mb-1",children:[Object(A.jsx)("div",{className:"mr-3 text-xl",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z",fill:"currentColor"})})})}),Object(A.jsx)("div",{className:"text-base",children:e.msg})]},t)}))})]})})})})})),I=n(31),z=n(5),M=n(13),D=n.n(M);function R(e){var t=e.register,n=e.alerts,l=Object(c.useState)({}),a=Object(o.a)(l,2),r=a[0],i=a[1];function u(e){i(Object(z.a)(Object(z.a)({},r),{},Object(I.a)({},e.target.id,e.target.value)))}return Object(A.jsx)("div",{className:"h-full bg-img-background bg-cover bg-no-repeat flex justify-center md:block",children:Object(A.jsx)("div",{className:"h-full w-3/4 md:w-1/3 items-center flex justify-center bg-white bg-opacity-50 shadow-2xl rounded px-4",children:Object(A.jsxs)("form",{className:"max-w-lg text-xl",onSubmit:function(e){e.preventDefault(),console.log(r),t(r)},children:[Object(A.jsx)("div",{className:"text-6xl md:text-4xl xl:text-5xl 2xl:text-7xl mb-12 flex justify-center",children:"Sign up"}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"name",children:"Full name"}),Object(A.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white",id:"name",type:"text",placeholder:"Name",onChange:u})]}),Object(A.jsxs)("div",{className:"mb-4",children:[Object(A.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"email",children:"Email"}),Object(A.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white",id:"email",type:"text",placeholder:"Email",onChange:u})]}),Object(A.jsx)("div",{className:"flex flex-wrap -mx-3",children:Object(A.jsxs)("div",{className:"w-full px-3",children:[Object(A.jsx)("label",{className:"block tracking-wide text-gray-700 font-bold mb-2",htmlFor:"password",children:"Password"}),Object(A.jsx)("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"password",type:"password",placeholder:"******************",onChange:u})]})}),Object(A.jsxs)("div",{className:"flex text-xs xl:text-sm 2xl:text-base mb-1",children:[Object(A.jsx)("div",{className:"text-black text-opacity-60 mr-2",children:"If you have account ?"}),Object(A.jsx)("div",{children:Object(A.jsx)(s.b,{to:"/login",className:"text-blue-500",children:"Login"})})]}),Object(A.jsx)("div",{className:"flex items-center justify-center",children:Object(A.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign up"})}),Object(A.jsx)("div",{className:"w-full mt-3",children:n.map((function(e,t){return"failed"===e.type?Object(A.jsxs)("div",{className:"flex items-center bg-red-200 border border-red-500 text-red-900 rounded text-xl p-2 mb-1",children:[Object(A.jsx)("div",{className:"mr-3 text-xl",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z",fill:"currentColor"})})})}),Object(A.jsx)("div",{className:"text-base",children:e.msg})]},t):Object(A.jsxs)("div",{className:"flex items-center bg-green-200 border border-green-500 text-green-900 rounded text-xl p-2 mb-1",children:[Object(A.jsx)("div",{className:"mr-3 text-xl",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 12 12",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10zm-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zm.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5l.008-.09z",fill:"currentColor"})})})}),Object(A.jsx)("div",{className:"text-base",children:e.msg})]},t)}))})]})})})}R.prototype={alerts:D.a.array,register:D.a.func.isRequired};var B=Object(i.b)((function(e){return{alerts:e.alerts}}),{register:function(e){var t=e.name,n=e.email,c=e.password;return function(){var e=Object(b.a)(d.a.mark((function e(l){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={name:t,email:n,password:c},e.next=4,N.post("/register",a);case 4:s=e.sent,l({type:x,payload:s.data}),l(S({msg:"Register successful!",type:"success"})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),l({type:h}),l(S({msg:"Register failed!",type:"failed"}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}})(R),T=n(32);var U=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}))((function(e){e.isAuthenticated;var t=e.room,n=e.user,l=e.socket,a=Object(c.useState)([]),s=Object(o.a)(a,2),r=s[0],i=s[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),b=d[0],j=d[1];return Object(c.useEffect)((function(){return l&&l.on("message",(function(e){i([].concat(Object(T.a)(r),[e]));var t=document.getElementById("messages");t.scrollTop=t.scrollHeight})),function(){null===l||void 0===l||l.off("message")}})),Object(A.jsxs)("div",{className:"h-full w-full",children:[Object(A.jsx)("div",{className:"h-full mx-2",children:Object(A.jsx)("div",{id:"messages",className:"h-full pb-16 text-sm pt-2 overflow-y-auto no-scrollbar",children:Object(A.jsx)("div",{className:"",children:null===r||void 0===r?void 0:r.map((function(e,t){return function(e,t){return"Admin"!==e.name?Object(A.jsx)("div",{className:e.name===n.name?"flex justify-end":"flex justify-start",children:Object(A.jsxs)("div",{className:e.name===n.name?"w-auto max-w-full inline-block p-2 rounded-xl bg-blue-500 my-1 text-white":"w-auto max-w-full inline-block p-2 rounded-xl bg-gray-400 my-1",children:[Object(A.jsx)("p",{className:"text-xs font-bold w-auto max-w-full",children:e.name}),Object(A.jsx)("p",{className:"w-auto max-w-full",children:e.msg})]},t)}):Object(A.jsx)("div",{className:"flex justify-center text-gray-400",children:e.msg},t)}(e,t)}))})})}),Object(A.jsx)("div",{className:"fixed bottom-0 w-1/4 bg-white",children:Object(A.jsxs)("form",{className:"h-16 w-full flex border-t p-2 items-center justify-center",onSubmit:function(e){e.preventDefault(),b&&l&&(l.emit("sendMessage",{name:n.name,msg:b,room:t}),j(""))},children:[Object(A.jsx)("div",{className:"h-full w-11/12 p-1 flex items-center",children:Object(A.jsx)("input",{type:"text",name:"message",autoComplete:"off",placeholder:"Ab",value:b,onChange:function(e){e.preventDefault(),j(e.target.value)},className:"h-full w-full text-xs no-scrollbar resize-none outline-none border-gray-400 border rounded-full p-2"})}),Object(A.jsx)("div",{className:"h-full flex items-center w-1/12 text-2xl mr-2",children:Object(A.jsx)("button",{type:"submit",className:"focus:outline-none",children:Object(A.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 15 15",children:Object(A.jsx)("g",{fill:"none",children:Object(A.jsx)("path",{d:"M14.5.5l.46.197a.5.5 0 0 0-.657-.657L14.5.5zm-14 6l-.197-.46a.5.5 0 0 0-.06.889L.5 6.5zm8 8l-.429.257a.5.5 0 0 0 .889-.06L8.5 14.5zM14.303.04l-14 6l.394.92l14-6l-.394-.92zM.243 6.93l5 3l.514-.858l-5-3l-.514.858zM5.07 9.757l3 5l.858-.514l-3-5l-.858.514zm3.889 4.94l6-14l-.92-.394l-6 14l.92.394zM14.146.147l-9 9l.708.707l9-9l-.708-.708z",fill:"currentColor"})})})})})]})})]})})),_=n(69),F=n.n(_),V=n(70),G=n.n(V);var H=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{loadUser:E})((function(e){e.isAuthenticated;var t=e.user,n=Object(c.useState)(Object(r.g)().id),l=Object(o.a)(n,1)[0],a=Object(c.useState)((function(){return F()("https://room-call-chat-app.herokuapp.com/",{transports:["websocket"],upgrade:!1})})),s=Object(o.a)(a,1)[0],i=Object(c.useState)([]),u=Object(o.a)(i,2),d=u[0],b=u[1],j=Object(c.useState)((function(){return new G.a})),m=Object(o.a)(j,1)[0],x=Object(c.useState)(),h=Object(o.a)(x,2),f=h[0],p=h[1];function g(e){var t=document.getElementById("videoContainer"),n=document.querySelectorAll("#videoContainer > *"),c=[];console.log(e,n.length,t.childNodes.length);for(var l=0;l<t.childNodes.length;l++)e.includes(t.childNodes[l].id)||c.push(t.childNodes[l]),console.log(c);c.forEach((function(e){t.removeChild(e)}))}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!document.getElementById(e)){var c=document.createElement("video"),l=document.createElement("div"),a=document.getElementById("videoContainer");l.className="max-w-full min-w-min flex justify-center items-center",c.srcObject=t,n&&(c.muted="muted"),l.id=e;var s=c.play();void 0!==s&&s.then((function(e){})).catch((function(e){console.log(e)})),l.appendChild(c),a&&a.appendChild(l)}}return Object(c.useEffect)((function(){E()}),[]),Object(c.useEffect)((function(){null===m||void 0===m||m.on("open",(function(e){p(e),s.emit("joinRoom",{name:t.name,room:l,peerID:e}),s.on("allMembers",(function(t){var n=document.getElementById("videoContainer");n&&(n.innerHTML=""),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(n){O(e,n,!0),t.forEach((function(t){if(t!==e){var c=m.call(t,n);null===c||void 0===c||c.on("stream",(function(e){O(t,e)}))}})),g(t)})),m.on("call",(function(c){n&&(n.innerHTML=""),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(n){c.answer(n),O(e,n,!0),t.forEach((function(t){t!==e&&(null===c||void 0===c||c.on("stream",(function(e){O(t,e)})))})),g(t)}))})),b(t)}))}))}),[s,l,t,m,d]),Object(c.useEffect)((function(){return function(){null===s||void 0===s||s.emit("peerClose",{peerId:f})}}),[s,f]),Object(c.useEffect)((function(){g(d)}),[d]),Object(A.jsxs)("div",{className:"w-full h-full flex",children:[Object(A.jsx)("div",{className:"w-full sm:w-3/4 h-full no-scrollbar grid grid-cols-2 gap-2 overflow-y-scroll bg-black bg-opacity-90 p-2",id:"videoContainer"}),Object(A.jsx)("div",{className:"w-1/4 hidden sm:block h-full border-l border-gray-300",children:Object(A.jsx)(U,{room:l,socket:s})})]})}));var J=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1];return Object(A.jsx)("div",{className:"w-full h-full flex justify-center items-center bg-img-background bg-cover bg-no-repeat",children:Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:"text-white text-5xl mb-4",children:"Join A Room"}),Object(A.jsx)("div",{children:Object(A.jsxs)("form",{children:[Object(A.jsx)("input",{name:"id",type:"text",value:n,onChange:function(e){e.preventDefault(),l(e.target.value)},placeholder:"Enter room's id ...",className:"rounded-lg p-4 focus:outline-none"}),Object(A.jsx)(s.b,{to:"/rooms/".concat(n),children:Object(A.jsx)("button",{type:"submit",className:"bg-blue-500 text-white ml-4 text-xl p-2 rounded-xl",children:"JOIN"})})]})})]})})},q=n(19),P=n(71),W=n(72),K={token:localStorage.getItem("token"),isAuthenticated:!1,user:null,loading:!0};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case x:case h:return e;case j:return Object(z.a)(Object(z.a)(Object(z.a)({},e),c),{},{isAuthenticated:!0});case m:return Object(z.a)(Object(z.a)({},e),{},{isAuthenticated:!1,user:null});case f:return Object(z.a)(Object(z.a)(Object(z.a)({},e),c),{},{isAuthenticated:!0,loading:!1});case p:return e;case g:return Object(z.a)(Object(z.a)({},e),{},{user:null,isAuthenticated:!1,token:null,loading:!1});default:return e}},X=[];var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case O:return[].concat(Object(T.a)(e),[c]);case v:return e.filter((function(e){return e.id!==c.id}));default:return e}},Z=Object(q.combineReducers)({auth:Q,alerts:Y}),$=function(e){e?(N.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete N.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},ee=Object(q.createStore)(Z,{},Object(P.composeWithDevTools)(Object(q.applyMiddleware)(W.a))),te=ee.getState();ee.subscribe((function(){var e=te;te=ee.getState(),e.auth.token!==te.auth.token&&$(te.auth.token)}));var ne=ee,ce=n(73),le=function(e){var t=e.component,n=e.auth,c=n.isAuthenticated,l=n.loading,a=Object(ce.a)(e,["component","auth"]);return Object(A.jsx)(r.b,Object(z.a)(Object(z.a)({},a),{},{render:function(e){return l?null:c?Object(A.jsx)(t,Object(z.a)({},e)):Object(A.jsx)(r.a,{to:"/login"})}}))};le.prototype={auth:D.a.object.isRequired};var ae=Object(i.b)((function(e){return{auth:e.auth}}))(le);var se=function(){return Object(c.useEffect)((function(){localStorage.getItem("token")&&$(localStorage.getItem("token")),ne.dispatch(E())}),[]),Object(A.jsx)(i.a,{store:ne,children:Object(A.jsx)("div",{className:"App h-full font-mono",children:Object(A.jsxs)(r.d,{children:[Object(A.jsx)(r.b,{path:"/login",exact:!0,component:L}),Object(A.jsx)(r.b,{path:"/register",exact:!0,component:B}),Object(A.jsx)(ae,{path:"/rooms/:id",component:H}),Object(A.jsx)(ae,{path:"/join",component:J}),Object(A.jsx)(r.b,{path:"/",exact:!0,component:C})]})})})};a.a.render(Object(A.jsx)(s.a,{children:Object(A.jsx)(se,{})}),document.getElementById("root"))},79:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.976e712d.chunk.js.map