(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(7),n=c.n(a),r=(c(15),c(2)),i=c(9),u=c(0),j=function(e){var t=e.categoria,c=e.setCategoria,a=Object(s.useState)(""),n=Object(r.a)(a,2),j=n[0],l=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"AddCategory"}),Object(u.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),j.trim().length>2)return c([j].concat(Object(i.a)(t))),void document.querySelector("form").reset()},children:Object(u.jsx)("div",{className:"row justify-content-center",children:Object(u.jsx)("div",{className:"col-md-5",children:Object(u.jsx)("input",{className:"form-control",type:"text",onChange:function(e){l(e.target.value)},placeholder:"Inserta tu anime aqui!!!"})})})})]})},l=c(10),o=c(6),b=c.n(o),d=c(8),m=function(){var e=Object(d.a)(b.a.mark((function e(t){var c,s,a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"9ufJ7yvIAYK02cSut3fhLro0vl5ZE8NS",c="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("9ufJ7yvIAYK02cSut3fhLro0vl5ZE8NS"),e.prev=2,e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:return a=e.sent,n=a.data,r=n.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",r);case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.title,c=e.url;return Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{className:"card-img-top",src:c,alt:t}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)("p",{className:"card_text",children:t})})]})})},x=function(e){var t=e.categoria,c=function(e){var t=Object(s.useState)({data:[],loading:!0}),c=Object(r.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){m(e).then((function(e){n({data:e,loading:!1})}))}),[e]),a}(t),a=c.data,n=c.loading;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h3",{children:t}),n?Object(u.jsxs)("div",{className:"sk-cube-grid",children:[Object(u.jsx)("div",{className:"sk-cube sk-cube1"}),Object(u.jsx)("div",{className:"sk-cube sk-cube2"}),Object(u.jsx)("div",{className:"sk-cube sk-cube3"}),Object(u.jsx)("div",{className:"sk-cube sk-cube4"}),Object(u.jsx)("div",{className:"sk-cube sk-cube5"}),Object(u.jsx)("div",{className:"sk-cube sk-cube6"}),Object(u.jsx)("div",{className:"sk-cube sk-cube7"}),Object(u.jsx)("div",{className:"sk-cube sk-cube8"}),Object(u.jsx)("div",{className:"sk-cube sk-cube9"})]}):null,Object(u.jsx)("div",{className:"row",children:a.map((function(e){return Object(u.jsx)(O,Object(l.a)({},e),e.id)}))})]})},f=function(){var e=Object(s.useState)([""]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(j,{categoria:c,setCategoria:a}),Object(u.jsx)("ol",{children:c.map((function(e,t){return Object(u.jsx)(x,{categoria:e},t)}))})]})};n.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.253469c6.chunk.js.map