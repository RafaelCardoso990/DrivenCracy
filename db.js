import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
import chalk from "chalk";

let db = null;

const mongoClient = new MongoClient(process.env.MONGO_URI);

try{
    await mongoClient.connect();
    db = mongoClient.db(process.env.BANC);
    console.log(chalk.bold.yellow("Conexão com o banco de dados Mongo DB estabelecida!"));
    
} catch (error){
    console.log(chalk.bold.yellow("Erro ao conectar ao banco de dados"), error)
}

export default db;