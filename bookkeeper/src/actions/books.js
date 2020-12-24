import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getBooks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBooks();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch(error) {
        console.log(error.message)
    }
}

export const addBook = (book) => async (dispatch) => {
    try {
        const { data } = await api.addBook(book);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBook = (id, book) => async (dispatch) => {
    try {
      const { data } = await api.updateBook(id, book);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const deleteBook = (id) => async (dispatch) => {
    try {
      await await api.deleteBook(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

