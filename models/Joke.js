const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Joke extends Model {}

Joke.init(
  {
    id: {
     // use the special Squelize DataTypes object provide what type of data it is
     type: DataTypes.INTEGER,
     // this is the equivalent of SQL's 'NOT NULL' option
     allowNull: false,
     // instruct that this is the Primary Key
     primaryKey: true,
     // turn on auto increment
     autoIncrement: true,
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
