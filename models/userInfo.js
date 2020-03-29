// Creating our userInfo model using sequelize
module.exports = function (sequelize, DataTypes) {
    var UserInfo = sequelize.define("UserInfo", {
  
    // The email cannot be null, and must be a proper email before creation
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      // The password cannot be null
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    //health care professional, researcher, regular person
    identification: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    //normal, mild symptoms, tested positive
    current_health: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    have_fever_chills_shakes: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    have_cough: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },

    have_any_covid_symptoms: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },

    have_travelled_outside_country: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },

    have_contact_with_symptoms: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
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
  
    return UserInfo;
  };