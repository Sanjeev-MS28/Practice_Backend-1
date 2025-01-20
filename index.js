const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoutes');
const app = express();
const PORT = 6000;

app.get('/', function (req, res) {
    try {
        res.send('Hello World');
    } catch {
        res.status(500).send('Server Error');
    }
});

app.use(express.json());
app.use("/api",userRoute);

app.listen(PORT, async function () {
    try {
        await connectDB();
        console.log("Server is running on port 6000");
    } catch (error) {
        console.error(error.message);
    }
});