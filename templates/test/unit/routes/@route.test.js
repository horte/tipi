var Hapi = require('hapi');
var Domain = require('domain');

var domain = Domain.createDomain();
domain.run(function () {

  var server = new Hapi.Server(8080);
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {

      reply('hello world');
    }
  });

  server.inject({ method: 'GET', url: '/' }, function (res) {

    throw new Error('Never shown');
    console.log(res.result);
  });
});
//describe('<%= routeName %>', () => {
//  describe('GET /<%= routeName %>', () => {
//    it('should reply with status 200', (done) => {
//
//    });
//  });
//});