const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  test('calls fetch and loads notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'test note'
    }));

    api.loadNotes('notes database server', (data) => {
      expect(data.note).toEqual('test note');
    });
  });

  test('makes a post request to server to create a new note', () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'test note'
    }));

    api.createNote('test note', (data) => {
      expect(data.note).toEqual('test note');
    })
  });
}); 


