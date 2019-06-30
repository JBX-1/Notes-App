// const router = require("express").Router();
// const notesController = require("../../controllers/booksController");

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
  

    // View all notes
    app.get("/api/notes", function(req, res) {
      res.json(notesdata);
    });

    // view single note
    app.get("/api/notes/:note", function(req,res) {
        var chosen = req.params.note;
        if(chosen) {
            for(var i = 0; i < notesdata.length; i++){
                if(chosen === notesdata[i].name) {
                    res.json(notesdata[i])
                    return; 
                
                }
            }
            res.json("Not in data");
        }else {

            res.json(chosen)
        }
        
    });
    
    // create notes
    app.post("/api/createnotes", function(req, res) {
        console.log(req.body);
        // console.log(res.Socket)
        res.json(req.body);
        notesdata.push(req.body)
      });

    // edit notes
    app.put("/api/editnotes", function(req,res){

    })


    // delete note
    // app.delete("",function(req,res){
        
    // })
  
  };
  