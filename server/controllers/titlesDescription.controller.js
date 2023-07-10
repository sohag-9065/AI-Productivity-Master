const { ObjectId, MaxKey } = require("mongodb");
const { getDb } = require("../utils/dbConnect");
const { distance, closest } = require('fastest-levenshtein')

module.exports.getAllTitlesDescriptions = async (req, res, next) => {
    try {
        const db = getDb();

        const { title } = req.query;
 
        const titles = await db.collection("titlesDescriptions").find({}).toArray();
 
        const firstTitleDb = titles[0]?.taskTitle;

        let minDifference = distance(firstTitleDb, title);
  
        let result = titles[0]; 

        titles.forEach(element => {

            const dbTitle = element?.taskTitle;

            const diff = distance(title, dbTitle)
 
 
            if (minDifference > diff) {
                result = element;  
                minDifference = diff;
            }
        }); 

        res.status(200).json({ success: true, data: result });

    } catch (error) {
        next(error);
    }
};

module.exports.saveATitleDescription = async (req, res, next) => {
    try {
        const newTitlesDescriptions = req.body;
        const db = getDb();


        const result = await db
            .collection("titlesDescriptions")
            .insertOne(newTitlesDescriptions);

        if (!result.insertedId) {
            return res.status(400).send({ status: false, error: "Something went wrong!" });
        }

        res.send({ success: true, message: `Title added with id: ${result.insertedId}` });

    } catch (error) {
        next(error);
    }
};