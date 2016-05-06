export default server => {
  server.route({
    method: 'GET',
    path: '/<%= routeName %>',
    handler: (request, reply) => {
      reply('Hello from <%= routeName %>');
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