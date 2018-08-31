import {
  Route,
  Controller,
  Post,
  Body,
  Tags
} from 'tsoa';
import { sign } from 'jsonwebtoken';

import { ProvideSingleton, inject } from '../ioc';
import { UserService } from '../services';
import { IUserModel, UserFormatter, ILogin, IForgotPassword, ISendMail } from '../models';
import { ApiError } from '../config/ErrorHandler';
import { sendMail } from '../utils/generalUtils';
import constants from '../config/constants';

@Tags('auth')
@Route('auth')
@ProvideSingleton(AuthController)
export class AuthController extends Controller {
  constructor(@inject(UserService) private service: UserService) {
    super();
  }

  @Post('login')
  public async login(@Body() body: ILogin): Promise<any> {
    const user = await this.service.login(body);

    if (user instanceof UserFormatter) {
      var payload = { user: { id: user.id, rol: user.rol } };
      var jwtSignature = sign(payload, constants.JWT.secretKey, { expiresIn: 3600 });
      return {
        jwtSignature
      };
    }
    
    throw new ApiError(constants.errorTypes.auth);
  }

  @Post('signup')
  public async create(@Body() body: IUserModel): Promise<IUserModel> {
    return this.service.create(body);
  }
  
  @Post('recover')
  public async recoverPassword(@Body() body: IForgotPassword): Promise<any> {
    const user = await this.service.getByEmail(body.email);

    const mail: ISendMail = {
      to: body.email,
      subject: 'prueba',
      body: 'some text'
    };

    try {
      const response = await sendMail(mail);
    } catch (e) {
      console.log('error', e);
    }
  }
}
