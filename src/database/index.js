const Sequelize = require(`sequelize`)
const dbConfig = require(`../config/database`)

const User = require(`../models/User`)
const Address = require(`../models/Address`)

const connection = new Sequelize(dbConfig)

User.init(connection)/**inicializar o Model user conectado ao banco */
Address.init(connection)

User.associate(connection.models)
Address.associate(connection.models)

module.exports = connection