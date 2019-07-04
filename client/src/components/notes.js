import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';


class Notes extends Component {
  onSubmit(e) {
    e.preventDefault();
    const id = uuidv4();
    
    const formData = {
      id, 
      name: this.name.value,
      note: this.note.value
    };

    this.props.submitNote(formData, id);
  } 
  
  onTagSubmit(e) {
    e.preventDefault();
    const formData = {
      name: this.name.value
    }
    this.props.submitTag(formData, this.props.note.id)
  }
  
  renderTagForm(note) {
    if ( note.id !== undefined) {
      if(!this.props.newTag) {
        return (
          <span>
            Tag your note:
            <i 
              className="tag-button material-icons"
              onClick={() => this.props.showTagForm()}
            >
              add circle
            </i>
          </span>
        );
      } else {
        return (
          <form onSubmit={(e) => this.onTagSubmit(e)}>
            <input
              className="tag-input"
              type="text"
              placeholder="Tag Name..."
              ref={(input) => this.name = input}
            />
          </form>
        );
      }
    }
  }

  renderTags (note) {
    if (note.tags) {
      return note.tags.map((tag, index) =>
        <div
          className="tag"
          key={index}
          onClick={(e) => this.props.deleteTag(note.id, tag.id)}
        >
          <span className="delete">
            <i className="material-icons">delete</i>
          </span>
          {tag.name}
        </div>
      );
    }
  }

  render() {
    const { note, closeTagForm } = this.props;
    return(
      <div className="note-container">
        <h2>Edit This Note</h2>
        <form
          className="note-form"
          onSubmit={(e) => this.onSubmit(e)}
          onClick={() => closeTagForm()}
        >
          <div className="note-title">
            <input
              className="note-title-input"
              type="text"
              placeholder="Note Title..."
              defaultValue={note.name}
              ref={(input) => this.name = input}
            />
          </div>
          <div className="note-textarea-container">
            <textarea
              className="note-textarea"
              placeholder="Type Here..."
              defaultValue={note.note}
              ref={(input) => this.note = input}
            />
          </div>
          <input className="note-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

export default Notes;
