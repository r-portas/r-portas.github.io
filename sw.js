importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06cb3b0cc8a3348a56ca.js",
    "revision": "3a497a44a13f0bd6aab30761344bdd2e"
  },
  {
    "url": "/_nuxt/13fd888555804a813f39.js",
    "revision": "495a30d64ccded2ebd49013eac641cbf"
  },
  {
    "url": "/_nuxt/1e46bd39394a954731d8.js",
    "revision": "755beceddba37aa916a54f0137b9df20"
  },
  {
    "url": "/_nuxt/231e2647efe1866a36bc.js",
    "revision": "4ea7a235a8ae8bc4fc8f4ad5af716c3b"
  },
  {
    "url": "/_nuxt/5cf844161eb82516c314.js",
    "revision": "4a313f5e313927783b22738f07119744"
  },
  {
    "url": "/_nuxt/5eb528f949fb97f5c022.js",
    "revision": "d490f4f52c0b89ff5a73a02c39935b20"
  },
  {
    "url": "/_nuxt/8bedce4fbf4e40e29f8d.js",
    "revision": "ac498640392e6f07e8947ea357cb6c8a"
  },
  {
    "url": "/_nuxt/a0fb6c15d9c93827c763.js",
    "revision": "8935f1f46af147dd1390b71277d6416a"
  },
  {
    "url": "/_nuxt/c1dcd34e7f85aea6eb22.js",
    "revision": "e159366177dacc6adf446949f32631fb"
  },
  {
    "url": "/_nuxt/d4806a0ee9cd7f8a1a0a.js",
    "revision": "c9727575722b24817cba8725d5e30b90"
  },
  {
    "url": "/_nuxt/d9970ee54cb60932843a.js",
    "revision": "e5f09c0c6c03d859664dd2a5deef4609"
  },
  {
    "url": "/_nuxt/e17554da58764e315479.js",
    "revision": "22b41fc2f00585736737885fbfabe069"
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
