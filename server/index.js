const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const usersRoutes = require("./routes/v1/users.route");
const teamsRoutes = require("./routes/v1/teams.route");
const titlesDescriptionsRoutes = require("./routes/v1/TitlesDescriptions.route");
const errorHandler = require("./middleware/errorHandler");
const { connectToServer, getDb } = require("./utils/dbConnect");
const { ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

connectToServer();


app.use("/api/v1/users", usersRoutes);

app.use("/api/v1/teams", teamsRoutes);

app.use("/api/v1/titlesDescriptions", titlesDescriptionsRoutes);
 


app.get('/', (req, res) => {
    res.send(`Hello  from Ai Productivity Master ${process.env.PORT } ` );
})

app.all("*", (req, res) => {
    res.send("NO route found.");
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`AI Master app listening on port ${port}`)
})

process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
  process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
  });
