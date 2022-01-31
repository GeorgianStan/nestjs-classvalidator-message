/**
 * * Dependencies
 */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

/**
 * * Services
 */

@Catch(BadRequestException)
export class ValidationExceptionFilter
  implements ExceptionFilter<BadRequestException>
{
  constructor() {}

  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    let constraints: string[] | string;

    if (typeof exception.getResponse() === 'object') {
      const err: any = exception.getResponse();
      err.message && (constraints = err.message);
    } else {
      constraints = exception.getResponse() as string;
    }

    res.status(HttpStatus.BAD_REQUEST).json(constraints);
  }
}
