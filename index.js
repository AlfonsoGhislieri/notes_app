const modelClass = require('./notesModel');
const apiClass = require('./notesApi.js')
const viewClass = require('./notesView');

const api = new apiClass();
const model = new modelClass();
const view = new viewClass(model,api);

api.loadNotes('http://localhost:3000/notes', (data) => {
  model.setNotes(data);
  view.displayNotes();
});
