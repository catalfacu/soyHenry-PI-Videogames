const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
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
   descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
   },
   plataformas:{
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
   },
   imagen: {
    type: DataTypes.STRING,
    allowNull: true,
   },
   fecha_de_lanzamiento: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
   },
  });
};
