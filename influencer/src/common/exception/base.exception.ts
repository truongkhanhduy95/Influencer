interface IExtendedError {
  mame: string
  message: string
  code: string
  status: number
  stack?: string
}

class ErrorResponse {
  Message: string
  Code: string
  Status: string
  Stack?: string
}

interface BaseException extends IExtendedError { }

class BaseException extends Error {
  constructor(message: string, code: number = 1000, status: number = 500) {
    super(message);

    Object.defineProperty(this, 'code', {
      configurable: true,
      enumerable: false,
      value: code,
      writable: true
    });

    Object.defineProperty(this, 'name', {
      configurable: true,
      enumerable: false,
      value: this.constructor.name,
      writable: true,
    });

    /**
     * Update the stack trace
     */
    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(this, this.constructor)
      return
    }

    Object.defineProperty(this, 'stack', {
      configurable: true,
      enumerable: false,
      value: (new Error(message)).stack,
      writable: true,
    });

    Object.defineProperty(this, 'status', {
      configurable: true,
      enumerable: false,
      value: status,
      writable: true,
    });
  }

  toObject() {
    const isDev = process.env.NODE_ENV === 'development';

    let exception = new ErrorResponse();
    exception.Code = this.code;
    exception.Message = this.message;
    exception.Status = this.status ? this.status.toString() : '';

    if (isDev) {
      exception.Stack = this.stack;
    }

    return exception;
  }
}

export { BaseException }
