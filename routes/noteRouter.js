const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const fs = require('fs');


//GET route for retreiving all notes - sourced from assignment 26
notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});

//POST route for a new note
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const note = {
            title,
            text,
            id: uuid()
        };
        
        readAndAppend(note, './db/db.json');
        res.json('Note successfully added!')
    } else {
        res.errored('Error in writing note');
    }
    console.log('Note Saved');
})



module.exports = noteRouter;