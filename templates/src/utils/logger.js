import bunyan from 'bunyan';
import { LOG_LEVEL } from '../config';

const logger = bunyan.createLogger({
  name: '<%= appNameSlug %>',
  level: LOG_LEVEL,
});

export default logger;

