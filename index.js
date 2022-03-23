const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const bodyParser = require("body-parser")
const data = require('./entities/countries');
const get_results = require('./routes/get_results');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", get_results)

app.get('/', (req, res) => {
    let newData = data;
    res.render("index", { data: newData })
})

//catch all pages
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})


//Error handling
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})