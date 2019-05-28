export interface ILogger {
  log();
}

export class BaseLogger implements ILogger {
  log() {
    console.log('Base logger');
  }
}

export class ConsoleLogger extends BaseLogger {
  log() {
    console.log('Console logger');
  }
}

export class DbLogger extends BaseLogger {
  log() {
    console.log('Database logger');
  }
}
