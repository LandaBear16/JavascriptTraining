const notes = [
  {
    title: "my next trip",
    body: "I want to go to San Fran"
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eat a bit better"
  },
  {
    title: "Office Modification",
    body: "New Desk and Chair"
  }
];

const sortNotes = function(notes) {
  return notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = (notes, noteTitle) => {
  return notes.find(function(note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function(notes, query) {
  return notes.filter(function(note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

sortNotes(notes);
//console.log(notes);
console.log(false < true);

//console.log(findNotes(notes, "to"));

//const note = findNote(notes, "office Modification");
//console.log(note);
