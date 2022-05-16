import React, { Fragment, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { getWeather } from '../actions/weather';
import Weather from './Weather';
mapboxgl.accessToken = "pk.eyJ1IjoibXhibXhiIiwiYSI6ImNsMzRmcDVkajBoNTYza3BveHI1MnhrMTkifQ.OOqXLE5s0a4WcHQ-8KjASw"

const Search = ({getWeather, weather: {weather, loading, error}}) => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(35.25);
    const [lat, setLat] = useState(39.19);
    const zoom = 5;
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        }).addControl(
            geocoder
        );
        geocoder.on('result', (res) => {
            setLng(res.result.geometry.coordinates[0]);
            setLat(res.result.geometry.coordinates[1]);
            let location = {
                name: res.result.place_name_en,
                lng: res.result.geometry.coordinates[0],
                lat: res.result.geometry.coordinates[1]
            }
            getWeather(location)
        })
    });

    return (
        <div className="text-center container pt-5">
            <div ref={mapContainer} className="map-container" />
            <br />
            <br />
            <Fragment>
                {!loading && <Weather weather={weather} />}
                {
                    error && 
                        <div className="alert alert-danger">
                            Something went wrong!
                        </div>
                }
            </Fragment>
        </div>
    )
}

const mapStateToProps = state => ({
    weather: state.weather
})

export default connect(mapStateToProps, {getWeather})(Search);