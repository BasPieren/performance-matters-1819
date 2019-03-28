# Performance Matters @cmda-minor-web · 2018-2019 ⚙️

This is the repo for the Performance Matters course.

![Server side app](https://i.imgur.com/8i4fJEd.png)

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and Technologies](#packages-and-technologies)
* [API](#api-)
* [How It Works](#how-it-works-️)
  * [Network Test](#network-test)
  * [Audits](#audits)
  * [Perceived Performance](#perceived-performance)
  * [Minify](#minify)
  * [Compression](#compression)
  * [Caching](#caching)
  * [Service Worker](#service-worker)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things I want to do in this course:

- [X] Turn my [client side app](https://github.com/BasPieren/web-app-from-scratch-18-19) into an server side app.
- [X] Optimize my CSS.
- [ ] Optimize with client side Javascript.

## Description 📝
The goal for this course is to learn more about web performance by turning a client side app into a server side app and using different performance optimization methods.

## Installing 🔍
To install this application enter the following into your terminal:
```
git clone https://github.com/BasPieren/performance-matters-1819.git

cd performance-matters-1819

npm install

npm run server
```

### Packages and Technologies
This project makes use of the following packages and technologies:

  * [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/)
  * [EJS](https://ejs.co/)
  * [Request](https://www.npmjs.com/package/request)
  * [Compression](https://www.npmjs.com/package/compression)
  * [gulp](https://www.npmjs.com/package/gulp)
  * [gulp-concat](https://www.npmjs.com/package/gulp-concat-css)
  * [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)

## API 🐒
I made use of the following API for this project:

* [SWAPI](https://swapi.co)

The Star Wars API allows you to get data on different Star Wars subjects like the movies, characters and planets. You can use a couple of different endpoints to access this data:
```js
{
    "films": "https://swapi.co/api/films/",
    "people": "https://swapi.co/api/people/",
    "planets": "https://swapi.co/api/planets/",
    "species": "https://swapi.co/api/species/",
    "starships": "https://swapi.co/api/starships/",
    "vehicles": "https://swapi.co/api/vehicles/"
}
```

## How It Works 🛠️
Here I explain which steps I took to optimize my product.

### Network Test
First after turning my client side app into a server side app I tested the network speed of both the client and the server side app on a slow 3G connection using the Chrome dev tools.

This where the results that came out of that test:

![Client side app](https://i.imgur.com/tz9HYvo.png)
> *Client side network speed test load time: __13.50s__*

![Server side app](https://i.imgur.com/8i4fJEd.png)
> *Server side network speed test load time: __8.33s__*

The first that stands out is the difference between the amount of documents that the client has to download and the time it takes. The client side app takes around 14 seconds to download where the server side app takes "just" 8 seconds.

The server side app is able to do this because everything is rendered on the server so this reduces the amount strain and calculation the client has to do.

### Audits
I also ran an audits test using Lighthouse which is also build into the Chrome dev tools. This test gives your website or web app a score in 5 categories: performance, progressive web app, accessiblity, best practices and SEO.

![Client side app](https://i.imgur.com/xMpIaPT.png)
> *Client side audits test*

![Server side app](https://i.imgur.com/vLHVhqe.png)
> *Server side audits test*

Here the differences between client and server weren't to big. This is probably because the app itself in't to big so the differences are not really noticeable.

### Perceived Performance
To enhance the perceived performance of the web app I took the following steps:

  1. I gave the `body` both a `background-image` and a `background-color` so that when the background image is loading, which takes about ~3 seconds, the user doesn't see a white background but a black background which matches with the background image that is loading in.

  ```css
  body {
    background-color: #000000;
    background-image: url(../images/background-image.jpg);
  }
  ```

  2. I also made sure that the `h1` element, which uses a custom font, still gets loaded in directly with a fallback font by using `font-display: swap` which loads a fallback font when the font face is not yet loaded.

  ```css
  @font-face {
    font-family:"STARWARS";
    src: url("../fonts/STARWARS/STARWARS.woff") format("woff");
    font-display: swap;
  }
  ```

### Minify
To minify my CSS I used *gulp*, *gulp-concat* and *gulp-cssnano*.

  1. *gulp-concat* Allows you to merge multiple css files into one single file.

  2. *gulp-cssnano* removes all unnecessary characters from the css file like for example spaces.

  ```js
  const gulp = require('gulp'),
        concat = require('gulp-concat'),
        cssnano = require('gulp-cssnano'),
        baseDir = 'public/css/'

  gulp.src([
    baseDir + 'style.css'
  ])
    .pipe(concat('style-min.css'))
    .pipe(cssnano({ discardComments: { removeAll:true }}))
    .pipe(gulp.dest('public/css/'))
  ```

### Compression
To compress the responses that the server sends to the client I made use of the npm package *compression*. Compression is a Node.js compression middleware and supports deflate and gzip. By doing this the size of the localhost gets decreased from 1.4KB to 796KB.

```js
compression = require('compression'),

.use(compression())
```

![Localhost before compression](https://i.imgur.com/UwMC7qe.png)
> *Before compression*

![Localhost after compression](https://i.imgur.com/uzCpCbK.png)
> *After compression*

### Caching
I also looked at making use of caching. You can make use of caching by setting the `max-age` inside the `Cache-Control` to for example 1 year. This way the files don't have to be re-downloaded when a user visits the page. This has a huge impact on your load time.

```js
.use((req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 *
  60);
    next();
})
```

![Before caching](https://i.imgur.com/evAkKLG.png)
> Before caching

![After caching](https://i.imgur.com/0DW6dAf.png)
> After caching

### Service Worker
Finally I implemented a service worker. Service workers act as a proxy server that sits between the server and the client. I used it to cache all my static files, in this case my CSS and Javascript and to generate an offline page.

First we register the service worker so it can start its installation in the background which we use to cache our static files. We point to the sw.js files. This is where the logic will happen. We also use `return registration.update()` so that we can update changes to our service worker automatically with every refresh.

```js
if ('serviceWorker' in navigator) {
window.addEventListener('load', function() {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope)

    return registration.update()
  }, function(err) {
    console.log('ServiceWorker registration failed: ', err)
  })
})
}
```  

Then we start handling the install event. We open our cache and add the desired files to it.  

```js
const cacheName = 'my-site-cache-v1',
      urlsToCache = ['css/style-min.css', 'js/script.js']

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
      .catch(err => console.error(err))
  )
  event.waitUntil(self.skipWaiting())
})
```

Finally we start handling the fetch event. When the service worker finds a match in the cache it returns it. If no match its found it caches the page using `respone.clone()`.

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response
        }

        return fetch(event.request).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            var responseToCache = response.clone()

            caches.open(cacheName)
              .then(function(cache) {
                cache.put(event.request, responseToCache)
              })

            return response
          }
        )
      })
      .catch(err => console.error(err))
    )
})
```

## Sources 📚

  * [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)

### Honourable Mentions

  * [Declan Rek](https://github.com/decrek)

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
