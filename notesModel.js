
class Model {
  constructor(){
    this.notesArray = [];
    }

  getNotes = () => this.notesArray;

  setNotes = (notesArray) => {
    this.notesArray = notesArray;
  }

  addNote = (input) => this.notesArray.push(input);

  reset = () => this.notesArray = [];

}

module.exports = Model;