import { Socket } from "socket.io";
import http from "http"
const express =  require('express')
const {join} =  require('node:path')
const {Server} = require('socket.io')
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection',(socket: Socket)=>{
    console.log('a user connected')
})
app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000');
})