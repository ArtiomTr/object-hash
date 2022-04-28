!function(e){var t;"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):("undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.objectHash=e())}(function(){return function r(o,i,u){function s(n,e){if(!i[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(f)return f(n,!0);throw new Error("Cannot find module '"+n+"'")}e=i[n]={exports:{}};o[n][0].call(e.exports,function(e){var t=o[n][1][e];return s(t||e)},e,e.exports,r,o,i,u)}return i[n].exports}for(var f="function"==typeof require&&require,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(w,b,m){!function(e,n,f,s,d,h,p,g,y){"use strict";var r=w("crypto");function t(e,t){t=u(e,t);var n;return void 0===(n="passthrough"!==t.algorithm?r.createHash(t.algorithm):new c).write&&(n.write=n.update,n.end=n.update),l(t,n).dispatch(e),n.update||n.end(""),n.digest?n.digest("buffer"===t.encoding?void 0:t.encoding):(e=n.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(m=b.exports=t).sha1=function(e){return t(e)},m.keys=function(e){return t(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},m.MD5=function(e){return t(e,{algorithm:"md5",encoding:"hex"})},m.keysMD5=function(e){return t(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var o=r.getHashes?r.getHashes().slice():["sha1","md5"],i=(o.push("passthrough"),["buffer","hex","binary","base64"]);function u(e,t){var n={};if(n.algorithm=(t=t||{}).algorithm||"sha1",n.encoding=t.encoding||"hex",n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var r=0;r<o.length;++r)o[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=o[r]);if(-1===o.indexOf(n.algorithm))throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+o.join(", "));if(-1===i.indexOf(n.encoding)&&"passthrough"!==n.algorithm)throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+i.join(", "));return n}function a(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function l(o,t,i){i=i||[];function u(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}function e(e){return function(){return u(e)}}function n(t){return function(e){return u(t+":"+e.toString())}}var r={dispatch:function(e){return this["_"+(null===(e=o.replacer?o.replacer(e):e)?"null":typeof e)](e)},_object:function(t){var n,e=Object.prototype.toString.call(t),r=/\[object (.*)\]/i.exec(e);r=(r=r?r[1]:"unknown:["+e+"]").toLowerCase();if(0<=(e=i.indexOf(t)))return this.dispatch("[CIRCULAR:"+e+"]");if(i.push(t),void 0!==f&&f.isBuffer&&f.isBuffer(t))return u("buffer:"),u(t);if("object"===r||"function"===r||"asyncfunction"===r)return e=Object.keys(t),o.unorderedObjects&&(e=e.sort()),!1===o.respectType||a(t)||e.splice(0,0,"prototype","__proto__","constructor"),o.excludeKeys&&(e=e.filter(function(e){return!o.excludeKeys(e)})),u("object:"+e.length+":"),n=this,e.forEach(function(e){n.dispatch(e),u(":"),o.excludeValues||n.dispatch(t[e]),u(",")});if(!this["_"+r]){if(o.ignoreUnknown)return u("["+r+"]");throw new Error('Unknown object type "'+r+'"')}this["_"+r](t)},_array:function(e,t){t=void 0!==t?t:!1!==o.unorderedArrays;var n=this;if(u("array:"+e.length+":"),!t||e.length<=1)return e.forEach(function(e){return n.dispatch(e)});var r=[],t=e.map(function(e){var t=new c,n=i.slice();return l(o,t,n).dispatch(e),r=r.concat(n.slice(i.length)),t.read().toString()});return i=i.concat(r),t.sort(),this._array(t,!1)},_date:function(e){return u("date:"+e.toJSON())},_boolean:n("bool"),_string:function(e){u("string:"+e.length+":"),u(e.toString())},_function:function(e){u("fn:"),a(e)?this.dispatch("[native]"):this.dispatch(e.toString()),!1!==o.respectFunctionNames&&this.dispatch("function-name:"+String(e.name)),o.respectFunctionProperties&&this._object(e)},_null:e("Null"),_undefined:e("Undefined"),_regexp:n("regex"),_uint8array:function(e){return u("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return u("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return u("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return u("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return u("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return u("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return u("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return u("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return u("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return u("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return u("url:"+e.toString())},_map:function(e){u("map:");e=Array.from(e);return this._array(e,!1!==o.unorderedSets)},_set:function(e){u("set:");e=Array.from(e);return this._array(e,!1!==o.unorderedSets)},_file:function(e){return u("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(o.ignoreUnknown)return u("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_bigint:function(e){return u("bigint:"+e.toString())}};function s(e,t){for(var n=0;n<e.length;++n)r["_"+e[n]]=t(e[n])}s(["process","timer","pipe","tcp","udp","tty","statwatcher","securecontext","connection","zlib","context","nodescript","httpparser","dataview","signal","fsevent","tlswrap","domwindow"],e);return s(["symbol","error","number","xml","bigint"],n),r}function c(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}m.writeToStream=function(e,t,n){return void 0===n&&(n=t,t={}),l(t=u(e,t),n).dispatch(e)}}.call(this,w("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_86fb354a.js","/")},{buffer:3,crypto:5,u6WOfW:11}],2:[function(e,t,a){!function(e,t,n,r,o,i,u,s,f){!function(e){"use strict";var f="undefined"!=typeof Uint8Array?Uint8Array:Array,t="+".charCodeAt(0),n="/".charCodeAt(0),r="0".charCodeAt(0),o="a".charCodeAt(0),i="A".charCodeAt(0),u="-".charCodeAt(0),s="_".charCodeAt(0);function a(e){e=e.charCodeAt(0);return e===t||e===u?62:e===n||e===s?63:e<r?-1:e<r+10?e-r+26+26:e<i+26?e-i:e<o+26?e-o+26:void 0}e.toByteArray=function(e){var t,n;if(0<e.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.length,r="="===e.charAt(r-2)?2:"="===e.charAt(r-1)?1:0,o=new f(3*e.length/4-r),i=0<r?e.length-4:e.length,u=0;function s(e){o[u++]=e}for(t=0;t<i;t+=4,0)s((16711680&(n=a(e.charAt(t))<<18|a(e.charAt(t+1))<<12|a(e.charAt(t+2))<<6|a(e.charAt(t+3))))>>16),s((65280&n)>>8),s(255&n);return 2==r?s(255&(n=a(e.charAt(t))<<2|a(e.charAt(t+1))>>4)):1==r&&(s((n=a(e.charAt(t))<<10|a(e.charAt(t+1))<<4|a(e.charAt(t+2))>>2)>>8&255),s(255&n)),o},e.fromByteArray=function(e){var t,n,r,o,i=e.length%3,u="";function s(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,r=e.length-i;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],u+=s((o=n)>>18&63)+s(o>>12&63)+s(o>>6&63)+s(63&o);switch(i){case 1:u=(u+=s((n=e[e.length-1])>>2))+s(n<<4&63)+"==";break;case 2:u=(u=(u+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+"="}return u}}(void 0===a?this.base64js={}:a)}.call(this,e("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\base64-js\\lib\\b64.js","/node_modules\\gulp-browserify\\node_modules\\base64-js\\lib")},{buffer:3,u6WOfW:11}],3:[function(D,e,H){!function(e,n,a,r,h,p,g,y,w){var f=D("base64-js"),i=D("ieee754");function a(e,t,n){if(!(this instanceof a))return new a(e,t,n);var r,o,i,u,s=typeof e;if("base64"===t&&"string"==s)for(e=(u=e).trim?u.trim():u.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==s)r=S(e);else if("string"==s)r=a.byteLength(e,t);else{if("object"!=s)throw new Error("First argument needs to be a number, array or string.");r=S(e.length)}if(a._useTypedArrays?o=a._augment(new Uint8Array(r)):((o=this).length=r,o._isBuffer=!0),a._useTypedArrays&&"number"==typeof e.byteLength)o._set(e);else if(j(u=e)||a.isBuffer(u)||u&&"object"==typeof u&&"number"==typeof u.length)for(i=0;i<r;i++)a.isBuffer(e)?o[i]=e.readUInt8(i):o[i]=e[i];else if("string"==s)o.write(e,0,t);else if("number"==s&&!a._useTypedArrays&&!n)for(i=0;i<r;i++)o[i]=0;return o}function b(e,t,n,r){return a._charsWritten=c(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return a._charsWritten=c(function(e){for(var t,n,r=[],o=0;o<e.length;o++)n=e.charCodeAt(o),t=n>>8,n=n%256,r.push(n),r.push(t);return r}(t),e,n,r)}function v(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function o(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(o=e[t],t+1<r&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<r&&(o|=e[t+1])),o}function u(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(t+2<r&&(o=e[t+2]<<16),t+1<r&&(o|=e[t+1]<<8),o|=e[t],t+3<r&&(o+=e[t+3]<<24>>>0)):(t+1<r&&(o=e[t+1]<<16),t+2<r&&(o|=e[t+2]<<8),t+3<r&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function _(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=o(e,t,n,!0),32768&r?-1*(65535-r+1):r}function E(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=u(e,t,n,!0),2147483648&r?-1*(4294967295-r+1):r}function A(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+3<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,23,4)}function B(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+7<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,52,8)}function s(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"trying to write beyond buffer length"),M(t,65535));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,2);i<u;i++)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function l(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"trying to write beyond buffer length"),M(t,4294967295));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,4);i<u;i++)e[n+i]=t>>>8*(r?i:3-i)&255}function I(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"Trying to write beyond buffer length"),N(t,32767,-32768)),e.length<=n||s(e,0<=t?t:65535+t+1,n,r,o)}function L(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),N(t,2147483647,-2147483648)),e.length<=n||l(e,0<=t?t:4294967295+t+1,n,r,o)}function U(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),F(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||i.write(e,t,n,r,23,4)}function x(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+7<e.length,"Trying to write beyond buffer length"),F(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||i.write(e,t,n,r,52,8)}H.Buffer=a,H.SlowBuffer=a,H.INSPECT_MAX_BYTES=50,a.poolSize=8192,a._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.isBuffer=function(e){return!(null==e||!e._isBuffer)},a.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=O(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=k(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},a.concat=function(e,t){if(d(j(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new a(0);if(1===e.length)return e[0];if("number"!=typeof t)for(o=t=0;o<e.length;o++)t+=e[o].length;for(var n=new a(t),r=0,o=0;o<e.length;o++){var i=e[o];i.copy(n,r),r+=i.length}return n},a.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(f=r,r=t,t=n,n=f),t=Number(t)||0;var o,i,u,s,f=this.length-t;switch((!n||f<(n=Number(n)))&&(n=f),r=String(r||"utf8").toLowerCase()){case"hex":o=function(e,t,n,r){n=Number(n)||0;var o=e.length-n;(!r||o<(r=Number(r)))&&(r=o),d((o=t.length)%2==0,"Invalid hex string"),o/2<r&&(r=o/2);for(var i=0;i<r;i++){var u=parseInt(t.substr(2*i,2),16);d(!isNaN(u),"Invalid hex string"),e[n+i]=u}return a._charsWritten=2*i,i}(this,e,t,n);break;case"utf8":case"utf-8":i=this,u=t,s=n,o=a._charsWritten=c(O(e),i,u,s);break;case"ascii":case"binary":o=b(this,e,t,n);break;case"base64":i=this,u=t,s=n,o=a._charsWritten=c(k(e),i,u,s);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=m(this,e,t,n);break;default:throw new Error("Unknown encoding")}return o},a.prototype.toString=function(e,t,n){var r,o,i,u,s=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):s.length)===t)return"";switch(e){case"hex":r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0);(!n||n<0||r<n)&&(n=r);for(var o="",i=t;i<n;i++)o+=C(e[i]);return o}(s,t,n);break;case"utf8":case"utf-8":r=function(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=T(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+T(o)}(s,t,n);break;case"ascii":case"binary":r=v(s,t,n);break;case"base64":o=s,u=n,r=0===(i=t)&&u===o.length?f.fromByteArray(o):f.fromByteArray(o.slice(i,u));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=function(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}(s,t,n);break;default:throw new Error("Unknown encoding")}return r},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},a.prototype.copy=function(e,t,n,r){if(t=t||0,(r=r||0===r?r:this.length)!==(n=n||0)&&0!==e.length&&0!==this.length){d(n<=r,"sourceEnd < sourceStart"),d(0<=t&&t<e.length,"targetStart out of bounds"),d(0<=n&&n<this.length,"sourceStart out of bounds"),d(0<=r&&r<=this.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length);var o=(r=e.length-t<r-n?e.length-t+n:r)-n;if(o<100||!a._useTypedArrays)for(var i=0;i<o;i++)e[i+t]=this[i+n];else e._set(this.subarray(n,n+o),t)}},a.prototype.slice=function(e,t){var n=this.length;if(e=W(e,n,0),t=W(t,n,n),a._useTypedArrays)return a._augment(this.subarray(e,t));for(var r=t-e,o=new a(r,void 0,!0),i=0;i<r;i++)o[i]=this[i+e];return o},a.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},a.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},a.prototype.readUInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},a.prototype.readUInt16LE=function(e,t){return o(this,e,!0,t)},a.prototype.readUInt16BE=function(e,t){return o(this,e,!1,t)},a.prototype.readUInt32LE=function(e,t){return u(this,e,!0,t)},a.prototype.readUInt32BE=function(e,t){return u(this,e,!1,t)},a.prototype.readInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},a.prototype.readInt16LE=function(e,t){return _(this,e,!0,t)},a.prototype.readInt16BE=function(e,t){return _(this,e,!1,t)},a.prototype.readInt32LE=function(e,t){return E(this,e,!0,t)},a.prototype.readInt32BE=function(e,t){return E(this,e,!1,t)},a.prototype.readFloatLE=function(e,t){return A(this,e,!0,t)},a.prototype.readFloatBE=function(e,t){return A(this,e,!1,t)},a.prototype.readDoubleLE=function(e,t){return B(this,e,!0,t)},a.prototype.readDoubleBE=function(e,t){return B(this,e,!1,t)},a.prototype.writeUInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"trying to write beyond buffer length"),M(e,255)),t>=this.length||(this[t]=e)},a.prototype.writeUInt16LE=function(e,t,n){s(this,e,t,!0,n)},a.prototype.writeUInt16BE=function(e,t,n){s(this,e,t,!1,n)},a.prototype.writeUInt32LE=function(e,t,n){l(this,e,t,!0,n)},a.prototype.writeUInt32BE=function(e,t,n){l(this,e,t,!1,n)},a.prototype.writeInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"Trying to write beyond buffer length"),N(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},a.prototype.writeInt16LE=function(e,t,n){I(this,e,t,!0,n)},a.prototype.writeInt16BE=function(e,t,n){I(this,e,t,!1,n)},a.prototype.writeInt32LE=function(e,t,n){L(this,e,t,!0,n)},a.prototype.writeInt32BE=function(e,t,n){L(this,e,t,!1,n)},a.prototype.writeFloatLE=function(e,t,n){U(this,e,t,!0,n)},a.prototype.writeFloatBE=function(e,t,n){U(this,e,t,!1,n)},a.prototype.writeDoubleLE=function(e,t,n){x(this,e,t,!0,n)},a.prototype.writeDoubleBE=function(e,t,n){x(this,e,t,!1,n)},a.prototype.fill=function(e,t,n){if(t=t||0,n=n||this.length,d("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),d(t<=n,"end < start"),n!==t&&0!==this.length){d(0<=t&&t<this.length,"start out of bounds"),d(0<=n&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},a.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=C(this[n]),n===H.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},a.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(a._useTypedArrays)return new a(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var t=a.prototype;function W(e,t,n){return"number"!=typeof e?n:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function S(e){return(e=~~Math.ceil(+e))<0?0:e}function j(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function C(e){return e<16?"0"+e.toString(16):e.toString(16)}function O(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var o=n,i=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(o,n+1)).substr(1).split("%")),u=0;u<i.length;u++)t.push(parseInt(i[u],16))}return t}function k(e){return f.toByteArray(e)}function c(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function T(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function M(e,t){d("number"==typeof e,"cannot write a non-number as a number"),d(0<=e,"specified a negative value for writing an unsigned value"),d(e<=t,"value is larger than maximum value for type"),d(Math.floor(e)===e,"value has a fractional component")}function N(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value"),d(Math.floor(e)===e,"value has a fractional component")}function F(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value")}function d(e,t){if(!e)throw new Error(t||"Failed assertion")}a._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=t.get,e.set=t.set,e.write=t.write,e.toString=t.toString,e.toLocaleString=t.toString,e.toJSON=t.toJSON,e.copy=t.copy,e.slice=t.slice,e.readUInt8=t.readUInt8,e.readUInt16LE=t.readUInt16LE,e.readUInt16BE=t.readUInt16BE,e.readUInt32LE=t.readUInt32LE,e.readUInt32BE=t.readUInt32BE,e.readInt8=t.readInt8,e.readInt16LE=t.readInt16LE,e.readInt16BE=t.readInt16BE,e.readInt32LE=t.readInt32LE,e.readInt32BE=t.readInt32BE,e.readFloatLE=t.readFloatLE,e.readFloatBE=t.readFloatBE,e.readDoubleLE=t.readDoubleLE,e.readDoubleBE=t.readDoubleBE,e.writeUInt8=t.writeUInt8,e.writeUInt16LE=t.writeUInt16LE,e.writeUInt16BE=t.writeUInt16BE,e.writeUInt32LE=t.writeUInt32LE,e.writeUInt32BE=t.writeUInt32BE,e.writeInt8=t.writeInt8,e.writeInt16LE=t.writeInt16LE,e.writeInt16BE=t.writeInt16BE,e.writeInt32LE=t.writeInt32LE,e.writeInt32BE=t.writeInt32BE,e.writeFloatLE=t.writeFloatLE,e.writeFloatBE=t.writeFloatBE,e.writeDoubleLE=t.writeDoubleLE,e.writeDoubleBE=t.writeDoubleBE,e.fill=t.fill,e.inspect=t.inspect,e.toArrayBuffer=t.toArrayBuffer,e}}.call(this,D("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\buffer\\index.js","/node_modules\\gulp-browserify\\node_modules\\buffer")},{"base64-js":2,buffer:3,ieee754:10,u6WOfW:11}],4:[function(c,d,e){!function(e,t,f,n,r,o,i,u,s){var f=c("buffer").Buffer,a=4,l=new f(a);l.fill(0);d.exports={hash:function(e,t,n,r){for(var o=t(function(e,t){e.length%a!=0&&(n=e.length+(a-e.length%a),e=f.concat([e,l],n));for(var n,r=[],o=t?e.readInt32BE:e.readInt32LE,i=0;i<e.length;i+=a)r.push(o.call(e,i));return r}(e=f.isBuffer(e)?e:new f(e),r),8*e.length),t=r,i=new f(n),u=t?i.writeInt32BE:i.writeInt32LE,s=0;s<o.length;s++)u.call(i,o[s],4*s,!0);return i}}}.call(this,c("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\crypto-browserify\\helpers.js","/node_modules\\gulp-browserify\\node_modules\\crypto-browserify")},{buffer:3,u6WOfW:11}],5:[function(v,e,_){!function(l,c,u,d,h,p,g,y,w){var u=v("buffer").Buffer,e=v("./sha"),t=v("./sha256"),n=v("./rng"),b={sha1:e,sha256:t,md5:v("./md5")},s=64,f=new u(s);function r(e,n){var r=b[e=e||"sha1"],o=[];return r||i("algorithm:",e,"is not yet supported"),{update:function(e){return u.isBuffer(e)||(e=new u(e)),o.push(e),e.length,this},digest:function(e){var t=u.concat(o),t=n?function(e,t,n){u.isBuffer(t)||(t=new u(t)),u.isBuffer(n)||(n=new u(n)),t.length>s?t=e(t):t.length<s&&(t=u.concat([t,f],s));for(var r=new u(s),o=new u(s),i=0;i<s;i++)r[i]=54^t[i],o[i]=92^t[i];return n=e(u.concat([r,n])),e(u.concat([o,n]))}(r,n,t):r(t);return o=null,e?t.toString(e):t}}}function i(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}f.fill(0),_.createHash=function(e){return r(e)},_.createHmac=r,_.randomBytes=function(e,t){if(!t||!t.call)return new u(n(e));try{t.call(this,void 0,new u(n(e)))}catch(e){t(e)}};var o,a=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],m=function(e){_[e]=function(){i("sorry,",e,"is not implemented yet")}};for(o in a)m(a[o],o)}.call(this,v("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},v("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\crypto-browserify\\index.js","/node_modules\\gulp-browserify\\node_modules\\crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,u6WOfW:11}],6:[function(w,b,e){!function(e,r,o,i,u,f,a,l,y){var t=w("./helpers");function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var s=n,f=r,a=o,l=i,n=c(n,r,o,i,e[u+0],7,-680876936),i=c(i,n,r,o,e[u+1],12,-389564586),o=c(o,i,n,r,e[u+2],17,606105819),r=c(r,o,i,n,e[u+3],22,-1044525330);n=c(n,r,o,i,e[u+4],7,-176418897),i=c(i,n,r,o,e[u+5],12,1200080426),o=c(o,i,n,r,e[u+6],17,-1473231341),r=c(r,o,i,n,e[u+7],22,-45705983),n=c(n,r,o,i,e[u+8],7,1770035416),i=c(i,n,r,o,e[u+9],12,-1958414417),o=c(o,i,n,r,e[u+10],17,-42063),r=c(r,o,i,n,e[u+11],22,-1990404162),n=c(n,r,o,i,e[u+12],7,1804603682),i=c(i,n,r,o,e[u+13],12,-40341101),o=c(o,i,n,r,e[u+14],17,-1502002290),n=d(n,r=c(r,o,i,n,e[u+15],22,1236535329),o,i,e[u+1],5,-165796510),i=d(i,n,r,o,e[u+6],9,-1069501632),o=d(o,i,n,r,e[u+11],14,643717713),r=d(r,o,i,n,e[u+0],20,-373897302),n=d(n,r,o,i,e[u+5],5,-701558691),i=d(i,n,r,o,e[u+10],9,38016083),o=d(o,i,n,r,e[u+15],14,-660478335),r=d(r,o,i,n,e[u+4],20,-405537848),n=d(n,r,o,i,e[u+9],5,568446438),i=d(i,n,r,o,e[u+14],9,-1019803690),o=d(o,i,n,r,e[u+3],14,-187363961),r=d(r,o,i,n,e[u+8],20,1163531501),n=d(n,r,o,i,e[u+13],5,-1444681467),i=d(i,n,r,o,e[u+2],9,-51403784),o=d(o,i,n,r,e[u+7],14,1735328473),n=h(n,r=d(r,o,i,n,e[u+12],20,-1926607734),o,i,e[u+5],4,-378558),i=h(i,n,r,o,e[u+8],11,-2022574463),o=h(o,i,n,r,e[u+11],16,1839030562),r=h(r,o,i,n,e[u+14],23,-35309556),n=h(n,r,o,i,e[u+1],4,-1530992060),i=h(i,n,r,o,e[u+4],11,1272893353),o=h(o,i,n,r,e[u+7],16,-155497632),r=h(r,o,i,n,e[u+10],23,-1094730640),n=h(n,r,o,i,e[u+13],4,681279174),i=h(i,n,r,o,e[u+0],11,-358537222),o=h(o,i,n,r,e[u+3],16,-722521979),r=h(r,o,i,n,e[u+6],23,76029189),n=h(n,r,o,i,e[u+9],4,-640364487),i=h(i,n,r,o,e[u+12],11,-421815835),o=h(o,i,n,r,e[u+15],16,530742520),n=p(n,r=h(r,o,i,n,e[u+2],23,-995338651),o,i,e[u+0],6,-198630844),i=p(i,n,r,o,e[u+7],10,1126891415),o=p(o,i,n,r,e[u+14],15,-1416354905),r=p(r,o,i,n,e[u+5],21,-57434055),n=p(n,r,o,i,e[u+12],6,1700485571),i=p(i,n,r,o,e[u+3],10,-1894986606),o=p(o,i,n,r,e[u+10],15,-1051523),r=p(r,o,i,n,e[u+1],21,-2054922799),n=p(n,r,o,i,e[u+8],6,1873313359),i=p(i,n,r,o,e[u+15],10,-30611744),o=p(o,i,n,r,e[u+6],15,-1560198380),r=p(r,o,i,n,e[u+13],21,1309151649),n=p(n,r,o,i,e[u+4],6,-145523070),i=p(i,n,r,o,e[u+11],10,-1120210379),o=p(o,i,n,r,e[u+2],15,718787259),r=p(r,o,i,n,e[u+9],21,-343485551),n=g(n,s),r=g(r,f),o=g(o,a),i=g(i,l)}return Array(n,r,o,i)}function s(e,t,n,r,o,i){return g((t=g(g(t,e),g(r,i)))<<o|t>>>32-o,n)}function c(e,t,n,r,o,i,u){return s(t&n|~t&r,e,t,o,i,u)}function d(e,t,n,r,o,i,u){return s(t&r|n&~r,e,t,o,i,u)}function h(e,t,n,r,o,i,u){return s(t^n^r,e,t,o,i,u)}function p(e,t,n,r,o,i,u){return s(n^(t|~r),e,t,o,i,u)}function g(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}b.exports=function(e){return t.hash(e,n,16)}}.call(this,w("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\crypto-browserify\\md5.js","/node_modules\\gulp-browserify\\node_modules\\crypto-browserify")},{"./helpers":4,buffer:3,u6WOfW:11}],7:[function(e,l,t){!function(e,t,n,r,o,i,u,s,a){var f;l.exports=f||function(e){for(var t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n}}.call(this,e("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\crypto-browserify\\rng.js","/node_modules\\gulp-browserify\\node_modules\\crypto-browserify")},{buffer:3,u6WOfW:11}],8:[function(c,d,e){!function(e,t,n,r,o,s,f,a,l){var i=c("./helpers");function u(l,c){l[c>>5]|=128<<24-c%32,l[15+(c+64>>9<<4)]=c;for(var e,t,n,r=Array(80),o=1732584193,i=-271733879,u=-1732584194,s=271733878,d=-1009589776,h=0;h<l.length;h+=16){for(var p=o,g=i,y=u,w=s,b=d,f=0;f<80;f++){r[f]=f<16?l[h+f]:v(r[f-3]^r[f-8]^r[f-14]^r[f-16],1);var a=m(m(v(o,5),(a=i,t=u,n=s,(e=f)<20?a&t|~a&n:!(e<40)&&e<60?a&t|a&n|t&n:a^t^n)),m(m(d,r[f]),(e=f)<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514)),d=s,s=u,u=v(i,30),i=o,o=a}o=m(o,p),i=m(i,g),u=m(u,y),s=m(s,w),d=m(d,b)}return Array(o,i,u,s,d)}function m(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function v(e,t){return e<<t|e>>>32-t}d.exports=function(e){return i.hash(e,u,20,!0)}}.call(this,c("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\crypto-browserify\\sha.js","/node_modules\\gulp-browserify\\node_modules\\crypto-browserify")},{"./helpers":4,buffer:3,u6WOfW:11}],9:[function(c,d,e){!function(e,t,n,r,u,s,f,a,l){function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,l){var c,d=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),t=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),n=new Array(64);e[l>>5]|=128<<24-l%32,e[15+(l+64>>9<<4)]=l;for(var r,o,h=0;h<e.length;h+=16){for(var i=t[0],u=t[1],s=t[2],p=t[3],f=t[4],g=t[5],y=t[6],w=t[7],a=0;a<64;a++)n[a]=a<16?e[a+h]:b(b(b((o=n[a-2],m(o,17)^m(o,19)^v(o,10)),n[a-7]),(o=n[a-15],m(o,7)^m(o,18)^v(o,3))),n[a-16]),c=b(b(b(b(w,m(o=f,6)^m(o,11)^m(o,25)),f&g^~f&y),d[a]),n[a]),r=b(m(r=i,2)^m(r,13)^m(r,22),i&u^i&s^u&s),w=y,y=g,g=f,f=b(p,c),p=s,s=u,u=i,i=b(c,r);t[0]=b(i,t[0]),t[1]=b(u,t[1]),t[2]=b(s,t[2]),t[3]=b(p,t[3]),t[4]=b(f,t[4]),t[5]=b(g,t[5]),t[6]=b(y,t[6]),t[7]=b(w,t[7])}return t}var i=c("./helpers"),m=function(e,t){return e>>>t|e<<32-t},v=function(e,t){return e>>>t};d.exports=function(e){return i.hash(e,o,32,!0)}}.call(this,c("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\crypto-browserify\\sha256.js","/node_modules\\gulp-browserify\\node_modules\\crypto-browserify")},{"./helpers":4,buffer:3,u6WOfW:11}],10:[function(e,t,a){!function(e,t,n,r,o,i,u,s,f){a.read=function(e,t,n,r,o){var i,u,l=8*o-r-1,c=(1<<l)-1,d=c>>1,s=-7,f=n?o-1:0,a=n?-1:1,o=e[t+f];for(f+=a,i=o&(1<<-s)-1,o>>=-s,s+=l;0<s;i=256*i+e[t+f],f+=a,s-=8);for(u=i&(1<<-s)-1,i>>=-s,s+=r;0<s;u=256*u+e[t+f],f+=a,s-=8);if(0===i)i=1-d;else{if(i===c)return u?NaN:1/0*(o?-1:1);u+=Math.pow(2,r),i-=d}return(o?-1:1)*u*Math.pow(2,i-r)},a.write=function(e,t,l,n,r,c){var o,i,u=8*c-r-1,s=(1<<u)-1,f=s>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,a=n?0:c-1,h=n?1:-1,c=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(i=isNaN(t)?1:0,o=s):(o=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-o))<1&&(o--,n*=2),2<=(t+=1<=o+f?d/n:d*Math.pow(2,1-f))*n&&(o++,n/=2),s<=o+f?(i=0,o=s):1<=o+f?(i=(t*n-1)*Math.pow(2,r),o+=f):(i=t*Math.pow(2,f-1)*Math.pow(2,r),o=0));8<=r;e[l+a]=255&i,a+=h,i/=256,r-=8);for(o=o<<r|i,u+=r;0<u;e[l+a]=255&o,a+=h,o/=256,u-=8);e[l+a-h]|=128*c}}.call(this,e("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\ieee754\\index.js","/node_modules\\gulp-browserify\\node_modules\\ieee754")},{buffer:3,u6WOfW:11}],11:[function(e,h,t){!function(e,t,n,r,o,a,l,c,d){var i,u,s;function f(){}(e=h.exports={}).nextTick=(u="undefined"!=typeof window&&window.setImmediate,s="undefined"!=typeof window&&window.postMessage&&window.addEventListener,u?function(e){return window.setImmediate(e)}:s?(i=[],window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<i.length&&i.shift()())},!0),function(e){i.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=f,e.addListener=f,e.once=f,e.off=f,e.removeListener=f,e.removeAllListeners=f,e.emit=f,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}.call(this,e("u6WOfW"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules\\gulp-browserify\\node_modules\\process\\browser.js","/node_modules\\gulp-browserify\\node_modules\\process")},{buffer:3,u6WOfW:11}]},{},[1])(1)});