// Creating our Person model using sequelize
module.exports = function (sequelize, DataTypes) {
    var Persons = sequelize.define("Persons", {
  
    beacon_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
    },
    infected: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    }
      
    });
  
    return Persons;
  };