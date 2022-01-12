class NotesApi {
  loadNotes = (url, callback) => {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
  }
}

module.exports = NotesApi;

