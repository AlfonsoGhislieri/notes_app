// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const modelClass = require('./notesModel');
const viewClass = require('./notesView');
const model = new modelClass();
const view = new viewClass(model);

model.addNote('This is an example note')
view.displayNotes();
