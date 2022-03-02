// importation
const express = require("express");

// instance
const app = express();
// require dotenv
require("dotenv").config();

app.use(express.json())
// connect db
const connectDB = require("./config/connectDB");
connectDB();

// routes
app.use("/api/contacts", require("./Route/contact"));

// creation serveur
const port = process.env.PORT;
app.listen(port, (error) => {
    error ? console.log(error) : console.log(`server is runnig on ${port}`);
});
