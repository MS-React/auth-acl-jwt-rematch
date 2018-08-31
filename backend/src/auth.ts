import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

import constants from './config/constants';
import { ApiError } from './config/ErrorHandler';

export type res = { status: number; message: string };

export async function expressAuthentication(request: Request, securityName: string, scopes?: string[]): Promise<res> {
  switch (securityName) {
    case 'jwt':
      // @TODO: Usar en ves del authorization el x-access-token, va a ser más prolijo
      const token = request.headers.authorization.replace('Bearer ', '');
      const response = new Promise<res>((resolve, reject) => {
        if (!token) reject(new Error('No token provided'));
        jwt.verify(token, constants.JWT.secretKey, function (err: any, decoded: any) {
            if (err) reject(err);
            if (scopes.indexOf(decoded.rol) > -1) resolve(decoded);
            reject(new Error('JWT does not contain required scope.'));
        });
      });
      return response;
    default:
      throw new ApiError(constants.errorTypes.auth);
  }
}
