class ConsoleHandler {
  handle(logMessage) {
    console.log(
      `[${logMessage.timestamp}] ${logMessage.level}: ${logMessage.message}`
    );
  }
}

module.exports = ConsoleHandler;
