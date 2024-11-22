const db = require('../models');
const Payments = db.payments;
const getTransactionByUserId = async(req,res) => {
    try {
        const transaction = await Payments.findAll({
            where: {
                users_id: req.params.userId
            }
        })

        if(transaction){
            return res.status(200).json({transaction: transaction}, 200);
        } else {
            return res.status(500).send('Failed to create payment');
        }
        
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getTransactionByUserId
};