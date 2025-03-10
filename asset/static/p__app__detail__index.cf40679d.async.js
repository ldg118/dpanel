"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5947],{55809:function(k,l,n){var m=n(87462),t=n(67294),b=n(44805),_=n(84089),s=function(v,f){return t.createElement(_.Z,(0,m.Z)({},v,{ref:f,icon:b.Z}))},c=t.forwardRef(s);l.Z=c},24963:function(k,l,n){var m=n(67294),t=(0,m.createContext)({});l.Z=t},50070:function(k,l,n){n.r(l),n.d(l,{AppDetailContext:function(){return C},default:function(){return I}});var m=n(15009),t=n.n(m),b=n(99289),_=n.n(b),s=n(5574),c=n.n(s),P=n(24963),v=n(60335),f=n(55809),p=n(82346),h=n(25593),U=n(50136),o=n(67294),i=n(85893),C=(0,o.createContext)({});function I(){var E,g=(0,o.useContext)(P.Z),M=g.lang,R=g.loading,j=g.message,d=(0,p.useParams)(),T=(0,p.useSearchParams)(),a=c()(T,2),r=a[0],u=a[1],e=(E=r.get("tab"))!==null&&E!==void 0?E:"edit",N=(0,o.useState)("edit"),S=c()(N,2),V=S[0],w=S[1],A=(0,p.useNavigate)(),z=(0,o.useState)(1),x=c()(z,2),$=x[0],J=x[1],Z=[{label:(0,i.jsx)(p.Link,{to:"/app/detail/edit/".concat(d.id,"?tab=edit"),children:"\u5BB9\u5668\u8BE6\u60C5"}),key:"edit"},{label:(0,i.jsx)(p.Link,{to:"/app/detail/network/".concat(d.id,"?tab=network"),children:"\u7F51\u7EDC\u7BA1\u7406"}),key:"network"},{label:(0,i.jsx)(h.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"}),key:"file",onClick:function(){j.info(M("app.detail.createExplorerPlugin")),A("/app/detail/file/".concat(d.id,"?tab=file"))}},{label:(0,i.jsx)(h.Z.Link,{children:"\u8FD0\u884C\u65E5\u5FD7"}),key:"log",onClick:function(){A("/app/detail/log/".concat(d.id,"?tab=log"))}},{label:(0,i.jsx)(h.Z.Link,{children:"\u8FD0\u884C\u72B6\u6001"}),key:"stat",onClick:function(){A("/app/detail/stat/".concat(d.id,"?tab=stat"))}},{label:"",key:"containerName",icon:(0,i.jsx)(f.Z,{}),disabled:!0}],H=(0,o.useState)(Z),F=c()(H,2),Q=F[0],X=F[1];(0,o.useEffect)(function(){R.show(),w(e);var O=function(){var L=_()(t()().mark(function G(){var B,K,W;return t()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return K=Z,y.next=3,(0,v.jV)({md5:(B=d.id)!==null&&B!==void 0?B:""});case 3:W=y.sent,K.map(function(D){return D.key=="containerName"&&(D.label=W.data.info.Name),(!W.data.info.State.Running||W.data.info.State.Restarting)&&(D.key=="file"||D.key=="stat")&&(D.disabled=!0),D}),X(K),R.destroy();case 7:case"end":return y.stop()}},G)}));return function(){return L.apply(this,arguments)}}();O()},[$]);var Y=function(L){w(L.key)};return(0,i.jsxs)(C.Provider,{value:{reload:function(){J($+1)}},children:[(0,i.jsx)(U.Z,{mode:"horizontal",onClick:Y,selectedKeys:[V],items:Q}),(0,i.jsx)(p.Outlet,{})]})}},60335:function(k,l,n){n.d(l,{IE:function(){return v},IW:function(){return c},KK:function(){return i},LJ:function(){return I},RF:function(){return R},Re:function(){return g},aF:function(){return d},eE:function(){return U},jV:function(){return p}});var m=n(15009),t=n.n(m),b=n(99289),_=n.n(b),s=n(82346);function c(a){return P.apply(this,arguments)}function P(){return P=_()(t()().mark(function a(r){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/status",{method:"POST",data:r}));case 1:case"end":return e.stop()}},a)})),P.apply(this,arguments)}function v(a){return f.apply(this,arguments)}function f(){return f=_()(t()().mark(function a(r){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/get-list",{data:r,method:"POST"}));case 1:case"end":return e.stop()}},a)})),f.apply(this,arguments)}function p(a){return h.apply(this,arguments)}function h(){return h=_()(t()().mark(function a(r){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/get-detail",{data:r,method:"POST"}));case 1:case"end":return e.stop()}},a)})),h.apply(this,arguments)}function U(a){return o.apply(this,arguments)}function o(){return o=_()(t()().mark(function a(r){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/update",{data:r,method:"POST"}));case 1:case"end":return e.stop()}},a)})),o.apply(this,arguments)}function i(){return C.apply(this,arguments)}function C(){return C=_()(t()().mark(function a(){return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,s.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return u.stop()}},a)})),C.apply(this,arguments)}function I(a){return E.apply(this,arguments)}function E(){return E=_()(t()().mark(function a(r){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/export",{method:"POST",data:r,responseType:"blob"}));case 1:case"end":return e.stop()}},a)})),E.apply(this,arguments)}function g(a){return M.apply(this,arguments)}function M(){return M=_()(t()().mark(function a(r){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/commit",{method:"POST",data:r}));case 1:case"end":return e.stop()}},a)})),M.apply(this,arguments)}function R(a){return j.apply(this,arguments)}function j(){return j=_()(t()().mark(function a(r){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/upgrade",{method:"POST",data:r}));case 1:case"end":return e.stop()}},a)})),j.apply(this,arguments)}function d(a){return T.apply(this,arguments)}function T(){return T=_()(t()().mark(function a(r){return t()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.request)("/api/app/container/copy",{method:"POST",data:r}));case 1:case"end":return e.stop()}},a)})),T.apply(this,arguments)}}}]);
