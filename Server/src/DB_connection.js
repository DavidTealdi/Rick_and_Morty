require('dotenv').config();
// process { env { DB_USER, etc} }
const { Sequelize } = require('sequelize');
const { USER, PASSWORD, HOST } = process.env;
const { users, favorites } = require('./models/index')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${USER}:${PASSWORD}@${HOST}/pepitosmith`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
users(sequelize)
//
favorites(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });
// addUser(id)    addFavorite(id)      addUsers([ids])    addFavorites([ids])

module.exports = {
   ...sequelize.models, // {User Favorite}
   conn: sequelize,
};

