
import db from "../db.js";

export async function authPostPoll (req, res, next){
    let {title} = req.body

    if(!title){
        return res.sendStatus(422)
    };
   

    next();
    
}


export async function authPostPollChoice (req, res, next){
    const requicion = req.body

    try{
        const polls = await db.collection("poll").find({}).toArray()
        
        if (!polls){
            return res.sendStatus(404)
        }

    }catch(error){
        console.log(error)
        return res.sendStatus(500)
    }
    next();
}    
