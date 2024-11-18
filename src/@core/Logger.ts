const LoggerPrefix = "[WALLETAYA]";
class Logger {
  static verbose = 1;

  static COLORS = {
    reset: "\x1b[0m",
    blue: "\x1b[34m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    orange: "\x1b[33m",
    green: "\x1b[32m",
  };

  static info(message: string | Error, ...variables: any[]) {
    console.info(
      `${this.COLORS.blue}${LoggerPrefix}[INFO] ${message}`,
      ...variables,
      `${this.COLORS.reset}`
    );
  }

  static log(message: string | Error, ...variables: any[]) {
    console.log(
      `${this.COLORS.yellow}${LoggerPrefix}[LOG] ${message}`,
      ...variables,
      `${this.COLORS.reset}`
    );
  }

  static error(message: string | Error, ...variables: any[]) {
    console.error(
      `${this.COLORS.red}${LoggerPrefix}[ERROR] ${message}`,
      message instanceof Error && message.stack ? message.stack : "",
      ...variables,
      `${this.COLORS.reset}`
    );
  }

  static warning(message: string | Error, ...variables: any[]) {
    console.warn(
      `${this.COLORS.orange}${LoggerPrefix}[WARNING] ${message}`,
      ...variables,
      `${this.COLORS.reset}`
    );
  }

  static success(message: string | Error, ...variables: any[]) {
    console.info(
      `${this.COLORS.green}${LoggerPrefix}[SUCCESS] ${message}`,
      ...variables,
      `${this.COLORS.reset}`
    );
  }
}
export default Logger;
