/* eslint-disable lines-between-class-members */
export default class Logger {
  static shouldLog = !process.env.NODE_ENV !== 'prod';
  static printer = console; // for testing
  static colorConfig = [`%c cl says: `, 'background: #222; color: #4286f4'];

  static logMethod = (level, ...args) => {
    if (!Logger.shouldLog) return;
    if (level === 'table') Logger.printer[level](...args);
    else Logger.printer[level](...Logger.colorConfig, ...args);
  }

  static log = (...args) => Logger.logMethod('log', ...args);
  static info = (...args) => Logger.logMethod('info', ...args);
  static warn = (...args) => Logger.logMethod('warn', ...args);
  static error = (...args) => Logger.logMethod('error', ...args);
  static table = (...args) => Logger.logMethod('table', ...args);
}
