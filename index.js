const express = require("express");
const cors = require('cors')
const { connectDB } = require("./config/database");

const port = 2022;

const app = express();

app.use(cors());
app.use(express.json({strict: false}));

app.use('/weather', require('./routes/weather'));

connectDB();

app.listen(port, () => console.log(`Server has started on ${port}`));

