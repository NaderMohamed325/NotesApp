const notesRouter = require('express').Router();
const notesController = require('../controller/notesController');


notesRouter.route('/')
    .get(notesController.getNotes)
    .post(notesController.createNote);

notesRouter.route('/:id')
    .get(notesController.getNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote);


module.exports = notesRouter;
