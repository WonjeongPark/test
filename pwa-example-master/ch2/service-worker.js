/**
 * Service Worker
 */

const _version = 'v1';
const cacheName = 'v1';
const cacheList = [
  '/images/1.jpg',
  '/images/2.jpg'
]

const log = msg => {
  console.log(`[ServiceWorker ${_version}] ${msg}`);
}

self.addEventListener('install', event => {
  log('INSTALL')
});

self.addEventListener('activate', event => {
  log('Activate')
});

self.addEventListener('fetch', event => {
  log('Fetch' + event.request.url);
  if(event.request.url.indexOf('.jpg') !== -1) {
    event.respondWith(fetch('/images/2.jpg'))
    // 조건이 참일 경우 respondWith를 통해
    // 브라우저의 기본 fetch를 서비스워커가 대신 수행하겠다는 코드
  }
})
