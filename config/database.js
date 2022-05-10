const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('weatherapp', 'root', '1708', {
    host: 'localhost',
    dialect: 'mysql'
})

const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.");
    }
    catch(err) {
        console.log("There has been an error during database connection: \n", err);
    }
}

module.exports = connectDB