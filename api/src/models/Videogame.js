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
    allowNull: false,
   },
   descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
   },
   plataformas:{
    type: DataTypes.ENUM('PlayStation','Xbox','Nintendo','PC','Mobile','Other'),
    defaultValue: 'Other',
    allowNull: false,
   },
   imagen: {
    type: DataTypes.STRING,
    allowNull: true,
   },
   fecha_de_lanzamiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
   },
   rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
   },
  });
};
