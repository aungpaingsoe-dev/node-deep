import { errorResponseType } from "./response";

const errorTypes = {
  notFound: "Not found",
  validationError: "Validation error",
  unauthorized: "Unauthorized",
  forbidden: "Forbidden",
  internalServerError: "Internal server error",
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
  code: 500,
};

const unauthorized: errorResponseType = {
  status: false,
  message: "Unauthorized",
  type: errorTypes.unauthorized,
  details: [],
  code: 401,
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
  code: 401,
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
  code: 401,
};

export default {
  errorTypes,
  statusCodes,
  internalServerError,
  emailNotFound,
  unauthorized,
  incorrectPassword,
};
