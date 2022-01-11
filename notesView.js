class NotesView {
  constructor(modelClass) {
    this.modelClass = modelClass;
    this.mainContainer = document.querySelector('#main-container')
  }

  displayNotes = () => {
    const notes = this.modelClass.getNotes();

    notes.forEach(note => {
      let noteElement = document.createElement('div');
      noteElement.innerText = note;
      noteElement.className = 'note';
      this.mainContainer.append(noteElement);
    });
  }
}

module.exports = NotesView;