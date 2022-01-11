class NotesView {
  constructor(modelClass) {
    this.modelClass = modelClass;
    this.mainContainer = document.querySelector('#main-container')

    document.querySelector('#add-note-btn').addEventListener("click", () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    })


  }

  addNewNote = (newNote) => {
    this.modelClass.addNote(newNote);
    this.displayNotes();

  }

  displayNotes = () => {
    const notes = this.modelClass.getNotes();

    notes.forEach(note => {
      let noteElement = document.createElement('div');
      noteElement.textContent = note;
      noteElement.className = 'note';
      this.mainContainer.append(noteElement);
    });
  }
}

module.exports = NotesView;