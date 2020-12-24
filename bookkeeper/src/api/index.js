import axios from "axios";

const url = 'https://bookkeeper-project.herokuapp.com/books';

export const fetchBooks = () => axios.get(url);
export const addBook = (newBook) => axios.book(url, newBook);
export const updateBook = (id, updatedBook) => axios.patch(`${url}/${id}`, updatedBook);
export const deleteBook = (id) => axios.delete(`${url}/${id}`);