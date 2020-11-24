import initializeSequelize from './sequelize';
import sequelizeConfig from '../config/sequelizeConfig.json';

export default class DB {
  static async initialize(): Promise<void> {
    try {
      const environment: string = process.env.NODE_ENV || 'development';
      const config: any = sequelizeConfig[environment];
      await initializeSequelize(config);
      console.log('Connection to DB has been established successfully.');
    } catch (error) {
      console.log('Unable to connect to the database:', error);
    }
  }
}
