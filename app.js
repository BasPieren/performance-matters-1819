'use strict'

const express = require('express'),
      request = require('request'),
      compression = require('compression'),
      app = express(),
      port = 3000

app
  .set('view engine', 'ejs')
  .set('views', 'views')

  // .use((req, res, next) => {
  //   res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 *
  //   60);
  //     next();
  // })
  .use(express.static('public'))
  .use(compression())

  .get('/', homePage)
  .get('/episode/:episode_id', detailPage)
  .get('/offline', offlinePage)

  .listen(port, () => console.log(`Example app listening on port ${port}!`))

function homePage(req, res) {
  request('https://swapi.co/api/films/', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)

    let data = filterData(JSON.parse(body))

    if (response.statusCode === 404) {
      res.render('pages/404.ejs')
    } else {
      res.render('pages/index.ejs', { data: data })
    }
  })
}

function detailPage(req, res) {
  request('https://swapi.co/api/films/' + req.params.episode_id, (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)

    let data = JSON.parse(body)

    if (response.statusCode === 404) {
      res.render('pages/404.ejs')
    } else {
      res.render('pages/detail.ejs', { data: data })
    }
  })
}

function offlinePage(req, res) {
  res.render('pages/offline.ejs')
}

function filterData(e) {
  let allMovies = e.results,
      dataFiltered = allMovies.map(a => {
        return{
          title: a.title,
          episode_id: a.episode_id,
          release_date: a.release_date,
          opening_crawl: a.opening_crawl,
          release_date: a.release_date,
          producer: a.producer
        }
      })
  dataFiltered.sort((a, b) => {
    return (a.episode_id) - (b.episode_id)
  })

  return dataFiltered
}
