const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute')
const scheduleRoute = require("./routes/scheduleRoute");
const eventRoute = require("./routes/eventRoute");

const PORT = process.env.PORT || 3001;
connectDB();

// middleware;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/user', userRoute);
app.use("/api/v1/schedule", scheduleRoute);
app.use("/api/v1/event", eventRoute)


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})