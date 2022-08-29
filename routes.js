const express = require('express')
const path = require('path')

const app = express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/ping', (req, res) => res.send('200'))

module.exports = app