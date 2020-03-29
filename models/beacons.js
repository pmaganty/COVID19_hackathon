// Creating our Beacon model using sequelize
module.exports = function (sequelize, DataTypes) {
    var Beacons = sequelize.define("Beacons", {
  
    beacon_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    latitude: {
        type: DataTypes.DECIMAL(8,4),
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
    longititude: {
        type: DataTypes.DECIMAL(8,4),
        allowNull: false
    }
    });
  
    return Beacons;
  };