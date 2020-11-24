import IQueryParam from './IQueryParam';

export default interface IRepository<Entity> {
  findById: (id: number) => Promise<Entity>;
  findOne: (queryParam: IQueryParam) => Promise<Entity>;
  findAll: (queryParam?: IQueryParam) => Promise<Array<Entity>>;
  create: (entity: Entity) => Promise<void>;
  update: (entity: Entity) => Promise<void>;
  delete: (entity: Entity) => Promise<void>;
}
