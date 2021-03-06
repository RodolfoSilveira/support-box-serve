'use strict'
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {})
  Client.associate = function (models) {
    // associations can be defined here
    Client.belongsTo(models.User)
    Client.belongsToMany(models.Task, { through: 'Client_Tasks', foreignKey: 'ClientId' })
  }
  return Client
}
