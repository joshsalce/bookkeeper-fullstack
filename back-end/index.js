import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";

import bookRoutes from './routes/books.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/books', bookRoutes);
app.get('/', (req, res) => {
    res.send("Hello to Books API");
});

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on port 4000')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);