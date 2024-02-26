'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            star: {
                type: Sequelize.STRING,
                defaultValue: '0'
            },
            address: {
                type: Sequelize.STRING
            },
            lableCode: {
                type: Sequelize.STRING
            },
            attributesId: {
                type: Sequelize.STRING
            },
            categoryCode: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            userId: {
                type: Sequelize.STRING
            },
            overviewId: {
                type: Sequelize.STRING
            },
            imagesId: {
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
        await queryInterface.dropTable('Posts');
    }
};