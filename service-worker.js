const CACHE_NAME = 'cache-portafolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/nosotros.html',
  '/seleccion/.html',
  '/seleccion/ejercicio1.html.html',
  '/seleccion/ejercicio10.html',
  '/seleccion/ejercicio11.html',
  '/seleccion/ejercicio12.html',
  '/seleccion/ejercicio2.html',
  '/seleccion/ejercicio3.html',
  '/seleccion/ejercicio4.html',
  '/seleccion/ejercicio5.html',
  '/seleccion/ejercicio6.html',
  '/seleccion/ejercicio7.html',
  '/seleccion/ejercicio8.html',
  '/seleccion/ejercicio9.html',
  '/seleccion/seleccion.html',
  '/arreglos/arreglos.html',
  '/arreglos/ejercicio16.html',
  '/arreglos/ejercicio23.html',
  '/arreglos/ejercicio35.html',
  '/arreglos/ejercicio8.html',
  '/basicos/basicos.html',
  '/basicos/ejercicio1.html',
  '/basicos/ejercicio10.html',
  '/basicos/ejercicio11.html',
  '/basicos/ejercicio12.html',
  '/basicos/ejercicio13.html',
  '/basicos/ejercicio14.html',
  '/basicos/ejercicio15.html',
  '/basicos/ejercicio16.html',
  '/basicos/ejercicio17.html',
  '/basicos/ejercicio18.html',
  '/basicos/ejercicio19.html',
  '/basicos/ejercicio2.html',
  '/basicos/ejercicio20.html',
  '/basicos/ejercicio21.html',
  '/basicos/ejercicio22.html',
  '/basicos/ejercicio23.html',
  '/basicos/ejercicio24.html',
  '/basicos/ejercicio25.html',
  '/basicos/ejercicio26.html',
  '/basicos/ejercicio27.html',
  '/basicos/ejercicio28.html',
  '/basicos/ejercicio29.html',
  '/basicos/ejercicio3.html',
  '/basicos/ejercicio31.html',
  '/basicos/ejercicio32.html',
  '/basicos/ejercicio33.html',
  '/basicos/ejercicio34.html',
  '/basicos/ejercicio35.html',
  '/basicos/ejercicio36.html',
  '/basicos/ejercicio37.html',
  '/basicos/ejercicio38.html',
  '/basicos/ejercicio39.html',
  '/basicos/ejercicio4.html',
  '/basicos/ejercicio40.html',
  '/basicos/ejercicio5.html',
  '/basicos/ejercicio6.html',
  '/basicos/ejercicio7.html',
  '/basicos/ejercicio8.html',
  '/basicos/ejercicio9.html',
  '/recursividad/recursividad.html',
  '/recursividad/do while/ejercicio1.html',
  '/recursividad/do while/tabla.html',
  '/recursividad/for/ejercicio1.html',
  '/recursividad/for/ejercicio11.html',
  '/recursividad/for/ejercicio12.html',
  '/recursividad/for/ejercicio13.html',
  '/recursividad/for/ejercicio14.html',
  '/recursividad/for/ejercicio2.html',
  '/recursividad/for/ejercicio3.html',
  '/recursividad/for/ejercicio7.html',
  '/recursividad/for/examen1.html',
  '/recursividad/for/examen2.html',
  '/recursividad/for/examen3.html',
  '/recursividad/for/examen4.html',
  '/recursividad/for/funciones1.html',
  '/recursividad/for/funciones2.html',
  '/recursividad/for/funciones3.html',
  '/recursividad/for/funciones4.html',
  '/recursividad/for/tabla.html',
  '/recursividad/for/tabla_examen(1).html',
  '/recursividad/for/tabla_examen(2).html',
  '/recursividad/for/tablas(inversa).html',
  '/recursividad/for/tablas.html',
  '/recursividad/while/ejercicio1.html',
  '/recursividad/while/ejercicio10.html',
  '/recursividad/while/ejercicio4.html',
  '/recursividad/while/ejercicio5.html',
  '/recursividad/while/ejercicio6.html',
  '/recursividad/while/ejercicio8.html',
  '/recursividad/while/ejercicio8.html',
  '/recursividad/while/ejercicio9.html',
  '/recursividad/while/tabla.html',
  '/css/estilo.css',
  '/css/bootstrap.css',
  '/img/logo.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

