import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres', 'postgres', 'Contras1234+', {
  host: 'zbmhvcovyyjeasostxxm.supabase.co', 
  
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  logging: false
});