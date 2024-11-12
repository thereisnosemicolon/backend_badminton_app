//user model
module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define( "Roles", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true, // Define the id column as primary key
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {tableName:'roles', timestamps: false})
    return Roles
 }