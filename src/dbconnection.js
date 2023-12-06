const knex = require('knex');
const db = knex({
    client: 'mysql2',
    connection: {
        host: 'mysql',  // Nombre del servicio en el docker-compose.yml
        user: 'user_videojuego',
        password: '54321',
        database: 'videojuego'
    }
});
module.exports = db;