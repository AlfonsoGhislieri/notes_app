const notesModel = require('./notesModel.js')

describe('model', () => {
  let model;
  beforeEach(() => {
    model = new notesModel();
  })

  test('.getNotes initializes with empty array of notes', () => {
    expect(model.getNotes()).toEqual([]);
  })

  test('.addNote adds to array of notes', () => {
    model.addNote('Buy milk');
    model.addNote('Go gym');
    expect(model.getNotes().length).toEqual(2);
    expect(model.getNotes()).toEqual(['Buy milk','Go gym']);
  });

  test('.reset clears notes array', () => {
    model.addNote('Buy milk');
    model.addNote('Go gym');
    expect(model.getNotes().length).toEqual(2);
    model.reset();
    expect(model.getNotes().length).toEqual(0);
    expect(model.getNotes()).toEqual([]);
  })
  
})