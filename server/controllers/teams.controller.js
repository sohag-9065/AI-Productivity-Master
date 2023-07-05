const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");



module.exports.getAllTeams = async (req, res, next) => {
    try {
        const db = getDb();
        const query = req.query;
  
        let teams;

        if(  query?.id ) {
            teams = await db.collection("teams").findOne({ _id: new ObjectId(query.id) });
        }
        else {
            teams = await db.collection("teams").find(query).toArray();
        }

        // const allTeams = await db.collection("teams").find(query).toArray();

        res.status(200).json({ success: true, data: teams });
    } catch (error) {
        next(error);
    }
};

// module.exports.getATeam = async (req, res, next) => {
//     try {
//         const db = getDb();
//         const { id } = req.params;

//         console.log(id)
 
//         const team = await db.collection("teams").findOne({ _id: new ObjectId(id) });

//         if (!team) {
//             return res.status(400).json({ success: false, error: "Couldn't find a team with this id" });
//         }

//         res.send(team);
 
//     } catch (error) {
//         next(error);
//     }
// };

module.exports.saveATeam = async (req, res, next) => {
    try {
        const team = req.body;
        const db = getDb();

        const result = await db.collection("teams").insertOne(team);
        console.log(result);

        if (!result.insertedId) {
            return res.status(400).send({ status: false, error: "Something went wrong!" });
        }

        res.send({ success: true, message: `User added with id: ${result.insertedId}` });
    } catch (error) {
        next(error);
    }
};