var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/bookAPI', function(err, db){
    if (err) throw err;
    else console.log('Successfully connected to the DB' + db);
});

var Book = require('./models/bookModels');
var app = express();

var port = process.env.PORT || 3000;


var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req,res){
        Book.find(function(err, books){
            if(err)
                console.log(err);
            else
                res.json(books);
        })
    });

app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('Welcome to my API!!');
});

app.listen(port , function(){
    console.log('Gulp is running on port:'+ port);
});