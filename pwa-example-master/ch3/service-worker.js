/**
 * Service Worker
 */

const _version = 'v4';
const cacheName = 'v2';
const cacheList = [
  '/',
  '/manifest.json',
  '/scripts/app.js',
  '/styles/index.css',
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg'
]

const log = msg => {
  console.log(`[ServiceWorker ${_version}] ${msg}`);
}

// Life cycle: INSTALL
self.addEventListener('install', event => {
  self.skipWaiting();
  log('INSTALL');
  // 아래가 waitUntil
  caches.open(cacheName).then(cache => {
    log('Caching app shell');
    return cache.addAll(cacheList);
  })
});

// Life cycle: ACTIVATE
self.addEventListener('activate', event => {
  log('Activate');
  event.waitUntil(
    caches.keys().then(keyList => {
      //실제 Prod 환경에서는 각각의 프라미스에 대한 예외처리를 해줘야합니다.
      return Promise.all(keyList.map(key => {
      if(key !== cacheName) {
        log('Removing old cache ' + key);
        return caches.delete(key);
      }
    }))
  })
  )
});

// Functional: FETCH
self.addEventListener('fetch', event => {
  log('Fetch ' + event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      //캐시에서 반환된 response가 undefined일 경우 새로 fetch 할 수 있도록 하는 코드
      return response || fetch(event.request)
    })
  );
});
