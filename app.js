var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost:27017/bookAPI');

var Book = require('./models/bookModels');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', function(req, res){
    res.send('Welcome to my API!!');
});

app.listen(port , function(){
    console.log('Gulp is running on port:'+ port);
});