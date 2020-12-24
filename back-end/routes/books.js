import express from "express";

import { getBooks, getBook, addBook, updateBook, deleteBook } from '../controllers/books.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);
router.get('/:id', getBook);
router.patch('/:id', updateBook);
router.patch('/:id', deleteBook)
    
export default router;