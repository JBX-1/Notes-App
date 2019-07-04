import axios from 'axios'

const url = "http://localhost:4040/api/notes";
const urlID = "http://localhost:4040/api/notes/";

export default {
    // Gets all notes
    getNotes: function() {
      return axios.get(url);
    },
    // Gets notes with the given id
    getNote: function(id) {
      // console.log(typeof id);
      return axios.get(urlID + id);
    },
    // Deletes notes with the given id
    deleteNotes: function(id) {
      return axios.delete(urlID + id);
    },
    // update notes
    updateNotes: function(id) {
      // console.log("update", typeof id)
      return axios.put(urlID + id);
    },
    // create notes 
    createNotes: function(data) {
      return axios.post(urlID, data);
    }
  };