import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from "react-file-base64";
import useStyles from './styles';
import { useDispatch } from "react-redux";
import { addBook, updateBook } from '../../actions/books';
// import { updateBook } from "../../../../../back-end/controllers/books";
import { useSelector } from "react-redux";

function Form({ currentId, setCurrentId }) {
    const [bookData, setBookData] = useState({
        title: '', subject: '', author: '', price: '',
    })
    const book = useSelector((state) => currentId ? state.books.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(book) setBookData(book);
    }, [book])

    const clear = () => {
        setCurrentId(0);
        setBookData({ title: '', subject: '', author: '', price: '' });
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId === 0) {
            dispatch(addBook(bookData));
        } else {
            dispatch(updateBook(currentId, bookData));
            clear();
        } 
    };

    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${book.title}"` : 'Adding a Book'}</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={bookData.title} onChange={(e) => setBookData({ ...bookData, title: e.target.value })} />
                <TextField name="subject" variant="outlined" label="Subject" fullWidth value={bookData.subject} onChange={(e) => setBookData({ ...bookData, subject: e.target.value })} />
                <TextField name="author" variant="outlined" label="Author" fullWidth value={bookData.author} onChange={(e) => setBookData({ ...bookData, author: e.target.value })} />
                <TextField name="price" variant="outlined" label="Price" fullWidth value={bookData.price} onChange={(e) => setBookData({ ...bookData, price: e.target.value })} />
            {/* <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setBookData({ ...bookData, selectedFile: base64})} />
            </div> */}
            <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;