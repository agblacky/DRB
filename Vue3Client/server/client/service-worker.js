(function(){var t={9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),o=n(3157),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(o(t)&&!s(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=o(e),c=s.f,u=i.f,l=0;l<a.length;l++){var f=a[l];r(t,f)||n&&r(n,f)||c(t,f,u(e,f))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&i(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,i=n(7854),s=n(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,f,h,p,d,g=t.target,y=t.global,v=t.stat;if(l=y?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(f in e){if(p=e[f],t.dontCallGetSet?(d=o(l,f),h=d&&d.value):h=l[f],n=u(y?f:g+(v?".":"#")+f,t.forced),!n&&void 0!==h){if(typeof p==typeof h)continue;c(p,h)}(t.sham||h&&h.sham)&&i(p,"sham",!0),s(l,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);t.exports=r?s:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),s=Object,a=r("".split);t.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):s(t)}:s},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),f=n(5465),h=n(6200),p=n(3501),d="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(t){return i(t)?o(t):r(t,{})},w=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var m=f.state||(f.state=new y);m.get=m.get,m.has=m.has,m.set=m.set,r=function(t,e){if(m.has(t))throw g(d);return e.facade=t,m.set(t,e),e},o=function(t){return m.get(t)||{}},i=function(t){return m.has(t)}}else{var b=h("state");p[b]=!0,r=function(t,e){if(l(t,b))throw g(d);return e.facade=t,u(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:r,get:o,has:i,enforce:v,getterFor:w}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(o(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),s=n(3307),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),f=l.enforce,h=l.get,p=String,d=Object.defineProperty,g=r("".slice),y=r("".replace),v=r([].join),w=a&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),m=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(p(e),0,7)&&(e="["+y(p(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?d(t,"name",{value:e,configurable:!0}):t.name=e),w&&n&&s(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=f(t);return s(r,"source")||(r.source=v(m,"string"==typeof e?e:"")),t};Function.prototype.toString=b((function(){return i(this)&&h(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",p="writable";e.f=r?i?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=l(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:f in n?n[f]:r[f],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e),l)try{return f(t,e)}catch(n){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(e.length>u)o(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&o(n=t.toString)&&!i(a=r(n,t)))return a;if(o(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&o(n=t.toString)&&!i(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),s=n(5181),a=n(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=s.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293),i=n(7854),s=i.String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),s=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=o("wks"),f=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return i(l,t)||(l[t]=a&&i(u,t)?u[t]:f("Symbol."+t)),l[t]}},7658:function(t,e,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=u||!l();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=o(this),n=i(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},4764:function(){"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(t){}},4523:function(){"use strict";try{self["workbox:precaching:6.5.3"]&&_()}catch(t){}},134:function(){"use strict";try{self["workbox:routing:6.5.3"]&&_()}catch(t){}},294:function(){"use strict";try{self["workbox:strategies:6.5.3"]&&_()}catch(t){}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}!function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}();!function(){"use strict";n(7658),n(4764);const t=(t,...e)=>{let n=t;return e.length>0&&(n+=` :: ${JSON.stringify(e)}`),n},e=t;class r extends Error{constructor(t,n){const r=e(t,n);super(r),this.name=t,this.details=n}}const o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},i=t=>[o.prefix,t,o.suffix].filter((t=>t&&t.length>0)).join("-"),s=t=>{for(const e of Object.keys(o))t(e)},a={updateDetails:t=>{s((e=>{"string"===typeof t[e]&&(o[e]=t[e])}))},getGoogleAnalyticsName:t=>t||i(o.googleAnalytics),getPrecacheName:t=>t||i(o.precache),getPrefix:()=>o.prefix,getRuntimeName:t=>t||i(o.runtime),getSuffix:()=>o.suffix};n(4523);let c;function u(){if(void 0===c){const e=new Response("");if("body"in e)try{new Response(e.body),c=!0}catch(t){c=!1}c=!1}return c}async function l(t,e){let n=null;if(t.url){const e=new URL(t.url);n=e.origin}if(n!==self.location.origin)throw new r("cross-origin-copy-response",{origin:n});const o=t.clone(),i={headers:new Headers(o.headers),status:o.status,statusText:o.statusText},s=e?e(i):i,a=u()?o.body:await o.blob();return new Response(a,s)}const f=t=>{const e=new URL(String(t),location.href);return e.href.replace(new RegExp(`^${location.origin}`),"")};function h(t,e){const n=new URL(t);for(const r of e)n.searchParams.delete(r);return n.href}async function p(t,e,n,r){const o=h(e.url,n);if(e.url===o)return t.match(e,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),s=await t.keys(e,i);for(const a of s){const e=h(a.url,n);if(o===e)return t.match(a,r)}}class d{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const g=new Set;async function y(){for(const t of g)await t()}function v(t){return new Promise((e=>setTimeout(e,t)))}n(294);function w(t){return"string"===typeof t?new Request(t):t}class m{constructor(t,e){this._cacheKeys={},Object.assign(this,e),this.event=e.event,this._strategy=t,this._handlerDeferred=new d,this._extendLifetimePromises=[],this._plugins=[...t.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:e}=this;let n=w(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const o=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(s){if(s instanceof Error)throw new r("plugin-error-request-will-fetch",{thrownErrorMessage:s.message})}const i=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))t=await n({event:e,request:i,response:t});return t}catch(a){throw o&&await this.runCallbacks("fetchDidFail",{error:a,event:e,originalRequest:o.clone(),request:i.clone()}),a}}async fetchAndCachePut(t){const e=await this.fetch(t),n=e.clone();return this.waitUntil(this.cachePut(t,n)),e}async cacheMatch(t){const e=w(t);let n;const{cacheName:r,matchOptions:o}=this._strategy,i=await this.getCacheKey(e,"read"),s=Object.assign(Object.assign({},o),{cacheName:r});n=await caches.match(i,s);for(const a of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await a({cacheName:r,matchOptions:o,cachedResponse:n,request:i,event:this.event})||void 0;return n}async cachePut(t,e){const n=w(t);await v(0);const o=await this.getCacheKey(n,"write");if(!e)throw new r("cache-put-with-no-response",{url:f(o.url)});const i=await this._ensureResponseSafeToCache(e);if(!i)return!1;const{cacheName:s,matchOptions:a}=this._strategy,c=await self.caches.open(s),u=this.hasCallback("cacheDidUpdate"),l=u?await p(c,o.clone(),["__WB_REVISION__"],a):null;try{await c.put(o,u?i.clone():i)}catch(h){if(h instanceof Error)throw"QuotaExceededError"===h.name&&await y(),h}for(const r of this.iterateCallbacks("cacheDidUpdate"))await r({cacheName:s,oldResponse:l,newResponse:i.clone(),request:o,event:this.event});return!0}async getCacheKey(t,e){const n=`${t.url} | ${e}`;if(!this._cacheKeys[n]){let r=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))r=w(await t({mode:e,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(t){for(const e of this._strategy.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const n of this.iterateCallbacks(t))await n(e)}*iterateCallbacks(t){for(const e of this._strategy.plugins)if("function"===typeof e[t]){const n=this._pluginStateMap.get(e),r=r=>{const o=Object.assign(Object.assign({},r),{state:n});return e[t](o)};yield r}}waitUntil(t){return this._extendLifetimePromises.push(t),t}async doneWaiting(){let t;while(t=this._extendLifetimePromises.shift())await t}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(t){let e=t,n=!1;for(const r of this.iterateCallbacks("cacheWillUpdate"))if(e=await r({request:this.request,response:e,event:this.event})||void 0,n=!0,!e)break;return n||e&&200!==e.status&&(e=void 0),e}}class b{constructor(t={}){this.cacheName=a.getRuntimeName(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,n="string"===typeof t.request?new Request(t.request):t.request,r="params"in t?t.params:void 0,o=new m(this,{event:e,request:n,params:r}),i=this._getResponse(o,n,e),s=this._awaitComplete(i,o,n,e);return[i,s]}async _getResponse(t,e,n){let o;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(o=await this._handle(e,t),!o||"error"===o.type)throw new r("no-response",{url:e.url})}catch(i){if(i instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(o=await r({error:i,event:n,request:e}),o)break;if(!o)throw i}for(const r of t.iterateCallbacks("handlerWillRespond"))o=await r({event:n,request:e,response:o});return o}async _awaitComplete(t,e,n,r){let o,i;try{o=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:r,request:n,response:o}),await e.doneWaiting()}catch(s){s instanceof Error&&(i=s)}if(await e.runCallbacks("handlerDidComplete",{event:r,request:n,response:o,error:i}),e.destroy(),i)throw i}}class x extends b{constructor(t={}){t.cacheName=a.getPrecacheName(t.cacheName),super(t),this._fallbackToNetwork=!1!==t.fallbackToNetwork,this.plugins.push(x.copyRedirectedCacheableResponsesPlugin)}async _handle(t,e){const n=await e.cacheMatch(t);return n||(e.event&&"install"===e.event.type?await this._handleInstall(t,e):await this._handleFetch(t,e))}async _handleFetch(t,e){let n;const o=e.params||{};if(!this._fallbackToNetwork)throw new r("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{0;const r=o.integrity,i=t.integrity,s=!i||i===r;if(n=await e.fetch(new Request(t,{integrity:"no-cors"!==t.mode?i||r:void 0})),r&&s&&"no-cors"!==t.mode){this._useDefaultCacheabilityPluginIfNeeded();await e.cachePut(t,n.clone());0}}return n}async _handleInstall(t,e){this._useDefaultCacheabilityPluginIfNeeded();const n=await e.fetch(t),o=await e.cachePut(t,n.clone());if(!o)throw new r("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let t=null,e=0;for(const[n,r]of this.plugins.entries())r!==x.copyRedirectedCacheableResponsesPlugin&&(r===x.defaultPrecacheCacheabilityPlugin&&(t=n),r.cacheWillUpdate&&e++);0===e?this.plugins.push(x.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}x.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:t}){return!t||t.status>=400?null:t}},x.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:t}){return t.redirected?await l(t):t}};n(134);const _="GET",O=t=>t&&"object"===typeof t?t:{handle:t};class P{constructor(t,e,n=_){this.handler=O(e),this.match=t,this.method=n}setCatchHandler(t){this.catchHandler=O(t)}}class S extends P{constructor(t,e,n){const r=({url:e})=>{const n=t.exec(e.href);if(n&&(e.origin===location.origin||0===n.index))return n.slice(1)};super(r,e,n)}}class C{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,n=this.handleRequest({request:e,event:t});n&&t.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data;0;const n=Promise.all(e.urlsToCache.map((e=>{"string"===typeof e&&(e=[e]);const n=new Request(...e);return this.handleRequest({request:n,event:t})})));t.waitUntil(n),t.ports&&t.ports[0]&&n.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const n=new URL(t.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const r=n.origin===location.origin,{params:o,route:i}=this.findMatchingRoute({event:e,request:t,sameOrigin:r,url:n});let s=i&&i.handler;const a=t.method;if(!s&&this._defaultHandlerMap.has(a)&&(s=this._defaultHandlerMap.get(a)),!s)return void 0;let c;try{c=s.handle({url:n,request:t,event:e,params:o})}catch(l){c=Promise.reject(l)}const u=i&&i.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async r=>{if(u){0;try{return await u.handle({url:n,request:t,event:e,params:o})}catch(i){i instanceof Error&&(r=i)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:t,event:e});throw r}))),c}findMatchingRoute({url:t,sameOrigin:e,request:n,event:r}){const o=this._routes.get(n.method)||[];for(const i of o){let o;const s=i.match({url:t,sameOrigin:e,request:n,event:r});if(s)return o=s,(Array.isArray(o)&&0===o.length||s.constructor===Object&&0===Object.keys(s).length||"boolean"===typeof s)&&(o=void 0),{route:i,params:o}}return{}}setDefaultHandler(t,e=_){this._defaultHandlerMap.set(e,O(t))}setCatchHandler(t){this._catchHandler=O(t)}registerRoute(t){this._routes.has(t.method)||this._routes.set(t.method,[]),this._routes.get(t.method).push(t)}unregisterRoute(t){if(!this._routes.has(t.method))throw new r("unregister-route-but-not-found-with-method",{method:t.method});const e=this._routes.get(t.method).indexOf(t);if(!(e>-1))throw new r("unregister-route-route-not-registered");this._routes.get(t.method).splice(e,1)}}let j;const R=()=>(j||(j=new C,j.addFetchListener(),j.addCacheListener()),j);function k(t,e,n){let o;if("string"===typeof t){const r=new URL(t,location.href);0;const i=({url:t})=>t.href===r.href;o=new P(i,e,n)}else if(t instanceof RegExp)o=new S(t,e,n);else if("function"===typeof t)o=new P(t,e,n);else{if(!(t instanceof P))throw new r("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=t}const i=R();return i.registerRoute(o),o}class E extends P{constructor(t,{allowlist:e=[/./],denylist:n=[]}={}){super((t=>this._match(t)),t),this._allowlist=e,this._denylist=n}_match({url:t,request:e}){if(e&&"navigate"!==e.mode)return!1;const n=t.pathname+t.search;for(const r of this._denylist)if(r.test(n))return!1;return!!this._allowlist.some((t=>t.test(n)))}}const q={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};class N extends b{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(q),this._networkTimeoutSeconds=t.networkTimeoutSeconds||0}async _handle(t,e){const n=[];const o=[];let i;if(this._networkTimeoutSeconds){const{id:r,promise:s}=this._getTimeoutPromise({request:t,logs:n,handler:e});i=r,o.push(s)}const s=this._getNetworkPromise({timeoutId:i,request:t,logs:n,handler:e});o.push(s);const a=await e.waitUntil((async()=>await e.waitUntil(Promise.race(o))||await s)());if(!a)throw new r("no-response",{url:t.url});return a}_getTimeoutPromise({request:t,logs:e,handler:n}){let r;const o=new Promise((e=>{const o=async()=>{e(await n.cacheMatch(t))};r=setTimeout(o,1e3*this._networkTimeoutSeconds)}));return{promise:o,id:r}}async _getNetworkPromise({timeoutId:t,request:e,logs:n,handler:r}){let o,i;try{i=await r.fetchAndCachePut(e)}catch(s){s instanceof Error&&(o=s)}return t&&clearTimeout(t),!o&&i||(i=await r.cacheMatch(e)),i}}function T(){self.addEventListener("activate",(()=>self.clients.claim()))}function M(t){a.updateDetails(t)}function D(){self.skipWaiting()}self.addEventListener("install",(t=>{t.waitUntil(caches.open("NekotasticRecipeCache").then((t=>{[{'revision':null,'url':'/css/app.01376ede.css'},{'revision':'791fa6291a7455ce2d25def3955f4fbe','url':'/index.html'},{'revision':null,'url':'/js/about.a233df8a.js'},{'revision':null,'url':'/js/app.3fa9cb5f.js'},{'revision':null,'url':'/js/chunk-vendors.3c02a37e.js'},{'revision':'818ec8a176bbb63dc924745b12eacda8','url':'/manifest.json'},{'revision':'b6216d61c03e6ce0c9aea6ca7808f7ca','url':'/robots.txt'}].forEach((e=>{t.add(e)}))})))})),M({prefix:"Nekotastic"}),k(new RegExp("/recipes"),new N({cacheName:"NekotasticRecipeCache"})),self.addEventListener("push",(t=>{const e=t.data.json();self.registration.showNotification(e.title,{body:e.body.message,icon:"img/icons/android-chrome-192x192.png"})}));const L=new E((({event:t})=>{}));k(L),D(),T()}()})();