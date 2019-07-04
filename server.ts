const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// const routes = require("./routes");

const app = express();
const port = 4040;

// middleware \\ allow cross origin here \\ had to do this to make request to backend !!!! // server uses cor to make request to backend
app.use(cors());

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routes, both API and view
// app.use(routes);

require("./routes/api/notes")(app);
// require("./routes/htmlRoutes")(app);


app.listen(port,() => {
    console.log(`🌎 Express Server listening on port ${port}`);
})