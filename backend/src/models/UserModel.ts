import { BaseFormatter } from './BaseFormatter';

export interface IUserModel {
  _id?: string;
  id?: string;
  email: string;
  name: string;
  password: string;
  phone?: string;
  skypeId?: string;
  rol?: string;
}

export class UserFormatter extends BaseFormatter implements IUserModel {
  public email: string = undefined;
  public name: string = undefined;
  public password: string = undefined;
  public phone: string = undefined;
  public skypeId: string = undefined; 
  public rol: string = undefined; 

  constructor(args: any) {
    super();
    this.format(args);
  }
}
