import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('nest js class based logger middleware');

    next();
  }
}

export class OtherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('nest js class based other middleware');

    next();
  }
}
