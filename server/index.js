const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use( cors() );
app.use( express.json() );

app.get('/', (req, res) => {
    res.send("Hello  from Ai Productivity Master"); 
})

app.listen(port, () => {
    console.log(`AI Productivity Master app listening on port ${port}`);
})