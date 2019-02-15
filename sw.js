importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/021736d4d3ea1451811f.js",
    "revision": "547ec22dcbf0ea9440d3a26f1d325da2"
  },
  {
    "url": "/_nuxt/10c13ac447f5a0ddccf8.js",
    "revision": "b66b657ab341fe2bc378333924552321"
  },
  {
    "url": "/_nuxt/276585afd34417fd91c8.js",
    "revision": "efa1455bccd2201f3236b1929ce53a93"
  },
  {
    "url": "/_nuxt/6065509039756341ec46.js",
    "revision": "ad34df8a9c99e8f594fecf5cc9109880"
  },
  {
    "url": "/_nuxt/8734e17085967b0a860e.js",
    "revision": "e26014849bb59a8c86ea41c8b907af96"
  },
  {
    "url": "/_nuxt/8843d63ae3abd7087bf9.js",
    "revision": "92b2bd680e1e0c4317c4ae2b9f0b57de"
  },
  {
    "url": "/_nuxt/922f759a912ab8ddad09.js",
    "revision": "ed9c673d5303301088ab46de67ce1419"
  },
  {
    "url": "/_nuxt/a17058fd2c4790970f4b.js",
    "revision": "8e41787f0b379f8a42ffb75f8126b765"
  },
  {
    "url": "/_nuxt/aab97f131de40a28a06e.js",
    "revision": "26ccb8e83b160a3e015841808712602b"
  },
  {
    "url": "/_nuxt/b6868e3c004f044cfdac.js",
    "revision": "d850930b62ac3406d534fd72e7628b61"
  },
  {
    "url": "/_nuxt/bd351a3f871160b9b7ec.js",
    "revision": "b7a7fc046376eb11865a0896141ec31b"
  },
  {
    "url": "/_nuxt/e53428988a59242124bc.js",
    "revision": "74cd43c09805d1ebb3d3001637a75244"
  }
], {
  "cacheId": "portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
