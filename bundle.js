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
        setNotes = (notesArray) => {
          this.notesArray = notesArray;
        };
        addNote = (input) => this.notesArray.push(input);
        reset = () => this.notesArray = [];
      };
      module.exports = Model;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi = class {
        loadNotes = (url, callback) => {
          fetch(url).then((response) => response.json()).then((data) => callback(data));
        };
        createNote = (input, callback) => {
          const note = { content: input };
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
          }).then((response) => response.json()).then((data) => callback(data));
        };
        convertEmoji = (data, callback) => {
          fetch("https://makers-emojify.herokuapp.com/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: data })
          }).then((response) => response.json()).then((data2) => callback(data2.emojified_text));
        };
      };
      module.exports = NotesApi;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView = class {
        constructor(modelClass2, api2) {
          this.modelClass = modelClass2;
          this.api = api2;
          this.mainContainer = document.querySelector("#main-container");
          document.querySelector("#add-note-btn").addEventListener("click", () => {
            const newNote = document.querySelector("#add-note-input").value;
            this.addNewNote(newNote);
            this.api.createNote(newNote, (data) => {
              console.log("sucessfully added", data);
            });
            document.querySelector("#add-note-input").value = "";
          });
        }
        addNewNote = (newNote) => {
          this.modelClass.addNote(newNote);
          this.displayNotes();
        };
        displayNotes = () => {
          document.querySelectorAll(".note").forEach((element2) => {
            element2.remove();
          });
          this.modelClass.getNotes().forEach((note) => {
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
  var apiClass = require_notesApi();
  var viewClass = require_notesView();
  var api = new apiClass();
  var model = new modelClass();
  var view = new viewClass(model, api);
  api.loadNotes("http://localhost:3000/notes", (data) => {
    console.log(data);
    for (element of data) {
      api.convertEmoji(element, (converted) => {
        model.addNote(converted);
      });
    }
    ;
    setTimeout(() => view.displayNotes(), 200);
  });
})();
