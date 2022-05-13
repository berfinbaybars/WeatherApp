const axios = require("axios");
const express = require("express");
const cors = require('cors')
const { connectDB } = require("./config/database");
const Location = require("./models/Location");

const port = 2022;

const app = express();

app.use(cors());
app.use(express.json({strict: false}));

app.post('/weather', (req, res) => {
    let { location } = req.body 
    
    if(!location){
        res.send("Location is empty.").status(500);
    }

    axios.get(`http://api.weatherstack.com/current?access_key=6330e6d02259bd655fecaa09b1c68617&unit=m&query=${location.lat},${location.lng}`)
        .then(async (data) => {
            const newLocation = new Location({
                location: location.name,
                latitude: location.lat,
                longitude: location.lng,
                currentWeather: data.data.current.temperature
            })

            try {
                await newLocation.save();
            }
            catch(err) {
                console.log(err);
                res.send("Server Error: \n", err).status(500);
            }
            
            res.send(data.data.current).status(200);
        })
        .catch((err) => {
            console.log(err);
            res.send("Server Error: \n", err).status(500);
        })
})

connectDB();

app.listen(port, () => console.log(`Server has started on ${port}`));

