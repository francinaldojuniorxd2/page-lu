"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[475],{48171:function(ue,G,a){a.d(G,{J:function(){return j}});var r=a(74902),D=a(67294),j=function(Z){var E=(0,D.useRef)(null);return E.current=Z,(0,D.useCallback)(function(){for(var N,M=arguments.length,A=new Array(M),R=0;R<M;R++)A[R]=arguments[R];return(N=E.current)===null||N===void 0?void 0:N.call.apply(N,[E].concat((0,r.Z)(A)))},[])}},7134:function(ue,G,a){a.d(G,{C:function(){return ce}});var r=a(67294),D=a(93967),j=a.n(D),U=a(9220),Z=a(42550),E=a(74443),N=a(53124),M=a(35792),A=a(98675),R=a(25378),V=r.createContext({}),ee=a(6731),J=a(14747),te=a(91945),ne=a(45503);const oe=e=>{const{antCls:n,componentCls:o,iconCls:t,avatarBg:s,avatarColor:l,containerSize:c,containerSizeLG:i,containerSizeSM:d,textFontSize:g,textFontSizeLG:u,textFontSizeSM:P,borderRadius:m,borderRadiusLG:v,borderRadiusSM:S,lineWidth:y,lineType:B}=e,x=($,b,T)=>({width:$,height:$,borderRadius:"50%",[`&${o}-square`]:{borderRadius:T},[`&${o}-icon`]:{fontSize:b,[`> ${t}`]:{margin:0}}});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,J.Wf)(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:l,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:s,border:`${(0,ee.bf)(y)} ${B} transparent`,["&-image"]:{background:"transparent"},[`${n}-image-img`]:{display:"block"}}),x(c,g,m)),{["&-lg"]:Object.assign({},x(i,u,v)),["&-sm"]:Object.assign({},x(d,P,S)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},re=e=>{const{componentCls:n,groupBorderColor:o,groupOverlapping:t,groupSpace:s}=e;return{[`${n}-group`]:{display:"inline-flex",[`${n}`]:{borderColor:o},["> *:not(:first-child)"]:{marginInlineStart:t}},[`${n}-group-popover`]:{[`${n} + ${n}`]:{marginInlineStart:s}}}},ae=e=>{const{controlHeight:n,controlHeightLG:o,controlHeightSM:t,fontSize:s,fontSizeLG:l,fontSizeXL:c,fontSizeHeading3:i,marginXS:d,marginXXS:g,colorBorderBg:u}=e;return{containerSize:n,containerSizeLG:o,containerSizeSM:t,textFontSize:Math.round((l+c)/2),textFontSizeLG:i,textFontSizeSM:s,groupSpace:g,groupOverlapping:-d,groupBorderColor:u}};var Q=(0,te.I$)("Avatar",e=>{const{colorTextLightSolid:n,colorTextPlaceholder:o}=e,t=(0,ne.TS)(e,{avatarBg:o,avatarColor:n});return[oe(t),re(t)]},ae),se=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Y=(e,n)=>{const[o,t]=r.useState(1),[s,l]=r.useState(!1),[c,i]=r.useState(!0),d=r.useRef(null),g=r.useRef(null),u=(0,Z.sQ)(n,d),{getPrefixCls:P,avatar:m}=r.useContext(N.E_),v=r.useContext(V),S=()=>{if(!g.current||!d.current)return;const f=g.current.offsetWidth,p=d.current.offsetWidth;if(f!==0&&p!==0){const{gap:I=4}=e;I*2<p&&t(p-I*2<f?(p-I*2)/f:1)}};r.useEffect(()=>{l(!0)},[]),r.useEffect(()=>{i(!0),t(1)},[e.src]),r.useEffect(S,[e.gap]);const y=()=>{const{onError:f}=e;(f==null?void 0:f())!==!1&&i(!1)},{prefixCls:B,shape:x,size:$,src:b,srcSet:T,icon:O,className:L,rootClassName:W,alt:w,draggable:_,children:K,crossOrigin:de}=e,C=se(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),h=(0,A.Z)(f=>{var p,I;return(I=(p=$!=null?$:v==null?void 0:v.size)!==null&&p!==void 0?p:f)!==null&&I!==void 0?I:"default"}),X=Object.keys(typeof h=="object"?h||{}:{}).some(f=>["xs","sm","md","lg","xl","xxl"].includes(f)),he=(0,R.Z)(X),Se=r.useMemo(()=>{if(typeof h!="object")return{};const f=E.c4.find(I=>he[I]),p=h[f];return p?{width:p,height:p,fontSize:p&&(O||K)?p/2:18}:{}},[he,h]),z=P("avatar",B),ye=(0,M.Z)(z),[xe,Oe,Pe]=Q(z,ye),be=j()({[`${z}-lg`]:h==="large",[`${z}-sm`]:h==="small"}),Ce=r.isValidElement(b),Ee=x||(v==null?void 0:v.shape)||"circle",$e=j()(z,be,m==null?void 0:m.className,`${z}-${Ee}`,{[`${z}-image`]:Ce||b&&c,[`${z}-icon`]:!!O},Pe,ye,L,W,Oe),ze=typeof h=="number"?{width:h,height:h,fontSize:O?h/2:18}:{};let F;if(typeof b=="string"&&c)F=r.createElement("img",{src:b,draggable:_,srcSet:T,onError:y,alt:w,crossOrigin:de});else if(Ce)F=b;else if(O)F=O;else if(s||o!==1){const f=`scale(${o})`,p={msTransform:f,WebkitTransform:f,transform:f};F=r.createElement(U.Z,{onResize:S},r.createElement("span",{className:`${z}-string`,ref:g,style:Object.assign({},p)},K))}else F=r.createElement("span",{className:`${z}-string`,style:{opacity:0},ref:g},K);return delete C.onError,delete C.gap,xe(r.createElement("span",Object.assign({},C,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ze),Se),m==null?void 0:m.style),C.style),className:$e,ref:u}),F))};var k=r.forwardRef(Y),le=a(50344),me=a(96159),ie=a(74627);const q=e=>{const{size:n,shape:o}=r.useContext(V),t=r.useMemo(()=>({size:e.size||n,shape:e.shape||o}),[e.size,e.shape,n,o]);return r.createElement(V.Provider,{value:t},e.children)};var pe=e=>{const{getPrefixCls:n,direction:o}=r.useContext(N.E_),{prefixCls:t,className:s,rootClassName:l,style:c,maxCount:i,maxStyle:d,size:g,shape:u,maxPopoverPlacement:P="top",maxPopoverTrigger:m="hover",children:v}=e,S=n("avatar",t),y=`${S}-group`,B=(0,M.Z)(S),[x,$,b]=Q(S,B),T=j()(y,{[`${y}-rtl`]:o==="rtl"},b,B,s,l,$),O=(0,le.Z)(v).map((W,w)=>(0,me.Tm)(W,{key:`avatar-key-${w}`})),L=O.length;if(i&&i<L){const W=O.slice(0,i),w=O.slice(i,L);return W.push(r.createElement(ie.Z,{key:"avatar-popover-key",content:w,trigger:m,placement:P,overlayClassName:`${y}-popover`,destroyTooltipOnHide:!0},r.createElement(k,{style:d},`+${L-i}`))),x(r.createElement(q,{shape:u,size:g},r.createElement("div",{className:T,style:c},W)))}return x(r.createElement(q,{shape:u,size:g},r.createElement("div",{className:T,style:c},O)))};const H=k;H.Group=pe;var ce=H},74627:function(ue,G,a){a.d(G,{Z:function(){return ce}});var r=a(67294),D=a(93967),j=a.n(D),U=a(21770),Z=a(15105);const E=e=>e?typeof e=="function"?e():e:null;var N=a(33603),M=a(96159),A=a(53124),R=a(83062),ve=a(92419),V=a(14747),ee=a(50438),J=a(97414),te=a(79511),ne=a(8796),oe=a(91945),re=a(45503);const ae=e=>{const{componentCls:n,popoverColor:o,titleMinWidth:t,fontWeightStrong:s,innerPadding:l,boxShadowSecondary:c,colorTextHeading:i,borderRadiusLG:d,zIndexPopup:g,titleMarginBottom:u,colorBgElevated:P,popoverBg:m,titleBorderBottom:v,innerContentPadding:S,titlePadding:y}=e;return[{[n]:Object.assign(Object.assign({},(0,V.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:g,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":P,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${n}-content`]:{position:"relative"},[`${n}-inner`]:{backgroundColor:m,backgroundClip:"padding-box",borderRadius:d,boxShadow:c,padding:l},[`${n}-title`]:{minWidth:t,marginBottom:u,color:i,fontWeight:s,borderBottom:v,padding:y},[`${n}-inner-content`]:{color:o,padding:S}})},(0,J.ZP)(e,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${n}-content`]:{display:"inline-block"}}}]},Q=e=>{const{componentCls:n}=e;return{[n]:ne.i.map(o=>{const t=e[`${o}6`];return{[`&${n}-${o}`]:{"--antd-arrow-background-color":t,[`${n}-inner`]:{backgroundColor:t},[`${n}-arrow`]:{background:"transparent"}}}})}},se=e=>{const{lineWidth:n,controlHeight:o,fontHeight:t,padding:s,wireframe:l,zIndexPopupBase:c,borderRadiusLG:i,marginXS:d,lineType:g,colorSplit:u,paddingSM:P}=e,m=o-t,v=m/2,S=m/2-n,y=s;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:c+30},(0,te.w)(e)),(0,J.wZ)({contentRadius:i,limitVerticalRadius:!0})),{innerPadding:l?0:12,titleMarginBottom:l?0:d,titlePadding:l?`${v}px ${y}px ${S}px`:0,titleBorderBottom:l?`${n}px ${g} ${u}`:"none",innerContentPadding:l?`${P}px ${y}px`:0})};var Y=(0,oe.I$)("Popover",e=>{const{colorBgElevated:n,colorText:o}=e,t=(0,re.TS)(e,{popoverBg:n,popoverColor:o});return[ae(t),Q(t),(0,ee._y)(t,"zoom-big")]},se,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),ge=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const k=(e,n,o)=>!n&&!o?null:r.createElement(r.Fragment,null,n&&r.createElement("div",{className:`${e}-title`},E(n)),r.createElement("div",{className:`${e}-inner-content`},E(o))),le=e=>{const{hashId:n,prefixCls:o,className:t,style:s,placement:l="top",title:c,content:i,children:d}=e;return r.createElement("div",{className:j()(n,o,`${o}-pure`,`${o}-placement-${l}`,t),style:s},r.createElement("div",{className:`${o}-arrow`}),r.createElement(ve.G,Object.assign({},e,{className:n,prefixCls:o}),d||k(o,c,i)))};var ie=e=>{const{prefixCls:n,className:o}=e,t=ge(e,["prefixCls","className"]),{getPrefixCls:s}=r.useContext(A.E_),l=s("popover",n),[c,i,d]=Y(l);return c(r.createElement(le,Object.assign({},t,{prefixCls:l,hashId:i,className:j()(o,d)})))},q=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const fe=e=>{let{title:n,content:o,prefixCls:t}=e;return r.createElement(r.Fragment,null,n&&r.createElement("div",{className:`${t}-title`},E(n)),r.createElement("div",{className:`${t}-inner-content`},E(o)))},H=r.forwardRef((e,n)=>{var o,t;const{prefixCls:s,title:l,content:c,overlayClassName:i,placement:d="top",trigger:g="hover",children:u,mouseEnterDelay:P=.1,mouseLeaveDelay:m=.1,onOpenChange:v,overlayStyle:S={}}=e,y=q(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:B}=r.useContext(A.E_),x=B("popover",s),[$,b,T]=Y(x),O=B(),L=j()(i,b,T),[W,w]=(0,U.Z)(!1,{value:(o=e.open)!==null&&o!==void 0?o:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),_=(C,h)=>{w(C,!0),v==null||v(C,h)},K=C=>{C.keyCode===Z.Z.ESC&&_(!1,C)},de=C=>{_(C)};return $(r.createElement(R.Z,Object.assign({placement:d,trigger:g,mouseEnterDelay:P,mouseLeaveDelay:m,overlayStyle:S},y,{prefixCls:x,overlayClassName:L,ref:n,open:W,onOpenChange:de,overlay:l||c?r.createElement(fe,{prefixCls:x,title:l,content:c}):null,transitionName:(0,N.m)(O,"zoom-big",y.transitionName),"data-popover-inject":!0}),(0,M.Tm)(u,{onKeyDown:C=>{var h,X;r.isValidElement(u)&&((X=u==null?void 0:(h=u.props).onKeyDown)===null||X===void 0||X.call(h,C)),K(C)}})))});H._InternalPanelDoNotUseOrYouWillBeFired=ie;var ce=H}}]);
