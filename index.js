const axios = require("axios");
const express = require("express");
const cors = require('cors')
const connectDB = require("./config/database");
const Location = require("./models/Location");

const port = 2022;

const app = express();

app.use(cors());
app.use(express.json({strict: false}));
//app.use(express.urlencoded({extended: false}))

//app.get('/', (req, res) => res.send('API Running'));
app.post('/weather', (req, res) => {
    console.log(req.body)
    let { location } = req.body 
    if(location){
        axios.get(`http://api.weatherstack.com/current?access_key=6330e6d02259bd655fecaa09b1c68617&unit=m&query=${location}`)
            .then((data) => {
                res.send(data.data.current).status(200);
                console.log(data.data.current);
            })
            .catch((err) => {
                console.log(err);
                res.send("Server Error: ", err).status(500);
            })

            /* 
            {
                observation_time: '11:16 PM',
                temperature: 12,
                weather_code: 113,
                weather_icons: [
                    'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png'
                ],
                weather_descriptions: [ 'Clear' ],
                wind_speed: 6,
                wind_degree: 360,
                wind_dir: 'N',
                pressure: 1021,
                precip: 0,
                humidity: 62,
                cloudcover: 0,
                feelslike: 12,
                uv_index: 1,
                visibility: 10,
                is_day: 'no'
            } 
        */
    }
})

connectDB();

app.listen(port, () => console.log(`Server has started on ${port}`));

