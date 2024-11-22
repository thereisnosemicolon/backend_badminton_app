const db = require('../models');

const Fields = db.fields;
const getFields = async(req,res) => {
    try {
        const fields = await Fields.findAll();
        console.log(fields);
        return res.status(200).json({fields: fields});
    } catch (error) {
        console.log(error);
    }
}


const postFields = async(req,res) => {
    try {
        console.log(req.body);
        let { name, photo, is_ready, price, description } = req.body;

        if(!name || !photo || !is_ready || !price || !description){
            return res.status(422).send('Please input all the required fields');
        }

        if(is_ready == 'Ready' || is_ready == 'ready'){
            is_ready = true;
        } else {
            is_ready = false;
        }

        const field = await Fields.create({name: name, photo:photo, is_ready: is_ready, photo: photo, price: price, description: description});

        if(field){
            return res.status(200).send(field);
        } else {
            return res.status(500).send('Failed to create field');
        }
        
    } catch (error) {
        console.log(error);
    }
}

const getFieldsByUserId = async(req,res) => {
    const userId = req.params.userId;
    console.log(userId);
    
}

module.exports = {
    getFields,
    postFields,
    getFieldsByUserId
};