const ConsoleHandler = require('./handlers/ConsoleHandler');
const FileHandler = require('./handlers/FileHandler');
const LogParser = require('./parsers/LogParser');

class Logger {
  constructor() {
    this.consoleHandler = new ConsoleHandler();
    this.fileHandler = new FileHandler();
  }

  log(message) {
    const parsedMessage = LogParser.parse(message);
    this.consoleHandler.handle(parsedMessage);
    this.fileHandler.handle(parsedMessage);
  }
}

module.exports = Logger;
