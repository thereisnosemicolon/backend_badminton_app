//user model
module.exports = (sequelize, DataTypes) => {
    const RoleUsers = sequelize.define("RoleUsers", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true, // Define the id column as primary key
            autoIncrement: true,
        },
        roles_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        users_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }, {tableName:'role_users', timestamps: false})
    return RoleUsers
 }