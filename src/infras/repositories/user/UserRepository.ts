import { Model } from 'sequelize';
import { models } from '../../database/sequelize/models';
import User from '../../../core/entities/User';
import IUserRepository from '../../../core/repositories/user/IUserRepository';
import IUserQueryParam from '../../../core/repositories/user/IUserQueryParam';
import mapObject from '../../../helpers/objectMapper';

const { User: UserModel } = models;

export default class UserRepository implements IUserRepository {
  private convertData(userModel: Model): User {
    const user = new User();
    return mapObject(userModel.get({ plain: true }), user);
  }

  async findById(id: number): Promise<User> {
    const selectedUser = await UserModel.findByPk(id);
    return this.convertData(selectedUser);
  }

  findOne: (queryParam: IUserQueryParam) => Promise<User>;

  findAll: (queryParam?: IUserQueryParam) => Promise<User[]>;

  create: (entity: User) => Promise<void>;

  update: (entity: User) => Promise<void>;

  delete: (entity: User) => Promise<void>;

  getUserWithComplexQueries: () => Promise<void>;

  getUserWithComplexQueriesRefactored: () => Promise<void>;
}
