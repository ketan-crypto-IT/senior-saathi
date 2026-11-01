const CACHE_NAME = "senior-saathi-v28";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./carousel-art.png",
  "./assets/module-covers/smartphone.png",
  "./assets/module-covers/whatsapp.png",
  "./assets/module-covers/payments.png",
  "./assets/module-covers/internet.png",
  "./assets/module-covers/safety.png",
  "./assets/module-covers/services.png",
  "./assets/lesson-screenshots/smartphone.png",
  "./assets/lesson-screenshots/whatsapp.png",
  "./assets/lesson-screenshots/payments.png",
  "./assets/lesson-screenshots/internet.png",
  "./assets/lesson-screenshots/safety.png",
  "./assets/lesson-screenshots/services.png"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );

  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
  // The Cache API only matches GET/HEAD by default. Let POST requests, such as
  // the OpenStreetMap Overpass search, go straight to the network.
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    }).catch(() => fetch(event.request))
  );
});
