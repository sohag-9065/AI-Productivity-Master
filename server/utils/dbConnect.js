 


const { MongoClient } = require("mongodb");

const connectionString =   "mongodb+srv://ai_master:ai_master_group@ai-master.fybszxm.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn, dbConnection;

const connectToServer = async () => { 
  try {

    conn = await client.connect();
    
    console.log("DB connect")
  } catch (e) {
    console.error(e);
  }
}


const getDb =   () => {  
    
    dbConnection =  conn.db("ai-master"); 

    return dbConnection;
  
}

 
module.exports  = {connectToServer, getDb };