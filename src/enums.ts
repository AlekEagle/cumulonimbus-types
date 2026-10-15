export enum KillSwitches {
  // Account related killSwitches
  ACCOUNT_CREATE,
  ACCOUNT_MODIFY,
  ACCOUNT_DELETE,
  ACCOUNT_EMAIL_VERIFY,
  ACCOUNT_LOGIN,
  // File related killSwitches
  FILE_CREATE,
  FILE_MODIFY,
  FILE_DELETE,
  // The Global KillSwitch
  GLOBAL,
}

export enum PermissionFlags {
  ALL = 1 << 0,
  UPLOAD_FILE = 1 << 1,
  ACCOUNT_READ = 1 << 2,
  ACCOUNT_MODIFY = 1 << 3,
  SECOND_FACTOR_READ = 1 << 4,
  SESSION_READ = 1 << 5,
  SESSION_MODIFY = 1 << 6,
  FILE_READ = 1 << 7,
  FILE_MODIFY = 1 << 8,
  STAFF_READ_ACCOUNTS = 1 << 9,
  STAFF_MODIFY_ACCOUNTS = 1 << 10,
  STAFF_READ_SECOND_FACTORS = 1 << 11,
  STAFF_MODIFY_SECOND_FACTORS = 1 << 12,
  STAFF_READ_SESSIONS = 1 << 13,
  STAFF_MODIFY_SESSIONS = 1 << 14,
  STAFF_READ_FILES = 1 << 15,
  STAFF_MODIFY_FILES = 1 << 16,
  STAFF_MODIFY_DOMAINS = 1 << 17,
  STAFF_MODIFY_INSTRUCTIONS = 1 << 18,
  STAFF_MODIFY_KILLSWITCHES = 1 << 19,
  STAFF_MODIFY_LOGLEVEL = 1 << 20,
}

export enum PermissionGroups {
  ACCOUNT = PermissionFlags.ACCOUNT_READ | PermissionFlags.ACCOUNT_MODIFY,
  SESSION = PermissionFlags.SESSION_READ | PermissionFlags.SESSION_MODIFY,
  FILE = PermissionFlags.FILE_READ | PermissionFlags.FILE_MODIFY,
  STAFF = PermissionFlags.STAFF_READ_ACCOUNTS |
    PermissionFlags.STAFF_MODIFY_ACCOUNTS |
    PermissionFlags.STAFF_READ_SECOND_FACTORS |
    PermissionFlags.STAFF_MODIFY_SECOND_FACTORS |
    PermissionFlags.STAFF_READ_SESSIONS |
    PermissionFlags.STAFF_MODIFY_SESSIONS |
    PermissionFlags.STAFF_READ_FILES |
    PermissionFlags.STAFF_MODIFY_FILES |
    PermissionFlags.STAFF_MODIFY_DOMAINS |
    PermissionFlags.STAFF_MODIFY_INSTRUCTIONS |
    PermissionFlags.STAFF_MODIFY_KILLSWITCHES |
    PermissionFlags.STAFF_MODIFY_LOGLEVEL,
  STAFF_ACCOUNTS = PermissionFlags.STAFF_READ_ACCOUNTS |
    PermissionFlags.STAFF_MODIFY_ACCOUNTS,
  STAFF_SECOND_FACTORS = PermissionFlags.STAFF_READ_SECOND_FACTORS |
    PermissionFlags.STAFF_MODIFY_SECOND_FACTORS,
  STAFF_SESSIONS = PermissionFlags.STAFF_READ_SESSIONS |
    PermissionFlags.STAFF_MODIFY_SESSIONS,
  STAFF_FILES = PermissionFlags.STAFF_READ_FILES |
    PermissionFlags.STAFF_MODIFY_FILES,
  STAFF_ONLY = PermissionFlags.STAFF_MODIFY_DOMAINS |
    PermissionFlags.STAFF_MODIFY_INSTRUCTIONS |
    PermissionFlags.STAFF_MODIFY_KILLSWITCHES |
    PermissionFlags.STAFF_MODIFY_LOGLEVEL,
}

export enum LogLevel {
  NONE = 'NONE',
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
}

export enum InstructionStepActions {
  OPEN_URL = 'OPEN_URL',
  COPY_TOKEN_TO_CLIPBOARD = 'COPY_TOKEN_TO_CLIPBOARD',
  DOWNLOAD_CONFIG_FILE = 'DOWNLOAD_CONFIG_FILE',
  NOOP = 'NOOP',
}
