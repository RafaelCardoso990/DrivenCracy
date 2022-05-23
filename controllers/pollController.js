import db from "../db.js";
import dayjs from "dayjs";
import { ObjectId } from "mongodb";

export async function setPoll(req, res){
    let {title, expireAt} = req.body    
    const now = dayjs().add(30, "day").format("YYYY-MM-DD HH:mm").toString()

    if(!expireAt){
        expireAt = now
        
    }
   
    try{
        await db.collection("poll").insertOne({title, expireAt})
        res.status(201).send("Enquete cadastrada com sucesso.")
    } catch(error){      
        return res.sendStatus(500)
    }
}

export async function getPolls(req,res){
    try{
        const polls = await db.collection("poll").find({}).toArray()
        res.status(200).send(polls)
    } catch (error){
        console.log(error)
        return res.sendStatus(500)
    }
}

export async function getPollChoices(req,res){
    const { id } = req.params
    try{
        const poll = await db.collection("poll").find({_id: new ObjectId(id)}).toArray()
        if(!poll){
            return res.sendStatus(403)
        }    
        const choice = await db.collection("choice").find(poll.pollId).toArray()
        console.log(choice)
        return res.status(200).send(choice)
    } catch(error){
        console.log(error)
        return res.sendStatus(500)
    }
}


export async function GetResult(req,res){
    const {id} = req.params
    try{
        const poll = await db.collection("poll").findOne({_id: new ObjectId(id)})
        if(!poll){
            return res.sendStatus(403)
        }    
        const vote = await db.collection("poll").find({result: poll.vote}).toArray()
        console.log(vote)
        if(!vote){
            return res.sendStatus(403)
        }

        const voteplus = vote.forEach(element => {
            let vote = element
            if(element > vote){
                vote = element
            }
        });

        const resultPlus = await db.collection("choice").findOne(voteplus)
    
        res.status(200).send(resultPlus)

    } catch (erro){
        console.log(erro)
        return res.sendStatus(500)
    }
}