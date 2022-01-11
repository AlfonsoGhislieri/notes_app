
/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView')
const NotesModel = require('./notesModel')
const fs = require('fs');

describe('NotesView', () => {
  test('.displaynotes -> gets list of notes from model', () => {

    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    notesModel.addNote('Buy Milk');
    notesModel.addNote('Get silk');
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

})