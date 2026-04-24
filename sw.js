const CACHE_NAME = 'todo-v1';
const urlsToCache = ['index.html', 'manifest.json'];


self.addEventListener('install', (event) => {
  // 待機せずにすぐにアクティブ化する
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // すべてのクライアント（タブ）を即座に制御下に置く
  event.waitUntil(self.clients.claim());
  
  // 古いキャッシュを削除するロジック（キャッシュ名のバージョンを変える）
  const CACHE_NAME = 'todo-pro-v2'; // ここを更新する
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});
