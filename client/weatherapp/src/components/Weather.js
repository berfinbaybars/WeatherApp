import React, { Fragment } from 'react';

const Weather = ({weather}) => {
    return (
        <Fragment>
            <div className="container w-75">
                <div className="row">
                    <div className="col">
                        <div className="card w-50 mx-auto bg-secondary text-white">
                            <img src={weather.weather_icons[0]} className="card-img-top" alt={weather.weather_descriptions} /> 
                            <div className="card-header">{weather.weather_descriptions}</div>
                        </div>
                    </div>
                    <div className="col mx-auto">
                        <div className="row"> 
                            <div className="col"> 
                                <div className="card bg-danger text-white">
                                    <div className="card-header">Temperature</div>
                                    <div className="card-body ">
                                        <p className="card-text">{weather.temperature} °C</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-danger text-white">
                                    <div className="card-header ">Feels Like</div>
                                    <div className="card-body">
                                        <p className="card-text">{weather.feelslike} °C</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row"> 
                            <div className="col">
                                <div className="card bg-info text-white">
                                    <div className="card-header">Humidity</div>
                                    <div className="card-body">
                                        <p className="card-text">{weather.humidity} %</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-primary text-white">
                                    <div className="card-header">Precipitation</div>
                                    <div className="card-body">
                                        <p className="card-text">{weather.precip} mm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Weather;