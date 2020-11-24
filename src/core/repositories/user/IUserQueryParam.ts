import IQueryParam from '../IQueryParam';

export default interface IUserQueryParam extends IQueryParam {
  name?: string;
  dateOfBirth?: string;
}
