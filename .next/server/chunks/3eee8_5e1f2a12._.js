module.exports=[82864,(e,t,i)=>{var n=Object.prototype.toString;function r(e){return"function"==typeof e.constructor?e.constructor.name:null}function a(e){return Array.isArray?Array.isArray(e):e instanceof Array}function s(e){return e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit}function o(e){return e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate}function u(e){return e instanceof RegExp||"string"==typeof e.flags&&"boolean"==typeof e.ignoreCase&&"boolean"==typeof e.multiline&&"boolean"==typeof e.global}function l(e,t){return"GeneratorFunction"===r(e)}function c(e){return"function"==typeof e.throw&&"function"==typeof e.return&&"function"==typeof e.next}function h(e){try{if("number"==typeof e.length&&"function"==typeof e.callee)return!0}catch(e){if(-1!==e.message.indexOf("callee"))return!0}return!1}function d(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}t.exports=function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t=typeof e;if("boolean"===t)return"boolean";if("string"===t)return"string";if("number"===t)return"number";if("symbol"===t)return"symbol";if("function"===t)return l(e)?"generatorfunction":"function";if(a(e))return"array";if(d(e))return"buffer";if(h(e))return"arguments";if(o(e))return"date";if(s(e))return"error";if(u(e))return"regexp";switch(r(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(c(e))return"generator";switch(t=n.call(e)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")}},4352,(e,t,i)=>{"use strict";t.exports=function(e){return null!=e&&("object"==typeof e||"function"==typeof e)}},62740,(e,t,i)=>{"use strict";var n=e.r(4352);function r(e,t){for(var i in t)a(t,i)&&(e[i]=t[i])}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e){n(e)||(e={});for(var t=arguments.length,i=1;i<t;i++){var a=arguments[i];n(a)&&r(e,a)}return e}},29730,(e,t,i)=>{"use strict";var n=e.r(82864),r=e.r(62740);function a(e,t){return e.slice(0,t.length)===t&&e.charAt(t.length+1)!==t.slice(-1)}function s(e){if("object"!==n(e)&&(e={content:e}),"string"!=typeof e.content&&!c(e.content))throw TypeError("expected a buffer or string");return e.content=e.content.toString(),e.sections=[],e}function o(e,t){return e?e.slice(t.length).trim():""}function u(){return{key:"",data:"",content:""}}function l(e){return e}function c(e){return!!e&&!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}t.exports=function(e,t){"function"==typeof t&&(t={parse:t});var i=s(e),n=r({},{section_delimiter:"---",parse:l},t),c=n.section_delimiter,h=i.content.split(/\r?\n/),d=null,p=u(),m=[],f=[];function y(e){i.content=e,d=[],m=[]}function g(e){f.length&&(p.key=o(f[0],c),p.content=e,n.parse(p,d),d.push(p),p=u(),m=[],f=[])}for(var v=0;v<h.length;v++){var w=h[v],k=f.length,b=w.trim();if(a(b,c)){if(3===b.length&&0!==v){if(0===k||2===k){m.push(w);continue}f.push(b),p.data=m.join("\n"),m=[];continue}null===d&&y(m.join("\n")),2===k&&g(m.join("\n")),f.push(b);continue}m.push(w)}return null===d?y(m.join("\n")):g(m.join("\n")),i.sections=d,i}},66459,(e,t,i)=>{"use strict";function n(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack||""}n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(e){var t=this.name+": ";return t+=this.reason||"(unknown reason)",!e&&this.mark&&(t+=" "+this.mark.toString()),t},t.exports=n},68774,(e,t,i)=>{"use strict";var n=e.r(66459),r=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],a=["scalar","sequence","mapping"];function s(e){var t={};return null!==e&&Object.keys(e).forEach(function(i){e[i].forEach(function(e){t[String(e)]=i})}),t}t.exports=function(e,t){if(Object.keys(t=t||{}).forEach(function(t){if(-1===r.indexOf(t))throw new n('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.defaultStyle=t.defaultStyle||null,this.styleAliases=s(t.styleAliases||null),-1===a.indexOf(this.kind))throw new n('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}},74168,(e,t,i)=>{"use strict";function n(e){return null==e}function r(e){return"object"==typeof e&&null!==e}function a(e){return Array.isArray(e)?e:n(e)?[]:[e]}function s(e,t){var i,n,r,a;if(t)for(i=0,n=(a=Object.keys(t)).length;i<n;i+=1)e[r=a[i]]=t[r];return e}function o(e,t){var i,n="";for(i=0;i<t;i+=1)n+=e;return n}function u(e){return 0===e&&-1/0==1/e}t.exports.isNothing=n,t.exports.isObject=r,t.exports.toArray=a,t.exports.repeat=o,t.exports.isNegativeZero=u,t.exports.extend=s},58628,(e,t,i)=>{"use strict";var n=e.r(74168),r=e.r(66459),a=e.r(68774);function s(e,t,i){var n=[];return e.include.forEach(function(e){i=s(e,t,i)}),e[t].forEach(function(e){i.forEach(function(t,i){t.tag===e.tag&&t.kind===e.kind&&n.push(i)}),i.push(e)}),i.filter(function(e,t){return -1===n.indexOf(t)})}function o(){var e,t,i={scalar:{},sequence:{},mapping:{},fallback:{}};function n(e){i[e.kind][e.tag]=i.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return i}function u(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(e){if(e.loadKind&&"scalar"!==e.loadKind)throw new r("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=s(this,"implicit",[]),this.compiledExplicit=s(this,"explicit",[]),this.compiledTypeMap=o(this.compiledImplicit,this.compiledExplicit)}u.DEFAULT=null,u.create=function(){var e,t;switch(arguments.length){case 1:e=u.DEFAULT,t=arguments[0];break;case 2:e=arguments[0],t=arguments[1];break;default:throw new r("Wrong number of arguments for Schema.create function")}if(e=n.toArray(e),t=n.toArray(t),!e.every(function(e){return e instanceof u}))throw new r("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(e){return e instanceof a}))throw new r("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new u({include:e,explicit:t})},t.exports=u},4954,(e,t,i)=>{"use strict";t.exports=new(e.r(68774))("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}})},39796,(e,t,i)=>{"use strict";t.exports=new(e.r(68774))("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}})},87159,(e,t,i)=>{"use strict";t.exports=new(e.r(68774))("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})},4548,(e,t,i)=>{"use strict";t.exports=new(e.r(58628))({explicit:[e.r(4954),e.r(39796),e.r(87159)]})},77068,(e,t,i)=>{"use strict";function n(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)}function r(){return null}function a(e){return null===e}t.exports=new(e.r(68774))("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:r,predicate:a,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})},7424,(e,t,i)=>{"use strict";function n(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)}function r(e){return"true"===e||"True"===e||"TRUE"===e}function a(e){return"[object Boolean]"===Object.prototype.toString.call(e)}t.exports=new(e.r(68774))("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:r,predicate:a,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"})},616,(e,t,i)=>{"use strict";var n=e.r(74168);function r(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function a(e){return 48<=e&&e<=55}function s(e){return 48<=e&&e<=57}function o(e){if(null===e)return!1;var t,i=e.length,n=0,o=!1;if(!i)return!1;if(("-"===(t=e[n])||"+"===t)&&(t=e[++n]),"0"===t){if(n+1===i)return!0;if("b"===(t=e[++n])){for(n++;n<i;n++)if("_"!==(t=e[n])){if("0"!==t&&"1"!==t)return!1;o=!0}return o&&"_"!==t}if("x"===t){for(n++;n<i;n++)if("_"!==(t=e[n])){if(!r(e.charCodeAt(n)))return!1;o=!0}return o&&"_"!==t}for(;n<i;n++)if("_"!==(t=e[n])){if(!a(e.charCodeAt(n)))return!1;o=!0}return o&&"_"!==t}if("_"===t)return!1;for(;n<i;n++)if("_"!==(t=e[n])){if(":"===t)break;if(!s(e.charCodeAt(n)))return!1;o=!0}return!!o&&"_"!==t&&(":"!==t||/^(:[0-5]?[0-9])+$/.test(e.slice(n)))}function u(e){var t,i,n=e,r=1,a=[];return(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),("-"===(t=n[0])||"+"===t)&&("-"===t&&(r=-1),t=(n=n.slice(1))[0]),"0"===n)?0:"0"===t?"b"===n[1]?r*parseInt(n.slice(2),2):"x"===n[1]?r*parseInt(n,16):r*parseInt(n,8):-1!==n.indexOf(":")?(n.split(":").forEach(function(e){a.unshift(parseInt(e,10))}),n=0,i=1,a.forEach(function(e){n+=e*i,i*=60}),r*n):r*parseInt(n,10)}function l(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!n.isNegativeZero(e)}t.exports=new(e.r(68774))("tag:yaml.org,2002:int",{kind:"scalar",resolve:o,construct:u,predicate:l,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0"+e.toString(8):"-0"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},5748,(e,t,i)=>{"use strict";var n=e.r(74168),r=e.r(68774),a=RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),s=/^[-+]?[0-9]+e/;t.exports=new r("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!!a.test(e)&&"_"!==e[e.length-1]},construct:function(e){var t,i,n,r;return(i="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,r=[],"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t)?1===i?1/0:-1/0:".nan"===t?NaN:t.indexOf(":")>=0?(t.split(":").forEach(function(e){r.unshift(parseFloat(e,10))}),t=0,n=1,r.forEach(function(e){t+=e*n,n*=60}),i*t):i*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||n.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(1/0===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(-1/0===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(n.isNegativeZero(e))return"-0.0";return i=e.toString(10),s.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"})},93278,(e,t,i)=>{"use strict";t.exports=new(e.r(58628))({include:[e.r(4548)],implicit:[e.r(77068),e.r(7424),e.r(616),e.r(5748)]})},14022,(e,t,i)=>{"use strict";t.exports=new(e.r(58628))({include:[e.r(93278)]})},77345,(e,t,i)=>{"use strict";var n=e.r(68774),r=RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),a=RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");t.exports=new n("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==r.exec(e)||null!==a.exec(e))},construct:function(e){var t,i,n,s,o,u,l,c,h=0,d=null;if(null===(t=r.exec(e))&&(t=a.exec(e)),null===t)throw Error("Date resolve error");if(i=+t[1],n=t[2]-1,s=+t[3],!t[4])return new Date(Date.UTC(i,n,s));if(o=+t[4],u=+t[5],l=+t[6],t[7]){for(h=t[7].slice(0,3);h.length<3;)h+="0";h*=1}return t[9]&&(d=(60*t[10]+ +(t[11]||0))*6e4,"-"===t[9]&&(d=-d)),c=new Date(Date.UTC(i,n,s,o,u,l,h)),d&&c.setTime(c.getTime()-d),c},instanceOf:Date,represent:function(e){return e.toISOString()}})},42177,(e,t,i)=>{"use strict";function n(e){return"<<"===e||null===e}t.exports=new(e.r(68774))("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n})},12545,(e,t,i)=>{"use strict";try{e.t,n=e.r(874).Buffer}catch(e){}var n,r=e.r(68774),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";t.exports=new r("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,n=0,r=e.length,s=a;for(i=0;i<r;i++)if(!((t=s.indexOf(e.charAt(i)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,i,r=e.replace(/[\r\n=]/g,""),s=r.length,o=a,u=0,l=[];for(t=0;t<s;t++)t%4==0&&t&&(l.push(u>>16&255),l.push(u>>8&255),l.push(255&u)),u=u<<6|o.indexOf(r.charAt(t));return(0==(i=s%4*6)?(l.push(u>>16&255),l.push(u>>8&255),l.push(255&u)):18===i?(l.push(u>>10&255),l.push(u>>2&255)):12===i&&l.push(u>>4&255),n)?n.from?n.from(l):new n(l):l},predicate:function(e){return n&&n.isBuffer(e)},represent:function(e){var t,i,n="",r=0,s=e.length,o=a;for(t=0;t<s;t++)t%3==0&&t&&(n+=o[r>>18&63],n+=o[r>>12&63],n+=o[r>>6&63],n+=o[63&r]),r=(r<<8)+e[t];return 0==(i=s%3)?(n+=o[r>>18&63],n+=o[r>>12&63],n+=o[r>>6&63],n+=o[63&r]):2===i?(n+=o[r>>10&63],n+=o[r>>4&63],n+=o[r<<2&63],n+=o[64]):1===i&&(n+=o[r>>2&63],n+=o[r<<4&63],n+=o[64],n+=o[64]),n}})},56093,(e,t,i)=>{"use strict";var n=e.r(68774),r=Object.prototype.hasOwnProperty,a=Object.prototype.toString;t.exports=new n("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,n,s,o,u=[],l=e;for(t=0,i=l.length;t<i;t+=1){if(n=l[t],o=!1,"[object Object]"!==a.call(n))return!1;for(s in n)if(r.call(n,s))if(o)return!1;else o=!0;if(!o||-1!==u.indexOf(s))return!1;u.push(s)}return!0},construct:function(e){return null!==e?e:[]}})},43693,(e,t,i)=>{"use strict";var n=e.r(68774),r=Object.prototype.toString;t.exports=new n("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,n,a,s,o=e;for(t=0,s=Array(o.length),i=o.length;t<i;t+=1){if(n=o[t],"[object Object]"!==r.call(n)||1!==(a=Object.keys(n)).length)return!1;s[t]=[a[0],n[a[0]]]}return!0},construct:function(e){if(null===e)return[];var t,i,n,r,a,s=e;for(t=0,a=Array(s.length),i=s.length;t<i;t+=1)r=Object.keys(n=s[t]),a[t]=[r[0],n[r[0]]];return a}})},32375,(e,t,i)=>{"use strict";var n=e.r(68774),r=Object.prototype.hasOwnProperty;t.exports=new n("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,i=e;for(t in i)if(r.call(i,t)&&null!==i[t])return!1;return!0},construct:function(e){return null!==e?e:{}}})},8095,(e,t,i)=>{"use strict";t.exports=new(e.r(58628))({include:[e.r(14022)],implicit:[e.r(77345),e.r(42177)],explicit:[e.r(12545),e.r(56093),e.r(43693),e.r(32375)]})},8706,(e,t,i)=>{"use strict";function n(){return!0}function r(){}function a(){return""}function s(e){return void 0===e}t.exports=new(e.r(68774))("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:n,construct:r,predicate:s,represent:a})},78301,(e,t,i)=>{"use strict";function n(e){if(null===e||0===e.length)return!1;var t=e,i=/\/([gim]*)$/.exec(e),n="";return("/"!==t[0]||(i&&(n=i[1]),!(n.length>3)&&"/"===t[t.length-n.length-1]))&&!0}function r(e){var t=e,i=/\/([gim]*)$/.exec(e),n="";return"/"===t[0]&&(i&&(n=i[1]),t=t.slice(1,t.length-n.length-1)),new RegExp(t,n)}function a(e){var t="/"+e.source+"/";return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}function s(e){return"[object RegExp]"===Object.prototype.toString.call(e)}t.exports=new(e.r(68774))("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:n,construct:r,predicate:s,represent:a})},69664,(e,t,i)=>{!function(e,i){t.exports=i()}(e.e,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}return i.m=e,i.c=t,i.p="",i(0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(3),a=i(8),s=i(15);function o(e,t,i){var s,o=null,u=function(e,t){i&&i(e,t),o&&o.visit(e,t)},l="function"==typeof i?u:null,c=!1;if(t){c="boolean"==typeof t.comment&&t.comment;var h="boolean"==typeof t.attachComment&&t.attachComment;(c||h)&&((o=new n.CommentHandler).attach=h,t.comment=!0,l=u)}var d=!1;t&&"string"==typeof t.sourceType&&(d="module"===t.sourceType),s=t&&"boolean"==typeof t.jsx&&t.jsx?new r.JSXParser(e,t,l):new a.Parser(e,t,l);var p=d?s.parseModule():s.parseScript();return c&&o&&(p.comments=o.comments),s.config.tokens&&(p.tokens=s.tokens),s.config.tolerant&&(p.errors=s.errorHandler.errors),p}t.parse=o,t.parseModule=function(e,t,i){var n=t||{};return n.sourceType="module",o(e,n,i)},t.parseScript=function(e,t,i){var n=t||{};return n.sourceType="script",o(e,n,i)},t.tokenize=function(e,t,i){var n,r=new s.Tokenizer(e,t);n=[];try{for(;;){var a=r.getNextToken();if(!a)break;i&&(a=i(a)),n.push(a)}}catch(e){r.errorHandler.tolerate(e)}return r.errorHandler.tolerant&&(n.errors=r.errors()),n},t.Syntax=i(2).Syntax,t.version="4.0.1"},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(2);t.CommentHandler=function(){function e(){this.attach=!1,this.comments=[],this.stack=[],this.leading=[],this.trailing=[]}return e.prototype.insertInnerComments=function(e,t){if(e.type===n.Syntax.BlockStatement&&0===e.body.length){for(var i=[],r=this.leading.length-1;r>=0;--r){var a=this.leading[r];t.end.offset>=a.start&&(i.unshift(a.comment),this.leading.splice(r,1),this.trailing.splice(r,1))}i.length&&(e.innerComments=i)}},e.prototype.findTrailingComments=function(e){var t=[];if(this.trailing.length>0){for(var i=this.trailing.length-1;i>=0;--i){var n=this.trailing[i];n.start>=e.end.offset&&t.unshift(n.comment)}return this.trailing.length=0,t}var r=this.stack[this.stack.length-1];if(r&&r.node.trailingComments){var a=r.node.trailingComments[0];a&&a.range[0]>=e.end.offset&&(t=r.node.trailingComments,delete r.node.trailingComments)}return t},e.prototype.findLeadingComments=function(e){for(var t,i=[];this.stack.length>0;){var n=this.stack[this.stack.length-1];if(n&&n.start>=e.start.offset)t=n.node,this.stack.pop();else break}if(t){for(var r=t.leadingComments?t.leadingComments.length:0,a=r-1;a>=0;--a){var s=t.leadingComments[a];s.range[1]<=e.start.offset&&(i.unshift(s),t.leadingComments.splice(a,1))}return t.leadingComments&&0===t.leadingComments.length&&delete t.leadingComments,i}for(var a=this.leading.length-1;a>=0;--a){var n=this.leading[a];n.start<=e.start.offset&&(i.unshift(n.comment),this.leading.splice(a,1))}return i},e.prototype.visitNode=function(e,t){if(e.type!==n.Syntax.Program||!(e.body.length>0)){this.insertInnerComments(e,t);var i=this.findTrailingComments(t),r=this.findLeadingComments(t);r.length>0&&(e.leadingComments=r),i.length>0&&(e.trailingComments=i),this.stack.push({node:e,start:t.start.offset})}},e.prototype.visitComment=function(e,t){var i="L"===e.type[0]?"Line":"Block",n={type:i,value:e.value};if(e.range&&(n.range=e.range),e.loc&&(n.loc=e.loc),this.comments.push(n),this.attach){var r={comment:{type:i,value:e.value,range:[t.start.offset,t.end.offset]},start:t.start.offset};e.loc&&(r.comment.loc=e.loc),e.type=i,this.leading.push(r),this.trailing.push(r)}},e.prototype.visit=function(e,t){"LineComment"===e.type||"BlockComment"===e.type?this.visitComment(e,t):this.attach&&this.visitNode(e,t)},e}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Syntax={AssignmentExpression:"AssignmentExpression",AssignmentPattern:"AssignmentPattern",ArrayExpression:"ArrayExpression",ArrayPattern:"ArrayPattern",ArrowFunctionExpression:"ArrowFunctionExpression",AwaitExpression:"AwaitExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ClassBody:"ClassBody",ClassDeclaration:"ClassDeclaration",ClassExpression:"ClassExpression",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExportAllDeclaration:"ExportAllDeclaration",ExportDefaultDeclaration:"ExportDefaultDeclaration",ExportNamedDeclaration:"ExportNamedDeclaration",ExportSpecifier:"ExportSpecifier",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForOfStatement:"ForOfStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",ImportDeclaration:"ImportDeclaration",ImportDefaultSpecifier:"ImportDefaultSpecifier",ImportNamespaceSpecifier:"ImportNamespaceSpecifier",ImportSpecifier:"ImportSpecifier",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",MetaProperty:"MetaProperty",MethodDefinition:"MethodDefinition",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",ObjectPattern:"ObjectPattern",Program:"Program",Property:"Property",RestElement:"RestElement",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SpreadElement:"SpreadElement",Super:"Super",SwitchCase:"SwitchCase",SwitchStatement:"SwitchStatement",TaggedTemplateExpression:"TaggedTemplateExpression",TemplateElement:"TemplateElement",TemplateLiteral:"TemplateLiteral",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement",YieldExpression:"YieldExpression"}},function(e,t,i){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=i(4),a=i(5),s=i(6),o=i(7),u=i(8),l=i(13),c=i(14);function h(e){var t;switch(e.type){case s.JSXSyntax.JSXIdentifier:t=e.name;break;case s.JSXSyntax.JSXNamespacedName:var i=e;t=h(i.namespace)+":"+h(i.name);break;case s.JSXSyntax.JSXMemberExpression:var n=e;t=h(n.object)+"."+h(n.property)}return t}l.TokenName[100]="JSXIdentifier",l.TokenName[101]="JSXText",t.JSXParser=function(e){function t(t,i,n){return e.call(this,t,i,n)||this}return n(t,e),t.prototype.parsePrimaryExpression=function(){return this.match("<")?this.parseJSXRoot():e.prototype.parsePrimaryExpression.call(this)},t.prototype.startJSX=function(){this.scanner.index=this.startMarker.index,this.scanner.lineNumber=this.startMarker.line,this.scanner.lineStart=this.startMarker.index-this.startMarker.column},t.prototype.finishJSX=function(){this.nextToken()},t.prototype.reenterJSX=function(){this.startJSX(),this.expectJSX("}"),this.config.tokens&&this.tokens.pop()},t.prototype.createJSXNode=function(){return this.collectComments(),{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},t.prototype.createJSXChildNode=function(){return{index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}},t.prototype.scanXHTMLEntity=function(e){for(var t="&",i=!0,n=!1,a=!1,s=!1;!this.scanner.eof()&&i&&!n;){var o=this.scanner.source[this.scanner.index];if(o===e)break;if(n=";"===o,t+=o,++this.scanner.index,!n)switch(t.length){case 2:a="#"===o;break;case 3:a&&(i=(s="x"===o)||r.Character.isDecimalDigit(o.charCodeAt(0)),a=a&&!s);break;default:i=(i=i&&!(a&&!r.Character.isDecimalDigit(o.charCodeAt(0))))&&!(s&&!r.Character.isHexDigit(o.charCodeAt(0)))}}if(i&&n&&t.length>2){var u=t.substr(1,t.length-2);a&&u.length>1?t=String.fromCharCode(parseInt(u.substr(1),10)):s&&u.length>2?t=String.fromCharCode(parseInt("0"+u.substr(1),16)):a||s||!c.XHTMLEntities[u]||(t=c.XHTMLEntities[u])}return t},t.prototype.lexJSX=function(){var e=this.scanner.source.charCodeAt(this.scanner.index);if(60===e||62===e||47===e||58===e||61===e||123===e||125===e){var t=this.scanner.source[this.scanner.index++];return{type:7,value:t,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index-1,end:this.scanner.index}}if(34===e||39===e){for(var i=this.scanner.index,n=this.scanner.source[this.scanner.index++],a="";!this.scanner.eof();){var s=this.scanner.source[this.scanner.index++];if(s===n)break;"&"===s?a+=this.scanXHTMLEntity(n):a+=s}return{type:8,value:a,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:i,end:this.scanner.index}}if(46===e){var o=this.scanner.source.charCodeAt(this.scanner.index+1),u=this.scanner.source.charCodeAt(this.scanner.index+2),t=46===o&&46===u?"...":".",i=this.scanner.index;return this.scanner.index+=t.length,{type:7,value:t,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:i,end:this.scanner.index}}if(96===e)return{type:10,value:"",lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:this.scanner.index,end:this.scanner.index};if(r.Character.isIdentifierStart(e)&&92!==e){var i=this.scanner.index;for(++this.scanner.index;!this.scanner.eof();){var s=this.scanner.source.charCodeAt(this.scanner.index);if(r.Character.isIdentifierPart(s)&&92!==s)++this.scanner.index;else if(45===s)++this.scanner.index;else break}return{type:100,value:this.scanner.source.slice(i,this.scanner.index),lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:i,end:this.scanner.index}}return this.scanner.lex()},t.prototype.nextJSXToken=function(){this.collectComments(),this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart;var e=this.lexJSX();return this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.config.tokens&&this.tokens.push(this.convertToken(e)),e},t.prototype.nextJSXText=function(){this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart;for(var e=this.scanner.index,t="";!this.scanner.eof();){var i=this.scanner.source[this.scanner.index];if("{"===i||"<"===i)break;++this.scanner.index,t+=i,r.Character.isLineTerminator(i.charCodeAt(0))&&(++this.scanner.lineNumber,"\r"===i&&"\n"===this.scanner.source[this.scanner.index]&&++this.scanner.index,this.scanner.lineStart=this.scanner.index)}this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart;var n={type:101,value:t,lineNumber:this.scanner.lineNumber,lineStart:this.scanner.lineStart,start:e,end:this.scanner.index};return t.length>0&&this.config.tokens&&this.tokens.push(this.convertToken(n)),n},t.prototype.peekJSXToken=function(){var e=this.scanner.saveState();this.scanner.scanComments();var t=this.lexJSX();return this.scanner.restoreState(e),t},t.prototype.expectJSX=function(e){var t=this.nextJSXToken();(7!==t.type||t.value!==e)&&this.throwUnexpectedToken(t)},t.prototype.matchJSX=function(e){var t=this.peekJSXToken();return 7===t.type&&t.value===e},t.prototype.parseJSXIdentifier=function(){var e=this.createJSXNode(),t=this.nextJSXToken();return 100!==t.type&&this.throwUnexpectedToken(t),this.finalize(e,new a.JSXIdentifier(t.value))},t.prototype.parseJSXElementName=function(){var e=this.createJSXNode(),t=this.parseJSXIdentifier();if(this.matchJSX(":")){var i=t;this.expectJSX(":");var n=this.parseJSXIdentifier();t=this.finalize(e,new a.JSXNamespacedName(i,n))}else if(this.matchJSX("."))for(;this.matchJSX(".");){var r=t;this.expectJSX(".");var s=this.parseJSXIdentifier();t=this.finalize(e,new a.JSXMemberExpression(r,s))}return t},t.prototype.parseJSXAttributeName=function(){var e,t=this.createJSXNode(),i=this.parseJSXIdentifier();if(this.matchJSX(":")){var n=i;this.expectJSX(":");var r=this.parseJSXIdentifier();e=this.finalize(t,new a.JSXNamespacedName(n,r))}else e=i;return e},t.prototype.parseJSXStringLiteralAttribute=function(){var e=this.createJSXNode(),t=this.nextJSXToken();8!==t.type&&this.throwUnexpectedToken(t);var i=this.getTokenRaw(t);return this.finalize(e,new o.Literal(t.value,i))},t.prototype.parseJSXExpressionAttribute=function(){var e=this.createJSXNode();this.expectJSX("{"),this.finishJSX(),this.match("}")&&this.tolerateError("JSX attributes must only be assigned a non-empty expression");var t=this.parseAssignmentExpression();return this.reenterJSX(),this.finalize(e,new a.JSXExpressionContainer(t))},t.prototype.parseJSXAttributeValue=function(){return this.matchJSX("{")?this.parseJSXExpressionAttribute():this.matchJSX("<")?this.parseJSXElement():this.parseJSXStringLiteralAttribute()},t.prototype.parseJSXNameValueAttribute=function(){var e=this.createJSXNode(),t=this.parseJSXAttributeName(),i=null;return this.matchJSX("=")&&(this.expectJSX("="),i=this.parseJSXAttributeValue()),this.finalize(e,new a.JSXAttribute(t,i))},t.prototype.parseJSXSpreadAttribute=function(){var e=this.createJSXNode();this.expectJSX("{"),this.expectJSX("..."),this.finishJSX();var t=this.parseAssignmentExpression();return this.reenterJSX(),this.finalize(e,new a.JSXSpreadAttribute(t))},t.prototype.parseJSXAttributes=function(){for(var e=[];!this.matchJSX("/")&&!this.matchJSX(">");){var t=this.matchJSX("{")?this.parseJSXSpreadAttribute():this.parseJSXNameValueAttribute();e.push(t)}return e},t.prototype.parseJSXOpeningElement=function(){var e=this.createJSXNode();this.expectJSX("<");var t=this.parseJSXElementName(),i=this.parseJSXAttributes(),n=this.matchJSX("/");return n&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(e,new a.JSXOpeningElement(t,n,i))},t.prototype.parseJSXBoundaryElement=function(){var e=this.createJSXNode();if(this.expectJSX("<"),this.matchJSX("/")){this.expectJSX("/");var t=this.parseJSXElementName();return this.expectJSX(">"),this.finalize(e,new a.JSXClosingElement(t))}var i=this.parseJSXElementName(),n=this.parseJSXAttributes(),r=this.matchJSX("/");return r&&this.expectJSX("/"),this.expectJSX(">"),this.finalize(e,new a.JSXOpeningElement(i,r,n))},t.prototype.parseJSXEmptyExpression=function(){var e=this.createJSXChildNode();return this.collectComments(),this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.finalize(e,new a.JSXEmptyExpression)},t.prototype.parseJSXExpressionContainer=function(){var e,t=this.createJSXNode();return this.expectJSX("{"),this.matchJSX("}")?(e=this.parseJSXEmptyExpression(),this.expectJSX("}")):(this.finishJSX(),e=this.parseAssignmentExpression(),this.reenterJSX()),this.finalize(t,new a.JSXExpressionContainer(e))},t.prototype.parseJSXChildren=function(){for(var e=[];!this.scanner.eof();){var t=this.createJSXChildNode(),i=this.nextJSXText();if(i.start<i.end){var n=this.getTokenRaw(i),r=this.finalize(t,new a.JSXText(i.value,n));e.push(r)}if("{"===this.scanner.source[this.scanner.index]){var s=this.parseJSXExpressionContainer();e.push(s)}else break}return e},t.prototype.parseComplexJSXElement=function(e){for(var t=[];!this.scanner.eof();){e.children=e.children.concat(this.parseJSXChildren());var i=this.createJSXChildNode(),n=this.parseJSXBoundaryElement();if(n.type===s.JSXSyntax.JSXOpeningElement){var r=n;if(r.selfClosing){var o=this.finalize(i,new a.JSXElement(r,[],null));e.children.push(o)}else t.push(e),e={node:i,opening:r,closing:null,children:[]}}if(n.type===s.JSXSyntax.JSXClosingElement){e.closing=n;var u=h(e.opening.name);if(u!==h(e.closing.name)&&this.tolerateError("Expected corresponding JSX closing tag for %0",u),t.length>0){var o=this.finalize(e.node,new a.JSXElement(e.opening,e.children,e.closing));(e=t[t.length-1]).children.push(o),t.pop()}else break}}return e},t.prototype.parseJSXElement=function(){var e=this.createJSXNode(),t=this.parseJSXOpeningElement(),i=[],n=null;if(!t.selfClosing){var r=this.parseComplexJSXElement({node:e,opening:t,closing:n,children:i});i=r.children,n=r.closing}return this.finalize(e,new a.JSXElement(t,i,n))},t.prototype.parseJSXRoot=function(){this.config.tokens&&this.tokens.pop(),this.startJSX();var e=this.parseJSXElement();return this.finishJSX(),e},t.prototype.isStartOfExpression=function(){return e.prototype.isStartOfExpression.call(this)||this.match("<")},t}(u.Parser)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,n=/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;t.Character={fromCodePoint:function(e){return e<65536?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10))+String.fromCharCode(56320+(e-65536&1023))},isWhiteSpace:function(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(e)>=0},isLineTerminator:function(e){return 10===e||13===e||8232===e||8233===e},isIdentifierStart:function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||92===e||e>=128&&i.test(t.Character.fromCodePoint(e))},isIdentifierPart:function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||92===e||e>=128&&n.test(t.Character.fromCodePoint(e))},isDecimalDigit:function(e){return e>=48&&e<=57},isHexDigit:function(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102},isOctalDigit:function(e){return e>=48&&e<=55}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(6);t.JSXClosingElement=function(){return function(e){this.type=n.JSXSyntax.JSXClosingElement,this.name=e}}(),t.JSXElement=function(){return function(e,t,i){this.type=n.JSXSyntax.JSXElement,this.openingElement=e,this.children=t,this.closingElement=i}}(),t.JSXEmptyExpression=function(){return function(){this.type=n.JSXSyntax.JSXEmptyExpression}}(),t.JSXExpressionContainer=function(){return function(e){this.type=n.JSXSyntax.JSXExpressionContainer,this.expression=e}}(),t.JSXIdentifier=function(){return function(e){this.type=n.JSXSyntax.JSXIdentifier,this.name=e}}(),t.JSXMemberExpression=function(){return function(e,t){this.type=n.JSXSyntax.JSXMemberExpression,this.object=e,this.property=t}}(),t.JSXAttribute=function(){return function(e,t){this.type=n.JSXSyntax.JSXAttribute,this.name=e,this.value=t}}(),t.JSXNamespacedName=function(){return function(e,t){this.type=n.JSXSyntax.JSXNamespacedName,this.namespace=e,this.name=t}}(),t.JSXOpeningElement=function(){return function(e,t,i){this.type=n.JSXSyntax.JSXOpeningElement,this.name=e,this.selfClosing=t,this.attributes=i}}(),t.JSXSpreadAttribute=function(){return function(e){this.type=n.JSXSyntax.JSXSpreadAttribute,this.argument=e}}(),t.JSXText=function(){return function(e,t){this.type=n.JSXSyntax.JSXText,this.value=e,this.raw=t}}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JSXSyntax={JSXAttribute:"JSXAttribute",JSXClosingElement:"JSXClosingElement",JSXElement:"JSXElement",JSXEmptyExpression:"JSXEmptyExpression",JSXExpressionContainer:"JSXExpressionContainer",JSXIdentifier:"JSXIdentifier",JSXMemberExpression:"JSXMemberExpression",JSXNamespacedName:"JSXNamespacedName",JSXOpeningElement:"JSXOpeningElement",JSXSpreadAttribute:"JSXSpreadAttribute",JSXText:"JSXText"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(2);t.ArrayExpression=function(){return function(e){this.type=n.Syntax.ArrayExpression,this.elements=e}}(),t.ArrayPattern=function(){return function(e){this.type=n.Syntax.ArrayPattern,this.elements=e}}(),t.ArrowFunctionExpression=function(){return function(e,t,i){this.type=n.Syntax.ArrowFunctionExpression,this.id=null,this.params=e,this.body=t,this.generator=!1,this.expression=i,this.async=!1}}(),t.AssignmentExpression=function(){return function(e,t,i){this.type=n.Syntax.AssignmentExpression,this.operator=e,this.left=t,this.right=i}}(),t.AssignmentPattern=function(){return function(e,t){this.type=n.Syntax.AssignmentPattern,this.left=e,this.right=t}}(),t.AsyncArrowFunctionExpression=function(){return function(e,t,i){this.type=n.Syntax.ArrowFunctionExpression,this.id=null,this.params=e,this.body=t,this.generator=!1,this.expression=i,this.async=!0}}(),t.AsyncFunctionDeclaration=function(){return function(e,t,i){this.type=n.Syntax.FunctionDeclaration,this.id=e,this.params=t,this.body=i,this.generator=!1,this.expression=!1,this.async=!0}}(),t.AsyncFunctionExpression=function(){return function(e,t,i){this.type=n.Syntax.FunctionExpression,this.id=e,this.params=t,this.body=i,this.generator=!1,this.expression=!1,this.async=!0}}(),t.AwaitExpression=function(){return function(e){this.type=n.Syntax.AwaitExpression,this.argument=e}}(),t.BinaryExpression=function(){return function(e,t,i){var r="||"===e||"&&"===e;this.type=r?n.Syntax.LogicalExpression:n.Syntax.BinaryExpression,this.operator=e,this.left=t,this.right=i}}(),t.BlockStatement=function(){return function(e){this.type=n.Syntax.BlockStatement,this.body=e}}(),t.BreakStatement=function(){return function(e){this.type=n.Syntax.BreakStatement,this.label=e}}(),t.CallExpression=function(){return function(e,t){this.type=n.Syntax.CallExpression,this.callee=e,this.arguments=t}}(),t.CatchClause=function(){return function(e,t){this.type=n.Syntax.CatchClause,this.param=e,this.body=t}}(),t.ClassBody=function(){return function(e){this.type=n.Syntax.ClassBody,this.body=e}}(),t.ClassDeclaration=function(){return function(e,t,i){this.type=n.Syntax.ClassDeclaration,this.id=e,this.superClass=t,this.body=i}}(),t.ClassExpression=function(){return function(e,t,i){this.type=n.Syntax.ClassExpression,this.id=e,this.superClass=t,this.body=i}}(),t.ComputedMemberExpression=function(){return function(e,t){this.type=n.Syntax.MemberExpression,this.computed=!0,this.object=e,this.property=t}}(),t.ConditionalExpression=function(){return function(e,t,i){this.type=n.Syntax.ConditionalExpression,this.test=e,this.consequent=t,this.alternate=i}}(),t.ContinueStatement=function(){return function(e){this.type=n.Syntax.ContinueStatement,this.label=e}}(),t.DebuggerStatement=function(){return function(){this.type=n.Syntax.DebuggerStatement}}(),t.Directive=function(){return function(e,t){this.type=n.Syntax.ExpressionStatement,this.expression=e,this.directive=t}}(),t.DoWhileStatement=function(){return function(e,t){this.type=n.Syntax.DoWhileStatement,this.body=e,this.test=t}}(),t.EmptyStatement=function(){return function(){this.type=n.Syntax.EmptyStatement}}(),t.ExportAllDeclaration=function(){return function(e){this.type=n.Syntax.ExportAllDeclaration,this.source=e}}(),t.ExportDefaultDeclaration=function(){return function(e){this.type=n.Syntax.ExportDefaultDeclaration,this.declaration=e}}(),t.ExportNamedDeclaration=function(){return function(e,t,i){this.type=n.Syntax.ExportNamedDeclaration,this.declaration=e,this.specifiers=t,this.source=i}}(),t.ExportSpecifier=function(){return function(e,t){this.type=n.Syntax.ExportSpecifier,this.exported=t,this.local=e}}(),t.ExpressionStatement=function(){return function(e){this.type=n.Syntax.ExpressionStatement,this.expression=e}}(),t.ForInStatement=function(){return function(e,t,i){this.type=n.Syntax.ForInStatement,this.left=e,this.right=t,this.body=i,this.each=!1}}(),t.ForOfStatement=function(){return function(e,t,i){this.type=n.Syntax.ForOfStatement,this.left=e,this.right=t,this.body=i}}(),t.ForStatement=function(){return function(e,t,i,r){this.type=n.Syntax.ForStatement,this.init=e,this.test=t,this.update=i,this.body=r}}(),t.FunctionDeclaration=function(){return function(e,t,i,r){this.type=n.Syntax.FunctionDeclaration,this.id=e,this.params=t,this.body=i,this.generator=r,this.expression=!1,this.async=!1}}(),t.FunctionExpression=function(){return function(e,t,i,r){this.type=n.Syntax.FunctionExpression,this.id=e,this.params=t,this.body=i,this.generator=r,this.expression=!1,this.async=!1}}(),t.Identifier=function(){return function(e){this.type=n.Syntax.Identifier,this.name=e}}(),t.IfStatement=function(){return function(e,t,i){this.type=n.Syntax.IfStatement,this.test=e,this.consequent=t,this.alternate=i}}(),t.ImportDeclaration=function(){return function(e,t){this.type=n.Syntax.ImportDeclaration,this.specifiers=e,this.source=t}}(),t.ImportDefaultSpecifier=function(){return function(e){this.type=n.Syntax.ImportDefaultSpecifier,this.local=e}}(),t.ImportNamespaceSpecifier=function(){return function(e){this.type=n.Syntax.ImportNamespaceSpecifier,this.local=e}}(),t.ImportSpecifier=function(){return function(e,t){this.type=n.Syntax.ImportSpecifier,this.local=e,this.imported=t}}(),t.LabeledStatement=function(){return function(e,t){this.type=n.Syntax.LabeledStatement,this.label=e,this.body=t}}(),t.Literal=function(){return function(e,t){this.type=n.Syntax.Literal,this.value=e,this.raw=t}}(),t.MetaProperty=function(){return function(e,t){this.type=n.Syntax.MetaProperty,this.meta=e,this.property=t}}(),t.MethodDefinition=function(){return function(e,t,i,r,a){this.type=n.Syntax.MethodDefinition,this.key=e,this.computed=t,this.value=i,this.kind=r,this.static=a}}(),t.Module=function(){return function(e){this.type=n.Syntax.Program,this.body=e,this.sourceType="module"}}(),t.NewExpression=function(){return function(e,t){this.type=n.Syntax.NewExpression,this.callee=e,this.arguments=t}}(),t.ObjectExpression=function(){return function(e){this.type=n.Syntax.ObjectExpression,this.properties=e}}(),t.ObjectPattern=function(){return function(e){this.type=n.Syntax.ObjectPattern,this.properties=e}}(),t.Property=function(){return function(e,t,i,r,a,s){this.type=n.Syntax.Property,this.key=t,this.computed=i,this.value=r,this.kind=e,this.method=a,this.shorthand=s}}(),t.RegexLiteral=function(){return function(e,t,i,r){this.type=n.Syntax.Literal,this.value=e,this.raw=t,this.regex={pattern:i,flags:r}}}(),t.RestElement=function(){return function(e){this.type=n.Syntax.RestElement,this.argument=e}}(),t.ReturnStatement=function(){return function(e){this.type=n.Syntax.ReturnStatement,this.argument=e}}(),t.Script=function(){return function(e){this.type=n.Syntax.Program,this.body=e,this.sourceType="script"}}(),t.SequenceExpression=function(){return function(e){this.type=n.Syntax.SequenceExpression,this.expressions=e}}(),t.SpreadElement=function(){return function(e){this.type=n.Syntax.SpreadElement,this.argument=e}}(),t.StaticMemberExpression=function(){return function(e,t){this.type=n.Syntax.MemberExpression,this.computed=!1,this.object=e,this.property=t}}(),t.Super=function(){return function(){this.type=n.Syntax.Super}}(),t.SwitchCase=function(){return function(e,t){this.type=n.Syntax.SwitchCase,this.test=e,this.consequent=t}}(),t.SwitchStatement=function(){return function(e,t){this.type=n.Syntax.SwitchStatement,this.discriminant=e,this.cases=t}}(),t.TaggedTemplateExpression=function(){return function(e,t){this.type=n.Syntax.TaggedTemplateExpression,this.tag=e,this.quasi=t}}(),t.TemplateElement=function(){return function(e,t){this.type=n.Syntax.TemplateElement,this.value=e,this.tail=t}}(),t.TemplateLiteral=function(){return function(e,t){this.type=n.Syntax.TemplateLiteral,this.quasis=e,this.expressions=t}}(),t.ThisExpression=function(){return function(){this.type=n.Syntax.ThisExpression}}(),t.ThrowStatement=function(){return function(e){this.type=n.Syntax.ThrowStatement,this.argument=e}}(),t.TryStatement=function(){return function(e,t,i){this.type=n.Syntax.TryStatement,this.block=e,this.handler=t,this.finalizer=i}}(),t.UnaryExpression=function(){return function(e,t){this.type=n.Syntax.UnaryExpression,this.operator=e,this.argument=t,this.prefix=!0}}(),t.UpdateExpression=function(){return function(e,t,i){this.type=n.Syntax.UpdateExpression,this.operator=e,this.argument=t,this.prefix=i}}(),t.VariableDeclaration=function(){return function(e,t){this.type=n.Syntax.VariableDeclaration,this.declarations=e,this.kind=t}}(),t.VariableDeclarator=function(){return function(e,t){this.type=n.Syntax.VariableDeclarator,this.id=e,this.init=t}}(),t.WhileStatement=function(){return function(e,t){this.type=n.Syntax.WhileStatement,this.test=e,this.body=t}}(),t.WithStatement=function(){return function(e,t){this.type=n.Syntax.WithStatement,this.object=e,this.body=t}}(),t.YieldExpression=function(){return function(e,t){this.type=n.Syntax.YieldExpression,this.argument=e,this.delegate=t}}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9),r=i(10),a=i(11),s=i(7),o=i(12),u=i(2),l=i(13),c="ArrowParameterPlaceHolder";t.Parser=function(){function e(e,t,i){void 0===t&&(t={}),this.config={range:"boolean"==typeof t.range&&t.range,loc:"boolean"==typeof t.loc&&t.loc,source:null,tokens:"boolean"==typeof t.tokens&&t.tokens,comment:"boolean"==typeof t.comment&&t.comment,tolerant:"boolean"==typeof t.tolerant&&t.tolerant},this.config.loc&&t.source&&null!==t.source&&(this.config.source=String(t.source)),this.delegate=i,this.errorHandler=new r.ErrorHandler,this.errorHandler.tolerant=this.config.tolerant,this.scanner=new o.Scanner(e,this.errorHandler),this.scanner.trackComment=this.config.comment,this.operatorPrecedence={")":0,";":0,",":0,"=":0,"]":0,"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":11,"/":11,"%":11},this.lookahead={type:2,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0},this.hasLineTerminator=!1,this.context={isModule:!1,await:!1,allowIn:!0,allowStrictDirective:!0,allowYield:!0,firstCoverInitializedNameError:null,isAssignmentTarget:!1,isBindingElement:!1,inFunctionBody:!1,inIteration:!1,inSwitch:!1,labelSet:{},strict:!1},this.tokens=[],this.startMarker={index:0,line:this.scanner.lineNumber,column:0},this.lastMarker={index:0,line:this.scanner.lineNumber,column:0},this.nextToken(),this.lastMarker={index:this.scanner.index,line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}return e.prototype.throwError=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var r=Array.prototype.slice.call(arguments,1),a=e.replace(/%(\d)/g,function(e,t){return n.assert(t<r.length,"Message reference must be in range"),r[t]}),s=this.lastMarker.index,o=this.lastMarker.line,u=this.lastMarker.column+1;throw this.errorHandler.createError(s,o,u,a)},e.prototype.tolerateError=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var r=Array.prototype.slice.call(arguments,1),a=e.replace(/%(\d)/g,function(e,t){return n.assert(t<r.length,"Message reference must be in range"),r[t]}),s=this.lastMarker.index,o=this.scanner.lineNumber,u=this.lastMarker.column+1;this.errorHandler.tolerateError(s,o,u,a)},e.prototype.unexpectedTokenError=function(e,t){var i,n=t||a.Messages.UnexpectedToken;if(e?(!t&&(n=2===e.type?a.Messages.UnexpectedEOS:3===e.type?a.Messages.UnexpectedIdentifier:6===e.type?a.Messages.UnexpectedNumber:8===e.type?a.Messages.UnexpectedString:10===e.type?a.Messages.UnexpectedTemplate:a.Messages.UnexpectedToken,4===e.type&&(this.scanner.isFutureReservedWord(e.value)?n=a.Messages.UnexpectedReserved:this.context.strict&&this.scanner.isStrictModeReservedWord(e.value)&&(n=a.Messages.StrictReservedWord))),i=e.value):i="ILLEGAL",n=n.replace("%0",i),e&&"number"==typeof e.lineNumber){var r=e.start,s=e.lineNumber,o=this.lastMarker.index-this.lastMarker.column,u=e.start-o+1;return this.errorHandler.createError(r,s,u,n)}var r=this.lastMarker.index,s=this.lastMarker.line,u=this.lastMarker.column+1;return this.errorHandler.createError(r,s,u,n)},e.prototype.throwUnexpectedToken=function(e,t){throw this.unexpectedTokenError(e,t)},e.prototype.tolerateUnexpectedToken=function(e,t){this.errorHandler.tolerate(this.unexpectedTokenError(e,t))},e.prototype.collectComments=function(){if(this.config.comment){var e=this.scanner.scanComments();if(e.length>0&&this.delegate)for(var t=0;t<e.length;++t){var i=e[t],n=void 0;n={type:i.multiLine?"BlockComment":"LineComment",value:this.scanner.source.slice(i.slice[0],i.slice[1])},this.config.range&&(n.range=i.range),this.config.loc&&(n.loc=i.loc);var r={start:{line:i.loc.start.line,column:i.loc.start.column,offset:i.range[0]},end:{line:i.loc.end.line,column:i.loc.end.column,offset:i.range[1]}};this.delegate(n,r)}}else this.scanner.scanComments()},e.prototype.getTokenRaw=function(e){return this.scanner.source.slice(e.start,e.end)},e.prototype.convertToken=function(e){var t={type:l.TokenName[e.type],value:this.getTokenRaw(e)};return this.config.range&&(t.range=[e.start,e.end]),this.config.loc&&(t.loc={start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}}),9===e.type&&(t.regex={pattern:e.pattern,flags:e.flags}),t},e.prototype.nextToken=function(){var e=this.lookahead;this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,this.lastMarker.column=this.scanner.index-this.scanner.lineStart,this.collectComments(),this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart);var t=this.scanner.lex();return this.hasLineTerminator=e.lineNumber!==t.lineNumber,t&&this.context.strict&&3===t.type&&this.scanner.isStrictModeReservedWord(t.value)&&(t.type=4),this.lookahead=t,this.config.tokens&&2!==t.type&&this.tokens.push(this.convertToken(t)),e},e.prototype.nextRegexToken=function(){this.collectComments();var e=this.scanner.scanRegExp();return this.config.tokens&&(this.tokens.pop(),this.tokens.push(this.convertToken(e))),this.lookahead=e,this.nextToken(),e},e.prototype.createNode=function(){return{index:this.startMarker.index,line:this.startMarker.line,column:this.startMarker.column}},e.prototype.startNode=function(e,t){void 0===t&&(t=0);var i=e.start-e.lineStart,n=e.lineNumber;return i<0&&(i+=t,n--),{index:e.start,line:n,column:i}},e.prototype.finalize=function(e,t){if(this.config.range&&(t.range=[e.index,this.lastMarker.index]),this.config.loc&&(t.loc={start:{line:e.line,column:e.column},end:{line:this.lastMarker.line,column:this.lastMarker.column}},this.config.source&&(t.loc.source=this.config.source)),this.delegate){var i={start:{line:e.line,column:e.column,offset:e.index},end:{line:this.lastMarker.line,column:this.lastMarker.column,offset:this.lastMarker.index}};this.delegate(t,i)}return t},e.prototype.expect=function(e){var t=this.nextToken();(7!==t.type||t.value!==e)&&this.throwUnexpectedToken(t)},e.prototype.expectCommaSeparator=function(){if(this.config.tolerant){var e=this.lookahead;7===e.type&&","===e.value?this.nextToken():7===e.type&&";"===e.value?(this.nextToken(),this.tolerateUnexpectedToken(e)):this.tolerateUnexpectedToken(e,a.Messages.UnexpectedToken)}else this.expect(",")},e.prototype.expectKeyword=function(e){var t=this.nextToken();(4!==t.type||t.value!==e)&&this.throwUnexpectedToken(t)},e.prototype.match=function(e){return 7===this.lookahead.type&&this.lookahead.value===e},e.prototype.matchKeyword=function(e){return 4===this.lookahead.type&&this.lookahead.value===e},e.prototype.matchContextualKeyword=function(e){return 3===this.lookahead.type&&this.lookahead.value===e},e.prototype.matchAssign=function(){if(7!==this.lookahead.type)return!1;var e=this.lookahead.value;return"="===e||"*="===e||"**="===e||"/="===e||"%="===e||"+="===e||"-="===e||"<<="===e||">>="===e||">>>="===e||"&="===e||"^="===e||"|="===e},e.prototype.isolateCoverGrammar=function(e){var t=this.context.isBindingElement,i=this.context.isAssignmentTarget,n=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;var r=e.call(this);return null!==this.context.firstCoverInitializedNameError&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),this.context.isBindingElement=t,this.context.isAssignmentTarget=i,this.context.firstCoverInitializedNameError=n,r},e.prototype.inheritCoverGrammar=function(e){var t=this.context.isBindingElement,i=this.context.isAssignmentTarget,n=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0,this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null;var r=e.call(this);return this.context.isBindingElement=this.context.isBindingElement&&t,this.context.isAssignmentTarget=this.context.isAssignmentTarget&&i,this.context.firstCoverInitializedNameError=n||this.context.firstCoverInitializedNameError,r},e.prototype.consumeSemicolon=function(){this.match(";")?this.nextToken():this.hasLineTerminator||(2===this.lookahead.type||this.match("}")||this.throwUnexpectedToken(this.lookahead),this.lastMarker.index=this.startMarker.index,this.lastMarker.line=this.startMarker.line,this.lastMarker.column=this.startMarker.column)},e.prototype.parsePrimaryExpression=function(){var e,t,i,n=this.createNode();switch(this.lookahead.type){case 3:(this.context.isModule||this.context.await)&&"await"===this.lookahead.value&&this.tolerateUnexpectedToken(this.lookahead),e=this.matchAsyncFunction()?this.parseFunctionExpression():this.finalize(n,new s.Identifier(this.nextToken().value));break;case 6:case 8:this.context.strict&&this.lookahead.octal&&this.tolerateUnexpectedToken(this.lookahead,a.Messages.StrictOctalLiteral),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,t=this.nextToken(),i=this.getTokenRaw(t),e=this.finalize(n,new s.Literal(t.value,i));break;case 1:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,t=this.nextToken(),i=this.getTokenRaw(t),e=this.finalize(n,new s.Literal("true"===t.value,i));break;case 5:this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,t=this.nextToken(),i=this.getTokenRaw(t),e=this.finalize(n,new s.Literal(null,i));break;case 10:e=this.parseTemplateLiteral();break;case 7:switch(this.lookahead.value){case"(":this.context.isBindingElement=!1,e=this.inheritCoverGrammar(this.parseGroupExpression);break;case"[":e=this.inheritCoverGrammar(this.parseArrayInitializer);break;case"{":e=this.inheritCoverGrammar(this.parseObjectInitializer);break;case"/":case"/=":this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.scanner.index=this.startMarker.index,t=this.nextRegexToken(),i=this.getTokenRaw(t),e=this.finalize(n,new s.RegexLiteral(t.regex,i,t.pattern,t.flags));break;default:e=this.throwUnexpectedToken(this.nextToken())}break;case 4:!this.context.strict&&this.context.allowYield&&this.matchKeyword("yield")?e=this.parseIdentifierName():!this.context.strict&&this.matchKeyword("let")?e=this.finalize(n,new s.Identifier(this.nextToken().value)):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.matchKeyword("function")?e=this.parseFunctionExpression():this.matchKeyword("this")?(this.nextToken(),e=this.finalize(n,new s.ThisExpression)):e=this.matchKeyword("class")?this.parseClassExpression():this.throwUnexpectedToken(this.nextToken()));break;default:e=this.throwUnexpectedToken(this.nextToken())}return e},e.prototype.parseSpreadElement=function(){var e=this.createNode();this.expect("...");var t=this.inheritCoverGrammar(this.parseAssignmentExpression);return this.finalize(e,new s.SpreadElement(t))},e.prototype.parseArrayInitializer=function(){var e=this.createNode(),t=[];for(this.expect("[");!this.match("]");)if(this.match(","))this.nextToken(),t.push(null);else if(this.match("...")){var i=this.parseSpreadElement();this.match("]")||(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,this.expect(",")),t.push(i)}else t.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.match("]")||this.expect(",");return this.expect("]"),this.finalize(e,new s.ArrayExpression(t))},e.prototype.parsePropertyMethod=function(e){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var t=this.context.strict,i=this.context.allowStrictDirective;this.context.allowStrictDirective=e.simple;var n=this.isolateCoverGrammar(this.parseFunctionSourceElements);return this.context.strict&&e.firstRestricted&&this.tolerateUnexpectedToken(e.firstRestricted,e.message),this.context.strict&&e.stricted&&this.tolerateUnexpectedToken(e.stricted,e.message),this.context.strict=t,this.context.allowStrictDirective=i,n},e.prototype.parsePropertyMethodFunction=function(){var e=!1,t=this.createNode(),i=this.context.allowYield;this.context.allowYield=!0;var n=this.parseFormalParameters(),r=this.parsePropertyMethod(n);return this.context.allowYield=i,this.finalize(t,new s.FunctionExpression(null,n.params,r,e))},e.prototype.parsePropertyMethodAsyncFunction=function(){var e=this.createNode(),t=this.context.allowYield,i=this.context.await;this.context.allowYield=!1,this.context.await=!0;var n=this.parseFormalParameters(),r=this.parsePropertyMethod(n);return this.context.allowYield=t,this.context.await=i,this.finalize(e,new s.AsyncFunctionExpression(null,n.params,r))},e.prototype.parseObjectPropertyKey=function(){var e,t=this.createNode(),i=this.nextToken();switch(i.type){case 8:case 6:this.context.strict&&i.octal&&this.tolerateUnexpectedToken(i,a.Messages.StrictOctalLiteral);var n=this.getTokenRaw(i);e=this.finalize(t,new s.Literal(i.value,n));break;case 3:case 1:case 5:case 4:e=this.finalize(t,new s.Identifier(i.value));break;case 7:"["===i.value?(e=this.isolateCoverGrammar(this.parseAssignmentExpression),this.expect("]")):e=this.throwUnexpectedToken(i);break;default:e=this.throwUnexpectedToken(i)}return e},e.prototype.isPropertyKey=function(e,t){return e.type===u.Syntax.Identifier&&e.name===t||e.type===u.Syntax.Literal&&e.value===t},e.prototype.parseObjectProperty=function(e){var t,i=this.createNode(),n=this.lookahead,r=null,o=null,u=!1,l=!1,c=!1,h=!1;if(3===n.type){var d=n.value;this.nextToken(),u=this.match("["),r=(h=!this.hasLineTerminator&&"async"===d&&!this.match(":")&&!this.match("(")&&!this.match("*")&&!this.match(","))?this.parseObjectPropertyKey():this.finalize(i,new s.Identifier(d))}else this.match("*")?this.nextToken():(u=this.match("["),r=this.parseObjectPropertyKey());var p=this.qualifiedPropertyName(this.lookahead);if(3===n.type&&!h&&"get"===n.value&&p)t="get",u=this.match("["),r=this.parseObjectPropertyKey(),this.context.allowYield=!1,o=this.parseGetterMethod();else if(3===n.type&&!h&&"set"===n.value&&p)t="set",u=this.match("["),r=this.parseObjectPropertyKey(),o=this.parseSetterMethod();else if(7===n.type&&"*"===n.value&&p)t="init",u=this.match("["),r=this.parseObjectPropertyKey(),o=this.parseGeneratorMethod(),l=!0;else if(r||this.throwUnexpectedToken(this.lookahead),t="init",this.match(":")&&!h)!u&&this.isPropertyKey(r,"__proto__")&&(e.value&&this.tolerateError(a.Messages.DuplicateProtoProperty),e.value=!0),this.nextToken(),o=this.inheritCoverGrammar(this.parseAssignmentExpression);else if(this.match("("))o=h?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),l=!0;else if(3===n.type){var d=this.finalize(i,new s.Identifier(n.value));if(this.match("=")){this.context.firstCoverInitializedNameError=this.lookahead,this.nextToken(),c=!0;var m=this.isolateCoverGrammar(this.parseAssignmentExpression);o=this.finalize(i,new s.AssignmentPattern(d,m))}else c=!0,o=d}else this.throwUnexpectedToken(this.nextToken());return this.finalize(i,new s.Property(t,r,u,o,l,c))},e.prototype.parseObjectInitializer=function(){var e=this.createNode();this.expect("{");for(var t=[],i={value:!1};!this.match("}");)t.push(this.parseObjectProperty(i)),this.match("}")||this.expectCommaSeparator();return this.expect("}"),this.finalize(e,new s.ObjectExpression(t))},e.prototype.parseTemplateHead=function(){n.assert(this.lookahead.head,"Template literal must start with a template head");var e=this.createNode(),t=this.nextToken(),i=t.value,r=t.cooked;return this.finalize(e,new s.TemplateElement({raw:i,cooked:r},t.tail))},e.prototype.parseTemplateElement=function(){10!==this.lookahead.type&&this.throwUnexpectedToken();var e=this.createNode(),t=this.nextToken(),i=t.value,n=t.cooked;return this.finalize(e,new s.TemplateElement({raw:i,cooked:n},t.tail))},e.prototype.parseTemplateLiteral=function(){var e=this.createNode(),t=[],i=[],n=this.parseTemplateHead();for(i.push(n);!n.tail;)t.push(this.parseExpression()),n=this.parseTemplateElement(),i.push(n);return this.finalize(e,new s.TemplateLiteral(i,t))},e.prototype.reinterpretExpressionAsPattern=function(e){switch(e.type){case u.Syntax.Identifier:case u.Syntax.MemberExpression:case u.Syntax.RestElement:case u.Syntax.AssignmentPattern:break;case u.Syntax.SpreadElement:e.type=u.Syntax.RestElement,this.reinterpretExpressionAsPattern(e.argument);break;case u.Syntax.ArrayExpression:e.type=u.Syntax.ArrayPattern;for(var t=0;t<e.elements.length;t++)null!==e.elements[t]&&this.reinterpretExpressionAsPattern(e.elements[t]);break;case u.Syntax.ObjectExpression:e.type=u.Syntax.ObjectPattern;for(var t=0;t<e.properties.length;t++)this.reinterpretExpressionAsPattern(e.properties[t].value);break;case u.Syntax.AssignmentExpression:e.type=u.Syntax.AssignmentPattern,delete e.operator,this.reinterpretExpressionAsPattern(e.left)}},e.prototype.parseGroupExpression=function(){var e;if(this.expect("("),this.match(")"))this.nextToken(),this.match("=>")||this.expect("=>"),e={type:c,params:[],async:!1};else{var t=this.lookahead,i=[];if(this.match("..."))e=this.parseRestElement(i),this.expect(")"),this.match("=>")||this.expect("=>"),e={type:c,params:[e],async:!1};else{var n=!1;if(this.context.isBindingElement=!0,e=this.inheritCoverGrammar(this.parseAssignmentExpression),this.match(",")){var r=[];for(this.context.isAssignmentTarget=!1,r.push(e);2!==this.lookahead.type&&this.match(",");){if(this.nextToken(),this.match(")")){this.nextToken();for(var a=0;a<r.length;a++)this.reinterpretExpressionAsPattern(r[a]);n=!0,e={type:c,params:r,async:!1}}else if(this.match("...")){this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),r.push(this.parseRestElement(i)),this.expect(")"),this.match("=>")||this.expect("=>"),this.context.isBindingElement=!1;for(var a=0;a<r.length;a++)this.reinterpretExpressionAsPattern(r[a]);n=!0,e={type:c,params:r,async:!1}}else r.push(this.inheritCoverGrammar(this.parseAssignmentExpression));if(n)break}n||(e=this.finalize(this.startNode(t),new s.SequenceExpression(r)))}if(!n){if(this.expect(")"),this.match("=>")&&(e.type===u.Syntax.Identifier&&"yield"===e.name&&(n=!0,e={type:c,params:[e],async:!1}),!n)){if(this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),e.type===u.Syntax.SequenceExpression)for(var a=0;a<e.expressions.length;a++)this.reinterpretExpressionAsPattern(e.expressions[a]);else this.reinterpretExpressionAsPattern(e);e={type:c,params:e.type===u.Syntax.SequenceExpression?e.expressions:[e],async:!1}}this.context.isBindingElement=!1}}}return e},e.prototype.parseArguments=function(){this.expect("(");var e=[];if(!this.match(")"))for(;;){var t=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAssignmentExpression);if(e.push(t),this.match(")")||(this.expectCommaSeparator(),this.match(")")))break}return this.expect(")"),e},e.prototype.isIdentifierName=function(e){return 3===e.type||4===e.type||1===e.type||5===e.type},e.prototype.parseIdentifierName=function(){var e=this.createNode(),t=this.nextToken();return this.isIdentifierName(t)||this.throwUnexpectedToken(t),this.finalize(e,new s.Identifier(t.value))},e.prototype.parseNewExpression=function(){var e,t=this.createNode(),i=this.parseIdentifierName();if(n.assert("new"===i.name,"New expression must start with `new`"),this.match("."))if(this.nextToken(),3===this.lookahead.type&&this.context.inFunctionBody&&"target"===this.lookahead.value){var r=this.parseIdentifierName();e=new s.MetaProperty(i,r)}else this.throwUnexpectedToken(this.lookahead);else{var a=this.isolateCoverGrammar(this.parseLeftHandSideExpression),o=this.match("(")?this.parseArguments():[];e=new s.NewExpression(a,o),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return this.finalize(t,e)},e.prototype.parseAsyncArgument=function(){var e=this.parseAssignmentExpression();return this.context.firstCoverInitializedNameError=null,e},e.prototype.parseAsyncArguments=function(){this.expect("(");var e=[];if(!this.match(")"))for(;;){var t=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAsyncArgument);if(e.push(t),this.match(")")||(this.expectCommaSeparator(),this.match(")")))break}return this.expect(")"),e},e.prototype.parseLeftHandSideExpressionAllowCall=function(){var e,t=this.lookahead,i=this.matchContextualKeyword("async"),n=this.context.allowIn;for(this.context.allowIn=!0,this.matchKeyword("super")&&this.context.inFunctionBody?(e=this.createNode(),this.nextToken(),e=this.finalize(e,new s.Super),this.match("(")||this.match(".")||this.match("[")||this.throwUnexpectedToken(this.lookahead)):e=this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");var r=this.parseIdentifierName();e=this.finalize(this.startNode(t),new s.StaticMemberExpression(e,r))}else if(this.match("(")){var a=i&&t.lineNumber===this.lookahead.lineNumber;this.context.isBindingElement=!1,this.context.isAssignmentTarget=!1;var o=a?this.parseAsyncArguments():this.parseArguments();if(e=this.finalize(this.startNode(t),new s.CallExpression(e,o)),a&&this.match("=>")){for(var u=0;u<o.length;++u)this.reinterpretExpressionAsPattern(o[u]);e={type:c,params:o,async:!0}}}else if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");var r=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),e=this.finalize(this.startNode(t),new s.ComputedMemberExpression(e,r))}else if(10===this.lookahead.type&&this.lookahead.head){var l=this.parseTemplateLiteral();e=this.finalize(this.startNode(t),new s.TaggedTemplateExpression(e,l))}else break;return this.context.allowIn=n,e},e.prototype.parseSuper=function(){var e=this.createNode();return this.expectKeyword("super"),this.match("[")||this.match(".")||this.throwUnexpectedToken(this.lookahead),this.finalize(e,new s.Super)},e.prototype.parseLeftHandSideExpression=function(){n.assert(this.context.allowIn,"callee of new expression always allow in keyword.");for(var e=this.startNode(this.lookahead),t=this.matchKeyword("super")&&this.context.inFunctionBody?this.parseSuper():this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match("[")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("[");var i=this.isolateCoverGrammar(this.parseExpression);this.expect("]"),t=this.finalize(e,new s.ComputedMemberExpression(t,i))}else if(this.match(".")){this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect(".");var i=this.parseIdentifierName();t=this.finalize(e,new s.StaticMemberExpression(t,i))}else if(10===this.lookahead.type&&this.lookahead.head){var r=this.parseTemplateLiteral();t=this.finalize(e,new s.TaggedTemplateExpression(t,r))}else break;return t},e.prototype.parseUpdateExpression=function(){var e,t=this.lookahead;if(this.match("++")||this.match("--")){var i=this.startNode(t),n=this.nextToken();e=this.inheritCoverGrammar(this.parseUnaryExpression),this.context.strict&&e.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(e.name)&&this.tolerateError(a.Messages.StrictLHSPrefix),this.context.isAssignmentTarget||this.tolerateError(a.Messages.InvalidLHSInAssignment);var r=!0;e=this.finalize(i,new s.UpdateExpression(n.value,e,r)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else if(e=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),!this.hasLineTerminator&&7===this.lookahead.type&&(this.match("++")||this.match("--"))){this.context.strict&&e.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(e.name)&&this.tolerateError(a.Messages.StrictLHSPostfix),this.context.isAssignmentTarget||this.tolerateError(a.Messages.InvalidLHSInAssignment),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var o=this.nextToken().value,r=!1;e=this.finalize(this.startNode(t),new s.UpdateExpression(o,e,r))}return e},e.prototype.parseAwaitExpression=function(){var e=this.createNode();this.nextToken();var t=this.parseUnaryExpression();return this.finalize(e,new s.AwaitExpression(t))},e.prototype.parseUnaryExpression=function(){var e;if(this.match("+")||this.match("-")||this.match("~")||this.match("!")||this.matchKeyword("delete")||this.matchKeyword("void")||this.matchKeyword("typeof")){var t=this.startNode(this.lookahead),i=this.nextToken();e=this.inheritCoverGrammar(this.parseUnaryExpression),e=this.finalize(t,new s.UnaryExpression(i.value,e)),this.context.strict&&"delete"===e.operator&&e.argument.type===u.Syntax.Identifier&&this.tolerateError(a.Messages.StrictDelete),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}else e=this.context.await&&this.matchContextualKeyword("await")?this.parseAwaitExpression():this.parseUpdateExpression();return e},e.prototype.parseExponentiationExpression=function(){var e=this.lookahead,t=this.inheritCoverGrammar(this.parseUnaryExpression);if(t.type!==u.Syntax.UnaryExpression&&this.match("**")){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var i=t,n=this.isolateCoverGrammar(this.parseExponentiationExpression);t=this.finalize(this.startNode(e),new s.BinaryExpression("**",i,n))}return t},e.prototype.binaryPrecedence=function(e){var t=e.value;return 7===e.type?this.operatorPrecedence[t]||0:4===e.type&&("instanceof"===t||this.context.allowIn&&"in"===t)?7:0},e.prototype.parseBinaryExpression=function(){var e=this.lookahead,t=this.inheritCoverGrammar(this.parseExponentiationExpression),i=this.lookahead,n=this.binaryPrecedence(i);if(n>0){this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;for(var r=[e,this.lookahead],a=t,o=this.isolateCoverGrammar(this.parseExponentiationExpression),u=[a,i.value,o],l=[n];!((n=this.binaryPrecedence(this.lookahead))<=0);){for(;u.length>2&&n<=l[l.length-1];){o=u.pop();var c=u.pop();l.pop(),a=u.pop(),r.pop();var h=this.startNode(r[r.length-1]);u.push(this.finalize(h,new s.BinaryExpression(c,a,o)))}u.push(this.nextToken().value),l.push(n),r.push(this.lookahead),u.push(this.isolateCoverGrammar(this.parseExponentiationExpression))}var d=u.length-1;t=u[d];for(var p=r.pop();d>1;){var m=r.pop(),f=p&&p.lineStart,h=this.startNode(m,f),c=u[d-1];t=this.finalize(h,new s.BinaryExpression(c,u[d-2],t)),d-=2,p=m}}return t},e.prototype.parseConditionalExpression=function(){var e=this.lookahead,t=this.inheritCoverGrammar(this.parseBinaryExpression);if(this.match("?")){this.nextToken();var i=this.context.allowIn;this.context.allowIn=!0;var n=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowIn=i,this.expect(":");var r=this.isolateCoverGrammar(this.parseAssignmentExpression);t=this.finalize(this.startNode(e),new s.ConditionalExpression(t,n,r)),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1}return t},e.prototype.checkPatternParam=function(e,t){switch(t.type){case u.Syntax.Identifier:this.validateParam(e,t,t.name);break;case u.Syntax.RestElement:this.checkPatternParam(e,t.argument);break;case u.Syntax.AssignmentPattern:this.checkPatternParam(e,t.left);break;case u.Syntax.ArrayPattern:for(var i=0;i<t.elements.length;i++)null!==t.elements[i]&&this.checkPatternParam(e,t.elements[i]);break;case u.Syntax.ObjectPattern:for(var i=0;i<t.properties.length;i++)this.checkPatternParam(e,t.properties[i].value)}e.simple=e.simple&&t instanceof s.Identifier},e.prototype.reinterpretAsCoverFormalsList=function(e){var t,i=[e],n=!1;switch(e.type){case u.Syntax.Identifier:break;case c:i=e.params,n=e.async;break;default:return null}t={simple:!0,paramSet:{}};for(var r=0;r<i.length;++r){var s=i[r];s.type===u.Syntax.AssignmentPattern?s.right.type===u.Syntax.YieldExpression&&(s.right.argument&&this.throwUnexpectedToken(this.lookahead),s.right.type=u.Syntax.Identifier,s.right.name="yield",delete s.right.argument,delete s.right.delegate):n&&s.type===u.Syntax.Identifier&&"await"===s.name&&this.throwUnexpectedToken(this.lookahead),this.checkPatternParam(t,s),i[r]=s}if(this.context.strict||!this.context.allowYield)for(var r=0;r<i.length;++r){var s=i[r];s.type===u.Syntax.YieldExpression&&this.throwUnexpectedToken(this.lookahead)}if(t.message===a.Messages.StrictParamDupe){var o=this.context.strict?t.stricted:t.firstRestricted;this.throwUnexpectedToken(o,t.message)}return{simple:t.simple,params:i,stricted:t.stricted,firstRestricted:t.firstRestricted,message:t.message}},e.prototype.parseAssignmentExpression=function(){var e;if(!this.context.allowYield&&this.matchKeyword("yield"))e=this.parseYieldExpression();else{var t=this.lookahead,i=t;if(e=this.parseConditionalExpression(),3===i.type&&i.lineNumber===this.lookahead.lineNumber&&"async"===i.value&&(3===this.lookahead.type||this.matchKeyword("yield"))){var n=this.parsePrimaryExpression();this.reinterpretExpressionAsPattern(n),e={type:c,params:[n],async:!0}}if(e.type===c||this.match("=>")){this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1;var r=e.async,o=this.reinterpretAsCoverFormalsList(e);if(o){this.hasLineTerminator&&this.tolerateUnexpectedToken(this.lookahead),this.context.firstCoverInitializedNameError=null;var l=this.context.strict,h=this.context.allowStrictDirective;this.context.allowStrictDirective=o.simple;var d=this.context.allowYield,p=this.context.await;this.context.allowYield=!0,this.context.await=r;var m=this.startNode(t);this.expect("=>");var f=void 0;if(this.match("{")){var y=this.context.allowIn;this.context.allowIn=!0,f=this.parseFunctionSourceElements(),this.context.allowIn=y}else f=this.isolateCoverGrammar(this.parseAssignmentExpression);var g=f.type!==u.Syntax.BlockStatement;this.context.strict&&o.firstRestricted&&this.throwUnexpectedToken(o.firstRestricted,o.message),this.context.strict&&o.stricted&&this.tolerateUnexpectedToken(o.stricted,o.message),e=r?this.finalize(m,new s.AsyncArrowFunctionExpression(o.params,f,g)):this.finalize(m,new s.ArrowFunctionExpression(o.params,f,g)),this.context.strict=l,this.context.allowStrictDirective=h,this.context.allowYield=d,this.context.await=p}}else if(this.matchAssign()){if(this.context.isAssignmentTarget||this.tolerateError(a.Messages.InvalidLHSInAssignment),this.context.strict&&e.type===u.Syntax.Identifier){var v=e;this.scanner.isRestrictedWord(v.name)&&this.tolerateUnexpectedToken(i,a.Messages.StrictLHSAssignment),this.scanner.isStrictModeReservedWord(v.name)&&this.tolerateUnexpectedToken(i,a.Messages.StrictReservedWord)}this.match("=")?this.reinterpretExpressionAsPattern(e):(this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1);var w=(i=this.nextToken()).value,k=this.isolateCoverGrammar(this.parseAssignmentExpression);e=this.finalize(this.startNode(t),new s.AssignmentExpression(w,e,k)),this.context.firstCoverInitializedNameError=null}}return e},e.prototype.parseExpression=function(){var e=this.lookahead,t=this.isolateCoverGrammar(this.parseAssignmentExpression);if(this.match(",")){var i=[];for(i.push(t);2!==this.lookahead.type&&this.match(",");)this.nextToken(),i.push(this.isolateCoverGrammar(this.parseAssignmentExpression));t=this.finalize(this.startNode(e),new s.SequenceExpression(i))}return t},e.prototype.parseStatementListItem=function(){var e;if(this.context.isAssignmentTarget=!0,this.context.isBindingElement=!0,4===this.lookahead.type)switch(this.lookahead.value){case"export":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,a.Messages.IllegalExportDeclaration),e=this.parseExportDeclaration();break;case"import":this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,a.Messages.IllegalImportDeclaration),e=this.parseImportDeclaration();break;case"const":e=this.parseLexicalDeclaration({inFor:!1});break;case"function":e=this.parseFunctionDeclaration();break;case"class":e=this.parseClassDeclaration();break;case"let":e=this.isLexicalDeclaration()?this.parseLexicalDeclaration({inFor:!1}):this.parseStatement();break;default:e=this.parseStatement()}else e=this.parseStatement();return e},e.prototype.parseBlock=function(){var e=this.createNode();this.expect("{");for(var t=[];!this.match("}");)t.push(this.parseStatementListItem());return this.expect("}"),this.finalize(e,new s.BlockStatement(t))},e.prototype.parseLexicalBinding=function(e,t){var i=this.createNode(),n=[],r=this.parsePattern(n,e);this.context.strict&&r.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(r.name)&&this.tolerateError(a.Messages.StrictVarName);var o=null;return"const"===e?this.matchKeyword("in")||this.matchContextualKeyword("of")||(this.match("=")?(this.nextToken(),o=this.isolateCoverGrammar(this.parseAssignmentExpression)):this.throwError(a.Messages.DeclarationMissingInitializer,"const")):(!t.inFor&&r.type!==u.Syntax.Identifier||this.match("="))&&(this.expect("="),o=this.isolateCoverGrammar(this.parseAssignmentExpression)),this.finalize(i,new s.VariableDeclarator(r,o))},e.prototype.parseBindingList=function(e,t){for(var i=[this.parseLexicalBinding(e,t)];this.match(",");)this.nextToken(),i.push(this.parseLexicalBinding(e,t));return i},e.prototype.isLexicalDeclaration=function(){var e=this.scanner.saveState();this.scanner.scanComments();var t=this.scanner.lex();return this.scanner.restoreState(e),3===t.type||7===t.type&&"["===t.value||7===t.type&&"{"===t.value||4===t.type&&"let"===t.value||4===t.type&&"yield"===t.value},e.prototype.parseLexicalDeclaration=function(e){var t=this.createNode(),i=this.nextToken().value;n.assert("let"===i||"const"===i,"Lexical declaration must be either let or const");var r=this.parseBindingList(i,e);return this.consumeSemicolon(),this.finalize(t,new s.VariableDeclaration(r,i))},e.prototype.parseBindingRestElement=function(e,t){var i=this.createNode();this.expect("...");var n=this.parsePattern(e,t);return this.finalize(i,new s.RestElement(n))},e.prototype.parseArrayPattern=function(e,t){var i=this.createNode();this.expect("[");for(var n=[];!this.match("]");)if(this.match(","))this.nextToken(),n.push(null);else{if(this.match("...")){n.push(this.parseBindingRestElement(e,t));break}n.push(this.parsePatternWithDefault(e,t)),this.match("]")||this.expect(",")}return this.expect("]"),this.finalize(i,new s.ArrayPattern(n))},e.prototype.parsePropertyPattern=function(e,t){var i,n,r=this.createNode(),a=!1,o=!1,u=!1;if(3===this.lookahead.type){var l=this.lookahead;i=this.parseVariableIdentifier();var c=this.finalize(r,new s.Identifier(l.value));if(this.match("=")){e.push(l),o=!0,this.nextToken();var h=this.parseAssignmentExpression();n=this.finalize(this.startNode(l),new s.AssignmentPattern(c,h))}else this.match(":")?(this.expect(":"),n=this.parsePatternWithDefault(e,t)):(e.push(l),o=!0,n=c)}else a=this.match("["),i=this.parseObjectPropertyKey(),this.expect(":"),n=this.parsePatternWithDefault(e,t);return this.finalize(r,new s.Property("init",i,a,n,u,o))},e.prototype.parseObjectPattern=function(e,t){var i=this.createNode(),n=[];for(this.expect("{");!this.match("}");)n.push(this.parsePropertyPattern(e,t)),this.match("}")||this.expect(",");return this.expect("}"),this.finalize(i,new s.ObjectPattern(n))},e.prototype.parsePattern=function(e,t){var i;return this.match("[")?i=this.parseArrayPattern(e,t):this.match("{")?i=this.parseObjectPattern(e,t):(this.matchKeyword("let")&&("const"===t||"let"===t)&&this.tolerateUnexpectedToken(this.lookahead,a.Messages.LetInLexicalBinding),e.push(this.lookahead),i=this.parseVariableIdentifier(t)),i},e.prototype.parsePatternWithDefault=function(e,t){var i=this.lookahead,n=this.parsePattern(e,t);if(this.match("=")){this.nextToken();var r=this.context.allowYield;this.context.allowYield=!0;var a=this.isolateCoverGrammar(this.parseAssignmentExpression);this.context.allowYield=r,n=this.finalize(this.startNode(i),new s.AssignmentPattern(n,a))}return n},e.prototype.parseVariableIdentifier=function(e){var t=this.createNode(),i=this.nextToken();return 4===i.type&&"yield"===i.value?this.context.strict?this.tolerateUnexpectedToken(i,a.Messages.StrictReservedWord):this.context.allowYield||this.throwUnexpectedToken(i):3!==i.type?this.context.strict&&4===i.type&&this.scanner.isStrictModeReservedWord(i.value)?this.tolerateUnexpectedToken(i,a.Messages.StrictReservedWord):(this.context.strict||"let"!==i.value||"var"!==e)&&this.throwUnexpectedToken(i):(this.context.isModule||this.context.await)&&3===i.type&&"await"===i.value&&this.tolerateUnexpectedToken(i),this.finalize(t,new s.Identifier(i.value))},e.prototype.parseVariableDeclaration=function(e){var t=this.createNode(),i=[],n=this.parsePattern(i,"var");this.context.strict&&n.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(n.name)&&this.tolerateError(a.Messages.StrictVarName);var r=null;return this.match("=")?(this.nextToken(),r=this.isolateCoverGrammar(this.parseAssignmentExpression)):n.type===u.Syntax.Identifier||e.inFor||this.expect("="),this.finalize(t,new s.VariableDeclarator(n,r))},e.prototype.parseVariableDeclarationList=function(e){var t={inFor:e.inFor},i=[];for(i.push(this.parseVariableDeclaration(t));this.match(",");)this.nextToken(),i.push(this.parseVariableDeclaration(t));return i},e.prototype.parseVariableStatement=function(){var e=this.createNode();this.expectKeyword("var");var t=this.parseVariableDeclarationList({inFor:!1});return this.consumeSemicolon(),this.finalize(e,new s.VariableDeclaration(t,"var"))},e.prototype.parseEmptyStatement=function(){var e=this.createNode();return this.expect(";"),this.finalize(e,new s.EmptyStatement)},e.prototype.parseExpressionStatement=function(){var e=this.createNode(),t=this.parseExpression();return this.consumeSemicolon(),this.finalize(e,new s.ExpressionStatement(t))},e.prototype.parseIfClause=function(){return this.context.strict&&this.matchKeyword("function")&&this.tolerateError(a.Messages.StrictFunction),this.parseStatement()},e.prototype.parseIfStatement=function(){var e,t=this.createNode(),i=null;this.expectKeyword("if"),this.expect("(");var n=this.parseExpression();return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),e=this.finalize(this.createNode(),new s.EmptyStatement)):(this.expect(")"),e=this.parseIfClause(),this.matchKeyword("else")&&(this.nextToken(),i=this.parseIfClause())),this.finalize(t,new s.IfStatement(n,e,i))},e.prototype.parseDoWhileStatement=function(){var e=this.createNode();this.expectKeyword("do");var t=this.context.inIteration;this.context.inIteration=!0;var i=this.parseStatement();this.context.inIteration=t,this.expectKeyword("while"),this.expect("(");var n=this.parseExpression();return!this.match(")")&&this.config.tolerant?this.tolerateUnexpectedToken(this.nextToken()):(this.expect(")"),this.match(";")&&this.nextToken()),this.finalize(e,new s.DoWhileStatement(i,n))},e.prototype.parseWhileStatement=function(){var e,t=this.createNode();this.expectKeyword("while"),this.expect("(");var i=this.parseExpression();if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),e=this.finalize(this.createNode(),new s.EmptyStatement);else{this.expect(")");var n=this.context.inIteration;this.context.inIteration=!0,e=this.parseStatement(),this.context.inIteration=n}return this.finalize(t,new s.WhileStatement(i,e))},e.prototype.parseForStatement=function(){var e,t,i,n=null,r=null,o=null,l=!0,c=this.createNode();if(this.expectKeyword("for"),this.expect("("),this.match(";"))this.nextToken();else if(this.matchKeyword("var")){n=this.createNode(),this.nextToken();var h=this.context.allowIn;this.context.allowIn=!1;var d=this.parseVariableDeclarationList({inFor:!0});if(this.context.allowIn=h,1===d.length&&this.matchKeyword("in")){var p=d[0];p.init&&(p.id.type===u.Syntax.ArrayPattern||p.id.type===u.Syntax.ObjectPattern||this.context.strict)&&this.tolerateError(a.Messages.ForInOfLoopInitializer,"for-in"),n=this.finalize(n,new s.VariableDeclaration(d,"var")),this.nextToken(),e=n,t=this.parseExpression(),n=null}else 1===d.length&&null===d[0].init&&this.matchContextualKeyword("of")?(n=this.finalize(n,new s.VariableDeclaration(d,"var")),this.nextToken(),e=n,t=this.parseAssignmentExpression(),n=null,l=!1):(n=this.finalize(n,new s.VariableDeclaration(d,"var")),this.expect(";"))}else if(this.matchKeyword("const")||this.matchKeyword("let")){n=this.createNode();var m=this.nextToken().value;if(this.context.strict||"in"!==this.lookahead.value){var h=this.context.allowIn;this.context.allowIn=!1;var d=this.parseBindingList(m,{inFor:!0});this.context.allowIn=h,1===d.length&&null===d[0].init&&this.matchKeyword("in")?(n=this.finalize(n,new s.VariableDeclaration(d,m)),this.nextToken(),e=n,t=this.parseExpression(),n=null):1===d.length&&null===d[0].init&&this.matchContextualKeyword("of")?(n=this.finalize(n,new s.VariableDeclaration(d,m)),this.nextToken(),e=n,t=this.parseAssignmentExpression(),n=null,l=!1):(this.consumeSemicolon(),n=this.finalize(n,new s.VariableDeclaration(d,m)))}else n=this.finalize(n,new s.Identifier(m)),this.nextToken(),e=n,t=this.parseExpression(),n=null}else{var f=this.lookahead,h=this.context.allowIn;if(this.context.allowIn=!1,n=this.inheritCoverGrammar(this.parseAssignmentExpression),this.context.allowIn=h,this.matchKeyword("in"))this.context.isAssignmentTarget&&n.type!==u.Syntax.AssignmentExpression||this.tolerateError(a.Messages.InvalidLHSInForIn),this.nextToken(),this.reinterpretExpressionAsPattern(n),e=n,t=this.parseExpression(),n=null;else if(this.matchContextualKeyword("of"))this.context.isAssignmentTarget&&n.type!==u.Syntax.AssignmentExpression||this.tolerateError(a.Messages.InvalidLHSInForLoop),this.nextToken(),this.reinterpretExpressionAsPattern(n),e=n,t=this.parseAssignmentExpression(),n=null,l=!1;else{if(this.match(",")){for(var y=[n];this.match(",");)this.nextToken(),y.push(this.isolateCoverGrammar(this.parseAssignmentExpression));n=this.finalize(this.startNode(f),new s.SequenceExpression(y))}this.expect(";")}}if(void 0===e&&(this.match(";")||(r=this.parseExpression()),this.expect(";"),this.match(")")||(o=this.parseExpression())),!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),i=this.finalize(this.createNode(),new s.EmptyStatement);else{this.expect(")");var g=this.context.inIteration;this.context.inIteration=!0,i=this.isolateCoverGrammar(this.parseStatement),this.context.inIteration=g}return void 0===e?this.finalize(c,new s.ForStatement(n,r,o,i)):l?this.finalize(c,new s.ForInStatement(e,t,i)):this.finalize(c,new s.ForOfStatement(e,t,i))},e.prototype.parseContinueStatement=function(){var e=this.createNode();this.expectKeyword("continue");var t=null;if(3===this.lookahead.type&&!this.hasLineTerminator){var i=this.parseVariableIdentifier();t=i;var n="$"+i.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,n)||this.throwError(a.Messages.UnknownLabel,i.name)}return this.consumeSemicolon(),null!==t||this.context.inIteration||this.throwError(a.Messages.IllegalContinue),this.finalize(e,new s.ContinueStatement(t))},e.prototype.parseBreakStatement=function(){var e=this.createNode();this.expectKeyword("break");var t=null;if(3===this.lookahead.type&&!this.hasLineTerminator){var i=this.parseVariableIdentifier(),n="$"+i.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,n)||this.throwError(a.Messages.UnknownLabel,i.name),t=i}return this.consumeSemicolon(),null!==t||this.context.inIteration||this.context.inSwitch||this.throwError(a.Messages.IllegalBreak),this.finalize(e,new s.BreakStatement(t))},e.prototype.parseReturnStatement=function(){this.context.inFunctionBody||this.tolerateError(a.Messages.IllegalReturn);var e=this.createNode();this.expectKeyword("return");var t=(this.match(";")||this.match("}")||this.hasLineTerminator||2===this.lookahead.type)&&8!==this.lookahead.type&&10!==this.lookahead.type?null:this.parseExpression();return this.consumeSemicolon(),this.finalize(e,new s.ReturnStatement(t))},e.prototype.parseWithStatement=function(){this.context.strict&&this.tolerateError(a.Messages.StrictModeWith);var e,t=this.createNode();this.expectKeyword("with"),this.expect("(");var i=this.parseExpression();return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),e=this.finalize(this.createNode(),new s.EmptyStatement)):(this.expect(")"),e=this.parseStatement()),this.finalize(t,new s.WithStatement(i,e))},e.prototype.parseSwitchCase=function(){var e,t=this.createNode();this.matchKeyword("default")?(this.nextToken(),e=null):(this.expectKeyword("case"),e=this.parseExpression()),this.expect(":");for(var i=[];!(this.match("}")||this.matchKeyword("default")||this.matchKeyword("case"));)i.push(this.parseStatementListItem());return this.finalize(t,new s.SwitchCase(e,i))},e.prototype.parseSwitchStatement=function(){var e=this.createNode();this.expectKeyword("switch"),this.expect("(");var t=this.parseExpression();this.expect(")");var i=this.context.inSwitch;this.context.inSwitch=!0;var n=[],r=!1;for(this.expect("{");!this.match("}");){var o=this.parseSwitchCase();null===o.test&&(r&&this.throwError(a.Messages.MultipleDefaultsInSwitch),r=!0),n.push(o)}return this.expect("}"),this.context.inSwitch=i,this.finalize(e,new s.SwitchStatement(t,n))},e.prototype.parseLabelledStatement=function(){var e,t=this.createNode(),i=this.parseExpression();if(i.type===u.Syntax.Identifier&&this.match(":")){this.nextToken();var n=i,r="$"+n.name;Object.prototype.hasOwnProperty.call(this.context.labelSet,r)&&this.throwError(a.Messages.Redeclaration,"Label",n.name),this.context.labelSet[r]=!0;var o=void 0;if(this.matchKeyword("class"))this.tolerateUnexpectedToken(this.lookahead),o=this.parseClassDeclaration();else if(this.matchKeyword("function")){var l=this.lookahead,c=this.parseFunctionDeclaration();this.context.strict?this.tolerateUnexpectedToken(l,a.Messages.StrictFunction):c.generator&&this.tolerateUnexpectedToken(l,a.Messages.GeneratorInLegacyContext),o=c}else o=this.parseStatement();delete this.context.labelSet[r],e=new s.LabeledStatement(n,o)}else this.consumeSemicolon(),e=new s.ExpressionStatement(i);return this.finalize(t,e)},e.prototype.parseThrowStatement=function(){var e=this.createNode();this.expectKeyword("throw"),this.hasLineTerminator&&this.throwError(a.Messages.NewlineAfterThrow);var t=this.parseExpression();return this.consumeSemicolon(),this.finalize(e,new s.ThrowStatement(t))},e.prototype.parseCatchClause=function(){var e=this.createNode();this.expectKeyword("catch"),this.expect("("),this.match(")")&&this.throwUnexpectedToken(this.lookahead);for(var t=[],i=this.parsePattern(t),n={},r=0;r<t.length;r++){var o="$"+t[r].value;Object.prototype.hasOwnProperty.call(n,o)&&this.tolerateError(a.Messages.DuplicateBinding,t[r].value),n[o]=!0}this.context.strict&&i.type===u.Syntax.Identifier&&this.scanner.isRestrictedWord(i.name)&&this.tolerateError(a.Messages.StrictCatchVariable),this.expect(")");var l=this.parseBlock();return this.finalize(e,new s.CatchClause(i,l))},e.prototype.parseFinallyClause=function(){return this.expectKeyword("finally"),this.parseBlock()},e.prototype.parseTryStatement=function(){var e=this.createNode();this.expectKeyword("try");var t=this.parseBlock(),i=this.matchKeyword("catch")?this.parseCatchClause():null,n=this.matchKeyword("finally")?this.parseFinallyClause():null;return i||n||this.throwError(a.Messages.NoCatchOrFinally),this.finalize(e,new s.TryStatement(t,i,n))},e.prototype.parseDebuggerStatement=function(){var e=this.createNode();return this.expectKeyword("debugger"),this.consumeSemicolon(),this.finalize(e,new s.DebuggerStatement)},e.prototype.parseStatement=function(){var e;switch(this.lookahead.type){case 1:case 5:case 6:case 8:case 10:case 9:e=this.parseExpressionStatement();break;case 7:var t=this.lookahead.value;e="{"===t?this.parseBlock():"("===t?this.parseExpressionStatement():";"===t?this.parseEmptyStatement():this.parseExpressionStatement();break;case 3:e=this.matchAsyncFunction()?this.parseFunctionDeclaration():this.parseLabelledStatement();break;case 4:switch(this.lookahead.value){case"break":e=this.parseBreakStatement();break;case"continue":e=this.parseContinueStatement();break;case"debugger":e=this.parseDebuggerStatement();break;case"do":e=this.parseDoWhileStatement();break;case"for":e=this.parseForStatement();break;case"function":e=this.parseFunctionDeclaration();break;case"if":e=this.parseIfStatement();break;case"return":e=this.parseReturnStatement();break;case"switch":e=this.parseSwitchStatement();break;case"throw":e=this.parseThrowStatement();break;case"try":e=this.parseTryStatement();break;case"var":e=this.parseVariableStatement();break;case"while":e=this.parseWhileStatement();break;case"with":e=this.parseWithStatement();break;default:e=this.parseExpressionStatement()}break;default:e=this.throwUnexpectedToken(this.lookahead)}return e},e.prototype.parseFunctionSourceElements=function(){var e=this.createNode();this.expect("{");var t=this.parseDirectivePrologues(),i=this.context.labelSet,n=this.context.inIteration,r=this.context.inSwitch,a=this.context.inFunctionBody;for(this.context.labelSet={},this.context.inIteration=!1,this.context.inSwitch=!1,this.context.inFunctionBody=!0;2!==this.lookahead.type&&!this.match("}");)t.push(this.parseStatementListItem());return this.expect("}"),this.context.labelSet=i,this.context.inIteration=n,this.context.inSwitch=r,this.context.inFunctionBody=a,this.finalize(e,new s.BlockStatement(t))},e.prototype.validateParam=function(e,t,i){var n="$"+i;this.context.strict?(this.scanner.isRestrictedWord(i)&&(e.stricted=t,e.message=a.Messages.StrictParamName),Object.prototype.hasOwnProperty.call(e.paramSet,n)&&(e.stricted=t,e.message=a.Messages.StrictParamDupe)):!e.firstRestricted&&(this.scanner.isRestrictedWord(i)?(e.firstRestricted=t,e.message=a.Messages.StrictParamName):this.scanner.isStrictModeReservedWord(i)?(e.firstRestricted=t,e.message=a.Messages.StrictReservedWord):Object.prototype.hasOwnProperty.call(e.paramSet,n)&&(e.stricted=t,e.message=a.Messages.StrictParamDupe)),"function"==typeof Object.defineProperty?Object.defineProperty(e.paramSet,n,{value:!0,enumerable:!0,writable:!0,configurable:!0}):e.paramSet[n]=!0},e.prototype.parseRestElement=function(e){var t=this.createNode();this.expect("...");var i=this.parsePattern(e);return this.match("=")&&this.throwError(a.Messages.DefaultRestParameter),this.match(")")||this.throwError(a.Messages.ParameterAfterRestParameter),this.finalize(t,new s.RestElement(i))},e.prototype.parseFormalParameter=function(e){for(var t=[],i=this.match("...")?this.parseRestElement(t):this.parsePatternWithDefault(t),n=0;n<t.length;n++)this.validateParam(e,t[n],t[n].value);e.simple=e.simple&&i instanceof s.Identifier,e.params.push(i)},e.prototype.parseFormalParameters=function(e){var t;if(t={simple:!0,params:[],firstRestricted:e},this.expect("("),!this.match(")"))for(t.paramSet={};2!==this.lookahead.type&&(this.parseFormalParameter(t),!this.match(")"))&&(this.expect(","),!this.match(")")););return this.expect(")"),{simple:t.simple,params:t.params,stricted:t.stricted,firstRestricted:t.firstRestricted,message:t.message}},e.prototype.matchAsyncFunction=function(){var e=this.matchContextualKeyword("async");if(e){var t=this.scanner.saveState();this.scanner.scanComments();var i=this.scanner.lex();this.scanner.restoreState(t),e=t.lineNumber===i.lineNumber&&4===i.type&&"function"===i.value}return e},e.prototype.parseFunctionDeclaration=function(e){var t,i=this.createNode(),n=this.matchContextualKeyword("async");n&&this.nextToken(),this.expectKeyword("function");var r=!n&&this.match("*");r&&this.nextToken();var o=null,u=null;if(!e||!this.match("(")){var l=this.lookahead;o=this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(l.value)&&this.tolerateUnexpectedToken(l,a.Messages.StrictFunctionName):this.scanner.isRestrictedWord(l.value)?(u=l,t=a.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(l.value)&&(u=l,t=a.Messages.StrictReservedWord)}var c=this.context.await,h=this.context.allowYield;this.context.await=n,this.context.allowYield=!r;var d=this.parseFormalParameters(u),p=d.params,m=d.stricted;u=d.firstRestricted,d.message&&(t=d.message);var f=this.context.strict,y=this.context.allowStrictDirective;this.context.allowStrictDirective=d.simple;var g=this.parseFunctionSourceElements();return this.context.strict&&u&&this.throwUnexpectedToken(u,t),this.context.strict&&m&&this.tolerateUnexpectedToken(m,t),this.context.strict=f,this.context.allowStrictDirective=y,this.context.await=c,this.context.allowYield=h,n?this.finalize(i,new s.AsyncFunctionDeclaration(o,p,g)):this.finalize(i,new s.FunctionDeclaration(o,p,g,r))},e.prototype.parseFunctionExpression=function(){var e,t,i=this.createNode(),n=this.matchContextualKeyword("async");n&&this.nextToken(),this.expectKeyword("function");var r=!n&&this.match("*");r&&this.nextToken();var o=null,u=this.context.await,l=this.context.allowYield;if(this.context.await=n,this.context.allowYield=!r,!this.match("(")){var c=this.lookahead;o=!this.context.strict&&!r&&this.matchKeyword("yield")?this.parseIdentifierName():this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(c.value)&&this.tolerateUnexpectedToken(c,a.Messages.StrictFunctionName):this.scanner.isRestrictedWord(c.value)?(t=c,e=a.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(c.value)&&(t=c,e=a.Messages.StrictReservedWord)}var h=this.parseFormalParameters(t),d=h.params,p=h.stricted;t=h.firstRestricted,h.message&&(e=h.message);var m=this.context.strict,f=this.context.allowStrictDirective;this.context.allowStrictDirective=h.simple;var y=this.parseFunctionSourceElements();return this.context.strict&&t&&this.throwUnexpectedToken(t,e),this.context.strict&&p&&this.tolerateUnexpectedToken(p,e),this.context.strict=m,this.context.allowStrictDirective=f,this.context.await=u,this.context.allowYield=l,n?this.finalize(i,new s.AsyncFunctionExpression(o,d,y)):this.finalize(i,new s.FunctionExpression(o,d,y,r))},e.prototype.parseDirective=function(){var e=this.lookahead,t=this.createNode(),i=this.parseExpression(),n=i.type===u.Syntax.Literal?this.getTokenRaw(e).slice(1,-1):null;return this.consumeSemicolon(),this.finalize(t,n?new s.Directive(i,n):new s.ExpressionStatement(i))},e.prototype.parseDirectivePrologues=function(){for(var e=null,t=[];;){var i=this.lookahead;if(8!==i.type)break;var n=this.parseDirective();t.push(n);var r=n.directive;if("string"!=typeof r)break;"use strict"===r?(this.context.strict=!0,e&&this.tolerateUnexpectedToken(e,a.Messages.StrictOctalLiteral),this.context.allowStrictDirective||this.tolerateUnexpectedToken(i,a.Messages.IllegalLanguageModeDirective)):!e&&i.octal&&(e=i)}return t},e.prototype.qualifiedPropertyName=function(e){switch(e.type){case 3:case 8:case 1:case 5:case 6:case 4:return!0;case 7:return"["===e.value}return!1},e.prototype.parseGetterMethod=function(){var e=this.createNode(),t=!1,i=this.context.allowYield;this.context.allowYield=!t;var n=this.parseFormalParameters();n.params.length>0&&this.tolerateError(a.Messages.BadGetterArity);var r=this.parsePropertyMethod(n);return this.context.allowYield=i,this.finalize(e,new s.FunctionExpression(null,n.params,r,t))},e.prototype.parseSetterMethod=function(){var e=this.createNode(),t=!1,i=this.context.allowYield;this.context.allowYield=!t;var n=this.parseFormalParameters();1!==n.params.length?this.tolerateError(a.Messages.BadSetterArity):n.params[0]instanceof s.RestElement&&this.tolerateError(a.Messages.BadSetterRestParameter);var r=this.parsePropertyMethod(n);return this.context.allowYield=i,this.finalize(e,new s.FunctionExpression(null,n.params,r,t))},e.prototype.parseGeneratorMethod=function(){var e=this.createNode(),t=!0,i=this.context.allowYield;this.context.allowYield=!0;var n=this.parseFormalParameters();this.context.allowYield=!1;var r=this.parsePropertyMethod(n);return this.context.allowYield=i,this.finalize(e,new s.FunctionExpression(null,n.params,r,t))},e.prototype.isStartOfExpression=function(){var e=!0,t=this.lookahead.value;switch(this.lookahead.type){case 7:e="["===t||"("===t||"{"===t||"+"===t||"-"===t||"!"===t||"~"===t||"++"===t||"--"===t||"/"===t||"/="===t;break;case 4:e="class"===t||"delete"===t||"function"===t||"let"===t||"new"===t||"super"===t||"this"===t||"typeof"===t||"void"===t||"yield"===t}return e},e.prototype.parseYieldExpression=function(){var e=this.createNode();this.expectKeyword("yield");var t=null,i=!1;if(!this.hasLineTerminator){var n=this.context.allowYield;this.context.allowYield=!1,(i=this.match("*"))?(this.nextToken(),t=this.parseAssignmentExpression()):this.isStartOfExpression()&&(t=this.parseAssignmentExpression()),this.context.allowYield=n}return this.finalize(e,new s.YieldExpression(t,i))},e.prototype.parseClassElement=function(e){var t=this.lookahead,i=this.createNode(),n="",r=null,o=null,u=!1,l=!1,c=!1,h=!1;if(this.match("*"))this.nextToken();else if(u=this.match("["),"static"===(r=this.parseObjectPropertyKey()).name&&(this.qualifiedPropertyName(this.lookahead)||this.match("*"))&&(t=this.lookahead,c=!0,u=this.match("["),this.match("*")?this.nextToken():r=this.parseObjectPropertyKey()),3===t.type&&!this.hasLineTerminator&&"async"===t.value){var d=this.lookahead.value;":"!==d&&"("!==d&&"*"!==d&&(h=!0,t=this.lookahead,r=this.parseObjectPropertyKey(),3===t.type&&"constructor"===t.value&&this.tolerateUnexpectedToken(t,a.Messages.ConstructorIsAsync))}var p=this.qualifiedPropertyName(this.lookahead);return 3===t.type?"get"===t.value&&p?(n="get",u=this.match("["),r=this.parseObjectPropertyKey(),this.context.allowYield=!1,o=this.parseGetterMethod()):"set"===t.value&&p&&(n="set",u=this.match("["),r=this.parseObjectPropertyKey(),o=this.parseSetterMethod()):7===t.type&&"*"===t.value&&p&&(n="init",u=this.match("["),r=this.parseObjectPropertyKey(),o=this.parseGeneratorMethod(),l=!0),!n&&r&&this.match("(")&&(n="init",o=h?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),l=!0),n||this.throwUnexpectedToken(this.lookahead),"init"===n&&(n="method"),!u&&(c&&this.isPropertyKey(r,"prototype")&&this.throwUnexpectedToken(t,a.Messages.StaticPrototype),!c&&this.isPropertyKey(r,"constructor")&&(("method"!==n||!l||o&&o.generator)&&this.throwUnexpectedToken(t,a.Messages.ConstructorSpecialMethod),e.value?this.throwUnexpectedToken(t,a.Messages.DuplicateConstructor):e.value=!0,n="constructor")),this.finalize(i,new s.MethodDefinition(r,u,o,n,c))},e.prototype.parseClassElementList=function(){var e=[],t={value:!1};for(this.expect("{");!this.match("}");)this.match(";")?this.nextToken():e.push(this.parseClassElement(t));return this.expect("}"),e},e.prototype.parseClassBody=function(){var e=this.createNode(),t=this.parseClassElementList();return this.finalize(e,new s.ClassBody(t))},e.prototype.parseClassDeclaration=function(e){var t=this.createNode(),i=this.context.strict;this.context.strict=!0,this.expectKeyword("class");var n=e&&3!==this.lookahead.type?null:this.parseVariableIdentifier(),r=null;this.matchKeyword("extends")&&(this.nextToken(),r=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));var a=this.parseClassBody();return this.context.strict=i,this.finalize(t,new s.ClassDeclaration(n,r,a))},e.prototype.parseClassExpression=function(){var e=this.createNode(),t=this.context.strict;this.context.strict=!0,this.expectKeyword("class");var i=3===this.lookahead.type?this.parseVariableIdentifier():null,n=null;this.matchKeyword("extends")&&(this.nextToken(),n=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall));var r=this.parseClassBody();return this.context.strict=t,this.finalize(e,new s.ClassExpression(i,n,r))},e.prototype.parseModule=function(){this.context.strict=!0,this.context.isModule=!0,this.scanner.isModule=!0;for(var e=this.createNode(),t=this.parseDirectivePrologues();2!==this.lookahead.type;)t.push(this.parseStatementListItem());return this.finalize(e,new s.Module(t))},e.prototype.parseScript=function(){for(var e=this.createNode(),t=this.parseDirectivePrologues();2!==this.lookahead.type;)t.push(this.parseStatementListItem());return this.finalize(e,new s.Script(t))},e.prototype.parseModuleSpecifier=function(){var e=this.createNode();8!==this.lookahead.type&&this.throwError(a.Messages.InvalidModuleSpecifier);var t=this.nextToken(),i=this.getTokenRaw(t);return this.finalize(e,new s.Literal(t.value,i))},e.prototype.parseImportSpecifier=function(){var e,t,i=this.createNode();return 3===this.lookahead.type?(t=e=this.parseVariableIdentifier(),this.matchContextualKeyword("as")&&(this.nextToken(),t=this.parseVariableIdentifier())):(t=e=this.parseIdentifierName(),this.matchContextualKeyword("as")?(this.nextToken(),t=this.parseVariableIdentifier()):this.throwUnexpectedToken(this.nextToken())),this.finalize(i,new s.ImportSpecifier(t,e))},e.prototype.parseNamedImports=function(){this.expect("{");for(var e=[];!this.match("}");)e.push(this.parseImportSpecifier()),this.match("}")||this.expect(",");return this.expect("}"),e},e.prototype.parseImportDefaultSpecifier=function(){var e=this.createNode(),t=this.parseIdentifierName();return this.finalize(e,new s.ImportDefaultSpecifier(t))},e.prototype.parseImportNamespaceSpecifier=function(){var e=this.createNode();this.expect("*"),this.matchContextualKeyword("as")||this.throwError(a.Messages.NoAsAfterImportNamespace),this.nextToken();var t=this.parseIdentifierName();return this.finalize(e,new s.ImportNamespaceSpecifier(t))},e.prototype.parseImportDeclaration=function(){this.context.inFunctionBody&&this.throwError(a.Messages.IllegalImportDeclaration);var e,t=this.createNode();this.expectKeyword("import");var i=[];if(8===this.lookahead.type)e=this.parseModuleSpecifier();else{if(this.match("{")?i=i.concat(this.parseNamedImports()):this.match("*")?i.push(this.parseImportNamespaceSpecifier()):this.isIdentifierName(this.lookahead)&&!this.matchKeyword("default")?(i.push(this.parseImportDefaultSpecifier()),this.match(",")&&(this.nextToken(),this.match("*")?i.push(this.parseImportNamespaceSpecifier()):this.match("{")?i=i.concat(this.parseNamedImports()):this.throwUnexpectedToken(this.lookahead))):this.throwUnexpectedToken(this.nextToken()),!this.matchContextualKeyword("from")){var n=this.lookahead.value?a.Messages.UnexpectedToken:a.Messages.MissingFromClause;this.throwError(n,this.lookahead.value)}this.nextToken(),e=this.parseModuleSpecifier()}return this.consumeSemicolon(),this.finalize(t,new s.ImportDeclaration(i,e))},e.prototype.parseExportSpecifier=function(){var e=this.createNode(),t=this.parseIdentifierName(),i=t;return this.matchContextualKeyword("as")&&(this.nextToken(),i=this.parseIdentifierName()),this.finalize(e,new s.ExportSpecifier(t,i))},e.prototype.parseExportDeclaration=function(){this.context.inFunctionBody&&this.throwError(a.Messages.IllegalExportDeclaration);var e,t=this.createNode();if(this.expectKeyword("export"),this.matchKeyword("default"))if(this.nextToken(),this.matchKeyword("function")){var i=this.parseFunctionDeclaration(!0);e=this.finalize(t,new s.ExportDefaultDeclaration(i))}else if(this.matchKeyword("class")){var i=this.parseClassDeclaration(!0);e=this.finalize(t,new s.ExportDefaultDeclaration(i))}else if(this.matchContextualKeyword("async")){var i=this.matchAsyncFunction()?this.parseFunctionDeclaration(!0):this.parseAssignmentExpression();e=this.finalize(t,new s.ExportDefaultDeclaration(i))}else{this.matchContextualKeyword("from")&&this.throwError(a.Messages.UnexpectedToken,this.lookahead.value);var i=this.match("{")?this.parseObjectInitializer():this.match("[")?this.parseArrayInitializer():this.parseAssignmentExpression();this.consumeSemicolon(),e=this.finalize(t,new s.ExportDefaultDeclaration(i))}else if(this.match("*")){if(this.nextToken(),!this.matchContextualKeyword("from")){var n=this.lookahead.value?a.Messages.UnexpectedToken:a.Messages.MissingFromClause;this.throwError(n,this.lookahead.value)}this.nextToken();var r=this.parseModuleSpecifier();this.consumeSemicolon(),e=this.finalize(t,new s.ExportAllDeclaration(r))}else if(4===this.lookahead.type){var i=void 0;switch(this.lookahead.value){case"let":case"const":i=this.parseLexicalDeclaration({inFor:!1});break;case"var":case"class":case"function":i=this.parseStatementListItem();break;default:this.throwUnexpectedToken(this.lookahead)}e=this.finalize(t,new s.ExportNamedDeclaration(i,[],null))}else if(this.matchAsyncFunction()){var i=this.parseFunctionDeclaration();e=this.finalize(t,new s.ExportNamedDeclaration(i,[],null))}else{var o=[],u=null,l=!1;for(this.expect("{");!this.match("}");)l=l||this.matchKeyword("default"),o.push(this.parseExportSpecifier()),this.match("}")||this.expect(",");if(this.expect("}"),this.matchContextualKeyword("from"))this.nextToken(),u=this.parseModuleSpecifier(),this.consumeSemicolon();else if(l){var n=this.lookahead.value?a.Messages.UnexpectedToken:a.Messages.MissingFromClause;this.throwError(n,this.lookahead.value)}else this.consumeSemicolon();e=this.finalize(t,new s.ExportNamedDeclaration(null,o,u))}return e},e}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assert=function(e,t){if(!e)throw Error("ASSERT: "+t)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorHandler=function(){function e(){this.errors=[],this.tolerant=!1}return e.prototype.recordError=function(e){this.errors.push(e)},e.prototype.tolerate=function(e){if(this.tolerant)this.recordError(e);else throw e},e.prototype.constructError=function(e,t){var i=Error(e);try{throw i}catch(e){Object.create&&Object.defineProperty&&Object.defineProperty(i=Object.create(e),"column",{value:t})}return i},e.prototype.createError=function(e,t,i,n){var r="Line "+t+": "+n,a=this.constructError(r,i);return a.index=e,a.lineNumber=t,a.description=n,a},e.prototype.throwError=function(e,t,i,n){throw this.createError(e,t,i,n)},e.prototype.tolerateError=function(e,t,i,n){var r=this.createError(e,t,i,n);if(this.tolerant)this.recordError(r);else throw r},e}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Messages={BadGetterArity:"Getter must not have any formal parameters",BadSetterArity:"Setter must have exactly one formal parameter",BadSetterRestParameter:"Setter function argument must not be a rest parameter",ConstructorIsAsync:"Class constructor may not be an async method",ConstructorSpecialMethod:"Class constructor may not be an accessor",DeclarationMissingInitializer:"Missing initializer in %0 declaration",DefaultRestParameter:"Unexpected token =",DuplicateBinding:"Duplicate binding %0",DuplicateConstructor:"A class may only have one constructor",DuplicateProtoProperty:"Duplicate __proto__ fields are not allowed in object literals",ForInOfLoopInitializer:"%0 loop variable declaration may not have an initializer",GeneratorInLegacyContext:"Generator declarations are not allowed in legacy contexts",IllegalBreak:"Illegal break statement",IllegalContinue:"Illegal continue statement",IllegalExportDeclaration:"Unexpected token",IllegalImportDeclaration:"Unexpected token",IllegalLanguageModeDirective:"Illegal 'use strict' directive in function with non-simple parameter list",IllegalReturn:"Illegal return statement",InvalidEscapedReservedWord:"Keyword must not contain escaped characters",InvalidHexEscapeSequence:"Invalid hexadecimal escape sequence",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",InvalidLHSInForLoop:"Invalid left-hand side in for-loop",InvalidModuleSpecifier:"Unexpected token",InvalidRegExp:"Invalid regular expression",LetInLexicalBinding:"let is disallowed as a lexically bound name",MissingFromClause:"Unexpected token",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NewlineAfterThrow:"Illegal newline after throw",NoAsAfterImportNamespace:"Unexpected token",NoCatchOrFinally:"Missing catch or finally after try",ParameterAfterRestParameter:"Rest parameter must be last formal parameter",Redeclaration:"%0 '%1' has already been declared",StaticPrototype:"Classes may not have static property named prototype",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictFunction:"In strict mode code, functions can only be declared at top level or inside a block",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictModeWith:"Strict mode code may not include a with statement",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictReservedWord:"Use of future reserved word in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",TemplateOctalLiteral:"Octal literals are not allowed in template strings.",UnexpectedEOS:"Unexpected end of input",UnexpectedIdentifier:"Unexpected identifier",UnexpectedNumber:"Unexpected number",UnexpectedReserved:"Unexpected reserved word",UnexpectedString:"Unexpected string",UnexpectedTemplate:"Unexpected quasi %0",UnexpectedToken:"Unexpected token %0",UnexpectedTokenIllegal:"Unexpected token ILLEGAL",UnknownLabel:"Undefined label '%0'",UnterminatedRegExp:"Invalid regular expression: missing /"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9),r=i(4),a=i(11);function s(e){return"0123456789abcdef".indexOf(e.toLowerCase())}function o(e){return"01234567".indexOf(e)}t.Scanner=function(){function e(e,t){this.source=e,this.errorHandler=t,this.trackComment=!1,this.isModule=!1,this.length=e.length,this.index=0,this.lineNumber=+(e.length>0),this.lineStart=0,this.curlyStack=[]}return e.prototype.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart}},e.prototype.restoreState=function(e){this.index=e.index,this.lineNumber=e.lineNumber,this.lineStart=e.lineStart},e.prototype.eof=function(){return this.index>=this.length},e.prototype.throwUnexpectedToken=function(e){return void 0===e&&(e=a.Messages.UnexpectedTokenIllegal),this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},e.prototype.tolerateUnexpectedToken=function(e){void 0===e&&(e=a.Messages.UnexpectedTokenIllegal),this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},e.prototype.skipSingleLineComment=function(e){var t,i,n=[];for(this.trackComment&&(n=[],t=this.index-e,i={start:{line:this.lineNumber,column:this.index-this.lineStart-e},end:{}});!this.eof();){var a=this.source.charCodeAt(this.index);if(++this.index,r.Character.isLineTerminator(a)){if(this.trackComment){i.end={line:this.lineNumber,column:this.index-this.lineStart-1};var s={multiLine:!1,slice:[t+e,this.index-1],range:[t,this.index-1],loc:i};n.push(s)}return 13===a&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,n}}if(this.trackComment){i.end={line:this.lineNumber,column:this.index-this.lineStart};var s={multiLine:!1,slice:[t+e,this.index],range:[t,this.index],loc:i};n.push(s)}return n},e.prototype.skipMultiLineComment=function(){var e,t,i=[];for(this.trackComment&&(i=[],e=this.index-2,t={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{}});!this.eof();){var n=this.source.charCodeAt(this.index);if(r.Character.isLineTerminator(n))13===n&&10===this.source.charCodeAt(this.index+1)&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(42===n){if(47===this.source.charCodeAt(this.index+1)){if(this.index+=2,this.trackComment){t.end={line:this.lineNumber,column:this.index-this.lineStart};var a={multiLine:!0,slice:[e+2,this.index-2],range:[e,this.index],loc:t};i.push(a)}return i}++this.index}else++this.index}if(this.trackComment){t.end={line:this.lineNumber,column:this.index-this.lineStart};var a={multiLine:!0,slice:[e+2,this.index],range:[e,this.index],loc:t};i.push(a)}return this.tolerateUnexpectedToken(),i},e.prototype.scanComments=function(){this.trackComment&&(e=[]);for(var e,t=0===this.index;!this.eof();){var i=this.source.charCodeAt(this.index);if(r.Character.isWhiteSpace(i))++this.index;else if(r.Character.isLineTerminator(i))++this.index,13===i&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,t=!0;else if(47===i)if(47===(i=this.source.charCodeAt(this.index+1))){this.index+=2;var n=this.skipSingleLineComment(2);this.trackComment&&(e=e.concat(n)),t=!0}else if(42===i){this.index+=2;var n=this.skipMultiLineComment();this.trackComment&&(e=e.concat(n))}else break;else if(t&&45===i)if(45===this.source.charCodeAt(this.index+1)&&62===this.source.charCodeAt(this.index+2)){this.index+=3;var n=this.skipSingleLineComment(3);this.trackComment&&(e=e.concat(n))}else break;else if(60!==i||this.isModule)break;else if("!--"===this.source.slice(this.index+1,this.index+4)){this.index+=4;var n=this.skipSingleLineComment(4);this.trackComment&&(e=e.concat(n))}else break}return e},e.prototype.isFutureReservedWord=function(e){switch(e){case"enum":case"export":case"import":case"super":return!0;default:return!1}},e.prototype.isStrictModeReservedWord=function(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return!0;default:return!1}},e.prototype.isRestrictedWord=function(e){return"eval"===e||"arguments"===e},e.prototype.isKeyword=function(e){switch(e.length){case 2:return"if"===e||"in"===e||"do"===e;case 3:return"var"===e||"for"===e||"new"===e||"try"===e||"let"===e;case 4:return"this"===e||"else"===e||"case"===e||"void"===e||"with"===e||"enum"===e;case 5:return"while"===e||"break"===e||"catch"===e||"throw"===e||"const"===e||"yield"===e||"class"===e||"super"===e;case 6:return"return"===e||"typeof"===e||"delete"===e||"switch"===e||"export"===e||"import"===e;case 7:return"default"===e||"finally"===e||"extends"===e;case 8:return"function"===e||"continue"===e||"debugger"===e;case 10:return"instanceof"===e;default:return!1}},e.prototype.codePointAt=function(e){var t=this.source.charCodeAt(e);if(t>=55296&&t<=56319){var i=this.source.charCodeAt(e+1);i>=56320&&i<=57343&&(t=(t-55296)*1024+i-56320+65536)}return t},e.prototype.scanHexEscape=function(e){for(var t="u"===e?4:2,i=0,n=0;n<t;++n)if(!(!this.eof()&&r.Character.isHexDigit(this.source.charCodeAt(this.index))))return null;else i=16*i+s(this.source[this.index++]);return String.fromCharCode(i)},e.prototype.scanUnicodeCodePointEscape=function(){var e=this.source[this.index],t=0;for("}"===e&&this.throwUnexpectedToken();!this.eof()&&(e=this.source[this.index++],r.Character.isHexDigit(e.charCodeAt(0)));)t=16*t+s(e);return(t>1114111||"}"!==e)&&this.throwUnexpectedToken(),r.Character.fromCodePoint(t)},e.prototype.getIdentifier=function(){for(var e=this.index++;!this.eof();){var t=this.source.charCodeAt(this.index);if(92===t||t>=55296&&t<57343)return this.index=e,this.getComplexIdentifier();if(r.Character.isIdentifierPart(t))++this.index;else break}return this.source.slice(e,this.index)},e.prototype.getComplexIdentifier=function(){var e,t=this.codePointAt(this.index),i=r.Character.fromCodePoint(t);for(this.index+=i.length,92===t&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):null!==(e=this.scanHexEscape("u"))&&"\\"!==e&&r.Character.isIdentifierStart(e.charCodeAt(0))||this.throwUnexpectedToken(),i=e);!this.eof()&&(t=this.codePointAt(this.index),r.Character.isIdentifierPart(t));)i+=e=r.Character.fromCodePoint(t),this.index+=e.length,92===t&&(i=i.substr(0,i.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):null!==(e=this.scanHexEscape("u"))&&"\\"!==e&&r.Character.isIdentifierPart(e.charCodeAt(0))||this.throwUnexpectedToken(),i+=e);return i},e.prototype.octalToDecimal=function(e){var t="0"!==e,i=o(e);return!this.eof()&&r.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(t=!0,i=8*i+o(this.source[this.index++]),"0123".indexOf(e)>=0&&!this.eof()&&r.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(i=8*i+o(this.source[this.index++]))),{code:i,octal:t}},e.prototype.scanIdentifier=function(){var e,t=this.index,i=92===this.source.charCodeAt(t)?this.getComplexIdentifier():this.getIdentifier();if(3!=(e=1===i.length?3:this.isKeyword(i)?4:"null"===i?5:"true"===i||"false"===i?1:3)&&t+i.length!==this.index){var n=this.index;this.index=t,this.tolerateUnexpectedToken(a.Messages.InvalidEscapedReservedWord),this.index=n}return{type:e,value:i,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},e.prototype.scanPunctuator=function(){var e=this.index,t=this.source[this.index];switch(t){case"(":case"{":"{"===t&&this.curlyStack.push("{"),++this.index;break;case".":++this.index,"."===this.source[this.index]&&"."===this.source[this.index+1]&&(this.index+=2,t="...");break;case"}":++this.index,this.curlyStack.pop();break;case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;default:">>>="===(t=this.source.substr(this.index,4))?this.index+=4:"==="===(t=t.substr(0,3))||"!=="===t||">>>"===t||"<<="===t||">>="===t||"**="===t?this.index+=3:"&&"===(t=t.substr(0,2))||"||"===t||"=="===t||"!="===t||"+="===t||"-="===t||"*="===t||"/="===t||"++"===t||"--"===t||"<<"===t||">>"===t||"&="===t||"|="===t||"^="===t||"%="===t||"<="===t||">="===t||"=>"===t||"**"===t?this.index+=2:(t=this.source[this.index],"<>=!+-*%&|^/".indexOf(t)>=0&&++this.index)}return this.index===e&&this.throwUnexpectedToken(),{type:7,value:t,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanHexLiteral=function(e){for(var t="";!this.eof()&&r.Character.isHexDigit(this.source.charCodeAt(this.index));)t+=this.source[this.index++];return 0===t.length&&this.throwUnexpectedToken(),r.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseInt("0x"+t,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanBinaryLiteral=function(e){for(var t,i="";!this.eof()&&("0"===(t=this.source[this.index])||"1"===t);)i+=this.source[this.index++];return 0===i.length&&this.throwUnexpectedToken(),!this.eof()&&(t=this.source.charCodeAt(this.index),(r.Character.isIdentifierStart(t)||r.Character.isDecimalDigit(t))&&this.throwUnexpectedToken()),{type:6,value:parseInt(i,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanOctalLiteral=function(e,t){var i="",n=!1;for(r.Character.isOctalDigit(e.charCodeAt(0))?(n=!0,i="0"+this.source[this.index++]):++this.index;!this.eof()&&r.Character.isOctalDigit(this.source.charCodeAt(this.index));)i+=this.source[this.index++];return n||0!==i.length||this.throwUnexpectedToken(),(r.Character.isIdentifierStart(this.source.charCodeAt(this.index))||r.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:6,value:parseInt(i,8),octal:n,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},e.prototype.isImplicitOctalLiteral=function(){for(var e=this.index+1;e<this.length;++e){var t=this.source[e];if("8"===t||"9"===t)return!1;if(!r.Character.isOctalDigit(t.charCodeAt(0)))break}return!0},e.prototype.scanNumericLiteral=function(){var e=this.index,t=this.source[e];n.assert(r.Character.isDecimalDigit(t.charCodeAt(0))||"."===t,"Numeric literal must start with a decimal digit or a decimal point");var i="";if("."!==t){if(i=this.source[this.index++],t=this.source[this.index],"0"===i){if("x"===t||"X"===t)return++this.index,this.scanHexLiteral(e);if("b"===t||"B"===t)return++this.index,this.scanBinaryLiteral(e);if("o"===t||"O"===t||t&&r.Character.isOctalDigit(t.charCodeAt(0))&&this.isImplicitOctalLiteral())return this.scanOctalLiteral(t,e)}for(;r.Character.isDecimalDigit(this.source.charCodeAt(this.index));)i+=this.source[this.index++];t=this.source[this.index]}if("."===t){for(i+=this.source[this.index++];r.Character.isDecimalDigit(this.source.charCodeAt(this.index));)i+=this.source[this.index++];t=this.source[this.index]}if("e"===t||"E"===t)if(i+=this.source[this.index++],("+"===(t=this.source[this.index])||"-"===t)&&(i+=this.source[this.index++]),r.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;r.Character.isDecimalDigit(this.source.charCodeAt(this.index));)i+=this.source[this.index++];else this.throwUnexpectedToken();return r.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseFloat(i),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanStringLiteral=function(){var e=this.index,t=this.source[e];n.assert("'"===t||'"'===t,"String literal must starts with a quote"),++this.index;for(var i=!1,s="";!this.eof();){var o=this.source[this.index++];if(o===t){t="";break}if("\\"===o)if((o=this.source[this.index++])&&r.Character.isLineTerminator(o.charCodeAt(0)))++this.lineNumber,"\r"===o&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(o){case"u":if("{"===this.source[this.index])++this.index,s+=this.scanUnicodeCodePointEscape();else{var u=this.scanHexEscape(o);null===u&&this.throwUnexpectedToken(),s+=u}break;case"x":var l=this.scanHexEscape(o);null===l&&this.throwUnexpectedToken(a.Messages.InvalidHexEscapeSequence),s+=l;break;case"n":s+="\n";break;case"r":s+="\r";break;case"t":s+="	";break;case"b":s+="\b";break;case"f":s+="\f";break;case"v":s+="\v";break;case"8":case"9":s+=o,this.tolerateUnexpectedToken();break;default:if(o&&r.Character.isOctalDigit(o.charCodeAt(0))){var c=this.octalToDecimal(o);i=c.octal||i,s+=String.fromCharCode(c.code)}else s+=o}else if(r.Character.isLineTerminator(o.charCodeAt(0)))break;else s+=o}return""!==t&&(this.index=e,this.throwUnexpectedToken()),{type:8,value:s,octal:i,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanTemplate=function(){var e="",t=!1,i=this.index,n="`"===this.source[i],s=!1,o=2;for(++this.index;!this.eof();){var u=this.source[this.index++];if("`"===u){o=1,s=!0,t=!0;break}if("$"===u){if("{"===this.source[this.index]){this.curlyStack.push("${"),++this.index,t=!0;break}e+=u}else if("\\"===u)if(u=this.source[this.index++],r.Character.isLineTerminator(u.charCodeAt(0)))++this.lineNumber,"\r"===u&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(u){case"n":e+="\n";break;case"r":e+="\r";break;case"t":e+="	";break;case"u":if("{"===this.source[this.index])++this.index,e+=this.scanUnicodeCodePointEscape();else{var l=this.index,c=this.scanHexEscape(u);null!==c?e+=c:(this.index=l,e+=u)}break;case"x":var h=this.scanHexEscape(u);null===h&&this.throwUnexpectedToken(a.Messages.InvalidHexEscapeSequence),e+=h;break;case"b":e+="\b";break;case"f":e+="\f";break;case"v":e+="\v";break;default:"0"===u?(r.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(a.Messages.TemplateOctalLiteral),e+="\0"):r.Character.isOctalDigit(u.charCodeAt(0))?this.throwUnexpectedToken(a.Messages.TemplateOctalLiteral):e+=u}else r.Character.isLineTerminator(u.charCodeAt(0))?(++this.lineNumber,"\r"===u&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,e+="\n"):e+=u}return t||this.throwUnexpectedToken(),n||this.curlyStack.pop(),{type:10,value:this.source.slice(i+1,this.index-o),cooked:e,head:n,tail:s,lineNumber:this.lineNumber,lineStart:this.lineStart,start:i,end:this.index}},e.prototype.testRegExp=function(e,t){var i="￿",n=e,r=this;t.indexOf("u")>=0&&(n=n.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,function(e,t,n){var s=parseInt(t||n,16);return(s>1114111&&r.throwUnexpectedToken(a.Messages.InvalidRegExp),s<=65535)?String.fromCharCode(s):i}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,i));try{RegExp(n)}catch(e){this.throwUnexpectedToken(a.Messages.InvalidRegExp)}try{return new RegExp(e,t)}catch(e){return null}},e.prototype.scanRegExpBody=function(){var e=this.source[this.index];n.assert("/"===e,"Regular expression literal must start with a slash");for(var t=this.source[this.index++],i=!1,s=!1;!this.eof();)if(t+=e=this.source[this.index++],"\\"===e)e=this.source[this.index++],r.Character.isLineTerminator(e.charCodeAt(0))&&this.throwUnexpectedToken(a.Messages.UnterminatedRegExp),t+=e;else if(r.Character.isLineTerminator(e.charCodeAt(0)))this.throwUnexpectedToken(a.Messages.UnterminatedRegExp);else if(i)"]"===e&&(i=!1);else if("/"===e){s=!0;break}else"["===e&&(i=!0);return s||this.throwUnexpectedToken(a.Messages.UnterminatedRegExp),t.substr(1,t.length-2)},e.prototype.scanRegExpFlags=function(){for(var e="",t="";!this.eof();){var i=this.source[this.index];if(!r.Character.isIdentifierPart(i.charCodeAt(0)))break;if(++this.index,"\\"!==i||this.eof())t+=i,e+=i;else if("u"===(i=this.source[this.index])){++this.index;var n=this.index,a=this.scanHexEscape("u");if(null!==a)for(t+=a,e+="\\u";n<this.index;++n)e+=this.source[n];else this.index=n,t+="u",e+="\\u";this.tolerateUnexpectedToken()}else e+="\\",this.tolerateUnexpectedToken()}return t},e.prototype.scanRegExp=function(){var e=this.index,t=this.scanRegExpBody(),i=this.scanRegExpFlags(),n=this.testRegExp(t,i);return{type:9,value:"",pattern:t,flags:i,regex:n,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.lex=function(){if(this.eof())return{type:2,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};var e=this.source.charCodeAt(this.index);return r.Character.isIdentifierStart(e)?this.scanIdentifier():40===e||41===e||59===e?this.scanPunctuator():39===e||34===e?this.scanStringLiteral():46===e?r.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():r.Character.isDecimalDigit(e)?this.scanNumericLiteral():96===e||125===e&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():e>=55296&&e<57343&&r.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()},e}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TokenName={},t.TokenName[1]="Boolean",t.TokenName[2]="<end>",t.TokenName[3]="Identifier",t.TokenName[4]="Keyword",t.TokenName[5]="Null",t.TokenName[6]="Numeric",t.TokenName[7]="Punctuator",t.TokenName[8]="String",t.TokenName[9]="RegularExpression",t.TokenName[10]="Template"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.XHTMLEntities={quot:'"',amp:"&",apos:"'",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",lang:"⟨",rang:"⟩"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(10),r=i(12),a=i(13),s=function(){function e(){this.values=[],this.curly=this.paren=-1}return e.prototype.beforeFunctionExpression=function(e){return["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","**","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="].indexOf(e)>=0},e.prototype.isRegexStart=function(){var e=this.values[this.values.length-1],t=null!==e;switch(e){case"this":case"]":t=!1;break;case")":var i=this.values[this.paren-1];t="if"===i||"while"===i||"for"===i||"with"===i;break;case"}":if(t=!1,"function"===this.values[this.curly-3]){var n=this.values[this.curly-4];t=!!n&&!this.beforeFunctionExpression(n)}else if("function"===this.values[this.curly-4]){var n=this.values[this.curly-5];t=!n||!this.beforeFunctionExpression(n)}}return t},e.prototype.push=function(e){7===e.type||4===e.type?("{"===e.value?this.curly=this.values.length:"("===e.value&&(this.paren=this.values.length),this.values.push(e.value)):this.values.push(null)},e}();t.Tokenizer=function(){function e(e,t){this.errorHandler=new n.ErrorHandler,this.errorHandler.tolerant=!!t&&"boolean"==typeof t.tolerant&&t.tolerant,this.scanner=new r.Scanner(e,this.errorHandler),this.scanner.trackComment=!!t&&"boolean"==typeof t.comment&&t.comment,this.trackRange=!!t&&"boolean"==typeof t.range&&t.range,this.trackLoc=!!t&&"boolean"==typeof t.loc&&t.loc,this.buffer=[],this.reader=new s}return e.prototype.errors=function(){return this.errorHandler.errors},e.prototype.getNextToken=function(){if(0===this.buffer.length){var e=this.scanner.scanComments();if(this.scanner.trackComment)for(var t=0;t<e.length;++t){var i=e[t],n=this.scanner.source.slice(i.slice[0],i.slice[1]),r={type:i.multiLine?"BlockComment":"LineComment",value:n};this.trackRange&&(r.range=i.range),this.trackLoc&&(r.loc=i.loc),this.buffer.push(r)}if(!this.scanner.eof()){var s=void 0;this.trackLoc&&(s={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{}});var o="/"===this.scanner.source[this.scanner.index]&&this.reader.isRegexStart()?this.scanner.scanRegExp():this.scanner.lex();this.reader.push(o);var u={type:a.TokenName[o.type],value:this.scanner.source.slice(o.start,o.end)};this.trackRange&&(u.range=[o.start,o.end]),this.trackLoc&&(s.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},u.loc=s),9===o.type&&(u.regex={pattern:o.pattern,flags:o.flags}),this.buffer.push(u)}}return this.buffer.shift()},e}()}])})},19912,(e,t,i)=>{"use strict";var n;try{e.t,n=e.r(69664)}catch(e){}function r(e){if(null===e)return!1;try{var t="("+e+")",i=n.parse(t,{range:!0});if("Program"!==i.type||1!==i.body.length||"ExpressionStatement"!==i.body[0].type||"ArrowFunctionExpression"!==i.body[0].expression.type&&"FunctionExpression"!==i.body[0].expression.type)return!1;return!0}catch(e){return!1}}function a(e){var t,i="("+e+")",r=n.parse(i,{range:!0}),a=[];if("Program"!==r.type||1!==r.body.length||"ExpressionStatement"!==r.body[0].type||"ArrowFunctionExpression"!==r.body[0].expression.type&&"FunctionExpression"!==r.body[0].expression.type)throw Error("Failed to resolve function");return(r.body[0].expression.params.forEach(function(e){a.push(e.name)}),t=r.body[0].expression.body.range,"BlockStatement"===r.body[0].expression.body.type)?Function(a,i.slice(t[0]+1,t[1]-1)):Function(a,"return "+i.slice(t[0],t[1]))}function s(e){return e.toString()}function o(e){return"[object Function]"===Object.prototype.toString.call(e)}t.exports=new(e.r(68774))("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:r,construct:a,predicate:o,represent:s})},36133,(e,t,i)=>{"use strict";var n=e.r(58628);t.exports=n.DEFAULT=new n({include:[e.r(8095)],explicit:[e.r(8706),e.r(78301),e.r(19912)]})},25170,(e,t,i)=>{"use strict";var n=e.r(74168);function r(e,t,i,n,r){this.name=e,this.buffer=t,this.position=i,this.line=n,this.column=r}r.prototype.getSnippet=function(e,t){var i,r,a,s,o;if(!this.buffer)return null;for(e=e||4,t=t||75,i="",r=this.position;r>0&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(r-1));)if(r-=1,this.position-r>t/2-1){i=" ... ",r+=5;break}for(a="",s=this.position;s<this.buffer.length&&-1==="\0\r\n\u2028\u2029".indexOf(this.buffer.charAt(s));)if((s+=1)-this.position>t/2-1){a=" ... ",s-=5;break}return o=this.buffer.slice(r,s),n.repeat(" ",e)+i+o+a+"\n"+n.repeat(" ",e+this.position-r+i.length)+"^"},r.prototype.toString=function(e){var t,i="";return this.name&&(i+='in "'+this.name+'" '),i+="at line "+(this.line+1)+", column "+(this.column+1),!e&&(t=this.getSnippet())&&(i+=":\n"+t),i},t.exports=r},89491,(e,t,i)=>{"use strict";var n=e.r(74168),r=e.r(66459),a=e.r(25170),s=e.r(8095),o=e.r(36133),u=Object.prototype.hasOwnProperty,l=1,c=2,h=3,d=4,p=1,m=2,f=3,y=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,g=/[\x85\u2028\u2029]/,v=/[,\[\]\{\}]/,w=/^(?:!|!!|![a-z\-]+!)$/i,k=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function b(e){return Object.prototype.toString.call(e)}function x(e){return 10===e||13===e}function D(e){return 9===e||32===e}function A(e){return 9===e||32===e||10===e||13===e}function C(e){return 44===e||91===e||93===e||123===e||125===e}function E(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function S(e){return 120===e?2:117===e?4:8*(85===e)}function T(e){return 48<=e&&e<=57?e-48:-1}function F(e){return 48===e?"\0":97===e?"\x07":98===e?"\b":116===e||9===e?"	":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"\x1b":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function B(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function I(e,t,i){"__proto__"===t?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:i}):e[t]=i}for(var M=Array(256),P=Array(256),N=0;N<256;N++)M[N]=+!!F(N),P[N]=F(N);function R(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||o,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function W(e,t){return new r(t,new a(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function q(e,t){throw W(e,t)}function L(e,t){e.onWarning&&e.onWarning.call(null,W(e,t))}var O={YAML:function(e,t,i){var n,r,a;null!==e.version&&q(e,"duplication of %YAML directive"),1!==i.length&&q(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&q(e,"ill-formed argument of the YAML directive"),r=parseInt(n[1],10),a=parseInt(n[2],10),1!==r&&q(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=a<2,1!==a&&2!==a&&L(e,"unsupported YAML version of the document")},TAG:function(e,t,i){var n,r;2!==i.length&&q(e,"TAG directive accepts exactly two arguments"),n=i[0],r=i[1],w.test(n)||q(e,"ill-formed tag handle (first argument) of the TAG directive"),u.call(e.tagMap,n)&&q(e,'there is a previously declared suffix for "'+n+'" tag handle'),k.test(r)||q(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagMap[n]=r}};function j(e,t,i,n){var r,a,s,o;if(t<i){if(o=e.input.slice(t,i),n)for(r=0,a=o.length;r<a;r+=1)9===(s=o.charCodeAt(r))||32<=s&&s<=1114111||q(e,"expected valid JSON character");else y.test(o)&&q(e,"the stream contains non-printable characters");e.result+=o}}function U(e,t,i,r){var a,s,o,l;for(n.isObject(i)||q(e,"cannot merge mappings; the provided source object is unacceptable"),o=0,l=(a=Object.keys(i)).length;o<l;o+=1)s=a[o],u.call(t,s)||(I(t,s,i[s]),r[s]=!0)}function G(e,t,i,n,r,a,s,o){var l,c;if(Array.isArray(r))for(l=0,c=(r=Array.prototype.slice.call(r)).length;l<c;l+=1)Array.isArray(r[l])&&q(e,"nested arrays are not supported inside keys"),"object"==typeof r&&"[object Object]"===b(r[l])&&(r[l]="[object Object]");if("object"==typeof r&&"[object Object]"===b(r)&&(r="[object Object]"),r=String(r),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(a))for(l=0,c=a.length;l<c;l+=1)U(e,t,a[l],i);else U(e,t,a,i);else!e.json&&!u.call(i,r)&&u.call(t,r)&&(e.line=s||e.line,e.position=o||e.position,q(e,"duplicated mapping key")),I(t,r,a),delete i[r];return t}function H(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):q(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function Y(e,t,i){for(var n=0,r=e.input.charCodeAt(e.position);0!==r;){for(;D(r);)r=e.input.charCodeAt(++e.position);if(t&&35===r)do r=e.input.charCodeAt(++e.position);while(10!==r&&13!==r&&0!==r)if(x(r))for(H(e),r=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position);else break}return -1!==i&&0!==n&&e.lineIndent<i&&L(e,"deficient indentation"),n}function z(e){var t,i=e.position;return!!((45===(t=e.input.charCodeAt(i))||46===t)&&t===e.input.charCodeAt(i+1)&&t===e.input.charCodeAt(i+2)&&(i+=3,0===(t=e.input.charCodeAt(i))||A(t)))||!1}function $(e,t){1===t?e.result+=" ":t>1&&(e.result+=n.repeat("\n",t-1))}function J(e,t,i){var n,r,a,s,o,u,l,c,h=e.kind,d=e.result;if(A(c=e.input.charCodeAt(e.position))||C(c)||35===c||38===c||42===c||33===c||124===c||62===c||39===c||34===c||37===c||64===c||96===c||(63===c||45===c)&&(A(n=e.input.charCodeAt(e.position+1))||i&&C(n)))return!1;for(e.kind="scalar",e.result="",r=a=e.position,s=!1;0!==c;){if(58===c){if(A(n=e.input.charCodeAt(e.position+1))||i&&C(n))break}else if(35===c){if(A(e.input.charCodeAt(e.position-1)))break}else if(e.position===e.lineStart&&z(e)||i&&C(c))break;else if(x(c)){if(o=e.line,u=e.lineStart,l=e.lineIndent,Y(e,!1,-1),e.lineIndent>=t){s=!0,c=e.input.charCodeAt(e.position);continue}e.position=a,e.line=o,e.lineStart=u,e.lineIndent=l;break}s&&(j(e,r,a,!1),$(e,e.line-o),r=a=e.position,s=!1),D(c)||(a=e.position+1),c=e.input.charCodeAt(++e.position)}return j(e,r,a,!1),!!e.result||(e.kind=h,e.result=d,!1)}function X(e,t){var i,n,r;if(39!==(i=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=r=e.position;0!==(i=e.input.charCodeAt(e.position));)if(39===i){if(j(e,n,e.position,!0),39!==(i=e.input.charCodeAt(++e.position)))return!0;n=e.position,e.position++,r=e.position}else x(i)?(j(e,n,r,!0),$(e,Y(e,!1,t)),n=r=e.position):e.position===e.lineStart&&z(e)?q(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);q(e,"unexpected end of the stream within a single quoted scalar")}function K(e,t){var i,n,r,a,s,o;if(34!==(o=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=n=e.position;0!==(o=e.input.charCodeAt(e.position));)if(34===o)return j(e,i,e.position,!0),e.position++,!0;else if(92===o){if(j(e,i,e.position,!0),x(o=e.input.charCodeAt(++e.position)))Y(e,!1,t);else if(o<256&&M[o])e.result+=P[o],e.position++;else if((s=S(o))>0){for(r=s,a=0;r>0;r--)(s=E(o=e.input.charCodeAt(++e.position)))>=0?a=(a<<4)+s:q(e,"expected hexadecimal character");e.result+=B(a),e.position++}else q(e,"unknown escape sequence");i=n=e.position}else x(o)?(j(e,i,n,!0),$(e,Y(e,!1,t)),i=n=e.position):e.position===e.lineStart&&z(e)?q(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position);q(e,"unexpected end of the stream within a double quoted scalar")}function V(e,t){var i,n,r,a,s,o,u,c,h,d,p=!0,m=e.tag,f=e.anchor,y={};if(91===(d=e.input.charCodeAt(e.position)))r=93,o=!1,n=[];else{if(123!==d)return!1;r=125,o=!0,n={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=n),d=e.input.charCodeAt(++e.position);0!==d;){if(Y(e,!0,t),(d=e.input.charCodeAt(e.position))===r)return e.position++,e.tag=m,e.anchor=f,e.kind=o?"mapping":"sequence",e.result=n,!0;p||q(e,"missed comma between flow collection entries"),c=u=h=null,a=s=!1,63===d&&A(e.input.charCodeAt(e.position+1))&&(a=s=!0,e.position++,Y(e,!0,t)),i=e.line,en(e,t,l,!1,!0),c=e.tag,u=e.result,Y(e,!0,t),d=e.input.charCodeAt(e.position),(s||e.line===i)&&58===d&&(a=!0,d=e.input.charCodeAt(++e.position),Y(e,!0,t),en(e,t,l,!1,!0),h=e.result),o?G(e,n,y,c,u,h):a?n.push(G(e,null,y,c,u,h)):n.push(u),Y(e,!0,t),44===(d=e.input.charCodeAt(e.position))?(p=!0,d=e.input.charCodeAt(++e.position)):p=!1}q(e,"unexpected end of the stream within a flow collection")}function _(e,t){var i,r,a,s,o=p,u=!1,l=!1,c=t,h=0,d=!1;if(124===(s=e.input.charCodeAt(e.position)))r=!1;else{if(62!==s)return!1;r=!0}for(e.kind="scalar",e.result="";0!==s;)if(43===(s=e.input.charCodeAt(++e.position))||45===s)p===o?o=43===s?f:m:q(e,"repeat of a chomping mode identifier");else if((a=T(s))>=0)0===a?q(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?q(e,"repeat of an indentation width identifier"):(c=t+a-1,l=!0);else break;if(D(s)){do s=e.input.charCodeAt(++e.position);while(D(s))if(35===s)do s=e.input.charCodeAt(++e.position);while(!x(s)&&0!==s)}for(;0!==s;){for(H(e),e.lineIndent=0,s=e.input.charCodeAt(e.position);(!l||e.lineIndent<c)&&32===s;)e.lineIndent++,s=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>c&&(c=e.lineIndent),x(s)){h++;continue}if(e.lineIndent<c){o===f?e.result+=n.repeat("\n",u?1+h:h):o===p&&u&&(e.result+="\n");break}for(r?D(s)?(d=!0,e.result+=n.repeat("\n",u?1+h:h)):d?(d=!1,e.result+=n.repeat("\n",h+1)):0===h?u&&(e.result+=" "):e.result+=n.repeat("\n",h):e.result+=n.repeat("\n",u?1+h:h),u=!0,l=!0,h=0,i=e.position;!x(s)&&0!==s;)s=e.input.charCodeAt(++e.position);j(e,i,e.position,!1)}return!0}function Q(e,t){var i,n,r=e.tag,a=e.anchor,s=[],o=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=s),n=e.input.charCodeAt(e.position);0!==n&&45===n&&A(e.input.charCodeAt(e.position+1));){if(o=!0,e.position++,Y(e,!0,-1)&&e.lineIndent<=t){s.push(null),n=e.input.charCodeAt(e.position);continue}if(i=e.line,en(e,t,h,!1,!0),s.push(e.result),Y(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&0!==n)q(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break}return!!o&&(e.tag=r,e.anchor=a,e.kind="sequence",e.result=s,!0)}function Z(e,t,i){var n,r,a,s,o,u=e.tag,l=e.anchor,h={},p={},m=null,f=null,y=null,g=!1,v=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=h),o=e.input.charCodeAt(e.position);0!==o;){if(n=e.input.charCodeAt(e.position+1),a=e.line,s=e.position,(63===o||58===o)&&A(n))63===o?(g&&(G(e,h,p,m,f,null),m=f=y=null),v=!0,g=!0,r=!0):g?(g=!1,r=!0):q(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,o=n;else if(en(e,i,c,!1,!0))if(e.line===a){for(o=e.input.charCodeAt(e.position);D(o);)o=e.input.charCodeAt(++e.position);if(58===o)A(o=e.input.charCodeAt(++e.position))||q(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(G(e,h,p,m,f,null),m=f=y=null),v=!0,g=!1,r=!1,m=e.tag,f=e.result;else{if(!v)return e.tag=u,e.anchor=l,!0;q(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return e.tag=u,e.anchor=l,!0;q(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}else break;if((e.line===a||e.lineIndent>t)&&(en(e,t,d,!0,r)&&(g?f=e.result:y=e.result),g||(G(e,h,p,m,f,y,a,s),m=f=y=null),Y(e,!0,-1),o=e.input.charCodeAt(e.position)),e.lineIndent>t&&0!==o)q(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&G(e,h,p,m,f,null),v&&(e.tag=u,e.anchor=l,e.kind="mapping",e.result=h),v}function ee(e){var t,i,n,r,a=!1,s=!1;if(33!==(r=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&q(e,"duplication of a tag property"),60===(r=e.input.charCodeAt(++e.position))?(a=!0,r=e.input.charCodeAt(++e.position)):33===r?(s=!0,i="!!",r=e.input.charCodeAt(++e.position)):i="!",t=e.position,a){do r=e.input.charCodeAt(++e.position);while(0!==r&&62!==r)e.position<e.length?(n=e.input.slice(t,e.position),r=e.input.charCodeAt(++e.position)):q(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!A(r);)33===r&&(s?q(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(t-1,e.position+1),w.test(i)||q(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),v.test(n)&&q(e,"tag suffix cannot contain flow indicator characters")}return n&&!k.test(n)&&q(e,"tag name cannot contain such characters: "+n),a?e.tag=n:u.call(e.tagMap,i)?e.tag=e.tagMap[i]+n:"!"===i?e.tag="!"+n:"!!"===i?e.tag="tag:yaml.org,2002:"+n:q(e,'undeclared tag handle "'+i+'"'),!0}function et(e){var t,i;if(38!==(i=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&q(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!A(i)&&!C(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&q(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function ei(e){var t,i,n;if(42!==(n=e.input.charCodeAt(e.position)))return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!A(n)&&!C(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&q(e,"name of an alias node must contain at least one character"),i=e.input.slice(t,e.position),u.call(e.anchorMap,i)||q(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],Y(e,!0,-1),!0}function en(e,t,i,n,r){var a,s,o,p,m,f,y,g,v=1,w=!1,k=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=s=o=d===i||h===i,n&&Y(e,!0,-1)&&(w=!0,e.lineIndent>t?v=1:e.lineIndent===t?v=0:e.lineIndent<t&&(v=-1)),1===v)for(;ee(e)||et(e);)Y(e,!0,-1)?(w=!0,o=a,e.lineIndent>t?v=1:e.lineIndent===t?v=0:e.lineIndent<t&&(v=-1)):o=!1;if(o&&(o=w||r),(1===v||d===i)&&(y=l===i||c===i?t:t+1,g=e.position-e.lineStart,1===v?o&&(Q(e,g)||Z(e,g,y))||V(e,y)?k=!0:(s&&_(e,y)||X(e,y)||K(e,y)?k=!0:ei(e)?(k=!0,(null!==e.tag||null!==e.anchor)&&q(e,"alias node should not have any properties")):J(e,y,l===i)&&(k=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===v&&(k=o&&Q(e,g))),null!==e.tag&&"!"!==e.tag)if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&q(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),p=0,m=e.implicitTypes.length;p<m;p+=1)if((f=e.implicitTypes[p]).resolve(e.result)){e.result=f.construct(e.result),e.tag=f.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else u.call(e.typeMap[e.kind||"fallback"],e.tag)?(f=e.typeMap[e.kind||"fallback"][e.tag],null!==e.result&&f.kind!==e.kind&&q(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+f.kind+'", not "'+e.kind+'"'),f.resolve(e.result)?(e.result=f.construct(e.result),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):q(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):q(e,"unknown tag !<"+e.tag+">");return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||k}function er(e){var t,i,n,r,a=e.position,s=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};0!==(r=e.input.charCodeAt(e.position))&&(Y(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0)&&37===r);){for(s=!0,r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!A(r);)r=e.input.charCodeAt(++e.position);for(i=e.input.slice(t,e.position),n=[],i.length<1&&q(e,"directive name must not be less than one character in length");0!==r;){for(;D(r);)r=e.input.charCodeAt(++e.position);if(35===r){do r=e.input.charCodeAt(++e.position);while(0!==r&&!x(r))break}if(x(r))break;for(t=e.position;0!==r&&!A(r);)r=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==r&&H(e),u.call(O,i)?O[i](e,i,n):L(e,'unknown document directive "'+i+'"')}if(Y(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,Y(e,!0,-1)):s&&q(e,"directives end mark is expected"),en(e,e.lineIndent-1,d,!1,!0),Y(e,!0,-1),e.checkLineBreaks&&g.test(e.input.slice(a,e.position))&&L(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&z(e)){46===e.input.charCodeAt(e.position)&&(e.position+=3,Y(e,!0,-1));return}e.position<e.length-1&&q(e,"end of the stream or a document separator is expected")}function ea(e,t){e=String(e),t=t||{},0!==e.length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var i=new R(e,t),n=e.indexOf("\0");for(-1!==n&&(i.position=n,q(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)er(i);return i.documents}function es(e,t,i){null!==t&&"object"==typeof t&&void 0===i&&(i=t,t=null);var n=ea(e,i);if("function"!=typeof t)return n;for(var r=0,a=n.length;r<a;r+=1)t(n[r])}function eo(e,t){var i=ea(e,t);if(0!==i.length){if(1===i.length)return i[0];throw new r("expected a single document in the stream, but found more")}}function eu(e,t,i){return"object"==typeof t&&null!==t&&void 0===i&&(i=t,t=null),es(e,t,n.extend({schema:s},i))}function el(e,t){return eo(e,n.extend({schema:s},t))}t.exports.loadAll=es,t.exports.load=eo,t.exports.safeLoadAll=eu,t.exports.safeLoad=el},19653,(e,t,i)=>{"use strict";var n=e.r(74168),r=e.r(66459),a=e.r(36133),s=e.r(8095),o=Object.prototype.toString,u=Object.prototype.hasOwnProperty,l=9,c=10,h=13,d=32,p=33,m=34,f=35,y=37,g=38,v=39,w=42,k=44,b=45,x=58,D=61,A=62,C=63,E=64,S=91,T=93,F=96,B=123,I=124,M=125,P={};P[0]="\\0",P[7]="\\a",P[8]="\\b",P[9]="\\t",P[10]="\\n",P[11]="\\v",P[12]="\\f",P[13]="\\r",P[27]="\\e",P[34]='\\"',P[92]="\\\\",P[133]="\\N",P[160]="\\_",P[8232]="\\L",P[8233]="\\P";var N=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function R(e,t){var i,n,r,a,s,o,l;if(null===t)return{};for(r=0,i={},a=(n=Object.keys(t)).length;r<a;r+=1)o=String(t[s=n[r]]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(l=e.compiledTypeMap.fallback[s])&&u.call(l.styleAliases,o)&&(o=l.styleAliases[o]),i[s]=o;return i}function W(e){var t,i,a;if(t=e.toString(16).toUpperCase(),e<=255)i="x",a=2;else if(e<=65535)i="u",a=4;else if(e<=0xffffffff)i="U",a=8;else throw new r("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+i+n.repeat("0",a-t.length)+t}function q(e){this.schema=e.schema||a,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=n.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=R(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function L(e,t){for(var i,r=n.repeat(" ",t),a=0,s=-1,o="",u=e.length;a<u;)-1===(s=e.indexOf("\n",a))?(i=e.slice(a),a=u):(i=e.slice(a,s+1),a=s+1),i.length&&"\n"!==i&&(o+=r),o+=i;return o}function O(e,t){return"\n"+n.repeat(" ",e.indent*t)}function j(e,t){var i,n;for(i=0,n=e.implicitTypes.length;i<n;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}function U(e){return e===d||e===l}function G(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&65279!==e||65536<=e&&e<=1114111}function H(e){return G(e)&&!U(e)&&65279!==e&&e!==h&&e!==c}function Y(e,t){return G(e)&&65279!==e&&e!==k&&e!==S&&e!==T&&e!==B&&e!==M&&e!==x&&(e!==f||t&&H(t))}function z(e){return G(e)&&65279!==e&&!U(e)&&e!==b&&e!==C&&e!==x&&e!==k&&e!==S&&e!==T&&e!==B&&e!==M&&e!==f&&e!==g&&e!==w&&e!==p&&e!==I&&e!==D&&e!==A&&e!==v&&e!==m&&e!==y&&e!==E&&e!==F}function $(e){return/^\n* /.test(e)}var J=1,X=2,K=3,V=4,_=5;function Q(e,t,i,n,r){var a,s,o,u=!1,l=!1,h=-1!==n,d=-1,p=z(e.charCodeAt(0))&&!U(e.charCodeAt(e.length-1));if(t)for(a=0;a<e.length;a++){if(!G(s=e.charCodeAt(a)))return _;o=a>0?e.charCodeAt(a-1):null,p=p&&Y(s,o)}else{for(a=0;a<e.length;a++){if((s=e.charCodeAt(a))===c)u=!0,h&&(l=l||a-d-1>n&&" "!==e[d+1],d=a);else if(!G(s))return _;o=a>0?e.charCodeAt(a-1):null,p=p&&Y(s,o)}l=l||h&&a-d-1>n&&" "!==e[d+1]}return u||l?i>9&&$(e)?_:l?V:K:p&&!r(e)?J:X}function Z(e,t,i,n){e.dump=function(){if(0===t.length)return"''";if(!e.noCompatMode&&-1!==N.indexOf(t))return"'"+t+"'";var a=e.indent*Math.max(1,i),s=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-a);function o(t){return j(e,t)}switch(Q(t,n||e.flowLevel>-1&&i>=e.flowLevel,e.indent,s,o)){case J:return t;case X:return"'"+t.replace(/'/g,"''")+"'";case K:return"|"+ee(t,e.indent)+et(L(t,a));case V:return">"+ee(t,e.indent)+et(L(ei(t,s),a));case _:return'"'+er(t,s)+'"';default:throw new r("impossible error: invalid scalar style")}}()}function ee(e,t){var i=$(e)?String(t):"",n="\n"===e[e.length-1];return i+(n&&("\n"===e[e.length-2]||"\n"===e)?"+":n?"":"-")+"\n"}function et(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function ei(e,t){for(var i,n,r=/(\n+)([^\n]*)/g,a=function(){var i=e.indexOf("\n");return r.lastIndex=i=-1!==i?i:e.length,en(e.slice(0,i),t)}(),s="\n"===e[0]||" "===e[0];n=r.exec(e);){var o=n[1],u=n[2];i=" "===u[0],a+=o+(s||i||""===u?"":"\n")+en(u,t),s=i}return a}function en(e,t){if(""===e||" "===e[0])return e;for(var i,n,r=/ [^ ]/g,a=0,s=0,o=0,u="";i=r.exec(e);)(o=i.index)-a>t&&(n=s>a?s:o,u+="\n"+e.slice(a,n),a=n+1),s=o;return u+="\n",e.length-a>t&&s>a?u+=e.slice(a,s)+"\n"+e.slice(s+1):u+=e.slice(a),u.slice(1)}function er(e){for(var t,i,n,r="",a=0;a<e.length;a++){if((t=e.charCodeAt(a))>=55296&&t<=56319&&(i=e.charCodeAt(a+1))>=56320&&i<=57343){r+=W((t-55296)*1024+i-56320+65536),a++;continue}r+=!(n=P[t])&&G(t)?e[a]:n||W(t)}return r}function ea(e,t,i){var n,r,a="",s=e.tag;for(n=0,r=i.length;n<r;n+=1)ec(e,t,i[n],!1,!1)&&(0!==n&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"}function es(e,t,i,n){var r,a,s="",o=e.tag;for(r=0,a=i.length;r<a;r+=1)ec(e,t+1,i[r],!0,!0)&&(n&&0===r||(s+=O(e,t)),e.dump&&c===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=o,e.dump=s||"[]"}function eo(e,t,i){var n,r,a,s,o,u="",l=e.tag,c=Object.keys(i);for(n=0,r=c.length;n<r;n+=1)o="",0!==n&&(o+=", "),e.condenseFlow&&(o+='"'),s=i[a=c[n]],ec(e,t,a,!1,!1)&&(e.dump.length>1024&&(o+="? "),o+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),ec(e,t,s,!1,!1)&&(o+=e.dump,u+=o));e.tag=l,e.dump="{"+u+"}"}function eu(e,t,i,n){var a,s,o,u,l,h,d="",p=e.tag,m=Object.keys(i);if(!0===e.sortKeys)m.sort();else if("function"==typeof e.sortKeys)m.sort(e.sortKeys);else if(e.sortKeys)throw new r("sortKeys must be a boolean or a function");for(a=0,s=m.length;a<s;a+=1)h="",n&&0===a||(h+=O(e,t)),u=i[o=m[a]],ec(e,t+1,o,!0,!0,!0)&&((l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&c===e.dump.charCodeAt(0)?h+="?":h+="? "),h+=e.dump,l&&(h+=O(e,t)),ec(e,t+1,u,!0,l)&&(e.dump&&c===e.dump.charCodeAt(0)?h+=":":h+=": ",h+=e.dump,d+=h));e.tag=p,e.dump=d||"{}"}function el(e,t,i){var n,a,s,l,c,h;for(s=0,l=(a=i?e.explicitTypes:e.implicitTypes).length;s<l;s+=1)if(((c=a[s]).instanceOf||c.predicate)&&(!c.instanceOf||"object"==typeof t&&t instanceof c.instanceOf)&&(!c.predicate||c.predicate(t))){if(e.tag=i?c.tag:"?",c.represent){if(h=e.styleMap[c.tag]||c.defaultStyle,"[object Function]"===o.call(c.represent))n=c.represent(t,h);else if(u.call(c.represent,h))n=c.represent[h](t,h);else throw new r("!<"+c.tag+'> tag resolver accepts not "'+h+'" style');e.dump=n}return!0}return!1}function ec(e,t,i,n,a,s){e.tag=null,e.dump=i,el(e,i,!1)||el(e,i,!0);var u=o.call(e.dump);n&&(n=e.flowLevel<0||e.flowLevel>t);var l,c,h="[object Object]"===u||"[object Array]"===u;if(h&&(c=-1!==(l=e.duplicates.indexOf(i))),(null!==e.tag&&"?"!==e.tag||c||2!==e.indent&&t>0)&&(a=!1),c&&e.usedDuplicates[l])e.dump="*ref_"+l;else{if(h&&c&&!e.usedDuplicates[l]&&(e.usedDuplicates[l]=!0),"[object Object]"===u)n&&0!==Object.keys(e.dump).length?(eu(e,t,e.dump,a),c&&(e.dump="&ref_"+l+e.dump)):(eo(e,t,e.dump),c&&(e.dump="&ref_"+l+" "+e.dump));else if("[object Array]"===u){var d=e.noArrayIndent&&t>0?t-1:t;n&&0!==e.dump.length?(es(e,d,e.dump,a),c&&(e.dump="&ref_"+l+e.dump)):(ea(e,d,e.dump),c&&(e.dump="&ref_"+l+" "+e.dump))}else if("[object String]"===u)"?"!==e.tag&&Z(e,e.dump,t,s);else{if(e.skipInvalid)return!1;throw new r("unacceptable kind of an object to dump "+u)}null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function eh(e,t){var i,n,r=[],a=[];for(ed(e,r,a),i=0,n=a.length;i<n;i+=1)t.duplicates.push(r[a[i]]);t.usedDuplicates=Array(n)}function ed(e,t,i){var n,r,a;if(null!==e&&"object"==typeof e)if(-1!==(r=t.indexOf(e)))-1===i.indexOf(r)&&i.push(r);else if(t.push(e),Array.isArray(e))for(r=0,a=e.length;r<a;r+=1)ed(e[r],t,i);else for(r=0,a=(n=Object.keys(e)).length;r<a;r+=1)ed(e[n[r]],t,i)}function ep(e,t){var i=new q(t=t||{});return(i.noRefs||eh(e,i),ec(i,0,e,!0,!0))?i.dump+"\n":""}function em(e,t){return ep(e,n.extend({schema:s},t))}t.exports.dump=ep,t.exports.safeDump=em},48779,(e,t,i)=>{"use strict";var n=e.r(89491),r=e.r(19653);function a(e){return function(){throw Error("Function "+e+" is deprecated and cannot be used.")}}t.exports.Type=e.r(68774),t.exports.Schema=e.r(58628),t.exports.FAILSAFE_SCHEMA=e.r(4548),t.exports.JSON_SCHEMA=e.r(93278),t.exports.CORE_SCHEMA=e.r(14022),t.exports.DEFAULT_SAFE_SCHEMA=e.r(8095),t.exports.DEFAULT_FULL_SCHEMA=e.r(36133),t.exports.load=n.load,t.exports.loadAll=n.loadAll,t.exports.safeLoad=n.safeLoad,t.exports.safeLoadAll=n.safeLoadAll,t.exports.dump=r.dump,t.exports.safeDump=r.safeDump,t.exports.YAMLException=e.r(66459),t.exports.MINIMAL_SCHEMA=e.r(4548),t.exports.SAFE_SCHEMA=e.r(8095),t.exports.DEFAULT_SCHEMA=e.r(36133),t.exports.scan=a("scan"),t.exports.parse=a("parse"),t.exports.compose=a("compose"),t.exports.addConstructor=a("addConstructor")},94166,(e,t,i)=>{"use strict";t.exports=e.r(48779)},61102,(__turbopack_context__,module,exports)=>{"use strict";let yaml=__turbopack_context__.r(94166),engines=exports=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(e,t){let i=Object.assign({replacer:null,space:2},t);return JSON.stringify(e,i.replacer,i.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return!1!==wrap&&(str="(function() {\nreturn "+str.trim()+";\n}());"),eval(str)||{}}catch(err){if(!1!==wrap&&/(unexpected|identifier)/i.test(err.message))return parse(str,options,!1);throw SyntaxError(err)}},stringify:function(){throw Error("stringifying JavaScript is not supported")}}},18778,(e,t,i)=>{"use strict";t.exports=function(e){return"string"==typeof e&&"\uFEFF"===e.charAt(0)?e.slice(1):e}},23699,(e,t,i)=>{"use strict";let n=e.r(18778),r=e.r(82864);i.define=function(e,t,i){Reflect.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:i})},i.isBuffer=function(e){return"buffer"===r(e)},i.isObject=function(e){return"object"===r(e)},i.toBuffer=function(e){return"string"==typeof e?Buffer.from(e):e},i.toString=function(e){if(i.isBuffer(e))return n(String(e));if("string"!=typeof e)throw TypeError("expected input to be a string or buffer");return n(e)},i.arrayify=function(e){return e?Array.isArray(e)?e:[e]:[]},i.startsWith=function(e,t,i){return"number"!=typeof i&&(i=t.length),e.slice(0,i)===t}},79813,(e,t,i)=>{"use strict";let n=e.r(61102),r=e.r(23699);t.exports=function(e){let t=Object.assign({},e);return t.delimiters=r.arrayify(t.delims||t.delimiters||"---"),1===t.delimiters.length&&t.delimiters.push(t.delimiters[0]),t.language=(t.language||t.lang||"yaml").toLowerCase(),t.engines=Object.assign({},n,t.parsers,t.engines),t}},11187,(e,t,i)=>{"use strict";function n(e){switch(e.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return e}}t.exports=function(e,t){let i=t.engines[e]||t.engines[n(e)];if(void 0===i)throw Error('gray-matter engine "'+e+'" is not registered');return"function"==typeof i&&(i={parse:i}),i}},25018,(e,t,i)=>{"use strict";let n=e.r(82864),r=e.r(11187),a=e.r(79813);function s(e){return"\n"!==e.slice(-1)?e+"\n":e}t.exports=function(e,t,i){if(null==t&&null==i)switch(n(e)){case"object":t=e.data,i={};break;case"string":return e;default:throw TypeError("expected file to be a string or object")}let o=e.content,u=a(i);if(null==t){if(!u.data)return e;t=u.data}let l=e.language||u.language,c=r(l,u);if("function"!=typeof c.stringify)throw TypeError('expected "'+l+'.stringify" to be a function');t=Object.assign({},e.data,t);let h=u.delimiters[0],d=u.delimiters[1],p=c.stringify(t,i).trim(),m="";return"{}"!==p&&(m=s(h)+s(p)+s(d)),"string"==typeof e.excerpt&&""!==e.excerpt&&-1===o.indexOf(e.excerpt.trim())&&(m+=s(e.excerpt)+s(d)),m+s(o)}},11806,(e,t,i)=>{"use strict";let n=e.r(79813);t.exports=function(e,t){let i=n(t);if(null==e.data&&(e.data={}),"function"==typeof i.excerpt)return i.excerpt(e,i);let r=e.data.excerpt_separator||i.excerpt_separator;if(null==r&&(!1===i.excerpt||null==i.excerpt))return e;let a="string"==typeof i.excerpt?i.excerpt:r||i.delimiters[0],s=e.content.indexOf(a);return -1!==s&&(e.excerpt=e.content.slice(0,s)),e}},93461,(e,t,i)=>{"use strict";let n=e.r(82864),r=e.r(25018),a=e.r(23699);t.exports=function(e){return"object"!==n(e)&&(e={content:e}),"object"!==n(e.data)&&(e.data={}),e.contents&&null==e.content&&(e.content=e.contents),a.define(e,"orig",a.toBuffer(e.content)),a.define(e,"language",e.language||""),a.define(e,"matter",e.matter||""),a.define(e,"stringify",function(t,i){return i&&i.language&&(e.language=i.language),r(e,t,i)}),e.content=a.toString(e.content),e.isEmpty=!1,e.excerpt="",e}},83453,(e,t,i)=>{"use strict";let n=e.r(11187),r=e.r(79813);t.exports=function(e,t,i){let a=r(i),s=n(e,a);if("function"!=typeof s.parse)throw TypeError('expected "'+e+'.parse" to be a function');return s.parse(t,a)}},79360,(e,t,i)=>{"use strict";let n=e.r(22734),r=e.r(29730),a=e.r(79813),s=e.r(25018),o=e.r(11806),u=e.r(61102),l=e.r(93461),c=e.r(83453),h=e.r(23699);function d(e,t){if(""===e)return{data:{},content:e,excerpt:"",orig:e};let i=l(e),n=d.cache[i.content];if(!t){if(n)return(i=Object.assign({},n)).orig=n.orig,i;d.cache[i.content]=i}return p(i,t)}function p(e,t){let i=a(t),n=i.delimiters[0],s="\n"+i.delimiters[1],u=e.content;i.language&&(e.language=i.language);let l=n.length;if(!h.startsWith(u,n,l))return o(e,i),e;if(u.charAt(l)===n.slice(-1))return e;let p=(u=u.slice(l)).length,m=d.language(u,i);m.name&&(e.language=m.name,u=u.slice(m.raw.length));let f=u.indexOf(s);return -1===f&&(f=p),e.matter=u.slice(0,f),""===e.matter.replace(/^\s*#[^\n]+/gm,"").trim()?(e.isEmpty=!0,e.empty=e.content,e.data={}):e.data=c(e.language,e.matter,i),f===p?e.content="":(e.content=u.slice(f+s.length),"\r"===e.content[0]&&(e.content=e.content.slice(1)),"\n"===e.content[0]&&(e.content=e.content.slice(1))),o(e,i),(!0===i.sections||"function"==typeof i.section)&&r(e,i.section),e}d.engines=u,d.stringify=function(e,t,i){return"string"==typeof e&&(e=d(e,i)),s(e,t,i)},d.read=function(e,t){let i=d(n.readFileSync(e,"utf8"),t);return i.path=e,i},d.test=function(e,t){return h.startsWith(e,a(t).delimiters[0])},d.language=function(e,t){let i=a(t).delimiters[0];d.test(e)&&(e=e.slice(i.length));let n=e.slice(0,e.search(/\r?\n/));return{raw:n,name:n?n.trim():""}},d.cache={},d.clearCache=function(){d.cache={}},t.exports=d},28546,e=>{"use strict";var t=e.i(32193),i=e.i(21797),n=e.i(72107),r=e.i(22741),a=e.i(46142),s=e.i(65654),o=e.i(1714),u=e.i(3919),l=e.i(94212),c=e.i(62327),h=e.i(77585),d=e.i(1106),p=e.i(63822),m=e.i(95314),f=e.i(48862),y=e.i(58373),g=e.i(93695);e.i(42566);var v=e.i(72749),w=e.i(7124);let k=[{slug:"ib-technical-guide",title:"Finance Technical Interview Guide",description:"87-page, 6-chapter technical mastery guide. Every question tagged by interview frequency, with dual-format answers (30-second and 3-minute versions) and red flag warnings.",longDescription:"Master the technical questions that determine who gets the offer and who goes home. This 87-page guide covers all 6 core topics tested in IB, PE, and finance interviews—accounting, enterprise value, DCF, comps, M&A, and LBOs. Every question is tagged by how often it actually appears (Always Asked, Frequently Asked, Sometimes Asked), with dual-format answers for quick checks and deep dives. Built differently from every other prep resource: interview frequency tags, red flag warnings for common mistakes, and interviewer perspective boxes that reveal the hidden evaluation criteria.",price:127,contents:["Chapter 1: Accounting Fundamentals — 3 financial statements, build-a-business walkthrough, working capital deep dive, 12 must-know interview questions","Chapter 2: Enterprise Value & Equity Value — EV bridge formula, diluted shares, treasury stock method, matching multiples correctly","Chapter 3: Valuation & DCF — 6-step DCF framework, UFCF formula, terminal value (perpetuity growth + exit multiple), WACC & CAPM","Chapter 4: Comparable Company & Transaction Analysis — Trading comps process, worked example, precedent transactions, control premium, valuation football field","Chapter 5: M&A — Accretion/dilution analysis, P/E rule for stock deals, goodwill & purchase price allocation, stock vs. asset sales","Chapter 6: Leveraged Buyouts — 4 return drivers, LBO candidate criteria, capital structure & debt stack, sources & uses, IRR/MOIC calculations","Interview Frequency Tags on every concept — ALWAYS ASKED, FREQUENTLY ASKED, SOMETIMES ASKED — so you prioritize prep time","Dual-Format Answers — 30-second crisp answer + 3-minute deep dive for every major question","Red Flag boxes — the exact mistakes that get candidates dinged, often more valuable than right answers","Self-Assessment Scorecards at the end of each chapter to verify mastery before moving on"],excerpt:"When an interviewer asks you an accounting question, they are not testing whether you memorized a textbook. They are testing whether you can think through the logic of how a business transaction flows through the financial statements. The candidates who stand out are the ones who explain the intuition behind the mechanics, not just the mechanics themselves."},{slug:"pe-recruiting-playbook",title:"2026 PE Recruiting Playbook",description:"The definitive 42-page guide to PE recruiting. Timelines, headhunters, technicals, compensation data, and contrarian insights that go beyond conventional wisdom.",longDescription:"Private equity recruiting has reached an inflection point. This comprehensive 42-page, 20-chapter guide synthesizes 2023-2026 data from headhunter sources, industry practitioners, and proprietary research to give you actionable intelligence that contradicts or goes beyond mainstream advice. From the 7 headhunter firms that control megafund access to compensation data by level, from paper LBO frameworks to the contrarian insights that give you edge—this is everything you need to navigate on-cycle chaos, off-cycle opportunities, and everything in between.",price:97,contents:["2026 recruiting timeline forecast and market structure analysis","The 7 headhunter firms that control PE access (CPI, Henkel, SG Partners, Ratio, Amity, DSP, Oxbridge)","Bank-to-fund pipeline data: which banks and groups place into which funds","Non-traditional paths: MBB consulting, Big 4 TAS, corporate development, veterans","Undergrad direct programs: Blackstone, KKR, Warburg Pincus, Apollo, Carlyle analyst programs","LBO mechanics from first principles: sources & uses, debt schedules, returns analysis","Paper LBO framework: the 10-minute method with full worked example","Modeling test execution: time management framework and fatal errors to avoid","Technical questions deep dive: accounting, credit concepts, EV/equity bridge","The 'Why PE' framework: what interviewers actually want to hear","Deal discussion structure: 60-second walkthrough format that impresses","Culture and fit signals: megafund vs. middle-market expectations","Firm taxonomy: megafund profiles (BX, KKR, Apollo, TPG, Carlyle, H&F) and practitioner rankings","Strategic firm selection: optimizing for learning, comp, exits, or work-life balance","2025-2026 compensation data by level: Associate through Partner, megafund to LMM","Career progression and exits: promotion rates, what distinguishes people who make Partner","Networking strategy: email templates with high response rates, channel effectiveness","Application mechanics: resume tailoring for PE, cover letter approach","Contrarian insights: 5 myths debunked (megafund obsession, on-cycle panic, technical overemphasis)","Appendix: mental math rules, IRR approximations, common LBO assumptions by sector"],excerpt:"The conventional 'megafund or bust' mentality is counterproductive for most candidates. 70% of PE buyouts occur in the $25M-$1B range, yet most recruiting advice ignores this reality. Middle-market firms offer superior learning, faster advancement, and comparable long-term outcomes. This guide maps both paths with data, not conventional wisdom."},{slug:"networking-cold-email-playbook",title:"Networking & Cold Email Playbook",description:"50+ email templates, LinkedIn scripts, and follow-up sequences that actually get responses. Built for non-targets.",longDescription:"Networking is how non-targets break in and how everyone gets an edge. This playbook gives you the exact scripts, templates, and follow-up cadences that convert cold outreach into warm relationships—and warm relationships into referrals. Every template has been tested across hundreds of real recruiting cycles. For PE-specific networking (headhunters, fund associates), see our PE Recruiting Playbook.",price:67,contents:["50+ cold email templates (IB, PE, HF-specific)","LinkedIn outreach sequences with response rate data","The follow-up framework: timing, tone, and persistence","Informational interview questions that build relationships","How to convert contacts into advocates who push for you","Coffee chat scripts and thank-you note templates","Networking tracker spreadsheet (Notion + Excel)","What to do when you get ghosted"],excerpt:"Subject: Quick Question - [Firm] [Group]\n\nHi [Name], I came across your profile while researching [firm]'s [group]. Your transition from [background] is particularly interesting given my own path from [your background]. Would you have 15 minutes this week for a brief call?..."},{slug:"lbo-modeling-course",title:"LBO Modeling Crash Course",description:"Build LBO models from scratch. Sources & uses, debt schedules, returns analysis—with Excel templates included.",longDescription:"LBO modeling is the core technical skill for PE recruiting. This crash course takes you from zero to building full LBO models, including the paper LBO shortcuts that let you ace timed case studies. Includes downloadable Excel templates you can use immediately. Pairs perfectly with our PE Recruiting Playbook for complete on-cycle preparation.",price:127,contents:["LBO fundamentals: how PE creates value","Sources & uses: building the transaction structure","Debt schedules: senior, sub, mezzanine, PIK","Cash flow waterfall and debt paydown mechanics","Returns analysis: IRR, MOIC, and sensitivity tables","Paper LBO framework: solve in 10 minutes by hand","3 full LBO model templates (Excel download)","Practice case studies with solutions"],excerpt:"A PE firm buys a company for 8x EBITDA ($100M EBITDA = $800M TEV). They put in 40% equity ($320M) and 60% debt ($480M). If EBITDA grows to $130M and they exit at 8x in 5 years, what's the IRR? Exit TEV = $1,040M. Pay down $150M debt. Equity value = $710M. MOIC = 2.2x. IRR ≈ 17%..."},{slug:"stock-pitch-guide",title:"Stock Pitch Template & Examples",description:"The pitch framework used at Point72, Citadel, and Tiger Cubs. Plus 5 full example pitches with commentary.",longDescription:"A stock pitch is how you prove you can think like an investor. This guide gives you the exact framework top hedge funds want to see, plus five fully-written example pitches across different sectors and strategies. Whether you're long, short, or event-driven—this is how you stand out.",price:77,contents:["The 6-part pitch structure that top funds expect","How to develop a real variant perception (not fake edge)","Catalyst identification and timeline mapping","Valuation: triangulating comps, DCF, and sum-of-parts","Risk/reward framing that shows investment judgment","5 complete example pitches with detailed commentary","Pitch deck template (PowerPoint)","Common mistakes that kill pitches"],excerpt:"A strong pitch follows six parts: (1) One-sentence thesis with price target, (2) Business overview in 60 seconds, (3) Variant perception—what you see that consensus misses, (4) Catalysts with timeframes, (5) Valuation support, (6) Risks and why they're manageable..."},{slug:"resume-story-playbook",title:"Walk Me Through Your Resume Playbook",description:"Nail the first question of every interview. Story frameworks, 30+ examples, and positioning strategies.",longDescription:"'Walk me through your resume' is the first question in virtually every finance interview—and most candidates blow it. This playbook teaches you to transform your background into a compelling 2-minute narrative that positions you as the obvious choice. Includes 30+ real examples across different backgrounds.",price:57,contents:["The 3-part story structure that hooks interviewers","How to position any background for finance","30+ example stories across different profiles","Why IB / Why PE / Why HF answer frameworks","Handling gaps, switches, and non-traditional paths","Why this firm: research-backed answers that resonate","Weakness and failure questions: the right way","Practice recording framework for self-improvement"],excerpt:"Your story has three beats: (1) Origin—one sentence on where you started and what sparked your interest, (2) Development—how you built relevant skills and confirmed your interest, (3) Destination—why this role is the logical next step. Most candidates ramble. You won't..."},{slug:"restructuring-guide",title:"Restructuring & Distressed Debt Guide",description:"Master the technical interviews for RX groups. Bankruptcy mechanics, distressed valuation, and credit analysis.",longDescription:"Restructuring is one of the most technical and intellectually demanding areas of finance—and the interviews reflect that. This guide covers everything from Chapter 11 mechanics to distressed valuation frameworks, giving you the edge to land roles at Houlihan Lokey, PJT, Lazard RX, and distressed credit funds.",price:97,contents:["Chapter 11 bankruptcy process: timeline and key milestones","Restructuring vs. liquidation analysis frameworks","Distressed valuation: enterprise value waterfall","Fulcrum security identification and recovery analysis","Credit agreement basics: covenants, defaults, remedies","DIP financing and exit financing structures","100+ RX-specific technical interview questions","Case study: real restructuring deal walkthrough"],excerpt:"Walk me through a fulcrum security analysis. Start with enterprise value—typically via DCF or comparable transactions. Then work down the capital structure: secured debt recovers first, then unsecured, then sub debt, then equity. The fulcrum security is where recovery breaks—the tranche that receives partial recovery..."},{slug:"repe-modeling-guide",title:"Real Estate Private Equity Modeling",description:"Property-level models, waterfall structures, and REPE-specific technicals. Includes Excel templates.",longDescription:"Real estate private equity uses completely different modeling conventions than traditional PE. This guide teaches you property-level cash flow modeling, GP/LP waterfall structures, and the sector-specific knowledge (multifamily, office, industrial, retail) you need to break into Blackstone Real Estate, Starwood, or any top REPE shop.",price:127,contents:["Property-level cash flow modeling fundamentals","NOI, Cap Rates, and real estate valuation methods","GP/LP waterfall structures with promote calculations","Sector deep dives: multifamily, office, industrial, retail","Development modeling: construction draws and stabilization","Debt sizing and DSCR analysis","3 full REPE model templates (Excel download)","REPE-specific interview questions and answers"],excerpt:"Calculate the equity multiple for this deal: Purchase at 5.0% cap rate, $10M NOI = $200M value. 65% LTV = $130M debt, $70M equity. Hold 5 years, exit at 5.5% cap (NOI grows to $12M). Exit value = $218M. Debt paydown to $110M. Equity proceeds = $108M. Multiple = 1.54x. Now add the waterfall..."},{slug:"credit-direct-lending-playbook",title:"Credit & Direct Lending Playbook",description:"Break into private credit. Credit memos, downside analysis, and loan documentation fundamentals.",longDescription:"Private credit is one of the fastest-growing areas in finance, and the interview process is distinct from traditional PE. This playbook covers credit analysis frameworks, memo writing, loan documentation, and the downside-focused thinking that credit funds want to see. Perfect for candidates targeting Ares, Golub, Owl Rock, and similar firms.",price:97,contents:["Credit analysis framework: the 5 Cs and beyond","Writing investment memos that get approved","Downside protection analysis: what can go wrong?","Loan documentation: covenants, baskets, and carve-outs","Unitranche, first lien, second lien structures explained","Sponsor-backed vs. non-sponsored lending differences","Credit fund economics: fees, hurdles, waterfalls","50+ credit-specific interview questions with answers"],excerpt:"Credit investors think differently than equity investors. The question isn't 'how much can I make?'—it's 'how do I get my money back if everything goes wrong?' Walk me through your downside analysis: revenue decline scenarios, margin compression, liquidity runway, asset coverage, and covenant headroom..."},{slug:"superday-survival-guide",title:"The Superday Survival Guide",description:"Hour-by-hour preparation for final rounds. Manage stress, ace back-to-backs, and close the offer.",longDescription:"Superdays are where offers are won and lost. After months of preparation, everything comes down to one intense day of back-to-back interviews. This guide gives you the hour-by-hour playbook for the 48 hours before, during, and after your Superday—including stress management, energy optimization, and the follow-up strategy that seals offers.",price:47,contents:["48-hour countdown: exactly what to do and when","The night before: sleep, meals, and mental prep","Morning routine that maximizes performance","Energy management across 5+ consecutive interviews","How to reset after a tough interview","Reading the room: adjusting to interviewer styles","Closing strong: the final impression that matters","Post-Superday follow-up: timing and templates"],excerpt:"The 48 hours before your Superday matter more than you think. Here's the protocol: T-48 hours—final technical review, no new material. T-24 hours—logistics locked, outfit ready, route planned. T-12 hours—light dinner, no alcohol, phone off by 10pm. T-2 hours—protein-heavy breakfast, arrive 20 min early..."}],b=[{slug:"private-equity-recruiting-timeline-2026",title:"Private Equity Recruiting Timeline 2026: On-Cycle, Off-Cycle, and What to Expect",summary:"The complete PE recruiting calendar for 2026—when headhunters call, how to prepare, and navigating compressed timelines.",category:"Recruiting",readTime:"18 min read",publishedAt:"2026-01-15",content:`
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
    `}];k.slice(0,3),b.slice(0,3);var x=e.i(22734),D=e.i(14747),A=e.i(79360);let C=D.default.join(process.cwd(),"content/blog");function E(){return x.default.existsSync(C)}function S(){return E()?x.default.readdirSync(C).filter(e=>e.endsWith(".mdx")).map(e=>e.replace(/\.mdx$/,"")):[]}function T(e){if(!E())return null;let t=D.default.join(C,`${e}.mdx`);if(!x.default.existsSync(t))return null;let i=x.default.readFileSync(t,"utf8"),{data:n,content:r}=(0,A.default)(i);return{slug:e,title:n.title||"",summary:n.summary||n.description||"",category:n.category||"Uncategorized",readTime:n.readTime,publishedAt:n.publishedAt,content:r,author:n.author,tags:n.tags}}function F(){return E()?S().map(e=>{let t=T(e);if(!t)return null;let{content:i,...n}=t;return n}).filter(e=>null!==e).sort((e,t)=>e.publishedAt&&t.publishedAt?new Date(t.publishedAt).getTime()-new Date(e.publishedAt).getTime():0):[]}function B(e){return{slug:e.slug,title:e.title,summary:e.summary,category:e.category,readTime:e.readTime,publishedAt:e.publishedAt,source:"data"}}function I(e){return{...e,source:"mdx"}}function M(){let e=F().map(I),t=new Set(e.map(e=>e.slug));return[...e,...b.filter(e=>!t.has(e.slug)).map(B)].sort((e,t)=>e.publishedAt&&t.publishedAt?new Date(t.publishedAt).getTime()-new Date(e.publishedAt).getTime():0)}function P(){let e="https://wallstreetplaybook.org";return[{url:e,lastModified:new Date,changeFrequency:"weekly",priority:1},{url:`${e}/playbooks`,lastModified:new Date,changeFrequency:"weekly",priority:.9},{url:`${e}/resume-services`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/blog`,lastModified:new Date,changeFrequency:"daily",priority:.8},{url:`${e}/about`,lastModified:new Date,changeFrequency:"monthly",priority:.6},{url:`${e}/contact`,lastModified:new Date,changeFrequency:"monthly",priority:.6},{url:`${e}/privacy`,lastModified:new Date,changeFrequency:"yearly",priority:.3},{url:`${e}/terms`,lastModified:new Date,changeFrequency:"yearly",priority:.3},{url:`${e}/investment-banking-interview-prep`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/private-equity-recruiting`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/non-target-investment-banking`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/hedge-fund-interview-prep`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/investment-banking-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/lbo-modeling-guide`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/dcf-model-guide`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/finance-career-guide`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/investment-banking-recruiting-2026`,lastModified:new Date,changeFrequency:"weekly",priority:.95},{url:`${e}/private-equity-recruiting-2026`,lastModified:new Date,changeFrequency:"weekly",priority:.95},{url:`${e}/finance-salary-2026`,lastModified:new Date,changeFrequency:"monthly",priority:.95},{url:`${e}/ib-technical-interview-2026`,lastModified:new Date,changeFrequency:"weekly",priority:.95},{url:`${e}/dcf-interview-questions-2026`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/ma-interview-questions-2026`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/lbo-interview-questions-2026`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/accounting-interview-questions-finance`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/valuation-methods-investment-banking`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/ib-technical-cheat-sheet`,lastModified:new Date,changeFrequency:"monthly",priority:.8},{url:`${e}/finance-resume-review`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/non-target-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/investment-banking-resume-review`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/private-equity-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/hedge-fund-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/consulting-to-banking-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/mba-resume-review`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/financial-advisor-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/fpa-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/asset-management-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/fintech-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/credit-analyst-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/equity-research-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/venture-capital-resume`,lastModified:new Date,changeFrequency:"monthly",priority:.9},{url:`${e}/low-gpa-finance-jobs`,lastModified:new Date,changeFrequency:"monthly",priority:.8},{url:`${e}/career-change-finance-30`,lastModified:new Date,changeFrequency:"monthly",priority:.8},{url:`${e}/military-to-finance`,lastModified:new Date,changeFrequency:"monthly",priority:.8},{url:`${e}/engineer-to-finance`,lastModified:new Date,changeFrequency:"monthly",priority:.8},{url:`${e}/liberal-arts-finance-jobs`,lastModified:new Date,changeFrequency:"monthly",priority:.8},{url:`${e}/back-office-to-front-office`,lastModified:new Date,changeFrequency:"monthly",priority:.8},{url:`${e}/failed-ib-recruiting`,lastModified:new Date,changeFrequency:"monthly",priority:.8},{url:`${e}/jobs`,lastModified:new Date,changeFrequency:"daily",priority:.8},...k.map(t=>({url:`${e}/playbooks/${t.slug}`,lastModified:new Date,changeFrequency:"monthly",priority:.8})),...M().map(t=>({url:`${e}/blog/${t.slug}`,lastModified:t.publishedAt?new Date(t.publishedAt):new Date,changeFrequency:"monthly",priority:.7}))]}e.s(["default",()=>P],7219);var N=e.i(4e4);let R="application/xml",W="public, max-age=0, must-revalidate",q="sitemap";async function L(){let e=await P(),t=(0,N.resolveRouteData)(e,q);return new w.NextResponse(t,{headers:{"Content-Type":R,"Cache-Control":W}})}e.s(["GET",()=>L],34064),e.i(34064),e.i(7219),e.s(["GET",()=>L],40243);var O=e.i(40243);let j="",U=new t.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap--route-entry",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Downloads/wall-street-playbook/app/sitemap--route-entry.js",nextConfigOutput:j,userland:O}),{workAsyncStorage:G,workUnitAsyncStorage:H,serverHooks:Y}=U;function z(){return(0,n.patchFetch)({workAsyncStorage:G,workUnitAsyncStorage:H})}async function $(e,t,n){U.isDev&&(0,r.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let w="/sitemap.xml/route";w=w.replace(/\/index$/,"")||"/";let k=!1,b=await U.prepare(e,t,{srcPage:w,multiZoneDraftMode:k});if(!b)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:x,params:D,nextConfig:A,parsedUrl:C,isDraftMode:E,prerenderManifest:S,routerServerContext:T,isOnDemandRevalidate:F,revalidateOnlyGenerated:B,resolvedPathname:I,clientReferenceManifest:M,serverActionsManifest:P}=b,N=(0,u.normalizeAppPath)(w),R=!!(S.dynamicRoutes[N]||S.routes[I]),W=async()=>((null==T?void 0:T.render404)?await T.render404(e,t,C,!1):t.end("This page could not be found"),null);if(R&&!E){let e=!!S.routes[I],t=S.dynamicRoutes[N];if(t&&!1===t.fallback&&!e){if(A.experimental.adapterPath)return await W();throw new g.NoFallbackError}}let q=null;!R||U.isDev||E||(q="/index"===(q=I)?"/":q);let L=!0===U.isDev||!R,O=R&&!L;P&&M&&(0,s.setReferenceManifestsSingleton)({page:w,clientReferenceManifest:M,serverActionsManifest:P,serverModuleMap:(0,o.createServerModuleMap)({serverActionsManifest:P})});let j=e.method||"GET",G=(0,a.getTracer)(),H=G.getActiveScopeSpan(),Y={params:D,prerenderManifest:S,renderOpts:{experimental:{authInterrupts:!!A.experimental.authInterrupts},cacheComponents:!!A.cacheComponents,supportsDynamicResponse:L,incrementalCache:(0,r.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:A.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,i,n)=>U.onRequestError(e,t,n,T)},sharedContext:{buildId:x}},z=new l.NodeNextRequest(e),$=new l.NodeNextResponse(t),J=c.NextRequestAdapter.fromNodeNextRequest(z,(0,c.signalFromNodeResponse)(t));try{let s=async e=>U.handle(J,Y).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let i=G.getRootSpanAttributes();if(!i)return;if(i.get("next.span_type")!==h.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${i.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=i.get("next.route");if(n){let t=`${j} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${j} ${w}`)}),o=!!(0,r.getRequestMeta)(e,"minimalMode"),u=async r=>{var a,u;let l=async({previousCacheEntry:i})=>{try{if(!o&&F&&B&&!i)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await s(r);e.fetchMetrics=Y.renderOpts.fetchMetrics;let u=Y.renderOpts.pendingWaitUntil;u&&n.waitUntil&&(n.waitUntil(u),u=void 0);let l=Y.renderOpts.collectedTags;if(!R)return await (0,p.sendResponse)(z,$,a,Y.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,m.toNodeOutgoingHttpHeaders)(a.headers);l&&(t[y.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let i=void 0!==Y.renderOpts.collectedRevalidate&&!(Y.renderOpts.collectedRevalidate>=y.INFINITE_CACHE)&&Y.renderOpts.collectedRevalidate,n=void 0===Y.renderOpts.collectedExpire||Y.renderOpts.collectedExpire>=y.INFINITE_CACHE?void 0:Y.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:i,expire:n}}}}catch(t){throw(null==i?void 0:i.isStale)&&await U.onRequestError(e,t,{routerKind:"App Router",routePath:w,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:O,isOnDemandRevalidate:F})},T),t}},c=await U.handleResponse({req:e,nextConfig:A,cacheKey:q,routeKind:i.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:S,isRoutePPREnabled:!1,isOnDemandRevalidate:F,revalidateOnlyGenerated:B,responseGenerator:l,waitUntil:n.waitUntil,isMinimalMode:o});if(!R)return null;if((null==c||null==(a=c.value)?void 0:a.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(u=c.value)?void 0:u.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",F?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),E&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let h=(0,m.fromNodeOutgoingHttpHeaders)(c.value.headers);return o&&R||h.delete(y.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||h.get("Cache-Control")||h.set("Cache-Control",(0,f.getCacheControlHeader)(c.cacheControl)),await (0,p.sendResponse)(z,$,new Response(c.value.body,{headers:h,status:c.value.status||200})),null};H?await u(H):await G.withPropagatedContext(e.headers,()=>G.trace(h.BaseServerSpan.handleRequest,{spanName:`${j} ${w}`,kind:a.SpanKind.SERVER,attributes:{"http.method":j,"http.target":e.url}},u))}catch(t){if(t instanceof g.NoFallbackError||await U.onRequestError(e,t,{routerKind:"App Router",routePath:N,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isStaticGeneration:O,isOnDemandRevalidate:F})}),R)throw t;return await (0,p.sendResponse)(z,$,new Response(null,{status:500})),null}}e.s(["handler",()=>$,"patchFetch",()=>z,"routeModule",()=>U,"serverHooks",()=>Y,"workAsyncStorage",()=>G,"workUnitAsyncStorage",()=>H],28546)}];

//# sourceMappingURL=3eee8_5e1f2a12._.js.map