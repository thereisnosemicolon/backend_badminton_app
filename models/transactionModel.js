//user model
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define( "TBL_HEADER_TRANSACTION", {
        details_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bookings_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name_of_customer_bank: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number_of_customer_bank_account: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name_of_company_bank: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number_of_company_account: {
            type: DataTypes.STRING,
            allowNull: false
        },
        payment_proof: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_of_payment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.integer,
            allowNull: false
        },
        total_payment: {
            type: DataTypes.integer,
            allowNull: false
        },
        description: {
            type: DataTypes.string,
            allowNull: false
        },

    }, {timestamps: true}, )
    return Transaction
 }