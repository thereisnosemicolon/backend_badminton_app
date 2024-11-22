const db = require('../models');
const { Op } = require('sequelize');
const Payments = db.payments;
const postPayments = async(req,res) => {
    try {
        let { bookings_id, users_id, name_of_customer_bank, 
            number_of_customer_account, name_of_company_bank, 
            number_of_company_account,payment_proof, type_of_payment, total_payment, description  } = req.body;

        console.log(req.body);

        if(
            !bookings_id || !users_id 
            || !name_of_customer_bank || !number_of_customer_account 
            || !name_of_company_bank || !number_of_company_account 
            || !payment_proof || !type_of_payment || !total_payment || !description ){
            return res.status(422).send('Please input all the required fields');
        }

        const payment = await Payments.create({bookings_id: bookings_id, users_id:users_id, name_of_customer_bank:name_of_customer_bank, number_of_customer_account: number_of_customer_account, name_of_company_bank: name_of_company_bank, number_of_company_account: number_of_company_account, payment_proof: payment_proof, type_of_payment:type_of_payment, total_payment:total_payment, description:description, status:0 });

        if(payment){
            return res.status(200).json({payment: payment}, 200);
        } else {
            return res.status(500).send('Failed to create payment');
        }
        
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    postPayments
};