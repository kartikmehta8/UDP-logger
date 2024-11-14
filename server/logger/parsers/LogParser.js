const moment = require('moment');
const { LOG_FORMAT } = require('../../config');

class LogParser {
  static parse(message) {
    const [level, ...msgParts] = message.split(':');
    return {
      timestamp: moment().format(LOG_FORMAT),
      level: level.trim(),
      message: msgParts.join(':').trim(),
    };
  }
}

module.exports = LogParser;
