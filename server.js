const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api-routes")
const htmlRoutes = require("./routes/html-routes")

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connecting to mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// routes
app.use(require(apiRoutes));
app.use(require(htmlRoutes));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});