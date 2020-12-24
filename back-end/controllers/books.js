import Book from "../models/Book.js"
import router from "../routes/books.js";
import mongoose from "mongoose";

export const getBooks = async (req, res) => {
    try {
        const Books = await Book.find();
        
        res.status(200).json(Books);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBook = async (req, res) => { 
    const { id } = req.params;

    try {
        const book = await BookTitle.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addBook = (req, res) => {
    const { title, subject, author, price} = req.body; 
    const newBook = new Book({ title, subject, author, price})
    try {
        newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, subject, author, price } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);

    const updatedBook = { title, subject, author, price, _id: id };

    await BookTitle.findByIdAndUpdate(id, updatedBook, { new: true });

    res.json(updatedBook);
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);

    await BookTitle.findByIdAndRemove(id);

    res.json({ message: "Book deleted successfully." });
}

// export default router;