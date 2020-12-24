import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getBooks } from './actions/books';
import bookshelf from './images/bookshelf.jpg';
import Books from "./components/Books/books";
import Form from "./components/Form/form";
import useStyles from './styles';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography className={classes.heading} variant="h2" align="center">Bookkeeper</Typography>
        <img className={classes.img} src={bookshelf} alt="Bookshelf" height="60" />
        <div className="App"></div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="4">
            <Grid item xs={12} sm={7}>
              <Books setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
