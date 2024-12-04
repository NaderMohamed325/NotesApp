const Notes = require('../models/notesModel');

exports.getNotes = async (req, res) => {
    try {
        const AllNotes = await Notes.find();
        res.status(200).json({
            status: "success",
            data: {
                AllNotes
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.getNote = async (req, res) => {
    try {

        const note = await Notes.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: {
                note
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const updatedNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: "success",
            data: {
                updatedNote
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        await Notes.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            message: "Note deleted successfully"
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};

exports.createNote = async (req, res) => {
    try {
        const newNote = await Notes.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                newNote
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        });
    }
};