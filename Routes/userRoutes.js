//importing modules
const express = require('express')
const userController = require('../controllers/userController')
const fieldController = require('../controllers/fieldController')
const bookingController = require('../controllers/bookingController')
const paymentController = require('../controllers/paymentController')
const transactionController = require('../controllers/transactionController')
const { signup, login } = userController
const { getFields, postFields } = fieldController
const { postBookings } = bookingController
const { postPayments } = paymentController
const { getTransactionByUserId } = transactionController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)

//login route
router.post('/login', login );

router.get('/fields', getFields);
router.get('/fieldsByUserId/:userId', getFields);
router.post('/fields', postFields);
router.post('/booking', postBookings);
router.post('/payment', postPayments);
router.get('/transactions/:userId', getTransactionByUserId);



module.exports = router