"use strict";var precacheConfig=[["./index.html","f11ba7250f1a207044874ee15f22566c"],["./static/css/main.ee446a32.css","73561bf520af4859d4f37b1e760058dc"],["./static/js/0.3813b7d9.chunk.js","61bd0ba6249a540b4b3ea36522e3d05e"],["./static/js/1.73faf6a8.chunk.js","18283ba666688988ae989cfc56e6ff7e"],["./static/js/10.f0da7feb.chunk.js","f6bc1759a44e35b39561ec1857bc2fe8"],["./static/js/11.9e0080f5.chunk.js","9accbc3ca5ff7a01ac8e1c82ec1c9d94"],["./static/js/2.a93a4b35.chunk.js","3c46852eef9a4e4581133c7d92a8f19b"],["./static/js/3.d6d5005e.chunk.js","e491b7a8598fdbf0ff362afdd2217ae4"],["./static/js/4.ec22333f.chunk.js","60bcd41a164045828ddb6c07c067c6da"],["./static/js/5.61972e13.chunk.js","a9a0ee9f53a10e42facc3b27b48b7ce3"],["./static/js/6.37d65479.chunk.js","9b3592209cb344ffc1a546a22d3b5a1f"],["./static/js/7.e617e004.chunk.js","0c7e68e5d534eee36d3e0a99fa9b3401"],["./static/js/8.3bbfc5e7.chunk.js","82f280c87d7717de31a8401602a22bfb"],["./static/js/9.ea1e96ce.chunk.js","e6a518503d826259b877a79d6de0b496"],["./static/js/main.1cb10ac5.js","3d38b349f197eb232a44610b4eb2a5c0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});