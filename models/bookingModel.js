//user model
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define( "bookings", {
        bookings_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        fields_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        booking_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        play_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time_start: {
            type: DataTypes.time,
            allowNull: false
        },
        time_end: {
            type: DataTypes.time,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: true}, )
    return Booking
 }