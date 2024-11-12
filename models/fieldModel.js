//user model
module.exports = (sequelize, DataTypes) => {
    const Field = sequelize.define("fields", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true, // Define the id column as primary key
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_ready: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(15, 0),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {tableName: 'fields', timestamps:false}, )
    return Field
 }