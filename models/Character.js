const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
    },
        race: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alignment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        spells: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        equipment: {
            type: DataTypes.STRING,
            allowNull: false,
        }
},
)
