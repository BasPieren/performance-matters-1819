'use strict'

const express = require('express'),
      request = require('request'),
      app = express(),
      port = 3000

app
  .set('view engine', 'ejs')
  .set('views', 'views')

  .use(express.static('public'))

  .get('/', homePage)

  .listen(port, () => console.log(`Example app listening on port ${port}!`))

function homePage(req, res) {
  request('https://swapi.co/api/films/', (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)

    let data = filterData(JSON.parse(body))
    console.log(data)
    res.render('pages/index.ejs', { data: data })
  })
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
