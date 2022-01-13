
/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView')
const NotesModel = require('./notesModel')
const NotesApi = require('./notesApi')
const fs = require('fs');
require('jest-fetch-mock').enableMocks()

describe('NotesView', () => {
  test('.displaynotes -> gets list of notes from model', () => {

    document.body.innerHTML = fs.readFileSync('./index.html');

    fetch.mockResponseOnce(JSON.stringify({
      note: 'test note'
    }));

    const notesModel = new NotesModel();
    const notesApi = new NotesApi();
    const notesView = new NotesView(notesModel,notesApi);

    const input = document.querySelector('#add-note-input');
    input.value = 'Example';
    
    const button = document.querySelector('#add-note-btn');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Example');
  });
  test('clear the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('one');
    model.addNote('two');
  
    view.displayNotes();
    view.displayNotes();
  
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
  
})