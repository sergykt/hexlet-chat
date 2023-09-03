const apiPath = 'https://hexlet-chat-fastify.onrender.com/api/v1';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  dataPath: () => [apiPath, 'data'].join('/'),
  createUserPath: () => [apiPath, 'signup'].join('/'),
};

export default routes;
