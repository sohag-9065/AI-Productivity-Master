const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");
 
 

module.exports.getAllUsers = async (req, res, next) => {
  try { 

    // cursor => toArray(), forEach() db.myCollection.find({"_id":2},{"Connected":1, "_id":0})
    const db = getDb();

    const query = req.query; 

    const user = await db
      .collection("users")
      .find( query)
      // .project({ name: 1 ,  _id: 0   }) 
      // .skip(+page * limit)
      // .limit(+limit)
      .toArray();

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsersName = async (req, res, next) => {
  try { 

    // cursor => toArray(), forEach() db.myCollection.find({"_id":2},{"Connected":1, "_id":0})
    const db = getDb();
    const user = await db
      .collection("users")
      .find()
      .project({ name: 1 ,  _id: 0   }) 
      // .skip(+page * limit)
      // .limit(+limit)
      .toArray();

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.saveAUser = async (req, res, next) => {
  try { 
    const user = req.body;
 

    const db = getDb(); 



    const result = await db.collection("users").insertOne(user); 

    if (!result.insertedId) {
      return res.status(400).send({ status: false, error: "Something went wrong!" });
    }

    res.send({ success: true, message: `User added with id: ${result.insertedId}` });
  } catch (error) {
    next(error);
  }
};


module.exports.updateAUser = async (req, res, next) => {
  try { 
    const {email, skills} = req.body; 
    const db = getDb(); 
   
    const result = await db.collection("users").updateOne({ email:  email }, { $set: {skills} }, { upsert: true });
    console.log(result);

    if (!result.modifiedCount) {
      return res.status(400).send({ status: false, error: "Something went wrong!" });
    }

    res.send({ success: true, message: `User Update with email: ${email}` });
  } catch (error) {
    next(error);
  }
};