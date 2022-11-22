"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[562],{32351:function($e,_e,t){t.r(_e),t.d(_e,{default:function(){return ia}});var Et=t(17061),f=t.n(Et),Nt=t(17156),P=t.n(Nt),Zt=t(27424),S=t.n(Zt),a=t(67294),et=t(20845),wt=t(64593),Oe=t(83459),Bt=t(9669),be=t.n(Bt),je=t(80410),x={stake:"stake____9Qeo",sub_nav:"sub_nav____Ue83",sub_nav_sub:"sub_nav_sub___fG46u",account_box:"account_box___b_ScC",account:"account___yOlpy",yuan:"yuan___k40yF",sub_nav2:"sub_nav2___oelN5",line:"line___VSuRC",disclaimer:"disclaimer___J6FtU",box1:"box1___GagVs",box2:"box2___xmI3m",box3:"box3___ZvqmN",box5:"box5___dwLfc",stake_btn:"stake_btn___MRuGi",plus:"plus___WuwnK",board:"board___QKDpx",board2:"board2___jL7Sz",tabbtn:"tabbtn___fP7KK",vbar:"vbar___ANjRf",mintxt:"mintxt___gCDwf",tip:"tip___IIbb9","ant-modal-content":"ant-modal-content___x5m7K"},Dt=t(39659),It=t(2775),J=t(4942),Fe=t(87462),Tt=t(94184),Ee=t.n(Tt),Pt=t(91),Ne=t(1413),Ot=t(15671),Xt=t(43144),Kt=t(32531),Mt=t(51630),tt=function(u){(0,Kt.Z)(h,u);var l=(0,Mt.Z)(h);function h(n){var r;(0,Ot.Z)(this,h),r=l.call(this,n),r.handleChange=function(p){var M=r.props,U=M.disabled,R=M.onChange;U||("checked"in r.props||r.setState({checked:p.target.checked}),R&&R({target:(0,Ne.Z)((0,Ne.Z)({},r.props),{},{checked:p.target.checked}),stopPropagation:function(){p.stopPropagation()},preventDefault:function(){p.preventDefault()},nativeEvent:p.nativeEvent}))},r.saveInput=function(p){r.input=p};var o="checked"in n?n.checked:n.defaultChecked;return r.state={checked:o},r}return(0,Xt.Z)(h,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var r,o=this.props,p=o.prefixCls,M=o.className,U=o.style,R=o.name,I=o.id,k=o.type,G=o.disabled,W=o.readOnly,de=o.tabIndex,b=o.onClick,q=o.onFocus,V=o.onBlur,$=o.onKeyDown,d=o.onKeyPress,re=o.onKeyUp,se=o.autoFocus,le=o.value,_=o.required,z=(0,Pt.Z)(o,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),N=Object.keys(z).reduce(function(H,O){return(O.substr(0,5)==="aria-"||O.substr(0,5)==="data-"||O==="role")&&(H[O]=z[O]),H},{}),j=this.state.checked,ie=Ee()(p,M,(r={},(0,J.Z)(r,"".concat(p,"-checked"),j),(0,J.Z)(r,"".concat(p,"-disabled"),G),r));return a.createElement("span",{className:ie,style:U},a.createElement("input",(0,Fe.Z)({name:R,id:I,type:k,required:_,readOnly:W,disabled:G,tabIndex:de,className:"".concat(p,"-input"),checked:!!j,onClick:b,onFocus:q,onBlur:V,onKeyUp:re,onKeyDown:$,onKeyPress:d,onChange:this.handleChange,autoFocus:se,ref:this.saveInput,value:le},N)),a.createElement("span",{className:"".concat(p,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(r,o){return"checked"in r?(0,Ne.Z)((0,Ne.Z)({},o),{},{checked:r.checked}):null}}]),h}(a.Component);tt.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var Rt=tt,at=t(53124),Vt=t(96626),nt=t(74902),rt=t(97685),Qt=t(98423),Ut=function(u,l){var h={};for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&l.indexOf(n)<0&&(h[n]=u[n]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(u);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(u,n[r])&&(h[n[r]]=u[n[r]]);return h},st=a.createContext(null),Gt=function(l,h){var n=l.defaultValue,r=l.children,o=l.options,p=o===void 0?[]:o,M=l.prefixCls,U=l.className,R=l.style,I=l.onChange,k=Ut(l,["defaultValue","children","options","prefixCls","className","style","onChange"]),G=a.useContext(at.E_),W=G.getPrefixCls,de=G.direction,b=a.useState(k.value||n||[]),q=(0,rt.Z)(b,2),V=q[0],$=q[1],d=a.useState([]),re=(0,rt.Z)(d,2),se=re[0],le=re[1];a.useEffect(function(){"value"in k&&$(k.value||[])},[k.value]);var _=function(){return p.map(function(F){return typeof F=="string"||typeof F=="number"?{label:F,value:F}:F})},z=function(F){le(function(oe){return oe.filter(function(ce){return ce!==F})})},N=function(F){le(function(oe){return[].concat((0,nt.Z)(oe),[F])})},j=function(F){var oe=V.indexOf(F.value),ce=(0,nt.Z)(V);oe===-1?ce.push(F.value):ce.splice(oe,1),"value"in k||$(ce);var Be=_();I==null||I(ce.filter(function(pe){return se.indexOf(pe)!==-1}).sort(function(pe,De){var Me=Be.findIndex(function(ve){return ve.value===pe}),Re=Be.findIndex(function(ve){return ve.value===De});return Me-Re}))},ie=W("checkbox",M),H="".concat(ie,"-group"),O=(0,Qt.Z)(k,["value","disabled"]);p&&p.length>0&&(r=_().map(function(Z){return a.createElement(lt,{prefixCls:ie,key:Z.value.toString(),disabled:"disabled"in Z?Z.disabled:k.disabled,value:Z.value,checked:V.indexOf(Z.value)!==-1,onChange:Z.onChange,className:"".concat(H,"-item"),style:Z.style},Z.label)}));var we={toggleOption:j,value:V,disabled:k.disabled,name:k.name,registerValue:N,cancelValue:z},Ke=Ee()(H,(0,J.Z)({},"".concat(H,"-rtl"),de==="rtl"),U);return a.createElement("div",(0,Fe.Z)({className:Ke,style:R},O,{ref:h}),a.createElement(st.Provider,{value:we},r))},zt=a.forwardRef(Gt),Ht=a.memo(zt),Lt=t(98866),Yt=function(u,l){var h={};for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&l.indexOf(n)<0&&(h[n]=u[n]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(u);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(u,n[r])&&(h[n[r]]=u[n[r]]);return h},Jt=function(l,h){var n,r=l.prefixCls,o=l.className,p=l.children,M=l.indeterminate,U=M===void 0?!1:M,R=l.style,I=l.onMouseEnter,k=l.onMouseLeave,G=l.skipGroup,W=G===void 0?!1:G,de=l.disabled,b=Yt(l,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),q=a.useContext(at.E_),V=q.getPrefixCls,$=q.direction,d=a.useContext(st),re=(0,a.useContext)(Vt.aM),se=re.isFormItemInput,le=(0,a.useContext)(Lt.Z),_=de||(d==null?void 0:d.disabled)||le,z=a.useRef(b.value);a.useEffect(function(){d==null||d.registerValue(b.value)},[]),a.useEffect(function(){if(!W)return b.value!==z.current&&(d==null||d.cancelValue(z.current),d==null||d.registerValue(b.value),z.current=b.value),function(){return d==null?void 0:d.cancelValue(b.value)}},[b.value]);var N=V("checkbox",r),j=(0,Fe.Z)({},b);d&&!W&&(j.onChange=function(){b.onChange&&b.onChange.apply(b,arguments),d.toggleOption&&d.toggleOption({label:p,value:b.value})},j.name=d.name,j.checked=d.value.indexOf(b.value)!==-1);var ie=Ee()((n={},(0,J.Z)(n,"".concat(N,"-wrapper"),!0),(0,J.Z)(n,"".concat(N,"-rtl"),$==="rtl"),(0,J.Z)(n,"".concat(N,"-wrapper-checked"),j.checked),(0,J.Z)(n,"".concat(N,"-wrapper-disabled"),_),(0,J.Z)(n,"".concat(N,"-wrapper-in-form-item"),se),n),o),H=Ee()((0,J.Z)({},"".concat(N,"-indeterminate"),U)),O=U?"mixed":void 0;return a.createElement("label",{className:ie,style:R,onMouseEnter:I,onMouseLeave:k},a.createElement(Rt,(0,Fe.Z)({"aria-checked":O},j,{prefixCls:N,className:H,disabled:_,ref:h})),p!==void 0&&a.createElement("span",null,p))},Wt=a.forwardRef(Jt),lt=Wt,Xe=lt;Xe.Group=Ht,Xe.__ANT_CHECKBOX=!0;var qt=Xe,ye=t(5207),ne=t(6348),i=t(6226),$t=t(63887),Za=t(61460),_t=t(31567),D=t(32674),it=t(64146),ea=t(53651),ta=t(27628),e=t(85893),aa=t(30381),ue=t(44431),na=t(72401),Ze=na.Drip,ot=t(31297),ct=ot.addressExc,ut=ot.abiExc,dt=t(91554),ra=dt.addressXcfx,sa=dt.abiXcfx,la="https://www.artii.top";function xt(u){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:24;return new Promise(function(h){setTimeout(function(){h(be().get(la+"/api/v1/statistics?condition="+u+"&offset=0&limit="+l))},1e3)})}function ia(){var u=(0,a.useState)("00.0000"),l=S()(u,2),h=l[0],n=l[1],r=(0,a.useState)("00.0000"),o=S()(r,2),p=o[0],M=o[1],U=(0,a.useState)(""),R=S()(U,2),I=R[0],k=R[1],G=(0,a.useState)(""),W=S()(G,2),de=W[0],b=W[1],q=(0,a.useState)(""),V=S()(q,2),$=V[0],d=V[1],re=(0,a.useState)("--"),se=S()(re,2),le=se[0],_=se[1],z=(0,a.useState)("--"),N=S()(z,2),j=N[0],ie=N[1],H=(0,a.useState)("--"),O=S()(H,2),we=O[0],Ke=O[1],Z=(0,a.useState)("--"),F=S()(Z,2),oe=F[0],ce=F[1],Be=(0,a.useState)("--"),pe=S()(Be,2),De=pe[0],Me=pe[1],Re=(0,a.useState)("--"),ve=S()(Re,2),oa=ve[0],ca=ve[1],ua=(0,a.useState)(0),ft=S()(ua,2),da=ft[0],xa=ft[1],fa=(0,a.useState)("0.0000"),ht=S()(fa,2),ha=ht[0],pt=ht[1],pa=(0,a.useState)(0),vt=S()(pa,2),Ce=vt[0],va=vt[1],ma=(0,a.useState)(0),mt=S()(ma,2),ga=mt[0],gt=mt[1],xe=[""],ee=[],bt=new ta.r("https://evmtestnet.confluxrpc.com"),Ie=new it.CH(ct,ut,bt),ba=new ea.vU(ut),ya=new it.CH(ra,sa,bt),Ve=(0,D.$z)(),wa=(0,a.memo)(function(){var s=(0,D.mA)(),A=(0,D.xx)(),v=(0,D.KQ)(),m=(0,a.useCallback)(P()(f()().mark(function c(){return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(s){y.next=2;break}return y.abrupt("return");case 2:setTimeout(function(){Le(),document.getElementById("spinner").style.display="none"},2e3);case 3:case"end":return y.stop()}},c)})),[s]);return(0,e.jsx)("div",{onClick:m,children:(s==null?void 0:s.slice(0,7))+"..."+(s==null?void 0:s.slice(s.length-5,s.length))})}),Ca=(0,a.memo)(function(){var s=(0,D.mA)(),A=(0,D.xx)(),v=(0,D.KQ)(),m=(0,a.useCallback)(P()(f()().mark(function c(){var g,y;return f()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(s){C.next=2;break}return C.abrupt("return");case 2:if(I){C.next=4;break}return C.abrupt("return");case 4:return g=ba.encodeFunctionData("CFX_exchange_XCFX",[]),C.next=7,(0,D.T7)({to:ct,data:g,value:D.fb.fromStandardUnit(I).toHexMinUnit()});case 7:y=C.sent,document.getElementById("spinner").style.display="flex",setTimeout(function(){Le(),document.getElementById("spinner").style.display="none"},1e4);case 10:case"end":return C.stop()}},c)})),[s]);return(0,e.jsx)(ye.Z,{onClick:m,style:{background:"#161621",border:"0",color:"#E29346"},shape:"round",size:"large",block:!0,ghost:!0,className:x.stake_btn,children:"Stake now"})});function Ba(){return Qe.apply(this,arguments)}function Qe(){return Qe=P()(f()().mark(function s(){return f()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(Ve!=="not-active"){v.next=3;break}return(0,D.$j)(),v.abrupt("return");case 3:case"end":return v.stop()}},s)})),Qe.apply(this,arguments)}var Ue=(0,D.mA)(),yt=(0,_t.$)(),te=yt.t,Da=yt.i18n,Ct,ka=(0,a.useState)("none"),kt=S()(ka,2),Sa=kt[0],St=kt[1],Aa=function(){St("none"),localStorage.setItem("DISCLAIMER","confirm")},ja=function(A){};function Fa(s){return Ge.apply(this,arguments)}function Ge(){return Ge=P()(f()().mark(function s(A){var v,m;return f()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(Ve!=="not-active"){g.next=3;break}return(0,D.$j)(),g.abrupt("return");case 3:return v=A.target.value,k(v),g.next=7,Ie.CFX_exchange_estim(v*1e4);case 7:m=g.sent,b(parseFloat((m.toNumber()/1e4).toString()).toFixed(2));case 9:case"end":return g.stop()}},s)})),Ge.apply(this,arguments)}function Ea(){return ze.apply(this,arguments)}function ze(){return ze=P()(f()().mark(function s(){var A,v;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(Ve!=="not-active"){c.next=3;break}return(0,D.$j)(),c.abrupt("return");case 3:if(!(+h<1)){c.next=8;break}k(ue(0)),b(ue(0)),c.next=14;break;case 8:return A=parseInt(((+h-1)*1e4).toString()),k(parseFloat((A/1e4).toString()).toFixed(4)),c.next=12,Ie.CFX_exchange_estim(A);case 12:v=c.sent,b(parseFloat((v.toNumber()/1e4).toString()).toFixed(2));case 14:case"end":return c.stop()}},s)})),ze.apply(this,arguments)}function ke(){return He.apply(this,arguments)}function He(){return He=P()(f()().mark(function s(){var A,v,m,c,g,y,L,C,fe,E=arguments;return f()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return A=E.length>0&&E[0]!==void 0?E[0]:1,v=E.length>1&&E[1]!==void 0?E[1]:"",m=E.length>2&&E[2]!==void 0?E[2]:0,c=E.length>3&&E[3]!==void 0?E[3]:24,m===1&&(c=168),m===2&&(c=720),m===3&&(c=8640),m===4&&(c=8640*5),Q.next=10,xt("",c);case 10:if(g=Q.sent,ee=[],xe=[],y=[],L=2,g.data.rows.length===c?L=parseInt((g.data.rows.length/12).toString()):L=parseInt((c/12).toString()),g.data.rows.forEach(function(T,Y){console.log(L),m===0&&y.push(T),m===1&&Y%7===0&&y.push(T),m===2&&Y%30===0&&y.push(T),m===3&&Y%L===0&&y.push(T),m===4&&Y%L===0&&y.push(T)}),pt(parseFloat((y[0].xcfxvalues*+$).toString()).toFixed(4)),A!==3){Q.next=27;break}return va(m),y.reverse().forEach(function(T,Y){var Te=parseFloat((+T.xcfxvalues*+T.price).toString()).toFixed(4),Pe=T.xcfxvalues,Se=Pe*+Te,Ae=T.created_at.toString(),me={date:Ae,value:Se};me.value=Se,me.date=Ae,xe.push(Y),ee.push(me)}),C=Oe.JE(document.getElementById("main")),fe=C.getOption(),fe.series[0].data=ee,fe.xAxis.data=xe,C.setOption(fe),Q.abrupt("return");case 27:case"end":return Q.stop()}},s)})),He.apply(this,arguments)}(0,a.useEffect)(function(){window.scrollTo(0,0),console.log(localStorage.getItem("DISCLAIMER")),(!localStorage.getItem("DISCLAIMER")||localStorage.getItem("DISCLAIMER")!=="confirm")&&St("block"),Le();var s=setInterval(function(){Na()},14e3);return function(){return clearInterval(s)}},[]);function Na(){be().get("https://evmtestnet.confluxscan.io/v1/homeDashboard").then(function(){var s=P()(f()().mark(function A(v){return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:gt(v.data.result.blockNumber);case 1:case"end":return c.stop()}},A)}));return function(A){return s.apply(this,arguments)}}())}function Le(){return Ye.apply(this,arguments)}function Ye(){return Ye=P()(f()().mark(function s(){return f()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:P()(f()().mark(function m(){var c,g,y,L,C,fe,E,Je,Q,T,Y,Te,Pe,Se,Ae,me,At,We,jt,Ft;return f()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,Ie.Summary();case 2:return c=w.sent,g=Ze(c.xcfxvalues).toCFX(),M(g),y=Ze(c.totalxcfxs).toCFX(),Me(parseFloat((g*y).toString()).toFixed(4)),w.next=9,be().get("https://www.confluxscan.net/stat/tokens/by-address?address=cfx%3Aacg158kvr8zanb1bs048ryb6rtrhr283ma70vz70tx&fields=iconUrl&fields=transferCount&fields=price&fields=totalPrice&fields=quoteUrl");case 9:return L=w.sent,C=L.data.data,fe=new ue(y),E=new ue(g),Je=fe.multipliedBy(E),Q=ue(Je*C.price).toFixed(2),console.log(Q),Ke(Q),T=C.holderCount,ca(T),xa(C.price),Y=parseFloat((+g*+C.price).toString()).toFixed(4),d(Y),be().get("https://confluxscan.net/stat/pos-info").then(function(){var X=P()(f()().mark(function B(K){var ae;return f()().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:ae=parseFloat((K.data.data.apy/100).toString()).toFixed(4),ce(ae);case 2:case"end":return ge.stop()}},B)}));return function(B){return X.apply(this,arguments)}}()),be().get("https://evmtestnet.confluxscan.io/v1/homeDashboard").then(function(){var X=P()(f()().mark(function B(K){return f()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:gt(K.data.result.blockNumber);case 1:case"end":return he.stop()}},B)}));return function(B){return X.apply(this,arguments)}}()),ee=[{value:1.5067,date:"Mon"},{value:1.5467,date:"Tue"},{value:1.6067,date:"Wed"},{value:1.7867,date:"Thu"},{value:1.0475,date:"Fri"},{value:1.8067,date:"Sat"},{value:1.9067,date:"Sun"}],xe=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],w.next=28,xt("");case 28:if(Te=w.sent,ee=[],xe=[],Te.data.rows.reverse().forEach(function(X,B){var K=X.xcfxvalues,ae=new ue(K);B%2;var he=+ae.toString()*+X.price,ge=X.created_at.toString(),qe={date:ge,value:he};qe.value=he,qe.date=ge,ee.push(qe),xe.push("")}),Pe=ee.length-1,pt(parseFloat(ee[Pe].value.toString()).toFixed(4)),Se={backgroundColor:"rgba(255,255,255,0)",tooltip:{trigger:"axis",show:!0,backgroundColor:"#000",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(126,199,255,1)"},{offset:.5,color:"rgba(126,199,255,1)"},{offset:1,color:"rgba(126,199,255,1)"}],global:!1}}},formatter:function(B){var K="";return B.forEach(function(ae){K+='<div style="display:inline-block;padding:0 5px;border-radius:10px;height:30px;width:100%;background-color:#000;color:#fff"><div style="font-size:12px;color:#999">Total Value Locked</div><span style="font-size:12px;color:#ccc">'+aa(ae.data.date).format("YYYY-MM-DD HH:00:00")+"</span><br>"+ae.value+"</span>"}),K}},legend:{align:"left",right:"10%",top:"10%",type:"plain",textStyle:{color:"#7ec7ff",fontSize:14},itemGap:50,itemWidth:100,itemHeight:10},grid:{top:"3%",left:"5%",right:"10%",bottom:"15%"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!1},splitLine:{show:!1,lineStyle:{color:"rgba(25,163,223,0)"}},axisTick:{show:!1},data:xe}],yAxis:[{type:"value",min:function(B){return B.min},splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,0.4)"}},axisLine:{show:!1,lineStyle:{color:"#233653"}},position:"right",axisLabel:{show:!0,color:"#ffffff",padding:0,formatter:function(B){return"$"+B.toFixed(4)}},axisTick:{show:!0}}],series:[{type:"line",symbol:"circle",showAllSymbol:!0,symbolSize:[4,4],smooth:!1,lineStyle:{width:3,color:"#EAB966",borderColor:"rgba(0,0,0,.0)"},itemStyle:{color:"rgba(234, 185, 102, .9)",borderColor:"#646ace",borderWidth:0},areaStyle:{color:new Oe.Q.o(0,0,0,1,[{offset:0,color:"#DD7C32"},{offset:1,color:"rgba(234, 181, 98, 0.1)"}],!1),shadowColor:"rgba(255, 255, 255, 0.5)",shadowBlur:0},data:ee}]},!Ue){w.next=50;break}return w.next=38,Ie.espacebalanceof(Ue);case 38:return Ae=w.sent,me=Ze(Ae).toCFX(),n(parseFloat(me.toString()).toFixed(2)),w.next=43,ya.balanceOf(Ue);case 43:At=w.sent,We=parseFloat(Ze(At).toCFX().toString()).toFixed(2),_(We),jt=new ue(Y),Ft=jt.times(We),ie(parseFloat(Ft).toFixed(4)),console.log(j);case 50:setTimeout(P()(f()().mark(function X(){return f()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:try{Ct=Oe.S1(document.getElementById("main")),Ct.setOption(Se)}catch{}case 1:case"end":return K.stop()}},X)})),500);case 51:case"end":return w.stop()}},m)}))();case 1:case"end":return v.stop()}},s)})),Ye.apply(this,arguments)}return(0,e.jsxs)("div",{className:x.stake,children:[(0,e.jsx)(wt.q,{children:(0,e.jsx)("link",{rel:"stylesheet",href:"style.css"})}),(0,e.jsxs)("div",{style:{display:Sa},children:[(0,e.jsx)("div",{className:"ant-modal-mask"}),(0,e.jsx)("div",{role:"dialog","aria-modal":"true",className:"ant-modal ant-modal-confirm ant-modal-confirm-info",style:{zIndex:"100000",width:"100%",top:"5%",position:"absolute",borderRadius:"20px"},children:(0,e.jsx)("div",{className:"ant-modal-content",style:{backgroundColor:"#393942",width:"60%",maxWidth:"1300px",margin:"0 auto",borderRadius:"20px"},children:(0,e.jsx)("div",{className:"ant-modal-body",style:{backgroundColor:"#393942",borderRadius:"20px"},children:(0,e.jsxs)("div",{className:"ant-modal-confirm-body-wrapper",children:[(0,e.jsx)("div",{className:"ant-modal-confirm-body",children:(0,e.jsx)("div",{className:"disclaimer",children:(0,e.jsxs)("div",{style:{padding:"0 40px"},children:[(0,e.jsx)("h4",{style:{margin:"20px 0 30px",fontSize:"28px"},children:te("stake.confirm_tit1")}),(0,e.jsx)("h4",{style:{margin:"20px 0",fontSize:"24px"},children:te("stake.confirm_tit2")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:te("stake.confirm_txt1")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:te("stake.confirm_txt2")}),(0,e.jsx)("p",{style:{color:"#fff",fontSize:"18px",lineHeight:"26px"},children:te("stake.confirm_txt3")}),(0,e.jsx)(qt,{onChange:ja,checked:!0,style:{backgroundColor:"EAB966",lineHeight:"20px",color:"#fff",fontSize:"36px",margin:"5px 0 5px"},children:(0,e.jsx)("span",{style:{lineHeight:"20px",fontSize:"16px"},children:te("stake.confirm_txt4")})})]})})}),(0,e.jsx)("div",{className:"ant-modal-confirm-btns",children:(0,e.jsx)(ye.Z,{onClick:Aa,block:!0,type:"primary",style:{backgroundColor:"#EAB966",border:"0",width:"60%",marginRight:"21%",fontSize:"25px",height:"56px",borderRadius:"28px",color:"#161621"},children:te("stake.btn_confirm")})})]})})})})]}),(0,e.jsxs)("div",{className:je.Z.inner,style:{backgroundColor:"#171520"},children:[(0,e.jsxs)("div",{className:x.sub_nav2,children:[(0,e.jsx)(et.rU,{to:"/data/stake",style:{color:"#EAB764"},children:te("stake.Stake_CFX")}),(0,e.jsx)(et.rU,{to:"/data/unstake",style:{color:"#FFF"},children:te("stake.unStake_CFX")})]}),(0,e.jsxs)(ne.Z,{gutter:32,className:x.brief,children:[(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:x.box1,children:[(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:["Available to stake ",(0,e.jsx)("div",{className:x.board}),(0,e.jsxs)("b",{children:[parseFloat(h).toFixed(2)," CFX"]})]}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,style:{textAlign:"right"},children:(0,e.jsx)(ye.Z,{target:"_blank",href:"https://app.swappi.io/#/swap",shape:"round",style:{background:"#161621",border:"0",lineHeight:"50px",color:"#E29346",height:"50px",width:"150px",fontSize:"24px"},children:"Get CFX"})})]}),(0,e.jsx)("div",{className:x.line}),(0,e.jsxs)(ne.Z,{children:[(0,e.jsxs)(i.Z,{xs:24,sm:24,md:16,lg:16,xl:16,children:["xCFX Balance",(0,e.jsx)("br",{}),(0,e.jsxs)("b",{children:[le," xCFX"]}),(0,e.jsx)("span",{className:x.plus,children:"+"})]}),(0,e.jsxs)(i.Z,{xs:24,sm:24,md:5,lg:5,xl:5,children:["CFX APR"," ",(0,e.jsxs)("b",{style:{fontWeight:"normal"},children:[parseFloat((+oe*100).toString()).toFixed(2),"%"]})]}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:7,lg:7,xl:7,style:{textAlign:"right"},children:(0,e.jsx)(ye.Z,{style:{background:"#EBB974",borderRadius:"8px",border:"0",color:"#161621",height:"50px",width:"150px",marginTop:"20px",fontSize:"24px",display:"none"},children:"Lock time"})})]}),(0,e.jsx)("div",{className:x.line}),(0,e.jsxs)(ne.Z,{style:{background:"#EBB974",borderRadius:"13px",padding:"15px 10px",margin:"20px 0"},children:[(0,e.jsx)(i.Z,{xs:10,sm:10,md:4,lg:4,xl:4,children:(0,e.jsx)("img",{className:je.Z.coin1,src:Dt,height:"80px"})}),(0,e.jsxs)(i.Z,{xs:14,sm:14,md:10,lg:10,xl:10,children:["Amount ",(0,e.jsx)("br",{}),(0,e.jsxs)("b",{children:[(0,e.jsx)($t.Z,{placeholder:"0",onChange:Fa,value:I,style:{display:"inline-block",backgroundColor:"transparent",width:"130px",border:0,fontFamily:"Univa Nova Bold",padding:0,fontSize:"32px"}}),"CFX"]})]}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:10,lg:10,xl:10,style:{textAlign:"right"},children:(0,e.jsx)(ye.Z,{style:{background:"rgba(22, 22, 33, 0.4)",borderRadius:"8px",border:"0",color:"#ffffff",height:"60px",width:"120px",fontSize:"24px",margin:"15px 15px 0 0"},onClick:Ea,children:"MAX"})})]}),(0,e.jsx)(Ca,{})]})}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:x.box2,children:[(0,e.jsx)("img",{className:je.Z.coin1,src:It,height:"40px"}),(0,e.jsx)("div",{className:x.board2}),"xCFX $",ha," ",(0,e.jsx)("span",{className:x.tip}),(0,e.jsx)("div",{className:je.Z.main5,style:{height:"340px",width:"100%",marginTop:"70px"},id:"main"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===0?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){ke(3,"",0)},children:"24h"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===1?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){ke(3,"weeks",1)},children:"7d"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===2?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){ke(3,"months",2)},children:"30d"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===3?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){ke(3,"years",3)},children:"1y"}),(0,e.jsx)("div",{className:x.tabbtn,style:Ce===4?{background:" #EAB966",borderRadius:"7px"}:{},onClick:function(){ke(3,"5years",4)},children:"5y"})]})})]}),(0,e.jsxs)(ne.Z,{gutter:32,children:[(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsx)("div",{className:x.box3,children:(0,e.jsxs)(ne.Z,{gutter:32,children:[(0,e.jsx)(i.Z,{span:12,children:"You will receive"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:[de," xCFX"]}),(0,e.jsx)(i.Z,{span:12,children:"Exchange rate"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:["1xCFX= ",parseFloat(p).toFixed(4),"CFX"]}),(0,e.jsx)(i.Z,{span:12,children:"Nucleon\u2019s fee"}),(0,e.jsx)(i.Z,{span:12,style:{textAlign:"right"},children:"10%"}),(0,e.jsx)(i.Z,{span:12,children:"Current Block Number"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:[(0,e.jsxs)("div",{id:"spinner2",className:"spinner-box2",style:{transform:"scale(15%,15%)",position:"absolute",top:"-34px"},children:[(0,e.jsx)("div",{className:"configure-border-1",children:(0,e.jsx)("div",{className:"configure-core"})}),(0,e.jsx)("div",{className:"configure-border-2",children:(0,e.jsx)("div",{className:"configure-core"})})]}),ga]})]})})}),(0,e.jsx)(i.Z,{xs:24,sm:24,md:12,lg:12,xl:12,children:(0,e.jsxs)("div",{className:x.box3,children:["Current Balance",(0,e.jsxs)(ne.Z,{gutter:32,style:{marginTop:"30px"},children:[(0,e.jsxs)(i.Z,{span:6,children:[(0,e.jsx)("span",{className:x.mintxt,children:"Value"}),(0,e.jsxs)("div",{children:["$",$]})]}),(0,e.jsx)(i.Z,{span:10,children:(0,e.jsxs)("div",{className:x.vbar,children:[(0,e.jsxs)("b",{children:["$",j]}),(0,e.jsx)("div",{className:x.mintxt,style:{color:"#418A55"},children:"\xA0"})]})}),(0,e.jsxs)(i.Z,{span:8,style:{textAlign:"right"},children:[(0,e.jsx)("span",{className:x.mintxt,children:"Share of the Pool"}),(0,e.jsx)("div",{children:+parseFloat(j).toFixed(0)/+parseFloat(we).toFixed(0)<1e-4?"> .1%":"~ "+(+parseFloat(j).toFixed(0)/+parseFloat(we).toFixed(0)*100).toFixed(2)+"%"})]})]})]})})]}),(0,e.jsxs)("div",{style:{top:"100px",position:"relative"},children:[(0,e.jsx)("h4",{children:"CFX statistics"}),(0,e.jsx)("div",{className:x.box5,children:(0,e.jsxs)(ne.Z,{gutter:32,children:[(0,e.jsx)(i.Z,{span:12,children:"Annual percentaje rate"}),(0,e.jsx)(i.Z,{span:12,style:{textAlign:"right"},children:"18.599%"}),(0,e.jsx)(i.Z,{span:12,children:"Total staked with CFX"}),(0,e.jsx)(i.Z,{span:12,style:{textAlign:"right"},children:De}),(0,e.jsx)(i.Z,{span:12,children:"Stakers"}),(0,e.jsx)(i.Z,{span:12,style:{textAlign:"right"},children:oa}),(0,e.jsx)(i.Z,{span:12,children:"xCFX market cap"}),(0,e.jsxs)(i.Z,{span:12,style:{textAlign:"right"},children:["$",(+De*+da).toString()]})]})}),(0,e.jsx)("h4",{children:"About"}),(0,e.jsxs)("div",{className:x.box5,children:[(0,e.jsx)("p",{children:"Nucleon is a liquid staking solution for Conflux PoS backed by industry-leading staking providers. Nucleon lets users stake their CFX by exchange CFX to xCFX - without locking assets or maintaining infrastructure."}),(0,e.jsx)("p",{children:"The value in xCFX will be automatically compounded and the xCFX value expands automatically"}),(0,e.jsx)("p",{children:"Our goal is to solve the problems associated with Conflux PoS staking - illiquidity, immovability and accessibility - making staked CFX liquid and allowing for participation with any amount of CFX to improve security of the Conflux network."})]})]})]})]})}},39659:function($e){$e.exports="data:image/png;base64,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"}}]);
