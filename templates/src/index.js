require('babel-register');
const Server = require('./server').default;

(new Server()).start();
