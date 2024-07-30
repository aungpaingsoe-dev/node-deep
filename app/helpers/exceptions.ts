import { errorResponseType } from "./response";

const errorTypes = {
  notFound: "not_found",
  validationError: "validation_error",
  unauthorized: "unauthorized",
  forbidden: "forbidden",
  internalServerError: "internal_server_error",
  badRequest: "bad_request",
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
  code: statusCodes.INTERNAL_SERVER_ERROR,
};

const unauthorized: errorResponseType = {
  status: false,
  message: "Unauthorized",
  type: errorTypes.unauthorized,
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

const duplicateEmail: errorResponseType = {
  status: false,
  message: "Duplicate error",
  type: errorTypes.validationError,
  details: [
    {
      field: "email",
      issue: "Email is alrady exist",
    },
  ],
  code: statusCodes.BAD_REQUEST,
};

const duplicateName: errorResponseType = {
  status: false,
  message: "Duplicate error",
  type: errorTypes.validationError,
  details: [
    {
      field: "name",
      issue: "Name is alrady exist",
    },
  ],
  code: statusCodes.BAD_REQUEST,
};

const incorrectPassword: errorResponseType = {
  status: false,
  message: "Invalid credential",
  type: errorTypes.unauthorized,
  details: [
    {
      field: "password",
      issue: "Password does not match",
    },
  ],
  code: statusCodes.UNAUTHORIZED,
};

const pageNotFound: errorResponseType = {
  status: false,
  message: "Route not found",
  type: errorTypes.notFound,
  code: statusCodes.NOT_FOUND,
};

const dataNotFound: errorResponseType = {
  status: false,
  message: "Data not found",
  type: errorTypes.notFound,
  code: statusCodes.NOT_FOUND,
};

export default {
  errorTypes,
  statusCodes,
  internalServerError,
  emailNotFound,
  unauthorized,
  incorrectPassword,
  pageNotFound,
  dataNotFound,
  duplicateEmail,
  duplicateName,
};
