(self.webpackChunk=self.webpackChunk||[]).push([[1257],{58638:function(T,I,c){"use strict";c.d(I,{Z:function(){return m}});var o=c(87462),E=c(67294),g={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},w=g,O=c(84089),M=function(j,a){return E.createElement(O.Z,(0,o.Z)({},j,{ref:a,icon:w}))},S=E.forwardRef(M),m=S},87784:function(T,I,c){"use strict";c.d(I,{Z:function(){return m}});var o=c(87462),E=c(67294),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},w=g,O=c(84089),M=function(j,a){return E.createElement(O.Z,(0,o.Z)({},j,{ref:a,icon:w}))},S=E.forwardRef(M),m=S},26412:function(T,I,c){"use strict";c.d(I,{Z:function(){return de}});var o=c(67294),E=c(93967),g=c.n(E),w=c(74443),O=c(53124),M=c(98675),S=c(25378),A={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},a=o.createContext({}),i=c(50344),h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};const d=e=>(0,i.Z)(e).map(t=>Object.assign(Object.assign({},t==null?void 0:t.props),{key:t.key}));function p(e,t,r){const n=o.useMemo(()=>t||d(r),[t,r]);return o.useMemo(()=>n.map(f=>{var{span:s}=f,u=h(f,["span"]);return s==="filled"?Object.assign(Object.assign({},u),{filled:!0}):Object.assign(Object.assign({},u),{span:typeof s=="number"?s:(0,w.m9)(e,s)})}),[n,e])}var Y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function Z(e,t){let r=[],n=[],l=!1,f=0;return e.filter(s=>s).forEach(s=>{const{filled:u}=s,b=Y(s,["filled"]);if(u){n.push(b),r.push(n),n=[],f=0;return}const y=t-f;f+=s.span||1,f>=t?(f>t?(l=!0,n.push(Object.assign(Object.assign({},b),{span:y}))):n.push(b),r.push(n),n=[],f=0):n.push(b)}),n.length>0&&r.push(n),r=r.map(s=>{const u=s.reduce((b,y)=>b+(y.span||1),0);if(u<t){const b=s[s.length-1];return b.span=t-u+1,s}return s}),[r,l]}var G=(e,t)=>{const[r,n]=(0,o.useMemo)(()=>Z(t,e),[t,e]);return r},L=e=>{let{children:t}=e;return t};function k(e){return e!=null}var J=e=>{const{itemPrefixCls:t,component:r,span:n,className:l,style:f,labelStyle:s,contentStyle:u,bordered:b,label:y,content:$,colon:B,type:N}=e,C=r;return b?o.createElement(C,{className:g()({[`${t}-item-label`]:N==="label",[`${t}-item-content`]:N==="content"},l),style:f,colSpan:n},k(y)&&o.createElement("span",{style:s},y),k($)&&o.createElement("span",{style:u},$)):o.createElement(C,{className:g()(`${t}-item`,l),style:f,colSpan:n},o.createElement("div",{className:`${t}-item-container`},(y||y===0)&&o.createElement("span",{className:g()(`${t}-item-label`,{[`${t}-item-no-colon`]:!B}),style:s},y),($||$===0)&&o.createElement("span",{className:g()(`${t}-item-content`),style:u},$)))};function Q(e,t,r){let{colon:n,prefixCls:l,bordered:f}=t,{component:s,type:u,showLabel:b,showContent:y,labelStyle:$,contentStyle:B}=r;return e.map((N,C)=>{let{label:z,children:K,prefixCls:D=l,className:U,style:H,labelStyle:R,contentStyle:v,span:P=1,key:F}=N;return typeof s=="string"?o.createElement(J,{key:`${u}-${F||C}`,className:U,style:H,labelStyle:Object.assign(Object.assign({},$),R),contentStyle:Object.assign(Object.assign({},B),v),span:P,colon:n,component:s,itemPrefixCls:D,bordered:f,label:b?z:null,content:y?K:null,type:u}):[o.createElement(J,{key:`label-${F||C}`,className:U,style:Object.assign(Object.assign(Object.assign({},$),H),R),span:1,colon:n,component:s[0],itemPrefixCls:D,bordered:f,label:z,type:"label"}),o.createElement(J,{key:`content-${F||C}`,className:U,style:Object.assign(Object.assign(Object.assign({},B),H),v),span:P*2-1,component:s[1],itemPrefixCls:D,bordered:f,content:K,type:"content"})]})}var ne=e=>{const t=o.useContext(a),{prefixCls:r,vertical:n,row:l,index:f,bordered:s}=e;return n?o.createElement(o.Fragment,null,o.createElement("tr",{key:`label-${f}`,className:`${r}-row`},Q(l,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),o.createElement("tr",{key:`content-${f}`,className:`${r}-row`},Q(l,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):o.createElement("tr",{key:f,className:`${r}-row`},Q(l,e,Object.assign({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},x=c(11568),_=c(14747),oe=c(83559),le=c(83262);const re=e=>{const{componentCls:t,labelBg:r}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${t}-row`]:{borderBottom:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,x.bf)(e.padding)} ${(0,x.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,x.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:r,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,x.bf)(e.paddingSM)} ${(0,x.bf)(e.paddingLG)}`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${(0,x.bf)(e.paddingXS)} ${(0,x.bf)(e.padding)}`}}}}}},ae=e=>{const{componentCls:t,extraColor:r,itemPaddingBottom:n,itemPaddingEnd:l,colonMarginRight:f,colonMarginLeft:s,titleMarginBottom:u}=e;return{[t]:Object.assign(Object.assign(Object.assign({},(0,_.Wf)(e)),re(e)),{"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:u},[`${t}-title`]:Object.assign(Object.assign({},_.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:r,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n,paddingInlineEnd:l},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,x.bf)(s)} ${(0,x.bf)(f)}`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},se=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var ie=(0,oe.I$)("Descriptions",e=>{const t=(0,le.IX)(e,{});return ae(t)},se),ce=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};const ee=e=>{const{prefixCls:t,title:r,extra:n,column:l,colon:f=!0,bordered:s,layout:u,children:b,className:y,rootClassName:$,style:B,size:N,labelStyle:C,contentStyle:z,items:K}=e,D=ce(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:U,direction:H,descriptions:R}=o.useContext(O.E_),v=U("descriptions",t),P=(0,S.Z)(),F=o.useMemo(()=>{var W;return typeof l=="number"?l:(W=(0,w.m9)(P,Object.assign(Object.assign({},A),l)))!==null&&W!==void 0?W:3},[P,l]),fe=p(P,K,b),q=(0,M.Z)(N),ue=G(F,fe),[me,pe,be]=ie(v),ge=o.useMemo(()=>({labelStyle:C,contentStyle:z}),[C,z]);return me(o.createElement(a.Provider,{value:ge},o.createElement("div",Object.assign({className:g()(v,R==null?void 0:R.className,{[`${v}-${q}`]:q&&q!=="default",[`${v}-bordered`]:!!s,[`${v}-rtl`]:H==="rtl"},y,$,pe,be),style:Object.assign(Object.assign({},R==null?void 0:R.style),B)},D),(r||n)&&o.createElement("div",{className:`${v}-header`},r&&o.createElement("div",{className:`${v}-title`},r),n&&o.createElement("div",{className:`${v}-extra`},n)),o.createElement("div",{className:`${v}-view`},o.createElement("table",null,o.createElement("tbody",null,ue.map((W,te)=>o.createElement(ne,{key:te,index:te,colon:f,prefixCls:v,vertical:u==="vertical",bordered:s,row:W}))))))))};ee.Item=L;var de=ee},93162:function(T,I,c){var o,E,g;(function(w,O){E=[],o=O,g=typeof o=="function"?o.apply(I,E):o,g!==void 0&&(T.exports=g)})(this,function(){"use strict";function w(a,i){return typeof i=="undefined"?i={autoBom:!1}:typeof i!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function O(a,i,h){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){j(d.response,i,h)},d.onerror=function(){console.error("could not download file")},d.send()}function M(a){var i=new XMLHttpRequest;i.open("HEAD",a,!1);try{i.send()}catch(h){}return 200<=i.status&&299>=i.status}function S(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(h){var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(i)}}var m=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof c.g=="object"&&c.g.global===c.g?c.g:void 0,A=m.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),j=m.saveAs||(typeof window!="object"||window!==m?function(){}:"download"in HTMLAnchorElement.prototype&&!A?function(a,i,h){var d=m.URL||m.webkitURL,p=document.createElement("a");i=i||a.name||"download",p.download=i,p.rel="noopener",typeof a=="string"?(p.href=a,p.origin===location.origin?S(p):M(p.href)?O(a,i,h):S(p,p.target="_blank")):(p.href=d.createObjectURL(a),setTimeout(function(){d.revokeObjectURL(p.href)},4e4),setTimeout(function(){S(p)},0))}:"msSaveOrOpenBlob"in navigator?function(a,i,h){if(i=i||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(w(a,h),i);else if(M(a))O(a,i,h);else{var d=document.createElement("a");d.href=a,d.target="_blank",setTimeout(function(){S(d)})}}:function(a,i,h,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof a=="string")return O(a,i,h);var p=a.type==="application/octet-stream",Y=/constructor/i.test(m.HTMLElement)||m.safari,Z=/CriOS\/[\d]+/.test(navigator.userAgent);if((Z||p&&Y||A)&&typeof FileReader!="undefined"){var X=new FileReader;X.onloadend=function(){var L=X.result;L=Z?L:L.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=L:location=L,d=null},X.readAsDataURL(a)}else{var G=m.URL||m.webkitURL,V=G.createObjectURL(a);d?d.location=V:location.href=V,d=null,setTimeout(function(){G.revokeObjectURL(V)},4e4)}});m.saveAs=j.saveAs=j,T.exports=j})}}]);
