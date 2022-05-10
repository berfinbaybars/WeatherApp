const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('weatherapp', 'root', '1708', {
    host: 'localhost',
    dialect: 'mysql'
})

const Location = sequelize.define('Location', {
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentWeather: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    }
})

module.exports = Location;