(self.webpackChunk=self.webpackChunk||[]).push([[8615],{23430:function(N,A,e){"use strict";e.d(A,{Z:function(){return T}});var _=e(87462),t=e(67294),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},g=W,m=e(84089),b=function(a,r){return t.createElement(m.Z,(0,_.Z)({},a,{ref:r,icon:g}))},M=t.forwardRef(b),T=M},5966:function(N,A,e){"use strict";var _=e(97685),t=e(1413),W=e(45987),g=e(21770),m=e(72723),b=e(55241),M=e(97435),T=e(67294),x=e(1961),a=e(85893),r=["fieldProps","proFieldProps"],i=["fieldProps","proFieldProps"],h="text",c=function(E){var v=E.fieldProps,C=E.proFieldProps,u=(0,W.Z)(E,r);return(0,a.jsx)(x.Z,(0,t.Z)({valueType:h,fieldProps:v,filedConfig:{valueType:h},proFieldProps:C},u))},f=function(E){var v=(0,g.Z)(E.open||!1,{value:E.open,onChange:E.onOpenChange}),C=(0,_.Z)(v,2),u=C[0],D=C[1];return(0,a.jsx)(m.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(n){var o,s=n.getFieldValue(E.name||[]);return(0,a.jsx)(b.Z,(0,t.Z)((0,t.Z)({getPopupContainer:function(d){return d&&d.parentNode?d.parentNode:d},onOpenChange:function(d){return D(d)},content:(0,a.jsxs)("div",{style:{padding:"4px 0"},children:[(o=E.statusRender)===null||o===void 0?void 0:o.call(E,s),E.strengthText?(0,a.jsx)("div",{style:{marginTop:10},children:(0,a.jsx)("span",{children:E.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},E.popoverProps),{},{open:u,children:E.children}))}})},B=function(E){var v=E.fieldProps,C=E.proFieldProps,u=(0,W.Z)(E,i),D=(0,T.useState)(!1),p=(0,_.Z)(D,2),n=p[0],o=p[1];return v!=null&&v.statusRender&&u.name?(0,a.jsx)(f,{name:u.name,statusRender:v==null?void 0:v.statusRender,popoverProps:v==null?void 0:v.popoverProps,strengthText:v==null?void 0:v.strengthText,open:n,onOpenChange:o,children:(0,a.jsx)("div",{children:(0,a.jsx)(x.Z,(0,t.Z)({valueType:"password",fieldProps:(0,t.Z)((0,t.Z)({},(0,M.Z)(v,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(l){var d;v==null||(d=v.onBlur)===null||d===void 0||d.call(v,l),o(!1)},onClick:function(l){var d;v==null||(d=v.onClick)===null||d===void 0||d.call(v,l),o(!0)}}),proFieldProps:C,filedConfig:{valueType:h}},u))})}):(0,a.jsx)(x.Z,(0,t.Z)({valueType:"password",fieldProps:v,proFieldProps:C,filedConfig:{valueType:h}},u))},O=c;O.Password=B,O.displayName="ProFormComponent",A.Z=O},80821:function(N,A,e){"use strict";e.d(A,{Z:function(){return x}});var _=e(5574),t=e.n(_),W=e(24963),g=e(86738),m=e(14726),b=e(83062),M=e(67294),T=e(85893);function x(a){var r=(0,M.useState)(!1),i=t()(r,2),h=i[0],c=i[1],f=(0,M.useContext)(W.Z),B=f.lang,O=f.notice,j=f.message,E=function(){c(!0),a.action().then(function(C){if(c(!1),typeof a.onSuccess=="function"&&a.onSuccess(C),a.messageSuccess){var u="";typeof a.messageSuccess=="function"?u=a.messageSuccess(C):u=a.messageSuccess,u=B("notification.".concat(u))+B("notification.title.success"),a.asynced?j.info(u):j.success(u)}}).catch(function(C){c(!1),typeof a.onError=="function"&&a.onError(C)})};return a.confirm?(0,T.jsx)(g.Z,{style:{width:500},title:a.confirmTitle?a.confirmTitle:B("notification.title.tip"),description:a.confirm,onConfirm:E,okText:"Yes",cancelText:"No",children:(0,T.jsx)(m.ZP,{disabled:a.disabled,icon:a.icon,loading:h,danger:a.danger,type:a.type,children:a.children})}):(0,T.jsx)(b.Z,{title:a.tips,children:(0,T.jsx)(m.ZP,{disabled:a.disabled,icon:a.icon,loading:h,onClick:E,danger:a.danger,type:a.type,children:a.children})})}},54964:function(N,A,e){"use strict";e.d(A,{a:function(){return a}});var _=e(78267),t=e.n(_),W=e(75458),g=e.n(W),m=e(67294),b=e(12320),M=e.n(b),T=e(89629),x=e(85893),a={convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}},r=new b.Terminal(a),i=new W.SearchAddon,h=new _.FitAddon,c=(0,m.forwardRef)(function(f,B){return(0,m.useEffect)(function(){window.addEventListener("resize",function(){f.showInModal||h.fit()}),f.style&&f.style.fontSize&&(r.options.fontSize=f.style.fontSize),r.loadAddon(h),r.loadAddon(i),r.open(document.getElementById("terminal-container")),f.showInModal||h.fit()},[]),(0,m.useImperativeHandle)(B,function(){return{write:function(j){r.write(j)},clear:function(){r.clear()},getTerminal:function(){return r},findNext:function(j){i.findNext(j)},findPrev:function(j){i.findPrevious(j)},fit:function(){h.fit()},onData:function(j){r.onData(j)}}}),(0,x.jsx)("div",{id:"terminal-container",style:{width:f.width?f.width:"100%",height:f.height?f.height:"500px"}})});A.Z=c},24963:function(N,A,e){"use strict";var _=e(67294),t=(0,_.createContext)({});A.Z=t},2742:function(N,A,e){"use strict";e.r(A),e.d(A,{default:function(){return l}});var _=e(15009),t=e.n(_),W=e(99289),g=e.n(W),m=e(5574),b=e.n(m),M=e(62597),T=e(38345),x=e(97269),a=e(62370),r=e(5966),i=e(97462),h=e(54006),c=e(67294),f=e(71230),B=e(15746),O=e(34041),j=e(14726),E=e(42075),v=e(54964),C=e(80821),u=e(23430),D=e(93162),p=e.n(D),n=e(60335),o=e(85893),s;function l(){var d=(0,c.useState)("500"),I=b()(d,2),P=I[0],L=I[1],w=(0,h.useParams)(),S=(0,c.useRef)(),$=(0,h.useModel)("subscriber");$.addDataHandler("container:log:"+w.id,function(U){var y,R;(y=S.current)===null||y===void 0||y.fit(),(R=S.current)===null||R===void 0||R.write(U.data)});var z=function(){var U=g()(t()().mark(function y(){var R,Z,K;return t()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:if(!w.id){H.next=5;break}return H.next=3,(0,M.Tb)({md5:(R=w.id)!==null&&R!==void 0?R:"",lineTotal:parseInt(P)});case 3:K=H.sent,(Z=S.current)===null||Z===void 0||Z.fit();case 5:case"end":return H.stop()}},y)}));return function(){return U.apply(this,arguments)}}();return(0,c.useEffect)(function(){var U,y;return(U=S.current)===null||U===void 0||U.fit(),(y=S.current)===null||y===void 0||y.clear(),z(),function(){$.progress.close("container:log:"+w.id)}},[P]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(T.Z,{direction:"column",gutter:[0,10],children:[(0,o.jsx)(x.A,{submitter:!1,layout:"horizontal",onValuesChange:function(y,R){L(R.lineTotal)},children:(0,o.jsxs)(f.Z,{gutter:[20,0],children:[(0,o.jsx)(B.Z,{span:8,children:(0,o.jsx)(a.Z,{name:"lineTotal",initialValue:"500",label:"\u83B7\u53D6\u65E5\u5FD7\u6761\u6570",children:(0,o.jsxs)(O.Z,{defaultValue:"500",children:[(0,o.jsx)(O.Z.Option,{value:"100",children:"100\u6761\u65E5\u5FD7\u6570\u636E"}),(0,o.jsx)(O.Z.Option,{value:"200",children:"200\u6761\u65E5\u5FD7\u6570\u636E"}),(0,o.jsx)(O.Z.Option,{value:"500",children:"500\u6761\u65E5\u5FD7\u6570\u636E"}),(0,o.jsx)(O.Z.Option,{value:"1000",children:"1000\u6761\u65E5\u5FD7\u6570\u636E"}),(0,o.jsx)(O.Z.Option,{value:"-1",children:"\u5168\u90E8\uFF08\u4E0B\u8F7D\u53EF\u89C1\uFF09"})]})})}),(0,o.jsx)(B.Z,{children:(0,o.jsx)(j.ZP,{onClick:function(){var y;(y=S.current)===null||y===void 0||y.clear()},children:"\u6E05\u5C4F"})}),(0,o.jsx)(B.Z,{children:(0,o.jsx)(r.Z,{label:"\u67E5\u627E",name:"keywork"})}),(0,o.jsx)(B.Z,{children:(0,o.jsx)(i.Z,{name:["keywork"],children:function(y){var R=y.keywork;return(0,o.jsxs)(E.Z,{size:10,children:[(0,o.jsx)(j.ZP,{onClick:function(){var K;(K=S.current)===null||K===void 0||K.findNext(R)},children:"\u4E0B\u4E00\u4E2A"},"next"),(0,o.jsx)(j.ZP,{onClick:function(){var K;(K=S.current)===null||K===void 0||K.findPrev(R)},children:"\u4E0A\u4E00\u4E2A"},"prev")]})}})}),(0,o.jsx)(B.Z,{children:(0,o.jsx)(C.Z,{icon:(0,o.jsx)(u.Z,{}),action:function(){var y;return(0,M.XH)({md5:(y=w.id)!==null&&y!==void 0?y:"",lineTotal:parseInt(P)})},onSuccess:function(y){var R;(0,n.jV)({md5:(R=w.id)!==null&&R!==void 0?R:""}).then(function(Z){var K=new Blob([y],{type:"text/plain"});(0,D.saveAs)(K,Z.data.info.Name.replaceAll("/","")+"_"+new Date().toLocaleDateString()+".log")})},messageSuccess:"export",children:"\u4E0B\u8F7D\u65E5\u5FD7"})})]})}),(0,o.jsx)(v.Z,{ref:S,height:"580px",style:{fontSize:12}})]})})}},62597:function(N,A,e){"use strict";e.d(A,{$G:function(){return b},Ct:function(){return B},Tb:function(){return a},XH:function(){return i},cl:function(){return T},iE:function(){return c},lK:function(){return v},xb:function(){return j}});var _=e(15009),t=e.n(_),W=e(99289),g=e.n(W),m=e(54006);function b(u){return M.apply(this,arguments)}function M(){return M=g()(t()().mark(function u(D){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/site/create-by-image",{method:"POST",data:D}));case 1:case"end":return n.stop()}},u)})),M.apply(this,arguments)}function T(u){return x.apply(this,arguments)}function x(){return x=g()(t()().mark(function u(D){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/site/get-list",{method:"POST",data:D}));case 1:case"end":return n.stop()}},u)})),x.apply(this,arguments)}function a(u){return r.apply(this,arguments)}function r(){return r=g()(t()().mark(function u(D){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return D.download=!1,n.next=3,(0,m.request)("/api/app/log/run",{method:"POST",data:D});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},u)})),r.apply(this,arguments)}function i(u){return h.apply(this,arguments)}function h(){return h=g()(t()().mark(function u(D){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return D.download=!0,n.next=3,(0,m.request)("/api/app/log/run",{method:"POST",data:D,responseType:"blob"});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},u)})),h.apply(this,arguments)}function c(u){return f.apply(this,arguments)}function f(){return f=g()(t()().mark(function u(D){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,m.request)("/api/app/site/get-detail",{data:D,method:"POST"});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},u)})),f.apply(this,arguments)}function B(u){return O.apply(this,arguments)}function O(){return O=g()(t()().mark(function u(D){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/container/delete",{method:"POST",data:D}));case 1:case"end":return n.stop()}},u)})),O.apply(this,arguments)}function j(u){return E.apply(this,arguments)}function E(){return E=g()(t()().mark(function u(D){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/site/delete",{method:"POST",data:D}));case 1:case"end":return n.stop()}},u)})),E.apply(this,arguments)}function v(u){return C.apply(this,arguments)}function C(){return C=g()(t()().mark(function u(D){return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,m.request)("/api/app/site/update-title",{method:"POST",data:D});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},u)})),C.apply(this,arguments)}},60335:function(N,A,e){"use strict";e.d(A,{IE:function(){return T},IW:function(){return b},KK:function(){return c},LJ:function(){return B},RF:function(){return v},Re:function(){return j},aF:function(){return u},eE:function(){return i},jV:function(){return a}});var _=e(15009),t=e.n(_),W=e(99289),g=e.n(W),m=e(54006);function b(p){return M.apply(this,arguments)}function M(){return M=g()(t()().mark(function p(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/container/status",{method:"POST",data:n}));case 1:case"end":return s.stop()}},p)})),M.apply(this,arguments)}function T(p){return x.apply(this,arguments)}function x(){return x=g()(t()().mark(function p(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/container/get-list",{data:n,method:"POST"}));case 1:case"end":return s.stop()}},p)})),x.apply(this,arguments)}function a(p){return r.apply(this,arguments)}function r(){return r=g()(t()().mark(function p(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/container/get-detail",{data:n,method:"POST"}));case 1:case"end":return s.stop()}},p)})),r.apply(this,arguments)}function i(p){return h.apply(this,arguments)}function h(){return h=g()(t()().mark(function p(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/container/update",{data:n,method:"POST"}));case 1:case"end":return s.stop()}},p)})),h.apply(this,arguments)}function c(){return f.apply(this,arguments)}function f(){return f=g()(t()().mark(function p(){return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,m.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return o.stop()}},p)})),f.apply(this,arguments)}function B(p){return O.apply(this,arguments)}function O(){return O=g()(t()().mark(function p(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/container/export",{method:"POST",data:n,responseType:"blob"}));case 1:case"end":return s.stop()}},p)})),O.apply(this,arguments)}function j(p){return E.apply(this,arguments)}function E(){return E=g()(t()().mark(function p(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/container/commit",{method:"POST",data:n}));case 1:case"end":return s.stop()}},p)})),E.apply(this,arguments)}function v(p){return C.apply(this,arguments)}function C(){return C=g()(t()().mark(function p(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/container/upgrade",{method:"POST",data:n}));case 1:case"end":return s.stop()}},p)})),C.apply(this,arguments)}function u(p){return D.apply(this,arguments)}function D(){return D=g()(t()().mark(function p(n){return t()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,m.request)("/api/app/container/copy",{method:"POST",data:n}));case 1:case"end":return s.stop()}},p)})),D.apply(this,arguments)}},86738:function(N,A,e){"use strict";e.d(A,{Z:function(){return s}});var _=e(67294),t=e(21640),W=e(93967),g=e.n(W),m=e(21770),b=e(98423),M=e(53124),T=e(55241),x=e(86743),a=e(81643),r=e(14726),i=e(33671),h=e(10110),c=e(24457),f=e(66330),B=e(83559);const O=l=>{const{componentCls:d,iconCls:I,antCls:P,zIndexPopup:L,colorText:w,colorWarning:S,marginXXS:$,marginXS:z,fontSize:U,fontWeightStrong:y,colorTextHeading:R}=l;return{[d]:{zIndex:L,[`&${P}-popover`]:{fontSize:U},[`${d}-message`]:{marginBottom:z,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${d}-message-icon ${I}`]:{color:S,fontSize:U,lineHeight:1,marginInlineEnd:z},[`${d}-title`]:{fontWeight:y,color:R,"&:only-child":{fontWeight:"normal"}},[`${d}-description`]:{marginTop:$,color:w}},[`${d}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:z}}}}},j=l=>{const{zIndexPopupBase:d}=l;return{zIndexPopup:d+60}};var E=(0,B.I$)("Popconfirm",l=>O(l),j,{resetStyle:!1}),v=function(l,d){var I={};for(var P in l)Object.prototype.hasOwnProperty.call(l,P)&&d.indexOf(P)<0&&(I[P]=l[P]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,P=Object.getOwnPropertySymbols(l);L<P.length;L++)d.indexOf(P[L])<0&&Object.prototype.propertyIsEnumerable.call(l,P[L])&&(I[P[L]]=l[P[L]]);return I};const C=l=>{const{prefixCls:d,okButtonProps:I,cancelButtonProps:P,title:L,description:w,cancelText:S,okText:$,okType:z="primary",icon:U=_.createElement(t.Z,null),showCancel:y=!0,close:R,onConfirm:Z,onCancel:K,onPopupClick:k}=l,{getPrefixCls:H}=_.useContext(M.E_),[G]=(0,h.Z)("Popconfirm",c.Z.Popconfirm),X=(0,a.Z)(L),Y=(0,a.Z)(w);return _.createElement("div",{className:`${d}-inner-content`,onClick:k},_.createElement("div",{className:`${d}-message`},U&&_.createElement("span",{className:`${d}-message-icon`},U),_.createElement("div",{className:`${d}-message-text`},X&&_.createElement("div",{className:`${d}-title`},X),Y&&_.createElement("div",{className:`${d}-description`},Y))),_.createElement("div",{className:`${d}-buttons`},y&&_.createElement(r.ZP,Object.assign({onClick:K,size:"small"},P),S||(G==null?void 0:G.cancelText)),_.createElement(x.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,i.nx)(z)),I),actionFn:Z,close:R,prefixCls:H("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},$||(G==null?void 0:G.okText))))};var D=l=>{const{prefixCls:d,placement:I,className:P,style:L}=l,w=v(l,["prefixCls","placement","className","style"]),{getPrefixCls:S}=_.useContext(M.E_),$=S("popconfirm",d),[z]=E($);return z(_.createElement(f.ZP,{placement:I,className:g()($,P),style:L,content:_.createElement(C,Object.assign({prefixCls:$},w))}))},p=function(l,d){var I={};for(var P in l)Object.prototype.hasOwnProperty.call(l,P)&&d.indexOf(P)<0&&(I[P]=l[P]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,P=Object.getOwnPropertySymbols(l);L<P.length;L++)d.indexOf(P[L])<0&&Object.prototype.propertyIsEnumerable.call(l,P[L])&&(I[P[L]]=l[P[L]]);return I};const o=_.forwardRef((l,d)=>{var I,P;const{prefixCls:L,placement:w="top",trigger:S="click",okType:$="primary",icon:z=_.createElement(t.Z,null),children:U,overlayClassName:y,onOpenChange:R,onVisibleChange:Z}=l,K=p(l,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:k}=_.useContext(M.E_),[H,G]=(0,m.Z)(!1,{value:(I=l.open)!==null&&I!==void 0?I:l.visible,defaultValue:(P=l.defaultOpen)!==null&&P!==void 0?P:l.defaultVisible}),X=(F,V)=>{G(F,!0),Z==null||Z(F),R==null||R(F,V)},Y=F=>{X(!1,F)},Q=F=>{var V;return(V=l.onConfirm)===null||V===void 0?void 0:V.call(void 0,F)},q=F=>{var V;X(!1,F),(V=l.onCancel)===null||V===void 0||V.call(void 0,F)},ee=(F,V)=>{const{disabled:re=!1}=l;re||X(F,V)},J=k("popconfirm",L),ne=g()(J,y),[te]=E(J);return te(_.createElement(T.Z,Object.assign({},(0,b.Z)(K,["title"]),{trigger:S,placement:w,onOpenChange:ee,open:H,ref:d,overlayClassName:ne,content:_.createElement(C,Object.assign({okType:$,icon:z},l,{prefixCls:J,close:Y,onConfirm:Q,onCancel:q})),"data-popover-inject":!0}),U))});o._InternalPanelDoNotUseOrYouWillBeFired=D;var s=o},93162:function(N,A,e){var _,t,W;(function(g,m){t=[],_=m,W=typeof _=="function"?_.apply(A,t):_,W!==void 0&&(N.exports=W)})(this,function(){"use strict";function g(r,i){return typeof i=="undefined"?i={autoBom:!1}:typeof i!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\uFEFF",r],{type:r.type}):r}function m(r,i,h){var c=new XMLHttpRequest;c.open("GET",r),c.responseType="blob",c.onload=function(){a(c.response,i,h)},c.onerror=function(){console.error("could not download file")},c.send()}function b(r){var i=new XMLHttpRequest;i.open("HEAD",r,!1);try{i.send()}catch(h){}return 200<=i.status&&299>=i.status}function M(r){try{r.dispatchEvent(new MouseEvent("click"))}catch(h){var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(i)}}var T=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof e.g=="object"&&e.g.global===e.g?e.g:void 0,x=T.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=T.saveAs||(typeof window!="object"||window!==T?function(){}:"download"in HTMLAnchorElement.prototype&&!x?function(r,i,h){var c=T.URL||T.webkitURL,f=document.createElement("a");i=i||r.name||"download",f.download=i,f.rel="noopener",typeof r=="string"?(f.href=r,f.origin===location.origin?M(f):b(f.href)?m(r,i,h):M(f,f.target="_blank")):(f.href=c.createObjectURL(r),setTimeout(function(){c.revokeObjectURL(f.href)},4e4),setTimeout(function(){M(f)},0))}:"msSaveOrOpenBlob"in navigator?function(r,i,h){if(i=i||r.name||"download",typeof r!="string")navigator.msSaveOrOpenBlob(g(r,h),i);else if(b(r))m(r,i,h);else{var c=document.createElement("a");c.href=r,c.target="_blank",setTimeout(function(){M(c)})}}:function(r,i,h,c){if(c=c||open("","_blank"),c&&(c.document.title=c.document.body.innerText="downloading..."),typeof r=="string")return m(r,i,h);var f=r.type==="application/octet-stream",B=/constructor/i.test(T.HTMLElement)||T.safari,O=/CriOS\/[\d]+/.test(navigator.userAgent);if((O||f&&B||x)&&typeof FileReader!="undefined"){var j=new FileReader;j.onloadend=function(){var C=j.result;C=O?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=C:location=C,c=null},j.readAsDataURL(r)}else{var E=T.URL||T.webkitURL,v=E.createObjectURL(r);c?c.location=v:location.href=v,c=null,setTimeout(function(){E.revokeObjectURL(v)},4e4)}});T.saveAs=a.saveAs=a,N.exports=a})}}]);
