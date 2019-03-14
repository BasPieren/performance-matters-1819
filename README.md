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
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things I want to do in this course:

- [X] Turn my [client side app](https://github.com/BasPieren/web-app-from-scratch-18-19) into an server side app.
- [ ] Optimize my CSS.
- [ ] Optimize with client side Javascript.

## Description 📝

## Installing 🔍
To install this application enter the following into your terminal:
```
git clone https://github.com/BasPieren/performance-matters-1819.git

cd performance-matters-1819
```

### Packages and Technologies
This project makes use of the following packages and technologies:

  * [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/)

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

## Sources 📚

  * None!

### Honourable Mentions

  * None!

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
