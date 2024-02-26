'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Rooms', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            postId: {
                type: Sequelize.STRING
            },
            acreage: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            roomPrice: {
                type: Sequelize.STRING
            },
            electricPrice: {
                type: Sequelize.STRING
            },
            waterPrice: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            depositPrice: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            kindOfRoom: {
                type: Sequelize.STRING
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Rooms');
    }
};