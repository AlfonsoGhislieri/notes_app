class NotesApi {
  loadNotes = (url, callback) => {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
  }

  createNote = (input, callback) => {
    const note = { content: input }
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    })
    .then(response => response.json())
    .then(data => callback(data))
  }

  convertEmoji = (data, callback) => {
    fetch('https://makers-emojify.herokuapp.com/', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({text: data}),
    })
    .then(response => response.json())
    .then (data => callback(data.emojified_text))
  }
}

module.exports = NotesApi;

