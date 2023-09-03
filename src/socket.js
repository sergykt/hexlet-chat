import { io } from 'socket.io-client';

const URL = 'https://hexlet-chat-fastify.onrender.com';

const socket = io(URL);

export default socket;
