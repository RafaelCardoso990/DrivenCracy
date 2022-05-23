import { Router } from "express";


import { getPolls, setPoll, getPollChoices, GetResult } from "../controllers/pollController.js";

import {authPostPoll, authPostPollChoice} from "../middlewares/pollMiddlewares.js";

const pollRouter = Router();

pollRouter.post("/poll", authPostPoll ,setPoll);
pollRouter.get("/poll", getPolls)
pollRouter.get("/poll/:id/choice",authPostPollChoice, getPollChoices )
pollRouter.get("/poll/:id/result", GetResult)

export default pollRouter;