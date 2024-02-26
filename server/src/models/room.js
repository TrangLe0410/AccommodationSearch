'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Room extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Room.init({
        postId: DataTypes.STRING,
        acreage: DataTypes.STRING,
        address: DataTypes.STRING,
        roomPrice: DataTypes.STRING,
        electricPrice: DataTypes.STRING,
        waterPrice: DataTypes.STRING,
        status: DataTypes.STRING,
        depositPrice: DataTypes.STRING,
        description: DataTypes.TEXT,
        kindOfRoom: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Room',
    });
    return Room;
};