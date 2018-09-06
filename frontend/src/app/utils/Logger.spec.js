import Logger from './Logger';

describe('Logger', () => {
  beforeEach(() => {
    Logger.shouldLog = true;
    Logger.printer = {
      log: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
      table: jest.fn(),
    };
  });

  it('should log with all logging methods', () => {
    const data = 'well hello..';
    Logger.log(data);
    expect(Logger.printer.log).toHaveBeenCalledWith(...Logger.colorConfig, data);
    Logger.info(data);
    expect(Logger.printer.info).toHaveBeenCalledWith(...Logger.colorConfig, data);
    Logger.warn(data);
    expect(Logger.printer.warn).toHaveBeenCalledWith(...Logger.colorConfig, data);
    Logger.error(data);
    expect(Logger.printer.error).toHaveBeenCalledWith(...Logger.colorConfig, data);
    Logger.table(data);
    expect(Logger.printer.table).toHaveBeenCalledWith(data);
  });

  describe('shouldLog disabled', () => {
    beforeEach(() => {
      Logger.shouldLog = false;
    });

    it('should Not log any data', () => {
      const data = 'this is not going to be logged..';
      Logger.log(data);
      expect(Logger.printer.log).not.toHaveBeenCalled();
    });
  });

  afterAll(() => {
    Logger.shouldLog = false;
  });
});
