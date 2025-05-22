const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Databse connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

};

module.exports = connectDB;
