const CACHE = "z7-support-v31";
const FILES = ["./", "./index.html", "./styles.css?v=3.1", "./theme-v30.css?v=3.0", "./theme-v31.css?v=3.1", "./app.js?v=3.1", "./pro.js?v=3.1", "./v24.js?v=3.1", "./call-flow.js?v=3.1", "./workspace-v31.js?v=3.1", "./manifest.webmanifest", "./icon.svg"];
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
