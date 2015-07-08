var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/bookAPI');

var Book = require('./models/bookModels');
var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function(req,res){

        var query = {};

        if(req.query.genre){
            query.genre = req.query.genre;
        }
        if(req.query.author){
            query.author = req.query.author;
        }

        Book.find(query, function(err, data){
            if(err)
                res.status(500).send(err);
            else
                res.json(data);
        })
    });
bookRouter.route('/books/:bookID')
    .get(function(req,res){
        Book.findById(req.params.bookID, function(err, book){
            if(err)
                res.status(500).send(err);
            else
                res.json(book);
        })
    });

app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('Welcome to my API!!');
});

app.listen(port , function(){
    console.log('Gulp is running on port:'+ port);
});