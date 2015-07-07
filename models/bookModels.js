var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {
        type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default: false}
}, {collection: 'Book'});   // Mongoose by default produces a collection name by passing the model name to
                            // the utils.toCollectionName method. This method pluralizes the name. Define collection
                            // to use different collection. Here 'Book' will be used as collection else 'books' if no collection is defined in schema.

module.exports = mongoose.model('Book' , bookModel /*,'Notebook'*/);    // collection name can also be passed as a third argument
                                                                        // Here, Notebook will be used as collection if uncommented.