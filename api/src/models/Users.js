const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users', {
        nickname: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            allownull: false
        },
        name: {
            type: DataTypes.STRING,
            allownull: false        
        },
        lastname: {
            type: DataTypes.STRING,
            allownull: false
        },
        birthday: {
            type: DataTypes.STRING,
            allownull: false
        },
        password: {
            type: DataTypes.STRING(16),
            unique: true,
            allownull: false
        },
        email: {
            type: DataTypes.STRING,
            unique:true,
            allownull: false
        },
    })
};