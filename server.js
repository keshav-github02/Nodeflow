const express = require('express');
const dotenv = require('dotenv').config();  


const app = express();
const port= process.env.PORT || 5000;

const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    }
);