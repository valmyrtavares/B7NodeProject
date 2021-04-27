const express = require("express")
const mustache = require('mustache-express')
const router = require('./routes/index')

 

const app = express();

app.use('/', router);

app.engine('mst',mustache(__dirname+'/views/partials','.mst'))
app.set('view engine', 'mst');
app.set('views ', __dirname + '/views')

app.use(express.json())

module.exports = app


