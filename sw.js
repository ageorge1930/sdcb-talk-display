const CACHE_NAME = 'talk-display-v3';
const FILES_TO_CACHE = [
  './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  './asl-A.svg',
  './asl-B.svg',
  './asl-C.svg',
  './asl-D.svg',
  './asl-E.svg',
  './asl-F.svg',
  './asl-G.svg',
  './asl-H.svg',
  './asl-I.svg',
  './asl-J.svg',
  './asl-K.svg',
  './asl-L.svg',
  './asl-M.svg',
  './asl-N.svg',
  './asl-O.svg',
  './asl-P.svg',
  './asl-Q.svg',
  './asl-R.svg',
  './asl-S.svg',
  './asl-T.svg',
  './asl-U.svg',
  './asl-V.svg',
  './asl-W.svg',
  './asl-X.svg',
  './asl-Y.svg',
  './asl-Z.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
