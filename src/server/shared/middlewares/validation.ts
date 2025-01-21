import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface Tvalidation {
  (field: 'body' | 'header' | 'params' | 'query', scheme:yup.Schema): RequestHandler
}
export const validation: Tvalidation = (field, scheme) => async (req, res, next) => {
  try {
    await scheme.validate(req[field], { abortEarly: false });
    return next();
  }
  catch (error) {
    const YupError = error as yup.ValidationError;
    const Errors: Record<string, string> = {};

    YupError.inner.forEach(err => {
      if (!err.path) return;
      Errors[err.path] = err.message;
    });

    res.status(StatusCodes.BAD_REQUEST).json({ Errors });
    return;
  }
};
