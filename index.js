import express, {json} from "express";
import dotenv from "dotenv"


const app = express();
app.use(json())

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});