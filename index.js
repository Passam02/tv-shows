const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
console.dir(app)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log('works')
})

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', (req, res) => {
    const { search } = req.body
    console.log(req.body)
    res.render('homePost', {search})
})

app.get('/r/:tvshow/:id', (req, res) => {
    const { tvshow, id } = req.params
    res.render('tvshows', {tvshow, id})
})