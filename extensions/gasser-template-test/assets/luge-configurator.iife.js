(function(){"use strict";if(typeof Cv>"u")var Cv={env:{NODE_ENV:"production"}};function bv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uc={exports:{}},Rt={},ph;function Pv(){if(ph)return Rt;ph=1;/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function v(R){return R===null||typeof R!="object"?null:(R=_&&R[_]||R["@@iterator"],typeof R=="function"?R:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,P={};function x(R,X,he){this.props=R,this.context=X,this.refs=P,this.updater=he||y}x.prototype.isReactComponent={},x.prototype.setState=function(R,X){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,X,"setState")},x.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function S(){}S.prototype=x.prototype;function D(R,X,he){this.props=R,this.context=X,this.refs=P,this.updater=he||y}var U=D.prototype=new S;U.constructor=D,E(U,x.prototype),U.isPureReactComponent=!0;var L=Array.isArray,N=Object.prototype.hasOwnProperty,C={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function A(R,X,he){var Re,Ee={},K=null,_e=null;if(X!=null)for(Re in X.ref!==void 0&&(_e=X.ref),X.key!==void 0&&(K=""+X.key),X)N.call(X,Re)&&!O.hasOwnProperty(Re)&&(Ee[Re]=X[Re]);var fe=arguments.length-2;if(fe===1)Ee.children=he;else if(1<fe){for(var Ne=Array(fe),qe=0;qe<fe;qe++)Ne[qe]=arguments[qe+2];Ee.children=Ne}if(R&&R.defaultProps)for(Re in fe=R.defaultProps,fe)Ee[Re]===void 0&&(Ee[Re]=fe[Re]);return{$$typeof:s,type:R,key:K,ref:_e,props:Ee,_owner:C.current}}function F(R,X){return{$$typeof:s,type:R.type,key:X,ref:R.ref,props:R.props,_owner:R._owner}}function W(R){return typeof R=="object"&&R!==null&&R.$$typeof===s}function k(R){var X={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(he){return X[he]})}var Z=/\/+/g;function se(R,X){return typeof R=="object"&&R!==null&&R.key!=null?k(""+R.key):X.toString(36)}function ce(R,X,he,Re,Ee){var K=typeof R;(K==="undefined"||K==="boolean")&&(R=null);var _e=!1;if(R===null)_e=!0;else switch(K){case"string":case"number":_e=!0;break;case"object":switch(R.$$typeof){case s:case e:_e=!0}}if(_e)return _e=R,Ee=Ee(_e),R=Re===""?"."+se(_e,0):Re,L(Ee)?(he="",R!=null&&(he=R.replace(Z,"$&/")+"/"),ce(Ee,X,he,"",function(qe){return qe})):Ee!=null&&(W(Ee)&&(Ee=F(Ee,he+(!Ee.key||_e&&_e.key===Ee.key?"":(""+Ee.key).replace(Z,"$&/")+"/")+R)),X.push(Ee)),1;if(_e=0,Re=Re===""?".":Re+":",L(R))for(var fe=0;fe<R.length;fe++){K=R[fe];var Ne=Re+se(K,fe);_e+=ce(K,X,he,Ne,Ee)}else if(Ne=v(R),typeof Ne=="function")for(R=Ne.call(R),fe=0;!(K=R.next()).done;)K=K.value,Ne=Re+se(K,fe++),_e+=ce(K,X,he,Ne,Ee);else if(K==="object")throw X=String(R),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return _e}function Y(R,X,he){if(R==null)return R;var Re=[],Ee=0;return ce(R,Re,"","",function(K){return X.call(he,K,Ee++)}),Re}function Q(R){if(R._status===-1){var X=R._result;X=X(),X.then(function(he){(R._status===0||R._status===-1)&&(R._status=1,R._result=he)},function(he){(R._status===0||R._status===-1)&&(R._status=2,R._result=he)}),R._status===-1&&(R._status=0,R._result=X)}if(R._status===1)return R._result.default;throw R._result}var J={current:null},j={transition:null},oe={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:j,ReactCurrentOwner:C};function re(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:Y,forEach:function(R,X,he){Y(R,function(){X.apply(this,arguments)},he)},count:function(R){var X=0;return Y(R,function(){X++}),X},toArray:function(R){return Y(R,function(X){return X})||[]},only:function(R){if(!W(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Rt.Component=x,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=D,Rt.StrictMode=r,Rt.Suspense=d,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,Rt.act=re,Rt.cloneElement=function(R,X,he){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var Re=E({},R.props),Ee=R.key,K=R.ref,_e=R._owner;if(X!=null){if(X.ref!==void 0&&(K=X.ref,_e=C.current),X.key!==void 0&&(Ee=""+X.key),R.type&&R.type.defaultProps)var fe=R.type.defaultProps;for(Ne in X)N.call(X,Ne)&&!O.hasOwnProperty(Ne)&&(Re[Ne]=X[Ne]===void 0&&fe!==void 0?fe[Ne]:X[Ne])}var Ne=arguments.length-2;if(Ne===1)Re.children=he;else if(1<Ne){fe=Array(Ne);for(var qe=0;qe<Ne;qe++)fe[qe]=arguments[qe+2];Re.children=fe}return{$$typeof:s,type:R.type,key:Ee,ref:K,props:Re,_owner:_e}},Rt.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:l,_context:R},R.Consumer=R},Rt.createElement=A,Rt.createFactory=function(R){var X=A.bind(null,R);return X.type=R,X},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(R){return{$$typeof:f,render:R}},Rt.isValidElement=W,Rt.lazy=function(R){return{$$typeof:p,_payload:{_status:-1,_result:R},_init:Q}},Rt.memo=function(R,X){return{$$typeof:h,type:R,compare:X===void 0?null:X}},Rt.startTransition=function(R){var X=j.transition;j.transition={};try{R()}finally{j.transition=X}},Rt.unstable_act=re,Rt.useCallback=function(R,X){return J.current.useCallback(R,X)},Rt.useContext=function(R){return J.current.useContext(R)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(R){return J.current.useDeferredValue(R)},Rt.useEffect=function(R,X){return J.current.useEffect(R,X)},Rt.useId=function(){return J.current.useId()},Rt.useImperativeHandle=function(R,X,he){return J.current.useImperativeHandle(R,X,he)},Rt.useInsertionEffect=function(R,X){return J.current.useInsertionEffect(R,X)},Rt.useLayoutEffect=function(R,X){return J.current.useLayoutEffect(R,X)},Rt.useMemo=function(R,X){return J.current.useMemo(R,X)},Rt.useReducer=function(R,X,he){return J.current.useReducer(R,X,he)},Rt.useRef=function(R){return J.current.useRef(R)},Rt.useState=function(R){return J.current.useState(R)},Rt.useSyncExternalStore=function(R,X,he){return J.current.useSyncExternalStore(R,X,he)},Rt.useTransition=function(){return J.current.useTransition()},Rt.version="18.3.1",Rt}var mh;function gh(){return mh||(mh=1,Uc.exports=Pv()),Uc.exports}var Me=gh();const ue=bv(Me);var Fa={},Fc={exports:{}},Hn={},Oc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function Lv(){return vh||(vh=1,(function(s){function e(j,oe){var re=j.length;j.push(oe);e:for(;0<re;){var R=re-1>>>1,X=j[R];if(0<o(X,oe))j[R]=oe,j[re]=X,re=R;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var oe=j[0],re=j.pop();if(re!==oe){j[0]=re;e:for(var R=0,X=j.length,he=X>>>1;R<he;){var Re=2*(R+1)-1,Ee=j[Re],K=Re+1,_e=j[K];if(0>o(Ee,re))K<X&&0>o(_e,Ee)?(j[R]=_e,j[K]=re,R=K):(j[R]=Ee,j[Re]=re,R=Re);else if(K<X&&0>o(_e,re))j[R]=_e,j[K]=re,R=K;else break e}}return oe}function o(j,oe){var re=j.sortIndex-oe.sortIndex;return re!==0?re:j.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],p=1,_=null,v=3,y=!1,E=!1,P=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(j){for(var oe=t(h);oe!==null;){if(oe.callback===null)r(h);else if(oe.startTime<=j)r(h),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(h)}}function L(j){if(P=!1,U(j),!E)if(t(d)!==null)E=!0,Q(N);else{var oe=t(h);oe!==null&&J(L,oe.startTime-j)}}function N(j,oe){E=!1,P&&(P=!1,S(A),A=-1),y=!0;var re=v;try{for(U(oe),_=t(d);_!==null&&(!(_.expirationTime>oe)||j&&!k());){var R=_.callback;if(typeof R=="function"){_.callback=null,v=_.priorityLevel;var X=R(_.expirationTime<=oe);oe=s.unstable_now(),typeof X=="function"?_.callback=X:_===t(d)&&r(d),U(oe)}else r(d);_=t(d)}if(_!==null)var he=!0;else{var Re=t(h);Re!==null&&J(L,Re.startTime-oe),he=!1}return he}finally{_=null,v=re,y=!1}}var C=!1,O=null,A=-1,F=5,W=-1;function k(){return!(s.unstable_now()-W<F)}function Z(){if(O!==null){var j=s.unstable_now();W=j;var oe=!0;try{oe=O(!0,j)}finally{oe?se():(C=!1,O=null)}}else C=!1}var se;if(typeof D=="function")se=function(){D(Z)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Y=ce.port2;ce.port1.onmessage=Z,se=function(){Y.postMessage(null)}}else se=function(){x(Z,0)};function Q(j){O=j,C||(C=!0,se())}function J(j,oe){A=x(function(){j(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,Q(N))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(j){switch(v){case 1:case 2:case 3:var oe=3;break;default:oe=v}var re=v;v=oe;try{return j()}finally{v=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,oe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var re=v;v=j;try{return oe()}finally{v=re}},s.unstable_scheduleCallback=function(j,oe,re){var R=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?R+re:R):re=R,j){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=re+X,j={id:p++,callback:oe,priorityLevel:j,startTime:re,expirationTime:X,sortIndex:-1},re>R?(j.sortIndex=re,e(h,j),t(d)===null&&j===t(h)&&(P?(S(A),A=-1):P=!0,J(L,re-R))):(j.sortIndex=X,e(d,j),E||y||(E=!0,Q(N))),j},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(j){var oe=v;return function(){var re=v;v=oe;try{return j.apply(this,arguments)}finally{v=re}}}})(zc)),zc}var _h;function Dv(){return _h||(_h=1,Oc.exports=Lv()),Oc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function Iv(){if(yh)return Hn;yh=1;var s=gh(),e=Dv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function v(n){return d.call(_,n)?!0:d.call(p,n)?!1:h.test(n)?_[n]=!0:(p[n]=!0,!1)}function y(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||y(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(n,i,a,u,m,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new P(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new P(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new P(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new P(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new P(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new P(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new P(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new P(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new P(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,D);x[i]=new P(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,D);x[i]=new P(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,D);x[i]=new P(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new P(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new P(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,a,u){var m=x.hasOwnProperty(i)?x[i]:null;(m!==null?m.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,m,u)&&(a=null),u||m===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):m.mustUseProperty?n[m.propertyName]=a===null?m.type===3?!1:"":a:(i=m.attributeName,u=m.attributeNamespace,a===null?n.removeAttribute(i):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),k=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),j=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,R;function X(n){if(R===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);R=i&&i[1]||""}return`
`+R+n}var he=!1;function Re(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var u=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){u=le}n.call(i.prototype)}else{try{throw Error()}catch(le){u=le}n()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var m=le.stack.split(`
`),g=u.stack.split(`
`),T=m.length-1,z=g.length-1;1<=T&&0<=z&&m[T]!==g[z];)z--;for(;1<=T&&0<=z;T--,z--)if(m[T]!==g[z]){if(T!==1||z!==1)do if(T--,z--,0>z||m[T]!==g[z]){var G=`
`+m[T].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=T&&0<=z);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?X(n):""}function Ee(n){switch(n.tag){case 5:return X(n.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function K(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case C:return"Portal";case F:return"Profiler";case A:return"StrictMode";case se:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:K(n.type)||"Memo";case Q:i=n._payload,n=n._init;try{return K(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(n){var i=Ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return m.call(this)},set:function(T){u=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function He(n){n._valueTracker||(n._valueTracker=qe(n))}function ye(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ne(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Pe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ke(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ft(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function Dt(n,i){lt(n,i);var a=fe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?zt(n,i.type,a):i.hasOwnProperty("defaultValue")&&zt(n,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function bt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function zt(n,i,a){(i!=="number"||Pe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var H=Array.isArray;function wt(n,i,a,u){if(n=n.options,i){i={};for(var m=0;m<a.length;m++)i["$"+a[m]]=!0;for(a=0;a<n.length;a++)m=i.hasOwnProperty("$"+n[a].value),n[a].selected!==m&&(n[a].selected=m),m&&u&&(n[a].defaultSelected=!0)}else{for(a=""+fe(a),i=null,m=0;m<n.length;m++){if(n[m].value===a){n[m].selected=!0,u&&(n[m].defaultSelected=!0);return}i!==null||n[m].disabled||(i=n[m])}i!==null&&(i.selected=!0)}}function ot(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function xt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(H(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:fe(a)}}function Ce(n,i){var a=fe(i.value),u=fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function It(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?I(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var B,de=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,m){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,m)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(B=B||document.createElement("div"),B.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=B.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function me(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ae[i]=Ae[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,m=pe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,m):n[a]=m}}var Ve=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function ht(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var mt=null,Tt=null,V=null;function Ie(n){if(n=xa(n)){if(typeof mt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Kl(i),mt(n.stateNode,n.type,i))}}function ge(n){Tt?V?V.push(n):V=[n]:Tt=n}function We(){if(Tt){var n=Tt,i=V;if(V=Tt=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Oe(n,i){return n(i)}function Se(){}var Qe=!1;function gt(n,i,a){if(Qe)return n(i,a);Qe=!0;try{return Oe(n,i,a)}finally{Qe=!1,(Tt!==null||V!==null)&&(Se(),We())}}function Yt(n,i){var a=n.stateNode;if(a===null)return null;var u=Kl(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Bt=!1;if(f)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Bt=!1}function hi(n,i,a,u,m,g,T,z,G){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(we){this.onError(we)}}var ur=!1,no=null,ds=!1,io=null,fr={onError:function(n){ur=!0,no=n}};function ea(n,i,a,u,m,g,T,z,G){ur=!1,no=null,hi.apply(fr,arguments)}function Il(n,i,a,u,m,g,T,z,G){if(ea.apply(this,arguments),ur){if(ur){var le=no;ur=!1,no=null}else throw Error(t(198));ds||(ds=!0,io=le)}}function $i(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function hs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ta(n){if($i(n)!==n)throw Error(t(188))}function ro(n){var i=n.alternate;if(!i){if(i=$i(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var m=a.return;if(m===null)break;var g=m.alternate;if(g===null){if(u=m.return,u!==null){a=u;continue}break}if(m.child===g.child){for(g=m.child;g;){if(g===a)return ta(m),n;if(g===u)return ta(m),i;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=m,u=g;else{for(var T=!1,z=m.child;z;){if(z===a){T=!0,a=m,u=g;break}if(z===u){T=!0,u=m,a=g;break}z=z.sibling}if(!T){for(z=g.child;z;){if(z===a){T=!0,a=g,u=m;break}if(z===u){T=!0,u=g,a=m;break}z=z.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function na(n){return n=ro(n),n!==null?ia(n):null}function ia(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ia(n);if(i!==null)return i;n=n.sibling}return null}var Nl=e.unstable_scheduleCallback,Ul=e.unstable_cancelCallback,Of=e.unstable_shouldYield,zf=e.unstable_requestPaint,rn=e.unstable_now,Bf=e.unstable_getCurrentPriorityLevel,ra=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ae=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,ze=null;function je(n){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:vt,et=Math.log,rt=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(et(n)/rt|0)|0}var _t=64,nt=4194304;function Nt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,m=n.suspendedLanes,g=n.pingedLanes,T=a&268435455;if(T!==0){var z=T&~m;z!==0?u=Nt(z):(g&=T,g!==0&&(u=Nt(g)))}else T=a&~m,T!==0?u=Nt(T):g!==0&&(u=Nt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&m)===0&&(m=u&-u,g=i&-i,m>=g||m===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Fe(i),m=1<<a,u|=n[a],i&=~m;return u}function Qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,m=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-Fe(g),z=1<<T,G=m[T];G===-1?((z&a)===0||(z&u)!==0)&&(m[T]=Qt(z,i)):G<=i&&(n.expiredLanes|=z),g&=~z}}function fn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ye(){var n=_t;return _t<<=1,(_t&4194240)===0&&(_t=64),n}function wn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function At(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Fe(i),n[i]=a}function Xn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var m=31-Fe(a),g=1<<m;i[m]=0,u[m]=-1,n[m]=-1,a&=~g}}function Yn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Fe(a),m=1<<u;m&i|n[u]&i&&(n[u]|=i),a&=~m}}var Pt=0;function dr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ht,Kt,Ti,Xt,Ai,qi=!1,ps=[],Lr=null,Dr=null,Ir=null,sa=new Map,oa=new Map,Nr=[],PE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f0(n,i){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(i.pointerId)}}function aa(n,i,a,u,m,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[m]},i!==null&&(i=xa(i),i!==null&&Kt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,m!==null&&i.indexOf(m)===-1&&i.push(m),n)}function LE(n,i,a,u,m){switch(i){case"focusin":return Lr=aa(Lr,n,i,a,u,m),!0;case"dragenter":return Dr=aa(Dr,n,i,a,u,m),!0;case"mouseover":return Ir=aa(Ir,n,i,a,u,m),!0;case"pointerover":var g=m.pointerId;return sa.set(g,aa(sa.get(g)||null,n,i,a,u,m)),!0;case"gotpointercapture":return g=m.pointerId,oa.set(g,aa(oa.get(g)||null,n,i,a,u,m)),!0}return!1}function d0(n){var i=ms(n.target);if(i!==null){var a=$i(i);if(a!==null){if(i=a.tag,i===13){if(i=hs(a),i!==null){n.blockedOn=i,Ai(n.priority,function(){Ti(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Gf(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Le=u,a.target.dispatchEvent(u),Le=null}else return i=xa(a),i!==null&&Kt(i),n.blockedOn=a,!1;i.shift()}return!0}function h0(n,i,a){Fl(n)&&a.delete(i)}function DE(){qi=!1,Lr!==null&&Fl(Lr)&&(Lr=null),Dr!==null&&Fl(Dr)&&(Dr=null),Ir!==null&&Fl(Ir)&&(Ir=null),sa.forEach(h0),oa.forEach(h0)}function la(n,i){n.blockedOn===i&&(n.blockedOn=null,qi||(qi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,DE)))}function ca(n){function i(m){return la(m,n)}if(0<ps.length){la(ps[0],n);for(var a=1;a<ps.length;a++){var u=ps[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Lr!==null&&la(Lr,n),Dr!==null&&la(Dr,n),Ir!==null&&la(Ir,n),sa.forEach(i),oa.forEach(i),a=0;a<Nr.length;a++)u=Nr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Nr.length&&(a=Nr[0],a.blockedOn===null);)d0(a),a.blockedOn===null&&Nr.shift()}var so=L.ReactCurrentBatchConfig,Ol=!0;function IE(n,i,a,u){var m=Pt,g=so.transition;so.transition=null;try{Pt=1,kf(n,i,a,u)}finally{Pt=m,so.transition=g}}function NE(n,i,a,u){var m=Pt,g=so.transition;so.transition=null;try{Pt=4,kf(n,i,a,u)}finally{Pt=m,so.transition=g}}function kf(n,i,a,u){if(Ol){var m=Gf(n,i,a,u);if(m===null)rd(n,i,u,zl,a),f0(n,u);else if(LE(m,n,i,a,u))u.stopPropagation();else if(f0(n,u),i&4&&-1<PE.indexOf(n)){for(;m!==null;){var g=xa(m);if(g!==null&&Ht(g),g=Gf(n,i,a,u),g===null&&rd(n,i,u,zl,a),g===m)break;m=g}m!==null&&u.stopPropagation()}else rd(n,i,u,null,a)}}var zl=null;function Gf(n,i,a,u){if(zl=null,n=ht(u),n=ms(n),n!==null)if(i=$i(n),i===null)n=null;else if(a=i.tag,a===13){if(n=hs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return zl=n,null}function p0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bf()){case ra:return 1;case b:return 4;case q:case ae:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Ur=null,Hf=null,Bl=null;function m0(){if(Bl)return Bl;var n,i=Hf,a=i.length,u,m="value"in Ur?Ur.value:Ur.textContent,g=m.length;for(n=0;n<a&&i[n]===m[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===m[g-u];u++);return Bl=m.slice(n,1<u?1-u:void 0)}function kl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Gl(){return!0}function g0(){return!1}function si(n){function i(a,u,m,g,T){this._reactName=a,this._targetInst=m,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Gl:g0,this.isPropagationStopped=g0,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),i}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=si(oo),ua=re({},oo,{view:0,detail:0}),UE=si(ua),Wf,Xf,fa,Hl=re({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fa&&(fa&&n.type==="mousemove"?(Wf=n.screenX-fa.screenX,Xf=n.screenY-fa.screenY):Xf=Wf=0,fa=n),Wf)},movementY:function(n){return"movementY"in n?n.movementY:Xf}}),v0=si(Hl),FE=re({},Hl,{dataTransfer:0}),OE=si(FE),zE=re({},ua,{relatedTarget:0}),Yf=si(zE),BE=re({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),kE=si(BE),GE=re({},oo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),HE=si(GE),VE=re({},oo,{data:0}),_0=si(VE),WE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $E(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=YE[n])?!!i[n]:!1}function $f(){return $E}var qE=re({},ua,{key:function(n){if(n.key){var i=WE[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=kl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?XE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(n){return n.type==="keypress"?kl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?kl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jE=si(qE),KE=re({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y0=si(KE),ZE=re({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),JE=si(ZE),QE=re({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ew=si(QE),tw=re({},Hl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nw=si(tw),iw=[9,13,27,32],qf=f&&"CompositionEvent"in window,da=null;f&&"documentMode"in document&&(da=document.documentMode);var rw=f&&"TextEvent"in window&&!da,S0=f&&(!qf||da&&8<da&&11>=da),x0=" ",M0=!1;function E0(n,i){switch(n){case"keyup":return iw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ao=!1;function sw(n,i){switch(n){case"compositionend":return w0(i);case"keypress":return i.which!==32?null:(M0=!0,x0);case"textInput":return n=i.data,n===x0&&M0?null:n;default:return null}}function ow(n,i){if(ao)return n==="compositionend"||!qf&&E0(n,i)?(n=m0(),Bl=Hf=Ur=null,ao=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return S0&&i.locale!=="ko"?null:i.data;default:return null}}var aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!aw[n.type]:i==="textarea"}function A0(n,i,a,u){ge(u),i=$l(i,"onChange"),0<i.length&&(a=new Vf("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var ha=null,pa=null;function lw(n){W0(n,0)}function Vl(n){var i=ho(n);if(ye(i))return n}function cw(n,i){if(n==="change")return i}var R0=!1;if(f){var jf;if(f){var Kf="oninput"in document;if(!Kf){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),Kf=typeof C0.oninput=="function"}jf=Kf}else jf=!1;R0=jf&&(!document.documentMode||9<document.documentMode)}function b0(){ha&&(ha.detachEvent("onpropertychange",P0),pa=ha=null)}function P0(n){if(n.propertyName==="value"&&Vl(pa)){var i=[];A0(i,pa,n,ht(n)),gt(lw,i)}}function uw(n,i,a){n==="focusin"?(b0(),ha=i,pa=a,ha.attachEvent("onpropertychange",P0)):n==="focusout"&&b0()}function fw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vl(pa)}function dw(n,i){if(n==="click")return Vl(i)}function hw(n,i){if(n==="input"||n==="change")return Vl(i)}function pw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ri=typeof Object.is=="function"?Object.is:pw;function ma(n,i){if(Ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var m=a[u];if(!d.call(i,m)||!Ri(n[m],i[m]))return!1}return!0}function L0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function D0(n,i){var a=L0(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=L0(a)}}function I0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?I0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function N0(){for(var n=window,i=Pe();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pe(n.document)}return i}function Zf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function mw(n){var i=N0(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&I0(a.ownerDocument.documentElement,a)){if(u!==null&&Zf(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var m=a.textContent.length,g=Math.min(u.start,m);u=u.end===void 0?g:Math.min(u.end,m),!n.extend&&g>u&&(m=u,u=g,g=m),m=D0(a,g);var T=D0(a,u);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(m.node,m.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gw=f&&"documentMode"in document&&11>=document.documentMode,lo=null,Jf=null,ga=null,Qf=!1;function U0(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qf||lo==null||lo!==Pe(u)||(u=lo,"selectionStart"in u&&Zf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ga&&ma(ga,u)||(ga=u,u=$l(Jf,"onSelect"),0<u.length&&(i=new Vf("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=lo)))}function Wl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var co={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},ed={},F0={};f&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function Xl(n){if(ed[n])return ed[n];if(!co[n])return n;var i=co[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in F0)return ed[n]=i[a];return n}var O0=Xl("animationend"),z0=Xl("animationiteration"),B0=Xl("animationstart"),k0=Xl("transitionend"),G0=new Map,H0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,i){G0.set(n,i),l(i,[n])}for(var td=0;td<H0.length;td++){var nd=H0[td],vw=nd.toLowerCase(),_w=nd[0].toUpperCase()+nd.slice(1);Fr(vw,"on"+_w)}Fr(O0,"onAnimationEnd"),Fr(z0,"onAnimationIteration"),Fr(B0,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(k0,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function V0(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Il(u,i,void 0,n),n.currentTarget=null}function W0(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],m=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var T=u.length-1;0<=T;T--){var z=u[T],G=z.instance,le=z.currentTarget;if(z=z.listener,G!==g&&m.isPropagationStopped())break e;V0(m,z,le),g=G}else for(T=0;T<u.length;T++){if(z=u[T],G=z.instance,le=z.currentTarget,z=z.listener,G!==g&&m.isPropagationStopped())break e;V0(m,z,le),g=G}}}if(ds)throw n=io,ds=!1,io=null,n}function Zt(n,i){var a=i[ud];a===void 0&&(a=i[ud]=new Set);var u=n+"__bubble";a.has(u)||(X0(i,n,2,!1),a.add(u))}function id(n,i,a){var u=0;i&&(u|=4),X0(a,n,u,i)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function _a(n){if(!n[Yl]){n[Yl]=!0,r.forEach(function(a){a!=="selectionchange"&&(yw.has(a)||id(a,!1,n),id(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Yl]||(i[Yl]=!0,id("selectionchange",!1,i))}}function X0(n,i,a,u){switch(p0(i)){case 1:var m=IE;break;case 4:m=NE;break;default:m=kf}a=m.bind(null,i,a,n),m=void 0,!Bt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(m=!0),u?m!==void 0?n.addEventListener(i,a,{capture:!0,passive:m}):n.addEventListener(i,a,!0):m!==void 0?n.addEventListener(i,a,{passive:m}):n.addEventListener(i,a,!1)}function rd(n,i,a,u,m){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var z=u.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(T===4)for(T=u.return;T!==null;){var G=T.tag;if((G===3||G===4)&&(G=T.stateNode.containerInfo,G===m||G.nodeType===8&&G.parentNode===m))return;T=T.return}for(;z!==null;){if(T=ms(z),T===null)return;if(G=T.tag,G===5||G===6){u=g=T;continue e}z=z.parentNode}}u=u.return}gt(function(){var le=g,we=ht(a),Te=[];e:{var xe=G0.get(n);if(xe!==void 0){var $e=Vf,Je=n;switch(n){case"keypress":if(kl(a)===0)break e;case"keydown":case"keyup":$e=jE;break;case"focusin":Je="focus",$e=Yf;break;case"focusout":Je="blur",$e=Yf;break;case"beforeblur":case"afterblur":$e=Yf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=v0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=OE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=JE;break;case O0:case z0:case B0:$e=kE;break;case k0:$e=ew;break;case"scroll":$e=UE;break;case"wheel":$e=nw;break;case"copy":case"cut":case"paste":$e=HE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=y0}var tt=(i&4)!==0,cn=!tt&&n==="scroll",ee=tt?xe!==null?xe+"Capture":null:xe;tt=[];for(var $=le,ie;$!==null;){ie=$;var De=ie.stateNode;if(ie.tag===5&&De!==null&&(ie=De,ee!==null&&(De=Yt($,ee),De!=null&&tt.push(ya($,De,ie)))),cn)break;$=$.return}0<tt.length&&(xe=new $e(xe,Je,null,a,we),Te.push({event:xe,listeners:tt}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",xe&&a!==Le&&(Je=a.relatedTarget||a.fromElement)&&(ms(Je)||Je[hr]))break e;if(($e||xe)&&(xe=we.window===we?we:(xe=we.ownerDocument)?xe.defaultView||xe.parentWindow:window,$e?(Je=a.relatedTarget||a.toElement,$e=le,Je=Je?ms(Je):null,Je!==null&&(cn=$i(Je),Je!==cn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):($e=null,Je=le),$e!==Je)){if(tt=v0,De="onMouseLeave",ee="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(tt=y0,De="onPointerLeave",ee="onPointerEnter",$="pointer"),cn=$e==null?xe:ho($e),ie=Je==null?xe:ho(Je),xe=new tt(De,$+"leave",$e,a,we),xe.target=cn,xe.relatedTarget=ie,De=null,ms(we)===le&&(tt=new tt(ee,$+"enter",Je,a,we),tt.target=ie,tt.relatedTarget=cn,De=tt),cn=De,$e&&Je)t:{for(tt=$e,ee=Je,$=0,ie=tt;ie;ie=uo(ie))$++;for(ie=0,De=ee;De;De=uo(De))ie++;for(;0<$-ie;)tt=uo(tt),$--;for(;0<ie-$;)ee=uo(ee),ie--;for(;$--;){if(tt===ee||ee!==null&&tt===ee.alternate)break t;tt=uo(tt),ee=uo(ee)}tt=null}else tt=null;$e!==null&&Y0(Te,xe,$e,tt,!1),Je!==null&&cn!==null&&Y0(Te,cn,Je,tt,!0)}}e:{if(xe=le?ho(le):window,$e=xe.nodeName&&xe.nodeName.toLowerCase(),$e==="select"||$e==="input"&&xe.type==="file")var it=cw;else if(T0(xe))if(R0)it=hw;else{it=fw;var ct=uw}else($e=xe.nodeName)&&$e.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(it=dw);if(it&&(it=it(n,le))){A0(Te,it,a,we);break e}ct&&ct(n,xe,le),n==="focusout"&&(ct=xe._wrapperState)&&ct.controlled&&xe.type==="number"&&zt(xe,"number",xe.value)}switch(ct=le?ho(le):window,n){case"focusin":(T0(ct)||ct.contentEditable==="true")&&(lo=ct,Jf=le,ga=null);break;case"focusout":ga=Jf=lo=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,U0(Te,a,we);break;case"selectionchange":if(gw)break;case"keydown":case"keyup":U0(Te,a,we)}var ut;if(qf)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else ao?E0(n,a)&&(pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(S0&&a.locale!=="ko"&&(ao||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&ao&&(ut=m0()):(Ur=we,Hf="value"in Ur?Ur.value:Ur.textContent,ao=!0)),ct=$l(le,pt),0<ct.length&&(pt=new _0(pt,n,null,a,we),Te.push({event:pt,listeners:ct}),ut?pt.data=ut:(ut=w0(a),ut!==null&&(pt.data=ut)))),(ut=rw?sw(n,a):ow(n,a))&&(le=$l(le,"onBeforeInput"),0<le.length&&(we=new _0("onBeforeInput","beforeinput",null,a,we),Te.push({event:we,listeners:le}),we.data=ut))}W0(Te,i)})}function ya(n,i,a){return{instance:n,listener:i,currentTarget:a}}function $l(n,i){for(var a=i+"Capture",u=[];n!==null;){var m=n,g=m.stateNode;m.tag===5&&g!==null&&(m=g,g=Yt(n,a),g!=null&&u.unshift(ya(n,g,m)),g=Yt(n,i),g!=null&&u.push(ya(n,g,m))),n=n.return}return u}function uo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Y0(n,i,a,u,m){for(var g=i._reactName,T=[];a!==null&&a!==u;){var z=a,G=z.alternate,le=z.stateNode;if(G!==null&&G===u)break;z.tag===5&&le!==null&&(z=le,m?(G=Yt(a,g),G!=null&&T.unshift(ya(a,G,z))):m||(G=Yt(a,g),G!=null&&T.push(ya(a,G,z)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Sw=/\r\n?/g,xw=/\u0000|\uFFFD/g;function $0(n){return(typeof n=="string"?n:""+n).replace(Sw,`
`).replace(xw,"")}function ql(n,i,a){if(i=$0(i),$0(n)!==i&&a)throw Error(t(425))}function jl(){}var sd=null,od=null;function ad(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,Mw=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,Ew=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(n){return q0.resolve(null).then(n).catch(ww)}:ld;function ww(n){setTimeout(function(){throw n})}function cd(n,i){var a=i,u=0;do{var m=a.nextSibling;if(n.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(u===0){n.removeChild(m),ca(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=m}while(a);ca(i)}function Or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function j0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var fo=Math.random().toString(36).slice(2),ji="__reactFiber$"+fo,Sa="__reactProps$"+fo,hr="__reactContainer$"+fo,ud="__reactEvents$"+fo,Tw="__reactListeners$"+fo,Aw="__reactHandles$"+fo;function ms(n){var i=n[ji];if(i)return i;for(var a=n.parentNode;a;){if(i=a[hr]||a[ji]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=j0(n);n!==null;){if(a=n[ji])return a;n=j0(n)}return i}n=a,a=n.parentNode}return null}function xa(n){return n=n[ji]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ho(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Kl(n){return n[Sa]||null}var fd=[],po=-1;function zr(n){return{current:n}}function Jt(n){0>po||(n.current=fd[po],fd[po]=null,po--)}function jt(n,i){po++,fd[po]=n.current,n.current=i}var Br={},Dn=zr(Br),$n=zr(!1),gs=Br;function mo(n,i){var a=n.type.contextTypes;if(!a)return Br;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var m={},g;for(g in a)m[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=m),m}function qn(n){return n=n.childContextTypes,n!=null}function Zl(){Jt($n),Jt(Dn)}function K0(n,i,a){if(Dn.current!==Br)throw Error(t(168));jt(Dn,i),jt($n,a)}function Z0(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var m in u)if(!(m in i))throw Error(t(108,_e(n)||"Unknown",m));return re({},a,u)}function Jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,gs=Dn.current,jt(Dn,n),jt($n,$n.current),!0}function J0(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Z0(n,i,gs),u.__reactInternalMemoizedMergedChildContext=n,Jt($n),Jt(Dn),jt(Dn,n)):Jt($n),jt($n,a)}var pr=null,Ql=!1,dd=!1;function Q0(n){pr===null?pr=[n]:pr.push(n)}function Rw(n){Ql=!0,Q0(n)}function kr(){if(!dd&&pr!==null){dd=!0;var n=0,i=Pt;try{var a=pr;for(Pt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}pr=null,Ql=!1}catch(m){throw pr!==null&&(pr=pr.slice(n+1)),Nl(ra,kr),m}finally{Pt=i,dd=!1}}return null}var go=[],vo=0,ec=null,tc=0,pi=[],mi=0,vs=null,mr=1,gr="";function _s(n,i){go[vo++]=tc,go[vo++]=ec,ec=n,tc=i}function eg(n,i,a){pi[mi++]=mr,pi[mi++]=gr,pi[mi++]=vs,vs=n;var u=mr;n=gr;var m=32-Fe(u)-1;u&=~(1<<m),a+=1;var g=32-Fe(i)+m;if(30<g){var T=m-m%5;g=(u&(1<<T)-1).toString(32),u>>=T,m-=T,mr=1<<32-Fe(i)+m|a<<m|u,gr=g+n}else mr=1<<g|a<<m|u,gr=n}function hd(n){n.return!==null&&(_s(n,1),eg(n,1,0))}function pd(n){for(;n===ec;)ec=go[--vo],go[vo]=null,tc=go[--vo],go[vo]=null;for(;n===vs;)vs=pi[--mi],pi[mi]=null,gr=pi[--mi],pi[mi]=null,mr=pi[--mi],pi[mi]=null}var oi=null,ai=null,en=!1,Ci=null;function tg(n,i){var a=yi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ng(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,oi=n,ai=Or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,oi=n,ai=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=vs!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=yi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,oi=n,ai=null,!0):!1;default:return!1}}function md(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gd(n){if(en){var i=ai;if(i){var a=i;if(!ng(n,i)){if(md(n))throw Error(t(418));i=Or(a.nextSibling);var u=oi;i&&ng(n,i)?tg(u,a):(n.flags=n.flags&-4097|2,en=!1,oi=n)}}else{if(md(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,oi=n}}}function ig(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function nc(n){if(n!==oi)return!1;if(!en)return ig(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ad(n.type,n.memoizedProps)),i&&(i=ai)){if(md(n))throw rg(),Error(t(418));for(;i;)tg(n,i),i=Or(i.nextSibling)}if(ig(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ai=Or(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ai=null}}else ai=oi?Or(n.stateNode.nextSibling):null;return!0}function rg(){for(var n=ai;n;)n=Or(n.nextSibling)}function _o(){ai=oi=null,en=!1}function vd(n){Ci===null?Ci=[n]:Ci.push(n)}var Cw=L.ReactCurrentBatchConfig;function Ma(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var m=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var z=m.refs;T===null?delete z[g]:z[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ic(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function sg(n){var i=n._init;return i(n._payload)}function og(n){function i(ee,$){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[$],ee.flags|=16):ie.push($)}}function a(ee,$){if(!n)return null;for(;$!==null;)i(ee,$),$=$.sibling;return null}function u(ee,$){for(ee=new Map;$!==null;)$.key!==null?ee.set($.key,$):ee.set($.index,$),$=$.sibling;return ee}function m(ee,$){return ee=qr(ee,$),ee.index=0,ee.sibling=null,ee}function g(ee,$,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<$?(ee.flags|=2,$):ie):(ee.flags|=2,$)):(ee.flags|=1048576,$)}function T(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function z(ee,$,ie,De){return $===null||$.tag!==6?($=lh(ie,ee.mode,De),$.return=ee,$):($=m($,ie),$.return=ee,$)}function G(ee,$,ie,De){var it=ie.type;return it===O?we(ee,$,ie.props.children,De,ie.key):$!==null&&($.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Q&&sg(it)===$.type)?(De=m($,ie.props),De.ref=Ma(ee,$,ie),De.return=ee,De):(De=Rc(ie.type,ie.key,ie.props,null,ee.mode,De),De.ref=Ma(ee,$,ie),De.return=ee,De)}function le(ee,$,ie,De){return $===null||$.tag!==4||$.stateNode.containerInfo!==ie.containerInfo||$.stateNode.implementation!==ie.implementation?($=ch(ie,ee.mode,De),$.return=ee,$):($=m($,ie.children||[]),$.return=ee,$)}function we(ee,$,ie,De,it){return $===null||$.tag!==7?($=As(ie,ee.mode,De,it),$.return=ee,$):($=m($,ie),$.return=ee,$)}function Te(ee,$,ie){if(typeof $=="string"&&$!==""||typeof $=="number")return $=lh(""+$,ee.mode,ie),$.return=ee,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return ie=Rc($.type,$.key,$.props,null,ee.mode,ie),ie.ref=Ma(ee,null,$),ie.return=ee,ie;case C:return $=ch($,ee.mode,ie),$.return=ee,$;case Q:var De=$._init;return Te(ee,De($._payload),ie)}if(H($)||oe($))return $=As($,ee.mode,ie,null),$.return=ee,$;ic(ee,$)}return null}function xe(ee,$,ie,De){var it=$!==null?$.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return it!==null?null:z(ee,$,""+ie,De);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:return ie.key===it?G(ee,$,ie,De):null;case C:return ie.key===it?le(ee,$,ie,De):null;case Q:return it=ie._init,xe(ee,$,it(ie._payload),De)}if(H(ie)||oe(ie))return it!==null?null:we(ee,$,ie,De,null);ic(ee,ie)}return null}function $e(ee,$,ie,De,it){if(typeof De=="string"&&De!==""||typeof De=="number")return ee=ee.get(ie)||null,z($,ee,""+De,it);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case N:return ee=ee.get(De.key===null?ie:De.key)||null,G($,ee,De,it);case C:return ee=ee.get(De.key===null?ie:De.key)||null,le($,ee,De,it);case Q:var ct=De._init;return $e(ee,$,ie,ct(De._payload),it)}if(H(De)||oe(De))return ee=ee.get(ie)||null,we($,ee,De,it,null);ic($,De)}return null}function Je(ee,$,ie,De){for(var it=null,ct=null,ut=$,pt=$=0,xn=null;ut!==null&&pt<ie.length;pt++){ut.index>pt?(xn=ut,ut=null):xn=ut.sibling;var kt=xe(ee,ut,ie[pt],De);if(kt===null){ut===null&&(ut=xn);break}n&&ut&&kt.alternate===null&&i(ee,ut),$=g(kt,$,pt),ct===null?it=kt:ct.sibling=kt,ct=kt,ut=xn}if(pt===ie.length)return a(ee,ut),en&&_s(ee,pt),it;if(ut===null){for(;pt<ie.length;pt++)ut=Te(ee,ie[pt],De),ut!==null&&($=g(ut,$,pt),ct===null?it=ut:ct.sibling=ut,ct=ut);return en&&_s(ee,pt),it}for(ut=u(ee,ut);pt<ie.length;pt++)xn=$e(ut,ee,pt,ie[pt],De),xn!==null&&(n&&xn.alternate!==null&&ut.delete(xn.key===null?pt:xn.key),$=g(xn,$,pt),ct===null?it=xn:ct.sibling=xn,ct=xn);return n&&ut.forEach(function(jr){return i(ee,jr)}),en&&_s(ee,pt),it}function tt(ee,$,ie,De){var it=oe(ie);if(typeof it!="function")throw Error(t(150));if(ie=it.call(ie),ie==null)throw Error(t(151));for(var ct=it=null,ut=$,pt=$=0,xn=null,kt=ie.next();ut!==null&&!kt.done;pt++,kt=ie.next()){ut.index>pt?(xn=ut,ut=null):xn=ut.sibling;var jr=xe(ee,ut,kt.value,De);if(jr===null){ut===null&&(ut=xn);break}n&&ut&&jr.alternate===null&&i(ee,ut),$=g(jr,$,pt),ct===null?it=jr:ct.sibling=jr,ct=jr,ut=xn}if(kt.done)return a(ee,ut),en&&_s(ee,pt),it;if(ut===null){for(;!kt.done;pt++,kt=ie.next())kt=Te(ee,kt.value,De),kt!==null&&($=g(kt,$,pt),ct===null?it=kt:ct.sibling=kt,ct=kt);return en&&_s(ee,pt),it}for(ut=u(ee,ut);!kt.done;pt++,kt=ie.next())kt=$e(ut,ee,pt,kt.value,De),kt!==null&&(n&&kt.alternate!==null&&ut.delete(kt.key===null?pt:kt.key),$=g(kt,$,pt),ct===null?it=kt:ct.sibling=kt,ct=kt);return n&&ut.forEach(function(aT){return i(ee,aT)}),en&&_s(ee,pt),it}function cn(ee,$,ie,De){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case N:e:{for(var it=ie.key,ct=$;ct!==null;){if(ct.key===it){if(it=ie.type,it===O){if(ct.tag===7){a(ee,ct.sibling),$=m(ct,ie.props.children),$.return=ee,ee=$;break e}}else if(ct.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Q&&sg(it)===ct.type){a(ee,ct.sibling),$=m(ct,ie.props),$.ref=Ma(ee,ct,ie),$.return=ee,ee=$;break e}a(ee,ct);break}else i(ee,ct);ct=ct.sibling}ie.type===O?($=As(ie.props.children,ee.mode,De,ie.key),$.return=ee,ee=$):(De=Rc(ie.type,ie.key,ie.props,null,ee.mode,De),De.ref=Ma(ee,$,ie),De.return=ee,ee=De)}return T(ee);case C:e:{for(ct=ie.key;$!==null;){if($.key===ct)if($.tag===4&&$.stateNode.containerInfo===ie.containerInfo&&$.stateNode.implementation===ie.implementation){a(ee,$.sibling),$=m($,ie.children||[]),$.return=ee,ee=$;break e}else{a(ee,$);break}else i(ee,$);$=$.sibling}$=ch(ie,ee.mode,De),$.return=ee,ee=$}return T(ee);case Q:return ct=ie._init,cn(ee,$,ct(ie._payload),De)}if(H(ie))return Je(ee,$,ie,De);if(oe(ie))return tt(ee,$,ie,De);ic(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,$!==null&&$.tag===6?(a(ee,$.sibling),$=m($,ie),$.return=ee,ee=$):(a(ee,$),$=lh(ie,ee.mode,De),$.return=ee,ee=$),T(ee)):a(ee,$)}return cn}var yo=og(!0),ag=og(!1),rc=zr(null),sc=null,So=null,_d=null;function yd(){_d=So=sc=null}function Sd(n){var i=rc.current;Jt(rc),n._currentValue=i}function xd(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function xo(n,i){sc=n,_d=So=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(jn=!0),n.firstContext=null)}function gi(n){var i=n._currentValue;if(_d!==n)if(n={context:n,memoizedValue:i,next:null},So===null){if(sc===null)throw Error(t(308));So=n,sc.dependencies={lanes:0,firstContext:n}}else So=So.next=n;return i}var ys=null;function Md(n){ys===null?ys=[n]:ys.push(n)}function lg(n,i,a,u){var m=i.interleaved;return m===null?(a.next=a,Md(i)):(a.next=m.next,m.next=a),i.interleaved=a,vr(n,u)}function vr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function Ed(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Hr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var m=u.pending;return m===null?i.next=i:(i.next=m.next,m.next=i),u.pending=i,vr(n,a)}return m=u.interleaved,m===null?(i.next=i,Md(u)):(i.next=m.next,m.next=i),u.interleaved=i,vr(n,a)}function oc(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Yn(n,a)}}function ug(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var m=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?m=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?m=g=i:g=g.next=i}else m=g=i;a={baseState:u.baseState,firstBaseUpdate:m,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ac(n,i,a,u){var m=n.updateQueue;Gr=!1;var g=m.firstBaseUpdate,T=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var G=z,le=G.next;G.next=null,T===null?g=le:T.next=le,T=G;var we=n.alternate;we!==null&&(we=we.updateQueue,z=we.lastBaseUpdate,z!==T&&(z===null?we.firstBaseUpdate=le:z.next=le,we.lastBaseUpdate=G))}if(g!==null){var Te=m.baseState;T=0,we=le=G=null,z=g;do{var xe=z.lane,$e=z.eventTime;if((u&xe)===xe){we!==null&&(we=we.next={eventTime:$e,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Je=n,tt=z;switch(xe=i,$e=a,tt.tag){case 1:if(Je=tt.payload,typeof Je=="function"){Te=Je.call($e,Te,xe);break e}Te=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=tt.payload,xe=typeof Je=="function"?Je.call($e,Te,xe):Je,xe==null)break e;Te=re({},Te,xe);break e;case 2:Gr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,xe=m.effects,xe===null?m.effects=[z]:xe.push(z))}else $e={eventTime:$e,lane:xe,tag:z.tag,payload:z.payload,callback:z.callback,next:null},we===null?(le=we=$e,G=Te):we=we.next=$e,T|=xe;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;xe=z,z=xe.next,xe.next=null,m.lastBaseUpdate=xe,m.shared.pending=null}}while(!0);if(we===null&&(G=Te),m.baseState=G,m.firstBaseUpdate=le,m.lastBaseUpdate=we,i=m.shared.interleaved,i!==null){m=i;do T|=m.lane,m=m.next;while(m!==i)}else g===null&&(m.shared.lanes=0);Ms|=T,n.lanes=T,n.memoizedState=Te}}function fg(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],m=u.callback;if(m!==null){if(u.callback=null,u=a,typeof m!="function")throw Error(t(191,m));m.call(u)}}}var Ea={},Ki=zr(Ea),wa=zr(Ea),Ta=zr(Ea);function Ss(n){if(n===Ea)throw Error(t(174));return n}function wd(n,i){switch(jt(Ta,i),jt(wa,n),jt(Ki,Ea),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}Jt(Ki),jt(Ki,i)}function Mo(){Jt(Ki),Jt(wa),Jt(Ta)}function dg(n){Ss(Ta.current);var i=Ss(Ki.current),a=w(i,n.type);i!==a&&(jt(wa,n),jt(Ki,a))}function Td(n){wa.current===n&&(Jt(Ki),Jt(wa))}var sn=zr(0);function lc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ad=[];function Rd(){for(var n=0;n<Ad.length;n++)Ad[n]._workInProgressVersionPrimary=null;Ad.length=0}var cc=L.ReactCurrentDispatcher,Cd=L.ReactCurrentBatchConfig,xs=0,on=null,mn=null,yn=null,uc=!1,Aa=!1,Ra=0,bw=0;function In(){throw Error(t(321))}function bd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ri(n[a],i[a]))return!1;return!0}function Pd(n,i,a,u,m,g){if(xs=g,on=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,cc.current=n===null||n.memoizedState===null?Iw:Nw,n=a(u,m),Aa){g=0;do{if(Aa=!1,Ra=0,25<=g)throw Error(t(301));g+=1,yn=mn=null,i.updateQueue=null,cc.current=Uw,n=a(u,m)}while(Aa)}if(cc.current=hc,i=mn!==null&&mn.next!==null,xs=0,yn=mn=on=null,uc=!1,i)throw Error(t(300));return n}function Ld(){var n=Ra!==0;return Ra=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?on.memoizedState=yn=n:yn=yn.next=n,yn}function vi(){if(mn===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=yn===null?on.memoizedState:yn.next;if(i!==null)yn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?on.memoizedState=yn=n:yn=yn.next=n}return yn}function Ca(n,i){return typeof i=="function"?i(n):i}function Dd(n){var i=vi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=mn,m=u.baseQueue,g=a.pending;if(g!==null){if(m!==null){var T=m.next;m.next=g.next,g.next=T}u.baseQueue=m=g,a.pending=null}if(m!==null){g=m.next,u=u.baseState;var z=T=null,G=null,le=g;do{var we=le.lane;if((xs&we)===we)G!==null&&(G=G.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:n(u,le.action);else{var Te={lane:we,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};G===null?(z=G=Te,T=u):G=G.next=Te,on.lanes|=we,Ms|=we}le=le.next}while(le!==null&&le!==g);G===null?T=u:G.next=z,Ri(u,i.memoizedState)||(jn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=G,a.lastRenderedState=u}if(n=a.interleaved,n!==null){m=n;do g=m.lane,on.lanes|=g,Ms|=g,m=m.next;while(m!==n)}else m===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Id(n){var i=vi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,m=a.pending,g=i.memoizedState;if(m!==null){a.pending=null;var T=m=m.next;do g=n(g,T.action),T=T.next;while(T!==m);Ri(g,i.memoizedState)||(jn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,u]}function hg(){}function pg(n,i){var a=on,u=vi(),m=i(),g=!Ri(u.memoizedState,m);if(g&&(u.memoizedState=m,jn=!0),u=u.queue,Nd(vg.bind(null,a,u,n),[n]),u.getSnapshot!==i||g||yn!==null&&yn.memoizedState.tag&1){if(a.flags|=2048,ba(9,gg.bind(null,a,u,m,i),void 0,null),Sn===null)throw Error(t(349));(xs&30)!==0||mg(a,i,m)}return m}function mg(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function gg(n,i,a,u){i.value=a,i.getSnapshot=u,_g(i)&&yg(n)}function vg(n,i,a){return a(function(){_g(i)&&yg(n)})}function _g(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ri(n,a)}catch{return!0}}function yg(n){var i=vr(n,1);i!==null&&Di(i,n,1,-1)}function Sg(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},i.queue=n,n=n.dispatch=Dw.bind(null,on,n),[i.memoizedState,n]}function ba(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function xg(){return vi().memoizedState}function fc(n,i,a,u){var m=Zi();on.flags|=n,m.memoizedState=ba(1|i,a,void 0,u===void 0?null:u)}function dc(n,i,a,u){var m=vi();u=u===void 0?null:u;var g=void 0;if(mn!==null){var T=mn.memoizedState;if(g=T.destroy,u!==null&&bd(u,T.deps)){m.memoizedState=ba(i,a,g,u);return}}on.flags|=n,m.memoizedState=ba(1|i,a,g,u)}function Mg(n,i){return fc(8390656,8,n,i)}function Nd(n,i){return dc(2048,8,n,i)}function Eg(n,i){return dc(4,2,n,i)}function wg(n,i){return dc(4,4,n,i)}function Tg(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ag(n,i,a){return a=a!=null?a.concat([n]):null,dc(4,4,Tg.bind(null,i,n),a)}function Ud(){}function Rg(n,i){var a=vi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&bd(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Cg(n,i){var a=vi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&bd(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function bg(n,i,a){return(xs&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=a):(Ri(a,i)||(a=Ye(),on.lanes|=a,Ms|=a,n.baseState=!0),i)}function Pw(n,i){var a=Pt;Pt=a!==0&&4>a?a:4,n(!0);var u=Cd.transition;Cd.transition={};try{n(!1),i()}finally{Pt=a,Cd.transition=u}}function Pg(){return vi().memoizedState}function Lw(n,i,a){var u=Yr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Lg(n))Dg(i,a);else if(a=lg(n,i,a,u),a!==null){var m=Gn();Di(a,n,u,m),Ig(a,i,u)}}function Dw(n,i,a){var u=Yr(n),m={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lg(n))Dg(i,m);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,z=g(T,a);if(m.hasEagerState=!0,m.eagerState=z,Ri(z,T)){var G=i.interleaved;G===null?(m.next=m,Md(i)):(m.next=G.next,G.next=m),i.interleaved=m;return}}catch{}finally{}a=lg(n,i,m,u),a!==null&&(m=Gn(),Di(a,n,u,m),Ig(a,i,u))}}function Lg(n){var i=n.alternate;return n===on||i!==null&&i===on}function Dg(n,i){Aa=uc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Ig(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Yn(n,a)}}var hc={readContext:gi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},Iw={readContext:gi,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:gi,useEffect:Mg,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,fc(4194308,4,Tg.bind(null,i,n),a)},useLayoutEffect:function(n,i){return fc(4194308,4,n,i)},useInsertionEffect:function(n,i){return fc(4,2,n,i)},useMemo:function(n,i){var a=Zi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Zi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Lw.bind(null,on,n),[u.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:Sg,useDebugValue:Ud,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=Sg(!1),i=n[0];return n=Pw.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=on,m=Zi();if(en){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Sn===null)throw Error(t(349));(xs&30)!==0||mg(u,i,a)}m.memoizedState=a;var g={value:a,getSnapshot:i};return m.queue=g,Mg(vg.bind(null,u,g,n),[n]),u.flags|=2048,ba(9,gg.bind(null,u,g,a,i),void 0,null),a},useId:function(){var n=Zi(),i=Sn.identifierPrefix;if(en){var a=gr,u=mr;a=(u&~(1<<32-Fe(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ra++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=bw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nw={readContext:gi,useCallback:Rg,useContext:gi,useEffect:Nd,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:wg,useMemo:Cg,useReducer:Dd,useRef:xg,useState:function(){return Dd(Ca)},useDebugValue:Ud,useDeferredValue:function(n){var i=vi();return bg(i,mn.memoizedState,n)},useTransition:function(){var n=Dd(Ca)[0],i=vi().memoizedState;return[n,i]},useMutableSource:hg,useSyncExternalStore:pg,useId:Pg,unstable_isNewReconciler:!1},Uw={readContext:gi,useCallback:Rg,useContext:gi,useEffect:Nd,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:wg,useMemo:Cg,useReducer:Id,useRef:xg,useState:function(){return Id(Ca)},useDebugValue:Ud,useDeferredValue:function(n){var i=vi();return mn===null?i.memoizedState=n:bg(i,mn.memoizedState,n)},useTransition:function(){var n=Id(Ca)[0],i=vi().memoizedState;return[n,i]},useMutableSource:hg,useSyncExternalStore:pg,useId:Pg,unstable_isNewReconciler:!1};function bi(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Fd(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pc={isMounted:function(n){return(n=n._reactInternals)?$i(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Gn(),m=Yr(n),g=_r(u,m);g.payload=i,a!=null&&(g.callback=a),i=Hr(n,g,m),i!==null&&(Di(i,n,m,u),oc(i,n,m))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Gn(),m=Yr(n),g=_r(u,m);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Hr(n,g,m),i!==null&&(Di(i,n,m,u),oc(i,n,m))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Gn(),u=Yr(n),m=_r(a,u);m.tag=2,i!=null&&(m.callback=i),i=Hr(n,m,u),i!==null&&(Di(i,n,u,a),oc(i,n,u))}};function Ng(n,i,a,u,m,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,T):i.prototype&&i.prototype.isPureReactComponent?!ma(a,u)||!ma(m,g):!0}function Ug(n,i,a){var u=!1,m=Br,g=i.contextType;return typeof g=="object"&&g!==null?g=gi(g):(m=qn(i)?gs:Dn.current,u=i.contextTypes,g=(u=u!=null)?mo(n,m):Br),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pc,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=g),i}function Fg(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&pc.enqueueReplaceState(i,i.state,null)}function Od(n,i,a,u){var m=n.stateNode;m.props=a,m.state=n.memoizedState,m.refs={},Ed(n);var g=i.contextType;typeof g=="object"&&g!==null?m.context=gi(g):(g=qn(i)?gs:Dn.current,m.context=mo(n,g)),m.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Fd(n,i,g,a),m.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(i=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),i!==m.state&&pc.enqueueReplaceState(m,m.state,null),ac(n,a,m,u),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Eo(n,i){try{var a="",u=i;do a+=Ee(u),u=u.return;while(u);var m=a}catch(g){m=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:m,digest:null}}function zd(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Bd(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Fw=typeof WeakMap=="function"?WeakMap:Map;function Og(n,i,a){a=_r(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){xc||(xc=!0,eh=u),Bd(n,i)},a}function zg(n,i,a){a=_r(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var m=i.value;a.payload=function(){return u(m)},a.callback=function(){Bd(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Bd(n,i),typeof u!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Bg(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Fw;var m=new Set;u.set(i,m)}else m=u.get(i),m===void 0&&(m=new Set,u.set(i,m));m.has(a)||(m.add(a),n=Kw.bind(null,n,i,a),i.then(n,n))}function kg(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Gg(n,i,a,u,m){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=_r(-1,1),i.tag=2,Hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Ow=L.ReactCurrentOwner,jn=!1;function kn(n,i,a,u){i.child=n===null?ag(i,null,a,u):yo(i,n.child,a,u)}function Hg(n,i,a,u,m){a=a.render;var g=i.ref;return xo(i,m),u=Pd(n,i,a,u,g,m),a=Ld(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,yr(n,i,m)):(en&&a&&hd(i),i.flags|=1,kn(n,i,u,m),i.child)}function Vg(n,i,a,u,m){if(n===null){var g=a.type;return typeof g=="function"&&!ah(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Wg(n,i,g,u,m)):(n=Rc(a.type,null,u,i,i.mode,m),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&m)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(T,u)&&n.ref===i.ref)return yr(n,i,m)}return i.flags|=1,n=qr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Wg(n,i,a,u,m){if(n!==null){var g=n.memoizedProps;if(ma(g,u)&&n.ref===i.ref)if(jn=!1,i.pendingProps=u=g,(n.lanes&m)!==0)(n.flags&131072)!==0&&(jn=!0);else return i.lanes=n.lanes,yr(n,i,m)}return kd(n,i,a,u,m)}function Xg(n,i,a){var u=i.pendingProps,m=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(To,li),li|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,jt(To,li),li|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,jt(To,li),li|=u}else g!==null?(u=g.baseLanes|a,i.memoizedState=null):u=a,jt(To,li),li|=u;return kn(n,i,m,a),i.child}function Yg(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function kd(n,i,a,u,m){var g=qn(a)?gs:Dn.current;return g=mo(i,g),xo(i,m),a=Pd(n,i,a,u,g,m),u=Ld(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,yr(n,i,m)):(en&&u&&hd(i),i.flags|=1,kn(n,i,a,m),i.child)}function $g(n,i,a,u,m){if(qn(a)){var g=!0;Jl(i)}else g=!1;if(xo(i,m),i.stateNode===null)gc(n,i),Ug(i,a,u),Od(i,a,u,m),u=!0;else if(n===null){var T=i.stateNode,z=i.memoizedProps;T.props=z;var G=T.context,le=a.contextType;typeof le=="object"&&le!==null?le=gi(le):(le=qn(a)?gs:Dn.current,le=mo(i,le));var we=a.getDerivedStateFromProps,Te=typeof we=="function"||typeof T.getSnapshotBeforeUpdate=="function";Te||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==u||G!==le)&&Fg(i,T,u,le),Gr=!1;var xe=i.memoizedState;T.state=xe,ac(i,u,T,m),G=i.memoizedState,z!==u||xe!==G||$n.current||Gr?(typeof we=="function"&&(Fd(i,a,we,u),G=i.memoizedState),(z=Gr||Ng(i,a,z,u,xe,G,le))?(Te||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=G),T.props=u,T.state=G,T.context=le,u=z):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,cg(n,i),z=i.memoizedProps,le=i.type===i.elementType?z:bi(i.type,z),T.props=le,Te=i.pendingProps,xe=T.context,G=a.contextType,typeof G=="object"&&G!==null?G=gi(G):(G=qn(a)?gs:Dn.current,G=mo(i,G));var $e=a.getDerivedStateFromProps;(we=typeof $e=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==Te||xe!==G)&&Fg(i,T,u,G),Gr=!1,xe=i.memoizedState,T.state=xe,ac(i,u,T,m);var Je=i.memoizedState;z!==Te||xe!==Je||$n.current||Gr?(typeof $e=="function"&&(Fd(i,a,$e,u),Je=i.memoizedState),(le=Gr||Ng(i,a,le,u,xe,Je,G)||!1)?(we||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Je,G),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Je,G)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Je),T.props=u,T.state=Je,T.context=G,u=le):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),u=!1)}return Gd(n,i,a,u,g,m)}function Gd(n,i,a,u,m,g){Yg(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return m&&J0(i,a,!1),yr(n,i,g);u=i.stateNode,Ow.current=i;var z=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=yo(i,n.child,null,g),i.child=yo(i,null,z,g)):kn(n,i,z,g),i.memoizedState=u.state,m&&J0(i,a,!0),i.child}function qg(n){var i=n.stateNode;i.pendingContext?K0(n,i.pendingContext,i.pendingContext!==i.context):i.context&&K0(n,i.context,!1),wd(n,i.containerInfo)}function jg(n,i,a,u,m){return _o(),vd(m),i.flags|=256,kn(n,i,a,u),i.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Vd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kg(n,i,a){var u=i.pendingProps,m=sn.current,g=!1,T=(i.flags&128)!==0,z;if((z=T)||(z=n!==null&&n.memoizedState===null?!1:(m&2)!==0),z?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),jt(sn,m&1),n===null)return gd(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,g?(u=i.mode,g=i.child,T={mode:"hidden",children:T},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=Cc(T,u,0,null),n=As(n,u,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Vd(a),i.memoizedState=Hd,n):Wd(i,T));if(m=n.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return zw(n,i,T,u,z,m,a);if(g){g=u.fallback,T=i.mode,m=n.child,z=m.sibling;var G={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==m?(u=i.child,u.childLanes=0,u.pendingProps=G,i.deletions=null):(u=qr(m,G),u.subtreeFlags=m.subtreeFlags&14680064),z!==null?g=qr(z,g):(g=As(g,T,a,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,T=n.child.memoizedState,T=T===null?Vd(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~a,i.memoizedState=Hd,u}return g=n.child,n=g.sibling,u=qr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Wd(n,i){return i=Cc({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function mc(n,i,a,u){return u!==null&&vd(u),yo(i,n.child,null,a),n=Wd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function zw(n,i,a,u,m,g,T){if(a)return i.flags&256?(i.flags&=-257,u=zd(Error(t(422))),mc(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,m=i.mode,u=Cc({mode:"visible",children:u.children},m,0,null),g=As(g,m,T,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&yo(i,n.child,null,T),i.child.memoizedState=Vd(T),i.memoizedState=Hd,g);if((i.mode&1)===0)return mc(n,i,T,null);if(m.data==="$!"){if(u=m.nextSibling&&m.nextSibling.dataset,u)var z=u.dgst;return u=z,g=Error(t(419)),u=zd(g,u,void 0),mc(n,i,T,u)}if(z=(T&n.childLanes)!==0,jn||z){if(u=Sn,u!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(u.suspendedLanes|T))!==0?0:m,m!==0&&m!==g.retryLane&&(g.retryLane=m,vr(n,m),Di(u,n,m,-1))}return oh(),u=zd(Error(t(421))),mc(n,i,T,u)}return m.data==="$?"?(i.flags|=128,i.child=n.child,i=Zw.bind(null,n),m._reactRetry=i,null):(n=g.treeContext,ai=Or(m.nextSibling),oi=i,en=!0,Ci=null,n!==null&&(pi[mi++]=mr,pi[mi++]=gr,pi[mi++]=vs,mr=n.id,gr=n.overflow,vs=i),i=Wd(i,u.children),i.flags|=4096,i)}function Zg(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),xd(n.return,i,a)}function Xd(n,i,a,u,m){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:m}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=m)}function Jg(n,i,a){var u=i.pendingProps,m=u.revealOrder,g=u.tail;if(kn(n,i,u.children,a),u=sn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zg(n,a,i);else if(n.tag===19)Zg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(jt(sn,u),(i.mode&1)===0)i.memoizedState=null;else switch(m){case"forwards":for(a=i.child,m=null;a!==null;)n=a.alternate,n!==null&&lc(n)===null&&(m=a),a=a.sibling;a=m,a===null?(m=i.child,i.child=null):(m=a.sibling,a.sibling=null),Xd(i,!1,m,a,g);break;case"backwards":for(a=null,m=i.child,i.child=null;m!==null;){if(n=m.alternate,n!==null&&lc(n)===null){i.child=m;break}n=m.sibling,m.sibling=a,a=m,m=n}Xd(i,!0,a,null,g);break;case"together":Xd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function gc(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function yr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=qr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=qr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Bw(n,i,a){switch(i.tag){case 3:qg(i),_o();break;case 5:dg(i);break;case 1:qn(i.type)&&Jl(i);break;case 4:wd(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,m=i.memoizedProps.value;jt(rc,u._currentValue),u._currentValue=m;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(jt(sn,sn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Kg(n,i,a):(jt(sn,sn.current&1),n=yr(n,i,a),n!==null?n.sibling:null);jt(sn,sn.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Jg(n,i,a);i.flags|=128}if(m=i.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),jt(sn,sn.current),u)break;return null;case 22:case 23:return i.lanes=0,Xg(n,i,a)}return yr(n,i,a)}var Qg,Yd,ev,tv;Qg=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yd=function(){},ev=function(n,i,a,u){var m=n.memoizedProps;if(m!==u){n=i.stateNode,Ss(Ki.current);var g=null;switch(a){case"input":m=Ke(n,m),u=Ke(n,u),g=[];break;case"select":m=re({},m,{value:void 0}),u=re({},u,{value:void 0}),g=[];break;case"textarea":m=ot(n,m),u=ot(n,u),g=[];break;default:typeof m.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=jl)}Xe(a,u);var T;a=null;for(le in m)if(!u.hasOwnProperty(le)&&m.hasOwnProperty(le)&&m[le]!=null)if(le==="style"){var z=m[le];for(T in z)z.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?g||(g=[]):(g=g||[]).push(le,null));for(le in u){var G=u[le];if(z=m!=null?m[le]:void 0,u.hasOwnProperty(le)&&G!==z&&(G!=null||z!=null))if(le==="style")if(z){for(T in z)!z.hasOwnProperty(T)||G&&G.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in G)G.hasOwnProperty(T)&&z[T]!==G[T]&&(a||(a={}),a[T]=G[T])}else a||(g||(g=[]),g.push(le,a)),a=G;else le==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,z=z?z.__html:void 0,G!=null&&z!==G&&(g=g||[]).push(le,G)):le==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(le,""+G):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(G!=null&&le==="onScroll"&&Zt("scroll",n),g||z===G||(g=[])):(g=g||[]).push(le,G))}a&&(g=g||[]).push("style",a);var le=g;(i.updateQueue=le)&&(i.flags|=4)}},tv=function(n,i,a,u){a!==u&&(i.flags|=4)};function Pa(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var m=n.child;m!==null;)a|=m.lanes|m.childLanes,u|=m.subtreeFlags&14680064,u|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)a|=m.lanes|m.childLanes,u|=m.subtreeFlags,u|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function kw(n,i,a){var u=i.pendingProps;switch(pd(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return qn(i.type)&&Zl(),Nn(i),null;case 3:return u=i.stateNode,Mo(),Jt($n),Jt(Dn),Rd(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(nc(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(ih(Ci),Ci=null))),Yd(n,i),Nn(i),null;case 5:Td(i);var m=Ss(Ta.current);if(a=i.type,n!==null&&i.stateNode!=null)ev(n,i,a,u,m),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=Ss(Ki.current),nc(i)){u=i.stateNode,a=i.type;var g=i.memoizedProps;switch(u[ji]=i,u[Sa]=g,n=(i.mode&1)!==0,a){case"dialog":Zt("cancel",u),Zt("close",u);break;case"iframe":case"object":case"embed":Zt("load",u);break;case"video":case"audio":for(m=0;m<va.length;m++)Zt(va[m],u);break;case"source":Zt("error",u);break;case"img":case"image":case"link":Zt("error",u),Zt("load",u);break;case"details":Zt("toggle",u);break;case"input":ft(u,g),Zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Zt("invalid",u);break;case"textarea":xt(u,g),Zt("invalid",u)}Xe(a,g),m=null;for(var T in g)if(g.hasOwnProperty(T)){var z=g[T];T==="children"?typeof z=="string"?u.textContent!==z&&(g.suppressHydrationWarning!==!0&&ql(u.textContent,z,n),m=["children",z]):typeof z=="number"&&u.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&ql(u.textContent,z,n),m=["children",""+z]):o.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&Zt("scroll",u)}switch(a){case"input":He(u),bt(u,g,!0);break;case"textarea":He(u),It(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=jl)}u=m,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[ji]=i,n[Sa]=u,Qg(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ue(a,u),a){case"dialog":Zt("cancel",n),Zt("close",n),m=u;break;case"iframe":case"object":case"embed":Zt("load",n),m=u;break;case"video":case"audio":for(m=0;m<va.length;m++)Zt(va[m],n);m=u;break;case"source":Zt("error",n),m=u;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),m=u;break;case"details":Zt("toggle",n),m=u;break;case"input":ft(n,u),m=Ke(n,u),Zt("invalid",n);break;case"option":m=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},m=re({},u,{value:void 0}),Zt("invalid",n);break;case"textarea":xt(n,u),m=ot(n,u),Zt("invalid",n);break;default:m=u}Xe(a,m),z=m;for(g in z)if(z.hasOwnProperty(g)){var G=z[g];g==="style"?ve(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&de(n,G)):g==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&me(n,G):typeof G=="number"&&me(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?G!=null&&g==="onScroll"&&Zt("scroll",n):G!=null&&U(n,g,G,T))}switch(a){case"input":He(n),bt(n,u,!1);break;case"textarea":He(n),It(n);break;case"option":u.value!=null&&n.setAttribute("value",""+fe(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?wt(n,!!u.multiple,g,!1):u.defaultValue!=null&&wt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)tv(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ss(Ta.current),Ss(Ki.current),nc(i)){if(u=i.stateNode,a=i.memoizedProps,u[ji]=i,(g=u.nodeValue!==a)&&(n=oi,n!==null))switch(n.tag){case 3:ql(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ql(u.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[ji]=i,i.stateNode=u}return Nn(i),null;case 13:if(Jt(sn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ai!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rg(),_o(),i.flags|=98560,g=!1;else if(g=nc(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ji]=i}else _o(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),g=!1}else Ci!==null&&(ih(Ci),Ci=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(sn.current&1)!==0?gn===0&&(gn=3):oh())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return Mo(),Yd(n,i),n===null&&_a(i.stateNode.containerInfo),Nn(i),null;case 10:return Sd(i.type._context),Nn(i),null;case 17:return qn(i.type)&&Zl(),Nn(i),null;case 19:if(Jt(sn),g=i.memoizedState,g===null)return Nn(i),null;if(u=(i.flags&128)!==0,T=g.rendering,T===null)if(u)Pa(g,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=lc(n),T!==null){for(i.flags|=128,Pa(g,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)g=a,n=u,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return jt(sn,sn.current&1|2),i.child}n=n.sibling}g.tail!==null&&rn()>Ao&&(i.flags|=128,u=!0,Pa(g,!1),i.lanes=4194304)}else{if(!u)if(n=lc(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Pa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!en)return Nn(i),null}else 2*rn()-g.renderingStartTime>Ao&&a!==1073741824&&(i.flags|=128,u=!0,Pa(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=rn(),i.sibling=null,a=sn.current,jt(sn,u?a&1|2:a&1),i):(Nn(i),null);case 22:case 23:return sh(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(li&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Gw(n,i){switch(pd(i),i.tag){case 1:return qn(i.type)&&Zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Mo(),Jt($n),Jt(Dn),Rd(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Td(i),null;case 13:if(Jt(sn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));_o()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(sn),null;case 4:return Mo(),null;case 10:return Sd(i.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var vc=!1,Un=!1,Hw=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function wo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){ln(n,i,u)}else a.current=null}function $d(n,i,a){try{a()}catch(u){ln(n,i,u)}}var nv=!1;function Vw(n,i){if(sd=Ol,n=N0(),Zf(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var m=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,z=-1,G=-1,le=0,we=0,Te=n,xe=null;t:for(;;){for(var $e;Te!==a||m!==0&&Te.nodeType!==3||(z=T+m),Te!==g||u!==0&&Te.nodeType!==3||(G=T+u),Te.nodeType===3&&(T+=Te.nodeValue.length),($e=Te.firstChild)!==null;)xe=Te,Te=$e;for(;;){if(Te===n)break t;if(xe===a&&++le===m&&(z=T),xe===g&&++we===u&&(G=T),($e=Te.nextSibling)!==null)break;Te=xe,xe=Te.parentNode}Te=$e}a=z===-1||G===-1?null:{start:z,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:n,selectionRange:a},Ol=!1,Ze=i;Ze!==null;)if(i=Ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ze=n;else for(;Ze!==null;){i=Ze;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var tt=Je.memoizedProps,cn=Je.memoizedState,ee=i.stateNode,$=ee.getSnapshotBeforeUpdate(i.elementType===i.type?tt:bi(i.type,tt),cn);ee.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){ln(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,Ze=n;break}Ze=i.return}return Je=nv,nv=!1,Je}function La(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var m=u=u.next;do{if((m.tag&n)===n){var g=m.destroy;m.destroy=void 0,g!==void 0&&$d(i,a,g)}m=m.next}while(m!==u)}}function _c(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function qd(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function iv(n){var i=n.alternate;i!==null&&(n.alternate=null,iv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ji],delete i[Sa],delete i[ud],delete i[Tw],delete i[Aw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rv(n){return n.tag===5||n.tag===3||n.tag===4}function sv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=jl));else if(u!==4&&(n=n.child,n!==null))for(jd(n,i,a),n=n.sibling;n!==null;)jd(n,i,a),n=n.sibling}function Kd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Kd(n,i,a),n=n.sibling;n!==null;)Kd(n,i,a),n=n.sibling}var Tn=null,Pi=!1;function Vr(n,i,a){for(a=a.child;a!==null;)ov(n,i,a),a=a.sibling}function ov(n,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:Un||wo(a,i);case 6:var u=Tn,m=Pi;Tn=null,Vr(n,i,a),Tn=u,Pi=m,Tn!==null&&(Pi?(n=Tn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tn.removeChild(a.stateNode));break;case 18:Tn!==null&&(Pi?(n=Tn,a=a.stateNode,n.nodeType===8?cd(n.parentNode,a):n.nodeType===1&&cd(n,a),ca(n)):cd(Tn,a.stateNode));break;case 4:u=Tn,m=Pi,Tn=a.stateNode.containerInfo,Pi=!0,Vr(n,i,a),Tn=u,Pi=m;break;case 0:case 11:case 14:case 15:if(!Un&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){m=u=u.next;do{var g=m,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&$d(a,i,T),m=m.next}while(m!==u)}Vr(n,i,a);break;case 1:if(!Un&&(wo(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(z){ln(a,i,z)}Vr(n,i,a);break;case 21:Vr(n,i,a);break;case 22:a.mode&1?(Un=(u=Un)||a.memoizedState!==null,Vr(n,i,a),Un=u):Vr(n,i,a);break;default:Vr(n,i,a)}}function av(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Hw),i.forEach(function(u){var m=Jw.bind(null,n,u);a.has(u)||(a.add(u),u.then(m,m))})}}function Li(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var m=a[u];try{var g=n,T=i,z=T;e:for(;z!==null;){switch(z.tag){case 5:Tn=z.stateNode,Pi=!1;break e;case 3:Tn=z.stateNode.containerInfo,Pi=!0;break e;case 4:Tn=z.stateNode.containerInfo,Pi=!0;break e}z=z.return}if(Tn===null)throw Error(t(160));ov(g,T,m),Tn=null,Pi=!1;var G=m.alternate;G!==null&&(G.return=null),m.return=null}catch(le){ln(m,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)lv(i,n),i=i.sibling}function lv(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Li(i,n),Ji(n),u&4){try{La(3,n,n.return),_c(3,n)}catch(tt){ln(n,n.return,tt)}try{La(5,n,n.return)}catch(tt){ln(n,n.return,tt)}}break;case 1:Li(i,n),Ji(n),u&512&&a!==null&&wo(a,a.return);break;case 5:if(Li(i,n),Ji(n),u&512&&a!==null&&wo(a,a.return),n.flags&32){var m=n.stateNode;try{me(m,"")}catch(tt){ln(n,n.return,tt)}}if(u&4&&(m=n.stateNode,m!=null)){var g=n.memoizedProps,T=a!==null?a.memoizedProps:g,z=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&lt(m,g),Ue(z,T);var le=Ue(z,g);for(T=0;T<G.length;T+=2){var we=G[T],Te=G[T+1];we==="style"?ve(m,Te):we==="dangerouslySetInnerHTML"?de(m,Te):we==="children"?me(m,Te):U(m,we,Te,le)}switch(z){case"input":Dt(m,g);break;case"textarea":Ce(m,g);break;case"select":var xe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!g.multiple;var $e=g.value;$e!=null?wt(m,!!g.multiple,$e,!1):xe!==!!g.multiple&&(g.defaultValue!=null?wt(m,!!g.multiple,g.defaultValue,!0):wt(m,!!g.multiple,g.multiple?[]:"",!1))}m[Sa]=g}catch(tt){ln(n,n.return,tt)}}break;case 6:if(Li(i,n),Ji(n),u&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,g=n.memoizedProps;try{m.nodeValue=g}catch(tt){ln(n,n.return,tt)}}break;case 3:if(Li(i,n),Ji(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ca(i.containerInfo)}catch(tt){ln(n,n.return,tt)}break;case 4:Li(i,n),Ji(n);break;case 13:Li(i,n),Ji(n),m=n.child,m.flags&8192&&(g=m.memoizedState!==null,m.stateNode.isHidden=g,!g||m.alternate!==null&&m.alternate.memoizedState!==null||(Qd=rn())),u&4&&av(n);break;case 22:if(we=a!==null&&a.memoizedState!==null,n.mode&1?(Un=(le=Un)||we,Li(i,n),Un=le):Li(i,n),Ji(n),u&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!we&&(n.mode&1)!==0)for(Ze=n,we=n.child;we!==null;){for(Te=Ze=we;Ze!==null;){switch(xe=Ze,$e=xe.child,xe.tag){case 0:case 11:case 14:case 15:La(4,xe,xe.return);break;case 1:wo(xe,xe.return);var Je=xe.stateNode;if(typeof Je.componentWillUnmount=="function"){u=xe,a=xe.return;try{i=u,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(tt){ln(u,a,tt)}}break;case 5:wo(xe,xe.return);break;case 22:if(xe.memoizedState!==null){fv(Te);continue}}$e!==null?($e.return=xe,Ze=$e):fv(Te)}we=we.sibling}e:for(we=null,Te=n;;){if(Te.tag===5){if(we===null){we=Te;try{m=Te.stateNode,le?(g=m.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=Te.stateNode,G=Te.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null,z.style.display=pe("display",T))}catch(tt){ln(n,n.return,tt)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=le?"":Te.memoizedProps}catch(tt){ln(n,n.return,tt)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Li(i,n),Ji(n),u&4&&av(n);break;case 21:break;default:Li(i,n),Ji(n)}}function Ji(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(rv(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var m=u.stateNode;u.flags&32&&(me(m,""),u.flags&=-33);var g=sv(n);Kd(n,g,m);break;case 3:case 4:var T=u.stateNode.containerInfo,z=sv(n);jd(n,z,T);break;default:throw Error(t(161))}}catch(G){ln(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ww(n,i,a){Ze=n,cv(n)}function cv(n,i,a){for(var u=(n.mode&1)!==0;Ze!==null;){var m=Ze,g=m.child;if(m.tag===22&&u){var T=m.memoizedState!==null||vc;if(!T){var z=m.alternate,G=z!==null&&z.memoizedState!==null||Un;z=vc;var le=Un;if(vc=T,(Un=G)&&!le)for(Ze=m;Ze!==null;)T=Ze,G=T.child,T.tag===22&&T.memoizedState!==null?dv(m):G!==null?(G.return=T,Ze=G):dv(m);for(;g!==null;)Ze=g,cv(g),g=g.sibling;Ze=m,vc=z,Un=le}uv(n)}else(m.subtreeFlags&8772)!==0&&g!==null?(g.return=m,Ze=g):uv(n)}}function uv(n){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Un||_c(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Un)if(a===null)u.componentDidMount();else{var m=i.elementType===i.type?a.memoizedProps:bi(i.type,a.memoizedProps);u.componentDidUpdate(m,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&fg(i,g,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}fg(i,T,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var we=le.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&ca(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||i.flags&512&&qd(i)}catch(xe){ln(i,i.return,xe)}}if(i===n){Ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ze=a;break}Ze=i.return}}function fv(n){for(;Ze!==null;){var i=Ze;if(i===n){Ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ze=a;break}Ze=i.return}}function dv(n){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{_c(4,i)}catch(G){ln(i,a,G)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var m=i.return;try{u.componentDidMount()}catch(G){ln(i,m,G)}}var g=i.return;try{qd(i)}catch(G){ln(i,g,G)}break;case 5:var T=i.return;try{qd(i)}catch(G){ln(i,T,G)}}}catch(G){ln(i,i.return,G)}if(i===n){Ze=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Ze=z;break}Ze=i.return}}var Xw=Math.ceil,yc=L.ReactCurrentDispatcher,Zd=L.ReactCurrentOwner,_i=L.ReactCurrentBatchConfig,Ft=0,Sn=null,dn=null,An=0,li=0,To=zr(0),gn=0,Da=null,Ms=0,Sc=0,Jd=0,Ia=null,Kn=null,Qd=0,Ao=1/0,Sr=null,xc=!1,eh=null,Wr=null,Mc=!1,Xr=null,Ec=0,Na=0,th=null,wc=-1,Tc=0;function Gn(){return(Ft&6)!==0?rn():wc!==-1?wc:wc=rn()}function Yr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&An!==0?An&-An:Cw.transition!==null?(Tc===0&&(Tc=Ye()),Tc):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:p0(n.type)),n)}function Di(n,i,a,u){if(50<Na)throw Na=0,th=null,Error(t(185));At(n,a,u),((Ft&2)===0||n!==Sn)&&(n===Sn&&((Ft&2)===0&&(Sc|=a),gn===4&&$r(n,An)),Zn(n,u),a===1&&Ft===0&&(i.mode&1)===0&&(Ao=rn()+500,Ql&&kr()))}function Zn(n,i){var a=n.callbackNode;Wt(n,i);var u=qt(n,n===Sn?An:0);if(u===0)a!==null&&Ul(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Ul(a),i===1)n.tag===0?Rw(pv.bind(null,n)):Q0(pv.bind(null,n)),Ew(function(){(Ft&6)===0&&kr()}),a=null;else{switch(dr(u)){case 1:a=ra;break;case 4:a=b;break;case 16:a=q;break;case 536870912:a=ne;break;default:a=q}a=Mv(a,hv.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function hv(n,i){if(wc=-1,Tc=0,(Ft&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ro()&&n.callbackNode!==a)return null;var u=qt(n,n===Sn?An:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ac(n,u);else{i=u;var m=Ft;Ft|=2;var g=gv();(Sn!==n||An!==i)&&(Sr=null,Ao=rn()+500,ws(n,i));do try{qw();break}catch(z){mv(n,z)}while(!0);yd(),yc.current=g,Ft=m,dn!==null?i=0:(Sn=null,An=0,i=gn)}if(i!==0){if(i===2&&(m=fn(n),m!==0&&(u=m,i=nh(n,m))),i===1)throw a=Da,ws(n,0),$r(n,u),Zn(n,rn()),a;if(i===6)$r(n,u);else{if(m=n.current.alternate,(u&30)===0&&!Yw(m)&&(i=Ac(n,u),i===2&&(g=fn(n),g!==0&&(u=g,i=nh(n,g))),i===1))throw a=Da,ws(n,0),$r(n,u),Zn(n,rn()),a;switch(n.finishedWork=m,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Ts(n,Kn,Sr);break;case 3:if($r(n,u),(u&130023424)===u&&(i=Qd+500-rn(),10<i)){if(qt(n,0)!==0)break;if(m=n.suspendedLanes,(m&u)!==u){Gn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=ld(Ts.bind(null,n,Kn,Sr),i);break}Ts(n,Kn,Sr);break;case 4:if($r(n,u),(u&4194240)===u)break;for(i=n.eventTimes,m=-1;0<u;){var T=31-Fe(u);g=1<<T,T=i[T],T>m&&(m=T),u&=~g}if(u=m,u=rn()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Xw(u/1960))-u,10<u){n.timeoutHandle=ld(Ts.bind(null,n,Kn,Sr),u);break}Ts(n,Kn,Sr);break;case 5:Ts(n,Kn,Sr);break;default:throw Error(t(329))}}}return Zn(n,rn()),n.callbackNode===a?hv.bind(null,n):null}function nh(n,i){var a=Ia;return n.current.memoizedState.isDehydrated&&(ws(n,i).flags|=256),n=Ac(n,i),n!==2&&(i=Kn,Kn=a,i!==null&&ih(i)),n}function ih(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function Yw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var m=a[u],g=m.getSnapshot;m=m.value;try{if(!Ri(g(),m))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $r(n,i){for(i&=~Jd,i&=~Sc,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Fe(i),u=1<<a;n[a]=-1,i&=~u}}function pv(n){if((Ft&6)!==0)throw Error(t(327));Ro();var i=qt(n,0);if((i&1)===0)return Zn(n,rn()),null;var a=Ac(n,i);if(n.tag!==0&&a===2){var u=fn(n);u!==0&&(i=u,a=nh(n,u))}if(a===1)throw a=Da,ws(n,0),$r(n,i),Zn(n,rn()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ts(n,Kn,Sr),Zn(n,rn()),null}function rh(n,i){var a=Ft;Ft|=1;try{return n(i)}finally{Ft=a,Ft===0&&(Ao=rn()+500,Ql&&kr())}}function Es(n){Xr!==null&&Xr.tag===0&&(Ft&6)===0&&Ro();var i=Ft;Ft|=1;var a=_i.transition,u=Pt;try{if(_i.transition=null,Pt=1,n)return n()}finally{Pt=u,_i.transition=a,Ft=i,(Ft&6)===0&&kr()}}function sh(){li=To.current,Jt(To)}function ws(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Mw(a)),dn!==null)for(a=dn.return;a!==null;){var u=a;switch(pd(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Zl();break;case 3:Mo(),Jt($n),Jt(Dn),Rd();break;case 5:Td(u);break;case 4:Mo();break;case 13:Jt(sn);break;case 19:Jt(sn);break;case 10:Sd(u.type._context);break;case 22:case 23:sh()}a=a.return}if(Sn=n,dn=n=qr(n.current,null),An=li=i,gn=0,Da=null,Jd=Sc=Ms=0,Kn=Ia=null,ys!==null){for(i=0;i<ys.length;i++)if(a=ys[i],u=a.interleaved,u!==null){a.interleaved=null;var m=u.next,g=a.pending;if(g!==null){var T=g.next;g.next=m,u.next=T}a.pending=u}ys=null}return n}function mv(n,i){do{var a=dn;try{if(yd(),cc.current=hc,uc){for(var u=on.memoizedState;u!==null;){var m=u.queue;m!==null&&(m.pending=null),u=u.next}uc=!1}if(xs=0,yn=mn=on=null,Aa=!1,Ra=0,Zd.current=null,a===null||a.return===null){gn=1,Da=i,dn=null;break}e:{var g=n,T=a.return,z=a,G=i;if(i=An,z.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var le=G,we=z,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var xe=we.alternate;xe?(we.updateQueue=xe.updateQueue,we.memoizedState=xe.memoizedState,we.lanes=xe.lanes):(we.updateQueue=null,we.memoizedState=null)}var $e=kg(T);if($e!==null){$e.flags&=-257,Gg($e,T,z,g,i),$e.mode&1&&Bg(g,le,i),i=$e,G=le;var Je=i.updateQueue;if(Je===null){var tt=new Set;tt.add(G),i.updateQueue=tt}else Je.add(G);break e}else{if((i&1)===0){Bg(g,le,i),oh();break e}G=Error(t(426))}}else if(en&&z.mode&1){var cn=kg(T);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),Gg(cn,T,z,g,i),vd(Eo(G,z));break e}}g=G=Eo(G,z),gn!==4&&(gn=2),Ia===null?Ia=[g]:Ia.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ee=Og(g,G,i);ug(g,ee);break e;case 1:z=G;var $=g.type,ie=g.stateNode;if((g.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Wr===null||!Wr.has(ie)))){g.flags|=65536,i&=-i,g.lanes|=i;var De=zg(g,z,i);ug(g,De);break e}}g=g.return}while(g!==null)}_v(a)}catch(it){i=it,dn===a&&a!==null&&(dn=a=a.return);continue}break}while(!0)}function gv(){var n=yc.current;return yc.current=hc,n===null?hc:n}function oh(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(Ms&268435455)===0&&(Sc&268435455)===0||$r(Sn,An)}function Ac(n,i){var a=Ft;Ft|=2;var u=gv();(Sn!==n||An!==i)&&(Sr=null,ws(n,i));do try{$w();break}catch(m){mv(n,m)}while(!0);if(yd(),Ft=a,yc.current=u,dn!==null)throw Error(t(261));return Sn=null,An=0,gn}function $w(){for(;dn!==null;)vv(dn)}function qw(){for(;dn!==null&&!Of();)vv(dn)}function vv(n){var i=xv(n.alternate,n,li);n.memoizedProps=n.pendingProps,i===null?_v(n):dn=i,Zd.current=null}function _v(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=kw(a,i,li),a!==null){dn=a;return}}else{if(a=Gw(a,i),a!==null){a.flags&=32767,dn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,dn=null;return}}if(i=i.sibling,i!==null){dn=i;return}dn=i=n}while(i!==null);gn===0&&(gn=5)}function Ts(n,i,a){var u=Pt,m=_i.transition;try{_i.transition=null,Pt=1,jw(n,i,a,u)}finally{_i.transition=m,Pt=u}return null}function jw(n,i,a,u){do Ro();while(Xr!==null);if((Ft&6)!==0)throw Error(t(327));a=n.finishedWork;var m=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Xn(n,g),n===Sn&&(dn=Sn=null,An=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Mc||(Mc=!0,Mv(q,function(){return Ro(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=_i.transition,_i.transition=null;var T=Pt;Pt=1;var z=Ft;Ft|=4,Zd.current=null,Vw(n,a),lv(a,n),mw(od),Ol=!!sd,od=sd=null,n.current=a,Ww(a),zf(),Ft=z,Pt=T,_i.transition=g}else n.current=a;if(Mc&&(Mc=!1,Xr=n,Ec=m),g=n.pendingLanes,g===0&&(Wr=null),je(a.stateNode),Zn(n,rn()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)m=i[a],u(m.value,{componentStack:m.stack,digest:m.digest});if(xc)throw xc=!1,n=eh,eh=null,n;return(Ec&1)!==0&&n.tag!==0&&Ro(),g=n.pendingLanes,(g&1)!==0?n===th?Na++:(Na=0,th=n):Na=0,kr(),null}function Ro(){if(Xr!==null){var n=dr(Ec),i=_i.transition,a=Pt;try{if(_i.transition=null,Pt=16>n?16:n,Xr===null)var u=!1;else{if(n=Xr,Xr=null,Ec=0,(Ft&6)!==0)throw Error(t(331));var m=Ft;for(Ft|=4,Ze=n.current;Ze!==null;){var g=Ze,T=g.child;if((Ze.flags&16)!==0){var z=g.deletions;if(z!==null){for(var G=0;G<z.length;G++){var le=z[G];for(Ze=le;Ze!==null;){var we=Ze;switch(we.tag){case 0:case 11:case 15:La(8,we,g)}var Te=we.child;if(Te!==null)Te.return=we,Ze=Te;else for(;Ze!==null;){we=Ze;var xe=we.sibling,$e=we.return;if(iv(we),we===le){Ze=null;break}if(xe!==null){xe.return=$e,Ze=xe;break}Ze=$e}}}var Je=g.alternate;if(Je!==null){var tt=Je.child;if(tt!==null){Je.child=null;do{var cn=tt.sibling;tt.sibling=null,tt=cn}while(tt!==null)}}Ze=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Ze=T;else e:for(;Ze!==null;){if(g=Ze,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:La(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,Ze=ee;break e}Ze=g.return}}var $=n.current;for(Ze=$;Ze!==null;){T=Ze;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,Ze=ie;else e:for(T=$;Ze!==null;){if(z=Ze,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:_c(9,z)}}catch(it){ln(z,z.return,it)}if(z===T){Ze=null;break e}var De=z.sibling;if(De!==null){De.return=z.return,Ze=De;break e}Ze=z.return}}if(Ft=m,kr(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(te,n)}catch{}u=!0}return u}finally{Pt=a,_i.transition=i}}return!1}function yv(n,i,a){i=Eo(a,i),i=Og(n,i,1),n=Hr(n,i,1),i=Gn(),n!==null&&(At(n,1,i),Zn(n,i))}function ln(n,i,a){if(n.tag===3)yv(n,n,a);else for(;i!==null;){if(i.tag===3){yv(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Wr===null||!Wr.has(u))){n=Eo(a,n),n=zg(i,n,1),i=Hr(i,n,1),n=Gn(),i!==null&&(At(i,1,n),Zn(i,n));break}}i=i.return}}function Kw(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Gn(),n.pingedLanes|=n.suspendedLanes&a,Sn===n&&(An&a)===a&&(gn===4||gn===3&&(An&130023424)===An&&500>rn()-Qd?ws(n,0):Jd|=a),Zn(n,i)}function Sv(n,i){i===0&&((n.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var a=Gn();n=vr(n,i),n!==null&&(At(n,i,a),Zn(n,a))}function Zw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Sv(n,a)}function Jw(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,m=n.memoizedState;m!==null&&(a=m.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Sv(n,a)}var xv;xv=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||$n.current)jn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return jn=!1,Bw(n,i,a);jn=(n.flags&131072)!==0}else jn=!1,en&&(i.flags&1048576)!==0&&eg(i,tc,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;gc(n,i),n=i.pendingProps;var m=mo(i,Dn.current);xo(i,a),m=Pd(null,i,u,n,m,a);var g=Ld();return i.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(u)?(g=!0,Jl(i)):g=!1,i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Ed(i),m.updater=pc,i.stateNode=m,m._reactInternals=i,Od(i,u,n,a),i=Gd(null,i,u,!0,g,a)):(i.tag=0,en&&g&&hd(i),kn(null,i,m,a),i=i.child),i;case 16:u=i.elementType;e:{switch(gc(n,i),n=i.pendingProps,m=u._init,u=m(u._payload),i.type=u,m=i.tag=eT(u),n=bi(u,n),m){case 0:i=kd(null,i,u,n,a);break e;case 1:i=$g(null,i,u,n,a);break e;case 11:i=Hg(null,i,u,n,a);break e;case 14:i=Vg(null,i,u,bi(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,m=i.pendingProps,m=i.elementType===u?m:bi(u,m),kd(n,i,u,m,a);case 1:return u=i.type,m=i.pendingProps,m=i.elementType===u?m:bi(u,m),$g(n,i,u,m,a);case 3:e:{if(qg(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,m=g.element,cg(n,i),ac(i,u,null,a);var T=i.memoizedState;if(u=T.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){m=Eo(Error(t(423)),i),i=jg(n,i,u,a,m);break e}else if(u!==m){m=Eo(Error(t(424)),i),i=jg(n,i,u,a,m);break e}else for(ai=Or(i.stateNode.containerInfo.firstChild),oi=i,en=!0,Ci=null,a=ag(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),u===m){i=yr(n,i,a);break e}kn(n,i,u,a)}i=i.child}return i;case 5:return dg(i),n===null&&gd(i),u=i.type,m=i.pendingProps,g=n!==null?n.memoizedProps:null,T=m.children,ad(u,m)?T=null:g!==null&&ad(u,g)&&(i.flags|=32),Yg(n,i),kn(n,i,T,a),i.child;case 6:return n===null&&gd(i),null;case 13:return Kg(n,i,a);case 4:return wd(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=yo(i,null,u,a):kn(n,i,u,a),i.child;case 11:return u=i.type,m=i.pendingProps,m=i.elementType===u?m:bi(u,m),Hg(n,i,u,m,a);case 7:return kn(n,i,i.pendingProps,a),i.child;case 8:return kn(n,i,i.pendingProps.children,a),i.child;case 12:return kn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,m=i.pendingProps,g=i.memoizedProps,T=m.value,jt(rc,u._currentValue),u._currentValue=T,g!==null)if(Ri(g.value,T)){if(g.children===m.children&&!$n.current){i=yr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var z=g.dependencies;if(z!==null){T=g.child;for(var G=z.firstContext;G!==null;){if(G.context===u){if(g.tag===1){G=_r(-1,a&-a),G.tag=2;var le=g.updateQueue;if(le!==null){le=le.shared;var we=le.pending;we===null?G.next=G:(G.next=we.next,we.next=G),le.pending=G}}g.lanes|=a,G=g.alternate,G!==null&&(G.lanes|=a),xd(g.return,a,i),z.lanes|=a;break}G=G.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=a,z=T.alternate,z!==null&&(z.lanes|=a),xd(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}kn(n,i,m.children,a),i=i.child}return i;case 9:return m=i.type,u=i.pendingProps.children,xo(i,a),m=gi(m),u=u(m),i.flags|=1,kn(n,i,u,a),i.child;case 14:return u=i.type,m=bi(u,i.pendingProps),m=bi(u.type,m),Vg(n,i,u,m,a);case 15:return Wg(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,m=i.pendingProps,m=i.elementType===u?m:bi(u,m),gc(n,i),i.tag=1,qn(u)?(n=!0,Jl(i)):n=!1,xo(i,a),Ug(i,u,m),Od(i,u,m,a),Gd(null,i,u,!0,n,a);case 19:return Jg(n,i,a);case 22:return Xg(n,i,a)}throw Error(t(156,i.tag))};function Mv(n,i){return Nl(n,i)}function Qw(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(n,i,a,u){return new Qw(n,i,a,u)}function ah(n){return n=n.prototype,!(!n||!n.isReactComponent)}function eT(n){if(typeof n=="function")return ah(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===Y)return 14}return 2}function qr(n,i){var a=n.alternate;return a===null?(a=yi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Rc(n,i,a,u,m,g){var T=2;if(u=n,typeof n=="function")ah(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return As(a.children,m,g,i);case A:T=8,m|=8;break;case F:return n=yi(12,a,i,m|2),n.elementType=F,n.lanes=g,n;case se:return n=yi(13,a,i,m),n.elementType=se,n.lanes=g,n;case ce:return n=yi(19,a,i,m),n.elementType=ce,n.lanes=g,n;case J:return Cc(a,m,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:T=10;break e;case k:T=9;break e;case Z:T=11;break e;case Y:T=14;break e;case Q:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yi(T,a,i,m),i.elementType=n,i.type=u,i.lanes=g,i}function As(n,i,a,u){return n=yi(7,n,u,i),n.lanes=a,n}function Cc(n,i,a,u){return n=yi(22,n,u,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function lh(n,i,a){return n=yi(6,n,null,i),n.lanes=a,n}function ch(n,i,a){return i=yi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function tT(n,i,a,u,m){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=u,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function uh(n,i,a,u,m,g,T,z,G){return n=new tT(n,i,a,z,G),i===1?(i=1,g===!0&&(i|=8)):i=0,g=yi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(g),n}function nT(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Ev(n){if(!n)return Br;n=n._reactInternals;e:{if($i(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qn(a))return Z0(n,a,i)}return i}function wv(n,i,a,u,m,g,T,z,G){return n=uh(a,u,!0,n,m,g,T,z,G),n.context=Ev(null),a=n.current,u=Gn(),m=Yr(a),g=_r(u,m),g.callback=i??null,Hr(a,g,m),n.current.lanes=m,At(n,m,u),Zn(n,u),n}function bc(n,i,a,u){var m=i.current,g=Gn(),T=Yr(m);return a=Ev(a),i.context===null?i.context=a:i.pendingContext=a,i=_r(g,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Hr(m,i,T),n!==null&&(Di(n,m,T,g),oc(n,m,T)),T}function Pc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function fh(n,i){Tv(n,i),(n=n.alternate)&&Tv(n,i)}function iT(){return null}var Av=typeof reportError=="function"?reportError:function(n){console.error(n)};function dh(n){this._internalRoot=n}Lc.prototype.render=dh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));bc(n,i,null,null)},Lc.prototype.unmount=dh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Es(function(){bc(null,n,null,null)}),i[hr]=null}};function Lc(n){this._internalRoot=n}Lc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Xt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Nr.length&&i!==0&&i<Nr[a].priority;a++);Nr.splice(a,0,n),a===0&&d0(n)}};function hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rv(){}function rT(n,i,a,u,m){if(m){if(typeof u=="function"){var g=u;u=function(){var le=Pc(T);g.call(le)}}var T=wv(i,u,n,0,null,!1,!1,"",Rv);return n._reactRootContainer=T,n[hr]=T.current,_a(n.nodeType===8?n.parentNode:n),Es(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof u=="function"){var z=u;u=function(){var le=Pc(G);z.call(le)}}var G=uh(n,0,!1,null,null,!1,!1,"",Rv);return n._reactRootContainer=G,n[hr]=G.current,_a(n.nodeType===8?n.parentNode:n),Es(function(){bc(i,G,a,u)}),G}function Ic(n,i,a,u,m){var g=a._reactRootContainer;if(g){var T=g;if(typeof m=="function"){var z=m;m=function(){var G=Pc(T);z.call(G)}}bc(i,T,n,m)}else T=rT(a,i,n,m,u);return Pc(T)}Ht=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Nt(i.pendingLanes);a!==0&&(Yn(i,a|1),Zn(i,rn()),(Ft&6)===0&&(Ao=rn()+500,kr()))}break;case 13:Es(function(){var u=vr(n,1);if(u!==null){var m=Gn();Di(u,n,1,m)}}),fh(n,1)}},Kt=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var a=Gn();Di(i,n,134217728,a)}fh(n,134217728)}},Ti=function(n){if(n.tag===13){var i=Yr(n),a=vr(n,i);if(a!==null){var u=Gn();Di(a,n,i,u)}fh(n,i)}},Xt=function(){return Pt},Ai=function(n,i){var a=Pt;try{return Pt=n,i()}finally{Pt=a}},mt=function(n,i,a){switch(i){case"input":if(Dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var m=Kl(u);if(!m)throw Error(t(90));ye(u),Dt(u,m)}}}break;case"textarea":Ce(n,a);break;case"select":i=a.value,i!=null&&wt(n,!!a.multiple,i,!1)}},Oe=rh,Se=Es;var sT={usingClientEntryPoint:!1,Events:[xa,ho,Kl,ge,We,rh]},Ua={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oT={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=na(n),n===null?null:n.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||iT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{te=Nc.inject(oT),ze=Nc}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT,Hn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(i))throw Error(t(200));return nT(n,i,null,a)},Hn.createRoot=function(n,i){if(!hh(n))throw Error(t(299));var a=!1,u="",m=Av;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),i=uh(n,1,!1,null,null,a,!1,u,m),n[hr]=i.current,_a(n.nodeType===8?n.parentNode:n),new dh(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=na(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Es(n)},Hn.hydrate=function(n,i,a){if(!Dc(i))throw Error(t(200));return Ic(null,n,i,!0,a)},Hn.hydrateRoot=function(n,i,a){if(!hh(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,m=!1,g="",T=Av;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=wv(i,null,n,1,a??null,m,!1,g,T),n[hr]=i.current,_a(n),u)for(n=0;n<u.length;n++)a=u[n],m=a._getVersion,m=m(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,m]:i.mutableSourceEagerHydrationData.push(a,m);return new Lc(i)},Hn.render=function(n,i,a){if(!Dc(i))throw Error(t(200));return Ic(null,n,i,!1,a)},Hn.unmountComponentAtNode=function(n){if(!Dc(n))throw Error(t(40));return n._reactRootContainer?(Es(function(){Ic(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},Hn.unstable_batchedUpdates=rh,Hn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Dc(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ic(n,i,a,!1,u)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Sh;function Nv(){if(Sh)return Fc.exports;Sh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Fc.exports=Iv(),Fc.exports}var xh;function Uv(){if(xh)return Fa;xh=1;var s=Nv();return Fa.createRoot=s.createRoot,Fa.hydrateRoot=s.hydrateRoot,Fa}var Fv=Uv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="184",Ov=0,Mh=1,zv=2,Oa=1,Bv=2,Co=3,xr=0,Vn=1,st=2,Qi=0,Rs=1,Eh=2,wh=3,Th=4,kv=5,Kr=100,Gv=101,Hv=102,Vv=103,Wv=104,Xv=200,Yv=201,$v=202,qv=203,kc=204,Gc=205,jv=206,Kv=207,Zv=208,Jv=209,Qv=210,e_=211,t_=212,n_=213,i_=214,Hc=0,Vc=1,Wc=2,Cs=3,Xc=4,Yc=5,$c=6,qc=7,Ah=0,r_=1,s_=2,Ii=0,Rh=1,Ch=2,bh=3,Ph=4,Lh=5,Dh=6,Ih=7,Nh=300,Zr=301,bs=302,jc=303,Kc=304,za=306,Ni=1e3,er=1001,Zc=1002,Mn=1003,o_=1004,Ba=1005,Rn=1006,Jc=1007,Jr=1008,Jn=1009,Uh=1010,Fh=1011,bo=1012,Qc=1013,Ui=1014,Fi=1015,tr=1016,eu=1017,tu=1018,Po=1020,Oh=35902,zh=35899,Bh=1021,kh=1022,Si=1023,nr=1026,Qr=1027,Gh=1028,nu=1029,es=1030,iu=1031,ru=1033,ka=33776,Ga=33777,Ha=33778,Va=33779,su=35840,ou=35841,au=35842,lu=35843,cu=36196,uu=37492,fu=37496,du=37488,hu=37489,Wa=37490,pu=37491,mu=37808,gu=37809,vu=37810,_u=37811,yu=37812,Su=37813,xu=37814,Mu=37815,Eu=37816,wu=37817,Tu=37818,Au=37819,Ru=37820,Cu=37821,bu=36492,Pu=36494,Lu=36495,Du=36283,Iu=36284,Xa=36285,Nu=36286,a_=3200,Hh=0,l_=1,Mr="",ci="srgb",Ya="srgb-linear",$a="linear",Vt="srgb",Ps=7680,Vh=519,c_=512,u_=513,f_=514,Uu=515,d_=516,h_=517,Fu=518,p_=519,Wh=35044,Xh="300 es",Oi=2e3,Lo=2001;function m_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Do(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function g_(){const s=Do("canvas");return s.style.display="block",s}const Yh={};function $h(...s){const e="THREE."+s.shift();console.log(e,...s)}function qh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=qh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ut(...s){s=qh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ou(...s){const e=s.join(" ");e in Yh||(Yh[e]=!0,at(...s))}function v_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const __={[Hc]:Vc,[Wc]:$c,[Xc]:qc,[Cs]:Yc,[Vc]:Hc,[$c]:Wc,[qc]:Xc,[Yc]:Cs};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const Io=Math.PI/180,No=180/Math.PI;function Ls(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function zu(s,e){return(s%e+e)%e}function y_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function S_(s,e,t){return s!==e?(t-s)/(e-s):0}function Uo(s,e,t){return(1-t)*s+t*e}function x_(s,e,t,r){return Uo(s,e,1-Math.exp(-t*r))}function M_(s,e=1){return e-Math.abs(zu(s,e*2)-e)}function E_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function w_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function T_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function A_(s,e){return s+Math.random()*(e-s)}function R_(s){return s*(.5-Math.random())}function C_(s){s!==void 0&&(jh=s);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b_(s){return s*Io}function P_(s){return s*No}function L_(s){return(s&s-1)===0&&s!==0}function D_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function I_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function N_(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+r)/2),p=c((e+r)/2),_=l((e-r)/2),v=c((e-r)/2),y=l((r-e)/2),E=c((r-e)/2);switch(o){case"XYX":s.set(f*p,d*_,d*v,f*h);break;case"YZY":s.set(d*v,f*p,d*_,f*h);break;case"ZXZ":s.set(d*_,d*v,f*p,f*h);break;case"XZX":s.set(f*p,d*E,d*y,f*h);break;case"YXY":s.set(d*y,f*p,d*E,f*h);break;case"ZYZ":s.set(d*E,d*y,f*p,f*h);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ds(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qa={DEG2RAD:Io,RAD2DEG:No,generateUUID:Ls,clamp:Ct,euclideanModulo:zu,mapLinear:y_,inverseLerp:S_,lerp:Uo,damp:x_,pingpong:M_,smoothstep:E_,smootherstep:w_,randInt:T_,randFloat:A_,randFloatSpread:R_,seededRandom:C_,degToRad:b_,radToDeg:P_,isPowerOfTwo:L_,ceilPowerOfTwo:D_,floorPowerOfTwo:I_,setQuaternionFromProperEuler:N_,normalize:Fn,denormalize:Ds},Df=class Df{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Df.prototype.isVector2=!0;let dt=Df;class Is{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],p=r[o+2],_=r[o+3],v=l[c+0],y=l[c+1],E=l[c+2],P=l[c+3];if(_!==P||d!==v||h!==y||p!==E){let x=d*v+h*y+p*E+_*P;x<0&&(v=-v,y=-y,E=-E,P=-P,x=-x);let S=1-f;if(x<.9995){const D=Math.acos(x),U=Math.sin(D);S=Math.sin(S*D)/U,f=Math.sin(f*D)/U,d=d*S+v*f,h=h*S+y*f,p=p*S+E*f,_=_*S+P*f}else{d=d*S+v*f,h=h*S+y*f,p=p*S+E*f,_=_*S+P*f;const D=1/Math.sqrt(d*d+h*h+p*p+_*_);d*=D,h*=D,p*=D,_*=D}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],p=r[o+3],_=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return e[t]=f*E+p*_+d*y-h*v,e[t+1]=d*E+p*v+h*_-f*y,e[t+2]=h*E+p*y+f*v-d*_,e[t+3]=p*E-f*_-d*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),p=f(o/2),_=f(l/2),v=d(r/2),y=d(o/2),E=d(l/2);switch(c){case"XYZ":this._x=v*p*_+h*y*E,this._y=h*y*_-v*p*E,this._z=h*p*E+v*y*_,this._w=h*p*_-v*y*E;break;case"YXZ":this._x=v*p*_+h*y*E,this._y=h*y*_-v*p*E,this._z=h*p*E-v*y*_,this._w=h*p*_+v*y*E;break;case"ZXY":this._x=v*p*_-h*y*E,this._y=h*y*_+v*p*E,this._z=h*p*E+v*y*_,this._w=h*p*_-v*y*E;break;case"ZYX":this._x=v*p*_-h*y*E,this._y=h*y*_+v*p*E,this._z=h*p*E-v*y*_,this._w=h*p*_+v*y*E;break;case"YZX":this._x=v*p*_+h*y*E,this._y=h*y*_+v*p*E,this._z=h*p*E-v*y*_,this._w=h*p*_-v*y*E;break;case"XZY":this._x=v*p*_-h*y*E,this._y=h*y*_-v*p*E,this._z=h*p*E+v*y*_,this._w=h*p*_+v*y*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],p=t[6],_=t[10],v=r+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-d)*y,this._y=(l-h)*y,this._z=(c-o)*y}else if(r>f&&r>_){const y=2*Math.sqrt(1+r-f-_);this._w=(p-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-r-_);this._w=(l-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+_-r-f);this._w=(c-o)/y,this._x=(l+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+c*f+o*h-l*d,this._y=o*p+c*d+l*f-r*h,this._z=l*p+c*h+r*d-o*f,this._w=c*p-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const If=class If{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),p=2*(f*t-l*o),_=2*(l*r-c*t);return this.x=t+d*h+c*_-f*p,this.y=r+d*p+f*h-l*_,this.z=o+d*_+l*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};If.prototype.isVector3=!0;let M=If;const Bu=new M,Kh=new Is,Nf=class Nf{constructor(e,t,r,o,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=f,p[3]=t,p[4]=l,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],p=r[4],_=r[7],v=r[2],y=r[5],E=r[8],P=o[0],x=o[3],S=o[6],D=o[1],U=o[4],L=o[7],N=o[2],C=o[5],O=o[8];return l[0]=c*P+f*D+d*N,l[3]=c*x+f*U+d*C,l[6]=c*S+f*L+d*O,l[1]=h*P+p*D+_*N,l[4]=h*x+p*U+_*C,l[7]=h*S+p*L+_*O,l[2]=v*P+y*D+E*N,l[5]=v*x+y*U+E*C,l[8]=v*S+y*L+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*f*h-r*l*p+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],p=e[8],_=p*c-f*h,v=f*d-p*l,y=h*l-c*d,E=t*_+r*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/E;return e[0]=_*P,e[1]=(o*h-p*r)*P,e[2]=(f*r-o*c)*P,e[3]=v*P,e[4]=(p*t-o*d)*P,e[5]=(o*l-f*t)*P,e[6]=y*P,e[7]=(r*d-h*t)*P,e[8]=(c*t-r*l)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ku.makeScale(e,t)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nf.prototype.isMatrix3=!0;let yt=Nf;const ku=new yt,Zh=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U_(){const s={enabled:!0,workingColorSpace:Ya,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Vt&&(o.r=ir(o.r),o.g=ir(o.g),o.b=ir(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(o.r=Ns(o.r),o.g=Ns(o.g),o.b=Ns(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mr?$a:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ou("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ou("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ya]:{primaries:e,whitePoint:r,transfer:$a,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const Lt=U_();function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class F_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=Do("canvas")),Us.width=e.width,Us.height=e.height;const o=Us.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=ir(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ir(t[r]/255)*255):t[r]=ir(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O_=0;class Gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Hu(o[c].image)):l.push(Hu(o[c]))}else l=Hu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Hu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?F_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let z_=0;const Vu=new M;class tn extends ts{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,r=er,o=er,l=Rn,c=Jr,f=Si,d=Jn,h=tn.DEFAULT_ANISOTROPY,p=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ls(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=Nh,tn.DEFAULT_ANISOTROPY=1;const Uf=class Uf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],p=d[4],_=d[8],v=d[1],y=d[5],E=d[9],P=d[2],x=d[6],S=d[10];if(Math.abs(p-v)<.01&&Math.abs(_-P)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+P)<.1&&Math.abs(E+x)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(h+1)/2,L=(y+1)/2,N=(S+1)/2,C=(p+v)/4,O=(_+P)/4,A=(E+x)/4;return U>L&&U>N?U<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(U),o=C/r,l=O/r):L>N?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=C/o,l=A/o):N<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),r=O/l,o=A/l),this.set(r,o,l,t),this}let D=Math.sqrt((x-E)*(x-E)+(_-P)*(_-P)+(v-p)*(v-p));return Math.abs(D)<.001&&(D=1),this.x=(x-E)/D,this.y=(_-P)/D,this.z=(v-p)/D,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uf.prototype.isVector4=!0;let an=Uf;class B_ extends ts{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new tn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Gu(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends B_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Qh extends tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dl=class Dl{constructor(e,t,r,o,l,c,f,d,h,p,_,v,y,E,P,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,p,_,v,y,E,P,x)}set(e,t,r,o,l,c,f,d,h,p,_,v,y,E,P,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=p,S[10]=_,S[14]=v,S[3]=y,S[7]=E,S[11]=P,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),c=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*p,y=c*_,E=f*p,P=f*_;t[0]=d*p,t[4]=-d*_,t[8]=h,t[1]=y+E*h,t[5]=v-P*h,t[9]=-f*d,t[2]=P-v*h,t[6]=E+y*h,t[10]=c*d}else if(e.order==="YXZ"){const v=d*p,y=d*_,E=h*p,P=h*_;t[0]=v+P*f,t[4]=E*f-y,t[8]=c*h,t[1]=c*_,t[5]=c*p,t[9]=-f,t[2]=y*f-E,t[6]=P+v*f,t[10]=c*d}else if(e.order==="ZXY"){const v=d*p,y=d*_,E=h*p,P=h*_;t[0]=v-P*f,t[4]=-c*_,t[8]=E+y*f,t[1]=y+E*f,t[5]=c*p,t[9]=P-v*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const v=c*p,y=c*_,E=f*p,P=f*_;t[0]=d*p,t[4]=E*h-y,t[8]=v*h+P,t[1]=d*_,t[5]=P*h+v,t[9]=y*h-E,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,y=c*h,E=f*d,P=f*h;t[0]=d*p,t[4]=P-v*_,t[8]=E*_+y,t[1]=_,t[5]=c*p,t[9]=-f*p,t[2]=-h*p,t[6]=y*_+E,t[10]=v-P*_}else if(e.order==="XZY"){const v=c*d,y=c*h,E=f*d,P=f*h;t[0]=d*p,t[4]=-_,t[8]=h*p,t[1]=v*_+P,t[5]=c*p,t[9]=y*_-E,t[2]=E*_-y,t[6]=f*p,t[10]=P*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,H_)}lookAt(e,t,r){const o=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Er.crossVectors(r,Qn),Er.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Er.crossVectors(r,Qn)),Er.normalize(),ja.crossVectors(Qn,Er),o[0]=Er.x,o[4]=ja.x,o[8]=Qn.x,o[1]=Er.y,o[5]=ja.y,o[9]=Qn.y,o[2]=Er.z,o[6]=ja.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],p=r[1],_=r[5],v=r[9],y=r[13],E=r[2],P=r[6],x=r[10],S=r[14],D=r[3],U=r[7],L=r[11],N=r[15],C=o[0],O=o[4],A=o[8],F=o[12],W=o[1],k=o[5],Z=o[9],se=o[13],ce=o[2],Y=o[6],Q=o[10],J=o[14],j=o[3],oe=o[7],re=o[11],R=o[15];return l[0]=c*C+f*W+d*ce+h*j,l[4]=c*O+f*k+d*Y+h*oe,l[8]=c*A+f*Z+d*Q+h*re,l[12]=c*F+f*se+d*J+h*R,l[1]=p*C+_*W+v*ce+y*j,l[5]=p*O+_*k+v*Y+y*oe,l[9]=p*A+_*Z+v*Q+y*re,l[13]=p*F+_*se+v*J+y*R,l[2]=E*C+P*W+x*ce+S*j,l[6]=E*O+P*k+x*Y+S*oe,l[10]=E*A+P*Z+x*Q+S*re,l[14]=E*F+P*se+x*J+S*R,l[3]=D*C+U*W+L*ce+N*j,l[7]=D*O+U*k+L*Y+N*oe,l[11]=D*A+U*Z+L*Q+N*re,l[15]=D*F+U*se+L*J+N*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],p=e[2],_=e[6],v=e[10],y=e[14],E=e[3],P=e[7],x=e[11],S=e[15],D=d*y-h*v,U=f*y-h*_,L=f*v-d*_,N=c*y-h*p,C=c*v-d*p,O=c*_-f*p;return t*(P*D-x*U+S*L)-r*(E*D-x*N+S*C)+o*(E*U-P*N+S*O)-l*(E*L-P*C+x*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],p=e[8],_=e[9],v=e[10],y=e[11],E=e[12],P=e[13],x=e[14],S=e[15],D=t*f-r*c,U=t*d-o*c,L=t*h-l*c,N=r*d-o*f,C=r*h-l*f,O=o*h-l*d,A=p*P-_*E,F=p*x-v*E,W=p*S-y*E,k=_*x-v*P,Z=_*S-y*P,se=v*S-y*x,ce=D*se-U*Z+L*k+N*W-C*F+O*A;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ce;return e[0]=(f*se-d*Z+h*k)*Y,e[1]=(o*Z-r*se-l*k)*Y,e[2]=(P*O-x*C+S*N)*Y,e[3]=(v*C-_*O-y*N)*Y,e[4]=(d*W-c*se-h*F)*Y,e[5]=(t*se-o*W+l*F)*Y,e[6]=(x*L-E*O-S*U)*Y,e[7]=(p*O-v*L+y*U)*Y,e[8]=(c*Z-f*W+h*A)*Y,e[9]=(r*W-t*Z-l*A)*Y,e[10]=(E*C-P*L+S*D)*Y,e[11]=(_*L-p*C-y*D)*Y,e[12]=(f*F-c*k-d*A)*Y,e[13]=(t*k-r*F+o*A)*Y,e[14]=(P*U-E*N-x*D)*Y,e[15]=(p*N-_*U+v*D)*Y,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,p=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,p*f+r,p*d-o*c,0,h*d-o*f,p*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,p=c+c,_=f+f,v=l*h,y=l*p,E=l*_,P=c*p,x=c*_,S=f*_,D=d*h,U=d*p,L=d*_,N=r.x,C=r.y,O=r.z;return o[0]=(1-(P+S))*N,o[1]=(y+L)*N,o[2]=(E-U)*N,o[3]=0,o[4]=(y-L)*C,o[5]=(1-(v+S))*C,o[6]=(x+D)*C,o[7]=0,o[8]=(E+U)*O,o[9]=(x-D)*O,o[10]=(1-(v+P))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Fs.set(o[0],o[1],o[2]).length();const f=Fs.set(o[4],o[5],o[6]).length(),d=Fs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),xi.copy(this);const h=1/c,p=1/f,_=1/d;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,t.setFromRotationMatrix(xi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=Oi,d=!1){const h=this.elements,p=2*l/(t-e),_=2*l/(r-o),v=(t+e)/(t-e),y=(r+o)/(r-o);let E,P;if(d)E=l/(c-l),P=c*l/(c-l);else if(f===Oi)E=-(c+l)/(c-l),P=-2*c*l/(c-l);else if(f===Lo)E=-c/(c-l),P=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Oi,d=!1){const h=this.elements,p=2/(t-e),_=2/(r-o),v=-(t+e)/(t-e),y=-(r+o)/(r-o);let E,P;if(d)E=1/(c-l),P=c/(c-l);else if(f===Oi)E=-2/(c-l),P=-(c+l)/(c-l);else if(f===Lo)E=-1/(c-l),P=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Dl.prototype.isMatrix4=!0;let nn=Dl;const Fs=new M,xi=new nn,G_=new M(0,0,0),H_=new M(1,1,1),Er=new M,ja=new M,Qn=new M,ep=new nn,tp=new Is;class ns{constructor(e=0,t=0,r=0,o=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],p=o[9],_=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-p,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V_=0;const ip=new M,Os=new Is,rr=new nn,Ka=new M,Fo=new M,W_=new M,X_=new Is,rp=new M(1,0,0),sp=new M(0,1,0),op=new M(0,0,1),ap={type:"added"},Y_={type:"removed"},zs={type:"childadded",child:null},Wu={type:"childremoved",child:null};class En extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new M,t=new ns,r=new Is,o=new M(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new yt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ka.copy(e):Ka.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Fo,Ka,this.up):rr.lookAt(Ka,Fo,this.up),this.quaternion.setFromRotationMatrix(rr),o&&(rr.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(rr),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),zs.child=e,this.dispatchEvent(zs),zs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,W_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,X_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const _=d[h];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),_=c(e.shapes),v=c(e.skeletons),y=c(e.animations),E=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}En.DEFAULT_UP=new M(0,1,0),En.DEFAULT_MATRIX_AUTO_UPDATE=!0,En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wn extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const P of e.hand.values()){const x=t.getJointPose(P,r),S=this._getHandJoint(h,P);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=p.position.distanceTo(_.position),y=.02,E=.005;h.inputState.pinching&&v>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent($_)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Yu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Lt.workingColorSpace){if(e=zu(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Yu(c,l,e+1/3),this.g=Yu(c,l,e),this.b=Yu(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,t=ci){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const r=lp[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Lt.workingToColorSpace(bn.copy(this),e),Math.round(Ct(bn.r*255,0,255))*65536+Math.round(Ct(bn.g*255,0,255))*256+Math.round(Ct(bn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(bn.copy(this),t);const r=bn.r,o=bn.g,l=bn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const p=(f+c)/2;if(f===c)d=0,h=0;else{const _=c-f;switch(h=p<=.5?_/(c+f):_/(2-c-f),c){case r:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-r)/_+2;break;case l:d=(r-o)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ci){Lt.workingToColorSpace(bn.copy(this),e);const t=bn.r,r=bn.g,o=bn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Za);const r=Uo(wr.h,Za.h,t),o=Uo(wr.s,Za.s,t),l=Uo(wr.l,Za.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ot;Ot.NAMES=lp;class Ja extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new M,sr=new M,$u=new M,or=new M,Bs=new M,ks=new M,cp=new M,qu=new M,ju=new M,Ku=new M,Zu=new an,Ju=new an,Qu=new an;class Ei{constructor(e=new M,t=new M,r=new M){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),sr.subVectors(r,t),$u.subVectors(e,t);const c=Mi.dot(Mi),f=Mi.dot(sr),d=Mi.dot($u),h=sr.dot(sr),p=sr.dot($u),_=c*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,y=(h*d-f*p)*v,E=(c*p-f*d)*v;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,or)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,or.x),d.addScaledVector(c,or.y),d.addScaledVector(f,or.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return Zu.setScalar(0),Ju.setScalar(0),Qu.setScalar(0),Zu.fromBufferAttribute(e,t),Ju.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Zu,l.x),c.addScaledVector(Ju,l.y),c.addScaledVector(Qu,l.z),c}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),sr.subVectors(e,t),Mi.cross(sr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Mi.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Bs.subVectors(o,r),ks.subVectors(l,r),qu.subVectors(e,r);const d=Bs.dot(qu),h=ks.dot(qu);if(d<=0&&h<=0)return t.copy(r);ju.subVectors(e,o);const p=Bs.dot(ju),_=ks.dot(ju);if(p>=0&&_<=p)return t.copy(o);const v=d*_-p*h;if(v<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(Bs,c);Ku.subVectors(e,l);const y=Bs.dot(Ku),E=ks.dot(Ku);if(E>=0&&y<=E)return t.copy(l);const P=y*h-d*E;if(P<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(r).addScaledVector(ks,f);const x=p*E-y*_;if(x<=0&&_-p>=0&&y-E>=0)return cp.subVectors(l,o),f=(_-p)/(_-p+(y-E)),t.copy(o).addScaledVector(cp,f);const S=1/(x+P+v);return c=P*S,f=v*S,t.copy(r).addScaledVector(Bs,c).addScaledVector(ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oo{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,wi):wi.fromBufferAttribute(l,c),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),el.subVectors(this.max,zo),Gs.subVectors(e.a,zo),Hs.subVectors(e.b,zo),Vs.subVectors(e.c,zo),Tr.subVectors(Hs,Gs),Ar.subVectors(Vs,Hs),is.subVectors(Gs,Vs);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-is.z,is.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,is.z,0,-is.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-is.y,is.x,0];return!ef(t,Gs,Hs,Vs,el)||(t=[1,0,0,0,1,0,0,0,1],!ef(t,Gs,Hs,Vs,el))?!1:(tl.crossVectors(Tr,Ar),t=[tl.x,tl.y,tl.z],ef(t,Gs,Hs,Vs,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new M,new M,new M,new M,new M,new M,new M,new M],wi=new M,Qa=new Oo,Gs=new M,Hs=new M,Vs=new M,Tr=new M,Ar=new M,is=new M,zo=new M,el=new M,tl=new M,rs=new M;function ef(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){rs.fromArray(s,l);const f=o.x*Math.abs(rs.x)+o.y*Math.abs(rs.y)+o.z*Math.abs(rs.z),d=e.dot(rs),h=t.dot(rs),p=r.dot(rs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>f)return!1}return!0}const un=new M,nl=new dt;let q_=0;class Bi extends ts{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Wh,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ds(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class up extends Bi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class fp extends Bi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gt extends Bi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const j_=new Oo,Bo=new M,tf=new M;class il{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):j_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Bo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(tf)),this.expandByPoint(Bo.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let K_=0;const ui=new nn,nf=new En,Ws=new M,ei=new Oo,ko=new Oo,vn=new M;class _n extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?fp:up)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return nf.lookAt(e),nf.updateMatrix(),this.applyMatrix4(nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ko.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(ei.min,ko.min),ei.expandByPoint(vn),vn.addVectors(ei.max,ko.max),ei.expandByPoint(vn)):(ei.expandByPoint(ko.min),ei.expandByPoint(ko.max))}ei.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,p=f.count;h<p;h++)vn.fromBufferAttribute(f,h),d&&(Ws.fromBufferAttribute(e,h),vn.add(Ws)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let A=0;A<r.count;A++)f[A]=new M,d[A]=new M;const h=new M,p=new M,_=new M,v=new dt,y=new dt,E=new dt,P=new M,x=new M;function S(A,F,W){h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,F),_.fromBufferAttribute(r,W),v.fromBufferAttribute(l,A),y.fromBufferAttribute(l,F),E.fromBufferAttribute(l,W),p.sub(h),_.sub(h),y.sub(v),E.sub(v);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(P.copy(p).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(k),x.copy(_).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(k),f[A].add(P),f[F].add(P),f[W].add(P),d[A].add(x),d[F].add(x),d[W].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,F=D.length;A<F;++A){const W=D[A],k=W.start,Z=W.count;for(let se=k,ce=k+Z;se<ce;se+=3)S(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const U=new M,L=new M,N=new M,C=new M;function O(A){N.fromBufferAttribute(o,A),C.copy(N);const F=f[A];U.copy(F),U.sub(N.multiplyScalar(N.dot(F))).normalize(),L.crossVectors(C,F);const k=L.dot(d[A])<0?-1:1;c.setXYZW(A,U.x,U.y,U.z,k)}for(let A=0,F=D.length;A<F;++A){const W=D[A],k=W.start,Z=W.count;for(let se=k,ce=k+Z;se<ce;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const o=new M,l=new M,c=new M,f=new M,d=new M,h=new M,p=new M,_=new M;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),P=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,P),c.fromBufferAttribute(t,x),p.subVectors(c,l),_.subVectors(o,l),p.cross(_),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,P),h.fromBufferAttribute(r,x),f.add(p),d.add(p),h.add(p),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(P,d.x,d.y,d.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,l),_.subVectors(o,l),p.cross(_),r.setXYZ(v+0,p.x,p.y,p.z),r.setXYZ(v+1,p.x,p.y,p.z),r.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(f,d){const h=f.array,p=f.itemSize,_=f.normalized,v=new h.constructor(d.length*p);let y=0,E=0;for(let P=0,x=d.length;P<x;P++){f.isInterleavedBufferAttribute?y=d[P]*f.data.stride+f.offset:y=d[P]*p;for(let S=0;S<p;S++)v[E++]=h[y++]}return new Bi(v,p,_)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let p=0,_=h.length;p<_;p++){const v=h[p],y=e(v,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];p.push(y.toJSON(e.data))}p.length>0&&(o[d]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const l=e.morphAttributes;for(const h in l){const p=[],_=l[h];for(let v=0,y=_.length;v<y;v++)p.push(_[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Z_=0;class Go extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=Rs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Gc,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kc&&(r.blendSrc=this.blendSrc),this.blendDst!==Gc&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lr=new M,rf=new M,rl=new M,Rr=new M,sf=new M,sl=new M,of=new M;class dp{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){rf.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(rf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(rl),f=Rr.dot(this.direction),d=-Rr.dot(rl),h=Rr.lengthSq(),p=Math.abs(1-c*c);let _,v,y,E;if(p>0)if(_=c*d-f,v=c*f-d,E=l*p,_>=0)if(v>=-E)if(v<=E){const P=1/p;_*=P,v*=P,y=_*(_+c*v+2*f)+v*(c*_+v+2*d)+h}else v=l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+h;else v=-l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+h;else v<=-E?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),y=-_*_+v*(v+2*d)+h):v<=E?(_=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+h):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),y=-_*_+v*(v+2*d)+h);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(rf).addScaledVector(rl,v),y}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const r=lr.dot(this.direction),o=lr.dot(lr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(l=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(l=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,r,o,l){sf.subVectors(t,e),sl.subVectors(r,e),of.crossVectors(sf,sl);let c=this.direction.dot(of),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const d=f*this.direction.dot(sl.crossVectors(Rr,sl));if(d<0)return null;const h=f*this.direction.dot(sf.cross(Rr));if(h<0||d+h>c)return null;const p=-f*Rr.dot(of);return p<0?null:this.at(p/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hp=new nn,ss=new dp,ol=new il,pp=new M,al=new M,ll=new M,cl=new M,af=new M,ul=new M,mp=new M,fl=new M;class be extends En{constructor(e=new _n,t=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){ul.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const p=f[d],_=l[d];p!==0&&(af.fromBufferAttribute(_,e),c?ul.addScaledVector(af,p):ul.addScaledVector(af.sub(t),p))}t.add(ul)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(l),ss.copy(e.ray).recast(e.near),!(ol.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ol,pp)===null||ss.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(hp.copy(l).invert(),ss.copy(e.ray).applyMatrix4(hp),!(r.boundingBox!==null&&ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,p=l.attributes.uv1,_=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,P=v.length;E<P;E++){const x=v[E],S=c[x.materialIndex],D=Math.max(x.start,y.start),U=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=D,N=U;L<N;L+=3){const C=f.getX(L),O=f.getX(L+1),A=f.getX(L+2);o=dl(this,S,e,r,h,p,_,C,O,A),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),P=Math.min(f.count,y.start+y.count);for(let x=E,S=P;x<S;x+=3){const D=f.getX(x),U=f.getX(x+1),L=f.getX(x+2);o=dl(this,c,e,r,h,p,_,D,U,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,P=v.length;E<P;E++){const x=v[E],S=c[x.materialIndex],D=Math.max(x.start,y.start),U=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let L=D,N=U;L<N;L+=3){const C=L,O=L+1,A=L+2;o=dl(this,S,e,r,h,p,_,C,O,A),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),P=Math.min(d.count,y.start+y.count);for(let x=E,S=P;x<S;x+=3){const D=x,U=x+1,L=x+2;o=dl(this,c,e,r,h,p,_,D,U,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function J_(s,e,t,r,o,l,c,f){let d;if(e.side===Vn?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===xr,f),d===null)return null;fl.copy(f),fl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(fl);return h<t.near||h>t.far?null:{distance:h,point:fl.clone(),object:s}}function dl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,al),s.getVertexPosition(d,ll),s.getVertexPosition(h,cl);const p=J_(s,e,t,r,al,ll,cl,mp);if(p){const _=new M;Ei.getBarycoord(mp,al,ll,cl,_),o&&(p.uv=Ei.getInterpolatedAttribute(o,f,d,h,_,new dt)),l&&(p.uv1=Ei.getInterpolatedAttribute(l,f,d,h,_,new dt)),c&&(p.normal=Ei.getInterpolatedAttribute(c,f,d,h,_,new M),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new M,materialIndex:0};Ei.getNormal(al,ll,cl,v.normal),p.face=v,p.barycoord=_}return p}class Q_ extends tn{constructor(e=null,t=1,r=1,o,l,c,f,d,h=Mn,p=Mn,_,v){super(null,c,f,d,h,p,o,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lf=new M,e1=new M,t1=new yt;class os{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=lf.subVectors(r,t).cross(e1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(lf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||t1.getNormalMatrix(e),o=this.coplanarPoint(lf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new il,n1=new dt(.5,.5),hl=new M;class cf{constructor(e=new os,t=new os,r=new os,o=new os,l=new os,c=new os){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],p=l[4],_=l[5],v=l[6],y=l[7],E=l[8],P=l[9],x=l[10],S=l[11],D=l[12],U=l[13],L=l[14],N=l[15];if(o[0].setComponents(h-c,y-p,S-E,N-D).normalize(),o[1].setComponents(h+c,y+p,S+E,N+D).normalize(),o[2].setComponents(h+f,y+_,S+P,N+U).normalize(),o[3].setComponents(h-f,y-_,S-P,N-U).normalize(),r)o[4].setComponents(d,v,x,L).normalize(),o[5].setComponents(h-d,y-v,S-x,N-L).normalize();else if(o[4].setComponents(h-d,y-v,S-x,N-L).normalize(),t===Oi)o[5].setComponents(h+d,y+v,S+x,N+L).normalize();else if(t===Lo)o[5].setComponents(d,v,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=n1.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(hl.x=o.normal.x>0?e.max.x:e.min.x,hl.y=o.normal.y>0?e.max.y:e.min.y,hl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gp extends Go{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pl=new M,ml=new M,vp=new nn,Ho=new dp,gl=new il,uf=new M,_p=new M;class i1 extends En{constructor(e=new _n,t=new gp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)pl.fromBufferAttribute(t,o-1),ml.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new Gt(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(o),gl.radius+=l,e.ray.intersectsSphere(gl)===!1)return;vp.copy(o).invert(),Ho.copy(e.ray).applyMatrix4(vp);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,p=r.index,v=r.attributes.position;if(p!==null){const y=Math.max(0,c.start),E=Math.min(p.count,c.start+c.count);for(let P=y,x=E-1;P<x;P+=h){const S=p.getX(P),D=p.getX(P+1),U=vl(this,e,Ho,d,S,D,P);U&&t.push(U)}if(this.isLineLoop){const P=p.getX(E-1),x=p.getX(y),S=vl(this,e,Ho,d,P,x,E-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let P=y,x=E-1;P<x;P+=h){const S=vl(this,e,Ho,d,P,P+1,P);S&&t.push(S)}if(this.isLineLoop){const P=vl(this,e,Ho,d,E-1,y,E-1);P&&t.push(P)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function vl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(pl.fromBufferAttribute(f,o),ml.fromBufferAttribute(f,l),t.distanceSqToSegment(pl,ml,uf,_p)>r)return;uf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(uf);if(!(h<e.near||h>e.far))return{distance:h,point:_p.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const yp=new M,Sp=new M;class r1 extends i1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)yp.fromBufferAttribute(t,o),Sp.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+yp.distanceTo(Sp);e.setAttribute("lineDistance",new Gt(r,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xp extends tn{constructor(e=[],t=Zr,r,o,l,c,f,d,h,p){super(e,t,r,o,l,c,f,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xs extends tn{constructor(e,t,r=Ui,o,l,c,f=Mn,d=Mn,h,p=nr,_=1){if(p!==nr&&p!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,o,l,c,f,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class s1 extends Xs{constructor(e,t=Ui,r=Zr,o,l,c=Mn,f=Mn,d,h=nr){const p={width:e,height:e,depth:1},_=[p,p,p,p,p,p];super(e,e,t,r,o,l,c,f,d,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mp extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vo extends _n{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],p=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(_,2));function E(P,x,S,D,U,L,N,C,O,A,F){const W=L/O,k=N/A,Z=L/2,se=N/2,ce=C/2,Y=O+1,Q=A+1;let J=0,j=0;const oe=new M;for(let re=0;re<Q;re++){const R=re*k-se;for(let X=0;X<Y;X++){const he=X*W-Z;oe[P]=he*D,oe[x]=R*U,oe[S]=ce,h.push(oe.x,oe.y,oe.z),oe[P]=0,oe[x]=0,oe[S]=C>0?1:-1,p.push(oe.x,oe.y,oe.z),_.push(X/O),_.push(1-re/A),J+=1}}for(let re=0;re<A;re++)for(let R=0;R<O;R++){const X=v+R+Y*re,he=v+R+Y*(re+1),Re=v+(R+1)+Y*(re+1),Ee=v+(R+1)+Y*re;d.push(X,he,Ee),d.push(he,Re,Ee),j+=6}f.addGroup(y,j,F),y+=j,v+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pn extends _n{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const c=[],f=[],d=[],h=[],p=t/2,_=Math.PI/2*e,v=t,y=2*_+v,E=r*2+l,P=o+1,x=new M,S=new M;for(let D=0;D<=E;D++){let U=0,L=0,N=0,C=0;if(D<=r){const F=D/r,W=F*Math.PI/2;L=-p-e*Math.cos(W),N=e*Math.sin(W),C=-e*Math.cos(W),U=F*_}else if(D<=r+l){const F=(D-r)/l;L=-p+F*t,N=e,C=0,U=_+F*v}else{const F=(D-r-l)/r,W=F*Math.PI/2;L=p+e*Math.sin(W),N=e*Math.cos(W),C=e*Math.sin(W),U=_+v+F*_}const O=Math.max(0,Math.min(1,U/y));let A=0;D===0?A=.5/o:D===E&&(A=-.5/o);for(let F=0;F<=o;F++){const W=F/o,k=W*Math.PI*2,Z=Math.sin(k),se=Math.cos(k);S.x=-N*se,S.y=L,S.z=N*Z,f.push(S.x,S.y,S.z),x.set(-N*se,C,N*Z),x.normalize(),d.push(x.x,x.y,x.z),h.push(W+A,O)}if(D>0){const F=(D-1)*P;for(let W=0;W<o;W++){const k=F+W,Z=F+W+1,se=D*P+W,ce=D*P+W+1;c.push(k,Z,se),c.push(Z,ce,se)}}}this.setIndex(c),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const p=r[o],v=r[o+1]-p,y=(c-p)/v;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new dt:new M);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new M,o=[],l=[],c=[],f=new M,d=new nn;for(let y=0;y<=e;y++){const E=y/e;o[y]=this.getTangentAt(E,new M)}l[0]=new M,c[0]=new M;let h=Number.MAX_VALUE;const p=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);p<=h&&(h=p,r.set(1,0,0)),_<=h&&(h=_,r.set(0,1,0)),v<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(Ct(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(d.makeRotationAxis(f,E))}c[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(Ct(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let E=1;E<=e;E++)l[E].applyMatrix4(d.makeRotationAxis(o[E],y*E)),c[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ep extends cr{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=d}getPoint(e,t=new dt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const p=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=d-this.aX,y=h-this.aY;d=v*p-y*_+this.aX,h=v*_+y*p+this.aY}return r.set(d,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class o1 extends Ep{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function ff(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,p,_){let v=(c-l)/h-(f-l)/(h+p)+(f-c)/p,y=(f-c)/p-(d-c)/(p+_)+(d-f)/_;v*=p,y*=p,o(c,f,v,y)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const wp=new M,Tp=new M,df=new ff,hf=new ff,pf=new ff;class St extends cr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new M){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,p;this.closed||f>0?h=o[(f-1)%l]:(Tp.subVectors(o[0],o[1]).add(o[0]),h=Tp);const _=o[f%l],v=o[(f+1)%l];if(this.closed||f+2<l?p=o[(f+2)%l]:(wp.subVectors(o[l-1],o[l-2]).add(o[l-1]),p=wp),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(h.distanceToSquared(_),y),P=Math.pow(_.distanceToSquared(v),y),x=Math.pow(v.distanceToSquared(p),y);P<1e-4&&(P=1),E<1e-4&&(E=P),x<1e-4&&(x=P),df.initNonuniformCatmullRom(h.x,_.x,v.x,p.x,E,P,x),hf.initNonuniformCatmullRom(h.y,_.y,v.y,p.y,E,P,x),pf.initNonuniformCatmullRom(h.z,_.z,v.z,p.z,E,P,x)}else this.curveType==="catmullrom"&&(df.initCatmullRom(h.x,_.x,v.x,p.x,this.tension),hf.initCatmullRom(h.y,_.y,v.y,p.y,this.tension),pf.initCatmullRom(h.z,_.z,v.z,p.z,this.tension));return r.set(df.calc(d),hf.calc(d),pf.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new M().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ap(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,d=s*f;return(2*t-2*r+l+c)*d+(-3*t+3*r-2*l-c)*f+l*s+t}function a1(s,e){const t=1-s;return t*t*e}function l1(s,e){return 2*(1-s)*s*e}function c1(s,e){return s*s*e}function Wo(s,e,t,r){return a1(s,e)+l1(s,t)+c1(s,r)}function u1(s,e){const t=1-s;return t*t*t*e}function f1(s,e){const t=1-s;return 3*t*t*s*e}function d1(s,e){return 3*(1-s)*s*s*e}function h1(s,e){return s*s*s*e}function Xo(s,e,t,r,o){return u1(s,e)+f1(s,t)+d1(s,r)+h1(s,o)}class p1 extends cr{constructor(e=new dt,t=new dt,r=new dt,o=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new dt){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Xo(e,o.x,l.x,c.x,f.x),Xo(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m1 extends cr{constructor(e=new M,t=new M,r=new M,o=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new M){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Xo(e,o.x,l.x,c.x,f.x),Xo(e,o.y,l.y,c.y,f.y),Xo(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g1 extends cr{constructor(e=new dt,t=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new dt){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new dt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v1 extends cr{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _1 extends cr{constructor(e=new dt,t=new dt,r=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new dt){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Wo(e,o.x,l.x,c.x),Wo(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rp extends cr{constructor(e=new M,t=new M,r=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new M){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Wo(e,o.x,l.x,c.x),Wo(e,o.y,l.y,c.y),Wo(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y1 extends cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new dt){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,d=o[c===0?c:c-1],h=o[c],p=o[c>o.length-2?o.length-1:c+1],_=o[c>o.length-3?o.length-1:c+2];return r.set(Ap(f,d.x,h.x,p.x,_.x),Ap(f,d.y,h.y,p.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new dt().fromArray(o))}return this}}var S1=Object.freeze({__proto__:null,ArcCurve:o1,CatmullRomCurve3:St,CubicBezierCurve:p1,CubicBezierCurve3:m1,EllipseCurve:Ep,LineCurve:g1,LineCurve3:v1,QuadraticBezierCurve:_1,QuadraticBezierCurve3:Rp,SplineCurve:y1});class _l extends _n{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,p=d+1,_=e/f,v=t/d,y=[],E=[],P=[],x=[];for(let S=0;S<p;S++){const D=S*v-c;for(let U=0;U<h;U++){const L=U*_-l;E.push(L,-D,0),P.push(0,0,1),x.push(U/f),x.push(1-S/d)}}for(let S=0;S<d;S++)for(let D=0;D<f;D++){const U=D+h*S,L=D+h*(S+1),N=D+1+h*(S+1),C=D+1+h*S;y.push(U,L,C),y.push(L,N,C)}this.setIndex(y),this.setAttribute("position",new Gt(E,3)),this.setAttribute("normal",new Gt(P,3)),this.setAttribute("uv",new Gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}class $t extends _n{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const p=[],_=new M,v=new M,y=[],E=[],P=[],x=[];for(let S=0;S<=r;S++){const D=[],U=S/r;let L=0;S===0&&c===0?L=.5/t:S===r&&d===Math.PI&&(L=-.5/t);for(let N=0;N<=t;N++){const C=N/t;_.x=-e*Math.cos(o+C*l)*Math.sin(c+U*f),_.y=e*Math.cos(c+U*f),_.z=e*Math.sin(o+C*l)*Math.sin(c+U*f),E.push(_.x,_.y,_.z),v.copy(_).normalize(),P.push(v.x,v.y,v.z),x.push(C+L,1-U),D.push(h++)}p.push(D)}for(let S=0;S<r;S++)for(let D=0;D<t;D++){const U=p[S][D+1],L=p[S][D],N=p[S+1][D],C=p[S+1][D+1];(S!==0||c>0)&&y.push(U,L,C),(S!==r-1||d<Math.PI)&&y.push(L,N,C)}this.setIndex(y),this.setAttribute("position",new Gt(E,3)),this.setAttribute("normal",new Gt(P,3)),this.setAttribute("uv",new Gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fi extends _n{constructor(e=new Rp(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const f=new M,d=new M,h=new dt;let p=new M;const _=[],v=[],y=[],E=[];P(),this.setIndex(E),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(y,2));function P(){for(let U=0;U<t;U++)x(U);x(l===!1?t:0),D(),S()}function x(U){p=e.getPointAt(U/t,p);const L=c.normals[U],N=c.binormals[U];for(let C=0;C<=o;C++){const O=C/o*Math.PI*2,A=Math.sin(O),F=-Math.cos(O);d.x=F*L.x+A*N.x,d.y=F*L.y+A*N.y,d.z=F*L.z+A*N.z,d.normalize(),v.push(d.x,d.y,d.z),f.x=p.x+r*d.x,f.y=p.y+r*d.y,f.z=p.z+r*d.z,_.push(f.x,f.y,f.z)}}function S(){for(let U=1;U<=t;U++)for(let L=1;L<=o;L++){const N=(o+1)*(U-1)+(L-1),C=(o+1)*U+(L-1),O=(o+1)*U+L,A=(o+1)*(U-1)+L;E.push(N,C,A),E.push(C,O,A)}}function D(){for(let U=0;U<=t;U++)for(let L=0;L<=o;L++)h.x=U/t,h.y=L/o,y.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fi(new S1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Cp(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Cp(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const r=Ys(s[t]);for(const o in r)e[o]=r[o]}return e}function Cp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function x1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const M1={clone:Ys,merge:On};var E1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E1,this.fragmentShader=w1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=x1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class T1 extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class A1 extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R1 extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mf={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Pp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Pp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Pp(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class C1{constructor(e,t,r){const o=this;let l=!1,c=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(p){f++,l===!1&&o.onStart!==void 0&&o.onStart(p,c,f),l=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,_){return h.push(p,_),this},this.removeHandler=function(p){const _=h.indexOf(p);return _!==-1&&h.splice(_,2),this},this.getHandler=function(p){for(let _=0,v=h.length;_<v;_+=2){const y=h[_],E=h[_+1];if(y.global&&(y.lastIndex=0),y.test(p))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const b1=new C1;class gf{constructor(e){this.manager=e!==void 0?e:b1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}gf.DEFAULT_MATERIAL_NAME="__DEFAULT";const $s=new WeakMap;class P1 extends gf{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=mf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=$s.get(c);_===void 0&&(_=[],$s.set(c,_)),_.push({onLoad:t,onError:o})}return c}const f=Do("img");function d(){p(),t&&t(this);const _=$s.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}$s.delete(this),l.manager.itemEnd(e)}function h(_){p(),o&&o(_),mf.remove(`image:${e}`);const v=$s.get(this)||[];for(let y=0;y<v.length;y++){const E=v[y];E.onError&&E.onError(_)}$s.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function p(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),mf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class ls extends gf{constructor(e){super(e)}load(e,t,r,o){const l=new tn,c=new P1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class Lp extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const vf=new nn,Dp=new M,Ip=new M;class L1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ip),t.updateMatrixWorld(),vf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Lo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(vf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yl=new M,Sl=new Is,Gi=new M;class Np extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,Sl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(yl,Sl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new M,Up=new dt,Fp=new dt;class zn extends Np{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Up,Fp),t.subVectors(Fp,Up)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _f extends Np{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=p*this.view.offsetY,d=f-p*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class D1 extends L1{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class di extends Lp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new D1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class xl extends Lp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const qs=-90,js=1;class I1 extends En{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zn(qs,js,e,t);o.layers=this.layers,this.add(o);const l=new zn(qs,js,e,t);l.layers=this.layers,this.add(l);const c=new zn(qs,js,e,t);c.layers=this.layers,this.add(c);const f=new zn(qs,js,e,t);f.layers=this.layers,this.add(f);const d=new zn(qs,js,e,t);d.layers=this.layers,this.add(d);const h=new zn(qs,js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Lo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=P,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(_,v,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class N1 extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ml{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ff=class Ff{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Ff.prototype.isMatrix2=!0;let Op=Ff;class El extends r1{constructor(e=10,t=10,r=4473924,o=8947848){r=new Ot(r),o=new Ot(o);const l=t/2,c=e/t,f=e/2,d=[],h=[];for(let v=0,y=0,E=-f;v<=t;v++,E+=c){d.push(-f,0,E,f,0,E),d.push(E,0,-f,E,0,f);const P=v===l?r:o;P.toArray(h,y),y+=3,P.toArray(h,y),y+=3,P.toArray(h,y),y+=3,P.toArray(h,y),y+=3}const p=new _n;p.setAttribute("position",new Gt(d,3)),p.setAttribute("color",new Gt(h,3));const _=new gp({vertexColors:!0,toneMapped:!1});super(p,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function zp(s,e,t,r){const o=U1(r);switch(t){case Bh:return s*e;case Gh:return s*e/o.components*o.byteLength;case nu:return s*e/o.components*o.byteLength;case es:return s*e*2/o.components*o.byteLength;case iu:return s*e*2/o.components*o.byteLength;case kh:return s*e*3/o.components*o.byteLength;case Si:return s*e*4/o.components*o.byteLength;case ru:return s*e*4/o.components*o.byteLength;case ka:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ou:case lu:return Math.max(s,16)*Math.max(e,8)/4;case su:case au:return Math.max(s,8)*Math.max(e,8)/2;case cu:case uu:case du:case hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fu:case Wa:case pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bu:case Pu:case Lu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Du:case Iu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xa:case Nu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U1(s){switch(s){case Jn:case Uh:return{byteLength:1,components:1};case bo:case Fh:case tr:return{byteLength:2,components:1};case eu:case tu:return{byteLength:2,components:4};case Ui:case Qc:case Fi:return{byteLength:4,components:1};case Oh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}})),typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bp(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function F1(s){const e=new WeakMap;function t(f,d){const h=f.array,p=f.usage,_=h.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,h,p),f.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,d,h){const p=d.array,_=d.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,p);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],P=_[y];P.start<=E.start+E.count+1?E.count=Math.max(E.count,P.start+P.count-E.start):(++v,_[v]=P)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const P=_[y];s.bufferSubData(h,P.start*p.BYTES_PER_ELEMENT,p,P.start,P.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const p=e.get(f);(!p||p.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var O1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z1=`#ifdef USE_ALPHAHASH
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
#endif`,B1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
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
#endif`,W1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X1=`#ifdef USE_BATCHING
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
#endif`,Y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K1=`#ifdef USE_IRIDESCENCE
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
#endif`,Z1=`#ifdef USE_BUMPMAP
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
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,oy=`#define PI 3.141592653589793
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
} // validated`,ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ly=`vec3 transformedNormal = objectNormal;
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
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wy=`#ifdef USE_GRADIENTMAP
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
}`,Ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,by=`#ifdef USE_ENVMAP
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
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ny=`PhysicalMaterial material;
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
#endif`,Uy=`uniform sampler2D dfgLUT;
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
}`,Fy=`
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
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
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$y=`#if defined( USE_POINTS_UV )
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
#endif`,qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
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
#endif`,eS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oS=`#ifdef USE_NORMALMAP
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
#endif`,aS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MS=`float getShadowMask() {
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
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,TS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LS=`#ifdef USE_TRANSMISSION
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
#endif`,DS=`#ifdef USE_TRANSMISSION
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mt={alphahash_fragment:O1,alphahash_pars_fragment:z1,alphamap_fragment:B1,alphamap_pars_fragment:k1,alphatest_fragment:G1,alphatest_pars_fragment:H1,aomap_fragment:V1,aomap_pars_fragment:W1,batching_pars_vertex:X1,batching_vertex:Y1,begin_vertex:$1,beginnormal_vertex:q1,bsdfs:j1,iridescence_fragment:K1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:J1,clipping_planes_pars_fragment:Q1,clipping_planes_pars_vertex:ey,clipping_planes_vertex:ty,color_fragment:ny,color_pars_fragment:iy,color_pars_vertex:ry,color_vertex:sy,common:oy,cube_uv_reflection_fragment:ay,defaultnormal_vertex:ly,displacementmap_pars_vertex:cy,displacementmap_vertex:uy,emissivemap_fragment:fy,emissivemap_pars_fragment:dy,colorspace_fragment:hy,colorspace_pars_fragment:py,envmap_fragment:my,envmap_common_pars_fragment:gy,envmap_pars_fragment:vy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:by,envmap_vertex:yy,fog_vertex:Sy,fog_pars_vertex:xy,fog_fragment:My,fog_pars_fragment:Ey,gradientmap_pars_fragment:wy,lightmap_pars_fragment:Ty,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:Ry,lights_pars_begin:Cy,lights_toon_fragment:Py,lights_toon_pars_fragment:Ly,lights_phong_fragment:Dy,lights_phong_pars_fragment:Iy,lights_physical_fragment:Ny,lights_physical_pars_fragment:Uy,lights_fragment_begin:Fy,lights_fragment_maps:Oy,lights_fragment_end:zy,lightprobes_pars_fragment:By,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Hy,logdepthbuf_vertex:Vy,map_fragment:Wy,map_pars_fragment:Xy,map_particle_fragment:Yy,map_particle_pars_fragment:$y,metalnessmap_fragment:qy,metalnessmap_pars_fragment:jy,morphinstance_vertex:Ky,morphcolor_vertex:Zy,morphnormal_vertex:Jy,morphtarget_pars_vertex:Qy,morphtarget_vertex:eS,normal_fragment_begin:tS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:rS,normal_vertex:sS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:aS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:uS,opaque_fragment:fS,packing:dS,premultiplied_alpha_fragment:hS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:gS,roughnessmap_fragment:vS,roughnessmap_pars_fragment:_S,shadowmap_pars_fragment:yS,shadowmap_pars_vertex:SS,shadowmap_vertex:xS,shadowmask_pars_fragment:MS,skinbase_vertex:ES,skinning_pars_vertex:wS,skinning_vertex:TS,skinnormal_vertex:AS,specularmap_fragment:RS,specularmap_pars_fragment:CS,tonemapping_fragment:bS,tonemapping_pars_fragment:PS,transmission_fragment:LS,transmission_pars_fragment:DS,uv_pars_fragment:IS,uv_pars_vertex:NS,uv_vertex:US,worldpos_vertex:FS,background_vert:`varying vec2 vUv;
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
}`},Ge={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new M},probesMax:{value:new M},probesResolution:{value:new M}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Hi={basic:{uniforms:On([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:On([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:On([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:On([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:On([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:On([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:On([Ge.points,Ge.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:On([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:On([Ge.common,Ge.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:On([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:On([Ge.sprite,Ge.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:On([Ge.common,Ge.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:On([Ge.lights,Ge.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Hi.physical={uniforms:On([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const wl={r:0,b:0,g:0},OS=new nn,kp=new yt;kp.set(-1,0,0,0,1,0,0,0,1);function zS(s,e,t,r,o,l){const c=new Ot(0);let f=o===!0?0:1,d,h,p=null,_=0,v=null;function y(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const L=D.backgroundBlurriness>0;U=e.get(U,L)}return U}function E(D){let U=!1;const L=y(D);L===null?x(c,f):L&&L.isColor&&(x(L,1),U=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function P(D,U){const L=y(U);L&&(L.isCubeTexture||L.mapping===za)?(h===void 0&&(h=new be(new Vo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ys(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=L,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(OS.makeRotationFromEuler(U.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(kp),h.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Vt,(p!==L||_!==L.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,p=L,_=L.version,v=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new be(new _l(2,2),new ki({name:"BackgroundMaterial",uniforms:Ys(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(p!==L||_!==L.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,p=L,_=L.version,v=s.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function x(D,U){D.getRGB(wl,bp(s)),t.buffers.color.setClear(wl.r,wl.g,wl.b,U,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,U=1){c.set(D),f=U,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,x(c,f)},render:E,addToRenderList:P,dispose:S}}function BS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,c=!1;function f(k,Z,se,ce,Y){let Q=!1;const J=_(k,ce,se,Z);l!==J&&(l=J,h(l.object)),Q=y(k,ce,se,Y),Q&&E(k,ce,se,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(Q||c)&&(c=!1,L(k,Z,se,ce),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return s.createVertexArray()}function h(k){return s.bindVertexArray(k)}function p(k){return s.deleteVertexArray(k)}function _(k,Z,se,ce){const Y=ce.wireframe===!0;let Q=r[Z.id];Q===void 0&&(Q={},r[Z.id]=Q);const J=k.isInstancedMesh===!0?k.id:0;let j=Q[J];j===void 0&&(j={},Q[J]=j);let oe=j[se.id];oe===void 0&&(oe={},j[se.id]=oe);let re=oe[Y];return re===void 0&&(re=v(d()),oe[Y]=re),re}function v(k){const Z=[],se=[],ce=[];for(let Y=0;Y<t;Y++)Z[Y]=0,se[Y]=0,ce[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:se,attributeDivisors:ce,object:k,attributes:{},index:null}}function y(k,Z,se,ce){const Y=l.attributes,Q=Z.attributes;let J=0;const j=se.getAttributes();for(const oe in j)if(j[oe].location>=0){const R=Y[oe];let X=Q[oe];if(X===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(X=k.instanceColor)),R===void 0||R.attribute!==X||X&&R.data!==X.data)return!0;J++}return l.attributesNum!==J||l.index!==ce}function E(k,Z,se,ce){const Y={},Q=Z.attributes;let J=0;const j=se.getAttributes();for(const oe in j)if(j[oe].location>=0){let R=Q[oe];R===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(R=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(R=k.instanceColor));const X={};X.attribute=R,R&&R.data&&(X.data=R.data),Y[oe]=X,J++}l.attributes=Y,l.attributesNum=J,l.index=ce}function P(){const k=l.newAttributes;for(let Z=0,se=k.length;Z<se;Z++)k[Z]=0}function x(k){S(k,0)}function S(k,Z){const se=l.newAttributes,ce=l.enabledAttributes,Y=l.attributeDivisors;se[k]=1,ce[k]===0&&(s.enableVertexAttribArray(k),ce[k]=1),Y[k]!==Z&&(s.vertexAttribDivisor(k,Z),Y[k]=Z)}function D(){const k=l.newAttributes,Z=l.enabledAttributes;for(let se=0,ce=Z.length;se<ce;se++)Z[se]!==k[se]&&(s.disableVertexAttribArray(se),Z[se]=0)}function U(k,Z,se,ce,Y,Q,J){J===!0?s.vertexAttribIPointer(k,Z,se,Y,Q):s.vertexAttribPointer(k,Z,se,ce,Y,Q)}function L(k,Z,se,ce){P();const Y=ce.attributes,Q=se.getAttributes(),J=Z.defaultAttributeValues;for(const j in Q){const oe=Q[j];if(oe.location>=0){let re=Y[j];if(re===void 0&&(j==="instanceMatrix"&&k.instanceMatrix&&(re=k.instanceMatrix),j==="instanceColor"&&k.instanceColor&&(re=k.instanceColor)),re!==void 0){const R=re.normalized,X=re.itemSize,he=e.get(re);if(he===void 0)continue;const Re=he.buffer,Ee=he.type,K=he.bytesPerElement,_e=Ee===s.INT||Ee===s.UNSIGNED_INT||re.gpuType===Qc;if(re.isInterleavedBufferAttribute){const fe=re.data,Ne=fe.stride,qe=re.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<oe.locationSize;He++)S(oe.location+He,fe.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<oe.locationSize;He++)x(oe.location+He);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let He=0;He<oe.locationSize;He++)U(oe.location+He,X/oe.locationSize,Ee,R,Ne*K,(qe+X/oe.locationSize*He)*K,_e)}else{if(re.isInstancedBufferAttribute){for(let fe=0;fe<oe.locationSize;fe++)S(oe.location+fe,re.meshPerAttribute);k.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let fe=0;fe<oe.locationSize;fe++)x(oe.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let fe=0;fe<oe.locationSize;fe++)U(oe.location+fe,X/oe.locationSize,Ee,R,X*K,X/oe.locationSize*fe*K,_e)}}else if(J!==void 0){const R=J[j];if(R!==void 0)switch(R.length){case 2:s.vertexAttrib2fv(oe.location,R);break;case 3:s.vertexAttrib3fv(oe.location,R);break;case 4:s.vertexAttrib4fv(oe.location,R);break;default:s.vertexAttrib1fv(oe.location,R)}}}}D()}function N(){F();for(const k in r){const Z=r[k];for(const se in Z){const ce=Z[se];for(const Y in ce){const Q=ce[Y];for(const J in Q)p(Q[J].object),delete Q[J];delete ce[Y]}}delete r[k]}}function C(k){if(r[k.id]===void 0)return;const Z=r[k.id];for(const se in Z){const ce=Z[se];for(const Y in ce){const Q=ce[Y];for(const J in Q)p(Q[J].object),delete Q[J];delete ce[Y]}}delete r[k.id]}function O(k){for(const Z in r){const se=r[Z];for(const ce in se){const Y=se[ce];if(Y[k.id]===void 0)continue;const Q=Y[k.id];for(const J in Q)p(Q[J].object),delete Q[J];delete Y[k.id]}}}function A(k){for(const Z in r){const se=r[Z],ce=k.isInstancedMesh===!0?k.id:0,Y=se[ce];if(Y!==void 0){for(const Q in Y){const J=Y[Q];for(const j in J)p(J[j].object),delete J[j];delete Y[Q]}delete se[ce],Object.keys(se).length===0&&delete r[Z]}}}function F(){W(),c=!0,l!==o&&(l=o,h(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:W,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:P,enableAttribute:x,disableUnusedAttributes:D}}function kS(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,p){p!==0&&(s.drawArraysInstanced(r,d,h,p),t.update(h,r,p))}function f(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,p);let v=0;for(let y=0;y<p;y++)v+=h[y];t.update(v,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function GS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const A=O===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Jn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Fi&&!A)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(at("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),C=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:P,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:L,maxSamples:N,samples:C}}function HS(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new os,f=new yt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||r!==0||o;return o=v,r=_.length,y},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,P=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!o||E===null||E.length===0||l&&!x)l?p(null):h();else{const D=l?0:r,U=D*4;let L=S.clippingState||null;d.value=L,L=p(E,v,U,y);for(let N=0;N!==U;++N)L[N]=t[N];S.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(_,v,y,E){const P=_!==null?_.length:0;let x=null;if(P!==0){if(x=d.value,E!==!0||x===null){const S=y+P*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(x===null||x.length<S)&&(x=new Float32Array(S));for(let U=0,L=y;U!==P;++U,L+=4)c.copy(_[U]).applyMatrix4(D,f),c.normal.toArray(x,L),x[L+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,x}}const br=4,Gp=[.125,.215,.35,.446,.526,.582],cs=20,VS=256,Yo=new _f,Hp=new Ot;let yf=null,Sf=0,xf=0,Mf=!1;const WS=new M;class Vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=WS}=l;yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,Sf,xf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:tr,format:Si,colorSpace:Ya,depthBuffer:!1},o=Wp(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XS(l)),this._blurMaterial=$S(l,e,t),this._ggxMaterial=YS(l,e,t)}return o}_compileMaterial(e){const t=new be(new _n,e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,r,o,l){const d=new zn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(Hp),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new Vo,new ke({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,x=P.material;let S=!1;const D=e.background;D?D.isColor&&(x.color.copy(D),e.background=null,S=!0):(x.color.copy(Hp),S=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(d.up.set(0,h[U],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+p[U],l.y,l.z)):L===1?(d.up.set(0,0,h[U]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+p[U],l.z)):(d.up.set(0,h[U],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+p[U]));const N=this._cubeSize;Ks(o,L*N,U>2?N:0,N,N),_.setRenderTarget(o),S&&_.render(P,d),_.render(e,d)}_.toneMapping=y,_.autoClear=v,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Zr||e.mapping===bs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Ks(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Yo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-p*p),v=0+h*1.25,y=_*v,{_lodMax:E}=this,P=this._sizeLods[r],x=3*P*(r>E-br?r-E+br:0),S=4*(this._cubeSize-P);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=E-t,Ks(l,x,S,3*P,2*P),o.setRenderTarget(l),o.render(f,Yo),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=E-r,Ks(e,x,S,3*P,2*P),o.setRenderTarget(e),o.render(f,Yo)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const p=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*cs-1),P=l/E,x=isFinite(l)?1+Math.floor(p*P):cs;x>cs&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${cs}`);const S=[];let D=0;for(let O=0;O<cs;++O){const A=O/P,F=Math.exp(-A*A/2);S.push(F),O===0?D+=F:O<x&&(D+=2*F)}for(let O=0;O<S.length;O++)S[O]=S[O]/D;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-r;const L=this._sizeLods[o],N=3*L*(o>U-br?o-U+br:0),C=4*(this._cubeSize-L);Ks(t,N,C,3*L,2*L),d.setRenderTarget(t),d.render(_,Yo)}}function XS(s){const e=[],t=[],r=[];let o=s;const l=s-br+1+Gp.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-br?d=Gp[c-s+br-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),p=-h,_=1+h,v=[p,p,_,p,_,_,p,p,_,_,p,_],y=6,E=6,P=3,x=2,S=1,D=new Float32Array(P*E*y),U=new Float32Array(x*E*y),L=new Float32Array(S*E*y);for(let C=0;C<y;C++){const O=C%3*2/3-1,A=C>2?0:-1,F=[O,A,0,O+2/3,A,0,O+2/3,A+1,0,O,A,0,O+2/3,A+1,0,O,A+1,0];D.set(F,P*E*C),U.set(v,x*E*C);const W=[C,C,C,C,C,C];L.set(W,S*E*C)}const N=new _n;N.setAttribute("position",new Bi(D,P)),N.setAttribute("uv",new Bi(U,x)),N.setAttribute("faceIndex",new Bi(L,S)),r.push(new be(N,null)),o>br&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Wp(s,e,t){const r=new zi(s,e,t);return r.texture.mapping=za,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ks(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function YS(s,e,t){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function $S(s,e,t){const r=new Float32Array(cs),o=new M(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Xp(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Yp(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}class $p extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new xp(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Vo(5,5,5),l=new ki({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Qi});l.uniforms.tEquirect.value=t;const c=new be(o,l),f=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Rn),new I1(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function qS(s){let e=new WeakMap,t=new WeakMap,r=null;function o(v,y=!1){return v==null?null:y?c(v):l(v)}function l(v){if(v&&v.isTexture){const y=v.mapping;if(y===jc||y===Kc)if(e.has(v)){const E=e.get(v).texture;return f(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const P=new $p(E.height);return P.fromEquirectangularTexture(s,v),e.set(v,P),v.addEventListener("dispose",h),f(P.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){const y=v.mapping,E=y===jc||y===Kc,P=y===Zr||y===bs;if(E||P){let x=t.get(v);const S=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new Vp(s)),x=E?r.fromEquirectangular(v,x):r.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),x.texture;if(x!==void 0)return x.texture;{const D=v.image;return E&&D&&D.height>0||P&&D&&d(D)?(r===null&&(r=new Vp(s)),x=E?r.fromEquirectangular(v):r.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),v.addEventListener("dispose",p),x.texture):null}}}return v}function f(v,y){return y===jc?v.mapping=Zr:y===Kc&&(v.mapping=bs),v}function d(v){let y=0;const E=6;for(let P=0;P<E;P++)v[P]!==void 0&&y++;return y===E}function h(v){const y=v.target;y.removeEventListener("dispose",h);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function p(v){const y=v.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function jS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ou("WebGLRenderer: "+r+" extension not supported."),o}}}function KS(s,e,t,r){const o={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete o[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function d(_){const v=_.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,E=_.attributes.position;let P=0;if(E===void 0)return;if(y!==null){const D=y.array;P=y.version;for(let U=0,L=D.length;U<L;U+=3){const N=D[U+0],C=D[U+1],O=D[U+2];v.push(N,C,C,O,O,N)}}else{const D=E.array;P=E.version;for(let U=0,L=D.length/3-1;U<L;U+=3){const N=U+0,C=U+1,O=U+2;v.push(N,C,C,O,O,N)}}const x=new(E.count>=65535?fp:up)(v,1);x.version=P;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function p(_){const v=l.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:p}}function ZS(s,e,t){let r;function o(_){r=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,v){s.drawElements(r,v,l,_*c),t.update(v,r,1)}function h(_,v,y){y!==0&&(s.drawElementsInstanced(r,v,l,_*c,y),t.update(v,r,y))}function p(_,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,_,0,y);let P=0;for(let x=0;x<y;x++)P+=v[x];t.update(P,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function JS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ut("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function QS(s,e,t){const r=new WeakMap,o=new an;function l(c,f,d){const h=c.morphTargetInfluences,p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=p!==void 0?p.length:0;let v=r.get(f);if(v===void 0||v.count!==_){let y=function(){A.dispose(),r.delete(f),f.removeEventListener("dispose",y)};v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let L=0;E===!0&&(L=1),P===!0&&(L=2),x===!0&&(L=3);let N=f.attributes.position.count*L,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const O=new Float32Array(N*C*4*_),A=new Qh(O,N,C,_);A.type=Fi,A.needsUpdate=!0;const F=L*4;for(let W=0;W<_;W++){const k=S[W],Z=D[W],se=U[W],ce=N*C*4*W;for(let Y=0;Y<k.count;Y++){const Q=Y*F;E===!0&&(o.fromBufferAttribute(k,Y),O[ce+Q+0]=o.x,O[ce+Q+1]=o.y,O[ce+Q+2]=o.z,O[ce+Q+3]=0),P===!0&&(o.fromBufferAttribute(Z,Y),O[ce+Q+4]=o.x,O[ce+Q+5]=o.y,O[ce+Q+6]=o.z,O[ce+Q+7]=0),x===!0&&(o.fromBufferAttribute(se,Y),O[ce+Q+8]=o.x,O[ce+Q+9]=o.y,O[ce+Q+10]=o.z,O[ce+Q+11]=se.itemSize===4?o.w:1)}}v={count:_,texture:A,size:new dt(N,C)},r.set(f,v),f.addEventListener("dispose",y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let y=0;for(let P=0;P<h.length;P++)y+=h[P];const E=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function ex(s,e,t,r,o){let l=new WeakMap;function c(h){const p=o.render.frame,_=h.geometry,v=e.get(h,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function f(){l=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:f}}const tx={[Rh]:"LINEAR_TONE_MAPPING",[Ch]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[Ph]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Ih]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function nx(s,e,t,r,o){const l=new zi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Xs(e,t):void 0}),c=new zi(e,t,{type:tr,depthBuffer:!1,stencilBuffer:!1}),f=new _n;f.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const d=new T1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new be(f,d),p=new _f(-1,1,1,-1,0,1);let _=null,v=null,y=!1,E,P=null,x=[],S=!1;this.setSize=function(D,U){l.setSize(D,U),c.setSize(D,U);for(let L=0;L<x.length;L++){const N=x[L];N.setSize&&N.setSize(D,U)}},this.setEffects=function(D){x=D,S=x.length>0&&x[0].isRenderPass===!0;const U=l.width,L=l.height;for(let N=0;N<x.length;N++){const C=x[N];C.setSize&&C.setSize(U,L)}},this.begin=function(D,U){if(y||D.toneMapping===Ii&&x.length===0)return!1;if(P=U,U!==null){const L=U.width,N=U.height;(l.width!==L||l.height!==N)&&this.setSize(L,N)}return S===!1&&D.setRenderTarget(l),E=D.toneMapping,D.toneMapping=Ii,!0},this.hasRenderPass=function(){return S},this.end=function(D,U){D.toneMapping=E,y=!0;let L=l,N=c;for(let C=0;C<x.length;C++){const O=x[C];if(O.enabled!==!1&&(O.render(D,N,L,U),O.needsSwap!==!1)){const A=L;L=N,N=A}}if(_!==D.outputColorSpace||v!==D.toneMapping){_=D.outputColorSpace,v=D.toneMapping,d.defines={},Lt.getTransfer(_)===Vt&&(d.defines.SRGB_TRANSFER="");const C=tx[v];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(P),D.render(h,p),P=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const qp=new tn,Ef=new Xs(1,1),jp=new Qh,Kp=new k_,Zp=new xp,Jp=[],Qp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function Zs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Jp[o];if(l===void 0&&(l=new Float32Array(o),Jp[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function pn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Al(s,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),pn(t,e)}}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),pn(t,e)}}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),pn(t,e)}}function ax(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;nm.set(r),s.uniformMatrix2fv(this.addr,!1,nm),pn(t,r)}}function lx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;tm.set(r),s.uniformMatrix3fv(this.addr,!1,tm),pn(t,r)}}function cx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;em.set(r),s.uniformMatrix4fv(this.addr,!1,em),pn(t,r)}}function ux(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),pn(t,e)}}function dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),pn(t,e)}}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),pn(t,e)}}function px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),pn(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),pn(t,e)}}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),pn(t,e)}}function _x(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Ef.compareFunction=t.isReversedDepthBuffer()?Fu:Uu,l=Ef):l=qp,t.setTexture2D(e||l,o)}function yx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Kp,o)}function Sx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Zp,o)}function xx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||jp,o)}function Mx(s){switch(s){case 5126:return ix;case 35664:return rx;case 35665:return sx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return ux;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return hx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return xx}}function Ex(s,e){s.uniform1fv(this.addr,e)}function wx(s,e){const t=Zs(e,this.size,2);s.uniform2fv(this.addr,t)}function Tx(s,e){const t=Zs(e,this.size,3);s.uniform3fv(this.addr,t)}function Ax(s,e){const t=Zs(e,this.size,4);s.uniform4fv(this.addr,t)}function Rx(s,e){const t=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cx(s,e){const t=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bx(s,e){const t=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Px(s,e){s.uniform1iv(this.addr,e)}function Lx(s,e){s.uniform2iv(this.addr,e)}function Dx(s,e){s.uniform3iv(this.addr,e)}function Ix(s,e){s.uniform4iv(this.addr,e)}function Nx(s,e){s.uniform1uiv(this.addr,e)}function Ux(s,e){s.uniform2uiv(this.addr,e)}function Fx(s,e){s.uniform3uiv(this.addr,e)}function Ox(s,e){s.uniform4uiv(this.addr,e)}function zx(s,e,t){const r=this.cache,o=e.length,l=Al(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Ef:c=qp;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function Bx(s,e,t){const r=this.cache,o=e.length,l=Al(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Kp,l[c])}function kx(s,e,t){const r=this.cache,o=e.length,l=Al(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Zp,l[c])}function Gx(s,e,t){const r=this.cache,o=e.length,l=Al(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||jp,l[c])}function Hx(s){switch(s){case 5126:return Ex;case 35664:return wx;case 35665:return Tx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return bx;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ix;case 5125:return Nx;case 36294:return Ux;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Gx}}class Vx{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Mx(t.type)}}class Wx{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hx(t.type)}}class Xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const wf=/(\w+)(\])?(\[|\.)?/g;function im(s,e){s.seq.push(e),s.map[e.id]=e}function Yx(s,e,t){const r=s.name,o=r.length;for(wf.lastIndex=0;;){const l=wf.exec(r),c=wf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){im(t,h===void 0?new Vx(f,s,e):new Wx(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new Xx(f),im(t,_)),t=_}}}class Rl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);Yx(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function rm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const $x=37297;let qx=0;function jx(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const sm=new yt;function Kx(s){Lt._getMatrix(sm,Lt.workingColorSpace,s);const e=`mat3( ${sm.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case $a:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function om(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+jx(s.getShaderSource(e),f)}else return l}function Zx(s,e){const t=Kx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jx={[Rh]:"Linear",[Ch]:"Reinhard",[bh]:"Cineon",[Ph]:"ACESFilmic",[Dh]:"AgX",[Ih]:"Neutral",[Lh]:"Custom"};function Qx(s,e){const t=Jx[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new M;function eM(){Lt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function nM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function iM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function $o(s){return s!==""}function am(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(s){return s.replace(rM,oM)}const sM=new Map;function oM(s,e){let t=Mt[e];if(t===void 0){const r=sM.get(e);if(r!==void 0)t=Mt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Tf(t)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(s){return s.replace(aM,lM)}function lM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function um(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const cM={[Oa]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function uM(s){return cM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fM={[Zr]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE_UV"};function dM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":fM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const hM={[bs]:"ENVMAP_MODE_REFRACTION"};function pM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mM={[Ah]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function gM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mM[s.combine]||"ENVMAP_BLENDING_NONE"}function vM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function _M(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=uM(t),h=dM(t),p=pM(t),_=gM(t),v=vM(t),y=tM(t),E=nM(l),P=o.createProgram();let x,S,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter($o).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter($o).join(`
`),S.length>0&&(S+=`
`)):(x=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),S=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Zx("linearToOutputTexel",t.outputColorSpace),eM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),c=Tf(c),c=am(c,t),c=lm(c,t),f=Tf(f),f=am(f,t),f=lm(f,t),c=cm(c),f=cm(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=D+x+c,L=D+S+f,N=rm(o,o.VERTEX_SHADER,U),C=rm(o,o.FRAGMENT_SHADER,L);o.attachShader(P,N),o.attachShader(P,C),t.index0AttributeName!==void 0?o.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(P,0,"position"),o.linkProgram(P);function O(k){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(P)||"",se=o.getShaderInfoLog(N)||"",ce=o.getShaderInfoLog(C)||"",Y=Z.trim(),Q=se.trim(),J=ce.trim();let j=!0,oe=!0;if(o.getProgramParameter(P,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,P,N,C);else{const re=om(o,N,"vertex"),R=om(o,C,"fragment");Ut("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(P,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Y+`
`+re+`
`+R)}else Y!==""?at("WebGLProgram: Program Info Log:",Y):(Q===""||J==="")&&(oe=!1);oe&&(k.diagnostics={runnable:j,programLog:Y,vertexShader:{log:Q,prefix:x},fragmentShader:{log:J,prefix:S}})}o.deleteShader(N),o.deleteShader(C),A=new Rl(o,P),F=iM(o,P)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let F;this.getAttributes=function(){return F===void 0&&O(this),F};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(P,$x)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=N,this.fragmentShader=C,this}let yM=0;class SM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new xM(e),t.set(e,r)),r}}class xM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function MM(s){return s===es||s===Wa||s===Xa}function EM(s,e,t,r,o,l){const c=new np,f=new SM,d=new Set,h=[],p=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return d.add(A),A===0?"uv":`uv${A}`}function P(A,F,W,k,Z,se){const ce=k.fog,Y=Z.geometry,Q=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,j=e.get(A.envMap||Q,J),oe=j&&j.mapping===za?j.image.height:null,re=y[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const R=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,X=R!==void 0?R.length:0;let he=0;Y.morphAttributes.position!==void 0&&(he=1),Y.morphAttributes.normal!==void 0&&(he=2),Y.morphAttributes.color!==void 0&&(he=3);let Re,Ee,K,_e;if(re){const gt=Hi[re];Re=gt.vertexShader,Ee=gt.fragmentShader}else Re=A.vertexShader,Ee=A.fragmentShader,f.update(A),K=f.getVertexShaderID(A),_e=f.getFragmentShaderID(A);const fe=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),qe=Z.isInstancedMesh===!0,He=Z.isBatchedMesh===!0,ye=!!A.map,Pe=!!A.matcap,Ke=!!j,ft=!!A.aoMap,lt=!!A.lightMap,Dt=!!A.bumpMap,bt=!!A.normalMap,zt=!!A.displacementMap,H=!!A.emissiveMap,wt=!!A.metalnessMap,ot=!!A.roughnessMap,xt=A.anisotropy>0,Ce=A.clearcoat>0,It=A.dispersion>0,I=A.iridescence>0,w=A.sheen>0,B=A.transmission>0,de=xt&&!!A.anisotropyMap,me=Ce&&!!A.clearcoatMap,Ae=Ce&&!!A.clearcoatNormalMap,Be=Ce&&!!A.clearcoatRoughnessMap,pe=I&&!!A.iridescenceMap,ve=I&&!!A.iridescenceThicknessMap,Ve=w&&!!A.sheenColorMap,Xe=w&&!!A.sheenRoughnessMap,Ue=!!A.specularMap,Le=!!A.specularColorMap,ht=!!A.specularIntensityMap,mt=B&&!!A.transmissionMap,Tt=B&&!!A.thicknessMap,V=!!A.gradientMap,Ie=!!A.alphaMap,ge=A.alphaTest>0,We=!!A.alphaHash,Oe=!!A.extensions;let Se=Ii;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Qe={shaderID:re,shaderType:A.type,shaderName:A.name,vertexShader:Re,fragmentShader:Ee,defines:A.defines,customVertexShaderID:K,customFragmentShaderID:_e,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:He,batchingColor:He&&Z._colorsTexture!==null,instancing:qe,instancingColor:qe&&Z.instanceColor!==null,instancingMorph:qe&&Z.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:ye,matcap:Pe,envMap:Ke,envMapMode:Ke&&j.mapping,envMapCubeUVHeight:oe,aoMap:ft,lightMap:lt,bumpMap:Dt,normalMap:bt,displacementMap:zt,emissiveMap:H,normalMapObjectSpace:bt&&A.normalMapType===l_,normalMapTangentSpace:bt&&A.normalMapType===Hh,packedNormalMap:bt&&A.normalMapType===Hh&&MM(A.normalMap.format),metalnessMap:wt,roughnessMap:ot,anisotropy:xt,anisotropyMap:de,clearcoat:Ce,clearcoatMap:me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,dispersion:It,iridescence:I,iridescenceMap:pe,iridescenceThicknessMap:ve,sheen:w,sheenColorMap:Ve,sheenRoughnessMap:Xe,specularMap:Ue,specularColorMap:Le,specularIntensityMap:ht,transmission:B,transmissionMap:mt,thicknessMap:Tt,gradientMap:V,opaque:A.transparent===!1&&A.blending===Rs&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ge,alphaHash:We,combine:A.combine,mapUv:ye&&E(A.map.channel),aoMapUv:ft&&E(A.aoMap.channel),lightMapUv:lt&&E(A.lightMap.channel),bumpMapUv:Dt&&E(A.bumpMap.channel),normalMapUv:bt&&E(A.normalMap.channel),displacementMapUv:zt&&E(A.displacementMap.channel),emissiveMapUv:H&&E(A.emissiveMap.channel),metalnessMapUv:wt&&E(A.metalnessMap.channel),roughnessMapUv:ot&&E(A.roughnessMap.channel),anisotropyMapUv:de&&E(A.anisotropyMap.channel),clearcoatMapUv:me&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&E(A.sheenRoughnessMap.channel),specularMapUv:Ue&&E(A.specularMap.channel),specularColorMapUv:Le&&E(A.specularColorMap.channel),specularIntensityMapUv:ht&&E(A.specularIntensityMap.channel),transmissionMapUv:mt&&E(A.transmissionMap.channel),thicknessMapUv:Tt&&E(A.thicknessMap.channel),alphaMapUv:Ie&&E(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(bt||xt),vertexNormals:!!Y.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(ye||Ie),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Y.attributes.normal===void 0&&bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:Z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:he,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:ye&&A.map.isVideoTexture===!0&&Lt.getTransfer(A.map.colorSpace)===Vt,decodeVideoTextureEmissive:H&&A.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(A.emissiveMap.colorSpace)===Vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===st,flipSided:A.side===Vn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Oe&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&A.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Qe.vertexUv1s=d.has(1),Qe.vertexUv2s=d.has(2),Qe.vertexUv3s=d.has(3),d.clear(),Qe}function x(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const W in A.defines)F.push(W),F.push(A.defines[W]);return A.isRawShaderMaterial===!1&&(S(F,A),D(F,A),F.push(s.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function S(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function D(A,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),F.packedNormalMap&&c.enable(22),F.vertexNormals&&c.enable(23),A.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),F.numLightProbeGrids>0&&c.enable(22),A.push(c.mask)}function U(A){const F=y[A.type];let W;if(F){const k=Hi[F];W=M1.clone(k.uniforms)}else W=A.uniforms;return W}function L(A,F){let W=p.get(F);return W!==void 0?++W.usedTimes:(W=new _M(s,F,A,o),h.push(W),p.set(F,W)),W}function N(A){if(--A.usedTimes===0){const F=h.indexOf(A);h[F]=h[h.length-1],h.pop(),p.delete(A.cacheKey),A.destroy()}}function C(A){f.remove(A)}function O(){f.dispose()}return{getParameters:P,getProgramCacheKey:x,getUniforms:U,acquireProgram:L,releaseProgram:N,releaseShaderCache:C,programs:h,dispose:O}}function wM(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function TM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function fm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function dm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function f(v,y,E,P,x,S){let D=s[e];return D===void 0?(D={id:v.id,object:v,geometry:y,material:E,materialVariant:c(v),groupOrder:P,renderOrder:v.renderOrder,z:x,group:S},s[e]=D):(D.id=v.id,D.object=v,D.geometry=y,D.material=E,D.materialVariant=c(v),D.groupOrder=P,D.renderOrder=v.renderOrder,D.z=x,D.group=S),e++,D}function d(v,y,E,P,x,S){const D=f(v,y,E,P,x,S);E.transmission>0?r.push(D):E.transparent===!0?o.push(D):t.push(D)}function h(v,y,E,P,x,S){const D=f(v,y,E,P,x,S);E.transmission>0?r.unshift(D):E.transparent===!0?o.unshift(D):t.unshift(D)}function p(v,y){t.length>1&&t.sort(v||TM),r.length>1&&r.sort(y||fm),o.length>1&&o.sort(y||fm)}function _(){for(let v=e,y=s.length;v<y;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:_,sort:p}}function AM(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new dm,s.set(r,[c])):o>=l.length?(c=new dm,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function RM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ot};break;case"SpotLight":t={position:new M,direction:new M,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new M,halfWidth:new M,halfHeight:new M};break}return s[e.id]=t,t}}}function CM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let bM=0;function PM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LM(s){const e=new RM,t=CM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new M);const o=new M,l=new nn,c=new nn;function f(h){let p=0,_=0,v=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let y=0,E=0,P=0,x=0,S=0,D=0,U=0,L=0,N=0,C=0,O=0;h.sort(PM);for(let F=0,W=h.length;F<W;F++){const k=h[F],Z=k.color,se=k.intensity,ce=k.distance;let Y=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===es?Y=k.shadow.map.texture:Y=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)p+=Z.r*se,_+=Z.g*se,v+=Z.b*se;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(k.sh.coefficients[Q],se);O++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,j=t.get(k);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=k.shadow.matrix,D++}r.directional[y]=Q,y++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(Z).multiplyScalar(se),Q.distance=ce,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,r.spot[P]=Q;const J=k.shadow;if(k.map&&(r.spotLightMap[N]=k.map,N++,J.updateMatrices(k),k.castShadow&&C++),r.spotLightMatrix[P]=J.matrix,k.castShadow){const j=t.get(k);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,r.spotShadow[P]=j,r.spotShadowMap[P]=Y,L++}P++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(Z).multiplyScalar(se),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=Q,x++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const J=k.shadow,j=t.get(k);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=Y,r.pointShadowMatrix[E]=k.shadow.matrix,U++}r.point[E]=Q,E++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(se),Q.groundColor.copy(k.groundColor).multiplyScalar(se),r.hemi[S]=Q,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==y||A.pointLength!==E||A.spotLength!==P||A.rectAreaLength!==x||A.hemiLength!==S||A.numDirectionalShadows!==D||A.numPointShadows!==U||A.numSpotShadows!==L||A.numSpotMaps!==N||A.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=P,r.rectArea.length=x,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=L+N-C,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=O,A.directionalLength=y,A.pointLength=E,A.spotLength=P,A.rectAreaLength=x,A.hemiLength=S,A.numDirectionalShadows=D,A.numPointShadows=U,A.numSpotShadows=L,A.numSpotMaps=N,A.numLightProbes=O,r.version=bM++)}function d(h,p){let _=0,v=0,y=0,E=0,P=0;const x=p.matrixWorldInverse;for(let S=0,D=h.length;S<D;S++){const U=h[S];if(U.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),_++}else if(U.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),y++}else if(U.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),c.identity(),l.copy(U.matrixWorld),l.premultiply(x),c.extractRotation(l),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),E++}else if(U.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),v++}else if(U.isHemisphereLight){const L=r.hemi[P];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(x),P++}}}return{setup:f,setupView:d,state:r}}function hm(s){const e=new LM(s),t=[],r=[],o=[];function l(v){_.camera=v,t.length=0,r.length=0,o.length=0}function c(v){t.push(v)}function f(v){r.push(v)}function d(v){o.push(v)}function h(){e.setup(t)}function p(v){e.setupView(t,v)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function DM(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new hm(s),e.set(o,[f])):l>=c.length?(f=new hm(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NM=`uniform sampler2D shadow_pass;
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
}`,UM=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)],FM=[new M(0,-1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1),new M(0,-1,0),new M(0,-1,0)],pm=new nn,qo=new M,Af=new M;function OM(s,e,t){let r=new cf;const o=new dt,l=new dt,c=new an,f=new A1,d=new R1,h={},p=t.maxTextureSize,_={[xr]:Vn,[Vn]:xr,[st]:st},v=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:IM,fragmentShader:NM}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new _n;E.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new be(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let S=this.type;this.render=function(C,O,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===Bv&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oa);const F=s.getRenderTarget(),W=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Qi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const se=S!==this.type;se&&O.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(Y=>Y.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,Y=C.length;ce<Y;ce++){const Q=C[ce],J=Q.shadow;if(J===void 0){at("WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const j=J.getFrameExtents();o.multiply(j),l.copy(J.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/j.x),o.x=l.x*j.x,J.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/j.y),o.y=l.y*j.y,J.mapSize.y=l.y));const oe=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=oe,J.map===null||se===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Co){if(Q.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new zi(o.x,o.y,{format:es,type:tr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),J.map.texture.name=Q.name+".shadowMap",J.map.depthTexture=new Xs(o.x,o.y,Fi),J.map.depthTexture.name=Q.name+".shadowMapDepth",J.map.depthTexture.format=nr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Mn,J.map.depthTexture.magFilter=Mn}else Q.isPointLight?(J.map=new $p(o.x),J.map.depthTexture=new s1(o.x,Ui)):(J.map=new zi(o.x,o.y),J.map.depthTexture=new Xs(o.x,o.y,Ui)),J.map.depthTexture.name=Q.name+".shadowMap",J.map.depthTexture.format=nr,this.type===Oa?(J.map.depthTexture.compareFunction=oe?Fu:Uu,J.map.depthTexture.minFilter=Rn,J.map.depthTexture.magFilter=Rn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Mn,J.map.depthTexture.magFilter=Mn);J.camera.updateProjectionMatrix()}const re=J.map.isWebGLCubeRenderTarget?6:1;for(let R=0;R<re;R++){if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,R),s.clear();else{R===0&&(s.setRenderTarget(J.map),s.clear());const X=J.getViewport(R);c.set(l.x*X.x,l.y*X.y,l.x*X.z,l.y*X.w),Z.viewport(c)}if(Q.isPointLight){const X=J.camera,he=J.matrix,Re=Q.distance||X.far;Re!==X.far&&(X.far=Re,X.updateProjectionMatrix()),qo.setFromMatrixPosition(Q.matrixWorld),X.position.copy(qo),Af.copy(X.position),Af.add(UM[R]),X.up.copy(FM[R]),X.lookAt(Af),X.updateMatrixWorld(),he.makeTranslation(-qo.x,-qo.y,-qo.z),pm.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J._frustum.setFromProjectionMatrix(pm,X.coordinateSystem,X.reversedDepth)}else J.updateMatrices(Q);r=J.getFrustum(),L(O,A,J.camera,Q,this.type)}J.isPointLightShadow!==!0&&this.type===Co&&D(J,A),J.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(F,W,k)};function D(C,O){const A=e.update(P);v.defines.VSM_SAMPLES!==C.blurSamples&&(v.defines.VSM_SAMPLES=C.blurSamples,y.defines.VSM_SAMPLES=C.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zi(o.x,o.y,{format:es,type:tr})),v.uniforms.shadow_pass.value=C.map.depthTexture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(O,null,A,v,P,null),y.uniforms.shadow_pass.value=C.mapPass.texture,y.uniforms.resolution.value=C.mapSize,y.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(O,null,A,y,P,null)}function U(C,O,A,F){let W=null;const k=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)W=k;else if(W=A.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=W.uuid,se=O.uuid;let ce=h[Z];ce===void 0&&(ce={},h[Z]=ce);let Y=ce[se];Y===void 0&&(Y=W.clone(),ce[se]=Y,O.addEventListener("dispose",N)),W=Y}if(W.visible=O.visible,W.wireframe=O.wireframe,F===Co?W.side=O.shadowSide!==null?O.shadowSide:O.side:W.side=O.shadowSide!==null?O.shadowSide:_[O.side],W.alphaMap=O.alphaMap,W.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,W.map=O.map,W.clipShadows=O.clipShadows,W.clippingPlanes=O.clippingPlanes,W.clipIntersection=O.clipIntersection,W.displacementMap=O.displacementMap,W.displacementScale=O.displacementScale,W.displacementBias=O.displacementBias,W.wireframeLinewidth=O.wireframeLinewidth,W.linewidth=O.linewidth,A.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Z=s.properties.get(W);Z.light=A}return W}function L(C,O,A,F,W){if(C.visible===!1)return;if(C.layers.test(O.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&W===Co)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const se=e.update(C),ce=C.material;if(Array.isArray(ce)){const Y=se.groups;for(let Q=0,J=Y.length;Q<J;Q++){const j=Y[Q],oe=ce[j.materialIndex];if(oe&&oe.visible){const re=U(C,oe,F,W);C.onBeforeShadow(s,C,O,A,se,re,j),s.renderBufferDirect(A,null,se,re,C,j),C.onAfterShadow(s,C,O,A,se,re,j)}}}else if(ce.visible){const Y=U(C,ce,F,W);C.onBeforeShadow(s,C,O,A,se,Y,null),s.renderBufferDirect(A,null,se,Y,C,null),C.onAfterShadow(s,C,O,A,se,Y,null)}}const Z=C.children;for(let se=0,ce=Z.length;se<ce;se++)L(Z[se],O,A,F,W)}function N(C){C.target.removeEventListener("dispose",N);for(const A in h){const F=h[A],W=C.target.uuid;W in F&&(F[W].dispose(),delete F[W])}}}function zM(s,e){function t(){let V=!1;const Ie=new an;let ge=null;const We=new an(0,0,0,0);return{setMask:function(Oe){ge!==Oe&&!V&&(s.colorMask(Oe,Oe,Oe,Oe),ge=Oe)},setLocked:function(Oe){V=Oe},setClear:function(Oe,Se,Qe,gt,Yt){Yt===!0&&(Oe*=gt,Se*=gt,Qe*=gt),Ie.set(Oe,Se,Qe,gt),We.equals(Ie)===!1&&(s.clearColor(Oe,Se,Qe,gt),We.copy(Ie))},reset:function(){V=!1,ge=null,We.set(-1,0,0,0)}}}function r(){let V=!1,Ie=!1,ge=null,We=null,Oe=null;return{setReversed:function(Se){if(Ie!==Se){const Qe=e.get("EXT_clip_control");Se?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ie=Se;const gt=Oe;Oe=null,this.setClear(gt)}},getReversed:function(){return Ie},setTest:function(Se){Se?fe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(Se){ge!==Se&&!V&&(s.depthMask(Se),ge=Se)},setFunc:function(Se){if(Ie&&(Se=__[Se]),We!==Se){switch(Se){case Hc:s.depthFunc(s.NEVER);break;case Vc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case Yc:s.depthFunc(s.GEQUAL);break;case $c:s.depthFunc(s.GREATER);break;case qc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}We=Se}},setLocked:function(Se){V=Se},setClear:function(Se){Oe!==Se&&(Oe=Se,Ie&&(Se=1-Se),s.clearDepth(Se))},reset:function(){V=!1,ge=null,We=null,Oe=null,Ie=!1}}}function o(){let V=!1,Ie=null,ge=null,We=null,Oe=null,Se=null,Qe=null,gt=null,Yt=null;return{setTest:function(Bt){V||(Bt?fe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Bt){Ie!==Bt&&!V&&(s.stencilMask(Bt),Ie=Bt)},setFunc:function(Bt,Bn,hi){(ge!==Bt||We!==Bn||Oe!==hi)&&(s.stencilFunc(Bt,Bn,hi),ge=Bt,We=Bn,Oe=hi)},setOp:function(Bt,Bn,hi){(Se!==Bt||Qe!==Bn||gt!==hi)&&(s.stencilOp(Bt,Bn,hi),Se=Bt,Qe=Bn,gt=hi)},setLocked:function(Bt){V=Bt},setClear:function(Bt){Yt!==Bt&&(s.clearStencil(Bt),Yt=Bt)},reset:function(){V=!1,Ie=null,ge=null,We=null,Oe=null,Se=null,Qe=null,gt=null,Yt=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let p={},_={},v={},y=new WeakMap,E=[],P=null,x=!1,S=null,D=null,U=null,L=null,N=null,C=null,O=null,A=new Ot(0,0,0),F=0,W=!1,k=null,Z=null,se=null,ce=null,Y=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(oe)[1]),J=j>=1):oe.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),J=j>=2);let re=null,R={};const X=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),Re=new an().fromArray(X),Ee=new an().fromArray(he);function K(V,Ie,ge,We){const Oe=new Uint8Array(4),Se=s.createTexture();s.bindTexture(V,Se),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<ge;Qe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,We,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(Ie+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return Se}const _e={};_e[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),fe(s.DEPTH_TEST),c.setFunc(Cs),Dt(!1),bt(Mh),fe(s.CULL_FACE),ft(Qi);function fe(V){p[V]!==!0&&(s.enable(V),p[V]=!0)}function Ne(V){p[V]!==!1&&(s.disable(V),p[V]=!1)}function qe(V,Ie){return v[V]!==Ie?(s.bindFramebuffer(V,Ie),v[V]=Ie,V===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ie),V===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function He(V,Ie){let ge=E,We=!1;if(V){ge=y.get(Ie),ge===void 0&&(ge=[],y.set(Ie,ge));const Oe=V.textures;if(ge.length!==Oe.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Qe=Oe.length;Se<Qe;Se++)ge[Se]=s.COLOR_ATTACHMENT0+Se;ge.length=Oe.length,We=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,We=!0);We&&s.drawBuffers(ge)}function ye(V){return P!==V?(s.useProgram(V),P=V,!0):!1}const Pe={[Kr]:s.FUNC_ADD,[Gv]:s.FUNC_SUBTRACT,[Hv]:s.FUNC_REVERSE_SUBTRACT};Pe[Vv]=s.MIN,Pe[Wv]=s.MAX;const Ke={[Xv]:s.ZERO,[Yv]:s.ONE,[$v]:s.SRC_COLOR,[kc]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Zv]:s.DST_COLOR,[jv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[Gc]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[Kv]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(V,Ie,ge,We,Oe,Se,Qe,gt,Yt,Bt){if(V===Qi){x===!0&&(Ne(s.BLEND),x=!1);return}if(x===!1&&(fe(s.BLEND),x=!0),V!==kv){if(V!==S||Bt!==W){if((D!==Kr||N!==Kr)&&(s.blendEquation(s.FUNC_ADD),D=Kr,N=Kr),Bt)switch(V){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eh:s.blendFunc(s.ONE,s.ONE);break;case wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Th:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",V);break}else switch(V){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wh:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",V);break}U=null,L=null,C=null,O=null,A.set(0,0,0),F=0,S=V,W=Bt}return}Oe=Oe||Ie,Se=Se||ge,Qe=Qe||We,(Ie!==D||Oe!==N)&&(s.blendEquationSeparate(Pe[Ie],Pe[Oe]),D=Ie,N=Oe),(ge!==U||We!==L||Se!==C||Qe!==O)&&(s.blendFuncSeparate(Ke[ge],Ke[We],Ke[Se],Ke[Qe]),U=ge,L=We,C=Se,O=Qe),(gt.equals(A)===!1||Yt!==F)&&(s.blendColor(gt.r,gt.g,gt.b,Yt),A.copy(gt),F=Yt),S=V,W=!1}function lt(V,Ie){V.side===st?Ne(s.CULL_FACE):fe(s.CULL_FACE);let ge=V.side===Vn;Ie&&(ge=!ge),Dt(ge),V.blending===Rs&&V.transparent===!1?ft(Qi):ft(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const We=V.stencilWrite;f.setTest(We),We&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),H(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(V){k!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),k=V)}function bt(V){V!==Ov?(fe(s.CULL_FACE),V!==Z&&(V===Mh?s.cullFace(s.BACK):V===zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),Z=V}function zt(V){V!==se&&(J&&s.lineWidth(V),se=V)}function H(V,Ie,ge){V?(fe(s.POLYGON_OFFSET_FILL),(ce!==Ie||Y!==ge)&&(ce=Ie,Y=ge,c.getReversed()&&(Ie=-Ie),s.polygonOffset(Ie,ge))):Ne(s.POLYGON_OFFSET_FILL)}function wt(V){V?fe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function ot(V){V===void 0&&(V=s.TEXTURE0+Q-1),re!==V&&(s.activeTexture(V),re=V)}function xt(V,Ie,ge){ge===void 0&&(re===null?ge=s.TEXTURE0+Q-1:ge=re);let We=R[ge];We===void 0&&(We={type:void 0,texture:void 0},R[ge]=We),(We.type!==V||We.texture!==Ie)&&(re!==ge&&(s.activeTexture(ge),re=ge),s.bindTexture(V,Ie||_e[V]),We.type=V,We.texture=Ie)}function Ce(){const V=R[re];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function It(){try{s.compressedTexImage2D(...arguments)}catch(V){Ut("WebGLState:",V)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(V){Ut("WebGLState:",V)}}function w(){try{s.texSubImage2D(...arguments)}catch(V){Ut("WebGLState:",V)}}function B(){try{s.texSubImage3D(...arguments)}catch(V){Ut("WebGLState:",V)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Ut("WebGLState:",V)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Ut("WebGLState:",V)}}function Ae(){try{s.texStorage2D(...arguments)}catch(V){Ut("WebGLState:",V)}}function Be(){try{s.texStorage3D(...arguments)}catch(V){Ut("WebGLState:",V)}}function pe(){try{s.texImage2D(...arguments)}catch(V){Ut("WebGLState:",V)}}function ve(){try{s.texImage3D(...arguments)}catch(V){Ut("WebGLState:",V)}}function Ve(V){return _[V]!==void 0?_[V]:s.getParameter(V)}function Xe(V,Ie){_[V]!==Ie&&(s.pixelStorei(V,Ie),_[V]=Ie)}function Ue(V){Re.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Re.copy(V))}function Le(V){Ee.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ee.copy(V))}function ht(V,Ie){let ge=h.get(Ie);ge===void 0&&(ge=new WeakMap,h.set(Ie,ge));let We=ge.get(V);We===void 0&&(We=s.getUniformBlockIndex(Ie,V.name),ge.set(V,We))}function mt(V,Ie){const We=h.get(Ie).get(V);d.get(Ie)!==We&&(s.uniformBlockBinding(Ie,We,V.__bindingPointIndex),d.set(Ie,We))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),p={},_={},re=null,R={},v={},y=new WeakMap,E=[],P=null,x=!1,S=null,D=null,U=null,L=null,N=null,C=null,O=null,A=new Ot(0,0,0),F=0,W=!1,k=null,Z=null,se=null,ce=null,Y=null,Re.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:fe,disable:Ne,bindFramebuffer:qe,drawBuffers:He,useProgram:ye,setBlending:ft,setMaterial:lt,setFlipSided:Dt,setCullFace:bt,setLineWidth:zt,setPolygonOffset:H,setScissorTest:wt,activeTexture:ot,bindTexture:xt,unbindTexture:Ce,compressedTexImage2D:It,compressedTexImage3D:I,texImage2D:pe,texImage3D:ve,pixelStorei:Xe,getParameter:Ve,updateUBOMapping:ht,uniformBlockBinding:mt,texStorage2D:Ae,texStorage3D:Be,texSubImage2D:w,texSubImage3D:B,compressedTexSubImage2D:de,compressedTexSubImage3D:me,scissor:Ue,viewport:Le,reset:Tt}}function BM(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new dt,p=new WeakMap,_=new Set;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(I,w){return E?new OffscreenCanvas(I,w):Do("canvas")}function x(I,w,B){let de=1;const me=It(I);if((me.width>B||me.height>B)&&(de=B/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ae=Math.floor(de*me.width),Be=Math.floor(de*me.height);v===void 0&&(v=P(Ae,Be));const pe=w?P(Ae,Be):v;return pe.width=Ae,pe.height=Be,pe.getContext("2d").drawImage(I,0,0,Ae,Be),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ae+"x"+Be+")."),pe}else return"data"in I&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function S(I){return I.generateMipmaps}function D(I){s.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,w,B,de,me,Ae=!1){if(I!==null){if(s[I]!==void 0)return s[I];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Be;de&&(Be=e.get("EXT_texture_norm16"),Be||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===s.RED&&(B===s.FLOAT&&(pe=s.R32F),B===s.HALF_FLOAT&&(pe=s.R16F),B===s.UNSIGNED_BYTE&&(pe=s.R8),B===s.UNSIGNED_SHORT&&Be&&(pe=Be.R16_EXT),B===s.SHORT&&Be&&(pe=Be.R16_SNORM_EXT)),w===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(pe=s.R8UI),B===s.UNSIGNED_SHORT&&(pe=s.R16UI),B===s.UNSIGNED_INT&&(pe=s.R32UI),B===s.BYTE&&(pe=s.R8I),B===s.SHORT&&(pe=s.R16I),B===s.INT&&(pe=s.R32I)),w===s.RG&&(B===s.FLOAT&&(pe=s.RG32F),B===s.HALF_FLOAT&&(pe=s.RG16F),B===s.UNSIGNED_BYTE&&(pe=s.RG8),B===s.UNSIGNED_SHORT&&Be&&(pe=Be.RG16_EXT),B===s.SHORT&&Be&&(pe=Be.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(pe=s.RG8UI),B===s.UNSIGNED_SHORT&&(pe=s.RG16UI),B===s.UNSIGNED_INT&&(pe=s.RG32UI),B===s.BYTE&&(pe=s.RG8I),B===s.SHORT&&(pe=s.RG16I),B===s.INT&&(pe=s.RG32I)),w===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),B===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),B===s.UNSIGNED_INT&&(pe=s.RGB32UI),B===s.BYTE&&(pe=s.RGB8I),B===s.SHORT&&(pe=s.RGB16I),B===s.INT&&(pe=s.RGB32I)),w===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),B===s.UNSIGNED_INT&&(pe=s.RGBA32UI),B===s.BYTE&&(pe=s.RGBA8I),B===s.SHORT&&(pe=s.RGBA16I),B===s.INT&&(pe=s.RGBA32I)),w===s.RGB&&(B===s.UNSIGNED_SHORT&&Be&&(pe=Be.RGB16_EXT),B===s.SHORT&&Be&&(pe=Be.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),w===s.RGBA){const ve=Ae?$a:Lt.getTransfer(me);B===s.FLOAT&&(pe=s.RGBA32F),B===s.HALF_FLOAT&&(pe=s.RGBA16F),B===s.UNSIGNED_BYTE&&(pe=ve===Vt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&Be&&(pe=Be.RGBA16_EXT),B===s.SHORT&&Be&&(pe=Be.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(I,w){let B;return I?w===null||w===Ui||w===Po?B=s.DEPTH24_STENCIL8:w===Fi?B=s.DEPTH32F_STENCIL8:w===bo&&(B=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ui||w===Po?B=s.DEPTH_COMPONENT24:w===Fi?B=s.DEPTH_COMPONENT32F:w===bo&&(B=s.DEPTH_COMPONENT16),B}function C(I,w){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mn&&I.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function O(I){const w=I.target;w.removeEventListener("dispose",O),F(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&_.delete(w)}function A(I){const w=I.target;w.removeEventListener("dispose",A),k(w)}function F(I){const w=r.get(I);if(w.__webglInit===void 0)return;const B=I.source,de=y.get(B);if(de){const me=de[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&W(I),Object.keys(de).length===0&&y.delete(B)}r.remove(I)}function W(I){const w=r.get(I);s.deleteTexture(w.__webglTexture);const B=I.source,de=y.get(B);delete de[w.__cacheKey],c.memory.textures--}function k(I){const w=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let me=0;me<w.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(w.__webglFramebuffer[de][me]);else s.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)s.deleteFramebuffer(w.__webglFramebuffer[de]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const B=I.textures;for(let de=0,me=B.length;de<me;de++){const Ae=r.get(B[de]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),c.memory.textures--),r.remove(B[de])}r.remove(I)}let Z=0;function se(){Z=0}function ce(){return Z}function Y(I){Z=I}function Q(){const I=Z;return I>=o.maxTextures&&at("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),Z+=1,I}function J(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function j(I,w){const B=r.get(I);if(I.isVideoTexture&&xt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&B.__version!==I.version){const de=I.image;if(de===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(B,I,w);return}}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+w)}function oe(I,w){const B=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){Ne(B,I,w);return}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+w)}function re(I,w){const B=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){Ne(B,I,w);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+w)}function R(I,w){const B=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&B.__version!==I.version){qe(B,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+w)}const X={[Ni]:s.REPEAT,[er]:s.CLAMP_TO_EDGE,[Zc]:s.MIRRORED_REPEAT},he={[Mn]:s.NEAREST,[o_]:s.NEAREST_MIPMAP_NEAREST,[Ba]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[Jc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},Re={[c_]:s.NEVER,[p_]:s.ALWAYS,[u_]:s.LESS,[Uu]:s.LEQUAL,[f_]:s.EQUAL,[Fu]:s.GEQUAL,[d_]:s.GREATER,[h_]:s.NOTEQUAL};function Ee(I,w){if(w.type===Fi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rn||w.magFilter===Jc||w.magFilter===Ba||w.magFilter===Jr||w.minFilter===Rn||w.minFilter===Jc||w.minFilter===Ba||w.minFilter===Jr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,X[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,X[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,X[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,he[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,he[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mn||w.minFilter!==Ba&&w.minFilter!==Jr||w.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function K(I,w){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",O));const de=w.source;let me=y.get(de);me===void 0&&(me={},y.set(de,me));const Ae=J(w);if(Ae!==I.__cacheKey){me[Ae]===void 0&&(me[Ae]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,B=!0),me[Ae].usedTimes++;const Be=me[I.__cacheKey];Be!==void 0&&(me[I.__cacheKey].usedTimes--,Be.usedTimes===0&&W(w)),I.__cacheKey=Ae,I.__webglTexture=me[Ae].texture}return B}function _e(I,w,B){return Math.floor(Math.floor(I/B)/w)}function fe(I,w,B,de){const Ae=I.updateRanges;if(Ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,B,de,w.data);else{Ae.sort((Xe,Ue)=>Xe.start-Ue.start);let Be=0;for(let Xe=1;Xe<Ae.length;Xe++){const Ue=Ae[Be],Le=Ae[Xe],ht=Ue.start+Ue.count,mt=_e(Le.start,w.width,4),Tt=_e(Ue.start,w.width,4);Le.start<=ht+1&&mt===Tt&&_e(Le.start+Le.count-1,w.width,4)===mt?Ue.count=Math.max(Ue.count,Le.start+Le.count-Ue.start):(++Be,Ae[Be]=Le)}Ae.length=Be+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),Ve=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Xe=0,Ue=Ae.length;Xe<Ue;Xe++){const Le=Ae[Xe],ht=Math.floor(Le.start/4),mt=Math.ceil(Le.count/4),Tt=ht%w.width,V=Math.floor(ht/w.width),Ie=mt,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Tt),t.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,Tt,V,Ie,ge,B,de,w.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve)}}function Ne(I,w,B){let de=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=s.TEXTURE_3D);const me=K(I,w),Ae=w.source;t.bindTexture(de,I.__webglTexture,s.TEXTURE0+B);const Be=r.get(Ae);if(Ae.version!==Be.__version||me===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ge=Lt.getPrimaries(Lt.workingColorSpace),We=w.colorSpace===Mr?null:Lt.getPrimaries(w.colorSpace),Oe=w.colorSpace===Mr||ge===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=x(w.image,!1,o.maxTextureSize);ve=Ce(w,ve);const Ve=l.convert(w.format,w.colorSpace),Xe=l.convert(w.type);let Ue=L(w.internalFormat,Ve,Xe,w.normalized,w.colorSpace,w.isVideoTexture);Ee(de,w);let Le;const ht=w.mipmaps,mt=w.isVideoTexture!==!0,Tt=Be.__version===void 0||me===!0,V=Ae.dataReady,Ie=C(w,ve);if(w.isDepthTexture)Ue=N(w.format===Qr,w.type),Tt&&(mt?t.texStorage2D(s.TEXTURE_2D,1,Ue,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ve,Xe,null));else if(w.isDataTexture)if(ht.length>0){mt&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ie,Ue,ht[0].width,ht[0].height);for(let ge=0,We=ht.length;ge<We;ge++)Le=ht[ge],mt?V&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ve,Xe,Le.data):t.texImage2D(s.TEXTURE_2D,ge,Ue,Le.width,Le.height,0,Ve,Xe,Le.data);w.generateMipmaps=!1}else mt?(Tt&&t.texStorage2D(s.TEXTURE_2D,Ie,Ue,ve.width,ve.height),V&&fe(w,ve,Ve,Xe)):t.texImage2D(s.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ve,Xe,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){mt&&Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ue,ht[0].width,ht[0].height,ve.depth);for(let ge=0,We=ht.length;ge<We;ge++)if(Le=ht[ge],w.format!==Si)if(Ve!==null)if(mt){if(V)if(w.layerUpdates.size>0){const Oe=zp(Le.width,Le.height,w.format,w.type);for(const Se of w.layerUpdates){const Qe=Le.data.subarray(Se*Oe/Le.data.BYTES_PER_ELEMENT,(Se+1)*Oe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,Se,Le.width,Le.height,1,Ve,Qe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,ve.depth,Ve,Le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ue,Le.width,Le.height,ve.depth,0,Le.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,ve.depth,Ve,Xe,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ue,Le.width,Le.height,ve.depth,0,Ve,Xe,Le.data)}else{mt&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ie,Ue,ht[0].width,ht[0].height);for(let ge=0,We=ht.length;ge<We;ge++)Le=ht[ge],w.format!==Si?Ve!==null?mt?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ve,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ue,Le.width,Le.height,0,Le.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?V&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ve,Xe,Le.data):t.texImage2D(s.TEXTURE_2D,ge,Ue,Le.width,Le.height,0,Ve,Xe,Le.data)}else if(w.isDataArrayTexture)if(mt){if(Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ue,ve.width,ve.height,ve.depth),V)if(w.layerUpdates.size>0){const ge=zp(ve.width,ve.height,w.format,w.type);for(const We of w.layerUpdates){const Oe=ve.data.subarray(We*ge/ve.data.BYTES_PER_ELEMENT,(We+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,We,ve.width,ve.height,1,Ve,Xe,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ve,Xe,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,ve.width,ve.height,ve.depth,0,Ve,Xe,ve.data);else if(w.isData3DTexture)mt?(Tt&&t.texStorage3D(s.TEXTURE_3D,Ie,Ue,ve.width,ve.height,ve.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ve,Xe,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,ve.width,ve.height,ve.depth,0,Ve,Xe,ve.data);else if(w.isFramebufferTexture){if(Tt)if(mt)t.texStorage2D(s.TEXTURE_2D,Ie,Ue,ve.width,ve.height);else{let ge=ve.width,We=ve.height;for(let Oe=0;Oe<Ie;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Ue,ge,We,0,Ve,Xe,null),ge>>=1,We>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),_.add(w),ge.onpaint=gt=>{const Yt=gt.changedElements;for(const Bt of _)Yt.includes(Bt.image)&&(Bt.needsUpdate=!0)},ge.requestPaint();return}const We=0,Oe=s.RGBA,Se=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,We,Oe,Se,Qe,ve),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ht.length>0){if(mt&&Tt){const ge=It(ht[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Ue,ge.width,ge.height)}for(let ge=0,We=ht.length;ge<We;ge++)Le=ht[ge],mt?V&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ve,Xe,Le):t.texImage2D(s.TEXTURE_2D,ge,Ue,Ve,Xe,Le);w.generateMipmaps=!1}else if(mt){if(Tt){const ge=It(ve);t.texStorage2D(s.TEXTURE_2D,Ie,Ue,ge.width,ge.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,Xe,ve)}else t.texImage2D(s.TEXTURE_2D,0,Ue,Ve,Xe,ve);S(w)&&D(de),Be.__version=Ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function qe(I,w,B){if(w.image.length!==6)return;const de=K(I,w),me=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+B);const Ae=r.get(me);if(me.version!==Ae.__version||de===!0){t.activeTexture(s.TEXTURE0+B);const Be=Lt.getPrimaries(Lt.workingColorSpace),pe=w.colorSpace===Mr?null:Lt.getPrimaries(w.colorSpace),ve=w.colorSpace===Mr||Be===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ve=w.isCompressedTexture||w.image[0].isCompressedTexture,Xe=w.image[0]&&w.image[0].isDataTexture,Ue=[];for(let Se=0;Se<6;Se++)!Ve&&!Xe?Ue[Se]=x(w.image[Se],!0,o.maxCubemapSize):Ue[Se]=Xe?w.image[Se].image:w.image[Se],Ue[Se]=Ce(w,Ue[Se]);const Le=Ue[0],ht=l.convert(w.format,w.colorSpace),mt=l.convert(w.type),Tt=L(w.internalFormat,ht,mt,w.normalized,w.colorSpace),V=w.isVideoTexture!==!0,Ie=Ae.__version===void 0||de===!0,ge=me.dataReady;let We=C(w,Le);Ee(s.TEXTURE_CUBE_MAP,w);let Oe;if(Ve){V&&Ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,We,Tt,Le.width,Le.height);for(let Se=0;Se<6;Se++){Oe=Ue[Se].mipmaps;for(let Qe=0;Qe<Oe.length;Qe++){const gt=Oe[Qe];w.format!==Si?ht!==null?V?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe,0,0,gt.width,gt.height,ht,gt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe,Tt,gt.width,gt.height,0,gt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe,0,0,gt.width,gt.height,ht,mt,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe,Tt,gt.width,gt.height,0,ht,mt,gt.data)}}}else{if(Oe=w.mipmaps,V&&Ie){Oe.length>0&&We++;const Se=It(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,We,Tt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Xe){V?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue[Se].width,Ue[Se].height,ht,mt,Ue[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Tt,Ue[Se].width,Ue[Se].height,0,ht,mt,Ue[Se].data);for(let Qe=0;Qe<Oe.length;Qe++){const Yt=Oe[Qe].image[Se].image;V?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe+1,0,0,Yt.width,Yt.height,ht,mt,Yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe+1,Tt,Yt.width,Yt.height,0,ht,mt,Yt.data)}}else{V?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ht,mt,Ue[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Tt,ht,mt,Ue[Se]);for(let Qe=0;Qe<Oe.length;Qe++){const gt=Oe[Qe];V?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe+1,0,0,ht,mt,gt.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Qe+1,Tt,ht,mt,gt.image[Se])}}}S(w)&&D(s.TEXTURE_CUBE_MAP),Ae.__version=me.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function He(I,w,B,de,me,Ae){const Be=l.convert(B.format,B.colorSpace),pe=l.convert(B.type),ve=L(B.internalFormat,Be,pe,B.normalized,B.colorSpace),Ve=r.get(w),Xe=r.get(B);if(Xe.__renderTarget=w,!Ve.__hasExternalTextures){const Ue=Math.max(1,w.width>>Ae),Le=Math.max(1,w.height>>Ae);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Ae,ve,Ue,Le,w.depth,0,Be,pe,null):t.texImage2D(me,Ae,ve,Ue,Le,0,Be,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ot(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,Xe.__webglTexture,0,wt(w)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,Xe.__webglTexture,Ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(I,w,B){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const de=w.depthTexture,me=de&&de.isDepthTexture?de.type:null,Ae=N(w.stencilBuffer,me),Be=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(w),Ae,w.width,w.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(w),Ae,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,I)}else{const de=w.textures;for(let me=0;me<de.length;me++){const Ae=de[me],Be=l.convert(Ae.format,Ae.colorSpace),pe=l.convert(Ae.type),ve=L(Ae.internalFormat,Be,pe,Ae.normalized,Ae.colorSpace);ot(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt(w),ve,w.width,w.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt(w),ve,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ve,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(I,w,B){const de=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);if(me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de){if(me.__webglInit===void 0&&(me.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,w.depthTexture);const Ve=l.convert(w.depthTexture.format),Xe=l.convert(w.depthTexture.type);let Ue;w.depthTexture.format===nr?Ue=s.DEPTH_COMPONENT24:w.depthTexture.format===Qr&&(Ue=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ue,w.width,w.height,0,Ve,Xe,null)}}else j(w.depthTexture,0);const Ae=me.__webglTexture,Be=wt(w),pe=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,ve=w.depthTexture.format===Qr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===nr)ot(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,pe,Ae,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,ve,pe,Ae,0);else if(w.depthTexture.format===Qr)ot(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,pe,Ae,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,ve,pe,Ae,0);else throw new Error("Unknown depthTexture format")}function Ke(I){const w=r.get(I),B=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const de=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=de}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(B)for(let de=0;de<6;de++)Pe(w.__webglFramebuffer[de],I,de);else{const de=I.texture.mipmaps;de&&de.length>0?Pe(w.__webglFramebuffer[0],I,0):Pe(w.__webglFramebuffer,I,0)}else if(B){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=s.createRenderbuffer(),ye(w.__webglDepthbuffer[de],I,!1);else{const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=w.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ae)}}else{const de=I.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ye(w.__webglDepthbuffer,I,!1);else{const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(I,w,B){const de=r.get(I);w!==void 0&&He(de.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ke(I)}function lt(I){const w=I.texture,B=r.get(I),de=r.get(w);I.addEventListener("dispose",A);const me=I.textures,Ae=I.isWebGLCubeRenderTarget===!0,Be=me.length>1;if(Be||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=w.version,c.memory.textures++),Ae){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let ve=0;ve<w.mipmaps.length;ve++)B.__webglFramebuffer[pe][ve]=s.createFramebuffer()}else B.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)B.__webglFramebuffer[pe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Be)for(let pe=0,ve=me.length;pe<ve;pe++){const Ve=r.get(me[pe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&ot(I)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<me.length;pe++){const ve=me[pe];B.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const Ve=l.convert(ve.format,ve.colorSpace),Xe=l.convert(ve.type),Ue=L(ve.internalFormat,Ve,Xe,ve.normalized,ve.colorSpace,I.isXRRenderTarget===!0),Le=wt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Ue,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)He(B.__webglFramebuffer[pe][ve],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else He(B.__webglFramebuffer[pe],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(w)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let pe=0,ve=me.length;pe<ve;pe++){const Ve=me[pe],Xe=r.get(Ve);let Ue=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ue=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Xe.__webglTexture),Ee(Ue,Ve),He(B.__webglFramebuffer,I,Ve,s.COLOR_ATTACHMENT0+pe,Ue,0),S(Ve)&&D(Ue)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,de.__webglTexture),Ee(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)He(B.__webglFramebuffer[ve],I,w,s.COLOR_ATTACHMENT0,pe,ve);else He(B.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,pe,0);S(w)&&D(pe),t.unbindTexture()}I.depthBuffer&&Ke(I)}function Dt(I){const w=I.textures;for(let B=0,de=w.length;B<de;B++){const me=w[B];if(S(me)){const Ae=U(I),Be=r.get(me).__webglTexture;t.bindTexture(Ae,Be),D(Ae),t.unbindTexture()}}}const bt=[],zt=[];function H(I){if(I.samples>0){if(ot(I)===!1){const w=I.textures,B=I.width,de=I.height;let me=s.COLOR_BUFFER_BIT;const Ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(I),pe=w.length>1;if(pe)for(let Ve=0;Ve<w.length;Ve++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const ve=I.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ve=0;Ve<w.length;Ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const Xe=r.get(w[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,B,de,0,0,B,de,me,s.NEAREST),d===!0&&(bt.length=0,zt.length=0,bt.push(s.COLOR_ATTACHMENT0+Ve),I.depthBuffer&&I.resolveDepthBuffer===!1&&(bt.push(Ae),zt.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ve=0;Ve<w.length;Ve++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const Xe=r.get(w[Ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function wt(I){return Math.min(o.maxSamples,I.samples)}function ot(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function xt(I){const w=c.render.frame;p.get(I)!==w&&(p.set(I,w),I.update())}function Ce(I,w){const B=I.colorSpace,de=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==Ya&&B!==Mr&&(Lt.getTransfer(B)===Vt?(de!==Si||me!==Jn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",B)),w}function It(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=Y,this.setTexture2D=j,this.setTexture2DArray=oe,this.setTexture3D=re,this.setTextureCube=R,this.rebindTextures=ft,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=He,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kM(s,e){function t(r,o=Mr){let l;const c=Lt.getTransfer(o);if(r===Jn)return s.UNSIGNED_BYTE;if(r===eu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===zh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Uh)return s.BYTE;if(r===Fh)return s.SHORT;if(r===bo)return s.UNSIGNED_SHORT;if(r===Qc)return s.INT;if(r===Ui)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===tr)return s.HALF_FLOAT;if(r===Bh)return s.ALPHA;if(r===kh)return s.RGB;if(r===Si)return s.RGBA;if(r===nr)return s.DEPTH_COMPONENT;if(r===Qr)return s.DEPTH_STENCIL;if(r===Gh)return s.RED;if(r===nu)return s.RED_INTEGER;if(r===es)return s.RG;if(r===iu)return s.RG_INTEGER;if(r===ru)return s.RGBA_INTEGER;if(r===ka||r===Ga||r===Ha||r===Va)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ka)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ga)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ha)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Va)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ka)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ga)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ha)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Va)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===su||r===ou||r===au||r===lu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===su)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ou)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===au)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cu||r===uu||r===fu||r===du||r===hu||r===Wa||r===pu)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===cu||r===uu)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===fu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===du)return l.COMPRESSED_R11_EAC;if(r===hu)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Wa)return l.COMPRESSED_RG11_EAC;if(r===pu)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===mu||r===gu||r===vu||r===_u||r===yu||r===Su||r===xu||r===Mu||r===Eu||r===wu||r===Tu||r===Au||r===Ru||r===Cu)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===mu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_u)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Su)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Au)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ru)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bu||r===Pu||r===Lu)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bu)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pu)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lu)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Du||r===Iu||r===Xa||r===Nu)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Du)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Iu)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xa)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nu)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const GM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`;class VM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Mp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ki({vertexShader:GM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new _l(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WM extends ts{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,p=null,_=null,v=null,y=null,E=null;const P=typeof XRWebGLBinding<"u",x=new VM,S={},D=t.getContextAttributes();let U=null,L=null;const N=[],C=[],O=new dt;let A=null;const F=new zn;F.viewport=new an;const W=new zn;W.viewport=new an;const k=[F,W],Z=new N1;let se=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let _e=N[K];return _e===void 0&&(_e=new Xu,N[K]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(K){let _e=N[K];return _e===void 0&&(_e=new Xu,N[K]=_e),_e.getGripSpace()},this.getHand=function(K){let _e=N[K];return _e===void 0&&(_e=new Xu,N[K]=_e),_e.getHandSpace()};function Y(K){const _e=C.indexOf(K.inputSource);if(_e===-1)return;const fe=N[_e];fe!==void 0&&(fe.update(K.inputSource,K.frame,h||c),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function Q(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",J);for(let K=0;K<N.length;K++){const _e=C[K];_e!==null&&(C[K]=null,N[K].disconnect(_e))}se=null,ce=null,x.reset();for(const K in S)delete S[K];e.setRenderTarget(U),y=null,v=null,_=null,o=null,L=null,Ee.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&P&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",J),D.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ne=null,qe=null;D.depth&&(qe=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=D.stencil?Qr:nr,Ne=D.stencil?Po:Ui);const He={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(He),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new zi(v.textureWidth,v.textureHeight,{format:Si,type:Jn,depthTexture:new Xs(v.textureWidth,v.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const fe={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new zi(y.framebufferWidth,y.framebufferHeight,{format:Si,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),Ee.setContext(o),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(K){for(let _e=0;_e<K.removed.length;_e++){const fe=K.removed[_e],Ne=C.indexOf(fe);Ne>=0&&(C[Ne]=null,N[Ne].disconnect(fe))}for(let _e=0;_e<K.added.length;_e++){const fe=K.added[_e];let Ne=C.indexOf(fe);if(Ne===-1){for(let He=0;He<N.length;He++)if(He>=C.length){C.push(fe),Ne=He;break}else if(C[He]===null){C[He]=fe,Ne=He;break}if(Ne===-1)break}const qe=N[Ne];qe&&qe.connect(fe)}}const j=new M,oe=new M;function re(K,_e,fe){j.setFromMatrixPosition(_e.matrixWorld),oe.setFromMatrixPosition(fe.matrixWorld);const Ne=j.distanceTo(oe),qe=_e.projectionMatrix.elements,He=fe.projectionMatrix.elements,ye=qe[14]/(qe[10]-1),Pe=qe[14]/(qe[10]+1),Ke=(qe[9]+1)/qe[5],ft=(qe[9]-1)/qe[5],lt=(qe[8]-1)/qe[0],Dt=(He[8]+1)/He[0],bt=ye*lt,zt=ye*Dt,H=Ne/(-lt+Dt),wt=H*-lt;if(_e.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ(H),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),qe[10]===-1)K.projectionMatrix.copy(_e.projectionMatrix),K.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const ot=ye+H,xt=Pe+H,Ce=bt-wt,It=zt+(Ne-wt),I=Ke*Pe/xt*ot,w=ft*Pe/xt*ot;K.projectionMatrix.makePerspective(Ce,It,I,w,ot,xt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function R(K,_e){_e===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(_e.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let _e=K.near,fe=K.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),Z.near=W.near=F.near=_e,Z.far=W.far=F.far=fe,(se!==Z.near||ce!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),se=Z.near,ce=Z.far),Z.layers.mask=K.layers.mask|6,F.layers.mask=Z.layers.mask&-5,W.layers.mask=Z.layers.mask&-3;const Ne=K.parent,qe=Z.cameras;R(Z,Ne);for(let He=0;He<qe.length;He++)R(qe[He],Ne);qe.length===2?re(Z,F,W):Z.projectionMatrix.copy(F.projectionMatrix),X(K,Z,Ne)};function X(K,_e,fe){fe===null?K.matrix.copy(_e.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(_e.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(_e.projectionMatrix),K.projectionMatrixInverse.copy(_e.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=No*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(K){d=K,v!==null&&(v.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(K){return S[K]};let he=null;function Re(K,_e){if(p=_e.getViewerPose(h||c),E=_e,p!==null){const fe=p.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Ne=!1;fe.length!==Z.cameras.length&&(Z.cameras.length=0,Ne=!0);for(let Pe=0;Pe<fe.length;Pe++){const Ke=fe[Pe];let ft=null;if(y!==null)ft=y.getViewport(Ke);else{const Dt=_.getViewSubImage(v,Ke);ft=Dt.viewport,Pe===0&&(e.setRenderTargetTextures(L,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(L))}let lt=k[Pe];lt===void 0&&(lt=new zn,lt.layers.enable(Pe),lt.viewport=new an,k[Pe]=lt),lt.matrix.fromArray(Ke.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Ke.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ft.x,ft.y,ft.width,ft.height),Pe===0&&(Z.matrix.copy(lt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ne===!0&&Z.cameras.push(lt)}const qe=o.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&P){_=r.getBinding();const Pe=_.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(Pe,o.renderState)}if(qe&&qe.includes("camera-access")&&P){e.state.unbindTexture(),_=r.getBinding();for(let Pe=0;Pe<fe.length;Pe++){const Ke=fe[Pe].camera;if(Ke){let ft=S[Ke];ft||(ft=new Mp,S[Ke]=ft);const lt=_.getCameraImage(Ke);ft.sourceTexture=lt}}}}for(let fe=0;fe<N.length;fe++){const Ne=C[fe],qe=N[fe];Ne!==null&&qe!==void 0&&qe.update(Ne,_e,h||c)}he&&he(K,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),E=null}const Ee=new Bp;Ee.setAnimationLoop(Re),this.setAnimationLoop=function(K){he=K},this.dispose=function(){}}}const XM=new nn,mm=new yt;mm.set(-1,0,0,0,1,0,0,0,1);function YM(s,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,bp(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,D,U,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),p(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),v(x,S),S.isMeshPhysicalMaterial&&y(x,S,L)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),P(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?d(x,S,D,U):S.isSpriteMaterial?h(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Vn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Vn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const D=e.get(S),U=D.envMap,L=D.envMapRotation;U&&(x.envMap.value=U,x.envMapRotation.value.setFromMatrix4(XM.makeRotationFromEuler(L)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(mm),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function d(x,S,D,U){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*D,x.scale.value=U*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,D){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Vn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function P(x,S){const D=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function $M(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,U){const L=U.program;r.uniformBlockBinding(D,L)}function h(D,U){let L=o[D.id];L===void 0&&(E(D),L=p(D),o[D.id]=L,D.addEventListener("dispose",x));const N=U.program;r.updateUBOMapping(D,N);const C=e.render.frame;l[D.id]!==C&&(v(D),l[D.id]=C)}function p(D){const U=_();D.__bindingPointIndex=U;const L=s.createBuffer(),N=D.__size,C=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,N,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,L),L}function _(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const U=o[D.id],L=D.uniforms,N=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let C=0,O=L.length;C<O;C++){const A=Array.isArray(L[C])?L[C]:[L[C]];for(let F=0,W=A.length;F<W;F++){const k=A[F];if(y(k,C,F,N)===!0){const Z=k.__offset,se=Array.isArray(k.value)?k.value:[k.value];let ce=0;for(let Y=0;Y<se.length;Y++){const Q=se[Y],J=P(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,Z+ce,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):ArrayBuffer.isView(Q)?k.__data.set(new Q.constructor(Q.buffer,Q.byteOffset,k.__data.length)):(Q.toArray(k.__data,ce),ce+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(D,U,L,N){const C=D.value,O=U+"_"+L;if(N[O]===void 0)return typeof C=="number"||typeof C=="boolean"?N[O]=C:ArrayBuffer.isView(C)?N[O]=C.slice():N[O]=C.clone(),!0;{const A=N[O];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return N[O]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(A.equals(C)===!1)return A.copy(C),!0}}return!1}function E(D){const U=D.uniforms;let L=0;const N=16;for(let O=0,A=U.length;O<A;O++){const F=Array.isArray(U[O])?U[O]:[U[O]];for(let W=0,k=F.length;W<k;W++){const Z=F[W],se=Array.isArray(Z.value)?Z.value:[Z.value];for(let ce=0,Y=se.length;ce<Y;ce++){const Q=se[ce],J=P(Q),j=L%N,oe=j%J.boundary,re=j+oe;L+=oe,re!==0&&N-re<J.storage&&(L+=N-re),Z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=J.storage}}}const C=L%N;return C>0&&(L+=N-C),D.__size=L,D.__cache={},this}function P(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(U.boundary=16,U.storage=D.byteLength):at("WebGLRenderer: Unsupported uniform value type.",D),U}function x(D){const U=D.target;U.removeEventListener("dispose",x);const L=c.indexOf(U.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(o[U.id]),delete o[U.id],delete l[U.id]}function S(){for(const D in o)s.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:d,update:h,dispose:S}}const qM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function jM(){return Vi===null&&(Vi=new Q_(qM,16,16,es,tr),Vi.name="DFG_LUT",Vi.minFilter=Rn,Vi.magFilter=Rn,Vi.wrapS=er,Vi.wrapT=er,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class bl{constructor(e={}){const{canvas:t=g_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Jn}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const P=y,x=new Set([ru,iu,nu]),S=new Set([Jn,Ui,bo,Po,eu,tu]),D=new Uint32Array(4),U=new Int32Array(4),L=new M;let N=null,C=null;const O=[],A=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let k=!1,Z=null;this._outputColorSpace=ci;let se=0,ce=0,Y=null,Q=-1,J=null;const j=new an,oe=new an;let re=null;const R=new Ot(0);let X=0,he=t.width,Re=t.height,Ee=1,K=null,_e=null;const fe=new an(0,0,he,Re),Ne=new an(0,0,he,Re);let qe=!1;const He=new cf;let ye=!1,Pe=!1;const Ke=new nn,ft=new M,lt=new an,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function zt(){return Y===null?Ee:1}let H=r;function wt(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",gt,!1),H===null){const q="webgl2";if(H=wt(q,b),H===null)throw wt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ut("WebGLRenderer: "+b.message),b}let ot,xt,Ce,It,I,w,B,de,me,Ae,Be,pe,ve,Ve,Xe,Ue,Le,ht,mt,Tt,V,Ie,ge;function We(){ot=new jS(H),ot.init(),V=new kM(H,ot),xt=new GS(H,ot,e,V),Ce=new zM(H,ot),xt.reversedDepthBuffer&&v&&Ce.buffers.depth.setReversed(!0),It=new JS(H),I=new wM,w=new BM(H,ot,Ce,I,xt,V,It),B=new qS(W),de=new F1(H),Ie=new BS(H,de),me=new KS(H,de,It,Ie),Ae=new ex(H,me,de,Ie,It),ht=new QS(H,xt,w),Xe=new HS(I),Be=new EM(W,B,ot,xt,Ie,Xe),pe=new YM(W,I),ve=new AM,Ve=new DM(ot),Le=new zS(W,B,Ce,Ae,E,d),Ue=new OM(W,Ae,xt),ge=new $M(H,It,xt,Ce),mt=new kS(H,ot,It),Tt=new ZS(H,ot,It),It.programs=Be.programs,W.capabilities=xt,W.extensions=ot,W.properties=I,W.renderLists=ve,W.shadowMap=Ue,W.state=Ce,W.info=It}We(),P!==Jn&&(F=new nx(P,t.width,t.height,o,l));const Oe=new WM(W,H);this.xr=Oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(b){b!==void 0&&(Ee=b,this.setSize(he,Re,!1))},this.getSize=function(b){return b.set(he,Re)},this.setSize=function(b,q,ae=!0){if(Oe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}he=b,Re=q,t.width=Math.floor(b*Ee),t.height=Math.floor(q*Ee),ae===!0&&(t.style.width=b+"px",t.style.height=q+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(he*Ee,Re*Ee).floor()},this.setDrawingBufferSize=function(b,q,ae){he=b,Re=q,Ee=ae,t.width=Math.floor(b*ae),t.height=Math.floor(q*ae),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(P===Jn){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){at("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(j)},this.getViewport=function(b){return b.copy(fe)},this.setViewport=function(b,q,ae,ne){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,q,ae,ne),Ce.viewport(j.copy(fe).multiplyScalar(Ee).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,q,ae,ne){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,q,ae,ne),Ce.scissor(oe.copy(Ne).multiplyScalar(Ee).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){Ce.setScissorTest(qe=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,ae=!0){let ne=0;if(b){let te=!1;if(Y!==null){const ze=Y.texture.format;te=x.has(ze)}if(te){const ze=Y.texture.type,je=S.has(ze),Fe=Le.getClearColor(),et=Le.getClearAlpha(),rt=Fe.r,vt=Fe.g,_t=Fe.b;je?(D[0]=rt,D[1]=vt,D[2]=_t,D[3]=et,H.clearBufferuiv(H.COLOR,0,D)):(U[0]=rt,U[1]=vt,U[2]=_t,U[3]=et,H.clearBufferiv(H.COLOR,0,U))}else ne|=H.COLOR_BUFFER_BIT}q&&(ne|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Le.dispose(),ve.dispose(),Ve.dispose(),I.dispose(),B.dispose(),Ae.dispose(),Ie.dispose(),ge.dispose(),Be.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",ds),Oe.removeEventListener("sessionend",io),fr.stop()};function Se(b){b.preventDefault(),$h("WebGLRenderer: Context Lost."),k=!0}function Qe(){$h("WebGLRenderer: Context Restored."),k=!1;const b=It.autoReset,q=Ue.enabled,ae=Ue.autoUpdate,ne=Ue.needsUpdate,te=Ue.type;We(),It.autoReset=b,Ue.enabled=q,Ue.autoUpdate=ae,Ue.needsUpdate=ne,Ue.type=te}function gt(b){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Yt(b){const q=b.target;q.removeEventListener("dispose",Yt),Bt(q)}function Bt(b){Bn(b),I.remove(b)}function Bn(b){const q=I.get(b).programs;q!==void 0&&(q.forEach(function(ae){Be.releaseProgram(ae)}),b.isShaderMaterial&&Be.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ae,ne,te,ze){q===null&&(q=Dt);const je=te.isMesh&&te.matrixWorld.determinant()<0,Fe=Ul(b,q,ae,ne,te);Ce.setMaterial(ne,je);let et=ae.index,rt=1;if(ne.wireframe===!0){if(et=me.getWireframeAttribute(ae),et===void 0)return;rt=2}const vt=ae.drawRange,_t=ae.attributes.position;let nt=vt.start*rt,Nt=(vt.start+vt.count)*rt;ze!==null&&(nt=Math.max(nt,ze.start*rt),Nt=Math.min(Nt,(ze.start+ze.count)*rt)),et!==null?(nt=Math.max(nt,0),Nt=Math.min(Nt,et.count)):_t!=null&&(nt=Math.max(nt,0),Nt=Math.min(Nt,_t.count));const qt=Nt-nt;if(qt<0||qt===1/0)return;Ie.setup(te,ne,Fe,ae,et);let Qt,Wt=mt;if(et!==null&&(Qt=de.get(et),Wt=Tt,Wt.setIndex(Qt)),te.isMesh)ne.wireframe===!0?(Ce.setLineWidth(ne.wireframeLinewidth*zt()),Wt.setMode(H.LINES)):Wt.setMode(H.TRIANGLES);else if(te.isLine){let fn=ne.linewidth;fn===void 0&&(fn=1),Ce.setLineWidth(fn*zt()),te.isLineSegments?Wt.setMode(H.LINES):te.isLineLoop?Wt.setMode(H.LINE_LOOP):Wt.setMode(H.LINE_STRIP)}else te.isPoints?Wt.setMode(H.POINTS):te.isSprite&&Wt.setMode(H.TRIANGLES);if(te.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Wt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const fn=te._multiDrawStarts,Ye=te._multiDrawCounts,wn=te._multiDrawCount,At=et?de.get(et).bytesPerElement:1,Xn=I.get(ne).currentProgram.getUniforms();for(let Yn=0;Yn<wn;Yn++)Xn.setValue(H,"_gl_DrawID",Yn),Wt.render(fn[Yn]/At,Ye[Yn])}else if(te.isInstancedMesh)Wt.renderInstances(nt,qt,te.count);else if(ae.isInstancedBufferGeometry){const fn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ye=Math.min(ae.instanceCount,fn);Wt.renderInstances(nt,qt,Ye)}else Wt.render(nt,qt)};function hi(b,q,ae){b.transparent===!0&&b.side===st&&b.forceSinglePass===!1?(b.side=Vn,b.needsUpdate=!0,ro(b,q,ae),b.side=xr,b.needsUpdate=!0,ro(b,q,ae),b.side=st):ro(b,q,ae)}this.compile=function(b,q,ae=null){ae===null&&(ae=b),C=Ve.get(ae),C.init(q),A.push(C),ae.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),b!==ae&&b.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(C.pushLight(te),te.castShadow&&C.pushShadow(te))}),C.setupLights();const ne=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const ze=te.material;if(ze)if(Array.isArray(ze))for(let je=0;je<ze.length;je++){const Fe=ze[je];hi(Fe,ae,te),ne.add(Fe)}else hi(ze,ae,te),ne.add(ze)}),C=A.pop(),ne},this.compileAsync=function(b,q,ae=null){const ne=this.compile(b,q,ae);return new Promise(te=>{function ze(){if(ne.forEach(function(je){I.get(je).currentProgram.isReady()&&ne.delete(je)}),ne.size===0){te(b);return}setTimeout(ze,10)}ot.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let ur=null;function no(b){ur&&ur(b)}function ds(){fr.stop()}function io(){fr.start()}const fr=new Bp;fr.setAnimationLoop(no),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(b){ur=b,Oe.setAnimationLoop(b),b===null?fr.stop():fr.start()},Oe.addEventListener("sessionstart",ds),Oe.addEventListener("sessionend",io),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Z!==null&&Z.renderStart(b,q);const ae=Oe.enabled===!0&&Oe.isPresenting===!0,ne=F!==null&&(Y===null||ae)&&F.begin(W,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(q),q=Oe.getCamera()),b.isScene===!0&&b.onBeforeRender(W,b,q,Y),C=Ve.get(b,A.length),C.init(q),C.state.textureUnits=w.getTextureUnits(),A.push(C),Ke.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),He.setFromProjectionMatrix(Ke,Oi,q.reversedDepth),Pe=this.localClippingEnabled,ye=Xe.init(this.clippingPlanes,Pe),N=ve.get(b,O.length),N.init(),O.push(N),Oe.enabled===!0&&Oe.isPresenting===!0){const je=W.xr.getDepthSensingMesh();je!==null&&ea(je,q,-1/0,W.sortObjects)}ea(b,q,0,W.sortObjects),N.finish(),W.sortObjects===!0&&N.sort(K,_e),bt=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,bt&&Le.addToRenderList(N,b),this.info.render.frame++,ye===!0&&Xe.beginShadows();const te=C.state.shadowsArray;if(Ue.render(te,b,q),ye===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){const je=N.opaque,Fe=N.transmissive;if(C.setupLights(),q.isArrayCamera){const et=q.cameras;if(Fe.length>0)for(let rt=0,vt=et.length;rt<vt;rt++){const _t=et[rt];$i(je,Fe,b,_t)}bt&&Le.render(b);for(let rt=0,vt=et.length;rt<vt;rt++){const _t=et[rt];Il(N,b,_t,_t.viewport)}}else Fe.length>0&&$i(je,Fe,b,q),bt&&Le.render(b),Il(N,b,q)}Y!==null&&ce===0&&(w.updateMultisampleRenderTarget(Y),w.updateRenderTargetMipmap(Y)),ne&&F.end(W),b.isScene===!0&&b.onAfterRender(W,b,q),Ie.resetDefaultState(),Q=-1,J=null,A.pop(),A.length>0?(C=A[A.length-1],w.setTextureUnits(C.state.textureUnits),ye===!0&&Xe.setGlobalState(W.clippingPlanes,C.state.camera)):C=null,O.pop(),O.length>0?N=O[O.length-1]:N=null,Z!==null&&Z.renderEnd()};function ea(b,q,ae,ne){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLightProbeGrid)C.pushLightProbeGrid(b);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||He.intersectsSprite(b)){ne&&lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ke);const je=Ae.update(b),Fe=b.material;Fe.visible&&N.push(b,je,Fe,ae,lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||He.intersectsObject(b))){const je=Ae.update(b),Fe=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),lt.copy(b.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),lt.copy(je.boundingSphere.center)),lt.applyMatrix4(b.matrixWorld).applyMatrix4(Ke)),Array.isArray(Fe)){const et=je.groups;for(let rt=0,vt=et.length;rt<vt;rt++){const _t=et[rt],nt=Fe[_t.materialIndex];nt&&nt.visible&&N.push(b,je,nt,ae,lt.z,_t)}}else Fe.visible&&N.push(b,je,Fe,ae,lt.z,null)}}const ze=b.children;for(let je=0,Fe=ze.length;je<Fe;je++)ea(ze[je],q,ae,ne)}function Il(b,q,ae,ne){const{opaque:te,transmissive:ze,transparent:je}=b;C.setupLightsView(ae),ye===!0&&Xe.setGlobalState(W.clippingPlanes,ae),ne&&Ce.viewport(j.copy(ne)),te.length>0&&hs(te,q,ae),ze.length>0&&hs(ze,q,ae),je.length>0&&hs(je,q,ae),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function $i(b,q,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[ne.id]===void 0){const nt=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[ne.id]=new zi(1,1,{generateMipmaps:!0,type:nt?tr:Jn,minFilter:Jr,samples:Math.max(4,xt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const ze=C.state.transmissionRenderTarget[ne.id],je=ne.viewport||j;ze.setSize(je.z*W.transmissionResolutionScale,je.w*W.transmissionResolutionScale);const Fe=W.getRenderTarget(),et=W.getActiveCubeFace(),rt=W.getActiveMipmapLevel();W.setRenderTarget(ze),W.getClearColor(R),X=W.getClearAlpha(),X<1&&W.setClearColor(16777215,.5),W.clear(),bt&&Le.render(ae);const vt=W.toneMapping;W.toneMapping=Ii;const _t=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),C.setupLightsView(ne),ye===!0&&Xe.setGlobalState(W.clippingPlanes,ne),hs(b,ae,ne),w.updateMultisampleRenderTarget(ze),w.updateRenderTargetMipmap(ze),ot.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Nt=0,qt=q.length;Nt<qt;Nt++){const Qt=q[Nt],{object:Wt,geometry:fn,material:Ye,group:wn}=Qt;if(Ye.side===st&&Wt.layers.test(ne.layers)){const At=Ye.side;Ye.side=Vn,Ye.needsUpdate=!0,ta(Wt,ae,ne,fn,Ye,wn),Ye.side=At,Ye.needsUpdate=!0,nt=!0}}nt===!0&&(w.updateMultisampleRenderTarget(ze),w.updateRenderTargetMipmap(ze))}W.setRenderTarget(Fe,et,rt),W.setClearColor(R,X),_t!==void 0&&(ne.viewport=_t),W.toneMapping=vt}function hs(b,q,ae){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,ze=b.length;te<ze;te++){const je=b[te],{object:Fe,geometry:et,group:rt}=je;let vt=je.material;vt.allowOverride===!0&&ne!==null&&(vt=ne),Fe.layers.test(ae.layers)&&ta(Fe,q,ae,et,vt,rt)}}function ta(b,q,ae,ne,te,ze){b.onBeforeRender(W,q,ae,ne,te,ze),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(W,q,ae,ne,b,ze),te.transparent===!0&&te.side===st&&te.forceSinglePass===!1?(te.side=Vn,te.needsUpdate=!0,W.renderBufferDirect(ae,q,ne,te,b,ze),te.side=xr,te.needsUpdate=!0,W.renderBufferDirect(ae,q,ne,te,b,ze),te.side=st):W.renderBufferDirect(ae,q,ne,te,b,ze),b.onAfterRender(W,q,ae,ne,te,ze)}function ro(b,q,ae){q.isScene!==!0&&(q=Dt);const ne=I.get(b),te=C.state.lights,ze=C.state.shadowsArray,je=te.state.version,Fe=Be.getParameters(b,te.state,ze,q,ae,C.state.lightProbeGridArray),et=Be.getProgramCacheKey(Fe);let rt=ne.programs;ne.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const vt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ne.envMap=B.get(b.envMap||ne.environment,vt),ne.envMapRotation=ne.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,rt===void 0&&(b.addEventListener("dispose",Yt),rt=new Map,ne.programs=rt);let _t=rt.get(et);if(_t!==void 0){if(ne.currentProgram===_t&&ne.lightsStateVersion===je)return ia(b,Fe),_t}else Fe.uniforms=Be.getUniforms(b),Z!==null&&b.isNodeMaterial&&Z.build(b,ae,Fe),b.onBeforeCompile(Fe,W),_t=Be.acquireProgram(Fe,et),rt.set(et,_t),ne.uniforms=Fe.uniforms;const nt=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(nt.clippingPlanes=Xe.uniform),ia(b,Fe),ne.needsLights=zf(b),ne.lightsStateVersion=je,ne.needsLights&&(nt.ambientLightColor.value=te.state.ambient,nt.lightProbe.value=te.state.probe,nt.directionalLights.value=te.state.directional,nt.directionalLightShadows.value=te.state.directionalShadow,nt.spotLights.value=te.state.spot,nt.spotLightShadows.value=te.state.spotShadow,nt.rectAreaLights.value=te.state.rectArea,nt.ltc_1.value=te.state.rectAreaLTC1,nt.ltc_2.value=te.state.rectAreaLTC2,nt.pointLights.value=te.state.point,nt.pointLightShadows.value=te.state.pointShadow,nt.hemisphereLights.value=te.state.hemi,nt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,nt.spotLightMatrix.value=te.state.spotLightMatrix,nt.spotLightMap.value=te.state.spotLightMap,nt.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=C.state.lightProbeGridArray.length>0,ne.currentProgram=_t,ne.uniformsList=null,_t}function na(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Rl.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function ia(b,q){const ae=I.get(b);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function Nl(b,q){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;L.setFromMatrixPosition(q.matrixWorld);for(let ae=0,ne=b.length;ae<ne;ae++){const te=b[ae];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function Ul(b,q,ae,ne,te){q.isScene!==!0&&(q=Dt),w.resetTextureUnits();const ze=q.fog,je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Fe=Y===null?W.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Lt.workingColorSpace,et=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,rt=B.get(ne.envMap||je,et),vt=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,_t=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),nt=!!ae.morphAttributes.position,Nt=!!ae.morphAttributes.normal,qt=!!ae.morphAttributes.color;let Qt=Ii;ne.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=W.toneMapping);const Wt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,fn=Wt!==void 0?Wt.length:0,Ye=I.get(ne),wn=C.state.lights;if(ye===!0&&(Pe===!0||b!==J)){const Xt=b===J&&ne.id===Q;Xe.setState(ne,b,Xt)}let At=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==wn.state.version||Ye.outputColorSpace!==Fe||te.isBatchedMesh&&Ye.batching===!1||!te.isBatchedMesh&&Ye.batching===!0||te.isBatchedMesh&&Ye.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ye.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ye.instancing===!1||!te.isInstancedMesh&&Ye.instancing===!0||te.isSkinnedMesh&&Ye.skinning===!1||!te.isSkinnedMesh&&Ye.skinning===!0||te.isInstancedMesh&&Ye.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ye.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ye.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ye.instancingMorph===!1&&te.morphTexture!==null||Ye.envMap!==rt||ne.fog===!0&&Ye.fog!==ze||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Xe.numPlanes||Ye.numIntersection!==Xe.numIntersection)||Ye.vertexAlphas!==vt||Ye.vertexTangents!==_t||Ye.morphTargets!==nt||Ye.morphNormals!==Nt||Ye.morphColors!==qt||Ye.toneMapping!==Qt||Ye.morphTargetsCount!==fn||!!Ye.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,Ye.__version=ne.version);let Xn=Ye.currentProgram;At===!0&&(Xn=ro(ne,q,te),Z&&ne.isNodeMaterial&&Z.onUpdateProgram(ne,Xn,Ye));let Yn=!1,Pt=!1,dr=!1;const Ht=Xn.getUniforms(),Kt=Ye.uniforms;if(Ce.useProgram(Xn.program)&&(Yn=!0,Pt=!0,dr=!0),ne.id!==Q&&(Q=ne.id,Pt=!0),Ye.needsLights){const Xt=Nl(C.state.lightProbeGridArray,te);Ye.lightProbeGrid!==Xt&&(Ye.lightProbeGrid=Xt,Pt=!0)}if(Yn||J!==b){Ce.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ht.setValue(H,"projectionMatrix",b.projectionMatrix),Ht.setValue(H,"viewMatrix",b.matrixWorldInverse);const Ai=Ht.map.cameraPosition;Ai!==void 0&&Ai.setValue(H,ft.setFromMatrixPosition(b.matrixWorld)),xt.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,Pt=!0,dr=!0)}if(Ye.needsLights&&(wn.state.directionalShadowMap.length>0&&Ht.setValue(H,"directionalShadowMap",wn.state.directionalShadowMap,w),wn.state.spotShadowMap.length>0&&Ht.setValue(H,"spotShadowMap",wn.state.spotShadowMap,w),wn.state.pointShadowMap.length>0&&Ht.setValue(H,"pointShadowMap",wn.state.pointShadowMap,w)),te.isSkinnedMesh){Ht.setOptional(H,te,"bindMatrix"),Ht.setOptional(H,te,"bindMatrixInverse");const Xt=te.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ht.setValue(H,"boneTexture",Xt.boneTexture,w))}te.isBatchedMesh&&(Ht.setOptional(H,te,"batchingTexture"),Ht.setValue(H,"batchingTexture",te._matricesTexture,w),Ht.setOptional(H,te,"batchingIdTexture"),Ht.setValue(H,"batchingIdTexture",te._indirectTexture,w),Ht.setOptional(H,te,"batchingColorTexture"),te._colorsTexture!==null&&Ht.setValue(H,"batchingColorTexture",te._colorsTexture,w));const Ti=ae.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&ht.update(te,ae,Xn),(Pt||Ye.receiveShadow!==te.receiveShadow)&&(Ye.receiveShadow=te.receiveShadow,Ht.setValue(H,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Kt.envMapIntensity.value=q.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=jM()),Pt){if(Ht.setValue(H,"toneMappingExposure",W.toneMappingExposure),Ye.needsLights&&Of(Kt,dr),ze&&ne.fog===!0&&pe.refreshFogUniforms(Kt,ze),pe.refreshMaterialUniforms(Kt,ne,Ee,Re,C.state.transmissionRenderTarget[b.id]),Ye.needsLights&&Ye.lightProbeGrid){const Xt=Ye.lightProbeGrid;Kt.probesSH.value=Xt.texture,Kt.probesMin.value.copy(Xt.boundingBox.min),Kt.probesMax.value.copy(Xt.boundingBox.max),Kt.probesResolution.value.copy(Xt.resolution)}Rl.upload(H,na(Ye),Kt,w)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Rl.upload(H,na(Ye),Kt,w),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ht.setValue(H,"center",te.center),Ht.setValue(H,"modelViewMatrix",te.modelViewMatrix),Ht.setValue(H,"normalMatrix",te.normalMatrix),Ht.setValue(H,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Xt=ne.uniformsGroups;for(let Ai=0,qi=Xt.length;Ai<qi;Ai++){const ps=Xt[Ai];ge.update(ps,Xn),ge.bind(ps,Xn)}}return Xn}function Of(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function zf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,q,ae){const ne=I.get(b);ne.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),I.get(b.texture).__webglTexture=q,I.get(b.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const ae=I.get(b);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const rn=H.createFramebuffer();this.setRenderTarget=function(b,q=0,ae=0){Y=b,se=q,ce=ae;let ne=null,te=!1,ze=!1;if(b){const Fe=I.get(b);if(Fe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(H.FRAMEBUFFER,Fe.__webglFramebuffer),j.copy(b.viewport),oe.copy(b.scissor),re=b.scissorTest,Ce.viewport(j),Ce.scissor(oe),Ce.setScissorTest(re),Q=-1;return}else if(Fe.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Fe.__hasExternalTextures)w.rebindTextures(b,I.get(b.texture).__webglTexture,I.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const vt=b.depthTexture;if(Fe.__boundDepthTexture!==vt){if(vt!==null&&I.has(vt)&&(b.width!==vt.image.width||b.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const et=b.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(ze=!0);const rt=I.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?ne=rt[q][ae]:ne=rt[q],te=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?ne=I.get(b).__webglMultisampledFramebuffer:Array.isArray(rt)?ne=rt[ae]:ne=rt,j.copy(b.viewport),oe.copy(b.scissor),re=b.scissorTest}else j.copy(fe).multiplyScalar(Ee).floor(),oe.copy(Ne).multiplyScalar(Ee).floor(),re=qe;if(ae!==0&&(ne=rn),Ce.bindFramebuffer(H.FRAMEBUFFER,ne)&&Ce.drawBuffers(b,ne),Ce.viewport(j),Ce.scissor(oe),Ce.setScissorTest(re),te){const Fe=I.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,ae)}else if(ze){const Fe=q;for(let et=0;et<b.textures.length;et++){const rt=I.get(b.textures[et]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+et,rt.__webglTexture,ae,Fe)}}else if(b!==null&&ae!==0){const Fe=I.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,ae)}Q=-1},this.readRenderTargetPixels=function(b,q,ae,ne,te,ze,je,Fe=0){if(!(b&&b.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=I.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&je!==void 0&&(et=et[je]),et){Ce.bindFramebuffer(H.FRAMEBUFFER,et);try{const rt=b.textures[Fe],vt=rt.format,_t=rt.type;if(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Fe),!xt.textureFormatReadable(vt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(_t)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-ne&&ae>=0&&ae<=b.height-te&&H.readPixels(q,ae,ne,te,V.convert(vt),V.convert(_t),ze)}finally{const rt=Y!==null?I.get(Y).__webglFramebuffer:null;Ce.bindFramebuffer(H.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(b,q,ae,ne,te,ze,je,Fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=I.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&je!==void 0&&(et=et[je]),et)if(q>=0&&q<=b.width-ne&&ae>=0&&ae<=b.height-te){Ce.bindFramebuffer(H.FRAMEBUFFER,et);const rt=b.textures[Fe],vt=rt.format,_t=rt.type;if(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Fe),!xt.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,nt),H.bufferData(H.PIXEL_PACK_BUFFER,ze.byteLength,H.STREAM_READ),H.readPixels(q,ae,ne,te,V.convert(vt),V.convert(_t),0);const Nt=Y!==null?I.get(Y).__webglFramebuffer:null;Ce.bindFramebuffer(H.FRAMEBUFFER,Nt);const qt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await v_(H,qt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,nt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ze),H.deleteBuffer(nt),H.deleteSync(qt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,ae=0){const ne=Math.pow(2,-ae),te=Math.floor(b.image.width*ne),ze=Math.floor(b.image.height*ne),je=q!==null?q.x:0,Fe=q!==null?q.y:0;w.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,je,Fe,te,ze),Ce.unbindTexture()};const Bf=H.createFramebuffer(),ra=H.createFramebuffer();this.copyTextureToTexture=function(b,q,ae=null,ne=null,te=0,ze=0){let je,Fe,et,rt,vt,_t,nt,Nt,qt;const Qt=b.isCompressedTexture?b.mipmaps[ze]:b.image;if(ae!==null)je=ae.max.x-ae.min.x,Fe=ae.max.y-ae.min.y,et=ae.isBox3?ae.max.z-ae.min.z:1,rt=ae.min.x,vt=ae.min.y,_t=ae.isBox3?ae.min.z:0;else{const Kt=Math.pow(2,-te);je=Math.floor(Qt.width*Kt),Fe=Math.floor(Qt.height*Kt),b.isDataArrayTexture?et=Qt.depth:b.isData3DTexture?et=Math.floor(Qt.depth*Kt):et=1,rt=0,vt=0,_t=0}ne!==null?(nt=ne.x,Nt=ne.y,qt=ne.z):(nt=0,Nt=0,qt=0);const Wt=V.convert(q.format),fn=V.convert(q.type);let Ye;q.isData3DTexture?(w.setTexture3D(q,0),Ye=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(w.setTexture2DArray(q,0),Ye=H.TEXTURE_2D_ARRAY):(w.setTexture2D(q,0),Ye=H.TEXTURE_2D),Ce.activeTexture(H.TEXTURE0),Ce.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),Ce.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ce.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const wn=Ce.getParameter(H.UNPACK_ROW_LENGTH),At=Ce.getParameter(H.UNPACK_IMAGE_HEIGHT),Xn=Ce.getParameter(H.UNPACK_SKIP_PIXELS),Yn=Ce.getParameter(H.UNPACK_SKIP_ROWS),Pt=Ce.getParameter(H.UNPACK_SKIP_IMAGES);Ce.pixelStorei(H.UNPACK_ROW_LENGTH,Qt.width),Ce.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qt.height),Ce.pixelStorei(H.UNPACK_SKIP_PIXELS,rt),Ce.pixelStorei(H.UNPACK_SKIP_ROWS,vt),Ce.pixelStorei(H.UNPACK_SKIP_IMAGES,_t);const dr=b.isDataArrayTexture||b.isData3DTexture,Ht=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const Kt=I.get(b),Ti=I.get(q),Xt=I.get(Kt.__renderTarget),Ai=I.get(Ti.__renderTarget);Ce.bindFramebuffer(H.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ce.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let qi=0;qi<et;qi++)dr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,I.get(b).__webglTexture,te,_t+qi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,I.get(q).__webglTexture,ze,qt+qi)),H.blitFramebuffer(rt,vt,je,Fe,nt,Nt,je,Fe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ce.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||I.has(b)){const Kt=I.get(b),Ti=I.get(q);Ce.bindFramebuffer(H.READ_FRAMEBUFFER,Bf),Ce.bindFramebuffer(H.DRAW_FRAMEBUFFER,ra);for(let Xt=0;Xt<et;Xt++)dr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.__webglTexture,te,_t+Xt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Kt.__webglTexture,te),Ht?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ti.__webglTexture,ze,qt+Xt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ti.__webglTexture,ze),te!==0?H.blitFramebuffer(rt,vt,je,Fe,nt,Nt,je,Fe,H.COLOR_BUFFER_BIT,H.NEAREST):Ht?H.copyTexSubImage3D(Ye,ze,nt,Nt,qt+Xt,rt,vt,je,Fe):H.copyTexSubImage2D(Ye,ze,nt,Nt,rt,vt,je,Fe);Ce.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ht?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(Ye,ze,nt,Nt,qt,je,Fe,et,Wt,fn,Qt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,ze,nt,Nt,qt,je,Fe,et,Wt,Qt.data):H.texSubImage3D(Ye,ze,nt,Nt,qt,je,Fe,et,Wt,fn,Qt):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ze,nt,Nt,je,Fe,Wt,fn,Qt.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ze,nt,Nt,Qt.width,Qt.height,Wt,Qt.data):H.texSubImage2D(H.TEXTURE_2D,ze,nt,Nt,je,Fe,Wt,fn,Qt);Ce.pixelStorei(H.UNPACK_ROW_LENGTH,wn),Ce.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At),Ce.pixelStorei(H.UNPACK_SKIP_PIXELS,Xn),Ce.pixelStorei(H.UNPACK_SKIP_ROWS,Yn),Ce.pixelStorei(H.UNPACK_SKIP_IMAGES,Pt),ze===0&&q.generateMipmaps&&H.generateMipmap(Ye),Ce.unbindTexture()},this.initRenderTarget=function(b){I.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){se=0,ce=0,Y=null,Ce.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}let Ln=class extends _n{constructor(e,t,r,o,l){super();const c=e.computeFrenetFrames(t,!1),f=[],d=[];for(let p=0;p<=t;p++){const _=p/t,v=qa.lerp(r,o,_),y=e.getPoint(_),E=c.normals[p],P=c.binormals[p];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,D=Math.sin(S),U=Math.cos(S);f.push(y.x+v*(U*E.x+D*P.x),y.y+v*(U*E.y+D*P.y),y.z+v*(U*E.z+D*P.z))}}for(let p=0;p<t;p++)for(let _=0;_<l;_++){const v=p*(l+1)+_,y=(p+1)*(l+1)+_;d.push(v,y,v+1),d.push(y,y+1,v+1)}const h=[];for(let p=0;p<=t;p++)for(let _=0;_<=l;_++)h.push(p/t,_/l);this.setAttribute("uv",new Gt(h,2)),this.setAttribute("position",new Gt(f,3)),this.setIndex(d),this.computeVertexNormals()}};function Et(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s,o=>{o.needsUpdate=!0},void 0,()=>{const o=document.createElement("canvas");o.width=o.height=4;const l=o.getContext("2d");l.fillStyle="#888888",l.fillRect(0,0,4,4),r.image=o,r.needsUpdate=!0});return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r}function Js(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.04,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.28,-.1,0)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new Ln(d,100,.04,.02,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:h}}function us(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.04,0),new M(-.4,-.05,0),new M(-.37,-.1,0),new M(-.35,-.1,0)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new Ln(d,100,.04,.02,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:h}}function gm(s,e,t,r,o,l,c){const f=new ke({map:Et(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function vm(s,e,t,r,o,l,c){const f=new ke({map:Et(s)}),d=new be(new Pn(.028,.14,32),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-left-bottom",{mesh:d,mat:f}}function _m(s,e,t,r,o,l,c){const f=new ke({map:Et(s)}),d=new be(new Pn(.028,.14,32,64,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-right-Bottom",{mesh:d,mat:f}}function KM(s,e,t,r,o,l,c){const f=[new M(1.05,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new St(f),h=new ke({map:Et(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function ZM(s,e,t,r,o,l,c){const f=[new M(1.05,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new St(f),h=new ke({map:Et(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function ym(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Sm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function JM(s,e,t,r){const o=[new M(-.9,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new St(o),c=new ke({map:Et(s),side:st}),f=new be(new Ln(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function QM(s,e,t,r){const o=[new M(-.9,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new St(o),c=new ke({map:Et(s),side:st}),f=new be(new Ln(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function xm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.045,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function Mm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function Em(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new fi(d,100,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:h}}const eE=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const o=Me.useRef(null),l=Me.useRef([]);return Me.useEffect(()=>{const c=new Wn;c.name="luge",l.current=[],[Js(e,-.7,.328,0,0,1.57,0),Js(e,-.6,.334,0,0,1.57,0),Js(e,-.5,.338,0,0,1.57,0),Js(e,-.4,.34,0,0,1.57,0),Js(e,-.3,.345,0,0,1.57,0),Js(e,-.2,.35,0,0,1.57,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[us(e,-.4,.34,.2,0,0,.05),us(e,-.4,.34,.13,0,0,.05),us(e,-.4,.34,.06,0,0,.05),us(e,-.4,.34,-.01,0,0,.05),us(e,-.4,.34,-.08,0,0,.05),us(e,-.4,.34,-.15,0,0,.05),us(e,-.4,.34,-.22,0,0,.05)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[gm(t,-.745,.25,0,1.57,1.57,0),gm(t,-.155,.285,0,1.57,1.57,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[vm(t,-.75,.15,-.26,0,-.1,-.4),vm(t,-.2,.16,-.26,0,0,.2)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[_m(t,-.75,.15,.26,0,.1,-.4),_m(t,-.2,.16,.26,0,0,.2)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)});const v=KM(t,.2,.28,.24,1.57,0,3.13);c.add(v.mesh),l.current.push(v.mat);const y=ZM(t,.2,.28,-.24,-1.57,0,3.13);c.add(y.mesh),l.current.push(y.mat),[ym(t,-.845,.23,.232,0,0,0),ym(t,-.845,.23,-.232,0,0,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[Sm(t,.7,.33,.184,0,0,0),Sm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)});const x=JM(t,0,.19,.37);c.add(x.mesh),l.current.push(x.mat);const S=QM(t,0,.19,-.37);return c.add(S.mesh),l.current.push(S.mat),[xm(t,-.9,.07,.27,0,0,0),xm(t,-.9,.07,-.27,0,0,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[Mm(t,.63,.465,.171,0,0,0),Mm(t,.63,.465,-.171,0,0,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[Em(r,-.03,.2,.52,-1.57,0,-.1),Em(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),o.current=c,s.add(c),()=>{s.remove(c),c.traverse(N=>{N.isMesh&&(N.geometry.dispose(),N.material.dispose())})}},[s,e,t,r]),null};function ti(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.06,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.25,-.1,0)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new Ln(d,100,.04,.02,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:h}}function wm(s,e,t,r,o,l,c){const f=new ke({map:Et(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function Tm(s,e,t,r,o,l,c){const f=new ke({map:Et(s)}),d=new be(new Pn(.028,.14,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-left-bottom",{mesh:d,mat:f}}function Am(s,e,t,r,o,l,c){const f=new ke({map:Et(s)}),d=new be(new Pn(.028,.14,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-right-Bottom",{mesh:d,mat:f}}function tE(s,e,t,r,o,l,c){const f=[new M(.95,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new St(f),h=new ke({map:Et(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function nE(s,e,t,r,o,l,c){const f=[new M(.95,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new St(f),h=new ke({map:Et(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function Rm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.038,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Cm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function iE(s,e,t,r){const o=[new M(-.8,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new St(o),c=new ke({map:Et(s),side:st}),f=new be(new Ln(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function rE(s,e,t,r){const o=[new M(-.8,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new St(o),c=new ke({map:Et(s),side:st}),f=new be(new Ln(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function bm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function Pm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function Lm(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new fi(d,100,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:h}}const sE=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const o=Me.useRef(null),l=Me.useRef([]);return Me.useEffect(()=>{const c=new Wn;c.name="luge",l.current=[],[ti(e,-.56,.33,0,0,1.57,0),ti(e,-.49,.333,0,0,1.57,0),ti(e,-.42,.335,0,0,1.57,0),ti(e,-.35,.34,0,0,1.57,0),ti(e,-.27,.345,0,0,1.57,0),ti(e,-.2,.35,0,0,1.57,0),ti(e,-.4,.34,.2,0,0,.05),ti(e,-.4,.34,.13,0,0,.05),ti(e,-.4,.34,.07,0,0,.05),ti(e,-.4,.34,0,0,0,.05),ti(e,-.4,.34,-.07,0,0,.05),ti(e,-.4,.34,-.13,0,0,.05),ti(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[wm(t,-.645,.25,0,1.57,1.57,0),wm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[Tm(t,-.65,.15,-.26,0,-.1,-.4),Tm(t,-.1,.16,-.26,0,0,.2)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[Am(t,-.65,.15,.26,0,.1,-.4),Am(t,-.1,.16,.26,0,0,.2)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)});const _=tE(t,.2,.28,.24,1.57,0,3.13);c.add(_.mesh),l.current.push(_.mat);const v=nE(t,.2,.28,-.24,-1.57,0,3.13);c.add(v.mesh),l.current.push(v.mat),[Rm(t,-.74,.235,.23,0,0,0),Rm(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[Cm(t,.7,.33,.184,0,0,0),Cm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)});const P=iE(t,0,.19,.37);c.add(P.mesh),l.current.push(P.mat);const x=rE(t,0,.19,-.37);return c.add(x.mesh),l.current.push(x.mat),[bm(t,-.78,.07,.26,0,0,0),bm(t,-.78,.07,-.26,0,0,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[Pm(t,.63,.471,.169,0,0,0),Pm(t,.63,.471,-.169,0,0,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[Lm(r,-.03,.2,.52,-1.57,0,-.1),Lm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),o.current=c,s.add(c),()=>{s.remove(c),c.traverse(L=>{L.isMesh&&(L.geometry.dispose(),L.material.dispose())})}},[s,e,t,r]),null};function ni(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.06,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.25,-.1,0)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new Ln(d,100,.04,.02,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:h}}function Dm(s,e,t,r,o,l,c){const f=new ke({map:Et(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function Im(s,e,t,r,o,l,c){const f=[new M(0,-.08,.03),new M(0,-.14,0),new M(0,0,0),new M(0,.14,.03),new M(0,.06,.03)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new fi(d,3,.03,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-left-bottom",{mesh:p,mat:h}}function Nm(s,e,t,r,o,l,c){const f=[new M(0,.08,-.03),new M(0,.14,0),new M(0,0,0),new M(0,-.12,.03),new M(0,-.06,.03)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new fi(d,3,.03,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-Bottom",{mesh:p,mat:h}}function oE(s,e,t,r,o,l,c){const f=[new M(.95,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new St(f),h=new ke({map:Et(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function aE(s,e,t,r,o,l,c){const f=[new M(.95,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new St(f),h=new ke({map:Et(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function Um(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.038,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Fm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function lE(s,e,t,r){const o=[new M(-.8,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new St(o),c=new ke({map:Et(s),side:st}),f=new be(new Ln(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function cE(s,e,t,r){const o=[new M(-.8,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new St(o),c=new ke({map:Et(s),side:st}),f=new be(new Ln(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function Om(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function zm(s,e,t,r,o,l,c){const f=new ke({map:Et(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function Bm(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new St(f),h=new ke({map:Et(s)}),p=new be(new fi(d,100,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:h}}const uE=({scene:s,selectedColor:e,backgroundColor:t,guide:r,hoop:o,skating:l})=>{const c=Me.useRef(null),f=Me.useRef([]);return Me.useEffect(()=>{const d=new Wn;d.name="luge",f.current=[],[ni(e,-.56,.33,0,0,1.57,0),ni(e,-.49,.333,0,0,1.57,0),ni(e,-.42,.335,0,0,1.57,0),ni(e,-.35,.34,0,0,1.57,0),ni(e,-.27,.345,0,0,1.57,0),ni(e,-.2,.35,0,0,1.57,0),ni(e,-.4,.34,.2,0,0,.05),ni(e,-.4,.34,.13,0,0,.05),ni(e,-.4,.34,.07,0,0,.05),ni(e,-.4,.34,0,0,0,.05),ni(e,-.4,.34,-.07,0,0,.05),ni(e,-.4,.34,-.13,0,0,.05),ni(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[Dm(t,-.645,.25,0,1.57,1.57,0),Dm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[Im(o,-.65,.16,-.26,0,0,0),Im(o,-.2,.16,-.26,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[Nm(o,-.65,.16,.26,0,0,0),Nm(o,-.2,.16,.26,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)});const y=oE(t,.2,.28,.24,1.57,0,3.13);d.add(y.mesh),f.current.push(y.mat);const E=aE(t,.2,.28,-.24,-1.57,0,3.13);d.add(E.mesh),f.current.push(E.mat),[Um(t,-.74,.235,.23,0,0,0),Um(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[Fm(t,.7,.33,.184,0,0,0),Fm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)});const S=lE(l,0,.19,.37);d.add(S.mesh),f.current.push(S.mat);const D=cE(l,0,.19,-.37);return d.add(D.mesh),f.current.push(D.mat),[Om(l,-.78,.07,.26,0,0,0),Om(l,-.78,.07,-.26,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[zm(l,.63,.471,.169,0,0,0),zm(l,.63,.471,-.169,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[Bm(r,-.03,.2,.52,-1.57,0,-.1),Bm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),c.current=d,s.add(d),()=>{s.remove(d),d.traverse(C=>{C.isMesh&&(C.geometry.dispose(),C.material.dispose())})}},[s,e,t,r,o,l]),null},Pr={fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",background:"none",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,padding:"7px 14px",cursor:"pointer",color:"rgba(240,237,232,0.6)",whiteSpace:"nowrap",transition:"all 0.15s ease"},Qs={...Pr,color:"#eaff00",borderColor:"rgba(232,248,64,0.35)",background:"rgba(232,248,64,0.07)"},fE=({img1:s,img2:e,img3:t,img4:r,img5:o,wood:l,guide:c,skating:f,hoop:d})=>{const h=Me.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:d,skating:f},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:d,skating:f},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:d,skating:f},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:d,skating:f},{id:"color-5",value:o,src:o,bg:l,guide:c,hoop:d,skating:f}],[s,e,t,r,o,l,c,d,f]),[p,_]=Me.useState(h[0].value),[v,y]=Me.useState(h[0].bg),[E,P]=Me.useState(h[0].guide),[x,S]=Me.useState(h[0].hoop),[D,U]=Me.useState(h[0].skating),[L,N]=Me.useState("Luge"),[C,O]=Me.useState(!1),[A,F]=Me.useState(!1),[W,k]=Me.useState(!1),[Z,se]=Me.useState(!1),ce=Me.useRef(null),[Y,Q]=Me.useState(null),J=Me.useRef(null),j=Me.useRef({rotX:.18,rotY:-.4,tRotX:.18,tRotY:-.4,zoom:4.5,tZoom:4.5}),oe=Me.useRef({drag:!1,prevX:0,prevY:0}),re=Me.useRef(!1),R=Me.useRef(!1);Me.useEffect(()=>{re.current=C},[C]),Me.useEffect(()=>{R.current=A,J.current&&J.current.traverse(he=>{he.isMesh&&(he.material.wireframe=A)})},[A]),Me.useEffect(()=>{const he=setTimeout(()=>{J.current&&J.current.traverse(Re=>{Re.isMesh&&(Re.material.wireframe=R.current)})},200);return()=>clearTimeout(he)},[L]);const X=()=>{const he=j.current;he.tRotX=.18,he.tRotY=-.4,he.tZoom=4.5};return Me.useEffect(()=>{const he=ce.current;if(!he)return;const Re=new Ja,Ee=he.offsetWidth||1e3,K=he.offsetHeight||700,_e=new zn(38,Ee/K,.01,50);_e.position.set(0,.5,4.5),_e.lookAt(0,.3,0);let fe;try{fe=new bl({antialias:!0,alpha:!0})}catch{he.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}fe.setSize(Ee,K,!1),fe.setPixelRatio(Math.min(window.devicePixelRatio,2)),fe.setClearColor(790032,1),he.appendChild(fe.domElement),Re.add(new xl(16777215,1));const Ne=new di(16777215,1.4);Ne.position.set(4,6,4),Re.add(Ne);const qe=new di(15267904,1.5);qe.position.set(-3,1,-2),Re.add(qe);const He=new di(4482815,1.5);He.position.set(0,-3,3),Re.add(He);const ye=new El(6,24,1974821,1580063);ye.position.y=-.45,Re.add(ye);const Pe=new Wn;Re.add(Pe),J.current=Pe;const Ke=j.current,ft=oe.current,lt=me=>{ft.drag=!0,ft.prevX=me.clientX,ft.prevY=me.clientY},Dt=()=>{ft.drag=!1},bt=me=>{ft.drag&&(Ke.tRotY+=(me.clientX-ft.prevX)*.008,Ke.tRotX+=(me.clientY-ft.prevY)*.005,Ke.tRotX=Math.max(-1,Math.min(1,Ke.tRotX)),ft.prevX=me.clientX,ft.prevY=me.clientY)},zt=me=>{Ke.tZoom+=me.deltaY*.004,Ke.tZoom=Math.max(1.5,Math.min(8,Ke.tZoom))},H=X;let wt=0,ot=0;const xt=me=>{ft.drag=!0,wt=me.touches[0].clientX,ot=me.touches[0].clientY},Ce=()=>{ft.drag=!1},It=me=>{ft.drag&&(Ke.tRotY+=(me.touches[0].clientX-wt)*.008,Ke.tRotX+=(me.touches[0].clientY-ot)*.005,Ke.tRotX=Math.max(-1,Math.min(1,Ke.tRotX)),wt=me.touches[0].clientX,ot=me.touches[0].clientY)};he.addEventListener("mousedown",lt),window.addEventListener("mouseup",Dt),window.addEventListener("mousemove",bt),he.addEventListener("wheel",zt,{passive:!0}),he.addEventListener("dblclick",H),he.addEventListener("touchstart",xt,{passive:!0}),window.addEventListener("touchend",Ce),window.addEventListener("touchmove",It,{passive:!0});const I=()=>{const me=he.offsetWidth,Ae=he.offsetHeight;_e.aspect=me/Ae,_e.updateProjectionMatrix(),fe.setSize(me,Ae,!1)};window.addEventListener("resize",I);const w=new Ml;let B;function de(){B=requestAnimationFrame(de);const me=w.getDelta();re.current&&!ft.drag&&(Ke.tRotY+=me*.5),Ke.rotX+=(Ke.tRotX-Ke.rotX)*.09,Ke.rotY+=(Ke.tRotY-Ke.rotY)*.09,Ke.zoom+=(Ke.tZoom-Ke.zoom)*.09,Pe.rotation.x=Ke.rotX,Pe.rotation.y=Ke.rotY,_e.position.z=Ke.zoom,_e.lookAt(0,.05,0),fe.render(Re,_e)}return de(),setTimeout(()=>se(!0),800),Q(Pe),()=>{cancelAnimationFrame(B),he.removeEventListener("mousedown",lt),window.removeEventListener("mouseup",Dt),window.removeEventListener("mousemove",bt),he.removeEventListener("wheel",zt),he.removeEventListener("dblclick",H),he.removeEventListener("touchstart",xt),window.removeEventListener("touchend",Ce),window.removeEventListener("touchmove",It),window.removeEventListener("resize",I),fe.dispose(),he.contains(fe.domElement)&&he.removeChild(fe.domElement)}},[]),ue.createElement("div",{style:{position:"relative",margin:"0 auto",width:"100%",height:"100%",background:"#0c0e10",overflow:"hidden"}},ue.createElement("style",null,`
        @keyframes tl-spin { to { transform: rotate(360deg); } }
        .tl-mount { width: 100%; height: 100%; cursor: grab; }
        .tl-mount:active { cursor: grabbing; }
        .tl-mount canvas { display: block; width: 100% !important; height: 100% !important; }
      `),ue.createElement("div",{ref:ce,className:"tl-mount"}),ue.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,248,64,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80,120,255,0.05) 0%, transparent 60%)"}}),ue.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:20,height:20,pointerEvents:"none",zIndex:5,opacity:.15}},ue.createElement("div",{style:{position:"absolute",width:1,height:"100%",left:"50%",background:"#eaff00"}}),ue.createElement("div",{style:{position:"absolute",height:1,width:"100%",top:"50%",background:"#eaff00"}})),!Z&&ue.createElement("div",{style:{position:"absolute",inset:0,zIndex:30,background:"#0c0e10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,transition:"opacity 0.6s ease"}},ue.createElement("div",{style:{width:36,height:36,border:"1.5px solid rgba(255,255,255,0.08)",borderTopColor:"#eaff00",borderRadius:"50%",animation:"tl-spin 0.7s linear infinite"}}),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Initialisation…")),ue.createElement("div",{style:{position:"absolute",top:16,left:16,right:16,display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10,pointerEvents:"none"}},ue.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},"Vue 3D"),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#eaff00",background:"rgba(232,248,64,0.06)",border:"1px solid rgba(232,248,64,0.25)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},L))),ue.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10}},"Glisser · Zoomer · Double-clic pour reset"),ue.createElement("div",{style:{position:"absolute",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8,zIndex:10}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Couleur siège"),ue.createElement("div",{style:{display:"flex",gap:6}},h.map(he=>ue.createElement("button",{key:he.id,title:he.id,onClick:Re=>{Re.preventDefault(),_(he.value),y(he.bg),P(he.guide),S(he.hoop),U(he.skating)},style:{width:20,height:20,borderRadius:"50%",padding:0,cursor:"pointer",border:p===he.value?"2px solid #eaff00":"2px solid transparent",boxShadow:p===he.value?"0 0 8px rgba(232,248,64,0.4)":"none",backgroundImage:`url('${he.src}')`,backgroundSize:"cover",backgroundPosition:"center",transition:"all 0.2s ease"}})))),ue.createElement("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,zIndex:10,background:"#141618",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"8px 10px",backdropFilter:"blur(12px)"}},ue.createElement("button",{onClick:X,style:Pr},"↺ Reset"),ue.createElement("button",{onClick:()=>O(he=>!he),style:C?Qs:Pr},C?"⏸ Auto":"▷ Auto"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>F(he=>!he),style:A?Qs:Pr},"⬡ Wire"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>k(he=>!he),style:W?Qs:Pr},"ℹ Info"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>N("Luge"),style:L==="Luge"?Qs:Pr},"Luge"),ue.createElement("button",{onClick:()=>N("LugeKind"),style:L==="LugeKind"?Qs:Pr},"LugeKind"),ue.createElement("button",{onClick:()=>N("LugeSport"),style:L==="LugeSport"?Qs:Pr},"LugeSport")),ue.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:220,background:"#141618",borderLeft:"1px solid rgba(255,255,255,0.08)",padding:"24px 18px",zIndex:15,overflowY:"auto",display:"flex",flexDirection:"column",gap:16,transform:W?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},ue.createElement("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:14,fontWeight:700,color:"#eaff00",letterSpacing:"0.02em"}},"Fiche Produit"),[["Modèle",L],null,["Châssis","Acier galvanisé"],["Siège","Polyéthylène HD"],["Patins","Acier inox"],null,["Dimensions","110 × 45 × 22 cm"],["Poids","3,2 kg"],["Charge max.","80 kg"],null,["Âge","6 ans et plus"]].map((he,Re)=>he===null?ue.createElement("div",{key:Re,style:{height:1,background:"rgba(255,255,255,0.08)"}}):ue.createElement("div",{key:Re,style:{display:"flex",flexDirection:"column",gap:3}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},he[0]),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:12,color:"#f0ede8"}},he[1])))),Y&&L==="Luge"&&ue.createElement(eE,{scene:Y,selectedColor:p,backgroundColor:v,guide:E}),Y&&L==="LugeKind"&&ue.createElement(sE,{scene:Y,selectedColor:p,backgroundColor:v,guide:E}),Y&&L==="LugeSport"&&ue.createElement(uE,{scene:Y,selectedColor:p,backgroundColor:v,guide:E,hoop:x,skating:D}))};let eo=class extends _n{constructor(e,t,r,o,l){super();const c=e.computeFrenetFrames(t,!1),f=[],d=[];for(let p=0;p<=t;p++){const _=p/t,v=qa.lerp(r,o,_),y=e.getPoint(_),E=c.normals[p],P=c.binormals[p];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,D=Math.sin(S),U=Math.cos(S);f.push(y.x+v*(U*E.x+D*P.x),y.y+v*(U*E.y+D*P.y),y.z+v*(U*E.z+D*P.z))}}for(let p=0;p<t;p++)for(let _=0;_<l;_++){const v=p*(l+1)+_,y=(p+1)*(l+1)+_;d.push(v,y,v+1),d.push(y,y+1,v+1)}const h=[];for(let p=0;p<=t;p++)for(let _=0;_<=l;_++)h.push(p/t,_/l);this.setAttribute("uv",new Gt(h,2)),this.setAttribute("position",new Gt(f,3)),this.setIndex(d),this.computeVertexNormals()}};function Pl(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Wi(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function to(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.04,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.28,-.1,0)],d=new St(f),h=new ke({map:Pl(s)}),p=new be(new eo(d,100,.04,.02,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:h}}function fs(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.04,0),new M(-.4,-.05,0),new M(-.37,-.1,0),new M(-.35,-.1,0)],d=new St(f),h=new ke({map:Pl(s)}),p=new be(new eo(d,100,.04,.02,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:h}}function km(s,e,t,r,o,l,c){const f=new ke({map:Wi(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function Gm(s,e,t,r,o,l,c){const f=new ke({map:Wi(s)}),d=new be(new Pn(.028,.14,32),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-left-bottom",{mesh:d,mat:f}}function Hm(s,e,t,r,o,l,c){const f=new ke({map:Wi(s)}),d=new be(new Pn(.028,.14,32,64,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-right-Bottom",{mesh:d,mat:f}}function dE(s,e,t,r,o,l,c){const f=[new M(1.05,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new St(f),h=new ke({map:Wi(s),side:st}),p=new be(new eo(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function hE(s,e,t,r,o,l,c){const f=[new M(1.05,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new St(f),h=new ke({map:Wi(s),side:st}),p=new be(new eo(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function Vm(s,e,t,r,o,l,c){const f=new ke({map:Wi(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Wm(s,e,t,r,o,l,c){const f=new ke({map:Wi(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function pE(s,e,t,r){const o=[new M(-.9,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new St(o),c=new ke({map:Wi(s),side:st}),f=new be(new eo(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function mE(s,e,t,r){const o=[new M(-.9,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new St(o),c=new ke({map:Wi(s),side:st}),f=new be(new eo(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function Xm(s,e,t,r,o,l,c){const f=new ke({map:Pl(s),side:st}),d=new be(new $t(.045,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function Ym(s,e,t,r,o,l,c){const f=new ke({map:Pl(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function $m(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new St(f),h=new ke({map:Wi(s)}),p=new be(new fi(d,100,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:h}}const gE=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const o=Me.useRef(null),l=Me.useRef([]);return Me.useEffect(()=>{const c=new Wn;c.name="luge",l.current=[],[to(e,-.7,.328,0,0,1.57,0),to(e,-.6,.334,0,0,1.57,0),to(e,-.5,.338,0,0,1.57,0),to(e,-.4,.34,0,0,1.57,0),to(e,-.3,.345,0,0,1.57,0),to(e,-.2,.35,0,0,1.57,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[fs(e,-.4,.34,.2,0,0,.05),fs(e,-.4,.34,.13,0,0,.05),fs(e,-.4,.34,.06,0,0,.05),fs(e,-.4,.34,-.01,0,0,.05),fs(e,-.4,.34,-.08,0,0,.05),fs(e,-.4,.34,-.15,0,0,.05),fs(e,-.4,.34,-.22,0,0,.05)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[km(t,-.745,.25,0,1.57,1.57,0),km(t,-.155,.285,0,1.57,1.57,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[Gm(t,-.75,.15,-.26,0,-.1,-.4),Gm(t,-.2,.16,-.26,0,0,.2)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[Hm(t,-.75,.15,.26,0,.1,-.4),Hm(t,-.2,.16,.26,0,0,.2)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)});const v=dE(t,.2,.28,.24,1.57,0,3.13);c.add(v.mesh),l.current.push(v.mat);const y=hE(t,.2,.28,-.24,-1.57,0,3.13);c.add(y.mesh),l.current.push(y.mat),[Vm(t,-.845,.23,.232,0,0,0),Vm(t,-.845,.23,-.232,0,0,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[Wm(t,.7,.33,.184,0,0,0),Wm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)});const x=pE(t,0,.19,.37);c.add(x.mesh),l.current.push(x.mat);const S=mE(t,0,.19,-.37);return c.add(S.mesh),l.current.push(S.mat),[Xm(t,-.9,.07,.27,0,0,0),Xm(t,-.9,.07,-.27,0,0,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[Ym(t,.63,.465,.171,0,0,0),Ym(t,.63,.465,-.171,0,0,0)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),[$m(r,-.03,.2,.52,-1.57,0,-.1),$m(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:N,mat:C})=>{c.add(N),l.current.push(C)}),o.current=c,s.add(c),()=>{s.remove(c),c.position.set(-.15,-.28,0)}},[s,e,t,r]),null},jo={fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",background:"none",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,padding:"7px 14px",cursor:"pointer",color:"rgba(240,237,232,0.6)",whiteSpace:"nowrap",transition:"all 0.15s ease"},Rf={...jo,color:"#eaff00",borderColor:"rgba(232,248,64,0.35)",background:"rgba(232,248,64,0.07)"},vE=({img1:s,img2:e,img3:t,img4:r,img5:o,wood:l,guide:c,skating:f,hoop:d})=>{const h=Me.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:d,skating:f},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:d,skating:f},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:d,skating:f},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:d,skating:f},{id:"color-5",value:o,src:o,bg:l,guide:c,hoop:d,skating:f}],[s,e,t,r,o,l,c,d,f]),[p,_]=Me.useState(h[0].value),[v,y]=Me.useState(h[0].bg),[E,P]=Me.useState(h[0].guide),[x,S]=Me.useState(h[0].hoop),[D,U]=Me.useState(h[0].skating),[L,N]=Me.useState(!1),[C,O]=Me.useState(!1),[A,F]=Me.useState(!1),[W,k]=Me.useState(!1),Z=Me.useRef(null),[se,ce]=Me.useState(null),Y=Me.useRef(null),Q=Me.useRef({rotX:.18,rotY:-.4,tRotX:.18,tRotY:-.4,zoom:4.5,tZoom:4.5}),J=Me.useRef({drag:!1,prevX:0,prevY:0}),j=Me.useRef(!1),oe=Me.useRef(!1);Me.useEffect(()=>{j.current=L},[L]),Me.useEffect(()=>{oe.current=C,Y.current&&Y.current.traverse(R=>{R.isMesh&&(R.material.wireframe=C)})},[C]);const re=()=>{const R=Q.current;R.tRotX=.18,R.tRotY=-.4,R.tZoom=4.5};return Me.useEffect(()=>{const R=Z.current;if(!R)return;const X=new Ja,he=R.offsetWidth||1e3,Re=R.offsetHeight||700,Ee=new zn(38,he/Re,.01,50);Ee.position.set(0,.5,4.5),Ee.lookAt(0,.3,0);let K;try{K=new bl({antialias:!0,alpha:!0})}catch{R.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}K.setSize(he,Re,!1),K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.setClearColor(790032,1),R.appendChild(K.domElement),X.add(new xl(16777215,1));const _e=new di(16777215,1.4);_e.position.set(4,6,4),X.add(_e);const fe=new di(15267904,1.5);fe.position.set(-3,1,-2),X.add(fe);const Ne=new di(4482815,1.5);Ne.position.set(0,-3,3),X.add(Ne);const qe=new El(6,24,1974821,1580063);qe.position.y=-.45,X.add(qe);const He=new Wn;X.add(He),Y.current=He;const ye=Q.current,Pe=J.current,Ke=B=>{Pe.drag=!0,Pe.prevX=B.clientX,Pe.prevY=B.clientY},ft=()=>{Pe.drag=!1},lt=B=>{Pe.drag&&(ye.tRotY+=(B.clientX-Pe.prevX)*.008,ye.tRotX+=(B.clientY-Pe.prevY)*.005,ye.tRotX=Math.max(-1,Math.min(1,ye.tRotX)),Pe.prevX=B.clientX,Pe.prevY=B.clientY)},Dt=B=>{ye.tZoom+=B.deltaY*.004,ye.tZoom=Math.max(1.5,Math.min(8,ye.tZoom))},bt=re;let zt=0,H=0;const wt=B=>{Pe.drag=!0,zt=B.touches[0].clientX,H=B.touches[0].clientY},ot=()=>{Pe.drag=!1},xt=B=>{Pe.drag&&(ye.tRotY+=(B.touches[0].clientX-zt)*.008,ye.tRotX+=(B.touches[0].clientY-H)*.005,ye.tRotX=Math.max(-1,Math.min(1,ye.tRotX)),zt=B.touches[0].clientX,H=B.touches[0].clientY)};R.addEventListener("mousedown",Ke),window.addEventListener("mouseup",ft),window.addEventListener("mousemove",lt),R.addEventListener("wheel",Dt,{passive:!0}),R.addEventListener("dblclick",bt),R.addEventListener("touchstart",wt,{passive:!0}),window.addEventListener("touchend",ot),window.addEventListener("touchmove",xt,{passive:!0});const Ce=()=>{const B=R.offsetWidth,de=R.offsetHeight;Ee.aspect=B/de,Ee.updateProjectionMatrix(),K.setSize(B,de,!1)};window.addEventListener("resize",Ce);const It=new Ml;let I;function w(){I=requestAnimationFrame(w);const B=It.getDelta();j.current&&!Pe.drag&&(ye.tRotY+=B*.5),ye.rotX+=(ye.tRotX-ye.rotX)*.09,ye.rotY+=(ye.tRotY-ye.rotY)*.09,ye.zoom+=(ye.tZoom-ye.zoom)*.09,He.rotation.x=ye.rotX,He.rotation.y=ye.rotY,Ee.position.z=ye.zoom,Ee.lookAt(0,.05,0),K.render(X,Ee)}return w(),setTimeout(()=>k(!0),800),ce(He),()=>{cancelAnimationFrame(I),R.removeEventListener("mousedown",Ke),window.removeEventListener("mouseup",ft),window.removeEventListener("mousemove",lt),R.removeEventListener("wheel",Dt),R.removeEventListener("dblclick",bt),R.removeEventListener("touchstart",wt),window.removeEventListener("touchend",ot),window.removeEventListener("touchmove",xt),window.removeEventListener("resize",Ce),K.dispose(),R.contains(K.domElement)&&R.removeChild(K.domElement)}},[]),ue.createElement("div",{style:{position:"relative",margin:"0 auto",width:"100%",height:"100%",background:"#0c0e10",overflow:"hidden"}},ue.createElement("style",null,`
        @keyframes tl-spin { to { transform: rotate(360deg); } }
        .tl-mount { width: 100%; height: 100%; cursor: grab; }
        .tl-mount:active { cursor: grabbing; }
        .tl-mount canvas { display: block; width: 100% !important; height: 100% !important; }
      `),ue.createElement("div",{ref:Z,className:"tl-mount"}),ue.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,248,64,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80,120,255,0.05) 0%, transparent 60%)"}}),ue.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:20,height:20,pointerEvents:"none",zIndex:5,opacity:.15}},ue.createElement("div",{style:{position:"absolute",width:1,height:"100%",left:"50%",background:"#eaff00"}}),ue.createElement("div",{style:{position:"absolute",height:1,width:"100%",top:"50%",background:"#eaff00"}})),!W&&ue.createElement("div",{style:{position:"absolute",inset:0,zIndex:30,background:"#0c0e10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,transition:"opacity 0.6s ease"}},ue.createElement("div",{style:{width:36,height:36,border:"1.5px solid rgba(255,255,255,0.08)",borderTopColor:"#eaff00",borderRadius:"50%",animation:"tl-spin 0.7s linear infinite"}}),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Initialisation…")),ue.createElement("div",{style:{position:"absolute",top:16,left:16,right:16,display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10,pointerEvents:"none"}},ue.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},"Vue 3D"))),ue.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10}},"Glisser · Zoomer · Double-clic pour reset"),ue.createElement("div",{style:{position:"absolute",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8,zIndex:10}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Couleur siège"),ue.createElement("div",{style:{display:"flex",gap:6}},h.map(R=>ue.createElement("button",{key:R.id,title:R.id,onClick:X=>{X.preventDefault(),_(R.value),y(R.bg),P(R.guide),S(R.hoop),U(R.skating)},style:{width:20,height:20,borderRadius:"50%",padding:0,cursor:"pointer",border:p===R.value?"2px solid #eaff00":"2px solid transparent",boxShadow:p===R.value?"0 0 8px rgba(232,248,64,0.4)":"none",backgroundImage:`url('${R.src}')`,backgroundSize:"cover",backgroundPosition:"center",transition:"all 0.2s ease"}})))),ue.createElement("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,zIndex:10,background:"#141618",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"8px 10px",backdropFilter:"blur(12px)"}},ue.createElement("button",{onClick:re,style:jo},"↺ Reset"),ue.createElement("button",{onClick:()=>N(R=>!R),style:L?Rf:jo},L?"⏸ Auto":"▷ Auto"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>O(R=>!R),style:C?Rf:jo},"⬡ Wire"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>F(R=>!R),style:A?Rf:jo},"ℹ Info")),ue.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:220,background:"#141618",borderLeft:"1px solid rgba(255,255,255,0.08)",padding:"24px 18px",zIndex:15,overflowY:"auto",display:"flex",flexDirection:"column",gap:16,transform:A?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},ue.createElement("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:14,fontWeight:700,color:"#eaff00",letterSpacing:"0.02em"}},"Fiche Produit"),[["Modèle","Luge"],null,["Châssis","Bois"],["Siège","Nylon"],["Patins","Acier inox"],null,["Dimensions","110 × 45 × 22 cm"],["Poids","3,2 kg"],["Charge max.","80 kg"],null,["Âge","6 ans et plus"]].map((R,X)=>R===null?ue.createElement("div",{key:X,style:{height:1,background:"rgba(255,255,255,0.08)"}}):ue.createElement("div",{key:X,style:{display:"flex",flexDirection:"column",gap:3}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},R[0]),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:12,color:"#f0ede8"}},R[1])))),se&&ue.createElement(gE,{scene:se,selectedColor:p,backgroundColor:v,guide:E}))};let Ko=class extends _n{constructor(e,t,r,o,l){super();const c=e.computeFrenetFrames(t,!1),f=[],d=[];for(let p=0;p<=t;p++){const _=p/t,v=qa.lerp(r,o,_),y=e.getPoint(_),E=c.normals[p],P=c.binormals[p];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,D=Math.sin(S),U=Math.cos(S);f.push(y.x+v*(U*E.x+D*P.x),y.y+v*(U*E.y+D*P.y),y.z+v*(U*E.z+D*P.z))}}for(let p=0;p<t;p++)for(let _=0;_<l;_++){const v=p*(l+1)+_,y=(p+1)*(l+1)+_;d.push(v,y,v+1),d.push(y,y+1,v+1)}const h=[];for(let p=0;p<=t;p++)for(let _=0;_<=l;_++)h.push(p/t,_/l);this.setAttribute("uv",new Gt(h,2)),this.setAttribute("position",new Gt(f,3)),this.setIndex(d),this.computeVertexNormals()}};function Cf(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Xi(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function ii(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.06,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.25,-.1,0)],d=new St(f),h=new ke({map:Cf(s)}),p=new be(new Ko(d,100,.04,.02,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:h}}function qm(s,e,t,r,o,l,c){const f=new ke({map:Xi(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function jm(s,e,t,r,o,l,c){const f=new ke({map:Xi(s)}),d=new be(new Pn(.028,.14,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-left-bottom",{mesh:d,mat:f}}function Km(s,e,t,r,o,l,c){const f=new ke({map:Xi(s)}),d=new be(new Pn(.028,.14,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-right-Bottom",{mesh:d,mat:f}}function _E(s,e,t,r,o,l,c){const f=[new M(.95,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new St(f),h=new ke({map:Xi(s),side:st}),p=new be(new Ko(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function yE(s,e,t,r,o,l,c){const f=[new M(.95,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new St(f),h=new ke({map:Xi(s),side:st}),p=new be(new Ko(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function Zm(s,e,t,r,o,l,c){const f=new ke({map:Xi(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Jm(s,e,t,r,o,l,c){const f=new ke({map:Xi(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function SE(s,e,t,r){const o=[new M(-.8,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new St(o),c=new ke({map:Xi(s),side:st}),f=new be(new Ko(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function xE(s,e,t,r){const o=[new M(-.8,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new St(o),c=new ke({map:Xi(s),side:st}),f=new be(new Ko(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function Qm(s,e,t,r,o,l,c){const f=new ke({map:Cf(s),side:st}),d=new be(new $t(.045,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function e0(s,e,t,r,o,l,c){const f=new ke({map:Cf(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function t0(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new St(f),h=new ke({map:Xi(s)}),p=new be(new fi(d,100,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:h}}const ME=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const o=Me.useRef(null),l=Me.useRef([]);return Me.useEffect(()=>{const c=new Wn;c.name="luge",l.current=[],[ii(e,-.56,.33,0,0,1.57,0),ii(e,-.49,.333,0,0,1.57,0),ii(e,-.42,.335,0,0,1.57,0),ii(e,-.35,.34,0,0,1.57,0),ii(e,-.27,.345,0,0,1.57,0),ii(e,-.2,.35,0,0,1.57,0),ii(e,-.4,.34,.2,0,0,.05),ii(e,-.4,.34,.13,0,0,.05),ii(e,-.4,.34,.07,0,0,.05),ii(e,-.4,.34,0,0,0,.05),ii(e,-.4,.34,-.07,0,0,.05),ii(e,-.4,.34,-.13,0,0,.05),ii(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[qm(t,-.645,.25,0,1.57,1.57,0),qm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[jm(t,-.65,.15,-.26,0,-.1,-.4),jm(t,-.1,.16,-.26,0,0,.2)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[Km(t,-.65,.15,.26,0,.1,-.4),Km(t,-.1,.16,.26,0,0,.2)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)});const _=_E(t,.2,.28,.24,1.57,0,3.13);c.add(_.mesh),l.current.push(_.mat);const v=yE(t,.2,.28,-.24,-1.57,0,3.13);c.add(v.mesh),l.current.push(v.mat),[Zm(t,-.75,.23,.23,0,0,0),Zm(t,-.75,.23,-.23,0,0,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[Jm(t,.7,.33,.184,0,0,0),Jm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)});const P=SE(t,0,.19,.37);c.add(P.mesh),l.current.push(P.mat);const x=xE(t,0,.19,-.37);return c.add(x.mesh),l.current.push(x.mat),[Qm(t,-.8,.07,.27,0,0,0),Qm(t,-.8,.07,-.27,0,0,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[e0(t,.63,.471,.169,0,0,0),e0(t,.63,.471,-.169,0,0,0)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),[t0(r,-.03,.2,.52,-1.57,0,-.1),t0(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:L,mat:N})=>{c.add(L),l.current.push(N)}),o.current=c,s.add(c),()=>{s.remove(c),c.traverse(L=>{L.isMesh&&(L.geometry.dispose(),L.material.dispose())})}},[s,e,t,r]),null},Zo={fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",background:"none",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,padding:"7px 14px",cursor:"pointer",color:"rgba(240,237,232,0.6)",whiteSpace:"nowrap",transition:"all 0.15s ease"},bf={...Zo,color:"#eaff00",borderColor:"rgba(232,248,64,0.35)",background:"rgba(232,248,64,0.07)"},EE=({img1:s,img2:e,img3:t,img4:r,img5:o,wood:l,guide:c,skating:f,hoop:d})=>{const h=Me.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:d,skating:f},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:d,skating:f},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:d,skating:f},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:d,skating:f},{id:"color-5",value:o,src:o,bg:l,guide:c,hoop:d,skating:f}],[s,e,t,r,o,l,c,d,f]),[p,_]=Me.useState(h[0].value),[v,y]=Me.useState(h[0].bg),[E,P]=Me.useState(h[0].guide),[x,S]=Me.useState(h[0].hoop),[D,U]=Me.useState(h[0].skating),[L,N]=Me.useState(!1),[C,O]=Me.useState(!1),[A,F]=Me.useState(!1),[W,k]=Me.useState(!1),Z=Me.useRef(null),[se,ce]=Me.useState(null),Y=Me.useRef(null),Q=Me.useRef({rotX:.18,rotY:-.4,tRotX:.18,tRotY:-.4,zoom:4.5,tZoom:4.5}),J=Me.useRef({drag:!1,prevX:0,prevY:0}),j=Me.useRef(!1),oe=Me.useRef(!1);Me.useEffect(()=>{j.current=L},[L]),Me.useEffect(()=>{oe.current=C,Y.current&&Y.current.traverse(R=>{R.isMesh&&(R.material.wireframe=C)})},[C]);const re=()=>{const R=Q.current;R.tRotX=.18,R.tRotY=-.4,R.tZoom=4.5};return Me.useEffect(()=>{const R=Z.current;if(!R)return;const X=new Ja,he=R.offsetWidth||1e3,Re=R.offsetHeight||700,Ee=new zn(38,he/Re,.01,50);Ee.position.set(0,.5,4.5),Ee.lookAt(0,.3,0);let K;try{K=new bl({antialias:!0,alpha:!0})}catch{R.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}K.setSize(he,Re,!1),K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.setClearColor(790032,1),R.appendChild(K.domElement),X.add(new xl(16777215,1));const _e=new di(16777215,1.4);_e.position.set(4,6,4),X.add(_e);const fe=new di(15267904,1.5);fe.position.set(-3,1,-2),X.add(fe);const Ne=new di(4482815,1.5);Ne.position.set(0,-3,3),X.add(Ne);const qe=new El(6,24,1974821,1580063);qe.position.y=-.45,X.add(qe);const He=new Wn;X.add(He),Y.current=He;const ye=Q.current,Pe=J.current,Ke=B=>{Pe.drag=!0,Pe.prevX=B.clientX,Pe.prevY=B.clientY},ft=()=>{Pe.drag=!1},lt=B=>{Pe.drag&&(ye.tRotY+=(B.clientX-Pe.prevX)*.008,ye.tRotX+=(B.clientY-Pe.prevY)*.005,ye.tRotX=Math.max(-1,Math.min(1,ye.tRotX)),Pe.prevX=B.clientX,Pe.prevY=B.clientY)},Dt=B=>{ye.tZoom+=B.deltaY*.004,ye.tZoom=Math.max(1.5,Math.min(8,ye.tZoom))},bt=re;let zt=0,H=0;const wt=B=>{Pe.drag=!0,zt=B.touches[0].clientX,H=B.touches[0].clientY},ot=()=>{Pe.drag=!1},xt=B=>{Pe.drag&&(ye.tRotY+=(B.touches[0].clientX-zt)*.008,ye.tRotX+=(B.touches[0].clientY-H)*.005,ye.tRotX=Math.max(-1,Math.min(1,ye.tRotX)),zt=B.touches[0].clientX,H=B.touches[0].clientY)};R.addEventListener("mousedown",Ke),window.addEventListener("mouseup",ft),window.addEventListener("mousemove",lt),R.addEventListener("wheel",Dt,{passive:!0}),R.addEventListener("dblclick",bt),R.addEventListener("touchstart",wt,{passive:!0}),window.addEventListener("touchend",ot),window.addEventListener("touchmove",xt,{passive:!0});const Ce=()=>{const B=R.offsetWidth,de=R.offsetHeight;Ee.aspect=B/de,Ee.updateProjectionMatrix(),K.setSize(B,de,!1)};window.addEventListener("resize",Ce);const It=new Ml;let I;function w(){I=requestAnimationFrame(w);const B=It.getDelta();j.current&&!Pe.drag&&(ye.tRotY+=B*.5),ye.rotX+=(ye.tRotX-ye.rotX)*.09,ye.rotY+=(ye.tRotY-ye.rotY)*.09,ye.zoom+=(ye.tZoom-ye.zoom)*.09,He.rotation.x=ye.rotX,He.rotation.y=ye.rotY,Ee.position.z=ye.zoom,Ee.lookAt(0,.05,0),K.render(X,Ee)}return w(),setTimeout(()=>k(!0),800),ce(He),()=>{cancelAnimationFrame(I),R.removeEventListener("mousedown",Ke),window.removeEventListener("mouseup",ft),window.removeEventListener("mousemove",lt),R.removeEventListener("wheel",Dt),R.removeEventListener("dblclick",bt),R.removeEventListener("touchstart",wt),window.removeEventListener("touchend",ot),window.removeEventListener("touchmove",xt),window.removeEventListener("resize",Ce),K.dispose(),R.contains(K.domElement)&&R.removeChild(K.domElement)}},[]),ue.createElement("div",{style:{position:"relative",margin:"0 auto",width:"100%",height:"100%",background:"#0c0e10",overflow:"hidden"}},ue.createElement("style",null,`
        @keyframes tl-spin { to { transform: rotate(360deg); } }
        .tl-mount { width: 100%; height: 100%; cursor: grab; }
        .tl-mount:active { cursor: grabbing; }
        .tl-mount canvas { display: block; width: 100% !important; height: 100% !important; }
      `),ue.createElement("div",{ref:Z,className:"tl-mount"}),ue.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,248,64,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80,120,255,0.05) 0%, transparent 60%)"}}),ue.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:20,height:20,pointerEvents:"none",zIndex:5,opacity:.15}},ue.createElement("div",{style:{position:"absolute",width:1,height:"100%",left:"50%",background:"#eaff00"}}),ue.createElement("div",{style:{position:"absolute",height:1,width:"100%",top:"50%",background:"#eaff00"}})),!W&&ue.createElement("div",{style:{position:"absolute",inset:0,zIndex:30,background:"#0c0e10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,transition:"opacity 0.6s ease"}},ue.createElement("div",{style:{width:36,height:36,border:"1.5px solid rgba(255,255,255,0.08)",borderTopColor:"#eaff00",borderRadius:"50%",animation:"tl-spin 0.7s linear infinite"}}),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Initialisation…")),ue.createElement("div",{style:{position:"absolute",top:16,left:16,right:16,display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10,pointerEvents:"none"}},ue.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},"Vue 3D"))),ue.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10}},"Glisser · Zoomer · Double-clic pour reset"),ue.createElement("div",{style:{position:"absolute",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8,zIndex:10}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Couleur siège"),ue.createElement("div",{style:{display:"flex",gap:6}},h.map(R=>ue.createElement("button",{key:R.id,title:R.id,onClick:X=>{X.preventDefault(),_(R.value),y(R.bg),P(R.guide),S(R.hoop),U(R.skating)},style:{width:20,height:20,borderRadius:"50%",padding:0,cursor:"pointer",border:p===R.value?"2px solid #eaff00":"2px solid transparent",boxShadow:p===R.value?"0 0 8px rgba(232,248,64,0.4)":"none",backgroundImage:`url('${R.src}')`,backgroundSize:"cover",backgroundPosition:"center",transition:"all 0.2s ease"}})))),ue.createElement("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,zIndex:10,background:"#141618",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"8px 10px",backdropFilter:"blur(12px)"}},ue.createElement("button",{onClick:re,style:Zo},"↺ Reset"),ue.createElement("button",{onClick:()=>N(R=>!R),style:L?bf:Zo},L?"⏸ Auto":"▷ Auto"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>O(R=>!R),style:C?bf:Zo},"⬡ Wire"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>F(R=>!R),style:A?bf:Zo},"ℹ Info")),ue.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:220,background:"#141618",borderLeft:"1px solid rgba(255,255,255,0.08)",padding:"24px 18px",zIndex:15,overflowY:"auto",display:"flex",flexDirection:"column",gap:16,transform:A?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},ue.createElement("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:14,fontWeight:700,color:"#eaff00",letterSpacing:"0.02em"}},"Fiche Produit"),[["Modèle","Luge Kind"],null,["Châssis","Bois"],["Siège","Nylon"],["Patins","Acier inox"],null,["Dimensions","110 × 45 × 22 cm"],["Poids","3,2 kg"],["Charge max.","80 kg"],null,["Âge","6 ans et plus"]].map((R,X)=>R===null?ue.createElement("div",{key:X,style:{height:1,background:"rgba(255,255,255,0.08)"}}):ue.createElement("div",{key:X,style:{display:"flex",flexDirection:"column",gap:3}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},R[0]),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:12,color:"#f0ede8"}},R[1])))),se&&ue.createElement(ME,{scene:se,selectedColor:p,backgroundColor:v,guide:E}))};class Jo extends _n{constructor(e,t,r,o,l){super();const c=e.computeFrenetFrames(t,!1),f=[],d=[];for(let p=0;p<=t;p++){const _=p/t,v=qa.lerp(r,o,_),y=e.getPoint(_),E=c.normals[p],P=c.binormals[p];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,D=Math.sin(S),U=Math.cos(S);f.push(y.x+v*(U*E.x+D*P.x),y.y+v*(U*E.y+D*P.y),y.z+v*(U*E.z+D*P.z))}}for(let p=0;p<t;p++)for(let _=0;_<l;_++){const v=p*(l+1)+_,y=(p+1)*(l+1)+_;d.push(v,y,v+1),d.push(y,y+1,v+1)}const h=[];for(let p=0;p<=t;p++)for(let _=0;_<=l;_++)h.push(p/t,_/l);this.setAttribute("uv",new Gt(h,2)),this.setAttribute("position",new Gt(f,3)),this.setIndex(d),this.computeVertexNormals()}}function Pf(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Yi(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function ri(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.06,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.25,-.1,0)],d=new St(f),h=new ke({map:Pf(s)}),p=new be(new Jo(d,100,.04,.02,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:h}}function n0(s,e,t,r,o,l,c){const f=new ke({map:Yi(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function i0(s,e,t,r,o,l,c){const f=[new M(0,-.08,.03),new M(0,-.14,0),new M(0,0,0),new M(0,.14,.03),new M(0,.06,.03)],d=new St(f),h=new ke({map:Yi(s)}),p=new be(new fi(d,3,.03,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-left-bottom",{mesh:p,mat:h}}function r0(s,e,t,r,o,l,c){const f=[new M(0,.08,-.03),new M(0,.14,0),new M(0,0,0),new M(0,-.12,.03),new M(0,-.06,.03)],d=new St(f),h=new ke({map:Yi(s)}),p=new be(new fi(d,3,.03,2),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-Bottom",{mesh:p,mat:h}}function wE(s,e,t,r,o,l,c){const f=[new M(.95,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new St(f),h=new ke({map:Yi(s),side:st}),p=new be(new Jo(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function TE(s,e,t,r,o,l,c){const f=[new M(.95,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new St(f),h=new ke({map:Yi(s),side:st}),p=new be(new Jo(d,100,.04,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:h}}function s0(s,e,t,r,o,l,c){const f=new ke({map:Yi(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function o0(s,e,t,r,o,l,c){const f=new ke({map:Yi(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function AE(s,e,t,r){const o=[new M(-.8,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new St(o),c=new ke({map:Yi(s),side:st}),f=new be(new Jo(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function RE(s,e,t,r){const o=[new M(-.8,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new St(o),c=new ke({map:Yi(s),side:st}),f=new be(new Jo(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function a0(s,e,t,r,o,l,c){const f=new ke({map:Pf(s),side:st}),d=new be(new $t(.045,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function l0(s,e,t,r,o,l,c){const f=new ke({map:Pf(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function c0(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new St(f),h=new ke({map:Yi(s)}),p=new be(new fi(d,100,.01,20),h);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:h}}const CE=({scene:s,selectedColor:e,backgroundColor:t,guide:r,hoop:o,skating:l})=>{const c=Me.useRef(null),f=Me.useRef([]);return Me.useEffect(()=>{const d=new Wn;d.name="luge",f.current=[],[ri(e,-.56,.33,0,0,1.57,0),ri(e,-.49,.333,0,0,1.57,0),ri(e,-.42,.335,0,0,1.57,0),ri(e,-.35,.34,0,0,1.57,0),ri(e,-.27,.345,0,0,1.57,0),ri(e,-.2,.35,0,0,1.57,0),ri(e,-.4,.34,.2,0,0,.05),ri(e,-.4,.34,.13,0,0,.05),ri(e,-.4,.34,.07,0,0,.05),ri(e,-.4,.34,0,0,0,.05),ri(e,-.4,.34,-.07,0,0,.05),ri(e,-.4,.34,-.13,0,0,.05),ri(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[n0(t,-.645,.25,0,1.57,1.57,0),n0(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[i0(o,-.65,.16,-.26,0,0,0),i0(o,-.2,.16,-.26,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[r0(o,-.65,.16,.26,0,0,0),r0(o,-.2,.16,.26,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)});const y=wE(t,.2,.28,.24,1.57,0,3.13);d.add(y.mesh),f.current.push(y.mat);const E=TE(t,.2,.28,-.24,-1.57,0,3.13);d.add(E.mesh),f.current.push(E.mat),[s0(t,-.75,.23,.23,0,0,0),s0(t,-.75,.23,-.23,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[o0(t,.7,.33,.184,0,0,0),o0(t,.7,.33,-.184,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)});const S=AE(l,0,.19,.37);d.add(S.mesh),f.current.push(S.mat);const D=RE(l,0,.19,-.37);return d.add(D.mesh),f.current.push(D.mat),[a0(l,-.8,.07,.27,0,0,0),a0(l,-.8,.07,-.27,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[l0(l,.63,.471,.169,0,0,0),l0(l,.63,.471,-.169,0,0,0)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),[c0(r,-.03,.2,.52,-1.57,0,-.1),c0(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:C,mat:O})=>{d.add(C),f.current.push(O)}),c.current=d,s.add(d),()=>{s.remove(d),d.traverse(C=>{C.isMesh&&(C.geometry.dispose(),C.material.dispose())})}},[s,e,t,r,o,l]),null},Qo={fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",background:"none",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,padding:"7px 14px",cursor:"pointer",color:"rgba(240,237,232,0.6)",whiteSpace:"nowrap",transition:"all 0.15s ease"},Lf={...Qo,color:"#eaff00",borderColor:"rgba(232,248,64,0.35)",background:"rgba(232,248,64,0.07)"},bE=({img1:s,img2:e,img3:t,img4:r,img5:o,wood:l,guide:c,skating:f,hoop:d})=>{const h=Me.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:d,skating:f},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:d,skating:f},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:d,skating:f},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:d,skating:f},{id:"color-5",value:o,src:o,bg:l,guide:c,hoop:d,skating:f}],[s,e,t,r,o,l,c,d,f]),[p,_]=Me.useState(h[0].value),[v,y]=Me.useState(h[0].bg),[E,P]=Me.useState(h[0].guide),[x,S]=Me.useState(h[0].hoop),[D,U]=Me.useState(h[0].skating),[L,N]=Me.useState(!1),[C,O]=Me.useState(!1),[A,F]=Me.useState(!1),[W,k]=Me.useState(!1),Z=Me.useRef(null),[se,ce]=Me.useState(null),Y=Me.useRef(null),Q=Me.useRef({rotX:.18,rotY:-.4,tRotX:.18,tRotY:-.4,zoom:4.5,tZoom:4.5}),J=Me.useRef({drag:!1,prevX:0,prevY:0}),j=Me.useRef(!1),oe=Me.useRef(!1);Me.useEffect(()=>{j.current=L},[L]),Me.useEffect(()=>{oe.current=C,Y.current&&Y.current.traverse(R=>{R.isMesh&&(R.material.wireframe=C)})},[C]);const re=()=>{const R=Q.current;R.tRotX=.18,R.tRotY=-.4,R.tZoom=4.5};return Me.useEffect(()=>{const R=Z.current;if(!R)return;const X=new Ja,he=R.offsetWidth||1e3,Re=R.offsetHeight||700,Ee=new zn(38,he/Re,.01,50);Ee.position.set(0,.5,4.5),Ee.lookAt(0,.3,0);let K;try{K=new bl({antialias:!0,alpha:!0})}catch{R.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}K.setSize(he,Re,!1),K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.setClearColor(790032,1),R.appendChild(K.domElement),X.add(new xl(16777215,1));const _e=new di(16777215,1.4);_e.position.set(4,6,4),X.add(_e);const fe=new di(15267904,1.5);fe.position.set(-3,1,-2),X.add(fe);const Ne=new di(4482815,1.5);Ne.position.set(0,-3,3),X.add(Ne);const qe=new El(6,24,1974821,1580063);qe.position.y=-.45,X.add(qe);const He=new Wn;X.add(He),Y.current=He;const ye=Q.current,Pe=J.current,Ke=B=>{Pe.drag=!0,Pe.prevX=B.clientX,Pe.prevY=B.clientY},ft=()=>{Pe.drag=!1},lt=B=>{Pe.drag&&(ye.tRotY+=(B.clientX-Pe.prevX)*.008,ye.tRotX+=(B.clientY-Pe.prevY)*.005,ye.tRotX=Math.max(-1,Math.min(1,ye.tRotX)),Pe.prevX=B.clientX,Pe.prevY=B.clientY)},Dt=B=>{ye.tZoom+=B.deltaY*.004,ye.tZoom=Math.max(1.5,Math.min(8,ye.tZoom))},bt=re;let zt=0,H=0;const wt=B=>{Pe.drag=!0,zt=B.touches[0].clientX,H=B.touches[0].clientY},ot=()=>{Pe.drag=!1},xt=B=>{Pe.drag&&(ye.tRotY+=(B.touches[0].clientX-zt)*.008,ye.tRotX+=(B.touches[0].clientY-H)*.005,ye.tRotX=Math.max(-1,Math.min(1,ye.tRotX)),zt=B.touches[0].clientX,H=B.touches[0].clientY)};R.addEventListener("mousedown",Ke),window.addEventListener("mouseup",ft),window.addEventListener("mousemove",lt),R.addEventListener("wheel",Dt,{passive:!0}),R.addEventListener("dblclick",bt),R.addEventListener("touchstart",wt,{passive:!0}),window.addEventListener("touchend",ot),window.addEventListener("touchmove",xt,{passive:!0});const Ce=()=>{const B=R.offsetWidth,de=R.offsetHeight;Ee.aspect=B/de,Ee.updateProjectionMatrix(),K.setSize(B,de,!1)};window.addEventListener("resize",Ce);const It=new Ml;let I;function w(){I=requestAnimationFrame(w);const B=It.getDelta();j.current&&!Pe.drag&&(ye.tRotY+=B*.5),ye.rotX+=(ye.tRotX-ye.rotX)*.09,ye.rotY+=(ye.tRotY-ye.rotY)*.09,ye.zoom+=(ye.tZoom-ye.zoom)*.09,He.rotation.x=ye.rotX,He.rotation.y=ye.rotY,Ee.position.z=ye.zoom,Ee.lookAt(0,.05,0),K.render(X,Ee)}return w(),setTimeout(()=>k(!0),800),ce(He),()=>{cancelAnimationFrame(I),R.removeEventListener("mousedown",Ke),window.removeEventListener("mouseup",ft),window.removeEventListener("mousemove",lt),R.removeEventListener("wheel",Dt),R.removeEventListener("dblclick",bt),R.removeEventListener("touchstart",wt),window.removeEventListener("touchend",ot),window.removeEventListener("touchmove",xt),window.removeEventListener("resize",Ce),K.dispose(),R.contains(K.domElement)&&R.removeChild(K.domElement)}},[]),ue.createElement("div",{style:{position:"relative",margin:"0 auto",width:"100%",height:"100%",background:"#0c0e10",overflow:"hidden"}},ue.createElement("style",null,`
        @keyframes tl-spin { to { transform: rotate(360deg); } }
        .tl-mount { width: 100%; height: 100%; cursor: grab; }
        .tl-mount:active { cursor: grabbing; }
        .tl-mount canvas { display: block; width: 100% !important; height: 100% !important; }
      `),ue.createElement("div",{ref:Z,className:"tl-mount"}),ue.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,248,64,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80,120,255,0.05) 0%, transparent 60%)"}}),ue.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:20,height:20,pointerEvents:"none",zIndex:5,opacity:.15}},ue.createElement("div",{style:{position:"absolute",width:1,height:"100%",left:"50%",background:"#eaff00"}}),ue.createElement("div",{style:{position:"absolute",height:1,width:"100%",top:"50%",background:"#eaff00"}})),!W&&ue.createElement("div",{style:{position:"absolute",inset:0,zIndex:30,background:"#0c0e10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,transition:"opacity 0.6s ease"}},ue.createElement("div",{style:{width:36,height:36,border:"1.5px solid rgba(255,255,255,0.08)",borderTopColor:"#eaff00",borderRadius:"50%",animation:"tl-spin 0.7s linear infinite"}}),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Initialisation…")),ue.createElement("div",{style:{position:"absolute",top:16,left:16,right:16,display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10,pointerEvents:"none"}},ue.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},"Vue 3D"))),ue.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10}},"Glisser · Zoomer · Double-clic pour reset"),ue.createElement("div",{style:{position:"absolute",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8,zIndex:10}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Couleur siège"),ue.createElement("div",{style:{display:"flex",gap:6}},h.map(R=>ue.createElement("button",{key:R.id,title:R.id,onClick:X=>{X.preventDefault(),_(R.value),y(R.bg),P(R.guide),S(R.hoop),U(R.skating)},style:{width:20,height:20,borderRadius:"50%",padding:0,cursor:"pointer",border:p===R.value?"2px solid #eaff00":"2px solid transparent",boxShadow:p===R.value?"0 0 8px rgba(232,248,64,0.4)":"none",backgroundImage:`url('${R.src}')`,backgroundSize:"cover",backgroundPosition:"center",transition:"all 0.2s ease"}})))),ue.createElement("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,zIndex:10,background:"#141618",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"8px 10px",backdropFilter:"blur(12px)"}},ue.createElement("button",{onClick:re,style:Qo},"↺ Reset"),ue.createElement("button",{onClick:()=>N(R=>!R),style:L?Lf:Qo},L?"⏸ Auto":"▷ Auto"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>O(R=>!R),style:C?Lf:Qo},"⬡ Wire"),ue.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),ue.createElement("button",{onClick:()=>F(R=>!R),style:A?Lf:Qo},"ℹ Info")),ue.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:220,background:"#141618",borderLeft:"1px solid rgba(255,255,255,0.08)",padding:"24px 18px",zIndex:15,overflowY:"auto",display:"flex",flexDirection:"column",gap:16,transform:A?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},ue.createElement("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:14,fontWeight:700,color:"#eaff00",letterSpacing:"0.02em"}},"Fiche Produit"),[["Modèle","Luge Sport"],null,["Châssis","Bois"],["Siège","Nylon"],["Patins","Acier inox"],null,["Dimensions","110 × 45 × 22 cm"],["Poids","3,2 kg"],["Charge max.","80 kg"],null,["Âge","6 ans et plus"]].map((R,X)=>R===null?ue.createElement("div",{key:X,style:{height:1,background:"rgba(255,255,255,0.08)"}}):ue.createElement("div",{key:X,style:{display:"flex",flexDirection:"column",gap:3}},ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},R[0]),ue.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:12,color:"#f0ede8"}},R[1])))),se&&ue.createElement(CE,{scene:se,selectedColor:p,backgroundColor:v,guide:E,hoop:x,skating:D}))};function Ll(s,e){const t=document.getElementById(s);if(t&&t.dataset.mounted!=="true"){t.dataset.mounted="true";try{const r={img1:t.dataset.img1||"",img2:t.dataset.img2||"",img3:t.dataset.img3||"",img4:t.dataset.img4||"",img5:t.dataset.img5||"",wood:t.dataset.wood||"",guide:t.dataset.guide||"",skating:t.dataset.skating||"",hoop:t.dataset.hoop||""};Fv.createRoot(t).render(ue.createElement(e,{...r}))}catch(r){t.innerHTML='<div style="padding:20px;color:red;font-family:sans-serif"><strong>Erreur configurateur 3D :</strong> '+r.message+"</div>"}}}function u0(){Ll("luge-configurator-root",fE),Ll("luge-ad-root",vE),Ll("luge-kid-root",EE),Ll("luge-speed-root",bE)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u0):u0()})();
