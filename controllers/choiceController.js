import { ObjectId } from "mongodb";
import db from "../db.js";

import expireAt from "../controllers/choiceControllers.js"

export async function setChoice(req, res) {
    const { title, poolId } = req.body

    try {
        await db.collection("choice").insertOne(title, poolId)
        res.status(201).send("Opção cadastrada com sucesso")
    } catch (e) {
        console.log(e)
        return res.sendStatus(500)
    }
}

export async function setVote(req, res) {
    const { id } = req.params
    try {
        const choice = await db.collection("choice").findOne({ id: new ObjectId(id) })

        if (!choice) {
            return res.sendStatus(404)
        } else {
            const poll = await db.collection("poll").findOne({ id: new ObjectId(choice.poolId) })

            if (poll.expireAt) {
                const validation = dayjs().isBefore(poll.expireAt)
                if (validation) {
                    return res.sendStatus(200).send("Enquete não expirada.")
                } else {
                    res.sendStatus(403).send("Enquete expirada.")
                }
            }     
        }
        const vote = dayjs().format("YYYY-MM-DD HH:mm").toString()
        await db.collection("vote").insertOne({vote: vote, choiceId: id })
        return res.sendStatus(201).send("Voto cadastrado.")
    } catch (error) {
        return res.sendStatus(422).send("Voto não cadastrado.")
    }      
}