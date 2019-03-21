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
  * [Minify](#minify)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things I want to do in this course:

- [X] Turn my [client side app](https://github.com/BasPieren/web-app-from-scratch-18-19) into an server side app.
- [X] Optimize my CSS.
- [ ] Optimize with client side Javascript.

## Description 📝

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
After turning my client side app into a server side app I tested the network speed of each one on a slow 3G connection. This where the results:

![Client side app](https://i.imgur.com/tz9HYvo.png)
> Client side network speed test

![Server side app](https://i.imgur.com/8i4fJEd.png)
> Server side network speed test

The first that stands out is the difference between the amount of documents that the client has to download and the time it takes. The client side app takes around 14 seconds to download where the server side app takes "just" 8 seconds.

The server side app is able to do this because everything is rendered server side so this reduces the amount strain on the client.

### Audits
I also ran an audits test. This test gives your website or web app a score in 5 categories: performance, progressive web app, accessiblity, best practices and SEO.

![Client side app](https://i.imgur.com/xMpIaPT.png)
> Client side audits test

![Server side app](https://i.imgur.com/vLHVhqe.png)
> Server side audits test


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

  1. *gulp-concat* removes all unnecessary characters from the css file like for example spaces.  

  2. *gulp-cssnano* removes all comments.

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
To compress the responses that the server sends to the client I made use of `compression`. By doing this the size of the localhost gets decreased from 1.4KB to 796KB.

![Localhost before compression](https://i.imgur.com/UwMC7qe.png)
> Before compression

![Localhost after compression](https://i.imgur.com/uzCpCbK.png)
> After compression

## Sources 📚

  * None!

### Honourable Mentions

  * [Declan Rek](https://github.com/decrek)

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
