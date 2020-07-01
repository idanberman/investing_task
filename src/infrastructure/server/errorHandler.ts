// // handle not found errors
// export const notFound = (req, res, next) => {
//   res.status(httpStatus.NOT_FOUND);
//   res.json({
//     success: false,
//     message: 'Requested Resource Not Found'
//   });
//   res.end();
// };

import { ErrorType } from "../../domain/errors/ErrorType";

// handle internal server errors

const ErrorToStatusCode: Map<ErrorType, number> = new Map();
ErrorToStatusCode.set(ErrorType.InternalError, 500);
ErrorToStatusCode.set(ErrorType.NotFound, 404);
ErrorToStatusCode.set(ErrorType.InvalidInput, 422);

export const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = ErrorToStatusCode.has(err.errorType)
    ? ErrorToStatusCode.get(err.errorType)
    : 500;

  res.status(statusCode);
  res.json({
    message: statusCode === 500 ? "Internal Server Error" : err.message,
  });
  res.end();

  if (statusCode === 500) {
    console.log("Internal Error: " + err.message);
  }
};
