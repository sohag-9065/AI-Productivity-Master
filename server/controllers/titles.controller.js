const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

module.exports.getAllTitles = async (req, res, next) => {
    try {
        const db = getDb(); 

        let titles = await db
            .collection("titles")
            .find({})
            .toArray();

        res.status(200).json({ success: true, data: titles });
    } catch (error) {
        next(error);
    }
};

module.exports.saveATitle = async (req, res, next) => {
    try {
        const title = req.body;
        const db = getDb();

        const result = await db
            .collection("titles")
            .insertOne(title);

        if (!result.insertedId) {
            return res.status(400).send({ status: false, error: "Something went wrong!" });
        }

        res.send({ success: true, message: `Title added with id: ${result.insertedId}` });
    } catch (error) {
        next(error);
    }
};