import React, { Component } from 'react';
import NoteCard from './noteCard'


class List extends Component {
    componentWillMount() {
        this.props.loadNotes();
      }

  render() {
    const { notes, loadNote, deleteNote } = this.props;

    const cards = notes.map((note, index) => {
      return (
        <NoteCard
          key={index}
          index={index}
          note={note}
          loadNote={loadNote}
          deleteNote={deleteNote}
        />
      );
    });

    return (
      <div className="note-card-list">
        {cards}
      </div>
    )
  }
}

export default List
