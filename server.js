const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const dotenv = require('dotenv').config();  

const app = express();
const port = process.env.PORT || 5000;




app.use(express.json());
app.use(errorHandler    )
app.use("/api/contacts", require("./routes/contactRoutes"));
// Middleware to parse JSON requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
