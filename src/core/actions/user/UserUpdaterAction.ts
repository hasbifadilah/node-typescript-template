import IUserRepository from '../../repositories/user/IUserRepository';

export default class UserUpdaterAction {
  private repo: IUserRepository;

  constructor(repo: IUserRepository) {
    this.repo = repo;
  }

  async execute(): Promise<void> {
    // await this.repo.findOne();
  }
}
