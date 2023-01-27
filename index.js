const express = require('express')
const app = express()
const path = require('path')
console.dir(app)

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, () => {
    console.log('works')
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/r/:tvshow', (req, res) => {
    const { tvshow } = req.params
    console.log(tvshow)
    console.dir(tvshow)
    res.render('tvshows', {tvshow})
})