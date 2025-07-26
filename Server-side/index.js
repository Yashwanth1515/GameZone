const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const AuthRouter = require('./Routes/AuthRouter')
const app = express();
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGOURL);
app.use('/', AuthRouter);
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})