import User from '../../entities/User';
import IUserRepository from '../../repositories/user/IUserRepository';

export default class UserFinderAction {
  private repo: IUserRepository;

  constructor(repo: IUserRepository) {
    this.repo = repo;
  }

  async getById(id: number): Promise<User> {
    return await this.repo.findById(id);
  }
}
