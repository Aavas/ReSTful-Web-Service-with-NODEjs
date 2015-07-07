var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/bookAPI');

var Book = require('./models/bookModels');
var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function(req,res){
        Book.find(function(err, data){
            if(err)
                console.log(err);
            else
                res.json(data);
        })
    });

app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('Welcome to my API!!');
});

app.listen(port , function(){
    console.log('Gulp is running on port:'+ port);
});