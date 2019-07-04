import React, { Component } from 'react'

class NoteCard extends Component {
    
      render() {
        const { note , deleteNote, loadNote} = this.props;
        return(
          <div className="note-card-container">
            <div className="note-card-title">
              {note.name}
            </div>
            <div className="note-card-content">
              {note.note}
            </div>
            <span className="note-card-delete" onClick={() => deleteNote(note.id)}>
          <i className="material-icons">close</i>
        </span>
        <span className="note-card-edit" onClick={() => loadNote(note)}>
          <i className="material-icons">mode_edit</i>
        </span>
          </div>
        );
      }
    
}

export default NoteCard
