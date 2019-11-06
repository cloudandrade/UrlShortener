const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect to database
connectDB();

app.use(express.json({ extended: false }));

//define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server Runing at port ${PORT}`));
