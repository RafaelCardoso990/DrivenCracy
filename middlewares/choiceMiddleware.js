import db from "../db.js";

export async function authPostChoice (req, res, next){
    const request = req.body

    try{
        const polls = await db.collection("poll").find({}).toArray()
        
        if (!polls){
            return res.sendStatus(404)
        }

        if (title == ""){
            return res.sendStatus(422)
        }

        const exist = await db.collection("choice").findOne(request.title)

        if(exist){
            return res.sendStatus(409)
        }

        const expireAt = await db.collection("poll").findOne(request.expireAt)

        if(expireAt > dayjs().add(30, "day").format("YYYY-MM-DD HH:mm")){
            return res.sendStatus(403)
        }

    } catch (error){
        console.log(error)
        return res.sendStatus(500)
    }
    next();
    
}

