export interface Errors {
  INVALID_ENDPOINT_ERROR: {
    code: 'INVALID_ENDPOINT_ERROR';
    message: string;
  };

  INSUFFICIENT_PERMISSIONS_ERROR: {
    code: 'INSUFFICIENT_PERMISSIONS_ERROR';
    message: string;
  };

  ENDPOINT_REQUIRES_SECOND_FACTOR_ERROR: {
    code: 'ENDPOINT_REQUIRES_SECOND_FACTOR_ERROR';
    message: string;
  };

  INVALID_USER_ERROR: {
    code: 'INVALID_USER_ERROR';
    message: string;
  };

  USER_REQUIRES_SECOND_FACTOR_ERROR: {
    code: 'USER_REQUIRES_SECOND_FACTOR_ERROR';
    message: string;
  };

  INVALID_USERNAME_ERROR: {
    code: 'INVALID_USERNAME_ERROR';
    message: string;
  };

  INVALID_SECOND_FACTOR_ERROR: {
    code: 'INVALID_SECOND_FACTOR_ERROR';
    message: string;
  };

  INVALID_SECOND_FACTOR_METHOD_ERROR: {
    code: 'INVALID_SECOND_FACTOR_METHOD_ERROR';
    message: string;
  };

  INVALID_SECOND_FACTOR_RESPONSE_ERROR: {
    code: 'INVALID_SECOND_FACTOR_RESPONSE_ERROR';
    message: string;
  };

  SECOND_FACTOR_CHALLENGE_REQUIRED_ERROR: {
    code: 'SECOND_FACTOR_CHALLENGE_REQUIRED_ERROR';
    message: string;
    token: string;
    types: ('totp' | 'backup' | 'webauthn')[];
    challenge?: PublicKeyCredentialRequestOptionsJSON;
  };

  INVALID_PASSWORD_ERROR: {
    code: 'INVALID_PASSWORD_ERROR';
    message: string;
  };

  INVALID_EMAIL_ERROR: {
    code: 'INVALID_EMAIL_ERROR';
    message: string;
  };

  EMAIL_NOT_VERIFIED_ERROR: {
    code: 'EMAIL_NOT_VERIFIED_ERROR';
    message: string;
  };

  EMAIL_ALREADY_VERIFIED_ERROR: {
    code: 'EMAIL_ALREADY_VERIFIED_ERROR';
    message: string;
  };

  INVALID_VERIFICATION_TOKEN_ERROR: {
    code: 'INVALID_VERIFICATION_TOKEN_ERROR';
    message: string;
  };

  INVALID_SESSION_ERROR: {
    code: 'INVALID_SESSION_ERROR';
    message: string;
  };

  INVALID_DOMAIN_ERROR: {
    code: 'INVALID_DOMAIN_ERROR';
    message: string;
  };

  SUBDOMAIN_TOO_LONG_ERROR: {
    code: 'SUBDOMAIN_TOO_LONG_ERROR';
    message: string;
  };

  INVALID_FILE_ERROR: {
    code: 'INVALID_FILE_ERROR';
    message: string;
  };

  INVALID_INSTRUCTION_ERROR: {
    code: 'INVALID_INSTRUCTION_ERROR';
    message: string;
  };

  INVALID_LOGLEVEL_ERROR: {
    code: 'INVALID_LOGLEVEL_ERROR';
    message: string;
  };

  SUBDOMAIN_NOT_ALLOWED_ERROR: {
    code: 'SUBDOMAIN_NOT_ALLOWED_ERROR';
    message: string;
  };

  DOMAIN_EXISTS_ERROR: {
    code: 'DOMAIN_EXISTS_ERROR';
    message: string;
  };

  USER_EXISTS_ERROR: {
    code: 'USER_EXISTS_ERROR';
    message: string;
  };

  INSTRUCTION_EXISTS_ERROR: {
    code: 'INSTRUCTION_EXISTS_ERROR';
    message: string;
  };

  MISSING_FIELDS_ERROR: {
    code: 'MISSING_FIELDS_ERROR';
    message: string;
    fields: string[];
  };

  BANNED_ERROR: {
    code: 'BANNED_ERROR';
    message: string;
  };

  BODY_TOO_LARGE_ERROR: {
    code: 'BODY_TOO_LARGE_ERROR';
    message: string;
  };

  SERVICE_UNAVAILABLE_ERROR: {
    code: 'SERVICE_UNAVAILABLE_ERROR';
    message: string;
    feature: number;
  };

  RATELIMITED_ERROR: {
    code: 'RATELIMITED_ERROR';
    message: string;
  };

  INTERNAL_ERROR: {
    code: 'INTERNAL_ERROR';
    message: string;
  };

  NOT_IMPLEMENTED_ERROR: {
    code: 'NOT_IMPLEMENTED_ERROR';
    message: string;
  };
}

export interface Successes {
  DELETE_USER_SUCCESS: {
    code: 'DELETE_USER_SUCCESS';
    message: string;
  };

  DELETE_USERS_SUCCESS: {
    code: 'DELETE_USERS_SUCCESS';
    message: string;
    count: number;
  };

  DELETE_FILE_SUCCESS: {
    code: 'DELETE_FILE_SUCCESS';
    message: string;
  };

  DELETE_FILES_SUCCESS: {
    code: 'DELETE_FILES_SUCCESS';
    message: string;
    count: number;
  };

  DELETE_SESSION_SUCCESS: {
    code: 'DELETE_SESSION_SUCCESS';
    message: string;
  };

  DELETE_SESSIONS_SUCCESS: {
    code: 'DELETE_SESSIONS_SUCCESS';
    message: string;
    count: number;
  };

  DELETE_DOMAIN_SUCCESS: {
    code: 'DELETE_DOMAIN_SUCCESS';
    message: string;
  };

  DELETE_DOMAINS_SUCCESS: {
    code: 'DELETE_DOMAINS_SUCCESS';
    message: string;
    count: number;
  };

  DELETE_INSTRUCTION_SUCCESS: {
    code: 'DELETE_INSTRUCTION_SUCCESS';
    message: string;
  };

  DELETE_INSTRUCTIONS_SUCCESS: {
    code: 'DELETE_INSTRUCTIONS_SUCCESS';
    message: string;
    count: number;
  };

  SEND_VERIFICATION_EMAIL_SUCCESS: {
    code: 'SEND_VERIFICATION_EMAIL_SUCCESS';
    message: string;
  };

  VERIFY_EMAIL_SUCCESS: {
    code: 'VERIFY_EMAIL_SUCCESS';
    message: string;
  };

  DELETE_SECOND_FACTOR_SUCCESS: {
    code: 'DELETE_SECOND_FACTOR_SUCCESS';
    message: string;
  };

  DELETE_SECOND_FACTORS_SUCCESS: {
    code: 'DELETE_SECOND_FACTORS_SUCCESS';
    message: string;
    count: number;
  };
}
