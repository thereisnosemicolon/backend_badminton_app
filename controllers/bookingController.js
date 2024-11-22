const db = require('../models');
const { Op } = require('sequelize');
const Booking = db.bookings;
const postBookings = async(req,res) => {
    try {
        console.log(req.body);
        let { name, play_date, time_start, time_end, description, fields_id } = req.body;

        if(!name || !play_date || !play_date || !time_start || !time_end || !description){
            return res.status(422).send('Please input all the required fields');
        }


        const conflict = await Booking.findOne({
            where: {
                play_date: play_date, // Match the play_date
                [Op.or]: [
                {
                    time_start: {
                    [Op.between]: [time_start, time_end], // Overlapping start
                    },
                },
                {
                    time_end: {
                    [Op.between]: [time_start, time_end], // Overlapping end
                    },
                },
                {
                    [Op.and]: [
                    { time_start: { [Op.lte]: time_start } }, // Existing booking fully covers the new one
                    { time_end: { [Op.gte]: time_end } },
                    ],
                },
                ],
            },
        });

        if(conflict){
            return res.status(400).json("Already booked");
        }
        const booking = await Booking.create({name: name, fields_id:fields_id, play_date:play_date, time_start: time_start, time_end: time_end, description: description});

        if(booking){
            return res.status(200).json({booking: booking}, 200);
        } else {
            return res.status(500).send('Failed to create booking');
        }
        
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    postBookings
};