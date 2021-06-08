const express = require('express');
const app = express();
const cors = require('cors')
const methodOverride = require("method-override");
const userRouter = require("./controllers/userRouter");
const postRouter = require("./controllers/postRouter");

const mongoose = require('mongoose')

const mongoURI = process.env.NODE_ENV ==='production' 
? process.env.DB_URL
:'mongodb://localhost/BetesConnect'

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log('Connection failed!', error));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors())

/* START ROUTE CONTROLLERS */
app.use("/users/", userRouter);
app.use("/posts/", postRouter);
/* END ROUTE CONTROLLERS */


app.get("/", (req, res) => {
    res.send("You're Home");
  });

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).send(message);
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Live on port: ${port}`);
});