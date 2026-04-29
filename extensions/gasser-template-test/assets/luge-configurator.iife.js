(function(){"use strict";if(typeof Qg>"u")var Qg={env:{NODE_ENV:"production"}};var Tc={exports:{}},Eo={},wc={exports:{}},_t={},sd;function ev(){if(sd)return _t;sd=1;/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function x(B,ee,Ue){this.props=B,this.context=ee,this.refs=R,this.updater=Ue||S}x.prototype.isReactComponent={},x.prototype.setState=function(B,ee){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ee,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function y(){}y.prototype=x.prototype;function P(B,ee,Ue){this.props=B,this.context=ee,this.refs=R,this.updater=Ue||S}var N=P.prototype=new y;N.constructor=P,M(N,x.prototype),N.isPureReactComponent=!0;var L=Array.isArray,U=Object.prototype.hasOwnProperty,b={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(B,ee,Ue){var He,De={},ae=null,Se=null;if(ee!=null)for(He in ee.ref!==void 0&&(Se=ee.ref),ee.key!==void 0&&(ae=""+ee.key),ee)U.call(ee,He)&&!F.hasOwnProperty(He)&&(De[He]=ee[He]);var pe=arguments.length-2;if(pe===1)De.children=Ue;else if(1<pe){for(var Ne=Array(pe),Ze=0;Ze<pe;Ze++)Ne[Ze]=arguments[Ze+2];De.children=Ne}if(B&&B.defaultProps)for(He in pe=B.defaultProps,pe)De[He]===void 0&&(De[He]=pe[He]);return{$$typeof:s,type:B,key:ae,ref:Se,props:De,_owner:b.current}}function I(B,ee){return{$$typeof:s,type:B.type,key:ee,ref:B.ref,props:B.props,_owner:B._owner}}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function z(B){var ee={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ue){return ee[Ue]})}var $=/\/+/g;function ie(B,ee){return typeof B=="object"&&B!==null&&B.key!=null?z(""+B.key):ee.toString(36)}function se(B,ee,Ue,He,De){var ae=typeof B;(ae==="undefined"||ae==="boolean")&&(B=null);var Se=!1;if(B===null)Se=!0;else switch(ae){case"string":case"number":Se=!0;break;case"object":switch(B.$$typeof){case s:case e:Se=!0}}if(Se)return Se=B,De=De(Se),B=He===""?"."+ie(Se,0):He,L(De)?(Ue="",B!=null&&(Ue=B.replace($,"$&/")+"/"),se(De,ee,Ue,"",function(Ze){return Ze})):De!=null&&(G(De)&&(De=I(De,Ue+(!De.key||Se&&Se.key===De.key?"":(""+De.key).replace($,"$&/")+"/")+B)),ee.push(De)),1;if(Se=0,He=He===""?".":He+":",L(B))for(var pe=0;pe<B.length;pe++){ae=B[pe];var Ne=He+ie(ae,pe);Se+=se(ae,ee,Ue,Ne,De)}else if(Ne=v(B),typeof Ne=="function")for(B=Ne.call(B),pe=0;!(ae=B.next()).done;)ae=ae.value,Ne=He+ie(ae,pe++),Se+=se(ae,ee,Ue,Ne,De);else if(ae==="object")throw ee=String(B),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Se}function Y(B,ee,Ue){if(B==null)return B;var He=[],De=0;return se(B,He,"","",function(ae){return ee.call(Ue,ae,De++)}),He}function J(B){if(B._status===-1){var ee=B._result;ee=ee(),ee.then(function(Ue){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ue)},function(Ue){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ue)}),B._status===-1&&(B._status=0,B._result=ee)}if(B._status===1)return B._result.default;throw B._result}var K={current:null},j={transition:null},le={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:j,ReactCurrentOwner:b};function ce(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:Y,forEach:function(B,ee,Ue){Y(B,function(){ee.apply(this,arguments)},Ue)},count:function(B){var ee=0;return Y(B,function(){ee++}),ee},toArray:function(B){return Y(B,function(ee){return ee})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},_t.Component=x,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=P,_t.StrictMode=r,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,_t.act=ce,_t.cloneElement=function(B,ee,Ue){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var He=M({},B.props),De=B.key,ae=B.ref,Se=B._owner;if(ee!=null){if(ee.ref!==void 0&&(ae=ee.ref,Se=b.current),ee.key!==void 0&&(De=""+ee.key),B.type&&B.type.defaultProps)var pe=B.type.defaultProps;for(Ne in ee)U.call(ee,Ne)&&!F.hasOwnProperty(Ne)&&(He[Ne]=ee[Ne]===void 0&&pe!==void 0?pe[Ne]:ee[Ne])}var Ne=arguments.length-2;if(Ne===1)He.children=Ue;else if(1<Ne){pe=Array(Ne);for(var Ze=0;Ze<Ne;Ze++)pe[Ze]=arguments[Ze+2];He.children=pe}return{$$typeof:s,type:B.type,key:De,ref:ae,props:He,_owner:Se}},_t.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},_t.createElement=w,_t.createFactory=function(B){var ee=w.bind(null,B);return ee.type=B,ee},_t.createRef=function(){return{current:null}},_t.forwardRef=function(B){return{$$typeof:h,render:B}},_t.isValidElement=G,_t.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:J}},_t.memo=function(B,ee){return{$$typeof:p,type:B,compare:ee===void 0?null:ee}},_t.startTransition=function(B){var ee=j.transition;j.transition={};try{B()}finally{j.transition=ee}},_t.unstable_act=ce,_t.useCallback=function(B,ee){return K.current.useCallback(B,ee)},_t.useContext=function(B){return K.current.useContext(B)},_t.useDebugValue=function(){},_t.useDeferredValue=function(B){return K.current.useDeferredValue(B)},_t.useEffect=function(B,ee){return K.current.useEffect(B,ee)},_t.useId=function(){return K.current.useId()},_t.useImperativeHandle=function(B,ee,Ue){return K.current.useImperativeHandle(B,ee,Ue)},_t.useInsertionEffect=function(B,ee){return K.current.useInsertionEffect(B,ee)},_t.useLayoutEffect=function(B,ee){return K.current.useLayoutEffect(B,ee)},_t.useMemo=function(B,ee){return K.current.useMemo(B,ee)},_t.useReducer=function(B,ee,Ue){return K.current.useReducer(B,ee,Ue)},_t.useRef=function(B){return K.current.useRef(B)},_t.useState=function(B){return K.current.useState(B)},_t.useSyncExternalStore=function(B,ee,Ue){return K.current.useSyncExternalStore(B,ee,Ue)},_t.useTransition=function(){return K.current.useTransition()},_t.version="18.3.1",_t}var od;function Ac(){return od||(od=1,wc.exports=ev()),wc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function tv(){if(ad)return Eo;ad=1;var s=Ac(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,p){var m,_={},v=null,S=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)r.call(f,m)&&!l.hasOwnProperty(m)&&(_[m]=f[m]);if(h&&h.defaultProps)for(m in f=h.defaultProps,f)_[m]===void 0&&(_[m]=f[m]);return{$$typeof:e,type:h,key:v,ref:S,props:_,_owner:a.current}}return Eo.Fragment=t,Eo.jsx=u,Eo.jsxs=u,Eo}var ld;function nv(){return ld||(ld=1,Tc.exports=tv()),Tc.exports}var Sn=nv(),cn=Ac(),ba={},Rc={exports:{}},zn={},Cc={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function iv(){return cd||(cd=1,(function(s){function e(j,le){var ce=j.length;j.push(le);e:for(;0<ce;){var B=ce-1>>>1,ee=j[B];if(0<a(ee,le))j[B]=le,j[ce]=ee,ce=B;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var le=j[0],ce=j.pop();if(ce!==le){j[0]=ce;e:for(var B=0,ee=j.length,Ue=ee>>>1;B<Ue;){var He=2*(B+1)-1,De=j[He],ae=He+1,Se=j[ae];if(0>a(De,ce))ae<ee&&0>a(Se,De)?(j[B]=Se,j[ae]=ce,B=ae):(j[B]=De,j[He]=ce,B=He);else if(ae<ee&&0>a(Se,ce))j[B]=Se,j[ae]=ce,B=ae;else break e}}return le}function a(j,le){var ce=j.sortIndex-le.sortIndex;return ce!==0?ce:j.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var f=[],p=[],m=1,_=null,v=3,S=!1,M=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(j){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=j)r(p),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(p)}}function L(j){if(R=!1,N(j),!M)if(t(f)!==null)M=!0,J(U);else{var le=t(p);le!==null&&K(L,le.startTime-j)}}function U(j,le){M=!1,R&&(R=!1,y(w),w=-1),S=!0;var ce=v;try{for(N(le),_=t(f);_!==null&&(!(_.expirationTime>le)||j&&!z());){var B=_.callback;if(typeof B=="function"){_.callback=null,v=_.priorityLevel;var ee=B(_.expirationTime<=le);le=s.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(f)&&r(f),N(le)}else r(f);_=t(f)}if(_!==null)var Ue=!0;else{var He=t(p);He!==null&&K(L,He.startTime-le),Ue=!1}return Ue}finally{_=null,v=ce,S=!1}}var b=!1,F=null,w=-1,I=5,G=-1;function z(){return!(s.unstable_now()-G<I)}function $(){if(F!==null){var j=s.unstable_now();G=j;var le=!0;try{le=F(!0,j)}finally{le?ie():(b=!1,F=null)}}else b=!1}var ie;if(typeof P=="function")ie=function(){P($)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Y=se.port2;se.port1.onmessage=$,ie=function(){Y.postMessage(null)}}else ie=function(){x($,0)};function J(j){F=j,b||(b=!0,ie())}function K(j,le){w=x(function(){j(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,J(U))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(j){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var ce=v;v=le;try{return j()}finally{v=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,le){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ce=v;v=j;try{return le()}finally{v=ce}},s.unstable_scheduleCallback=function(j,le,ce){var B=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?B+ce:B):ce=B,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ce+ee,j={id:m++,callback:le,priorityLevel:j,startTime:ce,expirationTime:ee,sortIndex:-1},ce>B?(j.sortIndex=ce,e(p,j),t(f)===null&&j===t(p)&&(R?(y(w),w=-1):R=!0,K(L,ce-B))):(j.sortIndex=ee,e(f,j),M||S||(M=!0,J(U))),j},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(j){var le=v;return function(){var ce=v;v=le;try{return j.apply(this,arguments)}finally{v=ce}}}})(Pc)),Pc}var ud;function rv(){return ud||(ud=1,Cc.exports=iv()),Cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function sv(){if(hd)return zn;hd=1;var s=Ac(),e=rv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function v(n){return f.call(_,n)?!0:f.call(m,n)?!1:p.test(n)?_[n]=!0:(m[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,c,d,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,P);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,P);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,P);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,o,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,c)&&(o=null),c||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),b=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),j=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,B;function ee(n){if(B===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var Ue=!1;function He(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var d=oe.stack.split(`
`),g=c.stack.split(`
`),T=d.length-1,O=g.length-1;1<=T&&0<=O&&d[T]!==g[O];)O--;for(;1<=T&&0<=O;T--,O--)if(d[T]!==g[O]){if(T!==1||O!==1)do if(T--,O--,0>O||d[T]!==g[O]){var k=`
`+d[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=O);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ee(n):""}function De(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case b:return"Portal";case I:return"Profiler";case w:return"StrictMode";case ie:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case G:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case J:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Ne(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=Ze(n))}function Bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ne(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,i){var o=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ot(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=pe(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Kt(n,i){pt(n,i);var o=pe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?En(n,i.type,o):i.hasOwnProperty("defaultValue")&&En(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function zt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function En(n,i,o){(i!=="number"||ht(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var V=Array.isArray;function kt(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+pe(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function mt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lt(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(V(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:pe(o)}}function be(n,i){var o=pe(i.value),c=pe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Vt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?D(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var q,fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(q=q||document.createElement("div"),q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function me(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xe[i]=xe[n]})});function ue(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xe.hasOwnProperty(n)&&xe[n]?(""+i).trim():i+"px"}function de(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=ue(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Ie=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fe(n,i){if(i){if(Ie[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function we(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,gt=null,H=null;function Te(n){if(n=ma(n)){if(typeof st!="function")throw Error(t(280));var i=n.stateNode;i&&(i=zl(i),st(n.stateNode,n.type,i))}}function he(n){gt?H?H.push(n):H=[n]:gt=n}function Oe(){if(gt){var n=gt,i=H;if(H=gt=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function Re(n,i){return n(i)}function ge(){}var We=!1;function ot(n,i,o){if(We)return n(i,o);We=!0;try{return Re(n,i,o)}finally{We=!1,(gt!==null||H!==null)&&(ge(),Oe())}}function Ft(n,i){var o=n.stateNode;if(o===null)return null;var c=zl(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Rt=!1;if(h)try{var On={};Object.defineProperty(On,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Rt=!1}function li(n,i,o,c,d,g,T,O,k){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(o,oe)}catch(_e){this.onError(_e)}}var or=!1,Zs=null,as=!1,Js=null,ar={onError:function(n){or=!0,Zs=n}};function qo(n,i,o,c,d,g,T,O,k){or=!1,Zs=null,li.apply(ar,arguments)}function Ml(n,i,o,c,d,g,T,O,k){if(qo.apply(this,arguments),or){if(or){var oe=Zs;or=!1,Zs=null}else throw Error(t(198));as||(as=!0,Js=oe)}}function Hi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ls(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function $o(n){if(Hi(n)!==n)throw Error(t(188))}function Qs(n){var i=n.alternate;if(!i){if(i=Hi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return $o(d),n;if(g===c)return $o(d),i;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=g;else{for(var T=!1,O=d.child;O;){if(O===o){T=!0,o=d,c=g;break}if(O===c){T=!0,c=d,o=g;break}O=O.sibling}if(!T){for(O=g.child;O;){if(O===o){T=!0,o=g,c=d;break}if(O===c){T=!0,c=g,o=d;break}O=O.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Ko(n){return n=Qs(n),n!==null?Zo(n):null}function Zo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Zo(n);if(i!==null)return i;n=n.sibling}return null}var El=e.unstable_scheduleCallback,Tl=e.unstable_cancelCallback,Rh=e.unstable_shouldYield,Ch=e.unstable_requestPaint,Zt=e.unstable_now,Ph=e.unstable_getCurrentPriorityLevel,Jo=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,re=e.unstable_LowPriority,te=e.unstable_IdlePriority,Q=null,Ce=null;function ke(n){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Q,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:at,Xe=Math.log,Ke=Math.LN2;function at(n){return n>>>=0,n===0?32:31-(Xe(n)/Ke|0)|0}var lt=64,je=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ht(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,T=o&268435455;if(T!==0){var O=T&~d;O!==0?c=xt(O):(g&=T,g!==0&&(c=xt(g)))}else T=o&~d,T!==0?c=xt(T):g!==0&&(c=xt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Ae(i),d=1<<o,c|=n[o],i&=~d;return c}function jt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-Ae(g),O=1<<T,k=d[T];k===-1?((O&o)===0||(O&c)!==0)&&(d[T]=jt(O,i)):k<=i&&(n.expiredLanes|=O),g&=~O}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),n}function Tn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function vt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ae(i),n[i]=o}function Vn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Ae(o),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~g}}function Wn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Ae(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var St=0;function lr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pt,Wt,yi,Nt,xi,Gi=!1,cs=[],Pr=null,br=null,Lr=null,Qo=new Map,ea=new Map,Dr=[],rE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Om(n,i){switch(n){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(i.pointerId)}}function ta(n,i,o,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=ma(i),i!==null&&Wt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function sE(n,i,o,c,d){switch(i){case"focusin":return Pr=ta(Pr,n,i,o,c,d),!0;case"dragenter":return br=ta(br,n,i,o,c,d),!0;case"mouseover":return Lr=ta(Lr,n,i,o,c,d),!0;case"pointerover":var g=d.pointerId;return Qo.set(g,ta(Qo.get(g)||null,n,i,o,c,d)),!0;case"gotpointercapture":return g=d.pointerId,ea.set(g,ta(ea.get(g)||null,n,i,o,c,d)),!0}return!1}function Fm(n){var i=us(n.target);if(i!==null){var o=Hi(i);if(o!==null){if(i=o.tag,i===13){if(i=ls(o),i!==null){n.blockedOn=i,xi(n.priority,function(){yi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Lh(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Me=c,o.target.dispatchEvent(c),Me=null}else return i=ma(o),i!==null&&Wt(i),n.blockedOn=o,!1;i.shift()}return!0}function Bm(n,i,o){wl(n)&&o.delete(i)}function oE(){Gi=!1,Pr!==null&&wl(Pr)&&(Pr=null),br!==null&&wl(br)&&(br=null),Lr!==null&&wl(Lr)&&(Lr=null),Qo.forEach(Bm),ea.forEach(Bm)}function na(n,i){n.blockedOn===i&&(n.blockedOn=null,Gi||(Gi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,oE)))}function ia(n){function i(d){return na(d,n)}if(0<cs.length){na(cs[0],n);for(var o=1;o<cs.length;o++){var c=cs[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Pr!==null&&na(Pr,n),br!==null&&na(br,n),Lr!==null&&na(Lr,n),Qo.forEach(i),ea.forEach(i),o=0;o<Dr.length;o++)c=Dr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Dr.length&&(o=Dr[0],o.blockedOn===null);)Fm(o),o.blockedOn===null&&Dr.shift()}var eo=L.ReactCurrentBatchConfig,Al=!0;function aE(n,i,o,c){var d=St,g=eo.transition;eo.transition=null;try{St=1,bh(n,i,o,c)}finally{St=d,eo.transition=g}}function lE(n,i,o,c){var d=St,g=eo.transition;eo.transition=null;try{St=4,bh(n,i,o,c)}finally{St=d,eo.transition=g}}function bh(n,i,o,c){if(Al){var d=Lh(n,i,o,c);if(d===null)qh(n,i,c,Rl,o),Om(n,c);else if(sE(d,n,i,o,c))c.stopPropagation();else if(Om(n,c),i&4&&-1<rE.indexOf(n)){for(;d!==null;){var g=ma(d);if(g!==null&&Pt(g),g=Lh(n,i,o,c),g===null&&qh(n,i,c,Rl,o),g===d)break;d=g}d!==null&&c.stopPropagation()}else qh(n,i,c,null,o)}}var Rl=null;function Lh(n,i,o,c){if(Rl=null,n=it(c),n=us(n),n!==null)if(i=Hi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ls(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Rl=n,null}function zm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ph()){case Jo:return 1;case A:return 4;case X:case re:return 16;case te:return 536870912;default:return 16}default:return 16}}var Nr=null,Dh=null,Cl=null;function km(){if(Cl)return Cl;var n,i=Dh,o=i.length,c,d="value"in Nr?Nr.value:Nr.textContent,g=d.length;for(n=0;n<o&&i[n]===d[n];n++);var T=o-n;for(c=1;c<=T&&i[o-c]===d[g-c];c++);return Cl=d.slice(n,1<c?1-c:void 0)}function Pl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bl(){return!0}function Hm(){return!1}function ti(n){function i(o,c,d,g,T){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?bl:Hm,this.isPropagationStopped=Hm,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),i}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nh=ti(to),ra=ce({},to,{view:0,detail:0}),cE=ti(ra),Ih,Uh,sa,Ll=ce({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sa&&(sa&&n.type==="mousemove"?(Ih=n.screenX-sa.screenX,Uh=n.screenY-sa.screenY):Uh=Ih=0,sa=n),Ih)},movementY:function(n){return"movementY"in n?n.movementY:Uh}}),Gm=ti(Ll),uE=ce({},Ll,{dataTransfer:0}),hE=ti(uE),fE=ce({},ra,{relatedTarget:0}),Oh=ti(fE),dE=ce({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),pE=ti(dE),mE=ce({},to,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gE=ti(mE),vE=ce({},to,{data:0}),Vm=ti(vE),_E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xE(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yE[n])?!!i[n]:!1}function Fh(){return xE}var ME=ce({},ra,{key:function(n){if(n.key){var i=_E[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Pl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?SE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(n){return n.type==="keypress"?Pl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),EE=ti(ME),TE=ce({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=ti(TE),wE=ce({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),AE=ti(wE),RE=ce({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),CE=ti(RE),PE=ce({},Ll,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bE=ti(PE),LE=[9,13,27,32],Bh=h&&"CompositionEvent"in window,oa=null;h&&"documentMode"in document&&(oa=document.documentMode);var DE=h&&"TextEvent"in window&&!oa,Xm=h&&(!Bh||oa&&8<oa&&11>=oa),Ym=" ",jm=!1;function qm(n,i){switch(n){case"keyup":return LE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var no=!1;function NE(n,i){switch(n){case"compositionend":return $m(i);case"keypress":return i.which!==32?null:(jm=!0,Ym);case"textInput":return n=i.data,n===Ym&&jm?null:n;default:return null}}function IE(n,i){if(no)return n==="compositionend"||!Bh&&qm(n,i)?(n=km(),Cl=Dh=Nr=null,no=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xm&&i.locale!=="ko"?null:i.data;default:return null}}var UE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!UE[n.type]:i==="textarea"}function Zm(n,i,o,c){he(c),i=Ol(i,"onChange"),0<i.length&&(o=new Nh("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var aa=null,la=null;function OE(n){m0(n,0)}function Dl(n){var i=ao(n);if(Bt(i))return n}function FE(n,i){if(n==="change")return i}var Jm=!1;if(h){var zh;if(h){var kh="oninput"in document;if(!kh){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),kh=typeof Qm.oninput=="function"}zh=kh}else zh=!1;Jm=zh&&(!document.documentMode||9<document.documentMode)}function e0(){aa&&(aa.detachEvent("onpropertychange",t0),la=aa=null)}function t0(n){if(n.propertyName==="value"&&Dl(la)){var i=[];Zm(i,la,n,it(n)),ot(OE,i)}}function BE(n,i,o){n==="focusin"?(e0(),aa=i,la=o,aa.attachEvent("onpropertychange",t0)):n==="focusout"&&e0()}function zE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Dl(la)}function kE(n,i){if(n==="click")return Dl(i)}function HE(n,i){if(n==="input"||n==="change")return Dl(i)}function GE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Mi=typeof Object.is=="function"?Object.is:GE;function ca(n,i){if(Mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!f.call(i,d)||!Mi(n[d],i[d]))return!1}return!0}function n0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function i0(n,i){var o=n0(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=n0(o)}}function r0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?r0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function s0(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ht(n.document)}return i}function Hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function VE(n){var i=s0(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&r0(o.ownerDocument.documentElement,o)){if(c!==null&&Hh(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=i0(o,g);var T=i0(o,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var WE=h&&"documentMode"in document&&11>=document.documentMode,io=null,Gh=null,ua=null,Vh=!1;function o0(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Vh||io==null||io!==ht(c)||(c=io,"selectionStart"in c&&Hh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&ca(ua,c)||(ua=c,c=Ol(Gh,"onSelect"),0<c.length&&(i=new Nh("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=io)))}function Nl(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ro={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},Wh={},a0={};h&&(a0=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Il(n){if(Wh[n])return Wh[n];if(!ro[n])return n;var i=ro[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in a0)return Wh[n]=i[o];return n}var l0=Il("animationend"),c0=Il("animationiteration"),u0=Il("animationstart"),h0=Il("transitionend"),f0=new Map,d0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,i){f0.set(n,i),l(i,[n])}for(var Xh=0;Xh<d0.length;Xh++){var Yh=d0[Xh],XE=Yh.toLowerCase(),YE=Yh[0].toUpperCase()+Yh.slice(1);Ir(XE,"on"+YE)}Ir(l0,"onAnimationEnd"),Ir(c0,"onAnimationIteration"),Ir(u0,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(h0,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function p0(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Ml(c,i,void 0,n),n.currentTarget=null}function m0(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var O=c[T],k=O.instance,oe=O.currentTarget;if(O=O.listener,k!==g&&d.isPropagationStopped())break e;p0(d,O,oe),g=k}else for(T=0;T<c.length;T++){if(O=c[T],k=O.instance,oe=O.currentTarget,O=O.listener,k!==g&&d.isPropagationStopped())break e;p0(d,O,oe),g=k}}}if(as)throw n=Js,as=!1,Js=null,n}function Xt(n,i){var o=i[ef];o===void 0&&(o=i[ef]=new Set);var c=n+"__bubble";o.has(c)||(g0(i,n,2,!1),o.add(c))}function jh(n,i,o){var c=0;i&&(c|=4),g0(o,n,c,i)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function fa(n){if(!n[Ul]){n[Ul]=!0,r.forEach(function(o){o!=="selectionchange"&&(jE.has(o)||jh(o,!1,n),jh(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ul]||(i[Ul]=!0,jh("selectionchange",!1,i))}}function g0(n,i,o,c){switch(zm(i)){case 1:var d=aE;break;case 4:d=lE;break;default:d=bh}o=d.bind(null,i,o,n),d=void 0,!Rt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function qh(n,i,o,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;T=T.return}for(;O!==null;){if(T=us(O),T===null)return;if(k=T.tag,k===5||k===6){c=g=T;continue e}O=O.parentNode}}c=c.return}ot(function(){var oe=g,_e=it(o),ye=[];e:{var ve=f0.get(n);if(ve!==void 0){var ze=Nh,Ve=n;switch(n){case"keypress":if(Pl(o)===0)break e;case"keydown":case"keyup":ze=EE;break;case"focusin":Ve="focus",ze=Oh;break;case"focusout":Ve="blur",ze=Oh;break;case"beforeblur":case"afterblur":ze=Oh;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=hE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=AE;break;case l0:case c0:case u0:ze=pE;break;case h0:ze=CE;break;case"scroll":ze=cE;break;case"wheel":ze=bE;break;case"copy":case"cut":case"paste":ze=gE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Wm}var Ye=(i&4)!==0,sn=!Ye&&n==="scroll",Z=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var W=oe,ne;W!==null;){ne=W;var Ee=ne.stateNode;if(ne.tag===5&&Ee!==null&&(ne=Ee,Z!==null&&(Ee=Ft(W,Z),Ee!=null&&Ye.push(da(W,Ee,ne)))),sn)break;W=W.return}0<Ye.length&&(ve=new ze(ve,Ve,null,o,_e),ye.push({event:ve,listeners:Ye}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ve&&o!==Me&&(Ve=o.relatedTarget||o.fromElement)&&(us(Ve)||Ve[cr]))break e;if((ze||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,ze?(Ve=o.relatedTarget||o.toElement,ze=oe,Ve=Ve?us(Ve):null,Ve!==null&&(sn=Hi(Ve),Ve!==sn||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(ze=null,Ve=oe),ze!==Ve)){if(Ye=Gm,Ee="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Wm,Ee="onPointerLeave",Z="onPointerEnter",W="pointer"),sn=ze==null?ve:ao(ze),ne=Ve==null?ve:ao(Ve),ve=new Ye(Ee,W+"leave",ze,o,_e),ve.target=sn,ve.relatedTarget=ne,Ee=null,us(_e)===oe&&(Ye=new Ye(Z,W+"enter",Ve,o,_e),Ye.target=ne,Ye.relatedTarget=sn,Ee=Ye),sn=Ee,ze&&Ve)t:{for(Ye=ze,Z=Ve,W=0,ne=Ye;ne;ne=so(ne))W++;for(ne=0,Ee=Z;Ee;Ee=so(Ee))ne++;for(;0<W-ne;)Ye=so(Ye),W--;for(;0<ne-W;)Z=so(Z),ne--;for(;W--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=so(Ye),Z=so(Z)}Ye=null}else Ye=null;ze!==null&&v0(ye,ve,ze,Ye,!1),Ve!==null&&sn!==null&&v0(ye,sn,Ve,Ye,!0)}}e:{if(ve=oe?ao(oe):window,ze=ve.nodeName&&ve.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ve.type==="file")var qe=FE;else if(Km(ve))if(Jm)qe=HE;else{qe=zE;var et=BE}else(ze=ve.nodeName)&&ze.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(qe=kE);if(qe&&(qe=qe(n,oe))){Zm(ye,qe,o,_e);break e}et&&et(n,ve,oe),n==="focusout"&&(et=ve._wrapperState)&&et.controlled&&ve.type==="number"&&En(ve,"number",ve.value)}switch(et=oe?ao(oe):window,n){case"focusin":(Km(et)||et.contentEditable==="true")&&(io=et,Gh=oe,ua=null);break;case"focusout":ua=Gh=io=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,o0(ye,o,_e);break;case"selectionchange":if(WE)break;case"keydown":case"keyup":o0(ye,o,_e)}var tt;if(Bh)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else no?qm(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Xm&&o.locale!=="ko"&&(no||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&no&&(tt=km()):(Nr=_e,Dh="value"in Nr?Nr.value:Nr.textContent,no=!0)),et=Ol(oe,rt),0<et.length&&(rt=new Vm(rt,n,null,o,_e),ye.push({event:rt,listeners:et}),tt?rt.data=tt:(tt=$m(o),tt!==null&&(rt.data=tt)))),(tt=DE?NE(n,o):IE(n,o))&&(oe=Ol(oe,"onBeforeInput"),0<oe.length&&(_e=new Vm("onBeforeInput","beforeinput",null,o,_e),ye.push({event:_e,listeners:oe}),_e.data=tt))}m0(ye,i)})}function da(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ol(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Ft(n,o),g!=null&&c.unshift(da(n,g,d)),g=Ft(n,i),g!=null&&c.push(da(n,g,d))),n=n.return}return c}function so(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function v0(n,i,o,c,d){for(var g=i._reactName,T=[];o!==null&&o!==c;){var O=o,k=O.alternate,oe=O.stateNode;if(k!==null&&k===c)break;O.tag===5&&oe!==null&&(O=oe,d?(k=Ft(o,g),k!=null&&T.unshift(da(o,k,O))):d||(k=Ft(o,g),k!=null&&T.push(da(o,k,O)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var qE=/\r\n?/g,$E=/\u0000|\uFFFD/g;function _0(n){return(typeof n=="string"?n:""+n).replace(qE,`
`).replace($E,"")}function Fl(n,i,o){if(i=_0(i),_0(n)!==i&&o)throw Error(t(425))}function Bl(){}var $h=null,Kh=null;function Zh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jh=typeof setTimeout=="function"?setTimeout:void 0,KE=typeof clearTimeout=="function"?clearTimeout:void 0,S0=typeof Promise=="function"?Promise:void 0,ZE=typeof queueMicrotask=="function"?queueMicrotask:typeof S0<"u"?function(n){return S0.resolve(null).then(n).catch(JE)}:Jh;function JE(n){setTimeout(function(){throw n})}function Qh(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),ia(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);ia(i)}function Ur(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function y0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var oo=Math.random().toString(36).slice(2),Vi="__reactFiber$"+oo,pa="__reactProps$"+oo,cr="__reactContainer$"+oo,ef="__reactEvents$"+oo,QE="__reactListeners$"+oo,eT="__reactHandles$"+oo;function us(n){var i=n[Vi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[cr]||o[Vi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=y0(n);n!==null;){if(o=n[Vi])return o;n=y0(n)}return i}n=o,o=n.parentNode}return null}function ma(n){return n=n[Vi]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ao(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function zl(n){return n[pa]||null}var tf=[],lo=-1;function Or(n){return{current:n}}function Yt(n){0>lo||(n.current=tf[lo],tf[lo]=null,lo--)}function Gt(n,i){lo++,tf[lo]=n.current,n.current=i}var Fr={},bn=Or(Fr),Xn=Or(!1),hs=Fr;function co(n,i){var o=n.type.contextTypes;if(!o)return Fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in o)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Yn(n){return n=n.childContextTypes,n!=null}function kl(){Yt(Xn),Yt(bn)}function x0(n,i,o){if(bn.current!==Fr)throw Error(t(168));Gt(bn,i),Gt(Xn,o)}function M0(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return ce({},o,c)}function Hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,hs=bn.current,Gt(bn,n),Gt(Xn,Xn.current),!0}function E0(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=M0(n,i,hs),c.__reactInternalMemoizedMergedChildContext=n,Yt(Xn),Yt(bn),Gt(bn,n)):Yt(Xn),Gt(Xn,o)}var ur=null,Gl=!1,nf=!1;function T0(n){ur===null?ur=[n]:ur.push(n)}function tT(n){Gl=!0,T0(n)}function Br(){if(!nf&&ur!==null){nf=!0;var n=0,i=St;try{var o=ur;for(St=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}ur=null,Gl=!1}catch(d){throw ur!==null&&(ur=ur.slice(n+1)),El(Jo,Br),d}finally{St=i,nf=!1}}return null}var uo=[],ho=0,Vl=null,Wl=0,ci=[],ui=0,fs=null,hr=1,fr="";function ds(n,i){uo[ho++]=Wl,uo[ho++]=Vl,Vl=n,Wl=i}function w0(n,i,o){ci[ui++]=hr,ci[ui++]=fr,ci[ui++]=fs,fs=n;var c=hr;n=fr;var d=32-Ae(c)-1;c&=~(1<<d),o+=1;var g=32-Ae(i)+d;if(30<g){var T=d-d%5;g=(c&(1<<T)-1).toString(32),c>>=T,d-=T,hr=1<<32-Ae(i)+d|o<<d|c,fr=g+n}else hr=1<<g|o<<d|c,fr=n}function rf(n){n.return!==null&&(ds(n,1),w0(n,1,0))}function sf(n){for(;n===Vl;)Vl=uo[--ho],uo[ho]=null,Wl=uo[--ho],uo[ho]=null;for(;n===fs;)fs=ci[--ui],ci[ui]=null,fr=ci[--ui],ci[ui]=null,hr=ci[--ui],ci[ui]=null}var ni=null,ii=null,qt=!1,Ei=null;function A0(n,i){var o=pi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function R0(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ni=n,ii=Ur(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ni=n,ii=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=fs!==null?{id:hr,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=pi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ni=n,ii=null,!0):!1;default:return!1}}function of(n){return(n.mode&1)!==0&&(n.flags&128)===0}function af(n){if(qt){var i=ii;if(i){var o=i;if(!R0(n,i)){if(of(n))throw Error(t(418));i=Ur(o.nextSibling);var c=ni;i&&R0(n,i)?A0(c,o):(n.flags=n.flags&-4097|2,qt=!1,ni=n)}}else{if(of(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,ni=n}}}function C0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ni=n}function Xl(n){if(n!==ni)return!1;if(!qt)return C0(n),qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Zh(n.type,n.memoizedProps)),i&&(i=ii)){if(of(n))throw P0(),Error(t(418));for(;i;)A0(n,i),i=Ur(i.nextSibling)}if(C0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ii=Ur(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ii=null}}else ii=ni?Ur(n.stateNode.nextSibling):null;return!0}function P0(){for(var n=ii;n;)n=Ur(n.nextSibling)}function fo(){ii=ni=null,qt=!1}function lf(n){Ei===null?Ei=[n]:Ei.push(n)}var nT=L.ReactCurrentBatchConfig;function ga(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var O=d.refs;T===null?delete O[g]:O[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Yl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function b0(n){var i=n._init;return i(n._payload)}function L0(n){function i(Z,W){if(n){var ne=Z.deletions;ne===null?(Z.deletions=[W],Z.flags|=16):ne.push(W)}}function o(Z,W){if(!n)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function c(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function d(Z,W){return Z=Yr(Z,W),Z.index=0,Z.sibling=null,Z}function g(Z,W,ne){return Z.index=ne,n?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<W?(Z.flags|=2,W):ne):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function O(Z,W,ne,Ee){return W===null||W.tag!==6?(W=Qf(ne,Z.mode,Ee),W.return=Z,W):(W=d(W,ne),W.return=Z,W)}function k(Z,W,ne,Ee){var qe=ne.type;return qe===F?_e(Z,W,ne.props.children,Ee,ne.key):W!==null&&(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===J&&b0(qe)===W.type)?(Ee=d(W,ne.props),Ee.ref=ga(Z,W,ne),Ee.return=Z,Ee):(Ee=gc(ne.type,ne.key,ne.props,null,Z.mode,Ee),Ee.ref=ga(Z,W,ne),Ee.return=Z,Ee)}function oe(Z,W,ne,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=ed(ne,Z.mode,Ee),W.return=Z,W):(W=d(W,ne.children||[]),W.return=Z,W)}function _e(Z,W,ne,Ee,qe){return W===null||W.tag!==7?(W=xs(ne,Z.mode,Ee,qe),W.return=Z,W):(W=d(W,ne),W.return=Z,W)}function ye(Z,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Qf(""+W,Z.mode,ne),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return ne=gc(W.type,W.key,W.props,null,Z.mode,ne),ne.ref=ga(Z,null,W),ne.return=Z,ne;case b:return W=ed(W,Z.mode,ne),W.return=Z,W;case J:var Ee=W._init;return ye(Z,Ee(W._payload),ne)}if(V(W)||le(W))return W=xs(W,Z.mode,ne,null),W.return=Z,W;Yl(Z,W)}return null}function ve(Z,W,ne,Ee){var qe=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return qe!==null?null:O(Z,W,""+ne,Ee);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:return ne.key===qe?k(Z,W,ne,Ee):null;case b:return ne.key===qe?oe(Z,W,ne,Ee):null;case J:return qe=ne._init,ve(Z,W,qe(ne._payload),Ee)}if(V(ne)||le(ne))return qe!==null?null:_e(Z,W,ne,Ee,null);Yl(Z,ne)}return null}function ze(Z,W,ne,Ee,qe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(ne)||null,O(W,Z,""+Ee,qe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return Z=Z.get(Ee.key===null?ne:Ee.key)||null,k(W,Z,Ee,qe);case b:return Z=Z.get(Ee.key===null?ne:Ee.key)||null,oe(W,Z,Ee,qe);case J:var et=Ee._init;return ze(Z,W,ne,et(Ee._payload),qe)}if(V(Ee)||le(Ee))return Z=Z.get(ne)||null,_e(W,Z,Ee,qe,null);Yl(W,Ee)}return null}function Ve(Z,W,ne,Ee){for(var qe=null,et=null,tt=W,rt=W=0,_n=null;tt!==null&&rt<ne.length;rt++){tt.index>rt?(_n=tt,tt=null):_n=tt.sibling;var Ct=ve(Z,tt,ne[rt],Ee);if(Ct===null){tt===null&&(tt=_n);break}n&&tt&&Ct.alternate===null&&i(Z,tt),W=g(Ct,W,rt),et===null?qe=Ct:et.sibling=Ct,et=Ct,tt=_n}if(rt===ne.length)return o(Z,tt),qt&&ds(Z,rt),qe;if(tt===null){for(;rt<ne.length;rt++)tt=ye(Z,ne[rt],Ee),tt!==null&&(W=g(tt,W,rt),et===null?qe=tt:et.sibling=tt,et=tt);return qt&&ds(Z,rt),qe}for(tt=c(Z,tt);rt<ne.length;rt++)_n=ze(tt,Z,rt,ne[rt],Ee),_n!==null&&(n&&_n.alternate!==null&&tt.delete(_n.key===null?rt:_n.key),W=g(_n,W,rt),et===null?qe=_n:et.sibling=_n,et=_n);return n&&tt.forEach(function(jr){return i(Z,jr)}),qt&&ds(Z,rt),qe}function Ye(Z,W,ne,Ee){var qe=le(ne);if(typeof qe!="function")throw Error(t(150));if(ne=qe.call(ne),ne==null)throw Error(t(151));for(var et=qe=null,tt=W,rt=W=0,_n=null,Ct=ne.next();tt!==null&&!Ct.done;rt++,Ct=ne.next()){tt.index>rt?(_n=tt,tt=null):_n=tt.sibling;var jr=ve(Z,tt,Ct.value,Ee);if(jr===null){tt===null&&(tt=_n);break}n&&tt&&jr.alternate===null&&i(Z,tt),W=g(jr,W,rt),et===null?qe=jr:et.sibling=jr,et=jr,tt=_n}if(Ct.done)return o(Z,tt),qt&&ds(Z,rt),qe;if(tt===null){for(;!Ct.done;rt++,Ct=ne.next())Ct=ye(Z,Ct.value,Ee),Ct!==null&&(W=g(Ct,W,rt),et===null?qe=Ct:et.sibling=Ct,et=Ct);return qt&&ds(Z,rt),qe}for(tt=c(Z,tt);!Ct.done;rt++,Ct=ne.next())Ct=ze(tt,Z,rt,Ct.value,Ee),Ct!==null&&(n&&Ct.alternate!==null&&tt.delete(Ct.key===null?rt:Ct.key),W=g(Ct,W,rt),et===null?qe=Ct:et.sibling=Ct,et=Ct);return n&&tt.forEach(function(UT){return i(Z,UT)}),qt&&ds(Z,rt),qe}function sn(Z,W,ne,Ee){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:e:{for(var qe=ne.key,et=W;et!==null;){if(et.key===qe){if(qe=ne.type,qe===F){if(et.tag===7){o(Z,et.sibling),W=d(et,ne.props.children),W.return=Z,Z=W;break e}}else if(et.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===J&&b0(qe)===et.type){o(Z,et.sibling),W=d(et,ne.props),W.ref=ga(Z,et,ne),W.return=Z,Z=W;break e}o(Z,et);break}else i(Z,et);et=et.sibling}ne.type===F?(W=xs(ne.props.children,Z.mode,Ee,ne.key),W.return=Z,Z=W):(Ee=gc(ne.type,ne.key,ne.props,null,Z.mode,Ee),Ee.ref=ga(Z,W,ne),Ee.return=Z,Z=Ee)}return T(Z);case b:e:{for(et=ne.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){o(Z,W.sibling),W=d(W,ne.children||[]),W.return=Z,Z=W;break e}else{o(Z,W);break}else i(Z,W);W=W.sibling}W=ed(ne,Z.mode,Ee),W.return=Z,Z=W}return T(Z);case J:return et=ne._init,sn(Z,W,et(ne._payload),Ee)}if(V(ne))return Ve(Z,W,ne,Ee);if(le(ne))return Ye(Z,W,ne,Ee);Yl(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(o(Z,W.sibling),W=d(W,ne),W.return=Z,Z=W):(o(Z,W),W=Qf(ne,Z.mode,Ee),W.return=Z,Z=W),T(Z)):o(Z,W)}return sn}var po=L0(!0),D0=L0(!1),jl=Or(null),ql=null,mo=null,cf=null;function uf(){cf=mo=ql=null}function hf(n){var i=jl.current;Yt(jl),n._currentValue=i}function ff(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function go(n,i){ql=n,cf=mo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(jn=!0),n.firstContext=null)}function hi(n){var i=n._currentValue;if(cf!==n)if(n={context:n,memoizedValue:i,next:null},mo===null){if(ql===null)throw Error(t(308));mo=n,ql.dependencies={lanes:0,firstContext:n}}else mo=mo.next=n;return i}var ps=null;function df(n){ps===null?ps=[n]:ps.push(n)}function N0(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,df(i)):(o.next=d.next,d.next=o),i.interleaved=o,dr(n,c)}function dr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var zr=!1;function pf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I0(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function kr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,dr(n,o)}return d=c.interleaved,d===null?(i.next=i,df(c)):(i.next=d.next,d.next=i),c.interleaved=i,dr(n,o)}function $l(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Wn(n,o)}}function U0(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?d=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?d=g=i:g=g.next=i}else d=g=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Kl(n,i,o,c){var d=n.updateQueue;zr=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var k=O,oe=k.next;k.next=null,T===null?g=oe:T.next=oe,T=k;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,O=_e.lastBaseUpdate,O!==T&&(O===null?_e.firstBaseUpdate=oe:O.next=oe,_e.lastBaseUpdate=k))}if(g!==null){var ye=d.baseState;T=0,_e=oe=k=null,O=g;do{var ve=O.lane,ze=O.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:ze,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ve=n,Ye=O;switch(ve=i,ze=o,Ye.tag){case 1:if(Ve=Ye.payload,typeof Ve=="function"){ye=Ve.call(ze,ye,ve);break e}ye=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ye.payload,ve=typeof Ve=="function"?Ve.call(ze,ye,ve):Ve,ve==null)break e;ye=ce({},ye,ve);break e;case 2:zr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[O]:ve.push(O))}else ze={eventTime:ze,lane:ve,tag:O.tag,payload:O.payload,callback:O.callback,next:null},_e===null?(oe=_e=ze,k=ye):_e=_e.next=ze,T|=ve;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;ve=O,O=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(_e===null&&(k=ye),d.baseState=k,d.firstBaseUpdate=oe,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);vs|=T,n.lanes=T,n.memoizedState=ye}}function O0(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var va={},Wi=Or(va),_a=Or(va),Sa=Or(va);function ms(n){if(n===va)throw Error(t(174));return n}function mf(n,i){switch(Gt(Sa,i),Gt(_a,n),Gt(Wi,va),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Yt(Wi),Gt(Wi,i)}function vo(){Yt(Wi),Yt(_a),Yt(Sa)}function F0(n){ms(Sa.current);var i=ms(Wi.current),o=E(i,n.type);i!==o&&(Gt(_a,n),Gt(Wi,o))}function gf(n){_a.current===n&&(Yt(Wi),Yt(_a))}var Jt=Or(0);function Zl(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var vf=[];function _f(){for(var n=0;n<vf.length;n++)vf[n]._workInProgressVersionPrimary=null;vf.length=0}var Jl=L.ReactCurrentDispatcher,Sf=L.ReactCurrentBatchConfig,gs=0,Qt=null,dn=null,gn=null,Ql=!1,ya=!1,xa=0,iT=0;function Ln(){throw Error(t(321))}function yf(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Mi(n[o],i[o]))return!1;return!0}function xf(n,i,o,c,d,g){if(gs=g,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Jl.current=n===null||n.memoizedState===null?aT:lT,n=o(c,d),ya){g=0;do{if(ya=!1,xa=0,25<=g)throw Error(t(301));g+=1,gn=dn=null,i.updateQueue=null,Jl.current=cT,n=o(c,d)}while(ya)}if(Jl.current=nc,i=dn!==null&&dn.next!==null,gs=0,gn=dn=Qt=null,Ql=!1,i)throw Error(t(300));return n}function Mf(){var n=xa!==0;return xa=0,n}function Xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Qt.memoizedState=gn=n:gn=gn.next=n,gn}function fi(){if(dn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=dn.next;var i=gn===null?Qt.memoizedState:gn.next;if(i!==null)gn=i,dn=n;else{if(n===null)throw Error(t(310));dn=n,n={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},gn===null?Qt.memoizedState=gn=n:gn=gn.next=n}return gn}function Ma(n,i){return typeof i=="function"?i(n):i}function Ef(n){var i=fi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=dn,d=c.baseQueue,g=o.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}c.baseQueue=d=g,o.pending=null}if(d!==null){g=d.next,c=c.baseState;var O=T=null,k=null,oe=g;do{var _e=oe.lane;if((gs&_e)===_e)k!==null&&(k=k.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var ye={lane:_e,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};k===null?(O=k=ye,T=c):k=k.next=ye,Qt.lanes|=_e,vs|=_e}oe=oe.next}while(oe!==null&&oe!==g);k===null?T=c:k.next=O,Mi(c,i.memoizedState)||(jn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=k,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do g=d.lane,Qt.lanes|=g,vs|=g,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Tf(n){var i=fi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,g=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do g=n(g,T.action),T=T.next;while(T!==d);Mi(g,i.memoizedState)||(jn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function B0(){}function z0(n,i){var o=Qt,c=fi(),d=i(),g=!Mi(c.memoizedState,d);if(g&&(c.memoizedState=d,jn=!0),c=c.queue,wf(G0.bind(null,o,c,n),[n]),c.getSnapshot!==i||g||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,Ea(9,H0.bind(null,o,c,d,i),void 0,null),vn===null)throw Error(t(349));(gs&30)!==0||k0(o,i,d)}return d}function k0(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function H0(n,i,o,c){i.value=o,i.getSnapshot=c,V0(i)&&W0(n)}function G0(n,i,o){return o(function(){V0(i)&&W0(n)})}function V0(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Mi(n,o)}catch{return!0}}function W0(n){var i=dr(n,1);i!==null&&Ri(i,n,1,-1)}function X0(n){var i=Xi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},i.queue=n,n=n.dispatch=oT.bind(null,Qt,n),[i.memoizedState,n]}function Ea(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Y0(){return fi().memoizedState}function ec(n,i,o,c){var d=Xi();Qt.flags|=n,d.memoizedState=Ea(1|i,o,void 0,c===void 0?null:c)}function tc(n,i,o,c){var d=fi();c=c===void 0?null:c;var g=void 0;if(dn!==null){var T=dn.memoizedState;if(g=T.destroy,c!==null&&yf(c,T.deps)){d.memoizedState=Ea(i,o,g,c);return}}Qt.flags|=n,d.memoizedState=Ea(1|i,o,g,c)}function j0(n,i){return ec(8390656,8,n,i)}function wf(n,i){return tc(2048,8,n,i)}function q0(n,i){return tc(4,2,n,i)}function $0(n,i){return tc(4,4,n,i)}function K0(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Z0(n,i,o){return o=o!=null?o.concat([n]):null,tc(4,4,K0.bind(null,i,n),o)}function Af(){}function J0(n,i){var o=fi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&yf(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Q0(n,i){var o=fi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&yf(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function eg(n,i,o){return(gs&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=o):(Mi(o,i)||(o=Be(),Qt.lanes|=o,vs|=o,n.baseState=!0),i)}function rT(n,i){var o=St;St=o!==0&&4>o?o:4,n(!0);var c=Sf.transition;Sf.transition={};try{n(!1),i()}finally{St=o,Sf.transition=c}}function tg(){return fi().memoizedState}function sT(n,i,o){var c=Wr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},ng(n))ig(i,o);else if(o=N0(n,i,o,c),o!==null){var d=Bn();Ri(o,n,c,d),rg(o,i,c)}}function oT(n,i,o){var c=Wr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(ng(n))ig(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,O=g(T,o);if(d.hasEagerState=!0,d.eagerState=O,Mi(O,T)){var k=i.interleaved;k===null?(d.next=d,df(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=N0(n,i,d,c),o!==null&&(d=Bn(),Ri(o,n,c,d),rg(o,i,c))}}function ng(n){var i=n.alternate;return n===Qt||i!==null&&i===Qt}function ig(n,i){ya=Ql=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function rg(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Wn(n,o)}}var nc={readContext:hi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},aT={readContext:hi,useCallback:function(n,i){return Xi().memoizedState=[n,i===void 0?null:i],n},useContext:hi,useEffect:j0,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,ec(4194308,4,K0.bind(null,i,n),o)},useLayoutEffect:function(n,i){return ec(4194308,4,n,i)},useInsertionEffect:function(n,i){return ec(4,2,n,i)},useMemo:function(n,i){var o=Xi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Xi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=sT.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var i=Xi();return n={current:n},i.memoizedState=n},useState:X0,useDebugValue:Af,useDeferredValue:function(n){return Xi().memoizedState=n},useTransition:function(){var n=X0(!1),i=n[0];return n=rT.bind(null,n[1]),Xi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Qt,d=Xi();if(qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),vn===null)throw Error(t(349));(gs&30)!==0||k0(c,i,o)}d.memoizedState=o;var g={value:o,getSnapshot:i};return d.queue=g,j0(G0.bind(null,c,g,n),[n]),c.flags|=2048,Ea(9,H0.bind(null,c,g,o,i),void 0,null),o},useId:function(){var n=Xi(),i=vn.identifierPrefix;if(qt){var o=fr,c=hr;o=(c&~(1<<32-Ae(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=xa++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=iT++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},lT={readContext:hi,useCallback:J0,useContext:hi,useEffect:wf,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:$0,useMemo:Q0,useReducer:Ef,useRef:Y0,useState:function(){return Ef(Ma)},useDebugValue:Af,useDeferredValue:function(n){var i=fi();return eg(i,dn.memoizedState,n)},useTransition:function(){var n=Ef(Ma)[0],i=fi().memoizedState;return[n,i]},useMutableSource:B0,useSyncExternalStore:z0,useId:tg,unstable_isNewReconciler:!1},cT={readContext:hi,useCallback:J0,useContext:hi,useEffect:wf,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:$0,useMemo:Q0,useReducer:Tf,useRef:Y0,useState:function(){return Tf(Ma)},useDebugValue:Af,useDeferredValue:function(n){var i=fi();return dn===null?i.memoizedState=n:eg(i,dn.memoizedState,n)},useTransition:function(){var n=Tf(Ma)[0],i=fi().memoizedState;return[n,i]},useMutableSource:B0,useSyncExternalStore:z0,useId:tg,unstable_isNewReconciler:!1};function Ti(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Rf(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ce({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ic={isMounted:function(n){return(n=n._reactInternals)?Hi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Bn(),d=Wr(n),g=pr(c,d);g.payload=i,o!=null&&(g.callback=o),i=kr(n,g,d),i!==null&&(Ri(i,n,d,c),$l(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Bn(),d=Wr(n),g=pr(c,d);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=kr(n,g,d),i!==null&&(Ri(i,n,d,c),$l(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Bn(),c=Wr(n),d=pr(o,c);d.tag=2,i!=null&&(d.callback=i),i=kr(n,d,c),i!==null&&(Ri(i,n,c,o),$l(i,n,c))}};function sg(n,i,o,c,d,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!ca(o,c)||!ca(d,g):!0}function og(n,i,o){var c=!1,d=Fr,g=i.contextType;return typeof g=="object"&&g!==null?g=hi(g):(d=Yn(i)?hs:bn.current,c=i.contextTypes,g=(c=c!=null)?co(n,d):Fr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ic,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function ag(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&ic.enqueueReplaceState(i,i.state,null)}function Cf(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},pf(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=hi(g):(g=Yn(i)?hs:bn.current,d.context=co(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Rf(n,i,g,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ic.enqueueReplaceState(d,d.state,null),Kl(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function _o(n,i){try{var o="",c=i;do o+=De(c),c=c.return;while(c);var d=o}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Pf(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function bf(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var uT=typeof WeakMap=="function"?WeakMap:Map;function lg(n,i,o){o=pr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){uc||(uc=!0,Xf=c),bf(n,i)},o}function cg(n,i,o){o=pr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){bf(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){bf(n,i),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function ug(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new uT;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=TT.bind(null,n,i,o),i.then(n,n))}function hg(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function fg(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=pr(-1,1),i.tag=2,kr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var hT=L.ReactCurrentOwner,jn=!1;function Fn(n,i,o,c){i.child=n===null?D0(i,null,o,c):po(i,n.child,o,c)}function dg(n,i,o,c,d){o=o.render;var g=i.ref;return go(i,d),c=xf(n,i,o,c,g,d),o=Mf(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(qt&&o&&rf(i),i.flags|=1,Fn(n,i,c,d),i.child)}function pg(n,i,o,c,d){if(n===null){var g=o.type;return typeof g=="function"&&!Jf(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,mg(n,i,g,c,d)):(n=gc(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:ca,o(T,c)&&n.ref===i.ref)return mr(n,i,d)}return i.flags|=1,n=Yr(g,c),n.ref=i.ref,n.return=i,i.child=n}function mg(n,i,o,c,d){if(n!==null){var g=n.memoizedProps;if(ca(g,c)&&n.ref===i.ref)if(jn=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(jn=!0);else return i.lanes=n.lanes,mr(n,i,d)}return Lf(n,i,o,c,d)}function gg(n,i,o){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(yo,ri),ri|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(yo,ri),ri|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Gt(yo,ri),ri|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,Gt(yo,ri),ri|=c;return Fn(n,i,d,o),i.child}function vg(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Lf(n,i,o,c,d){var g=Yn(o)?hs:bn.current;return g=co(i,g),go(i,d),o=xf(n,i,o,c,g,d),c=Mf(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(qt&&c&&rf(i),i.flags|=1,Fn(n,i,o,d),i.child)}function _g(n,i,o,c,d){if(Yn(o)){var g=!0;Hl(i)}else g=!1;if(go(i,d),i.stateNode===null)sc(n,i),og(i,o,c),Cf(i,o,c,d),c=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var k=T.context,oe=o.contextType;typeof oe=="object"&&oe!==null?oe=hi(oe):(oe=Yn(o)?hs:bn.current,oe=co(i,oe));var _e=o.getDerivedStateFromProps,ye=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||k!==oe)&&ag(i,T,c,oe),zr=!1;var ve=i.memoizedState;T.state=ve,Kl(i,c,T,d),k=i.memoizedState,O!==c||ve!==k||Xn.current||zr?(typeof _e=="function"&&(Rf(i,o,_e,c),k=i.memoizedState),(O=zr||sg(i,o,O,c,ve,k,oe))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),T.props=c,T.state=k,T.context=oe,c=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,I0(n,i),O=i.memoizedProps,oe=i.type===i.elementType?O:Ti(i.type,O),T.props=oe,ye=i.pendingProps,ve=T.context,k=o.contextType,typeof k=="object"&&k!==null?k=hi(k):(k=Yn(o)?hs:bn.current,k=co(i,k));var ze=o.getDerivedStateFromProps;(_e=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==ye||ve!==k)&&ag(i,T,c,k),zr=!1,ve=i.memoizedState,T.state=ve,Kl(i,c,T,d);var Ve=i.memoizedState;O!==ye||ve!==Ve||Xn.current||zr?(typeof ze=="function"&&(Rf(i,o,ze,c),Ve=i.memoizedState),(oe=zr||sg(i,o,oe,c,ve,Ve,k)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ve,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ve,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ve),T.props=c,T.state=Ve,T.context=k,c=oe):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return Df(n,i,o,c,g,d)}function Df(n,i,o,c,d,g){vg(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&E0(i,o,!1),mr(n,i,g);c=i.stateNode,hT.current=i;var O=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=po(i,n.child,null,g),i.child=po(i,null,O,g)):Fn(n,i,O,g),i.memoizedState=c.state,d&&E0(i,o,!0),i.child}function Sg(n){var i=n.stateNode;i.pendingContext?x0(n,i.pendingContext,i.pendingContext!==i.context):i.context&&x0(n,i.context,!1),mf(n,i.containerInfo)}function yg(n,i,o,c,d){return fo(),lf(d),i.flags|=256,Fn(n,i,o,c),i.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function If(n){return{baseLanes:n,cachePool:null,transitions:null}}function xg(n,i,o){var c=i.pendingProps,d=Jt.current,g=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(d&2)!==0),O?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Gt(Jt,d&1),n===null)return af(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=i.mode,g=i.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=vc(T,c,0,null),n=xs(n,c,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=If(o),i.memoizedState=Nf,n):Uf(i,T));if(d=n.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return fT(n,i,T,c,O,d,o);if(g){g=c.fallback,T=i.mode,d=n.child,O=d.sibling;var k={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=Yr(d,k),c.subtreeFlags=d.subtreeFlags&14680064),O!==null?g=Yr(O,g):(g=xs(g,T,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,T=n.child.memoizedState,T=T===null?If(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~o,i.memoizedState=Nf,c}return g=n.child,n=g.sibling,c=Yr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Uf(n,i){return i=vc({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rc(n,i,o,c){return c!==null&&lf(c),po(i,n.child,null,o),n=Uf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function fT(n,i,o,c,d,g,T){if(o)return i.flags&256?(i.flags&=-257,c=Pf(Error(t(422))),rc(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=vc({mode:"visible",children:c.children},d,0,null),g=xs(g,d,T,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&po(i,n.child,null,T),i.child.memoizedState=If(T),i.memoizedState=Nf,g);if((i.mode&1)===0)return rc(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var O=c.dgst;return c=O,g=Error(t(419)),c=Pf(g,c,void 0),rc(n,i,T,c)}if(O=(T&n.childLanes)!==0,jn||O){if(c=vn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,dr(n,d),Ri(c,n,d,-1))}return Zf(),c=Pf(Error(t(421))),rc(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=wT.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,ii=Ur(d.nextSibling),ni=i,qt=!0,Ei=null,n!==null&&(ci[ui++]=hr,ci[ui++]=fr,ci[ui++]=fs,hr=n.id,fr=n.overflow,fs=i),i=Uf(i,c.children),i.flags|=4096,i)}function Mg(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ff(n.return,i,o)}function Of(n,i,o,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=d)}function Eg(n,i,o){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Fn(n,i,c.children,o),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mg(n,o,i);else if(n.tag===19)Mg(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Zl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Of(i,!1,d,o,g);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Zl(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Of(i,!0,o,null,g);break;case"together":Of(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sc(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),vs|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Yr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Yr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function dT(n,i,o){switch(i.tag){case 3:Sg(i),fo();break;case 5:F0(i);break;case 1:Yn(i.type)&&Hl(i);break;case 4:mf(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Gt(jl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Jt,Jt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?xg(n,i,o):(Gt(Jt,Jt.current&1),n=mr(n,i,o),n!==null?n.sibling:null);Gt(Jt,Jt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Eg(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Gt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,gg(n,i,o)}return mr(n,i,o)}var Tg,Ff,wg,Ag;Tg=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ff=function(){},wg=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ms(Wi.current);var g=null;switch(o){case"input":d=At(n,d),c=At(n,c),g=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),g=[];break;case"textarea":d=mt(n,d),c=mt(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Bl)}Fe(o,c);var T;o=null;for(oe in d)if(!c.hasOwnProperty(oe)&&d.hasOwnProperty(oe)&&d[oe]!=null)if(oe==="style"){var O=d[oe];for(T in O)O.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?g||(g=[]):(g=g||[]).push(oe,null));for(oe in c){var k=c[oe];if(O=d!=null?d[oe]:void 0,c.hasOwnProperty(oe)&&k!==O&&(k!=null||O!=null))if(oe==="style")if(O){for(T in O)!O.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in k)k.hasOwnProperty(T)&&O[T]!==k[T]&&(o||(o={}),o[T]=k[T])}else o||(g||(g=[]),g.push(oe,o)),o=k;else oe==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,O=O?O.__html:void 0,k!=null&&O!==k&&(g=g||[]).push(oe,k)):oe==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(oe,""+k):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(k!=null&&oe==="onScroll"&&Xt("scroll",n),g||O===k||(g=[])):(g=g||[]).push(oe,k))}o&&(g=g||[]).push("style",o);var oe=g;(i.updateQueue=oe)&&(i.flags|=4)}},Ag=function(n,i,o,c){o!==c&&(i.flags|=4)};function Ta(n,i){if(!qt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function pT(n,i,o){var c=i.pendingProps;switch(sf(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(i),null;case 1:return Yn(i.type)&&kl(),Dn(i),null;case 3:return c=i.stateNode,vo(),Yt(Xn),Yt(bn),_f(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Xl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ei!==null&&(qf(Ei),Ei=null))),Ff(n,i),Dn(i),null;case 5:gf(i);var d=ms(Sa.current);if(o=i.type,n!==null&&i.stateNode!=null)wg(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Dn(i),null}if(n=ms(Wi.current),Xl(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[Vi]=i,c[pa]=g,n=(i.mode&1)!==0,o){case"dialog":Xt("cancel",c),Xt("close",c);break;case"iframe":case"object":case"embed":Xt("load",c);break;case"video":case"audio":for(d=0;d<ha.length;d++)Xt(ha[d],c);break;case"source":Xt("error",c);break;case"img":case"image":case"link":Xt("error",c),Xt("load",c);break;case"details":Xt("toggle",c);break;case"input":Ot(c,g),Xt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Xt("invalid",c);break;case"textarea":Lt(c,g),Xt("invalid",c)}Fe(o,g),d=null;for(var T in g)if(g.hasOwnProperty(T)){var O=g[T];T==="children"?typeof O=="string"?c.textContent!==O&&(g.suppressHydrationWarning!==!0&&Fl(c.textContent,O,n),d=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&Fl(c.textContent,O,n),d=["children",""+O]):a.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Xt("scroll",c)}switch(o){case"input":Je(c),zt(c,g,!0);break;case"textarea":Je(c),Vt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Bl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(o,{is:c.is}):(n=T.createElement(o),o==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,o),n[Vi]=i,n[pa]=c,Tg(n,i,!1,!1),i.stateNode=n;e:{switch(T=we(o,c),o){case"dialog":Xt("cancel",n),Xt("close",n),d=c;break;case"iframe":case"object":case"embed":Xt("load",n),d=c;break;case"video":case"audio":for(d=0;d<ha.length;d++)Xt(ha[d],n);d=c;break;case"source":Xt("error",n),d=c;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),d=c;break;case"details":Xt("toggle",n),d=c;break;case"input":Ot(n,c),d=At(n,c),Xt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),Xt("invalid",n);break;case"textarea":Lt(n,c),d=mt(n,c),Xt("invalid",n);break;default:d=c}Fe(o,d),O=d;for(g in O)if(O.hasOwnProperty(g)){var k=O[g];g==="style"?de(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&fe(n,k)):g==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&me(n,k):typeof k=="number"&&me(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Xt("scroll",n):k!=null&&N(n,g,k,T))}switch(o){case"input":Je(n),zt(n,c,!1);break;case"textarea":Je(n),Vt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?kt(n,!!c.multiple,g,!1):c.defaultValue!=null&&kt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Bl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dn(i),null;case 6:if(n&&i.stateNode!=null)Ag(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=ms(Sa.current),ms(Wi.current),Xl(i)){if(c=i.stateNode,o=i.memoizedProps,c[Vi]=i,(g=c.nodeValue!==o)&&(n=ni,n!==null))switch(n.tag){case 3:Fl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Vi]=i,i.stateNode=c}return Dn(i),null;case 13:if(Yt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&ii!==null&&(i.mode&1)!==0&&(i.flags&128)===0)P0(),fo(),i.flags|=98560,g=!1;else if(g=Xl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Vi]=i}else fo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dn(i),g=!1}else Ei!==null&&(qf(Ei),Ei=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?pn===0&&(pn=3):Zf())),i.updateQueue!==null&&(i.flags|=4),Dn(i),null);case 4:return vo(),Ff(n,i),n===null&&fa(i.stateNode.containerInfo),Dn(i),null;case 10:return hf(i.type._context),Dn(i),null;case 17:return Yn(i.type)&&kl(),Dn(i),null;case 19:if(Yt(Jt),g=i.memoizedState,g===null)return Dn(i),null;if(c=(i.flags&128)!==0,T=g.rendering,T===null)if(c)Ta(g,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Zl(n),T!==null){for(i.flags|=128,Ta(g,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Gt(Jt,Jt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Zt()>xo&&(i.flags|=128,c=!0,Ta(g,!1),i.lanes=4194304)}else{if(!c)if(n=Zl(T),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ta(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!qt)return Dn(i),null}else 2*Zt()-g.renderingStartTime>xo&&o!==1073741824&&(i.flags|=128,c=!0,Ta(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(o=g.last,o!==null?o.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Zt(),i.sibling=null,o=Jt.current,Gt(Jt,c?o&1|2:o&1),i):(Dn(i),null);case 22:case 23:return Kf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ri&1073741824)!==0&&(Dn(i),i.subtreeFlags&6&&(i.flags|=8192)):Dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function mT(n,i){switch(sf(i),i.tag){case 1:return Yn(i.type)&&kl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return vo(),Yt(Xn),Yt(bn),_f(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return gf(i),null;case 13:if(Yt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));fo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Jt),null;case 4:return vo(),null;case 10:return hf(i.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var oc=!1,Nn=!1,gT=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function So(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){rn(n,i,c)}else o.current=null}function Bf(n,i,o){try{o()}catch(c){rn(n,i,c)}}var Rg=!1;function vT(n,i){if($h=Al,n=s0(),Hh(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,O=-1,k=-1,oe=0,_e=0,ye=n,ve=null;t:for(;;){for(var ze;ye!==o||d!==0&&ye.nodeType!==3||(O=T+d),ye!==g||c!==0&&ye.nodeType!==3||(k=T+c),ye.nodeType===3&&(T+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)ve=ye,ye=ze;for(;;){if(ye===n)break t;if(ve===o&&++oe===d&&(O=T),ve===g&&++_e===c&&(k=T),(ze=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=ze}o=O===-1||k===-1?null:{start:O,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Kh={focusedElem:n,selectionRange:o},Al=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ye=Ve.memoizedProps,sn=Ve.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:Ti(i.type,Ye),sn);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){rn(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return Ve=Rg,Rg=!1,Ve}function wa(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Bf(i,o,g)}d=d.next}while(d!==c)}}function ac(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function zf(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Cg(n){var i=n.alternate;i!==null&&(n.alternate=null,Cg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Vi],delete i[pa],delete i[ef],delete i[QE],delete i[eT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pg(n){return n.tag===5||n.tag===3||n.tag===4}function bg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kf(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Bl));else if(c!==4&&(n=n.child,n!==null))for(kf(n,i,o),n=n.sibling;n!==null;)kf(n,i,o),n=n.sibling}function Hf(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Hf(n,i,o),n=n.sibling;n!==null;)Hf(n,i,o),n=n.sibling}var wn=null,wi=!1;function Hr(n,i,o){for(o=o.child;o!==null;)Lg(n,i,o),o=o.sibling}function Lg(n,i,o){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Q,o)}catch{}switch(o.tag){case 5:Nn||So(o,i);case 6:var c=wn,d=wi;wn=null,Hr(n,i,o),wn=c,wi=d,wn!==null&&(wi?(n=wn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):wn.removeChild(o.stateNode));break;case 18:wn!==null&&(wi?(n=wn,o=o.stateNode,n.nodeType===8?Qh(n.parentNode,o):n.nodeType===1&&Qh(n,o),ia(n)):Qh(wn,o.stateNode));break;case 4:c=wn,d=wi,wn=o.stateNode.containerInfo,wi=!0,Hr(n,i,o),wn=c,wi=d;break;case 0:case 11:case 14:case 15:if(!Nn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&Bf(o,i,T),d=d.next}while(d!==c)}Hr(n,i,o);break;case 1:if(!Nn&&(So(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(O){rn(o,i,O)}Hr(n,i,o);break;case 21:Hr(n,i,o);break;case 22:o.mode&1?(Nn=(c=Nn)||o.memoizedState!==null,Hr(n,i,o),Nn=c):Hr(n,i,o);break;default:Hr(n,i,o)}}function Dg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new gT),i.forEach(function(c){var d=AT.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Ai(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var g=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:wn=O.stateNode,wi=!1;break e;case 3:wn=O.stateNode.containerInfo,wi=!0;break e;case 4:wn=O.stateNode.containerInfo,wi=!0;break e}O=O.return}if(wn===null)throw Error(t(160));Lg(g,T,d),wn=null,wi=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(oe){rn(d,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ng(i,n),i=i.sibling}function Ng(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ai(i,n),Yi(n),c&4){try{wa(3,n,n.return),ac(3,n)}catch(Ye){rn(n,n.return,Ye)}try{wa(5,n,n.return)}catch(Ye){rn(n,n.return,Ye)}}break;case 1:Ai(i,n),Yi(n),c&512&&o!==null&&So(o,o.return);break;case 5:if(Ai(i,n),Yi(n),c&512&&o!==null&&So(o,o.return),n.flags&32){var d=n.stateNode;try{me(d,"")}catch(Ye){rn(n,n.return,Ye)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,T=o!==null?o.memoizedProps:g,O=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&pt(d,g),we(O,T);var oe=we(O,g);for(T=0;T<k.length;T+=2){var _e=k[T],ye=k[T+1];_e==="style"?de(d,ye):_e==="dangerouslySetInnerHTML"?fe(d,ye):_e==="children"?me(d,ye):N(d,_e,ye,oe)}switch(O){case"input":Kt(d,g);break;case"textarea":be(d,g);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var ze=g.value;ze!=null?kt(d,!!g.multiple,ze,!1):ve!==!!g.multiple&&(g.defaultValue!=null?kt(d,!!g.multiple,g.defaultValue,!0):kt(d,!!g.multiple,g.multiple?[]:"",!1))}d[pa]=g}catch(Ye){rn(n,n.return,Ye)}}break;case 6:if(Ai(i,n),Yi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(Ye){rn(n,n.return,Ye)}}break;case 3:if(Ai(i,n),Yi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ia(i.containerInfo)}catch(Ye){rn(n,n.return,Ye)}break;case 4:Ai(i,n),Yi(n);break;case 13:Ai(i,n),Yi(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Wf=Zt())),c&4&&Dg(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(Nn=(oe=Nn)||_e,Ai(i,n),Nn=oe):Ai(i,n),Yi(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!_e&&(n.mode&1)!==0)for(Ge=n,_e=n.child;_e!==null;){for(ye=Ge=_e;Ge!==null;){switch(ve=Ge,ze=ve.child,ve.tag){case 0:case 11:case 14:case 15:wa(4,ve,ve.return);break;case 1:So(ve,ve.return);var Ve=ve.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=ve,o=ve.return;try{i=c,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ye){rn(c,o,Ye)}}break;case 5:So(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Og(ye);continue}}ze!==null?(ze.return=ve,Ge=ze):Og(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{d=ye.stateNode,oe?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=ye.stateNode,k=ye.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,O.style.display=ue("display",T))}catch(Ye){rn(n,n.return,Ye)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=oe?"":ye.memoizedProps}catch(Ye){rn(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Ai(i,n),Yi(n),c&4&&Dg(n);break;case 21:break;default:Ai(i,n),Yi(n)}}function Yi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Pg(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(me(d,""),c.flags&=-33);var g=bg(n);Hf(n,g,d);break;case 3:case 4:var T=c.stateNode.containerInfo,O=bg(n);kf(n,O,T);break;default:throw Error(t(161))}}catch(k){rn(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function _T(n,i,o){Ge=n,Ig(n)}function Ig(n,i,o){for(var c=(n.mode&1)!==0;Ge!==null;){var d=Ge,g=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||oc;if(!T){var O=d.alternate,k=O!==null&&O.memoizedState!==null||Nn;O=oc;var oe=Nn;if(oc=T,(Nn=k)&&!oe)for(Ge=d;Ge!==null;)T=Ge,k=T.child,T.tag===22&&T.memoizedState!==null?Fg(d):k!==null?(k.return=T,Ge=k):Fg(d);for(;g!==null;)Ge=g,Ig(g),g=g.sibling;Ge=d,oc=O,Nn=oe}Ug(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,Ge=g):Ug(n)}}function Ug(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Nn||ac(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Nn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ti(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&O0(i,g,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}O0(i,T,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var _e=oe.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&ia(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Nn||i.flags&512&&zf(i)}catch(ve){rn(i,i.return,ve)}}if(i===n){Ge=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function Og(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function Fg(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ac(4,i)}catch(k){rn(i,o,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){rn(i,d,k)}}var g=i.return;try{zf(i)}catch(k){rn(i,g,k)}break;case 5:var T=i.return;try{zf(i)}catch(k){rn(i,T,k)}}}catch(k){rn(i,i.return,k)}if(i===n){Ge=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ge=O;break}Ge=i.return}}var ST=Math.ceil,lc=L.ReactCurrentDispatcher,Gf=L.ReactCurrentOwner,di=L.ReactCurrentBatchConfig,Tt=0,vn=null,ln=null,An=0,ri=0,yo=Or(0),pn=0,Aa=null,vs=0,cc=0,Vf=0,Ra=null,qn=null,Wf=0,xo=1/0,gr=null,uc=!1,Xf=null,Gr=null,hc=!1,Vr=null,fc=0,Ca=0,Yf=null,dc=-1,pc=0;function Bn(){return(Tt&6)!==0?Zt():dc!==-1?dc:dc=Zt()}function Wr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&An!==0?An&-An:nT.transition!==null?(pc===0&&(pc=Be()),pc):(n=St,n!==0||(n=window.event,n=n===void 0?16:zm(n.type)),n)}function Ri(n,i,o,c){if(50<Ca)throw Ca=0,Yf=null,Error(t(185));vt(n,o,c),((Tt&2)===0||n!==vn)&&(n===vn&&((Tt&2)===0&&(cc|=o),pn===4&&Xr(n,An)),$n(n,c),o===1&&Tt===0&&(i.mode&1)===0&&(xo=Zt()+500,Gl&&Br()))}function $n(n,i){var o=n.callbackNode;Dt(n,i);var c=Ht(n,n===vn?An:0);if(c===0)o!==null&&Tl(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Tl(o),i===1)n.tag===0?tT(zg.bind(null,n)):T0(zg.bind(null,n)),ZE(function(){(Tt&6)===0&&Br()}),o=null;else{switch(lr(c)){case 1:o=Jo;break;case 4:o=A;break;case 16:o=X;break;case 536870912:o=te;break;default:o=X}o=jg(o,Bg.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Bg(n,i){if(dc=-1,pc=0,(Tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Mo()&&n.callbackNode!==o)return null;var c=Ht(n,n===vn?An:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=mc(n,c);else{i=c;var d=Tt;Tt|=2;var g=Hg();(vn!==n||An!==i)&&(gr=null,xo=Zt()+500,Ss(n,i));do try{MT();break}catch(O){kg(n,O)}while(!0);uf(),lc.current=g,Tt=d,ln!==null?i=0:(vn=null,An=0,i=pn)}if(i!==0){if(i===2&&(d=an(n),d!==0&&(c=d,i=jf(n,d))),i===1)throw o=Aa,Ss(n,0),Xr(n,c),$n(n,Zt()),o;if(i===6)Xr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!yT(d)&&(i=mc(n,c),i===2&&(g=an(n),g!==0&&(c=g,i=jf(n,g))),i===1))throw o=Aa,Ss(n,0),Xr(n,c),$n(n,Zt()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ys(n,qn,gr);break;case 3:if(Xr(n,c),(c&130023424)===c&&(i=Wf+500-Zt(),10<i)){if(Ht(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Jh(ys.bind(null,n,qn,gr),i);break}ys(n,qn,gr);break;case 4:if(Xr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-Ae(c);g=1<<T,T=i[T],T>d&&(d=T),c&=~g}if(c=d,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ST(c/1960))-c,10<c){n.timeoutHandle=Jh(ys.bind(null,n,qn,gr),c);break}ys(n,qn,gr);break;case 5:ys(n,qn,gr);break;default:throw Error(t(329))}}}return $n(n,Zt()),n.callbackNode===o?Bg.bind(null,n):null}function jf(n,i){var o=Ra;return n.current.memoizedState.isDehydrated&&(Ss(n,i).flags|=256),n=mc(n,i),n!==2&&(i=qn,qn=o,i!==null&&qf(i)),n}function qf(n){qn===null?qn=n:qn.push.apply(qn,n)}function yT(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],g=d.getSnapshot;d=d.value;try{if(!Mi(g(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xr(n,i){for(i&=~Vf,i&=~cc,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ae(i),c=1<<o;n[o]=-1,i&=~c}}function zg(n){if((Tt&6)!==0)throw Error(t(327));Mo();var i=Ht(n,0);if((i&1)===0)return $n(n,Zt()),null;var o=mc(n,i);if(n.tag!==0&&o===2){var c=an(n);c!==0&&(i=c,o=jf(n,c))}if(o===1)throw o=Aa,Ss(n,0),Xr(n,i),$n(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ys(n,qn,gr),$n(n,Zt()),null}function $f(n,i){var o=Tt;Tt|=1;try{return n(i)}finally{Tt=o,Tt===0&&(xo=Zt()+500,Gl&&Br())}}function _s(n){Vr!==null&&Vr.tag===0&&(Tt&6)===0&&Mo();var i=Tt;Tt|=1;var o=di.transition,c=St;try{if(di.transition=null,St=1,n)return n()}finally{St=c,di.transition=o,Tt=i,(Tt&6)===0&&Br()}}function Kf(){ri=yo.current,Yt(yo)}function Ss(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,KE(o)),ln!==null)for(o=ln.return;o!==null;){var c=o;switch(sf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&kl();break;case 3:vo(),Yt(Xn),Yt(bn),_f();break;case 5:gf(c);break;case 4:vo();break;case 13:Yt(Jt);break;case 19:Yt(Jt);break;case 10:hf(c.type._context);break;case 22:case 23:Kf()}o=o.return}if(vn=n,ln=n=Yr(n.current,null),An=ri=i,pn=0,Aa=null,Vf=cc=vs=0,qn=Ra=null,ps!==null){for(i=0;i<ps.length;i++)if(o=ps[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,g=o.pending;if(g!==null){var T=g.next;g.next=d,c.next=T}o.pending=c}ps=null}return n}function kg(n,i){do{var o=ln;try{if(uf(),Jl.current=nc,Ql){for(var c=Qt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ql=!1}if(gs=0,gn=dn=Qt=null,ya=!1,xa=0,Gf.current=null,o===null||o.return===null){pn=1,Aa=i,ln=null;break}e:{var g=n,T=o.return,O=o,k=i;if(i=An,O.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var oe=k,_e=O,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ze=hg(T);if(ze!==null){ze.flags&=-257,fg(ze,T,O,g,i),ze.mode&1&&ug(g,oe,i),i=ze,k=oe;var Ve=i.updateQueue;if(Ve===null){var Ye=new Set;Ye.add(k),i.updateQueue=Ye}else Ve.add(k);break e}else{if((i&1)===0){ug(g,oe,i),Zf();break e}k=Error(t(426))}}else if(qt&&O.mode&1){var sn=hg(T);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),fg(sn,T,O,g,i),lf(_o(k,O));break e}}g=k=_o(k,O),pn!==4&&(pn=2),Ra===null?Ra=[g]:Ra.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var Z=lg(g,k,i);U0(g,Z);break e;case 1:O=k;var W=g.type,ne=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Gr===null||!Gr.has(ne)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ee=cg(g,O,i);U0(g,Ee);break e}}g=g.return}while(g!==null)}Vg(o)}catch(qe){i=qe,ln===o&&o!==null&&(ln=o=o.return);continue}break}while(!0)}function Hg(){var n=lc.current;return lc.current=nc,n===null?nc:n}function Zf(){(pn===0||pn===3||pn===2)&&(pn=4),vn===null||(vs&268435455)===0&&(cc&268435455)===0||Xr(vn,An)}function mc(n,i){var o=Tt;Tt|=2;var c=Hg();(vn!==n||An!==i)&&(gr=null,Ss(n,i));do try{xT();break}catch(d){kg(n,d)}while(!0);if(uf(),Tt=o,lc.current=c,ln!==null)throw Error(t(261));return vn=null,An=0,pn}function xT(){for(;ln!==null;)Gg(ln)}function MT(){for(;ln!==null&&!Rh();)Gg(ln)}function Gg(n){var i=Yg(n.alternate,n,ri);n.memoizedProps=n.pendingProps,i===null?Vg(n):ln=i,Gf.current=null}function Vg(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=pT(o,i,ri),o!==null){ln=o;return}}else{if(o=mT(o,i),o!==null){o.flags&=32767,ln=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pn=6,ln=null;return}}if(i=i.sibling,i!==null){ln=i;return}ln=i=n}while(i!==null);pn===0&&(pn=5)}function ys(n,i,o){var c=St,d=di.transition;try{di.transition=null,St=1,ET(n,i,o,c)}finally{di.transition=d,St=c}return null}function ET(n,i,o,c){do Mo();while(Vr!==null);if((Tt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(Vn(n,g),n===vn&&(ln=vn=null,An=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||hc||(hc=!0,jg(X,function(){return Mo(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=di.transition,di.transition=null;var T=St;St=1;var O=Tt;Tt|=4,Gf.current=null,vT(n,o),Ng(o,n),VE(Kh),Al=!!$h,Kh=$h=null,n.current=o,_T(o),Ch(),Tt=O,St=T,di.transition=g}else n.current=o;if(hc&&(hc=!1,Vr=n,fc=d),g=n.pendingLanes,g===0&&(Gr=null),ke(o.stateNode),$n(n,Zt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(uc)throw uc=!1,n=Xf,Xf=null,n;return(fc&1)!==0&&n.tag!==0&&Mo(),g=n.pendingLanes,(g&1)!==0?n===Yf?Ca++:(Ca=0,Yf=n):Ca=0,Br(),null}function Mo(){if(Vr!==null){var n=lr(fc),i=di.transition,o=St;try{if(di.transition=null,St=16>n?16:n,Vr===null)var c=!1;else{if(n=Vr,Vr=null,fc=0,(Tt&6)!==0)throw Error(t(331));var d=Tt;for(Tt|=4,Ge=n.current;Ge!==null;){var g=Ge,T=g.child;if((Ge.flags&16)!==0){var O=g.deletions;if(O!==null){for(var k=0;k<O.length;k++){var oe=O[k];for(Ge=oe;Ge!==null;){var _e=Ge;switch(_e.tag){case 0:case 11:case 15:wa(8,_e,g)}var ye=_e.child;if(ye!==null)ye.return=_e,Ge=ye;else for(;Ge!==null;){_e=Ge;var ve=_e.sibling,ze=_e.return;if(Cg(_e),_e===oe){Ge=null;break}if(ve!==null){ve.return=ze,Ge=ve;break}Ge=ze}}}var Ve=g.alternate;if(Ve!==null){var Ye=Ve.child;if(Ye!==null){Ve.child=null;do{var sn=Ye.sibling;Ye.sibling=null,Ye=sn}while(Ye!==null)}}Ge=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Ge=T;else e:for(;Ge!==null;){if(g=Ge,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:wa(9,g,g.return)}var Z=g.sibling;if(Z!==null){Z.return=g.return,Ge=Z;break e}Ge=g.return}}var W=n.current;for(Ge=W;Ge!==null;){T=Ge;var ne=T.child;if((T.subtreeFlags&2064)!==0&&ne!==null)ne.return=T,Ge=ne;else e:for(T=W;Ge!==null;){if(O=Ge,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:ac(9,O)}}catch(qe){rn(O,O.return,qe)}if(O===T){Ge=null;break e}var Ee=O.sibling;if(Ee!==null){Ee.return=O.return,Ge=Ee;break e}Ge=O.return}}if(Tt=d,Br(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Q,n)}catch{}c=!0}return c}finally{St=o,di.transition=i}}return!1}function Wg(n,i,o){i=_o(o,i),i=lg(n,i,1),n=kr(n,i,1),i=Bn(),n!==null&&(vt(n,1,i),$n(n,i))}function rn(n,i,o){if(n.tag===3)Wg(n,n,o);else for(;i!==null;){if(i.tag===3){Wg(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=_o(o,n),n=cg(i,n,1),i=kr(i,n,1),n=Bn(),i!==null&&(vt(i,1,n),$n(i,n));break}}i=i.return}}function TT(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Bn(),n.pingedLanes|=n.suspendedLanes&o,vn===n&&(An&o)===o&&(pn===4||pn===3&&(An&130023424)===An&&500>Zt()-Wf?Ss(n,0):Vf|=o),$n(n,i)}function Xg(n,i){i===0&&((n.mode&1)===0?i=1:(i=je,je<<=1,(je&130023424)===0&&(je=4194304)));var o=Bn();n=dr(n,i),n!==null&&(vt(n,i,o),$n(n,o))}function wT(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Xg(n,o)}function AT(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Xg(n,o)}var Yg;Yg=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Xn.current)jn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return jn=!1,dT(n,i,o);jn=(n.flags&131072)!==0}else jn=!1,qt&&(i.flags&1048576)!==0&&w0(i,Wl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;sc(n,i),n=i.pendingProps;var d=co(i,bn.current);go(i,o),d=xf(null,i,c,n,d,o);var g=Mf();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yn(c)?(g=!0,Hl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,pf(i),d.updater=ic,i.stateNode=d,d._reactInternals=i,Cf(i,c,n,o),i=Df(null,i,c,!0,g,o)):(i.tag=0,qt&&g&&rf(i),Fn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(sc(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=CT(c),n=Ti(c,n),d){case 0:i=Lf(null,i,c,n,o);break e;case 1:i=_g(null,i,c,n,o);break e;case 11:i=dg(null,i,c,n,o);break e;case 14:i=pg(null,i,c,Ti(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ti(c,d),Lf(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ti(c,d),_g(n,i,c,d,o);case 3:e:{if(Sg(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,I0(n,i),Kl(i,c,null,o);var T=i.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=_o(Error(t(423)),i),i=yg(n,i,c,o,d);break e}else if(c!==d){d=_o(Error(t(424)),i),i=yg(n,i,c,o,d);break e}else for(ii=Ur(i.stateNode.containerInfo.firstChild),ni=i,qt=!0,Ei=null,o=D0(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fo(),c===d){i=mr(n,i,o);break e}Fn(n,i,c,o)}i=i.child}return i;case 5:return F0(i),n===null&&af(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,T=d.children,Zh(c,d)?T=null:g!==null&&Zh(c,g)&&(i.flags|=32),vg(n,i),Fn(n,i,T,o),i.child;case 6:return n===null&&af(i),null;case 13:return xg(n,i,o);case 4:return mf(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=po(i,null,c,o):Fn(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ti(c,d),dg(n,i,c,d,o);case 7:return Fn(n,i,i.pendingProps,o),i.child;case 8:return Fn(n,i,i.pendingProps.children,o),i.child;case 12:return Fn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,T=d.value,Gt(jl,c._currentValue),c._currentValue=T,g!==null)if(Mi(g.value,T)){if(g.children===d.children&&!Xn.current){i=mr(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var O=g.dependencies;if(O!==null){T=g.child;for(var k=O.firstContext;k!==null;){if(k.context===c){if(g.tag===1){k=pr(-1,o&-o),k.tag=2;var oe=g.updateQueue;if(oe!==null){oe=oe.shared;var _e=oe.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),oe.pending=k}}g.lanes|=o,k=g.alternate,k!==null&&(k.lanes|=o),ff(g.return,o,i),O.lanes|=o;break}k=k.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=o,O=T.alternate,O!==null&&(O.lanes|=o),ff(T,o,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Fn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,go(i,o),d=hi(d),c=c(d),i.flags|=1,Fn(n,i,c,o),i.child;case 14:return c=i.type,d=Ti(c,i.pendingProps),d=Ti(c.type,d),pg(n,i,c,d,o);case 15:return mg(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ti(c,d),sc(n,i),i.tag=1,Yn(c)?(n=!0,Hl(i)):n=!1,go(i,o),og(i,c,d),Cf(i,c,d,o),Df(null,i,c,!0,n,o);case 19:return Eg(n,i,o);case 22:return gg(n,i,o)}throw Error(t(156,i.tag))};function jg(n,i){return El(n,i)}function RT(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,i,o,c){return new RT(n,i,o,c)}function Jf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function CT(n){if(typeof n=="function")return Jf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===Y)return 14}return 2}function Yr(n,i){var o=n.alternate;return o===null?(o=pi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function gc(n,i,o,c,d,g){var T=2;if(c=n,typeof n=="function")Jf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return xs(o.children,d,g,i);case w:T=8,d|=8;break;case I:return n=pi(12,o,i,d|2),n.elementType=I,n.lanes=g,n;case ie:return n=pi(13,o,i,d),n.elementType=ie,n.lanes=g,n;case se:return n=pi(19,o,i,d),n.elementType=se,n.lanes=g,n;case K:return vc(o,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:T=10;break e;case z:T=9;break e;case $:T=11;break e;case Y:T=14;break e;case J:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pi(T,o,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function xs(n,i,o,c){return n=pi(7,n,c,i),n.lanes=o,n}function vc(n,i,o,c){return n=pi(22,n,c,i),n.elementType=K,n.lanes=o,n.stateNode={isHidden:!1},n}function Qf(n,i,o){return n=pi(6,n,null,i),n.lanes=o,n}function ed(n,i,o){return i=pi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function PT(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function td(n,i,o,c,d,g,T,O,k){return n=new PT(n,i,o,O,k),i===1?(i=1,g===!0&&(i|=8)):i=0,g=pi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(g),n}function bT(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function qg(n){if(!n)return Fr;n=n._reactInternals;e:{if(Hi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Yn(o))return M0(n,o,i)}return i}function $g(n,i,o,c,d,g,T,O,k){return n=td(o,c,!0,n,d,g,T,O,k),n.context=qg(null),o=n.current,c=Bn(),d=Wr(o),g=pr(c,d),g.callback=i??null,kr(o,g,d),n.current.lanes=d,vt(n,d,c),$n(n,c),n}function _c(n,i,o,c){var d=i.current,g=Bn(),T=Wr(d);return o=qg(o),i.context===null?i.context=o:i.pendingContext=o,i=pr(g,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=kr(d,i,T),n!==null&&(Ri(n,d,T,g),$l(n,d,T)),T}function Sc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function nd(n,i){Kg(n,i),(n=n.alternate)&&Kg(n,i)}function LT(){return null}var Zg=typeof reportError=="function"?reportError:function(n){console.error(n)};function id(n){this._internalRoot=n}yc.prototype.render=id.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));_c(n,i,null,null)},yc.prototype.unmount=id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;_s(function(){_c(null,n,null,null)}),i[cr]=null}};function yc(n){this._internalRoot=n}yc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Nt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Dr.length&&i!==0&&i<Dr[o].priority;o++);Dr.splice(o,0,n),o===0&&Fm(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function DT(n,i,o,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var oe=Sc(T);g.call(oe)}}var T=$g(i,c,n,0,null,!1,!1,"",Jg);return n._reactRootContainer=T,n[cr]=T.current,fa(n.nodeType===8?n.parentNode:n),_s(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var O=c;c=function(){var oe=Sc(k);O.call(oe)}}var k=td(n,0,!1,null,null,!1,!1,"",Jg);return n._reactRootContainer=k,n[cr]=k.current,fa(n.nodeType===8?n.parentNode:n),_s(function(){_c(i,k,o,c)}),k}function Mc(n,i,o,c,d){var g=o._reactRootContainer;if(g){var T=g;if(typeof d=="function"){var O=d;d=function(){var k=Sc(T);O.call(k)}}_c(i,T,n,d)}else T=DT(o,i,n,d,c);return Sc(T)}Pt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);o!==0&&(Wn(i,o|1),$n(i,Zt()),(Tt&6)===0&&(xo=Zt()+500,Br()))}break;case 13:_s(function(){var c=dr(n,1);if(c!==null){var d=Bn();Ri(c,n,1,d)}}),nd(n,1)}},Wt=function(n){if(n.tag===13){var i=dr(n,134217728);if(i!==null){var o=Bn();Ri(i,n,134217728,o)}nd(n,134217728)}},yi=function(n){if(n.tag===13){var i=Wr(n),o=dr(n,i);if(o!==null){var c=Bn();Ri(o,n,i,c)}nd(n,i)}},Nt=function(){return St},xi=function(n,i){var o=St;try{return St=n,i()}finally{St=o}},st=function(n,i,o){switch(i){case"input":if(Kt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=zl(c);if(!d)throw Error(t(90));Bt(c),Kt(c,d)}}}break;case"textarea":be(n,o);break;case"select":i=o.value,i!=null&&kt(n,!!o.multiple,i,!1)}},Re=$f,ge=_s;var NT={usingClientEntryPoint:!1,Events:[ma,ao,zl,he,Oe,$f]},Pa={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IT={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ko(n),n===null?null:n.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||LT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Q=Ec.inject(IT),Ce=Ec}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NT,zn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(i))throw Error(t(200));return bT(n,i,null,o)},zn.createRoot=function(n,i){if(!rd(n))throw Error(t(299));var o=!1,c="",d=Zg;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=td(n,1,!1,null,null,o,!1,c,d),n[cr]=i.current,fa(n.nodeType===8?n.parentNode:n),new id(i)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ko(i),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return _s(n)},zn.hydrate=function(n,i,o){if(!xc(i))throw Error(t(200));return Mc(null,n,i,!0,o)},zn.hydrateRoot=function(n,i,o){if(!rd(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,g="",T=Zg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=$g(i,null,n,1,o??null,d,!1,g,T),n[cr]=i.current,fa(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new yc(i)},zn.render=function(n,i,o){if(!xc(i))throw Error(t(200));return Mc(null,n,i,!1,o)},zn.unmountComponentAtNode=function(n){if(!xc(n))throw Error(t(40));return n._reactRootContainer?(_s(function(){Mc(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},zn.unstable_batchedUpdates=$f,zn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!xc(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Mc(n,i,o,!1,c)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var fd;function ov(){if(fd)return Rc.exports;fd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rc.exports=sv(),Rc.exports}var dd;function av(){if(dd)return ba;dd=1;var s=ov();return ba.createRoot=s.createRoot,ba.hydrateRoot=s.hydrateRoot,ba}var lv=av();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="184",Ms={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cv=0,pd=1,uv=2,La=1,hv=2,To=3,vr=0,kn=1,Mt=2,ji=0,Ts=1,md=2,gd=3,vd=4,fv=5,qr=100,dv=101,pv=102,mv=103,gv=104,vv=200,_v=201,Sv=202,yv=203,Lc=204,Dc=205,xv=206,Mv=207,Ev=208,Tv=209,wv=210,Av=211,Rv=212,Cv=213,Pv=214,Nc=0,Ic=1,Uc=2,ws=3,Oc=4,Fc=5,Bc=6,zc=7,_d=0,bv=1,Lv=2,Ci=0,Sd=1,yd=2,xd=3,Md=4,Ed=5,Td=6,wd=7,Ad=300,$r=301,As=302,kc=303,Hc=304,Da=306,qi=1e3,$i=1001,Gc=1002,yn=1003,Dv=1004,Na=1005,Rn=1006,Vc=1007,Kr=1008,Kn=1009,Rd=1010,Cd=1011,wo=1012,Wc=1013,Pi=1014,bi=1015,Ki=1016,Xc=1017,Yc=1018,Ao=1020,Pd=35902,bd=35899,Ld=1021,Dd=1022,mi=1023,Zi=1026,Zr=1027,Nd=1028,jc=1029,Jr=1030,qc=1031,$c=1033,Ia=33776,Ua=33777,Oa=33778,Fa=33779,Kc=35840,Zc=35841,Jc=35842,Qc=35843,eu=36196,tu=37492,nu=37496,iu=37488,ru=37489,Ba=37490,su=37491,ou=37808,au=37809,lu=37810,cu=37811,uu=37812,hu=37813,fu=37814,du=37815,pu=37816,mu=37817,gu=37818,vu=37819,_u=37820,Su=37821,yu=36492,xu=36494,Mu=36495,Eu=36283,Tu=36284,za=36285,wu=36286,Nv=3200,Id=0,Iv=1,_r="",si="srgb",ka="srgb-linear",Ha="linear",bt="srgb",Rs=7680,Ud=519,Uv=512,Ov=513,Fv=514,Au=515,Bv=516,zv=517,Ru=518,kv=519,Od=35044,Fd="300 es",Li=2e3,Ro=2001;function Hv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Co(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gv(){const s=Co("canvas");return s.style.display="block",s}const Bd={};function zd(...s){const e="THREE."+s.shift();console.log(e,...s)}function kd(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qe(...s){s=kd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Et(...s){s=kd(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Cu(...s){const e=s.join(" ");e in Bd||(Bd[e]=!0,Qe(...s))}function Vv(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Wv={[Nc]:Ic,[Uc]:Bc,[Oc]:zc,[ws]:Fc,[Ic]:Nc,[Bc]:Uc,[zc]:Oc,[Fc]:ws};class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hd=1234567;const Po=Math.PI/180,bo=180/Math.PI;function Cs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function ft(s,e,t){return Math.max(e,Math.min(t,s))}function Pu(s,e){return(s%e+e)%e}function Xv(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function Yv(s,e,t){return s!==e?(t-s)/(e-s):0}function Lo(s,e,t){return(1-t)*s+t*e}function jv(s,e,t,r){return Lo(s,e,1-Math.exp(-t*r))}function qv(s,e=1){return e-Math.abs(Pu(s,e*2)-e)}function $v(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Kv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Zv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Jv(s,e){return s+Math.random()*(e-s)}function Qv(s){return s*(.5-Math.random())}function e_(s){s!==void 0&&(Hd=s);let e=Hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function t_(s){return s*Po}function n_(s){return s*bo}function i_(s){return(s&s-1)===0&&s!==0}function r_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function s_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function o_(s,e,t,r,a){const l=Math.cos,u=Math.sin,h=l(t/2),f=u(t/2),p=l((e+r)/2),m=u((e+r)/2),_=l((e-r)/2),v=u((e-r)/2),S=l((r-e)/2),M=u((r-e)/2);switch(a){case"XYX":s.set(h*m,f*_,f*v,h*p);break;case"YZY":s.set(f*v,h*m,f*_,h*p);break;case"ZXZ":s.set(f*_,f*v,h*m,h*p);break;case"XZX":s.set(h*m,f*M,f*S,h*p);break;case"YXY":s.set(f*S,h*m,f*M,h*p);break;case"ZYZ":s.set(f*M,f*S,h*m,h*p);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ps(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ga={DEG2RAD:Po,RAD2DEG:bo,generateUUID:Cs,clamp:ft,euclideanModulo:Pu,mapLinear:Xv,inverseLerp:Yv,lerp:Lo,damp:jv,pingpong:qv,smoothstep:$v,smootherstep:Kv,randInt:Zv,randFloat:Jv,randFloatSpread:Qv,seededRandom:e_,degToRad:t_,radToDeg:n_,isPowerOfTwo:i_,ceilPowerOfTwo:r_,floorPowerOfTwo:s_,setQuaternionFromProperEuler:o_,normalize:In,denormalize:Ps},Mh=class Mh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mh.prototype.isVector2=!0;let $e=Mh;class yr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,h){let f=r[a+0],p=r[a+1],m=r[a+2],_=r[a+3],v=l[u+0],S=l[u+1],M=l[u+2],R=l[u+3];if(_!==R||f!==v||p!==S||m!==M){let x=f*v+p*S+m*M+_*R;x<0&&(v=-v,S=-S,M=-M,R=-R,x=-x);let y=1-h;if(x<.9995){const P=Math.acos(x),N=Math.sin(P);y=Math.sin(y*P)/N,h=Math.sin(h*P)/N,f=f*y+v*h,p=p*y+S*h,m=m*y+M*h,_=_*y+R*h}else{f=f*y+v*h,p=p*y+S*h,m=m*y+M*h,_=_*y+R*h;const P=1/Math.sqrt(f*f+p*p+m*m+_*_);f*=P,p*=P,m*=P,_*=P}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,u){const h=r[a],f=r[a+1],p=r[a+2],m=r[a+3],_=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return e[t]=h*M+m*_+f*S-p*v,e[t+1]=f*M+m*v+p*_-h*S,e[t+2]=p*M+m*S+h*v-f*_,e[t+3]=m*M-h*_-f*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,h=Math.cos,f=Math.sin,p=h(r/2),m=h(a/2),_=h(l/2),v=f(r/2),S=f(a/2),M=f(l/2);switch(u){case"XYZ":this._x=v*m*_+p*S*M,this._y=p*S*_-v*m*M,this._z=p*m*M+v*S*_,this._w=p*m*_-v*S*M;break;case"YXZ":this._x=v*m*_+p*S*M,this._y=p*S*_-v*m*M,this._z=p*m*M-v*S*_,this._w=p*m*_+v*S*M;break;case"ZXY":this._x=v*m*_-p*S*M,this._y=p*S*_+v*m*M,this._z=p*m*M+v*S*_,this._w=p*m*_-v*S*M;break;case"ZYX":this._x=v*m*_-p*S*M,this._y=p*S*_+v*m*M,this._z=p*m*M-v*S*_,this._w=p*m*_+v*S*M;break;case"YZX":this._x=v*m*_+p*S*M,this._y=p*S*_+v*m*M,this._z=p*m*M-v*S*_,this._w=p*m*_-v*S*M;break;case"XZY":this._x=v*m*_-p*S*M,this._y=p*S*_-v*m*M,this._z=p*m*M+v*S*_,this._w=p*m*_+v*S*M;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],h=t[5],f=t[9],p=t[2],m=t[6],_=t[10],v=r+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(m-f)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,h=t._x,f=t._y,p=t._z,m=t._w;return this._x=r*m+u*h+a*p-l*f,this._y=a*m+u*f+l*h-r*p,this._z=l*m+u*p+r*f-a*h,this._w=u*m-r*h-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,a=-a,l=-l,u=-u,h=-h);let f=1-t;if(h<.9995){const p=Math.acos(h),m=Math.sin(p);f=Math.sin(f*p)/m,t=Math.sin(t*p)/m,this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Eh=class Eh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,h=e.z,f=e.w,p=2*(u*a-h*r),m=2*(h*t-l*a),_=2*(l*r-u*t);return this.x=t+f*p+u*_-h*m,this.y=r+f*m+h*p-l*_,this.z=a+f*_+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,h=t.y,f=t.z;return this.x=a*f-l*h,this.y=l*u-r*f,this.z=r*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;let C=Eh;const bu=new C,Gd=new yr,Th=class Th{constructor(e,t,r,a,l,u,h,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,f,p)}set(e,t,r,a,l,u,h,f,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=h,m[3]=t,m[4]=l,m[5]=f,m[6]=r,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[3],f=r[6],p=r[1],m=r[4],_=r[7],v=r[2],S=r[5],M=r[8],R=a[0],x=a[3],y=a[6],P=a[1],N=a[4],L=a[7],U=a[2],b=a[5],F=a[8];return l[0]=u*R+h*P+f*U,l[3]=u*x+h*N+f*b,l[6]=u*y+h*L+f*F,l[1]=p*R+m*P+_*U,l[4]=p*x+m*N+_*b,l[7]=p*y+m*L+_*F,l[2]=v*R+S*P+M*U,l[5]=v*x+S*N+M*b,l[8]=v*y+S*L+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*h*p-r*l*m+r*h*f+a*l*p-a*u*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],m=e[8],_=m*u-h*p,v=h*f-m*l,S=p*l-u*f,M=t*_+r*v+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=_*R,e[1]=(a*p-m*r)*R,e[2]=(h*r-a*u)*R,e[3]=v*R,e[4]=(m*t-a*f)*R,e[5]=(a*l-h*t)*R,e[6]=S*R,e[7]=(r*f-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,h){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*h)+u+e,-a*p,a*f,-a*(-p*u+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Lu.makeScale(e,t)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Th.prototype.isMatrix3=!0;let ct=Th;const Lu=new ct,Vd=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a_(){const s={enabled:!0,workingColorSpace:ka,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===bt&&(a.r=Ji(a.r),a.g=Ji(a.g),a.b=Ji(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===bt&&(a.r=bs(a.r),a.g=bs(a.g),a.b=bs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?Ha:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Cu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Cu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ka]:{primaries:e,whitePoint:r,transfer:Ha,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const yt=a_();function Ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class l_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=Co("canvas")),Ls.width=e.width,Ls.height=e.height;const a=Ls.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Ji(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ji(t[r]/255)*255):t[r]=Ji(t[r]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c_=0;class Du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?l.push(Nu(a[u].image)):l.push(Nu(a[u]))}else l=Nu(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let u_=0;const Iu=new C;class en extends Sr{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,r=$i,a=$i,l=Rn,u=Kr,h=mi,f=Kn,p=en.DEFAULT_ANISOTROPY,m=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Cs(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null,en.DEFAULT_MAPPING=Ad,en.DEFAULT_ANISOTROPY=1;const wh=class wh{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],m=f[4],_=f[8],v=f[1],S=f[5],M=f[9],R=f[2],x=f[6],y=f[10];if(Math.abs(m-v)<.01&&Math.abs(_-R)<.01&&Math.abs(M-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+R)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,L=(S+1)/2,U=(y+1)/2,b=(m+v)/4,F=(_+R)/4,w=(M+x)/4;return N>L&&N>U?N<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(N),a=b/r,l=F/r):L>U?L<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(L),r=b/a,l=w/a):U<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),r=F/l,a=w/l),this.set(r,a,l,t),this}let P=Math.sqrt((x-M)*(x-M)+(_-R)*(_-R)+(v-m)*(v-m));return Math.abs(P)<.001&&(P=1),this.x=(x-M)/P,this.y=(_-R)/P,this.z=(v-m)/P,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wh.prototype.isVector4=!0;let tn=wh;class h_ extends Sr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new en(a),u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Du(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends h_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Xd extends en{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f_ extends en{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xl=class xl{constructor(e,t,r,a,l,u,h,f,p,m,_,v,S,M,R,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,f,p,m,_,v,S,M,R,x)}set(e,t,r,a,l,u,h,f,p,m,_,v,S,M,R,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=u,y[9]=h,y[13]=f,y[2]=p,y[6]=m,y[10]=_,y[14]=v,y[3]=S,y[7]=M,y[11]=R,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),u=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),f=Math.cos(a),p=Math.sin(a),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*m,S=u*_,M=h*m,R=h*_;t[0]=f*m,t[4]=-f*_,t[8]=p,t[1]=S+M*p,t[5]=v-R*p,t[9]=-h*f,t[2]=R-v*p,t[6]=M+S*p,t[10]=u*f}else if(e.order==="YXZ"){const v=f*m,S=f*_,M=p*m,R=p*_;t[0]=v+R*h,t[4]=M*h-S,t[8]=u*p,t[1]=u*_,t[5]=u*m,t[9]=-h,t[2]=S*h-M,t[6]=R+v*h,t[10]=u*f}else if(e.order==="ZXY"){const v=f*m,S=f*_,M=p*m,R=p*_;t[0]=v-R*h,t[4]=-u*_,t[8]=M+S*h,t[1]=S+M*h,t[5]=u*m,t[9]=R-v*h,t[2]=-u*p,t[6]=h,t[10]=u*f}else if(e.order==="ZYX"){const v=u*m,S=u*_,M=h*m,R=h*_;t[0]=f*m,t[4]=M*p-S,t[8]=v*p+R,t[1]=f*_,t[5]=R*p+v,t[9]=S*p-M,t[2]=-p,t[6]=h*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,S=u*p,M=h*f,R=h*p;t[0]=f*m,t[4]=R-v*_,t[8]=M*_+S,t[1]=_,t[5]=u*m,t[9]=-h*m,t[2]=-p*m,t[6]=S*_+M,t[10]=v-R*_}else if(e.order==="XZY"){const v=u*f,S=u*p,M=h*f,R=h*p;t[0]=f*m,t[4]=-_,t[8]=p*m,t[1]=v*_+R,t[5]=u*m,t[9]=S*_-M,t[2]=M*_-S,t[6]=h*m,t[10]=R*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d_,e,p_)}lookAt(e,t,r){const a=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),xr.crossVectors(r,Zn),xr.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),xr.crossVectors(r,Zn)),xr.normalize(),Va.crossVectors(Zn,xr),a[0]=xr.x,a[4]=Va.x,a[8]=Zn.x,a[1]=xr.y,a[5]=Va.y,a[9]=Zn.y,a[2]=xr.z,a[6]=Va.z,a[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[4],f=r[8],p=r[12],m=r[1],_=r[5],v=r[9],S=r[13],M=r[2],R=r[6],x=r[10],y=r[14],P=r[3],N=r[7],L=r[11],U=r[15],b=a[0],F=a[4],w=a[8],I=a[12],G=a[1],z=a[5],$=a[9],ie=a[13],se=a[2],Y=a[6],J=a[10],K=a[14],j=a[3],le=a[7],ce=a[11],B=a[15];return l[0]=u*b+h*G+f*se+p*j,l[4]=u*F+h*z+f*Y+p*le,l[8]=u*w+h*$+f*J+p*ce,l[12]=u*I+h*ie+f*K+p*B,l[1]=m*b+_*G+v*se+S*j,l[5]=m*F+_*z+v*Y+S*le,l[9]=m*w+_*$+v*J+S*ce,l[13]=m*I+_*ie+v*K+S*B,l[2]=M*b+R*G+x*se+y*j,l[6]=M*F+R*z+x*Y+y*le,l[10]=M*w+R*$+x*J+y*ce,l[14]=M*I+R*ie+x*K+y*B,l[3]=P*b+N*G+L*se+U*j,l[7]=P*F+N*z+L*Y+U*le,l[11]=P*w+N*$+L*J+U*ce,l[15]=P*I+N*ie+L*K+U*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],h=e[5],f=e[9],p=e[13],m=e[2],_=e[6],v=e[10],S=e[14],M=e[3],R=e[7],x=e[11],y=e[15],P=f*S-p*v,N=h*S-p*_,L=h*v-f*_,U=u*S-p*m,b=u*v-f*m,F=u*_-h*m;return t*(R*P-x*N+y*L)-r*(M*P-x*U+y*b)+a*(M*N-R*U+y*F)-l*(M*L-R*b+x*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],m=e[8],_=e[9],v=e[10],S=e[11],M=e[12],R=e[13],x=e[14],y=e[15],P=t*h-r*u,N=t*f-a*u,L=t*p-l*u,U=r*f-a*h,b=r*p-l*h,F=a*p-l*f,w=m*R-_*M,I=m*x-v*M,G=m*y-S*M,z=_*x-v*R,$=_*y-S*R,ie=v*y-S*x,se=P*ie-N*$+L*z+U*G-b*I+F*w;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/se;return e[0]=(h*ie-f*$+p*z)*Y,e[1]=(a*$-r*ie-l*z)*Y,e[2]=(R*F-x*b+y*U)*Y,e[3]=(v*b-_*F-S*U)*Y,e[4]=(f*G-u*ie-p*I)*Y,e[5]=(t*ie-a*G+l*I)*Y,e[6]=(x*L-M*F-y*N)*Y,e[7]=(m*F-v*L+S*N)*Y,e[8]=(u*$-h*G+p*w)*Y,e[9]=(r*G-t*$-l*w)*Y,e[10]=(M*b-R*L+y*P)*Y,e[11]=(_*L-m*b-S*P)*Y,e[12]=(h*I-u*z-f*w)*Y,e[13]=(t*z-r*I+a*w)*Y,e[14]=(R*N-M*U-x*P)*Y,e[15]=(m*U-_*N+v*P)*Y,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,h=e.y,f=e.z,p=l*u,m=l*h;return this.set(p*u+r,p*h-a*f,p*f+a*h,0,p*h+a*f,m*h+r,m*f-a*u,0,p*f-a*h,m*f+a*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,h=t._z,f=t._w,p=l+l,m=u+u,_=h+h,v=l*p,S=l*m,M=l*_,R=u*m,x=u*_,y=h*_,P=f*p,N=f*m,L=f*_,U=r.x,b=r.y,F=r.z;return a[0]=(1-(R+y))*U,a[1]=(S+L)*U,a[2]=(M-N)*U,a[3]=0,a[4]=(S-L)*b,a[5]=(1-(v+y))*b,a[6]=(x+P)*b,a[7]=0,a[8]=(M+N)*F,a[9]=(x-P)*F,a[10]=(1-(v+R))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Ds.set(a[0],a[1],a[2]).length();const h=Ds.set(a[4],a[5],a[6]).length(),f=Ds.set(a[8],a[9],a[10]).length();l<0&&(u=-u),gi.copy(this);const p=1/u,m=1/h,_=1/f;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=m,gi.elements[5]*=m,gi.elements[6]*=m,gi.elements[8]*=_,gi.elements[9]*=_,gi.elements[10]*=_,t.setFromRotationMatrix(gi),r.x=u,r.y=h,r.z=f,this}makePerspective(e,t,r,a,l,u,h=Li,f=!1){const p=this.elements,m=2*l/(t-e),_=2*l/(r-a),v=(t+e)/(t-e),S=(r+a)/(r-a);let M,R;if(f)M=l/(u-l),R=u*l/(u-l);else if(h===Li)M=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(h===Ro)M=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,h=Li,f=!1){const p=this.elements,m=2/(t-e),_=2/(r-a),v=-(t+e)/(t-e),S=-(r+a)/(r-a);let M,R;if(f)M=1/(u-l),R=u/(u-l);else if(h===Li)M=-2/(u-l),R=-(u+l)/(u-l);else if(h===Ro)M=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};xl.prototype.isMatrix4=!0;let $t=xl;const Ds=new C,gi=new $t,d_=new C(0,0,0),p_=new C(1,1,1),xr=new C,Va=new C,Zn=new C,Yd=new $t,jd=new yr;class Qr{constructor(e=0,t=0,r=0,a=Qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],h=a[8],f=a[1],p=a[5],m=a[9],_=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ft(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-ft(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qr.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const $d=new C,Ns=new yr,Qi=new $t,Wa=new C,Do=new C,g_=new C,v_=new yr,Kd=new C(1,0,0),Zd=new C(0,1,0),Jd=new C(0,0,1),Qd={type:"added"},__={type:"removed"},Is={type:"childadded",child:null},Uu={type:"childremoved",child:null};class xn extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new C,t=new Qr,r=new yr,a=new C(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new ct}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,t){return $d.copy(e).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Wa.copy(e):Wa.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Do,Wa,this.up):Qi.lookAt(Wa,Do,this.up),this.quaternion.setFromRotationMatrix(Qi),a&&(Qi.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Qi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qd),Is.child=e,this.dispatchEvent(Is),Is.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(__),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qd),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(l(e.animations,f))}}if(t){const h=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=a,r;function u(h){const f=[];for(const p in h){const m=h[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}xn.DEFAULT_UP=new C(0,1,0),xn.DEFAULT_MATRIX_AUTO_UPDATE=!0,xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class es extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S_={type:"move"};class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,r),y=this._getHandJoint(p,R);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=m.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&v>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new es;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Fu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,yt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=yt.workingColorSpace){if(e=Pu(e,1),t=ft(t,0,1),r=ft(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Fu(u,l,e+1/3),this.g=Fu(u,l,e),this.b=Fu(u,l,e-1/3)}return yt.colorSpaceToWorking(this,a),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=ep[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return yt.workingToColorSpace(Pn.copy(this),e),Math.round(ft(Pn.r*255,0,255))*65536+Math.round(ft(Pn.g*255,0,255))*256+Math.round(ft(Pn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Pn.copy(this),t);const r=Pn.r,a=Pn.g,l=Pn.b,u=Math.max(r,a,l),h=Math.min(r,a,l);let f,p;const m=(h+u)/2;if(h===u)f=0,p=0;else{const _=u-h;switch(p=m<=.5?_/(u+h):_/(2-u-h),u){case r:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-r)/_+2;break;case l:f=(r-a)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=si){yt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,a=Pn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Xa);const r=Lo(Mr.h,Xa.h,t),a=Lo(Mr.s,Xa.s,t),l=Lo(Mr.l,Xa.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new wt;wt.NAMES=ep;class y_ extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qr,this.environmentIntensity=1,this.environmentRotation=new Qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vi=new C,er=new C,Bu=new C,tr=new C,Us=new C,Os=new C,tp=new C,zu=new C,ku=new C,Hu=new C,Gu=new tn,Vu=new tn,Wu=new tn;class _i{constructor(e=new C,t=new C,r=new C){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),vi.subVectors(e,t),a.cross(vi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){vi.subVectors(a,t),er.subVectors(r,t),Bu.subVectors(e,t);const u=vi.dot(vi),h=vi.dot(er),f=vi.dot(Bu),p=er.dot(er),m=er.dot(Bu),_=u*p-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*f-h*m)*v,M=(u*m-h*f)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,a,l,u,h,f){return this.getBarycoord(e,t,r,a,tr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,tr.x),f.addScaledVector(u,tr.y),f.addScaledVector(h,tr.z),f)}static getInterpolatedAttribute(e,t,r,a,l,u){return Gu.setScalar(0),Vu.setScalar(0),Wu.setScalar(0),Gu.fromBufferAttribute(e,t),Vu.fromBufferAttribute(e,r),Wu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Gu,l.x),u.addScaledVector(Vu,l.y),u.addScaledVector(Wu,l.z),u}static isFrontFacing(e,t,r,a){return vi.subVectors(r,t),er.subVectors(e,t),vi.cross(er).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),vi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return _i.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,h;Us.subVectors(a,r),Os.subVectors(l,r),zu.subVectors(e,r);const f=Us.dot(zu),p=Os.dot(zu);if(f<=0&&p<=0)return t.copy(r);ku.subVectors(e,a);const m=Us.dot(ku),_=Os.dot(ku);if(m>=0&&_<=m)return t.copy(a);const v=f*_-m*p;if(v<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(r).addScaledVector(Us,u);Hu.subVectors(e,l);const S=Us.dot(Hu),M=Os.dot(Hu);if(M>=0&&S<=M)return t.copy(l);const R=S*p-f*M;if(R<=0&&p>=0&&M<=0)return h=p/(p-M),t.copy(r).addScaledVector(Os,h);const x=m*M-S*_;if(x<=0&&_-m>=0&&S-M>=0)return tp.subVectors(l,a),h=(_-m)/(_-m+(S-M)),t.copy(a).addScaledVector(tp,h);const y=1/(x+R+v);return u=R*y,h=v*y,t.copy(r).addScaledVector(Us,u).addScaledVector(Os,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class No{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(l,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ya.copy(r.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),ja.subVectors(this.max,Io),Fs.subVectors(e.a,Io),Bs.subVectors(e.b,Io),zs.subVectors(e.c,Io),Er.subVectors(Bs,Fs),Tr.subVectors(zs,Bs),ts.subVectors(Fs,zs);let t=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-ts.z,ts.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,ts.z,0,-ts.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-ts.y,ts.x,0];return!Xu(t,Fs,Bs,zs,ja)||(t=[1,0,0,0,1,0,0,0,1],!Xu(t,Fs,Bs,zs,ja))?!1:(qa.crossVectors(Er,Tr),t=[qa.x,qa.y,qa.z],Xu(t,Fs,Bs,zs,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new C,new C,new C,new C,new C,new C,new C,new C],Si=new C,Ya=new No,Fs=new C,Bs=new C,zs=new C,Er=new C,Tr=new C,ts=new C,Io=new C,ja=new C,qa=new C,ns=new C;function Xu(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){ns.fromArray(s,l);const h=a.x*Math.abs(ns.x)+a.y*Math.abs(ns.y)+a.z*Math.abs(ns.z),f=e.dot(ns),p=t.dot(ns),m=r.dot(ns);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>h)return!1}return!0}const on=new C,$a=new $e;let x_=0;class Ni extends Sr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Od,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ps(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),a=In(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),a=In(a,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class np extends Ni{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ip extends Ni{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class It extends Ni{constructor(e,t,r){super(new Float32Array(e),t,r)}}const M_=new No,Uo=new C,Yu=new C;class Ka{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):M_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Yu)),this.expandByPoint(Uo.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let E_=0;const oi=new $t,ju=new xn,ks=new C,Jn=new No,Oo=new No,mn=new C;class Mn extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hv(e)?ip:np)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new It(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];Oo.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors(Jn.min,Oo.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,Oo.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(Oo.min),Jn.expandByPoint(Oo.max))}Jn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)mn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(mn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,m=h.count;p<m;p++)mn.fromBufferAttribute(h,p),f&&(ks.fromBufferAttribute(e,p),mn.add(ks)),a=Math.max(a,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],f=[];for(let w=0;w<r.count;w++)h[w]=new C,f[w]=new C;const p=new C,m=new C,_=new C,v=new $e,S=new $e,M=new $e,R=new C,x=new C;function y(w,I,G){p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,I),_.fromBufferAttribute(r,G),v.fromBufferAttribute(l,w),S.fromBufferAttribute(l,I),M.fromBufferAttribute(l,G),m.sub(p),_.sub(p),S.sub(v),M.sub(v);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(R.copy(m).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(z),x.copy(_).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(z),h[w].add(R),h[I].add(R),h[G].add(R),f[w].add(x),f[I].add(x),f[G].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let w=0,I=P.length;w<I;++w){const G=P[w],z=G.start,$=G.count;for(let ie=z,se=z+$;ie<se;ie+=3)y(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const N=new C,L=new C,U=new C,b=new C;function F(w){U.fromBufferAttribute(a,w),b.copy(U);const I=h[w];N.copy(I),N.sub(U.multiplyScalar(U.dot(I))).normalize(),L.crossVectors(b,I);const z=L.dot(f[w])<0?-1:1;u.setXYZW(w,N.x,N.y,N.z,z)}for(let w=0,I=P.length;w<I;++w){const G=P[w],z=G.start,$=G.count;for(let ie=z,se=z+$;ie<se;ie+=3)F(e.getX(ie+0)),F(e.getX(ie+1)),F(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new C,l=new C,u=new C,h=new C,f=new C,p=new C,m=new C,_=new C;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),R=e.getX(v+1),x=e.getX(v+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,x),m.subVectors(u,l),_.subVectors(a,l),m.cross(_),h.fromBufferAttribute(r,M),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),h.add(m),f.add(m),p.add(m),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(R,f.x,f.y,f.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),_.subVectors(a,l),m.cross(_),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(h,f){const p=h.array,m=h.itemSize,_=h.normalized,v=new p.constructor(f.length*m);let S=0,M=0;for(let R=0,x=f.length;R<x;R++){h.isInterleavedBufferAttribute?S=f[R]*h.data.stride+h.offset:S=f[R]*m;for(let y=0;y<m;y++)v[M++]=p[S++]}return new Ni(v,m,_)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,r=this.index.array,a=this.attributes;for(const h in a){const f=a[h],p=e(f,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let m=0,_=p.length;m<_;m++){const v=p[m],S=e(v,r);f.push(S)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,f=u.length;h<f;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];m.push(S.toJSON(e.data))}m.length>0&&(a[f]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],_=l[p];for(let v=0,S=_.length;v<S;v++)m.push(_[v].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let T_=0;class Fo extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=Ts,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Dc,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lc&&(r.blendSrc=this.blendSrc),this.blendDst!==Dc&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new C,qu=new C,Za=new C,wr=new C,$u=new C,Ja=new C,Ku=new C;class Zu{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){qu.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(qu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Za),h=wr.dot(this.direction),f=-wr.dot(Za),p=wr.lengthSq(),m=Math.abs(1-u*u);let _,v,S,M;if(m>0)if(_=u*f-h,v=u*h-f,M=l*m,_>=0)if(v>=-M)if(v<=M){const R=1/m;_*=R,v*=R,S=_*(_+u*v+2*h)+v*(u*_+v+2*f)+p}else v=l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*f)+p;else v=-l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*f)+p;else v<=-M?(_=Math.max(0,-(-u*l+h)),v=_>0?-l:Math.min(Math.max(-l,-f),l),S=-_*_+v*(v+2*f)+p):v<=M?(_=0,v=Math.min(Math.max(-l,-f),l),S=v*(v+2*f)+p):(_=Math.max(0,-(u*l+h)),v=_>0?l:Math.min(Math.max(-l,-f),l),S=-_*_+v*(v+2*f)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(qu).addScaledVector(Za,v),S}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const r=ir.dot(this.direction),a=ir.dot(ir)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),h=r-u,f=r+u;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,h,f;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(h=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),r>f||h>a)||((h>r||r!==r)&&(r=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,r,a,l){$u.subVectors(t,e),Ja.subVectors(r,e),Ku.crossVectors($u,Ja);let u=this.direction.dot(Ku),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;wr.subVectors(this.origin,e);const f=h*this.direction.dot(Ja.crossVectors(wr,Ja));if(f<0)return null;const p=h*this.direction.dot($u.cross(wr));if(p<0||f+p>u)return null;const m=-h*wr.dot(Ku);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut extends Fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rp=new $t,is=new Zu,Qa=new Ka,sp=new C,el=new C,tl=new C,nl=new C,Ju=new C,il=new C,op=new C,rl=new C;class nt extends xn{constructor(e=new Mn,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){il.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=h[f],_=l[f];m!==0&&(Ju.fromBufferAttribute(_,e),u?il.addScaledVector(Ju,m):il.addScaledVector(Ju.sub(t),m))}t.add(il)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Qa.copy(r.boundingSphere),Qa.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Qa.containsPoint(is.origin)===!1&&(is.intersectSphere(Qa,sp)===null||is.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(rp.copy(l).invert(),is.copy(e.ray).applyMatrix4(rp),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,R=v.length;M<R;M++){const x=v[M],y=u[x.materialIndex],P=Math.max(x.start,S.start),N=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let L=P,U=N;L<U;L+=3){const b=h.getX(L),F=h.getX(L+1),w=h.getX(L+2);a=sl(this,y,e,r,p,m,_,b,F,w),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let x=M,y=R;x<y;x+=3){const P=h.getX(x),N=h.getX(x+1),L=h.getX(x+2);a=sl(this,u,e,r,p,m,_,P,N,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,R=v.length;M<R;M++){const x=v[M],y=u[x.materialIndex],P=Math.max(x.start,S.start),N=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let L=P,U=N;L<U;L+=3){const b=L,F=L+1,w=L+2;a=sl(this,y,e,r,p,m,_,b,F,w),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let x=M,y=R;x<y;x+=3){const P=x,N=x+1,L=x+2;a=sl(this,u,e,r,p,m,_,P,N,L),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function w_(s,e,t,r,a,l,u,h){let f;if(e.side===kn?f=r.intersectTriangle(u,l,a,!0,h):f=r.intersectTriangle(a,l,u,e.side===vr,h),f===null)return null;rl.copy(h),rl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(rl);return p<t.near||p>t.far?null:{distance:p,point:rl.clone(),object:s}}function sl(s,e,t,r,a,l,u,h,f,p){s.getVertexPosition(h,el),s.getVertexPosition(f,tl),s.getVertexPosition(p,nl);const m=w_(s,e,t,r,el,tl,nl,op);if(m){const _=new C;_i.getBarycoord(op,el,tl,nl,_),a&&(m.uv=_i.getInterpolatedAttribute(a,h,f,p,_,new $e)),l&&(m.uv1=_i.getInterpolatedAttribute(l,h,f,p,_,new $e)),u&&(m.normal=_i.getInterpolatedAttribute(u,h,f,p,_,new C),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:h,b:f,c:p,normal:new C,materialIndex:0};_i.getNormal(el,tl,nl,v.normal),m.face=v,m.barycoord=_}return m}class A_ extends en{constructor(e=null,t=1,r=1,a,l,u,h,f,p=yn,m=yn,_,v){super(null,u,h,f,p,m,a,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=new C,R_=new C,C_=new ct;class Ar{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Qu.subVectors(r,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Qu),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||C_.getNormalMatrix(e),a=this.coplanarPoint(Qu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Ka,P_=new $e(.5,.5),ol=new C;class eh{constructor(e=new Ar,t=new Ar,r=new Ar,a=new Ar,l=new Ar,u=new Ar){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(a),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Li,r=!1){const a=this.planes,l=e.elements,u=l[0],h=l[1],f=l[2],p=l[3],m=l[4],_=l[5],v=l[6],S=l[7],M=l[8],R=l[9],x=l[10],y=l[11],P=l[12],N=l[13],L=l[14],U=l[15];if(a[0].setComponents(p-u,S-m,y-M,U-P).normalize(),a[1].setComponents(p+u,S+m,y+M,U+P).normalize(),a[2].setComponents(p+h,S+_,y+R,U+N).normalize(),a[3].setComponents(p-h,S-_,y-R,U-N).normalize(),r)a[4].setComponents(f,v,x,L).normalize(),a[5].setComponents(p-f,S-v,y-x,U-L).normalize();else if(a[4].setComponents(p-f,S-v,y-x,U-L).normalize(),t===Li)a[5].setComponents(p+f,S+v,y+x,U+L).normalize();else if(t===Ro)a[5].setComponents(f,v,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=P_.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(ol.x=a.normal.x>0?e.max.x:e.min.x,ol.y=a.normal.y>0?e.max.y:e.min.y,ol.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ap extends Fo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new C,ll=new C,lp=new $t,Bo=new Zu,cl=new Ka,th=new C,cp=new C;class b_ extends xn{constructor(e=new Mn,t=new ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)al.fromBufferAttribute(t,a-1),ll.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=al.distanceTo(ll);e.setAttribute("lineDistance",new It(r,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cl.copy(r.boundingSphere),cl.applyMatrix4(a),cl.radius+=l,e.ray.intersectsSphere(cl)===!1)return;lp.copy(a).invert(),Bo.copy(e.ray).applyMatrix4(lp);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=this.isLineSegments?2:1,m=r.index,v=r.attributes.position;if(m!==null){const S=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let R=S,x=M-1;R<x;R+=p){const y=m.getX(R),P=m.getX(R+1),N=ul(this,e,Bo,f,y,P,R);N&&t.push(N)}if(this.isLineLoop){const R=m.getX(M-1),x=m.getX(S),y=ul(this,e,Bo,f,R,x,M-1);y&&t.push(y)}}else{const S=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let R=S,x=M-1;R<x;R+=p){const y=ul(this,e,Bo,f,R,R+1,R);y&&t.push(y)}if(this.isLineLoop){const R=ul(this,e,Bo,f,M-1,S,M-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function ul(s,e,t,r,a,l,u){const h=s.geometry.attributes.position;if(al.fromBufferAttribute(h,a),ll.fromBufferAttribute(h,l),t.distanceSqToSegment(al,ll,th,cp)>r)return;th.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(th);if(!(p<e.near||p>e.far))return{distance:p,point:cp.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const up=new C,hp=new C;class L_ extends b_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)up.fromBufferAttribute(t,a),hp.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+up.distanceTo(hp);e.setAttribute("lineDistance",new It(r,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fp extends en{constructor(e=[],t=$r,r,a,l,u,h,f,p,m){super(e,t,r,a,l,u,h,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hs extends en{constructor(e,t,r=Pi,a,l,u,h=yn,f=yn,p,m=Zi,_=1){if(m!==Zi&&m!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,a,l,u,h,f,m,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Du(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class D_ extends Hs{constructor(e,t=Pi,r=$r,a,l,u=yn,h=yn,f,p=Zi){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,r,a,l,u,h,f,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dp extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zo extends Mn{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const h=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],m=[],_=[];let v=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,a,u,2),M("x","z","y",1,-1,e,r,-t,a,u,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(_,2));function M(R,x,y,P,N,L,U,b,F,w,I){const G=L/F,z=U/w,$=L/2,ie=U/2,se=b/2,Y=F+1,J=w+1;let K=0,j=0;const le=new C;for(let ce=0;ce<J;ce++){const B=ce*z-ie;for(let ee=0;ee<Y;ee++){const Ue=ee*G-$;le[R]=Ue*P,le[x]=B*N,le[y]=se,p.push(le.x,le.y,le.z),le[R]=0,le[x]=0,le[y]=b>0?1:-1,m.push(le.x,le.y,le.z),_.push(ee/F),_.push(1-ce/w),K+=1}}for(let ce=0;ce<w;ce++)for(let B=0;B<F;B++){const ee=v+B+Y*ce,Ue=v+B+Y*(ce+1),He=v+(B+1)+Y*(ce+1),De=v+(B+1)+Y*ce;f.push(ee,Ue,De),f.push(Ue,He,De),j+=6}h.addGroup(S,j,I),S+=j,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rr extends Mn{constructor(e=1,t=1,r=4,a=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:a,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),l=Math.max(1,Math.floor(l));const u=[],h=[],f=[],p=[],m=t/2,_=Math.PI/2*e,v=t,S=2*_+v,M=r*2+l,R=a+1,x=new C,y=new C;for(let P=0;P<=M;P++){let N=0,L=0,U=0,b=0;if(P<=r){const I=P/r,G=I*Math.PI/2;L=-m-e*Math.cos(G),U=e*Math.sin(G),b=-e*Math.cos(G),N=I*_}else if(P<=r+l){const I=(P-r)/l;L=-m+I*t,U=e,b=0,N=_+I*v}else{const I=(P-r-l)/r,G=I*Math.PI/2;L=m+e*Math.sin(G),U=e*Math.cos(G),b=e*Math.sin(G),N=_+v+I*_}const F=Math.max(0,Math.min(1,N/S));let w=0;P===0?w=.5/a:P===M&&(w=-.5/a);for(let I=0;I<=a;I++){const G=I/a,z=G*Math.PI*2,$=Math.sin(z),ie=Math.cos(z);y.x=-U*ie,y.y=L,y.z=U*$,h.push(y.x,y.y,y.z),x.set(-U*ie,b,U*$),x.normalize(),f.push(x.x,x.y,x.z),p.push(G+w,F)}if(P>0){const I=(P-1)*R;for(let G=0;G<a;G++){const z=I+G,$=I+G+1,ie=P*R+G,se=P*R+G+1;u.push(z,$,ie),u.push($,se,ie)}}}this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class sr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let h=0,f=l-1,p;for(;h<=f;)if(a=Math.floor(h+(f-h)/2),p=r[a]-u,p<0)h=a+1;else if(p>0)f=a-1;else{f=a;break}if(a=f,r[a]===u)return a/(l-1);const m=r[a],v=r[a+1]-m,S=(u-m)/v;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const u=this.getPoint(a),h=this.getPoint(l),f=t||(u.isVector2?new $e:new C);return f.copy(h).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new C,a=[],l=[],u=[],h=new C,f=new $t;for(let S=0;S<=e;S++){const M=S/e;a[S]=this.getTangentAt(M,new C)}l[0]=new C,u[0]=new C;let p=Number.MAX_VALUE;const m=Math.abs(a[0].x),_=Math.abs(a[0].y),v=Math.abs(a[0].z);m<=p&&(p=m,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),v<=p&&r.set(0,0,1),h.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],h),u[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),h.crossVectors(a[S-1],a[S]),h.length()>Number.EPSILON){h.normalize();const M=Math.acos(ft(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(f.makeRotationAxis(h,M))}u[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(ft(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(h.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(a[M],S*M)),u[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pp extends sr{constructor(e=0,t=0,r=1,a=1,l=0,u=Math.PI*2,h=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=h,this.aRotation=f}getPoint(e,t=new $e){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(u?l=0:l=a),this.aClockwise===!0&&!u&&(l===a?l=-a:l=l-a);const h=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const m=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=f-this.aX,S=p-this.aY;f=v*m-S*_+this.aX,p=v*_+S*m+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class N_ extends pp{constructor(e,t,r,a,l,u){super(e,t,r,r,a,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function nh(){let s=0,e=0,t=0,r=0;function a(l,u,h,f){s=l,e=h,t=-3*l+3*u-2*h-f,r=2*l-2*u+h+f}return{initCatmullRom:function(l,u,h,f,p){a(u,h,p*(h-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,h,f,p,m,_){let v=(u-l)/p-(h-l)/(p+m)+(h-u)/m,S=(h-u)/m-(f-u)/(m+_)+(f-h)/_;v*=m,S*=m,a(u,h,v,S)},calc:function(l){const u=l*l,h=u*l;return s+e*l+t*u+r*h}}}const mp=new C,gp=new C,ih=new nh,rh=new nh,sh=new nh;class nn extends sr{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new C){const r=t,a=this.points,l=a.length,u=(l-(this.closed?0:1))*e;let h=Math.floor(u),f=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:f===0&&h===l-1&&(h=l-2,f=1);let p,m;this.closed||h>0?p=a[(h-1)%l]:(gp.subVectors(a[0],a[1]).add(a[0]),p=gp);const _=a[h%l],v=a[(h+1)%l];if(this.closed||h+2<l?m=a[(h+2)%l]:(mp.subVectors(a[l-1],a[l-2]).add(a[l-1]),m=mp),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(_),S),R=Math.pow(_.distanceToSquared(v),S),x=Math.pow(v.distanceToSquared(m),S);R<1e-4&&(R=1),M<1e-4&&(M=R),x<1e-4&&(x=R),ih.initNonuniformCatmullRom(p.x,_.x,v.x,m.x,M,R,x),rh.initNonuniformCatmullRom(p.y,_.y,v.y,m.y,M,R,x),sh.initNonuniformCatmullRom(p.z,_.z,v.z,m.z,M,R,x)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(p.x,_.x,v.x,m.x,this.tension),rh.initCatmullRom(p.y,_.y,v.y,m.y,this.tension),sh.initCatmullRom(p.z,_.z,v.z,m.z,this.tension));return r.set(ih.calc(f),rh.calc(f),sh.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new C().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vp(s,e,t,r,a){const l=(r-e)*.5,u=(a-t)*.5,h=s*s,f=s*h;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*h+l*s+t}function I_(s,e){const t=1-s;return t*t*e}function U_(s,e){return 2*(1-s)*s*e}function O_(s,e){return s*s*e}function ko(s,e,t,r){return I_(s,e)+U_(s,t)+O_(s,r)}function F_(s,e){const t=1-s;return t*t*t*e}function B_(s,e){const t=1-s;return 3*t*t*s*e}function z_(s,e){return 3*(1-s)*s*s*e}function k_(s,e){return s*s*s*e}function Ho(s,e,t,r,a){return F_(s,e)+B_(s,t)+z_(s,r)+k_(s,a)}class H_ extends sr{constructor(e=new $e,t=new $e,r=new $e,a=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new $e){const r=t,a=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(Ho(e,a.x,l.x,u.x,h.x),Ho(e,a.y,l.y,u.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class G_ extends sr{constructor(e=new C,t=new C,r=new C,a=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new C){const r=t,a=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(Ho(e,a.x,l.x,u.x,h.x),Ho(e,a.y,l.y,u.y,h.y),Ho(e,a.z,l.z,u.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class V_ extends sr{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class W_ extends sr{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X_ extends sr{constructor(e=new $e,t=new $e,r=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new $e){const r=t,a=this.v0,l=this.v1,u=this.v2;return r.set(ko(e,a.x,l.x,u.x),ko(e,a.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _p extends sr{constructor(e=new C,t=new C,r=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new C){const r=t,a=this.v0,l=this.v1,u=this.v2;return r.set(ko(e,a.x,l.x,u.x),ko(e,a.y,l.y,u.y),ko(e,a.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y_ extends sr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const r=t,a=this.points,l=(a.length-1)*e,u=Math.floor(l),h=l-u,f=a[u===0?u:u-1],p=a[u],m=a[u>a.length-2?a.length-1:u+1],_=a[u>a.length-3?a.length-1:u+2];return r.set(vp(h,f.x,p.x,m.x,_.x),vp(h,f.y,p.y,m.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new $e().fromArray(a))}return this}}var j_=Object.freeze({__proto__:null,ArcCurve:N_,CatmullRomCurve3:nn,CubicBezierCurve:H_,CubicBezierCurve3:G_,EllipseCurve:pp,LineCurve:V_,LineCurve3:W_,QuadraticBezierCurve:X_,QuadraticBezierCurve3:_p,SplineCurve:Y_});class hl extends Mn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,h=Math.floor(r),f=Math.floor(a),p=h+1,m=f+1,_=e/h,v=t/f,S=[],M=[],R=[],x=[];for(let y=0;y<m;y++){const P=y*v-u;for(let N=0;N<p;N++){const L=N*_-l;M.push(L,-P,0),R.push(0,0,1),x.push(N/h),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let P=0;P<h;P++){const N=P+p*y,L=P+p*(y+1),U=P+1+p*(y+1),b=P+1+p*y;S.push(N,L,b),S.push(L,U,b)}this.setIndex(S),this.setAttribute("position",new It(M,3)),this.setAttribute("normal",new It(R,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hn extends Mn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+h,Math.PI);let p=0;const m=[],_=new C,v=new C,S=[],M=[],R=[],x=[];for(let y=0;y<=r;y++){const P=[],N=y/r;let L=0;y===0&&u===0?L=.5/t:y===r&&f===Math.PI&&(L=-.5/t);for(let U=0;U<=t;U++){const b=U/t;_.x=-e*Math.cos(a+b*l)*Math.sin(u+N*h),_.y=e*Math.cos(u+N*h),_.z=e*Math.sin(a+b*l)*Math.sin(u+N*h),M.push(_.x,_.y,_.z),v.copy(_).normalize(),R.push(v.x,v.y,v.z),x.push(b+L,1-N),P.push(p++)}m.push(P)}for(let y=0;y<r;y++)for(let P=0;P<t;P++){const N=m[y][P+1],L=m[y][P],U=m[y+1][P],b=m[y+1][P+1];(y!==0||u>0)&&S.push(N,L,b),(y!==r-1||f<Math.PI)&&S.push(L,U,b)}this.setIndex(S),this.setAttribute("position",new It(M,3)),this.setAttribute("normal",new It(R,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ss extends Mn{constructor(e=new _p(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new C,f=new C,p=new $e;let m=new C;const _=[],v=[],S=[],M=[];R(),this.setIndex(M),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(S,2));function R(){for(let N=0;N<t;N++)x(N);x(l===!1?t:0),P(),y()}function x(N){m=e.getPointAt(N/t,m);const L=u.normals[N],U=u.binormals[N];for(let b=0;b<=a;b++){const F=b/a*Math.PI*2,w=Math.sin(F),I=-Math.cos(F);f.x=I*L.x+w*U.x,f.y=I*L.y+w*U.y,f.z=I*L.z+w*U.z,f.normalize(),v.push(f.x,f.y,f.z),h.x=m.x+r*f.x,h.y=m.y+r*f.y,h.z=m.z+r*f.z,_.push(h.x,h.y,h.z)}}function y(){for(let N=1;N<=t;N++)for(let L=1;L<=a;L++){const U=(a+1)*(N-1)+(L-1),b=(a+1)*N+(L-1),F=(a+1)*N+L,w=(a+1)*(N-1)+L;M.push(U,b,w),M.push(b,F,w)}}function P(){for(let N=0;N<=t;N++)for(let L=0;L<=a;L++)p.x=N/t,p.y=L/a,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ss(new j_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Gs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(Sp(a))a.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Sp(a[0])){const l=[];for(let u=0,h=a.length;u<h;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Un(s){const e={};for(let t=0;t<s.length;t++){const r=Gs(s[t]);for(const a in r)e[a]=r[a]}return e}function Sp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function q_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const $_={clone:Gs,merge:Un};var K_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K_,this.fragmentShader=Z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class J_ extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Q_ extends Fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eS extends Fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(xp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!xp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function xp(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class tS{constructor(e,t,r){const a=this;let l=!1,u=0,h=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(m){h++,l===!1&&a.onStart!==void 0&&a.onStart(m,u,h),l=!0},this.itemEnd=function(m){u++,a.onProgress!==void 0&&a.onProgress(m,u,h),u===h&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,_){return p.push(m,_),this},this.removeHandler=function(m){const _=p.indexOf(m);return _!==-1&&p.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=p.length;_<v;_+=2){const S=p[_],M=p[_+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const nS=new tS;class ah{constructor(e){this.manager=e!==void 0?e:nS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,l){r.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ah.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vs=new WeakMap;class iS extends ah{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=oh.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let _=Vs.get(u);_===void 0&&(_=[],Vs.set(u,_)),_.push({onLoad:t,onError:a})}return u}const h=Co("img");function f(){m(),t&&t(this);const _=Vs.get(this)||[];for(let v=0;v<_.length;v++){const S=_[v];S.onLoad&&S.onLoad(this)}Vs.delete(this),l.manager.itemEnd(e)}function p(_){m(),a&&a(_),oh.remove(`image:${e}`);const v=Vs.get(this)||[];for(let S=0;S<v.length;S++){const M=v[S];M.onError&&M.onError(_)}Vs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){h.removeEventListener("load",f,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",f,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),oh.add(`image:${e}`,h),l.manager.itemStart(e),h.src=e,h}}class Ws extends ah{constructor(e){super(e)}load(e,t,r,a){const l=new en,u=new iS(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){l.image=h,l.needsUpdate=!0,t!==void 0&&t(l)},r,a),l}}class Mp extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const lh=new $t,Ep=new C,Tp=new C;class rS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tp),t.updateMatrixWorld(),lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ro||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fl=new C,dl=new yr,Ui=new C;class wp extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fl,dl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,dl,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(fl,dl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,dl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new C,Ap=new $e,Rp=new $e;class ai extends wp{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,Rp),t.subVectors(Rp,Ap)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Po*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/f,t-=u.offsetY*r/p,a*=u.width/f,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ch extends wp{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=m*this.view.offsetY,f=h-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sS extends rS{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oS extends Mp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new sS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class aS extends Mp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,Ys=1;class lS extends xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ai(Xs,Ys,e,t);a.layers=this.layers,this.add(a);const l=new ai(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const u=new ai(Xs,Ys,e,t);u.layers=this.layers,this.add(u);const h=new ai(Xs,Ys,e,t);h.layers=this.layers,this.add(h);const f=new ai(Xs,Ys,e,t);f.layers=this.layers,this.add(f);const p=new ai(Xs,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,h,f]=t;for(const p of t)this.remove(p);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ro)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,f,p,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(_,v,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class cS extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Cp{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ah=class Ah{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};Ah.prototype.isMatrix2=!0;let Pp=Ah;class uS extends L_{constructor(e=10,t=10,r=4473924,a=8947848){r=new wt(r),a=new wt(a);const l=t/2,u=e/t,h=e/2,f=[],p=[];for(let v=0,S=0,M=-h;v<=t;v++,M+=u){f.push(-h,0,M,h,0,M),f.push(M,0,-h,M,0,h);const R=v===l?r:a;R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3}const m=new Mn;m.setAttribute("position",new It(f,3)),m.setAttribute("color",new It(p,3));const _=new ap({vertexColors:!0,toneMapped:!1});super(m,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class hS extends Sr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bp(s,e,t,r){const a=fS(r);switch(t){case Ld:return s*e;case Nd:return s*e/a.components*a.byteLength;case jc:return s*e/a.components*a.byteLength;case Jr:return s*e*2/a.components*a.byteLength;case qc:return s*e*2/a.components*a.byteLength;case Dd:return s*e*3/a.components*a.byteLength;case mi:return s*e*4/a.components*a.byteLength;case $c:return s*e*4/a.components*a.byteLength;case Ia:case Ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Qc:return Math.max(s,16)*Math.max(e,8)/4;case Kc:case Jc:return Math.max(s,8)*Math.max(e,8)/2;case eu:case tu:case iu:case ru:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nu:case Ba:case su:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case fu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _u:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Su:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yu:case xu:case Mu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Eu:case Tu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case za:case wu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fS(s){switch(s){case Kn:case Rd:return{byteLength:1,components:1};case wo:case Cd:case Ki:return{byteLength:2,components:1};case Xc:case Yc:return{byteLength:2,components:4};case Pi:case Wc:case bi:return{byteLength:4,components:1};case Pd:case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}})),typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lp(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dS(s){const e=new WeakMap;function t(h,f){const p=h.array,m=h.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,p,m),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,f,p){const m=f.array,_=f.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,m);else{_.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<_.length;S++){const M=_[v],R=_[S];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++v,_[v]=R)}_.length=v+1;for(let S=0,M=_.length;S<M;S++){const R=_[S];s.bufferSubData(p,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function u(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,f),p.version=h.version}}return{get:a,remove:l,update:u}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
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
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
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
#endif`,xS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS=`#ifdef USE_BATCHING
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
#endif`,ES=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RS=`#ifdef USE_IRIDESCENCE
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
#endif`,CS=`#ifdef USE_BUMPMAP
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
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,FS=`#define PI 3.141592653589793
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
} // validated`,BS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zS=`vec3 transformedNormal = objectNormal;
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
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
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
}`,ny=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,oy=`#ifdef USE_ENVMAP
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
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
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
#endif`,fy=`uniform sampler2D dfgLUT;
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
}`,dy=`
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
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
#endif`,my=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,My=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ty=`#if defined( USE_POINTS_UV )
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
#endif`,wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ry=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
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
#endif`,By=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qy=`float getShadowMask() {
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dt={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:vS,alphatest_fragment:_S,alphatest_pars_fragment:SS,aomap_fragment:yS,aomap_pars_fragment:xS,batching_pars_vertex:MS,batching_vertex:ES,begin_vertex:TS,beginnormal_vertex:wS,bsdfs:AS,iridescence_fragment:RS,bumpmap_pars_fragment:CS,clipping_planes_fragment:PS,clipping_planes_pars_fragment:bS,clipping_planes_pars_vertex:LS,clipping_planes_vertex:DS,color_fragment:NS,color_pars_fragment:IS,color_pars_vertex:US,color_vertex:OS,common:FS,cube_uv_reflection_fragment:BS,defaultnormal_vertex:zS,displacementmap_pars_vertex:kS,displacementmap_vertex:HS,emissivemap_fragment:GS,emissivemap_pars_fragment:VS,colorspace_fragment:WS,colorspace_pars_fragment:XS,envmap_fragment:YS,envmap_common_pars_fragment:jS,envmap_pars_fragment:qS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:oy,envmap_vertex:KS,fog_vertex:ZS,fog_pars_vertex:JS,fog_fragment:QS,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_pars_fragment:ny,lights_lambert_fragment:iy,lights_lambert_pars_fragment:ry,lights_pars_begin:sy,lights_toon_fragment:ay,lights_toon_pars_fragment:ly,lights_phong_fragment:cy,lights_phong_pars_fragment:uy,lights_physical_fragment:hy,lights_physical_pars_fragment:fy,lights_fragment_begin:dy,lights_fragment_maps:py,lights_fragment_end:my,lightprobes_pars_fragment:gy,logdepthbuf_fragment:vy,logdepthbuf_pars_fragment:_y,logdepthbuf_pars_vertex:Sy,logdepthbuf_vertex:yy,map_fragment:xy,map_pars_fragment:My,map_particle_fragment:Ey,map_particle_pars_fragment:Ty,metalnessmap_fragment:wy,metalnessmap_pars_fragment:Ay,morphinstance_vertex:Ry,morphcolor_vertex:Cy,morphnormal_vertex:Py,morphtarget_pars_vertex:by,morphtarget_vertex:Ly,normal_fragment_begin:Dy,normal_fragment_maps:Ny,normal_pars_fragment:Iy,normal_pars_vertex:Uy,normal_vertex:Oy,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:By,clearcoat_normal_fragment_maps:zy,clearcoat_pars_fragment:ky,iridescence_pars_fragment:Hy,opaque_fragment:Gy,packing:Vy,premultiplied_alpha_fragment:Wy,project_vertex:Xy,dithering_fragment:Yy,dithering_pars_fragment:jy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:$y,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Zy,shadowmap_vertex:Jy,shadowmask_pars_fragment:Qy,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:r1,specularmap_pars_fragment:s1,tonemapping_fragment:o1,tonemapping_pars_fragment:a1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:u1,uv_pars_vertex:h1,uv_vertex:f1,worldpos_vertex:d1,background_vert:`varying vec2 vUv;
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
}`},Le={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Oi={basic:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Un([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Un([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new wt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Un([Le.points,Le.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Un([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Un([Le.common,Le.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Un([Le.sprite,Le.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Un([Le.common,Le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Un([Le.lights,Le.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Oi.physical={uniforms:Un([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const pl={r:0,b:0,g:0},p1=new $t,Dp=new ct;Dp.set(-1,0,0,0,1,0,0,0,1);function m1(s,e,t,r,a,l){const u=new wt(0);let h=a===!0?0:1,f,p,m=null,_=0,v=null;function S(P){let N=P.isScene===!0?P.background:null;if(N&&N.isTexture){const L=P.backgroundBlurriness>0;N=e.get(N,L)}return N}function M(P){let N=!1;const L=S(P);L===null?x(u,h):L&&L.isColor&&(x(L,1),N=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(P,N){const L=S(N);L&&(L.isCubeTexture||L.mapping===Da)?(p===void 0&&(p=new nt(new zo(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Gs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,b,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Dp),p.material.toneMapped=yt.getTransfer(L.colorSpace)!==bt,(m!==L||_!==L.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,m=L,_=L.version,v=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new nt(new hl(2,2),new Ii({name:"BackgroundMaterial",uniforms:Gs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.toneMapped=yt.getTransfer(L.colorSpace)!==bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(m!==L||_!==L.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,m=L,_=L.version,v=s.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function x(P,N){P.getRGB(pl,yp(s)),t.buffers.color.setClear(pl.r,pl.g,pl.b,N,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,N=1){u.set(P),h=N,x(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,x(u,h)},render:M,addToRenderList:R,dispose:y}}function g1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let l=a,u=!1;function h(z,$,ie,se,Y){let J=!1;const K=_(z,se,ie,$);l!==K&&(l=K,p(l.object)),J=S(z,se,ie,Y),J&&M(z,se,ie,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,L(z,$,ie,se),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return s.createVertexArray()}function p(z){return s.bindVertexArray(z)}function m(z){return s.deleteVertexArray(z)}function _(z,$,ie,se){const Y=se.wireframe===!0;let J=r[$.id];J===void 0&&(J={},r[$.id]=J);const K=z.isInstancedMesh===!0?z.id:0;let j=J[K];j===void 0&&(j={},J[K]=j);let le=j[ie.id];le===void 0&&(le={},j[ie.id]=le);let ce=le[Y];return ce===void 0&&(ce=v(f()),le[Y]=ce),ce}function v(z){const $=[],ie=[],se=[];for(let Y=0;Y<t;Y++)$[Y]=0,ie[Y]=0,se[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ie,attributeDivisors:se,object:z,attributes:{},index:null}}function S(z,$,ie,se){const Y=l.attributes,J=$.attributes;let K=0;const j=ie.getAttributes();for(const le in j)if(j[le].location>=0){const B=Y[le];let ee=J[le];if(ee===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor)),B===void 0||B.attribute!==ee||ee&&B.data!==ee.data)return!0;K++}return l.attributesNum!==K||l.index!==se}function M(z,$,ie,se){const Y={},J=$.attributes;let K=0;const j=ie.getAttributes();for(const le in j)if(j[le].location>=0){let B=J[le];B===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(B=z.instanceColor));const ee={};ee.attribute=B,B&&B.data&&(ee.data=B.data),Y[le]=ee,K++}l.attributes=Y,l.attributesNum=K,l.index=se}function R(){const z=l.newAttributes;for(let $=0,ie=z.length;$<ie;$++)z[$]=0}function x(z){y(z,0)}function y(z,$){const ie=l.newAttributes,se=l.enabledAttributes,Y=l.attributeDivisors;ie[z]=1,se[z]===0&&(s.enableVertexAttribArray(z),se[z]=1),Y[z]!==$&&(s.vertexAttribDivisor(z,$),Y[z]=$)}function P(){const z=l.newAttributes,$=l.enabledAttributes;for(let ie=0,se=$.length;ie<se;ie++)$[ie]!==z[ie]&&(s.disableVertexAttribArray(ie),$[ie]=0)}function N(z,$,ie,se,Y,J,K){K===!0?s.vertexAttribIPointer(z,$,ie,Y,J):s.vertexAttribPointer(z,$,ie,se,Y,J)}function L(z,$,ie,se){R();const Y=se.attributes,J=ie.getAttributes(),K=$.defaultAttributeValues;for(const j in J){const le=J[j];if(le.location>=0){let ce=Y[j];if(ce===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){const B=ce.normalized,ee=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const He=Ue.buffer,De=Ue.type,ae=Ue.bytesPerElement,Se=De===s.INT||De===s.UNSIGNED_INT||ce.gpuType===Wc;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Ne=pe.stride,Ze=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let Je=0;Je<le.locationSize;Je++)y(le.location+Je,pe.meshPerAttribute);z.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Je=0;Je<le.locationSize;Je++)x(le.location+Je);s.bindBuffer(s.ARRAY_BUFFER,He);for(let Je=0;Je<le.locationSize;Je++)N(le.location+Je,ee/le.locationSize,De,B,Ne*ae,(Ze+ee/le.locationSize*Je)*ae,Se)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<le.locationSize;pe++)y(le.location+pe,ce.meshPerAttribute);z.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<le.locationSize;pe++)x(le.location+pe);s.bindBuffer(s.ARRAY_BUFFER,He);for(let pe=0;pe<le.locationSize;pe++)N(le.location+pe,ee/le.locationSize,De,B,ee*ae,ee/le.locationSize*pe*ae,Se)}}else if(K!==void 0){const B=K[j];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(le.location,B);break;case 3:s.vertexAttrib3fv(le.location,B);break;case 4:s.vertexAttrib4fv(le.location,B);break;default:s.vertexAttrib1fv(le.location,B)}}}}P()}function U(){I();for(const z in r){const $=r[z];for(const ie in $){const se=$[ie];for(const Y in se){const J=se[Y];for(const K in J)m(J[K].object),delete J[K];delete se[Y]}}delete r[z]}}function b(z){if(r[z.id]===void 0)return;const $=r[z.id];for(const ie in $){const se=$[ie];for(const Y in se){const J=se[Y];for(const K in J)m(J[K].object),delete J[K];delete se[Y]}}delete r[z.id]}function F(z){for(const $ in r){const ie=r[$];for(const se in ie){const Y=ie[se];if(Y[z.id]===void 0)continue;const J=Y[z.id];for(const K in J)m(J[K].object),delete J[K];delete Y[z.id]}}}function w(z){for(const $ in r){const ie=r[$],se=z.isInstancedMesh===!0?z.id:0,Y=ie[se];if(Y!==void 0){for(const J in Y){const K=Y[J];for(const j in K)m(K[j].object),delete K[j];delete Y[J]}delete ie[se],Object.keys(ie).length===0&&delete r[$]}}}function I(){G(),u=!0,l!==a&&(l=a,p(l.object))}function G(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:I,resetDefaultState:G,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:x,disableUnusedAttributes:P}}function v1(s,e,t){let r;function a(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function u(f,p,m){m!==0&&(s.drawArraysInstanced(r,f,p,m),t.update(p,r,m))}function h(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,m);let v=0;for(let S=0;S<m;S++)v+=p[S];t.update(v,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function _1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(F){return!(F!==mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const w=F===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Kn&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==bi&&!w)}function f(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(Qe("WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:L,maxSamples:U,samples:b}}function S1(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Ar,h=new ct,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||a;return a=v,r=_.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,S){const M=_.clippingPlanes,R=_.clipIntersection,x=_.clipShadows,y=s.get(_);if(!a||M===null||M.length===0||l&&!x)l?m(null):p();else{const P=l?0:r,N=P*4;let L=y.clippingState||null;f.value=L,L=m(M,v,N,S);for(let U=0;U!==N;++U)L[U]=t[U];y.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(_,v,S,M){const R=_!==null?_.length:0;let x=null;if(R!==0){if(x=f.value,M!==!0||x===null){const y=S+R*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(x===null||x.length<y)&&(x=new Float32Array(y));for(let N=0,L=S;N!==R;++N,L+=4)u.copy(_[N]).applyMatrix4(P,h),u.normal.toArray(x,L),x[L+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const Cr=4,Np=[.125,.215,.35,.446,.526,.582],os=20,y1=256,Go=new ch,Ip=new wt;let uh=null,hh=0,fh=0,dh=!1;const x1=new C;class Up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:h=x1}=l;uh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,a,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,hh,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ki,format:mi,colorSpace:ka,depthBuffer:!1},a=Op(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=M1(l)),this._blurMaterial=T1(l,e,t),this._ggxMaterial=E1(l,e,t)}return a}_compileMaterial(e){const t=new nt(new Mn,e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,r,a,l){const f=new ai(90,1,t,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Ip),_.toneMapping=Ci,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new zo,new ut({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let y=!1;const P=e.background;P?P.isColor&&(x.color.copy(P),e.background=null,y=!0):(x.color.copy(Ip),y=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(f.up.set(0,p[N],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+m[N],l.y,l.z)):L===1?(f.up.set(0,0,p[N]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+m[N],l.z)):(f.up.set(0,p[N],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+m[N]));const U=this._cubeSize;js(a,L*U,N>2?U:0,U,U),_.setRenderTarget(a),y&&_.render(R,f),_.render(e,f)}_.toneMapping=S,_.autoClear=v,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===$r||e.mapping===As;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;js(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,Go)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,p=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-m*m),v=0+p*1.25,S=_*v,{_lodMax:M}=this,R=this._sizeLods[r],x=3*R*(r>M-Cr?r-M+Cr:0),y=4*(this._cubeSize-R);f.envMap.value=e.texture,f.roughness.value=S,f.mipInt.value=M-t,js(l,x,y,3*R,2*R),a.setRenderTarget(l),a.render(h,Go),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=M-r,js(e,x,y,3*R,2*R),a.setRenderTarget(e),a.render(h,Go)}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,h){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const m=3,_=this._lodMeshes[a];_.material=p;const v=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*os-1),R=l/M,x=isFinite(l)?1+Math.floor(m*R):os;x>os&&Qe(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${os}`);const y=[];let P=0;for(let F=0;F<os;++F){const w=F/R,I=Math.exp(-w*w/2);y.push(I),F===0?P+=I:F<x&&(P+=2*I)}for(let F=0;F<y.length;F++)y[F]=y[F]/P;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:N}=this;v.dTheta.value=M,v.mipInt.value=N-r;const L=this._sizeLods[a],U=3*L*(a>N-Cr?a-N+Cr:0),b=4*(this._cubeSize-L);js(t,U,b,3*L,2*L),f.setRenderTarget(t),f.render(_,Go)}}function M1(s){const e=[],t=[],r=[];let a=s;const l=s-Cr+1+Np.length;for(let u=0;u<l;u++){const h=Math.pow(2,a);e.push(h);let f=1/h;u>s-Cr?f=Np[u-s+Cr-1]:u===0&&(f=0),t.push(f);const p=1/(h-2),m=-p,_=1+p,v=[m,m,_,m,_,_,m,m,_,_,m,_],S=6,M=6,R=3,x=2,y=1,P=new Float32Array(R*M*S),N=new Float32Array(x*M*S),L=new Float32Array(y*M*S);for(let b=0;b<S;b++){const F=b%3*2/3-1,w=b>2?0:-1,I=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];P.set(I,R*M*b),N.set(v,x*M*b);const G=[b,b,b,b,b,b];L.set(G,y*M*b)}const U=new Mn;U.setAttribute("position",new Ni(P,R)),U.setAttribute("uv",new Ni(N,x)),U.setAttribute("faceIndex",new Ni(L,y)),r.push(new nt(U,null)),a>Cr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Op(s,e,t){const r=new Di(s,e,t);return r.texture.mapping=Da,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function js(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function E1(s,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function T1(s,e,t){const r=new Float32Array(os),a=new C(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ml(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Fp(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Bp(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}class zp extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new fp(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new zo(5,5,5),l=new Ii({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ji});l.uniforms.tEquirect.value=t;const u=new nt(a,l),h=t.minFilter;return t.minFilter===Kr&&(t.minFilter=Rn),new lS(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function w1(s){let e=new WeakMap,t=new WeakMap,r=null;function a(v,S=!1){return v==null?null:S?u(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===kc||S===Hc)if(e.has(v)){const M=e.get(v).texture;return h(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const R=new zp(M.height);return R.fromEquirectangularTexture(s,v),e.set(v,R),v.addEventListener("dispose",p),h(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const S=v.mapping,M=S===kc||S===Hc,R=S===$r||S===As;if(M||R){let x=t.get(v);const y=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return r===null&&(r=new Up(s)),x=M?r.fromEquirectangular(v,x):r.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),x.texture;if(x!==void 0)return x.texture;{const P=v.image;return M&&P&&P.height>0||R&&P&&f(P)?(r===null&&(r=new Up(s)),x=M?r.fromEquirectangular(v):r.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),v.addEventListener("dispose",m),x.texture):null}}}return v}function h(v,S){return S===kc?v.mapping=$r:S===Hc&&(v.mapping=As),v}function f(v){let S=0;const M=6;for(let R=0;R<M;R++)v[R]!==void 0&&S++;return S===M}function p(v){const S=v.target;S.removeEventListener("dispose",p);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function m(v){const S=v.target;S.removeEventListener("dispose",m);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function A1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Cu("WebGLRenderer: "+r+" extension not supported."),a}}}function R1(s,e,t,r){const a={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(_,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,M=_.attributes.position;let R=0;if(M===void 0)return;if(S!==null){const P=S.array;R=S.version;for(let N=0,L=P.length;N<L;N+=3){const U=P[N+0],b=P[N+1],F=P[N+2];v.push(U,b,b,F,F,U)}}else{const P=M.array;R=M.version;for(let N=0,L=P.length/3-1;N<L;N+=3){const U=N+0,b=N+1,F=N+2;v.push(U,b,b,F,F,U)}}const x=new(M.count>=65535?ip:np)(v,1);x.version=R;const y=l.get(_);y&&e.remove(y),l.set(_,x)}function m(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:f,getWireframeAttribute:m}}function C1(s,e,t){let r;function a(_){r=_}let l,u;function h(_){l=_.type,u=_.bytesPerElement}function f(_,v){s.drawElements(r,v,l,_*u),t.update(v,r,1)}function p(_,v,S){S!==0&&(s.drawElementsInstanced(r,v,l,_*u,S),t.update(v,r,S))}function m(_,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,_,0,S);let R=0;for(let x=0;x<S;x++)R+=v[x];t.update(R,r,1)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=m}function P1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:Et("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function b1(s,e,t){const r=new WeakMap,a=new tn;function l(u,h,f){const p=u.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let S=function(){w.dispose(),r.delete(h),h.removeEventListener("dispose",S)};v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let L=0;M===!0&&(L=1),R===!0&&(L=2),x===!0&&(L=3);let U=h.attributes.position.count*L,b=1;U>e.maxTextureSize&&(b=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*b*4*_),w=new Xd(F,U,b,_);w.type=bi,w.needsUpdate=!0;const I=L*4;for(let G=0;G<_;G++){const z=y[G],$=P[G],ie=N[G],se=U*b*4*G;for(let Y=0;Y<z.count;Y++){const J=Y*I;M===!0&&(a.fromBufferAttribute(z,Y),F[se+J+0]=a.x,F[se+J+1]=a.y,F[se+J+2]=a.z,F[se+J+3]=0),R===!0&&(a.fromBufferAttribute($,Y),F[se+J+4]=a.x,F[se+J+5]=a.y,F[se+J+6]=a.z,F[se+J+7]=0),x===!0&&(a.fromBufferAttribute(ie,Y),F[se+J+8]=a.x,F[se+J+9]=a.y,F[se+J+10]=a.z,F[se+J+11]=ie.itemSize===4?a.w:1)}}v={count:_,texture:w,size:new $e(U,b)},r.set(h,v),h.addEventListener("dispose",S)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let S=0;for(let R=0;R<p.length;R++)S+=p[R];const M=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function L1(s,e,t,r,a){let l=new WeakMap;function u(p){const m=a.render.frame,_=p.geometry,v=e.get(p,_);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function h(){l=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:h}}const D1={[Sd]:"LINEAR_TONE_MAPPING",[yd]:"REINHARD_TONE_MAPPING",[xd]:"CINEON_TONE_MAPPING",[Md]:"ACES_FILMIC_TONE_MAPPING",[Td]:"AGX_TONE_MAPPING",[wd]:"NEUTRAL_TONE_MAPPING",[Ed]:"CUSTOM_TONE_MAPPING"};function N1(s,e,t,r,a){const l=new Di(e,t,{type:s,depthBuffer:r,stencilBuffer:a,depthTexture:r?new Hs(e,t):void 0}),u=new Di(e,t,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),h=new Mn;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));const f=new J_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new nt(h,f),m=new ch(-1,1,1,-1,0,1);let _=null,v=null,S=!1,M,R=null,x=[],y=!1;this.setSize=function(P,N){l.setSize(P,N),u.setSize(P,N);for(let L=0;L<x.length;L++){const U=x[L];U.setSize&&U.setSize(P,N)}},this.setEffects=function(P){x=P,y=x.length>0&&x[0].isRenderPass===!0;const N=l.width,L=l.height;for(let U=0;U<x.length;U++){const b=x[U];b.setSize&&b.setSize(N,L)}},this.begin=function(P,N){if(S||P.toneMapping===Ci&&x.length===0)return!1;if(R=N,N!==null){const L=N.width,U=N.height;(l.width!==L||l.height!==U)&&this.setSize(L,U)}return y===!1&&P.setRenderTarget(l),M=P.toneMapping,P.toneMapping=Ci,!0},this.hasRenderPass=function(){return y},this.end=function(P,N){P.toneMapping=M,S=!0;let L=l,U=u;for(let b=0;b<x.length;b++){const F=x[b];if(F.enabled!==!1&&(F.render(P,U,L,N),F.needsSwap!==!1)){const w=L;L=U,U=w}}if(_!==P.outputColorSpace||v!==P.toneMapping){_=P.outputColorSpace,v=P.toneMapping,f.defines={},yt.getTransfer(_)===bt&&(f.defines.SRGB_TRANSFER="");const b=D1[v];b&&(f.defines[b]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(R),P.render(p,m),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),h.dispose(),f.dispose()}}const kp=new en,ph=new Hs(1,1),Hp=new Xd,Gp=new f_,Vp=new fp,Wp=[],Xp=[],Yp=new Float32Array(16),jp=new Float32Array(9),qp=new Float32Array(4);function qs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Wp[a];if(l===void 0&&(l=new Float32Array(a),Wp[a]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function gl(s,e){let t=Xp[e];t===void 0&&(t=new Int32Array(e),Xp[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function I1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function U1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function O1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function F1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function B1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,r))return;qp.set(r),s.uniformMatrix2fv(this.addr,!1,qp),hn(t,r)}}function z1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,r))return;jp.set(r),s.uniformMatrix3fv(this.addr,!1,jp),hn(t,r)}}function k1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,r))return;Yp.set(r),s.uniformMatrix4fv(this.addr,!1,Yp),hn(t,r)}}function H1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function V1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function X1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function j1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function $1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(ph.compareFunction=t.isReversedDepthBuffer()?Ru:Au,l=ph):l=kp,t.setTexture2D(e||l,a)}function K1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Gp,a)}function Z1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Vp,a)}function J1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Hp,a)}function Q1(s){switch(s){case 5126:return I1;case 35664:return U1;case 35665:return O1;case 35666:return F1;case 35674:return B1;case 35675:return z1;case 35676:return k1;case 5124:case 35670:return H1;case 35667:case 35671:return G1;case 35668:case 35672:return V1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return Y1;case 36295:return j1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return J1}}function ex(s,e){s.uniform1fv(this.addr,e)}function tx(s,e){const t=qs(e,this.size,2);s.uniform2fv(this.addr,t)}function nx(s,e){const t=qs(e,this.size,3);s.uniform3fv(this.addr,t)}function ix(s,e){const t=qs(e,this.size,4);s.uniform4fv(this.addr,t)}function rx(s,e){const t=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function sx(s,e){const t=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ox(s,e){const t=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ax(s,e){s.uniform1iv(this.addr,e)}function lx(s,e){s.uniform2iv(this.addr,e)}function cx(s,e){s.uniform3iv(this.addr,e)}function ux(s,e){s.uniform4iv(this.addr,e)}function hx(s,e){s.uniform1uiv(this.addr,e)}function fx(s,e){s.uniform2uiv(this.addr,e)}function dx(s,e){s.uniform3uiv(this.addr,e)}function px(s,e){s.uniform4uiv(this.addr,e)}function mx(s,e,t){const r=this.cache,a=e.length,l=gl(t,a);un(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=ph:u=kp;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||u,l[h])}function gx(s,e,t){const r=this.cache,a=e.length,l=gl(t,a);un(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Gp,l[u])}function vx(s,e,t){const r=this.cache,a=e.length,l=gl(t,a);un(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Vp,l[u])}function _x(s,e,t){const r=this.cache,a=e.length,l=gl(t,a);un(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Hp,l[u])}function Sx(s){switch(s){case 5126:return ex;case 35664:return tx;case 35665:return nx;case 35666:return ix;case 35674:return rx;case 35675:return sx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return ux;case 5125:return hx;case 36294:return fx;case 36295:return dx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return vx;case 36289:case 36303:case 36311:case 36292:return _x}}class yx{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Q1(t.type)}}class xx{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sx(t.type)}}class Mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const h=a[l];h.setValue(e,t[h.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function $p(s,e){s.seq.push(e),s.map[e.id]=e}function Ex(s,e,t){const r=s.name,a=r.length;for(mh.lastIndex=0;;){const l=mh.exec(r),u=mh.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&u+2===a){$p(t,p===void 0?new yx(h,s,e):new xx(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new Mx(h),$p(t,_)),t=_}}}class vl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(t,u),f=e.getUniformLocation(t,h.name);Ex(h,f,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const h=t[l],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function Kp(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Tx=37297;let wx=0;function Ax(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const Zp=new ct;function Rx(s){yt._getMatrix(Zp,yt.workingColorSpace,s);const e=`mat3( ${Zp.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(s)){case Ha:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jp(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Ax(s.getShaderSource(e),h)}else return l}function Cx(s,e){const t=Rx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Px={[Sd]:"Linear",[yd]:"Reinhard",[xd]:"Cineon",[Md]:"ACESFilmic",[Td]:"AgX",[wd]:"Neutral",[Ed]:"Custom"};function bx(s,e){const t=Px[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _l=new C;function Lx(){yt.getLuminanceCoefficients(_l);const s=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Nx(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Ix(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function Vo(s){return s!==""}function Qp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(s){return s.replace(Ux,Fx)}const Ox=new Map;function Fx(s,e){let t=dt[e];if(t===void 0){const r=Ox.get(e);if(r!==void 0)t=dt[r],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}const Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(s){return s.replace(Bx,zx)}function zx(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function nm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const kx={[La]:"SHADOWMAP_TYPE_PCF",[To]:"SHADOWMAP_TYPE_VSM"};function Hx(s){return kx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gx={[$r]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Da]:"ENVMAP_TYPE_CUBE_UV"};function Vx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Gx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Wx={[As]:"ENVMAP_MODE_REFRACTION"};function Xx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Wx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Yx={[_d]:"ENVMAP_BLENDING_MULTIPLY",[bv]:"ENVMAP_BLENDING_MIX",[Lv]:"ENVMAP_BLENDING_ADD"};function jx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Yx[s.combine]||"ENVMAP_BLENDING_NONE"}function qx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function $x(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const f=Hx(t),p=Vx(t),m=Xx(t),_=jx(t),v=qx(t),S=Dx(t),M=Nx(l),R=a.createProgram();let x,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Vo).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Vo).join(`
`),y.length>0&&(y+=`
`)):(x=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),y=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ci?bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Cx("linearToOutputTexel",t.outputColorSpace),Lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),u=gh(u),u=Qp(u,t),u=em(u,t),h=gh(h),h=Qp(h,t),h=em(h,t),u=tm(u),h=tm(h),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=P+x+u,L=P+y+h,U=Kp(a,a.VERTEX_SHADER,N),b=Kp(a,a.FRAGMENT_SHADER,L);a.attachShader(R,U),a.attachShader(R,b),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function F(z){if(s.debug.checkShaderErrors){const $=a.getProgramInfoLog(R)||"",ie=a.getShaderInfoLog(U)||"",se=a.getShaderInfoLog(b)||"",Y=$.trim(),J=ie.trim(),K=se.trim();let j=!0,le=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,U,b);else{const ce=Jp(a,U,"vertex"),B=Jp(a,b,"fragment");Et("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Y+`
`+ce+`
`+B)}else Y!==""?Qe("WebGLProgram: Program Info Log:",Y):(J===""||K==="")&&(le=!1);le&&(z.diagnostics={runnable:j,programLog:Y,vertexShader:{log:J,prefix:x},fragmentShader:{log:K,prefix:y}})}a.deleteShader(U),a.deleteShader(b),w=new vl(a,R),I=Ix(a,R)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=a.getProgramParameter(R,Tx)),G},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wx++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=U,this.fragmentShader=b,this}let Kx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Jx(e),t.set(e,r)),r}}class Jx{constructor(e){this.id=Kx++,this.code=e,this.usedTimes=0}}function Qx(s){return s===Jr||s===Ba||s===za}function eM(s,e,t,r,a,l){const u=new qd,h=new Zx,f=new Set,p=[],m=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return f.add(w),w===0?"uv":`uv${w}`}function R(w,I,G,z,$,ie){const se=z.fog,Y=$.geometry,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,j=e.get(w.envMap||J,K),le=j&&j.mapping===Da?j.image.height:null,ce=S[w.type];w.precision!==null&&(v=r.getMaxPrecision(w.precision),v!==w.precision&&Qe("WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ee=B!==void 0?B.length:0;let Ue=0;Y.morphAttributes.position!==void 0&&(Ue=1),Y.morphAttributes.normal!==void 0&&(Ue=2),Y.morphAttributes.color!==void 0&&(Ue=3);let He,De,ae,Se;if(ce){const ot=Oi[ce];He=ot.vertexShader,De=ot.fragmentShader}else He=w.vertexShader,De=w.fragmentShader,h.update(w),ae=h.getVertexShaderID(w),Se=h.getFragmentShaderID(w);const pe=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Ze=$.isInstancedMesh===!0,Je=$.isBatchedMesh===!0,Bt=!!w.map,ht=!!w.matcap,At=!!j,Ot=!!w.aoMap,pt=!!w.lightMap,Kt=!!w.bumpMap,zt=!!w.normalMap,En=!!w.displacementMap,V=!!w.emissiveMap,kt=!!w.metalnessMap,mt=!!w.roughnessMap,Lt=w.anisotropy>0,be=w.clearcoat>0,Vt=w.dispersion>0,D=w.iridescence>0,E=w.sheen>0,q=w.transmission>0,fe=Lt&&!!w.anisotropyMap,me=be&&!!w.clearcoatMap,xe=be&&!!w.clearcoatNormalMap,Pe=be&&!!w.clearcoatRoughnessMap,ue=D&&!!w.iridescenceMap,de=D&&!!w.iridescenceThicknessMap,Ie=E&&!!w.sheenColorMap,Fe=E&&!!w.sheenRoughnessMap,we=!!w.specularMap,Me=!!w.specularColorMap,it=!!w.specularIntensityMap,st=q&&!!w.transmissionMap,gt=q&&!!w.thicknessMap,H=!!w.gradientMap,Te=!!w.alphaMap,he=w.alphaTest>0,Oe=!!w.alphaHash,Re=!!w.extensions;let ge=Ci;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ge=s.toneMapping);const We={shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:De,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:Je,batchingColor:Je&&$._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&$.instanceColor!==null,instancingMorph:Ze&&$.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Bt,matcap:ht,envMap:At,envMapMode:At&&j.mapping,envMapCubeUVHeight:le,aoMap:Ot,lightMap:pt,bumpMap:Kt,normalMap:zt,displacementMap:En,emissiveMap:V,normalMapObjectSpace:zt&&w.normalMapType===Iv,normalMapTangentSpace:zt&&w.normalMapType===Id,packedNormalMap:zt&&w.normalMapType===Id&&Qx(w.normalMap.format),metalnessMap:kt,roughnessMap:mt,anisotropy:Lt,anisotropyMap:fe,clearcoat:be,clearcoatMap:me,clearcoatNormalMap:xe,clearcoatRoughnessMap:Pe,dispersion:Vt,iridescence:D,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:E,sheenColorMap:Ie,sheenRoughnessMap:Fe,specularMap:we,specularColorMap:Me,specularIntensityMap:it,transmission:q,transmissionMap:st,thicknessMap:gt,gradientMap:H,opaque:w.transparent===!1&&w.blending===Ts&&w.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:Oe,combine:w.combine,mapUv:Bt&&M(w.map.channel),aoMapUv:Ot&&M(w.aoMap.channel),lightMapUv:pt&&M(w.lightMap.channel),bumpMapUv:Kt&&M(w.bumpMap.channel),normalMapUv:zt&&M(w.normalMap.channel),displacementMapUv:En&&M(w.displacementMap.channel),emissiveMapUv:V&&M(w.emissiveMap.channel),metalnessMapUv:kt&&M(w.metalnessMap.channel),roughnessMapUv:mt&&M(w.roughnessMap.channel),anisotropyMapUv:fe&&M(w.anisotropyMap.channel),clearcoatMapUv:me&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:xe&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:de&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&M(w.sheenRoughnessMap.channel),specularMapUv:we&&M(w.specularMap.channel),specularColorMapUv:Me&&M(w.specularColorMap.channel),specularIntensityMapUv:it&&M(w.specularIntensityMap.channel),transmissionMapUv:st&&M(w.transmissionMap.channel),thicknessMapUv:gt&&M(w.thicknessMap.channel),alphaMapUv:Te&&M(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(zt||Lt),vertexNormals:!!Y.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Y.attributes.uv&&(Bt||Te),fog:!!se,useFog:w.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Y.attributes.normal===void 0&&zt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:$.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ue,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Bt&&w.map.isVideoTexture===!0&&yt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:V&&w.emissiveMap.isVideoTexture===!0&&yt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Mt,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=f.has(1),We.vertexUv2s=f.has(2),We.vertexUv3s=f.has(3),f.clear(),We}function x(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)I.push(G),I.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(y(I,w),P(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function y(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function P(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function N(w){const I=S[w.type];let G;if(I){const z=Oi[I];G=$_.clone(z.uniforms)}else G=w.uniforms;return G}function L(w,I){let G=m.get(I);return G!==void 0?++G.usedTimes:(G=new $x(s,I,w,a),p.push(G),m.set(I,G)),G}function U(w){if(--w.usedTimes===0){const I=p.indexOf(w);p[I]=p[p.length-1],p.pop(),m.delete(w.cacheKey),w.destroy()}}function b(w){h.remove(w)}function F(){h.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:N,acquireProgram:L,releaseProgram:U,releaseShaderCache:b,programs:p,dispose:F}}function tM(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function a(u,h,f){s.get(u)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function nM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function rm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function h(v,S,M,R,x,y){let P=s[e];return P===void 0?(P={id:v.id,object:v,geometry:S,material:M,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:x,group:y},s[e]=P):(P.id=v.id,P.object=v,P.geometry=S,P.material=M,P.materialVariant=u(v),P.groupOrder=R,P.renderOrder=v.renderOrder,P.z=x,P.group=y),e++,P}function f(v,S,M,R,x,y){const P=h(v,S,M,R,x,y);M.transmission>0?r.push(P):M.transparent===!0?a.push(P):t.push(P)}function p(v,S,M,R,x,y){const P=h(v,S,M,R,x,y);M.transmission>0?r.unshift(P):M.transparent===!0?a.unshift(P):t.unshift(P)}function m(v,S){t.length>1&&t.sort(v||nM),r.length>1&&r.sort(S||im),a.length>1&&a.sort(S||im)}function _(){for(let v=e,S=s.length;v<S;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:_,sort:m}}function iM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new rm,s.set(r,[u])):a>=l.length?(u=new rm,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function rM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new wt};break;case"SpotLight":t={position:new C,direction:new C,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function sM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let oM=0;function aM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lM(s){const e=new rM,t=sM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new C);const a=new C,l=new $t,u=new $t;function h(p){let m=0,_=0,v=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let S=0,M=0,R=0,x=0,y=0,P=0,N=0,L=0,U=0,b=0,F=0;p.sort(aM);for(let I=0,G=p.length;I<G;I++){const z=p[I],$=z.color,ie=z.intensity,se=z.distance;let Y=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Jr?Y=z.shadow.map.texture:Y=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=$.r*ie,_+=$.g*ie,v+=$.b*ie;else if(z.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(z.sh.coefficients[J],ie);F++}else if(z.isDirectionalLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const K=z.shadow,j=t.get(z);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=Y,r.directionalShadowMatrix[S]=z.shadow.matrix,P++}r.directional[S]=J,S++}else if(z.isSpotLight){const J=e.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy($).multiplyScalar(ie),J.distance=se,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,r.spot[R]=J;const K=z.shadow;if(z.map&&(r.spotLightMap[U]=z.map,U++,K.updateMatrices(z),z.castShadow&&b++),r.spotLightMatrix[R]=K.matrix,z.castShadow){const j=t.get(z);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=Y,L++}R++}else if(z.isRectAreaLight){const J=e.get(z);J.color.copy($).multiplyScalar(ie),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),r.rectArea[x]=J,x++}else if(z.isPointLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),J.distance=z.distance,J.decay=z.decay,z.castShadow){const K=z.shadow,j=t.get(z);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,r.pointShadow[M]=j,r.pointShadowMap[M]=Y,r.pointShadowMatrix[M]=z.shadow.matrix,N++}r.point[M]=J,M++}else if(z.isHemisphereLight){const J=e.get(z);J.skyColor.copy(z.color).multiplyScalar(ie),J.groundColor.copy(z.groundColor).multiplyScalar(ie),r.hemi[y]=J,y++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=v;const w=r.hash;(w.directionalLength!==S||w.pointLength!==M||w.spotLength!==R||w.rectAreaLength!==x||w.hemiLength!==y||w.numDirectionalShadows!==P||w.numPointShadows!==N||w.numSpotShadows!==L||w.numSpotMaps!==U||w.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+U-b,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=F,w.directionalLength=S,w.pointLength=M,w.spotLength=R,w.rectAreaLength=x,w.hemiLength=y,w.numDirectionalShadows=P,w.numPointShadows=N,w.numSpotShadows=L,w.numSpotMaps=U,w.numLightProbes=F,r.version=oM++)}function f(p,m){let _=0,v=0,S=0,M=0,R=0;const x=m.matrixWorldInverse;for(let y=0,P=p.length;y<P;y++){const N=p[y];if(N.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(x),_++}else if(N.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(x),S++}else if(N.isRectAreaLight){const L=r.rectArea[M];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),u.identity(),l.copy(N.matrixWorld),l.premultiply(x),u.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),M++}else if(N.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),v++}else if(N.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(x),R++}}}return{setup:h,setupView:f,state:r}}function sm(s){const e=new lM(s),t=[],r=[],a=[];function l(v){_.camera=v,t.length=0,r.length=0,a.length=0}function u(v){t.push(v)}function h(v){r.push(v)}function f(v){a.push(v)}function p(){e.setup(t)}function m(v){e.setupView(t,v)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:h,pushLightProbeGrid:f}}function cM(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let h;return u===void 0?(h=new sm(s),e.set(a,[h])):l>=u.length?(h=new sm(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const uM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`,fM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],dM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],om=new $t,Wo=new C,vh=new C;function pM(s,e,t){let r=new eh;const a=new $e,l=new $e,u=new tn,h=new Q_,f=new eS,p={},m=t.maxTextureSize,_={[vr]:kn,[kn]:vr,[Mt]:Mt},v=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:uM,fragmentShader:hM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new Mn;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new nt(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let y=this.type;this.render=function(b,F,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===hv&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=La);const I=s.getRenderTarget(),G=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),$=s.state;$.setBlending(ji),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=y!==this.type;ie&&F.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(Y=>Y.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,Y=b.length;se<Y;se++){const J=b[se],K=J.shadow;if(K===void 0){Qe("WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);const j=K.getFrameExtents();a.multiply(j),l.copy(K.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/j.x),a.x=l.x*j.x,K.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/j.y),a.y=l.y*j.y,K.mapSize.y=l.y));const le=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=le,K.map===null||ie===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===To){if(J.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Di(a.x,a.y,{format:Jr,type:Ki,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),K.map.texture.name=J.name+".shadowMap",K.map.depthTexture=new Hs(a.x,a.y,bi),K.map.depthTexture.name=J.name+".shadowMapDepth",K.map.depthTexture.format=Zi,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=yn,K.map.depthTexture.magFilter=yn}else J.isPointLight?(K.map=new zp(a.x),K.map.depthTexture=new D_(a.x,Pi)):(K.map=new Di(a.x,a.y),K.map.depthTexture=new Hs(a.x,a.y,Pi)),K.map.depthTexture.name=J.name+".shadowMap",K.map.depthTexture.format=Zi,this.type===La?(K.map.depthTexture.compareFunction=le?Ru:Au,K.map.depthTexture.minFilter=Rn,K.map.depthTexture.magFilter=Rn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=yn,K.map.depthTexture.magFilter=yn);K.camera.updateProjectionMatrix()}const ce=K.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ce;B++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,B),s.clear();else{B===0&&(s.setRenderTarget(K.map),s.clear());const ee=K.getViewport(B);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),$.viewport(u)}if(J.isPointLight){const ee=K.camera,Ue=K.matrix,He=J.distance||ee.far;He!==ee.far&&(ee.far=He,ee.updateProjectionMatrix()),Wo.setFromMatrixPosition(J.matrixWorld),ee.position.copy(Wo),vh.copy(ee.position),vh.add(fM[B]),ee.up.copy(dM[B]),ee.lookAt(vh),ee.updateMatrixWorld(),Ue.makeTranslation(-Wo.x,-Wo.y,-Wo.z),om.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),K._frustum.setFromProjectionMatrix(om,ee.coordinateSystem,ee.reversedDepth)}else K.updateMatrices(J);r=K.getFrustum(),L(F,w,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===To&&P(K,w),K.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(I,G,z)};function P(b,F){const w=e.update(R);v.defines.VSM_SAMPLES!==b.blurSamples&&(v.defines.VSM_SAMPLES=b.blurSamples,S.defines.VSM_SAMPLES=b.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Di(a.x,a.y,{format:Jr,type:Ki})),v.uniforms.shadow_pass.value=b.map.depthTexture,v.uniforms.resolution.value=b.mapSize,v.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(F,null,w,v,R,null),S.uniforms.shadow_pass.value=b.mapPass.texture,S.uniforms.resolution.value=b.mapSize,S.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(F,null,w,S,R,null)}function N(b,F,w,I){let G=null;const z=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)G=z;else if(G=w.isPointLight===!0?f:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=G.uuid,ie=F.uuid;let se=p[$];se===void 0&&(se={},p[$]=se);let Y=se[ie];Y===void 0&&(Y=G.clone(),se[ie]=Y,F.addEventListener("dispose",U)),G=Y}if(G.visible=F.visible,G.wireframe=F.wireframe,I===To?G.side=F.shadowSide!==null?F.shadowSide:F.side:G.side=F.shadowSide!==null?F.shadowSide:_[F.side],G.alphaMap=F.alphaMap,G.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,G.map=F.map,G.clipShadows=F.clipShadows,G.clippingPlanes=F.clippingPlanes,G.clipIntersection=F.clipIntersection,G.displacementMap=F.displacementMap,G.displacementScale=F.displacementScale,G.displacementBias=F.displacementBias,G.wireframeLinewidth=F.wireframeLinewidth,G.linewidth=F.linewidth,w.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const $=s.properties.get(G);$.light=w}return G}function L(b,F,w,I,G){if(b.visible===!1)return;if(b.layers.test(F.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&G===To)&&(!b.frustumCulled||r.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);const ie=e.update(b),se=b.material;if(Array.isArray(se)){const Y=ie.groups;for(let J=0,K=Y.length;J<K;J++){const j=Y[J],le=se[j.materialIndex];if(le&&le.visible){const ce=N(b,le,I,G);b.onBeforeShadow(s,b,F,w,ie,ce,j),s.renderBufferDirect(w,null,ie,ce,b,j),b.onAfterShadow(s,b,F,w,ie,ce,j)}}}else if(se.visible){const Y=N(b,se,I,G);b.onBeforeShadow(s,b,F,w,ie,Y,null),s.renderBufferDirect(w,null,ie,Y,b,null),b.onAfterShadow(s,b,F,w,ie,Y,null)}}const $=b.children;for(let ie=0,se=$.length;ie<se;ie++)L($[ie],F,w,I,G)}function U(b){b.target.removeEventListener("dispose",U);for(const w in p){const I=p[w],G=b.target.uuid;G in I&&(I[G].dispose(),delete I[G])}}}function mM(s,e){function t(){let H=!1;const Te=new tn;let he=null;const Oe=new tn(0,0,0,0);return{setMask:function(Re){he!==Re&&!H&&(s.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){H=Re},setClear:function(Re,ge,We,ot,Ft){Ft===!0&&(Re*=ot,ge*=ot,We*=ot),Te.set(Re,ge,We,ot),Oe.equals(Te)===!1&&(s.clearColor(Re,ge,We,ot),Oe.copy(Te))},reset:function(){H=!1,he=null,Oe.set(-1,0,0,0)}}}function r(){let H=!1,Te=!1,he=null,Oe=null,Re=null;return{setReversed:function(ge){if(Te!==ge){const We=e.get("EXT_clip_control");ge?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Te=ge;const ot=Re;Re=null,this.setClear(ot)}},getReversed:function(){return Te},setTest:function(ge){ge?pe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(ge){he!==ge&&!H&&(s.depthMask(ge),he=ge)},setFunc:function(ge){if(Te&&(ge=Wv[ge]),Oe!==ge){switch(ge){case Nc:s.depthFunc(s.NEVER);break;case Ic:s.depthFunc(s.ALWAYS);break;case Uc:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case Oc:s.depthFunc(s.EQUAL);break;case Fc:s.depthFunc(s.GEQUAL);break;case Bc:s.depthFunc(s.GREATER);break;case zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=ge}},setLocked:function(ge){H=ge},setClear:function(ge){Re!==ge&&(Re=ge,Te&&(ge=1-ge),s.clearDepth(ge))},reset:function(){H=!1,he=null,Oe=null,Re=null,Te=!1}}}function a(){let H=!1,Te=null,he=null,Oe=null,Re=null,ge=null,We=null,ot=null,Ft=null;return{setTest:function(Rt){H||(Rt?pe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Rt){Te!==Rt&&!H&&(s.stencilMask(Rt),Te=Rt)},setFunc:function(Rt,On,li){(he!==Rt||Oe!==On||Re!==li)&&(s.stencilFunc(Rt,On,li),he=Rt,Oe=On,Re=li)},setOp:function(Rt,On,li){(ge!==Rt||We!==On||ot!==li)&&(s.stencilOp(Rt,On,li),ge=Rt,We=On,ot=li)},setLocked:function(Rt){H=Rt},setClear:function(Rt){Ft!==Rt&&(s.clearStencil(Rt),Ft=Rt)},reset:function(){H=!1,Te=null,he=null,Oe=null,Re=null,ge=null,We=null,ot=null,Ft=null}}}const l=new t,u=new r,h=new a,f=new WeakMap,p=new WeakMap;let m={},_={},v={},S=new WeakMap,M=[],R=null,x=!1,y=null,P=null,N=null,L=null,U=null,b=null,F=null,w=new wt(0,0,0),I=0,G=!1,z=null,$=null,ie=null,se=null,Y=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(le)[1]),K=j>=1):le.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),K=j>=2);let ce=null,B={};const ee=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),He=new tn().fromArray(ee),De=new tn().fromArray(Ue);function ae(H,Te,he,Oe){const Re=new Uint8Array(4),ge=s.createTexture();s.bindTexture(H,ge),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<he;We++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Te+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return ge}const Se={};Se[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),pe(s.DEPTH_TEST),u.setFunc(ws),Kt(!1),zt(pd),pe(s.CULL_FACE),Ot(ji);function pe(H){m[H]!==!0&&(s.enable(H),m[H]=!0)}function Ne(H){m[H]!==!1&&(s.disable(H),m[H]=!1)}function Ze(H,Te){return v[H]!==Te?(s.bindFramebuffer(H,Te),v[H]=Te,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Te),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Je(H,Te){let he=M,Oe=!1;if(H){he=S.get(Te),he===void 0&&(he=[],S.set(Te,he));const Re=H.textures;if(he.length!==Re.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,We=Re.length;ge<We;ge++)he[ge]=s.COLOR_ATTACHMENT0+ge;he.length=Re.length,Oe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(he)}function Bt(H){return R!==H?(s.useProgram(H),R=H,!0):!1}const ht={[qr]:s.FUNC_ADD,[dv]:s.FUNC_SUBTRACT,[pv]:s.FUNC_REVERSE_SUBTRACT};ht[mv]=s.MIN,ht[gv]=s.MAX;const At={[vv]:s.ZERO,[_v]:s.ONE,[Sv]:s.SRC_COLOR,[Lc]:s.SRC_ALPHA,[wv]:s.SRC_ALPHA_SATURATE,[Ev]:s.DST_COLOR,[xv]:s.DST_ALPHA,[yv]:s.ONE_MINUS_SRC_COLOR,[Dc]:s.ONE_MINUS_SRC_ALPHA,[Tv]:s.ONE_MINUS_DST_COLOR,[Mv]:s.ONE_MINUS_DST_ALPHA,[Av]:s.CONSTANT_COLOR,[Rv]:s.ONE_MINUS_CONSTANT_COLOR,[Cv]:s.CONSTANT_ALPHA,[Pv]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(H,Te,he,Oe,Re,ge,We,ot,Ft,Rt){if(H===ji){x===!0&&(Ne(s.BLEND),x=!1);return}if(x===!1&&(pe(s.BLEND),x=!0),H!==fv){if(H!==y||Rt!==G){if((P!==qr||U!==qr)&&(s.blendEquation(s.FUNC_ADD),P=qr,U=qr),Rt)switch(H){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case md:s.blendFunc(s.ONE,s.ONE);break;case gd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Et("WebGLState: Invalid blending: ",H);break}else switch(H){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case md:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gd:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vd:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",H);break}N=null,L=null,b=null,F=null,w.set(0,0,0),I=0,y=H,G=Rt}return}Re=Re||Te,ge=ge||he,We=We||Oe,(Te!==P||Re!==U)&&(s.blendEquationSeparate(ht[Te],ht[Re]),P=Te,U=Re),(he!==N||Oe!==L||ge!==b||We!==F)&&(s.blendFuncSeparate(At[he],At[Oe],At[ge],At[We]),N=he,L=Oe,b=ge,F=We),(ot.equals(w)===!1||Ft!==I)&&(s.blendColor(ot.r,ot.g,ot.b,Ft),w.copy(ot),I=Ft),y=H,G=!1}function pt(H,Te){H.side===Mt?Ne(s.CULL_FACE):pe(s.CULL_FACE);let he=H.side===kn;Te&&(he=!he),Kt(he),H.blending===Ts&&H.transparent===!1?Ot(ji):Ot(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Oe=H.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),V(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(H){z!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),z=H)}function zt(H){H!==cv?(pe(s.CULL_FACE),H!==$&&(H===pd?s.cullFace(s.BACK):H===uv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),$=H}function En(H){H!==ie&&(K&&s.lineWidth(H),ie=H)}function V(H,Te,he){H?(pe(s.POLYGON_OFFSET_FILL),(se!==Te||Y!==he)&&(se=Te,Y=he,u.getReversed()&&(Te=-Te),s.polygonOffset(Te,he))):Ne(s.POLYGON_OFFSET_FILL)}function kt(H){H?pe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function mt(H){H===void 0&&(H=s.TEXTURE0+J-1),ce!==H&&(s.activeTexture(H),ce=H)}function Lt(H,Te,he){he===void 0&&(ce===null?he=s.TEXTURE0+J-1:he=ce);let Oe=B[he];Oe===void 0&&(Oe={type:void 0,texture:void 0},B[he]=Oe),(Oe.type!==H||Oe.texture!==Te)&&(ce!==he&&(s.activeTexture(he),ce=he),s.bindTexture(H,Te||Se[H]),Oe.type=H,Oe.texture=Te)}function be(){const H=B[ce];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Vt(){try{s.compressedTexImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function E(){try{s.texSubImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function q(){try{s.texSubImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function xe(){try{s.texStorage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function Pe(){try{s.texStorage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function ue(){try{s.texImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function de(){try{s.texImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function Ie(H){return _[H]!==void 0?_[H]:s.getParameter(H)}function Fe(H,Te){_[H]!==Te&&(s.pixelStorei(H,Te),_[H]=Te)}function we(H){He.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),He.copy(H))}function Me(H){De.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),De.copy(H))}function it(H,Te){let he=p.get(Te);he===void 0&&(he=new WeakMap,p.set(Te,he));let Oe=he.get(H);Oe===void 0&&(Oe=s.getUniformBlockIndex(Te,H.name),he.set(H,Oe))}function st(H,Te){const Oe=p.get(Te).get(H);f.get(Te)!==Oe&&(s.uniformBlockBinding(Te,Oe,H.__bindingPointIndex),f.set(Te,Oe))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),m={},_={},ce=null,B={},v={},S=new WeakMap,M=[],R=null,x=!1,y=null,P=null,N=null,L=null,U=null,b=null,F=null,w=new wt(0,0,0),I=0,G=!1,z=null,$=null,ie=null,se=null,Y=null,He.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:pe,disable:Ne,bindFramebuffer:Ze,drawBuffers:Je,useProgram:Bt,setBlending:Ot,setMaterial:pt,setFlipSided:Kt,setCullFace:zt,setLineWidth:En,setPolygonOffset:V,setScissorTest:kt,activeTexture:mt,bindTexture:Lt,unbindTexture:be,compressedTexImage2D:Vt,compressedTexImage3D:D,texImage2D:ue,texImage3D:de,pixelStorei:Fe,getParameter:Ie,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:xe,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:we,viewport:Me,reset:gt}}function gM(s,e,t,r,a,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new $e,m=new WeakMap,_=new Set;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,E){return M?new OffscreenCanvas(D,E):Co("canvas")}function x(D,E,q){let fe=1;const me=Vt(D);if((me.width>q||me.height>q)&&(fe=q/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const xe=Math.floor(fe*me.width),Pe=Math.floor(fe*me.height);v===void 0&&(v=R(xe,Pe));const ue=E?R(xe,Pe):v;return ue.width=xe,ue.height=Pe,ue.getContext("2d").drawImage(D,0,0,xe,Pe),Qe("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+xe+"x"+Pe+")."),ue}else return"data"in D&&Qe("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function y(D){return D.generateMipmaps}function P(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,E,q,fe,me,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Pe;fe&&(Pe=e.get("EXT_texture_norm16"),Pe||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=E;if(E===s.RED&&(q===s.FLOAT&&(ue=s.R32F),q===s.HALF_FLOAT&&(ue=s.R16F),q===s.UNSIGNED_BYTE&&(ue=s.R8),q===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.R16_EXT),q===s.SHORT&&Pe&&(ue=Pe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.R8UI),q===s.UNSIGNED_SHORT&&(ue=s.R16UI),q===s.UNSIGNED_INT&&(ue=s.R32UI),q===s.BYTE&&(ue=s.R8I),q===s.SHORT&&(ue=s.R16I),q===s.INT&&(ue=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ue=s.RG32F),q===s.HALF_FLOAT&&(ue=s.RG16F),q===s.UNSIGNED_BYTE&&(ue=s.RG8),q===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RG16_EXT),q===s.SHORT&&Pe&&(ue=Pe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RG8UI),q===s.UNSIGNED_SHORT&&(ue=s.RG16UI),q===s.UNSIGNED_INT&&(ue=s.RG32UI),q===s.BYTE&&(ue=s.RG8I),q===s.SHORT&&(ue=s.RG16I),q===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),q===s.UNSIGNED_INT&&(ue=s.RGB32UI),q===s.BYTE&&(ue=s.RGB8I),q===s.SHORT&&(ue=s.RGB16I),q===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),q===s.UNSIGNED_INT&&(ue=s.RGBA32UI),q===s.BYTE&&(ue=s.RGBA8I),q===s.SHORT&&(ue=s.RGBA16I),q===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGB16_EXT),q===s.SHORT&&Pe&&(ue=Pe.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const de=xe?Ha:yt.getTransfer(me);q===s.FLOAT&&(ue=s.RGBA32F),q===s.HALF_FLOAT&&(ue=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ue=de===bt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Pe&&(ue=Pe.RGBA16_EXT),q===s.SHORT&&Pe&&(ue=Pe.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function U(D,E){let q;return D?E===null||E===Pi||E===Ao?q=s.DEPTH24_STENCIL8:E===bi?q=s.DEPTH32F_STENCIL8:E===wo&&(q=s.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===Ao?q=s.DEPTH_COMPONENT24:E===bi?q=s.DEPTH_COMPONENT32F:E===wo&&(q=s.DEPTH_COMPONENT16),q}function b(D,E){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function F(D){const E=D.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&_.delete(E)}function w(D){const E=D.target;E.removeEventListener("dispose",w),z(E)}function I(D){const E=r.get(D);if(E.__webglInit===void 0)return;const q=D.source,fe=S.get(q);if(fe){const me=fe[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&G(D),Object.keys(fe).length===0&&S.delete(q)}r.remove(D)}function G(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const q=D.source,fe=S.get(q);delete fe[E.__cacheKey],u.memory.textures--}function z(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let me=0;me<E.__webglFramebuffer[fe].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[fe][me]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=D.textures;for(let fe=0,me=q.length;fe<me;fe++){const xe=r.get(q[fe]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(q[fe])}r.remove(D)}let $=0;function ie(){$=0}function se(){return $}function Y(D){$=D}function J(){const D=$;return D>=a.maxTextures&&Qe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),$+=1,D}function K(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function j(D,E){const q=r.get(D);if(D.isVideoTexture&&Lt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const fe=D.image;if(fe===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(q,D,E);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function le(D,E){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){Ne(q,D,E);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function ce(D,E){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){Ne(q,D,E);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function B(D,E){const q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){Ze(q,D,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const ee={[qi]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[Gc]:s.MIRRORED_REPEAT},Ue={[yn]:s.NEAREST,[Dv]:s.NEAREST_MIPMAP_NEAREST,[Na]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[Vc]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},He={[Uv]:s.NEVER,[kv]:s.ALWAYS,[Ov]:s.LESS,[Au]:s.LEQUAL,[Fv]:s.EQUAL,[Ru]:s.GEQUAL,[Bv]:s.GREATER,[zv]:s.NOTEQUAL};function De(D,E){if(E.type===bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Vc||E.magFilter===Na||E.magFilter===Kr||E.minFilter===Rn||E.minFilter===Vc||E.minFilter===Na||E.minFilter===Kr)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ee[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ee[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ee[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Ue[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Ue[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==Na&&E.minFilter!==Kr||E.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ae(D,E){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",F));const fe=E.source;let me=S.get(fe);me===void 0&&(me={},S.set(fe,me));const xe=K(E);if(xe!==D.__cacheKey){me[xe]===void 0&&(me[xe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,q=!0),me[xe].usedTimes++;const Pe=me[D.__cacheKey];Pe!==void 0&&(me[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&G(E)),D.__cacheKey=xe,D.__webglTexture=me[xe].texture}return q}function Se(D,E,q){return Math.floor(Math.floor(D/q)/E)}function pe(D,E,q,fe){const xe=D.updateRanges;if(xe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,fe,E.data);else{xe.sort((Fe,we)=>Fe.start-we.start);let Pe=0;for(let Fe=1;Fe<xe.length;Fe++){const we=xe[Pe],Me=xe[Fe],it=we.start+we.count,st=Se(Me.start,E.width,4),gt=Se(we.start,E.width,4);Me.start<=it+1&&st===gt&&Se(Me.start+Me.count-1,E.width,4)===st?we.count=Math.max(we.count,Me.start+Me.count-we.start):(++Pe,xe[Pe]=Me)}xe.length=Pe+1;const ue=t.getParameter(s.UNPACK_ROW_LENGTH),de=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Fe=0,we=xe.length;Fe<we;Fe++){const Me=xe[Fe],it=Math.floor(Me.start/4),st=Math.ceil(Me.count/4),gt=it%E.width,H=Math.floor(it/E.width),Te=st,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,gt,H,Te,he,q,fe,E.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ue),t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Ne(D,E,q){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const me=ae(D,E),xe=E.source;t.bindTexture(fe,D.__webglTexture,s.TEXTURE0+q);const Pe=r.get(xe);if(xe.version!==Pe.__version||me===!0){if(t.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const he=yt.getPrimaries(yt.workingColorSpace),Oe=E.colorSpace===_r?null:yt.getPrimaries(E.colorSpace),Re=E.colorSpace===_r||he===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let de=x(E.image,!1,a.maxTextureSize);de=be(E,de);const Ie=l.convert(E.format,E.colorSpace),Fe=l.convert(E.type);let we=L(E.internalFormat,Ie,Fe,E.normalized,E.colorSpace,E.isVideoTexture);De(fe,E);let Me;const it=E.mipmaps,st=E.isVideoTexture!==!0,gt=Pe.__version===void 0||me===!0,H=xe.dataReady,Te=b(E,de);if(E.isDepthTexture)we=U(E.format===Zr,E.type),gt&&(st?t.texStorage2D(s.TEXTURE_2D,1,we,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,we,de.width,de.height,0,Ie,Fe,null));else if(E.isDataTexture)if(it.length>0){st&&gt&&t.texStorage2D(s.TEXTURE_2D,Te,we,it[0].width,it[0].height);for(let he=0,Oe=it.length;he<Oe;he++)Me=it[he],st?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Me.width,Me.height,Ie,Fe,Me.data):t.texImage2D(s.TEXTURE_2D,he,we,Me.width,Me.height,0,Ie,Fe,Me.data);E.generateMipmaps=!1}else st?(gt&&t.texStorage2D(s.TEXTURE_2D,Te,we,de.width,de.height),H&&pe(E,de,Ie,Fe)):t.texImage2D(s.TEXTURE_2D,0,we,de.width,de.height,0,Ie,Fe,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,we,it[0].width,it[0].height,de.depth);for(let he=0,Oe=it.length;he<Oe;he++)if(Me=it[he],E.format!==mi)if(Ie!==null)if(st){if(H)if(E.layerUpdates.size>0){const Re=bp(Me.width,Me.height,E.format,E.type);for(const ge of E.layerUpdates){const We=Me.data.subarray(ge*Re/Me.data.BYTES_PER_ELEMENT,(ge+1)*Re/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ge,Me.width,Me.height,1,Ie,We)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,de.depth,Ie,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,we,Me.width,Me.height,de.depth,0,Me.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Me.width,Me.height,de.depth,Ie,Fe,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,we,Me.width,Me.height,de.depth,0,Ie,Fe,Me.data)}else{st&&gt&&t.texStorage2D(s.TEXTURE_2D,Te,we,it[0].width,it[0].height);for(let he=0,Oe=it.length;he<Oe;he++)Me=it[he],E.format!==mi?Ie!==null?st?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Me.width,Me.height,Ie,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,he,we,Me.width,Me.height,0,Me.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Me.width,Me.height,Ie,Fe,Me.data):t.texImage2D(s.TEXTURE_2D,he,we,Me.width,Me.height,0,Ie,Fe,Me.data)}else if(E.isDataArrayTexture)if(st){if(gt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,we,de.width,de.height,de.depth),H)if(E.layerUpdates.size>0){const he=bp(de.width,de.height,E.format,E.type);for(const Oe of E.layerUpdates){const Re=de.data.subarray(Oe*he/de.data.BYTES_PER_ELEMENT,(Oe+1)*he/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,de.width,de.height,1,Ie,Fe,Re)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ie,Fe,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,de.width,de.height,de.depth,0,Ie,Fe,de.data);else if(E.isData3DTexture)st?(gt&&t.texStorage3D(s.TEXTURE_3D,Te,we,de.width,de.height,de.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ie,Fe,de.data)):t.texImage3D(s.TEXTURE_3D,0,we,de.width,de.height,de.depth,0,Ie,Fe,de.data);else if(E.isFramebufferTexture){if(gt)if(st)t.texStorage2D(s.TEXTURE_2D,Te,we,de.width,de.height);else{let he=de.width,Oe=de.height;for(let Re=0;Re<Te;Re++)t.texImage2D(s.TEXTURE_2D,Re,we,he,Oe,0,Ie,Fe,null),he>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),de.parentNode!==he){he.appendChild(de),_.add(E),he.onpaint=ot=>{const Ft=ot.changedElements;for(const Rt of _)Ft.includes(Rt.image)&&(Rt.needsUpdate=!0)},he.requestPaint();return}const Oe=0,Re=s.RGBA,ge=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,Re,ge,We,de),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(st&&gt){const he=Vt(it[0]);t.texStorage2D(s.TEXTURE_2D,Te,we,he.width,he.height)}for(let he=0,Oe=it.length;he<Oe;he++)Me=it[he],st?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ie,Fe,Me):t.texImage2D(s.TEXTURE_2D,he,we,Ie,Fe,Me);E.generateMipmaps=!1}else if(st){if(gt){const he=Vt(de);t.texStorage2D(s.TEXTURE_2D,Te,we,he.width,he.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Fe,de)}else t.texImage2D(s.TEXTURE_2D,0,we,Ie,Fe,de);y(E)&&P(fe),Pe.__version=xe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ze(D,E,q){if(E.image.length!==6)return;const fe=ae(D,E),me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const xe=r.get(me);if(me.version!==xe.__version||fe===!0){t.activeTexture(s.TEXTURE0+q);const Pe=yt.getPrimaries(yt.workingColorSpace),ue=E.colorSpace===_r?null:yt.getPrimaries(E.colorSpace),de=E.colorSpace===_r||Pe===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,we=[];for(let ge=0;ge<6;ge++)!Ie&&!Fe?we[ge]=x(E.image[ge],!0,a.maxCubemapSize):we[ge]=Fe?E.image[ge].image:E.image[ge],we[ge]=be(E,we[ge]);const Me=we[0],it=l.convert(E.format,E.colorSpace),st=l.convert(E.type),gt=L(E.internalFormat,it,st,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,Te=xe.__version===void 0||fe===!0,he=me.dataReady;let Oe=b(E,Me);De(s.TEXTURE_CUBE_MAP,E);let Re;if(Ie){H&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,gt,Me.width,Me.height);for(let ge=0;ge<6;ge++){Re=we[ge].mipmaps;for(let We=0;We<Re.length;We++){const ot=Re[We];E.format!==mi?it!==null?H?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,ot.width,ot.height,it,ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,gt,ot.width,ot.height,0,ot.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,ot.width,ot.height,it,st,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,gt,ot.width,ot.height,0,it,st,ot.data)}}}else{if(Re=E.mipmaps,H&&Te){Re.length>0&&Oe++;const ge=Vt(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,gt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Fe){H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,we[ge].width,we[ge].height,it,st,we[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,gt,we[ge].width,we[ge].height,0,it,st,we[ge].data);for(let We=0;We<Re.length;We++){const Ft=Re[We].image[ge].image;H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,Ft.width,Ft.height,it,st,Ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,gt,Ft.width,Ft.height,0,it,st,Ft.data)}}else{H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,it,st,we[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,gt,it,st,we[ge]);for(let We=0;We<Re.length;We++){const ot=Re[We];H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,it,st,ot.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,gt,it,st,ot.image[ge])}}}y(E)&&P(s.TEXTURE_CUBE_MAP),xe.__version=me.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Je(D,E,q,fe,me,xe){const Pe=l.convert(q.format,q.colorSpace),ue=l.convert(q.type),de=L(q.internalFormat,Pe,ue,q.normalized,q.colorSpace),Ie=r.get(E),Fe=r.get(q);if(Fe.__renderTarget=E,!Ie.__hasExternalTextures){const we=Math.max(1,E.width>>xe),Me=Math.max(1,E.height>>xe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,xe,de,we,Me,E.depth,0,Pe,ue,null):t.texImage2D(me,xe,de,we,Me,0,Pe,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),mt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,me,Fe.__webglTexture,0,kt(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,me,Fe.__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(D,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const fe=E.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,xe=U(E.stencilBuffer,me),Pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;mt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(E),xe,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(E),xe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,xe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,D)}else{const fe=E.textures;for(let me=0;me<fe.length;me++){const xe=fe[me],Pe=l.convert(xe.format,xe.colorSpace),ue=l.convert(xe.type),de=L(xe.internalFormat,Pe,ue,xe.normalized,xe.colorSpace);mt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(E),de,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(E),de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(D,E,q){const fe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),De(s.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=l.convert(E.depthTexture.format),Fe=l.convert(E.depthTexture.type);let we;E.depthTexture.format===Zi?we=s.DEPTH_COMPONENT24:E.depthTexture.format===Zr&&(we=s.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,we,E.width,E.height,0,Ie,Fe,null)}}else j(E.depthTexture,0);const xe=me.__webglTexture,Pe=kt(E),ue=fe?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,de=E.depthTexture.format===Zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Zi)mt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,xe,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,xe,0);else if(E.depthTexture.format===Zr)mt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ue,xe,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,de,ue,xe,0);else throw new Error("Unknown depthTexture format")}function At(D){const E=r.get(D),q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=fe}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let fe=0;fe<6;fe++)ht(E.__webglFramebuffer[fe],D,fe);else{const fe=D.texture.mipmaps;fe&&fe.length>0?ht(E.__webglFramebuffer[0],D,0):ht(E.__webglFramebuffer,D,0)}else if(q){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=s.createRenderbuffer(),Bt(E.__webglDepthbuffer[fe],D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Bt(E.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,xe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(D,E,q){const fe=r.get(D);E!==void 0&&Je(fe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&At(D)}function pt(D){const E=D.texture,q=r.get(D),fe=r.get(E);D.addEventListener("dispose",w);const me=D.textures,xe=D.isWebGLCubeRenderTarget===!0,Pe=me.length>1;if(Pe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,u.memory.textures++),xe){q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ue]=[];for(let de=0;de<E.mipmaps.length;de++)q.__webglFramebuffer[ue][de]=s.createFramebuffer()}else q.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)q.__webglFramebuffer[ue]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let ue=0,de=me.length;ue<de;ue++){const Ie=r.get(me[ue]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&mt(D)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ue=0;ue<me.length;ue++){const de=me[ue];q.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ue]);const Ie=l.convert(de.format,de.colorSpace),Fe=l.convert(de.type),we=L(de.internalFormat,Ie,Fe,de.normalized,de.colorSpace,D.isXRRenderTarget===!0),Me=kt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,we,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,q.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),De(s.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(q.__webglFramebuffer[ue][de],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Je(q.__webglFramebuffer[ue],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);y(E)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,de=me.length;ue<de;ue++){const Ie=me[ue],Fe=r.get(Ie);let we=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,Fe.__webglTexture),De(we,Ie),Je(q.__webglFramebuffer,D,Ie,s.COLOR_ATTACHMENT0+ue,we,0),y(Ie)&&P(we)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,fe.__webglTexture),De(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(q.__webglFramebuffer[de],D,E,s.COLOR_ATTACHMENT0,ue,de);else Je(q.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,ue,0);y(E)&&P(ue),t.unbindTexture()}D.depthBuffer&&At(D)}function Kt(D){const E=D.textures;for(let q=0,fe=E.length;q<fe;q++){const me=E[q];if(y(me)){const xe=N(D),Pe=r.get(me).__webglTexture;t.bindTexture(xe,Pe),P(xe),t.unbindTexture()}}}const zt=[],En=[];function V(D){if(D.samples>0){if(mt(D)===!1){const E=D.textures,q=D.width,fe=D.height;let me=s.COLOR_BUFFER_BIT;const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(D),ue=E.length>1;if(ue)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const de=D.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const Fe=r.get(E[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,q,fe,0,0,q,fe,me,s.NEAREST),f===!0&&(zt.length=0,En.length=0,zt.push(s.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(zt.push(xe),En.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,En)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const Fe=r.get(E[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function kt(D){return Math.min(a.maxSamples,D.samples)}function mt(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(D){const E=u.render.frame;m.get(D)!==E&&(m.set(D,E),D.update())}function be(D,E){const q=D.colorSpace,fe=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==ka&&q!==_r&&(yt.getTransfer(q)===bt?(fe!==mi||me!==Kn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",q)),E}function Vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=ie,this.getTextureUnits=se,this.setTextureUnits=Y,this.setTexture2D=j,this.setTexture2DArray=le,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vM(s,e){function t(r,a=_r){let l;const u=yt.getTransfer(a);if(r===Kn)return s.UNSIGNED_BYTE;if(r===Xc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Yc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pd)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Rd)return s.BYTE;if(r===Cd)return s.SHORT;if(r===wo)return s.UNSIGNED_SHORT;if(r===Wc)return s.INT;if(r===Pi)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===Ki)return s.HALF_FLOAT;if(r===Ld)return s.ALPHA;if(r===Dd)return s.RGB;if(r===mi)return s.RGBA;if(r===Zi)return s.DEPTH_COMPONENT;if(r===Zr)return s.DEPTH_STENCIL;if(r===Nd)return s.RED;if(r===jc)return s.RED_INTEGER;if(r===Jr)return s.RG;if(r===qc)return s.RG_INTEGER;if(r===$c)return s.RGBA_INTEGER;if(r===Ia||r===Ua||r===Oa||r===Fa)if(u===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ia)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ua)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ia)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ua)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oa)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fa)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kc||r===Zc||r===Jc||r===Qc)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Kc)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zc)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jc)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qc)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eu||r===tu||r===nu||r===iu||r===ru||r===Ba||r===su)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===eu||r===tu)return u===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===nu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===iu)return l.COMPRESSED_R11_EAC;if(r===ru)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ba)return l.COMPRESSED_RG11_EAC;if(r===su)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ou||r===au||r===lu||r===cu||r===uu||r===hu||r===fu||r===du||r===pu||r===mu||r===gu||r===vu||r===_u||r===Su)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ou)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===au)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===du)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vu)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_u)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Su)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yu||r===xu||r===Mu)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===yu)return u===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xu)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mu)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Eu||r===Tu||r===za||r===wu)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Eu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Tu)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===za)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wu)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ao?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const _M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
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

}`;class yM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new dp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ii({vertexShader:_M,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xM extends Sr{constructor(e,t){super();const r=this;let a=null,l=1,u=null,h="local-floor",f=1,p=null,m=null,_=null,v=null,S=null,M=null;const R=typeof XRWebGLBinding<"u",x=new yM,y={},P=t.getContextAttributes();let N=null,L=null;const U=[],b=[],F=new $e;let w=null;const I=new ai;I.viewport=new tn;const G=new ai;G.viewport=new tn;const z=[I,G],$=new cS;let ie=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Se=U[ae];return Se===void 0&&(Se=new Ou,U[ae]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ae){let Se=U[ae];return Se===void 0&&(Se=new Ou,U[ae]=Se),Se.getGripSpace()},this.getHand=function(ae){let Se=U[ae];return Se===void 0&&(Se=new Ou,U[ae]=Se),Se.getHandSpace()};function Y(ae){const Se=b.indexOf(ae.inputSource);if(Se===-1)return;const pe=U[Se];pe!==void 0&&(pe.update(ae.inputSource,ae.frame,p||u),pe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function J(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",K);for(let ae=0;ae<U.length;ae++){const Se=b[ae];Se!==null&&(b[ae]=null,U[ae].disconnect(Se))}ie=null,se=null,x.reset();for(const ae in y)delete y[ae];e.setRenderTarget(N),S=null,v=null,_=null,a=null,L=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(N=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",J),a.addEventListener("inputsourceschange",K),P.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ne=null,Ze=null;P.depth&&(Ze=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=P.stencil?Zr:Zi,Ne=P.stencil?Ao:Pi);const Je={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(Je),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Di(v.textureWidth,v.textureHeight,{format:mi,type:Kn,depthTexture:new Hs(v.textureWidth,v.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const pe={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,pe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Di(S.framebufferWidth,S.framebufferHeight,{format:mi,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await a.requestReferenceSpace(h),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(ae){for(let Se=0;Se<ae.removed.length;Se++){const pe=ae.removed[Se],Ne=b.indexOf(pe);Ne>=0&&(b[Ne]=null,U[Ne].disconnect(pe))}for(let Se=0;Se<ae.added.length;Se++){const pe=ae.added[Se];let Ne=b.indexOf(pe);if(Ne===-1){for(let Je=0;Je<U.length;Je++)if(Je>=b.length){b.push(pe),Ne=Je;break}else if(b[Je]===null){b[Je]=pe,Ne=Je;break}if(Ne===-1)break}const Ze=U[Ne];Ze&&Ze.connect(pe)}}const j=new C,le=new C;function ce(ae,Se,pe){j.setFromMatrixPosition(Se.matrixWorld),le.setFromMatrixPosition(pe.matrixWorld);const Ne=j.distanceTo(le),Ze=Se.projectionMatrix.elements,Je=pe.projectionMatrix.elements,Bt=Ze[14]/(Ze[10]-1),ht=Ze[14]/(Ze[10]+1),At=(Ze[9]+1)/Ze[5],Ot=(Ze[9]-1)/Ze[5],pt=(Ze[8]-1)/Ze[0],Kt=(Je[8]+1)/Je[0],zt=Bt*pt,En=Bt*Kt,V=Ne/(-pt+Kt),kt=V*-pt;if(Se.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(kt),ae.translateZ(V),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ze[10]===-1)ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const mt=Bt+V,Lt=ht+V,be=zt-kt,Vt=En+(Ne-kt),D=At*ht/Lt*mt,E=Ot*ht/Lt*mt;ae.projectionMatrix.makePerspective(be,Vt,D,E,mt,Lt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function B(ae,Se){Se===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Se.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let Se=ae.near,pe=ae.far;x.texture!==null&&(x.depthNear>0&&(Se=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),$.near=G.near=I.near=Se,$.far=G.far=I.far=pe,(ie!==$.near||se!==$.far)&&(a.updateRenderState({depthNear:$.near,depthFar:$.far}),ie=$.near,se=$.far),$.layers.mask=ae.layers.mask|6,I.layers.mask=$.layers.mask&-5,G.layers.mask=$.layers.mask&-3;const Ne=ae.parent,Ze=$.cameras;B($,Ne);for(let Je=0;Je<Ze.length;Je++)B(Ze[Je],Ne);Ze.length===2?ce($,I,G):$.projectionMatrix.copy(I.projectionMatrix),ee(ae,$,Ne)};function ee(ae,Se,pe){pe===null?ae.matrix.copy(Se.matrixWorld):(ae.matrix.copy(pe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Se.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=bo*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(ae){f=ae,v!==null&&(v.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh($)},this.getCameraTexture=function(ae){return y[ae]};let Ue=null;function He(ae,Se){if(m=Se.getViewerPose(p||u),M=Se,m!==null){const pe=m.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ne=!1;pe.length!==$.cameras.length&&($.cameras.length=0,Ne=!0);for(let ht=0;ht<pe.length;ht++){const At=pe[ht];let Ot=null;if(S!==null)Ot=S.getViewport(At);else{const Kt=_.getViewSubImage(v,At);Ot=Kt.viewport,ht===0&&(e.setRenderTargetTextures(L,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(L))}let pt=z[ht];pt===void 0&&(pt=new ai,pt.layers.enable(ht),pt.viewport=new tn,z[ht]=pt),pt.matrix.fromArray(At.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(At.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),ht===0&&($.matrix.copy(pt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ne===!0&&$.cameras.push(pt)}const Ze=a.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const ht=_.getDepthInformation(pe[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,a.renderState)}if(Ze&&Ze.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<pe.length;ht++){const At=pe[ht].camera;if(At){let Ot=y[At];Ot||(Ot=new dp,y[At]=Ot);const pt=_.getCameraImage(At);Ot.sourceTexture=pt}}}}for(let pe=0;pe<U.length;pe++){const Ne=b[pe],Ze=U[pe];Ne!==null&&Ze!==void 0&&Ze.update(Ne,Se,p||u)}Ue&&Ue(ae,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),M=null}const De=new Lp;De.setAnimationLoop(He),this.setAnimationLoop=function(ae){Ue=ae},this.dispose=function(){}}}const MM=new $t,am=new ct;am.set(-1,0,0,0,1,0,0,0,1);function EM(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,yp(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function a(x,y,P,N,L){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(x,y):y.isMeshLambertMaterial?(l(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),m(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,L)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),R(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?f(x,y,P,N):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===kn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===kn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const P=e.get(y),N=P.envMap,L=P.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(am),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,P,N){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*P,x.scale.value=N*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,P){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===kn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function R(x,y){const P=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function TM(s,e,t,r){let a={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(P,N){const L=N.program;r.uniformBlockBinding(P,L)}function p(P,N){let L=a[P.id];L===void 0&&(M(P),L=m(P),a[P.id]=L,P.addEventListener("dispose",x));const U=N.program;r.updateUBOMapping(P,U);const b=e.render.frame;l[P.id]!==b&&(v(P),l[P.id]=b)}function m(P){const N=_();P.__bindingPointIndex=N;const L=s.createBuffer(),U=P.__size,b=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,U,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function _(){for(let P=0;P<h;P++)if(u.indexOf(P)===-1)return u.push(P),P;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const N=a[P.id],L=P.uniforms,U=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let b=0,F=L.length;b<F;b++){const w=Array.isArray(L[b])?L[b]:[L[b]];for(let I=0,G=w.length;I<G;I++){const z=w[I];if(S(z,b,I,U)===!0){const $=z.__offset,ie=Array.isArray(z.value)?z.value:[z.value];let se=0;for(let Y=0;Y<ie.length;Y++){const J=ie[Y],K=R(J);typeof J=="number"||typeof J=="boolean"?(z.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,$+se,z.__data)):J.isMatrix3?(z.__data[0]=J.elements[0],z.__data[1]=J.elements[1],z.__data[2]=J.elements[2],z.__data[3]=0,z.__data[4]=J.elements[3],z.__data[5]=J.elements[4],z.__data[6]=J.elements[5],z.__data[7]=0,z.__data[8]=J.elements[6],z.__data[9]=J.elements[7],z.__data[10]=J.elements[8],z.__data[11]=0):ArrayBuffer.isView(J)?z.__data.set(new J.constructor(J.buffer,J.byteOffset,z.__data.length)):(J.toArray(z.__data,se),se+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,N,L,U){const b=P.value,F=N+"_"+L;if(U[F]===void 0)return typeof b=="number"||typeof b=="boolean"?U[F]=b:ArrayBuffer.isView(b)?U[F]=b.slice():U[F]=b.clone(),!0;{const w=U[F];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return U[F]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function M(P){const N=P.uniforms;let L=0;const U=16;for(let F=0,w=N.length;F<w;F++){const I=Array.isArray(N[F])?N[F]:[N[F]];for(let G=0,z=I.length;G<z;G++){const $=I[G],ie=Array.isArray($.value)?$.value:[$.value];for(let se=0,Y=ie.length;se<Y;se++){const J=ie[se],K=R(J),j=L%U,le=j%K.boundary,ce=j+le;L+=le,ce!==0&&U-ce<K.storage&&(L+=U-ce),$.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=K.storage}}}const b=L%U;return b>0&&(L+=U-b),P.__size=L,P.__cache={},this}function R(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(N.boundary=16,N.storage=P.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",P),N}function x(P){const N=P.target;N.removeEventListener("dispose",x);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function y(){for(const P in a)s.deleteBuffer(a[P]);u=[],a={},l={}}return{bind:f,update:p,dispose:y}}const wM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function AM(){return Fi===null&&(Fi=new A_(wM,16,16,Jr,Ki),Fi.name="DFG_LUT",Fi.minFilter=Rn,Fi.magFilter=Rn,Fi.wrapS=$i,Fi.wrapT=$i,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class RM{constructor(e={}){const{canvas:t=Gv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Kn}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const R=S,x=new Set([$c,qc,jc]),y=new Set([Kn,Pi,wo,Ao,Xc,Yc]),P=new Uint32Array(4),N=new Int32Array(4),L=new C;let U=null,b=null;const F=[],w=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let z=!1,$=null;this._outputColorSpace=si;let ie=0,se=0,Y=null,J=-1,K=null;const j=new tn,le=new tn;let ce=null;const B=new wt(0);let ee=0,Ue=t.width,He=t.height,De=1,ae=null,Se=null;const pe=new tn(0,0,Ue,He),Ne=new tn(0,0,Ue,He);let Ze=!1;const Je=new eh;let Bt=!1,ht=!1;const At=new $t,Ot=new C,pt=new tn,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function En(){return Y===null?De:1}let V=r;function kt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bc}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ot,!1),V===null){const X="webgl2";if(V=kt(X,A),V===null)throw kt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Et("WebGLRenderer: "+A.message),A}let mt,Lt,be,Vt,D,E,q,fe,me,xe,Pe,ue,de,Ie,Fe,we,Me,it,st,gt,H,Te,he;function Oe(){mt=new A1(V),mt.init(),H=new vM(V,mt),Lt=new _1(V,mt,e,H),be=new mM(V,mt),Lt.reversedDepthBuffer&&v&&be.buffers.depth.setReversed(!0),Vt=new P1(V),D=new tM,E=new gM(V,mt,be,D,Lt,H,Vt),q=new w1(G),fe=new dS(V),Te=new g1(V,fe),me=new R1(V,fe,Vt,Te),xe=new L1(V,me,fe,Te,Vt),it=new b1(V,Lt,E),Fe=new S1(D),Pe=new eM(G,q,mt,Lt,Te,Fe),ue=new EM(G,D),de=new iM,Ie=new cM(mt),Me=new m1(G,q,be,xe,M,f),we=new pM(G,xe,Lt),he=new TM(V,Vt,Lt,be),st=new v1(V,mt,Vt),gt=new C1(V,mt,Vt),Vt.programs=Pe.programs,G.capabilities=Lt,G.extensions=mt,G.properties=D,G.renderLists=de,G.shadowMap=we,G.state=be,G.info=Vt}Oe(),R!==Kn&&(I=new N1(R,t.width,t.height,a,l));const Re=new xM(G,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(A){A!==void 0&&(De=A,this.setSize(Ue,He,!1))},this.getSize=function(A){return A.set(Ue,He)},this.setSize=function(A,X,re=!0){if(Re.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=A,He=X,t.width=Math.floor(A*De),t.height=Math.floor(X*De),re===!0&&(t.style.width=A+"px",t.style.height=X+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Ue*De,He*De).floor()},this.setDrawingBufferSize=function(A,X,re){Ue=A,He=X,De=re,t.width=Math.floor(A*re),t.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(R===Kn){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,X,re,te){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,X,re,te),be.viewport(j.copy(pe).multiplyScalar(De).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,X,re,te){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,X,re,te),be.scissor(le.copy(Ne).multiplyScalar(De).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){be.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let te=0;if(A){let Q=!1;if(Y!==null){const Ce=Y.texture.format;Q=x.has(Ce)}if(Q){const Ce=Y.texture.type,ke=y.has(Ce),Ae=Me.getClearColor(),Xe=Me.getClearAlpha(),Ke=Ae.r,at=Ae.g,lt=Ae.b;ke?(P[0]=Ke,P[1]=at,P[2]=lt,P[3]=Xe,V.clearBufferuiv(V.COLOR,0,P)):(N[0]=Ke,N[1]=at,N[2]=lt,N[3]=Xe,V.clearBufferiv(V.COLOR,0,N))}else te|=V.COLOR_BUFFER_BIT}X&&(te|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),Me.dispose(),de.dispose(),Ie.dispose(),D.dispose(),q.dispose(),xe.dispose(),Te.dispose(),he.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",as),Re.removeEventListener("sessionend",Js),ar.stop()};function ge(A){A.preventDefault(),zd("WebGLRenderer: Context Lost."),z=!0}function We(){zd("WebGLRenderer: Context Restored."),z=!1;const A=Vt.autoReset,X=we.enabled,re=we.autoUpdate,te=we.needsUpdate,Q=we.type;Oe(),Vt.autoReset=A,we.enabled=X,we.autoUpdate=re,we.needsUpdate=te,we.type=Q}function ot(A){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const X=A.target;X.removeEventListener("dispose",Ft),Rt(X)}function Rt(A){On(A),D.remove(A)}function On(A){const X=D.get(A).programs;X!==void 0&&(X.forEach(function(re){Pe.releaseProgram(re)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,te,Q,Ce){X===null&&(X=Kt);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=Tl(A,X,re,te,Q);be.setMaterial(te,ke);let Xe=re.index,Ke=1;if(te.wireframe===!0){if(Xe=me.getWireframeAttribute(re),Xe===void 0)return;Ke=2}const at=re.drawRange,lt=re.attributes.position;let je=at.start*Ke,xt=(at.start+at.count)*Ke;Ce!==null&&(je=Math.max(je,Ce.start*Ke),xt=Math.min(xt,(Ce.start+Ce.count)*Ke)),Xe!==null?(je=Math.max(je,0),xt=Math.min(xt,Xe.count)):lt!=null&&(je=Math.max(je,0),xt=Math.min(xt,lt.count));const Ht=xt-je;if(Ht<0||Ht===1/0)return;Te.setup(Q,te,Ae,re,Xe);let jt,Dt=st;if(Xe!==null&&(jt=fe.get(Xe),Dt=gt,Dt.setIndex(jt)),Q.isMesh)te.wireframe===!0?(be.setLineWidth(te.wireframeLinewidth*En()),Dt.setMode(V.LINES)):Dt.setMode(V.TRIANGLES);else if(Q.isLine){let an=te.linewidth;an===void 0&&(an=1),be.setLineWidth(an*En()),Q.isLineSegments?Dt.setMode(V.LINES):Q.isLineLoop?Dt.setMode(V.LINE_LOOP):Dt.setMode(V.LINE_STRIP)}else Q.isPoints?Dt.setMode(V.POINTS):Q.isSprite&&Dt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const an=Q._multiDrawStarts,Be=Q._multiDrawCounts,Tn=Q._multiDrawCount,vt=Xe?fe.get(Xe).bytesPerElement:1,Vn=D.get(te).currentProgram.getUniforms();for(let Wn=0;Wn<Tn;Wn++)Vn.setValue(V,"_gl_DrawID",Wn),Dt.render(an[Wn]/vt,Be[Wn])}else if(Q.isInstancedMesh)Dt.renderInstances(je,Ht,Q.count);else if(re.isInstancedBufferGeometry){const an=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Be=Math.min(re.instanceCount,an);Dt.renderInstances(je,Ht,Be)}else Dt.render(je,Ht)};function li(A,X,re){A.transparent===!0&&A.side===Mt&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Qs(A,X,re),A.side=vr,A.needsUpdate=!0,Qs(A,X,re),A.side=Mt):Qs(A,X,re)}this.compile=function(A,X,re=null){re===null&&(re=A),b=Ie.get(re),b.init(X),w.push(b),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),A!==re&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),b.setupLights();const te=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){const Ae=Ce[ke];li(Ae,re,Q),te.add(Ae)}else li(Ce,re,Q),te.add(Ce)}),b=w.pop(),te},this.compileAsync=function(A,X,re=null){const te=this.compile(A,X,re);return new Promise(Q=>{function Ce(){if(te.forEach(function(ke){D.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){Q(A);return}setTimeout(Ce,10)}mt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let or=null;function Zs(A){or&&or(A)}function as(){ar.stop()}function Js(){ar.start()}const ar=new Lp;ar.setAnimationLoop(Zs),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(A){or=A,Re.setAnimationLoop(A),A===null?ar.stop():ar.start()},Re.addEventListener("sessionstart",as),Re.addEventListener("sessionend",Js),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;$!==null&&$.renderStart(A,X);const re=Re.enabled===!0&&Re.isPresenting===!0,te=I!==null&&(Y===null||re)&&I.begin(G,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(G,A,X,Y),b=Ie.get(A,w.length),b.init(X),b.state.textureUnits=E.getTextureUnits(),w.push(b),At.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Je.setFromProjectionMatrix(At,Li,X.reversedDepth),ht=this.localClippingEnabled,Bt=Fe.init(this.clippingPlanes,ht),U=de.get(A,F.length),U.init(),F.push(U),Re.enabled===!0&&Re.isPresenting===!0){const ke=G.xr.getDepthSensingMesh();ke!==null&&qo(ke,X,-1/0,G.sortObjects)}qo(A,X,0,G.sortObjects),U.finish(),G.sortObjects===!0&&U.sort(ae,Se),zt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,zt&&Me.addToRenderList(U,A),this.info.render.frame++,Bt===!0&&Fe.beginShadows();const Q=b.state.shadowsArray;if(we.render(Q,A,X),Bt===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&I.hasRenderPass())===!1){const ke=U.opaque,Ae=U.transmissive;if(b.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(Ae.length>0)for(let Ke=0,at=Xe.length;Ke<at;Ke++){const lt=Xe[Ke];Hi(ke,Ae,A,lt)}zt&&Me.render(A);for(let Ke=0,at=Xe.length;Ke<at;Ke++){const lt=Xe[Ke];Ml(U,A,lt,lt.viewport)}}else Ae.length>0&&Hi(ke,Ae,A,X),zt&&Me.render(A),Ml(U,A,X)}Y!==null&&se===0&&(E.updateMultisampleRenderTarget(Y),E.updateRenderTargetMipmap(Y)),te&&I.end(G),A.isScene===!0&&A.onAfterRender(G,A,X),Te.resetDefaultState(),J=-1,K=null,w.pop(),w.length>0?(b=w[w.length-1],E.setTextureUnits(b.state.textureUnits),Bt===!0&&Fe.setGlobalState(G.clippingPlanes,b.state.camera)):b=null,F.pop(),F.length>0?U=F[F.length-1]:U=null,$!==null&&$.renderEnd()};function qo(A,X,re,te){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Je.intersectsSprite(A)){te&&pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const ke=xe.update(A),Ae=A.material;Ae.visible&&U.push(A,ke,Ae,re,pt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Je.intersectsObject(A))){const ke=xe.update(A),Ae=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pt.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),pt.copy(ke.boundingSphere.center)),pt.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Ae)){const Xe=ke.groups;for(let Ke=0,at=Xe.length;Ke<at;Ke++){const lt=Xe[Ke],je=Ae[lt.materialIndex];je&&je.visible&&U.push(A,ke,je,re,pt.z,lt)}}else Ae.visible&&U.push(A,ke,Ae,re,pt.z,null)}}const Ce=A.children;for(let ke=0,Ae=Ce.length;ke<Ae;ke++)qo(Ce[ke],X,re,te)}function Ml(A,X,re,te){const{opaque:Q,transmissive:Ce,transparent:ke}=A;b.setupLightsView(re),Bt===!0&&Fe.setGlobalState(G.clippingPlanes,re),te&&be.viewport(j.copy(te)),Q.length>0&&ls(Q,X,re),Ce.length>0&&ls(Ce,X,re),ke.length>0&&ls(ke,X,re),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Hi(A,X,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[te.id]===void 0){const je=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[te.id]=new Di(1,1,{generateMipmaps:!0,type:je?Ki:Kn,minFilter:Kr,samples:Math.max(4,Lt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Ce=b.state.transmissionRenderTarget[te.id],ke=te.viewport||j;Ce.setSize(ke.z*G.transmissionResolutionScale,ke.w*G.transmissionResolutionScale);const Ae=G.getRenderTarget(),Xe=G.getActiveCubeFace(),Ke=G.getActiveMipmapLevel();G.setRenderTarget(Ce),G.getClearColor(B),ee=G.getClearAlpha(),ee<1&&G.setClearColor(16777215,.5),G.clear(),zt&&Me.render(re);const at=G.toneMapping;G.toneMapping=Ci;const lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),b.setupLightsView(te),Bt===!0&&Fe.setGlobalState(G.clippingPlanes,te),ls(A,re,te),E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce),mt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let xt=0,Ht=X.length;xt<Ht;xt++){const jt=X[xt],{object:Dt,geometry:an,material:Be,group:Tn}=jt;if(Be.side===Mt&&Dt.layers.test(te.layers)){const vt=Be.side;Be.side=kn,Be.needsUpdate=!0,$o(Dt,re,te,an,Be,Tn),Be.side=vt,Be.needsUpdate=!0,je=!0}}je===!0&&(E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce))}G.setRenderTarget(Ae,Xe,Ke),G.setClearColor(B,ee),lt!==void 0&&(te.viewport=lt),G.toneMapping=at}function ls(A,X,re){const te=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ce=A.length;Q<Ce;Q++){const ke=A[Q],{object:Ae,geometry:Xe,group:Ke}=ke;let at=ke.material;at.allowOverride===!0&&te!==null&&(at=te),Ae.layers.test(re.layers)&&$o(Ae,X,re,Xe,at,Ke)}}function $o(A,X,re,te,Q,Ce){A.onBeforeRender(G,X,re,te,Q,Ce),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(G,X,re,te,A,Ce),Q.transparent===!0&&Q.side===Mt&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,G.renderBufferDirect(re,X,te,Q,A,Ce),Q.side=vr,Q.needsUpdate=!0,G.renderBufferDirect(re,X,te,Q,A,Ce),Q.side=Mt):G.renderBufferDirect(re,X,te,Q,A,Ce),A.onAfterRender(G,X,re,te,Q,Ce)}function Qs(A,X,re){X.isScene!==!0&&(X=Kt);const te=D.get(A),Q=b.state.lights,Ce=b.state.shadowsArray,ke=Q.state.version,Ae=Pe.getParameters(A,Q.state,Ce,X,re,b.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ae);let Ke=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=q.get(A.envMap||te.environment,at),te.envMapRotation=te.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",Ft),Ke=new Map,te.programs=Ke);let lt=Ke.get(Xe);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===ke)return Zo(A,Ae),lt}else Ae.uniforms=Pe.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,re,Ae),A.onBeforeCompile(Ae,G),lt=Pe.acquireProgram(Ae,Xe),Ke.set(Xe,lt),te.uniforms=Ae.uniforms;const je=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Fe.uniform),Zo(A,Ae),te.needsLights=Ch(A),te.lightsStateVersion=ke,te.needsLights&&(je.ambientLightColor.value=Q.state.ambient,je.lightProbe.value=Q.state.probe,je.directionalLights.value=Q.state.directional,je.directionalLightShadows.value=Q.state.directionalShadow,je.spotLights.value=Q.state.spot,je.spotLightShadows.value=Q.state.spotShadow,je.rectAreaLights.value=Q.state.rectArea,je.ltc_1.value=Q.state.rectAreaLTC1,je.ltc_2.value=Q.state.rectAreaLTC2,je.pointLights.value=Q.state.point,je.pointLightShadows.value=Q.state.pointShadow,je.hemisphereLights.value=Q.state.hemi,je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,je.spotLightMatrix.value=Q.state.spotLightMatrix,je.spotLightMap.value=Q.state.spotLightMap,je.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=b.state.lightProbeGridArray.length>0,te.currentProgram=lt,te.uniformsList=null,lt}function Ko(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=vl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Zo(A,X){const re=D.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function El(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(X.matrixWorld);for(let re=0,te=A.length;re<te;re++){const Q=A[re];if(Q.texture!==null&&Q.boundingBox.containsPoint(L))return Q}return null}function Tl(A,X,re,te,Q){X.isScene!==!0&&(X=Kt),E.resetTextureUnits();const Ce=X.fog,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Ae=Y===null?G.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:yt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ke=q.get(te.envMap||ke,Xe),at=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),je=!!re.morphAttributes.position,xt=!!re.morphAttributes.normal,Ht=!!re.morphAttributes.color;let jt=Ci;te.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(jt=G.toneMapping);const Dt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,an=Dt!==void 0?Dt.length:0,Be=D.get(te),Tn=b.state.lights;if(Bt===!0&&(ht===!0||A!==K)){const Nt=A===K&&te.id===J;Fe.setState(te,A,Nt)}let vt=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Tn.state.version||Be.outputColorSpace!==Ae||Q.isBatchedMesh&&Be.batching===!1||!Q.isBatchedMesh&&Be.batching===!0||Q.isBatchedMesh&&Be.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Be.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Be.instancing===!1||!Q.isInstancedMesh&&Be.instancing===!0||Q.isSkinnedMesh&&Be.skinning===!1||!Q.isSkinnedMesh&&Be.skinning===!0||Q.isInstancedMesh&&Be.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Be.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Be.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Be.instancingMorph===!1&&Q.morphTexture!==null||Be.envMap!==Ke||te.fog===!0&&Be.fog!==Ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Fe.numPlanes||Be.numIntersection!==Fe.numIntersection)||Be.vertexAlphas!==at||Be.vertexTangents!==lt||Be.morphTargets!==je||Be.morphNormals!==xt||Be.morphColors!==Ht||Be.toneMapping!==jt||Be.morphTargetsCount!==an||!!Be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Be.__version=te.version);let Vn=Be.currentProgram;vt===!0&&(Vn=Qs(te,X,Q),$&&te.isNodeMaterial&&$.onUpdateProgram(te,Vn,Be));let Wn=!1,St=!1,lr=!1;const Pt=Vn.getUniforms(),Wt=Be.uniforms;if(be.useProgram(Vn.program)&&(Wn=!0,St=!0,lr=!0),te.id!==J&&(J=te.id,St=!0),Be.needsLights){const Nt=El(b.state.lightProbeGridArray,Q);Be.lightProbeGrid!==Nt&&(Be.lightProbeGrid=Nt,St=!0)}if(Wn||K!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(V,"projectionMatrix",A.projectionMatrix),Pt.setValue(V,"viewMatrix",A.matrixWorldInverse);const xi=Pt.map.cameraPosition;xi!==void 0&&xi.setValue(V,Ot.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,St=!0,lr=!0)}if(Be.needsLights&&(Tn.state.directionalShadowMap.length>0&&Pt.setValue(V,"directionalShadowMap",Tn.state.directionalShadowMap,E),Tn.state.spotShadowMap.length>0&&Pt.setValue(V,"spotShadowMap",Tn.state.spotShadowMap,E),Tn.state.pointShadowMap.length>0&&Pt.setValue(V,"pointShadowMap",Tn.state.pointShadowMap,E)),Q.isSkinnedMesh){Pt.setOptional(V,Q,"bindMatrix"),Pt.setOptional(V,Q,"bindMatrixInverse");const Nt=Q.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Pt.setValue(V,"boneTexture",Nt.boneTexture,E))}Q.isBatchedMesh&&(Pt.setOptional(V,Q,"batchingTexture"),Pt.setValue(V,"batchingTexture",Q._matricesTexture,E),Pt.setOptional(V,Q,"batchingIdTexture"),Pt.setValue(V,"batchingIdTexture",Q._indirectTexture,E),Pt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(V,"batchingColorTexture",Q._colorsTexture,E));const yi=re.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&it.update(Q,re,Vn),(St||Be.receiveShadow!==Q.receiveShadow)&&(Be.receiveShadow=Q.receiveShadow,Pt.setValue(V,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Wt.envMapIntensity.value=X.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=AM()),St){if(Pt.setValue(V,"toneMappingExposure",G.toneMappingExposure),Be.needsLights&&Rh(Wt,lr),Ce&&te.fog===!0&&ue.refreshFogUniforms(Wt,Ce),ue.refreshMaterialUniforms(Wt,te,De,He,b.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const Nt=Be.lightProbeGrid;Wt.probesSH.value=Nt.texture,Wt.probesMin.value.copy(Nt.boundingBox.min),Wt.probesMax.value.copy(Nt.boundingBox.max),Wt.probesResolution.value.copy(Nt.resolution)}vl.upload(V,Ko(Be),Wt,E)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(vl.upload(V,Ko(Be),Wt,E),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(V,"center",Q.center),Pt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(V,"normalMatrix",Q.normalMatrix),Pt.setValue(V,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){const Nt=te.uniformsGroups;for(let xi=0,Gi=Nt.length;xi<Gi;xi++){const cs=Nt[xi];he.update(cs,Vn),he.bind(cs,Vn)}}return Vn}function Rh(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Ch(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,re){const te=D.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=X,D.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const re=D.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const Zt=V.createFramebuffer();this.setRenderTarget=function(A,X=0,re=0){Y=A,ie=X,se=re;let te=null,Q=!1,Ce=!1;if(A){const Ae=D.get(A);if(Ae.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),j.copy(A.viewport),le.copy(A.scissor),ce=A.scissorTest,be.viewport(j),be.scissor(le),be.setScissorTest(ce),J=-1;return}else if(Ae.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ae.__hasExternalTextures)E.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const at=A.depthTexture;if(Ae.__boundDepthTexture!==at){if(at!==null&&D.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ke=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?te=Ke[X][re]:te=Ke[X],Q=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?te=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?te=Ke[re]:te=Ke,j.copy(A.viewport),le.copy(A.scissor),ce=A.scissorTest}else j.copy(pe).multiplyScalar(De).floor(),le.copy(Ne).multiplyScalar(De).floor(),ce=Ze;if(re!==0&&(te=Zt),be.bindFramebuffer(V.FRAMEBUFFER,te)&&be.drawBuffers(A,te),be.viewport(j),be.scissor(le),be.setScissorTest(ce),Q){const Ae=D.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ae.__webglTexture,re)}else if(Ce){const Ae=X;for(let Xe=0;Xe<A.textures.length;Xe++){const Ke=D.get(A.textures[Xe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,re,Ae)}}else if(A!==null&&re!==0){const Ae=D.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,re)}J=-1},this.readRenderTargetPixels=function(A,X,re,te,Q,Ce,ke,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){be.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const Ke=A.textures[Ae],at=Ke.format,lt=Ke.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),!Lt.textureFormatReadable(at)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(lt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-te&&re>=0&&re<=A.height-Q&&V.readPixels(X,re,te,Q,H.convert(at),H.convert(lt),Ce)}finally{const Ke=Y!==null?D.get(Y).__webglFramebuffer:null;be.bindFramebuffer(V.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,te,Q,Ce,ke,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(X>=0&&X<=A.width-te&&re>=0&&re<=A.height-Q){be.bindFramebuffer(V.FRAMEBUFFER,Xe);const Ke=A.textures[Ae],at=Ke.format,lt=Ke.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),!Lt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,je),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(X,re,te,Q,H.convert(at),H.convert(lt),0);const xt=Y!==null?D.get(Y).__webglFramebuffer:null;be.bindFramebuffer(V.FRAMEBUFFER,xt);const Ht=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Vv(V,Ht,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,je),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(je),V.deleteSync(Ht),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){const te=Math.pow(2,-re),Q=Math.floor(A.image.width*te),Ce=Math.floor(A.image.height*te),ke=X!==null?X.x:0,Ae=X!==null?X.y:0;E.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,ke,Ae,Q,Ce),be.unbindTexture()};const Ph=V.createFramebuffer(),Jo=V.createFramebuffer();this.copyTextureToTexture=function(A,X,re=null,te=null,Q=0,Ce=0){let ke,Ae,Xe,Ke,at,lt,je,xt,Ht;const jt=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(re!==null)ke=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,Ke=re.min.x,at=re.min.y,lt=re.isBox3?re.min.z:0;else{const Wt=Math.pow(2,-Q);ke=Math.floor(jt.width*Wt),Ae=Math.floor(jt.height*Wt),A.isDataArrayTexture?Xe=jt.depth:A.isData3DTexture?Xe=Math.floor(jt.depth*Wt):Xe=1,Ke=0,at=0,lt=0}te!==null?(je=te.x,xt=te.y,Ht=te.z):(je=0,xt=0,Ht=0);const Dt=H.convert(X.format),an=H.convert(X.type);let Be;X.isData3DTexture?(E.setTexture3D(X,0),Be=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(E.setTexture2DArray(X,0),Be=V.TEXTURE_2D_ARRAY):(E.setTexture2D(X,0),Be=V.TEXTURE_2D),be.activeTexture(V.TEXTURE0),be.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),be.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),be.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Tn=be.getParameter(V.UNPACK_ROW_LENGTH),vt=be.getParameter(V.UNPACK_IMAGE_HEIGHT),Vn=be.getParameter(V.UNPACK_SKIP_PIXELS),Wn=be.getParameter(V.UNPACK_SKIP_ROWS),St=be.getParameter(V.UNPACK_SKIP_IMAGES);be.pixelStorei(V.UNPACK_ROW_LENGTH,jt.width),be.pixelStorei(V.UNPACK_IMAGE_HEIGHT,jt.height),be.pixelStorei(V.UNPACK_SKIP_PIXELS,Ke),be.pixelStorei(V.UNPACK_SKIP_ROWS,at),be.pixelStorei(V.UNPACK_SKIP_IMAGES,lt);const lr=A.isDataArrayTexture||A.isData3DTexture,Pt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Wt=D.get(A),yi=D.get(X),Nt=D.get(Wt.__renderTarget),xi=D.get(yi.__renderTarget);be.bindFramebuffer(V.READ_FRAMEBUFFER,Nt.__webglFramebuffer),be.bindFramebuffer(V.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Gi=0;Gi<Xe;Gi++)lr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(A).__webglTexture,Q,lt+Gi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(X).__webglTexture,Ce,Ht+Gi)),V.blitFramebuffer(Ke,at,ke,Ae,je,xt,ke,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);be.bindFramebuffer(V.READ_FRAMEBUFFER,null),be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||D.has(A)){const Wt=D.get(A),yi=D.get(X);be.bindFramebuffer(V.READ_FRAMEBUFFER,Ph),be.bindFramebuffer(V.DRAW_FRAMEBUFFER,Jo);for(let Nt=0;Nt<Xe;Nt++)lr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.__webglTexture,Q,lt+Nt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Wt.__webglTexture,Q),Pt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yi.__webglTexture,Ce,Ht+Nt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yi.__webglTexture,Ce),Q!==0?V.blitFramebuffer(Ke,at,ke,Ae,je,xt,ke,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):Pt?V.copyTexSubImage3D(Be,Ce,je,xt,Ht+Nt,Ke,at,ke,Ae):V.copyTexSubImage2D(Be,Ce,je,xt,Ke,at,ke,Ae);be.bindFramebuffer(V.READ_FRAMEBUFFER,null),be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Be,Ce,je,xt,Ht,ke,Ae,Xe,Dt,an,jt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Be,Ce,je,xt,Ht,ke,Ae,Xe,Dt,jt.data):V.texSubImage3D(Be,Ce,je,xt,Ht,ke,Ae,Xe,Dt,an,jt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,je,xt,ke,Ae,Dt,an,jt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,je,xt,jt.width,jt.height,Dt,jt.data):V.texSubImage2D(V.TEXTURE_2D,Ce,je,xt,ke,Ae,Dt,an,jt);be.pixelStorei(V.UNPACK_ROW_LENGTH,Tn),be.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vt),be.pixelStorei(V.UNPACK_SKIP_PIXELS,Vn),be.pixelStorei(V.UNPACK_SKIP_ROWS,Wn),be.pixelStorei(V.UNPACK_SKIP_IMAGES,St),Ce===0&&X.generateMipmaps&&V.generateMipmap(Be),be.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){ie=0,se=0,Y=null,be.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const lm={type:"change"},_h={type:"start"},cm={type:"end"},Sl=new Zu,um=new Ar,CM=Math.cos(70*Ga.DEG2RAD),fn=new C,Gn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sh=1e-6;class PM extends hS{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new yr,this._lastTargetPosition=new C,this._quat=new yr().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cp,this._sphericalDelta=new Cp,this._scale=1,this._panOffset=new C,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new C,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LM.bind(this),this._onPointerDown=bM.bind(this),this._onPointerUp=DM.bind(this),this._onContextMenu=zM.bind(this),this._onMouseWheel=UM.bind(this),this._onKeyDown=OM.bind(this),this._onTouchStart=FM.bind(this),this._onTouchMove=BM.bind(this),this._onMouseDown=NM.bind(this),this._onMouseMove=IM.bind(this),this._interceptControlDown=kM.bind(this),this._interceptControlUp=HM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lm),this.update(),this.state=Ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;fn.copy(t).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Gn:r>Math.PI&&(r-=Gn),a<-Math.PI?a+=Gn:a>Math.PI&&(a-=Gn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),t.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=fn.length();u=this._clampDistance(h*this._scale);const f=h-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new C(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new C(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Sl.origin.copy(this.object.position),Sl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sl.direction))<CM?this.object.lookAt(this.target):(um.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sl.intersectPlane(um,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sh||this._lastTargetPosition.distanceToSquared(this.target)>Sh?(this.dispatchEvent(lm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fn.setFromMatrixColumn(t,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,t){this.screenSpacePanning===!0?fn.setFromMatrixColumn(t,1):(fn.setFromMatrixColumn(t,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;fn.copy(a).sub(this.target);let l=fn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,h=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function bM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function LM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function DM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cm),this.state=Ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function NM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ut.DOLLY;break;case Ms.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ut.ROTATE}break;case Ms.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(_h)}function IM(s){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function UM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(s.preventDefault(),this.dispatchEvent(_h),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(cm))}function OM(s){this.enabled!==!1&&this._handleKeyDown(s)}function FM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ut.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ut.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(_h)}function BM(s){switch(this._trackPointer(s),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ut.NONE}}function zM(s){this.enabled!==!1&&s.preventDefault()}function kM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let $s=class extends Mn{constructor(e,t,r,a,l){super();const u=e.computeFrenetFrames(t,!1),h=[],f=[];for(let m=0;m<=t;m++){const _=m/t,v=Ga.lerp(r,a,_),S=e.getPoint(_),M=u.normals[m],R=u.binormals[m];for(let x=0;x<=l;x++){const y=x/l*Math.PI*2,P=Math.sin(y),N=Math.cos(y);h.push(S.x+v*(N*M.x+P*R.x),S.y+v*(N*M.y+P*R.y),S.z+v*(N*M.z+P*R.z))}}for(let m=0;m<t;m++)for(let _=0;_<l;_++){const v=m*(l+1)+_,S=(m+1)*(l+1)+_;f.push(v,S,v+1),f.push(S,S+1,v+1)}const p=[];for(let m=0;m<=t;m++)for(let _=0;_<=l;_++)p.push(m/t,_/l);this.setAttribute("uv",new It(p,2)),this.setAttribute("position",new It(h,3)),this.setIndex(f),this.computeVertexNormals()}};function yl(s,e=1,t=1.5){if(!s)return new en;const r=new Ws().load(s);return r.wrapS=r.wrapT=qi,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Bi(s,e=1,t=1.5){if(!s)return new en;const r=new Ws().load(s);return r.wrapS=r.wrapT=qi,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Ks(s,e,t,r,a,l,u){const h=[new C(.16,-.05,0),new C(.27,-.1,0),new C(.28,-.05,0),new C(-0,-.04,0),new C(-.28,-.05,0),new C(-.27,-.1,0),new C(-.28,-.1,0)],f=new nn(h),p=new ut({map:yl(s)}),m=new nt(new $s(f,100,.04,.02,2),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="chassis",{mesh:m,mat:p}}function Xo(s,e,t,r,a,l,u){const h=[new C(.16,-.05,0),new C(.27,-.1,0),new C(.28,-.05,0),new C(-0,-.04,0),new C(-.4,-.05,0),new C(-.37,-.1,0),new C(-.4,-.1,0)],f=new nn(h),p=new ut({map:yl(s)}),m=new nt(new $s(f,100,.04,.02,2),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="chassis",{mesh:m,mat:p}}function hm(s,e,t,r,a,l,u){const h=new ut({map:Bi(s)}),f=new nt(new rr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-sit-bottom",{mesh:f,mat:h}}function fm(s,e,t,r,a,l,u){const h=new ut({map:Bi(s)}),f=new nt(new rr(.028,.14,32),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-left-bottom",{mesh:f,mat:h}}function dm(s,e,t,r,a,l,u){const h=new ut({map:Bi(s)}),f=new nt(new rr(.028,.14,32,64,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-right-Bottom",{mesh:f,mat:h}}function GM(s,e,t,r,a,l,u){const h=[new C(1.05,.02,.05),new C(.75,0,.03),new C(.2,0,.01),new C(.1,0,-.01),new C(-.1,.05,-.03),new C(-.5,.05,-.05)],f=new nn(h),p=new ut({map:Bi(s),side:Mt}),m=new nt(new $s(f,100,.04,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="tube-right-hoop",{mesh:m,mat:p}}function VM(s,e,t,r,a,l,u){const h=[new C(1.05,.02,-.05),new C(.75,0,-.03),new C(.2,0,-.01),new C(.1,0,.01),new C(-.1,.05,.03),new C(-.5,.05,.05)],f=new nn(h),p=new ut({map:Bi(s),side:Mt}),m=new nt(new $s(f,100,.04,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="tube-right-hoop",{mesh:m,mat:p}}function pm(s,e,t,r,a,l,u){const h=new ut({map:Bi(s),side:Mt}),f=new nt(new Hn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottomHoop",{mesh:f,mat:h}}function mm(s,e,t,r,a,l,u){const h=new ut({map:Bi(s),side:Mt}),f=new nt(new Hn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTopHoop",{mesh:f,mat:h}}function WM(s,e,t,r){const a=[new C(-.9,-.12,-.1),new C(0,-.12,-.1),new C(.6,-.12,-.1),new C(.7,0,-.12),new C(.63,.28,-.2)],l=new nn(a),u=new ut({map:Bi(s),side:Mt}),h=new nt(new $s(l,20,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:u}}function XM(s,e,t,r){const a=[new C(-.9,-.12,.1),new C(0,-.12,.1),new C(.6,-.12,.1),new C(.7,0,.12),new C(.63,.28,.2)],l=new nn(a),u=new ut({map:Bi(s),side:Mt}),h=new nt(new $s(l,100,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:u}}function gm(s,e,t,r,a,l,u){const h=new ut({map:yl(s),side:Mt}),f=new nt(new Hn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottom",{mesh:f,mat:h}}function vm(s,e,t,r,a,l,u){const h=new ut({map:yl(s),side:Mt}),f=new nt(new Hn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTop",{mesh:f,mat:h}}function _m(s,e,t,r,a,l,u){const h=[new C(.7,.4,.15),new C(.5,.4,.15),new C(.2,.4,.15),new C(-.2,.4,.15),new C(-.4,.4,.15),new C(-.2,.3,.15),new C(.5,.4,.15),new C(.7,.4,.15)],f=new nn(h),p=new ut({map:Bi(s)}),m=new nt(new ss(f,100,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="guide",{mesh:m,mat:p}}const YM=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const a=cn.useRef(null),l=cn.useRef([]);return cn.useEffect(()=>{const u=new es;u.name="luge",l.current=[],[Ks(e,-.7,.325,0,0,1.57,0),Ks(e,-.6,.33,0,0,1.57,0),Ks(e,-.5,.335,0,0,1.57,0),Ks(e,-.4,.34,0,0,1.57,0),Ks(e,-.3,.345,0,0,1.57,0),Ks(e,-.2,.35,0,0,1.57,0)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)}),[Xo(e,-.4,.34,.2,0,0,.05),Xo(e,-.4,.34,.1,0,0,.05),Xo(e,-.4,.34,0,0,0,.05),Xo(e,-.4,.34,-.1,0,0,.05),Xo(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)}),[hm(t,-.745,.25,0,1.57,1.57,0),hm(t,-.155,.285,0,1.57,1.57,0)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)}),[fm(t,-.75,.15,-.26,0,-.1,-.4),fm(t,-.2,.16,-.26,0,0,.2)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)}),[dm(t,-.75,.15,.26,0,.1,-.4),dm(t,-.2,.16,.26,0,0,.2)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)});const v=GM(t,.2,.28,.24,1.57,0,3.13);u.add(v.mesh),l.current.push(v.mat);const S=VM(t,.2,.28,-.24,-1.57,0,3.13);u.add(S.mesh),l.current.push(S.mat),[pm(t,-.84,.235,.23,0,0,0),pm(t,-.84,.235,-.23,0,0,0)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)}),[mm(t,.7,.33,.184,0,0,0),mm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)});const x=WM(t,0,.19,.37);u.add(x.mesh),l.current.push(x.mat);const y=XM(t,0,.19,-.37);return u.add(y.mesh),l.current.push(y.mat),[gm(t,-.88,.08,.27,0,0,0),gm(t,-.88,.08,-.27,0,0,0)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)}),[vm(t,.63,.465,.171,0,0,0),vm(t,.63,.465,-.171,0,0,0)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)}),[_m(r,-.03,.2,.52,-1.57,0,-.1),_m(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:U,mat:b})=>{u.add(U),l.current.push(b)}),a.current=u,s.add(u),()=>{s.remove(u),u.traverse(U=>{U.isMesh&&(U.geometry.dispose(),U.material.dispose())})}},[s,e,t,r]),null};let Yo=class extends Mn{constructor(e,t,r,a,l){super();const u=e.computeFrenetFrames(t,!1),h=[],f=[];for(let m=0;m<=t;m++){const _=m/t,v=Ga.lerp(r,a,_),S=e.getPoint(_),M=u.normals[m],R=u.binormals[m];for(let x=0;x<=l;x++){const y=x/l*Math.PI*2,P=Math.sin(y),N=Math.cos(y);h.push(S.x+v*(N*M.x+P*R.x),S.y+v*(N*M.y+P*R.y),S.z+v*(N*M.z+P*R.z))}}for(let m=0;m<t;m++)for(let _=0;_<l;_++){const v=m*(l+1)+_,S=(m+1)*(l+1)+_;f.push(v,S,v+1),f.push(S,S+1,v+1)}const p=[];for(let m=0;m<=t;m++)for(let _=0;_<=l;_++)p.push(m/t,_/l);this.setAttribute("uv",new It(p,2)),this.setAttribute("position",new It(h,3)),this.setIndex(f),this.computeVertexNormals()}};function yh(s,e=1,t=1.5){if(!s)return new en;const r=new Ws().load(s);return r.wrapS=r.wrapT=qi,r.repeat.set(e,-t),r.needsUpdate=!0,r}function zi(s,e=1,t=1.5){if(!s)return new en;const r=new Ws().load(s);return r.wrapS=r.wrapT=qi,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Qn(s,e,t,r,a,l,u){const h=[new C(.16,-.05,0),new C(.27,-.1,0),new C(.28,-.05,0),new C(-0,-.06,0),new C(-.28,-.05,0),new C(-.27,-.1,0),new C(-.25,-.1,0)],f=new nn(h),p=new ut({map:yh(s)}),m=new nt(new Yo(f,100,.04,.02,2),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="chassis",{mesh:m,mat:p}}function Sm(s,e,t,r,a,l,u){const h=new ut({map:zi(s)}),f=new nt(new rr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-sit-bottom",{mesh:f,mat:h}}function ym(s,e,t,r,a,l,u){const h=new ut({map:zi(s)}),f=new nt(new rr(.028,.14,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-left-bottom",{mesh:f,mat:h}}function xm(s,e,t,r,a,l,u){const h=new ut({map:zi(s)}),f=new nt(new rr(.028,.14,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-right-Bottom",{mesh:f,mat:h}}function jM(s,e,t,r,a,l,u){const h=[new C(.95,.02,.05),new C(.75,0,.03),new C(.2,0,.01),new C(.1,0,-.01),new C(-.1,.05,-.03),new C(-.5,.05,-.05)],f=new nn(h),p=new ut({map:zi(s),side:Mt}),m=new nt(new Yo(f,100,.04,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="tube-right-hoop",{mesh:m,mat:p}}function qM(s,e,t,r,a,l,u){const h=[new C(.95,.02,-.05),new C(.75,0,-.03),new C(.2,0,-.01),new C(.1,0,.01),new C(-.1,.05,.03),new C(-.5,.05,.05)],f=new nn(h),p=new ut({map:zi(s),side:Mt}),m=new nt(new Yo(f,100,.04,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="tube-right-hoop",{mesh:m,mat:p}}function Mm(s,e,t,r,a,l,u){const h=new ut({map:zi(s),side:Mt}),f=new nt(new Hn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottomHoop",{mesh:f,mat:h}}function Em(s,e,t,r,a,l,u){const h=new ut({map:zi(s),side:Mt}),f=new nt(new Hn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTopHoop",{mesh:f,mat:h}}function $M(s,e,t,r){const a=[new C(-.8,-.12,-.1),new C(0,-.12,-.1),new C(.6,-.12,-.1),new C(.7,0,-.12),new C(.63,.28,-.2)],l=new nn(a),u=new ut({map:zi(s),side:Mt}),h=new nt(new Yo(l,20,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:u}}function KM(s,e,t,r){const a=[new C(-.8,-.12,.1),new C(0,-.12,.1),new C(.6,-.12,.1),new C(.7,0,.12),new C(.63,.28,.2)],l=new nn(a),u=new ut({map:zi(s),side:Mt}),h=new nt(new Yo(l,100,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:u}}function Tm(s,e,t,r,a,l,u){const h=new ut({map:yh(s),side:Mt}),f=new nt(new Hn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottom",{mesh:f,mat:h}}function wm(s,e,t,r,a,l,u){const h=new ut({map:yh(s),side:Mt}),f=new nt(new Hn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTop",{mesh:f,mat:h}}function Am(s,e,t,r,a,l,u){const h=[new C(.7,.4,.15),new C(.5,.4,.15),new C(.2,.4,.15),new C(-.2,.4,.15),new C(-.4,.4,.15),new C(-.2,.3,.15),new C(.5,.4,.15),new C(.7,.4,.15)],f=new nn(h),p=new ut({map:zi(s)}),m=new nt(new ss(f,100,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="guide",{mesh:m,mat:p}}const ZM=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const a=cn.useRef(null),l=cn.useRef([]);return cn.useEffect(()=>{const u=new es;u.name="luge",l.current=[],[Qn(e,-.56,.33,0,0,1.57,0),Qn(e,-.49,.333,0,0,1.57,0),Qn(e,-.42,.335,0,0,1.57,0),Qn(e,-.35,.34,0,0,1.57,0),Qn(e,-.27,.345,0,0,1.57,0),Qn(e,-.2,.35,0,0,1.57,0),Qn(e,-.4,.34,.2,0,0,.05),Qn(e,-.4,.34,.13,0,0,.05),Qn(e,-.4,.34,.07,0,0,.05),Qn(e,-.4,.34,0,0,0,.05),Qn(e,-.4,.34,-.07,0,0,.05),Qn(e,-.4,.34,-.13,0,0,.05),Qn(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)}),[Sm(t,-.645,.25,0,1.57,1.57,0),Sm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)}),[ym(t,-.65,.15,-.26,0,-.1,-.4),ym(t,-.1,.16,-.26,0,0,.2)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)}),[xm(t,-.65,.15,.26,0,.1,-.4),xm(t,-.1,.16,.26,0,0,.2)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)});const _=jM(t,.2,.28,.24,1.57,0,3.13);u.add(_.mesh),l.current.push(_.mat);const v=qM(t,.2,.28,-.24,-1.57,0,3.13);u.add(v.mesh),l.current.push(v.mat),[Mm(t,-.74,.235,.23,0,0,0),Mm(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)}),[Em(t,.7,.33,.184,0,0,0),Em(t,.7,.33,-.184,0,0,0)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)});const R=$M(t,0,.19,.37);u.add(R.mesh),l.current.push(R.mat);const x=KM(t,0,.19,-.37);return u.add(x.mesh),l.current.push(x.mat),[Tm(t,-.78,.07,.26,0,0,0),Tm(t,-.78,.07,-.26,0,0,0)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)}),[wm(t,.63,.471,.169,0,0,0),wm(t,.63,.471,-.169,0,0,0)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)}),[Am(r,-.03,.2,.52,-1.57,0,-.1),Am(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:L,mat:U})=>{u.add(L),l.current.push(U)}),a.current=u,s.add(u),()=>{s.remove(u),u.traverse(L=>{L.isMesh&&(L.geometry.dispose(),L.material.dispose())})}},[s,e,t,r]),null};class jo extends Mn{constructor(e,t,r,a,l){super();const u=e.computeFrenetFrames(t,!1),h=[],f=[];for(let m=0;m<=t;m++){const _=m/t,v=Ga.lerp(r,a,_),S=e.getPoint(_),M=u.normals[m],R=u.binormals[m];for(let x=0;x<=l;x++){const y=x/l*Math.PI*2,P=Math.sin(y),N=Math.cos(y);h.push(S.x+v*(N*M.x+P*R.x),S.y+v*(N*M.y+P*R.y),S.z+v*(N*M.z+P*R.z))}}for(let m=0;m<t;m++)for(let _=0;_<l;_++){const v=m*(l+1)+_,S=(m+1)*(l+1)+_;f.push(v,S,v+1),f.push(S,S+1,v+1)}const p=[];for(let m=0;m<=t;m++)for(let _=0;_<=l;_++)p.push(m/t,_/l);this.setAttribute("uv",new It(p,2)),this.setAttribute("position",new It(h,3)),this.setIndex(f),this.computeVertexNormals()}}function xh(s,e=1,t=1.5){if(!s)return new en;const r=new Ws().load(s);return r.wrapS=r.wrapT=qi,r.repeat.set(e,-t),r.needsUpdate=!0,r}function ki(s,e=1,t=1.5){if(!s)return new en;const r=new Ws().load(s);return r.wrapS=r.wrapT=qi,r.repeat.set(e,-t),r.needsUpdate=!0,r}function ei(s,e,t,r,a,l,u){const h=[new C(.16,-.05,0),new C(.27,-.1,0),new C(.28,-.05,0),new C(-0,-.06,0),new C(-.28,-.05,0),new C(-.27,-.1,0),new C(-.25,-.1,0)],f=new nn(h),p=new ut({map:xh(s)}),m=new nt(new jo(f,100,.04,.02,2),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="chassis",{mesh:m,mat:p}}function Rm(s,e,t,r,a,l,u){const h=new ut({map:ki(s)}),f=new nt(new rr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="tube-sit-bottom",{mesh:f,mat:h}}function Cm(s,e,t,r,a,l,u){const h=[new C(0,-.08,.03),new C(0,-.14,0),new C(0,0,0),new C(0,.14,.03),new C(0,.06,.03)],f=new nn(h),p=new ut({map:ki(s)}),m=new nt(new ss(f,3,.03,2),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="tube-left-bottom",{mesh:m,mat:p}}function Pm(s,e,t,r,a,l,u){const h=[new C(0,.08,-.03),new C(0,.14,0),new C(0,0,0),new C(0,-.12,.03),new C(0,-.06,.03)],f=new nn(h),p=new ut({map:ki(s)}),m=new nt(new ss(f,3,.03,2),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="tube-right-Bottom",{mesh:m,mat:p}}function JM(s,e,t,r,a,l,u){const h=[new C(.95,.02,.05),new C(.75,0,.03),new C(.2,0,.01),new C(.1,0,-.01),new C(-.1,.05,-.03),new C(-.5,.05,-.05)],f=new nn(h),p=new ut({map:ki(s),side:Mt}),m=new nt(new jo(f,100,.04,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="tube-right-hoop",{mesh:m,mat:p}}function QM(s,e,t,r,a,l,u){const h=[new C(.95,.02,-.05),new C(.75,0,-.03),new C(.2,0,-.01),new C(.1,0,.01),new C(-.1,.05,.03),new C(-.5,.05,.05)],f=new nn(h),p=new ut({map:ki(s),side:Mt}),m=new nt(new jo(f,100,.04,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="tube-right-hoop",{mesh:m,mat:p}}function bm(s,e,t,r,a,l,u){const h=new ut({map:ki(s),side:Mt}),f=new nt(new Hn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottomHoop",{mesh:f,mat:h}}function Lm(s,e,t,r,a,l,u){const h=new ut({map:ki(s),side:Mt}),f=new nt(new Hn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTopHoop",{mesh:f,mat:h}}function eE(s,e,t,r){const a=[new C(-.8,-.12,-.1),new C(0,-.12,-.1),new C(.6,-.12,-.1),new C(.7,0,-.12),new C(.63,.28,-.2)],l=new nn(a),u=new ut({map:ki(s),side:Mt}),h=new nt(new jo(l,20,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:u}}function tE(s,e,t,r){const a=[new C(-.8,-.12,.1),new C(0,-.12,.1),new C(.6,-.12,.1),new C(.7,0,.12),new C(.63,.28,.2)],l=new nn(a),u=new ut({map:ki(s),side:Mt}),h=new nt(new jo(l,100,.045,.01,20),u);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:u}}function Dm(s,e,t,r,a,l,u){const h=new ut({map:xh(s),side:Mt}),f=new nt(new Hn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapBottom",{mesh:f,mat:h}}function Nm(s,e,t,r,a,l,u){const h=new ut({map:xh(s),side:Mt}),f=new nt(new Hn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,u),f.name="CapTop",{mesh:f,mat:h}}function Im(s,e,t,r,a,l,u){const h=[new C(.7,.4,.15),new C(.5,.4,.15),new C(.2,.4,.15),new C(-.2,.4,.15),new C(-.4,.4,.15),new C(-.2,.3,.15),new C(.5,.4,.15),new C(.7,.4,.15)],f=new nn(h),p=new ut({map:ki(s)}),m=new nt(new ss(f,100,.01,20),p);return m.position.set(e,t,r),m.rotation.set(a,l,u),m.name="guide",{mesh:m,mat:p}}const nE=({scene:s,selectedColor:e,backgroundColor:t,guide:r,hoop:a,skating:l})=>{const u=cn.useRef(null),h=cn.useRef([]);return cn.useEffect(()=>{const f=new es;f.name="luge",h.current=[],[ei(e,-.56,.33,0,0,1.57,0),ei(e,-.49,.333,0,0,1.57,0),ei(e,-.42,.335,0,0,1.57,0),ei(e,-.35,.34,0,0,1.57,0),ei(e,-.27,.345,0,0,1.57,0),ei(e,-.2,.35,0,0,1.57,0),ei(e,-.4,.34,.2,0,0,.05),ei(e,-.4,.34,.13,0,0,.05),ei(e,-.4,.34,.07,0,0,.05),ei(e,-.4,.34,0,0,0,.05),ei(e,-.4,.34,-.07,0,0,.05),ei(e,-.4,.34,-.13,0,0,.05),ei(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)}),[Rm(t,-.645,.25,0,1.57,1.57,0),Rm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)}),[Cm(a,-.65,.16,-.26,0,0,0),Cm(a,-.2,.16,-.26,0,0,0)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)}),[Pm(a,-.65,.16,.26,0,0,0),Pm(a,-.2,.16,.26,0,0,0)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)});const S=JM(t,.2,.28,.24,1.57,0,3.13);f.add(S.mesh),h.current.push(S.mat);const M=QM(t,.2,.28,-.24,-1.57,0,3.13);f.add(M.mesh),h.current.push(M.mat),[bm(t,-.74,.235,.23,0,0,0),bm(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)}),[Lm(t,.7,.33,.184,0,0,0),Lm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)});const y=eE(l,0,.19,.37);f.add(y.mesh),h.current.push(y.mat);const P=tE(l,0,.19,-.37);return f.add(P.mesh),h.current.push(P.mat),[Dm(l,-.78,.07,.26,0,0,0),Dm(l,-.78,.07,-.26,0,0,0)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)}),[Nm(l,.63,.471,.169,0,0,0),Nm(l,.63,.471,-.169,0,0,0)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)}),[Im(r,-.03,.2,.52,-1.57,0,-.1),Im(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:b,mat:F})=>{f.add(b),h.current.push(F)}),u.current=f,s.add(f),()=>{s.remove(f),f.traverse(b=>{b.isMesh&&(b.geometry.dispose(),b.material.dispose())})}},[s,e,t,r,a,l]),null},iE=({img1:s,img2:e,img3:t,img4:r,img5:a,wood:l,guide:u,skating:h,hoop:f})=>{const p=cn.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:u,hoop:f,skating:h},{id:"color-2",value:e,src:e,bg:l,guide:u,hoop:f,skating:h},{id:"color-3",value:t,src:t,bg:l,guide:u,hoop:f,skating:h},{id:"color-4",value:r,src:r,bg:l,guide:u,hoop:f,skating:h},{id:"color-5",value:a,src:a,bg:l,guide:u,hoop:f,skating:h}],[s,e,t,r,a,l,u,f,h]),[m,_]=cn.useState(p[0].value),[v,S]=cn.useState(p[0].bg),[M,R]=cn.useState(p[0].guide),[x,y]=cn.useState(p[0].hoop),[P,N]=cn.useState(p[0].skating),[L,U]=cn.useState("Luge"),b=cn.useRef(null),[F,w]=cn.useState(null);return cn.useEffect(()=>{const I=b.current;if(!I)return;const G=new y_,z=I.offsetWidth||800,$=I.offsetHeight||700,ie=new ai(15,z/$,.1,1e3);let se;try{se=new RM({antialias:!0})}catch{I.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}se.setSize(z,$),se.setPixelRatio(window.devicePixelRatio),I.appendChild(se.domElement);const Y=new PM(ie,se.domElement);G.add(new aS(16777215,.7));const J=new oS(16777215,.8);J.position.set(25,20,15),G.add(J),G.add(new uS(30,30)),ie.position.set(3,4,-5),ie.lookAt(0,0,0),Y.update();const K=()=>{const j=I.offsetWidth,le=I.offsetHeight;ie.aspect=j/le,ie.updateProjectionMatrix(),se.setSize(j,le)};return window.addEventListener("resize",K),se.setAnimationLoop(()=>{Y.update(),se.render(G,ie)}),w(G),()=>{window.removeEventListener("resize",K),se.setAnimationLoop(null),se.dispose(),I.contains(se.domElement)&&I.removeChild(se.domElement)}},[]),Sn.jsxs("div",{children:[Sn.jsxs("form",{className:"setForm",children:[Sn.jsxs("div",{className:"input input-img",children:[Sn.jsx("p",{children:"color"}),p.map(I=>Sn.jsx("button",{className:"color-1",id:I.id,value:I.value,onClick:G=>{G.preventDefault(),_(I.value),S(I.bg),R(I.guide),y(I.hoop),N(I.skating)},children:Sn.jsx("img",{src:I.src,alt:"",height:"20px",width:"20px"})},I.id))]}),Sn.jsx("div",{children:Sn.jsx("button",{onClick:I=>{I.preventDefault(),U("Luge")},children:"Luge"})}),Sn.jsx("div",{children:Sn.jsx("button",{onClick:I=>{I.preventDefault(),U("LugeKind")},children:"LugeKind"})}),Sn.jsx("div",{children:Sn.jsx("button",{onClick:I=>{I.preventDefault(),U("LugeSport")},children:"LugeSport"})})]}),Sn.jsx("div",{ref:b,style:{width:"100%",height:"700px"}}),F&&L==="Luge"&&Sn.jsx(YM,{scene:F,selectedColor:m,backgroundColor:v,guide:M}),F&&L==="LugeKind"&&Sn.jsx(ZM,{scene:F,selectedColor:m,backgroundColor:v,guide:M}),F&&L==="LugeSport"&&Sn.jsx(nE,{scene:F,selectedColor:m,backgroundColor:v,guide:M,hoop:x,skating:P})]})};function Um(){const s=document.getElementById("luge-configurator-root");if(s&&s.dataset.mounted!=="true"){s.dataset.mounted="true";try{const e={img1:s.dataset.img1||"",img2:s.dataset.img2||"",img3:s.dataset.img3||"",img4:s.dataset.img4||"",img5:s.dataset.img5||"",wood:s.dataset.wood||"",guide:s.dataset.guide||"",skating:s.dataset.skating||"",hoop:s.dataset.hoop||""};lv.createRoot(s).render(Sn.jsx(iE,{...e}))}catch(e){s.innerHTML='<div style="padding:20px;color:red;font-family:sans-serif"><strong>Erreur configurateur 3D :</strong> '+e.message+"</div>"}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Um):Um()})();
