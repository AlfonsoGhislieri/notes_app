class NotesView {
  constructor(modelClass, api) {
    this.modelClass = modelClass;
    this.api = api;
    this.mainContainer = document.querySelector('#main-container')

    document.querySelector('#add-note-btn').addEventListener("click", () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
      document.querySelector('#add-note-input').value = '';
    })
  }

  addNewNote = (newNote) => {
    this.modelClass.addNote(newNote);
    this.displayNotes();
  }

  displayNotes = () => {
    document.querySelectorAll('.note').forEach((element) => {
      element.remove();
    });

    this.modelClass.getNotes().forEach(note => {
      let noteElement = document.createElement('div');
      noteElement.textContent = note;
      noteElement.className = 'note';
      this.mainContainer.append(noteElement);
    });
  }
}

module.exports = NotesView;