const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class StageEvent extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    StageEvent.init({
      stage_event_id: {
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
      modelName: 'StageEvent',
      tableName: 'stage_event',
      timestamps: false
    })
  
    return StageEvent;
  };