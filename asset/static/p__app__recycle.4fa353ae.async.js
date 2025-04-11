"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1610],{87740:function(y,c,e){e.d(c,{Z:function(){return O}});var E=e(87462),r=e(67294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"},s=u,i=e(84089),P=function(a,l){return r.createElement(i.Z,(0,E.Z)({},a,{ref:l,icon:s}))},h=r.forwardRef(P),O=h},1699:function(y,c,e){e.d(c,{u:function(){return T}});var E=e(9783),r=e.n(E),u=e(97857),s=e.n(u),i=e(67294),P=e(82346),h=e(42075),O=e(85893),T=function(l){var D=(0,P.useAccess)(),f=Array.isArray(l.access)?l.access:[l.access],d;return typeof l.children=="function"?d=l.children(f.reduce(function(g,v){return s()(s()({},g),{},r()({},v,D[v]))},{})):f.every(function(g){return D[g]})?d=l.children:d=l.fallback,l.space?(0,O.jsx)(h.Z,s()(s()({},l.space),{},{children:d})):d}},80821:function(y,c,e){e.d(c,{Z:function(){return T}});var E=e(5574),r=e.n(E),u=e(24963),s=e(86738),i=e(28036),P=e(83062),h=e(67294),O=e(85893);function T(a){var l=(0,h.useState)(!1),D=r()(l,2),f=D[0],d=D[1],g=(0,h.useContext)(u.Z),v=g.lang,K=g.notice,j=g.message,U=function(){d(!0);var L=a.action();L instanceof Promise?L.then(function(p){if(d(!1),p){typeof a.onSuccess=="function"&&a.onSuccess(p);var t="";a.messageSuccess?typeof a.messageSuccess=="function"?t=a.messageSuccess(p):t=a.messageSuccess.indexOf("notification.")==0?v(a.messageSuccess):a.messageSuccess:t=v("notification.finish"),a.asynced?j.info(t):j.success(t)}}).catch(function(p){d(!1),typeof a.onError=="function"&&a.onError(p)}):d(!1)};return a.confirm?(0,O.jsx)(s.Z,{style:{width:500},title:a.confirmTitle?a.confirmTitle:v("notification.title.tip"),description:typeof a.confirm=="string"&&a.confirm.indexOf("notification.")==0?v(a.confirm):a.confirm,onConfirm:U,okText:"Yes",cancelText:"No",onOpenChange:a.confirmOnOpenChange,children:(0,O.jsx)(i.ZP,{block:a.block,disabled:a.disabled,icon:!a.children&&f?void 0:a.icon,loading:f,danger:a.danger,type:a.type,children:a.children})}):(0,O.jsx)(P.Z,{title:a.tips,children:(0,O.jsx)(i.ZP,{block:a.block,style:a.ghost?{padding:0,height:"auto",width:"auto"}:{},disabled:a.disabled,icon:!a.children&&f?void 0:a.icon,loading:f,onClick:U,danger:a.danger,type:a.type,children:a.children})})}},78451:function(y,c,e){e.d(c,{Z:function(){return u}});var E=e(67294),r=e(85893);function u(s){return(0,r.jsx)("span",{style:{width:s.width?s.width:"auto",wordBreak:"break-word"},children:s.content})}},24963:function(y,c,e){var E=e(67294),r=(0,E.createContext)({});c.Z=r},67108:function(y,c,e){e.r(c),e.d(c,{default:function(){return _}});var E=e(15009),r=e.n(E),u=e(99289),s=e.n(u),i=e(90078),P=e(78099),h=e(62597),O=e(28036),T=e(42075),a=e(96074),l=e(83062),D=e(50136),f=e(82346),d=e(86548),g=e(87740),v=e(67294),K=e(96974),j=e(80821),U=e(67255),W=e(78451),L=e(1699),p=e(20578),t=e(85893);function _(){var C=(0,K.UO)(),n=(0,v.useRef)(),S=(0,f.useAccess)();return(0,v.useEffect)(function(){var R;(R=n.current)===null||R===void 0||R.reload()},[C]),(0,t.jsx)(i._z,{header:{extra:[(0,t.jsx)(L.u,{access:"canSeeContainerListManageCreate",children:(0,t.jsx)(O.ZP,{type:"primary",children:(0,t.jsx)(f.Link,{to:"/app/create/image",children:"\u521B\u5EFA\u5BB9\u5668"})})},"create")]},children:(0,t.jsx)(P.Z,{scroll:{x:"max-content"},actionRef:n,columns:[{title:"\u540D\u79F0",dataIndex:"siteTitle",width:200},{title:"\u6807\u8BC6",dataIndex:"siteName",width:200},{title:"\u6700\u540E\u9519\u8BEF",dataIndex:"message",search:!1,width:250,render:function(A,o,b,M,m){return(0,t.jsx)(W.Z,{content:o.message})}},{title:"\u5220\u9664\u65E5\u671F",ellipsis:!0,dataIndex:"deletedAt",search:!1,width:180,render:function(A,o,b,M,m){return new Date(o.deletedAt).toLocaleString()}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:80,fixed:"right",render:function(A,o,b,M){return(0,t.jsxs)(T.Z,{split:(0,t.jsx)(a.Z,{type:"vertical"}),children:[(0,t.jsx)(f.Link,{to:"/app/create/image?op=update&id="+o.id,type:"link",children:(0,t.jsx)(l.Z,{title:"\u518D\u6B21\u6784\u5EFA",children:(0,t.jsx)(d.Z,{})})},"rebuild"),!S.canSeeEnableCe&&o.containerInfo&&o.containerInfo.Info&&o.containerInfo.Info.Name&&(0,t.jsx)(j.Z,{action:function(){return(0,p.w)({id:o.id})},ghost:!0,type:"link",tips:"\u6062\u590D",onSuccess:function(){var I;!((I=n.current)===null||I===void 0)&&I.reloadAndRest&&n.current.reloadAndRest()},icon:(0,t.jsx)(g.Z,{})})]})}}],rowKey:"id",request:function(){var R=s()(r()().mark(function A(o,b,M){var m,I;return r()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,(0,h.cl)({pageSize:o.pageSize,page:(m=o.current)!==null&&m!==void 0?m:1,isDelete:!0,siteTitle:o.siteTitle,siteName:o.siteName});case 2:return I=B.sent,B.abrupt("return",{data:I.data.list,success:!0,total:I.data.total});case 4:case"end":return B.stop()}},A)}));return function(A,o,b){return R.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(A){var o=A.selectedRowKeys;return(0,t.jsx)(T.Z,{size:16,children:(0,t.jsx)(j.Z,{danger:!0,type:"primary",action:function(){return(0,h.xb)({id:o})},onSuccess:function(){var M,m;return!((M=n.current)===null||M===void 0)&&M.reloadAndRest&&((m=n.current)===null||m===void 0||m.reloadAndRest()),!0},onError:function(){var M,m;return!((M=n.current)===null||M===void 0)&&M.reset&&((m=n.current)===null||m===void 0||m.reset()),!0},confirm:"notification.confirm.title",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,U.O)(),search:{collapsed:!1},tableExtraRender:function(){return(0,t.jsx)(D.Z,{mode:"horizontal",selectedKeys:["recycle"],items:[{label:(0,t.jsx)(f.Link,{to:"/app/list",replace:!0,children:"\u5BB9\u5668\u5217\u8868"}),key:"all"},{label:(0,t.jsx)(f.Link,{to:"/app/recycle",replace:!0,children:"\u56DE\u6536\u7AD9"}),key:"recycle"}]})}})})}},62597:function(y,c,e){e.d(c,{$G:function(){return P},Ct:function(){return K},Tb:function(){return l},XH:function(){return f},cl:function(){return T},fp:function(){return O},iE:function(){return g},xb:function(){return U},ze:function(){return L}});var E=e(15009),r=e.n(E),u=e(99289),s=e.n(u),i=e(82346);function P(t){return h.apply(this,arguments)}function h(){return h=s()(r()().mark(function t(_){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/app/site/create-by-image",{method:"POST",data:_}));case 1:case"end":return n.stop()}},t)})),h.apply(this,arguments)}var O={EnvValueRuleRequired:1,EnvValueRuleDisabled:2,EnvValueTypeNumber:1024,EnvValueTypeText:2048,EnvValueTypeSelect:4096};function T(t){return a.apply(this,arguments)}function a(){return a=s()(r()().mark(function t(_){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/app/site/get-list",{method:"POST",data:_}));case 1:case"end":return n.stop()}},t)})),a.apply(this,arguments)}function l(t){return D.apply(this,arguments)}function D(){return D=s()(r()().mark(function t(_){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return _.download=!1,n.next=3,(0,i.request)("/api/app/log/run",{method:"POST",data:_});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},t)})),D.apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return d=s()(r()().mark(function t(_){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return _.download=!0,n.next=3,(0,i.request)("/api/app/log/run",{method:"POST",data:_,responseType:"blob"});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},t)})),d.apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return v=s()(r()().mark(function t(_){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return _.id=String(_.id),n.next=3,(0,i.request)("/api/app/site/get-detail",{data:_,method:"POST"});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},t)})),v.apply(this,arguments)}function K(t){return j.apply(this,arguments)}function j(){return j=s()(r()().mark(function t(_){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/app/container/delete",{method:"POST",data:_}));case 1:case"end":return n.stop()}},t)})),j.apply(this,arguments)}function U(t){return W.apply(this,arguments)}function W(){return W=s()(r()().mark(function t(_){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/app/site/delete",{method:"POST",data:_}));case 1:case"end":return n.stop()}},t)})),W.apply(this,arguments)}function L(t){return p.apply(this,arguments)}function p(){return p=s()(r()().mark(function t(_){return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,i.request)("/api/app/container/ignore",{method:"POST",data:_}));case 1:case"end":return n.stop()}},t)})),p.apply(this,arguments)}},67255:function(y,c,e){e.d(c,{O:function(){return E},j:function(){return r}});function E(){var u=localStorage.getItem("dpanel-pagesize");return u=="all"?!1:{showSizeChanger:!0,defaultPageSize:parseInt(u!=null?u:"20")}}function r(u){var s="dpanel-table-column-".concat(u),i={};if(localStorage.getItem(s)){var P;i=JSON.parse((P=localStorage.getItem(s))!==null&&P!==void 0?P:"{}")}return{defaultValue:i,onChange:function(O){localStorage.setItem("dpanel-table-column-".concat(u),JSON.stringify(O))}}}}}]);
