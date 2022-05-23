import express, {json} from "express";
import dotenv from "dotenv"
import cors from "cors"

import pollRouter from "./routers/pollRouter.js";
import choiceRouter from "./routers/choiceRouter.js";

dotenv.config();

const app = express();
app.use(json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'https://driven-cracy.herokuapp.com/');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(cors())

app.use(pollRouter)
app.use(choiceRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});