import { Router } from "express";

import { setChoice, setVote } from "../controllers/choiceController.js";
import { authPostChoice } from "../middlewares/choiceMiddleware.js";


const choiceRouter = Router();

choiceRouter.post("/choice" ,setChoice);
choiceRouter.post("/choice/:id/vote", authPostChoice, setVote)

export default choiceRouter;