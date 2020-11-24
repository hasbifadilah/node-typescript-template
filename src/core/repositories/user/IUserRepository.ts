/* eslint-disable @typescript-eslint/no-empty-interface */
import IRepository from '../IRepository';
import User from '../../entities/User';

export default interface IUserRepository extends IRepository<User> {
  getUserWithComplexQueries: () => Promise<void>;
  getUserWithComplexQueriesRefactored: () => Promise<void>;
}
