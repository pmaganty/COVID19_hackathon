// Creating our Person model using sequelize

//should add some validation eventually
module.exports = function (sequelize, DataTypes) {
    var Persons = sequelize.define("Persons", {
  
      mac_address: {
        type: DataTypes.STRING, //.INTEGER ??
        allowNull: false
      },
  
      timestap: { 
        type: DataTypes.STRING, //.INTEGER ??
        allowNull: false
      }
    });
  
    return Persons;
  };