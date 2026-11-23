// 移転に伴い、古いキャッシュを消して、このService Workerを解除する
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const ks = await caches.keys(); await Promise.all(ks.filter((k) => k.startsWith('dokugeki-')).map((k) => caches.delete(k)));
    await self.registration.unregister();
    const cs = await self.clients.matchAll({ type: 'window' }); cs.forEach((c) => c.navigate('https://osmail1006-cell.github.io/'));
  })());
});
