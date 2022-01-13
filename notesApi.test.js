const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  test('calls fetch and loads notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'test note'
    }));

    api.loadNotes('test', (data) => {
      expect(data.note).toEqual('test note');
    })

  }); 
});

