import app from './app.js';
import { sequelize } from './database/database.js';


async function main() {
    try{
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
    app.listen(5432);
    console.log('Server on port', 5432);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();