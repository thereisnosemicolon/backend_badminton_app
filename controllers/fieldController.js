const db = require('../models');

const Fields = db.fields;
const getFields = async(req,res) => {
    try {
        const fields = await Fields.findAll();
        return res.status(200).send(fields);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFields
};