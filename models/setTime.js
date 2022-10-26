const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class SetTime extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    SetTime.init({
    set_time_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      genre: {
          type: DataTypes.TEXT,
          allowNull: false
      },
      available_start_time: {
          type: DataTypes.DATE,
          allowNull: false
      },
      end_time: {
          type: DataTypes.DATE,
          allowNull: false
      }
    }, {
      sequelize,
      modelName: 'SetTime',
      tableName: 'set_time',
      timestamps: false
    })
  
    return SetTime;
  };