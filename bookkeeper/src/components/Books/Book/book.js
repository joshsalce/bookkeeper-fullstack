import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from 'react-redux';

import { deleteBook } from '../../../actions/books.js';
import useStyles from './styles';


function Book({ book, setCurrentId }) {
  const dispatch = useDispatch();
  const classes = useStyles(); 
    return (
        <Card className={classes.card}>
          <CardMedia className={classes.media} title={book.title}/>
          <div className={classes.overlay}>
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="body">{moment(book.createdAt).fromNow()}</Typography>
          </div>
          <div className={classes.overlay2}>
            <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(book._id)}>
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" componenet="h2">{book.subject}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{book.author}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">${book.price}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(deleteBook(book._id))}><DeleteIcon fontSize="small" /> Delete</Button>
          </CardActions>
        </Card>
    );
}

export default Book;