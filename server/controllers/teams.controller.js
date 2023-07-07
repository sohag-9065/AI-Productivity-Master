const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");



module.exports.getAllTeams = async (req, res, next) => {
    try {
        const db = getDb();
        const query = req.query;

        let teams = await db.collection("teams").find(query).toArray();

        // const allTeams = await db.collection("teams").find(query).toArray();

        res.status(200).json({ success: true, data: teams });
    } catch (error) {
        next(error);
    }
};

module.exports.getAllInvitedTeams = async (req, res, next) => {
    try {
        const db = getDb();
        const { user } = req.query;

        let teams = await db.collection("teams")
            .find({ "userInfo.user": user, 'teamleader': { $ne: user } })
            .toArray();

        res.status(200).json({ success: true, data: teams });
    } catch (error) {
        next(error);
    }
};


module.exports.getTeamDetail = async (req, res, next) => {
    try {
        const db = getDb();
        const { id } = req.params;

        let teams = await db.collection("teams").findOne({ _id: new ObjectId(id) });

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

        if (!result.insertedId) {
            return res.status(400).send({ status: false, error: "Something went wrong!" });
        }

        res.send({ success: true, message: `User added with id: ${result.insertedId}` });
    } catch (error) {
        next(error);
    }
};


module.exports.updateATeam = async (req, res, next) => {
    try {
        const team = req.body;
        const db = getDb();

        const { id } = req.params;
        const result = await db.collection("teams").updateOne({ _id: new ObjectId(id) }, { $set: team }, { upsert: true });

        if (!result.modifiedCount) {
            return res.status(400).send({ status: false, error: "Something went wrong!" });
        }

        res.send({ success: true, message: `Team update with id: ${id}` });
    } catch (error) {
        next(error);
    }
};

module.exports.updateTeamProgress = async (req, res, next) => {
    try {

        const { taskTitle, progress } = req.body;
        const db = getDb();

        const { id } = req.params;

        console.log(taskTitle)
        console.log(progress)
        console.log(id)
        // const result = await db.collection("teams").updateOne({ _id: new ObjectId(id),  "taskInfo.progress": "20" }, { $set: {"taskInfo.progress.": "50"}}, { upsert: true });
        const result = await db.collection("teams").updateOne(
            {
                $and: [
                    {
                        _id: new ObjectId(id)
                    },
                    {
                        "taskInfo.taskTitle": taskTitle
                    }
                ]
            },
            {
                $set: { "taskInfo.$.progress": progress }
            },
            {
                upsert: true
            }
        );



        if (!result.modifiedCount) {
            return res.status(400).send({ status: false, error: "Something went wrong!" });
        }

        res.send({ success: true, message: `Team update with id: ${id}` });
    } catch (error) {
        next(error);
    }
};