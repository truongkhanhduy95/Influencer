import {BaseException} from './base.exception';

export class AppException extends BaseException {}
export class ServiceException extends BaseException {}
export class AuthenticateException extends BaseException {}
export class InvalidArgumentException extends BaseException {}
export class RuntimeException extends BaseException {}
export class ValidateException extends BaseException {}
export class UserUndefinedException extends BaseException {}

export enum ErrorTranslate {
  ParentAldreadyHaveItem = 555,
  EntityNotFound = 556,
  UpdateFailed = 557,
  DeleteFailed = 558,
  CanNotModifyDefaultData = 559,
  AttachmentNotFound = 560,
  CanNotDeleteRoleAttached = 561,
}
