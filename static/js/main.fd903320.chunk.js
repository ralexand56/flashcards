(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(28)},22:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=(t(22),t(11)),d=t(1),u=t(2),s=t(7);function l(){var e=Object(d.a)(["\n  /* padding: 0.3em; */\n  cursor: pointer;\n  background-color: #31333f;\n  display: flex;\n  justify-content: center;\n  will-change: transform, opacity;\n  position: absolute;\n  max-width: ","px;\n  max-height: ","px;\n  width: ","px;\n  height: ","px;\n  border-radius: 1em;\n  overflow: hidden;\n  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);\n"]);return l=function(){return e},e}function p(){var e=Object(d.a)(["\n  border: 0px solid;\n  display: flex;\n  justify-content: center;\n  width: ","px;\n  height: ","px;\n  overflow: hidden;\n"]);return p=function(){return e},e}var f,h=Object(u.a)(s.a.div)(p(),function(e){return e.width},function(e){return e.height}),m=Object(u.a)(s.a.div)(l(),function(e){return e.width},function(e){return e.height},function(e){return e.width},function(e){return e.height}),g=function(e){var n=e.front,t=e.back,r=e.handleFlipping,i=e.isFlipped,o=void 0===i||i,c=e.width,d=void 0===c?250:c,u=e.height,l=void 0===u?250:u,p=Object(s.b)({opacity:o?1:0,transform:"perspective(600px) rotateX(".concat(o?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),f=p.opacity,g=p.transform;return a.a.createElement(h,{width:d,height:l,onClick:r},a.a.createElement(m,{width:d,height:l,style:{opacity:f.interpolate(function(e){return"number"===typeof e?1-e:1}),transform:g}},n),a.a.createElement(m,{width:d,height:l,style:{opacity:f,transform:g.interpolate(function(e){return"".concat(e," rotateX(180deg)")})}},t))},b=t(3),w=t(6);!function(e){e.CARDS_LOAD="[cards] Load",e.CARD_FLIP="[card] Flip"}(f||(f={}));var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cards:[],groups:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f.CARDS_LOAD:return Object(w.a)({},e,{cards:n.cards});case f.CARD_FLIP:var t=e.cards.find(function(e){return e.id===n.id});return t?Object(w.a)({},e,{cards:[].concat(Object(b.a)(e.cards.filter(function(e){return e.id!==n.id})),[Object(w.a)({},t,{answerRevealed:!t.answerRevealed})])}):e;default:return e}};function x(){var e=Object(d.a)(["\n  background-size: cover;\n  content: '';\n  width: 100%;\n  height: 100%;\n"]);return x=function(){return e},e}function y(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 0.5em;\n  grid-area: items;\n  justify-items: center;\n  overflow: auto;\n  padding: 1.5em;\n"]);return y=function(){return e},e}function j(){var e=Object(d.a)(["\n  grid-area: footer;\n  padding: 0.8em;\n  height: 1em;\n  box-shadow: 1px 0px 30px -5px rgba(0, 0, 0, 0.3);\n"]);return j=function(){return e},e}function O(){var e=Object(d.a)(["\n  grid-area: header;\n  padding: 0.8em;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  font-size: 1.2em;\n  box-shadow: 0 1px 30px -5px rgba(0, 0, 0, 0.3);\n"]);return O=function(){return e},e}function E(){var e=Object(d.a)(['\n  border: 0px solid red;\n  color: white;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    "header"\n    "items"\n    "footer";\n  height: 100vh;\n']);return E=function(){return e},e}var k=u.a.main(E()),A=u.a.header(O()),R=u.a.footer(j()),C=u.a.section(y()),D=u.a.div(x()),L=function(){var e=Object(r.useReducer)(v,{cards:[],groups:[{id:"1",name:"Russian Verbs"}]}),n=Object(c.a)(e,2),t=n[0],i=n[1],o=t.cards,d=Object(r.useState)(!1),u=Object(c.a)(d,2);u[0],u[1];return Object(r.useEffect)(function(){i({type:f.CARDS_LOAD,cards:[{id:"1",title:"",imageLink:"https://media.giphy.com/media/stv1Dliu5TrMs/giphy.gif",type:"text",groupId:"1",answer:"\u0440\u0430\u0431\u043e\u0442\u0430",pronunciation:"rabota",audioAnswer:"job.mp3",answerRevealed:!1},{id:"2",title:"",imageLink:"https://media.kaboom.org/app/assets/resources/000/002/279/original/cities4.jpg",type:"text",groupId:"1",answer:"\u0440\u0430\u0431\u043e\u0442\u0430",pronunciation:"rabota",audioAnswer:"job.mp3",answerRevealed:!1}]})},[]),a.a.createElement(k,null,a.a.createElement(A,null,a.a.createElement("span",{style:{fontStyle:"italic"}},"Flash"),a.a.createElement("span",{style:{fontWeight:"bold"}},"Cards")),a.a.createElement(C,null,o.sort(function(e,n){return e.id.localeCompare(n.id)}).map(function(e){return a.a.createElement(g,{key:e.id,front:a.a.createElement(D,{style:{backgroundImage:"url(".concat(e.imageLink,")")}}),back:a.a.createElement("div",null,a.a.createElement("div",null,e.answer),a.a.createElement("div",null,e.pronunciation),a.a.createElement("button",{onClick:function(){return function(e){try{var n=new Audio;n.src="./audio/".concat(e),n.load(),n.play()}catch(t){console.dir(JSON.stringify(t))}}(e.audioAnswer)}},"Play")),isFlipped:e.answerRevealed,handleFlipping:function(){return i({type:f.CARD_FLIP,id:e.id})}})})),a.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.fd903320.chunk.js.map