(function(){"use strict";if(typeof Cv>"u")var Cv={env:{NODE_ENV:"production"}};function bv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uc={exports:{}},bt={},ph;function Pv(){if(ph)return bt;ph=1;/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function g(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function x(B,Q,ge){this.props=B,this.context=Q,this.refs=b,this.updater=ge||y}x.prototype.isReactComponent={},x.prototype.setState=function(B,Q){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Q,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function S(){}S.prototype=x.prototype;function P(B,Q,ge){this.props=B,this.context=Q,this.refs=b,this.updater=ge||y}var N=P.prototype=new S;N.constructor=P,E(N,x.prototype),N.isPureReactComponent=!0;var L=Array.isArray,I=Object.prototype.hasOwnProperty,R={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function A(B,Q,ge){var Ie,Ue={},se=null,Se=null;if(Q!=null)for(Ie in Q.ref!==void 0&&(Se=Q.ref),Q.key!==void 0&&(se=""+Q.key),Q)I.call(Q,Ie)&&!O.hasOwnProperty(Ie)&&(Ue[Ie]=Q[Ie]);var U=arguments.length-2;if(U===1)Ue.children=ge;else if(1<U){for(var ye=Array(U),We=0;We<U;We++)ye[We]=arguments[We+2];Ue.children=ye}if(B&&B.defaultProps)for(Ie in U=B.defaultProps,U)Ue[Ie]===void 0&&(Ue[Ie]=U[Ie]);return{$$typeof:s,type:B,key:se,ref:Se,props:Ue,_owner:R.current}}function F(B,Q){return{$$typeof:s,type:B.type,key:Q,ref:B.ref,props:B.props,_owner:B._owner}}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function G(B){var Q={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ge){return Q[ge]})}var Z=/\/+/g;function ae(B,Q){return typeof B=="object"&&B!==null&&B.key!=null?G(""+B.key):Q.toString(36)}function de(B,Q,ge,Ie,Ue){var se=typeof B;(se==="undefined"||se==="boolean")&&(B=null);var Se=!1;if(B===null)Se=!0;else switch(se){case"string":case"number":Se=!0;break;case"object":switch(B.$$typeof){case s:case e:Se=!0}}if(Se)return Se=B,Ue=Ue(Se),B=Ie===""?"."+ae(Se,0):Ie,L(Ue)?(ge="",B!=null&&(ge=B.replace(Z,"$&/")+"/"),de(Ue,Q,ge,"",function(We){return We})):Ue!=null&&(H(Ue)&&(Ue=F(Ue,ge+(!Ue.key||Se&&Se.key===Ue.key?"":(""+Ue.key).replace(Z,"$&/")+"/")+B)),Q.push(Ue)),1;if(Se=0,Ie=Ie===""?".":Ie+":",L(B))for(var U=0;U<B.length;U++){se=B[U];var ye=Ie+ae(se,U);Se+=de(se,Q,ge,ye,Ue)}else if(ye=g(B),typeof ye=="function")for(B=ye.call(B),U=0;!(se=B.next()).done;)se=se.value,ye=Ie+ae(se,U++),Se+=de(se,Q,ge,ye,Ue);else if(se==="object")throw Q=String(B),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Se}function X(B,Q,ge){if(B==null)return B;var Ie=[],Ue=0;return de(B,Ie,"","",function(se){return Q.call(ge,se,Ue++)}),Ie}function $(B){if(B._status===-1){var Q=B._result;Q=Q(),Q.then(function(ge){(B._status===0||B._status===-1)&&(B._status=1,B._result=ge)},function(ge){(B._status===0||B._status===-1)&&(B._status=2,B._result=ge)}),B._status===-1&&(B._status=0,B._result=Q)}if(B._status===1)return B._result.default;throw B._result}var j={current:null},J={transition:null},oe={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:J,ReactCurrentOwner:R};function re(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:X,forEach:function(B,Q,ge){X(B,function(){Q.apply(this,arguments)},ge)},count:function(B){var Q=0;return X(B,function(){Q++}),Q},toArray:function(B){return X(B,function(Q){return Q})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},bt.Component=x,bt.Fragment=t,bt.Profiler=o,bt.PureComponent=P,bt.StrictMode=r,bt.Suspense=d,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,bt.act=re,bt.cloneElement=function(B,Q,ge){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Ie=E({},B.props),Ue=B.key,se=B.ref,Se=B._owner;if(Q!=null){if(Q.ref!==void 0&&(se=Q.ref,Se=R.current),Q.key!==void 0&&(Ue=""+Q.key),B.type&&B.type.defaultProps)var U=B.type.defaultProps;for(ye in Q)I.call(Q,ye)&&!O.hasOwnProperty(ye)&&(Ie[ye]=Q[ye]===void 0&&U!==void 0?U[ye]:Q[ye])}var ye=arguments.length-2;if(ye===1)Ie.children=ge;else if(1<ye){U=Array(ye);for(var We=0;We<ye;We++)U[We]=arguments[We+2];Ie.children=U}return{$$typeof:s,type:B.type,key:Ue,ref:se,props:Ie,_owner:Se}},bt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},bt.createElement=A,bt.createFactory=function(B){var Q=A.bind(null,B);return Q.type=B,Q},bt.createRef=function(){return{current:null}},bt.forwardRef=function(B){return{$$typeof:f,render:B}},bt.isValidElement=H,bt.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:$}},bt.memo=function(B,Q){return{$$typeof:m,type:B,compare:Q===void 0?null:Q}},bt.startTransition=function(B){var Q=J.transition;J.transition={};try{B()}finally{J.transition=Q}},bt.unstable_act=re,bt.useCallback=function(B,Q){return j.current.useCallback(B,Q)},bt.useContext=function(B){return j.current.useContext(B)},bt.useDebugValue=function(){},bt.useDeferredValue=function(B){return j.current.useDeferredValue(B)},bt.useEffect=function(B,Q){return j.current.useEffect(B,Q)},bt.useId=function(){return j.current.useId()},bt.useImperativeHandle=function(B,Q,ge){return j.current.useImperativeHandle(B,Q,ge)},bt.useInsertionEffect=function(B,Q){return j.current.useInsertionEffect(B,Q)},bt.useLayoutEffect=function(B,Q){return j.current.useLayoutEffect(B,Q)},bt.useMemo=function(B,Q){return j.current.useMemo(B,Q)},bt.useReducer=function(B,Q,ge){return j.current.useReducer(B,Q,ge)},bt.useRef=function(B){return j.current.useRef(B)},bt.useState=function(B){return j.current.useState(B)},bt.useSyncExternalStore=function(B,Q,ge){return j.current.useSyncExternalStore(B,Q,ge)},bt.useTransition=function(){return j.current.useTransition()},bt.version="18.3.1",bt}var mh;function gh(){return mh||(mh=1,Uc.exports=Pv()),Uc.exports}var xe=gh();const fe=bv(xe);var Fa={},Fc={exports:{}},Hn={},Oc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function Lv(){return vh||(vh=1,(function(s){function e(J,oe){var re=J.length;J.push(oe);e:for(;0<re;){var B=re-1>>>1,Q=J[B];if(0<o(Q,oe))J[B]=oe,J[re]=Q,re=B;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var oe=J[0],re=J.pop();if(re!==oe){J[0]=re;e:for(var B=0,Q=J.length,ge=Q>>>1;B<ge;){var Ie=2*(B+1)-1,Ue=J[Ie],se=Ie+1,Se=J[se];if(0>o(Ue,re))se<Q&&0>o(Se,Ue)?(J[B]=Se,J[se]=re,B=se):(J[B]=Ue,J[Ie]=re,B=Ie);else if(se<Q&&0>o(Se,re))J[B]=Se,J[se]=re,B=se;else break e}}return oe}function o(J,oe){var re=J.sortIndex-oe.sortIndex;return re!==0?re:J.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],m=[],p=1,_=null,g=3,y=!1,E=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(J){for(var oe=t(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=J)r(m),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(m)}}function L(J){if(b=!1,N(J),!E)if(t(d)!==null)E=!0,$(I);else{var oe=t(m);oe!==null&&j(L,oe.startTime-J)}}function I(J,oe){E=!1,b&&(b=!1,S(A),A=-1),y=!0;var re=g;try{for(N(oe),_=t(d);_!==null&&(!(_.expirationTime>oe)||J&&!G());){var B=_.callback;if(typeof B=="function"){_.callback=null,g=_.priorityLevel;var Q=B(_.expirationTime<=oe);oe=s.unstable_now(),typeof Q=="function"?_.callback=Q:_===t(d)&&r(d),N(oe)}else r(d);_=t(d)}if(_!==null)var ge=!0;else{var Ie=t(m);Ie!==null&&j(L,Ie.startTime-oe),ge=!1}return ge}finally{_=null,g=re,y=!1}}var R=!1,O=null,A=-1,F=5,H=-1;function G(){return!(s.unstable_now()-H<F)}function Z(){if(O!==null){var J=s.unstable_now();H=J;var oe=!0;try{oe=O(!0,J)}finally{oe?ae():(R=!1,O=null)}}else R=!1}var ae;if(typeof P=="function")ae=function(){P(Z)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,X=de.port2;de.port1.onmessage=Z,ae=function(){X.postMessage(null)}}else ae=function(){x(Z,0)};function $(J){O=J,R||(R=!0,ae())}function j(J,oe){A=x(function(){J(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,$(I))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(J){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var re=g;g=oe;try{return J()}finally{g=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,oe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var re=g;g=J;try{return oe()}finally{g=re}},s.unstable_scheduleCallback=function(J,oe,re){var B=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?B+re:B):re=B,J){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=re+Q,J={id:p++,callback:oe,priorityLevel:J,startTime:re,expirationTime:Q,sortIndex:-1},re>B?(J.sortIndex=re,e(m,J),t(d)===null&&J===t(m)&&(b?(S(A),A=-1):b=!0,j(L,re-B))):(J.sortIndex=Q,e(d,J),E||y||(E=!0,$(I))),J},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(J){var oe=g;return function(){var re=g;g=oe;try{return J.apply(this,arguments)}finally{g=re}}}})(zc)),zc}var _h;function Dv(){return _h||(_h=1,Oc.exports=Lv()),Oc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function Iv(){if(yh)return Hn;yh=1;var s=gh(),e=Dv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function g(n){return d.call(_,n)?!0:d.call(p,n)?!1:m.test(n)?_[n]=!0:(p[n]=!0,!1)}function y(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||y(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,u,h,v,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,P);x[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,P);x[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,P);x[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,a,u){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,u)&&(a=null),u||h===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),R=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),J=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,B;function Q(n){if(B===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+n}var ge=!1;function Ie(n,i){if(!n||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var u=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){u=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){u=ue}n()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var h=ue.stack.split(`
`),v=u.stack.split(`
`),T=h.length-1,z=v.length-1;1<=T&&0<=z&&h[T]!==v[z];)z--;for(;1<=T&&0<=z;T--,z--)if(h[T]!==v[z]){if(T!==1||z!==1)do if(T--,z--,0>z||h[T]!==v[z]){var V=`
`+h[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=z);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function Ue(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case R:return"Portal";case F:return"Profiler";case A:return"StrictMode";case ae:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case H:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case $:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function U(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ye(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=ye(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,v.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ze(n){n._valueTracker||(n._valueTracker=We(n))}function ot(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=ye(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ge(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function je(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function dt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=U(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Nt(n,i){ct(n,i);var a=U(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Re(n,i.type,a):i.hasOwnProperty("defaultValue")&&Re(n,i.type,U(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function mt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Re(n,i,a){(i!=="number"||Ge(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var k=Array.isArray;function At(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+U(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function at(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Et(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(k(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:U(a)}}function Ce(n,i){var a=U(i.value),u=U(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Dt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?D(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,me=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function he(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=he(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var ce=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(n,i){if(i){if(ce[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Fe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function pt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vt=null,Rt=null,W=null;function Ne(n){if(n=xa(n)){if(typeof vt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Kl(i),vt(n.stateNode,n.type,i))}}function _e(n){Rt?W?W.push(n):W=[n]:Rt=n}function Xe(){if(Rt){var n=Rt,i=W;if(W=Rt=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function ze(n,i){return n(i)}function Ee(){}var Qe=!1;function _t(n,i,a){if(Qe)return n(i,a);Qe=!0;try{return ze(n,i,a)}finally{Qe=!1,(Rt!==null||W!==null)&&(Ee(),Xe())}}function Yt(n,i){var a=n.stateNode;if(a===null)return null;var u=Kl(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Bt=!1;if(f)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{Bt=!1}function hi(n,i,a,u,h,v,T,z,V){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(Te){this.onError(Te)}}var ur=!1,no=null,ds=!1,io=null,fr={onError:function(n){ur=!0,no=n}};function ea(n,i,a,u,h,v,T,z,V){ur=!1,no=null,hi.apply(fr,arguments)}function Il(n,i,a,u,h,v,T,z,V){if(ea.apply(this,arguments),ur){if(ur){var ue=no;ur=!1,no=null}else throw Error(t(198));ds||(ds=!0,io=ue)}}function $i(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function hs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ta(n){if($i(n)!==n)throw Error(t(188))}function ro(n){var i=n.alternate;if(!i){if(i=$i(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return ta(h),n;if(v===u)return ta(h),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=v;else{for(var T=!1,z=h.child;z;){if(z===a){T=!0,a=h,u=v;break}if(z===u){T=!0,u=h,a=v;break}z=z.sibling}if(!T){for(z=v.child;z;){if(z===a){T=!0,a=v,u=h;break}if(z===u){T=!0,u=v,a=h;break}z=z.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function na(n){return n=ro(n),n!==null?ia(n):null}function ia(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ia(n);if(i!==null)return i;n=n.sibling}return null}var Nl=e.unstable_scheduleCallback,Ul=e.unstable_cancelCallback,Of=e.unstable_shouldYield,zf=e.unstable_requestPaint,rn=e.unstable_now,Bf=e.unstable_getCurrentPriorityLevel,ra=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,le=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,Be=null;function qe(n){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:yt,et=Math.log,rt=Math.LN2;function yt(n){return n>>>=0,n===0?32:31-(et(n)/rt|0)|0}var St=64,nt=4194304;function Ut(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,v=n.pingedLanes,T=a&268435455;if(T!==0){var z=T&~h;z!==0?u=Ut(z):(v&=T,v!==0&&(u=Ut(v)))}else T=a&~h,T!==0?u=Ut(T):v!==0&&(u=Ut(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,v=i&-i,h>=v||h===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Oe(i),h=1<<a,u|=n[a],i&=~h;return u}function Qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Oe(v),z=1<<T,V=h[T];V===-1?((z&a)===0||(z&u)!==0)&&(h[T]=Qt(z,i)):V<=i&&(n.expiredLanes|=z),v&=~z}}function fn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ye(){var n=St;return St<<=1,(St&4194240)===0&&(St=64),n}function wn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ct(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Oe(i),n[i]=a}function Xn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Oe(a),v=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~v}}function Yn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Oe(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var Lt=0;function dr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ht,Kt,Ti,Xt,Ai,qi=!1,ps=[],Lr=null,Dr=null,Ir=null,sa=new Map,oa=new Map,Nr=[],PE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f0(n,i){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(i.pointerId)}}function aa(n,i,a,u,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[h]},i!==null&&(i=xa(i),i!==null&&Kt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function LE(n,i,a,u,h){switch(i){case"focusin":return Lr=aa(Lr,n,i,a,u,h),!0;case"dragenter":return Dr=aa(Dr,n,i,a,u,h),!0;case"mouseover":return Ir=aa(Ir,n,i,a,u,h),!0;case"pointerover":var v=h.pointerId;return sa.set(v,aa(sa.get(v)||null,n,i,a,u,h)),!0;case"gotpointercapture":return v=h.pointerId,oa.set(v,aa(oa.get(v)||null,n,i,a,u,h)),!0}return!1}function d0(n){var i=ms(n.target);if(i!==null){var a=$i(i);if(a!==null){if(i=a.tag,i===13){if(i=hs(a),i!==null){n.blockedOn=i,Ai(n.priority,function(){Ti(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Fl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Gf(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Le=u,a.target.dispatchEvent(u),Le=null}else return i=xa(a),i!==null&&Kt(i),n.blockedOn=a,!1;i.shift()}return!0}function h0(n,i,a){Fl(n)&&a.delete(i)}function DE(){qi=!1,Lr!==null&&Fl(Lr)&&(Lr=null),Dr!==null&&Fl(Dr)&&(Dr=null),Ir!==null&&Fl(Ir)&&(Ir=null),sa.forEach(h0),oa.forEach(h0)}function la(n,i){n.blockedOn===i&&(n.blockedOn=null,qi||(qi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,DE)))}function ca(n){function i(h){return la(h,n)}if(0<ps.length){la(ps[0],n);for(var a=1;a<ps.length;a++){var u=ps[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Lr!==null&&la(Lr,n),Dr!==null&&la(Dr,n),Ir!==null&&la(Ir,n),sa.forEach(i),oa.forEach(i),a=0;a<Nr.length;a++)u=Nr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Nr.length&&(a=Nr[0],a.blockedOn===null);)d0(a),a.blockedOn===null&&Nr.shift()}var so=L.ReactCurrentBatchConfig,Ol=!0;function IE(n,i,a,u){var h=Lt,v=so.transition;so.transition=null;try{Lt=1,kf(n,i,a,u)}finally{Lt=h,so.transition=v}}function NE(n,i,a,u){var h=Lt,v=so.transition;so.transition=null;try{Lt=4,kf(n,i,a,u)}finally{Lt=h,so.transition=v}}function kf(n,i,a,u){if(Ol){var h=Gf(n,i,a,u);if(h===null)rd(n,i,u,zl,a),f0(n,u);else if(LE(h,n,i,a,u))u.stopPropagation();else if(f0(n,u),i&4&&-1<PE.indexOf(n)){for(;h!==null;){var v=xa(h);if(v!==null&&Ht(v),v=Gf(n,i,a,u),v===null&&rd(n,i,u,zl,a),v===h)break;h=v}h!==null&&u.stopPropagation()}else rd(n,i,u,null,a)}}var zl=null;function Gf(n,i,a,u){if(zl=null,n=pt(u),n=ms(n),n!==null)if(i=$i(n),i===null)n=null;else if(a=i.tag,a===13){if(n=hs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return zl=n,null}function p0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bf()){case ra:return 1;case C:return 4;case q:case le:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Ur=null,Hf=null,Bl=null;function m0(){if(Bl)return Bl;var n,i=Hf,a=i.length,u,h="value"in Ur?Ur.value:Ur.textContent,v=h.length;for(n=0;n<a&&i[n]===h[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===h[v-u];u++);return Bl=h.slice(n,1<u?1-u:void 0)}function kl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Gl(){return!0}function g0(){return!1}function si(n){function i(a,u,h,v,T){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(v):v[z]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Gl:g0,this.isPropagationStopped=g0,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),i}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=si(oo),ua=re({},oo,{view:0,detail:0}),UE=si(ua),Wf,Xf,fa,Hl=re({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fa&&(fa&&n.type==="mousemove"?(Wf=n.screenX-fa.screenX,Xf=n.screenY-fa.screenY):Xf=Wf=0,fa=n),Wf)},movementY:function(n){return"movementY"in n?n.movementY:Xf}}),v0=si(Hl),FE=re({},Hl,{dataTransfer:0}),OE=si(FE),zE=re({},ua,{relatedTarget:0}),Yf=si(zE),BE=re({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),kE=si(BE),GE=re({},oo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),HE=si(GE),VE=re({},oo,{data:0}),_0=si(VE),WE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $E(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=YE[n])?!!i[n]:!1}function $f(){return $E}var qE=re({},ua,{key:function(n){if(n.key){var i=WE[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=kl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?XE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(n){return n.type==="keypress"?kl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?kl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jE=si(qE),KE=re({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y0=si(KE),ZE=re({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),JE=si(ZE),QE=re({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ew=si(QE),tw=re({},Hl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nw=si(tw),iw=[9,13,27,32],qf=f&&"CompositionEvent"in window,da=null;f&&"documentMode"in document&&(da=document.documentMode);var rw=f&&"TextEvent"in window&&!da,S0=f&&(!qf||da&&8<da&&11>=da),x0=" ",M0=!1;function E0(n,i){switch(n){case"keyup":return iw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ao=!1;function sw(n,i){switch(n){case"compositionend":return w0(i);case"keypress":return i.which!==32?null:(M0=!0,x0);case"textInput":return n=i.data,n===x0&&M0?null:n;default:return null}}function ow(n,i){if(ao)return n==="compositionend"||!qf&&E0(n,i)?(n=m0(),Bl=Hf=Ur=null,ao=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return S0&&i.locale!=="ko"?null:i.data;default:return null}}var aw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!aw[n.type]:i==="textarea"}function A0(n,i,a,u){_e(u),i=$l(i,"onChange"),0<i.length&&(a=new Vf("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var ha=null,pa=null;function lw(n){W0(n,0)}function Vl(n){var i=ho(n);if(ot(i))return n}function cw(n,i){if(n==="change")return i}var R0=!1;if(f){var jf;if(f){var Kf="oninput"in document;if(!Kf){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),Kf=typeof C0.oninput=="function"}jf=Kf}else jf=!1;R0=jf&&(!document.documentMode||9<document.documentMode)}function b0(){ha&&(ha.detachEvent("onpropertychange",P0),pa=ha=null)}function P0(n){if(n.propertyName==="value"&&Vl(pa)){var i=[];A0(i,pa,n,pt(n)),_t(lw,i)}}function uw(n,i,a){n==="focusin"?(b0(),ha=i,pa=a,ha.attachEvent("onpropertychange",P0)):n==="focusout"&&b0()}function fw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vl(pa)}function dw(n,i){if(n==="click")return Vl(i)}function hw(n,i){if(n==="input"||n==="change")return Vl(i)}function pw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ri=typeof Object.is=="function"?Object.is:pw;function ma(n,i){if(Ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!d.call(i,h)||!Ri(n[h],i[h]))return!1}return!0}function L0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function D0(n,i){var a=L0(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=L0(a)}}function I0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?I0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function N0(){for(var n=window,i=Ge();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ge(n.document)}return i}function Zf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function mw(n){var i=N0(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&I0(a.ownerDocument.documentElement,a)){if(u!==null&&Zf(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,v=Math.min(u.start,h);u=u.end===void 0?v:Math.min(u.end,h),!n.extend&&v>u&&(h=u,u=v,v=h),h=D0(a,v);var T=D0(a,u);h&&T&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gw=f&&"documentMode"in document&&11>=document.documentMode,lo=null,Jf=null,ga=null,Qf=!1;function U0(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qf||lo==null||lo!==Ge(u)||(u=lo,"selectionStart"in u&&Zf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ga&&ma(ga,u)||(ga=u,u=$l(Jf,"onSelect"),0<u.length&&(i=new Vf("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=lo)))}function Wl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var co={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},ed={},F0={};f&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function Xl(n){if(ed[n])return ed[n];if(!co[n])return n;var i=co[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in F0)return ed[n]=i[a];return n}var O0=Xl("animationend"),z0=Xl("animationiteration"),B0=Xl("animationstart"),k0=Xl("transitionend"),G0=new Map,H0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,i){G0.set(n,i),l(i,[n])}for(var td=0;td<H0.length;td++){var nd=H0[td],vw=nd.toLowerCase(),_w=nd[0].toUpperCase()+nd.slice(1);Fr(vw,"on"+_w)}Fr(O0,"onAnimationEnd"),Fr(z0,"onAnimationIteration"),Fr(B0,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(k0,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function V0(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Il(u,i,void 0,n),n.currentTarget=null}function W0(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var T=u.length-1;0<=T;T--){var z=u[T],V=z.instance,ue=z.currentTarget;if(z=z.listener,V!==v&&h.isPropagationStopped())break e;V0(h,z,ue),v=V}else for(T=0;T<u.length;T++){if(z=u[T],V=z.instance,ue=z.currentTarget,z=z.listener,V!==v&&h.isPropagationStopped())break e;V0(h,z,ue),v=V}}}if(ds)throw n=io,ds=!1,io=null,n}function Zt(n,i){var a=i[ud];a===void 0&&(a=i[ud]=new Set);var u=n+"__bubble";a.has(u)||(X0(i,n,2,!1),a.add(u))}function id(n,i,a){var u=0;i&&(u|=4),X0(a,n,u,i)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function _a(n){if(!n[Yl]){n[Yl]=!0,r.forEach(function(a){a!=="selectionchange"&&(yw.has(a)||id(a,!1,n),id(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Yl]||(i[Yl]=!0,id("selectionchange",!1,i))}}function X0(n,i,a,u){switch(p0(i)){case 1:var h=IE;break;case 4:h=NE;break;default:h=kf}a=h.bind(null,i,a,n),h=void 0,!Bt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function rd(n,i,a,u,h){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var z=u.stateNode.containerInfo;if(z===h||z.nodeType===8&&z.parentNode===h)break;if(T===4)for(T=u.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;T=T.return}for(;z!==null;){if(T=ms(z),T===null)return;if(V=T.tag,V===5||V===6){u=v=T;continue e}z=z.parentNode}}u=u.return}_t(function(){var ue=v,Te=pt(a),Ae=[];e:{var we=G0.get(n);if(we!==void 0){var $e=Vf,Je=n;switch(n){case"keypress":if(kl(a)===0)break e;case"keydown":case"keyup":$e=jE;break;case"focusin":Je="focus",$e=Yf;break;case"focusout":Je="blur",$e=Yf;break;case"beforeblur":case"afterblur":$e=Yf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=v0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=OE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=JE;break;case O0:case z0:case B0:$e=kE;break;case k0:$e=ew;break;case"scroll":$e=UE;break;case"wheel":$e=nw;break;case"copy":case"cut":case"paste":$e=HE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=y0}var tt=(i&4)!==0,cn=!tt&&n==="scroll",ee=tt?we!==null?we+"Capture":null:we;tt=[];for(var Y=ue,ie;Y!==null;){ie=Y;var De=ie.stateNode;if(ie.tag===5&&De!==null&&(ie=De,ee!==null&&(De=Yt(Y,ee),De!=null&&tt.push(ya(Y,De,ie)))),cn)break;Y=Y.return}0<tt.length&&(we=new $e(we,Je,null,a,Te),Ae.push({event:we,listeners:tt}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",we&&a!==Le&&(Je=a.relatedTarget||a.fromElement)&&(ms(Je)||Je[hr]))break e;if(($e||we)&&(we=Te.window===Te?Te:(we=Te.ownerDocument)?we.defaultView||we.parentWindow:window,$e?(Je=a.relatedTarget||a.toElement,$e=ue,Je=Je?ms(Je):null,Je!==null&&(cn=$i(Je),Je!==cn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):($e=null,Je=ue),$e!==Je)){if(tt=v0,De="onMouseLeave",ee="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(tt=y0,De="onPointerLeave",ee="onPointerEnter",Y="pointer"),cn=$e==null?we:ho($e),ie=Je==null?we:ho(Je),we=new tt(De,Y+"leave",$e,a,Te),we.target=cn,we.relatedTarget=ie,De=null,ms(Te)===ue&&(tt=new tt(ee,Y+"enter",Je,a,Te),tt.target=ie,tt.relatedTarget=cn,De=tt),cn=De,$e&&Je)t:{for(tt=$e,ee=Je,Y=0,ie=tt;ie;ie=uo(ie))Y++;for(ie=0,De=ee;De;De=uo(De))ie++;for(;0<Y-ie;)tt=uo(tt),Y--;for(;0<ie-Y;)ee=uo(ee),ie--;for(;Y--;){if(tt===ee||ee!==null&&tt===ee.alternate)break t;tt=uo(tt),ee=uo(ee)}tt=null}else tt=null;$e!==null&&Y0(Ae,we,$e,tt,!1),Je!==null&&cn!==null&&Y0(Ae,cn,Je,tt,!0)}}e:{if(we=ue?ho(ue):window,$e=we.nodeName&&we.nodeName.toLowerCase(),$e==="select"||$e==="input"&&we.type==="file")var it=cw;else if(T0(we))if(R0)it=hw;else{it=fw;var ut=uw}else($e=we.nodeName)&&$e.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(it=dw);if(it&&(it=it(n,ue))){A0(Ae,it,a,Te);break e}ut&&ut(n,we,ue),n==="focusout"&&(ut=we._wrapperState)&&ut.controlled&&we.type==="number"&&Re(we,"number",we.value)}switch(ut=ue?ho(ue):window,n){case"focusin":(T0(ut)||ut.contentEditable==="true")&&(lo=ut,Jf=ue,ga=null);break;case"focusout":ga=Jf=lo=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,U0(Ae,a,Te);break;case"selectionchange":if(gw)break;case"keydown":case"keyup":U0(Ae,a,Te)}var ft;if(qf)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else ao?E0(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(S0&&a.locale!=="ko"&&(ao||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&ao&&(ft=m0()):(Ur=Te,Hf="value"in Ur?Ur.value:Ur.textContent,ao=!0)),ut=$l(ue,gt),0<ut.length&&(gt=new _0(gt,n,null,a,Te),Ae.push({event:gt,listeners:ut}),ft?gt.data=ft:(ft=w0(a),ft!==null&&(gt.data=ft)))),(ft=rw?sw(n,a):ow(n,a))&&(ue=$l(ue,"onBeforeInput"),0<ue.length&&(Te=new _0("onBeforeInput","beforeinput",null,a,Te),Ae.push({event:Te,listeners:ue}),Te.data=ft))}W0(Ae,i)})}function ya(n,i,a){return{instance:n,listener:i,currentTarget:a}}function $l(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=Yt(n,a),v!=null&&u.unshift(ya(n,v,h)),v=Yt(n,i),v!=null&&u.push(ya(n,v,h))),n=n.return}return u}function uo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Y0(n,i,a,u,h){for(var v=i._reactName,T=[];a!==null&&a!==u;){var z=a,V=z.alternate,ue=z.stateNode;if(V!==null&&V===u)break;z.tag===5&&ue!==null&&(z=ue,h?(V=Yt(a,v),V!=null&&T.unshift(ya(a,V,z))):h||(V=Yt(a,v),V!=null&&T.push(ya(a,V,z)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Sw=/\r\n?/g,xw=/\u0000|\uFFFD/g;function $0(n){return(typeof n=="string"?n:""+n).replace(Sw,`
`).replace(xw,"")}function ql(n,i,a){if(i=$0(i),$0(n)!==i&&a)throw Error(t(425))}function jl(){}var sd=null,od=null;function ad(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,Mw=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,Ew=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(n){return q0.resolve(null).then(n).catch(ww)}:ld;function ww(n){setTimeout(function(){throw n})}function cd(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),ca(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);ca(i)}function Or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function j0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var fo=Math.random().toString(36).slice(2),ji="__reactFiber$"+fo,Sa="__reactProps$"+fo,hr="__reactContainer$"+fo,ud="__reactEvents$"+fo,Tw="__reactListeners$"+fo,Aw="__reactHandles$"+fo;function ms(n){var i=n[ji];if(i)return i;for(var a=n.parentNode;a;){if(i=a[hr]||a[ji]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=j0(n);n!==null;){if(a=n[ji])return a;n=j0(n)}return i}n=a,a=n.parentNode}return null}function xa(n){return n=n[ji]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ho(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Kl(n){return n[Sa]||null}var fd=[],po=-1;function zr(n){return{current:n}}function Jt(n){0>po||(n.current=fd[po],fd[po]=null,po--)}function jt(n,i){po++,fd[po]=n.current,n.current=i}var Br={},Dn=zr(Br),$n=zr(!1),gs=Br;function mo(n,i){var a=n.type.contextTypes;if(!a)return Br;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function qn(n){return n=n.childContextTypes,n!=null}function Zl(){Jt($n),Jt(Dn)}function K0(n,i,a){if(Dn.current!==Br)throw Error(t(168));jt(Dn,i),jt($n,a)}function Z0(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,Se(n)||"Unknown",h));return re({},a,u)}function Jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,gs=Dn.current,jt(Dn,n),jt($n,$n.current),!0}function J0(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Z0(n,i,gs),u.__reactInternalMemoizedMergedChildContext=n,Jt($n),Jt(Dn),jt(Dn,n)):Jt($n),jt($n,a)}var pr=null,Ql=!1,dd=!1;function Q0(n){pr===null?pr=[n]:pr.push(n)}function Rw(n){Ql=!0,Q0(n)}function kr(){if(!dd&&pr!==null){dd=!0;var n=0,i=Lt;try{var a=pr;for(Lt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}pr=null,Ql=!1}catch(h){throw pr!==null&&(pr=pr.slice(n+1)),Nl(ra,kr),h}finally{Lt=i,dd=!1}}return null}var go=[],vo=0,ec=null,tc=0,pi=[],mi=0,vs=null,mr=1,gr="";function _s(n,i){go[vo++]=tc,go[vo++]=ec,ec=n,tc=i}function eg(n,i,a){pi[mi++]=mr,pi[mi++]=gr,pi[mi++]=vs,vs=n;var u=mr;n=gr;var h=32-Oe(u)-1;u&=~(1<<h),a+=1;var v=32-Oe(i)+h;if(30<v){var T=h-h%5;v=(u&(1<<T)-1).toString(32),u>>=T,h-=T,mr=1<<32-Oe(i)+h|a<<h|u,gr=v+n}else mr=1<<v|a<<h|u,gr=n}function hd(n){n.return!==null&&(_s(n,1),eg(n,1,0))}function pd(n){for(;n===ec;)ec=go[--vo],go[vo]=null,tc=go[--vo],go[vo]=null;for(;n===vs;)vs=pi[--mi],pi[mi]=null,gr=pi[--mi],pi[mi]=null,mr=pi[--mi],pi[mi]=null}var oi=null,ai=null,en=!1,Ci=null;function tg(n,i){var a=yi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ng(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,oi=n,ai=Or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,oi=n,ai=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=vs!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=yi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,oi=n,ai=null,!0):!1;default:return!1}}function md(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gd(n){if(en){var i=ai;if(i){var a=i;if(!ng(n,i)){if(md(n))throw Error(t(418));i=Or(a.nextSibling);var u=oi;i&&ng(n,i)?tg(u,a):(n.flags=n.flags&-4097|2,en=!1,oi=n)}}else{if(md(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,oi=n}}}function ig(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function nc(n){if(n!==oi)return!1;if(!en)return ig(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!ad(n.type,n.memoizedProps)),i&&(i=ai)){if(md(n))throw rg(),Error(t(418));for(;i;)tg(n,i),i=Or(i.nextSibling)}if(ig(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ai=Or(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ai=null}}else ai=oi?Or(n.stateNode.nextSibling):null;return!0}function rg(){for(var n=ai;n;)n=Or(n.nextSibling)}function _o(){ai=oi=null,en=!1}function vd(n){Ci===null?Ci=[n]:Ci.push(n)}var Cw=L.ReactCurrentBatchConfig;function Ma(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(T){var z=h.refs;T===null?delete z[v]:z[v]=T},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ic(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function sg(n){var i=n._init;return i(n._payload)}function og(n){function i(ee,Y){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[Y],ee.flags|=16):ie.push(Y)}}function a(ee,Y){if(!n)return null;for(;Y!==null;)i(ee,Y),Y=Y.sibling;return null}function u(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function h(ee,Y){return ee=qr(ee,Y),ee.index=0,ee.sibling=null,ee}function v(ee,Y,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<Y?(ee.flags|=2,Y):ie):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function T(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function z(ee,Y,ie,De){return Y===null||Y.tag!==6?(Y=lh(ie,ee.mode,De),Y.return=ee,Y):(Y=h(Y,ie),Y.return=ee,Y)}function V(ee,Y,ie,De){var it=ie.type;return it===O?Te(ee,Y,ie.props.children,De,ie.key):Y!==null&&(Y.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&sg(it)===Y.type)?(De=h(Y,ie.props),De.ref=Ma(ee,Y,ie),De.return=ee,De):(De=Rc(ie.type,ie.key,ie.props,null,ee.mode,De),De.ref=Ma(ee,Y,ie),De.return=ee,De)}function ue(ee,Y,ie,De){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ie.containerInfo||Y.stateNode.implementation!==ie.implementation?(Y=ch(ie,ee.mode,De),Y.return=ee,Y):(Y=h(Y,ie.children||[]),Y.return=ee,Y)}function Te(ee,Y,ie,De,it){return Y===null||Y.tag!==7?(Y=As(ie,ee.mode,De,it),Y.return=ee,Y):(Y=h(Y,ie),Y.return=ee,Y)}function Ae(ee,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=lh(""+Y,ee.mode,ie),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case I:return ie=Rc(Y.type,Y.key,Y.props,null,ee.mode,ie),ie.ref=Ma(ee,null,Y),ie.return=ee,ie;case R:return Y=ch(Y,ee.mode,ie),Y.return=ee,Y;case $:var De=Y._init;return Ae(ee,De(Y._payload),ie)}if(k(Y)||oe(Y))return Y=As(Y,ee.mode,ie,null),Y.return=ee,Y;ic(ee,Y)}return null}function we(ee,Y,ie,De){var it=Y!==null?Y.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return it!==null?null:z(ee,Y,""+ie,De);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:return ie.key===it?V(ee,Y,ie,De):null;case R:return ie.key===it?ue(ee,Y,ie,De):null;case $:return it=ie._init,we(ee,Y,it(ie._payload),De)}if(k(ie)||oe(ie))return it!==null?null:Te(ee,Y,ie,De,null);ic(ee,ie)}return null}function $e(ee,Y,ie,De,it){if(typeof De=="string"&&De!==""||typeof De=="number")return ee=ee.get(ie)||null,z(Y,ee,""+De,it);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case I:return ee=ee.get(De.key===null?ie:De.key)||null,V(Y,ee,De,it);case R:return ee=ee.get(De.key===null?ie:De.key)||null,ue(Y,ee,De,it);case $:var ut=De._init;return $e(ee,Y,ie,ut(De._payload),it)}if(k(De)||oe(De))return ee=ee.get(ie)||null,Te(Y,ee,De,it,null);ic(Y,De)}return null}function Je(ee,Y,ie,De){for(var it=null,ut=null,ft=Y,gt=Y=0,xn=null;ft!==null&&gt<ie.length;gt++){ft.index>gt?(xn=ft,ft=null):xn=ft.sibling;var kt=we(ee,ft,ie[gt],De);if(kt===null){ft===null&&(ft=xn);break}n&&ft&&kt.alternate===null&&i(ee,ft),Y=v(kt,Y,gt),ut===null?it=kt:ut.sibling=kt,ut=kt,ft=xn}if(gt===ie.length)return a(ee,ft),en&&_s(ee,gt),it;if(ft===null){for(;gt<ie.length;gt++)ft=Ae(ee,ie[gt],De),ft!==null&&(Y=v(ft,Y,gt),ut===null?it=ft:ut.sibling=ft,ut=ft);return en&&_s(ee,gt),it}for(ft=u(ee,ft);gt<ie.length;gt++)xn=$e(ft,ee,gt,ie[gt],De),xn!==null&&(n&&xn.alternate!==null&&ft.delete(xn.key===null?gt:xn.key),Y=v(xn,Y,gt),ut===null?it=xn:ut.sibling=xn,ut=xn);return n&&ft.forEach(function(jr){return i(ee,jr)}),en&&_s(ee,gt),it}function tt(ee,Y,ie,De){var it=oe(ie);if(typeof it!="function")throw Error(t(150));if(ie=it.call(ie),ie==null)throw Error(t(151));for(var ut=it=null,ft=Y,gt=Y=0,xn=null,kt=ie.next();ft!==null&&!kt.done;gt++,kt=ie.next()){ft.index>gt?(xn=ft,ft=null):xn=ft.sibling;var jr=we(ee,ft,kt.value,De);if(jr===null){ft===null&&(ft=xn);break}n&&ft&&jr.alternate===null&&i(ee,ft),Y=v(jr,Y,gt),ut===null?it=jr:ut.sibling=jr,ut=jr,ft=xn}if(kt.done)return a(ee,ft),en&&_s(ee,gt),it;if(ft===null){for(;!kt.done;gt++,kt=ie.next())kt=Ae(ee,kt.value,De),kt!==null&&(Y=v(kt,Y,gt),ut===null?it=kt:ut.sibling=kt,ut=kt);return en&&_s(ee,gt),it}for(ft=u(ee,ft);!kt.done;gt++,kt=ie.next())kt=$e(ft,ee,gt,kt.value,De),kt!==null&&(n&&kt.alternate!==null&&ft.delete(kt.key===null?gt:kt.key),Y=v(kt,Y,gt),ut===null?it=kt:ut.sibling=kt,ut=kt);return n&&ft.forEach(function(aT){return i(ee,aT)}),en&&_s(ee,gt),it}function cn(ee,Y,ie,De){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:e:{for(var it=ie.key,ut=Y;ut!==null;){if(ut.key===it){if(it=ie.type,it===O){if(ut.tag===7){a(ee,ut.sibling),Y=h(ut,ie.props.children),Y.return=ee,ee=Y;break e}}else if(ut.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&sg(it)===ut.type){a(ee,ut.sibling),Y=h(ut,ie.props),Y.ref=Ma(ee,ut,ie),Y.return=ee,ee=Y;break e}a(ee,ut);break}else i(ee,ut);ut=ut.sibling}ie.type===O?(Y=As(ie.props.children,ee.mode,De,ie.key),Y.return=ee,ee=Y):(De=Rc(ie.type,ie.key,ie.props,null,ee.mode,De),De.ref=Ma(ee,Y,ie),De.return=ee,ee=De)}return T(ee);case R:e:{for(ut=ie.key;Y!==null;){if(Y.key===ut)if(Y.tag===4&&Y.stateNode.containerInfo===ie.containerInfo&&Y.stateNode.implementation===ie.implementation){a(ee,Y.sibling),Y=h(Y,ie.children||[]),Y.return=ee,ee=Y;break e}else{a(ee,Y);break}else i(ee,Y);Y=Y.sibling}Y=ch(ie,ee.mode,De),Y.return=ee,ee=Y}return T(ee);case $:return ut=ie._init,cn(ee,Y,ut(ie._payload),De)}if(k(ie))return Je(ee,Y,ie,De);if(oe(ie))return tt(ee,Y,ie,De);ic(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,Y!==null&&Y.tag===6?(a(ee,Y.sibling),Y=h(Y,ie),Y.return=ee,ee=Y):(a(ee,Y),Y=lh(ie,ee.mode,De),Y.return=ee,ee=Y),T(ee)):a(ee,Y)}return cn}var yo=og(!0),ag=og(!1),rc=zr(null),sc=null,So=null,_d=null;function yd(){_d=So=sc=null}function Sd(n){var i=rc.current;Jt(rc),n._currentValue=i}function xd(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function xo(n,i){sc=n,_d=So=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(jn=!0),n.firstContext=null)}function gi(n){var i=n._currentValue;if(_d!==n)if(n={context:n,memoizedValue:i,next:null},So===null){if(sc===null)throw Error(t(308));So=n,sc.dependencies={lanes:0,firstContext:n}}else So=So.next=n;return i}var ys=null;function Md(n){ys===null?ys=[n]:ys.push(n)}function lg(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,Md(i)):(a.next=h.next,h.next=a),i.interleaved=a,vr(n,u)}function vr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function Ed(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Hr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,vr(n,a)}return h=u.interleaved,h===null?(i.next=i,Md(u)):(i.next=h.next,h.next=i),u.interleaved=i,vr(n,a)}function oc(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Yn(n,a)}}function ug(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=T:v=v.next=T,a=a.next}while(a!==null);v===null?h=v=i:v=v.next=i}else h=v=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ac(n,i,a,u){var h=n.updateQueue;Gr=!1;var v=h.firstBaseUpdate,T=h.lastBaseUpdate,z=h.shared.pending;if(z!==null){h.shared.pending=null;var V=z,ue=V.next;V.next=null,T===null?v=ue:T.next=ue,T=V;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,z=Te.lastBaseUpdate,z!==T&&(z===null?Te.firstBaseUpdate=ue:z.next=ue,Te.lastBaseUpdate=V))}if(v!==null){var Ae=h.baseState;T=0,Te=ue=V=null,z=v;do{var we=z.lane,$e=z.eventTime;if((u&we)===we){Te!==null&&(Te=Te.next={eventTime:$e,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Je=n,tt=z;switch(we=i,$e=a,tt.tag){case 1:if(Je=tt.payload,typeof Je=="function"){Ae=Je.call($e,Ae,we);break e}Ae=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=tt.payload,we=typeof Je=="function"?Je.call($e,Ae,we):Je,we==null)break e;Ae=re({},Ae,we);break e;case 2:Gr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,we=h.effects,we===null?h.effects=[z]:we.push(z))}else $e={eventTime:$e,lane:we,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Te===null?(ue=Te=$e,V=Ae):Te=Te.next=$e,T|=we;if(z=z.next,z===null){if(z=h.shared.pending,z===null)break;we=z,z=we.next,we.next=null,h.lastBaseUpdate=we,h.shared.pending=null}}while(!0);if(Te===null&&(V=Ae),h.baseState=V,h.firstBaseUpdate=ue,h.lastBaseUpdate=Te,i=h.shared.interleaved,i!==null){h=i;do T|=h.lane,h=h.next;while(h!==i)}else v===null&&(h.shared.lanes=0);Ms|=T,n.lanes=T,n.memoizedState=Ae}}function fg(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Ea={},Ki=zr(Ea),wa=zr(Ea),Ta=zr(Ea);function Ss(n){if(n===Ea)throw Error(t(174));return n}function wd(n,i){switch(jt(Ta,i),jt(wa,n),jt(Ki,Ea),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}Jt(Ki),jt(Ki,i)}function Mo(){Jt(Ki),Jt(wa),Jt(Ta)}function dg(n){Ss(Ta.current);var i=Ss(Ki.current),a=w(i,n.type);i!==a&&(jt(wa,n),jt(Ki,a))}function Td(n){wa.current===n&&(Jt(Ki),Jt(wa))}var sn=zr(0);function lc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ad=[];function Rd(){for(var n=0;n<Ad.length;n++)Ad[n]._workInProgressVersionPrimary=null;Ad.length=0}var cc=L.ReactCurrentDispatcher,Cd=L.ReactCurrentBatchConfig,xs=0,on=null,mn=null,yn=null,uc=!1,Aa=!1,Ra=0,bw=0;function In(){throw Error(t(321))}function bd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ri(n[a],i[a]))return!1;return!0}function Pd(n,i,a,u,h,v){if(xs=v,on=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,cc.current=n===null||n.memoizedState===null?Iw:Nw,n=a(u,h),Aa){v=0;do{if(Aa=!1,Ra=0,25<=v)throw Error(t(301));v+=1,yn=mn=null,i.updateQueue=null,cc.current=Uw,n=a(u,h)}while(Aa)}if(cc.current=hc,i=mn!==null&&mn.next!==null,xs=0,yn=mn=on=null,uc=!1,i)throw Error(t(300));return n}function Ld(){var n=Ra!==0;return Ra=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?on.memoizedState=yn=n:yn=yn.next=n,yn}function vi(){if(mn===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=yn===null?on.memoizedState:yn.next;if(i!==null)yn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?on.memoizedState=yn=n:yn=yn.next=n}return yn}function Ca(n,i){return typeof i=="function"?i(n):i}function Dd(n){var i=vi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=mn,h=u.baseQueue,v=a.pending;if(v!==null){if(h!==null){var T=h.next;h.next=v.next,v.next=T}u.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,u=u.baseState;var z=T=null,V=null,ue=v;do{var Te=ue.lane;if((xs&Te)===Te)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:n(u,ue.action);else{var Ae={lane:Te,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(z=V=Ae,T=u):V=V.next=Ae,on.lanes|=Te,Ms|=Te}ue=ue.next}while(ue!==null&&ue!==v);V===null?T=u:V.next=z,Ri(u,i.memoizedState)||(jn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=V,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do v=h.lane,on.lanes|=v,Ms|=v,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Id(n){var i=vi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,v=i.memoizedState;if(h!==null){a.pending=null;var T=h=h.next;do v=n(v,T.action),T=T.next;while(T!==h);Ri(v,i.memoizedState)||(jn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function hg(){}function pg(n,i){var a=on,u=vi(),h=i(),v=!Ri(u.memoizedState,h);if(v&&(u.memoizedState=h,jn=!0),u=u.queue,Nd(vg.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||yn!==null&&yn.memoizedState.tag&1){if(a.flags|=2048,ba(9,gg.bind(null,a,u,h,i),void 0,null),Sn===null)throw Error(t(349));(xs&30)!==0||mg(a,i,h)}return h}function mg(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function gg(n,i,a,u){i.value=a,i.getSnapshot=u,_g(i)&&yg(n)}function vg(n,i,a){return a(function(){_g(i)&&yg(n)})}function _g(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ri(n,a)}catch{return!0}}function yg(n){var i=vr(n,1);i!==null&&Di(i,n,1,-1)}function Sg(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},i.queue=n,n=n.dispatch=Dw.bind(null,on,n),[i.memoizedState,n]}function ba(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function xg(){return vi().memoizedState}function fc(n,i,a,u){var h=Zi();on.flags|=n,h.memoizedState=ba(1|i,a,void 0,u===void 0?null:u)}function dc(n,i,a,u){var h=vi();u=u===void 0?null:u;var v=void 0;if(mn!==null){var T=mn.memoizedState;if(v=T.destroy,u!==null&&bd(u,T.deps)){h.memoizedState=ba(i,a,v,u);return}}on.flags|=n,h.memoizedState=ba(1|i,a,v,u)}function Mg(n,i){return fc(8390656,8,n,i)}function Nd(n,i){return dc(2048,8,n,i)}function Eg(n,i){return dc(4,2,n,i)}function wg(n,i){return dc(4,4,n,i)}function Tg(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ag(n,i,a){return a=a!=null?a.concat([n]):null,dc(4,4,Tg.bind(null,i,n),a)}function Ud(){}function Rg(n,i){var a=vi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&bd(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Cg(n,i){var a=vi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&bd(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function bg(n,i,a){return(xs&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=a):(Ri(a,i)||(a=Ye(),on.lanes|=a,Ms|=a,n.baseState=!0),i)}function Pw(n,i){var a=Lt;Lt=a!==0&&4>a?a:4,n(!0);var u=Cd.transition;Cd.transition={};try{n(!1),i()}finally{Lt=a,Cd.transition=u}}function Pg(){return vi().memoizedState}function Lw(n,i,a){var u=Yr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Lg(n))Dg(i,a);else if(a=lg(n,i,a,u),a!==null){var h=Gn();Di(a,n,u,h),Ig(a,i,u)}}function Dw(n,i,a){var u=Yr(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lg(n))Dg(i,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var T=i.lastRenderedState,z=v(T,a);if(h.hasEagerState=!0,h.eagerState=z,Ri(z,T)){var V=i.interleaved;V===null?(h.next=h,Md(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}a=lg(n,i,h,u),a!==null&&(h=Gn(),Di(a,n,u,h),Ig(a,i,u))}}function Lg(n){var i=n.alternate;return n===on||i!==null&&i===on}function Dg(n,i){Aa=uc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Ig(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Yn(n,a)}}var hc={readContext:gi,useCallback:In,useContext:In,useEffect:In,useImperativeHandle:In,useInsertionEffect:In,useLayoutEffect:In,useMemo:In,useReducer:In,useRef:In,useState:In,useDebugValue:In,useDeferredValue:In,useTransition:In,useMutableSource:In,useSyncExternalStore:In,useId:In,unstable_isNewReconciler:!1},Iw={readContext:gi,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:gi,useEffect:Mg,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,fc(4194308,4,Tg.bind(null,i,n),a)},useLayoutEffect:function(n,i){return fc(4194308,4,n,i)},useInsertionEffect:function(n,i){return fc(4,2,n,i)},useMemo:function(n,i){var a=Zi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Zi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Lw.bind(null,on,n),[u.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:Sg,useDebugValue:Ud,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=Sg(!1),i=n[0];return n=Pw.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=on,h=Zi();if(en){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Sn===null)throw Error(t(349));(xs&30)!==0||mg(u,i,a)}h.memoizedState=a;var v={value:a,getSnapshot:i};return h.queue=v,Mg(vg.bind(null,u,v,n),[n]),u.flags|=2048,ba(9,gg.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Zi(),i=Sn.identifierPrefix;if(en){var a=gr,u=mr;a=(u&~(1<<32-Oe(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ra++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=bw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nw={readContext:gi,useCallback:Rg,useContext:gi,useEffect:Nd,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:wg,useMemo:Cg,useReducer:Dd,useRef:xg,useState:function(){return Dd(Ca)},useDebugValue:Ud,useDeferredValue:function(n){var i=vi();return bg(i,mn.memoizedState,n)},useTransition:function(){var n=Dd(Ca)[0],i=vi().memoizedState;return[n,i]},useMutableSource:hg,useSyncExternalStore:pg,useId:Pg,unstable_isNewReconciler:!1},Uw={readContext:gi,useCallback:Rg,useContext:gi,useEffect:Nd,useImperativeHandle:Ag,useInsertionEffect:Eg,useLayoutEffect:wg,useMemo:Cg,useReducer:Id,useRef:xg,useState:function(){return Id(Ca)},useDebugValue:Ud,useDeferredValue:function(n){var i=vi();return mn===null?i.memoizedState=n:bg(i,mn.memoizedState,n)},useTransition:function(){var n=Id(Ca)[0],i=vi().memoizedState;return[n,i]},useMutableSource:hg,useSyncExternalStore:pg,useId:Pg,unstable_isNewReconciler:!1};function bi(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Fd(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pc={isMounted:function(n){return(n=n._reactInternals)?$i(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Gn(),h=Yr(n),v=_r(u,h);v.payload=i,a!=null&&(v.callback=a),i=Hr(n,v,h),i!==null&&(Di(i,n,h,u),oc(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Gn(),h=Yr(n),v=_r(u,h);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Hr(n,v,h),i!==null&&(Di(i,n,h,u),oc(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Gn(),u=Yr(n),h=_r(a,u);h.tag=2,i!=null&&(h.callback=i),i=Hr(n,h,u),i!==null&&(Di(i,n,u,a),oc(i,n,u))}};function Ng(n,i,a,u,h,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,T):i.prototype&&i.prototype.isPureReactComponent?!ma(a,u)||!ma(h,v):!0}function Ug(n,i,a){var u=!1,h=Br,v=i.contextType;return typeof v=="object"&&v!==null?v=gi(v):(h=qn(i)?gs:Dn.current,u=i.contextTypes,v=(u=u!=null)?mo(n,h):Br),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pc,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),i}function Fg(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&pc.enqueueReplaceState(i,i.state,null)}function Od(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Ed(n);var v=i.contextType;typeof v=="object"&&v!==null?h.context=gi(v):(v=qn(i)?gs:Dn.current,h.context=mo(n,v)),h.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Fd(n,i,v,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&pc.enqueueReplaceState(h,h.state,null),ac(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Eo(n,i){try{var a="",u=i;do a+=Ue(u),u=u.return;while(u);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:h,digest:null}}function zd(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Bd(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Fw=typeof WeakMap=="function"?WeakMap:Map;function Og(n,i,a){a=_r(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){xc||(xc=!0,eh=u),Bd(n,i)},a}function zg(n,i,a){a=_r(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){Bd(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Bd(n,i),typeof u!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Bg(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Fw;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=Kw.bind(null,n,i,a),i.then(n,n))}function kg(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Gg(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=_r(-1,1),i.tag=2,Hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Ow=L.ReactCurrentOwner,jn=!1;function kn(n,i,a,u){i.child=n===null?ag(i,null,a,u):yo(i,n.child,a,u)}function Hg(n,i,a,u,h){a=a.render;var v=i.ref;return xo(i,h),u=Pd(n,i,a,u,v,h),a=Ld(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,yr(n,i,h)):(en&&a&&hd(i),i.flags|=1,kn(n,i,u,h),i.child)}function Vg(n,i,a,u,h){if(n===null){var v=a.type;return typeof v=="function"&&!ah(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Wg(n,i,v,u,h)):(n=Rc(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&h)===0){var T=v.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(T,u)&&n.ref===i.ref)return yr(n,i,h)}return i.flags|=1,n=qr(v,u),n.ref=i.ref,n.return=i,i.child=n}function Wg(n,i,a,u,h){if(n!==null){var v=n.memoizedProps;if(ma(v,u)&&n.ref===i.ref)if(jn=!1,i.pendingProps=u=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(jn=!0);else return i.lanes=n.lanes,yr(n,i,h)}return kd(n,i,a,u,h)}function Xg(n,i,a){var u=i.pendingProps,h=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(To,li),li|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,jt(To,li),li|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,jt(To,li),li|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,jt(To,li),li|=u;return kn(n,i,h,a),i.child}function Yg(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function kd(n,i,a,u,h){var v=qn(a)?gs:Dn.current;return v=mo(i,v),xo(i,h),a=Pd(n,i,a,u,v,h),u=Ld(),n!==null&&!jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,yr(n,i,h)):(en&&u&&hd(i),i.flags|=1,kn(n,i,a,h),i.child)}function $g(n,i,a,u,h){if(qn(a)){var v=!0;Jl(i)}else v=!1;if(xo(i,h),i.stateNode===null)gc(n,i),Ug(i,a,u),Od(i,a,u,h),u=!0;else if(n===null){var T=i.stateNode,z=i.memoizedProps;T.props=z;var V=T.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=gi(ue):(ue=qn(a)?gs:Dn.current,ue=mo(i,ue));var Te=a.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ae||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==u||V!==ue)&&Fg(i,T,u,ue),Gr=!1;var we=i.memoizedState;T.state=we,ac(i,u,T,h),V=i.memoizedState,z!==u||we!==V||$n.current||Gr?(typeof Te=="function"&&(Fd(i,a,Te,u),V=i.memoizedState),(z=Gr||Ng(i,a,z,u,we,V,ue))?(Ae||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),T.props=u,T.state=V,T.context=ue,u=z):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,cg(n,i),z=i.memoizedProps,ue=i.type===i.elementType?z:bi(i.type,z),T.props=ue,Ae=i.pendingProps,we=T.context,V=a.contextType,typeof V=="object"&&V!==null?V=gi(V):(V=qn(a)?gs:Dn.current,V=mo(i,V));var $e=a.getDerivedStateFromProps;(Te=typeof $e=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==Ae||we!==V)&&Fg(i,T,u,V),Gr=!1,we=i.memoizedState,T.state=we,ac(i,u,T,h);var Je=i.memoizedState;z!==Ae||we!==Je||$n.current||Gr?(typeof $e=="function"&&(Fd(i,a,$e,u),Je=i.memoizedState),(ue=Gr||Ng(i,a,ue,u,we,Je,V)||!1)?(Te||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Je,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Je,V)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Je),T.props=u,T.state=Je,T.context=V,u=ue):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),u=!1)}return Gd(n,i,a,u,v,h)}function Gd(n,i,a,u,h,v){Yg(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return h&&J0(i,a,!1),yr(n,i,v);u=i.stateNode,Ow.current=i;var z=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=yo(i,n.child,null,v),i.child=yo(i,null,z,v)):kn(n,i,z,v),i.memoizedState=u.state,h&&J0(i,a,!0),i.child}function qg(n){var i=n.stateNode;i.pendingContext?K0(n,i.pendingContext,i.pendingContext!==i.context):i.context&&K0(n,i.context,!1),wd(n,i.containerInfo)}function jg(n,i,a,u,h){return _o(),vd(h),i.flags|=256,kn(n,i,a,u),i.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Vd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kg(n,i,a){var u=i.pendingProps,h=sn.current,v=!1,T=(i.flags&128)!==0,z;if((z=T)||(z=n!==null&&n.memoizedState===null?!1:(h&2)!==0),z?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),jt(sn,h&1),n===null)return gd(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,v?(u=i.mode,v=i.child,T={mode:"hidden",children:T},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=Cc(T,u,0,null),n=As(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Vd(a),i.memoizedState=Hd,n):Wd(i,T));if(h=n.memoizedState,h!==null&&(z=h.dehydrated,z!==null))return zw(n,i,T,u,z,h,a);if(v){v=u.fallback,T=i.mode,h=n.child,z=h.sibling;var V={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=qr(h,V),u.subtreeFlags=h.subtreeFlags&14680064),z!==null?v=qr(z,v):(v=As(v,T,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,T=n.child.memoizedState,T=T===null?Vd(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~a,i.memoizedState=Hd,u}return v=n.child,n=v.sibling,u=qr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Wd(n,i){return i=Cc({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function mc(n,i,a,u){return u!==null&&vd(u),yo(i,n.child,null,a),n=Wd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function zw(n,i,a,u,h,v,T){if(a)return i.flags&256?(i.flags&=-257,u=zd(Error(t(422))),mc(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,h=i.mode,u=Cc({mode:"visible",children:u.children},h,0,null),v=As(v,h,T,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&yo(i,n.child,null,T),i.child.memoizedState=Vd(T),i.memoizedState=Hd,v);if((i.mode&1)===0)return mc(n,i,T,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var z=u.dgst;return u=z,v=Error(t(419)),u=zd(v,u,void 0),mc(n,i,T,u)}if(z=(T&n.childLanes)!==0,jn||z){if(u=Sn,u!==null){switch(T&-T){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|T))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,vr(n,h),Di(u,n,h,-1))}return oh(),u=zd(Error(t(421))),mc(n,i,T,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Zw.bind(null,n),h._reactRetry=i,null):(n=v.treeContext,ai=Or(h.nextSibling),oi=i,en=!0,Ci=null,n!==null&&(pi[mi++]=mr,pi[mi++]=gr,pi[mi++]=vs,mr=n.id,gr=n.overflow,vs=i),i=Wd(i,u.children),i.flags|=4096,i)}function Zg(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),xd(n.return,i,a)}function Xd(n,i,a,u,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=h)}function Jg(n,i,a){var u=i.pendingProps,h=u.revealOrder,v=u.tail;if(kn(n,i,u.children,a),u=sn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zg(n,a,i);else if(n.tag===19)Zg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(jt(sn,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&lc(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Xd(i,!1,h,a,v);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&lc(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Xd(i,!0,a,null,v);break;case"together":Xd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function gc(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function yr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=qr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=qr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Bw(n,i,a){switch(i.tag){case 3:qg(i),_o();break;case 5:dg(i);break;case 1:qn(i.type)&&Jl(i);break;case 4:wd(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;jt(rc,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(jt(sn,sn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Kg(n,i,a):(jt(sn,sn.current&1),n=yr(n,i,a),n!==null?n.sibling:null);jt(sn,sn.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Jg(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),jt(sn,sn.current),u)break;return null;case 22:case 23:return i.lanes=0,Xg(n,i,a)}return yr(n,i,a)}var Qg,Yd,ev,tv;Qg=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yd=function(){},ev=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Ss(Ki.current);var v=null;switch(a){case"input":h=je(n,h),u=je(n,u),v=[];break;case"select":h=re({},h,{value:void 0}),u=re({},u,{value:void 0}),v=[];break;case"textarea":h=at(n,h),u=at(n,u),v=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=jl)}He(a,u);var T;a=null;for(ue in h)if(!u.hasOwnProperty(ue)&&h.hasOwnProperty(ue)&&h[ue]!=null)if(ue==="style"){var z=h[ue];for(T in z)z.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?v||(v=[]):(v=v||[]).push(ue,null));for(ue in u){var V=u[ue];if(z=h!=null?h[ue]:void 0,u.hasOwnProperty(ue)&&V!==z&&(V!=null||z!=null))if(ue==="style")if(z){for(T in z)!z.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in V)V.hasOwnProperty(T)&&z[T]!==V[T]&&(a||(a={}),a[T]=V[T])}else a||(v||(v=[]),v.push(ue,a)),a=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,z=z?z.__html:void 0,V!=null&&z!==V&&(v=v||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(v=v||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&Zt("scroll",n),v||z===V||(v=[])):(v=v||[]).push(ue,V))}a&&(v=v||[]).push("style",a);var ue=v;(i.updateQueue=ue)&&(i.flags|=4)}},tv=function(n,i,a,u){a!==u&&(i.flags|=4)};function Pa(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function kw(n,i,a){var u=i.pendingProps;switch(pd(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return qn(i.type)&&Zl(),Nn(i),null;case 3:return u=i.stateNode,Mo(),Jt($n),Jt(Dn),Rd(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(nc(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(ih(Ci),Ci=null))),Yd(n,i),Nn(i),null;case 5:Td(i);var h=Ss(Ta.current);if(a=i.type,n!==null&&i.stateNode!=null)ev(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=Ss(Ki.current),nc(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[ji]=i,u[Sa]=v,n=(i.mode&1)!==0,a){case"dialog":Zt("cancel",u),Zt("close",u);break;case"iframe":case"object":case"embed":Zt("load",u);break;case"video":case"audio":for(h=0;h<va.length;h++)Zt(va[h],u);break;case"source":Zt("error",u);break;case"img":case"image":case"link":Zt("error",u),Zt("load",u);break;case"details":Zt("toggle",u);break;case"input":dt(u,v),Zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Zt("invalid",u);break;case"textarea":Et(u,v),Zt("invalid",u)}He(a,v),h=null;for(var T in v)if(v.hasOwnProperty(T)){var z=v[T];T==="children"?typeof z=="string"?u.textContent!==z&&(v.suppressHydrationWarning!==!0&&ql(u.textContent,z,n),h=["children",z]):typeof z=="number"&&u.textContent!==""+z&&(v.suppressHydrationWarning!==!0&&ql(u.textContent,z,n),h=["children",""+z]):o.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&Zt("scroll",u)}switch(a){case"input":Ze(u),mt(u,v,!0);break;case"textarea":Ze(u),Dt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=jl)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[ji]=i,n[Sa]=u,Qg(n,i,!1,!1),i.stateNode=n;e:{switch(T=Fe(a,u),a){case"dialog":Zt("cancel",n),Zt("close",n),h=u;break;case"iframe":case"object":case"embed":Zt("load",n),h=u;break;case"video":case"audio":for(h=0;h<va.length;h++)Zt(va[h],n);h=u;break;case"source":Zt("error",n),h=u;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),h=u;break;case"details":Zt("toggle",n),h=u;break;case"input":dt(n,u),h=je(n,u),Zt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=re({},u,{value:void 0}),Zt("invalid",n);break;case"textarea":Et(n,u),h=at(n,u),Zt("invalid",n);break;default:h=u}He(a,h),z=h;for(v in z)if(z.hasOwnProperty(v)){var V=z[v];v==="style"?ve(n,V):v==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&me(n,V)):v==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&pe(n,V):typeof V=="number"&&pe(n,""+V):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?V!=null&&v==="onScroll"&&Zt("scroll",n):V!=null&&N(n,v,V,T))}switch(a){case"input":Ze(n),mt(n,u,!1);break;case"textarea":Ze(n),Dt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+U(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?At(n,!!u.multiple,v,!1):u.defaultValue!=null&&At(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=jl)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)tv(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ss(Ta.current),Ss(Ki.current),nc(i)){if(u=i.stateNode,a=i.memoizedProps,u[ji]=i,(v=u.nodeValue!==a)&&(n=oi,n!==null))switch(n.tag){case 3:ql(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ql(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[ji]=i,i.stateNode=u}return Nn(i),null;case 13:if(Jt(sn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ai!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rg(),_o(),i.flags|=98560,v=!1;else if(v=nc(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[ji]=i}else _o(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),v=!1}else Ci!==null&&(ih(Ci),Ci=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(sn.current&1)!==0?gn===0&&(gn=3):oh())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return Mo(),Yd(n,i),n===null&&_a(i.stateNode.containerInfo),Nn(i),null;case 10:return Sd(i.type._context),Nn(i),null;case 17:return qn(i.type)&&Zl(),Nn(i),null;case 19:if(Jt(sn),v=i.memoizedState,v===null)return Nn(i),null;if(u=(i.flags&128)!==0,T=v.rendering,T===null)if(u)Pa(v,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=lc(n),T!==null){for(i.flags|=128,Pa(v,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return jt(sn,sn.current&1|2),i.child}n=n.sibling}v.tail!==null&&rn()>Ao&&(i.flags|=128,u=!0,Pa(v,!1),i.lanes=4194304)}else{if(!u)if(n=lc(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Pa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!en)return Nn(i),null}else 2*rn()-v.renderingStartTime>Ao&&a!==1073741824&&(i.flags|=128,u=!0,Pa(v,!1),i.lanes=4194304);v.isBackwards?(T.sibling=i.child,i.child=T):(a=v.last,a!==null?a.sibling=T:i.child=T,v.last=T)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=rn(),i.sibling=null,a=sn.current,jt(sn,u?a&1|2:a&1),i):(Nn(i),null);case 22:case 23:return sh(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(li&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Gw(n,i){switch(pd(i),i.tag){case 1:return qn(i.type)&&Zl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Mo(),Jt($n),Jt(Dn),Rd(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Td(i),null;case 13:if(Jt(sn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));_o()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(sn),null;case 4:return Mo(),null;case 10:return Sd(i.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var vc=!1,Un=!1,Hw=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function wo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){ln(n,i,u)}else a.current=null}function $d(n,i,a){try{a()}catch(u){ln(n,i,u)}}var nv=!1;function Vw(n,i){if(sd=Ol,n=N0(),Zf(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var T=0,z=-1,V=-1,ue=0,Te=0,Ae=n,we=null;t:for(;;){for(var $e;Ae!==a||h!==0&&Ae.nodeType!==3||(z=T+h),Ae!==v||u!==0&&Ae.nodeType!==3||(V=T+u),Ae.nodeType===3&&(T+=Ae.nodeValue.length),($e=Ae.firstChild)!==null;)we=Ae,Ae=$e;for(;;){if(Ae===n)break t;if(we===a&&++ue===h&&(z=T),we===v&&++Te===u&&(V=T),($e=Ae.nextSibling)!==null)break;Ae=we,we=Ae.parentNode}Ae=$e}a=z===-1||V===-1?null:{start:z,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:n,selectionRange:a},Ol=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var tt=Je.memoizedProps,cn=Je.memoizedState,ee=i.stateNode,Y=ee.getSnapshotBeforeUpdate(i.elementType===i.type?tt:bi(i.type,tt),cn);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){ln(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return Je=nv,nv=!1,Je}function La(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&$d(i,a,v)}h=h.next}while(h!==u)}}function _c(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function qd(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function iv(n){var i=n.alternate;i!==null&&(n.alternate=null,iv(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ji],delete i[Sa],delete i[ud],delete i[Tw],delete i[Aw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rv(n){return n.tag===5||n.tag===3||n.tag===4}function sv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=jl));else if(u!==4&&(n=n.child,n!==null))for(jd(n,i,a),n=n.sibling;n!==null;)jd(n,i,a),n=n.sibling}function Kd(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Kd(n,i,a),n=n.sibling;n!==null;)Kd(n,i,a),n=n.sibling}var Tn=null,Pi=!1;function Vr(n,i,a){for(a=a.child;a!==null;)ov(n,i,a),a=a.sibling}function ov(n,i,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:Un||wo(a,i);case 6:var u=Tn,h=Pi;Tn=null,Vr(n,i,a),Tn=u,Pi=h,Tn!==null&&(Pi?(n=Tn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tn.removeChild(a.stateNode));break;case 18:Tn!==null&&(Pi?(n=Tn,a=a.stateNode,n.nodeType===8?cd(n.parentNode,a):n.nodeType===1&&cd(n,a),ca(n)):cd(Tn,a.stateNode));break;case 4:u=Tn,h=Pi,Tn=a.stateNode.containerInfo,Pi=!0,Vr(n,i,a),Tn=u,Pi=h;break;case 0:case 11:case 14:case 15:if(!Un&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var v=h,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&$d(a,i,T),h=h.next}while(h!==u)}Vr(n,i,a);break;case 1:if(!Un&&(wo(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(z){ln(a,i,z)}Vr(n,i,a);break;case 21:Vr(n,i,a);break;case 22:a.mode&1?(Un=(u=Un)||a.memoizedState!==null,Vr(n,i,a),Un=u):Vr(n,i,a);break;default:Vr(n,i,a)}}function av(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Hw),i.forEach(function(u){var h=Jw.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function Li(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var v=n,T=i,z=T;e:for(;z!==null;){switch(z.tag){case 5:Tn=z.stateNode,Pi=!1;break e;case 3:Tn=z.stateNode.containerInfo,Pi=!0;break e;case 4:Tn=z.stateNode.containerInfo,Pi=!0;break e}z=z.return}if(Tn===null)throw Error(t(160));ov(v,T,h),Tn=null,Pi=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(ue){ln(h,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)lv(i,n),i=i.sibling}function lv(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Li(i,n),Ji(n),u&4){try{La(3,n,n.return),_c(3,n)}catch(tt){ln(n,n.return,tt)}try{La(5,n,n.return)}catch(tt){ln(n,n.return,tt)}}break;case 1:Li(i,n),Ji(n),u&512&&a!==null&&wo(a,a.return);break;case 5:if(Li(i,n),Ji(n),u&512&&a!==null&&wo(a,a.return),n.flags&32){var h=n.stateNode;try{pe(h,"")}catch(tt){ln(n,n.return,tt)}}if(u&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,T=a!==null?a.memoizedProps:v,z=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{z==="input"&&v.type==="radio"&&v.name!=null&&ct(h,v),Fe(z,T);var ue=Fe(z,v);for(T=0;T<V.length;T+=2){var Te=V[T],Ae=V[T+1];Te==="style"?ve(h,Ae):Te==="dangerouslySetInnerHTML"?me(h,Ae):Te==="children"?pe(h,Ae):N(h,Te,Ae,ue)}switch(z){case"input":Nt(h,v);break;case"textarea":Ce(h,v);break;case"select":var we=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var $e=v.value;$e!=null?At(h,!!v.multiple,$e,!1):we!==!!v.multiple&&(v.defaultValue!=null?At(h,!!v.multiple,v.defaultValue,!0):At(h,!!v.multiple,v.multiple?[]:"",!1))}h[Sa]=v}catch(tt){ln(n,n.return,tt)}}break;case 6:if(Li(i,n),Ji(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(tt){ln(n,n.return,tt)}}break;case 3:if(Li(i,n),Ji(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ca(i.containerInfo)}catch(tt){ln(n,n.return,tt)}break;case 4:Li(i,n),Ji(n);break;case 13:Li(i,n),Ji(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(Qd=rn())),u&4&&av(n);break;case 22:if(Te=a!==null&&a.memoizedState!==null,n.mode&1?(Un=(ue=Un)||Te,Li(i,n),Un=ue):Li(i,n),Ji(n),u&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Te&&(n.mode&1)!==0)for(Ke=n,Te=n.child;Te!==null;){for(Ae=Ke=Te;Ke!==null;){switch(we=Ke,$e=we.child,we.tag){case 0:case 11:case 14:case 15:La(4,we,we.return);break;case 1:wo(we,we.return);var Je=we.stateNode;if(typeof Je.componentWillUnmount=="function"){u=we,a=we.return;try{i=u,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(tt){ln(u,a,tt)}}break;case 5:wo(we,we.return);break;case 22:if(we.memoizedState!==null){fv(Ae);continue}}$e!==null?($e.return=we,Ke=$e):fv(Ae)}Te=Te.sibling}e:for(Te=null,Ae=n;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{h=Ae.stateNode,ue?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(z=Ae.stateNode,V=Ae.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,z.style.display=he("display",T))}catch(tt){ln(n,n.return,tt)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=ue?"":Ae.memoizedProps}catch(tt){ln(n,n.return,tt)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Li(i,n),Ji(n),u&4&&av(n);break;case 21:break;default:Li(i,n),Ji(n)}}function Ji(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(rv(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(pe(h,""),u.flags&=-33);var v=sv(n);Kd(n,v,h);break;case 3:case 4:var T=u.stateNode.containerInfo,z=sv(n);jd(n,z,T);break;default:throw Error(t(161))}}catch(V){ln(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ww(n,i,a){Ke=n,cv(n)}function cv(n,i,a){for(var u=(n.mode&1)!==0;Ke!==null;){var h=Ke,v=h.child;if(h.tag===22&&u){var T=h.memoizedState!==null||vc;if(!T){var z=h.alternate,V=z!==null&&z.memoizedState!==null||Un;z=vc;var ue=Un;if(vc=T,(Un=V)&&!ue)for(Ke=h;Ke!==null;)T=Ke,V=T.child,T.tag===22&&T.memoizedState!==null?dv(h):V!==null?(V.return=T,Ke=V):dv(h);for(;v!==null;)Ke=v,cv(v),v=v.sibling;Ke=h,vc=z,Un=ue}uv(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,Ke=v):uv(n)}}function uv(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Un||_c(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Un)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:bi(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&fg(i,v,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}fg(i,T,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Te=ue.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&ca(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||i.flags&512&&qd(i)}catch(we){ln(i,i.return,we)}}if(i===n){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function fv(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function dv(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{_c(4,i)}catch(V){ln(i,a,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(V){ln(i,h,V)}}var v=i.return;try{qd(i)}catch(V){ln(i,v,V)}break;case 5:var T=i.return;try{qd(i)}catch(V){ln(i,T,V)}}}catch(V){ln(i,i.return,V)}if(i===n){Ke=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Ke=z;break}Ke=i.return}}var Xw=Math.ceil,yc=L.ReactCurrentDispatcher,Zd=L.ReactCurrentOwner,_i=L.ReactCurrentBatchConfig,Ot=0,Sn=null,dn=null,An=0,li=0,To=zr(0),gn=0,Da=null,Ms=0,Sc=0,Jd=0,Ia=null,Kn=null,Qd=0,Ao=1/0,Sr=null,xc=!1,eh=null,Wr=null,Mc=!1,Xr=null,Ec=0,Na=0,th=null,wc=-1,Tc=0;function Gn(){return(Ot&6)!==0?rn():wc!==-1?wc:wc=rn()}function Yr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&An!==0?An&-An:Cw.transition!==null?(Tc===0&&(Tc=Ye()),Tc):(n=Lt,n!==0||(n=window.event,n=n===void 0?16:p0(n.type)),n)}function Di(n,i,a,u){if(50<Na)throw Na=0,th=null,Error(t(185));Ct(n,a,u),((Ot&2)===0||n!==Sn)&&(n===Sn&&((Ot&2)===0&&(Sc|=a),gn===4&&$r(n,An)),Zn(n,u),a===1&&Ot===0&&(i.mode&1)===0&&(Ao=rn()+500,Ql&&kr()))}function Zn(n,i){var a=n.callbackNode;Wt(n,i);var u=qt(n,n===Sn?An:0);if(u===0)a!==null&&Ul(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Ul(a),i===1)n.tag===0?Rw(pv.bind(null,n)):Q0(pv.bind(null,n)),Ew(function(){(Ot&6)===0&&kr()}),a=null;else{switch(dr(u)){case 1:a=ra;break;case 4:a=C;break;case 16:a=q;break;case 536870912:a=ne;break;default:a=q}a=Mv(a,hv.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function hv(n,i){if(wc=-1,Tc=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ro()&&n.callbackNode!==a)return null;var u=qt(n,n===Sn?An:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ac(n,u);else{i=u;var h=Ot;Ot|=2;var v=gv();(Sn!==n||An!==i)&&(Sr=null,Ao=rn()+500,ws(n,i));do try{qw();break}catch(z){mv(n,z)}while(!0);yd(),yc.current=v,Ot=h,dn!==null?i=0:(Sn=null,An=0,i=gn)}if(i!==0){if(i===2&&(h=fn(n),h!==0&&(u=h,i=nh(n,h))),i===1)throw a=Da,ws(n,0),$r(n,u),Zn(n,rn()),a;if(i===6)$r(n,u);else{if(h=n.current.alternate,(u&30)===0&&!Yw(h)&&(i=Ac(n,u),i===2&&(v=fn(n),v!==0&&(u=v,i=nh(n,v))),i===1))throw a=Da,ws(n,0),$r(n,u),Zn(n,rn()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Ts(n,Kn,Sr);break;case 3:if($r(n,u),(u&130023424)===u&&(i=Qd+500-rn(),10<i)){if(qt(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Gn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=ld(Ts.bind(null,n,Kn,Sr),i);break}Ts(n,Kn,Sr);break;case 4:if($r(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var T=31-Oe(u);v=1<<T,T=i[T],T>h&&(h=T),u&=~v}if(u=h,u=rn()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Xw(u/1960))-u,10<u){n.timeoutHandle=ld(Ts.bind(null,n,Kn,Sr),u);break}Ts(n,Kn,Sr);break;case 5:Ts(n,Kn,Sr);break;default:throw Error(t(329))}}}return Zn(n,rn()),n.callbackNode===a?hv.bind(null,n):null}function nh(n,i){var a=Ia;return n.current.memoizedState.isDehydrated&&(ws(n,i).flags|=256),n=Ac(n,i),n!==2&&(i=Kn,Kn=a,i!==null&&ih(i)),n}function ih(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function Yw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],v=h.getSnapshot;h=h.value;try{if(!Ri(v(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $r(n,i){for(i&=~Jd,i&=~Sc,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Oe(i),u=1<<a;n[a]=-1,i&=~u}}function pv(n){if((Ot&6)!==0)throw Error(t(327));Ro();var i=qt(n,0);if((i&1)===0)return Zn(n,rn()),null;var a=Ac(n,i);if(n.tag!==0&&a===2){var u=fn(n);u!==0&&(i=u,a=nh(n,u))}if(a===1)throw a=Da,ws(n,0),$r(n,i),Zn(n,rn()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ts(n,Kn,Sr),Zn(n,rn()),null}function rh(n,i){var a=Ot;Ot|=1;try{return n(i)}finally{Ot=a,Ot===0&&(Ao=rn()+500,Ql&&kr())}}function Es(n){Xr!==null&&Xr.tag===0&&(Ot&6)===0&&Ro();var i=Ot;Ot|=1;var a=_i.transition,u=Lt;try{if(_i.transition=null,Lt=1,n)return n()}finally{Lt=u,_i.transition=a,Ot=i,(Ot&6)===0&&kr()}}function sh(){li=To.current,Jt(To)}function ws(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Mw(a)),dn!==null)for(a=dn.return;a!==null;){var u=a;switch(pd(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Zl();break;case 3:Mo(),Jt($n),Jt(Dn),Rd();break;case 5:Td(u);break;case 4:Mo();break;case 13:Jt(sn);break;case 19:Jt(sn);break;case 10:Sd(u.type._context);break;case 22:case 23:sh()}a=a.return}if(Sn=n,dn=n=qr(n.current,null),An=li=i,gn=0,Da=null,Jd=Sc=Ms=0,Kn=Ia=null,ys!==null){for(i=0;i<ys.length;i++)if(a=ys[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,v=a.pending;if(v!==null){var T=v.next;v.next=h,u.next=T}a.pending=u}ys=null}return n}function mv(n,i){do{var a=dn;try{if(yd(),cc.current=hc,uc){for(var u=on.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}uc=!1}if(xs=0,yn=mn=on=null,Aa=!1,Ra=0,Zd.current=null,a===null||a.return===null){gn=1,Da=i,dn=null;break}e:{var v=n,T=a.return,z=a,V=i;if(i=An,z.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,Te=z,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var we=Te.alternate;we?(Te.updateQueue=we.updateQueue,Te.memoizedState=we.memoizedState,Te.lanes=we.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var $e=kg(T);if($e!==null){$e.flags&=-257,Gg($e,T,z,v,i),$e.mode&1&&Bg(v,ue,i),i=$e,V=ue;var Je=i.updateQueue;if(Je===null){var tt=new Set;tt.add(V),i.updateQueue=tt}else Je.add(V);break e}else{if((i&1)===0){Bg(v,ue,i),oh();break e}V=Error(t(426))}}else if(en&&z.mode&1){var cn=kg(T);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),Gg(cn,T,z,v,i),vd(Eo(V,z));break e}}v=V=Eo(V,z),gn!==4&&(gn=2),Ia===null?Ia=[v]:Ia.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var ee=Og(v,V,i);ug(v,ee);break e;case 1:z=V;var Y=v.type,ie=v.stateNode;if((v.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Wr===null||!Wr.has(ie)))){v.flags|=65536,i&=-i,v.lanes|=i;var De=zg(v,z,i);ug(v,De);break e}}v=v.return}while(v!==null)}_v(a)}catch(it){i=it,dn===a&&a!==null&&(dn=a=a.return);continue}break}while(!0)}function gv(){var n=yc.current;return yc.current=hc,n===null?hc:n}function oh(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(Ms&268435455)===0&&(Sc&268435455)===0||$r(Sn,An)}function Ac(n,i){var a=Ot;Ot|=2;var u=gv();(Sn!==n||An!==i)&&(Sr=null,ws(n,i));do try{$w();break}catch(h){mv(n,h)}while(!0);if(yd(),Ot=a,yc.current=u,dn!==null)throw Error(t(261));return Sn=null,An=0,gn}function $w(){for(;dn!==null;)vv(dn)}function qw(){for(;dn!==null&&!Of();)vv(dn)}function vv(n){var i=xv(n.alternate,n,li);n.memoizedProps=n.pendingProps,i===null?_v(n):dn=i,Zd.current=null}function _v(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=kw(a,i,li),a!==null){dn=a;return}}else{if(a=Gw(a,i),a!==null){a.flags&=32767,dn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,dn=null;return}}if(i=i.sibling,i!==null){dn=i;return}dn=i=n}while(i!==null);gn===0&&(gn=5)}function Ts(n,i,a){var u=Lt,h=_i.transition;try{_i.transition=null,Lt=1,jw(n,i,a,u)}finally{_i.transition=h,Lt=u}return null}function jw(n,i,a,u){do Ro();while(Xr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(Xn(n,v),n===Sn&&(dn=Sn=null,An=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Mc||(Mc=!0,Mv(q,function(){return Ro(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=_i.transition,_i.transition=null;var T=Lt;Lt=1;var z=Ot;Ot|=4,Zd.current=null,Vw(n,a),lv(a,n),mw(od),Ol=!!sd,od=sd=null,n.current=a,Ww(a),zf(),Ot=z,Lt=T,_i.transition=v}else n.current=a;if(Mc&&(Mc=!1,Xr=n,Ec=h),v=n.pendingLanes,v===0&&(Wr=null),qe(a.stateNode),Zn(n,rn()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(xc)throw xc=!1,n=eh,eh=null,n;return(Ec&1)!==0&&n.tag!==0&&Ro(),v=n.pendingLanes,(v&1)!==0?n===th?Na++:(Na=0,th=n):Na=0,kr(),null}function Ro(){if(Xr!==null){var n=dr(Ec),i=_i.transition,a=Lt;try{if(_i.transition=null,Lt=16>n?16:n,Xr===null)var u=!1;else{if(n=Xr,Xr=null,Ec=0,(Ot&6)!==0)throw Error(t(331));var h=Ot;for(Ot|=4,Ke=n.current;Ke!==null;){var v=Ke,T=v.child;if((Ke.flags&16)!==0){var z=v.deletions;if(z!==null){for(var V=0;V<z.length;V++){var ue=z[V];for(Ke=ue;Ke!==null;){var Te=Ke;switch(Te.tag){case 0:case 11:case 15:La(8,Te,v)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,Ke=Ae;else for(;Ke!==null;){Te=Ke;var we=Te.sibling,$e=Te.return;if(iv(Te),Te===ue){Ke=null;break}if(we!==null){we.return=$e,Ke=we;break}Ke=$e}}}var Je=v.alternate;if(Je!==null){var tt=Je.child;if(tt!==null){Je.child=null;do{var cn=tt.sibling;tt.sibling=null,tt=cn}while(tt!==null)}}Ke=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Ke=T;else e:for(;Ke!==null;){if(v=Ke,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:La(9,v,v.return)}var ee=v.sibling;if(ee!==null){ee.return=v.return,Ke=ee;break e}Ke=v.return}}var Y=n.current;for(Ke=Y;Ke!==null;){T=Ke;var ie=T.child;if((T.subtreeFlags&2064)!==0&&ie!==null)ie.return=T,Ke=ie;else e:for(T=Y;Ke!==null;){if(z=Ke,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:_c(9,z)}}catch(it){ln(z,z.return,it)}if(z===T){Ke=null;break e}var De=z.sibling;if(De!==null){De.return=z.return,Ke=De;break e}Ke=z.return}}if(Ot=h,kr(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(te,n)}catch{}u=!0}return u}finally{Lt=a,_i.transition=i}}return!1}function yv(n,i,a){i=Eo(a,i),i=Og(n,i,1),n=Hr(n,i,1),i=Gn(),n!==null&&(Ct(n,1,i),Zn(n,i))}function ln(n,i,a){if(n.tag===3)yv(n,n,a);else for(;i!==null;){if(i.tag===3){yv(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Wr===null||!Wr.has(u))){n=Eo(a,n),n=zg(i,n,1),i=Hr(i,n,1),n=Gn(),i!==null&&(Ct(i,1,n),Zn(i,n));break}}i=i.return}}function Kw(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Gn(),n.pingedLanes|=n.suspendedLanes&a,Sn===n&&(An&a)===a&&(gn===4||gn===3&&(An&130023424)===An&&500>rn()-Qd?ws(n,0):Jd|=a),Zn(n,i)}function Sv(n,i){i===0&&((n.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var a=Gn();n=vr(n,i),n!==null&&(Ct(n,i,a),Zn(n,a))}function Zw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Sv(n,a)}function Jw(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Sv(n,a)}var xv;xv=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||$n.current)jn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return jn=!1,Bw(n,i,a);jn=(n.flags&131072)!==0}else jn=!1,en&&(i.flags&1048576)!==0&&eg(i,tc,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;gc(n,i),n=i.pendingProps;var h=mo(i,Dn.current);xo(i,a),h=Pd(null,i,u,n,h,a);var v=Ld();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(u)?(v=!0,Jl(i)):v=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Ed(i),h.updater=pc,i.stateNode=h,h._reactInternals=i,Od(i,u,n,a),i=Gd(null,i,u,!0,v,a)):(i.tag=0,en&&v&&hd(i),kn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(gc(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=eT(u),n=bi(u,n),h){case 0:i=kd(null,i,u,n,a);break e;case 1:i=$g(null,i,u,n,a);break e;case 11:i=Hg(null,i,u,n,a);break e;case 14:i=Vg(null,i,u,bi(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:bi(u,h),kd(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:bi(u,h),$g(n,i,u,h,a);case 3:e:{if(qg(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,h=v.element,cg(n,i),ac(i,u,null,a);var T=i.memoizedState;if(u=T.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){h=Eo(Error(t(423)),i),i=jg(n,i,u,a,h);break e}else if(u!==h){h=Eo(Error(t(424)),i),i=jg(n,i,u,a,h);break e}else for(ai=Or(i.stateNode.containerInfo.firstChild),oi=i,en=!0,Ci=null,a=ag(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),u===h){i=yr(n,i,a);break e}kn(n,i,u,a)}i=i.child}return i;case 5:return dg(i),n===null&&gd(i),u=i.type,h=i.pendingProps,v=n!==null?n.memoizedProps:null,T=h.children,ad(u,h)?T=null:v!==null&&ad(u,v)&&(i.flags|=32),Yg(n,i),kn(n,i,T,a),i.child;case 6:return n===null&&gd(i),null;case 13:return Kg(n,i,a);case 4:return wd(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=yo(i,null,u,a):kn(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:bi(u,h),Hg(n,i,u,h,a);case 7:return kn(n,i,i.pendingProps,a),i.child;case 8:return kn(n,i,i.pendingProps.children,a),i.child;case 12:return kn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,v=i.memoizedProps,T=h.value,jt(rc,u._currentValue),u._currentValue=T,v!==null)if(Ri(v.value,T)){if(v.children===h.children&&!$n.current){i=yr(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var z=v.dependencies;if(z!==null){T=v.child;for(var V=z.firstContext;V!==null;){if(V.context===u){if(v.tag===1){V=_r(-1,a&-a),V.tag=2;var ue=v.updateQueue;if(ue!==null){ue=ue.shared;var Te=ue.pending;Te===null?V.next=V:(V.next=Te.next,Te.next=V),ue.pending=V}}v.lanes|=a,V=v.alternate,V!==null&&(V.lanes|=a),xd(v.return,a,i),z.lanes|=a;break}V=V.next}}else if(v.tag===10)T=v.type===i.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=a,z=T.alternate,z!==null&&(z.lanes|=a),xd(T,a,i),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===i){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}kn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,xo(i,a),h=gi(h),u=u(h),i.flags|=1,kn(n,i,u,a),i.child;case 14:return u=i.type,h=bi(u,i.pendingProps),h=bi(u.type,h),Vg(n,i,u,h,a);case 15:return Wg(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:bi(u,h),gc(n,i),i.tag=1,qn(u)?(n=!0,Jl(i)):n=!1,xo(i,a),Ug(i,u,h),Od(i,u,h,a),Gd(null,i,u,!0,n,a);case 19:return Jg(n,i,a);case 22:return Xg(n,i,a)}throw Error(t(156,i.tag))};function Mv(n,i){return Nl(n,i)}function Qw(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(n,i,a,u){return new Qw(n,i,a,u)}function ah(n){return n=n.prototype,!(!n||!n.isReactComponent)}function eT(n){if(typeof n=="function")return ah(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===X)return 14}return 2}function qr(n,i){var a=n.alternate;return a===null?(a=yi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Rc(n,i,a,u,h,v){var T=2;if(u=n,typeof n=="function")ah(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return As(a.children,h,v,i);case A:T=8,h|=8;break;case F:return n=yi(12,a,i,h|2),n.elementType=F,n.lanes=v,n;case ae:return n=yi(13,a,i,h),n.elementType=ae,n.lanes=v,n;case de:return n=yi(19,a,i,h),n.elementType=de,n.lanes=v,n;case j:return Cc(a,h,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:T=10;break e;case G:T=9;break e;case Z:T=11;break e;case X:T=14;break e;case $:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yi(T,a,i,h),i.elementType=n,i.type=u,i.lanes=v,i}function As(n,i,a,u){return n=yi(7,n,u,i),n.lanes=a,n}function Cc(n,i,a,u){return n=yi(22,n,u,i),n.elementType=j,n.lanes=a,n.stateNode={isHidden:!1},n}function lh(n,i,a){return n=yi(6,n,null,i),n.lanes=a,n}function ch(n,i,a){return i=yi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function tT(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function uh(n,i,a,u,h,v,T,z,V){return n=new tT(n,i,a,z,V),i===1?(i=1,v===!0&&(i|=8)):i=0,v=yi(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ed(v),n}function nT(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Ev(n){if(!n)return Br;n=n._reactInternals;e:{if($i(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qn(a))return Z0(n,a,i)}return i}function wv(n,i,a,u,h,v,T,z,V){return n=uh(a,u,!0,n,h,v,T,z,V),n.context=Ev(null),a=n.current,u=Gn(),h=Yr(a),v=_r(u,h),v.callback=i??null,Hr(a,v,h),n.current.lanes=h,Ct(n,h,u),Zn(n,u),n}function bc(n,i,a,u){var h=i.current,v=Gn(),T=Yr(h);return a=Ev(a),i.context===null?i.context=a:i.pendingContext=a,i=_r(v,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Hr(h,i,T),n!==null&&(Di(n,h,T,v),oc(n,h,T)),T}function Pc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function fh(n,i){Tv(n,i),(n=n.alternate)&&Tv(n,i)}function iT(){return null}var Av=typeof reportError=="function"?reportError:function(n){console.error(n)};function dh(n){this._internalRoot=n}Lc.prototype.render=dh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));bc(n,i,null,null)},Lc.prototype.unmount=dh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Es(function(){bc(null,n,null,null)}),i[hr]=null}};function Lc(n){this._internalRoot=n}Lc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Xt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Nr.length&&i!==0&&i<Nr[a].priority;a++);Nr.splice(a,0,n),a===0&&d0(n)}};function hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Rv(){}function rT(n,i,a,u,h){if(h){if(typeof u=="function"){var v=u;u=function(){var ue=Pc(T);v.call(ue)}}var T=wv(i,u,n,0,null,!1,!1,"",Rv);return n._reactRootContainer=T,n[hr]=T.current,_a(n.nodeType===8?n.parentNode:n),Es(),T}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var z=u;u=function(){var ue=Pc(V);z.call(ue)}}var V=uh(n,0,!1,null,null,!1,!1,"",Rv);return n._reactRootContainer=V,n[hr]=V.current,_a(n.nodeType===8?n.parentNode:n),Es(function(){bc(i,V,a,u)}),V}function Ic(n,i,a,u,h){var v=a._reactRootContainer;if(v){var T=v;if(typeof h=="function"){var z=h;h=function(){var V=Pc(T);z.call(V)}}bc(i,T,n,h)}else T=rT(a,i,n,h,u);return Pc(T)}Ht=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ut(i.pendingLanes);a!==0&&(Yn(i,a|1),Zn(i,rn()),(Ot&6)===0&&(Ao=rn()+500,kr()))}break;case 13:Es(function(){var u=vr(n,1);if(u!==null){var h=Gn();Di(u,n,1,h)}}),fh(n,1)}},Kt=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var a=Gn();Di(i,n,134217728,a)}fh(n,134217728)}},Ti=function(n){if(n.tag===13){var i=Yr(n),a=vr(n,i);if(a!==null){var u=Gn();Di(a,n,i,u)}fh(n,i)}},Xt=function(){return Lt},Ai=function(n,i){var a=Lt;try{return Lt=n,i()}finally{Lt=a}},vt=function(n,i,a){switch(i){case"input":if(Nt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=Kl(u);if(!h)throw Error(t(90));ot(u),Nt(u,h)}}}break;case"textarea":Ce(n,a);break;case"select":i=a.value,i!=null&&At(n,!!a.multiple,i,!1)}},ze=rh,Ee=Es;var sT={usingClientEntryPoint:!1,Events:[xa,ho,Kl,_e,Xe,rh]},Ua={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oT={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=na(n),n===null?null:n.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||iT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{te=Nc.inject(oT),Be=Nc}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT,Hn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(i))throw Error(t(200));return nT(n,i,null,a)},Hn.createRoot=function(n,i){if(!hh(n))throw Error(t(299));var a=!1,u="",h=Av;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=uh(n,1,!1,null,null,a,!1,u,h),n[hr]=i.current,_a(n.nodeType===8?n.parentNode:n),new dh(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=na(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Es(n)},Hn.hydrate=function(n,i,a){if(!Dc(i))throw Error(t(200));return Ic(null,n,i,!0,a)},Hn.hydrateRoot=function(n,i,a){if(!hh(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,v="",T=Av;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=wv(i,null,n,1,a??null,h,!1,v,T),n[hr]=i.current,_a(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Lc(i)},Hn.render=function(n,i,a){if(!Dc(i))throw Error(t(200));return Ic(null,n,i,!1,a)},Hn.unmountComponentAtNode=function(n){if(!Dc(n))throw Error(t(40));return n._reactRootContainer?(Es(function(){Ic(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},Hn.unstable_batchedUpdates=rh,Hn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Dc(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ic(n,i,a,!1,u)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Sh;function Nv(){if(Sh)return Fc.exports;Sh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Fc.exports=Iv(),Fc.exports}var xh;function Uv(){if(xh)return Fa;xh=1;var s=Nv();return Fa.createRoot=s.createRoot,Fa.hydrateRoot=s.hydrateRoot,Fa}var Fv=Uv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="184",Ov=0,Mh=1,zv=2,Oa=1,Bv=2,Co=3,xr=0,Vn=1,st=2,Qi=0,Rs=1,Eh=2,wh=3,Th=4,kv=5,Kr=100,Gv=101,Hv=102,Vv=103,Wv=104,Xv=200,Yv=201,$v=202,qv=203,kc=204,Gc=205,jv=206,Kv=207,Zv=208,Jv=209,Qv=210,e_=211,t_=212,n_=213,i_=214,Hc=0,Vc=1,Wc=2,Cs=3,Xc=4,Yc=5,$c=6,qc=7,Ah=0,r_=1,s_=2,Ii=0,Rh=1,Ch=2,bh=3,Ph=4,Lh=5,Dh=6,Ih=7,Nh=300,Zr=301,bs=302,jc=303,Kc=304,za=306,Ni=1e3,er=1001,Zc=1002,Mn=1003,o_=1004,Ba=1005,Rn=1006,Jc=1007,Jr=1008,Jn=1009,Uh=1010,Fh=1011,bo=1012,Qc=1013,Ui=1014,Fi=1015,tr=1016,eu=1017,tu=1018,Po=1020,Oh=35902,zh=35899,Bh=1021,kh=1022,Si=1023,nr=1026,Qr=1027,Gh=1028,nu=1029,es=1030,iu=1031,ru=1033,ka=33776,Ga=33777,Ha=33778,Va=33779,su=35840,ou=35841,au=35842,lu=35843,cu=36196,uu=37492,fu=37496,du=37488,hu=37489,Wa=37490,pu=37491,mu=37808,gu=37809,vu=37810,_u=37811,yu=37812,Su=37813,xu=37814,Mu=37815,Eu=37816,wu=37817,Tu=37818,Au=37819,Ru=37820,Cu=37821,bu=36492,Pu=36494,Lu=36495,Du=36283,Iu=36284,Xa=36285,Nu=36286,a_=3200,Hh=0,l_=1,Mr="",ci="srgb",Ya="srgb-linear",$a="linear",Vt="srgb",Ps=7680,Vh=519,c_=512,u_=513,f_=514,Uu=515,d_=516,h_=517,Fu=518,p_=519,Wh=35044,Xh="300 es",Oi=2e3,Lo=2001;function m_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Do(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function g_(){const s=Do("canvas");return s.style.display="block",s}const Yh={};function $h(...s){const e="THREE."+s.shift();console.log(e,...s)}function qh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function lt(...s){s=qh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ft(...s){s=qh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ou(...s){const e=s.join(" ");e in Yh||(Yh[e]=!0,lt(...s))}function v_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const __={[Hc]:Vc,[Wc]:$c,[Xc]:qc,[Cs]:Yc,[Vc]:Hc,[$c]:Wc,[qc]:Xc,[Yc]:Cs};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const Io=Math.PI/180,No=180/Math.PI;function Ls(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function zu(s,e){return(s%e+e)%e}function y_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function S_(s,e,t){return s!==e?(t-s)/(e-s):0}function Uo(s,e,t){return(1-t)*s+t*e}function x_(s,e,t,r){return Uo(s,e,1-Math.exp(-t*r))}function M_(s,e=1){return e-Math.abs(zu(s,e*2)-e)}function E_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function w_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function T_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function A_(s,e){return s+Math.random()*(e-s)}function R_(s){return s*(.5-Math.random())}function C_(s){s!==void 0&&(jh=s);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b_(s){return s*Io}function P_(s){return s*No}function L_(s){return(s&s-1)===0&&s!==0}function D_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function I_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function N_(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),m=l((e+r)/2),p=c((e+r)/2),_=l((e-r)/2),g=c((e-r)/2),y=l((r-e)/2),E=c((r-e)/2);switch(o){case"XYX":s.set(f*p,d*_,d*g,f*m);break;case"YZY":s.set(d*g,f*p,d*_,f*m);break;case"ZXZ":s.set(d*_,d*g,f*p,f*m);break;case"XZX":s.set(f*p,d*E,d*y,f*m);break;case"YXY":s.set(d*y,f*p,d*E,f*m);break;case"ZYZ":s.set(d*E,d*y,f*p,f*m);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ds(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qa={DEG2RAD:Io,RAD2DEG:No,generateUUID:Ls,clamp:Pt,euclideanModulo:zu,mapLinear:y_,inverseLerp:S_,lerp:Uo,damp:x_,pingpong:M_,smoothstep:E_,smootherstep:w_,randInt:T_,randFloat:A_,randFloatSpread:R_,seededRandom:C_,degToRad:b_,radToDeg:P_,isPowerOfTwo:L_,ceilPowerOfTwo:D_,floorPowerOfTwo:I_,setQuaternionFromProperEuler:N_,normalize:Fn,denormalize:Ds},Df=class Df{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Df.prototype.isVector2=!0;let ht=Df;class Is{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],m=r[o+1],p=r[o+2],_=r[o+3],g=l[c+0],y=l[c+1],E=l[c+2],b=l[c+3];if(_!==b||d!==g||m!==y||p!==E){let x=d*g+m*y+p*E+_*b;x<0&&(g=-g,y=-y,E=-E,b=-b,x=-x);let S=1-f;if(x<.9995){const P=Math.acos(x),N=Math.sin(P);S=Math.sin(S*P)/N,f=Math.sin(f*P)/N,d=d*S+g*f,m=m*S+y*f,p=p*S+E*f,_=_*S+b*f}else{d=d*S+g*f,m=m*S+y*f,p=p*S+E*f,_=_*S+b*f;const P=1/Math.sqrt(d*d+m*m+p*p+_*_);d*=P,m*=P,p*=P,_*=P}}e[t]=d,e[t+1]=m,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],m=r[o+2],p=r[o+3],_=l[c],g=l[c+1],y=l[c+2],E=l[c+3];return e[t]=f*E+p*_+d*y-m*g,e[t+1]=d*E+p*g+m*_-f*y,e[t+2]=m*E+p*y+f*g-d*_,e[t+3]=p*E-f*_-d*g-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,m=f(r/2),p=f(o/2),_=f(l/2),g=d(r/2),y=d(o/2),E=d(l/2);switch(c){case"XYZ":this._x=g*p*_+m*y*E,this._y=m*y*_-g*p*E,this._z=m*p*E+g*y*_,this._w=m*p*_-g*y*E;break;case"YXZ":this._x=g*p*_+m*y*E,this._y=m*y*_-g*p*E,this._z=m*p*E-g*y*_,this._w=m*p*_+g*y*E;break;case"ZXY":this._x=g*p*_-m*y*E,this._y=m*y*_+g*p*E,this._z=m*p*E+g*y*_,this._w=m*p*_-g*y*E;break;case"ZYX":this._x=g*p*_-m*y*E,this._y=m*y*_+g*p*E,this._z=m*p*E-g*y*_,this._w=m*p*_+g*y*E;break;case"YZX":this._x=g*p*_+m*y*E,this._y=m*y*_+g*p*E,this._z=m*p*E-g*y*_,this._w=m*p*_-g*y*E;break;case"XZY":this._x=g*p*_-m*y*E,this._y=m*y*_-g*p*E,this._z=m*p*E+g*y*_,this._w=m*p*_+g*y*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],m=t[2],p=t[6],_=t[10],g=r+f+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-d)*y,this._y=(l-m)*y,this._z=(c-o)*y}else if(r>f&&r>_){const y=2*Math.sqrt(1+r-f-_);this._w=(p-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+m)/y}else if(f>_){const y=2*Math.sqrt(1+f-r-_);this._w=(l-m)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+_-r-f);this._w=(c-o)/y,this._x=(l+m)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,m=t._z,p=t._w;return this._x=r*p+c*f+o*m-l*d,this._y=o*p+c*d+l*f-r*m,this._z=l*p+c*m+r*d-o*f,this._w=c*p-r*f-o*d-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const m=Math.acos(f),p=Math.sin(m);d=Math.sin(d*m)/p,t=Math.sin(t*m)/p,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const If=class If{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,m=2*(c*o-f*r),p=2*(f*t-l*o),_=2*(l*r-c*t);return this.x=t+d*m+c*_-f*p,this.y=r+d*p+f*m-l*_,this.z=o+d*_+l*p-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};If.prototype.isVector3=!0;let M=If;const Bu=new M,Kh=new Is,Nf=class Nf{constructor(e,t,r,o,l,c,f,d,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,m)}set(e,t,r,o,l,c,f,d,m){const p=this.elements;return p[0]=e,p[1]=o,p[2]=f,p[3]=t,p[4]=l,p[5]=d,p[6]=r,p[7]=c,p[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],m=r[1],p=r[4],_=r[7],g=r[2],y=r[5],E=r[8],b=o[0],x=o[3],S=o[6],P=o[1],N=o[4],L=o[7],I=o[2],R=o[5],O=o[8];return l[0]=c*b+f*P+d*I,l[3]=c*x+f*N+d*R,l[6]=c*S+f*L+d*O,l[1]=m*b+p*P+_*I,l[4]=m*x+p*N+_*R,l[7]=m*S+p*L+_*O,l[2]=g*b+y*P+E*I,l[5]=g*x+y*N+E*R,l[8]=g*S+y*L+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],m=e[7],p=e[8];return t*c*p-t*f*m-r*l*p+r*f*d+o*l*m-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],m=e[7],p=e[8],_=p*c-f*m,g=f*d-p*l,y=m*l-c*d,E=t*_+r*g+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=_*b,e[1]=(o*m-p*r)*b,e[2]=(f*r-o*c)*b,e[3]=g*b,e[4]=(p*t-o*d)*b,e[5]=(o*l-f*t)*b,e[6]=y*b,e[7]=(r*d-m*t)*b,e[8]=(c*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),m=Math.sin(l);return this.set(r*d,r*m,-r*(d*c+m*f)+c+e,-o*m,o*d,-o*(-m*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ku.makeScale(e,t)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nf.prototype.isMatrix3=!0;let xt=Nf;const ku=new xt,Zh=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U_(){const s={enabled:!0,workingColorSpace:Ya,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Vt&&(o.r=ir(o.r),o.g=ir(o.g),o.b=ir(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(o.r=Ns(o.r),o.g=Ns(o.g),o.b=Ns(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mr?$a:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ou("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ou("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ya]:{primaries:e,whitePoint:r,transfer:$a,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:Zh,fromXYZ:Jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const It=U_();function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ns(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class F_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=Do("canvas")),Us.width=e.width,Us.height=e.height;const o=Us.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=ir(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ir(t[r]/255)*255):t[r]=ir(t[r]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O_=0;class Gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Hu(o[c].image)):l.push(Hu(o[c]))}else l=Hu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Hu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?F_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let z_=0;const Vu=new M;class tn extends ts{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,r=er,o=er,l=Rn,c=Jr,f=Si,d=Jn,m=tn.DEFAULT_ANISOTROPY,p=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ls(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case er:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case er:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=Nh,tn.DEFAULT_ANISOTROPY=1;const Uf=class Uf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,m=d[0],p=d[4],_=d[8],g=d[1],y=d[5],E=d[9],b=d[2],x=d[6],S=d[10];if(Math.abs(p-g)<.01&&Math.abs(_-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+b)<.1&&Math.abs(E+x)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(m+1)/2,L=(y+1)/2,I=(S+1)/2,R=(p+g)/4,O=(_+b)/4,A=(E+x)/4;return N>L&&N>I?N<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(N),o=R/r,l=O/r):L>I?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=R/o,l=A/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=O/l,o=A/l),this.set(r,o,l,t),this}let P=Math.sqrt((x-E)*(x-E)+(_-b)*(_-b)+(g-p)*(g-p));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(_-b)/P,this.z=(g-p)/P,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uf.prototype.isVector4=!0;let an=Uf;class B_ extends ts{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new tn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Gu(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends B_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Qh extends tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dl=class Dl{constructor(e,t,r,o,l,c,f,d,m,p,_,g,y,E,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,m,p,_,g,y,E,b,x)}set(e,t,r,o,l,c,f,d,m,p,_,g,y,E,b,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=c,S[9]=f,S[13]=d,S[2]=m,S[6]=p,S[10]=_,S[14]=g,S[3]=y,S[7]=E,S[11]=b,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dl().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),c=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),m=Math.sin(o),p=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=c*p,y=c*_,E=f*p,b=f*_;t[0]=d*p,t[4]=-d*_,t[8]=m,t[1]=y+E*m,t[5]=g-b*m,t[9]=-f*d,t[2]=b-g*m,t[6]=E+y*m,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,y=d*_,E=m*p,b=m*_;t[0]=g+b*f,t[4]=E*f-y,t[8]=c*m,t[1]=c*_,t[5]=c*p,t[9]=-f,t[2]=y*f-E,t[6]=b+g*f,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,y=d*_,E=m*p,b=m*_;t[0]=g-b*f,t[4]=-c*_,t[8]=E+y*f,t[1]=y+E*f,t[5]=c*p,t[9]=b-g*f,t[2]=-c*m,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,y=c*_,E=f*p,b=f*_;t[0]=d*p,t[4]=E*m-y,t[8]=g*m+b,t[1]=d*_,t[5]=b*m+g,t[9]=y*m-E,t[2]=-m,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,y=c*m,E=f*d,b=f*m;t[0]=d*p,t[4]=b-g*_,t[8]=E*_+y,t[1]=_,t[5]=c*p,t[9]=-f*p,t[2]=-m*p,t[6]=y*_+E,t[10]=g-b*_}else if(e.order==="XZY"){const g=c*d,y=c*m,E=f*d,b=f*m;t[0]=d*p,t[4]=-_,t[8]=m*p,t[1]=g*_+b,t[5]=c*p,t[9]=y*_-E,t[2]=E*_-y,t[6]=f*p,t[10]=b*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,H_)}lookAt(e,t,r){const o=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Er.crossVectors(r,Qn),Er.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Er.crossVectors(r,Qn)),Er.normalize(),ja.crossVectors(Qn,Er),o[0]=Er.x,o[4]=ja.x,o[8]=Qn.x,o[1]=Er.y,o[5]=ja.y,o[9]=Qn.y,o[2]=Er.z,o[6]=ja.z,o[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],m=r[12],p=r[1],_=r[5],g=r[9],y=r[13],E=r[2],b=r[6],x=r[10],S=r[14],P=r[3],N=r[7],L=r[11],I=r[15],R=o[0],O=o[4],A=o[8],F=o[12],H=o[1],G=o[5],Z=o[9],ae=o[13],de=o[2],X=o[6],$=o[10],j=o[14],J=o[3],oe=o[7],re=o[11],B=o[15];return l[0]=c*R+f*H+d*de+m*J,l[4]=c*O+f*G+d*X+m*oe,l[8]=c*A+f*Z+d*$+m*re,l[12]=c*F+f*ae+d*j+m*B,l[1]=p*R+_*H+g*de+y*J,l[5]=p*O+_*G+g*X+y*oe,l[9]=p*A+_*Z+g*$+y*re,l[13]=p*F+_*ae+g*j+y*B,l[2]=E*R+b*H+x*de+S*J,l[6]=E*O+b*G+x*X+S*oe,l[10]=E*A+b*Z+x*$+S*re,l[14]=E*F+b*ae+x*j+S*B,l[3]=P*R+N*H+L*de+I*J,l[7]=P*O+N*G+L*X+I*oe,l[11]=P*A+N*Z+L*$+I*re,l[15]=P*F+N*ae+L*j+I*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],m=e[13],p=e[2],_=e[6],g=e[10],y=e[14],E=e[3],b=e[7],x=e[11],S=e[15],P=d*y-m*g,N=f*y-m*_,L=f*g-d*_,I=c*y-m*p,R=c*g-d*p,O=c*_-f*p;return t*(b*P-x*N+S*L)-r*(E*P-x*I+S*R)+o*(E*N-b*I+S*O)-l*(E*L-b*R+x*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],m=e[7],p=e[8],_=e[9],g=e[10],y=e[11],E=e[12],b=e[13],x=e[14],S=e[15],P=t*f-r*c,N=t*d-o*c,L=t*m-l*c,I=r*d-o*f,R=r*m-l*f,O=o*m-l*d,A=p*b-_*E,F=p*x-g*E,H=p*S-y*E,G=_*x-g*b,Z=_*S-y*b,ae=g*S-y*x,de=P*ae-N*Z+L*G+I*H-R*F+O*A;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/de;return e[0]=(f*ae-d*Z+m*G)*X,e[1]=(o*Z-r*ae-l*G)*X,e[2]=(b*O-x*R+S*I)*X,e[3]=(g*R-_*O-y*I)*X,e[4]=(d*H-c*ae-m*F)*X,e[5]=(t*ae-o*H+l*F)*X,e[6]=(x*L-E*O-S*N)*X,e[7]=(p*O-g*L+y*N)*X,e[8]=(c*Z-f*H+m*A)*X,e[9]=(r*H-t*Z-l*A)*X,e[10]=(E*R-b*L+S*P)*X,e[11]=(_*L-p*R-y*P)*X,e[12]=(f*F-c*G-d*A)*X,e[13]=(t*G-r*F+o*A)*X,e[14]=(b*N-E*I-x*P)*X,e[15]=(p*I-_*N+g*P)*X,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,m=l*c,p=l*f;return this.set(m*c+r,m*f-o*d,m*d+o*f,0,m*f+o*d,p*f+r,p*d-o*c,0,m*d-o*f,p*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,m=l+l,p=c+c,_=f+f,g=l*m,y=l*p,E=l*_,b=c*p,x=c*_,S=f*_,P=d*m,N=d*p,L=d*_,I=r.x,R=r.y,O=r.z;return o[0]=(1-(b+S))*I,o[1]=(y+L)*I,o[2]=(E-N)*I,o[3]=0,o[4]=(y-L)*R,o[5]=(1-(g+S))*R,o[6]=(x+P)*R,o[7]=0,o[8]=(E+N)*O,o[9]=(x-P)*O,o[10]=(1-(g+b))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Fs.set(o[0],o[1],o[2]).length();const f=Fs.set(o[4],o[5],o[6]).length(),d=Fs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),xi.copy(this);const m=1/c,p=1/f,_=1/d;return xi.elements[0]*=m,xi.elements[1]*=m,xi.elements[2]*=m,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=_,xi.elements[9]*=_,xi.elements[10]*=_,t.setFromRotationMatrix(xi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=Oi,d=!1){const m=this.elements,p=2*l/(t-e),_=2*l/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let E,b;if(d)E=l/(c-l),b=c*l/(c-l);else if(f===Oi)E=-(c+l)/(c-l),b=-2*c*l/(c-l);else if(f===Lo)E=-c/(c-l),b=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=p,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Oi,d=!1){const m=this.elements,p=2/(t-e),_=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let E,b;if(d)E=1/(c-l),b=c/(c-l);else if(f===Oi)E=-2/(c-l),b=-(c+l)/(c-l);else if(f===Lo)E=-1/(c-l),b=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=p,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Dl.prototype.isMatrix4=!0;let nn=Dl;const Fs=new M,xi=new nn,G_=new M(0,0,0),H_=new M(1,1,1),Er=new M,ja=new M,Qn=new M,ep=new nn,tp=new Is;class ns{constructor(e=0,t=0,r=0,o=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],m=o[5],p=o[9],_=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Pt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-p,y),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V_=0;const ip=new M,Os=new Is,rr=new nn,Ka=new M,Fo=new M,W_=new M,X_=new Is,rp=new M(1,0,0),sp=new M(0,1,0),op=new M(0,0,1),ap={type:"added"},Y_={type:"removed"},zs={type:"childadded",child:null},Wu={type:"childremoved",child:null};class En extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new M,t=new ns,r=new Is,o=new M(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new xt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ka.copy(e):Ka.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Fo,Ka,this.up):rr.lookAt(Ka,Fo,this.up),this.quaternion.setFromRotationMatrix(rr),o&&(rr.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(rr),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),zs.child=e,this.dispatchEvent(zs),zs.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,W_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,X_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let m=0,p=d.length;m<p;m++){const _=d[m];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,m=this.material.length;d<m;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),m=c(e.textures),p=c(e.images),_=c(e.shapes),g=c(e.skeletons),y=c(e.animations),E=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),m.length>0&&(r.textures=m),p.length>0&&(r.images=p),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(f){const d=[];for(const m in f){const p=f[m];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}En.DEFAULT_UP=new M(0,1,0),En.DEFAULT_MATRIX_AUTO_UPDATE=!0,En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wn extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,r),S=this._getHandJoint(m,b);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const p=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=p.position.distanceTo(_.position),y=.02,E=.005;m.inputState.pinching&&g>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent($_)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Yu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class zt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=It.workingColorSpace){if(e=zu(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Yu(c,l,e+1/3),this.g=Yu(c,l,e),this.b=Yu(c,l,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,t=ci){function r(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const r=lp[e.toLowerCase()];return r!==void 0?this.setHex(r,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return It.workingToColorSpace(bn.copy(this),e),Math.round(Pt(bn.r*255,0,255))*65536+Math.round(Pt(bn.g*255,0,255))*256+Math.round(Pt(bn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(bn.copy(this),t);const r=bn.r,o=bn.g,l=bn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,m;const p=(f+c)/2;if(f===c)d=0,m=0;else{const _=c-f;switch(m=p<=.5?_/(c+f):_/(2-c-f),c){case r:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-r)/_+2;break;case l:d=(r-o)/_+4;break}d/=6}return e.h=d,e.s=m,e.l=p,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ci){It.workingToColorSpace(bn.copy(this),e);const t=bn.r,r=bn.g,o=bn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Za);const r=Uo(wr.h,Za.h,t),o=Uo(wr.s,Za.s,t),l=Uo(wr.l,Za.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new zt;zt.NAMES=lp;class Ja extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new M,sr=new M,$u=new M,or=new M,Bs=new M,ks=new M,cp=new M,qu=new M,ju=new M,Ku=new M,Zu=new an,Ju=new an,Qu=new an;class Ei{constructor(e=new M,t=new M,r=new M){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Mi.subVectors(e,t),o.cross(Mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Mi.subVectors(o,t),sr.subVectors(r,t),$u.subVectors(e,t);const c=Mi.dot(Mi),f=Mi.dot(sr),d=Mi.dot($u),m=sr.dot(sr),p=sr.dot($u),_=c*m-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,y=(m*d-f*p)*g,E=(c*p-f*d)*g;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,or)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,or.x),d.addScaledVector(c,or.y),d.addScaledVector(f,or.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return Zu.setScalar(0),Ju.setScalar(0),Qu.setScalar(0),Zu.fromBufferAttribute(e,t),Ju.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Zu,l.x),c.addScaledVector(Ju,l.y),c.addScaledVector(Qu,l.z),c}static isFrontFacing(e,t,r,o){return Mi.subVectors(r,t),sr.subVectors(e,t),Mi.cross(sr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Mi.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Bs.subVectors(o,r),ks.subVectors(l,r),qu.subVectors(e,r);const d=Bs.dot(qu),m=ks.dot(qu);if(d<=0&&m<=0)return t.copy(r);ju.subVectors(e,o);const p=Bs.dot(ju),_=ks.dot(ju);if(p>=0&&_<=p)return t.copy(o);const g=d*_-p*m;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(Bs,c);Ku.subVectors(e,l);const y=Bs.dot(Ku),E=ks.dot(Ku);if(E>=0&&y<=E)return t.copy(l);const b=y*m-d*E;if(b<=0&&m>=0&&E<=0)return f=m/(m-E),t.copy(r).addScaledVector(ks,f);const x=p*E-y*_;if(x<=0&&_-p>=0&&y-E>=0)return cp.subVectors(l,o),f=(_-p)/(_-p+(y-E)),t.copy(o).addScaledVector(cp,f);const S=1/(x+b+g);return c=b*S,f=g*S,t.copy(r).addScaledVector(Bs,c).addScaledVector(ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oo{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,wi):wi.fromBufferAttribute(l,c),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),el.subVectors(this.max,zo),Gs.subVectors(e.a,zo),Hs.subVectors(e.b,zo),Vs.subVectors(e.c,zo),Tr.subVectors(Hs,Gs),Ar.subVectors(Vs,Hs),is.subVectors(Gs,Vs);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-is.z,is.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,is.z,0,-is.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-is.y,is.x,0];return!ef(t,Gs,Hs,Vs,el)||(t=[1,0,0,0,1,0,0,0,1],!ef(t,Gs,Hs,Vs,el))?!1:(tl.crossVectors(Tr,Ar),t=[tl.x,tl.y,tl.z],ef(t,Gs,Hs,Vs,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new M,new M,new M,new M,new M,new M,new M,new M],wi=new M,Qa=new Oo,Gs=new M,Hs=new M,Vs=new M,Tr=new M,Ar=new M,is=new M,zo=new M,el=new M,tl=new M,rs=new M;function ef(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){rs.fromArray(s,l);const f=o.x*Math.abs(rs.x)+o.y*Math.abs(rs.y)+o.z*Math.abs(rs.z),d=e.dot(rs),m=t.dot(rs),p=r.dot(rs);if(Math.max(-Math.max(d,m,p),Math.min(d,m,p))>f)return!1}return!0}const un=new M,nl=new ht;let q_=0;class Bi extends ts{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Wh,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ds(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class up extends Bi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class fp extends Bi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gt extends Bi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const j_=new Oo,Bo=new M,tf=new M;class il{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):j_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Bo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(tf)),this.expandByPoint(Bo.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let K_=0;const ui=new nn,nf=new En,Ws=new M,ei=new Oo,ko=new Oo,vn=new M;class _n extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?fp:up)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return nf.lookAt(e),nf.updateMatrix(),this.applyMatrix4(nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ko.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(ei.min,ko.min),ei.expandByPoint(vn),vn.addVectors(ei.max,ko.max),ei.expandByPoint(vn)):(ei.expandByPoint(ko.min),ei.expandByPoint(ko.max))}ei.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(vn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let m=0,p=f.count;m<p;m++)vn.fromBufferAttribute(f,m),d&&(Ws.fromBufferAttribute(e,m),vn.add(Ws)),o=Math.max(o,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let A=0;A<r.count;A++)f[A]=new M,d[A]=new M;const m=new M,p=new M,_=new M,g=new ht,y=new ht,E=new ht,b=new M,x=new M;function S(A,F,H){m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,F),_.fromBufferAttribute(r,H),g.fromBufferAttribute(l,A),y.fromBufferAttribute(l,F),E.fromBufferAttribute(l,H),p.sub(m),_.sub(m),y.sub(g),E.sub(g);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(b.copy(p).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(G),x.copy(_).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(G),f[A].add(b),f[F].add(b),f[H].add(b),d[A].add(x),d[F].add(x),d[H].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let A=0,F=P.length;A<F;++A){const H=P[A],G=H.start,Z=H.count;for(let ae=G,de=G+Z;ae<de;ae+=3)S(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const N=new M,L=new M,I=new M,R=new M;function O(A){I.fromBufferAttribute(o,A),R.copy(I);const F=f[A];N.copy(F),N.sub(I.multiplyScalar(I.dot(F))).normalize(),L.crossVectors(R,F);const G=L.dot(d[A])<0?-1:1;c.setXYZW(A,N.x,N.y,N.z,G)}for(let A=0,F=P.length;A<F;++A){const H=P[A],G=H.start,Z=H.count;for(let ae=G,de=G+Z;ae<de;ae+=3)O(e.getX(ae+0)),O(e.getX(ae+1)),O(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new M,l=new M,c=new M,f=new M,d=new M,m=new M,p=new M,_=new M;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),b=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),c.fromBufferAttribute(t,x),p.subVectors(c,l),_.subVectors(o,l),p.cross(_),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,x),f.add(p),d.add(p),m.add(p),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,l),_.subVectors(o,l),p.cross(_),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(f,d){const m=f.array,p=f.itemSize,_=f.normalized,g=new m.constructor(d.length*p);let y=0,E=0;for(let b=0,x=d.length;b<x;b++){f.isInterleavedBufferAttribute?y=d[b]*f.data.stride+f.offset:y=d[b]*p;for(let S=0;S<p;S++)g[E++]=m[y++]}return new Bi(g,p,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],m=e(d,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const d=[],m=l[f];for(let p=0,_=m.length;p<_;p++){const g=m[p],y=e(g,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const m=c[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(e[m]=d[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const m=r[d];e.data.attributes[d]=m.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],p=[];for(let _=0,g=m.length;_<g;_++){const y=m[_];p.push(y.toJSON(e.data))}p.length>0&&(o[d]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const p=o[m];this.setAttribute(m,p.clone(t))}const l=e.morphAttributes;for(const m in l){const p=[],_=l[m];for(let g=0,y=_.length;g<y;g++)p.push(_[g].clone(t));this.morphAttributes[m]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,p=c.length;m<p;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Z_=0;class Go extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=Rs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Gc,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kc&&(r.blendSrc=this.blendSrc),this.blendDst!==Gc&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lr=new M,rf=new M,rl=new M,Rr=new M,sf=new M,sl=new M,of=new M;class dp{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){rf.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(rf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(rl),f=Rr.dot(this.direction),d=-Rr.dot(rl),m=Rr.lengthSq(),p=Math.abs(1-c*c);let _,g,y,E;if(p>0)if(_=c*d-f,g=c*f-d,E=l*p,_>=0)if(g>=-E)if(g<=E){const b=1/p;_*=b,g*=b,y=_*(_+c*g+2*f)+g*(c*_+g+2*d)+m}else g=l,_=Math.max(0,-(c*g+f)),y=-_*_+g*(g+2*d)+m;else g=-l,_=Math.max(0,-(c*g+f)),y=-_*_+g*(g+2*d)+m;else g<=-E?(_=Math.max(0,-(-c*l+f)),g=_>0?-l:Math.min(Math.max(-l,-d),l),y=-_*_+g*(g+2*d)+m):g<=E?(_=0,g=Math.min(Math.max(-l,-d),l),y=g*(g+2*d)+m):(_=Math.max(0,-(c*l+f)),g=_>0?l:Math.min(Math.max(-l,-d),l),y=-_*_+g*(g+2*d)+m);else g=c>0?-l:l,_=Math.max(0,-(c*g+f)),y=-_*_+g*(g+2*d)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(rf).addScaledVector(rl,g),y}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const r=lr.dot(this.direction),o=lr.dot(lr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const m=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),p>=0?(l=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(l=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,r,o,l){sf.subVectors(t,e),sl.subVectors(r,e),of.crossVectors(sf,sl);let c=this.direction.dot(of),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const d=f*this.direction.dot(sl.crossVectors(Rr,sl));if(d<0)return null;const m=f*this.direction.dot(sf.cross(Rr));if(m<0||d+m>c)return null;const p=-f*Rr.dot(of);return p<0?null:this.at(p/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hp=new nn,ss=new dp,ol=new il,pp=new M,al=new M,ll=new M,cl=new M,af=new M,ul=new M,mp=new M,fl=new M;class be extends En{constructor(e=new _n,t=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){ul.set(0,0,0);for(let d=0,m=l.length;d<m;d++){const p=f[d],_=l[d];p!==0&&(af.fromBufferAttribute(_,e),c?ul.addScaledVector(af,p):ul.addScaledVector(af.sub(t),p))}t.add(ul)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ol.copy(r.boundingSphere),ol.applyMatrix4(l),ss.copy(e.ray).recast(e.near),!(ol.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ol,pp)===null||ss.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(hp.copy(l).invert(),ss.copy(e.ray).applyMatrix4(hp),!(r.boundingBox!==null&&ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,m=l.attributes.uv,p=l.attributes.uv1,_=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,b=g.length;E<b;E++){const x=g[E],S=c[x.materialIndex],P=Math.max(x.start,y.start),N=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=P,I=N;L<I;L+=3){const R=f.getX(L),O=f.getX(L+1),A=f.getX(L+2);o=dl(this,S,e,r,m,p,_,R,O,A),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let x=E,S=b;x<S;x+=3){const P=f.getX(x),N=f.getX(x+1),L=f.getX(x+2);o=dl(this,c,e,r,m,p,_,P,N,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,b=g.length;E<b;E++){const x=g[E],S=c[x.materialIndex],P=Math.max(x.start,y.start),N=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let L=P,I=N;L<I;L+=3){const R=L,O=L+1,A=L+2;o=dl(this,S,e,r,m,p,_,R,O,A),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let x=E,S=b;x<S;x+=3){const P=x,N=x+1,L=x+2;o=dl(this,c,e,r,m,p,_,P,N,L),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function J_(s,e,t,r,o,l,c,f){let d;if(e.side===Vn?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===xr,f),d===null)return null;fl.copy(f),fl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(fl);return m<t.near||m>t.far?null:{distance:m,point:fl.clone(),object:s}}function dl(s,e,t,r,o,l,c,f,d,m){s.getVertexPosition(f,al),s.getVertexPosition(d,ll),s.getVertexPosition(m,cl);const p=J_(s,e,t,r,al,ll,cl,mp);if(p){const _=new M;Ei.getBarycoord(mp,al,ll,cl,_),o&&(p.uv=Ei.getInterpolatedAttribute(o,f,d,m,_,new ht)),l&&(p.uv1=Ei.getInterpolatedAttribute(l,f,d,m,_,new ht)),c&&(p.normal=Ei.getInterpolatedAttribute(c,f,d,m,_,new M),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:f,b:d,c:m,normal:new M,materialIndex:0};Ei.getNormal(al,ll,cl,g.normal),p.face=g,p.barycoord=_}return p}class Q_ extends tn{constructor(e=null,t=1,r=1,o,l,c,f,d,m=Mn,p=Mn,_,g){super(null,c,f,d,m,p,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lf=new M,e1=new M,t1=new xt;class os{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=lf.subVectors(r,t).cross(e1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(lf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||t1.getNormalMatrix(e),o=this.coplanarPoint(lf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new il,n1=new ht(.5,.5),hl=new M;class cf{constructor(e=new os,t=new os,r=new os,o=new os,l=new os,c=new os){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Oi,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],m=l[3],p=l[4],_=l[5],g=l[6],y=l[7],E=l[8],b=l[9],x=l[10],S=l[11],P=l[12],N=l[13],L=l[14],I=l[15];if(o[0].setComponents(m-c,y-p,S-E,I-P).normalize(),o[1].setComponents(m+c,y+p,S+E,I+P).normalize(),o[2].setComponents(m+f,y+_,S+b,I+N).normalize(),o[3].setComponents(m-f,y-_,S-b,I-N).normalize(),r)o[4].setComponents(d,g,x,L).normalize(),o[5].setComponents(m-d,y-g,S-x,I-L).normalize();else if(o[4].setComponents(m-d,y-g,S-x,I-L).normalize(),t===Oi)o[5].setComponents(m+d,y+g,S+x,I+L).normalize();else if(t===Lo)o[5].setComponents(d,g,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=n1.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(hl.x=o.normal.x>0?e.max.x:e.min.x,hl.y=o.normal.y>0?e.max.y:e.min.y,hl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gp extends Go{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pl=new M,ml=new M,vp=new nn,Ho=new dp,gl=new il,uf=new M,_p=new M;class i1 extends En{constructor(e=new _n,t=new gp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)pl.fromBufferAttribute(t,o-1),ml.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new Gt(r,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(o),gl.radius+=l,e.ray.intersectsSphere(gl)===!1)return;vp.copy(o).invert(),Ho.copy(e.ray).applyMatrix4(vp);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,m=this.isLineSegments?2:1,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,c.start),E=Math.min(p.count,c.start+c.count);for(let b=y,x=E-1;b<x;b+=m){const S=p.getX(b),P=p.getX(b+1),N=vl(this,e,Ho,d,S,P,b);N&&t.push(N)}if(this.isLineLoop){const b=p.getX(E-1),x=p.getX(y),S=vl(this,e,Ho,d,b,x,E-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let b=y,x=E-1;b<x;b+=m){const S=vl(this,e,Ho,d,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=vl(this,e,Ho,d,E-1,y,E-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function vl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(pl.fromBufferAttribute(f,o),ml.fromBufferAttribute(f,l),t.distanceSqToSegment(pl,ml,uf,_p)>r)return;uf.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(uf);if(!(m<e.near||m>e.far))return{distance:m,point:_p.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const yp=new M,Sp=new M;class r1 extends i1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)yp.fromBufferAttribute(t,o),Sp.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+yp.distanceTo(Sp);e.setAttribute("lineDistance",new Gt(r,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xp extends tn{constructor(e=[],t=Zr,r,o,l,c,f,d,m,p){super(e,t,r,o,l,c,f,d,m,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xs extends tn{constructor(e,t,r=Ui,o,l,c,f=Mn,d=Mn,m,p=nr,_=1){if(p!==nr&&p!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,c,f,d,p,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class s1 extends Xs{constructor(e,t=Ui,r=Zr,o,l,c=Mn,f=Mn,d,m=nr){const p={width:e,height:e,depth:1},_=[p,p,p,p,p,p];super(e,e,t,r,o,l,c,f,d,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mp extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vo extends _n{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],m=[],p=[],_=[];let g=0,y=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(_,2));function E(b,x,S,P,N,L,I,R,O,A,F){const H=L/O,G=I/A,Z=L/2,ae=I/2,de=R/2,X=O+1,$=A+1;let j=0,J=0;const oe=new M;for(let re=0;re<$;re++){const B=re*G-ae;for(let Q=0;Q<X;Q++){const ge=Q*H-Z;oe[b]=ge*P,oe[x]=B*N,oe[S]=de,m.push(oe.x,oe.y,oe.z),oe[b]=0,oe[x]=0,oe[S]=R>0?1:-1,p.push(oe.x,oe.y,oe.z),_.push(Q/O),_.push(1-re/A),j+=1}}for(let re=0;re<A;re++)for(let B=0;B<O;B++){const Q=g+B+X*re,ge=g+B+X*(re+1),Ie=g+(B+1)+X*(re+1),Ue=g+(B+1)+X*re;d.push(Q,ge,Ue),d.push(ge,Ie,Ue),J+=6}f.addGroup(y,J,F),y+=J,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pn extends _n{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const c=[],f=[],d=[],m=[],p=t/2,_=Math.PI/2*e,g=t,y=2*_+g,E=r*2+l,b=o+1,x=new M,S=new M;for(let P=0;P<=E;P++){let N=0,L=0,I=0,R=0;if(P<=r){const F=P/r,H=F*Math.PI/2;L=-p-e*Math.cos(H),I=e*Math.sin(H),R=-e*Math.cos(H),N=F*_}else if(P<=r+l){const F=(P-r)/l;L=-p+F*t,I=e,R=0,N=_+F*g}else{const F=(P-r-l)/r,H=F*Math.PI/2;L=p+e*Math.sin(H),I=e*Math.cos(H),R=e*Math.sin(H),N=_+g+F*_}const O=Math.max(0,Math.min(1,N/y));let A=0;P===0?A=.5/o:P===E&&(A=-.5/o);for(let F=0;F<=o;F++){const H=F/o,G=H*Math.PI*2,Z=Math.sin(G),ae=Math.cos(G);S.x=-I*ae,S.y=L,S.z=I*Z,f.push(S.x,S.y,S.z),x.set(-I*ae,R,I*Z),x.normalize(),d.push(x.x,x.y,x.z),m.push(H+A,O)}if(P>0){const F=(P-1)*b;for(let H=0;H<o;H++){const G=F+H,Z=F+H+1,ae=P*b+H,de=P*b+H+1;c.push(G,Z,ae),c.push(Z,de,ae)}}}this.setIndex(c),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,m;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),m=r[o]-c,m<0)f=o+1;else if(m>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const p=r[o],g=r[o+1]-p,y=(c-p)/g;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new ht:new M);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new M,o=[],l=[],c=[],f=new M,d=new nn;for(let y=0;y<=e;y++){const E=y/e;o[y]=this.getTangentAt(E,new M)}l[0]=new M,c[0]=new M;let m=Number.MAX_VALUE;const p=Math.abs(o[0].x),_=Math.abs(o[0].y),g=Math.abs(o[0].z);p<=m&&(m=p,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),g<=m&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(Pt(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(d.makeRotationAxis(f,E))}c[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(Pt(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let E=1;E<=e;E++)l[E].applyMatrix4(d.makeRotationAxis(o[E],y*E)),c[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ep extends cr{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=d}getPoint(e,t=new ht){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const p=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=d-this.aX,y=m-this.aY;d=g*p-y*_+this.aX,m=g*_+y*p+this.aY}return r.set(d,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class o1 extends Ep{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function ff(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,m){o(c,f,m*(f-l),m*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,m,p,_){let g=(c-l)/m-(f-l)/(m+p)+(f-c)/p,y=(f-c)/p-(d-c)/(p+_)+(d-f)/_;g*=p,y*=p,o(c,f,g,y)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const wp=new M,Tp=new M,df=new ff,hf=new ff,pf=new ff;class Mt extends cr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new M){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let m,p;this.closed||f>0?m=o[(f-1)%l]:(Tp.subVectors(o[0],o[1]).add(o[0]),m=Tp);const _=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?p=o[(f+2)%l]:(wp.subVectors(o[l-1],o[l-2]).add(o[l-1]),p=wp),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),y),b=Math.pow(_.distanceToSquared(g),y),x=Math.pow(g.distanceToSquared(p),y);b<1e-4&&(b=1),E<1e-4&&(E=b),x<1e-4&&(x=b),df.initNonuniformCatmullRom(m.x,_.x,g.x,p.x,E,b,x),hf.initNonuniformCatmullRom(m.y,_.y,g.y,p.y,E,b,x),pf.initNonuniformCatmullRom(m.z,_.z,g.z,p.z,E,b,x)}else this.curveType==="catmullrom"&&(df.initCatmullRom(m.x,_.x,g.x,p.x,this.tension),hf.initCatmullRom(m.y,_.y,g.y,p.y,this.tension),pf.initCatmullRom(m.z,_.z,g.z,p.z,this.tension));return r.set(df.calc(d),hf.calc(d),pf.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new M().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ap(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,d=s*f;return(2*t-2*r+l+c)*d+(-3*t+3*r-2*l-c)*f+l*s+t}function a1(s,e){const t=1-s;return t*t*e}function l1(s,e){return 2*(1-s)*s*e}function c1(s,e){return s*s*e}function Wo(s,e,t,r){return a1(s,e)+l1(s,t)+c1(s,r)}function u1(s,e){const t=1-s;return t*t*t*e}function f1(s,e){const t=1-s;return 3*t*t*s*e}function d1(s,e){return 3*(1-s)*s*s*e}function h1(s,e){return s*s*s*e}function Xo(s,e,t,r,o){return u1(s,e)+f1(s,t)+d1(s,r)+h1(s,o)}class p1 extends cr{constructor(e=new ht,t=new ht,r=new ht,o=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ht){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Xo(e,o.x,l.x,c.x,f.x),Xo(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m1 extends cr{constructor(e=new M,t=new M,r=new M,o=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new M){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Xo(e,o.x,l.x,c.x,f.x),Xo(e,o.y,l.y,c.y,f.y),Xo(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class g1 extends cr{constructor(e=new ht,t=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ht){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ht){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v1 extends cr{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _1 extends cr{constructor(e=new ht,t=new ht,r=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ht){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Wo(e,o.x,l.x,c.x),Wo(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rp extends cr{constructor(e=new M,t=new M,r=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new M){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Wo(e,o.x,l.x,c.x),Wo(e,o.y,l.y,c.y),Wo(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y1 extends cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ht){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,d=o[c===0?c:c-1],m=o[c],p=o[c>o.length-2?o.length-1:c+1],_=o[c>o.length-3?o.length-1:c+2];return r.set(Ap(f,d.x,m.x,p.x,_.x),Ap(f,d.y,m.y,p.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ht().fromArray(o))}return this}}var S1=Object.freeze({__proto__:null,ArcCurve:o1,CatmullRomCurve3:Mt,CubicBezierCurve:p1,CubicBezierCurve3:m1,EllipseCurve:Ep,LineCurve:g1,LineCurve3:v1,QuadraticBezierCurve:_1,QuadraticBezierCurve3:Rp,SplineCurve:y1});class _l extends _n{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),m=f+1,p=d+1,_=e/f,g=t/d,y=[],E=[],b=[],x=[];for(let S=0;S<p;S++){const P=S*g-c;for(let N=0;N<m;N++){const L=N*_-l;E.push(L,-P,0),b.push(0,0,1),x.push(N/f),x.push(1-S/d)}}for(let S=0;S<d;S++)for(let P=0;P<f;P++){const N=P+m*S,L=P+m*(S+1),I=P+1+m*(S+1),R=P+1+m*S;y.push(N,L,R),y.push(L,I,R)}this.setIndex(y),this.setAttribute("position",new Gt(E,3)),this.setAttribute("normal",new Gt(b,3)),this.setAttribute("uv",new Gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}class $t extends _n{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let m=0;const p=[],_=new M,g=new M,y=[],E=[],b=[],x=[];for(let S=0;S<=r;S++){const P=[],N=S/r;let L=0;S===0&&c===0?L=.5/t:S===r&&d===Math.PI&&(L=-.5/t);for(let I=0;I<=t;I++){const R=I/t;_.x=-e*Math.cos(o+R*l)*Math.sin(c+N*f),_.y=e*Math.cos(c+N*f),_.z=e*Math.sin(o+R*l)*Math.sin(c+N*f),E.push(_.x,_.y,_.z),g.copy(_).normalize(),b.push(g.x,g.y,g.z),x.push(R+L,1-N),P.push(m++)}p.push(P)}for(let S=0;S<r;S++)for(let P=0;P<t;P++){const N=p[S][P+1],L=p[S][P],I=p[S+1][P],R=p[S+1][P+1];(S!==0||c>0)&&y.push(N,L,R),(S!==r-1||d<Math.PI)&&y.push(L,I,R)}this.setIndex(y),this.setAttribute("position",new Gt(E,3)),this.setAttribute("normal",new Gt(b,3)),this.setAttribute("uv",new Gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fi extends _n{constructor(e=new Rp(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const f=new M,d=new M,m=new ht;let p=new M;const _=[],g=[],y=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(y,2));function b(){for(let N=0;N<t;N++)x(N);x(l===!1?t:0),P(),S()}function x(N){p=e.getPointAt(N/t,p);const L=c.normals[N],I=c.binormals[N];for(let R=0;R<=o;R++){const O=R/o*Math.PI*2,A=Math.sin(O),F=-Math.cos(O);d.x=F*L.x+A*I.x,d.y=F*L.y+A*I.y,d.z=F*L.z+A*I.z,d.normalize(),g.push(d.x,d.y,d.z),f.x=p.x+r*d.x,f.y=p.y+r*d.y,f.z=p.z+r*d.z,_.push(f.x,f.y,f.z)}}function S(){for(let N=1;N<=t;N++)for(let L=1;L<=o;L++){const I=(o+1)*(N-1)+(L-1),R=(o+1)*N+(L-1),O=(o+1)*N+L,A=(o+1)*(N-1)+L;E.push(I,R,A),E.push(R,O,A)}}function P(){for(let N=0;N<=t;N++)for(let L=0;L<=o;L++)m.x=N/t,m.y=L/o,y.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fi(new S1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ys(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Cp(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Cp(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const r=Ys(s[t]);for(const o in r)e[o]=r[o]}return e}function Cp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function x1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const M1={clone:Ys,merge:On};var E1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E1,this.fragmentShader=w1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=x1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class T1 extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class A1 extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R1 extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mf={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Pp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Pp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Pp(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class C1{constructor(e,t,r){const o=this;let l=!1,c=0,f=0,d;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(p){f++,l===!1&&o.onStart!==void 0&&o.onStart(p,c,f),l=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,_){return m.push(p,_),this},this.removeHandler=function(p){const _=m.indexOf(p);return _!==-1&&m.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=m.length;_<g;_+=2){const y=m[_],E=m[_+1];if(y.global&&(y.lastIndex=0),y.test(p))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const b1=new C1;class gf{constructor(e){this.manager=e!==void 0?e:b1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}gf.DEFAULT_MATERIAL_NAME="__DEFAULT";const $s=new WeakMap;class P1 extends gf{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=mf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=$s.get(c);_===void 0&&(_=[],$s.set(c,_)),_.push({onLoad:t,onError:o})}return c}const f=Do("img");function d(){p(),t&&t(this);const _=$s.get(this)||[];for(let g=0;g<_.length;g++){const y=_[g];y.onLoad&&y.onLoad(this)}$s.delete(this),l.manager.itemEnd(e)}function m(_){p(),o&&o(_),mf.remove(`image:${e}`);const g=$s.get(this)||[];for(let y=0;y<g.length;y++){const E=g[y];E.onError&&E.onError(_)}$s.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function p(){f.removeEventListener("load",d,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),mf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class ls extends gf{constructor(e){super(e)}load(e,t,r,o){const l=new tn,c=new P1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class Lp extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const vf=new nn,Dp=new M,Ip=new M;class L1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ip),t.updateMatrixWorld(),vf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Lo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(vf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yl=new M,Sl=new Is,Gi=new M;class Np extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,Sl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(yl,Sl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Sl,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new M,Up=new ht,Fp=new ht;class zn extends Np{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Up,Fp),t.subVectors(Fp,Up)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/m,o*=c.width/d,r*=c.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _f extends Np{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=p*this.view.offsetY,d=f-p*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class D1 extends L1{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class di extends Lp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new D1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class xl extends Lp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const qs=-90,js=1;class I1 extends En{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zn(qs,js,e,t);o.layers=this.layers,this.add(o);const l=new zn(qs,js,e,t);l.layers=this.layers,this.add(l);const c=new zn(qs,js,e,t);c.layers=this.layers,this.add(c);const f=new zn(qs,js,e,t);f.layers=this.layers,this.add(f);const d=new zn(qs,js,e,t);d.layers=this.layers,this.add(d);const m=new zn(qs,js,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const m of t)this.remove(m);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Lo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,m,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(_,g,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class N1 extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ml{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ff=class Ff{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Ff.prototype.isMatrix2=!0;let Op=Ff;class El extends r1{constructor(e=10,t=10,r=4473924,o=8947848){r=new zt(r),o=new zt(o);const l=t/2,c=e/t,f=e/2,d=[],m=[];for(let g=0,y=0,E=-f;g<=t;g++,E+=c){d.push(-f,0,E,f,0,E),d.push(E,0,-f,E,0,f);const b=g===l?r:o;b.toArray(m,y),y+=3,b.toArray(m,y),y+=3,b.toArray(m,y),y+=3,b.toArray(m,y),y+=3}const p=new _n;p.setAttribute("position",new Gt(d,3)),p.setAttribute("color",new Gt(m,3));const _=new gp({vertexColors:!0,toneMapped:!1});super(p,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function zp(s,e,t,r){const o=U1(r);switch(t){case Bh:return s*e;case Gh:return s*e/o.components*o.byteLength;case nu:return s*e/o.components*o.byteLength;case es:return s*e*2/o.components*o.byteLength;case iu:return s*e*2/o.components*o.byteLength;case kh:return s*e*3/o.components*o.byteLength;case Si:return s*e*4/o.components*o.byteLength;case ru:return s*e*4/o.components*o.byteLength;case ka:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ou:case lu:return Math.max(s,16)*Math.max(e,8)/4;case su:case au:return Math.max(s,8)*Math.max(e,8)/2;case cu:case uu:case du:case hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fu:case Wa:case pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bu:case Pu:case Lu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Du:case Iu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xa:case Nu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U1(s){switch(s){case Jn:case Uh:return{byteLength:1,components:1};case bo:case Fh:case tr:return{byteLength:2,components:1};case eu:case tu:return{byteLength:2,components:4};case Ui:case Qc:case Fi:return{byteLength:4,components:1};case Oh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}})),typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bp(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function F1(s){const e=new WeakMap;function t(f,d){const m=f.array,p=f.usage,_=m.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,m,p),f.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,d,m){const p=d.array,_=d.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,p);else{_.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<_.length;y++){const E=_[g],b=_[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++g,_[g]=b)}_.length=g+1;for(let y=0,E=_.length;y<E;y++){const b=_[y];s.bufferSubData(m,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const p=e.get(f);(!p||p.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,d));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,d),m.version=f.version}}return{get:o,remove:l,update:c}}var O1=`#ifdef USE_ALPHAHASH
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
#endif`;const wt={alphahash_fragment:O1,alphahash_pars_fragment:z1,alphamap_fragment:B1,alphamap_pars_fragment:k1,alphatest_fragment:G1,alphatest_pars_fragment:H1,aomap_fragment:V1,aomap_pars_fragment:W1,batching_pars_vertex:X1,batching_vertex:Y1,begin_vertex:$1,beginnormal_vertex:q1,bsdfs:j1,iridescence_fragment:K1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:J1,clipping_planes_pars_fragment:Q1,clipping_planes_pars_vertex:ey,clipping_planes_vertex:ty,color_fragment:ny,color_pars_fragment:iy,color_pars_vertex:ry,color_vertex:sy,common:oy,cube_uv_reflection_fragment:ay,defaultnormal_vertex:ly,displacementmap_pars_vertex:cy,displacementmap_vertex:uy,emissivemap_fragment:fy,emissivemap_pars_fragment:dy,colorspace_fragment:hy,colorspace_pars_fragment:py,envmap_fragment:my,envmap_common_pars_fragment:gy,envmap_pars_fragment:vy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:by,envmap_vertex:yy,fog_vertex:Sy,fog_pars_vertex:xy,fog_fragment:My,fog_pars_fragment:Ey,gradientmap_pars_fragment:wy,lightmap_pars_fragment:Ty,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:Ry,lights_pars_begin:Cy,lights_toon_fragment:Py,lights_toon_pars_fragment:Ly,lights_phong_fragment:Dy,lights_phong_pars_fragment:Iy,lights_physical_fragment:Ny,lights_physical_pars_fragment:Uy,lights_fragment_begin:Fy,lights_fragment_maps:Oy,lights_fragment_end:zy,lightprobes_pars_fragment:By,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Hy,logdepthbuf_vertex:Vy,map_fragment:Wy,map_pars_fragment:Xy,map_particle_fragment:Yy,map_particle_pars_fragment:$y,metalnessmap_fragment:qy,metalnessmap_pars_fragment:jy,morphinstance_vertex:Ky,morphcolor_vertex:Zy,morphnormal_vertex:Jy,morphtarget_pars_vertex:Qy,morphtarget_vertex:eS,normal_fragment_begin:tS,normal_fragment_maps:nS,normal_pars_fragment:iS,normal_pars_vertex:rS,normal_vertex:sS,normalmap_pars_fragment:oS,clearcoat_normal_fragment_begin:aS,clearcoat_normal_fragment_maps:lS,clearcoat_pars_fragment:cS,iridescence_pars_fragment:uS,opaque_fragment:fS,packing:dS,premultiplied_alpha_fragment:hS,project_vertex:pS,dithering_fragment:mS,dithering_pars_fragment:gS,roughnessmap_fragment:vS,roughnessmap_pars_fragment:_S,shadowmap_pars_fragment:yS,shadowmap_pars_vertex:SS,shadowmap_vertex:xS,shadowmask_pars_fragment:MS,skinbase_vertex:ES,skinning_pars_vertex:wS,skinning_vertex:TS,skinnormal_vertex:AS,specularmap_fragment:RS,specularmap_pars_fragment:CS,tonemapping_fragment:bS,tonemapping_pars_fragment:PS,transmission_fragment:LS,transmission_pars_fragment:DS,uv_pars_fragment:IS,uv_pars_vertex:NS,uv_vertex:US,worldpos_vertex:FS,background_vert:`varying vec2 vUv;
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
}`},Ve={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new M},probesMax:{value:new M},probesResolution:{value:new M}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Hi={basic:{uniforms:On([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:On([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:On([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:On([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:On([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new zt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:On([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:On([Ve.points,Ve.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:On([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:On([Ve.common,Ve.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:On([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:On([Ve.sprite,Ve.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:On([Ve.common,Ve.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:On([Ve.lights,Ve.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Hi.physical={uniforms:On([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const wl={r:0,b:0,g:0},OS=new nn,kp=new xt;kp.set(-1,0,0,0,1,0,0,0,1);function zS(s,e,t,r,o,l){const c=new zt(0);let f=o===!0?0:1,d,m,p=null,_=0,g=null;function y(P){let N=P.isScene===!0?P.background:null;if(N&&N.isTexture){const L=P.backgroundBlurriness>0;N=e.get(N,L)}return N}function E(P){let N=!1;const L=y(P);L===null?x(c,f):L&&L.isColor&&(x(L,1),N=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(P,N){const L=y(N);L&&(L.isCubeTexture||L.mapping===za)?(m===void 0&&(m=new be(new Vo(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Ys(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=L,m.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(OS.makeRotationFromEuler(N.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(kp),m.material.toneMapped=It.getTransfer(L.colorSpace)!==Vt,(p!==L||_!==L.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,p=L,_=L.version,g=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new be(new _l(2,2),new ki({name:"BackgroundMaterial",uniforms:Ys(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=It.getTransfer(L.colorSpace)!==Vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(p!==L||_!==L.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,p=L,_=L.version,g=s.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function x(P,N){P.getRGB(wl,bp(s)),t.buffers.color.setClear(wl.r,wl.g,wl.b,N,l)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,N=1){c.set(P),f=N,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,x(c,f)},render:E,addToRenderList:b,dispose:S}}function BS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function f(G,Z,ae,de,X){let $=!1;const j=_(G,de,ae,Z);l!==j&&(l=j,m(l.object)),$=y(G,de,ae,X),$&&E(G,de,ae,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,L(G,Z,ae,de),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return s.createVertexArray()}function m(G){return s.bindVertexArray(G)}function p(G){return s.deleteVertexArray(G)}function _(G,Z,ae,de){const X=de.wireframe===!0;let $=r[Z.id];$===void 0&&($={},r[Z.id]=$);const j=G.isInstancedMesh===!0?G.id:0;let J=$[j];J===void 0&&(J={},$[j]=J);let oe=J[ae.id];oe===void 0&&(oe={},J[ae.id]=oe);let re=oe[X];return re===void 0&&(re=g(d()),oe[X]=re),re}function g(G){const Z=[],ae=[],de=[];for(let X=0;X<t;X++)Z[X]=0,ae[X]=0,de[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ae,attributeDivisors:de,object:G,attributes:{},index:null}}function y(G,Z,ae,de){const X=l.attributes,$=Z.attributes;let j=0;const J=ae.getAttributes();for(const oe in J)if(J[oe].location>=0){const B=X[oe];let Q=$[oe];if(Q===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;j++}return l.attributesNum!==j||l.index!==de}function E(G,Z,ae,de){const X={},$=Z.attributes;let j=0;const J=ae.getAttributes();for(const oe in J)if(J[oe].location>=0){let B=$[oe];B===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(B=G.instanceColor));const Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),X[oe]=Q,j++}l.attributes=X,l.attributesNum=j,l.index=de}function b(){const G=l.newAttributes;for(let Z=0,ae=G.length;Z<ae;Z++)G[Z]=0}function x(G){S(G,0)}function S(G,Z){const ae=l.newAttributes,de=l.enabledAttributes,X=l.attributeDivisors;ae[G]=1,de[G]===0&&(s.enableVertexAttribArray(G),de[G]=1),X[G]!==Z&&(s.vertexAttribDivisor(G,Z),X[G]=Z)}function P(){const G=l.newAttributes,Z=l.enabledAttributes;for(let ae=0,de=Z.length;ae<de;ae++)Z[ae]!==G[ae]&&(s.disableVertexAttribArray(ae),Z[ae]=0)}function N(G,Z,ae,de,X,$,j){j===!0?s.vertexAttribIPointer(G,Z,ae,X,$):s.vertexAttribPointer(G,Z,ae,de,X,$)}function L(G,Z,ae,de){b();const X=de.attributes,$=ae.getAttributes(),j=Z.defaultAttributeValues;for(const J in $){const oe=$[J];if(oe.location>=0){let re=X[J];if(re===void 0&&(J==="instanceMatrix"&&G.instanceMatrix&&(re=G.instanceMatrix),J==="instanceColor"&&G.instanceColor&&(re=G.instanceColor)),re!==void 0){const B=re.normalized,Q=re.itemSize,ge=e.get(re);if(ge===void 0)continue;const Ie=ge.buffer,Ue=ge.type,se=ge.bytesPerElement,Se=Ue===s.INT||Ue===s.UNSIGNED_INT||re.gpuType===Qc;if(re.isInterleavedBufferAttribute){const U=re.data,ye=U.stride,We=re.offset;if(U.isInstancedInterleavedBuffer){for(let Ze=0;Ze<oe.locationSize;Ze++)S(oe.location+Ze,U.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Ze=0;Ze<oe.locationSize;Ze++)x(oe.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Ze=0;Ze<oe.locationSize;Ze++)N(oe.location+Ze,Q/oe.locationSize,Ue,B,ye*se,(We+Q/oe.locationSize*Ze)*se,Se)}else{if(re.isInstancedBufferAttribute){for(let U=0;U<oe.locationSize;U++)S(oe.location+U,re.meshPerAttribute);G.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let U=0;U<oe.locationSize;U++)x(oe.location+U);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let U=0;U<oe.locationSize;U++)N(oe.location+U,Q/oe.locationSize,Ue,B,Q*se,Q/oe.locationSize*U*se,Se)}}else if(j!==void 0){const B=j[J];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(oe.location,B);break;case 3:s.vertexAttrib3fv(oe.location,B);break;case 4:s.vertexAttrib4fv(oe.location,B);break;default:s.vertexAttrib1fv(oe.location,B)}}}}P()}function I(){F();for(const G in r){const Z=r[G];for(const ae in Z){const de=Z[ae];for(const X in de){const $=de[X];for(const j in $)p($[j].object),delete $[j];delete de[X]}}delete r[G]}}function R(G){if(r[G.id]===void 0)return;const Z=r[G.id];for(const ae in Z){const de=Z[ae];for(const X in de){const $=de[X];for(const j in $)p($[j].object),delete $[j];delete de[X]}}delete r[G.id]}function O(G){for(const Z in r){const ae=r[Z];for(const de in ae){const X=ae[de];if(X[G.id]===void 0)continue;const $=X[G.id];for(const j in $)p($[j].object),delete $[j];delete X[G.id]}}}function A(G){for(const Z in r){const ae=r[Z],de=G.isInstancedMesh===!0?G.id:0,X=ae[de];if(X!==void 0){for(const $ in X){const j=X[$];for(const J in j)p(j[J].object),delete j[J];delete X[$]}delete ae[de],Object.keys(ae).length===0&&delete r[Z]}}}function F(){H(),c=!0,l!==o&&(l=o,m(l.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:H,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:x,disableUnusedAttributes:P}}function kS(s,e,t){let r;function o(d){r=d}function l(d,m){s.drawArrays(r,d,m),t.update(m,r,1)}function c(d,m,p){p!==0&&(s.drawArraysInstanced(r,d,m,p),t.update(m,r,p))}function f(d,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,m,0,p);let g=0;for(let y=0;y<p;y++)g+=m[y];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function GS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const A=O===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Jn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Fi&&!A)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const p=d(m);p!==m&&(lt("WebGLRenderer:",m,"not supported, using",p,"instead."),m=p);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:L,maxSamples:I,samples:R}}function HS(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new os,f=new xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||r!==0||o;return o=g,r=_.length,y},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,y){const E=_.clippingPlanes,b=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!o||E===null||E.length===0||l&&!x)l?p(null):m();else{const P=l?0:r,N=P*4;let L=S.clippingState||null;d.value=L,L=p(E,g,N,y);for(let I=0;I!==N;++I)L[I]=t[I];S.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function m(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(_,g,y,E){const b=_!==null?_.length:0;let x=null;if(b!==0){if(x=d.value,E!==!0||x===null){const S=y+b*4,P=g.matrixWorldInverse;f.getNormalMatrix(P),(x===null||x.length<S)&&(x=new Float32Array(S));for(let N=0,L=y;N!==b;++N,L+=4)c.copy(_[N]).applyMatrix4(P,f),c.normal.toArray(x,L),x[L+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const br=4,Gp=[.125,.215,.35,.446,.526,.582],cs=20,VS=256,Yo=new _f,Hp=new zt;let yf=null,Sf=0,xf=0,Mf=!1;const WS=new M;class Vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=WS}=l;yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,Sf,xf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:tr,format:Si,colorSpace:Ya,depthBuffer:!1},o=Wp(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XS(l)),this._blurMaterial=$S(l,e,t),this._ggxMaterial=YS(l,e,t)}return o}_compileMaterial(e){const t=new be(new _n,e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,r,o,l){const d=new zn(90,1,t,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(Hp),_.toneMapping=Ii,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new Vo,new ke({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let S=!1;const P=e.background;P?P.isColor&&(x.color.copy(P),e.background=null,S=!0):(x.color.copy(Hp),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(d.up.set(0,m[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+p[N],l.y,l.z)):L===1?(d.up.set(0,0,m[N]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+p[N],l.z)):(d.up.set(0,m[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+p[N]));const I=this._cubeSize;Ks(o,L*I,N>2?I:0,I,I),_.setRenderTarget(o),S&&_.render(b,d),_.render(e,d)}_.toneMapping=y,_.autoClear=g,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Zr||e.mapping===bs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Ks(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Yo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,m=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),_=Math.sqrt(m*m-p*p),g=0+m*1.25,y=_*g,{_lodMax:E}=this,b=this._sizeLods[r],x=3*b*(r>E-br?r-E+br:0),S=4*(this._cubeSize-b);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=E-t,Ks(l,x,S,3*b,2*b),o.setRenderTarget(l),o.render(f,Yo),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=E-r,Ks(e,x,S,3*b,2*b),o.setRenderTarget(e),o.render(f,Yo)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const p=3,_=this._lodMeshes[o];_.material=m;const g=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*cs-1),b=l/E,x=isFinite(l)?1+Math.floor(p*b):cs;x>cs&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${cs}`);const S=[];let P=0;for(let O=0;O<cs;++O){const A=O/b,F=Math.exp(-A*A/2);S.push(F),O===0?P+=F:O<x&&(P+=2*F)}for(let O=0;O<S.length;O++)S[O]=S[O]/P;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=S,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:N}=this;g.dTheta.value=E,g.mipInt.value=N-r;const L=this._sizeLods[o],I=3*L*(o>N-br?o-N+br:0),R=4*(this._cubeSize-L);Ks(t,I,R,3*L,2*L),d.setRenderTarget(t),d.render(_,Yo)}}function XS(s){const e=[],t=[],r=[];let o=s;const l=s-br+1+Gp.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-br?d=Gp[c-s+br-1]:c===0&&(d=0),t.push(d);const m=1/(f-2),p=-m,_=1+m,g=[p,p,_,p,_,_,p,p,_,_,p,_],y=6,E=6,b=3,x=2,S=1,P=new Float32Array(b*E*y),N=new Float32Array(x*E*y),L=new Float32Array(S*E*y);for(let R=0;R<y;R++){const O=R%3*2/3-1,A=R>2?0:-1,F=[O,A,0,O+2/3,A,0,O+2/3,A+1,0,O,A,0,O+2/3,A+1,0,O,A+1,0];P.set(F,b*E*R),N.set(g,x*E*R);const H=[R,R,R,R,R,R];L.set(H,S*E*R)}const I=new _n;I.setAttribute("position",new Bi(P,b)),I.setAttribute("uv",new Bi(N,x)),I.setAttribute("faceIndex",new Bi(L,S)),r.push(new be(I,null)),o>br&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Wp(s,e,t){const r=new zi(s,e,t);return r.texture.mapping=za,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ks(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function YS(s,e,t){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
			`},o=new Vo(5,5,5),l=new ki({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Qi});l.uniforms.tEquirect.value=t;const c=new be(o,l),f=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Rn),new I1(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function qS(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?c(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===jc||y===Kc)if(e.has(g)){const E=e.get(g).texture;return f(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const b=new $p(E.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",m),f(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const y=g.mapping,E=y===jc||y===Kc,b=y===Zr||y===bs;if(E||b){let x=t.get(g);const S=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new Vp(s)),x=E?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const P=g.image;return E&&P&&P.height>0||b&&P&&d(P)?(r===null&&(r=new Vp(s)),x=E?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",p),x.texture):null}}}return g}function f(g,y){return y===jc?g.mapping=Zr:y===Kc&&(g.mapping=bs),g}function d(g){let y=0;const E=6;for(let b=0;b<E;b++)g[b]!==void 0&&y++;return y===E}function m(g){const y=g.target;y.removeEventListener("dispose",m);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function p(g){const y=g.target;y.removeEventListener("dispose",p);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function jS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ou("WebGLRenderer: "+r+" extension not supported."),o}}}function KS(s,e,t,r){const o={},l=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete o[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function m(_){const g=[],y=_.index,E=_.attributes.position;let b=0;if(E===void 0)return;if(y!==null){const P=y.array;b=y.version;for(let N=0,L=P.length;N<L;N+=3){const I=P[N+0],R=P[N+1],O=P[N+2];g.push(I,R,R,O,O,I)}}else{const P=E.array;b=E.version;for(let N=0,L=P.length/3-1;N<L;N+=3){const I=N+0,R=N+1,O=N+2;g.push(I,R,R,O,O,I)}}const x=new(E.count>=65535?fp:up)(g,1);x.version=b;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function p(_){const g=l.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&m(_)}else m(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:p}}function ZS(s,e,t){let r;function o(_){r=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,g){s.drawElements(r,g,l,_*c),t.update(g,r,1)}function m(_,g,y){y!==0&&(s.drawElementsInstanced(r,g,l,_*c,y),t.update(g,r,y))}function p(_,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,y);let b=0;for(let x=0;x<y;x++)b+=g[x];t.update(b,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=m,this.renderMultiDraw=p}function JS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ft("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function QS(s,e,t){const r=new WeakMap,o=new an;function l(c,f,d){const m=c.morphTargetInfluences,p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=p!==void 0?p.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let y=function(){A.dispose(),r.delete(f),f.removeEventListener("dispose",y)};g!==void 0&&g.texture.dispose();const E=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let L=0;E===!0&&(L=1),b===!0&&(L=2),x===!0&&(L=3);let I=f.attributes.position.count*L,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*R*4*_),A=new Qh(O,I,R,_);A.type=Fi,A.needsUpdate=!0;const F=L*4;for(let H=0;H<_;H++){const G=S[H],Z=P[H],ae=N[H],de=I*R*4*H;for(let X=0;X<G.count;X++){const $=X*F;E===!0&&(o.fromBufferAttribute(G,X),O[de+$+0]=o.x,O[de+$+1]=o.y,O[de+$+2]=o.z,O[de+$+3]=0),b===!0&&(o.fromBufferAttribute(Z,X),O[de+$+4]=o.x,O[de+$+5]=o.y,O[de+$+6]=o.z,O[de+$+7]=0),x===!0&&(o.fromBufferAttribute(ae,X),O[de+$+8]=o.x,O[de+$+9]=o.y,O[de+$+10]=o.z,O[de+$+11]=ae.itemSize===4?o.w:1)}}g={count:_,texture:A,size:new ht(I,R)},r.set(f,g),f.addEventListener("dispose",y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let y=0;for(let b=0;b<m.length;b++)y+=m[b];const E=f.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",m)}d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function ex(s,e,t,r,o){let l=new WeakMap;function c(m){const p=o.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:f}}const tx={[Rh]:"LINEAR_TONE_MAPPING",[Ch]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[Ph]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Ih]:"NEUTRAL_TONE_MAPPING",[Lh]:"CUSTOM_TONE_MAPPING"};function nx(s,e,t,r,o){const l=new zi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Xs(e,t):void 0}),c=new zi(e,t,{type:tr,depthBuffer:!1,stencilBuffer:!1}),f=new _n;f.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const d=new T1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new be(f,d),p=new _f(-1,1,1,-1,0,1);let _=null,g=null,y=!1,E,b=null,x=[],S=!1;this.setSize=function(P,N){l.setSize(P,N),c.setSize(P,N);for(let L=0;L<x.length;L++){const I=x[L];I.setSize&&I.setSize(P,N)}},this.setEffects=function(P){x=P,S=x.length>0&&x[0].isRenderPass===!0;const N=l.width,L=l.height;for(let I=0;I<x.length;I++){const R=x[I];R.setSize&&R.setSize(N,L)}},this.begin=function(P,N){if(y||P.toneMapping===Ii&&x.length===0)return!1;if(b=N,N!==null){const L=N.width,I=N.height;(l.width!==L||l.height!==I)&&this.setSize(L,I)}return S===!1&&P.setRenderTarget(l),E=P.toneMapping,P.toneMapping=Ii,!0},this.hasRenderPass=function(){return S},this.end=function(P,N){P.toneMapping=E,y=!0;let L=l,I=c;for(let R=0;R<x.length;R++){const O=x[R];if(O.enabled!==!1&&(O.render(P,I,L,N),O.needsSwap!==!1)){const A=L;L=I,I=A}}if(_!==P.outputColorSpace||g!==P.toneMapping){_=P.outputColorSpace,g=P.toneMapping,d.defines={},It.getTransfer(_)===Vt&&(d.defines.SRGB_TRANSFER="");const R=tx[g];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(b),P.render(m,p),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const qp=new tn,Ef=new Xs(1,1),jp=new Qh,Kp=new k_,Zp=new xp,Jp=[],Qp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function Zs(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Jp[o];if(l===void 0&&(l=new Float32Array(o),Jp[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function pn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Al(s,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function ix(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),pn(t,e)}}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),pn(t,e)}}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),pn(t,e)}}function ax(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;nm.set(r),s.uniformMatrix2fv(this.addr,!1,nm),pn(t,r)}}function lx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;tm.set(r),s.uniformMatrix3fv(this.addr,!1,tm),pn(t,r)}}function cx(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;em.set(r),s.uniformMatrix4fv(this.addr,!1,em),pn(t,r)}}function ux(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),pn(t,e)}}function dx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),pn(t,e)}}function hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),pn(t,e)}}function px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),pn(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),pn(t,e)}}function vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),pn(t,e)}}function _x(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Ef.compareFunction=t.isReversedDepthBuffer()?Fu:Uu,l=Ef):l=qp,t.setTexture2D(e||l,o)}function yx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Kp,o)}function Sx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Zp,o)}function xx(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||jp,o)}function Mx(s){switch(s){case 5126:return ix;case 35664:return rx;case 35665:return sx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return ux;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return hx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return xx}}function Ex(s,e){s.uniform1fv(this.addr,e)}function wx(s,e){const t=Zs(e,this.size,2);s.uniform2fv(this.addr,t)}function Tx(s,e){const t=Zs(e,this.size,3);s.uniform3fv(this.addr,t)}function Ax(s,e){const t=Zs(e,this.size,4);s.uniform4fv(this.addr,t)}function Rx(s,e){const t=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cx(s,e){const t=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bx(s,e){const t=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Px(s,e){s.uniform1iv(this.addr,e)}function Lx(s,e){s.uniform2iv(this.addr,e)}function Dx(s,e){s.uniform3iv(this.addr,e)}function Ix(s,e){s.uniform4iv(this.addr,e)}function Nx(s,e){s.uniform1uiv(this.addr,e)}function Ux(s,e){s.uniform2uiv(this.addr,e)}function Fx(s,e){s.uniform3uiv(this.addr,e)}function Ox(s,e){s.uniform4uiv(this.addr,e)}function zx(s,e,t){const r=this.cache,o=e.length,l=Al(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Ef:c=qp;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function Bx(s,e,t){const r=this.cache,o=e.length,l=Al(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Kp,l[c])}function kx(s,e,t){const r=this.cache,o=e.length,l=Al(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Zp,l[c])}function Gx(s,e,t){const r=this.cache,o=e.length,l=Al(t,o);hn(r,l)||(s.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||jp,l[c])}function Hx(s){switch(s){case 5126:return Ex;case 35664:return wx;case 35665:return Tx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return bx;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ix;case 5125:return Nx;case 36294:return Ux;case 36295:return Fx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Gx}}class Vx{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Mx(t.type)}}class Wx{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hx(t.type)}}class Xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const wf=/(\w+)(\])?(\[|\.)?/g;function im(s,e){s.seq.push(e),s.map[e.id]=e}function Yx(s,e,t){const r=s.name,o=r.length;for(wf.lastIndex=0;;){const l=wf.exec(r),c=wf.lastIndex;let f=l[1];const d=l[2]==="]",m=l[3];if(d&&(f=f|0),m===void 0||m==="["&&c+2===o){im(t,m===void 0?new Vx(f,s,e):new Wx(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new Xx(f),im(t,_)),t=_}}}class Rl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);Yx(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function rm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const $x=37297;let qx=0;function jx(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const sm=new xt;function Kx(s){It._getMatrix(sm,It.workingColorSpace,s);const e=`mat3( ${sm.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case $a:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function om(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+jx(s.getShaderSource(e),f)}else return l}function Zx(s,e){const t=Kx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jx={[Rh]:"Linear",[Ch]:"Reinhard",[bh]:"Cineon",[Ph]:"ACESFilmic",[Dh]:"AgX",[Ih]:"Neutral",[Lh]:"Custom"};function Qx(s,e){const t=Jx[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new M;function eM(){It.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function nM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function iM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function $o(s){return s!==""}function am(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(s){return s.replace(rM,oM)}const sM=new Map;function oM(s,e){let t=wt[e];if(t===void 0){const r=sM.get(e);if(r!==void 0)t=wt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Tf(t)}const aM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(s){return s.replace(aM,lM)}function lM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function um(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const cM={[Oa]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function uM(s){return cM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fM={[Zr]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE_UV"};function dM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":fM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const hM={[bs]:"ENVMAP_MODE_REFRACTION"};function pM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mM={[Ah]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function gM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mM[s.combine]||"ENVMAP_BLENDING_NONE"}function vM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function _M(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=uM(t),m=dM(t),p=pM(t),_=gM(t),g=vM(t),y=tM(t),E=nM(l),b=o.createProgram();let x,S,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter($o).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter($o).join(`
`),S.length>0&&(S+=`
`)):(x=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),S=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?wt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Qx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,Zx("linearToOutputTexel",t.outputColorSpace),eM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),c=Tf(c),c=am(c,t),c=lm(c,t),f=Tf(f),f=am(f,t),f=lm(f,t),c=cm(c),f=cm(f),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=P+x+c,L=P+S+f,I=rm(o,o.VERTEX_SHADER,N),R=rm(o,o.FRAGMENT_SHADER,L);o.attachShader(b,I),o.attachShader(b,R),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(G){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(b)||"",ae=o.getShaderInfoLog(I)||"",de=o.getShaderInfoLog(R)||"",X=Z.trim(),$=ae.trim(),j=de.trim();let J=!0,oe=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,I,R);else{const re=om(o,I,"vertex"),B=om(o,R,"fragment");Ft("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+re+`
`+B)}else X!==""?lt("WebGLProgram: Program Info Log:",X):($===""||j==="")&&(oe=!1);oe&&(G.diagnostics={runnable:J,programLog:X,vertexShader:{log:$,prefix:x},fragmentShader:{log:j,prefix:S}})}o.deleteShader(I),o.deleteShader(R),A=new Rl(o,b),F=iM(o,b)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let F;this.getAttributes=function(){return F===void 0&&O(this),F};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=o.getProgramParameter(b,$x)),H},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=R,this}let yM=0;class SM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new xM(e),t.set(e,r)),r}}class xM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function MM(s){return s===es||s===Wa||s===Xa}function EM(s,e,t,r,o,l){const c=new np,f=new SM,d=new Set,m=[],p=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return d.add(A),A===0?"uv":`uv${A}`}function b(A,F,H,G,Z,ae){const de=G.fog,X=Z.geometry,$=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,j=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,J=e.get(A.envMap||$,j),oe=J&&J.mapping===za?J.image.height:null,re=y[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&lt("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const B=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=B!==void 0?B.length:0;let ge=0;X.morphAttributes.position!==void 0&&(ge=1),X.morphAttributes.normal!==void 0&&(ge=2),X.morphAttributes.color!==void 0&&(ge=3);let Ie,Ue,se,Se;if(re){const _t=Hi[re];Ie=_t.vertexShader,Ue=_t.fragmentShader}else Ie=A.vertexShader,Ue=A.fragmentShader,f.update(A),se=f.getVertexShaderID(A),Se=f.getFragmentShaderID(A);const U=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),We=Z.isInstancedMesh===!0,Ze=Z.isBatchedMesh===!0,ot=!!A.map,Ge=!!A.matcap,je=!!J,dt=!!A.aoMap,ct=!!A.lightMap,Nt=!!A.bumpMap,mt=!!A.normalMap,Re=!!A.displacementMap,k=!!A.emissiveMap,At=!!A.metalnessMap,at=!!A.roughnessMap,Et=A.anisotropy>0,Ce=A.clearcoat>0,Dt=A.dispersion>0,D=A.iridescence>0,w=A.sheen>0,K=A.transmission>0,me=Et&&!!A.anisotropyMap,pe=Ce&&!!A.clearcoatMap,Me=Ce&&!!A.clearcoatNormalMap,Pe=Ce&&!!A.clearcoatRoughnessMap,he=D&&!!A.iridescenceMap,ve=D&&!!A.iridescenceThicknessMap,ce=w&&!!A.sheenColorMap,He=w&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Le=!!A.specularColorMap,pt=!!A.specularIntensityMap,vt=K&&!!A.transmissionMap,Rt=K&&!!A.thicknessMap,W=!!A.gradientMap,Ne=!!A.alphaMap,_e=A.alphaTest>0,Xe=!!A.alphaHash,ze=!!A.extensions;let Ee=Ii;A.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const Qe={shaderID:re,shaderType:A.type,shaderName:A.name,vertexShader:Ie,fragmentShader:Ue,defines:A.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&Z._colorsTexture!==null,instancing:We,instancingColor:We&&Z.instanceColor!==null,instancingMorph:We&&Z.morphTexture!==null,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:ot,matcap:Ge,envMap:je,envMapMode:je&&J.mapping,envMapCubeUVHeight:oe,aoMap:dt,lightMap:ct,bumpMap:Nt,normalMap:mt,displacementMap:Re,emissiveMap:k,normalMapObjectSpace:mt&&A.normalMapType===l_,normalMapTangentSpace:mt&&A.normalMapType===Hh,packedNormalMap:mt&&A.normalMapType===Hh&&MM(A.normalMap.format),metalnessMap:At,roughnessMap:at,anisotropy:Et,anisotropyMap:me,clearcoat:Ce,clearcoatMap:pe,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:Dt,iridescence:D,iridescenceMap:he,iridescenceThicknessMap:ve,sheen:w,sheenColorMap:ce,sheenRoughnessMap:He,specularMap:Fe,specularColorMap:Le,specularIntensityMap:pt,transmission:K,transmissionMap:vt,thicknessMap:Rt,gradientMap:W,opaque:A.transparent===!1&&A.blending===Rs&&A.alphaToCoverage===!1,alphaMap:Ne,alphaTest:_e,alphaHash:Xe,combine:A.combine,mapUv:ot&&E(A.map.channel),aoMapUv:dt&&E(A.aoMap.channel),lightMapUv:ct&&E(A.lightMap.channel),bumpMapUv:Nt&&E(A.bumpMap.channel),normalMapUv:mt&&E(A.normalMap.channel),displacementMapUv:Re&&E(A.displacementMap.channel),emissiveMapUv:k&&E(A.emissiveMap.channel),metalnessMapUv:At&&E(A.metalnessMap.channel),roughnessMapUv:at&&E(A.roughnessMap.channel),anisotropyMapUv:me&&E(A.anisotropyMap.channel),clearcoatMapUv:pe&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Me&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&E(A.sheenRoughnessMap.channel),specularMapUv:Fe&&E(A.specularMap.channel),specularColorMapUv:Le&&E(A.specularColorMap.channel),specularIntensityMapUv:pt&&E(A.specularIntensityMap.channel),transmissionMapUv:vt&&E(A.transmissionMap.channel),thicknessMapUv:Rt&&E(A.thicknessMap.channel),alphaMapUv:Ne&&E(A.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(mt||Et),vertexNormals:!!X.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!X.attributes.uv&&(ot||Ne),fog:!!de,useFog:A.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||X.attributes.normal===void 0&&mt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ye,skinning:Z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ge,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:ot&&A.map.isVideoTexture===!0&&It.getTransfer(A.map.colorSpace)===Vt,decodeVideoTextureEmissive:k&&A.emissiveMap.isVideoTexture===!0&&It.getTransfer(A.emissiveMap.colorSpace)===Vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===st,flipSided:A.side===Vn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ze&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&A.extensions.multiDraw===!0||Ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Qe.vertexUv1s=d.has(1),Qe.vertexUv2s=d.has(2),Qe.vertexUv3s=d.has(3),d.clear(),Qe}function x(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)F.push(H),F.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(S(F,A),P(F,A),F.push(s.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function S(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function P(A,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),F.packedNormalMap&&c.enable(22),F.vertexNormals&&c.enable(23),A.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),F.numLightProbeGrids>0&&c.enable(22),A.push(c.mask)}function N(A){const F=y[A.type];let H;if(F){const G=Hi[F];H=M1.clone(G.uniforms)}else H=A.uniforms;return H}function L(A,F){let H=p.get(F);return H!==void 0?++H.usedTimes:(H=new _M(s,F,A,o),m.push(H),p.set(F,H)),H}function I(A){if(--A.usedTimes===0){const F=m.indexOf(A);m[F]=m[m.length-1],m.pop(),p.delete(A.cacheKey),A.destroy()}}function R(A){f.remove(A)}function O(){f.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:N,acquireProgram:L,releaseProgram:I,releaseShaderCache:R,programs:m,dispose:O}}function wM(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function TM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function fm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function dm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,E,b,x,S){let P=s[e];return P===void 0?(P={id:g.id,object:g,geometry:y,material:E,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:x,group:S},s[e]=P):(P.id=g.id,P.object=g,P.geometry=y,P.material=E,P.materialVariant=c(g),P.groupOrder=b,P.renderOrder=g.renderOrder,P.z=x,P.group=S),e++,P}function d(g,y,E,b,x,S){const P=f(g,y,E,b,x,S);E.transmission>0?r.push(P):E.transparent===!0?o.push(P):t.push(P)}function m(g,y,E,b,x,S){const P=f(g,y,E,b,x,S);E.transmission>0?r.unshift(P):E.transparent===!0?o.unshift(P):t.unshift(P)}function p(g,y){t.length>1&&t.sort(g||TM),r.length>1&&r.sort(y||fm),o.length>1&&o.sort(y||fm)}function _(){for(let g=e,y=s.length;g<y;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:m,finish:_,sort:p}}function AM(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new dm,s.set(r,[c])):o>=l.length?(c=new dm,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function RM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new zt};break;case"SpotLight":t={position:new M,direction:new M,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new zt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":t={color:new zt,position:new M,halfWidth:new M,halfHeight:new M};break}return s[e.id]=t,t}}}function CM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let bM=0;function PM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LM(s){const e=new RM,t=CM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new M);const o=new M,l=new nn,c=new nn;function f(m){let p=0,_=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let y=0,E=0,b=0,x=0,S=0,P=0,N=0,L=0,I=0,R=0,O=0;m.sort(PM);for(let F=0,H=m.length;F<H;F++){const G=m[F],Z=G.color,ae=G.intensity,de=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===es?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)p+=Z.r*ae,_+=Z.g*ae,g+=Z.b*ae;else if(G.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(G.sh.coefficients[$],ae);O++}else if(G.isDirectionalLight){const $=e.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const j=G.shadow,J=t.get(G);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,r.directionalShadow[y]=J,r.directionalShadowMap[y]=X,r.directionalShadowMatrix[y]=G.shadow.matrix,P++}r.directional[y]=$,y++}else if(G.isSpotLight){const $=e.get(G);$.position.setFromMatrixPosition(G.matrixWorld),$.color.copy(Z).multiplyScalar(ae),$.distance=de,$.coneCos=Math.cos(G.angle),$.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),$.decay=G.decay,r.spot[b]=$;const j=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,j.updateMatrices(G),G.castShadow&&R++),r.spotLightMatrix[b]=j.matrix,G.castShadow){const J=t.get(G);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,r.spotShadow[b]=J,r.spotShadowMap[b]=X,L++}b++}else if(G.isRectAreaLight){const $=e.get(G);$.color.copy(Z).multiplyScalar(ae),$.halfWidth.set(G.width*.5,0,0),$.halfHeight.set(0,G.height*.5,0),r.rectArea[x]=$,x++}else if(G.isPointLight){const $=e.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity),$.distance=G.distance,$.decay=G.decay,G.castShadow){const j=G.shadow,J=t.get(G);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,r.pointShadow[E]=J,r.pointShadowMap[E]=X,r.pointShadowMatrix[E]=G.shadow.matrix,N++}r.point[E]=$,E++}else if(G.isHemisphereLight){const $=e.get(G);$.skyColor.copy(G.color).multiplyScalar(ae),$.groundColor.copy(G.groundColor).multiplyScalar(ae),r.hemi[S]=$,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==y||A.pointLength!==E||A.spotLength!==b||A.rectAreaLength!==x||A.hemiLength!==S||A.numDirectionalShadows!==P||A.numPointShadows!==N||A.numSpotShadows!==L||A.numSpotMaps!==I||A.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=b,r.rectArea.length=x,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=L+I-R,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=O,A.directionalLength=y,A.pointLength=E,A.spotLength=b,A.rectAreaLength=x,A.hemiLength=S,A.numDirectionalShadows=P,A.numPointShadows=N,A.numSpotShadows=L,A.numSpotMaps=I,A.numLightProbes=O,r.version=bM++)}function d(m,p){let _=0,g=0,y=0,E=0,b=0;const x=p.matrixWorldInverse;for(let S=0,P=m.length;S<P;S++){const N=m[S];if(N.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),_++}else if(N.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(x),y++}else if(N.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),c.identity(),l.copy(N.matrixWorld),l.premultiply(x),c.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),E++}else if(N.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(x),g++}else if(N.isHemisphereLight){const L=r.hemi[b];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(x),b++}}}return{setup:f,setupView:d,state:r}}function hm(s){const e=new LM(s),t=[],r=[],o=[];function l(g){_.camera=g,t.length=0,r.length=0,o.length=0}function c(g){t.push(g)}function f(g){r.push(g)}function d(g){o.push(g)}function m(){e.setup(t)}function p(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:m,setupLightsView:p,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function DM(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new hm(s),e.set(o,[f])):l>=c.length?(f=new hm(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const IM=`void main() {
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
}`,UM=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)],FM=[new M(0,-1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1),new M(0,-1,0),new M(0,-1,0)],pm=new nn,qo=new M,Af=new M;function OM(s,e,t){let r=new cf;const o=new ht,l=new ht,c=new an,f=new A1,d=new R1,m={},p=t.maxTextureSize,_={[xr]:Vn,[Vn]:xr,[st]:st},g=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:IM,fragmentShader:NM}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new _n;E.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new be(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let S=this.type;this.render=function(R,O,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===Bv&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oa);const F=s.getRenderTarget(),H=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Qi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ae=S!==this.type;ae&&O.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(X=>X.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,X=R.length;de<X;de++){const $=R[de],j=$.shadow;if(j===void 0){lt("WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const J=j.getFrameExtents();o.multiply(J),l.copy(j.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/J.x),o.x=l.x*J.x,j.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/J.y),o.y=l.y*J.y,j.mapSize.y=l.y));const oe=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=oe,j.map===null||ae===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Co){if($.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new zi(o.x,o.y,{format:es,type:tr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),j.map.texture.name=$.name+".shadowMap",j.map.depthTexture=new Xs(o.x,o.y,Fi),j.map.depthTexture.name=$.name+".shadowMapDepth",j.map.depthTexture.format=nr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Mn,j.map.depthTexture.magFilter=Mn}else $.isPointLight?(j.map=new $p(o.x),j.map.depthTexture=new s1(o.x,Ui)):(j.map=new zi(o.x,o.y),j.map.depthTexture=new Xs(o.x,o.y,Ui)),j.map.depthTexture.name=$.name+".shadowMap",j.map.depthTexture.format=nr,this.type===Oa?(j.map.depthTexture.compareFunction=oe?Fu:Uu,j.map.depthTexture.minFilter=Rn,j.map.depthTexture.magFilter=Rn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Mn,j.map.depthTexture.magFilter=Mn);j.camera.updateProjectionMatrix()}const re=j.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<re;B++){if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,B),s.clear();else{B===0&&(s.setRenderTarget(j.map),s.clear());const Q=j.getViewport(B);c.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),Z.viewport(c)}if($.isPointLight){const Q=j.camera,ge=j.matrix,Ie=$.distance||Q.far;Ie!==Q.far&&(Q.far=Ie,Q.updateProjectionMatrix()),qo.setFromMatrixPosition($.matrixWorld),Q.position.copy(qo),Af.copy(Q.position),Af.add(UM[B]),Q.up.copy(FM[B]),Q.lookAt(Af),Q.updateMatrixWorld(),ge.makeTranslation(-qo.x,-qo.y,-qo.z),pm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),j._frustum.setFromProjectionMatrix(pm,Q.coordinateSystem,Q.reversedDepth)}else j.updateMatrices($);r=j.getFrustum(),L(O,A,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===Co&&P(j,A),j.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(F,H,G)};function P(R,O){const A=e.update(b);g.defines.VSM_SAMPLES!==R.blurSamples&&(g.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zi(o.x,o.y,{format:es,type:tr})),g.uniforms.shadow_pass.value=R.map.depthTexture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(O,null,A,g,b,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(O,null,A,y,b,null)}function N(R,O,A,F){let H=null;const G=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)H=G;else if(H=A.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=H.uuid,ae=O.uuid;let de=m[Z];de===void 0&&(de={},m[Z]=de);let X=de[ae];X===void 0&&(X=H.clone(),de[ae]=X,O.addEventListener("dispose",I)),H=X}if(H.visible=O.visible,H.wireframe=O.wireframe,F===Co?H.side=O.shadowSide!==null?O.shadowSide:O.side:H.side=O.shadowSide!==null?O.shadowSide:_[O.side],H.alphaMap=O.alphaMap,H.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,H.map=O.map,H.clipShadows=O.clipShadows,H.clippingPlanes=O.clippingPlanes,H.clipIntersection=O.clipIntersection,H.displacementMap=O.displacementMap,H.displacementScale=O.displacementScale,H.displacementBias=O.displacementBias,H.wireframeLinewidth=O.wireframeLinewidth,H.linewidth=O.linewidth,A.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const Z=s.properties.get(H);Z.light=A}return H}function L(R,O,A,F,H){if(R.visible===!1)return;if(R.layers.test(O.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&H===Co)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const ae=e.update(R),de=R.material;if(Array.isArray(de)){const X=ae.groups;for(let $=0,j=X.length;$<j;$++){const J=X[$],oe=de[J.materialIndex];if(oe&&oe.visible){const re=N(R,oe,F,H);R.onBeforeShadow(s,R,O,A,ae,re,J),s.renderBufferDirect(A,null,ae,re,R,J),R.onAfterShadow(s,R,O,A,ae,re,J)}}}else if(de.visible){const X=N(R,de,F,H);R.onBeforeShadow(s,R,O,A,ae,X,null),s.renderBufferDirect(A,null,ae,X,R,null),R.onAfterShadow(s,R,O,A,ae,X,null)}}const Z=R.children;for(let ae=0,de=Z.length;ae<de;ae++)L(Z[ae],O,A,F,H)}function I(R){R.target.removeEventListener("dispose",I);for(const A in m){const F=m[A],H=R.target.uuid;H in F&&(F[H].dispose(),delete F[H])}}}function zM(s,e){function t(){let W=!1;const Ne=new an;let _e=null;const Xe=new an(0,0,0,0);return{setMask:function(ze){_e!==ze&&!W&&(s.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){W=ze},setClear:function(ze,Ee,Qe,_t,Yt){Yt===!0&&(ze*=_t,Ee*=_t,Qe*=_t),Ne.set(ze,Ee,Qe,_t),Xe.equals(Ne)===!1&&(s.clearColor(ze,Ee,Qe,_t),Xe.copy(Ne))},reset:function(){W=!1,_e=null,Xe.set(-1,0,0,0)}}}function r(){let W=!1,Ne=!1,_e=null,Xe=null,ze=null;return{setReversed:function(Ee){if(Ne!==Ee){const Qe=e.get("EXT_clip_control");Ee?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ee;const _t=ze;ze=null,this.setClear(_t)}},getReversed:function(){return Ne},setTest:function(Ee){Ee?U(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ee){_e!==Ee&&!W&&(s.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(Ne&&(Ee=__[Ee]),Xe!==Ee){switch(Ee){case Hc:s.depthFunc(s.NEVER);break;case Vc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case Yc:s.depthFunc(s.GEQUAL);break;case $c:s.depthFunc(s.GREATER);break;case qc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Xe=Ee}},setLocked:function(Ee){W=Ee},setClear:function(Ee){ze!==Ee&&(ze=Ee,Ne&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){W=!1,_e=null,Xe=null,ze=null,Ne=!1}}}function o(){let W=!1,Ne=null,_e=null,Xe=null,ze=null,Ee=null,Qe=null,_t=null,Yt=null;return{setTest:function(Bt){W||(Bt?U(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Bt){Ne!==Bt&&!W&&(s.stencilMask(Bt),Ne=Bt)},setFunc:function(Bt,Bn,hi){(_e!==Bt||Xe!==Bn||ze!==hi)&&(s.stencilFunc(Bt,Bn,hi),_e=Bt,Xe=Bn,ze=hi)},setOp:function(Bt,Bn,hi){(Ee!==Bt||Qe!==Bn||_t!==hi)&&(s.stencilOp(Bt,Bn,hi),Ee=Bt,Qe=Bn,_t=hi)},setLocked:function(Bt){W=Bt},setClear:function(Bt){Yt!==Bt&&(s.clearStencil(Bt),Yt=Bt)},reset:function(){W=!1,Ne=null,_e=null,Xe=null,ze=null,Ee=null,Qe=null,_t=null,Yt=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,m=new WeakMap;let p={},_={},g={},y=new WeakMap,E=[],b=null,x=!1,S=null,P=null,N=null,L=null,I=null,R=null,O=null,A=new zt(0,0,0),F=0,H=!1,G=null,Z=null,ae=null,de=null,X=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(oe)[1]),j=J>=1):oe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),j=J>=2);let re=null,B={};const Q=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),Ie=new an().fromArray(Q),Ue=new an().fromArray(ge);function se(W,Ne,_e,Xe){const ze=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(W,Ee),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<_e;Qe++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Xe,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Ne+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Ee}const Se={};Se[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),U(s.DEPTH_TEST),c.setFunc(Cs),Nt(!1),mt(Mh),U(s.CULL_FACE),dt(Qi);function U(W){p[W]!==!0&&(s.enable(W),p[W]=!0)}function ye(W){p[W]!==!1&&(s.disable(W),p[W]=!1)}function We(W,Ne){return g[W]!==Ne?(s.bindFramebuffer(W,Ne),g[W]=Ne,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ze(W,Ne){let _e=E,Xe=!1;if(W){_e=y.get(Ne),_e===void 0&&(_e=[],y.set(Ne,_e));const ze=W.textures;if(_e.length!==ze.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Qe=ze.length;Ee<Qe;Ee++)_e[Ee]=s.COLOR_ATTACHMENT0+Ee;_e.length=ze.length,Xe=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Xe=!0);Xe&&s.drawBuffers(_e)}function ot(W){return b!==W?(s.useProgram(W),b=W,!0):!1}const Ge={[Kr]:s.FUNC_ADD,[Gv]:s.FUNC_SUBTRACT,[Hv]:s.FUNC_REVERSE_SUBTRACT};Ge[Vv]=s.MIN,Ge[Wv]=s.MAX;const je={[Xv]:s.ZERO,[Yv]:s.ONE,[$v]:s.SRC_COLOR,[kc]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Zv]:s.DST_COLOR,[jv]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[Gc]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[Kv]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(W,Ne,_e,Xe,ze,Ee,Qe,_t,Yt,Bt){if(W===Qi){x===!0&&(ye(s.BLEND),x=!1);return}if(x===!1&&(U(s.BLEND),x=!0),W!==kv){if(W!==S||Bt!==H){if((P!==Kr||I!==Kr)&&(s.blendEquation(s.FUNC_ADD),P=Kr,I=Kr),Bt)switch(W){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eh:s.blendFunc(s.ONE,s.ONE);break;case wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Th:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",W);break}else switch(W){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wh:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",W);break}N=null,L=null,R=null,O=null,A.set(0,0,0),F=0,S=W,H=Bt}return}ze=ze||Ne,Ee=Ee||_e,Qe=Qe||Xe,(Ne!==P||ze!==I)&&(s.blendEquationSeparate(Ge[Ne],Ge[ze]),P=Ne,I=ze),(_e!==N||Xe!==L||Ee!==R||Qe!==O)&&(s.blendFuncSeparate(je[_e],je[Xe],je[Ee],je[Qe]),N=_e,L=Xe,R=Ee,O=Qe),(_t.equals(A)===!1||Yt!==F)&&(s.blendColor(_t.r,_t.g,_t.b,Yt),A.copy(_t),F=Yt),S=W,H=!1}function ct(W,Ne){W.side===st?ye(s.CULL_FACE):U(s.CULL_FACE);let _e=W.side===Vn;Ne&&(_e=!_e),Nt(_e),W.blending===Rs&&W.transparent===!1?dt(Qi):dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Xe=W.stencilWrite;f.setTest(Xe),Xe&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),k(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(W){G!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),G=W)}function mt(W){W!==Ov?(U(s.CULL_FACE),W!==Z&&(W===Mh?s.cullFace(s.BACK):W===zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),Z=W}function Re(W){W!==ae&&(j&&s.lineWidth(W),ae=W)}function k(W,Ne,_e){W?(U(s.POLYGON_OFFSET_FILL),(de!==Ne||X!==_e)&&(de=Ne,X=_e,c.getReversed()&&(Ne=-Ne),s.polygonOffset(Ne,_e))):ye(s.POLYGON_OFFSET_FILL)}function At(W){W?U(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function at(W){W===void 0&&(W=s.TEXTURE0+$-1),re!==W&&(s.activeTexture(W),re=W)}function Et(W,Ne,_e){_e===void 0&&(re===null?_e=s.TEXTURE0+$-1:_e=re);let Xe=B[_e];Xe===void 0&&(Xe={type:void 0,texture:void 0},B[_e]=Xe),(Xe.type!==W||Xe.texture!==Ne)&&(re!==_e&&(s.activeTexture(_e),re=_e),s.bindTexture(W,Ne||Se[W]),Xe.type=W,Xe.texture=Ne)}function Ce(){const W=B[re];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Dt(){try{s.compressedTexImage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function w(){try{s.texSubImage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function K(){try{s.texSubImage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function me(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function pe(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function Me(){try{s.texStorage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function Pe(){try{s.texStorage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function he(){try{s.texImage2D(...arguments)}catch(W){Ft("WebGLState:",W)}}function ve(){try{s.texImage3D(...arguments)}catch(W){Ft("WebGLState:",W)}}function ce(W){return _[W]!==void 0?_[W]:s.getParameter(W)}function He(W,Ne){_[W]!==Ne&&(s.pixelStorei(W,Ne),_[W]=Ne)}function Fe(W){Ie.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ie.copy(W))}function Le(W){Ue.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ue.copy(W))}function pt(W,Ne){let _e=m.get(Ne);_e===void 0&&(_e=new WeakMap,m.set(Ne,_e));let Xe=_e.get(W);Xe===void 0&&(Xe=s.getUniformBlockIndex(Ne,W.name),_e.set(W,Xe))}function vt(W,Ne){const Xe=m.get(Ne).get(W);d.get(Ne)!==Xe&&(s.uniformBlockBinding(Ne,Xe,W.__bindingPointIndex),d.set(Ne,Xe))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),p={},_={},re=null,B={},g={},y=new WeakMap,E=[],b=null,x=!1,S=null,P=null,N=null,L=null,I=null,R=null,O=null,A=new zt(0,0,0),F=0,H=!1,G=null,Z=null,ae=null,de=null,X=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:U,disable:ye,bindFramebuffer:We,drawBuffers:Ze,useProgram:ot,setBlending:dt,setMaterial:ct,setFlipSided:Nt,setCullFace:mt,setLineWidth:Re,setPolygonOffset:k,setScissorTest:At,activeTexture:at,bindTexture:Et,unbindTexture:Ce,compressedTexImage2D:Dt,compressedTexImage3D:D,texImage2D:he,texImage3D:ve,pixelStorei:He,getParameter:ce,updateUBOMapping:pt,uniformBlockBinding:vt,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:w,texSubImage3D:K,compressedTexSubImage2D:me,compressedTexSubImage3D:pe,scissor:Fe,viewport:Le,reset:Rt}}function BM(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ht,p=new WeakMap,_=new Set;let g;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,w){return E?new OffscreenCanvas(D,w):Do("canvas")}function x(D,w,K){let me=1;const pe=Dt(D);if((pe.width>K||pe.height>K)&&(me=K/Math.max(pe.width,pe.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Me=Math.floor(me*pe.width),Pe=Math.floor(me*pe.height);g===void 0&&(g=b(Me,Pe));const he=w?b(Me,Pe):g;return he.width=Me,he.height=Pe,he.getContext("2d").drawImage(D,0,0,Me,Pe),lt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Me+"x"+Pe+")."),he}else return"data"in D&&lt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function S(D){return D.generateMipmaps}function P(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,w,K,me,pe,Me=!1){if(D!==null){if(s[D]!==void 0)return s[D];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Pe;me&&(Pe=e.get("EXT_texture_norm16"),Pe||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=w;if(w===s.RED&&(K===s.FLOAT&&(he=s.R32F),K===s.HALF_FLOAT&&(he=s.R16F),K===s.UNSIGNED_BYTE&&(he=s.R8),K===s.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),K===s.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),w===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.R8UI),K===s.UNSIGNED_SHORT&&(he=s.R16UI),K===s.UNSIGNED_INT&&(he=s.R32UI),K===s.BYTE&&(he=s.R8I),K===s.SHORT&&(he=s.R16I),K===s.INT&&(he=s.R32I)),w===s.RG&&(K===s.FLOAT&&(he=s.RG32F),K===s.HALF_FLOAT&&(he=s.RG16F),K===s.UNSIGNED_BYTE&&(he=s.RG8),K===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),K===s.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RG8UI),K===s.UNSIGNED_SHORT&&(he=s.RG16UI),K===s.UNSIGNED_INT&&(he=s.RG32UI),K===s.BYTE&&(he=s.RG8I),K===s.SHORT&&(he=s.RG16I),K===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RGB8UI),K===s.UNSIGNED_SHORT&&(he=s.RGB16UI),K===s.UNSIGNED_INT&&(he=s.RGB32UI),K===s.BYTE&&(he=s.RGB8I),K===s.SHORT&&(he=s.RGB16I),K===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),K===s.UNSIGNED_INT&&(he=s.RGBA32UI),K===s.BYTE&&(he=s.RGBA8I),K===s.SHORT&&(he=s.RGBA16I),K===s.INT&&(he=s.RGBA32I)),w===s.RGB&&(K===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),K===s.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),w===s.RGBA){const ve=Me?$a:It.getTransfer(pe);K===s.FLOAT&&(he=s.RGBA32F),K===s.HALF_FLOAT&&(he=s.RGBA16F),K===s.UNSIGNED_BYTE&&(he=ve===Vt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),K===s.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function I(D,w){let K;return D?w===null||w===Ui||w===Po?K=s.DEPTH24_STENCIL8:w===Fi?K=s.DEPTH32F_STENCIL8:w===bo&&(K=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ui||w===Po?K=s.DEPTH_COMPONENT24:w===Fi?K=s.DEPTH_COMPONENT32F:w===bo&&(K=s.DEPTH_COMPONENT16),K}function R(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Mn&&D.minFilter!==Rn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function O(D){const w=D.target;w.removeEventListener("dispose",O),F(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&_.delete(w)}function A(D){const w=D.target;w.removeEventListener("dispose",A),G(w)}function F(D){const w=r.get(D);if(w.__webglInit===void 0)return;const K=D.source,me=y.get(K);if(me){const pe=me[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&H(D),Object.keys(me).length===0&&y.delete(K)}r.remove(D)}function H(D){const w=r.get(D);s.deleteTexture(w.__webglTexture);const K=D.source,me=y.get(K);delete me[w.__cacheKey],c.memory.textures--}function G(D){const w=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let pe=0;pe<w.__webglFramebuffer[me].length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[me][pe]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=D.textures;for(let me=0,pe=K.length;me<pe;me++){const Me=r.get(K[me]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(K[me])}r.remove(D)}let Z=0;function ae(){Z=0}function de(){return Z}function X(D){Z=D}function $(){const D=Z;return D>=o.maxTextures&&lt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),Z+=1,D}function j(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function J(D,w){const K=r.get(D);if(D.isVideoTexture&&Et(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const me=D.image;if(me===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(K,D,w);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+w)}function oe(D,w){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){ye(K,D,w);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+w)}function re(D,w){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){ye(K,D,w);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+w)}function B(D,w){const K=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&K.__version!==D.version){We(K,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+w)}const Q={[Ni]:s.REPEAT,[er]:s.CLAMP_TO_EDGE,[Zc]:s.MIRRORED_REPEAT},ge={[Mn]:s.NEAREST,[o_]:s.NEAREST_MIPMAP_NEAREST,[Ba]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[Jc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},Ie={[c_]:s.NEVER,[p_]:s.ALWAYS,[u_]:s.LESS,[Uu]:s.LEQUAL,[f_]:s.EQUAL,[Fu]:s.GEQUAL,[d_]:s.GREATER,[h_]:s.NOTEQUAL};function Ue(D,w){if(w.type===Fi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rn||w.magFilter===Jc||w.magFilter===Ba||w.magFilter===Jr||w.minFilter===Rn||w.minFilter===Jc||w.minFilter===Ba||w.minFilter===Jr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Q[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Q[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Q[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ge[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ge[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mn||w.minFilter!==Ba&&w.minFilter!==Jr||w.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function se(D,w){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",O));const me=w.source;let pe=y.get(me);pe===void 0&&(pe={},y.set(me,pe));const Me=j(w);if(Me!==D.__cacheKey){pe[Me]===void 0&&(pe[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,K=!0),pe[Me].usedTimes++;const Pe=pe[D.__cacheKey];Pe!==void 0&&(pe[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&H(w)),D.__cacheKey=Me,D.__webglTexture=pe[Me].texture}return K}function Se(D,w,K){return Math.floor(Math.floor(D/K)/w)}function U(D,w,K,me){const Me=D.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,K,me,w.data);else{Me.sort((He,Fe)=>He.start-Fe.start);let Pe=0;for(let He=1;He<Me.length;He++){const Fe=Me[Pe],Le=Me[He],pt=Fe.start+Fe.count,vt=Se(Le.start,w.width,4),Rt=Se(Fe.start,w.width,4);Le.start<=pt+1&&vt===Rt&&Se(Le.start+Le.count-1,w.width,4)===vt?Fe.count=Math.max(Fe.count,Le.start+Le.count-Fe.start):(++Pe,Me[Pe]=Le)}Me.length=Pe+1;const he=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let He=0,Fe=Me.length;He<Fe;He++){const Le=Me[He],pt=Math.floor(Le.start/4),vt=Math.ceil(Le.count/4),Rt=pt%w.width,W=Math.floor(pt/w.width),Ne=vt,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Rt),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,Rt,W,Ne,_e,K,me,w.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,he),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,ce)}}function ye(D,w,K){let me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=s.TEXTURE_3D);const pe=se(D,w),Me=w.source;t.bindTexture(me,D.__webglTexture,s.TEXTURE0+K);const Pe=r.get(Me);if(Me.version!==Pe.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const _e=It.getPrimaries(It.workingColorSpace),Xe=w.colorSpace===Mr?null:It.getPrimaries(w.colorSpace),ze=w.colorSpace===Mr||_e===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=x(w.image,!1,o.maxTextureSize);ve=Ce(w,ve);const ce=l.convert(w.format,w.colorSpace),He=l.convert(w.type);let Fe=L(w.internalFormat,ce,He,w.normalized,w.colorSpace,w.isVideoTexture);Ue(me,w);let Le;const pt=w.mipmaps,vt=w.isVideoTexture!==!0,Rt=Pe.__version===void 0||pe===!0,W=Me.dataReady,Ne=R(w,ve);if(w.isDepthTexture)Fe=I(w.format===Qr,w.type),Rt&&(vt?t.texStorage2D(s.TEXTURE_2D,1,Fe,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ve.width,ve.height,0,ce,He,null));else if(w.isDataTexture)if(pt.length>0){vt&&Rt&&t.texStorage2D(s.TEXTURE_2D,Ne,Fe,pt[0].width,pt[0].height);for(let _e=0,Xe=pt.length;_e<Xe;_e++)Le=pt[_e],vt?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Le.width,Le.height,ce,He,Le.data):t.texImage2D(s.TEXTURE_2D,_e,Fe,Le.width,Le.height,0,ce,He,Le.data);w.generateMipmaps=!1}else vt?(Rt&&t.texStorage2D(s.TEXTURE_2D,Ne,Fe,ve.width,ve.height),W&&U(w,ve,ce,He)):t.texImage2D(s.TEXTURE_2D,0,Fe,ve.width,ve.height,0,ce,He,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){vt&&Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Fe,pt[0].width,pt[0].height,ve.depth);for(let _e=0,Xe=pt.length;_e<Xe;_e++)if(Le=pt[_e],w.format!==Si)if(ce!==null)if(vt){if(W)if(w.layerUpdates.size>0){const ze=zp(Le.width,Le.height,w.format,w.type);for(const Ee of w.layerUpdates){const Qe=Le.data.subarray(Ee*ze/Le.data.BYTES_PER_ELEMENT,(Ee+1)*ze/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Ee,Le.width,Le.height,1,ce,Qe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,ve.depth,ce,Le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Fe,Le.width,Le.height,ve.depth,0,Le.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,ve.depth,ce,He,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Fe,Le.width,Le.height,ve.depth,0,ce,He,Le.data)}else{vt&&Rt&&t.texStorage2D(s.TEXTURE_2D,Ne,Fe,pt[0].width,pt[0].height);for(let _e=0,Xe=pt.length;_e<Xe;_e++)Le=pt[_e],w.format!==Si?ce!==null?vt?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Le.width,Le.height,ce,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Fe,Le.width,Le.height,0,Le.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Le.width,Le.height,ce,He,Le.data):t.texImage2D(s.TEXTURE_2D,_e,Fe,Le.width,Le.height,0,ce,He,Le.data)}else if(w.isDataArrayTexture)if(vt){if(Rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Fe,ve.width,ve.height,ve.depth),W)if(w.layerUpdates.size>0){const _e=zp(ve.width,ve.height,w.format,w.type);for(const Xe of w.layerUpdates){const ze=ve.data.subarray(Xe*_e/ve.data.BYTES_PER_ELEMENT,(Xe+1)*_e/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xe,ve.width,ve.height,1,ce,He,ze)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ce,He,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ve.width,ve.height,ve.depth,0,ce,He,ve.data);else if(w.isData3DTexture)vt?(Rt&&t.texStorage3D(s.TEXTURE_3D,Ne,Fe,ve.width,ve.height,ve.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ce,He,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ve.width,ve.height,ve.depth,0,ce,He,ve.data);else if(w.isFramebufferTexture){if(Rt)if(vt)t.texStorage2D(s.TEXTURE_2D,Ne,Fe,ve.width,ve.height);else{let _e=ve.width,Xe=ve.height;for(let ze=0;ze<Ne;ze++)t.texImage2D(s.TEXTURE_2D,ze,Fe,_e,Xe,0,ce,He,null),_e>>=1,Xe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ve.parentNode!==_e){_e.appendChild(ve),_.add(w),_e.onpaint=_t=>{const Yt=_t.changedElements;for(const Bt of _)Yt.includes(Bt.image)&&(Bt.needsUpdate=!0)},_e.requestPaint();return}const Xe=0,ze=s.RGBA,Ee=s.RGBA,Qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Xe,ze,Ee,Qe,ve),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pt.length>0){if(vt&&Rt){const _e=Dt(pt[0]);t.texStorage2D(s.TEXTURE_2D,Ne,Fe,_e.width,_e.height)}for(let _e=0,Xe=pt.length;_e<Xe;_e++)Le=pt[_e],vt?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,ce,He,Le):t.texImage2D(s.TEXTURE_2D,_e,Fe,ce,He,Le);w.generateMipmaps=!1}else if(vt){if(Rt){const _e=Dt(ve);t.texStorage2D(s.TEXTURE_2D,Ne,Fe,_e.width,_e.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,He,ve)}else t.texImage2D(s.TEXTURE_2D,0,Fe,ce,He,ve);S(w)&&P(me),Pe.__version=Me.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function We(D,w,K){if(w.image.length!==6)return;const me=se(D,w),pe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+K);const Me=r.get(pe);if(pe.version!==Me.__version||me===!0){t.activeTexture(s.TEXTURE0+K);const Pe=It.getPrimaries(It.workingColorSpace),he=w.colorSpace===Mr?null:It.getPrimaries(w.colorSpace),ve=w.colorSpace===Mr||Pe===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ce=w.isCompressedTexture||w.image[0].isCompressedTexture,He=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let Ee=0;Ee<6;Ee++)!ce&&!He?Fe[Ee]=x(w.image[Ee],!0,o.maxCubemapSize):Fe[Ee]=He?w.image[Ee].image:w.image[Ee],Fe[Ee]=Ce(w,Fe[Ee]);const Le=Fe[0],pt=l.convert(w.format,w.colorSpace),vt=l.convert(w.type),Rt=L(w.internalFormat,pt,vt,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,Ne=Me.__version===void 0||me===!0,_e=pe.dataReady;let Xe=R(w,Le);Ue(s.TEXTURE_CUBE_MAP,w);let ze;if(ce){W&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,Rt,Le.width,Le.height);for(let Ee=0;Ee<6;Ee++){ze=Fe[Ee].mipmaps;for(let Qe=0;Qe<ze.length;Qe++){const _t=ze[Qe];w.format!==Si?pt!==null?W?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,0,0,_t.width,_t.height,pt,_t.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,Rt,_t.width,_t.height,0,_t.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,0,0,_t.width,_t.height,pt,vt,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe,Rt,_t.width,_t.height,0,pt,vt,_t.data)}}}else{if(ze=w.mipmaps,W&&Ne){ze.length>0&&Xe++;const Ee=Dt(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,Rt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(He){W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Fe[Ee].width,Fe[Ee].height,pt,vt,Fe[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Rt,Fe[Ee].width,Fe[Ee].height,0,pt,vt,Fe[Ee].data);for(let Qe=0;Qe<ze.length;Qe++){const Yt=ze[Qe].image[Ee].image;W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,0,0,Yt.width,Yt.height,pt,vt,Yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,Rt,Yt.width,Yt.height,0,pt,vt,Yt.data)}}else{W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,pt,vt,Fe[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Rt,pt,vt,Fe[Ee]);for(let Qe=0;Qe<ze.length;Qe++){const _t=ze[Qe];W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,0,0,pt,vt,_t.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Qe+1,Rt,pt,vt,_t.image[Ee])}}}S(w)&&P(s.TEXTURE_CUBE_MAP),Me.__version=pe.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ze(D,w,K,me,pe,Me){const Pe=l.convert(K.format,K.colorSpace),he=l.convert(K.type),ve=L(K.internalFormat,Pe,he,K.normalized,K.colorSpace),ce=r.get(w),He=r.get(K);if(He.__renderTarget=w,!ce.__hasExternalTextures){const Fe=Math.max(1,w.width>>Me),Le=Math.max(1,w.height>>Me);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Me,ve,Fe,Le,w.depth,0,Pe,he,null):t.texImage2D(pe,Me,ve,Fe,Le,0,Pe,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,pe,He.__webglTexture,0,At(w)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,pe,He.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(D,w,K){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const me=w.depthTexture,pe=me&&me.isDepthTexture?me.type:null,Me=I(w.stencilBuffer,pe),Pe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;at(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At(w),Me,w.width,w.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,At(w),Me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,D)}else{const me=w.textures;for(let pe=0;pe<me.length;pe++){const Me=me[pe],Pe=l.convert(Me.format,Me.colorSpace),he=l.convert(Me.type),ve=L(Me.internalFormat,Pe,he,Me.normalized,Me.colorSpace);at(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At(w),ve,w.width,w.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,At(w),ve,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ve,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(D,w,K){const me=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);if(pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),me){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,w.depthTexture);const ce=l.convert(w.depthTexture.format),He=l.convert(w.depthTexture.type);let Fe;w.depthTexture.format===nr?Fe=s.DEPTH_COMPONENT24:w.depthTexture.format===Qr&&(Fe=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Fe,w.width,w.height,0,ce,He,null)}}else J(w.depthTexture,0);const Me=pe.__webglTexture,Pe=At(w),he=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ve=w.depthTexture.format===Qr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===nr)at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,he,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ve,he,Me,0);else if(w.depthTexture.format===Qr)at(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,he,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ve,he,Me,0);else throw new Error("Unknown depthTexture format")}function je(D){const w=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",pe)};me.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=me}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if(K)for(let me=0;me<6;me++)Ge(w.__webglFramebuffer[me],D,me);else{const me=D.texture.mipmaps;me&&me.length>0?Ge(w.__webglFramebuffer[0],D,0):Ge(w.__webglFramebuffer,D,0)}else if(K){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=s.createRenderbuffer(),ot(w.__webglDepthbuffer[me],D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Me)}}else{const me=D.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ot(w.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,Me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(D,w,K){const me=r.get(D);w!==void 0&&Ze(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&je(D)}function ct(D){const w=D.texture,K=r.get(D),me=r.get(w);D.addEventListener("dispose",A);const pe=D.textures,Me=D.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=w.version,c.memory.textures++),Me){K.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[he]=[];for(let ve=0;ve<w.mipmaps.length;ve++)K.__webglFramebuffer[he][ve]=s.createFramebuffer()}else K.__webglFramebuffer[he]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)K.__webglFramebuffer[he]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let he=0,ve=pe.length;he<ve;he++){const ce=r.get(pe[he]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&at(D)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let he=0;he<pe.length;he++){const ve=pe[he];K.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[he]);const ce=l.convert(ve.format,ve.colorSpace),He=l.convert(ve.type),Fe=L(ve.internalFormat,ce,He,ve.normalized,ve.colorSpace,D.isXRRenderTarget===!0),Le=At(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Fe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,K.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Ze(K.__webglFramebuffer[he][ve],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else Ze(K.__webglFramebuffer[he],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(w)&&P(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let he=0,ve=pe.length;he<ve;he++){const ce=pe[he],He=r.get(ce);let Fe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Fe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Fe,He.__webglTexture),Ue(Fe,ce),Ze(K.__webglFramebuffer,D,ce,s.COLOR_ATTACHMENT0+he,Fe,0),S(ce)&&P(Fe)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,me.__webglTexture),Ue(he,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Ze(K.__webglFramebuffer[ve],D,w,s.COLOR_ATTACHMENT0,he,ve);else Ze(K.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,he,0);S(w)&&P(he),t.unbindTexture()}D.depthBuffer&&je(D)}function Nt(D){const w=D.textures;for(let K=0,me=w.length;K<me;K++){const pe=w[K];if(S(pe)){const Me=N(D),Pe=r.get(pe).__webglTexture;t.bindTexture(Me,Pe),P(Me),t.unbindTexture()}}}const mt=[],Re=[];function k(D){if(D.samples>0){if(at(D)===!1){const w=D.textures,K=D.width,me=D.height;let pe=s.COLOR_BUFFER_BIT;const Me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(D),he=w.length>1;if(he)for(let ce=0;ce<w.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ve=D.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ce=0;ce<w.length;ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ce]);const He=r.get(w[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,K,me,0,0,K,me,pe,s.NEAREST),d===!0&&(mt.length=0,Re.length=0,mt.push(s.COLOR_ATTACHMENT0+ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(mt.push(Me),Re.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let ce=0;ce<w.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ce]);const He=r.get(w[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function At(D){return Math.min(o.maxSamples,D.samples)}function at(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Et(D){const w=c.render.frame;p.get(D)!==w&&(p.set(D,w),D.update())}function Ce(D,w){const K=D.colorSpace,me=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Ya&&K!==Mr&&(It.getTransfer(K)===Vt?(me!==Si||pe!==Jn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",K)),w}function Dt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=ae,this.getTextureUnits=de,this.setTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=oe,this.setTexture3D=re,this.setTextureCube=B,this.rebindTextures=dt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kM(s,e){function t(r,o=Mr){let l;const c=It.getTransfer(o);if(r===Jn)return s.UNSIGNED_BYTE;if(r===eu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===zh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Uh)return s.BYTE;if(r===Fh)return s.SHORT;if(r===bo)return s.UNSIGNED_SHORT;if(r===Qc)return s.INT;if(r===Ui)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===tr)return s.HALF_FLOAT;if(r===Bh)return s.ALPHA;if(r===kh)return s.RGB;if(r===Si)return s.RGBA;if(r===nr)return s.DEPTH_COMPONENT;if(r===Qr)return s.DEPTH_STENCIL;if(r===Gh)return s.RED;if(r===nu)return s.RED_INTEGER;if(r===es)return s.RG;if(r===iu)return s.RG_INTEGER;if(r===ru)return s.RGBA_INTEGER;if(r===ka||r===Ga||r===Ha||r===Va)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ka)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ga)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ha)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Va)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ka)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ga)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ha)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Va)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===su||r===ou||r===au||r===lu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===su)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ou)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===au)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cu||r===uu||r===fu||r===du||r===hu||r===Wa||r===pu)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===cu||r===uu)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===fu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===du)return l.COMPRESSED_R11_EAC;if(r===hu)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Wa)return l.COMPRESSED_RG11_EAC;if(r===pu)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===mu||r===gu||r===vu||r===_u||r===yu||r===Su||r===xu||r===Mu||r===Eu||r===wu||r===Tu||r===Au||r===Ru||r===Cu)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===mu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_u)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Su)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Au)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ru)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cu)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bu||r===Pu||r===Lu)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bu)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pu)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lu)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Du||r===Iu||r===Xa||r===Nu)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Du)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Iu)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xa)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nu)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const GM=`
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

}`;class VM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Mp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ki({vertexShader:GM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new _l(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WM extends ts{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,m=null,p=null,_=null,g=null,y=null,E=null;const b=typeof XRWebGLBinding<"u",x=new VM,S={},P=t.getContextAttributes();let N=null,L=null;const I=[],R=[],O=new ht;let A=null;const F=new zn;F.viewport=new an;const H=new zn;H.viewport=new an;const G=[F,H],Z=new N1;let ae=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=I[se];return Se===void 0&&(Se=new Xu,I[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=I[se];return Se===void 0&&(Se=new Xu,I[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=I[se];return Se===void 0&&(Se=new Xu,I[se]=Se),Se.getHandSpace()};function X(se){const Se=R.indexOf(se.inputSource);if(Se===-1)return;const U=I[Se];U!==void 0&&(U.update(se.inputSource,se.frame,m||c),U.dispatchEvent({type:se.type,data:se.inputSource}))}function $(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",j);for(let se=0;se<I.length;se++){const Se=R[se];Se!==null&&(R[se]=null,I[se].disconnect(Se))}ae=null,de=null,x.reset();for(const se in S)delete S[se];e.setRenderTarget(N),y=null,g=null,_=null,o=null,L=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(se){m=se},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",$),o.addEventListener("inputsourceschange",j),P.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,ye=null,We=null;P.depth&&(We=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=P.stencil?Qr:nr,ye=P.stencil?Po:Ui);const Ze={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(Ze),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new zi(g.textureWidth,g.textureHeight,{format:Si,type:Jn,depthTexture:new Xs(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const U={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,U),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new zi(y.framebufferWidth,y.framebufferHeight,{format:Si,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),m=null,c=await o.requestReferenceSpace(f),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(se){for(let Se=0;Se<se.removed.length;Se++){const U=se.removed[Se],ye=R.indexOf(U);ye>=0&&(R[ye]=null,I[ye].disconnect(U))}for(let Se=0;Se<se.added.length;Se++){const U=se.added[Se];let ye=R.indexOf(U);if(ye===-1){for(let Ze=0;Ze<I.length;Ze++)if(Ze>=R.length){R.push(U),ye=Ze;break}else if(R[Ze]===null){R[Ze]=U,ye=Ze;break}if(ye===-1)break}const We=I[ye];We&&We.connect(U)}}const J=new M,oe=new M;function re(se,Se,U){J.setFromMatrixPosition(Se.matrixWorld),oe.setFromMatrixPosition(U.matrixWorld);const ye=J.distanceTo(oe),We=Se.projectionMatrix.elements,Ze=U.projectionMatrix.elements,ot=We[14]/(We[10]-1),Ge=We[14]/(We[10]+1),je=(We[9]+1)/We[5],dt=(We[9]-1)/We[5],ct=(We[8]-1)/We[0],Nt=(Ze[8]+1)/Ze[0],mt=ot*ct,Re=ot*Nt,k=ye/(-ct+Nt),At=k*-ct;if(Se.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(At),se.translateZ(k),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),We[10]===-1)se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const at=ot+k,Et=Ge+k,Ce=mt-At,Dt=Re+(ye-At),D=je*Ge/Et*at,w=dt*Ge/Et*at;se.projectionMatrix.makePerspective(Ce,Dt,D,w,at,Et),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function B(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let Se=se.near,U=se.far;x.texture!==null&&(x.depthNear>0&&(Se=x.depthNear),x.depthFar>0&&(U=x.depthFar)),Z.near=H.near=F.near=Se,Z.far=H.far=F.far=U,(ae!==Z.near||de!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ae=Z.near,de=Z.far),Z.layers.mask=se.layers.mask|6,F.layers.mask=Z.layers.mask&-5,H.layers.mask=Z.layers.mask&-3;const ye=se.parent,We=Z.cameras;B(Z,ye);for(let Ze=0;Ze<We.length;Ze++)B(We[Ze],ye);We.length===2?re(Z,F,H):Z.projectionMatrix.copy(F.projectionMatrix),Q(se,Z,ye)};function Q(se,Se,U){U===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(U.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=No*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(se){d=se,g!==null&&(g.fixedFoveation=se),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(se){return S[se]};let ge=null;function Ie(se,Se){if(p=Se.getViewerPose(m||c),E=Se,p!==null){const U=p.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let ye=!1;U.length!==Z.cameras.length&&(Z.cameras.length=0,ye=!0);for(let Ge=0;Ge<U.length;Ge++){const je=U[Ge];let dt=null;if(y!==null)dt=y.getViewport(je);else{const Nt=_.getViewSubImage(g,je);dt=Nt.viewport,Ge===0&&(e.setRenderTargetTextures(L,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(L))}let ct=G[Ge];ct===void 0&&(ct=new zn,ct.layers.enable(Ge),ct.viewport=new an,G[Ge]=ct),ct.matrix.fromArray(je.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(je.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(dt.x,dt.y,dt.width,dt.height),Ge===0&&(Z.matrix.copy(ct.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ye===!0&&Z.cameras.push(ct)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){_=r.getBinding();const Ge=_.getDepthInformation(U[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(Ge,o.renderState)}if(We&&We.includes("camera-access")&&b){e.state.unbindTexture(),_=r.getBinding();for(let Ge=0;Ge<U.length;Ge++){const je=U[Ge].camera;if(je){let dt=S[je];dt||(dt=new Mp,S[je]=dt);const ct=_.getCameraImage(je);dt.sourceTexture=ct}}}}for(let U=0;U<I.length;U++){const ye=R[U],We=I[U];ye!==null&&We!==void 0&&We.update(ye,Se,m||c)}ge&&ge(se,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),E=null}const Ue=new Bp;Ue.setAnimationLoop(Ie),this.setAnimationLoop=function(se){ge=se},this.dispose=function(){}}}const XM=new nn,mm=new xt;mm.set(-1,0,0,0,1,0,0,0,1);function YM(s,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,bp(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,P,N,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),p(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),g(x,S),S.isMeshPhysicalMaterial&&y(x,S,L)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),b(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?d(x,S,P,N):S.isSpriteMaterial?m(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Vn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Vn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const P=e.get(S),N=P.envMap,L=P.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(XM.makeRotationFromEuler(L)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(mm),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function d(x,S,P,N){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*P,x.scale.value=N*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function m(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function g(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,P){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Vn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function b(x,S){const P=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function $M(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,N){const L=N.program;r.uniformBlockBinding(P,L)}function m(P,N){let L=o[P.id];L===void 0&&(E(P),L=p(P),o[P.id]=L,P.addEventListener("dispose",x));const I=N.program;r.updateUBOMapping(P,I);const R=e.render.frame;l[P.id]!==R&&(g(P),l[P.id]=R)}function p(P){const N=_();P.__bindingPointIndex=N;const L=s.createBuffer(),I=P.__size,R=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,I,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function _(){for(let P=0;P<f;P++)if(c.indexOf(P)===-1)return c.push(P),P;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const N=o[P.id],L=P.uniforms,I=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let R=0,O=L.length;R<O;R++){const A=Array.isArray(L[R])?L[R]:[L[R]];for(let F=0,H=A.length;F<H;F++){const G=A[F];if(y(G,R,F,I)===!0){const Z=G.__offset,ae=Array.isArray(G.value)?G.value:[G.value];let de=0;for(let X=0;X<ae.length;X++){const $=ae[X],j=b($);typeof $=="number"||typeof $=="boolean"?(G.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,Z+de,G.__data)):$.isMatrix3?(G.__data[0]=$.elements[0],G.__data[1]=$.elements[1],G.__data[2]=$.elements[2],G.__data[3]=0,G.__data[4]=$.elements[3],G.__data[5]=$.elements[4],G.__data[6]=$.elements[5],G.__data[7]=0,G.__data[8]=$.elements[6],G.__data[9]=$.elements[7],G.__data[10]=$.elements[8],G.__data[11]=0):ArrayBuffer.isView($)?G.__data.set(new $.constructor($.buffer,$.byteOffset,G.__data.length)):($.toArray(G.__data,de),de+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(P,N,L,I){const R=P.value,O=N+"_"+L;if(I[O]===void 0)return typeof R=="number"||typeof R=="boolean"?I[O]=R:ArrayBuffer.isView(R)?I[O]=R.slice():I[O]=R.clone(),!0;{const A=I[O];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return I[O]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(A.equals(R)===!1)return A.copy(R),!0}}return!1}function E(P){const N=P.uniforms;let L=0;const I=16;for(let O=0,A=N.length;O<A;O++){const F=Array.isArray(N[O])?N[O]:[N[O]];for(let H=0,G=F.length;H<G;H++){const Z=F[H],ae=Array.isArray(Z.value)?Z.value:[Z.value];for(let de=0,X=ae.length;de<X;de++){const $=ae[de],j=b($),J=L%I,oe=J%j.boundary,re=J+oe;L+=oe,re!==0&&I-re<j.storage&&(L+=I-re),Z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=j.storage}}}const R=L%I;return R>0&&(L+=I-R),P.__size=L,P.__cache={},this}function b(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(N.boundary=16,N.storage=P.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",P),N}function x(P){const N=P.target;N.removeEventListener("dispose",x);const L=c.indexOf(N.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function S(){for(const P in o)s.deleteBuffer(o[P]);c=[],o={},l={}}return{bind:d,update:m,dispose:S}}const qM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function jM(){return Vi===null&&(Vi=new Q_(qM,16,16,es,tr),Vi.name="DFG_LUT",Vi.minFilter=Rn,Vi.magFilter=Rn,Vi.wrapS=er,Vi.wrapT=er,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class bl{constructor(e={}){const{canvas:t=g_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Jn}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const b=y,x=new Set([ru,iu,nu]),S=new Set([Jn,Ui,bo,Po,eu,tu]),P=new Uint32Array(4),N=new Int32Array(4),L=new M;let I=null,R=null;const O=[],A=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let G=!1,Z=null;this._outputColorSpace=ci;let ae=0,de=0,X=null,$=-1,j=null;const J=new an,oe=new an;let re=null;const B=new zt(0);let Q=0,ge=t.width,Ie=t.height,Ue=1,se=null,Se=null;const U=new an(0,0,ge,Ie),ye=new an(0,0,ge,Ie);let We=!1;const Ze=new cf;let ot=!1,Ge=!1;const je=new nn,dt=new M,ct=new an,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Re(){return X===null?Ue:1}let k=r;function At(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",_t,!1),k===null){const q="webgl2";if(k=At(q,C),k===null)throw At(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ft("WebGLRenderer: "+C.message),C}let at,Et,Ce,Dt,D,w,K,me,pe,Me,Pe,he,ve,ce,He,Fe,Le,pt,vt,Rt,W,Ne,_e;function Xe(){at=new jS(k),at.init(),W=new kM(k,at),Et=new GS(k,at,e,W),Ce=new zM(k,at),Et.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Dt=new JS(k),D=new wM,w=new BM(k,at,Ce,D,Et,W,Dt),K=new qS(H),me=new F1(k),Ne=new BS(k,me),pe=new KS(k,me,Dt,Ne),Me=new ex(k,pe,me,Ne,Dt),pt=new QS(k,Et,w),He=new HS(D),Pe=new EM(H,K,at,Et,Ne,He),he=new YM(H,D),ve=new AM,ce=new DM(at),Le=new zS(H,K,Ce,Me,E,d),Fe=new OM(H,Me,Et),_e=new $M(k,Dt,Et,Ce),vt=new kS(k,at,Dt),Rt=new ZS(k,at,Dt),Dt.programs=Pe.programs,H.capabilities=Et,H.extensions=at,H.properties=D,H.renderLists=ve,H.shadowMap=Fe,H.state=Ce,H.info=Dt}Xe(),b!==Jn&&(F=new nx(b,t.width,t.height,o,l));const ze=new WM(H,k);this.xr=ze,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(C){C!==void 0&&(Ue=C,this.setSize(ge,Ie,!1))},this.getSize=function(C){return C.set(ge,Ie)},this.setSize=function(C,q,le=!0){if(ze.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=C,Ie=q,t.width=Math.floor(C*Ue),t.height=Math.floor(q*Ue),le===!0&&(t.style.width=C+"px",t.style.height=q+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(ge*Ue,Ie*Ue).floor()},this.setDrawingBufferSize=function(C,q,le){ge=C,Ie=q,Ue=le,t.width=Math.floor(C*le),t.height=Math.floor(q*le),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(b===Jn){Ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){lt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(J)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,q,le,ne){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,q,le,ne),Ce.viewport(J.copy(U).multiplyScalar(Ue).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,q,le,ne){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,q,le,ne),Ce.scissor(oe.copy(ye).multiplyScalar(Ue).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(C){Ce.setScissorTest(We=C)},this.setOpaqueSort=function(C){se=C},this.setTransparentSort=function(C){Se=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,le=!0){let ne=0;if(C){let te=!1;if(X!==null){const Be=X.texture.format;te=x.has(Be)}if(te){const Be=X.texture.type,qe=S.has(Be),Oe=Le.getClearColor(),et=Le.getClearAlpha(),rt=Oe.r,yt=Oe.g,St=Oe.b;qe?(P[0]=rt,P[1]=yt,P[2]=St,P[3]=et,k.clearBufferuiv(k.COLOR,0,P)):(N[0]=rt,N[1]=yt,N[2]=St,N[3]=et,k.clearBufferiv(k.COLOR,0,N))}else ne|=k.COLOR_BUFFER_BIT}q&&(ne|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Z=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),Le.dispose(),ve.dispose(),ce.dispose(),D.dispose(),K.dispose(),Me.dispose(),Ne.dispose(),_e.dispose(),Pe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",ds),ze.removeEventListener("sessionend",io),fr.stop()};function Ee(C){C.preventDefault(),$h("WebGLRenderer: Context Lost."),G=!0}function Qe(){$h("WebGLRenderer: Context Restored."),G=!1;const C=Dt.autoReset,q=Fe.enabled,le=Fe.autoUpdate,ne=Fe.needsUpdate,te=Fe.type;Xe(),Dt.autoReset=C,Fe.enabled=q,Fe.autoUpdate=le,Fe.needsUpdate=ne,Fe.type=te}function _t(C){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Yt(C){const q=C.target;q.removeEventListener("dispose",Yt),Bt(q)}function Bt(C){Bn(C),D.remove(C)}function Bn(C){const q=D.get(C).programs;q!==void 0&&(q.forEach(function(le){Pe.releaseProgram(le)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,le,ne,te,Be){q===null&&(q=Nt);const qe=te.isMesh&&te.matrixWorld.determinant()<0,Oe=Ul(C,q,le,ne,te);Ce.setMaterial(ne,qe);let et=le.index,rt=1;if(ne.wireframe===!0){if(et=pe.getWireframeAttribute(le),et===void 0)return;rt=2}const yt=le.drawRange,St=le.attributes.position;let nt=yt.start*rt,Ut=(yt.start+yt.count)*rt;Be!==null&&(nt=Math.max(nt,Be.start*rt),Ut=Math.min(Ut,(Be.start+Be.count)*rt)),et!==null?(nt=Math.max(nt,0),Ut=Math.min(Ut,et.count)):St!=null&&(nt=Math.max(nt,0),Ut=Math.min(Ut,St.count));const qt=Ut-nt;if(qt<0||qt===1/0)return;Ne.setup(te,ne,Oe,le,et);let Qt,Wt=vt;if(et!==null&&(Qt=me.get(et),Wt=Rt,Wt.setIndex(Qt)),te.isMesh)ne.wireframe===!0?(Ce.setLineWidth(ne.wireframeLinewidth*Re()),Wt.setMode(k.LINES)):Wt.setMode(k.TRIANGLES);else if(te.isLine){let fn=ne.linewidth;fn===void 0&&(fn=1),Ce.setLineWidth(fn*Re()),te.isLineSegments?Wt.setMode(k.LINES):te.isLineLoop?Wt.setMode(k.LINE_LOOP):Wt.setMode(k.LINE_STRIP)}else te.isPoints?Wt.setMode(k.POINTS):te.isSprite&&Wt.setMode(k.TRIANGLES);if(te.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Wt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const fn=te._multiDrawStarts,Ye=te._multiDrawCounts,wn=te._multiDrawCount,Ct=et?me.get(et).bytesPerElement:1,Xn=D.get(ne).currentProgram.getUniforms();for(let Yn=0;Yn<wn;Yn++)Xn.setValue(k,"_gl_DrawID",Yn),Wt.render(fn[Yn]/Ct,Ye[Yn])}else if(te.isInstancedMesh)Wt.renderInstances(nt,qt,te.count);else if(le.isInstancedBufferGeometry){const fn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ye=Math.min(le.instanceCount,fn);Wt.renderInstances(nt,qt,Ye)}else Wt.render(nt,qt)};function hi(C,q,le){C.transparent===!0&&C.side===st&&C.forceSinglePass===!1?(C.side=Vn,C.needsUpdate=!0,ro(C,q,le),C.side=xr,C.needsUpdate=!0,ro(C,q,le),C.side=st):ro(C,q,le)}this.compile=function(C,q,le=null){le===null&&(le=C),R=ce.get(le),R.init(q),A.push(R),le.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),C!==le&&C.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),R.setupLights();const ne=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Be=te.material;if(Be)if(Array.isArray(Be))for(let qe=0;qe<Be.length;qe++){const Oe=Be[qe];hi(Oe,le,te),ne.add(Oe)}else hi(Be,le,te),ne.add(Be)}),R=A.pop(),ne},this.compileAsync=function(C,q,le=null){const ne=this.compile(C,q,le);return new Promise(te=>{function Be(){if(ne.forEach(function(qe){D.get(qe).currentProgram.isReady()&&ne.delete(qe)}),ne.size===0){te(C);return}setTimeout(Be,10)}at.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ur=null;function no(C){ur&&ur(C)}function ds(){fr.stop()}function io(){fr.start()}const fr=new Bp;fr.setAnimationLoop(no),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(C){ur=C,ze.setAnimationLoop(C),C===null?fr.stop():fr.start()},ze.addEventListener("sessionstart",ds),ze.addEventListener("sessionend",io),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(C,q);const le=ze.enabled===!0&&ze.isPresenting===!0,ne=F!==null&&(X===null||le)&&F.begin(H,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(q),q=ze.getCamera()),C.isScene===!0&&C.onBeforeRender(H,C,q,X),R=ce.get(C,A.length),R.init(q),R.state.textureUnits=w.getTextureUnits(),A.push(R),je.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ze.setFromProjectionMatrix(je,Oi,q.reversedDepth),Ge=this.localClippingEnabled,ot=He.init(this.clippingPlanes,Ge),I=ve.get(C,O.length),I.init(),O.push(I),ze.enabled===!0&&ze.isPresenting===!0){const qe=H.xr.getDepthSensingMesh();qe!==null&&ea(qe,q,-1/0,H.sortObjects)}ea(C,q,0,H.sortObjects),I.finish(),H.sortObjects===!0&&I.sort(se,Se),mt=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,mt&&Le.addToRenderList(I,C),this.info.render.frame++,ot===!0&&He.beginShadows();const te=R.state.shadowsArray;if(Fe.render(te,C,q),ot===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){const qe=I.opaque,Oe=I.transmissive;if(R.setupLights(),q.isArrayCamera){const et=q.cameras;if(Oe.length>0)for(let rt=0,yt=et.length;rt<yt;rt++){const St=et[rt];$i(qe,Oe,C,St)}mt&&Le.render(C);for(let rt=0,yt=et.length;rt<yt;rt++){const St=et[rt];Il(I,C,St,St.viewport)}}else Oe.length>0&&$i(qe,Oe,C,q),mt&&Le.render(C),Il(I,C,q)}X!==null&&de===0&&(w.updateMultisampleRenderTarget(X),w.updateRenderTargetMipmap(X)),ne&&F.end(H),C.isScene===!0&&C.onAfterRender(H,C,q),Ne.resetDefaultState(),$=-1,j=null,A.pop(),A.length>0?(R=A[A.length-1],w.setTextureUnits(R.state.textureUnits),ot===!0&&He.setGlobalState(H.clippingPlanes,R.state.camera)):R=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,Z!==null&&Z.renderEnd()};function ea(C,q,le,ne){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)le=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)R.pushLightProbeGrid(C);else if(C.isLight)R.pushLight(C),C.castShadow&&R.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ze.intersectsSprite(C)){ne&&ct.setFromMatrixPosition(C.matrixWorld).applyMatrix4(je);const qe=Me.update(C),Oe=C.material;Oe.visible&&I.push(C,qe,Oe,le,ct.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ze.intersectsObject(C))){const qe=Me.update(C),Oe=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ct.copy(C.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ct.copy(qe.boundingSphere.center)),ct.applyMatrix4(C.matrixWorld).applyMatrix4(je)),Array.isArray(Oe)){const et=qe.groups;for(let rt=0,yt=et.length;rt<yt;rt++){const St=et[rt],nt=Oe[St.materialIndex];nt&&nt.visible&&I.push(C,qe,nt,le,ct.z,St)}}else Oe.visible&&I.push(C,qe,Oe,le,ct.z,null)}}const Be=C.children;for(let qe=0,Oe=Be.length;qe<Oe;qe++)ea(Be[qe],q,le,ne)}function Il(C,q,le,ne){const{opaque:te,transmissive:Be,transparent:qe}=C;R.setupLightsView(le),ot===!0&&He.setGlobalState(H.clippingPlanes,le),ne&&Ce.viewport(J.copy(ne)),te.length>0&&hs(te,q,le),Be.length>0&&hs(Be,q,le),qe.length>0&&hs(qe,q,le),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function $i(C,q,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ne.id]===void 0){const nt=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ne.id]=new zi(1,1,{generateMipmaps:!0,type:nt?tr:Jn,minFilter:Jr,samples:Math.max(4,Et.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Be=R.state.transmissionRenderTarget[ne.id],qe=ne.viewport||J;Be.setSize(qe.z*H.transmissionResolutionScale,qe.w*H.transmissionResolutionScale);const Oe=H.getRenderTarget(),et=H.getActiveCubeFace(),rt=H.getActiveMipmapLevel();H.setRenderTarget(Be),H.getClearColor(B),Q=H.getClearAlpha(),Q<1&&H.setClearColor(16777215,.5),H.clear(),mt&&Le.render(le);const yt=H.toneMapping;H.toneMapping=Ii;const St=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),R.setupLightsView(ne),ot===!0&&He.setGlobalState(H.clippingPlanes,ne),hs(C,le,ne),w.updateMultisampleRenderTarget(Be),w.updateRenderTargetMipmap(Be),at.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ut=0,qt=q.length;Ut<qt;Ut++){const Qt=q[Ut],{object:Wt,geometry:fn,material:Ye,group:wn}=Qt;if(Ye.side===st&&Wt.layers.test(ne.layers)){const Ct=Ye.side;Ye.side=Vn,Ye.needsUpdate=!0,ta(Wt,le,ne,fn,Ye,wn),Ye.side=Ct,Ye.needsUpdate=!0,nt=!0}}nt===!0&&(w.updateMultisampleRenderTarget(Be),w.updateRenderTargetMipmap(Be))}H.setRenderTarget(Oe,et,rt),H.setClearColor(B,Q),St!==void 0&&(ne.viewport=St),H.toneMapping=yt}function hs(C,q,le){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,Be=C.length;te<Be;te++){const qe=C[te],{object:Oe,geometry:et,group:rt}=qe;let yt=qe.material;yt.allowOverride===!0&&ne!==null&&(yt=ne),Oe.layers.test(le.layers)&&ta(Oe,q,le,et,yt,rt)}}function ta(C,q,le,ne,te,Be){C.onBeforeRender(H,q,le,ne,te,Be),C.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(H,q,le,ne,C,Be),te.transparent===!0&&te.side===st&&te.forceSinglePass===!1?(te.side=Vn,te.needsUpdate=!0,H.renderBufferDirect(le,q,ne,te,C,Be),te.side=xr,te.needsUpdate=!0,H.renderBufferDirect(le,q,ne,te,C,Be),te.side=st):H.renderBufferDirect(le,q,ne,te,C,Be),C.onAfterRender(H,q,le,ne,te,Be)}function ro(C,q,le){q.isScene!==!0&&(q=Nt);const ne=D.get(C),te=R.state.lights,Be=R.state.shadowsArray,qe=te.state.version,Oe=Pe.getParameters(C,te.state,Be,q,le,R.state.lightProbeGridArray),et=Pe.getProgramCacheKey(Oe);let rt=ne.programs;ne.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const yt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ne.envMap=K.get(C.envMap||ne.environment,yt),ne.envMapRotation=ne.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,rt===void 0&&(C.addEventListener("dispose",Yt),rt=new Map,ne.programs=rt);let St=rt.get(et);if(St!==void 0){if(ne.currentProgram===St&&ne.lightsStateVersion===qe)return ia(C,Oe),St}else Oe.uniforms=Pe.getUniforms(C),Z!==null&&C.isNodeMaterial&&Z.build(C,le,Oe),C.onBeforeCompile(Oe,H),St=Pe.acquireProgram(Oe,et),rt.set(et,St),ne.uniforms=Oe.uniforms;const nt=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=He.uniform),ia(C,Oe),ne.needsLights=zf(C),ne.lightsStateVersion=qe,ne.needsLights&&(nt.ambientLightColor.value=te.state.ambient,nt.lightProbe.value=te.state.probe,nt.directionalLights.value=te.state.directional,nt.directionalLightShadows.value=te.state.directionalShadow,nt.spotLights.value=te.state.spot,nt.spotLightShadows.value=te.state.spotShadow,nt.rectAreaLights.value=te.state.rectArea,nt.ltc_1.value=te.state.rectAreaLTC1,nt.ltc_2.value=te.state.rectAreaLTC2,nt.pointLights.value=te.state.point,nt.pointLightShadows.value=te.state.pointShadow,nt.hemisphereLights.value=te.state.hemi,nt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,nt.spotLightMatrix.value=te.state.spotLightMatrix,nt.spotLightMap.value=te.state.spotLightMap,nt.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=R.state.lightProbeGridArray.length>0,ne.currentProgram=St,ne.uniformsList=null,St}function na(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Rl.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function ia(C,q){const le=D.get(C);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function Nl(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;L.setFromMatrixPosition(q.matrixWorld);for(let le=0,ne=C.length;le<ne;le++){const te=C[le];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function Ul(C,q,le,ne,te){q.isScene!==!0&&(q=Nt),w.resetTextureUnits();const Be=q.fog,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Oe=X===null?H.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:It.workingColorSpace,et=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,rt=K.get(ne.envMap||qe,et),yt=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,St=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),nt=!!le.morphAttributes.position,Ut=!!le.morphAttributes.normal,qt=!!le.morphAttributes.color;let Qt=Ii;ne.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Qt=H.toneMapping);const Wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,fn=Wt!==void 0?Wt.length:0,Ye=D.get(ne),wn=R.state.lights;if(ot===!0&&(Ge===!0||C!==j)){const Xt=C===j&&ne.id===$;He.setState(ne,C,Xt)}let Ct=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==wn.state.version||Ye.outputColorSpace!==Oe||te.isBatchedMesh&&Ye.batching===!1||!te.isBatchedMesh&&Ye.batching===!0||te.isBatchedMesh&&Ye.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ye.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ye.instancing===!1||!te.isInstancedMesh&&Ye.instancing===!0||te.isSkinnedMesh&&Ye.skinning===!1||!te.isSkinnedMesh&&Ye.skinning===!0||te.isInstancedMesh&&Ye.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ye.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ye.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ye.instancingMorph===!1&&te.morphTexture!==null||Ye.envMap!==rt||ne.fog===!0&&Ye.fog!==Be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==He.numPlanes||Ye.numIntersection!==He.numIntersection)||Ye.vertexAlphas!==yt||Ye.vertexTangents!==St||Ye.morphTargets!==nt||Ye.morphNormals!==Ut||Ye.morphColors!==qt||Ye.toneMapping!==Qt||Ye.morphTargetsCount!==fn||!!Ye.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,Ye.__version=ne.version);let Xn=Ye.currentProgram;Ct===!0&&(Xn=ro(ne,q,te),Z&&ne.isNodeMaterial&&Z.onUpdateProgram(ne,Xn,Ye));let Yn=!1,Lt=!1,dr=!1;const Ht=Xn.getUniforms(),Kt=Ye.uniforms;if(Ce.useProgram(Xn.program)&&(Yn=!0,Lt=!0,dr=!0),ne.id!==$&&($=ne.id,Lt=!0),Ye.needsLights){const Xt=Nl(R.state.lightProbeGridArray,te);Ye.lightProbeGrid!==Xt&&(Ye.lightProbeGrid=Xt,Lt=!0)}if(Yn||j!==C){Ce.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(k,"projectionMatrix",C.projectionMatrix),Ht.setValue(k,"viewMatrix",C.matrixWorldInverse);const Ai=Ht.map.cameraPosition;Ai!==void 0&&Ai.setValue(k,dt.setFromMatrixPosition(C.matrixWorld)),Et.logarithmicDepthBuffer&&Ht.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ht.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),j!==C&&(j=C,Lt=!0,dr=!0)}if(Ye.needsLights&&(wn.state.directionalShadowMap.length>0&&Ht.setValue(k,"directionalShadowMap",wn.state.directionalShadowMap,w),wn.state.spotShadowMap.length>0&&Ht.setValue(k,"spotShadowMap",wn.state.spotShadowMap,w),wn.state.pointShadowMap.length>0&&Ht.setValue(k,"pointShadowMap",wn.state.pointShadowMap,w)),te.isSkinnedMesh){Ht.setOptional(k,te,"bindMatrix"),Ht.setOptional(k,te,"bindMatrixInverse");const Xt=te.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ht.setValue(k,"boneTexture",Xt.boneTexture,w))}te.isBatchedMesh&&(Ht.setOptional(k,te,"batchingTexture"),Ht.setValue(k,"batchingTexture",te._matricesTexture,w),Ht.setOptional(k,te,"batchingIdTexture"),Ht.setValue(k,"batchingIdTexture",te._indirectTexture,w),Ht.setOptional(k,te,"batchingColorTexture"),te._colorsTexture!==null&&Ht.setValue(k,"batchingColorTexture",te._colorsTexture,w));const Ti=le.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&pt.update(te,le,Xn),(Lt||Ye.receiveShadow!==te.receiveShadow)&&(Ye.receiveShadow=te.receiveShadow,Ht.setValue(k,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Kt.envMapIntensity.value=q.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=jM()),Lt){if(Ht.setValue(k,"toneMappingExposure",H.toneMappingExposure),Ye.needsLights&&Of(Kt,dr),Be&&ne.fog===!0&&he.refreshFogUniforms(Kt,Be),he.refreshMaterialUniforms(Kt,ne,Ue,Ie,R.state.transmissionRenderTarget[C.id]),Ye.needsLights&&Ye.lightProbeGrid){const Xt=Ye.lightProbeGrid;Kt.probesSH.value=Xt.texture,Kt.probesMin.value.copy(Xt.boundingBox.min),Kt.probesMax.value.copy(Xt.boundingBox.max),Kt.probesResolution.value.copy(Xt.resolution)}Rl.upload(k,na(Ye),Kt,w)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Rl.upload(k,na(Ye),Kt,w),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ht.setValue(k,"center",te.center),Ht.setValue(k,"modelViewMatrix",te.modelViewMatrix),Ht.setValue(k,"normalMatrix",te.normalMatrix),Ht.setValue(k,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Xt=ne.uniformsGroups;for(let Ai=0,qi=Xt.length;Ai<qi;Ai++){const ps=Xt[Ai];_e.update(ps,Xn),_e.bind(ps,Xn)}}return Xn}function Of(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function zf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,q,le){const ne=D.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),D.get(C.texture).__webglTexture=q,D.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const le=D.get(C);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0};const rn=k.createFramebuffer();this.setRenderTarget=function(C,q=0,le=0){X=C,ae=q,de=le;let ne=null,te=!1,Be=!1;if(C){const Oe=D.get(C);if(Oe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(k.FRAMEBUFFER,Oe.__webglFramebuffer),J.copy(C.viewport),oe.copy(C.scissor),re=C.scissorTest,Ce.viewport(J),Ce.scissor(oe),Ce.setScissorTest(re),$=-1;return}else if(Oe.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Oe.__hasExternalTextures)w.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const yt=C.depthTexture;if(Oe.__boundDepthTexture!==yt){if(yt!==null&&D.has(yt)&&(C.width!==yt.image.width||C.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Be=!0);const rt=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?ne=rt[q][le]:ne=rt[q],te=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?ne=D.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?ne=rt[le]:ne=rt,J.copy(C.viewport),oe.copy(C.scissor),re=C.scissorTest}else J.copy(U).multiplyScalar(Ue).floor(),oe.copy(ye).multiplyScalar(Ue).floor(),re=We;if(le!==0&&(ne=rn),Ce.bindFramebuffer(k.FRAMEBUFFER,ne)&&Ce.drawBuffers(C,ne),Ce.viewport(J),Ce.scissor(oe),Ce.setScissorTest(re),te){const Oe=D.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,le)}else if(Be){const Oe=q;for(let et=0;et<C.textures.length;et++){const rt=D.get(C.textures[et]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+et,rt.__webglTexture,le,Oe)}}else if(C!==null&&le!==0){const Oe=D.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,le)}$=-1},this.readRenderTargetPixels=function(C,q,le,ne,te,Be,qe,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(et=et[qe]),et){Ce.bindFramebuffer(k.FRAMEBUFFER,et);try{const rt=C.textures[Oe],yt=rt.format,St=rt.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),!Et.textureFormatReadable(yt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(St)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ne&&le>=0&&le<=C.height-te&&k.readPixels(q,le,ne,te,W.convert(yt),W.convert(St),Be)}finally{const rt=X!==null?D.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(C,q,le,ne,te,Be,qe,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qe!==void 0&&(et=et[qe]),et)if(q>=0&&q<=C.width-ne&&le>=0&&le<=C.height-te){Ce.bindFramebuffer(k.FRAMEBUFFER,et);const rt=C.textures[Oe],yt=rt.format,St=rt.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),!Et.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.bufferData(k.PIXEL_PACK_BUFFER,Be.byteLength,k.STREAM_READ),k.readPixels(q,le,ne,te,W.convert(yt),W.convert(St),0);const Ut=X!==null?D.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,Ut);const qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await v_(k,qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Be),k.deleteBuffer(nt),k.deleteSync(qt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,le=0){const ne=Math.pow(2,-le),te=Math.floor(C.image.width*ne),Be=Math.floor(C.image.height*ne),qe=q!==null?q.x:0,Oe=q!==null?q.y:0;w.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,le,0,0,qe,Oe,te,Be),Ce.unbindTexture()};const Bf=k.createFramebuffer(),ra=k.createFramebuffer();this.copyTextureToTexture=function(C,q,le=null,ne=null,te=0,Be=0){let qe,Oe,et,rt,yt,St,nt,Ut,qt;const Qt=C.isCompressedTexture?C.mipmaps[Be]:C.image;if(le!==null)qe=le.max.x-le.min.x,Oe=le.max.y-le.min.y,et=le.isBox3?le.max.z-le.min.z:1,rt=le.min.x,yt=le.min.y,St=le.isBox3?le.min.z:0;else{const Kt=Math.pow(2,-te);qe=Math.floor(Qt.width*Kt),Oe=Math.floor(Qt.height*Kt),C.isDataArrayTexture?et=Qt.depth:C.isData3DTexture?et=Math.floor(Qt.depth*Kt):et=1,rt=0,yt=0,St=0}ne!==null?(nt=ne.x,Ut=ne.y,qt=ne.z):(nt=0,Ut=0,qt=0);const Wt=W.convert(q.format),fn=W.convert(q.type);let Ye;q.isData3DTexture?(w.setTexture3D(q,0),Ye=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(w.setTexture2DArray(q,0),Ye=k.TEXTURE_2D_ARRAY):(w.setTexture2D(q,0),Ye=k.TEXTURE_2D),Ce.activeTexture(k.TEXTURE0),Ce.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),Ce.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ce.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const wn=Ce.getParameter(k.UNPACK_ROW_LENGTH),Ct=Ce.getParameter(k.UNPACK_IMAGE_HEIGHT),Xn=Ce.getParameter(k.UNPACK_SKIP_PIXELS),Yn=Ce.getParameter(k.UNPACK_SKIP_ROWS),Lt=Ce.getParameter(k.UNPACK_SKIP_IMAGES);Ce.pixelStorei(k.UNPACK_ROW_LENGTH,Qt.width),Ce.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Qt.height),Ce.pixelStorei(k.UNPACK_SKIP_PIXELS,rt),Ce.pixelStorei(k.UNPACK_SKIP_ROWS,yt),Ce.pixelStorei(k.UNPACK_SKIP_IMAGES,St);const dr=C.isDataArrayTexture||C.isData3DTexture,Ht=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Kt=D.get(C),Ti=D.get(q),Xt=D.get(Kt.__renderTarget),Ai=D.get(Ti.__renderTarget);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let qi=0;qi<et;qi++)dr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,D.get(C).__webglTexture,te,St+qi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,D.get(q).__webglTexture,Be,qt+qi)),k.blitFramebuffer(rt,yt,qe,Oe,nt,Ut,qe,Oe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||D.has(C)){const Kt=D.get(C),Ti=D.get(q);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,Bf),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,ra);for(let Xt=0;Xt<et;Xt++)dr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kt.__webglTexture,te,St+Xt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Kt.__webglTexture,te),Ht?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ti.__webglTexture,Be,qt+Xt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ti.__webglTexture,Be),te!==0?k.blitFramebuffer(rt,yt,qe,Oe,nt,Ut,qe,Oe,k.COLOR_BUFFER_BIT,k.NEAREST):Ht?k.copyTexSubImage3D(Ye,Be,nt,Ut,qt+Xt,rt,yt,qe,Oe):k.copyTexSubImage2D(Ye,Be,nt,Ut,rt,yt,qe,Oe);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Ye,Be,nt,Ut,qt,qe,Oe,et,Wt,fn,Qt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Ye,Be,nt,Ut,qt,qe,Oe,et,Wt,Qt.data):k.texSubImage3D(Ye,Be,nt,Ut,qt,qe,Oe,et,Wt,fn,Qt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Be,nt,Ut,qe,Oe,Wt,fn,Qt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Be,nt,Ut,Qt.width,Qt.height,Wt,Qt.data):k.texSubImage2D(k.TEXTURE_2D,Be,nt,Ut,qe,Oe,Wt,fn,Qt);Ce.pixelStorei(k.UNPACK_ROW_LENGTH,wn),Ce.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct),Ce.pixelStorei(k.UNPACK_SKIP_PIXELS,Xn),Ce.pixelStorei(k.UNPACK_SKIP_ROWS,Yn),Ce.pixelStorei(k.UNPACK_SKIP_IMAGES,Lt),Be===0&&q.generateMipmaps&&k.generateMipmap(Ye),Ce.unbindTexture()},this.initRenderTarget=function(C){D.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){ae=0,de=0,X=null,Ce.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}let Ln=class extends _n{constructor(e,t,r,o,l){super();const c=e.computeFrenetFrames(t,!1),f=[],d=[];for(let p=0;p<=t;p++){const _=p/t,g=qa.lerp(r,o,_),y=e.getPoint(_),E=c.normals[p],b=c.binormals[p];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,P=Math.sin(S),N=Math.cos(S);f.push(y.x+g*(N*E.x+P*b.x),y.y+g*(N*E.y+P*b.y),y.z+g*(N*E.z+P*b.z))}}for(let p=0;p<t;p++)for(let _=0;_<l;_++){const g=p*(l+1)+_,y=(p+1)*(l+1)+_;d.push(g,y,g+1),d.push(y,y+1,g+1)}const m=[];for(let p=0;p<=t;p++)for(let _=0;_<=l;_++)m.push(p/t,_/l);this.setAttribute("uv",new Gt(m,2)),this.setAttribute("position",new Gt(f,3)),this.setIndex(d),this.computeVertexNormals()}};function Tt(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s,o=>{o.needsUpdate=!0},void 0,()=>{const o=document.createElement("canvas");o.width=o.height=4;const l=o.getContext("2d");l.fillStyle="#888888",l.fillRect(0,0,4,4),r.image=o,r.needsUpdate=!0});return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r}function Js(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.04,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.28,-.1,0)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new Ln(d,100,.04,.02,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:m}}function us(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.04,0),new M(-.4,-.05,0),new M(-.37,-.1,0),new M(-.35,-.1,0)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new Ln(d,100,.04,.02,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:m}}function gm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function vm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s)}),d=new be(new Pn(.028,.14,32),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-left-bottom",{mesh:d,mat:f}}function _m(s,e,t,r,o,l,c){const f=new ke({map:Tt(s)}),d=new be(new Pn(.028,.14,32,64,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-right-Bottom",{mesh:d,mat:f}}function KM(s,e,t,r,o,l,c){const f=[new M(1.05,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new Mt(f),m=new ke({map:Tt(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function ZM(s,e,t,r,o,l,c){const f=[new M(1.05,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new Mt(f),m=new ke({map:Tt(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function ym(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Sm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function JM(s,e,t,r){const o=[new M(-.9,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new Mt(o),c=new ke({map:Tt(s),side:st}),f=new be(new Ln(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function QM(s,e,t,r){const o=[new M(-.9,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new Mt(o),c=new ke({map:Tt(s),side:st}),f=new be(new Ln(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function xm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.045,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function Mm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function Em(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new fi(d,100,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:m}}const eE=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const o=xe.useRef(null),l=xe.useRef([]);return xe.useEffect(()=>{const c=new Wn;c.name="luge",l.current=[],[Js(e,-.7,.328,0,0,1.57,0),Js(e,-.6,.334,0,0,1.57,0),Js(e,-.5,.338,0,0,1.57,0),Js(e,-.4,.34,0,0,1.57,0),Js(e,-.3,.345,0,0,1.57,0),Js(e,-.2,.35,0,0,1.57,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[us(e,-.4,.34,.2,0,0,.05),us(e,-.4,.34,.13,0,0,.05),us(e,-.4,.34,.06,0,0,.05),us(e,-.4,.34,-.01,0,0,.05),us(e,-.4,.34,-.08,0,0,.05),us(e,-.4,.34,-.15,0,0,.05),us(e,-.4,.34,-.22,0,0,.05)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[gm(t,-.745,.25,0,1.57,1.57,0),gm(t,-.155,.285,0,1.57,1.57,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[vm(t,-.75,.15,-.26,0,-.1,-.4),vm(t,-.2,.16,-.26,0,0,.2)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[_m(t,-.75,.15,.26,0,.1,-.4),_m(t,-.2,.16,.26,0,0,.2)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)});const g=KM(t,.2,.28,.24,1.57,0,3.13);c.add(g.mesh),l.current.push(g.mat);const y=ZM(t,.2,.28,-.24,-1.57,0,3.13);c.add(y.mesh),l.current.push(y.mat),[ym(t,-.845,.23,.232,0,0,0),ym(t,-.845,.23,-.232,0,0,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[Sm(t,.7,.33,.184,0,0,0),Sm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)});const x=JM(t,0,.19,.37);c.add(x.mesh),l.current.push(x.mat);const S=QM(t,0,.19,-.37);return c.add(S.mesh),l.current.push(S.mat),[xm(t,-.9,.07,.27,0,0,0),xm(t,-.9,.07,-.27,0,0,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[Mm(t,.63,.465,.171,0,0,0),Mm(t,.63,.465,-.171,0,0,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[Em(r,-.03,.2,.52,-1.57,0,-.1),Em(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),o.current=c,s.add(c),()=>{s.remove(c),c.traverse(I=>{I.isMesh&&(I.geometry.dispose(),I.material.dispose())})}},[s,e,t,r]),null};function ti(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.06,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.25,-.1,0)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new Ln(d,100,.04,.02,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:m}}function wm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function Tm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s)}),d=new be(new Pn(.028,.14,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-left-bottom",{mesh:d,mat:f}}function Am(s,e,t,r,o,l,c){const f=new ke({map:Tt(s)}),d=new be(new Pn(.028,.14,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-right-Bottom",{mesh:d,mat:f}}function tE(s,e,t,r,o,l,c){const f=[new M(.95,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new Mt(f),m=new ke({map:Tt(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function nE(s,e,t,r,o,l,c){const f=[new M(.95,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new Mt(f),m=new ke({map:Tt(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function Rm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.038,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Cm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function iE(s,e,t,r){const o=[new M(-.8,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new Mt(o),c=new ke({map:Tt(s),side:st}),f=new be(new Ln(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function rE(s,e,t,r){const o=[new M(-.8,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new Mt(o),c=new ke({map:Tt(s),side:st}),f=new be(new Ln(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function bm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function Pm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function Lm(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new fi(d,100,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:m}}const sE=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const o=xe.useRef(null),l=xe.useRef([]);return xe.useEffect(()=>{const c=new Wn;c.name="luge",l.current=[],[ti(e,-.56,.33,0,0,1.57,0),ti(e,-.49,.333,0,0,1.57,0),ti(e,-.42,.335,0,0,1.57,0),ti(e,-.35,.34,0,0,1.57,0),ti(e,-.27,.345,0,0,1.57,0),ti(e,-.2,.35,0,0,1.57,0),ti(e,-.4,.34,.2,0,0,.05),ti(e,-.4,.34,.13,0,0,.05),ti(e,-.4,.34,.07,0,0,.05),ti(e,-.4,.34,0,0,0,.05),ti(e,-.4,.34,-.07,0,0,.05),ti(e,-.4,.34,-.13,0,0,.05),ti(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[wm(t,-.645,.25,0,1.57,1.57,0),wm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[Tm(t,-.65,.15,-.26,0,-.1,-.4),Tm(t,-.1,.16,-.26,0,0,.2)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[Am(t,-.65,.15,.26,0,.1,-.4),Am(t,-.1,.16,.26,0,0,.2)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)});const _=tE(t,.2,.28,.24,1.57,0,3.13);c.add(_.mesh),l.current.push(_.mat);const g=nE(t,.2,.28,-.24,-1.57,0,3.13);c.add(g.mesh),l.current.push(g.mat),[Rm(t,-.74,.235,.23,0,0,0),Rm(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[Cm(t,.7,.33,.184,0,0,0),Cm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)});const b=iE(t,0,.19,.37);c.add(b.mesh),l.current.push(b.mat);const x=rE(t,0,.19,-.37);return c.add(x.mesh),l.current.push(x.mat),[bm(t,-.78,.07,.26,0,0,0),bm(t,-.78,.07,-.26,0,0,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[Pm(t,.63,.471,.169,0,0,0),Pm(t,.63,.471,-.169,0,0,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[Lm(r,-.03,.2,.52,-1.57,0,-.1),Lm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),o.current=c,s.add(c),()=>{s.remove(c),c.traverse(L=>{L.isMesh&&(L.geometry.dispose(),L.material.dispose())})}},[s,e,t,r]),null};function ni(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.06,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.25,-.1,0)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new Ln(d,100,.04,.02,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:m}}function Dm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function Im(s,e,t,r,o,l,c){const f=[new M(0,-.08,.03),new M(0,-.14,0),new M(0,0,0),new M(0,.14,.03),new M(0,.06,.03)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new fi(d,3,.03,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-left-bottom",{mesh:p,mat:m}}function Nm(s,e,t,r,o,l,c){const f=[new M(0,.08,-.03),new M(0,.14,0),new M(0,0,0),new M(0,-.12,.03),new M(0,-.06,.03)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new fi(d,3,.03,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-Bottom",{mesh:p,mat:m}}function oE(s,e,t,r,o,l,c){const f=[new M(.95,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new Mt(f),m=new ke({map:Tt(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function aE(s,e,t,r,o,l,c){const f=[new M(.95,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new Mt(f),m=new ke({map:Tt(s),side:st}),p=new be(new Ln(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function Um(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.038,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Fm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function lE(s,e,t,r){const o=[new M(-.8,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new Mt(o),c=new ke({map:Tt(s),side:st}),f=new be(new Ln(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function cE(s,e,t,r){const o=[new M(-.8,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new Mt(o),c=new ke({map:Tt(s),side:st}),f=new be(new Ln(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function Om(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function zm(s,e,t,r,o,l,c){const f=new ke({map:Tt(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function Bm(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new Mt(f),m=new ke({map:Tt(s)}),p=new be(new fi(d,100,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:m}}const uE=({scene:s,selectedColor:e,backgroundColor:t,guide:r,hoop:o,skating:l})=>{const c=xe.useRef(null),f=xe.useRef([]);return xe.useEffect(()=>{const d=new Wn;d.name="luge",f.current=[],[ni(e,-.56,.33,0,0,1.57,0),ni(e,-.49,.333,0,0,1.57,0),ni(e,-.42,.335,0,0,1.57,0),ni(e,-.35,.34,0,0,1.57,0),ni(e,-.27,.345,0,0,1.57,0),ni(e,-.2,.35,0,0,1.57,0),ni(e,-.4,.34,.2,0,0,.05),ni(e,-.4,.34,.13,0,0,.05),ni(e,-.4,.34,.07,0,0,.05),ni(e,-.4,.34,0,0,0,.05),ni(e,-.4,.34,-.07,0,0,.05),ni(e,-.4,.34,-.13,0,0,.05),ni(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[Dm(t,-.645,.25,0,1.57,1.57,0),Dm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[Im(o,-.65,.16,-.26,0,0,0),Im(o,-.2,.16,-.26,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[Nm(o,-.65,.16,.26,0,0,0),Nm(o,-.2,.16,.26,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)});const y=oE(t,.2,.28,.24,1.57,0,3.13);d.add(y.mesh),f.current.push(y.mat);const E=aE(t,.2,.28,-.24,-1.57,0,3.13);d.add(E.mesh),f.current.push(E.mat),[Um(t,-.74,.235,.23,0,0,0),Um(t,-.74,.235,-.23,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[Fm(t,.7,.33,.184,0,0,0),Fm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)});const S=lE(l,0,.19,.37);d.add(S.mesh),f.current.push(S.mat);const P=cE(l,0,.19,-.37);return d.add(P.mesh),f.current.push(P.mat),[Om(l,-.78,.07,.26,0,0,0),Om(l,-.78,.07,-.26,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[zm(l,.63,.471,.169,0,0,0),zm(l,.63,.471,-.169,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[Bm(r,-.03,.2,.52,-1.57,0,-.1),Bm(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),c.current=d,s.add(d),()=>{s.remove(d),d.traverse(R=>{R.isMesh&&(R.geometry.dispose(),R.material.dispose())})}},[s,e,t,r,o,l]),null},Pr={fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",background:"none",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,padding:"7px 14px",cursor:"pointer",color:"rgba(240,237,232,0.6)",whiteSpace:"nowrap",transition:"all 0.15s ease"},Qs={...Pr,color:"#eaff00",borderColor:"rgba(232,248,64,0.35)",background:"rgba(232,248,64,0.07)"},fE=({img1:s,img2:e,img3:t,img4:r,img5:o,wood:l,guide:c,skating:f,hoop:d})=>{const m=xe.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:d,skating:f},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:d,skating:f},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:d,skating:f},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:d,skating:f},{id:"color-5",value:o,src:o,bg:l,guide:c,hoop:d,skating:f}],[s,e,t,r,o,l,c,d,f]),[p,_]=xe.useState(m[0].value),[g,y]=xe.useState(m[0].bg),[E,b]=xe.useState(m[0].guide),[x,S]=xe.useState(m[0].hoop),[P,N]=xe.useState(m[0].skating),[L,I]=xe.useState("Luge"),[R,O]=xe.useState(!1),[A,F]=xe.useState(!1),[H,G]=xe.useState(!1),[Z,ae]=xe.useState(!1),de=xe.useRef(null),[X,$]=xe.useState(null),j=xe.useRef(null),J=xe.useRef({rotX:.18,rotY:-.4,tRotX:.18,tRotY:-.4,zoom:4.5,tZoom:4.5}),oe=xe.useRef({drag:!1,prevX:0,prevY:0}),re=xe.useRef(!1),B=xe.useRef(!1);xe.useEffect(()=>{re.current=R},[R]),xe.useEffect(()=>{B.current=A,j.current&&j.current.traverse(ge=>{ge.isMesh&&(ge.material.wireframe=A)})},[A]),xe.useEffect(()=>{const ge=setTimeout(()=>{j.current&&j.current.traverse(Ie=>{Ie.isMesh&&(Ie.material.wireframe=B.current)})},200);return()=>clearTimeout(ge)},[L]);const Q=()=>{const ge=J.current;ge.tRotX=.18,ge.tRotY=-.4,ge.tZoom=4.5};return xe.useEffect(()=>{const ge=de.current;if(!ge)return;const Ie=new Ja,Ue=ge.offsetWidth||1e3,se=ge.offsetHeight||700,Se=new zn(38,Ue/se,.01,50);Se.position.set(0,.5,4.5),Se.lookAt(0,.3,0);let U;try{U=new bl({antialias:!0,alpha:!0})}catch{ge.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}U.setSize(Ue,se,!1),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.setClearColor(790032,1),ge.appendChild(U.domElement),Ie.add(new xl(16777215,1));const ye=new di(16777215,1.4);ye.position.set(4,6,4),Ie.add(ye);const We=new di(15267904,1.5);We.position.set(-3,1,-2),Ie.add(We);const Ze=new di(4482815,1.5);Ze.position.set(0,-3,3),Ie.add(Ze);const ot=new El(6,24,1974821,1580063);ot.position.y=-.45,Ie.add(ot);const Ge=new Wn;Ie.add(Ge),j.current=Ge;const je=J.current,dt=oe.current,ct=pe=>{dt.drag=!0,dt.prevX=pe.clientX,dt.prevY=pe.clientY},Nt=()=>{dt.drag=!1},mt=pe=>{dt.drag&&(je.tRotY+=(pe.clientX-dt.prevX)*.008,je.tRotX+=(pe.clientY-dt.prevY)*.005,je.tRotX=Math.max(-1,Math.min(1,je.tRotX)),dt.prevX=pe.clientX,dt.prevY=pe.clientY)},Re=pe=>{je.tZoom+=pe.deltaY*.004,je.tZoom=Math.max(1.5,Math.min(8,je.tZoom))},k=Q;let At=0,at=0;const Et=pe=>{dt.drag=!0,At=pe.touches[0].clientX,at=pe.touches[0].clientY},Ce=()=>{dt.drag=!1},Dt=pe=>{dt.drag&&(je.tRotY+=(pe.touches[0].clientX-At)*.008,je.tRotX+=(pe.touches[0].clientY-at)*.005,je.tRotX=Math.max(-1,Math.min(1,je.tRotX)),At=pe.touches[0].clientX,at=pe.touches[0].clientY)};ge.addEventListener("mousedown",ct),window.addEventListener("mouseup",Nt),window.addEventListener("mousemove",mt),ge.addEventListener("wheel",Re,{passive:!0}),ge.addEventListener("dblclick",k),ge.addEventListener("touchstart",Et,{passive:!0}),window.addEventListener("touchend",Ce),window.addEventListener("touchmove",Dt,{passive:!0});const D=()=>{const pe=ge.offsetWidth,Me=ge.offsetHeight;Se.aspect=pe/Me,Se.updateProjectionMatrix(),U.setSize(pe,Me,!1)};window.addEventListener("resize",D);const w=new Ml;let K;function me(){K=requestAnimationFrame(me);const pe=w.getDelta();re.current&&!dt.drag&&(je.tRotY+=pe*.5),je.rotX+=(je.tRotX-je.rotX)*.09,je.rotY+=(je.tRotY-je.rotY)*.09,je.zoom+=(je.tZoom-je.zoom)*.09,Ge.rotation.x=je.rotX,Ge.rotation.y=je.rotY,Se.position.z=je.zoom,Se.lookAt(0,.05,0),U.render(Ie,Se)}return me(),setTimeout(()=>ae(!0),800),$(Ge),()=>{cancelAnimationFrame(K),ge.removeEventListener("mousedown",ct),window.removeEventListener("mouseup",Nt),window.removeEventListener("mousemove",mt),ge.removeEventListener("wheel",Re),ge.removeEventListener("dblclick",k),ge.removeEventListener("touchstart",Et),window.removeEventListener("touchend",Ce),window.removeEventListener("touchmove",Dt),window.removeEventListener("resize",D),U.dispose(),ge.contains(U.domElement)&&ge.removeChild(U.domElement)}},[]),fe.createElement("div",{style:{position:"relative",margin:"0 auto",width:"100%",height:"100%",background:"#0c0e10",overflow:"hidden"}},fe.createElement("style",null,`
        @keyframes tl-spin { to { transform: rotate(360deg); } }
        .tl-mount { width: 100%; height: 100%; cursor: grab; }
        .tl-mount:active { cursor: grabbing; }
        .tl-mount canvas { display: block; width: 100% !important; height: 100% !important; }
      `),fe.createElement("div",{ref:de,className:"tl-mount"}),fe.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,248,64,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80,120,255,0.05) 0%, transparent 60%)"}}),fe.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:20,height:20,pointerEvents:"none",zIndex:5,opacity:.15}},fe.createElement("div",{style:{position:"absolute",width:1,height:"100%",left:"50%",background:"#eaff00"}}),fe.createElement("div",{style:{position:"absolute",height:1,width:"100%",top:"50%",background:"#eaff00"}})),!Z&&fe.createElement("div",{style:{position:"absolute",inset:0,zIndex:30,background:"#0c0e10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,transition:"opacity 0.6s ease"}},fe.createElement("div",{style:{width:36,height:36,border:"1.5px solid rgba(255,255,255,0.08)",borderTopColor:"#eaff00",borderRadius:"50%",animation:"tl-spin 0.7s linear infinite"}}),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Initialisation…")),fe.createElement("div",{style:{position:"absolute",top:16,left:16,right:16,display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10,pointerEvents:"none"}},fe.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},"Vue 3D"),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#eaff00",background:"rgba(232,248,64,0.06)",border:"1px solid rgba(232,248,64,0.25)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},L))),fe.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10}},"Glisser · Zoomer · Double-clic pour reset"),fe.createElement("div",{style:{position:"absolute",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8,zIndex:10}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Couleur siège"),fe.createElement("div",{style:{display:"flex",gap:6}},m.map(ge=>fe.createElement("button",{key:ge.id,title:ge.id,onClick:Ie=>{Ie.preventDefault(),_(ge.value),y(ge.bg),b(ge.guide),S(ge.hoop),N(ge.skating)},style:{width:20,height:20,borderRadius:"50%",padding:0,cursor:"pointer",border:p===ge.value?"2px solid #eaff00":"2px solid transparent",boxShadow:p===ge.value?"0 0 8px rgba(232,248,64,0.4)":"none",backgroundImage:`url('${ge.src}')`,backgroundSize:"cover",backgroundPosition:"center",transition:"all 0.2s ease"}})))),fe.createElement("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,zIndex:10,background:"#141618",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"8px 10px",backdropFilter:"blur(12px)"}},fe.createElement("button",{onClick:Q,style:Pr},"↺ Reset"),fe.createElement("button",{onClick:()=>O(ge=>!ge),style:R?Qs:Pr},R?"⏸ Auto":"▷ Auto"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>F(ge=>!ge),style:A?Qs:Pr},"⬡ Wire"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>G(ge=>!ge),style:H?Qs:Pr},"ℹ Info"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>I("Luge"),style:L==="Luge"?Qs:Pr},"Luge"),fe.createElement("button",{onClick:()=>I("LugeKind"),style:L==="LugeKind"?Qs:Pr},"LugeKind"),fe.createElement("button",{onClick:()=>I("LugeSport"),style:L==="LugeSport"?Qs:Pr},"LugeSport")),fe.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:220,background:"#141618",borderLeft:"1px solid rgba(255,255,255,0.08)",padding:"24px 18px",zIndex:15,overflowY:"auto",display:"flex",flexDirection:"column",gap:16,transform:H?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},fe.createElement("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:14,fontWeight:700,color:"#eaff00",letterSpacing:"0.02em"}},"Fiche Produit"),[["Modèle",L],null,["Châssis","Acier galvanisé"],["Siège","Polyéthylène HD"],["Patins","Acier inox"],null,["Dimensions","110 × 45 × 22 cm"],["Poids","3,2 kg"],["Charge max.","80 kg"],null,["Âge","6 ans et plus"]].map((ge,Ie)=>ge===null?fe.createElement("div",{key:Ie,style:{height:1,background:"rgba(255,255,255,0.08)"}}):fe.createElement("div",{key:Ie,style:{display:"flex",flexDirection:"column",gap:3}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},ge[0]),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:12,color:"#f0ede8"}},ge[1])))),X&&L==="Luge"&&fe.createElement(eE,{scene:X,selectedColor:p,backgroundColor:g,guide:E}),X&&L==="LugeKind"&&fe.createElement(sE,{scene:X,selectedColor:p,backgroundColor:g,guide:E}),X&&L==="LugeSport"&&fe.createElement(uE,{scene:X,selectedColor:p,backgroundColor:g,guide:E,hoop:x,skating:P}))};let eo=class extends _n{constructor(e,t,r,o,l){super();const c=e.computeFrenetFrames(t,!1),f=[],d=[];for(let p=0;p<=t;p++){const _=p/t,g=qa.lerp(r,o,_),y=e.getPoint(_),E=c.normals[p],b=c.binormals[p];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,P=Math.sin(S),N=Math.cos(S);f.push(y.x+g*(N*E.x+P*b.x),y.y+g*(N*E.y+P*b.y),y.z+g*(N*E.z+P*b.z))}}for(let p=0;p<t;p++)for(let _=0;_<l;_++){const g=p*(l+1)+_,y=(p+1)*(l+1)+_;d.push(g,y,g+1),d.push(y,y+1,g+1)}const m=[];for(let p=0;p<=t;p++)for(let _=0;_<=l;_++)m.push(p/t,_/l);this.setAttribute("uv",new Gt(m,2)),this.setAttribute("position",new Gt(f,3)),this.setIndex(d),this.computeVertexNormals()}};function Pl(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Wi(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function to(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.04,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.28,-.1,0)],d=new Mt(f),m=new ke({map:Pl(s)}),p=new be(new eo(d,100,.04,.02,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:m}}function fs(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.04,0),new M(-.4,-.05,0),new M(-.37,-.1,0),new M(-.35,-.1,0)],d=new Mt(f),m=new ke({map:Pl(s)}),p=new be(new eo(d,100,.04,.02,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:m}}function km(s,e,t,r,o,l,c){const f=new ke({map:Wi(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function Gm(s,e,t,r,o,l,c){const f=new ke({map:Wi(s)}),d=new be(new Pn(.028,.14,32),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-left-bottom",{mesh:d,mat:f}}function Hm(s,e,t,r,o,l,c){const f=new ke({map:Wi(s)}),d=new be(new Pn(.028,.14,32,64,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-right-Bottom",{mesh:d,mat:f}}function dE(s,e,t,r,o,l,c){const f=[new M(1.05,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new Mt(f),m=new ke({map:Wi(s),side:st}),p=new be(new eo(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function hE(s,e,t,r,o,l,c){const f=[new M(1.05,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new Mt(f),m=new ke({map:Wi(s),side:st}),p=new be(new eo(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function Vm(s,e,t,r,o,l,c){const f=new ke({map:Wi(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Wm(s,e,t,r,o,l,c){const f=new ke({map:Wi(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function pE(s,e,t,r){const o=[new M(-.9,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new Mt(o),c=new ke({map:Wi(s),side:st}),f=new be(new eo(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function mE(s,e,t,r){const o=[new M(-.9,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new Mt(o),c=new ke({map:Wi(s),side:st}),f=new be(new eo(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function Xm(s,e,t,r,o,l,c){const f=new ke({map:Pl(s),side:st}),d=new be(new $t(.045,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function Ym(s,e,t,r,o,l,c){const f=new ke({map:Pl(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function $m(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new Mt(f),m=new ke({map:Wi(s)}),p=new be(new fi(d,100,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:m}}const gE=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const o=xe.useRef(null),l=xe.useRef([]);return xe.useEffect(()=>{const c=new Wn;c.name="luge",l.current=[],[to(e,-.7,.328,0,0,1.57,0),to(e,-.6,.334,0,0,1.57,0),to(e,-.5,.338,0,0,1.57,0),to(e,-.4,.34,0,0,1.57,0),to(e,-.3,.345,0,0,1.57,0),to(e,-.2,.35,0,0,1.57,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[fs(e,-.4,.34,.2,0,0,.05),fs(e,-.4,.34,.13,0,0,.05),fs(e,-.4,.34,.06,0,0,.05),fs(e,-.4,.34,-.01,0,0,.05),fs(e,-.4,.34,-.08,0,0,.05),fs(e,-.4,.34,-.15,0,0,.05),fs(e,-.4,.34,-.22,0,0,.05)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[km(t,-.745,.25,0,1.57,1.57,0),km(t,-.155,.285,0,1.57,1.57,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[Gm(t,-.75,.15,-.26,0,-.1,-.4),Gm(t,-.2,.16,-.26,0,0,.2)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[Hm(t,-.75,.15,.26,0,.1,-.4),Hm(t,-.2,.16,.26,0,0,.2)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)});const g=dE(t,.2,.28,.24,1.57,0,3.13);c.add(g.mesh),l.current.push(g.mat);const y=hE(t,.2,.28,-.24,-1.57,0,3.13);c.add(y.mesh),l.current.push(y.mat),[Vm(t,-.845,.23,.232,0,0,0),Vm(t,-.845,.23,-.232,0,0,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[Wm(t,.7,.33,.184,0,0,0),Wm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)});const x=pE(t,0,.19,.37);c.add(x.mesh),l.current.push(x.mat);const S=mE(t,0,.19,-.37);return c.add(S.mesh),l.current.push(S.mat),[Xm(t,-.9,.07,.27,0,0,0),Xm(t,-.9,.07,-.27,0,0,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[Ym(t,.63,.465,.171,0,0,0),Ym(t,.63,.465,-.171,0,0,0)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),[$m(r,-.03,.2,.52,-1.57,0,-.1),$m(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:I,mat:R})=>{c.add(I),l.current.push(R)}),o.current=c,s.add(c),()=>{s.remove(c),c.position.set(-.15,-.28,0)}},[s,e,t,r]),null},jo={fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",background:"none",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,padding:"7px 14px",cursor:"pointer",color:"rgba(240,237,232,0.6)",whiteSpace:"nowrap",transition:"all 0.15s ease"},Rf={...jo,color:"#eaff00",borderColor:"rgba(232,248,64,0.35)",background:"rgba(232,248,64,0.07)"},vE=({img1:s,img2:e,img3:t,img4:r,img5:o,wood:l,guide:c,skating:f,hoop:d,variantIds:m})=>{const p=xe.useMemo(()=>m?m.split(",").map(U=>U.trim()).filter(Boolean):[],[m]),_=xe.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:d,skating:f},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:d,skating:f},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:d,skating:f},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:d,skating:f},{id:"color-5",value:o,src:o,bg:l,guide:c,hoop:d,skating:f}],[s,e,t,r,o,l,c,d,f]),[g,y]=xe.useState(_[0].value),[E,b]=xe.useState(0),[x,S]=xe.useState(_[0].bg),[P,N]=xe.useState(_[0].guide),[L,I]=xe.useState(_[0].hoop),[R,O]=xe.useState(_[0].skating),[A,F]=xe.useState(!1),[H,G]=xe.useState(!1),[Z,ae]=xe.useState(!1),[de,X]=xe.useState(!1),[$,j]=xe.useState(null),J=async()=>{const U=p[E];if(U){j("adding");try{if(!(await fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Number(U),quantity:1})})).ok)throw new Error("cart error");j("added")}catch{j("error")}finally{setTimeout(()=>j(null),2500)}}},oe=xe.useRef(null),[re,B]=xe.useState(null),Q=xe.useRef(null),ge=xe.useRef({rotX:.18,rotY:-.4,tRotX:.18,tRotY:-.4,zoom:4.5,tZoom:4.5}),Ie=xe.useRef({drag:!1,prevX:0,prevY:0}),Ue=xe.useRef(!1),se=xe.useRef(!1);xe.useEffect(()=>{Ue.current=A},[A]),xe.useEffect(()=>{se.current=H,Q.current&&Q.current.traverse(U=>{U.isMesh&&(U.material.wireframe=H)})},[H]);const Se=()=>{const U=ge.current;U.tRotX=.18,U.tRotY=-.4,U.tZoom=4.5};return xe.useEffect(()=>{const U=oe.current;if(!U)return;const ye=new Ja,We=U.offsetWidth||1e3,Ze=U.offsetHeight||700,ot=new zn(38,We/Ze,.01,50);ot.position.set(0,.5,4.5),ot.lookAt(0,.3,0);let Ge;try{Ge=new bl({antialias:!0,alpha:!0})}catch{U.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}Ge.setSize(We,Ze,!1),Ge.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ge.setClearColor(790032,1),U.appendChild(Ge.domElement),ye.add(new xl(16777215,1));const je=new di(16777215,1.4);je.position.set(4,6,4),ye.add(je);const dt=new di(15267904,1.5);dt.position.set(-3,1,-2),ye.add(dt);const ct=new di(4482815,1.5);ct.position.set(0,-3,3),ye.add(ct);const Nt=new El(6,24,1974821,1580063);Nt.position.y=-.45,ye.add(Nt);const mt=new Wn;ye.add(mt),Q.current=mt;const Re=ge.current,k=Ie.current,At=ce=>{k.drag=!0,k.prevX=ce.clientX,k.prevY=ce.clientY},at=()=>{k.drag=!1},Et=ce=>{k.drag&&(Re.tRotY+=(ce.clientX-k.prevX)*.008,Re.tRotX+=(ce.clientY-k.prevY)*.005,Re.tRotX=Math.max(-1,Math.min(1,Re.tRotX)),k.prevX=ce.clientX,k.prevY=ce.clientY)},Ce=ce=>{Re.tZoom+=ce.deltaY*.004,Re.tZoom=Math.max(1.5,Math.min(8,Re.tZoom))},Dt=Se;let D=0,w=0;const K=ce=>{k.drag=!0,D=ce.touches[0].clientX,w=ce.touches[0].clientY},me=()=>{k.drag=!1},pe=ce=>{k.drag&&(Re.tRotY+=(ce.touches[0].clientX-D)*.008,Re.tRotX+=(ce.touches[0].clientY-w)*.005,Re.tRotX=Math.max(-1,Math.min(1,Re.tRotX)),D=ce.touches[0].clientX,w=ce.touches[0].clientY)};U.addEventListener("mousedown",At),window.addEventListener("mouseup",at),window.addEventListener("mousemove",Et),U.addEventListener("wheel",Ce,{passive:!0}),U.addEventListener("dblclick",Dt),U.addEventListener("touchstart",K,{passive:!0}),window.addEventListener("touchend",me),window.addEventListener("touchmove",pe,{passive:!0});const Me=()=>{const ce=U.offsetWidth,He=U.offsetHeight;ot.aspect=ce/He,ot.updateProjectionMatrix(),Ge.setSize(ce,He,!1)};window.addEventListener("resize",Me);const Pe=new Ml;let he;function ve(){he=requestAnimationFrame(ve);const ce=Pe.getDelta();Ue.current&&!k.drag&&(Re.tRotY+=ce*.5),Re.rotX+=(Re.tRotX-Re.rotX)*.09,Re.rotY+=(Re.tRotY-Re.rotY)*.09,Re.zoom+=(Re.tZoom-Re.zoom)*.09,mt.rotation.x=Re.rotX,mt.rotation.y=Re.rotY,ot.position.z=Re.zoom,ot.lookAt(0,.05,0),Ge.render(ye,ot)}return ve(),setTimeout(()=>X(!0),800),B(mt),()=>{cancelAnimationFrame(he),U.removeEventListener("mousedown",At),window.removeEventListener("mouseup",at),window.removeEventListener("mousemove",Et),U.removeEventListener("wheel",Ce),U.removeEventListener("dblclick",Dt),U.removeEventListener("touchstart",K),window.removeEventListener("touchend",me),window.removeEventListener("touchmove",pe),window.removeEventListener("resize",Me),Ge.dispose(),U.contains(Ge.domElement)&&U.removeChild(Ge.domElement)}},[]),fe.createElement("div",{style:{position:"relative",margin:"0 auto",width:"100%",height:"100%",background:"#0c0e10",overflow:"hidden"}},fe.createElement("style",null,`
        @keyframes tl-spin { to { transform: rotate(360deg); } }
        .tl-mount { width: 100%; height: 100%; cursor: grab; }
        .tl-mount:active { cursor: grabbing; }
        .tl-mount canvas { display: block; width: 100% !important; height: 100% !important; }
      `),fe.createElement("div",{ref:oe,className:"tl-mount"}),fe.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,248,64,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80,120,255,0.05) 0%, transparent 60%)"}}),fe.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:20,height:20,pointerEvents:"none",zIndex:5,opacity:.15}},fe.createElement("div",{style:{position:"absolute",width:1,height:"100%",left:"50%",background:"#eaff00"}}),fe.createElement("div",{style:{position:"absolute",height:1,width:"100%",top:"50%",background:"#eaff00"}})),!de&&fe.createElement("div",{style:{position:"absolute",inset:0,zIndex:30,background:"#0c0e10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,transition:"opacity 0.6s ease"}},fe.createElement("div",{style:{width:36,height:36,border:"1.5px solid rgba(255,255,255,0.08)",borderTopColor:"#eaff00",borderRadius:"50%",animation:"tl-spin 0.7s linear infinite"}}),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Initialisation…")),fe.createElement("div",{style:{position:"absolute",top:16,left:16,right:16,display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10,pointerEvents:"none"}},fe.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},"Vue 3D"))),fe.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10}},"Glisser · Zoomer · Double-clic pour reset"),fe.createElement("div",{style:{position:"absolute",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8,zIndex:10}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Couleur siège"),fe.createElement("div",{style:{display:"flex",gap:6}},_.map((U,ye)=>fe.createElement("button",{key:U.id,title:U.id,onClick:We=>{We.preventDefault(),b(ye),y(U.value),S(U.bg),N(U.guide),I(U.hoop),O(U.skating)},style:{width:20,height:20,borderRadius:"50%",padding:0,cursor:"pointer",border:g===U.value?"2px solid #eaff00":"2px solid transparent",boxShadow:g===U.value?"0 0 8px rgba(232,248,64,0.4)":"none",backgroundImage:`url('${U.src}')`,backgroundSize:"cover",backgroundPosition:"center",transition:"all 0.2s ease"}})))),fe.createElement("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,zIndex:10,background:"#141618",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"8px 10px",backdropFilter:"blur(12px)"}},fe.createElement("button",{onClick:Se,style:jo},"↺ Reset"),fe.createElement("button",{onClick:()=>F(U=>!U),style:A?Rf:jo},A?"⏸ Auto":"▷ Auto"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>G(U=>!U),style:H?Rf:jo},"⬡ Wire"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>ae(U=>!U),style:Z?Rf:jo},"ℹ Info")),fe.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:220,background:"#141618",borderLeft:"1px solid rgba(255,255,255,0.08)",padding:"24px 18px",zIndex:15,overflowY:"auto",display:"flex",flexDirection:"column",gap:16,transform:Z?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},fe.createElement("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:14,fontWeight:700,color:"#eaff00",letterSpacing:"0.02em"}},"Fiche Produit"),[["Modèle","Luge"],null,["Châssis","Bois"],["Siège","Nylon"],["Patins","Acier inox"],null,["Dimensions","110 × 45 × 22 cm"],["Poids","3,2 kg"],["Charge max.","80 kg"],null,["Âge","6 ans et plus"]].map((U,ye)=>U===null?fe.createElement("div",{key:ye,style:{height:1,background:"rgba(255,255,255,0.08)"}}):fe.createElement("div",{key:ye,style:{display:"flex",flexDirection:"column",gap:3}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},U[0]),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:12,color:"#f0ede8"}},U[1])))),p.length>0&&fe.createElement("div",{style:{position:"absolute",top:16,right:Z?236:16,zIndex:12,transition:"right 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},fe.createElement("button",{onClick:J,disabled:$==="adding",style:{fontFamily:"'DM Mono', monospace",fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",padding:"8px 14px",borderRadius:8,border:"1px solid rgba(255,255,255,0.15)",background:$==="added"?"rgba(80,200,80,0.15)":$==="error"?"rgba(200,80,80,0.15)":"rgba(232,248,64,0.1)",color:$==="added"?"#80e880":$==="error"?"#e88080":"#eaff00",cursor:$==="adding"?"wait":"pointer",backdropFilter:"blur(12px)",transition:"all 0.2s ease"}},$==="adding"?"Ajout...":$==="added"?"✓ Ajouté":$==="error"?"✗ Erreur":"+ Panier")),re&&fe.createElement(gE,{scene:re,selectedColor:g,backgroundColor:x,guide:P}))};let Ko=class extends _n{constructor(e,t,r,o,l){super();const c=e.computeFrenetFrames(t,!1),f=[],d=[];for(let p=0;p<=t;p++){const _=p/t,g=qa.lerp(r,o,_),y=e.getPoint(_),E=c.normals[p],b=c.binormals[p];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,P=Math.sin(S),N=Math.cos(S);f.push(y.x+g*(N*E.x+P*b.x),y.y+g*(N*E.y+P*b.y),y.z+g*(N*E.z+P*b.z))}}for(let p=0;p<t;p++)for(let _=0;_<l;_++){const g=p*(l+1)+_,y=(p+1)*(l+1)+_;d.push(g,y,g+1),d.push(y,y+1,g+1)}const m=[];for(let p=0;p<=t;p++)for(let _=0;_<=l;_++)m.push(p/t,_/l);this.setAttribute("uv",new Gt(m,2)),this.setAttribute("position",new Gt(f,3)),this.setIndex(d),this.computeVertexNormals()}};function Cf(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Xi(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function ii(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.06,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.25,-.1,0)],d=new Mt(f),m=new ke({map:Cf(s)}),p=new be(new Ko(d,100,.04,.02,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:m}}function qm(s,e,t,r,o,l,c){const f=new ke({map:Xi(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function jm(s,e,t,r,o,l,c){const f=new ke({map:Xi(s)}),d=new be(new Pn(.028,.14,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-left-bottom",{mesh:d,mat:f}}function Km(s,e,t,r,o,l,c){const f=new ke({map:Xi(s)}),d=new be(new Pn(.028,.14,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-right-Bottom",{mesh:d,mat:f}}function _E(s,e,t,r,o,l,c){const f=[new M(.95,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new Mt(f),m=new ke({map:Xi(s),side:st}),p=new be(new Ko(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function yE(s,e,t,r,o,l,c){const f=[new M(.95,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new Mt(f),m=new ke({map:Xi(s),side:st}),p=new be(new Ko(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function Zm(s,e,t,r,o,l,c){const f=new ke({map:Xi(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function Jm(s,e,t,r,o,l,c){const f=new ke({map:Xi(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function SE(s,e,t,r){const o=[new M(-.8,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new Mt(o),c=new ke({map:Xi(s),side:st}),f=new be(new Ko(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function xE(s,e,t,r){const o=[new M(-.8,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new Mt(o),c=new ke({map:Xi(s),side:st}),f=new be(new Ko(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function Qm(s,e,t,r,o,l,c){const f=new ke({map:Cf(s),side:st}),d=new be(new $t(.045,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function e0(s,e,t,r,o,l,c){const f=new ke({map:Cf(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function t0(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new Mt(f),m=new ke({map:Xi(s)}),p=new be(new fi(d,100,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:m}}const ME=({scene:s,selectedColor:e,backgroundColor:t,guide:r})=>{const o=xe.useRef(null),l=xe.useRef([]);return xe.useEffect(()=>{const c=new Wn;c.name="luge",l.current=[],[ii(e,-.56,.33,0,0,1.57,0),ii(e,-.49,.333,0,0,1.57,0),ii(e,-.42,.335,0,0,1.57,0),ii(e,-.35,.34,0,0,1.57,0),ii(e,-.27,.345,0,0,1.57,0),ii(e,-.2,.35,0,0,1.57,0),ii(e,-.4,.34,.2,0,0,.05),ii(e,-.4,.34,.13,0,0,.05),ii(e,-.4,.34,.07,0,0,.05),ii(e,-.4,.34,0,0,0,.05),ii(e,-.4,.34,-.07,0,0,.05),ii(e,-.4,.34,-.13,0,0,.05),ii(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[qm(t,-.645,.25,0,1.57,1.57,0),qm(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[jm(t,-.65,.15,-.26,0,-.1,-.4),jm(t,-.1,.16,-.26,0,0,.2)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[Km(t,-.65,.15,.26,0,.1,-.4),Km(t,-.1,.16,.26,0,0,.2)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)});const _=_E(t,.2,.28,.24,1.57,0,3.13);c.add(_.mesh),l.current.push(_.mat);const g=yE(t,.2,.28,-.24,-1.57,0,3.13);c.add(g.mesh),l.current.push(g.mat),[Zm(t,-.75,.23,.23,0,0,0),Zm(t,-.75,.23,-.23,0,0,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[Jm(t,.7,.33,.184,0,0,0),Jm(t,.7,.33,-.184,0,0,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)});const b=SE(t,0,.19,.37);c.add(b.mesh),l.current.push(b.mat);const x=xE(t,0,.19,-.37);return c.add(x.mesh),l.current.push(x.mat),[Qm(t,-.8,.07,.27,0,0,0),Qm(t,-.8,.07,-.27,0,0,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[e0(t,.63,.471,.169,0,0,0),e0(t,.63,.471,-.169,0,0,0)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),[t0(r,-.03,.2,.52,-1.57,0,-.1),t0(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:L,mat:I})=>{c.add(L),l.current.push(I)}),o.current=c,s.add(c),()=>{s.remove(c),c.traverse(L=>{L.isMesh&&(L.geometry.dispose(),L.material.dispose())})}},[s,e,t,r]),null},Zo={fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",background:"none",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,padding:"7px 14px",cursor:"pointer",color:"rgba(240,237,232,0.6)",whiteSpace:"nowrap",transition:"all 0.15s ease"},bf={...Zo,color:"#eaff00",borderColor:"rgba(232,248,64,0.35)",background:"rgba(232,248,64,0.07)"},EE=({img1:s,img2:e,img3:t,img4:r,img5:o,wood:l,guide:c,skating:f,hoop:d,variantIds:m})=>{const p=xe.useMemo(()=>m?m.split(",").map(U=>U.trim()).filter(Boolean):[],[m]),_=xe.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:d,skating:f},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:d,skating:f},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:d,skating:f},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:d,skating:f},{id:"color-5",value:o,src:o,bg:l,guide:c,hoop:d,skating:f}],[s,e,t,r,o,l,c,d,f]),[g,y]=xe.useState(_[0].value),[E,b]=xe.useState(0),[x,S]=xe.useState(_[0].bg),[P,N]=xe.useState(_[0].guide),[L,I]=xe.useState(_[0].hoop),[R,O]=xe.useState(_[0].skating),[A,F]=xe.useState(!1),[H,G]=xe.useState(!1),[Z,ae]=xe.useState(!1),[de,X]=xe.useState(!1),[$,j]=xe.useState(null),J=async()=>{const U=p[E];if(U){j("adding");try{if(!(await fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Number(U),quantity:1})})).ok)throw new Error("cart error");j("added")}catch{j("error")}finally{setTimeout(()=>j(null),2500)}}},oe=xe.useRef(null),[re,B]=xe.useState(null),Q=xe.useRef(null),ge=xe.useRef({rotX:.18,rotY:-.4,tRotX:.18,tRotY:-.4,zoom:4.5,tZoom:4.5}),Ie=xe.useRef({drag:!1,prevX:0,prevY:0}),Ue=xe.useRef(!1),se=xe.useRef(!1);xe.useEffect(()=>{Ue.current=A},[A]),xe.useEffect(()=>{se.current=H,Q.current&&Q.current.traverse(U=>{U.isMesh&&(U.material.wireframe=H)})},[H]);const Se=()=>{const U=ge.current;U.tRotX=.18,U.tRotY=-.4,U.tZoom=4.5};return xe.useEffect(()=>{const U=oe.current;if(!U)return;const ye=new Ja,We=U.offsetWidth||1e3,Ze=U.offsetHeight||700,ot=new zn(38,We/Ze,.01,50);ot.position.set(0,.5,4.5),ot.lookAt(0,.3,0);let Ge;try{Ge=new bl({antialias:!0,alpha:!0})}catch{U.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}Ge.setSize(We,Ze,!1),Ge.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ge.setClearColor(790032,1),U.appendChild(Ge.domElement),ye.add(new xl(16777215,1));const je=new di(16777215,1.4);je.position.set(4,6,4),ye.add(je);const dt=new di(15267904,1.5);dt.position.set(-3,1,-2),ye.add(dt);const ct=new di(4482815,1.5);ct.position.set(0,-3,3),ye.add(ct);const Nt=new El(6,24,1974821,1580063);Nt.position.y=-.45,ye.add(Nt);const mt=new Wn;ye.add(mt),Q.current=mt;const Re=ge.current,k=Ie.current,At=ce=>{k.drag=!0,k.prevX=ce.clientX,k.prevY=ce.clientY},at=()=>{k.drag=!1},Et=ce=>{k.drag&&(Re.tRotY+=(ce.clientX-k.prevX)*.008,Re.tRotX+=(ce.clientY-k.prevY)*.005,Re.tRotX=Math.max(-1,Math.min(1,Re.tRotX)),k.prevX=ce.clientX,k.prevY=ce.clientY)},Ce=ce=>{Re.tZoom+=ce.deltaY*.004,Re.tZoom=Math.max(1.5,Math.min(8,Re.tZoom))},Dt=Se;let D=0,w=0;const K=ce=>{k.drag=!0,D=ce.touches[0].clientX,w=ce.touches[0].clientY},me=()=>{k.drag=!1},pe=ce=>{k.drag&&(Re.tRotY+=(ce.touches[0].clientX-D)*.008,Re.tRotX+=(ce.touches[0].clientY-w)*.005,Re.tRotX=Math.max(-1,Math.min(1,Re.tRotX)),D=ce.touches[0].clientX,w=ce.touches[0].clientY)};U.addEventListener("mousedown",At),window.addEventListener("mouseup",at),window.addEventListener("mousemove",Et),U.addEventListener("wheel",Ce,{passive:!0}),U.addEventListener("dblclick",Dt),U.addEventListener("touchstart",K,{passive:!0}),window.addEventListener("touchend",me),window.addEventListener("touchmove",pe,{passive:!0});const Me=()=>{const ce=U.offsetWidth,He=U.offsetHeight;ot.aspect=ce/He,ot.updateProjectionMatrix(),Ge.setSize(ce,He,!1)};window.addEventListener("resize",Me);const Pe=new Ml;let he;function ve(){he=requestAnimationFrame(ve);const ce=Pe.getDelta();Ue.current&&!k.drag&&(Re.tRotY+=ce*.5),Re.rotX+=(Re.tRotX-Re.rotX)*.09,Re.rotY+=(Re.tRotY-Re.rotY)*.09,Re.zoom+=(Re.tZoom-Re.zoom)*.09,mt.rotation.x=Re.rotX,mt.rotation.y=Re.rotY,ot.position.z=Re.zoom,ot.lookAt(0,.05,0),Ge.render(ye,ot)}return ve(),setTimeout(()=>X(!0),800),B(mt),()=>{cancelAnimationFrame(he),U.removeEventListener("mousedown",At),window.removeEventListener("mouseup",at),window.removeEventListener("mousemove",Et),U.removeEventListener("wheel",Ce),U.removeEventListener("dblclick",Dt),U.removeEventListener("touchstart",K),window.removeEventListener("touchend",me),window.removeEventListener("touchmove",pe),window.removeEventListener("resize",Me),Ge.dispose(),U.contains(Ge.domElement)&&U.removeChild(Ge.domElement)}},[]),fe.createElement("div",{style:{position:"relative",margin:"0 auto",width:"100%",height:"100%",background:"#0c0e10",overflow:"hidden"}},fe.createElement("style",null,`
        @keyframes tl-spin { to { transform: rotate(360deg); } }
        .tl-mount { width: 100%; height: 100%; cursor: grab; }
        .tl-mount:active { cursor: grabbing; }
        .tl-mount canvas { display: block; width: 100% !important; height: 100% !important; }
      `),fe.createElement("div",{ref:oe,className:"tl-mount"}),fe.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,248,64,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80,120,255,0.05) 0%, transparent 60%)"}}),fe.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:20,height:20,pointerEvents:"none",zIndex:5,opacity:.15}},fe.createElement("div",{style:{position:"absolute",width:1,height:"100%",left:"50%",background:"#eaff00"}}),fe.createElement("div",{style:{position:"absolute",height:1,width:"100%",top:"50%",background:"#eaff00"}})),!de&&fe.createElement("div",{style:{position:"absolute",inset:0,zIndex:30,background:"#0c0e10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,transition:"opacity 0.6s ease"}},fe.createElement("div",{style:{width:36,height:36,border:"1.5px solid rgba(255,255,255,0.08)",borderTopColor:"#eaff00",borderRadius:"50%",animation:"tl-spin 0.7s linear infinite"}}),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Initialisation…")),fe.createElement("div",{style:{position:"absolute",top:16,left:16,right:16,display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10,pointerEvents:"none"}},fe.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},"Vue 3D"))),fe.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10}},"Glisser · Zoomer · Double-clic pour reset"),fe.createElement("div",{style:{position:"absolute",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8,zIndex:10}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Couleur siège"),fe.createElement("div",{style:{display:"flex",gap:6}},_.map((U,ye)=>fe.createElement("button",{key:U.id,title:U.id,onClick:We=>{We.preventDefault(),b(ye),y(U.value),S(U.bg),N(U.guide),I(U.hoop),O(U.skating)},style:{width:20,height:20,borderRadius:"50%",padding:0,cursor:"pointer",border:g===U.value?"2px solid #eaff00":"2px solid transparent",boxShadow:g===U.value?"0 0 8px rgba(232,248,64,0.4)":"none",backgroundImage:`url('${U.src}')`,backgroundSize:"cover",backgroundPosition:"center",transition:"all 0.2s ease"}})))),fe.createElement("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,zIndex:10,background:"#141618",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"8px 10px",backdropFilter:"blur(12px)"}},fe.createElement("button",{onClick:Se,style:Zo},"↺ Reset"),fe.createElement("button",{onClick:()=>F(U=>!U),style:A?bf:Zo},A?"⏸ Auto":"▷ Auto"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>G(U=>!U),style:H?bf:Zo},"⬡ Wire"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>ae(U=>!U),style:Z?bf:Zo},"ℹ Info")),fe.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:220,background:"#141618",borderLeft:"1px solid rgba(255,255,255,0.08)",padding:"24px 18px",zIndex:15,overflowY:"auto",display:"flex",flexDirection:"column",gap:16,transform:Z?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},fe.createElement("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:14,fontWeight:700,color:"#eaff00",letterSpacing:"0.02em"}},"Fiche Produit"),[["Modèle","Luge Kind"],null,["Châssis","Bois"],["Siège","Nylon"],["Patins","Acier inox"],null,["Dimensions","110 × 45 × 22 cm"],["Poids","3,2 kg"],["Charge max.","80 kg"],null,["Âge","6 ans et plus"]].map((U,ye)=>U===null?fe.createElement("div",{key:ye,style:{height:1,background:"rgba(255,255,255,0.08)"}}):fe.createElement("div",{key:ye,style:{display:"flex",flexDirection:"column",gap:3}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},U[0]),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:12,color:"#f0ede8"}},U[1])))),p.length>0&&fe.createElement("div",{style:{position:"absolute",top:16,right:Z?236:16,zIndex:12,transition:"right 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},fe.createElement("button",{onClick:J,disabled:$==="adding",style:{fontFamily:"'DM Mono', monospace",fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",padding:"8px 14px",borderRadius:8,border:"1px solid rgba(255,255,255,0.15)",background:$==="added"?"rgba(80,200,80,0.15)":$==="error"?"rgba(200,80,80,0.15)":"rgba(232,248,64,0.1)",color:$==="added"?"#80e880":$==="error"?"#e88080":"#eaff00",cursor:$==="adding"?"wait":"pointer",backdropFilter:"blur(12px)",transition:"all 0.2s ease"}},$==="adding"?"Ajout...":$==="added"?"✓ Ajouté":$==="error"?"✗ Erreur":"+ Panier")),re&&fe.createElement(ME,{scene:re,selectedColor:g,backgroundColor:x,guide:P}))};class Jo extends _n{constructor(e,t,r,o,l){super();const c=e.computeFrenetFrames(t,!1),f=[],d=[];for(let p=0;p<=t;p++){const _=p/t,g=qa.lerp(r,o,_),y=e.getPoint(_),E=c.normals[p],b=c.binormals[p];for(let x=0;x<=l;x++){const S=x/l*Math.PI*2,P=Math.sin(S),N=Math.cos(S);f.push(y.x+g*(N*E.x+P*b.x),y.y+g*(N*E.y+P*b.y),y.z+g*(N*E.z+P*b.z))}}for(let p=0;p<t;p++)for(let _=0;_<l;_++){const g=p*(l+1)+_,y=(p+1)*(l+1)+_;d.push(g,y,g+1),d.push(y,y+1,g+1)}const m=[];for(let p=0;p<=t;p++)for(let _=0;_<=l;_++)m.push(p/t,_/l);this.setAttribute("uv",new Gt(m,2)),this.setAttribute("position",new Gt(f,3)),this.setIndex(d),this.computeVertexNormals()}}function Pf(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function Yi(s,e=1,t=1.5){if(!s)return new tn;const r=new ls().load(s);return r.wrapS=r.wrapT=Ni,r.repeat.set(e,-t),r.needsUpdate=!0,r}function ri(s,e,t,r,o,l,c){const f=[new M(.16,-.05,0),new M(.27,-.1,0),new M(.28,-.05,0),new M(-0,-.06,0),new M(-.28,-.05,0),new M(-.27,-.1,0),new M(-.25,-.1,0)],d=new Mt(f),m=new ke({map:Pf(s)}),p=new be(new Jo(d,100,.04,.02,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="chassis",{mesh:p,mat:m}}function n0(s,e,t,r,o,l,c){const f=new ke({map:Yi(s)}),d=new be(new Pn(.03,.4,32,64),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="tube-sit-bottom",{mesh:d,mat:f}}function i0(s,e,t,r,o,l,c){const f=[new M(0,-.08,.03),new M(0,-.14,0),new M(0,0,0),new M(0,.14,.03),new M(0,.06,.03)],d=new Mt(f),m=new ke({map:Yi(s)}),p=new be(new fi(d,3,.03,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-left-bottom",{mesh:p,mat:m}}function r0(s,e,t,r,o,l,c){const f=[new M(0,.08,-.03),new M(0,.14,0),new M(0,0,0),new M(0,-.12,.03),new M(0,-.06,.03)],d=new Mt(f),m=new ke({map:Yi(s)}),p=new be(new fi(d,3,.03,2),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-Bottom",{mesh:p,mat:m}}function wE(s,e,t,r,o,l,c){const f=[new M(.95,.02,.05),new M(.75,0,.03),new M(.2,0,.01),new M(.1,0,-.01),new M(-.1,.05,-.03),new M(-.5,.05,-.05)],d=new Mt(f),m=new ke({map:Yi(s),side:st}),p=new be(new Jo(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function TE(s,e,t,r,o,l,c){const f=[new M(.95,.02,-.05),new M(.75,0,-.03),new M(.2,0,-.01),new M(.1,0,.01),new M(-.1,.05,.03),new M(-.5,.05,.05)],d=new Mt(f),m=new ke({map:Yi(s),side:st}),p=new be(new Jo(d,100,.04,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="tube-right-hoop",{mesh:p,mat:m}}function s0(s,e,t,r,o,l,c){const f=new ke({map:Yi(s),side:st}),d=new be(new $t(.04,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottomHoop",{mesh:d,mat:f}}function o0(s,e,t,r,o,l,c){const f=new ke({map:Yi(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTopHoop",{mesh:d,mat:f}}function AE(s,e,t,r){const o=[new M(-.8,-.12,-.1),new M(0,-.12,-.1),new M(.6,-.12,-.1),new M(.7,0,-.12),new M(.63,.28,-.2)],l=new Mt(o),c=new ke({map:Yi(s),side:st}),f=new be(new Jo(l,20,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinDroit",{mesh:f,mat:c}}function RE(s,e,t,r){const o=[new M(-.8,-.12,.1),new M(0,-.12,.1),new M(.6,-.12,.1),new M(.7,0,.12),new M(.63,.28,.2)],l=new Mt(o),c=new ke({map:Yi(s),side:st}),f=new be(new Jo(l,100,.045,.01,20),c);return f.position.set(e,t,r),f.name="patinGauche",{mesh:f,mat:c}}function a0(s,e,t,r,o,l,c){const f=new ke({map:Pf(s),side:st}),d=new be(new $t(.045,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapBottom",{mesh:d,mat:f}}function l0(s,e,t,r,o,l,c){const f=new ke({map:Pf(s),side:st}),d=new be(new $t(.01,8,8),f);return d.position.set(e,t,r),d.rotation.set(o,l,c),d.name="CapTop",{mesh:d,mat:f}}function c0(s,e,t,r,o,l,c){const f=[new M(.7,.4,.15),new M(.5,.4,.15),new M(.2,.4,.15),new M(-.2,.4,.15),new M(-.4,.4,.15),new M(-.2,.3,.15),new M(.5,.4,.15),new M(.7,.4,.15)],d=new Mt(f),m=new ke({map:Yi(s)}),p=new be(new fi(d,100,.01,20),m);return p.position.set(e,t,r),p.rotation.set(o,l,c),p.name="guide",{mesh:p,mat:m}}const CE=({scene:s,selectedColor:e,backgroundColor:t,guide:r,hoop:o,skating:l})=>{const c=xe.useRef(null),f=xe.useRef([]);return xe.useEffect(()=>{const d=new Wn;d.name="luge",f.current=[],[ri(e,-.56,.33,0,0,1.57,0),ri(e,-.49,.333,0,0,1.57,0),ri(e,-.42,.335,0,0,1.57,0),ri(e,-.35,.34,0,0,1.57,0),ri(e,-.27,.345,0,0,1.57,0),ri(e,-.2,.35,0,0,1.57,0),ri(e,-.4,.34,.2,0,0,.05),ri(e,-.4,.34,.13,0,0,.05),ri(e,-.4,.34,.07,0,0,.05),ri(e,-.4,.34,0,0,0,.05),ri(e,-.4,.34,-.07,0,0,.05),ri(e,-.4,.34,-.13,0,0,.05),ri(e,-.4,.34,-.2,0,0,.05)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[n0(t,-.645,.25,0,1.57,1.57,0),n0(t,-.155,.28,0,1.57,1.57,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[i0(o,-.65,.16,-.26,0,0,0),i0(o,-.2,.16,-.26,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[r0(o,-.65,.16,.26,0,0,0),r0(o,-.2,.16,.26,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)});const y=wE(t,.2,.28,.24,1.57,0,3.13);d.add(y.mesh),f.current.push(y.mat);const E=TE(t,.2,.28,-.24,-1.57,0,3.13);d.add(E.mesh),f.current.push(E.mat),[s0(t,-.75,.23,.23,0,0,0),s0(t,-.75,.23,-.23,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[o0(t,.7,.33,.184,0,0,0),o0(t,.7,.33,-.184,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)});const S=AE(l,0,.19,.37);d.add(S.mesh),f.current.push(S.mat);const P=RE(l,0,.19,-.37);return d.add(P.mesh),f.current.push(P.mat),[a0(l,-.8,.07,.27,0,0,0),a0(l,-.8,.07,-.27,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[l0(l,.63,.471,.169,0,0,0),l0(l,.63,.471,-.169,0,0,0)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),[c0(r,-.03,.2,.52,-1.57,0,-.1),c0(r,-.03,.5,-.52,1.57,0,-.1)].forEach(({mesh:R,mat:O})=>{d.add(R),f.current.push(O)}),c.current=d,s.add(d),()=>{s.remove(d),d.traverse(R=>{R.isMesh&&(R.geometry.dispose(),R.material.dispose())})}},[s,e,t,r,o,l]),null},Qo={fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",background:"none",border:"1px solid rgba(255,255,255,0.08)",borderRadius:6,padding:"7px 14px",cursor:"pointer",color:"rgba(240,237,232,0.6)",whiteSpace:"nowrap",transition:"all 0.15s ease"},Lf={...Qo,color:"#eaff00",borderColor:"rgba(232,248,64,0.35)",background:"rgba(232,248,64,0.07)"},bE=({img1:s,img2:e,img3:t,img4:r,img5:o,wood:l,guide:c,skating:f,hoop:d,variantIds:m})=>{const p=xe.useMemo(()=>m?m.split(",").map(U=>U.trim()).filter(Boolean):[],[m]),_=xe.useMemo(()=>[{id:"color-1",value:s,src:s,bg:l,guide:c,hoop:d,skating:f},{id:"color-2",value:e,src:e,bg:l,guide:c,hoop:d,skating:f},{id:"color-3",value:t,src:t,bg:l,guide:c,hoop:d,skating:f},{id:"color-4",value:r,src:r,bg:l,guide:c,hoop:d,skating:f},{id:"color-5",value:o,src:o,bg:l,guide:c,hoop:d,skating:f}],[s,e,t,r,o,l,c,d,f]),[g,y]=xe.useState(_[0].value),[E,b]=xe.useState(0),[x,S]=xe.useState(_[0].bg),[P,N]=xe.useState(_[0].guide),[L,I]=xe.useState(_[0].hoop),[R,O]=xe.useState(_[0].skating),[A,F]=xe.useState(!1),[H,G]=xe.useState(!1),[Z,ae]=xe.useState(!1),[de,X]=xe.useState(!1),[$,j]=xe.useState(null),J=async()=>{const U=p[E];if(U){j("adding");try{if(!(await fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:Number(U),quantity:1})})).ok)throw new Error("cart error");j("added")}catch{j("error")}finally{setTimeout(()=>j(null),2500)}}},oe=xe.useRef(null),[re,B]=xe.useState(null),Q=xe.useRef(null),ge=xe.useRef({rotX:.18,rotY:-.4,tRotX:.18,tRotY:-.4,zoom:4.5,tZoom:4.5}),Ie=xe.useRef({drag:!1,prevX:0,prevY:0}),Ue=xe.useRef(!1),se=xe.useRef(!1);xe.useEffect(()=>{Ue.current=A},[A]),xe.useEffect(()=>{se.current=H,Q.current&&Q.current.traverse(U=>{U.isMesh&&(U.material.wireframe=H)})},[H]);const Se=()=>{const U=ge.current;U.tRotX=.18,U.tRotY=-.4,U.tZoom=4.5};return xe.useEffect(()=>{const U=oe.current;if(!U)return;const ye=new Ja,We=U.offsetWidth||1e3,Ze=U.offsetHeight||700,ot=new zn(38,We/Ze,.01,50);ot.position.set(0,.5,4.5),ot.lookAt(0,.3,0);let Ge;try{Ge=new bl({antialias:!0,alpha:!0})}catch{U.innerHTML="<p>Votre navigateur ne supporte pas la 3D interactive.</p>";return}Ge.setSize(We,Ze,!1),Ge.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ge.setClearColor(790032,1),U.appendChild(Ge.domElement),ye.add(new xl(16777215,1));const je=new di(16777215,1.4);je.position.set(4,6,4),ye.add(je);const dt=new di(15267904,1.5);dt.position.set(-3,1,-2),ye.add(dt);const ct=new di(4482815,1.5);ct.position.set(0,-3,3),ye.add(ct);const Nt=new El(6,24,1974821,1580063);Nt.position.y=-.45,ye.add(Nt);const mt=new Wn;ye.add(mt),Q.current=mt;const Re=ge.current,k=Ie.current,At=ce=>{k.drag=!0,k.prevX=ce.clientX,k.prevY=ce.clientY},at=()=>{k.drag=!1},Et=ce=>{k.drag&&(Re.tRotY+=(ce.clientX-k.prevX)*.008,Re.tRotX+=(ce.clientY-k.prevY)*.005,Re.tRotX=Math.max(-1,Math.min(1,Re.tRotX)),k.prevX=ce.clientX,k.prevY=ce.clientY)},Ce=ce=>{Re.tZoom+=ce.deltaY*.004,Re.tZoom=Math.max(1.5,Math.min(8,Re.tZoom))},Dt=Se;let D=0,w=0;const K=ce=>{k.drag=!0,D=ce.touches[0].clientX,w=ce.touches[0].clientY},me=()=>{k.drag=!1},pe=ce=>{k.drag&&(Re.tRotY+=(ce.touches[0].clientX-D)*.008,Re.tRotX+=(ce.touches[0].clientY-w)*.005,Re.tRotX=Math.max(-1,Math.min(1,Re.tRotX)),D=ce.touches[0].clientX,w=ce.touches[0].clientY)};U.addEventListener("mousedown",At),window.addEventListener("mouseup",at),window.addEventListener("mousemove",Et),U.addEventListener("wheel",Ce,{passive:!0}),U.addEventListener("dblclick",Dt),U.addEventListener("touchstart",K,{passive:!0}),window.addEventListener("touchend",me),window.addEventListener("touchmove",pe,{passive:!0});const Me=()=>{const ce=U.offsetWidth,He=U.offsetHeight;ot.aspect=ce/He,ot.updateProjectionMatrix(),Ge.setSize(ce,He,!1)};window.addEventListener("resize",Me);const Pe=new Ml;let he;function ve(){he=requestAnimationFrame(ve);const ce=Pe.getDelta();Ue.current&&!k.drag&&(Re.tRotY+=ce*.5),Re.rotX+=(Re.tRotX-Re.rotX)*.09,Re.rotY+=(Re.tRotY-Re.rotY)*.09,Re.zoom+=(Re.tZoom-Re.zoom)*.09,mt.rotation.x=Re.rotX,mt.rotation.y=Re.rotY,ot.position.z=Re.zoom,ot.lookAt(0,.05,0),Ge.render(ye,ot)}return ve(),setTimeout(()=>X(!0),800),B(mt),()=>{cancelAnimationFrame(he),U.removeEventListener("mousedown",At),window.removeEventListener("mouseup",at),window.removeEventListener("mousemove",Et),U.removeEventListener("wheel",Ce),U.removeEventListener("dblclick",Dt),U.removeEventListener("touchstart",K),window.removeEventListener("touchend",me),window.removeEventListener("touchmove",pe),window.removeEventListener("resize",Me),Ge.dispose(),U.contains(Ge.domElement)&&U.removeChild(Ge.domElement)}},[]),fe.createElement("div",{style:{position:"relative",margin:"0 auto",width:"100%",height:"100%",background:"#0c0e10",overflow:"hidden"}},fe.createElement("style",null,`
        @keyframes tl-spin { to { transform: rotate(360deg); } }
        .tl-mount { width: 100%; height: 100%; cursor: grab; }
        .tl-mount:active { cursor: grabbing; }
        .tl-mount canvas { display: block; width: 100% !important; height: 100% !important; }
      `),fe.createElement("div",{ref:oe,className:"tl-mount"}),fe.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232,248,64,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80,120,255,0.05) 0%, transparent 60%)"}}),fe.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:20,height:20,pointerEvents:"none",zIndex:5,opacity:.15}},fe.createElement("div",{style:{position:"absolute",width:1,height:"100%",left:"50%",background:"#eaff00"}}),fe.createElement("div",{style:{position:"absolute",height:1,width:"100%",top:"50%",background:"#eaff00"}})),!de&&fe.createElement("div",{style:{position:"absolute",inset:0,zIndex:30,background:"#0c0e10",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14,transition:"opacity 0.6s ease"}},fe.createElement("div",{style:{width:36,height:36,border:"1.5px solid rgba(255,255,255,0.08)",borderTopColor:"#eaff00",borderRadius:"50%",animation:"tl-spin 0.7s linear infinite"}}),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Initialisation…")),fe.createElement("div",{style:{position:"absolute",top:16,left:16,right:16,display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:10,pointerEvents:"none"}},fe.createElement("div",{style:{display:"flex",gap:8,alignItems:"center"}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",padding:"4px 10px",borderRadius:4,backdropFilter:"blur(8px)"}},"Vue 3D"))),fe.createElement("div",{style:{position:"absolute",bottom:80,left:"50%",transform:"translateX(-50%)",fontFamily:"'DM Mono', monospace",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)",whiteSpace:"nowrap",pointerEvents:"none",zIndex:10}},"Glisser · Zoomer · Double-clic pour reset"),fe.createElement("div",{style:{position:"absolute",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8,zIndex:10}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},"Couleur siège"),fe.createElement("div",{style:{display:"flex",gap:6}},_.map((U,ye)=>fe.createElement("button",{key:U.id,title:U.id,onClick:We=>{We.preventDefault(),b(ye),y(U.value),S(U.bg),N(U.guide),I(U.hoop),O(U.skating)},style:{width:20,height:20,borderRadius:"50%",padding:0,cursor:"pointer",border:g===U.value?"2px solid #eaff00":"2px solid transparent",boxShadow:g===U.value?"0 0 8px rgba(232,248,64,0.4)":"none",backgroundImage:`url('${U.src}')`,backgroundSize:"cover",backgroundPosition:"center",transition:"all 0.2s ease"}})))),fe.createElement("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,zIndex:10,background:"#141618",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"8px 10px",backdropFilter:"blur(12px)"}},fe.createElement("button",{onClick:Se,style:Qo},"↺ Reset"),fe.createElement("button",{onClick:()=>F(U=>!U),style:A?Lf:Qo},A?"⏸ Auto":"▷ Auto"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>G(U=>!U),style:H?Lf:Qo},"⬡ Wire"),fe.createElement("div",{style:{width:1,height:18,background:"rgba(255,255,255,0.08)"}}),fe.createElement("button",{onClick:()=>ae(U=>!U),style:Z?Lf:Qo},"ℹ Info")),fe.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:220,background:"#141618",borderLeft:"1px solid rgba(255,255,255,0.08)",padding:"24px 18px",zIndex:15,overflowY:"auto",display:"flex",flexDirection:"column",gap:16,transform:Z?"translateX(0)":"translateX(100%)",transition:"transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},fe.createElement("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:14,fontWeight:700,color:"#eaff00",letterSpacing:"0.02em"}},"Fiche Produit"),[["Modèle","Luge Sport"],null,["Châssis","Bois"],["Siège","Nylon"],["Patins","Acier inox"],null,["Dimensions","110 × 45 × 22 cm"],["Poids","3,2 kg"],["Charge max.","80 kg"],null,["Âge","6 ans et plus"]].map((U,ye)=>U===null?fe.createElement("div",{key:ye,style:{height:1,background:"rgba(255,255,255,0.08)"}}):fe.createElement("div",{key:ye,style:{display:"flex",flexDirection:"column",gap:3}},fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(240,237,232,0.4)"}},U[0]),fe.createElement("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:12,color:"#f0ede8"}},U[1])))),p.length>0&&fe.createElement("div",{style:{position:"absolute",top:16,right:Z?236:16,zIndex:12,transition:"right 0.3s cubic-bezier(0.25,0.46,0.45,0.94)"}},fe.createElement("button",{onClick:J,disabled:$==="adding",style:{fontFamily:"'DM Mono', monospace",fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase",padding:"8px 14px",borderRadius:8,border:"1px solid rgba(255,255,255,0.15)",background:$==="added"?"rgba(80,200,80,0.15)":$==="error"?"rgba(200,80,80,0.15)":"rgba(232,248,64,0.1)",color:$==="added"?"#80e880":$==="error"?"#e88080":"#eaff00",cursor:$==="adding"?"wait":"pointer",backdropFilter:"blur(12px)",transition:"all 0.2s ease"}},$==="adding"?"Ajout...":$==="added"?"✓ Ajouté":$==="error"?"✗ Erreur":"+ Panier")),re&&fe.createElement(CE,{scene:re,selectedColor:g,backgroundColor:x,guide:P,hoop:L,skating:R}))};function Ll(s,e){const t=document.getElementById(s);if(t&&t.dataset.mounted!=="true"){t.dataset.mounted="true";try{const r={img1:t.dataset.img1||"",img2:t.dataset.img2||"",img3:t.dataset.img3||"",img4:t.dataset.img4||"",img5:t.dataset.img5||"",wood:t.dataset.wood||"",guide:t.dataset.guide||"",skating:t.dataset.skating||"",hoop:t.dataset.hoop||"",variantIds:t.dataset.variantIds||""};Fv.createRoot(t).render(fe.createElement(e,{...r}))}catch(r){t.innerHTML='<div style="padding:20px;color:red;font-family:sans-serif"><strong>Erreur configurateur 3D :</strong> '+r.message+"</div>"}}}function u0(){Ll("luge-configurator-root",fE),Ll("luge-ad-root",vE),Ll("luge-kid-root",EE),Ll("luge-speed-root",bE)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u0):u0()})();
