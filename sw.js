/* Service worker for Birmano: complete study interface offline.
   This cache version follows the packaged index content hash. */
'use strict';
const CACHE_PREFIX='birmano-a2b1-pwa-';
const CACHE_NAME=CACHE_PREFIX+'c064b7665e58bc7';
const INDEX=new URL('./index.html',self.registration.scope).href;
const PRECACHE=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    // Installation fails if an essential local file can't be cached; never
    // claim that the application is offline-ready unless the bundle is complete.
    await cache.addAll(PRECACHE);
  })());
  // Do not call skipWaiting here: keep the old app active until the learner
  // explicitly accepts an update.
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const names=await caches.keys();
    await Promise.all(names.filter(name=>name.startsWith(CACHE_PREFIX)&&name!==CACHE_NAME)
      .map(name=>caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('message',event=>{
  if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  // External Suno links are not intercepted; online music is not offline audio.
  if(url.origin!==self.location.origin)return;
  if(!url.href.startsWith(self.registration.scope))return;
  if(req.mode==='navigate'){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE_NAME);
      // Consistently use the cached app shell until an approved update is
      // activated: don't mix scripts/data from different lesson releases.
      const cached=await cache.match(INDEX);
      if(cached)return cached;
      try{return await fetch(req);}
      catch{return new Response('Birmano non è ancora stato salvato per l’uso offline.',
        {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}
    })());
    return;
  }
  // Do not intercept unrelated GitHub Pages repositories sharing the origin.
  if(PRECACHE.some(path=>new URL(path,self.registration.scope).href===url.href)){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE_NAME);
      return await cache.match(req)||await fetch(req);
    })());
  }
});
