var express = require('express');

var routes = function(Book){

    var bookRouter = express.Router();

    bookRouter.route('/')
        .post(function(req, res){
            var book = new Book(req.body);

            book.save();
            res.status(201).send(book);
        })

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
    bookRouter.route('/:bookID')
        .get(function(req,res){
            Book.findById(req.params.bookID, function(err, book){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(book);
            })
        });
    return bookRouter;
};

module.exports = routes;