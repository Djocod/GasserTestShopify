(function(){"use strict";if(typeof Lg>"u")var Lg={env:{NODE_ENV:"production"}};function Dg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cu={exports:{}},St={},Hf;function Ng(){if(Hf)return St;Hf=1;/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function M(B,ee,Ue){this.props=B,this.context=ee,this.refs=b,this.updater=Ue||S}M.prototype.isReactComponent={},M.prototype.setState=function(B,ee){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ee,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function y(){}y.prototype=M.prototype;function C(B,ee,Ue){this.props=B,this.context=ee,this.refs=b,this.updater=Ue||S}var I=C.prototype=new y;I.constructor=C,E(I,M.prototype),I.isPureReactComponent=!0;var L=Array.isArray,U=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(B,ee,Ue){var He,De={},le=null,Se=null;if(ee!=null)for(He in ee.ref!==void 0&&(Se=ee.ref),ee.key!==void 0&&(le=""+ee.key),ee)U.call(ee,He)&&!F.hasOwnProperty(He)&&(De[He]=ee[He]);var pe=arguments.length-2;if(pe===1)De.children=Ue;else if(1<pe){for(var Ne=Array(pe),Ze=0;Ze<pe;Ze++)Ne[Ze]=arguments[Ze+2];De.children=Ne}if(B&&B.defaultProps)for(He in pe=B.defaultProps,pe)De[He]===void 0&&(De[He]=pe[He]);return{$$typeof:s,type:B,key:le,ref:Se,props:De,_owner:P.current}}function N(B,ee){return{$$typeof:s,type:B.type,key:ee,ref:B.ref,props:B.props,_owner:B._owner}}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function z(B){var ee={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ue){return ee[Ue]})}var $=/\/+/g;function ie(B,ee){return typeof B=="object"&&B!==null&&B.key!=null?z(""+B.key):ee.toString(36)}function se(B,ee,Ue,He,De){var le=typeof B;(le==="undefined"||le==="boolean")&&(B=null);var Se=!1;if(B===null)Se=!0;else switch(le){case"string":case"number":Se=!0;break;case"object":switch(B.$$typeof){case s:case e:Se=!0}}if(Se)return Se=B,De=De(Se),B=He===""?"."+ie(Se,0):He,L(De)?(Ue="",B!=null&&(Ue=B.replace($,"$&/")+"/"),se(De,ee,Ue,"",function(Ze){return Ze})):De!=null&&(G(De)&&(De=N(De,Ue+(!De.key||Se&&Se.key===De.key?"":(""+De.key).replace($,"$&/")+"/")+B)),ee.push(De)),1;if(Se=0,He=He===""?".":He+":",L(B))for(var pe=0;pe<B.length;pe++){le=B[pe];var Ne=He+ie(le,pe);Se+=se(le,ee,Ue,Ne,De)}else if(Ne=v(B),typeof Ne=="function")for(B=Ne.call(B),pe=0;!(le=B.next()).done;)le=le.value,Ne=He+ie(le,pe++),Se+=se(le,ee,Ue,Ne,De);else if(le==="object")throw ee=String(B),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Se}function Y(B,ee,Ue){if(B==null)return B;var He=[],De=0;return se(B,He,"","",function(le){return ee.call(Ue,le,De++)}),He}function J(B){if(B._status===-1){var ee=B._result;ee=ee(),ee.then(function(Ue){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ue)},function(Ue){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ue)}),B._status===-1&&(B._status=0,B._result=ee)}if(B._status===1)return B._result.default;throw B._result}var K={current:null},q={transition:null},ue={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function ae(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Y,forEach:function(B,ee,Ue){Y(B,function(){ee.apply(this,arguments)},Ue)},count:function(B){var ee=0;return Y(B,function(){ee++}),ee},toArray:function(B){return Y(B,function(ee){return ee})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},St.Component=M,St.Fragment=t,St.Profiler=a,St.PureComponent=C,St.StrictMode=r,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,St.act=ae,St.cloneElement=function(B,ee,Ue){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var He=E({},B.props),De=B.key,le=B.ref,Se=B._owner;if(ee!=null){if(ee.ref!==void 0&&(le=ee.ref,Se=P.current),ee.key!==void 0&&(De=""+ee.key),B.type&&B.type.defaultProps)var pe=B.type.defaultProps;for(Ne in ee)U.call(ee,Ne)&&!F.hasOwnProperty(Ne)&&(He[Ne]=ee[Ne]===void 0&&pe!==void 0?pe[Ne]:ee[Ne])}var Ne=arguments.length-2;if(Ne===1)He.children=Ue;else if(1<Ne){pe=Array(Ne);for(var Ze=0;Ze<Ne;Ze++)pe[Ze]=arguments[Ze+2];He.children=pe}return{$$typeof:s,type:B.type,key:De,ref:le,props:He,_owner:Se}},St.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},St.createElement=w,St.createFactory=function(B){var ee=w.bind(null,B);return ee.type=B,ee},St.createRef=function(){return{current:null}},St.forwardRef=function(B){return{$$typeof:h,render:B}},St.isValidElement=G,St.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:J}},St.memo=function(B,ee){return{$$typeof:p,type:B,compare:ee===void 0?null:ee}},St.startTransition=function(B){var ee=q.transition;q.transition={};try{B()}finally{q.transition=ee}},St.unstable_act=ae,St.useCallback=function(B,ee){return K.current.useCallback(B,ee)},St.useContext=function(B){return K.current.useContext(B)},St.useDebugValue=function(){},St.useDeferredValue=function(B){return K.current.useDeferredValue(B)},St.useEffect=function(B,ee){return K.current.useEffect(B,ee)},St.useId=function(){return K.current.useId()},St.useImperativeHandle=function(B,ee,Ue){return K.current.useImperativeHandle(B,ee,Ue)},St.useInsertionEffect=function(B,ee){return K.current.useInsertionEffect(B,ee)},St.useLayoutEffect=function(B,ee){return K.current.useLayoutEffect(B,ee)},St.useMemo=function(B,ee){return K.current.useMemo(B,ee)},St.useReducer=function(B,ee,Ue){return K.current.useReducer(B,ee,Ue)},St.useRef=function(B){return K.current.useRef(B)},St.useState=function(B){return K.current.useState(B)},St.useSyncExternalStore=function(B,ee,Ue){return K.current.useSyncExternalStore(B,ee,Ue)},St.useTransition=function(){return K.current.useTransition()},St.version="18.3.1",St}var Gf;function Vf(){return Gf||(Gf=1,cu.exports=Ng()),cu.exports}var sn=Vf();const Sn=Dg(sn);var Ma={},hu={exports:{}},kn={},fu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function Ig(){return Wf||(Wf=1,(function(s){function e(q,ue){var ae=q.length;q.push(ue);e:for(;0<ae;){var B=ae-1>>>1,ee=q[B];if(0<a(ee,ue))q[B]=ue,q[ae]=ee,ae=B;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ue=q[0],ae=q.pop();if(ae!==ue){q[0]=ae;e:for(var B=0,ee=q.length,Ue=ee>>>1;B<Ue;){var He=2*(B+1)-1,De=q[He],le=He+1,Se=q[le];if(0>a(De,ae))le<ee&&0>a(Se,De)?(q[B]=Se,q[le]=ae,B=le):(q[B]=De,q[He]=ae,B=He);else if(le<ee&&0>a(Se,ae))q[B]=Se,q[le]=ae,B=le;else break e}}return ue}function a(q,ue){var ae=q.sortIndex-ue.sortIndex;return ae!==0?ae:q.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var f=[],p=[],g=1,_=null,v=3,S=!1,E=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var ue=t(p);ue!==null;){if(ue.callback===null)r(p);else if(ue.startTime<=q)r(p),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(p)}}function L(q){if(b=!1,I(q),!E)if(t(f)!==null)E=!0,J(U);else{var ue=t(p);ue!==null&&K(L,ue.startTime-q)}}function U(q,ue){E=!1,b&&(b=!1,y(w),w=-1),S=!0;var ae=v;try{for(I(ue),_=t(f);_!==null&&(!(_.expirationTime>ue)||q&&!z());){var B=_.callback;if(typeof B=="function"){_.callback=null,v=_.priorityLevel;var ee=B(_.expirationTime<=ue);ue=s.unstable_now(),typeof ee=="function"?_.callback=ee:_===t(f)&&r(f),I(ue)}else r(f);_=t(f)}if(_!==null)var Ue=!0;else{var He=t(p);He!==null&&K(L,He.startTime-ue),Ue=!1}return Ue}finally{_=null,v=ae,S=!1}}var P=!1,F=null,w=-1,N=5,G=-1;function z(){return!(s.unstable_now()-G<N)}function $(){if(F!==null){var q=s.unstable_now();G=q;var ue=!0;try{ue=F(!0,q)}finally{ue?ie():(P=!1,F=null)}}else P=!1}var ie;if(typeof C=="function")ie=function(){C($)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Y=se.port2;se.port1.onmessage=$,ie=function(){Y.postMessage(null)}}else ie=function(){M($,0)};function J(q){F=q,P||(P=!0,ie())}function K(q,ue){w=M(function(){q(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,J(U))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(q){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var ae=v;v=ue;try{return q()}finally{v=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,ue){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ae=v;v=q;try{return ue()}finally{v=ae}},s.unstable_scheduleCallback=function(q,ue,ae){var B=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?B+ae:B):ae=B,q){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ae+ee,q={id:g++,callback:ue,priorityLevel:q,startTime:ae,expirationTime:ee,sortIndex:-1},ae>B?(q.sortIndex=ae,e(p,q),t(f)===null&&q===t(p)&&(b?(y(w),w=-1):b=!0,K(L,ae-B))):(q.sortIndex=ee,e(f,q),E||S||(E=!0,J(U))),q},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(q){var ue=v;return function(){var ae=v;v=ue;try{return q.apply(this,arguments)}finally{v=ae}}}})(du)),du}var Xf;function Ug(){return Xf||(Xf=1,fu.exports=Ig()),fu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Og(){if(Yf)return kn;Yf=1;var s=Vf(),e=Ug();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function v(n){return f.call(_,n)?!0:f.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,o,u,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,C);M[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,C);M[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,C);M[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,u){var d=M.hasOwnProperty(i)?M[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),q=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,B;function ee(n){if(B===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var Ue=!1;function He(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var u=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){u=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){u=oe}n()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var d=oe.stack.split(`
`),m=u.stack.split(`
`),T=d.length-1,O=m.length-1;1<=T&&0<=O&&d[T]!==m[O];)O--;for(;1<=T&&0<=O;T--,O--)if(d[T]!==m[O]){if(T!==1||O!==1)do if(T--,O--,0>O||d[T]!==m[O]){var k=`
`+d[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=O);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ee(n):""}function De(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case P:return"Portal";case N:return"Profiler";case w:return"StrictMode";case ie:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case G:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return i=n.displayName||null,i!==null?i:le(n.type)||"Memo";case J:i=n._payload,n=n._init;try{return le(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Ne(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Je(n){n._valueTracker||(n._valueTracker=Ze(n))}function Bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ne(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,i){var o=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ot(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=pe(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function $t(n,i){mt(n,i);var o=pe(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?xn(n,i.type,o):i.hasOwnProperty("defaultValue")&&xn(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function zt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function xn(n,i,o){(i!=="number"||ht(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var V=Array.isArray;function kt(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+pe(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function gt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Dt(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(V(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:pe(o)}}function be(n,i){var o=pe(i.value),u=pe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Vt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function x(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?D(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var j,fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(j=j||document.createElement("div"),j.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=j.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function me(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function ce(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function de(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=ce(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var Ie=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fe(n,i){if(i){if(Ie[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function we(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,vt=null,H=null;function Te(n){if(n=oa(n)){if(typeof st!="function")throw Error(t(280));var i=n.stateNode;i&&(i=wl(i),st(n.stateNode,n.type,i))}}function he(n){vt?H?H.push(n):H=[n]:vt=n}function Oe(){if(vt){var n=vt,i=H;if(H=vt=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function Re(n,i){return n(i)}function ge(){}var We=!1;function ot(n,i,o){if(We)return n(i,o);We=!0;try{return Re(n,i,o)}finally{We=!1,(vt!==null||H!==null)&&(ge(),Oe())}}function Ft(n,i){var o=n.stateNode;if(o===null)return null;var u=wl(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Rt=!1;if(h)try{var Fn={};Object.defineProperty(Fn,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{Rt=!1}function ci(n,i,o,u,d,m,T,O,k){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(o,oe)}catch(_e){this.onError(_e)}}var rr=!1,qs=null,ss=!1,js=null,sr={onError:function(n){rr=!0,qs=n}};function zo(n,i,o,u,d,m,T,O,k){rr=!1,qs=null,ci.apply(sr,arguments)}function ll(n,i,o,u,d,m,T,O,k){if(zo.apply(this,arguments),rr){if(rr){var oe=qs;rr=!1,qs=null}else throw Error(t(198));ss||(ss=!0,js=oe)}}function ki(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function os(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ko(n){if(ki(n)!==n)throw Error(t(188))}function $s(n){var i=n.alternate;if(!i){if(i=ki(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return ko(d),n;if(m===u)return ko(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var T=!1,O=d.child;O;){if(O===o){T=!0,o=d,u=m;break}if(O===u){T=!0,u=d,o=m;break}O=O.sibling}if(!T){for(O=m.child;O;){if(O===o){T=!0,o=m,u=d;break}if(O===u){T=!0,u=m,o=d;break}O=O.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Ho(n){return n=$s(n),n!==null?Go(n):null}function Go(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Go(n);if(i!==null)return i;n=n.sibling}return null}var ul=e.unstable_scheduleCallback,cl=e.unstable_cancelCallback,uh=e.unstable_shouldYield,ch=e.unstable_requestPaint,Kt=e.unstable_now,hh=e.unstable_getCurrentPriorityLevel,Vo=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,re=e.unstable_LowPriority,te=e.unstable_IdlePriority,Q=null,Ce=null;function ke(n){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Q,n,void 0,(n.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:at,Xe=Math.log,Ke=Math.LN2;function at(n){return n>>>=0,n===0?32:31-(Xe(n)/Ke|0)|0}var lt=64,qe=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ht(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var O=T&~d;O!==0?u=xt(O):(m&=T,m!==0&&(u=xt(m)))}else T=o&~d,T!==0?u=xt(T):m!==0&&(u=xt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Ae(i),d=1<<o,u|=n[o],i&=~d;return u}function qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Ae(m),O=1<<T,k=d[T];k===-1?((O&o)===0||(O&u)!==0)&&(d[T]=qt(O,i)):k<=i&&(n.expiredLanes|=O),m&=~O}}function ln(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Be(){var n=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),n}function En(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function _t(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ae(i),n[i]=o}function Wn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Ae(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function Xn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Ae(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var yt=0;function or(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pt,Wt,xi,It,Ei,Hi=!1,as=[],Rr=null,Cr=null,Pr=null,Wo=new Map,Xo=new Map,br=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pm(n,i){switch(n){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(i.pointerId)}}function Yo(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=oa(i),i!==null&&Wt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Nx(n,i,o,u,d){switch(i){case"focusin":return Rr=Yo(Rr,n,i,o,u,d),!0;case"dragenter":return Cr=Yo(Cr,n,i,o,u,d),!0;case"mouseover":return Pr=Yo(Pr,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return Wo.set(m,Yo(Wo.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,Xo.set(m,Yo(Xo.get(m)||null,n,i,o,u,d)),!0}return!1}function mm(n){var i=ls(n.target);if(i!==null){var o=ki(i);if(o!==null){if(i=o.tag,i===13){if(i=os(o),i!==null){n.blockedOn=i,Ei(n.priority,function(){xi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function hl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=dh(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);xe=u,o.target.dispatchEvent(u),xe=null}else return i=oa(o),i!==null&&Wt(i),n.blockedOn=o,!1;i.shift()}return!0}function gm(n,i,o){hl(n)&&o.delete(i)}function Ix(){Hi=!1,Rr!==null&&hl(Rr)&&(Rr=null),Cr!==null&&hl(Cr)&&(Cr=null),Pr!==null&&hl(Pr)&&(Pr=null),Wo.forEach(gm),Xo.forEach(gm)}function qo(n,i){n.blockedOn===i&&(n.blockedOn=null,Hi||(Hi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ix)))}function jo(n){function i(d){return qo(d,n)}if(0<as.length){qo(as[0],n);for(var o=1;o<as.length;o++){var u=as[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Rr!==null&&qo(Rr,n),Cr!==null&&qo(Cr,n),Pr!==null&&qo(Pr,n),Wo.forEach(i),Xo.forEach(i),o=0;o<br.length;o++)u=br[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<br.length&&(o=br[0],o.blockedOn===null);)mm(o),o.blockedOn===null&&br.shift()}var Ks=L.ReactCurrentBatchConfig,fl=!0;function Ux(n,i,o,u){var d=yt,m=Ks.transition;Ks.transition=null;try{yt=1,fh(n,i,o,u)}finally{yt=d,Ks.transition=m}}function Ox(n,i,o,u){var d=yt,m=Ks.transition;Ks.transition=null;try{yt=4,fh(n,i,o,u)}finally{yt=d,Ks.transition=m}}function fh(n,i,o,u){if(fl){var d=dh(n,i,o,u);if(d===null)bh(n,i,u,dl,o),pm(n,u);else if(Nx(d,n,i,o,u))u.stopPropagation();else if(pm(n,u),i&4&&-1<Dx.indexOf(n)){for(;d!==null;){var m=oa(d);if(m!==null&&Pt(m),m=dh(n,i,o,u),m===null&&bh(n,i,u,dl,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else bh(n,i,u,null,o)}}var dl=null;function dh(n,i,o,u){if(dl=null,n=it(u),n=ls(n),n!==null)if(i=ki(n),i===null)n=null;else if(o=i.tag,o===13){if(n=os(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return dl=n,null}function vm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hh()){case Vo:return 1;case A:return 4;case X:case re:return 16;case te:return 536870912;default:return 16}default:return 16}}var Lr=null,ph=null,pl=null;function _m(){if(pl)return pl;var n,i=ph,o=i.length,u,d="value"in Lr?Lr.value:Lr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var T=o-n;for(u=1;u<=T&&i[o-u]===d[m-u];u++);return pl=d.slice(n,1<u?1-u:void 0)}function ml(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function gl(){return!0}function Sm(){return!1}function ii(n){function i(o,u,d,m,T){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?gl:Sm,this.isPropagationStopped=Sm,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),i}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=ii(Zs),$o=ae({},Zs,{view:0,detail:0}),Fx=ii($o),gh,vh,Ko,vl=ae({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ko&&(Ko&&n.type==="mousemove"?(gh=n.screenX-Ko.screenX,vh=n.screenY-Ko.screenY):vh=gh=0,Ko=n),gh)},movementY:function(n){return"movementY"in n?n.movementY:vh}}),ym=ii(vl),Bx=ae({},vl,{dataTransfer:0}),zx=ii(Bx),kx=ae({},$o,{relatedTarget:0}),_h=ii(kx),Hx=ae({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=ii(Hx),Vx=ae({},Zs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wx=ii(Vx),Xx=ae({},Zs,{data:0}),Mm=ii(Xx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=jx[n])?!!i[n]:!1}function Sh(){return $x}var Kx=ae({},$o,{key:function(n){if(n.key){var i=Yx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ml(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(n){return n.type==="keypress"?ml(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ml(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Zx=ii(Kx),Jx=ae({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=ii(Jx),Qx=ae({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),eE=ii(Qx),tE=ae({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),nE=ii(tE),iE=ae({},vl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rE=ii(iE),sE=[9,13,27,32],yh=h&&"CompositionEvent"in window,Zo=null;h&&"documentMode"in document&&(Zo=document.documentMode);var oE=h&&"TextEvent"in window&&!Zo,Em=h&&(!yh||Zo&&8<Zo&&11>=Zo),Tm=" ",wm=!1;function Am(n,i){switch(n){case"keyup":return sE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Js=!1;function aE(n,i){switch(n){case"compositionend":return Rm(i);case"keypress":return i.which!==32?null:(wm=!0,Tm);case"textInput":return n=i.data,n===Tm&&wm?null:n;default:return null}}function lE(n,i){if(Js)return n==="compositionend"||!yh&&Am(n,i)?(n=_m(),pl=ph=Lr=null,Js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Em&&i.locale!=="ko"?null:i.data;default:return null}}var uE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!uE[n.type]:i==="textarea"}function Pm(n,i,o,u){he(u),i=xl(i,"onChange"),0<i.length&&(o=new mh("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Jo=null,Qo=null;function cE(n){qm(n,0)}function _l(n){var i=io(n);if(Bt(i))return n}function hE(n,i){if(n==="change")return i}var bm=!1;if(h){var Mh;if(h){var xh="oninput"in document;if(!xh){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),xh=typeof Lm.oninput=="function"}Mh=xh}else Mh=!1;bm=Mh&&(!document.documentMode||9<document.documentMode)}function Dm(){Jo&&(Jo.detachEvent("onpropertychange",Nm),Qo=Jo=null)}function Nm(n){if(n.propertyName==="value"&&_l(Qo)){var i=[];Pm(i,Qo,n,it(n)),ot(cE,i)}}function fE(n,i,o){n==="focusin"?(Dm(),Jo=i,Qo=o,Jo.attachEvent("onpropertychange",Nm)):n==="focusout"&&Dm()}function dE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _l(Qo)}function pE(n,i){if(n==="click")return _l(i)}function mE(n,i){if(n==="input"||n==="change")return _l(i)}function gE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ti=typeof Object.is=="function"?Object.is:gE;function ea(n,i){if(Ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!f.call(i,d)||!Ti(n[d],i[d]))return!1}return!0}function Im(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Um(n,i){var o=Im(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Im(o)}}function Om(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Om(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Fm(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ht(n.document)}return i}function Eh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function vE(n){var i=Fm(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Om(o.ownerDocument.documentElement,o)){if(u!==null&&Eh(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Um(o,m);var T=Um(o,u);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _E=h&&"documentMode"in document&&11>=document.documentMode,Qs=null,Th=null,ta=null,wh=!1;function Bm(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;wh||Qs==null||Qs!==ht(u)||(u=Qs,"selectionStart"in u&&Eh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ta&&ea(ta,u)||(ta=u,u=xl(Th,"onSelect"),0<u.length&&(i=new mh("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Qs)))}function Sl(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var eo={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Ah={},zm={};h&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function yl(n){if(Ah[n])return Ah[n];if(!eo[n])return n;var i=eo[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in zm)return Ah[n]=i[o];return n}var km=yl("animationend"),Hm=yl("animationiteration"),Gm=yl("animationstart"),Vm=yl("transitionend"),Wm=new Map,Xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(n,i){Wm.set(n,i),l(i,[n])}for(var Rh=0;Rh<Xm.length;Rh++){var Ch=Xm[Rh],SE=Ch.toLowerCase(),yE=Ch[0].toUpperCase()+Ch.slice(1);Dr(SE,"on"+yE)}Dr(km,"onAnimationEnd"),Dr(Hm,"onAnimationIteration"),Dr(Gm,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(Vm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Ym(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,ll(u,i,void 0,n),n.currentTarget=null}function qm(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var T=u.length-1;0<=T;T--){var O=u[T],k=O.instance,oe=O.currentTarget;if(O=O.listener,k!==m&&d.isPropagationStopped())break e;Ym(d,O,oe),m=k}else for(T=0;T<u.length;T++){if(O=u[T],k=O.instance,oe=O.currentTarget,O=O.listener,k!==m&&d.isPropagationStopped())break e;Ym(d,O,oe),m=k}}}if(ss)throw n=js,ss=!1,js=null,n}function Xt(n,i){var o=i[Oh];o===void 0&&(o=i[Oh]=new Set);var u=n+"__bubble";o.has(u)||(jm(i,n,2,!1),o.add(u))}function Ph(n,i,o){var u=0;i&&(u|=4),jm(o,n,u,i)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function ia(n){if(!n[Ml]){n[Ml]=!0,r.forEach(function(o){o!=="selectionchange"&&(ME.has(o)||Ph(o,!1,n),Ph(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ml]||(i[Ml]=!0,Ph("selectionchange",!1,i))}}function jm(n,i,o,u){switch(vm(i)){case 1:var d=Ux;break;case 4:d=Ox;break;default:d=fh}o=d.bind(null,i,o,n),d=void 0,!Rt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function bh(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var O=u.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;T=T.return}for(;O!==null;){if(T=ls(O),T===null)return;if(k=T.tag,k===5||k===6){u=m=T;continue e}O=O.parentNode}}u=u.return}ot(function(){var oe=m,_e=it(o),ye=[];e:{var ve=Wm.get(n);if(ve!==void 0){var ze=mh,Ve=n;switch(n){case"keypress":if(ml(o)===0)break e;case"keydown":case"keyup":ze=Zx;break;case"focusin":Ve="focus",ze=_h;break;case"focusout":Ve="blur",ze=_h;break;case"beforeblur":case"afterblur":ze=_h;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=eE;break;case km:case Hm:case Gm:ze=Gx;break;case Vm:ze=nE;break;case"scroll":ze=Fx;break;case"wheel":ze=rE;break;case"copy":case"cut":case"paste":ze=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=xm}var Ye=(i&4)!==0,rn=!Ye&&n==="scroll",Z=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var W=oe,ne;W!==null;){ne=W;var Ee=ne.stateNode;if(ne.tag===5&&Ee!==null&&(ne=Ee,Z!==null&&(Ee=Ft(W,Z),Ee!=null&&Ye.push(ra(W,Ee,ne)))),rn)break;W=W.return}0<Ye.length&&(ve=new ze(ve,Ve,null,o,_e),ye.push({event:ve,listeners:Ye}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",ve&&o!==xe&&(Ve=o.relatedTarget||o.fromElement)&&(ls(Ve)||Ve[ar]))break e;if((ze||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,ze?(Ve=o.relatedTarget||o.toElement,ze=oe,Ve=Ve?ls(Ve):null,Ve!==null&&(rn=ki(Ve),Ve!==rn||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(ze=null,Ve=oe),ze!==Ve)){if(Ye=ym,Ee="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=xm,Ee="onPointerLeave",Z="onPointerEnter",W="pointer"),rn=ze==null?ve:io(ze),ne=Ve==null?ve:io(Ve),ve=new Ye(Ee,W+"leave",ze,o,_e),ve.target=rn,ve.relatedTarget=ne,Ee=null,ls(_e)===oe&&(Ye=new Ye(Z,W+"enter",Ve,o,_e),Ye.target=ne,Ye.relatedTarget=rn,Ee=Ye),rn=Ee,ze&&Ve)t:{for(Ye=ze,Z=Ve,W=0,ne=Ye;ne;ne=to(ne))W++;for(ne=0,Ee=Z;Ee;Ee=to(Ee))ne++;for(;0<W-ne;)Ye=to(Ye),W--;for(;0<ne-W;)Z=to(Z),ne--;for(;W--;){if(Ye===Z||Z!==null&&Ye===Z.alternate)break t;Ye=to(Ye),Z=to(Z)}Ye=null}else Ye=null;ze!==null&&$m(ye,ve,ze,Ye,!1),Ve!==null&&rn!==null&&$m(ye,rn,Ve,Ye,!0)}}e:{if(ve=oe?io(oe):window,ze=ve.nodeName&&ve.nodeName.toLowerCase(),ze==="select"||ze==="input"&&ve.type==="file")var je=hE;else if(Cm(ve))if(bm)je=mE;else{je=dE;var Qe=fE}else(ze=ve.nodeName)&&ze.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(je=pE);if(je&&(je=je(n,oe))){Pm(ye,je,o,_e);break e}Qe&&Qe(n,ve,oe),n==="focusout"&&(Qe=ve._wrapperState)&&Qe.controlled&&ve.type==="number"&&xn(ve,"number",ve.value)}switch(Qe=oe?io(oe):window,n){case"focusin":(Cm(Qe)||Qe.contentEditable==="true")&&(Qs=Qe,Th=oe,ta=null);break;case"focusout":ta=Th=Qs=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,Bm(ye,o,_e);break;case"selectionchange":if(_E)break;case"keydown":case"keyup":Bm(ye,o,_e)}var et;if(yh)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Js?Am(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Em&&o.locale!=="ko"&&(Js||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Js&&(et=_m()):(Lr=_e,ph="value"in Lr?Lr.value:Lr.textContent,Js=!0)),Qe=xl(oe,rt),0<Qe.length&&(rt=new Mm(rt,n,null,o,_e),ye.push({event:rt,listeners:Qe}),et?rt.data=et:(et=Rm(o),et!==null&&(rt.data=et)))),(et=oE?aE(n,o):lE(n,o))&&(oe=xl(oe,"onBeforeInput"),0<oe.length&&(_e=new Mm("onBeforeInput","beforeinput",null,o,_e),ye.push({event:_e,listeners:oe}),_e.data=et))}qm(ye,i)})}function ra(n,i,o){return{instance:n,listener:i,currentTarget:o}}function xl(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ft(n,o),m!=null&&u.unshift(ra(n,m,d)),m=Ft(n,i),m!=null&&u.push(ra(n,m,d))),n=n.return}return u}function to(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $m(n,i,o,u,d){for(var m=i._reactName,T=[];o!==null&&o!==u;){var O=o,k=O.alternate,oe=O.stateNode;if(k!==null&&k===u)break;O.tag===5&&oe!==null&&(O=oe,d?(k=Ft(o,m),k!=null&&T.unshift(ra(o,k,O))):d||(k=Ft(o,m),k!=null&&T.push(ra(o,k,O)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var xE=/\r\n?/g,EE=/\u0000|\uFFFD/g;function Km(n){return(typeof n=="string"?n:""+n).replace(xE,`
`).replace(EE,"")}function El(n,i,o){if(i=Km(i),Km(n)!==i&&o)throw Error(t(425))}function Tl(){}var Lh=null,Dh=null;function Nh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,TE=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,wE=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(n){return Zm.resolve(null).then(n).catch(AE)}:Ih;function AE(n){setTimeout(function(){throw n})}function Uh(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),jo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);jo(i)}function Nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Jm(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var no=Math.random().toString(36).slice(2),Gi="__reactFiber$"+no,sa="__reactProps$"+no,ar="__reactContainer$"+no,Oh="__reactEvents$"+no,RE="__reactListeners$"+no,CE="__reactHandles$"+no;function ls(n){var i=n[Gi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[ar]||o[Gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Jm(n);n!==null;){if(o=n[Gi])return o;n=Jm(n)}return i}n=o,o=n.parentNode}return null}function oa(n){return n=n[Gi]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function io(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wl(n){return n[sa]||null}var Fh=[],ro=-1;function Ir(n){return{current:n}}function Yt(n){0>ro||(n.current=Fh[ro],Fh[ro]=null,ro--)}function Gt(n,i){ro++,Fh[ro]=n.current,n.current=i}var Ur={},Ln=Ir(Ur),Yn=Ir(!1),us=Ur;function so(n,i){var o=n.type.contextTypes;if(!o)return Ur;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function qn(n){return n=n.childContextTypes,n!=null}function Al(){Yt(Yn),Yt(Ln)}function Qm(n,i,o){if(Ln.current!==Ur)throw Error(t(168));Gt(Ln,i),Gt(Yn,o)}function e0(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Se(n)||"Unknown",d));return ae({},o,u)}function Rl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,us=Ln.current,Gt(Ln,n),Gt(Yn,Yn.current),!0}function t0(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=e0(n,i,us),u.__reactInternalMemoizedMergedChildContext=n,Yt(Yn),Yt(Ln),Gt(Ln,n)):Yt(Yn),Gt(Yn,o)}var lr=null,Cl=!1,Bh=!1;function n0(n){lr===null?lr=[n]:lr.push(n)}function PE(n){Cl=!0,n0(n)}function Or(){if(!Bh&&lr!==null){Bh=!0;var n=0,i=yt;try{var o=lr;for(yt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}lr=null,Cl=!1}catch(d){throw lr!==null&&(lr=lr.slice(n+1)),ul(Vo,Or),d}finally{yt=i,Bh=!1}}return null}var oo=[],ao=0,Pl=null,bl=0,hi=[],fi=0,cs=null,ur=1,cr="";function hs(n,i){oo[ao++]=bl,oo[ao++]=Pl,Pl=n,bl=i}function i0(n,i,o){hi[fi++]=ur,hi[fi++]=cr,hi[fi++]=cs,cs=n;var u=ur;n=cr;var d=32-Ae(u)-1;u&=~(1<<d),o+=1;var m=32-Ae(i)+d;if(30<m){var T=d-d%5;m=(u&(1<<T)-1).toString(32),u>>=T,d-=T,ur=1<<32-Ae(i)+d|o<<d|u,cr=m+n}else ur=1<<m|o<<d|u,cr=n}function zh(n){n.return!==null&&(hs(n,1),i0(n,1,0))}function kh(n){for(;n===Pl;)Pl=oo[--ao],oo[ao]=null,bl=oo[--ao],oo[ao]=null;for(;n===cs;)cs=hi[--fi],hi[fi]=null,cr=hi[--fi],hi[fi]=null,ur=hi[--fi],hi[fi]=null}var ri=null,si=null,jt=!1,wi=null;function r0(n,i){var o=gi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function s0(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ri=n,si=Nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ri=n,si=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=cs!==null?{id:ur,overflow:cr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=gi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ri=n,si=null,!0):!1;default:return!1}}function Hh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gh(n){if(jt){var i=si;if(i){var o=i;if(!s0(n,i)){if(Hh(n))throw Error(t(418));i=Nr(o.nextSibling);var u=ri;i&&s0(n,i)?r0(u,o):(n.flags=n.flags&-4097|2,jt=!1,ri=n)}}else{if(Hh(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,ri=n}}}function o0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ri=n}function Ll(n){if(n!==ri)return!1;if(!jt)return o0(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nh(n.type,n.memoizedProps)),i&&(i=si)){if(Hh(n))throw a0(),Error(t(418));for(;i;)r0(n,i),i=Nr(i.nextSibling)}if(o0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){si=Nr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}si=null}}else si=ri?Nr(n.stateNode.nextSibling):null;return!0}function a0(){for(var n=si;n;)n=Nr(n.nextSibling)}function lo(){si=ri=null,jt=!1}function Vh(n){wi===null?wi=[n]:wi.push(n)}var bE=L.ReactCurrentBatchConfig;function aa(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var O=d.refs;T===null?delete O[m]:O[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Dl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function l0(n){var i=n._init;return i(n._payload)}function u0(n){function i(Z,W){if(n){var ne=Z.deletions;ne===null?(Z.deletions=[W],Z.flags|=16):ne.push(W)}}function o(Z,W){if(!n)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function u(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function d(Z,W){return Z=Wr(Z,W),Z.index=0,Z.sibling=null,Z}function m(Z,W,ne){return Z.index=ne,n?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<W?(Z.flags|=2,W):ne):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function O(Z,W,ne,Ee){return W===null||W.tag!==6?(W=Uf(ne,Z.mode,Ee),W.return=Z,W):(W=d(W,ne),W.return=Z,W)}function k(Z,W,ne,Ee){var je=ne.type;return je===F?_e(Z,W,ne.props.children,Ee,ne.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===J&&l0(je)===W.type)?(Ee=d(W,ne.props),Ee.ref=aa(Z,W,ne),Ee.return=Z,Ee):(Ee=nu(ne.type,ne.key,ne.props,null,Z.mode,Ee),Ee.ref=aa(Z,W,ne),Ee.return=Z,Ee)}function oe(Z,W,ne,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Of(ne,Z.mode,Ee),W.return=Z,W):(W=d(W,ne.children||[]),W.return=Z,W)}function _e(Z,W,ne,Ee,je){return W===null||W.tag!==7?(W=Ss(ne,Z.mode,Ee,je),W.return=Z,W):(W=d(W,ne),W.return=Z,W)}function ye(Z,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Uf(""+W,Z.mode,ne),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return ne=nu(W.type,W.key,W.props,null,Z.mode,ne),ne.ref=aa(Z,null,W),ne.return=Z,ne;case P:return W=Of(W,Z.mode,ne),W.return=Z,W;case J:var Ee=W._init;return ye(Z,Ee(W._payload),ne)}if(V(W)||ue(W))return W=Ss(W,Z.mode,ne,null),W.return=Z,W;Dl(Z,W)}return null}function ve(Z,W,ne,Ee){var je=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return je!==null?null:O(Z,W,""+ne,Ee);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:return ne.key===je?k(Z,W,ne,Ee):null;case P:return ne.key===je?oe(Z,W,ne,Ee):null;case J:return je=ne._init,ve(Z,W,je(ne._payload),Ee)}if(V(ne)||ue(ne))return je!==null?null:_e(Z,W,ne,Ee,null);Dl(Z,ne)}return null}function ze(Z,W,ne,Ee,je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(ne)||null,O(W,Z,""+Ee,je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return Z=Z.get(Ee.key===null?ne:Ee.key)||null,k(W,Z,Ee,je);case P:return Z=Z.get(Ee.key===null?ne:Ee.key)||null,oe(W,Z,Ee,je);case J:var Qe=Ee._init;return ze(Z,W,ne,Qe(Ee._payload),je)}if(V(Ee)||ue(Ee))return Z=Z.get(ne)||null,_e(W,Z,Ee,je,null);Dl(W,Ee)}return null}function Ve(Z,W,ne,Ee){for(var je=null,Qe=null,et=W,rt=W=0,_n=null;et!==null&&rt<ne.length;rt++){et.index>rt?(_n=et,et=null):_n=et.sibling;var Ct=ve(Z,et,ne[rt],Ee);if(Ct===null){et===null&&(et=_n);break}n&&et&&Ct.alternate===null&&i(Z,et),W=m(Ct,W,rt),Qe===null?je=Ct:Qe.sibling=Ct,Qe=Ct,et=_n}if(rt===ne.length)return o(Z,et),jt&&hs(Z,rt),je;if(et===null){for(;rt<ne.length;rt++)et=ye(Z,ne[rt],Ee),et!==null&&(W=m(et,W,rt),Qe===null?je=et:Qe.sibling=et,Qe=et);return jt&&hs(Z,rt),je}for(et=u(Z,et);rt<ne.length;rt++)_n=ze(et,Z,rt,ne[rt],Ee),_n!==null&&(n&&_n.alternate!==null&&et.delete(_n.key===null?rt:_n.key),W=m(_n,W,rt),Qe===null?je=_n:Qe.sibling=_n,Qe=_n);return n&&et.forEach(function(Xr){return i(Z,Xr)}),jt&&hs(Z,rt),je}function Ye(Z,W,ne,Ee){var je=ue(ne);if(typeof je!="function")throw Error(t(150));if(ne=je.call(ne),ne==null)throw Error(t(151));for(var Qe=je=null,et=W,rt=W=0,_n=null,Ct=ne.next();et!==null&&!Ct.done;rt++,Ct=ne.next()){et.index>rt?(_n=et,et=null):_n=et.sibling;var Xr=ve(Z,et,Ct.value,Ee);if(Xr===null){et===null&&(et=_n);break}n&&et&&Xr.alternate===null&&i(Z,et),W=m(Xr,W,rt),Qe===null?je=Xr:Qe.sibling=Xr,Qe=Xr,et=_n}if(Ct.done)return o(Z,et),jt&&hs(Z,rt),je;if(et===null){for(;!Ct.done;rt++,Ct=ne.next())Ct=ye(Z,Ct.value,Ee),Ct!==null&&(W=m(Ct,W,rt),Qe===null?je=Ct:Qe.sibling=Ct,Qe=Ct);return jt&&hs(Z,rt),je}for(et=u(Z,et);!Ct.done;rt++,Ct=ne.next())Ct=ze(et,Z,rt,Ct.value,Ee),Ct!==null&&(n&&Ct.alternate!==null&&et.delete(Ct.key===null?rt:Ct.key),W=m(Ct,W,rt),Qe===null?je=Ct:Qe.sibling=Ct,Qe=Ct);return n&&et.forEach(function(uT){return i(Z,uT)}),jt&&hs(Z,rt),je}function rn(Z,W,ne,Ee){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:e:{for(var je=ne.key,Qe=W;Qe!==null;){if(Qe.key===je){if(je=ne.type,je===F){if(Qe.tag===7){o(Z,Qe.sibling),W=d(Qe,ne.props.children),W.return=Z,Z=W;break e}}else if(Qe.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===J&&l0(je)===Qe.type){o(Z,Qe.sibling),W=d(Qe,ne.props),W.ref=aa(Z,Qe,ne),W.return=Z,Z=W;break e}o(Z,Qe);break}else i(Z,Qe);Qe=Qe.sibling}ne.type===F?(W=Ss(ne.props.children,Z.mode,Ee,ne.key),W.return=Z,Z=W):(Ee=nu(ne.type,ne.key,ne.props,null,Z.mode,Ee),Ee.ref=aa(Z,W,ne),Ee.return=Z,Z=Ee)}return T(Z);case P:e:{for(Qe=ne.key;W!==null;){if(W.key===Qe)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){o(Z,W.sibling),W=d(W,ne.children||[]),W.return=Z,Z=W;break e}else{o(Z,W);break}else i(Z,W);W=W.sibling}W=Of(ne,Z.mode,Ee),W.return=Z,Z=W}return T(Z);case J:return Qe=ne._init,rn(Z,W,Qe(ne._payload),Ee)}if(V(ne))return Ve(Z,W,ne,Ee);if(ue(ne))return Ye(Z,W,ne,Ee);Dl(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(o(Z,W.sibling),W=d(W,ne),W.return=Z,Z=W):(o(Z,W),W=Uf(ne,Z.mode,Ee),W.return=Z,Z=W),T(Z)):o(Z,W)}return rn}var uo=u0(!0),c0=u0(!1),Nl=Ir(null),Il=null,co=null,Wh=null;function Xh(){Wh=co=Il=null}function Yh(n){var i=Nl.current;Yt(Nl),n._currentValue=i}function qh(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ho(n,i){Il=n,Wh=co=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(jn=!0),n.firstContext=null)}function di(n){var i=n._currentValue;if(Wh!==n)if(n={context:n,memoizedValue:i,next:null},co===null){if(Il===null)throw Error(t(308));co=n,Il.dependencies={lanes:0,firstContext:n}}else co=co.next=n;return i}var fs=null;function jh(n){fs===null?fs=[n]:fs.push(n)}function h0(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,jh(i)):(o.next=d.next,d.next=o),i.interleaved=o,hr(n,u)}function hr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Fr=!1;function $h(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f0(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Br(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,hr(n,o)}return d=u.interleaved,d===null?(i.next=i,jh(u)):(i.next=d.next,d.next=i),u.interleaved=i,hr(n,o)}function Ul(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Xn(n,o)}}function d0(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ol(n,i,o,u){var d=n.updateQueue;Fr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var k=O,oe=k.next;k.next=null,T===null?m=oe:T.next=oe,T=k;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,O=_e.lastBaseUpdate,O!==T&&(O===null?_e.firstBaseUpdate=oe:O.next=oe,_e.lastBaseUpdate=k))}if(m!==null){var ye=d.baseState;T=0,_e=oe=k=null,O=m;do{var ve=O.lane,ze=O.eventTime;if((u&ve)===ve){_e!==null&&(_e=_e.next={eventTime:ze,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ve=n,Ye=O;switch(ve=i,ze=o,Ye.tag){case 1:if(Ve=Ye.payload,typeof Ve=="function"){ye=Ve.call(ze,ye,ve);break e}ye=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ye.payload,ve=typeof Ve=="function"?Ve.call(ze,ye,ve):Ve,ve==null)break e;ye=ae({},ye,ve);break e;case 2:Fr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[O]:ve.push(O))}else ze={eventTime:ze,lane:ve,tag:O.tag,payload:O.payload,callback:O.callback,next:null},_e===null?(oe=_e=ze,k=ye):_e=_e.next=ze,T|=ve;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;ve=O,O=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(_e===null&&(k=ye),d.baseState=k,d.firstBaseUpdate=oe,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ms|=T,n.lanes=T,n.memoizedState=ye}}function p0(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var la={},Vi=Ir(la),ua=Ir(la),ca=Ir(la);function ds(n){if(n===la)throw Error(t(174));return n}function Kh(n,i){switch(Gt(ca,i),Gt(ua,n),Gt(Vi,la),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:x(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=x(i,n)}Yt(Vi),Gt(Vi,i)}function fo(){Yt(Vi),Yt(ua),Yt(ca)}function m0(n){ds(ca.current);var i=ds(Vi.current),o=x(i,n.type);i!==o&&(Gt(ua,n),Gt(Vi,o))}function Zh(n){ua.current===n&&(Yt(Vi),Yt(ua))}var Zt=Ir(0);function Fl(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jh=[];function Qh(){for(var n=0;n<Jh.length;n++)Jh[n]._workInProgressVersionPrimary=null;Jh.length=0}var Bl=L.ReactCurrentDispatcher,ef=L.ReactCurrentBatchConfig,ps=0,Jt=null,dn=null,gn=null,zl=!1,ha=!1,fa=0,LE=0;function Dn(){throw Error(t(321))}function tf(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ti(n[o],i[o]))return!1;return!0}function nf(n,i,o,u,d,m){if(ps=m,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Bl.current=n===null||n.memoizedState===null?UE:OE,n=o(u,d),ha){m=0;do{if(ha=!1,fa=0,25<=m)throw Error(t(301));m+=1,gn=dn=null,i.updateQueue=null,Bl.current=FE,n=o(u,d)}while(ha)}if(Bl.current=Gl,i=dn!==null&&dn.next!==null,ps=0,gn=dn=Jt=null,zl=!1,i)throw Error(t(300));return n}function rf(){var n=fa!==0;return fa=0,n}function Wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Jt.memoizedState=gn=n:gn=gn.next=n,gn}function pi(){if(dn===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=dn.next;var i=gn===null?Jt.memoizedState:gn.next;if(i!==null)gn=i,dn=n;else{if(n===null)throw Error(t(310));dn=n,n={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},gn===null?Jt.memoizedState=gn=n:gn=gn.next=n}return gn}function da(n,i){return typeof i=="function"?i(n):i}function sf(n){var i=pi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=dn,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var O=T=null,k=null,oe=m;do{var _e=oe.lane;if((ps&_e)===_e)k!==null&&(k=k.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:n(u,oe.action);else{var ye={lane:_e,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};k===null?(O=k=ye,T=u):k=k.next=ye,Jt.lanes|=_e,ms|=_e}oe=oe.next}while(oe!==null&&oe!==m);k===null?T=u:k.next=O,Ti(u,i.memoizedState)||(jn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Jt.lanes|=m,ms|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function of(n){var i=pi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);Ti(m,i.memoizedState)||(jn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function g0(){}function v0(n,i){var o=Jt,u=pi(),d=i(),m=!Ti(u.memoizedState,d);if(m&&(u.memoizedState=d,jn=!0),u=u.queue,af(y0.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,pa(9,S0.bind(null,o,u,d,i),void 0,null),vn===null)throw Error(t(349));(ps&30)!==0||_0(o,i,d)}return d}function _0(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function S0(n,i,o,u){i.value=o,i.getSnapshot=u,M0(i)&&x0(n)}function y0(n,i,o){return o(function(){M0(i)&&x0(n)})}function M0(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ti(n,o)}catch{return!0}}function x0(n){var i=hr(n,1);i!==null&&Pi(i,n,1,-1)}function E0(n){var i=Wi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:n},i.queue=n,n=n.dispatch=IE.bind(null,Jt,n),[i.memoizedState,n]}function pa(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function T0(){return pi().memoizedState}function kl(n,i,o,u){var d=Wi();Jt.flags|=n,d.memoizedState=pa(1|i,o,void 0,u===void 0?null:u)}function Hl(n,i,o,u){var d=pi();u=u===void 0?null:u;var m=void 0;if(dn!==null){var T=dn.memoizedState;if(m=T.destroy,u!==null&&tf(u,T.deps)){d.memoizedState=pa(i,o,m,u);return}}Jt.flags|=n,d.memoizedState=pa(1|i,o,m,u)}function w0(n,i){return kl(8390656,8,n,i)}function af(n,i){return Hl(2048,8,n,i)}function A0(n,i){return Hl(4,2,n,i)}function R0(n,i){return Hl(4,4,n,i)}function C0(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function P0(n,i,o){return o=o!=null?o.concat([n]):null,Hl(4,4,C0.bind(null,i,n),o)}function lf(){}function b0(n,i){var o=pi();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&tf(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function L0(n,i){var o=pi();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&tf(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function D0(n,i,o){return(ps&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=o):(Ti(o,i)||(o=Be(),Jt.lanes|=o,ms|=o,n.baseState=!0),i)}function DE(n,i){var o=yt;yt=o!==0&&4>o?o:4,n(!0);var u=ef.transition;ef.transition={};try{n(!1),i()}finally{yt=o,ef.transition=u}}function N0(){return pi().memoizedState}function NE(n,i,o){var u=Gr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},I0(n))U0(i,o);else if(o=h0(n,i,o,u),o!==null){var d=zn();Pi(o,n,u,d),O0(o,i,u)}}function IE(n,i,o){var u=Gr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(I0(n))U0(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,O=m(T,o);if(d.hasEagerState=!0,d.eagerState=O,Ti(O,T)){var k=i.interleaved;k===null?(d.next=d,jh(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=h0(n,i,d,u),o!==null&&(d=zn(),Pi(o,n,u,d),O0(o,i,u))}}function I0(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function U0(n,i){ha=zl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function O0(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Xn(n,o)}}var Gl={readContext:di,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},UE={readContext:di,useCallback:function(n,i){return Wi().memoizedState=[n,i===void 0?null:i],n},useContext:di,useEffect:w0,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,kl(4194308,4,C0.bind(null,i,n),o)},useLayoutEffect:function(n,i){return kl(4194308,4,n,i)},useInsertionEffect:function(n,i){return kl(4,2,n,i)},useMemo:function(n,i){var o=Wi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Wi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=NE.bind(null,Jt,n),[u.memoizedState,n]},useRef:function(n){var i=Wi();return n={current:n},i.memoizedState=n},useState:E0,useDebugValue:lf,useDeferredValue:function(n){return Wi().memoizedState=n},useTransition:function(){var n=E0(!1),i=n[0];return n=DE.bind(null,n[1]),Wi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Jt,d=Wi();if(jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),vn===null)throw Error(t(349));(ps&30)!==0||_0(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,w0(y0.bind(null,u,m,n),[n]),u.flags|=2048,pa(9,S0.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=Wi(),i=vn.identifierPrefix;if(jt){var o=cr,u=ur;o=(u&~(1<<32-Ae(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=fa++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=LE++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},OE={readContext:di,useCallback:b0,useContext:di,useEffect:af,useImperativeHandle:P0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:L0,useReducer:sf,useRef:T0,useState:function(){return sf(da)},useDebugValue:lf,useDeferredValue:function(n){var i=pi();return D0(i,dn.memoizedState,n)},useTransition:function(){var n=sf(da)[0],i=pi().memoizedState;return[n,i]},useMutableSource:g0,useSyncExternalStore:v0,useId:N0,unstable_isNewReconciler:!1},FE={readContext:di,useCallback:b0,useContext:di,useEffect:af,useImperativeHandle:P0,useInsertionEffect:A0,useLayoutEffect:R0,useMemo:L0,useReducer:of,useRef:T0,useState:function(){return of(da)},useDebugValue:lf,useDeferredValue:function(n){var i=pi();return dn===null?i.memoizedState=n:D0(i,dn.memoizedState,n)},useTransition:function(){var n=of(da)[0],i=pi().memoizedState;return[n,i]},useMutableSource:g0,useSyncExternalStore:v0,useId:N0,unstable_isNewReconciler:!1};function Ai(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function uf(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:ae({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Vl={isMounted:function(n){return(n=n._reactInternals)?ki(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=zn(),d=Gr(n),m=fr(u,d);m.payload=i,o!=null&&(m.callback=o),i=Br(n,m,d),i!==null&&(Pi(i,n,d,u),Ul(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=zn(),d=Gr(n),m=fr(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Br(n,m,d),i!==null&&(Pi(i,n,d,u),Ul(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=zn(),u=Gr(n),d=fr(o,u);d.tag=2,i!=null&&(d.callback=i),i=Br(n,d,u),i!==null&&(Pi(i,n,u,o),Ul(i,n,u))}};function F0(n,i,o,u,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,T):i.prototype&&i.prototype.isPureReactComponent?!ea(o,u)||!ea(d,m):!0}function B0(n,i,o){var u=!1,d=Ur,m=i.contextType;return typeof m=="object"&&m!==null?m=di(m):(d=qn(i)?us:Ln.current,u=i.contextTypes,m=(u=u!=null)?so(n,d):Ur),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function z0(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Vl.enqueueReplaceState(i,i.state,null)}function cf(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},$h(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=di(m):(m=qn(i)?us:Ln.current,d.context=so(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(uf(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Vl.enqueueReplaceState(d,d.state,null),Ol(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function po(n,i){try{var o="",u=i;do o+=De(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function hf(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ff(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var BE=typeof WeakMap=="function"?WeakMap:Map;function k0(n,i,o){o=fr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Kl||(Kl=!0,Rf=u),ff(n,i)},o}function H0(n,i,o){o=fr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){ff(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){ff(n,i),typeof u!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function G0(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new BE;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=JE.bind(null,n,i,o),i.then(n,n))}function V0(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function W0(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=fr(-1,1),i.tag=2,Br(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var zE=L.ReactCurrentOwner,jn=!1;function Bn(n,i,o,u){i.child=n===null?c0(i,null,o,u):uo(i,n.child,o,u)}function X0(n,i,o,u,d){o=o.render;var m=i.ref;return ho(i,d),u=nf(n,i,o,u,m,d),o=rf(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,dr(n,i,d)):(jt&&o&&zh(i),i.flags|=1,Bn(n,i,u,d),i.child)}function Y0(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!If(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,q0(n,i,m,u,d)):(n=nu(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:ea,o(T,u)&&n.ref===i.ref)return dr(n,i,d)}return i.flags|=1,n=Wr(m,u),n.ref=i.ref,n.return=i,i.child=n}function q0(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(ea(m,u)&&n.ref===i.ref)if(jn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(jn=!0);else return i.lanes=n.lanes,dr(n,i,d)}return df(n,i,o,u,d)}function j0(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(go,oi),oi|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(go,oi),oi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,Gt(go,oi),oi|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,Gt(go,oi),oi|=u;return Bn(n,i,d,o),i.child}function $0(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function df(n,i,o,u,d){var m=qn(o)?us:Ln.current;return m=so(i,m),ho(i,d),o=nf(n,i,o,u,m,d),u=rf(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,dr(n,i,d)):(jt&&u&&zh(i),i.flags|=1,Bn(n,i,o,d),i.child)}function K0(n,i,o,u,d){if(qn(o)){var m=!0;Rl(i)}else m=!1;if(ho(i,d),i.stateNode===null)Xl(n,i),B0(i,o,u),cf(i,o,u,d),u=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var k=T.context,oe=o.contextType;typeof oe=="object"&&oe!==null?oe=di(oe):(oe=qn(o)?us:Ln.current,oe=so(i,oe));var _e=o.getDerivedStateFromProps,ye=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==u||k!==oe)&&z0(i,T,u,oe),Fr=!1;var ve=i.memoizedState;T.state=ve,Ol(i,u,T,d),k=i.memoizedState,O!==u||ve!==k||Yn.current||Fr?(typeof _e=="function"&&(uf(i,o,_e,u),k=i.memoizedState),(O=Fr||F0(i,o,O,u,ve,k,oe))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),T.props=u,T.state=k,T.context=oe,u=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,f0(n,i),O=i.memoizedProps,oe=i.type===i.elementType?O:Ai(i.type,O),T.props=oe,ye=i.pendingProps,ve=T.context,k=o.contextType,typeof k=="object"&&k!==null?k=di(k):(k=qn(o)?us:Ln.current,k=so(i,k));var ze=o.getDerivedStateFromProps;(_e=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==ye||ve!==k)&&z0(i,T,u,k),Fr=!1,ve=i.memoizedState,T.state=ve,Ol(i,u,T,d);var Ve=i.memoizedState;O!==ye||ve!==Ve||Yn.current||Fr?(typeof ze=="function"&&(uf(i,o,ze,u),Ve=i.memoizedState),(oe=Fr||F0(i,o,oe,u,ve,Ve,k)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Ve,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Ve,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),T.props=u,T.state=Ve,T.context=k,u=oe):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return pf(n,i,o,u,m,d)}function pf(n,i,o,u,d,m){$0(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&t0(i,o,!1),dr(n,i,m);u=i.stateNode,zE.current=i;var O=T&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=uo(i,n.child,null,m),i.child=uo(i,null,O,m)):Bn(n,i,O,m),i.memoizedState=u.state,d&&t0(i,o,!0),i.child}function Z0(n){var i=n.stateNode;i.pendingContext?Qm(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Qm(n,i.context,!1),Kh(n,i.containerInfo)}function J0(n,i,o,u,d){return lo(),Vh(d),i.flags|=256,Bn(n,i,o,u),i.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Q0(n,i,o){var u=i.pendingProps,d=Zt.current,m=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(d&2)!==0),O?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Gt(Zt,d&1),n===null)return Gh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,m?(u=i.mode,m=i.child,T={mode:"hidden",children:T},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=iu(T,u,0,null),n=Ss(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=gf(o),i.memoizedState=mf,n):vf(i,T));if(d=n.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return kE(n,i,T,u,O,d,o);if(m){m=u.fallback,T=i.mode,d=n.child,O=d.sibling;var k={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=Wr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),O!==null?m=Wr(O,m):(m=Ss(m,T,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,T=n.child.memoizedState,T=T===null?gf(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,i.memoizedState=mf,u}return m=n.child,n=m.sibling,u=Wr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function vf(n,i){return i=iu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Wl(n,i,o,u){return u!==null&&Vh(u),uo(i,n.child,null,o),n=vf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function kE(n,i,o,u,d,m,T){if(o)return i.flags&256?(i.flags&=-257,u=hf(Error(t(422))),Wl(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=iu({mode:"visible",children:u.children},d,0,null),m=Ss(m,d,T,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&uo(i,n.child,null,T),i.child.memoizedState=gf(T),i.memoizedState=mf,m);if((i.mode&1)===0)return Wl(n,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var O=u.dgst;return u=O,m=Error(t(419)),u=hf(m,u,void 0),Wl(n,i,T,u)}if(O=(T&n.childLanes)!==0,jn||O){if(u=vn,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,hr(n,d),Pi(u,n,d,-1))}return Nf(),u=hf(Error(t(421))),Wl(n,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=QE.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,si=Nr(d.nextSibling),ri=i,jt=!0,wi=null,n!==null&&(hi[fi++]=ur,hi[fi++]=cr,hi[fi++]=cs,ur=n.id,cr=n.overflow,cs=i),i=vf(i,u.children),i.flags|=4096,i)}function eg(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),qh(n.return,i,o)}function _f(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function tg(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Bn(n,i,u.children,o),u=Zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&eg(n,o,i);else if(n.tag===19)eg(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Gt(Zt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Fl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),_f(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Fl(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}_f(i,!0,o,null,m);break;case"together":_f(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function dr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Wr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Wr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function HE(n,i,o){switch(i.tag){case 3:Z0(i),lo();break;case 5:m0(i);break;case 1:qn(i.type)&&Rl(i);break;case 4:Kh(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Gt(Nl,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Gt(Zt,Zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Q0(n,i,o):(Gt(Zt,Zt.current&1),n=dr(n,i,o),n!==null?n.sibling:null);Gt(Zt,Zt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return tg(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Gt(Zt,Zt.current),u)break;return null;case 22:case 23:return i.lanes=0,j0(n,i,o)}return dr(n,i,o)}var ng,Sf,ig,rg;ng=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Sf=function(){},ig=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,ds(Vi.current);var m=null;switch(o){case"input":d=At(n,d),u=At(n,u),m=[];break;case"select":d=ae({},d,{value:void 0}),u=ae({},u,{value:void 0}),m=[];break;case"textarea":d=gt(n,d),u=gt(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Tl)}Fe(o,u);var T;o=null;for(oe in d)if(!u.hasOwnProperty(oe)&&d.hasOwnProperty(oe)&&d[oe]!=null)if(oe==="style"){var O=d[oe];for(T in O)O.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(a.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in u){var k=u[oe];if(O=d!=null?d[oe]:void 0,u.hasOwnProperty(oe)&&k!==O&&(k!=null||O!=null))if(oe==="style")if(O){for(T in O)!O.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in k)k.hasOwnProperty(T)&&O[T]!==k[T]&&(o||(o={}),o[T]=k[T])}else o||(m||(m=[]),m.push(oe,o)),o=k;else oe==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,O=O?O.__html:void 0,k!=null&&O!==k&&(m=m||[]).push(oe,k)):oe==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(oe,""+k):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(a.hasOwnProperty(oe)?(k!=null&&oe==="onScroll"&&Xt("scroll",n),m||O===k||(m=[])):(m=m||[]).push(oe,k))}o&&(m=m||[]).push("style",o);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},rg=function(n,i,o,u){o!==u&&(i.flags|=4)};function ma(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function GE(n,i,o){var u=i.pendingProps;switch(kh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return qn(i.type)&&Al(),Nn(i),null;case 3:return u=i.stateNode,fo(),Yt(Yn),Yt(Ln),Qh(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ll(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,wi!==null&&(bf(wi),wi=null))),Sf(n,i),Nn(i),null;case 5:Zh(i);var d=ds(ca.current);if(o=i.type,n!==null&&i.stateNode!=null)ig(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=ds(Vi.current),Ll(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Gi]=i,u[sa]=m,n=(i.mode&1)!==0,o){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(d=0;d<na.length;d++)Xt(na[d],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":Ot(u,m),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Xt("invalid",u);break;case"textarea":Dt(u,m),Xt("invalid",u)}Fe(o,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var O=m[T];T==="children"?typeof O=="string"?u.textContent!==O&&(m.suppressHydrationWarning!==!0&&El(u.textContent,O,n),d=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&El(u.textContent,O,n),d=["children",""+O]):a.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Xt("scroll",u)}switch(o){case"input":Je(u),zt(u,m,!0);break;case"textarea":Je(u),Vt(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Tl)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(o,{is:u.is}):(n=T.createElement(o),o==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,o),n[Gi]=i,n[sa]=u,ng(n,i,!1,!1),i.stateNode=n;e:{switch(T=we(o,u),o){case"dialog":Xt("cancel",n),Xt("close",n),d=u;break;case"iframe":case"object":case"embed":Xt("load",n),d=u;break;case"video":case"audio":for(d=0;d<na.length;d++)Xt(na[d],n);d=u;break;case"source":Xt("error",n),d=u;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),d=u;break;case"details":Xt("toggle",n),d=u;break;case"input":Ot(n,u),d=At(n,u),Xt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ae({},u,{value:void 0}),Xt("invalid",n);break;case"textarea":Dt(n,u),d=gt(n,u),Xt("invalid",n);break;default:d=u}Fe(o,d),O=d;for(m in O)if(O.hasOwnProperty(m)){var k=O[m];m==="style"?de(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&fe(n,k)):m==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&me(n,k):typeof k=="number"&&me(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Xt("scroll",n):k!=null&&I(n,m,k,T))}switch(o){case"input":Je(n),zt(n,u,!1);break;case"textarea":Je(n),Vt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+pe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?kt(n,!!u.multiple,m,!1):u.defaultValue!=null&&kt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Tl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)rg(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=ds(ca.current),ds(Vi.current),Ll(i)){if(u=i.stateNode,o=i.memoizedProps,u[Gi]=i,(m=u.nodeValue!==o)&&(n=ri,n!==null))switch(n.tag){case 3:El(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&El(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Gi]=i,i.stateNode=u}return Nn(i),null;case 13:if(Yt(Zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&si!==null&&(i.mode&1)!==0&&(i.flags&128)===0)a0(),lo(),i.flags|=98560,m=!1;else if(m=Ll(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Gi]=i}else lo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),m=!1}else wi!==null&&(bf(wi),wi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Zt.current&1)!==0?pn===0&&(pn=3):Nf())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return fo(),Sf(n,i),n===null&&ia(i.stateNode.containerInfo),Nn(i),null;case 10:return Yh(i.type._context),Nn(i),null;case 17:return qn(i.type)&&Al(),Nn(i),null;case 19:if(Yt(Zt),m=i.memoizedState,m===null)return Nn(i),null;if(u=(i.flags&128)!==0,T=m.rendering,T===null)if(u)ma(m,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Fl(n),T!==null){for(i.flags|=128,ma(m,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Gt(Zt,Zt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Kt()>vo&&(i.flags|=128,u=!0,ma(m,!1),i.lanes=4194304)}else{if(!u)if(n=Fl(T),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ma(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!jt)return Nn(i),null}else 2*Kt()-m.renderingStartTime>vo&&o!==1073741824&&(i.flags|=128,u=!0,ma(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Kt(),i.sibling=null,o=Zt.current,Gt(Zt,u?o&1|2:o&1),i):(Nn(i),null);case 22:case 23:return Df(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(oi&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function VE(n,i){switch(kh(i),i.tag){case 1:return qn(i.type)&&Al(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return fo(),Yt(Yn),Yt(Ln),Qh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zh(i),null;case 13:if(Yt(Zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));lo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Zt),null;case 4:return fo(),null;case 10:return Yh(i.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Yl=!1,In=!1,WE=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function mo(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){nn(n,i,u)}else o.current=null}function yf(n,i,o){try{o()}catch(u){nn(n,i,u)}}var sg=!1;function XE(n,i){if(Lh=fl,n=Fm(),Eh(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,O=-1,k=-1,oe=0,_e=0,ye=n,ve=null;t:for(;;){for(var ze;ye!==o||d!==0&&ye.nodeType!==3||(O=T+d),ye!==m||u!==0&&ye.nodeType!==3||(k=T+u),ye.nodeType===3&&(T+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)ve=ye,ye=ze;for(;;){if(ye===n)break t;if(ve===o&&++oe===d&&(O=T),ve===m&&++_e===u&&(k=T),(ze=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=ze}o=O===-1||k===-1?null:{start:O,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Dh={focusedElem:n,selectionRange:o},fl=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ye=Ve.memoizedProps,rn=Ve.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:Ai(i.type,Ye),rn);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){nn(i,i.return,Ee)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return Ve=sg,sg=!1,Ve}function ga(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&yf(i,o,m)}d=d.next}while(d!==u)}}function ql(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Mf(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function og(n){var i=n.alternate;i!==null&&(n.alternate=null,og(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Gi],delete i[sa],delete i[Oh],delete i[RE],delete i[CE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ag(n){return n.tag===5||n.tag===3||n.tag===4}function lg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ag(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xf(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Tl));else if(u!==4&&(n=n.child,n!==null))for(xf(n,i,o),n=n.sibling;n!==null;)xf(n,i,o),n=n.sibling}function Ef(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ef(n,i,o),n=n.sibling;n!==null;)Ef(n,i,o),n=n.sibling}var Tn=null,Ri=!1;function zr(n,i,o){for(o=o.child;o!==null;)ug(n,i,o),o=o.sibling}function ug(n,i,o){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Q,o)}catch{}switch(o.tag){case 5:In||mo(o,i);case 6:var u=Tn,d=Ri;Tn=null,zr(n,i,o),Tn=u,Ri=d,Tn!==null&&(Ri?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(Ri?(n=Tn,o=o.stateNode,n.nodeType===8?Uh(n.parentNode,o):n.nodeType===1&&Uh(n,o),jo(n)):Uh(Tn,o.stateNode));break;case 4:u=Tn,d=Ri,Tn=o.stateNode.containerInfo,Ri=!0,zr(n,i,o),Tn=u,Ri=d;break;case 0:case 11:case 14:case 15:if(!In&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&yf(o,i,T),d=d.next}while(d!==u)}zr(n,i,o);break;case 1:if(!In&&(mo(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(O){nn(o,i,O)}zr(n,i,o);break;case 21:zr(n,i,o);break;case 22:o.mode&1?(In=(u=In)||o.memoizedState!==null,zr(n,i,o),In=u):zr(n,i,o);break;default:zr(n,i,o)}}function cg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new WE),i.forEach(function(u){var d=eT.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function Ci(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:Tn=O.stateNode,Ri=!1;break e;case 3:Tn=O.stateNode.containerInfo,Ri=!0;break e;case 4:Tn=O.stateNode.containerInfo,Ri=!0;break e}O=O.return}if(Tn===null)throw Error(t(160));ug(m,T,d),Tn=null,Ri=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(oe){nn(d,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)hg(i,n),i=i.sibling}function hg(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ci(i,n),Xi(n),u&4){try{ga(3,n,n.return),ql(3,n)}catch(Ye){nn(n,n.return,Ye)}try{ga(5,n,n.return)}catch(Ye){nn(n,n.return,Ye)}}break;case 1:Ci(i,n),Xi(n),u&512&&o!==null&&mo(o,o.return);break;case 5:if(Ci(i,n),Xi(n),u&512&&o!==null&&mo(o,o.return),n.flags&32){var d=n.stateNode;try{me(d,"")}catch(Ye){nn(n,n.return,Ye)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,O=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&mt(d,m),we(O,T);var oe=we(O,m);for(T=0;T<k.length;T+=2){var _e=k[T],ye=k[T+1];_e==="style"?de(d,ye):_e==="dangerouslySetInnerHTML"?fe(d,ye):_e==="children"?me(d,ye):I(d,_e,ye,oe)}switch(O){case"input":$t(d,m);break;case"textarea":be(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?kt(d,!!m.multiple,ze,!1):ve!==!!m.multiple&&(m.defaultValue!=null?kt(d,!!m.multiple,m.defaultValue,!0):kt(d,!!m.multiple,m.multiple?[]:"",!1))}d[sa]=m}catch(Ye){nn(n,n.return,Ye)}}break;case 6:if(Ci(i,n),Xi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ye){nn(n,n.return,Ye)}}break;case 3:if(Ci(i,n),Xi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{jo(i.containerInfo)}catch(Ye){nn(n,n.return,Ye)}break;case 4:Ci(i,n),Xi(n);break;case 13:Ci(i,n),Xi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Af=Kt())),u&4&&cg(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(In=(oe=In)||_e,Ci(i,n),In=oe):Ci(i,n),Xi(n),u&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!_e&&(n.mode&1)!==0)for(Ge=n,_e=n.child;_e!==null;){for(ye=Ge=_e;Ge!==null;){switch(ve=Ge,ze=ve.child,ve.tag){case 0:case 11:case 14:case 15:ga(4,ve,ve.return);break;case 1:mo(ve,ve.return);var Ve=ve.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ye){nn(u,o,Ye)}}break;case 5:mo(ve,ve.return);break;case 22:if(ve.memoizedState!==null){pg(ye);continue}}ze!==null?(ze.return=ve,Ge=ze):pg(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{d=ye.stateNode,oe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=ye.stateNode,k=ye.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,O.style.display=ce("display",T))}catch(Ye){nn(n,n.return,Ye)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=oe?"":ye.memoizedProps}catch(Ye){nn(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Ci(i,n),Xi(n),u&4&&cg(n);break;case 21:break;default:Ci(i,n),Xi(n)}}function Xi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(ag(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(me(d,""),u.flags&=-33);var m=lg(n);Ef(n,m,d);break;case 3:case 4:var T=u.stateNode.containerInfo,O=lg(n);xf(n,O,T);break;default:throw Error(t(161))}}catch(k){nn(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function YE(n,i,o){Ge=n,fg(n)}function fg(n,i,o){for(var u=(n.mode&1)!==0;Ge!==null;){var d=Ge,m=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||Yl;if(!T){var O=d.alternate,k=O!==null&&O.memoizedState!==null||In;O=Yl;var oe=In;if(Yl=T,(In=k)&&!oe)for(Ge=d;Ge!==null;)T=Ge,k=T.child,T.tag===22&&T.memoizedState!==null?mg(d):k!==null?(k.return=T,Ge=k):mg(d);for(;m!==null;)Ge=m,fg(m),m=m.sibling;Ge=d,Yl=O,In=oe}dg(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ge=m):dg(n)}}function dg(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||ql(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!In)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ai(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&p0(i,m,u);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}p0(i,T,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var _e=oe.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&jo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Mf(i)}catch(ve){nn(i,i.return,ve)}}if(i===n){Ge=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function pg(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ge=o;break}Ge=i.return}}function mg(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ql(4,i)}catch(k){nn(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){nn(i,d,k)}}var m=i.return;try{Mf(i)}catch(k){nn(i,m,k)}break;case 5:var T=i.return;try{Mf(i)}catch(k){nn(i,T,k)}}}catch(k){nn(i,i.return,k)}if(i===n){Ge=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ge=O;break}Ge=i.return}}var qE=Math.ceil,jl=L.ReactCurrentDispatcher,Tf=L.ReactCurrentOwner,mi=L.ReactCurrentBatchConfig,wt=0,vn=null,un=null,wn=0,oi=0,go=Ir(0),pn=0,va=null,ms=0,$l=0,wf=0,_a=null,$n=null,Af=0,vo=1/0,pr=null,Kl=!1,Rf=null,kr=null,Zl=!1,Hr=null,Jl=0,Sa=0,Cf=null,Ql=-1,eu=0;function zn(){return(wt&6)!==0?Kt():Ql!==-1?Ql:Ql=Kt()}function Gr(n){return(n.mode&1)===0?1:(wt&2)!==0&&wn!==0?wn&-wn:bE.transition!==null?(eu===0&&(eu=Be()),eu):(n=yt,n!==0||(n=window.event,n=n===void 0?16:vm(n.type)),n)}function Pi(n,i,o,u){if(50<Sa)throw Sa=0,Cf=null,Error(t(185));_t(n,o,u),((wt&2)===0||n!==vn)&&(n===vn&&((wt&2)===0&&($l|=o),pn===4&&Vr(n,wn)),Kn(n,u),o===1&&wt===0&&(i.mode&1)===0&&(vo=Kt()+500,Cl&&Or()))}function Kn(n,i){var o=n.callbackNode;Nt(n,i);var u=Ht(n,n===vn?wn:0);if(u===0)o!==null&&cl(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&cl(o),i===1)n.tag===0?PE(vg.bind(null,n)):n0(vg.bind(null,n)),wE(function(){(wt&6)===0&&Or()}),o=null;else{switch(or(u)){case 1:o=Vo;break;case 4:o=A;break;case 16:o=X;break;case 536870912:o=te;break;default:o=X}o=wg(o,gg.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function gg(n,i){if(Ql=-1,eu=0,(wt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(_o()&&n.callbackNode!==o)return null;var u=Ht(n,n===vn?wn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=tu(n,u);else{i=u;var d=wt;wt|=2;var m=Sg();(vn!==n||wn!==i)&&(pr=null,vo=Kt()+500,vs(n,i));do try{KE();break}catch(O){_g(n,O)}while(!0);Xh(),jl.current=m,wt=d,un!==null?i=0:(vn=null,wn=0,i=pn)}if(i!==0){if(i===2&&(d=ln(n),d!==0&&(u=d,i=Pf(n,d))),i===1)throw o=va,vs(n,0),Vr(n,u),Kn(n,Kt()),o;if(i===6)Vr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!jE(d)&&(i=tu(n,u),i===2&&(m=ln(n),m!==0&&(u=m,i=Pf(n,m))),i===1))throw o=va,vs(n,0),Vr(n,u),Kn(n,Kt()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:_s(n,$n,pr);break;case 3:if(Vr(n,u),(u&130023424)===u&&(i=Af+500-Kt(),10<i)){if(Ht(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){zn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ih(_s.bind(null,n,$n,pr),i);break}_s(n,$n,pr);break;case 4:if(Vr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var T=31-Ae(u);m=1<<T,T=i[T],T>d&&(d=T),u&=~m}if(u=d,u=Kt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*qE(u/1960))-u,10<u){n.timeoutHandle=Ih(_s.bind(null,n,$n,pr),u);break}_s(n,$n,pr);break;case 5:_s(n,$n,pr);break;default:throw Error(t(329))}}}return Kn(n,Kt()),n.callbackNode===o?gg.bind(null,n):null}function Pf(n,i){var o=_a;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=tu(n,i),n!==2&&(i=$n,$n=o,i!==null&&bf(i)),n}function bf(n){$n===null?$n=n:$n.push.apply($n,n)}function jE(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Ti(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vr(n,i){for(i&=~wf,i&=~$l,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ae(i),u=1<<o;n[o]=-1,i&=~u}}function vg(n){if((wt&6)!==0)throw Error(t(327));_o();var i=Ht(n,0);if((i&1)===0)return Kn(n,Kt()),null;var o=tu(n,i);if(n.tag!==0&&o===2){var u=ln(n);u!==0&&(i=u,o=Pf(n,u))}if(o===1)throw o=va,vs(n,0),Vr(n,i),Kn(n,Kt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,$n,pr),Kn(n,Kt()),null}function Lf(n,i){var o=wt;wt|=1;try{return n(i)}finally{wt=o,wt===0&&(vo=Kt()+500,Cl&&Or())}}function gs(n){Hr!==null&&Hr.tag===0&&(wt&6)===0&&_o();var i=wt;wt|=1;var o=mi.transition,u=yt;try{if(mi.transition=null,yt=1,n)return n()}finally{yt=u,mi.transition=o,wt=i,(wt&6)===0&&Or()}}function Df(){oi=go.current,Yt(go)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,TE(o)),un!==null)for(o=un.return;o!==null;){var u=o;switch(kh(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Al();break;case 3:fo(),Yt(Yn),Yt(Ln),Qh();break;case 5:Zh(u);break;case 4:fo();break;case 13:Yt(Zt);break;case 19:Yt(Zt);break;case 10:Yh(u.type._context);break;case 22:case 23:Df()}o=o.return}if(vn=n,un=n=Wr(n.current,null),wn=oi=i,pn=0,va=null,wf=$l=ms=0,$n=_a=null,fs!==null){for(i=0;i<fs.length;i++)if(o=fs[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var T=m.next;m.next=d,u.next=T}o.pending=u}fs=null}return n}function _g(n,i){do{var o=un;try{if(Xh(),Bl.current=Gl,zl){for(var u=Jt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}zl=!1}if(ps=0,gn=dn=Jt=null,ha=!1,fa=0,Tf.current=null,o===null||o.return===null){pn=1,va=i,un=null;break}e:{var m=n,T=o.return,O=o,k=i;if(i=wn,O.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var oe=k,_e=O,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ze=V0(T);if(ze!==null){ze.flags&=-257,W0(ze,T,O,m,i),ze.mode&1&&G0(m,oe,i),i=ze,k=oe;var Ve=i.updateQueue;if(Ve===null){var Ye=new Set;Ye.add(k),i.updateQueue=Ye}else Ve.add(k);break e}else{if((i&1)===0){G0(m,oe,i),Nf();break e}k=Error(t(426))}}else if(jt&&O.mode&1){var rn=V0(T);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),W0(rn,T,O,m,i),Vh(po(k,O));break e}}m=k=po(k,O),pn!==4&&(pn=2),_a===null?_a=[m]:_a.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=k0(m,k,i);d0(m,Z);break e;case 1:O=k;var W=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(kr===null||!kr.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=H0(m,O,i);d0(m,Ee);break e}}m=m.return}while(m!==null)}Mg(o)}catch(je){i=je,un===o&&o!==null&&(un=o=o.return);continue}break}while(!0)}function Sg(){var n=jl.current;return jl.current=Gl,n===null?Gl:n}function Nf(){(pn===0||pn===3||pn===2)&&(pn=4),vn===null||(ms&268435455)===0&&($l&268435455)===0||Vr(vn,wn)}function tu(n,i){var o=wt;wt|=2;var u=Sg();(vn!==n||wn!==i)&&(pr=null,vs(n,i));do try{$E();break}catch(d){_g(n,d)}while(!0);if(Xh(),wt=o,jl.current=u,un!==null)throw Error(t(261));return vn=null,wn=0,pn}function $E(){for(;un!==null;)yg(un)}function KE(){for(;un!==null&&!uh();)yg(un)}function yg(n){var i=Tg(n.alternate,n,oi);n.memoizedProps=n.pendingProps,i===null?Mg(n):un=i,Tf.current=null}function Mg(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=GE(o,i,oi),o!==null){un=o;return}}else{if(o=VE(o,i),o!==null){o.flags&=32767,un=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);pn===0&&(pn=5)}function _s(n,i,o){var u=yt,d=mi.transition;try{mi.transition=null,yt=1,ZE(n,i,o,u)}finally{mi.transition=d,yt=u}return null}function ZE(n,i,o,u){do _o();while(Hr!==null);if((wt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Wn(n,m),n===vn&&(un=vn=null,wn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Zl||(Zl=!0,wg(X,function(){return _o(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=mi.transition,mi.transition=null;var T=yt;yt=1;var O=wt;wt|=4,Tf.current=null,XE(n,o),hg(o,n),vE(Dh),fl=!!Lh,Dh=Lh=null,n.current=o,YE(o),ch(),wt=O,yt=T,mi.transition=m}else n.current=o;if(Zl&&(Zl=!1,Hr=n,Jl=d),m=n.pendingLanes,m===0&&(kr=null),ke(o.stateNode),Kn(n,Kt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Kl)throw Kl=!1,n=Rf,Rf=null,n;return(Jl&1)!==0&&n.tag!==0&&_o(),m=n.pendingLanes,(m&1)!==0?n===Cf?Sa++:(Sa=0,Cf=n):Sa=0,Or(),null}function _o(){if(Hr!==null){var n=or(Jl),i=mi.transition,o=yt;try{if(mi.transition=null,yt=16>n?16:n,Hr===null)var u=!1;else{if(n=Hr,Hr=null,Jl=0,(wt&6)!==0)throw Error(t(331));var d=wt;for(wt|=4,Ge=n.current;Ge!==null;){var m=Ge,T=m.child;if((Ge.flags&16)!==0){var O=m.deletions;if(O!==null){for(var k=0;k<O.length;k++){var oe=O[k];for(Ge=oe;Ge!==null;){var _e=Ge;switch(_e.tag){case 0:case 11:case 15:ga(8,_e,m)}var ye=_e.child;if(ye!==null)ye.return=_e,Ge=ye;else for(;Ge!==null;){_e=Ge;var ve=_e.sibling,ze=_e.return;if(og(_e),_e===oe){Ge=null;break}if(ve!==null){ve.return=ze,Ge=ve;break}Ge=ze}}}var Ve=m.alternate;if(Ve!==null){var Ye=Ve.child;if(Ye!==null){Ve.child=null;do{var rn=Ye.sibling;Ye.sibling=null,Ye=rn}while(Ye!==null)}}Ge=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ge=T;else e:for(;Ge!==null;){if(m=Ge,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ga(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,Ge=Z;break e}Ge=m.return}}var W=n.current;for(Ge=W;Ge!==null;){T=Ge;var ne=T.child;if((T.subtreeFlags&2064)!==0&&ne!==null)ne.return=T,Ge=ne;else e:for(T=W;Ge!==null;){if(O=Ge,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:ql(9,O)}}catch(je){nn(O,O.return,je)}if(O===T){Ge=null;break e}var Ee=O.sibling;if(Ee!==null){Ee.return=O.return,Ge=Ee;break e}Ge=O.return}}if(wt=d,Or(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Q,n)}catch{}u=!0}return u}finally{yt=o,mi.transition=i}}return!1}function xg(n,i,o){i=po(o,i),i=k0(n,i,1),n=Br(n,i,1),i=zn(),n!==null&&(_t(n,1,i),Kn(n,i))}function nn(n,i,o){if(n.tag===3)xg(n,n,o);else for(;i!==null;){if(i.tag===3){xg(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(kr===null||!kr.has(u))){n=po(o,n),n=H0(i,n,1),i=Br(i,n,1),n=zn(),i!==null&&(_t(i,1,n),Kn(i,n));break}}i=i.return}}function JE(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=zn(),n.pingedLanes|=n.suspendedLanes&o,vn===n&&(wn&o)===o&&(pn===4||pn===3&&(wn&130023424)===wn&&500>Kt()-Af?vs(n,0):wf|=o),Kn(n,i)}function Eg(n,i){i===0&&((n.mode&1)===0?i=1:(i=qe,qe<<=1,(qe&130023424)===0&&(qe=4194304)));var o=zn();n=hr(n,i),n!==null&&(_t(n,i,o),Kn(n,o))}function QE(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Eg(n,o)}function eT(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Eg(n,o)}var Tg;Tg=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Yn.current)jn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return jn=!1,HE(n,i,o);jn=(n.flags&131072)!==0}else jn=!1,jt&&(i.flags&1048576)!==0&&i0(i,bl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Xl(n,i),n=i.pendingProps;var d=so(i,Ln.current);ho(i,o),d=nf(null,i,u,n,d,o);var m=rf();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(u)?(m=!0,Rl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$h(i),d.updater=Vl,i.stateNode=d,d._reactInternals=i,cf(i,u,n,o),i=pf(null,i,u,!0,m,o)):(i.tag=0,jt&&m&&zh(i),Bn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Xl(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=nT(u),n=Ai(u,n),d){case 0:i=df(null,i,u,n,o);break e;case 1:i=K0(null,i,u,n,o);break e;case 11:i=X0(null,i,u,n,o);break e;case 14:i=Y0(null,i,u,Ai(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ai(u,d),df(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ai(u,d),K0(n,i,u,d,o);case 3:e:{if(Z0(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,f0(n,i),Ol(i,u,null,o);var T=i.memoizedState;if(u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=po(Error(t(423)),i),i=J0(n,i,u,o,d);break e}else if(u!==d){d=po(Error(t(424)),i),i=J0(n,i,u,o,d);break e}else for(si=Nr(i.stateNode.containerInfo.firstChild),ri=i,jt=!0,wi=null,o=c0(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(lo(),u===d){i=dr(n,i,o);break e}Bn(n,i,u,o)}i=i.child}return i;case 5:return m0(i),n===null&&Gh(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Nh(u,d)?T=null:m!==null&&Nh(u,m)&&(i.flags|=32),$0(n,i),Bn(n,i,T,o),i.child;case 6:return n===null&&Gh(i),null;case 13:return Q0(n,i,o);case 4:return Kh(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=uo(i,null,u,o):Bn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ai(u,d),X0(n,i,u,d,o);case 7:return Bn(n,i,i.pendingProps,o),i.child;case 8:return Bn(n,i,i.pendingProps.children,o),i.child;case 12:return Bn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Gt(Nl,u._currentValue),u._currentValue=T,m!==null)if(Ti(m.value,T)){if(m.children===d.children&&!Yn.current){i=dr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){T=m.child;for(var k=O.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=fr(-1,o&-o),k.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var _e=oe.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),oe.pending=k}}m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),qh(m.return,o,i),O.lanes|=o;break}k=k.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,O=T.alternate,O!==null&&(O.lanes|=o),qh(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Bn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ho(i,o),d=di(d),u=u(d),i.flags|=1,Bn(n,i,u,o),i.child;case 14:return u=i.type,d=Ai(u,i.pendingProps),d=Ai(u.type,d),Y0(n,i,u,d,o);case 15:return q0(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ai(u,d),Xl(n,i),i.tag=1,qn(u)?(n=!0,Rl(i)):n=!1,ho(i,o),B0(i,u,d),cf(i,u,d,o),pf(null,i,u,!0,n,o);case 19:return tg(n,i,o);case 22:return j0(n,i,o)}throw Error(t(156,i.tag))};function wg(n,i){return ul(n,i)}function tT(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,i,o,u){return new tT(n,i,o,u)}function If(n){return n=n.prototype,!(!n||!n.isReactComponent)}function nT(n){if(typeof n=="function")return If(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===Y)return 14}return 2}function Wr(n,i){var o=n.alternate;return o===null?(o=gi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function nu(n,i,o,u,d,m){var T=2;if(u=n,typeof n=="function")If(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return Ss(o.children,d,m,i);case w:T=8,d|=8;break;case N:return n=gi(12,o,i,d|2),n.elementType=N,n.lanes=m,n;case ie:return n=gi(13,o,i,d),n.elementType=ie,n.lanes=m,n;case se:return n=gi(19,o,i,d),n.elementType=se,n.lanes=m,n;case K:return iu(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:T=10;break e;case z:T=9;break e;case $:T=11;break e;case Y:T=14;break e;case J:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gi(T,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Ss(n,i,o,u){return n=gi(7,n,u,i),n.lanes=o,n}function iu(n,i,o,u){return n=gi(22,n,u,i),n.elementType=K,n.lanes=o,n.stateNode={isHidden:!1},n}function Uf(n,i,o){return n=gi(6,n,null,i),n.lanes=o,n}function Of(n,i,o){return i=gi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function iT(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ff(n,i,o,u,d,m,T,O,k){return n=new iT(n,i,o,O,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=gi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(m),n}function rT(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Ag(n){if(!n)return Ur;n=n._reactInternals;e:{if(ki(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(qn(o))return e0(n,o,i)}return i}function Rg(n,i,o,u,d,m,T,O,k){return n=Ff(o,u,!0,n,d,m,T,O,k),n.context=Ag(null),o=n.current,u=zn(),d=Gr(o),m=fr(u,d),m.callback=i??null,Br(o,m,d),n.current.lanes=d,_t(n,d,u),Kn(n,u),n}function ru(n,i,o,u){var d=i.current,m=zn(),T=Gr(d);return o=Ag(o),i.context===null?i.context=o:i.pendingContext=o,i=fr(m,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Br(d,i,T),n!==null&&(Pi(n,d,T,m),Ul(n,d,T)),T}function su(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Bf(n,i){Cg(n,i),(n=n.alternate)&&Cg(n,i)}function sT(){return null}var Pg=typeof reportError=="function"?reportError:function(n){console.error(n)};function zf(n){this._internalRoot=n}ou.prototype.render=zf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ru(n,i,null,null)},ou.prototype.unmount=zf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){ru(null,n,null,null)}),i[ar]=null}};function ou(n){this._internalRoot=n}ou.prototype.unstable_scheduleHydration=function(n){if(n){var i=It();n={blockedOn:null,target:n,priority:i};for(var o=0;o<br.length&&i!==0&&i<br[o].priority;o++);br.splice(o,0,n),o===0&&mm(n)}};function kf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function au(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bg(){}function oT(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var oe=su(T);m.call(oe)}}var T=Rg(i,u,n,0,null,!1,!1,"",bg);return n._reactRootContainer=T,n[ar]=T.current,ia(n.nodeType===8?n.parentNode:n),gs(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var O=u;u=function(){var oe=su(k);O.call(oe)}}var k=Ff(n,0,!1,null,null,!1,!1,"",bg);return n._reactRootContainer=k,n[ar]=k.current,ia(n.nodeType===8?n.parentNode:n),gs(function(){ru(i,k,o,u)}),k}function lu(n,i,o,u,d){var m=o._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var O=d;d=function(){var k=su(T);O.call(k)}}ru(i,T,n,d)}else T=oT(o,i,n,d,u);return su(T)}Pt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);o!==0&&(Xn(i,o|1),Kn(i,Kt()),(wt&6)===0&&(vo=Kt()+500,Or()))}break;case 13:gs(function(){var u=hr(n,1);if(u!==null){var d=zn();Pi(u,n,1,d)}}),Bf(n,1)}},Wt=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var o=zn();Pi(i,n,134217728,o)}Bf(n,134217728)}},xi=function(n){if(n.tag===13){var i=Gr(n),o=hr(n,i);if(o!==null){var u=zn();Pi(o,n,i,u)}Bf(n,i)}},It=function(){return yt},Ei=function(n,i){var o=yt;try{return yt=n,i()}finally{yt=o}},st=function(n,i,o){switch(i){case"input":if($t(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=wl(u);if(!d)throw Error(t(90));Bt(u),$t(u,d)}}}break;case"textarea":be(n,o);break;case"select":i=o.value,i!=null&&kt(n,!!o.multiple,i,!1)}},Re=Lf,ge=gs;var aT={usingClientEntryPoint:!1,Events:[oa,io,wl,he,Oe,Lf]},ya={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lT={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ho(n),n===null?null:n.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||sT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{Q=uu.inject(lT),Ce=uu}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aT,kn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(i))throw Error(t(200));return rT(n,i,null,o)},kn.createRoot=function(n,i){if(!kf(n))throw Error(t(299));var o=!1,u="",d=Pg;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ff(n,1,!1,null,null,o,!1,u,d),n[ar]=i.current,ia(n.nodeType===8?n.parentNode:n),new zf(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ho(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return gs(n)},kn.hydrate=function(n,i,o){if(!au(i))throw Error(t(200));return lu(null,n,i,!0,o)},kn.hydrateRoot=function(n,i,o){if(!kf(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",T=Pg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Rg(i,null,n,1,o??null,d,!1,m,T),n[ar]=i.current,ia(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ou(i)},kn.render=function(n,i,o){if(!au(i))throw Error(t(200));return lu(null,n,i,!1,o)},kn.unmountComponentAtNode=function(n){if(!au(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){lu(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},kn.unstable_batchedUpdates=Lf,kn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!au(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return lu(n,i,o,!1,u)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var qf;function Fg(){if(qf)return hu.exports;qf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hu.exports=Og(),hu.exports}var jf;function Bg(){if(jf)return Ma;jf=1;var s=Fg();return Ma.createRoot=s.createRoot,Ma.hydrateRoot=s.hydrateRoot,Ma}var zg=Bg();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pu="184",ys={ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kg=0,$f=1,Hg=2,xa=1,Gg=2,So=3,mr=0,Hn=1,Et=2,Yi=0,xs=1,Kf=2,Zf=3,Jf=4,Vg=5,Yr=100,Wg=101,Xg=102,Yg=103,qg=104,jg=200,$g=201,Kg=202,Zg=203,mu=204,gu=205,Jg=206,Qg=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,ov=214,vu=0,_u=1,Su=2,Es=3,yu=4,Mu=5,xu=6,Eu=7,Qf=0,av=1,lv=2,bi=0,ed=1,td=2,nd=3,id=4,rd=5,sd=6,od=7,ad=300,qr=301,Ts=302,Tu=303,wu=304,Ea=306,Ta=1e3,qi=1001,Au=1002,yn=1003,uv=1004,wa=1005,An=1006,Ru=1007,jr=1008,Zn=1009,ld=1010,ud=1011,yo=1012,Cu=1013,Li=1014,Di=1015,ji=1016,Pu=1017,bu=1018,Mo=1020,cd=35902,hd=35899,fd=1021,dd=1022,vi=1023,$i=1026,$r=1027,pd=1028,Lu=1029,Kr=1030,Du=1031,Nu=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,Iu=35840,Uu=35841,Ou=35842,Fu=35843,Bu=36196,zu=37492,ku=37496,Hu=37488,Gu=37489,ba=37490,Vu=37491,Wu=37808,Xu=37809,Yu=37810,qu=37811,ju=37812,$u=37813,Ku=37814,Zu=37815,Ju=37816,Qu=37817,ec=37818,tc=37819,nc=37820,ic=37821,rc=36492,sc=36494,oc=36495,ac=36283,lc=36284,La=36285,uc=36286,cv=3200,md=0,hv=1,gr="",ai="srgb",Da="srgb-linear",Na="linear",bt="srgb",ws=7680,gd=519,fv=512,dv=513,pv=514,cc=515,mv=516,gv=517,hc=518,vv=519,vd=35044,_d="300 es",Ni=2e3,xo=2001;function _v(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Eo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sv(){const s=Eo("canvas");return s.style.display="block",s}const Sd={};function yd(...s){const e="THREE."+s.shift();console.log(e,...s)}function Md(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function tt(...s){s=Md(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Tt(...s){s=Md(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fc(...s){const e=s.join(" ");e in Sd||(Sd[e]=!0,tt(...s))}function yv(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Mv={[vu]:_u,[Su]:xu,[yu]:Eu,[Es]:Mu,[_u]:vu,[xu]:Su,[Eu]:yu,[Mu]:Es};class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xd=1234567;const To=Math.PI/180,wo=180/Math.PI;function As(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function ft(s,e,t){return Math.max(e,Math.min(t,s))}function dc(s,e){return(s%e+e)%e}function xv(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function Ev(s,e,t){return s!==e?(t-s)/(e-s):0}function Ao(s,e,t){return(1-t)*s+t*e}function Tv(s,e,t,r){return Ao(s,e,1-Math.exp(-t*r))}function wv(s,e=1){return e-Math.abs(dc(s,e*2)-e)}function Av(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Rv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Cv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Pv(s,e){return s+Math.random()*(e-s)}function bv(s){return s*(.5-Math.random())}function Lv(s){s!==void 0&&(xd=s);let e=xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dv(s){return s*To}function Nv(s){return s*wo}function Iv(s){return(s&s-1)===0&&s!==0}function Uv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ov(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fv(s,e,t,r,a){const l=Math.cos,c=Math.sin,h=l(t/2),f=c(t/2),p=l((e+r)/2),g=c((e+r)/2),_=l((e-r)/2),v=c((e-r)/2),S=l((r-e)/2),E=c((r-e)/2);switch(a){case"XYX":s.set(h*g,f*_,f*v,h*p);break;case"YZY":s.set(f*v,h*g,f*_,h*p);break;case"ZXZ":s.set(f*_,f*v,h*g,h*p);break;case"XZX":s.set(h*g,f*E,f*S,h*p);break;case"YXY":s.set(f*S,h*g,f*E,h*p);break;case"ZYZ":s.set(f*E,f*S,h*g,h*p);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Rs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ed={DEG2RAD:To,RAD2DEG:wo,generateUUID:As,clamp:ft,euclideanModulo:dc,mapLinear:xv,inverseLerp:Ev,lerp:Ao,damp:Tv,pingpong:wv,smoothstep:Av,smootherstep:Rv,randInt:Cv,randFloat:Pv,randFloatSpread:bv,seededRandom:Lv,degToRad:Dv,radToDeg:Nv,isPowerOfTwo:Iv,ceilPowerOfTwo:Uv,floorPowerOfTwo:Ov,setQuaternionFromProperEuler:Fv,normalize:Un,denormalize:Rs},rh=class rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;let $e=rh;class _r{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,h){let f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3],v=l[c+0],S=l[c+1],E=l[c+2],b=l[c+3];if(_!==b||f!==v||p!==S||g!==E){let M=f*v+p*S+g*E+_*b;M<0&&(v=-v,S=-S,E=-E,b=-b,M=-M);let y=1-h;if(M<.9995){const C=Math.acos(M),I=Math.sin(C);y=Math.sin(y*C)/I,h=Math.sin(h*C)/I,f=f*y+v*h,p=p*y+S*h,g=g*y+E*h,_=_*y+b*h}else{f=f*y+v*h,p=p*y+S*h,g=g*y+E*h,_=_*y+b*h;const C=1/Math.sqrt(f*f+p*p+g*g+_*_);f*=C,p*=C,g*=C,_*=C}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const h=r[a],f=r[a+1],p=r[a+2],g=r[a+3],_=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=h*E+g*_+f*S-p*v,e[t+1]=f*E+g*v+p*_-h*S,e[t+2]=p*E+g*S+h*v-f*_,e[t+3]=g*E-h*_-f*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,h=Math.cos,f=Math.sin,p=h(r/2),g=h(a/2),_=h(l/2),v=f(r/2),S=f(a/2),E=f(l/2);switch(c){case"XYZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"YZX":this._x=v*g*_+p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_-v*S*E;break;case"XZY":this._x=v*g*_-p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_+v*S*E;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],h=t[5],f=t[9],p=t[2],g=t[6],_=t[10],v=r+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-f)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(g-f)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,h=t._x,f=t._y,p=t._z,g=t._w;return this._x=r*g+c*h+a*p-l*f,this._y=a*g+c*f+l*h-r*p,this._z=l*g+c*p+r*f-a*h,this._w=c*g-r*h-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,h=this.dot(e);h<0&&(r=-r,a=-a,l=-l,c=-c,h=-h);let f=1-t;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);f=Math.sin(f*p)/g,t=Math.sin(t*p)/g,this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sh=class sh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,h=e.z,f=e.w,p=2*(c*a-h*r),g=2*(h*t-l*a),_=2*(l*r-c*t);return this.x=t+f*p+c*_-h*g,this.y=r+f*g+h*p-l*_,this.z=a+f*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,h=t.y,f=t.z;return this.x=a*f-l*h,this.y=l*c-r*f,this.z=r*h-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;let R=sh;const pc=new R,Td=new _r,oh=class oh{constructor(e,t,r,a,l,c,h,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,h,f,p)}set(e,t,r,a,l,c,h,f,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=h,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],h=r[3],f=r[6],p=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],b=a[0],M=a[3],y=a[6],C=a[1],I=a[4],L=a[7],U=a[2],P=a[5],F=a[8];return l[0]=c*b+h*C+f*U,l[3]=c*M+h*I+f*P,l[6]=c*y+h*L+f*F,l[1]=p*b+g*C+_*U,l[4]=p*M+g*I+_*P,l[7]=p*y+g*L+_*F,l[2]=v*b+S*C+E*U,l[5]=v*M+S*I+E*P,l[8]=v*y+S*L+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8];return t*c*g-t*h*p-r*l*g+r*h*f+a*l*p-a*c*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8],_=g*c-h*p,v=h*f-g*l,S=p*l-c*f,E=t*_+r*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=_*b,e[1]=(a*p-g*r)*b,e[2]=(h*r-a*c)*b,e[3]=v*b,e[4]=(g*t-a*f)*b,e[5]=(a*l-h*t)*b,e[6]=S*b,e[7]=(r*f-p*t)*b,e[8]=(c*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,h){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*c+p*h)+c+e,-a*p,a*f,-a*(-p*c+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;let ut=oh;const mc=new ut,wd=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bv(){const s={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===bt&&(a.r=Ki(a.r),a.g=Ki(a.g),a.b=Ki(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(a.r=Cs(a.r),a.g=Cs(a.g),a.b=Cs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gr?Na:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return fc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return fc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Da]:{primaries:e,whitePoint:r,transfer:Na,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:wd,fromXYZ:Ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const Mt=Bv();function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class zv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ps===void 0&&(Ps=Eo("canvas")),Ps.width=e.width,Ps.height=e.height;const a=Ps.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ps}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Ki(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ki(t[r]/255)*255):t[r]=Ki(t[r]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kv=0;class gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,h=a.length;c<h;c++)a[c].isDataTexture?l.push(vc(a[c].image)):l.push(vc(a[c]))}else l=vc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Hv=0;const _c=new R;class Mn extends vr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,r=qi,a=qi,l=An,c=jr,h=vi,f=Zn,p=Mn.DEFAULT_ANISOTROPY,g=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=As(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null,Mn.DEFAULT_MAPPING=ad,Mn.DEFAULT_ANISOTROPY=1;const ah=class ah{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],g=f[4],_=f[8],v=f[1],S=f[5],E=f[9],b=f[2],M=f[6],y=f[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(p+1)/2,L=(S+1)/2,U=(y+1)/2,P=(g+v)/4,F=(_+b)/4,w=(E+M)/4;return I>L&&I>U?I<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(I),a=P/r,l=F/r):L>U?L<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(L),r=P/a,l=w/a):U<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),r=F/l,a=w/l),this.set(r,a,l,t),this}let C=Math.sqrt((M-E)*(M-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(C)<.001&&(C=1),this.x=(M-E)/C,this.y=(_-b)/C,this.z=(v-g)/C,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;let Qt=ah;class Gv extends vr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Mn(a),c=r.count;for(let h=0;h<c;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Gv{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Rd extends Mn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vv extends Mn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const al=class al{constructor(e,t,r,a,l,c,h,f,p,g,_,v,S,E,b,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,h,f,p,g,_,v,S,E,b,M)}set(e,t,r,a,l,c,h,f,p,g,_,v,S,E,b,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=c,y[9]=h,y[13]=f,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=E,y[11]=b,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new al().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),c=1/bs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),h=Math.sin(r),f=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*g,S=c*_,E=h*g,b=h*_;t[0]=f*g,t[4]=-f*_,t[8]=p,t[1]=S+E*p,t[5]=v-b*p,t[9]=-h*f,t[2]=b-v*p,t[6]=E+S*p,t[10]=c*f}else if(e.order==="YXZ"){const v=f*g,S=f*_,E=p*g,b=p*_;t[0]=v+b*h,t[4]=E*h-S,t[8]=c*p,t[1]=c*_,t[5]=c*g,t[9]=-h,t[2]=S*h-E,t[6]=b+v*h,t[10]=c*f}else if(e.order==="ZXY"){const v=f*g,S=f*_,E=p*g,b=p*_;t[0]=v-b*h,t[4]=-c*_,t[8]=E+S*h,t[1]=S+E*h,t[5]=c*g,t[9]=b-v*h,t[2]=-c*p,t[6]=h,t[10]=c*f}else if(e.order==="ZYX"){const v=c*g,S=c*_,E=h*g,b=h*_;t[0]=f*g,t[4]=E*p-S,t[8]=v*p+b,t[1]=f*_,t[5]=b*p+v,t[9]=S*p-E,t[2]=-p,t[6]=h*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,S=c*p,E=h*f,b=h*p;t[0]=f*g,t[4]=b-v*_,t[8]=E*_+S,t[1]=_,t[5]=c*g,t[9]=-h*g,t[2]=-p*g,t[6]=S*_+E,t[10]=v-b*_}else if(e.order==="XZY"){const v=c*f,S=c*p,E=h*f,b=h*p;t[0]=f*g,t[4]=-_,t[8]=p*g,t[1]=v*_+b,t[5]=c*g,t[9]=S*_-E,t[2]=E*_-S,t[6]=h*g,t[10]=b*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wv,e,Xv)}lookAt(e,t,r){const a=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Sr.crossVectors(r,Jn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Sr.crossVectors(r,Jn)),Sr.normalize(),Ia.crossVectors(Jn,Sr),a[0]=Sr.x,a[4]=Ia.x,a[8]=Jn.x,a[1]=Sr.y,a[5]=Ia.y,a[9]=Jn.y,a[2]=Sr.z,a[6]=Ia.z,a[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],h=r[4],f=r[8],p=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],b=r[6],M=r[10],y=r[14],C=r[3],I=r[7],L=r[11],U=r[15],P=a[0],F=a[4],w=a[8],N=a[12],G=a[1],z=a[5],$=a[9],ie=a[13],se=a[2],Y=a[6],J=a[10],K=a[14],q=a[3],ue=a[7],ae=a[11],B=a[15];return l[0]=c*P+h*G+f*se+p*q,l[4]=c*F+h*z+f*Y+p*ue,l[8]=c*w+h*$+f*J+p*ae,l[12]=c*N+h*ie+f*K+p*B,l[1]=g*P+_*G+v*se+S*q,l[5]=g*F+_*z+v*Y+S*ue,l[9]=g*w+_*$+v*J+S*ae,l[13]=g*N+_*ie+v*K+S*B,l[2]=E*P+b*G+M*se+y*q,l[6]=E*F+b*z+M*Y+y*ue,l[10]=E*w+b*$+M*J+y*ae,l[14]=E*N+b*ie+M*K+y*B,l[3]=C*P+I*G+L*se+U*q,l[7]=C*F+I*z+L*Y+U*ue,l[11]=C*w+I*$+L*J+U*ae,l[15]=C*N+I*ie+L*K+U*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],h=e[5],f=e[9],p=e[13],g=e[2],_=e[6],v=e[10],S=e[14],E=e[3],b=e[7],M=e[11],y=e[15],C=f*S-p*v,I=h*S-p*_,L=h*v-f*_,U=c*S-p*g,P=c*v-f*g,F=c*_-h*g;return t*(b*C-M*I+y*L)-r*(E*C-M*U+y*P)+a*(E*I-b*U+y*F)-l*(E*L-b*P+M*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],h=e[5],f=e[6],p=e[7],g=e[8],_=e[9],v=e[10],S=e[11],E=e[12],b=e[13],M=e[14],y=e[15],C=t*h-r*c,I=t*f-a*c,L=t*p-l*c,U=r*f-a*h,P=r*p-l*h,F=a*p-l*f,w=g*b-_*E,N=g*M-v*E,G=g*y-S*E,z=_*M-v*b,$=_*y-S*b,ie=v*y-S*M,se=C*ie-I*$+L*z+U*G-P*N+F*w;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/se;return e[0]=(h*ie-f*$+p*z)*Y,e[1]=(a*$-r*ie-l*z)*Y,e[2]=(b*F-M*P+y*U)*Y,e[3]=(v*P-_*F-S*U)*Y,e[4]=(f*G-c*ie-p*N)*Y,e[5]=(t*ie-a*G+l*N)*Y,e[6]=(M*L-E*F-y*I)*Y,e[7]=(g*F-v*L+S*I)*Y,e[8]=(c*$-h*G+p*w)*Y,e[9]=(r*G-t*$-l*w)*Y,e[10]=(E*P-b*L+y*C)*Y,e[11]=(_*L-g*P-S*C)*Y,e[12]=(h*N-c*z-f*w)*Y,e[13]=(t*z-r*N+a*w)*Y,e[14]=(b*I-E*U-M*C)*Y,e[15]=(g*U-_*I+v*C)*Y,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,h=e.y,f=e.z,p=l*c,g=l*h;return this.set(p*c+r,p*h-a*f,p*f+a*h,0,p*h+a*f,g*h+r,g*f-a*c,0,p*f-a*h,g*f+a*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,h=t._z,f=t._w,p=l+l,g=c+c,_=h+h,v=l*p,S=l*g,E=l*_,b=c*g,M=c*_,y=h*_,C=f*p,I=f*g,L=f*_,U=r.x,P=r.y,F=r.z;return a[0]=(1-(b+y))*U,a[1]=(S+L)*U,a[2]=(E-I)*U,a[3]=0,a[4]=(S-L)*P,a[5]=(1-(v+y))*P,a[6]=(M+C)*P,a[7]=0,a[8]=(E+I)*F,a[9]=(M-C)*F,a[10]=(1-(v+b))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=bs.set(a[0],a[1],a[2]).length();const h=bs.set(a[4],a[5],a[6]).length(),f=bs.set(a[8],a[9],a[10]).length();l<0&&(c=-c),_i.copy(this);const p=1/c,g=1/h,_=1/f;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,t.setFromRotationMatrix(_i),r.x=c,r.y=h,r.z=f,this}makePerspective(e,t,r,a,l,c,h=Ni,f=!1){const p=this.elements,g=2*l/(t-e),_=2*l/(r-a),v=(t+e)/(t-e),S=(r+a)/(r-a);let E,b;if(f)E=l/(c-l),b=c*l/(c-l);else if(h===Ni)E=-(c+l)/(c-l),b=-2*c*l/(c-l);else if(h===xo)E=-c/(c-l),b=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,c,h=Ni,f=!1){const p=this.elements,g=2/(t-e),_=2/(r-a),v=-(t+e)/(t-e),S=-(r+a)/(r-a);let E,b;if(f)E=1/(c-l),b=c/(c-l);else if(h===Ni)E=-2/(c-l),b=-(c+l)/(c-l);else if(h===xo)E=-1/(c-l),b=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};al.prototype.isMatrix4=!0;let en=al;const bs=new R,_i=new en,Wv=new R(0,0,0),Xv=new R(1,1,1),Sr=new R,Ia=new R,Jn=new R,Cd=new en,Pd=new _r;class Zr{constructor(e=0,t=0,r=0,a=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],h=a[8],f=a[1],p=a[5],g=a[9],_=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ft(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-ft(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yv=0;const Ld=new R,Ls=new _r,Zi=new en,Ua=new R,Ro=new R,qv=new R,jv=new _r,Dd=new R(1,0,0),Nd=new R(0,1,0),Id=new R(0,0,1),Ud={type:"added"},$v={type:"removed"},Ds={type:"childadded",child:null},Sc={type:"childremoved",child:null};class Cn extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new R,t=new Zr,r=new _r,a=new R(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new en},normalMatrix:{value:new ut}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Dd,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Ld.copy(e).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dd,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ua.copy(e):Ua.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ro,Ua,this.up):Zi.lookAt(Ua,Ro,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($v),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ud),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(l(e.animations,f))}}if(t){const h=c(e.geometries),f=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(h){const f=[];for(const p in h){const g=h[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Cn.DEFAULT_UP=new R(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jr extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kv={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const b of e.hand.values()){const M=t.getJointPose(b,r),y=this._getHandJoint(p,b);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Kv)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Jr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Mc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Mt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Mt.workingColorSpace){if(e=dc(e,1),t=ft(t,0,1),r=ft(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Mc(c,l,e+1/3),this.g=Mc(c,l,e),this.b=Mc(c,l,e-1/3)}return Mt.colorSpaceToWorking(this,a),this}setStyle(e,t=ai){function r(l){l!==void 0&&parseFloat(l)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],h=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const r=Od[e.toLowerCase()];return r!==void 0?this.setHex(r,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Mt.workingToColorSpace(Pn.copy(this),e),Math.round(ft(Pn.r*255,0,255))*65536+Math.round(ft(Pn.g*255,0,255))*256+Math.round(ft(Pn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Pn.copy(this),t);const r=Pn.r,a=Pn.g,l=Pn.b,c=Math.max(r,a,l),h=Math.min(r,a,l);let f,p;const g=(h+c)/2;if(h===c)f=0,p=0;else{const _=c-h;switch(p=g<=.5?_/(c+h):_/(2-c-h),c){case r:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-r)/_+2;break;case l:f=(r-a)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=ai){Mt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,a=Pn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Oa);const r=Ao(yr.h,Oa.h,t),a=Ao(yr.s,Oa.s,t),l=Ao(yr.l,Oa.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Lt;Lt.NAMES=Od;class Zv extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Si=new R,Ji=new R,xc=new R,Qi=new R,Ns=new R,Is=new R,Fd=new R,Ec=new R,Tc=new R,wc=new R,Ac=new Qt,Rc=new Qt,Cc=new Qt;class yi{constructor(e=new R,t=new R,r=new R){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Si.subVectors(e,t),a.cross(Si);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Si.subVectors(a,t),Ji.subVectors(r,t),xc.subVectors(e,t);const c=Si.dot(Si),h=Si.dot(Ji),f=Si.dot(xc),p=Ji.dot(Ji),g=Ji.dot(xc),_=c*p-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*f-h*g)*v,E=(c*g-h*f)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,r,a,l,c,h,f){return this.getBarycoord(e,t,r,a,Qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Qi.x),f.addScaledVector(c,Qi.y),f.addScaledVector(h,Qi.z),f)}static getInterpolatedAttribute(e,t,r,a,l,c){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,r),Cc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Ac,l.x),c.addScaledVector(Rc,l.y),c.addScaledVector(Cc,l.z),c}static isFrontFacing(e,t,r,a){return Si.subVectors(r,t),Ji.subVectors(e,t),Si.cross(Ji).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Si.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return yi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,h;Ns.subVectors(a,r),Is.subVectors(l,r),Ec.subVectors(e,r);const f=Ns.dot(Ec),p=Is.dot(Ec);if(f<=0&&p<=0)return t.copy(r);Tc.subVectors(e,a);const g=Ns.dot(Tc),_=Is.dot(Tc);if(g>=0&&_<=g)return t.copy(a);const v=f*_-g*p;if(v<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(r).addScaledVector(Ns,c);wc.subVectors(e,l);const S=Ns.dot(wc),E=Is.dot(wc);if(E>=0&&S<=E)return t.copy(l);const b=S*p-f*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),t.copy(r).addScaledVector(Is,h);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return Fd.subVectors(l,a),h=(_-g)/(_-g+(S-E)),t.copy(a).addScaledVector(Fd,h);const y=1/(M+b+v);return c=b*y,h=v*y,t.copy(r).addScaledVector(Ns,c).addScaledVector(Is,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=l.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(l,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fa.copy(r.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Ba.subVectors(this.max,Po),Us.subVectors(e.a,Po),Os.subVectors(e.b,Po),Fs.subVectors(e.c,Po),Mr.subVectors(Os,Us),xr.subVectors(Fs,Os),Qr.subVectors(Us,Fs);let t=[0,-Mr.z,Mr.y,0,-xr.z,xr.y,0,-Qr.z,Qr.y,Mr.z,0,-Mr.x,xr.z,0,-xr.x,Qr.z,0,-Qr.x,-Mr.y,Mr.x,0,-xr.y,xr.x,0,-Qr.y,Qr.x,0];return!Pc(t,Us,Os,Fs,Ba)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,Us,Os,Fs,Ba))?!1:(za.crossVectors(Mr,xr),t=[za.x,za.y,za.z],Pc(t,Us,Os,Fs,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new R,new R,new R,new R,new R,new R,new R,new R],Mi=new R,Fa=new Co,Us=new R,Os=new R,Fs=new R,Mr=new R,xr=new R,Qr=new R,Po=new R,Ba=new R,za=new R,es=new R;function Pc(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){es.fromArray(s,l);const h=a.x*Math.abs(es.x)+a.y*Math.abs(es.y)+a.z*Math.abs(es.z),f=e.dot(es),p=t.dot(es),g=r.dot(es);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>h)return!1}return!0}const on=new R,ka=new $e;let Jv=0;class Ui extends vr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vd,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Rs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Bd extends Ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class zd extends Ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class an extends Ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Qv=new Co,bo=new R,bc=new R;class Lc{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Qv.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(bc)),this.expandByPoint(bo.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let e_=0;const li=new en,Dc=new Cn,Bs=new R,Qn=new Co,Lo=new Co,mn=new R;class ei extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_v(e)?zd:Bd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,r){return li.makeTranslation(e,t,r),this.applyMatrix4(li),this}scale(e,t,r){return li.makeScale(e,t,r),this.applyMatrix4(li),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new an(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const h=t[l];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(mn.addVectors(Qn.min,Lo.min),Qn.expandByPoint(mn),mn.addVectors(Qn.max,Lo.max),Qn.expandByPoint(mn)):(Qn.expandByPoint(Lo.min),Qn.expandByPoint(Lo.max))}Qn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)mn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(mn));if(t)for(let l=0,c=t.length;l<c;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)mn.fromBufferAttribute(h,p),f&&(Bs.fromBufferAttribute(e,p),mn.add(Bs)),a=Math.max(a,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),h=[],f=[];for(let w=0;w<r.count;w++)h[w]=new R,f[w]=new R;const p=new R,g=new R,_=new R,v=new $e,S=new $e,E=new $e,b=new R,M=new R;function y(w,N,G){p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,G),v.fromBufferAttribute(l,w),S.fromBufferAttribute(l,N),E.fromBufferAttribute(l,G),g.sub(p),_.sub(p),S.sub(v),E.sub(v);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(z),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(z),h[w].add(b),h[N].add(b),h[G].add(b),f[w].add(M),f[N].add(M),f[G].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let w=0,N=C.length;w<N;++w){const G=C[w],z=G.start,$=G.count;for(let ie=z,se=z+$;ie<se;ie+=3)y(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const I=new R,L=new R,U=new R,P=new R;function F(w){U.fromBufferAttribute(a,w),P.copy(U);const N=h[w];I.copy(N),I.sub(U.multiplyScalar(U.dot(N))).normalize(),L.crossVectors(P,N);const z=L.dot(f[w])<0?-1:1;c.setXYZW(w,I.x,I.y,I.z,z)}for(let w=0,N=C.length;w<N;++w){const G=C[w],z=G.start,$=G.count;for(let ie=z,se=z+$;ie<se;ie+=3)F(e.getX(ie+0)),F(e.getX(ie+1)),F(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new R,l=new R,c=new R,h=new R,f=new R,p=new R,g=new R,_=new R;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),b=e.getX(v+1),M=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),c.fromBufferAttribute(t,M),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),h.fromBufferAttribute(r,E),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),h.add(g),f.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(h,f){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(f.length*g);let S=0,E=0;for(let b=0,M=f.length;b<M;b++){h.isInterleavedBufferAttribute?S=f[b]*h.data.stride+h.offset:S=f[b]*g;for(let y=0;y<g;y++)v[E++]=p[S++]}return new Ui(v,g,_)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,r=this.index.array,a=this.attributes;for(const h in a){const f=a[h],p=e(f,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=e(v,r);f.push(S)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,f=c.length;h<f;h++){const p=c[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(a[f]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let t_=0;class Ha extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=As(),this.name="",this.type="Material",this.blending=xs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mu&&(r.blendSrc=this.blendSrc),this.blendDst!==gu&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gd&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tr=new R,Nc=new R,Ga=new R,Er=new R,Ic=new R,Va=new R,Uc=new R;class kd{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Nc.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(Nc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ga),h=Er.dot(this.direction),f=-Er.dot(Ga),p=Er.lengthSq(),g=Math.abs(1-c*c);let _,v,S,E;if(g>0)if(_=c*f-h,v=c*h-f,E=l*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,S=_*(_+c*v+2*h)+v*(c*_+v+2*f)+p}else v=l,_=Math.max(0,-(c*v+h)),S=-_*_+v*(v+2*f)+p;else v=-l,_=Math.max(0,-(c*v+h)),S=-_*_+v*(v+2*f)+p;else v<=-E?(_=Math.max(0,-(-c*l+h)),v=_>0?-l:Math.min(Math.max(-l,-f),l),S=-_*_+v*(v+2*f)+p):v<=E?(_=0,v=Math.min(Math.max(-l,-f),l),S=v*(v+2*f)+p):(_=Math.max(0,-(c*l+h)),v=_>0?l:Math.min(Math.max(-l,-f),l),S=-_*_+v*(v+2*f)+p);else v=c>0?-l:l,_=Math.max(0,-(c*v+h)),S=-_*_+v*(v+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Nc).addScaledVector(Ga,v),S}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const r=tr.dot(this.direction),a=tr.dot(tr)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),h=r-c,f=r+c;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,h,f;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(h=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),r>f||h>a)||((h>r||r!==r)&&(r=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,r,a,l){Ic.subVectors(t,e),Va.subVectors(r,e),Uc.crossVectors(Ic,Va);let c=this.direction.dot(Uc),h;if(c>0){if(a)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Er.subVectors(this.origin,e);const f=h*this.direction.dot(Va.crossVectors(Er,Va));if(f<0)return null;const p=h*this.direction.dot(Ic.cross(Er));if(p<0||f+p>c)return null;const g=-h*Er.dot(Uc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hd=new en,ts=new kd,Wa=new Lc,Gd=new R,Xa=new R,Ya=new R,qa=new R,Oc=new R,ja=new R,Vd=new R,$a=new R;class nt extends Cn{constructor(e=new ei,t=new ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){ja.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=h[f],_=l[f];g!==0&&(Oc.fromBufferAttribute(_,e),c?ja.addScaledVector(Oc,g):ja.addScaledVector(Oc.sub(t),g))}t.add(ja)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wa.copy(r.boundingSphere),Wa.applyMatrix4(l),ts.copy(e.ray).recast(e.near),!(Wa.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Wa,Gd)===null||ts.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Hd.copy(l).invert(),ts.copy(e.ray).applyMatrix4(Hd),!(r.boundingBox!==null&&ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(c))for(let E=0,b=v.length;E<b;E++){const M=v[E],y=c[M.materialIndex],C=Math.max(M.start,S.start),I=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let L=C,U=I;L<U;L+=3){const P=h.getX(L),F=h.getX(L+1),w=h.getX(L+2);a=Ka(this,y,e,r,p,g,_,P,F,w),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let M=E,y=b;M<y;M+=3){const C=h.getX(M),I=h.getX(M+1),L=h.getX(M+2);a=Ka(this,c,e,r,p,g,_,C,I,L),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,b=v.length;E<b;E++){const M=v[E],y=c[M.materialIndex],C=Math.max(M.start,S.start),I=Math.min(f.count,Math.min(M.start+M.count,S.start+S.count));for(let L=C,U=I;L<U;L+=3){const P=L,F=L+1,w=L+2;a=Ka(this,y,e,r,p,g,_,P,F,w),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let M=E,y=b;M<y;M+=3){const C=M,I=M+1,L=M+2;a=Ka(this,c,e,r,p,g,_,C,I,L),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}}}function n_(s,e,t,r,a,l,c,h){let f;if(e.side===Hn?f=r.intersectTriangle(c,l,a,!0,h):f=r.intersectTriangle(a,l,c,e.side===mr,h),f===null)return null;$a.copy(h),$a.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo($a);return p<t.near||p>t.far?null:{distance:p,point:$a.clone(),object:s}}function Ka(s,e,t,r,a,l,c,h,f,p){s.getVertexPosition(h,Xa),s.getVertexPosition(f,Ya),s.getVertexPosition(p,qa);const g=n_(s,e,t,r,Xa,Ya,qa,Vd);if(g){const _=new R;yi.getBarycoord(Vd,Xa,Ya,qa,_),a&&(g.uv=yi.getInterpolatedAttribute(a,h,f,p,_,new $e)),l&&(g.uv1=yi.getInterpolatedAttribute(l,h,f,p,_,new $e)),c&&(g.normal=yi.getInterpolatedAttribute(c,h,f,p,_,new R),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:f,c:p,normal:new R,materialIndex:0};yi.getNormal(Xa,Ya,qa,v.normal),g.face=v,g.barycoord=_}return g}class i_ extends Mn{constructor(e=null,t=1,r=1,a,l,c,h,f,p=yn,g=yn,_,v){super(null,c,h,f,p,g,a,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fc=new R,r_=new R,s_=new ut;class Tr{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Fc.subVectors(r,t).cross(r_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Fc),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||s_.getNormalMatrix(e),a=this.coplanarPoint(Fc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Lc,o_=new $e(.5,.5),Za=new R;class Bc{constructor(e=new Tr,t=new Tr,r=new Tr,a=new Tr,l=new Tr,c=new Tr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(a),h[4].copy(l),h[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ni,r=!1){const a=this.planes,l=e.elements,c=l[0],h=l[1],f=l[2],p=l[3],g=l[4],_=l[5],v=l[6],S=l[7],E=l[8],b=l[9],M=l[10],y=l[11],C=l[12],I=l[13],L=l[14],U=l[15];if(a[0].setComponents(p-c,S-g,y-E,U-C).normalize(),a[1].setComponents(p+c,S+g,y+E,U+C).normalize(),a[2].setComponents(p+h,S+_,y+b,U+I).normalize(),a[3].setComponents(p-h,S-_,y-b,U-I).normalize(),r)a[4].setComponents(f,v,M,L).normalize(),a[5].setComponents(p-f,S-v,y-M,U-L).normalize();else if(a[4].setComponents(p-f,S-v,y-M,U-L).normalize(),t===Ni)a[5].setComponents(p+f,S+v,y+M,U+L).normalize();else if(t===xo)a[5].setComponents(f,v,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=o_.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Za.x=a.normal.x>0?e.max.x:e.min.x,Za.y=a.normal.y>0?e.max.y:e.min.y,Za.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wd extends Mn{constructor(e=[],t=qr,r,a,l,c,h,f,p,g){super(e,t,r,a,l,c,h,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zs extends Mn{constructor(e,t,r=Li,a,l,c,h=yn,f=yn,p,g=$i,_=1){if(g!==$i&&g!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,a,l,c,h,f,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class a_ extends zs{constructor(e,t=Li,r=qr,a,l,c=yn,h=yn,f,p=$i){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,r,a,l,c,h,f,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xd extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Do extends ei{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const h=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(g,3)),this.setAttribute("uv",new an(_,2));function E(b,M,y,C,I,L,U,P,F,w,N){const G=L/F,z=U/w,$=L/2,ie=U/2,se=P/2,Y=F+1,J=w+1;let K=0,q=0;const ue=new R;for(let ae=0;ae<J;ae++){const B=ae*z-ie;for(let ee=0;ee<Y;ee++){const Ue=ee*G-$;ue[b]=Ue*C,ue[M]=B*I,ue[y]=se,p.push(ue.x,ue.y,ue.z),ue[b]=0,ue[M]=0,ue[y]=P>0?1:-1,g.push(ue.x,ue.y,ue.z),_.push(ee/F),_.push(1-ae/w),K+=1}}for(let ae=0;ae<w;ae++)for(let B=0;B<F;B++){const ee=v+B+Y*ae,Ue=v+B+Y*(ae+1),He=v+(B+1)+Y*(ae+1),De=v+(B+1)+Y*ae;f.push(ee,Ue,De),f.push(Ue,He,De),q+=6}h.addGroup(S,q,N),S+=q,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nr extends ei{constructor(e=1,t=1,r=4,a=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:a,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),l=Math.max(1,Math.floor(l));const c=[],h=[],f=[],p=[],g=t/2,_=Math.PI/2*e,v=t,S=2*_+v,E=r*2+l,b=a+1,M=new R,y=new R;for(let C=0;C<=E;C++){let I=0,L=0,U=0,P=0;if(C<=r){const N=C/r,G=N*Math.PI/2;L=-g-e*Math.cos(G),U=e*Math.sin(G),P=-e*Math.cos(G),I=N*_}else if(C<=r+l){const N=(C-r)/l;L=-g+N*t,U=e,P=0,I=_+N*v}else{const N=(C-r-l)/r,G=N*Math.PI/2;L=g+e*Math.sin(G),U=e*Math.cos(G),P=e*Math.sin(G),I=_+v+N*_}const F=Math.max(0,Math.min(1,I/S));let w=0;C===0?w=.5/a:C===E&&(w=-.5/a);for(let N=0;N<=a;N++){const G=N/a,z=G*Math.PI*2,$=Math.sin(z),ie=Math.cos(z);y.x=-U*ie,y.y=L,y.z=U*$,h.push(y.x,y.y,y.z),M.set(-U*ie,P,U*$),M.normalize(),f.push(M.x,M.y,M.z),p.push(G+w,F)}if(C>0){const N=(C-1)*b;for(let G=0;G<a;G++){const z=N+G,$=N+G+1,ie=C*b+G,se=C*b+G+1;c.push(z,$,ie),c.push($,se,ie)}}}this.setIndex(c),this.setAttribute("position",new an(h,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ir{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let h=0,f=l-1,p;for(;h<=f;)if(a=Math.floor(h+(f-h)/2),p=r[a]-c,p<0)h=a+1;else if(p>0)f=a-1;else{f=a;break}if(a=f,r[a]===c)return a/(l-1);const g=r[a],v=r[a+1]-g,S=(c-g)/v;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),h=this.getPoint(l),f=t||(c.isVector2?new $e:new R);return f.copy(h).sub(c).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new R,a=[],l=[],c=[],h=new R,f=new en;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new R)}l[0]=new R,c[0]=new R;let p=Number.MAX_VALUE;const g=Math.abs(a[0].x),_=Math.abs(a[0].y),v=Math.abs(a[0].z);g<=p&&(p=g,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),v<=p&&r.set(0,0,1),h.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],h),c[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),h.crossVectors(a[S-1],a[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(ft(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(f.makeRotationAxis(h,E))}c[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(ft(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(h.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(f.makeRotationAxis(a[E],S*E)),c[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yd extends ir{constructor(e=0,t=0,r=1,a=1,l=0,c=Math.PI*2,h=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=h,this.aRotation=f}getPoint(e,t=new $e){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const h=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=f-this.aX,S=p-this.aY;f=v*g-S*_+this.aX,p=v*_+S*g+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class l_ extends Yd{constructor(e,t,r,a,l,c){super(e,t,r,r,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function zc(){let s=0,e=0,t=0,r=0;function a(l,c,h,f){s=l,e=h,t=-3*l+3*c-2*h-f,r=2*l-2*c+h+f}return{initCatmullRom:function(l,c,h,f,p){a(c,h,p*(h-l),p*(f-c))},initNonuniformCatmullRom:function(l,c,h,f,p,g,_){let v=(c-l)/p-(h-l)/(p+g)+(h-c)/g,S=(h-c)/g-(f-c)/(g+_)+(f-h)/_;v*=g,S*=g,a(c,h,v,S)},calc:function(l){const c=l*l,h=c*l;return s+e*l+t*c+r*h}}}const qd=new R,jd=new R,kc=new zc,Hc=new zc,Gc=new zc;class tn extends ir{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new R){const r=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let h=Math.floor(c),f=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:f===0&&h===l-1&&(h=l-2,f=1);let p,g;this.closed||h>0?p=a[(h-1)%l]:(jd.subVectors(a[0],a[1]).add(a[0]),p=jd);const _=a[h%l],v=a[(h+1)%l];if(this.closed||h+2<l?g=a[(h+2)%l]:(qd.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=qd),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),S),b=Math.pow(_.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(g),S);b<1e-4&&(b=1),E<1e-4&&(E=b),M<1e-4&&(M=b),kc.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,E,b,M),Hc.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,E,b,M),Gc.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,E,b,M)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),Hc.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),Gc.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return r.set(kc.calc(f),Hc.calc(f),Gc.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new R().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $d(s,e,t,r,a){const l=(r-e)*.5,c=(a-t)*.5,h=s*s,f=s*h;return(2*t-2*r+l+c)*f+(-3*t+3*r-2*l-c)*h+l*s+t}function u_(s,e){const t=1-s;return t*t*e}function c_(s,e){return 2*(1-s)*s*e}function h_(s,e){return s*s*e}function No(s,e,t,r){return u_(s,e)+c_(s,t)+h_(s,r)}function f_(s,e){const t=1-s;return t*t*t*e}function d_(s,e){const t=1-s;return 3*t*t*s*e}function p_(s,e){return 3*(1-s)*s*s*e}function m_(s,e){return s*s*s*e}function Io(s,e,t,r,a){return f_(s,e)+d_(s,t)+p_(s,r)+m_(s,a)}class g_ extends ir{constructor(e=new $e,t=new $e,r=new $e,a=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new $e){const r=t,a=this.v0,l=this.v1,c=this.v2,h=this.v3;return r.set(Io(e,a.x,l.x,c.x,h.x),Io(e,a.y,l.y,c.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v_ extends ir{constructor(e=new R,t=new R,r=new R,a=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new R){const r=t,a=this.v0,l=this.v1,c=this.v2,h=this.v3;return r.set(Io(e,a.x,l.x,c.x,h.x),Io(e,a.y,l.y,c.y,h.y),Io(e,a.z,l.z,c.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class __ extends ir{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends ir{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y_ extends ir{constructor(e=new $e,t=new $e,r=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new $e){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(No(e,a.x,l.x,c.x),No(e,a.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends ir{constructor(e=new R,t=new R,r=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new R){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(No(e,a.x,l.x,c.x),No(e,a.y,l.y,c.y),No(e,a.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends ir{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const r=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),h=l-c,f=a[c===0?c:c-1],p=a[c],g=a[c>a.length-2?a.length-1:c+1],_=a[c>a.length-3?a.length-1:c+2];return r.set($d(h,f.x,p.x,g.x,_.x),$d(h,f.y,p.y,g.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new $e().fromArray(a))}return this}}var x_=Object.freeze({__proto__:null,ArcCurve:l_,CatmullRomCurve3:tn,CubicBezierCurve:g_,CubicBezierCurve3:v_,EllipseCurve:Yd,LineCurve:__,LineCurve3:S_,QuadraticBezierCurve:y_,QuadraticBezierCurve3:Kd,SplineCurve:M_});class Ja extends ei{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,h=Math.floor(r),f=Math.floor(a),p=h+1,g=f+1,_=e/h,v=t/f,S=[],E=[],b=[],M=[];for(let y=0;y<g;y++){const C=y*v-c;for(let I=0;I<p;I++){const L=I*_-l;E.push(L,-C,0),b.push(0,0,1),M.push(I/h),M.push(1-y/f)}}for(let y=0;y<f;y++)for(let C=0;C<h;C++){const I=C+p*y,L=C+p*(y+1),U=C+1+p*(y+1),P=C+1+p*y;S.push(I,L,P),S.push(L,U,P)}this.setIndex(S),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(b,3)),this.setAttribute("uv",new an(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gn extends ei{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+h,Math.PI);let p=0;const g=[],_=new R,v=new R,S=[],E=[],b=[],M=[];for(let y=0;y<=r;y++){const C=[],I=y/r;let L=0;y===0&&c===0?L=.5/t:y===r&&f===Math.PI&&(L=-.5/t);for(let U=0;U<=t;U++){const P=U/t;_.x=-e*Math.cos(a+P*l)*Math.sin(c+I*h),_.y=e*Math.cos(c+I*h),_.z=e*Math.sin(a+P*l)*Math.sin(c+I*h),E.push(_.x,_.y,_.z),v.copy(_).normalize(),b.push(v.x,v.y,v.z),M.push(P+L,1-I),C.push(p++)}g.push(C)}for(let y=0;y<r;y++)for(let C=0;C<t;C++){const I=g[y][C+1],L=g[y][C],U=g[y+1][C],P=g[y+1][C+1];(y!==0||c>0)&&S.push(I,L,P),(y!==r-1||f<Math.PI)&&S.push(L,U,P)}this.setIndex(S),this.setAttribute("position",new an(E,3)),this.setAttribute("normal",new an(b,3)),this.setAttribute("uv",new an(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class is extends ei{constructor(e=new Kd(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,r=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const h=new R,f=new R,p=new $e;let g=new R;const _=[],v=[],S=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(S,2));function b(){for(let I=0;I<t;I++)M(I);M(l===!1?t:0),C(),y()}function M(I){g=e.getPointAt(I/t,g);const L=c.normals[I],U=c.binormals[I];for(let P=0;P<=a;P++){const F=P/a*Math.PI*2,w=Math.sin(F),N=-Math.cos(F);f.x=N*L.x+w*U.x,f.y=N*L.y+w*U.y,f.z=N*L.z+w*U.z,f.normalize(),v.push(f.x,f.y,f.z),h.x=g.x+r*f.x,h.y=g.y+r*f.y,h.z=g.z+r*f.z,_.push(h.x,h.y,h.z)}}function y(){for(let I=1;I<=t;I++)for(let L=1;L<=a;L++){const U=(a+1)*(I-1)+(L-1),P=(a+1)*I+(L-1),F=(a+1)*I+L,w=(a+1)*(I-1)+L;E.push(U,P,w),E.push(P,F,w)}}function C(){for(let I=0;I<=t;I++)for(let L=0;L<=a;L++)p.x=I/t,p.y=L/a,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new is(new x_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ks(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(Zd(a))a.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Zd(a[0])){const l=[];for(let c=0,h=a.length;c<h;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const r=ks(s[t]);for(const a in r)e[a]=r[a]}return e}function Zd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function E_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const T_={clone:ks,merge:On};var w_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w_,this.fragmentShader=A_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=E_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class R_ extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class C_ extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P_ extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Qd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Qd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Qd(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class b_{constructor(e,t,r){const a=this;let l=!1,c=0,h=0,f;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(g){h++,l===!1&&a.onStart!==void 0&&a.onStart(g,c,h),l=!0},this.itemEnd=function(g){c++,a.onProgress!==void 0&&a.onProgress(g,c,h),c===h&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return f?f(g):g},this.setURLModifier=function(g){return f=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const S=p[_],E=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const L_=new b_;class Wc{constructor(e){this.manager=e!==void 0?e:L_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,l){r.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hs=new WeakMap;class D_ extends Wc{constructor(e){super(e)}load(e,t,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Vc.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=Hs.get(c);_===void 0&&(_=[],Hs.set(c,_)),_.push({onLoad:t,onError:a})}return c}const h=Eo("img");function f(){g(),t&&t(this);const _=Hs.get(this)||[];for(let v=0;v<_.length;v++){const S=_[v];S.onLoad&&S.onLoad(this)}Hs.delete(this),l.manager.itemEnd(e)}function p(_){g(),a&&a(_),Vc.remove(`image:${e}`);const v=Hs.get(this)||[];for(let S=0;S<v.length;S++){const E=v[S];E.onError&&E.onError(_)}Hs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){h.removeEventListener("load",f,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",f,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Vc.add(`image:${e}`,h),l.manager.itemStart(e),h.src=e,h}}class N_ extends Wc{constructor(e){super(e)}load(e,t,r,a){const l=new Mn,c=new D_(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(h){l.image=h,l.needsUpdate=!0,t!==void 0&&t(l)},r,a),l}}class ep extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Xc=new en,tp=new R,np=new R;class I_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bc,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;tp.setFromMatrixPosition(e.matrixWorld),t.position.copy(tp),np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(np),t.updateMatrixWorld(),Xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===xo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qa=new R,el=new _r,Fi=new R;class ip extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,el,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,el,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Qa,el,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,el,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new R,rp=new $e,sp=new $e;class ui extends ip{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,rp,sp),t.subVectors(sp,rp)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(To*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*r/p,a*=c.width/f,r*=c.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yc extends ip{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class U_ extends I_{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends ep{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new U_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class O_ extends ep{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gs=-90,Vs=1;class F_ extends Cn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(Gs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new ui(Gs,Vs,e,t);l.layers=this.layers,this.add(l);const c=new ui(Gs,Vs,e,t);c.layers=this.layers,this.add(c);const h=new ui(Gs,Vs,e,t);h.layers=this.layers,this.add(h);const f=new ui(Gs,Vs,e,t);f.layers=this.layers,this.add(f);const p=new ui(Gs,Vs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,h,f]=t;for(const p of t)this.remove(p);if(e===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===xo)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,h,f,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class B_ extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class op{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lh=class lh{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};lh.prototype.isMatrix2=!0;let ap=lh;class z_ extends vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){tt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lp(s,e,t,r){const a=k_(r);switch(t){case fd:return s*e;case pd:return s*e/a.components*a.byteLength;case Lu:return s*e/a.components*a.byteLength;case Kr:return s*e*2/a.components*a.byteLength;case Du:return s*e*2/a.components*a.byteLength;case dd:return s*e*3/a.components*a.byteLength;case vi:return s*e*4/a.components*a.byteLength;case Nu:return s*e*4/a.components*a.byteLength;case Aa:case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uu:case Fu:return Math.max(s,16)*Math.max(e,8)/4;case Iu:case Ou:return Math.max(s,8)*Math.max(e,8)/2;case Bu:case zu:case Hu:case Gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ku:case ba:case Vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ju:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $u:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rc:case sc:case oc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ac:case lc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case La:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k_(s){switch(s){case Zn:case ld:return{byteLength:1,components:1};case yo:case ud:case ji:return{byteLength:2,components:1};case Pu:case bu:return{byteLength:2,components:4};case Li:case Cu:case Di:return{byteLength:4,components:1};case cd:case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pu}})),typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function up(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function H_(s){const e=new WeakMap;function t(h,f){const p=h.array,g=h.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,f,p){const g=f.array,_=f.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],b=_[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const b=_[S];s.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function c(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,f),p.version=h.version}}return{get:a,remove:l,update:c}}var G_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V_=`#ifdef USE_ALPHAHASH
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
#endif`,W_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j_=`#ifdef USE_AOMAP
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
#endif`,$_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K_=`#ifdef USE_BATCHING
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
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tS=`#ifdef USE_IRIDESCENCE
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
#endif`,nS=`#ifdef USE_BUMPMAP
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
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hS=`#define PI 3.141592653589793
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
} // validated`,fS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dS=`vec3 transformedNormal = objectNormal;
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
#endif`,pS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yS=`#ifdef USE_ENVMAP
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
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
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
}`,bS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IS=`#ifdef USE_ENVMAP
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
#endif`,US=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
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
#endif`,kS=`uniform sampler2D dfgLUT;
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
}`,HS=`
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
#endif`,GS=`#if defined( RE_IndirectDiffuse )
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
#endif`,VS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,XS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JS=`#if defined( USE_POINTS_UV )
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
#endif`,QS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
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
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
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
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,my=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ry=`float getShadowMask() {
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
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dt={alphahash_fragment:G_,alphahash_pars_fragment:V_,alphamap_fragment:W_,alphamap_pars_fragment:X_,alphatest_fragment:Y_,alphatest_pars_fragment:q_,aomap_fragment:j_,aomap_pars_fragment:$_,batching_pars_vertex:K_,batching_vertex:Z_,begin_vertex:J_,beginnormal_vertex:Q_,bsdfs:eS,iridescence_fragment:tS,bumpmap_pars_fragment:nS,clipping_planes_fragment:iS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:sS,clipping_planes_vertex:oS,color_fragment:aS,color_pars_fragment:lS,color_pars_vertex:uS,color_vertex:cS,common:hS,cube_uv_reflection_fragment:fS,defaultnormal_vertex:dS,displacementmap_pars_vertex:pS,displacementmap_vertex:mS,emissivemap_fragment:gS,emissivemap_pars_fragment:vS,colorspace_fragment:_S,colorspace_pars_fragment:SS,envmap_fragment:yS,envmap_common_pars_fragment:MS,envmap_pars_fragment:xS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:IS,envmap_vertex:TS,fog_vertex:wS,fog_pars_vertex:AS,fog_fragment:RS,fog_pars_fragment:CS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:bS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:DS,lights_pars_begin:NS,lights_toon_fragment:US,lights_toon_pars_fragment:OS,lights_phong_fragment:FS,lights_phong_pars_fragment:BS,lights_physical_fragment:zS,lights_physical_pars_fragment:kS,lights_fragment_begin:HS,lights_fragment_maps:GS,lights_fragment_end:VS,lightprobes_pars_fragment:WS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:jS,map_fragment:$S,map_pars_fragment:KS,map_particle_fragment:ZS,map_particle_pars_fragment:JS,metalnessmap_fragment:QS,metalnessmap_pars_fragment:ey,morphinstance_vertex:ty,morphcolor_vertex:ny,morphnormal_vertex:iy,morphtarget_pars_vertex:ry,morphtarget_vertex:sy,normal_fragment_begin:oy,normal_fragment_maps:ay,normal_pars_fragment:ly,normal_pars_vertex:uy,normal_vertex:cy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:dy,clearcoat_pars_fragment:py,iridescence_pars_fragment:my,opaque_fragment:gy,packing:vy,premultiplied_alpha_fragment:_y,project_vertex:Sy,dithering_fragment:yy,dithering_pars_fragment:My,roughnessmap_fragment:xy,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:Ty,shadowmap_pars_vertex:wy,shadowmap_vertex:Ay,shadowmask_pars_fragment:Ry,skinbase_vertex:Cy,skinning_pars_vertex:Py,skinning_vertex:by,skinnormal_vertex:Ly,specularmap_fragment:Dy,specularmap_pars_fragment:Ny,tonemapping_fragment:Iy,tonemapping_pars_fragment:Uy,transmission_fragment:Oy,transmission_pars_fragment:Fy,uv_pars_fragment:By,uv_pars_vertex:zy,uv_vertex:ky,worldpos_vertex:Hy,background_vert:`varying vec2 vUv;
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
}`},Le={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Bi={basic:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:On([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:On([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:On([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:On([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:On([Le.points,Le.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:On([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:On([Le.common,Le.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:On([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:On([Le.sprite,Le.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:On([Le.common,Le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:On([Le.lights,Le.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Bi.physical={uniforms:On([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const tl={r:0,b:0,g:0},Gy=new en,cp=new ut;cp.set(-1,0,0,0,1,0,0,0,1);function Vy(s,e,t,r,a,l){const c=new Lt(0);let h=a===!0?0:1,f,p,g=null,_=0,v=null;function S(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){const L=C.backgroundBlurriness>0;I=e.get(I,L)}return I}function E(C){let I=!1;const L=S(C);L===null?M(c,h):L&&L.isColor&&(M(L,1),I=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(C,I){const L=S(I);L&&(L.isCubeTexture||L.mapping===Ea)?(p===void 0&&(p=new nt(new Do(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:ks(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(I.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(cp),p.material.toneMapped=Mt.getTransfer(L.colorSpace)!==bt,(g!==L||_!==L.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=L,_=L.version,v=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new nt(new Ja(2,2),new Oi({name:"BackgroundMaterial",uniforms:ks(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.toneMapped=Mt.getTransfer(L.colorSpace)!==bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||_!==L.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,g=L,_=L.version,v=s.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null))}function M(C,I){C.getRGB(tl,Jd(s)),t.buffers.color.setClear(tl.r,tl.g,tl.b,I,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,I=1){c.set(C),h=I,M(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,M(c,h)},render:E,addToRenderList:b,dispose:y}}function Wy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let l=a,c=!1;function h(z,$,ie,se,Y){let J=!1;const K=_(z,se,ie,$);l!==K&&(l=K,p(l.object)),J=S(z,se,ie,Y),J&&E(z,se,ie,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,L(z,$,ie,se),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return s.createVertexArray()}function p(z){return s.bindVertexArray(z)}function g(z){return s.deleteVertexArray(z)}function _(z,$,ie,se){const Y=se.wireframe===!0;let J=r[$.id];J===void 0&&(J={},r[$.id]=J);const K=z.isInstancedMesh===!0?z.id:0;let q=J[K];q===void 0&&(q={},J[K]=q);let ue=q[ie.id];ue===void 0&&(ue={},q[ie.id]=ue);let ae=ue[Y];return ae===void 0&&(ae=v(f()),ue[Y]=ae),ae}function v(z){const $=[],ie=[],se=[];for(let Y=0;Y<t;Y++)$[Y]=0,ie[Y]=0,se[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ie,attributeDivisors:se,object:z,attributes:{},index:null}}function S(z,$,ie,se){const Y=l.attributes,J=$.attributes;let K=0;const q=ie.getAttributes();for(const ue in q)if(q[ue].location>=0){const B=Y[ue];let ee=J[ue];if(ee===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor)),B===void 0||B.attribute!==ee||ee&&B.data!==ee.data)return!0;K++}return l.attributesNum!==K||l.index!==se}function E(z,$,ie,se){const Y={},J=$.attributes;let K=0;const q=ie.getAttributes();for(const ue in q)if(q[ue].location>=0){let B=J[ue];B===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(B=z.instanceColor));const ee={};ee.attribute=B,B&&B.data&&(ee.data=B.data),Y[ue]=ee,K++}l.attributes=Y,l.attributesNum=K,l.index=se}function b(){const z=l.newAttributes;for(let $=0,ie=z.length;$<ie;$++)z[$]=0}function M(z){y(z,0)}function y(z,$){const ie=l.newAttributes,se=l.enabledAttributes,Y=l.attributeDivisors;ie[z]=1,se[z]===0&&(s.enableVertexAttribArray(z),se[z]=1),Y[z]!==$&&(s.vertexAttribDivisor(z,$),Y[z]=$)}function C(){const z=l.newAttributes,$=l.enabledAttributes;for(let ie=0,se=$.length;ie<se;ie++)$[ie]!==z[ie]&&(s.disableVertexAttribArray(ie),$[ie]=0)}function I(z,$,ie,se,Y,J,K){K===!0?s.vertexAttribIPointer(z,$,ie,Y,J):s.vertexAttribPointer(z,$,ie,se,Y,J)}function L(z,$,ie,se){b();const Y=se.attributes,J=ie.getAttributes(),K=$.defaultAttributeValues;for(const q in J){const ue=J[q];if(ue.location>=0){let ae=Y[q];if(ae===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),ae!==void 0){const B=ae.normalized,ee=ae.itemSize,Ue=e.get(ae);if(Ue===void 0)continue;const He=Ue.buffer,De=Ue.type,le=Ue.bytesPerElement,Se=De===s.INT||De===s.UNSIGNED_INT||ae.gpuType===Cu;if(ae.isInterleavedBufferAttribute){const pe=ae.data,Ne=pe.stride,Ze=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let Je=0;Je<ue.locationSize;Je++)y(ue.location+Je,pe.meshPerAttribute);z.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Je=0;Je<ue.locationSize;Je++)M(ue.location+Je);s.bindBuffer(s.ARRAY_BUFFER,He);for(let Je=0;Je<ue.locationSize;Je++)I(ue.location+Je,ee/ue.locationSize,De,B,Ne*le,(Ze+ee/ue.locationSize*Je)*le,Se)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<ue.locationSize;pe++)y(ue.location+pe,ae.meshPerAttribute);z.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<ue.locationSize;pe++)M(ue.location+pe);s.bindBuffer(s.ARRAY_BUFFER,He);for(let pe=0;pe<ue.locationSize;pe++)I(ue.location+pe,ee/ue.locationSize,De,B,ee*le,ee/ue.locationSize*pe*le,Se)}}else if(K!==void 0){const B=K[q];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(ue.location,B);break;case 3:s.vertexAttrib3fv(ue.location,B);break;case 4:s.vertexAttrib4fv(ue.location,B);break;default:s.vertexAttrib1fv(ue.location,B)}}}}C()}function U(){N();for(const z in r){const $=r[z];for(const ie in $){const se=$[ie];for(const Y in se){const J=se[Y];for(const K in J)g(J[K].object),delete J[K];delete se[Y]}}delete r[z]}}function P(z){if(r[z.id]===void 0)return;const $=r[z.id];for(const ie in $){const se=$[ie];for(const Y in se){const J=se[Y];for(const K in J)g(J[K].object),delete J[K];delete se[Y]}}delete r[z.id]}function F(z){for(const $ in r){const ie=r[$];for(const se in ie){const Y=ie[se];if(Y[z.id]===void 0)continue;const J=Y[z.id];for(const K in J)g(J[K].object),delete J[K];delete Y[z.id]}}}function w(z){for(const $ in r){const ie=r[$],se=z.isInstancedMesh===!0?z.id:0,Y=ie[se];if(Y!==void 0){for(const J in Y){const K=Y[J];for(const q in K)g(K[q].object),delete K[q];delete Y[J]}delete ie[se],Object.keys(ie).length===0&&delete r[$]}}}function N(){G(),c=!0,l!==a&&(l=a,p(l.object))}function G(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:N,resetDefaultState:G,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:M,disableUnusedAttributes:C}}function Xy(s,e,t){let r;function a(f){r=f}function l(f,p){s.drawArrays(r,f,p),t.update(p,r,1)}function c(f,p,g){g!==0&&(s.drawArraysInstanced(r,f,p,g),t.update(p,r,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,g);let v=0;for(let S=0;S<g;S++)v+=p[S];t.update(v,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Yy(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==vi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const w=F===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Zn&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Di&&!w)}function f(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(tt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:L,maxSamples:U,samples:P}}function qy(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Tr,h=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||a;return a=v,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,b=_.clipIntersection,M=_.clipShadows,y=s.get(_);if(!a||E===null||E.length===0||l&&!M)l?g(null):p();else{const C=l?0:r,I=C*4;let L=y.clippingState||null;f.value=L,L=g(E,v,I,S);for(let U=0;U!==I;++U)L[U]=t[U];y.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,E){const b=_!==null?_.length:0;let M=null;if(b!==0){if(M=f.value,E!==!0||M===null){const y=S+b*4,C=v.matrixWorldInverse;h.getNormalMatrix(C),(M===null||M.length<y)&&(M=new Float32Array(y));for(let I=0,L=S;I!==b;++I,L+=4)c.copy(_[I]).applyMatrix4(C,h),c.normal.toArray(M,L),M[L+3]=c.constant}f.value=M,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}const Ar=4,hp=[.125,.215,.35,.446,.526,.582],rs=20,jy=256,Uo=new Yc,fp=new Lt;let jc=null,$c=0,Kc=0,Zc=!1;const $y=new R;class dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:h=$y}=l;jc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,a,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,$c,Kc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:ji,format:vi,colorSpace:Da,depthBuffer:!1},a=pp(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pp(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ky(l)),this._blurMaterial=Jy(l,e,t),this._ggxMaterial=Zy(l,e,t)}return a}_compileMaterial(e){const t=new nt(new ei,e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,r,a,l){const f=new ui(90,1,t,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(fp),_.toneMapping=bi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new Do,new ct({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,M=b.material;let y=!1;const C=e.background;C?C.isColor&&(M.color.copy(C),e.background=null,y=!0):(M.color.copy(fp),y=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(f.up.set(0,p[I],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+g[I],l.y,l.z)):L===1?(f.up.set(0,0,p[I]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+g[I],l.z)):(f.up.set(0,p[I],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+g[I]));const U=this._cubeSize;Ws(a,L*U,I>2?U:0,U,U),_.setRenderTarget(a),y&&_.render(b,f),_.render(e,f)}_.toneMapping=S,_.autoClear=v,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===qr||e.mapping===Ts;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mp());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;Ws(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,Uo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,S=_*v,{_lodMax:E}=this,b=this._sizeLods[r],M=3*b*(r>E-Ar?r-E+Ar:0),y=4*(this._cubeSize-b);f.envMap.value=e.texture,f.roughness.value=S,f.mipInt.value=E-t,Ws(l,M,y,3*b,2*b),a.setRenderTarget(l),a.render(h,Uo),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=E-r,Ws(e,M,y,3*b,2*b),a.setRenderTarget(e),a.render(h,Uo)}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,h){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[a];_.material=p;const v=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*rs-1),b=l/E,M=isFinite(l)?1+Math.floor(g*b):rs;M>rs&&tt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${rs}`);const y=[];let C=0;for(let F=0;F<rs;++F){const w=F/b,N=Math.exp(-w*w/2);y.push(N),F===0?C+=N:F<M&&(C+=2*N)}for(let F=0;F<y.length;F++)y[F]=y[F]/C;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=c==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:I}=this;v.dTheta.value=E,v.mipInt.value=I-r;const L=this._sizeLods[a],U=3*L*(a>I-Ar?a-I+Ar:0),P=4*(this._cubeSize-L);Ws(t,U,P,3*L,2*L),f.setRenderTarget(t),f.render(_,Uo)}}function Ky(s){const e=[],t=[],r=[];let a=s;const l=s-Ar+1+hp.length;for(let c=0;c<l;c++){const h=Math.pow(2,a);e.push(h);let f=1/h;c>s-Ar?f=hp[c-s+Ar-1]:c===0&&(f=0),t.push(f);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,b=3,M=2,y=1,C=new Float32Array(b*E*S),I=new Float32Array(M*E*S),L=new Float32Array(y*E*S);for(let P=0;P<S;P++){const F=P%3*2/3-1,w=P>2?0:-1,N=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];C.set(N,b*E*P),I.set(v,M*E*P);const G=[P,P,P,P,P,P];L.set(G,y*E*P)}const U=new ei;U.setAttribute("position",new Ui(C,b)),U.setAttribute("uv",new Ui(I,M)),U.setAttribute("faceIndex",new Ui(L,y)),r.push(new nt(U,null)),a>Ar&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function pp(s,e,t){const r=new Ii(s,e,t);return r.texture.mapping=Ea,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ws(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function Zy(s,e,t){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Jy(s,e,t){const r=new Float32Array(rs),a=new R(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function mp(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function gp(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}class vp extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Wd(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Do(5,5,5),l=new Oi({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Yi});l.uniforms.tEquirect.value=t;const c=new nt(a,l),h=t.minFilter;return t.minFilter===jr&&(t.minFilter=An),new F_(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function Qy(s){let e=new WeakMap,t=new WeakMap,r=null;function a(v,S=!1){return v==null?null:S?c(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===Tu||S===wu)if(e.has(v)){const E=e.get(v).texture;return h(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const b=new vp(E.height);return b.fromEquirectangularTexture(s,v),e.set(v,b),v.addEventListener("dispose",p),h(b.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){const S=v.mapping,E=S===Tu||S===wu,b=S===qr||S===Ts;if(E||b){let M=t.get(v);const y=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return r===null&&(r=new dp(s)),M=E?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,t.set(v,M),M.texture;if(M!==void 0)return M.texture;{const C=v.image;return E&&C&&C.height>0||b&&C&&f(C)?(r===null&&(r=new dp(s)),M=E?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,t.set(v,M),v.addEventListener("dispose",g),M.texture):null}}}return v}function h(v,S){return S===Tu?v.mapping=qr:S===wu&&(v.mapping=Ts),v}function f(v){let S=0;const E=6;for(let b=0;b<E;b++)v[b]!==void 0&&S++;return S===E}function p(v){const S=v.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function e1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&fc("WebGLRenderer: "+r+" extension not supported."),a}}}function t1(s,e,t,r){const a={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(_,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,E=_.attributes.position;let b=0;if(E===void 0)return;if(S!==null){const C=S.array;b=S.version;for(let I=0,L=C.length;I<L;I+=3){const U=C[I+0],P=C[I+1],F=C[I+2];v.push(U,P,P,F,F,U)}}else{const C=E.array;b=E.version;for(let I=0,L=C.length/3-1;I<L;I+=3){const U=I+0,P=I+1,F=I+2;v.push(U,P,P,F,F,U)}}const M=new(E.count>=65535?zd:Bd)(v,1);M.version=b;const y=l.get(_);y&&e.remove(y),l.set(_,M)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:f,getWireframeAttribute:g}}function n1(s,e,t){let r;function a(_){r=_}let l,c;function h(_){l=_.type,c=_.bytesPerElement}function f(_,v){s.drawElements(r,v,l,_*c),t.update(v,r,1)}function p(_,v,S){S!==0&&(s.drawElementsInstanced(r,v,l,_*c,S),t.update(v,r,S))}function g(_,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,_,0,S);let b=0;for(let M=0;M<S;M++)b+=v[M];t.update(b,r,1)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=g}function i1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,h){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:Tt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function r1(s,e,t){const r=new WeakMap,a=new Qt;function l(c,h,f){const p=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let S=function(){w.dispose(),r.delete(h),h.removeEventListener("dispose",S)};v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let L=0;E===!0&&(L=1),b===!0&&(L=2),M===!0&&(L=3);let U=h.attributes.position.count*L,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*P*4*_),w=new Rd(F,U,P,_);w.type=Di,w.needsUpdate=!0;const N=L*4;for(let G=0;G<_;G++){const z=y[G],$=C[G],ie=I[G],se=U*P*4*G;for(let Y=0;Y<z.count;Y++){const J=Y*N;E===!0&&(a.fromBufferAttribute(z,Y),F[se+J+0]=a.x,F[se+J+1]=a.y,F[se+J+2]=a.z,F[se+J+3]=0),b===!0&&(a.fromBufferAttribute($,Y),F[se+J+4]=a.x,F[se+J+5]=a.y,F[se+J+6]=a.z,F[se+J+7]=0),M===!0&&(a.fromBufferAttribute(ie,Y),F[se+J+8]=a.x,F[se+J+9]=a.y,F[se+J+10]=a.z,F[se+J+11]=ie.itemSize===4?a.w:1)}}v={count:_,texture:w,size:new $e(U,P)},r.set(h,v),h.addEventListener("dispose",S)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let b=0;b<p.length;b++)S+=p[b];const E=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function s1(s,e,t,r,a){let l=new WeakMap;function c(p){const g=a.render.frame,_=p.geometry,v=e.get(p,_);if(l.get(v)!==g&&(e.update(v),l.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==g&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==g&&(S.update(),l.set(S,g))}return v}function h(){l=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:h}}const o1={[ed]:"LINEAR_TONE_MAPPING",[td]:"REINHARD_TONE_MAPPING",[nd]:"CINEON_TONE_MAPPING",[id]:"ACES_FILMIC_TONE_MAPPING",[sd]:"AGX_TONE_MAPPING",[od]:"NEUTRAL_TONE_MAPPING",[rd]:"CUSTOM_TONE_MAPPING"};function a1(s,e,t,r,a){const l=new Ii(e,t,{type:s,depthBuffer:r,stencilBuffer:a,depthTexture:r?new zs(e,t):void 0}),c=new Ii(e,t,{type:ji,depthBuffer:!1,stencilBuffer:!1}),h=new ei;h.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new an([0,2,0,0,2,0],2));const f=new R_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new nt(h,f),g=new Yc(-1,1,1,-1,0,1);let _=null,v=null,S=!1,E,b=null,M=[],y=!1;this.setSize=function(C,I){l.setSize(C,I),c.setSize(C,I);for(let L=0;L<M.length;L++){const U=M[L];U.setSize&&U.setSize(C,I)}},this.setEffects=function(C){M=C,y=M.length>0&&M[0].isRenderPass===!0;const I=l.width,L=l.height;for(let U=0;U<M.length;U++){const P=M[U];P.setSize&&P.setSize(I,L)}},this.begin=function(C,I){if(S||C.toneMapping===bi&&M.length===0)return!1;if(b=I,I!==null){const L=I.width,U=I.height;(l.width!==L||l.height!==U)&&this.setSize(L,U)}return y===!1&&C.setRenderTarget(l),E=C.toneMapping,C.toneMapping=bi,!0},this.hasRenderPass=function(){return y},this.end=function(C,I){C.toneMapping=E,S=!0;let L=l,U=c;for(let P=0;P<M.length;P++){const F=M[P];if(F.enabled!==!1&&(F.render(C,U,L,I),F.needsSwap!==!1)){const w=L;L=U,U=w}}if(_!==C.outputColorSpace||v!==C.toneMapping){_=C.outputColorSpace,v=C.toneMapping,f.defines={},Mt.getTransfer(_)===bt&&(f.defines.SRGB_TRANSFER="");const P=o1[v];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(b),C.render(p,g),b=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),h.dispose(),f.dispose()}}const _p=new Mn,Jc=new zs(1,1),Sp=new Rd,yp=new Vv,Mp=new Wd,xp=[],Ep=[],Tp=new Float32Array(16),wp=new Float32Array(9),Ap=new Float32Array(4);function Xs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=xp[a];if(l===void 0&&(l=new Float32Array(a),xp[a]=l),e!==0){r.toArray(l,0);for(let c=1,h=0;c!==e;++c)h+=t,s[c].toArray(l,h)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function il(s,e){let t=Ep[e];t===void 0&&(t=new Int32Array(e),Ep[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function l1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function c1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function h1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function f1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,r))return;Ap.set(r),s.uniformMatrix2fv(this.addr,!1,Ap),hn(t,r)}}function d1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,r))return;wp.set(r),s.uniformMatrix3fv(this.addr,!1,wp),hn(t,r)}}function p1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,r))return;Tp.set(r),s.uniformMatrix4fv(this.addr,!1,Tp),hn(t,r)}}function m1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function g1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function v1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function _1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function S1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function M1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function x1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function E1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Jc.compareFunction=t.isReversedDepthBuffer()?hc:cc,l=Jc):l=_p,t.setTexture2D(e||l,a)}function T1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||yp,a)}function w1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Mp,a)}function A1(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Sp,a)}function R1(s){switch(s){case 5126:return l1;case 35664:return u1;case 35665:return c1;case 35666:return h1;case 35674:return f1;case 35675:return d1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return v1;case 35669:case 35673:return _1;case 5125:return S1;case 36294:return y1;case 36295:return M1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return A1}}function C1(s,e){s.uniform1fv(this.addr,e)}function P1(s,e){const t=Xs(e,this.size,2);s.uniform2fv(this.addr,t)}function b1(s,e){const t=Xs(e,this.size,3);s.uniform3fv(this.addr,t)}function L1(s,e){const t=Xs(e,this.size,4);s.uniform4fv(this.addr,t)}function D1(s,e){const t=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function N1(s,e){const t=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function I1(s,e){const t=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function U1(s,e){s.uniform1iv(this.addr,e)}function O1(s,e){s.uniform2iv(this.addr,e)}function F1(s,e){s.uniform3iv(this.addr,e)}function B1(s,e){s.uniform4iv(this.addr,e)}function z1(s,e){s.uniform1uiv(this.addr,e)}function k1(s,e){s.uniform2uiv(this.addr,e)}function H1(s,e){s.uniform3uiv(this.addr,e)}function G1(s,e){s.uniform4uiv(this.addr,e)}function V1(s,e,t){const r=this.cache,a=e.length,l=il(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Jc:c=_p;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||c,l[h])}function W1(s,e,t){const r=this.cache,a=e.length,l=il(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||yp,l[c])}function X1(s,e,t){const r=this.cache,a=e.length,l=il(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Mp,l[c])}function Y1(s,e,t){const r=this.cache,a=e.length,l=il(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Sp,l[c])}function q1(s){switch(s){case 5126:return C1;case 35664:return P1;case 35665:return b1;case 35666:return L1;case 35674:return D1;case 35675:return N1;case 35676:return I1;case 5124:case 35670:return U1;case 35667:case 35671:return O1;case 35668:case 35672:return F1;case 35669:case 35673:return B1;case 5125:return z1;case 36294:return k1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return Y1}}class j1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=R1(t.type)}}class $1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q1(t.type)}}class K1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const h=a[l];h.setValue(e,t[h.id],r)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function Rp(s,e){s.seq.push(e),s.map[e.id]=e}function Z1(s,e,t){const r=s.name,a=r.length;for(Qc.lastIndex=0;;){const l=Qc.exec(r),c=Qc.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&c+2===a){Rp(t,p===void 0?new j1(h,s,e):new $1(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new K1(h),Rp(t,_)),t=_}}}class rl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const h=e.getActiveUniform(t,c),f=e.getUniformLocation(t,h.name);Z1(h,f,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const h=t[l],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Cp(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const J1=37297;let Q1=0;function eM(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const h=c+1;r.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return r.join(`
`)}const Pp=new ut;function tM(s){Mt._getMatrix(Pp,Mt.workingColorSpace,s);const e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(s)){case Na:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bp(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+eM(s.getShaderSource(e),h)}else return l}function nM(s,e){const t=tM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iM={[ed]:"Linear",[td]:"Reinhard",[nd]:"Cineon",[id]:"ACESFilmic",[sd]:"AgX",[od]:"Neutral",[rd]:"Custom"};function rM(s,e){const t=iM[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sl=new R;function sM(){Mt.getLuminanceCoefficients(sl);const s=sl.x.toFixed(4),e=sl.y.toFixed(4),t=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function aM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function lM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:h}}return t}function Oo(s){return s!==""}function Lp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(s){return s.replace(uM,hM)}const cM=new Map;function hM(s,e){let t=dt[e];if(t===void 0){const r=cM.get(e);if(r!==void 0)t=dt[r],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return eh(t)}const fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(s){return s.replace(fM,dM)}function dM(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Ip(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const pM={[xa]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function mM(s){return pM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gM={[qr]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function vM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":gM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const _M={[Ts]:"ENVMAP_MODE_REFRACTION"};function SM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_M[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yM={[Qf]:"ENVMAP_BLENDING_MULTIPLY",[av]:"ENVMAP_BLENDING_MIX",[lv]:"ENVMAP_BLENDING_ADD"};function MM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":yM[s.combine]||"ENVMAP_BLENDING_NONE"}function xM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function EM(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,h=t.fragmentShader;const f=mM(t),p=vM(t),g=SM(t),_=MM(t),v=xM(t),S=oM(t),E=aM(l),b=a.createProgram();let M,y,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Oo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Oo).join(`
`),y.length>0&&(y+=`
`)):(M=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),y=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?dt.tonemapping_pars_fragment:"",t.toneMapping!==bi?rM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,nM("linearToOutputTexel",t.outputColorSpace),sM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),c=eh(c),c=Lp(c,t),c=Dp(c,t),h=eh(h),h=Lp(h,t),h=Dp(h,t),c=Np(c),h=Np(h),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=C+M+c,L=C+y+h,U=Cp(a,a.VERTEX_SHADER,I),P=Cp(a,a.FRAGMENT_SHADER,L);a.attachShader(b,U),a.attachShader(b,P),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function F(z){if(s.debug.checkShaderErrors){const $=a.getProgramInfoLog(b)||"",ie=a.getShaderInfoLog(U)||"",se=a.getShaderInfoLog(P)||"",Y=$.trim(),J=ie.trim(),K=se.trim();let q=!0,ue=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,U,P);else{const ae=bp(a,U,"vertex"),B=bp(a,P,"fragment");Tt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Y+`
`+ae+`
`+B)}else Y!==""?tt("WebGLProgram: Program Info Log:",Y):(J===""||K==="")&&(ue=!1);ue&&(z.diagnostics={runnable:q,programLog:Y,vertexShader:{log:J,prefix:M},fragmentShader:{log:K,prefix:y}})}a.deleteShader(U),a.deleteShader(P),w=new rl(a,b),N=lM(a,b)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=a.getProgramParameter(b,J1)),G},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=P,this}let TM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new AM(e),t.set(e,r)),r}}class AM{constructor(e){this.id=TM++,this.code=e,this.usedTimes=0}}function RM(s){return s===Kr||s===ba||s===La}function CM(s,e,t,r,a,l){const c=new bd,h=new wM,f=new Set,p=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return f.add(w),w===0?"uv":`uv${w}`}function b(w,N,G,z,$,ie){const se=z.fog,Y=$.geometry,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,q=e.get(w.envMap||J,K),ue=q&&q.mapping===Ea?q.image.height:null,ae=S[w.type];w.precision!==null&&(v=r.getMaxPrecision(w.precision),v!==w.precision&&tt("WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ee=B!==void 0?B.length:0;let Ue=0;Y.morphAttributes.position!==void 0&&(Ue=1),Y.morphAttributes.normal!==void 0&&(Ue=2),Y.morphAttributes.color!==void 0&&(Ue=3);let He,De,le,Se;if(ae){const ot=Bi[ae];He=ot.vertexShader,De=ot.fragmentShader}else He=w.vertexShader,De=w.fragmentShader,h.update(w),le=h.getVertexShaderID(w),Se=h.getFragmentShaderID(w);const pe=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Ze=$.isInstancedMesh===!0,Je=$.isBatchedMesh===!0,Bt=!!w.map,ht=!!w.matcap,At=!!q,Ot=!!w.aoMap,mt=!!w.lightMap,$t=!!w.bumpMap,zt=!!w.normalMap,xn=!!w.displacementMap,V=!!w.emissiveMap,kt=!!w.metalnessMap,gt=!!w.roughnessMap,Dt=w.anisotropy>0,be=w.clearcoat>0,Vt=w.dispersion>0,D=w.iridescence>0,x=w.sheen>0,j=w.transmission>0,fe=Dt&&!!w.anisotropyMap,me=be&&!!w.clearcoatMap,Me=be&&!!w.clearcoatNormalMap,Pe=be&&!!w.clearcoatRoughnessMap,ce=D&&!!w.iridescenceMap,de=D&&!!w.iridescenceThicknessMap,Ie=x&&!!w.sheenColorMap,Fe=x&&!!w.sheenRoughnessMap,we=!!w.specularMap,xe=!!w.specularColorMap,it=!!w.specularIntensityMap,st=j&&!!w.transmissionMap,vt=j&&!!w.thicknessMap,H=!!w.gradientMap,Te=!!w.alphaMap,he=w.alphaTest>0,Oe=!!w.alphaHash,Re=!!w.extensions;let ge=bi;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ge=s.toneMapping);const We={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:De,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:Je,batchingColor:Je&&$._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&$.instanceColor!==null,instancingMorph:Ze&&$.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Bt,matcap:ht,envMap:At,envMapMode:At&&q.mapping,envMapCubeUVHeight:ue,aoMap:Ot,lightMap:mt,bumpMap:$t,normalMap:zt,displacementMap:xn,emissiveMap:V,normalMapObjectSpace:zt&&w.normalMapType===hv,normalMapTangentSpace:zt&&w.normalMapType===md,packedNormalMap:zt&&w.normalMapType===md&&RM(w.normalMap.format),metalnessMap:kt,roughnessMap:gt,anisotropy:Dt,anisotropyMap:fe,clearcoat:be,clearcoatMap:me,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:Vt,iridescence:D,iridescenceMap:ce,iridescenceThicknessMap:de,sheen:x,sheenColorMap:Ie,sheenRoughnessMap:Fe,specularMap:we,specularColorMap:xe,specularIntensityMap:it,transmission:j,transmissionMap:st,thicknessMap:vt,gradientMap:H,opaque:w.transparent===!1&&w.blending===xs&&w.alphaToCoverage===!1,alphaMap:Te,alphaTest:he,alphaHash:Oe,combine:w.combine,mapUv:Bt&&E(w.map.channel),aoMapUv:Ot&&E(w.aoMap.channel),lightMapUv:mt&&E(w.lightMap.channel),bumpMapUv:$t&&E(w.bumpMap.channel),normalMapUv:zt&&E(w.normalMap.channel),displacementMapUv:xn&&E(w.displacementMap.channel),emissiveMapUv:V&&E(w.emissiveMap.channel),metalnessMapUv:kt&&E(w.metalnessMap.channel),roughnessMapUv:gt&&E(w.roughnessMap.channel),anisotropyMapUv:fe&&E(w.anisotropyMap.channel),clearcoatMapUv:me&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:de&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(w.sheenRoughnessMap.channel),specularMapUv:we&&E(w.specularMap.channel),specularColorMapUv:xe&&E(w.specularColorMap.channel),specularIntensityMapUv:it&&E(w.specularIntensityMap.channel),transmissionMapUv:st&&E(w.transmissionMap.channel),thicknessMapUv:vt&&E(w.thicknessMap.channel),alphaMapUv:Te&&E(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(zt||Dt),vertexNormals:!!Y.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Y.attributes.uv&&(Bt||Te),fog:!!se,useFog:w.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Y.attributes.normal===void 0&&zt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:$.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ue,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Bt&&w.map.isVideoTexture===!0&&Mt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:V&&w.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Et,flipSided:w.side===Hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=f.has(1),We.vertexUv2s=f.has(2),We.vertexUv3s=f.has(3),f.clear(),We}function M(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)N.push(G),N.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(y(N,w),C(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function y(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function C(w,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),w.push(c.mask)}function I(w){const N=S[w.type];let G;if(N){const z=Bi[N];G=T_.clone(z.uniforms)}else G=w.uniforms;return G}function L(w,N){let G=g.get(N);return G!==void 0?++G.usedTimes:(G=new EM(s,N,w,a),p.push(G),g.set(N,G)),G}function U(w){if(--w.usedTimes===0){const N=p.indexOf(w);p[N]=p[p.length-1],p.pop(),g.delete(w.cacheKey),w.destroy()}}function P(w){h.remove(w)}function F(){h.dispose()}return{getParameters:b,getProgramCacheKey:M,getUniforms:I,acquireProgram:L,releaseProgram:U,releaseShaderCache:P,programs:p,dispose:F}}function PM(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function r(c){s.delete(c)}function a(c,h,f){s.get(c)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function bM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Up(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Op(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function h(v,S,E,b,M,y){let C=s[e];return C===void 0?(C={id:v.id,object:v,geometry:S,material:E,materialVariant:c(v),groupOrder:b,renderOrder:v.renderOrder,z:M,group:y},s[e]=C):(C.id=v.id,C.object=v,C.geometry=S,C.material=E,C.materialVariant=c(v),C.groupOrder=b,C.renderOrder=v.renderOrder,C.z=M,C.group=y),e++,C}function f(v,S,E,b,M,y){const C=h(v,S,E,b,M,y);E.transmission>0?r.push(C):E.transparent===!0?a.push(C):t.push(C)}function p(v,S,E,b,M,y){const C=h(v,S,E,b,M,y);E.transmission>0?r.unshift(C):E.transparent===!0?a.unshift(C):t.unshift(C)}function g(v,S){t.length>1&&t.sort(v||bM),r.length>1&&r.sort(S||Up),a.length>1&&a.sort(S||Up)}function _(){for(let v=e,S=s.length;v<S;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:_,sort:g}}function LM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new Op,s.set(r,[c])):a>=l.length?(c=new Op,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function DM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Lt};break;case"SpotLight":t={position:new R,direction:new R,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function NM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let IM=0;function UM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OM(s){const e=new DM,t=NM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new R);const a=new R,l=new en,c=new en;function h(p){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,E=0,b=0,M=0,y=0,C=0,I=0,L=0,U=0,P=0,F=0;p.sort(UM);for(let N=0,G=p.length;N<G;N++){const z=p[N],$=z.color,ie=z.intensity,se=z.distance;let Y=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Kr?Y=z.shadow.map.texture:Y=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=$.r*ie,_+=$.g*ie,v+=$.b*ie;else if(z.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(z.sh.coefficients[J],ie);F++}else if(z.isDirectionalLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const K=z.shadow,q=t.get(z);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=Y,r.directionalShadowMatrix[S]=z.shadow.matrix,C++}r.directional[S]=J,S++}else if(z.isSpotLight){const J=e.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy($).multiplyScalar(ie),J.distance=se,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,r.spot[b]=J;const K=z.shadow;if(z.map&&(r.spotLightMap[U]=z.map,U++,K.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[b]=K.matrix,z.castShadow){const q=t.get(z);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=Y,L++}b++}else if(z.isRectAreaLight){const J=e.get(z);J.color.copy($).multiplyScalar(ie),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=J,M++}else if(z.isPointLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),J.distance=z.distance,J.decay=z.decay,z.castShadow){const K=z.shadow,q=t.get(z);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=Y,r.pointShadowMatrix[E]=z.shadow.matrix,I++}r.point[E]=J,E++}else if(z.isHemisphereLight){const J=e.get(z);J.skyColor.copy(z.color).multiplyScalar(ie),J.groundColor.copy(z.groundColor).multiplyScalar(ie),r.hemi[y]=J,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const w=r.hash;(w.directionalLength!==S||w.pointLength!==E||w.spotLength!==b||w.rectAreaLength!==M||w.hemiLength!==y||w.numDirectionalShadows!==C||w.numPointShadows!==I||w.numSpotShadows!==L||w.numSpotMaps!==U||w.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=M,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=L+U-P,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,w.directionalLength=S,w.pointLength=E,w.spotLength=b,w.rectAreaLength=M,w.hemiLength=y,w.numDirectionalShadows=C,w.numPointShadows=I,w.numSpotShadows=L,w.numSpotMaps=U,w.numLightProbes=F,r.version=IM++)}function f(p,g){let _=0,v=0,S=0,E=0,b=0;const M=g.matrixWorldInverse;for(let y=0,C=p.length;y<C;y++){const I=p[y];if(I.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(M),_++}else if(I.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(M),S++}else if(I.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),c.identity(),l.copy(I.matrixWorld),l.premultiply(M),c.extractRotation(l),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),E++}else if(I.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),v++}else if(I.isHemisphereLight){const L=r.hemi[b];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(M),b++}}}return{setup:h,setupView:f,state:r}}function Fp(s){const e=new OM(s),t=[],r=[],a=[];function l(v){_.camera=v,t.length=0,r.length=0,a.length=0}function c(v){t.push(v)}function h(v){r.push(v)}function f(v){a.push(v)}function p(){e.setup(t)}function g(v){e.setupView(t,v)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:g,pushLight:c,pushShadow:h,pushLightProbeGrid:f}}function FM(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let h;return c===void 0?(h=new Fp(s),e.set(a,[h])):l>=c.length?(h=new Fp(s),c.push(h)):h=c[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
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
}`,kM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],HM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Bp=new en,Fo=new R,th=new R;function GM(s,e,t){let r=new Bc;const a=new $e,l=new $e,c=new Qt,h=new C_,f=new P_,p={},g=t.maxTextureSize,_={[mr]:Hn,[Hn]:mr,[Et]:Et},v=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:BM,fragmentShader:zM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new ei;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new nt(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xa;let y=this.type;this.render=function(P,F,w){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===Gg&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xa);const N=s.getRenderTarget(),G=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Yi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=y!==this.type;ie&&F.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(Y=>Y.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,Y=P.length;se<Y;se++){const J=P[se],K=J.shadow;if(K===void 0){tt("WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);const q=K.getFrameExtents();a.multiply(q),l.copy(K.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/q.x),a.x=l.x*q.x,K.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/q.y),a.y=l.y*q.y,K.mapSize.y=l.y));const ue=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ue,K.map===null||ie===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===So){if(J.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ii(a.x,a.y,{format:Kr,type:ji,minFilter:An,magFilter:An,generateMipmaps:!1}),K.map.texture.name=J.name+".shadowMap",K.map.depthTexture=new zs(a.x,a.y,Di),K.map.depthTexture.name=J.name+".shadowMapDepth",K.map.depthTexture.format=$i,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=yn,K.map.depthTexture.magFilter=yn}else J.isPointLight?(K.map=new vp(a.x),K.map.depthTexture=new a_(a.x,Li)):(K.map=new Ii(a.x,a.y),K.map.depthTexture=new zs(a.x,a.y,Li)),K.map.depthTexture.name=J.name+".shadowMap",K.map.depthTexture.format=$i,this.type===xa?(K.map.depthTexture.compareFunction=ue?hc:cc,K.map.depthTexture.minFilter=An,K.map.depthTexture.magFilter=An):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=yn,K.map.depthTexture.magFilter=yn);K.camera.updateProjectionMatrix()}const ae=K.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ae;B++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,B),s.clear();else{B===0&&(s.setRenderTarget(K.map),s.clear());const ee=K.getViewport(B);c.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),$.viewport(c)}if(J.isPointLight){const ee=K.camera,Ue=K.matrix,He=J.distance||ee.far;He!==ee.far&&(ee.far=He,ee.updateProjectionMatrix()),Fo.setFromMatrixPosition(J.matrixWorld),ee.position.copy(Fo),th.copy(ee.position),th.add(kM[B]),ee.up.copy(HM[B]),ee.lookAt(th),ee.updateMatrixWorld(),Ue.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Bp.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Bp,ee.coordinateSystem,ee.reversedDepth)}else K.updateMatrices(J);r=K.getFrustum(),L(F,w,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===So&&C(K,w),K.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(N,G,z)};function C(P,F){const w=e.update(b);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ii(a.x,a.y,{format:Kr,type:ji})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,w,v,b,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,w,S,b,null)}function I(P,F,w,N){let G=null;const z=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)G=z;else if(G=w.isPointLight===!0?f:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=G.uuid,ie=F.uuid;let se=p[$];se===void 0&&(se={},p[$]=se);let Y=se[ie];Y===void 0&&(Y=G.clone(),se[ie]=Y,F.addEventListener("dispose",U)),G=Y}if(G.visible=F.visible,G.wireframe=F.wireframe,N===So?G.side=F.shadowSide!==null?F.shadowSide:F.side:G.side=F.shadowSide!==null?F.shadowSide:_[F.side],G.alphaMap=F.alphaMap,G.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,G.map=F.map,G.clipShadows=F.clipShadows,G.clippingPlanes=F.clippingPlanes,G.clipIntersection=F.clipIntersection,G.displacementMap=F.displacementMap,G.displacementScale=F.displacementScale,G.displacementBias=F.displacementBias,G.wireframeLinewidth=F.wireframeLinewidth,G.linewidth=F.linewidth,w.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const $=s.properties.get(G);$.light=w}return G}function L(P,F,w,N,G){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&G===So)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),se=P.material;if(Array.isArray(se)){const Y=ie.groups;for(let J=0,K=Y.length;J<K;J++){const q=Y[J],ue=se[q.materialIndex];if(ue&&ue.visible){const ae=I(P,ue,N,G);P.onBeforeShadow(s,P,F,w,ie,ae,q),s.renderBufferDirect(w,null,ie,ae,P,q),P.onAfterShadow(s,P,F,w,ie,ae,q)}}}else if(se.visible){const Y=I(P,se,N,G);P.onBeforeShadow(s,P,F,w,ie,Y,null),s.renderBufferDirect(w,null,ie,Y,P,null),P.onAfterShadow(s,P,F,w,ie,Y,null)}}const $=P.children;for(let ie=0,se=$.length;ie<se;ie++)L($[ie],F,w,N,G)}function U(P){P.target.removeEventListener("dispose",U);for(const w in p){const N=p[w],G=P.target.uuid;G in N&&(N[G].dispose(),delete N[G])}}}function VM(s,e){function t(){let H=!1;const Te=new Qt;let he=null;const Oe=new Qt(0,0,0,0);return{setMask:function(Re){he!==Re&&!H&&(s.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){H=Re},setClear:function(Re,ge,We,ot,Ft){Ft===!0&&(Re*=ot,ge*=ot,We*=ot),Te.set(Re,ge,We,ot),Oe.equals(Te)===!1&&(s.clearColor(Re,ge,We,ot),Oe.copy(Te))},reset:function(){H=!1,he=null,Oe.set(-1,0,0,0)}}}function r(){let H=!1,Te=!1,he=null,Oe=null,Re=null;return{setReversed:function(ge){if(Te!==ge){const We=e.get("EXT_clip_control");ge?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Te=ge;const ot=Re;Re=null,this.setClear(ot)}},getReversed:function(){return Te},setTest:function(ge){ge?pe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(ge){he!==ge&&!H&&(s.depthMask(ge),he=ge)},setFunc:function(ge){if(Te&&(ge=Mv[ge]),Oe!==ge){switch(ge){case vu:s.depthFunc(s.NEVER);break;case _u:s.depthFunc(s.ALWAYS);break;case Su:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case yu:s.depthFunc(s.EQUAL);break;case Mu:s.depthFunc(s.GEQUAL);break;case xu:s.depthFunc(s.GREATER);break;case Eu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=ge}},setLocked:function(ge){H=ge},setClear:function(ge){Re!==ge&&(Re=ge,Te&&(ge=1-ge),s.clearDepth(ge))},reset:function(){H=!1,he=null,Oe=null,Re=null,Te=!1}}}function a(){let H=!1,Te=null,he=null,Oe=null,Re=null,ge=null,We=null,ot=null,Ft=null;return{setTest:function(Rt){H||(Rt?pe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Rt){Te!==Rt&&!H&&(s.stencilMask(Rt),Te=Rt)},setFunc:function(Rt,Fn,ci){(he!==Rt||Oe!==Fn||Re!==ci)&&(s.stencilFunc(Rt,Fn,ci),he=Rt,Oe=Fn,Re=ci)},setOp:function(Rt,Fn,ci){(ge!==Rt||We!==Fn||ot!==ci)&&(s.stencilOp(Rt,Fn,ci),ge=Rt,We=Fn,ot=ci)},setLocked:function(Rt){H=Rt},setClear:function(Rt){Ft!==Rt&&(s.clearStencil(Rt),Ft=Rt)},reset:function(){H=!1,Te=null,he=null,Oe=null,Re=null,ge=null,We=null,ot=null,Ft=null}}}const l=new t,c=new r,h=new a,f=new WeakMap,p=new WeakMap;let g={},_={},v={},S=new WeakMap,E=[],b=null,M=!1,y=null,C=null,I=null,L=null,U=null,P=null,F=null,w=new Lt(0,0,0),N=0,G=!1,z=null,$=null,ie=null,se=null,Y=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,q=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ue)[1]),K=q>=1):ue.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),K=q>=2);let ae=null,B={};const ee=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),He=new Qt().fromArray(ee),De=new Qt().fromArray(Ue);function le(H,Te,he,Oe){const Re=new Uint8Array(4),ge=s.createTexture();s.bindTexture(H,ge),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<he;We++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Te+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return ge}const Se={};Se[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),pe(s.DEPTH_TEST),c.setFunc(Es),$t(!1),zt($f),pe(s.CULL_FACE),Ot(Yi);function pe(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function Ne(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function Ze(H,Te){return v[H]!==Te?(s.bindFramebuffer(H,Te),v[H]=Te,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Te),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function Je(H,Te){let he=E,Oe=!1;if(H){he=S.get(Te),he===void 0&&(he=[],S.set(Te,he));const Re=H.textures;if(he.length!==Re.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,We=Re.length;ge<We;ge++)he[ge]=s.COLOR_ATTACHMENT0+ge;he.length=Re.length,Oe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(he)}function Bt(H){return b!==H?(s.useProgram(H),b=H,!0):!1}const ht={[Yr]:s.FUNC_ADD,[Wg]:s.FUNC_SUBTRACT,[Xg]:s.FUNC_REVERSE_SUBTRACT};ht[Yg]=s.MIN,ht[qg]=s.MAX;const At={[jg]:s.ZERO,[$g]:s.ONE,[Kg]:s.SRC_COLOR,[mu]:s.SRC_ALPHA,[nv]:s.SRC_ALPHA_SATURATE,[ev]:s.DST_COLOR,[Jg]:s.DST_ALPHA,[Zg]:s.ONE_MINUS_SRC_COLOR,[gu]:s.ONE_MINUS_SRC_ALPHA,[tv]:s.ONE_MINUS_DST_COLOR,[Qg]:s.ONE_MINUS_DST_ALPHA,[iv]:s.CONSTANT_COLOR,[rv]:s.ONE_MINUS_CONSTANT_COLOR,[sv]:s.CONSTANT_ALPHA,[ov]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(H,Te,he,Oe,Re,ge,We,ot,Ft,Rt){if(H===Yi){M===!0&&(Ne(s.BLEND),M=!1);return}if(M===!1&&(pe(s.BLEND),M=!0),H!==Vg){if(H!==y||Rt!==G){if((C!==Yr||U!==Yr)&&(s.blendEquation(s.FUNC_ADD),C=Yr,U=Yr),Rt)switch(H){case xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kf:s.blendFunc(s.ONE,s.ONE);break;case Zf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",H);break}else switch(H){case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zf:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jf:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",H);break}I=null,L=null,P=null,F=null,w.set(0,0,0),N=0,y=H,G=Rt}return}Re=Re||Te,ge=ge||he,We=We||Oe,(Te!==C||Re!==U)&&(s.blendEquationSeparate(ht[Te],ht[Re]),C=Te,U=Re),(he!==I||Oe!==L||ge!==P||We!==F)&&(s.blendFuncSeparate(At[he],At[Oe],At[ge],At[We]),I=he,L=Oe,P=ge,F=We),(ot.equals(w)===!1||Ft!==N)&&(s.blendColor(ot.r,ot.g,ot.b,Ft),w.copy(ot),N=Ft),y=H,G=!1}function mt(H,Te){H.side===Et?Ne(s.CULL_FACE):pe(s.CULL_FACE);let he=H.side===Hn;Te&&(he=!he),$t(he),H.blending===xs&&H.transparent===!1?Ot(Yi):Ot(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Oe=H.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),V(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(H){z!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),z=H)}function zt(H){H!==kg?(pe(s.CULL_FACE),H!==$&&(H===$f?s.cullFace(s.BACK):H===Hg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),$=H}function xn(H){H!==ie&&(K&&s.lineWidth(H),ie=H)}function V(H,Te,he){H?(pe(s.POLYGON_OFFSET_FILL),(se!==Te||Y!==he)&&(se=Te,Y=he,c.getReversed()&&(Te=-Te),s.polygonOffset(Te,he))):Ne(s.POLYGON_OFFSET_FILL)}function kt(H){H?pe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function gt(H){H===void 0&&(H=s.TEXTURE0+J-1),ae!==H&&(s.activeTexture(H),ae=H)}function Dt(H,Te,he){he===void 0&&(ae===null?he=s.TEXTURE0+J-1:he=ae);let Oe=B[he];Oe===void 0&&(Oe={type:void 0,texture:void 0},B[he]=Oe),(Oe.type!==H||Oe.texture!==Te)&&(ae!==he&&(s.activeTexture(he),ae=he),s.bindTexture(H,Te||Se[H]),Oe.type=H,Oe.texture=Te)}function be(){const H=B[ae];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Vt(){try{s.compressedTexImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function x(){try{s.texSubImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function j(){try{s.texSubImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function Me(){try{s.texStorage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function Pe(){try{s.texStorage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function ce(){try{s.texImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function de(){try{s.texImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function Ie(H){return _[H]!==void 0?_[H]:s.getParameter(H)}function Fe(H,Te){_[H]!==Te&&(s.pixelStorei(H,Te),_[H]=Te)}function we(H){He.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),He.copy(H))}function xe(H){De.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),De.copy(H))}function it(H,Te){let he=p.get(Te);he===void 0&&(he=new WeakMap,p.set(Te,he));let Oe=he.get(H);Oe===void 0&&(Oe=s.getUniformBlockIndex(Te,H.name),he.set(H,Oe))}function st(H,Te){const Oe=p.get(Te).get(H);f.get(Te)!==Oe&&(s.uniformBlockBinding(Te,Oe,H.__bindingPointIndex),f.set(Te,Oe))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},ae=null,B={},v={},S=new WeakMap,E=[],b=null,M=!1,y=null,C=null,I=null,L=null,U=null,P=null,F=null,w=new Lt(0,0,0),N=0,G=!1,z=null,$=null,ie=null,se=null,Y=null,He.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:pe,disable:Ne,bindFramebuffer:Ze,drawBuffers:Je,useProgram:Bt,setBlending:Ot,setMaterial:mt,setFlipSided:$t,setCullFace:zt,setLineWidth:xn,setPolygonOffset:V,setScissorTest:kt,activeTexture:gt,bindTexture:Dt,unbindTexture:be,compressedTexImage2D:Vt,compressedTexImage3D:D,texImage2D:ce,texImage3D:de,pixelStorei:Fe,getParameter:Ie,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:x,texSubImage3D:j,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:we,viewport:xe,reset:vt}}function WM(s,e,t,r,a,l,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new $e,g=new WeakMap,_=new Set;let v;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,x){return E?new OffscreenCanvas(D,x):Eo("canvas")}function M(D,x,j){let fe=1;const me=Vt(D);if((me.width>j||me.height>j)&&(fe=j/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Me=Math.floor(fe*me.width),Pe=Math.floor(fe*me.height);v===void 0&&(v=b(Me,Pe));const ce=x?b(Me,Pe):v;return ce.width=Me,ce.height=Pe,ce.getContext("2d").drawImage(D,0,0,Me,Pe),tt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Me+"x"+Pe+")."),ce}else return"data"in D&&tt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function y(D){return D.generateMipmaps}function C(D){s.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,x,j,fe,me,Me=!1){if(D!==null){if(s[D]!==void 0)return s[D];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Pe;fe&&(Pe=e.get("EXT_texture_norm16"),Pe||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=x;if(x===s.RED&&(j===s.FLOAT&&(ce=s.R32F),j===s.HALF_FLOAT&&(ce=s.R16F),j===s.UNSIGNED_BYTE&&(ce=s.R8),j===s.UNSIGNED_SHORT&&Pe&&(ce=Pe.R16_EXT),j===s.SHORT&&Pe&&(ce=Pe.R16_SNORM_EXT)),x===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.R8UI),j===s.UNSIGNED_SHORT&&(ce=s.R16UI),j===s.UNSIGNED_INT&&(ce=s.R32UI),j===s.BYTE&&(ce=s.R8I),j===s.SHORT&&(ce=s.R16I),j===s.INT&&(ce=s.R32I)),x===s.RG&&(j===s.FLOAT&&(ce=s.RG32F),j===s.HALF_FLOAT&&(ce=s.RG16F),j===s.UNSIGNED_BYTE&&(ce=s.RG8),j===s.UNSIGNED_SHORT&&Pe&&(ce=Pe.RG16_EXT),j===s.SHORT&&Pe&&(ce=Pe.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.RG8UI),j===s.UNSIGNED_SHORT&&(ce=s.RG16UI),j===s.UNSIGNED_INT&&(ce=s.RG32UI),j===s.BYTE&&(ce=s.RG8I),j===s.SHORT&&(ce=s.RG16I),j===s.INT&&(ce=s.RG32I)),x===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),j===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),j===s.UNSIGNED_INT&&(ce=s.RGB32UI),j===s.BYTE&&(ce=s.RGB8I),j===s.SHORT&&(ce=s.RGB16I),j===s.INT&&(ce=s.RGB32I)),x===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),j===s.UNSIGNED_INT&&(ce=s.RGBA32UI),j===s.BYTE&&(ce=s.RGBA8I),j===s.SHORT&&(ce=s.RGBA16I),j===s.INT&&(ce=s.RGBA32I)),x===s.RGB&&(j===s.UNSIGNED_SHORT&&Pe&&(ce=Pe.RGB16_EXT),j===s.SHORT&&Pe&&(ce=Pe.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),x===s.RGBA){const de=Me?Na:Mt.getTransfer(me);j===s.FLOAT&&(ce=s.RGBA32F),j===s.HALF_FLOAT&&(ce=s.RGBA16F),j===s.UNSIGNED_BYTE&&(ce=de===bt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&Pe&&(ce=Pe.RGBA16_EXT),j===s.SHORT&&Pe&&(ce=Pe.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function U(D,x){let j;return D?x===null||x===Li||x===Mo?j=s.DEPTH24_STENCIL8:x===Di?j=s.DEPTH32F_STENCIL8:x===yo&&(j=s.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===Mo?j=s.DEPTH_COMPONENT24:x===Di?j=s.DEPTH_COMPONENT32F:x===yo&&(j=s.DEPTH_COMPONENT16),j}function P(D,x){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==An?Math.log2(Math.max(x.width,x.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?x.mipmaps.length:1}function F(D){const x=D.target;x.removeEventListener("dispose",F),N(x),x.isVideoTexture&&g.delete(x),x.isHTMLTexture&&_.delete(x)}function w(D){const x=D.target;x.removeEventListener("dispose",w),z(x)}function N(D){const x=r.get(D);if(x.__webglInit===void 0)return;const j=D.source,fe=S.get(j);if(fe){const me=fe[x.__cacheKey];me.usedTimes--,me.usedTimes===0&&G(D),Object.keys(fe).length===0&&S.delete(j)}r.remove(D)}function G(D){const x=r.get(D);s.deleteTexture(x.__webglTexture);const j=D.source,fe=S.get(j);delete fe[x.__cacheKey],c.memory.textures--}function z(D){const x=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(x.__webglFramebuffer[fe]))for(let me=0;me<x.__webglFramebuffer[fe].length;me++)s.deleteFramebuffer(x.__webglFramebuffer[fe][me]);else s.deleteFramebuffer(x.__webglFramebuffer[fe]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[fe])}else{if(Array.isArray(x.__webglFramebuffer))for(let fe=0;fe<x.__webglFramebuffer.length;fe++)s.deleteFramebuffer(x.__webglFramebuffer[fe]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let fe=0;fe<x.__webglColorRenderbuffer.length;fe++)x.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[fe]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const j=D.textures;for(let fe=0,me=j.length;fe<me;fe++){const Me=r.get(j[fe]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(j[fe])}r.remove(D)}let $=0;function ie(){$=0}function se(){return $}function Y(D){$=D}function J(){const D=$;return D>=a.maxTextures&&tt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),$+=1,D}function K(D){const x=[];return x.push(D.wrapS),x.push(D.wrapT),x.push(D.wrapR||0),x.push(D.magFilter),x.push(D.minFilter),x.push(D.anisotropy),x.push(D.internalFormat),x.push(D.format),x.push(D.type),x.push(D.generateMipmaps),x.push(D.premultiplyAlpha),x.push(D.flipY),x.push(D.unpackAlignment),x.push(D.colorSpace),x.join()}function q(D,x){const j=r.get(D);if(D.isVideoTexture&&Dt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){const fe=D.image;if(fe===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(j,D,x);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+x)}function ue(D,x){const j=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){Ne(j,D,x);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+x)}function ae(D,x){const j=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){Ne(j,D,x);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+x)}function B(D,x){const j=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&j.__version!==D.version){Ze(j,D,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+x)}const ee={[Ta]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[Au]:s.MIRRORED_REPEAT},Ue={[yn]:s.NEAREST,[uv]:s.NEAREST_MIPMAP_NEAREST,[wa]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[Ru]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},He={[fv]:s.NEVER,[vv]:s.ALWAYS,[dv]:s.LESS,[cc]:s.LEQUAL,[pv]:s.EQUAL,[hc]:s.GEQUAL,[mv]:s.GREATER,[gv]:s.NOTEQUAL};function De(D,x){if(x.type===Di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===An||x.magFilter===Ru||x.magFilter===wa||x.magFilter===jr||x.minFilter===An||x.minFilter===Ru||x.minFilter===wa||x.minFilter===jr)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ee[x.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ee[x.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ee[x.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Ue[x.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Ue[x.minFilter]),x.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,He[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===yn||x.minFilter!==wa&&x.minFilter!==jr||x.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,a.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function le(D,x){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,x.addEventListener("dispose",F));const fe=x.source;let me=S.get(fe);me===void 0&&(me={},S.set(fe,me));const Me=K(x);if(Me!==D.__cacheKey){me[Me]===void 0&&(me[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,j=!0),me[Me].usedTimes++;const Pe=me[D.__cacheKey];Pe!==void 0&&(me[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&G(x)),D.__cacheKey=Me,D.__webglTexture=me[Me].texture}return j}function Se(D,x,j){return Math.floor(Math.floor(D/j)/x)}function pe(D,x,j,fe){const Me=D.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,j,fe,x.data);else{Me.sort((Fe,we)=>Fe.start-we.start);let Pe=0;for(let Fe=1;Fe<Me.length;Fe++){const we=Me[Pe],xe=Me[Fe],it=we.start+we.count,st=Se(xe.start,x.width,4),vt=Se(we.start,x.width,4);xe.start<=it+1&&st===vt&&Se(xe.start+xe.count-1,x.width,4)===st?we.count=Math.max(we.count,xe.start+xe.count-we.start):(++Pe,Me[Pe]=xe)}Me.length=Pe+1;const ce=t.getParameter(s.UNPACK_ROW_LENGTH),de=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Fe=0,we=Me.length;Fe<we;Fe++){const xe=Me[Fe],it=Math.floor(xe.start/4),st=Math.ceil(xe.count/4),vt=it%x.width,H=Math.floor(it/x.width),Te=st,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,vt,H,Te,he,j,fe,x.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ce),t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Ne(D,x,j){let fe=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(fe=s.TEXTURE_3D);const me=le(D,x),Me=x.source;t.bindTexture(fe,D.__webglTexture,s.TEXTURE0+j);const Pe=r.get(Me);if(Me.version!==Pe.__version||me===!0){if(t.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const he=Mt.getPrimaries(Mt.workingColorSpace),Oe=x.colorSpace===gr?null:Mt.getPrimaries(x.colorSpace),Re=x.colorSpace===gr||he===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let de=M(x.image,!1,a.maxTextureSize);de=be(x,de);const Ie=l.convert(x.format,x.colorSpace),Fe=l.convert(x.type);let we=L(x.internalFormat,Ie,Fe,x.normalized,x.colorSpace,x.isVideoTexture);De(fe,x);let xe;const it=x.mipmaps,st=x.isVideoTexture!==!0,vt=Pe.__version===void 0||me===!0,H=Me.dataReady,Te=P(x,de);if(x.isDepthTexture)we=U(x.format===$r,x.type),vt&&(st?t.texStorage2D(s.TEXTURE_2D,1,we,de.width,de.height):t.texImage2D(s.TEXTURE_2D,0,we,de.width,de.height,0,Ie,Fe,null));else if(x.isDataTexture)if(it.length>0){st&&vt&&t.texStorage2D(s.TEXTURE_2D,Te,we,it[0].width,it[0].height);for(let he=0,Oe=it.length;he<Oe;he++)xe=it[he],st?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,xe.width,xe.height,Ie,Fe,xe.data):t.texImage2D(s.TEXTURE_2D,he,we,xe.width,xe.height,0,Ie,Fe,xe.data);x.generateMipmaps=!1}else st?(vt&&t.texStorage2D(s.TEXTURE_2D,Te,we,de.width,de.height),H&&pe(x,de,Ie,Fe)):t.texImage2D(s.TEXTURE_2D,0,we,de.width,de.height,0,Ie,Fe,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,we,it[0].width,it[0].height,de.depth);for(let he=0,Oe=it.length;he<Oe;he++)if(xe=it[he],x.format!==vi)if(Ie!==null)if(st){if(H)if(x.layerUpdates.size>0){const Re=lp(xe.width,xe.height,x.format,x.type);for(const ge of x.layerUpdates){const We=xe.data.subarray(ge*Re/xe.data.BYTES_PER_ELEMENT,(ge+1)*Re/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ge,xe.width,xe.height,1,Ie,We)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,de.depth,Ie,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,we,xe.width,xe.height,de.depth,0,xe.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,de.depth,Ie,Fe,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,we,xe.width,xe.height,de.depth,0,Ie,Fe,xe.data)}else{st&&vt&&t.texStorage2D(s.TEXTURE_2D,Te,we,it[0].width,it[0].height);for(let he=0,Oe=it.length;he<Oe;he++)xe=it[he],x.format!==vi?Ie!==null?st?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,xe.width,xe.height,Ie,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,he,we,xe.width,xe.height,0,xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,xe.width,xe.height,Ie,Fe,xe.data):t.texImage2D(s.TEXTURE_2D,he,we,xe.width,xe.height,0,Ie,Fe,xe.data)}else if(x.isDataArrayTexture)if(st){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,we,de.width,de.height,de.depth),H)if(x.layerUpdates.size>0){const he=lp(de.width,de.height,x.format,x.type);for(const Oe of x.layerUpdates){const Re=de.data.subarray(Oe*he/de.data.BYTES_PER_ELEMENT,(Oe+1)*he/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,de.width,de.height,1,Ie,Fe,Re)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ie,Fe,de.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,de.width,de.height,de.depth,0,Ie,Fe,de.data);else if(x.isData3DTexture)st?(vt&&t.texStorage3D(s.TEXTURE_3D,Te,we,de.width,de.height,de.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ie,Fe,de.data)):t.texImage3D(s.TEXTURE_3D,0,we,de.width,de.height,de.depth,0,Ie,Fe,de.data);else if(x.isFramebufferTexture){if(vt)if(st)t.texStorage2D(s.TEXTURE_2D,Te,we,de.width,de.height);else{let he=de.width,Oe=de.height;for(let Re=0;Re<Te;Re++)t.texImage2D(s.TEXTURE_2D,Re,we,he,Oe,0,Ie,Fe,null),he>>=1,Oe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),de.parentNode!==he){he.appendChild(de),_.add(x),he.onpaint=ot=>{const Ft=ot.changedElements;for(const Rt of _)Ft.includes(Rt.image)&&(Rt.needsUpdate=!0)},he.requestPaint();return}const Oe=0,Re=s.RGBA,ge=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,Re,ge,We,de),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(st&&vt){const he=Vt(it[0]);t.texStorage2D(s.TEXTURE_2D,Te,we,he.width,he.height)}for(let he=0,Oe=it.length;he<Oe;he++)xe=it[he],st?H&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ie,Fe,xe):t.texImage2D(s.TEXTURE_2D,he,we,Ie,Fe,xe);x.generateMipmaps=!1}else if(st){if(vt){const he=Vt(de);t.texStorage2D(s.TEXTURE_2D,Te,we,he.width,he.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Fe,de)}else t.texImage2D(s.TEXTURE_2D,0,we,Ie,Fe,de);y(x)&&C(fe),Pe.__version=Me.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function Ze(D,x,j){if(x.image.length!==6)return;const fe=le(D,x),me=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+j);const Me=r.get(me);if(me.version!==Me.__version||fe===!0){t.activeTexture(s.TEXTURE0+j);const Pe=Mt.getPrimaries(Mt.workingColorSpace),ce=x.colorSpace===gr?null:Mt.getPrimaries(x.colorSpace),de=x.colorSpace===gr||Pe===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,Fe=x.image[0]&&x.image[0].isDataTexture,we=[];for(let ge=0;ge<6;ge++)!Ie&&!Fe?we[ge]=M(x.image[ge],!0,a.maxCubemapSize):we[ge]=Fe?x.image[ge].image:x.image[ge],we[ge]=be(x,we[ge]);const xe=we[0],it=l.convert(x.format,x.colorSpace),st=l.convert(x.type),vt=L(x.internalFormat,it,st,x.normalized,x.colorSpace),H=x.isVideoTexture!==!0,Te=Me.__version===void 0||fe===!0,he=me.dataReady;let Oe=P(x,xe);De(s.TEXTURE_CUBE_MAP,x);let Re;if(Ie){H&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,vt,xe.width,xe.height);for(let ge=0;ge<6;ge++){Re=we[ge].mipmaps;for(let We=0;We<Re.length;We++){const ot=Re[We];x.format!==vi?it!==null?H?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,ot.width,ot.height,it,ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,vt,ot.width,ot.height,0,ot.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,ot.width,ot.height,it,st,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,vt,ot.width,ot.height,0,it,st,ot.data)}}}else{if(Re=x.mipmaps,H&&Te){Re.length>0&&Oe++;const ge=Vt(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,vt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Fe){H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,we[ge].width,we[ge].height,it,st,we[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,vt,we[ge].width,we[ge].height,0,it,st,we[ge].data);for(let We=0;We<Re.length;We++){const Ft=Re[We].image[ge].image;H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,Ft.width,Ft.height,it,st,Ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,vt,Ft.width,Ft.height,0,it,st,Ft.data)}}else{H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,it,st,we[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,vt,it,st,we[ge]);for(let We=0;We<Re.length;We++){const ot=Re[We];H?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,it,st,ot.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,vt,it,st,ot.image[ge])}}}y(x)&&C(s.TEXTURE_CUBE_MAP),Me.__version=me.version,x.onUpdate&&x.onUpdate(x)}D.__version=x.version}function Je(D,x,j,fe,me,Me){const Pe=l.convert(j.format,j.colorSpace),ce=l.convert(j.type),de=L(j.internalFormat,Pe,ce,j.normalized,j.colorSpace),Ie=r.get(x),Fe=r.get(j);if(Fe.__renderTarget=x,!Ie.__hasExternalTextures){const we=Math.max(1,x.width>>Me),xe=Math.max(1,x.height>>Me);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Me,de,we,xe,x.depth,0,Pe,ce,null):t.texImage2D(me,Me,de,we,xe,0,Pe,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),gt(x)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,me,Fe.__webglTexture,0,kt(x)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,me,Fe.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(D,x,j){if(s.bindRenderbuffer(s.RENDERBUFFER,D),x.depthBuffer){const fe=x.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,Me=U(x.stencilBuffer,me),Pe=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(x)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(x),Me,x.width,x.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(x),Me,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Me,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,D)}else{const fe=x.textures;for(let me=0;me<fe.length;me++){const Me=fe[me],Pe=l.convert(Me.format,Me.colorSpace),ce=l.convert(Me.type),de=L(Me.internalFormat,Pe,ce,Me.normalized,Me.colorSpace);gt(x)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(x),de,x.width,x.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(x),de,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,de,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(D,x,j){const fe=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(x.depthTexture);if(me.__renderTarget=x,(!me.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),fe){if(me.__webglInit===void 0&&(me.__webglInit=!0,x.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),De(s.TEXTURE_CUBE_MAP,x.depthTexture);const Ie=l.convert(x.depthTexture.format),Fe=l.convert(x.depthTexture.type);let we;x.depthTexture.format===$i?we=s.DEPTH_COMPONENT24:x.depthTexture.format===$r&&(we=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,we,x.width,x.height,0,Ie,Fe,null)}}else q(x.depthTexture,0);const Me=me.__webglTexture,Pe=kt(x),ce=fe?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,de=x.depthTexture.format===$r?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===$i)gt(x)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ce,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,de,ce,Me,0);else if(x.depthTexture.format===$r)gt(x)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ce,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,de,ce,Me,0);else throw new Error("Unknown depthTexture format")}function At(D){const x=r.get(D),j=D.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),fe){const me=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),x.__depthDisposeCallback=me}x.__boundDepthTexture=fe}if(D.depthTexture&&!x.__autoAllocateDepthBuffer)if(j)for(let fe=0;fe<6;fe++)ht(x.__webglFramebuffer[fe],D,fe);else{const fe=D.texture.mipmaps;fe&&fe.length>0?ht(x.__webglFramebuffer[0],D,0):ht(x.__webglFramebuffer,D,0)}else if(j){x.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[fe]),x.__webglDepthbuffer[fe]===void 0)x.__webglDepthbuffer[fe]=s.createRenderbuffer(),Bt(x.__webglDepthbuffer[fe],D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Me)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Bt(x.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(D,x,j){const fe=r.get(D);x!==void 0&&Je(fe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&At(D)}function mt(D){const x=D.texture,j=r.get(D),fe=r.get(x);D.addEventListener("dispose",w);const me=D.textures,Me=D.isWebGLCubeRenderTarget===!0,Pe=me.length>1;if(Pe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=x.version,c.memory.textures++),Me){j.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer[ce]=[];for(let de=0;de<x.mipmaps.length;de++)j.__webglFramebuffer[ce][de]=s.createFramebuffer()}else j.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){j.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)j.__webglFramebuffer[ce]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let ce=0,de=me.length;ce<de;ce++){const Ie=r.get(me[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&gt(D)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ce=0;ce<me.length;ce++){const de=me[ce];j.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);const Ie=l.convert(de.format,de.colorSpace),Fe=l.convert(de.type),we=L(de.internalFormat,Ie,Fe,de.normalized,de.colorSpace,D.isXRRenderTarget===!0),xe=kt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,we,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,j.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),De(s.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)Je(j.__webglFramebuffer[ce][de],D,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else Je(j.__webglFramebuffer[ce],D,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(x)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ce=0,de=me.length;ce<de;ce++){const Ie=me[ce],Fe=r.get(Ie);let we=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,Fe.__webglTexture),De(we,Ie),Je(j.__webglFramebuffer,D,Ie,s.COLOR_ATTACHMENT0+ce,we,0),y(Ie)&&C(we)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,fe.__webglTexture),De(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)Je(j.__webglFramebuffer[de],D,x,s.COLOR_ATTACHMENT0,ce,de);else Je(j.__webglFramebuffer,D,x,s.COLOR_ATTACHMENT0,ce,0);y(x)&&C(ce),t.unbindTexture()}D.depthBuffer&&At(D)}function $t(D){const x=D.textures;for(let j=0,fe=x.length;j<fe;j++){const me=x[j];if(y(me)){const Me=I(D),Pe=r.get(me).__webglTexture;t.bindTexture(Me,Pe),C(Me),t.unbindTexture()}}}const zt=[],xn=[];function V(D){if(D.samples>0){if(gt(D)===!1){const x=D.textures,j=D.width,fe=D.height;let me=s.COLOR_BUFFER_BIT;const Me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(D),ce=x.length>1;if(ce)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const de=D.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const Fe=r.get(x[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,j,fe,0,0,j,fe,me,s.NEAREST),f===!0&&(zt.length=0,xn.length=0,zt.push(s.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(zt.push(Me),xn.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const Fe=r.get(x[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const x=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function kt(D){return Math.min(a.maxSamples,D.samples)}function gt(D){const x=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Dt(D){const x=c.render.frame;g.get(D)!==x&&(g.set(D,x),D.update())}function be(D,x){const j=D.colorSpace,fe=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Da&&j!==gr&&(Mt.getTransfer(j)===bt?(fe!==vi||me!==Zn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",j)),x}function Vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=ie,this.getTextureUnits=se,this.setTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=ue,this.setTexture3D=ae,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XM(s,e){function t(r,a=gr){let l;const c=Mt.getTransfer(a);if(r===Zn)return s.UNSIGNED_BYTE;if(r===Pu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===cd)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===hd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ld)return s.BYTE;if(r===ud)return s.SHORT;if(r===yo)return s.UNSIGNED_SHORT;if(r===Cu)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===Di)return s.FLOAT;if(r===ji)return s.HALF_FLOAT;if(r===fd)return s.ALPHA;if(r===dd)return s.RGB;if(r===vi)return s.RGBA;if(r===$i)return s.DEPTH_COMPONENT;if(r===$r)return s.DEPTH_STENCIL;if(r===pd)return s.RED;if(r===Lu)return s.RED_INTEGER;if(r===Kr)return s.RG;if(r===Du)return s.RG_INTEGER;if(r===Nu)return s.RGBA_INTEGER;if(r===Aa||r===Ra||r===Ca||r===Pa)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Aa)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ra)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ca)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Aa)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Iu||r===Uu||r===Ou||r===Fu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Iu)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uu)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ou)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bu||r===zu||r===ku||r===Hu||r===Gu||r===ba||r===Vu)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Bu||r===zu)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ku)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hu)return l.COMPRESSED_R11_EAC;if(r===Gu)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ba)return l.COMPRESSED_RG11_EAC;if(r===Vu)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Wu||r===Xu||r===Yu||r===qu||r===ju||r===$u||r===Ku||r===Zu||r===Ju||r===Qu||r===ec||r===tc||r===nc||r===ic)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Wu)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xu)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yu)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qu)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ju)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$u)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ku)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zu)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ju)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qu)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ec)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tc)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nc)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ic)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rc||r===sc||r===oc)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===rc)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sc)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oc)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ac||r===lc||r===La||r===uc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ac)return l.COMPRESSED_RED_RGTC1_EXT;if(r===lc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===La)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qM=`
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

}`;class jM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Xd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Oi({vertexShader:YM,fragmentShader:qM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Ja(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $M extends vr{constructor(e,t){super();const r=this;let a=null,l=1,c=null,h="local-floor",f=1,p=null,g=null,_=null,v=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",M=new jM,y={},C=t.getContextAttributes();let I=null,L=null;const U=[],P=[],F=new $e;let w=null;const N=new ui;N.viewport=new Qt;const G=new ui;G.viewport=new Qt;const z=[N,G],$=new B_;let ie=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Se=U[le];return Se===void 0&&(Se=new yc,U[le]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(le){let Se=U[le];return Se===void 0&&(Se=new yc,U[le]=Se),Se.getGripSpace()},this.getHand=function(le){let Se=U[le];return Se===void 0&&(Se=new yc,U[le]=Se),Se.getHandSpace()};function Y(le){const Se=P.indexOf(le.inputSource);if(Se===-1)return;const pe=U[Se];pe!==void 0&&(pe.update(le.inputSource,le.frame,p||c),pe.dispatchEvent({type:le.type,data:le.inputSource}))}function J(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",K);for(let le=0;le<U.length;le++){const Se=P[le];Se!==null&&(P[le]=null,U[le].disconnect(Se))}ie=null,se=null,M.reset();for(const le in y)delete y[le];e.setRenderTarget(I),S=null,v=null,_=null,a=null,L=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,r.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){h=le,r.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(le){p=le},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(le){if(a=le,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",J),a.addEventListener("inputsourceschange",K),C.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ne=null,Ze=null;C.depth&&(Ze=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=C.stencil?$r:$i,Ne=C.stencil?Mo:Li);const Je={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(Je),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Ii(v.textureWidth,v.textureHeight,{format:vi,type:Zn,depthTexture:new zs(v.textureWidth,v.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const pe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,pe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Ii(S.framebufferWidth,S.framebufferHeight,{format:vi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await a.requestReferenceSpace(h),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(le){for(let Se=0;Se<le.removed.length;Se++){const pe=le.removed[Se],Ne=P.indexOf(pe);Ne>=0&&(P[Ne]=null,U[Ne].disconnect(pe))}for(let Se=0;Se<le.added.length;Se++){const pe=le.added[Se];let Ne=P.indexOf(pe);if(Ne===-1){for(let Je=0;Je<U.length;Je++)if(Je>=P.length){P.push(pe),Ne=Je;break}else if(P[Je]===null){P[Je]=pe,Ne=Je;break}if(Ne===-1)break}const Ze=U[Ne];Ze&&Ze.connect(pe)}}const q=new R,ue=new R;function ae(le,Se,pe){q.setFromMatrixPosition(Se.matrixWorld),ue.setFromMatrixPosition(pe.matrixWorld);const Ne=q.distanceTo(ue),Ze=Se.projectionMatrix.elements,Je=pe.projectionMatrix.elements,Bt=Ze[14]/(Ze[10]-1),ht=Ze[14]/(Ze[10]+1),At=(Ze[9]+1)/Ze[5],Ot=(Ze[9]-1)/Ze[5],mt=(Ze[8]-1)/Ze[0],$t=(Je[8]+1)/Je[0],zt=Bt*mt,xn=Bt*$t,V=Ne/(-mt+$t),kt=V*-mt;if(Se.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(kt),le.translateZ(V),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Ze[10]===-1)le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const gt=Bt+V,Dt=ht+V,be=zt-kt,Vt=xn+(Ne-kt),D=At*ht/Dt*gt,x=Ot*ht/Dt*gt;le.projectionMatrix.makePerspective(be,Vt,D,x,gt,Dt),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function B(le,Se){Se===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Se.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(a===null)return;let Se=le.near,pe=le.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(pe=M.depthFar)),$.near=G.near=N.near=Se,$.far=G.far=N.far=pe,(ie!==$.near||se!==$.far)&&(a.updateRenderState({depthNear:$.near,depthFar:$.far}),ie=$.near,se=$.far),$.layers.mask=le.layers.mask|6,N.layers.mask=$.layers.mask&-5,G.layers.mask=$.layers.mask&-3;const Ne=le.parent,Ze=$.cameras;B($,Ne);for(let Je=0;Je<Ze.length;Je++)B(Ze[Je],Ne);Ze.length===2?ae($,N,G):$.projectionMatrix.copy(N.projectionMatrix),ee(le,$,Ne)};function ee(le,Se,pe){pe===null?le.matrix.copy(Se.matrixWorld):(le.matrix.copy(pe.matrixWorld),le.matrix.invert(),le.matrix.multiply(Se.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=wo*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(le){f=le,v!==null&&(v.fixedFoveation=le),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=le)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(le){return y[le]};let Ue=null;function He(le,Se){if(g=Se.getViewerPose(p||c),E=Se,g!==null){const pe=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ne=!1;pe.length!==$.cameras.length&&($.cameras.length=0,Ne=!0);for(let ht=0;ht<pe.length;ht++){const At=pe[ht];let Ot=null;if(S!==null)Ot=S.getViewport(At);else{const $t=_.getViewSubImage(v,At);Ot=$t.viewport,ht===0&&(e.setRenderTargetTextures(L,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(L))}let mt=z[ht];mt===void 0&&(mt=new ui,mt.layers.enable(ht),mt.viewport=new Qt,z[ht]=mt),mt.matrix.fromArray(At.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(At.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),ht===0&&($.matrix.copy(mt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ne===!0&&$.cameras.push(mt)}const Ze=a.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){_=r.getBinding();const ht=_.getDepthInformation(pe[0]);ht&&ht.isValid&&ht.texture&&M.init(ht,a.renderState)}if(Ze&&Ze.includes("camera-access")&&b){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<pe.length;ht++){const At=pe[ht].camera;if(At){let Ot=y[At];Ot||(Ot=new Xd,y[At]=Ot);const mt=_.getCameraImage(At);Ot.sourceTexture=mt}}}}for(let pe=0;pe<U.length;pe++){const Ne=P[pe],Ze=U[pe];Ne!==null&&Ze!==void 0&&Ze.update(Ne,Se,p||c)}Ue&&Ue(le,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),E=null}const De=new up;De.setAnimationLoop(He),this.setAnimationLoop=function(le){Ue=le},this.dispose=function(){}}}const KM=new en,zp=new ut;zp.set(-1,0,0,0,1,0,0,0,1);function ZM(s,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,Jd(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function a(M,y,C,I,L){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(M,y):y.isMeshLambertMaterial?(l(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(M,y),_(M,y)):y.isMeshPhongMaterial?(l(M,y),g(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,L)):y.isMeshMatcapMaterial?(l(M,y),E(M,y)):y.isMeshDepthMaterial?l(M,y):y.isMeshDistanceMaterial?(l(M,y),b(M,y)):y.isMeshNormalMaterial?l(M,y):y.isLineBasicMaterial?(c(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?f(M,y,C,I):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Hn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Hn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const C=e.get(y),I=C.envMap,L=C.envMapRotation;I&&(M.envMap.value=I,M.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(L)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(zp),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function f(M,y,C,I){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*C,M.scale.value=I*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,C){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Hn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function b(M,y){const C=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function JM(s,e,t,r){let a={},l={},c=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(C,I){const L=I.program;r.uniformBlockBinding(C,L)}function p(C,I){let L=a[C.id];L===void 0&&(E(C),L=g(C),a[C.id]=L,C.addEventListener("dispose",M));const U=I.program;r.updateUBOMapping(C,U);const P=e.render.frame;l[C.id]!==P&&(v(C),l[C.id]=P)}function g(C){const I=_();C.__bindingPointIndex=I;const L=s.createBuffer(),U=C.__size,P=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,U,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,L),L}function _(){for(let C=0;C<h;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const I=a[C.id],L=C.uniforms,U=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let P=0,F=L.length;P<F;P++){const w=Array.isArray(L[P])?L[P]:[L[P]];for(let N=0,G=w.length;N<G;N++){const z=w[N];if(S(z,P,N,U)===!0){const $=z.__offset,ie=Array.isArray(z.value)?z.value:[z.value];let se=0;for(let Y=0;Y<ie.length;Y++){const J=ie[Y],K=b(J);typeof J=="number"||typeof J=="boolean"?(z.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,$+se,z.__data)):J.isMatrix3?(z.__data[0]=J.elements[0],z.__data[1]=J.elements[1],z.__data[2]=J.elements[2],z.__data[3]=0,z.__data[4]=J.elements[3],z.__data[5]=J.elements[4],z.__data[6]=J.elements[5],z.__data[7]=0,z.__data[8]=J.elements[6],z.__data[9]=J.elements[7],z.__data[10]=J.elements[8],z.__data[11]=0):ArrayBuffer.isView(J)?z.__data.set(new J.constructor(J.buffer,J.byteOffset,z.__data.length)):(J.toArray(z.__data,se),se+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,I,L,U){const P=C.value,F=I+"_"+L;if(U[F]===void 0)return typeof P=="number"||typeof P=="boolean"?U[F]=P:ArrayBuffer.isView(P)?U[F]=P.slice():U[F]=P.clone(),!0;{const w=U[F];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return U[F]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(w.equals(P)===!1)return w.copy(P),!0}}return!1}function E(C){const I=C.uniforms;let L=0;const U=16;for(let F=0,w=I.length;F<w;F++){const N=Array.isArray(I[F])?I[F]:[I[F]];for(let G=0,z=N.length;G<z;G++){const $=N[G],ie=Array.isArray($.value)?$.value:[$.value];for(let se=0,Y=ie.length;se<Y;se++){const J=ie[se],K=b(J),q=L%U,ue=q%K.boundary,ae=q+ue;L+=ue,ae!==0&&U-ae<K.storage&&(L+=U-ae),$.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=L,L+=K.storage}}}const P=L%U;return P>0&&(L+=U-P),C.__size=L,C.__cache={},this}function b(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",C),I}function M(C){const I=C.target;I.removeEventListener("dispose",M);const L=c.indexOf(I.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function y(){for(const C in a)s.deleteBuffer(a[C]);c=[],a={},l={}}return{bind:f,update:p,dispose:y}}const QM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function ex(){return zi===null&&(zi=new i_(QM,16,16,Kr,ji),zi.name="DFG_LUT",zi.minFilter=An,zi.magFilter=An,zi.wrapS=qi,zi.wrapT=qi,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class tx{constructor(e={}){const{canvas:t=Sv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Zn}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const b=S,M=new Set([Nu,Du,Lu]),y=new Set([Zn,Li,yo,Mo,Pu,bu]),C=new Uint32Array(4),I=new Int32Array(4),L=new R;let U=null,P=null;const F=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let z=!1,$=null;this._outputColorSpace=ai;let ie=0,se=0,Y=null,J=-1,K=null;const q=new Qt,ue=new Qt;let ae=null;const B=new Lt(0);let ee=0,Ue=t.width,He=t.height,De=1,le=null,Se=null;const pe=new Qt(0,0,Ue,He),Ne=new Qt(0,0,Ue,He);let Ze=!1;const Je=new Bc;let Bt=!1,ht=!1;const At=new en,Ot=new R,mt=new Qt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function xn(){return Y===null?De:1}let V=r;function kt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pu}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ot,!1),V===null){const X="webgl2";if(V=kt(X,A),V===null)throw kt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let gt,Dt,be,Vt,D,x,j,fe,me,Me,Pe,ce,de,Ie,Fe,we,xe,it,st,vt,H,Te,he;function Oe(){gt=new e1(V),gt.init(),H=new XM(V,gt),Dt=new Yy(V,gt,e,H),be=new VM(V,gt),Dt.reversedDepthBuffer&&v&&be.buffers.depth.setReversed(!0),Vt=new i1(V),D=new PM,x=new WM(V,gt,be,D,Dt,H,Vt),j=new Qy(G),fe=new H_(V),Te=new Wy(V,fe),me=new t1(V,fe,Vt,Te),Me=new s1(V,me,fe,Te,Vt),it=new r1(V,Dt,x),Fe=new qy(D),Pe=new CM(G,j,gt,Dt,Te,Fe),ce=new ZM(G,D),de=new LM,Ie=new FM(gt),xe=new Vy(G,j,be,Me,E,f),we=new GM(G,Me,Dt),he=new JM(V,Vt,Dt,be),st=new Xy(V,gt,Vt),vt=new n1(V,gt,Vt),Vt.programs=Pe.programs,G.capabilities=Dt,G.extensions=gt,G.properties=D,G.renderLists=de,G.shadowMap=we,G.state=be,G.info=Vt}Oe(),b!==Zn&&(N=new a1(b,t.width,t.height,a,l));const Re=new $M(G,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(A){A!==void 0&&(De=A,this.setSize(Ue,He,!1))},this.getSize=function(A){return A.set(Ue,He)},this.setSize=function(A,X,re=!0){if(Re.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=A,He=X,t.width=Math.floor(A*De),t.height=Math.floor(X*De),re===!0&&(t.style.width=A+"px",t.style.height=X+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Ue*De,He*De).floor()},this.setDrawingBufferSize=function(A,X,re){Ue=A,He=X,De=re,t.width=Math.floor(A*re),t.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(b===Zn){Tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){tt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,X,re,te){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,X,re,te),be.viewport(q.copy(pe).multiplyScalar(De).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,X,re,te){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,X,re,te),be.scissor(ue.copy(Ne).multiplyScalar(De).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){be.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let te=0;if(A){let Q=!1;if(Y!==null){const Ce=Y.texture.format;Q=M.has(Ce)}if(Q){const Ce=Y.texture.type,ke=y.has(Ce),Ae=xe.getClearColor(),Xe=xe.getClearAlpha(),Ke=Ae.r,at=Ae.g,lt=Ae.b;ke?(C[0]=Ke,C[1]=at,C[2]=lt,C[3]=Xe,V.clearBufferuiv(V.COLOR,0,C)):(I[0]=Ke,I[1]=at,I[2]=lt,I[3]=Xe,V.clearBufferiv(V.COLOR,0,I))}else te|=V.COLOR_BUFFER_BIT}X&&(te|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),xe.dispose(),de.dispose(),Ie.dispose(),D.dispose(),j.dispose(),Me.dispose(),Te.dispose(),he.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ss),Re.removeEventListener("sessionend",js),sr.stop()};function ge(A){A.preventDefault(),yd("WebGLRenderer: Context Lost."),z=!0}function We(){yd("WebGLRenderer: Context Restored."),z=!1;const A=Vt.autoReset,X=we.enabled,re=we.autoUpdate,te=we.needsUpdate,Q=we.type;Oe(),Vt.autoReset=A,we.enabled=X,we.autoUpdate=re,we.needsUpdate=te,we.type=Q}function ot(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const X=A.target;X.removeEventListener("dispose",Ft),Rt(X)}function Rt(A){Fn(A),D.remove(A)}function Fn(A){const X=D.get(A).programs;X!==void 0&&(X.forEach(function(re){Pe.releaseProgram(re)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,te,Q,Ce){X===null&&(X=$t);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=cl(A,X,re,te,Q);be.setMaterial(te,ke);let Xe=re.index,Ke=1;if(te.wireframe===!0){if(Xe=me.getWireframeAttribute(re),Xe===void 0)return;Ke=2}const at=re.drawRange,lt=re.attributes.position;let qe=at.start*Ke,xt=(at.start+at.count)*Ke;Ce!==null&&(qe=Math.max(qe,Ce.start*Ke),xt=Math.min(xt,(Ce.start+Ce.count)*Ke)),Xe!==null?(qe=Math.max(qe,0),xt=Math.min(xt,Xe.count)):lt!=null&&(qe=Math.max(qe,0),xt=Math.min(xt,lt.count));const Ht=xt-qe;if(Ht<0||Ht===1/0)return;Te.setup(Q,te,Ae,re,Xe);let qt,Nt=st;if(Xe!==null&&(qt=fe.get(Xe),Nt=vt,Nt.setIndex(qt)),Q.isMesh)te.wireframe===!0?(be.setLineWidth(te.wireframeLinewidth*xn()),Nt.setMode(V.LINES)):Nt.setMode(V.TRIANGLES);else if(Q.isLine){let ln=te.linewidth;ln===void 0&&(ln=1),be.setLineWidth(ln*xn()),Q.isLineSegments?Nt.setMode(V.LINES):Q.isLineLoop?Nt.setMode(V.LINE_LOOP):Nt.setMode(V.LINE_STRIP)}else Q.isPoints?Nt.setMode(V.POINTS):Q.isSprite&&Nt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const ln=Q._multiDrawStarts,Be=Q._multiDrawCounts,En=Q._multiDrawCount,_t=Xe?fe.get(Xe).bytesPerElement:1,Wn=D.get(te).currentProgram.getUniforms();for(let Xn=0;Xn<En;Xn++)Wn.setValue(V,"_gl_DrawID",Xn),Nt.render(ln[Xn]/_t,Be[Xn])}else if(Q.isInstancedMesh)Nt.renderInstances(qe,Ht,Q.count);else if(re.isInstancedBufferGeometry){const ln=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Be=Math.min(re.instanceCount,ln);Nt.renderInstances(qe,Ht,Be)}else Nt.render(qe,Ht)};function ci(A,X,re){A.transparent===!0&&A.side===Et&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,$s(A,X,re),A.side=mr,A.needsUpdate=!0,$s(A,X,re),A.side=Et):$s(A,X,re)}this.compile=function(A,X,re=null){re===null&&(re=A),P=Ie.get(re),P.init(X),w.push(P),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),A!==re&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const te=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){const Ae=Ce[ke];ci(Ae,re,Q),te.add(Ae)}else ci(Ce,re,Q),te.add(Ce)}),P=w.pop(),te},this.compileAsync=function(A,X,re=null){const te=this.compile(A,X,re);return new Promise(Q=>{function Ce(){if(te.forEach(function(ke){D.get(ke).currentProgram.isReady()&&te.delete(ke)}),te.size===0){Q(A);return}setTimeout(Ce,10)}gt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let rr=null;function qs(A){rr&&rr(A)}function ss(){sr.stop()}function js(){sr.start()}const sr=new up;sr.setAnimationLoop(qs),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(A){rr=A,Re.setAnimationLoop(A),A===null?sr.stop():sr.start()},Re.addEventListener("sessionstart",ss),Re.addEventListener("sessionend",js),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;$!==null&&$.renderStart(A,X);const re=Re.enabled===!0&&Re.isPresenting===!0,te=N!==null&&(Y===null||re)&&N.begin(G,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),A.isScene===!0&&A.onBeforeRender(G,A,X,Y),P=Ie.get(A,w.length),P.init(X),P.state.textureUnits=x.getTextureUnits(),w.push(P),At.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Je.setFromProjectionMatrix(At,Ni,X.reversedDepth),ht=this.localClippingEnabled,Bt=Fe.init(this.clippingPlanes,ht),U=de.get(A,F.length),U.init(),F.push(U),Re.enabled===!0&&Re.isPresenting===!0){const ke=G.xr.getDepthSensingMesh();ke!==null&&zo(ke,X,-1/0,G.sortObjects)}zo(A,X,0,G.sortObjects),U.finish(),G.sortObjects===!0&&U.sort(le,Se),zt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,zt&&xe.addToRenderList(U,A),this.info.render.frame++,Bt===!0&&Fe.beginShadows();const Q=P.state.shadowsArray;if(we.render(Q,A,X),Bt===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&N.hasRenderPass())===!1){const ke=U.opaque,Ae=U.transmissive;if(P.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(Ae.length>0)for(let Ke=0,at=Xe.length;Ke<at;Ke++){const lt=Xe[Ke];ki(ke,Ae,A,lt)}zt&&xe.render(A);for(let Ke=0,at=Xe.length;Ke<at;Ke++){const lt=Xe[Ke];ll(U,A,lt,lt.viewport)}}else Ae.length>0&&ki(ke,Ae,A,X),zt&&xe.render(A),ll(U,A,X)}Y!==null&&se===0&&(x.updateMultisampleRenderTarget(Y),x.updateRenderTargetMipmap(Y)),te&&N.end(G),A.isScene===!0&&A.onAfterRender(G,A,X),Te.resetDefaultState(),J=-1,K=null,w.pop(),w.length>0?(P=w[w.length-1],x.setTextureUnits(P.state.textureUnits),Bt===!0&&Fe.setGlobalState(G.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?U=F[F.length-1]:U=null,$!==null&&$.renderEnd()};function zo(A,X,re,te){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Je.intersectsSprite(A)){te&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const ke=Me.update(A),Ae=A.material;Ae.visible&&U.push(A,ke,Ae,re,mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Je.intersectsObject(A))){const ke=Me.update(A),Ae=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),mt.copy(ke.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Ae)){const Xe=ke.groups;for(let Ke=0,at=Xe.length;Ke<at;Ke++){const lt=Xe[Ke],qe=Ae[lt.materialIndex];qe&&qe.visible&&U.push(A,ke,qe,re,mt.z,lt)}}else Ae.visible&&U.push(A,ke,Ae,re,mt.z,null)}}const Ce=A.children;for(let ke=0,Ae=Ce.length;ke<Ae;ke++)zo(Ce[ke],X,re,te)}function ll(A,X,re,te){const{opaque:Q,transmissive:Ce,transparent:ke}=A;P.setupLightsView(re),Bt===!0&&Fe.setGlobalState(G.clippingPlanes,re),te&&be.viewport(q.copy(te)),Q.length>0&&os(Q,X,re),Ce.length>0&&os(Ce,X,re),ke.length>0&&os(ke,X,re),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ki(A,X,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const qe=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new Ii(1,1,{generateMipmaps:!0,type:qe?ji:Zn,minFilter:jr,samples:Math.max(4,Dt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ce=P.state.transmissionRenderTarget[te.id],ke=te.viewport||q;Ce.setSize(ke.z*G.transmissionResolutionScale,ke.w*G.transmissionResolutionScale);const Ae=G.getRenderTarget(),Xe=G.getActiveCubeFace(),Ke=G.getActiveMipmapLevel();G.setRenderTarget(Ce),G.getClearColor(B),ee=G.getClearAlpha(),ee<1&&G.setClearColor(16777215,.5),G.clear(),zt&&xe.render(re);const at=G.toneMapping;G.toneMapping=bi;const lt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),Bt===!0&&Fe.setGlobalState(G.clippingPlanes,te),os(A,re,te),x.updateMultisampleRenderTarget(Ce),x.updateRenderTargetMipmap(Ce),gt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let xt=0,Ht=X.length;xt<Ht;xt++){const qt=X[xt],{object:Nt,geometry:ln,material:Be,group:En}=qt;if(Be.side===Et&&Nt.layers.test(te.layers)){const _t=Be.side;Be.side=Hn,Be.needsUpdate=!0,ko(Nt,re,te,ln,Be,En),Be.side=_t,Be.needsUpdate=!0,qe=!0}}qe===!0&&(x.updateMultisampleRenderTarget(Ce),x.updateRenderTargetMipmap(Ce))}G.setRenderTarget(Ae,Xe,Ke),G.setClearColor(B,ee),lt!==void 0&&(te.viewport=lt),G.toneMapping=at}function os(A,X,re){const te=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ce=A.length;Q<Ce;Q++){const ke=A[Q],{object:Ae,geometry:Xe,group:Ke}=ke;let at=ke.material;at.allowOverride===!0&&te!==null&&(at=te),Ae.layers.test(re.layers)&&ko(Ae,X,re,Xe,at,Ke)}}function ko(A,X,re,te,Q,Ce){A.onBeforeRender(G,X,re,te,Q,Ce),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(G,X,re,te,A,Ce),Q.transparent===!0&&Q.side===Et&&Q.forceSinglePass===!1?(Q.side=Hn,Q.needsUpdate=!0,G.renderBufferDirect(re,X,te,Q,A,Ce),Q.side=mr,Q.needsUpdate=!0,G.renderBufferDirect(re,X,te,Q,A,Ce),Q.side=Et):G.renderBufferDirect(re,X,te,Q,A,Ce),A.onAfterRender(G,X,re,te,Q,Ce)}function $s(A,X,re){X.isScene!==!0&&(X=$t);const te=D.get(A),Q=P.state.lights,Ce=P.state.shadowsArray,ke=Q.state.version,Ae=Pe.getParameters(A,Q.state,Ce,X,re,P.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ae);let Ke=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=j.get(A.envMap||te.environment,at),te.envMapRotation=te.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",Ft),Ke=new Map,te.programs=Ke);let lt=Ke.get(Xe);if(lt!==void 0){if(te.currentProgram===lt&&te.lightsStateVersion===ke)return Go(A,Ae),lt}else Ae.uniforms=Pe.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,re,Ae),A.onBeforeCompile(Ae,G),lt=Pe.acquireProgram(Ae,Xe),Ke.set(Xe,lt),te.uniforms=Ae.uniforms;const qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Fe.uniform),Go(A,Ae),te.needsLights=ch(A),te.lightsStateVersion=ke,te.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=P.state.lightProbeGridArray.length>0,te.currentProgram=lt,te.uniformsList=null,lt}function Ho(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=rl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Go(A,X){const re=D.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function ul(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(X.matrixWorld);for(let re=0,te=A.length;re<te;re++){const Q=A[re];if(Q.texture!==null&&Q.boundingBox.containsPoint(L))return Q}return null}function cl(A,X,re,te,Q){X.isScene!==!0&&(X=$t),x.resetTextureUnits();const Ce=X.fog,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Ae=Y===null?G.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Mt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ke=j.get(te.envMap||ke,Xe),at=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!re.morphAttributes.position,xt=!!re.morphAttributes.normal,Ht=!!re.morphAttributes.color;let qt=bi;te.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(qt=G.toneMapping);const Nt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ln=Nt!==void 0?Nt.length:0,Be=D.get(te),En=P.state.lights;if(Bt===!0&&(ht===!0||A!==K)){const It=A===K&&te.id===J;Fe.setState(te,A,It)}let _t=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==En.state.version||Be.outputColorSpace!==Ae||Q.isBatchedMesh&&Be.batching===!1||!Q.isBatchedMesh&&Be.batching===!0||Q.isBatchedMesh&&Be.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Be.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Be.instancing===!1||!Q.isInstancedMesh&&Be.instancing===!0||Q.isSkinnedMesh&&Be.skinning===!1||!Q.isSkinnedMesh&&Be.skinning===!0||Q.isInstancedMesh&&Be.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Be.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Be.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Be.instancingMorph===!1&&Q.morphTexture!==null||Be.envMap!==Ke||te.fog===!0&&Be.fog!==Ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Fe.numPlanes||Be.numIntersection!==Fe.numIntersection)||Be.vertexAlphas!==at||Be.vertexTangents!==lt||Be.morphTargets!==qe||Be.morphNormals!==xt||Be.morphColors!==Ht||Be.toneMapping!==qt||Be.morphTargetsCount!==ln||!!Be.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Be.__version=te.version);let Wn=Be.currentProgram;_t===!0&&(Wn=$s(te,X,Q),$&&te.isNodeMaterial&&$.onUpdateProgram(te,Wn,Be));let Xn=!1,yt=!1,or=!1;const Pt=Wn.getUniforms(),Wt=Be.uniforms;if(be.useProgram(Wn.program)&&(Xn=!0,yt=!0,or=!0),te.id!==J&&(J=te.id,yt=!0),Be.needsLights){const It=ul(P.state.lightProbeGridArray,Q);Be.lightProbeGrid!==It&&(Be.lightProbeGrid=It,yt=!0)}if(Xn||K!==A){be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(V,"projectionMatrix",A.projectionMatrix),Pt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ei=Pt.map.cameraPosition;Ei!==void 0&&Ei.setValue(V,Ot.setFromMatrixPosition(A.matrixWorld)),Dt.logarithmicDepthBuffer&&Pt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,yt=!0,or=!0)}if(Be.needsLights&&(En.state.directionalShadowMap.length>0&&Pt.setValue(V,"directionalShadowMap",En.state.directionalShadowMap,x),En.state.spotShadowMap.length>0&&Pt.setValue(V,"spotShadowMap",En.state.spotShadowMap,x),En.state.pointShadowMap.length>0&&Pt.setValue(V,"pointShadowMap",En.state.pointShadowMap,x)),Q.isSkinnedMesh){Pt.setOptional(V,Q,"bindMatrix"),Pt.setOptional(V,Q,"bindMatrixInverse");const It=Q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Pt.setValue(V,"boneTexture",It.boneTexture,x))}Q.isBatchedMesh&&(Pt.setOptional(V,Q,"batchingTexture"),Pt.setValue(V,"batchingTexture",Q._matricesTexture,x),Pt.setOptional(V,Q,"batchingIdTexture"),Pt.setValue(V,"batchingIdTexture",Q._indirectTexture,x),Pt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(V,"batchingColorTexture",Q._colorsTexture,x));const xi=re.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&it.update(Q,re,Wn),(yt||Be.receiveShadow!==Q.receiveShadow)&&(Be.receiveShadow=Q.receiveShadow,Pt.setValue(V,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Wt.envMapIntensity.value=X.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=ex()),yt){if(Pt.setValue(V,"toneMappingExposure",G.toneMappingExposure),Be.needsLights&&uh(Wt,or),Ce&&te.fog===!0&&ce.refreshFogUniforms(Wt,Ce),ce.refreshMaterialUniforms(Wt,te,De,He,P.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){const It=Be.lightProbeGrid;Wt.probesSH.value=It.texture,Wt.probesMin.value.copy(It.boundingBox.min),Wt.probesMax.value.copy(It.boundingBox.max),Wt.probesResolution.value.copy(It.resolution)}rl.upload(V,Ho(Be),Wt,x)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(rl.upload(V,Ho(Be),Wt,x),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(V,"center",Q.center),Pt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(V,"normalMatrix",Q.normalMatrix),Pt.setValue(V,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){const It=te.uniformsGroups;for(let Ei=0,Hi=It.length;Ei<Hi;Ei++){const as=It[Ei];he.update(as,Wn),he.bind(as,Wn)}}return Wn}function uh(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ch(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,re){const te=D.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=X,D.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const re=D.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const Kt=V.createFramebuffer();this.setRenderTarget=function(A,X=0,re=0){Y=A,ie=X,se=re;let te=null,Q=!1,Ce=!1;if(A){const Ae=D.get(A);if(Ae.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),q.copy(A.viewport),ue.copy(A.scissor),ae=A.scissorTest,be.viewport(q),be.scissor(ue),be.setScissorTest(ae),J=-1;return}else if(Ae.__webglFramebuffer===void 0)x.setupRenderTarget(A);else if(Ae.__hasExternalTextures)x.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const at=A.depthTexture;if(Ae.__boundDepthTexture!==at){if(at!==null&&D.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ke=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?te=Ke[X][re]:te=Ke[X],Q=!0):A.samples>0&&x.useMultisampledRTT(A)===!1?te=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?te=Ke[re]:te=Ke,q.copy(A.viewport),ue.copy(A.scissor),ae=A.scissorTest}else q.copy(pe).multiplyScalar(De).floor(),ue.copy(Ne).multiplyScalar(De).floor(),ae=Ze;if(re!==0&&(te=Kt),be.bindFramebuffer(V.FRAMEBUFFER,te)&&be.drawBuffers(A,te),be.viewport(q),be.scissor(ue),be.setScissorTest(ae),Q){const Ae=D.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ae.__webglTexture,re)}else if(Ce){const Ae=X;for(let Xe=0;Xe<A.textures.length;Xe++){const Ke=D.get(A.textures[Xe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xe,Ke.__webglTexture,re,Ae)}}else if(A!==null&&re!==0){const Ae=D.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,re)}J=-1},this.readRenderTargetPixels=function(A,X,re,te,Q,Ce,ke,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){be.bindFramebuffer(V.FRAMEBUFFER,Xe);try{const Ke=A.textures[Ae],at=Ke.format,lt=Ke.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),!Dt.textureFormatReadable(at)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(lt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-te&&re>=0&&re<=A.height-Q&&V.readPixels(X,re,te,Q,H.convert(at),H.convert(lt),Ce)}finally{const Ke=Y!==null?D.get(Y).__webglFramebuffer:null;be.bindFramebuffer(V.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,te,Q,Ce,ke,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(X>=0&&X<=A.width-te&&re>=0&&re<=A.height-Q){be.bindFramebuffer(V.FRAMEBUFFER,Xe);const Ke=A.textures[Ae],at=Ke.format,lt=Ke.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),!Dt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(X,re,te,Q,H.convert(at),H.convert(lt),0);const xt=Y!==null?D.get(Y).__webglFramebuffer:null;be.bindFramebuffer(V.FRAMEBUFFER,xt);const Ht=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await yv(V,Ht,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(qe),V.deleteSync(Ht),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){const te=Math.pow(2,-re),Q=Math.floor(A.image.width*te),Ce=Math.floor(A.image.height*te),ke=X!==null?X.x:0,Ae=X!==null?X.y:0;x.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,ke,Ae,Q,Ce),be.unbindTexture()};const hh=V.createFramebuffer(),Vo=V.createFramebuffer();this.copyTextureToTexture=function(A,X,re=null,te=null,Q=0,Ce=0){let ke,Ae,Xe,Ke,at,lt,qe,xt,Ht;const qt=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(re!==null)ke=re.max.x-re.min.x,Ae=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,Ke=re.min.x,at=re.min.y,lt=re.isBox3?re.min.z:0;else{const Wt=Math.pow(2,-Q);ke=Math.floor(qt.width*Wt),Ae=Math.floor(qt.height*Wt),A.isDataArrayTexture?Xe=qt.depth:A.isData3DTexture?Xe=Math.floor(qt.depth*Wt):Xe=1,Ke=0,at=0,lt=0}te!==null?(qe=te.x,xt=te.y,Ht=te.z):(qe=0,xt=0,Ht=0);const Nt=H.convert(X.format),ln=H.convert(X.type);let Be;X.isData3DTexture?(x.setTexture3D(X,0),Be=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(x.setTexture2DArray(X,0),Be=V.TEXTURE_2D_ARRAY):(x.setTexture2D(X,0),Be=V.TEXTURE_2D),be.activeTexture(V.TEXTURE0),be.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),be.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),be.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const En=be.getParameter(V.UNPACK_ROW_LENGTH),_t=be.getParameter(V.UNPACK_IMAGE_HEIGHT),Wn=be.getParameter(V.UNPACK_SKIP_PIXELS),Xn=be.getParameter(V.UNPACK_SKIP_ROWS),yt=be.getParameter(V.UNPACK_SKIP_IMAGES);be.pixelStorei(V.UNPACK_ROW_LENGTH,qt.width),be.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qt.height),be.pixelStorei(V.UNPACK_SKIP_PIXELS,Ke),be.pixelStorei(V.UNPACK_SKIP_ROWS,at),be.pixelStorei(V.UNPACK_SKIP_IMAGES,lt);const or=A.isDataArrayTexture||A.isData3DTexture,Pt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Wt=D.get(A),xi=D.get(X),It=D.get(Wt.__renderTarget),Ei=D.get(xi.__renderTarget);be.bindFramebuffer(V.READ_FRAMEBUFFER,It.__webglFramebuffer),be.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Hi=0;Hi<Xe;Hi++)or&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(A).__webglTexture,Q,lt+Hi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(X).__webglTexture,Ce,Ht+Hi)),V.blitFramebuffer(Ke,at,ke,Ae,qe,xt,ke,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);be.bindFramebuffer(V.READ_FRAMEBUFFER,null),be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||D.has(A)){const Wt=D.get(A),xi=D.get(X);be.bindFramebuffer(V.READ_FRAMEBUFFER,hh),be.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vo);for(let It=0;It<Xe;It++)or?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.__webglTexture,Q,lt+It):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Wt.__webglTexture,Q),Pt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xi.__webglTexture,Ce,Ht+It):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xi.__webglTexture,Ce),Q!==0?V.blitFramebuffer(Ke,at,ke,Ae,qe,xt,ke,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):Pt?V.copyTexSubImage3D(Be,Ce,qe,xt,Ht+It,Ke,at,ke,Ae):V.copyTexSubImage2D(Be,Ce,qe,xt,Ke,at,ke,Ae);be.bindFramebuffer(V.READ_FRAMEBUFFER,null),be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Be,Ce,qe,xt,Ht,ke,Ae,Xe,Nt,ln,qt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Be,Ce,qe,xt,Ht,ke,Ae,Xe,Nt,qt.data):V.texSubImage3D(Be,Ce,qe,xt,Ht,ke,Ae,Xe,Nt,ln,qt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,qe,xt,ke,Ae,Nt,ln,qt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,qe,xt,qt.width,qt.height,Nt,qt.data):V.texSubImage2D(V.TEXTURE_2D,Ce,qe,xt,ke,Ae,Nt,ln,qt);be.pixelStorei(V.UNPACK_ROW_LENGTH,En),be.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),be.pixelStorei(V.UNPACK_SKIP_PIXELS,Wn),be.pixelStorei(V.UNPACK_SKIP_ROWS,Xn),be.pixelStorei(V.UNPACK_SKIP_IMAGES,yt),Ce===0&&X.generateMipmaps&&V.generateMipmap(Be),be.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&x.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?x.setTextureCube(A,0):A.isData3DTexture?x.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?x.setTexture2DArray(A,0):x.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){ie=0,se=0,Y=null,be.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const kp={type:"change"},nh={type:"start"},Hp={type:"end"},ol=new kd,Gp=new Tr,nx=Math.cos(70*Ed.DEG2RAD),fn=new R,Vn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ih=1e-6;class ix extends z_{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new _r,this._lastTargetPosition=new R,this._quat=new _r().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new op,this._sphericalDelta=new op,this._scale=1,this._panOffset=new R,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new R,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sx.bind(this),this._onPointerDown=rx.bind(this),this._onPointerUp=ox.bind(this),this._onContextMenu=dx.bind(this),this._onMouseWheel=ux.bind(this),this._onKeyDown=cx.bind(this),this._onTouchStart=hx.bind(this),this._onTouchMove=fx.bind(this),this._onMouseDown=ax.bind(this),this._onMouseMove=lx.bind(this),this._interceptControlDown=px.bind(this),this._interceptControlUp=mx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kp),this.update(),this.state=Ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;fn.copy(t).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Vn:r>Math.PI&&(r-=Vn),a<-Math.PI?a+=Vn:a>Math.PI&&(a-=Vn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),t.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const h=fn.length();c=this._clampDistance(h*this._scale);const f=h-c;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new R(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new R(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),c=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(ol.origin.copy(this.object.position),ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ol.direction))<nx?this.object.lookAt(this.target):(Gp.setFromNormalAndCoplanarPoint(this.object.up,this.target),ol.intersectPlane(Gp,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ih||this._lastTargetPosition.distanceToSquared(this.target)>ih?(this.dispatchEvent(kp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fn.setFromMatrixColumn(t,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,t){this.screenSpacePanning===!0?fn.setFromMatrixColumn(t,1):(fn.setFromMatrixColumn(t,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;fn.copy(a).sub(this.target);let l=fn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,c=r.width,h=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(c,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function rx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function sx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ox(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hp),this.state=Ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ax(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ut.DOLLY;break;case ys.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ut.ROTATE}break;case ys.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(nh)}function lx(s){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ux(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(s.preventDefault(),this.dispatchEvent(nh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Hp))}function cx(s){this.enabled!==!1&&this._handleKeyDown(s)}function hx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ut.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ut.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(nh)}function fx(s){switch(this._trackPointer(s),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ut.NONE}}function dx(s){this.enabled!==!1&&s.preventDefault()}function px(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class bn extends ei{constructor(e,t,r,a,l){super();const c=e.computeFrenetFrames(t,!1),h=[],f=[];for(let g=0;g<=t;g++){const _=g/t,v=Ed.lerp(r,a,_),S=e.getPoint(_),E=c.normals[g],b=c.binormals[g];for(let M=0;M<=l;M++){const y=M/l*Math.PI*2,C=Math.sin(y),I=Math.cos(y);h.push(S.x+v*(I*E.x+C*b.x),S.y+v*(I*E.y+C*b.y),S.z+v*(I*E.z+C*b.z))}}for(let g=0;g<t;g++)for(let _=0;_<l;_++){const v=g*(l+1)+_,S=(g+1)*(l+1)+_;f.push(v,S,v+1),f.push(S,S+1,v+1)}const p=[];for(let g=0;g<=t;g++)for(let _=0;_<=l;_++)p.push(g/t,_/l);this.setAttribute("uv",new an(p,2)),this.setAttribute("position",new an(h,3)),this.setIndex(f),this.computeVertexNormals()}}function pt(s,e=1,t=1.5){if(!s)return new Mn;const r=new N_().load(s,a=>{a.needsUpdate=!0},void 0,()=>{const a=document.createElement("canvas");a.width=a.height=4;const l=a.getContext("2d");l.fillStyle="#888888",l.fillRect(0,0,4,4),r.image=a,r.needsUpdate=!0});return r.wrapS=r.wrapT=Ta,r.repeat.set(e,-t),r}function Ys(s,e,t,r,a,l,c){const h=[new R(.16,-.05,0),new R(.27,-.1,0),new R(.28,-.05,0),new R(-0,-.04,0),new R(-.28,-.05,0),new R(-.27,-.1,0),new R(-.28,-.1,0)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new bn(f,100,.04,.02,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="chassis",{mesh:g,mat:p}}function Bo(s,e,t,r,a,l,c){const h=[new R(.16,-.05,0),new R(.27,-.1,0),new R(.28,-.05,0),new R(-0,-.04,0),new R(-.4,-.05,0),new R(-.37,-.1,0),new R(-.4,-.1,0)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new bn(f,100,.04,.02,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="chassis",{mesh:g,mat:p}}function Vp(s,e,t,r,a,l,c){const h=new ct({map:pt(s)}),f=new nt(new nr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="tube-sit-bottom",{mesh:f,mat:h}}function Wp(s,e,t,r,a,l,c){const h=new ct({map:pt(s)}),f=new nt(new nr(.028,.14,32),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="tube-left-bottom",{mesh:f,mat:h}}function Xp(s,e,t,r,a,l,c){const h=new ct({map:pt(s)}),f=new nt(new nr(.028,.14,32,64,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="tube-right-Bottom",{mesh:f,mat:h}}function gx(s,e,t,r,a,l,c){const h=[new R(1.05,.02,.05),new R(.75,0,.03),new R(.2,0,.01),new R(.1,0,-.01),new R(-.1,.05,-.03),new R(-.5,.05,-.05)],f=new tn(h),p=new ct({map:pt(s),side:Et}),g=new nt(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="tube-right-hoop",{mesh:g,mat:p}}function vx(s,e,t,r,a,l,c){const h=[new R(1.05,.02,-.05),new R(.75,0,-.03),new R(.2,0,-.01),new R(.1,0,.01),new R(-.1,.05,.03),new R(-.5,.05,.05)],f=new tn(h),p=new ct({map:pt(s),side:Et}),g=new nt(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="tube-right-hoop",{mesh:g,mat:p}}function Yp(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapBottomHoop",{mesh:f,mat:h}}function qp(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapTopHoop",{mesh:f,mat:h}}function _x(s,e,t,r){const a=[new R(-.9,-.12,-.1),new R(0,-.12,-.1),new R(.6,-.12,-.1),new R(.7,0,-.12),new R(.63,.28,-.2)],l=new tn(a),c=new ct({map:pt(s),side:Et}),h=new nt(new bn(l,20,.045,.01,20),c);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:c}}function Sx(s,e,t,r){const a=[new R(-.9,-.12,.1),new R(0,-.12,.1),new R(.6,-.12,.1),new R(.7,0,.12),new R(.63,.28,.2)],l=new tn(a),c=new ct({map:pt(s),side:Et}),h=new nt(new bn(l,100,.045,.01,20),c);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:c}}function jp(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapBottom",{mesh:f,mat:h}}function $p(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapTop",{mesh:f,mat:h}}function Kp(s,e,t,r,a,l,c){const h=[new R(.7,.4,.15),new R(.5,.4,.15),new R(.2,.4,.15),new R(-.2,.4,.15),new R(-.4,.4,.15),new R(-.2,.3,.15),new R(.5,.4,.15),new R(.7,.4,.15)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new is(f,100,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="guide",{mesh:g,mat:p}}const yx=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const a=sn.useRef(null),l=sn.useRef([]);return sn.useEffect(()=>{const c=new Jr;c.name="luge",l.current=[],[Ys(e,-.7,.325,0,0,1.57,0),Ys(e,-.6,.33,0,0,1.57,0),Ys(e,-.5,.335,0,0,1.57,0),Ys(e,-.4,.34,0,0,1.57,0),Ys(e,-.3,.345,0,0,1.57,0),Ys(e,-.2,.35,0,0,1.57,0)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)}),[Bo(e,-.4,.34,.2,0,0,.05),Bo(e,-.4,.34,.1,0,0,.05),Bo(e,-.4,.34,0,0,0,.05),Bo(e,-.4,.34,-.1,0,0,.05),Bo(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)}),[Vp(t,-.745,.25,0,1.57,1.57,0),Vp(t,-.155,.285,0,1.57,1.57,0)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)}),[Wp(t,-.75,.15,-.26,0,-.1,-.4),Wp(t,-.2,.16,-.26,0,0,.2)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)}),[Xp(t,-.75,.15,.26,0,.1,-.4),Xp(t,-.2,.16,.26,0,0,.2)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)});const v=gx(t,.2,.28,.24,1.57,0,3.13);c.add(v.mesh),l.current.push(v.mat);const S=vx(t,.2,.28,-.24,-1.57,0,3.13);c.add(S.mesh),l.current.push(S.mat),[Yp(t,-.84,.235,.23,0,0,0),Yp(t,-.84,.235,-.23,0,0,0)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)}),[qp(t,.7,.33,.184,0,0,0),qp(t,.7,.33,-.184,0,0,0)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)});const M=_x(t,0,.19,.37);c.add(M.mesh),l.current.push(M.mat);const y=Sx(t,0,.19,-.37);return c.add(y.mesh),l.current.push(y.mat),[jp(t,-.88,.08,.27,0,0,0),jp(t,-.88,.08,-.27,0,0,0)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)}),[$p(t,.63,.465,.171,0,0,0),$p(t,.63,.465,-.171,0,0,0)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)}),[Kp(r,-.03,.2,.52,-1.57,0,-.1),Kp(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:U,mat:P})=>{c.add(U),l.current.push(P)}),a.current=c,s.add(c),()=>{s.remove(c),c.traverse(U=>{U.isMesh&&(U.geometry.dispose(),U.material.dispose())})}},[s,e,t,r]),null};function ti(s,e,t,r,a,l,c){const h=[new R(.16,-.05,0),new R(.27,-.1,0),new R(.28,-.05,0),new R(-0,-.06,0),new R(-.28,-.05,0),new R(-.27,-.1,0),new R(-.25,-.1,0)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new bn(f,100,.04,.02,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="chassis",{mesh:g,mat:p}}function Zp(s,e,t,r,a,l,c){const h=new ct({map:pt(s)}),f=new nt(new nr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="tube-sit-bottom",{mesh:f,mat:h}}function Jp(s,e,t,r,a,l,c){const h=new ct({map:pt(s)}),f=new nt(new nr(.028,.14,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="tube-left-bottom",{mesh:f,mat:h}}function Qp(s,e,t,r,a,l,c){const h=new ct({map:pt(s)}),f=new nt(new nr(.028,.14,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="tube-right-Bottom",{mesh:f,mat:h}}function Mx(s,e,t,r,a,l,c){const h=[new R(.95,.02,.05),new R(.75,0,.03),new R(.2,0,.01),new R(.1,0,-.01),new R(-.1,.05,-.03),new R(-.5,.05,-.05)],f=new tn(h),p=new ct({map:pt(s),side:Et}),g=new nt(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="tube-right-hoop",{mesh:g,mat:p}}function xx(s,e,t,r,a,l,c){const h=[new R(.95,.02,-.05),new R(.75,0,-.03),new R(.2,0,-.01),new R(.1,0,.01),new R(-.1,.05,.03),new R(-.5,.05,.05)],f=new tn(h),p=new ct({map:pt(s),side:Et}),g=new nt(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="tube-right-hoop",{mesh:g,mat:p}}function em(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapBottomHoop",{mesh:f,mat:h}}function tm(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapTopHoop",{mesh:f,mat:h}}function Ex(s,e,t,r){const a=[new R(-.8,-.12,-.1),new R(0,-.12,-.1),new R(.6,-.12,-.1),new R(.7,0,-.12),new R(.63,.28,-.2)],l=new tn(a),c=new ct({map:pt(s),side:Et}),h=new nt(new bn(l,20,.045,.01,20),c);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:c}}function Tx(s,e,t,r){const a=[new R(-.8,-.12,.1),new R(0,-.12,.1),new R(.6,-.12,.1),new R(.7,0,.12),new R(.63,.28,.2)],l=new tn(a),c=new ct({map:pt(s),side:Et}),h=new nt(new bn(l,100,.045,.01,20),c);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:c}}function nm(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapBottom",{mesh:f,mat:h}}function im(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapTop",{mesh:f,mat:h}}function rm(s,e,t,r,a,l,c){const h=[new R(.7,.4,.15),new R(.5,.4,.15),new R(.2,.4,.15),new R(-.2,.4,.15),new R(-.4,.4,.15),new R(-.2,.3,.15),new R(.5,.4,.15),new R(.7,.4,.15)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new is(f,100,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="guide",{mesh:g,mat:p}}const wx=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const a=sn.useRef(null),l=sn.useRef([]);return sn.useEffect(()=>{const c=new Jr;c.name="luge",l.current=[],[ti(e,-.56,.33,0,0,1.57,0),ti(e,-.49,.333,0,0,1.57,0),ti(e,-.42,.335,0,0,1.57,0),ti(e,-.35,.34,0,0,1.57,0),ti(e,-.27,.345,0,0,1.57,0),ti(e,-.2,.35,0,0,1.57,0),ti(e,-.4,.34,.2,0,0,.05),ti(e,-.4,.34,.13,0,0,.05),ti(e,-.4,.34,.07,0,0,.05),ti(e,-.4,.34,0,0,0,.05),ti(e,-.4,.34,-.07,0,0,.05),ti(e,-.4,.34,-.13,0,0,.05),ti(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)}),[Zp(t,-.645,.25,0,1.57,1.57,0),Zp(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)}),[Jp(t,-.65,.15,-.26,0,-.1,-.4),Jp(t,-.1,.16,-.26,0,0,.2)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)}),[Qp(t,-.65,.15,.26,0,.1,-.4),Qp(t,-.1,.16,.26,0,0,.2)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)});const _=Mx(t,.2,.28,.24,1.57,0,3.13);c.add(_.mesh),l.current.push(_.mat);const v=xx(t,.2,.28,-.24,-1.57,0,3.13);c.add(v.mesh),l.current.push(v.mat),[em(t,-.74,.235,.23,0,0,0),em(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)}),[tm(t,.7,.33,.184,0,0,0),tm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)});const b=Ex(t,0,.19,.37);c.add(b.mesh),l.current.push(b.mat);const M=Tx(t,0,.19,-.37);return c.add(M.mesh),l.current.push(M.mat),[nm(t,-.78,.07,.26,0,0,0),nm(t,-.78,.07,-.26,0,0,0)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)}),[im(t,.63,.471,.169,0,0,0),im(t,.63,.471,-.169,0,0,0)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)}),[rm(r,-.03,.2,.52,-1.57,0,-.1),rm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:L,mat:U})=>{c.add(L),l.current.push(U)}),a.current=c,s.add(c),()=>{s.remove(c),c.traverse(L=>{L.isMesh&&(L.geometry.dispose(),L.material.dispose())})}},[s,e,t,r]),null};function ni(s,e,t,r,a,l,c){const h=[new R(.16,-.05,0),new R(.27,-.1,0),new R(.28,-.05,0),new R(-0,-.06,0),new R(-.28,-.05,0),new R(-.27,-.1,0),new R(-.25,-.1,0)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new bn(f,100,.04,.02,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="chassis",{mesh:g,mat:p}}function sm(s,e,t,r,a,l,c){const h=new ct({map:pt(s)}),f=new nt(new nr(.03,.4,32,64),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="tube-sit-bottom",{mesh:f,mat:h}}function om(s,e,t,r,a,l,c){const h=[new R(0,-.08,.03),new R(0,-.14,0),new R(0,0,0),new R(0,.14,.03),new R(0,.06,.03)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new is(f,3,.03,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="tube-left-bottom",{mesh:g,mat:p}}function am(s,e,t,r,a,l,c){const h=[new R(0,.08,-.03),new R(0,.14,0),new R(0,0,0),new R(0,-.12,.03),new R(0,-.06,.03)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new is(f,3,.03,2),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="tube-right-Bottom",{mesh:g,mat:p}}function Ax(s,e,t,r,a,l,c){const h=[new R(.95,.02,.05),new R(.75,0,.03),new R(.2,0,.01),new R(.1,0,-.01),new R(-.1,.05,-.03),new R(-.5,.05,-.05)],f=new tn(h),p=new ct({map:pt(s),side:Et}),g=new nt(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="tube-right-hoop",{mesh:g,mat:p}}function Rx(s,e,t,r,a,l,c){const h=[new R(.95,.02,-.05),new R(.75,0,-.03),new R(.2,0,-.01),new R(.1,0,.01),new R(-.1,.05,.03),new R(-.5,.05,.05)],f=new tn(h),p=new ct({map:pt(s),side:Et}),g=new nt(new bn(f,100,.04,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="tube-right-hoop",{mesh:g,mat:p}}function lm(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.038,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapBottomHoop",{mesh:f,mat:h}}function um(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapTopHoop",{mesh:f,mat:h}}function Cx(s,e,t,r){const a=[new R(-.8,-.12,-.1),new R(0,-.12,-.1),new R(.6,-.12,-.1),new R(.7,0,-.12),new R(.63,.28,-.2)],l=new tn(a),c=new ct({map:pt(s),side:Et}),h=new nt(new bn(l,20,.045,.01,20),c);return h.position.set(e,t,r),h.name="patinDroit",{mesh:h,mat:c}}function Px(s,e,t,r){const a=[new R(-.8,-.12,.1),new R(0,-.12,.1),new R(.6,-.12,.1),new R(.7,0,.12),new R(.63,.28,.2)],l=new tn(a),c=new ct({map:pt(s),side:Et}),h=new nt(new bn(l,100,.045,.01,20),c);return h.position.set(e,t,r),h.name="patinGauche",{mesh:h,mat:c}}function cm(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.04,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapBottom",{mesh:f,mat:h}}function hm(s,e,t,r,a,l,c){const h=new ct({map:pt(s),side:Et}),f=new nt(new Gn(.01,8,8),h);return f.position.set(e,t,r),f.rotation.set(a,l,c),f.name="CapTop",{mesh:f,mat:h}}function fm(s,e,t,r,a,l,c){const h=[new R(.7,.4,.15),new R(.5,.4,.15),new R(.2,.4,.15),new R(-.2,.4,.15),new R(-.4,.4,.15),new R(-.2,.3,.15),new R(.5,.4,.15),new R(.7,.4,.15)],f=new tn(h),p=new ct({map:pt(s)}),g=new nt(new is(f,100,.01,20),p);return g.position.set(e,t,r),g.rotation.set(a,l,c),g.name="guide",{mesh:g,mat:p}}const bx=({scene:s,selectedColor:e,backgroundColor:t,guide:r,hoop:a,skating:l})=>{const c=sn.useRef(null),h=sn.useRef([]);return sn.useEffect(()=>{const f=new Jr;f.name="luge",h.current=[],[ni(e,-.56,.33,0,0,1.57,0),ni(e,-.49,.333,0,0,1.57,0),ni(e,-.42,.335,0,0,1.57,0),ni(e,-.35,.34,0,0,1.57,0),ni(e,-.27,.345,0,0,1.57,0),ni(e,-.2,.35,0,0,1.57,0),ni(e,-.4,.34,.2,0,0,.05),ni(e,-.4,.34,.13,0,0,.05),ni(e,-.4,.34,.07,0,0,.05),ni(e,-.4,.34,0,0,0,.05),ni(e,-.4,.34,-.07,0,0,.05),ni(e,-.4,.34,-.13,0,0,.05),ni(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)}),[sm(t,-.645,.25,0,1.57,1.57,0),sm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)}),[om(a,-.65,.16,-.26,0,0,0),om(a,-.2,.16,-.26,0,0,0)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)}),[am(a,-.65,.16,.26,0,0,0),am(a,-.2,.16,.26,0,0,0)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)});const S=Ax(t,.2,.28,.24,1.57,0,3.13);f.add(S.mesh),h.current.push(S.mat);const E=Rx(t,.2,.28,-.24,-1.57,0,3.13);f.add(E.mesh),h.current.push(E.mat),[lm(t,-.74,.235,.23,0,0,0),lm(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)}),[um(t,.7,.33,.184,0,0,0),um(t,.7,.33,-.184,0,0,0)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)});const y=Cx(l,0,.19,.37);f.add(y.mesh),h.current.push(y.mat);const C=Px(l,0,.19,-.37);return f.add(C.mesh),h.current.push(C.mat),[cm(l,-.78,.07,.26,0,0,0),cm(l,-.78,.07,-.26,0,0,0)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)}),[hm(l,.63,.471,.169,0,0,0),hm(l,.63,.471,-.169,0,0,0)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)}),[fm(r,-.03,.2,.52,-1.57,0,-.1),fm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:P,mat:F})=>{f.add(P),h.current.push(F)}),c.current=f,s.add(f),()=>{s.remove(f),f.traverse(P=>{P.isMesh&&(P.geometry.dispose(),P.material.dispose())})}},[s,e,t,r,a,l]),null},Lx=({img1:s,img2:e,img3:t,img4:r,img5:a,wood:l,guide:c,skating:h,hoop:f})=>{const p=sn.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:f,skating:h},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:f,skating:h},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:f,skating:h},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:f,skating:h},{id:"color-5",value:a,src:a,bg:l,guide:c,hoop:f,skating:h}],[s,e,t,r,a,l,c,f,h]),[g,_]=sn.useState(p[0].value),[v,S]=sn.useState(p[0].bg),[E,b]=sn.useState(p[0].guide),[M,y]=sn.useState(p[0].hoop),[C,I]=sn.useState(p[0].skating),[L,U]=sn.useState("Luge"),P=sn.useRef(null),[F,w]=sn.useState(null);return sn.useEffect(()=>{const N=P.current;if(!N)return;const G=new Zv,z=N.offsetWidth||800,$=N.offsetHeight||700,ie=new ui(15,z/$,.1,1e3);let se;try{se=new tx({antialias:!0})}catch{N.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}se.setSize(z,$),se.setPixelRatio(window.devicePixelRatio),N.appendChild(se.domElement);const Y=new ix(ie,se.domElement);G.add(new O_(16777215,13));const J=new qc(16777215,1.4);J.position.set(4,6,4),G.add(J);const K=new qc(15267904,.5);K.position.set(-3,1,-2),G.add(K);const q=new qc(4482815,.3);q.position.set(0,-3,3),G.add(q),ie.position.set(3,4,-5),ie.lookAt(0,0,0),Y.update();const ue=()=>{const ae=N.offsetWidth,B=N.offsetHeight;ie.aspect=ae/B,ie.updateProjectionMatrix(),se.setSize(ae,B)};return window.addEventListener("resize",ue),se.setAnimationLoop(()=>{Y.update(),se.render(G,ie)}),w(G),()=>{window.removeEventListener("resize",ue),se.setAnimationLoop(null),se.dispose(),N.contains(se.domElement)&&N.removeChild(se.domElement)}},[]),Sn.createElement("div",null,Sn.createElement("form",{className:"setForm"},Sn.createElement("div",{className:"input input-img"},Sn.createElement("p",null,"color"),p.map(N=>Sn.createElement("button",{key:N.id,className:"color-1",id:N.id,value:N.value,onClick:G=>{G.preventDefault(),_(N.value),S(N.bg),b(N.guide),y(N.hoop),I(N.skating)}},Sn.createElement("img",{src:N.src,alt:"",height:"20px",width:"20px"})))),Sn.createElement("div",null,Sn.createElement("button",{onClick:N=>{N.preventDefault(),U("Luge")}},"Luge")),Sn.createElement("div",null,Sn.createElement("button",{onClick:N=>{N.preventDefault(),U("LugeKind")}},"LugeKind")),Sn.createElement("div",null,Sn.createElement("button",{onClick:N=>{N.preventDefault(),U("LugeSport")}},"LugeSport"))),Sn.createElement("div",{ref:P,style:{width:"100%",height:"700px"}}),F&&L==="Luge"&&Sn.createElement(yx,{scene:F,selectedColor:g,backgroundColor:v,guide:E}),F&&L==="LugeKind"&&Sn.createElement(wx,{scene:F,selectedColor:g,backgroundColor:v,guide:E}),F&&L==="LugeSport"&&Sn.createElement(bx,{scene:F,selectedColor:g,backgroundColor:v,guide:E,hoop:M,skating:C}))};function dm(){const s=document.getElementById("luge-configurator-root");if(s&&s.dataset.mounted!=="true"){s.dataset.mounted="true";try{const e={img1:s.dataset.img1||"",img2:s.dataset.img2||"",img3:s.dataset.img3||"",img4:s.dataset.img4||"",img5:s.dataset.img5||"",wood:s.dataset.wood||"",guide:s.dataset.guide||"",skating:s.dataset.skating||"",hoop:s.dataset.hoop||""};zg.createRoot(s).render(Sn.createElement(Lx,{...e}))}catch(e){s.innerHTML='<div style="padding:20px;color:red;font-family:sans-serif"><strong>Erreur configurateur 3D :</strong> '+e.message+"</div>"}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",dm):dm()})();
