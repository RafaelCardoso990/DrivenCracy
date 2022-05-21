import express, {json} from "express";
import dotenv from "dotenv"
import cors from "cors"

import pollRouter from "./routers/pollRouter.js";
import choiceRouter from "./routers/choiceRouter.js";

dotenv.config();

const app = express();
app.use(json())
app.use(cors())

app.use(pollRouter)
app.use(choiceRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});