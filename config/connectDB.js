// require mongoose
const mongoose = require("mongoose");

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.URI);
       console.log("DataBase connected successfuly");
    } catch (error) {
        console.log("unable to connecct to DataBase", error);
    }
};

module.exports = connectDB;
