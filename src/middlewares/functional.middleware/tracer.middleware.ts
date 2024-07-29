import { NextFunction, Request, Response } from 'express';

export const tracerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('This is functional middleware');

  next();
};
