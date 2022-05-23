
import db from "../db.js";

export async function authPostPoll (req, res, next){
    let {title, expireAt} = req.body

    
    
    if(title == ""){
        res.sendStatus(422)
    }
       
    console.log(expireAt)

    next();
    
}


export async function authPostPollChoice (req, res, next){    
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
