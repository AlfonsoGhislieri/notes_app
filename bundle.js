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

  // index.js
  var modelClass = require_notesModel();
  var model = new modelClass();
  console.log(model.getNotes());
  console.log("The notes app is running!");
})();
