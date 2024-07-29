import { errorResponseType } from "./response";

const errorTypes = {
  notFound: "not_found",
  validationError: "validation_error",
  unauthorized: "unauthorized",
  forbidden: "forbidden",
  internalServerError: "internal_server_error",
};

const statusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

const internalServerError: errorResponseType = {
  status: false,
  message: "Internal server error",
  type: errorTypes.internalServerError,
  details: [],
  code: statusCodes.INTERNAL_SERVER_ERROR,
};

const unauthorized: errorResponseType = {
  status: false,
  message: "Unauthorized",
  type: errorTypes.unauthorized,
  details: [],
  code: statusCodes.UNAUTHORIZED,
};

const emailNotFound: errorResponseType = {
  status: false,
  message: "Unauthorized",
  type: errorTypes.unauthorized,
  details: [
    {
      field: "email",
      issue: "Email is not exist",
    },
  ],
  code: statusCodes.UNAUTHORIZED,
};

const incorrectPassword: errorResponseType = {
  status: false,
  message: "Password does not match",
  type: errorTypes.unauthorized,
  details: [
    {
      field: "password",
      issue: "Email is not exist",
    },
  ],
  code: statusCodes.UNAUTHORIZED,
};

const pageNotFound: errorResponseType = {
  status: false,
  message: "Route not found",
  type: errorTypes.notFound,
  details: [],
  code: statusCodes.NOT_FOUND,
}

export default {
  errorTypes,
  statusCodes,
  internalServerError,
  emailNotFound,
  unauthorized,
  incorrectPassword,
  pageNotFound
};
