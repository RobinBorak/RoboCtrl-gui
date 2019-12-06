import io from 'socket.io-client';

const socket = io('http://localhost:666');

const SocketUtils = {
	socket: socket,
	key: 'kittens'
};

export default SocketUtils;
