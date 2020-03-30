// Creating our AccessEvent model using sequelize
module.exports = function (sequelize, DataTypes) {
    var AccessEvent = sequelize.define("AccessEvent", {

    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hotspot_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    //true if happening still false if done
    event_type: {
        type: DataTypes.BOOLEAN,
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
    });

    //access event can only exist if customer id also exists in user info table
    AccessEvent.associate = function (models) {
        models.AccessEvent.belongsTo(models.UserInfo, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      };
 
    //access event can only exist if hotspot id also exists in wifi table
    AccessEvent.associate = function (models) {
    models.AccessEvent.belongsTo(models.wifiHotspot, {
        onDelete: "CASCADE",
        foreignKey: {
        allowNull: false
        }
    });
    };


    return AccessEvent;
  };