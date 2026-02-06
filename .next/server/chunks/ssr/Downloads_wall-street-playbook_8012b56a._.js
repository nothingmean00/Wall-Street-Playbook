module.exports=[8126,(a,b,c)=>{"use strict";b.exports=TypeError},82622,(a,b,c)=>{b.exports=a.r(24361).inspect},80662,(a,b,c)=>{var d="function"==typeof Map&&Map.prototype,e=Object.getOwnPropertyDescriptor&&d?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,f=d&&e&&"function"==typeof e.get?e.get:null,g=d&&Map.prototype.forEach,h="function"==typeof Set&&Set.prototype,i=Object.getOwnPropertyDescriptor&&h?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,j=h&&i&&"function"==typeof i.get?i.get:null,k=h&&Set.prototype.forEach,l="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,m="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,n="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,o=Boolean.prototype.valueOf,p=Object.prototype.toString,q=Function.prototype.toString,r=String.prototype.match,s=String.prototype.slice,t=String.prototype.replace,u=String.prototype.toUpperCase,v=String.prototype.toLowerCase,w=RegExp.prototype.test,x=Array.prototype.concat,y=Array.prototype.join,z=Array.prototype.slice,A=Math.floor,B="function"==typeof BigInt?BigInt.prototype.valueOf:null,C=Object.getOwnPropertySymbols,D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,E="function"==typeof Symbol&&"object"==typeof Symbol.iterator,F="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===E?"object":"symbol")?Symbol.toStringTag:null,G=Object.prototype.propertyIsEnumerable,H=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(a){return a.__proto__}:null);function I(a,b){if(a===1/0||a===-1/0||a!=a||a&&a>-1e3&&a<1e3||w.call(/e/,b))return b;var c=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof a){var d=a<0?-A(-a):A(a);if(d!==a){var e=String(d),f=s.call(b,e.length+1);return t.call(e,c,"$&_")+"."+t.call(t.call(f,/([0-9]{3})/g,"$&_"),/_$/,"")}}return t.call(b,c,"$&_")}var J=a.r(82622),K=J.custom,L=S(K)?K:null,M={__proto__:null,double:'"',single:"'"},N={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};function O(a,b,c){var d=M[c.quoteStyle||b];return d+a+d}function P(a){return!F||!("object"==typeof a&&(F in a||void 0!==a[F]))}function Q(a){return"[object Array]"===V(a)&&P(a)}function R(a){return"[object RegExp]"===V(a)&&P(a)}function S(a){if(E)return a&&"object"==typeof a&&a instanceof Symbol;if("symbol"==typeof a)return!0;if(!a||"object"!=typeof a||!D)return!1;try{return D.call(a),!0}catch(a){}return!1}b.exports=function b(c,d,e,h){var i,p,u,w,A,C=d||{};if(U(C,"quoteStyle")&&!U(M,C.quoteStyle))throw TypeError('option "quoteStyle" must be "single" or "double"');if(U(C,"maxStringLength")&&("number"==typeof C.maxStringLength?C.maxStringLength<0&&C.maxStringLength!==1/0:null!==C.maxStringLength))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var K=!U(C,"customInspect")||C.customInspect;if("boolean"!=typeof K&&"symbol"!==K)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(U(C,"indent")&&null!==C.indent&&"	"!==C.indent&&!(parseInt(C.indent,10)===C.indent&&C.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(U(C,"numericSeparator")&&"boolean"!=typeof C.numericSeparator)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var T=C.numericSeparator;if(void 0===c)return"undefined";if(null===c)return"null";if("boolean"==typeof c)return c?"true":"false";if("string"==typeof c)return function a(b,c){if(b.length>c.maxStringLength){var d=b.length-c.maxStringLength;return a(s.call(b,0,c.maxStringLength),c)+("... "+d)+" more character"+(d>1?"s":"")}var e=N[c.quoteStyle||"single"];return e.lastIndex=0,O(t.call(t.call(b,e,"\\$1"),/[\x00-\x1f]/g,X),"single",c)}(c,C);if("number"==typeof c){if(0===c)return 1/0/c>0?"0":"-0";var ab=String(c);return T?I(c,ab):ab}if("bigint"==typeof c){var ac=String(c)+"n";return T?I(c,ac):ac}var ad=void 0===C.depth?5:C.depth;if(void 0===e&&(e=0),e>=ad&&ad>0&&"object"==typeof c)return Q(c)?"[Array]":"[Object]";var ae=function(a,b){var c;if("	"===a.indent)c="	";else{if("number"!=typeof a.indent||!(a.indent>0))return null;c=y.call(Array(a.indent+1)," ")}return{base:c,prev:y.call(Array(b+1),c)}}(C,e);if(void 0===h)h=[];else if(W(h,c)>=0)return"[Circular]";function af(a,c,d){if(c&&(h=z.call(h)).push(c),d){var f={depth:C.depth};return U(C,"quoteStyle")&&(f.quoteStyle=C.quoteStyle),b(a,f,e+1,h)}return b(a,C,e+1,h)}if("function"==typeof c&&!R(c)){var ag=function(a){if(a.name)return a.name;var b=r.call(q.call(a),/^function\s*([\w$]+)/);return b?b[1]:null}(c),ah=aa(c,af);return"[Function"+(ag?": "+ag:" (anonymous)")+"]"+(ah.length>0?" { "+y.call(ah,", ")+" }":"")}if(S(c)){var ai=E?t.call(String(c),/^(Symbol\(.*\))_[^)]*$/,"$1"):D.call(c);return"object"!=typeof c||E?ai:Y(ai)}if((aj=c)&&"object"==typeof aj&&("undefined"!=typeof HTMLElement&&aj instanceof HTMLElement||"string"==typeof aj.nodeName&&"function"==typeof aj.getAttribute)){for(var aj,ak,al="<"+v.call(String(c.nodeName)),am=c.attributes||[],an=0;an<am.length;an++){al+=" "+am[an].name+"="+O((ak=am[an].value,t.call(String(ak),/"/g,"&quot;")),"double",C)}return al+=">",c.childNodes&&c.childNodes.length&&(al+="..."),al+="</"+v.call(String(c.nodeName))+">"}if(Q(c)){if(0===c.length)return"[]";var ao=aa(c,af);return ae&&!function(a){for(var b=0;b<a.length;b++)if(W(a[b],"\n")>=0)return!1;return!0}(ao)?"["+_(ao,ae)+"]":"[ "+y.call(ao,", ")+" ]"}if("[object Error]"===V(i=c)&&P(i)){var ap=aa(c,af);return"cause"in Error.prototype||!("cause"in c)||G.call(c,"cause")?0===ap.length?"["+String(c)+"]":"{ ["+String(c)+"] "+y.call(ap,", ")+" }":"{ ["+String(c)+"] "+y.call(x.call("[cause]: "+af(c.cause),ap),", ")+" }"}if("object"==typeof c&&K){if(L&&"function"==typeof c[L]&&J)return J(c,{depth:ad-e});else if("symbol"!==K&&"function"==typeof c.inspect)return c.inspect()}if(function(a){if(!f||!a||"object"!=typeof a)return!1;try{f.call(a);try{j.call(a)}catch(a){return!0}return a instanceof Map}catch(a){}return!1}(c)){var aq=[];return g&&g.call(c,function(a,b){aq.push(af(b,c,!0)+" => "+af(a,c))}),$("Map",f.call(c),aq,ae)}if(function(a){if(!j||!a||"object"!=typeof a)return!1;try{j.call(a);try{f.call(a)}catch(a){return!0}return a instanceof Set}catch(a){}return!1}(c)){var ar=[];return k&&k.call(c,function(a){ar.push(af(a,c))}),$("Set",j.call(c),ar,ae)}if(function(a){if(!l||!a||"object"!=typeof a)return!1;try{l.call(a,l);try{m.call(a,m)}catch(a){return!0}return a instanceof WeakMap}catch(a){}return!1}(c))return Z("WeakMap");if(function(a){if(!m||!a||"object"!=typeof a)return!1;try{m.call(a,m);try{l.call(a,l)}catch(a){return!0}return a instanceof WeakSet}catch(a){}return!1}(c))return Z("WeakSet");if(function(a){if(!n||!a||"object"!=typeof a)return!1;try{return n.call(a),!0}catch(a){}return!1}(c))return Z("WeakRef");if("[object Number]"===V(p=c)&&P(p))return Y(af(Number(c)));if(function(a){if(!a||"object"!=typeof a||!B)return!1;try{return B.call(a),!0}catch(a){}return!1}(c))return Y(af(B.call(c)));if("[object Boolean]"===V(u=c)&&P(u))return Y(o.call(c));if("[object String]"===V(w=c)&&P(w))return Y(af(String(c)));if("undefined"!=typeof globalThis&&c===globalThis||c===a.g)return"{ [object globalThis] }";if(!("[object Date]"===V(A=c)&&P(A))&&!R(c)){var as=aa(c,af),at=H?H(c)===Object.prototype:c instanceof Object||c.constructor===Object,au=c instanceof Object?"":"null prototype",av=!at&&F&&Object(c)===c&&F in c?s.call(V(c),8,-1):au?"Object":"",aw=(at||"function"!=typeof c.constructor?"":c.constructor.name?c.constructor.name+" ":"")+(av||au?"["+y.call(x.call([],av||[],au||[]),": ")+"] ":"");return 0===as.length?aw+"{}":ae?aw+"{"+_(as,ae)+"}":aw+"{ "+y.call(as,", ")+" }"}return String(c)};var T=Object.prototype.hasOwnProperty||function(a){return a in this};function U(a,b){return T.call(a,b)}function V(a){return p.call(a)}function W(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return -1}function X(a){var b=a.charCodeAt(0),c={8:"b",9:"t",10:"n",12:"f",13:"r"}[b];return c?"\\"+c:"\\x"+(b<16?"0":"")+u.call(b.toString(16))}function Y(a){return"Object("+a+")"}function Z(a){return a+" { ? }"}function $(a,b,c,d){return a+" ("+b+") {"+(d?_(c,d):y.call(c,", "))+"}"}function _(a,b){if(0===a.length)return"";var c="\n"+b.prev+b.base;return c+y.call(a,","+c)+"\n"+b.prev}function aa(a,b){var c,d=Q(a),e=[];if(d){e.length=a.length;for(var f=0;f<a.length;f++)e[f]=U(a,f)?b(a[f],a):""}var g="function"==typeof C?C(a):[];if(E){c={};for(var h=0;h<g.length;h++)c["$"+g[h]]=g[h]}for(var i in a)if(U(a,i)&&(!d||String(Number(i))!==i||!(i<a.length)))if(E&&c["$"+i]instanceof Symbol)continue;else w.call(/[^\w$]/,i)?e.push(b(i,a)+": "+b(a[i],a)):e.push(i+": "+b(a[i],a));if("function"==typeof C)for(var j=0;j<g.length;j++)G.call(a,g[j])&&e.push("["+b(g[j])+"]: "+b(a[g[j]],a));return e}},2731,(a,b,c)=>{"use strict";var d=a.r(80662),e=a.r(8126),f=function(a,b,c){for(var d,e=a;null!=(d=e.next);e=d)if(d.key===b)return e.next=d.next,c||(d.next=a.next,a.next=d),d},g=function(a,b){if(a){var c=f(a,b);return c&&c.value}},h=function(a,b,c){var d=f(a,b);d?d.value=c:a.next={key:b,next:a.next,value:c}},i=function(a,b){if(a)return f(a,b,!0)};b.exports=function(){var a,b={assert:function(a){if(!b.has(a))throw new e("Side channel does not contain "+d(a))},delete:function(b){var c=a&&a.next,d=i(a,b);return d&&c&&c===d&&(a=void 0),!!d},get:function(b){return g(a,b)},has:function(b){var c;return!!(c=a)&&!!f(c,b)},set:function(b,c){a||(a={next:void 0}),h(a,b,c)}};return b}},97118,(a,b,c)=>{"use strict";b.exports=Object},67101,(a,b,c)=>{"use strict";b.exports=Error},39421,(a,b,c)=>{"use strict";b.exports=EvalError},64375,(a,b,c)=>{"use strict";b.exports=RangeError},39168,(a,b,c)=>{"use strict";b.exports=ReferenceError},9299,(a,b,c)=>{"use strict";b.exports=SyntaxError},5690,(a,b,c)=>{"use strict";b.exports=URIError},68631,(a,b,c)=>{"use strict";b.exports=Math.abs},15377,(a,b,c)=>{"use strict";b.exports=Math.floor},40053,(a,b,c)=>{"use strict";b.exports=Math.max},65241,(a,b,c)=>{"use strict";b.exports=Math.min},56271,(a,b,c)=>{"use strict";b.exports=Math.pow},45201,(a,b,c)=>{"use strict";b.exports=Math.round},75509,(a,b,c)=>{"use strict";b.exports=Number.isNaN||function(a){return a!=a}},53134,(a,b,c)=>{"use strict";var d=a.r(75509);b.exports=function(a){return d(a)||0===a?a:a<0?-1:1}},17702,(a,b,c)=>{"use strict";b.exports=Object.getOwnPropertyDescriptor},84440,(a,b,c)=>{"use strict";var d=a.r(17702);if(d)try{d([],"length")}catch(a){d=null}b.exports=d},55929,(a,b,c)=>{"use strict";var d=Object.defineProperty||!1;if(d)try{d({},"a",{value:1})}catch(a){d=!1}b.exports=d},39469,(a,b,c)=>{"use strict";b.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var a={},b=Symbol("test"),c=Object(b);if("string"==typeof b||"[object Symbol]"!==Object.prototype.toString.call(b)||"[object Symbol]"!==Object.prototype.toString.call(c))return!1;for(var d in a[b]=42,a)return!1;if("function"==typeof Object.keys&&0!==Object.keys(a).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(a).length)return!1;var e=Object.getOwnPropertySymbols(a);if(1!==e.length||e[0]!==b||!Object.prototype.propertyIsEnumerable.call(a,b))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var f=Object.getOwnPropertyDescriptor(a,b);if(42!==f.value||!0!==f.enumerable)return!1}return!0}},86082,(a,b,c)=>{"use strict";var d="undefined"!=typeof Symbol&&Symbol,e=a.r(39469);b.exports=function(){return"function"==typeof d&&"function"==typeof Symbol&&"symbol"==typeof d("foo")&&"symbol"==typeof Symbol("bar")&&e()}},50560,(a,b,c)=>{"use strict";b.exports="undefined"!=typeof Reflect&&Reflect.getPrototypeOf||null},68209,(a,b,c)=>{"use strict";b.exports=a.r(97118).getPrototypeOf||null},37831,(a,b,c)=>{"use strict";var d=Object.prototype.toString,e=Math.max,f=function(a,b){for(var c=[],d=0;d<a.length;d+=1)c[d]=a[d];for(var e=0;e<b.length;e+=1)c[e+a.length]=b[e];return c},g=function(a,b){for(var c=[],d=b||0,e=0;d<a.length;d+=1,e+=1)c[e]=a[d];return c},h=function(a,b){for(var c="",d=0;d<a.length;d+=1)c+=a[d],d+1<a.length&&(c+=b);return c};b.exports=function(a){var b,c=this;if("function"!=typeof c||"[object Function]"!==d.apply(c))throw TypeError("Function.prototype.bind called on incompatible "+c);for(var i=g(arguments,1),j=e(0,c.length-i.length),k=[],l=0;l<j;l++)k[l]="$"+l;if(b=Function("binder","return function ("+h(k,",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof b){var d=c.apply(this,f(i,arguments));return Object(d)===d?d:this}return c.apply(a,f(i,arguments))}),c.prototype){var m=function(){};m.prototype=c.prototype,b.prototype=new m,m.prototype=null}return b}},70779,(a,b,c)=>{"use strict";var d=a.r(37831);b.exports=Function.prototype.bind||d},10335,(a,b,c)=>{"use strict";b.exports=Function.prototype.call},75649,(a,b,c)=>{"use strict";b.exports=Function.prototype.apply},84854,(a,b,c)=>{"use strict";b.exports="undefined"!=typeof Reflect&&Reflect&&Reflect.apply},98867,(a,b,c)=>{"use strict";var d=a.r(70779),e=a.r(75649),f=a.r(10335);b.exports=a.r(84854)||d.call(f,e)},56189,(a,b,c)=>{"use strict";var d=a.r(70779),e=a.r(8126),f=a.r(10335),g=a.r(98867);b.exports=function(a){if(a.length<1||"function"!=typeof a[0])throw new e("a function is required");return g(d,f,a)}},57934,(a,b,c)=>{"use strict";var d,e=a.r(56189),f=a.r(84440);try{d=[].__proto__===Array.prototype}catch(a){if(!a||"object"!=typeof a||!("code"in a)||"ERR_PROTO_ACCESS"!==a.code)throw a}var g=!!d&&f&&f(Object.prototype,"__proto__"),h=Object,i=h.getPrototypeOf;b.exports=g&&"function"==typeof g.get?e([g.get]):"function"==typeof i&&function(a){return i(null==a?a:h(a))}},54278,(a,b,c)=>{"use strict";var d=a.r(50560),e=a.r(68209),f=a.r(57934);b.exports=d?function(a){return d(a)}:e?function(a){if(!a||"object"!=typeof a&&"function"!=typeof a)throw TypeError("getProto: not an object");return e(a)}:f?function(a){return f(a)}:null},60781,(a,b,c)=>{"use strict";var d=Function.prototype.call,e=Object.prototype.hasOwnProperty;b.exports=a.r(70779).call(d,e)},30903,(a,b,c)=>{"use strict";var d=a.r(97118),e=a.r(67101),f=a.r(39421),g=a.r(64375),h=a.r(39168),i=a.r(9299),j=a.r(8126),k=a.r(5690),l=a.r(68631),m=a.r(15377),n=a.r(40053),o=a.r(65241),p=a.r(56271),q=a.r(45201),r=a.r(53134),s=Function,t=function(a){try{return s('"use strict"; return ('+a+").constructor;")()}catch(a){}},u=a.r(84440),v=a.r(55929),w=function(){throw new j},x=u?function(){try{return arguments.callee,w}catch(a){try{return u(arguments,"callee").get}catch(a){return w}}}():w,y=a.r(86082)(),z=a.r(54278),A=a.r(68209),B=a.r(50560),C=a.r(75649),D=a.r(10335),E={},F="undefined"!=typeof Uint8Array&&z?z(Uint8Array):void 0,G={__proto__:null,"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":y&&z?z([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":E,"%AsyncGenerator%":E,"%AsyncGeneratorFunction%":E,"%AsyncIteratorPrototype%":E,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?void 0:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?void 0:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":e,"%eval%":eval,"%EvalError%":f,"%Float16Array%":"undefined"==typeof Float16Array?void 0:Float16Array,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":s,"%GeneratorFunction%":E,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":y&&z?z(z([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&y&&z?z(new Map()[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":d,"%Object.getOwnPropertyDescriptor%":u,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":g,"%ReferenceError%":h,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&y&&z?z(new Set()[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":y&&z?z(""[Symbol.iterator]()):void 0,"%Symbol%":y?Symbol:void 0,"%SyntaxError%":i,"%ThrowTypeError%":x,"%TypedArray%":F,"%TypeError%":j,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":k,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet,"%Function.prototype.call%":D,"%Function.prototype.apply%":C,"%Object.defineProperty%":v,"%Object.getPrototypeOf%":A,"%Math.abs%":l,"%Math.floor%":m,"%Math.max%":n,"%Math.min%":o,"%Math.pow%":p,"%Math.round%":q,"%Math.sign%":r,"%Reflect.getPrototypeOf%":B};if(z)try{null.error}catch(a){var H=z(z(a));G["%Error.prototype%"]=H}var I=function a(b){var c;if("%AsyncFunction%"===b)c=t("async function () {}");else if("%GeneratorFunction%"===b)c=t("function* () {}");else if("%AsyncGeneratorFunction%"===b)c=t("async function* () {}");else if("%AsyncGenerator%"===b){var d=a("%AsyncGeneratorFunction%");d&&(c=d.prototype)}else if("%AsyncIteratorPrototype%"===b){var e=a("%AsyncGenerator%");e&&z&&(c=z(e.prototype))}return G[b]=c,c},J={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},K=a.r(70779),L=a.r(60781),M=K.call(D,Array.prototype.concat),N=K.call(C,Array.prototype.splice),O=K.call(D,String.prototype.replace),P=K.call(D,String.prototype.slice),Q=K.call(D,RegExp.prototype.exec),R=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,S=/\\(\\)?/g,T=function(a){var b=P(a,0,1),c=P(a,-1);if("%"===b&&"%"!==c)throw new i("invalid intrinsic syntax, expected closing `%`");if("%"===c&&"%"!==b)throw new i("invalid intrinsic syntax, expected opening `%`");var d=[];return O(a,R,function(a,b,c,e){d[d.length]=c?O(e,S,"$1"):b||a}),d},U=function(a,b){var c,d=a;if(L(J,d)&&(d="%"+(c=J[d])[0]+"%"),L(G,d)){var e=G[d];if(e===E&&(e=I(d)),void 0===e&&!b)throw new j("intrinsic "+a+" exists, but is not available. Please file an issue!");return{alias:c,name:d,value:e}}throw new i("intrinsic "+a+" does not exist!")};b.exports=function(a,b){if("string"!=typeof a||0===a.length)throw new j("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof b)throw new j('"allowMissing" argument must be a boolean');if(null===Q(/^%?[^%]*%?$/,a))throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var c=T(a),d=c.length>0?c[0]:"",e=U("%"+d+"%",b),f=e.name,g=e.value,h=!1,k=e.alias;k&&(d=k[0],N(c,M([0,1],k)));for(var l=1,m=!0;l<c.length;l+=1){var n=c[l],o=P(n,0,1),p=P(n,-1);if(('"'===o||"'"===o||"`"===o||'"'===p||"'"===p||"`"===p)&&o!==p)throw new i("property names with quotes must have matching quotes");if("constructor"!==n&&m||(h=!0),d+="."+n,L(G,f="%"+d+"%"))g=G[f];else if(null!=g){if(!(n in g)){if(!b)throw new j("base intrinsic for "+a+" exists, but the property is not available.");return}if(u&&l+1>=c.length){var q=u(g,n);g=(m=!!q)&&"get"in q&&!("originalValue"in q.get)?q.get:g[n]}else m=L(g,n),g=g[n];m&&!h&&(G[f]=g)}}return g}},85138,(a,b,c)=>{"use strict";var d=a.r(30903),e=a.r(56189),f=e([d("%String.prototype.indexOf%")]);b.exports=function(a,b){var c=d(a,!!b);return"function"==typeof c&&f(a,".prototype.")>-1?e([c]):c}},49960,(a,b,c)=>{"use strict";var d=a.r(30903),e=a.r(85138),f=a.r(80662),g=a.r(8126),h=d("%Map%",!0),i=e("Map.prototype.get",!0),j=e("Map.prototype.set",!0),k=e("Map.prototype.has",!0),l=e("Map.prototype.delete",!0),m=e("Map.prototype.size",!0);b.exports=!!h&&function(){var a,b={assert:function(a){if(!b.has(a))throw new g("Side channel does not contain "+f(a))},delete:function(b){if(a){var c=l(a,b);return 0===m(a)&&(a=void 0),c}return!1},get:function(b){if(a)return i(a,b)},has:function(b){return!!a&&k(a,b)},set:function(b,c){a||(a=new h),j(a,b,c)}};return b}},87883,(a,b,c)=>{"use strict";var d=a.r(30903),e=a.r(85138),f=a.r(80662),g=a.r(49960),h=a.r(8126),i=d("%WeakMap%",!0),j=e("WeakMap.prototype.get",!0),k=e("WeakMap.prototype.set",!0),l=e("WeakMap.prototype.has",!0),m=e("WeakMap.prototype.delete",!0);b.exports=i?function(){var a,b,c={assert:function(a){if(!c.has(a))throw new h("Side channel does not contain "+f(a))},delete:function(c){if(i&&c&&("object"==typeof c||"function"==typeof c)){if(a)return m(a,c)}else if(g&&b)return b.delete(c);return!1},get:function(c){return i&&c&&("object"==typeof c||"function"==typeof c)&&a?j(a,c):b&&b.get(c)},has:function(c){return i&&c&&("object"==typeof c||"function"==typeof c)&&a?l(a,c):!!b&&b.has(c)},set:function(c,d){i&&c&&("object"==typeof c||"function"==typeof c)?(a||(a=new i),k(a,c,d)):g&&(b||(b=g()),b.set(c,d))}};return c}:g},38002,(a,b,c)=>{"use strict";var d=a.r(8126),e=a.r(80662),f=a.r(2731),g=a.r(49960),h=a.r(87883)||g||f;b.exports=function(){var a,b={assert:function(a){if(!b.has(a))throw new d("Side channel does not contain "+e(a))},delete:function(b){return!!a&&a.delete(b)},get:function(b){return a&&a.get(b)},has:function(b){return!!a&&a.has(b)},set:function(b,c){a||(a=h()),a.set(b,c)}};return b}},14176,(a,b,c)=>{"use strict";var d=String.prototype.replace,e=/%20/g,f="RFC3986";b.exports={default:f,formatters:{RFC1738:function(a){return d.call(a,e,"+")},RFC3986:function(a){return String(a)}},RFC1738:"RFC1738",RFC3986:f}},36498,(a,b,c)=>{"use strict";var d=a.r(14176),e=Object.prototype.hasOwnProperty,f=Array.isArray,g=function(){for(var a=[],b=0;b<256;++b)a.push("%"+((b<16?"0":"")+b.toString(16)).toUpperCase());return a}(),h=function(a){for(;a.length>1;){var b=a.pop(),c=b.obj[b.prop];if(f(c)){for(var d=[],e=0;e<c.length;++e)void 0!==c[e]&&d.push(c[e]);b.obj[b.prop]=d}}},i=function(a,b){for(var c=b&&b.plainObjects?{__proto__:null}:{},d=0;d<a.length;++d)void 0!==a[d]&&(c[d]=a[d]);return c};b.exports={arrayToObject:i,assign:function(a,b){return Object.keys(b).reduce(function(a,c){return a[c]=b[c],a},a)},combine:function(a,b){return[].concat(a,b)},compact:function(a){for(var b=[{obj:{o:a},prop:"o"}],c=[],d=0;d<b.length;++d)for(var e=b[d],f=e.obj[e.prop],g=Object.keys(f),i=0;i<g.length;++i){var j=g[i],k=f[j];"object"==typeof k&&null!==k&&-1===c.indexOf(k)&&(b.push({obj:f,prop:j}),c.push(k))}return h(b),a},decode:function(a,b,c){var d=a.replace(/\+/g," ");if("iso-8859-1"===c)return d.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(d)}catch(a){return d}},encode:function(a,b,c,e,f){if(0===a.length)return a;var h=a;if("symbol"==typeof a?h=Symbol.prototype.toString.call(a):"string"!=typeof a&&(h=String(a)),"iso-8859-1"===c)return escape(h).replace(/%u[0-9a-f]{4}/gi,function(a){return"%26%23"+parseInt(a.slice(2),16)+"%3B"});for(var i="",j=0;j<h.length;j+=1024){for(var k=h.length>=1024?h.slice(j,j+1024):h,l=[],m=0;m<k.length;++m){var n=k.charCodeAt(m);if(45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122||f===d.RFC1738&&(40===n||41===n)){l[l.length]=k.charAt(m);continue}if(n<128){l[l.length]=g[n];continue}if(n<2048){l[l.length]=g[192|n>>6]+g[128|63&n];continue}if(n<55296||n>=57344){l[l.length]=g[224|n>>12]+g[128|n>>6&63]+g[128|63&n];continue}m+=1,n=65536+((1023&n)<<10|1023&k.charCodeAt(m)),l[l.length]=g[240|n>>18]+g[128|n>>12&63]+g[128|n>>6&63]+g[128|63&n]}i+=l.join("")}return i},isBuffer:function(a){return!!a&&"object"==typeof a&&!!(a.constructor&&a.constructor.isBuffer&&a.constructor.isBuffer(a))},isRegExp:function(a){return"[object RegExp]"===Object.prototype.toString.call(a)},maybeMap:function(a,b){if(f(a)){for(var c=[],d=0;d<a.length;d+=1)c.push(b(a[d]));return c}return b(a)},merge:function a(b,c,d){if(!c)return b;if("object"!=typeof c&&"function"!=typeof c){if(f(b))b.push(c);else{if(!b||"object"!=typeof b)return[b,c];(d&&(d.plainObjects||d.allowPrototypes)||!e.call(Object.prototype,c))&&(b[c]=!0)}return b}if(!b||"object"!=typeof b)return[b].concat(c);var g=b;return(f(b)&&!f(c)&&(g=i(b,d)),f(b)&&f(c))?(c.forEach(function(c,f){if(e.call(b,f)){var g=b[f];g&&"object"==typeof g&&c&&"object"==typeof c?b[f]=a(g,c,d):b.push(c)}else b[f]=c}),b):Object.keys(c).reduce(function(b,f){var g=c[f];return e.call(b,f)?b[f]=a(b[f],g,d):b[f]=g,b},g)}}},88649,(a,b,c)=>{"use strict";var d=a.r(38002),e=a.r(36498),f=a.r(14176),g=Object.prototype.hasOwnProperty,h={brackets:function(a){return a+"[]"},comma:"comma",indices:function(a,b){return a+"["+b+"]"},repeat:function(a){return a}},i=Array.isArray,j=Array.prototype.push,k=function(a,b){j.apply(a,i(b)?b:[b])},l=Date.prototype.toISOString,m=f.default,n={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,commaRoundTrip:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:e.encode,encodeValuesOnly:!1,filter:void 0,format:m,formatter:f.formatters[m],indices:!1,serializeDate:function(a){return l.call(a)},skipNulls:!1,strictNullHandling:!1},o={},p=function a(b,c,f,g,h,j,l,m,p,q,r,s,t,u,v,w,x,y){for(var z,A,B=b,C=y,D=0,E=!1;void 0!==(C=C.get(o))&&!E;){var F=C.get(b);if(D+=1,void 0!==F)if(F===D)throw RangeError("Cyclic object value");else E=!0;void 0===C.get(o)&&(D=0)}if("function"==typeof q?B=q(c,B):B instanceof Date?B=t(B):"comma"===f&&i(B)&&(B=e.maybeMap(B,function(a){return a instanceof Date?t(a):a})),null===B){if(j)return p&&!w?p(c,n.encoder,x,"key",u):c;B=""}if("string"==typeof(z=B)||"number"==typeof z||"boolean"==typeof z||"symbol"==typeof z||"bigint"==typeof z||e.isBuffer(B))return p?[v(w?c:p(c,n.encoder,x,"key",u))+"="+v(p(B,n.encoder,x,"value",u))]:[v(c)+"="+v(String(B))];var G=[];if(void 0===B)return G;if("comma"===f&&i(B))w&&p&&(B=e.maybeMap(B,p)),A=[{value:B.length>0?B.join(",")||null:void 0}];else if(i(q))A=q;else{var H=Object.keys(B);A=r?H.sort(r):H}var I=m?String(c).replace(/\./g,"%2E"):String(c),J=g&&i(B)&&1===B.length?I+"[]":I;if(h&&i(B)&&0===B.length)return J+"[]";for(var K=0;K<A.length;++K){var L=A[K],M="object"==typeof L&&L&&void 0!==L.value?L.value:B[L];if(!l||null!==M){var N=s&&m?String(L).replace(/\./g,"%2E"):String(L),O=i(B)?"function"==typeof f?f(J,N):J:J+(s?"."+N:"["+N+"]");y.set(b,D);var P=d();P.set(o,y),k(G,a(M,O,f,g,h,j,l,m,"comma"===f&&w&&i(B)?null:p,q,r,s,t,u,v,w,x,P))}}return G},q=function(a){if(!a)return n;if(void 0!==a.allowEmptyArrays&&"boolean"!=typeof a.allowEmptyArrays)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(void 0!==a.encodeDotInKeys&&"boolean"!=typeof a.encodeDotInKeys)throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw TypeError("Encoder has to be a function.");var b,c=a.charset||n.charset;if(void 0!==a.charset&&"utf-8"!==a.charset&&"iso-8859-1"!==a.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var d=f.default;if(void 0!==a.format){if(!g.call(f.formatters,a.format))throw TypeError("Unknown format option provided.");d=a.format}var e=f.formatters[d],j=n.filter;if(("function"==typeof a.filter||i(a.filter))&&(j=a.filter),b=a.arrayFormat in h?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":n.arrayFormat,"commaRoundTrip"in a&&"boolean"!=typeof a.commaRoundTrip)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var k=void 0===a.allowDots?!0===a.encodeDotInKeys||n.allowDots:!!a.allowDots;return{addQueryPrefix:"boolean"==typeof a.addQueryPrefix?a.addQueryPrefix:n.addQueryPrefix,allowDots:k,allowEmptyArrays:"boolean"==typeof a.allowEmptyArrays?!!a.allowEmptyArrays:n.allowEmptyArrays,arrayFormat:b,charset:c,charsetSentinel:"boolean"==typeof a.charsetSentinel?a.charsetSentinel:n.charsetSentinel,commaRoundTrip:!!a.commaRoundTrip,delimiter:void 0===a.delimiter?n.delimiter:a.delimiter,encode:"boolean"==typeof a.encode?a.encode:n.encode,encodeDotInKeys:"boolean"==typeof a.encodeDotInKeys?a.encodeDotInKeys:n.encodeDotInKeys,encoder:"function"==typeof a.encoder?a.encoder:n.encoder,encodeValuesOnly:"boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:n.encodeValuesOnly,filter:j,format:d,formatter:e,serializeDate:"function"==typeof a.serializeDate?a.serializeDate:n.serializeDate,skipNulls:"boolean"==typeof a.skipNulls?a.skipNulls:n.skipNulls,sort:"function"==typeof a.sort?a.sort:null,strictNullHandling:"boolean"==typeof a.strictNullHandling?a.strictNullHandling:n.strictNullHandling}};b.exports=function(a,b){var c,e=a,f=q(b);"function"==typeof f.filter?e=(0,f.filter)("",e):i(f.filter)&&(c=f.filter);var g=[];if("object"!=typeof e||null===e)return"";var j=h[f.arrayFormat],l="comma"===j&&f.commaRoundTrip;c||(c=Object.keys(e)),f.sort&&c.sort(f.sort);for(var m=d(),n=0;n<c.length;++n){var o=c[n],r=e[o];f.skipNulls&&null===r||k(g,p(r,o,j,l,f.allowEmptyArrays,f.strictNullHandling,f.skipNulls,f.encodeDotInKeys,f.encode?f.encoder:null,f.filter,f.sort,f.allowDots,f.serializeDate,f.format,f.formatter,f.encodeValuesOnly,f.charset,m))}var s=g.join(f.delimiter),t=!0===f.addQueryPrefix?"?":"";return f.charsetSentinel&&("iso-8859-1"===f.charset?t+="utf8=%26%2310003%3B&":t+="utf8=%E2%9C%93&"),s.length>0?t+s:""}},46419,(a,b,c)=>{"use strict";var d=a.r(36498),e=Object.prototype.hasOwnProperty,f=Array.isArray,g={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:d.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1,throwOnLimitExceeded:!1},h=function(a,b,c){if(a&&"string"==typeof a&&b.comma&&a.indexOf(",")>-1)return a.split(",");if(b.throwOnLimitExceeded&&c>=b.arrayLimit)throw RangeError("Array limit exceeded. Only "+b.arrayLimit+" element"+(1===b.arrayLimit?"":"s")+" allowed in an array.");return a},i=function(a,b){var c={__proto__:null},i=b.ignoreQueryPrefix?a.replace(/^\?/,""):a;i=i.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var j=b.parameterLimit===1/0?void 0:b.parameterLimit,k=i.split(b.delimiter,b.throwOnLimitExceeded?j+1:j);if(b.throwOnLimitExceeded&&k.length>j)throw RangeError("Parameter limit exceeded. Only "+j+" parameter"+(1===j?"":"s")+" allowed.");var l=-1,m=b.charset;if(b.charsetSentinel)for(n=0;n<k.length;++n)0===k[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===k[n]?m="utf-8":"utf8=%26%2310003%3B"===k[n]&&(m="iso-8859-1"),l=n,n=k.length);for(n=0;n<k.length;++n)if(n!==l){var n,o,p,q=k[n],r=q.indexOf("]="),s=-1===r?q.indexOf("="):r+1;-1===s?(o=b.decoder(q,g.decoder,m,"key"),p=b.strictNullHandling?null:""):(o=b.decoder(q.slice(0,s),g.decoder,m,"key"),p=d.maybeMap(h(q.slice(s+1),b,f(c[o])?c[o].length:0),function(a){return b.decoder(a,g.decoder,m,"value")})),p&&b.interpretNumericEntities&&"iso-8859-1"===m&&(p=String(p).replace(/&#(\d+);/g,function(a,b){return String.fromCharCode(parseInt(b,10))})),q.indexOf("[]=")>-1&&(p=f(p)?[p]:p);var t=e.call(c,o);t&&"combine"===b.duplicates?c[o]=d.combine(c[o],p):t&&"last"!==b.duplicates||(c[o]=p)}return c},j=function(a,b,c,e){var f=0;if(a.length>0&&"[]"===a[a.length-1]){var g=a.slice(0,-1).join("");f=Array.isArray(b)&&b[g]?b[g].length:0}for(var i=e?b:h(b,c,f),j=a.length-1;j>=0;--j){var k,l=a[j];if("[]"===l&&c.parseArrays)k=c.allowEmptyArrays&&(""===i||c.strictNullHandling&&null===i)?[]:d.combine([],i);else{k=c.plainObjects?{__proto__:null}:{};var m="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,n=c.decodeDotInKeys?m.replace(/%2E/g,"."):m,o=parseInt(n,10);c.parseArrays||""!==n?!isNaN(o)&&l!==n&&String(o)===n&&o>=0&&c.parseArrays&&o<=c.arrayLimit?(k=[])[o]=i:"__proto__"!==n&&(k[n]=i):k={0:i}}i=k}return i},k=function(a,b,c,d){if(a){var f=c.allowDots?a.replace(/\.([^.[]+)/g,"[$1]"):a,g=/(\[[^[\]]*])/g,h=c.depth>0&&/(\[[^[\]]*])/.exec(f),i=h?f.slice(0,h.index):f,k=[];if(i){if(!c.plainObjects&&e.call(Object.prototype,i)&&!c.allowPrototypes)return;k.push(i)}for(var l=0;c.depth>0&&null!==(h=g.exec(f))&&l<c.depth;){if(l+=1,!c.plainObjects&&e.call(Object.prototype,h[1].slice(1,-1))&&!c.allowPrototypes)return;k.push(h[1])}if(h){if(!0===c.strictDepth)throw RangeError("Input depth exceeded depth option of "+c.depth+" and strictDepth is true");k.push("["+f.slice(h.index)+"]")}return j(k,b,c,d)}},l=function(a){if(!a)return g;if(void 0!==a.allowEmptyArrays&&"boolean"!=typeof a.allowEmptyArrays)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(void 0!==a.decodeDotInKeys&&"boolean"!=typeof a.decodeDotInKeys)throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(null!==a.decoder&&void 0!==a.decoder&&"function"!=typeof a.decoder)throw TypeError("Decoder has to be a function.");if(void 0!==a.charset&&"utf-8"!==a.charset&&"iso-8859-1"!==a.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0!==a.throwOnLimitExceeded&&"boolean"!=typeof a.throwOnLimitExceeded)throw TypeError("`throwOnLimitExceeded` option must be a boolean");var b=void 0===a.charset?g.charset:a.charset,c=void 0===a.duplicates?g.duplicates:a.duplicates;if("combine"!==c&&"first"!==c&&"last"!==c)throw TypeError("The duplicates option must be either combine, first, or last");return{allowDots:void 0===a.allowDots?!0===a.decodeDotInKeys||g.allowDots:!!a.allowDots,allowEmptyArrays:"boolean"==typeof a.allowEmptyArrays?!!a.allowEmptyArrays:g.allowEmptyArrays,allowPrototypes:"boolean"==typeof a.allowPrototypes?a.allowPrototypes:g.allowPrototypes,allowSparse:"boolean"==typeof a.allowSparse?a.allowSparse:g.allowSparse,arrayLimit:"number"==typeof a.arrayLimit?a.arrayLimit:g.arrayLimit,charset:b,charsetSentinel:"boolean"==typeof a.charsetSentinel?a.charsetSentinel:g.charsetSentinel,comma:"boolean"==typeof a.comma?a.comma:g.comma,decodeDotInKeys:"boolean"==typeof a.decodeDotInKeys?a.decodeDotInKeys:g.decodeDotInKeys,decoder:"function"==typeof a.decoder?a.decoder:g.decoder,delimiter:"string"==typeof a.delimiter||d.isRegExp(a.delimiter)?a.delimiter:g.delimiter,depth:"number"==typeof a.depth||!1===a.depth?+a.depth:g.depth,duplicates:c,ignoreQueryPrefix:!0===a.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof a.interpretNumericEntities?a.interpretNumericEntities:g.interpretNumericEntities,parameterLimit:"number"==typeof a.parameterLimit?a.parameterLimit:g.parameterLimit,parseArrays:!1!==a.parseArrays,plainObjects:"boolean"==typeof a.plainObjects?a.plainObjects:g.plainObjects,strictDepth:"boolean"==typeof a.strictDepth?!!a.strictDepth:g.strictDepth,strictNullHandling:"boolean"==typeof a.strictNullHandling?a.strictNullHandling:g.strictNullHandling,throwOnLimitExceeded:"boolean"==typeof a.throwOnLimitExceeded&&a.throwOnLimitExceeded}};b.exports=function(a,b){var c=l(b);if(""===a||null==a)return c.plainObjects?{__proto__:null}:{};for(var e="string"==typeof a?i(a,c):a,f=c.plainObjects?{__proto__:null}:{},g=Object.keys(e),h=0;h<g.length;++h){var j=g[h],m=k(j,e[j],c,"string"==typeof a);f=d.merge(f,m,c)}return!0===c.allowSparse?f:d.compact(f)}},56477,(a,b,c)=>{"use strict";var d=a.r(88649),e=a.r(46419);b.exports={formats:a.r(14176),parse:e,stringify:d}},31996,a=>{"use strict";let b;var c=a.i(84306),d=a.i(29379),e=a.i(15933),f=a.i(49461),g=a.i(69246),h=a.i(15182);let i=(0,h.default)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);var j=a.i(96567),k=a.i(17041),l=a.i(21240),m=a.i(40229);let n=(0,h.default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var o=a.i(70658);let p=(0,h.default)("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var q=a.i(19479),r=a.i(38235),s=a.i(1678);let t=[{id:"resume-review",title:"Resume Review",description:"Detailed line-by-line feedback on your resume with specific rewrite suggestions. Our team identifies weaknesses in positioning, bullet structure, and overall narrative—then shows you exactly how to fix them.",price:197,turnaround:"3-5 business days",includes:["Line-by-line written feedback","Bullet point restructuring suggestions","Quantification opportunities identified","Positioning and narrative assessment","Format and layout recommendations","One round of follow-up questions"]},{id:"resume-rewrite",title:"Resume Rewrite",description:"Complete resume overhaul from scratch. Our team rebuilds your resume using frameworks proven at top firms—transforming your experience into the positioning that gets callbacks.",price:497,turnaround:"5-7 business days",includes:["Full resume reconstruction","Experience repositioning strategy","Optimized bullet point writing","Quantified impact statements","Industry-standard formatting","Two revision rounds included","Final PDF and Word delivery"]}];[{slug:"private-equity-recruiting-timeline-2026",title:"Private Equity Recruiting Timeline 2026: On-Cycle, Off-Cycle, and What to Expect",summary:"The complete PE recruiting calendar for 2026—when headhunters call, how to prepare, and navigating compressed timelines.",category:"Recruiting",readTime:"18 min read",publishedAt:"2026-01-15",content:`
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
    `}].slice(0,3);var u=a.i(54799),v=a.i(27699);class w{computeHMACSignature(a,b){throw Error("computeHMACSignature not implemented.")}computeHMACSignatureAsync(a,b){throw Error("computeHMACSignatureAsync not implemented.")}computeSHA256Async(a){throw Error("computeSHA256 not implemented.")}}class x extends Error{}class y extends w{computeHMACSignature(a,b){return u.createHmac("sha256",b).update(a,"utf8").digest("hex")}async computeHMACSignatureAsync(a,b){return await this.computeHMACSignature(a,b)}async computeSHA256Async(a){return new Uint8Array(await u.createHash("sha256").update(a).digest())}}var z=a.i(21517),A=a.i(24836);class B{getClientName(){throw Error("getClientName not implemented.")}makeRequest(a,b,c,d,e,f,g,h){throw Error("makeRequest not implemented.")}static makeTimeoutError(){let a=TypeError(B.TIMEOUT_ERROR_CODE);return a.code=B.TIMEOUT_ERROR_CODE,a}}B.CONNECTION_CLOSED_ERROR_CODES=["ECONNRESET","EPIPE"],B.TIMEOUT_ERROR_CODE="ETIMEDOUT";class C{constructor(a,b){this._statusCode=a,this._headers=b}getStatusCode(){return this._statusCode}getHeaders(){return this._headers}getRawResponse(){throw Error("getRawResponse not implemented.")}toStream(a){throw Error("toStream not implemented.")}toJSON(){throw Error("toJSON not implemented.")}}let D=z.default||z,E=A.default||A,F=new D.Agent({keepAlive:!0}),G=new E.Agent({keepAlive:!0});class H extends B{constructor(a){super(),this._agent=a}getClientName(){return"node"}makeRequest(a,b,c,d,e,f,g,h){let i="http"===g,j=this._agent;return j||(j=i?F:G),new Promise((g,k)=>{let l=(i?D:E).request({host:a,port:b,path:c,method:d,agent:j,headers:e,ciphers:"DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5"});l.setTimeout(h,()=>{l.destroy(B.makeTimeoutError())}),l.on("response",a=>{g(new I(a))}),l.on("error",a=>{k(a)}),l.once("socket",a=>{a.connecting?a.once(i?"connect":"secureConnect",()=>{l.write(f),l.end()}):(l.write(f),l.end())})})}}class I extends C{constructor(a){super(a.statusCode,a.headers||{}),this._res=a}getRawResponse(){return this._res}toStream(a){return this._res.once("end",()=>a()),this._res}toJSON(){return new Promise((a,b)=>{let c="";this._res.setEncoding("utf8"),this._res.on("data",a=>{c+=a}),this._res.once("end",()=>{try{a(JSON.parse(c))}catch(a){b(a)}})})}}var J=a.i(56477);let K=["apiKey","idempotencyKey","stripeAccount","apiVersion","maxNetworkRetries","timeout","host","authenticator","stripeContext","additionalHeaders","streaming"];function L(a){return a&&"object"==typeof a&&K.some(b=>Object.prototype.hasOwnProperty.call(a,b))}function M(a,b){return J.stringify(a,{serializeDate:a=>Math.floor(a.getTime()/1e3).toString(),arrayFormat:"indices"}).replace(/%5B/g,"[").replace(/%5D/g,"]")}let N=(b={"\n":"\\n",'"':'\\"',"\u2028":"\\u2028","\u2029":"\\u2029"},a=>{let c=a.replace(/["\n\r\u2028\u2029]/g,a=>b[a]);return a=>c.replace(/\{([\s\S]+?)\}/g,(b,c)=>{let d=a[c];return["number","string","boolean"].includes(typeof d)?encodeURIComponent(d):""})});function O(a){if(!Array.isArray(a)||!a[0]||"object"!=typeof a[0])return{};if(!L(a[0]))return a.shift();let b=Object.keys(a[0]),c=b.filter(a=>K.includes(a));return c.length>0&&c.length!==b.length&&S(`Options found in arguments (${c.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`),{}}function P(a){let b={host:null,headers:{},settings:{},streaming:!1};if(a.length>0){let c=a[a.length-1];if("string"==typeof c)b.authenticator=U(a.pop());else if(L(c)){let c=Object.assign({},a.pop()),d=Object.keys(c).filter(a=>!K.includes(a));if(d.length&&S(`Invalid options found (${d.join(", ")}); ignoring.`),c.apiKey&&(b.authenticator=U(c.apiKey)),c.idempotencyKey&&(b.headers["Idempotency-Key"]=c.idempotencyKey),c.stripeAccount&&(b.headers["Stripe-Account"]=c.stripeAccount),c.stripeContext){if(b.headers["Stripe-Account"])throw Error("Can't specify both stripeAccount and stripeContext.");b.headers["Stripe-Context"]=c.stripeContext}if(c.apiVersion&&(b.headers["Stripe-Version"]=c.apiVersion),Number.isInteger(c.maxNetworkRetries)&&(b.settings.maxNetworkRetries=c.maxNetworkRetries),Number.isInteger(c.timeout)&&(b.settings.timeout=c.timeout),c.host&&(b.host=c.host),c.authenticator){if(c.apiKey)throw Error("Can't specify both apiKey and authenticator.");if("function"!=typeof c.authenticator)throw Error("The authenticator must be a function receiving a request as the first parameter.");b.authenticator=c.authenticator}c.additionalHeaders&&(b.headers=c.additionalHeaders),c.streaming&&(b.streaming=!0)}}return b}function Q(a){if("object"!=typeof a)throw Error("Argument must be an object");return Object.keys(a).reduce((b,c)=>(null!=a[c]&&(b[c]=a[c]),b),{})}function R(a,b){return b?a.then(a=>{setTimeout(()=>{b(null,a)},0)},a=>{setTimeout(()=>{b(a,null)},0)}):a}function S(a){return"function"!=typeof process.emitWarning?console.warn(`Stripe: ${a}`):process.emitWarning(a,"Stripe")}function T(a,b,c){if(!Number.isInteger(b))if(void 0!==c)return c;else throw Error(`${a} must be an integer`);return b}function U(a){let b=b=>(b.headers.Authorization="Bearer "+a,Promise.resolve());return b._apiKey=a,b}function V(a,b){return this[a]instanceof Date?Math.floor(this[a].getTime()/1e3).toString():b}function W(a){return a&&a.startsWith("/v2")?"v2":"v1"}function X(a){return Array.isArray(a)?a.join(", "):String(a)}class Y extends B{constructor(a){if(super(),!a){if(!globalThis.fetch)throw Error("fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation.");a=globalThis.fetch}globalThis.AbortController?this._fetchFn=Y.makeFetchWithAbortTimeout(a):this._fetchFn=Y.makeFetchWithRaceTimeout(a)}static makeFetchWithRaceTimeout(a){return(b,c,d)=>{let e,f=new Promise((a,b)=>{e=setTimeout(()=>{e=null,b(B.makeTimeoutError())},d)});return Promise.race([a(b,c),f]).finally(()=>{e&&clearTimeout(e)})}}static makeFetchWithAbortTimeout(a){return async(b,c,d)=>{let e=new AbortController,f=setTimeout(()=>{f=null,e.abort(B.makeTimeoutError())},d);try{return await a(b,Object.assign(Object.assign({},c),{signal:e.signal}))}catch(a){if("AbortError"===a.name)throw B.makeTimeoutError();throw a}finally{f&&clearTimeout(f)}}}getClientName(){return"fetch"}async makeRequest(a,b,c,d,e,f,g,h){let i=new URL(c,`${"http"===g?"http":"https"}://${a}`);i.port=b;let j="POST"==d||"PUT"==d||"PATCH"==d;return new Z(await this._fetchFn(i.toString(),{method:d,headers:Object.entries(e).map(([a,b])=>[a,X(b)]),body:f||(j?"":void 0)},h))}}class Z extends C{constructor(a){super(a.status,Z._transformHeadersToObject(a.headers)),this._res=a}getRawResponse(){return this._res}toStream(a){return a(),this._res.body}toJSON(){return this._res.json()}static _transformHeadersToObject(a){let b={};for(let c of a){if(!Array.isArray(c)||2!=c.length)throw Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");b[c[0]]=c[1]}return b}}class $ extends w{constructor(a){super(),this.subtleCrypto=a||crypto.subtle}computeHMACSignature(a,b){throw new x("SubtleCryptoProvider cannot be used in a synchronous context.")}async computeHMACSignatureAsync(a,b){let c=new TextEncoder,d=await this.subtleCrypto.importKey("raw",c.encode(b),{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),e=new Uint8Array(await this.subtleCrypto.sign("hmac",d,c.encode(a))),f=Array(e.length);for(let a=0;a<e.length;a++)f[a]=_[e[a]];return f.join("")}async computeSHA256Async(a){return new Uint8Array(await this.subtleCrypto.digest("SHA-256",a))}}let _=Array(256);for(let a=0;a<_.length;a++)_[a]=a.toString(16).padStart(2,"0");class aa{constructor(){this._fetchFn=null,this._agent=null}getUname(){throw Error("getUname not implemented.")}uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{let b=16*Math.random()|0;return("x"===a?b:3&b|8).toString(16)})}secureCompare(a,b){if(a.length!==b.length)return!1;let c=a.length,d=0;for(let e=0;e<c;++e)d|=a.charCodeAt(e)^b.charCodeAt(e);return 0===d}createEmitter(){throw Error("createEmitter not implemented.")}tryBufferData(a){throw Error("tryBufferData not implemented.")}createNodeHttpClient(a){throw Error("createNodeHttpClient not implemented.")}createFetchHttpClient(a){return new Y(a)}createDefaultHttpClient(){throw Error("createDefaultHttpClient not implemented.")}createNodeCryptoProvider(){throw Error("createNodeCryptoProvider not implemented.")}createSubtleCryptoProvider(a){return new $(a)}createDefaultCryptoProvider(){throw Error("createDefaultCryptoProvider not implemented.")}}let ab=a=>{switch(a.type){case"card_error":return new ae(a);case"invalid_request_error":return new af(a);case"api_error":return new ag(a);case"authentication_error":return new ah(a);case"rate_limit_error":return new aj(a);case"idempotency_error":return new am(a);case"invalid_grant":return new an(a);default:return new ao(a)}},ac=a=>"temporary_session_expired"===a.type?new ap(a):"invalid_fields"===a.code?new af(a):ab(a);class ad extends Error{constructor(a={},b=null){var c;super(a.message),this.type=b||this.constructor.name,this.raw=a,this.rawType=a.type,this.code=a.code,this.doc_url=a.doc_url,this.param=a.param,this.detail=a.detail,this.headers=a.headers,this.requestId=a.requestId,this.statusCode=a.statusCode,this.message=null!=(c=a.message)?c:"",this.userMessage=a.user_message,this.charge=a.charge,this.decline_code=a.decline_code,this.payment_intent=a.payment_intent,this.payment_method=a.payment_method,this.payment_method_type=a.payment_method_type,this.setup_intent=a.setup_intent,this.source=a.source}}ad.generate=ab;class ae extends ad{constructor(a={}){super(a,"StripeCardError")}}class af extends ad{constructor(a={}){super(a,"StripeInvalidRequestError")}}class ag extends ad{constructor(a={}){super(a,"StripeAPIError")}}class ah extends ad{constructor(a={}){super(a,"StripeAuthenticationError")}}class ai extends ad{constructor(a={}){super(a,"StripePermissionError")}}class aj extends ad{constructor(a={}){super(a,"StripeRateLimitError")}}class ak extends ad{constructor(a={}){super(a,"StripeConnectionError")}}class al extends ad{constructor(a,b,c={}){super(c,"StripeSignatureVerificationError"),this.header=a,this.payload=b}}class am extends ad{constructor(a={}){super(a,"StripeIdempotencyError")}}class an extends ad{constructor(a={}){super(a,"StripeInvalidGrantError")}}class ao extends ad{constructor(a={}){super(a,"StripeUnknownError")}}class ap extends ad{constructor(a={}){super(a,"TemporarySessionExpiredError")}}a.s(["StripeAPIError",()=>ag,"StripeAuthenticationError",()=>ah,"StripeCardError",()=>ae,"StripeConnectionError",()=>ak,"StripeError",()=>ad,"StripeIdempotencyError",()=>am,"StripeInvalidGrantError",()=>an,"StripeInvalidRequestError",()=>af,"StripePermissionError",()=>ai,"StripeRateLimitError",()=>aj,"StripeSignatureVerificationError",()=>al,"StripeUnknownError",()=>ao,"TemporarySessionExpiredError",()=>ap,"generateV1Error",0,ab,"generateV2Error",0,ac],28537);var aq=a.i(33405);class ar extends ad{}var as=a.i(28537);class at{constructor(a,b){this._stripe=a,this._maxBufferedRequestMetric=b}_normalizeStripeContext(a,b){return a?a.toString()||null:(null==b?void 0:b.toString())||null}_addHeadersDirectlyToObject(a,b){a.requestId=b["request-id"],a.stripeAccount=a.stripeAccount||b["stripe-account"],a.apiVersion=a.apiVersion||b["stripe-version"],a.idempotencyKey=a.idempotencyKey||b["idempotency-key"]}_makeResponseEvent(a,b,c){let d=Date.now(),e=d-a.request_start_time;return Q({api_version:c["stripe-version"],account:c["stripe-account"],idempotency_key:c["idempotency-key"],method:a.method,path:a.path,status:b,request_id:this._getRequestId(c),elapsed:e,request_start_time:a.request_start_time,request_end_time:d})}_getRequestId(a){return a["request-id"]}_streamingResponseHandler(a,b,c){return d=>{let e=d.getHeaders(),f=()=>{let c=this._makeResponseEvent(a,d.getStatusCode(),e);this._stripe._emitter.emit("response",c),this._recordRequestMetrics(this._getRequestId(e),c.elapsed,b)},g=d.toStream(f);return this._addHeadersDirectlyToObject(g,e),c(null,g)}}_jsonResponseHandler(a,b,c,d){return e=>{let f=e.getHeaders(),g=this._getRequestId(f),h=e.getStatusCode(),i=this._makeResponseEvent(a,h,f);this._stripe._emitter.emit("response",i),e.toJSON().then(a=>{if(a.error)throw"string"==typeof a.error&&(a.error={type:a.error,message:a.error_description}),a.error.headers=f,a.error.statusCode=h,a.error.requestId=g,401===h?new ah(a.error):403===h?new ai(a.error):429===h?new aj(a.error):"v2"===b?ac(a.error):ab(a.error);return a},a=>{throw new ag({message:"Invalid JSON received from the Stripe API",exception:a,requestId:f["request-id"]})}).then(a=>{this._recordRequestMetrics(g,i.elapsed,c);let b=e.getRawResponse();this._addHeadersDirectlyToObject(b,f),Object.defineProperty(a,"lastResponse",{enumerable:!1,writable:!1,value:b}),d(null,a)},a=>d(a,null))}}static _generateConnectionErrorMessage(a){return`An error occurred with our connection to Stripe.${a>0?` Request was retried ${a} times.`:""}`}static _shouldRetry(a,b,c,d){return!!(d&&0===b&&B.CONNECTION_CLOSED_ERROR_CODES.includes(d.code))||!(b>=c)&&(!a||"false"!==a.getHeaders()["stripe-should-retry"]&&!!("true"===a.getHeaders()["stripe-should-retry"]||409===a.getStatusCode()||a.getStatusCode()>=500))}_getSleepTimeInMS(a,b=null){let c=this._stripe.getInitialNetworkRetryDelay(),d=Math.min(c*Math.pow(2,a-1),this._stripe.getMaxNetworkRetryDelay());return d*=.5*(1+Math.random()),d=Math.max(c,d),Number.isInteger(b)&&b<=60&&(d=Math.max(d,b)),1e3*d}_getMaxNetworkRetries(a={}){return void 0!==a.maxNetworkRetries&&Number.isInteger(a.maxNetworkRetries)?a.maxNetworkRetries:this._stripe.getMaxNetworkRetries()}_defaultIdempotencyKey(a,b,c){let d=this._getMaxNetworkRetries(b),e=()=>`stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;if("v2"===c){if("POST"===a||"DELETE"===a)return e()}else if("v1"===c&&"POST"===a&&d>0)return e();return null}_makeHeaders({contentType:a,contentLength:b,apiVersion:c,clientUserAgent:d,method:e,userSuppliedHeaders:f,userSuppliedSettings:g,stripeAccount:h,stripeContext:i,apiMode:j}){let k={Accept:"application/json","Content-Type":a,"User-Agent":this._getUserAgentString(j),"X-Stripe-Client-User-Agent":d,"X-Stripe-Client-Telemetry":this._getTelemetryHeader(),"Stripe-Version":c,"Stripe-Account":h,"Stripe-Context":i,"Idempotency-Key":this._defaultIdempotencyKey(e,g,j)},l="POST"==e||"PUT"==e||"PATCH"==e;return(l||b)&&(l||S(`${e} method had non-zero contentLength but no payload is expected for this verb`),k["Content-Length"]=b),Object.assign(Q(k),f&&"object"==typeof f?Object.keys(f).reduce((a,b)=>(a[b.split("-").map(a=>a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()).join("-")]=f[b],a),{}):f)}_getUserAgentString(a){let b=this._stripe.getConstant("PACKAGE_VERSION"),c=this._stripe._appInfo?this._stripe.getAppInfoAsString():"";return`Stripe/${a} NodeBindings/${b} ${c}`.trim()}_getTelemetryHeader(){if(this._stripe.getTelemetryEnabled()&&this._stripe._prevRequestMetrics.length>0)return JSON.stringify({last_request_metrics:this._stripe._prevRequestMetrics.shift()})}_recordRequestMetrics(a,b,c){if(this._stripe.getTelemetryEnabled()&&a)if(this._stripe._prevRequestMetrics.length>this._maxBufferedRequestMetric)S("Request metrics buffer is full, dropping telemetry message.");else{let d={request_id:a,request_duration_ms:b};c&&c.length>0&&(d.usage=c),this._stripe._prevRequestMetrics.push(d)}}_rawRequest(a,b,c,d,e){return new Promise((f,g)=>{let h;try{let f=a.toUpperCase();if("POST"!==f&&c&&0!==Object.keys(c).length)throw Error("rawRequest only supports params on POST requests. Please pass null and add your parameters to path.");let g=[].slice.call([c,d]),i=O(g),j="POST"===f?Object.assign({},i):null,k=P(g),l=k.headers,m=k.authenticator;h={requestMethod:f,requestPath:b,bodyData:j,queryData:{},authenticator:m,headers:l,host:k.host,streaming:!!k.streaming,settings:{},usage:e||["raw_request"]}}catch(a){g(a);return}let{headers:i,settings:j}=h,k=h.authenticator;this._request(h.requestMethod,h.host,b,h.bodyData,k,{headers:i,settings:j,streaming:h.streaming},h.usage,function(a,b){a?g(a):f(b)})})}_request(a,b,c,d,e,f,g=[],h,i=null){var j;let k;e=null!=(j=null!=e?e:this._stripe._authenticator)?j:null;let l=W(c),m=(a,b,c,d,e)=>setTimeout(a,this._getSleepTimeInMS(d,e),b,c,d+1),n=(d,i,j)=>{let o=f.settings&&f.settings.timeout&&Number.isInteger(f.settings.timeout)&&f.settings.timeout>=0?f.settings.timeout:this._stripe.getApiField("timeout"),p={host:b||this._stripe.getApiField("host"),port:this._stripe.getApiField("port"),path:c,method:a,headers:Object.assign({},i),body:k,protocol:this._stripe.getApiField("protocol")};e(p).then(()=>{let b=this._stripe.getApiField("httpClient").makeRequest(p.host,p.port,p.path,p.method,p.headers,p.body,p.protocol,o),e=Date.now(),k=Q({api_version:d,account:X(i["Stripe-Account"]),idempotency_key:X(i["Idempotency-Key"]),method:a,path:c,request_start_time:e}),q=j||0,r=this._getMaxNetworkRetries(f.settings||{});this._stripe._emitter.emit("request",k),b.then(a=>{if(at._shouldRetry(a,q,r)){var b;return m(n,d,i,q,Number(Array.isArray(b=a.getHeaders()["retry-after"])?b[0]:b))}return f.streaming&&400>a.getStatusCode()?this._streamingResponseHandler(k,g,h)(a):this._jsonResponseHandler(k,l,g,h)(a)}).catch(a=>at._shouldRetry(null,q,r,a)?m(n,d,i,q,null):h(new ak({message:a.code&&a.code===B.TIMEOUT_ERROR_CODE?`Request aborted due to timeout being reached (${o}ms)`:at._generateConnectionErrorMessage(q),detail:a})))}).catch(a=>{throw new ad({message:"Unable to authenticate the request",exception:a})})},o=(b,c)=>{if(b)return h(b);k=c,this._stripe.getClientUserAgent(b=>{var c,d,e;let g=this._stripe.getApiField("version"),h=this._makeHeaders({contentType:"v2"==l?"application/json":"application/x-www-form-urlencoded",contentLength:new TextEncoder().encode(k).length,apiVersion:g,clientUserAgent:b,method:a,userSuppliedHeaders:null!=(c=f.headers)?c:null,userSuppliedSettings:null!=(d=f.settings)?d:{},stripeAccount:null!=(e=f.stripeAccount)?e:this._stripe.getApiField("stripeAccount"),stripeContext:this._normalizeStripeContext(f.stripeContext,this._stripe.getApiField("stripeContext")),apiMode:l});n(g,h,0)})};if(i)i(a,d,f.headers,o);else{let a;o(null,a="v2"==l?d?JSON.stringify(d,V):"":M(d||{},l))}}}class au{constructor(a,b,c,d){this.index=0,this.pagePromise=a,this.promiseCache={currentPromise:null},this.requestArgs=b,this.spec=c,this.stripeResource=d}async iterate(a){if(!(a&&a.data&&"number"==typeof a.data.length))throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");let b=az(this.requestArgs);if(this.index<a.data.length){let c=b?a.data.length-1-this.index:this.index,d=a.data[c];return this.index+=1,{value:d,done:!1}}if(a.has_more){this.index=0,this.pagePromise=this.getNextPage(a);let b=await this.pagePromise;return this.iterate(b)}return{done:!0,value:void 0}}getNextPage(a){throw Error("Unimplemented")}async _next(){return this.iterate(await this.pagePromise)}next(){if(this.promiseCache.currentPromise)return this.promiseCache.currentPromise;let a=(async()=>{let a=await this._next();return this.promiseCache.currentPromise=null,a})();return this.promiseCache.currentPromise=a,a}}class av extends au{getNextPage(a){let b=az(this.requestArgs),c=function(a,b){let c=b?0:a.data.length-1,d=a.data[c],e=d&&d.id;if(!e)throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");return e}(a,b);return this.stripeResource._makeRequest(this.requestArgs,this.spec,{[b?"ending_before":"starting_after"]:c})}}class aw extends au{getNextPage(a){if(!a.next_page)throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");return this.stripeResource._makeRequest(this.requestArgs,this.spec,{page:a.next_page})}}class ax{constructor(a,b,c,d){this.currentPageIterator=(async()=>(await a).data[Symbol.iterator]())(),this.nextPageUrl=(async()=>(await a).next_page_url||null)(),this.requestArgs=b,this.spec=c,this.stripeResource=d}async turnPage(){let a=await this.nextPageUrl;if(!a)return null;this.spec.fullPath=a;let b=await this.stripeResource._makeRequest([],this.spec,{});return this.nextPageUrl=Promise.resolve(b.next_page_url),this.currentPageIterator=Promise.resolve(b.data[Symbol.iterator]()),this.currentPageIterator}async next(){{let a=(await this.currentPageIterator).next();if(!a.done)return{done:!1,value:a.value}}let a=await this.turnPage();if(!a)return{done:!0,value:void 0};let b=a.next();return b.done?{done:!0,value:void 0}:{done:!1,value:b.value}}}let ay=a=>{var b,c;let d=(b=(...b)=>a.next(...b),function(){var a,c;let d=[].slice.call(arguments),e=function(a){if(0===a.length)return;let b=a[0];if("function"!=typeof b)throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof b}`);if(2===b.length)return b;if(b.length>2)throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${b}`);return function(a,c){c(b(a))}}(d),f=function(a){if(a.length<2)return null;let b=a[1];if("function"!=typeof b)throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof b}`);return b}(d);if(d.length>2)throw Error(`autoPagingEach takes up to two arguments; received ${d}`);return R((a=b,c=e,new Promise((b,d)=>{a().then(function d(e){if(e.done)return void b();let f=e.value;return new Promise(a=>{c(f,a)}).then(b=>!1===b?d({done:!0,value:void 0}):a().then(d))}).catch(d)})),f)}),e=(c=d,function(a,b){let d=a&&a.limit;if(!d)throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");if(d>1e4)throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");return R(new Promise((a,b)=>{let e=[];c(a=>{if(e.push(a),e.length>=d)return!1}).then(()=>{a(e)}).catch(b)}),b)}),f={autoPagingEach:d,autoPagingToArray:e,next:()=>a.next(),return:()=>({}),["undefined"!=typeof Symbol&&Symbol.asyncIterator?Symbol.asyncIterator:"@@asyncIterator"]:()=>f};return f};function az(a){return!!O([].slice.call(a)).ending_before}function aA(a,b){if(this._stripe=a,b)throw Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");this.basePath=N(this.basePath||a.getApiField("basePath")),this.resourcePath=this.path,this.path=N(this.path),this.initialize(...arguments)}aA.extend=function(a){let b=this,c=Object.prototype.hasOwnProperty.call(a,"constructor")?a.constructor:function(...a){b.apply(this,a)};return Object.assign(c,b),c.prototype=Object.create(b.prototype),Object.assign(c.prototype,a),c},aA.method=function(a){if(void 0!==a.path&&void 0!==a.fullPath)throw Error(`Method spec specified both a 'path' (${a.path}) and a 'fullPath' (${a.fullPath}).`);return function(...b){let c,d,e="function"==typeof b[b.length-1]&&b.pop();c=(a.fullPath||this.createResourcePathWithSymbols(a.path||"")).match(/\{\w+\}/g),a.urlParams=c?c.map(a=>a.replace(/[{}]/g,"")):[];let f=R(this._makeRequest(b,a,{}),e);return Object.assign(f,"v2"!==(d=W(a.fullPath||a.path))&&"search"===a.methodType?ay(new aw(f,b,a,this)):"v2"!==d&&"list"===a.methodType?ay(new av(f,b,a,this)):"v2"===d&&"list"===a.methodType?ay(new ax(f,b,a,this)):null),f}},aA.MAX_BUFFERED_REQUEST_METRICS=100,aA.prototype={_stripe:null,path:"",resourcePath:"",basePath:null,initialize(){},requestDataProcessor:null,validateRequest:null,createFullPath(a,b){let c=[this.basePath(b),this.path(b)];if("function"==typeof a){let d=a(b);d&&c.push(d)}else c.push(a);return this._joinUrlParts(c)},createResourcePathWithSymbols(a){return a?`/${this._joinUrlParts([this.resourcePath,a])}`:`/${this.resourcePath}`},_joinUrlParts:a=>a.join("/").replace(/\/{2,}/g,"/"),_getRequestOpts(a,b,c){var d;let e=(b.method||"GET").toUpperCase(),f=b.usage||[],g=b.urlParams||[],h=b.encode||(a=>a),i=!!b.fullPath,j=N(i?b.fullPath:b.path||""),k=i?b.fullPath:this.createResourcePathWithSymbols(b.path),l=[].slice.call(a),m=g.reduce((a,b)=>{let c=l.shift();if("string"!=typeof c)throw Error(`Stripe: Argument "${b}" must be a string, but got: ${c} (on API request to \`${e} ${k}\`)`);return a[b]=c,a},{}),n=h(Object.assign({},O(l),c)),o=P(l),p=o.host||b.host,q=!!b.streaming||!!o.streaming;if(l.filter(a=>null!=a).length)throw Error(`Stripe: Unknown arguments (${l}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${e} \`${k}\`)`);let r=i?j(m):this.createFullPath(j,m),s=Object.assign(o.headers,b.headers);b.validator&&b.validator(n,{headers:s});let t="GET"===b.method||"DELETE"===b.method;return{requestMethod:e,requestPath:r,bodyData:t?null:n,queryData:t?n:{},authenticator:null!=(d=o.authenticator)?d:null,headers:s,host:null!=p?p:null,streaming:q,settings:o.settings,usage:f}},_makeRequest(a,b,c){return new Promise((d,e)=>{var f;let g;try{g=this._getRequestOpts(a,b,c)}catch(a){e(a);return}let h=0===Object.keys(g.queryData).length,i=[g.requestPath,h?"":"?",M(g.queryData,W(g.requestPath))].join(""),{headers:j,settings:k}=g;this._stripe._requestSender._request(g.requestMethod,g.host,i,g.bodyData,g.authenticator,{headers:j,settings:k,streaming:g.streaming},g.usage,function(a,c){a?e(a):d(b.transformResponseData?b.transformResponseData(c):c)},null==(f=this.requestDataProcessor)?void 0:f.bind(this))})}};class aB{constructor(a=[]){this._segments=[...a]}get segments(){return[...this._segments]}push(a){if(!a)throw Error("Segment cannot be null or undefined");return new aB([...this._segments,a])}pop(){if(0===this._segments.length)throw Error("Cannot pop from an empty context");return new aB(this._segments.slice(0,-1))}toString(){return this._segments.join("/")}static parse(a){return new aB(a?a.split("/"):[])}}let aC="2025-11-17.clover";function aD(a,b){for(let c in b){if(!Object.prototype.hasOwnProperty.call(b,c))continue;let d=c[0].toLowerCase()+c.substring(1),e=new b[c](a);this[d]=e}}function aE(a,b){return function(a){return new aD(a,b)}}let aF=aA.method,aG=aA.extend({retrieve:aF({method:"GET",fullPath:"/v1/financial_connections/accounts/{account}"}),list:aF({method:"GET",fullPath:"/v1/financial_connections/accounts",methodType:"list"}),disconnect:aF({method:"POST",fullPath:"/v1/financial_connections/accounts/{account}/disconnect"}),listOwners:aF({method:"GET",fullPath:"/v1/financial_connections/accounts/{account}/owners",methodType:"list"}),refresh:aF({method:"POST",fullPath:"/v1/financial_connections/accounts/{account}/refresh"}),subscribe:aF({method:"POST",fullPath:"/v1/financial_connections/accounts/{account}/subscribe"}),unsubscribe:aF({method:"POST",fullPath:"/v1/financial_connections/accounts/{account}/unsubscribe"})}),aH=aA.method,aI=aA.extend({retrieve:aH({method:"GET",fullPath:"/v1/entitlements/active_entitlements/{id}"}),list:aH({method:"GET",fullPath:"/v1/entitlements/active_entitlements",methodType:"list"})}),aJ=aA.method,aK=aA.extend({create:aJ({method:"POST",fullPath:"/v1/billing/alerts"}),retrieve:aJ({method:"GET",fullPath:"/v1/billing/alerts/{id}"}),list:aJ({method:"GET",fullPath:"/v1/billing/alerts",methodType:"list"}),activate:aJ({method:"POST",fullPath:"/v1/billing/alerts/{id}/activate"}),archive:aJ({method:"POST",fullPath:"/v1/billing/alerts/{id}/archive"}),deactivate:aJ({method:"POST",fullPath:"/v1/billing/alerts/{id}/deactivate"})}),aL=aA.method,aM=aA.extend({find:aL({method:"GET",fullPath:"/v1/tax/associations/find"})}),aN=aA.method,aO=aA.extend({retrieve:aN({method:"GET",fullPath:"/v1/issuing/authorizations/{authorization}"}),update:aN({method:"POST",fullPath:"/v1/issuing/authorizations/{authorization}"}),list:aN({method:"GET",fullPath:"/v1/issuing/authorizations",methodType:"list"}),approve:aN({method:"POST",fullPath:"/v1/issuing/authorizations/{authorization}/approve"}),decline:aN({method:"POST",fullPath:"/v1/issuing/authorizations/{authorization}/decline"})}),aP=aA.method,aQ=aA.extend({create:aP({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations"}),capture:aP({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/capture"}),expire:aP({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/expire"}),finalizeAmount:aP({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount"}),increment:aP({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/increment"}),respond:aP({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond"}),reverse:aP({method:"POST",fullPath:"/v1/test_helpers/issuing/authorizations/{authorization}/reverse"})}),aR=aA.method,aS=aA.extend({create:aR({method:"POST",fullPath:"/v1/tax/calculations"}),retrieve:aR({method:"GET",fullPath:"/v1/tax/calculations/{calculation}"}),listLineItems:aR({method:"GET",fullPath:"/v1/tax/calculations/{calculation}/line_items",methodType:"list"})}),aT=aA.method,aU=aA.extend({create:aT({method:"POST",fullPath:"/v1/issuing/cardholders"}),retrieve:aT({method:"GET",fullPath:"/v1/issuing/cardholders/{cardholder}"}),update:aT({method:"POST",fullPath:"/v1/issuing/cardholders/{cardholder}"}),list:aT({method:"GET",fullPath:"/v1/issuing/cardholders",methodType:"list"})}),aV=aA.method,aW=aA.extend({create:aV({method:"POST",fullPath:"/v1/issuing/cards"}),retrieve:aV({method:"GET",fullPath:"/v1/issuing/cards/{card}"}),update:aV({method:"POST",fullPath:"/v1/issuing/cards/{card}"}),list:aV({method:"GET",fullPath:"/v1/issuing/cards",methodType:"list"})}),aX=aA.method,aY=aA.extend({deliverCard:aX({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/deliver"}),failCard:aX({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/fail"}),returnCard:aX({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/return"}),shipCard:aX({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/ship"}),submitCard:aX({method:"POST",fullPath:"/v1/test_helpers/issuing/cards/{card}/shipping/submit"})}),aZ=aA.method,a$=aA.extend({create:aZ({method:"POST",fullPath:"/v1/billing_portal/configurations"}),retrieve:aZ({method:"GET",fullPath:"/v1/billing_portal/configurations/{configuration}"}),update:aZ({method:"POST",fullPath:"/v1/billing_portal/configurations/{configuration}"}),list:aZ({method:"GET",fullPath:"/v1/billing_portal/configurations",methodType:"list"})}),a_=aA.method,a0=aA.extend({create:a_({method:"POST",fullPath:"/v1/terminal/configurations"}),retrieve:a_({method:"GET",fullPath:"/v1/terminal/configurations/{configuration}"}),update:a_({method:"POST",fullPath:"/v1/terminal/configurations/{configuration}"}),list:a_({method:"GET",fullPath:"/v1/terminal/configurations",methodType:"list"}),del:a_({method:"DELETE",fullPath:"/v1/terminal/configurations/{configuration}"})}),a1=aA.method,a2=aA.extend({create:a1({method:"POST",fullPath:"/v1/test_helpers/confirmation_tokens"})}),a3=aA.method,a4=aA.extend({create:a3({method:"POST",fullPath:"/v1/terminal/connection_tokens"})}),a5=aA.method,a6=aA.extend({retrieve:a5({method:"GET",fullPath:"/v1/billing/credit_balance_summary"})}),a7=aA.method,a8=aA.extend({retrieve:a7({method:"GET",fullPath:"/v1/billing/credit_balance_transactions/{id}"}),list:a7({method:"GET",fullPath:"/v1/billing/credit_balance_transactions",methodType:"list"})}),a9=aA.method,ba=aA.extend({create:a9({method:"POST",fullPath:"/v1/billing/credit_grants"}),retrieve:a9({method:"GET",fullPath:"/v1/billing/credit_grants/{id}"}),update:a9({method:"POST",fullPath:"/v1/billing/credit_grants/{id}"}),list:a9({method:"GET",fullPath:"/v1/billing/credit_grants",methodType:"list"}),expire:a9({method:"POST",fullPath:"/v1/billing/credit_grants/{id}/expire"}),voidGrant:a9({method:"POST",fullPath:"/v1/billing/credit_grants/{id}/void"})}),bb=aA.method,bc=aA.extend({create:bb({method:"POST",fullPath:"/v1/treasury/credit_reversals"}),retrieve:bb({method:"GET",fullPath:"/v1/treasury/credit_reversals/{credit_reversal}"}),list:bb({method:"GET",fullPath:"/v1/treasury/credit_reversals",methodType:"list"})}),bd=aA.method,be=aA.extend({fundCashBalance:bd({method:"POST",fullPath:"/v1/test_helpers/customers/{customer}/fund_cash_balance"})}),bf=aA.method,bg=aA.extend({create:bf({method:"POST",fullPath:"/v1/treasury/debit_reversals"}),retrieve:bf({method:"GET",fullPath:"/v1/treasury/debit_reversals/{debit_reversal}"}),list:bf({method:"GET",fullPath:"/v1/treasury/debit_reversals",methodType:"list"})}),bh=aA.method,bi=aA.extend({create:bh({method:"POST",fullPath:"/v1/issuing/disputes"}),retrieve:bh({method:"GET",fullPath:"/v1/issuing/disputes/{dispute}"}),update:bh({method:"POST",fullPath:"/v1/issuing/disputes/{dispute}"}),list:bh({method:"GET",fullPath:"/v1/issuing/disputes",methodType:"list"}),submit:bh({method:"POST",fullPath:"/v1/issuing/disputes/{dispute}/submit"})}),bj=aA.method,bk=aA.extend({retrieve:bj({method:"GET",fullPath:"/v1/radar/early_fraud_warnings/{early_fraud_warning}"}),list:bj({method:"GET",fullPath:"/v1/radar/early_fraud_warnings",methodType:"list"})}),bl=aA.method,bm=aA.extend({create:bl({method:"POST",fullPath:"/v2/core/event_destinations"}),retrieve:bl({method:"GET",fullPath:"/v2/core/event_destinations/{id}"}),update:bl({method:"POST",fullPath:"/v2/core/event_destinations/{id}"}),list:bl({method:"GET",fullPath:"/v2/core/event_destinations",methodType:"list"}),del:bl({method:"DELETE",fullPath:"/v2/core/event_destinations/{id}"}),disable:bl({method:"POST",fullPath:"/v2/core/event_destinations/{id}/disable"}),enable:bl({method:"POST",fullPath:"/v2/core/event_destinations/{id}/enable"}),ping:bl({method:"POST",fullPath:"/v2/core/event_destinations/{id}/ping"})}),bn=aA.method,bo=aA.extend({retrieve(...a){return bn({method:"GET",fullPath:"/v2/core/events/{id}",transformResponseData:a=>this.addFetchRelatedObjectIfNeeded(a)}).apply(this,a)},list(...a){return bn({method:"GET",fullPath:"/v2/core/events",methodType:"list",transformResponseData:a=>Object.assign(Object.assign({},a),{data:a.data.map(this.addFetchRelatedObjectIfNeeded.bind(this))})}).apply(this,a)},addFetchRelatedObjectIfNeeded(a){return a.related_object&&a.related_object.url?Object.assign(Object.assign({},a),{fetchRelatedObject:()=>bn({method:"GET",fullPath:a.related_object.url}).apply(this,[{stripeContext:a.context}])}):a}}),bp=aA.method,bq=aA.extend({create:bp({method:"POST",fullPath:"/v1/entitlements/features"}),retrieve:bp({method:"GET",fullPath:"/v1/entitlements/features/{id}"}),update:bp({method:"POST",fullPath:"/v1/entitlements/features/{id}"}),list:bp({method:"GET",fullPath:"/v1/entitlements/features",methodType:"list"})}),br=aA.method,bs=aA.extend({create:br({method:"POST",fullPath:"/v1/treasury/financial_accounts"}),retrieve:br({method:"GET",fullPath:"/v1/treasury/financial_accounts/{financial_account}"}),update:br({method:"POST",fullPath:"/v1/treasury/financial_accounts/{financial_account}"}),list:br({method:"GET",fullPath:"/v1/treasury/financial_accounts",methodType:"list"}),close:br({method:"POST",fullPath:"/v1/treasury/financial_accounts/{financial_account}/close"}),retrieveFeatures:br({method:"GET",fullPath:"/v1/treasury/financial_accounts/{financial_account}/features"}),updateFeatures:br({method:"POST",fullPath:"/v1/treasury/financial_accounts/{financial_account}/features"})}),bt=aA.method,bu=aA.extend({fail:bt({method:"POST",fullPath:"/v1/test_helpers/treasury/inbound_transfers/{id}/fail"}),returnInboundTransfer:bt({method:"POST",fullPath:"/v1/test_helpers/treasury/inbound_transfers/{id}/return"}),succeed:bt({method:"POST",fullPath:"/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"})}),bv=aA.method,bw=aA.extend({create:bv({method:"POST",fullPath:"/v1/treasury/inbound_transfers"}),retrieve:bv({method:"GET",fullPath:"/v1/treasury/inbound_transfers/{id}"}),list:bv({method:"GET",fullPath:"/v1/treasury/inbound_transfers",methodType:"list"}),cancel:bv({method:"POST",fullPath:"/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"})}),bx=aA.method,by=aA.extend({create:bx({method:"POST",fullPath:"/v1/terminal/locations"}),retrieve:bx({method:"GET",fullPath:"/v1/terminal/locations/{location}"}),update:bx({method:"POST",fullPath:"/v1/terminal/locations/{location}"}),list:bx({method:"GET",fullPath:"/v1/terminal/locations",methodType:"list"}),del:bx({method:"DELETE",fullPath:"/v1/terminal/locations/{location}"})}),bz=aA.method,bA=aA.extend({create:bz({method:"POST",fullPath:"/v1/billing/meter_event_adjustments"})}),bB=aA.method,bC=aA.extend({create:bB({method:"POST",fullPath:"/v2/billing/meter_event_adjustments"})}),bD=aA.method,bE=aA.extend({create:bD({method:"POST",fullPath:"/v2/billing/meter_event_session"})}),bF=aA.method,bG=aA.extend({create:bF({method:"POST",fullPath:"/v2/billing/meter_event_stream",host:"meter-events.stripe.com"})}),bH=aA.method,bI=aA.extend({create:bH({method:"POST",fullPath:"/v1/billing/meter_events"})}),bJ=aA.method,bK=aA.extend({create:bJ({method:"POST",fullPath:"/v2/billing/meter_events"})}),bL=aA.method,bM=aA.extend({create:bL({method:"POST",fullPath:"/v1/billing/meters"}),retrieve:bL({method:"GET",fullPath:"/v1/billing/meters/{id}"}),update:bL({method:"POST",fullPath:"/v1/billing/meters/{id}"}),list:bL({method:"GET",fullPath:"/v1/billing/meters",methodType:"list"}),deactivate:bL({method:"POST",fullPath:"/v1/billing/meters/{id}/deactivate"}),listEventSummaries:bL({method:"GET",fullPath:"/v1/billing/meters/{id}/event_summaries",methodType:"list"}),reactivate:bL({method:"POST",fullPath:"/v1/billing/meters/{id}/reactivate"})}),bN=aA.method,bO=aA.extend({create:bN({method:"POST",fullPath:"/v1/terminal/onboarding_links"})}),bP=aA.method,bQ=aA.extend({create:bP({method:"POST",fullPath:"/v1/climate/orders"}),retrieve:bP({method:"GET",fullPath:"/v1/climate/orders/{order}"}),update:bP({method:"POST",fullPath:"/v1/climate/orders/{order}"}),list:bP({method:"GET",fullPath:"/v1/climate/orders",methodType:"list"}),cancel:bP({method:"POST",fullPath:"/v1/climate/orders/{order}/cancel"})}),bR=aA.method,bS=aA.extend({update:bR({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_payments/{id}"}),fail:bR({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_payments/{id}/fail"}),post:bR({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_payments/{id}/post"}),returnOutboundPayment:bR({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_payments/{id}/return"})}),bT=aA.method,bU=aA.extend({create:bT({method:"POST",fullPath:"/v1/treasury/outbound_payments"}),retrieve:bT({method:"GET",fullPath:"/v1/treasury/outbound_payments/{id}"}),list:bT({method:"GET",fullPath:"/v1/treasury/outbound_payments",methodType:"list"}),cancel:bT({method:"POST",fullPath:"/v1/treasury/outbound_payments/{id}/cancel"})}),bV=aA.method,bW=aA.extend({update:bV({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}"}),fail:bV({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"}),post:bV({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"}),returnOutboundTransfer:bV({method:"POST",fullPath:"/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"})}),bX=aA.method,bY=aA.extend({create:bX({method:"POST",fullPath:"/v1/treasury/outbound_transfers"}),retrieve:bX({method:"GET",fullPath:"/v1/treasury/outbound_transfers/{outbound_transfer}"}),list:bX({method:"GET",fullPath:"/v1/treasury/outbound_transfers",methodType:"list"}),cancel:bX({method:"POST",fullPath:"/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"})}),bZ=aA.method,b$=aA.extend({create:bZ({method:"POST",fullPath:"/v1/issuing/personalization_designs"}),retrieve:bZ({method:"GET",fullPath:"/v1/issuing/personalization_designs/{personalization_design}"}),update:bZ({method:"POST",fullPath:"/v1/issuing/personalization_designs/{personalization_design}"}),list:bZ({method:"GET",fullPath:"/v1/issuing/personalization_designs",methodType:"list"})}),b_=aA.method,b0=aA.extend({activate:b_({method:"POST",fullPath:"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"}),deactivate:b_({method:"POST",fullPath:"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"}),reject:b_({method:"POST",fullPath:"/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"})}),b1=aA.method,b2=aA.extend({retrieve:b1({method:"GET",fullPath:"/v1/issuing/physical_bundles/{physical_bundle}"}),list:b1({method:"GET",fullPath:"/v1/issuing/physical_bundles",methodType:"list"})}),b3=aA.method,b4=aA.extend({retrieve:b3({method:"GET",fullPath:"/v1/climate/products/{product}"}),list:b3({method:"GET",fullPath:"/v1/climate/products",methodType:"list"})}),b5=aA.method,b6=aA.extend({create:b5({method:"POST",fullPath:"/v1/terminal/readers"}),retrieve:b5({method:"GET",fullPath:"/v1/terminal/readers/{reader}"}),update:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}"}),list:b5({method:"GET",fullPath:"/v1/terminal/readers",methodType:"list"}),del:b5({method:"DELETE",fullPath:"/v1/terminal/readers/{reader}"}),cancelAction:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}/cancel_action"}),collectInputs:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}/collect_inputs"}),collectPaymentMethod:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}/collect_payment_method"}),confirmPaymentIntent:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}/confirm_payment_intent"}),processPaymentIntent:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}/process_payment_intent"}),processSetupIntent:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}/process_setup_intent"}),refundPayment:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}/refund_payment"}),setReaderDisplay:b5({method:"POST",fullPath:"/v1/terminal/readers/{reader}/set_reader_display"})}),b7=aA.method,b8=aA.extend({presentPaymentMethod:b7({method:"POST",fullPath:"/v1/test_helpers/terminal/readers/{reader}/present_payment_method"}),succeedInputCollection:b7({method:"POST",fullPath:"/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection"}),timeoutInputCollection:b7({method:"POST",fullPath:"/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection"})}),b9=aA.method,ca=aA.extend({create:b9({method:"POST",fullPath:"/v1/test_helpers/treasury/received_credits"})}),cb=aA.method,cc=aA.extend({retrieve:cb({method:"GET",fullPath:"/v1/treasury/received_credits/{id}"}),list:cb({method:"GET",fullPath:"/v1/treasury/received_credits",methodType:"list"})}),cd=aA.method,ce=aA.extend({create:cd({method:"POST",fullPath:"/v1/test_helpers/treasury/received_debits"})}),cf=aA.method,cg=aA.extend({retrieve:cf({method:"GET",fullPath:"/v1/treasury/received_debits/{id}"}),list:cf({method:"GET",fullPath:"/v1/treasury/received_debits",methodType:"list"})}),ch=aA.method,ci=aA.extend({expire:ch({method:"POST",fullPath:"/v1/test_helpers/refunds/{refund}/expire"})}),cj=aA.method,ck=aA.extend({create:cj({method:"POST",fullPath:"/v1/tax/registrations"}),retrieve:cj({method:"GET",fullPath:"/v1/tax/registrations/{id}"}),update:cj({method:"POST",fullPath:"/v1/tax/registrations/{id}"}),list:cj({method:"GET",fullPath:"/v1/tax/registrations",methodType:"list"})}),cl=aA.method,cm=aA.extend({create:cl({method:"POST",fullPath:"/v1/reporting/report_runs"}),retrieve:cl({method:"GET",fullPath:"/v1/reporting/report_runs/{report_run}"}),list:cl({method:"GET",fullPath:"/v1/reporting/report_runs",methodType:"list"})}),cn=aA.method,co=aA.extend({retrieve:cn({method:"GET",fullPath:"/v1/reporting/report_types/{report_type}"}),list:cn({method:"GET",fullPath:"/v1/reporting/report_types",methodType:"list"})}),cp=aA.method,cq=aA.extend({create:cp({method:"POST",fullPath:"/v1/forwarding/requests"}),retrieve:cp({method:"GET",fullPath:"/v1/forwarding/requests/{id}"}),list:cp({method:"GET",fullPath:"/v1/forwarding/requests",methodType:"list"})}),cr=aA.method,cs=aA.extend({retrieve:cr({method:"GET",fullPath:"/v1/sigma/scheduled_query_runs/{scheduled_query_run}"}),list:cr({method:"GET",fullPath:"/v1/sigma/scheduled_query_runs",methodType:"list"})}),ct=aA.method,cu=aA.extend({create:ct({method:"POST",fullPath:"/v1/apps/secrets"}),list:ct({method:"GET",fullPath:"/v1/apps/secrets",methodType:"list"}),deleteWhere:ct({method:"POST",fullPath:"/v1/apps/secrets/delete"}),find:ct({method:"GET",fullPath:"/v1/apps/secrets/find"})}),cv=aA.method,cw=aA.extend({create:cv({method:"POST",fullPath:"/v1/billing_portal/sessions"})}),cx=aA.method,cy=aA.extend({create:cx({method:"POST",fullPath:"/v1/checkout/sessions"}),retrieve:cx({method:"GET",fullPath:"/v1/checkout/sessions/{session}"}),update:cx({method:"POST",fullPath:"/v1/checkout/sessions/{session}"}),list:cx({method:"GET",fullPath:"/v1/checkout/sessions",methodType:"list"}),expire:cx({method:"POST",fullPath:"/v1/checkout/sessions/{session}/expire"}),listLineItems:cx({method:"GET",fullPath:"/v1/checkout/sessions/{session}/line_items",methodType:"list"})}),cz=aA.method,cA=aA.extend({create:cz({method:"POST",fullPath:"/v1/financial_connections/sessions"}),retrieve:cz({method:"GET",fullPath:"/v1/financial_connections/sessions/{session}"})}),cB=aA.method,cC=aA.extend({retrieve:cB({method:"GET",fullPath:"/v1/tax/settings"}),update:cB({method:"POST",fullPath:"/v1/tax/settings"})}),cD=aA.method,cE=aA.extend({retrieve:cD({method:"GET",fullPath:"/v1/climate/suppliers/{supplier}"}),list:cD({method:"GET",fullPath:"/v1/climate/suppliers",methodType:"list"})}),cF=aA.method,cG=aA.extend({create:cF({method:"POST",fullPath:"/v1/test_helpers/test_clocks"}),retrieve:cF({method:"GET",fullPath:"/v1/test_helpers/test_clocks/{test_clock}"}),list:cF({method:"GET",fullPath:"/v1/test_helpers/test_clocks",methodType:"list"}),del:cF({method:"DELETE",fullPath:"/v1/test_helpers/test_clocks/{test_clock}"}),advance:cF({method:"POST",fullPath:"/v1/test_helpers/test_clocks/{test_clock}/advance"})}),cH=aA.method,cI=aA.extend({retrieve:cH({method:"GET",fullPath:"/v1/issuing/tokens/{token}"}),update:cH({method:"POST",fullPath:"/v1/issuing/tokens/{token}"}),list:cH({method:"GET",fullPath:"/v1/issuing/tokens",methodType:"list"})}),cJ=aA.method,cK=aA.extend({retrieve:cJ({method:"GET",fullPath:"/v1/treasury/transaction_entries/{id}"}),list:cJ({method:"GET",fullPath:"/v1/treasury/transaction_entries",methodType:"list"})}),cL=aA.method,cM=aA.extend({retrieve:cL({method:"GET",fullPath:"/v1/financial_connections/transactions/{transaction}"}),list:cL({method:"GET",fullPath:"/v1/financial_connections/transactions",methodType:"list"})}),cN=aA.method,cO=aA.extend({retrieve:cN({method:"GET",fullPath:"/v1/issuing/transactions/{transaction}"}),update:cN({method:"POST",fullPath:"/v1/issuing/transactions/{transaction}"}),list:cN({method:"GET",fullPath:"/v1/issuing/transactions",methodType:"list"})}),cP=aA.method,cQ=aA.extend({retrieve:cP({method:"GET",fullPath:"/v1/tax/transactions/{transaction}"}),createFromCalculation:cP({method:"POST",fullPath:"/v1/tax/transactions/create_from_calculation"}),createReversal:cP({method:"POST",fullPath:"/v1/tax/transactions/create_reversal"}),listLineItems:cP({method:"GET",fullPath:"/v1/tax/transactions/{transaction}/line_items",methodType:"list"})}),cR=aA.method,cS=aA.extend({createForceCapture:cR({method:"POST",fullPath:"/v1/test_helpers/issuing/transactions/create_force_capture"}),createUnlinkedRefund:cR({method:"POST",fullPath:"/v1/test_helpers/issuing/transactions/create_unlinked_refund"}),refund:cR({method:"POST",fullPath:"/v1/test_helpers/issuing/transactions/{transaction}/refund"})}),cT=aA.method,cU=aA.extend({retrieve:cT({method:"GET",fullPath:"/v1/treasury/transactions/{id}"}),list:cT({method:"GET",fullPath:"/v1/treasury/transactions",methodType:"list"})}),cV=aA.method,cW=aA.extend({create:cV({method:"POST",fullPath:"/v1/radar/value_list_items"}),retrieve:cV({method:"GET",fullPath:"/v1/radar/value_list_items/{item}"}),list:cV({method:"GET",fullPath:"/v1/radar/value_list_items",methodType:"list"}),del:cV({method:"DELETE",fullPath:"/v1/radar/value_list_items/{item}"})}),cX=aA.method,cY=aA.extend({create:cX({method:"POST",fullPath:"/v1/radar/value_lists"}),retrieve:cX({method:"GET",fullPath:"/v1/radar/value_lists/{value_list}"}),update:cX({method:"POST",fullPath:"/v1/radar/value_lists/{value_list}"}),list:cX({method:"GET",fullPath:"/v1/radar/value_lists",methodType:"list"}),del:cX({method:"DELETE",fullPath:"/v1/radar/value_lists/{value_list}"})}),cZ=aA.method,c$=aA.extend({retrieve:cZ({method:"GET",fullPath:"/v1/identity/verification_reports/{report}"}),list:cZ({method:"GET",fullPath:"/v1/identity/verification_reports",methodType:"list"})}),c_=aA.method,c0=aA.extend({create:c_({method:"POST",fullPath:"/v1/identity/verification_sessions"}),retrieve:c_({method:"GET",fullPath:"/v1/identity/verification_sessions/{session}"}),update:c_({method:"POST",fullPath:"/v1/identity/verification_sessions/{session}"}),list:c_({method:"GET",fullPath:"/v1/identity/verification_sessions",methodType:"list"}),cancel:c_({method:"POST",fullPath:"/v1/identity/verification_sessions/{session}/cancel"}),redact:c_({method:"POST",fullPath:"/v1/identity/verification_sessions/{session}/redact"})}),c1=aA.method,c2=aA.extend({create:c1({method:"POST",fullPath:"/v1/accounts"}),retrieve(a,...b){return"string"==typeof a?c1({method:"GET",fullPath:"/v1/accounts/{id}"}).apply(this,[a,...b]):(null==a&&[].shift.apply([a,...b]),c1({method:"GET",fullPath:"/v1/account"}).apply(this,[a,...b]))},update:c1({method:"POST",fullPath:"/v1/accounts/{account}"}),list:c1({method:"GET",fullPath:"/v1/accounts",methodType:"list"}),del:c1({method:"DELETE",fullPath:"/v1/accounts/{account}"}),createExternalAccount:c1({method:"POST",fullPath:"/v1/accounts/{account}/external_accounts"}),createLoginLink:c1({method:"POST",fullPath:"/v1/accounts/{account}/login_links"}),createPerson:c1({method:"POST",fullPath:"/v1/accounts/{account}/persons"}),deleteExternalAccount:c1({method:"DELETE",fullPath:"/v1/accounts/{account}/external_accounts/{id}"}),deletePerson:c1({method:"DELETE",fullPath:"/v1/accounts/{account}/persons/{person}"}),listCapabilities:c1({method:"GET",fullPath:"/v1/accounts/{account}/capabilities",methodType:"list"}),listExternalAccounts:c1({method:"GET",fullPath:"/v1/accounts/{account}/external_accounts",methodType:"list"}),listPersons:c1({method:"GET",fullPath:"/v1/accounts/{account}/persons",methodType:"list"}),reject:c1({method:"POST",fullPath:"/v1/accounts/{account}/reject"}),retrieveCurrent:c1({method:"GET",fullPath:"/v1/account"}),retrieveCapability:c1({method:"GET",fullPath:"/v1/accounts/{account}/capabilities/{capability}"}),retrieveExternalAccount:c1({method:"GET",fullPath:"/v1/accounts/{account}/external_accounts/{id}"}),retrievePerson:c1({method:"GET",fullPath:"/v1/accounts/{account}/persons/{person}"}),updateCapability:c1({method:"POST",fullPath:"/v1/accounts/{account}/capabilities/{capability}"}),updateExternalAccount:c1({method:"POST",fullPath:"/v1/accounts/{account}/external_accounts/{id}"}),updatePerson:c1({method:"POST",fullPath:"/v1/accounts/{account}/persons/{person}"})}),c3=aA.method,c4=aA.extend({create:c3({method:"POST",fullPath:"/v1/account_links"})}),c5=aA.method,c6=aA.extend({create:c5({method:"POST",fullPath:"/v1/account_sessions"})}),c7=aA.method,c8=aA.extend({create:c7({method:"POST",fullPath:"/v1/apple_pay/domains"}),retrieve:c7({method:"GET",fullPath:"/v1/apple_pay/domains/{domain}"}),list:c7({method:"GET",fullPath:"/v1/apple_pay/domains",methodType:"list"}),del:c7({method:"DELETE",fullPath:"/v1/apple_pay/domains/{domain}"})}),c9=aA.method,da=aA.extend({retrieve:c9({method:"GET",fullPath:"/v1/application_fees/{id}"}),list:c9({method:"GET",fullPath:"/v1/application_fees",methodType:"list"}),createRefund:c9({method:"POST",fullPath:"/v1/application_fees/{id}/refunds"}),listRefunds:c9({method:"GET",fullPath:"/v1/application_fees/{id}/refunds",methodType:"list"}),retrieveRefund:c9({method:"GET",fullPath:"/v1/application_fees/{fee}/refunds/{id}"}),updateRefund:c9({method:"POST",fullPath:"/v1/application_fees/{fee}/refunds/{id}"})}),db=aA.method,dc=aA.extend({retrieve:db({method:"GET",fullPath:"/v1/balance"})}),dd=aA.method,de=aA.extend({retrieve:dd({method:"GET",fullPath:"/v1/balance_settings"}),update:dd({method:"POST",fullPath:"/v1/balance_settings"})}),df=aA.method,dg=aA.extend({retrieve:df({method:"GET",fullPath:"/v1/balance_transactions/{id}"}),list:df({method:"GET",fullPath:"/v1/balance_transactions",methodType:"list"})}),dh=aA.method,di=aA.extend({create:dh({method:"POST",fullPath:"/v1/charges"}),retrieve:dh({method:"GET",fullPath:"/v1/charges/{charge}"}),update:dh({method:"POST",fullPath:"/v1/charges/{charge}"}),list:dh({method:"GET",fullPath:"/v1/charges",methodType:"list"}),capture:dh({method:"POST",fullPath:"/v1/charges/{charge}/capture"}),search:dh({method:"GET",fullPath:"/v1/charges/search",methodType:"search"})}),dj=aA.method,dk=aA.extend({retrieve:dj({method:"GET",fullPath:"/v1/confirmation_tokens/{confirmation_token}"})}),dl=aA.method,dm=aA.extend({retrieve:dl({method:"GET",fullPath:"/v1/country_specs/{country}"}),list:dl({method:"GET",fullPath:"/v1/country_specs",methodType:"list"})}),dn=aA.method,dp=aA.extend({create:dn({method:"POST",fullPath:"/v1/coupons"}),retrieve:dn({method:"GET",fullPath:"/v1/coupons/{coupon}"}),update:dn({method:"POST",fullPath:"/v1/coupons/{coupon}"}),list:dn({method:"GET",fullPath:"/v1/coupons",methodType:"list"}),del:dn({method:"DELETE",fullPath:"/v1/coupons/{coupon}"})}),dq=aA.method,dr=aA.extend({create:dq({method:"POST",fullPath:"/v1/credit_notes"}),retrieve:dq({method:"GET",fullPath:"/v1/credit_notes/{id}"}),update:dq({method:"POST",fullPath:"/v1/credit_notes/{id}"}),list:dq({method:"GET",fullPath:"/v1/credit_notes",methodType:"list"}),listLineItems:dq({method:"GET",fullPath:"/v1/credit_notes/{credit_note}/lines",methodType:"list"}),listPreviewLineItems:dq({method:"GET",fullPath:"/v1/credit_notes/preview/lines",methodType:"list"}),preview:dq({method:"GET",fullPath:"/v1/credit_notes/preview"}),voidCreditNote:dq({method:"POST",fullPath:"/v1/credit_notes/{id}/void"})}),ds=aA.method,dt=aA.extend({create:ds({method:"POST",fullPath:"/v1/customer_sessions"})}),du=aA.method,dv=aA.extend({create:du({method:"POST",fullPath:"/v1/customers"}),retrieve:du({method:"GET",fullPath:"/v1/customers/{customer}"}),update:du({method:"POST",fullPath:"/v1/customers/{customer}"}),list:du({method:"GET",fullPath:"/v1/customers",methodType:"list"}),del:du({method:"DELETE",fullPath:"/v1/customers/{customer}"}),createBalanceTransaction:du({method:"POST",fullPath:"/v1/customers/{customer}/balance_transactions"}),createFundingInstructions:du({method:"POST",fullPath:"/v1/customers/{customer}/funding_instructions"}),createSource:du({method:"POST",fullPath:"/v1/customers/{customer}/sources"}),createTaxId:du({method:"POST",fullPath:"/v1/customers/{customer}/tax_ids"}),deleteDiscount:du({method:"DELETE",fullPath:"/v1/customers/{customer}/discount"}),deleteSource:du({method:"DELETE",fullPath:"/v1/customers/{customer}/sources/{id}"}),deleteTaxId:du({method:"DELETE",fullPath:"/v1/customers/{customer}/tax_ids/{id}"}),listBalanceTransactions:du({method:"GET",fullPath:"/v1/customers/{customer}/balance_transactions",methodType:"list"}),listCashBalanceTransactions:du({method:"GET",fullPath:"/v1/customers/{customer}/cash_balance_transactions",methodType:"list"}),listPaymentMethods:du({method:"GET",fullPath:"/v1/customers/{customer}/payment_methods",methodType:"list"}),listSources:du({method:"GET",fullPath:"/v1/customers/{customer}/sources",methodType:"list"}),listTaxIds:du({method:"GET",fullPath:"/v1/customers/{customer}/tax_ids",methodType:"list"}),retrieveBalanceTransaction:du({method:"GET",fullPath:"/v1/customers/{customer}/balance_transactions/{transaction}"}),retrieveCashBalance:du({method:"GET",fullPath:"/v1/customers/{customer}/cash_balance"}),retrieveCashBalanceTransaction:du({method:"GET",fullPath:"/v1/customers/{customer}/cash_balance_transactions/{transaction}"}),retrievePaymentMethod:du({method:"GET",fullPath:"/v1/customers/{customer}/payment_methods/{payment_method}"}),retrieveSource:du({method:"GET",fullPath:"/v1/customers/{customer}/sources/{id}"}),retrieveTaxId:du({method:"GET",fullPath:"/v1/customers/{customer}/tax_ids/{id}"}),search:du({method:"GET",fullPath:"/v1/customers/search",methodType:"search"}),updateBalanceTransaction:du({method:"POST",fullPath:"/v1/customers/{customer}/balance_transactions/{transaction}"}),updateCashBalance:du({method:"POST",fullPath:"/v1/customers/{customer}/cash_balance"}),updateSource:du({method:"POST",fullPath:"/v1/customers/{customer}/sources/{id}"}),verifySource:du({method:"POST",fullPath:"/v1/customers/{customer}/sources/{id}/verify"})}),dw=aA.method,dx=aA.extend({retrieve:dw({method:"GET",fullPath:"/v1/disputes/{dispute}"}),update:dw({method:"POST",fullPath:"/v1/disputes/{dispute}"}),list:dw({method:"GET",fullPath:"/v1/disputes",methodType:"list"}),close:dw({method:"POST",fullPath:"/v1/disputes/{dispute}/close"})}),dy=aA.method,dz=aA.extend({create:dy({method:"POST",fullPath:"/v1/ephemeral_keys",validator:(a,b)=>{if(!b.headers||!b.headers["Stripe-Version"])throw Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node")}}),del:dy({method:"DELETE",fullPath:"/v1/ephemeral_keys/{key}"})}),dA=aA.method,dB=aA.extend({retrieve:dA({method:"GET",fullPath:"/v1/events/{id}"}),list:dA({method:"GET",fullPath:"/v1/events",methodType:"list"})}),dC=aA.method,dD=aA.extend({retrieve:dC({method:"GET",fullPath:"/v1/exchange_rates/{rate_id}"}),list:dC({method:"GET",fullPath:"/v1/exchange_rates",methodType:"list"})}),dE=aA.method,dF=aA.extend({create:dE({method:"POST",fullPath:"/v1/file_links"}),retrieve:dE({method:"GET",fullPath:"/v1/file_links/{link}"}),update:dE({method:"POST",fullPath:"/v1/file_links/{link}"}),list:dE({method:"GET",fullPath:"/v1/file_links",methodType:"list"})}),dG=aA.method,dH=aA.extend({create:dG({method:"POST",fullPath:"/v1/files",headers:{"Content-Type":"multipart/form-data"},host:"files.stripe.com"}),retrieve:dG({method:"GET",fullPath:"/v1/files/{file}"}),list:dG({method:"GET",fullPath:"/v1/files",methodType:"list"}),requestDataProcessor:function(a,b,c,d){if(b=b||{},"POST"!==a)return d(null,M(b));this._stripe._platformFunctions.tryBufferData(b).then(a=>d(null,((a,b,c)=>{let d,e,f=(Math.round(1e16*Math.random())+Math.round(1e16*Math.random())).toString();c["Content-Type"]=`multipart/form-data; boundary=${f}`;let g=new TextEncoder,h=new Uint8Array(0),i=g.encode("\r\n");function j(a){let b=h,c=a instanceof Uint8Array?a:new Uint8Array(g.encode(a));(h=new Uint8Array(b.length+c.length+2)).set(b),h.set(c,b.length),h.set(i,h.length-2)}function k(a){return`"${a.replace(/"|"/g,"%22").replace(/\r\n|\r|\n/g," ")}"`}let l=(d={},(e=(a,b)=>{Object.entries(a).forEach(([a,c])=>{let f,g=b?`${b}[${a}]`:a;if(("function"==(f=typeof c)||"object"===f)&&c){if(!(c instanceof Uint8Array)&&!Object.prototype.hasOwnProperty.call(c,"data"))return e(c,g);d[g]=c}else d[g]=String(c)})})(b,null),d);for(let a in l){if(!Object.prototype.hasOwnProperty.call(l,a))continue;let b=l[a];j(`--${f}`),Object.prototype.hasOwnProperty.call(b,"data")?(j(`Content-Disposition: form-data; name=${k(a)}; filename=${k(b.name||"blob")}`),j(`Content-Type: ${b.type||"application/octet-stream"}`),j(""),j(b.data)):(j(`Content-Disposition: form-data; name=${k(a)}`),j(""),j(b))}return j(`--${f}--`),h})(0,a,c))).catch(a=>d(a,null))}}),dI=aA.method,dJ=aA.extend({create:dI({method:"POST",fullPath:"/v1/invoiceitems"}),retrieve:dI({method:"GET",fullPath:"/v1/invoiceitems/{invoiceitem}"}),update:dI({method:"POST",fullPath:"/v1/invoiceitems/{invoiceitem}"}),list:dI({method:"GET",fullPath:"/v1/invoiceitems",methodType:"list"}),del:dI({method:"DELETE",fullPath:"/v1/invoiceitems/{invoiceitem}"})}),dK=aA.method,dL=aA.extend({retrieve:dK({method:"GET",fullPath:"/v1/invoice_payments/{invoice_payment}"}),list:dK({method:"GET",fullPath:"/v1/invoice_payments",methodType:"list"})}),dM=aA.method,dN=aA.extend({retrieve:dM({method:"GET",fullPath:"/v1/invoice_rendering_templates/{template}"}),list:dM({method:"GET",fullPath:"/v1/invoice_rendering_templates",methodType:"list"}),archive:dM({method:"POST",fullPath:"/v1/invoice_rendering_templates/{template}/archive"}),unarchive:dM({method:"POST",fullPath:"/v1/invoice_rendering_templates/{template}/unarchive"})}),dO=aA.method,dP=aA.extend({create:dO({method:"POST",fullPath:"/v1/invoices"}),retrieve:dO({method:"GET",fullPath:"/v1/invoices/{invoice}"}),update:dO({method:"POST",fullPath:"/v1/invoices/{invoice}"}),list:dO({method:"GET",fullPath:"/v1/invoices",methodType:"list"}),del:dO({method:"DELETE",fullPath:"/v1/invoices/{invoice}"}),addLines:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/add_lines"}),attachPayment:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/attach_payment"}),createPreview:dO({method:"POST",fullPath:"/v1/invoices/create_preview"}),finalizeInvoice:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/finalize"}),listLineItems:dO({method:"GET",fullPath:"/v1/invoices/{invoice}/lines",methodType:"list"}),markUncollectible:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/mark_uncollectible"}),pay:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/pay"}),removeLines:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/remove_lines"}),search:dO({method:"GET",fullPath:"/v1/invoices/search",methodType:"search"}),sendInvoice:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/send"}),updateLines:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/update_lines"}),updateLineItem:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/lines/{line_item_id}"}),voidInvoice:dO({method:"POST",fullPath:"/v1/invoices/{invoice}/void"})}),dQ=aA.method,dR=aA.extend({retrieve:dQ({method:"GET",fullPath:"/v1/mandates/{mandate}"})}),dS=aA.method,dT="connect.stripe.com",dU=aA.extend({basePath:"/",authorizeUrl(a,b){a=a||{};let c="oauth/authorize";return(b=b||{}).express&&(c=`express/${c}`),a.response_type||(a.response_type="code"),a.client_id||(a.client_id=this._stripe.getClientId()),a.scope||(a.scope="read_write"),`https://${dT}/${c}?${M(a)}`},token:dS({method:"POST",path:"oauth/token",host:dT}),deauthorize(a,...b){return a.client_id||(a.client_id=this._stripe.getClientId()),dS({method:"POST",path:"oauth/deauthorize",host:dT}).apply(this,[a,...b])}}),dV=aA.method,dW=aA.extend({retrieve:dV({method:"GET",fullPath:"/v1/payment_attempt_records/{id}"}),list:dV({method:"GET",fullPath:"/v1/payment_attempt_records",methodType:"list"})}),dX=aA.method,dY=aA.extend({create:dX({method:"POST",fullPath:"/v1/payment_intents"}),retrieve:dX({method:"GET",fullPath:"/v1/payment_intents/{intent}"}),update:dX({method:"POST",fullPath:"/v1/payment_intents/{intent}"}),list:dX({method:"GET",fullPath:"/v1/payment_intents",methodType:"list"}),applyCustomerBalance:dX({method:"POST",fullPath:"/v1/payment_intents/{intent}/apply_customer_balance"}),cancel:dX({method:"POST",fullPath:"/v1/payment_intents/{intent}/cancel"}),capture:dX({method:"POST",fullPath:"/v1/payment_intents/{intent}/capture"}),confirm:dX({method:"POST",fullPath:"/v1/payment_intents/{intent}/confirm"}),incrementAuthorization:dX({method:"POST",fullPath:"/v1/payment_intents/{intent}/increment_authorization"}),listAmountDetailsLineItems:dX({method:"GET",fullPath:"/v1/payment_intents/{intent}/amount_details_line_items",methodType:"list"}),search:dX({method:"GET",fullPath:"/v1/payment_intents/search",methodType:"search"}),verifyMicrodeposits:dX({method:"POST",fullPath:"/v1/payment_intents/{intent}/verify_microdeposits"})}),dZ=aA.method,d$=aA.extend({create:dZ({method:"POST",fullPath:"/v1/payment_links"}),retrieve:dZ({method:"GET",fullPath:"/v1/payment_links/{payment_link}"}),update:dZ({method:"POST",fullPath:"/v1/payment_links/{payment_link}"}),list:dZ({method:"GET",fullPath:"/v1/payment_links",methodType:"list"}),listLineItems:dZ({method:"GET",fullPath:"/v1/payment_links/{payment_link}/line_items",methodType:"list"})}),d_=aA.method,d0=aA.extend({create:d_({method:"POST",fullPath:"/v1/payment_method_configurations"}),retrieve:d_({method:"GET",fullPath:"/v1/payment_method_configurations/{configuration}"}),update:d_({method:"POST",fullPath:"/v1/payment_method_configurations/{configuration}"}),list:d_({method:"GET",fullPath:"/v1/payment_method_configurations",methodType:"list"})}),d1=aA.method,d2=aA.extend({create:d1({method:"POST",fullPath:"/v1/payment_method_domains"}),retrieve:d1({method:"GET",fullPath:"/v1/payment_method_domains/{payment_method_domain}"}),update:d1({method:"POST",fullPath:"/v1/payment_method_domains/{payment_method_domain}"}),list:d1({method:"GET",fullPath:"/v1/payment_method_domains",methodType:"list"}),validate:d1({method:"POST",fullPath:"/v1/payment_method_domains/{payment_method_domain}/validate"})}),d3=aA.method,d4=aA.extend({create:d3({method:"POST",fullPath:"/v1/payment_methods"}),retrieve:d3({method:"GET",fullPath:"/v1/payment_methods/{payment_method}"}),update:d3({method:"POST",fullPath:"/v1/payment_methods/{payment_method}"}),list:d3({method:"GET",fullPath:"/v1/payment_methods",methodType:"list"}),attach:d3({method:"POST",fullPath:"/v1/payment_methods/{payment_method}/attach"}),detach:d3({method:"POST",fullPath:"/v1/payment_methods/{payment_method}/detach"})}),d5=aA.method,d6=aA.extend({retrieve:d5({method:"GET",fullPath:"/v1/payment_records/{id}"}),reportPayment:d5({method:"POST",fullPath:"/v1/payment_records/report_payment"}),reportPaymentAttempt:d5({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt"}),reportPaymentAttemptCanceled:d5({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt_canceled"}),reportPaymentAttemptFailed:d5({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt_failed"}),reportPaymentAttemptGuaranteed:d5({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt_guaranteed"}),reportPaymentAttemptInformational:d5({method:"POST",fullPath:"/v1/payment_records/{id}/report_payment_attempt_informational"}),reportRefund:d5({method:"POST",fullPath:"/v1/payment_records/{id}/report_refund"})}),d7=aA.method,d8=aA.extend({create:d7({method:"POST",fullPath:"/v1/payouts"}),retrieve:d7({method:"GET",fullPath:"/v1/payouts/{payout}"}),update:d7({method:"POST",fullPath:"/v1/payouts/{payout}"}),list:d7({method:"GET",fullPath:"/v1/payouts",methodType:"list"}),cancel:d7({method:"POST",fullPath:"/v1/payouts/{payout}/cancel"}),reverse:d7({method:"POST",fullPath:"/v1/payouts/{payout}/reverse"})}),d9=aA.method,ea=aA.extend({create:d9({method:"POST",fullPath:"/v1/plans"}),retrieve:d9({method:"GET",fullPath:"/v1/plans/{plan}"}),update:d9({method:"POST",fullPath:"/v1/plans/{plan}"}),list:d9({method:"GET",fullPath:"/v1/plans",methodType:"list"}),del:d9({method:"DELETE",fullPath:"/v1/plans/{plan}"})}),eb=aA.method,ec=aA.extend({create:eb({method:"POST",fullPath:"/v1/prices"}),retrieve:eb({method:"GET",fullPath:"/v1/prices/{price}"}),update:eb({method:"POST",fullPath:"/v1/prices/{price}"}),list:eb({method:"GET",fullPath:"/v1/prices",methodType:"list"}),search:eb({method:"GET",fullPath:"/v1/prices/search",methodType:"search"})}),ed=aA.method,ee=aA.extend({create:ed({method:"POST",fullPath:"/v1/products"}),retrieve:ed({method:"GET",fullPath:"/v1/products/{id}"}),update:ed({method:"POST",fullPath:"/v1/products/{id}"}),list:ed({method:"GET",fullPath:"/v1/products",methodType:"list"}),del:ed({method:"DELETE",fullPath:"/v1/products/{id}"}),createFeature:ed({method:"POST",fullPath:"/v1/products/{product}/features"}),deleteFeature:ed({method:"DELETE",fullPath:"/v1/products/{product}/features/{id}"}),listFeatures:ed({method:"GET",fullPath:"/v1/products/{product}/features",methodType:"list"}),retrieveFeature:ed({method:"GET",fullPath:"/v1/products/{product}/features/{id}"}),search:ed({method:"GET",fullPath:"/v1/products/search",methodType:"search"})}),ef=aA.method,eg=aA.extend({create:ef({method:"POST",fullPath:"/v1/promotion_codes"}),retrieve:ef({method:"GET",fullPath:"/v1/promotion_codes/{promotion_code}"}),update:ef({method:"POST",fullPath:"/v1/promotion_codes/{promotion_code}"}),list:ef({method:"GET",fullPath:"/v1/promotion_codes",methodType:"list"})}),eh=aA.method,ei=aA.extend({create:eh({method:"POST",fullPath:"/v1/quotes"}),retrieve:eh({method:"GET",fullPath:"/v1/quotes/{quote}"}),update:eh({method:"POST",fullPath:"/v1/quotes/{quote}"}),list:eh({method:"GET",fullPath:"/v1/quotes",methodType:"list"}),accept:eh({method:"POST",fullPath:"/v1/quotes/{quote}/accept"}),cancel:eh({method:"POST",fullPath:"/v1/quotes/{quote}/cancel"}),finalizeQuote:eh({method:"POST",fullPath:"/v1/quotes/{quote}/finalize"}),listComputedUpfrontLineItems:eh({method:"GET",fullPath:"/v1/quotes/{quote}/computed_upfront_line_items",methodType:"list"}),listLineItems:eh({method:"GET",fullPath:"/v1/quotes/{quote}/line_items",methodType:"list"}),pdf:eh({method:"GET",fullPath:"/v1/quotes/{quote}/pdf",host:"files.stripe.com",streaming:!0})}),ej=aA.method,ek=aA.extend({create:ej({method:"POST",fullPath:"/v1/refunds"}),retrieve:ej({method:"GET",fullPath:"/v1/refunds/{refund}"}),update:ej({method:"POST",fullPath:"/v1/refunds/{refund}"}),list:ej({method:"GET",fullPath:"/v1/refunds",methodType:"list"}),cancel:ej({method:"POST",fullPath:"/v1/refunds/{refund}/cancel"})}),el=aA.method,em=aA.extend({retrieve:el({method:"GET",fullPath:"/v1/reviews/{review}"}),list:el({method:"GET",fullPath:"/v1/reviews",methodType:"list"}),approve:el({method:"POST",fullPath:"/v1/reviews/{review}/approve"})}),en=aA.method,eo=aA.extend({list:en({method:"GET",fullPath:"/v1/setup_attempts",methodType:"list"})}),ep=aA.method,eq=aA.extend({create:ep({method:"POST",fullPath:"/v1/setup_intents"}),retrieve:ep({method:"GET",fullPath:"/v1/setup_intents/{intent}"}),update:ep({method:"POST",fullPath:"/v1/setup_intents/{intent}"}),list:ep({method:"GET",fullPath:"/v1/setup_intents",methodType:"list"}),cancel:ep({method:"POST",fullPath:"/v1/setup_intents/{intent}/cancel"}),confirm:ep({method:"POST",fullPath:"/v1/setup_intents/{intent}/confirm"}),verifyMicrodeposits:ep({method:"POST",fullPath:"/v1/setup_intents/{intent}/verify_microdeposits"})}),er=aA.method,es=aA.extend({create:er({method:"POST",fullPath:"/v1/shipping_rates"}),retrieve:er({method:"GET",fullPath:"/v1/shipping_rates/{shipping_rate_token}"}),update:er({method:"POST",fullPath:"/v1/shipping_rates/{shipping_rate_token}"}),list:er({method:"GET",fullPath:"/v1/shipping_rates",methodType:"list"})}),et=aA.method,eu=aA.extend({create:et({method:"POST",fullPath:"/v1/sources"}),retrieve:et({method:"GET",fullPath:"/v1/sources/{source}"}),update:et({method:"POST",fullPath:"/v1/sources/{source}"}),listSourceTransactions:et({method:"GET",fullPath:"/v1/sources/{source}/source_transactions",methodType:"list"}),verify:et({method:"POST",fullPath:"/v1/sources/{source}/verify"})}),ev=aA.method,ew=aA.extend({create:ev({method:"POST",fullPath:"/v1/subscription_items"}),retrieve:ev({method:"GET",fullPath:"/v1/subscription_items/{item}"}),update:ev({method:"POST",fullPath:"/v1/subscription_items/{item}"}),list:ev({method:"GET",fullPath:"/v1/subscription_items",methodType:"list"}),del:ev({method:"DELETE",fullPath:"/v1/subscription_items/{item}"})}),ex=aA.method,ey=aA.extend({create:ex({method:"POST",fullPath:"/v1/subscription_schedules"}),retrieve:ex({method:"GET",fullPath:"/v1/subscription_schedules/{schedule}"}),update:ex({method:"POST",fullPath:"/v1/subscription_schedules/{schedule}"}),list:ex({method:"GET",fullPath:"/v1/subscription_schedules",methodType:"list"}),cancel:ex({method:"POST",fullPath:"/v1/subscription_schedules/{schedule}/cancel"}),release:ex({method:"POST",fullPath:"/v1/subscription_schedules/{schedule}/release"})}),ez=aA.method,eA=aA.extend({create:ez({method:"POST",fullPath:"/v1/subscriptions"}),retrieve:ez({method:"GET",fullPath:"/v1/subscriptions/{subscription_exposed_id}"}),update:ez({method:"POST",fullPath:"/v1/subscriptions/{subscription_exposed_id}"}),list:ez({method:"GET",fullPath:"/v1/subscriptions",methodType:"list"}),cancel:ez({method:"DELETE",fullPath:"/v1/subscriptions/{subscription_exposed_id}"}),deleteDiscount:ez({method:"DELETE",fullPath:"/v1/subscriptions/{subscription_exposed_id}/discount"}),migrate:ez({method:"POST",fullPath:"/v1/subscriptions/{subscription}/migrate"}),resume:ez({method:"POST",fullPath:"/v1/subscriptions/{subscription}/resume"}),search:ez({method:"GET",fullPath:"/v1/subscriptions/search",methodType:"search"})}),eB=aA.method,eC=aA.extend({retrieve:eB({method:"GET",fullPath:"/v1/tax_codes/{id}"}),list:eB({method:"GET",fullPath:"/v1/tax_codes",methodType:"list"})}),eD=aA.method,eE=aA.extend({create:eD({method:"POST",fullPath:"/v1/tax_ids"}),retrieve:eD({method:"GET",fullPath:"/v1/tax_ids/{id}"}),list:eD({method:"GET",fullPath:"/v1/tax_ids",methodType:"list"}),del:eD({method:"DELETE",fullPath:"/v1/tax_ids/{id}"})}),eF=aA.method,eG=aA.extend({create:eF({method:"POST",fullPath:"/v1/tax_rates"}),retrieve:eF({method:"GET",fullPath:"/v1/tax_rates/{tax_rate}"}),update:eF({method:"POST",fullPath:"/v1/tax_rates/{tax_rate}"}),list:eF({method:"GET",fullPath:"/v1/tax_rates",methodType:"list"})}),eH=aA.method,eI=aA.extend({create:eH({method:"POST",fullPath:"/v1/tokens"}),retrieve:eH({method:"GET",fullPath:"/v1/tokens/{token}"})}),eJ=aA.method,eK=aA.extend({create:eJ({method:"POST",fullPath:"/v1/topups"}),retrieve:eJ({method:"GET",fullPath:"/v1/topups/{topup}"}),update:eJ({method:"POST",fullPath:"/v1/topups/{topup}"}),list:eJ({method:"GET",fullPath:"/v1/topups",methodType:"list"}),cancel:eJ({method:"POST",fullPath:"/v1/topups/{topup}/cancel"})}),eL=aA.method,eM=aA.extend({create:eL({method:"POST",fullPath:"/v1/transfers"}),retrieve:eL({method:"GET",fullPath:"/v1/transfers/{transfer}"}),update:eL({method:"POST",fullPath:"/v1/transfers/{transfer}"}),list:eL({method:"GET",fullPath:"/v1/transfers",methodType:"list"}),createReversal:eL({method:"POST",fullPath:"/v1/transfers/{id}/reversals"}),listReversals:eL({method:"GET",fullPath:"/v1/transfers/{id}/reversals",methodType:"list"}),retrieveReversal:eL({method:"GET",fullPath:"/v1/transfers/{transfer}/reversals/{id}"}),updateReversal:eL({method:"POST",fullPath:"/v1/transfers/{transfer}/reversals/{id}"})}),eN=aA.method,eO=aA.extend({create:eN({method:"POST",fullPath:"/v1/webhook_endpoints"}),retrieve:eN({method:"GET",fullPath:"/v1/webhook_endpoints/{webhook_endpoint}"}),update:eN({method:"POST",fullPath:"/v1/webhook_endpoints/{webhook_endpoint}"}),list:eN({method:"GET",fullPath:"/v1/webhook_endpoints",methodType:"list"}),del:eN({method:"DELETE",fullPath:"/v1/webhook_endpoints/{webhook_endpoint}"})}),eP=aE("apps",{Secrets:cu}),eQ=aE("billing",{Alerts:aK,CreditBalanceSummary:a6,CreditBalanceTransactions:a8,CreditGrants:ba,MeterEventAdjustments:bA,MeterEvents:bI,Meters:bM}),eR=aE("billingPortal",{Configurations:a$,Sessions:cw}),eS=aE("checkout",{Sessions:cy}),eT=aE("climate",{Orders:bQ,Products:b4,Suppliers:cE}),eU=aE("entitlements",{ActiveEntitlements:aI,Features:bq}),eV=aE("financialConnections",{Accounts:aG,Sessions:cA,Transactions:cM}),eW=aE("forwarding",{Requests:cq}),eX=aE("identity",{VerificationReports:c$,VerificationSessions:c0}),eY=aE("issuing",{Authorizations:aO,Cardholders:aU,Cards:aW,Disputes:bi,PersonalizationDesigns:b$,PhysicalBundles:b2,Tokens:cI,Transactions:cO}),eZ=aE("radar",{EarlyFraudWarnings:bk,ValueListItems:cW,ValueLists:cY}),e$=aE("reporting",{ReportRuns:cm,ReportTypes:co}),e_=aE("sigma",{ScheduledQueryRuns:cs}),e0=aE("tax",{Associations:aM,Calculations:aS,Registrations:ck,Settings:cC,Transactions:cQ}),e1=aE("terminal",{Configurations:a0,ConnectionTokens:a4,Locations:by,OnboardingLinks:bO,Readers:b6}),e2=aE("testHelpers",{ConfirmationTokens:a2,Customers:be,Refunds:ci,TestClocks:cG,Issuing:aE("issuing",{Authorizations:aQ,Cards:aY,PersonalizationDesigns:b0,Transactions:cS}),Terminal:aE("terminal",{Readers:b8}),Treasury:aE("treasury",{InboundTransfers:bu,OutboundPayments:bS,OutboundTransfers:bW,ReceivedCredits:ca,ReceivedDebits:ce})}),e3=aE("treasury",{CreditReversals:bc,DebitReversals:bg,FinancialAccounts:bs,InboundTransfers:bw,OutboundPayments:bU,OutboundTransfers:bY,ReceivedCredits:cc,ReceivedDebits:cg,TransactionEntries:cK,Transactions:cU}),e4=aE("v2",{Billing:aE("billing",{MeterEventAdjustments:bC,MeterEventSession:bE,MeterEventStream:bG,MeterEvents:bK}),Core:aE("core",{EventDestinations:bm,Events:bo})});a.s(["Apps",0,eP,"Billing",0,eQ,"BillingPortal",0,eR,"Checkout",0,eS,"Climate",0,eT,"Entitlements",0,eU,"FinancialConnections",0,eV,"Forwarding",0,eW,"Identity",0,eX,"Issuing",0,eY,"Radar",0,eZ,"Reporting",0,e$,"Sigma",0,e_,"Tax",0,e0,"Terminal",0,e1,"TestHelpers",0,e2,"Treasury",0,e3,"V2",0,e4],87301),a.i(87301),a.s(["Account",0,c2,"AccountLinks",0,c4,"AccountSessions",0,c6,"Accounts",0,c2,"ApplePayDomains",0,c8,"ApplicationFees",0,da,"Apps",0,eP,"Balance",0,dc,"BalanceSettings",0,de,"BalanceTransactions",0,dg,"Billing",0,eQ,"BillingPortal",0,eR,"Charges",0,di,"Checkout",0,eS,"Climate",0,eT,"ConfirmationTokens",0,dk,"CountrySpecs",0,dm,"Coupons",0,dp,"CreditNotes",0,dr,"CustomerSessions",0,dt,"Customers",0,dv,"Disputes",0,dx,"Entitlements",0,eU,"EphemeralKeys",0,dz,"Events",0,dB,"ExchangeRates",0,dD,"FileLinks",0,dF,"Files",0,dH,"FinancialConnections",0,eV,"Forwarding",0,eW,"Identity",0,eX,"InvoiceItems",0,dJ,"InvoicePayments",0,dL,"InvoiceRenderingTemplates",0,dN,"Invoices",0,dP,"Issuing",0,eY,"Mandates",0,dR,"OAuth",0,dU,"PaymentAttemptRecords",0,dW,"PaymentIntents",0,dY,"PaymentLinks",0,d$,"PaymentMethodConfigurations",0,d0,"PaymentMethodDomains",0,d2,"PaymentMethods",0,d4,"PaymentRecords",0,d6,"Payouts",0,d8,"Plans",0,ea,"Prices",0,ec,"Products",0,ee,"PromotionCodes",0,eg,"Quotes",0,ei,"Radar",0,eZ,"Refunds",0,ek,"Reporting",0,e$,"Reviews",0,em,"SetupAttempts",0,eo,"SetupIntents",0,eq,"ShippingRates",0,es,"Sigma",0,e_,"Sources",0,eu,"SubscriptionItems",0,ew,"SubscriptionSchedules",0,ey,"Subscriptions",0,eA,"Tax",0,e0,"TaxCodes",0,eC,"TaxIds",0,eE,"TaxRates",0,eG,"Terminal",0,e1,"TestHelpers",0,e2,"Tokens",0,eI,"Topups",0,eK,"Transfers",0,eM,"Treasury",0,e3,"V2",0,e4,"WebhookEndpoints",0,eO],62168);var e5=a.i(62168);let e6="api.stripe.com",e7="/v1/",e8=["name","version","url","partner_id"],e9=["authenticator","apiVersion","typescript","maxNetworkRetries","httpAgent","httpClient","timeout","host","port","protocol","telemetry","appInfo","stripeAccount","stripeContext"];!function(a,b=a=>new at(a,aA.MAX_BUFFERED_REQUEST_METRICS)){function c(d,e={}){if(!(this instanceof c))return new c(d,e);let f=this._getPropsFromConfig(e);this._platformFunctions=a,Object.defineProperty(this,"_emitter",{value:this._platformFunctions.createEmitter(),enumerable:!1,configurable:!1,writable:!1}),this.VERSION=c.PACKAGE_VERSION,this.on=this._emitter.on.bind(this._emitter),this.once=this._emitter.once.bind(this._emitter),this.off=this._emitter.removeListener.bind(this._emitter);let g=f.httpAgent||null;this._api={host:f.host||e6,port:f.port||"443",protocol:f.protocol||"https",basePath:e7,version:f.apiVersion||aC,timeout:T("timeout",f.timeout,8e4),maxNetworkRetries:T("maxNetworkRetries",f.maxNetworkRetries,2),agent:g,httpClient:f.httpClient||(g?this._platformFunctions.createNodeHttpClient(g):this._platformFunctions.createDefaultHttpClient()),dev:!1,stripeAccount:f.stripeAccount||null,stripeContext:f.stripeContext||null};let h=f.typescript||!1;h!==c.USER_AGENT.typescript&&(c.USER_AGENT.typescript=h),f.appInfo&&this._setAppInfo(f.appInfo),this._prepResources(),this._setAuthenticator(d,f.authenticator),this.errors=as,this.webhooks=c.webhooks,this._prevRequestMetrics=[],this._enableTelemetry=!1!==f.telemetry,this._requestSender=b(this),this.StripeResource=c.StripeResource}c.PACKAGE_VERSION="20.0.0",c.API_VERSION=aC,c.USER_AGENT=Object.assign({bindings_version:c.PACKAGE_VERSION,lang:"node",publisher:"stripe",uname:null,typescript:!1},"undefined"==typeof process?{}:{lang_version:process.version,platform:process.platform}),c.StripeResource=aA,c.StripeContext=aB,c.resources=e5,c.HttpClient=B,c.HttpClientResponse=C,c.CryptoProvider=w,c.webhooks=function(a){let b={DEFAULT_TOLERANCE:300,signature:null,constructEvent(a,c,d,e,f,g){try{if(!this.signature)throw Error("ERR: missing signature helper, unable to verify");this.signature.verifyHeader(a,c,d,e||b.DEFAULT_TOLERANCE,f,g)}catch(a){throw a instanceof x&&(a.message+="\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`"),a}return a instanceof Uint8Array?JSON.parse(new TextDecoder("utf8").decode(a)):JSON.parse(a)},async constructEventAsync(a,c,d,e,f,g){if(!this.signature)throw Error("ERR: missing signature helper, unable to verify");return await this.signature.verifyHeaderAsync(a,c,d,e||b.DEFAULT_TOLERANCE,f,g),a instanceof Uint8Array?JSON.parse(new TextDecoder("utf8").decode(a)):JSON.parse(a)},generateTestHeaderString:function(a){let b=i(a),c=b.signature||b.cryptoProvider.computeHMACSignature(b.payloadString,b.secret);return b.generateHeaderString(c)},generateTestHeaderStringAsync:async function(a){let b=i(a),c=b.signature||await b.cryptoProvider.computeHMACSignatureAsync(b.payloadString,b.secret);return b.generateHeaderString(c)}},c={EXPECTED_SCHEME:"v1",verifyHeader(a,b,c,g,i,j){let{decodedHeader:k,decodedPayload:l,details:m,suspectPayloadType:n}=e(a,b,this.EXPECTED_SCHEME),o=/\s/.test(c),p=(i=i||h()).computeHMACSignature(d(l,m),c);return f(l,k,m,p,g,n,o,j),!0},async verifyHeaderAsync(a,b,c,g,i,j){let{decodedHeader:k,decodedPayload:l,details:m,suspectPayloadType:n}=e(a,b,this.EXPECTED_SCHEME),o=/\s/.test(c);i=i||h();let p=await i.computeHMACSignatureAsync(d(l,m),c);return f(l,k,m,p,g,n,o,j)}};function d(a,b){return`${b.timestamp}.${a}`}function e(a,b,c){var d,e;if(!a)throw new al(b,a,{message:"No webhook payload was provided."});let f="string"!=typeof a&&!(a instanceof Uint8Array),g=new TextDecoder("utf8"),h=a instanceof Uint8Array?g.decode(a):a;if(Array.isArray(b))throw Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");if(null==b||""==b)throw new al(b,a,{message:"No stripe-signature header value was provided."});let i=b instanceof Uint8Array?g.decode(b):b,j=(d=i,e=c,"string"!=typeof d?null:d.split(",").reduce((a,b)=>{let c=b.split("=");return"t"===c[0]&&(a.timestamp=parseInt(c[1],10)),c[0]===e&&a.signatures.push(c[1]),a},{timestamp:-1,signatures:[]}));if(!j||-1===j.timestamp)throw new al(i,h,{message:"Unable to extract timestamp and signatures from header"});if(!j.signatures.length)throw new al(i,h,{message:"No signatures found with expected scheme"});return{decodedPayload:h,decodedHeader:i,details:j,suspectPayloadType:f}}function f(b,c,d,e,f,g,h,i){let j=!!d.signatures.filter(a.secureCompare.bind(a,e)).length,k="\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://docs.stripe.com/webhooks/signature",l=h?"\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value":"";if(!j){if(g)throw new al(c,b,{message:"Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n"+k+"\n"+l});throw new al(c,b,{message:"No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.\n"+k+"\n"+l})}let m=Math.floor(("number"==typeof i?i:Date.now())/1e3)-d.timestamp;if(f>0&&m>f)throw new al(c,b,{message:"Timestamp outside the tolerance zone"});return!0}let g=null;function h(){return g||(g=a.createDefaultCryptoProvider()),g}function i(a){if(!a)throw new ad({message:"Options are required"});let b=Math.floor(a.timestamp)||Math.floor(Date.now()/1e3),d=a.scheme||c.EXPECTED_SCHEME,e=a.cryptoProvider||h(),f=`${b}.${a.payload}`;return Object.assign(Object.assign({},a),{timestamp:b,scheme:d,cryptoProvider:e,payloadString:f,generateHeaderString:a=>`t=${b},${d}=${a}`})}return b.signature=c,b}(a),c.errors=as,c.createNodeHttpClient=a.createNodeHttpClient,c.createFetchHttpClient=a.createFetchHttpClient,c.createNodeCryptoProvider=a.createNodeCryptoProvider,c.createSubtleCryptoProvider=a.createSubtleCryptoProvider,c.prototype={_appInfo:void 0,on:null,off:null,once:null,VERSION:null,StripeResource:null,webhooks:null,errors:null,_api:null,_prevRequestMetrics:null,_emitter:null,_enableTelemetry:null,_requestSender:null,_platformFunctions:null,rawRequest(a,b,c,d){return this._requestSender._rawRequest(a,b,c,d)},_setAuthenticator(a,b){if(a&&b)throw Error("Can't specify both apiKey and authenticator");if(!a&&!b)throw Error("Neither apiKey nor config.authenticator provided");this._authenticator=a?U(a):b},_setAppInfo(a){if(a&&"object"!=typeof a)throw Error("AppInfo must be an object.");if(a&&!a.name)throw Error("AppInfo.name is required");a=a||{},this._appInfo=e8.reduce((b,c)=>("string"==typeof a[c]&&((b=b||{})[c]=a[c]),b),{})},_setApiField(a,b){this._api[a]=b},getApiField(a){return this._api[a]},setClientId(a){this._clientId=a},getClientId(){return this._clientId},getConstant:a=>{switch(a){case"DEFAULT_HOST":return e6;case"DEFAULT_PORT":return"443";case"DEFAULT_BASE_PATH":return e7;case"DEFAULT_API_VERSION":return aC;case"DEFAULT_TIMEOUT":return 8e4;case"MAX_NETWORK_RETRY_DELAY_SEC":return 5;case"INITIAL_NETWORK_RETRY_DELAY_SEC":return .5}return c[a]},getMaxNetworkRetries(){return this.getApiField("maxNetworkRetries")},_setApiNumberField(a,b,c){let d=T(a,b,c);this._setApiField(a,d)},getMaxNetworkRetryDelay:()=>5,getInitialNetworkRetryDelay:()=>.5,getClientUserAgent(a){return this.getClientUserAgentSeeded(c.USER_AGENT,a)},getClientUserAgentSeeded(a,b){this._platformFunctions.getUname().then(c=>{var d;let e={};for(let b in a)Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=encodeURIComponent(null!=(d=a[b])?d:"null"));e.uname=encodeURIComponent(c||"UNKNOWN");let f=this.getApiField("httpClient");f&&(e.httplib=encodeURIComponent(f.getClientName())),this._appInfo&&(e.application=this._appInfo),b(JSON.stringify(e))})},getAppInfoAsString(){if(!this._appInfo)return"";let a=this._appInfo.name;return this._appInfo.version&&(a+=`/${this._appInfo.version}`),this._appInfo.url&&(a+=` (${this._appInfo.url})`),a},getTelemetryEnabled(){return this._enableTelemetry},_prepResources(){for(let a in e5)Object.prototype.hasOwnProperty.call(e5,a)&&(this["OAuth"===a?"oauth":a[0].toLowerCase()+a.substring(1)]=new e5[a](this))},_getPropsFromConfig(a){if(!a)return{};let b="string"==typeof a;if(!(a===Object(a)&&!Array.isArray(a))&&!b)throw Error("Config must either be an object or a string");if(b)return{apiVersion:a};if(Object.keys(a).filter(a=>!e9.includes(a)).length>0)throw Error(`Config object may only contain the following: ${e9.join(", ")}`);return a},parseEventNotification(a,b,c,d,e,f){let g=this.webhooks.constructEvent(a,b,c,d,e,f);return g.context&&(g.context=aB.parse(g.context)),g.fetchEvent=()=>this._requestSender._rawRequest("GET",`/v2/core/events/${g.id}`,void 0,{stripeContext:g.context},["fetch_event"]),g.fetchRelatedObject=()=>g.related_object?this._requestSender._rawRequest("GET",g.related_object.url,void 0,{stripeContext:g.context},["fetch_related_object"]):Promise.resolve(null),g}}}(new class extends aa{constructor(){super(),this._exec=aq.exec,this._UNAME_CACHE=null}uuid4(){return u.randomUUID?u.randomUUID():super.uuid4()}getUname(){return this._UNAME_CACHE||(this._UNAME_CACHE=new Promise((a,b)=>{try{this._exec("uname -a",(b,c)=>{if(b)return a(null);a(c)})}catch(b){a(null)}})),this._UNAME_CACHE}secureCompare(a,b){if(!a||!b)throw Error("secureCompare must receive two arguments");if(a.length!==b.length)return!1;if(u.timingSafeEqual){let c=new TextEncoder,d=c.encode(a),e=c.encode(b);return u.timingSafeEqual(d,e)}return super.secureCompare(a,b)}createEmitter(){return new v.EventEmitter}tryBufferData(a){if(!(a.file.data instanceof v.EventEmitter))return Promise.resolve(a);let b=[];return new Promise((c,d)=>{a.file.data.on("data",a=>{b.push(a)}).once("end",()=>{let d,e,f=Object.assign({},a);f.file.data=(d=new Uint8Array(b.reduce((a,b)=>a+b.length,0)),e=0,b.forEach(a=>{d.set(a,e),e+=a.length}),d),c(f)}).on("error",a=>{d(new ar({message:"An error occurred while attempting to process the file for upload.",detail:a}))})})}createNodeHttpClient(a){return new H(a)}createDefaultHttpClient(){return new H}createNodeCryptoProvider(){return new y}createDefaultCryptoProvider(){return this.createNodeCryptoProvider()}});let fa=["pe","hf","vc","mba-m7","private-equity","hedge-fund","venture-capital"],fb=["fpa","credit","financial-advisor","fintech","asset-management","credit-analyst"],fc={premium:{review:297,rewrite:697},standard:{review:197,rewrite:497},accessible:{review:147,rewrite:347}};process.env.STRIPE_PRICE_IB_TECHNICAL,process.env.STRIPE_PRICE_PE,process.env.STRIPE_PRICE_NETWORKING,process.env.STRIPE_PRICE_LBO,process.env.STRIPE_PRICE_STOCK_PITCH,process.env.STRIPE_PRICE_RESUME_STORY,process.env.STRIPE_PRICE_RESTRUCTURING,process.env.STRIPE_PRICE_REPE,process.env.STRIPE_PRICE_CREDIT,process.env.STRIPE_PRICE_SUPERDAY,process.env.STRIPE_PRICE_BUNDLE,process.env.STRIPE_PRICE_RESUME_REVIEW,process.env.STRIPE_PRICE_RESUME_REWRITE;var fd=a.i(34189),fe=a.i(39869);let ff={pe:"Private Equity","private-equity":"Private Equity",hf:"Hedge Fund","hedge-fund":"Hedge Fund",vc:"Venture Capital","venture-capital":"Venture Capital","mba-m7":"MBA (M7)",ib:"Investment Banking","investment-banking":"Investment Banking","non-target":"Non-Target","consulting-to-banking":"Consulting to Banking",mba:"MBA","equity-research":"Equity Research",fpa:"FP&A",credit:"Credit","credit-analyst":"Credit Analyst","financial-advisor":"Financial Advisor",fintech:"Fintech","asset-management":"Asset Management"},fg=[{value:"",label:"Select your target role..."},{value:"ib",label:"Investment Banking"},{value:"pe",label:"Private Equity"},{value:"hf",label:"Hedge Fund"},{value:"vc",label:"Venture Capital"},{value:"equity-research",label:"Equity Research"},{value:"asset-management",label:"Asset Management"},{value:"fpa",label:"FP&A / Corporate Finance"},{value:"credit",label:"Credit / Lending"},{value:"consulting-to-banking",label:"Consulting → Banking"},{value:"mba",label:"MBA Recruiting"},{value:"fintech",label:"Fintech"},{value:"other",label:"Other Finance Role"}],fh={pe:[{quote:"The rewrite changed how I presented my deal experience. Went from no responses to multiple headhunter callbacks.",attribution:"BB Analyst, now at UMM PE"},{quote:"They understood exactly what PE firms look for. The positioning made all the difference.",attribution:"EB Analyst, Class of 2024"}],hf:[{quote:"They helped me reframe my banking experience around investment judgment. Started getting HF interviews within weeks.",attribution:"Former BB Coverage Analyst"},{quote:"The positioning framework for presenting my stock picks was exactly what I needed.",attribution:"Former Sell-Side Research Associate"}],ib:[{quote:"The feedback was specific and actionable. Caught weak bullets I didn't even notice.",attribution:"Target school junior"},{quote:"Finally started getting first rounds after months of silence.",attribution:"Non-target senior"}],"non-target":[{quote:"I was getting ghosted on applications for months. After the rewrite, I finally started getting first rounds.",attribution:"State School Senior, Class of 2025"},{quote:"The reviewer understood exactly what non-targets face. Helped me position my Big 4 experience.",attribution:"Big 4 TAS Lateral"}],default:[{quote:"I wasn't getting responses on my applications. After the rewrite, I finally started getting interview requests.",attribution:"Non-target senior"},{quote:"The feedback was specific and actionable. Caught formatting issues and weak bullets I didn't even notice.",attribution:"Target school junior"}]},fi={pe:"PE on-cycle recruiting peaks July-September. Get your resume ready now.",hf:"Hedge fund recruiting is ongoing—strong resumes get noticed faster.",ib:"IB summer analyst apps open soon. Don't miss the window.","non-target":"Non-targets need every edge. A polished resume is your first impression.",mba:"MBA recruiting moves fast. Have your resume ready before networking events.",default:"A weak resume costs you interviews. Fix it before your next application."},fj={"resume-review":["Line-by-line written feedback","Formatting & structure analysis","Bullet point optimization tips","Industry-specific keyword check","One round of follow-up questions"],"resume-rewrite":["Complete resume rewrite (not just edits)","Optimized for ATS systems","Quantified achievement bullets","Industry-standard formatting","Two rounds of revisions included"]};function fk({initialService:a,segment:b,pricing:e}){let[f,g]=(0,d.useState)(a||"resume-review"),[h,u]=(0,d.useState)(null),[v,w]=(0,d.useState)(!1),[x,y]=(0,d.useState)("idle"),[z,A]=(0,d.useState)(""),[B,C]=(0,d.useState)(null),[D,E]=(0,d.useState)(""),[F,G]=(0,d.useState)(""),[H,I]=(0,d.useState)(b||""),J=fh[H]||fh[b||""]||fh.default,K=fi[H]||fi[b||""]||fi.default,L=(0,d.useMemo)(()=>t.map(a=>({...a,price:"resume-review"===a.id?e.reviewPrice:e.rewritePrice})),[e]),M=L.find(a=>a.id===f),N=b?ff[b]||b:null,O=a=>{a.preventDefault(),a.stopPropagation(),"dragenter"===a.type||"dragover"===a.type?w(!0):"dragleave"===a.type&&w(!1)},P=h&&D&&F&&f,Q=async a=>{if(a.preventDefault(),h&&F&&D&&f){y("uploading"),A("");try{let a=new FormData;a.append("file",h),a.append("name",D),a.append("email",F),a.append("phone",""),a.append("serviceType",f),a.append("targetRole",ff[H]||H),a.append("targetFirms",""),a.append("currentStatus",""),a.append("experienceLevel",""),a.append("timeline",""),a.append("specificConcerns",""),a.append("additionalNotes","");let c=H||b;c&&a.append("segment",c);let d=await fetch("/api/upload-resume",{method:"POST",body:a});if(!d.ok){let a=await d.json();throw Error(a.error||"Upload failed")}let e=await d.json();(0,fd.track)("resume_submitted",{service:f,segment:c||"none"}),e.paymentUrl?(C(e.paymentUrl),y("success"),setTimeout(()=>{window.location.href=e.paymentUrl},1500)):y("success")}catch(a){y("error"),A(a instanceof Error?a.message:"Something went wrong")}}};return"success"===x?(0,c.jsx)("section",{className:"bg-off-white py-20 lg:py-28",children:(0,c.jsxs)("div",{className:"mx-auto max-w-2xl px-6 text-center lg:px-8",children:[(0,c.jsx)("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100",children:(0,c.jsx)(j.CheckCircle,{className:"h-10 w-10 text-green-600"})}),(0,c.jsx)("h1",{className:"mt-8 text-3xl font-bold tracking-tight text-navy",children:"Resume Received!"}),(0,c.jsxs)("p",{className:"mt-4 text-lg text-charcoal/70",children:["Thank you for choosing our ",M?.title," service."]}),B&&(0,c.jsxs)("div",{className:"mt-8 rounded-xl border-2 border-gold bg-gold/10 p-6",children:[(0,c.jsxs)("div",{className:"flex items-center justify-center gap-2 mb-4",children:[(0,c.jsx)(k.Loader2,{className:"h-5 w-5 animate-spin text-gold"}),(0,c.jsx)("span",{className:"font-semibold text-navy",children:"Redirecting to secure payment..."})]}),(0,c.jsxs)("a",{href:B,className:"inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white",children:["Complete Payment - $",M?.price,(0,c.jsx)(m.ArrowRight,{className:"h-5 w-5"})]})]}),(0,c.jsxs)("p",{className:"mt-8 text-sm text-charcoal/60",children:["Questions? Contact us at"," ",(0,c.jsx)("a",{href:"mailto:support@wallstreetplaybook.com",className:"font-medium text-navy hover:text-gold",children:"support@wallstreetplaybook.com"})]})]})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("section",{className:"relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden",children:[(0,c.jsxs)("div",{className:"absolute inset-0",children:[(0,c.jsx)("img",{src:"/hero-wall-street.png",alt:"",className:"w-full h-full object-cover object-top"}),(0,c.jsx)("div",{className:"absolute inset-0 bg-navy-deep/85"}),(0,c.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep/90"}),(0,c.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(201,168,110,0.1),_transparent)]"})]}),(0,c.jsxs)("div",{className:"relative mx-auto max-w-4xl px-6 text-center lg:px-8",children:[(0,c.jsx)("p",{className:"text-sm font-semibold uppercase tracking-widest text-gold mb-4",children:"Resume Services"}),(0,c.jsxs)("h1",{className:"text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl",children:["Get Your Resume ",(0,c.jsx)("span",{className:"text-gradient-gold",children:"Interview-Ready"})]}),(0,c.jsxs)("p",{className:"mt-5 text-base leading-relaxed text-white/80 max-w-2xl mx-auto",children:["Expert feedback from reviewers who've worked at Goldman, Morgan Stanley, and top PE shops.",(0,c.jsx)("span",{className:"text-gold font-medium",children:" 48-hour turnaround. 100% money-back guarantee."})]}),(0,c.jsxs)("div",{className:"mt-6 inline-flex items-center gap-2 rounded-full bg-gold/20 border border-gold/30 px-5 py-2.5 backdrop-blur-sm",children:[(0,c.jsx)(o.Clock,{className:"h-4 w-4 text-gold"}),(0,c.jsx)("span",{className:"text-sm text-gold font-medium",children:K})]}),(0,c.jsx)("p",{className:"mt-4 text-xs text-white/50",children:"Most candidates spend $1,500+ on coaching. Get expert resume feedback for a fraction of that."})]})]}),(0,c.jsx)("section",{className:"py-8 lg:py-12",children:(0,c.jsxs)("div",{className:"mx-auto max-w-4xl px-6 lg:px-8",children:[(0,c.jsxs)("form",{className:"grid lg:grid-cols-5 gap-8",onSubmit:Q,children:[(0,c.jsxs)("div",{className:"lg:col-span-3 space-y-6",children:[(0,c.jsxs)("div",{className:"rounded-xl border border-border bg-white p-5 shadow-sm",children:[(0,c.jsxs)("label",{className:"block text-sm font-medium text-charcoal mb-3",children:["Select Service ",N&&(0,c.jsxs)("span",{className:"text-gold",children:["for ",N]})]}),(0,c.jsx)("div",{className:"space-y-3",children:L.map(a=>{let b=f===a.id,d=fj[a.id];return(0,c.jsxs)("button",{type:"button",onClick:()=>g(a.id),className:`relative w-full rounded-lg border-2 p-4 text-left transition-all ${b?"border-gold bg-gold/5":"border-border hover:border-gold/50"}`,children:["resume-rewrite"===a.id&&(0,c.jsxs)("span",{className:"absolute -top-2 -right-2 flex items-center gap-0.5 rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold text-navy",children:[(0,c.jsx)(r.Sparkles,{className:"h-2.5 w-2.5"}),"Most Value"]}),(0,c.jsxs)("div",{className:"flex justify-between items-start",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:"font-semibold text-navy",children:a.title}),(0,c.jsx)("p",{className:"text-xs text-charcoal/60 mt-0.5",children:a.turnaround})]}),(0,c.jsxs)("span",{className:"text-xl font-bold text-gold",children:["$",a.price]})]}),b&&d&&(0,c.jsxs)("div",{className:"mt-3 pt-3 border-t border-border/50",children:[(0,c.jsx)("p",{className:"text-xs font-medium text-charcoal/70 mb-2",children:"What's included:"}),(0,c.jsx)("ul",{className:"space-y-1.5",children:d.map((a,b)=>(0,c.jsxs)("li",{className:"flex items-start gap-2 text-xs text-charcoal/70",children:[(0,c.jsx)(s.Check,{className:"h-3.5 w-3.5 text-green-600 mt-0.5 flex-shrink-0"}),(0,c.jsx)("span",{children:a})]},b))})]})]},a.id)})})]}),(0,c.jsxs)("div",{className:"rounded-xl border border-border bg-white p-5 shadow-sm",children:[(0,c.jsx)("label",{className:"block text-sm font-medium text-charcoal mb-3",children:"Your Information"}),(0,c.jsxs)("div",{className:"space-y-4",children:[(0,c.jsx)("div",{children:(0,c.jsx)("input",{type:"text",required:!0,value:D,onChange:a=>E(a.target.value),className:"block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold",placeholder:"Full Name *"})}),(0,c.jsx)("div",{children:(0,c.jsx)("input",{type:"email",required:!0,value:F,onChange:a=>G(a.target.value),className:"block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold",placeholder:"Email Address *"})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("select",{value:H,onChange:a=>I(a.target.value),className:"block w-full rounded-lg border border-charcoal/20 px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold bg-white",children:fg.map(a=>(0,c.jsx)("option",{value:a.value,children:a.label},a.value))}),(0,c.jsx)("p",{className:"mt-1 text-xs text-charcoal/50",children:"This helps us tailor feedback to your target role"})]})]})]}),(0,c.jsxs)("div",{className:"rounded-xl border border-border bg-white p-5 shadow-sm",children:[(0,c.jsx)("label",{className:"block text-sm font-medium text-charcoal mb-3",children:"Upload Resume *"}),(0,c.jsx)("div",{className:`flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-colors ${v?"border-gold bg-gold/5":"border-charcoal/20"} ${h?"border-green-500 bg-green-50":""}`,onDragEnter:O,onDragLeave:O,onDragOver:O,onDrop:a=>{if(a.preventDefault(),a.stopPropagation(),w(!1),a.dataTransfer.files&&a.dataTransfer.files[0]){let b=a.dataTransfer.files[0];("application/pdf"===b.type||b.name.endsWith(".docx")||b.name.endsWith(".doc"))&&u(b)}},children:h?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.FileText,{className:"h-8 w-8 text-green-600"}),(0,c.jsx)("p",{className:"mt-2 font-medium text-green-700 text-sm text-center break-all",children:h.name}),(0,c.jsx)("button",{type:"button",onClick:()=>u(null),className:"mt-2 text-xs text-charcoal/60 hover:text-red-600",children:"Remove"})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{className:"h-8 w-8 text-charcoal/30"}),(0,c.jsxs)("p",{className:"mt-2 text-sm text-charcoal/70 text-center",children:[(0,c.jsxs)("label",{className:"cursor-pointer font-medium text-gold hover:underline",children:["Click to upload",(0,c.jsx)("input",{type:"file",accept:".pdf,.doc,.docx",onChange:a=>{a.target.files&&a.target.files[0]&&u(a.target.files[0])},className:"hidden"})]}),(0,c.jsx)("span",{className:"hidden sm:inline",children:" or drag & drop"})]}),(0,c.jsx)("p",{className:"mt-1 text-xs text-charcoal/50",children:"PDF, DOC, DOCX (max 10MB)"})]})})]}),"error"===x&&(0,c.jsx)("div",{className:"rounded-lg border border-red-200 bg-red-50 p-4 text-center",children:(0,c.jsx)("p",{className:"text-sm text-red-600",children:z||"Something went wrong. Please try again."})}),(0,c.jsx)("div",{className:"lg:hidden",children:(0,c.jsx)("button",{type:"submit",disabled:!P||"uploading"===x,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white disabled:opacity-50",children:"uploading"===x?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(k.Loader2,{className:"h-5 w-5 animate-spin"}),"Processing..."]}):(0,c.jsxs)(c.Fragment,{children:["Continue to Payment - $",M?.price,(0,c.jsx)(m.ArrowRight,{className:"h-5 w-5"})]})})})]}),(0,c.jsx)("div",{className:"lg:col-span-2",children:(0,c.jsxs)("div",{className:"sticky top-24 space-y-4",children:[(0,c.jsxs)("div",{className:"rounded-xl border border-border bg-white p-6 shadow-sm",children:[(0,c.jsx)("h2",{className:"text-lg font-semibold text-navy",children:"Order Summary"}),(0,c.jsxs)("div",{className:"mt-4 space-y-3 text-sm",children:[(0,c.jsxs)("div",{className:"flex justify-between",children:[(0,c.jsx)("span",{className:"text-charcoal/70",children:"Service"}),(0,c.jsx)("span",{className:"font-medium text-navy",children:M?.title})]}),(0,c.jsxs)("div",{className:"flex justify-between",children:[(0,c.jsx)("span",{className:"text-charcoal/70",children:"Turnaround"}),(0,c.jsx)("span",{className:"font-medium text-navy",children:M?.turnaround})]}),(0,c.jsx)("div",{className:"border-t border-border pt-3",children:(0,c.jsxs)("div",{className:"flex justify-between items-center",children:[(0,c.jsx)("span",{className:"font-semibold text-navy",children:"Total"}),(0,c.jsxs)("span",{className:"text-2xl font-bold text-gold",children:["$",M?.price]})]})})]}),(0,c.jsx)("div",{className:"hidden lg:block mt-6",children:(0,c.jsx)("button",{type:"submit",disabled:!P||"uploading"===x,className:"flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white disabled:opacity-50",children:"uploading"===x?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(k.Loader2,{className:"h-5 w-5 animate-spin"}),"Processing..."]}):(0,c.jsxs)(c.Fragment,{children:["Continue to Payment",(0,c.jsx)(m.ArrowRight,{className:"h-5 w-5"})]})})}),(0,c.jsx)("div",{className:"mt-4 rounded-lg bg-green-50 border border-green-200 p-3",children:(0,c.jsxs)("div",{className:"flex items-start gap-2",children:[(0,c.jsx)(q.Shield,{className:"h-4 w-4 text-green-600 mt-0.5"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"text-xs font-semibold text-green-800",children:"100% Money-Back Guarantee"}),(0,c.jsx)("p",{className:"text-xs text-green-700 mt-0.5",children:"Not satisfied with your feedback? Full refund, no questions asked."})]})]})}),(0,c.jsxs)("div",{className:"mt-4 space-y-2.5 pt-4 border-t border-border",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2 text-xs text-charcoal/70",children:[(0,c.jsx)(o.Clock,{className:"h-4 w-4 text-gold flex-shrink-0"}),(0,c.jsx)("span",{children:"Delivered within 48 hours or it's free"})]}),(0,c.jsxs)("div",{className:"flex items-center gap-2 text-xs text-charcoal/70",children:[(0,c.jsx)(p,{className:"h-4 w-4 text-gold flex-shrink-0"}),(0,c.jsx)("span",{children:"Reviewed by ex-bankers & recruiters"})]}),(0,c.jsxs)("div",{className:"flex items-center gap-2 text-xs text-charcoal/70",children:[(0,c.jsx)(q.Shield,{className:"h-4 w-4 text-gold flex-shrink-0"}),(0,c.jsx)("span",{children:"Secure payment via Stripe"})]})]})]}),(0,c.jsx)("div",{className:"rounded-xl border border-border bg-white p-4",children:(0,c.jsxs)("div",{className:"grid grid-cols-3 gap-2 text-center",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"text-lg font-bold text-navy",children:"500+"}),(0,c.jsx)("p",{className:"text-[10px] text-charcoal/60",children:"Resumes Reviewed"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"text-lg font-bold text-navy",children:"48hr"}),(0,c.jsx)("p",{className:"text-[10px] text-charcoal/60",children:"Avg Turnaround"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{className:"text-lg font-bold text-navy",children:"100%"}),(0,c.jsx)("p",{className:"text-[10px] text-charcoal/60",children:"Money-Back"})]})]})}),(0,c.jsxs)("div",{className:"rounded-xl border border-gold/30 bg-gold/5 p-5",children:[(0,c.jsx)("div",{className:"flex gap-1 mb-2",children:[void 0,void 0,void 0,void 0,void 0].map((a,b)=>(0,c.jsx)("svg",{className:"h-4 w-4 text-gold",fill:"currentColor",viewBox:"0 0 20 20",children:(0,c.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},b))}),(0,c.jsxs)("p",{className:"text-sm text-charcoal/80 italic leading-relaxed",children:['"',J[0]?.quote,'"']}),(0,c.jsxs)("p",{className:"mt-3 text-xs font-semibold text-navy",children:["— ",J[0]?.attribution]})]}),J[1]&&(0,c.jsxs)("div",{className:"rounded-xl border border-border bg-white p-5",children:[(0,c.jsxs)("p",{className:"text-sm text-charcoal/80 italic leading-relaxed",children:['"',J[1].quote,'"']}),(0,c.jsxs)("p",{className:"mt-3 text-xs font-semibold text-navy",children:["— ",J[1].attribution]})]})]})})]}),(0,c.jsx)("div",{className:"mt-8 text-center",children:(0,c.jsxs)(fe.default,{href:"/",className:"inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-navy",children:[(0,c.jsx)(n,{className:"h-4 w-4"}),"Back to Home"]})})]})})]})}function fl(){let a=(0,e.useSearchParams)(),b=a.get("service"),f=a.get("segment"),g=(0,d.useMemo)(()=>{let a,{tier:b,reviewPrice:c,rewritePrice:d}={tier:a=function(a){if(!a)return"standard";let b=a.toLowerCase().trim();return fa.some(a=>b.includes(a))?"premium":fb.some(a=>b.includes(a))?"accessible":"standard"}(f),prices:fc[a],reviewPrice:fc[a].review,rewritePrice:fc[a].rewrite};return{tier:b,reviewPrice:c,rewritePrice:d}},[f]);return(0,c.jsx)(fk,{initialService:"resume-review"===b||"resume-rewrite"===b?b:null,segment:f,pricing:g})}function fm(){return(0,c.jsx)("section",{className:"py-20",children:(0,c.jsx)("div",{className:"mx-auto max-w-4xl px-6 lg:px-8",children:(0,c.jsx)("div",{className:"flex items-center justify-center py-20",children:(0,c.jsx)(k.Loader2,{className:"h-8 w-8 animate-spin text-gold"})})})})}function fn(){return(0,c.jsxs)("div",{className:"flex min-h-screen flex-col",children:[(0,c.jsx)(f.Navbar,{}),(0,c.jsx)("main",{className:"flex-grow bg-off-white",children:(0,c.jsx)(d.Suspense,{fallback:(0,c.jsx)(fm,{}),children:(0,c.jsx)(fl,{})})}),(0,c.jsx)(g.Footer,{})]})}a.s(["default",()=>fn],31996)}];

//# sourceMappingURL=Downloads_wall-street-playbook_8012b56a._.js.map