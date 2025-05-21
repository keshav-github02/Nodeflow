const express = require('express');
const dotenv = require('dotenv').config();  

const app = express();
const port = process.env.PORT || 5000;


app.use("/api/contacts", require("./routes/contactRoutes"));
// Middleware to parse JSON requests
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
