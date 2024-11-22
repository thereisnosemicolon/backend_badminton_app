//user model
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define( "transactions", {
        bookings_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        users_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        name_of_customer_bank: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number_of_customer_account: {
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_payment: {
            type: DataTypes.DECIMAL(15, 0),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {tableName:'tbl_header_transaction', timestamps:false}, )
    return Transaction
 }