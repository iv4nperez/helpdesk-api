import dotenv from 'dotenv'
import Server from './models/server';

//configurar dotevn
dotenv.config();

const server = new Server();

server.listen();