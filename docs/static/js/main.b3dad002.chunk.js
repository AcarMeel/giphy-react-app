(this["webpackJsonpgiphy-app"]=this["webpackJsonpgiphy-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),i=n(7),u=n.n(i),s=n(9),d=n(2),o=function(t){var e=t.handleAdd,n=Object(a.useState)(""),r=Object(d.a)(n,2),i=r[0],u=r[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i),u("")},children:[Object(c.jsx)("input",{type:"text",onChange:function(t){u(t.target.value)},value:i}),Object(c.jsx)("button",{disabled:!i||""===i,type:"submit",children:"Search"})]})},j=n(10),l=n(6),b=n.n(l),h=n(8),p=function(){var t=Object(h.a)(b.a.mark((function t(e){var n,c,a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=0iR0GLIyJG5THTLPg9qfwadowPuhyEN3&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(c.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)("img",{src:n,alt:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(d.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){return r({data:t,loading:!1})}))}),[t]),c}(e),r=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:e}),Object(c.jsxs)("div",{className:"card-grid",children:[i&&Object(c.jsx)("p",{children:"Loading..."}),r&&r.map((function(t){return Object(c.jsx)(f,Object(j.a)({},t),t.id)}))]})]})},g=function(){var t=Object(a.useState)(["Stars","Flowers","Cupcakes"]),e=Object(d.a)(t,2),n=e[0],r=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Gif Expert App"}),Object(c.jsx)("hr",{}),Object(c.jsx)(o,{handleAdd:function(t){t&&""!==t&&r([t].concat(Object(s.a)(n)))}}),n.map((function(t){return Object(c.jsx)(O,{category:t,children:t},t)}))]})},x=(n(17),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))});u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.b3dad002.chunk.js.map