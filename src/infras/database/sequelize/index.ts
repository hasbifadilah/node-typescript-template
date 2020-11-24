/* eslint-disable object-curly-newline */
import { Sequelize } from 'sequelize';
import { initializations, models } from './models';

export default async (config) => {
  const { database, username, password, port, host, dialect } = config || {};
  const sequelize = new Sequelize({
    database,
    username,
    password,
    port,
    host,
    dialect,
    logging: false,
  });
  await sequelize.authenticate();

  initializations.forEach(({ init, applyRelations }) => {
    init(sequelize);
    applyRelations(models);
  });
};
