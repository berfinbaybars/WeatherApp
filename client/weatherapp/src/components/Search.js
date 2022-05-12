import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'
import { getWeather } from '../actions/weather';

const Search = ({getWeather, weather: {weather, loading}}) => {
    const [location, setLocation] = useState("");
    
    return (
        <div className="text-center container pt-5">
            <div class="row justify-content-center">
                <label for="location" class="col-2 col-form-label">Location</label>
                <div class="col-4">
                <input type="text" class="form-control" id="location" onChange={(e) => setLocation(e.target.value)} />
                </div>
                <button type="button" class="col-1 btn btn-secondary" onClick={() => getWeather(location)}>Search</button>
            </div>
            <Fragment>
                {/* add new component for weather */}
            </Fragment>
        </div>
    )
}

const mapStateToProps = state => ({
    weather: state.weather
})

export default connect(mapStateToProps, {getWeather})(Search);