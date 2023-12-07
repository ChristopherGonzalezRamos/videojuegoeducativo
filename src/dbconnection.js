const fs = require('fs');
const knex = require('knex');

const connectMysql = async function(){
    const dbPassword = await fs.promises.readFile('/run/secrets/db_password');
    const db = knex({
        client: 'mysql2',
        connection: {
            host: 'mysql',  // Nombre del servicio en el docker-compose.yml
            user: 'user_videojuego',
            password: dbPassword,
            database: 'videojuego'
        }
    });
    return db;
}
module.exports = {connectMysql};