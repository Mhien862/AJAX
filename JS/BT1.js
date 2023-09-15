class Note {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  
    addNote() {
    }
  }
  class NoteList {
    constructor() {
      this.notes = [];
    }
  
    addNoteToList(note) {
      this.notes.push(note);
    }
  }

const myNote = new Note("REaction", "ReactJs");
const myNote1 = new Note("my title", "my content");

const noteList = new NoteList();


noteList.addNoteToList(myNote);
noteList.addNoteToList(myNote1);


console.log(noteList.notes);

    