import Sequelize from 'sequelize' 

export const sequelize = new Sequelize('railway', 'postgres', 'HPZzCQwyFczVCRJIOnymQKywYoSePSLV', {
  host: 'gondola.proxy.rlwy.net',
  dialect: 'postgres'
  });

  import { Sequelize } from 'sequelize';

/* export const sequelize = new Sequelize('postgres', 'postgres', 'TU_CONTRASEÑA', {
host: 'db.zbmhvcovyyjeasostxxm.supabase.co',
  dialect: 'postgres',
  port: 5432,
  logging: false,
}); */
