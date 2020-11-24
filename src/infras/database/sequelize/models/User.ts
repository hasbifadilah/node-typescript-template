import { Model, DataTypes, Sequelize } from 'sequelize';

export class User extends Model {
  id: number;
  name: string;
  dateOfBirth: Date;
}

const init = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      dateOfBirth: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: 'users',
    },
  );
};

const applyRelations = (models) => {
  // const { OtherModels } = models || {};
  // apply relations
};

export const initializations = {
  init,
  applyRelations,
};
