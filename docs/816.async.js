(self.webpackChunk=self.webpackChunk||[]).push([[816],{9708:function(E,m,r){"use strict";r.d(m,{F:function(){return f},Z:function(){return h}});var s=r(4942),c=r(94184),o=r.n(c),u=r(93355),d=(0,u.b)("warning","error","");function h(n,a,p){var l;return o()((l={},(0,s.Z)(l,"".concat(n,"-status-success"),a==="success"),(0,s.Z)(l,"".concat(n,"-status-warning"),a==="warning"),(0,s.Z)(l,"".concat(n,"-status-error"),a==="error"),(0,s.Z)(l,"".concat(n,"-status-validating"),a==="validating"),(0,s.Z)(l,"".concat(n,"-has-feedback"),p),l))}var f=function(a,p){return p||a}},8410:function(E,m,r){"use strict";r.d(m,{o:function(){return u}});var s=r(67294),c=r(98924),o=(0,c.Z)()?s.useLayoutEffect:s.useEffect;m.Z=o;var u=function(h,f){var n=s.useRef(!0);o(function(){if(!n.current)return h()},f),o(function(){return n.current=!1,function(){n.current=!0}},[])}},3129:function(E,m,r){"use strict";r.d(m,{Z:function(){return n}});var s=r(97685),c=r(67294);function o(a){var p=c.useRef();p.current=a;var l=c.useCallback(function(){for(var t,i=arguments.length,w=new Array(i),C=0;C<i;C++)w[C]=arguments[C];return(t=p.current)===null||t===void 0?void 0:t.call.apply(t,[p].concat(w))},[]);return l}var u=r(8410),d=r(30470),h;(function(a){a[a.INNER=0]="INNER",a[a.PROP=1]="PROP"})(h||(h={}));function f(a){return a!==void 0}function n(a,p){var l=p||{},t=l.defaultValue,i=l.value,w=l.onChange,C=l.postState,B=(0,d.Z)(function(){var v=void 0,_;return f(i)?(v=i,_=h.PROP):f(t)?(v=typeof t=="function"?t():t,_=h.PROP):(v=typeof a=="function"?a():a,_=h.INNER),[v,_,v]}),P=(0,s.Z)(B,2),M=P[0],I=P[1],R=f(i)?i:M[0],A=C?C(R):R;(0,u.o)(function(){I(function(v){var _=(0,s.Z)(v,1),g=_[0];return[i,h.PROP,g]})},[i]);var y=c.useRef(),U=o(function(v,_){I(function(g){var O=(0,s.Z)(g,3),T=O[0],N=O[1],D=O[2],e=typeof v=="function"?v(T):v;if(e===T)return g;var S=N===h.INNER&&y.current!==D?D:T;return[e,h.INNER,S]},_)}),q=o(w);return(0,u.Z)(function(){var v=(0,s.Z)(M,3),_=v[0],g=v[1],O=v[2];_!==O&&g===h.INNER&&(q(_,O),y.current=O)},[M]),[A,U]}},96774:function(E){E.exports=function(r,s,c,o){var u=c?c.call(o,r,s):void 0;if(u!==void 0)return!!u;if(r===s)return!0;if(typeof r!="object"||!r||typeof s!="object"||!s)return!1;var d=Object.keys(r),h=Object.keys(s);if(d.length!==h.length)return!1;for(var f=Object.prototype.hasOwnProperty.bind(s),n=0;n<d.length;n++){var a=d[n];if(!f(a))return!1;var p=r[a],l=s[a];if(u=c?c.call(o,p,l,a):void 0,u===!1||u===void 0&&p!==l)return!1}return!0}},18237:function(E){function m(s){var c,o,u,d=2;for(typeof Symbol<"u"&&(o=Symbol.asyncIterator,u=Symbol.iterator);d--;){if(o&&(c=s[o])!=null)return c.call(s);if(u&&(c=s[u])!=null)return new r(c.call(s));o="@@asyncIterator",u="@@iterator"}throw new TypeError("Object is not async iterable")}function r(s){function c(o){if(Object(o)!==o)return Promise.reject(new TypeError(o+" is not an object."));var u=o.done;return Promise.resolve(o.value).then(function(d){return{value:d,done:u}})}return r=function(u){this.s=u,this.n=u.next},r.prototype={s:null,n:null,next:function(){return c(this.n.apply(this.s,arguments))},return:function(u){var d=this.s.return;return d===void 0?Promise.resolve({value:u,done:!0}):c(d.apply(this.s,arguments))},throw:function(u){var d=this.s.return;return d===void 0?Promise.reject(u):c(d.apply(this.s,arguments))}},new r(s)}E.exports=m,E.exports.__esModule=!0,E.exports.default=E.exports},31251:function(E,m,r){"use strict";r.d(m,{$j:function(){return A},$z:function(){return w},Hu:function(){return v},KQ:function(){return M},T7:function(){return y},cs:function(){return _},dR:function(){return g},fb:function(){return u.Z},mA:function(){return B},xx:function(){return C}});var s=r(67294),c=r(64529),o=r(782),u=r(94973),d=r(2343),h=r(97810),f=r(77849),n=r(49843),a=class extends f.Z{detectProvider=()=>(0,h.Z)({injectFlag:"ethereum",defaultWaltFlag:"isMetaMask"});requestAccounts=()=>this.provider.request({method:"eth_requestAccounts"});getAccounts=()=>this.provider.request({method:"eth_accounts"});getChainId=()=>this.provider.request({method:"eth_chainId"});getBalance=async()=>{if(!this.account)throw new Error("getBalance error: must connect to wallet");try{return await this.provider.request({method:"eth_getBalance",params:[this.account,"latest"]})}catch(e){throw e}};onAccountsChange=e=>this.provider.on("accountsChanged",e);onChainIdChange=e=>this.provider.on("chainChanged",e);sendTransaction=e=>this.provider.request({method:"eth_sendTransaction",params:[e]});personalSign=e=>this.provider.request({method:"personal_sign",params:[e,this.account]});typedSign=e=>this.provider.request({method:"eth_signTypedData_v4",params:[this.account,JSON.stringify(e)]});addChain=e=>this.provider.request({method:"wallet_addEthereumChain",params:[e]});switchChain=e=>this.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]});watchAsset=e=>this.provider.request({method:"wallet_watchAsset",params:e});isHostedByFluent=()=>this.provider===window.conflux;requestPermissions=e=>this.provider.request({method:"wallet_requestPermissions",params:[e]});requestCrossNetworkPermission=()=>this.isHostedByFluent()?this.provider.request({method:"wallet_requestPermissions",params:[{wallet_accounts:{},wallet_crossNetworkTypeGetConfluxBase32Address:{},wallet_crossNetworkTypeGetEthereumHexAddress:{}}]}):Promise.reject()},p=new d.Z(new a),l=class extends a{detectProvider=()=>(0,h.Z)({injectFlag:"ethereum",walletFlag:"isMetaMask",isSingleWalletFlag:!0})},t=new d.Z(new l),i=(0,c.Ue)((0,o.XR)(()=>({status:"in-detecting",accounts:void 0,chainId:void 0,balance:void 0})));(0,n.B)(t,i);var w=()=>i(n.w.status),C=()=>i(n.w.chainId),B=()=>i(n.w.account),P=0,M=()=>((0,s.useEffect)(()=>(++P===1&&t.startTrackBalance(),()=>{--P===0&&t.stopTrackBalance()}),[]),i(n.w.balance)),I=t.trackBalanceChangeOnce,R=t.completeDetect,A=t.connect,y=t.sendTransaction,U=t.personalSign,q=t.typedSign,v=t.addChain,_=t.switchChain,g=t.watchAsset,O=t.requestPermissions,T=t.requestCrossNetworkPermission,N=t.setCrossNetworkChain,D=t.provider;t.completeDetect().then(()=>D=t.provider)},65123:function(E,m,r){"use strict";r.d(m,{$j:function(){return A},$z:function(){return w},Hu:function(){return v},KQ:function(){return M},cs:function(){return _},mA:function(){return B},xx:function(){return C}});var s=r(67294),c=r(64529),o=r(782),u=r(94973),d=r(2343),h=r(97810),f=r(77849),n=r(49843),a=class extends f.Z{detectProvider=()=>(0,h.Z)({injectFlag:"ethereum",defaultWaltFlag:"isMetaMask"});requestAccounts=()=>this.provider.request({method:"eth_requestAccounts"});getAccounts=()=>this.provider.request({method:"eth_accounts"});getChainId=()=>this.provider.request({method:"eth_chainId"});getBalance=async()=>{if(!this.account)throw new Error("getBalance error: must connect to wallet");try{return await this.provider.request({method:"eth_getBalance",params:[this.account,"latest"]})}catch(e){throw e}};onAccountsChange=e=>this.provider.on("accountsChanged",e);onChainIdChange=e=>this.provider.on("chainChanged",e);sendTransaction=e=>this.provider.request({method:"eth_sendTransaction",params:[e]});personalSign=e=>this.provider.request({method:"personal_sign",params:[e,this.account]});typedSign=e=>this.provider.request({method:"eth_signTypedData_v4",params:[this.account,JSON.stringify(e)]});addChain=e=>this.provider.request({method:"wallet_addEthereumChain",params:[e]});switchChain=e=>this.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]});watchAsset=e=>this.provider.request({method:"wallet_watchAsset",params:e});isHostedByFluent=()=>this.provider===window.conflux;requestPermissions=e=>this.provider.request({method:"wallet_requestPermissions",params:[e]});requestCrossNetworkPermission=()=>this.isHostedByFluent()?this.provider.request({method:"wallet_requestPermissions",params:[{wallet_accounts:{},wallet_crossNetworkTypeGetConfluxBase32Address:{},wallet_crossNetworkTypeGetEthereumHexAddress:{}}]}):Promise.reject()},p=new d.Z(new a),l=class extends a{detectProvider=()=>(0,h.Z)({injectFlag:"okxwallet",walletFlag:"isOkxWallet"})},t=new d.Z(new l),i=(0,c.Ue)((0,o.XR)(()=>({status:"in-detecting",accounts:void 0,chainId:void 0,balance:void 0})));(0,n.B)(t,i);var w=()=>i(n.w.status),C=()=>i(n.w.chainId),B=()=>i(n.w.account),P=0,M=()=>((0,s.useEffect)(()=>(++P===1&&t.startTrackBalance(),()=>{--P===0&&t.stopTrackBalance()}),[]),i(n.w.balance)),I=t.trackBalanceChangeOnce,R=t.completeDetect,A=t.connect,y=t.sendTransaction,U=t.personalSign,q=t.typedSign,v=t.addChain,_=t.switchChain,g=t.watchAsset,O=t.requestPermissions,T=t.requestCrossNetworkPermission,N=t.setCrossNetworkChain,D=t.provider;t.completeDetect().then(()=>D=t.provider)},859:function(E,m,r){"use strict";r.d(m,{$j:function(){return A},$z:function(){return w},Hu:function(){return v},KQ:function(){return M},cs:function(){return _},mA:function(){return B},xx:function(){return C}});var s=r(67294),c=r(64529),o=r(782),u=r(94973),d=r(2343),h=r(97810),f=r(77849),n=r(49843),a=class extends f.Z{detectProvider=()=>(0,h.Z)({injectFlag:"ethereum",defaultWaltFlag:"isMetaMask"});requestAccounts=()=>this.provider.request({method:"eth_requestAccounts"});getAccounts=()=>this.provider.request({method:"eth_accounts"});getChainId=()=>this.provider.request({method:"eth_chainId"});getBalance=async()=>{if(!this.account)throw new Error("getBalance error: must connect to wallet");try{return await this.provider.request({method:"eth_getBalance",params:[this.account,"latest"]})}catch(e){throw e}};onAccountsChange=e=>this.provider.on("accountsChanged",e);onChainIdChange=e=>this.provider.on("chainChanged",e);sendTransaction=e=>this.provider.request({method:"eth_sendTransaction",params:[e]});personalSign=e=>this.provider.request({method:"personal_sign",params:[e,this.account]});typedSign=e=>this.provider.request({method:"eth_signTypedData_v4",params:[this.account,JSON.stringify(e)]});addChain=e=>this.provider.request({method:"wallet_addEthereumChain",params:[e]});switchChain=e=>this.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]});watchAsset=e=>this.provider.request({method:"wallet_watchAsset",params:e});isHostedByFluent=()=>this.provider===window.conflux;requestPermissions=e=>this.provider.request({method:"wallet_requestPermissions",params:[e]});requestCrossNetworkPermission=()=>this.isHostedByFluent()?this.provider.request({method:"wallet_requestPermissions",params:[{wallet_accounts:{},wallet_crossNetworkTypeGetConfluxBase32Address:{},wallet_crossNetworkTypeGetEthereumHexAddress:{}}]}):Promise.reject()},p=new d.Z(new a),l=class extends a{detectProvider=()=>(0,h.Z)({injectFlag:"ethereum",walletFlag:"isTokenPocket"})},t=new d.Z(new l),i=(0,c.Ue)((0,o.XR)(()=>({status:"in-detecting",accounts:void 0,chainId:void 0,balance:void 0})));(0,n.B)(t,i);var w=()=>i(n.w.status),C=()=>i(n.w.chainId),B=()=>i(n.w.account),P=0,M=()=>((0,s.useEffect)(()=>(++P===1&&t.startTrackBalance(),()=>{--P===0&&t.stopTrackBalance()}),[]),i(n.w.balance)),I=t.trackBalanceChangeOnce,R=t.completeDetect,A=t.connect,y=t.sendTransaction,U=t.personalSign,q=t.typedSign,v=t.addChain,_=t.switchChain,g=t.watchAsset,O=t.requestPermissions,T=t.requestCrossNetworkPermission,N=t.setCrossNetworkChain,D=t.provider;t.completeDetect().then(()=>D=t.provider)},4265:function(E,m,r){"use strict";r.d(m,{$j:function(){return A},$z:function(){return w},Hu:function(){return v},KQ:function(){return M},T7:function(){return y},cs:function(){return _},dR:function(){return g},fb:function(){return u.Z},mA:function(){return B},xx:function(){return C}});var s=r(67294),c=r(64529),o=r(782),u=r(94973),d=r(2343),h=r(97810),f=r(77849),n=r(49843),a=class extends f.Z{detectProvider=()=>(0,h.Z)({injectFlag:"ethereum",defaultWaltFlag:"isMetaMask"});requestAccounts=()=>this.provider.request({method:"eth_requestAccounts"});getAccounts=()=>this.provider.request({method:"eth_accounts"});getChainId=()=>this.provider.request({method:"eth_chainId"});getBalance=async()=>{if(!this.account)throw new Error("getBalance error: must connect to wallet");try{return await this.provider.request({method:"eth_getBalance",params:[this.account,"latest"]})}catch(e){throw e}};onAccountsChange=e=>this.provider.on("accountsChanged",e);onChainIdChange=e=>this.provider.on("chainChanged",e);sendTransaction=e=>this.provider.request({method:"eth_sendTransaction",params:[e]});personalSign=e=>this.provider.request({method:"personal_sign",params:[e,this.account]});typedSign=e=>this.provider.request({method:"eth_signTypedData_v4",params:[this.account,JSON.stringify(e)]});addChain=e=>this.provider.request({method:"wallet_addEthereumChain",params:[e]});switchChain=e=>this.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:e}]});watchAsset=e=>this.provider.request({method:"wallet_watchAsset",params:e});isHostedByFluent=()=>this.provider===window.conflux;requestPermissions=e=>this.provider.request({method:"wallet_requestPermissions",params:[e]});requestCrossNetworkPermission=()=>this.isHostedByFluent()?this.provider.request({method:"wallet_requestPermissions",params:[{wallet_accounts:{},wallet_crossNetworkTypeGetConfluxBase32Address:{},wallet_crossNetworkTypeGetEthereumHexAddress:{}}]}):Promise.reject()},p=new d.Z(new a),l=class extends a{detectProvider=()=>(0,h.Z)({injectFlag:"fluent",walletFlag:"isFluent"});requestCrossNetworkPermission=()=>this.provider.request({method:"wallet_requestPermissions",params:[{wallet_accounts:{},wallet_crossNetworkTypeGetConfluxBase32Address:{},wallet_crossNetworkTypeGetEthereumHexAddress:{}}]})},t=new d.Z(new l),i=(0,c.Ue)((0,o.XR)(()=>({status:"in-detecting",accounts:void 0,chainId:void 0,balance:void 0})));(0,n.B)(t,i);var w=()=>i(n.w.status),C=()=>i(n.w.chainId),B=()=>i(n.w.account),P=0,M=()=>((0,s.useEffect)(()=>(++P===1&&t.startTrackBalance(),()=>{--P===0&&t.stopTrackBalance()}),[]),i(n.w.balance)),I=t.trackBalanceChangeOnce,R=t.completeDetect,A=t.connect,y=t.sendTransaction,U=t.personalSign,q=t.typedSign,v=t.addChain,_=t.switchChain,g=t.watchAsset,O=t.requestPermissions,T=t.requestCrossNetworkPermission,N=t.setCrossNetworkChain,D=t.provider;t.completeDetect().then(()=>D=t.provider)}}]);
