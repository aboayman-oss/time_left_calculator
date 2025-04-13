const CACHE_NAME = "time-left-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/style.css",
  "/js/main.js",
  "/js/logic.js",
  "/js/picker.js",
  "/js/utils.js",
  "/assets/icon-192.png",
  "/assets/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
