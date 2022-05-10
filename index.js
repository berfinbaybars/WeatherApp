const axios = require("axios");
const express = require("express");
const connectDB = require("./config/database");
const Location = require("./models/Location");

const router = express.Router();

const port = 2022;

const app = express();

app.use(express.json({ extended: false }));


router.get('/weather', (req, res) => {
    let { location } = req.body 
    if(location){
        axios.get(`https://api.weatherstack.com/current?access_key=6330e6d02259bd655fecaa09b1c68617&unit=m&query=${location}`)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

app.listen(port, () => console.log(`Server has started on ${port}`));

connectDB();
