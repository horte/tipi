import Hapi from 'hapi';
import inert from 'inert';
import h2o2 from 'h2o2';
import { SERVER_HOST, SERVER_PORT } from './config';
import logger from './utils/logger';
import * as routes from './routes';

export default class Server {

  constructor() {
    // Save a reference to this for callbacks
    this.server = new Hapi.Server();
  }

  _setupConnection() {
    this.server.connection({
      host: SERVER_HOST,
      port: SERVER_PORT,
      labels: ['web'],
    });
  }

  _registerPlugins(done) {
    this.server.register([
      h2o2,
      inert,
    ],
    (err) => {
      if (err) {
        throw err;
      }
      done();
    });
  }

  _registerRoutes() {
    routes.registerAll(this.server);
  }

  start() {
    this._setupConnection();

    this._registerPlugins(() => {
      this._registerRoutes();

      this.server.start(() => {
        logger.info('==> Server is listening.');
        this.server.connections.forEach(connection => {
          logger.info('==>', connection.settings.labels, connection.info.uri);
        });
      });
    });
  }
}