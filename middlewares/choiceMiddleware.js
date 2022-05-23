import { ObjectId } from "mongodb";
import db from "../db.js";

export async function authPostChoice (req, res, next){
        const { id } = req.params       
        console.log(id)
       try{
           
        const choice = await db.collection("choice").findOne({poolId: id})
       

        if (!choice){
            return res.sendStatus(404)
        }  
        
        const polls = await db.collection("poll").findOne({_id: new ObjectId(id)})
  
        
        // if(polls.expireAt > polls.expireAt.add(30, 'day')){
        //     return res.sendStatus(403)
        // }      
        
        console.log("passei")  
    } catch (error){        
        return res.status(500)
    }
    next();
    
}

