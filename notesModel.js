
class Model {
  constructor(){
    this.notesArray = [];
    }

  getNotes = () => this.notesArray;

  addNote = (input) => this.notesArray.push(input);

  reset = () => this.notesArray = [];

}

module.exports = Model;