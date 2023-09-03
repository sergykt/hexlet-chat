const apiPath = process.env.NODE_ENV === 'production' ? 'https://hexlet-chat-fastify.onrender.com/api/v1' : '/api/v1';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  dataPath: () => [apiPath, 'data'].join('/'),
  createUserPath: () => [apiPath, 'signup'].join('/'),
};

export default routes;
