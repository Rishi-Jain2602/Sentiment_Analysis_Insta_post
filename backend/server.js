const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors'); 
require('dotenv').config();

// app.use(cors({
//     origin: 'https://sentiment-analysis-insta-post-frontend.vercel.app'
//   }));

  
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization, X-Requested-With,Origin,Accept');

    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }
    next();
});

app.use(express.json()); 
app.use('/db',require('./Routes/fetch'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});