const express = require('express')
const router = express.Router()

const recipeScraper = require('recipe-scraper')

router.get('/recipe/:url', (req, res) => {

  // URL Parameter
  const url = req.params.url

  recipeScraper(url).then(recipe => {
    res.status(200).send(recipe)
  }).catch(err => {
    res.status(500).send(err)
  });
})

module.exports = router