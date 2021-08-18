(this.webpackJsonpart=this.webpackJsonpart||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i,c,a,o,s=n(0),r=n.n(s),l=n(19),d=n.n(l),b=(n(27),n(2)),p=(n(28),n(3)),h=n(6),j=n(5),x=n(1),u={apiUrl:"http://localhost:8000",height:window.innerHeight,mapKey:"AIzaSyDpJTRRgBI70kyCK83ReUPHKa_oxivp9u0",mobileOpen:!1,loggedIn:!1,menuOpen:!1,fullPadding:40,mobilePadding:20,browser:""},O=Object(s.createContext)({state:u,dispatch:function(){}}),g=O.Provider,f=function(e){var t=e.children,n=Object(s.useReducer)((function(e,t){switch(t.type){case"setHeight":return Object(h.a)(Object(h.a)({},e),{},{height:t.height});case"setMenu":return Object(h.a)(Object(h.a)({},e),{},{menuOpen:t.menuOpen});case"setBrowser":return Object(h.a)(Object(h.a)({},e),{},{browser:t.browser});case"logout":return localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),Object(h.a)(Object(h.a)({},e),{},{loggedIn:!1});case"setMobileOpen":return Object(h.a)(Object(h.a)({},e),{},{mobileOpen:t.mobileOpen});case"setPlaceFilters":return Object(h.a)(Object(h.a)({},e),{},{placeFilters:t.placeFilters});case"setEventFilters":return Object(h.a)(Object(h.a)({},e),{},{eventFilters:t.eventFilters});case"setEventDate":return Object(h.a)(Object(h.a)({},e),{},{eventFilterStartDate:t.startDate,eventFilterEndDate:t.endDate,eventFilterDateType:t.dateType});default:throw new Error}}),u),i=Object(j.a)(n,2),c={state:i[0],dispatch:i[1]};return Object(x.jsx)(g,{value:c,children:t})},m=n(9),v=Object(m.a)({}),y=n(39),w=p.a.div(i||(i=Object(b.a)(["\n    display: flex;\n    align-items: center;\n"]))),T=p.a.div(c||(c=Object(b.a)(["\n    position: relative;\n    height: 100%;\n    width: calc(100% / 5);\n    background: white;\n    overflow: hidden;\n\n"]))),C=p.a.div(a||(a=Object(b.a)(["\n    position: absolute;\n    background: black;\n"]))),k=p.a.div(o||(o=Object(b.a)(["\n    width: calc(100% / 5);\n    background: transparent;\n"])));var R,E,L,S,P,M,z=function(e){var t=300,n=200/3,i=Object(s.useRef)(null),c=Object(s.useState)(0),a=Object(j.a)(c,2),o=(a[0],a[1]),r=Object(s.useState)(0),l=Object(j.a)(r,2),d=l[0],b=l[1],p=Object(s.useState)(0),h=Object(j.a)(p,2),u=h[0],O=h[1],g=Object(s.useState)(0),f=Object(j.a)(g,2),m=f[0],v=f[1],y=Object(s.useState)(0),R=Object(j.a)(y,2),E=R[0],L=R[1];return Object(s.useEffect)((function(){var t=i.current;if(t){var n=t.getBoundingClientRect();o(n.x+50),b(n.y/e.height*100/2)}}),[]),Object(s.useEffect)((function(){var t=e.scroll/e.height*100,n=e.mouseY+t-d;e.mouseX>90?O(90):e.mouseX<10?O(10):O(e.mouseX),v(n>90?90:n<10?10:n),e.mouseX>45&&e.mouseX<55?L(5-Math.abs(e.mouseX-50)):L(0)}),[e.mouseX,e.mouseY]),Object(x.jsxs)(w,{style:{height:100,width:t},ref:i,children:[Object(x.jsx)(k,{}),Object(x.jsx)(T,{style:{borderRadius:"".concat(150,"px ").concat(150,"px 0px 0px")},children:Object(x.jsx)(C,{style:{top:"calc(".concat(m,"% - ").concat(n/2,"px)"),left:"calc(".concat(u,"% - ").concat(1*n/2,"px + ").concat(2*E,"px)"),height:"".concat(n,"px"),width:"".concat(n,"px"),borderRadius:"".concat(n/2,"px"),transition:"chr"===e.browser?"all 0.1s ease":"none"}})}),Object(x.jsx)(k,{}),Object(x.jsx)(T,{style:{borderRadius:"".concat(150,"px ").concat(150,"px 0px 0px")},children:Object(x.jsx)(C,{style:{top:"calc(".concat(m,"% - ").concat(n/2,"px)"),left:"calc(".concat(u,"% - ").concat(1*n/2,"px - ").concat(2*E,"px)"),height:"".concat(n,"px"),width:"".concat(n,"px"),borderRadius:"".concat(n/2,"px"),transition:"chr"===e.browser?"all 0.1s ease":"none"}})}),Object(x.jsx)(k,{})]})},D={background:"#eeeeee",offWhite:"#F8F8F8",pink:"#E89FC6",black:"#130E10"},B=p.a.div(R||(R=Object(b.a)(["\n    width: 100%;\n    scroll-snap-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),I=p.a.div(E||(E=Object(b.a)(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    color: white;\n"])),D.pink),A=p.a.div(L||(L=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    color: white;\n"]))),F=p.a.div(S||(S=Object(b.a)(["\n    height: 100%;\n    margin-left: 50px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),N=p.a.div(P||(P=Object(b.a)(["\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 80px;\n"]))),U=p.a.div(M||(M=Object(b.a)(["\n    height: 50px;\n    font-size: 25px;\n    font-weight: bold;\n"]))),X=new Date("20 August 2021").getTime();var W,Y,H=function(e){var t=Object(s.useContext)(O),n=t.state,i=(t.dispatch,Object(s.useState)("0")),c=Object(j.a)(i,2),a=c[0],o=c[1],r=Object(s.useState)("0"),l=Object(j.a)(r,2),d=l[0],b=l[1],p=Object(s.useState)("0"),h=Object(j.a)(p,2),u=h[0],g=h[1],f=Object(s.useState)("0"),m=Object(j.a)(f,2),v=m[0],y=m[1];return Object(s.useEffect)((function(){setInterval((function(){var e=(new Date).getTime(),t=X-e,n=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);o(a),b(c),g(i),y(n)}),1e3)}),[]),Object(x.jsx)(B,{style:{marginTop:n.mobileOpen?"".concat(n.mobilePadding,"px"):"".concat(n.fullPadding,"px"),height:n.mobileOpen?"".concat(n.height-2*n.mobilePadding,"px"):"".concat(n.height-2*n.fullPadding,"px")},children:Object(x.jsxs)(I,{style:{fontSize:n.mobileOpen?"40px":"70px"},children:[Object(x.jsx)("div",{style:{marginBottom:"50px",fontSize:"30px",fontWeight:"normal"},children:"GRADEX 2021:"}),Object(x.jsxs)(A,{children:[Object(x.jsxs)(F,{style:{marginLeft:"0px"},children:[Object(x.jsx)(N,{children:v}),Object(x.jsx)(U,{children:"DAYS"})]}),Object(x.jsxs)(F,{children:[Object(x.jsx)(N,{children:u}),Object(x.jsx)(U,{children:"HOURS"})]}),Object(x.jsxs)(F,{children:[Object(x.jsx)(N,{children:d}),Object(x.jsx)(U,{children:"MINUTES"})]}),Object(x.jsxs)(F,{children:[Object(x.jsx)(N,{children:a}),Object(x.jsx)(U,{children:"SECONSS"})]})]}),Object(x.jsx)("div",{style:{position:"absolute",bottom:"0px"},children:Object(x.jsx)(z,{mouseX:e.mouseX,mouseY:e.mouseY,height:e.height,width:e.width,scroll:e.scroll,browser:n.browser})})]})})},G=p.a.div(W||(W=Object(b.a)(["\n    top: 0px;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: space-evenly;\n    align-content: center;\n    grid-row-gap: 20px;\n"]))),J=p.a.div(Y||(Y=Object(b.a)(["\n    width: 100%;\n    height: 100%;\n"])));var K,V,_,q,Q,Z,$=function(e){var t=Object(s.useState)(!1),n=Object(j.a)(t,2),i=n[0],c=n[1];return Object(s.useEffect)((function(){c(e.open)}),[e.open]),Object(x.jsx)(G,{style:{gridTemplateColumns:"repeat(".concat(e.columns,", ").concat(e.columnWidth,")"),gridTemplateRows:"repeat(".concat(e.rows,", ").concat(e.rowHeight,")")},children:e.elements.map((function(t,n){return Object(x.jsx)(J,{style:{marginTop:i?"0px":"200px",opacity:i?1:0,transition:e.open?"all 0.5s ease":"0s",transitionDelay:e.open?"".concat(n*(e.delay||100),"ms"):"0s"},children:t})}))})},ee=p.a.div(K||(K=Object(b.a)(["\n    width: 100%;\n    scroll-snap-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 30px;\n"]))),te=p.a.div(V||(V=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 70px;\n    font-weight: bold;\n    flex-shrink: 0;\n"]))),ne=p.a.div(_||(_=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n"]))),ie=p.a.div(q||(q=Object(b.a)(["\n    height: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n"]))),ce=p.a.div(Q||(Q=Object(b.a)(["\n    width: 100%;\n    height: 100%;\n    font-size: 25px;\n"]))),ae=p.a.div(Z||(Z=Object(b.a)(["\n    width: 100%;\n    margin-bottom: 20px;\n    font-size: 30px;\n    font-weight: bold;\n    border-bottom: 3px solid black;\n    height: 80px;\n"])));var oe,se=function(e){var t=Object(s.useContext)(O),n=t.state;return t.dispatch,Object(x.jsxs)(ee,{style:{height:n.mobileOpen?"auto":n.height},children:[Object(x.jsx)("div",{style:{height:"0px"}}),Object(x.jsx)(te,{style:{height:"35%"},children:"ABOUT US"}),Object(x.jsx)(ne,{children:Object(x.jsx)(ie,{style:{width:n.mobileOpen?"calc(100% - 40px)":"calc(100% - 200px)"},children:Object(x.jsx)($,{columns:n.mobileOpen?1:3,columnWidth:n.mobileOpen?"calc(100%)":"200px",rowHeight:n.mobileOpen?"auto":"calc(100% - 50px)",rows:1,open:e.open,elements:[Object(x.jsxs)(ce,{children:[Object(x.jsx)(ae,{children:"VisCom Design"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"]}),Object(x.jsxs)(ce,{children:[Object(x.jsx)(ae,{children:"Fine Arts"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"]}),Object(x.jsxs)(ce,{children:[Object(x.jsx)(ae,{children:"Jewellery Design"}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"]})]})})})]})},re=p.a.div(oe||(oe=Object(b.a)(["\n    width: 100%;\n    scroll-snap-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 30px;\n"])));var le,de,be,pe=function(e){var t=Object(s.useContext)(O),n=t.state;return t.dispatch,Object(x.jsx)(re,{style:{height:n.height},children:"GALLERY TEMPLATE"})},he=p.a.div(le||(le=Object(b.a)(["\n    width: 100%;\n    scroll-snap-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 30px;\n"])));p.a.div(de||(de=Object(b.a)(["\n    height: 50px;\n    width: 50px;\n    background: red;\n    margin-top: 10px;\n    margin-bottom: 10px;\n"]))),p.a.div(be||(be=Object(b.a)(["\n    height: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n"])));var je,xe=function(e){var t=Object(s.useContext)(O),n=t.state;return t.dispatch,Object(x.jsx)(he,{style:{height:n.height},children:"MEET US TEMPLATE"})},ue=p.a.div(je||(je=Object(b.a)(["\n    width: 100%;\n    scroll-snap-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 30px;\n"])));var Oe,ge=function(e){var t=Object(s.useContext)(O),n=t.state;return t.dispatch,Object(x.jsx)(ue,{style:{height:n.height},children:"EVENTS TEMPLATE"})},fe=p.a.div(Oe||(Oe=Object(b.a)(["\n    width: 100%;\n    scroll-snap-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 30px;\n"])));var me,ve=function(e){var t=Object(s.useContext)(O),n=t.state;return t.dispatch,Object(x.jsx)(fe,{style:{height:n.height},children:"CONTACT TEMPLATE"})},ye=n(4),we=n.n(ye),Te=(n(32),p.a.div(me||(me=Object(b.a)(["\n    height: calc(100% - 15px);\n    width: calc(100% - 15px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n"]))));var Ce,ke=function(e){return Object(s.useEffect)((function(){e.open?(we()(".barMiddelLeft").addClass("left"),we()(".barMiddelRight").addClass("right"),we()(".barMiddelLeft").addClass("opacityNone"),we()(".barMiddelRight").addClass("opacityNone"),we()(".barTopLeft").addClass("leftTopRotate"),we()(".barTopRight").addClass("rightTopRotate"),we()(".barBottomLeft").addClass("rightTopRotate"),we()(".barBottomRight").addClass("leftTopRotate"),we()(".barTopLeft").addClass("topDown"),we()(".barTopRight").addClass("topDown"),we()(".barBottomLeft").addClass("bottomUp"),we()(".barBottomRight").addClass("bottomUp"),we()(".barTopLeft").addClass("leftIn"),we()(".barTopRight").addClass("rightIn"),we()(".barBottomLeft").addClass("leftIn"),we()(".barBottomRight").addClass("rightIn")):(we()(".barMiddelLeft").removeClass("left"),we()(".barMiddelRight").removeClass("right"),we()(".barMiddelLeft").removeClass("opacityNone"),we()(".barMiddelRight").removeClass("opacityNone"),we()(".barTopLeft").removeClass("leftTopRotate"),we()(".barTopRight").removeClass("rightTopRotate"),we()(".barBottomLeft").removeClass("rightTopRotate"),we()(".barBottomRight").removeClass("leftTopRotate"),we()(".barTopLeft").removeClass("topDown"),we()(".barTopRight").removeClass("topDown"),we()(".barBottomLeft").removeClass("bottomUp"),we()(".barBottomRight").removeClass("bottomUp"),we()(".barTopLeft").removeClass("leftIn"),we()(".barTopRight").removeClass("rightIn"),we()(".barBottomLeft").removeClass("leftIn"),we()(".barBottomRight").removeClass("rightIn"))}),[e.open]),Object(x.jsx)(Te,{children:Object(x.jsxs)("div",{style:{height:"100%",aspectRatio:"1/1",position:"relative",zIndex:20},children:[Object(x.jsx)("div",{className:"barTopLeft",style:{background:e.color}}),Object(x.jsx)("div",{className:"barTopRight",style:{background:e.color}}),Object(x.jsx)("div",{className:"barMiddelLeft",style:{background:e.color}}),Object(x.jsx)("div",{className:"barMiddelRight",style:{background:e.color}}),Object(x.jsx)("div",{className:"barBottomLeft",style:{background:e.color}}),Object(x.jsx)("div",{className:"barBottomRight",style:{background:e.color}})]})})},Re=p.a.div(Ce||(Ce=Object(b.a)(["\n    \n"])));var Ee,Le,Se,Pe,Me,ze,De,Be,Ie,Ae=function(e){var t=Object(s.useState)(!1),n=Object(j.a)(t,2),i=n[0],c=n[1],a=Object(s.useState)(!1),o=Object(j.a)(a,2),r=o[0],l=o[1];return Object(s.useEffect)((function(){var t=null;return e.open!==i&&(e.open?(l(!0),t=setTimeout((function(){return c(!0)}),4)):(t=setTimeout((function(){return l(!1)}),1e3*e.length),c(!1))),function(){clearTimeout(t)}}),[e.open]),Object(x.jsx)(Re,{style:{position:e.position||"relative",left:e.left||"0px",height:e.height||"",width:e.width||"",transition:"all ".concat(e.length,"s ease")||!1,display:r?"inherit":"none",top:i?"0%":"-100%",opacity:i?1:0,zIndex:e.zIndex||1},children:e.children})},Fe=p.a.div(Ee||(Ee=Object(b.a)(["\n    top: 0px;\n    left: 0px;\n    position: absolutew;\n    height: 100%;\n    width: 100%;\n    background: ",";\n    overflow-x: hidden;\n    overflow-y: auto;\n    scroll-behavior: smooth;\n"])),D.background),Ne=p.a.div(Le||(Le=Object(b.a)(["\n    flex-grow: 1;\n    flex-shrink: 0;\n    animation: all 0.3s ease;\n    background: white;\n"]))),Ue=p.a.div(Se||(Se=Object(b.a)(["\n    position: fixed;\n    width: 100%;\n    z-index: 10;\n    left: 0px;\n    background: ",";\n    transition: all 0.3s ease;\n"])),D.background),Xe=p.a.div(Pe||(Pe=Object(b.a)(["\n    position: fixed;\n    height: 100%;\n    z-index: 10;\n    background: ",";\n    transition: all 0.3s ease;\n"])),D.background),We=p.a.div(Me||(Me=Object(b.a)(["\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    z-index: 9;\n    background: ",";\n    top: 0px;\n    left: 0px;\n"])),D.black),Ye=p.a.div(ze||(ze=Object(b.a)(["\n    width: 100%;\n    height: 300px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n"]))),He=p.a.div(De||(De=Object(b.a)(["\n    flex-grow: 1;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n"]))),Ge=p.a.div(Be||(Be=Object(b.a)(["\n    color: white;\n    height: calc(100% / 5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 30px;\n    font-weight: bold;\n    transition: all 0.2s ease;\n    cursor: pointer;\n    opacity: 0.8;\n    &:hover {\n        opacity: 1;\n    }\n"]))),Je=p.a.div(Ie||(Ie=Object(b.a)(["\n    cursor: pointer;\n\n    position: fixed;\n    z-index: 10;\n    display: flex;\n\n    justify-content: center;\n    align-items: center;\n"]))),Ke=window.innerHeight,Ve=window.innerWidth;var _e,qe=function(e){var t=Object(s.useContext)(O),n=t.state,i=t.dispatch,c=Object(s.useState)(0),a=Object(j.a)(c,2),o=a[0],r=a[1],l=Object(s.useState)(0),d=Object(j.a)(l,2),b=d[0],p=d[1],h=Object(s.useState)(0),u=Object(j.a)(h,2),g=u[0],f=u[1],m=90;n.mobileOpen&&(m=60);var v=Object(s.useState)(Ke-m),y=Object(j.a)(v,2),w=y[0],T=y[1],C=Object(s.useRef)(null),k=Object(s.useState)(!1),R=Object(j.a)(k,2),E=R[0],L=R[1],S=null;return Object(s.useEffect)((function(){return document.addEventListener("mousemove",(function(e){var t=e.clientX/Ve*100,n=e.clientY/Ke*100;Math.abs(o-t)>1&&r(t),Math.abs(b-n)>1&&p(n)}),!1),function(){clearTimeout(S)}}),[]),Object(x.jsxs)(Fe,{ref:C,id:"container",onScroll:function(e){var t=e.target.scrollTop;f(t);var i=90;n.mobileOpen&&(i=60);var c=n.height-i-t;T(c>0?c:0)},children:[Object(x.jsx)(Ue,{style:{height:n.mobileOpen?"".concat(0===w?n.fullPadding:n.mobilePadding,"px"):"".concat(n.fullPadding,"px"),top:"0px"}}),Object(x.jsx)(Ue,{style:{height:n.mobileOpen?"".concat(n.mobilePadding,"px"):"".concat(n.fullPadding,"px"),bottom:"0px"}}),Object(x.jsx)(Xe,{style:{width:n.mobileOpen?"".concat(n.mobilePadding,"px"):"".concat(n.fullPadding,"px"),left:"0px"}}),Object(x.jsx)(Xe,{style:{width:n.mobileOpen?"".concat(n.mobilePadding,"px"):"".concat(n.fullPadding,"px"),right:"0px"}}),Object(x.jsxs)(Ne,{style:{width:n.mobileOpen?"calc(100% - ".concat(2*n.mobilePadding,"px)"):"calc(100% - ".concat(2*n.fullPadding,"}px)"),margin:n.mobileOpen?"0px ".concat(n.mobilePadding,"px 0px ").concat(n.mobilePadding,"px"):"0px ".concat(n.fullPadding,"px 0px ").concat(n.fullPadding,"px")},children:[Object(x.jsx)(H,{mouseX:o,mouseY:b,height:Ke,width:Ve,scroll:g}),Object(x.jsx)(se,{open:g>.35*Ke}),Object(x.jsx)(xe,{open:g>1*Ke+.35*Ke}),Object(x.jsx)(pe,{}),Object(x.jsx)(ge,{}),Object(x.jsx)(ve,{})]}),Object(x.jsx)(Je,{onClick:function(){return M(!n.menuOpen)},style:{height:"".concat(n.fullPadding,"px"),width:"".concat(n.fullPadding,"px"),right:n.mobileOpen?"".concat(n.mobilePadding+10,"px"):"".concat(n.fullPadding+10,"px"),top:"".concat(w,"px")},children:Object(x.jsx)(ke,{open:n.menuOpen,color:0===w?"darkgrey":"white"})}),Object(x.jsx)(Ae,{zIndex:9,open:n.menuOpen,length:.5,position:"absolute",height:"100%",width:"100%",left:"0px",children:Object(x.jsxs)(We,{children:[Object(x.jsx)(Ye,{style:{fontSize:"40px",fontWeight:"bold"},children:"GradeX"}),Object(x.jsxs)(He,{style:{flexDirection:n.mobileOpen?"column":"row"},children:[Object(x.jsx)(Ge,{onClick:function(){return P("about")},style:{transitionDelay:"0ms",marginLeft:n.mobileOpen?E?"0px":"200px":"0px",marginTop:n.mobileOpen||E?"0px":"200px",opacity:E?.8:0,minWidth:n.mobileOpen?"80%":"100px"},children:"ABOUT US"}),Object(x.jsx)(Ge,{onClick:function(){return P("meet")},style:{transitionDelay:"100ms",marginLeft:n.mobileOpen?E?"0px":"200px":"0px",marginTop:n.mobileOpen||E?"0px":"200px",opacity:E?.8:0,minWidth:n.mobileOpen?"80%":"100px"},children:"MEET US"}),Object(x.jsx)(Ge,{onClick:function(){return P("gallery")},style:{transitionDelay:"200ms",marginLeft:n.mobileOpen?E?"0px":"200px":"0px",marginTop:n.mobileOpen||E?"0px":"200px",opacity:E?.8:0,minWidth:n.mobileOpen?"80%":"100px"},children:"GALLERY"}),Object(x.jsx)(Ge,{onClick:function(){return P("events")},style:{transitionDelay:"300ms",marginLeft:n.mobileOpen?E?"0px":"200px":"0px",marginTop:n.mobileOpen||E?"0px":"200px",opacity:E?.8:0,minWidth:n.mobileOpen?"80%":"100px"},children:"EVENTS"}),Object(x.jsx)(Ge,{onClick:function(){return P("contact")},style:{transitionDelay:"400ms",marginLeft:n.mobileOpen?E?"0px":"200px":"0px",marginTop:n.mobileOpen||E?"0px":"200px",opacity:E?.8:0,minWidth:n.mobileOpen?"80%":"100px"},children:"CONTACT"})]}),Object(x.jsx)(Ye,{style:{}})]})})]});function P(e){var t=0;switch(e){case"about":t=1;break;case"meet":t=2;break;case"gallery":t=3;break;case"events":t=4;break;case"contact":t=5}!function(e){var t=document.getElementById("container");t&&(t.scrollTop=e)}(t*Ke),M(!1)}function M(e){!function(e){i({type:"setMenu",menuOpen:e})}(e),S=setTimeout((function(){return L(e)}),4)}},Qe=p.a.div(_e||(_e=Object(b.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));var Ze=function(){return Object(x.jsx)(f,{children:Object(x.jsx)(y.a,{history:v,children:Object(x.jsx)($e,{})})})};function $e(){var e=Object(s.useContext)(O),t=(e.state,e.dispatch);return Object(s.useEffect)((function(){var e=function(){window.innerWidth>=960?(t({type:"setMobileOpen",mobileOpen:!1}),console.log("mobile close")):(t({type:"setMobileOpen",mobileOpen:!0}),console.log("mobile open"))};function n(e){t({type:"setBrowser",browser:e})}return e(),window.addEventListener("resize",e),-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))?n("op"):-1!=navigator.userAgent.indexOf("Chrome")?n("chr"):-1!=navigator.userAgent.indexOf("Safari")?n("saf"):-1!=navigator.userAgent.indexOf("Firefox")?n("fir"):-1!=navigator.userAgent.indexOf("MSIE")&&n("ie"),function(){window.removeEventListener("resize",e)}}),[]),Object(x.jsx)(Qe,{children:Object(x.jsx)(qe,{})})}var et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))};d.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Ze,{})}),document.getElementById("root")),et()}},[[37,1,2]]]);
//# sourceMappingURL=main.a5ea0ee5.chunk.js.map