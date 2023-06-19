const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre' , {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    });
};