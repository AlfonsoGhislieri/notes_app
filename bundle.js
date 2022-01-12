(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var Model = class {
        constructor() {
          this.notesArray = [];
        }
        getNotes = () => this.notesArray;
        addNote = (input) => this.notesArray.push(input);
        reset = () => this.notesArray = [];
      };
      module.exports = Model;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView = class {
        constructor(modelClass2) {
          this.modelClass = modelClass2;
          this.mainContainer = document.querySelector("#main-container");
          document.querySelector("#add-note-btn").addEventListener("click", () => {
            const newNote = document.querySelector("#add-note-input").value;
            this.addNewNote(newNote);
            document.querySelector("#add-note-input").value = "";
          });
        }
        addNewNote = (newNote) => {
          this.modelClass.addNote(newNote);
          this.displayNotes();
        };
        displayNotes = () => {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.modelClass.getNotes();
          notes.forEach((note) => {
            let noteElement = document.createElement("div");
            noteElement.textContent = note;
            noteElement.className = "note";
            this.mainContainer.append(noteElement);
          });
        };
      };
      module.exports = NotesView;
    }
  });

  // index.js
  var modelClass = require_notesModel();
  var viewClass = require_notesView();
  var model = new modelClass();
  var view = new viewClass(model);
  view.displayNotes();
})();
