(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),a=n(7),c=n.n(a),i=n(8),d=n(3),s=n(2),u={root:{borderRadius:"8px",padding:"10px",height:"fit-content",backgroundColor:"#EBECF0",width:"280px",margin:"5px"},single:{borderRadius:"5px",backgroundColor:"#ffffff",margin:"10px",padding:"5px",boxShadow:"lightgrey 0px 2px 3px 1px"},button:{border:"none",padding:"5px",backgroundColor:"#EBECF0"},input:{backgroundColor:"white",border:"none",":focus":{border:"none"}}},l=function(t){var e=t.title,n=(t.dragged,t.update,Object(o.useState)([])),a=Object(s.a)(n,2),c=a[0],i=a[1],l=Object(o.useState)(""),b=Object(s.a)(l,2),j=b[0],g=b[1],p=Object(o.useState)(!1),f=Object(s.a)(p,2),x=f[0],O=f[1],h=Object(o.useState)([]),v=Object(s.a)(h,2),y=v[0],C=v[1],k=function(t){13===t.keyCode&&console.log("enter"),i([].concat(Object(d.a)(c),[j])),g(""),O(!1)},m=function(t){t.dataTransfer.setData("Text",t.target.innerText),t.dataTransfer.setData("Title",t.target.parentNode.parentNode.id),setTimeout((function(){t.target.style.display="none"}),0)};return Object(r.jsxs)("div",{style:u.root,className:"wrapper",onDragOver:function(t){return function(t){t.preventDefault()}(t)},onDrop:function(t){return function(t){var e=t.dataTransfer.getData("Text");C([].concat(Object(d.a)(y),[e])),console.log("NEW DATA",y)}(t)},onMouseEnter:function(t){},id:e,children:[Object(r.jsx)("div",{className:"title",children:e}),Object(r.jsxs)("div",{className:"tasks",children:[c&&c.map((function(t,e){return Object(r.jsx)("div",{draggable:"true",id:e,onDragStart:function(t){return m(t)},style:u.single,children:t})})),Object(r.jsx)("div",{children:y&&y.map((function(t,e){return Object(r.jsxs)("div",{draggable:"true",id:e,onDragStart:function(t){return m(t)},style:u.single,children:[" ",t," "]})}))})]}),Object(r.jsx)("div",{children:x?Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{style:u.input,type:"textarea",autoFocus:!0,value:j,onChange:function(t){g(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&k(t)}}),Object(r.jsx)("button",{onClick:k,children:"Add"}),Object(r.jsx)("button",{onClick:function(){O(!1),g("")},children:" X "})]}):Object(r.jsx)("button",{style:u.button,onClick:function(){return O(!0)},children:"+ add another card"})})]})},b={root:{display:"flex",justifyContent:"space-around"}},j=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];function c(t,e){a([].concat(Object(d.a)(n),[Object(i.a)({prop:Object(d.a)(t)},e,e)]))}return console.log("dragged",n),Object(r.jsx)("div",{style:b.root,children:["backlog","Todo","in-progress","done"].map((function(t){return Object(r.jsx)(l,{title:t,dragged:n,update:c})}))})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),a(t),c(t)}))};c.a.render(Object(r.jsx)(j,{}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.28df5733.chunk.js.map