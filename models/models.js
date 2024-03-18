const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
  id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email:{type: DataTypes.STRING, unique: true},
  name:{type: DataTypes.STRING},
  password:{type: DataTypes.STRING},
  role:{type: DataTypes.STRING, defaultValue: "USER"},
})

const Shablon = sequelize.define("shablon", {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: tru},
  name: {type: DataTypes.STRING},
  code: {type: DataTypes.STRING},
})

module.export = {
  User,
  Shablon
}
