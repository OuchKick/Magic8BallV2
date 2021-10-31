(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(20),i=c.n(s),r=(c(54),c(55),c(23)),l=c(10),o=c(38),j=c(27),d=c(31),b=c(34),h='"Josefin Sans"',x=c(1);var f=function(){return Object(x.jsx)(j.a,{bg:"dark",variant:"dark",expand:"lg",style:{fontFamily:"".concat(h),fontSize:"20px"},children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(j.a.Brand,{children:"Magic 8Ball"}),Object(x.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(x.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(x.jsxs)(b.a,{className:"me-auto",children:[Object(x.jsx)(o.LinkContainer,{to:"/#/",children:Object(x.jsx)(b.a.Link,{children:"Home"})}),Object(x.jsx)(o.LinkContainer,{to:"/Magic8BallV2/#/history",children:Object(x.jsx)(b.a.Link,{children:"History"})})]})})]})})},u=c(2),O=c(8),m=c(47),g=c(26);var y=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object.entries(Object(u.a)({},localStorage)).map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e[0]}),Object(x.jsx)("td",{children:e[1]}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(g.a,{type:"button",className:"btn btn-danger btn-sm",onClick:function(){return i(e[0])},children:Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVRIiWNgGCmggYGB4T8a7iBGIyMWsf8UOgbFTCYKDSMbwIKBYvU09wGxFqC7kGgfDhofjFowasGoBRQAFiLVoRfr2Ip5rGDAgugplEavxXBhZD1EAT8GBoYnJFjwBKpnGAIAUcAmPA1WYN0AAAAASUVORK5CYII=","aria-label":"Delete Icon - Trash Can",style:{filter:"invert(100%)"}})})})})]},t)}));Object(n.useEffect)((function(e){return{dynamicTable:e}}),[c]);var i=function(e){localStorage.removeItem(e),a(!c)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"d-flex justify-content-center pt-3",children:Object(x.jsx)("h1",{className:"fw-bolder",style:{fontSize:"60px",fontFamily:"".concat(h)},children:"History"})}),Object(x.jsx)("div",{className:"d-flex justify-content-center",style:{fontFamily:"".concat(h)},children:Object(x.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,className:"w-50",style:{backgroundColor:"#fff"},children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Question"}),Object(x.jsx)("th",{children:"Answer"}),Object(x.jsx)("th",{className:"d-flex justify-content-center",children:"Delete"})]})}),Object(x.jsx)("tbody",{children:0===localStorage.length?Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Ask 8 Ball a question."}),Object(x.jsx)("td",{children:"8 Ball has no answers right now."}),Object(x.jsx)("td",{className:"d-flex justify-content-center",children:"Nothing to delete."})]}):s})]})})]})},A=c(49),p=c(48),v=c.p+"static/media/8ball.dac8179e.png";c(64);var N=function(){var e=Object(n.useState)((function(){var e=localStorage.getItem("question");return JSON.parse(e)||""})),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),i=Object(O.a)(s,2),r=i[0],l=i[1],o="https://8ball.delegator.com/magic/JSON/"+encodeURIComponent(c);return Object(x.jsxs)(d.a,{children:[Object(x.jsx)("div",{className:"d-flex justify-content-center pb-3 pt-2",children:Object(x.jsx)("h1",{className:"fw-bolder magicTitle",children:"Magic 8Ball"})}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)("img",{src:v,"aria-label":"Magic 8-Ball",className:"eightBall",style:{width:"15em",paddingBottom:"10px"}})}),Object(x.jsx)("div",{className:"d-flex justify-content-center pb-2 h2",children:r}),Object(x.jsxs)(A.a,{gap:3,className:"col-md-5 mx-auto",children:[Object(x.jsx)(p.a.Control,{placeholder:"Have a question?",value:c,onChange:function(e){return a(e.target.value)}}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(g.a,{variant:"primary",type:"button",className:"submitButton",onClick:function(){c.match(/^[A-Za-z'0-9 ]+[?]/)?fetch(o).then((function(e){return e.json()})).then((function(e){l(JSON.stringify(e.magic.answer)),localStorage.setItem(c,e.magic.answer)})).catch((function(e){console.log(e),window.alert("8Ball didn't like that, try once more.")})):window.alert("That wasn't a question.")},style:{backgroundColor:"".concat("#25b8f2"),fontFamily:"".concat(h),width:"15em",fontSize:"20px"},children:"Submit"})}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(g.a,{variant:"outline-secondary",className:"historyButton",style:{backgroundColor:"".concat("#f25f25"),fontFamily:"".concat(h),color:"#fff",width:"15em",fontSize:"20px"},href:"/history",children:"History"})})]})]})};var B=function(){return Object(x.jsx)("div",{className:"backgroundGradient",children:Object(x.jsxs)(r.BrowserRouter,{children:[Object(x.jsx)(f,{}),Object(x.jsxs)(r.HashRouter,{children:[Object(x.jsx)(l.d,{exact:!0,path:"/#/",children:Object(x.jsx)(N,{})}),Object(x.jsx)(l.d,{exact:!0,path:"/Magic8BallV2/#/history",children:Object(x.jsx)(y,{})})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};c(65);i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),w()}},[[66,1,2]]]);
//# sourceMappingURL=main.3f0c59bb.chunk.js.map