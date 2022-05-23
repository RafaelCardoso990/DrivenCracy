import { ObjectId } from "mongodb";
import db from "../db.js";
import dayjs from "dayjs";

export async function setChoice(req, res) {
    const {title, poolId}  = req.body
    

    try {
        await db.collection("choice").insertOne({title, poolId})
        res.status(201).send("Opção cadastrada com sucesso")
    } catch (e) {
        console.log(e)
        return res.sendStatus(500)
    }
}

export async function setVote(req,res) {
    try {                   
        const momentVote = dayjs().format("YYYY-MM-DD HH:mm").toString()
        const vote = 1
        await db.collection("vote").insertOne({vote, momentVote})
        console.log("cheguei")        
        
        res.sendStatus(201)
       
    } catch (error) {
        return res.sendStatus(422)
    }      
}