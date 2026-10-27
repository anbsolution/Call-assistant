const CACHE = "z7-support-v39";
const FILES = ["./", "./index.html", "./styles.css?v=3.2", "./theme-v30.css?v=3.2", "./theme-v31.css?v=3.2", "./app.js?v=3.2", "./pro.js?v=3.2", "./v24.js?v=3.2", "./call-flow.js?v=3.2", "./workspace-v31.js?v=3.2", "./manifest.webmanifest", "./icon.svg", "./question-bank.js?v=3.8", "./question-bank.css?v=3.8", "./viewport-v39.css?v=3.9"];
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
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const isDocumentOrAsset = event.request.mode === "navigate" ||
    /\.(?:html|css|js)$/.test(url.pathname);
  if (isDocumentOrAsset) {
    event.respondWith(fetch(event.request).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => caches.match(event.request).then(cached => cached || caches.match("./index.html"))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
