(function(){"use strict";if(typeof Xg>"u")var Xg={env:{NODE_ENV:"production"}};function Yg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gc={exports:{}},St={},$f;function jg(){if($f)return St;$f=1;/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function x(F,Q,Ie){this.props=F,this.context=Q,this.refs=C,this.updater=Ie||y}x.prototype.isReactComponent={},x.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=x.prototype;function P(F,Q,Ie){this.props=F,this.context=Q,this.refs=C,this.updater=Ie||y}var N=P.prototype=new S;N.constructor=P,E(N,x.prototype),N.isPureReactComponent=!0;var L=Array.isArray,I=Object.prototype.hasOwnProperty,b={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function T(F,Q,Ie){var ze,Ae={},j=null,ge=null;if(Q!=null)for(ze in Q.ref!==void 0&&(ge=Q.ref),Q.key!==void 0&&(j=""+Q.key),Q)I.call(Q,ze)&&!B.hasOwnProperty(ze)&&(Ae[ze]=Q[ze]);var de=arguments.length-2;if(de===1)Ae.children=Ie;else if(1<de){for(var Te=Array(de),Ge=0;Ge<de;Ge++)Te[Ge]=arguments[Ge+2];Ae.children=Te}if(F&&F.defaultProps)for(ze in de=F.defaultProps,de)Ae[ze]===void 0&&(Ae[ze]=de[ze]);return{$$typeof:s,type:F,key:j,ref:ge,props:Ae,_owner:b.current}}function U(F,Q){return{$$typeof:s,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function k(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ie){return Q[Ie]})}var $=/\/+/g;function le(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):Q.toString(36)}function ce(F,Q,Ie,ze,Ae){var j=typeof F;(j==="undefined"||j==="boolean")&&(F=null);var ge=!1;if(F===null)ge=!0;else switch(j){case"string":case"number":ge=!0;break;case"object":switch(F.$$typeof){case s:case e:ge=!0}}if(ge)return ge=F,Ae=Ae(ge),F=ze===""?"."+le(ge,0):ze,L(Ae)?(Ie="",F!=null&&(Ie=F.replace($,"$&/")+"/"),ce(Ae,Q,Ie,"",function(Ge){return Ge})):Ae!=null&&(G(Ae)&&(Ae=U(Ae,Ie+(!Ae.key||ge&&ge.key===Ae.key?"":(""+Ae.key).replace($,"$&/")+"/")+F)),Q.push(Ae)),1;if(ge=0,ze=ze===""?".":ze+":",L(F))for(var de=0;de<F.length;de++){j=F[de];var Te=ze+le(j,de);ge+=ce(j,Q,Ie,Te,Ae)}else if(Te=v(F),typeof Te=="function")for(F=Te.call(F),de=0;!(j=F.next()).done;)j=j.value,Te=ze+le(j,de++),ge+=ce(j,Q,Ie,Te,Ae);else if(j==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ge}function Y(F,Q,Ie){if(F==null)return F;var ze=[],Ae=0;return ce(F,ze,"","",function(j){return Q.call(Ie,j,Ae++)}),ze}function ee(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(Ie){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ie)},function(Ie){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ie)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var Z={current:null},q={transition:null},ae={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:q,ReactCurrentOwner:b};function oe(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Y,forEach:function(F,Q,Ie){Y(F,function(){Q.apply(this,arguments)},Ie)},count:function(F){var Q=0;return Y(F,function(){Q++}),Q},toArray:function(F){return Y(F,function(Q){return Q})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=x,St.Fragment=t,St.Profiler=a,St.PureComponent=P,St.StrictMode=r,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,St.act=oe,St.cloneElement=function(F,Q,Ie){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ze=E({},F.props),Ae=F.key,j=F.ref,ge=F._owner;if(Q!=null){if(Q.ref!==void 0&&(j=Q.ref,ge=b.current),Q.key!==void 0&&(Ae=""+Q.key),F.type&&F.type.defaultProps)var de=F.type.defaultProps;for(Te in Q)I.call(Q,Te)&&!B.hasOwnProperty(Te)&&(ze[Te]=Q[Te]===void 0&&de!==void 0?de[Te]:Q[Te])}var Te=arguments.length-2;if(Te===1)ze.children=Ie;else if(1<Te){de=Array(Te);for(var Ge=0;Ge<Te;Ge++)de[Ge]=arguments[Ge+2];ze.children=de}return{$$typeof:s,type:F.type,key:Ae,ref:j,props:ze,_owner:ge}},St.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},St.createElement=T,St.createFactory=function(F){var Q=T.bind(null,F);return Q.type=F,Q},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:h,render:F}},St.isValidElement=G,St.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ee}},St.memo=function(F,Q){return{$$typeof:p,type:F,compare:Q===void 0?null:Q}},St.startTransition=function(F){var Q=q.transition;q.transition={};try{F()}finally{q.transition=Q}},St.unstable_act=oe,St.useCallback=function(F,Q){return Z.current.useCallback(F,Q)},St.useContext=function(F){return Z.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return Z.current.useDeferredValue(F)},St.useEffect=function(F,Q){return Z.current.useEffect(F,Q)},St.useId=function(){return Z.current.useId()},St.useImperativeHandle=function(F,Q,Ie){return Z.current.useImperativeHandle(F,Q,Ie)},St.useInsertionEffect=function(F,Q){return Z.current.useInsertionEffect(F,Q)},St.useLayoutEffect=function(F,Q){return Z.current.useLayoutEffect(F,Q)},St.useMemo=function(F,Q){return Z.current.useMemo(F,Q)},St.useReducer=function(F,Q,Ie){return Z.current.useReducer(F,Q,Ie)},St.useRef=function(F){return Z.current.useRef(F)},St.useState=function(F){return Z.current.useState(F)},St.useSyncExternalStore=function(F,Q,Ie){return Z.current.useSyncExternalStore(F,Q,Ie)},St.useTransition=function(){return Z.current.useTransition()},St.version="18.3.1",St}var Kf;function Zf(){return Kf||(Kf=1,gc.exports=jg()),gc.exports}var Mt=Zf();const Ve=Yg(Mt);var Ea={},vc={exports:{}},Hn={},_c={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function qg(){return Jf||(Jf=1,(function(s){function e(q,ae){var oe=q.length;q.push(ae);e:for(;0<oe;){var F=oe-1>>>1,Q=q[F];if(0<a(Q,ae))q[F]=ae,q[oe]=Q,oe=F;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ae=q[0],oe=q.pop();if(oe!==ae){q[0]=oe;e:for(var F=0,Q=q.length,Ie=Q>>>1;F<Ie;){var ze=2*(F+1)-1,Ae=q[ze],j=ze+1,ge=q[j];if(0>a(Ae,oe))j<Q&&0>a(ge,Ae)?(q[F]=ge,q[j]=oe,F=j):(q[F]=Ae,q[ze]=oe,F=ze);else if(j<Q&&0>a(ge,oe))q[F]=ge,q[j]=oe,F=j;else break e}}return ae}function a(q,ae){var oe=q.sortIndex-ae.sortIndex;return oe!==0?oe:q.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var f=[],p=[],g=1,_=null,v=3,y=!1,E=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(q){for(var ae=t(p);ae!==null;){if(ae.callback===null)r(p);else if(ae.startTime<=q)r(p),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(p)}}function L(q){if(C=!1,N(q),!E)if(t(f)!==null)E=!0,ee(I);else{var ae=t(p);ae!==null&&Z(L,ae.startTime-q)}}function I(q,ae){E=!1,C&&(C=!1,S(T),T=-1),y=!0;var oe=v;try{for(N(ae),_=t(f);_!==null&&(!(_.expirationTime>ae)||q&&!k());){var F=_.callback;if(typeof F=="function"){_.callback=null,v=_.priorityLevel;var Q=F(_.expirationTime<=ae);ae=s.unstable_now(),typeof Q=="function"?_.callback=Q:_===t(f)&&r(f),N(ae)}else r(f);_=t(f)}if(_!==null)var Ie=!0;else{var ze=t(p);ze!==null&&Z(L,ze.startTime-ae),Ie=!1}return Ie}finally{_=null,v=oe,y=!1}}var b=!1,B=null,T=-1,U=5,G=-1;function k(){return!(s.unstable_now()-G<U)}function $(){if(B!==null){var q=s.unstable_now();G=q;var ae=!0;try{ae=B(!0,q)}finally{ae?le():(b=!1,B=null)}}else b=!1}var le;if(typeof P=="function")le=function(){P($)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Y=ce.port2;ce.port1.onmessage=$,le=function(){Y.postMessage(null)}}else le=function(){x($,0)};function ee(q){B=q,b||(b=!0,le())}function Z(q,ae){T=x(function(){q(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,ee(I))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(q){switch(v){case 1:case 2:case 3:var ae=3;break;default:ae=v}var oe=v;v=ae;try{return q()}finally{v=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,ae){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var oe=v;v=q;try{return ae()}finally{v=oe}},s.unstable_scheduleCallback=function(q,ae,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,q){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,q={id:g++,callback:ae,priorityLevel:q,startTime:oe,expirationTime:Q,sortIndex:-1},oe>F?(q.sortIndex=oe,e(p,q),t(f)===null&&q===t(p)&&(C?(S(T),T=-1):C=!0,Z(L,oe-F))):(q.sortIndex=Q,e(f,q),E||y||(E=!0,ee(I))),q},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(q){var ae=v;return function(){var oe=v;v=ae;try{return q.apply(this,arguments)}finally{v=oe}}}})(yc)),yc}var Qf;function $g(){return Qf||(Qf=1,_c.exports=qg()),_c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function Kg(){if(ed)return Hn;ed=1;var s=Zf(),e=$g();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function v(n){return f.call(_,n)?!0:f.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function y(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,c){if(i===null||typeof i>"u"||y(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,c,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,P);x[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,P);x[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,P);x[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,o,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,c)&&(o=null),c||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),b=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),k=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),q=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function Q(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ie=!1;function ze(n,i){if(!n||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(se){var c=se}Reflect.construct(n,[],i)}else{try{i.call()}catch(se){c=se}n.call(i.prototype)}else{try{throw Error()}catch(se){c=se}n()}}catch(se){if(se&&c&&typeof se.stack=="string"){for(var d=se.stack.split(`
`),m=c.stack.split(`
`),w=d.length-1,O=m.length-1;1<=w&&0<=O&&d[w]!==m[O];)O--;for(;1<=w&&0<=O;w--,O--)if(d[w]!==m[O]){if(w!==1||O!==1)do if(w--,O--,0>O||d[w]!==m[O]){var z=`
`+d[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=O);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Q(n):""}function Ae(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=ze(n.type,!1),n;case 11:return n=ze(n.type.render,!1),n;case 1:return n=ze(n.type,!0),n;default:return""}}function j(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case b:return"Portal";case U:return"Profiler";case T:return"StrictMode";case le:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case G:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:j(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return j(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(n){var i=Te(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function $e(n){n._valueTracker||(n._valueTracker=Ge(n))}function Ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wt(n,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Dt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=de(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Vt(n,i){st(n,i);var o=de(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?cn(n,i.type,o):i.hasOwnProperty("defaultValue")&&cn(n,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ot(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function cn(n,i,o){(i!=="number"||ct(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var V=Array.isArray;function Ft(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+de(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function vt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Bt(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(V(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:de(o)}}function De(n,i){var o=de(i.value),c=de(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Yt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?D(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function me(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(n){Le.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xe[i]=xe[n]})});function ue(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xe.hasOwnProperty(n)&&xe[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=ue(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Ue=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fe(n,i){if(i){if(Ue[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Re(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function rt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,_t=null,H=null;function we(n){if(n=la(n)){if(typeof at!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ll(i),at(n.stateNode,n.type,i))}}function he(n){_t?H?H.push(n):H=[n]:_t=n}function Oe(){if(_t){var n=_t,i=H;if(H=_t=null,we(n),i)for(n=0;n<i.length;n++)we(i[n])}}function Pe(n,i){return n(i)}function ve(){}var Ye=!1;function lt(n,i,o){if(Ye)return n(i,o);Ye=!0;try{return Pe(n,i,o)}finally{Ye=!1,(_t!==null||H!==null)&&(ve(),Oe())}}function Gt(n,i){var o=n.stateNode;if(o===null)return null;var c=Ll(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var bt=!1;if(h)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){bt=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{bt=!1}function ui(n,i,o,c,d,m,w,O,z){var se=Array.prototype.slice.call(arguments,3);try{i.apply(o,se)}catch(ye){this.onError(ye)}}var rr=!1,qs=null,ss=!1,$s=null,sr={onError:function(n){rr=!0,qs=n}};function Ho(n,i,o,c,d,m,w,O,z){rr=!1,qs=null,ui.apply(sr,arguments)}function pl(n,i,o,c,d,m,w,O,z){if(Ho.apply(this,arguments),rr){if(rr){var se=qs;rr=!1,qs=null}else throw Error(t(198));ss||(ss=!0,$s=se)}}function zi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function os(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Go(n){if(zi(n)!==n)throw Error(t(188))}function Ks(n){var i=n.alternate;if(!i){if(i=zi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return Go(d),n;if(m===c)return Go(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=m;else{for(var w=!1,O=d.child;O;){if(O===o){w=!0,o=d,c=m;break}if(O===c){w=!0,c=d,o=m;break}O=O.sibling}if(!w){for(O=m.child;O;){if(O===o){w=!0,o=m,c=d;break}if(O===c){w=!0,c=m,o=d;break}O=O.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Vo(n){return n=Ks(n),n!==null?Wo(n):null}function Wo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Wo(n);if(i!==null)return i;n=n.sibling}return null}var ml=e.unstable_scheduleCallback,gl=e.unstable_cancelCallback,vh=e.unstable_shouldYield,_h=e.unstable_requestPaint,en=e.unstable_now,yh=e.unstable_getCurrentPriorityLevel,Xo=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,re=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,be=null;function He(n){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:ut,je=Math.log,Qe=Math.LN2;function ut(n){return n>>>=0,n===0?32:31-(je(n)/Qe|0)|0}var ht=64,Ke=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,w=o&268435455;if(w!==0){var O=w&~d;O!==0?c=At(O):(m&=w,m!==0&&(c=At(m)))}else w=o&~d,w!==0?c=At(w):m!==0&&(c=At(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Ce(i),d=1<<o,c|=n[o],i&=~d;return c}function Zt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-Ce(m),O=1<<w,z=d[w];z===-1?((O&o)===0||(O&c)!==0)&&(d[w]=Zt(O,i)):z<=i&&(n.expiredLanes|=O),m&=~O}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function wn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function yt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ce(i),n[i]=o}function Xn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Ce(o),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~m}}function Yn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Ce(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var xt=0;function or(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Nt,jt,Mi,zt,Ei,Hi=!1,as=[],Cr=null,Pr=null,br=null,Yo=new Map,jo=new Map,Lr=[],ZM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(n,i){switch(n){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(i.pointerId)}}function qo(n,i,o,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=la(i),i!==null&&jt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function JM(n,i,o,c,d){switch(i){case"focusin":return Cr=qo(Cr,n,i,o,c,d),!0;case"dragenter":return Pr=qo(Pr,n,i,o,c,d),!0;case"mouseover":return br=qo(br,n,i,o,c,d),!0;case"pointerover":var m=d.pointerId;return Yo.set(m,qo(Yo.get(m)||null,n,i,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,jo.set(m,qo(jo.get(m)||null,n,i,o,c,d)),!0}return!1}function Pm(n){var i=ls(n.target);if(i!==null){var o=zi(i);if(o!==null){if(i=o.tag,i===13){if(i=os(o),i!==null){n.blockedOn=i,Ei(n.priority,function(){Mi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=xh(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Me=c,o.target.dispatchEvent(c),Me=null}else return i=la(o),i!==null&&jt(i),n.blockedOn=o,!1;i.shift()}return!0}function bm(n,i,o){vl(n)&&o.delete(i)}function QM(){Hi=!1,Cr!==null&&vl(Cr)&&(Cr=null),Pr!==null&&vl(Pr)&&(Pr=null),br!==null&&vl(br)&&(br=null),Yo.forEach(bm),jo.forEach(bm)}function $o(n,i){n.blockedOn===i&&(n.blockedOn=null,Hi||(Hi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,QM)))}function Ko(n){function i(d){return $o(d,n)}if(0<as.length){$o(as[0],n);for(var o=1;o<as.length;o++){var c=as[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Cr!==null&&$o(Cr,n),Pr!==null&&$o(Pr,n),br!==null&&$o(br,n),Yo.forEach(i),jo.forEach(i),o=0;o<Lr.length;o++)c=Lr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Lr.length&&(o=Lr[0],o.blockedOn===null);)Pm(o),o.blockedOn===null&&Lr.shift()}var Zs=L.ReactCurrentBatchConfig,_l=!0;function eE(n,i,o,c){var d=xt,m=Zs.transition;Zs.transition=null;try{xt=1,Sh(n,i,o,c)}finally{xt=d,Zs.transition=m}}function tE(n,i,o,c){var d=xt,m=Zs.transition;Zs.transition=null;try{xt=4,Sh(n,i,o,c)}finally{xt=d,Zs.transition=m}}function Sh(n,i,o,c){if(_l){var d=xh(n,i,o,c);if(d===null)Bh(n,i,c,yl,o),Cm(n,c);else if(JM(d,n,i,o,c))c.stopPropagation();else if(Cm(n,c),i&4&&-1<ZM.indexOf(n)){for(;d!==null;){var m=la(d);if(m!==null&&Nt(m),m=xh(n,i,o,c),m===null&&Bh(n,i,c,yl,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Bh(n,i,c,null,o)}}var yl=null;function xh(n,i,o,c){if(yl=null,n=rt(c),n=ls(n),n!==null)if(i=zi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=os(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return yl=n,null}function Lm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yh()){case Xo:return 1;case A:return 4;case X:case re:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Dr=null,Mh=null,Sl=null;function Dm(){if(Sl)return Sl;var n,i=Mh,o=i.length,c,d="value"in Dr?Dr.value:Dr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var w=o-n;for(c=1;c<=w&&i[o-c]===d[m-c];c++);return Sl=d.slice(n,1<c?1-c:void 0)}function xl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ml(){return!0}function Nm(){return!1}function ii(n){function i(o,c,d,m,w){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ml:Nm,this.isPropagationStopped=Nm,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),i}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=ii(Js),Zo=oe({},Js,{view:0,detail:0}),nE=ii(Zo),wh,Th,Jo,El=oe({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Jo&&(Jo&&n.type==="mousemove"?(wh=n.screenX-Jo.screenX,Th=n.screenY-Jo.screenY):Th=wh=0,Jo=n),wh)},movementY:function(n){return"movementY"in n?n.movementY:Th}}),Im=ii(El),iE=oe({},El,{dataTransfer:0}),rE=ii(iE),sE=oe({},Zo,{relatedTarget:0}),Ah=ii(sE),oE=oe({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),aE=ii(oE),lE=oe({},Js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cE=ii(lE),uE=oe({},Js,{data:0}),Um=ii(uE),hE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pE(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=dE[n])?!!i[n]:!1}function Rh(){return pE}var mE=oe({},Zo,{key:function(n){if(n.key){var i=hE[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(n){return n.type==="keypress"?xl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gE=ii(mE),vE=oe({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=ii(vE),_E=oe({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),yE=ii(_E),SE=oe({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),xE=ii(SE),ME=oe({},El,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),EE=ii(ME),wE=[9,13,27,32],Ch=h&&"CompositionEvent"in window,Qo=null;h&&"documentMode"in document&&(Qo=document.documentMode);var TE=h&&"TextEvent"in window&&!Qo,Fm=h&&(!Ch||Qo&&8<Qo&&11>=Qo),Bm=" ",km=!1;function zm(n,i){switch(n){case"keyup":return wE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qs=!1;function AE(n,i){switch(n){case"compositionend":return Hm(i);case"keypress":return i.which!==32?null:(km=!0,Bm);case"textInput":return n=i.data,n===Bm&&km?null:n;default:return null}}function RE(n,i){if(Qs)return n==="compositionend"||!Ch&&zm(n,i)?(n=Dm(),Sl=Mh=Dr=null,Qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fm&&i.locale!=="ko"?null:i.data;default:return null}}var CE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!CE[n.type]:i==="textarea"}function Vm(n,i,o,c){he(c),i=Cl(i,"onChange"),0<i.length&&(o=new Eh("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var ea=null,ta=null;function PE(n){a0(n,0)}function wl(n){var i=ro(n);if(Ut(i))return n}function bE(n,i){if(n==="change")return i}var Wm=!1;if(h){var Ph;if(h){var bh="oninput"in document;if(!bh){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),bh=typeof Xm.oninput=="function"}Ph=bh}else Ph=!1;Wm=Ph&&(!document.documentMode||9<document.documentMode)}function Ym(){ea&&(ea.detachEvent("onpropertychange",jm),ta=ea=null)}function jm(n){if(n.propertyName==="value"&&wl(ta)){var i=[];Vm(i,ta,n,rt(n)),lt(PE,i)}}function LE(n,i,o){n==="focusin"?(Ym(),ea=i,ta=o,ea.attachEvent("onpropertychange",jm)):n==="focusout"&&Ym()}function DE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wl(ta)}function NE(n,i){if(n==="click")return wl(i)}function IE(n,i){if(n==="input"||n==="change")return wl(i)}function UE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var wi=typeof Object.is=="function"?Object.is:UE;function na(n,i){if(wi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!f.call(i,d)||!wi(n[d],i[d]))return!1}return!0}function qm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $m(n,i){var o=qm(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=qm(o)}}function Km(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Km(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Zm(){for(var n=window,i=ct();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ct(n.document)}return i}function Lh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function OE(n){var i=Zm(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Km(o.ownerDocument.documentElement,o)){if(c!==null&&Lh(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=$m(o,m);var w=$m(o,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var FE=h&&"documentMode"in document&&11>=document.documentMode,eo=null,Dh=null,ia=null,Nh=!1;function Jm(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Nh||eo==null||eo!==ct(c)||(c=eo,"selectionStart"in c&&Lh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&na(ia,c)||(ia=c,c=Cl(Dh,"onSelect"),0<c.length&&(i=new Eh("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=eo)))}function Tl(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var to={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},Ih={},Qm={};h&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Al(n){if(Ih[n])return Ih[n];if(!to[n])return n;var i=to[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Qm)return Ih[n]=i[o];return n}var e0=Al("animationend"),t0=Al("animationiteration"),n0=Al("animationstart"),i0=Al("transitionend"),r0=new Map,s0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(n,i){r0.set(n,i),l(i,[n])}for(var Uh=0;Uh<s0.length;Uh++){var Oh=s0[Uh],BE=Oh.toLowerCase(),kE=Oh[0].toUpperCase()+Oh.slice(1);Nr(BE,"on"+kE)}Nr(e0,"onAnimationEnd"),Nr(t0,"onAnimationIteration"),Nr(n0,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(i0,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function o0(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,pl(c,i,void 0,n),n.currentTarget=null}function a0(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var O=c[w],z=O.instance,se=O.currentTarget;if(O=O.listener,z!==m&&d.isPropagationStopped())break e;o0(d,O,se),m=z}else for(w=0;w<c.length;w++){if(O=c[w],z=O.instance,se=O.currentTarget,O=O.listener,z!==m&&d.isPropagationStopped())break e;o0(d,O,se),m=z}}}if(ss)throw n=$s,ss=!1,$s=null,n}function qt(n,i){var o=i[Wh];o===void 0&&(o=i[Wh]=new Set);var c=n+"__bubble";o.has(c)||(l0(i,n,2,!1),o.add(c))}function Fh(n,i,o){var c=0;i&&(c|=4),l0(o,n,c,i)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function sa(n){if(!n[Rl]){n[Rl]=!0,r.forEach(function(o){o!=="selectionchange"&&(zE.has(o)||Fh(o,!1,n),Fh(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Rl]||(i[Rl]=!0,Fh("selectionchange",!1,i))}}function l0(n,i,o,c){switch(Lm(i)){case 1:var d=eE;break;case 4:d=tE;break;default:d=Sh}o=d.bind(null,i,o,n),d=void 0,!bt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Bh(n,i,o,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var O=c.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;w=w.return}for(;O!==null;){if(w=ls(O),w===null)return;if(z=w.tag,z===5||z===6){c=m=w;continue e}O=O.parentNode}}c=c.return}lt(function(){var se=m,ye=rt(o),Se=[];e:{var _e=r0.get(n);if(_e!==void 0){var ke=Eh,Xe=n;switch(n){case"keypress":if(xl(o)===0)break e;case"keydown":case"keyup":ke=gE;break;case"focusin":Xe="focus",ke=Ah;break;case"focusout":Xe="blur",ke=Ah;break;case"beforeblur":case"afterblur":ke=Ah;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=rE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=yE;break;case e0:case t0:case n0:ke=aE;break;case i0:ke=xE;break;case"scroll":ke=nE;break;case"wheel":ke=EE;break;case"copy":case"cut":case"paste":ke=cE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Om}var qe=(i&4)!==0,an=!qe&&n==="scroll",J=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var W=se,ie;W!==null;){ie=W;var Ee=ie.stateNode;if(ie.tag===5&&Ee!==null&&(ie=Ee,J!==null&&(Ee=Gt(W,J),Ee!=null&&qe.push(oa(W,Ee,ie)))),an)break;W=W.return}0<qe.length&&(_e=new ke(_e,Xe,null,o,ye),Se.push({event:_e,listeners:qe}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",_e&&o!==Me&&(Xe=o.relatedTarget||o.fromElement)&&(ls(Xe)||Xe[ar]))break e;if((ke||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ke?(Xe=o.relatedTarget||o.toElement,ke=se,Xe=Xe?ls(Xe):null,Xe!==null&&(an=zi(Xe),Xe!==an||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ke=null,Xe=se),ke!==Xe)){if(qe=Im,Ee="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Om,Ee="onPointerLeave",J="onPointerEnter",W="pointer"),an=ke==null?_e:ro(ke),ie=Xe==null?_e:ro(Xe),_e=new qe(Ee,W+"leave",ke,o,ye),_e.target=an,_e.relatedTarget=ie,Ee=null,ls(ye)===se&&(qe=new qe(J,W+"enter",Xe,o,ye),qe.target=ie,qe.relatedTarget=an,Ee=qe),an=Ee,ke&&Xe)t:{for(qe=ke,J=Xe,W=0,ie=qe;ie;ie=no(ie))W++;for(ie=0,Ee=J;Ee;Ee=no(Ee))ie++;for(;0<W-ie;)qe=no(qe),W--;for(;0<ie-W;)J=no(J),ie--;for(;W--;){if(qe===J||J!==null&&qe===J.alternate)break t;qe=no(qe),J=no(J)}qe=null}else qe=null;ke!==null&&c0(Se,_e,ke,qe,!1),Xe!==null&&an!==null&&c0(Se,an,Xe,qe,!0)}}e:{if(_e=se?ro(se):window,ke=_e.nodeName&&_e.nodeName.toLowerCase(),ke==="select"||ke==="input"&&_e.type==="file")var Je=bE;else if(Gm(_e))if(Wm)Je=IE;else{Je=DE;var tt=LE}else(ke=_e.nodeName)&&ke.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Je=NE);if(Je&&(Je=Je(n,se))){Vm(Se,Je,o,ye);break e}tt&&tt(n,_e,se),n==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&cn(_e,"number",_e.value)}switch(tt=se?ro(se):window,n){case"focusin":(Gm(tt)||tt.contentEditable==="true")&&(eo=tt,Dh=se,ia=null);break;case"focusout":ia=Dh=eo=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,Jm(Se,o,ye);break;case"selectionchange":if(FE)break;case"keydown":case"keyup":Jm(Se,o,ye)}var nt;if(Ch)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Qs?zm(n,o)&&(ot="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ot="onCompositionStart");ot&&(Fm&&o.locale!=="ko"&&(Qs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Qs&&(nt=Dm()):(Dr=ye,Mh="value"in Dr?Dr.value:Dr.textContent,Qs=!0)),tt=Cl(se,ot),0<tt.length&&(ot=new Um(ot,n,null,o,ye),Se.push({event:ot,listeners:tt}),nt?ot.data=nt:(nt=Hm(o),nt!==null&&(ot.data=nt)))),(nt=TE?AE(n,o):RE(n,o))&&(se=Cl(se,"onBeforeInput"),0<se.length&&(ye=new Um("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:se}),ye.data=nt))}a0(Se,i)})}function oa(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Cl(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Gt(n,o),m!=null&&c.unshift(oa(n,m,d)),m=Gt(n,i),m!=null&&c.push(oa(n,m,d))),n=n.return}return c}function no(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function c0(n,i,o,c,d){for(var m=i._reactName,w=[];o!==null&&o!==c;){var O=o,z=O.alternate,se=O.stateNode;if(z!==null&&z===c)break;O.tag===5&&se!==null&&(O=se,d?(z=Gt(o,m),z!=null&&w.unshift(oa(o,z,O))):d||(z=Gt(o,m),z!=null&&w.push(oa(o,z,O)))),o=o.return}w.length!==0&&n.push({event:i,listeners:w})}var HE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function u0(n){return(typeof n=="string"?n:""+n).replace(HE,`
`).replace(GE,"")}function Pl(n,i,o){if(i=u0(i),u0(n)!==i&&o)throw Error(t(425))}function bl(){}var kh=null,zh=null;function Hh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,h0=typeof Promise=="function"?Promise:void 0,WE=typeof queueMicrotask=="function"?queueMicrotask:typeof h0<"u"?function(n){return h0.resolve(null).then(n).catch(XE)}:Gh;function XE(n){setTimeout(function(){throw n})}function Vh(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Ko(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Ko(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function f0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var io=Math.random().toString(36).slice(2),Gi="__reactFiber$"+io,aa="__reactProps$"+io,ar="__reactContainer$"+io,Wh="__reactEvents$"+io,YE="__reactListeners$"+io,jE="__reactHandles$"+io;function ls(n){var i=n[Gi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[ar]||o[Gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=f0(n);n!==null;){if(o=n[Gi])return o;n=f0(n)}return i}n=o,o=n.parentNode}return null}function la(n){return n=n[Gi]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ro(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ll(n){return n[aa]||null}var Xh=[],so=-1;function Ur(n){return{current:n}}function $t(n){0>so||(n.current=Xh[so],Xh[so]=null,so--)}function Xt(n,i){so++,Xh[so]=n.current,n.current=i}var Or={},Ln=Ur(Or),jn=Ur(!1),cs=Or;function oo(n,i){var o=n.type.contextTypes;if(!o)return Or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function qn(n){return n=n.childContextTypes,n!=null}function Dl(){$t(jn),$t(Ln)}function d0(n,i,o){if(Ln.current!==Or)throw Error(t(168));Xt(Ln,i),Xt(jn,o)}function p0(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ge(n)||"Unknown",d));return oe({},o,c)}function Nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Or,cs=Ln.current,Xt(Ln,n),Xt(jn,jn.current),!0}function m0(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=p0(n,i,cs),c.__reactInternalMemoizedMergedChildContext=n,$t(jn),$t(Ln),Xt(Ln,n)):$t(jn),Xt(jn,o)}var lr=null,Il=!1,Yh=!1;function g0(n){lr===null?lr=[n]:lr.push(n)}function qE(n){Il=!0,g0(n)}function Fr(){if(!Yh&&lr!==null){Yh=!0;var n=0,i=xt;try{var o=lr;for(xt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}lr=null,Il=!1}catch(d){throw lr!==null&&(lr=lr.slice(n+1)),ml(Xo,Fr),d}finally{xt=i,Yh=!1}}return null}var ao=[],lo=0,Ul=null,Ol=0,hi=[],fi=0,us=null,cr=1,ur="";function hs(n,i){ao[lo++]=Ol,ao[lo++]=Ul,Ul=n,Ol=i}function v0(n,i,o){hi[fi++]=cr,hi[fi++]=ur,hi[fi++]=us,us=n;var c=cr;n=ur;var d=32-Ce(c)-1;c&=~(1<<d),o+=1;var m=32-Ce(i)+d;if(30<m){var w=d-d%5;m=(c&(1<<w)-1).toString(32),c>>=w,d-=w,cr=1<<32-Ce(i)+d|o<<d|c,ur=m+n}else cr=1<<m|o<<d|c,ur=n}function jh(n){n.return!==null&&(hs(n,1),v0(n,1,0))}function qh(n){for(;n===Ul;)Ul=ao[--lo],ao[lo]=null,Ol=ao[--lo],ao[lo]=null;for(;n===us;)us=hi[--fi],hi[fi]=null,ur=hi[--fi],hi[fi]=null,cr=hi[--fi],hi[fi]=null}var ri=null,si=null,Jt=!1,Ti=null;function _0(n,i){var o=gi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function y0(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ri=n,si=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ri=n,si=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=us!==null?{id:cr,overflow:ur}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=gi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ri=n,si=null,!0):!1;default:return!1}}function $h(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kh(n){if(Jt){var i=si;if(i){var o=i;if(!y0(n,i)){if($h(n))throw Error(t(418));i=Ir(o.nextSibling);var c=ri;i&&y0(n,i)?_0(c,o):(n.flags=n.flags&-4097|2,Jt=!1,ri=n)}}else{if($h(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,ri=n}}}function S0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ri=n}function Fl(n){if(n!==ri)return!1;if(!Jt)return S0(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hh(n.type,n.memoizedProps)),i&&(i=si)){if($h(n))throw x0(),Error(t(418));for(;i;)_0(n,i),i=Ir(i.nextSibling)}if(S0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){si=Ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}si=null}}else si=ri?Ir(n.stateNode.nextSibling):null;return!0}function x0(){for(var n=si;n;)n=Ir(n.nextSibling)}function co(){si=ri=null,Jt=!1}function Zh(n){Ti===null?Ti=[n]:Ti.push(n)}var $E=L.ReactCurrentBatchConfig;function ca(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var O=d.refs;w===null?delete O[m]:O[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Bl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function M0(n){var i=n._init;return i(n._payload)}function E0(n){function i(J,W){if(n){var ie=J.deletions;ie===null?(J.deletions=[W],J.flags|=16):ie.push(W)}}function o(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function c(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function d(J,W){return J=Xr(J,W),J.index=0,J.sibling=null,J}function m(J,W,ie){return J.index=ie,n?(ie=J.alternate,ie!==null?(ie=ie.index,ie<W?(J.flags|=2,W):ie):(J.flags|=2,W)):(J.flags|=1048576,W)}function w(J){return n&&J.alternate===null&&(J.flags|=2),J}function O(J,W,ie,Ee){return W===null||W.tag!==6?(W=Vf(ie,J.mode,Ee),W.return=J,W):(W=d(W,ie),W.return=J,W)}function z(J,W,ie,Ee){var Je=ie.type;return Je===B?ye(J,W,ie.props.children,Ee,ie.key):W!==null&&(W.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ee&&M0(Je)===W.type)?(Ee=d(W,ie.props),Ee.ref=ca(J,W,ie),Ee.return=J,Ee):(Ee=lc(ie.type,ie.key,ie.props,null,J.mode,Ee),Ee.ref=ca(J,W,ie),Ee.return=J,Ee)}function se(J,W,ie,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Wf(ie,J.mode,Ee),W.return=J,W):(W=d(W,ie.children||[]),W.return=J,W)}function ye(J,W,ie,Ee,Je){return W===null||W.tag!==7?(W=ys(ie,J.mode,Ee,Je),W.return=J,W):(W=d(W,ie),W.return=J,W)}function Se(J,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Vf(""+W,J.mode,ie),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case I:return ie=lc(W.type,W.key,W.props,null,J.mode,ie),ie.ref=ca(J,null,W),ie.return=J,ie;case b:return W=Wf(W,J.mode,ie),W.return=J,W;case ee:var Ee=W._init;return Se(J,Ee(W._payload),ie)}if(V(W)||ae(W))return W=ys(W,J.mode,ie,null),W.return=J,W;Bl(J,W)}return null}function _e(J,W,ie,Ee){var Je=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:O(J,W,""+ie,Ee);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:return ie.key===Je?z(J,W,ie,Ee):null;case b:return ie.key===Je?se(J,W,ie,Ee):null;case ee:return Je=ie._init,_e(J,W,Je(ie._payload),Ee)}if(V(ie)||ae(ie))return Je!==null?null:ye(J,W,ie,Ee,null);Bl(J,ie)}return null}function ke(J,W,ie,Ee,Je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return J=J.get(ie)||null,O(W,J,""+Ee,Je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case I:return J=J.get(Ee.key===null?ie:Ee.key)||null,z(W,J,Ee,Je);case b:return J=J.get(Ee.key===null?ie:Ee.key)||null,se(W,J,Ee,Je);case ee:var tt=Ee._init;return ke(J,W,ie,tt(Ee._payload),Je)}if(V(Ee)||ae(Ee))return J=J.get(ie)||null,ye(W,J,Ee,Je,null);Bl(W,Ee)}return null}function Xe(J,W,ie,Ee){for(var Je=null,tt=null,nt=W,ot=W=0,Sn=null;nt!==null&&ot<ie.length;ot++){nt.index>ot?(Sn=nt,nt=null):Sn=nt.sibling;var Lt=_e(J,nt,ie[ot],Ee);if(Lt===null){nt===null&&(nt=Sn);break}n&&nt&&Lt.alternate===null&&i(J,nt),W=m(Lt,W,ot),tt===null?Je=Lt:tt.sibling=Lt,tt=Lt,nt=Sn}if(ot===ie.length)return o(J,nt),Jt&&hs(J,ot),Je;if(nt===null){for(;ot<ie.length;ot++)nt=Se(J,ie[ot],Ee),nt!==null&&(W=m(nt,W,ot),tt===null?Je=nt:tt.sibling=nt,tt=nt);return Jt&&hs(J,ot),Je}for(nt=c(J,nt);ot<ie.length;ot++)Sn=ke(nt,J,ot,ie[ot],Ee),Sn!==null&&(n&&Sn.alternate!==null&&nt.delete(Sn.key===null?ot:Sn.key),W=m(Sn,W,ot),tt===null?Je=Sn:tt.sibling=Sn,tt=Sn);return n&&nt.forEach(function(Yr){return i(J,Yr)}),Jt&&hs(J,ot),Je}function qe(J,W,ie,Ee){var Je=ae(ie);if(typeof Je!="function")throw Error(t(150));if(ie=Je.call(ie),ie==null)throw Error(t(151));for(var tt=Je=null,nt=W,ot=W=0,Sn=null,Lt=ie.next();nt!==null&&!Lt.done;ot++,Lt=ie.next()){nt.index>ot?(Sn=nt,nt=null):Sn=nt.sibling;var Yr=_e(J,nt,Lt.value,Ee);if(Yr===null){nt===null&&(nt=Sn);break}n&&nt&&Yr.alternate===null&&i(J,nt),W=m(Yr,W,ot),tt===null?Je=Yr:tt.sibling=Yr,tt=Yr,nt=Sn}if(Lt.done)return o(J,nt),Jt&&hs(J,ot),Je;if(nt===null){for(;!Lt.done;ot++,Lt=ie.next())Lt=Se(J,Lt.value,Ee),Lt!==null&&(W=m(Lt,W,ot),tt===null?Je=Lt:tt.sibling=Lt,tt=Lt);return Jt&&hs(J,ot),Je}for(nt=c(J,nt);!Lt.done;ot++,Lt=ie.next())Lt=ke(nt,J,ot,Lt.value,Ee),Lt!==null&&(n&&Lt.alternate!==null&&nt.delete(Lt.key===null?ot:Lt.key),W=m(Lt,W,ot),tt===null?Je=Lt:tt.sibling=Lt,tt=Lt);return n&&nt.forEach(function(Cw){return i(J,Cw)}),Jt&&hs(J,ot),Je}function an(J,W,ie,Ee){if(typeof ie=="object"&&ie!==null&&ie.type===B&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:e:{for(var Je=ie.key,tt=W;tt!==null;){if(tt.key===Je){if(Je=ie.type,Je===B){if(tt.tag===7){o(J,tt.sibling),W=d(tt,ie.props.children),W.return=J,J=W;break e}}else if(tt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ee&&M0(Je)===tt.type){o(J,tt.sibling),W=d(tt,ie.props),W.ref=ca(J,tt,ie),W.return=J,J=W;break e}o(J,tt);break}else i(J,tt);tt=tt.sibling}ie.type===B?(W=ys(ie.props.children,J.mode,Ee,ie.key),W.return=J,J=W):(Ee=lc(ie.type,ie.key,ie.props,null,J.mode,Ee),Ee.ref=ca(J,W,ie),Ee.return=J,J=Ee)}return w(J);case b:e:{for(tt=ie.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){o(J,W.sibling),W=d(W,ie.children||[]),W.return=J,J=W;break e}else{o(J,W);break}else i(J,W);W=W.sibling}W=Wf(ie,J.mode,Ee),W.return=J,J=W}return w(J);case ee:return tt=ie._init,an(J,W,tt(ie._payload),Ee)}if(V(ie))return Xe(J,W,ie,Ee);if(ae(ie))return qe(J,W,ie,Ee);Bl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(o(J,W.sibling),W=d(W,ie),W.return=J,J=W):(o(J,W),W=Vf(ie,J.mode,Ee),W.return=J,J=W),w(J)):o(J,W)}return an}var uo=E0(!0),w0=E0(!1),kl=Ur(null),zl=null,ho=null,Jh=null;function Qh(){Jh=ho=zl=null}function ef(n){var i=kl.current;$t(kl),n._currentValue=i}function tf(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function fo(n,i){zl=n,Jh=ho=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&($n=!0),n.firstContext=null)}function di(n){var i=n._currentValue;if(Jh!==n)if(n={context:n,memoizedValue:i,next:null},ho===null){if(zl===null)throw Error(t(308));ho=n,zl.dependencies={lanes:0,firstContext:n}}else ho=ho.next=n;return i}var fs=null;function nf(n){fs===null?fs=[n]:fs.push(n)}function T0(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,nf(i)):(o.next=d.next,d.next=o),i.interleaved=o,hr(n,c)}function hr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Br=!1;function rf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function kr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,hr(n,o)}return d=c.interleaved,d===null?(i.next=i,nf(c)):(i.next=d.next,d.next=i),c.interleaved=i,hr(n,o)}function Hl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Yn(n,o)}}function R0(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Gl(n,i,o,c){var d=n.updateQueue;Br=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var z=O,se=z.next;z.next=null,w===null?m=se:w.next=se,w=z;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,O=ye.lastBaseUpdate,O!==w&&(O===null?ye.firstBaseUpdate=se:O.next=se,ye.lastBaseUpdate=z))}if(m!==null){var Se=d.baseState;w=0,ye=se=z=null,O=m;do{var _e=O.lane,ke=O.eventTime;if((c&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Xe=n,qe=O;switch(_e=i,ke=o,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Se=Xe.call(ke,Se,_e);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,_e=typeof Xe=="function"?Xe.call(ke,Se,_e):Xe,_e==null)break e;Se=oe({},Se,_e);break e;case 2:Br=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[O]:_e.push(O))}else ke={eventTime:ke,lane:_e,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ye===null?(se=ye=ke,z=Se):ye=ye.next=ke,w|=_e;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;_e=O,O=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(z=Se),d.baseState=z,d.firstBaseUpdate=se,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ms|=w,n.lanes=w,n.memoizedState=Se}}function C0(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ua={},Vi=Ur(ua),ha=Ur(ua),fa=Ur(ua);function ds(n){if(n===ua)throw Error(t(174));return n}function sf(n,i){switch(Xt(fa,i),Xt(ha,n),Xt(Vi,ua),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}$t(Vi),Xt(Vi,i)}function po(){$t(Vi),$t(ha),$t(fa)}function P0(n){ds(fa.current);var i=ds(Vi.current),o=M(i,n.type);i!==o&&(Xt(ha,n),Xt(Vi,o))}function of(n){ha.current===n&&($t(Vi),$t(ha))}var tn=Ur(0);function Vl(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var af=[];function lf(){for(var n=0;n<af.length;n++)af[n]._workInProgressVersionPrimary=null;af.length=0}var Wl=L.ReactCurrentDispatcher,cf=L.ReactCurrentBatchConfig,ps=0,nn=null,mn=null,_n=null,Xl=!1,da=!1,pa=0,KE=0;function Dn(){throw Error(t(321))}function uf(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!wi(n[o],i[o]))return!1;return!0}function hf(n,i,o,c,d,m){if(ps=m,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wl.current=n===null||n.memoizedState===null?ew:tw,n=o(c,d),da){m=0;do{if(da=!1,pa=0,25<=m)throw Error(t(301));m+=1,_n=mn=null,i.updateQueue=null,Wl.current=nw,n=o(c,d)}while(da)}if(Wl.current=ql,i=mn!==null&&mn.next!==null,ps=0,_n=mn=nn=null,Xl=!1,i)throw Error(t(300));return n}function ff(){var n=pa!==0;return pa=0,n}function Wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?nn.memoizedState=_n=n:_n=_n.next=n,_n}function pi(){if(mn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=_n===null?nn.memoizedState:_n.next;if(i!==null)_n=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},_n===null?nn.memoizedState=_n=n:_n=_n.next=n}return _n}function ma(n,i){return typeof i=="function"?i(n):i}function df(n){var i=pi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=mn,d=c.baseQueue,m=o.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}c.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,c=c.baseState;var O=w=null,z=null,se=m;do{var ye=se.lane;if((ps&ye)===ye)z!==null&&(z=z.next={lane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),c=se.hasEagerState?se.eagerState:n(c,se.action);else{var Se={lane:ye,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null};z===null?(O=z=Se,w=c):z=z.next=Se,nn.lanes|=ye,ms|=ye}se=se.next}while(se!==null&&se!==m);z===null?w=c:z.next=O,wi(c,i.memoizedState)||($n=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=z,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do m=d.lane,nn.lanes|=m,ms|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function pf(n){var i=pi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);wi(m,i.memoizedState)||($n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function b0(){}function L0(n,i){var o=nn,c=pi(),d=i(),m=!wi(c.memoizedState,d);if(m&&(c.memoizedState=d,$n=!0),c=c.queue,mf(I0.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,ga(9,N0.bind(null,o,c,d,i),void 0,null),yn===null)throw Error(t(349));(ps&30)!==0||D0(o,i,d)}return d}function D0(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function N0(n,i,o,c){i.value=o,i.getSnapshot=c,U0(i)&&O0(n)}function I0(n,i,o){return o(function(){U0(i)&&O0(n)})}function U0(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!wi(n,o)}catch{return!0}}function O0(n){var i=hr(n,1);i!==null&&Pi(i,n,1,-1)}function F0(n){var i=Wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},i.queue=n,n=n.dispatch=QE.bind(null,nn,n),[i.memoizedState,n]}function ga(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function B0(){return pi().memoizedState}function Yl(n,i,o,c){var d=Wi();nn.flags|=n,d.memoizedState=ga(1|i,o,void 0,c===void 0?null:c)}function jl(n,i,o,c){var d=pi();c=c===void 0?null:c;var m=void 0;if(mn!==null){var w=mn.memoizedState;if(m=w.destroy,c!==null&&uf(c,w.deps)){d.memoizedState=ga(i,o,m,c);return}}nn.flags|=n,d.memoizedState=ga(1|i,o,m,c)}function k0(n,i){return Yl(8390656,8,n,i)}function mf(n,i){return jl(2048,8,n,i)}function z0(n,i){return jl(4,2,n,i)}function H0(n,i){return jl(4,4,n,i)}function G0(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function V0(n,i,o){return o=o!=null?o.concat([n]):null,jl(4,4,G0.bind(null,i,n),o)}function gf(){}function W0(n,i){var o=pi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&uf(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function X0(n,i){var o=pi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&uf(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Y0(n,i,o){return(ps&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=o):(wi(o,i)||(o=Be(),nn.lanes|=o,ms|=o,n.baseState=!0),i)}function ZE(n,i){var o=xt;xt=o!==0&&4>o?o:4,n(!0);var c=cf.transition;cf.transition={};try{n(!1),i()}finally{xt=o,cf.transition=c}}function j0(){return pi().memoizedState}function JE(n,i,o){var c=Vr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},q0(n))$0(i,o);else if(o=T0(n,i,o,c),o!==null){var d=zn();Pi(o,n,c,d),K0(o,i,c)}}function QE(n,i,o){var c=Vr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(q0(n))$0(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,O=m(w,o);if(d.hasEagerState=!0,d.eagerState=O,wi(O,w)){var z=i.interleaved;z===null?(d.next=d,nf(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}o=T0(n,i,d,c),o!==null&&(d=zn(),Pi(o,n,c,d),K0(o,i,c))}}function q0(n){var i=n.alternate;return n===nn||i!==null&&i===nn}function $0(n,i){da=Xl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function K0(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Yn(n,o)}}var ql={readContext:di,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},ew={readContext:di,useCallback:function(n,i){return Wi().memoizedState=[n,i===void 0?null:i],n},useContext:di,useEffect:k0,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Yl(4194308,4,G0.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Yl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yl(4,2,n,i)},useMemo:function(n,i){var o=Wi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Wi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=JE.bind(null,nn,n),[c.memoizedState,n]},useRef:function(n){var i=Wi();return n={current:n},i.memoizedState=n},useState:F0,useDebugValue:gf,useDeferredValue:function(n){return Wi().memoizedState=n},useTransition:function(){var n=F0(!1),i=n[0];return n=ZE.bind(null,n[1]),Wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=nn,d=Wi();if(Jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),yn===null)throw Error(t(349));(ps&30)!==0||D0(c,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,k0(I0.bind(null,c,m,n),[n]),c.flags|=2048,ga(9,N0.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Wi(),i=yn.identifierPrefix;if(Jt){var o=ur,c=cr;o=(c&~(1<<32-Ce(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=pa++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=KE++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},tw={readContext:di,useCallback:W0,useContext:di,useEffect:mf,useImperativeHandle:V0,useInsertionEffect:z0,useLayoutEffect:H0,useMemo:X0,useReducer:df,useRef:B0,useState:function(){return df(ma)},useDebugValue:gf,useDeferredValue:function(n){var i=pi();return Y0(i,mn.memoizedState,n)},useTransition:function(){var n=df(ma)[0],i=pi().memoizedState;return[n,i]},useMutableSource:b0,useSyncExternalStore:L0,useId:j0,unstable_isNewReconciler:!1},nw={readContext:di,useCallback:W0,useContext:di,useEffect:mf,useImperativeHandle:V0,useInsertionEffect:z0,useLayoutEffect:H0,useMemo:X0,useReducer:pf,useRef:B0,useState:function(){return pf(ma)},useDebugValue:gf,useDeferredValue:function(n){var i=pi();return mn===null?i.memoizedState=n:Y0(i,mn.memoizedState,n)},useTransition:function(){var n=pf(ma)[0],i=pi().memoizedState;return[n,i]},useMutableSource:b0,useSyncExternalStore:L0,useId:j0,unstable_isNewReconciler:!1};function Ai(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function vf(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:oe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var $l={isMounted:function(n){return(n=n._reactInternals)?zi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=zn(),d=Vr(n),m=fr(c,d);m.payload=i,o!=null&&(m.callback=o),i=kr(n,m,d),i!==null&&(Pi(i,n,d,c),Hl(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=zn(),d=Vr(n),m=fr(c,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=kr(n,m,d),i!==null&&(Pi(i,n,d,c),Hl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=zn(),c=Vr(n),d=fr(o,c);d.tag=2,i!=null&&(d.callback=i),i=kr(n,d,c),i!==null&&(Pi(i,n,c,o),Hl(i,n,c))}};function Z0(n,i,o,c,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!na(o,c)||!na(d,m):!0}function J0(n,i,o){var c=!1,d=Or,m=i.contextType;return typeof m=="object"&&m!==null?m=di(m):(d=qn(i)?cs:Ln.current,c=i.contextTypes,m=(c=c!=null)?oo(n,d):Or),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$l,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Q0(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&$l.enqueueReplaceState(i,i.state,null)}function _f(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},rf(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=di(m):(m=qn(i)?cs:Ln.current,d.context=oo(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(vf(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&$l.enqueueReplaceState(d,d.state,null),Gl(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function mo(n,i){try{var o="",c=i;do o+=Ae(c),c=c.return;while(c);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function yf(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Sf(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var iw=typeof WeakMap=="function"?WeakMap:Map;function eg(n,i,o){o=fr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){nc||(nc=!0,Uf=c),Sf(n,i)},o}function tg(n,i,o){o=fr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Sf(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Sf(n,i),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function ng(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new iw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=vw.bind(null,n,i,o),i.then(n,n))}function ig(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function rg(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=fr(-1,1),i.tag=2,kr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var rw=L.ReactCurrentOwner,$n=!1;function kn(n,i,o,c){i.child=n===null?w0(i,null,o,c):uo(i,n.child,o,c)}function sg(n,i,o,c,d){o=o.render;var m=i.ref;return fo(i,d),c=hf(n,i,o,c,m,d),o=ff(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,dr(n,i,d)):(Jt&&o&&jh(i),i.flags|=1,kn(n,i,c,d),i.child)}function og(n,i,o,c,d){if(n===null){var m=o.type;return typeof m=="function"&&!Gf(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,ag(n,i,m,c,d)):(n=lc(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:na,o(w,c)&&n.ref===i.ref)return dr(n,i,d)}return i.flags|=1,n=Xr(m,c),n.ref=i.ref,n.return=i,i.child=n}function ag(n,i,o,c,d){if(n!==null){var m=n.memoizedProps;if(na(m,c)&&n.ref===i.ref)if($n=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&($n=!0);else return i.lanes=n.lanes,dr(n,i,d)}return xf(n,i,o,c,d)}function lg(n,i,o){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(vo,oi),oi|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(vo,oi),oi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Xt(vo,oi),oi|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Xt(vo,oi),oi|=c;return kn(n,i,d,o),i.child}function cg(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function xf(n,i,o,c,d){var m=qn(o)?cs:Ln.current;return m=oo(i,m),fo(i,d),o=hf(n,i,o,c,m,d),c=ff(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,dr(n,i,d)):(Jt&&c&&jh(i),i.flags|=1,kn(n,i,o,d),i.child)}function ug(n,i,o,c,d){if(qn(o)){var m=!0;Nl(i)}else m=!1;if(fo(i,d),i.stateNode===null)Zl(n,i),J0(i,o,c),_f(i,o,c,d),c=!0;else if(n===null){var w=i.stateNode,O=i.memoizedProps;w.props=O;var z=w.context,se=o.contextType;typeof se=="object"&&se!==null?se=di(se):(se=qn(o)?cs:Ln.current,se=oo(i,se));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==c||z!==se)&&Q0(i,w,c,se),Br=!1;var _e=i.memoizedState;w.state=_e,Gl(i,c,w,d),z=i.memoizedState,O!==c||_e!==z||jn.current||Br?(typeof ye=="function"&&(vf(i,o,ye,c),z=i.memoizedState),(O=Br||Z0(i,o,O,c,_e,z,se))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),w.props=c,w.state=z,w.context=se,c=O):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,A0(n,i),O=i.memoizedProps,se=i.type===i.elementType?O:Ai(i.type,O),w.props=se,Se=i.pendingProps,_e=w.context,z=o.contextType,typeof z=="object"&&z!==null?z=di(z):(z=qn(o)?cs:Ln.current,z=oo(i,z));var ke=o.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==Se||_e!==z)&&Q0(i,w,c,z),Br=!1,_e=i.memoizedState,w.state=_e,Gl(i,c,w,d);var Xe=i.memoizedState;O!==Se||_e!==Xe||jn.current||Br?(typeof ke=="function"&&(vf(i,o,ke,c),Xe=i.memoizedState),(se=Br||Z0(i,o,se,c,_e,Xe,z)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Xe,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Xe,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),w.props=c,w.state=Xe,w.context=z,c=se):(typeof w.componentDidUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return Mf(n,i,o,c,m,d)}function Mf(n,i,o,c,d,m){cg(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&m0(i,o,!1),dr(n,i,m);c=i.stateNode,rw.current=i;var O=w&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=uo(i,n.child,null,m),i.child=uo(i,null,O,m)):kn(n,i,O,m),i.memoizedState=c.state,d&&m0(i,o,!0),i.child}function hg(n){var i=n.stateNode;i.pendingContext?d0(n,i.pendingContext,i.pendingContext!==i.context):i.context&&d0(n,i.context,!1),sf(n,i.containerInfo)}function fg(n,i,o,c,d){return co(),Zh(d),i.flags|=256,kn(n,i,o,c),i.child}var Ef={dehydrated:null,treeContext:null,retryLane:0};function wf(n){return{baseLanes:n,cachePool:null,transitions:null}}function dg(n,i,o){var c=i.pendingProps,d=tn.current,m=!1,w=(i.flags&128)!==0,O;if((O=w)||(O=n!==null&&n.memoizedState===null?!1:(d&2)!==0),O?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Xt(tn,d&1),n===null)return Kh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=cc(w,c,0,null),n=ys(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=wf(o),i.memoizedState=Ef,n):Tf(i,w));if(d=n.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return sw(n,i,w,c,O,d,o);if(m){m=c.fallback,w=i.mode,d=n.child,O=d.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Xr(d,z),c.subtreeFlags=d.subtreeFlags&14680064),O!==null?m=Xr(O,m):(m=ys(m,w,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?wf(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~o,i.memoizedState=Ef,c}return m=n.child,n=m.sibling,c=Xr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Tf(n,i){return i=cc({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Kl(n,i,o,c){return c!==null&&Zh(c),uo(i,n.child,null,o),n=Tf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function sw(n,i,o,c,d,m,w){if(o)return i.flags&256?(i.flags&=-257,c=yf(Error(t(422))),Kl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=cc({mode:"visible",children:c.children},d,0,null),m=ys(m,d,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&uo(i,n.child,null,w),i.child.memoizedState=wf(w),i.memoizedState=Ef,m);if((i.mode&1)===0)return Kl(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var O=c.dgst;return c=O,m=Error(t(419)),c=yf(m,c,void 0),Kl(n,i,w,c)}if(O=(w&n.childLanes)!==0,$n||O){if(c=yn,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,hr(n,d),Pi(c,n,d,-1))}return Hf(),c=yf(Error(t(421))),Kl(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=_w.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,si=Ir(d.nextSibling),ri=i,Jt=!0,Ti=null,n!==null&&(hi[fi++]=cr,hi[fi++]=ur,hi[fi++]=us,cr=n.id,ur=n.overflow,us=i),i=Tf(i,c.children),i.flags|=4096,i)}function pg(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),tf(n.return,i,o)}function Af(n,i,o,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function mg(n,i,o){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(kn(n,i,c.children,o),c=tn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pg(n,o,i);else if(n.tag===19)pg(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xt(tn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Vl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Af(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Vl(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Af(i,!0,o,null,m);break;case"together":Af(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Zl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function dr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Xr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Xr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function ow(n,i,o){switch(i.tag){case 3:hg(i),co();break;case 5:P0(i);break;case 1:qn(i.type)&&Nl(i);break;case 4:sf(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Xt(kl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?dg(n,i,o):(Xt(tn,tn.current&1),n=dr(n,i,o),n!==null?n.sibling:null);Xt(tn,tn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return mg(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xt(tn,tn.current),c)break;return null;case 22:case 23:return i.lanes=0,lg(n,i,o)}return dr(n,i,o)}var gg,Rf,vg,_g;gg=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Rf=function(){},vg=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ds(Vi.current);var m=null;switch(o){case"input":d=wt(n,d),c=wt(n,c),m=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":d=vt(n,d),c=vt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bl)}Fe(o,c);var w;o=null;for(se in d)if(!c.hasOwnProperty(se)&&d.hasOwnProperty(se)&&d[se]!=null)if(se==="style"){var O=d[se];for(w in O)O.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else se!=="dangerouslySetInnerHTML"&&se!=="children"&&se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&se!=="autoFocus"&&(a.hasOwnProperty(se)?m||(m=[]):(m=m||[]).push(se,null));for(se in c){var z=c[se];if(O=d!=null?d[se]:void 0,c.hasOwnProperty(se)&&z!==O&&(z!=null||O!=null))if(se==="style")if(O){for(w in O)!O.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in z)z.hasOwnProperty(w)&&O[w]!==z[w]&&(o||(o={}),o[w]=z[w])}else o||(m||(m=[]),m.push(se,o)),o=z;else se==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(m=m||[]).push(se,z)):se==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(se,""+z):se!=="suppressContentEditableWarning"&&se!=="suppressHydrationWarning"&&(a.hasOwnProperty(se)?(z!=null&&se==="onScroll"&&qt("scroll",n),m||O===z||(m=[])):(m=m||[]).push(se,z))}o&&(m=m||[]).push("style",o);var se=m;(i.updateQueue=se)&&(i.flags|=4)}},_g=function(n,i,o,c){o!==c&&(i.flags|=4)};function va(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function aw(n,i,o){var c=i.pendingProps;switch(qh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return qn(i.type)&&Dl(),Nn(i),null;case 3:return c=i.stateNode,po(),$t(jn),$t(Ln),lf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ti!==null&&(Bf(Ti),Ti=null))),Rf(n,i),Nn(i),null;case 5:of(i);var d=ds(fa.current);if(o=i.type,n!==null&&i.stateNode!=null)vg(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=ds(Vi.current),Fl(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Gi]=i,c[aa]=m,n=(i.mode&1)!==0,o){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(d=0;d<ra.length;d++)qt(ra[d],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":Dt(c,m),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},qt("invalid",c);break;case"textarea":Bt(c,m),qt("invalid",c)}Fe(o,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var O=m[w];w==="children"?typeof O=="string"?c.textContent!==O&&(m.suppressHydrationWarning!==!0&&Pl(c.textContent,O,n),d=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&Pl(c.textContent,O,n),d=["children",""+O]):a.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&qt("scroll",c)}switch(o){case"input":$e(c),Ot(c,m,!0);break;case"textarea":$e(c),Yt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=bl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(o,{is:c.is}):(n=w.createElement(o),o==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,o),n[Gi]=i,n[aa]=c,gg(n,i,!1,!1),i.stateNode=n;e:{switch(w=Re(o,c),o){case"dialog":qt("cancel",n),qt("close",n),d=c;break;case"iframe":case"object":case"embed":qt("load",n),d=c;break;case"video":case"audio":for(d=0;d<ra.length;d++)qt(ra[d],n);d=c;break;case"source":qt("error",n),d=c;break;case"img":case"image":case"link":qt("error",n),qt("load",n),d=c;break;case"details":qt("toggle",n),d=c;break;case"input":Dt(n,c),d=wt(n,c),qt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),qt("invalid",n);break;case"textarea":Bt(n,c),d=vt(n,c),qt("invalid",n);break;default:d=c}Fe(o,d),O=d;for(m in O)if(O.hasOwnProperty(m)){var z=O[m];m==="style"?pe(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&fe(n,z)):m==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&me(n,z):typeof z=="number"&&me(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?z!=null&&m==="onScroll"&&qt("scroll",n):z!=null&&N(n,m,z,w))}switch(o){case"input":$e(n),Ot(n,c,!1);break;case"textarea":$e(n),Yt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+de(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Ft(n,!!c.multiple,m,!1):c.defaultValue!=null&&Ft(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=bl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)_g(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=ds(fa.current),ds(Vi.current),Fl(i)){if(c=i.stateNode,o=i.memoizedProps,c[Gi]=i,(m=c.nodeValue!==o)&&(n=ri,n!==null))switch(n.tag){case 3:Pl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Gi]=i,i.stateNode=c}return Nn(i),null;case 13:if($t(tn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&si!==null&&(i.mode&1)!==0&&(i.flags&128)===0)x0(),co(),i.flags|=98560,m=!1;else if(m=Fl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Gi]=i}else co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),m=!1}else Ti!==null&&(Bf(Ti),Ti=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tn.current&1)!==0?gn===0&&(gn=3):Hf())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return po(),Rf(n,i),n===null&&sa(i.stateNode.containerInfo),Nn(i),null;case 10:return ef(i.type._context),Nn(i),null;case 17:return qn(i.type)&&Dl(),Nn(i),null;case 19:if($t(tn),m=i.memoizedState,m===null)return Nn(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)va(m,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Vl(n),w!==null){for(i.flags|=128,va(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Xt(tn,tn.current&1|2),i.child}n=n.sibling}m.tail!==null&&en()>_o&&(i.flags|=128,c=!0,va(m,!1),i.lanes=4194304)}else{if(!c)if(n=Vl(w),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),va(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Jt)return Nn(i),null}else 2*en()-m.renderingStartTime>_o&&o!==1073741824&&(i.flags|=128,c=!0,va(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(o=m.last,o!==null?o.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=en(),i.sibling=null,o=tn.current,Xt(tn,c?o&1|2:o&1),i):(Nn(i),null);case 22:case 23:return zf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(oi&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function lw(n,i){switch(qh(i),i.tag){case 1:return qn(i.type)&&Dl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return po(),$t(jn),$t(Ln),lf(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return of(i),null;case 13:if($t(tn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));co()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(tn),null;case 4:return po(),null;case 10:return ef(i.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var Jl=!1,In=!1,cw=typeof WeakSet=="function"?WeakSet:Set,We=null;function go(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){on(n,i,c)}else o.current=null}function Cf(n,i,o){try{o()}catch(c){on(n,i,c)}}var yg=!1;function uw(n,i){if(kh=_l,n=Zm(),Lh(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,O=-1,z=-1,se=0,ye=0,Se=n,_e=null;t:for(;;){for(var ke;Se!==o||d!==0&&Se.nodeType!==3||(O=w+d),Se!==m||c!==0&&Se.nodeType!==3||(z=w+c),Se.nodeType===3&&(w+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)_e=Se,Se=ke;for(;;){if(Se===n)break t;if(_e===o&&++se===d&&(O=w),_e===m&&++ye===c&&(z=w),(ke=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ke}o=O===-1||z===-1?null:{start:O,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(zh={focusedElem:n,selectionRange:o},_l=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,an=Xe.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?qe:Ai(i.type,qe),an);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){on(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return Xe=yg,yg=!1,Xe}function _a(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Cf(i,o,m)}d=d.next}while(d!==c)}}function Ql(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Pf(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Sg(n){var i=n.alternate;i!==null&&(n.alternate=null,Sg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Gi],delete i[aa],delete i[Wh],delete i[YE],delete i[jE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xg(n){return n.tag===5||n.tag===3||n.tag===4}function Mg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bf(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=bl));else if(c!==4&&(n=n.child,n!==null))for(bf(n,i,o),n=n.sibling;n!==null;)bf(n,i,o),n=n.sibling}function Lf(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lf(n,i,o),n=n.sibling;n!==null;)Lf(n,i,o),n=n.sibling}var Tn=null,Ri=!1;function zr(n,i,o){for(o=o.child;o!==null;)Eg(n,i,o),o=o.sibling}function Eg(n,i,o){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(te,o)}catch{}switch(o.tag){case 5:In||go(o,i);case 6:var c=Tn,d=Ri;Tn=null,zr(n,i,o),Tn=c,Ri=d,Tn!==null&&(Ri?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(Ri?(n=Tn,o=o.stateNode,n.nodeType===8?Vh(n.parentNode,o):n.nodeType===1&&Vh(n,o),Ko(n)):Vh(Tn,o.stateNode));break;case 4:c=Tn,d=Ri,Tn=o.stateNode.containerInfo,Ri=!0,zr(n,i,o),Tn=c,Ri=d;break;case 0:case 11:case 14:case 15:if(!In&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Cf(o,i,w),d=d.next}while(d!==c)}zr(n,i,o);break;case 1:if(!In&&(go(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(O){on(o,i,O)}zr(n,i,o);break;case 21:zr(n,i,o);break;case 22:o.mode&1?(In=(c=In)||o.memoizedState!==null,zr(n,i,o),In=c):zr(n,i,o);break;default:zr(n,i,o)}}function wg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new cw),i.forEach(function(c){var d=yw.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Ci(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var m=n,w=i,O=w;e:for(;O!==null;){switch(O.tag){case 5:Tn=O.stateNode,Ri=!1;break e;case 3:Tn=O.stateNode.containerInfo,Ri=!0;break e;case 4:Tn=O.stateNode.containerInfo,Ri=!0;break e}O=O.return}if(Tn===null)throw Error(t(160));Eg(m,w,d),Tn=null,Ri=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(se){on(d,i,se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Tg(i,n),i=i.sibling}function Tg(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ci(i,n),Xi(n),c&4){try{_a(3,n,n.return),Ql(3,n)}catch(qe){on(n,n.return,qe)}try{_a(5,n,n.return)}catch(qe){on(n,n.return,qe)}}break;case 1:Ci(i,n),Xi(n),c&512&&o!==null&&go(o,o.return);break;case 5:if(Ci(i,n),Xi(n),c&512&&o!==null&&go(o,o.return),n.flags&32){var d=n.stateNode;try{me(d,"")}catch(qe){on(n,n.return,qe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=o!==null?o.memoizedProps:m,O=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&st(d,m),Re(O,w);var se=Re(O,m);for(w=0;w<z.length;w+=2){var ye=z[w],Se=z[w+1];ye==="style"?pe(d,Se):ye==="dangerouslySetInnerHTML"?fe(d,Se):ye==="children"?me(d,Se):N(d,ye,Se,se)}switch(O){case"input":Vt(d,m);break;case"textarea":De(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ke=m.value;ke!=null?Ft(d,!!m.multiple,ke,!1):_e!==!!m.multiple&&(m.defaultValue!=null?Ft(d,!!m.multiple,m.defaultValue,!0):Ft(d,!!m.multiple,m.multiple?[]:"",!1))}d[aa]=m}catch(qe){on(n,n.return,qe)}}break;case 6:if(Ci(i,n),Xi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(qe){on(n,n.return,qe)}}break;case 3:if(Ci(i,n),Xi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ko(i.containerInfo)}catch(qe){on(n,n.return,qe)}break;case 4:Ci(i,n),Xi(n);break;case 13:Ci(i,n),Xi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(If=en())),c&4&&wg(n);break;case 22:if(ye=o!==null&&o.memoizedState!==null,n.mode&1?(In=(se=In)||ye,Ci(i,n),In=se):Ci(i,n),Xi(n),c&8192){if(se=n.memoizedState!==null,(n.stateNode.isHidden=se)&&!ye&&(n.mode&1)!==0)for(We=n,ye=n.child;ye!==null;){for(Se=We=ye;We!==null;){switch(_e=We,ke=_e.child,_e.tag){case 0:case 11:case 14:case 15:_a(4,_e,_e.return);break;case 1:go(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=_e,o=_e.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){on(c,o,qe)}}break;case 5:go(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Cg(Se);continue}}ke!==null?(ke.return=_e,We=ke):Cg(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,se?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=Se.stateNode,z=Se.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=ue("display",w))}catch(qe){on(n,n.return,qe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=se?"":Se.memoizedProps}catch(qe){on(n,n.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ci(i,n),Xi(n),c&4&&wg(n);break;case 21:break;default:Ci(i,n),Xi(n)}}function Xi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(xg(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(me(d,""),c.flags&=-33);var m=Mg(n);Lf(n,m,d);break;case 3:case 4:var w=c.stateNode.containerInfo,O=Mg(n);bf(n,O,w);break;default:throw Error(t(161))}}catch(z){on(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function hw(n,i,o){We=n,Ag(n)}function Ag(n,i,o){for(var c=(n.mode&1)!==0;We!==null;){var d=We,m=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Jl;if(!w){var O=d.alternate,z=O!==null&&O.memoizedState!==null||In;O=Jl;var se=In;if(Jl=w,(In=z)&&!se)for(We=d;We!==null;)w=We,z=w.child,w.tag===22&&w.memoizedState!==null?Pg(d):z!==null?(z.return=w,We=z):Pg(d);for(;m!==null;)We=m,Ag(m),m=m.sibling;We=d,Jl=O,In=se}Rg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,We=m):Rg(n)}}function Rg(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||Ql(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!In)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ai(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&C0(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}C0(i,w,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var se=i.alternate;if(se!==null){var ye=se.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&Ko(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Pf(i)}catch(_e){on(i,i.return,_e)}}if(i===n){We=null;break}if(o=i.sibling,o!==null){o.return=i.return,We=o;break}We=i.return}}function Cg(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var o=i.sibling;if(o!==null){o.return=i.return,We=o;break}We=i.return}}function Pg(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ql(4,i)}catch(z){on(i,o,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){on(i,d,z)}}var m=i.return;try{Pf(i)}catch(z){on(i,m,z)}break;case 5:var w=i.return;try{Pf(i)}catch(z){on(i,w,z)}}}catch(z){on(i,i.return,z)}if(i===n){We=null;break}var O=i.sibling;if(O!==null){O.return=i.return,We=O;break}We=i.return}}var fw=Math.ceil,ec=L.ReactCurrentDispatcher,Df=L.ReactCurrentOwner,mi=L.ReactCurrentBatchConfig,Pt=0,yn=null,hn=null,An=0,oi=0,vo=Ur(0),gn=0,ya=null,ms=0,tc=0,Nf=0,Sa=null,Kn=null,If=0,_o=1/0,pr=null,nc=!1,Uf=null,Hr=null,ic=!1,Gr=null,rc=0,xa=0,Of=null,sc=-1,oc=0;function zn(){return(Pt&6)!==0?en():sc!==-1?sc:sc=en()}function Vr(n){return(n.mode&1)===0?1:(Pt&2)!==0&&An!==0?An&-An:$E.transition!==null?(oc===0&&(oc=Be()),oc):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Lm(n.type)),n)}function Pi(n,i,o,c){if(50<xa)throw xa=0,Of=null,Error(t(185));yt(n,o,c),((Pt&2)===0||n!==yn)&&(n===yn&&((Pt&2)===0&&(tc|=o),gn===4&&Wr(n,An)),Zn(n,c),o===1&&Pt===0&&(i.mode&1)===0&&(_o=en()+500,Il&&Fr()))}function Zn(n,i){var o=n.callbackNode;kt(n,i);var c=Wt(n,n===yn?An:0);if(c===0)o!==null&&gl(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&gl(o),i===1)n.tag===0?qE(Lg.bind(null,n)):g0(Lg.bind(null,n)),WE(function(){(Pt&6)===0&&Fr()}),o=null;else{switch(or(c)){case 1:o=Xo;break;case 4:o=A;break;case 16:o=X;break;case 536870912:o=ne;break;default:o=X}o=kg(o,bg.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function bg(n,i){if(sc=-1,oc=0,(Pt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(yo()&&n.callbackNode!==o)return null;var c=Wt(n,n===yn?An:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ac(n,c);else{i=c;var d=Pt;Pt|=2;var m=Ng();(yn!==n||An!==i)&&(pr=null,_o=en()+500,vs(n,i));do try{mw();break}catch(O){Dg(n,O)}while(!0);Qh(),ec.current=m,Pt=d,hn!==null?i=0:(yn=null,An=0,i=gn)}if(i!==0){if(i===2&&(d=un(n),d!==0&&(c=d,i=Ff(n,d))),i===1)throw o=ya,vs(n,0),Wr(n,c),Zn(n,en()),o;if(i===6)Wr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!dw(d)&&(i=ac(n,c),i===2&&(m=un(n),m!==0&&(c=m,i=Ff(n,m))),i===1))throw o=ya,vs(n,0),Wr(n,c),Zn(n,en()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:_s(n,Kn,pr);break;case 3:if(Wr(n,c),(c&130023424)===c&&(i=If+500-en(),10<i)){if(Wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){zn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Gh(_s.bind(null,n,Kn,pr),i);break}_s(n,Kn,pr);break;case 4:if(Wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-Ce(c);m=1<<w,w=i[w],w>d&&(d=w),c&=~m}if(c=d,c=en()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fw(c/1960))-c,10<c){n.timeoutHandle=Gh(_s.bind(null,n,Kn,pr),c);break}_s(n,Kn,pr);break;case 5:_s(n,Kn,pr);break;default:throw Error(t(329))}}}return Zn(n,en()),n.callbackNode===o?bg.bind(null,n):null}function Ff(n,i){var o=Sa;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=ac(n,i),n!==2&&(i=Kn,Kn=o,i!==null&&Bf(i)),n}function Bf(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function dw(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!wi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wr(n,i){for(i&=~Nf,i&=~tc,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ce(i),c=1<<o;n[o]=-1,i&=~c}}function Lg(n){if((Pt&6)!==0)throw Error(t(327));yo();var i=Wt(n,0);if((i&1)===0)return Zn(n,en()),null;var o=ac(n,i);if(n.tag!==0&&o===2){var c=un(n);c!==0&&(i=c,o=Ff(n,c))}if(o===1)throw o=ya,vs(n,0),Wr(n,i),Zn(n,en()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,Kn,pr),Zn(n,en()),null}function kf(n,i){var o=Pt;Pt|=1;try{return n(i)}finally{Pt=o,Pt===0&&(_o=en()+500,Il&&Fr())}}function gs(n){Gr!==null&&Gr.tag===0&&(Pt&6)===0&&yo();var i=Pt;Pt|=1;var o=mi.transition,c=xt;try{if(mi.transition=null,xt=1,n)return n()}finally{xt=c,mi.transition=o,Pt=i,(Pt&6)===0&&Fr()}}function zf(){oi=vo.current,$t(vo)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,VE(o)),hn!==null)for(o=hn.return;o!==null;){var c=o;switch(qh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Dl();break;case 3:po(),$t(jn),$t(Ln),lf();break;case 5:of(c);break;case 4:po();break;case 13:$t(tn);break;case 19:$t(tn);break;case 10:ef(c.type._context);break;case 22:case 23:zf()}o=o.return}if(yn=n,hn=n=Xr(n.current,null),An=oi=i,gn=0,ya=null,Nf=tc=ms=0,Kn=Sa=null,fs!==null){for(i=0;i<fs.length;i++)if(o=fs[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,m=o.pending;if(m!==null){var w=m.next;m.next=d,c.next=w}o.pending=c}fs=null}return n}function Dg(n,i){do{var o=hn;try{if(Qh(),Wl.current=ql,Xl){for(var c=nn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Xl=!1}if(ps=0,_n=mn=nn=null,da=!1,pa=0,Df.current=null,o===null||o.return===null){gn=1,ya=i,hn=null;break}e:{var m=n,w=o.return,O=o,z=i;if(i=An,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var se=z,ye=O,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=ig(w);if(ke!==null){ke.flags&=-257,rg(ke,w,O,m,i),ke.mode&1&&ng(m,se,i),i=ke,z=se;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(z),i.updateQueue=qe}else Xe.add(z);break e}else{if((i&1)===0){ng(m,se,i),Hf();break e}z=Error(t(426))}}else if(Jt&&O.mode&1){var an=ig(w);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),rg(an,w,O,m,i),Zh(mo(z,O));break e}}m=z=mo(z,O),gn!==4&&(gn=2),Sa===null?Sa=[m]:Sa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=eg(m,z,i);R0(m,J);break e;case 1:O=z;var W=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Hr===null||!Hr.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=tg(m,O,i);R0(m,Ee);break e}}m=m.return}while(m!==null)}Ug(o)}catch(Je){i=Je,hn===o&&o!==null&&(hn=o=o.return);continue}break}while(!0)}function Ng(){var n=ec.current;return ec.current=ql,n===null?ql:n}function Hf(){(gn===0||gn===3||gn===2)&&(gn=4),yn===null||(ms&268435455)===0&&(tc&268435455)===0||Wr(yn,An)}function ac(n,i){var o=Pt;Pt|=2;var c=Ng();(yn!==n||An!==i)&&(pr=null,vs(n,i));do try{pw();break}catch(d){Dg(n,d)}while(!0);if(Qh(),Pt=o,ec.current=c,hn!==null)throw Error(t(261));return yn=null,An=0,gn}function pw(){for(;hn!==null;)Ig(hn)}function mw(){for(;hn!==null&&!vh();)Ig(hn)}function Ig(n){var i=Bg(n.alternate,n,oi);n.memoizedProps=n.pendingProps,i===null?Ug(n):hn=i,Df.current=null}function Ug(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=aw(o,i,oi),o!==null){hn=o;return}}else{if(o=lw(o,i),o!==null){o.flags&=32767,hn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,hn=null;return}}if(i=i.sibling,i!==null){hn=i;return}hn=i=n}while(i!==null);gn===0&&(gn=5)}function _s(n,i,o){var c=xt,d=mi.transition;try{mi.transition=null,xt=1,gw(n,i,o,c)}finally{mi.transition=d,xt=c}return null}function gw(n,i,o,c){do yo();while(Gr!==null);if((Pt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Xn(n,m),n===yn&&(hn=yn=null,An=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ic||(ic=!0,kg(X,function(){return yo(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=mi.transition,mi.transition=null;var w=xt;xt=1;var O=Pt;Pt|=4,Df.current=null,uw(n,o),Tg(o,n),OE(zh),_l=!!kh,zh=kh=null,n.current=o,hw(o),_h(),Pt=O,xt=w,mi.transition=m}else n.current=o;if(ic&&(ic=!1,Gr=n,rc=d),m=n.pendingLanes,m===0&&(Hr=null),He(o.stateNode),Zn(n,en()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(nc)throw nc=!1,n=Uf,Uf=null,n;return(rc&1)!==0&&n.tag!==0&&yo(),m=n.pendingLanes,(m&1)!==0?n===Of?xa++:(xa=0,Of=n):xa=0,Fr(),null}function yo(){if(Gr!==null){var n=or(rc),i=mi.transition,o=xt;try{if(mi.transition=null,xt=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,rc=0,(Pt&6)!==0)throw Error(t(331));var d=Pt;for(Pt|=4,We=n.current;We!==null;){var m=We,w=m.child;if((We.flags&16)!==0){var O=m.deletions;if(O!==null){for(var z=0;z<O.length;z++){var se=O[z];for(We=se;We!==null;){var ye=We;switch(ye.tag){case 0:case 11:case 15:_a(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,We=Se;else for(;We!==null;){ye=We;var _e=ye.sibling,ke=ye.return;if(Sg(ye),ye===se){We=null;break}if(_e!==null){_e.return=ke,We=_e;break}We=ke}}}var Xe=m.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var an=qe.sibling;qe.sibling=null,qe=an}while(qe!==null)}}We=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,We=w;else e:for(;We!==null;){if(m=We,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:_a(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,We=J;break e}We=m.return}}var W=n.current;for(We=W;We!==null;){w=We;var ie=w.child;if((w.subtreeFlags&2064)!==0&&ie!==null)ie.return=w,We=ie;else e:for(w=W;We!==null;){if(O=We,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Ql(9,O)}}catch(Je){on(O,O.return,Je)}if(O===w){We=null;break e}var Ee=O.sibling;if(Ee!==null){Ee.return=O.return,We=Ee;break e}We=O.return}}if(Pt=d,Fr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{xt=o,mi.transition=i}}return!1}function Og(n,i,o){i=mo(o,i),i=eg(n,i,1),n=kr(n,i,1),i=zn(),n!==null&&(yt(n,1,i),Zn(n,i))}function on(n,i,o){if(n.tag===3)Og(n,n,o);else for(;i!==null;){if(i.tag===3){Og(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=mo(o,n),n=tg(i,n,1),i=kr(i,n,1),n=zn(),i!==null&&(yt(i,1,n),Zn(i,n));break}}i=i.return}}function vw(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=zn(),n.pingedLanes|=n.suspendedLanes&o,yn===n&&(An&o)===o&&(gn===4||gn===3&&(An&130023424)===An&&500>en()-If?vs(n,0):Nf|=o),Zn(n,i)}function Fg(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var o=zn();n=hr(n,i),n!==null&&(yt(n,i,o),Zn(n,o))}function _w(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Fg(n,o)}function yw(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Fg(n,o)}var Bg;Bg=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||jn.current)$n=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return $n=!1,ow(n,i,o);$n=(n.flags&131072)!==0}else $n=!1,Jt&&(i.flags&1048576)!==0&&v0(i,Ol,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Zl(n,i),n=i.pendingProps;var d=oo(i,Ln.current);fo(i,o),d=hf(null,i,c,n,d,o);var m=ff();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(c)?(m=!0,Nl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rf(i),d.updater=$l,i.stateNode=d,d._reactInternals=i,_f(i,c,n,o),i=Mf(null,i,c,!0,m,o)):(i.tag=0,Jt&&m&&jh(i),kn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Zl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=xw(c),n=Ai(c,n),d){case 0:i=xf(null,i,c,n,o);break e;case 1:i=ug(null,i,c,n,o);break e;case 11:i=sg(null,i,c,n,o);break e;case 14:i=og(null,i,c,Ai(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),xf(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),ug(n,i,c,d,o);case 3:e:{if(hg(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,A0(n,i),Gl(i,c,null,o);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=mo(Error(t(423)),i),i=fg(n,i,c,o,d);break e}else if(c!==d){d=mo(Error(t(424)),i),i=fg(n,i,c,o,d);break e}else for(si=Ir(i.stateNode.containerInfo.firstChild),ri=i,Jt=!0,Ti=null,o=w0(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(co(),c===d){i=dr(n,i,o);break e}kn(n,i,c,o)}i=i.child}return i;case 5:return P0(i),n===null&&Kh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Hh(c,d)?w=null:m!==null&&Hh(c,m)&&(i.flags|=32),cg(n,i),kn(n,i,w,o),i.child;case 6:return n===null&&Kh(i),null;case 13:return dg(n,i,o);case 4:return sf(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=uo(i,null,c,o):kn(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),sg(n,i,c,d,o);case 7:return kn(n,i,i.pendingProps,o),i.child;case 8:return kn(n,i,i.pendingProps.children,o),i.child;case 12:return kn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,Xt(kl,c._currentValue),c._currentValue=w,m!==null)if(wi(m.value,w)){if(m.children===d.children&&!jn.current){i=dr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){w=m.child;for(var z=O.firstContext;z!==null;){if(z.context===c){if(m.tag===1){z=fr(-1,o&-o),z.tag=2;var se=m.updateQueue;if(se!==null){se=se.shared;var ye=se.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),se.pending=z}}m.lanes|=o,z=m.alternate,z!==null&&(z.lanes|=o),tf(m.return,o,i),O.lanes|=o;break}z=z.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=o,O=w.alternate,O!==null&&(O.lanes|=o),tf(w,o,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}kn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,fo(i,o),d=di(d),c=c(d),i.flags|=1,kn(n,i,c,o),i.child;case 14:return c=i.type,d=Ai(c,i.pendingProps),d=Ai(c.type,d),og(n,i,c,d,o);case 15:return ag(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ai(c,d),Zl(n,i),i.tag=1,qn(c)?(n=!0,Nl(i)):n=!1,fo(i,o),J0(i,c,d),_f(i,c,d,o),Mf(null,i,c,!0,n,o);case 19:return mg(n,i,o);case 22:return lg(n,i,o)}throw Error(t(156,i.tag))};function kg(n,i){return ml(n,i)}function Sw(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,i,o,c){return new Sw(n,i,o,c)}function Gf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xw(n){if(typeof n=="function")return Gf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===Y)return 14}return 2}function Xr(n,i){var o=n.alternate;return o===null?(o=gi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function lc(n,i,o,c,d,m){var w=2;if(c=n,typeof n=="function")Gf(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case B:return ys(o.children,d,m,i);case T:w=8,d|=8;break;case U:return n=gi(12,o,i,d|2),n.elementType=U,n.lanes=m,n;case le:return n=gi(13,o,i,d),n.elementType=le,n.lanes=m,n;case ce:return n=gi(19,o,i,d),n.elementType=ce,n.lanes=m,n;case Z:return cc(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:w=10;break e;case k:w=9;break e;case $:w=11;break e;case Y:w=14;break e;case ee:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gi(w,o,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function ys(n,i,o,c){return n=gi(7,n,c,i),n.lanes=o,n}function cc(n,i,o,c){return n=gi(22,n,c,i),n.elementType=Z,n.lanes=o,n.stateNode={isHidden:!1},n}function Vf(n,i,o){return n=gi(6,n,null,i),n.lanes=o,n}function Wf(n,i,o){return i=gi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Mw(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xf(n,i,o,c,d,m,w,O,z){return n=new Mw(n,i,o,O,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=gi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},rf(m),n}function Ew(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function zg(n){if(!n)return Or;n=n._reactInternals;e:{if(zi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(qn(o))return p0(n,o,i)}return i}function Hg(n,i,o,c,d,m,w,O,z){return n=Xf(o,c,!0,n,d,m,w,O,z),n.context=zg(null),o=n.current,c=zn(),d=Vr(o),m=fr(c,d),m.callback=i??null,kr(o,m,d),n.current.lanes=d,yt(n,d,c),Zn(n,c),n}function uc(n,i,o,c){var d=i.current,m=zn(),w=Vr(d);return o=zg(o),i.context===null?i.context=o:i.pendingContext=o,i=fr(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=kr(d,i,w),n!==null&&(Pi(n,d,w,m),Hl(n,d,w)),w}function hc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Yf(n,i){Gg(n,i),(n=n.alternate)&&Gg(n,i)}function ww(){return null}var Vg=typeof reportError=="function"?reportError:function(n){console.error(n)};function jf(n){this._internalRoot=n}fc.prototype.render=jf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));uc(n,i,null,null)},fc.prototype.unmount=jf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){uc(null,n,null,null)}),i[ar]=null}};function fc(n){this._internalRoot=n}fc.prototype.unstable_scheduleHydration=function(n){if(n){var i=zt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Lr.length&&i!==0&&i<Lr[o].priority;o++);Lr.splice(o,0,n),o===0&&Pm(n)}};function qf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wg(){}function Tw(n,i,o,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var se=hc(w);m.call(se)}}var w=Hg(i,c,n,0,null,!1,!1,"",Wg);return n._reactRootContainer=w,n[ar]=w.current,sa(n.nodeType===8?n.parentNode:n),gs(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var O=c;c=function(){var se=hc(z);O.call(se)}}var z=Xf(n,0,!1,null,null,!1,!1,"",Wg);return n._reactRootContainer=z,n[ar]=z.current,sa(n.nodeType===8?n.parentNode:n),gs(function(){uc(i,z,o,c)}),z}function pc(n,i,o,c,d){var m=o._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var O=d;d=function(){var z=hc(w);O.call(z)}}uc(i,w,n,d)}else w=Tw(o,i,n,d,c);return hc(w)}Nt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=At(i.pendingLanes);o!==0&&(Yn(i,o|1),Zn(i,en()),(Pt&6)===0&&(_o=en()+500,Fr()))}break;case 13:gs(function(){var c=hr(n,1);if(c!==null){var d=zn();Pi(c,n,1,d)}}),Yf(n,1)}},jt=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var o=zn();Pi(i,n,134217728,o)}Yf(n,134217728)}},Mi=function(n){if(n.tag===13){var i=Vr(n),o=hr(n,i);if(o!==null){var c=zn();Pi(o,n,i,c)}Yf(n,i)}},zt=function(){return xt},Ei=function(n,i){var o=xt;try{return xt=n,i()}finally{xt=o}},at=function(n,i,o){switch(i){case"input":if(Vt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Ll(c);if(!d)throw Error(t(90));Ut(c),Vt(c,d)}}}break;case"textarea":De(n,o);break;case"select":i=o.value,i!=null&&Ft(n,!!o.multiple,i,!1)}},Pe=kf,ve=gs;var Aw={usingClientEntryPoint:!1,Events:[la,ro,Ll,he,Oe,kf]},Ma={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rw={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{te=mc.inject(Rw),be=mc}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw,Hn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(i))throw Error(t(200));return Ew(n,i,null,o)},Hn.createRoot=function(n,i){if(!qf(n))throw Error(t(299));var o=!1,c="",d=Vg;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Xf(n,1,!1,null,null,o,!1,c,d),n[ar]=i.current,sa(n.nodeType===8?n.parentNode:n),new jf(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Vo(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return gs(n)},Hn.hydrate=function(n,i,o){if(!dc(i))throw Error(t(200));return pc(null,n,i,!0,o)},Hn.hydrateRoot=function(n,i,o){if(!qf(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,m="",w=Vg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=Hg(i,null,n,1,o??null,d,!1,m,w),n[ar]=i.current,sa(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new fc(i)},Hn.render=function(n,i,o){if(!dc(i))throw Error(t(200));return pc(null,n,i,!1,o)},Hn.unmountComponentAtNode=function(n){if(!dc(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){pc(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},Hn.unstable_batchedUpdates=kf,Hn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!dc(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pc(n,i,o,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var td;function Zg(){if(td)return vc.exports;td=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vc.exports=Kg(),vc.exports}var nd;function Jg(){if(nd)return Ea;nd=1;var s=Zg();return Ea.createRoot=s.createRoot,Ea.hydrateRoot=s.hydrateRoot,Ea}var Qg=Jg();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="184",Ss={ROTATE:0,DOLLY:1,PAN:2},xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ev=0,id=1,tv=2,wa=1,nv=2,So=3,mr=0,Gn=1,Rt=2,Yi=0,Ms=1,rd=2,sd=3,od=4,iv=5,jr=100,rv=101,sv=102,ov=103,av=104,lv=200,cv=201,uv=202,hv=203,xc=204,Mc=205,fv=206,dv=207,pv=208,mv=209,gv=210,vv=211,_v=212,yv=213,Sv=214,Ec=0,wc=1,Tc=2,Es=3,Ac=4,Rc=5,Cc=6,Pc=7,ad=0,xv=1,Mv=2,bi=0,ld=1,cd=2,ud=3,hd=4,fd=5,dd=6,pd=7,md=300,qr=301,ws=302,bc=303,Lc=304,Ta=306,Aa=1e3,ji=1001,Dc=1002,xn=1003,Ev=1004,Ra=1005,Rn=1006,Nc=1007,$r=1008,Jn=1009,gd=1010,vd=1011,xo=1012,Ic=1013,Li=1014,Di=1015,qi=1016,Uc=1017,Oc=1018,Mo=1020,_d=35902,yd=35899,Sd=1021,xd=1022,vi=1023,$i=1026,Kr=1027,Md=1028,Fc=1029,Zr=1030,Bc=1031,kc=1033,Ca=33776,Pa=33777,ba=33778,La=33779,zc=35840,Hc=35841,Gc=35842,Vc=35843,Wc=36196,Xc=37492,Yc=37496,jc=37488,qc=37489,Da=37490,$c=37491,Kc=37808,Zc=37809,Jc=37810,Qc=37811,eu=37812,tu=37813,nu=37814,iu=37815,ru=37816,su=37817,ou=37818,au=37819,lu=37820,cu=37821,uu=36492,hu=36494,fu=36495,du=36283,pu=36284,Na=36285,mu=36286,wv=3200,gu=0,Tv=1,gr="",ai="srgb",Ia="srgb-linear",Ua="linear",It="srgb",Ts=7680,Ed=519,Av=512,Rv=513,Cv=514,vu=515,Pv=516,bv=517,_u=518,Lv=519,wd=35044,Td="300 es",Ni=2e3,Eo=2001;function Dv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nv(){const s=wo("canvas");return s.style.display="block",s}const Ad={};function Rd(...s){const e="THREE."+s.shift();console.log(e,...s)}function Cd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function et(...s){s=Cd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=Cd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function yu(...s){const e=s.join(" ");e in Ad||(Ad[e]=!0,et(...s))}function Iv(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Uv={[Ec]:wc,[Tc]:Cc,[Ac]:Pc,[Es]:Rc,[wc]:Ec,[Cc]:Tc,[Pc]:Ac,[Rc]:Es};class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pd=1234567;const To=Math.PI/180,Ao=180/Math.PI;function As(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function Su(s,e){return(s%e+e)%e}function Ov(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function Fv(s,e,t){return s!==e?(t-s)/(e-s):0}function Ro(s,e,t){return(1-t)*s+t*e}function Bv(s,e,t,r){return Ro(s,e,1-Math.exp(-t*r))}function kv(s,e=1){return e-Math.abs(Su(s,e*2)-e)}function zv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vv(s,e){return s+Math.random()*(e-s)}function Wv(s){return s*(.5-Math.random())}function Xv(s){s!==void 0&&(Pd=s);let e=Pd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yv(s){return s*To}function jv(s){return s*Ao}function qv(s){return(s&s-1)===0&&s!==0}function $v(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zv(s,e,t,r,a){const l=Math.cos,u=Math.sin,h=l(t/2),f=u(t/2),p=l((e+r)/2),g=u((e+r)/2),_=l((e-r)/2),v=u((e-r)/2),y=l((r-e)/2),E=u((r-e)/2);switch(a){case"XYX":s.set(h*g,f*_,f*v,h*p);break;case"YZY":s.set(f*v,h*g,f*_,h*p);break;case"ZXZ":s.set(f*_,f*v,h*g,h*p);break;case"XZX":s.set(h*g,f*E,f*y,h*p);break;case"YXY":s.set(f*y,h*g,f*E,h*p);break;case"ZYZ":s.set(f*E,f*y,h*g,h*p);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Rs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bd={DEG2RAD:To,RAD2DEG:Ao,generateUUID:As,clamp:dt,euclideanModulo:Su,mapLinear:Ov,inverseLerp:Fv,lerp:Ro,damp:Bv,pingpong:kv,smoothstep:zv,smootherstep:Hv,randInt:Gv,randFloat:Vv,randFloatSpread:Wv,seededRandom:Xv,degToRad:Yv,radToDeg:jv,isPowerOfTwo:qv,ceilPowerOfTwo:$v,floorPowerOfTwo:Kv,setQuaternionFromProperEuler:Zv,normalize:Un,denormalize:Rs},fh=class fh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;let Ze=fh;class _r{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,h){let f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3],v=l[u+0],y=l[u+1],E=l[u+2],C=l[u+3];if(_!==C||f!==v||p!==y||g!==E){let x=f*v+p*y+g*E+_*C;x<0&&(v=-v,y=-y,E=-E,C=-C,x=-x);let S=1-h;if(x<.9995){const P=Math.acos(x),N=Math.sin(P);S=Math.sin(S*P)/N,h=Math.sin(h*P)/N,f=f*S+v*h,p=p*S+y*h,g=g*S+E*h,_=_*S+C*h}else{f=f*S+v*h,p=p*S+y*h,g=g*S+E*h,_=_*S+C*h;const P=1/Math.sqrt(f*f+p*p+g*g+_*_);f*=P,p*=P,g*=P,_*=P}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,u){const h=r[a],f=r[a+1],p=r[a+2],g=r[a+3],_=l[u],v=l[u+1],y=l[u+2],E=l[u+3];return e[t]=h*E+g*_+f*y-p*v,e[t+1]=f*E+g*v+p*_-h*y,e[t+2]=p*E+g*y+h*v-f*_,e[t+3]=g*E-h*_-f*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,h=Math.cos,f=Math.sin,p=h(r/2),g=h(a/2),_=h(l/2),v=f(r/2),y=f(a/2),E=f(l/2);switch(u){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],h=t[5],f=t[9],p=t[2],g=t[6],_=t[10],v=r+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-f)*y,this._y=(l-p)*y,this._z=(u-a)*y}else if(r>h&&r>_){const y=2*Math.sqrt(1+r-h-_);this._w=(g-f)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(l+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-r-_);this._w=(l-p)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(f+g)/y}else{const y=2*Math.sqrt(1+_-r-h);this._w=(u-a)/y,this._x=(l+p)/y,this._y=(f+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,h=t._x,f=t._y,p=t._z,g=t._w;return this._x=r*g+u*h+a*p-l*f,this._y=a*g+u*f+l*h-r*p,this._z=l*g+u*p+r*f-a*h,this._w=u*g-r*h-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,a=-a,l=-l,u=-u,h=-h);let f=1-t;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);f=Math.sin(f*p)/g,t=Math.sin(t*p)/g,this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dh=class dh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ld.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,h=e.z,f=e.w,p=2*(u*a-h*r),g=2*(h*t-l*a),_=2*(l*r-u*t);return this.x=t+f*p+u*_-h*g,this.y=r+f*g+h*p-l*_,this.z=a+f*_+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,h=t.y,f=t.z;return this.x=a*f-l*h,this.y=l*u-r*f,this.z=r*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dh.prototype.isVector3=!0;let R=dh;const xu=new R,Ld=new _r,ph=class ph{constructor(e,t,r,a,l,u,h,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,f,p)}set(e,t,r,a,l,u,h,f,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=h,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[3],f=r[6],p=r[1],g=r[4],_=r[7],v=r[2],y=r[5],E=r[8],C=a[0],x=a[3],S=a[6],P=a[1],N=a[4],L=a[7],I=a[2],b=a[5],B=a[8];return l[0]=u*C+h*P+f*I,l[3]=u*x+h*N+f*b,l[6]=u*S+h*L+f*B,l[1]=p*C+g*P+_*I,l[4]=p*x+g*N+_*b,l[7]=p*S+g*L+_*B,l[2]=v*C+y*P+E*I,l[5]=v*x+y*N+E*b,l[8]=v*S+y*L+E*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8];return t*u*g-t*h*p-r*l*g+r*h*f+a*l*p-a*u*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8],_=g*u-h*p,v=h*f-g*l,y=p*l-u*f,E=t*_+r*v+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(a*p-g*r)*C,e[2]=(h*r-a*u)*C,e[3]=v*C,e[4]=(g*t-a*f)*C,e[5]=(a*l-h*t)*C,e[6]=y*C,e[7]=(r*f-p*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,h){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*h)+u+e,-a*p,a*f,-a*(-p*u+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Mu.makeScale(e,t)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ph.prototype.isMatrix3=!0;let ft=ph;const Mu=new ft,Dd=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jv(){const s={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(a.r=Ki(a.r),a.g=Ki(a.g),a.b=Ki(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(a.r=Cs(a.r),a.g=Cs(a.g),a.b=Cs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gr?Ua:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return yu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return yu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ia]:{primaries:e,whitePoint:r,transfer:Ua,toXYZ:Dd,fromXYZ:Nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:It,toXYZ:Dd,fromXYZ:Nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const Et=Jv();function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class Qv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ps===void 0&&(Ps=wo("canvas")),Ps.width=e.width,Ps.height=e.height;const a=Ps.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ps}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Ki(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ki(t[r]/255)*255):t[r]=Ki(t[r]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e_=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?l.push(wu(a[u].image)):l.push(wu(a[u]))}else l=wu(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function wu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let t_=0;const Tu=new R;class Mn extends vr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,r=ji,a=ji,l=Rn,u=$r,h=vi,f=Jn,p=Mn.DEFAULT_ANISOTROPY,g=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=As(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tu).x}get height(){return this.source.getSize(Tu).y}get depth(){return this.source.getSize(Tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null,Mn.DEFAULT_MAPPING=md,Mn.DEFAULT_ANISOTROPY=1;const mh=class mh{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],g=f[4],_=f[8],v=f[1],y=f[5],E=f[9],C=f[2],x=f[6],S=f[10];if(Math.abs(g-v)<.01&&Math.abs(_-C)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+C)<.1&&Math.abs(E+x)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,L=(y+1)/2,I=(S+1)/2,b=(g+v)/4,B=(_+C)/4,T=(E+x)/4;return N>L&&N>I?N<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(N),a=b/r,l=B/r):L>I?L<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(L),r=b/a,l=T/a):I<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(I),r=B/l,a=T/l),this.set(r,a,l,t),this}let P=Math.sqrt((x-E)*(x-E)+(_-C)*(_-C)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(_-C)/P,this.z=(v-g)/P,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};mh.prototype.isVector4=!0;let rn=mh;class n_ extends vr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Mn(a),u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Eu(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends n_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Id extends Mn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i_ extends Mn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dl=class dl{constructor(e,t,r,a,l,u,h,f,p,g,_,v,y,E,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,f,p,g,_,v,y,E,C,x)}set(e,t,r,a,l,u,h,f,p,g,_,v,y,E,C,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=a,S[1]=l,S[5]=u,S[9]=h,S[13]=f,S[2]=p,S[6]=g,S[10]=_,S[14]=v,S[3]=y,S[7]=E,S[11]=C,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),u=1/bs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),f=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*g,y=u*_,E=h*g,C=h*_;t[0]=f*g,t[4]=-f*_,t[8]=p,t[1]=y+E*p,t[5]=v-C*p,t[9]=-h*f,t[2]=C-v*p,t[6]=E+y*p,t[10]=u*f}else if(e.order==="YXZ"){const v=f*g,y=f*_,E=p*g,C=p*_;t[0]=v+C*h,t[4]=E*h-y,t[8]=u*p,t[1]=u*_,t[5]=u*g,t[9]=-h,t[2]=y*h-E,t[6]=C+v*h,t[10]=u*f}else if(e.order==="ZXY"){const v=f*g,y=f*_,E=p*g,C=p*_;t[0]=v-C*h,t[4]=-u*_,t[8]=E+y*h,t[1]=y+E*h,t[5]=u*g,t[9]=C-v*h,t[2]=-u*p,t[6]=h,t[10]=u*f}else if(e.order==="ZYX"){const v=u*g,y=u*_,E=h*g,C=h*_;t[0]=f*g,t[4]=E*p-y,t[8]=v*p+C,t[1]=f*_,t[5]=C*p+v,t[9]=y*p-E,t[2]=-p,t[6]=h*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,y=u*p,E=h*f,C=h*p;t[0]=f*g,t[4]=C-v*_,t[8]=E*_+y,t[1]=_,t[5]=u*g,t[9]=-h*g,t[2]=-p*g,t[6]=y*_+E,t[10]=v-C*_}else if(e.order==="XZY"){const v=u*f,y=u*p,E=h*f,C=h*p;t[0]=f*g,t[4]=-_,t[8]=p*g,t[1]=v*_+C,t[5]=u*g,t[9]=y*_-E,t[2]=E*_-y,t[6]=h*g,t[10]=C*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r_,e,s_)}lookAt(e,t,r){const a=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),yr.crossVectors(r,Qn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),yr.crossVectors(r,Qn)),yr.normalize(),Oa.crossVectors(Qn,yr),a[0]=yr.x,a[4]=Oa.x,a[8]=Qn.x,a[1]=yr.y,a[5]=Oa.y,a[9]=Qn.y,a[2]=yr.z,a[6]=Oa.z,a[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[4],f=r[8],p=r[12],g=r[1],_=r[5],v=r[9],y=r[13],E=r[2],C=r[6],x=r[10],S=r[14],P=r[3],N=r[7],L=r[11],I=r[15],b=a[0],B=a[4],T=a[8],U=a[12],G=a[1],k=a[5],$=a[9],le=a[13],ce=a[2],Y=a[6],ee=a[10],Z=a[14],q=a[3],ae=a[7],oe=a[11],F=a[15];return l[0]=u*b+h*G+f*ce+p*q,l[4]=u*B+h*k+f*Y+p*ae,l[8]=u*T+h*$+f*ee+p*oe,l[12]=u*U+h*le+f*Z+p*F,l[1]=g*b+_*G+v*ce+y*q,l[5]=g*B+_*k+v*Y+y*ae,l[9]=g*T+_*$+v*ee+y*oe,l[13]=g*U+_*le+v*Z+y*F,l[2]=E*b+C*G+x*ce+S*q,l[6]=E*B+C*k+x*Y+S*ae,l[10]=E*T+C*$+x*ee+S*oe,l[14]=E*U+C*le+x*Z+S*F,l[3]=P*b+N*G+L*ce+I*q,l[7]=P*B+N*k+L*Y+I*ae,l[11]=P*T+N*$+L*ee+I*oe,l[15]=P*U+N*le+L*Z+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],h=e[5],f=e[9],p=e[13],g=e[2],_=e[6],v=e[10],y=e[14],E=e[3],C=e[7],x=e[11],S=e[15],P=f*y-p*v,N=h*y-p*_,L=h*v-f*_,I=u*y-p*g,b=u*v-f*g,B=u*_-h*g;return t*(C*P-x*N+S*L)-r*(E*P-x*I+S*b)+a*(E*N-C*I+S*B)-l*(E*L-C*b+x*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8],_=e[9],v=e[10],y=e[11],E=e[12],C=e[13],x=e[14],S=e[15],P=t*h-r*u,N=t*f-a*u,L=t*p-l*u,I=r*f-a*h,b=r*p-l*h,B=a*p-l*f,T=g*C-_*E,U=g*x-v*E,G=g*S-y*E,k=_*x-v*C,$=_*S-y*C,le=v*S-y*x,ce=P*le-N*$+L*k+I*G-b*U+B*T;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ce;return e[0]=(h*le-f*$+p*k)*Y,e[1]=(a*$-r*le-l*k)*Y,e[2]=(C*B-x*b+S*I)*Y,e[3]=(v*b-_*B-y*I)*Y,e[4]=(f*G-u*le-p*U)*Y,e[5]=(t*le-a*G+l*U)*Y,e[6]=(x*L-E*B-S*N)*Y,e[7]=(g*B-v*L+y*N)*Y,e[8]=(u*$-h*G+p*T)*Y,e[9]=(r*G-t*$-l*T)*Y,e[10]=(E*b-C*L+S*P)*Y,e[11]=(_*L-g*b-y*P)*Y,e[12]=(h*U-u*k-f*T)*Y,e[13]=(t*k-r*U+a*T)*Y,e[14]=(C*N-E*I-x*P)*Y,e[15]=(g*I-_*N+v*P)*Y,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,h=e.y,f=e.z,p=l*u,g=l*h;return this.set(p*u+r,p*h-a*f,p*f+a*h,0,p*h+a*f,g*h+r,g*f-a*u,0,p*f-a*h,g*f+a*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,h=t._z,f=t._w,p=l+l,g=u+u,_=h+h,v=l*p,y=l*g,E=l*_,C=u*g,x=u*_,S=h*_,P=f*p,N=f*g,L=f*_,I=r.x,b=r.y,B=r.z;return a[0]=(1-(C+S))*I,a[1]=(y+L)*I,a[2]=(E-N)*I,a[3]=0,a[4]=(y-L)*b,a[5]=(1-(v+S))*b,a[6]=(x+P)*b,a[7]=0,a[8]=(E+N)*B,a[9]=(x-P)*B,a[10]=(1-(v+C))*B,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=bs.set(a[0],a[1],a[2]).length();const h=bs.set(a[4],a[5],a[6]).length(),f=bs.set(a[8],a[9],a[10]).length();l<0&&(u=-u),_i.copy(this);const p=1/u,g=1/h,_=1/f;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,t.setFromRotationMatrix(_i),r.x=u,r.y=h,r.z=f,this}makePerspective(e,t,r,a,l,u,h=Ni,f=!1){const p=this.elements,g=2*l/(t-e),_=2*l/(r-a),v=(t+e)/(t-e),y=(r+a)/(r-a);let E,C;if(f)E=l/(u-l),C=u*l/(u-l);else if(h===Ni)E=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(h===Eo)E=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,h=Ni,f=!1){const p=this.elements,g=2/(t-e),_=2/(r-a),v=-(t+e)/(t-e),y=-(r+a)/(r-a);let E,C;if(f)E=1/(u-l),C=u/(u-l);else if(h===Ni)E=-2/(u-l),C=-(u+l)/(u-l);else if(h===Eo)E=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};dl.prototype.isMatrix4=!0;let Qt=dl;const bs=new R,_i=new Qt,r_=new R(0,0,0),s_=new R(1,1,1),yr=new R,Oa=new R,Qn=new R,Ud=new Qt,Od=new _r;class Sr{constructor(e=0,t=0,r=0,a=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],h=a[8],f=a[1],p=a[5],g=a[9],_=a[2],v=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-dt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Od.setFromEuler(this),this.setFromQuaternion(Od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class Fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o_=0;const Bd=new R,Ls=new _r,Zi=new Qt,Fa=new R,Co=new R,a_=new R,l_=new _r,kd=new R(1,0,0),zd=new R(0,1,0),Hd=new R(0,0,1),Gd={type:"added"},c_={type:"removed"},Ds={type:"childadded",child:null},Au={type:"childremoved",child:null};class En extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new R,t=new Sr,r=new _r,a=new R(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ft}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(kd,e)}rotateY(e){return this.rotateOnAxis(zd,e)}rotateZ(e){return this.rotateOnAxis(Hd,e)}translateOnAxis(e,t){return Bd.copy(e).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kd,e)}translateY(e){return this.translateOnAxis(zd,e)}translateZ(e){return this.translateOnAxis(Hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Fa.copy(e):Fa.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Co,Fa,this.up):Zi.lookAt(Fa,Co,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c_),Au.child=e,this.dispatchEvent(Au),Au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,a_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,l_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(l(e.animations,f))}}if(t){const h=u(e.geometries),f=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),y=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(h){const f=[];for(const p in h){const g=h[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}En.DEFAULT_UP=new R(0,1,0),En.DEFAULT_MATRIX_AUTO_UPDATE=!0,En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jr extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class Ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const x=t.getJointPose(C,r),S=this._getHandJoint(p,C);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Jr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Cu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Et.workingColorSpace){if(e=Su(e,1),t=dt(t,0,1),r=dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Cu(u,l,e+1/3),this.g=Cu(u,l,e),this.b=Cu(u,l,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,t=ai){function r(l){l!==void 0&&parseFloat(l)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const r=Vd[e.toLowerCase()];return r!==void 0?this.setHex(r,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Et.workingToColorSpace(Pn.copy(this),e),Math.round(dt(Pn.r*255,0,255))*65536+Math.round(dt(Pn.g*255,0,255))*256+Math.round(dt(Pn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Pn.copy(this),t);const r=Pn.r,a=Pn.g,l=Pn.b,u=Math.max(r,a,l),h=Math.min(r,a,l);let f,p;const g=(h+u)/2;if(h===u)f=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case r:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-r)/_+2;break;case l:f=(r-a)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=ai){Et.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,a=Pn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Ba);const r=Ro(xr.h,Ba.h,t),a=Ro(xr.s,Ba.s,t),l=Ro(xr.l,Ba.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Tt;Tt.NAMES=Vd;class h_ extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new R,Ji=new R,Pu=new R,Qi=new R,Ns=new R,Is=new R,Wd=new R,bu=new R,Lu=new R,Du=new R,Nu=new rn,Iu=new rn,Uu=new rn;class Si{constructor(e=new R,t=new R,r=new R){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),yi.subVectors(e,t),a.cross(yi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){yi.subVectors(a,t),Ji.subVectors(r,t),Pu.subVectors(e,t);const u=yi.dot(yi),h=yi.dot(Ji),f=yi.dot(Pu),p=Ji.dot(Ji),g=Ji.dot(Pu),_=u*p-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,y=(p*f-h*g)*v,E=(u*g-h*f)*v;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,r,a,l,u,h,f){return this.getBarycoord(e,t,r,a,Qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Qi.x),f.addScaledVector(u,Qi.y),f.addScaledVector(h,Qi.z),f)}static getInterpolatedAttribute(e,t,r,a,l,u){return Nu.setScalar(0),Iu.setScalar(0),Uu.setScalar(0),Nu.fromBufferAttribute(e,t),Iu.fromBufferAttribute(e,r),Uu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Nu,l.x),u.addScaledVector(Iu,l.y),u.addScaledVector(Uu,l.z),u}static isFrontFacing(e,t,r,a){return yi.subVectors(r,t),Ji.subVectors(e,t),yi.cross(Ji).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),yi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,h;Ns.subVectors(a,r),Is.subVectors(l,r),bu.subVectors(e,r);const f=Ns.dot(bu),p=Is.dot(bu);if(f<=0&&p<=0)return t.copy(r);Lu.subVectors(e,a);const g=Ns.dot(Lu),_=Is.dot(Lu);if(g>=0&&_<=g)return t.copy(a);const v=f*_-g*p;if(v<=0&&f>=0&&g<=0)return u=f/(f-g),t.copy(r).addScaledVector(Ns,u);Du.subVectors(e,l);const y=Ns.dot(Du),E=Is.dot(Du);if(E>=0&&y<=E)return t.copy(l);const C=y*p-f*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),t.copy(r).addScaledVector(Is,h);const x=g*E-y*_;if(x<=0&&_-g>=0&&y-E>=0)return Wd.subVectors(l,a),h=(_-g)/(_-g+(y-E)),t.copy(a).addScaledVector(Wd,h);const S=1/(x+C+v);return u=C*S,h=v*S,t.copy(r).addScaledVector(Ns,u).addScaledVector(Is,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Po{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,xi):xi.fromBufferAttribute(l,u),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ka.copy(r.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),za.subVectors(this.max,bo),Us.subVectors(e.a,bo),Os.subVectors(e.b,bo),Fs.subVectors(e.c,bo),Mr.subVectors(Os,Us),Er.subVectors(Fs,Os),Qr.subVectors(Us,Fs);let t=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-Qr.z,Qr.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,Qr.z,0,-Qr.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-Qr.y,Qr.x,0];return!Ou(t,Us,Os,Fs,za)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,Us,Os,Fs,za))?!1:(Ha.crossVectors(Mr,Er),t=[Ha.x,Ha.y,Ha.z],Ou(t,Us,Os,Fs,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new R,new R,new R,new R,new R,new R,new R,new R],xi=new R,ka=new Po,Us=new R,Os=new R,Fs=new R,Mr=new R,Er=new R,Qr=new R,bo=new R,za=new R,Ha=new R,es=new R;function Ou(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){es.fromArray(s,l);const h=a.x*Math.abs(es.x)+a.y*Math.abs(es.y)+a.z*Math.abs(es.z),f=e.dot(es),p=t.dot(es),g=r.dot(es);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>h)return!1}return!0}const ln=new R,Ga=new Ze;let f_=0;class Ui extends vr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=wd,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Rs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Xd extends Ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Yd extends Ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Kt extends Ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}const d_=new Po,Lo=new R,Fu=new R;class Va{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):d_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const t=Lo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Lo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Fu)),this.expandByPoint(Lo.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p_=0;const li=new Qt,Bu=new En,Bs=new R,ei=new Po,Do=new Po,vn=new R;class On extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dv(e)?Yd:Xd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Kt(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ei.min,Do.min),ei.expandByPoint(vn),vn.addVectors(ei.max,Do.max),ei.expandByPoint(vn)):(ei.expandByPoint(Do.min),ei.expandByPoint(Do.max))}ei.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),f&&(Bs.fromBufferAttribute(e,p),vn.add(Bs)),a=Math.max(a,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],f=[];for(let T=0;T<r.count;T++)h[T]=new R,f[T]=new R;const p=new R,g=new R,_=new R,v=new Ze,y=new Ze,E=new Ze,C=new R,x=new R;function S(T,U,G){p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,G),v.fromBufferAttribute(l,T),y.fromBufferAttribute(l,U),E.fromBufferAttribute(l,G),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(k),x.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),h[T].add(C),h[U].add(C),h[G].add(C),f[T].add(x),f[U].add(x),f[G].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,U=P.length;T<U;++T){const G=P[T],k=G.start,$=G.count;for(let le=k,ce=k+$;le<ce;le+=3)S(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const N=new R,L=new R,I=new R,b=new R;function B(T){I.fromBufferAttribute(a,T),b.copy(I);const U=h[T];N.copy(U),N.sub(I.multiplyScalar(I.dot(U))).normalize(),L.crossVectors(b,U);const k=L.dot(f[T])<0?-1:1;u.setXYZW(T,N.x,N.y,N.z,k)}for(let T=0,U=P.length;T<U;++T){const G=P[T],k=G.start,$=G.count;for(let le=k,ce=k+$;le<ce;le+=3)B(e.getX(le+0)),B(e.getX(le+1)),B(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const a=new R,l=new R,u=new R,h=new R,f=new R,p=new R,g=new R,_=new R;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),C=e.getX(v+1),x=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,x),g.subVectors(u,l),_.subVectors(a,l),g.cross(_),h.fromBufferAttribute(r,E),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,x),h.add(g),f.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,y=t.count;v<y;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,l),_.subVectors(a,l),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,f){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(f.length*g);let y=0,E=0;for(let C=0,x=f.length;C<x;C++){h.isInterleavedBufferAttribute?y=f[C]*h.data.stride+h.offset:y=f[C]*g;for(let S=0;S<g;S++)v[E++]=p[y++]}return new Ui(v,g,_)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,r=this.index.array,a=this.attributes;for(const h in a){const f=a[h],p=e(f,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=e(v,r);f.push(y)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,f=u.length;h<f;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(a[f]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let m_=0;class ks extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Ms,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=Mc,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xc&&(r.blendSrc=this.blendSrc),this.blendDst!==Mc&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ed&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tr=new R,ku=new R,Wa=new R,wr=new R,zu=new R,Xa=new R,Hu=new R;class Gu{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){ku.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(ku);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Wa),h=wr.dot(this.direction),f=-wr.dot(Wa),p=wr.lengthSq(),g=Math.abs(1-u*u);let _,v,y,E;if(g>0)if(_=u*f-h,v=u*h-f,E=l*g,_>=0)if(v>=-E)if(v<=E){const C=1/g;_*=C,v*=C,y=_*(_+u*v+2*h)+v*(u*_+v+2*f)+p}else v=l,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*f)+p;else v=-l,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*f)+p;else v<=-E?(_=Math.max(0,-(-u*l+h)),v=_>0?-l:Math.min(Math.max(-l,-f),l),y=-_*_+v*(v+2*f)+p):v<=E?(_=0,v=Math.min(Math.max(-l,-f),l),y=v*(v+2*f)+p):(_=Math.max(0,-(u*l+h)),v=_>0?l:Math.min(Math.max(-l,-f),l),y=-_*_+v*(v+2*f)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+h)),y=-_*_+v*(v+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(ku).addScaledVector(Wa,v),y}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const r=tr.dot(this.direction),a=tr.dot(tr)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),h=r-u,f=r+u;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,h,f;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(h=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),r>f||h>a)||((h>r||r!==r)&&(r=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,r,a,l){zu.subVectors(t,e),Xa.subVectors(r,e),Hu.crossVectors(zu,Xa);let u=this.direction.dot(Hu),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;wr.subVectors(this.origin,e);const f=h*this.direction.dot(Xa.crossVectors(wr,Xa));if(f<0)return null;const p=h*this.direction.dot(zu.cross(wr));if(p<0||f+p>u)return null;const g=-h*wr.dot(Hu);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jd extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qd=new Qt,ts=new Gu,Ya=new Va,$d=new R,ja=new R,qa=new R,$a=new R,Vu=new R,Ka=new R,Kd=new R,Za=new R;class it extends En{constructor(e=new On,t=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){Ka.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=h[f],_=l[f];g!==0&&(Vu.fromBufferAttribute(_,e),u?Ka.addScaledVector(Vu,g):Ka.addScaledVector(Vu.sub(t),g))}t.add(Ka)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ya.copy(r.boundingSphere),Ya.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(Ya.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Ya,$d)===null||ts.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(qd.copy(l).invert(),ts.copy(e.ray).applyMatrix4(qd),!(r.boundingBox!==null&&ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,y=l.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,C=v.length;E<C;E++){const x=v[E],S=u[x.materialIndex],P=Math.max(x.start,y.start),N=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let L=P,I=N;L<I;L+=3){const b=h.getX(L),B=h.getX(L+1),T=h.getX(L+2);a=Ja(this,S,e,r,p,g,_,b,B,T),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let x=E,S=C;x<S;x+=3){const P=h.getX(x),N=h.getX(x+1),L=h.getX(x+2);a=Ja(this,u,e,r,p,g,_,P,N,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,C=v.length;E<C;E++){const x=v[E],S=u[x.materialIndex],P=Math.max(x.start,y.start),N=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=P,I=N;L<I;L+=3){const b=L,B=L+1,T=L+2;a=Ja(this,S,e,r,p,g,_,b,B,T),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,y.start),C=Math.min(f.count,y.start+y.count);for(let x=E,S=C;x<S;x+=3){const P=x,N=x+1,L=x+2;a=Ja(this,u,e,r,p,g,_,P,N,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function g_(s,e,t,r,a,l,u,h){let f;if(e.side===Gn?f=r.intersectTriangle(u,l,a,!0,h):f=r.intersectTriangle(a,l,u,e.side===mr,h),f===null)return null;Za.copy(h),Za.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Za);return p<t.near||p>t.far?null:{distance:p,point:Za.clone(),object:s}}function Ja(s,e,t,r,a,l,u,h,f,p){s.getVertexPosition(h,ja),s.getVertexPosition(f,qa),s.getVertexPosition(p,$a);const g=g_(s,e,t,r,ja,qa,$a,Kd);if(g){const _=new R;Si.getBarycoord(Kd,ja,qa,$a,_),a&&(g.uv=Si.getInterpolatedAttribute(a,h,f,p,_,new Ze)),l&&(g.uv1=Si.getInterpolatedAttribute(l,h,f,p,_,new Ze)),u&&(g.normal=Si.getInterpolatedAttribute(u,h,f,p,_,new R),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:f,c:p,normal:new R,materialIndex:0};Si.getNormal(ja,qa,$a,v.normal),g.face=v,g.barycoord=_}return g}class v_ extends Mn{constructor(e=null,t=1,r=1,a,l,u,h,f,p=xn,g=xn,_,v){super(null,u,h,f,p,g,a,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wu=new R,__=new R,y_=new ft;class Tr{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Wu.subVectors(r,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Wu),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||y_.getNormalMatrix(e),a=this.coplanarPoint(Wu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Va,S_=new Ze(.5,.5),Qa=new R;class Xu{constructor(e=new Tr,t=new Tr,r=new Tr,a=new Tr,l=new Tr,u=new Tr){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(a),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ni,r=!1){const a=this.planes,l=e.elements,u=l[0],h=l[1],f=l[2],p=l[3],g=l[4],_=l[5],v=l[6],y=l[7],E=l[8],C=l[9],x=l[10],S=l[11],P=l[12],N=l[13],L=l[14],I=l[15];if(a[0].setComponents(p-u,y-g,S-E,I-P).normalize(),a[1].setComponents(p+u,y+g,S+E,I+P).normalize(),a[2].setComponents(p+h,y+_,S+C,I+N).normalize(),a[3].setComponents(p-h,y-_,S-C,I-N).normalize(),r)a[4].setComponents(f,v,x,L).normalize(),a[5].setComponents(p-f,y-v,S-x,I-L).normalize();else if(a[4].setComponents(p-f,y-v,S-x,I-L).normalize(),t===Ni)a[5].setComponents(p+f,y+v,S+x,I+L).normalize();else if(t===Eo)a[5].setComponents(f,v,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=S_.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Qa.x=a.normal.x>0?e.max.x:e.min.x,Qa.y=a.normal.y>0?e.max.y:e.min.y,Qa.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zd extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new R,tl=new R,Jd=new Qt,No=new Gu,nl=new Va,Yu=new R,Qd=new R;class x_ extends En{constructor(e=new On,t=new Zd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)el.fromBufferAttribute(t,a-1),tl.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=el.distanceTo(tl);e.setAttribute("lineDistance",new Kt(r,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(a),nl.radius+=l,e.ray.intersectsSphere(nl)===!1)return;Jd.copy(a).invert(),No.copy(e.ray).applyMatrix4(Jd);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let C=y,x=E-1;C<x;C+=p){const S=g.getX(C),P=g.getX(C+1),N=il(this,e,No,f,S,P,C);N&&t.push(N)}if(this.isLineLoop){const C=g.getX(E-1),x=g.getX(y),S=il(this,e,No,f,C,x,E-1);S&&t.push(S)}}else{const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let C=y,x=E-1;C<x;C+=p){const S=il(this,e,No,f,C,C+1,C);S&&t.push(S)}if(this.isLineLoop){const C=il(this,e,No,f,E-1,y,E-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function il(s,e,t,r,a,l,u){const h=s.geometry.attributes.position;if(el.fromBufferAttribute(h,a),tl.fromBufferAttribute(h,l),t.distanceSqToSegment(el,tl,Yu,Qd)>r)return;Yu.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Yu);if(!(p<e.near||p>e.far))return{distance:p,point:Qd.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const ep=new R,tp=new R;class M_ extends x_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)ep.fromBufferAttribute(t,a),tp.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+ep.distanceTo(tp);e.setAttribute("lineDistance",new Kt(r,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class np extends Mn{constructor(e=[],t=qr,r,a,l,u,h,f,p,g){super(e,t,r,a,l,u,h,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zs extends Mn{constructor(e,t,r=Li,a,l,u,h=xn,f=xn,p,g=$i,_=1){if(g!==$i&&g!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,a,l,u,h,f,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class E_ extends zs{constructor(e,t=Li,r=qr,a,l,u=xn,h=xn,f,p=$i){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,r,a,l,u,h,f,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ip extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Io extends On{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const h=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,a,u,2),E("x","z","y",1,-1,e,r,-t,a,u,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(_,2));function E(C,x,S,P,N,L,I,b,B,T,U){const G=L/B,k=I/T,$=L/2,le=I/2,ce=b/2,Y=B+1,ee=T+1;let Z=0,q=0;const ae=new R;for(let oe=0;oe<ee;oe++){const F=oe*k-le;for(let Q=0;Q<Y;Q++){const Ie=Q*G-$;ae[C]=Ie*P,ae[x]=F*N,ae[S]=ce,p.push(ae.x,ae.y,ae.z),ae[C]=0,ae[x]=0,ae[S]=b>0?1:-1,g.push(ae.x,ae.y,ae.z),_.push(Q/B),_.push(1-oe/T),Z+=1}}for(let oe=0;oe<T;oe++)for(let F=0;F<B;F++){const Q=v+F+Y*oe,Ie=v+F+Y*(oe+1),ze=v+(F+1)+Y*(oe+1),Ae=v+(F+1)+Y*oe;f.push(Q,Ie,Ae),f.push(Ie,ze,Ae),q+=6}h.addGroup(y,q,U),y+=q,v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nr extends On{constructor(e=1,t=1,r=4,a=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:a,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),l=Math.max(1,Math.floor(l));const u=[],h=[],f=[],p=[],g=t/2,_=Math.PI/2*e,v=t,y=2*_+v,E=r*2+l,C=a+1,x=new R,S=new R;for(let P=0;P<=E;P++){let N=0,L=0,I=0,b=0;if(P<=r){const U=P/r,G=U*Math.PI/2;L=-g-e*Math.cos(G),I=e*Math.sin(G),b=-e*Math.cos(G),N=U*_}else if(P<=r+l){const U=(P-r)/l;L=-g+U*t,I=e,b=0,N=_+U*v}else{const U=(P-r-l)/r,G=U*Math.PI/2;L=g+e*Math.sin(G),I=e*Math.cos(G),b=e*Math.sin(G),N=_+v+U*_}const B=Math.max(0,Math.min(1,N/y));let T=0;P===0?T=.5/a:P===E&&(T=-.5/a);for(let U=0;U<=a;U++){const G=U/a,k=G*Math.PI*2,$=Math.sin(k),le=Math.cos(k);S.x=-I*le,S.y=L,S.z=I*$,h.push(S.x,S.y,S.z),x.set(-I*le,b,I*$),x.normalize(),f.push(x.x,x.y,x.z),p.push(G+T,B)}if(P>0){const U=(P-1)*C;for(let G=0;G<a;G++){const k=U+G,$=U+G+1,le=P*C+G,ce=P*C+G+1;u.push(k,$,le),u.push($,ce,le)}}}this.setIndex(u),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ir{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let h=0,f=l-1,p;for(;h<=f;)if(a=Math.floor(h+(f-h)/2),p=r[a]-u,p<0)h=a+1;else if(p>0)f=a-1;else{f=a;break}if(a=f,r[a]===u)return a/(l-1);const g=r[a],v=r[a+1]-g,y=(u-g)/v;return(a+y)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const u=this.getPoint(a),h=this.getPoint(l),f=t||(u.isVector2?new Ze:new R);return f.copy(h).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new R,a=[],l=[],u=[],h=new R,f=new Qt;for(let y=0;y<=e;y++){const E=y/e;a[y]=this.getTangentAt(E,new R)}l[0]=new R,u[0]=new R;let p=Number.MAX_VALUE;const g=Math.abs(a[0].x),_=Math.abs(a[0].y),v=Math.abs(a[0].z);g<=p&&(p=g,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),v<=p&&r.set(0,0,1),h.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],h),u[0].crossVectors(a[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),h.crossVectors(a[y-1],a[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(dt(a[y-1].dot(a[y]),-1,1));l[y].applyMatrix4(f.makeRotationAxis(h,E))}u[y].crossVectors(a[y],l[y])}if(t===!0){let y=Math.acos(dt(l[0].dot(l[e]),-1,1));y/=e,a[0].dot(h.crossVectors(l[0],l[e]))>0&&(y=-y);for(let E=1;E<=e;E++)l[E].applyMatrix4(f.makeRotationAxis(a[E],y*E)),u[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rp extends ir{constructor(e=0,t=0,r=1,a=1,l=0,u=Math.PI*2,h=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=h,this.aRotation=f}getPoint(e,t=new Ze){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(u?l=0:l=a),this.aClockwise===!0&&!u&&(l===a?l=-a:l=l-a);const h=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=f-this.aX,y=p-this.aY;f=v*g-y*_+this.aX,p=v*_+y*g+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class w_ extends rp{constructor(e,t,r,a,l,u){super(e,t,r,r,a,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function ju(){let s=0,e=0,t=0,r=0;function a(l,u,h,f){s=l,e=h,t=-3*l+3*u-2*h-f,r=2*l-2*u+h+f}return{initCatmullRom:function(l,u,h,f,p){a(u,h,p*(h-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,h,f,p,g,_){let v=(u-l)/p-(h-l)/(p+g)+(h-u)/g,y=(h-u)/g-(f-u)/(g+_)+(f-h)/_;v*=g,y*=g,a(u,h,v,y)},calc:function(l){const u=l*l,h=u*l;return s+e*l+t*u+r*h}}}const sp=new R,op=new R,qu=new ju,$u=new ju,Ku=new ju;class sn extends ir{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new R){const r=t,a=this.points,l=a.length,u=(l-(this.closed?0:1))*e;let h=Math.floor(u),f=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:f===0&&h===l-1&&(h=l-2,f=1);let p,g;this.closed||h>0?p=a[(h-1)%l]:(op.subVectors(a[0],a[1]).add(a[0]),p=op);const _=a[h%l],v=a[(h+1)%l];if(this.closed||h+2<l?g=a[(h+2)%l]:(sp.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=sp),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),y),C=Math.pow(_.distanceToSquared(v),y),x=Math.pow(v.distanceToSquared(g),y);C<1e-4&&(C=1),E<1e-4&&(E=C),x<1e-4&&(x=C),qu.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,E,C,x),$u.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,E,C,x),Ku.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,E,C,x)}else this.curveType==="catmullrom"&&(qu.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),$u.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),Ku.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return r.set(qu.calc(f),$u.calc(f),Ku.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new R().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ap(s,e,t,r,a){const l=(r-e)*.5,u=(a-t)*.5,h=s*s,f=s*h;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*h+l*s+t}function T_(s,e){const t=1-s;return t*t*e}function A_(s,e){return 2*(1-s)*s*e}function R_(s,e){return s*s*e}function Uo(s,e,t,r){return T_(s,e)+A_(s,t)+R_(s,r)}function C_(s,e){const t=1-s;return t*t*t*e}function P_(s,e){const t=1-s;return 3*t*t*s*e}function b_(s,e){return 3*(1-s)*s*s*e}function L_(s,e){return s*s*s*e}function Oo(s,e,t,r,a){return C_(s,e)+P_(s,t)+b_(s,r)+L_(s,a)}class D_ extends ir{constructor(e=new Ze,t=new Ze,r=new Ze,a=new Ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Ze){const r=t,a=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(Oo(e,a.x,l.x,u.x,h.x),Oo(e,a.y,l.y,u.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class N_ extends ir{constructor(e=new R,t=new R,r=new R,a=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new R){const r=t,a=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(Oo(e,a.x,l.x,u.x,h.x),Oo(e,a.y,l.y,u.y,h.y),Oo(e,a.z,l.z,u.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I_ extends ir{constructor(e=new Ze,t=new Ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ze){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U_ extends ir{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O_ extends ir{constructor(e=new Ze,t=new Ze,r=new Ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ze){const r=t,a=this.v0,l=this.v1,u=this.v2;return r.set(Uo(e,a.x,l.x,u.x),Uo(e,a.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lp extends ir{constructor(e=new R,t=new R,r=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new R){const r=t,a=this.v0,l=this.v1,u=this.v2;return r.set(Uo(e,a.x,l.x,u.x),Uo(e,a.y,l.y,u.y),Uo(e,a.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F_ extends ir{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ze){const r=t,a=this.points,l=(a.length-1)*e,u=Math.floor(l),h=l-u,f=a[u===0?u:u-1],p=a[u],g=a[u>a.length-2?a.length-1:u+1],_=a[u>a.length-3?a.length-1:u+2];return r.set(ap(h,f.x,p.x,g.x,_.x),ap(h,f.y,p.y,g.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Ze().fromArray(a))}return this}}var B_=Object.freeze({__proto__:null,ArcCurve:w_,CatmullRomCurve3:sn,CubicBezierCurve:D_,CubicBezierCurve3:N_,EllipseCurve:rp,LineCurve:I_,LineCurve3:U_,QuadraticBezierCurve:O_,QuadraticBezierCurve3:lp,SplineCurve:F_});class rl extends On{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,h=Math.floor(r),f=Math.floor(a),p=h+1,g=f+1,_=e/h,v=t/f,y=[],E=[],C=[],x=[];for(let S=0;S<g;S++){const P=S*v-u;for(let N=0;N<p;N++){const L=N*_-l;E.push(L,-P,0),C.push(0,0,1),x.push(N/h),x.push(1-S/f)}}for(let S=0;S<f;S++)for(let P=0;P<h;P++){const N=P+p*S,L=P+p*(S+1),I=P+1+p*(S+1),b=P+1+p*S;y.push(N,L,b),y.push(L,I,b)}this.setIndex(y),this.setAttribute("position",new Kt(E,3)),this.setAttribute("normal",new Kt(C,3)),this.setAttribute("uv",new Kt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vn extends On{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+h,Math.PI);let p=0;const g=[],_=new R,v=new R,y=[],E=[],C=[],x=[];for(let S=0;S<=r;S++){const P=[],N=S/r;let L=0;S===0&&u===0?L=.5/t:S===r&&f===Math.PI&&(L=-.5/t);for(let I=0;I<=t;I++){const b=I/t;_.x=-e*Math.cos(a+b*l)*Math.sin(u+N*h),_.y=e*Math.cos(u+N*h),_.z=e*Math.sin(a+b*l)*Math.sin(u+N*h),E.push(_.x,_.y,_.z),v.copy(_).normalize(),C.push(v.x,v.y,v.z),x.push(b+L,1-N),P.push(p++)}g.push(P)}for(let S=0;S<r;S++)for(let P=0;P<t;P++){const N=g[S][P+1],L=g[S][P],I=g[S+1][P],b=g[S+1][P+1];(S!==0||u>0)&&y.push(N,L,b),(S!==r-1||f<Math.PI)&&y.push(L,I,b)}this.setIndex(y),this.setAttribute("position",new Kt(E,3)),this.setAttribute("normal",new Kt(C,3)),this.setAttribute("uv",new Kt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class is extends On{constructor(e=new lp(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new R,f=new R,p=new Ze;let g=new R;const _=[],v=[],y=[],E=[];C(),this.setIndex(E),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(y,2));function C(){for(let N=0;N<t;N++)x(N);x(l===!1?t:0),P(),S()}function x(N){g=e.getPointAt(N/t,g);const L=u.normals[N],I=u.binormals[N];for(let b=0;b<=a;b++){const B=b/a*Math.PI*2,T=Math.sin(B),U=-Math.cos(B);f.x=U*L.x+T*I.x,f.y=U*L.y+T*I.y,f.z=U*L.z+T*I.z,f.normalize(),v.push(f.x,f.y,f.z),h.x=g.x+r*f.x,h.y=g.y+r*f.y,h.z=g.z+r*f.z,_.push(h.x,h.y,h.z)}}function S(){for(let N=1;N<=t;N++)for(let L=1;L<=a;L++){const I=(a+1)*(N-1)+(L-1),b=(a+1)*N+(L-1),B=(a+1)*N+L,T=(a+1)*(N-1)+L;E.push(I,b,T),E.push(b,B,T)}}function P(){for(let N=0;N<=t;N++)for(let L=0;L<=a;L++)p.x=N/t,p.y=L/a,y.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new is(new B_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Hs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(cp(a))a.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(cp(a[0])){const l=[];for(let u=0,h=a.length;u<h;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Fn(s){const e={};for(let t=0;t<s.length;t++){const r=Hs(s[t]);for(const a in r)e[a]=r[a]}return e}function cp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function k_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function up(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const z_={clone:Hs,merge:Fn};var H_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H_,this.fragmentShader=G_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=k_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class V_ extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pt extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W_ extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X_ extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zu={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(hp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!hp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function hp(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Y_{constructor(e,t,r){const a=this;let l=!1,u=0,h=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(g){h++,l===!1&&a.onStart!==void 0&&a.onStart(g,u,h),l=!0},this.itemEnd=function(g){u++,a.onProgress!==void 0&&a.onProgress(g,u,h),u===h&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const j_=new Y_;class Ju{constructor(e){this.manager=e!==void 0?e:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,l){r.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ju.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gs=new WeakMap;class q_ extends Ju{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Zu.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let _=Gs.get(u);_===void 0&&(_=[],Gs.set(u,_)),_.push({onLoad:t,onError:a})}return u}const h=wo("img");function f(){g(),t&&t(this);const _=Gs.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}Gs.delete(this),l.manager.itemEnd(e)}function p(_){g(),a&&a(_),Zu.remove(`image:${e}`);const v=Gs.get(this)||[];for(let y=0;y<v.length;y++){const E=v[y];E.onError&&E.onError(_)}Gs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){h.removeEventListener("load",f,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",f,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Zu.add(`image:${e}`,h),l.manager.itemStart(e),h.src=e,h}}class $_ extends Ju{constructor(e){super(e)}load(e,t,r,a){const l=new Mn,u=new q_(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){l.image=h,l.needsUpdate=!0,t!==void 0&&t(l)},r,a),l}}class fp extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Qu=new Qt,dp=new R,pp=new R;class K_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xu,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(dp),pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pp),t.updateMatrixWorld(),Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Eo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const sl=new R,ol=new _r,Fi=new R;class mp extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,ol,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,ol,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(sl,ol,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,ol,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new R,gp=new Ze,vp=new Ze;class ci extends mp{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,gp,vp),t.subVectors(vp,gp)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(To*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/f,t-=u.offsetY*r/p,a*=u.width/f,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class eh extends mp{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Z_ extends K_{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class th extends fp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new Z_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class J_ extends fp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vs=-90,Ws=1;class Q_ extends En{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(Vs,Ws,e,t);a.layers=this.layers,this.add(a);const l=new ci(Vs,Ws,e,t);l.layers=this.layers,this.add(l);const u=new ci(Vs,Ws,e,t);u.layers=this.layers,this.add(u);const h=new ci(Vs,Ws,e,t);h.layers=this.layers,this.add(h);const f=new ci(Vs,Ws,e,t);f.layers=this.layers,this.add(f);const p=new ci(Vs,Ws,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,h,f]=t;for(const p of t)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Eo)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,f,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,v,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class ey extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _p{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gh=class gh{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};gh.prototype.isMatrix2=!0;let yp=gh;class ty extends M_{constructor(e=10,t=10,r=4473924,a=8947848){r=new Tt(r),a=new Tt(a);const l=t/2,u=e/t,h=e/2,f=[],p=[];for(let v=0,y=0,E=-h;v<=t;v++,E+=u){f.push(-h,0,E,h,0,E),f.push(E,0,-h,E,0,h);const C=v===l?r:a;C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3}const g=new On;g.setAttribute("position",new Kt(f,3)),g.setAttribute("color",new Kt(p,3));const _=new Zd({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ny extends vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){et("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Sp(s,e,t,r){const a=iy(r);switch(t){case Sd:return s*e;case Md:return s*e/a.components*a.byteLength;case Fc:return s*e/a.components*a.byteLength;case Zr:return s*e*2/a.components*a.byteLength;case Bc:return s*e*2/a.components*a.byteLength;case xd:return s*e*3/a.components*a.byteLength;case vi:return s*e*4/a.components*a.byteLength;case kc:return s*e*4/a.components*a.byteLength;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ba:case La:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hc:case Vc:return Math.max(s,16)*Math.max(e,8)/4;case zc:case Gc:return Math.max(s,8)*Math.max(e,8)/2;case Wc:case Xc:case jc:case qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yc:case Da:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case eu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case iu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ru:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case su:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ou:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case au:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uu:case hu:case fu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case du:case pu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Na:case mu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iy(s){switch(s){case Jn:case gd:return{byteLength:1,components:1};case xo:case vd:case qi:return{byteLength:2,components:1};case Uc:case Oc:return{byteLength:2,components:4};case Li:case Ic:case Di:return{byteLength:4,components:1};case _d:case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}})),typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xp(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ry(s){const e=new WeakMap;function t(h,f){const p=h.array,g=h.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,f,p){const g=f.array,_=f.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],C=_[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++v,_[v]=C)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const C=_[y];s.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function u(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,f),p.version=h.version}}return{get:a,remove:l,update:u}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_y=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,by=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ES=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,US=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mt={alphahash_fragment:sy,alphahash_pars_fragment:oy,alphamap_fragment:ay,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:hy,aomap_pars_fragment:fy,batching_pars_vertex:dy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:vy,iridescence_fragment:_y,bumpmap_pars_fragment:yy,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:My,clipping_planes_vertex:Ey,color_fragment:wy,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:Ry,common:Cy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:by,displacementmap_pars_vertex:Ly,displacementmap_vertex:Dy,emissivemap_fragment:Ny,emissivemap_pars_fragment:Iy,colorspace_fragment:Uy,colorspace_pars_fragment:Oy,envmap_fragment:Fy,envmap_common_pars_fragment:By,envmap_pars_fragment:ky,envmap_pars_vertex:zy,envmap_physical_pars_fragment:Zy,envmap_vertex:Hy,fog_vertex:Gy,fog_pars_vertex:Vy,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:jy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:$y,lights_pars_begin:Ky,lights_toon_fragment:Jy,lights_toon_pars_fragment:Qy,lights_phong_fragment:eS,lights_phong_pars_fragment:tS,lights_physical_fragment:nS,lights_physical_pars_fragment:iS,lights_fragment_begin:rS,lights_fragment_maps:sS,lights_fragment_end:oS,lightprobes_pars_fragment:aS,logdepthbuf_fragment:lS,logdepthbuf_pars_fragment:cS,logdepthbuf_pars_vertex:uS,logdepthbuf_vertex:hS,map_fragment:fS,map_pars_fragment:dS,map_particle_fragment:pS,map_particle_pars_fragment:mS,metalnessmap_fragment:gS,metalnessmap_pars_fragment:vS,morphinstance_vertex:_S,morphcolor_vertex:yS,morphnormal_vertex:SS,morphtarget_pars_vertex:xS,morphtarget_vertex:MS,normal_fragment_begin:ES,normal_fragment_maps:wS,normal_pars_fragment:TS,normal_pars_vertex:AS,normal_vertex:RS,normalmap_pars_fragment:CS,clearcoat_normal_fragment_begin:PS,clearcoat_normal_fragment_maps:bS,clearcoat_pars_fragment:LS,iridescence_pars_fragment:DS,opaque_fragment:NS,packing:IS,premultiplied_alpha_fragment:US,project_vertex:OS,dithering_fragment:FS,dithering_pars_fragment:BS,roughnessmap_fragment:kS,roughnessmap_pars_fragment:zS,shadowmap_pars_fragment:HS,shadowmap_pars_vertex:GS,shadowmap_vertex:VS,shadowmask_pars_fragment:WS,skinbase_vertex:XS,skinning_pars_vertex:YS,skinning_vertex:jS,skinnormal_vertex:qS,specularmap_fragment:$S,specularmap_pars_fragment:KS,tonemapping_fragment:ZS,tonemapping_pars_fragment:JS,transmission_fragment:QS,transmission_pars_fragment:e1,uv_pars_fragment:t1,uv_pars_vertex:n1,uv_vertex:i1,worldpos_vertex:r1,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Ne={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Fn([Ne.common,Ne.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Fn([Ne.lights,Ne.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const al={r:0,b:0,g:0},s1=new Qt,Mp=new ft;Mp.set(-1,0,0,0,1,0,0,0,1);function o1(s,e,t,r,a,l){const u=new Tt(0);let h=a===!0?0:1,f,p,g=null,_=0,v=null;function y(P){let N=P.isScene===!0?P.background:null;if(N&&N.isTexture){const L=P.backgroundBlurriness>0;N=e.get(N,L)}return N}function E(P){let N=!1;const L=y(P);L===null?x(u,h):L&&L.isColor&&(x(L,1),N=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(P,N){const L=y(N);L&&(L.isCubeTexture||L.mapping===Ta)?(p===void 0&&(p=new it(new Io(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Hs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,b,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(s1.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Mp),p.material.toneMapped=Et.getTransfer(L.colorSpace)!==It,(g!==L||_!==L.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=L,_=L.version,v=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new it(new rl(2,2),new Oi({name:"BackgroundMaterial",uniforms:Hs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.toneMapped=Et.getTransfer(L.colorSpace)!==It,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,g=L,_=L.version,v=s.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function x(P,N){P.getRGB(al,up(s)),t.buffers.color.setClear(al.r,al.g,al.b,N,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,N=1){u.set(P),h=N,x(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,x(u,h)},render:E,addToRenderList:C,dispose:S}}function a1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let l=a,u=!1;function h(k,$,le,ce,Y){let ee=!1;const Z=_(k,ce,le,$);l!==Z&&(l=Z,p(l.object)),ee=y(k,ce,le,Y),ee&&E(k,ce,le,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,L(k,$,le,ce),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return s.createVertexArray()}function p(k){return s.bindVertexArray(k)}function g(k){return s.deleteVertexArray(k)}function _(k,$,le,ce){const Y=ce.wireframe===!0;let ee=r[$.id];ee===void 0&&(ee={},r[$.id]=ee);const Z=k.isInstancedMesh===!0?k.id:0;let q=ee[Z];q===void 0&&(q={},ee[Z]=q);let ae=q[le.id];ae===void 0&&(ae={},q[le.id]=ae);let oe=ae[Y];return oe===void 0&&(oe=v(f()),ae[Y]=oe),oe}function v(k){const $=[],le=[],ce=[];for(let Y=0;Y<t;Y++)$[Y]=0,le[Y]=0,ce[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:le,attributeDivisors:ce,object:k,attributes:{},index:null}}function y(k,$,le,ce){const Y=l.attributes,ee=$.attributes;let Z=0;const q=le.getAttributes();for(const ae in q)if(q[ae].location>=0){const F=Y[ae];let Q=ee[ae];if(Q===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;Z++}return l.attributesNum!==Z||l.index!==ce}function E(k,$,le,ce){const Y={},ee=$.attributes;let Z=0;const q=le.getAttributes();for(const ae in q)if(q[ae].location>=0){let F=ee[ae];F===void 0&&(ae==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),ae==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),Y[ae]=Q,Z++}l.attributes=Y,l.attributesNum=Z,l.index=ce}function C(){const k=l.newAttributes;for(let $=0,le=k.length;$<le;$++)k[$]=0}function x(k){S(k,0)}function S(k,$){const le=l.newAttributes,ce=l.enabledAttributes,Y=l.attributeDivisors;le[k]=1,ce[k]===0&&(s.enableVertexAttribArray(k),ce[k]=1),Y[k]!==$&&(s.vertexAttribDivisor(k,$),Y[k]=$)}function P(){const k=l.newAttributes,$=l.enabledAttributes;for(let le=0,ce=$.length;le<ce;le++)$[le]!==k[le]&&(s.disableVertexAttribArray(le),$[le]=0)}function N(k,$,le,ce,Y,ee,Z){Z===!0?s.vertexAttribIPointer(k,$,le,Y,ee):s.vertexAttribPointer(k,$,le,ce,Y,ee)}function L(k,$,le,ce){C();const Y=ce.attributes,ee=le.getAttributes(),Z=$.defaultAttributeValues;for(const q in ee){const ae=ee[q];if(ae.location>=0){let oe=Y[q];if(oe===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor)),oe!==void 0){const F=oe.normalized,Q=oe.itemSize,Ie=e.get(oe);if(Ie===void 0)continue;const ze=Ie.buffer,Ae=Ie.type,j=Ie.bytesPerElement,ge=Ae===s.INT||Ae===s.UNSIGNED_INT||oe.gpuType===Ic;if(oe.isInterleavedBufferAttribute){const de=oe.data,Te=de.stride,Ge=oe.offset;if(de.isInstancedInterleavedBuffer){for(let $e=0;$e<ae.locationSize;$e++)S(ae.location+$e,de.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let $e=0;$e<ae.locationSize;$e++)x(ae.location+$e);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let $e=0;$e<ae.locationSize;$e++)N(ae.location+$e,Q/ae.locationSize,Ae,F,Te*j,(Ge+Q/ae.locationSize*$e)*j,ge)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<ae.locationSize;de++)S(ae.location+de,oe.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<ae.locationSize;de++)x(ae.location+de);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let de=0;de<ae.locationSize;de++)N(ae.location+de,Q/ae.locationSize,Ae,F,Q*j,Q/ae.locationSize*de*j,ge)}}else if(Z!==void 0){const F=Z[q];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(ae.location,F);break;case 3:s.vertexAttrib3fv(ae.location,F);break;case 4:s.vertexAttrib4fv(ae.location,F);break;default:s.vertexAttrib1fv(ae.location,F)}}}}P()}function I(){U();for(const k in r){const $=r[k];for(const le in $){const ce=$[le];for(const Y in ce){const ee=ce[Y];for(const Z in ee)g(ee[Z].object),delete ee[Z];delete ce[Y]}}delete r[k]}}function b(k){if(r[k.id]===void 0)return;const $=r[k.id];for(const le in $){const ce=$[le];for(const Y in ce){const ee=ce[Y];for(const Z in ee)g(ee[Z].object),delete ee[Z];delete ce[Y]}}delete r[k.id]}function B(k){for(const $ in r){const le=r[$];for(const ce in le){const Y=le[ce];if(Y[k.id]===void 0)continue;const ee=Y[k.id];for(const Z in ee)g(ee[Z].object),delete ee[Z];delete Y[k.id]}}}function T(k){for(const $ in r){const le=r[$],ce=k.isInstancedMesh===!0?k.id:0,Y=le[ce];if(Y!==void 0){for(const ee in Y){const Z=Y[ee];for(const q in Z)g(Z[q].object),delete Z[q];delete Y[ee]}delete le[ce],Object.keys(le).length===0&&delete r[$]}}}function U(){G(),u=!0,l!==a&&(l=a,p(l.object))}function G(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:U,resetDefaultState:G,dispose:I,releaseStatesOfGeometry:b,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:x,disableUnusedAttributes:P}}function l1(s,e,t){let r;function a(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function u(f,p,g){g!==0&&(s.drawArraysInstanced(r,f,p,g),t.update(p,r,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,g);let v=0;for(let y=0;y<g;y++)v+=p[y];t.update(v,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function c1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(B){return!(B!==vi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Jn&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Di&&!T)}function f(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(et("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:L,maxSamples:I,samples:b}}function u1(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Tr,h=new ft,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||r!==0||a;return a=v,r=_.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!a||E===null||E.length===0||l&&!x)l?g(null):p();else{const P=l?0:r,N=P*4;let L=S.clippingState||null;f.value=L,L=g(E,v,N,y);for(let I=0;I!==N;++I)L[I]=t[I];S.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,y,E){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=f.value,E!==!0||x===null){const S=y+C*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(x===null||x.length<S)&&(x=new Float32Array(S));for(let N=0,L=y;N!==C;++N,L+=4)u.copy(_[N]).applyMatrix4(P,h),u.normal.toArray(x,L),x[L+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const Rr=4,Ep=[.125,.215,.35,.446,.526,.582],rs=20,h1=256,Fo=new eh,wp=new Tt;let nh=null,ih=0,rh=0,sh=!1;const f1=new R;class Tp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:h=f1}=l;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,a,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,rh),this._renderer.xr.enabled=sh,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:qi,format:vi,colorSpace:Ia,depthBuffer:!1},a=Ap(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d1(l)),this._blurMaterial=m1(l,e,t),this._ggxMaterial=p1(l,e,t)}return a}_compileMaterial(e){const t=new it(new On,e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,r,a,l){const f=new ci(90,1,t,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(wp),_.toneMapping=bi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new Io,new jd({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let S=!1;const P=e.background;P?P.isColor&&(x.color.copy(P),e.background=null,S=!0):(x.color.copy(wp),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(f.up.set(0,p[N],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+g[N],l.y,l.z)):L===1?(f.up.set(0,0,p[N]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+g[N],l.z)):(f.up.set(0,p[N],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+g[N]));const I=this._cubeSize;Xs(a,L*I,N>2?I:0,I,I),_.setRenderTarget(a),S&&_.render(C,f),_.render(e,f)}_.toneMapping=y,_.autoClear=v,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===qr||e.mapping===ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;Xs(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,Fo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,p=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,y=_*v,{_lodMax:E}=this,C=this._sizeLods[r],x=3*C*(r>E-Rr?r-E+Rr:0),S=4*(this._cubeSize-C);f.envMap.value=e.texture,f.roughness.value=y,f.mipInt.value=E-t,Xs(l,x,S,3*C,2*C),a.setRenderTarget(l),a.render(h,Fo),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=E-r,Xs(e,x,S,3*C,2*C),a.setRenderTarget(e),a.render(h,Fo)}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,h){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[a];_.material=p;const v=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*rs-1),C=l/E,x=isFinite(l)?1+Math.floor(g*C):rs;x>rs&&et(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${rs}`);const S=[];let P=0;for(let B=0;B<rs;++B){const T=B/C,U=Math.exp(-T*T/2);S.push(U),B===0?P+=U:B<x&&(P+=2*U)}for(let B=0;B<S.length;B++)S[B]=S[B]/P;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-r;const L=this._sizeLods[a],I=3*L*(a>N-Rr?a-N+Rr:0),b=4*(this._cubeSize-L);Xs(t,I,b,3*L,2*L),f.setRenderTarget(t),f.render(_,Fo)}}function d1(s){const e=[],t=[],r=[];let a=s;const l=s-Rr+1+Ep.length;for(let u=0;u<l;u++){const h=Math.pow(2,a);e.push(h);let f=1/h;u>s-Rr?f=Ep[u-s+Rr-1]:u===0&&(f=0),t.push(f);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,C=3,x=2,S=1,P=new Float32Array(C*E*y),N=new Float32Array(x*E*y),L=new Float32Array(S*E*y);for(let b=0;b<y;b++){const B=b%3*2/3-1,T=b>2?0:-1,U=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];P.set(U,C*E*b),N.set(v,x*E*b);const G=[b,b,b,b,b,b];L.set(G,S*E*b)}const I=new On;I.setAttribute("position",new Ui(P,C)),I.setAttribute("uv",new Ui(N,x)),I.setAttribute("faceIndex",new Ui(L,S)),r.push(new it(I,null)),a>Rr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Ap(s,e,t){const r=new Ii(s,e,t);return r.texture.mapping=Ta,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xs(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function p1(s,e,t){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function m1(s,e,t){const r=new Float32Array(rs),a=new R(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Rp(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Cp(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pp extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new np(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Io(5,5,5),l=new Oi({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Yi});l.uniforms.tEquirect.value=t;const u=new it(a,l),h=t.minFilter;return t.minFilter===$r&&(t.minFilter=Rn),new Q_(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function g1(s){let e=new WeakMap,t=new WeakMap,r=null;function a(v,y=!1){return v==null?null:y?u(v):l(v)}function l(v){if(v&&v.isTexture){const y=v.mapping;if(y===bc||y===Lc)if(e.has(v)){const E=e.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const C=new Pp(E.height);return C.fromEquirectangularTexture(s,v),e.set(v,C),v.addEventListener("dispose",p),h(C.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const y=v.mapping,E=y===bc||y===Lc,C=y===qr||y===ws;if(E||C){let x=t.get(v);const S=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Tp(s)),x=E?r.fromEquirectangular(v,x):r.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),x.texture;if(x!==void 0)return x.texture;{const P=v.image;return E&&P&&P.height>0||C&&P&&f(P)?(r===null&&(r=new Tp(s)),x=E?r.fromEquirectangular(v):r.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),v.addEventListener("dispose",g),x.texture):null}}}return v}function h(v,y){return y===bc?v.mapping=qr:y===Lc&&(v.mapping=ws),v}function f(v){let y=0;const E=6;for(let C=0;C<E;C++)v[C]!==void 0&&y++;return y===E}function p(v){const y=v.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function g(v){const y=v.target;y.removeEventListener("dispose",g);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function v1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&yu("WebGLRenderer: "+r+" extension not supported."),a}}}function _1(s,e,t,r){const a={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete a[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(_,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(y!==null){const P=y.array;C=y.version;for(let N=0,L=P.length;N<L;N+=3){const I=P[N+0],b=P[N+1],B=P[N+2];v.push(I,b,b,B,B,I)}}else{const P=E.array;C=E.version;for(let N=0,L=P.length/3-1;N<L;N+=3){const I=N+0,b=N+1,B=N+2;v.push(I,b,b,B,B,I)}}const x=new(E.count>=65535?Yd:Xd)(v,1);x.version=C;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function g(_){const v=l.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:f,getWireframeAttribute:g}}function y1(s,e,t){let r;function a(_){r=_}let l,u;function h(_){l=_.type,u=_.bytesPerElement}function f(_,v){s.drawElements(r,v,l,_*u),t.update(v,r,1)}function p(_,v,y){y!==0&&(s.drawElementsInstanced(r,v,l,_*u,y),t.update(v,r,y))}function g(_,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,_,0,y);let C=0;for(let x=0;x<y;x++)C+=v[x];t.update(C,r,1)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=g}function S1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function x1(s,e,t){const r=new WeakMap,a=new rn;function l(u,h,f){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let y=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",y)};v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let L=0;E===!0&&(L=1),C===!0&&(L=2),x===!0&&(L=3);let I=h.attributes.position.count*L,b=1;I>e.maxTextureSize&&(b=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*b*4*_),T=new Id(B,I,b,_);T.type=Di,T.needsUpdate=!0;const U=L*4;for(let G=0;G<_;G++){const k=S[G],$=P[G],le=N[G],ce=I*b*4*G;for(let Y=0;Y<k.count;Y++){const ee=Y*U;E===!0&&(a.fromBufferAttribute(k,Y),B[ce+ee+0]=a.x,B[ce+ee+1]=a.y,B[ce+ee+2]=a.z,B[ce+ee+3]=0),C===!0&&(a.fromBufferAttribute($,Y),B[ce+ee+4]=a.x,B[ce+ee+5]=a.y,B[ce+ee+6]=a.z,B[ce+ee+7]=0),x===!0&&(a.fromBufferAttribute(le,Y),B[ce+ee+8]=a.x,B[ce+ee+9]=a.y,B[ce+ee+10]=a.z,B[ce+ee+11]=le.itemSize===4?a.w:1)}}v={count:_,texture:T,size:new Ze(I,b)},r.set(h,v),h.addEventListener("dispose",y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let y=0;for(let C=0;C<p.length;C++)y+=p[C];const E=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function M1(s,e,t,r,a){let l=new WeakMap;function u(p){const g=a.render.frame,_=p.geometry,v=e.get(p,_);if(l.get(v)!==g&&(e.update(v),l.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==g&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return v}function h(){l=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:h}}const E1={[ld]:"LINEAR_TONE_MAPPING",[cd]:"REINHARD_TONE_MAPPING",[ud]:"CINEON_TONE_MAPPING",[hd]:"ACES_FILMIC_TONE_MAPPING",[dd]:"AGX_TONE_MAPPING",[pd]:"NEUTRAL_TONE_MAPPING",[fd]:"CUSTOM_TONE_MAPPING"};function w1(s,e,t,r,a){const l=new Ii(e,t,{type:s,depthBuffer:r,stencilBuffer:a,depthTexture:r?new zs(e,t):void 0}),u=new Ii(e,t,{type:qi,depthBuffer:!1,stencilBuffer:!1}),h=new On;h.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const f=new V_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new it(h,f),g=new eh(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,C=null,x=[],S=!1;this.setSize=function(P,N){l.setSize(P,N),u.setSize(P,N);for(let L=0;L<x.length;L++){const I=x[L];I.setSize&&I.setSize(P,N)}},this.setEffects=function(P){x=P,S=x.length>0&&x[0].isRenderPass===!0;const N=l.width,L=l.height;for(let I=0;I<x.length;I++){const b=x[I];b.setSize&&b.setSize(N,L)}},this.begin=function(P,N){if(y||P.toneMapping===bi&&x.length===0)return!1;if(C=N,N!==null){const L=N.width,I=N.height;(l.width!==L||l.height!==I)&&this.setSize(L,I)}return S===!1&&P.setRenderTarget(l),E=P.toneMapping,P.toneMapping=bi,!0},this.hasRenderPass=function(){return S},this.end=function(P,N){P.toneMapping=E,y=!0;let L=l,I=u;for(let b=0;b<x.length;b++){const B=x[b];if(B.enabled!==!1&&(B.render(P,I,L,N),B.needsSwap!==!1)){const T=L;L=I,I=T}}if(_!==P.outputColorSpace||v!==P.toneMapping){_=P.outputColorSpace,v=P.toneMapping,f.defines={},Et.getTransfer(_)===It&&(f.defines.SRGB_TRANSFER="");const b=E1[v];b&&(f.defines[b]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(C),P.render(p,g),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),h.dispose(),f.dispose()}}const bp=new Mn,oh=new zs(1,1),Lp=new Id,Dp=new i_,Np=new np,Ip=[],Up=[],Op=new Float32Array(16),Fp=new Float32Array(9),Bp=new Float32Array(4);function Ys(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Ip[a];if(l===void 0&&(l=new Float32Array(a),Ip[a]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function cl(s,e){let t=Up[e];t===void 0&&(t=new Int32Array(e),Up[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function T1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function A1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function R1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function C1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function P1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;Bp.set(r),s.uniformMatrix2fv(this.addr,!1,Bp),dn(t,r)}}function b1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;Fp.set(r),s.uniformMatrix3fv(this.addr,!1,Fp),dn(t,r)}}function L1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,r))return;Op.set(r),s.uniformMatrix4fv(this.addr,!1,Op),dn(t,r)}}function D1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function N1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function I1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function U1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function O1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function F1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function B1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function k1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function z1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(oh.compareFunction=t.isReversedDepthBuffer()?_u:vu,l=oh):l=bp,t.setTexture2D(e||l,a)}function H1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Dp,a)}function G1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Np,a)}function V1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Lp,a)}function W1(s){switch(s){case 5126:return T1;case 35664:return A1;case 35665:return R1;case 35666:return C1;case 35674:return P1;case 35675:return b1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return N1;case 35668:case 35672:return I1;case 35669:case 35673:return U1;case 5125:return O1;case 36294:return F1;case 36295:return B1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return V1}}function X1(s,e){s.uniform1fv(this.addr,e)}function Y1(s,e){const t=Ys(e,this.size,2);s.uniform2fv(this.addr,t)}function j1(s,e){const t=Ys(e,this.size,3);s.uniform3fv(this.addr,t)}function q1(s,e){const t=Ys(e,this.size,4);s.uniform4fv(this.addr,t)}function $1(s,e){const t=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function K1(s,e){const t=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Z1(s,e){const t=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function J1(s,e){s.uniform1iv(this.addr,e)}function Q1(s,e){s.uniform2iv(this.addr,e)}function ex(s,e){s.uniform3iv(this.addr,e)}function tx(s,e){s.uniform4iv(this.addr,e)}function nx(s,e){s.uniform1uiv(this.addr,e)}function ix(s,e){s.uniform2uiv(this.addr,e)}function rx(s,e){s.uniform3uiv(this.addr,e)}function sx(s,e){s.uniform4uiv(this.addr,e)}function ox(s,e,t){const r=this.cache,a=e.length,l=cl(t,a);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=oh:u=bp;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||u,l[h])}function ax(s,e,t){const r=this.cache,a=e.length,l=cl(t,a);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Dp,l[u])}function lx(s,e,t){const r=this.cache,a=e.length,l=cl(t,a);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Np,l[u])}function cx(s,e,t){const r=this.cache,a=e.length,l=cl(t,a);fn(r,l)||(s.uniform1iv(this.addr,l),dn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Lp,l[u])}function ux(s){switch(s){case 5126:return X1;case 35664:return Y1;case 35665:return j1;case 35666:return q1;case 35674:return $1;case 35675:return K1;case 35676:return Z1;case 5124:case 35670:return J1;case 35667:case 35671:return Q1;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return rx;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}class hx{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=W1(t.type)}}class fx{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ux(t.type)}}class dx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const h=a[l];h.setValue(e,t[h.id],r)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function kp(s,e){s.seq.push(e),s.map[e.id]=e}function px(s,e,t){const r=s.name,a=r.length;for(ah.lastIndex=0;;){const l=ah.exec(r),u=ah.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&u+2===a){kp(t,p===void 0?new hx(h,s,e):new fx(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new dx(h),kp(t,_)),t=_}}}class ul{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(t,u),f=e.getUniformLocation(t,h.name);px(h,f,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const h=t[l],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function zp(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const mx=37297;let gx=0;function vx(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const Hp=new ft;function _x(s){Et._getMatrix(Hp,Et.workingColorSpace,s);const e=`mat3( ${Hp.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case Ua:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Gp(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+vx(s.getShaderSource(e),h)}else return l}function yx(s,e){const t=_x(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Sx={[ld]:"Linear",[cd]:"Reinhard",[ud]:"Cineon",[hd]:"ACESFilmic",[dd]:"AgX",[pd]:"Neutral",[fd]:"Custom"};function xx(s,e){const t=Sx[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hl=new R;function Mx(){Et.getLuminanceCoefficients(hl);const s=hl.x.toFixed(4),e=hl.y.toFixed(4),t=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ex(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function wx(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Tx(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function Bo(s){return s!==""}function Vp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(s){return s.replace(Ax,Cx)}const Rx=new Map;function Cx(s,e){let t=mt[e];if(t===void 0){const r=Rx.get(e);if(r!==void 0)t=mt[r],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}const Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(s){return s.replace(Px,bx)}function bx(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Yp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Lx={[wa]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function Dx(s){return Lx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nx={[qr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function Ix(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Nx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ux={[ws]:"ENVMAP_MODE_REFRACTION"};function Ox(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ux[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fx={[ad]:"ENVMAP_BLENDING_MULTIPLY",[xv]:"ENVMAP_BLENDING_MIX",[Mv]:"ENVMAP_BLENDING_ADD"};function Bx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Fx[s.combine]||"ENVMAP_BLENDING_NONE"}function kx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function zx(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const f=Dx(t),p=Ix(t),g=Ox(t),_=Bx(t),v=kx(t),y=Ex(t),E=wx(l),C=a.createProgram();let x,S,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Bo).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Bo).join(`
`),S.length>0&&(S+=`
`)):(x=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),S=[Yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?mt.tonemapping_pars_fragment:"",t.toneMapping!==bi?xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),Mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),u=lh(u),u=Vp(u,t),u=Wp(u,t),h=lh(h),h=Vp(h,t),h=Wp(h,t),u=Xp(u),h=Xp(h),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=P+x+u,L=P+S+h,I=zp(a,a.VERTEX_SHADER,N),b=zp(a,a.FRAGMENT_SHADER,L);a.attachShader(C,I),a.attachShader(C,b),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function B(k){if(s.debug.checkShaderErrors){const $=a.getProgramInfoLog(C)||"",le=a.getShaderInfoLog(I)||"",ce=a.getShaderInfoLog(b)||"",Y=$.trim(),ee=le.trim(),Z=ce.trim();let q=!0,ae=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,I,b);else{const oe=Gp(a,I,"vertex"),F=Gp(a,b,"fragment");Ct("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Y+`
`+oe+`
`+F)}else Y!==""?et("WebGLProgram: Program Info Log:",Y):(ee===""||Z==="")&&(ae=!1);ae&&(k.diagnostics={runnable:q,programLog:Y,vertexShader:{log:ee,prefix:x},fragmentShader:{log:Z,prefix:S}})}a.deleteShader(I),a.deleteShader(b),T=new ul(a,C),U=Tx(a,C)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=a.getProgramParameter(C,mx)),G},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gx++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=b,this}let Hx=0;class Gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Vx(e),t.set(e,r)),r}}class Vx{constructor(e){this.id=Hx++,this.code=e,this.usedTimes=0}}function Wx(s){return s===Zr||s===Da||s===Na}function Xx(s,e,t,r,a,l){const u=new Fd,h=new Gx,f=new Set,p=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return f.add(T),T===0?"uv":`uv${T}`}function C(T,U,G,k,$,le){const ce=k.fog,Y=$.geometry,ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,q=e.get(T.envMap||ee,Z),ae=q&&q.mapping===Ta?q.image.height:null,oe=y[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&et("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const F=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=F!==void 0?F.length:0;let Ie=0;Y.morphAttributes.position!==void 0&&(Ie=1),Y.morphAttributes.normal!==void 0&&(Ie=2),Y.morphAttributes.color!==void 0&&(Ie=3);let ze,Ae,j,ge;if(oe){const lt=Bi[oe];ze=lt.vertexShader,Ae=lt.fragmentShader}else ze=T.vertexShader,Ae=T.fragmentShader,h.update(T),j=h.getVertexShaderID(T),ge=h.getFragmentShaderID(T);const de=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ge=$.isInstancedMesh===!0,$e=$.isBatchedMesh===!0,Ut=!!T.map,ct=!!T.matcap,wt=!!q,Dt=!!T.aoMap,st=!!T.lightMap,Vt=!!T.bumpMap,Ot=!!T.normalMap,cn=!!T.displacementMap,V=!!T.emissiveMap,Ft=!!T.metalnessMap,vt=!!T.roughnessMap,Bt=T.anisotropy>0,De=T.clearcoat>0,Yt=T.dispersion>0,D=T.iridescence>0,M=T.sheen>0,K=T.transmission>0,fe=Bt&&!!T.anisotropyMap,me=De&&!!T.clearcoatMap,xe=De&&!!T.clearcoatNormalMap,Le=De&&!!T.clearcoatRoughnessMap,ue=D&&!!T.iridescenceMap,pe=D&&!!T.iridescenceThicknessMap,Ue=M&&!!T.sheenColorMap,Fe=M&&!!T.sheenRoughnessMap,Re=!!T.specularMap,Me=!!T.specularColorMap,rt=!!T.specularIntensityMap,at=K&&!!T.transmissionMap,_t=K&&!!T.thicknessMap,H=!!T.gradientMap,we=!!T.alphaMap,he=T.alphaTest>0,Oe=!!T.alphaHash,Pe=!!T.extensions;let ve=bi;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Ye={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:ze,fragmentShader:Ae,defines:T.defines,customVertexShaderID:j,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:$e,batchingColor:$e&&$._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&$.instanceColor!==null,instancingMorph:Ge&&$.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ut,matcap:ct,envMap:wt,envMapMode:wt&&q.mapping,envMapCubeUVHeight:ae,aoMap:Dt,lightMap:st,bumpMap:Vt,normalMap:Ot,displacementMap:cn,emissiveMap:V,normalMapObjectSpace:Ot&&T.normalMapType===Tv,normalMapTangentSpace:Ot&&T.normalMapType===gu,packedNormalMap:Ot&&T.normalMapType===gu&&Wx(T.normalMap.format),metalnessMap:Ft,roughnessMap:vt,anisotropy:Bt,anisotropyMap:fe,clearcoat:De,clearcoatMap:me,clearcoatNormalMap:xe,clearcoatRoughnessMap:Le,dispersion:Yt,iridescence:D,iridescenceMap:ue,iridescenceThicknessMap:pe,sheen:M,sheenColorMap:Ue,sheenRoughnessMap:Fe,specularMap:Re,specularColorMap:Me,specularIntensityMap:rt,transmission:K,transmissionMap:at,thicknessMap:_t,gradientMap:H,opaque:T.transparent===!1&&T.blending===Ms&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:he,alphaHash:Oe,combine:T.combine,mapUv:Ut&&E(T.map.channel),aoMapUv:Dt&&E(T.aoMap.channel),lightMapUv:st&&E(T.lightMap.channel),bumpMapUv:Vt&&E(T.bumpMap.channel),normalMapUv:Ot&&E(T.normalMap.channel),displacementMapUv:cn&&E(T.displacementMap.channel),emissiveMapUv:V&&E(T.emissiveMap.channel),metalnessMapUv:Ft&&E(T.metalnessMap.channel),roughnessMapUv:vt&&E(T.roughnessMap.channel),anisotropyMapUv:fe&&E(T.anisotropyMap.channel),clearcoatMapUv:me&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:xe&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(T.sheenRoughnessMap.channel),specularMapUv:Re&&E(T.specularMap.channel),specularColorMapUv:Me&&E(T.specularColorMap.channel),specularIntensityMapUv:rt&&E(T.specularIntensityMap.channel),transmissionMapUv:at&&E(T.transmissionMap.channel),thicknessMapUv:_t&&E(T.thicknessMap.channel),alphaMapUv:we&&E(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ot||Bt),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Y.attributes.uv&&(Ut||we),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&Ot===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:$.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ie,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:Ut&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:V&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Rt,flipSided:T.side===Gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=f.has(1),Ye.vertexUv2s=f.has(2),Ye.vertexUv3s=f.has(3),f.clear(),Ye}function x(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)U.push(G),U.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(S(U,T),P(U,T),U.push(s.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function P(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function N(T){const U=y[T.type];let G;if(U){const k=Bi[U];G=z_.clone(k.uniforms)}else G=T.uniforms;return G}function L(T,U){let G=g.get(U);return G!==void 0?++G.usedTimes:(G=new zx(s,U,T,a),p.push(G),g.set(U,G)),G}function I(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),g.delete(T.cacheKey),T.destroy()}}function b(T){h.remove(T)}function B(){h.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:N,acquireProgram:L,releaseProgram:I,releaseShaderCache:b,programs:p,dispose:B}}function Yx(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function a(u,h,f){s.get(u)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function jx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function jp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qp(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,E,C,x,S){let P=s[e];return P===void 0?(P={id:v.id,object:v,geometry:y,material:E,materialVariant:u(v),groupOrder:C,renderOrder:v.renderOrder,z:x,group:S},s[e]=P):(P.id=v.id,P.object=v,P.geometry=y,P.material=E,P.materialVariant=u(v),P.groupOrder=C,P.renderOrder=v.renderOrder,P.z=x,P.group=S),e++,P}function f(v,y,E,C,x,S){const P=h(v,y,E,C,x,S);E.transmission>0?r.push(P):E.transparent===!0?a.push(P):t.push(P)}function p(v,y,E,C,x,S){const P=h(v,y,E,C,x,S);E.transmission>0?r.unshift(P):E.transparent===!0?a.unshift(P):t.unshift(P)}function g(v,y){t.length>1&&t.sort(v||jx),r.length>1&&r.sort(y||jp),a.length>1&&a.sort(y||jp)}function _(){for(let v=e,y=s.length;v<y;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:_,sort:g}}function qx(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new qp,s.set(r,[u])):a>=l.length?(u=new qp,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function $x(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Tt};break;case"SpotLight":t={position:new R,direction:new R,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Kx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Zx=0;function Jx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qx(s){const e=new $x,t=Kx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new R);const a=new R,l=new Qt,u=new Qt;function h(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,E=0,C=0,x=0,S=0,P=0,N=0,L=0,I=0,b=0,B=0;p.sort(Jx);for(let U=0,G=p.length;U<G;U++){const k=p[U],$=k.color,le=k.intensity,ce=k.distance;let Y=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Zr?Y=k.shadow.map.texture:Y=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=$.r*le,_+=$.g*le,v+=$.b*le;else if(k.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(k.sh.coefficients[ee],le);B++}else if(k.isDirectionalLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,q=t.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=k.shadow.matrix,P++}r.directional[y]=ee,y++}else if(k.isSpotLight){const ee=e.get(k);ee.position.setFromMatrixPosition(k.matrixWorld),ee.color.copy($).multiplyScalar(le),ee.distance=ce,ee.coneCos=Math.cos(k.angle),ee.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ee.decay=k.decay,r.spot[C]=ee;const Z=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,Z.updateMatrices(k),k.castShadow&&b++),r.spotLightMatrix[C]=Z.matrix,k.castShadow){const q=t.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=Y,L++}C++}else if(k.isRectAreaLight){const ee=e.get(k);ee.color.copy($).multiplyScalar(le),ee.halfWidth.set(k.width*.5,0,0),ee.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=ee,x++}else if(k.isPointLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),ee.distance=k.distance,ee.decay=k.decay,k.castShadow){const Z=k.shadow,q=t.get(k);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=Y,r.pointShadowMatrix[E]=k.shadow.matrix,N++}r.point[E]=ee,E++}else if(k.isHemisphereLight){const ee=e.get(k);ee.skyColor.copy(k.color).multiplyScalar(le),ee.groundColor.copy(k.groundColor).multiplyScalar(le),r.hemi[S]=ee,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==y||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==x||T.hemiLength!==S||T.numDirectionalShadows!==P||T.numPointShadows!==N||T.numSpotShadows!==L||T.numSpotMaps!==I||T.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=x,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+I-b,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=B,T.directionalLength=y,T.pointLength=E,T.spotLength=C,T.rectAreaLength=x,T.hemiLength=S,T.numDirectionalShadows=P,T.numPointShadows=N,T.numSpotShadows=L,T.numSpotMaps=I,T.numLightProbes=B,r.version=Zx++)}function f(p,g){let _=0,v=0,y=0,E=0,C=0;const x=g.matrixWorldInverse;for(let S=0,P=p.length;S<P;S++){const N=p[S];if(N.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(x),_++}else if(N.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(x),y++}else if(N.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),u.identity(),l.copy(N.matrixWorld),l.premultiply(x),u.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),v++}else if(N.isHemisphereLight){const L=r.hemi[C];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(x),C++}}}return{setup:h,setupView:f,state:r}}function $p(s){const e=new Qx(s),t=[],r=[],a=[];function l(v){_.camera=v,t.length=0,r.length=0,a.length=0}function u(v){t.push(v)}function h(v){r.push(v)}function f(v){a.push(v)}function p(){e.setup(t)}function g(v){e.setupView(t,v)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:f}}function eM(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let h;return u===void 0?(h=new $p(s),e.set(a,[h])):l>=u.length?(h=new $p(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],rM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Kp=new Qt,ko=new R,ch=new R;function sM(s,e,t){let r=new Xu;const a=new Ze,l=new Ze,u=new rn,h=new W_,f=new X_,p={},g=t.maxTextureSize,_={[mr]:Gn,[Gn]:mr,[Rt]:Rt},v=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new On;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new it(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let S=this.type;this.render=function(b,B,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===nv&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wa);const U=s.getRenderTarget(),G=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Yi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const le=S!==this.type;le&&B.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(Y=>Y.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,Y=b.length;ce<Y;ce++){const ee=b[ce],Z=ee.shadow;if(Z===void 0){et("WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;a.copy(Z.mapSize);const q=Z.getFrameExtents();a.multiply(q),l.copy(Z.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/q.x),a.x=l.x*q.x,Z.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/q.y),a.y=l.y*q.y,Z.mapSize.y=l.y));const ae=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=ae,Z.map===null||le===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===So){if(ee.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ii(a.x,a.y,{format:Zr,type:qi,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),Z.map.texture.name=ee.name+".shadowMap",Z.map.depthTexture=new zs(a.x,a.y,Di),Z.map.depthTexture.name=ee.name+".shadowMapDepth",Z.map.depthTexture.format=$i,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn}else ee.isPointLight?(Z.map=new Pp(a.x),Z.map.depthTexture=new E_(a.x,Li)):(Z.map=new Ii(a.x,a.y),Z.map.depthTexture=new zs(a.x,a.y,Li)),Z.map.depthTexture.name=ee.name+".shadowMap",Z.map.depthTexture.format=$i,this.type===wa?(Z.map.depthTexture.compareFunction=ae?_u:vu,Z.map.depthTexture.minFilter=Rn,Z.map.depthTexture.magFilter=Rn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=xn,Z.map.depthTexture.magFilter=xn);Z.camera.updateProjectionMatrix()}const oe=Z.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<oe;F++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,F),s.clear();else{F===0&&(s.setRenderTarget(Z.map),s.clear());const Q=Z.getViewport(F);u.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),$.viewport(u)}if(ee.isPointLight){const Q=Z.camera,Ie=Z.matrix,ze=ee.distance||Q.far;ze!==Q.far&&(Q.far=ze,Q.updateProjectionMatrix()),ko.setFromMatrixPosition(ee.matrixWorld),Q.position.copy(ko),ch.copy(Q.position),ch.add(iM[F]),Q.up.copy(rM[F]),Q.lookAt(ch),Q.updateMatrixWorld(),Ie.makeTranslation(-ko.x,-ko.y,-ko.z),Kp.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Kp,Q.coordinateSystem,Q.reversedDepth)}else Z.updateMatrices(ee);r=Z.getFrustum(),L(B,T,Z.camera,ee,this.type)}Z.isPointLightShadow!==!0&&this.type===So&&P(Z,T),Z.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(U,G,k)};function P(b,B){const T=e.update(C);v.defines.VSM_SAMPLES!==b.blurSamples&&(v.defines.VSM_SAMPLES=b.blurSamples,y.defines.VSM_SAMPLES=b.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ii(a.x,a.y,{format:Zr,type:qi})),v.uniforms.shadow_pass.value=b.map.depthTexture,v.uniforms.resolution.value=b.mapSize,v.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(B,null,T,v,C,null),y.uniforms.shadow_pass.value=b.mapPass.texture,y.uniforms.resolution.value=b.mapSize,y.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(B,null,T,y,C,null)}function N(b,B,T,U){let G=null;const k=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(k!==void 0)G=k;else if(G=T.isPointLight===!0?f:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=G.uuid,le=B.uuid;let ce=p[$];ce===void 0&&(ce={},p[$]=ce);let Y=ce[le];Y===void 0&&(Y=G.clone(),ce[le]=Y,B.addEventListener("dispose",I)),G=Y}if(G.visible=B.visible,G.wireframe=B.wireframe,U===So?G.side=B.shadowSide!==null?B.shadowSide:B.side:G.side=B.shadowSide!==null?B.shadowSide:_[B.side],G.alphaMap=B.alphaMap,G.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,G.map=B.map,G.clipShadows=B.clipShadows,G.clippingPlanes=B.clippingPlanes,G.clipIntersection=B.clipIntersection,G.displacementMap=B.displacementMap,G.displacementScale=B.displacementScale,G.displacementBias=B.displacementBias,G.wireframeLinewidth=B.wireframeLinewidth,G.linewidth=B.linewidth,T.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const $=s.properties.get(G);$.light=T}return G}function L(b,B,T,U,G){if(b.visible===!1)return;if(b.layers.test(B.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&G===So)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const le=e.update(b),ce=b.material;if(Array.isArray(ce)){const Y=le.groups;for(let ee=0,Z=Y.length;ee<Z;ee++){const q=Y[ee],ae=ce[q.materialIndex];if(ae&&ae.visible){const oe=N(b,ae,U,G);b.onBeforeShadow(s,b,B,T,le,oe,q),s.renderBufferDirect(T,null,le,oe,b,q),b.onAfterShadow(s,b,B,T,le,oe,q)}}}else if(ce.visible){const Y=N(b,ce,U,G);b.onBeforeShadow(s,b,B,T,le,Y,null),s.renderBufferDirect(T,null,le,Y,b,null),b.onAfterShadow(s,b,B,T,le,Y,null)}}const $=b.children;for(let le=0,ce=$.length;le<ce;le++)L($[le],B,T,U,G)}function I(b){b.target.removeEventListener("dispose",I);for(const T in p){const U=p[T],G=b.target.uuid;G in U&&(U[G].dispose(),delete U[G])}}}function oM(s,e){function t(){let H=!1;const we=new rn;let he=null;const Oe=new rn(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!H&&(s.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,ve,Ye,lt,Gt){Gt===!0&&(Pe*=lt,ve*=lt,Ye*=lt),we.set(Pe,ve,Ye,lt),Oe.equals(we)===!1&&(s.clearColor(Pe,ve,Ye,lt),Oe.copy(we))},reset:function(){H=!1,he=null,Oe.set(-1,0,0,0)}}}function r(){let H=!1,we=!1,he=null,Oe=null,Pe=null;return{setReversed:function(ve){if(we!==ve){const Ye=e.get("EXT_clip_control");ve?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),we=ve;const lt=Pe;Pe=null,this.setClear(lt)}},getReversed:function(){return we},setTest:function(ve){ve?de(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(ve){he!==ve&&!H&&(s.depthMask(ve),he=ve)},setFunc:function(ve){if(we&&(ve=Uv[ve]),Oe!==ve){switch(ve){case Ec:s.depthFunc(s.NEVER);break;case wc:s.depthFunc(s.ALWAYS);break;case Tc:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Ac:s.depthFunc(s.EQUAL);break;case Rc:s.depthFunc(s.GEQUAL);break;case Cc:s.depthFunc(s.GREATER);break;case Pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Pe!==ve&&(Pe=ve,we&&(ve=1-ve),s.clearDepth(ve))},reset:function(){H=!1,he=null,Oe=null,Pe=null,we=!1}}}function a(){let H=!1,we=null,he=null,Oe=null,Pe=null,ve=null,Ye=null,lt=null,Gt=null;return{setTest:function(bt){H||(bt?de(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(bt){we!==bt&&!H&&(s.stencilMask(bt),we=bt)},setFunc:function(bt,Bn,ui){(he!==bt||Oe!==Bn||Pe!==ui)&&(s.stencilFunc(bt,Bn,ui),he=bt,Oe=Bn,Pe=ui)},setOp:function(bt,Bn,ui){(ve!==bt||Ye!==Bn||lt!==ui)&&(s.stencilOp(bt,Bn,ui),ve=bt,Ye=Bn,lt=ui)},setLocked:function(bt){H=bt},setClear:function(bt){Gt!==bt&&(s.clearStencil(bt),Gt=bt)},reset:function(){H=!1,we=null,he=null,Oe=null,Pe=null,ve=null,Ye=null,lt=null,Gt=null}}}const l=new t,u=new r,h=new a,f=new WeakMap,p=new WeakMap;let g={},_={},v={},y=new WeakMap,E=[],C=null,x=!1,S=null,P=null,N=null,L=null,I=null,b=null,B=null,T=new Tt(0,0,0),U=0,G=!1,k=null,$=null,le=null,ce=null,Y=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,q=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ae)[1]),Z=q>=1):ae.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),Z=q>=2);let oe=null,F={};const Q=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),ze=new rn().fromArray(Q),Ae=new rn().fromArray(Ie);function j(H,we,he,Oe){const Pe=new Uint8Array(4),ve=s.createTexture();s.bindTexture(H,ve),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<he;Ye++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(we+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return ve}const ge={};ge[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),de(s.DEPTH_TEST),u.setFunc(Es),Vt(!1),Ot(id),de(s.CULL_FACE),Dt(Yi);function de(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function Te(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function Ge(H,we){return v[H]!==we?(s.bindFramebuffer(H,we),v[H]=we,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=we),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=we),!0):!1}function $e(H,we){let he=E,Oe=!1;if(H){he=y.get(we),he===void 0&&(he=[],y.set(we,he));const Pe=H.textures;if(he.length!==Pe.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Ye=Pe.length;ve<Ye;ve++)he[ve]=s.COLOR_ATTACHMENT0+ve;he.length=Pe.length,Oe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(he)}function Ut(H){return C!==H?(s.useProgram(H),C=H,!0):!1}const ct={[jr]:s.FUNC_ADD,[rv]:s.FUNC_SUBTRACT,[sv]:s.FUNC_REVERSE_SUBTRACT};ct[ov]=s.MIN,ct[av]=s.MAX;const wt={[lv]:s.ZERO,[cv]:s.ONE,[uv]:s.SRC_COLOR,[xc]:s.SRC_ALPHA,[gv]:s.SRC_ALPHA_SATURATE,[pv]:s.DST_COLOR,[fv]:s.DST_ALPHA,[hv]:s.ONE_MINUS_SRC_COLOR,[Mc]:s.ONE_MINUS_SRC_ALPHA,[mv]:s.ONE_MINUS_DST_COLOR,[dv]:s.ONE_MINUS_DST_ALPHA,[vv]:s.CONSTANT_COLOR,[_v]:s.ONE_MINUS_CONSTANT_COLOR,[yv]:s.CONSTANT_ALPHA,[Sv]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(H,we,he,Oe,Pe,ve,Ye,lt,Gt,bt){if(H===Yi){x===!0&&(Te(s.BLEND),x=!1);return}if(x===!1&&(de(s.BLEND),x=!0),H!==iv){if(H!==S||bt!==G){if((P!==jr||I!==jr)&&(s.blendEquation(s.FUNC_ADD),P=jr,I=jr),bt)switch(H){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rd:s.blendFunc(s.ONE,s.ONE);break;case sd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case od:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",H);break}else switch(H){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sd:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case od:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",H);break}N=null,L=null,b=null,B=null,T.set(0,0,0),U=0,S=H,G=bt}return}Pe=Pe||we,ve=ve||he,Ye=Ye||Oe,(we!==P||Pe!==I)&&(s.blendEquationSeparate(ct[we],ct[Pe]),P=we,I=Pe),(he!==N||Oe!==L||ve!==b||Ye!==B)&&(s.blendFuncSeparate(wt[he],wt[Oe],wt[ve],wt[Ye]),N=he,L=Oe,b=ve,B=Ye),(lt.equals(T)===!1||Gt!==U)&&(s.blendColor(lt.r,lt.g,lt.b,Gt),T.copy(lt),U=Gt),S=H,G=!1}function st(H,we){H.side===Rt?Te(s.CULL_FACE):de(s.CULL_FACE);let he=H.side===Gn;we&&(he=!he),Vt(he),H.blending===Ms&&H.transparent===!1?Dt(Yi):Dt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Oe=H.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),V(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(H){k!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),k=H)}function Ot(H){H!==ev?(de(s.CULL_FACE),H!==$&&(H===id?s.cullFace(s.BACK):H===tv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),$=H}function cn(H){H!==le&&(Z&&s.lineWidth(H),le=H)}function V(H,we,he){H?(de(s.POLYGON_OFFSET_FILL),(ce!==we||Y!==he)&&(ce=we,Y=he,u.getReversed()&&(we=-we),s.polygonOffset(we,he))):Te(s.POLYGON_OFFSET_FILL)}function Ft(H){H?de(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function vt(H){H===void 0&&(H=s.TEXTURE0+ee-1),oe!==H&&(s.activeTexture(H),oe=H)}function Bt(H,we,he){he===void 0&&(oe===null?he=s.TEXTURE0+ee-1:he=oe);let Oe=F[he];Oe===void 0&&(Oe={type:void 0,texture:void 0},F[he]=Oe),(Oe.type!==H||Oe.texture!==we)&&(oe!==he&&(s.activeTexture(he),oe=he),s.bindTexture(H,we||ge[H]),Oe.type=H,Oe.texture=we)}function De(){const H=F[oe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Yt(){try{s.compressedTexImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function M(){try{s.texSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function K(){try{s.texSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function xe(){try{s.texStorage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Le(){try{s.texStorage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function ue(){try{s.texImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function pe(){try{s.texImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Ue(H){return _[H]!==void 0?_[H]:s.getParameter(H)}function Fe(H,we){_[H]!==we&&(s.pixelStorei(H,we),_[H]=we)}function Re(H){ze.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ze.copy(H))}function Me(H){Ae.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Ae.copy(H))}function rt(H,we){let he=p.get(we);he===void 0&&(he=new WeakMap,p.set(we,he));let Oe=he.get(H);Oe===void 0&&(Oe=s.getUniformBlockIndex(we,H.name),he.set(H,Oe))}function at(H,we){const Oe=p.get(we).get(H);f.get(we)!==Oe&&(s.uniformBlockBinding(we,Oe,H.__bindingPointIndex),f.set(we,Oe))}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},oe=null,F={},v={},y=new WeakMap,E=[],C=null,x=!1,S=null,P=null,N=null,L=null,I=null,b=null,B=null,T=new Tt(0,0,0),U=0,G=!1,k=null,$=null,le=null,ce=null,Y=null,ze.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:de,disable:Te,bindFramebuffer:Ge,drawBuffers:$e,useProgram:Ut,setBlending:Dt,setMaterial:st,setFlipSided:Vt,setCullFace:Ot,setLineWidth:cn,setPolygonOffset:V,setScissorTest:Ft,activeTexture:vt,bindTexture:Bt,unbindTexture:De,compressedTexImage2D:Yt,compressedTexImage3D:D,texImage2D:ue,texImage3D:pe,pixelStorei:Fe,getParameter:Ue,updateUBOMapping:rt,uniformBlockBinding:at,texStorage2D:xe,texStorage3D:Le,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:Re,viewport:Me,reset:_t}}function aM(s,e,t,r,a,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ze,g=new WeakMap,_=new Set;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,M){return E?new OffscreenCanvas(D,M):wo("canvas")}function x(D,M,K){let fe=1;const me=Yt(D);if((me.width>K||me.height>K)&&(fe=K/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const xe=Math.floor(fe*me.width),Le=Math.floor(fe*me.height);v===void 0&&(v=C(xe,Le));const ue=M?C(xe,Le):v;return ue.width=xe,ue.height=Le,ue.getContext("2d").drawImage(D,0,0,xe,Le),et("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+xe+"x"+Le+")."),ue}else return"data"in D&&et("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function S(D){return D.generateMipmaps}function P(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,M,K,fe,me,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Le;fe&&(Le=e.get("EXT_texture_norm16"),Le||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===s.RED&&(K===s.FLOAT&&(ue=s.R32F),K===s.HALF_FLOAT&&(ue=s.R16F),K===s.UNSIGNED_BYTE&&(ue=s.R8),K===s.UNSIGNED_SHORT&&Le&&(ue=Le.R16_EXT),K===s.SHORT&&Le&&(ue=Le.R16_SNORM_EXT)),M===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.R8UI),K===s.UNSIGNED_SHORT&&(ue=s.R16UI),K===s.UNSIGNED_INT&&(ue=s.R32UI),K===s.BYTE&&(ue=s.R8I),K===s.SHORT&&(ue=s.R16I),K===s.INT&&(ue=s.R32I)),M===s.RG&&(K===s.FLOAT&&(ue=s.RG32F),K===s.HALF_FLOAT&&(ue=s.RG16F),K===s.UNSIGNED_BYTE&&(ue=s.RG8),K===s.UNSIGNED_SHORT&&Le&&(ue=Le.RG16_EXT),K===s.SHORT&&Le&&(ue=Le.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RG8UI),K===s.UNSIGNED_SHORT&&(ue=s.RG16UI),K===s.UNSIGNED_INT&&(ue=s.RG32UI),K===s.BYTE&&(ue=s.RG8I),K===s.SHORT&&(ue=s.RG16I),K===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),K===s.UNSIGNED_INT&&(ue=s.RGB32UI),K===s.BYTE&&(ue=s.RGB8I),K===s.SHORT&&(ue=s.RGB16I),K===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),K===s.UNSIGNED_INT&&(ue=s.RGBA32UI),K===s.BYTE&&(ue=s.RGBA8I),K===s.SHORT&&(ue=s.RGBA16I),K===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&(K===s.UNSIGNED_SHORT&&Le&&(ue=Le.RGB16_EXT),K===s.SHORT&&Le&&(ue=Le.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),M===s.RGBA){const pe=xe?Ua:Et.getTransfer(me);K===s.FLOAT&&(ue=s.RGBA32F),K===s.HALF_FLOAT&&(ue=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ue=pe===It?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Le&&(ue=Le.RGBA16_EXT),K===s.SHORT&&Le&&(ue=Le.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(D,M){let K;return D?M===null||M===Li||M===Mo?K=s.DEPTH24_STENCIL8:M===Di?K=s.DEPTH32F_STENCIL8:M===xo&&(K=s.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Li||M===Mo?K=s.DEPTH_COMPONENT24:M===Di?K=s.DEPTH_COMPONENT32F:M===xo&&(K=s.DEPTH_COMPONENT16),K}function b(D,M){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==Rn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function B(D){const M=D.target;M.removeEventListener("dispose",B),U(M),M.isVideoTexture&&g.delete(M),M.isHTMLTexture&&_.delete(M)}function T(D){const M=D.target;M.removeEventListener("dispose",T),k(M)}function U(D){const M=r.get(D);if(M.__webglInit===void 0)return;const K=D.source,fe=y.get(K);if(fe){const me=fe[M.__cacheKey];me.usedTimes--,me.usedTimes===0&&G(D),Object.keys(fe).length===0&&y.delete(K)}r.remove(D)}function G(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const K=D.source,fe=y.get(K);delete fe[M.__cacheKey],u.memory.textures--}function k(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(M.__webglFramebuffer[fe]))for(let me=0;me<M.__webglFramebuffer[fe].length;me++)s.deleteFramebuffer(M.__webglFramebuffer[fe][me]);else s.deleteFramebuffer(M.__webglFramebuffer[fe]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[fe])}else{if(Array.isArray(M.__webglFramebuffer))for(let fe=0;fe<M.__webglFramebuffer.length;fe++)s.deleteFramebuffer(M.__webglFramebuffer[fe]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let fe=0;fe<M.__webglColorRenderbuffer.length;fe++)M.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[fe]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=D.textures;for(let fe=0,me=K.length;fe<me;fe++){const xe=r.get(K[fe]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(K[fe])}r.remove(D)}let $=0;function le(){$=0}function ce(){return $}function Y(D){$=D}function ee(){const D=$;return D>=a.maxTextures&&et("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),$+=1,D}function Z(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function q(D,M){const K=r.get(D);if(D.isVideoTexture&&Bt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const fe=D.image;if(fe===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(K,D,M);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+M)}function ae(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Te(K,D,M);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+M)}function oe(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Te(K,D,M);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+M)}function F(D,M){const K=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&K.__version!==D.version){Ge(K,D,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+M)}const Q={[Aa]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[Dc]:s.MIRRORED_REPEAT},Ie={[xn]:s.NEAREST,[Ev]:s.NEAREST_MIPMAP_NEAREST,[Ra]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[$r]:s.LINEAR_MIPMAP_LINEAR},ze={[Av]:s.NEVER,[Lv]:s.ALWAYS,[Rv]:s.LESS,[vu]:s.LEQUAL,[Cv]:s.EQUAL,[_u]:s.GEQUAL,[Pv]:s.GREATER,[bv]:s.NOTEQUAL};function Ae(D,M){if(M.type===Di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Rn||M.magFilter===Nc||M.magFilter===Ra||M.magFilter===$r||M.minFilter===Rn||M.minFilter===Nc||M.minFilter===Ra||M.minFilter===$r)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Q[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Q[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Q[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Ie[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Ie[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ze[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xn||M.minFilter!==Ra&&M.minFilter!==$r||M.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function j(D,M){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",B));const fe=M.source;let me=y.get(fe);me===void 0&&(me={},y.set(fe,me));const xe=Z(M);if(xe!==D.__cacheKey){me[xe]===void 0&&(me[xe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),me[xe].usedTimes++;const Le=me[D.__cacheKey];Le!==void 0&&(me[D.__cacheKey].usedTimes--,Le.usedTimes===0&&G(M)),D.__cacheKey=xe,D.__webglTexture=me[xe].texture}return K}function ge(D,M,K){return Math.floor(Math.floor(D/K)/M)}function de(D,M,K,fe){const xe=D.updateRanges;if(xe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,K,fe,M.data);else{xe.sort((Fe,Re)=>Fe.start-Re.start);let Le=0;for(let Fe=1;Fe<xe.length;Fe++){const Re=xe[Le],Me=xe[Fe],rt=Re.start+Re.count,at=ge(Me.start,M.width,4),_t=ge(Re.start,M.width,4);Me.start<=rt+1&&at===_t&&ge(Me.start+Me.count-1,M.width,4)===at?Re.count=Math.max(Re.count,Me.start+Me.count-Re.start):(++Le,xe[Le]=Me)}xe.length=Le+1;const ue=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Fe=0,Re=xe.length;Fe<Re;Fe++){const Me=xe[Fe],rt=Math.floor(Me.start/4),at=Math.ceil(Me.count/4),_t=rt%M.width,H=Math.floor(rt/M.width),we=at,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,_t,H,we,he,K,fe,M.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ue)}}function Te(D,M,K){let fe=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(fe=s.TEXTURE_3D);const me=j(D,M),xe=M.source;t.bindTexture(fe,D.__webglTexture,s.TEXTURE0+K);const Le=r.get(xe);if(xe.version!==Le.__version||me===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const he=Et.getPrimaries(Et.workingColorSpace),Oe=M.colorSpace===gr?null:Et.getPrimaries(M.colorSpace),Pe=M.colorSpace===gr||he===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let pe=x(M.image,!1,a.maxTextureSize);pe=De(M,pe);const Ue=l.convert(M.format,M.colorSpace),Fe=l.convert(M.type);let Re=L(M.internalFormat,Ue,Fe,M.normalized,M.colorSpace,M.isVideoTexture);Ae(fe,M);let Me;const rt=M.mipmaps,at=M.isVideoTexture!==!0,_t=Le.__version===void 0||me===!0,H=xe.dataReady,we=b(M,pe);if(M.isDepthTexture)Re=I(M.format===Kr,M.type),_t&&(at?t.texStorage2D(s.TEXTURE_2D,1,Re,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Re,pe.width,pe.height,0,Ue,Fe,null));else if(M.isDataTexture)if(rt.length>0){at&&_t&&t.texStorage2D(s.TEXTURE_2D,we,Re,rt[0].width,rt[0].height);for(let he=0,Oe=rt.length;he<Oe;he++)Me=rt[he],at?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Me.width,Me.height,Ue,Fe,Me.data):t.texImage2D(s.TEXTURE_2D,he,Re,Me.width,Me.height,0,Ue,Fe,Me.data);M.generateMipmaps=!1}else at?(_t&&t.texStorage2D(s.TEXTURE_2D,we,Re,pe.width,pe.height),H&&de(M,pe,Ue,Fe)):t.texImage2D(s.TEXTURE_2D,0,Re,pe.width,pe.height,0,Ue,Fe,pe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){at&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Re,rt[0].width,rt[0].height,pe.depth);for(let he=0,Oe=rt.length;he<Oe;he++)if(Me=rt[he],M.format!==vi)if(Ue!==null)if(at){if(H)if(M.layerUpdates.size>0){const Pe=Sp(Me.width,Me.height,M.format,M.type);for(const ve of M.layerUpdates){const Ye=Me.data.subarray(ve*Pe/Me.data.BYTES_PER_ELEMENT,(ve+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ve,Me.width,Me.height,1,Ue,Ye)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,pe.depth,Ue,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Re,Me.width,Me.height,pe.depth,0,Me.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,pe.depth,Ue,Fe,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,Re,Me.width,Me.height,pe.depth,0,Ue,Fe,Me.data)}else{at&&_t&&t.texStorage2D(s.TEXTURE_2D,we,Re,rt[0].width,rt[0].height);for(let he=0,Oe=rt.length;he<Oe;he++)Me=rt[he],M.format!==vi?Ue!==null?at?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Me.width,Me.height,Ue,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,he,Re,Me.width,Me.height,0,Me.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Me.width,Me.height,Ue,Fe,Me.data):t.texImage2D(s.TEXTURE_2D,he,Re,Me.width,Me.height,0,Ue,Fe,Me.data)}else if(M.isDataArrayTexture)if(at){if(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Re,pe.width,pe.height,pe.depth),H)if(M.layerUpdates.size>0){const he=Sp(pe.width,pe.height,M.format,M.type);for(const Oe of M.layerUpdates){const Pe=pe.data.subarray(Oe*he/pe.data.BYTES_PER_ELEMENT,(Oe+1)*he/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,pe.width,pe.height,1,Ue,Fe,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Fe,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,pe.width,pe.height,pe.depth,0,Ue,Fe,pe.data);else if(M.isData3DTexture)at?(_t&&t.texStorage3D(s.TEXTURE_3D,we,Re,pe.width,pe.height,pe.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ue,Fe,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Re,pe.width,pe.height,pe.depth,0,Ue,Fe,pe.data);else if(M.isFramebufferTexture){if(_t)if(at)t.texStorage2D(s.TEXTURE_2D,we,Re,pe.width,pe.height);else{let he=pe.width,Oe=pe.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Re,he,Oe,0,Ue,Fe,null),he>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),pe.parentNode!==he){he.appendChild(pe),_.add(M),he.onpaint=lt=>{const Gt=lt.changedElements;for(const bt of _)Gt.includes(bt.image)&&(bt.needsUpdate=!0)},he.requestPaint();return}const Oe=0,Pe=s.RGBA,ve=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,Pe,ve,Ye,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(rt.length>0){if(at&&_t){const he=Yt(rt[0]);t.texStorage2D(s.TEXTURE_2D,we,Re,he.width,he.height)}for(let he=0,Oe=rt.length;he<Oe;he++)Me=rt[he],at?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ue,Fe,Me):t.texImage2D(s.TEXTURE_2D,he,Re,Ue,Fe,Me);M.generateMipmaps=!1}else if(at){if(_t){const he=Yt(pe);t.texStorage2D(s.TEXTURE_2D,we,Re,he.width,he.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,Fe,pe)}else t.texImage2D(s.TEXTURE_2D,0,Re,Ue,Fe,pe);S(M)&&P(fe),Le.__version=xe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ge(D,M,K){if(M.image.length!==6)return;const fe=j(D,M),me=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+K);const xe=r.get(me);if(me.version!==xe.__version||fe===!0){t.activeTexture(s.TEXTURE0+K);const Le=Et.getPrimaries(Et.workingColorSpace),ue=M.colorSpace===gr?null:Et.getPrimaries(M.colorSpace),pe=M.colorSpace===gr||Le===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let ve=0;ve<6;ve++)!Ue&&!Fe?Re[ve]=x(M.image[ve],!0,a.maxCubemapSize):Re[ve]=Fe?M.image[ve].image:M.image[ve],Re[ve]=De(M,Re[ve]);const Me=Re[0],rt=l.convert(M.format,M.colorSpace),at=l.convert(M.type),_t=L(M.internalFormat,rt,at,M.normalized,M.colorSpace),H=M.isVideoTexture!==!0,we=xe.__version===void 0||fe===!0,he=me.dataReady;let Oe=b(M,Me);Ae(s.TEXTURE_CUBE_MAP,M);let Pe;if(Ue){H&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,_t,Me.width,Me.height);for(let ve=0;ve<6;ve++){Pe=Re[ve].mipmaps;for(let Ye=0;Ye<Pe.length;Ye++){const lt=Pe[Ye];M.format!==vi?rt!==null?H?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,rt,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,_t,lt.width,lt.height,0,lt.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,rt,at,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,_t,lt.width,lt.height,0,rt,at,lt.data)}}}else{if(Pe=M.mipmaps,H&&we){Pe.length>0&&Oe++;const ve=Yt(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,_t,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Fe){H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Re[ve].width,Re[ve].height,rt,at,Re[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_t,Re[ve].width,Re[ve].height,0,rt,at,Re[ve].data);for(let Ye=0;Ye<Pe.length;Ye++){const Gt=Pe[Ye].image[ve].image;H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,Gt.width,Gt.height,rt,at,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,_t,Gt.width,Gt.height,0,rt,at,Gt.data)}}else{H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,rt,at,Re[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_t,rt,at,Re[ve]);for(let Ye=0;Ye<Pe.length;Ye++){const lt=Pe[Ye];H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,rt,at,lt.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,_t,rt,at,lt.image[ve])}}}S(M)&&P(s.TEXTURE_CUBE_MAP),xe.__version=me.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function $e(D,M,K,fe,me,xe){const Le=l.convert(K.format,K.colorSpace),ue=l.convert(K.type),pe=L(K.internalFormat,Le,ue,K.normalized,K.colorSpace),Ue=r.get(M),Fe=r.get(K);if(Fe.__renderTarget=M,!Ue.__hasExternalTextures){const Re=Math.max(1,M.width>>xe),Me=Math.max(1,M.height>>xe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,xe,pe,Re,Me,M.depth,0,Le,ue,null):t.texImage2D(me,xe,pe,Re,Me,0,Le,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),vt(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,me,Fe.__webglTexture,0,Ft(M)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,me,Fe.__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(D,M,K){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const fe=M.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,xe=I(M.stencilBuffer,me),Le=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(M),xe,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(M),xe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,xe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,D)}else{const fe=M.textures;for(let me=0;me<fe.length;me++){const xe=fe[me],Le=l.convert(xe.format,xe.colorSpace),ue=l.convert(xe.type),pe=L(xe.internalFormat,Le,ue,xe.normalized,xe.colorSpace);vt(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(M),pe,M.width,M.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(M),pe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,pe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(D,M,K){const fe=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(M.depthTexture);if(me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),fe){if(me.__webglInit===void 0&&(me.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ue=l.convert(M.depthTexture.format),Fe=l.convert(M.depthTexture.type);let Re;M.depthTexture.format===$i?Re=s.DEPTH_COMPONENT24:M.depthTexture.format===Kr&&(Re=s.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Re,M.width,M.height,0,Ue,Fe,null)}}else q(M.depthTexture,0);const xe=me.__webglTexture,Le=Ft(M),ue=fe?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,pe=M.depthTexture.format===Kr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===$i)vt(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ue,xe,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ue,xe,0);else if(M.depthTexture.format===Kr)vt(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ue,xe,0,Le):s.framebufferTexture2D(s.FRAMEBUFFER,pe,ue,xe,0);else throw new Error("Unknown depthTexture format")}function wt(D){const M=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),fe){const me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),M.__depthDisposeCallback=me}M.__boundDepthTexture=fe}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let fe=0;fe<6;fe++)ct(M.__webglFramebuffer[fe],D,fe);else{const fe=D.texture.mipmaps;fe&&fe.length>0?ct(M.__webglFramebuffer[0],D,0):ct(M.__webglFramebuffer,D,0)}else if(K){M.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[fe]),M.__webglDepthbuffer[fe]===void 0)M.__webglDepthbuffer[fe]=s.createRenderbuffer(),Ut(M.__webglDepthbuffer[fe],D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=M.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ut(M.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(D,M,K){const fe=r.get(D);M!==void 0&&$e(fe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&wt(D)}function st(D){const M=D.texture,K=r.get(D),fe=r.get(M);D.addEventListener("dispose",T);const me=D.textures,xe=D.isWebGLCubeRenderTarget===!0,Le=me.length>1;if(Le||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=M.version,u.memory.textures++),xe){K.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[ue]=[];for(let pe=0;pe<M.mipmaps.length;pe++)K.__webglFramebuffer[ue][pe]=s.createFramebuffer()}else K.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)K.__webglFramebuffer[ue]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Le)for(let ue=0,pe=me.length;ue<pe;ue++){const Ue=r.get(me[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&vt(D)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ue=0;ue<me.length;ue++){const pe=me[ue];K.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[ue]);const Ue=l.convert(pe.format,pe.colorSpace),Fe=l.convert(pe.type),Re=L(pe.internalFormat,Ue,Fe,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),Me=Ft(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,Re,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,K.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ae(s.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)$e(K.__webglFramebuffer[ue][pe],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,pe);else $e(K.__webglFramebuffer[ue],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(M)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ue=0,pe=me.length;ue<pe;ue++){const Ue=me[ue],Fe=r.get(Ue);let Re=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,Fe.__webglTexture),Ae(Re,Ue),$e(K.__webglFramebuffer,D,Ue,s.COLOR_ATTACHMENT0+ue,Re,0),S(Ue)&&P(Re)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,fe.__webglTexture),Ae(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)$e(K.__webglFramebuffer[pe],D,M,s.COLOR_ATTACHMENT0,ue,pe);else $e(K.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,ue,0);S(M)&&P(ue),t.unbindTexture()}D.depthBuffer&&wt(D)}function Vt(D){const M=D.textures;for(let K=0,fe=M.length;K<fe;K++){const me=M[K];if(S(me)){const xe=N(D),Le=r.get(me).__webglTexture;t.bindTexture(xe,Le),P(xe),t.unbindTexture()}}}const Ot=[],cn=[];function V(D){if(D.samples>0){if(vt(D)===!1){const M=D.textures,K=D.width,fe=D.height;let me=s.COLOR_BUFFER_BIT;const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(D),ue=M.length>1;if(ue)for(let Ue=0;Ue<M.length;Ue++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const Fe=r.get(M[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,K,fe,0,0,K,fe,me,s.NEAREST),f===!0&&(Ot.length=0,cn.length=0,Ot.push(s.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ot.push(xe),cn.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,cn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ue=0;Ue<M.length;Ue++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const Fe=r.get(M[Ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ft(D){return Math.min(a.maxSamples,D.samples)}function vt(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Bt(D){const M=u.render.frame;g.get(D)!==M&&(g.set(D,M),D.update())}function De(D,M){const K=D.colorSpace,fe=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Ia&&K!==gr&&(Et.getTransfer(K)===It?(fe!==vi||me!==Jn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",K)),M}function Yt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=le,this.getTextureUnits=ce,this.setTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=F,this.rebindTextures=Dt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lM(s,e){function t(r,a=gr){let l;const u=Et.getTransfer(a);if(r===Jn)return s.UNSIGNED_BYTE;if(r===Uc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Oc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_d)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===yd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===gd)return s.BYTE;if(r===vd)return s.SHORT;if(r===xo)return s.UNSIGNED_SHORT;if(r===Ic)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===Di)return s.FLOAT;if(r===qi)return s.HALF_FLOAT;if(r===Sd)return s.ALPHA;if(r===xd)return s.RGB;if(r===vi)return s.RGBA;if(r===$i)return s.DEPTH_COMPONENT;if(r===Kr)return s.DEPTH_STENCIL;if(r===Md)return s.RED;if(r===Fc)return s.RED_INTEGER;if(r===Zr)return s.RG;if(r===Bc)return s.RG_INTEGER;if(r===kc)return s.RGBA_INTEGER;if(r===Ca||r===Pa||r===ba||r===La)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ca)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ba)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===La)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ca)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pa)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ba)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===La)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zc||r===Hc||r===Gc||r===Vc)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zc)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hc)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gc)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vc)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wc||r===Xc||r===Yc||r===jc||r===qc||r===Da||r===$c)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Wc||r===Xc)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Yc)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===jc)return l.COMPRESSED_R11_EAC;if(r===qc)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Da)return l.COMPRESSED_RG11_EAC;if(r===$c)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kc||r===Zc||r===Jc||r===Qc||r===eu||r===tu||r===nu||r===iu||r===ru||r===su||r===ou||r===au||r===lu||r===cu)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kc)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zc)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jc)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qc)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eu)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tu)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nu)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===iu)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ru)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===su)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ou)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===au)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lu)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cu)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uu||r===hu||r===fu)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uu)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hu)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fu)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===du||r===pu||r===Na||r===mu)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===du)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pu)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Na)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mu)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ip(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Oi({vertexShader:cM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new rl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fM extends vr{constructor(e,t){super();const r=this;let a=null,l=1,u=null,h="local-floor",f=1,p=null,g=null,_=null,v=null,y=null,E=null;const C=typeof XRWebGLBinding<"u",x=new hM,S={},P=t.getContextAttributes();let N=null,L=null;const I=[],b=[],B=new Ze;let T=null;const U=new ci;U.viewport=new rn;const G=new ci;G.viewport=new rn;const k=[U,G],$=new ey;let le=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ge=I[j];return ge===void 0&&(ge=new Ru,I[j]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(j){let ge=I[j];return ge===void 0&&(ge=new Ru,I[j]=ge),ge.getGripSpace()},this.getHand=function(j){let ge=I[j];return ge===void 0&&(ge=new Ru,I[j]=ge),ge.getHandSpace()};function Y(j){const ge=b.indexOf(j.inputSource);if(ge===-1)return;const de=I[ge];de!==void 0&&(de.update(j.inputSource,j.frame,p||u),de.dispatchEvent({type:j.type,data:j.inputSource}))}function ee(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",ee),a.removeEventListener("inputsourceschange",Z);for(let j=0;j<I.length;j++){const ge=b[j];ge!==null&&(b[j]=null,I[j].disconnect(ge))}le=null,ce=null,x.reset();for(const j in S)delete S[j];e.setRenderTarget(N),y=null,v=null,_=null,a=null,L=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,r.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(N=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",ee),a.addEventListener("inputsourceschange",Z),P.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Te=null,Ge=null;P.depth&&(Ge=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=P.stencil?Kr:$i,Te=P.stencil?Mo:Li);const $e={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer($e),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Ii(v.textureWidth,v.textureHeight,{format:vi,type:Jn,depthTexture:new zs(v.textureWidth,v.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const de={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Ii(y.framebufferWidth,y.framebufferHeight,{format:vi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await a.requestReferenceSpace(h),Ae.setContext(a),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(j){for(let ge=0;ge<j.removed.length;ge++){const de=j.removed[ge],Te=b.indexOf(de);Te>=0&&(b[Te]=null,I[Te].disconnect(de))}for(let ge=0;ge<j.added.length;ge++){const de=j.added[ge];let Te=b.indexOf(de);if(Te===-1){for(let $e=0;$e<I.length;$e++)if($e>=b.length){b.push(de),Te=$e;break}else if(b[$e]===null){b[$e]=de,Te=$e;break}if(Te===-1)break}const Ge=I[Te];Ge&&Ge.connect(de)}}const q=new R,ae=new R;function oe(j,ge,de){q.setFromMatrixPosition(ge.matrixWorld),ae.setFromMatrixPosition(de.matrixWorld);const Te=q.distanceTo(ae),Ge=ge.projectionMatrix.elements,$e=de.projectionMatrix.elements,Ut=Ge[14]/(Ge[10]-1),ct=Ge[14]/(Ge[10]+1),wt=(Ge[9]+1)/Ge[5],Dt=(Ge[9]-1)/Ge[5],st=(Ge[8]-1)/Ge[0],Vt=($e[8]+1)/$e[0],Ot=Ut*st,cn=Ut*Vt,V=Te/(-st+Vt),Ft=V*-st;if(ge.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ft),j.translateZ(V),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ge[10]===-1)j.projectionMatrix.copy(ge.projectionMatrix),j.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const vt=Ut+V,Bt=ct+V,De=Ot-Ft,Yt=cn+(Te-Ft),D=wt*ct/Bt*vt,M=Dt*ct/Bt*vt;j.projectionMatrix.makePerspective(De,Yt,D,M,vt,Bt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function F(j,ge){ge===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ge.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let ge=j.near,de=j.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(de=x.depthFar)),$.near=G.near=U.near=ge,$.far=G.far=U.far=de,(le!==$.near||ce!==$.far)&&(a.updateRenderState({depthNear:$.near,depthFar:$.far}),le=$.near,ce=$.far),$.layers.mask=j.layers.mask|6,U.layers.mask=$.layers.mask&-5,G.layers.mask=$.layers.mask&-3;const Te=j.parent,Ge=$.cameras;F($,Te);for(let $e=0;$e<Ge.length;$e++)F(Ge[$e],Te);Ge.length===2?oe($,U,G):$.projectionMatrix.copy(U.projectionMatrix),Q(j,$,Te)};function Q(j,ge,de){de===null?j.matrix.copy(ge.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ge.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ge.projectionMatrix),j.projectionMatrixInverse.copy(ge.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ao*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&y===null))return f},this.setFoveation=function(j){f=j,v!==null&&(v.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(j){return S[j]};let Ie=null;function ze(j,ge){if(g=ge.getViewerPose(p||u),E=ge,g!==null){const de=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Te=!1;de.length!==$.cameras.length&&($.cameras.length=0,Te=!0);for(let ct=0;ct<de.length;ct++){const wt=de[ct];let Dt=null;if(y!==null)Dt=y.getViewport(wt);else{const Vt=_.getViewSubImage(v,wt);Dt=Vt.viewport,ct===0&&(e.setRenderTargetTextures(L,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(L))}let st=k[ct];st===void 0&&(st=new ci,st.layers.enable(ct),st.viewport=new rn,k[ct]=st),st.matrix.fromArray(wt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(wt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ct===0&&($.matrix.copy(st.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Te===!0&&$.cameras.push(st)}const Ge=a.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ct=_.getDepthInformation(de[0]);ct&&ct.isValid&&ct.texture&&x.init(ct,a.renderState)}if(Ge&&Ge.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ct=0;ct<de.length;ct++){const wt=de[ct].camera;if(wt){let Dt=S[wt];Dt||(Dt=new ip,S[wt]=Dt);const st=_.getCameraImage(wt);Dt.sourceTexture=st}}}}for(let de=0;de<I.length;de++){const Te=b[de],Ge=I[de];Te!==null&&Ge!==void 0&&Ge.update(Te,ge,p||u)}Ie&&Ie(j,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Ae=new xp;Ae.setAnimationLoop(ze),this.setAnimationLoop=function(j){Ie=j},this.dispose=function(){}}}const dM=new Qt,Zp=new ft;Zp.set(-1,0,0,0,1,0,0,0,1);function pM(s,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,up(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function a(x,S,P,N,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),g(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),v(x,S),S.isMeshPhysicalMaterial&&y(x,S,L)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),C(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&h(x,S)):S.isPointsMaterial?f(x,S,P,N):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Gn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Gn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const P=e.get(S),N=P.envMap,L=P.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(dM.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Zp),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function h(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function f(x,S,P,N){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*P,x.scale.value=N*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function g(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,P){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Gn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function C(x,S){const P=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function mM(s,e,t,r){let a={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(P,N){const L=N.program;r.uniformBlockBinding(P,L)}function p(P,N){let L=a[P.id];L===void 0&&(E(P),L=g(P),a[P.id]=L,P.addEventListener("dispose",x));const I=N.program;r.updateUBOMapping(P,I);const b=e.render.frame;l[P.id]!==b&&(v(P),l[P.id]=b)}function g(P){const N=_();P.__bindingPointIndex=N;const L=s.createBuffer(),I=P.__size,b=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,I,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function _(){for(let P=0;P<h;P++)if(u.indexOf(P)===-1)return u.push(P),P;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const N=a[P.id],L=P.uniforms,I=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let b=0,B=L.length;b<B;b++){const T=Array.isArray(L[b])?L[b]:[L[b]];for(let U=0,G=T.length;U<G;U++){const k=T[U];if(y(k,b,U,I)===!0){const $=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let Y=0;Y<le.length;Y++){const ee=le[Y],Z=C(ee);typeof ee=="number"||typeof ee=="boolean"?(k.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,$+ce,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=0,k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=0,k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=0):ArrayBuffer.isView(ee)?k.__data.set(new ee.constructor(ee.buffer,ee.byteOffset,k.__data.length)):(ee.toArray(k.__data,ce),ce+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(P,N,L,I){const b=P.value,B=N+"_"+L;if(I[B]===void 0)return typeof b=="number"||typeof b=="boolean"?I[B]=b:ArrayBuffer.isView(b)?I[B]=b.slice():I[B]=b.clone(),!0;{const T=I[B];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return I[B]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(T.equals(b)===!1)return T.copy(b),!0}}return!1}function E(P){const N=P.uniforms;let L=0;const I=16;for(let B=0,T=N.length;B<T;B++){const U=Array.isArray(N[B])?N[B]:[N[B]];for(let G=0,k=U.length;G<k;G++){const $=U[G],le=Array.isArray($.value)?$.value:[$.value];for(let ce=0,Y=le.length;ce<Y;ce++){const ee=le[ce],Z=C(ee),q=L%I,ae=q%Z.boundary,oe=q+ae;L+=ae,oe!==0&&I-oe<Z.storage&&(L+=I-oe),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=Z.storage}}}const b=L%I;return b>0&&(L+=I-b),P.__size=L,P.__cache={},this}function C(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(N.boundary=16,N.storage=P.byteLength):et("WebGLRenderer: Unsupported uniform value type.",P),N}function x(P){const N=P.target;N.removeEventListener("dispose",x);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function S(){for(const P in a)s.deleteBuffer(a[P]);u=[],a={},l={}}return{bind:f,update:p,dispose:S}}const gM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function vM(){return ki===null&&(ki=new v_(gM,16,16,Zr,qi),ki.name="DFG_LUT",ki.minFilter=Rn,ki.magFilter=Rn,ki.wrapS=ji,ki.wrapT=ji,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class _M{constructor(e={}){const{canvas:t=Nv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Jn}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=y,x=new Set([kc,Bc,Fc]),S=new Set([Jn,Li,xo,Mo,Uc,Oc]),P=new Uint32Array(4),N=new Int32Array(4),L=new R;let I=null,b=null;const B=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let k=!1,$=null;this._outputColorSpace=ai;let le=0,ce=0,Y=null,ee=-1,Z=null;const q=new rn,ae=new rn;let oe=null;const F=new Tt(0);let Q=0,Ie=t.width,ze=t.height,Ae=1,j=null,ge=null;const de=new rn(0,0,Ie,ze),Te=new rn(0,0,Ie,ze);let Ge=!1;const $e=new Xu;let Ut=!1,ct=!1;const wt=new Qt,Dt=new R,st=new rn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function cn(){return Y===null?Ae:1}let V=r;function Ft(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",lt,!1),V===null){const X="webgl2";if(V=Ft(X,A),V===null)throw Ft(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let vt,Bt,De,Yt,D,M,K,fe,me,xe,Le,ue,pe,Ue,Fe,Re,Me,rt,at,_t,H,we,he;function Oe(){vt=new v1(V),vt.init(),H=new lM(V,vt),Bt=new c1(V,vt,e,H),De=new oM(V,vt),Bt.reversedDepthBuffer&&v&&De.buffers.depth.setReversed(!0),Yt=new S1(V),D=new Yx,M=new aM(V,vt,De,D,Bt,H,Yt),K=new g1(G),fe=new ry(V),we=new a1(V,fe),me=new _1(V,fe,Yt,we),xe=new M1(V,me,fe,we,Yt),rt=new x1(V,Bt,M),Fe=new u1(D),Le=new Xx(G,K,vt,Bt,we,Fe),ue=new pM(G,D),pe=new qx,Ue=new eM(vt),Me=new o1(G,K,De,xe,E,f),Re=new sM(G,xe,Bt),he=new mM(V,Yt,Bt,De),at=new l1(V,vt,Yt),_t=new y1(V,vt,Yt),Yt.programs=Le.programs,G.capabilities=Bt,G.extensions=vt,G.properties=D,G.renderLists=pe,G.shadowMap=Re,G.state=De,G.info=Yt}Oe(),C!==Jn&&(U=new w1(C,t.width,t.height,a,l));const Pe=new fM(G,V);this.xr=Pe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(A){A!==void 0&&(Ae=A,this.setSize(Ie,ze,!1))},this.getSize=function(A){return A.set(Ie,ze)},this.setSize=function(A,X,re=!0){if(Pe.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=A,ze=X,t.width=Math.floor(A*Ae),t.height=Math.floor(X*Ae),re===!0&&(t.style.width=A+"px",t.style.height=X+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Ie*Ae,ze*Ae).floor()},this.setDrawingBufferSize=function(A,X,re){Ie=A,ze=X,Ae=re,t.width=Math.floor(A*re),t.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(C===Jn){Ct("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){et("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(de)},this.setViewport=function(A,X,re,ne){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,X,re,ne),De.viewport(q.copy(de).multiplyScalar(Ae).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,X,re,ne){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,X,re,ne),De.scissor(ae.copy(Te).multiplyScalar(Ae).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(A){De.setScissorTest(Ge=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let ne=0;if(A){let te=!1;if(Y!==null){const be=Y.texture.format;te=x.has(be)}if(te){const be=Y.texture.type,He=S.has(be),Ce=Me.getClearColor(),je=Me.getClearAlpha(),Qe=Ce.r,ut=Ce.g,ht=Ce.b;He?(P[0]=Qe,P[1]=ut,P[2]=ht,P[3]=je,V.clearBufferuiv(V.COLOR,0,P)):(N[0]=Qe,N[1]=ut,N[2]=ht,N[3]=je,V.clearBufferiv(V.COLOR,0,N))}else ne|=V.COLOR_BUFFER_BIT}X&&(ne|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),Me.dispose(),pe.dispose(),Ue.dispose(),D.dispose(),K.dispose(),xe.dispose(),we.dispose(),he.dispose(),Le.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ss),Pe.removeEventListener("sessionend",$s),sr.stop()};function ve(A){A.preventDefault(),Rd("WebGLRenderer: Context Lost."),k=!0}function Ye(){Rd("WebGLRenderer: Context Restored."),k=!1;const A=Yt.autoReset,X=Re.enabled,re=Re.autoUpdate,ne=Re.needsUpdate,te=Re.type;Oe(),Yt.autoReset=A,Re.enabled=X,Re.autoUpdate=re,Re.needsUpdate=ne,Re.type=te}function lt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Gt(A){const X=A.target;X.removeEventListener("dispose",Gt),bt(X)}function bt(A){Bn(A),D.remove(A)}function Bn(A){const X=D.get(A).programs;X!==void 0&&(X.forEach(function(re){Le.releaseProgram(re)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,ne,te,be){X===null&&(X=Vt);const He=te.isMesh&&te.matrixWorld.determinant()<0,Ce=gl(A,X,re,ne,te);De.setMaterial(ne,He);let je=re.index,Qe=1;if(ne.wireframe===!0){if(je=me.getWireframeAttribute(re),je===void 0)return;Qe=2}const ut=re.drawRange,ht=re.attributes.position;let Ke=ut.start*Qe,At=(ut.start+ut.count)*Qe;be!==null&&(Ke=Math.max(Ke,be.start*Qe),At=Math.min(At,(be.start+be.count)*Qe)),je!==null?(Ke=Math.max(Ke,0),At=Math.min(At,je.count)):ht!=null&&(Ke=Math.max(Ke,0),At=Math.min(At,ht.count));const Wt=At-Ke;if(Wt<0||Wt===1/0)return;we.setup(te,ne,Ce,re,je);let Zt,kt=at;if(je!==null&&(Zt=fe.get(je),kt=_t,kt.setIndex(Zt)),te.isMesh)ne.wireframe===!0?(De.setLineWidth(ne.wireframeLinewidth*cn()),kt.setMode(V.LINES)):kt.setMode(V.TRIANGLES);else if(te.isLine){let un=ne.linewidth;un===void 0&&(un=1),De.setLineWidth(un*cn()),te.isLineSegments?kt.setMode(V.LINES):te.isLineLoop?kt.setMode(V.LINE_LOOP):kt.setMode(V.LINE_STRIP)}else te.isPoints?kt.setMode(V.POINTS):te.isSprite&&kt.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))kt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const un=te._multiDrawStarts,Be=te._multiDrawCounts,wn=te._multiDrawCount,yt=je?fe.get(je).bytesPerElement:1,Xn=D.get(ne).currentProgram.getUniforms();for(let Yn=0;Yn<wn;Yn++)Xn.setValue(V,"_gl_DrawID",Yn),kt.render(un[Yn]/yt,Be[Yn])}else if(te.isInstancedMesh)kt.renderInstances(Ke,Wt,te.count);else if(re.isInstancedBufferGeometry){const un=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Be=Math.min(re.instanceCount,un);kt.renderInstances(Ke,Wt,Be)}else kt.render(Ke,Wt)};function ui(A,X,re){A.transparent===!0&&A.side===Rt&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Ks(A,X,re),A.side=mr,A.needsUpdate=!0,Ks(A,X,re),A.side=Rt):Ks(A,X,re)}this.compile=function(A,X,re=null){re===null&&(re=A),b=Ue.get(re),b.init(X),T.push(b),re.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(b.pushLight(te),te.castShadow&&b.pushShadow(te))}),A!==re&&A.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(b.pushLight(te),te.castShadow&&b.pushShadow(te))}),b.setupLights();const ne=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const be=te.material;if(be)if(Array.isArray(be))for(let He=0;He<be.length;He++){const Ce=be[He];ui(Ce,re,te),ne.add(Ce)}else ui(be,re,te),ne.add(be)}),b=T.pop(),ne},this.compileAsync=function(A,X,re=null){const ne=this.compile(A,X,re);return new Promise(te=>{function be(){if(ne.forEach(function(He){D.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){te(A);return}setTimeout(be,10)}vt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rr=null;function qs(A){rr&&rr(A)}function ss(){sr.stop()}function $s(){sr.start()}const sr=new xp;sr.setAnimationLoop(qs),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(A){rr=A,Pe.setAnimationLoop(A),A===null?sr.stop():sr.start()},Pe.addEventListener("sessionstart",ss),Pe.addEventListener("sessionend",$s),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;$!==null&&$.renderStart(A,X);const re=Pe.enabled===!0&&Pe.isPresenting===!0,ne=U!==null&&(Y===null||re)&&U.begin(G,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(X),X=Pe.getCamera()),A.isScene===!0&&A.onBeforeRender(G,A,X,Y),b=Ue.get(A,T.length),b.init(X),b.state.textureUnits=M.getTextureUnits(),T.push(b),wt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$e.setFromProjectionMatrix(wt,Ni,X.reversedDepth),ct=this.localClippingEnabled,Ut=Fe.init(this.clippingPlanes,ct),I=pe.get(A,B.length),I.init(),B.push(I),Pe.enabled===!0&&Pe.isPresenting===!0){const He=G.xr.getDepthSensingMesh();He!==null&&Ho(He,X,-1/0,G.sortObjects)}Ho(A,X,0,G.sortObjects),I.finish(),G.sortObjects===!0&&I.sort(j,ge),Ot=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Ot&&Me.addToRenderList(I,A),this.info.render.frame++,Ut===!0&&Fe.beginShadows();const te=b.state.shadowsArray;if(Re.render(te,A,X),Ut===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&U.hasRenderPass())===!1){const He=I.opaque,Ce=I.transmissive;if(b.setupLights(),X.isArrayCamera){const je=X.cameras;if(Ce.length>0)for(let Qe=0,ut=je.length;Qe<ut;Qe++){const ht=je[Qe];zi(He,Ce,A,ht)}Ot&&Me.render(A);for(let Qe=0,ut=je.length;Qe<ut;Qe++){const ht=je[Qe];pl(I,A,ht,ht.viewport)}}else Ce.length>0&&zi(He,Ce,A,X),Ot&&Me.render(A),pl(I,A,X)}Y!==null&&ce===0&&(M.updateMultisampleRenderTarget(Y),M.updateRenderTargetMipmap(Y)),ne&&U.end(G),A.isScene===!0&&A.onAfterRender(G,A,X),we.resetDefaultState(),ee=-1,Z=null,T.pop(),T.length>0?(b=T[T.length-1],M.setTextureUnits(b.state.textureUnits),Ut===!0&&Fe.setGlobalState(G.clippingPlanes,b.state.camera)):b=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,$!==null&&$.renderEnd()};function Ho(A,X,re,ne){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){ne&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const He=xe.update(A),Ce=A.material;Ce.visible&&I.push(A,He,Ce,re,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const He=xe.update(A),Ce=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),st.copy(He.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(Ce)){const je=He.groups;for(let Qe=0,ut=je.length;Qe<ut;Qe++){const ht=je[Qe],Ke=Ce[ht.materialIndex];Ke&&Ke.visible&&I.push(A,He,Ke,re,st.z,ht)}}else Ce.visible&&I.push(A,He,Ce,re,st.z,null)}}const be=A.children;for(let He=0,Ce=be.length;He<Ce;He++)Ho(be[He],X,re,ne)}function pl(A,X,re,ne){const{opaque:te,transmissive:be,transparent:He}=A;b.setupLightsView(re),Ut===!0&&Fe.setGlobalState(G.clippingPlanes,re),ne&&De.viewport(q.copy(ne)),te.length>0&&os(te,X,re),be.length>0&&os(be,X,re),He.length>0&&os(He,X,re),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function zi(A,X,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ne.id]===void 0){const Ke=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ne.id]=new Ii(1,1,{generateMipmaps:!0,type:Ke?qi:Jn,minFilter:$r,samples:Math.max(4,Bt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const be=b.state.transmissionRenderTarget[ne.id],He=ne.viewport||q;be.setSize(He.z*G.transmissionResolutionScale,He.w*G.transmissionResolutionScale);const Ce=G.getRenderTarget(),je=G.getActiveCubeFace(),Qe=G.getActiveMipmapLevel();G.setRenderTarget(be),G.getClearColor(F),Q=G.getClearAlpha(),Q<1&&G.setClearColor(16777215,.5),G.clear(),Ot&&Me.render(re);const ut=G.toneMapping;G.toneMapping=bi;const ht=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),b.setupLightsView(ne),Ut===!0&&Fe.setGlobalState(G.clippingPlanes,ne),os(A,re,ne),M.updateMultisampleRenderTarget(be),M.updateRenderTargetMipmap(be),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let At=0,Wt=X.length;At<Wt;At++){const Zt=X[At],{object:kt,geometry:un,material:Be,group:wn}=Zt;if(Be.side===Rt&&kt.layers.test(ne.layers)){const yt=Be.side;Be.side=Gn,Be.needsUpdate=!0,Go(kt,re,ne,un,Be,wn),Be.side=yt,Be.needsUpdate=!0,Ke=!0}}Ke===!0&&(M.updateMultisampleRenderTarget(be),M.updateRenderTargetMipmap(be))}G.setRenderTarget(Ce,je,Qe),G.setClearColor(F,Q),ht!==void 0&&(ne.viewport=ht),G.toneMapping=ut}function os(A,X,re){const ne=X.isScene===!0?X.overrideMaterial:null;for(let te=0,be=A.length;te<be;te++){const He=A[te],{object:Ce,geometry:je,group:Qe}=He;let ut=He.material;ut.allowOverride===!0&&ne!==null&&(ut=ne),Ce.layers.test(re.layers)&&Go(Ce,X,re,je,ut,Qe)}}function Go(A,X,re,ne,te,be){A.onBeforeRender(G,X,re,ne,te,be),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(G,X,re,ne,A,be),te.transparent===!0&&te.side===Rt&&te.forceSinglePass===!1?(te.side=Gn,te.needsUpdate=!0,G.renderBufferDirect(re,X,ne,te,A,be),te.side=mr,te.needsUpdate=!0,G.renderBufferDirect(re,X,ne,te,A,be),te.side=Rt):G.renderBufferDirect(re,X,ne,te,A,be),A.onAfterRender(G,X,re,ne,te,be)}function Ks(A,X,re){X.isScene!==!0&&(X=Vt);const ne=D.get(A),te=b.state.lights,be=b.state.shadowsArray,He=te.state.version,Ce=Le.getParameters(A,te.state,be,X,re,b.state.lightProbeGridArray),je=Le.getProgramCacheKey(Ce);let Qe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const ut=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=K.get(A.envMap||ne.environment,ut),ne.envMapRotation=ne.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Gt),Qe=new Map,ne.programs=Qe);let ht=Qe.get(je);if(ht!==void 0){if(ne.currentProgram===ht&&ne.lightsStateVersion===He)return Wo(A,Ce),ht}else Ce.uniforms=Le.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,re,Ce),A.onBeforeCompile(Ce,G),ht=Le.acquireProgram(Ce,je),Qe.set(je,ht),ne.uniforms=Ce.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Fe.uniform),Wo(A,Ce),ne.needsLights=_h(A),ne.lightsStateVersion=He,ne.needsLights&&(Ke.ambientLightColor.value=te.state.ambient,Ke.lightProbe.value=te.state.probe,Ke.directionalLights.value=te.state.directional,Ke.directionalLightShadows.value=te.state.directionalShadow,Ke.spotLights.value=te.state.spot,Ke.spotLightShadows.value=te.state.spotShadow,Ke.rectAreaLights.value=te.state.rectArea,Ke.ltc_1.value=te.state.rectAreaLTC1,Ke.ltc_2.value=te.state.rectAreaLTC2,Ke.pointLights.value=te.state.point,Ke.pointLightShadows.value=te.state.pointShadow,Ke.hemisphereLights.value=te.state.hemi,Ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ke.spotLightMatrix.value=te.state.spotLightMatrix,Ke.spotLightMap.value=te.state.spotLightMap,Ke.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=b.state.lightProbeGridArray.length>0,ne.currentProgram=ht,ne.uniformsList=null,ht}function Vo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=ul.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Wo(A,X){const re=D.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function ml(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(X.matrixWorld);for(let re=0,ne=A.length;re<ne;re++){const te=A[re];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function gl(A,X,re,ne,te){X.isScene!==!0&&(X=Vt),M.resetTextureUnits();const be=X.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ce=Y===null?G.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Et.workingColorSpace,je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=K.get(ne.envMap||He,je),ut=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ht=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!re.morphAttributes.position,At=!!re.morphAttributes.normal,Wt=!!re.morphAttributes.color;let Zt=bi;ne.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Zt=G.toneMapping);const kt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,un=kt!==void 0?kt.length:0,Be=D.get(ne),wn=b.state.lights;if(Ut===!0&&(ct===!0||A!==Z)){const zt=A===Z&&ne.id===ee;Fe.setState(ne,A,zt)}let yt=!1;ne.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wn.state.version||Be.outputColorSpace!==Ce||te.isBatchedMesh&&Be.batching===!1||!te.isBatchedMesh&&Be.batching===!0||te.isBatchedMesh&&Be.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Be.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Be.instancing===!1||!te.isInstancedMesh&&Be.instancing===!0||te.isSkinnedMesh&&Be.skinning===!1||!te.isSkinnedMesh&&Be.skinning===!0||te.isInstancedMesh&&Be.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Be.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Be.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Be.instancingMorph===!1&&te.morphTexture!==null||Be.envMap!==Qe||ne.fog===!0&&Be.fog!==be||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Fe.numPlanes||Be.numIntersection!==Fe.numIntersection)||Be.vertexAlphas!==ut||Be.vertexTangents!==ht||Be.morphTargets!==Ke||Be.morphNormals!==At||Be.morphColors!==Wt||Be.toneMapping!==Zt||Be.morphTargetsCount!==un||!!Be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Be.__version=ne.version);let Xn=Be.currentProgram;yt===!0&&(Xn=Ks(ne,X,te),$&&ne.isNodeMaterial&&$.onUpdateProgram(ne,Xn,Be));let Yn=!1,xt=!1,or=!1;const Nt=Xn.getUniforms(),jt=Be.uniforms;if(De.useProgram(Xn.program)&&(Yn=!0,xt=!0,or=!0),ne.id!==ee&&(ee=ne.id,xt=!0),Be.needsLights){const zt=ml(b.state.lightProbeGridArray,te);Be.lightProbeGrid!==zt&&(Be.lightProbeGrid=zt,xt=!0)}if(Yn||Z!==A){De.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(V,"projectionMatrix",A.projectionMatrix),Nt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ei=Nt.map.cameraPosition;Ei!==void 0&&Ei.setValue(V,Dt.setFromMatrixPosition(A.matrixWorld)),Bt.logarithmicDepthBuffer&&Nt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,xt=!0,or=!0)}if(Be.needsLights&&(wn.state.directionalShadowMap.length>0&&Nt.setValue(V,"directionalShadowMap",wn.state.directionalShadowMap,M),wn.state.spotShadowMap.length>0&&Nt.setValue(V,"spotShadowMap",wn.state.spotShadowMap,M),wn.state.pointShadowMap.length>0&&Nt.setValue(V,"pointShadowMap",wn.state.pointShadowMap,M)),te.isSkinnedMesh){Nt.setOptional(V,te,"bindMatrix"),Nt.setOptional(V,te,"bindMatrixInverse");const zt=te.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Nt.setValue(V,"boneTexture",zt.boneTexture,M))}te.isBatchedMesh&&(Nt.setOptional(V,te,"batchingTexture"),Nt.setValue(V,"batchingTexture",te._matricesTexture,M),Nt.setOptional(V,te,"batchingIdTexture"),Nt.setValue(V,"batchingIdTexture",te._indirectTexture,M),Nt.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Nt.setValue(V,"batchingColorTexture",te._colorsTexture,M));const Mi=re.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&rt.update(te,re,Xn),(xt||Be.receiveShadow!==te.receiveShadow)&&(Be.receiveShadow=te.receiveShadow,Nt.setValue(V,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(jt.envMapIntensity.value=X.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=vM()),xt){if(Nt.setValue(V,"toneMappingExposure",G.toneMappingExposure),Be.needsLights&&vh(jt,or),be&&ne.fog===!0&&ue.refreshFogUniforms(jt,be),ue.refreshMaterialUniforms(jt,ne,Ae,ze,b.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const zt=Be.lightProbeGrid;jt.probesSH.value=zt.texture,jt.probesMin.value.copy(zt.boundingBox.min),jt.probesMax.value.copy(zt.boundingBox.max),jt.probesResolution.value.copy(zt.resolution)}ul.upload(V,Vo(Be),jt,M)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ul.upload(V,Vo(Be),jt,M),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(V,"center",te.center),Nt.setValue(V,"modelViewMatrix",te.modelViewMatrix),Nt.setValue(V,"normalMatrix",te.normalMatrix),Nt.setValue(V,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const zt=ne.uniformsGroups;for(let Ei=0,Hi=zt.length;Ei<Hi;Ei++){const as=zt[Ei];he.update(as,Xn),he.bind(as,Xn)}}return Xn}function vh(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function _h(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,re){const ne=D.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=X,D.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const re=D.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const en=V.createFramebuffer();this.setRenderTarget=function(A,X=0,re=0){Y=A,le=X,ce=re;let ne=null,te=!1,be=!1;if(A){const Ce=D.get(A);if(Ce.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(V.FRAMEBUFFER,Ce.__webglFramebuffer),q.copy(A.viewport),ae.copy(A.scissor),oe=A.scissorTest,De.viewport(q),De.scissor(ae),De.setScissorTest(oe),ee=-1;return}else if(Ce.__webglFramebuffer===void 0)M.setupRenderTarget(A);else if(Ce.__hasExternalTextures)M.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ut=A.depthTexture;if(Ce.__boundDepthTexture!==ut){if(ut!==null&&D.has(ut)&&(A.width!==ut.image.width||A.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(be=!0);const Qe=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?ne=Qe[X][re]:ne=Qe[X],te=!0):A.samples>0&&M.useMultisampledRTT(A)===!1?ne=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[re]:ne=Qe,q.copy(A.viewport),ae.copy(A.scissor),oe=A.scissorTest}else q.copy(de).multiplyScalar(Ae).floor(),ae.copy(Te).multiplyScalar(Ae).floor(),oe=Ge;if(re!==0&&(ne=en),De.bindFramebuffer(V.FRAMEBUFFER,ne)&&De.drawBuffers(A,ne),De.viewport(q),De.scissor(ae),De.setScissorTest(oe),te){const Ce=D.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,re)}else if(be){const Ce=X;for(let je=0;je<A.textures.length;je++){const Qe=D.get(A.textures[je]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+je,Qe.__webglTexture,re,Ce)}}else if(A!==null&&re!==0){const Ce=D.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ce.__webglTexture,re)}ee=-1},this.readRenderTargetPixels=function(A,X,re,ne,te,be,He,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je){De.bindFramebuffer(V.FRAMEBUFFER,je);try{const Qe=A.textures[Ce],ut=Qe.format,ht=Qe.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!Bt.textureFormatReadable(ut)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(ht)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ne&&re>=0&&re<=A.height-te&&V.readPixels(X,re,ne,te,H.convert(ut),H.convert(ht),be)}finally{const Qe=Y!==null?D.get(Y).__webglFramebuffer:null;De.bindFramebuffer(V.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,ne,te,be,He,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je)if(X>=0&&X<=A.width-ne&&re>=0&&re<=A.height-te){De.bindFramebuffer(V.FRAMEBUFFER,je);const Qe=A.textures[Ce],ut=Qe.format,ht=Qe.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!Bt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.bufferData(V.PIXEL_PACK_BUFFER,be.byteLength,V.STREAM_READ),V.readPixels(X,re,ne,te,H.convert(ut),H.convert(ht),0);const At=Y!==null?D.get(Y).__webglFramebuffer:null;De.bindFramebuffer(V.FRAMEBUFFER,At);const Wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Iv(V,Wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ke),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,be),V.deleteBuffer(Ke),V.deleteSync(Wt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){const ne=Math.pow(2,-re),te=Math.floor(A.image.width*ne),be=Math.floor(A.image.height*ne),He=X!==null?X.x:0,Ce=X!==null?X.y:0;M.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,He,Ce,te,be),De.unbindTexture()};const yh=V.createFramebuffer(),Xo=V.createFramebuffer();this.copyTextureToTexture=function(A,X,re=null,ne=null,te=0,be=0){let He,Ce,je,Qe,ut,ht,Ke,At,Wt;const Zt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(re!==null)He=re.max.x-re.min.x,Ce=re.max.y-re.min.y,je=re.isBox3?re.max.z-re.min.z:1,Qe=re.min.x,ut=re.min.y,ht=re.isBox3?re.min.z:0;else{const jt=Math.pow(2,-te);He=Math.floor(Zt.width*jt),Ce=Math.floor(Zt.height*jt),A.isDataArrayTexture?je=Zt.depth:A.isData3DTexture?je=Math.floor(Zt.depth*jt):je=1,Qe=0,ut=0,ht=0}ne!==null?(Ke=ne.x,At=ne.y,Wt=ne.z):(Ke=0,At=0,Wt=0);const kt=H.convert(X.format),un=H.convert(X.type);let Be;X.isData3DTexture?(M.setTexture3D(X,0),Be=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(M.setTexture2DArray(X,0),Be=V.TEXTURE_2D_ARRAY):(M.setTexture2D(X,0),Be=V.TEXTURE_2D),De.activeTexture(V.TEXTURE0),De.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),De.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),De.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const wn=De.getParameter(V.UNPACK_ROW_LENGTH),yt=De.getParameter(V.UNPACK_IMAGE_HEIGHT),Xn=De.getParameter(V.UNPACK_SKIP_PIXELS),Yn=De.getParameter(V.UNPACK_SKIP_ROWS),xt=De.getParameter(V.UNPACK_SKIP_IMAGES);De.pixelStorei(V.UNPACK_ROW_LENGTH,Zt.width),De.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Zt.height),De.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),De.pixelStorei(V.UNPACK_SKIP_ROWS,ut),De.pixelStorei(V.UNPACK_SKIP_IMAGES,ht);const or=A.isDataArrayTexture||A.isData3DTexture,Nt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const jt=D.get(A),Mi=D.get(X),zt=D.get(jt.__renderTarget),Ei=D.get(Mi.__renderTarget);De.bindFramebuffer(V.READ_FRAMEBUFFER,zt.__webglFramebuffer),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Hi=0;Hi<je;Hi++)or&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(A).__webglTexture,te,ht+Hi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(X).__webglTexture,be,Wt+Hi)),V.blitFramebuffer(Qe,ut,He,Ce,Ke,At,He,Ce,V.DEPTH_BUFFER_BIT,V.NEAREST);De.bindFramebuffer(V.READ_FRAMEBUFFER,null),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||D.has(A)){const jt=D.get(A),Mi=D.get(X);De.bindFramebuffer(V.READ_FRAMEBUFFER,yh),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xo);for(let zt=0;zt<je;zt++)or?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,jt.__webglTexture,te,ht+zt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,jt.__webglTexture,te),Nt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mi.__webglTexture,be,Wt+zt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Mi.__webglTexture,be),te!==0?V.blitFramebuffer(Qe,ut,He,Ce,Ke,At,He,Ce,V.COLOR_BUFFER_BIT,V.NEAREST):Nt?V.copyTexSubImage3D(Be,be,Ke,At,Wt+zt,Qe,ut,He,Ce):V.copyTexSubImage2D(Be,be,Ke,At,Qe,ut,He,Ce);De.bindFramebuffer(V.READ_FRAMEBUFFER,null),De.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Nt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Be,be,Ke,At,Wt,He,Ce,je,kt,un,Zt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Be,be,Ke,At,Wt,He,Ce,je,kt,Zt.data):V.texSubImage3D(Be,be,Ke,At,Wt,He,Ce,je,kt,un,Zt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,be,Ke,At,He,Ce,kt,un,Zt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,be,Ke,At,Zt.width,Zt.height,kt,Zt.data):V.texSubImage2D(V.TEXTURE_2D,be,Ke,At,He,Ce,kt,un,Zt);De.pixelStorei(V.UNPACK_ROW_LENGTH,wn),De.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),De.pixelStorei(V.UNPACK_SKIP_PIXELS,Xn),De.pixelStorei(V.UNPACK_SKIP_ROWS,Yn),De.pixelStorei(V.UNPACK_SKIP_IMAGES,xt),be===0&&X.generateMipmaps&&V.generateMipmap(Be),De.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&M.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?M.setTextureCube(A,0):A.isData3DTexture?M.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?M.setTexture2DArray(A,0):M.setTexture2D(A,0),De.unbindTexture()},this.resetState=function(){le=0,ce=0,Y=null,De.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const Jp={type:"change"},uh={type:"start"},Qp={type:"end"},fl=new Gu,em=new Tr,yM=Math.cos(70*bd.DEG2RAD),pn=new R,Wn=2*Math.PI,Ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hh=1e-6;class SM extends ny{constructor(e,t=null){super(e,t),this.state=Ht.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ss.ROTATE,MIDDLE:Ss.DOLLY,RIGHT:Ss.PAN},this.touches={ONE:xs.ROTATE,TWO:xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new _r,this._lastTargetPosition=new R,this._quat=new _r().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _p,this._sphericalDelta=new _p,this._scale=1,this._panOffset=new R,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new R,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MM.bind(this),this._onPointerDown=xM.bind(this),this._onPointerUp=EM.bind(this),this._onContextMenu=bM.bind(this),this._onMouseWheel=AM.bind(this),this._onKeyDown=RM.bind(this),this._onTouchStart=CM.bind(this),this._onTouchMove=PM.bind(this),this._onMouseDown=wM.bind(this),this._onMouseMove=TM.bind(this),this._interceptControlDown=LM.bind(this),this._interceptControlUp=DM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jp),this.update(),this.state=Ht.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;pn.copy(t).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Wn:r>Math.PI&&(r-=Wn),a<-Math.PI?a+=Wn:a>Math.PI&&(a-=Wn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),t.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=pn.length();u=this._clampDistance(h*this._scale);const f=h-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new R(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new R(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(fl.origin.copy(this.object.position),fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fl.direction))<yM?this.object.lookAt(this.target):(em.setFromNormalAndCoplanarPoint(this.object.up,this.target),fl.intersectPlane(em,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hh||this._lastTargetPosition.distanceToSquared(this.target)>hh?(this.dispatchEvent(Jp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wn/60*this.autoRotateSpeed*e:Wn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pn.setFromMatrixColumn(t,0),pn.multiplyScalar(-e),this._panOffset.add(pn)}_panUp(e,t){this.screenSpacePanning===!0?pn.setFromMatrixColumn(t,1):(pn.setFromMatrixColumn(t,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(e),this._panOffset.add(pn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;pn.copy(a).sub(this.target);let l=pn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,h=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function xM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function MM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function EM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qp),this.state=Ht.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ht.DOLLY;break;case Ss.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ht.ROTATE}break;case Ss.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ht.PAN}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(uh)}function TM(s){switch(this.state){case Ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function AM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ht.NONE||(s.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Qp))}function RM(s){this.enabled!==!1&&this._handleKeyDown(s)}function CM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ht.TOUCH_ROTATE;break;case xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ht.TOUCH_PAN;break;default:this.state=Ht.NONE}break;case 2:switch(this.touches.TWO){case xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ht.TOUCH_DOLLY_PAN;break;case xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ht.TOUCH_DOLLY_ROTATE;break;default:this.state=Ht.NONE}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(uh)}function PM(s){switch(this._trackPointer(s),this.state){case Ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ht.NONE}}function bM(s){this.enabled!==!1&&s.preventDefault()}function LM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class bn extends On{constructor(e,t,r,a,l){super();const u=e.computeFrenetFrames(t,!1),h=[],f=[];for(let g=0;g<=t;g++){const _=g/t,v=bd.lerp(r,a,_),y=e.getPoint(_),E=u.normals[g],C=u.binormals[g];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,P=Math.sin(S),N=Math.cos(S);h.push(y.x+v*(N*E.x+P*C.x),y.y+v*(N*E.y+P*C.y),y.z+v*(N*E.z+P*C.z))}}for(let g=0;g<t;g++)for(let _=0;_<l;_++){const v=g*(l+1)+_,y=(g+1)*(l+1)+_;f.push(v,y,v+1),f.push(y,y+1,v+1)}const p=[];for(let g=0;g<=t;g++)for(let _=0;_<=l;_++)p.push(g/t,_/l);this.setAttribute("uv",new Kt(p,2)),this.setAttribute("position",new Kt(h,3)),this.setIndex(f),this.computeVertexNormals()}}function gt(s,e=1,t=1.5){if(!s)return new Mn;const r=new $_().load(s,a=>{a.needsUpdate=!0},void 0,()=>{const a=document.createElement("canvas");a.width=a.height=4;const l=a.getContext("2d");l.fillStyle="#888888",l.fillRect(0,0,4,4),r.image=a,r.needsUpdate=!0});return r.wrapS=r.wrapT=Aa,r.repeat.set(e,-t),r}function js(s,e,t,r,a,l,u){const h=[new R(.16,-.05,0),new R(.27,-.1,0),new R(.28,-.05,0),new R(-0,-.04,0),new R(-.28,-.05,0),new R(-.27,-.1,0),new R(-.28,-.1,0)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new bn(f,100,.04,.02,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="chassis",{mesh:g,mat:p}}function zo(s,e,t,r,a,l,u){const h=[new R(.16,-.05,0),new R(.27,-.1,0),new R(.28,-.05,0),new R(-0,-.04,0),new R(-.4,-.05,0),new R(-.37,-.1,0),new R(-.4,-.1,0)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new bn(f,100,.04,.02,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="chassis",{mesh:g,mat:p}}function tm(s,e,t,r,a,l,u){const h=new pt({map:gt(s)}),f=new it(new nr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-sit-bottom",{mesh:f,mat:h}}function nm(s,e,t,r,a,l,u){const h=new pt({map:gt(s)}),f=new it(new nr(.028,.14,32),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-left-bottom",{mesh:f,mat:h}}function im(s,e,t,r,a,l,u){const h=new pt({map:gt(s)}),f=new it(new nr(.028,.14,32,64,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-right-Bottom",{mesh:f,mat:h}}function NM(s,e,t,r,a,l,u){const h=[new R(1.05,.02,.05),new R(.75,0,.03),new R(.2,0,.01),new R(.1,0,-.01),new R(-.1,.05,-.03),new R(-.5,.05,-.05)],f=new sn(h),p=new pt({map:gt(s),side:Rt}),g=new it(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="tube-right-hoop",{mesh:g,mat:p}}function IM(s,e,t,r,a,l,u){const h=[new R(1.05,.02,-.05),new R(.75,0,-.03),new R(.2,0,-.01),new R(.1,0,.01),new R(-.1,.05,.03),new R(-.5,.05,.05)],f=new sn(h),p=new pt({map:gt(s),side:Rt}),g=new it(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="tube-right-hoop",{mesh:g,mat:p}}function rm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottomHoop",{mesh:f,mat:h}}function sm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTopHoop",{mesh:f,mat:h}}function UM(s,e,t,r){const a=[new R(-.9,-.12,-.1),new R(0,-.12,-.1),new R(.6,-.12,-.1),new R(.7,0,-.12),new R(.63,.28,-.2)],l=new sn(a),u=new pt({map:gt(s),side:Rt}),h=new it(new bn(l,20,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:u}}function OM(s,e,t,r){const a=[new R(-.9,-.12,.1),new R(0,-.12,.1),new R(.6,-.12,.1),new R(.7,0,.12),new R(.63,.28,.2)],l=new sn(a),u=new pt({map:gt(s),side:Rt}),h=new it(new bn(l,100,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:u}}function om(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottom",{mesh:f,mat:h}}function am(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTop",{mesh:f,mat:h}}function lm(s,e,t,r,a,l,u){const h=[new R(.7,.4,.15),new R(.5,.4,.15),new R(.2,.4,.15),new R(-.2,.4,.15),new R(-.4,.4,.15),new R(-.2,.3,.15),new R(.5,.4,.15),new R(.7,.4,.15)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new is(f,100,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="guide",{mesh:g,mat:p}}const FM=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const a=Mt.useRef(null),l=Mt.useRef([]);return Mt.useEffect(()=>{const u=new Jr;u.name="luge",l.current=[],[js(e,-.7,.325,0,0,1.57,0),js(e,-.6,.33,0,0,1.57,0),js(e,-.5,.335,0,0,1.57,0),js(e,-.4,.34,0,0,1.57,0),js(e,-.3,.345,0,0,1.57,0),js(e,-.2,.35,0,0,1.57,0)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)}),[zo(e,-.4,.34,.2,0,0,.05),zo(e,-.4,.34,.1,0,0,.05),zo(e,-.4,.34,0,0,0,.05),zo(e,-.4,.34,-.1,0,0,.05),zo(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)}),[tm(t,-.745,.25,0,1.57,1.57,0),tm(t,-.155,.285,0,1.57,1.57,0)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)}),[nm(t,-.75,.15,-.26,0,-.1,-.4),nm(t,-.2,.16,-.26,0,0,.2)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)}),[im(t,-.75,.15,.26,0,.1,-.4),im(t,-.2,.16,.26,0,0,.2)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)});const v=NM(t,.2,.28,.24,1.57,0,3.13);u.add(v.mesh),l.current.push(v.mat);const y=IM(t,.2,.28,-.24,-1.57,0,3.13);u.add(y.mesh),l.current.push(y.mat),[rm(t,-.84,.235,.23,0,0,0),rm(t,-.84,.235,-.23,0,0,0)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)}),[sm(t,.7,.33,.184,0,0,0),sm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)});const x=UM(t,0,.19,.37);u.add(x.mesh),l.current.push(x.mat);const S=OM(t,0,.19,-.37);return u.add(S.mesh),l.current.push(S.mat),[om(t,-.88,.08,.27,0,0,0),om(t,-.88,.08,-.27,0,0,0)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)}),[am(t,.63,.465,.171,0,0,0),am(t,.63,.465,-.171,0,0,0)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)}),[lm(r,-.03,.2,.52,-1.57,0,-.1),lm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:I,mat:b})=>{u.add(I),l.current.push(b)}),a.current=u,s.add(u),()=>{s.remove(u),u.traverse(I=>{I.isMesh&&(I.geometry.dispose(),I.material.dispose())})}},[s,e,t,r]),null};function ti(s,e,t,r,a,l,u){const h=[new R(.16,-.05,0),new R(.27,-.1,0),new R(.28,-.05,0),new R(-0,-.06,0),new R(-.28,-.05,0),new R(-.27,-.1,0),new R(-.25,-.1,0)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new bn(f,100,.04,.02,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="chassis",{mesh:g,mat:p}}function cm(s,e,t,r,a,l,u){const h=new pt({map:gt(s)}),f=new it(new nr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-sit-bottom",{mesh:f,mat:h}}function um(s,e,t,r,a,l,u){const h=new pt({map:gt(s)}),f=new it(new nr(.028,.14,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-left-bottom",{mesh:f,mat:h}}function hm(s,e,t,r,a,l,u){const h=new pt({map:gt(s)}),f=new it(new nr(.028,.14,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-right-Bottom",{mesh:f,mat:h}}function BM(s,e,t,r,a,l,u){const h=[new R(.95,.02,.05),new R(.75,0,.03),new R(.2,0,.01),new R(.1,0,-.01),new R(-.1,.05,-.03),new R(-.5,.05,-.05)],f=new sn(h),p=new pt({map:gt(s),side:Rt}),g=new it(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="tube-right-hoop",{mesh:g,mat:p}}function kM(s,e,t,r,a,l,u){const h=[new R(.95,.02,-.05),new R(.75,0,-.03),new R(.2,0,-.01),new R(.1,0,.01),new R(-.1,.05,.03),new R(-.5,.05,.05)],f=new sn(h),p=new pt({map:gt(s),side:Rt}),g=new it(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="tube-right-hoop",{mesh:g,mat:p}}function fm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottomHoop",{mesh:f,mat:h}}function dm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTopHoop",{mesh:f,mat:h}}function zM(s,e,t,r){const a=[new R(-.8,-.12,-.1),new R(0,-.12,-.1),new R(.6,-.12,-.1),new R(.7,0,-.12),new R(.63,.28,-.2)],l=new sn(a),u=new pt({map:gt(s),side:Rt}),h=new it(new bn(l,20,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:u}}function HM(s,e,t,r){const a=[new R(-.8,-.12,.1),new R(0,-.12,.1),new R(.6,-.12,.1),new R(.7,0,.12),new R(.63,.28,.2)],l=new sn(a),u=new pt({map:gt(s),side:Rt}),h=new it(new bn(l,100,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:u}}function pm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottom",{mesh:f,mat:h}}function mm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTop",{mesh:f,mat:h}}function gm(s,e,t,r,a,l,u){const h=[new R(.7,.4,.15),new R(.5,.4,.15),new R(.2,.4,.15),new R(-.2,.4,.15),new R(-.4,.4,.15),new R(-.2,.3,.15),new R(.5,.4,.15),new R(.7,.4,.15)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new is(f,100,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="guide",{mesh:g,mat:p}}const GM=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const a=Mt.useRef(null),l=Mt.useRef([]);return Mt.useEffect(()=>{const u=new Jr;u.name="luge",l.current=[],[ti(e,-.56,.33,0,0,1.57,0),ti(e,-.49,.333,0,0,1.57,0),ti(e,-.42,.335,0,0,1.57,0),ti(e,-.35,.34,0,0,1.57,0),ti(e,-.27,.345,0,0,1.57,0),ti(e,-.2,.35,0,0,1.57,0),ti(e,-.4,.34,.2,0,0,.05),ti(e,-.4,.34,.13,0,0,.05),ti(e,-.4,.34,.07,0,0,.05),ti(e,-.4,.34,0,0,0,.05),ti(e,-.4,.34,-.07,0,0,.05),ti(e,-.4,.34,-.13,0,0,.05),ti(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)}),[cm(t,-.645,.25,0,1.57,1.57,0),cm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)}),[um(t,-.65,.15,-.26,0,-.1,-.4),um(t,-.1,.16,-.26,0,0,.2)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)}),[hm(t,-.65,.15,.26,0,.1,-.4),hm(t,-.1,.16,.26,0,0,.2)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)});const _=BM(t,.2,.28,.24,1.57,0,3.13);u.add(_.mesh),l.current.push(_.mat);const v=kM(t,.2,.28,-.24,-1.57,0,3.13);u.add(v.mesh),l.current.push(v.mat),[fm(t,-.74,.235,.23,0,0,0),fm(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)}),[dm(t,.7,.33,.184,0,0,0),dm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)});const C=zM(t,0,.19,.37);u.add(C.mesh),l.current.push(C.mat);const x=HM(t,0,.19,-.37);return u.add(x.mesh),l.current.push(x.mat),[pm(t,-.78,.07,.26,0,0,0),pm(t,-.78,.07,-.26,0,0,0)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)}),[mm(t,.63,.471,.169,0,0,0),mm(t,.63,.471,-.169,0,0,0)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)}),[gm(r,-.03,.2,.52,-1.57,0,-.1),gm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:L,mat:I})=>{u.add(L),l.current.push(I)}),a.current=u,s.add(u),()=>{s.remove(u),u.traverse(L=>{L.isMesh&&(L.geometry.dispose(),L.material.dispose())})}},[s,e,t,r]),null};function ni(s,e,t,r,a,l,u){const h=[new R(.16,-.05,0),new R(.27,-.1,0),new R(.28,-.05,0),new R(-0,-.06,0),new R(-.28,-.05,0),new R(-.27,-.1,0),new R(-.25,-.1,0)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new bn(f,100,.04,.02,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="chassis",{mesh:g,mat:p}}function vm(s,e,t,r,a,l,u){const h=new pt({map:gt(s)}),f=new it(new nr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-sit-bottom",{mesh:f,mat:h}}function _m(s,e,t,r,a,l,u){const h=[new R(0,-.08,.03),new R(0,-.14,0),new R(0,0,0),new R(0,.14,.03),new R(0,.06,.03)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new is(f,3,.03,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="tube-left-bottom",{mesh:g,mat:p}}function ym(s,e,t,r,a,l,u){const h=[new R(0,.08,-.03),new R(0,.14,0),new R(0,0,0),new R(0,-.12,.03),new R(0,-.06,.03)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new is(f,3,.03,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="tube-right-Bottom",{mesh:g,mat:p}}function VM(s,e,t,r,a,l,u){const h=[new R(.95,.02,.05),new R(.75,0,.03),new R(.2,0,.01),new R(.1,0,-.01),new R(-.1,.05,-.03),new R(-.5,.05,-.05)],f=new sn(h),p=new pt({map:gt(s),side:Rt}),g=new it(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="tube-right-hoop",{mesh:g,mat:p}}function WM(s,e,t,r,a,l,u){const h=[new R(.95,.02,-.05),new R(.75,0,-.03),new R(.2,0,-.01),new R(.1,0,.01),new R(-.1,.05,.03),new R(-.5,.05,.05)],f=new sn(h),p=new pt({map:gt(s),side:Rt}),g=new it(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="tube-right-hoop",{mesh:g,mat:p}}function Sm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottomHoop",{mesh:f,mat:h}}function xm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTopHoop",{mesh:f,mat:h}}function XM(s,e,t,r){const a=[new R(-.8,-.12,-.1),new R(0,-.12,-.1),new R(.6,-.12,-.1),new R(.7,0,-.12),new R(.63,.28,-.2)],l=new sn(a),u=new pt({map:gt(s),side:Rt}),h=new it(new bn(l,20,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:u}}function YM(s,e,t,r){const a=[new R(-.8,-.12,.1),new R(0,-.12,.1),new R(.6,-.12,.1),new R(.7,0,.12),new R(.63,.28,.2)],l=new sn(a),u=new pt({map:gt(s),side:Rt}),h=new it(new bn(l,100,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:u}}function Mm(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottom",{mesh:f,mat:h}}function Em(s,e,t,r,a,l,u){const h=new pt({map:gt(s),side:Rt}),f=new it(new Vn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTop",{mesh:f,mat:h}}function wm(s,e,t,r,a,l,u){const h=[new R(.7,.4,.15),new R(.5,.4,.15),new R(.2,.4,.15),new R(-.2,.4,.15),new R(-.4,.4,.15),new R(-.2,.3,.15),new R(.5,.4,.15),new R(.7,.4,.15)],f=new sn(h),p=new pt({map:gt(s)}),g=new it(new is(f,100,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,u),g.name="guide",{mesh:g,mat:p}}const jM=({scene:s,selectedColor:e,backgroundColor:t,guide:r,hoop:a,skating:l})=>{const u=Mt.useRef(null),h=Mt.useRef([]);return Mt.useEffect(()=>{const f=new Jr;f.name="luge",h.current=[],[ni(e,-.56,.33,0,0,1.57,0),ni(e,-.49,.333,0,0,1.57,0),ni(e,-.42,.335,0,0,1.57,0),ni(e,-.35,.34,0,0,1.57,0),ni(e,-.27,.345,0,0,1.57,0),ni(e,-.2,.35,0,0,1.57,0),ni(e,-.4,.34,.2,0,0,.05),ni(e,-.4,.34,.13,0,0,.05),ni(e,-.4,.34,.07,0,0,.05),ni(e,-.4,.34,0,0,0,.05),ni(e,-.4,.34,-.07,0,0,.05),ni(e,-.4,.34,-.13,0,0,.05),ni(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)}),[vm(t,-.645,.25,0,1.57,1.57,0),vm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)}),[_m(a,-.65,.16,-.26,0,0,0),_m(a,-.2,.16,-.26,0,0,0)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)}),[ym(a,-.65,.16,.26,0,0,0),ym(a,-.2,.16,.26,0,0,0)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)});const y=VM(t,.2,.28,.24,1.57,0,3.13);f.add(y.mesh),h.current.push(y.mat);const E=WM(t,.2,.28,-.24,-1.57,0,3.13);f.add(E.mesh),h.current.push(E.mat),[Sm(t,-.74,.235,.23,0,0,0),Sm(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)}),[xm(t,.7,.33,.184,0,0,0),xm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)});const S=XM(l,0,.19,.37);f.add(S.mesh),h.current.push(S.mat);const P=YM(l,0,.19,-.37);return f.add(P.mesh),h.current.push(P.mat),[Mm(l,-.78,.07,.26,0,0,0),Mm(l,-.78,.07,-.26,0,0,0)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)}),[Em(l,.63,.471,.169,0,0,0),Em(l,.63,.471,-.169,0,0,0)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)}),[wm(r,-.03,.2,.52,-1.57,0,-.1),wm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:b,mat:B})=>{f.add(b),h.current.push(B)}),u.current=f,s.add(f),()=>{s.remove(f),f.traverse(b=>{b.isMesh&&(b.geometry.dispose(),b.material.dispose())})}},[s,e,t,r,a,l]),null},qM=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');

  .lv-root *,
  .lv-root *::before,
  .lv-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .lv-root {
    --bg:            #0c0e10;
    --surface:       rgba(255, 255, 255, 0.04);
    --surface-solid: #141618;
    --border:        rgba(255, 255, 255, 0.08);
    --border-hover:  rgba(255, 255, 255, 0.18);
    --accent:        #eaff00;
    --accent-glow:   rgba(232, 248, 64, 0.12);
    --text:          #f0ede8;
    --muted:         rgba(240, 237, 232, 0.4);
    --mono:          'DM Mono', monospace;
    --display:       'Syne', sans-serif;

    position: relative;
    width: 100%;
    height: 700px;
    background: var(--bg);
    overflow: hidden;
    font-family: var(--mono);
  }

  /* ── Canvas mount ── */
  .lv-mount {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .lv-mount canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }

  /* ── Fond atmosphère ── */
  .lv-atmo {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background:
      radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232, 248, 64, 0.04) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80, 120, 255, 0.05) 0%, transparent 60%);
  }

  /* ── Réticule centre ── */
  .lv-cross {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    pointer-events: none;
    z-index: 5;
    opacity: 0.15;
  }
  .lv-cross::before,
  .lv-cross::after {
    content: '';
    position: absolute;
    background: var(--accent);
  }
  .lv-cross::before { width: 1px; height: 100%; left: 50%; top: 0; }
  .lv-cross::after  { height: 1px; width: 100%; top: 50%; left: 0; }

  /* ── Loader ── */
  .lv-loader {
    position: absolute;
    inset: 0;
    z-index: 30;
    background: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    transition: opacity 0.6s ease;
    pointer-events: all;
  }
  .lv-loader.done {
    opacity: 0;
    pointer-events: none;
  }
  .lv-ring {
    width: 36px;
    height: 36px;
    border: 1.5px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: lv-spin 0.7s linear infinite;
  }
  @keyframes lv-spin { to { transform: rotate(360deg); } }
  .lv-loader-txt {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* ── Header ── */
  .lv-header {
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    pointer-events: none;
  }
  .lv-header-left { display: flex; gap: 8px; align-items: center; }
  .lv-tag {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 4px;
    backdrop-filter: blur(8px);
  }
  .lv-tag-accent {
    color: var(--accent);
    border-color: rgba(232, 248, 64, 0.25);
    background: rgba(232, 248, 64, 0.06);
  }
  .lv-product-name {
    font-family: var(--display);
    font-size: 22px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.01em;
    text-shadow: 0 0 40px rgba(232, 248, 64, 0.2);
  }

  /* ── Sélecteur de modèle (top-center) ── */
  .lv-sled-bar {
    position: absolute;
    top: 58px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    background: var(--surface-solid);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 6px 10px;
    z-index: 10;
    backdrop-filter: blur(12px);
  }

  /* ── Hint ── */
  .lv-hint {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-transform: uppercase;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
    transition: opacity 0.8s ease;
  }

  /* ── Barre contrôles (bottom-center) ── */
  .lv-ctrl-bar {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    background: var(--surface-solid);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 8px 10px;
    z-index: 10;
    backdrop-filter: blur(12px);
  }

  /* ── Boutons communs ── */
  .lv-btn {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    background: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 7px 14px;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
    line-height: 1;
  }
  .lv-btn:hover {
    color: var(--text);
    border-color: var(--border-hover);
    background: rgba(255, 255, 255, 0.04);
  }
  .lv-btn.on {
    color: var(--accent);
    border-color: rgba(232, 248, 64, 0.35);
    background: rgba(232, 248, 64, 0.07);
  }
  .lv-sep {
    width: 1px;
    height: 18px;
    background: var(--border);
    flex-shrink: 0;
  }

  /* ── Panneau swatches (bottom-right) ── */
  .lv-color-bar {
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    z-index: 10;
  }
  .lv-color-label {
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .lv-swatches { display: flex; gap: 6px; align-items: center; }

  /* Swatch bouton image */
  .lv-sw {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    background-size: cover;
    background-position: center;
    background-color: transparent;
    flex-shrink: 0;
    padding: 0;
    outline: none;
  }
  .lv-sw:hover { transform: scale(1.18); }
  .lv-sw.active {
    border-color: var(--accent);
    box-shadow: 0 0 8px rgba(232, 248, 64, 0.45);
  }

  /* ── Panneau info (slide-in droite) ── */
  .lv-info-panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 220px;
    background: var(--surface-solid);
    border-left: 1px solid var(--border);
    padding: 24px 18px;
    z-index: 15;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .lv-info-panel.open { transform: translateX(0); }
  .lv-info-h {
    font-family: var(--display);
    font-size: 14px;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 0.02em;
  }
  .lv-info-row { display: flex; flex-direction: column; gap: 3px; }
  .lv-info-k {
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .lv-info-v {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text);
  }
  .lv-info-sep { height: 1px; background: var(--border); }
`;let Tm=!1;function $M(){if(Tm||typeof document>"u")return;const s=document.createElement("style");s.dataset.id="luge-viewer-styles",s.textContent=qM,document.head.appendChild(s),Tm=!0}const Am={Luge:{label:"Luge",ref:"TR-1",chassis:"Acier galvanisé",siege:"Polyéthylène HD",patins:"Acier inox",dimensions:"110 × 45 × 22 cm",poids:"3,2 kg",charge:"80 kg",age:"6 ans et plus"},LugeKind:{label:"Luge Kind",ref:"TR-1.5",chassis:"Acier galvanisé",siege:"Polyéthylène HD",patins:"Acier inox",dimensions:"95 × 40 × 20 cm",poids:"2,8 kg",charge:"60 kg",age:"4 ans et plus"},LugeSport:{label:"Luge Sport",ref:"TR-2",chassis:"Aluminium anodisé",siege:"Polyéthylène HD renforcé",patins:"Acier inox trempé",dimensions:"120 × 48 × 24 cm",poids:"4,1 kg",charge:"100 kg",age:"12 ans et plus"}},KM=({img1:s,img2:e,img3:t,img4:r,img5:a,wood:l,guide:u,skating:h,hoop:f})=>{const p=Mt.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:u,hoop:f,skating:h},{id:"color-2",value:e,src:e,bg:l,guide:u,hoop:f,skating:h},{id:"color-3",value:t,src:t,bg:l,guide:u,hoop:f,skating:h},{id:"color-4",value:r,src:r,bg:l,guide:u,hoop:f,skating:h},{id:"color-5",value:a,src:a,bg:l,guide:u,hoop:f,skating:h}],[s,e,t,r,a,l,u,f,h]),[g,_]=Mt.useState(p[0].value),[v,y]=Mt.useState(p[0].bg),[E,C]=Mt.useState(p[0].guide),[x,S]=Mt.useState(p[0].hoop),[P,N]=Mt.useState(p[0].skating),[L,I]=Mt.useState("Luge"),[b,B]=Mt.useState(null),[T,U]=Mt.useState(!1),[G,k]=Mt.useState(!1),[$,le]=Mt.useState(!1),[ce,Y]=Mt.useState(!1),[ee,Z]=Mt.useState(!0),q=Mt.useRef(null),ae=Mt.useRef(null),oe=Mt.useRef(null),F=Mt.useRef(null),Q=Mt.useRef(!1);Mt.useEffect(()=>{Q.current=G},[G]),Mt.useEffect(()=>{$M()},[]),Mt.useEffect(()=>{const j=setTimeout(()=>Z(!1),4e3);return()=>clearTimeout(j)},[]),Mt.useEffect(()=>{const j=q.current;if(!j)return;const ge=j.offsetWidth||800,de=j.offsetHeight||700;let Te;try{Te=new _M({antialias:!0,alpha:!0})}catch{j.innerHTML='<p style="color:rgba(240,237,232,0.4);padding:20px;font-family:monospace">Votre navigateur ne supporte pas la 3D interactive.</p>';return}Te.setSize(ge,de),Te.setPixelRatio(Math.min(window.devicePixelRatio,2)),Te.setClearColor(790032,1),j.appendChild(Te.domElement);const Ge=new h_;F.current=Ge;const $e=new ci(15,ge/de,.1,1e3);$e.position.set(3,4,-5),$e.lookAt(0,0,0),ae.current=$e,Ge.add(new J_(16777215,13));const Ut=new th(16777215,1.4);Ut.position.set(4,6,4),Ge.add(Ut);const ct=new th(15267904,.5);ct.position.set(-3,1,-2),Ge.add(ct);const wt=new th(4482815,.3);wt.position.set(0,-3,3),Ge.add(wt);const Dt=new ty(6,24,1974821,1580063);Dt.position.y=-.45,Ge.add(Dt);const st=new SM($e,Te.domElement);st.enableDamping=!0,st.dampingFactor=.09,st.target.set(0,0,0),st.update(),oe.current=st;let Vt;const Ot=()=>{Vt=requestAnimationFrame(Ot),Q.current&&(Ge.rotation.y+=.003),st.update(),Te.render(Ge,$e)};Ot();const cn=()=>{const V=j.offsetWidth,Ft=j.offsetHeight;$e.aspect=V/Ft,$e.updateProjectionMatrix(),Te.setSize(V,Ft)};return window.addEventListener("resize",cn),B(Ge),setTimeout(()=>U(!0),900),()=>{cancelAnimationFrame(Vt),window.removeEventListener("resize",cn),Te.setAnimationLoop(null),Te.dispose(),j.contains(Te.domElement)&&j.removeChild(Te.domElement)}},[]),Mt.useEffect(()=>{F.current&&F.current.traverse(j=>{j.isMesh&&j.material&&(Array.isArray(j.material)?j.material:[j.material]).forEach(de=>{de.wireframe=$})})},[$]);const Ie=Mt.useCallback(()=>{!ae.current||!oe.current||(ae.current.position.set(3,4,-5),ae.current.lookAt(0,0,0),oe.current.target.set(0,0,0),oe.current.update(),F.current&&(F.current.rotation.y=0))},[]),ze=Mt.useCallback(j=>{_(j.value),y(j.bg),C(j.guide),S(j.hoop),N(j.skating)},[]),Ae=Am[L]||Am.Luge;return Ve.createElement("div",{className:"lv-root"},Ve.createElement("div",{ref:q,className:"lv-mount"}),Ve.createElement("div",{className:"lv-atmo"}),Ve.createElement("div",{className:"lv-cross"}),Ve.createElement("div",{className:`lv-loader${T?" done":""}`},Ve.createElement("div",{className:"lv-ring"}),Ve.createElement("div",{className:"lv-loader-txt"},"Initialisation…")),Ve.createElement("div",{className:"lv-header"},Ve.createElement("div",{className:"lv-header-left"},Ve.createElement("div",{className:"lv-tag"},"Vue 3D"),Ve.createElement("div",{className:"lv-tag lv-tag-accent"},Ae.ref)),Ve.createElement("div",{className:"lv-product-name"},Ae.label)),Ve.createElement("div",{className:"lv-sled-bar"},Ve.createElement("button",{className:`lv-btn${L==="Luge"?" on":""}`,onClick:()=>I("Luge")},"Luge"),Ve.createElement("div",{className:"lv-sep"}),Ve.createElement("button",{className:`lv-btn${L==="LugeKind"?" on":""}`,onClick:()=>I("LugeKind")},"Luge Kind"),Ve.createElement("div",{className:"lv-sep"}),Ve.createElement("button",{className:`lv-btn${L==="LugeSport"?" on":""}`,onClick:()=>I("LugeSport")},"Luge Sport")),Ve.createElement("div",{className:"lv-hint",style:{opacity:ee?1:0}},"Tourner · Zoomer · Double-clic pour reset"),Ve.createElement("div",{className:"lv-color-bar"},Ve.createElement("div",{className:"lv-color-label"},"Couleur siège"),Ve.createElement("div",{className:"lv-swatches"},p.map(j=>Ve.createElement("button",{key:j.id,className:`lv-sw${g===j.value?" active":""}`,style:j.src?{backgroundImage:`url('${j.src}')`}:{backgroundColor:j.value||"#888"},onClick:()=>ze(j),title:j.id,"aria-label":`Appliquer ${j.id}`})))),Ve.createElement("div",{className:"lv-ctrl-bar"},Ve.createElement("button",{className:"lv-btn",onClick:Ie},"↺ Reset"),Ve.createElement("button",{className:`lv-btn${G?" on":""}`,onClick:()=>k(j=>!j)},G?"⏸ Auto":"▷ Auto"),Ve.createElement("div",{className:"lv-sep"}),Ve.createElement("button",{className:`lv-btn${$?" on":""}`,onClick:()=>le(j=>!j)},"⬡ Wire"),Ve.createElement("div",{className:"lv-sep"}),Ve.createElement("button",{className:`lv-btn${ce?" on":""}`,onClick:()=>Y(j=>!j)},"ℹ Info")),Ve.createElement("div",{className:`lv-info-panel${ce?" open":""}`},Ve.createElement("div",{className:"lv-info-h"},"Fiche Produit"),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Modèle"),Ve.createElement("div",{className:"lv-info-v"},Ae.label)),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Référence"),Ve.createElement("div",{className:"lv-info-v"},Ae.ref)),Ve.createElement("div",{className:"lv-info-sep"}),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Châssis"),Ve.createElement("div",{className:"lv-info-v"},Ae.chassis)),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Siège"),Ve.createElement("div",{className:"lv-info-v"},Ae.siege)),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Patins"),Ve.createElement("div",{className:"lv-info-v"},Ae.patins)),Ve.createElement("div",{className:"lv-info-sep"}),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Dimensions"),Ve.createElement("div",{className:"lv-info-v"},Ae.dimensions)),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Poids"),Ve.createElement("div",{className:"lv-info-v"},Ae.poids)),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Charge max."),Ve.createElement("div",{className:"lv-info-v"},Ae.charge)),Ve.createElement("div",{className:"lv-info-sep"}),Ve.createElement("div",{className:"lv-info-row"},Ve.createElement("div",{className:"lv-info-k"},"Âge"),Ve.createElement("div",{className:"lv-info-v"},Ae.age))),b&&L==="Luge"&&Ve.createElement(FM,{scene:b,selectedColor:g,backgroundColor:v,guide:E}),b&&L==="LugeKind"&&Ve.createElement(GM,{scene:b,selectedColor:g,backgroundColor:v,guide:E}),b&&L==="LugeSport"&&Ve.createElement(jM,{scene:b,selectedColor:g,backgroundColor:v,guide:E,hoop:x,skating:P}))};function Rm(){const s=document.getElementById("luge-configurator-root");if(s&&s.dataset.mounted!=="true"){s.dataset.mounted="true";try{const e={img1:s.dataset.img1||"",img2:s.dataset.img2||"",img3:s.dataset.img3||"",img4:s.dataset.img4||"",img5:s.dataset.img5||"",wood:s.dataset.wood||"",guide:s.dataset.guide||"",skating:s.dataset.skating||"",hoop:s.dataset.hoop||""};Qg.createRoot(s).render(Ve.createElement(KM,{...e}))}catch(e){s.innerHTML='<div style="padding:20px;color:red;font-family:sans-serif"><strong>Erreur configurateur 3D :</strong> '+e.message+"</div>"}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Rm):Rm()})();
