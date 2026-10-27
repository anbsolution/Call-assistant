const CACHE = "z7-support-v30";
const FILES = ["./", "./index.html", "./styles.css?v=2.9", "./theme-v30.css?v=3.0", "./app.js?v=2.9", "./pro.js?v=2.9", "./v24.js?v=2.9", "./call-flow.js?v=2.9", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
