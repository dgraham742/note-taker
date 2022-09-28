//GET routes and POST routes

const router = require('express').Router();
const { filterByQuery, findById, createNewNotes, validateNote } = require('../../lib/note.js');
const { note } = require('../../db/db.json');

router.get('/note', (req, res) => {
  let results = note;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/note/:id', (req, res) => {
  const result = findById(req.params.id, note);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/note', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = note.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNotes(req.body, note);
    res.json(note);
  }
});

module.exports = router;