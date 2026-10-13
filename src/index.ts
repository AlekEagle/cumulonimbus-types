import { Errors, Successes } from './responses.js';

export type SecondFactorType = 'totp' | 'webauthn';

namespace Structures {
  /**
   * It's a user!
   */
  export interface User {
    id: string;
    username: string;
    email: string;
    staff: boolean;
    domain: string;
    subdomain: string | null;
    verifiedAt: string | null;
    bannedAt: string | null;
    twoFactorBackupCodeUsedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }

  /**
   * Session associated with a user.
   */
  export interface Session {
    id: number;
    exp: string;
    name: string;
    permissionFlags: number | null;
    usedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }

  /**
   * Returned from endpoints with pagination.
   */
  export interface List<T> {
    count: number;
    items: T[];
  }

  /**
   * Generic success response!
   */
  export type Success<T extends keyof Successes = keyof Successes> = {
    [K in keyof Successes[T]]: Successes[T][K];
  };

  export interface Instruction {
    id: string;
    name: string;
    description: string;
    steps: string[];
    filename: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface Domain {
    id: string;
    subdomains: boolean;
    createdAt: string;
    updatedAt: string;
  }

  /**
   * Uh oh! You did a bad. Don't do that!
   */
  export type Error<T extends keyof Errors = keyof Errors> = {
    [K in keyof Errors[T]]: Errors[T][K];
  };

  export interface SuccessfulAuth {
    token: string;
    exp: string;
  }

  export interface SecondFactor {
    id: string;
    name: string;
    type: SecondFactorType;
    usedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }

  export interface SecondFactorChallenge {
    token: string;
    exp: string;
    types: (SecondFactorType | 'backup')[];
  }

  export interface SecondFactorBaseRegistration {
    token: string;
    exp: string;
    type: SecondFactorType;
  }

  export interface SecondFactorTOTPRegistration extends SecondFactorBaseRegistration {
    type: 'totp';
    secret: string;
    algorithm: string;
    digits: number;
    period: number;
  }

  export interface SecondFactorWebAuthnRegistration
    extends
      SecondFactorBaseRegistration,
      PublicKeyCredentialCreationOptionsJSON {
    type: 'webauthn';
  }

  export type SecondFactorRegistration =
    SecondFactorTOTPRegistration | SecondFactorWebAuthnRegistration;

  export interface File {
    id: string;
    name: string;
    userID: string;
    size: number;
    createdAt: string;
    updatedAt: string;
  }

  export interface SuccessfulUpload {
    url: string;
    thumbnail: string;
    manage: string;
  }

  export interface KillSwitch {
    id: number;
    name: string;
    state: boolean;
  }

  export interface SecondFactorRegisterSuccess {
    id: string;
    name: string;
    type: SecondFactorType;
    codes?: string[];
  }

  export interface SecondFactorBackupRegisterSuccess {
    codes: string[];
  }

  export interface ScopedSessionCreate extends Session {
    token: string;
  }

  export interface LogLevel {
    name: string;
  }
}

export { Errors, Successes } from './responses.js';
export default Structures;
