// const router = require("express").Router();
// const notesController = require("../../controllers/booksController");
// import uuidv4 from 'uuid/v4';

// // Matches with "/api/notes"
// router.route("/")
//   .get(notesController.findAll)
//   .post(notesController.create);

// // Matches with "/api/notes/:id"
// router
//   .route("/:id")
//   .get(notesController.findById)
//   .put(notesController.update)
//   .delete(notesController.remove);

// module.exports = router;
var notesdata = [
    {
        id: 1,
        name: "Jonathan",
        note: "Today i got my first technical challenge"
    },
    {
        id: 2,
        name: "Janariah",
        note: "Got her first acting GIG"
    },
    {
        id: 3,
        name: "Kostisa",
        note: "GOt me a car"
    },
    {
        id: 4,
        name: "JOhn",
        note: "got my first developer job"
    }
]

module.exports = function(app) {
  

    // get route for Viewing all notes
    app.get("/api/notes",(req, res) => {
      res.json(notesdata);
    });

    // get route for viewing single note
    app.get("/api/notes/:id",(req,res) => {
        var chosen = req.params.id;
        console.log(req.body)

        const notesToUpdate = notesdata.filter(note => note.name === chosen);

        if(!notesToUpdate) {
          res.status(404).json({message: 'No note found'})
        }
        res.json(notesToUpdate[0])
        
    });
    
    // post for creating notes
    app.post("/api/notes",(req, res) => {
        console.log("TCL: req.body", req.body)
        // console.log(res.Socket)
        notesdata.push(req.body)
        // res.json(req.body);
      });

     // PUT route for updating posts
     app.put("/api/notes/:id",(req, res) => {
         console.log("Res",res)

        var chosenId = req.params.id;

        console.log(req.body)

        const notesToUpdate = notesdata.filter(note => {
            return note.id == chosenId 
        })[0];
            
        const index = notesdata.indexOf(notesToUpdate);
        const keys = Object.keys(req.body);

        keys.forEach(key => {
            notesToUpdate[key] = req.body[key];
        });

        notesdata[index] = notesToUpdate;

        res.json(notesToUpdate[index]);
    });

    // delete route for deleting notes
     app.delete("/api/notes/:id",(req, res) => {

        var chosenId = req.params.id;

        const notesToUpdate = notesdata.filter(note => {
            return note.id == chosenId 
        })[0];
        

        const index = notesdata.indexOf(notesToUpdate);

        notesdata.splice(index, 1);
        
        res.json({message: `User ${chosenId} deleted.`})


    });
  };
  