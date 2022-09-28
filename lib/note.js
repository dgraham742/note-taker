function findById(id, noteArray) {
    const result = noteArray.filter(note => note.id === id)[0];
    return result;
  }
  function createNewNotes(body, noteArray) {
    const note = body;
    noteArray.push(animal);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: noteArray }, null, 2)
    );
    return note;
  }
  function validateNote(note) {
    if (!note.name || typeof note.name !== 'string') {
      return false;
    }
    return true;
  }
  