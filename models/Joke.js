const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Joke extends Model {}

Joke.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dad_joke: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "joke",
  }
);

module.exports = Joke;
