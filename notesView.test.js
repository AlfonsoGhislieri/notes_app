
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

    const input = document.querySelector('#add-note-input');
    input.value = 'Example';
    
    const button = document.querySelector('#add-note-btn');
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('Example');
  });

})