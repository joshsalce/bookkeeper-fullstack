import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    subject: String,
    author: String,
    price: {
       type: Number,
       default: 0,
    } 
});

const Book = mongoose.model('Book', bookSchema);

export default Book;