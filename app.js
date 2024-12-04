const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('morgan')('dev'));

const notesRouter = require('./routes/notesRouter');
app.use('/notes', notesRouter);






module.exports=app;