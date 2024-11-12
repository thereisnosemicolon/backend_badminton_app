//importing modules
const express = require('express')
const userController = require('../controllers/userController')
const fieldController = require('../controllers/fieldController')
const { signup, login } = userController
const { getFields } = fieldController
const userAuth = require('../middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)

//login route
router.post('/login', login );

router.get('/fields', getFields);

module.exports = router