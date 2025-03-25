// Имя кэша для нашего приложения
const CACHE_NAME = 'sport-portal-cache-v1';

// Список ресурсов для предварительного кэширования
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/index-[hash].css',
  '/assets/index-[hash].js',
  '/assets/vendor-[hash].js',
  '/assets/ui-[hash].js',
  '/assets/logo.svg',
  '/assets/hero-bg.svg',
  '/vite.svg',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
];

// При установке service worker кэшировать контент
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Открываем кэш');
        return cache.addAll(urlsToCache.map(url => {
          // Для файлов с хешем в названии используем catch для игнорирования ошибок
          if (url.includes('[hash]')) {
            return fetch(url.replace('[hash]', '*'))
              .then(response => {
                if (response.ok) {
                  return cache.put(url, response);
                }
                return Promise.resolve();
              })
              .catch(() => Promise.resolve());
          }
          return url;
        }));
      })
  );
});

// При активации - удалить старые кэши
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('sport-portal-cache-') &&
                 cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// При запросе ресурсов - проверить кэш, затем сеть
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Кэш найден - возвращаем ответ из кэша
        if (response) {
          return response;
        }
        
        // Если не найден в кэше - обращаемся к сети
        return fetch(event.request).then(response => {
          // Если ответ некорректный, просто возвращаем его
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Клонируем ответ - тело ответа может быть использовано только один раз
          const responseToCache = response.clone();
          
          // Добавляем ответ в кэш для последующих запросов
          caches.open(CACHE_NAME)
            .then(cache => {
              // Не кэшируем запросы API и аналитику
              if (!event.request.url.includes('/api/') && 
                 !event.request.url.includes('/analytics/')) {
                cache.put(event.request, responseToCache);
              }
            });
          
          return response;
        });
      })
  );
}); 