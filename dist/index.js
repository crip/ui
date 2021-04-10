(()=>{var ie=Object.create,O=Object.defineProperty,fe=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty,le=Object.getOwnPropertyNames,pe=Object.getOwnPropertyDescriptor;var ye=e=>O(e,"__esModule",{value:!0});var y=(e,r)=>()=>(r||(r={exports:{}},e(r.exports,r)),r.exports);var he=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of le(r))!ae.call(e,n)&&n!=="default"&&O(e,n,{get:()=>r[n],enumerable:!(t=pe(r,n))||t.enumerable});return e},R=e=>he(ye(O(e!=null?ie(fe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var N=y((Ce,w)=>{"use strict";var C=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;function ve(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function _e(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(s){return r[s]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(s){o[s]=s}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch(s){return!1}}w.exports=_e()?Object.assign:function(e,r){for(var t,n=ve(e),o,s=1;s<arguments.length;s++){t=Object(arguments[s]);for(var i in t)me.call(t,i)&&(n[i]=t[i]);if(C){o=C(t);for(var c=0;c<o.length;c++)de.call(t,o[c])&&(n[o[c]]=t[o[c]])}}return n}});var z=y(u=>{"use strict";var j=N(),h=60103,T=60106;u.Fragment=60107;u.StrictMode=60108;u.Profiler=60114;var $=60109,q=60110,x=60112;u.Suspense=60113;var I=60115,A=60116;typeof Symbol=="function"&&Symbol.for&&(l=Symbol.for,h=l("react.element"),T=l("react.portal"),u.Fragment=l("react.fragment"),u.StrictMode=l("react.strict_mode"),u.Profiler=l("react.profiler"),$=l("react.provider"),q=l("react.context"),x=l("react.forward_ref"),u.Suspense=l("react.suspense"),I=l("react.memo"),A=l("react.lazy"));var l,D=typeof Symbol=="function"&&Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H={};function m(e,r,t){this.props=e,this.context=r,this.refs=H,this.updater=t||F}m.prototype.isReactComponent={};m.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")};m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U(){}U.prototype=m.prototype;function S(e,r,t){this.props=e,this.context=r,this.refs=H,this.updater=t||F}var E=S.prototype=new U;E.constructor=S;j(E,m.prototype);E.isPureReactComponent=!0;var P={current:null},L=Object.prototype.hasOwnProperty,V={key:!0,ref:!0,__self:!0,__source:!0};function M(e,r,t){var n,o={},s=null,i=null;if(r!=null)for(n in r.ref!==void 0&&(i=r.ref),r.key!==void 0&&(s=""+r.key),r)L.call(r,n)&&!V.hasOwnProperty(n)&&(o[n]=r[n]);var c=arguments.length-2;if(c===1)o.children=t;else if(1<c){for(var f=Array(c),a=0;a<c;a++)f[a]=arguments[a+2];o.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:h,type:e,key:s,ref:i,props:o,_owner:P.current}}function Oe(e,r){return{$$typeof:h,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===h}function je(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var W=/\/+/g;function b(e,r){return typeof e=="object"&&e!==null&&e.key!=null?je(""+e.key):r.toString(36)}function v(e,r,t,n,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case h:case T:i=!0}}if(i)return i=e,o=o(i),e=n===""?"."+b(i,0):n,Array.isArray(o)?(t="",e!=null&&(t=e.replace(W,"$&/")+"/"),v(o,r,t,"",function(a){return a})):o!=null&&(k(o)&&(o=Oe(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(W,"$&/")+"/")+e)),r.push(o)),1;if(i=0,n=n===""?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){s=e[c];var f=n+b(s,c);i+=v(s,r,t,f,o)}else if(f=ge(e),typeof f=="function")for(e=f.call(e),c=0;!(s=e.next()).done;)s=s.value,f=n+b(s,c++),i+=v(s,r,t,f,o);else if(s==="object")throw r=""+e,Error(d(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}function _(e,r,t){if(e==null)return e;var n=[],o=0;return v(e,n,"","",function(s){return r.call(t,s,o++)}),n}function Se(e){if(e._status===-1){var r=e._result;r=r(),e._status=0,e._result=r,r.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var B={current:null};function p(){var e=B.current;if(e===null)throw Error(d(321));return e}var Ee={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:j};u.Children={map:_,forEach:function(e,r,t){_(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return _(e,function(){r++}),r},toArray:function(e){return _(e,function(r){return r})||[]},only:function(e){if(!k(e))throw Error(d(143));return e}};u.Component=m;u.PureComponent=S;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ee;u.cloneElement=function(e,r,t){if(e==null)throw Error(d(267,e));var n=j({},e.props),o=e.key,s=e.ref,i=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,i=P.current),r.key!==void 0&&(o=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in r)L.call(r,f)&&!V.hasOwnProperty(f)&&(n[f]=r[f]===void 0&&c!==void 0?c[f]:r[f])}var f=arguments.length-2;if(f===1)n.children=t;else if(1<f){c=Array(f);for(var a=0;a<f;a++)c[a]=arguments[a+2];n.children=c}return{$$typeof:h,type:e.type,key:o,ref:s,props:n,_owner:i}};u.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:q,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:$,_context:e},e.Consumer=e};u.createElement=M;u.createFactory=function(e){var r=M.bind(null,e);return r.type=e,r};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:x,render:e}};u.isValidElement=k;u.lazy=function(e){return{$$typeof:A,_payload:{_status:-1,_result:e},_init:Se}};u.memo=function(e,r){return{$$typeof:I,type:e,compare:r===void 0?null:r}};u.useCallback=function(e,r){return p().useCallback(e,r)};u.useContext=function(e,r){return p().useContext(e,r)};u.useDebugValue=function(){};u.useEffect=function(e,r){return p().useEffect(e,r)};u.useImperativeHandle=function(e,r,t){return p().useImperativeHandle(e,r,t)};u.useLayoutEffect=function(e,r){return p().useLayoutEffect(e,r)};u.useMemo=function(e,r){return p().useMemo(e,r)};u.useReducer=function(e,r,t){return p().useReducer(e,r,t)};u.useRef=function(e){return p().useRef(e)};u.useState=function(e){return p().useState(e)};u.version="17.0.2"});var G=y((Te,Y)=>{"use strict";Y.exports=z()});var K=y(($e,J)=>{"use strict";var Pe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";J.exports=Pe});var ee=y((qe,Q)=>{"use strict";var ke=K();function X(){}function Z(){}Z.resetWarningCache=X;Q.exports=function(){function e(n,o,s,i,c,f){if(f!==ke){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}e.isRequired=e;function r(){return e}var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Z,resetWarningCache:X};return t.PropTypes=t,t}});var te=y((Ae,re)=>{re.exports=ee()();var xe,Ie});var g=R(G()),ue=R(te());function ne(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=ne(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function oe(){for(var e=0,r,t,n="";e<arguments.length;)(r=arguments[e++])&&(t=ne(r))&&(n&&(n+=" "),n+=t);return n}var se={h1:{classNames:["text-9xl","uppercase"]},h2:{classNames:[]},h3:{classNames:[]},h4:{classNames:[]},h5:{classNames:[]},h6:{classNames:[]}},be=Object.keys(se),ce=({as:e})=>{if(!be.includes(e))throw Error(`Heading of ${e} is not allowed`);let r=e,t=oe(se[e].classNames);return g.default.createElement(g.default.Fragment,null,g.default.createElement(r,{classNames:t},"Hello"))};ce.propTypes={as:ue.default.string};ce.defaultProps={as:"h1"};})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
