import fs from 'fs';
import logger from '../utils/logger';

export const registerAll = (server) => {
  // Dynamically resolve all routes (ignore dotfiles)
  fs.readdirSync(__dirname)
  .filter(file => !file.startsWith('.') && file.endsWith('.js'))
  .forEach(file => {
    logger.info('register route', file);
    require(__dirname.concat('/').concat(file)).default(server);
  });
};

export default server => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hello from <%= appName %>');
    },
    config: {
      tags: ['api'],
      validate: {
        params: {},
        query: {},
      },
      response: {
        // schema: <%= routeName %>Schema,
      },
    },
  });
}
