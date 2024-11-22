//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
const sequelize = new Sequelize(`postgres://postgres:Kontol@123@localhost:5433/postgres`, {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to discover`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)
db.roles = require('./rolesModel') (sequelize, DataTypes)
db.role_users = require('./roleUsersModel') (sequelize, DataTypes)
db.fields = require('./fieldModel') (sequelize, DataTypes)
db.bookings = require('./bookingModel') (sequelize, DataTypes)
db.payments = require('./transactionModel') (sequelize, DataTypes)

//exporting the module
module.exports = db