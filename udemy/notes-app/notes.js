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

const filters = {
  searchText: ""
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    console.log(note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
  });
}

// const renderNotes = function (notes, filters) {
//   const filteredNotes = notes.filter(function (note) {
//     return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
//   });

//   filteredNotes.forEach(function (note) {
//     const noteEl = document.createElement("p");
//     noteEl.textContent = note.title;
//     document.querySelector("#notes").appendChild(noteEl);
//   });
// };

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#remove-all").addEventListener("click", function (e) {
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
});

document.querySelector("#search-text").addEventListener('input', function (e) {
  console.log(e.target.value);
});


