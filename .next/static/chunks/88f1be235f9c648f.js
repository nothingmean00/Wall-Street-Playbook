(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46319,(e,t,r)=>{"use strict";t.exports=TypeError},6368,(e,t,r)=>{var a="function"==typeof Map&&Map.prototype,n=Object.getOwnPropertyDescriptor&&a?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,o=a&&n&&"function"==typeof n.get?n.get:null,i=a&&Map.prototype.forEach,s="function"==typeof Set&&Set.prototype,l=Object.getOwnPropertyDescriptor&&s?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,u=s&&l&&"function"==typeof l.get?l.get:null,c=s&&Set.prototype.forEach,d="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,h="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,m="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,p=Boolean.prototype.valueOf,y=Object.prototype.toString,f=Function.prototype.toString,g=String.prototype.match,v=String.prototype.slice,b=String.prototype.replace,w=String.prototype.toUpperCase,k=String.prototype.toLowerCase,T=RegExp.prototype.test,P=Array.prototype.concat,x=Array.prototype.join,S=Array.prototype.slice,E=Math.floor,A="function"==typeof BigInt?BigInt.prototype.valueOf:null,I=Object.getOwnPropertySymbols,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,C="function"==typeof Symbol&&"object"==typeof Symbol.iterator,B="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===C?"object":"symbol")?Symbol.toStringTag:null,O=Object.prototype.propertyIsEnumerable,M=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function R(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||T.call(/e/,t))return t;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var a=e<0?-E(-e):E(e);if(a!==e){var n=String(a),o=v.call(t,n.length+1);return b.call(n,r,"$&_")+"."+b.call(b.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return b.call(t,r,"$&_")}var j={},N=j.custom,q=$(N)?N:null,G={__proto__:null,double:'"',single:"'"},F={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};function D(e,t,r){var a=G[r.quoteStyle||t];return a+e+a}function W(e){return!B||!("object"==typeof e&&(B in e||void 0!==e[B]))}function L(e){return"[object Array]"===z(e)&&W(e)}function H(e){return"[object RegExp]"===z(e)&&W(e)}function $(e){if(C)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!_)return!1;try{return _.call(e),!0}catch(e){}return!1}t.exports=function t(r,a,n,s){var l,y,w,T,E,I=a||{};if(Y(I,"quoteStyle")&&!Y(G,I.quoteStyle))throw TypeError('option "quoteStyle" must be "single" or "double"');if(Y(I,"maxStringLength")&&("number"==typeof I.maxStringLength?I.maxStringLength<0&&I.maxStringLength!==1/0:null!==I.maxStringLength))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var N=!Y(I,"customInspect")||I.customInspect;if("boolean"!=typeof N&&"symbol"!==N)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(Y(I,"indent")&&null!==I.indent&&"	"!==I.indent&&!(parseInt(I.indent,10)===I.indent&&I.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(Y(I,"numericSeparator")&&"boolean"!=typeof I.numericSeparator)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var U=I.numericSeparator;if(void 0===r)return"undefined";if(null===r)return"null";if("boolean"==typeof r)return r?"true":"false";if("string"==typeof r)return function e(t,r){if(t.length>r.maxStringLength){var a=t.length-r.maxStringLength;return e(v.call(t,0,r.maxStringLength),r)+("... "+a)+" more character"+(a>1?"s":"")}var n=F[r.quoteStyle||"single"];return n.lastIndex=0,D(b.call(b.call(t,n,"\\$1"),/[\x00-\x1f]/g,K),"single",r)}(r,I);if("number"==typeof r){if(0===r)return 1/0/r>0?"0":"-0";var et=String(r);return U?R(r,et):et}if("bigint"==typeof r){var er=String(r)+"n";return U?R(r,er):er}var ea=void 0===I.depth?5:I.depth;if(void 0===n&&(n=0),n>=ea&&ea>0&&"object"==typeof r)return L(r)?"[Array]":"[Object]";var en=function(e,t){var r;if("	"===e.indent)r="	";else{if("number"!=typeof e.indent||!(e.indent>0))return null;r=x.call(Array(e.indent+1)," ")}return{base:r,prev:x.call(Array(t+1),r)}}(I,n);if(void 0===s)s=[];else if(V(s,r)>=0)return"[Circular]";function eo(e,r,a){if(r&&(s=S.call(s)).push(r),a){var o={depth:I.depth};return Y(I,"quoteStyle")&&(o.quoteStyle=I.quoteStyle),t(e,o,n+1,s)}return t(e,I,n+1,s)}if("function"==typeof r&&!H(r)){var ei=function(e){if(e.name)return e.name;var t=g.call(f.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(r),es=ee(r,eo);return"[Function"+(ei?": "+ei:" (anonymous)")+"]"+(es.length>0?" { "+x.call(es,", ")+" }":"")}if($(r)){var el=C?b.call(String(r),/^(Symbol\(.*\))_[^)]*$/,"$1"):_.call(r);return"object"!=typeof r||C?el:Q(el)}if((eu=r)&&"object"==typeof eu&&("undefined"!=typeof HTMLElement&&eu instanceof HTMLElement||"string"==typeof eu.nodeName&&"function"==typeof eu.getAttribute)){for(var eu,ec,ed="<"+k.call(String(r.nodeName)),eh=r.attributes||[],em=0;em<eh.length;em++){ed+=" "+eh[em].name+"="+D((ec=eh[em].value,b.call(String(ec),/"/g,"&quot;")),"double",I)}return ed+=">",r.childNodes&&r.childNodes.length&&(ed+="..."),ed+="</"+k.call(String(r.nodeName))+">"}if(L(r)){if(0===r.length)return"[]";var ep=ee(r,eo);return en&&!function(e){for(var t=0;t<e.length;t++)if(V(e[t],"\n")>=0)return!1;return!0}(ep)?"["+Z(ep,en)+"]":"[ "+x.call(ep,", ")+" ]"}if("[object Error]"===z(l=r)&&W(l)){var ey=ee(r,eo);return"cause"in Error.prototype||!("cause"in r)||O.call(r,"cause")?0===ey.length?"["+String(r)+"]":"{ ["+String(r)+"] "+x.call(ey,", ")+" }":"{ ["+String(r)+"] "+x.call(P.call("[cause]: "+eo(r.cause),ey),", ")+" }"}if("object"==typeof r&&N){if(q&&"function"==typeof r[q]&&j)return j(r,{depth:ea-n});else if("symbol"!==N&&"function"==typeof r.inspect)return r.inspect()}if(function(e){if(!o||!e||"object"!=typeof e)return!1;try{o.call(e);try{u.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(r)){var ef=[];return i&&i.call(r,function(e,t){ef.push(eo(t,r,!0)+" => "+eo(e,r))}),X("Map",o.call(r),ef,en)}if(function(e){if(!u||!e||"object"!=typeof e)return!1;try{u.call(e);try{o.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(r)){var eg=[];return c&&c.call(r,function(e){eg.push(eo(e,r))}),X("Set",u.call(r),eg,en)}if(function(e){if(!d||!e||"object"!=typeof e)return!1;try{d.call(e,d);try{h.call(e,h)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(r))return J("WeakMap");if(function(e){if(!h||!e||"object"!=typeof e)return!1;try{h.call(e,h);try{d.call(e,d)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(r))return J("WeakSet");if(function(e){if(!m||!e||"object"!=typeof e)return!1;try{return m.call(e),!0}catch(e){}return!1}(r))return J("WeakRef");if("[object Number]"===z(y=r)&&W(y))return Q(eo(Number(r)));if(function(e){if(!e||"object"!=typeof e||!A)return!1;try{return A.call(e),!0}catch(e){}return!1}(r))return Q(eo(A.call(r)));if("[object Boolean]"===z(w=r)&&W(w))return Q(p.call(r));if("[object String]"===z(T=r)&&W(T))return Q(eo(String(r)));if("undefined"!=typeof window&&r===window)return"{ [object Window] }";if("undefined"!=typeof globalThis&&r===globalThis||r===e.g)return"{ [object globalThis] }";if(!("[object Date]"===z(E=r)&&W(E))&&!H(r)){var ev=ee(r,eo),eb=M?M(r)===Object.prototype:r instanceof Object||r.constructor===Object,ew=r instanceof Object?"":"null prototype",ek=!eb&&B&&Object(r)===r&&B in r?v.call(z(r),8,-1):ew?"Object":"",eT=(eb||"function"!=typeof r.constructor?"":r.constructor.name?r.constructor.name+" ":"")+(ek||ew?"["+x.call(P.call([],ek||[],ew||[]),": ")+"] ":"");return 0===ev.length?eT+"{}":en?eT+"{"+Z(ev,en)+"}":eT+"{ "+x.call(ev,", ")+" }"}return String(r)};var U=Object.prototype.hasOwnProperty||function(e){return e in this};function Y(e,t){return U.call(e,t)}function z(e){return y.call(e)}function V(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,a=e.length;r<a;r++)if(e[r]===t)return r;return -1}function K(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+w.call(t.toString(16))}function Q(e){return"Object("+e+")"}function J(e){return e+" { ? }"}function X(e,t,r,a){return e+" ("+t+") {"+(a?Z(r,a):x.call(r,", "))+"}"}function Z(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+x.call(e,","+r)+"\n"+t.prev}function ee(e,t){var r,a=L(e),n=[];if(a){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=Y(e,o)?t(e[o],e):""}var i="function"==typeof I?I(e):[];if(C){r={};for(var s=0;s<i.length;s++)r["$"+i[s]]=i[s]}for(var l in e)if(Y(e,l)&&(!a||String(Number(l))!==l||!(l<e.length)))if(C&&r["$"+l]instanceof Symbol)continue;else T.call(/[^\w$]/,l)?n.push(t(l,e)+": "+t(e[l],e)):n.push(l+": "+t(e[l],e));if("function"==typeof I)for(var u=0;u<i.length;u++)O.call(e,i[u])&&n.push("["+t(i[u])+"]: "+t(e[i[u]],e));return n}},12751,(e,t,r)=>{"use strict";var a=e.r(6368),n=e.r(46319),o=function(e,t,r){for(var a,n=e;null!=(a=n.next);n=a)if(a.key===t)return n.next=a.next,r||(a.next=e.next,e.next=a),a},i=function(e,t){if(e){var r=o(e,t);return r&&r.value}},s=function(e,t,r){var a=o(e,t);a?a.value=r:e.next={key:t,next:e.next,value:r}},l=function(e,t){if(e)return o(e,t,!0)};t.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new n("Side channel does not contain "+a(e))},delete:function(t){var r=e&&e.next,a=l(e,t);return a&&r&&r===a&&(e=void 0),!!a},get:function(t){return i(e,t)},has:function(t){var r;return!!(r=e)&&!!o(r,t)},set:function(t,r){e||(e={next:void 0}),s(e,t,r)}};return t}},76611,(e,t,r)=>{"use strict";t.exports=Object},14821,(e,t,r)=>{"use strict";t.exports=Error},49975,(e,t,r)=>{"use strict";t.exports=EvalError},73791,(e,t,r)=>{"use strict";t.exports=RangeError},29109,(e,t,r)=>{"use strict";t.exports=ReferenceError},72955,(e,t,r)=>{"use strict";t.exports=SyntaxError},77777,(e,t,r)=>{"use strict";t.exports=URIError},85911,(e,t,r)=>{"use strict";t.exports=Math.abs},77865,(e,t,r)=>{"use strict";t.exports=Math.floor},17490,(e,t,r)=>{"use strict";t.exports=Math.max},20435,(e,t,r)=>{"use strict";t.exports=Math.min},2841,(e,t,r)=>{"use strict";t.exports=Math.pow},28565,(e,t,r)=>{"use strict";t.exports=Math.round},93281,(e,t,r)=>{"use strict";t.exports=Number.isNaN||function(e){return e!=e}},23210,(e,t,r)=>{"use strict";var a=e.r(93281);t.exports=function(e){return a(e)||0===e?e:e<0?-1:1}},65904,(e,t,r)=>{"use strict";t.exports=Object.getOwnPropertyDescriptor},92553,(e,t,r)=>{"use strict";var a=e.r(65904);if(a)try{a([],"length")}catch(e){a=null}t.exports=a},33413,(e,t,r)=>{"use strict";var a=Object.defineProperty||!1;if(a)try{a({},"a",{value:1})}catch(e){a=!1}t.exports=a},77886,(e,t,r)=>{"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t||"[object Symbol]"!==Object.prototype.toString.call(t)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(var a in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},86546,(e,t,r)=>{"use strict";var a="undefined"!=typeof Symbol&&Symbol,n=e.r(77886);t.exports=function(){return"function"==typeof a&&"function"==typeof Symbol&&"symbol"==typeof a("foo")&&"symbol"==typeof Symbol("bar")&&n()}},70343,(e,t,r)=>{"use strict";t.exports="undefined"!=typeof Reflect&&Reflect.getPrototypeOf||null},65103,(e,t,r)=>{"use strict";t.exports=e.r(76611).getPrototypeOf||null},11400,(e,t,r)=>{"use strict";var a=Object.prototype.toString,n=Math.max,o=function(e,t){for(var r=[],a=0;a<e.length;a+=1)r[a]=e[a];for(var n=0;n<t.length;n+=1)r[n+e.length]=t[n];return r},i=function(e,t){for(var r=[],a=t||0,n=0;a<e.length;a+=1,n+=1)r[n]=e[a];return r},s=function(e,t){for(var r="",a=0;a<e.length;a+=1)r+=e[a],a+1<e.length&&(r+=t);return r};t.exports=function(e){var t,r=this;if("function"!=typeof r||"[object Function]"!==a.apply(r))throw TypeError("Function.prototype.bind called on incompatible "+r);for(var l=i(arguments,1),u=n(0,r.length-l.length),c=[],d=0;d<u;d++)c[d]="$"+d;if(t=Function("binder","return function ("+s(c,",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof t){var a=r.apply(this,o(l,arguments));return Object(a)===a?a:this}return r.apply(e,o(l,arguments))}),r.prototype){var h=function(){};h.prototype=r.prototype,t.prototype=new h,h.prototype=null}return t}},42618,(e,t,r)=>{"use strict";var a=e.r(11400);t.exports=Function.prototype.bind||a},41757,(e,t,r)=>{"use strict";t.exports=Function.prototype.call},74609,(e,t,r)=>{"use strict";t.exports=Function.prototype.apply},70321,(e,t,r)=>{"use strict";t.exports="undefined"!=typeof Reflect&&Reflect&&Reflect.apply},66895,(e,t,r)=>{"use strict";var a=e.r(42618),n=e.r(74609),o=e.r(41757);t.exports=e.r(70321)||a.call(o,n)},30890,(e,t,r)=>{"use strict";var a=e.r(42618),n=e.r(46319),o=e.r(41757),i=e.r(66895);t.exports=function(e){if(e.length<1||"function"!=typeof e[0])throw new n("a function is required");return i(a,o,e)}},96019,(e,t,r)=>{"use strict";var a,n=e.r(30890),o=e.r(92553);try{a=[].__proto__===Array.prototype}catch(e){if(!e||"object"!=typeof e||!("code"in e)||"ERR_PROTO_ACCESS"!==e.code)throw e}var i=!!a&&o&&o(Object.prototype,"__proto__"),s=Object,l=s.getPrototypeOf;t.exports=i&&"function"==typeof i.get?n([i.get]):"function"==typeof l&&function(e){return l(null==e?e:s(e))}},97843,(e,t,r)=>{"use strict";var a=e.r(70343),n=e.r(65103),o=e.r(96019);t.exports=a?function(e){return a(e)}:n?function(e){if(!e||"object"!=typeof e&&"function"!=typeof e)throw TypeError("getProto: not an object");return n(e)}:o?function(e){return o(e)}:null},8005,(e,t,r)=>{"use strict";var a=Function.prototype.call,n=Object.prototype.hasOwnProperty;t.exports=e.r(42618).call(a,n)},33424,(e,t,r)=>{"use strict";var a=e.r(76611),n=e.r(14821),o=e.r(49975),i=e.r(73791),s=e.r(29109),l=e.r(72955),u=e.r(46319),c=e.r(77777),d=e.r(85911),h=e.r(77865),m=e.r(17490),p=e.r(20435),y=e.r(2841),f=e.r(28565),g=e.r(23210),v=Function,b=function(e){try{return v('"use strict"; return ('+e+").constructor;")()}catch(e){}},w=e.r(92553),k=e.r(33413),T=function(){throw new u},P=w?function(){try{return arguments.callee,T}catch(e){try{return w(arguments,"callee").get}catch(e){return T}}}():T,x=e.r(86546)(),S=e.r(97843),E=e.r(65103),A=e.r(70343),I=e.r(74609),_=e.r(41757),C={},B="undefined"!=typeof Uint8Array&&S?S(Uint8Array):void 0,O={__proto__:null,"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":x&&S?S([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":C,"%AsyncGenerator%":C,"%AsyncGeneratorFunction%":C,"%AsyncIteratorPrototype%":C,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?void 0:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?void 0:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":n,"%eval%":eval,"%EvalError%":o,"%Float16Array%":"undefined"==typeof Float16Array?void 0:Float16Array,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":v,"%GeneratorFunction%":C,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":x&&S?S(S([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&x&&S?S(new Map()[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":a,"%Object.getOwnPropertyDescriptor%":w,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":i,"%ReferenceError%":s,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&x&&S?S(new Set()[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":x&&S?S(""[Symbol.iterator]()):void 0,"%Symbol%":x?Symbol:void 0,"%SyntaxError%":l,"%ThrowTypeError%":P,"%TypedArray%":B,"%TypeError%":u,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":c,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet,"%Function.prototype.call%":_,"%Function.prototype.apply%":I,"%Object.defineProperty%":k,"%Object.getPrototypeOf%":E,"%Math.abs%":d,"%Math.floor%":h,"%Math.max%":m,"%Math.min%":p,"%Math.pow%":y,"%Math.round%":f,"%Math.sign%":g,"%Reflect.getPrototypeOf%":A};if(S)try{null.error}catch(e){var M=S(S(e));O["%Error.prototype%"]=M}var R=function e(t){var r;if("%AsyncFunction%"===t)r=b("async function () {}");else if("%GeneratorFunction%"===t)r=b("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=b("async function* () {}");else if("%AsyncGenerator%"===t){var a=e("%AsyncGeneratorFunction%");a&&(r=a.prototype)}else if("%AsyncIteratorPrototype%"===t){var n=e("%AsyncGenerator%");n&&S&&(r=S(n.prototype))}return O[t]=r,r},j={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},N=e.r(42618),q=e.r(8005),G=N.call(_,Array.prototype.concat),F=N.call(I,Array.prototype.splice),D=N.call(_,String.prototype.replace),W=N.call(_,String.prototype.slice),L=N.call(_,RegExp.prototype.exec),H=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,$=/\\(\\)?/g,U=function(e){var t=W(e,0,1),r=W(e,-1);if("%"===t&&"%"!==r)throw new l("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new l("invalid intrinsic syntax, expected opening `%`");var a=[];return D(e,H,function(e,t,r,n){a[a.length]=r?D(n,$,"$1"):t||e}),a},Y=function(e,t){var r,a=e;if(q(j,a)&&(a="%"+(r=j[a])[0]+"%"),q(O,a)){var n=O[a];if(n===C&&(n=R(a)),void 0===n&&!t)throw new u("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:a,value:n}}throw new l("intrinsic "+e+" does not exist!")};t.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new u("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new u('"allowMissing" argument must be a boolean');if(null===L(/^%?[^%]*%?$/,e))throw new l("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=U(e),a=r.length>0?r[0]:"",n=Y("%"+a+"%",t),o=n.name,i=n.value,s=!1,c=n.alias;c&&(a=c[0],F(r,G([0,1],c)));for(var d=1,h=!0;d<r.length;d+=1){var m=r[d],p=W(m,0,1),y=W(m,-1);if(('"'===p||"'"===p||"`"===p||'"'===y||"'"===y||"`"===y)&&p!==y)throw new l("property names with quotes must have matching quotes");if("constructor"!==m&&h||(s=!0),a+="."+m,q(O,o="%"+a+"%"))i=O[o];else if(null!=i){if(!(m in i)){if(!t)throw new u("base intrinsic for "+e+" exists, but the property is not available.");return}if(w&&d+1>=r.length){var f=w(i,m);i=(h=!!f)&&"get"in f&&!("originalValue"in f.get)?f.get:i[m]}else h=q(i,m),i=i[m];h&&!s&&(O[o]=i)}}return i}},69041,(e,t,r)=>{"use strict";var a=e.r(33424),n=e.r(30890),o=n([a("%String.prototype.indexOf%")]);t.exports=function(e,t){var r=a(e,!!t);return"function"==typeof r&&o(e,".prototype.")>-1?n([r]):r}},9333,(e,t,r)=>{"use strict";var a=e.r(33424),n=e.r(69041),o=e.r(6368),i=e.r(46319),s=a("%Map%",!0),l=n("Map.prototype.get",!0),u=n("Map.prototype.set",!0),c=n("Map.prototype.has",!0),d=n("Map.prototype.delete",!0),h=n("Map.prototype.size",!0);t.exports=!!s&&function(){var e,t={assert:function(e){if(!t.has(e))throw new i("Side channel does not contain "+o(e))},delete:function(t){if(e){var r=d(e,t);return 0===h(e)&&(e=void 0),r}return!1},get:function(t){if(e)return l(e,t)},has:function(t){return!!e&&c(e,t)},set:function(t,r){e||(e=new s),u(e,t,r)}};return t}},85661,(e,t,r)=>{"use strict";var a=e.r(33424),n=e.r(69041),o=e.r(6368),i=e.r(9333),s=e.r(46319),l=a("%WeakMap%",!0),u=n("WeakMap.prototype.get",!0),c=n("WeakMap.prototype.set",!0),d=n("WeakMap.prototype.has",!0),h=n("WeakMap.prototype.delete",!0);t.exports=l?function(){var e,t,r={assert:function(e){if(!r.has(e))throw new s("Side channel does not contain "+o(e))},delete:function(r){if(l&&r&&("object"==typeof r||"function"==typeof r)){if(e)return h(e,r)}else if(i&&t)return t.delete(r);return!1},get:function(r){return l&&r&&("object"==typeof r||"function"==typeof r)&&e?u(e,r):t&&t.get(r)},has:function(r){return l&&r&&("object"==typeof r||"function"==typeof r)&&e?d(e,r):!!t&&t.has(r)},set:function(r,a){l&&r&&("object"==typeof r||"function"==typeof r)?(e||(e=new l),c(e,r,a)):i&&(t||(t=i()),t.set(r,a))}};return r}:i},43207,(e,t,r)=>{"use strict";var a=e.r(46319),n=e.r(6368),o=e.r(12751),i=e.r(9333),s=e.r(85661)||i||o;t.exports=function(){var e,t={assert:function(e){if(!t.has(e))throw new a("Side channel does not contain "+n(e))},delete:function(t){return!!e&&e.delete(t)},get:function(t){return e&&e.get(t)},has:function(t){return!!e&&e.has(t)},set:function(t,r){e||(e=s()),e.set(t,r)}};return t}},17446,(e,t,r)=>{"use strict";var a=String.prototype.replace,n=/%20/g,o="RFC3986";t.exports={default:o,formatters:{RFC1738:function(e){return a.call(e,n,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:o}},78738,(e,t,r)=>{"use strict";var a=e.r(17446),n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),s=function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var a=[],n=0;n<r.length;++n)void 0!==r[n]&&a.push(r[n]);t.obj[t.prop]=a}}},l=function(e,t){for(var r=t&&t.plainObjects?{__proto__:null}:{},a=0;a<e.length;++a)void 0!==e[a]&&(r[a]=e[a]);return r};t.exports={arrayToObject:l,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],a=0;a<t.length;++a)for(var n=t[a],o=n.obj[n.prop],i=Object.keys(o),l=0;l<i.length;++l){var u=i[l],c=o[u];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:o,prop:u}),r.push(c))}return s(t),e},decode:function(e,t,r){var a=e.replace(/\+/g," ");if("iso-8859-1"===r)return a.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(a)}catch(e){return a}},encode:function(e,t,r,n,o){if(0===e.length)return e;var s=e;if("symbol"==typeof e?s=Symbol.prototype.toString.call(e):"string"!=typeof e&&(s=String(e)),"iso-8859-1"===r)return escape(s).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var l="",u=0;u<s.length;u+=1024){for(var c=s.length>=1024?s.slice(u,u+1024):s,d=[],h=0;h<c.length;++h){var m=c.charCodeAt(h);if(45===m||46===m||95===m||126===m||m>=48&&m<=57||m>=65&&m<=90||m>=97&&m<=122||o===a.RFC1738&&(40===m||41===m)){d[d.length]=c.charAt(h);continue}if(m<128){d[d.length]=i[m];continue}if(m<2048){d[d.length]=i[192|m>>6]+i[128|63&m];continue}if(m<55296||m>=57344){d[d.length]=i[224|m>>12]+i[128|m>>6&63]+i[128|63&m];continue}h+=1,m=65536+((1023&m)<<10|1023&c.charCodeAt(h)),d[d.length]=i[240|m>>18]+i[128|m>>12&63]+i[128|m>>6&63]+i[128|63&m]}l+=d.join("")}return l},isBuffer:function(e){return!!e&&"object"==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var r=[],a=0;a<e.length;a+=1)r.push(t(e[a]));return r}return t(e)},merge:function e(t,r,a){if(!r)return t;if("object"!=typeof r&&"function"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(a&&(a.plainObjects||a.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var i=t;return(o(t)&&!o(r)&&(i=l(t,a)),o(t)&&o(r))?(r.forEach(function(r,o){if(n.call(t,o)){var i=t[o];i&&"object"==typeof i&&r&&"object"==typeof r?t[o]=e(i,r,a):t.push(r)}else t[o]=r}),t):Object.keys(r).reduce(function(t,o){var i=r[o];return n.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t},i)}}},39609,(e,t,r)=>{"use strict";var a=e.r(43207),n=e.r(78738),o=e.r(17446),i=Object.prototype.hasOwnProperty,s={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,u=Array.prototype.push,c=function(e,t){u.apply(e,l(t)?t:[t])},d=Date.prototype.toISOString,h=o.default,m={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:n.encode,encodeValuesOnly:!1,filter:void 0,format:h,formatter:o.formatters[h],indices:!1,serializeDate:function(e){return d.call(e)},skipNulls:!1,strictNullHandling:!1},p={},y=function e(t,r,o,i,s,u,d,h,y,f,g,v,b,w,k,T,P,x){for(var S,E,A=t,I=x,_=0,C=!1;void 0!==(I=I.get(p))&&!C;){var B=I.get(t);if(_+=1,void 0!==B)if(B===_)throw RangeError("Cyclic object value");else C=!0;void 0===I.get(p)&&(_=0)}if("function"==typeof f?A=f(r,A):A instanceof Date?A=b(A):"comma"===o&&l(A)&&(A=n.maybeMap(A,function(e){return e instanceof Date?b(e):e})),null===A){if(u)return y&&!T?y(r,m.encoder,P,"key",w):r;A=""}if("string"==typeof(S=A)||"number"==typeof S||"boolean"==typeof S||"symbol"==typeof S||"bigint"==typeof S||n.isBuffer(A))return y?[k(T?r:y(r,m.encoder,P,"key",w))+"="+k(y(A,m.encoder,P,"value",w))]:[k(r)+"="+k(String(A))];var O=[];if(void 0===A)return O;if("comma"===o&&l(A))T&&y&&(A=n.maybeMap(A,y)),E=[{value:A.length>0?A.join(",")||null:void 0}];else if(l(f))E=f;else{var M=Object.keys(A);E=g?M.sort(g):M}var R=h?String(r).replace(/\./g,"%2E"):String(r),j=i&&l(A)&&1===A.length?R+"[]":R;if(s&&l(A)&&0===A.length)return j+"[]";for(var N=0;N<E.length;++N){var q=E[N],G="object"==typeof q&&q&&void 0!==q.value?q.value:A[q];if(!d||null!==G){var F=v&&h?String(q).replace(/\./g,"%2E"):String(q),D=l(A)?"function"==typeof o?o(j,F):j:j+(v?"."+F:"["+F+"]");x.set(t,_);var W=a();W.set(p,x),c(O,e(G,D,o,i,s,u,d,h,"comma"===o&&T&&l(A)?null:y,f,g,v,b,w,k,T,P,W))}}return O},f=function(e){if(!e)return m;if(void 0!==e.allowEmptyArrays&&"boolean"!=typeof e.allowEmptyArrays)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(void 0!==e.encodeDotInKeys&&"boolean"!=typeof e.encodeDotInKeys)throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw TypeError("Encoder has to be a function.");var t,r=e.charset||m.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var a=o.default;if(void 0!==e.format){if(!i.call(o.formatters,e.format))throw TypeError("Unknown format option provided.");a=e.format}var n=o.formatters[a],u=m.filter;if(("function"==typeof e.filter||l(e.filter))&&(u=e.filter),t=e.arrayFormat in s?e.arrayFormat:"indices"in e?e.indices?"indices":"repeat":m.arrayFormat,"commaRoundTrip"in e&&"boolean"!=typeof e.commaRoundTrip)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var c=void 0===e.allowDots?!0===e.encodeDotInKeys||m.allowDots:!!e.allowDots;return{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:m.addQueryPrefix,allowDots:c,allowEmptyArrays:"boolean"==typeof e.allowEmptyArrays?!!e.allowEmptyArrays:m.allowEmptyArrays,arrayFormat:t,charset:r,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:m.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:void 0===e.delimiter?m.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:m.encode,encodeDotInKeys:"boolean"==typeof e.encodeDotInKeys?e.encodeDotInKeys:m.encodeDotInKeys,encoder:"function"==typeof e.encoder?e.encoder:m.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:m.encodeValuesOnly,filter:u,format:a,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:m.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:m.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:m.strictNullHandling}};t.exports=function(e,t){var r,n=e,o=f(t);"function"==typeof o.filter?n=(0,o.filter)("",n):l(o.filter)&&(r=o.filter);var i=[];if("object"!=typeof n||null===n)return"";var u=s[o.arrayFormat],d="comma"===u&&o.commaRoundTrip;r||(r=Object.keys(n)),o.sort&&r.sort(o.sort);for(var h=a(),m=0;m<r.length;++m){var p=r[m],g=n[p];o.skipNulls&&null===g||c(i,y(g,p,u,d,o.allowEmptyArrays,o.strictNullHandling,o.skipNulls,o.encodeDotInKeys,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset,h))}var v=i.join(o.delimiter),b=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),v.length>0?b+v:""}},515,(e,t,r)=>{"use strict";var a=e.r(78738),n=Object.prototype.hasOwnProperty,o=Array.isArray,i={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:a.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1,throwOnLimitExceeded:!1},s=function(e,t,r){if(e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1)return e.split(",");if(t.throwOnLimitExceeded&&r>=t.arrayLimit)throw RangeError("Array limit exceeded. Only "+t.arrayLimit+" element"+(1===t.arrayLimit?"":"s")+" allowed in an array.");return e},l=function(e,t){var r={__proto__:null},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e;l=l.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var u=t.parameterLimit===1/0?void 0:t.parameterLimit,c=l.split(t.delimiter,t.throwOnLimitExceeded?u+1:u);if(t.throwOnLimitExceeded&&c.length>u)throw RangeError("Parameter limit exceeded. Only "+u+" parameter"+(1===u?"":"s")+" allowed.");var d=-1,h=t.charset;if(t.charsetSentinel)for(m=0;m<c.length;++m)0===c[m].indexOf("utf8=")&&("utf8=%E2%9C%93"===c[m]?h="utf-8":"utf8=%26%2310003%3B"===c[m]&&(h="iso-8859-1"),d=m,m=c.length);for(m=0;m<c.length;++m)if(m!==d){var m,p,y,f=c[m],g=f.indexOf("]="),v=-1===g?f.indexOf("="):g+1;-1===v?(p=t.decoder(f,i.decoder,h,"key"),y=t.strictNullHandling?null:""):(p=t.decoder(f.slice(0,v),i.decoder,h,"key"),y=a.maybeMap(s(f.slice(v+1),t,o(r[p])?r[p].length:0),function(e){return t.decoder(e,i.decoder,h,"value")})),y&&t.interpretNumericEntities&&"iso-8859-1"===h&&(y=String(y).replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})),f.indexOf("[]=")>-1&&(y=o(y)?[y]:y);var b=n.call(r,p);b&&"combine"===t.duplicates?r[p]=a.combine(r[p],y):b&&"last"!==t.duplicates||(r[p]=y)}return r},u=function(e,t,r,n){var o=0;if(e.length>0&&"[]"===e[e.length-1]){var i=e.slice(0,-1).join("");o=Array.isArray(t)&&t[i]?t[i].length:0}for(var l=n?t:s(t,r,o),u=e.length-1;u>=0;--u){var c,d=e[u];if("[]"===d&&r.parseArrays)c=r.allowEmptyArrays&&(""===l||r.strictNullHandling&&null===l)?[]:a.combine([],l);else{c=r.plainObjects?{__proto__:null}:{};var h="["===d.charAt(0)&&"]"===d.charAt(d.length-1)?d.slice(1,-1):d,m=r.decodeDotInKeys?h.replace(/%2E/g,"."):h,p=parseInt(m,10);r.parseArrays||""!==m?!isNaN(p)&&d!==m&&String(p)===m&&p>=0&&r.parseArrays&&p<=r.arrayLimit?(c=[])[p]=l:"__proto__"!==m&&(c[m]=l):c={0:l}}l=c}return l},c=function(e,t,r,a){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(o),l=s?o.slice(0,s.index):o,c=[];if(l){if(!r.plainObjects&&n.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(var d=0;r.depth>0&&null!==(s=i.exec(o))&&d<r.depth;){if(d+=1,!r.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(s[1])}if(s){if(!0===r.strictDepth)throw RangeError("Input depth exceeded depth option of "+r.depth+" and strictDepth is true");c.push("["+o.slice(s.index)+"]")}return u(c,t,r,a)}},d=function(e){if(!e)return i;if(void 0!==e.allowEmptyArrays&&"boolean"!=typeof e.allowEmptyArrays)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(void 0!==e.decodeDotInKeys&&"boolean"!=typeof e.decodeDotInKeys)throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0!==e.throwOnLimitExceeded&&"boolean"!=typeof e.throwOnLimitExceeded)throw TypeError("`throwOnLimitExceeded` option must be a boolean");var t=void 0===e.charset?i.charset:e.charset,r=void 0===e.duplicates?i.duplicates:e.duplicates;if("combine"!==r&&"first"!==r&&"last"!==r)throw TypeError("The duplicates option must be either combine, first, or last");return{allowDots:void 0===e.allowDots?!0===e.decodeDotInKeys||i.allowDots:!!e.allowDots,allowEmptyArrays:"boolean"==typeof e.allowEmptyArrays?!!e.allowEmptyArrays:i.allowEmptyArrays,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:i.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decodeDotInKeys:"boolean"==typeof e.decodeDotInKeys?e.decodeDotInKeys:i.decodeDotInKeys,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||a.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,duplicates:r,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictDepth:"boolean"==typeof e.strictDepth?!!e.strictDepth:i.strictDepth,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling,throwOnLimitExceeded:"boolean"==typeof e.throwOnLimitExceeded&&e.throwOnLimitExceeded}};t.exports=function(e,t){var r=d(t);if(""===e||null==e)return r.plainObjects?{__proto__:null}:{};for(var n="string"==typeof e?l(e,r):e,o=r.plainObjects?{__proto__:null}:{},i=Object.keys(n),s=0;s<i.length;++s){var u=i[s],h=c(u,n[u],r,"string"==typeof e);o=a.merge(o,h,r)}return!0===r.allowSparse?o:a.compact(o)}},84406,(e,t,r)=>{"use strict";var a=e.r(39609),n=e.r(515);t.exports={formats:e.r(17446),parse:n,stringify:a}},90985,e=>{"use strict";let t;var r=e.i(25160),a=e.i(44669),n=e.i(82323),o=e.i(83504),i=e.i(86178),s=e.i(88547);let l=(0,s.default)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);var u=e.i(67795),c=e.i(29755),d=e.i(41536),h=e.i(82302);let m=(0,s.default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var p=e.i(50817);let y=(0,s.default)("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var f=e.i(83238),g=e.i(82523),v=e.i(76811);let b=[{id:"resume-review",title:"Resume Review",description:"Detailed line-by-line feedback on your resume with specific rewrite suggestions. Our team identifies weaknesses in positioning, bullet structure, and overall narrative—then shows you exactly how to fix them.",price:197,turnaround:"3-5 business days",includes:["Line-by-line written feedback","Bullet point restructuring suggestions","Quantification opportunities identified","Positioning and narrative assessment","Format and layout recommendations","One round of follow-up questions"]},{id:"resume-rewrite",title:"Resume Rewrite",description:"Complete resume overhaul from scratch. Our team rebuilds your resume using frameworks proven at top firms—transforming your experience into the positioning that gets callbacks.",price:497,turnaround:"5-7 business days",includes:["Full resume reconstruction","Experience repositioning strategy","Optimized bullet point writing","Quantified impact statements","Industry-standard formatting","Two revision rounds included","Final PDF and Word delivery"]}];[{slug:"private-equity-recruiting-timeline-2026",title:"Private Equity Recruiting Timeline 2026: On-Cycle, Off-Cycle, and What to Expect",summary:"The complete PE recruiting calendar for 2026—when headhunters call, how to prepare, and navigating compressed timelines.",category:"Recruiting",readTime:"18 min read",publishedAt:"2026-01-15",content:`
Private equity recruiting in 2026 continues to operate on an accelerated timeline that catches most candidates off guard. If you're a first-year analyst hoping to make the jump, understanding exactly when things happen—and preparing before they do—is the difference between landing a megafund offer and scrambling for leftovers.

## The 2026 PE Recruiting Landscape

The PE recruiting cycle has evolved significantly over the past few years. What was once a relatively predictable process has become increasingly compressed, with some firms moving earlier each year while others have pulled back to more reasonable timelines.

**On-Cycle Recruiting** remains the primary path for analysts at bulge bracket banks targeting megafunds and large upper-middle-market firms. In 2026, expect the first wave of headhunter outreach to begin as early as late summer—sometimes just weeks after analysts start their full-time roles.

**Off-Cycle Recruiting** has grown substantially as more firms reject the on-cycle madness. Middle-market firms, growth equity shops, and some upper-middle-market funds now recruit year-round based on actual need rather than artificial timelines.

## The 2026 On-Cycle Timeline

**July-August 2026:** Headhunters begin building their candidate lists. If you're a first-year analyst, your resume should already be polished and circulating through your network. Some aggressive funds may start informal outreach.

**September 2026:** The floodgates open. Expect your phone to ring with headhunter calls—often during market hours when you're buried in work. First-round interviews begin, typically phone screens with headhunters followed by quick firm interviews.

**September-October 2026:** Superdays compress into 24-72 hour windows. You may receive an offer and have less than 48 hours to decide. This is not an exaggeration—some candidates go from first call to signed offer in under a week.

**November-December 2026:** The dust settles on on-cycle. Remaining seats fill through targeted recruiting or off-cycle processes.

## How to Prepare Before the Cycle Starts

**6+ Months Before (Start of Banking Role):**
- Master your bank's deal experience—you'll need to discuss every transaction in detail
- Begin LBO modeling practice (paper LBOs and full models)
- Start building headhunter relationships through warm introductions

**3 Months Before:**
- Have your "story" polished: why banking, why PE, why now
- Complete at least 20 practice paper LBOs
- Research target firms and develop thoughtful "why this fund" answers

**1 Month Before:**
- Mock interviews with peers who've been through the process
- Prepare 2-3 investment ideas (one long, one short minimum)
- Ensure your deal sheets are updated and memorized

## The Off-Cycle Alternative

Not everyone wants—or gets—an on-cycle offer. Off-cycle recruiting offers several advantages:

- More time to prepare and interview thoughtfully
- Opportunity to gain more deal experience before recruiting
- Access to excellent middle-market firms with better training
- Often less competition for each seat

**Off-cycle timing varies by firm**, but most activity happens in Q1 and Q3. Monitor job postings, maintain headhunter relationships, and be ready to move quickly when opportunities arise.

## What Makes 2026 Different

Several trends are shaping PE recruiting in 2026:

**Continued bifurcation:** Top-tier megafunds continue aggressive on-cycle timelines while many respected firms have opted out entirely.

**Increased emphasis on deal experience:** With compressed timelines, firms are placing more weight on the quality and complexity of your banking transactions.

**Technical bar remains high:** Paper LBOs, case studies, and detailed deal discussions are non-negotiable. Funds expect you to walk through an LBO structure in your sleep.

**Culture fit matters more:** When you only have 48 hours with candidates, firms rely heavily on gut-feel assessments of fit and coachability.

## Navigating Exploding Offers

The most stressful aspect of on-cycle is the exploding offer—a job offer that expires in 24-48 hours. Here's how to handle it:

1. **Know your priorities in advance.** Rank your target firms before recruiting begins.
2. **Communicate transparently.** If you have competing processes, tell firms where you stand.
3. **Don't bluff.** Saying you have offers you don't have will backfire.
4. **Accept if it's a top choice.** Don't hold out for a marginally "better" firm and risk losing a great opportunity.

---

*Ready to crush PE technicals? Our [PE Recruiting Playbook](/playbooks/pe-recruiting-playbook) covers everything from headhunter strategy to case study walkthroughs.*

*Need to master LBO modeling? Get the [LBO Modeling Crash Course](/playbooks/lbo-modeling-course) with 3 full model templates.*
    `},{slug:"hedge-fund-recruiting-2026",title:"Hedge Fund Recruiting in 2026: How to Break In From Banking, Research, and Other Paths",summary:"Complete guide to hedge fund recruiting timelines, interview processes, and what top funds look for in 2026.",category:"Recruiting",readTime:"20 min read",publishedAt:"2026-01-12",content:`
Hedge fund recruiting in 2026 remains one of the most opaque and varied processes in finance. Unlike investment banking or private equity, there's no standardized timeline, no universal interview format, and no single path that guarantees success. That opacity is a feature, not a bug—funds want candidates who can navigate ambiguity and demonstrate genuine investment acumen.

## The Hedge Fund Landscape in 2026

The hedge fund industry continues to evolve, with several trends shaping recruiting:

**Multi-manager platforms** (Citadel, Millennium, Point72, Balyasny) have become the dominant force, offering structured analyst programs and absorbing significant talent from banking and equity research.

**Single-manager funds** remain highly selective, often hiring opportunistically based on specific sector needs or when a senior PM launches a new pod.

**Quantitative funds** have expanded their hiring of fundamental analysts, creating hybrid roles that blend traditional stock-picking with data science.

## Primary Paths Into Hedge Funds

### From Investment Banking (Most Common)

Banking analysts—particularly those in industry coverage groups or M&A—are the largest feeder into fundamental L/S equity funds.

**Timeline:** Recruiting typically happens in your second year of banking, though some funds recruit first-years. Unlike PE, there's no "on-cycle" process—hiring happens year-round.

**What they're looking for:** Investment judgment, intellectual curiosity, and the ability to form differentiated views. Technical skills are assumed.

### From Equity Research (Direct Path)

Sell-side equity research analysts have a natural transition to buy-side roles, particularly at funds focused on their coverage sector.

**Timeline:** Usually after 2-3 years on the sell-side, though strong performers can move earlier.

**Advantage:** You already have a public track record of stock picks and industry knowledge.

### From Other Backgrounds

Consulting, corporate strategy, and even non-finance roles can lead to hedge fund positions—particularly at generalist funds or those with sector-specific needs (healthcare, tech, industrials).

## The Interview Process

Hedge fund interviews are notoriously unstructured, but most follow a general pattern:

**Round 1: Phone Screen**
Usually with a recruiter or junior PM. Expect basic fit questions and a high-level discussion of your background and interest in investing.

**Round 2: Investment Discussion**
This is where things get real. You'll need to present a stock pitch—typically one long and one short idea. Expect to defend your thesis against pushback.

**Round 3-4: Superday/Case Study**
Multi-manager platforms often include timed modeling tests or case studies. You might be given a 10-K and 2 hours to develop an investment view.

**Final Round: PM/Partner Meetings**
The final hurdle is convincing senior investors you have the judgment and temperament to manage their capital.

## The Stock Pitch: Make or Break

Your stock pitch is the single most important element of hedge fund recruiting. A mediocre pitch—even with a strong resume—will end your candidacy.

**What makes a strong pitch:**

1. **Variant perception:** What do you see that the market is missing? This must be specific and defensible.
2. **Catalysts:** When and why will the market recognize your thesis?
3. **Valuation:** Triangulate using multiple methods. Know your assumptions cold.
4. **Risk management:** What would make you wrong? Where's your stop-loss?

**Common mistakes:**

- Pitching consensus ideas ("I like Apple because they make good products")
- No clear catalyst or timeline
- Unable to defend assumptions under pressure
- Not knowing the counter-arguments to your thesis

## Multi-Manager vs. Single-Manager: Which to Target?

**Multi-Manager Platforms (Citadel, Millennium, Point72):**
- More structured recruiting and training
- Clear performance metrics and career progression
- Higher pressure and shorter leash on underperformance
- Pod structure means your PM relationship is critical

**Single-Manager Funds:**
- More entrepreneurial culture
- Longer runway to develop as an investor
- Fewer seats and more idiosyncratic hiring
- Culture varies dramatically by fund

## 2026 Recruiting Tips

**Start building your track record now.** Keep a paper portfolio, document your investment ideas, and track your performance. Funds want to see evidence of investment thinking.

**Network authentically.** The hedge fund world is small. Genuine relationships matter more than volume of outreach.

**Develop sector expertise.** Generalist roles exist, but deep knowledge in a specific sector makes you more valuable.

**Read voraciously.** Annual reports, investor letters, industry publications—the best analysts are information sponges.

---

*Need the complete framework for stock pitches? Our [Stock Pitch Template & Examples](/playbooks/stock-pitch-guide) includes 5 full pitches with commentary from hedge fund analysts.*

*Looking to strengthen your fundamentals? The [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers the accounting and valuation knowledge funds expect.*
    `},{slug:"investment-banking-summer-analyst-2026",title:"Investment Banking Summer Analyst Recruiting 2026: Complete Timeline and Strategy",summary:"Everything you need to know about landing a 2026 IB summer analyst position—timelines, preparation, and what banks actually look for.",category:"Recruiting",readTime:"22 min read",publishedAt:"2026-01-10",content:`
If you're a college sophomore or junior targeting investment banking, the summer analyst internship is your golden ticket. Convert that internship into a full-time offer, and you've locked in one of the most competitive entry-level positions in finance. Miss the recruiting window, and you're fighting an uphill battle for years.

Here's exactly how summer analyst recruiting works in 2026 and how to position yourself for success.

## The 2026 Summer Analyst Timeline

Investment banking recruiting has accelerated to the point of absurdity. For **Summer 2026 internships**, the timeline looks like this:

**January-March 2025 (18 months before internship):**
Bulge bracket banks begin posting applications. Yes, you read that right—banks are recruiting sophomores for internships that start the following summer.

**April-May 2025:**
First-round interviews (often HireVue video interviews) for early applicants.

**June-September 2025:**
Superdays and offers extend. The majority of summer analyst seats are filled by fall of junior year.

**October 2025-February 2026:**
Remaining seats fill. Middle-market and boutique banks often recruit on slightly later timelines.

**March-April 2026:**
Final stragglers and last-minute hiring. Very competitive for remaining spots.

**Summer 2026:**
The internship begins (typically 10 weeks, May-August).

## What Banks Actually Look For

Every bank claims to want "diverse perspectives" and "intellectual curiosity." Here's what actually gets you an offer:

**1. Brand-Name Signals (Unfortunately)**
Target school, high GPA (3.7+), relevant prior internships, and strong extracurriculars. These don't guarantee an offer, but they get your resume read.

**2. Technical Competence**
You must demonstrate understanding of accounting, valuation, and basic deal mechanics. "Walk me through a DCF" should be automatic.

**3. Demonstrated Interest**
Prior finance internships, investment club leadership, or relevant coursework. Banks want evidence you've tested your interest.

**4. Communication Skills**
Can you explain complex topics clearly? Do you come across as confident but not arrogant? Would senior bankers want you on client calls?

**5. Cultural Fit**
The infamous "airport test"—would I want to be stuck with this person during a 4-hour flight delay? Likability matters more than people admit.

## Target vs. Non-Target Strategy

### If You're at a Target School (Wharton, Harvard, Princeton, NYU Stern, etc.)

You have built-in advantages:
- On-campus recruiting events
- Alumni network in banking
- Resume gets automatic review at most banks

**Your strategy:** Take full advantage of campus resources. Attend every info session, network with alumni, and make sure your application is flawless. Your competition is equally qualified peers—differentiation comes from preparation and relationships.

### If You're at a Non-Target School

The path is harder but absolutely achievable. Thousands of non-target students break into banking every year.

**Your strategy:**
- **GPA must be exceptional (3.8+)** to compensate for school name
- **Network 3x more** than target school peers—50-100+ outreach emails
- **Target middle-market and boutique banks** for initial experience
- **Consider stepping stones** like Big 4 TAS or corporate banking
- **Highlight standardized test scores** (1500+ SAT, 34+ ACT) on your resume

## The Application Process

**Step 1: Online Application**
Apply early. Many banks review applications on a rolling basis—later applicants compete for fewer spots.

**Step 2: HireVue Interview**
Most bulge brackets use automated video interviews. You'll answer behavioral and technical questions while being recorded. Practice with the camera until you're comfortable.

**Step 3: First Round**
Usually a 30-minute phone or video interview with an analyst or associate. Mix of behavioral ("why banking?") and technical ("walk me through an LBO") questions.

**Step 4: Superday**
3-5 back-to-back interviews at the firm's office. You'll meet analysts through MDs. Expect a mix of fit and technical questions, plus often a more senior interviewer who goes deep on markets or deals.

**Step 5: Offer**
Offers typically come within a week of Superday. Acceptance windows vary—some banks give weeks, others want answers in days.

## Technical Preparation Priorities

Focus your technical preparation in this order:

1. **Accounting and three-statement linkages** (foundation for everything)
2. **Enterprise value vs. equity value** (most common conceptual questions)
3. **DCF analysis** (the single most tested topic)
4. **Valuation methodologies** (comps, precedents, when to use each)
5. **M&A basics** (accretion/dilution, deal mechanics)
6. **LBO fundamentals** (more important for PE-focused roles)

## The Summer Internship Itself

Landing the internship is just the beginning. Converting to a full-time offer requires:

**Mastering the work:** Learn quickly, double-check everything, and never make the same mistake twice.

**Building relationships:** Get to know analysts and associates across groups. Your staffer's opinion matters.

**Showing genuine interest:** Ask thoughtful questions, volunteer for projects, and demonstrate you want to be there.

**Maintaining energy:** 10 weeks of long hours is exhausting. Stay positive and engaged even when tired.

**Conversion rates** at top banks typically range from 70-90% for summer analysts who perform well.

---

*Ready to nail the technical interviews? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers 400+ real questions with detailed answers.*

*Need help with networking? The [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook) has 50+ templates that actually get responses.*
    `},{slug:"finance-internships-2026",title:"Best Finance Internships for 2026: Complete Guide to Summer Programs",summary:"Comprehensive ranking of 2026 finance internships across investment banking, private equity, hedge funds, and more—plus how to land them.",category:"Recruiting",readTime:"15 min read",publishedAt:"2026-01-08",content:`
Not all finance internships are created equal. The right internship can fast-track your career into investment banking, private equity, or hedge funds. The wrong one might leave you with a line on your resume that doesn't open doors.

Here's the definitive guide to finance internships worth pursuing in 2026 and how to maximize your chances of landing them.

## Tier 1: Investment Banking Summer Analyst Programs

These are the gold standard for undergraduates targeting high finance careers.

**Bulge Bracket Banks:** Goldman Sachs, Morgan Stanley, JP Morgan, Bank of America, Citi, Barclays, UBS, Deutsche Bank

**Elite Boutiques:** Evercore, Lazard, Centerview, PJT Partners, Moelis, Qatalyst

**Why they matter:** Direct pipeline to full-time offers with $110K+ starting salaries. Training, deal exposure, and exit opportunities are unmatched.

**What it takes:**
- Target school or exceptional non-target profile
- 3.7+ GPA (higher for non-targets)
- Prior finance experience preferred
- Strong technical knowledge

## Tier 2: Buy-Side Summer Programs

These are harder to land and typically require prior banking or finance experience.

**Private Equity:** Blackstone, KKR, Carlyle, Apollo, TPG, Warburg Pincus (most recruit post-banking, but some have undergrad programs)

**Hedge Funds:** Citadel, Point72, Millennium (structured programs exist but are very competitive)

**Why they matter:** Direct exposure to investing, potential to bypass banking entirely for exceptional candidates.

**What it takes:**
- Often requires junior year or master's status
- Investment club leadership, stock pitch competitions
- Strong technical skills and market knowledge

## Tier 3: Excellent Stepping Stones

Not aiming for banking directly? These internships build strong foundations.

**Big 4 Transaction Advisory (TAS/Deals):** Deloitte, PwC, EY, KPMG transaction services groups

**Why it's valuable:** Deal exposure, valuation work, and a realistic path to lateral into banking after 1-2 years.

**Corporate Banking:** JP Morgan, Bank of America, Wells Fargo corporate banking programs

**Why it's valuable:** Finance exposure with better hours. Good for those unsure about banking lifestyle.

**Wealth Management/Private Banking:** Goldman Sachs PWM, Morgan Stanley Private Wealth

**Why it's valuable:** Client exposure and finance fundamentals. Easier to land than investment banking.

## Tier 4: Building Blocks for Freshmen/Sophomores

Too early for banking programs? These build your resume for later.

**Diversity Programs:** Many banks offer sophomore programs specifically for underrepresented groups—Goldman's Possibilities Summit, Morgan Stanley's Early Insights.

**Corporate Finance Internships:** Finance rotational programs at Fortune 500 companies—solid experience and recognizable names.

**Startup Finance:** FP&A or finance roles at growth-stage startups—hands-on experience, though less structured.

**Asset Management:** Fidelity, T. Rowe Price, Vanguard—learn markets and investment analysis.

## The 2026 Internship Calendar

Here's when recruiting happens for different types of internships:

**January-April 2025:** Bulge bracket and elite boutique banking applications open

**March-June 2025:** Middle-market banking and Big 4 TAS recruiting

**Year-round:** Off-cycle opportunities at smaller firms, PE/HF for experienced candidates

**Fall 2025:** Corporate finance and wealth management programs

## How to Stand Out in 2026

**1. Start Early**
If you're a freshman, you're already behind. Join finance clubs, start learning technicals, and begin networking now.

**2. Build Technical Skills**
Learn accounting fundamentals, basic valuation, and financial modeling. Free resources abound—use them.

**3. Get Any Finance Experience**
Your first internship doesn't need to be Goldman Sachs. A boutique bank, family office, or corporate finance role all build relevant experience.

**4. Network Relentlessly**
Cold emails, alumni outreach, LinkedIn connections. The person who gets you an interview is often someone you've built a relationship with.

**5. Tell a Compelling Story**
Why finance? Why this specific role? Interviewers want to understand your motivation and see that you've thought seriously about your career.

## Frequently Asked Questions

**Q: I'm at a non-target school. Is banking even realistic?**
Yes, but you need to work harder. Maintain a 3.8+ GPA, network extensively, and consider middle-market banks as your primary targets.

**Q: Should I take a Big 4 TAS internship or keep recruiting for banking?**
If you have a TAS offer and no banking offers, take the TAS role. It's a legitimate path to banking—many analysts lateral after 1-2 years.

**Q: How important is my freshman summer internship?**
It matters less than sophomore/junior summers, but it's still valuable. Any finance-adjacent experience (corporate finance, wealth management, even accounting) helps build your story.

---

*Ready to nail your internship interviews? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers everything you'll be asked.*

*Need help with the networking game? The [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook) has the exact templates that get responses.*
    `},{slug:"investment-banking-salaries-bonuses-2026",title:"Investment Banking Salaries and Bonuses 2026: Complete Compensation Guide",summary:"Updated 2026 compensation data for investment banking analysts, associates, VPs, and MDs across bulge brackets and elite boutiques.",category:"Career Strategy",readTime:"12 min read",publishedAt:"2026-01-05",content:`
Investment banking remains one of the highest-paying entry-level careers in finance. But compensation varies significantly by bank, group, and performance. Here's what you can actually expect to earn in 2026.

## 2026 Investment Banking Compensation Overview

**Analyst 1 (First Year):**
- Base Salary: $110,000
- Bonus: $90,000 - $140,000
- **Total Comp: $200,000 - $250,000**

**Analyst 2 (Second Year):**
- Base Salary: $125,000
- Bonus: $110,000 - $165,000
- **Total Comp: $235,000 - $290,000**

**Analyst 3 (Third Year, if applicable):**
- Base Salary: $135,000
- Bonus: $125,000 - $185,000
- **Total Comp: $260,000 - $320,000**

## Bulge Bracket vs. Elite Boutique Pay

**Bulge Brackets (Goldman, Morgan Stanley, JP Morgan, etc.):**
Pay across bulge brackets has largely converged. Base salaries are standardized, and bonuses fall within predictable ranges based on performance and deal flow.

**Elite Boutiques (Evercore, Centerview, PJT, Lazard, Moelis):**
Elite boutiques often pay premiums—particularly in bonus. A top-performing analyst at Evercore or Centerview may earn 10-20% more than peers at bulge brackets.

**Middle Market Banks:**
Compensation is typically 10-20% lower than bulge brackets, but hours can be slightly more manageable, and training may be stronger in some groups.

## What Drives Bonus Variation?

Your bonus isn't random. Several factors determine where you fall in the range:

**1. Bank Performance**
Did your bank have a strong year? Deal volume and fee revenue directly impact the bonus pool.

**2. Group Performance**
Hot groups (tech M&A, healthcare, sponsors) often have larger bonus pools than slower groups.

**3. Individual Performance**
Your review scores matter. Top-bucket analysts can earn 30-50% more in bonus than bottom-bucket peers.

**4. Market Conditions**
M&A activity, IPO markets, and overall deal flow affect compensation industry-wide.

## Associate Compensation (Post-MBA or Promoted)

**Associate 1:**
- Base Salary: $175,000
- Bonus: $100,000 - $175,000
- **Total Comp: $275,000 - $350,000**

**Associate 2:**
- Base Salary: $200,000
- Bonus: $125,000 - $200,000
- **Total Comp: $325,000 - $400,000**

**Associate 3:**
- Base Salary: $225,000
- Bonus: $150,000 - $225,000
- **Total Comp: $375,000 - $450,000**

## Vice President and Beyond

**Vice President:**
- Base Salary: $250,000 - $300,000
- Bonus: $200,000 - $400,000
- **Total Comp: $450,000 - $700,000**

**Director/Executive Director:**
- Base Salary: $300,000 - $350,000
- Bonus: $300,000 - $600,000
- **Total Comp: $600,000 - $950,000**

**Managing Director:**
- Base Salary: $400,000 - $600,000
- Bonus: $500,000 - $2,000,000+
- **Total Comp: $1,000,000 - $3,000,000+**

MD compensation is highly variable and tied to revenue generation. Top producers at major banks can earn $5M+.

## The Hours Reality Check

Before focusing solely on compensation, consider the hours:

**Analysts:** 80-100 hours/week is common. Some weeks approach 100+.

**Associates:** 70-90 hours/week typically.

**VPs and above:** 60-80 hours/week, but more client-facing stress.

Hourly rates, when calculated, often fall well below what you'd expect given total compensation.

## How 2026 Compares to Previous Years

Compensation has risen significantly since 2020:
- 2020: Analyst 1 base was $85,000
- 2021: Base increased to $100,000
- 2022-2023: Base hit $110,000 (current level)
- 2024-2026: Bases have held steady; bonus variance reflects market conditions

The 2021-2022 M&A boom drove both base increases and exceptional bonuses. The market has normalized, but compensation remains historically high.

## Maximizing Your Compensation

**1. Choose Your Bank Wisely**
Elite boutiques and top bulge brackets consistently pay at or above market.

**2. Target Hot Groups**
Technology, healthcare, and sponsors coverage tend to have more deal flow and larger bonus pools.

**3. Perform at a High Level**
Reviews matter. Being in the top bucket can mean $30-50K more in annual bonus.

**4. Exit Strategically**
PE and hedge fund exits typically come with significant pay bumps. Stay in banking only as long as it serves your long-term goals.

---

*Ready to break into investment banking? Start with our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) to nail the interviews.*

*Working on your candidacy? A polished resume is essential. Consider a [Professional Resume Review](/resume-services).*
    `},{slug:"non-target-to-investment-banking-2026",title:"Non-Target to Investment Banking in 2026: The Realistic Playbook",summary:"How to break into investment banking from a non-target school in 2026—networking strategies, timeline, and what actually works.",category:"Recruiting",readTime:"18 min read",publishedAt:"2026-01-02",content:`
Let's be direct: breaking into investment banking from a non-target school is harder than from a target. But "harder" doesn't mean impossible—thousands of non-target students land banking offers every year. The difference between those who succeed and those who don't comes down to strategy, effort, and timing.

Here's the realistic playbook for 2026.

## The Non-Target Reality

At target schools (Wharton, Harvard, Princeton, etc.), banks come to you. They host info sessions, send recruiters to campus, and give automatic resume reviews to students meeting basic criteria.

At non-target schools, none of this happens. You won't get interviews by submitting online applications alone. The process requires proactive networking, exceptional credentials, and often a stepping-stone path.

**The good news:** Banks care about performance once you're in the door. Non-target analysts who land offers perform just as well as their target-school peers.

## What You Need to Compensate

To overcome the school name disadvantage, you need exceptional strength in other areas:

**GPA: 3.8+ (ideally 3.9+)**
Target school students can get interviews with 3.5+ GPAs. Non-targets need to be clearly above average academically.

**Standardized Test Scores: 1500+ SAT or 34+ ACT**
Keep these on your resume. They're objective signals of intellectual capability.

**Prior Experience**
Any finance internship—corporate finance, Big 4, boutique bank, family office—demonstrates genuine interest and baseline competence.

**Technical Knowledge**
You must be more prepared than target school candidates, not less. Know accounting, valuation, and deal mechanics cold.

**Networking Volume**
Plan to send 80-150+ cold emails and complete 40-60+ networking calls.

## The 2026 Non-Target Timeline

**Freshman Year:**
- Join finance clubs (start one if none exists)
- Begin learning accounting and financial modeling basics
- Target any finance-adjacent summer internship

**Sophomore Year (Fall):**
- Secure a sophomore summer internship (Big 4, boutique, corporate finance)
- Begin networking for junior year banking internships
- Start technical preparation

**Sophomore Year (Spring):**
- Intensive networking push (50+ outreach emails)
- Apply to all relevant banking programs, including middle-market
- Prepare for first-round interviews

**Junior Year (Fall):**
- Continue networking and applications
- Target off-cycle internships if no summer offer
- Consider Big 4 TAS as a backup path

**Junior Year (Summer):**
- Complete banking internship and convert to full-time, OR
- Complete stepping-stone internship and plan lateral strategy

## The Stepping-Stone Path

If you can't land a banking internship directly, the stepping-stone path is legitimate:

**Path 1: Big 4 Transaction Advisory → Banking**
- Complete 1-2 years in TAS/Deals at Deloitte, PwC, EY, or KPMG
- Lateral into investment banking as an Analyst 1 or 2
- Success rate: High if you network effectively

**Path 2: Middle-Market Bank → Bulge Bracket**
- Start at a regional or middle-market bank
- Develop deal experience and technical skills
- Lateral to bulge bracket after 1-2 years

**Path 3: Corporate Banking → Investment Banking**
- Some candidates move from corporate banking to IB
- Less common but achievable with strong networking

## Networking Strategy for Non-Targets

Networking isn't optional—it's the primary way you'll get interviews.

**Who to Target:**
1. Alumni from your school working in banking (priority)
2. People from your home city/region
3. Anyone with a non-traditional background who might empathize

**Volume Requirements:**
- Send 80-150+ cold emails
- Complete 40-60+ networking calls
- Build relationships with 3-5 people who will actively advocate for you

**The Outreach Approach:**
- Use your .edu email
- Keep emails under 5 sentences
- Ask for advice, not jobs
- Follow up 2-3 times if no response

**The Call Structure:**
- 20-25 minutes maximum
- Ask about their path, their group, their advice
- Close by asking: "Is there anyone else you'd recommend I speak with?"

## What Actually Gets You the Interview

After all the networking, here's what converts calls to interviews:

**1. A Referral**
Someone in the bank mentions your name to the recruiting team. This is the goal of all networking.

**2. Exceptional Preparation**
When you get a first-round interview, you're more prepared than target school candidates. You nail every technical question and tell a compelling story.

**3. Persistence Without Desperation**
You follow up, you keep networking, you don't give up—but you also don't come across as needy or entitled.

## Common Mistakes to Avoid

**Applying online without networking**
Online applications from non-targets go into a black hole. Always have a referral or connection.

**Targeting only bulge brackets**
Middle-market banks and boutiques offer excellent experience and are more accessible from non-targets.

**Waiting too long to start**
Recruiting timelines are early. Start networking 12+ months before you need the internship.

**Neglecting your GPA**
A 3.5 GPA from a non-target isn't competitive. Academic performance is one of the few objective signals you control.

**Not having a backup plan**
Pursue stepping-stone opportunities in parallel. Big 4 TAS or corporate banking aren't failures—they're viable paths.

---

*Need help with networking? Our [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook) has 50+ templates and follow-up strategies.*

*Ready for technicals? The [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers everything you'll be asked.*
    `},{slug:"how-to-break-into-investment-banking-2026",title:"How to Break Into Investment Banking in 2026: Non-Target, Target, and Lateral Paths",summary:"The complete guide to IB recruiting—timelines, networking strategies, and what actually works for each pathway.",category:"Recruiting",readTime:"25 min read",publishedAt:"2025-12-10",content:`
Breaking into investment banking requires understanding that there isn't one universal path—your strategy depends entirely on where you're starting from and how much time you have. Whether you're a freshman at a target school, a senior at a non-target desperately networking, or a Big 4 analyst looking to lateral, each pathway demands different tactics and timelines.

## The Four Main Entry Points Into Investment Banking

Investment banking recruiting operates around four distinct pathways, each with its own timeline, difficulty level, and prerequisites.

**Undergraduate at a Target or Semi-Target School** remains the cheapest and most straightforward path. If you attend schools like Wharton, Harvard, NYU Stern, Michigan Ross, or Berkeley Haas, you'll have access to structured on-campus recruiting where bulge bracket banks actively come to you.

**Recent Graduates** face a compressed window and must act with urgency. The critical rule: your chances decrease dramatically if you wait more than 1-2 years after graduation.

**MBA Candidates** follow a highly structured timeline that starts the moment you confirm your MBA acceptance. Recruiting technically begins before you even start classes.

**Lateral Hires** with 1-3 years of full-time investment banking or closely related experience can move between banks or from adjacent fields like Transaction Advisory Services.

## The Recruiting Timeline Reality: Earlier Than You Think

Investment banking recruiting has accelerated to absurd levels. For **junior year summer analyst positions**, applications now go live 12-18 months before the internship starts. Bulge bracket banks begin posting applications as early as January-February of sophomore year.

The majority of summer analyst offers get extended between January and April of sophomore year—meaning recruiting wraps up a full 15 months before you'd start the internship.

## Target vs. Non-Target: What Actually Matters

The target school advantage is real but not insurmountable. Banks pay career centers for exclusive access because it's financially efficient.

**Target schools** (Wharton, Harvard, Princeton, Stanford, MIT, Columbia, Duke, NYU Stern, Michigan Ross) get on-campus recruiting visits and automatic resume reviews. Students generally can get interviews with a GPA above 3.5, though top banks prefer 3.7-3.8+.

**Non-target schools** require a completely different strategy:
- Maintain a GPA of 3.7+ as a bare minimum (ideally 3.8-3.9)
- Network 3-4x as much as target school peers
- List your SAT/ACT scores on your resume if strong (1500+ SAT, 34+ ACT)
- Target middle-market banks and regional boutiques first

## Building Your Pre-Internship Foundation

You will not break into a bulge bracket internship with a blank resume. Banks expect to see relevant "steppingstone" experience.

**Freshman and early sophomore summers** should focus on getting any finance-adjacent experience: corporate finance, wealth management, corporate banking, Big 4 accounting firms, or financial analyst roles at startups.

**Academic preparation** needs to happen concurrently. You must learn accounting fundamentals, financial statement analysis, and valuation methodologies before interviews begin.

## Networking: The Non-Negotiable Differentiator

Networking isn't optional—it's the primary determinant of whether you get interviews, especially from non-target schools.

**Volume requirements**: From a target school, you need 20-30 networking calls to get a meaningful advantage. From a non-target, plan for 50-100+ outreach emails and 30-50 completed calls.

**The cold email framework** that works has three components:
1. Establish your point of connection
2. Make a specific ask focused on advice, not jobs
3. Propose three specific times you're available

Keep emails to 5 sentences maximum and always use your school email address.

## The Interview Process

**Behavioral/fit questions** assess whether you'll survive the hours and have genuine interest. Core questions: "Walk me through your resume," "Why investment banking?", "Why our bank?"

**Technical questions** test accounting, valuation, and deal mechanics. Core topics include: three-statement linkages, DCF analysis, LBO modeling, and M&A accretion/dilution.

**The Superday** is the final stage where you meet 3-6 bankers in back-to-back sessions. The acceptance rate averages 30-40%.

## The Path Forward: What to Do Right Now

**Freshmen and sophomores**: Join finance clubs, secure a relevant internship, start learning accounting basics, and begin networking 6-9 months before applications open.

**Current juniors**: Focus on off-cycle internships and middle-market banks. Begin intensive technical preparation and complete 30-50 networking calls.

**Recent graduates**: Target Transaction Advisory Services or valuation roles at Big 4 firms, corporate banking, or middle-market IB roles. Land a steppingstone role within 6 months, lateral to banking within 12-18 months.

---

*Ready to nail the technical questions? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers the 400+ questions you'll actually face.*

*Need help with your resume? Get a [professional resume review](/resume-services) from finance professionals who've screened thousands of candidates.*
    `},{slug:"investment-banking-resume-checklist",title:"Investment Banking Resume Example and Complete Checklist",summary:"The exact structure, bullet point formula, and deal-breakers you need to survive the 30-second screen.",category:"Recruiting",readTime:"12 min read",publishedAt:"2025-12-09",content:`
Investment banking recruiting is a process of elimination, not selection. Bankers don't read resumes to find reasons to hire you; they scan them for 30 seconds to find reasons to *ding* you. Your resume has one job: survive that initial scan by looking exactly like what a burned-out analyst expects to see.

If your font is too creative, your bullets are too vague, or your formatting is even slightly off, you will be rejected before anyone reads a word about your internship.

## The Only Format That Works (The "Gold Standard")

Forget everything career services told you about "standing out" with design. In finance, standing out visually is a negative signal.

**The Non-Negotiables:**

- **Length:** One page. Period. No exceptions.
- **Margins:** 0.5" to 0.75" on all sides
- **Font:** Times New Roman or Garamond, size 10-11pt
- **Structure:** Header → Education → Work Experience → Skills & Interests

## Section 1: Education (The Anchor)

For students and recent grads, Education goes at the top. This is where bankers look first.

- **GPA:** If it's 3.5 or above, bold it. If below 3.0, you have a major problem.
- **Test Scores:** If you have a 1500+ SAT or 34+ ACT, keep it. Bankers love standardized metrics.
- **Relevant Coursework:** List 4-6 finance/accounting classes.

## Section 2: Work Experience (The Bullet Point Formula)

This is where 90% of candidates fail. Most students list *responsibilities*. Bankers want to see *impact*.

**The Perfect Bullet Formula:**
**[Action Verb]** + **[Context/Task]** + **[Quantified Result]**

**Before (Weak):**
- *Researched potential acquisition targets for a client in the tech sector*
- *Helped creating pitch decks for client meetings*

**After (Strong):**
- **Screened** 50+ potential acquisition targets in the SaaS sector based on EBITDA margins and recurring revenue, identifying 3 high-priority targets
- **Developed** 15-slide management presentation for a $20M Series B fundraise, including market sizing and pro forma projections

**Key Rules:**
- No "Assisted" or "Helped"—use *Constructed, Evaluated, Spearheaded, Modeled, Executed*
- Quantify everything. If you don't have exact numbers, estimate conservatively.

## Section 3: Skills & Interests (The "Airport Test")

The "Airport Test" is simple: If I'm stuck with you at O'Hare for 4 hours during a flight delay, will I be miserable?

- **Be Specific:** "Travel" is boring. "Backpacking through 4 countries in Southeast Asia" is a conversation starter.
- **The Golden Rule:** If you list it, you must be able to talk about it for 5 minutes.

## 10 Resume Mistakes That Kill Your Chances

1. **Typos:** One typo = ding. Investment banking requires extreme attention to detail.
2. **Inconsistent Dates:** Using "Jan 2023" in one place and "January 2023" in another.
3. **No GPA:** Bankers assume it's sub-3.0 if you hide it.
4. **Bad Margins:** Making margins 0.2" to cram text in.
5. **Fluff Skills:** Listing "Leadership" or "Microsoft Word" as skills.
6. **Photo:** Never put your photo on a US finance resume.
7. **Summary/Objective:** Delete it. Your objective is obviously to get the job.
8. **Colored Text:** Black and white only.
9. **Gaps in Timeline:** Explain gaps or format dates to minimize them.
10. **Lying:** If you say you "Built an LBO model," you will be asked to walk through it.

## Final Step: The "Fresh Eyes" Review

You've looked at your resume for 10 hours; you are now blind to your own errors. You need a second pair of eyes—specifically, eyes that have screened thousands of these before.

---

*Don't let a formatting error be the reason you miss out on a $110K starting salary. Get a [Professional Resume Review](/resume-services) from finance professionals who catch what you miss.*

*Ready to master the technical questions? Check out our [Finance Technical Interview Guide](/playbooks/ib-technical-guide).*
    `},{slug:"learn-investment-banking-technicals-order",title:"The Only Order You Should Learn Investment Banking Technicals In",summary:"Accounting → Valuation → DCF → M&A → LBO: why sequence matters more than study time.",category:"Technical",readTime:"20 min read",publishedAt:"2025-12-08",content:`
Investment banking technical interviews test whether you understand finance—but more importantly, they test whether you understand it *in the right order*. Learning DCF models before you know how the three financial statements connect is like learning calculus before algebra.

## Why Learning Order Matters More Than Study Time

Most candidates fail not because they didn't study enough—they fail because they studied in the wrong sequence. They jump to DCF models without understanding accounting, then panic when asked "Walk me through how depreciation flows through the three statements."

Investment banking technicals are hierarchical. Each concept builds on the previous one.

## The Five-Level Hierarchy

### Level 1: Accounting Fundamentals (Week 1-2)

This is your foundation. Every technical question traces back to the three financial statements.

**What You Must Master:**

The income statement flows into both the balance sheet (through retained earnings) and the cash flow statement (through net income). Changes in balance sheet accounts explain the adjustments on the cash flow statement.

**Common Questions:**
- "Walk me through the three financial statements and how they're linked"
- "If depreciation increases by $10, walk me through the impact on all three statements"

**Time Investment:** 7-10 days until you can answer these in your sleep.

### Level 2: Enterprise Value vs. Equity Value (Week 2-3)

**Enterprise Value** = Value of entire business operations = Equity Value + Net Debt + Preferred + Minority Interest - Non-Operating Assets

**Equity Value** = Value to common shareholders = Share Price \xd7 Fully Diluted Shares

**Time Investment:** 5-7 days. This concept is straightforward but critical.

### Level 3: Valuation Methodologies (Week 3-5)

The three core methods:

1. **Comparable Company Analysis (Trading Comps):** Value based on public peer multiples
2. **Precedent Transaction Analysis:** Value based on past M&A deal multiples (includes control premium)
3. **DCF Analysis:** Value based on present value of future cash flows

**The Five Steps of a DCF:**
1. Project unlevered free cash flows (5-10 years)
2. Calculate WACC
3. Calculate terminal value
4. Discount everything to present value
5. Convert enterprise value to equity value

**Time Investment:** 10-14 days. DCF is the most tested methodology.

### Level 4: Merger Models (Week 5-6)

M&A models determine whether an acquisition increases or decreases the acquirer's EPS (accretive vs. dilutive).

**Quick Rule:** If acquirer's P/E > target's implied P/E, deal is likely accretive.

**Time Investment:** 7-10 days.

### Level 5: LBO Models (Week 6-7)

LBO models calculate PE returns from acquiring a company with debt, operating it for 5-7 years, and selling.

**Paper LBO Mental Math:**
- Rule of 72: If equity doubles, IRR ≈ 72 / years
- Rule of 114: If equity triples, IRR ≈ 114 / years
- Rule of 144: If equity quadruples, IRR ≈ 144 / years

**Time Investment:** 7-10 days.

## The 6-Week Study Plan

**Weeks 1-2:** Accounting + EV/Equity Value
**Weeks 3-5:** Valuation methodologies (focus on DCF)
**Week 5-6:** M&A models
**Week 6-7:** LBO models

## How to Know When You're Ready

You're prepared when you can:
1. Walk through the three statements and explain how a $10 change flows through all three in under 2 minutes
2. Explain DCF steps and calculate WACC from memory
3. Complete a paper LBO in 15-20 minutes
4. Answer "Is this deal accretive or dilutive?" in under 30 seconds

---

*Want the full 400+ question bank with detailed answers? Get the [Finance Technical Interview Guide](/playbooks/ib-technical-guide).*

*Need to master LBO modeling specifically? Check out our [LBO Modeling Crash Course](/playbooks/lbo-modeling-course).*
    `},{slug:"100-investment-banking-technical-questions",title:"100 Core Investment Banking Technical Questions by Topic",summary:"The most frequently asked questions organized by category, with the concepts you need to actually understand them.",category:"Technical",readTime:"30 min read",publishedAt:"2025-12-07",content:`
Investment banking technical interviews aren't designed to test whether you've memorized answers—they're designed to expose whether you actually understand finance well enough to explain it under pressure.

## How Technical Questions Are Actually Distributed

Based on analysis of real interview questions: **23% are "Walk me through a DCF"**. Another 20% ask about valuation methodologies, and 10% test financial statement linkages. These top three types account for 53% of everything you'll be asked.

## Category 1: Accounting and Financial Statements

**Q1: Walk me through the three financial statements and how they're linked.**

The income statement shows profitability. The cash flow statement shows cash movements, starting with net income. The balance sheet shows assets, liabilities, and equity at a point in time. Net income flows to retained earnings on the balance sheet and is the starting point for the cash flow statement.

**Q2: How does a $10 increase in depreciation flow through?**

Income statement: Pre-tax income down $10, net income down $7.50 (at 25% tax). Cash flow: Start with NI (down $7.50), add back depreciation ($10). Net: cash up $2.50. Balance sheet: Cash up $2.50, PP&E down $10, retained earnings down $7.50.

**Q3: Why do we add back depreciation on the cash flow statement?**

Depreciation reduced net income but didn't use cash. We add it back to reflect the company still has that cash.

## Category 2: Enterprise Value vs. Equity Value

**Q9: What's the difference between enterprise value and equity value?**

Equity value = value to common shareholders = share price \xd7 diluted shares. Enterprise value = value of entire business = equity value + net debt + preferred + minority interest - non-operating assets.

**Q10: If a company issues $100M debt to buy back stock, what happens to EV and equity value?**

Equity value decreases by $100M. Enterprise value stays the same—it's just a capital structure change.

## Category 3: Valuation Methodologies

**Q14: What are the three main ways to value a company?**

1. Comparable Company Analysis (trading comps)
2. Precedent Transaction Analysis (deal comps)
3. Discounted Cash Flow (DCF)

**Q15: When would you use each?**

DCF for intrinsic fundamental value. Trading comps for market reality check. Precedent transactions when valuing for M&A (includes control premium).

## Category 4: DCF Analysis (Most Tested)

**Q18: Walk me through a DCF.**

Step 1: Project unlevered free cash flows for 5-10 years. FCFF = EBIT \xd7 (1-Tax) + D&A - CapEx - ΔNWC.
Step 2: Calculate WACC.
Step 3: Calculate terminal value using perpetuity growth or exit multiple.
Step 4: Discount all cash flows to present value.
Step 5: Sum to get enterprise value, subtract net debt for equity value.

**Q19: What discount rate do you use?**

WACC for unlevered FCF. Cost of equity for levered FCF.

**Q20: How do you calculate WACC?**

WACC = (E/V \xd7 Cost of Equity) + (D/V \xd7 Cost of Debt \xd7 (1-Tax)). Cost of equity via CAPM: Risk-Free Rate + Beta \xd7 Market Risk Premium.

## Category 5: M&A Analysis

**Q26: Walk me through a merger model.**

Calculate standalone financials for both companies. Determine purchase price and consideration (cash/stock). Model sources and uses. Calculate pro forma adjustments (new interest, new shares, synergies). Calculate pro forma EPS. Compare to standalone—if higher, accretive; if lower, dilutive.

**Q27: Is a deal accretive if acquirer P/E is 20x and pays 15x for target?**

Likely accretive. Acquirer is buying "cheaper" earnings relative to its own valuation.

## Category 6: LBO Models

**Q31: Walk me through an LBO.**

Calculate entry EV using entry multiple. Structure sources (debt, equity) and uses (purchase price, fees). Project 5-7 year financials. Model debt paydown. Calculate exit EV, subtract remaining debt for exit equity. Calculate IRR and MOIC.

**Q32: What's an ideal LBO candidate?**

Strong, stable cash flows. Low capex. Strong market position. Operational improvement opportunity. Non-cyclical industry.

**Q35: How do you calculate IRR quickly?**

Rule of 72: Equity doubles, IRR ≈ 72/years.
Rule of 114: Equity triples, IRR ≈ 114/years.
Rule of 144: Equity quadruples, IRR ≈ 144/years.

## How to Actually Learn These

**Build Models From Scratch:** Don't just review—build a DCF and LBO from a blank Excel sheet.

**Verbalize Your Logic:** Practice explaining out loud. Record yourself.

**Focus on Concept Clusters:** Everything connects. Learn in order so each concept builds on the last.

---

*Want all 400+ questions with detailed answers? Get the [Finance Technical Interview Guide](/playbooks/ib-technical-guide).*

*Need to master LBO modeling? Our [LBO Modeling Crash Course](/playbooks/lbo-modeling-course) includes 3 full model templates.*
    `},{slug:"cold-emailing-bankers-scripts",title:"Cold Emailing Bankers: Exact Scripts, Subject Lines, and Follow-Up Strategies",summary:"The 5 golden rules, plug-and-play templates, and timing strategies that actually get responses in 2026.",category:"Networking",readTime:"10 min read",publishedAt:"2025-12-06",content:`
Networking in investment banking is a numbers game, but it's a game with specific rules. If you break them, your email gets deleted instantly. If you follow them, you get the 15-minute call that leads to the Superday.

## The 5 Golden Rules of Cold Emailing

1. **5 Sentences Maximum:** No one reads paragraphs on a phone. If they have to scroll, they delete.
2. **No "Pick Your Brain":** This phrase signals "I want to waste your time." Ask for "advice on your experience in [specific group]."
3. **Specific Availability:** Never ask "When are you free?" Offer 3 specific time slots.
4. **Use Your .edu Email:** Gmail addresses often get filtered to spam.
5. **One Thread Rule:** Always reply to your own email when following up.

## Subject Lines That Get Opened

**For Alumni (High Response Rate):**
- *Student from [University] - Networking*
- *[University] Sophomore / Investment Banking Advice*
- *Introduction - [University] [Year] - [Name]*

**For Non-Alumni:**
- *Question on [Specific Deal] / [Your University] Student*
- *Referral from [Mutual Contact Name]*

**Avoid:** "Hello", "Coffee Chat", "Inquiry"

## The "Plug-and-Play" Scripts

### Scenario A: The "Warm" Alumnus Email

**Subject:** [School] Student / Investment Banking Advice - [Name]

Dear [Name],

I hope you're having a good week.

My name is [Name] and I'm a [Year] at [University] majoring in [Major]. I see that you previously were involved with [Student Club/Sport] on campus and are now working in [Group] at [Bank].

I would appreciate the opportunity to briefly speak with you about your experience moving from [School] to [City/Bank]. I am free next Tuesday or Thursday after 2pm ET, but can work around whatever is convenient for you.

Best,
[Name]

### Scenario B: The "Cold" Non-Alumnus Email

**Subject:** Investment Banking Advice - [Name] ([Internship Experience])

Dear [Name],

I hope you are well.

My name is [Name] and I am a [Year] at [University] with recent internship experience at [Previous Firm]. I noticed you recently worked on the [Deal Name] transaction and wanted to ask for your perspective on [Specific Detail].

I know you are incredibly busy, but I would appreciate 10 minutes of your time. I am available [Time Option 1] or [Time Option 2] if either works.

Best,
[Name]

## Finding Email Addresses

Most banks follow standard formats:
- **Goldman Sachs:** first.last@gs.com
- **Morgan Stanley:** first.last@morganstanley.com
- **JP Morgan:** first.last@jpmorgan.com
- **Evercore:** first.last@evercore.com
- **Lazard:** first.last@lazard.com
- **Centerview:** flast@centerview.com (Note the difference!)

## Timing and Follow-Up Strategy

**When to Send:**
- **Best Days:** Tuesday, Wednesday, Thursday
- **Best Times:** 10am-2pm or 7:30pm-9pm
- **Avoid:** Monday mornings, Friday afternoons, 2am

**The Follow-Up Cadence:**

**Send 1:** Initial email.
**Wait:** 5-7 business days.
**Send 2 (The Bump):** Reply to original thread.
> "Hi [Name], just wanted to bump this in case it got buried. Would still love 10 minutes if you have a moment next week."

**Wait:** 5-7 business days.
**Send 3 (The Hail Mary):** Reply one last time.
> "Hi [Name], I'll try one last time—if you aren't the right person, is there someone else in your group you'd recommend?"

**Result:** If no reply after 3 attempts, move on. Don't email again for 6 months.

## Tracking Your Efforts

Create an Excel tracker with: Bank, Name, Role, Email, Date Sent, Date Followed Up, Status, Notes.

---

*Want 50+ more templates for every scenario? Get the [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook).*

*Got the interview? Make sure you don't blow it on technicals. Check out the [Finance Technical Interview Guide](/playbooks/ib-technical-guide).*
    `},{slug:"investment-banking-behavioral-interview-guide",title:"Mastering the Investment Banking Behavioral Interview",summary:"How to nail 'Walk me through your resume,' the 'Why' questions, and the Airport Test.",category:"Interviews",readTime:"12 min read",publishedAt:"2025-12-05",content:`
You can have a 4.0 GPA from Wharton and know how to build an LBO model in your sleep, but if you fail the "Airport Test," you will not get an offer.

Investment banking interviews are split 50/50 between technicals and behaviorals. Technicals are binary—you're either right or wrong. Behaviorals are subjective. They answer the only question that matters to a VP at 2 AM: *"Can I stand to be around this person for 100 hours a week?"*

## The Anchor: "Walk Me Through Your Resume"

This is the first question in 99% of interviews. You have exactly 2-3 minutes to set the narrative arc of your life.

**The 4-Step Structure (The "Spark" Method):**

**1. The Spark (The Beginning):** Start with where you're from and the initial trigger for your interest.
> "I grew up in Chicago and first got interested in finance when I started trading my own small portfolio in high school…"

**2. The Growing Interest (College):** Move to your university choice and relevant activities.
> "I chose [University] because of its strong business program. I joined the Investment Banking Club freshman year…"

**3. The Professional Pivot (Internships):** Walk through work experience. For each role, explain what you did and why you moved.
> "Last summer, I worked at [Firm]. While I enjoyed the client interaction, I realized I wanted larger, transaction-based deals, which led me to target investment banking…"

**4. The "Why You're Here" (The Close):** Bring it to the present.
> "That experience confirmed IB is the right path. I'm specifically excited about [Bank] because of your strength in [Industry] and the conversations I've had with [Alum Name]."

**Fatal Mistake:** Reciting your resume line-by-line. They have your resume. They want the *story*.

## The "Why" Questions

**"Why Investment Banking?"**

**Bad:** "I want to make money and exit to PE." (Too mercenary)
**Bad:** "I love finance and modeling." (You can do that in accounting)

**Good (The "High-Stakes" Angle):**
> "I want to work in investment banking because I thrive in high-pressure environments where my work has tangible impact. In my last internship, I loved the intensity of [Project], but I wanted to be closer to transaction execution. Banking offers the fastest way to build that skillset on live deals."

**"Why Our Firm?"**

**Bad:** "You're a top-tier bulge bracket with great culture." (Applies to everyone)

**Good (The "People + Deal" Combo):**
> "Two reasons. First, I've been following your work on [Specific Deal]—I found the structure really interesting. Second, the people. I've spoken with [Alum] and [Analyst], and they both emphasized how senior bankers here invest in junior development."

## The "Airport Test" (Likability)

The "Airport Test": *If I were stuck at O'Hare with this candidate for 4 hours during a flight delay, would I want to kill myself?*

**How to Pass:**
1. **Have Hobbies:** If asked "What do you do for fun?", don't say "Read the Wall Street Journal." Say "I'm training for a marathon" or "I'm trying to cook every recipe in this cookbook."
2. **Smile and Banter:** If they ask "How are you?", don't just say "Good." Say "Doing well, though I'm ready for this Chicago winter to be over. How's your week going?"
3. **Read the Room:** Mirror their energy. If serious, be professional. If laid back, loosen up slightly.

## Structured "War Stories" (The STAR Method)

Prepare 5 "Core Stories" that adapt to any behavioral question. Use **STAR**:

- **Situation (10%):** Set the scene. "During my internship at X…"
- **Task (10%):** What was the problem?
- **Action (70%):** What did **YOU** specifically do?
- **Result (10%):** The outcome.

**The "Greatest Weakness" Trap:**

**Don't say:** "I work too hard" (Humble-brag—they hate this)
**Don't say:** "I'm bad at math" (Disqualifying)

**Do say:** A real weakness you're actively fixing.
> "I sometimes struggle with delegating because I want everything perfect. In my last project, I realized this created bottlenecks, so I created a shared tracker to assign tasks. It's something I'm still improving."

## The Final 5 Minutes: Asking Good Questions

Saying "No" to "Do you have any questions?" is an automatic fail.

**Ask specific questions that show you were listening:**
- "You mentioned you worked on [Deal X]—how did the team handle the regulatory challenges?"
- "What's the one skill that separates a top-bucket analyst from an average one in this group?"

---

*Want 30+ example stories and frameworks for every behavioral question? Get the [Walk Me Through Your Resume Playbook](/playbooks/resume-story-playbook).*

*Ready to nail the technicals too? Check out the [Finance Technical Interview Guide](/playbooks/ib-technical-guide).*
    `},{slug:"can-you-get-into-investment-banking-with-a-low-gpa",title:"Can You Get Into Investment Banking With a Low GPA? (3.0, 3.2, 3.5)",summary:"Honest advice on breaking into IB with a sub-3.5 GPA—what's actually possible and the specific strategies that work.",category:"Recruiting",readTime:"10 min read",publishedAt:"2026-01-18",content:`
Let's address the elephant in the room: Yes, people get into investment banking with GPAs below 3.5. No, it's not easy. And the strategy changes dramatically depending on whether you have a 3.4 or a 2.8.

Here's the honest breakdown of what's possible at each GPA tier and exactly what you need to do.

## The GPA Tiers: What's Actually Possible

### 3.3 - 3.5 GPA: Difficult but Doable

At this range, you're below the typical cutoff for bulge brackets (3.5-3.7) but not disqualifyingly low.

**What's realistic:**
- Middle-market and regional banks (yes)
- Boutique investment banks (yes)
- Big 4 Transaction Advisory (yes, strong path)
- Bulge brackets (possible with exceptional networking and experience)

**The strategy:**
- Network 3x harder than peers with higher GPAs
- Target banks that don't have strict GPA screens
- Lead with your experience and deal knowledge
- If possible, show an upward GPA trend

### 3.0 - 3.3 GPA: Challenging but Not Impossible

This is where things get harder. Many banks have automatic screens at 3.3 or 3.5.

**What's realistic:**
- Smaller boutiques and regional banks (yes)
- Big 4 TAS (possible, then lateral)
- Corporate banking → IB lateral (viable path)
- Middle-market with strong networking (possible)

**The strategy:**
- Focus almost entirely on networking—online applications won't work
- Get your resume directly to decision-makers, bypassing HR screens
- Consider stepping-stone roles (Big 4, corporate banking, valuation firms)
- Highlight any standout achievements (test scores, internships, leadership)

### Below 3.0: Very Difficult, Requires Creative Paths

Below a 3.0 at most schools closes the direct path to banking. That doesn't mean finance is impossible.

**Realistic paths:**
- Operational roles at banks → internal transfer
- Big 4 audit/advisory → TAS → banking (2-3 year path)
- MBA with strong GMAT (resets your candidacy)
- Entrepreneurship or unique experience that tells a story

## What Banks Actually See When They See Your GPA

Understanding why GPA matters helps you counter it:

**Signal of work ethic:** They assume high GPA = can handle the grind
**Counter:** Demonstrate work ethic through demanding internships, jobs during school, or intensive extracurriculars

**Signal of intelligence:** Standardized measure of capability
**Counter:** Strong SAT/ACT scores, GMAT, or technical certifications

**Filter mechanism:** Banks get thousands of applications; GPA is an easy screen
**Counter:** Network to bypass the screen entirely

## The Strategies That Actually Work

### 1. Network Until Your Resume Gets Pulled

The most reliable way to overcome a GPA barrier is to have someone internally advocate for your resume. When a VP tells recruiting "I want to interview this person," your GPA becomes much less relevant.

**Target:** 50-100+ networking emails, 30-50 completed calls, 3-5 strong advocates

### 2. Target Banks Without Hard Cutoffs

Not all banks screen by GPA. Smaller boutiques, regional banks, and some middle-market firms evaluate holistically. Research each firm's reputation for GPA flexibility.

### 3. Get Killer Experience First

A transformative internship—even outside banking—can overshadow your GPA. If you worked at a startup that got acquired, did serious financial analysis at a Fortune 500, or had real deal exposure anywhere, lead with that.

### 4. Show GPA Trajectory

If your GPA improved over time (2.8 freshman year → 3.5 junior/senior), highlight your "major GPA" or "last 60 credits" GPA. A clear upward trend suggests you found your footing.

### 5. The Stepping-Stone Path

If direct entry isn't working:
1. Land a role in Big 4 TAS, corporate banking, or valuation
2. Crush it for 1-2 years
3. Lateral into banking with your new track record (GPA matters much less for lateral hires)

## What NOT to Do

**Don't lie about your GPA.** Banks verify. Getting caught is an instant rejection and potential industry blacklist.

**Don't make excuses.** "I had a tough freshman year" doesn't help. Focus on what you've done since.

**Don't only apply online.** With a low GPA, online applications without networking are nearly useless at competitive banks.

**Don't give up too early.** The path may be longer, but it's not closed.

## Real Talk: When to Consider Other Paths

If you have below a 3.0, limited relevant experience, and aren't at a target school, investment banking may not be the most efficient path. Consider:

- **Corporate finance:** Excellent careers, still finance-focused, more accessible
- **FP&A at a strong company:** Build skills, potentially pivot later
- **MBA in 3-5 years:** A strong GMAT and work experience can reset everything

There's no shame in taking a different path. Many successful finance professionals didn't start in banking.

---

*Need to nail the interviews once you get them? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers 400+ real questions.*

*Working on your resume positioning? A [Professional Resume Review](/resume-services) can help you highlight strengths over GPA.*
    `},{slug:"is-it-too-late-to-get-into-investment-banking",title:"Is It Too Late to Get Into Investment Banking? (By Age and Stage)",summary:"Whether you're 25, 30, or 35—here's the honest answer on age limits in IB and what paths remain open.",category:"Career Strategy",readTime:"12 min read",publishedAt:"2026-01-17",content:`
"Am I too old for investment banking?" is one of the most common questions in finance recruiting. The answer depends entirely on your specific situation—your age, your experience, and which path you're considering.

Here's the honest breakdown by stage and age.

## The Age Reality in Investment Banking

Let's be direct: Investment banking has an age bias, especially at the entry level. Analyst programs are designed for 22-year-olds fresh out of college. Associate programs assume you're 27-29 coming out of an MBA.

But "age bias" doesn't mean "age prohibition." People break in at all ages—they just use different paths.

## By Stage: What's Realistic

### Recent Graduate (22-24): Prime Window

This is the standard path. You're in the target demographic.

**Status:** Fully open. Apply to analyst programs directly.

### 1-3 Years Post-Graduation (24-27): Still Very Doable

You missed the standard analyst recruiting cycle, but you're not too late.

**Best paths:**
- Lateral from adjacent roles (Big 4 TAS, corporate banking, valuation)
- Off-cycle analyst hiring
- Smaller banks and boutiques with flexible hiring

**Key:** You need relevant experience. Banks won't hire a 26-year-old with the same resume as a 22-year-old.

### 4-6 Years Post-Graduation (27-30): MBA or Lateral

At this stage, direct analyst hiring becomes unlikely. You have two main options:

**Option 1: MBA → Associate**
The traditional reset. A top MBA (M7 or T15) allows you to recruit for Associate positions. Age is normalized because everyone in your class is 27-30.

**Option 2: Lateral at Associate Level**
If you have 4-6 years of highly relevant experience (consulting, Big 4 M&A, corporate development), some banks will hire you directly as an Associate without an MBA. This is less common but happens.

### 30-35: MBA Strongly Recommended

Post-30, the MBA path becomes almost essential for traditional IB entry.

**The reality:**
- Analyst programs won't consider you (too senior)
- Direct Associate hiring without MBA is rare
- MBA normalizes your age and provides recruiting access

**Consider carefully:** Is banking the best use of your remaining career? Corporate development, PE operating roles, or other senior finance positions might be more aligned with your experience.

### 35+: Very Difficult for Traditional Path

After 35, breaking into investment banking as an Associate is extremely rare. Banks worry about:
- Managing someone older than the MDs interviewing them
- Whether you'll accept the hierarchy and hours
- How long you'll stay before wanting a senior role

**Alternative paths:**
- Industry coverage roles leveraging deep sector expertise
- Senior positions at smaller banks or advisory firms
- Corporate development or strategy at the C-suite feeder level

## The Real Question: Why Do You Want Banking?

Before pursuing banking at a later stage, honestly assess your motivation:

**If it's for the exit opportunities:** Those exits (PE, hedge funds) also have age sensitivity. Starting banking at 32 to exit to PE at 35 is a tough path.

**If it's for the skills:** You can learn modeling and deal skills in other roles (corporate development, Big 4 M&A, consulting due diligence).

**If it's for the money:** Senior roles in corporate finance and other areas can pay competitively without the banking hours.

**If it's for the prestige/experience:** This is valid, but weigh the cost (2 years as a junior, brutal hours, opportunity cost).

## Strategies by Age Group

### For 25-27: Move Fast

- Start networking immediately
- Target lateral opportunities at middle-market banks
- Consider a 1-year intensive role in TAS or valuation as a bridge
- Don't wait—each year makes it harder

### For 28-30: Decide on MBA

- If banking is truly your goal, apply to top MBA programs
- GMAT score matters more than work experience for admissions
- Use the 2-year program to recruit properly
- Network with banks during the application process

### For 30+: Be Strategic

- MBA is likely required, but weigh the ROI carefully
- Consider adjacent paths that leverage your existing experience
- Network extensively to find unusual opportunities
- Be realistic about timeline and opportunity cost

## Success Stories Do Exist

People break into banking at all ages. I've seen:
- A 34-year-old ex-military officer join as an Associate post-MBA
- A 29-year-old accountant lateral into a middle-market bank
- A 31-year-old consultant break in through a specialized industry group

These are exceptions, not the rule—but they prove it's possible with the right combination of experience, networking, and timing.

## The Bottom Line

**Is it too late?**
- Under 27: No, but move quickly
- 27-30: Probably not, but MBA may be needed
- 30-35: Difficult without MBA; carefully consider if it's worth it
- 35+: Extremely difficult for traditional path; explore alternatives

The question isn't just "Can I get in?" but "Is this the best path for my goals given where I am now?"

---

*Preparing for interviews? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers everything you'll be asked regardless of your background.*

*Need help positioning your non-traditional background? Get a [Professional Resume Review](/resume-services).*
    `},{slug:"how-to-answer-why-investment-banking-interview-question",title:"How to Answer 'Why Investment Banking?' (With Examples That Actually Work)",summary:"The framework for answering the most common IB interview question—plus word-for-word examples for different backgrounds.",category:"Interviews",readTime:"8 min read",publishedAt:"2026-01-16",content:`
"Why investment banking?" is asked in virtually every IB interview. It sounds simple, but most candidates blow it—either giving generic answers that apply to any finance job or revealing motivations that make interviewers cringe.

Here's exactly how to answer it.

## What They're Really Asking

When an interviewer asks "Why investment banking?", they're actually asking several questions:

1. **Do you understand what the job actually is?** (Many candidates don't)
2. **Are your motivations sustainable?** (Will you quit in 6 months when it's hard?)
3. **Have you tested your interest?** (Or is this theoretical?)
4. **Are you going to say something that makes me not want to work with you?**

Your answer needs to address all four.

## The Framework That Works

Structure your answer in three parts:

### Part 1: The Spark (What Drew You In)
A specific experience or moment that triggered your interest. This grounds your answer in reality.

### Part 2: The Confirmation (How You Tested It)
What you did to explore and validate that interest. This shows intentionality.

### Part 3: The Fit (Why IB Specifically)
What about investment banking—as opposed to consulting, corporate finance, or other paths—makes it the right fit.

**Total length:** 60-90 seconds. Don't ramble.

## What TO Say

**Mention these elements:**
- Exposure to deals, transactions, or M&A that sparked interest
- Specific aspects of IB that appeal: deal execution, client advisory, financial analysis
- Evidence of testing your interest (internships, projects, coursework)
- Intellectual curiosity about how deals work
- Desire for steep learning curve and high-intensity environment

**Good motivations:**
- "I want to understand how businesses are valued and transactions are structured"
- "I thrive in fast-paced environments with high stakes"
- "I want to build technical skills that compound over a career"
- "I'm drawn to working on consequential projects that shape industries"

## What NOT to Say

**Never mention:**
- "Exit opportunities" (Everyone knows you want to leave for PE—don't say it)
- "Money" (Obvious and makes you seem mercenary)
- "Prestige" (Shallow and signals you don't understand the work)
- "I want to do deals" (Vague—what do you think deals involve?)

**Avoid these framings:**
- "I've always wanted to work on Wall Street" (Why? Be specific)
- "I love finance and numbers" (So do accountants)
- "I want to help companies grow" (You could do that in consulting or corporate)

## Example Answers by Background

### For a Target School Junior

> "My interest in investment banking started sophomore year when I joined the Investment Banking Club and worked on a stock pitch competition. Breaking down a company's financials and thinking through its valuation got me hooked on the analytical process.
>
> Last summer, I interned at [Bank/Firm] where I worked on pitch materials for a potential acquisition. Seeing how the team structured the analysis and advised the client confirmed that I want to be on the deal side—not just analyzing companies theoretically, but working on live transactions with real stakes.
>
> What draws me specifically to banking over other paths is the combination of technical depth and client exposure. I want to build those modeling and valuation skills while also learning how to advise executives on critical decisions."

### For a Non-Target with Limited Finance Experience

> "I became interested in investment banking through an unexpected path. I was working on a financial analysis project in my accounting class, and I started reading about how the company we analyzed had just been acquired. I went down a rabbit hole learning about the deal—the valuation, the strategic rationale, the process—and realized this was the type of work I wanted to do.
>
> Since then, I've focused on building relevant skills: I completed Wall Street Prep's financial modeling program, joined our finance club, and completed an internship in corporate finance where I worked on budgeting and some basic valuation work.
>
> Those experiences confirmed my interest, but I want to work on larger, more complex transactions. Investment banking offers the opportunity to build those skills quickly while working on deals that actually move markets."

### For a Career Changer / Lateral

> "I came to investment banking from [Previous Industry], where I was doing [Role]. While I enjoyed [aspect], I found myself increasingly drawn to the financial and strategic aspects of decisions.
>
> Last year, I had the opportunity to work closely with our investment bankers during a financing round, and I saw firsthand how they structured the process and advised our leadership. That experience crystallized something I'd been thinking about: I want to be the advisor in the room, not just the operator.
>
> I know the transition is challenging, but my background gives me sector knowledge in [Industry], and I've spent the past [X months] building the technical foundation through [coursework/certifications]. Banking is the right path because it combines analytical rigor with strategic advisory work in a way that other roles don't."

## Common Follow-Up Questions

**"Why not consulting?"**
> "I considered it, but I'm more interested in financial analysis and transaction execution than operational strategy. Banking offers deeper exposure to valuation, capital markets, and deal structuring."

**"Why not private equity directly?"**
> "I want to build the technical foundation first. Banking provides the modeling skills and deal exposure that make someone effective in investing roles. I believe in earning that foundation."

**"What if you hate the hours?"**
> "I've talked to enough analysts and associates to understand what the lifestyle looks like. I'm not naive about it, but I'm also motivated by working on meaningful transactions, and I perform well in high-intensity environments."

---

*Want to nail all the behavioral questions? Our [Walk Me Through Your Resume Playbook](/playbooks/resume-story-playbook) has 30+ example stories and frameworks.*

*Ready for technicals? The [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers 400+ questions.*
    `},{slug:"how-to-cold-email-investment-bankers",title:"How to Cold Email Investment Bankers (Templates That Actually Get Replies)",summary:"The exact cold email templates, subject lines, and follow-up strategy that gets responses from busy bankers.",category:"Networking",readTime:"10 min read",publishedAt:"2026-01-14",content:`
Cold emailing bankers is a numbers game—but it's a game with specific rules. Break them, and your email gets deleted. Follow them, and you'll get the calls that lead to interviews.

Here's exactly how to write cold emails that get responses.

## The 5 Rules of Cold Emailing Bankers

### Rule 1: Keep It Under 5 Sentences

Bankers read email on their phones between meetings. If they have to scroll, they won't read.

**Your email should be:**
- Subject line
- Greeting
- Who you are (1 sentence)
- Why you're reaching out (1-2 sentences)
- The ask (1 sentence)
- Sign-off

### Rule 2: Make It Easy to Say Yes

Don't ask for a 30-minute call. Ask for 10-15 minutes. Don't ask "when are you free?" Offer specific times.

**Bad:** "Would you have time to chat sometime about your experience?"
**Good:** "Would you have 10 minutes for a call Tuesday or Wednesday after 6pm?"

### Rule 3: Give Them a Reason to Respond

Why should they help you specifically? Find a connection point:
- Same school/alumni
- Same hometown or region
- Shared interest or background
- Specific deal they worked on

### Rule 4: Don't Ask for a Job

You're asking for advice and information—not a job. Mentioning job-seeking in a cold email triggers an automatic "talk to HR" response.

### Rule 5: Follow Up (But Don't Stalk)

Most responses come after follow-ups. Send 2-3 follow-ups spaced 5-7 days apart. After that, move on.

## Email Templates That Work

### Template 1: Alumni Connection

**Subject:** [University] Student – Quick Question on [Group]

> Hi [Name],
>
> I'm a [year] at [University] studying [major], and I saw you were also involved in [club/activity] during your time on campus.
>
> I'm exploring investment banking and would love to hear about your experience in [Group] at [Bank], particularly how you've found the [industry/product] focus.
>
> Would you have 10-15 minutes for a brief call? I'm available [Day] or [Day] after [time], but happy to work around your schedule.
>
> Best,
> [Name]

### Template 2: Deal-Specific Hook

**Subject:** Question on [Deal Name] / [University] Student

> Hi [Name],
>
> I'm a [year] at [University] interested in [industry] investment banking. I came across [Bank]'s work on the [Deal Name] transaction and found the [specific aspect] particularly interesting.
>
> I'd love to learn more about how [Group] approaches [sector] deals and your perspective on the group's culture.
>
> Would you have 10 minutes for a quick call? I'm flexible on timing.
>
> Best,
> [Name]

### Template 3: Referral-Based

**Subject:** Referral from [Referrer Name] – [Your Name]

> Hi [Name],
>
> [Referrer Name] suggested I reach out to you. I'm a [year] at [University] interested in [Group] at [Bank], and [Referrer] mentioned you'd be a great person to learn from given your experience in [specific area].
>
> Would you have 10-15 minutes to chat about your path and any advice for someone targeting [Group]?
>
> Thank you,
> [Name]

### Template 4: Non-Target / Non-Alumni

**Subject:** [University] Junior / Question on [Bank] [Group]

> Hi [Name],
>
> I'm a junior at [University] with internship experience at [Relevant Firm]. I'm targeting [Group/Industry] banking and was impressed by [Bank]'s recent work in the space.
>
> I know we don't have a direct connection, but I'd be grateful for 10 minutes to hear about your experience and any advice for breaking into [Bank].
>
> I'm available [times], but happy to work around your schedule.
>
> Best,
> [Name]

## The Follow-Up Sequence

### Follow-Up 1 (Day 5-7): The Bump

Reply to your original email:

> Hi [Name],
>
> Just wanted to bump this to the top of your inbox in case it got buried. Would still love 10 minutes if you have any availability in the coming weeks.
>
> Best,
> [Name]

### Follow-Up 2 (Day 10-14): The Final Ask

> Hi [Name],
>
> I'll try one more time—completely understand if you're too busy. If there's someone else in [Group] you'd recommend I speak with, I'd appreciate the referral.
>
> Thanks either way,
> [Name]

### After Follow-Up 2: Move On

If no response after two follow-ups, don't email again for at least 6 months. You're not forgotten—they're just not responsive.

## Finding Email Addresses

Most banks use predictable formats:

| Bank | Format |
|------|--------|
| Goldman Sachs | first.last@gs.com |
| Morgan Stanley | first.last@morganstanley.com |
| JP Morgan | first.last@jpmorgan.com |
| Bank of America | first.last@bofa.com |
| Evercore | first.last@evercore.com |
| Lazard | first.last@lazard.com |
| Centerview | flast@centerview.com |

Use tools like Hunter.io or RocketReach to verify.

## When to Send

**Best days:** Tuesday, Wednesday, Thursday
**Best times:** 10am-2pm OR 7-9pm (when they're catching up on email)
**Avoid:** Monday mornings, Friday afternoons, weekends

## Tracking Your Outreach

Create a spreadsheet with:
- Name, Title, Bank, Group
- Email address
- Date sent
- Follow-up dates
- Response (Y/N)
- Call scheduled?
- Notes

Target 10-20 new outreach emails per week during recruiting season.

---

*Want 50+ more templates for every scenario? Get the [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook).*

*Ready for interviews? The [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers everything you'll be asked.*
    `},{slug:"walk-me-through-a-dcf-interview-question",title:"Walk Me Through a DCF: The Perfect Interview Answer (Step-by-Step)",summary:"Exactly how to answer the most common IB technical question—with the structure and details that impress interviewers.",category:"Technical",readTime:"12 min read",publishedAt:"2026-01-13",content:`
"Walk me through a DCF" is the single most asked technical question in investment banking interviews. It's so common that interviewers can tell within 30 seconds whether you actually understand valuation or just memorized a script.

Here's how to answer it properly—with the depth that separates strong candidates from average ones.

## The 60-Second Answer

For initial screens, you need a concise version:

> "A DCF values a company based on the present value of its future cash flows.
>
> First, I project unlevered free cash flows for 5-10 years. That's EBIT times one minus the tax rate, plus depreciation and amortization, minus capital expenditures, minus changes in net working capital.
>
> Second, I calculate the terminal value—either using a perpetuity growth method or an exit multiple.
>
> Third, I discount both the projected cash flows and terminal value back to present value using WACC.
>
> Finally, I sum those present values to get enterprise value, then subtract net debt to get equity value."

That's your foundation. But interviewers will dig deeper.

## The Full Framework (For Follow-Up Questions)

### Step 1: Project Unlevered Free Cash Flows

**The formula:**
UFCF = EBIT \xd7 (1 - Tax Rate) + D&A - CapEx - ΔNWC

**Why unlevered?**
We use unlevered (debt-free) cash flows because we're valuing the entire enterprise, not just equity. Debt and interest are captured in the discount rate (WACC).

**Projection period:**
Typically 5-10 years. Use 5 years for stable companies, longer for high-growth businesses that need more time to reach steady state.

**Key drivers to model:**
- Revenue growth rate
- EBITDA margins (or individual expense items)
- D&A as % of revenue or CapEx
- CapEx as % of revenue
- NWC as % of revenue

### Step 2: Calculate Terminal Value

Two methods—know both:

**Perpetuity Growth Method:**
TV = (Final Year FCF \xd7 (1 + g)) / (WACC - g)

Where g = long-term growth rate (typically 2-3%, roughly GDP growth)

**Exit Multiple Method:**
TV = Final Year EBITDA \xd7 Exit Multiple

The exit multiple is usually based on current trading multiples for comparable companies.

**Which to use?**
Most bankers calculate both and use them as a sanity check. If they give wildly different answers, reexamine your assumptions.

### Step 3: Calculate WACC

**The formula:**
WACC = (E/V \xd7 Cost of Equity) + (D/V \xd7 Cost of Debt \xd7 (1 - Tax))

**Cost of Equity (via CAPM):**
Cost of Equity = Risk-Free Rate + β \xd7 Market Risk Premium

- Risk-free rate: 10-year Treasury yield
- Beta: Measure of stock volatility vs. market (levered beta from comps, unlever/relever as needed)
- Market risk premium: Typically 5-7%

**Cost of Debt:**
The company's current borrowing rate, tax-affected since interest is deductible.

### Step 4: Discount to Present Value

**Formula:**
PV = CF / (1 + WACC)^n

Apply to each year's projected cash flow and to the terminal value.

### Step 5: Bridge to Equity Value

**Enterprise Value** = Sum of PV of projected cash flows + PV of terminal value

**Equity Value** = Enterprise Value - Net Debt - Preferred Stock - Minority Interest + Cash

**Implied Share Price** = Equity Value / Diluted Shares Outstanding

## Common Follow-Up Questions

### "What discount rate do you use and why?"

> "WACC, because we're discounting unlevered free cash flows which are available to all capital providers—both debt and equity. WACC weights each source of capital by its proportion in the capital structure and cost."

### "What growth rate do you use for terminal value?"

> "Typically 2-3%, roughly in line with long-term GDP growth. A company can't grow faster than the economy in perpetuity—if it did, it would eventually become the entire economy. For inflation-protected analysis, you might use 0-1% real growth."

### "Why is terminal value often such a large percentage of total value?"

> "Because we're projecting explicit cash flows for only 5-10 years, but the terminal value captures all value creation beyond that. For mature companies, terminal value often represents 60-80% of total DCF value. This is why terminal value assumptions are so critical and why we sensitize them."

### "Walk me through how changes in working capital affect the DCF."

> "Net working capital represents cash tied up in operations—inventory, receivables, payables. If NWC increases, that's cash being invested in operations, so we subtract it. If NWC decreases, cash is being released, so it's additive to free cash flow.
>
> For example, if a company grows revenue but needs more inventory to support that growth, NWC increases and FCF decreases relative to EBITDA."

### "What are the limitations of a DCF?"

> "The DCF is highly sensitive to assumptions—small changes in discount rate or terminal growth can swing value significantly. It relies on accurate projections of future cash flows, which are inherently uncertain. It also doesn't capture real-time market sentiment, which is why we use DCF alongside trading comps and transaction comps for triangulation."

## Sensitivity Analysis

Always be prepared to discuss sensitivity. Key sensitivities include:

- Terminal growth rate vs. WACC
- WACC vs. revenue growth
- EBITDA margin assumptions
- Exit multiple (if using exit method)

Understanding what drives value changes shows you truly understand the model, not just the mechanics.

---

*Want to master all 400+ technical questions? Get the [Finance Technical Interview Guide](/playbooks/ib-technical-guide).*

*Need to build actual DCF models? Our [LBO Modeling Crash Course](/playbooks/lbo-modeling-course) includes model templates.*
    `},{slug:"investment-banking-exit-opportunities-explained",title:"Investment Banking Exit Opportunities: Complete Guide to What Comes Next",summary:"PE, hedge funds, corporate development, startups—every IB exit path explained with realistic timelines and requirements.",category:"Career Strategy",readTime:"15 min read",publishedAt:"2026-01-11",content:`
One of the main reasons people endure investment banking's brutal hours is the exit opportunities. Two years as an analyst opens doors that would otherwise take a decade—or never open at all.

But not all exits are created equal, and the path to each is different. Here's the complete breakdown.

## The Major Exit Paths

### Private Equity

**What it is:** Investing in companies using leverage, improving operations, and selling for a profit.

**Why bankers want it:** Higher compensation, more ownership of deals, "investor" rather than "advisor" role.

**Timeline:** Most PE recruiting happens during your first year in banking (yes, that early). On-cycle recruiting for megafunds can start within months of starting your analyst role.

**Requirements:**
- Strong deal experience (M&A, LBO transactions preferred)
- Top-tier bank or strong group (sponsors coverage is ideal)
- Technical excellence—LBO modeling must be second nature
- Ability to perform under pressure (48-hour recruiting cycles)

**Compensation:** First-year PE associates typically earn $150-200K base + bonus, with total comp of $300-400K+. At megafunds like Apollo, KKR, and Blackstone, all-in comp can exceed $400K.

**Realistic for:** Analysts at strong banks with solid deal experience. Harder from middle-market banks without networking.

*Deep dive: The [2026 PE Recruiting Playbook](/playbooks/pe-recruiting-playbook) covers the complete recruiting system—headhunter landscape, technical mastery, firm selection, and compensation data.*

### Hedge Funds

**What it is:** Managing capital to generate returns through various strategies (long/short equity, event-driven, macro, etc.).

**Why bankers want it:** Intellectually stimulating, potential for high compensation, less hierarchy than PE.

**Timeline:** More varied than PE. Some funds recruit aggressively in Year 1-2; others hire opportunistically.

**Requirements:**
- Investment acumen—you need to prove you can pick stocks
- A polished stock pitch (long and short)
- Strong understanding of market dynamics
- Ability to articulate differentiated views

**Compensation:** Highly variable. Junior roles: $200-400K. Upside unlimited for top performers.

**Realistic for:** Analytically-minded bankers who've demonstrated investment interest (personal trading, stock pitch competitions, etc.).

### Corporate Development

**What it is:** In-house M&A at a corporation—evaluating acquisitions, divestitures, and strategic partnerships.

**Why bankers want it:** Better hours (50-60/week), deal exposure without client service, clear path to senior roles.

**Timeline:** Hiring happens year-round, often after 2+ years of banking.

**Requirements:**
- M&A experience strongly preferred
- Industry expertise can be valuable (tech bankers → tech corp dev)
- Strong modeling skills
- Ability to work cross-functionally

**Compensation:** $150-250K total comp for most roles; lower than PE but better lifestyle.

**Realistic for:** Analysts who want deal exposure without PE hours. Very accessible exit.

### Growth Equity / Venture Capital

**What it is:** Investing in high-growth companies, typically with minority stakes and less leverage than traditional PE.

**Why bankers want it:** Exposure to innovative companies, often better culture than traditional PE.

**Timeline:** Less structured than PE recruiting. Network-driven.

**Requirements:**
- Genuine interest in technology/growth sectors
- Often requires relevant sector coverage experience
- Strong modeling skills
- Thesis-driven thinking

**Compensation:** Similar to PE at junior levels; more variable at senior levels.

**Realistic for:** Tech/healthcare/consumer bankers with genuine interest in growth investing.

### Startups / Operating Roles

**What it is:** Joining a startup in a finance, strategy, or operations role.

**Why bankers want it:** Ownership, potential for equity upside, more varied work.

**Timeline:** Anytime, but more common after 2-3 years.

**Requirements:**
- Comfort with ambiguity
- Willingness to wear multiple hats
- Usually some sector connection or interest

**Compensation:** Lower cash ($100-180K), but equity can be meaningful if the company succeeds.

**Realistic for:** Bankers who want ownership and are comfortable with risk.

### Business School (MBA)

**What it is:** Taking 2 years to reset your career trajectory.

**Why bankers consider it:** Career pivot, network building, credential acquisition.

**Timeline:** Typically after 3-5 years of work experience.

**Requirements:**
- Strong GMAT (720+)
- Compelling story for why MBA
- Clear post-MBA goals

**Compensation:** Negative during school; significant debt. Post-MBA paths vary.

**Realistic for:** Bankers who want to pivot industries or need an MBA for their target role (some consulting firms, certain corp dev roles, etc.).

## Exit Timing: When to Move

**After Year 1:** Rare, but possible for top performers at top banks targeting PE.

**After Year 2:** The sweet spot for PE and hedge fund exits. You have enough experience to be useful but aren't "too senior."

**After Year 3:** Good for corporate development, growth equity, or roles requiring more experience. PE recruiting becomes harder.

**After Year 4+:** At this point, you're likely promoting to Associate. Exits narrow; MBA becomes more relevant.

## What Actually Determines Your Exit Options

### Bank Prestige
Bulge brackets and elite boutiques open more doors than middle-market banks. It's not fair, but it's reality.

### Group Matters
M&A and sponsors coverage groups have the best PE placement. Industry groups (tech, healthcare) align with sector-specific funds and corp dev.

### Your Deal Experience
Closed transactions matter more than pitches. Live deals you can discuss in detail are your currency.

### Networking
Especially for hedge funds and less-structured paths, relationships matter as much as credentials.

### Technical Skills
PE and hedge fund interviews will test you rigorously. Your banking skills need to be sharp.

## The Path Not Taken: Staying in Banking

Not everyone exits. The banking career path:
- Analyst (2-3 years)
- Associate (3-4 years)
- VP (3-4 years)
- Director/ED (2-4 years)
- Managing Director

MD compensation can exceed $1M annually, but you're managing client relationships, not doing analysis. Some people love it.

---

*Preparing for PE interviews? Our [PE Recruiting Playbook](/playbooks/pe-recruiting-playbook) covers everything from headhunter strategy to case studies.*

*Targeting hedge funds? Start with a strong stock pitch using our [Stock Pitch Template & Examples](/playbooks/stock-pitch-guide).*
    `},{slug:"bulge-bracket-vs-elite-boutique-vs-middle-market",title:"Bulge Bracket vs Elite Boutique vs Middle Market Banks: Which Is Right for You?",summary:"Honest comparison of bank types—pay, hours, deal experience, exits, and culture differences that actually matter.",category:"Career Strategy",readTime:"12 min read",publishedAt:"2026-01-09",content:`
Not all investment banks are the same. The experience at Goldman Sachs is fundamentally different from Evercore, which is different from William Blair. Understanding these differences helps you target the right banks and set realistic expectations.

Here's the honest comparison.

## The Three Tiers

### Bulge Bracket Banks

**Who:** Goldman Sachs, Morgan Stanley, JP Morgan, Bank of America, Citi, Barclays, UBS, Deutsche Bank

**What they are:** Full-service global banks with investment banking, sales & trading, research, and asset management divisions.

**Key characteristics:**
- Largest deal flow by volume
- Most diverse product and industry coverage
- Strongest brand recognition globally
- Most structured training programs
- Largest analyst classes (less individual attention)

### Elite Boutiques

**Who:** Evercore, Lazard, Centerview, PJT Partners, Moelis, Qatalyst, Perella Weinberg

**What they are:** Advisory-focused firms specializing in M&A and restructuring without trading or lending businesses.

**Key characteristics:**
- Focus purely on advisory (no conflicts from lending relationships)
- Often work on the largest, most complex transactions
- Smaller teams = more responsibility earlier
- Perceived prestige equal to or exceeding bulge brackets for M&A
- Higher average pay at most levels

### Middle Market Banks

**Who:** William Blair, Baird, Piper Sandler, Jefferies (straddles MM/BB), Harris Williams, Lincoln International

**What they are:** Banks focusing on transactions typically below $1B, often with sector specialization.

**Key characteristics:**
- More hands-on deal experience
- Often better training and mentorship (smaller teams)
- Stronger regional presence
- Less brand recognition outside finance
- Solid exits, though more work required for megafund PE

## Head-to-Head Comparison

### Compensation

| Level | Bulge Bracket | Elite Boutique | Middle Market |
|-------|---------------|----------------|---------------|
| Analyst 1 | $200-250K | $220-280K | $170-220K |
| Analyst 2 | $235-290K | $260-320K | $200-260K |
| Associate 1 | $275-350K | $300-400K | $225-300K |

**Winner:** Elite boutiques typically pay 10-20% more than bulge brackets, particularly in bonus. Middle market pays less but offers other advantages.

### Hours and Lifestyle

**Bulge Brackets:** 80-100 hours/week is standard. Large deal teams can mean less face time with seniors, but also potential to "hide" on slow weeks.

**Elite Boutiques:** Similar hours to bulge brackets, often more intense due to leaner staffing. Fewer places to hide.

**Middle Market:** Generally 70-85 hours/week. Still demanding, but often more predictable and slightly more humane.

**Winner:** Middle market, marginally. But none of these are "lifestyle" jobs.

### Training and Development

**Bulge Brackets:** Formal training programs lasting 4-8 weeks. Structured curriculum, professional instruction. Large analyst classes mean less individual attention.

**Elite Boutiques:** Training varies by firm. Some have strong programs; others rely on learning by doing. Smaller classes mean more partner exposure.

**Middle Market:** Often excellent training because you're thrown into deals faster. More hands-on learning. Mentorship can be stronger due to smaller teams.

**Winner:** Depends on learning style. Bulge brackets for structured learning; middle market for hands-on experience.

### Deal Experience

**Bulge Brackets:** Work on the largest deals but often in narrow roles (you might only touch the model or only the deck). May take longer to get full deal exposure.

**Elite Boutiques:** Work on large, complex M&A. Leaner staffing means more responsibility and visibility into the full deal process.

**Middle Market:** Work on smaller deals end-to-end. You'll likely run entire workstreams as a junior analyst. Breadth of exposure is excellent.

**Winner:** For learning, middle market and elite boutiques. For resume bragging rights, elite boutiques and bulge brackets.

### Exit Opportunities

**Bulge Brackets:** Strong exits to PE, HF, corp dev. Brand recognition opens doors. However, your experience may be narrower than expected.

**Elite Boutiques:** Excellent PE placement, often competitive with bulge brackets for megafunds. M&A focus aligns perfectly with PE needs.

**Middle Market:** Good exits to middle-market PE, growth equity, and corp dev. Harder (not impossible) to break into megafund PE without extra networking.

**Winner:** Elite boutiques for PE exits. Bulge brackets for breadth of options. Middle market requires more hustle but offers solid paths.

### Culture and People

**Bulge Brackets:** Varies dramatically by group. Large organizations mean bureaucracy. Culture depends heavily on your immediate team.

**Elite Boutiques:** Generally more entrepreneurial. Partners are more accessible. Can feel higher pressure due to smaller teams.

**Middle Market:** Often the strongest cultures. More collegial, better mentorship, less "prestige obsession." People who work there often genuinely prefer it.

**Winner:** Subjective, but many would say middle market or elite boutiques.

## Which Should You Target?

### Target Bulge Brackets If:
- You want maximum optionality post-banking
- Brand recognition matters for your long-term goals
- You're unsure what you want and want to explore
- You got into a top program and want to keep options open

### Target Elite Boutiques If:
- You're certain you want to do M&A advisory
- You want to maximize compensation
- You thrive in leaner, high-pressure environments
- PE is your primary exit goal

### Target Middle Market If:
- You want the best hands-on learning experience
- Work-life balance (relatively) matters to you
- You're targeting middle-market PE or corp dev
- Culture and mentorship are priorities
- You're from a non-target school (often more accessible)

## The Honest Truth

The "best" bank is the one that aligns with your goals and actually gives you an offer. Don't turn down Harris Williams to hold out for Goldman—the experience at Harris Williams might be better for your development anyway.

Prestige matters less than people think. What matters is what you learn, what deals you work on, and how you leverage that experience for your next move.

---

*Preparing for banking interviews? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers questions asked at all bank tiers.*

*Need networking help? The [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook) has templates for reaching bankers at any firm.*
    `},{slug:"investment-banking-superday-what-to-expect",title:"Investment Banking Superday: What to Expect and How to Prepare",summary:"Hour-by-hour breakdown of Superdays—what they test, how to prepare, and strategies for back-to-back interviews.",category:"Interviews",readTime:"10 min read",publishedAt:"2026-01-06",content:`
You survived the phone screens and first rounds. Now comes the Superday—the final stage where banks make their hiring decisions. Everything you've worked for comes down to this one day of back-to-back interviews.

Here's exactly what to expect and how to maximize your chances.

## What Is a Superday?

A Superday is the final round of investment banking interviews, typically consisting of 4-6 back-to-back interviews at the bank's office. Each interview runs 30-45 minutes, and you'll meet people ranging from analysts to managing directors.

**Why "Superday"?**
Because the bank compresses all final interviews into a single (super long) day, then makes decisions quickly—often within 24-48 hours.

## The Typical Superday Structure

**8:30 AM:** Arrive at the office. Check in with HR/recruiting. Wait in a conference room with other candidates.

**9:00 AM - 12:30 PM:** First 3-4 interviews. Mix of analysts/associates and VPs/Directors.

**12:30 PM:** Lunch (usually with junior bankers—this is still an interview, stay engaged).

**1:30 PM - 4:00 PM:** Remaining 2-3 interviews. Often includes at least one senior MD.

**4:00 PM:** Wrap-up with recruiting. They may tell you next steps or timeline.

## What Each Interviewer Tests

### Analyst/Associate Interviews
- Technical questions (DCF, accounting, LBO basics)
- "Fit" and culture assessment
- "Would I want to work with this person at 2 AM?"
- Often more conversational; they're evaluating peer compatibility

### VP/Director Interviews
- Deeper technical questions
- Deal discussions and market knowledge
- Your understanding of the role and industry
- Professional maturity and communication skills

### MD Interviews
- High-level fit and "airport test"
- Your story and motivations
- Market awareness and intellectual curiosity
- Senior presence—do you seem like someone who could be client-facing?

## The Questions You'll Face

### Behavioral/Fit Questions (Every Interview)
- Walk me through your resume
- Why investment banking?
- Why this bank?
- Tell me about a time you worked on a team
- What's a challenging situation you navigated?
- Why should we hire you?

### Technical Questions (Most Interviews)
- Walk me through a DCF
- Walk me through the three financial statements
- How does depreciation affect the statements?
- What's the difference between enterprise value and equity value?
- Tell me about a recent deal you found interesting
- Walk me through an LBO

### Market/Deal Questions (Especially Senior Interviews)
- What's happening in the markets right now?
- Tell me about a recent M&A deal
- Why do companies do M&A?
- What makes a good LBO candidate?
- Where do you see interest rates going?

## How to Prepare

### The Week Before

**Technical review:**
- Drill accounting questions until automatic
- Practice DCF walkthrough (you'll do this multiple times)
- Review recent deals in your target sectors
- Refresh on any deals or experience on your resume

**Behavioral prep:**
- Have 3-4 "STAR method" stories ready
- Practice "walk me through your resume" (2 minutes, max)
- Research the bank's recent deals and news
- Prepare thoughtful questions for each interviewer level

**Logistics:**
- Confirm interview location and time
- Plan your route (arrive 20+ minutes early)
- Prepare your outfit (conservative suit, nothing flashy)
- Print extra resume copies

### The Night Before

- Light review, no new material
- Set multiple alarms
- Lay out your outfit
- Get 7-8 hours of sleep (seriously)
- No alcohol

### The Morning Of

- Eat a solid breakfast (protein-focused, avoid sugar crash)
- Review your key talking points
- Read the morning news/markets
- Arrive 20 minutes early

## During the Superday

### Energy Management

You'll do 4-6 interviews back-to-back. This is exhausting. Strategies:

- **Bring a water bottle.** Stay hydrated.
- **Use bathroom breaks** to reset mentally.
- **Don't let a tough interview affect the next one.** Compartmentalize.
- **Maintain consistent energy** even as you get tired.

### Reading the Room

Each interviewer has a different style. Adapt:

- **Formal interviewer:** Keep answers structured and professional
- **Casual interviewer:** Be personable while staying sharp
- **Technical griller:** Be precise, show your thinking process
- **Conversational MD:** Let the conversation flow naturally

### If You Don't Know an Answer

It will happen. How you handle it matters:

> "I'm not certain, but my instinct is [X]. Can you help me think through it?"

> "I haven't encountered that specific scenario, but based on [principle], I would approach it by..."

Never bullshit. Interviewers respect intellectual honesty.

## The Lunch Interview

Yes, lunch with junior bankers is still an interview. They will report back on you.

**Do:**
- Be friendly and engaged
- Ask thoughtful questions about their experience
- Eat something (don't just push food around)
- Show genuine interest in their path

**Don't:**
- Complain about anything
- Be overly formal or stiff
- Dominate the conversation
- Order anything messy or difficult to eat

## Closing Strong

In your final interview (usually with a senior person):

- Reiterate your enthusiasm for the bank
- Ask a thoughtful question that shows you've been engaged all day
- Thank them for their time sincerely

After the Superday, send a thank-you email to each interviewer (get business cards or email names from HR).

## After the Superday

**Timeline:** Decisions typically come within 24-72 hours. Some banks are faster.

**If you get an offer:** You may have limited time to decide. Know your priorities in advance.

**If you don't hear back:** It's okay to follow up with HR after 3-4 business days.

**If you get rejected:** It happens to most candidates at some point. Learn from it and move forward.

---

*Want hour-by-hour preparation and stress management strategies? Get [The Superday Survival Guide](/playbooks/superday-survival-guide).*

*Need to brush up on technicals? The [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers every question you'll face.*
    `},{slug:"how-to-lateral-from-big-4-to-investment-banking",title:"How to Lateral from Big 4 to Investment Banking (TAS, Audit, Advisory)",summary:"The realistic path from Deloitte, PwC, EY, or KPMG into IB—timeline, positioning, and what actually gets you hired.",category:"Recruiting",readTime:"12 min read",publishedAt:"2026-01-04",content:`
The Big 4 to investment banking pipeline is real—but it's not automatic. Thousands of people work at Deloitte, PwC, EY, and KPMG hoping to lateral into banking, but only a fraction actually make the move.

Here's exactly how to position yourself for success.

## The Reality Check

**Good news:** Big 4 experience, especially in Transaction Advisory Services (TAS), is a legitimate path to investment banking. Banks hire laterals from Big 4 regularly.

**Reality:** It's competitive. You're competing against other Big 4 laterals and against people who took the direct banking path. You need a clear strategy.

## Which Big 4 Roles Transition Best?

### Tier 1: Transaction Advisory Services (TAS/Deals)

**Groups:** Financial Due Diligence, M&A Advisory, Valuation, Transaction Services

**Why it works:** You're already doing deal-adjacent work. FDD analysts review financials for PE and strategic acquirers. You understand deal processes, work with bankers, and have exposure to transaction dynamics.

**Placement rate:** Highest among Big 4 roles. Banks actively recruit from TAS.

### Tier 2: Restructuring

**Why it works:** Restructuring is a specialized, high-demand skill. Banks with RX groups (Houlihan Lokey, PJT, Lazard) recruit from Big 4 restructuring practices.

**Placement rate:** Good, especially for RX-specific banking roles.

### Tier 3: Corporate Finance / M&A Advisory

**Why it works:** Some Big 4 offices have small M&A advisory practices that work on middle-market deals. This is closest to actual banking work.

**Placement rate:** Good, but these groups are smaller.

### Tier 4: Valuations

**Why it works:** You understand valuation methodologies, model regularly, and work on transaction-related projects.

**Placement rate:** Moderate. Banks see it as relevant but not as deal-focused as TAS.

### Tier 5: Audit and Tax

**Reality:** This is a harder transition. Audit and tax are valuable skills, but they're further from deal execution.

**Path:** Usually requires moving to TAS first, then to banking. Direct audit-to-IB moves are rare (though not impossible for exceptional candidates).

## The Timeline

**Year 1 at Big 4:** Learn the job, perform well, build your skills. Start networking with bankers casually.

**Year 1.5 - 2:** Begin active networking for banking roles. Target middle-market banks and banks that hire laterals. Apply to off-cycle openings.

**Year 2 - 3:** This is the optimal window. You have enough experience to be useful but aren't too senior to start as an Analyst 1.

**Year 3+:** Still possible, but you may come in as a more senior analyst or need to consider the Associate path (possibly via MBA).

## Positioning Your Experience

### How to Talk About Big 4 on Your Resume

**Don't:** "Performed financial due diligence on various transactions"

**Do:** "Executed financial due diligence on 12+ M&A transactions totaling $3B+ in enterprise value across technology and healthcare sectors"

**Emphasize:**
- Number of deals
- Deal sizes (be accurate)
- Industries covered
- Specific skills: modeling, analysis, presentations
- Any client-facing work

### How to Talk About Big 4 in Interviews

**Common question:** "Why didn't you go directly into banking?"

**Good answer:**
> "When I was graduating, I was interested in finance but not certain banking was the right fit. I chose TAS because it offered deal exposure while I confirmed my interest. After two years of working closely with bankers on transactions, I'm certain I want to be on the advisory side executing deals rather than supporting them."

**Avoid:**
- "I couldn't get a banking offer out of school" (even if true)
- "I wanted better work-life balance initially" (signals you might not want IB hours)
- Anything that suggests banking is a backup plan

## The Networking Strategy

### Who to Target

1. **Big 4 alumni now in banking** — They understand your background and can advocate
2. **Bankers at firms that hire laterals** — Middle-market banks, some boutiques
3. **Headhunters** — Some specialize in Big 4 to banking moves

### What to Say

> "I'm currently in [Group] at [Big 4 firm], working on [type of transactions]. I'm looking to transition to investment banking and would love to learn more about your experience making a similar move / about opportunities at [Bank]."

### Volume

Plan for 50+ outreach emails and 25+ networking calls. Big 4 to banking is competitive—you need advocates.

## Which Banks Hire from Big 4?

**Most receptive:**
- Middle-market banks (William Blair, Baird, Piper Sandler)
- Sector-specific boutiques (especially if you have industry expertise)
- Some bulge bracket groups (varies by office and need)

**Less common but possible:**
- Elite boutiques (Evercore, Lazard, etc.) — Harder, but happens
- Bulge bracket "name" groups — Competitive, but Big 4 isn't disqualifying

**Strategy:** Cast a wide net. Don't only target Goldman Sachs—you'll have better odds at middle-market banks, and the experience can be excellent.

## The Technical Bar

Banks expect Big 4 laterals to be technically sharp. You should know:

- Three-statement modeling cold
- DCF methodology inside and out
- Comparable company analysis
- Precedent transaction analysis
- Basic LBO concepts

**The edge Big 4 gives you:** You've seen deal processes from the FDD side. You understand what matters in diligence. Use this in interviews.

## Common Mistakes

**Waiting too long:** The optimal window is Year 2-3. Don't get comfortable and miss it.

**Only applying online:** Online applications from Big 4 rarely work. You need referrals.

**Underselling your experience:** Big 4 TAS is legitimate deal experience. Own it.

**Only targeting bulge brackets:** Middle-market banks offer excellent paths and are more accessible.

**Not preparing technically:** Banks will test you. Being from Big 4 doesn't excuse technical weakness.

---

*Ready to nail banking interviews? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers every question you'll face.*

*Need help positioning your Big 4 experience? A [Professional Resume Review](/resume-services) can help you frame your background for banking.*
    `},{slug:"accretion-dilution-interview-question-explained",title:"Accretion/Dilution Interview Question: How to Answer Perfectly",summary:"Master the M&A technical question that trips up most candidates—with quick rules and example walkthroughs.",category:"Technical",readTime:"8 min read",publishedAt:"2026-01-03",content:`
"Is this deal accretive or dilutive?" is a classic M&A technical question that tests whether you understand merger mechanics. It sounds complicated, but once you understand the logic, it becomes straightforward.

Here's exactly how to think about it.

## What Accretion/Dilution Means

When Company A acquires Company B, the combined company has a new earnings per share (EPS). 

- **Accretive:** The combined EPS is higher than Company A's standalone EPS
- **Dilutive:** The combined EPS is lower than Company A's standalone EPS

That's it. The question is simply: Does the acquisition increase or decrease EPS for the acquirer's shareholders?

## The Quick Rule (Memorize This)

**For all-stock deals:**

If Acquirer P/E > Target P/E → Accretive
If Acquirer P/E < Target P/E → Dilutive

**Why this works:**

P/E ratio = Price / Earnings. A higher P/E means you're "paying" with expensive currency (your highly-valued stock). If your P/E is 20x and you buy a company at 15x, you're buying earnings "cheaper" than your own—accretive.

## The 60-Second Interview Answer

> "To determine if a deal is accretive or dilutive, I compare the acquirer's P/E ratio to the effective P/E being paid for the target.
>
> In an all-stock deal, if the acquirer's P/E is higher than the target's implied P/E, the deal is likely accretive because you're using expensive currency to buy cheaper earnings.
>
> For cash deals, I compare the target's earnings yield to the after-tax cost of debt. If earnings yield exceeds the interest cost, cash deals tend to be accretive.
>
> For mixed consideration, I'd build out the full merger model considering all sources of financing, synergies, and transaction adjustments."

## Walking Through an Example

**Scenario:**
- Acquirer (Company A): Stock price $50, EPS $2.50 → P/E of 20x
- Target (Company B): Stock price $30, EPS $3.00 → P/E of 10x
- All-stock deal at current market prices

**Analysis:**

Acquirer P/E (20x) > Target P/E (10x) → **Likely Accretive**

**Intuition:** Company A is paying with stock that the market values at 20x earnings to buy a company trading at 10x earnings. The target's earnings are "cheaper" than the acquirer's, so adding them increases combined EPS.

## The Full Calculation

For interviews, you should be able to walk through the actual math:

**Step 1: Calculate shares issued**
If Company A pays $30 per share (in stock) for Company B, and Company B has 100 million shares:
- Total deal value = $30 \xd7 100M = $3 billion
- New shares issued = $3B \xf7 $50 (A's stock price) = 60 million shares

**Step 2: Calculate pro forma earnings**
- Company A earnings: $2.50 \xd7 400M shares = $1,000M
- Company B earnings: $3.00 \xd7 100M shares = $300M
- Combined earnings (before adjustments): $1,300M

**Step 3: Calculate pro forma EPS**
- Pro forma shares: 400M + 60M = 460M
- Pro forma EPS: $1,300M \xf7 460M = $2.83
- Standalone EPS was $2.50 → **Accretive by $0.33 or 13%**

## What About Cash Deals?

For cash acquisitions, the analysis is different:

**Compare:**
- Target's earnings yield (EPS / Price = 1/P/E)
- After-tax cost of debt (Interest Rate \xd7 (1 - Tax Rate))

**Rule:**
- If earnings yield > after-tax cost of debt → Accretive
- If earnings yield < after-tax cost of debt → Dilutive

**Example:**
- Target P/E = 10x → Earnings yield = 10%
- Interest rate = 6%, tax rate = 25% → After-tax cost = 4.5%
- 10% > 4.5% → **Accretive**

**Intuition:** You're borrowing money at 4.5% (after tax) to buy earnings yielding 10%. You're earning more than you're paying.

## Common Follow-Up Questions

### "What about synergies?"

> "Synergies improve accretion/dilution. If you achieve cost or revenue synergies, combined earnings increase, making the deal more accretive (or less dilutive). When modeling, I'd add expected synergies (usually phased in over 2-3 years) to the earnings calculation."

### "What about the premium?"

> "The premium affects the implied P/E you're paying for the target. If the target trades at 10x but you pay a 30% premium, you're effectively paying 13x. This makes the deal less accretive compared to paying market price."

### "Why would a company do a dilutive deal?"

> "Companies may accept short-term dilution for long-term strategic value. Reasons include: (1) Expected synergies that materialize over time, (2) Strategic benefits like market position, technology, or talent, (3) Blocking a competitor from acquiring the target. Management typically commits to the deal being accretive within 1-3 years once synergies are realized."

### "What adjustments do you make in a merger model?"

> "Key adjustments include: (1) New interest expense if using debt, (2) Lost interest income on cash used, (3) New shares issued if using stock, (4) D&A from asset write-ups, (5) Synergies, (6) One-time transaction costs. Each affects pro forma earnings and therefore accretion/dilution."

## The One Mistake Everyone Makes

Don't confuse "accretive" with "good deal."

A deal can be accretive and still be a terrible acquisition. Accretion just means EPS goes up in the short term. It doesn't mean:
- You paid a fair price
- The strategic rationale is sound
- Long-term value is created

Similarly, dilutive deals can be excellent if the strategic benefits outweigh the near-term EPS impact.

---

*Want to master all M&A technicals? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers merger models, deal mechanics, and 400+ questions.*

*Need to build actual merger models? Check out the [LBO Modeling Crash Course](/playbooks/lbo-modeling-course) for hands-on practice.*
    `},{slug:"paper-lbo-interview-example",title:"Paper LBO Example: How to Solve It in 10 Minutes (With Practice Problems)",summary:"Step-by-step framework for solving paper LBOs by hand—the exact method that works in PE interviews.",category:"Technical",readTime:"10 min read",publishedAt:"2026-01-01",content:`
The paper LBO is a staple of private equity interviews. You're given basic information about a deal and asked to calculate returns—without Excel. It tests whether you truly understand LBO mechanics or just know how to follow a template.

Here's the framework that works.

## What Is a Paper LBO?

A paper LBO is a simplified leveraged buyout analysis done with pen and paper (or mental math). You're typically given:
- Purchase price or EBITDA multiple
- EBITDA (and sometimes growth rate)
- Debt/equity split
- Hold period
- Exit multiple

You calculate IRR and/or MOIC.

## The 5-Step Framework

### Step 1: Calculate Entry Value and Structure

**Given:** Company has $100M EBITDA, purchased at 10x EBITDA with 60% debt / 40% equity.

**Calculate:**
- Enterprise Value = $100M \xd7 10x = **$1,000M**
- Debt = $1,000M \xd7 60% = **$600M**
- Equity = $1,000M \xd7 40% = **$400M**

### Step 2: Project EBITDA at Exit

**Given:** 5-year hold, EBITDA grows 5% annually.

**Calculate:**
- Year 5 EBITDA = $100M \xd7 (1.05)^5 = **$127.6M**

**Shortcut:** 5% growth for 5 years ≈ 28% total growth. $100M \xd7 1.28 = $128M (close enough).

### Step 3: Calculate Exit Value

**Given:** Exit at 10x EBITDA (same as entry).

**Calculate:**
- Exit Enterprise Value = $127.6M \xd7 10x = **$1,276M**

### Step 4: Calculate Equity Proceeds

**Assumption:** Debt remains constant (no paydown) for simplicity. Many paper LBOs assume this or give you the debt paydown.

**Calculate:**
- Equity Value at Exit = $1,276M - $600M = **$676M**

**If debt paydown is given:**
- Assume $100M debt paid down → Remaining debt = $500M
- Equity Value = $1,276M - $500M = **$776M**

### Step 5: Calculate Returns

**MOIC (Multiple of Invested Capital):**
- MOIC = Exit Equity / Entry Equity = $676M / $400M = **1.69x**

**IRR (Internal Rate of Return):**
Use the "Rule of 72" for quick estimates:
- 2x in 5 years ≈ 72/5 = **~14-15% IRR**
- 1.69x is less than 2x, so IRR is below 15%

**More precise:** 1.69x over 5 years → IRR ≈ **11%**

## Quick IRR Rules (Memorize These)

| MOIC | 3 Years | 4 Years | 5 Years | 6 Years | 7 Years |
|------|---------|---------|---------|---------|---------|
| 1.5x | 14% | 11% | 8% | 7% | 6% |
| 2.0x | 26% | 19% | 15% | 12% | 10% |
| 2.5x | 36% | 26% | 20% | 16% | 14% |
| 3.0x | 44% | 32% | 25% | 20% | 17% |

**The Rules:**
- Rule of 72: Double your money → IRR ≈ 72 \xf7 years
- Rule of 114: Triple your money → IRR ≈ 114 \xf7 years
- Rule of 144: Quadruple your money → IRR ≈ 144 \xf7 years

## The Three Value Drivers

LBO returns come from three sources. Understand these to sanity-check your work:

### 1. EBITDA Growth
Growing the business increases exit value.

### 2. Multiple Expansion
Exiting at a higher multiple than entry increases value. (Note: Assuming constant multiple is conservative.)

### 3. Debt Paydown
Paying down debt transfers value from debtholders to equity.

**In our example:**
- Entry equity: $400M
- Exit equity: $676M
- Value created: $276M
  - From EBITDA growth: $276M (all of it, since no multiple expansion or debt paydown)

## Practice Problem #1

**Given:**
- EBITDA: $50M
- Purchase multiple: 8x
- Debt: 50% of purchase price
- Hold period: 4 years
- EBITDA grows to $65M
- Exit multiple: 8x
- Debt paid down by $50M

**Solve for MOIC and IRR.**

**Solution:**
1. Entry EV = $50M \xd7 8 = $400M
2. Entry Debt = $200M, Entry Equity = $200M
3. Exit EBITDA = $65M (given)
4. Exit EV = $65M \xd7 8 = $520M
5. Exit Debt = $200M - $50M = $150M
6. Exit Equity = $520M - $150M = $370M
7. MOIC = $370M / $200M = **1.85x**
8. IRR: 1.85x over 4 years ≈ **16-17%** (between 1.5x/11% and 2x/19%)

## Practice Problem #2

**Given:**
- Purchase price: $500M
- Entry EBITDA: $50M (implies 10x entry multiple)
- 5-year hold
- EBITDA grows 10% per year
- Exit multiple: 9x (compression)
- Debt: $300M at entry, paid down to $200M at exit
- Equity: $200M at entry

**Solve for MOIC and IRR.**

**Solution:**
1. Exit EBITDA = $50M \xd7 (1.10)^5 = $80.5M (or estimate: 50% growth → $75M)
2. Exit EV = $80.5M \xd7 9 = $724.5M
3. Exit Debt = $200M
4. Exit Equity = $724.5M - $200M = $524.5M
5. MOIC = $524.5M / $200M = **2.6x**
6. IRR: 2.6x over 5 years ≈ **21%** (between 2.5x/20% and 3x/25%)

## Common Interview Variations

### "What if we achieve cost synergies?"
Add synergies to EBITDA before calculating exit value.

### "What if we pay down debt from cash flow?"
Estimate annual free cash flow, multiply by years, subtract from debt.

### "What's the minimum exit multiple needed for 20% IRR?"
Work backwards: 20% IRR over 5 years needs ~2.5x MOIC. Solve for exit multiple.

### "What's the sensitivity to entry multiple?"
Lower entry = lower initial equity = higher MOIC for same exit.

## The Key to Nailing Paper LBOs

1. **Know the framework cold** — Don't waste time figuring out steps during the interview.
2. **Memorize the IRR shortcuts** — You can't calculate precise IRR by hand, so the rules are essential.
3. **State assumptions clearly** — "I'm assuming no debt paydown" or "I'm using 5% annual growth."
4. **Show your work** — Interviewers want to see your thinking process.

---

*Want to master LBO modeling end-to-end? Our [LBO Modeling Crash Course](/playbooks/lbo-modeling-course) includes full Excel models and more practice cases.*

*Targeting PE? The [PE Recruiting Playbook](/playbooks/pe-recruiting-playbook) covers everything from headhunters to case studies.*
    `},{slug:"networking-mastery-non-target-students",title:"Networking Mastery for Non-Target Students: The 100-Email Strategy That Works",summary:"The exact networking playbook non-target students use to land interviews—volume requirements, tracking systems, and relationship-building tactics.",category:"Networking",readTime:"15 min read",publishedAt:"2026-01-28",content:`
At target schools, banks come to campus. At non-target schools, you go to the banks—one email at a time. Networking isn't optional for non-target students; it's the entire strategy. Without it, your online applications disappear into a black hole.

Here's the complete networking playbook that actually gets non-target students into investment banking.

## The Non-Target Networking Reality

Let's be direct about the numbers:

**Target school students** can often land interviews with 10-20 networking calls plus on-campus recruiting access.

**Non-target students** typically need 80-150+ cold emails, 40-60+ completed calls, and 3-5 strong advocates to have a realistic shot at interviews.

This isn't meant to discourage you—it's meant to set realistic expectations so you don't give up after 20 emails with no responses. The process works, but it requires volume and persistence.

## The Three Types of Connections to Target

### Tier 1: Alumni (Highest Response Rate)

Alumni from your school—even if it's not a target—feel an obligation to help current students. This is your warmest outreach.

**How to find them:**
- LinkedIn search: "[Your School]" + "Investment Banking"
- Your school's alumni database
- Career services alumni lists
- Ask professors for introductions

**Why they respond:** Shared identity creates implicit trust. They remember what it was like to recruit from your school.

### Tier 2: Regional/Geographic Connections

People from your hometown, state, or region have an affinity that can substitute for alumni ties.

**How to use it:**
- "I'm from [City] and noticed you're originally from [same area]"
- Reference local landmarks, sports teams, or experiences
- Works particularly well for smaller cities or regions with tight-knit communities

### Tier 3: Cold Outreach (Lowest Response Rate, Highest Volume)

When you have no shared connection, you're relying purely on their goodwill and your email quality.

**What improves cold response rates:**
- Reference a specific deal they worked on
- Demonstrate genuine knowledge of their group/coverage
- Be concise and professional
- Follow up appropriately

## The 100-Email Framework

### Phase 1: Build Your List (Week 1)

Create a spreadsheet with these columns:
- Name, Title, Bank, Group
- Email address
- Connection type (alumni, geographic, cold)
- LinkedIn profile link
- Date sent, Follow-up dates
- Response status
- Call scheduled (Y/N)
- Notes

**Target:** 100+ names before you start sending.

**Sources:**
- LinkedIn Sales Navigator (if available) or regular LinkedIn search
- Bank websites (team pages)
- Deal announcements (find who worked on deals)
- Alumni databases

### Phase 2: Prioritize and Segment (Week 1)

Sort your list by connection strength:
1. **Direct alumni** (same school, any level) — Email first
2. **Alumni of alumni connections** (someone who knows your alumni) — Email second
3. **Geographic connections** — Email third
4. **Cold outreach** — Fill in gaps

**Within each tier, prioritize:**
- Analysts and Associates (more likely to respond, closer to your level)
- VPs (good balance of access and willingness to help)
- MDs (lower response rate, but powerful if they respond)

### Phase 3: Execute at Volume (Weeks 2-8)

**Weekly targets:**
- Send 15-20 new emails per week
- Follow up on all non-responses from previous weeks
- Complete 5-10 calls per week (as responses come in)

**Tracking discipline:**
- Update your spreadsheet daily
- Log every response (positive or negative)
- Note key takeaways from every call

### Phase 4: Convert Calls to Advocates (Ongoing)

Not every call needs to become a deep relationship. But you need 3-5 people who will actively push for you.

**Signs someone might become an advocate:**
- They offer to connect you with others
- They ask about your timeline and target firms
- They express genuine interest in helping
- They follow up with you proactively

**How to nurture potential advocates:**
- Send thank-you emails within 24 hours
- Provide updates on your progress (every 4-6 weeks)
- Share relevant articles or insights occasionally
- Ask for specific help when appropriate (not too often)

## The Anatomy of a Great Networking Call

### Before the Call (5 min)
- Review their LinkedIn and background
- Prepare 3-4 specific questions
- Have your story ready (2-minute "walk me through your resume")

### Opening (2 min)
- Thank them for their time
- Brief introduction (who you are, why you reached out)

### Their Story (8-10 min)
- "How did you get into banking?"
- "What's your group's focus?"
- "What do you enjoy most about the work?"

Let them talk. People enjoy sharing their experience, and you learn valuable information.

### Your Questions (5-7 min)
- Specific questions about their group, deals, or career path
- Questions about recruiting timeline and process
- Ask for advice specific to your situation

### The Close (2-3 min)
**Critical question:** "Is there anyone else you'd recommend I speak with?"

This is how you expand your network exponentially. Every call should generate 1-2 new names.

### After the Call
- Send thank-you email within 24 hours
- Connect on LinkedIn (mention the call)
- Add any referrals to your outreach list immediately

## Following Up Without Being Annoying

### The Follow-Up Cadence

**After initial email (no response):**
- Wait 5-7 business days
- Send a short bump: "Just wanted to bump this in case it got buried"

**After first follow-up (no response):**
- Wait another 5-7 days
- Final attempt: "I'll try one last time—if you're too busy, is there someone else you'd recommend?"

**After two follow-ups:** Move on. Don't email again for 6 months.

### After a Completed Call

**Immediate (within 24 hours):**
- Thank-you email

**4-6 weeks later:**
- Progress update: "Wanted to share an update—I just landed an internship at [Firm] and wanted to thank you again for your advice"

**When something relevant happens:**
- "I saw [Bank] just closed [Deal]—congratulations to the team"

## Common Non-Target Networking Mistakes

### Mistake 1: Giving Up Too Early

Many students send 20-30 emails, get discouraged by low response rates, and quit. The students who break in send 100+.

### Mistake 2: Only Targeting Senior Bankers

MDs are busy and have low response rates. Analysts and Associates remember what recruiting was like and are more likely to help.

### Mistake 3: Asking for a Job in the First Email

Your first email asks for advice and information. Mentioning job-seeking triggers an automatic "talk to HR" response.

### Mistake 4: Not Tracking Rigorously

Without a system, you'll lose track of who you've contacted, who needs follow-up, and what you learned.

### Mistake 5: Treating Networking as a One-Time Event

Networking isn't just for recruiting season. Build relationships year-round. The person you talk to sophomore year might help you junior year.

## What to Do When Someone Offers to Help

When someone says "Let me know how I can help" or "I'll put in a word," follow up appropriately:

**If they offer a referral:**
> "Thank you so much—I really appreciate that. I'll have my resume ready to send over. Is there anything specific you'd recommend I highlight?"

**If they offer to connect you with others:**
> "That would be incredibly helpful. I'll send over a brief intro paragraph you can forward if that makes it easier."

**If they offer general advice:**
> "Thank you—I'll definitely keep that in mind as I continue recruiting. Would it be okay if I reach out in a few weeks with an update on how things are going?"

## The Advocate Effect

Here's why all this matters: When recruiting decisions are made, having someone inside the bank who knows your name changes everything.

**Without an advocate:** Your resume is one of thousands. HR screens by GPA and school name. You're filtered out before a human reviews you.

**With an advocate:** A VP mentions your name to recruiting. HR pulls your resume for review. You get an interview you wouldn't have gotten otherwise.

This is how non-target students break in. Not by being the most qualified on paper—but by having someone on the inside who can vouch for them.

---

*Want 50+ email templates for every scenario? Get the [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook).*

*Ready for interviews? The [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers 400+ questions you'll face.*
    `},{slug:"boutique-banks-stepping-stone-bulge-bracket",title:"The Boutique Bank Path: Why Starting Small Can Lead to Bigger Opportunities",summary:"How boutique and middle-market banks can be the perfect entry point for non-target students—and the path to bulge brackets or PE from there.",category:"Career Strategy",readTime:"14 min read",publishedAt:"2026-01-26",content:`
There's a persistent myth in finance recruiting: if you don't start at a bulge bracket, you've failed. This is wrong. For non-target students, boutique and middle-market banks aren't consolation prizes—they're often the smartest strategic choice.

Here's why starting at a boutique can actually accelerate your career.

## The Boutique Advantage for Non-Target Students

### 1. More Accessible Recruiting

Boutiques don't have the same rigid recruiting pipelines as bulge brackets. Many hire year-round, have less formal GPA cutoffs, and place more weight on demonstrated interest and networking.

**What this means for non-target students:**
- Your cold emails are more likely to reach decision-makers
- Less competition from target school students who all gun for BB
- More opportunities to demonstrate fit through networking

### 2. Better Training and Deal Exposure

At a bulge bracket, first-year analysts often spend months on administrative tasks, formatting pitch decks, and supporting senior bankers from a distance.

At a boutique, the flat organizational structure means you're often in the room with partners, working directly on live deals, and seeing transactions from start to finish.

**The training reality:**
- Elite boutiques (Evercore, Centerview, Lazard) are widely regarded as having superior training to bulge brackets
- Middle-market boutiques give you more responsibility earlier
- You'll build models, run processes, and interact with clients faster

### 3. Stronger Exit Opportunities (Yes, Really)

Here's the counterintuitive truth: elite boutique analysts often have *better* PE exit opportunities than bulge bracket peers.

**Why PE firms like boutique analysts:**
- More hands-on deal experience
- Broader skillset from working on smaller teams
- Proven ability to perform without the bulge bracket brand as a crutch

**The numbers:** Analysts from top boutiques (Evercore, Centerview, PJT, Moelis, Lazard) place into megafund PE at rates comparable to or exceeding Goldman and Morgan Stanley.

## Understanding the Boutique Landscape

### Elite Boutiques (The "EBs")

**Firms:** Evercore, Centerview, Lazard, Moelis, PJT Partners, Perella Weinberg, Qatalyst

**Characteristics:**
- Pay often equals or exceeds bulge brackets
- M&A and advisory focused (no capital markets)
- Top-tier deal flow and prestigious client relationships
- Very competitive—almost as hard to enter as bulge brackets

**For non-targets:** Possible, but still requires strong credentials and networking. More accessible than Goldman/Morgan Stanley for some students.

### Middle-Market Banks

**Firms:** William Blair, Baird, Piper Sandler, Raymond James, Harris Williams, Lincoln International

**Characteristics:**
- Strong regional presence
- Often industry-specialized
- Smaller deal sizes but solid training
- More accessible recruiting

**For non-targets:** Excellent targets. Many have less rigid GPA screens and value demonstrated interest.

### Industry-Focused Boutiques

**Firms:** Leerink (healthcare), Cowen (tech/healthcare), Wedbush (tech)

**Characteristics:**
- Deep sector expertise
- Strong relationships in their niche
- Can be excellent launchpads for sector-focused PE

**For non-targets:** Great option if you have genuine sector interest. Passion for the industry can compensate for school name.

### Regional Boutiques

**Firms:** Varies by market—dozens of smaller firms in major cities

**Characteristics:**
- Smaller deals
- Less brand recognition
- Often excellent training and culture
- Very accessible recruiting

**For non-targets:** Often the most accessible entry point. A regional boutique can lead to middle-market or even bulge bracket laterals with 1-2 years of experience.

## The Path From Boutique to Bigger Opportunities

### Path 1: Boutique → Bulge Bracket Lateral

Lateraling from a boutique to a bulge bracket is uncommon but possible. It typically happens:
- After 1-2 years of strong performance
- When the BB has a specific need (often industry-aligned)
- Through networking with BB bankers

**Reality check:** This path is less common than boutique → PE. Most boutique analysts find they don't want to lateral to BB once they see the training difference.

### Path 2: Boutique → Private Equity

This is the more common and often more desirable path. Middle-market and boutique analysts regularly place into PE, including:
- Upper-middle-market funds
- Middle-market funds
- Growth equity firms
- Industry-focused PE funds

**Why it works:** PE firms value deal experience over brand name. A boutique analyst who's worked on 6 closed deals has more relevant experience than a BB analyst who's done support work on 2.

### Path 3: Boutique → Hedge Fund

For analysts interested in public markets, boutiques—especially those with strong sector coverage—can be excellent feeders to hedge funds.

**Particularly strong paths:**
- Industry boutique → sector-focused L/S fund
- M&A boutique → event-driven fund

### Path 4: Boutique → Corporate Development

Boutique experience translates directly to corporate development roles. Many companies prefer boutique-trained candidates who've had more hands-on deal exposure.

## What to Look for in a Boutique

Not all boutiques are equal. Here's what to evaluate:

### Deal Flow and Quality

- How many deals did the firm close last year?
- What's the average deal size?
- Are they working on interesting, complex transactions?

### Training Program

- Is there structured training?
- How quickly do analysts get on live deals?
- What do former analysts say about their learning curve?

### Culture and Hours

- What's analyst retention like?
- How does the culture compare to bulge brackets?
- Are hours brutal or more sustainable?

### Exit Opportunities

- Where have recent analysts gone?
- Does the firm have a track record of PE/HF placements?
- Are headhunters familiar with the firm?

### Compensation

- How does pay compare to larger banks?
- Is there a clear bonus structure?
- What's the trajectory for promotions?

## How to Recruit for Boutiques as a Non-Target

### Step 1: Research Thoroughly

Build a list of boutiques in your target market and industries. For each firm:
- Understand their focus areas
- Review recent deal announcements
- Identify alumni from your school or region

### Step 2: Network Strategically

Boutique recruiting is even more relationship-driven than BB recruiting.

- Target analysts and associates at your firms of interest
- Attend industry events where boutique bankers might be present
- Use LinkedIn to find second-degree connections

### Step 3: Demonstrate Genuine Interest

Boutiques value candidates who want to be there—not those using them as a fallback.

- Learn about their recent deals
- Articulate why their focus area interests you
- Show you've done your homework on the firm specifically

### Step 4: Emphasize Your Strengths

Non-targets can highlight:
- Strong work ethic and hustle
- Relevant industry knowledge or experience
- Technical preparation (financial modeling, valuation)
- Genuine interest in the firm's niche

## Common Questions About the Boutique Path

### "Won't I be branded as a 'boutique person' forever?"

No. After 2-3 years of solid experience, your firm matters less than your deal record and skills. Plenty of senior PE and banking professionals started at boutiques.

### "Is the pay significantly lower?"

At elite boutiques, pay is comparable to or exceeds bulge brackets. At middle-market firms, expect 10-20% lower compensation—but often better hours and training.

### "Will I miss out on the 'bulge bracket experience'?"

What experience? Working 100 hours a week formatting pitch decks? The day-to-day at top boutiques is often better training for the work you'll do in PE or senior banking roles.

### "What if I want to work internationally?"

Bulge brackets have an advantage here with global offices. If international mobility is a priority, factor this into your decision—but many boutiques also have international presence.

## The Bottom Line

For non-target students, the boutique path isn't settling—it's strategic. You're trading brand name for better training, more deal exposure, and often a clearer path to PE.

The students who break into finance from non-target schools often take this exact route: land at a boutique or middle-market firm, crush it for 2 years, and exit to PE or a larger bank with a track record that speaks louder than their school name.

---

*Need help with networking? The [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook) has 50+ templates.*

*Ready for technicals? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers everything you'll be asked.*
    `},{slug:"finance-certifications-non-target-students",title:"Finance Certifications That Actually Matter: Building Credentials Without a Target School Name",summary:"Which certifications help non-target students stand out—CFA, Bloomberg, FMVA, and more—and which are a waste of time.",category:"Career Strategy",readTime:"12 min read",publishedAt:"2026-01-24",content:`
When you don't have "Wharton" or "Harvard" on your resume, you need other signals that demonstrate capability. Finance certifications can fill that gap—but not all certifications are equal. Some genuinely help your candidacy; others waste your time and money.

Here's the honest breakdown of which certifications matter for non-target students.

## The Truth About Certifications

Let's be clear upfront: **No certification will overcome a weak overall candidacy.** Certifications are signal boosters, not substitutes for networking, strong grades, and relevant experience.

That said, the right certifications can:
- Demonstrate genuine interest in finance
- Prove technical competency
- Give you talking points in interviews
- Help your resume pass initial screens

## Tier 1: High-Impact Certifications

### CFA Level I

**What it is:** The first level of the Chartered Financial Analyst certification—a rigorous exam covering ethics, quantitative methods, economics, financial reporting, corporate finance, equity investments, fixed income, derivatives, and portfolio management.

**Time commitment:** 300+ hours of study for most candidates
**Cost:** ~$1,200-1,500 for registration and materials
**Pass rate:** ~40%

**Why it matters for non-targets:**
- Universally recognized signal of finance knowledge
- Demonstrates commitment and work ethic
- Particularly valuable for buy-side roles (asset management, hedge funds)
- Shows you can pass a difficult standardized exam

**When to pursue:**
- If targeting asset management, hedge funds, or equity research
- If you have time to study properly (don't rush it)
- If you can pass—attempting and failing looks worse than not attempting

**Reality check:** For pure investment banking recruiting, CFA Level I is helpful but not transformative. It matters more for buy-side roles.

### Bloomberg Market Concepts (BMC)

**What it is:** Self-paced certification covering economic indicators, currencies, fixed income, and equities using the Bloomberg Terminal.

**Time commitment:** 6-8 hours
**Cost:** Free through many universities; $150-250 otherwise
**Difficulty:** Moderate

**Why it matters for non-targets:**
- Demonstrates familiarity with Bloomberg—a tool used daily in finance
- Easy to complete, universally recognized
- Great conversation starter in interviews
- Shows initiative and genuine interest

**When to pursue:** Everyone should get this. It's low-cost, low-effort, and adds legitimate value to your resume.

### Wall Street Prep / BIWS Financial Modeling Certifications

**What they are:** Self-paced courses on financial modeling, valuation, LBO modeling, and M&A analysis.

**Time commitment:** 40-100+ hours depending on depth
**Cost:** $200-500 for basic courses; more for comprehensive packages
**Difficulty:** Moderate to challenging

**Why they matter for non-targets:**
- Directly teach the skills you'll use as an analyst
- Give you practical Excel modeling experience
- Provide talking points for interviews ("I built an LBO model that...")
- Show you're serious about preparing

**When to pursue:** If you've never built a financial model, completing one of these courses should be a priority. The skills are directly applicable.

## Tier 2: Helpful But Situational

### Financial Modeling & Valuation Analyst (FMVA)

**What it is:** Corporate Finance Institute's certification covering financial modeling, Excel, accounting, and valuation.

**Time commitment:** 100-200 hours
**Cost:** ~$500/year for full access
**Difficulty:** Moderate

**Why it can help:**
- Comprehensive curriculum covering relevant skills
- Includes Excel templates and practical exercises
- Growing recognition in the industry

**When to pursue:** Good option if you want structured learning. Less universally recognized than CFA but more directly applicable to IB.

### CPA (Certified Public Accountant)

**What it is:** The professional certification for accountants.

**Time commitment:** Significant (150 credit hours + 4 exams)
**Cost:** Several thousand dollars
**Difficulty:** Challenging

**Why it can help:**
- Deep accounting knowledge is valuable in banking
- Required if you're pursuing the Big 4 → IB path
- Shows rigorous analytical capability

**When to pursue:** If you're an accounting major or planning to work at Big 4 before transitioning to banking. Not necessary if going directly to banking.

### Series 7 and Series 63

**What they are:** FINRA licenses required to sell securities.

**Reality check:** You get these *after* being hired—they're not recruiting credentials. Don't pursue these before you have a job.

## Tier 3: Limited Value for Non-Target Recruiting

### CFA Level II and III

**Why the limited value:** By the time you're pursuing Level II, you should already have a job. These are career development credentials, not recruiting credentials.

### CFP (Certified Financial Planner)

**Why the limited value:** This is for wealth management and financial planning—different industry from investment banking or institutional finance.

### Online Micro-Credentials / Coursera Certificates

**Why the limited value:** Low barrier to entry = low signal value. Completing a 4-week Coursera course doesn't differentiate you.

**Exception:** If from a highly recognized institution (MIT, Stanford) and directly relevant, they can add marginal value. But they won't move the needle significantly.

## How to Prioritize Certifications

### For Investment Banking Recruiting

1. **Bloomberg Market Concepts** — Do this first. Quick, easy, universally helpful.
2. **Financial Modeling Course (WSP/BIWS/CFI)** — Build actual modeling skills.
3. **CFA Level I** — Pursue if you have time and are confident you'll pass.

### For Buy-Side (Hedge Funds, Asset Management)

1. **CFA Level I** — More important for buy-side than sell-side.
2. **Bloomberg Market Concepts** — Standard expectation.
3. **Financial Modeling Course** — Still valuable but less emphasized.

### For Big 4 → IB Lateral Path

1. **CPA** — Required for Big 4, valuable for transition.
2. **Financial Modeling Course** — Bridge the gap to IB-specific skills.
3. **CFA Level I** — Differentiates you from other Big 4 candidates.

## How to Talk About Certifications in Interviews

Certifications are only valuable if you can discuss them intelligently.

**Good way to mention Bloomberg Market Concepts:**
> "I completed the Bloomberg certification to familiarize myself with the terminal. I particularly enjoyed the fixed income section—understanding how bond prices and yields move inversely was one of those concepts that just clicked."

**Bad way to mention it:**
> "I have the Bloomberg certification." (So what? What did you learn?)

**Good way to mention financial modeling:**
> "I completed a financial modeling program where I built a full three-statement model and LBO from scratch. The LBO in particular was interesting—I didn't realize how much debt paydown contributes to returns until I modeled it myself."

**Bad way:**
> "I have a financial modeling certificate." (Again, so what?)

## The Certification Trap to Avoid

Some non-target students fall into "certification collecting"—piling up credentials while neglecting networking and real experience.

**Don't do this.**

A resume with five certifications but no internships, no networking contacts, and no referrals won't get you interviews. Certifications supplement a strong candidacy; they don't create one from nothing.

**The right balance:**
- 1-2 meaningful certifications (Bloomberg + modeling or CFA Level I)
- Active networking (50+ outreach emails, 20+ calls)
- At least one relevant internship or work experience
- Strong technical preparation for interviews

## What Actually Moves the Needle

Let's be honest about what matters most in non-target recruiting:

1. **Referrals from people inside banks** (most important)
2. **Relevant work experience** (internships, even if not IB)
3. **Strong GPA** (3.7+ for non-targets)
4. **Technical preparation** (can you ace the technical interview?)
5. **Certifications** (helpful but not determinative)

Certifications sit at #5. They help, but they're not the primary driver of success.

---

*Ready to nail the technical interview? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers 400+ real questions.*

*Need help with networking? The [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook) has proven templates.*
    `},{slug:"big-4-to-investment-banking-lateral-guide",title:"Big 4 to Investment Banking: The Complete Lateral Playbook",summary:"How to transition from Big 4 (Deloitte, PwC, EY, KPMG) to investment banking—the timeline, positioning strategy, and what actually works.",category:"Career Strategy",readTime:"16 min read",publishedAt:"2026-01-22",content:`
The Big 4 to investment banking path is one of the most traveled routes for those who didn't break directly into banking. Thousands of professionals have made this transition successfully. But it requires strategy, timing, and realistic expectations about what the path looks like.

Here's the complete playbook for lateraling from Big 4 to IB.

## Why the Big 4 → IB Path Works

### You Have Relevant Skills

Big 4 professionals—especially those in Transaction Advisory Services (TAS), Valuation, or M&A advisory—develop skills that translate directly to investment banking:

- Financial statement analysis
- Due diligence processes
- Valuation methodologies
- Client interaction
- Working under pressure with tight deadlines

### Banks Know the Big 4 Brand

Hiring managers at banks understand what Big 4 experience means. They know the training, the culture, and the work quality. This reduces perceived risk in hiring you.

### It's a Proven Transition

Banks have hired countless Big 4 professionals before. There's an established playbook, and headhunters regularly facilitate these transitions.

## The Ideal Big 4 Starting Point

Not all Big 4 roles are equally positioned for IB transitions.

### Best Positions for IB Transition

**Transaction Advisory Services (TAS) / Deals:**
- Directly relevant M&A work
- Financial due diligence, quality of earnings
- Highest conversion rate to IB

**Valuation Services:**
- Build valuation skills central to banking
- Experience with DCFs, comps, precedent transactions
- Strong technical foundation

**M&A Advisory / Strategy:**
- Direct deal experience
- Client-facing M&A work
- May already be doing work similar to IB

**Restructuring:**
- Specialized but highly valued
- Natural path to RX banking groups
- Strong technical and analytical skills

### Harder (But Not Impossible) Positions

**Audit:**
- You understand accounting, which is valuable
- Less deal exposure and client advisory experience
- Often requires internal transfer to TAS first

**Tax:**
- Specialized knowledge that doesn't directly transfer
- Longer path—typically need to move internally first
- Some exceptions for M&A tax or international tax roles

**Consulting (Strategy & Operations):**
- Depends heavily on the specific work
- If deal-oriented, easier transition
- If operational, harder to position for IB

## The Timeline: When to Move

### The Sweet Spot: 1.5-2.5 Years

This is the ideal window for lateral moves to IB:

**Why 1.5 years minimum:**
- Enough experience to be valuable
- Demonstrated commitment (not a job-hopper)
- Typically completed initial training and have deal experience

**Why before 3 years:**
- Still at an appropriate level to enter as an Analyst
- Haven't become too senior for analyst programs
- Banks prefer candidates who haven't been "too Big 4" for too long

### What If You've Been at Big 4 Longer?

**3-4 years:** Can still lateral, but may come in at Associate level (with or without MBA)

**5+ years:** MBA may be necessary to reset your career level; direct lateral becomes difficult

## The Positioning Strategy

### Step 1: Get Into a Deal-Facing Role

If you're in audit or tax, your first priority is an internal transfer to TAS, Valuation, or M&A Advisory.

**How to make the internal move:**
- Express interest to your counselor/career coach
- Network internally with TAS professionals
- Volunteer for any deal-related projects in your current role
- Build relevant skills (modeling, valuation) on your own time

**Timeline:** Plan for 6-12 months in a deal role before recruiting externally.

### Step 2: Build IB-Specific Skills

Big 4 TAS experience is valuable, but there are gaps to fill:

**What you likely have:**
- Financial statement analysis
- Quality of earnings / due diligence
- Valuation concepts
- Professional client interaction

**What you need to develop:**
- Full three-statement modeling
- LBO modeling
- Pitch book creation
- Understanding of IB deal processes

**How to fill the gaps:**
- Complete a modeling course (Wall Street Prep, BIWS, CFI)
- Build models from scratch in Excel
- Study IB technical questions intensively
- Read M&I, WSO, and other resources to understand IB specifics

### Step 3: Network Aggressively

Networking is how most Big 4 → IB transitions happen. Online applications alone rarely work.

**Target these people:**
- Big 4 alumni who moved to IB (your strongest angle)
- Junior bankers (analysts/associates) who are accessible
- Headhunters who specialize in IB lateral hiring

**Your networking volume:**
- 50-100 outreach emails
- 30-50 completed calls
- Goal: 3-5 advocates who will push for you

### Step 4: Prepare for a Different Interview

IB interviews test different things than Big 4 interviews.

**What Big 4 interviews test:**
- Behavioral fit
- Basic accounting knowledge
- Client service orientation

**What IB interviews test:**
- Deep technical knowledge (DCF, LBO, M&A mechanics)
- Deal experience and judgment
- Ability to explain complex concepts clearly
- "Why banking?" motivation

**Prepare for:**
- "Walk me through a DCF"
- "Walk me through an LBO"
- Accounting questions (you should nail these)
- M&A accretion/dilution
- Your deal experience in detail
- "Why IB? Why now? Why leave Big 4?"

## Where Big 4 Professionals Typically Land

### Middle-Market Banks (Most Common)

**Examples:** William Blair, Baird, Piper Sandler, Harris Williams, Lincoln International

**Why it's common:**
- Less rigid recruiting pipelines
- Value Big 4 experience
- Often have relationships with Big 4 firms

### Industry-Focused Groups at Larger Banks

**Why it works:**
- Your Big 4 industry experience (healthcare, tech, industrials) translates
- You bring sector knowledge that's immediately useful
- Can be at bulge brackets or boutiques

### Boutique Banks

**Why it works:**
- Flexible recruiting processes
- Value hustle and demonstrated interest
- Often willing to take chances on non-traditional candidates

### Bulge Brackets (Less Common)

**Reality check:** Direct Big 4 → Goldman/Morgan Stanley transitions happen but are less common. More likely to reach BB through:
- First landing at middle-market, then lateraling
- MBA followed by associate recruiting
- Exceptional networking and deal experience

## The "Why Leave Big 4" Question

You will be asked why you're leaving Big 4. Your answer matters.

**Good answers:**

> "I've enjoyed my time in TAS, particularly the deal exposure and analytical work. But I want to be on the advisory side of transactions—helping clients think through strategic decisions, not just performing diligence after decisions are made. Investment banking puts you at the center of that process."

> "Working on the due diligence side has given me a strong foundation in financial analysis, but I want to work on live transactions from origination through closing. Banking offers that full lifecycle exposure."

**Avoid:**

- "I want better exit opportunities" (too mercenary)
- "Big 4 is boring" (negative framing)
- "I want to make more money" (obvious and shallow)
- "I couldn't get into banking out of school" (raises questions about your candidacy)

## Common Mistakes in the Big 4 → IB Transition

### Mistake 1: Waiting Too Long

The longer you stay at Big 4, the harder the transition. The sweet spot is 1.5-2.5 years. Don't wait for "just one more year."

### Mistake 2: Underestimating Technical Preparation

Big 4 TAS is not the same as IB technically. You need to study IB-specific technicals rigorously—especially LBO modeling and M&A questions that aren't part of typical Big 4 work.

### Mistake 3: Only Applying Online

Online applications from Big 4 candidates go into the same pile as everyone else. Without networking and referrals, your odds are low.

### Mistake 4: Poor Positioning

If you're in audit, don't try to lateral directly to IB. Transfer internally first, then recruit externally.

### Mistake 5: Targeting Only Bulge Brackets

Many Big 4 → BB transitions go through middle-market banks first. A path like TAS → William Blair → Goldman is more common than TAS → Goldman directly.

## The Path After: What Big 4 Background Enables

Once you're in IB, your Big 4 background becomes part of your story—not a limitation.

**PE recruiting:** You're now an IB analyst with strong accounting fundamentals. PE firms value the combined skillset.

**Industry coverage:** Your Big 4 sector experience (healthcare, tech, energy) can position you for industry coverage roles.

**Long-term career:** Many senior bankers have non-traditional backgrounds. What matters at senior levels is deal track record, not where you started.

---

*Ready to nail IB technicals? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers 400+ questions you'll face.*

*Need help networking your way in? The [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook) has proven templates.*
    `},{slug:"building-finance-profile-without-campus-recruiting",title:"Building Your Finance Profile Without Campus Recruiting",summary:"How non-target students can build competitive candidacies when banks don't come to their campus—alternative paths, resume building, and self-directed preparation.",category:"Career Strategy",readTime:"18 min read",publishedAt:"2026-01-20",content:`
At target schools, building a finance profile is straightforward: join the investment club, attend info sessions, network with alumni who come to campus, and apply through structured recruiting. The infrastructure exists.

At non-target schools, you have to build that infrastructure yourself. Here's how to create a competitive finance profile without any of the built-in advantages.

## The Components of a Competitive Finance Profile

Before diving into tactics, understand what a strong finance candidacy actually requires:

1. **Academic Credibility** — GPA, coursework, standardized test scores
2. **Relevant Experience** — Internships, jobs, projects that demonstrate finance interest
3. **Technical Competence** — Ability to answer technical interview questions
4. **Network and Referrals** — People who can advocate for your candidacy
5. **Demonstrated Interest** — Evidence you've genuinely explored and tested your interest

At target schools, the campus environment helps develop all five. At non-target schools, you develop them independently.

## Building Academic Credibility

### GPA: The Non-Negotiable

At a target school, a 3.5 GPA is competitive. At a non-target, you need 3.7+ to be taken seriously—ideally 3.8+.

**Why the higher bar:** Banks use GPA as a proxy for capability when they can't rely on school prestige. A 3.5 from an unknown school doesn't signal much; a 3.9 signals genuine academic ability.

**If your GPA is below 3.7:**
- Focus on raising your major GPA (often listed separately)
- Highlight recent GPA if it's higher (shows upward trajectory)
- Compensate with stronger credentials in other areas
- Consider whether you need to extend school to improve grades

### Keep Standardized Test Scores on Your Resume

Unlike target school students, non-targets should keep SAT/ACT scores on their resume through recruiting (and potentially beyond).

**Why it matters:** A 1550 SAT or 35 ACT is an objective signal that cuts through the noise. It tells recruiters "this person is smart" without relying on school name.

**The threshold:** Keep scores if 1500+ SAT or 34+ ACT. Below that, the value is marginal.

### Take Rigorous Coursework

Your transcript should include:

**Core finance/accounting:**
- Financial Accounting
- Corporate Finance
- Investments
- Financial Statement Analysis

**Quantitative courses:**
- Statistics
- Calculus
- Econometrics (if available)

**If your school doesn't offer these:** Consider community college courses, online courses from recognized institutions, or self-study with clear documentation.

## Building Relevant Experience

### The Experience Ladder

You can't jump directly to Goldman Sachs. Instead, climb a ladder of increasingly relevant experience:

**Step 1 (Freshman year):** Any finance-adjacent role
- Corporate finance internship at a local company
- Financial analyst at a startup
- Bank teller or personal banking role
- Accounting internship

**Step 2 (Sophomore year):** Closer to investment banking
- Big 4 internship (any service line, ideally TAS)
- Middle-market or regional bank internship
- Corporate development or M&A role at a company
- Venture capital or PE firm internship (smaller shops)

**Step 3 (Junior year):** Investment banking
- Target middle-market banks
- Boutiques and regional firms
- Any IB internship you can land

### Where to Find Non-Target-Friendly Internships

**Local and regional firms:**
- Regional boutiques in your area
- Local middle-market banks
- Family offices (wealth management firms)
- Small PE firms or fundless sponsors

**Search strategies:**
- LinkedIn job searches filtered by location
- Your school's career portal (even if limited)
- Cold outreach to local finance professionals
- Chamber of Commerce or business association contacts

### Creating Experience When You Can't Find Internships

If you genuinely cannot find a finance internship (common in smaller cities or during COVID-era recruiting), create your own experience:

**Start an investment club:**
If your school doesn't have one, start it. Run stock pitch competitions, analyze markets, and build a track record. You're now "Founder and President" of something relevant.

**Manage real money:**
Some schools have student-managed investment funds. If yours doesn't, create one (even with small amounts of pooled capital). The experience of making real investment decisions is valuable.

**Build financial models:**
Create detailed models of public companies. Document your work. This becomes portfolio material for interviews.

**Write about finance:**
Start a blog or LinkedIn newsletter analyzing deals, markets, or companies. Demonstrates genuine interest and gives you talking points.

**Compete in case competitions:**
Many organizations run finance case competitions open to students from any school. Participating (and ideally placing) shows initiative.

## Building Technical Competence

### Self-Taught Technical Skills

Without campus workshops or structured prep programs, you learn technicals yourself.

**The learning path:**
1. **Accounting fundamentals** (2-3 weeks) — Three-statement modeling, how statements link
2. **Valuation concepts** (2-3 weeks) — DCF, comparable companies, precedent transactions
3. **M&A basics** (1-2 weeks) — Accretion/dilution, merger mechanics
4. **LBO fundamentals** (2-3 weeks) — Sources and uses, returns analysis

**Resources:**
- Wall Street Prep (structured courses)
- Breaking Into Wall Street (video training)
- CFI (Corporate Finance Institute)
- YouTube channels (Mergers & Inquisitions, Peak Frameworks)
- Investment banking guides (free online content)

### Practice Until It's Automatic

Knowing the concepts isn't enough. You need to answer questions smoothly under pressure.

**Practice methods:**
- Record yourself answering questions
- Do mock interviews with friends or peers
- Write out answers, then practice verbal delivery
- Time yourself on quick-fire question rounds

**Target questions to master:**
- Walk me through a DCF (most common)
- Walk me through the three statements
- How does depreciation flow through the statements?
- Walk me through an LBO
- Is this deal accretive or dilutive?

## Building Your Network Without Campus Recruiting

### The Volume Requirement

Without campus events, your entire network is built through proactive outreach.

**Target volumes:**
- 80-150 cold emails sent
- 40-60 networking calls completed
- 3-5 strong advocates who will push for you

### Finding People to Contact

**Alumni (your warmest leads):**
- LinkedIn search: "[Your School]" + "Investment Banking"
- Your school's alumni database
- Professors who have industry connections

**Geographic connections:**
- People from your hometown or state
- Anyone who attended schools in your region
- Bankers in your target cities who might have regional affinity

**Cold outreach (highest volume):**
- Analysts and Associates at target firms
- People who worked on interesting deals
- Industry specialists whose coverage interests you

### The Outreach Process

**Week 1-2:** Build your list (100+ names)
**Week 3-8:** Send 15-20 emails per week, follow up on non-responses
**Ongoing:** Complete calls, nurture relationships, ask for referrals

### Converting Calls to Advocates

Not everyone you talk to will become an advocate. But 3-5 strong advocates can change your outcome.

**Signs someone might advocate:**
- They offer to connect you with others
- They ask about your recruiting timeline
- They follow up with you proactively
- They express genuine interest in helping

**How to nurture:**
- Send thoughtful thank-you notes
- Provide occasional updates (every 4-6 weeks)
- Ask for specific help when appropriate
- Be genuinely grateful without being needy

## Demonstrating Interest

### Why It Matters More for Non-Targets

Target school students get some benefit of the doubt—banks assume if you're at Wharton studying finance, you're probably serious about it.

Non-target students must prove their interest explicitly. Interviewers wonder: "Why does someone from [Unknown School] want banking? Do they even know what it is?"

### How to Demonstrate Interest

**Relevant coursework and grades:**
Shows you've engaged with finance academically.

**Extracurricular involvement:**
Finance clubs, investment competitions, relevant activities.

**Previous finance experience:**
Any internship shows you've tested your interest.

**Industry knowledge:**
Can you discuss recent deals? Do you follow the markets? Can you explain why banking specifically?

**Certifications:**
Bloomberg Market Concepts, financial modeling courses, CFA Level I (if you have time).

**Personal projects:**
Stock portfolio, financial models you've built, writing about finance.

## The Integrated Approach

Success for non-targets requires developing all five components in parallel, not sequentially.

**Freshman year:**
- Focus on GPA (set the foundation)
- Join or start a finance club
- Secure any finance-adjacent internship
- Begin learning basic technical concepts

**Sophomore year:**
- Maintain strong GPA
- Secure a better internship (Big 4, boutique, corporate finance)
- Start networking for junior year IB recruiting
- Build technical skills (complete a modeling course)
- Get Bloomberg certified

**Junior year (fall):**
- Intensive networking push (50+ emails/month)
- Apply to all relevant internship programs
- Complete technical preparation
- Leverage sophomore summer experience in interviews

**Junior year (summer):**
- IB internship (ideal) or strong alternative (Big 4 TAS, MM bank)
- Convert to full-time or position for lateral recruiting

## Common Mistakes Non-Target Students Make

### Mistake 1: Giving Up After Initial Rejections

Recruiting is a numbers game. Target school students face rejection too—they just have more shots. You need to send more applications, make more calls, and persist longer.

### Mistake 2: Only Targeting Prestigious Firms

Bulge brackets are hardest to access. Boutiques, middle-market banks, and regional firms are more accessible and lead to the same exits. Start where you can break in.

### Mistake 3: Underestimating Networking

Without campus recruiting, networking is 80% of the battle. Students who send 20 emails and give up never had a real chance.

### Mistake 4: Waiting to Start

IB recruiting is early. If you start networking and preparing junior year, you're already behind. Start sophomore year or earlier.

### Mistake 5: Neglecting GPA

No amount of networking overcomes a 2.8 GPA from a non-target. Academics are your foundation—don't let them slip.

## The Non-Target Mindset

Breaking into finance from a non-target school requires accepting certain truths:

**You will work harder than target school students.** This isn't fair, but it's reality. Accept it and outwork the competition.

**You will face more rejection.** Lower response rates, fewer interviews, more "no's." Persistence is non-negotiable.

**You will take a longer path.** Maybe boutique → BB instead of BB directly. Maybe Big 4 → IB. The end result is the same.

**You will prove yourself through results.** Once you're in the industry, no one cares where you went to school. Your deals and performance speak for themselves.

The students who break in from non-target schools are the ones who refuse to accept "no" as the final answer.

---

*Ready to nail your interviews? Our [Finance Technical Interview Guide](/playbooks/ib-technical-guide) covers 400+ questions.*

*Need networking help? The [Networking & Cold Email Playbook](/playbooks/networking-cold-email-playbook) has 50+ templates that get responses.*
    `}].slice(0,3);var w=e.i(78647),k=e.i(84406);let T=["apiKey","idempotencyKey","stripeAccount","apiVersion","maxNetworkRetries","timeout","host","authenticator","stripeContext","additionalHeaders","streaming"];function P(e){return e&&"object"==typeof e&&T.some(t=>Object.prototype.hasOwnProperty.call(e,t))}function x(e,t){return k.stringify(e,{serializeDate:e=>Math.floor(e.getTime()/1e3).toString(),arrayFormat:"indices"}).replace(/%5B/g,"[").replace(/%5D/g,"]")}let S=(t={"\n":"\\n",'"':'\\"',"\u2028":"\\u2028","\u2029":"\\u2029"},e=>{let r=e.replace(/["\n\r\u2028\u2029]/g,e=>t[e]);return e=>r.replace(/\{([\s\S]+?)\}/g,(t,r)=>{let a=e[r];return["number","string","boolean"].includes(typeof a)?encodeURIComponent(a):""})});function E(e){if(!Array.isArray(e)||!e[0]||"object"!=typeof e[0])return{};if(!P(e[0]))return e.shift();let t=Object.keys(e[0]),r=t.filter(e=>T.includes(e));return r.length>0&&r.length!==t.length&&C(`Options found in arguments (${r.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`),{}}function A(e){let t={host:null,headers:{},settings:{},streaming:!1};if(e.length>0){let r=e[e.length-1];if("string"==typeof r)t.authenticator=O(e.pop());else if(P(r)){let r=Object.assign({},e.pop()),a=Object.keys(r).filter(e=>!T.includes(e));if(a.length&&C(`Invalid options found (${a.join(", ")}); ignoring.`),r.apiKey&&(t.authenticator=O(r.apiKey)),r.idempotencyKey&&(t.headers["Idempotency-Key"]=r.idempotencyKey),r.stripeAccount&&(t.headers["Stripe-Account"]=r.stripeAccount),r.stripeContext){if(t.headers["Stripe-Account"])throw Error("Can't specify both stripeAccount and stripeContext.");t.headers["Stripe-Context"]=r.stripeContext}if(r.apiVersion&&(t.headers["Stripe-Version"]=r.apiVersion),Number.isInteger(r.maxNetworkRetries)&&(t.settings.maxNetworkRetries=r.maxNetworkRetries),Number.isInteger(r.timeout)&&(t.settings.timeout=r.timeout),r.host&&(t.host=r.host),r.authenticator){if(r.apiKey)throw Error("Can't specify both apiKey and authenticator.");if("function"!=typeof r.authenticator)throw Error("The authenticator must be a function receiving a request as the first parameter.");t.authenticator=r.authenticator}r.additionalHeaders&&(t.headers=r.additionalHeaders),r.streaming&&(t.streaming=!0)}}return t}function I(e){if("object"!=typeof e)throw Error("Argument must be an object");return Object.keys(e).reduce((t,r)=>(null!=e[r]&&(t[r]=e[r]),t),{})}function _(e,t){return t?e.then(e=>{setTimeout(()=>{t(null,e)},0)},e=>{setTimeout(()=>{t(e,null)},0)}):e}function C(e){return"function"!=typeof w.default.emitWarning?console.warn(`Stripe: ${e}`):w.default.emitWarning(e,"Stripe")}function B(e,t,r){if(!Number.isInteger(t))if(void 0!==r)return r;else throw Error(`${e} must be an integer`);return t}function O(e){let t=t=>(t.headers.Authorization="Bearer "+e,Promise.resolve());return t._apiKey=e,t}function M(e,t){return this[e]instanceof Date?Math.floor(this[e].getTime()/1e3).toString():t}function R(e){return e&&e.startsWith("/v2")?"v2":"v1"}function j(e){return Array.isArray(e)?e.join(", "):String(e)}class N{getClientName(){throw Error("getClientName not implemented.")}makeRequest(e,t,r,a,n,o,i,s){throw Error("makeRequest not implemented.")}static makeTimeoutError(){let e=TypeError(N.TIMEOUT_ERROR_CODE);return e.code=N.TIMEOUT_ERROR_CODE,e}}N.CONNECTION_CLOSED_ERROR_CODES=["ECONNRESET","EPIPE"],N.TIMEOUT_ERROR_CODE="ETIMEDOUT";class q{getStatusCode(){return this._statusCode}getHeaders(){return this._headers}getRawResponse(){throw Error("getRawResponse not implemented.")}toStream(e){throw Error("toStream not implemented.")}toJSON(){throw Error("toJSON not implemented.")}constructor(e,t){this._statusCode=e,this._headers=t}}class G extends N{static makeFetchWithRaceTimeout(e){return(t,r,a)=>{let n,o=new Promise((e,t)=>{n=setTimeout(()=>{n=null,t(N.makeTimeoutError())},a)});return Promise.race([e(t,r),o]).finally(()=>{n&&clearTimeout(n)})}}static makeFetchWithAbortTimeout(e){return async(t,r,a)=>{let n=new AbortController,o=setTimeout(()=>{o=null,n.abort(N.makeTimeoutError())},a);try{return await e(t,Object.assign(Object.assign({},r),{signal:n.signal}))}catch(e){if("AbortError"===e.name)throw N.makeTimeoutError();throw e}finally{o&&clearTimeout(o)}}}getClientName(){return"fetch"}async makeRequest(e,t,r,a,n,o,i,s){let l=new URL(r,`${"http"===i?"http":"https"}://${e}`);l.port=t;let u="POST"==a||"PUT"==a||"PATCH"==a;return new F(await this._fetchFn(l.toString(),{method:a,headers:Object.entries(n).map(e=>{let[t,r]=e;return[t,j(r)]}),body:o||(u?"":void 0)},s))}constructor(e){if(super(),!e){if(!globalThis.fetch)throw Error("fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation.");e=globalThis.fetch}globalThis.AbortController?this._fetchFn=G.makeFetchWithAbortTimeout(e):this._fetchFn=G.makeFetchWithRaceTimeout(e)}}class F extends q{getRawResponse(){return this._res}toStream(e){return e(),this._res.body}toJSON(){return this._res.json()}static _transformHeadersToObject(e){let t={};for(let r of e){if(!Array.isArray(r)||2!=r.length)throw Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");t[r[0]]=r[1]}return t}constructor(e){super(e.status,F._transformHeadersToObject(e.headers)),this._res=e}}class D{computeHMACSignature(e,t){throw Error("computeHMACSignature not implemented.")}computeHMACSignatureAsync(e,t){throw Error("computeHMACSignatureAsync not implemented.")}computeSHA256Async(e){throw Error("computeSHA256 not implemented.")}}class W extends Error{}class L extends D{computeHMACSignature(e,t){throw new W("SubtleCryptoProvider cannot be used in a synchronous context.")}async computeHMACSignatureAsync(e,t){let r=new TextEncoder,a=await this.subtleCrypto.importKey("raw",r.encode(t),{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),n=new Uint8Array(await this.subtleCrypto.sign("hmac",a,r.encode(e))),o=Array(n.length);for(let e=0;e<n.length;e++)o[e]=H[n[e]];return o.join("")}async computeSHA256Async(e){return new Uint8Array(await this.subtleCrypto.digest("SHA-256",e))}constructor(e){super(),this.subtleCrypto=e||crypto.subtle}}let H=Array(256);for(let e=0;e<H.length;e++)H[e]=e.toString(16).padStart(2,"0");class ${getUname(){throw Error("getUname not implemented.")}uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}secureCompare(e,t){if(e.length!==t.length)return!1;let r=e.length,a=0;for(let n=0;n<r;++n)a|=e.charCodeAt(n)^t.charCodeAt(n);return 0===a}createEmitter(){throw Error("createEmitter not implemented.")}tryBufferData(e){throw Error("tryBufferData not implemented.")}createNodeHttpClient(e){throw Error("createNodeHttpClient not implemented.")}createFetchHttpClient(e){return new G(e)}createDefaultHttpClient(){throw Error("createDefaultHttpClient not implemented.")}createNodeCryptoProvider(){throw Error("createNodeCryptoProvider not implemented.")}createSubtleCryptoProvider(e){return new L(e)}createDefaultCryptoProvider(){throw Error("createDefaultCryptoProvider not implemented.")}constructor(){this._fetchFn=null,this._agent=null}}class U extends Event{constructor(e,t){super(e),this.data=t}}class Y{on(e,t){let r=e=>{t(e.data)};return this.listenerMapping.set(t,r),this.eventTarget.addEventListener(e,r)}removeListener(e,t){let r=this.listenerMapping.get(t);return this.listenerMapping.delete(t),this.eventTarget.removeEventListener(e,r)}once(e,t){let r=e=>{t(e.data)};return this.listenerMapping.set(t,r),this.eventTarget.addEventListener(e,r,{once:!0})}emit(e,t){return this.eventTarget.dispatchEvent(new U(e,t))}constructor(){this.eventTarget=new EventTarget,this.listenerMapping=new Map}}let z=e=>{switch(e.type){case"card_error":return new Q(e);case"invalid_request_error":return new J(e);case"api_error":return new X(e);case"authentication_error":return new Z(e);case"rate_limit_error":return new et(e);case"idempotency_error":return new en(e);case"invalid_grant":return new eo(e);default:return new ei(e)}},V=e=>"temporary_session_expired"===e.type?new es(e):"invalid_fields"===e.code?new J(e):z(e);class K extends Error{constructor(e={},t=null){var r;super(e.message),this.type=t||this.constructor.name,this.raw=e,this.rawType=e.type,this.code=e.code,this.doc_url=e.doc_url,this.param=e.param,this.detail=e.detail,this.headers=e.headers,this.requestId=e.requestId,this.statusCode=e.statusCode,this.message=null!=(r=e.message)?r:"",this.userMessage=e.user_message,this.charge=e.charge,this.decline_code=e.decline_code,this.payment_intent=e.payment_intent,this.payment_method=e.payment_method,this.payment_method_type=e.payment_method_type,this.setup_intent=e.setup_intent,this.source=e.source}}K.generate=z;class Q extends K{constructor(e={}){super(e,"StripeCardError")}}class J extends K{constructor(e={}){super(e,"StripeInvalidRequestError")}}class X extends K{constructor(e={}){super(e,"StripeAPIError")}}class Z extends K{constructor(e={}){super(e,"StripeAuthenticationError")}}class ee extends K{constructor(e={}){super(e,"StripePermissionError")}}class et extends K{constructor(e={}){super(e,"StripeRateLimitError")}}class er extends K{constructor(e={}){super(e,"StripeConnectionError")}}class ea extends K{constructor(e,t,r={}){super(r,"StripeSignatureVerificationError"),this.header=e,this.payload=t}}class en extends K{constructor(e={}){super(e,"StripeIdempotencyError")}}class eo extends K{constructor(e={}){super(e,"StripeInvalidGrantError")}}class ei extends K{constructor(e={}){super(e,"StripeUnknownError")}}class es extends K{constructor(e={}){super(e,"TemporarySessionExpiredError")}}e.s(["StripeAPIError",()=>X,"StripeAuthenticationError",()=>Z,"StripeCardError",()=>Q,"StripeConnectionError",()=>er,"StripeError",()=>K,"StripeIdempotencyError",()=>en,"StripeInvalidGrantError",()=>eo,"StripeInvalidRequestError",()=>J,"StripePermissionError",()=>ee,"StripeRateLimitError",()=>et,"StripeSignatureVerificationError",()=>ea,"StripeUnknownError",()=>ei,"TemporarySessionExpiredError",()=>es,"generateV1Error",0,z,"generateV2Error",0,V],74376);var el=e.i(74376);class eu{_normalizeStripeContext(e,t){return e?e.toString()||null:(null==t?void 0:t.toString())||null}_addHeadersDirectlyToObject(e,t){e.requestId=t["request-id"],e.stripeAccount=e.stripeAccount||t["stripe-account"],e.apiVersion=e.apiVersion||t["stripe-version"],e.idempotencyKey=e.idempotencyKey||t["idempotency-key"]}_makeResponseEvent(e,t,r){let a=Date.now(),n=a-e.request_start_time;return I({api_version:r["stripe-version"],account:r["stripe-account"],idempotency_key:r["idempotency-key"],method:e.method,path:e.path,status:t,request_id:this._getRequestId(r),elapsed:n,request_start_time:e.request_start_time,request_end_time:a})}_getRequestId(e){return e["request-id"]}_streamingResponseHandler(e,t,r){return a=>{let n=a.getHeaders(),o=()=>{let r=this._makeResponseEvent(e,a.getStatusCode(),n);this._stripe._emitter.emit("response",r),this._recordRequestMetrics(this._getRequestId(n),r.elapsed,t)},i=a.toStream(o);return this._addHeadersDirectlyToObject(i,n),r(null,i)}}_jsonResponseHandler(e,t,r,a){return n=>{let o=n.getHeaders(),i=this._getRequestId(o),s=n.getStatusCode(),l=this._makeResponseEvent(e,s,o);this._stripe._emitter.emit("response",l),n.toJSON().then(e=>{if(e.error)throw"string"==typeof e.error&&(e.error={type:e.error,message:e.error_description}),e.error.headers=o,e.error.statusCode=s,e.error.requestId=i,401===s?new Z(e.error):403===s?new ee(e.error):429===s?new et(e.error):"v2"===t?V(e.error):z(e.error);return e},e=>{throw new X({message:"Invalid JSON received from the Stripe API",exception:e,requestId:o["request-id"]})}).then(e=>{this._recordRequestMetrics(i,l.elapsed,r);let t=n.getRawResponse();this._addHeadersDirectlyToObject(t,o),Object.defineProperty(e,"lastResponse",{enumerable:!1,writable:!1,value:t}),a(null,e)},e=>a(e,null))}}static _generateConnectionErrorMessage(e){return`An error occurred with our connection to Stripe.${e>0?` Request was retried ${e} times.`:""}`}static _shouldRetry(e,t,r,a){return!!(a&&0===t&&N.CONNECTION_CLOSED_ERROR_CODES.includes(a.code))||!(t>=r)&&(!e||"false"!==e.getHeaders()["stripe-should-retry"]&&!!("true"===e.getHeaders()["stripe-should-retry"]||409===e.getStatusCode()||e.getStatusCode()>=500))}_getSleepTimeInMS(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this._stripe.getInitialNetworkRetryDelay(),a=Math.min(r*Math.pow(2,e-1),this._stripe.getMaxNetworkRetryDelay());return a*=.5*(1+Math.random()),a=Math.max(r,a),Number.isInteger(t)&&t<=60&&(a=Math.max(a,t)),1e3*a}_getMaxNetworkRetries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0!==e.maxNetworkRetries&&Number.isInteger(e.maxNetworkRetries)?e.maxNetworkRetries:this._stripe.getMaxNetworkRetries()}_defaultIdempotencyKey(e,t,r){let a=this._getMaxNetworkRetries(t),n=()=>`stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;if("v2"===r){if("POST"===e||"DELETE"===e)return n()}else if("v1"===r&&"POST"===e&&a>0)return n();return null}_makeHeaders(e){let{contentType:t,contentLength:r,apiVersion:a,clientUserAgent:n,method:o,userSuppliedHeaders:i,userSuppliedSettings:s,stripeAccount:l,stripeContext:u,apiMode:c}=e,d={Accept:"application/json","Content-Type":t,"User-Agent":this._getUserAgentString(c),"X-Stripe-Client-User-Agent":n,"X-Stripe-Client-Telemetry":this._getTelemetryHeader(),"Stripe-Version":a,"Stripe-Account":l,"Stripe-Context":u,"Idempotency-Key":this._defaultIdempotencyKey(o,s,c)},h="POST"==o||"PUT"==o||"PATCH"==o;return(h||r)&&(h||C(`${o} method had non-zero contentLength but no payload is expected for this verb`),d["Content-Length"]=r),Object.assign(I(d),i&&"object"==typeof i?Object.keys(i).reduce((e,t)=>(e[t.split("-").map(e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()).join("-")]=i[t],e),{}):i)}_getUserAgentString(e){let t=this._stripe.getConstant("PACKAGE_VERSION"),r=this._stripe._appInfo?this._stripe.getAppInfoAsString():"";return`Stripe/${e} NodeBindings/${t} ${r}`.trim()}_getTelemetryHeader(){if(this._stripe.getTelemetryEnabled()&&this._stripe._prevRequestMetrics.length>0)return JSON.stringify({last_request_metrics:this._stripe._prevRequestMetrics.shift()})}_recordRequestMetrics(e,t,r){if(this._stripe.getTelemetryEnabled()&&e)if(this._stripe._prevRequestMetrics.length>this._maxBufferedRequestMetric)C("Request metrics buffer is full, dropping telemetry message.");else{let a={request_id:e,request_duration_ms:t};r&&r.length>0&&(a.usage=r),this._stripe._prevRequestMetrics.push(a)}}_rawRequest(e,t,r,a,n){return new Promise((o,i)=>{let s;try{let o=e.toUpperCase();if("POST"!==o&&r&&0!==Object.keys(r).length)throw Error("rawRequest only supports params on POST requests. Please pass null and add your parameters to path.");let i=[].slice.call([r,a]),l=E(i),u="POST"===o?Object.assign({},l):null,c=A(i),d=c.headers,h=c.authenticator;s={requestMethod:o,requestPath:t,bodyData:u,queryData:{},authenticator:h,headers:d,host:c.host,streaming:!!c.streaming,settings:{},usage:n||["raw_request"]}}catch(e){i(e);return}let{headers:l,settings:u}=s,c=s.authenticator;this._request(s.requestMethod,s.host,t,s.bodyData,c,{headers:l,settings:u,streaming:s.streaming},s.usage,function(e,t){e?i(e):o(t)})})}_request(e,t,r,a,n,o){var i;let s,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[],u=arguments.length>7?arguments[7]:void 0,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;n=null!=(i=null!=n?n:this._stripe._authenticator)?i:null;let d=R(r),h=(e,t,r,a,n)=>setTimeout(e,this._getSleepTimeInMS(a,n),t,r,a+1),m=(a,i,c)=>{let p=o.settings&&o.settings.timeout&&Number.isInteger(o.settings.timeout)&&o.settings.timeout>=0?o.settings.timeout:this._stripe.getApiField("timeout"),y={host:t||this._stripe.getApiField("host"),port:this._stripe.getApiField("port"),path:r,method:e,headers:Object.assign({},i),body:s,protocol:this._stripe.getApiField("protocol")};n(y).then(()=>{let t=this._stripe.getApiField("httpClient").makeRequest(y.host,y.port,y.path,y.method,y.headers,y.body,y.protocol,p),n=Date.now(),s=I({api_version:a,account:j(i["Stripe-Account"]),idempotency_key:j(i["Idempotency-Key"]),method:e,path:r,request_start_time:n}),f=c||0,g=this._getMaxNetworkRetries(o.settings||{});this._stripe._emitter.emit("request",s),t.then(e=>{if(eu._shouldRetry(e,f,g)){var t;return h(m,a,i,f,Number(Array.isArray(t=e.getHeaders()["retry-after"])?t[0]:t))}return o.streaming&&400>e.getStatusCode()?this._streamingResponseHandler(s,l,u)(e):this._jsonResponseHandler(s,d,l,u)(e)}).catch(e=>eu._shouldRetry(null,f,g,e)?h(m,a,i,f,null):u(new er({message:e.code&&e.code===N.TIMEOUT_ERROR_CODE?`Request aborted due to timeout being reached (${p}ms)`:eu._generateConnectionErrorMessage(f),detail:e})))}).catch(e=>{throw new K({message:"Unable to authenticate the request",exception:e})})},p=(t,r)=>{if(t)return u(t);s=r,this._stripe.getClientUserAgent(t=>{var r,a,n;let i=this._stripe.getApiField("version"),l=this._makeHeaders({contentType:"v2"==d?"application/json":"application/x-www-form-urlencoded",contentLength:new TextEncoder().encode(s).length,apiVersion:i,clientUserAgent:t,method:e,userSuppliedHeaders:null!=(r=o.headers)?r:null,userSuppliedSettings:null!=(a=o.settings)?a:{},stripeAccount:null!=(n=o.stripeAccount)?n:this._stripe.getApiField("stripeAccount"),stripeContext:this._normalizeStripeContext(o.stripeContext,this._stripe.getApiField("stripeContext")),apiMode:d});m(i,l,0)})};if(c)c(e,a,o.headers,p);else{let e;p(null,e="v2"==d?a?JSON.stringify(a,M):"":x(a||{},d))}}constructor(e,t){this._stripe=e,this._maxBufferedRequestMetric=t}}class ec{async iterate(e){if(!(e&&e.data&&"number"==typeof e.data.length))throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");let t=ey(this.requestArgs);if(this.index<e.data.length){let r=t?e.data.length-1-this.index:this.index,a=e.data[r];return this.index+=1,{value:a,done:!1}}if(e.has_more){this.index=0,this.pagePromise=this.getNextPage(e);let t=await this.pagePromise;return this.iterate(t)}return{done:!0,value:void 0}}getNextPage(e){throw Error("Unimplemented")}async _next(){return this.iterate(await this.pagePromise)}next(){if(this.promiseCache.currentPromise)return this.promiseCache.currentPromise;let e=(async()=>{let e=await this._next();return this.promiseCache.currentPromise=null,e})();return this.promiseCache.currentPromise=e,e}constructor(e,t,r,a){this.index=0,this.pagePromise=e,this.promiseCache={currentPromise:null},this.requestArgs=t,this.spec=r,this.stripeResource=a}}class ed extends ec{getNextPage(e){let t=ey(this.requestArgs),r=function(e,t){let r=t?0:e.data.length-1,a=e.data[r],n=a&&a.id;if(!n)throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");return n}(e,t);return this.stripeResource._makeRequest(this.requestArgs,this.spec,{[t?"ending_before":"starting_after"]:r})}}class eh extends ec{getNextPage(e){if(!e.next_page)throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");return this.stripeResource._makeRequest(this.requestArgs,this.spec,{page:e.next_page})}}class em{async turnPage(){let e=await this.nextPageUrl;if(!e)return null;this.spec.fullPath=e;let t=await this.stripeResource._makeRequest([],this.spec,{});return this.nextPageUrl=Promise.resolve(t.next_page_url),this.currentPageIterator=Promise.resolve(t.data[Symbol.iterator]()),this.currentPageIterator}async next(){{let e=(await this.currentPageIterator).next();if(!e.done)return{done:!1,value:e.value}}let e=await this.turnPage();if(!e)return{done:!0,value:void 0};let t=e.next();return t.done?{done:!0,value:void 0}:{done:!1,value:t.value}}constructor(e,t,r,a){this.currentPageIterator=(async()=>(await e).data[Symbol.iterator]())(),this.nextPageUrl=(async()=>(await e).next_page_url||null)(),this.requestArgs=t,this.spec=r,this.stripeResource=a}}let ep=e=>{var t,r;let a=(t=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.next(...r)},function(){var e,r;let a=[].slice.call(arguments),n=function(e){if(0===e.length)return;let t=e[0];if("function"!=typeof t)throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof t}`);if(2===t.length)return t;if(t.length>2)throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${t}`);return function(e,r){r(t(e))}}(a),o=function(e){if(e.length<2)return null;let t=e[1];if("function"!=typeof t)throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof t}`);return t}(a);if(a.length>2)throw Error(`autoPagingEach takes up to two arguments; received ${a}`);return _((e=t,r=n,new Promise((t,a)=>{e().then(function a(n){if(n.done)return void t();let o=n.value;return new Promise(e=>{r(o,e)}).then(t=>!1===t?a({done:!0,value:void 0}):e().then(a))}).catch(a)})),o)}),n=(r=a,function(e,t){let a=e&&e.limit;if(!a)throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");if(a>1e4)throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");return _(new Promise((e,t)=>{let n=[];r(e=>{if(n.push(e),n.length>=a)return!1}).then(()=>{e(n)}).catch(t)}),t)}),o={autoPagingEach:a,autoPagingToArray:n,next:()=>e.next(),return:()=>({}),["undefined"!=typeof Symbol&&Symbol.asyncIterator?Symbol.asyncIterator:"@@asyncIterator"]:()=>o};return o};function ey(e){return!!E([].slice.call(e)).ending_before}function ef(e,t){if(this._stripe=e,t)throw Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");this.basePath=S(this.basePath||e.getApiField("basePath")),this.resourcePath=this.path,this.path=S(this.path),this.initialize(...arguments)}ef.extend=function(e){let t=this,r=Object.prototype.hasOwnProperty.call(e,"constructor")?e.constructor:function(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];t.apply(this,r)};return Object.assign(r,t),r.prototype=Object.create(t.prototype),Object.assign(r.prototype,e),r},ef.method=function(e){if(void 0!==e.path&&void 0!==e.fullPath)throw Error(`Method spec specified both a 'path' (${e.path}) and a 'fullPath' (${e.fullPath}).`);return function(){let t,r;for(var a=arguments.length,n=Array(a),o=0;o<a;o++)n[o]=arguments[o];let i="function"==typeof n[n.length-1]&&n.pop();t=(e.fullPath||this.createResourcePathWithSymbols(e.path||"")).match(/\{\w+\}/g),e.urlParams=t?t.map(e=>e.replace(/[{}]/g,"")):[];let s=_(this._makeRequest(n,e,{}),i);return Object.assign(s,"v2"!==(r=R(e.fullPath||e.path))&&"search"===e.methodType?ep(new eh(s,n,e,this)):"v2"!==r&&"list"===e.methodType?ep(new ed(s,n,e,this)):"v2"===r&&"list"===e.methodType?ep(new em(s,n,e,this)):null),s}},ef.MAX_BUFFERED_REQUEST_METRICS=100,ef.prototype={_stripe:null,path:"",resourcePath:"",basePath:null,initialize(){},requestDataProcessor:null,validateRequest:null,createFullPath(e,t){let r=[this.basePath(t),this.path(t)];if("function"==typeof e){let a=e(t);a&&r.push(a)}else r.push(e);return this._joinUrlParts(r)},createResourcePathWithSymbols(e){return e?`/${this._joinUrlParts([this.resourcePath,e])}`:`/${this.resourcePath}`},_joinUrlParts:e=>e.join("/").replace(/\/{2,}/g,"/"),_getRequestOpts(e,t,r){var a;let n=(t.method||"GET").toUpperCase(),o=t.usage||[],i=t.urlParams||[],s=t.encode||(e=>e),l=!!t.fullPath,u=S(l?t.fullPath:t.path||""),c=l?t.fullPath:this.createResourcePathWithSymbols(t.path),d=[].slice.call(e),h=i.reduce((e,t)=>{let r=d.shift();if("string"!=typeof r)throw Error(`Stripe: Argument "${t}" must be a string, but got: ${r} (on API request to \`${n} ${c}\`)`);return e[t]=r,e},{}),m=s(Object.assign({},E(d),r)),p=A(d),y=p.host||t.host,f=!!t.streaming||!!p.streaming;if(d.filter(e=>null!=e).length)throw Error(`Stripe: Unknown arguments (${d}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${n} \`${c}\`)`);let g=l?u(h):this.createFullPath(u,h),v=Object.assign(p.headers,t.headers);t.validator&&t.validator(m,{headers:v});let b="GET"===t.method||"DELETE"===t.method;return{requestMethod:n,requestPath:g,bodyData:b?null:m,queryData:b?m:{},authenticator:null!=(a=p.authenticator)?a:null,headers:v,host:null!=y?y:null,streaming:f,settings:p.settings,usage:o}},_makeRequest(e,t,r){return new Promise((a,n)=>{var o;let i;try{i=this._getRequestOpts(e,t,r)}catch(e){n(e);return}let s=0===Object.keys(i.queryData).length,l=[i.requestPath,s?"":"?",x(i.queryData,R(i.requestPath))].join(""),{headers:u,settings:c}=i;this._stripe._requestSender._request(i.requestMethod,i.host,l,i.bodyData,i.authenticator,{headers:u,settings:c,streaming:i.streaming},i.usage,function(e,r){e?n(e):a(t.transformResponseData?t.transformResponseData(r):r)},null==(o=this.requestDataProcessor)?void 0:o.bind(this))})}};class eg{get segments(){return[...this._segments]}push(e){if(!e)throw Error("Segment cannot be null or undefined");return new eg([...this._segments,e])}pop(){if(0===this._segments.length)throw Error("Cannot pop from an empty context");return new eg(this._segments.slice(0,-1))}toString(){return this._segments.join("/")}static parse(e){return new eg(e?e.split("/"):[])}constructor(e=[]){this._segments=[...e]}}let ev="2025-11-17.clover";function eb(e,t){for(let r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;let a=r[0].toLowerCase()+r.substring(1),n=new t[r](e);this[a]=n}}function ew(e,t){return function(e){return new eb(e,t)}}let ek=ef.method,eT=ef.extend({retrieve:ek({method:"GET",fullPath:"/v1/financial_connections/accounts/{account}"}),list:ek({method:"GET",fullPath:"/v1/financial_connections/accounts",methodType:"list"}),disconnect:ek({method:"POST",fullPath:"/v1/financial_connections/accounts/{account}/disconnect"}),listOwners:ek({method:"GET",fullPath:"/v1/financial_connections/accounts/{account}/owners",methodType:"list"}),refresh:ek({method:"POST",fullPath:"/v1/financial_connections/accounts/{account}/refresh"}),subscribe:ek({method:"POST",fullPath:"/v1/financial_connections/accounts/{account}/subscribe"}),unsubscribe:ek({method:"POST",fullPath:"/v1/financial_connections/accounts/{account}/unsubscribe"})}),eP=ef.method,ex=ef.extend({retrieve:eP({method:"GET",fullPath:"/v1/entitlements/active_entitlements/{id}"}),list:eP({method:"GET",fullPath:"/v1/entitlements/active_entitlements",methodType:"list"})}),eS=ef.method,eE=ef.extend({create:eS({method:"POST",fullPath:"/v1/billing/alerts"}),retrieve:eS({method:"GET",fullPath:"/v1/billing/alerts/{id}"}),list:eS({method:"GET",fullPath:"/v1/billing/alerts",methodType:"list"}),activate:eS({method:"POST",fullPath:"/v1/billing/alerts/{id}/activate"}),archive:eS({method:"POST",fullPath:"/v1/billing/alerts/{id}/archive"}),deactivate:eS({method:"POST",fullPath:"/v1/billing/alerts/{id}/deactivate"})}),eA=ef.method,eI=ef.extend({find:eA({method:"GET",fullPath:"/v1/tax/associations/find"})}),e_=ef.method,eC=ef.extend({retrieve:e_({method:"GET",fullPath:"/v1/issuing/authorizations/{authorization}"}),update:e_({method:"POST",fullPath:"/v1/issuing/authorizations/{authorization}"}),list:e_({method:"GET",fullPath:"/v1/issuing/authorizations",methodType:"list"}),approve:e_({method:"POST",fullPath:"/v1/issuing/authorizations/{authorization}/approve"}),decline:e_({method:"POST",fullPath:"/v1/issuing/authorizations/{authorization}/decline"})}),eB=ef.method,eO=ef.extend({create:eB({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations"}),capture:eB({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/capture"}),expire:eB({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/expire"}),finalizeAmount:eB({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount"}),increment:eB({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/increment"}),respond:eB({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond"}),reverse:eB({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/reverse"})}),eM=ef.method,eR=ef.extend({create:eM({method:"POST",fullPath:"/v1/tax/calculations"}),retrieve:eM({method:"GET",fullPath:"/v1/tax/calculations/{calculation}"}),listLineItems:eM({method:"GET",fullPath:"/v1/tax/calculations/{calculation}/line_items",methodType:"list"})}),ej=ef.method,eN=ef.extend({create:ej({method:"POST",fullPath:"/v1/issuing/cardholders"}),retrieve:ej({method:"GET",fullPath:"/v1/issuing/cardholders/{cardholder}"}),update:ej({method:"POST",fullPath:"/v1/issuing/cardholders/{cardholder}"}),list:ej({method:"GET",fullPath:"/v1/issuing/cardholders",methodType:"list"})}),eq=ef.method,eG=ef.extend({create:eq({method:"POST",fullPath:"/v1/issuing/cards"}),retrieve:eq({method:"GET",fullPath:"/v1/issuing/cards/{card}"}),update:eq({method:"POST",fullPath:"/v1/issuing/cards/{card}"}),list:eq({method:"GET",fullPath:"/v1/issuing/cards",methodType:"list"})}),eF=ef.method,eD=ef.extend({deliverCard:eF({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/deliver"}),failCard:eF({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/fail"}),returnCard:eF({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/return"}),shipCard:eF({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/ship"}),submitCard:eF({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/submit"})}),eW=ef.method,eL=ef.extend({create:eW({method:"POST",fullPath:"/v1/billing_portal/configurations"}),retrieve:eW({method:"GET",fullPath:"/v1/billing_portal/configurations/{configuration}"}),update:eW({method:"POST",fullPath:"/v1/billing_portal/configurations/{configuration}"}),list:eW({method:"GET",fullPath:"/v1/billing_portal/configurations",methodType:"list"})}),eH=ef.method,e$=ef.extend({create:eH({method:"POST",fullPath:"/v1/terminal/configurations"}),retrieve:eH({method:"GET",fullPath:"/v1/terminal/configurations/{configuration}"}),update:eH({method:"POST",fullPath:"/v1/terminal/configurations/{configuration}"}),list:eH({method:"GET",fullPath:"/v1/terminal/configurations",methodType:"list"}),del:eH({method:"DELETE",fullPath:"/v1/terminal/configurations/{configuration}"})}),eU=ef.method,eY=ef.extend({create:eU({method:"POST",fullPath:"/v1/test_helpers/confirmation_tokens"})}),ez=ef.method,eV=ef.extend({create:ez({method:"POST",fullPath:"/v1/terminal/connection_tokens"})}),eK=ef.method,eQ=ef.extend({retrieve:eK({method:"GET",fullPath:"/v1/billing/credit_balance_summary"})}),eJ=ef.method,eX=ef.extend({retrieve:eJ({method:"GET",fullPath:"/v1/billing/credit_balance_transactions/{id}"}),list:eJ({method:"GET",fullPath:"/v1/billing/credit_balance_transactions",methodType:"list"})}),eZ=ef.method,e0=ef.extend({create:eZ({method:"POST",fullPath:"/v1/billing/credit_grants"}),retrieve:eZ({method:"GET",fullPath:"/v1/billing/credit_grants/{id}"}),update:eZ({method:"POST",fullPath:"/v1/billing/credit_grants/{id}"}),list:eZ({method:"GET",fullPath:"/v1/billing/credit_grants",methodType:"list"}),expire:eZ({method:"POST",fullPath:"/v1/billing/credit_grants/{id}/expire"}),voidGrant:eZ({method:"POST",fullPath:"/v1/billing/credit_grants/{id}/void"})}),e1=ef.method,e2=ef.extend({create:e1({method:"POST",fullPath:"/v1/treasury/credit_reversals"}),retrieve:e1({method:"GET",fullPath:"/v1/treasury/credit_reversals/{credit_reversal}"}),list:e1({method:"GET",fullPath:"/v1/treasury/credit_reversals",methodType:"list"})}),e4=ef.method,e3=ef.extend({fundCashBalance:e4({method:"POST",fullPath:"/v1/test_helpers/customers/{customer}/fund_cash_balance"})}),e5=ef.method,e6=ef.extend({create:e5({method:"POST",fullPath:"/v1/treasury/debit_reversals"}),retrieve:e5({method:"GET",fullPath:"/v1/treasury/debit_reversals/{debit_reversal}"}),list:e5({method:"GET",fullPath:"/v1/treasury/debit_reversals",methodType:"list"})}),e8=ef.method,e7=ef.extend({create:e8({method:"POST",fullPath:"/v1/issuing/disputes"}),retrieve:e8({method:"GET",fullPath:"/v1/issuing/disputes/{dispute}"}),update:e8({method:"POST",fullPath:"/v1/issuing/disputes/{dispute}"}),list:e8({method:"GET",fullPath:"/v1/issuing/disputes",methodType:"list"}),submit:e8({method:"POST",fullPath:"/v1/issuing/disputes/{dispute}/submit"})}),e9=ef.method,te=ef.extend({retrieve:e9({method:"GET",fullPath:"/v1/radar/early_fraud_warnings/{early_fraud_warning}"}),list:e9({method:"GET",fullPath:"/v1/radar/early_fraud_warnings",methodType:"list"})}),tt=ef.method,tr=ef.extend({create:tt({method:"POST",fullPath:"/v2/core/event_destinations"}),retrieve:tt({method:"GET",fullPath:"/v2/core/event_destinations/{id}"}),update:tt({method:"POST",fullPath:"/v2/core/event_destinations/{id}"}),list:tt({method:"GET",fullPath:"/v2/core/event_destinations",methodType:"list"}),del:tt({method:"DELETE",fullPath:"/v2/core/event_destinations/{id}"}),disable:tt({method:"POST",fullPath:"/v2/core/event_destinations/{id}/disable"}),enable:tt({method:"POST",fullPath:"/v2/core/event_destinations/{id}/enable"}),ping:tt({method:"POST",fullPath:"/v2/core/event_destinations/{id}/ping"})}),ta=ef.method,tn=ef.extend({retrieve(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return ta({method:"GET",fullPath:"/v2/core/events/{id}",transformResponseData:e=>this.addFetchRelatedObjectIfNeeded(e)}).apply(this,t)},list(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return ta({method:"GET",fullPath:"/v2/core/events",methodType:"list",transformResponseData:e=>Object.assign(Object.assign({},e),{data:e.data.map(this.addFetchRelatedObjectIfNeeded.bind(this))})}).apply(this,t)},addFetchRelatedObjectIfNeeded(e){return e.related_object&&e.related_object.url?Object.assign(Object.assign({},e),{fetchRelatedObject:()=>ta({method:"GET",fullPath:e.related_object.url}).apply(this,[{stripeContext:e.context}])}):e}}),to=ef.method,ti=ef.extend({create:to({method:"POST",fullPath:"/v1/entitlements/features"}),retrieve:to({method:"GET",fullPath:"/v1/entitlements/features/{id}"}),update:to({method:"POST",fullPath:"/v1/entitlements/features/{id}"}),list:to({method:"GET",fullPath:"/v1/entitlements/features",methodType:"list"})}),ts=ef.method,tl=ef.extend({create:ts({method:"POST",fullPath:"/v1/treasury/financial_accounts"}),retrieve:ts({method:"GET",fullPath:"/v1/treasury/financial_accounts/{financial_account}"}),update:ts({method:"POST",fullPath:"/v1/treasury/financial_accounts/{financial_account}"}),list:ts({method:"GET",fullPath:"/v1/treasury/financial_accounts",methodType:"list"}),close:ts({method:"POST",fullPath:"/v1/treasury/financial_accounts/{financial_account}/close"}),retrieveFeatures:ts({method:"GET",fullPath:"/v1/treasury/financial_accounts/{financial_account}/features"}),updateFeatures:ts({method:"POST",fullPath:"/v1/treasury/financial_accounts/{financial_account}/features"})}),tu=ef.method,tc=ef.extend({fail:tu({method:"POST",fullPath:"/v1/test_helpers/treasury/inbound_transfers/{id}/fail"}),returnInboundTransfer:tu({method:"POST",fullPath:"/v1/test_helpers/treasury/inbound_transfers/{id}/return"}),succeed:tu({method:"POST",fullPath:"/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"})}),td=ef.method,th=ef.extend({create:td({method:"POST",fullPath:"/v1/treasury/inbound_transfers"}),retrieve:td({method:"GET",fullPath:"/v1/treasury/inbound_transfers/{id}"}),list:td({method:"GET",fullPath:"/v1/treasury/inbound_transfers",methodType:"list"}),cancel:td({method:"POST",fullPath:"/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"})}),tm=ef.method,tp=ef.extend({create:tm({method:"POST",fullPath:"/v1/terminal/locations"}),retrieve:tm({method:"GET",fullPath:"/v1/terminal/locations/{location}"}),update:tm({method:"POST",fullPath:"/v1/terminal/locations/{location}"}),list:tm({method:"GET",fullPath:"/v1/terminal/locations",methodType:"list"}),del:tm({method:"DELETE",fullPath:"/v1/terminal/locations/{location}"})}),ty=ef.method,tf=ef.extend({create:ty({method:"POST",fullPath:"/v1/billing/meter_event_adjustments"})}),tg=ef.method,tv=ef.extend({create:tg({method:"POST",fullPath:"/v2/billing/meter_event_adjustments"})}),tb=ef.method,tw=ef.extend({create:tb({method:"POST",fullPath:"/v2/billing/meter_event_session"})}),tk=ef.method,tT=ef.extend({create:tk({method:"POST",fullPath:"/v2/billing/meter_event_stream",host:"meter-events.stripe.com"})}),tP=ef.method,tx=ef.extend({create:tP({method:"POST",fullPath:"/v1/billing/meter_events"})}),tS=ef.method,tE=ef.extend({create:tS({method:"POST",fullPath:"/v2/billing/meter_events"})}),tA=ef.method,tI=ef.extend({create:tA({method:"POST",fullPath:"/v1/billing/meters"}),retrieve:tA({method:"GET",fullPath:"/v1/billing/meters/{id}"}),update:tA({method:"POST",fullPath:"/v1/billing/meters/{id}"}),list:tA({method:"GET",fullPath:"/v1/billing/meters",methodType:"list"}),deactivate:tA({method:"POST",fullPath:"/v1/billing/meters/{id}/deactivate"}),listEventSummaries:tA({method:"GET",fullPath:"/v1/billing/meters/{id}/event_summaries",methodType:"list"}),reactivate:tA({method:"POST",fullPath:"/v1/billing/meters/{id}/reactivate"})}),t_=ef.method,tC=ef.extend({create:t_({method:"POST",fullPath:"/v1/terminal/onboarding_links"})}),tB=ef.method,tO=ef.extend({create:tB({method:"POST",fullPath:"/v1/climate/orders"}),retrieve:tB({method:"GET",fullPath:"/v1/climate/orders/{order}"}),update:tB({method:"POST",fullPath:"/v1/climate/orders/{order}"}),list:tB({method:"GET",fullPath:"/v1/climate/orders",methodType:"list"}),cancel:tB({method:"POST",fullPath:"/v1/climate/orders/{order}/cancel"})}),tM=ef.method,tR=ef.extend({update:tM({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_payments/{id}"}),fail:tM({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_payments/{id}/fail"}),post:tM({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_payments/{id}/post"}),returnOutboundPayment:tM({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_payments/{id}/return"})}),tj=ef.method,tN=ef.extend({create:tj({method:"POST",fullPath:"/v1/treasury/outbound_payments"}),retrieve:tj({method:"GET",fullPath:"/v1/treasury/outbound_payments/{id}"}),list:tj({method:"GET",fullPath:"/v1/treasury/outbound_payments",methodType:"list"}),cancel:tj({method:"POST",fullPath:"/v1/treasury/outbound_payments/{id}/cancel"})}),tq=ef.method,tG=ef.extend({update:tq({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}"}),fail:tq({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"}),post:tq({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"}),returnOutboundTransfer:tq({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"})}),tF=ef.method,tD=ef.extend({create:tF({method:"POST",fullPath:"/v1/treasury/outbound_transfers"}),retrieve:tF({method:"GET",fullPath:"/v1/treasury/outbound_transfers/{outbound_transfer}"}),list:tF({method:"GET",fullPath:"/v1/treasury/outbound_transfers",methodType:"list"}),cancel:tF({method:"POST",fullPath:"/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"})}),tW=ef.method,tL=ef.extend({create:tW({method:"POST",fullPath:"/v1/issuing/personalization_designs"}),retrieve:tW({method:"GET",fullPath:"/v1/issuing/personalization_designs/{personalization_design}"}),update:tW({method:"POST",fullPath:"/v1/issuing/personalization_designs/{personalization_design}"}),list:tW({method:"GET",fullPath:"/v1/issuing/personalization_designs",methodType:"list"})}),tH=ef.method,t$=ef.extend({activate:tH({method:"POST",fullPath:"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"}),deactivate:tH({method:"POST",fullPath:"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"}),reject:tH({method:"POST",fullPath:"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"})}),tU=ef.method,tY=ef.extend({retrieve:tU({method:"GET",fullPath:"/v1/issuing/physical_bundles/{physical_bundle}"}),list:tU({method:"GET",fullPath:"/v1/issuing/physical_bundles",methodType:"list"})}),tz=ef.method,tV=ef.extend({retrieve:tz({method:"GET",fullPath:"/v1/climate/products/{product}"}),list:tz({method:"GET",fullPath:"/v1/climate/products",methodType:"list"})}),tK=ef.method,tQ=ef.extend({create:tK({method:"POST",fullPath:"/v1/terminal/readers"}),retrieve:tK({method:"GET",fullPath:"/v1/terminal/readers/{reader}"}),update:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}"}),list:tK({method:"GET",fullPath:"/v1/terminal/readers",methodType:"list"}),del:tK({method:"DELETE",fullPath:"/v1/terminal/readers/{reader}"}),cancelAction:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}/cancel_action"}),collectInputs:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}/collect_inputs"}),collectPaymentMethod:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}/collect_payment_method"}),confirmPaymentIntent:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}/confirm_payment_intent"}),processPaymentIntent:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}/process_payment_intent"}),processSetupIntent:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}/process_setup_intent"}),refundPayment:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}/refund_payment"}),setReaderDisplay:tK({method:"POST",fullPath:"/v1/terminal/readers/{reader}/set_reader_display"})}),tJ=ef.method,tX=ef.extend({presentPaymentMethod:tJ({method:"POST",fullPath:"/v1/test_helpers/terminal/readers/{reader}/present_payment_method"}),succeedInputCollection:tJ({method:"POST",fullPath:"/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection"}),timeoutInputCollection:tJ({method:"POST",fullPath:"/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection"})}),tZ=ef.method,t0=ef.extend({create:tZ({method:"POST",fullPath:"/v1/test_helpers/treasury/received_credits"})}),t1=ef.method,t2=ef.extend({retrieve:t1({method:"GET",fullPath:"/v1/treasury/received_credits/{id}"}),list:t1({method:"GET",fullPath:"/v1/treasury/received_credits",methodType:"list"})}),t4=ef.method,t3=ef.extend({create:t4({method:"POST",fullPath:"/v1/test_helpers/treasury/received_debits"})}),t5=ef.method,t6=ef.extend({retrieve:t5({method:"GET",fullPath:"/v1/treasury/received_debits/{id}"}),list:t5({method:"GET",fullPath:"/v1/treasury/received_debits",methodType:"list"})}),t8=ef.method,t7=ef.extend({expire:t8({method:"POST",fullPath:"/v1/test_helpers/refunds/{refund}/expire"})}),t9=ef.method,re=ef.extend({create:t9({method:"POST",fullPath:"/v1/tax/registrations"}),retrieve:t9({method:"GET",fullPath:"/v1/tax/registrations/{id}"}),update:t9({method:"POST",fullPath:"/v1/tax/registrations/{id}"}),list:t9({method:"GET",fullPath:"/v1/tax/registrations",methodType:"list"})}),rt=ef.method,rr=ef.extend({create:rt({method:"POST",fullPath:"/v1/reporting/report_runs"}),retrieve:rt({method:"GET",fullPath:"/v1/reporting/report_runs/{report_run}"}),list:rt({method:"GET",fullPath:"/v1/reporting/report_runs",methodType:"list"})}),ra=ef.method,rn=ef.extend({retrieve:ra({method:"GET",fullPath:"/v1/reporting/report_types/{report_type}"}),list:ra({method:"GET",fullPath:"/v1/reporting/report_types",methodType:"list"})}),ro=ef.method,ri=ef.extend({create:ro({method:"POST",fullPath:"/v1/forwarding/requests"}),retrieve:ro({method:"GET",fullPath:"/v1/forwarding/requests/{id}"}),list:ro({method:"GET",fullPath:"/v1/forwarding/requests",methodType:"list"})}),rs=ef.method,rl=ef.extend({retrieve:rs({method:"GET",fullPath:"/v1/sigma/scheduled_query_runs/{scheduled_query_run}"}),list:rs({method:"GET",fullPath:"/v1/sigma/scheduled_query_runs",methodType:"list"})}),ru=ef.method,rc=ef.extend({create:ru({method:"POST",fullPath:"/v1/apps/secrets"}),list:ru({method:"GET",fullPath:"/v1/apps/secrets",methodType:"list"}),deleteWhere:ru({method:"POST",fullPath:"/v1/apps/secrets/delete"}),find:ru({method:"GET",fullPath:"/v1/apps/secrets/find"})}),rd=ef.method,rh=ef.extend({create:rd({method:"POST",fullPath:"/v1/billing_portal/sessions"})}),rm=ef.method,rp=ef.extend({create:rm({method:"POST",fullPath:"/v1/checkout/sessions"}),retrieve:rm({method:"GET",fullPath:"/v1/checkout/sessions/{session}"}),update:rm({method:"POST",fullPath:"/v1/checkout/sessions/{session}"}),list:rm({method:"GET",fullPath:"/v1/checkout/sessions",methodType:"list"}),expire:rm({method:"POST",fullPath:"/v1/checkout/sessions/{session}/expire"}),listLineItems:rm({method:"GET",fullPath:"/v1/checkout/sessions/{session}/line_items",methodType:"list"})}),ry=ef.method,rf=ef.extend({create:ry({method:"POST",fullPath:"/v1/financial_connections/sessions"}),retrieve:ry({method:"GET",fullPath:"/v1/financial_connections/sessions/{session}"})}),rg=ef.method,rv=ef.extend({retrieve:rg({method:"GET",fullPath:"/v1/tax/settings"}),update:rg({method:"POST",fullPath:"/v1/tax/settings"})}),rb=ef.method,rw=ef.extend({retrieve:rb({method:"GET",fullPath:"/v1/climate/suppliers/{supplier}"}),list:rb({method:"GET",fullPath:"/v1/climate/suppliers",methodType:"list"})}),rk=ef.method,rT=ef.extend({create:rk({method:"POST",fullPath:"/v1/test_helpers/test_clocks"}),retrieve:rk({method:"GET",fullPath:"/v1/test_helpers/test_clocks/{test_clock}"}),list:rk({method:"GET",fullPath:"/v1/test_helpers/test_clocks",methodType:"list"}),del:rk({method:"DELETE",fullPath:"/v1/test_helpers/test_clocks/{test_clock}"}),advance:rk({method:"POST",fullPath:"/v1/test_helpers/test_clocks/{test_clock}/advance"})}),rP=ef.method,rx=ef.extend({retrieve:rP({method:"GET",fullPath:"/v1/issuing/tokens/{token}"}),update:rP({method:"POST",fullPath:"/v1/issuing/tokens/{token}"}),list:rP({method:"GET",fullPath:"/v1/issuing/tokens",methodType:"list"})}),rS=ef.method,rE=ef.extend({retrieve:rS({method:"GET",fullPath:"/v1/treasury/transaction_entries/{id}"}),list:rS({method:"GET",fullPath:"/v1/treasury/transaction_entries",methodType:"list"})}),rA=ef.method,rI=ef.extend({retrieve:rA({method:"GET",fullPath:"/v1/financial_connections/transactions/{transaction}"}),list:rA({method:"GET",fullPath:"/v1/financial_connections/transactions",methodType:"list"})}),r_=ef.method,rC=ef.extend({retrieve:r_({method:"GET",fullPath:"/v1/issuing/transactions/{transaction}"}),update:r_({method:"POST",fullPath:"/v1/issuing/transactions/{transaction}"}),list:r_({method:"GET",fullPath:"/v1/issuing/transactions",methodType:"list"})}),rB=ef.method,rO=ef.extend({retrieve:rB({method:"GET",fullPath:"/v1/tax/transactions/{transaction}"}),createFromCalculation:rB({method:"POST",fullPath:"/v1/tax/transactions/create_from_calculation"}),createReversal:rB({method:"POST",fullPath:"/v1/tax/transactions/create_reversal"}),listLineItems:rB({method:"GET",fullPath:"/v1/tax/transactions/{transaction}/line_items",methodType:"list"})}),rM=ef.method,rR=ef.extend({createForceCapture:rM({method:"POST",fullPath:"/v1/test_helpers/issuing/transactions/create_force_capture"}),createUnlinkedRefund:rM({method:"POST",fullPath:"/v1/test_helpers/issuing/transactions/create_unlinked_refund"}),refund:rM({method:"POST",fullPath:"/v1/test_helpers/issuing/transactions/{transaction}/refund"})}),rj=ef.method,rN=ef.extend({retrieve:rj({method:"GET",fullPath:"/v1/treasury/transactions/{id}"}),list:rj({method:"GET",fullPath:"/v1/treasury/transactions",methodType:"list"})}),rq=ef.method,rG=ef.extend({create:rq({method:"POST",fullPath:"/v1/radar/value_list_items"}),retrieve:rq({method:"GET",fullPath:"/v1/radar/value_list_items/{item}"}),list:rq({method:"GET",fullPath:"/v1/radar/value_list_items",methodType:"list"}),del:rq({method:"DELETE",fullPath:"/v1/radar/value_list_items/{item}"})}),rF=ef.method,rD=ef.extend({create:rF({method:"POST",fullPath:"/v1/radar/value_lists"}),retrieve:rF({method:"GET",fullPath:"/v1/radar/value_lists/{value_list}"}),update:rF({method:"POST",fullPath:"/v1/radar/value_lists/{value_list}"}),list:rF({method:"GET",fullPath:"/v1/radar/value_lists",methodType:"list"}),del:rF({method:"DELETE",fullPath:"/v1/radar/value_lists/{value_list}"})}),rW=ef.method,rL=ef.extend({retrieve:rW({method:"GET",fullPath:"/v1/identity/verification_reports/{report}"}),list:rW({method:"GET",fullPath:"/v1/identity/verification_reports",methodType:"list"})}),rH=ef.method,r$=ef.extend({create:rH({method:"POST",fullPath:"/v1/identity/verification_sessions"}),retrieve:rH({method:"GET",fullPath:"/v1/identity/verification_sessions/{session}"}),update:rH({method:"POST",fullPath:"/v1/identity/verification_sessions/{session}"}),list:rH({method:"GET",fullPath:"/v1/identity/verification_sessions",methodType:"list"}),cancel:rH({method:"POST",fullPath:"/v1/identity/verification_sessions/{session}/cancel"}),redact:rH({method:"POST",fullPath:"/v1/identity/verification_sessions/{session}/redact"})}),rU=ef.method,rY=ef.extend({create:rU({method:"POST",fullPath:"/v1/accounts"}),retrieve(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return"string"==typeof e?rU({method:"GET",fullPath:"/v1/accounts/{id}"}).apply(this,[e,...r]):(null==e&&[].shift.apply([e,...r]),rU({method:"GET",fullPath:"/v1/account"}).apply(this,[e,...r]))},update:rU({method:"POST",fullPath:"/v1/accounts/{account}"}),list:rU({method:"GET",fullPath:"/v1/accounts",methodType:"list"}),del:rU({method:"DELETE",fullPath:"/v1/accounts/{account}"}),createExternalAccount:rU({method:"POST",fullPath:"/v1/accounts/{account}/external_accounts"}),createLoginLink:rU({method:"POST",fullPath:"/v1/accounts/{account}/login_links"}),createPerson:rU({method:"POST",fullPath:"/v1/accounts/{account}/persons"}),deleteExternalAccount:rU({method:"DELETE",fullPath:"/v1/accounts/{account}/external_accounts/{id}"}),deletePerson:rU({method:"DELETE",fullPath:"/v1/accounts/{account}/persons/{person}"}),listCapabilities:rU({method:"GET",fullPath:"/v1/accounts/{account}/capabilities",methodType:"list"}),listExternalAccounts:rU({method:"GET",fullPath:"/v1/accounts/{account}/external_accounts",methodType:"list"}),listPersons:rU({method:"GET",fullPath:"/v1/accounts/{account}/persons",methodType:"list"}),reject:rU({method:"POST",fullPath:"/v1/accounts/{account}/reject"}),retrieveCurrent:rU({method:"GET",fullPath:"/v1/account"}),retrieveCapability:rU({method:"GET",fullPath:"/v1/accounts/{account}/capabilities/{capability}"}),retrieveExternalAccount:rU({method:"GET",fullPath:"/v1/accounts/{account}/external_accounts/{id}"}),retrievePerson:rU({method:"GET",fullPath:"/v1/accounts/{account}/persons/{person}"}),updateCapability:rU({method:"POST",fullPath:"/v1/accounts/{account}/capabilities/{capability}"}),updateExternalAccount:rU({method:"POST",fullPath:"/v1/accounts/{account}/external_accounts/{id}"}),updatePerson:rU({method:"POST",fullPath:"/v1/accounts/{account}/persons/{person}"})}),rz=ef.method,rV=ef.extend({create:rz({method:"POST",fullPath:"/v1/account_links"})}),rK=ef.method,rQ=ef.extend({create:rK({method:"POST",fullPath:"/v1/account_sessions"})}),rJ=ef.method,rX=ef.extend({create:rJ({method:"POST",fullPath:"/v1/apple_pay/domains"}),retrieve:rJ({method:"GET",fullPath:"/v1/apple_pay/domains/{domain}"}),list:rJ({method:"GET",fullPath:"/v1/apple_pay/domains",methodType:"list"}),del:rJ({method:"DELETE",fullPath:"/v1/apple_pay/domains/{domain}"})}),rZ=ef.method,r0=ef.extend({retrieve:rZ({method:"GET",fullPath:"/v1/application_fees/{id}"}),list:rZ({method:"GET",fullPath:"/v1/application_fees",methodType:"list"}),createRefund:rZ({method:"POST",fullPath:"/v1/application_fees/{id}/refunds"}),listRefunds:rZ({method:"GET",fullPath:"/v1/application_fees/{id}/refunds",methodType:"list"}),retrieveRefund:rZ({method:"GET",fullPath:"/v1/application_fees/{fee}/refunds/{id}"}),updateRefund:rZ({method:"POST",fullPath:"/v1/application_fees/{fee}/refunds/{id}"})}),r1=ef.method,r2=ef.extend({retrieve:r1({method:"GET",fullPath:"/v1/balance"})}),r4=ef.method,r3=ef.extend({retrieve:r4({method:"GET",fullPath:"/v1/balance_settings"}),update:r4({method:"POST",fullPath:"/v1/balance_settings"})}),r5=ef.method,r6=ef.extend({retrieve:r5({method:"GET",fullPath:"/v1/balance_transactions/{id}"}),list:r5({method:"GET",fullPath:"/v1/balance_transactions",methodType:"list"})}),r8=ef.method,r7=ef.extend({create:r8({method:"POST",fullPath:"/v1/charges"}),retrieve:r8({method:"GET",fullPath:"/v1/charges/{charge}"}),update:r8({method:"POST",fullPath:"/v1/charges/{charge}"}),list:r8({method:"GET",fullPath:"/v1/charges",methodType:"list"}),capture:r8({method:"POST",fullPath:"/v1/charges/{charge}/capture"}),search:r8({method:"GET",fullPath:"/v1/charges/search",methodType:"search"})}),r9=ef.method,ae=ef.extend({retrieve:r9({method:"GET",fullPath:"/v1/confirmation_tokens/{confirmation_token}"})}),at=ef.method,ar=ef.extend({retrieve:at({method:"GET",fullPath:"/v1/country_specs/{country}"}),list:at({method:"GET",fullPath:"/v1/country_specs",methodType:"list"})}),aa=ef.method,an=ef.extend({create:aa({method:"POST",fullPath:"/v1/coupons"}),retrieve:aa({method:"GET",fullPath:"/v1/coupons/{coupon}"}),update:aa({method:"POST",fullPath:"/v1/coupons/{coupon}"}),list:aa({method:"GET",fullPath:"/v1/coupons",methodType:"list"}),del:aa({method:"DELETE",fullPath:"/v1/coupons/{coupon}"})}),ao=ef.method,ai=ef.extend({create:ao({method:"POST",fullPath:"/v1/credit_notes"}),retrieve:ao({method:"GET",fullPath:"/v1/credit_notes/{id}"}),update:ao({method:"POST",fullPath:"/v1/credit_notes/{id}"}),list:ao({method:"GET",fullPath:"/v1/credit_notes",methodType:"list"}),listLineItems:ao({method:"GET",fullPath:"/v1/credit_notes/{credit_note}/lines",methodType:"list"}),listPreviewLineItems:ao({method:"GET",fullPath:"/v1/credit_notes/preview/lines",methodType:"list"}),preview:ao({method:"GET",fullPath:"/v1/credit_notes/preview"}),voidCreditNote:ao({method:"POST",fullPath:"/v1/credit_notes/{id}/void"})}),as=ef.method,al=ef.extend({create:as({method:"POST",fullPath:"/v1/customer_sessions"})}),au=ef.method,ac=ef.extend({create:au({method:"POST",fullPath:"/v1/customers"}),retrieve:au({method:"GET",fullPath:"/v1/customers/{customer}"}),update:au({method:"POST",fullPath:"/v1/customers/{customer}"}),list:au({method:"GET",fullPath:"/v1/customers",methodType:"list"}),del:au({method:"DELETE",fullPath:"/v1/customers/{customer}"}),createBalanceTransaction:au({method:"POST",fullPath:"/v1/customers/{customer}/balance_transactions"}),createFundingInstructions:au({method:"POST",fullPath:"/v1/customers/{customer}/funding_instructions"}),createSource:au({method:"POST",fullPath:"/v1/customers/{customer}/sources"}),createTaxId:au({method:"POST",fullPath:"/v1/customers/{customer}/tax_ids"}),deleteDiscount:au({method:"DELETE",fullPath:"/v1/customers/{customer}/discount"}),deleteSource:au({method:"DELETE",fullPath:"/v1/customers/{customer}/sources/{id}"}),deleteTaxId:au({method:"DELETE",fullPath:"/v1/customers/{customer}/tax_ids/{id}"}),listBalanceTransactions:au({method:"GET",fullPath:"/v1/customers/{customer}/balance_transactions",methodType:"list"}),listCashBalanceTransactions:au({method:"GET",fullPath:"/v1/customers/{customer}/cash_balance_transactions",methodType:"list"}),listPaymentMethods:au({method:"GET",fullPath:"/v1/customers/{customer}/payment_methods",methodType:"list"}),listSources:au({method:"GET",fullPath:"/v1/customers/{customer}/sources",methodType:"list"}),listTaxIds:au({method:"GET",fullPath:"/v1/customers/{customer}/tax_ids",methodType:"list"}),retrieveBalanceTransaction:au({method:"GET",fullPath:"/v1/customers/{customer}/balance_transactions/{transaction}"}),retrieveCashBalance:au({method:"GET",fullPath:"/v1/customers/{customer}/cash_balance"}),retrieveCashBalanceTransaction:au({method:"GET",fullPath:"/v1/customers/{customer}/cash_balance_transactions/{transaction}"}),retrievePaymentMethod:au({method:"GET",fullPath:"/v1/customers/{customer}/payment_methods/{payment_method}"}),retrieveSource:au({method:"GET",fullPath:"/v1/customers/{customer}/sources/{id}"}),retrieveTaxId:au({method:"GET",fullPath:"/v1/customers/{customer}/tax_ids/{id}"}),search:au({method:"GET",fullPath:"/v1/customers/search",methodType:"search"}),updateBalanceTransaction:au({method:"POST",fullPath:"/v1/customers/{customer}/balance_transactions/{transaction}"}),updateCashBalance:au({method:"POST",fullPath:"/v1/customers/{customer}/cash_balance"}),updateSource:au({method:"POST",fullPath:"/v1/customers/{customer}/sources/{id}"}),verifySource:au({method:"POST",fullPath:"/v1/customers/{customer}/sources/{id}/verify"})}),ad=ef.method,ah=ef.extend({retrieve:ad({method:"GET",fullPath:"/v1/disputes/{dispute}"}),update:ad({method:"POST",fullPath:"/v1/disputes/{dispute}"}),list:ad({method:"GET",fullPath:"/v1/disputes",methodType:"list"}),close:ad({method:"POST",fullPath:"/v1/disputes/{dispute}/close"})}),am=ef.method,ap=ef.extend({create:am({method:"POST",fullPath:"/v1/ephemeral_keys",validator:(e,t)=>{if(!t.headers||!t.headers["Stripe-Version"])throw Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node")}}),del:am({method:"DELETE",fullPath:"/v1/ephemeral_keys/{key}"})}),ay=ef.method,af=ef.extend({retrieve:ay({method:"GET",fullPath:"/v1/events/{id}"}),list:ay({method:"GET",fullPath:"/v1/events",methodType:"list"})}),ag=ef.method,av=ef.extend({retrieve:ag({method:"GET",fullPath:"/v1/exchange_rates/{rate_id}"}),list:ag({method:"GET",fullPath:"/v1/exchange_rates",methodType:"list"})}),ab=ef.method,aw=ef.extend({create:ab({method:"POST",fullPath:"/v1/file_links"}),retrieve:ab({method:"GET",fullPath:"/v1/file_links/{link}"}),update:ab({method:"POST",fullPath:"/v1/file_links/{link}"}),list:ab({method:"GET",fullPath:"/v1/file_links",methodType:"list"})}),ak=ef.method,aT=ef.extend({create:ak({method:"POST",fullPath:"/v1/files",headers:{"Content-Type":"multipart/form-data"},host:"files.stripe.com"}),retrieve:ak({method:"GET",fullPath:"/v1/files/{file}"}),list:ak({method:"GET",fullPath:"/v1/files",methodType:"list"}),requestDataProcessor:function(e,t,r,a){if(t=t||{},"POST"!==e)return a(null,x(t));this._stripe._platformFunctions.tryBufferData(t).then(e=>a(null,((e,t,r)=>{let a,n,o=(Math.round(1e16*Math.random())+Math.round(1e16*Math.random())).toString();r["Content-Type"]=`multipart/form-data; boundary=${o}`;let i=new TextEncoder,s=new Uint8Array(0),l=i.encode("\r\n");function u(e){let t=s,r=e instanceof Uint8Array?e:new Uint8Array(i.encode(e));(s=new Uint8Array(t.length+r.length+2)).set(t),s.set(r,t.length),s.set(l,s.length-2)}function c(e){return`"${e.replace(/"|"/g,"%22").replace(/\r\n|\r|\n/g," ")}"`}let d=(a={},(n=(e,t)=>{Object.entries(e).forEach(e=>{let r,[o,i]=e,s=t?`${t}[${o}]`:o;if(("function"==(r=typeof i)||"object"===r)&&i){if(!(i instanceof Uint8Array)&&!Object.prototype.hasOwnProperty.call(i,"data"))return n(i,s);a[s]=i}else a[s]=String(i)})})(t,null),a);for(let e in d){if(!Object.prototype.hasOwnProperty.call(d,e))continue;let t=d[e];u(`--${o}`),Object.prototype.hasOwnProperty.call(t,"data")?(u(`Content-Disposition: form-data; name=${c(e)}; filename=${c(t.name||"blob")}`),u(`Content-Type: ${t.type||"application/octet-stream"}`),u(""),u(t.data)):(u(`Content-Disposition: form-data; name=${c(e)}`),u(""),u(t))}return u(`--${o}--`),s})(0,e,r))).catch(e=>a(e,null))}}),aP=ef.method,ax=ef.extend({create:aP({method:"POST",fullPath:"/v1/invoiceitems"}),retrieve:aP({method:"GET",fullPath:"/v1/invoiceitems/{invoiceitem}"}),update:aP({method:"POST",fullPath:"/v1/invoiceitems/{invoiceitem}"}),list:aP({method:"GET",fullPath:"/v1/invoiceitems",methodType:"list"}),del:aP({method:"DELETE",fullPath:"/v1/invoiceitems/{invoiceitem}"})}),aS=ef.method,aE=ef.extend({retrieve:aS({method:"GET",fullPath:"/v1/invoice_payments/{invoice_payment}"}),list:aS({method:"GET",fullPath:"/v1/invoice_payments",methodType:"list"})}),aA=ef.method,aI=ef.extend({retrieve:aA({method:"GET",fullPath:"/v1/invoice_rendering_templates/{template}"}),list:aA({method:"GET",fullPath:"/v1/invoice_rendering_templates",methodType:"list"}),archive:aA({method:"POST",fullPath:"/v1/invoice_rendering_templates/{template}/archive"}),unarchive:aA({method:"POST",fullPath:"/v1/invoice_rendering_templates/{template}/unarchive"})}),a_=ef.method,aC=ef.extend({create:a_({method:"POST",fullPath:"/v1/invoices"}),retrieve:a_({method:"GET",fullPath:"/v1/invoices/{invoice}"}),update:a_({method:"POST",fullPath:"/v1/invoices/{invoice}"}),list:a_({method:"GET",fullPath:"/v1/invoices",methodType:"list"}),del:a_({method:"DELETE",fullPath:"/v1/invoices/{invoice}"}),addLines:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/add_lines"}),attachPayment:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/attach_payment"}),createPreview:a_({method:"POST",fullPath:"/v1/invoices/create_preview"}),finalizeInvoice:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/finalize"}),listLineItems:a_({method:"GET",fullPath:"/v1/invoices/{invoice}/lines",methodType:"list"}),markUncollectible:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/mark_uncollectible"}),pay:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/pay"}),removeLines:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/remove_lines"}),search:a_({method:"GET",fullPath:"/v1/invoices/search",methodType:"search"}),sendInvoice:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/send"}),updateLines:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/update_lines"}),updateLineItem:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/lines/{line_item_id}"}),voidInvoice:a_({method:"POST",fullPath:"/v1/invoices/{invoice}/void"})}),aB=ef.method,aO=ef.extend({retrieve:aB({method:"GET",fullPath:"/v1/mandates/{mandate}"})}),aM=ef.method,aR="connect.stripe.com",aj=ef.extend({basePath:"/",authorizeUrl(e,t){e=e||{};let r="oauth/authorize";return(t=t||{}).express&&(r=`express/${r}`),e.response_type||(e.response_type="code"),e.client_id||(e.client_id=this._stripe.getClientId()),e.scope||(e.scope="read_write"),`https://${aR}/${r}?${x(e)}`},token:aM({method:"POST",path:"oauth/token",host:aR}),deauthorize(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return e.client_id||(e.client_id=this._stripe.getClientId()),aM({method:"POST",path:"oauth/deauthorize",host:aR}).apply(this,[e,...r])}}),aN=ef.method,aq=ef.extend({retrieve:aN({method:"GET",fullPath:"/v1/payment_attempt_records/{id}"}),list:aN({method:"GET",fullPath:"/v1/payment_attempt_records",methodType:"list"})}),aG=ef.method,aF=ef.extend({create:aG({method:"POST",fullPath:"/v1/payment_intents"}),retrieve:aG({method:"GET",fullPath:"/v1/payment_intents/{intent}"}),update:aG({method:"POST",fullPath:"/v1/payment_intents/{intent}"}),list:aG({method:"GET",fullPath:"/v1/payment_intents",methodType:"list"}),applyCustomerBalance:aG({method:"POST",fullPath:"/v1/payment_intents/{intent}/apply_customer_balance"}),cancel:aG({method:"POST",fullPath:"/v1/payment_intents/{intent}/cancel"}),capture:aG({method:"POST",fullPath:"/v1/payment_intents/{intent}/capture"}),confirm:aG({method:"POST",fullPath:"/v1/payment_intents/{intent}/confirm"}),incrementAuthorization:aG({method:"POST",fullPath:"/v1/payment_intents/{intent}/increment_authorization"}),listAmountDetailsLineItems:aG({method:"GET",fullPath:"/v1/payment_intents/{intent}/amount_details_line_items",methodType:"list"}),search:aG({method:"GET",fullPath:"/v1/payment_intents/search",methodType:"search"}),verifyMicrodeposits:aG({method:"POST",fullPath:"/v1/payment_intents/{intent}/verify_microdeposits"})}),aD=ef.method,aW=ef.extend({create:aD({method:"POST",fullPath:"/v1/payment_links"}),retrieve:aD({method:"GET",fullPath:"/v1/payment_links/{payment_link}"}),update:aD({method:"POST",fullPath:"/v1/payment_links/{payment_link}"}),list:aD({method:"GET",fullPath:"/v1/payment_links",methodType:"list"}),listLineItems:aD({method:"GET",fullPath:"/v1/payment_links/{payment_link}/line_items",methodType:"list"})}),aL=ef.method,aH=ef.extend({create:aL({method:"POST",fullPath:"/v1/payment_method_configurations"}),retrieve:aL({method:"GET",fullPath:"/v1/payment_method_configurations/{configuration}"}),update:aL({method:"POST",fullPath:"/v1/payment_method_configurations/{configuration}"}),list:aL({method:"GET",fullPath:"/v1/payment_method_configurations",methodType:"list"})}),a$=ef.method,aU=ef.extend({create:a$({method:"POST",fullPath:"/v1/payment_method_domains"}),retrieve:a$({method:"GET",fullPath:"/v1/payment_method_domains/{payment_method_domain}"}),update:a$({method:"POST",fullPath:"/v1/payment_method_domains/{payment_method_domain}"}),list:a$({method:"GET",fullPath:"/v1/payment_method_domains",methodType:"list"}),validate:a$({method:"POST",fullPath:"/v1/payment_method_domains/{payment_method_domain}/validate"})}),aY=ef.method,az=ef.extend({create:aY({method:"POST",fullPath:"/v1/payment_methods"}),retrieve:aY({method:"GET",fullPath:"/v1/payment_methods/{payment_method}"}),update:aY({method:"POST",fullPath:"/v1/payment_methods/{payment_method}"}),list:aY({method:"GET",fullPath:"/v1/payment_methods",methodType:"list"}),attach:aY({method:"POST",fullPath:"/v1/payment_methods/{payment_method}/attach"}),detach:aY({method:"POST",fullPath:"/v1/payment_methods/{payment_method}/detach"})}),aV=ef.method,aK=ef.extend({retrieve:aV({method:"GET",fullPath:"/v1/payment_records/{id}"}),reportPayment:aV({method:"POST",fullPath:"/v1/payment_records/report_payment"}),reportPaymentAttempt:aV({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt"}),reportPaymentAttemptCanceled:aV({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt_canceled"}),reportPaymentAttemptFailed:aV({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt_failed"}),reportPaymentAttemptGuaranteed:aV({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt_guaranteed"}),reportPaymentAttemptInformational:aV({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt_informational"}),reportRefund:aV({method:"POST",fullPath:"/v1/payment_records/{id}/report_refund"})}),aQ=ef.method,aJ=ef.extend({create:aQ({method:"POST",fullPath:"/v1/payouts"}),retrieve:aQ({method:"GET",fullPath:"/v1/payouts/{payout}"}),update:aQ({method:"POST",fullPath:"/v1/payouts/{payout}"}),list:aQ({method:"GET",fullPath:"/v1/payouts",methodType:"list"}),cancel:aQ({method:"POST",fullPath:"/v1/payouts/{payout}/cancel"}),reverse:aQ({method:"POST",fullPath:"/v1/payouts/{payout}/reverse"})}),aX=ef.method,aZ=ef.extend({create:aX({method:"POST",fullPath:"/v1/plans"}),retrieve:aX({method:"GET",fullPath:"/v1/plans/{plan}"}),update:aX({method:"POST",fullPath:"/v1/plans/{plan}"}),list:aX({method:"GET",fullPath:"/v1/plans",methodType:"list"}),del:aX({method:"DELETE",fullPath:"/v1/plans/{plan}"})}),a0=ef.method,a1=ef.extend({create:a0({method:"POST",fullPath:"/v1/prices"}),retrieve:a0({method:"GET",fullPath:"/v1/prices/{price}"}),update:a0({method:"POST",fullPath:"/v1/prices/{price}"}),list:a0({method:"GET",fullPath:"/v1/prices",methodType:"list"}),search:a0({method:"GET",fullPath:"/v1/prices/search",methodType:"search"})}),a2=ef.method,a4=ef.extend({create:a2({method:"POST",fullPath:"/v1/products"}),retrieve:a2({method:"GET",fullPath:"/v1/products/{id}"}),update:a2({method:"POST",fullPath:"/v1/products/{id}"}),list:a2({method:"GET",fullPath:"/v1/products",methodType:"list"}),del:a2({method:"DELETE",fullPath:"/v1/products/{id}"}),createFeature:a2({method:"POST",fullPath:"/v1/products/{product}/features"}),deleteFeature:a2({method:"DELETE",fullPath:"/v1/products/{product}/features/{id}"}),listFeatures:a2({method:"GET",fullPath:"/v1/products/{product}/features",methodType:"list"}),retrieveFeature:a2({method:"GET",fullPath:"/v1/products/{product}/features/{id}"}),search:a2({method:"GET",fullPath:"/v1/products/search",methodType:"search"})}),a3=ef.method,a5=ef.extend({create:a3({method:"POST",fullPath:"/v1/promotion_codes"}),retrieve:a3({method:"GET",fullPath:"/v1/promotion_codes/{promotion_code}"}),update:a3({method:"POST",fullPath:"/v1/promotion_codes/{promotion_code}"}),list:a3({method:"GET",fullPath:"/v1/promotion_codes",methodType:"list"})}),a6=ef.method,a8=ef.extend({create:a6({method:"POST",fullPath:"/v1/quotes"}),retrieve:a6({method:"GET",fullPath:"/v1/quotes/{quote}"}),update:a6({method:"POST",fullPath:"/v1/quotes/{quote}"}),list:a6({method:"GET",fullPath:"/v1/quotes",methodType:"list"}),accept:a6({method:"POST",fullPath:"/v1/quotes/{quote}/accept"}),cancel:a6({method:"POST",fullPath:"/v1/quotes/{quote}/cancel"}),finalizeQuote:a6({method:"POST",fullPath:"/v1/quotes/{quote}/finalize"}),listComputedUpfrontLineItems:a6({method:"GET",fullPath:"/v1/quotes/{quote}/computed_upfront_line_items",methodType:"list"}),listLineItems:a6({method:"GET",fullPath:"/v1/quotes/{quote}/line_items",methodType:"list"}),pdf:a6({method:"GET",fullPath:"/v1/quotes/{quote}/pdf",host:"files.stripe.com",streaming:!0})}),a7=ef.method,a9=ef.extend({create:a7({method:"POST",fullPath:"/v1/refunds"}),retrieve:a7({method:"GET",fullPath:"/v1/refunds/{refund}"}),update:a7({method:"POST",fullPath:"/v1/refunds/{refund}"}),list:a7({method:"GET",fullPath:"/v1/refunds",methodType:"list"}),cancel:a7({method:"POST",fullPath:"/v1/refunds/{refund}/cancel"})}),ne=ef.method,nt=ef.extend({retrieve:ne({method:"GET",fullPath:"/v1/reviews/{review}"}),list:ne({method:"GET",fullPath:"/v1/reviews",methodType:"list"}),approve:ne({method:"POST",fullPath:"/v1/reviews/{review}/approve"})}),nr=ef.method,na=ef.extend({list:nr({method:"GET",fullPath:"/v1/setup_attempts",methodType:"list"})}),nn=ef.method,no=ef.extend({create:nn({method:"POST",fullPath:"/v1/setup_intents"}),retrieve:nn({method:"GET",fullPath:"/v1/setup_intents/{intent}"}),update:nn({method:"POST",fullPath:"/v1/setup_intents/{intent}"}),list:nn({method:"GET",fullPath:"/v1/setup_intents",methodType:"list"}),cancel:nn({method:"POST",fullPath:"/v1/setup_intents/{intent}/cancel"}),confirm:nn({method:"POST",fullPath:"/v1/setup_intents/{intent}/confirm"}),verifyMicrodeposits:nn({method:"POST",fullPath:"/v1/setup_intents/{intent}/verify_microdeposits"})}),ni=ef.method,ns=ef.extend({create:ni({method:"POST",fullPath:"/v1/shipping_rates"}),retrieve:ni({method:"GET",fullPath:"/v1/shipping_rates/{shipping_rate_token}"}),update:ni({method:"POST",fullPath:"/v1/shipping_rates/{shipping_rate_token}"}),list:ni({method:"GET",fullPath:"/v1/shipping_rates",methodType:"list"})}),nl=ef.method,nu=ef.extend({create:nl({method:"POST",fullPath:"/v1/sources"}),retrieve:nl({method:"GET",fullPath:"/v1/sources/{source}"}),update:nl({method:"POST",fullPath:"/v1/sources/{source}"}),listSourceTransactions:nl({method:"GET",fullPath:"/v1/sources/{source}/source_transactions",methodType:"list"}),verify:nl({method:"POST",fullPath:"/v1/sources/{source}/verify"})}),nc=ef.method,nd=ef.extend({create:nc({method:"POST",fullPath:"/v1/subscription_items"}),retrieve:nc({method:"GET",fullPath:"/v1/subscription_items/{item}"}),update:nc({method:"POST",fullPath:"/v1/subscription_items/{item}"}),list:nc({method:"GET",fullPath:"/v1/subscription_items",methodType:"list"}),del:nc({method:"DELETE",fullPath:"/v1/subscription_items/{item}"})}),nh=ef.method,nm=ef.extend({create:nh({method:"POST",fullPath:"/v1/subscription_schedules"}),retrieve:nh({method:"GET",fullPath:"/v1/subscription_schedules/{schedule}"}),update:nh({method:"POST",fullPath:"/v1/subscription_schedules/{schedule}"}),list:nh({method:"GET",fullPath:"/v1/subscription_schedules",methodType:"list"}),cancel:nh({method:"POST",fullPath:"/v1/subscription_schedules/{schedule}/cancel"}),release:nh({method:"POST",fullPath:"/v1/subscription_schedules/{schedule}/release"})}),np=ef.method,ny=ef.extend({create:np({method:"POST",fullPath:"/v1/subscriptions"}),retrieve:np({method:"GET",fullPath:"/v1/subscriptions/{subscription_exposed_id}"}),update:np({method:"POST",fullPath:"/v1/subscriptions/{subscription_exposed_id}"}),list:np({method:"GET",fullPath:"/v1/subscriptions",methodType:"list"}),cancel:np({method:"DELETE",fullPath:"/v1/subscriptions/{subscription_exposed_id}"}),deleteDiscount:np({method:"DELETE",fullPath:"/v1/subscriptions/{subscription_exposed_id}/discount"}),migrate:np({method:"POST",fullPath:"/v1/subscriptions/{subscription}/migrate"}),resume:np({method:"POST",fullPath:"/v1/subscriptions/{subscription}/resume"}),search:np({method:"GET",fullPath:"/v1/subscriptions/search",methodType:"search"})}),nf=ef.method,ng=ef.extend({retrieve:nf({method:"GET",fullPath:"/v1/tax_codes/{id}"}),list:nf({method:"GET",fullPath:"/v1/tax_codes",methodType:"list"})}),nv=ef.method,nb=ef.extend({create:nv({method:"POST",fullPath:"/v1/tax_ids"}),retrieve:nv({method:"GET",fullPath:"/v1/tax_ids/{id}"}),list:nv({method:"GET",fullPath:"/v1/tax_ids",methodType:"list"}),del:nv({method:"DELETE",fullPath:"/v1/tax_ids/{id}"})}),nw=ef.method,nk=ef.extend({create:nw({method:"POST",fullPath:"/v1/tax_rates"}),retrieve:nw({method:"GET",fullPath:"/v1/tax_rates/{tax_rate}"}),update:nw({method:"POST",fullPath:"/v1/tax_rates/{tax_rate}"}),list:nw({method:"GET",fullPath:"/v1/tax_rates",methodType:"list"})}),nT=ef.method,nP=ef.extend({create:nT({method:"POST",fullPath:"/v1/tokens"}),retrieve:nT({method:"GET",fullPath:"/v1/tokens/{token}"})}),nx=ef.method,nS=ef.extend({create:nx({method:"POST",fullPath:"/v1/topups"}),retrieve:nx({method:"GET",fullPath:"/v1/topups/{topup}"}),update:nx({method:"POST",fullPath:"/v1/topups/{topup}"}),list:nx({method:"GET",fullPath:"/v1/topups",methodType:"list"}),cancel:nx({method:"POST",fullPath:"/v1/topups/{topup}/cancel"})}),nE=ef.method,nA=ef.extend({create:nE({method:"POST",fullPath:"/v1/transfers"}),retrieve:nE({method:"GET",fullPath:"/v1/transfers/{transfer}"}),update:nE({method:"POST",fullPath:"/v1/transfers/{transfer}"}),list:nE({method:"GET",fullPath:"/v1/transfers",methodType:"list"}),createReversal:nE({method:"POST",fullPath:"/v1/transfers/{id}/reversals"}),listReversals:nE({method:"GET",fullPath:"/v1/transfers/{id}/reversals",methodType:"list"}),retrieveReversal:nE({method:"GET",fullPath:"/v1/transfers/{transfer}/reversals/{id}"}),updateReversal:nE({method:"POST",fullPath:"/v1/transfers/{transfer}/reversals/{id}"})}),nI=ef.method,n_=ef.extend({create:nI({method:"POST",fullPath:"/v1/webhook_endpoints"}),retrieve:nI({method:"GET",fullPath:"/v1/webhook_endpoints/{webhook_endpoint}"}),update:nI({method:"POST",fullPath:"/v1/webhook_endpoints/{webhook_endpoint}"}),list:nI({method:"GET",fullPath:"/v1/webhook_endpoints",methodType:"list"}),del:nI({method:"DELETE",fullPath:"/v1/webhook_endpoints/{webhook_endpoint}"})}),nC=ew("apps",{Secrets:rc}),nB=ew("billing",{Alerts:eE,CreditBalanceSummary:eQ,CreditBalanceTransactions:eX,CreditGrants:e0,MeterEventAdjustments:tf,MeterEvents:tx,Meters:tI}),nO=ew("billingPortal",{Configurations:eL,Sessions:rh}),nM=ew("checkout",{Sessions:rp}),nR=ew("climate",{Orders:tO,Products:tV,Suppliers:rw}),nj=ew("entitlements",{ActiveEntitlements:ex,Features:ti}),nN=ew("financialConnections",{Accounts:eT,Sessions:rf,Transactions:rI}),nq=ew("forwarding",{Requests:ri}),nG=ew("identity",{VerificationReports:rL,VerificationSessions:r$}),nF=ew("issuing",{Authorizations:eC,Cardholders:eN,Cards:eG,Disputes:e7,PersonalizationDesigns:tL,PhysicalBundles:tY,Tokens:rx,Transactions:rC}),nD=ew("radar",{EarlyFraudWarnings:te,ValueListItems:rG,ValueLists:rD}),nW=ew("reporting",{ReportRuns:rr,ReportTypes:rn}),nL=ew("sigma",{ScheduledQueryRuns:rl}),nH=ew("tax",{Associations:eI,Calculations:eR,Registrations:re,Settings:rv,Transactions:rO}),n$=ew("terminal",{Configurations:e$,ConnectionTokens:eV,Locations:tp,OnboardingLinks:tC,Readers:tQ}),nU=ew("testHelpers",{ConfirmationTokens:eY,Customers:e3,Refunds:t7,TestClocks:rT,Issuing:ew("issuing",{Authorizations:eO,Cards:eD,PersonalizationDesigns:t$,Transactions:rR}),Terminal:ew("terminal",{Readers:tX}),Treasury:ew("treasury",{InboundTransfers:tc,OutboundPayments:tR,OutboundTransfers:tG,ReceivedCredits:t0,ReceivedDebits:t3})}),nY=ew("treasury",{CreditReversals:e2,DebitReversals:e6,FinancialAccounts:tl,InboundTransfers:th,OutboundPayments:tN,OutboundTransfers:tD,ReceivedCredits:t2,ReceivedDebits:t6,TransactionEntries:rE,Transactions:rN}),nz=ew("v2",{Billing:ew("billing",{MeterEventAdjustments:tv,MeterEventSession:tw,MeterEventStream:tT,MeterEvents:tE}),Core:ew("core",{EventDestinations:tr,Events:tn})});e.s(["Apps",0,nC,"Billing",0,nB,"BillingPortal",0,nO,"Checkout",0,nM,"Climate",0,nR,"Entitlements",0,nj,"FinancialConnections",0,nN,"Forwarding",0,nq,"Identity",0,nG,"Issuing",0,nF,"Radar",0,nD,"Reporting",0,nW,"Sigma",0,nL,"Tax",0,nH,"Terminal",0,n$,"TestHelpers",0,nU,"Treasury",0,nY,"V2",0,nz],70781),e.i(70781),e.s(["Account",0,rY,"AccountLinks",0,rV,"AccountSessions",0,rQ,"Accounts",0,rY,"ApplePayDomains",0,rX,"ApplicationFees",0,r0,"Apps",0,nC,"Balance",0,r2,"BalanceSettings",0,r3,"BalanceTransactions",0,r6,"Billing",0,nB,"BillingPortal",0,nO,"Charges",0,r7,"Checkout",0,nM,"Climate",0,nR,"ConfirmationTokens",0,ae,"CountrySpecs",0,ar,"Coupons",0,an,"CreditNotes",0,ai,"CustomerSessions",0,al,"Customers",0,ac,"Disputes",0,ah,"Entitlements",0,nj,"EphemeralKeys",0,ap,"Events",0,af,"ExchangeRates",0,av,"FileLinks",0,aw,"Files",0,aT,"FinancialConnections",0,nN,"Forwarding",0,nq,"Identity",0,nG,"InvoiceItems",0,ax,"InvoicePayments",0,aE,"InvoiceRenderingTemplates",0,aI,"Invoices",0,aC,"Issuing",0,nF,"Mandates",0,aO,"OAuth",0,aj,"PaymentAttemptRecords",0,aq,"PaymentIntents",0,aF,"PaymentLinks",0,aW,"PaymentMethodConfigurations",0,aH,"PaymentMethodDomains",0,aU,"PaymentMethods",0,az,"PaymentRecords",0,aK,"Payouts",0,aJ,"Plans",0,aZ,"Prices",0,a1,"Products",0,a4,"PromotionCodes",0,a5,"Quotes",0,a8,"Radar",0,nD,"Refunds",0,a9,"Reporting",0,nW,"Reviews",0,nt,"SetupAttempts",0,na,"SetupIntents",0,no,"ShippingRates",0,ns,"Sigma",0,nL,"Sources",0,nu,"SubscriptionItems",0,nd,"SubscriptionSchedules",0,nm,"Subscriptions",0,ny,"Tax",0,nH,"TaxCodes",0,ng,"TaxIds",0,nb,"TaxRates",0,nk,"Terminal",0,n$,"TestHelpers",0,nU,"Tokens",0,nP,"Topups",0,nS,"Transfers",0,nA,"Treasury",0,nY,"V2",0,nz,"WebhookEndpoints",0,n_],52207);var nV=e.i(52207);let nK="api.stripe.com",nQ="/v1/",nJ=["name","version","url","partner_id"],nX=["authenticator","apiVersion","typescript","maxNetworkRetries","httpAgent","httpClient","timeout","host","port","protocol","telemetry","appInfo","stripeAccount","stripeContext"],nZ=e=>new eu(e,ef.MAX_BUFFERED_REQUEST_METRICS);!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nZ;function r(a){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(this instanceof r))return new r(a,n);let o=this._getPropsFromConfig(n);this._platformFunctions=e,Object.defineProperty(this,"_emitter",{value:this._platformFunctions.createEmitter(),enumerable:!1,configurable:!1,writable:!1}),this.VERSION=r.PACKAGE_VERSION,this.on=this._emitter.on.bind(this._emitter),this.once=this._emitter.once.bind(this._emitter),this.off=this._emitter.removeListener.bind(this._emitter);let i=o.httpAgent||null;this._api={host:o.host||nK,port:o.port||"443",protocol:o.protocol||"https",basePath:nQ,version:o.apiVersion||ev,timeout:B("timeout",o.timeout,8e4),maxNetworkRetries:B("maxNetworkRetries",o.maxNetworkRetries,2),agent:i,httpClient:o.httpClient||(i?this._platformFunctions.createNodeHttpClient(i):this._platformFunctions.createDefaultHttpClient()),dev:!1,stripeAccount:o.stripeAccount||null,stripeContext:o.stripeContext||null};let s=o.typescript||!1;s!==r.USER_AGENT.typescript&&(r.USER_AGENT.typescript=s),o.appInfo&&this._setAppInfo(o.appInfo),this._prepResources(),this._setAuthenticator(a,o.authenticator),this.errors=el,this.webhooks=r.webhooks,this._prevRequestMetrics=[],this._enableTelemetry=!1!==o.telemetry,this._requestSender=t(this),this.StripeResource=r.StripeResource}r.PACKAGE_VERSION="20.0.0",r.API_VERSION=ev,r.USER_AGENT=Object.assign({bindings_version:r.PACKAGE_VERSION,lang:"node",publisher:"stripe",uname:null,typescript:!1},void 0===w.default?{}:{lang_version:w.default.version,platform:w.default.platform}),r.StripeResource=ef,r.StripeContext=eg,r.resources=nV,r.HttpClient=N,r.HttpClientResponse=q,r.CryptoProvider=D,r.webhooks=function(e){let t={DEFAULT_TOLERANCE:300,signature:null,constructEvent(e,r,a,n,o,i){try{if(!this.signature)throw Error("ERR: missing signature helper, unable to verify");this.signature.verifyHeader(e,r,a,n||t.DEFAULT_TOLERANCE,o,i)}catch(e){throw e instanceof W&&(e.message+="\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`"),e}return e instanceof Uint8Array?JSON.parse(new TextDecoder("utf8").decode(e)):JSON.parse(e)},async constructEventAsync(e,r,a,n,o,i){if(!this.signature)throw Error("ERR: missing signature helper, unable to verify");return await this.signature.verifyHeaderAsync(e,r,a,n||t.DEFAULT_TOLERANCE,o,i),e instanceof Uint8Array?JSON.parse(new TextDecoder("utf8").decode(e)):JSON.parse(e)},generateTestHeaderString:function(e){let t=l(e),r=t.signature||t.cryptoProvider.computeHMACSignature(t.payloadString,t.secret);return t.generateHeaderString(r)},generateTestHeaderStringAsync:async function(e){let t=l(e),r=t.signature||await t.cryptoProvider.computeHMACSignatureAsync(t.payloadString,t.secret);return t.generateHeaderString(r)}},r={EXPECTED_SCHEME:"v1",verifyHeader(e,t,r,i,l,u){let{decodedHeader:c,decodedPayload:d,details:h,suspectPayloadType:m}=n(e,t,this.EXPECTED_SCHEME),p=/\s/.test(r),y=(l=l||s()).computeHMACSignature(a(d,h),r);return o(d,c,h,y,i,m,p,u),!0},async verifyHeaderAsync(e,t,r,i,l,u){let{decodedHeader:c,decodedPayload:d,details:h,suspectPayloadType:m}=n(e,t,this.EXPECTED_SCHEME),p=/\s/.test(r);l=l||s();let y=await l.computeHMACSignatureAsync(a(d,h),r);return o(d,c,h,y,i,m,p,u)}};function a(e,t){return`${t.timestamp}.${e}`}function n(e,t,r){var a,n;if(!e)throw new ea(t,e,{message:"No webhook payload was provided."});let o="string"!=typeof e&&!(e instanceof Uint8Array),i=new TextDecoder("utf8"),s=e instanceof Uint8Array?i.decode(e):e;if(Array.isArray(t))throw Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");if(null==t||""==t)throw new ea(t,e,{message:"No stripe-signature header value was provided."});let l=t instanceof Uint8Array?i.decode(t):t,u=(a=l,n=r,"string"!=typeof a?null:a.split(",").reduce((e,t)=>{let r=t.split("=");return"t"===r[0]&&(e.timestamp=parseInt(r[1],10)),r[0]===n&&e.signatures.push(r[1]),e},{timestamp:-1,signatures:[]}));if(!u||-1===u.timestamp)throw new ea(l,s,{message:"Unable to extract timestamp and signatures from header"});if(!u.signatures.length)throw new ea(l,s,{message:"No signatures found with expected scheme"});return{decodedPayload:s,decodedHeader:l,details:u,suspectPayloadType:o}}function o(t,r,a,n,o,i,s,l){let u=!!a.signatures.filter(e.secureCompare.bind(e,n)).length,c="\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://docs.stripe.com/webhooks/signature",d=s?"\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value":"";if(!u){if(i)throw new ea(r,t,{message:"Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n"+c+"\n"+d});throw new ea(r,t,{message:"No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.\n"+c+"\n"+d})}let h=Math.floor(("number"==typeof l?l:Date.now())/1e3)-a.timestamp;if(o>0&&h>o)throw new ea(r,t,{message:"Timestamp outside the tolerance zone"});return!0}let i=null;function s(){return i||(i=e.createDefaultCryptoProvider()),i}function l(e){if(!e)throw new K({message:"Options are required"});let t=Math.floor(e.timestamp)||Math.floor(Date.now()/1e3),a=e.scheme||r.EXPECTED_SCHEME,n=e.cryptoProvider||s(),o=`${t}.${e.payload}`;return Object.assign(Object.assign({},e),{timestamp:t,scheme:a,cryptoProvider:n,payloadString:o,generateHeaderString:e=>`t=${t},${a}=${e}`})}return t.signature=r,t}(e),r.errors=el,r.createNodeHttpClient=e.createNodeHttpClient,r.createFetchHttpClient=e.createFetchHttpClient,r.createNodeCryptoProvider=e.createNodeCryptoProvider,r.createSubtleCryptoProvider=e.createSubtleCryptoProvider,r.prototype={_appInfo:void 0,on:null,off:null,once:null,VERSION:null,StripeResource:null,webhooks:null,errors:null,_api:null,_prevRequestMetrics:null,_emitter:null,_enableTelemetry:null,_requestSender:null,_platformFunctions:null,rawRequest(e,t,r,a){return this._requestSender._rawRequest(e,t,r,a)},_setAuthenticator(e,t){if(e&&t)throw Error("Can't specify both apiKey and authenticator");if(!e&&!t)throw Error("Neither apiKey nor config.authenticator provided");this._authenticator=e?O(e):t},_setAppInfo(e){if(e&&"object"!=typeof e)throw Error("AppInfo must be an object.");if(e&&!e.name)throw Error("AppInfo.name is required");e=e||{},this._appInfo=nJ.reduce((t,r)=>("string"==typeof e[r]&&((t=t||{})[r]=e[r]),t),{})},_setApiField(e,t){this._api[e]=t},getApiField(e){return this._api[e]},setClientId(e){this._clientId=e},getClientId(){return this._clientId},getConstant:e=>{switch(e){case"DEFAULT_HOST":return nK;case"DEFAULT_PORT":return"443";case"DEFAULT_BASE_PATH":return nQ;case"DEFAULT_API_VERSION":return ev;case"DEFAULT_TIMEOUT":return 8e4;case"MAX_NETWORK_RETRY_DELAY_SEC":return 5;case"INITIAL_NETWORK_RETRY_DELAY_SEC":return .5}return r[e]},getMaxNetworkRetries(){return this.getApiField("maxNetworkRetries")},_setApiNumberField(e,t,r){let a=B(e,t,r);this._setApiField(e,a)},getMaxNetworkRetryDelay:()=>5,getInitialNetworkRetryDelay:()=>.5,getClientUserAgent(e){return this.getClientUserAgentSeeded(r.USER_AGENT,e)},getClientUserAgentSeeded(e,t){this._platformFunctions.getUname().then(r=>{var a;let n={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=encodeURIComponent(null!=(a=e[t])?a:"null"));n.uname=encodeURIComponent(r||"UNKNOWN");let o=this.getApiField("httpClient");o&&(n.httplib=encodeURIComponent(o.getClientName())),this._appInfo&&(n.application=this._appInfo),t(JSON.stringify(n))})},getAppInfoAsString(){if(!this._appInfo)return"";let e=this._appInfo.name;return this._appInfo.version&&(e+=`/${this._appInfo.version}`),this._appInfo.url&&(e+=` (${this._appInfo.url})`),e},getTelemetryEnabled(){return this._enableTelemetry},_prepResources(){for(let e in nV)Object.prototype.hasOwnProperty.call(nV,e)&&(this["OAuth"===e?"oauth":e[0].toLowerCase()+e.substring(1)]=new nV[e](this))},_getPropsFromConfig(e){if(!e)return{};let t="string"==typeof e;if(!(e===Object(e)&&!Array.isArray(e))&&!t)throw Error("Config must either be an object or a string");if(t)return{apiVersion:e};if(Object.keys(e).filter(e=>!nX.includes(e)).length>0)throw Error(`Config object may only contain the following: ${nX.join(", ")}`);return e},parseEventNotification(e,t,r,a,n,o){let i=this.webhooks.constructEvent(e,t,r,a,n,o);return i.context&&(i.context=eg.parse(i.context)),i.fetchEvent=()=>this._requestSender._rawRequest("GET",`/v2/core/events/${i.id}`,void 0,{stripeContext:i.context},["fetch_event"]),i.fetchRelatedObject=()=>i.related_object?this._requestSender._rawRequest("GET",i.related_object.url,void 0,{stripeContext:i.context},["fetch_related_object"]):Promise.resolve(null),i}}}(new class extends ${getUname(){return Promise.resolve(null)}createEmitter(){return new Y}tryBufferData(e){if(e.file.data instanceof ReadableStream)throw Error("Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.");return Promise.resolve(e)}createNodeHttpClient(){throw Error("Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.")}createDefaultHttpClient(){return super.createFetchHttpClient()}createNodeCryptoProvider(){throw Error("Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.")}createDefaultCryptoProvider(){return this.createSubtleCryptoProvider()}});let n0=["pe","hf","vc","mba-m7","private-equity","hedge-fund","venture-capital"],n1=["fpa","credit","financial-advisor","fintech","asset-management","credit-analyst"],n2={premium:{review:297,rewrite:697},standard:{review:197,rewrite:497},accessible:{review:147,rewrite:347}};w.default.env.STRIPE_PRICE_IB_TECHNICAL,w.default.env.STRIPE_PRICE_PE,w.default.env.STRIPE_PRICE_NETWORKING,w.default.env.STRIPE_PRICE_LBO,w.default.env.STRIPE_PRICE_STOCK_PITCH,w.default.env.STRIPE_PRICE_RESUME_STORY,w.default.env.STRIPE_PRICE_RESTRUCTURING,w.default.env.STRIPE_PRICE_REPE,w.default.env.STRIPE_PRICE_CREDIT,w.default.env.STRIPE_PRICE_SUPERDAY,w.default.env.STRIPE_PRICE_BUNDLE,w.default.env.STRIPE_PRICE_RESUME_REVIEW,w.default.env.STRIPE_PRICE_RESUME_REWRITE;var n4=e.i(77355),n3=e.i(19389);let n5={pe:"Private Equity","private-equity":"Private Equity",hf:"Hedge Fund","hedge-fund":"Hedge Fund",vc:"Venture Capital","venture-capital":"Venture Capital","mba-m7":"MBA (M7)",ib:"Investment Banking","investment-banking":"Investment Banking","non-target":"Non-Target","consulting-to-banking":"Consulting to Banking",mba:"MBA","equity-research":"Equity Research",fpa:"FP&A",credit:"Credit","credit-analyst":"Credit Analyst","financial-advisor":"Financial Advisor",fintech:"Fintech","asset-management":"Asset Management"},n6=[{value:"",label:"Select your target role..."},{value:"ib",label:"Investment Banking"},{value:"pe",label:"Private Equity"},{value:"hf",label:"Hedge Fund"},{value:"vc",label:"Venture Capital"},{value:"equity-research",label:"Equity Research"},{value:"asset-management",label:"Asset Management"},{value:"fpa",label:"FP&A / Corporate Finance"},{value:"credit",label:"Credit / Lending"},{value:"consulting-to-banking",label:"Consulting → Banking"},{value:"mba",label:"MBA Recruiting"},{value:"fintech",label:"Fintech"},{value:"other",label:"Other Finance Role"}],n8={pe:[{quote:"The rewrite changed how I presented my deal experience. Went from no responses to multiple headhunter callbacks.",attribution:"BB Analyst, now at UMM PE"},{quote:"They understood exactly what PE firms look for. The positioning made all the difference.",attribution:"EB Analyst, Class of 2024"}],hf:[{quote:"They helped me reframe my banking experience around investment judgment. Started getting HF interviews within weeks.",attribution:"Former BB Coverage Analyst"},{quote:"The positioning framework for presenting my stock picks was exactly what I needed.",attribution:"Former Sell-Side Research Associate"}],ib:[{quote:"The feedback was specific and actionable. Caught weak bullets I didn't even notice.",attribution:"Target school junior"},{quote:"Finally started getting first rounds after months of silence.",attribution:"Non-target senior"}],"non-target":[{quote:"I was getting ghosted on applications for months. After the rewrite, I finally started getting first rounds.",attribution:"State School Senior, Class of 2025"},{quote:"The reviewer understood exactly what non-targets face. Helped me position my Big 4 experience.",attribution:"Big 4 TAS Lateral"}],default:[{quote:"I wasn't getting responses on my applications. After the rewrite, I finally started getting interview requests.",attribution:"Non-target senior"},{quote:"The feedback was specific and actionable. Caught formatting issues and weak bullets I didn't even notice.",attribution:"Target school junior"}]},n7={pe:"PE on-cycle recruiting peaks July-September. Get your resume ready now.",hf:"Hedge fund recruiting is ongoing—strong resumes get noticed faster.",ib:"IB summer analyst apps open soon. Don't miss the window.","non-target":"Non-targets need every edge. A polished resume is your first impression.",mba:"MBA recruiting moves fast. Have your resume ready before networking events.",default:"A weak resume costs you interviews. Fix it before your next application."},n9={"resume-review":["Line-by-line written feedback","Formatting & structure analysis","Bullet point optimization tips","Industry-specific keyword check","One round of follow-up questions"],"resume-rewrite":["Complete resume rewrite (not just edits)","Optimized for ATS systems","Quantified achievement bullets","Industry-standard formatting","Two rounds of revisions included"]};function oe(e){var t,n;let{initialService:o,segment:i,pricing:s}=e,[w,k]=(0,a.useState)(o||"resume-review"),[T,P]=(0,a.useState)(null),[x,S]=(0,a.useState)(!1),[E,A]=(0,a.useState)("idle"),[I,_]=(0,a.useState)(""),[C,B]=(0,a.useState)(null),[O,M]=(0,a.useState)(""),[R,j]=(0,a.useState)(""),[N,q]=(0,a.useState)(i||""),G=n8[N]||n8[i||""]||n8.default,F=n7[N]||n7[i||""]||n7.default,D=(0,a.useMemo)(()=>b.map(e=>({...e,price:"resume-review"===e.id?s.reviewPrice:s.rewritePrice})),[s]),W=D.find(e=>e.id===w),L=i?n5[i]||i:null,H=e=>{e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?S(!0):"dragleave"===e.type&&S(!1)},$=T&&O&&R&&w,U=async e=>{if(e.preventDefault(),T&&R&&O&&w){A("uploading"),_("");try{let e=new FormData;e.append("file",T),e.append("name",O),e.append("email",R),e.append("phone",""),e.append("serviceType",w),e.append("targetRole",n5[N]||N),e.append("targetFirms",""),e.append("currentStatus",""),e.append("experienceLevel",""),e.append("timeline",""),e.append("specificConcerns",""),e.append("additionalNotes","");let t=N||i;t&&e.append("segment",t);let r=await fetch("/api/upload-resume",{method:"POST",body:e});if(!r.ok){let e=await r.json();throw Error(e.error||"Upload failed")}let a=await r.json();(0,n4.track)("resume_submitted",{service:w,segment:t||"none"}),a.paymentUrl?(B(a.paymentUrl),A("success"),setTimeout(()=>{window.location.href=a.paymentUrl},1500)):A("success")}catch(e){A("error"),_(e instanceof Error?e.message:"Something went wrong")}}};return"success"===E?(0,r.jsx)("section",{className:"bg-off-white py-20 lg:py-28",children:(0,r.jsxs)("div",{className:"mx-auto max-w-2xl px-6 text-center lg:px-8",children:[(0,r.jsx)("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100",children:(0,r.jsx)(u.CheckCircle,{className:"h-10 w-10 text-green-600"})}),(0,r.jsx)("h1",{className:"mt-8 text-3xl font-bold tracking-tight text-navy",children:"Resume Received!"}),(0,r.jsxs)("p",{className:"mt-4 text-lg text-charcoal/70",children:["Thank you for choosing our ",null==W?void 0:W.title," service."]}),C&&(0,r.jsxs)("div",{className:"mt-8 rounded-xl border-2 border-gold bg-gold/10 p-6",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center gap-2 mb-4",children:[(0,r.jsx)(c.Loader2,{className:"h-5 w-5 animate-spin text-gold"}),(0,r.jsx)("span",{className:"font-semibold text-navy",children:"Redirecting to secure payment..."})]}),(0,r.jsxs)("a",{href:C,className:"inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white",children:["Complete Payment - $",null==W?void 0:W.price,(0,r.jsx)(h.ArrowRight,{className:"h-5 w-5"})]})]}),(0,r.jsxs)("p",{className:"mt-8 text-sm text-charcoal/60",children:["Questions? Contact us at"," ",(0,r.jsx)("a",{href:"mailto:support@wallstreetplaybook.com",className:"font-medium text-navy hover:text-gold",children:"support@wallstreetplaybook.com"})]})]})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{className:"relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden",children:[(0,r.jsxs)("div",{className:"absolute inset-0",children:[(0,r.jsx)("img",{src:"/hero-wall-street.png",alt:"",className:"w-full h-full object-cover object-top"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-navy-deep/85"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/90"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.1),_transparent)]"})]}),(0,r.jsxs)("div",{className:"relative mx-auto max-w-4xl px-6 text-center lg:px-8",children:[(0,r.jsx)("p",{className:"text-sm font-semibold uppercase tracking-widest text-gold mb-4",children:"Resume Services"}),(0,r.jsxs)("h1",{className:"text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl",children:["Get Your Resume ",(0,r.jsx)("span",{className:"text-gradient-gold",children:"Interview-Ready"})]}),(0,r.jsxs)("p",{className:"mt-5 text-base leading-relaxed text-white/80 max-w-2xl mx-auto",children:["Expert feedback from reviewers who've worked at Goldman, Morgan Stanley, and top PE shops.",(0,r.jsx)("span",{className:"text-gold font-medium",children:" 48-hour turnaround. 100% money-back guarantee."})]}),(0,r.jsxs)("div",{className:"mt-6 inline-flex items-center gap-2 rounded-full bg-gold/20 border border-gold/30 px-5 py-2.5 backdrop-blur-sm",children:[(0,r.jsx)(p.Clock,{className:"h-4 w-4 text-gold"}),(0,r.jsx)("span",{className:"text-sm text-gold font-medium",children:F})]}),(0,r.jsx)("p",{className:"mt-4 text-xs text-white/50",children:"Most candidates spend $1,500+ on coaching. Get expert resume feedback for a fraction of that."})]})]}),(0,r.jsx)("section",{className:"py-8 lg:py-12",children:(0,r.jsxs)("div",{className:"mx-auto max-w-4xl px-6 lg:px-8",children:[(0,r.jsxs)("form",{className:"grid lg:grid-cols-5 gap-8",onSubmit:U,children:[(0,r.jsxs)("div",{className:"lg:col-span-3 space-y-6",children:[(0,r.jsxs)("div",{className:"rounded-xl border border-border bg-white p-5 shadow-sm",children:[(0,r.jsxs)("label",{className:"block text-sm font-medium text-charcoal mb-3",children:["Select Service ",L&&(0,r.jsxs)("span",{className:"text-gold",children:["for ",L]})]}),(0,r.jsx)("div",{className:"space-y-3",children:D.map(e=>{let t=w===e.id,a=n9[e.id];return(0,r.jsxs)("button",{type:"button",onClick:()=>k(e.id),className:`relative w-full rounded-lg border-2 p-4 text-left transition-all ${t?"border-gold bg-gold/5":"border-border hover:border-gold/50"}`,children:["resume-rewrite"===e.id&&(0,r.jsxs)("span",{className:"absolute -top-2 -right-2 flex items-center gap-0.5 rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold text-navy",children:[(0,r.jsx)(g.Sparkles,{className:"h-2.5 w-2.5"}),"Most Value"]}),(0,r.jsxs)("div",{className:"flex justify-between items-start",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"font-semibold text-navy",children:e.title}),(0,r.jsx)("p",{className:"text-xs text-charcoal/60 mt-0.5",children:e.turnaround})]}),(0,r.jsxs)("span",{className:"text-xl font-bold text-gold",children:["$",e.price]})]}),t&&a&&(0,r.jsxs)("div",{className:"mt-3 pt-3 border-t border-border/50",children:[(0,r.jsx)("p",{className:"text-xs font-medium text-charcoal/70 mb-2",children:"What's included:"}),(0,r.jsx)("ul",{className:"space-y-1.5",children:a.map((e,t)=>(0,r.jsxs)("li",{className:"flex items-start gap-2 text-xs text-charcoal/70",children:[(0,r.jsx)(v.Check,{className:"h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0"}),(0,r.jsx)("span",{children:e})]},t))})]})]},e.id)})})]}),(0,r.jsxs)("div",{className:"rounded-xl border border-border bg-white p-5 shadow-sm",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-charcoal mb-3",children:"Your Information"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"text",required:!0,value:O,onChange:e=>M(e.target.value),className:"block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold",placeholder:"Full Name *"})}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"email",required:!0,value:R,onChange:e=>j(e.target.value),className:"block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold",placeholder:"Email Address *"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("select",{value:N,onChange:e=>q(e.target.value),className:"block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold bg-white",children:n6.map(e=>(0,r.jsx)("option",{value:e.value,children:e.label},e.value))}),(0,r.jsx)("p",{className:"mt-1 text-xs text-charcoal/50",children:"This helps us tailor feedback to your target role"})]})]})]}),(0,r.jsxs)("div",{className:"rounded-xl border border-border bg-white p-5 shadow-sm",children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-charcoal mb-3",children:"Upload Resume *"}),(0,r.jsx)("div",{className:`flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-colors ${x?"border-gold bg-gold/5":"border-charcoal/20"} ${T?"border-green-500 bg-green-50":""}`,onDragEnter:H,onDragLeave:H,onDragOver:H,onDrop:e=>{if(e.preventDefault(),e.stopPropagation(),S(!1),e.dataTransfer.files&&e.dataTransfer.files[0]){let t=e.dataTransfer.files[0];("application/pdf"===t.type||t.name.endsWith(".docx")||t.name.endsWith(".doc"))&&P(t)}},children:T?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.FileText,{className:"h-8 w-8 text-green-600"}),(0,r.jsx)("p",{className:"mt-2 font-medium text-green-700 text-sm text-center break-all",children:T.name}),(0,r.jsx)("button",{type:"button",onClick:()=>P(null),className:"mt-2 text-xs text-charcoal/60 hover:text-red-600",children:"Remove"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{className:"h-8 w-8 text-charcoal/30"}),(0,r.jsxs)("p",{className:"mt-2 text-sm text-charcoal/70 text-center",children:[(0,r.jsxs)("label",{className:"cursor-pointer font-medium text-gold hover:underline",children:["Click to upload",(0,r.jsx)("input",{type:"file",accept:".pdf,.doc,.docx",onChange:e=>{e.target.files&&e.target.files[0]&&P(e.target.files[0])},className:"hidden"})]}),(0,r.jsx)("span",{className:"hidden sm:inline",children:" or drag & drop"})]}),(0,r.jsx)("p",{className:"mt-1 text-xs text-charcoal/50",children:"PDF, DOC, DOCX (max 10MB)"})]})})]}),"error"===E&&(0,r.jsx)("div",{className:"rounded-lg border border-red-200 bg-red-50 p-4 text-center",children:(0,r.jsx)("p",{className:"text-sm text-red-600",children:I||"Something went wrong. Please try again."})}),(0,r.jsx)("div",{className:"lg:hidden",children:(0,r.jsx)("button",{type:"submit",disabled:!$||"uploading"===E,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white disabled:opacity-50",children:"uploading"===E?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Loader2,{className:"h-5 w-5 animate-spin"}),"Processing..."]}):(0,r.jsxs)(r.Fragment,{children:["Continue to Payment - $",null==W?void 0:W.price,(0,r.jsx)(h.ArrowRight,{className:"h-5 w-5"})]})})})]}),(0,r.jsx)("div",{className:"lg:col-span-2",children:(0,r.jsxs)("div",{className:"sticky top-24 space-y-4",children:[(0,r.jsxs)("div",{className:"rounded-xl border border-border bg-white p-6 shadow-sm",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold text-navy",children:"Order Summary"}),(0,r.jsxs)("div",{className:"mt-4 space-y-3 text-sm",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{className:"text-charcoal/70",children:"Service"}),(0,r.jsx)("span",{className:"font-medium text-navy",children:null==W?void 0:W.title})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{className:"text-charcoal/70",children:"Turnaround"}),(0,r.jsx)("span",{className:"font-medium text-navy",children:null==W?void 0:W.turnaround})]}),(0,r.jsx)("div",{className:"border-t border-border pt-3",children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("span",{className:"font-semibold text-navy",children:"Total"}),(0,r.jsxs)("span",{className:"text-2xl font-bold text-gold",children:["$",null==W?void 0:W.price]})]})})]}),(0,r.jsx)("div",{className:"hidden lg:block mt-6",children:(0,r.jsx)("button",{type:"submit",disabled:!$||"uploading"===E,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white disabled:opacity-50",children:"uploading"===E?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Loader2,{className:"h-5 w-5 animate-spin"}),"Processing..."]}):(0,r.jsxs)(r.Fragment,{children:["Continue to Payment",(0,r.jsx)(h.ArrowRight,{className:"h-5 w-5"})]})})}),(0,r.jsx)("div",{className:"mt-4 rounded-lg bg-green-50 border border-green-200 p-3",children:(0,r.jsxs)("div",{className:"flex items-start gap-2",children:[(0,r.jsx)(f.Shield,{className:"h-4 w-4 text-green-600 mt-0.5"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-800",children:"100% Money-Back Guarantee"}),(0,r.jsx)("p",{className:"text-xs text-green-700 mt-0.5",children:"Not satisfied with your feedback? Full refund, no questions asked."})]})]})}),(0,r.jsxs)("div",{className:"mt-4 space-y-2.5 pt-4 border-t border-border",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-xs text-charcoal/70",children:[(0,r.jsx)(p.Clock,{className:"h-4 w-4 text-gold flex-shrink-0"}),(0,r.jsx)("span",{children:"Delivered within 48 hours or it's free"})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 text-xs text-charcoal/70",children:[(0,r.jsx)(y,{className:"h-4 w-4 text-gold flex-shrink-0"}),(0,r.jsx)("span",{children:"Reviewed by ex-bankers & recruiters"})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 text-xs text-charcoal/70",children:[(0,r.jsx)(f.Shield,{className:"h-4 w-4 text-gold flex-shrink-0"}),(0,r.jsx)("span",{children:"Secure payment via Stripe"})]})]})]}),(0,r.jsx)("div",{className:"rounded-xl border border-border bg-white p-4",children:(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-2 text-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-lg font-bold text-navy",children:"500+"}),(0,r.jsx)("p",{className:"text-[10px] text-charcoal/60",children:"Resumes Reviewed"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-lg font-bold text-navy",children:"48hr"}),(0,r.jsx)("p",{className:"text-[10px] text-charcoal/60",children:"Avg Turnaround"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-lg font-bold text-navy",children:"100%"}),(0,r.jsx)("p",{className:"text-[10px] text-charcoal/60",children:"Money-Back"})]})]})}),(0,r.jsxs)("div",{className:"rounded-xl border border-gold/30 bg-gold/5 p-5",children:[(0,r.jsx)("div",{className:"flex gap-1 mb-2",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,r.jsx)("svg",{className:"h-4 w-4 text-gold",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},t))}),(0,r.jsxs)("p",{className:"text-sm text-charcoal/80 italic leading-relaxed",children:['"',null==(t=G[0])?void 0:t.quote,'"']}),(0,r.jsxs)("p",{className:"mt-3 text-xs font-semibold text-navy",children:["— ",null==(n=G[0])?void 0:n.attribution]})]}),G[1]&&(0,r.jsxs)("div",{className:"rounded-xl border border-border bg-white p-5",children:[(0,r.jsxs)("p",{className:"text-sm text-charcoal/80 italic leading-relaxed",children:['"',G[1].quote,'"']}),(0,r.jsxs)("p",{className:"mt-3 text-xs font-semibold text-navy",children:["— ",G[1].attribution]})]})]})})]}),(0,r.jsx)("div",{className:"mt-8 text-center",children:(0,r.jsxs)(n3.default,{href:"/",className:"inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-navy",children:[(0,r.jsx)(m,{className:"h-4 w-4"}),"Back to Home"]})})]})})]})}function ot(){let e=(0,n.useSearchParams)(),t=e.get("service"),o=e.get("segment"),i=(0,a.useMemo)(()=>{let e,{tier:t,reviewPrice:r,rewritePrice:a}={tier:e=function(e){if(!e)return"standard";let t=e.toLowerCase().trim();return n0.some(e=>t.includes(e))?"premium":n1.some(e=>t.includes(e))?"accessible":"standard"}(o),prices:n2[e],reviewPrice:n2[e].review,rewritePrice:n2[e].rewrite};return{tier:t,reviewPrice:r,rewritePrice:a}},[o]);return(0,r.jsx)(oe,{initialService:"resume-review"===t||"resume-rewrite"===t?t:null,segment:o,pricing:i})}function or(){return(0,r.jsx)("section",{className:"py-20",children:(0,r.jsx)("div",{className:"mx-auto max-w-4xl px-6 lg:px-8",children:(0,r.jsx)("div",{className:"flex items-center justify-center py-20",children:(0,r.jsx)(c.Loader2,{className:"h-8 w-8 animate-spin text-gold"})})})})}function oa(){return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,r.jsx)(o.Navbar,{}),(0,r.jsx)("main",{className:"flex-grow bg-off-white",children:(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(or,{}),children:(0,r.jsx)(ot,{})})}),(0,r.jsx)(i.Footer,{})]})}e.s(["default",()=>oa],90985)}]);