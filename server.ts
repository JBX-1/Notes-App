const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");

const app = express();
const port = 4040;

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