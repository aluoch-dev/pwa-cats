const staticPwaCats = "pwa-cats-site-v1"
const assets = [
  "/",
  "/main.html",
  "/css/style.css",
  "/js/app.js",
  "/images/cat1.jpg",
  "/images/cat2.jpg",
  "/images/cat3.jpeg",
  "/images/cat4.jfif",
  "/images/cat5.jpeg",
  "/images/cat6.jpg",
  "/images/cat7.jpg",
  "/images/cat8.jpg",
  "/images/cat9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPwaCats).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})