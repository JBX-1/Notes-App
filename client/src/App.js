import React, { Component } from 'react';
import Nav from './components/nav.js';
import Notes from './components/notes'
import List from './components/List'
import API from './utils/Api'
import './app.css'



class App extends Component {
  // Setting our component's initial state
  constructor() {
    super();
    this.state = {
      showNote: false,
      notes: [],
      note: {},
      error: ''
    };
  }
  componentDidMount() {
    this.loadNotes();
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote,
      note: {}
    })
  }

  // Loads all notes and sets them to this.state.notes
  loadNotes = () => {
    API.getNotes()
      .then(res =>
        this.setState({ notes: res.data})
      )
      .catch(err => console.log(err));
  };

  // create Notes
  createNotes = (data, id) => {
    API.createNotes(data, id)
    .then(res => this.setState({
      notes: res.data
    }))
  }

  // load Notes
  loadNote = (data) => {
    console.log(data)
    API.getNote(data.id)
      .then(res =>
        this.setState({
          note: {
            name: data.name,
            note: data.note
          },
          showNote: true
        })
      )
      .catch(err => console.log(err));
      
      // API.updateNotes().then(res => console.log(res.data))
  };
  // updateNotes
  updateNote = (data) => {
    console.log(data)
    console.log(data.note)
    this.loadNote(data)
    if(this.submitNote) {

      API.updateNotes(data.id)
        .then(res =>
          console.log("Updated Res",res)
        )
        .catch(err => console.log(err));
    }

  };
  // delete Notes
  deleteNote = (id) => {
    const newNotesState = this.state.notes.filter((note) => note.id !== id );
   API.deleteNotes(id)
    .then((res) => this.setState({ notes: newNotesState }) )
    .catch((err) => console.log(err.response.data) );
  }
  closeTagForm = () => {
    this.setState({ newTag: false });
  }

  // Submit Notes
  submitNote = (data, id) => {
    this.createNotes(data)
    window.location.reload()
    // if(this.updateNote) {
    //   this.updateNote(data)
    // }
    
    /* .then((res) =>{ this.setState({ 
      notes: res.data ,
      showNote: false }) } )
    .catch((err) => {
      const { errors } = err.response.data;
      if (errors.note) {
        this.setState({ error: "Missing Note Content!" });
      } else if (errors.name) {
        this.setState({ error: "Missing Note Title!" });
      }
    }); */
  }
  

  render() {
    const { note, notes, showNote} = this.state;
    return (
      <div className="App">
      
      {/* {
        console.log(notes)
      } */}
      <Nav toggleNote={this.toggleNote} showNote={showNote}  />
      <br />
        { showNote ?
            <Notes
              note={note}
              submitNote={this.submitNote}
              showTagForm={this.showTagForm}
              closeTagForm={this.closeTagForm}
              submitTag={this.submitTag}
              deleteTag={this.deleteTag}
            />
            :
            <List 
              loadNotes={this.loadNotes}
              notes={notes}
              loadNote={this.updateNote}
              deleteNote={this.deleteNote}
            /> }

      
      

      </div>
    )
  }
}

export default App;
