// Creating our wifiHotspot model using sequelize
module.exports = function (sequelize, DataTypes) {
    var wifiHotspot = sequelize.define("wifiHotspot", {
  
    hotspot_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    latitude: {
        type: DataTypes.DECIMAL(8,4),
        allowNull: false
      },
    longititude: {
        type: DataTypes.DECIMAL(8,4),
        allowNull: false
    },

    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },

    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
    );

    wifiHotspot.associate = function(models) {
      models.wifiHotspot.hasMany(models.AccessEvent);
    };
  
    return wifiHotspot;
  };